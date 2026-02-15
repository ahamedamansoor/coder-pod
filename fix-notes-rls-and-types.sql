-- Fix RLS policy and type constraints for notes table
-- This script ensures all note types are allowed and RLS is correctly configured

-- 1. Update type constraint if it exists
-- First, we need to find the name of the check constraint on the 'type' column
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
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

-- Add updated check constraint for note types
ALTER TABLE public.notes ADD CONSTRAINT notes_type_check 
    CHECK (type IN ('article', 'video', 'link', 'doc', 'blog', 'documentation'));

-- 2. Fix RLS policies
-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can insert own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can update own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can delete own notes" ON public.notes;

-- Create robust RLS policies that handle both UUID and TEXT types for user_id
-- This uses a permissive approach by checking both casting options

-- SELECT policy
CREATE POLICY "Users can view own notes" ON public.notes
    FOR SELECT USING (auth.uid()::text = user_id::text);

-- INSERT policy
CREATE POLICY "Users can insert own notes" ON public.notes
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- UPDATE policy
CREATE POLICY "Users can update own notes" ON public.notes
    FOR UPDATE USING (auth.uid()::text = user_id::text);

-- DELETE policy
CREATE POLICY "Users can delete own notes" ON public.notes
    FOR DELETE USING (auth.uid()::text = user_id::text);

-- Ensure RLS is enabled
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- 3. Verify changes
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
