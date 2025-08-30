'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Ticket, Camera, Clock, Users } from 'lucide-react';

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

// Galería de fotos de conciertos
const concertPhotos = [
  {
    id: 1,
    src: '/images/live1.jpg',
    venue: 'Rock Festival 2023',
    location: 'Barcelona, Spain',
    photographer: 'Anna Rodriguez',
  },
  {
    id: 2,
    src: '/images/live2.jpg',
    venue: 'Metal Underground',
    location: 'Berlin, Germany',
    photographer: 'Hans Mueller',
  },
  {
    id: 3,
    src: '/images/live3.jpg',
    venue: 'Progressive Night',
    location: 'London, UK',
    photographer: 'James Wilson',
  },
  {
    id: 4,
    src: '/images/live4.jpg',
    venue: 'Hotel Atlantis',
    location: 'Dubai, UAE',
    photographer: 'Sarah Al-Zahra',
  },
  {
    id: 5,
    src: '/images/live5.jpg',
    venue: 'Jazz & Metal Fusion',
    location: 'New York, USA',
    photographer: 'Mike Johnson',
  },
  {
    id: 6,
    src: '/images/live6.jpg',
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300'
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className='flex items-center justify-between'>
        {/* Fecha */}
        <div className='flex items-center space-x-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-purple-400'>
              {showDate.getDate()}
            </div>
            <div className='text-xs text-gray-400'>
              {monthNames[showDate.getMonth()]}
            </div>
          </div>

          {/* Info del show */}
          <div>
            <h3 className='text-lg font-bold text-white mb-1'>{show.venue}</h3>
            <div className='flex items-center space-x-2 text-gray-400 text-sm'>
              <MapPin size={14} />
              <span>
                {show.city}, {show.country}
              </span>
            </div>
            <div className='flex items-center space-x-2 mt-1'>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  show.type === 'Headline Show'
                    ? 'bg-purple-600/20 text-purple-300'
                    : show.type === 'Festival'
                    ? 'bg-cyan-600/20 text-cyan-300'
                    : 'bg-gray-600/20 text-gray-300'
                }`}
              >
                {show.type}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  show.status === 'confirmed'
                    ? 'bg-green-600/20 text-green-300'
                    : 'bg-yellow-600/20 text-yellow-300'
                }`}
              >
                {show.status}
              </span>
            </div>
          </div>
        </div>

        {/* Botón de tickets */}
        <motion.button
          className='px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold flex items-center space-x-2'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={show.status === 'pending'}
        >
          <Ticket size={16} />
          <span>{show.status === 'pending' ? 'Soon' : 'Tickets'}</span>
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
      className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className='relative max-w-4xl max-h-full'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-gray-900 rounded-lg overflow-hidden'>
          <div
            className='w-full h-96 bg-cover bg-center'
            style={{ backgroundImage: `url('${photo.src}')` }}
          />
          <div className='p-6'>
            <h3 className='text-xl font-bold text-white mb-2'>{photo.venue}</h3>
            <div className='flex items-center justify-between text-gray-400 text-sm'>
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
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.5 }}
          className='absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl'
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
          <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>
            Live Shows
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto'>
            Experience Linarex live. From intimate hotel venues to major
            festivals, each performance is a unique journey through progressive
            soundscapes.
          </p>
        </motion.div>

        {/* Upcoming Shows */}
        <div className='mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-8'
          >
            <Calendar className='text-purple-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>Upcoming Dates</h3>
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
            <p className='text-gray-400 mb-4'>
              Interested in booking Linarex for your venue or event?
            </p>
            <motion.button
              className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold'
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
            className='flex items-center mb-8'
          >
            <Camera className='text-pink-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>Live Gallery</h3>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
                <div
                  className='w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110'
                  style={{ backgroundImage: `url('${photo.src}')` }}
                />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                  <div className='p-3'>
                    <p className='text-white text-sm font-semibold'>
                      {photo.venue}
                    </p>
                    <p className='text-gray-300 text-xs'>{photo.location}</p>
                  </div>
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
          className='mt-16 text-center'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-8'>
              Performance History
            </h3>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div>
                <div className='text-3xl font-bold text-purple-400 mb-2'>
                  50+
                </div>
                <div className='text-gray-400 text-sm'>Shows Performed</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-pink-400 mb-2'>15</div>
                <div className='text-gray-400 text-sm'>Countries Visited</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-cyan-400 mb-2'>
                  25k+
                </div>
                <div className='text-gray-400 text-sm'>Audience Reached</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-green-400 mb-2'>8</div>
                <div className='text-gray-400 text-sm'>
                  Festival Appearances
                </div>
              </div>
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
