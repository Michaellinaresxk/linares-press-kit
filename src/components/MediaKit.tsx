'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Download,
  Image,
  FileText,
  Music,
  Eye,
  Folder,
  Archive,
} from 'lucide-react';

// Assets para download
const mediaAssets = {
  photos: [
    {
      id: 1,
      name: 'Linarex - Studio Portrait (High Res)',
      type: 'photo',
      format: 'JPG',
      size: '3.2 MB',
      resolution: '3000x4000',
      description:
        'Professional studio portrait, perfect for press releases and promotional materials',
      thumbnail: '/images/media/portrait-1-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-portrait-1-highres.jpg',
      category: 'portraits',
    },
    {
      id: 2,
      name: 'Linarex - Live Performance',
      type: 'photo',
      format: 'JPG',
      size: '2.8 MB',
      resolution: '4000x2667',
      description: 'Dynamic live performance shot from recent concert',
      thumbnail: '/images/media/live-1-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-live-1-highres.jpg',
      category: 'live',
    },
    {
      id: 3,
      name: 'Linarex - Studio Session',
      type: 'photo',
      format: 'JPG',
      size: '2.1 MB',
      resolution: '2800x1867',
      description: 'Behind the scenes in recording studio',
      thumbnail: '/images/media/studio-1-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-studio-1-highres.jpg',
      category: 'studio',
    },
    {
      id: 4,
      name: 'Linarex - Promo Pack (5 Photos)',
      type: 'photo',
      format: 'ZIP',
      size: '15.2 MB',
      resolution: 'Various',
      description: 'Complete photo package with different styles and settings',
      thumbnail: '/images/media/promo-pack-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-promo-pack.zip',
      category: 'packages',
    },
  ],
  logos: [
    {
      id: 5,
      name: 'Linarex Logo - Main (Vector)',
      type: 'logo',
      format: 'SVG',
      size: '45 KB',
      resolution: 'Vector',
      description:
        'Main logo in scalable vector format with transparent background',
      thumbnail: '/images/media/logo-main-thumb.png',
      downloadUrl: '/media/downloads/linarex-logo-main.svg',
      category: 'logos',
    },
    {
      id: 6,
      name: 'Linarex Logo - Horizontal',
      type: 'logo',
      format: 'PNG',
      size: '120 KB',
      resolution: '2000x800',
      description: 'Horizontal layout for banners and wide formats',
      thumbnail: '/images/media/logo-horizontal-thumb.png',
      downloadUrl: '/media/downloads/linarex-logo-horizontal.png',
      category: 'logos',
    },
    {
      id: 7,
      name: 'Linarex Logo Pack',
      type: 'logo',
      format: 'ZIP',
      size: '2.5 MB',
      resolution: 'Various',
      description:
        'Complete logo package: SVG, PNG, EPS in different variations',
      thumbnail: '/images/media/logo-pack-thumb.png',
      downloadUrl: '/media/downloads/linarex-logo-pack.zip',
      category: 'packages',
    },
  ],
  documents: [
    {
      id: 8,
      name: 'Artist Biography (Long Form)',
      type: 'document',
      format: 'PDF',
      size: '180 KB',
      resolution: 'A4',
      description: 'Comprehensive artist biography and career overview',
      thumbnail: '/images/media/bio-long-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-biography-long.pdf',
      category: 'text',
    },
    {
      id: 9,
      name: 'One-Sheet Press Release',
      type: 'document',
      format: 'PDF',
      size: '95 KB',
      resolution: 'A4',
      description: 'Concise one-page press information sheet',
      thumbnail: '/images/media/onesheet-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-onesheet.pdf',
      category: 'text',
    },
    {
      id: 10,
      name: 'Technical Rider',
      type: 'document',
      format: 'PDF',
      size: '220 KB',
      resolution: 'A4',
      description: 'Complete technical requirements for live performances',
      thumbnail: '/images/media/tech-rider-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-tech-rider.pdf',
      category: 'technical',
    },
  ],
  audio: [
    {
      id: 11,
      name: 'Demo Reel (4 Tracks)',
      type: 'audio',
      format: 'ZIP',
      size: '45 MB',
      resolution: '320kbps MP3',
      description: 'High-quality demo reel featuring best tracks',
      thumbnail: '/images/media/demo-reel-thumb.jpg',
      downloadUrl: '/media/downloads/linarex-demo-reel.zip',
      category: 'music',
    },
    {
      id: 12,
      name: 'Stems Pack - Eternal Circuits',
      type: 'audio',
      format: 'ZIP',
      size: '180 MB',
      resolution: 'WAV 24-bit',
      description: 'Individual track stems for remix and analysis',
      thumbnail: '/images/media/stems-thumb.jpg',
      downloadUrl: '/media/downloads/eternal-circuits-stems.zip',
      category: 'stems',
    },
  ],
};

