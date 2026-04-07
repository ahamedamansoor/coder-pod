import { AuthError, AuthResult } from './types';
import { AUTH_ERRORS, ERROR_MESSAGES } from './config';

export class AuthServiceError extends Error {
  public readonly code: string;
  public readonly type: AuthError['type'];

  constructor(code: string, message?: string, type: AuthError['type'] = 'auth') {
    super(message || ERROR_MESSAGES[code] || 'An unknown error occurred');
    this.name = 'AuthServiceError';
    this.code = code;
    this.type = type;
  }
}

export const createAuthError = (
  code: string,
  customMessage?: string,
  type: AuthError['type'] = 'auth'
): AuthError => {
  return {
    code,
    message: customMessage || ERROR_MESSAGES[code] || 'An unknown error occurred',
    type,
  };
};

export const createAuthResult = (
  success: boolean,
  data?: {
    user?: any;
    session?: any;
    error?: AuthError;
    requiresEmailVerification?: boolean;
  }
): AuthResult => {
  return {
    success,
    user: data?.user,
    session: data?.session,
    error: data?.error,
    requiresEmailVerification: data?.requiresEmailVerification,
  };
};

export const handleSupabaseError = (error: any): AuthError => {
  const errorCode = error?.code || error?.name || 'UNKNOWN_ERROR';
  
  // Map Supabase error codes to our auth errors
  const errorMapping: Record<string, string> = {
    'Invalid login credentials': AUTH_ERRORS.INVALID_CREDENTIALS,
    'User not found': AUTH_ERRORS.USER_NOT_FOUND,
    'User already registered': AUTH_ERRORS.EMAIL_ALREADY_IN_USE,
    'Weak password': AUTH_ERRORS.WEAK_PASSWORD_AUTH,
    'Email not confirmed': AUTH_ERRORS.EMAIL_NOT_VERIFIED,
    'Invalid token': AUTH_ERRORS.INVALID_VERIFICATION_TOKEN,
    'Token expired': AUTH_ERRORS.VERIFICATION_TOKEN_EXPIRED,
    'Too many requests': AUTH_ERRORS.RATE_LIMIT_EXCEEDED,
    'Timeout': AUTH_ERRORS.TIMEOUT_ERROR,
    'Network error': AUTH_ERRORS.NETWORK_ERROR,
    'Session expired': AUTH_ERRORS.SESSION_EXPIRED,
  };

  const authErrorCode = errorMapping[errorCode] || AUTH_ERRORS.SERVER_ERROR;
  
  return createAuthError(
    authErrorCode,
    error?.message,
    error?.name === 'ValidationError' ? 'validation' : 
    error?.name === 'NetworkError' ? 'network' : 'auth'
  );
};

export const validatePasswordStrength = (password: string): {
  isValid: boolean;
  errors: string[];
  requirements: {
    label: string;
    isValid: boolean;
    icon: string;
  }[];
} => {
  const errors: string[] = [];
  const requirements = [
    {
      label: 'At least 8 characters',
      isValid: password.length >= 8,
      icon: 'length',
    },
    {
      label: 'One lowercase letter',
      isValid: /[a-z]/.test(password),
      icon: 'lowercase',
    },
    {
      label: 'One uppercase letter',
      isValid: /[A-Z]/.test(password),
      icon: 'uppercase',
    },
    {
      label: 'One number',
      isValid: /\d/.test(password),
      icon: 'number',
    },
    {
      label: 'One special character',
      isValid: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      icon: 'special',
    },
  ];
  
  // Check for common patterns
  const commonPatterns = [
    /123456/,
    /password/i,
    /qwerty/i,
    /admin/i,
    /letmein/i,
  ];
  
  const hasCommonPattern = commonPatterns.some(pattern => pattern.test(password));
  if (hasCommonPattern) {
    errors.push('Avoid common patterns like "password" or "123456"');
  }
  
  const unmetRequirements = requirements.filter(req => !req.isValid);
  if (unmetRequirements.length > 0) {
    errors.push(`Please meet all requirements: ${unmetRequirements.map(req => req.label.toLowerCase()).join(', ')}`);
  }
  
  return {
    isValid: unmetRequirements.length === 0 && !hasCommonPattern,
    errors,
    requirements,
  };
};

export const formatPhoneNumber = (countryCode: string, phoneNumber: string): string => {
  // Remove all non-digit characters
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  // Remove leading + if present in country code
  const cleanCountryCode = countryCode.replace(/^\+/, '');
  
  return `+${cleanCountryCode}${cleanPhone}`;
};

export const isValidDate = (dateString: string): boolean => {
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  if (!regex.test(dateString)) return false;
  
  const parts = dateString.split('/');
  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  
  const date = new Date(year, month - 1, day);
  
  // Check if the date is valid and not in the future
  const now = new Date();
  return date.getDate() === day && 
         date.getMonth() === month - 1 && 
         date.getFullYear() === year &&
         date <= now;
};

export const generateSecureToken = (length: number = 32): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export const rateLimitCheck = (identifier: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): boolean => {
  // This would typically be stored in Redis or database
  // For now, we'll use a simple in-memory store
  const attempts = (global as any)._authAttempts || {};
  const now = Date.now();
  
  // Clean old attempts
  Object.keys(attempts).forEach(key => {
    if (now - attempts[key].timestamp > windowMs) {
      delete attempts[key];
    }
  });
  
  const userAttempts = attempts[identifier] || { count: 0, timestamp: now };
  
  if (userAttempts.count >= maxAttempts && (now - userAttempts.timestamp) < windowMs) {
    return false; // Rate limited
  }
  
  // Update attempts
  attempts[identifier] = {
    count: userAttempts.count + 1,
    timestamp: now,
  };
  
  (global as any)._authAttempts = attempts;
  return true;
};
