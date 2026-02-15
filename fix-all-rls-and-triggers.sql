-- Consolidated SQL Fix for Coder Pod
-- This script fixes RLS policies, table constraints, and adds automated triggers

-- ==========================================
-- 1. FIX USERS TABLE
-- ==========================================

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;
DROP POLICY IF EXISTS "Users can delete own profile" ON public.users;

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create robust policies (casting to text handles UUID/TEXT mismatches)
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can insert own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Users can delete own profile" ON public.users
    FOR DELETE USING (auth.uid()::text = id::text);

-- ==========================================
-- 2. FIX NOTES TABLE
-- ==========================================

-- Ensure the type constraint is correct
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
    -- Find existing check constraint on 'type' column
    SELECT conname INTO constraint_name
    FROM pg_constraint
    WHERE conrelid = 'public.notes'::regclass
      AND confkey IS NULL
      AND array_to_string(conkey, ',') = (
          SELECT attnum::text
          FROM pg_attribute
          WHERE attrelid = 'public.notes'::regclass
            AND attname = 'type'
      );

    IF constraint_name IS NOT NULL THEN
        EXECUTE 'ALTER TABLE public.notes DROP CONSTRAINT ' || constraint_name;
    END IF;
END $$;

-- Add updated check constraint for all supported note types
ALTER TABLE public.notes ADD CONSTRAINT notes_type_check 
    CHECK (type IN ('article', 'video', 'link', 'doc', 'blog', 'documentation'));

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can insert own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can update own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can delete own notes" ON public.notes;
DROP POLICY IF EXISTS "Individuals can create notes" ON public.notes;
DROP POLICY IF EXISTS "Individuals can view their own notes" ON public.notes;
DROP POLICY IF EXISTS "Individuals can update their own notes" ON public.notes;
DROP POLICY IF EXISTS "Individuals can delete their own notes" ON public.notes;

-- Enable RLS
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Create robust policies
CREATE POLICY "Users can view own notes" ON public.notes
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert own notes" ON public.notes
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update own notes" ON public.notes
    FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete own notes" ON public.notes
    FOR DELETE USING (auth.uid()::text = user_id::text);

-- ==========================================
-- 3. AUTOMATE PROFILE CREATION (TRIGGER)
-- ==========================================

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, name, photo_url, created_at, updated_at)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.raw_user_meta_data->>'full_name'),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'),
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET 
    email = EXCLUDED.email,
    name = COALESCE(EXCLUDED.name, public.users.name),
    photo_url = COALESCE(EXCLUDED.photo_url, public.users.photo_url),
    updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger on new auth user
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ==========================================
-- 4. VERIFY POLICIES
-- ==========================================
SELECT schemaname, tablename, policyname, cmd, qual, with_check
FROM pg_policies
WHERE tablename IN ('users', 'notes');
