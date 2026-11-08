'use client';

import FeaturedSinglePlayer from './FeaturedSinglePlayer';
import { type HomeLocale } from '@/lib/i18n/home';

export default function Music({ locale = 'en' }: { locale?: HomeLocale }) {
  return <FeaturedSinglePlayer locale={locale} />;
}
