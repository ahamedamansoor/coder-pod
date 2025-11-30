
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface PlaywrightContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => Promise<void>;
  isProgressLoading: boolean;
}

const PlaywrightContext = createContext<PlaywrightContextType | undefined>(undefined);

export const PlaywrightProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData, isLoading: isUserDataLoading } = useDoc(userDocRef);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userData && userData.completedPlaywrightTopics) {
      setCompletedTopics(new Set(userData.completedPlaywrightTopics));
    }
  }, [userData]);

  const handleToggleComplete = async (topicSlug: string) => {
    if (!user || !userDocRef) return;

    const newCompletedTopics = new Set(completedTopics);
    if (completedTopics.has(topicSlug)) {
      newCompletedTopics.delete(topicSlug);
    } else {
      newCompletedTopics.add(topicSlug);
    }

    setCompletedTopics(newCompletedTopics);

    try {
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        await updateDoc(userDocRef, {
          completedPlaywrightTopics: Array.from(newCompletedTopics),
        });
      } else {
        await setDoc(userDocRef, {
          completedPlaywrightTopics: Array.from(newCompletedTopics),
        });
      }
    } catch (error) {
      console.error('Error updating completed topics:', error);
      setCompletedTopics(completedTopics);
    }
  };

  const isProgressLoading = isUserLoading || isUserDataLoading;

  return (
    <PlaywrightContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </PlaywrightContext.Provider>
  );
};

export const usePlaywright = () => {
  const context = useContext(PlaywrightContext);
  if (context === undefined) {
    throw new Error('usePlaywright must be used within a PlaywrightProvider');
  }
  return context;
};
