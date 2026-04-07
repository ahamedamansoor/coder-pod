'use client';

/**
 * Auth compatibility hooks wrapping EnhancedAuthProvider
 */

import { useEnhancedAuth } from '@/lib/auth/enhanced-auth-context';

/**
 * Compatibility hook to bridge old useSupabaseAuth with new EnhancedAuthProvider
 * This maintains backward compatibility while we migrate to the new auth system
 */
export function useSupabaseAuth() {
  const enhancedAuth = useEnhancedAuth();
  
  // Map the enhanced auth interface to the old interface
  return {
    // User and session
    user: enhancedAuth.user,
    session: enhancedAuth.session,
    userProfile: enhancedAuth.user ? {
      id: enhancedAuth.user.id,
      email: enhancedAuth.user.email,
      name: enhancedAuth.user.name,
      avatar_url: enhancedAuth.user.avatar,
      created_at: enhancedAuth.user.createdAt,
      updated_at: enhancedAuth.user.lastSignInAt,
      // Add any other profile fields needed
    } : null,
    
    // Loading states
    isLoading: enhancedAuth.isLoading,
    error: enhancedAuth.error,
    
    // Client
    currentSupabaseClient: enhancedAuth.currentSupabaseClient,
    
    // Auth methods
    signInWithGoogle: enhancedAuth.signInWithGoogle,
    signInWithEmail: enhancedAuth.signInWithEmail,
    signUpWithEmail: enhancedAuth.signUpWithEmail,
    signInAsGuest: enhancedAuth.continueAsGuest,
    signOut: enhancedAuth.signOut,
    refreshUserProfile: async () => {
      // Placeholder implementation
      console.log('refreshUserProfile called');
    },
  };
}

/**
 * useUser hook - provides user data from EnhancedAuthProvider
 */
export function useUser() {
  const { user, isLoading, error } = useEnhancedAuth();
  
  return {
    user: user ? {
      uid: user.id,
      email: user.email,
      displayName: user.name || null,
      photoURL: user.avatar || null,
      emailVerified: user.emailVerified,
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
  const { signOut } = useEnhancedAuth();
  
  return {
    signOut,
    currentUser: null, // Will be populated by useUser
  };
}
