'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = async () => {
    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !subject || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Unexpected error. Please try again.',
      );
    }
  };

  const isLoading = status === 'loading';

  return (
    <section
      id='contact'
      ref={containerRef}
      className='relative py-20 lg:py-32 bg-gradient-to-b from-gray-800 via-black to-gray-900 overflow-hidden'
    >
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
            opportunities.
          </p>
        </motion.div>

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
              Send a message and I&apos;ll get back to you within 24–48 hours.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12'
              >
                <div className='w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <h4 className='text-xl font-semibold text-white mb-2'>
                  Message sent!
                </h4>
                <p className='text-gray-400 mb-6'>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className='text-purple-400 hover:text-purple-300 text-sm transition-colors'
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-gray-300 mb-2 font-medium'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label className='block text-gray-300 mb-2 font-medium'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Subject
                  </label>
                  <select
                    name='subject'
                    value={form.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <option value=''>Select inquiry type</option>
                    <option value='Booking Request'>Booking Request</option>
                    <option value='Collaboration'>Collaboration</option>
                    <option value='Press/Media'>Press/Media</option>
                    <option value='Technical'>Technical</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={6}
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-vertical disabled:opacity-50 disabled:cursor-not-allowed'
                    placeholder='Tell us about your inquiry...'
                  />
                </div>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3'
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className='w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed'
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className='animate-spin' />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            )}

            {status !== 'success' && (
              <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
                <p className='text-gray-400 text-sm'>
                  Response time: 24–48 hours for general inquiries
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
