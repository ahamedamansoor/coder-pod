'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Chrome, Github, Mail, Loader2, Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import { useEnhancedAuth } from '@/lib/auth/enhanced-auth-context';
import { useLoading } from '@/hooks/use-loading';
import { authSchemas } from '@/lib/auth/validation';
import { AUTH_PROVIDERS } from '@/lib/auth/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const signInSchema = authSchemas.signIn;
type SignInFormData = z.infer<typeof signInSchema>;

export function EnhancedSignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { showLoader, hideLoader } = useLoading();
  const { 
    signInWithEmail, 
    signInWithGoogle, 
    signInWithGitHub, 
    signInWithMicrosoft,
    continueAsGuest 
  } = useEnhancedAuth();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onEmailSubmit = async (data: SignInFormData) => {
    setLoading('email');
    let loaderShown = false;
    const loaderTimeout = setTimeout(() => {
      loaderShown = true;
      showLoader({
        title: 'Signing In...',
        subtitle: 'Authenticating your credentials and preparing your workspace'
      });
    }, 1000); // Only show loader after 1 second
    
    try {
      await signInWithEmail(data.email, data.password);
    } finally {
      clearTimeout(loaderTimeout);
      if (loaderShown) {
        hideLoader();
      }
      setLoading(null);
    }
  };

  const onGoogleSignIn = async () => {
    setLoading('google');
    let loaderShown = false;
    const loaderTimeout = setTimeout(() => {
      loaderShown = true;
      showLoader({
        title: 'Signing In with Google...',
        subtitle: 'Connecting to your Google account and preparing your workspace'
      });
    }, 1000); // Only show loader after 1 second
    
    try {
      await signInWithGoogle();
    } finally {
      clearTimeout(loaderTimeout);
      if (loaderShown) {
        hideLoader();
      }
      setLoading(null);
    }
  };

  const onGitHubSignIn = async () => {
    setLoading('github');
    let loaderShown = false;
    const loaderTimeout = setTimeout(() => {
      loaderShown = true;
      showLoader({
        title: 'Signing In with GitHub...',
        subtitle: 'Connecting to your GitHub account and preparing your workspace'
      });
    }, 1000); // Only show loader after 1 second
    
    try {
      await signInWithGitHub();
    } finally {
      clearTimeout(loaderTimeout);
      if (loaderShown) {
        hideLoader();
      }
      setLoading(null);
    }
  };

  const onMicrosoftSignIn = async () => {
    setLoading('microsoft');
    let loaderShown = false;
    const loaderTimeout = setTimeout(() => {
      loaderShown = true;
      showLoader({
        title: 'Signing In with Microsoft...',
        subtitle: 'Connecting to your Microsoft account and preparing your workspace'
      });
    }, 1000); // Only show loader after 1 second
    
    try {
      await signInWithMicrosoft();
    } finally {
      clearTimeout(loaderTimeout);
      if (loaderShown) {
        hideLoader();
      }
      setLoading(null);
    }
  };

  const onGuestContinue = async () => {
    setLoading('guest');
    let loaderShown = false;
    const loaderTimeout = setTimeout(() => {
      loaderShown = true;
      showLoader({
        title: 'Starting Guest Session...',
        subtitle: 'Preparing your workspace and loading learning resources'
      });
    }, 1000); // Only show loader after 1 second
    
    try {
      await continueAsGuest();
    } finally {
      clearTimeout(loaderTimeout);
      if (loaderShown) {
        hideLoader();
      }
      setLoading(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setMousePosition({ x, y });
  };

  const calculateTransform = () => {
    if (!isHovering) return '';
    
    const rect = 400; // Approximate card width
    const centerX = rect / 2;
    const centerY = 300; // Approximate card height
    
    const rotateX = ((mousePosition.y - centerY) / centerY) * -3;
    const rotateY = ((mousePosition.x - centerX) / centerX) * 3;
    const translateX = ((mousePosition.x - centerX) / centerX) * -8;
    const translateY = ((mousePosition.y - centerY) / centerY) * -8;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`;
  };

  return (
    <Card 
      className="w-full max-w-md shadow-2xl border-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl transition-all duration-200 ease-out cursor-pointer"
      style={{ 
        transform: calculateTransform(),
        boxShadow: isHovering ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      <CardHeader className="text-center space-y-2 pb-4">
        <CardTitle className="text-2xl font-bold">
          <span style={{ color: '#5B7FFF' }}>CODER</span>
          <span className="text-gray-900 dark:text-white"> POD</span>
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Sign in to your account to continue learning
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Social Sign In Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            onClick={onGoogleSignIn}
            disabled={isLoading !== null}
            className="w-full h-11 gap-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'google' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Chrome className="h-4 w-4" style={{ color: AUTH_PROVIDERS.google.color }} />
            )}
            Continue with Google
          </Button>

          {/* GitHub and Microsoft buttons temporarily hidden */}
          {/*
          <Button
            variant="outline"
            onClick={onGitHubSignIn}
            disabled={isLoading !== null}
            className="w-full h-11 gap-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'github' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Github className="h-4 w-4" />
            )}
            Continue with GitHub
          </Button>

          <Button
            variant="outline"
            onClick={onMicrosoftSignIn}
            disabled={isLoading !== null}
            className="w-full h-11 gap-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'microsoft' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <div className="h-4 w-4 rounded" style={{ backgroundColor: AUTH_PROVIDERS.microsoft.color }} />
            )}
            Continue with Microsoft
          </Button>
          */}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Email Sign In Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onEmailSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium !text-slate-700 dark:!text-slate-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium !text-slate-700 dark:!text-slate-300">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="h-11 pr-10"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading !== null}
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
            >
              {isLoading === 'email' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>

        {/* Guest Access */}
        <div className="space-y-2">
          <Button
            variant="outline"
            onClick={onGuestContinue}
            disabled={isLoading !== null}
            className="w-full h-11 gap-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'guest' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <User className="h-4 w-4" />
            )}
            Continue as Guest
          </Button>
          <p className="text-xs text-center text-slate-500 dark:text-slate-400">
            Explore without an account. You can upgrade anytime.
          </p>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign up for free
          </Link>
        </div>

        {/* Legal Links */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 space-x-4">
          <Link
            href="/terms-of-service"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Terms of Service
          </Link>
          <span>•</span>
          <Link
            href="/privacy-policy"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Privacy Policy
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
