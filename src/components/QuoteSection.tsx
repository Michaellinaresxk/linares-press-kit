'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface QuoteSectionProps {
  quote?: string;
  className?: string;
  textColor?: string;
  lineColor?: string;
}

export default function QuoteSection({
  quote = 'Music, once admitted to the soul, becomes a sort of spirit, and never dies.',
  className = '',
  textColor = 'text-white',
  lineColor = 'bg-white',
}: QuoteSectionProps) {
  return (
    <section className={`relative py-16 md:py-20 lg:py-28 ${className}`}>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Top Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className={`w-px h-16 ${lineColor} mx-auto mb-12 md:mb-16`}
        />

        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='flex justify-center mb-8 md:mb-12'
        >
          <div
            className={`p-3 rounded-full ${textColor.replace(
              'text-',
              'text-'
            )} opacity-60`}
          >
            <Quote size={32} className='md:w-10 md:h-10' />
          </div>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className='mb-12 md:mb-16'
        >
          <blockquote
            className={`${textColor} font-light italic leading-relaxed tracking-wide text-center`}
          >
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
              Music, once admitted to the soul, becomes a sort of
            </span>
            <span className='block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
              spirit, and never dies.
            </span>
          </blockquote>
        </motion.div>

        {/* Bottom Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className={`w-px h-16 ${lineColor} mx-auto mb-8 md:mb-12`}
        />

        {/* Star Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className='flex justify-center'
        >
          <motion.div
            className={`w-2 h-2 md:w-3 md:h-3 ${lineColor} transform rotate-45`}
            animate={{
              rotate: [45, 225, 45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
