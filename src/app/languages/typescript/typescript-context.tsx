
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface TypeScriptContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => Promise<void>;
  isProgressLoading: boolean;
}

const TypeScriptContext = createContext<TypeScriptContextType | undefined>(undefined);

export const TypeScriptProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData, isLoading: isUserDataLoading } = useDoc(userDocRef);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userData && userData.completedTypeScriptTopics) {
      setCompletedTopics(new Set(userData.completedTypeScriptTopics));
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
          completedTypeScriptTopics: Array.from(newCompletedTopics),
        });
      } else {
        await setDoc(userDocRef, {
          completedTypeScriptTopics: Array.from(newCompletedTopics),
        });
      }
    } catch (error) {
      console.error('Error updating completed topics:', error);
      setCompletedTopics(completedTopics);
    }
  };

  const isProgressLoading = isUserLoading || isUserDataLoading;

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
