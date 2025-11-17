'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { StreamingPlatform, SocialPlatform } from '@/const/links';

interface PlatformCardProps {
  platform: StreamingPlatform | SocialPlatform;
  type: 'streaming' | 'social';
  index: number;
}

export default function PlatformCard({
  platform,
  type,
  index,
}: PlatformCardProps) {
  const isStreaming = type === 'streaming';
  const isStreampPlatform = (
    p: StreamingPlatform | SocialPlatform
  ): p is StreamingPlatform => isStreaming;

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
              {'handle' in platform && (
                <p className='text-gray-400 text-sm'>{platform.handle}</p>
              )}
            </div>
          </div>

          {isStreampPlatform(platform) && platform.verified && (
            <div className='bg-blue-600 rounded-full p-1'>
              <svg width='12' height='12' viewBox='0 0 24 24' fill='white'>
                <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
              </svg>
            </div>
          )}
        </div>

        {/* Stats */}
        {isStreaming ? (
          isStreampPlatform(platform) && (
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
          )
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
            {isStreaming
              ? 'Stream'
              : 'type' in platform
              ? platform.type
              : 'Follow'}
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
