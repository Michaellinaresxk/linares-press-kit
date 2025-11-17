'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Play, Heart } from 'lucide-react';
import { streamingPlatforms, socialPlatforms } from '@/const/links';
import PlatformCard from './cards/PlatformCard';

/**
 * Type for platform stats
 */
interface PlatformStats {
  streaming: number;
  social: number;
  total: number;
}

/**
 * Helper to parse follower counts
 */
const parseFollowers = (followersString: string): number => {
  return parseFloat(followersString.replace('K', '')) * 1000;
};

/**
 * Custom hook to calculate platform statistics
 */
function usePlatformStats(): PlatformStats {
  return useMemo(() => {
    const streaming = streamingPlatforms.reduce((acc, platform) => {
      return acc + parseFollowers(platform.followers);
    }, 0);

    const social = socialPlatforms.reduce((acc, platform) => {
      return acc + parseFollowers(platform.followers);
    }, 0);

    return {
      streaming,
      social,
      total: streaming + social,
    };
  }, []);
}

/**
 * Component for displaying statistics
 */
interface StatCardProps {
  label: string;
  value: string;
  color: string;
}

function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className='text-center'>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className='text-gray-400 text-sm'>{label}</div>
    </div>
  );
}

/**
 * Animated background gradient
 */
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

/**
 * Header section with title and stats
 */
interface HeaderProps {
  stats: PlatformStats;
}

function LinksHeader({ stats }: HeaderProps) {
  const formatFollowers = (count: number): string => {
    return `${Math.round(count / 1000)}K+`;
  };

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

      <div className='flex justify-center space-x-8'>
        <StatCard
          label='Streaming Followers'
          value={formatFollowers(stats.streaming)}
          color='text-cyan-400'
        />
        <StatCard
          label='Social Followers'
          value={formatFollowers(stats.social)}
          color='text-purple-400'
        />
        <StatCard
          label='Total Reach'
          value={formatFollowers(stats.total)}
          color='text-pink-400'
        />
      </div>
    </motion.div>
  );
}

/**
 * Section title with icon
 */
interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  iconColor: string;
}

function SectionTitle({ icon, title, iconColor }: SectionTitleProps) {
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

/**
 * Platform section component using discriminated unions
 */
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
 * Main Links component
 */
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
      </div>
    </section>
  );
}
