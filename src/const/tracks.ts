import { siteConfig, siteGenresOriginal } from '@/lib/site-config';
import { releases, type Release } from '@/data/releases';

export interface Track {
  id: string;
  title: string;
  artist?: string;
  duration: number;
  coverImage: string;
  audioUrl: string;
  spotifyUrl?: string;
  year: string;
  genre?: string;
  waveformColor?: string;
}

function toTrack(release: Release): Track {
  return {
    id: release.id,
    title: release.title,
    artist: `${siteConfig.name} feat. ${release.collaborator}`,
    duration: release.durationSeconds,
    coverImage: release.coverImage,
    audioUrl: release.audioUrl,
    spotifyUrl: release.spotifyUrl,
    year: release.year,
    genre: siteGenresOriginal,
  };
}

export const featuredSingle: Track = toTrack(releases[0]);
export const tracks: Track[] = releases.map(toTrack);
