'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import { artistGallery, liveGallery } from '@/const/photoGallery';
import PhotoModal from './modal/PhotoModal';
import { siteConfig } from '@/lib/site-config';
import { homeCopy, withHomeVars, type HomeLocale } from '@/lib/i18n/home';

type Photo = (typeof artistGallery)[number];
type GalleryVariant = 'artist' | 'live';

export default function PhotoGallery({
  variant = 'artist',
  locale = 'en',
}: {
  variant?: GalleryVariant;
  locale?: HomeLocale;
}) {
  const copy = homeCopy[locale];
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const photos = variant === 'live' ? liveGallery : artistGallery;
  const isLiveGallery = variant === 'live';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section
      ref={containerRef}
      className='relative py-16 md:py-20 lg:py-32 overflow-hidden'
      style={{
        background: 'linear-gradient(to bottom, #111820, #0d1117, #111820)',
      }}
    >
      <div className='absolute inset-0 opacity-15 pointer-events-none'>
        <motion.div
          style={{ y, background: '#185fa5' }}
          className='absolute top-20 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: yReverse, background: '#0f6e56' }}
          className='absolute bottom-20 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16'
        >
          <h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6'
            style={{ color: '#e8eef5' }}
          >
            {isLiveGallery ? copy.gallery.live : copy.gallery.artist}
          </h2>
          <p
            className='text-base md:text-lg max-w-3xl mx-auto px-4'
            style={{ color: '#5a7a8e' }}
          >
            {isLiveGallery
              ? withHomeVars(copy.gallery.liveCopy, {
                  liveShow: siteConfig.liveShow.name,
                })
              : copy.gallery.artistCopy}
          </p>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-6 md:mb-8'
            id='gallery'
          >
            <Camera
              size={24}
              className='mr-3'
              style={{ color: '#85b7eb' }}
              aria-hidden='true'
            />
            <h3
              className='text-xl md:text-2xl font-bold'
              style={{ color: '#c8dcea' }}
            >
              {isLiveGallery ? siteConfig.liveShow.name : 'Artist & press photos'}
            </h3>
          </motion.div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4'>
            {photos.map((photo, index) => (
              <motion.button
                type='button'
                key={photo.id}
                aria-label={`View photo: ${photo.alt}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='group relative block aspect-square w-full overflow-hidden rounded-lg border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#85b7eb]'
                onClick={() => setSelectedPhoto(photo)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'
                  style={{ background: 'rgba(13,17,23,0.75)' }}
                >
                  <div className='p-2 md:p-3 w-full'>
                    <p
                      className='text-xs md:text-sm font-semibold truncate'
                      style={{ color: '#c8dcea' }}
                    >
                      {photo.venue}
                    </p>
                    {photo.location && (
                      <p
                        className='text-xs truncate'
                        style={{ color: '#5a7a8e' }}
                      >
                        {photo.location}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className='absolute top-2 right-2 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{ background: 'rgba(13,17,23,0.6)' }}
                >
                  <Camera
                    size={12}
                    style={{ color: '#85b7eb' }}
                    aria-hidden='true'
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
