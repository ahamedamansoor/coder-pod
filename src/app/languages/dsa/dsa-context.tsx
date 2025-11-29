'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface DsaContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const DsaContext = createContext<DsaContextType | undefined>(undefined);

export const DsaProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData, isLoading: isUserDocLoading } = useDoc(userDocRef);

  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  useEffect(() => {
    if (userData?.completedTopics?.dsa) {
      setCompletedTopics(new Set(userData.completedTopics.dsa));
    } else {
      setCompletedTopics(new Set<string>());
    }
  }, [userData]);

  const handleToggleComplete = React.useCallback(async (topicSlug: string) => {
    if (!userDocRef) return;

    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicSlug)) {
      newCompleted.delete(topicSlug);
    } else {
      newCompleted.add(topicSlug);
    }

    setCompletedTopics(newCompleted);

    try {
      const fieldName = 'completedTopics.dsa';
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        await updateDoc(userDocRef, { [fieldName]: Array.from(newCompleted) });
      } else {
        await setDoc(
          userDocRef,
          { completedTopics: { dsa: Array.from(newCompleted) } },
          { merge: true },
        );
      }
    } catch (error) {
      console.error('Error updating DSA topics: ', error);
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
  }, [completedTopics, userDocRef]);

  const isProgressLoading = isUserLoading || isUserDocLoading;

  return (
    <DsaContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </DsaContext.Provider>
  );
};

export const useDsa = () => {
  const context = useContext(DsaContext);
  if (context === undefined) {
    throw new Error('useDsa must be used within a DsaProvider');
  }
  return context;
};
