
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface SpringContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const SpringContext = createContext<SpringContextType | undefined>(undefined);

export const SpringProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userProfile?.completedTopics?.spring) {
      setCompletedTopics(new Set(userProfile.completedTopics.spring));
    }
  }, [userProfile]);

  const handleToggleComplete = React.useCallback(async (topicSlug: string) => {
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
            spring: completedArray 
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
    <SpringContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </SpringContext.Provider>
  );
};

export const useSpring = () => {
  const context = useContext(SpringContext);
  if (context === undefined) {
    throw new Error('useSpring must be used within a SpringProvider');
  }
  return context;
};
