import technicalSpecs from '@/const/technicalSpecs';
import { motion } from 'framer-motion';
import { FileText, MapPin, Settings } from 'lucide-react';
import { useState } from 'react';

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
export default TechnicalRider;
