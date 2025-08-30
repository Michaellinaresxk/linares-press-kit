'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Users, Play, Heart, Share2, Globe } from 'lucide-react';

// Streaming platforms
const streamingPlatforms = [
  {
    id: 1,
    name: 'Spotify',
    followers: '12.5K',
    monthlyListeners: '45.2K',
    url: 'https://open.spotify.com/artist/linarex',
    color: '#1DB954',
    description: 'Main catalog and playlists',
    verified: true,
  },
  {
    id: 2,
    name: 'Apple Music',
    followers: '8.3K',
    monthlyListeners: '32.1K',
    url: 'https://music.apple.com/artist/linarex',
    color: '#FA243C',
    description: 'High-quality streaming',
    verified: true,
  },
  {
    id: 3,
    name: 'YouTube Music',
    followers: '15.7K',
    monthlyListeners: '78.4K',
    url: 'https://music.youtube.com/channel/linarex',
    color: '#FF0000',
    description: 'Music videos and live sessions',
    verified: true,
  },
  {
    id: 4,
    name: 'SoundCloud',
    followers: '9.2K',
    monthlyListeners: '28.9K',
    url: 'https://soundcloud.com/linarex',
    color: '#FF5500',
    description: 'Demos and exclusive content',
    verified: false,
  },
  {
    id: 5,
    name: 'Bandcamp',
    followers: '3.1K',
    monthlyListeners: '12.4K',
    url: 'https://linarex.bandcamp.com',
    color: '#1DA0C3',
    description: 'Direct artist support',
    verified: true,
  },
  {
    id: 6,
    name: 'Amazon Music',
    followers: '5.8K',
    monthlyListeners: '21.3K',
    url: 'https://music.amazon.com/artists/linarex',
    color: '#FF9900',
    description: 'HD and Ultra HD quality',
    verified: true,
  },
];

// Social media platforms
const socialPlatforms = [
  {
    id: 1,
    name: 'Instagram',
    handle: '@linarex.official',
    followers: '18.4K',
    url: 'https://instagram.com/linarex.official',
    color: '#E4405F',
    type: 'photo',
    description: 'Behind the scenes, studio life',
  },
  {
    id: 2,
    name: 'Twitter/X',
    handle: '@linarex_music',
    followers: '12.7K',
    url: 'https://x.com/linarex_music',
    color: '#000000',
    type: 'text',
    description: 'Updates, thoughts, industry news',
  },
  {
    id: 3,
    name: 'Facebook',
    handle: '/LinarexOfficial',
    followers: '9.3K',
    url: 'https://facebook.com/LinarexOfficial',
    color: '#1877F2',
    type: 'community',
    description: 'Community and event updates',
  },
  {
    id: 4,
    name: 'TikTok',
    handle: '@linarexmusic',
    followers: '25.1K',
    url: 'https://tiktok.com/@linarexmusic',
    color: '#000000',
    type: 'video',
    description: 'Short-form content, music clips',
  },
  {
    id: 5,
    name: 'LinkedIn',
    handle: '/in/linarex-producer',
    followers: '4.2K',
    url: 'https://linkedin.com/in/linarex-producer',
    color: '#0A66C2',
    type: 'professional',
    description: 'Industry connections, collaborations',
  },
  {
    id: 6,
    name: 'Discord',
    handle: 'Linarex Community',
    followers: '1.8K',
    url: 'https://discord.gg/linarex',
    color: '#5865F2',
    type: 'community',
    description: 'Direct fan interaction, exclusives',
  },
];

// Official links
const officialLinks = [
  {
    id: 1,
    name: 'Official Website',
    url: 'https://linarex-music.com',
    description: 'Main hub for all content and updates',
    icon: Globe,
  },
  {
    id: 2,
    name: 'Booking & Management',
    url: 'mailto:booking@linarex-music.com',
    description: 'Professional inquiries and booking',
    icon: Users,
  },
  {
    id: 3,
    name: 'Press Kit',
    url: '#media-kit',
    description: 'Media assets and press materials',
    icon: Share2,
  },
];

interface PlatformCardProps {
  platform: any;
  type: 'streaming' | 'social';
  index: number;
}

