'use client';

import React, { createContext, useState, useContext, useCallback, ReactNode, useEffect } from 'react';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, setDoc, getDoc } from 'firebase/firestore';

interface JavaContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const JavaContext = createContext<JavaContextType | undefined>(undefined);

export const JavaProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = user ? doc(firestore, 'users', user.uid) : null;
  const { data: userData, isLoading: isUserDocLoading } = useDoc(userDocRef);

  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userData && userData.completedTopics) {
      setCompletedTopics(new Set(userData.completedTopics));
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
                completedTopics: updatedTopics,
            });
        } else {
             await setDoc(userDocRef, { completedTopics: Array.from(newCompleted) }, { merge: true });
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
    <JavaContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </JavaContext.Provider>
  );
};

export const useJava = () => {
  const context = useContext(JavaContext);
  if (context === undefined) {
    throw new Error('useJava must be used within a JavaProvider');
  }
  return context;
};
