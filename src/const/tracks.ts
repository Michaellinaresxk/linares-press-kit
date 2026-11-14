import {
  siteConfig,
  siteGenresOriginal,
  type SiteRelease,
} from '@/lib/site-config';

export interface Track {
  id: string;
  title: string;
  artist?: string;
  duration: number;
  coverImage: string;
  audioUrl: string;
  spotifyUrl?: string;
  description: string;
  year: string;
  genre?: string;
  waveformColor?: string;
}

function toTrack(release: SiteRelease): Track {
  return {
    id: release.id,
    title: release.title,
    artist: `${siteConfig.name} feat. ${release.collaborator}`,
    duration: release.durationSeconds,
    coverImage: release.coverImage,
    audioUrl: release.audioUrl,
    spotifyUrl: release.spotifyUrl,
    description: release.description,
    year: release.year,
    genre: siteGenresOriginal,
  };
}

export const featuredSingle: Track = toTrack(siteConfig.releases[0]);
export const tracks: Track[] = siteConfig.releases.map(toTrack);
