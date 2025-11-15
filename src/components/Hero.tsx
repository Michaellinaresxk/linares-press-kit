'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Camera, Mail } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const cardsY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  // Navigation cards data
  const navigationCards = [
    {
      id: 'collaborations',
      title: 'Collaborations',
      description: 'Musical partnerships',
      icon: Users,
      bgImage:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      href: '#collaborations',
    },
    {
      id: 'gallery',
      title: 'Gallery',
      description: 'Live moments',
      icon: Camera,
      bgImage:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      href: '#gallery',
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch',
      icon: Mail,
      bgImage: 'img/at-home.jpg',
      href: '#contact',
    },
  ];

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
            backgroundImage: 'url(img/piano.jpg)',
            transform: 'scaleX(-1)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-black/60' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60' />
      </motion.div>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
        {/* Main Content - Just Text Content */}
        <motion.div style={{ y: textY }} className=' max-w-4xl mb-16 lg:mb-24'>
          {/* Genre/Category Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-block mb-6'
          >
            <span className='px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-medium tracking-wide'>
              MUSIC WITHOUT BOUNDARIES
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mb-6'
          >
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-yellow-400 to-yellow-300 leading-tight tracking-tight'>
              LINAREX
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='space-y-4 mb-8'
          >
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-light text-white'>
              Composer & Creative Producer
            </h2>
            <p className='text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl'>
              Music that expresses what we all feel but can not always say.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-wrap gap-6 lg:gap-8 text-left'
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

        {/* Navigation Cards */}
        <motion.div
          style={{ y: cardsY }}
          className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 pt-10'
        >
          {navigationCards.map((card, index) => (
            <motion.a
              key={card.id}
              href={card.href}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className='group relative overflow-hidden rounded-2xl h-50 sm:h-60 lg:h-55 transition-all duration-300'
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url('${card.bgImage}')` }}
              />

              {/* Subtle dark overlay only for text readability */}
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300' />

              {/* Content */}
              <div className='relative z-10 h-full flex items-center justify-center text-center p-6'>
                <div className='space-y-2'>
                  <motion.h3
                    className='text-2xl lg:text-3xl font-bold text-white tracking-wide drop-shadow-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </div>

              {/* Hover Border Effect */}
              <motion.div className='absolute inset-0 border-2 border-white/0 rounded-2xl group-hover:border-white/30 transition-colors duration-300' />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
