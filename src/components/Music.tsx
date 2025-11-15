'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import TrackPlayer from './TrackPlayer';
import { tracks } from '@/const/tracks';
import FeaturedSinglePlayer from './FeaturedSinglePlayer';

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
                <motion.a
                  href='https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS?si=6-KHEpmPQ3mTHwnLdw2iDg'
                  target='_blank'
                  className='px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Stream on Spotify
                </motion.a>
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
