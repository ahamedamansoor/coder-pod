import { AuthProvider } from './types';

export const AUTH_PROVIDERS: Record<string, AuthProvider> = {
  google: {
    id: 'google',
    name: 'google',
    displayName: 'Google',
    icon: '/icons/google.svg',
    color: '#4285f4',
    isAvailable: true,
    description: 'Sign in with your Google account',
  },
  github: {
    id: 'github',
    name: 'github',
    displayName: 'GitHub',
    icon: '/icons/github.svg',
    color: '#333333',
    isAvailable: true,
    description: 'Sign in with your GitHub account',
  },
  microsoft: {
    id: 'microsoft',
    name: 'microsoft',
    displayName: 'Microsoft',
    icon: '/icons/microsoft.svg',
    color: '#00a4ef',
    isAvailable: true,
    description: 'Sign in with your Microsoft account',
  },
  apple: {
    id: 'apple',
    name: 'apple',
    displayName: 'Apple',
    icon: '/icons/apple.svg',
    color: '#000000',
    isAvailable: false, // Requires Apple Developer Program
    description: 'Sign in with your Apple account',
  },
  discord: {
    id: 'discord',
    name: 'discord',
    displayName: 'Discord',
    icon: '/icons/discord.svg',
    color: '#5865f2',
    isAvailable: false, // Can be enabled if needed
    description: 'Sign in with your Discord account',
  },
};

export const AVAILABLE_PROVIDERS = Object.values(AUTH_PROVIDERS).filter(
  provider => provider.isAvailable
);

export const PROVIDER_CONFIGS = {
  google: {
    scopes: ['email', 'profile'],
    queryParams: {
      access_type: 'offline',
      prompt: 'consent',
    },
  },
  github: {
    scopes: ['user:email'],
    queryParams: {},
  },
  microsoft: {
    scopes: ['openid', 'email', 'profile'],
    queryParams: {
      response_type: 'code',
    },
  },
};

export const AUTH_ERRORS = {
  // Validation Errors
  INVALID_EMAIL: 'INVALID_EMAIL',
  WEAK_PASSWORD: 'WEAK_PASSWORD',
  PASSWORD_MISMATCH: 'PASSWORD_MISMATCH',
  INVALID_PHONE: 'INVALID_PHONE',
  
  // Auth Errors
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  EMAIL_ALREADY_IN_USE: 'EMAIL_ALREADY_IN_USE',
  WEAK_PASSWORD_AUTH: 'WEAK_PASSWORD_AUTH',
  
  // Verification Errors
  EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
  VERIFICATION_TOKEN_EXPIRED: 'VERIFICATION_TOKEN_EXPIRED',
  INVALID_VERIFICATION_TOKEN: 'INVALID_VERIFICATION_TOKEN',
  
  // Network Errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  
  // Server Errors
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  SERVER_ERROR: 'SERVER_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  
  // Session Errors
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  INVALID_SESSION: 'INVALID_SESSION',
  
  // MFA Errors
  MFA_REQUIRED: 'MFA_REQUIRED',
  INVALID_MFA_CODE: 'INVALID_MFA_CODE',
  MFA_SETUP_REQUIRED: 'MFA_SETUP_REQUIRED',
} as const;

export const ERROR_MESSAGES: Record<string, string> = {
  [AUTH_ERRORS.INVALID_EMAIL]: 'Please enter a valid email address',
  [AUTH_ERRORS.WEAK_PASSWORD]: 'Password is too weak. Please include uppercase, lowercase, and numbers',
  [AUTH_ERRORS.PASSWORD_MISMATCH]: 'Passwords do not match',
  [AUTH_ERRORS.INVALID_PHONE]: 'Please enter a valid phone number',
  
  [AUTH_ERRORS.INVALID_CREDENTIALS]: 'Invalid email or password',
  [AUTH_ERRORS.USER_NOT_FOUND]: 'No account found with this email',
  [AUTH_ERRORS.EMAIL_ALREADY_IN_USE]: 'An account with this email already exists',
  [AUTH_ERRORS.WEAK_PASSWORD_AUTH]: 'Password is too weak',
  
  [AUTH_ERRORS.EMAIL_NOT_VERIFIED]: 'Please verify your email address',
  [AUTH_ERRORS.VERIFICATION_TOKEN_EXPIRED]: 'Verification link has expired',
  [AUTH_ERRORS.INVALID_VERIFICATION_TOKEN]: 'Invalid verification link',
  
  [AUTH_ERRORS.NETWORK_ERROR]: 'Network error. Please check your connection',
  [AUTH_ERRORS.TIMEOUT_ERROR]: 'Request timed out. Please try again',
  
  [AUTH_ERRORS.RATE_LIMIT_EXCEEDED]: 'Too many attempts. Please try again later',
  [AUTH_ERRORS.SERVER_ERROR]: 'Server error. Please try again later',
  [AUTH_ERRORS.SERVICE_UNAVAILABLE]: 'Service temporarily unavailable',
  
  [AUTH_ERRORS.SESSION_EXPIRED]: 'Your session has expired. Please sign in again',
  [AUTH_ERRORS.INVALID_SESSION]: 'Invalid session. Please sign in again',
  
  [AUTH_ERRORS.MFA_REQUIRED]: 'Two-factor authentication is required',
  [AUTH_ERRORS.INVALID_MFA_CODE]: 'Invalid authentication code',
  [AUTH_ERRORS.MFA_SETUP_REQUIRED]: 'Please set up two-factor authentication',
};
