
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface TailwindContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => Promise<void>;
  isProgressLoading: boolean;
}

const TailwindContext = createContext<TailwindContextType | undefined>(undefined);

export const TailwindProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData, isLoading: isUserDataLoading } = useDoc(userDocRef);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (userData?.completedTopics?.tailwind) {
      setCompletedTopics(new Set(userData.completedTopics.tailwind));
    } else {
      setCompletedTopics(new Set<string>());
    }
  }, [userData]);

  // Migration: Move old completedTailwindTopics to new nested structure
  useEffect(() => {
    const migrateOldData = async () => {
      if (!userDocRef || !userData) return;
      
      // Check if old field exists and new field doesn't
      if (userData.completedTailwindTopics && !userData.completedTopics?.tailwind) {
        try {
          console.log('Migrating Tailwind completion data to new structure...');
          await updateDoc(userDocRef, {
            'completedTopics.tailwind': userData.completedTailwindTopics
          });
          console.log('Migration complete!');
        } catch (error) {
          console.error('Error migrating Tailwind completion data:', error);
        }
      }
    };
    
    migrateOldData();
  }, [userDocRef, userData]);

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
      const fieldName = 'completedTopics.tailwind';
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        await updateDoc(userDocRef, {
          [fieldName]: Array.from(newCompleted),
        });
      } else {
        await setDoc(userDocRef, { completedTopics: { tailwind: Array.from(newCompleted) } }, { merge: true });
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

  const isProgressLoading = isUserLoading || isUserDataLoading;

  return (
    <TailwindContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </TailwindContext.Provider>
  );
};

export const useTailwind = () => {
  const context = useContext(TailwindContext);
  if (context === undefined) {
    throw new Error('useTailwind must be used within a TailwindProvider');
  }
  return context;
};
