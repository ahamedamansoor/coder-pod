-- Fix RLS policy for users table to allow authenticated users to insert profiles

-- First, check the actual column types in the users table
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'users' AND table_schema = 'public';

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;
DROP POLICY IF EXISTS "Users can delete own profile" ON public.users;

-- Create RLS policies for users table
-- Try both approaches - one for text id, one for uuid id

-- If id is TEXT type:
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can insert own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Users can delete own profile" ON public.users
    FOR DELETE USING (auth.uid()::text = id::text);

-- Alternative: If id is UUID type, use this instead:
-- CREATE POLICY "Users can view own profile" ON public.users
--     FOR SELECT USING (auth.uid() = id);

-- CREATE POLICY "Users can insert own profile" ON public.users
--     FOR INSERT WITH CHECK (auth.uid() = id);

-- CREATE POLICY "Users can update own profile" ON public.users
--     FOR UPDATE USING (auth.uid() = id);

-- CREATE POLICY "Users can delete own profile" ON public.users
--     FOR DELETE USING (auth.uid() = id);

-- Enable RLS on the users table if not already enabled
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

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
WHERE tablename = 'users';
