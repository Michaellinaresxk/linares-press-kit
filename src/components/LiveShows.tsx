'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Camera } from 'lucide-react';
import { concertPhotos, upcomingShows } from '@/const/liveShows';
import ShowCard from './cards/ShowCard';
import PhotoModal from './modal/PhotoModal';
import Image from 'next/image';

export default function LiveShows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof concertPhotos)[0] | null
  >(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className='relative py-16 md:py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.5 }}
          className='absolute bottom-20 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-500 rounded-full blur-3xl'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 md:mb-6'>
            Live Shows
          </h2>
          <p className='text-gray-400 text-base md:text-lg max-w-3xl mx-auto px-4'>
            Experience Linarex live. From intimate hotel venues to major
            festivals, each performance is a unique journey through progressive
            soundscapes.
          </p>
        </motion.div>

        {/* Upcoming Shows */}
        <div className='mb-16 md:mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-6 md:mb-8'
          >
            <Calendar className='text-purple-400 mr-3' size={24} />
            <h3 className='text-xl md:text-2xl font-bold text-white'>
              Upcoming Dates
            </h3>
          </motion.div>

          <div className='space-y-4'>
            {upcomingShows.map((show, index) => (
              <ShowCard key={show.id} show={show} index={index} />
            ))}
          </div>

          {/* Contact for booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-center mt-8'
          >
            <p className='text-gray-400 mb-4 text-sm md:text-base'>
              Interested in booking Linarex for your venue or event?
            </p>
            <motion.button
              className='px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact for Booking
            </motion.button>
          </motion.div>
        </div>

        {/* Live Photos Gallery */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-6 md:mb-8'
            id='gallery'
          >
            <Camera className='text-pink-400 mr-3' size={24} />
            <h3 className='text-xl md:text-2xl font-bold text-white'>
              Live Gallery
            </h3>
          </motion.div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4'>
            {concertPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative aspect-square rounded-lg overflow-hidden cursor-pointer group'
                onClick={() => setSelectedPhoto(photo)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={photo.src}
                  alt={`${photo.venue} - ${photo.location}`}
                  width={600}
                  height={400}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                  <div className='p-2 md:p-3 w-full'>
                    <p className='text-white text-xs md:text-sm font-semibold truncate'>
                      {photo.venue}
                    </p>
                    <p className='text-gray-300 text-xs truncate'>
                      {photo.location}
                    </p>
                  </div>
                </div>

                {/* Overlay indicator */}
                <div className='absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <Camera size={12} className='text-white' />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-12 md:mt-16'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50'>
            <h3 className='text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center'>
              Performance History
            </h3>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
              {[
                {
                  number: '50+',
                  label: 'Shows Performed',
                  color: 'text-purple-400',
                },
                {
                  number: '18',
                  label: 'Countries Visited',
                  color: 'text-pink-400',
                },
                {
                  number: '25k+',
                  label: 'Audience Reached',
                  color: 'text-cyan-400',
                },
                {
                  number: '8',
                  label: 'Festival Appearances',
                  color: 'text-green-400',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <div
                    className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className='text-gray-400 text-xs md:text-sm leading-tight'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
