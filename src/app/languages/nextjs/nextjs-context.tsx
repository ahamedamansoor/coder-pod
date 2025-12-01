'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useUser, useFirestore } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface NextjsContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const NextjsContext = createContext<NextjsContextType | undefined>(undefined);

export function NextjsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());
  const [isLoading, setIsLoading] = useState(true);

  // Fetch completed topics from Firestore
  useEffect(() => {
    const fetchCompletedTopics = async () => {
      if (!user || user.isAnonymous || !firestore) {
        setCompletedTopics(new Set<string>());
        setIsLoading(false);
        return;
      }

      try {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setCompletedTopics(new Set(data.completedNextjsTopics || []));
        } else {
          // Create user document if it doesn't exist
          await setDoc(userDocRef, {
            completedNextjsTopics: [],
            email: user.email,
            createdAt: new Date().toISOString(),
          });
          setCompletedTopics(new Set<string>());
        }
      } catch (error) {
        console.error('Error fetching completed topics:', error);
        setCompletedTopics(new Set<string>());
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompletedTopics();
  }, [user, firestore]);

  const handleToggleComplete = useCallback(async (topicSlug: string) => {
    if (!user || user.isAnonymous || !firestore) {
      console.log('User must be logged in to save progress');
      return;
    }

    const newCompleted = new Set(completedTopics);
    const isCompleted = newCompleted.has(topicSlug);

    if (isCompleted) {
      newCompleted.delete(topicSlug);
    } else {
      newCompleted.add(topicSlug);
    }

    setCompletedTopics(newCompleted); // Optimistic update

    try {
      const userDocRef = doc(firestore, 'users', user.uid);
      await updateDoc(userDocRef, {
        completedNextjsTopics: Array.from(newCompleted),
      });
    } catch (error) {
      console.error('Error updating completed topics:', error);
      // Revert optimistic update on error
      setCompletedTopics(prev => {
        const reverted = new Set(prev);
        if (newCompleted.has(topicSlug)) {
          reverted.delete(topicSlug);
        } else {
          reverted.add(topicSlug);
        }
        return reverted;
      });
    }
  }, [user, firestore, completedTopics]);

  return (
    <NextjsContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading: isLoading,
      }}
    >
      {children}
    </NextjsContext.Provider>
  );
}

export function useNextjsContext() {
  const context = useContext(NextjsContext);
  if (context === undefined) {
    throw new Error('useNextjsContext must be used within a NextjsProvider');
  }
  return context;
}
