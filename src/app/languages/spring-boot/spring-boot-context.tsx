'use client';

import React, { createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

export type SpringBootContextType = {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
};

const SpringBootContext = createContext<SpringBootContextType | undefined>(undefined);

export const SpringBootProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userProfile?.completedTopics?.['spring-boot']) {
      setCompletedTopics(new Set(userProfile.completedTopics['spring-boot']));
    }
  }, [userProfile]);

  const handleToggleComplete = (topicSlug: string) => {
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
            'spring-boot': completedArray 
          } 
        })
        .eq('id', user.uid)
        .then(({ error }) => {
          if (error) console.error('Error saving progress:', error);
        });

      return newCompleted;
    });
  };

  const isProgressLoading = isUserLoading;

  const value: SpringBootContextType = {
    completedTopics,
    handleToggleComplete,
    isProgressLoading,
  };

  return (
    <SpringBootContext.Provider value={value}>
      {children}
    </SpringBootContext.Provider>
  );
};

export const useSpringBoot = (): SpringBootContextType => {
  const context = useContext(SpringBootContext);
  if (!context) {
    throw new Error('useSpringBoot must be used within a SpringBootProvider');
  }
  return context;
};
