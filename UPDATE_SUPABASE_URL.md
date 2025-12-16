# Update Supabase URL - IMPORTANT

## ⚠️ Action Required

Your Supabase URL has changed. You need to update your environment variables.

### Old URL (Previous)
```
https://abgopwlbdmwfwhotnoue.supabase.co
```

### New URL (Current)
```
https://mygotqetkhezcwfycmzs.supabase.co
```

---

## 📝 Update Steps

### 1. Update `.env.local` file

Open `/Users/mansa/Desktop/coder-pod/.env.local` and update:

```bash
# OLD
NEXT_PUBLIC_SUPABASE_URL=https://abgopwlbdmwfwhotnoue.supabase.co

# NEW - Update to this
NEXT_PUBLIC_SUPABASE_URL=https://mygotqetkhezcwfycmzs.supabase.co

# Keep your anon key the same (or update if it changed too)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. Restart Dev Server

After updating `.env.local`:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

---

## 🔍 What This Affects

The Supabase URL is used throughout the app for:
- ✅ Authentication (login/signup/logout)
- ✅ User profiles
- ✅ Progress tracking (completed topics)
- ✅ Notes storage
- ✅ All database operations

**All these features will point to your new Supabase project after the update.**

---

## ⚠️ Important Notes

1. **Database Setup Required**: Your new Supabase project needs:
   - `users` table with RLS policies
   - `notes` table with RLS policies
   - Triggers for user profile creation
   
   Run the SQL scripts from `SUPABASE_AUTH_SETUP.md`

2. **Data Migration**: Any data in the old project won't automatically transfer. You'd need to manually migrate if needed.

3. **Google OAuth**: If using Google login, update the redirect URLs in Google Cloud Console to use the new Supabase URL.

---

## ✅ Verification

After updating and restarting:

1. Login should work
2. User profile should load
3. Progress tracking should save
4. Notes should save/load

If you get errors, check the browser console for which table is missing and run the setup SQL.
