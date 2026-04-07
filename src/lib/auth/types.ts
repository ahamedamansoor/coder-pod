export interface AuthProvider {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  color: string;
  isAvailable: boolean;
  description: string;
}

export interface AuthError {
  code: string;
  message: string;
  type: 'validation' | 'network' | 'auth' | 'server';
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  provider: AuthProvider['id'];
  emailVerified: boolean;
  phoneNumber?: string;
  createdAt: string;
  lastSignInAt: string;
}

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface AuthResult {
  success: boolean;
  user?: AuthUser;
  session?: AuthSession;
  error?: AuthError;
  requiresEmailVerification?: boolean;
}

export interface AuthState {
  user: AuthUser | null;
  session: AuthSession | null;
  isLoading: boolean;
  error: AuthError | null;
  isAuthenticated: boolean;
}

export interface AuthContextType extends AuthState {
  // Supabase Client
  currentSupabaseClient: any;
  
  // Sign In Methods
  signInWithEmail: (email: string, password: string) => Promise<AuthResult>;
  signInWithGoogle: () => Promise<AuthResult>;
  signInWithGitHub: () => Promise<AuthResult>;
  signInWithMicrosoft: () => Promise<AuthResult>;
  
  // Sign Up Methods
  signUpWithEmail: (data: SignUpInput) => Promise<AuthResult>;
  signUpWithGoogle: () => Promise<AuthResult>;
  signUpWithGitHub: () => Promise<AuthResult>;
  signUpWithMicrosoft: () => Promise<AuthResult>;
  
  // Password Management
  resetPassword: (email: string) => Promise<AuthResult>;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<AuthResult>;
  
  // Email Verification
  verifyEmail: (token: string, email: string) => Promise<AuthResult>;
  resendVerificationEmail: () => Promise<AuthResult>;
  
  // Social Linking
  linkProvider: (providerId: string) => Promise<AuthResult>;
  unlinkProvider: (providerId: string) => Promise<AuthResult>;
  
  // Session Management
  signOut: () => Promise<void>;
  refreshSession: () => Promise<AuthResult>;
  
  // Profile Management
  updateProfile: (data: UpdateProfileInput) => Promise<AuthResult>;
  deleteAccount: (password: string) => Promise<void>;
  
  // Guest Access
  continueAsGuest: () => void;
  
  // Multi-factor Authentication
  enableMFA: () => Promise<AuthResult>;
  disableMFA: () => Promise<AuthResult>;
  verifyMFA: (code: string) => Promise<AuthResult>;
}

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  countryCode: string;
  phoneNumber: string;
  dob: string;
  acceptTerms: boolean;
}

export interface UpdateProfileInput {
  name?: string;
  bio?: string;
  website?: string;
  location?: string;
}
