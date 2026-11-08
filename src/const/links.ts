import { Share2, Users } from 'lucide-react';
import { bookingEmail, siteConfig } from '@/lib/site-config';

// Tipos base
interface BasePlatform {
  id: number;
  name: string;
  url: string;
  color: string;
  description: string;
}

export interface StreamingPlatform extends BasePlatform {
  verified?: boolean;
}

export interface SocialPlatform extends BasePlatform {
  handle: string;
  type: 'photo' | 'video' | 'text' | 'community' | 'professional';
}

export const streamingPlatforms: StreamingPlatform[] = [
  {
    id: 1,
    name: 'Spotify',
    url: siteConfig.profiles.spotify,
    color: '#1DB954',
    description: 'Listen to the Linarex catalogue.',
  },
  {
    id: 2,
    name: 'YouTube',
    url: siteConfig.profiles.youtube,
    color: '#FF0000',
    description: 'Music videos and live sessions.',
  },
];

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 1,
    name: 'Instagram',
    handle: '@_linarex',
    url: siteConfig.profiles.instagram,
    color: '#E4405F',
    type: 'photo',
    description: 'Follow Linarex on Instagram.',
  },
  {
    id: 4,
    name: 'TikTok',
    handle: '@linarex59',
    url: siteConfig.profiles.tiktok,
    color: '#000000',
    type: 'video',
    description: 'Follow Linarex on TikTok.',
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
    url: bookingEmail,
    description: 'Professional inquiries and booking',
    icon: Users,
  },
  {
    id: 2,
    name: 'Press Kit',
    url: '/epk',
    description: 'Linarex Electronic Press Kit',
    icon: Share2,
  },
];
