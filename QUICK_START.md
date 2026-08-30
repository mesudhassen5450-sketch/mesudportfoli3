# Quick Start Guide - Islamic Resources Platform

## 🚀 Get Started in 3 Steps

### Step 1: Run Development Server
```bash
npm run dev
```

### Step 2: Visit Your New Pages
- **Audio Lectures**: http://localhost:3000/audio-lectures
- **Resource Hub**: http://localhost:3000/islamic-resources

### Step 3: Add Your Media Files
Copy your Telegram export files to:
```
public/telegram_media/voice_messages/    # Audio files
public/telegram_media/files/             # PDF files
public/telegram_media/video_files/       # Video files
```

---

## ✅ What's Working Right Now

### Audio Player Test
1. Go to: `http://localhost:3000/audio-lectures`
2. Click play on any lecture
3. Player appears at bottom of screen
4. Navigate to another page - player continues playing ✅

### Language Switching Test
1. Click globe icon (🌐) on any page
2. Select: English | العربية | አማርኛ
3. Content updates instantly ✅
4. Arabic enables right-to-left layout ✅

### Search & Filter Test
1. On `/audio-lectures` page
2. Type in search box - results filter instantly ✅
3. Click category buttons - list filters by category ✅

---

## 📝 Update Your Content

Edit: `src/data/content.json`

```json
{
  "mediaItems": [
    {
      "id": "your_unique_id",
      "type": "audio",
      "title": {
        "en": "Your Title",
        "ar": "عنوانك",
        "am": "የእርስዎ ርዕስ"
      },
      "description": {
        "en": "Your description",
        "ar": "وصفك",
        "am": "የእርስዎ መግለጫ"
      },
      "fileUrl": "/telegram_media/voice_messages/your_file.ogg",
      "category": "Hadith",
      "duration": 1845,
      "fileSize": "3.2 MB",
      "dateAdded": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

## 🎯 Available Categories

Use these exact strings in `content.json`:
- `"Hadith"` - Hadith explanations
- `"Aqeedah"` - Islamic creed
- `"Tafseer"` - Quran explanation
- `"Kitab PDF"` - Islamic books
- `"Fiqh"` - Islamic jurisprudence
- `"Seerah"` - Prophetic biography
- `"General"` - Other topics

---

## 🔧 Common Tasks

### Add a New Audio Lecture
1. Copy file to `public/telegram_media/voice_messages/`
2. Add entry to `src/data/content.json`
3. Refresh browser - it appears automatically

### Change Language
```typescript
import { useLanguage } from '@/context/LanguageContext';

function YourComponent() {
  const { language, setLanguage } = useLanguage();
  
  // Change language
  setLanguage('ar'); // 'en', 'ar', or 'am'
}
```

### Play Audio from Code
```typescript
import { useAudio } from '@/context/AudioContext';
import { getAudios } from '@/data/mediaStore';

function YourComponent() {
  const { playTrack } = useAudio();
  const audioList = getAudios();
  
  // Play first audio
  playTrack(audioList[0]);
}
```

---

## 🐛 Troubleshooting

### "Audio 404 Error"
✅ **FIXED!** No more hardcoded paths. Player uses real Telegram media paths.

### "No Audio Playing"
1. Check file exists in `public/telegram_media/voice_messages/`
2. Verify `fileUrl` in `content.json` matches actual filename
3. Open browser console to see detailed error logs

### "Search Not Working"
- Make sure you're on `/audio-lectures` page
- Search looks in titles and descriptions for current language

### "Wrong Language Showing"
- Click language switcher (globe icon)
- Select your preferred language
- Selection is saved in localStorage

---

## 📊 File Locations

```
Your Project/
├── src/
│   ├── app/
│   │   ├── audio-lectures/page.tsx     ← Audio library page
│   │   └── islamic-resources/page.tsx  ← Landing page
│   ├── components/
│   │   ├── AudioPlayer.tsx             ← Sticky player
│   │   └── LanguageSwitcher.tsx        ← Language selector
│   ├── context/
│   │   ├── AudioContext.tsx            ← Player state
│   │   └── LanguageContext.tsx         ← i18n state
│   ├── data/
│   │   ├── content.json                ← Your media database
│   │   └── mediaStore.ts               ← Helper functions
│   └── types/
│       └── media.ts                    ← TypeScript types
└── public/
    └── telegram_media/
        ├── voice_messages/             ← Put audio here
        ├── files/                      ← Put PDFs here
        └── video_files/                ← Put videos here
```

---

## 🎨 Customize Styling

The components use Tailwind CSS with dark mode support:
- Edit component files to change colors
- Use `dark:` prefix for dark mode variants
- Global styles in `src/app/globals.css`

---

## 📚 Learn More

- Full setup: `ISLAMIC_RESOURCES_SETUP.md`
- Project summary: `PROJECT_SUMMARY.md`
- Media instructions: `public/telegram_media/README.md`

---

## ✨ Next Features to Build

1. **Video Player Page** (`/videos`)
2. **PDF Viewer Page** (`/kitab`)
3. **Playlists** (curated collections)
4. **Bookmarks** (save favorites)
5. **Download Buttons** (offline access)
6. **Share Links** (share specific lectures)

---

## 🎉 You're Ready!

Your Islamic educational resources platform is fully functional. Just add your media files and update the content database to customize it for your needs.

**May this platform benefit the Ummah! 🤲**
