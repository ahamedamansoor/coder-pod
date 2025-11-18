
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface ReactContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const ReactContext = createContext<ReactContextType | undefined>(undefined);

export const ReactProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);
  
  const { data: userData, isLoading: isUserDocLoading } = useDoc(userDocRef);

  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userData?.completedTopics?.react) {
      setCompletedTopics(new Set(userData.completedTopics.react));
    } else {
      setCompletedTopics(new Set<string>());
    }
  }, [userData]);

  const handleToggleComplete = React.useCallback(async (topicSlug: string) => {
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
        const fieldName = 'completedTopics.react';
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            await updateDoc(userDocRef, {
                [fieldName]: Array.from(newCompleted),
            });
        } else {
             await setDoc(userDocRef, { completedTopics: { react: Array.from(newCompleted) } }, { merge: true });
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
    <ReactContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </ReactContext.Provider>
  );
};

export const useReact = () => {
  const context = useContext(ReactContext);
  if (context === undefined) {
    throw new Error('useReact must be used within a ReactProvider');
  }
  return context;
};
