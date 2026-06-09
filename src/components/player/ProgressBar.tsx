import { motion } from 'framer-motion';
import { useMemo, useRef, useState, useCallback } from 'react';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  formatTime: (seconds: number) => string;
  isLoading?: boolean;
}

function defaultFormatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

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

  const safeDuration = Math.max(0, duration);
  const safeCurrentTime = Math.max(0, Math.min(currentTime, safeDuration));
  const progress =
    safeDuration > 0 ? (safeCurrentTime / safeDuration) * 100 : 0;

  const safeFormatTime = useCallback(
    (seconds: number): string => {
      try {
        if (typeof formatTime !== 'function') return defaultFormatTime(seconds);
        return formatTime(seconds);
      } catch {
        return defaultFormatTime(seconds);
      }
    },
    [formatTime],
  );

  const calculateTimeFromPosition = useCallback(
    (clientX: number): number => {
      if (!progressBarRef.current) return safeCurrentTime;
      const rect = progressBarRef.current.getBoundingClientRect();
      const clampedPercent = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width),
      );
      return clampedPercent * safeDuration;
    },
    [safeDuration, safeCurrentTime],
  );

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLoading || safeDuration === 0) return;
    onSeek(calculateTimeFromPosition(e.clientX));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLoading || safeDuration === 0) return;
    setIsDragging(true);

    const handleMouseMove = (ev: MouseEvent) =>
      onSeek(calculateTimeFromPosition(ev.clientX));

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isLoading || safeDuration === 0) return;
    setIsDragging(true);

    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 0)
        onSeek(calculateTimeFromPosition(ev.touches[0].clientX));
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSeek(parseFloat(e.target.value));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isLoading || safeDuration === 0) return;
    const STEP = 5;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onSeek(Math.max(0, safeCurrentTime - STEP));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onSeek(Math.min(safeDuration, safeCurrentTime + STEP));
    }
  };

  const displayTimes = useMemo(
    () => ({
      current: safeFormatTime(safeCurrentTime),
      total: safeFormatTime(safeDuration),
    }),
    [safeCurrentTime, safeDuration, safeFormatTime],
  );

  return (
    <div className='px-4 space-y-2'>
      {/* Input invisible para screen readers */}
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

      {/* Barra visual */}
      <div
        ref={progressBarRef}
        className={`relative w-full h-2 rounded-full overflow-hidden group transition-all ${
          isLoading
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer hover:h-3'
        }`}
        style={{ background: 'rgba(255,255,255,0.1)' }}
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
        {/* Fill */}
        <motion.div
          className='h-full rounded-full'
          style={{ background: 'linear-gradient(to right, #378add, #185fa5)' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />

        {/* Thumb */}
        <motion.div
          className='absolute top-1/2 w-4 h-4 rounded-full shadow-lg -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'
          style={{
            left: `calc(${progress}% - 8px)`,
            background: '#c8dcea',
          }}
          whileHover={{ scale: 1.2 }}
          animate={isDragging ? { scale: 1.3 } : { scale: 1 }}
        />
      </div>

      {/* Tiempos */}
      <div
        className='flex justify-between text-sm font-mono'
        style={{ color: '#5a7a8e' }}
      >
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

export default ProgressBar;
