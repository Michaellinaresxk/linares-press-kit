'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Play, Heart, FileDown } from 'lucide-react';
import { streamingPlatforms, socialPlatforms } from '@/const/links';
import PlatformCard from './cards/PlatformCard';
import DownloadEPKButton from '@/components/DownloadEPKButton';

interface PlatformStats {
  streaming: number;
  social: number;
  total: number;
}

const parseFollowers = (followersString: string): number =>
  parseFloat(followersString.replace('K', '')) * 1000;

function usePlatformStats(): PlatformStats {
  return useMemo(() => {
    const streaming = streamingPlatforms.reduce(
      (acc, p) => acc + parseFollowers(p.followers),
      0,
    );
    const social = socialPlatforms.reduce(
      (acc, p) => acc + parseFollowers(p.followers),
      0,
    );
    return { streaming, social, total: streaming + social };
  }, []);
}

function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div
      ref={containerRef}
      className='absolute inset-0 opacity-15 pointer-events-none'
    >
      <motion.div
        style={{ y, background: '#185fa5' }}
        className='absolute top-20 left-1/4 w-80 h-80 rounded-full blur-3xl'
      />
      <motion.div
        style={{ y: yReverse, background: '#0f6e56' }}
        className='absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl'
      />
    </div>
  );
}

function LinksHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='text-center mb-16'
    >
      <h2
        className='text-4xl lg:text-5xl font-bold mb-6'
        style={{ color: '#e8eef5' }}
      >
        Connect & Stream
      </h2>
      <p
        className='text-lg max-w-3xl mx-auto mb-8'
        style={{ color: '#5a7a8e' }}
      >
        Follow Linarex across all platforms for the latest music,
        behind-the-scenes content, and direct interaction with the artist and
        community.
      </p>
    </motion.div>
  );
}

function SectionTitle({
  icon,
  title,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  iconColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex items-center mb-8'
    >
      <span className='mr-3' style={{ color: iconColor }}>
        {icon}
      </span>
      <h3 className='text-2xl font-bold' style={{ color: '#c8dcea' }}>
        {title}
      </h3>
    </motion.div>
  );
}

type PlatformSectionProps =
  | {
      title: string;
      icon: React.ReactNode;
      iconColor: string;
      platforms: typeof streamingPlatforms;
      type: 'streaming';
    }
  | {
      title: string;
      icon: React.ReactNode;
      iconColor: string;
      platforms: typeof socialPlatforms;
      type: 'social';
    };

function PlatformSection({
  title,
  icon,
  iconColor,
  platforms,
  type,
}: PlatformSectionProps) {
  return (
    <div className='mb-16'>
      <SectionTitle icon={icon} title={title} iconColor={iconColor} />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {platforms.map((platform, index) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
            type={type}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function EPKStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='mt-4 pt-12'
      style={{ borderTop: '1px solid rgba(55,138,221,0.15)' }}
    >
      <div
        className='flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-6'
        style={{
          background: 'rgba(13,17,23,0.6)',
          border: '1px solid rgba(55,138,221,0.2)',
        }}
      >
        <div className='flex items-center gap-4'>
          <div
            className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
            style={{
              background: 'rgba(24,95,165,0.2)',
              border: '1px solid rgba(55,138,221,0.3)',
            }}
          >
            <FileDown size={20} style={{ color: '#85b7eb' }} />
          </div>
          <div>
            <p className='font-semibold text-sm' style={{ color: '#c8dcea' }}>
              Press &amp; Booking
            </p>
            <p className='text-xs mt-0.5' style={{ color: '#3d5a6e' }}>
              One-page EPK with bio, releases, and contact info
            </p>
          </div>
        </div>
        <DownloadEPKButton
          variant='primary'
          size='md'
          label='Download EPK (PDF)'
        />
      </div>
    </motion.div>
  );
}

export default function Links() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 overflow-hidden'
      style={{
        background: 'linear-gradient(to bottom, #0a0f16, #0d1117, #0d1117)',
      }}
    >
      <AnimatedBackground />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <LinksHeader />

        <PlatformSection
          title='Streaming Platforms'
          icon={<Play size={28} />}
          iconColor='#85b7eb'
          platforms={streamingPlatforms}
          type='streaming'
        />

        <PlatformSection
          title='Social Media'
          icon={<Heart size={28} />}
          iconColor='#5dcaa5'
          platforms={socialPlatforms}
          type='social'
        />

        <EPKStrip />
      </div>
    </section>
  );
}
