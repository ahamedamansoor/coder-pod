-- Fix RLS policy for notes table to allow authenticated users to insert notes

-- First, check if the notes table exists and has RLS enabled
-- This script assumes the table exists and RLS is enabled

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can insert own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can update own notes" ON public.notes;
DROP POLICY IF EXISTS "Users can delete own notes" ON public.notes;

-- Create RLS policies for notes table

-- 1. SELECT policy - Users can view their own notes
CREATE POLICY "Users can view own notes" ON public.notes
    FOR SELECT USING (auth.uid()::text = user_id);

-- 2. INSERT policy - Users can insert their own notes
CREATE POLICY "Users can insert own notes" ON public.notes
    FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- 3. UPDATE policy - Users can update their own notes
CREATE POLICY "Users can update own notes" ON public.notes
    FOR UPDATE USING (auth.uid()::text = user_id);

-- 4. DELETE policy - Users can delete their own notes
CREATE POLICY "Users can delete own notes" ON public.notes
    FOR DELETE USING (auth.uid()::text = user_id);

-- Enable RLS on the notes table if not already enabled
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Verify policies were created
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
