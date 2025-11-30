# 🔧 CSS Cache Fix Guide

## Problem
The Roadmap Board CSS sometimes shows old design due to browser and Next.js caching.

## ✅ Fixes Applied

### 1. **Server-Side Caching Prevention**
- Added `layout.tsx` to `/src/app/roadmaps/`
- Set `dynamic = 'force-dynamic'` to disable static generation
- Set `revalidate = 0` to prevent caching

### 2. **Client-Side Cache Busting**
- Added `useEffect` hook to force style recalculation
- Injected cache-control meta tags dynamically
- Forces browser reflow on component mount

### 3. **Cache Clear Script**
- Created `clear-cache.sh` script
- Removes `.next` build cache
- Clears node_modules cache

---

## 🚀 How to Fix Cache Issues

### Option 1: Quick Fix (Browser Only)
**Hard Refresh the Browser:**
- **Mac**: `Cmd + Shift + R`
- **Windows/Linux**: `Ctrl + Shift + R`
- **Chrome DevTools**: Right-click refresh button → "Empty Cache and Hard Reload"

### Option 2: Clear All Caches (Recommended)

**Step 1: Stop the dev server**
```bash
# Press Ctrl+C in terminal
```

**Step 2: Run the cache clear script**
```bash
./clear-cache.sh
```

**Step 3: Restart the dev server**
```bash
npm run dev
```

**Step 4: Hard refresh browser**
- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

### Option 3: Manual Cache Clear

**Clear Next.js Cache:**
```bash
rm -rf .next
rm -rf node_modules/.cache
```

**Clear Browser Cache:**
1. Open browser
2. Press `Ctrl/Cmd + Shift + Delete`
3. Select "Cached images and files"
4. Click "Clear data"

---

## 🔍 How the Fix Works

### 1. **Layout File** (`/src/app/roadmaps/layout.tsx`)
```typescript
export const dynamic = 'force-dynamic';  // No static generation
export const revalidate = 0;             // No caching
```

### 2. **Client-Side Cache Busting** (`page.tsx`)
```typescript
useEffect(() => {
  // Force reflow
  document.documentElement.classList.remove('force-refresh');
  void document.documentElement.offsetHeight;
  document.documentElement.classList.add('force-refresh');
  
  // Add no-cache meta tags
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Cache-Control';
  meta.content = 'no-cache, no-store, must-revalidate';
  document.head.appendChild(meta);
}, []);
```

---

## 📝 Best Practices to Avoid Cache Issues

### During Development:
1. **Always hard refresh** after CSS changes
2. **Clear cache** when switching branches
3. **Restart dev server** after major changes
4. **Use incognito mode** for testing

### For Production:
1. Next.js automatically handles cache busting with build hashes
2. CDN cache can be cleared through your hosting provider
3. Service workers need manual clearing if implemented

---

## 🐛 If Issues Persist

### 1. Check Browser Extensions
- Disable CSS/style-related extensions
- Try incognito mode

### 2. Clear Everything
```bash
# Stop server
# Delete all caches
rm -rf .next node_modules/.cache
# Reinstall dependencies (if needed)
npm install
# Restart
npm run dev
```

### 3. Check for Conflicting Styles
```bash
# Search for old style definitions
grep -r "old-class-name" src/
```

### 4. Force Tailwind Rebuild
```bash
# Delete Tailwind cache
rm -rf node_modules/.cache/tailwindcss
# Restart
npm run dev
```

---

## ✅ Verification Checklist

After applying fixes, verify:
- [ ] Hard refreshed browser (Cmd/Ctrl + Shift + R)
- [ ] Cleared Next.js cache (`rm -rf .next`)
- [ ] Restarted dev server
- [ ] Checked in incognito mode
- [ ] Styles appear correct
- [ ] No console errors

---

## 📞 Quick Reference

| Action | Command/Shortcut |
|--------|-----------------|
| Hard Refresh (Mac) | `Cmd + Shift + R` |
| Hard Refresh (Win/Linux) | `Ctrl + Shift + R` |
| Clear All Caches | `./clear-cache.sh` |
| Clear Next.js Only | `rm -rf .next` |
| Clear Browser Cache | `Ctrl/Cmd + Shift + Delete` |
| Restart Dev Server | `npm run dev` |

---

## 🎯 Why This Happens

**Browser Caching:**
- Browsers cache CSS files for performance
- Old styles remain until cache expires

**Next.js Caching:**
- Static page generation caches HTML/CSS
- Build artifacts stored in `.next` folder

**Tailwind CSS:**
- Compiled styles cached in `node_modules/.cache`
- JIT compilation may use cached results

**Solution:** Our fixes prevent all these caches from causing issues!
