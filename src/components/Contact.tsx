'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { homeCopy, type HomeLocale } from '@/lib/i18n/home';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  date?: string;
  city?: string;
  eventType?: string;
  budget?: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',
};

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none';

const INPUT_STYLE = {
  background: 'rgba(13,17,23,0.6)',
  border: '1px solid rgba(55,138,221,0.2)',
  color: '#c8dcea',
};

export default function Contact({ locale = 'en' }: { locale?: HomeLocale }) {
  const copy = homeCopy[locale];
  const f = copy.contact.form;
  const containerRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-30, 30]);

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
      setErrorMsg(f.requiredError);
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
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

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
      className='relative py-20 lg:py-32 overflow-hidden'
      style={{
        background: 'linear-gradient(to bottom, #111820, #0d1117, #0a0f16)',
      }}
    >
      {/* Background blobs */}
      <div className='absolute inset-0 opacity-15 pointer-events-none'>
        <motion.div
          style={{ y, background: '#185fa5' }}
          className='absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: yReverse, background: '#0f6e56' }}
          className='absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl'
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
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6'
            style={{ color: '#e8eef5' }}
          >
            {copy.contact.title}
          </h2>
          <p className='text-lg max-w-3xl mx-auto' style={{ color: '#5a7a8e' }}>
            {copy.contact.copy}
          </p>
          <p className='mt-5 text-base' style={{ color: '#c8dcea' }}>
            Email{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className='underline decoration-[#5b8fa8] underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85b7eb]'
            >
              {siteConfig.email}
            </a>
          </p>
          <p className='mt-2 text-sm' style={{ color: '#3d5a6e' }}>
            {copy.contact.privacy}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <div
            className='rounded-2xl p-8'
            style={{
              background: 'rgba(13,17,23,0.7)',
              border: '1px solid rgba(55,138,221,0.15)',
            }}
          >
            <h3
              className='text-2xl font-bold mb-2 text-center'
              style={{ color: '#c8dcea' }}
            >
              {f.title}
            </h3>
            <p className='text-center mb-8' style={{ color: '#3d5a6e' }}>
              {f.description}
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12'
              >
                <div
                  className='w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'
                  style={{ background: 'rgba(15,110,86,0.2)' }}
                >
                  <svg
                    className='w-8 h-8'
                    style={{ color: '#5dcaa5' }}
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <h4
                  className='text-xl font-semibold mb-2'
                  style={{ color: '#c8dcea' }}
                >
                  {f.successTitle}
                </h4>
                <p className='mb-6' style={{ color: '#3d5a6e' }}>
                  {f.successBody}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className='text-sm transition-colors'
                  style={{ color: '#85b7eb' }}
                >
                  {f.sendAnother}
                </button>
              </motion.div>
            ) : (
              <div className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      className='block mb-2 font-medium text-sm'
                      style={{ color: '#8faabf' }}
                    >
                      {f.name}
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                      placeholder={f.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label
                      className='block mb-2 font-medium text-sm'
                      style={{ color: '#8faabf' }}
                    >
                      {f.email}
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                      placeholder={f.emailPlaceholder}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className='block mb-2 font-medium text-sm'
                    style={{ color: '#8faabf' }}
                  >
                    {f.phone}
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={INPUT_CLASS}
                    style={INPUT_STYLE}
                    placeholder={f.phonePlaceholder}
                  />
                </div>

                <div>
                  <label
                    className='block mb-2 font-medium text-sm'
                    style={{ color: '#8faabf' }}
                  >
                    {f.subject}
                  </label>
                  <select
                    name='subject'
                    value={form.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={INPUT_CLASS}
                    style={INPUT_STYLE}
                  >
                    <option value=''>{f.subjectPlaceholder}</option>
                    <option value='Booking Request'>{f.subjects.booking}</option>
                    <option value='Collaboration'>{f.subjects.collaboration}</option>
                    <option value='Press/Media'>{f.subjects.press}</option>
                    <option value='Technical'>{f.subjects.technical}</option>
                    <option value='Other'>{f.subjects.other}</option>
                  </select>
                </div>

                <div>
                  <label
                    className='block mb-2 font-medium text-sm'
                    style={{ color: '#8faabf' }}
                  >
                    {f.message}
                  </label>
                  <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={6}
                    className={INPUT_CLASS}
                    style={{ ...INPUT_STYLE, resize: 'vertical' }}
                    placeholder={f.messagePlaceholder}
                    required
                  />
                </div>

                {form.subject === 'Booking Request' && (
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        className='block mb-2 font-medium text-sm'
                        style={{ color: '#8faabf' }}
                      >
                        {f.eventDate}
                      </label>
                      <input
                        type='date'
                        name='date'
                        value={form.date}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={INPUT_CLASS}
                        style={INPUT_STYLE}
                      />
                    </div>
                    <div>
                      <label
                        className='block mb-2 font-medium text-sm'
                        style={{ color: '#8faabf' }}
                      >
                        {f.city}
                      </label>
                      <input
                        type='text'
                        name='city'
                        value={form.city}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={INPUT_CLASS}
                        style={INPUT_STYLE}
                        placeholder={f.cityPlaceholder}
                      />
                    </div>
                    <div>
                      <label
                        className='block mb-2 font-medium text-sm'
                        style={{ color: '#8faabf' }}
                      >
                        {f.eventType}
                      </label>
                      <select
                        name='eventType'
                        value={form.eventType}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={INPUT_CLASS}
                        style={INPUT_STYLE}
                      >
                        <option value=''>{f.eventTypePlaceholder}</option>
                        <option value='Corporate'>{f.eventTypes.corporate}</option>
                        <option value='Wedding'>{f.eventTypes.wedding}</option>
                        <option value='Festival'>{f.eventTypes.festival}</option>
                        <option value='Club'>{f.eventTypes.club}</option>
                        <option value='Other'>{f.eventTypes.other}</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className='block mb-2 font-medium text-sm'
                        style={{ color: '#8faabf' }}
                      >
                        {f.budget}
                      </label>
                      <input
                        type='number'
                        name='budget'
                        value={form.budget}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={INPUT_CLASS}
                        style={INPUT_STYLE}
                        placeholder={f.budgetPlaceholder}
                      />
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-sm text-center rounded-lg px-4 py-3'
                    style={{
                      color: '#f09595',
                      background: 'rgba(162,45,45,0.1)',
                      border: '1px solid rgba(162,45,45,0.25)',
                    }}
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className='w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed'
                  style={{
                    background: '#1d4a72',
                    border: '1px solid #378add',
                    color: '#c8dcea',
                  }}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className='animate-spin' />
                      <span>{f.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{f.send}</span>
                    </>
                  )}
                </motion.button>
              </div>
            )}

            {status !== 'success' && (
              <div
                className='mt-8 pt-8 text-center'
                style={{ borderTop: '1px solid rgba(55,138,221,0.1)' }}
              >
                <p className='text-sm' style={{ color: '#3d5a6e' }}>
                  {f.hint}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
