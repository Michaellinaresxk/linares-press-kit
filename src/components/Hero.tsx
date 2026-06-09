'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DownloadEPKButton from '@/components/DownloadEPKButton';

// Paleta extraída del bg: azules fríos oscuros, grises pizarra, negro profundo
// #0d1117 → base oscura | #8faabf → texto secundario | #c8dcea → texto destacado
// #85b7eb → acento azul frío | #5a7a8e → labels tenues

const HERO_STATS = [
  { number: '20+', label: 'Years' },
  { number: '3+', label: 'Collaborations' },
  { number: '11', label: 'Countries' },
] as const;

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
      {/* Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 w-full h-full'
      >
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundPosition: 'center top',
            backgroundImage: 'url(./bg2.png)',
          }}
        />

        {/* Overlay izquierdo: oscurece la zona del texto */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(to right, rgba(13,17,23,0.20) 80%, rgba(13,17,23,0.5) 100%)',
          }}
        />

        {/* Overlay inferior: ancla los textos al fondo */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(to top, rgba(13,17,23,0.88) 0%, transparent 55%)',
          }}
        />
      </motion.div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          style={{ y: textY }}
          className='max-w-4xl h-screen flex flex-col justify-end lg:justify-center'
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-block mb-4'
          >
            <span
              className='px-4 py-2 rounded-full text-sm font-medium tracking-wide'
              style={{
                background: 'rgba(180,210,244,0.10)',
                border: '1px solid rgba(133,183,235,0.35)',
                color: '#85b7eb',
              }}
            >
              MUSIC WITHOUT BOUNDARIES
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight'
              style={{ color: '#e8eef5' }}
            >
              LINAREX
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mb-4'
          >
            <h2
              className='text-xl sm:text-2xl lg:text-3xl font-light'
              style={{ color: '#8faabf' }}
            >
              Composer & Creative Producer
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-wrap gap-6 lg:gap-8 text-left mb-8'
          >
            {HERO_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className='text-center'
              >
                <div
                  className='text-2xl sm:text-3xl font-bold mb-1'
                  style={{ color: '#c8dcea' }}
                >
                  {stat.number}
                </div>
                <div
                  className='text-sm font-medium'
                  style={{ color: '#5a7a8e' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='flex flex-wrap items-center gap-4 pb-20'
          >
            <motion.a
              href='#collaborations'
              className='px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300'
              style={{
                background: '#1d4a72',
                border: '1px solid #378add',
                color: '#c8dcea',
              }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Listen Now
            </motion.a>

            <DownloadEPKButton
              variant='ghost'
              size='md'
              label='Press Kit (EPK)'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
