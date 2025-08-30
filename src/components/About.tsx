'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden'
    >
      {/* Background decorativo */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Lado izquierdo - Timeline Visual */}
          <motion.div style={{ y, opacity }} className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className='text-center lg:text-left'
            >
              <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6'>
                The Journey
              </h2>
              <p className='text-gray-400 text-lg'>
                From prog metal roots to global production
              </p>
            </motion.div>

            {/* Timeline */}
            <div className='relative'>
              {/* Línea vertical */}
              <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500'></div>

              {/* Timeline items */}
              <div className='space-y-8'>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='relative flex items-start'
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center relative z-10'>
                    <span className='text-white font-bold'>1</span>
                  </div>
                  <div className='ml-6'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      Prog Metal Origins
                    </h3>
                    <p className='text-gray-400'>
                      Started with complex compositions and intricate
                      soundscapes in the progressive metal scene.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='relative flex items-start'
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center relative z-10'>
                    <span className='text-white font-bold'>2</span>
                  </div>
                  <div className='ml-6'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      Hotel Circuit Experience
                    </h3>
                    <p className='text-gray-400'>
                      Developed versatility and adaptability performing in
                      diverse hotel venues across different cultures.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className='relative flex items-start'
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center relative z-10'>
                    <span className='text-white font-bold'>3</span>
                  </div>
                  <div className='ml-6'>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      International Producer
                    </h3>
                    <p className='text-gray-400'>
                      Now crafting unique soundscapes for artists worldwide,
                      blending cultures and pushing boundaries.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Lado derecho - Bio detallado */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className='space-y-6'
          >
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
              <motion.h3
                className='text-2xl font-bold text-white mb-6'
                whileHover={{ color: '#a855f7' }}
                transition={{ duration: 0.3 }}
              >
                About Linarex
              </motion.h3>

              <div className='space-y-4 text-gray-300 leading-relaxed'>
                <p>
                  My musical journey began in the intricate world of progressive
                  metal, where complexity meets emotion. Those early days taught
                  me the importance of every note, every rhythm, and every sonic
                  texture.
                </p>

                <p>
                  The hotel circuit became an unexpected classroom – performing
                  for diverse audiences from different cultures, I learned to
                  read the room, adapt my sound, and connect with people
                  regardless of language barriers. This experience shaped my
                  understanding that music truly is a universal language.
                </p>

                <p>
                  Today, as an international producer, I blend these experiences
                  into something unique. I work with artists from around the
                  globe, incorporating their cultural elements with modern
                  production techniques to create sounds that transcend borders.
                </p>

                <p>
                  My approach is simple: respect the artist's vision while
                  bringing technical excellence and creative innovation to every
                  project. Whether it's prog metal complexity or world music
                  fusion, I craft sonic experiences that resonate.
                </p>
              </div>

              {/* Skills/Specialties */}
              <div className='mt-8'>
                <h4 className='text-lg font-semibold text-white mb-4'>
                  Specialties
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'Progressive Metal Production',
                    'World Music Fusion',
                    'Cross-Cultural Collaborations',
                    'Live Performance',
                    'Sonic Landscaping',
                    'International Projects',
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(168, 85, 247, 0.2)',
                      }}
                      className='px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 cursor-default'
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
