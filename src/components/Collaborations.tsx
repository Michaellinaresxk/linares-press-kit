'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, Square, Music, Users, Calendar } from 'lucide-react';

// Datos de las colaboraciones
const collaborations = [
  {
    id: 1,
    title: 'Midnight Frequencies',
    collaborator: 'Elena Vasquez',
    role: 'Vocalist',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
    genre: 'Electronic Pop',
    duration: '3:42',
  },
  {
    id: 2,
    title: 'Urban Synthesis',
    collaborator: 'Marcus Chen',
    role: 'Producer',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop',
    color: 'from-orange-400 to-red-500',
    genre: 'Hip Hop Fusion',
    duration: '4:15',
  },
  {
    id: 3,
    title: 'Acoustic Reflections',
    collaborator: 'Sarah Morrison',
    role: 'Guitarist',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=600&fit=crop',
    color: 'from-gray-600 to-gray-800',
    genre: 'Folk Electronic',
    duration: '5:23',
  },
];

// Hook para el reproductor de audio
function useAudioPlayer() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (collabId: number) => {
    if (playingId === collabId) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingId(collabId);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    setIsPlaying(false);
    setPlayingId(null);
  };

  return {
    playingId,
    isPlaying,
    togglePlay,
    stopAudio,
  };
}

// Componente individual de colaboración
interface CollaborationCardProps {
  collaboration: (typeof collaborations)[0];
  index: number;
  playingId: number | null;
  isPlaying: boolean;
  onTogglePlay: (id: number) => void;
  onStop: () => void;
}

function CollaborationCard({
  collaboration,
  index,
  playingId,
  isPlaying,
  onTogglePlay,
  onStop,
}: CollaborationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const isActive = playingId === collaboration.id;

  const handleCardClick = () => {
    if (!showControls) {
      setShowControls(true);
    }
  };

  const handleCloseControls = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowControls(false);
    if (isActive) {
      onStop();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      viewport={{ once: true, margin: '-50px' }}
      className='group relative h-80 md:h-96'
      style={{ perspective: '1000px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <motion.div
        className='relative w-full h-full cursor-pointer'
        onClick={handleCardClick}
        animate={{
          rotateY: showControls ? -25 : 0,
          x: showControls ? 20 : 0,
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.6,
        }}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'left center',
        }}
      >
        {/* Card Front */}
        <div className='relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200'>
          {/* Cover Image */}
          <div className='relative h-full'>
            <img
              src={collaboration.image}
              alt={`${collaboration.title} collaboration`}
              className='w-full h-full object-cover'
              loading='lazy'
            />

            {/* Gradient Overlay - Bottom */}
            <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />

            {/* Content Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white'>
              <div className='flex items-center space-x-2 text-xs md:text-sm text-white/80 mb-2'>
                <Users size={14} />
                <span>Collaboration</span>
                <span>•</span>
                <span>{collaboration.year}</span>
              </div>

              <h3 className='font-bold text-lg md:text-xl mb-1 leading-tight'>
                {collaboration.title}
              </h3>

              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2'>
                <p className='text-white/90 text-sm md:text-base'>
                  feat.{' '}
                  <span className='font-semibold'>
                    {collaboration.collaborator}
                  </span>
                </p>
                <span className='text-white/70 text-xs md:text-sm'>
                  {collaboration.role} • {collaboration.genre}
                </span>
              </div>
            </div>

            {/* Playing Indicator */}
            {isActive && isPlaying && (
              <motion.div
                className='absolute top-4 right-4'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className='bg-white/20 backdrop-blur-md rounded-full p-2'>
                  <div className='flex space-x-1'>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className='w-1 bg-white rounded-full'
                        animate={{
                          height: ['6px', '16px', '6px'],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tap Hint */}
            {isHovered && !showControls && (
              <motion.div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className='bg-black/70 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs md:text-sm border border-white/20'>
                  Tap for controls
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* 3D Control Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className='absolute top-0 right-0 w-3/4 md:w-2/3 h-full'
            initial={{
              opacity: 0,
              rotateY: 90,
              x: 50,
              z: -100,
            }}
            animate={{
              opacity: 1,
              rotateY: 25,
              x: -20,
              z: 50,
            }}
            exit={{
              opacity: 0,
              rotateY: 90,
              x: 50,
              z: -100,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25,
              duration: 0.8,
            }}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
            }}
          >
            <div className='relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden'>
              {/* Close Button */}
              <button
                className='absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-red-100 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors'
                onClick={handleCloseControls}
              >
                <Square size={14} />
              </button>

              {/* Control Panel Content */}
              <div className='h-full flex flex-col justify-center items-center p-4 md:p-6 space-y-6'>
                {/* Track Info */}
                <div className='text-center'>
                  <div className='flex items-center justify-center space-x-2 text-gray-500 text-xs md:text-sm mb-2'>
                    <Music size={14} />
                    <span>{collaboration.duration}</span>
                  </div>
                  <h4 className='font-bold text-gray-900 text-sm md:text-base mb-1'>
                    {collaboration.title}
                  </h4>
                  <p className='text-gray-600 text-xs md:text-sm'>
                    with {collaboration.collaborator}
                  </p>
                </div>

                {/* Main Controls */}
                <div className='flex items-center space-x-4'>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePlay(collaboration.id);
                    }}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 ${
                      isActive && isPlaying
                        ? 'bg-gray-800 hover:bg-gray-700'
                        : 'bg-black hover:bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && isPlaying ? (
                      <Pause size={16} className='md:w-5 md:h-5' />
                    ) : (
                      <Play size={16} className='md:w-5 md:h-5 ml-0.5' />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      onStop();
                    }}
                    className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 hover:bg-red-100 flex items-center justify-center text-gray-700 hover:text-red-600 transition-all duration-200'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Square size={14} className='md:w-4 md:h-4' />
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className='text-center space-y-2'>
                  <div className='flex items-center justify-center space-x-2 text-gray-500 text-xs'>
                    <Calendar size={12} />
                    <span>{collaboration.year}</span>
                  </div>
                  <span className='inline-block text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full'>
                    {collaboration.genre}
                  </span>
                </div>

                {/* Color Accent */}
                <motion.div
                  className={`w-16 h-1 bg-gradient-to-r ${collaboration.color} rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Collaborations() {
  const { playingId, isPlaying, togglePlay, stopAudio } = useAudioPlayer();

  return (
    <section
      id='collaborations'
      className='min-h-screen bg-white py-12 md:py-16 lg:py-20'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16 lg:mb-20'
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6'>
            COLLABORATIONS
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full'
          />
          <p className='text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'>
            Musical partnerships that transcend boundaries. Each collaboration
            brings unique perspectives and creates something greater than the
            sum of its parts.
          </p>
        </motion.div>

        {/* Collaborations Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          {collaborations.map((collaboration, index) => (
            <CollaborationCard
              key={collaboration.id}
              collaboration={collaboration}
              index={index}
              playingId={playingId}
              isPlaying={isPlaying}
              onTogglePlay={togglePlay}
              onStop={stopAudio}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12 md:mt-16 lg:mt-20'
        >
          <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
            Open to New Collaborations
          </h3>
          <p className='text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'>
            Always looking for talented artists to create something unique
            together. Let's explore new sonic territories.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <motion.button
              className='flex-1 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>

            <motion.button
              className='flex-1 px-6 md:px-8 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
