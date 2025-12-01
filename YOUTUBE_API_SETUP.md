# YouTube API Setup Guide

## 🎉 YouTube Integration Added!

Your Discover page now fetches **real video content** from YouTube API alongside DEV.to articles.

---

## 📋 Setup Instructions

### Step 1: Get YouTube API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or use existing)
   - Click "Select a project" → "New Project"
   - Name it: "Coder Pod" or anything you like
   - Click "Create"

3. **Enable YouTube Data API v3**
   - Go to: https://console.cloud.google.com/apis/library
   - Search for "YouTube Data API v3"
   - Click on it → Click "Enable"

4. **Create API Credentials**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Click "+ CREATE CREDENTIALS"
   - Select "API key"
   - Copy the generated API key

5. **Restrict Your API Key** (Optional but Recommended)
   - Click on your API key
   - Under "API restrictions":
     - Select "Restrict key"
     - Check only "YouTube Data API v3"
   - Under "Application restrictions":
     - Select "HTTP referrers (web sites)"
     - Add your domain (e.g., `localhost:3000`, `yourdomain.com`)
   - Click "Save"

---

### Step 2: Add API Key to Your Project

1. **Create `.env.local` file** in your project root:
   ```bash
   touch .env.local
   ```

2. **Add your YouTube API key**:
   ```env
   NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key_here
   ```

3. **Restart your development server**:
   ```bash
   npm run dev
   ```

---

## ✅ What You Get

### Free Tier Limits
- **10,000 requests per day** (FREE!)
- Each search = 100 units
- You can do ~100 searches per day
- More than enough for personal use

### Features Enabled
✅ Real YouTube videos in Discover page
✅ Search videos by programming topics
✅ Filter by language tags (JavaScript, React, etc.)
✅ Video thumbnails and metadata
✅ Direct links to YouTube

---

## 🎯 How It Works

### Content Mix
- **"All"**: Shows both articles (DEV.to) + videos (YouTube)
- **"Articles"**: Only DEV.to articles
- **"Videos"**: Only YouTube videos
- **"Podcasts"**: DEV.to podcast episodes (if any)

### Video Search
When you select a tag (e.g., "JavaScript"):
- Searches YouTube for: "JavaScript programming tutorial"
- Fetches 30 relevant videos
- Shows them with Video badge 🎥

### Example Queries
- Tag: "React" → "React programming tutorial"
- Tag: "TypeScript" → "TypeScript programming tutorial"
- Tag: "AI" → "AI programming tutorial"

---

## 🔧 Troubleshooting

### Videos Not Showing?
1. **Check API key is set**:
   ```bash
   # In terminal
   echo $NEXT_PUBLIC_YOUTUBE_API_KEY
   ```

2. **Check browser console** for errors:
   - Open DevTools (F12)
   - Look for YouTube API errors

3. **Verify API is enabled**:
   - Go to Google Cloud Console
   - Check YouTube Data API v3 is enabled

### Quota Exceeded?
- You've used 10,000 requests today
- Wait until midnight PST for reset
- Or upgrade to paid plan

### API Key Invalid?
- Regenerate key in Google Cloud Console
- Update `.env.local` file
- Restart dev server

---

## 🚀 Usage Tips

### Best Practices
1. **Don't commit API key** to Git (already in `.gitignore`)
2. **Add domain restrictions** in Google Cloud Console
3. **Monitor usage** in Console dashboard

### Optimize Requests
- Videos cached in state
- Fetches only when filter changes
- Searches are debounced in search bar

---

## 📊 Content Strategy

### Current Setup
- **Articles**: DEV.to (50 per page)
- **Videos**: YouTube (30 per search)
- **Podcasts**: DEV.to (rare)

### Future Enhancements
- Add more video sources (Vimeo, etc.)
- Add podcast APIs (Spotify, Apple Podcasts)
- Cache results for better performance

---

## 🎓 API Documentation

### YouTube Data API v3
- **Docs**: https://developers.google.com/youtube/v3
- **Pricing**: https://developers.google.com/youtube/v3/determine_quota_cost
- **Console**: https://console.cloud.google.com/

---

## ⚠️ Important Notes

### Security
- API key is **public** (NEXT_PUBLIC_*)
- It's safe for client-side use
- Add domain restrictions for security
- Don't use for sensitive data

### Rate Limits
- 10,000 units/day (free)
- Search costs 100 units each
- Video details cost 1 unit each
- Monitor usage in Console

### Terms of Service
- Follow YouTube Terms of Service
- Display attribution to YouTube
- Don't abuse API limits
- Respect content copyrights

---

## ✨ Summary

**Setup Time**: ~5 minutes
**Cost**: FREE (10k requests/day)
**Benefit**: Real video content in your app

Now your Discover page has:
- ✅ Articles from DEV.to
- ✅ Videos from YouTube
- ✅ Full search and filter functionality
- ✅ Professional content discovery experience

Enjoy! 🎉
