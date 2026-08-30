# Islamic Educational Resources Platform - Setup Guide

## Overview

This Next.js application archives, manages, and serves Islamic educational resources exported from the Telegram channel `@Sle_qelbachn1`. The platform features:

- **Multi-language support**: English, Arabic (RTL), and Amharic
- **Global persistent audio player**: Plays continuously across page navigation
- **Category filtering**: Hadith, Aqeedah, Tafseer, Kitab PDF, Fiqh, Seerah
- **Real-time search**: Filter by title and description
- **Responsive design**: Works on mobile, tablet, and desktop

## Setup Instructions

### 1. Add Telegram Media Files

Create the following directory structure in your `public` folder:

```
public/
└── telegram_media/
    ├── voice_messages/
    │   ├── tawheed_lecture_001.ogg
    │   ├── hadith_sincerity_002.ogg
    │   ├── tafseer_fatihah_003.ogg
    │   ├── fiqh_purification_004.ogg
    │   └── prayer_times_005.ogg
    ├── files/
    │   ├── riyad_as_salihin_complete.pdf
    │   └── three_fundamentals.pdf
    └── video_files/
        ├── prophets_lives_001.mp4
        └── prophets_lives_001_thumb.jpg
```

### 2. Update Content Data

Edit `src/data/content.json` to add your actual media items. Each item should have:

```json
{
  "id": "unique_id",
  "type": "audio" | "video" | "pdf",
  "title": {
    "en": "English Title",
    "ar": "العنوان العربي",
    "am": "አማርኛ ርዕስ"
  },
  "description": {
    "en": "English description",
    "ar": "الوصف العربي",
    "am": "አማርኛ መግለጫ"
  },
  "fileUrl": "/telegram_media/voice_messages/filename.ogg",
  "category": "Hadith" | "Aqeedah" | "Tafseer" | "Kitab PDF" | "Fiqh" | "Seerah",
  "duration": 1845,
  "fileSize": "3.2 MB",
  "dateAdded": "2024-01-15T10:30:00Z"
}
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/audio-lectures` to see the audio lecture page.

## Key Features & Usage

### Audio Player
- **Play/Pause**: Click the play button on any lecture
- **Seek**: Drag the progress bar
- **Volume**: Hover over volume icon
- **Next/Previous**: Navigate through playlist
- **Persistent**: Player stays active across page navigation

### Language Switching
Import and use the `LanguageSwitcher` component:

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function YourPage() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your content */}
    </div>
  );
}
```

### Accessing Media in Your Components

```tsx
import { useAudio } from '@/context/AudioContext';
import { useLanguage } from '@/context/LanguageContext';
import { getAudios, getPdfs, getVideos, getByCategory } from '@/data/mediaStore';

export default function MyComponent() {
  const { playTrack, setPlaylist } = useAudio();
  const { t, language } = useLanguage();
  
  const audioList = getAudios();
  const hadithLectures = getByCategory('Hadith');
  
  return (
    <div>
      {audioList.map((item) => (
        <div key={item.id}>
          <h3>{t(item.title)}</h3>
          <button onClick={() => playTrack(item)}>Play</button>
        </div>
      ))}
    </div>
  );
}
```

## File Structure

```
src/
├── app/
│   ├── audio-lectures/
│   │   └── page.tsx          # Audio lectures page
│   └── layout.tsx             # Root layout with providers
├── components/
│   ├── AudioPlayer.tsx        # Global sticky audio player
│   └── LanguageSwitcher.tsx   # Language selection dropdown
├── context/
│   ├── AudioContext.tsx       # Audio player state management
│   └── LanguageContext.tsx    # i18n state management
├── data/
│   ├── content.json           # Media items database
│   └── mediaStore.ts          # Helper functions for data access
└── types/
    └── media.ts               # TypeScript interfaces
```

## Troubleshooting

### Audio 404 Errors

If you see `GET /audio/kitab/riyad-02.mp3 404 (Not Found)`:

1. ✅ Verify files exist in `public/telegram_media/`
2. ✅ Check `fileUrl` paths in `content.json` match actual files
3. ✅ Ensure paths start with `/telegram_media/` (not `./` or relative)
4. ✅ Run `npm run dev` to restart the server

### URL Encoding Issues

The `mediaStore.ts` automatically handles:
- Spaces in filenames
- Special characters (parentheses, etc.)
- Arabic/Amharic characters

### RTL Support

Arabic language automatically enables RTL layout. The `LanguageContext` sets:
- `document.dir = 'rtl'` for Arabic
- `document.lang` for proper language attribute

## Next Steps

1. **Create PDF viewer page** at `src/app/kitab/page.tsx`
2. **Create video player page** at `src/app/videos/page.tsx`
3. **Add navigation menu** with links to all resource types
4. **Implement Python script** to auto-generate `content.json` from Telegram exports
5. **Add analytics** to track popular lectures
6. **Create playlists** feature for curated collections

## Python Script for Telegram Parsing

Create `scripts/parse_telegram.py` to automate data extraction:

```python
import json
import os
from bs4 import BeautifulSoup

def parse_telegram_export(html_file):
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    media_items = []
    
    # Parse messages and extract media
    for message in soup.find_all('div', class_='message'):
        # Extract title, description, file path
        # Convert to content.json format
        pass
    
    return media_items

if __name__ == '__main__':
    items = parse_telegram_export('telegram_export/messages.html')
    with open('src/data/content.json', 'w', encoding='utf-8') as f:
        json.dump({'mediaItems': items}, f, indent=2, ensure_ascii=False)
```

## Support

For questions about this Islamic educational resources platform, check:
- `/audio-lectures` - Audio lecture library
- TypeScript types in `src/types/media.ts`
- Data functions in `src/data/mediaStore.ts`
