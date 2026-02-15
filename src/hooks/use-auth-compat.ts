'use client';

/**
 * Auth compatibility hooks wrapping Supabase auth
 */

import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';

/**
 * useUser hook - provides user data from Supabase auth
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
      isAnonymous: false,
    } : null,
    isUserLoading: isLoading,
    userError: error,
  };
}

/**
 * useAuth hook - provides auth actions
 */
export function useAuth() {
  const { signOut } = useSupabaseAuth();
  
  return {
    signOut,
    currentUser: null, // Will be populated by useUser
  };
}
