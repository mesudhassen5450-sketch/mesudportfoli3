# Telegram Media Directory

This directory contains media files exported from the Telegram channel `@Sle_qelbachn1`.

## Directory Structure

```
telegram_media/
├── voice_messages/     # Audio lecture files (.ogg, .mp3)
├── files/              # PDF documents and other files
└── video_files/        # Video lectures (.mp4, .webm)
```

## How to Add Your Media Files

1. **Export from Telegram**:
   - Open Telegram Desktop
   - Go to @Sle_qelbachn1 channel
   - Click the three dots (⋮) → Export chat history
   - Select "Media" options (photos, videos, files, voice messages)
   - Choose JSON or HTML format
   - Export to a folder

2. **Copy Media Files**:
   - Copy contents of `voice_messages/` → `public/telegram_media/voice_messages/`
   - Copy contents of `files/` → `public/telegram_media/files/`
   - Copy contents of `video_files/` → `public/telegram_media/video_files/`

3. **Update content.json**:
   - Edit `src/data/content.json`
   - Add entries for each media file with correct paths
   - Ensure `fileUrl` matches actual file location

## Example File Paths

- Audio: `/telegram_media/voice_messages/lecture_001.ogg`
- PDF: `/telegram_media/files/book_001.pdf`
- Video: `/telegram_media/video_files/video_001.mp4`

## Notes

- Files are served directly from the `public` directory
- Next.js automatically handles static file serving
- Use proper URL encoding for filenames with spaces
- The `mediaStore.ts` helper handles URL encoding automatically
