
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface PlaywrightContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const PlaywrightContext = createContext<PlaywrightContextType | undefined>(undefined);

export const PlaywrightProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userProfile?.completedTopics?.playwright) {
      setCompletedTopics(new Set(userProfile.completedTopics.playwright));
    }
  }, [userProfile]);

  const handleToggleComplete = React.useCallback((topicSlug: string) => {
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
            playwright: completedArray 
          } 
        })
        .eq('id', user.uid)
        .then(({ error }) => {
          if (error) console.error('Error saving progress:', error);
        });

      return newCompleted;
    });
  }, [user, userProfile]);

  const isProgressLoading = isUserLoading;

  return (
    <PlaywrightContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </PlaywrightContext.Provider>
  );
};

export const usePlaywright = () => {
  const context = useContext(PlaywrightContext);
  if (context === undefined) {
    throw new Error('usePlaywright must be used within a PlaywrightProvider');
  }
  return context;
};
