'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Music, Users, Quote } from 'lucide-react';

// Datos de colaboraciones - reemplaza con tus datos reales
const collaborations = [
  {
    id: 1,
    artist: 'Yuki Tanaka',
    country: 'Japan',
    flag: '🇯🇵',
    project: 'Digital Sakura',
    year: '2024',
    genre: 'J-Rock Fusion',
    description:
      'Blending traditional Japanese instruments with progressive metal structures',
    quote:
      'Working with Linarex brought a unique Western perspective to our traditional sound',
    image: '/images/collab1.jpg',
    spotifyLink: '#',
    color: '#ff6b9d',
  },
  {
    id: 2,
    artist: 'María Contreras',
    country: 'Argentina',
    flag: '🇦🇷',
    project: 'Tango Progressivo',
    year: '2024',
    genre: 'Tango Metal',
    description:
      'Revolutionary fusion of Argentine tango with heavy prog arrangements',
    quote:
      'Linarex understood the soul of tango and elevated it to another dimension',
    image: '/images/collab2.jpg',
    spotifyLink: '#',
    color: '#4ecdc4',
  },
  {
    id: 3,
    artist: 'Ahmed Al-Rashid',
    country: 'Morocco',
    flag: '🇲🇦',
    project: 'Desert Circuits',
    year: '2023',
    genre: 'Arabic Prog',
    description: 'Traditional Arabic scales meet modern production techniques',
    quote:
      'The respect for our musical heritage while pushing boundaries was incredible',
    image: '/images/collab3.jpg',
    spotifyLink: '#',
    color: '#ffa726',
  },
  {
    id: 4,
    artist: 'Olaf Nordström',
    country: 'Sweden',
    flag: '🇸🇪',
    project: 'Nordic Synthesis',
    year: '2023',
    genre: 'Nordic Metal',
    description:
      'Scandinavian folk elements with cutting-edge metal production',
    quote: 'Linarex captured the essence of our Nordic sound perfectly',
    image: '/images/collab4.jpg',
    spotifyLink: '#',
    color: '#81c784',
  },
  {
    id: 5,
    artist: 'Priya Sharma',
    country: 'India',
    flag: '🇮🇳',
    project: 'Raga Revolution',
    year: '2023',
    genre: 'Indian Classical Fusion',
    description:
      'Classical Indian ragas reimagined through progressive metal lens',
    quote:
      'The way Linarex wove our ragas into complex arrangements was masterful',
    image: '/images/collab5.jpg',
    spotifyLink: '#',
    color: '#ba68c8',
  },
];

interface CollaborationCardProps {
  collab: (typeof collaborations)[0];
  index: number;
}

function CollaborationCard({ collab, index }: CollaborationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className='relative h-80'
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className='relative w-full h-full preserve-3d cursor-pointer'
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className='absolute inset-0 backface-hidden rounded-2xl p-6 border border-gray-700/50'
          style={{
            backfaceVisibility: 'hidden',
            background: `linear-gradient(135deg, ${collab.color}20, transparent), linear-gradient(to bottom, rgba(17,24,39,0.9), rgba(31,41,55,0.9))`,
          }}
        >
          <div className='h-full flex flex-col'>
            {/* Header */}
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center space-x-3'>
                <span className='text-3xl'>{collab.flag}</span>
                <div>
                  <h3 className='text-xl font-bold text-white'>
                    {collab.artist}
                  </h3>
                  <p className='text-gray-400 text-sm'>{collab.country}</p>
                </div>
              </div>
              <span className='text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded'>
                {collab.year}
              </span>
            </div>

            {/* Project info */}
            <div className='flex-1'>
              <div className='mb-3'>
                <h4
                  className='text-lg font-semibold mb-2'
                  style={{ color: collab.color }}
                >
                  {collab.project}
                </h4>
                <span className='text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full'>
                  {collab.genre}
                </span>
              </div>

              <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                {collab.description}
              </p>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Music size={16} className='text-gray-400' />
                <span className='text-gray-400 text-sm'>Collaboration</span>
              </div>
              <div className='text-gray-500 text-xs'>Hover for quote</div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className='absolute inset-0 backface-hidden rounded-2xl p-6 border border-gray-700/50'
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${collab.color}10, transparent), linear-gradient(to bottom, rgba(17,24,39,0.95), rgba(31,41,55,0.95))`,
          }}
        >
          <div className='h-full flex flex-col justify-center items-center text-center'>
            <Quote size={32} className='text-gray-400 mb-4' />
            <blockquote className='text-gray-200 text-lg italic leading-relaxed mb-4'>
              "{collab.quote}"
            </blockquote>
            <cite className='text-gray-400 text-sm'>
              — {collab.artist}, {collab.country}
            </cite>

            <div className='mt-6 space-y-2'>
              <motion.button
                className='w-full px-4 py-2 rounded-lg text-white font-medium'
                style={{ backgroundColor: collab.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Listen to {collab.project}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Collaborations() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-800 via-black to-gray-900 overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 opacity-10'>
        <motion.div
          style={{ y }}
          className='absolute top-10 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.5 }}
          className='absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6'>
            Global Collaborations
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto mb-8'>
            Music knows no borders. These collaborations represent the beautiful
            intersection of cultures, where traditional sounds meet modern
            production to create something entirely new.
          </p>

          {/* Stats */}
          <div className='flex justify-center space-x-8 text-center'>
            <div>
              <motion.div
                className='text-3xl font-bold text-white'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {collaborations.length}+
              </motion.div>
              <div className='text-gray-400 text-sm'>Artists</div>
            </div>
            <div>
              <motion.div
                className='text-3xl font-bold text-purple-400'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                5
              </motion.div>
              <div className='text-gray-400 text-sm'>Continents</div>
            </div>
            <div>
              <motion.div
                className='text-3xl font-bold text-cyan-400'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                8+
              </motion.div>
              <div className='text-gray-400 text-sm'>Genres Fused</div>
            </div>
          </div>
        </motion.div>

        {/* Collaborations grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {collaborations.map((collab, index) => (
            <CollaborationCard key={collab.id} collab={collab} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