const categories = [
  { id: 'all', name: 'All Assets', icon: Archive },
  { id: 'portraits', name: 'Portraits', icon: Image },
  { id: 'live', name: 'Live Photos', icon: Eye },
  { id: 'logos', name: 'Logos & Brand', icon: Folder },
  { id: 'text', name: 'Documents', icon: FileText },
  { id: 'music', name: 'Audio Files', icon: Music },
];

interface AssetCardProps {
  asset: any;
  index: number;
}

function AssetCard({ asset, index }: AssetCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simular descarga
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-purple-500/30 transition-all duration-300'
      whileHover={{ y: -5 }}
    >
      {/* Thumbnail */}
      <div className='relative h-48 bg-gray-700 overflow-hidden'>
        <div
          className='w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110'
          style={{ backgroundImage: `url('${asset.thumbnail}')` }}
        />
        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <motion.button
            onClick={handleDownload}
            className='px-4 py-2 bg-purple-600 rounded-lg text-white font-semibold flex items-center space-x-2'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isDownloading}
          >
            <Download size={16} />
            <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
          </motion.button>
        </div>

        {/* Format badge */}
        <div className='absolute top-3 right-3'>
          <span className='bg-black/70 text-white text-xs px-2 py-1 rounded-full font-semibold'>
            {asset.format}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className='p-4'>
        <h3 className='font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
          {asset.name}
        </h3>
        <p className='text-gray-400 text-sm mb-3 line-clamp-2'>
          {asset.description}
        </p>

        {/* Metadata */}
        <div className='flex items-center justify-between text-xs text-gray-500'>
          <div className='space-y-1'>
            <div>Size: {asset.size}</div>
            <div>Format: {asset.resolution}</div>
          </div>

          <motion.button
            onClick={handleDownload}
            className='p-2 text-gray-400 hover:text-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            disabled={isDownloading}
          >
            <Download size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MediaKit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Combinar todos los assets
  const allAssets = [
    ...mediaAssets.photos,
    ...mediaAssets.logos,
    ...mediaAssets.documents,
    ...mediaAssets.audio,
  ];

  // Filtrar por categoría
  const filteredAssets =
    activeCategory === 'all'
      ? allAssets
      : allAssets.filter((asset) => asset.category === activeCategory);

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.8 }}
          className='absolute bottom-20 right-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl'
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
          <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6'>
            Media Kit
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto mb-8'>
            High-quality assets for media, press, and promotional use. All files
            are professionally prepared and ready for immediate download.
          </p>

          {/* Quick download all */}
          <motion.button
            className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold flex items-center space-x-3 mx-auto'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Archive size={20} />
            <span>Download Complete Media Kit (250 MB)</span>
          </motion.button>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-2 mb-12'
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Assets Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {filteredAssets.map((asset, index) => (
            <AssetCard key={asset.id} asset={asset} index={index} />
          ))}
        </div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'
        >
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            Usage Guidelines
          </h3>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h4 className='text-lg font-semibold text-purple-400 mb-3'>
                Permitted Use
              </h4>
              <ul className='space-y-2 text-gray-300 text-sm'>
                <li>• Media coverage and press articles</li>
                <li>• Promotional materials and advertising</li>
                <li>• Event listings and concert promotions</li>
                <li>• Social media posts (with credit)</li>
                <li>• Radio and podcast promotional use</li>
              </ul>
            </div>

            <div>
              <h4 className='text-lg font-semibold text-cyan-400 mb-3'>
                Requirements
              </h4>
              <ul className='space-y-2 text-gray-300 text-sm'>
                <li>• Credit: "Photo/Logo courtesy of Linarex"</li>
                <li>• No alteration without permission</li>
                <li>• Commercial use requires approval</li>
                <li>• Maintain aspect ratios when resizing</li>
                <li>• Link back to official website when possible</li>
              </ul>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <p className='text-gray-400 mb-4'>
              For additional assets, custom requests, or commercial licensing
              inquiries:
            </p>
            <motion.button
              className='px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Media Team
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center'
        >
          <div>
            <div className='text-2xl font-bold text-cyan-400 mb-1'>
              {allAssets.length}
            </div>
            <div className='text-gray-400 text-sm'>Total Assets</div>
          </div>
          <div>
            <div className='text-2xl font-bold text-purple-400 mb-1'>250+</div>
            <div className='text-gray-400 text-sm'>MB Total Size</div>
          </div>
          <div>
            <div className='text-2xl font-bold text-pink-400 mb-1'>4K</div>
            <div className='text-gray-400 text-sm'>Max Resolution</div>
          </div>
          <div>
            <div className='text-2xl font-bold text-green-400 mb-1'>100%</div>
            <div className='text-gray-400 text-sm'>Press Ready</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
