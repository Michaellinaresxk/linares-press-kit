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
  className = '',
  textColor = 'text-white',
  lineColor = 'bg-white',
}: QuoteSectionProps) {
  return (
    <section className={`relative py-10 md:py-15 lg:py-20 ${className}`}>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Top Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className={`w-px h-10 ${lineColor} mx-auto mb-5 md:mb-8`}
        />

        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='flex justify-center mb-4 md:mb-5'
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
        >
          <blockquote
            className={`${textColor} font-light italic leading-relaxed tracking-wide text-center`}
          >
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
              Genre is just a box. I create universal emotions that connect
              souls and search for the voice that can set them free.
            </span>
          </blockquote>
        </motion.div>

        {/* Bottom Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className={`w-px h-10 ${lineColor} mt-10 mx-auto mb-8 md:mb-8`}
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
