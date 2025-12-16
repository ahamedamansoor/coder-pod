
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface AngularContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const AngularContext = createContext<AngularContextType | undefined>(undefined);

export const AngularProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userProfile?.completedTopics?.angular) {
      setCompletedTopics(new Set(userProfile.completedTopics.angular));
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
            angular: completedArray 
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
    <AngularContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </AngularContext.Provider>
  );
};

export const useAngular = () => {
  const context = useContext(AngularContext);
  if (context === undefined) {
    throw new Error('useAngular must be used within an AngularProvider');
  }
  return context;
};
