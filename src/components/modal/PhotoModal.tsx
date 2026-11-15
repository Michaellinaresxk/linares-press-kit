import { photoGallery, type GalleryLocale } from '@/const/photoGallery';
import { motion } from 'framer-motion';
import { Camera, MapPin, X } from 'lucide-react';
import Image from 'next/image';

interface PhotoModalProps {
  photo: (typeof photoGallery)[0] | null;
  locale?: GalleryLocale;
  onClose: () => void;
}

function PhotoModal({ photo, locale = 'en', onClose }: PhotoModalProps) {
  if (!photo) return null;

  const alt = photo.alt[locale];
  const venue = (photo.caption ?? photo.venue)[locale];
  const credit = photo.photographer ?? (photo.credit && photo.credit !== 'TBD' ? photo.credit : undefined);

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]'
      role='dialog'
      aria-modal='true'
      aria-label={alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <motion.button
        type='button'
        className='absolute right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] z-[60] rounded-full bg-gray-800/90 p-2.5 text-white shadow-lg transition-colors hover:bg-gray-700/90 sm:p-2'
        onClick={onClose}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label='Close modal'
      >
        <X size={24} />
      </motion.button>

      <motion.div
        className='relative flex max-h-full w-full max-w-4xl flex-col'
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex max-h-full flex-col overflow-hidden rounded-lg border border-gray-700/50 bg-gray-900 shadow-2xl'>
          {/* Image container */}
          <div className='relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black'>
            <Image
              src={photo.src}
              width={1600}
              height={1200}
              alt={alt}
              className='h-auto max-h-[60vh] w-auto max-w-full object-contain sm:max-h-[70vh]'
              sizes='(max-width: 640px) 100vw, 896px'
              priority
            />
          </div>

          {/* Info section */}
          <motion.div
            className='shrink-0 border-t border-gray-700/50 bg-gradient-to-r from-gray-900 to-gray-800 p-4 md:p-6'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h3 className='mb-3 text-lg font-bold text-white md:text-2xl'>
              {venue}
            </h3>

            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              {photo.location && (
                <div className='flex items-center space-x-2 text-gray-300'>
                  <MapPin
                    size={16}
                    className='flex-shrink-0 text-pink-400'
                    aria-hidden='true'
                  />
                  <span className='text-sm md:text-base'>{photo.location}</span>
                </div>
              )}
              {credit && (
                <div className='flex items-center space-x-2 text-gray-300'>
                  <Camera
                    size={16}
                    className='flex-shrink-0 text-cyan-400'
                    aria-hidden='true'
                  />
                  <span className='text-sm md:text-base'>
                    by {credit}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PhotoModal;
