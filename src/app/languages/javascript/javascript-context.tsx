
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface JavascriptContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const JavascriptContext = createContext<JavascriptContextType | undefined>(undefined);

export const JavascriptProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  // Load completed topics from userProfile
  useEffect(() => {
    if (userProfile?.completedTopics?.javascript) {
      setCompletedTopics(new Set(userProfile.completedTopics.javascript));
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

      // Save to Supabase
      const completedArray = Array.from(newCompleted);
      supabase
        .from('users')
        .update({ 
          completed_topics: { 
            ...userProfile?.completedTopics,
            javascript: completedArray 
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
    <JavascriptContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </JavascriptContext.Provider>
  );
};

export const useJavascript = () => {
  const context = useContext(JavascriptContext);
  if (context === undefined) {
    throw new Error('useJavascript must be used within a JavascriptProvider');
  }
  return context;
};
