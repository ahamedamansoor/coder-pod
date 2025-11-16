'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Chrome, Loader2, User, Github } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useAuth, useFirestore } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, UserCredential, GithubAuthProvider } from 'firebase/auth';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState(false);
  const [isAnonymousLoading, setIsAnonymousLoading] = useState(false);
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const createUserProfile = async (user: any) => {
    if (!user || user.isAnonymous) return;
    const userRef = doc(firestore, `users/${user.uid}`);
    
    // Check if the user document already exists
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        // Document doesn't exist, create it
        const userProfile = {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          completedTopics: [],
        };
        await setDoc(userRef, userProfile);
    } else {
        // Document exists, just update the last login time
        await setDoc(userRef, { lastLoginAt: serverTimestamp() }, { merge: true });
    }
  };

  const handleSuccessfulLogin = async (userCredential: UserCredential) => {
    await createUserProfile(userCredential.user);
    router.push('/java/learning-plan');
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      await handleSuccessfulLogin(userCredential);
    } catch (error: any) {
      // Don't show an error if the user closes the popup
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        console.log('Google sign-in cancelled by user.');
      } else {
        console.error('Google sign-in error:', error);
        toast({
          variant: 'destructive',
          title: 'Sign-in failed',
          description: error.message || 'An unexpected error occurred during Google sign-in.',
        });
      }
    } finally {
        setIsGoogleLoading(false);
    }
  };
  
  const handleGitHubSignIn = async () => {
    setIsGitHubLoading(true);
    const provider = new GithubAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      await handleSuccessfulLogin(userCredential);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        console.log('GitHub sign-in cancelled by user.');
      } else {
        console.error('GitHub sign-in error:', error);
        toast({
          variant: 'destructive',
          title: 'Sign-in failed',
          description: error.message || 'An unexpected error occurred during GitHub sign-in.',
        });
      }
    } finally {
      setIsGitHubLoading(false);
    }
  };

  const handleAnonymousSignIn = async () => {
    setIsAnonymousLoading(true);
    try {
      await signInAnonymously(auth);
      router.push('/java/what-is-java');
    } catch (error: any) {
      console.error('Anonymous sign-in error:', error);
       toast({
        variant: 'destructive',
        title: 'Sign-in failed',
        description: error.message || 'Could not sign in as a guest.',
      });
    } finally {
      setIsAnonymousLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userRef = doc(firestore, `users/${userCredential.user.uid}`);
      await setDoc(userRef, { lastLoginAt: serverTimestamp() }, { merge: true });
      router.push('/java/learning-plan');
    } catch (error: any) {
      console.error('Email sign-in error:', error);
      toast({
        variant: 'destructive',
        title: 'Sign-in failed',
        description: 'Invalid email or password. Please try again or sign up.',
      });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await handleSuccessfulLogin(userCredential);
    } catch (error: any) {
      console.error('Email sign-up error:', error);
       if (error.code === 'auth/email-already-in-use') {
          toast({
            variant: 'destructive',
            title: 'Sign-up failed',
            description: 'This email is already in use. Please try to sign in instead.',
          });
       } else {
         toast({
            variant: 'destructive',
            title: 'Sign-up failed',
            description: error.message || 'Could not create a new account.',
          });
       }
    } finally {
      setIsEmailLoading(false);
    }
  };


  const isLoading = isEmailLoading || isGoogleLoading || isAnonymousLoading || isGitHubLoading;

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <Logo />
          </div>
          <CardTitle>Welcome to Coder Pod</CardTitle>
          <CardDescription>Sign in or create an account to save your progress.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                {isGoogleLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Chrome className="mr-2 h-4 w-4" />
                    Google
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={handleGitHubSignIn}
                disabled={isLoading}
              >
                {isGitHubLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </>
                )}
              </Button>
            </div>


          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or with email</span>
            </div>
          </div>
          
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
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={handleEmailSignIn} disabled={isLoading}>
                {isEmailLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
              </Button>
              <Button onClick={handleEmailSignUp} variant="secondary" disabled={isLoading}>
                {isEmailLoading ? <Loader2 className="animate-spin" /> : 'Sign Up'}
              </Button>
            </div>
          </div>
          
        </CardContent>
        <CardFooter className="flex-col gap-4">
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
            onClick={handleAnonymousSignIn}
            disabled={isLoading}
          >
            {isAnonymousLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <User className="mr-2 h-4 w-4" />
                Continue as Guest
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
