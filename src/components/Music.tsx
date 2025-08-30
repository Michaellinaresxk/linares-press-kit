'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Pause, Download, ExternalLink } from 'lucide-react';

// Datos de las canciones - reemplaza con tus datos reales
const tracks = [
  {
    id: 1,
    title: 'Eternal Circuits',
    duration: '4:23',
    description: 'Progressive metal meets electronic soundscapes',
    genre: 'Prog Metal',
    year: '2024',
    audioUrl: '/audio/track1.mp3', // Reemplaza con tus archivos
    waveformColor: '#a855f7',
    coverImage: '/images/cover1.jpg',
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
    coverImage: '/images/cover2.jpg',
  },
  {
    id: 3,
    title: 'Hotel Nights',
    duration: '5:12',
    description: 'Ambient textures inspired by global venues',
    genre: 'Ambient Prog',
    year: '2023',
    audioUrl: '/audio/track3.mp3',
    waveformColor: '#ec4899',
    coverImage: '/images/cover3.jpg',
  },
  {
    id: 4,
    title: 'Transcendence',
    duration: '6:18',
    description: 'Epic journey through sound and emotion',
    genre: 'Prog Epic',
    year: '2023',
    audioUrl: '/audio/track4.mp3',
    waveformColor: '#10b981',
    coverImage: '/images/cover4.jpg',
  },
];

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
      className={`group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
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

      <div className='relative z-10 flex items-center space-x-4'>
        {/* Cover art placeholder */}
        <div className='flex-shrink-0'>
          <div
            className='w-16 h-16 rounded-lg bg-gradient-to-br shadow-lg flex items-center justify-center'
            style={{
              background: `linear-gradient(135deg, ${track.waveformColor}, ${track.waveformColor}80)`,
            }}
          >
            <span className='text-white font-bold text-lg'>{track.id}</span>
          </div>
        </div>

        {/* Track info */}
        <div className='flex-1 min-w-0'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h3 className='text-xl font-bold text-white group-hover:text-purple-300 transition-colors'>
                {track.title}
              </h3>
              <p className='text-gray-400 text-sm'>{track.description}</p>
            </div>
            <div className='flex items-center space-x-2 text-xs text-gray-500'>
              <span className='bg-gray-700 px-2 py-1 rounded'>
                {track.genre}
              </span>
              <span>{track.year}</span>
            </div>
          </div>

          {/* Waveform visualización (placeholder) */}
          <div className='mb-3'>
            <div className='flex items-center h-8 space-x-1'>
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className='flex-1 rounded-full'
                  style={{
                    backgroundColor:
                      i < progress * 40 ? track.waveformColor : '#374151',
                    height: `${Math.random() * 100 + 20}%`,
                    minHeight: '4px',
                  }}
                  animate={
                    isPlaying
                      ? {
                          scaleY: [1, Math.random() * 1.5 + 0.5, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: Math.random() * 0.5 + 0.5,
                    repeat: isPlaying ? Infinity : 0,
                    repeatType: 'reverse',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <motion.button
                onClick={handlePlayPause}
                className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause size={16} />
                ) : (
                  <Play size={16} className='ml-0.5' />
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
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -1 }}
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl'
        />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6'>
            Music & Demos
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto'>
            Experience the evolution of Linarex through these carefully crafted
            compositions. Each track represents a different facet of my musical
            journey and production style.
          </p>
        </motion.div>

        {/* Track listing */}
        <div className='space-y-6'>
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
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Full Catalog Available
            </h3>
            <p className='text-gray-400 mb-6'>
              Stream all tracks on major platforms or download high-quality
              files for professional use.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Stream on Spotify
              </motion.button>
              <motion.button
                className='px-8 py-3 border border-gray-600 rounded-lg text-white font-semibold hover:bg-gray-800/50'
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
  );
}
