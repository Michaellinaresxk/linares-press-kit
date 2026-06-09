'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FeaturedSinglePlayer from './FeaturedSinglePlayer';

export default function Music() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <FeaturedSinglePlayer />

      <section
        ref={containerRef}
        className='relative py-16 md:py-20 lg:py-32 overflow-hidden'
        style={{
          background: 'linear-gradient(to bottom, #0d1117, #0a0f16, #111820)',
        }}
      >
        <div className='absolute inset-0 opacity-15 pointer-events-none'>
          {/* style mergeado — un solo prop con y + background */}
          <motion.div
            style={{ y, background: '#185fa5' }}
            className='absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl'
          />
          <motion.div
            style={{ y: yReverse, background: '#0f6e56' }}
            className='absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full blur-3xl'
          />
        </div>
      </section>
    </>
  );
}
