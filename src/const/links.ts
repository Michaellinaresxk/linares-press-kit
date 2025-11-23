import { Share2, Users } from 'lucide-react';

// Tipos base
interface BasePlatform {
  id: number;
  name: string;
  url: string;
  color: string;
  description: string;
}

export interface StreamingPlatform extends BasePlatform {
  followers: string;
  monthlyListeners: string;
  verified: boolean;
}

export interface SocialPlatform extends BasePlatform {
  handle: string;
  followers: string;
  type: 'photo' | 'video' | 'text' | 'community' | 'professional';
}

export const streamingPlatforms: StreamingPlatform[] = [
  {
    id: 1,
    name: 'Spotify',
    followers: '12.5K',
    monthlyListeners: '45.2K',
    url: 'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS?si=6-KHEpmPQ3mTHwnLdw2iDg',
    color: '#1DB954',
    description: 'Main catalog and playlists',
    verified: true,
  },
  {
    id: 2,
    name: 'Apple Music',
    followers: '8.3K',
    monthlyListeners: '32.1K',
    url: 'https://music.apple.com/artist/linarex',
    color: '#FA243C',
    description: 'High-quality streaming',
    verified: true,
  },
  {
    id: 3,
    name: 'YouTube',
    followers: '15.7K',
    monthlyListeners: '78.4K',
    url: 'https://www.youtube.com/channel/UCZIaGK7NF4roKF039W_7O1Q',
    color: '#FF0000',
    description: 'Music videos and live sessions',
    verified: true,
  },
];

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 1,
    name: 'Instagram',
    handle: '@linarex_official',
    followers: '18.4K',
    url: 'https://instagram.com/linarex_official',
    color: '#E4405F',
    type: 'photo',
    description: 'Behind the scenes, studio life',
  },
  {
    id: 4,
    name: 'TikTok',
    handle: '@linarexmusic',
    followers: '25.1K',
    url: 'https://www.tiktok.com/@linarex59?_r=1&_t=ZN-91cgVJr6dKY',
    color: '#000000',
    type: 'video',
    description: 'Short-form content, music clips',
  },
];

export const officialLinks = [
  // {
  //   id: 1,
  //   name: 'Official Website',
  //   url: 'https://linarex-music.com',
  //   description: 'Main hub for all content and updates',
  //   icon: Globe,
  // },
  {
    id: 1,
    name: 'Booking & Management',
    url: 'mailto:linarexinfo@gmail.com',
    description: 'Professional inquiries and booking',
    icon: Users,
  },
  {
    id: 2,
    name: 'Press Kit',
    url: '#media-kit',
    description: 'Media assets and press materials',
    icon: Share2,
  },
];
