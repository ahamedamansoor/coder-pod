
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';

interface TypeScriptContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const TypeScriptContext = createContext<TypeScriptContextType | undefined>(undefined);

export const TypeScriptProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const { userProfile } = useSupabaseAuth();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userProfile?.completedTopics?.typescript) {
      setCompletedTopics(new Set(userProfile.completedTopics.typescript));
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
            typescript: completedArray 
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
    <TypeScriptContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </TypeScriptContext.Provider>
  );
};

export const useTypeScript = () => {
  const context = useContext(TypeScriptContext);
  if (context === undefined) {
    throw new Error('useTypeScript must be used within a TypeScriptProvider');
  }
  return context;
};
