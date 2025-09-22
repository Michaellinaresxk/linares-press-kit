'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play, Heart } from 'lucide-react';
import { socialPlatforms, streamingPlatforms } from '@/const/links';
import PlatformCard from './cards/PlatformCard';
import QuickLinks from './QuickLinks';

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
      </div>
    </section>
  );
}
