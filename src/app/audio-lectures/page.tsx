'use client';

import React, { useState, useMemo } from 'react';
import { useAudio } from '@/context/AudioContext';
import { useLanguage } from '@/context/LanguageContext';
import { getAudios, getAllCategories } from '@/data/mediaStore';
import { MediaItem, Category } from '@/types/media';
import { Play, Pause, Search, Filter } from 'lucide-react';
import { validateAudioUrls } from '@/utils/audioDiagnostics';

export default function AudioLecturesPage() {
  const { playTrack, currentTrack, isPlaying, setPlaylist } = useAudio();
  const { t, language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const audioList = getAudios();
  const categories = getAllCategories();

  // Set playlist and run diagnostics when component mounts
  React.useEffect(() => {
    console.log('AudioLecturesPage: Initializing...');
    
    // Validate audio URLs
    const validation = validateAudioUrls();
    if (!validation.isValid) {
      console.error('AudioLecturesPage: Some audio URLs are invalid!');
    }
    
    // Set playlist
    console.log(`AudioLecturesPage: Setting playlist with ${audioList.length} tracks`);
    setPlaylist(audioList);
    
    // Log first track for verification
    if (audioList.length > 0) {
      console.log('AudioLecturesPage: First track:', audioList[0].title.en);
      console.log('  URL:', audioList[0].fileUrl);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Filter audio based on search and category
  const filteredAudio = useMemo(() => {
    return audioList.filter((item) => {
      const matchesSearch = 
        item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description[language].toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [audioList, searchQuery, selectedCategory, language]);

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return 'Unknown';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayAudio = (item: MediaItem) => {
    playTrack(item);
  };

  const isCurrentlyPlaying = (item: MediaItem) => {
    return currentTrack?.id === item.id && isPlaying;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'en' && 'Audio Lectures'}
            {language === 'ar' && 'المحاضرات الصوتية'}
            {language === 'am' && 'የድምፅ ንግግሮች'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {language === 'en' && `${audioList.length} lectures available from ስለ ቀልባችን @Sle_qelbachn1`}
            {language === 'ar' && `${audioList.length} محاضرة متاحة من ስለ ቀልባችን @Sle_qelbachn1`}
            {language === 'am' && `${audioList.length} ንግግሮች ከ ስለ ቀልባችን @Sle_qelbachn1 ይገኛሉ`}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={
                language === 'en' ? 'Search lectures...' :
                language === 'ar' ? 'بحث في المحاضرات...' :
                'ንግግሮችን ፈልግ...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="text-gray-500 dark:text-gray-400 w-5 h-5" />
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {language === 'en' && 'All'}
              {language === 'ar' && 'الكل'}
              {language === 'am' && 'ሁሉም'}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {language === 'en' && `Showing ${filteredAudio.length} of ${audioList.length} lectures`}
          {language === 'ar' && `عرض ${filteredAudio.length} من ${audioList.length} محاضرة`}
          {language === 'am' && `${filteredAudio.length} ከ ${audioList.length} ንግግሮች በማሳየት ላይ`}
        </div>

        {/* Audio List */}
        {filteredAudio.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {language === 'en' && 'No lectures found matching your search'}
              {language === 'ar' && 'لم يتم العثور على محاضرات مطابقة لبحثك'}
              {language === 'am' && 'ከፍለጋዎ ጋር የሚዛመዱ ንግግሮች አልተገኙም'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredAudio.map((item) => (
              <div
                key={item.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border transition-all ${
                  currentTrack?.id === item.id
                    ? 'border-blue-500 dark:border-blue-400'
                    : 'border-gray-200 dark:border-gray-700'
                } hover:shadow-md`}
              >
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Play Button */}
                    <button
                      onClick={() => handlePlayAudio(item)}
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isCurrentlyPlaying(item)
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      aria-label={isCurrentlyPlaying(item) ? 'Pause' : 'Play'}
                    >
                      {isCurrentlyPlaying(item) ? (
                        <Pause className="w-6 h-6 text-white fill-white" />
                      ) : (
                        <Play className="w-6 h-6 text-gray-700 dark:text-gray-300 fill-current" />
                      )}
                    </button>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {t(item.title)}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                        {t(item.description)}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                          {item.category}
                        </span>
                        <span>{formatDuration(item.duration)}</span>
                        {item.fileSize && <span>{item.fileSize}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Padding for Player */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}
