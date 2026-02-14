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

export const featuredSingle: Track = {
  id: 'renacer',
  title: 'Renacer',
  artist: 'Linarex ft. Skiba',
  year: '2026',
  duration: 313,
  description:
    'Is a funk-driven love story about transformation and finding home. Perfect for late-night drives and uplifting playlists .',
  coverImage:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093920/linarex/2026_ssgfrp.jpg',

  audioUrl: '/audio/renacer.mp3',

  spotifyUrl:
    'https://open.spotify.com/track/77R8ciAdBDoVzHsL3GAjDB?si=0TkNaeysRLqG8uOxKRIYBQ',
};

export const tracks: Track[] = [
  {
    id: 'renacer',
    title: 'Renacer',
    artist: 'Linarex',
    duration: 196,
    description:
      'Is a funk-driven love story about transformation and finding home',
    genre: 'Funk Pop',
    year: '2026',
    audioUrl: '/audio/renacer.mp3',
    waveformColor: '#a855f7',
    coverImage:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
  },
  {
    id: 'endless-sky',
    title: 'Endless Sky',
    duration: 255,
    description:
      'A tender acoustic journey where fingerpicked guitar meets introspective storytelling.',
    genre: 'Acoustic Indie Folk',
    year: '2026',
    audioUrl: '/audio/endless-sky.mp3',
    waveformColor: '#06b6d4',
    coverImage:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
  },
];
