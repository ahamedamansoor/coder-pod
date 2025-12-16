'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface VueContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const VueContext = createContext<VueContextType | undefined>(undefined);

export function VueProvider({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userProfile?.completedTopics?.vue) {
      setCompletedTopics(new Set(userProfile.completedTopics.vue));
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
            vue: completedArray 
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
    <VueContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading: isUserLoading,
      }}
    >
      {children}
    </VueContext.Provider>
  );
}

export function useVueContext() {
  const context = useContext(VueContext);
  if (context === undefined) {
    throw new Error('useVueContext must be used within a VueProvider');
  }
  return context;
}
