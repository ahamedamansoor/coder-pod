'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface RxjsContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const RxjsContext = createContext<RxjsContextType | undefined>(undefined);

export const RxjsProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData, isLoading: isUserDocLoading } = useDoc(userDocRef);

  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userData?.completedTopics?.rxjs) {
      setCompletedTopics(new Set(userData.completedTopics.rxjs));
    } else {
      setCompletedTopics(new Set<string>());
    }
  }, [userData]);

  const handleToggleComplete = React.useCallback(
    async (topicSlug: string) => {
      if (!userDocRef) return;

      const newCompleted = new Set(completedTopics);
      if (newCompleted.has(topicSlug)) {
        newCompleted.delete(topicSlug);
      } else {
        newCompleted.add(topicSlug);
      }

      setCompletedTopics(newCompleted);

      try {
        const fieldName = 'completedTopics.rxjs';
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          await updateDoc(userDocRef, { [fieldName]: Array.from(newCompleted) });
        } else {
          await setDoc(
            userDocRef,
            { completedTopics: { rxjs: Array.from(newCompleted) } },
            { merge: true },
          );
        }
      } catch (error) {
        console.error('Error updating RxJS topics: ', error);
        setCompletedTopics((prev) => {
          const reverted = new Set(prev);
          if (newCompleted.has(topicSlug)) {
            reverted.delete(topicSlug);
          } else {
            reverted.add(topicSlug);
          }
          return reverted;
        });
      }
    },
    [completedTopics, userDocRef],
  );

  const isProgressLoading = isUserLoading || isUserDocLoading;

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
