'use client';

import { useEffect, useRef } from 'react';
import { useUser, useAuth } from '@/firebase';
import { signInAnonymously } from 'firebase/auth';

/**
 * AutoGuestAuth Component
 * Automatically signs in users as guests if they access the app without authentication
 */
export function AutoGuestAuth() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const hasAttemptedSignIn = useRef(false);

  useEffect(() => {
    // Only attempt to sign in once
    if (hasAttemptedSignIn.current) return;
    
    // Wait for auth to be ready
    if (!auth) return;
    
    // Wait for user loading to complete
    if (isUserLoading) return;
    
    // If no user is signed in, automatically sign in as guest
    if (!user) {
      hasAttemptedSignIn.current = true;
      
      signInAnonymously(auth)
        .then(() => {
          console.log('✅ Automatically signed in as guest user');
        })
        .catch((error) => {
          console.error('❌ Failed to sign in as guest:', error);
          // Don't retry to avoid infinite loops
        });
    }
  }, [user, isUserLoading, auth]);

  // This component doesn't render anything
  return null;
}
