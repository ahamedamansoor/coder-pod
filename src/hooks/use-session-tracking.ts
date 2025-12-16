/**
 * Session tracking hook
 * Tracks user session time and updates Firestore
 */

import { useEffect, useRef } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { doc, updateDoc, increment, getFirestore } from 'firebase/firestore';

export function useSessionTracking() {
  const { user } = useUser();
  const sessionStartTime = useRef<number>(Date.now());
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!user) return;

    // Reset session start time
    sessionStartTime.current = Date.now();

    // Update session time every 5 minutes
    updateIntervalRef.current = setInterval(() => {
      const sessionDuration = Math.floor((Date.now() - sessionStartTime.current) / 1000 / 60); // in minutes
      
      if (sessionDuration > 0) {
        const firestore = getFirestore();
        const userDocRef = doc(firestore, 'users', user.uid);
        
        updateDoc(userDocRef, {
          totalSessionTime: increment(sessionDuration),
          lastActivityAt: new Date().toISOString(),
        }).catch(error => {
          console.error('Error updating session time:', error);
        });

        // Reset session start time
        sessionStartTime.current = Date.now();
      }
    }, 5 * 60 * 1000); // Every 5 minutes

    // Cleanup on unmount
    return () => {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current);
      }

      // Save final session time
      const sessionDuration = Math.floor((Date.now() - sessionStartTime.current) / 1000 / 60);
      if (sessionDuration > 0 && user) {
        const firestore = getFirestore();
        const userDocRef = doc(firestore, 'users', user.uid);
        
        updateDoc(userDocRef, {
          totalSessionTime: increment(sessionDuration),
          lastActivityAt: new Date().toISOString(),
        }).catch(error => {
          console.error('Error saving final session time:', error);
        });
      }
    };
  }, [user]);
}
