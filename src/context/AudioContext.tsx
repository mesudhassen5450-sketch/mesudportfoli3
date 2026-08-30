'use client';

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { MediaItem } from '@/types/media';

interface AudioContextType {
  currentTrack: MediaItem | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playTrack: (track: MediaItem) => void;
  pause: () => void;
  play: () => void;
  togglePlayPause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  playlist: MediaItem[];
  setPlaylist: (tracks: MediaItem[]) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);
  const [playlist, setPlaylist] = useState<MediaItem[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element once on mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      console.log('AudioContext: Audio element initialized');
    }
    
    const audio = audioRef.current;

    // Event listeners
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      console.log('AudioContext: Track ended');
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLAudioElement;
      console.error('AudioContext: Error loading audio');
      console.error('  URL:', target?.src || 'No source');
      console.error('  Error:', target?.error?.message || 'Unknown error');
      setIsPlaying(false);
      // Don't use synthetic fallback - just report the error
    };

    const handleCanPlay = () => {
      console.log('AudioContext: Audio ready to play:', audio.src);
    };

    const handleLoadStart = () => {
      console.log('AudioContext: Started loading:', audio.src);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, []); // Only run once on mount

  const playTrack = (track: MediaItem) => {
    if (!audioRef.current) {
      console.error('AudioContext: Audio element not initialized');
      return;
    }

    // Validate fileUrl
    if (!track.fileUrl || track.fileUrl.trim() === '') {
      console.error('AudioContext: Invalid or empty fileUrl for track:', track.id, track.title.en);
      return;
    }

    // Validate path starts with /telegram_media/ or is an absolute URL
    const isValidPath = track.fileUrl.startsWith('/telegram_media/') || 
                        track.fileUrl.startsWith('http://') || 
                        track.fileUrl.startsWith('https://');
    
    if (!isValidPath) {
      console.error('AudioContext: Invalid fileUrl path:', track.fileUrl);
      console.error('  Expected path to start with /telegram_media/ or http(s)://');
      return;
    }

    console.log('AudioContext: Playing track:', track.title.en);
    console.log('  URL:', track.fileUrl);
    console.log('  Category:', track.category);
    
    // Set the track
    setCurrentTrack(track);
    
    // Load and play
    audioRef.current.src = track.fileUrl;
    audioRef.current.load();
    
    // Play when ready
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        console.log('AudioContext: Successfully playing:', track.fileUrl);
      })
      .catch((error) => {
        console.error('AudioContext: Error playing audio:', error);
        setIsPlaying(false);
      });
  };

  const pause = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const play = () => {
    if (audioRef.current && !isPlaying && currentTrack) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('AudioContext: Error resuming playback:', error);
        });
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (newVolume: number) => {
    if (audioRef.current) {
      const clampedVolume = Math.max(0, Math.min(1, newVolume));
      audioRef.current.volume = clampedVolume;
      setVolumeState(clampedVolume);
    }
  };

  const nextTrack = () => {
    if (playlist.length === 0 || !currentTrack) {
      console.log('AudioContext: Cannot skip to next track - no playlist or current track');
      return;
    }
    
    const currentIndex = playlist.findIndex((track) => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    console.log('AudioContext: Skipping to next track:', playlist[nextIndex].title.en);
    playTrack(playlist[nextIndex]);
  };

  const previousTrack = () => {
    if (playlist.length === 0 || !currentTrack) {
      console.log('AudioContext: Cannot skip to previous track - no playlist or current track');
      return;
    }
    
    const currentIndex = playlist.findIndex((track) => track.id === currentTrack.id);
    const previousIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    console.log('AudioContext: Skipping to previous track:', playlist[previousIndex].title.en);
    playTrack(playlist[previousIndex]);
  };

  // Auto-play next track when current track ends
  useEffect(() => {
    if (!isPlaying && currentTrack && playlist.length > 1) {
      // Check if we just finished a track (not paused by user)
      if (audioRef.current && audioRef.current.ended) {
        console.log('AudioContext: Track ended, auto-playing next track');
        nextTrack();
      }
    }
  }, [isPlaying]); // eslint-disable-line react-hooks/exhaustive-deps

  const value: AudioContextType = {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    playTrack,
    pause,
    play,
    togglePlayPause,
    seek,
    setVolume,
    nextTrack,
    previousTrack,
    playlist,
    setPlaylist,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
