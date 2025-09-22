import { featuredSingle } from '@/const/tracks';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Hook personalizado para el reproductor
function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Simular progreso del audio
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const newTime = prev + 1;
        if (newTime >= featuredSingle.duration) {
          setIsPlaying(false);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return {
    isPlaying,
    currentTime,
    duration: featuredSingle.duration,
    togglePlay,
    formatTime,
    setCurrentTime,
  };
}

function FeaturedSinglePlayer() {
  const { isPlaying, currentTime, duration, togglePlay, formatTime } =
    useAudioPlayer();
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className='relative pt-10 min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background con imagen de concierto */}
      <div className='absolute inset-0 z-0'>
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className='absolute inset-0 bg-black/70' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50' />
      </div>

      {/* Efectos de fondo animados */}
      <div className='absolute inset-0 z-10'>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl'
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'
      >
        {/* Badge "LISTEN" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='inline-block mb-4'
        >
          <span className='px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm tracking-widest'>
            LISTEN
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight'
        >
          NEW SINGLE
        </motion.h1>

        {/* Reproductor central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className='relative mx-auto max-w-md sm:max-w-lg md:max-w-xl'
        >
          {/* Cover art */}
          <div className='relative mb-8'>
            <motion.div
              animate={isPlaying ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className='relative'
            >
              <img
                src={featuredSingle.coverImage}
                alt={`${featuredSingle.title} cover`}
                className='w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-2xl shadow-2xl object-cover'
              />

              {/* Glow effect cuando está reproduciendo */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl -z-10'
                />
              )}
            </motion.div>
          </div>

          {/* Info de la canción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className='mb-8 text-center'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2'>
              {featuredSingle.title}
            </h2>
            <p className='text-gray-300 text-lg mb-2'>
              {featuredSingle.description}
            </p>
            <span className='text-purple-400 font-semibold'>
              {featuredSingle.year}
            </span>
          </motion.div>

          {/* Controles del reproductor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='space-y-6'
          >
            {/* Botones de control */}
            <div className='flex items-center justify-center space-x-6'>
              <motion.button
                className='p-3 text-white/70 hover:text-white transition-colors'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkipBack size={28} />
              </motion.button>

              <motion.button
                onClick={togglePlay}
                className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-2xl'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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
              >
                {isPlaying ? (
                  <Pause size={24} className='sm:w-7 sm:h-7' />
                ) : (
                  <Play size={24} className='sm:w-7 sm:h-7 ml-1' />
                )}
              </motion.button>

              <motion.button
                className='p-3 text-white/70 hover:text-white transition-colors'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkipForward size={28} />
              </motion.button>
            </div>

            {/* Barra de progreso */}
            <div className='px-4'>
              <div className='relative'>
                <div className='w-full h-2 bg-white/20 rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'
                    style={{ width: `${progress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <motion.div
                  className='absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-lg -translate-y-1/2 cursor-pointer'
                  style={{ left: `calc(${progress}% - 8px)` }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Tiempos */}
              <div className='flex justify-between text-white/70 text-sm mt-2 font-mono'>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-20'>
              <motion.a
                href={featuredSingle.spotifyUrl}
                className='px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                <span>Stream on Spotify</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FeaturedSinglePlayer;
