# Firebase Deployment Guide for Coder-Pod

## Quick Deploy

### Option 1: Automated Deployment (Recommended)
```bash
npm run deploy
```

This will:
1. Build your Next.js app for production
2. Deploy to Firebase Hosting
3. Your app will be live at: `https://coder-pod.web.app`

### Option 2: Full Deployment (with Firestore rules)
```bash
npm run deploy:full
```

This deploys hosting + Firestore + Database rules.

---

## Manual Deployment Steps

### 1. Build for Production
```bash
# Using Node 21 (as configured)
bash -c "source ~/.nvm/nvm.sh && nvm use 21 && npm run build"
```

### 2. Test Build Locally
```bash
npm run start
# Visit http://localhost:3000
```

### 3. Deploy to Firebase
```bash
firebase deploy --only hosting
```

---

## Deployment Options

### Deploy Only Hosting
```bash
firebase deploy --only hosting
```

### Deploy Everything
```bash
firebase deploy
```

### Deploy Specific Services
```bash
firebase deploy --only firestore:rules
firebase deploy --only database
firebase deploy --only hosting,firestore
```

---

## Your Firebase URLs

- **Primary URL**: https://coder-pod.web.app
- **Alternative URL**: https://coder-pod.firebaseapp.com
- **Firebase Console**: https://console.firebase.google.com/project/coder-pod

---

## Environment Variables

Environment variables are configured in:
- **Local Development**: `.env.local`
- **Firebase Hosting**: Set in Firebase Console → Project Settings → Environment Variables
- **Cloud Run (App Hosting)**: `apphosting.yaml`

Current variables:
- `NEXT_PUBLIC_YOUTUBE_API_KEY` - Already configured

---

## Post-Deployment Checklist

1. **Test OAuth Login**
   - Configure authorized domains in Firebase Console
   - Add your live URL to authorized domains:
     - Go to Authentication → Settings → Authorized domains
     - Add `coder-pod.web.app`
   
2. **Test Firestore Access**
   - Verify Firestore rules allow proper access
   - Check Firebase Console → Firestore Database

3. **Monitor Performance**
   - Check Firebase Console → Analytics
   - Review hosting metrics

---

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Deployment Issues
```bash
# Check Firebase login
firebase login

# Verify project
firebase projects:list
firebase use coder-pod

# Deploy with debug info
firebase deploy --debug
```

### Static Export Issues
If you see errors about dynamic features:
- Remove `output: 'export'` from `next.config.mjs` for full SSR
- Use Firebase App Hosting instead (requires GitHub connection)

---

## Firebase App Hosting (Alternative - Full SSR Support)

For full Next.js features (Server Actions, Dynamic Routes, SSR):

1. **Connect GitHub Repository**
   ```bash
   # In Firebase Console
   # Go to App Hosting → Get Started
   # Connect your GitHub repo
   ```

2. **Automatic Deployments**
   - Every push to `main` branch auto-deploys
   - Preview deployments for PRs
   - Full Next.js 16 support

3. **Manual Trigger**
   ```bash
   firebase apphosting:backends:create
   ```

---

## Production Optimization Tips

1. **Enable Analytics**
   ```bash
   firebase init analytics
   ```

2. **Set Up Performance Monitoring**
   - Add Firebase Performance SDK
   - Monitor in Firebase Console

3. **Configure Caching**
   - Static assets cached automatically
   - Configure custom headers if needed

4. **Security**
   - Review Firestore rules
   - Set up App Check for security
   - Enable reCAPTCHA for auth

---

## Maintenance

### Update Deployment
```bash
git pull origin main
npm run deploy
```

### Rollback
```bash
# View deployment history
firebase hosting:versions:list

# Rollback to specific version
firebase hosting:rollback
```

### View Logs
```bash
firebase functions:log
```

---

## Cost Monitoring

- **Free Tier Limits**: 10GB storage, 10GB/month transfer
- **Monitor Usage**: Firebase Console → Usage and billing
- **Set Budget Alerts**: Cloud Console → Billing → Budgets

---

## Support

- **Firebase Docs**: https://firebase.google.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Firebase Support**: https://firebase.google.com/support

