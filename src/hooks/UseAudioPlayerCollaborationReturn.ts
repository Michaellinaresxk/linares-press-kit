import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Estado de reproducción para una colaboración
 */
interface AudioPlaybackState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLoading: boolean;
  error: string | null;
}

/**
 * Interfaz pública del hook
 */
interface UseAudioPlayerCollaborationReturn extends AudioPlaybackState {
  togglePlay: () => void;
  pause: () => void;
  play: () => void;
  seek: (time: number) => void;
  formatTime: (seconds: number) => string;
  reset: () => void;
}

/**
 * Hook para reproducción de audio en colaboraciones
 *
 * ✅ CARACTERÍSTICAS:
 * - Maneja elemento HTMLAudioElement real
 * - Actualiza currentTime en tiempo real
 * - Proporciona control total (play, pause, seek)
 * - Manejo robusto de errores
 * - Logging para debugging
 * - Reset automático al cambiar URL
 *
 * 🎯 USO: Para reproducir audio de UNA colaboración individual
 *    Contrasta con useAudioPlayer que maneja qué item está activo
 *
 * @param audioUrl - URL del archivo de audio (puede ser null)
 * @returns Estado y métodos de control
 *
 * @example
 * ```tsx
 * const { isPlaying, currentTime, duration, togglePlay, seek } =
 *   useAudioPlayerCollaboration(collaboration.audioUrl);
 *
 * return (
 *   <>
 *     <button onClick={togglePlay}>
 *       {isPlaying ? 'Pause' : 'Play'}
 *     </button>
 *   </>
 * );
 * ```
 */
export function useAudioPlayerCollaboration(
  audioUrl: string | null | undefined
): UseAudioPlayerCollaborationReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioPlaybackState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isLoading: false,
    error: null,
  });

  /**
   * Inicializar elemento de audio cuando cambia la URL
   */
  useEffect(() => {
    // Validar URL
    if (!audioUrl || typeof audioUrl !== 'string') {
      // URL inválida, resetear estado
      setState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        error: null,
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

    // Detener reproducción anterior
    audio.pause();
    audio.currentTime = 0;

    // Asignar nueva URL
    audio.src = audioUrl;

    console.log('[Collaboration Audio] 🎵 Cargando:', audioUrl);

    // HANDLERS DE EVENTOS
    const handleLoadStart = () => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
        error: null,
      }));
    };

    const handleCanPlay = () => {
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
      setState((prev) => ({
        ...prev,
        duration,
      }));
    };

    const handlePlaying = () => {
      setState((prev) => ({
        ...prev,
        isPlaying: true,
        isLoading: false,
      }));
    };

    const handlePause = () => {
      setState((prev) => ({
        ...prev,
        isPlaying: false,
      }));
    };

    const handleEnded = () => {
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
        1: 'Carga cancelada',
        2: 'Error de conexión',
        3: 'Archivo corrupto',
        4: 'Formato no soportado',
      };

      const errorMessage = errorMap[errorCode || 0] || 'Error desconocido';

      console.error('[Collaboration Audio] ❌ Error:', {
        code: errorCode,
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
          console.error('[Collaboration Audio] Error:', error);
          setState((prev) => ({
            ...prev,
            error: 'No se puede reproducir',
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
        console.error('[Collaboration Audio] Error en play():', error);
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
    },
    [state.duration]
  );

  /**
   * Resetear estado
   */
  const reset = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    setState({
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      isLoading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    togglePlay,
    play,
    pause,
    seek,
    formatTime,
    reset,
  };
}

/**
 * Formatear segundos a MM:SS
 */
function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) {
    return '0:00';
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
