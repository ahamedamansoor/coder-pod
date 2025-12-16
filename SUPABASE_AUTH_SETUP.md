# Supabase Authentication Setup Guide

## Prerequisites

1. Install required dependency:
```bash
npm install @supabase/auth-helpers-nextjs
```

## Database Setup

### Step 1: Create Users Table

Go to Supabase Dashboard → SQL Editor and run:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  phone_number TEXT,
  dob DATE,
  photo_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'enterprise')),
  token_balance INTEGER DEFAULT 0,
  completed_topics JSONB DEFAULT '{}',
  preferences JSONB DEFAULT '{}',
  stats JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at DESC);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own data
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_users_updated_at();

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, name, photo_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### Step 2: Update Notes Table RLS

Update the notes table policies to use Supabase Auth:

```sql
-- Drop old policies
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON notes;

-- Create new policies using auth.uid()
CREATE POLICY "Users can view own notes"
  ON notes FOR SELECT
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert own notes"
  ON notes FOR INSERT
  WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update own notes"
  ON notes FOR UPDATE
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can delete own notes"
  ON notes FOR DELETE
  USING (auth.uid()::text = user_id);
```

---

## Google OAuth Setup

### Step 1: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen if needed
6. Application type: **Web application**
7. Add Authorized redirect URIs:
   ```
   https://abgopwlbdmwfwhotnoue.supabase.co/auth/v1/callback
   ```
8. Copy **Client ID** and **Client Secret**

### Step 2: Configure in Supabase

1. Go to Supabase Dashboard → **Authentication** → **Providers**
2. Enable **Google**
3. Paste:
   - **Client ID** (from Google Console)
   - **Client Secret** (from Google Console)
4. Save

---

## Email Authentication Setup

### Enable Email Provider

1. Go to Supabase Dashboard → **Authentication** → **Providers**
2. Enable **Email**
3. Configure:
   - ✅ Enable email confirmations
   - ✅ Enable email change confirmations
   - Set confirmation URL: `https://your-domain.com/auth/callback`

### Email Templates (Optional)

Customize email templates:
1. Go to **Authentication** → **Email Templates**
2. Customize:
   - Confirmation email
   - Magic link
   - Password reset
   - Email change

---

## Environment Variables

Already configured in `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL="https://abgopwlbdmwfwhotnoue.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

---

## Testing Authentication

### Test Email Signup
1. Visit `/login` or `/signup`
2. Enter email and password
3. Check email for verification link
4. Click link to verify
5. Sign in with verified email

### Test Google OAuth
1. Visit `/login`
2. Click "Sign in with Google"
3. Authorize with Google account
4. Redirect back to app

### Verify in Supabase
1. Go to **Authentication** → **Users**
2. Should see new users listed
3. Go to **Table Editor** → **users**
4. Should see user profiles created automatically

---

## Migration from Firebase

### Existing Users
- Users will need to **re-register** with Supabase
- Old Firebase user data can be exported if needed
- Consider sending migration email to existing users

### Data Migration (Optional)
If you have existing user data in Firebase:
1. Export users from Firebase
2. Transform data to match Supabase schema
3. Import using Supabase SQL or API

---

## Security Notes

✅ **Row Level Security (RLS)** enabled on all tables
✅ **Users can only access their own data**
✅ **Email verification** required for email/password auth
✅ **OAuth providers** verified through Google
✅ **Auto-refresh tokens** enabled
✅ **Session persistence** in localStorage

---

## Troubleshooting

### "Email not confirmed"
- Check spam folder for verification email
- Resend verification from Supabase dashboard

### Google OAuth not working
- Verify redirect URI matches exactly
- Check Google Cloud Console for errors
- Ensure Google+ API is enabled

### User profile not created
- Check `handle_new_user()` trigger is active
- Verify RLS policies allow insertion
- Check Supabase logs for errors

---

## Next Steps After Setup

1. ✅ Run SQL to create `users` table
2. ✅ Update notes table RLS policies
3. ✅ Configure Google OAuth in Supabase
4. ✅ Enable Email provider
5. ✅ Install npm package: `@supabase/auth-helpers-nextjs`
6. ✅ Update app to use `SupabaseAuthProvider`
7. ✅ Test authentication flows
8. ✅ Deploy to Vercel

