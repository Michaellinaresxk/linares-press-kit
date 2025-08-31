'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Download,
  ExternalLink,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react';

// Datos del nuevo single destacado
const featuredSingle = {
  id: 'featured',
  title: 'Upbeating',
  year: '2024',
  description: 'The latest evolution of progressive electronic fusion',
  coverImage:
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop',
  audioUrl: '/audio/upbeating.mp3',
  duration: 312, // 5:12 en segundos
  spotifyUrl: '#',
  downloadUrl: '#',
};

// Datos de las canciones adicionales
const tracks = [
  {
    id: 1,
    title: 'Eternal Circuits',
    duration: '4:23',
    description: 'Progressive metal meets electronic soundscapes',
    genre: 'Prog Metal',
    year: '2024',
    audioUrl: '/audio/track1.mp3',
    waveformColor: '#a855f7',
    coverImage:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Cultural Synthesis',
    duration: '3:45',
    description: 'International collaboration with world music elements',
    genre: 'World Fusion',
    year: '2024',
    audioUrl: '/audio/track2.mp3',
    waveformColor: '#06b6d4',
    coverImage:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Digital Dreams',
    duration: '5:18',
    description: 'Ambient textures with driving rhythmic elements',
    genre: 'Electronic',
    year: '2023',
    audioUrl: '/audio/track3.mp3',
    waveformColor: '#10b981',
    coverImage:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop',
  },
];

// Hook personalizado para el reproductor
function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

// Componente del reproductor hero
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
            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
              <motion.a
                href={featuredSingle.spotifyUrl}
                className='px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                <span>Stream on Spotify</span>
              </motion.a>

              <motion.a
                href={featuredSingle.downloadUrl}
                className='px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold flex items-center justify-center space-x-2 transition-all'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span>Download</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Función helper para formatear tiempo
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Componente del reproductor de tracks adicionales
interface TrackPlayerProps {
  track: (typeof tracks)[0];
  isActive: boolean;
  onPlay: () => void;
  index: number;
}

function TrackPlayer({ track, isActive, onPlay, index }: TrackPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

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

export default function Music() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleTrackPlay = (trackId: number) => {
    setActiveTrack(activeTrack === trackId ? null : trackId);
  };

  return (
    <>
      {/* Hero Section - Nuevo Single */}
      <FeaturedSinglePlayer />

      {/* Sección de tracks adicionales */}
      <section
        ref={containerRef}
        className='relative py-16 md:py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden'
      >
        {/* Background elements */}
        <div className='absolute inset-0 opacity-20'>
          <motion.div
            style={{ y }}
            className='absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500 rounded-full blur-3xl'
          />
          <motion.div
            style={{ y: y.get() * -1 }}
            className='absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-cyan-500 rounded-full blur-3xl'
          />
        </div>

        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className='text-center mb-12 md:mb-16'
          >
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 md:mb-6'>
              More Tracks
            </h2>
            <p className='text-gray-400 text-base md:text-lg max-w-3xl mx-auto px-4'>
              Explore the complete catalog featuring diverse compositions that
              showcase the evolution of progressive electronic music.
            </p>
          </motion.div>

          {/* Track listing */}
          <div className='space-y-4 md:space-y-6'>
            {tracks.map((track, index) => (
              <TrackPlayer
                key={track.id}
                track={track}
                isActive={activeTrack === track.id}
                onPlay={() => handleTrackPlay(track.id)}
                index={index}
              />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className='text-center mt-12 md:mt-16'
          >
            <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>
                Full Catalog Available
              </h3>
              <p className='text-gray-400 mb-6 text-sm md:text-base'>
                Stream all tracks on major platforms or download high-quality
                files for professional use.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <motion.button
                  className='px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Stream on Spotify
                </motion.button>
                <motion.button
                  className='px-6 md:px-8 py-3 border border-gray-600 hover:border-gray-500 rounded-lg text-white font-semibold hover:bg-gray-800/50 transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Demo Pack
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
