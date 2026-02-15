-- FINAL FIX for Notes RLS and Type Constraints
-- Run this in your Supabase SQL Editor

-- 1. Ensure the type constraint is correct
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

-- 2. Reset and Fix RLS policies
-- Drop ALL existing policies to ensure a clean slate
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
-- We cast both to text to ensure comparison works regardless of whether user_id is UUID or TEXT
CREATE POLICY "Users can view own notes" ON public.notes
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert own notes" ON public.notes
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update own notes" ON public.notes
    FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete own notes" ON public.notes
    FOR DELETE USING (auth.uid()::text = user_id::text);

-- 3. Verify
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'notes';
