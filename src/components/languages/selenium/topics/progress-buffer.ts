'use client';

import { supabase } from '@/lib/supabase';

type CompletedTopicMap = Record<string, string[] | undefined>;
type PendingProgress = Record<string, CompletedTopicMap>;

const STORAGE_KEY = 'pending_completed_topics';

function readBuffer(): PendingProgress {
  if (typeof window === 'undefined') return {};
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as PendingProgress;
  } catch (error) {
    console.error('Failed to parse pending progress buffer, resetting.', error);
    localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

function writeBuffer(buffer: PendingProgress) {
  if (typeof window === 'undefined') return;
  if (!buffer || Object.keys(buffer).length === 0) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buffer));
}

function dedupe(items: Iterable<string>): string[] {
  return Array.from(new Set(items));
}

function areArraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const bSet = new Set(b);
  return a.every(item => bSet.has(item));
}

export function mergeCompletedWithBuffer(
  userId: string | null | undefined,
  languageSlug: string,
  remoteCompleted?: string[] | null
): Set<string> {
  const pending = userId ? readBuffer()[userId]?.[languageSlug] ?? [] : [];
  const merged = new Set<string>([...(remoteCompleted ?? []), ...pending]);
  return merged;
}

export function persistBufferedCompletedTopics(
  userId: string | null | undefined,
  languageSlug: string,
  completed: Iterable<string>
) {
  if (!userId || typeof window === 'undefined') return;
  const buffer = readBuffer();
  const perUser = buffer[userId] ?? {};
  perUser[languageSlug] = dedupe(completed);
  buffer[userId] = perUser;
  writeBuffer(buffer);
}

export async function flushBufferedProgress(
  userId: string | null | undefined,
  remoteCompleted?: Record<string, string[] | undefined> | null
) : Promise<boolean> {
  if (!userId) return false;
  const buffer = readBuffer();
  const pending = buffer[userId];
  if (!pending || Object.keys(pending).length === 0) return true;

  let baseCompleted = remoteCompleted;
  if (!baseCompleted || Object.keys(baseCompleted).length === 0) {
    const { data, error } = await supabase
      .from('users')
      .select('completed_topics')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error loading existing completed topics before flush:', error);
      return false;
    }

    if (data?.completed_topics) {
      baseCompleted = data.completed_topics as Record<string, string[] | undefined>;
    }
  }

  const merged: Record<string, string[]> = {};

  Object.entries(baseCompleted || {}).forEach(([languageSlug, topics]) => {
    if (Array.isArray(topics)) {
      merged[languageSlug] = dedupe(topics);
    }
  });

  let hasChanges = false;

  Object.entries(pending).forEach(([languageSlug, topics]) => {
    const mergedSet = new Set<string>([...(merged[languageSlug] ?? []), ...(topics ?? [])]);
    const mergedArray = Array.from(mergedSet);
    if (!areArraysEqual(mergedArray, merged[languageSlug] ?? [])) {
      hasChanges = true;
    }
    merged[languageSlug] = mergedArray;
  });

  // If there are no differences compared to what we already have, just clear the buffer
  if (!hasChanges) {
    delete buffer[userId];
    writeBuffer(buffer);
    return true;
  }

  const { error } = await supabase
    .from('users')
    .update({ completed_topics: merged })
    .eq('id', userId);

  if (error) {
    console.error('Error flushing buffered progress:', error);
    return false;
  }

  delete buffer[userId];
  writeBuffer(buffer);
  return true;
}
