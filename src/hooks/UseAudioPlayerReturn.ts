import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Estado de reproducción de audio
 */
interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLoading: boolean;
  error: string | null;
}

/**
 * Interfaz pública del hook
 */
interface UseAudioPlayerReturn extends AudioPlayerState {
  togglePlay: () => void;
  pause: () => void;
  play: () => void;
  seek: (time: number) => void;
  formatTime: (seconds: number) => string;
}

/**
 * Hook para reproducción de audio con soporte completo
 *
 * ✅ CARACTERÍSTICAS:
 * - Maneja elemento HTMLAudioElement real
 * - Actualiza currentTime en tiempo real
 * - Proporciona control total (play, pause, seek)
 * - Manejo robusto de errores
 * - Formateo automático de tiempo
 * - Limpieza automática de event listeners
 *
 * ⚠️ IMPORTANTE: Este hook debe usarse SOLAMENTE para reproducción de audio real.
 *    Para manejar estados simples (ej: lista de colaboraciones), usa useAudioPlayer.ts
 *
 * @param audioUrl - URL del archivo de audio
 * @returns Estado y métodos de control
 *
 * @example
 * ```tsx
 * const { isPlaying, currentTime, duration, error, togglePlay, seek } =
 *   useAudioPlayerFeatured('https://example.com/song.mp3');
 *
 * return (
 *   <>
 *     <button onClick={togglePlay}>
 *       {isPlaying ? 'Pause' : 'Play'}
 *     </button>
 *     <div>{formatTime(currentTime)} / {formatTime(duration)}</div>
 *   </>
 * );
 * ```
 */
export function useAudioPlayerFeatured(audioUrl: string): UseAudioPlayerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isLoading: false,
    error: null,
  });

  /**
   * Inicializar elemento de audio y cargar archivo
   * Se ejecuta UNA SOLA VEZ por URL
   */
  useEffect(() => {
    // Validar URL
    if (!audioUrl || typeof audioUrl !== 'string') {
      const errorMsg = 'URL de audio inválida o no proporcionada';
      console.error('[AudioPlayer]', errorMsg, { audioUrl });
      setState((prev) => ({
        ...prev,
        error: errorMsg,
      }));
      return;
    }

    // Crear elemento audio si no existe
    if (!audioRef.current) {
      const audio = new Audio();
      audio.crossOrigin = 'anonymous';
      audioRef.current = audio;
    }

    const audio = audioRef.current;
    audio.src = audioUrl;

    console.log('[AudioPlayer] 🎵 Cargando:', audioUrl);

    // HANDLERS DE EVENTOS
    const handleLoadStart = () => {
      console.log('[AudioPlayer] 📥 Descargando...');
      setState((prev) => ({
        ...prev,
        isLoading: true,
        error: null,
      }));
    };

    const handleCanPlay = () => {
      console.log('[AudioPlayer] ✅ Audio listo para reproducir');
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    };

    const handleTimeUpdate = () => {
      setState((prev) => ({
        ...prev,
        currentTime: audio.currentTime || 0,
      }));
    };

    const handleDurationChange = () => {
      const duration = audio.duration || 0;
      console.log('[AudioPlayer] ⏱️ Duración:', formatTime(duration));
      setState((prev) => ({
        ...prev,
        duration,
      }));
    };

    const handlePlaying = () => {
      console.log('[AudioPlayer] ▶️ Reproduciendo');
      setState((prev) => ({
        ...prev,
        isPlaying: true,
        isLoading: false,
      }));
    };

    const handlePause = () => {
      console.log('[AudioPlayer] ⏸️ Pausado');
      setState((prev) => ({
        ...prev,
        isPlaying: false,
      }));
    };

    const handleEnded = () => {
      console.log('[AudioPlayer] ⏹️ Reproducción finalizada');
      setState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
      }));
      audio.currentTime = 0;
    };

    const handleError = () => {
      const errorCode = audio.error?.code;
      const errorMap: Record<number, string> = {
        1: 'La carga fue cancelada',
        2: 'Error de conexión (verifica URL y CORS)',
        3: 'Archivo corrupto o inválido',
        4: 'Formato no soportado (requiere MP3)',
      };

      const errorMessage = errorMap[errorCode || 0] || 'Error desconocido';

      console.error('[AudioPlayer] ❌ Error:', {
        code: errorCode,
        message: audio.error?.message,
        url: audioUrl,
      });

      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
        isPlaying: false,
      }));
    };

    // REGISTRAR LISTENERS
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Iniciar carga
    audio.load();

    // CLEANUP
    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);

      audio.pause();
    };
  }, [audioUrl]);

  /**
   * Alternar reproducción/pausa
   */
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (state.isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('[AudioPlayer] Error al reproducir:', error);
          setState((prev) => ({
            ...prev,
            error: 'No se puede reproducir. Intenta de nuevo.',
            isPlaying: false,
          }));
        });
      }
    }
  }, [state.isPlaying]);

  /**
   * Reproducir
   */
  const play = useCallback(() => {
    if (!audioRef.current || state.isPlaying) return;

    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('[AudioPlayer] Error en play():', error);
        setState((prev) => ({
          ...prev,
          error: 'No se puede reproducir',
          isPlaying: false,
        }));
      });
    }
  }, [state.isPlaying]);

  /**
   * Pausar
   */
  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
  }, []);

  /**
   * Buscar a tiempo específico
   */
  const seek = useCallback(
    (time: number) => {
      if (!audioRef.current) return;

      const safeTime = Math.max(0, Math.min(time, state.duration));
      audioRef.current.currentTime = safeTime;

      console.log('[AudioPlayer] ⏩ Seek:', formatTime(safeTime));
    },
    [state.duration]
  );

  return {
    ...state,
    togglePlay,
    play,
    pause,
    seek,
    formatTime,
  };
}

/**
 * Formatear segundos a MM:SS
 * @param seconds Número de segundos
 * @returns String formateado "M:SS" o "MM:SS"
 */
function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) {
    return '0:00';
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
