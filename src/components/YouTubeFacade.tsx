'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import styles from './youtube-facade.module.css';

type Props = {
  youtubeId: string;
  title: string;
  thumbnailUrl?: string;
};

export default function YouTubeFacade({
  youtubeId,
  title,
  thumbnailUrl,
}: Props) {
  const [active, setActive] = useState(false);
  const thumb = thumbnailUrl || `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  if (active) {
    return (
      <div className={styles.frame}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          loading='lazy'
          className={styles.iframe}
        />
      </div>
    );
  }

  return (
    <button
      type='button'
      className={styles.facade}
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={thumb}
        alt=''
        fill
        sizes='(max-width: 700px) 100vw, 720px'
        className={styles.thumb}
      />
      <span className={styles.overlay} aria-hidden='true' />
      <span className={styles.play} aria-hidden='true'>
        <Play size={22} fill='currentColor' />
      </span>
      <span className={styles.label}>{title}</span>
    </button>
  );
}
