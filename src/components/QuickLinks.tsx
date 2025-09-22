import { officialLinks } from '@/const/links';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function QuickLinks() {
  return (
    <div className='space-y-4'>
      {officialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group'
            whileHover={{ x: 5 }}
          >
            <div className='flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center'>
              <Icon className='text-purple-400' size={20} />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-white group-hover:text-purple-300 transition-colors'>
                {link.name}
              </h3>
              <p className='text-gray-400 text-sm'>{link.description}</p>
            </div>
            <ExternalLink
              className='text-gray-400 group-hover:text-purple-300 transition-colors'
              size={16}
            />
          </motion.a>
        );
      })}
    </div>
  );
}
export default QuickLinks;
