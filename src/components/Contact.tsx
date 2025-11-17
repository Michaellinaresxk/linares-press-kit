'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Send } from 'lucide-react';
// import contactInfo from '@/const/contactInfo';
// import TechnicalRider from './TechnicalRider';
// import ContactCard from './cards/ContactCard';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id='contact'
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-800 via-black to-gray-900 overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          style={{ y }}
          className='absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y.get() * -0.6 }}
          className='absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-3xl'
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
          <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-green-200 bg-clip-text text-transparent mb-6'>
            Contact
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto'>
            Professional inquiries, booking requests, and collaboration
            opportunities. Reach out to the appropriate team member for the
            fastest response.
          </p>
        </motion.div>

        {/* Contact Cards Grid
        <div className='grid md:grid-cols-2 gap-6 mb-16'>
          {Object.entries(contactInfo).map(([type, person], index) => (
            <ContactCard key={type} person={person} type={type} index={index} />
          ))}
        </div> */}

        {/* Technical Rider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          {/* <TechnicalRider /> */}
        </motion.div>

        {/* General Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-6 text-center'>
              General Inquiry
            </h3>
            <p className='text-gray-400 text-center mb-8'>
              Not sure who to contact? Send a general message and we will direct
              it to the right person.
            </p>

            <form className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors'
                    placeholder='your@email.com'
                  />
                </div>
              </div>

              <div>
                <label className='block text-gray-300 mb-2 font-medium'>
                  Subject
                </label>
                <select className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors'>
                  <option>Select inquiry type</option>
                  <option>Booking Request</option>
                  <option>Collaboration</option>
                  <option>Press/Media</option>
                  <option>Technical</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-300 mb-2 font-medium'>
                  Message
                </label>
                <textarea
                  rows={6}
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-vertical'
                  placeholder='Tell us about your inquiry...'
                />
              </div>

              <motion.button
                type='submit'
                className='w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center justify-center space-x-2'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>

            <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
              <p className='text-gray-400 text-sm'>
                Response time: 24-48 hours for general inquiries • Urgent
                booking matters: Call management directly
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
