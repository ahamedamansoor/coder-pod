import { SupabaseClient } from '@supabase/supabase-js';
import { AuthResult, AuthUser, AuthSession, SignUpInput } from './types';
import { 
  handleSupabaseError, 
  createAuthResult, 
  validatePasswordStrength,
  formatPhoneNumber,
  isValidDate,
  sanitizeInput,
  AuthServiceError
} from './utils';
import { PROVIDER_CONFIGS } from './config';

export class EnhancedAuthService {
  private supabase: SupabaseClient;

  constructor(supabaseClient: SupabaseClient) {
    this.supabase = supabaseClient;
  }

  // Enhanced Email Sign In
  async signInWithEmail(email: string, password: string): Promise<AuthResult> {
    try {
      const sanitizedEmail = sanitizeInput(email.toLowerCase());
      
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user && !data.user.email_confirmed_at) {
        return createAuthResult(false, {
          error: {
            code: 'EMAIL_NOT_VERIFIED',
            message: 'Please verify your email address before signing in',
            type: 'auth',
          },
          requiresEmailVerification: true,
        });
      }

      return createAuthResult(true, {
        user: this.mapAuthUser(data.user),
        session: this.mapAuthSession(data.session),
      });
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Enhanced Email Sign Up
  async signUpWithEmail(signUpData: SignUpInput): Promise<AuthResult> {
    try {
      // Validate password strength
      const passwordValidation = validatePasswordStrength(signUpData.password);
      if (!passwordValidation.isValid) {
        return createAuthResult(false, {
          error: {
            code: 'WEAK_PASSWORD',
            message: passwordValidation.errors.join('. '),
            type: 'validation',
          },
        });
      }

      // Validate date of birth
      if (!isValidDate(signUpData.dob)) {
        return createAuthResult(false, {
          error: {
            code: 'INVALID_DATE',
            message: 'Please enter a valid date of birth',
            type: 'validation',
          },
        });
      }

      // Format phone number
      const formattedPhone = formatPhoneNumber(signUpData.countryCode, signUpData.phoneNumber);

      const sanitizedEmail = sanitizeInput(signUpData.email.toLowerCase());
      const sanitizedName = sanitizeInput(signUpData.name);

      const { data, error } = await this.supabase.auth.signUp({
        email: sanitizedEmail,
        password: signUpData.password,
        options: {
          data: {
            name: sanitizedName,
            phone: formattedPhone,
            date_of_birth: signUpData.dob,
            signup_method: 'email',
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      // Create user profile in database
      if (data.user) {
        await this.createUserProfile(data.user.id, {
          name: sanitizedName,
          email: sanitizedEmail,
          phone: formattedPhone,
          date_of_birth: signUpData.dob,
          signup_method: 'email',
        });
      }

      return createAuthResult(true, {
        user: this.mapAuthUser(data.user),
        session: data.session ? this.mapAuthSession(data.session) : undefined,
        requiresEmailVerification: !data.user?.email_confirmed_at,
      });
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Enhanced Google Sign In
  async signInWithGoogle(): Promise<AuthResult> {
    try {
      const { data, error } = await this.supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          scopes: PROVIDER_CONFIGS.google.scopes.join(' '),
          queryParams: PROVIDER_CONFIGS.google.queryParams,
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      // OAuth flow will redirect, so we return a pending result
      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Enhanced GitHub Sign In
  async signInWithGitHub(): Promise<AuthResult> {
    try {
      const { data, error } = await this.supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          scopes: PROVIDER_CONFIGS.github.scopes.join(' '),
          queryParams: PROVIDER_CONFIGS.github.queryParams,
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Enhanced Microsoft Sign In
  async signInWithMicrosoft(): Promise<AuthResult> {
    try {
      const { data, error } = await this.supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
          scopes: PROVIDER_CONFIGS.microsoft.scopes.join(' '),
          queryParams: PROVIDER_CONFIGS.microsoft.queryParams,
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Password Reset
  async resetPassword(email: string): Promise<AuthResult> {
    try {
      const sanitizedEmail = sanitizeInput(email.toLowerCase());
      
      const { error } = await this.supabase.auth.resetPasswordForEmail(
        sanitizedEmail,
        {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        }
      );

      if (error) {
        throw error;
      }

      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Update Password
  async updatePassword(currentPassword: string, newPassword: string): Promise<AuthResult> {
    try {
      // Validate new password strength
      const passwordValidation = validatePasswordStrength(newPassword);
      if (!passwordValidation.isValid) {
        return createAuthResult(false, {
          error: {
            code: 'WEAK_PASSWORD',
            message: passwordValidation.errors.join('. '),
            type: 'validation',
          },
        });
      }

      // First verify current password
      const { data: userData } = await this.supabase.auth.getUser();
      if (!userData.user?.email) {
        throw new AuthServiceError('USER_NOT_FOUND');
      }

      // Verify current password by attempting to sign in
      const { error: signInError } = await this.supabase.auth.signInWithPassword({
        email: userData.user.email,
        password: currentPassword,
      });

      if (signInError) {
        return createAuthResult(false, {
          error: {
            code: 'INVALID_CURRENT_PASSWORD',
            message: 'Current password is incorrect',
            type: 'auth',
          },
        });
      }

      // Update password
      const { error } = await this.supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw error;
      }

      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Email Verification
  async verifyEmail(token: string, email: string): Promise<AuthResult> {
    try {
      const { error } = await this.supabase.auth.verifyOtp({
        token,
        type: 'email',
        email,
      });

      if (error) {
        throw error;
      }

      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Resend Verification Email
  async resendVerificationEmail(): Promise<AuthResult> {
    try {
      const { data: userData } = await this.supabase.auth.getUser();
      if (!userData.user?.email) {
        throw new AuthServiceError('USER_NOT_FOUND');
      }

      const { error } = await this.supabase.auth.resend({
        type: 'signup',
        email: userData.user.email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      return createAuthResult(true);
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Sign Out
  async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
  }

  // Refresh Session
  async refreshSession(): Promise<AuthResult> {
    try {
      const { data, error } = await this.supabase.auth.refreshSession();

      if (error) {
        throw error;
      }

      return createAuthResult(true, {
        user: this.mapAuthUser(data.user),
        session: this.mapAuthSession(data.session),
      });
    } catch (error: any) {
      return createAuthResult(false, {
        error: handleSupabaseError(error),
      });
    }
  }

  // Private helper methods
  private mapAuthUser(user: any): AuthUser | undefined {
    if (!user) return undefined;

    return {
      id: user.id,
      email: user.email || '',
      name: user.user_metadata?.name || user.email?.split('@')[0],
      avatar: user.user_metadata?.avatar_url,
      provider: user.app_metadata?.provider || 'email',
      emailVerified: !!user.email_confirmed_at,
      phoneNumber: user.phone,
      createdAt: user.created_at,
      lastSignInAt: user.last_sign_in_at,
    };
  }

  private mapAuthSession(session: any): AuthSession | undefined {
    if (!session) return undefined;

    return {
      user: this.mapAuthUser(session.user)!,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
      expiresAt: session.expires_at!,
    };
  }

  private async createUserProfile(userId: string, profileData: any): Promise<void> {
    // This would create a profile in your database
    // Implementation depends on your database schema
    const { error } = await this.supabase
      .from('user_profiles')
      .insert({
        id: userId,
        ...profileData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error creating user profile:', error);
    }
  }
}
