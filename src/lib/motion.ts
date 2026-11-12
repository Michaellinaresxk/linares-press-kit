import type { Transition, Variants } from 'framer-motion';

export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1];

export const fadeUp = (reduceMotion: boolean | null, delay = 0): Variants => ({
  hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: easeOut },
  },
});

export const stagger = (
  reduceMotion: boolean | null,
  staggerChildren = 0.08,
) =>
  reduceMotion
    ? undefined
    : {
        hidden: {},
        show: {
          transition: { staggerChildren, delayChildren: 0.04 },
        },
      };

export const scaleIn = (reduceMotion: boolean | null, delay = 0): Variants => ({
  hidden: reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: easeOut },
  },
});

export const viewportOnce = { once: true, amount: 0.18 } as const;
