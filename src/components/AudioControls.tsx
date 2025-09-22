import { collaborations } from '@/const/collaborations';
import { motion } from 'framer-motion';
import { Pause, Play, Square, Volume2 } from 'lucide-react';

const AudioControls = ({
  collaboration,
  isActive,
  isPlaying,
  onTogglePlay,
  onStop,
}: {
  collaboration: (typeof collaborations)[0];
  isActive: boolean;
  isPlaying: boolean;
  onTogglePlay: (id: number) => void;
  onStop: () => void;
}) => (
  <div className='flex items-center justify-between'>
    <div className='flex items-center space-x-3'>
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onTogglePlay(collaboration.id);
        }}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
          isActive && isPlaying
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-black hover:bg-gray-800'
        }`}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.98 }}
        style={{
          boxShadow:
            '0 4px 15px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {isActive && isPlaying ? (
          <Pause size={16} />
        ) : (
          <Play size={16} className='ml-0.5' />
        )}
      </motion.button>

      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onStop();
        }}
        className='w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 flex items-center justify-center text-gray-600 hover:text-red-600 transition-all duration-300 shadow-md'
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <Square size={14} />
      </motion.button>
    </div>

    <div className='flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full'>
      <Volume2 size={14} />
      <span className='font-medium'>{collaboration.duration}</span>
    </div>
  </div>
);

export default AudioControls;
