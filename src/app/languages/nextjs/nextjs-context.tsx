'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface NextjsContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const NextjsContext = createContext<NextjsContextType | undefined>(undefined);

export function NextjsProvider({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userProfile?.completedTopics?.nextjs) {
      setCompletedTopics(new Set(userProfile.completedTopics.nextjs));
    }
  }, [userProfile]);

  const handleToggleComplete = useCallback((topicSlug: string) => {
    if (!user) return;

    setCompletedTopics(prev => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(topicSlug)) {
        newCompleted.delete(topicSlug);
      } else {
        newCompleted.add(topicSlug);
      }

      const completedArray = Array.from(newCompleted);
      supabase
        .from('users')
        .update({ 
          completed_topics: { 
            ...userProfile?.completedTopics,
            nextjs: completedArray 
          } 
        })
        .eq('id', user.uid)
        .then(({ error }) => {
          if (error) console.error('Error saving progress:', error);
        });

      return newCompleted;
    });
  }, [user, userProfile]);

  return (
    <NextjsContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading: isUserLoading,
      }}
    >
      {children}
    </NextjsContext.Provider>
  );
}

export function useNextjsContext() {
  const context = useContext(NextjsContext);
  if (context === undefined) {
    throw new Error('useNextjsContext must be used within a NextjsProvider');
  }
  return context;
}
