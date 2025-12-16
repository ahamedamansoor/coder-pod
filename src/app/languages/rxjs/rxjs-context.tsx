'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface RxjsContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const RxjsContext = createContext<RxjsContextType | undefined>(undefined);

export const RxjsProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userProfile?.completedTopics?.rxjs) {
      setCompletedTopics(new Set(userProfile.completedTopics.rxjs));
    }
  }, [userProfile]);

  const handleToggleComplete = React.useCallback(
    (topicSlug: string) => {
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
              rxjs: completedArray 
            } 
          })
          .eq('id', user.uid)
          .then(({ error }) => {
            if (error) console.error('Error saving progress:', error);
          });

        return newCompleted;
      });
    },
    [user, userProfile],
  );

  const isProgressLoading = isUserLoading;

  return (
    <RxjsContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </RxjsContext.Provider>
  );
};

export const useRxjs = () => {
  const context = useContext(RxjsContext);
  if (context === undefined) {
    throw new Error('useRxjs must be used within a RxjsProvider');
  }
  return context;
};
