# Firebase Deployment Instructions - coder-pod

## Current Status
Your Next.js app has API routes which require **Firebase App Hosting** (not static hosting).

---

## 🚀 Quick Deploy (After Blaze Upgrade)

### 1. Upgrade Firebase Project to Blaze Plan
- Visit: https://console.firebase.google.com/project/coder-pod/usage/details
- Click "Modify plan" → "Upgrade to Blaze"
- Add payment method (includes generous free tier)

### 2. Deploy via Firebase Console (Easiest)
1. Go to: https://console.firebase.google.com/project/coder-pod/apphosting
2. Click "Get Started" or "Create Backend"
3. Connect GitHub repository
4. Select repository branch: `main`
5. Configure:
   - Build command: `npm run build`
   - Install command: `npm ci`
   - Output directory: `.next`
6. Click "Create Backend"
7. ✅ Done! Auto-deploys on every push to main

---

## 💰 Blaze Plan Pricing

### Included FREE:
- 2 million Cloud Function invocations/month
- 125,000 Cloud Run requests/month
- 360,000 GB-seconds/month
- 180,000 vCPU-seconds/month

### Your Usage Estimate:
- Small-medium traffic: **$0-5/month**
- No surprise charges (set budget alerts)

---

## 🔄 Alternative: Remove API Routes (Stay on Free Plan)

If you want to stay on the free Spark plan, you need to remove API routes.

### Remove API Routes:
```bash
# Delete API route files
rm -rf src/app/api/youtube-rss
rm -rf src/app/api/validate-ai-key
```

### Update next.config.mjs:
```javascript
const nextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,
  },
  // ... rest of config
};
```

### Then Deploy:
```bash
npm run build
firebase deploy --only hosting
```

**Note**: This loses AI key validation and YouTube RSS features.

---

## 📋 Recommended: Use Blaze Plan

**Reasons:**
1. ✅ Your app **needs** API routes for:
   - AI key validation (`/api/validate-ai-key`)
   - YouTube RSS proxy (`/api/youtube-rss`)
2. ✅ Supports full Next.js features
3. ✅ Free tier covers most small-medium apps
4. ✅ Automatic deployments via GitHub
5. ✅ Better performance with SSR

---

## 🛠️ Manual Deploy (After Blaze Upgrade)

### Option A: Via Firebase CLI
```bash
# Create backend (one-time)
firebase apphosting:backends:create

# Future deploys are automatic via GitHub pushes
```

### Option B: Via GitHub Actions
Already configured! Push to `main` branch auto-deploys.

---

## 🔐 Environment Variables

After deployment, add env vars in Firebase Console:
- Go to: https://console.firebase.google.com/project/coder-pod/apphosting
- Select your backend
- Go to "Configuration" → "Environment variables"
- Add:
  - `NEXT_PUBLIC_YOUTUBE_API_KEY`
  - Any other required variables

**Or** they're already in `apphosting.yaml`:
```yaml
env:
  - variable: NODE_ENV
    value: production
  - variable: NEXT_PUBLIC_YOUTUBE_API_KEY
    value: AIzaSyCu-8yph4y7HAqJqXSWQfnq8A_EAVZmMmc
```

---

## 🌐 Post-Deployment Setup

### 1. Configure OAuth Domains
In Firebase Console → Authentication → Settings → Authorized domains:
- Add your deployed URL: `your-app-name.web.app`
- This enables Google/GitHub login on production

### 2. Test Your App
- Visit your deployed URL
- Test API routes: `/api/youtube-rss?channelId=TEST`
- Test authentication
- Check Firestore access

### 3. Set Up Custom Domain (Optional)
- Firebase Console → Hosting → Add custom domain
- Follow DNS configuration steps
- Free SSL certificate included

---

## 📊 Monitor Your App

- **Performance**: https://console.firebase.google.com/project/coder-pod/apphosting
- **Logs**: Cloud Run logs in App Hosting console
- **Usage**: https://console.firebase.google.com/project/coder-pod/usage
- **Budget Alerts**: Google Cloud Console → Billing

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache locally
rm -rf .next node_modules
npm install
npm run build
```

### API Routes Don't Work
- Verify Blaze plan is active
- Check App Hosting backend is deployed (not static hosting)
- Check environment variables are set

### Authentication Issues
- Add production URL to authorized domains
- Verify OAuth apps are configured (GitHub, Google)

---

## 📝 Summary

**Next Steps:**
1. ✅ Upgrade to Blaze plan (free for small traffic)
2. ✅ Deploy via Firebase Console → App Hosting
3. ✅ Connect GitHub for auto-deploys
4. ✅ Add production URL to Firebase Auth domains
5. ✅ Test all features

**Your URLs after deployment:**
- Primary: `https://coder-pod-<hash>.web.app`
- Alternative: Via Firebase Console after setup

---

## 💡 Why Blaze Plan is Worth It

- **Cost**: Most apps stay within free tier ($0/month)
- **Features**: Full Next.js support (API routes, SSR, ISR)
- **Performance**: Better than static hosting
- **Scalability**: Handles traffic spikes automatically
- **Control**: Set budget alerts, no surprises

**Bottom Line**: For a production app with API routes, Blaze plan is essential and cost-effective.
