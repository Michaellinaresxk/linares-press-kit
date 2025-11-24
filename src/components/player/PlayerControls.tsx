import { motion } from 'framer-motion';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  isLoading?: boolean;
}

/**
 * Componente de controles reutilizable
 * Gestiona los botones de reproducción
 */
function PlayerControls({
  isPlaying,
  onPlayToggle,
  onSkipBack,
  onSkipForward,
  isLoading = false,
}: PlayerControlsProps) {
  const buttonClass =
    'p-3 text-white/70 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div className='flex items-center justify-center space-x-6'>
      <motion.button
        className={buttonClass}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSkipBack}
        disabled={isLoading}
        aria-label='Skip backwards'
      >
        <SkipBack size={28} />
      </motion.button>

      <motion.button
        onClick={onPlayToggle}
        disabled={isLoading}
        className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed'
        whileHover={{ scale: !isLoading ? 1.1 : 1 }}
        whileTap={{ scale: !isLoading ? 0.95 : 1 }}
        animate={
          isPlaying
            ? {
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause size={24} className='sm:w-7 sm:h-7' />
        ) : (
          <Play size={24} className='sm:w-7 sm:h-7 ml-1' />
        )}
      </motion.button>

      <motion.button
        className={buttonClass}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSkipForward}
        disabled={isLoading}
        aria-label='Skip forwards'
      >
        <SkipForward size={28} />
      </motion.button>
    </div>
  );
}
export default PlayerControls;
