-- ============================================================
-- NOTES TABLE — Production-Ready Migration for Coder Pod
-- ============================================================
-- Run this in your Supabase SQL Editor.
--
-- ⚠️  WARNING: This drops the existing notes table!
--     If you have data you want to keep, comment out the DROP
--     and use CREATE TABLE IF NOT EXISTS instead.
-- ============================================================

-- 1. CLEAN SLATE
DROP TABLE IF EXISTS public.notes CASCADE;

-- 2. CREATE TABLE
CREATE TABLE public.notes (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title       TEXT        NOT NULL,
  description TEXT,
  type        TEXT        NOT NULL
                          CHECK (type IN ('article','video','link','doc','blog','documentation')),
  language    TEXT        NOT NULL,
  url         TEXT,
  video_id    TEXT,
  content     TEXT,
  tags        TEXT[]      DEFAULT '{}',
  favorited   BOOLEAN     DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at  TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Add table comment
COMMENT ON TABLE public.notes IS 'User-saved learning resources (videos, blogs, articles, docs, links)';

-- ============================================================
-- 3. INDEXES — optimised for every query pattern in the app
-- ============================================================

-- Primary filter: notes by user + language  (VideoNotesDrawer, getNotesByLanguage)
CREATE INDEX idx_notes_user_language  ON public.notes (user_id, language);

-- Filter by type  (getNotesByType, type dropdown on Notes page)
CREATE INDEX idx_notes_user_type      ON public.notes (user_id, type);

-- Default sort order  (getUserNotes — ORDER BY created_at DESC)
CREATE INDEX idx_notes_user_created   ON public.notes (user_id, created_at DESC);

-- Favorites quick-filter
CREATE INDEX idx_notes_user_favorited ON public.notes (user_id) WHERE favorited = TRUE;

-- Tag search  (supports  tags @> ARRAY['react'])
CREATE INDEX idx_notes_tags           ON public.notes USING GIN (tags);

-- Full-text search on title + content  (replaces slow ILIKE queries)
CREATE INDEX idx_notes_fts            ON public.notes USING GIN (
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(content, ''))
);

-- ============================================================
-- 4. AUTO-UPDATE updated_at TRIGGER
-- ============================================================

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_notes_updated_at ON public.notes;
CREATE TRIGGER trg_notes_updated_at
  BEFORE UPDATE ON public.notes
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- ============================================================
-- 5. ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Drop any stale policies (idempotent)
DROP POLICY IF EXISTS "Users can view own notes"   ON public.notes;
DROP POLICY IF EXISTS "Users can insert own notes"  ON public.notes;
DROP POLICY IF EXISTS "Users can update own notes"  ON public.notes;
DROP POLICY IF EXISTS "Users can delete own notes"  ON public.notes;

CREATE POLICY "Users can view own notes"
  ON public.notes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own notes"
  ON public.notes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own notes"
  ON public.notes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own notes"
  ON public.notes FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================
-- 6. VERIFY
-- ============================================================

SELECT tablename, policyname, cmd, qual, with_check
FROM   pg_policies
WHERE  tablename = 'notes';
