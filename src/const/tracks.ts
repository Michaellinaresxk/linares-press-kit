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
}

export const featuredSingle: Track = {
  id: 'vaiven',
  title: 'Vaivén',
  artist: 'Linarex ft. Dani Rivero',
  year: '2025',
  duration: 313,
  description:
    'Urban poetry dances over infectious afrobeat grooves—where rhythm meets soul.',
  coverImage:
    'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763218283/Vaive%CC%81n_dattqn.jpg',

  audioUrl: '/audio/vaiven.mp3',

  spotifyUrl:
    'https://open.spotify.com/track/77R8ciAdBDoVzHsL3GAjDB?si=0TkNaeysRLqG8uOxKRIYBQ',
};

export const tracks: Track[] = [
  {
    id: 'renacer',
    title: 'Renacer',
    artist: 'Linarex',
    duration: 196,
    description: 'Groovy rhythms and catchy melodies that make you move.',
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
    year: '2024',
    audioUrl: '/audio/endless-sky.mp3',
    waveformColor: '#06b6d4',
    coverImage:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
  },
];
