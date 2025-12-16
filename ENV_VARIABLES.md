# Environment Variables

## Required Variables for Production (Vercel)

### Firebase Authentication
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### Supabase (Notes Storage)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Local Development Setup

1. Copy these variables to `.env.local` in the project root
2. Replace placeholder values with your actual credentials
3. Never commit `.env.local` to version control

## Vercel Deployment

Add these environment variables in:
**Vercel Dashboard → Project Settings → Environment Variables**

Make sure to add them for:
- Production
- Preview
- Development

## Getting Credentials

### Firebase
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to Project Settings → General
4. Under "Your apps" → Web apps → Config
5. Copy all values starting with `NEXT_PUBLIC_FIREBASE_`

### Supabase
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Project Settings → API
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Security Notes

- ✅ All variables with `NEXT_PUBLIC_` prefix are exposed to the browser
- ✅ Supabase uses Row Level Security (RLS) to protect data
- ✅ Firebase handles authentication securely
- ✅ API keys are stored locally in browser only
- ⚠️ Never commit real credentials to Git
