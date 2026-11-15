import { links } from '@/lib/links';

export type ReleaseId = 'memories' | 'renacer' | 'vaiven';

export type Release = {
  id: ReleaseId;
  title: string;
  year: string;
  collaborator: string;
  durationSeconds: number;
  durationLabel: string;
  coverImage: string;
  coverAltKey: 'memories' | 'renacer' | 'vaiven';
  spotifyUrl: string;
  audioUrl: string;
  taglineKey: 'memories' | 'renacer' | 'vaiven';
};

export const releases: Release[] = [
  {
    id: 'memories',
    title: 'Memories',
    year: '2026',
    collaborator: 'Jacke Matheus',
    durationSeconds: 243,
    durationLabel: '4:03',
    coverImage:
      'https://res.cloudinary.com/dwgzffsgl/image/upload/v1786661039/bg_qvvlw9.jpg',
    coverAltKey: 'memories',
    spotifyUrl: links.tracks.memories,
    audioUrl: '/audio/Memories.wav',
    taglineKey: 'memories',
  },
  {
    id: 'renacer',
    title: 'Renacer',
    year: '2026',
    collaborator: 'Skiwa',
    durationSeconds: 196,
    durationLabel: '3:16',
    coverImage:
      'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093920/linarex/2026_ssgfrp.jpg',
    coverAltKey: 'renacer',
    spotifyUrl: links.tracks.renacer,
    audioUrl: '/audio/Renacer.wav',
    taglineKey: 'renacer',
  },
  {
    id: 'vaiven',
    title: 'Vaivén',
    year: '2025',
    collaborator: 'Dani Rivero',
    durationSeconds: 193,
    durationLabel: '3:13',
    coverImage:
      'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763300435/504381421_17858001459453136_3713166365445180538_n_wdmog2.jpg',
    coverAltKey: 'vaiven',
    spotifyUrl: links.tracks.vaiven,
    audioUrl: '/audio/vaiven.mp3',
    taglineKey: 'vaiven',
  },
];

export const featuredRelease = releases[0];

export function getReleaseById(id: string): Release | undefined {
  return releases.find((release) => release.id === id);
}
