'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { siteConfig } from '@/lib/site-config';
import { homeCopy, type HomeLocale } from '@/lib/i18n/home';

export default function Hero({ locale = 'en' }: { locale?: HomeLocale }) {
  const copy = homeCopy[locale];
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
      className='relative min-h-[calc(100svh-76px)] w-full overflow-hidden'
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
          className='max-w-4xl min-h-[calc(100svh-76px)] flex flex-col justify-end lg:justify-center'
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
              {copy.hero.badge}
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

          {/* Primary: booking/contact. Music lives in the featured single section next. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='flex flex-wrap items-center gap-3 pb-20'
          >
            <Link
              href={locale === 'pl' ? '/pl#music' : '/#music'}
              className='rounded-xl border border-[#378add] bg-[#1d4a72] px-6 py-3 text-sm font-semibold text-[#c8dcea] transition-transform duration-300 hover:-translate-y-px hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9d8ec]'
            >
              {copy.hero.memoriesCta}
            </Link>
            <Link
              href={locale === 'en' ? '/proposal' : '/pl/proposal'}
              className='rounded-xl border border-[#5b8fa866] bg-[#0d1318]/35 px-6 py-3 text-sm font-semibold text-[#dce8f0] backdrop-blur-sm transition-colors hover:border-[#7ab0cc] hover:bg-[#5b8fa81c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85b7eb]'
            >
              {copy.hero.eventCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
