import { concertPhotos } from '@/const/liveShows';
import { motion } from 'framer-motion';
import { Camera, MapPin, X } from 'lucide-react';
import Image from 'next/image';

interface PhotoModalProps {
  photo: (typeof concertPhotos)[0] | null;
  onClose: () => void;
}

function PhotoModal({ photo, onClose }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <motion.div
      className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4'
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
      >
        <X size={24} />
      </motion.button>

      <motion.div
        className='relative max-w-4xl max-h-[90vh] w-full'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-2xl'>
          <div className='relative'>
            <Image //  @next/next/no-img-element
              src={photo.src}
              width={64}
              height={64}
              alt={`${photo.venue} - ${photo.location}`}
              className='w-full sm:h-80 md:h-96 object-cover'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent' />
          </div>

          <div className='p-4 md:p-6'>
            <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>
              {photo.venue}
            </h3>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray-400 text-sm'>
              <div className='flex items-center space-x-2'>
                <MapPin size={14} />
                <span>{photo.location}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Camera size={14} />
                <span>by {photo.photographer}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default PhotoModal;
