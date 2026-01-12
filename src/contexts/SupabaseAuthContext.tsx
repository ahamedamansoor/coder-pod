'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase, createSupabaseClient } from '@/lib/supabase';
import { UserProfile } from '@/types/user.types';
import { supabaseUserService } from '@/services/supabase-user.service';
import { completionSyncService } from '@/services/completion-sync.service';
import { unifiedCompletionService } from '@/services/unified-completion.service';
import { localCompletionService } from '@/services/local-completion.service';
import { notesSyncService } from '@/services/notes-sync.service';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  error: AuthError | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, userData?: { name?: string; dob?: string; phone_number?: string }) => Promise<void>;
  signInAsGuest: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function SupabaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  const [currentSupabaseClient, setCurrentSupabaseClient] = useState(supabase);

  // Fetch user profile from database
  const fetchUserProfile = async (userId: string, authData?: any) => {
    try {
      // First sync user to ensure profile exists
      if (authData) {
        await supabaseUserService.syncUserFromAuth(userId, authData);
      }
      
      const profile = await supabaseUserService.getUserProfile(userId);
      setUserProfile(profile);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      // Don't throw error - allow login to proceed even if profile fetch fails
      // The profile can be fetched later
    }
  };

  // Initialize auth state
  useEffect(() => {
    // Check for last login email to create appropriate client
    let clientToUse = currentSupabaseClient;
    
    if (typeof window !== 'undefined') {
      const lastEmail = window.localStorage.getItem('last-login-email');
      if (lastEmail) {
        clientToUse = createSupabaseClient(lastEmail);
        setCurrentSupabaseClient(clientToUse);
      }
    }

    // Get initial session
    clientToUse.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
        setError(error);
      }
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchUserProfile(session.user.id, session.user);
        // Trigger immediate sync of completion data on login
        unifiedCompletionService.triggerImmediateSync(clientToUse);
        // Trigger immediate sync of notes data on login
        notesSyncService.syncToServer(clientToUse);
      }
      
      setIsLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = clientToUse.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        // Store email for unique storage key generation
        if (typeof window !== 'undefined' && session.user.email) {
          window.localStorage.setItem('last-login-email', session.user.email);
        }
        await fetchUserProfile(session.user.id, session.user);
        // Trigger sync on auth state changes
        unifiedCompletionService.triggerImmediateSync(clientToUse);
        // Trigger notes sync on auth state changes
        notesSyncService.syncToServer(clientToUse);
      } else {
        setUserProfile(null);
      }
    });

    // Set up periodic sync every 30 seconds to keep tabs in sync
    const syncInterval = setInterval(() => {
      if (clientToUse && user) {
        unifiedCompletionService.triggerImmediateSync(clientToUse);
        notesSyncService.syncToServer(clientToUse);
      }
    }, 30000);

    return () => {
      subscription.unsubscribe();
      clearInterval(syncInterval);
    };
  }, []);

  // Sign in with Google
  const signInWithGoogle = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await currentSupabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) throw error;
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in with email and password
  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Clear any existing local data before signing in as a new user
      // This prevents data leakage if a previous session wasn't properly cleared
      unifiedCompletionService.clearAll();
      localCompletionService.clearAll();
      notesSyncService.clearAll();
      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('bookmarked_tech_news');
        // Clear interview preferences for common languages
        const languages = ['html', 'javascript', 'react', 'dsa', 'selenium'];
        languages.forEach(lang => {
          localStorage.removeItem(`interview_preferences_${lang}`);
        });
      }

      // Store email for unique storage key generation
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('last-login-email', email);
      }

      // Create user-specific Supabase client
      const userSupabaseClient = createSupabaseClient(email);
      setCurrentSupabaseClient(userSupabaseClient);

      const { data, error } = await userSupabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if email is verified
      if (!data.user?.email_confirmed_at) {
        await userSupabaseClient.auth.signOut();
        throw new Error('Please verify your email before signing in. Check your inbox for the verification link.');
      }

      // Manually set the session and user since auth state listener might not be ready yet
      setSession(data.session);
      setUser(data.user);
      
      // Fetch user profile with timeout to prevent hanging
      if (data.user) {
        try {
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Profile fetch timeout')), 5000)
          );
          
          await Promise.race([
            fetchUserProfile(data.user.id, data.user),
            timeoutPromise
          ]);
        } catch (profileErr) {
          console.warn('Profile fetch failed or timed out, but login continues:', profileErr);
          // Continue with login even if profile fetch fails
        }
      }
    } catch (err: any) {
      console.error('Email sign-in error:', err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up with email and password
  const signUpWithEmail = async (email: string, password: string, userData?: { name?: string; dob?: string; phone_number?: string }) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            name: userData?.name || null,
            dob: userData?.dob || null,
            phone_number: userData?.phone_number || null,
          },
        },
      });

      if (error) throw error;

      // Profile will be automatically created by the database trigger
      // No need to manually create it here
      console.log('✅ User signed up, profile will be created by trigger');
    } catch (err: any) {
      console.error('Email sign-up error:', err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in as guest (anonymous user)
  const signInAsGuest = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInAnonymously();
      
      if (error) throw error;

      // Anonymous users won't have a profile in the database
      // They can browse content but can't save progress
      console.log('✅ Signed in as guest (anonymous user)');
    } catch (err: any) {
      console.error('Guest sign-in error:', err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Sync completion data before signing out
      if (user) {
        try {
          await completionSyncService.syncToServer(currentSupabaseClient);
          await notesSyncService.syncToServer(currentSupabaseClient);
        } catch (syncError) {
          console.warn('Failed to sync data on logout:', syncError);
          // Continue with logout even if sync fails
        }
      }

      const { error } = await currentSupabaseClient.auth.signOut();
      if (error) throw error;
      
      // Clear local data to prevent leakage between users
      unifiedCompletionService.clearAll();
      localCompletionService.clearAll();
      notesSyncService.clearAll();
      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('bookmarked_tech_news');
        // Clear interview preferences for common languages
        const languages = ['html', 'javascript', 'react', 'dsa', 'selenium'];
        languages.forEach(lang => {
          localStorage.removeItem(`interview_preferences_${lang}`);
        });
      }
      
      setUser(null);
      setSession(null);
      setUserProfile(null);
      
      // Reset to default client
      setCurrentSupabaseClient(supabase);
    } catch (err: any) {
      console.error('Sign-out error:', err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh user profile
  const refreshUserProfile = async () => {
    if (user) {
      await fetchUserProfile(user.id);
    }
  };

  const value = {
    user,
    session,
    userProfile,
    isLoading,
    error,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signInAsGuest,
    signOut,
    refreshUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useSupabaseAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useSupabaseAuth must be used within SupabaseAuthProvider');
  }
  return context;
}
