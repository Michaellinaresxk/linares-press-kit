import { motion } from 'framer-motion';
import {
  Calendar,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  Settings,
  Users,
} from 'lucide-react';

interface PersonBase {
  id: string;
  name: string;
}

interface PersonFull extends PersonBase {
  email: string;
  phone: string;
  address?: string;
}

interface ContactCardProps {
  person: PersonBase | PersonFull;
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
          {/* <h3 className='text-lg font-bold text-white mb-1'>{person.name}</h3>
          <p className={`text-${color}-400 font-medium mb-2`}>{person.role}</p>
          <p className='text-gray-400 text-sm mb-4'>{person.company}</p> */}

          {/* Contact info */}
          <div className='space-y-2 mb-4'>
            <div className='flex items-center space-x-2 text-gray-300 text-sm'>
              <Mail size={14} />
              {/* <span>{person.email}</span> */}
            </div>
            <div className='flex items-center space-x-2 text-gray-300 text-sm'>
              <Phone size={14} />
              {/* <span>{person.phone}</span> */}
            </div>
            <div className='flex items-center space-x-2 text-gray-300 text-sm'>
              <MapPin size={14} />
              {/* <span>{person.timezone}</span> */}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <p className='text-gray-400 text-xs mb-2'>Specialties:</p>
            <div className='flex flex-wrap gap-1'>
              {/* {person.specialties.map((specialty: string, i: number) => (
                <span
                  key={i}
                  className={`px-2 py-1 bg-${color}-600/20 text-${color}-300 text-xs rounded-full`}
                >
                  {specialty}
                </span>
              ))} */}
            </div>
          </div>

          {/* Contact button */}
          <motion.button
            className={`mt-4 w-full px-4 py-2 bg-gradient-to-r from-${color}-600 to-${color}-700 rounded-lg text-white font-medium flex items-center justify-center space-x-2`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={16} />
            {/* <span>Contact {person.role.split(' ')[0]}</span> */}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactCard;
