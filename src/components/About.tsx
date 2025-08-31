'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import QuoteSection from './QuoteSection';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <>
      <div className='relative bg-black'>
        <QuoteSection />
        <section
          ref={containerRef}
          className='relative min-h-screen bg-black flex items-center overflow-hidden'
        >
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center'>
              {/* Left Side - Text Content */}
              <motion.div className='space-y-8 lg:space-y-10 text-right order-1 lg:order-1'>
                {/* Main Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-relaxed tracking-wide'>
                    Music is like a dream.{' '}
                    <span className='block mt-2'>
                      One that I{' '}
                      <motion.span
                        className='italic text-purple-400'
                        whileHover={{ color: '#ec4899' }}
                        transition={{ duration: 0.3 }}
                      >
                        cannot hear
                      </motion.span>
                      .
                    </span>
                  </h1>
                </motion.div>

                {/* Clean Description */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='space-y-6 text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed'
                >
                  <p>
                    From progressive metal complexities to international
                    collaborations, my path has been guided by one principle:
                    authentic expression transcends all boundaries.
                  </p>

                  <p>
                    Working with artists across cultures, I've discovered that
                    the most powerful music emerges when we honor both tradition
                    and innovation, creating bridges between worlds through
                    sound.
                  </p>
                </motion.div>

                {/* Minimal Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='space-y-3 text-right'
                >
                  {[
                    '8+ years creating',
                    '50+ international collaborations',
                    '15 countries explored',
                  ].map((stat, index) => (
                    <motion.div
                      key={stat}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className='text-gray-500 text-xs sm:text-sm lg:text-base font-light'
                    >
                      {stat}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className='flex justify-end pt-8'
                >
                  <div className='text-right space-y-2'>
                    <motion.div
                      className='text-xl sm:text-2xl lg:text-3xl font-extralight text-white italic tracking-wider'
                      whileHover={{
                        color: '#a855f7',
                        letterSpacing: '0.2em',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      Linarex
                    </motion.div>
                    <motion.div
                      className='w-20 h-px bg-gradient-to-l from-purple-500 via-purple-500/50 to-transparent ml-auto'
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                {/* Contact Link - Subtle */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className='text-right pt-6'
                >
                  <motion.button
                    className='group text-gray-500 hover:text-purple-400 text-sm font-light tracking-wide transition-colors duration-300'
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Let's collaborate
                    <motion.span
                      className='inline-block ml-2 group-hover:ml-3 transition-all duration-300'
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
