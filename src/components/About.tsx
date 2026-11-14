'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import QuoteSection from './QuoteSection';
import { siteConfig } from '@/lib/site-config';
import { homeCopy, withHomeVars, type HomeLocale } from '@/lib/i18n/home';

export default function About({ locale = 'en' }: { locale?: HomeLocale }) {
  const copy = homeCopy[locale];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className='relative bg-black'>
        <QuoteSection quote={copy.about.quote} />
        <section
          ref={containerRef}
          className='relative min-h-screen bg-black flex items-center overflow-hidden'
        >
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center'>
              {/* Image */}
              <motion.div
                className='order-2 lg:order-1'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className='w-full max-w-full'>
                  <Image
                    src='/img/portrait.jpg'
                    alt={locale === 'pl' ? 'Portret Linarex' : 'Portrait of Linarex'}
                    width={1000}
                    height={1464}
                    className='h-auto w-full max-w-full'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                    priority
                    quality={95}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div className='space-y-8 lg:space-y-10 order-1 lg:order-2'>
                {/* Main quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h2
                    className='text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-light leading-relaxed tracking-wide'
                    style={{ color: '#c8dcea' }}
                  >
                    {withHomeVars(copy.about.fromOriginToLocation, {
                      origin: copy.originName,
                      location: copy.locationName,
                    })}
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed'
                  style={{ color: '#5a7a8e' }}
                >
                  <p>
                    {withHomeVars(copy.about.bornAndNow, {
                      name: siteConfig.name,
                      origin: siteConfig.origin,
                      location: siteConfig.location,
                    })}
                  </p>
                  <p>
                    {withHomeVars(copy.about.latestSingle, {
                      title: siteConfig.releases[0].title,
                    })}
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className='flex pt-8'
                >
                  <div className='space-y-2'>
                    <motion.div
                      className='text-xl sm:text-2xl lg:text-3xl font-extralight italic tracking-wider'
                      style={{ color: '#e8eef5' }}
                      whileHover={{ color: '#85b7eb', letterSpacing: '0.2em' }}
                      transition={{ duration: 0.4 }}
                    >
                      Linarex
                    </motion.div>
                    <motion.div
                      className='w-20 h-px ml-auto'
                      style={{
                        background:
                          'linear-gradient(to left, #378add, rgba(55,138,221,0.4), transparent)',
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                {/* Contact link */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className='pt-6'
                >
                  <motion.a
                    href='#contact'
                    className='group text-sm font-light tracking-wide transition-colors duration-300'
                    style={{ color: '#3d5a6e' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#85b7eb')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#3d5a6e')
                    }
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {copy.about.getInTouch}
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