function PlatformCard({ platform, type, index }: PlatformCardProps) {
  return (
    <motion.a
      href={platform.url}
      target='_blank'
      rel='noopener noreferrer'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='block group'
      whileHover={{ y: -5 }}
    >
      <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full'>
        {/* Header */}
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center space-x-3'>
            <div
              className='w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg'
              style={{ backgroundColor: platform.color }}
            >
              {platform.name.charAt(0)}
            </div>
            <div>
              <h3 className='font-bold text-white group-hover:text-purple-300 transition-colors'>
                {platform.name}
              </h3>
              {platform.handle && (
                <p className='text-gray-400 text-sm'>{platform.handle}</p>
              )}
            </div>
          </div>

          {platform.verified && (
            <div className='bg-blue-600 rounded-full p-1'>
              <svg width='12' height='12' viewBox='0 0 24 24' fill='white'>
                <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
              </svg>
            </div>
          )}
        </div>

        {/* Stats */}
        {type === 'streaming' ? (
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <div className='text-lg font-bold text-white'>
                {platform.followers}
              </div>
              <div className='text-gray-400 text-xs'>Followers</div>
            </div>
            <div>
              <div className='text-lg font-bold text-purple-400'>
                {platform.monthlyListeners}
              </div>
              <div className='text-gray-400 text-xs'>Monthly</div>
            </div>
          </div>
        ) : (
          <div className='mb-4'>
            <div className='text-xl font-bold text-white'>
              {platform.followers}
            </div>
            <div className='text-gray-400 text-sm'>Followers</div>
          </div>
        )}

        {/* Description */}
        <p className='text-gray-300 text-sm mb-4'>{platform.description}</p>

        {/* Action button */}
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 text-xs capitalize'>
            {type === 'streaming' ? 'Stream' : platform.type || 'Follow'}
          </span>
          <ExternalLink
            className='text-gray-400 group-hover:text-white transition-colors'
            size={16}
          />
        </div>
      </div>
    </motion.a>
  );
}

function QuickLinks() {
  return (
    <div className='space-y-4'>
      {officialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group'
            whileHover={{ x: 5 }}
          >
            <div className='flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center'>
              <Icon className='text-purple-400' size={20} />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-white group-hover:text-purple-300 transition-colors'>
                {link.name}
              </h3>
              <p className='text-gray-400 text-sm'>{link.description}</p>
            </div>
            <ExternalLink
              className='text-gray-400 group-hover:text-purple-300 transition-colors'
              size={16}
            />
          </motion.a>
        );
      })}
    </div>
  );
}

export default function Links() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Calculate totals
  const totalStreamingFollowers = streamingPlatforms.reduce((acc, platform) => {
    const followers = parseFloat(platform.followers.replace('K', '')) * 1000;
    return acc + followers;
  }, 0);

  const totalSocialFollowers = socialPlatforms.reduce((acc, platform) => {
    const followers = parseFloat(platform.followers.replace('K', '')) * 1000;
    return acc + followers;
  }, 0);

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.8 }}
          className='absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-3xl'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
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
            behind-the-scenes content, and direct interaction with the artist
            and community.
          </p>

          {/* Total reach stats */}
          <div className='flex justify-center space-x-8'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-cyan-400'>
                {Math.round(totalStreamingFollowers / 1000)}K+
              </div>
              <div className='text-gray-400 text-sm'>Streaming Followers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-400'>
                {Math.round(totalSocialFollowers / 1000)}K+
              </div>
              <div className='text-gray-400 text-sm'>Social Followers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-pink-400'>
                {Math.round(
                  (totalStreamingFollowers + totalSocialFollowers) / 1000
                )}
                K+
              </div>
              <div className='text-gray-400 text-sm'>Total Reach</div>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <div className='max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-8 text-center'>
              Quick Links
            </h3>
            <QuickLinks />
          </div>
        </motion.div>

        {/* Streaming Platforms */}
        <div className='mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-8'
          >
            <Play className='text-cyan-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>
              Streaming Platforms
            </h3>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {streamingPlatforms.map((platform, index) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                type='streaming'
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className='mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-8'
          >
            <Heart className='text-pink-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>Social Media</h3>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {socialPlatforms.map((platform, index) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                type='social'
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto text-center'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>Stay Updated</h3>
            <p className='text-gray-400 mb-6'>
              Get exclusive updates on new releases, collaborations, and
              behind-the-scenes content directly in your inbox.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='your@email.com'
                className='flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors'
              />
              <motion.button
                className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold whitespace-nowrap'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>

            <p className='text-gray-500 text-xs mt-4'>
              No spam, unsubscribe anytime. Privacy policy available on website.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
