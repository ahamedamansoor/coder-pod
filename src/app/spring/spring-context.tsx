
'use client';

import React, { createContext, useState, useContext, useCallback, ReactNode, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, setDoc, getDoc } from 'firebase/firestore';

interface SpringContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const SpringContext = createContext<SpringContextType | undefined>(undefined);

export const SpringProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemo(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);
  
  const { data: userData, isLoading: isUserDocLoading } = useDoc(userDocRef);

  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userData?.completedTopics?.spring) {
      setCompletedTopics(new Set(userData.completedTopics.spring));
    } else {
      setCompletedTopics(new Set<string>());
    }
  }, [userData]);

  const handleToggleComplete = useCallback(async (topicSlug: string) => {
    if (!userDocRef) return;

    const newCompleted = new Set(completedTopics);
    const isCompleted = newCompleted.has(topicSlug);

    if (isCompleted) {
      newCompleted.delete(topicSlug);
    } else {
      newCompleted.add(topicSlug);
    }

    setCompletedTopics(newCompleted); // Optimistic update

    try {
        const fieldName = 'completedTopics.spring';
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            await updateDoc(userDocRef, {
                [fieldName]: Array.from(newCompleted),
            });
        } else {
             await setDoc(userDocRef, { completedTopics: { spring: Array.from(newCompleted) } }, { merge: true });
        }
    } catch (error) {
      console.error("Error updating completed topics: ", error);
      // Revert optimistic update on error
      setCompletedTopics(prev => {
          const reverted = new Set(prev);
          if (newCompleted.has(topicSlug)) { // If we added it, remove it
              reverted.delete(topicSlug);
          } else { // If we removed it, add it back
              reverted.add(topicSlug);
          }
          return reverted;
      });
    }
  }, [userDocRef, completedTopics]);
  
  const isProgressLoading = isUserLoading || isUserDocLoading;

  return (
    <SpringContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </SpringContext.Provider>
  );
};

export const useSpring = () => {
  const context = useContext(SpringContext);
  if (context === undefined) {
    throw new Error('useSpring must be used within a SpringProvider');
  }
  return context;
};
