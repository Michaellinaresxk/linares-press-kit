'use client';

import { motion } from 'framer-motion';

import { collaborations } from '@/const/collaborations';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import CollaborationCard from './cards/CollaborationCard';

export default function Collaborations() {
  const { playingId, isPlaying, togglePlay, stopAudio } = useAudioPlayer();

  return (
    <section
      id='collaborations'
      className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 md:py-16 lg:py-20'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16 lg:mb-20'
        >
          <motion.h1
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            COLLABORATIONS
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className='w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full'
          />
          <motion.p
            className='text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Musical partnerships that transcend boundaries. Each collaboration
            brings unique perspectives and creates something greater than the
            sum of its parts.
          </motion.p>
        </motion.div>

        {/* Grid de colaboraciones */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
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

        {/* Call to Action mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12 md:mt-16 lg:mt-20'
        >
          <motion.h3
            className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Open to New Collaborations
          </motion.h3>
          <p className='text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'>
            Always looking for talented artists to create something unique
            together. Let's explore new sonic territories.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <motion.button
              className='flex-1 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl text-sm md:text-base'
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.button>

            {/* <motion.button
              className='flex-1 px-6 md:px-8 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl text-sm md:text-base'
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              View Portfolio
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
