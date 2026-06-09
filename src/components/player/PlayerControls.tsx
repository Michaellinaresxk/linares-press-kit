import { motion } from 'framer-motion';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  isLoading?: boolean;
}

function PlayerControls({
  isPlaying,
  onPlayToggle,
  onSkipBack,
  onSkipForward,
  isLoading = false,
}: PlayerControlsProps) {
  return (
    <div className='flex items-center justify-center space-x-6'>
      <motion.button
        className='p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        style={{ color: '#5a7a8e' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#c8dcea')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7a8e')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSkipBack}
        disabled={isLoading || !onSkipBack}
        aria-label='Skip backwards'
      >
        <SkipBack size={28} />
      </motion.button>

      {/* Botón play principal */}
      <motion.button
        onClick={onPlayToggle}
        disabled={isLoading}
        className='w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed'
        style={{
          background: '#1d4a72',
          border: '1px solid #378add',
          color: '#c8dcea',
        }}
        whileHover={{ scale: !isLoading ? 1.1 : 1 }}
        whileTap={{ scale: !isLoading ? 0.95 : 1 }}
        animate={
          isPlaying
            ? {
                boxShadow: [
                  '0 0 20px rgba(55,138,221,0.4)',
                  '0 0 40px rgba(55,138,221,0.7)',
                  '0 0 20px rgba(55,138,221,0.4)',
                ],
              }
            : { boxShadow: '0 0 0px rgba(55,138,221,0)' }
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
        className='p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        style={{ color: '#5a7a8e' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#c8dcea')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7a8e')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSkipForward}
        disabled={isLoading || !onSkipForward}
        aria-label='Skip forwards'
      >
        <SkipForward size={28} />
      </motion.button>
    </div>
  );
}

export default PlayerControls;
