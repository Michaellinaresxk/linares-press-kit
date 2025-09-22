import { tracks } from '@/const/tracks';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Pause, Play } from 'lucide-react';
import { useState } from 'react';

interface TrackPlayerProps {
  track: (typeof tracks)[0];
  isActive: boolean;
  onPlay: () => void;
  index: number;
}

function TrackPlayer({ track, isActive, onPlay, index }: TrackPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // @typescript-eslint/no-unused-vars

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    onPlay();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border transition-all duration-300 ${
        isActive
          ? 'border-purple-500/50 shadow-xl shadow-purple-500/20'
          : 'border-gray-700/50 hover:border-gray-600/50'
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Background gradient activo */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className='absolute inset-0 rounded-2xl'
          style={{
            background: `linear-gradient(45deg, ${track.waveformColor}20, transparent)`,
          }}
        />
      )}

      <div className='relative z-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
        {/* Cover art */}
        <div className='flex-shrink-0'>
          <img
            src={track.coverImage}
            alt={`${track.title} cover`}
            className='w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover shadow-lg'
            loading='lazy'
          />
        </div>

        {/* Track info y controles */}
        <div className='flex-1 min-w-0 w-full'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
            <div className='min-w-0 flex-1'>
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2'>
                <div className='min-w-0'>
                  <h3 className='text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors truncate'>
                    {track.title}
                  </h3>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {track.description}
                  </p>
                </div>
                <div className='flex items-center space-x-2 text-xs text-gray-500 mt-2 sm:mt-0 flex-shrink-0'>
                  <span className='bg-gray-700 px-2 py-1 rounded whitespace-nowrap'>
                    {track.genre}
                  </span>
                  <span>{track.year}</span>
                </div>
              </div>

              {/* Waveform visualización */}
              <div className='mb-3'>
                <div className='flex items-center h-6 md:h-8 space-x-1'>
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className='flex-1 rounded-full min-w-[2px]'
                      style={{
                        backgroundColor:
                          i < progress * 60 ? track.waveformColor : '#374151',
                        height: `${Math.random() * 80 + 20}%`,
                        minHeight: '3px',
                      }}
                      animate={
                        isPlaying
                          ? {
                              scaleY: [1, Math.random() * 1.5 + 0.5, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: Math.random() * 0.8 + 0.4,
                        repeat: isPlaying ? Infinity : 0,
                        repeatType: 'reverse',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className='flex items-center justify-between sm:justify-start sm:space-x-4 lg:flex-col lg:space-x-0 lg:space-y-2'>
              <div className='flex items-center space-x-3'>
                <motion.button
                  onClick={handlePlayPause}
                  className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause size={16} className='md:w-5 md:h-5' />
                  ) : (
                    <Play size={16} className='md:w-5 md:h-5 ml-0.5' />
                  )}
                </motion.button>

                <span className='text-gray-400 text-sm font-mono'>
                  {track.duration}
                </span>
              </div>

              <div className='flex items-center space-x-2'>
                <motion.button
                  className='p-2 text-gray-400 hover:text-white transition-colors'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title='Download'
                >
                  <Download size={16} />
                </motion.button>

                <motion.button
                  className='p-2 text-gray-400 hover:text-white transition-colors'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title='Open in Spotify'
                >
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default TrackPlayer;
