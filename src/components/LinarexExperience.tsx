import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { bookingEmail, siteConfig } from '@/lib/site-config';

export default function LinarexExperience() {
  return (
    <section
      id='linarex-experience'
      className='relative overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:px-8'
      style={{
        background: 'linear-gradient(135deg, #0d1318, #080c10 70%)',
      }}
      aria-labelledby='linarex-experience-title'
    >
      <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
        <div>
          <p
            className='mb-3 text-xs font-semibold uppercase tracking-[0.25em]'
            style={{ color: '#5b8fa8' }}
          >
            The live show
          </p>
          <h2
            id='linarex-experience-title'
            className='mb-5 text-3xl font-bold sm:text-4xl'
            style={{ color: '#dce8f0' }}
          >
            {siteConfig.liveShow}
          </h2>
          <p className='max-w-2xl text-base leading-8 text-[#a6bbc7]'>
            Linarex leads the band from behind the drums, sings selected parts,
            shares stories and brings the crowd into the moment. The set moves
            between original songs and covers, building energy, good vibes and
            real emotion.
          </p>
          <p className='mt-4 max-w-2xl text-sm leading-7 text-[#7a9aaa]'>
            {siteConfig.live.currentLineup}{' '}
            The first headline show was at {siteConfig.live.firstHeadlineShow}.
            Available for {siteConfig.live.eventTypes}.
          </p>

          <div className='mt-7 flex flex-wrap gap-3'>
            <span className='rounded-full border border-[#5b8fa844] px-4 py-2 text-sm text-[#dce8f0]'>
              {siteConfig.live.setLengthShort} set
            </span>
            <a
              href={siteConfig.live.videoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-[#5b8fa844] px-4 py-2 text-sm text-[#dce8f0] transition-colors hover:border-[#5b8fa8] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7ab0cc]'
            >
              Watch a live clip
            </a>
          </div>

          <div className='mt-5 text-sm text-[#7a9aaa]'>
            <p>{siteConfig.live.technicalDetails}</p>
          </div>

          <a
            href={bookingEmail}
            className='mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#5b8fa8] px-6 py-3 text-sm font-semibold text-[#080c10] transition-colors hover:bg-[#7ab0cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dce8f0]'
          >
            Book the {siteConfig.liveShow}
            <ArrowUpRight size={17} aria-hidden='true' />
          </a>
        </div>

        <div className='relative mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-[#5b8fa833]'>
          <Image
            src='/img/DSC00047.jpg'
            alt='Linarex playing drums during a live performance'
            width={900}
            height={650}
            sizes='(max-width: 1024px) 100vw, 45vw'
            className='aspect-[4/3] w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#080c10]/70 via-transparent to-transparent' />
          <p className='absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-[0.18em] text-white'>
            {siteConfig.liveShow}
          </p>
        </div>
      </div>
    </section>
  );
}
