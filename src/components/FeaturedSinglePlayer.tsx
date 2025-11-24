import { featuredSingle } from '@/const/tracks';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { memo } from 'react';
import BackgroundEffects from './player/BackgroundEffects';
import PlayerControls from './player/PlayerControls';
import { ProgressBar } from './player/ProgressBar';
import { useAudioPlayerFeatured } from '@/hooks/UseAudioPlayerReturn';

/**
 * Configuración de animaciones
 */
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

/**
 * ✅ REPRODUCTOR PRINCIPAL DE LA CANCIÓN DESTACADA
 *
 * 🔧 IMPORTANTE: Este componente usa useAudioPlayerFeatured (no useAudioPlayer)
 *    porque necesita reproducción de audio REAL.
 *
 * Responsabilidades:
 * - Orquestar el hook useAudioPlayerFeatured
 * - Renderizar componentes hijos (PlayerControls, ProgressBar)
 * - Manejar el layout y animaciones
 * - Mostrar información de la canción
 * - Proporcionar estados a componentes hijos
 *
 * Características:
 * - Completamente responsivo
 * - Animaciones fluidas con Framer Motion
 * - Manejo robusto de errores
 * - Indicadores de carga
 * - Integración con Spotify
 *
 * Props: Ninguno (usa dato global de featuredSingle)
 *
 * @returns JSX con reproductor de audio
 */
const FeaturedSinglePlayer = memo(function FeaturedSinglePlayer() {
  // ✅ CORRECCIÓN: Usar hook con audio real
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

  // Calcular progreso (0-100%)
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      className='relative pt-10 min-h-screen flex items-center justify-center overflow-hidden'
      aria-label='Featured single player'
    >
      {/* Capa 0: Efectos visuales de fondo */}
      <BackgroundEffects />

      {/* Capa 1: Contenido principal */}
      <motion.div
        initial={ANIMATION_CONFIG.container.initial}
        animate={ANIMATION_CONFIG.container.animate}
        transition={ANIMATION_CONFIG.container.transition}
        className='relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'
      >
        {/* Badge "LISTEN" */}
        <motion.div
          initial={ANIMATION_CONFIG.badge.initial}
          animate={ANIMATION_CONFIG.badge.animate}
          transition={ANIMATION_CONFIG.badge.transition}
          className='inline-block mb-4'
        >
          <span className='px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm tracking-widest'>
            LISTEN
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={ANIMATION_CONFIG.title.initial}
          animate={ANIMATION_CONFIG.title.animate}
          transition={ANIMATION_CONFIG.title.transition}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight'
        >
          NEW SINGLE
        </motion.h1>

        {/* Contenedor del reproductor */}
        <motion.div
          initial={ANIMATION_CONFIG.playerContainer.initial}
          animate={ANIMATION_CONFIG.playerContainer.animate}
          transition={ANIMATION_CONFIG.playerContainer.transition}
          className='relative mx-auto max-w-md sm:max-w-lg md:max-w-xl'
        >
          {/* Cover art con efecto de reproducción */}
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

              {/* Glow effect cuando está reproduciendo */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl -z-10'
                  aria-hidden='true'
                />
              )}
            </motion.div>
          </div>

          {/* Info de la canción */}
          <motion.div
            initial={ANIMATION_CONFIG.songInfo.initial}
            animate={ANIMATION_CONFIG.songInfo.animate}
            transition={ANIMATION_CONFIG.songInfo.transition}
            className='mb-8 text-center'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2'>
              {featuredSingle.title}
            </h2>
            <p className='text-gray-300 text-lg mb-2'>
              {featuredSingle.description}
            </p>
            <span className='text-purple-400 font-semibold'>
              {featuredSingle.year}
            </span>
          </motion.div>

          {/* Sección de controles */}
          <motion.div
            initial={ANIMATION_CONFIG.controls.initial}
            animate={ANIMATION_CONFIG.controls.animate}
            transition={ANIMATION_CONFIG.controls.transition}
            className='space-y-6'
          >
            {/* Mensaje de error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm'
                role='alert'
              >
                <p className='font-semibold'>Error de reproducción</p>
                <p>{error}</p>
              </motion.div>
            )}

            {/* Indicador de carga */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-white/70 text-sm flex items-center justify-center space-x-2'
              >
                <div className='w-2 h-2 rounded-full bg-white/70 animate-pulse' />
                <span>Cargando audio...</span>
              </motion.div>
            )}

            {/* ✅ Componente de controles - recibe función real togglePlay() */}
            <PlayerControls
              isPlaying={isPlaying}
              onPlayToggle={togglePlay}
              isLoading={isLoading}
            />

            {/* ✅ Componente de barra de progreso - recibe currentTime y seek reales */}
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={seek}
              formatTime={formatTime}
              isLoading={isLoading}
            />

            {/* Botones de acción */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-20'>
              <motion.a
                href={featuredSingle.spotifyUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 transition-colors'
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
