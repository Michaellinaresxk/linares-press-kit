'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { siteConfig } from '@/lib/site-config';

const HERO_STATS = [
  { number: siteConfig.yearsOnStage, label: 'Years on stage' },
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
      className='relative min-h-[calc(100svh-64px)] w-full overflow-hidden'
    >
      {/* Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 w-full h-full'
      >
        <Image
          src='/bg2.png'
          alt='Linarex in a dramatic portrait for the artist homepage'
          fill
          priority
          sizes='100vw'
          className='object-cover object-top'
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
          className='max-w-4xl min-h-[calc(100svh-64px)] flex flex-col justify-end lg:justify-center'
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
              DOMINICAN-BORN · WARSAW-BASED
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
              {siteConfig.name.toUpperCase()}
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
              {siteConfig.role}
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

          {/* One clear action keeps the artist's music at the center. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='flex flex-wrap items-center gap-x-6 gap-y-3 pb-20'
          >
            <a
              href={siteConfig.releases[0].spotifyUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-xl border border-[#378add] bg-[#1d4a72] px-6 py-3 text-sm font-semibold text-[#c8dcea] transition-transform duration-300 hover:-translate-y-px hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9d8ec]'
            >
              Listen to {siteConfig.releases[0].title} on Spotify
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className='text-sm font-medium text-[#c8dcea] underline decoration-[#5b8fa8] underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85b7eb]'
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
