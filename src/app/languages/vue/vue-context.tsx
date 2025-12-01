'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useUser, useFirestore } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface VueContextType {
  completedTopics: string[];
  markTopicAsComplete: (topicSlug: string) => Promise<void>;
  markTopicAsIncomplete: (topicSlug: string) => Promise<void>;
  isLoading: boolean;
}

const VueContext = createContext<VueContextType | undefined>(undefined);

export function VueProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch completed topics from Firestore
  useEffect(() => {
    const fetchCompletedTopics = async () => {
      if (!user || user.isAnonymous || !firestore) {
        setCompletedTopics([]);
        setIsLoading(false);
        return;
      }

      try {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setCompletedTopics(data.completedVueTopics || []);
        } else {
          // Create user document if it doesn't exist
          await setDoc(userDocRef, {
            completedVueTopics: [],
            email: user.email,
            createdAt: new Date().toISOString(),
          });
          setCompletedTopics([]);
        }
      } catch (error) {
        console.error('Error fetching completed topics:', error);
        setCompletedTopics([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompletedTopics();
  }, [user, firestore]);

  const markTopicAsComplete = useCallback(async (topicSlug: string) => {
    if (!user || user.isAnonymous || !firestore) {
      console.log('User must be logged in to save progress');
      return;
    }

    try {
      const userDocRef = doc(firestore, 'users', user.uid);
      const updatedTopics = [...completedTopics, topicSlug];
      
      await updateDoc(userDocRef, {
        completedVueTopics: updatedTopics,
      });

      setCompletedTopics(updatedTopics);
    } catch (error) {
      console.error('Error marking topic as complete:', error);
    }
  }, [user, firestore, completedTopics]);

  const markTopicAsIncomplete = useCallback(async (topicSlug: string) => {
    if (!user || user.isAnonymous || !firestore) {
      console.log('User must be logged in to save progress');
      return;
    }

    try {
      const userDocRef = doc(firestore, 'users', user.uid);
      const updatedTopics = completedTopics.filter(t => t !== topicSlug);
      
      await updateDoc(userDocRef, {
        completedVueTopics: updatedTopics,
      });

      setCompletedTopics(updatedTopics);
    } catch (error) {
      console.error('Error marking topic as incomplete:', error);
    }
  }, [user, firestore, completedTopics]);

  return (
    <VueContext.Provider
      value={{
        completedTopics,
        markTopicAsComplete,
        markTopicAsIncomplete,
        isLoading,
      }}
    >
      {children}
    </VueContext.Provider>
  );
}

export function useVueContext() {
  const context = useContext(VueContext);
  if (context === undefined) {
    throw new Error('useVueContext must be used within a VueProvider');
  }
  return context;
}
