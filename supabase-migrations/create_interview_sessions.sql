-- STEP 1: Drop existing table if it exists (in case of partial creation)
DROP TABLE IF EXISTS public.interview_sessions;

-- STEP 2: Create the table
CREATE TABLE public.interview_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_code VARCHAR(8) UNIQUE NOT NULL,
  host_id UUID NOT NULL,
  language VARCHAR(50) NOT NULL DEFAULT 'JavaScript',
  question_type VARCHAR(20) NOT NULL DEFAULT 'coding',
  status VARCHAR(20) NOT NULL DEFAULT 'waiting',
  code TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);

-- STEP 3: Create indexes
CREATE INDEX idx_sessions_room_code ON public.interview_sessions(room_code);
CREATE INDEX idx_sessions_host_id ON public.interview_sessions(host_id);

-- STEP 4: Enable RLS
ALTER TABLE public.interview_sessions ENABLE ROW LEVEL SECURITY;

-- STEP 5: Create permissive policies for authenticated users
CREATE POLICY "Allow all for authenticated users" ON public.interview_sessions
  FOR ALL 
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- STEP 6: Grant permissions
GRANT ALL ON public.interview_sessions TO authenticated;
GRANT SELECT ON public.interview_sessions TO anon;

-- Verify table was created
SELECT 'Table created successfully!' as status;
