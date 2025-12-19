# Mood-Based Experience System

Your Cyclodron Photography website now features a premium mood-based experience where visitors choose their emotional journey through your work.

## Features Implemented

### 5 Moods Available:
1. **🌊 Calm & Flow** - Serene waters and flowing movements (Blue tones)
2. **🌲 Grounded & Earthy** - Forest textures and natural tones (Green/Brown)
3. **🌌 Moody & Cinematic** - Dramatic shadows and deep contrast (Purple/Magenta)
4. **🌄 Golden Hour** - Warm light and golden tones (Gold/Orange)
5. **❄️ Cold Silence** - Winter stillness and icy calm (Icy Blue/White)

### User Experience:
- First-time visitors see mood selector after 1 second
- Selected mood persists across all pages via localStorage
- Each mood applies unique color theme via CSS variables
- Optional ambient sound toggle (off by default, bottom-right corner)
- Clean "Skip for now" option available

## Assets You Need to Replace

### 1. Mood Background Images
Location: `/public/`

Replace these placeholder images with your own cinematic photos:

- `calm-flowing-water.jpg` - Serene water scene (river, lake, ocean)
- `lush-forest.png` - Dense forest or woodland path
- `moody-cinematic-landscape.jpg` - Dramatic shadowy landscape
- `golden-hour-sunset.jpg` - Warm sunset or sunrise scene
- `winter-snowy-landscape.jpg` - Winter or snowy environment

**Specs:**
- Dimensions: 1920x1080 minimum (landscape orientation)
- Format: JPG or PNG
- Quality: High resolution, optimized for web
- Mood: Should visually represent each mood's aesthetic

### 2. Ambient Audio (Optional)
Location: `/public/audio/placeholder-ambient.mp3`

See `/public/audio/README.md` for detailed instructions.

**Important:**
- Audio is OFF by default
- User must manually enable via toggle button
- No copyrighted music or sounds
- 2-5 minute loop recommended

## Technical Details

### File Structure:
```
components/
  mood-selector.tsx      # Mood selection UI + ambient toggle
  mood-provider.tsx      # Theme application logic
hooks/
  use-mood.tsx          # Zustand store with localStorage persistence
app/
  page.tsx              # Homepage with mood integration
  layout.tsx            # Root layout with MoodProvider
  globals.css           # CSS variables for mood themes
```

### Customizing Mood Themes:

Edit `components/mood-provider.tsx` to adjust colors:

```typescript
const moodThemes: Record<Mood, Record<string, string>> = {
  "calm-flow": {
    "--mood-primary": "oklch(0.6 0.15 220)", // Your custom color
    "--mood-accent": "oklch(0.65 0.12 200)",
    "--mood-muted": "oklch(0.3 0.05 220)",
  },
  // ... more moods
}
```

### How Mood Persists:
- Stored in localStorage as "cyclodron-mood"
- Applies automatically on page load
- Syncs across all pages (portfolio, about, etc.)
- User can clear by selecting a new mood

## Testing Checklist

- [ ] Replace all 5 mood background images
- [ ] Test mood selector on first visit
- [ ] Verify mood persists after page refresh
- [ ] Test "Skip for now" option
- [ ] Add optional ambient audio file
- [ ] Test ambient toggle (on/off)
- [ ] Verify smooth transitions between moods
- [ ] Check mobile responsiveness
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Verify color contrast meets accessibility standards

## Accessibility Features

- ✅ Keyboard navigation supported
- ✅ Focus indicators on all interactive elements
- ✅ ARIA labels on icon buttons
- ✅ Skip option for users who prefer default
- ✅ Audio off by default (user-controlled)
- ✅ Smooth, non-flashy transitions

## Future Enhancements (Optional)

Consider adding:
- Gallery filtering by mood (show curated photos per mood)
- Mood-specific typography or font weights
- Time-based mood suggestions (morning = Golden Hour, evening = Moody)
- Social sharing of mood preferences
- Analytics tracking of popular moods

## Support

If you need help customizing the mood experience or have questions, refer to the component files - they contain detailed comments explaining the logic.

**Enjoy your premium mood-based photography experience! 🎨📸**
