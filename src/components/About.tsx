'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import QuoteSection from './QuoteSection';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className='relative bg-black'>
        <QuoteSection />
        <section
          ref={containerRef}
          className='relative min-h-screen bg-black flex items-center overflow-hidden'
        >
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center'>
              {/* Right Side - Image */}
              <motion.div
                className='order-2 lg:order-1'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className='w-full max-w-md mx-auto lg:max-w-full'>
                  <Image
                    src='/img/portrait.jpg'
                    alt='Lynarex - Creative Producer and Composer'
                    width={800}
                    height={600}
                    className='w-full h-auto'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                    priority
                    quality={95}
                  />
                </div>
              </motion.div>

              {/* Left Side - Text Content */}
              <motion.div className='space-y-8 lg:space-y-10 order-1 lg:order-2'>
                {/* Main Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-light text-white leading-relaxed tracking-wide'>
                    <span className='block mt-1'>
                      I create musical concepts guided by one question:{' '}
                      <motion.span
                        className='italic text-purple-400'
                        whileHover={{ color: '#ec4899' }}
                        transition={{ duration: 0.3 }}
                      >
                        what does this emotion sound like?
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
                    I am Linarex, I'm a composer from the Dominican Republic.
                    Each song is an emotional journey through the human
                    experience.
                  </p>

                  <p>
                    I seek universal feelings and the perfect voice to express
                    them. Working across genres like afrobeat, funk, rock, indie
                    folk, and beyond—because the emotion matters more than the
                    sound.
                  </p>
                </motion.div>

                {/* Minimal Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='space-y-3'
                >
                  {[
                    '10+ years creating',
                    '5+ international collaborations',
                    '18 countries explored',
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
                  className='flex  pt-8'
                >
                  <div className='space-y-2'>
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
                  className='pt-6'
                >
                  <motion.a
                    href='#contact'
                    className='group text-gray-500 hover:text-purple-400 text-sm font-light tracking-wide transition-colors duration-300'
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Get In Touch
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
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
