# Fix Email Display Issue

## Problem
Your Supabase `users` table has the wrong email stored (`coderpod.org@gmail.com` instead of your actual email).

## Quick Fix - Update Email in Database

### Option 1: SQL Update (Recommended)

Run this SQL in your Supabase SQL Editor:

```sql
-- First, check your current user ID and email from auth
SELECT 
  id,
  email,
  raw_user_meta_data
FROM auth.users
WHERE email LIKE '%YOUR_ACTUAL_EMAIL%';

-- Then update the users table with the correct email
UPDATE public.users
SET 
  email = auth.users.email,
  updated_at = NOW()
FROM auth.users
WHERE public.users.id = auth.users.id
  AND auth.users.email = 'YOUR_ACTUAL_EMAIL@gmail.com';
```

**Replace `YOUR_ACTUAL_EMAIL@gmail.com` with your real email address.**

---

### Option 2: Update All Users at Once

If you want to sync ALL user emails from auth to the users table:

```sql
-- Sync all emails from auth.users to public.users
UPDATE public.users
SET 
  email = auth.users.email,
  updated_at = NOW()
FROM auth.users
WHERE public.users.id = auth.users.id;
```

---

## Verify the Fix

After running the SQL:

1. **Refresh your browser** (hard refresh: Cmd+Shift+R / Ctrl+Shift+F5)
2. **Log out and log back in**
3. Check if your email displays correctly

---

## Root Cause

The issue happened because:
- The `users` table email doesn't match your auth email
- This could happen if the database trigger didn't run properly during signup
- Or if test data was manually inserted

---

## Permanent Fix - Ensure Trigger Syncs Email

Make sure your Supabase database has this trigger:

```sql
-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, created_at, updated_at)
  VALUES (
    NEW.id, 
    NEW.email,  -- This ensures auth email is synced
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET 
    email = EXCLUDED.email,  -- Update email if user already exists
    updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger on new auth user
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

This ensures:
- New signups automatically sync the correct email
- Email updates in auth are reflected in the users table

---

## Debug: Check What's Stored

To see what's currently in your database:

```sql
-- Check auth.users table
SELECT id, email, created_at 
FROM auth.users 
ORDER BY created_at DESC 
LIMIT 5;

-- Check public.users table
SELECT id, email, name, created_at 
FROM public.users 
ORDER BY created_at DESC 
LIMIT 5;
```

Compare the emails in both tables to see the mismatch.

---

## After the Fix

Once you update the email:
1. ✅ Header will show your correct name/email
2. ✅ Profile data will be accurate
3. ✅ Progress tracking will work correctly
4. ✅ All features will be linked to your real email
