
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
    if (userData && userData.completedSpringTopics) { // Use a different field for Spring
      setCompletedTopics(new Set(userData.completedSpringTopics));
    } else {
      setCompletedTopics(new Set<string>());
    }
  }, [userData]);

  const handleToggleComplete = useCallback(async (topicSlug: string) => {
    if (!userDocRef) return;

    const newCompleted = new Set(completedTopics);
    let updatedTopics;

    if (newCompleted.has(topicSlug)) {
      newCompleted.delete(topicSlug);
      updatedTopics = arrayRemove(topicSlug);
    } else {
      newCompleted.add(topicSlug);
      updatedTopics = arrayUnion(topicSlug);
    }

    setCompletedTopics(newCompleted); // Optimistic update

    try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            await updateDoc(userDocRef, {
                completedSpringTopics: updatedTopics, // Use a different field for Spring
            });
        } else {
             await setDoc(userDocRef, { completedSpringTopics: Array.from(newCompleted) }, { merge: true });
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
