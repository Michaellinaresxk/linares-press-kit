import { featuredSingle } from '@/const/tracks';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { memo } from 'react';
import BackgroundEffects from './player/BackgroundEffects';
import PlayerControls from './player/PlayerControls';
import { ProgressBar } from './player/ProgressBar';
import { useAudioPlayerFeatured } from '@/hooks/UseAudioPlayerReturn';

const ANIMATION_CONFIG = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.2 },
  },
  badge: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.5 },
  },
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.7 },
  },
  playerContainer: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.9 },
  },
  songInfo: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 1.1 },
  },
  controls: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 1.3 },
  },
} as const;

const FeaturedSinglePlayer = memo(function FeaturedSinglePlayer() {
  const {
    isPlaying,
    currentTime,
    duration,
    isLoading,
    error,
    togglePlay,
    seek,
    formatTime,
  } = useAudioPlayerFeatured(featuredSingle.audioUrl);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      className='relative pt-10 min-h-screen flex items-center justify-center overflow-hidden'
      aria-label='Featured single player'
    >
      <BackgroundEffects />

      <motion.div
        initial={ANIMATION_CONFIG.container.initial}
        animate={ANIMATION_CONFIG.container.animate}
        transition={ANIMATION_CONFIG.container.transition}
        className='relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'
      >
        {/* Badge */}
        <motion.div
          initial={ANIMATION_CONFIG.badge.initial}
          animate={ANIMATION_CONFIG.badge.animate}
          transition={ANIMATION_CONFIG.badge.transition}
          className='inline-block mb-4'
        >
          <span
            className='px-6 py-2 rounded-full text-sm tracking-widest'
            style={{
              background: 'rgba(180,210,244,0.10)',
              border: '1px solid rgba(133,183,235,0.30)',
              color: '#85b7eb',
            }}
          >
            LISTEN
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={ANIMATION_CONFIG.title.initial}
          animate={ANIMATION_CONFIG.title.animate}
          transition={ANIMATION_CONFIG.title.transition}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight'
          style={{ color: '#e8eef5' }}
        >
          NEW SINGLE
        </motion.h2>

        {/* Player container */}
        <motion.div
          initial={ANIMATION_CONFIG.playerContainer.initial}
          animate={ANIMATION_CONFIG.playerContainer.animate}
          transition={ANIMATION_CONFIG.playerContainer.transition}
          className='relative mx-auto max-w-md sm:max-w-lg md:max-w-xl'
        >
          {/* Cover art */}
          <div className='relative mb-8'>
            <motion.div
              animate={isPlaying ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className='relative'
            >
              <Image
                width={320}
                height={320}
                src={featuredSingle.coverImage}
                alt={`${featuredSingle.title} cover art`}
                className='w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-2xl shadow-2xl object-cover'
                priority
              />

              {/* Glow al reproducir — azul frío en lugar de purple/pink */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute inset-0 rounded-2xl -z-10'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(24,95,165,0.35), rgba(15,110,86,0.25))',
                    filter: 'blur(20px)',
                  }}
                  aria-hidden='true'
                />
              )}
            </motion.div>
          </div>

          {/* Song info */}
          <motion.div
            initial={ANIMATION_CONFIG.songInfo.initial}
            animate={ANIMATION_CONFIG.songInfo.animate}
            transition={ANIMATION_CONFIG.songInfo.transition}
            className='mb-8 text-center'
          >
            <h3
              className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2'
              style={{ color: '#e8eef5' }}
            >
              {featuredSingle.title}
            </h3>
            <p className='text-lg mb-2' style={{ color: '#8faabf' }}>
              {featuredSingle.description}
            </p>
            <span className='font-semibold' style={{ color: '#85b7eb' }}>
              {featuredSingle.year}
            </span>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={ANIMATION_CONFIG.controls.initial}
            animate={ANIMATION_CONFIG.controls.animate}
            transition={ANIMATION_CONFIG.controls.transition}
            className='space-y-6'
          >
            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-3 rounded-lg text-sm'
                style={{
                  background: 'rgba(162,45,45,0.15)',
                  border: '1px solid rgba(162,45,45,0.35)',
                  color: '#f09595',
                }}
                role='alert'
              >
                <p className='font-semibold'>Error de reproducción</p>
                <p>{error}</p>
              </motion.div>
            )}

            {/* Loading */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-sm flex items-center justify-center space-x-2'
                style={{ color: '#5a7a8e' }}
              >
                <div
                  className='w-2 h-2 rounded-full animate-pulse'
                  style={{ background: '#5a7a8e' }}
                />
                <span>Cargando audio...</span>
              </motion.div>
            )}

            <PlayerControls
              isPlaying={isPlaying}
              onPlayToggle={togglePlay}
              isLoading={isLoading}
            />

            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={seek}
              formatTime={formatTime}
              isLoading={isLoading}
            />

            {/* Spotify CTA */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-20'>
              <motion.a
                href={featuredSingle.spotifyUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300'
                style={{
                  background: 'rgba(15,110,86,0.2)',
                  border: '1px solid rgba(29,185,84,0.4)',
                  color: '#5dcaa5',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Stream ${featuredSingle.title} on Spotify`}
              >
                <ExternalLink size={18} aria-hidden='true' />
                <span>Stream on Spotify</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});

FeaturedSinglePlayer.displayName = 'FeaturedSinglePlayer';

export default FeaturedSinglePlayer;
