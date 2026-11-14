'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { homeCopy, withHomeVars, type HomeLocale } from '@/lib/i18n/home';

export default function ExperienceTeaser({
  locale = 'en',
}: {
  locale?: HomeLocale;
}) {
  const copy = homeCopy[locale];
  const reduceMotion = useReducedMotion();
  const proposalHref = locale === 'pl' ? '/pl/proposal' : '/proposal';

  return (
    <section
      className='relative overflow-hidden border-y border-[#5b8fa822] bg-[#0d1318] px-4 py-16 sm:px-6 md:py-24 lg:px-8'
      aria-labelledby='experience-teaser-title'
    >
      <div className='mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-16'>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#7ab0cc]'>
            {copy.experience.label}
          </p>
          <h2
            id='experience-teaser-title'
            className='mb-4 text-3xl font-semibold text-[#dce8f0] sm:text-4xl'
          >
            {withHomeVars(copy.experience.title, {
              liveShow: siteConfig.liveShow.name,
            })}
          </h2>
          <p className='mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#7ab0cc]'>
            {withHomeVars(copy.experience.subtitle, {
              liveShow: siteConfig.liveShow.name,
            })}
          </p>
          <p className='max-w-2xl text-base leading-8 text-[#a6bbc7]'>
            {withHomeVars(copy.experience.copy, {
              liveShow: siteConfig.liveShow.name,
            })}
          </p>
          <Link
            href={proposalHref}
            className='mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#5b8fa8] px-5 py-3 text-sm font-semibold text-[#dce8f0] transition-colors hover:bg-[#5b8fa81c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9d8ec]'
          >
            {copy.experience.explore}
            <ArrowUpRight size={17} aria-hidden='true' />
          </Link>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='relative overflow-hidden rounded-xl border border-[#5b8fa833]'
        >
          <Link
            href={proposalHref}
            className='group relative block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9d8ec]'
            aria-label={copy.experience.explore}
          >
            <Image
              src='/img/DSC00047.jpg'
              alt='Linarex performing on drums during the live show'
              width={900}
              height={650}
              sizes='(max-width: 1024px) 100vw, 42vw'
              className='aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#080c10]/70 via-transparent to-transparent' />
            <span className='absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-[#080c10]/55 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110'>
              <Play size={20} fill='currentColor' aria-hidden='true' />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
