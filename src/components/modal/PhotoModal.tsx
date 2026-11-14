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
  const venue = photo.venue[locale];

  return (
    <motion.div
      className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm'
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
        className='absolute top-4 right-4 z-60 p-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-full text-white transition-colors'
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label='Close modal'
      >
        <X size={24} />
      </motion.button>

      <motion.div
        className='relative w-full max-w-4xl max-h-[90vh] flex flex-col'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-2xl flex flex-col h-full border border-gray-700/50'>
          {/* Image container */}
          <div className='relative flex-1 min-h-0 bg-black overflow-hidden'>
            <Image
              src={photo.src}
              width={600}
              height={400}
              alt={alt}
              className='w-full h-full object-cover'
              priority
            />
            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none' />
          </div>

          {/* Info section */}
          <motion.div
            className='p-4 md:p-6 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
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
              {photo.photographer && (
                <div className='flex items-center space-x-2 text-gray-300'>
                  <Camera
                    size={16}
                    className='flex-shrink-0 text-cyan-400'
                    aria-hidden='true'
                  />
                  <span className='text-sm md:text-base'>
                    by {photo.photographer}
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
