'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Quote,
  Star,
  ExternalLink,
  Calendar,
  Award,
  Newspaper,
} from 'lucide-react';

// Reseñas de medios
const pressReviews = [
  {
    id: 1,
    publication: 'Progressive Rock Magazine',
    reviewer: 'Sarah Mitchell',
    rating: 4.5,
    date: '2024-01-15',
    headline: 'Linarex Pushes Boundaries in Progressive Metal',
    excerpt:
      "What strikes you immediately about Linarex's work is the meticulous attention to sonic detail while never losing sight of the emotional core. This is progressive metal that actually progresses somewhere meaningful.",
    fullQuote:
      "Linarex represents everything that's exciting about modern progressive metal. The technical prowess is undeniable, but it's the cultural fusion elements that truly set this work apart. This is music that speaks multiple languages fluently.",
    logo: '/images/prog-mag-logo.png',
    link: '#',
    featured: true,
  },
  {
    id: 2,
    publication: 'Metal Underground',
    reviewer: 'Hans Mueller',
    rating: 5.0,
    date: '2023-11-22',
    headline: 'International Collaboration Done Right',
    excerpt:
      'In an era where cross-cultural musical collaborations often feel forced, Linarex achieves something genuinely organic and powerful.',
    fullQuote:
      'The way Linarex integrates traditional world music elements with complex progressive structures is masterful. Each collaboration feels like a genuine conversation between musical cultures.',
    logo: '/images/metal-underground-logo.png',
    link: '#',
    featured: false,
  },
  {
    id: 3,
    publication: 'World Music Central',
    reviewer: 'Dr. Elena Vasquez',
    rating: 4.8,
    date: '2023-10-08',
    headline: 'A Producer Who Understands Heritage',
    excerpt:
      "Linarex doesn't just borrow from world music traditions - there's a deep understanding and respect that comes through in every note.",
    fullQuote:
      "As someone who studies musical cultural exchange, I'm impressed by how Linarex maintains the integrity of traditional elements while creating something entirely new. This is cultural fusion at its finest.",
    logo: '/images/world-music-logo.png',
    link: '#',
    featured: true,
  },
  {
    id: 4,
    publication: 'Live Music Review',
    reviewer: 'James Wilson',
    rating: 4.7,
    date: '2023-09-14',
    headline: 'Electric Live Performance Energy',
    excerpt:
      'Witnessing Linarex live is understanding why progressive metal continues to evolve. The energy is infectious, the musicianship flawless.',
    fullQuote:
      "The live show perfectly captures the studio recordings' complexity while adding an energy that's uniquely visceral. This is prog metal that makes you move.",
    logo: '/images/live-review-logo.png',
    link: '#',
    featured: false,
  },
];

// Testimonios de artistas colaboradores
const artistTestimonials = [
  {
    id: 1,
    artist: 'Yuki Tanaka',
    project: 'Digital Sakura',
    country: 'Japan',
    quote:
      "Working with Linarex was transformative. They brought out aspects of our sound I didn't know existed.",
    relationship: 'Collaborator',
  },
  {
    id: 2,
    artist: 'María Contreras',
    project: 'Tango Progressivo',
    country: 'Argentina',
    quote:
      "The respect for tango's soul combined with modern production created something magical.",
    relationship: 'Collaborator',
  },
  {
    id: 3,
    artist: 'Ahmed Al-Rashid',
    project: 'Desert Circuits',
    country: 'Morocco',
    quote:
      'Linarex understood our musical heritage better than most producers from our own culture.',
    relationship: 'Collaborator',
  },
];

// Premios y reconocimientos
const awards = [
  {
    id: 1,
    title: 'Best International Collaboration',
    organization: 'Progressive Music Awards',
    year: '2023',
    category: 'Production',
    project: 'Desert Circuits',
  },
  {
    id: 2,
    title: 'Rising Producer of the Year',
    organization: 'Metal Production Guild',
    year: '2023',
    category: 'Achievement',
    project: 'Overall Work',
  },
  {
    id: 3,
    title: 'Cultural Fusion Excellence',
    organization: 'World Music Awards',
    year: '2024',
    category: 'Innovation',
    project: 'Tango Progressivo',
  },
];

