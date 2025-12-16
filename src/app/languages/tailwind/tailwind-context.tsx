
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface TailwindContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const TailwindContext = createContext<TailwindContextType | undefined>(undefined);

export const TailwindProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userProfile?.completedTopics?.tailwind) {
      setCompletedTopics(new Set(userProfile.completedTopics.tailwind));
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
            tailwind: completedArray 
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
    <TailwindContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </TailwindContext.Provider>
  );
};

export const useTailwind = () => {
  const context = useContext(TailwindContext);
  if (context === undefined) {
    throw new Error('useTailwind must be used within a TailwindProvider');
  }
  return context;
};
