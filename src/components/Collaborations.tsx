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
      className='min-h-screen py-12 md:py-16 lg:py-20'
      style={{
        background:
          'linear-gradient(135deg, #f0f4f8 0%, #e8eef5 50%, #f0f4f8 100%)',
      }}
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
          <h2
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6'
            style={{ color: '#0d1117' }}
          >
            COLLABORATIONS
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className='w-32 h-px mx-auto rounded-full'
            style={{
              background: 'linear-gradient(to right, #378add, #185fa5)',
            }}
          />

          <motion.p
            className='mt-6 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'
            style={{ color: '#3d5a6e' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Musical partnerships that transcend boundaries. Each collaboration
            brings unique perspectives and creates something greater than the
            sum of its parts.
          </motion.p>
        </motion.div>

        {/* Grid */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12 md:mt-16 lg:mt-20'
        >
          <motion.h3
            className='text-xl md:text-2xl lg:text-3xl font-bold mb-4'
            style={{ color: '#0d1117' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Open to New Collaborations
          </motion.h3>

          <p
            className='mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'
            style={{ color: '#3d5a6e' }}
          >
            Always looking for talented artists to create something unique
            together. Explore new sonic territories.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <motion.a
              href='#contact'
              className='flex-1 px-6 md:px-8 py-3 md:py-4 font-bold rounded-2xl transition-all duration-500 shadow-lg text-sm md:text-base'
              style={{
                background: '#1d4a72',
                border: '1px solid #378add',
                color: '#c8dcea',
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
