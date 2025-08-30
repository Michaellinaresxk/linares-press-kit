'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Settings,
  FileText,
  Send,
} from 'lucide-react';

// Información de contacto
const contactInfo = {
  booking: {
    name: 'Sarah Mitchell',
    role: 'Booking Agent',
    company: 'International Music Agency',
    email: 'booking@linarex-music.com',
    phone: '+1 (555) 0123-456',
    timezone: 'GMT-5 (EST)',
    specialties: [
      'Festival Booking',
      'International Tours',
      'Venue Partnerships',
    ],
  },
  management: {
    name: 'Marcus Rodriguez',
    role: 'Artist Manager',
    company: 'Progressive Management Group',
    email: 'management@linarex-music.com',
    phone: '+1 (555) 0789-012',
    timezone: 'GMT-5 (EST)',
    specialties: ['Career Development', 'Brand Strategy', 'Media Relations'],
  },
  press: {
    name: 'Elena Vasquez',
    role: 'Press & Media',
    company: 'Media Relations Pro',
    email: 'press@linarex-music.com',
    phone: '+1 (555) 0345-678',
    timezone: 'GMT-5 (EST)',
    specialties: ['Press Releases', 'Interview Coordination', 'Media Kits'],
  },
  technical: {
    name: 'Hans Mueller',
    role: 'Technical Director',
    company: 'Production Services',
    email: 'tech@linarex-music.com',
    phone: '+1 (555) 0567-890',
    timezone: 'GMT+1 (CET)',
    specialties: ['Live Sound', 'Production Management', 'Technical Riders'],
  },
};

// Datos del technical rider (resumido)
const technicalSpecs = {
  stage: {
    minSize: '6m x 4m (20ft x 13ft)',
    height: 'Minimum 3m ceiling',
    power: '3-phase 32A CEE connection',
    special: 'Level, dry stage surface required',
  },
  audio: {
    mixing: 'Digital console (32+ channels)',
    monitors: '6 monitor mixes minimum',
    mics: 'Industry standard dynamic/condenser mics',
    di: '8+ DI boxes required',
  },
  lighting: {
    basic: 'Basic wash and spotlights',
    special: 'Haze machine, LED color wash',
    control: 'DMX lighting control',
    special_effects: 'Strobes, moving lights preferred',
  },
  backline: {
    provided: 'Full backline provided by artist',
    local: 'Local drum kit acceptable (specify brand)',
    amps: 'Guitar/bass amplification provided',
    keys: '88-key weighted keyboard required',
  },
};

interface ContactCardProps {
  person: any;
  type: string;
  index: number;
}

function ContactCard({ person, type, index }: ContactCardProps) {
  const icons = {
    booking: Calendar,
    management: Users,
    press: FileText,
    technical: Settings,
  };

  const colors = {
    booking: 'purple',
    management: 'cyan',
    press: 'pink',
    technical: 'green',
  };

  const Icon = icons[type as keyof typeof icons];
  const color = colors[type as keyof typeof colors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-${color}-500/30 transition-all duration-300`}
      whileHover={{ y: -5 }}
    >
      <div className='flex items-start space-x-4'>
        <div
          className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r from-${color}-600 to-${color}-700 rounded-lg flex items-center justify-center`}
        >
          <Icon className='text-white' size={24} />
        </div>

        <div className='flex-1'>
          <h3 className='text-lg font-bold text-white mb-1'>{person.name}</h3>
          <p className={`text-${color}-400 font-medium mb-2`}>{person.role}</p>
          <p className='text-gray-400 text-sm mb-4'>{person.company}</p>

          {/* Contact info */}
          <div className='space-y-2 mb-4'>
            <div className='flex items-center space-x-2 text-gray-300 text-sm'>
              <Mail size={14} />
              <span>{person.email}</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-300 text-sm'>
              <Phone size={14} />
              <span>{person.phone}</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-300 text-sm'>
              <MapPin size={14} />
              <span>{person.timezone}</span>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <p className='text-gray-400 text-xs mb-2'>Specialties:</p>
            <div className='flex flex-wrap gap-1'>
              {person.specialties.map((specialty: string, i: number) => (
                <span
                  key={i}
                  className={`px-2 py-1 bg-${color}-600/20 text-${color}-300 text-xs rounded-full`}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Contact button */}
          <motion.button
            className={`mt-4 w-full px-4 py-2 bg-gradient-to-r from-${color}-600 to-${color}-700 rounded-lg text-white font-medium flex items-center justify-center space-x-2`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={16} />
            <span>Contact {person.role.split(' ')[0]}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function TechnicalRider() {
  const [activeTab, setActiveTab] = useState('stage');

  const tabs = [
    { id: 'stage', name: 'Stage Requirements', icon: MapPin },
    { id: 'audio', name: 'Audio', icon: Settings },
    { id: 'lighting', name: 'Lighting', icon: Settings },
    { id: 'backline', name: 'Backline', icon: Settings },
  ];

  const renderContent = () => {
    const specs = technicalSpecs[activeTab as keyof typeof technicalSpecs];

    return (
      <div className='space-y-4'>
        {Object.entries(specs).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className='flex justify-between items-start'
          >
            <span className='text-gray-400 capitalize font-medium flex-shrink-0 w-24'>
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </span>
            <span className='text-gray-200 text-sm text-right flex-1 ml-4'>
              {value}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
      <h3 className='text-xl font-bold text-white mb-6'>
        Technical Rider Summary
      </h3>

      {/* Tabs */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon size={16} />
              <span className='text-sm'>{tab.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>

      {/* Download full rider */}
      <div className='mt-6 pt-6 border-t border-gray-700'>
        <motion.button
          className='w-full px-4 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FileText size={18} />
          <span>Download Complete Technical Rider (PDF)</span>
        </motion.button>
      </div>
    </div>
  );
}

export default function Contact() {
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

        {/* Contact Cards Grid */}
        <div className='grid md:grid-cols-2 gap-6 mb-16'>
          {Object.entries(contactInfo).map(([type, person], index) => (
            <ContactCard key={type} person={person} type={type} index={index} />
          ))}
        </div>

        {/* Technical Rider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <TechnicalRider />
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
              Not sure who to contact? Send a general message and we'll direct
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
