'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook de scroll para animaciones
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Transformaciones para parallax
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const springPhotoY = useSpring(photoY, { stiffness: 400, damping: 90 });
  const springTextY = useSpring(textY, { stiffness: 400, damping: 90 });

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen w-full overflow-hidden bg-black'
    >
      <div className='flex min-h-screen'>
        {/* Panel izquierdo - Texto */}
        <motion.div
          className='w-full lg:w-2/5 flex items-center justify-center relative z-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/30'
          style={{
            y: springTextY,
            opacity,
          }}
        >
          <div className='px-6 sm:px-8 lg:px-12 py-12 max-w-xl'>
            {/* Subtítulo pequeño */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='mb-6'
            >
              <span className='text-purple-400 text-sm sm:text-base font-medium tracking-wider uppercase'>
                Press Kit
              </span>
            </motion.div>

            {/* Nombre principal */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight'
            >
              <motion.span
                className='bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent'
                whileHover={{
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                }}
              >
                LINAREX
              </motion.span>
            </motion.h1>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className='mb-6'
            >
              <h2 className='text-xl sm:text-2xl text-gray-300 font-light mb-4'>
                Progressive Metal Producer
              </h2>
              <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
                From prog metal foundations to international collaborations,
                crafting sonic experiences that transcend cultural boundaries.
              </p>
            </motion.div>

            {/* Stats o highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className='grid grid-cols-2 gap-4 mb-8 text-center'
            >
              <div className='border border-gray-700 rounded-lg p-3'>
                <div className='text-2xl font-bold text-white'>4</div>
                <div className='text-xs text-gray-400 uppercase tracking-wider'>
                  Singles Released
                </div>
              </div>
              <div className='border border-gray-700 rounded-lg p-3'>
                <div className='text-2xl font-bold text-purple-400'>Global</div>
                <div className='text-xs text-gray-400 uppercase tracking-wider'>
                  Collaborations
                </div>
              </div>
            </motion.div>

            {/* Botones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className='space-y-4'
            >
              <motion.button
                className='w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-xl'
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Listen to My Music
              </motion.button>

              <motion.button
                className='w-full px-8 py-4 border border-gray-600 rounded-lg text-white font-semibold hover:bg-gray-800/50 transition-colors'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Download Press Kit
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Panel derecho - Tu foto (PROTAGONISTA) */}
        <motion.div
          className='hidden lg:flex w-3/5 relative'
          style={{ y: springPhotoY }}
        >
          {/* Tu foto principal */}
          <div className='relative w-full h-screen'>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className='absolute inset-0'
            >
              {/* Reemplaza con tu foto */}
              <div
                className='w-full h-full bg-cover bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url('/api/placeholder/1200/1600')`, // TU FOTO AQUÍ
                  backgroundPosition: 'center 20%', // Ajusta según tu foto
                }}
              />

              {/* Overlay sutil para integrar mejor */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
            </motion.div>

            {/* Efectos decorativos sobre la foto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 2, delay: 1 }}
              className='absolute top-20 right-20 w-2 h-2 bg-purple-500 rounded-full'
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 1.5 }}
              className='absolute bottom-32 right-12 w-1 h-1 bg-cyan-400 rounded-full'
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>
        </motion.div>

        {/* Versión móvil - Foto como background */}
        <div className='absolute inset-0 lg:hidden'>
          <div
            className='w-full h-full bg-cover bg-center bg-no-repeat'
            style={{
              backgroundImage: `url('/api/placeholder/800/1200')`, // TU FOTO PARA MÓVIL
              backgroundPosition: 'center 30%',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30' />
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className='absolute bottom-8 left-8 lg:left-1/5 z-30'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity }}
      >
        <motion.div
          className='w-6 h-10 border-2 border-white/60 rounded-full flex justify-center'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className='w-1 h-3 bg-white rounded-full mt-2'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
