# Audio Assets

## Ambient Sound

Replace the placeholder audio file with your own ambient audio:

- **File**: `placeholder-ambient.mp3`
- **Format**: MP3, AAC, or OGG
- **Duration**: 2-5 minutes (will loop automatically)
- **Volume**: Mixed at comfortable listening level (app sets 30% volume)
- **Mood**: Should match the cinematic, premium aesthetic of your photography

### Recommended Audio Types:
- Gentle nature sounds (flowing water, soft wind, distant birds)
- Minimal ambient music (no lyrics, slow tempo)
- Subtle atmospheric soundscapes
- White noise or binaural tones

### Legal Requirements:
- ✅ You own the audio or have proper licensing
- ✅ Royalty-free or properly licensed
- ✅ No copyrighted music without permission

### How to Replace:
1. Add your audio file to this directory: `/public/audio/`
2. Name it `placeholder-ambient.mp3` or update the path in:
   - `components/mood-selector.tsx` (line with `new Audio(...)`)
