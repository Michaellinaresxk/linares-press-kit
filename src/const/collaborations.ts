import { releases } from '@/data/releases';
import { siteGenresOriginal } from '@/lib/site-config';

export const collaborations = releases.map((release, index) => ({
  id: index + 1,
  releaseId: release.id,
  title: release.title,
  collaborator: release.collaborator,
  role: 'Featured artist',
  year: release.year,
  image: release.coverImage,
  coverAltKey: release.coverAltKey,
  color: 'from-slate-600 to-slate-800',
  genre: siteGenresOriginal,
  duration: release.durationLabel,
  audioUrl: release.audioUrl,
}));
