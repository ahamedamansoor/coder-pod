'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { useUser } from '@/hooks/use-auth-compat';

interface FrontendSystemDesignContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => Promise<void>;
  isProgressLoading: boolean;
}

const FrontendSystemDesignContext = createContext<FrontendSystemDesignContextType | undefined>(undefined);

export function FrontendSystemDesignProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [isProgressLoading, setIsProgressLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadProgress();
    } else {
      setCompletedTopics(new Set());
      setIsProgressLoading(false);
    }
  }, [user]);

  const loadProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('completed_topics')
        .eq('user_id', user?.uid)
        .eq('language', 'frontend-system-design')
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading progress:', error);
      }

      if (data?.completed_topics) {
        setCompletedTopics(new Set(data.completed_topics));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setIsProgressLoading(false);
    }
  };

  const handleToggleComplete = async (topicSlug: string) => {
    if (!user) return;

    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicSlug)) {
      newCompleted.delete(topicSlug);
    } else {
      newCompleted.add(topicSlug);
    }

    setCompletedTopics(newCompleted);

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.uid,
          language: 'frontend-system-design',
          completed_topics: Array.from(newCompleted),
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error('Error saving progress:', error);
        // Revert on error
        setCompletedTopics(completedTopics);
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      // Revert on error
      setCompletedTopics(completedTopics);
    }
  };

  return (
    <FrontendSystemDesignContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </FrontendSystemDesignContext.Provider>
  );
}

export function useFrontendSystemDesign() {
  const context = useContext(FrontendSystemDesignContext);
  if (!context) {
    throw new Error('useFrontendSystemDesign must be used within FrontendSystemDesignProvider');
  }
  return context;
}
