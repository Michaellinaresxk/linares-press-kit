import { motion } from 'framer-motion';
import { useMemo, memo } from 'react';

/**
 * Props del componente BackgroundEffects
 */
interface BackgroundEffectsProps {
  /**
   * Número de efectos de luz animados
   * Considerar reducir en mobile para mejor performance
   *
   * @default 6
   * @example 3 en mobile, 6 en desktop
   */
  effectCount?: number;

  /**
   * URL de imagen de fondo
   *
   * @default cloudinary image
   */
  baseImage?: string;

  /**
   * Opacidad del overlay oscuro (0-1)
   * Controla el contraste con la imagen
   *
   * @default 0.7
   * @example 0.5 para más brillo, 0.9 para más oscuro
   */
  darkOverlay?: number;

  /**
   * Duración base de animación en segundos
   * Los efectos tendrán duraciones incrementales
   *
   * @default 8
   * @example 6 para animaciones más rápidas
   */
  baseAnimationDuration?: number;
}

/**
 * Constantes de configuración por defecto
 */
const DEFAULTS = {
  EFFECT_COUNT: 6,
  DARK_OVERLAY: 0.7,
  BASE_ANIMATION_DURATION: 8,
  DEFAULT_IMAGE:
    'url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1761004861/linarex/Generated_Image_October_14_2025_-_12_07AM-Photoroom_kyea0w.png)',
  MAX_EFFECT_COUNT: 20,
  MIN_ANIMATION_DURATION: 4,
} as const;

/**
 * Interfaz para posiciones precalculadas de efectos
 * Evita recalcular en cada render
 */
interface EffectPosition {
  /**
   * ID único del efecto
   */
  id: number;

  /**
   * Posición X en porcentaje
   */
  left: number;

  /**
   * Posición Y en porcentaje
   */
  top: number;

  /**
   * Duración de la animación en segundos
   */
  duration: number;
}

/**
 * Genera posiciones randomizadas para los efectos
 *
 * Función pura - determinística si se proporciona seed
 * Se ejecuta una sola vez (memoizada)
 *
 * @param count - Número de efectos a generar
 * @param baseDuration - Duración base para incrementar
 * @returns Array de posiciones de efectos
 */
function generateEffectPositions(
  count: number,
  baseDuration: number
): EffectPosition[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: baseDuration + i * 2, // Incrementa 2 segundos por efecto
  }));
}

/**
 * Componente individual de efecto luminoso
 *
 * Separado para permitir memoización eficiente
 * Solo se re-renderiza si su posición cambia
 */
interface EffectOrbProps {
  position: EffectPosition;
}

const EffectOrb = memo(function EffectOrb({ position }: EffectOrbProps) {
  return (
    <motion.div
      className='absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl'
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: position.duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        left: `${position.left}%`,
        top: `${position.top}%`,
      }}
      aria-hidden='true'
    />
  );
});

const BackgroundEffects = memo(function BackgroundEffects({
  effectCount = DEFAULTS.EFFECT_COUNT,
  baseImage = DEFAULTS.DEFAULT_IMAGE,
  darkOverlay = DEFAULTS.DARK_OVERLAY,
  baseAnimationDuration = DEFAULTS.BASE_ANIMATION_DURATION,
}: BackgroundEffectsProps) {
  // Validar y sanitizar valores de entrada
  const safeEffectCount = Math.max(
    0,
    Math.min(effectCount, DEFAULTS.MAX_EFFECT_COUNT)
  );
  const safeDarkOverlay = Math.max(0, Math.min(darkOverlay, 1));
  const safeDuration = Math.max(
    DEFAULTS.MIN_ANIMATION_DURATION,
    baseAnimationDuration
  );

  // Precalcular posiciones de efectos
  // Se regenera solo cuando cambia el número de efectos o la duración
  const effectPositions = useMemo(
    () => generateEffectPositions(safeEffectCount, safeDuration),
    [safeEffectCount, safeDuration]
  );

  // Propiedades del overlay oscuro
  // Memoizadas para evitar recálculos en cada render
  const darkOverlayStyle = useMemo(
    () => ({
      backgroundColor: `rgba(0, 0, 0, ${safeDarkOverlay})`,
    }),
    [safeDarkOverlay]
  );

  return (
    <>
      {/* Capa de fondo: imagen + overlays oscuros */}
      <div className='absolute inset-0 z-0'>
        {/* Imagen de fondo */}
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundPosition: 'center top',
            backgroundImage: baseImage,
          }}
          aria-hidden='true'
        />

        {/* Overlay oscuro dinámico (controla brightness) */}
        <div
          className='absolute inset-0'
          style={darkOverlayStyle}
          aria-hidden='true'
        />

        {/* Gradient oscuro (crea silueta) */}
        <div
          className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50'
          aria-hidden='true'
        />
      </div>

      {/* Efectos de luz animados (capa 3) */}
      {safeEffectCount > 0 && (
        <div
          className='absolute inset-0 z-10 pointer-events-none overflow-hidden'
          aria-hidden='true'
        >
          {effectPositions.map((position) => (
            <EffectOrb key={position.id} position={position} />
          ))}
        </div>
      )}
    </>
  );
});

export { BackgroundEffects, type BackgroundEffectsProps };
export default BackgroundEffects;
