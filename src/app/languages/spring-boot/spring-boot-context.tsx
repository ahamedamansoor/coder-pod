'use client';

import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

export type SpringBootContextType = {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
};

const SpringBootContext = createContext<SpringBootContextType | undefined>(undefined);

export const SpringBootProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoading: isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(
    () => (user && firestore ? doc(firestore, 'users', user.uid) : null),
    [user, firestore]
  );

  const { data: userData, loading: isDocLoading } = useDoc(userDocRef);

  const completedTopics = useMemo(() => {
    const topics = userData?.['completedTopics']?.['spring-boot'] as string[];
    return new Set(topics || []);
  }, [userData]);

  const handleToggleComplete = async (topicSlug: string) => {
    if (!userDocRef) return;

    try {
      const newCompleted = new Set(completedTopics);
      if (newCompleted.has(topicSlug)) {
        newCompleted.delete(topicSlug);
      } else {
        newCompleted.add(topicSlug);
      }

      const { updateDoc } = await import('firebase/firestore');
      await updateDoc(userDocRef, {
        [`completedTopics.spring-boot`]: Array.from(newCompleted),
      });
    } catch (error) {
      console.error('Error updating completed topics:', error);
    }
  };

  const isProgressLoading = isUserLoading || isDocLoading;

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
