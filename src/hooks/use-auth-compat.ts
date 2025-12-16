'use client';

/**
 * Compatibility hooks for migrating from Firebase to Supabase
 * These maintain the same API so we don't have to update all components at once
 */

import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';

/**
 * Compatible useUser hook (replaces Firebase useUser)
 */
export function useUser() {
  const { user, isLoading, error } = useSupabaseAuth();
  
  return {
    user: user ? {
      uid: user.id,
      email: user.email,
      displayName: user.user_metadata?.name || user.user_metadata?.full_name || null,
      photoURL: user.user_metadata?.avatar_url || user.user_metadata?.picture || null,
      emailVerified: !!user.email_confirmed_at,
      isAnonymous: false, // Supabase doesn't have anonymous auth by default
    } : null,
    isUserLoading: isLoading,
    userError: error,
  };
}

/**
 * Compatible useAuth hook (replaces Firebase useAuth)
 */
export function useAuth() {
  const { signOut } = useSupabaseAuth();
  
  return {
    signOut,
    currentUser: null, // Will be populated by useUser
  };
}

/**
 * Compatible useFirestore hook (no longer needed but kept for compatibility)
 */
export function useFirestore() {
  // Firestore is no longer used - all data in Supabase
  return null;
}
