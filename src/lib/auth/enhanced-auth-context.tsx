'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthContextType, AuthState, AuthResult } from './types';
import { EnhancedAuthService } from './enhanced-auth.service';
import { supabase, createSupabaseClient } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function EnhancedAuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    isLoading: true,
    error: null,
    isAuthenticated: false,
  });

  const [currentSupabaseClient, setCurrentSupabaseClient] = useState(supabase);
  const authService = new EnhancedAuthService(currentSupabaseClient);
  const { toast } = useToast();
  const router = useRouter();

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check for stored email for dynamic client creation
        if (typeof window !== 'undefined') {
          const lastEmail = window.localStorage.getItem('last-login-email');
          if (lastEmail) {
            const userClient = createSupabaseClient(lastEmail);
            setCurrentSupabaseClient(userClient);
          }
        }

        // Get current session
        const { data: { session }, error } = await currentSupabaseClient.auth.getSession();
        
        if (error) {
          throw error;
        }

        if (session) {
          setAuthState({
            user: authService['mapAuthUser'](session.user) || null,
              session: authService['mapAuthSession'](session) || null,
            isLoading: false,
            error: null,
            isAuthenticated: true,
          });
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error: any) {
        console.error('Auth initialization error:', error);
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: {
            code: error.code || 'INIT_ERROR',
            message: error.message || 'Failed to initialize authentication',
            type: 'auth',
          },
        }));
      }
    };

    initializeAuth();
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const { data: { subscription } } = currentSupabaseClient.auth.onAuthStateChange(
      async (event, session) => {

        if (session?.user) {
          // Store email for dynamic client creation
          if (typeof window !== 'undefined' && session.user.email) {
            window.localStorage.setItem('last-login-email', session.user.email);
          }

          setAuthState({
            user: authService['mapAuthUser'](session.user) || null,
            session: authService['mapAuthSession'](session) || null,
            isLoading: false,
            error: null,
            isAuthenticated: true,
          });
        } else {
          setAuthState({
            user: null,
            session: null,
            isLoading: false,
            error: null,
            isAuthenticated: false,
          });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [currentSupabaseClient]);

  // Sign In Methods
  const signInWithEmail = useCallback(async (email: string, password: string): Promise<AuthResult> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signInWithEmail(email, password);
      
      if (result.success) {
        toast({
          title: 'Welcome back!',
          description: 'You have been successfully signed in.',
        });
        router.push('/dashboard');
      } else {
        toast({
          variant: 'destructive',
          title: 'Sign in failed',
          description: result.error?.message || 'An error occurred during sign in.',
        });
      }
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: result.error || null,
      }));
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'UNKNOWN_ERROR',
        message: error.message || 'An unexpected error occurred',
        type: 'auth' as const,
      };
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: authError,
      }));
      
      toast({
        variant: 'destructive',
        title: 'Sign in failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast, router]);

  const signInWithGoogle = useCallback(async (): Promise<AuthResult> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signInWithGoogle();
      
      if (!result.success && result.error) {
        toast({
          variant: 'destructive',
          title: 'Google sign in failed',
          description: result.error.message,
        });
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: result.error || null,
        }));
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'GOOGLE_SIGNIN_ERROR',
        message: error.message || 'Failed to sign in with Google',
        type: 'auth' as const,
      };
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: authError,
      }));
      
      toast({
        variant: 'destructive',
        title: 'Google sign in failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast]);

  const signInWithGitHub = useCallback(async (): Promise<AuthResult> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signInWithGitHub();
      
      if (!result.success && result.error) {
        toast({
          variant: 'destructive',
          title: 'GitHub sign in failed',
          description: result.error.message,
        });
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: result.error || null,
        }));
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'GITHUB_SIGNIN_ERROR',
        message: error.message || 'Failed to sign in with GitHub',
        type: 'auth' as const,
      };
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: authError,
      }));
      
      toast({
        variant: 'destructive',
        title: 'GitHub sign in failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast]);

  const signInWithMicrosoft = useCallback(async (): Promise<AuthResult> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signInWithMicrosoft();
      
      if (!result.success && result.error) {
        toast({
          variant: 'destructive',
          title: 'Microsoft sign in failed',
          description: result.error.message,
        });
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: result.error || null,
        }));
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'MICROSOFT_SIGNIN_ERROR',
        message: error.message || 'Failed to sign in with Microsoft',
        type: 'auth' as const,
      };
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: authError,
      }));
      
      toast({
        variant: 'destructive',
        title: 'Microsoft sign in failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast]);

  // Sign Up Methods
  const signUpWithEmail = useCallback(async (data: any): Promise<AuthResult> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signUpWithEmail(data);
      
      if (result.success) {
        if (result.requiresEmailVerification) {
          toast({
            title: 'Account created!',
            description: 'Please check your email to verify your account.',
          });
        } else {
          toast({
            title: 'Welcome!',
            description: 'Your account has been created successfully.',
          });
          router.push('/dashboard');
        }
      } else {
        toast({
          variant: 'destructive',
          title: 'Sign up failed',
          description: result.error?.message || 'An error occurred during sign up.',
        });
      }
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: result.error || null,
      }));
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'SIGNUP_ERROR',
        message: error.message || 'Failed to create account',
        type: 'auth' as const,
      };
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: authError,
      }));
      
      toast({
        variant: 'destructive',
        title: 'Sign up failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast, router]);

  // Password Management
  const resetPassword = useCallback(async (email: string): Promise<AuthResult> => {
    try {
      const result = await authService.resetPassword(email);
      
      if (result.success) {
        toast({
          title: 'Password reset email sent',
          description: 'Please check your email for password reset instructions.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Password reset failed',
          description: result.error?.message || 'Failed to send password reset email.',
        });
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'RESET_PASSWORD_ERROR',
        message: error.message || 'Failed to reset password',
        type: 'auth' as const,
      };
      
      toast({
        variant: 'destructive',
        title: 'Password reset failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast]);

  const updatePassword = useCallback(async (currentPassword: string, newPassword: string): Promise<AuthResult> => {
    try {
      const result = await authService.updatePassword(currentPassword, newPassword);
      
      if (result.success) {
        toast({
          title: 'Password updated',
          description: 'Your password has been updated successfully.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Password update failed',
          description: result.error?.message || 'Failed to update password.',
        });
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'UPDATE_PASSWORD_ERROR',
        message: error.message || 'Failed to update password',
        type: 'auth' as const,
      };
      
      toast({
        variant: 'destructive',
        title: 'Password update failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast]);

  // Email Verification
  const verifyEmail = useCallback(async (token: string, email: string): Promise<AuthResult> => {
    try {
      const result = await authService.verifyEmail(token, email);
      
      if (result.success) {
        toast({
          title: 'Email verified',
          description: 'Your email has been verified successfully.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Email verification failed',
          description: result.error?.message || 'Failed to verify email.',
        });
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'EMAIL_VERIFICATION_ERROR',
        message: error.message || 'Failed to verify email',
        type: 'auth' as const,
      };
      
      toast({
        variant: 'destructive',
        title: 'Email verification failed',
        description: authError.message,
      });
      
      return { success: false, error: authError };
    }
  }, [authService, toast]);

  // Session Management
  const signOut = useCallback(async (): Promise<void> => {
    try {
      await authService.signOut();
      
      // Clear stored email
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('last-login-email');
      }
      
      setAuthState({
        user: null,
        session: null,
        isLoading: false,
        error: null,
        isAuthenticated: false,
      });
      
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
      });
      
      router.push('/');
    } catch (error: any) {
      console.error('Sign out error:', error);
      toast({
        variant: 'destructive',
        title: 'Sign out failed',
        description: 'An error occurred while signing out.',
      });
    }
  }, [authService, toast, router]);

  const refreshSession = useCallback(async (): Promise<AuthResult> => {
    try {
      const result = await authService.refreshSession();
      
      if (result.success) {
        setAuthState(prev => ({
          ...prev,
          user: result.user || null,
          session: result.session || null,
          isAuthenticated: !!result.user,
        }));
      }
      
      return result;
    } catch (error: any) {
      const authError = {
        code: 'REFRESH_SESSION_ERROR',
        message: error.message || 'Failed to refresh session',
        type: 'auth' as const,
      };
      
      return { success: false, error: authError };
    }
  }, [authService]);

  // Guest Access
  const continueAsGuest = useCallback((): void => {
    router.push('/dashboard');
  }, [router]);

  // Placeholder methods for future implementation
  const signUpWithGoogle = signInWithGoogle;
  const signUpWithGitHub = signInWithGitHub;
  const signUpWithMicrosoft = signInWithMicrosoft;
  const resendVerificationEmail = () => Promise.resolve({ success: true });
  const linkProvider = () => Promise.resolve({ success: true });
  const unlinkProvider = () => Promise.resolve({ success: true });
  const updateProfile = () => Promise.resolve({ success: true });
  const deleteAccount = () => Promise.resolve();
  const enableMFA = () => Promise.resolve({ success: true });
  const disableMFA = () => Promise.resolve({ success: true });
  const verifyMFA = () => Promise.resolve({ success: true });

  const contextValue: AuthContextType = {
    ...authState,
    signInWithEmail,
    signInWithGoogle,
    signInWithGitHub,
    signInWithMicrosoft,
    signUpWithEmail,
    signUpWithGoogle,
    signUpWithGitHub,
    signUpWithMicrosoft,
    resetPassword,
    updatePassword,
    verifyEmail,
    resendVerificationEmail,
    linkProvider,
    unlinkProvider,
    signOut,
    refreshSession,
    updateProfile,
    deleteAccount,
    continueAsGuest,
    enableMFA,
    disableMFA,
    verifyMFA,
    currentSupabaseClient,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useEnhancedAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useEnhancedAuth must be used within an EnhancedAuthProvider');
  }
  return context;
}
