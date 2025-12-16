'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface DsaContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const DsaContext = createContext<DsaContextType | undefined>(undefined);

export const DsaProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userProfile?.completedTopics?.dsa) {
      setCompletedTopics(new Set(userProfile.completedTopics.dsa));
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
            dsa: completedArray 
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
    <DsaContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </DsaContext.Provider>
  );
};

export const useDsa = () => {
  const context = useContext(DsaContext);
  if (context === undefined) {
    throw new Error('useDsa must be used within a DsaProvider');
  }
  return context;
};
