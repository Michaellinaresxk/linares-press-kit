import { motion } from 'framer-motion';
import { useMemo, useRef, useState, useCallback } from 'react';

/**
 * Props de la barra de progreso
 */
interface ProgressBarProps {
  /**
   * Tiempo actual de reproducción en segundos
   */
  currentTime: number;

  /**
   * Duración total del audio en segundos
   */
  duration: number;

  /**
   * Callback cuando el usuario busca un nuevo tiempo
   */
  onSeek: (time: number) => void;

  /**
   * Función para formatear tiempo (MM:SS)
   * Es requerida - debe venir del hook useAudioPlayer
   */
  formatTime: (seconds: number) => string;

  /**
   * Si el audio está siendo cargado
   * Desactiva interacción
   */
  isLoading?: boolean;
}

/**
 * Barra de progreso interactiva
 *
 * Características:
 * - Click para buscar
 * - Drag para buscar continuo
 * - Touch support para mobile
 * - Arrow keys para navegación
 * - Screen reader compatible
 * - Validación segura de valores
 * - Manejo seguro de formatTime
 *
 * @example
 * ```tsx
 * const { currentTime, duration, seek, formatTime } = useAudioPlayer(url);
 *
 * <ProgressBar
 *   currentTime={currentTime}
 *   duration={duration}
 *   onSeek={seek}
 *   formatTime={formatTime}
 *   isLoading={false}
 * />
 * ```
 */
export function ProgressBar({
  currentTime,
  duration,
  onSeek,
  formatTime,
  isLoading = false,
}: ProgressBarProps) {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Validar y sanitizar valores
  const safeDuration = Math.max(0, duration);
  const safeCurrentTime = Math.max(0, Math.min(currentTime, safeDuration));
  const progress =
    safeDuration > 0 ? (safeCurrentTime / safeDuration) * 100 : 0;

  /**
   * Valida que formatTime sea una función
   */
  const safeFormatTime = useCallback(
    (seconds: number): string => {
      try {
        if (typeof formatTime !== 'function') {
          console.warn('formatTime is not a function, using default format');
          return defaultFormatTime(seconds);
        }
        return formatTime(seconds);
      } catch (error) {
        console.error('Error in formatTime:', error);
        return defaultFormatTime(seconds);
      }
    },
    [formatTime]
  );

  /**
   * Calcula el tiempo desde una posición X en el DOM
   */
  const calculateTimeFromPosition = useCallback(
    (clientX: number): number => {
      if (!progressBarRef.current) return safeCurrentTime;

      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPercent = (clientX - rect.left) / rect.width;
      const clampedPercent = Math.max(0, Math.min(1, clickPercent));

      return clampedPercent * safeDuration;
    },
    [safeDuration, safeCurrentTime]
  );

  /**
   * Handler para click en la barra
   */
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLoading || safeDuration === 0) return;

    const newTime = calculateTimeFromPosition(e.clientX);
    onSeek(newTime);
  };

  /**
   * Handler para mouse down (inicio de drag)
   */
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLoading || safeDuration === 0) return;

    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newTime = calculateTimeFromPosition(moveEvent.clientX);
      onSeek(newTime);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  /**
   * Handler para touch start (mobile)
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isLoading || safeDuration === 0) return;

    setIsDragging(true);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (moveEvent.touches.length > 0) {
        const newTime = calculateTimeFromPosition(moveEvent.touches[0].clientX);
        onSeek(newTime);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  /**
   * Handler para input range (accesibilidad)
   */
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    onSeek(newTime);
  };

  /**
   * Handler para teclado (arrow keys)
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isLoading || safeDuration === 0) return;

    const STEP = 5; // segundos

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        onSeek(Math.max(0, safeCurrentTime - STEP));
        break;
      case 'ArrowRight':
        e.preventDefault();
        onSeek(Math.min(safeDuration, safeCurrentTime + STEP));
        break;
    }
  };

  // Memoizar cálculos de tiempos
  const displayTimes = useMemo(
    () => ({
      current: safeFormatTime(safeCurrentTime),
      total: safeFormatTime(safeDuration),
    }),
    [safeCurrentTime, safeDuration, safeFormatTime]
  );

  return (
    <div className='px-4 space-y-2'>
      {/* Input range invisible para screen readers */}
      <input
        ref={inputRef}
        type='range'
        min='0'
        max={safeDuration || 0}
        value={safeCurrentTime}
        onChange={handleRangeChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading || safeDuration === 0}
        className='absolute opacity-0 w-0 h-0'
        aria-label='Audio progress slider'
      />

      {/* Barra visual interactiva */}
      <div
        ref={progressBarRef}
        className={`relative w-full h-2 bg-white/20 rounded-full overflow-hidden group transition-all ${
          isLoading
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer hover:h-3'
        }`}
        onClick={handleProgressClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        role='progressbar'
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label='Audio progress'
        aria-disabled={isLoading || safeDuration === 0}
      >
        {/* Barra de progreso animada */}
        <motion.div
          className='h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />

        {/* Indicador visual (thumb) */}
        <motion.div
          className='absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-lg -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'
          style={{ left: `calc(${progress}% - 8px)` }}
          whileHover={{ scale: 1.2 }}
          animate={isDragging ? { scale: 1.3 } : { scale: 1 }}
        />
      </div>

      {/* Tiempos con formato semántico */}
      <div className='flex justify-between text-white/70 text-sm font-mono'>
        <time dateTime={`PT${Math.floor(safeCurrentTime)}S`}>
          {displayTimes.current}
        </time>
        <time dateTime={`PT${Math.floor(safeDuration)}S`}>
          {displayTimes.total}
        </time>
      </div>
    </div>
  );
}

/**
 * Función por defecto para formatear tiempo
 * Se usa como fallback si formatTime no funciona
 */
function defaultFormatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default ProgressBar;
