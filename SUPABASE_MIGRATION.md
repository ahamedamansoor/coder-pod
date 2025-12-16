# Supabase Migration Guide

## Architecture Overview
- **Authentication**: Firebase (Google SSO only)
- **Database**: Supabase (Notes storage)
- **Deployment**: Vercel

---

## Prerequisites

### 1. Install Supabase Client
```bash
# Fix npm permissions first (if needed)
sudo chown -R 501:20 "/Users/mansa/.npm"

# Install Supabase
npm install @supabase/supabase-js
```

### 2. Create Supabase Project
1. Go to https://supabase.com
2. Sign in and click "New Project"
3. Choose a name (e.g., "coder-pod")
4. Set database password
5. Choose region closest to your users
6. Wait for project to be created (~2 minutes)

### 3. Get Supabase Credentials
Once project is ready:
1. Go to Project Settings → API
2. Copy **Project URL** (e.g., `https://xxxxx.supabase.co`)
3. Copy **anon/public key** (starts with `eyJ...`)

---

## Database Setup

### Step 1: Create Notes Table

Go to Supabase Dashboard → SQL Editor and run:

```sql
-- Create notes table
CREATE TABLE notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('article', 'video', 'link', 'doc')),
  language TEXT NOT NULL,
  url TEXT,
  video_id TEXT,
  content TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on user_id for faster queries
CREATE INDEX idx_notes_user_id ON notes(user_id);

-- Create index on created_at for sorting
CREATE INDEX idx_notes_created_at ON notes(created_at DESC);

-- Enable Row Level Security
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Create policy: Users can only see their own notes
CREATE POLICY "Users can view their own notes"
  ON notes FOR SELECT
  USING (user_id = auth.jwt() ->> 'sub');

-- Create policy: Users can insert their own notes
CREATE POLICY "Users can insert their own notes"
  ON notes FOR INSERT
  WITH CHECK (user_id = auth.jwt() ->> 'sub');

-- Create policy: Users can update their own notes
CREATE POLICY "Users can update their own notes"
  ON notes FOR UPDATE
  USING (user_id = auth.jwt() ->> 'sub');

-- Create policy: Users can delete their own notes
CREATE POLICY "Users can delete their own notes"
  ON notes FOR DELETE
  USING (user_id = auth.jwt() ->> 'sub');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_notes_updated_at
  BEFORE UPDATE ON notes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

## Vercel Environment Variables

### Add to Vercel Dashboard

Go to Vercel Project → Settings → Environment Variables and add:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Firebase (Keep existing)
# These should already be set
```

### Local Development (.env.local)

Create or update `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Firebase (existing)
# Keep your existing Firebase variables
```

---

## Testing

### 1. Test Connection
After setup, test in browser console:
```javascript
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
```

### 2. Test Notes Creation
1. Login with Google
2. Create a new note
3. Check Supabase Dashboard → Table Editor → notes
4. Your note should appear

### 3. Verify RLS (Row Level Security)
Try to query notes from another user - it should fail. Only your own notes should be visible.

---

## Migration from Firebase (Optional)

If you have existing notes in Firebase and want to migrate:

1. Export notes from Firebase Firestore
2. Transform data to match Supabase schema
3. Import using Supabase SQL Editor or API

**Note**: This guide assumes starting fresh. If you need migration scripts, let me know.

---

## Key Benefits

✅ **Free tier**: Supabase offers 500MB database storage free
✅ **PostgreSQL**: Full-featured relational database
✅ **Row Level Security**: Built-in security at database level
✅ **Real-time**: Built-in real-time subscriptions (if needed later)
✅ **Auto-backups**: Daily automatic backups
✅ **Easy scaling**: Simple upgrade path

---

## Troubleshooting

### Error: "row-level security policy"
- Check that you're logged in with Google
- Verify Firebase Auth is providing user ID correctly

### Error: "relation 'notes' does not exist"
- Run the SQL schema creation script again
- Check you're in the correct Supabase project

### Notes not showing
- Open browser console and check for errors
- Verify environment variables are set
- Check Supabase Dashboard → Table Editor to see if notes exist

---

## Support

For issues:
1. Check browser console for errors
2. Check Supabase logs (Dashboard → Logs)
3. Verify environment variables in Vercel
