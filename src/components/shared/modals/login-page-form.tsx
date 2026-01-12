
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Chrome, Loader2, User } from 'lucide-react';
import { Logo } from '@/components/shared/layout/logo';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { useLoading } from '@/hooks/use-loading';

export function LoginPageForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { signInWithGoogle, signInWithEmail } = useSupabaseAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { showLoader, hideLoader } = useLoading();


  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    
    try {
      await signInWithGoogle();
      // User will be redirected by Supabase OAuth flow
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      toast({
        variant: 'destructive',
        title: 'Sign-in failed',
        description: error.message || 'An unexpected error occurred during Google sign-in.',
      });
      setIsGoogleLoading(false);
    }
  };
  

  const handleGuestContinue = () => {
    // Guest users can browse without authentication
    router.push('/dashboard');
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailLoading(true);
    
    try {
      await signInWithEmail(email, password);
      
      showLoader({
        title: 'Login successful!',
        subtitle: 'Redirecting you to your dashboard...',
      });
      
      router.push('/dashboard');
      hideLoader();
    } catch (error: any) {
      console.error('Email sign-in error:', error);
      
      let description = 'An unexpected error occurred. Please try again.';
      
      if (error.message && error.message.includes('verify')) {
        description = 'Please verify your email before signing in. Check your inbox for a verification link.';
      } else if (error.message && (error.message.includes('Invalid') || error.message.includes('credentials'))) {
        description = 'The email or password you entered is incorrect. Please try again.';
      } else if (error.message) {
        description = error.message;
      }
      
      toast({
        variant: 'destructive',
        title: 'Sign-in failed',
        description,
      });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const isLoading = isEmailLoading || isGoogleLoading;

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <Logo clickable={false} />
        </div>
        <CardDescription>Sign in to continue your learning journey.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
         <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full"
          >
            {isGoogleLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Chrome className="mr-2 h-4 w-4" />
                Sign in with Google
              </>
            )}
          </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or with email</span>
          </div>
        </div>
        
        <form onSubmit={handleEmailSignIn}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isEmailLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </div>
        
      </CardContent>
      <CardFooter className="flex-col gap-4 border-t pt-6">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full"
          onClick={handleGuestContinue}
          disabled={isLoading}
        >
          <User className="mr-2 h-4 w-4" />
          Continue as Guest
        </Button>
      </CardFooter>
    </Card>
  );
}
