'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen w-full overflow-hidden'
    >
      {/* Background Image - Artist Photo */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 w-full h-full'
      >
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundPosition: 'center top',
            backgroundImage:
              'url(https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg)',
            transform: 'scaleX(-1)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className='absolute inset-0' />
        <div className='absolute inset-0 ' />
      </motion.div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Content - Responsive positioning */}
        <motion.div
          style={{ y: textY }}
          className='max-w-4xl h-screen flex flex-col justify-end lg:justify-center'
        >
          {/* Genre/Category Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-block mb-4'
          >
            <span className='px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium tracking-wide'>
              MUSIC WITHOUT BOUNDARIES
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-300 leading-tight tracking-tight'>
              LINAREX
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='space-y-4 mb-4'
          >
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-light text-white'>
              Composer & Creative Producer
            </h2>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-wrap gap-6 lg:gap-8 text-left pb-20'
          >
            {[
              { number: '20+', label: 'Years' },
              { number: '5+', label: 'Collaborations' },
              { number: '18', label: 'Countries' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className='text-center'
              >
                <div className='text-2xl sm:text-3xl font-bold text-white mb-1'>
                  {stat.number}
                </div>
                <div className='text-gray-400 text-sm font-medium'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
