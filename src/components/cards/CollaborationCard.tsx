import { collaborations } from '@/const/collaborations';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { Calendar, ChevronDown, Headphones, Music, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AudioControls from '../AudioControls';
import { useAudioPlayerCollaboration } from '@/hooks/UseAudioPlayerCollaborationReturn';

const CollaborationCard = ({
  collaboration,
  index,
  playingId,
  isPlaying,
  onTogglePlay,
  onStop,
}: {
  collaboration: (typeof collaborations)[0];
  index: number;
  playingId: number | null;
  isPlaying: boolean;
  onTogglePlay: (id: number) => void;
  onStop: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isActive = playingId === collaboration.id;
  const isTouchDevice = useIsTouchDevice();

  // ✅ NUEVO: Hook con audio real para ESTA colaboración
  const audioState = useAudioPlayerCollaboration(collaboration.audioUrl);

  // ✅ NUEVO: Determinar si este item debe estar reproduciendo
  const shouldPlay = isActive && isPlaying;

  // ✅ NUEVO: Sincronizar reproducción de audio con estado global
  useEffect(() => {
    if (shouldPlay && !audioState.isPlaying) {
      // Usuario presionó play en esta tarjeta → reproducir
      audioState.play();
    } else if (!shouldPlay && audioState.isPlaying) {
      // Usuario presionó play en otra tarjeta → pausar esta
      audioState.pause();
    }
  }, [shouldPlay, audioState]);

  // Motion values para efectos 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  // Mostrar hint automáticamente en móviles
  useEffect(() => {
    if (isTouchDevice && !isExpanded) {
      const timer = setTimeout(() => setShowHint(true), 1000 + index * 500);
      return () => clearTimeout(timer);
    }
  }, [isTouchDevice, isExpanded, index]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouchDevice) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    setShowHint(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      viewport={{ once: true, margin: '-50px' }}
      className='group relative'
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className='relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer'
        onClick={handleCardClick}
        animate={{
          z: isHovered && !isTouchDevice ? 30 : isExpanded ? 20 : 0,
          scale: isExpanded ? 1.01 : isHovered && !isTouchDevice ? 1.03 : 1,
          y: isExpanded ? -5 : isHovered && !isTouchDevice ? -8 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          duration: 0.8,
        }}
        style={{
          transformStyle: 'preserve-3d',
          rotateX: isHovered && !isExpanded && !isTouchDevice ? rotateX : 0,
          rotateY: isHovered && !isExpanded && !isTouchDevice ? rotateY : 0,
          boxShadow:
            (isHovered && !isTouchDevice) || isExpanded
              ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)'
              : '0 6px 20px rgba(0, 0, 0, 0.08)',
        }}
        layout
      >
        {/* Imagen principal */}
        <motion.div
          className='relative aspect-square overflow-hidden'
          animate={{
            rotateX: isExpanded ? -2 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          layout
        >
          <motion.img
            src={collaboration.image}
            alt={`${collaboration.title} collaboration`}
            className='w-full h-full object-cover'
            loading='lazy'
            animate={{
              scale: isHovered && !isTouchDevice ? 1.05 : 1,
              y: isHovered && !isTouchDevice ? -3 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          />

          {/* Overlay decorativo */}
          <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none' />

          {/* Gradient overlay */}
          <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent' />

          {/* Efecto de brillo */}
          {(isHovered || (isTouchDevice && showHint)) && (
            <motion.div
              className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          )}

          {/* ✅ NUEVO: Indicador de reproducción */}
          {isActive && audioState.isPlaying && (
            <motion.div
              className='absolute top-4 right-4'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                type: 'spring',
                stiffness: 150,
                damping: 15,
              }}
            >
              <div className='bg-white/15 backdrop-blur-xl rounded-full p-3 border border-white/20'>
                <div className='flex space-x-1'>
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='w-1 bg-white rounded-full shadow-sm'
                      animate={{ height: ['6px', '16px', '6px'] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: [0.4, 0, 0.6, 1],
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Indicador para móviles */}
          {isTouchDevice && !isExpanded && (
            <motion.div
              className='absolute bottom-20 right-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: showHint ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='bg-black/60 backdrop-blur-md rounded-full p-2'>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                  }}
                >
                  <ChevronDown size={16} className='text-white' />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Content overlay */}
          <motion.div
            className='absolute bottom-0 left-0 right-0 p-5 text-white'
            animate={{
              y: isExpanded ? 2 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div
              className='flex items-center space-x-2 text-xs text-white/90 mb-3'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Users size={12} />
              <span className='font-medium'>Collaboration</span>
              <span>•</span>
              <span>{collaboration.year}</span>
            </motion.div>

            <motion.h3
              className='font-black text-xl mb-2 leading-tight tracking-tight'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {collaboration.title}
            </motion.h3>

            <motion.p
              className='text-white/95 text-sm font-medium'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              feat.{' '}
              <span className='font-bold'>{collaboration.collaborator}</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Panel expandible */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
                rotateX: -15,
                transformOrigin: 'top',
              }}
              animate={{
                height: 'auto',
                opacity: 1,
                rotateX: 0,
              }}
              exit={{
                height: 0,
                opacity: 0,
                rotateX: -15,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
                opacity: { duration: 0.6 },
                height: { duration: 0.8 },
                rotateX: { duration: 0.8 },
              }}
              className='bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-100'
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              }}
              layout
            >
              <motion.div
                className='p-6 space-y-5'
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {/* Información */}
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                      <span className='text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full flex items-center space-x-1'>
                        <Headphones size={12} />
                        <span>Producer:</span>
                      </span>
                      <span className='text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded-md'>
                        {collaboration.producer}
                      </span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-500'>
                      <Calendar size={14} />
                      <span className='text-sm font-medium'>
                        {collaboration.year}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar decorativo */}
                  <motion.div
                    className='relative h-2 bg-gray-200 rounded-full overflow-hidden'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <motion.div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${collaboration.color} rounded-full`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        delay: 0.6,
                        duration: 1.2,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                    />
                  </motion.div>
                </div>

                {/* ✅ ACTUALIZADO: AudioControls con audioState */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <AudioControls
                    collaboration={collaboration}
                    isActive={isActive}
                    isPlaying={audioState.isPlaying}
                    onTogglePlay={onTogglePlay}
                    onStop={onStop}
                  />
                </motion.div>

                {/* ✅ NUEVO: Progress bar de audio (opcional) */}
                {isActive && audioState.duration > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className='space-y-2'
                  >
                    <div className='w-full h-1.5 bg-gray-200 rounded-full overflow-hidden'>
                      <motion.div
                        className='h-full bg-gradient-to-r from-purple-500 to-pink-500'
                        animate={{
                          width: `${
                            (audioState.currentTime / audioState.duration) * 100
                          }%`,
                        }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                    <div className='flex justify-between text-xs text-gray-500'>
                      <span>
                        {audioState.formatTime(audioState.currentTime)}
                      </span>
                      <span>{audioState.formatTime(audioState.duration)}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicador desktop */}
        {!isTouchDevice && !isExpanded && isHovered && (
          <motion.div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <div className='bg-black/70 backdrop-blur-xl rounded-2xl px-4 py-3 text-white border border-white/10 shadow-2xl'>
              <div className='flex items-center space-x-2'>
                <Music size={16} />
                <span className='text-sm font-medium'>Click to explore</span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CollaborationCard;
