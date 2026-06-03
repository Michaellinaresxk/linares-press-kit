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

const parseFollowers = (followersString: string): number => {
  return parseFloat(followersString.replace('K', '')) * 1000;
};

function usePlatformStats(): PlatformStats {
  return useMemo(() => {
    const streaming = streamingPlatforms.reduce((acc, platform) => {
      return acc + parseFollowers(platform.followers);
    }, 0);

    const social = socialPlatforms.reduce((acc, platform) => {
      return acc + parseFollowers(platform.followers);
    }, 0);

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
    <div ref={containerRef} className='absolute inset-0 opacity-20'>
      <motion.div
        style={{ y }}
        className='absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl'
      />
      <motion.div
        style={{ y: yReverse }}
        className='absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-3xl'
      />
    </div>
  );
}

function LinksHeader({ stats }: { stats: PlatformStats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='text-center mb-16'
    >
      <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6'>
        Connect & Stream
      </h2>
      <p className='text-gray-400 text-lg max-w-3xl mx-auto mb-8'>
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
      <span className={`${iconColor} mr-3`}>{icon}</span>
      <h3 className='text-2xl font-bold text-white'>{title}</h3>
    </motion.div>
  );
}

interface StreamingPlatformSectionProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  platforms: typeof streamingPlatforms;
  type: 'streaming';
}

interface SocialPlatformSectionProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  platforms: typeof socialPlatforms;
  type: 'social';
}

type PlatformSectionProps =
  | StreamingPlatformSectionProps
  | SocialPlatformSectionProps;

function PlatformSection(props: PlatformSectionProps) {
  const { title, icon, iconColor, platforms, type } = props;

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

/**
 * EPK download strip — shown at the bottom of the Links section.
 * Targets press, curators, and festival bookers landing here.
 */
function EPKStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='mt-4 border-t border-gray-800 pt-12'
    >
      <div className='flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-2xl px-8 py-6 backdrop-blur-sm'>
        {/* Left: label */}
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0'>
            <FileDown size={20} className='text-purple-400' />
          </div>
          <div>
            <p className='text-white font-semibold text-sm'>
              Press &amp; Booking
            </p>
            <p className='text-gray-400 text-xs mt-0.5'>
              One-page EPK with bio, releases, and contact info
            </p>
          </div>
        </div>

        {/* Right: button */}
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
  const stats = usePlatformStats();

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden'
    >
      <AnimatedBackground />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <LinksHeader stats={stats} />

        <PlatformSection
          title='Streaming Platforms'
          icon={<Play size={28} />}
          iconColor='text-cyan-400'
          platforms={streamingPlatforms}
          type='streaming'
        />

        <PlatformSection
          title='Social Media'
          icon={<Heart size={28} />}
          iconColor='text-pink-400'
          platforms={socialPlatforms}
          type='social'
        />

        {/* EPK download — for press, curators, and festival bookers */}
        <EPKStrip />
      </div>
    </section>
  );
}