interface ReviewCardProps {
  review: (typeof pressReviews)[0];
  index: number;
}

function ReviewCard({ review, index }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-600'
        }
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-6 border transition-all duration-300 ${
        review.featured
          ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 shadow-xl shadow-purple-500/10'
          : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50'
      }`}
      whileHover={{ y: -5 }}
    >
      {review.featured && (
        <div className='absolute -top-3 -right-3'>
          <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2'>
            <Award size={16} className='text-white' />
          </div>
        </div>
      )}

      {/* Header */}
      <div className='flex items-start justify-between mb-4'>
        <div className='flex-1'>
          <div className='flex items-center space-x-3 mb-2'>
            <div className='w-8 h-8 bg-gray-700 rounded flex items-center justify-center'>
              <Newspaper size={16} className='text-gray-300' />
            </div>
            <div>
              <h3 className='font-bold text-white'>{review.publication}</h3>
              <p className='text-gray-400 text-sm'>by {review.reviewer}</p>
            </div>
          </div>

          <div className='flex items-center space-x-2 mb-2'>
            <div className='flex'>{renderStars(review.rating)}</div>
            <span className='text-gray-400 text-sm'>({review.rating}/5)</span>
          </div>

          <p className='text-gray-300 text-sm'>{review.date}</p>
        </div>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className='p-2 text-gray-400 hover:text-white transition-colors'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={16} />
        </motion.button>
      </div>

      {/* Headline */}
      <h4 className='text-lg font-semibold text-white mb-3'>
        {review.headline}
      </h4>

      {/* Content */}
      <div className='space-y-3'>
        <p className='text-gray-300 leading-relaxed'>
          {isExpanded ? review.fullQuote : review.excerpt}
        </p>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className='text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors'
          whileHover={{ x: 5 }}
        >
          {isExpanded ? 'Read Less' : 'Read Full Review'}
        </motion.button>
      </div>
    </motion.div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof artistTestimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Quote className='text-purple-400 mb-4' size={24} />

      <blockquote className='text-gray-200 mb-4 italic leading-relaxed'>
        "{testimonial.quote}"
      </blockquote>

      <div className='flex items-center justify-between'>
        <cite className='not-italic'>
          <div className='font-semibold text-white'>{testimonial.artist}</div>
          <div className='text-gray-400 text-sm'>
            {testimonial.project} • {testimonial.country}
          </div>
        </cite>
        <span className='text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded'>
          {testimonial.relationship}
        </span>
      </div>
    </motion.div>
  );
}

export default function PressReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-800 via-black to-gray-900 overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 right-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.7 }}
          className='absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl'
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
          <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent mb-6'>
            Press & Reviews
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto'>
            What the music industry is saying about Linarex's unique approach to
            progressive metal and international collaborations.
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <div className='flex items-center justify-center mb-8'>
            <Award className='text-yellow-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>
              Awards & Recognition
            </h3>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-r from-yellow-600/10 to-purple-600/10 rounded-xl p-6 border border-yellow-500/20 text-center'
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full flex items-center justify-center'>
                  <Award className='text-white' size={24} />
                </div>
                <h4 className='font-bold text-white mb-2'>{award.title}</h4>
                <p className='text-gray-300 text-sm mb-1'>
                  {award.organization}
                </p>
                <p className='text-gray-400 text-sm'>
                  {award.year} • {award.category}
                </p>
                {award.project !== 'Overall Work' && (
                  <p className='text-purple-400 text-xs mt-2'>
                    for "{award.project}"
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className='mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-8'
          >
            <Newspaper className='text-purple-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>Media Reviews</h3>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-6'>
            {pressReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>

        {/* Artist Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center mb-8'
          >
            <Quote className='text-pink-400 mr-3' size={28} />
            <h3 className='text-2xl font-bold text-white'>
              Artist Testimonials
            </h3>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            {artistTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Press Kit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Media Inquiries
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              For interviews, review copies, or additional press materials,
              contact our media relations team.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Press Contact
              </motion.button>

              <motion.button
                className='px-8 py-3 border border-gray-600 rounded-lg text-white font-semibold hover:bg-gray-800/50'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Press Kit
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
