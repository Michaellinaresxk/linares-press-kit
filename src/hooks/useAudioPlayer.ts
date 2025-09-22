import { useState } from 'react';

export const useAudioPlayer = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (collabId: number) => {
    if (playingId === collabId) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingId(collabId);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    setIsPlaying(false);
    setPlayingId(null);
  };

  return { playingId, isPlaying, togglePlay, stopAudio };
};
