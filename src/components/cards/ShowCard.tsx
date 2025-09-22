import { upcomingShows } from '@/const/liveShows';
import { motion } from 'framer-motion';
import { MapPin, Ticket } from 'lucide-react';

interface ShowCardProps {
  show: (typeof upcomingShows)[0];
  index: number;
}

function ShowCard({ show, index }: ShowCardProps) {
  const showDate = new Date(show.date);
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const getStatusStyles = (status: string) =>
    ({
      confirmed: 'bg-green-600/20 text-green-300 border-green-500/30',
      pending: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
    }[status] || 'bg-gray-600/20 text-gray-300 border-gray-500/30');

  const getTypeStyles = (type: string) =>
    ({
      'Headline Show': 'bg-purple-600/20 text-purple-300 border-purple-500/30',
      Festival: 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
      'Support Act': 'bg-gray-600/20 text-gray-300 border-gray-500/30',
    }[type] || 'bg-gray-600/20 text-gray-300 border-gray-500/30');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300'
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        {/* Fecha e Info del show */}
        <div className='flex items-center space-x-4'>
          <div className='text-center flex-shrink-0'>
            <div className='text-xl md:text-2xl font-bold text-purple-400'>
              {showDate.getDate()}
            </div>
            <div className='text-xs text-gray-400'>
              {monthNames[showDate.getMonth()]}
            </div>
          </div>

          <div className='min-w-0 flex-1'>
            <h3 className='text-base md:text-lg font-bold text-white mb-1 truncate'>
              {show.venue}
            </h3>
            <div className='flex items-center space-x-2 text-gray-400 text-sm mb-2'>
              <MapPin size={14} className='flex-shrink-0' />
              <span className='truncate'>
                {show.city}, {show.country}
              </span>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <span
                className={`px-2 py-1 rounded-full text-xs border ${getTypeStyles(
                  show.type
                )}`}
              >
                {show.type}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs border ${getStatusStyles(
                  show.status
                )}`}
              >
                {show.status}
              </span>
            </div>
          </div>
        </div>

        {/* Botón de tickets */}
        <motion.button
          className={`px-4 md:px-6 py-2 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 flex-shrink-0 ${
            show.status === 'pending'
              ? 'bg-gray-600/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
          }`}
          whileHover={show.status !== 'pending' ? { scale: 1.05 } : {}}
          whileTap={show.status !== 'pending' ? { scale: 0.95 } : {}}
          disabled={show.status === 'pending'}
        >
          <Ticket size={16} />
          <span className='hidden sm:inline'>
            {show.status === 'pending' ? 'Soon' : 'Tickets'}
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
export default ShowCard;
