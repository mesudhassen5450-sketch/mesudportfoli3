// Media store with typed helper functions for Islamic educational resources

import { MediaItem, MediaType, Category } from '@/types/media';
import contentData from './content.json';

/**
 * Normalize and encode file URL to handle spaces, special characters, and parentheses
 * @param url - Raw file URL from data
 * @returns Properly encoded URL
 */
export function normalizeFileUrl(url: string): string {
  try {
    // Split URL into segments
    const segments = url.split('/');
    
    // Encode each segment to handle spaces and special characters
    const encodedSegments = segments.map((segment) => {
      if (!segment) return segment;
      // Decode first in case it's already encoded, then encode
      return encodeURIComponent(decodeURIComponent(segment));
    });
    
    return encodedSegments.join('/');
  } catch (error) {
    console.error('Error normalizing URL:', url, error);
    return url;
  }
}

/**
 * Get all media items with normalized URLs
 */
export function getAllMedia(): MediaItem[] {
  return contentData.mediaItems.map((item) => ({
    ...item,
    fileUrl: normalizeFileUrl(item.fileUrl),
  })) as MediaItem[];
}

/**
 * Get all audio files
 */
export function getAudios(): MediaItem[] {
  return getAllMedia().filter((item) => item.type === 'audio');
}

/**
 * Get all PDF files
 */
export function getPdfs(): MediaItem[] {
  return getAllMedia().filter((item) => item.type === 'pdf');
}

/**
 * Get all video files
 */
export function getVideos(): MediaItem[] {
  return getAllMedia().filter((item) => item.type === 'video');
}

/**
 * Get media items by category
 */
export function getByCategory(category: Category): MediaItem[] {
  return getAllMedia().filter((item) => item.category === category);
}

/**
 * Get media items by type
 */
export function getByType(type: MediaType): MediaItem[] {
  return getAllMedia().filter((item) => item.type === type);
}

/**
 * Get a single media item by ID
 */
export function getMediaById(id: string): MediaItem | undefined {
  return getAllMedia().find((item) => item.id === id);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): Category[] {
  const categories = new Set<Category>();
  getAllMedia().forEach((item) => categories.add(item.category));
  return Array.from(categories);
}

/**
 * Search media items by title or description
 */
export function searchMedia(query: string, language: 'en' | 'ar' | 'am' = 'en'): MediaItem[] {
  const normalizedQuery = query.toLowerCase();
  return getAllMedia().filter((item) => {
    const title = item.title[language].toLowerCase();
    const description = item.description[language].toLowerCase();
    return title.includes(normalizedQuery) || description.includes(normalizedQuery);
  });
}

/**
 * Get media count by type
 */
export function getMediaStats() {
  const allMedia = getAllMedia();
  return {
    total: allMedia.length,
    audio: allMedia.filter((item) => item.type === 'audio').length,
    video: allMedia.filter((item) => item.type === 'video').length,
    pdf: allMedia.filter((item) => item.type === 'pdf').length,
  };
}
