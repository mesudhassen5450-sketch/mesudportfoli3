// Audio system diagnostics utility

import { getAudios } from '@/data/mediaStore';

/**
 * Validate all audio file URLs in the system
 * Logs any issues found and returns a validation report
 */
export function validateAudioUrls() {
  console.log('=== Audio URL Validation Report ===');
  
  const audios = getAudios();
  const issues: string[] = [];
  
  console.log(`Total audio items: ${audios.length}`);
  console.log('');
  
  audios.forEach((audio, index) => {
    console.log(`${index + 1}. "${audio.title.en}"`);
    console.log(`   ID: ${audio.id}`);
    console.log(`   URL: ${audio.fileUrl}`);
    console.log(`   Category: ${audio.category}`);
    
    // Validate URL format
    if (!audio.fileUrl || audio.fileUrl.trim() === '') {
      const issue = `❌ ERROR: Empty fileUrl for ${audio.id}`;
      console.error(`   ${issue}`);
      issues.push(issue);
    } else if (audio.fileUrl.includes('/audio/kitab/')) {
      const issue = `❌ ERROR: Hardcoded /audio/kitab/ path found in ${audio.id}: ${audio.fileUrl}`;
      console.error(`   ${issue}`);
      issues.push(issue);
    } else if (!audio.fileUrl.startsWith('/telegram_media/') && 
               !audio.fileUrl.startsWith('http://') && 
               !audio.fileUrl.startsWith('https://')) {
      const issue = `⚠️  WARNING: Unusual path format in ${audio.id}: ${audio.fileUrl}`;
      console.warn(`   ${issue}`);
      issues.push(issue);
    } else {
      console.log('   ✅ Valid URL format');
    }
    
    console.log('');
  });
  
  console.log('=== Validation Summary ===');
  if (issues.length === 0) {
    console.log('✅ All audio URLs are valid!');
    console.log('No hardcoded paths found.');
  } else {
    console.error(`❌ Found ${issues.length} issue(s):`);
    issues.forEach((issue, i) => {
      console.error(`  ${i + 1}. ${issue}`);
    });
  }
  console.log('========================');
  
  return {
    totalAudios: audios.length,
    issues,
    isValid: issues.length === 0
  };
}

/**
 * Check if the audio system is properly initialized
 */
export function checkAudioSystemHealth() {
  console.log('=== Audio System Health Check ===');
  
  try {
    // Check if Audio API is available
    if (typeof Audio === 'undefined') {
      console.error('❌ Audio API not available in this environment');
      return false;
    }
    console.log('✅ Audio API available');
    
    // Check if we can create an audio element
    const testAudio = new Audio();
    console.log('✅ Audio element creation successful');
    
    // Check if we have audio data
    const audios = getAudios();
    if (audios.length === 0) {
      console.warn('⚠️  No audio items found in content.json');
    } else {
      console.log(`✅ Found ${audios.length} audio items`);
    }
    
    // Validate URLs
    const validation = validateAudioUrls();
    
    console.log('========================');
    return validation.isValid;
  } catch (error) {
    console.error('❌ Audio system health check failed:', error);
    return false;
  }
}

/**
 * Log the current state of the audio player (call from components)
 */
export function logAudioPlayerState(
  currentTrack: any,
  isPlaying: boolean,
  currentTime: number,
  duration: number
) {
  console.log('=== Audio Player State ===');
  if (currentTrack) {
    console.log('Current Track:', currentTrack.title.en);
    console.log('URL:', currentTrack.fileUrl);
    console.log('Playing:', isPlaying);
    console.log('Time:', `${currentTime.toFixed(1)}s / ${duration.toFixed(1)}s`);
  } else {
    console.log('No track currently loaded');
  }
  console.log('========================');
}
