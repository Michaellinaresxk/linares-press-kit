import { siteConfig, siteGenres } from '@/lib/site-config';

export const collaborations = siteConfig.releases.map((release, index) => ({
  id: index + 1,
  title: release.title,
  collaborator: release.collaborator,
  role: 'Featured artist',
  year: release.year,
  image: release.coverImage,
  color: 'from-slate-600 to-slate-800',
  genre: siteGenres,
  duration: release.durationLabel,
  audioUrl: release.audioUrl,
}));
