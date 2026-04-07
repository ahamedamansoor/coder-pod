import { z } from 'zod';

// Enhanced validation schemas for authentication
export const authSchemas = {
  // Email/Password Sign In
  signIn: z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
  }),

  // Email/Password Sign Up
  signUp: z.object({
    name: z.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
    
    email: z.string()
      .email('Please enter a valid email address')
      .toLowerCase(),
    
    password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
    
    confirmPassword: z.string(),
    
    countryCode: z.string().min(1, 'Please select your country code'),
    phoneNumber: z.string()
      .min(5, 'Phone number must be at least 5 digits')
      .regex(/^\d+$/, 'Phone number can only contain digits'),
    
    dob: z.string()
      .regex(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/, 'Please enter a valid date in MM/DD/YYYY format'),
    
    acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),

  // Password Reset
  resetPassword: z.object({
    email: z.string().email('Please enter a valid email address'),
  }),

  // Update Password
  updatePassword: z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
    confirmPassword: z.string(),
  }).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),

  // Update Profile
  updateProfile: z.object({
    name: z.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .optional(),
    
    bio: z.string()
      .max(500, 'Bio must be less than 500 characters')
      .optional(),
    
    website: z.string()
      .url('Please enter a valid website URL')
      .or(z.literal(''))
      .optional(),
    
    location: z.string()
      .max(100, 'Location must be less than 100 characters')
      .optional(),
  }),
};

export type SignInInput = z.infer<typeof authSchemas.signIn>;
export type SignUpInput = z.infer<typeof authSchemas.signUp>;
export type ResetPasswordInput = z.infer<typeof authSchemas.resetPassword>;
export type UpdatePasswordInput = z.infer<typeof authSchemas.updatePassword>;
export type UpdateProfileInput = z.infer<typeof authSchemas.updateProfile>;
