'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Ticket, Camera, X } from 'lucide-react';

// Próximas fechas
const upcomingShows = [
  {
    id: 1,
    date: '2024-02-15',
    venue: 'Metal Underground',
    city: 'Berlin',
    country: 'Germany',
    type: 'Headline Show',
    status: 'confirmed',
    ticketLink: '#',
  },
  {
    id: 2,
    date: '2024-03-08',
    venue: 'Progressive Night',
    city: 'Amsterdam',
    country: 'Netherlands',
    type: 'Festival',
    status: 'confirmed',
    ticketLink: '#',
  },
  {
    id: 3,
    date: '2024-03-22',
    venue: 'Rock Palace',
    city: 'Madrid',
    country: 'Spain',
    type: 'Support Act',
    status: 'pending',
    ticketLink: '#',
  },
];

// Galería de fotos de conciertos con imágenes reales
const concertPhotos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop',
    venue: 'Rock Festival 2023',
    location: 'Barcelona, Spain',
    photographer: 'Anna Rodriguez',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=800&fit=crop',
    venue: 'Metal Underground',
    location: 'Berlin, Germany',
    photographer: 'Hans Mueller',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
    venue: 'Progressive Night',
    location: 'London, UK',
    photographer: 'James Wilson',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=800&fit=crop',
    venue: 'Hotel Atlantis',
    location: 'Dubai, UAE',
    photographer: 'Sarah Al-Zahra',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=800&fit=crop',
    venue: 'Jazz & Metal Fusion',
    location: 'New York, USA',
    photographer: 'Mike Johnson',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=800&fit=crop',
    venue: 'Cultural Exchange',
    location: 'Tokyo, Japan',
    photographer: 'Yuki Tanaka',
  },
];

interface ShowCardProps {
  show: (typeof upcomingShows)[0];
  index: number;
}

function ShowCard({ show, index }: ShowCardProps) {
  const showDate = new Date(show.date);
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const getStatusStyles = (status: string) =>
    ({
      confirmed: 'bg-green-600/20 text-green-300 border-green-500/30',
      pending: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
    }[status] || 'bg-gray-600/20 text-gray-300 border-gray-500/30');

  const getTypeStyles = (type: string) =>
    ({
      'Headline Show': 'bg-purple-600/20 text-purple-300 border-purple-500/30',
      Festival: 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
      'Support Act': 'bg-gray-600/20 text-gray-300 border-gray-500/30',
    }[type] || 'bg-gray-600/20 text-gray-300 border-gray-500/30');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300'
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        {/* Fecha e Info del show */}
        <div className='flex items-center space-x-4'>
          <div className='text-center flex-shrink-0'>
            <div className='text-xl md:text-2xl font-bold text-purple-400'>
              {showDate.getDate()}
            </div>
            <div className='text-xs text-gray-400'>
              {monthNames[showDate.getMonth()]}
            </div>
          </div>

          <div className='min-w-0 flex-1'>
            <h3 className='text-base md:text-lg font-bold text-white mb-1 truncate'>
              {show.venue}
            </h3>
            <div className='flex items-center space-x-2 text-gray-400 text-sm mb-2'>
              <MapPin size={14} className='flex-shrink-0' />
              <span className='truncate'>
                {show.city}, {show.country}
              </span>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <span
                className={`px-2 py-1 rounded-full text-xs border ${getTypeStyles(
                  show.type
                )}`}
              >
                {show.type}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs border ${getStatusStyles(
                  show.status
                )}`}
              >
                {show.status}
              </span>
            </div>
          </div>
        </div>

        {/* Botón de tickets */}
        <motion.button
          className={`px-4 md:px-6 py-2 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 flex-shrink-0 ${
            show.status === 'pending'
              ? 'bg-gray-600/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
          }`}
          whileHover={show.status !== 'pending' ? { scale: 1.05 } : {}}
          whileTap={show.status !== 'pending' ? { scale: 0.95 } : {}}
          disabled={show.status === 'pending'}
        >
          <Ticket size={16} />
          <span className='hidden sm:inline'>
            {show.status === 'pending' ? 'Soon' : 'Tickets'}
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

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
            <img // @next/next/no-img-element
              src={photo.src}
              alt={`${photo.venue} - ${photo.location}`}
              className='w-full h-64 sm:h-80 md:h-96 object-cover'
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

export default function LiveShows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof concertPhotos)[0] | null
  >(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className='relative py-16 md:py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.5 }}
          className='absolute bottom-20 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-500 rounded-full blur-3xl'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 md:mb-6'>
            Live Shows
          </h2>
          <p className='text-gray-400 text-base md:text-lg max-w-3xl mx-auto px-4'>
            Experience Linarex live. From intimate hotel venues to major
            festivals, each performance is a unique journey through progressive
            soundscapes.
          </p>
        </motion.div>

        {/* Upcoming Shows */}
        <div className='mb-16 md:mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-6 md:mb-8'
          >
            <Calendar className='text-purple-400 mr-3' size={24} />
            <h3 className='text-xl md:text-2xl font-bold text-white'>
              Upcoming Dates
            </h3>
          </motion.div>

          <div className='space-y-4'>
            {upcomingShows.map((show, index) => (
              <ShowCard key={show.id} show={show} index={index} />
            ))}
          </div>

          {/* Contact for booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-center mt-8'
          >
            <p className='text-gray-400 mb-4 text-sm md:text-base'>
              Interested in booking Linarex for your venue or event?
            </p>
            <motion.button
              className='px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact for Booking
            </motion.button>
          </motion.div>
        </div>

        {/* Live Photos Gallery */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-6 md:mb-8'
            id='gallery'
          >
            <Camera className='text-pink-400 mr-3' size={24} />
            <h3 className='text-xl md:text-2xl font-bold text-white'>
              Live Gallery
            </h3>
          </motion.div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4'>
            {concertPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative aspect-square rounded-lg overflow-hidden cursor-pointer group'
                onClick={() => setSelectedPhoto(photo)}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={photo.src}
                  alt={`${photo.venue} - ${photo.location}`}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                  <div className='p-2 md:p-3 w-full'>
                    <p className='text-white text-xs md:text-sm font-semibold truncate'>
                      {photo.venue}
                    </p>
                    <p className='text-gray-300 text-xs truncate'>
                      {photo.location}
                    </p>
                  </div>
                </div>

                {/* Overlay indicator */}
                <div className='absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <Camera size={12} className='text-white' />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-12 md:mt-16'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50'>
            <h3 className='text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center'>
              Performance History
            </h3>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
              {[
                {
                  number: '50+',
                  label: 'Shows Performed',
                  color: 'text-purple-400',
                },
                {
                  number: '15',
                  label: 'Countries Visited',
                  color: 'text-pink-400',
                },
                {
                  number: '25k+',
                  label: 'Audience Reached',
                  color: 'text-cyan-400',
                },
                {
                  number: '8',
                  label: 'Festival Appearances',
                  color: 'text-green-400',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <div
                    className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className='text-gray-400 text-xs md:text-sm leading-tight'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
