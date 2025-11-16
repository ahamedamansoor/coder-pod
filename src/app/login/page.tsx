
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Chrome, Loader2, User, Github } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useAuth, useFirestore } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously, UserCredential, GithubAuthProvider, User as FirebaseUser } from 'firebase/auth';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

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
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const createUserProfile = async (user: FirebaseUser) => {
    if (!user || !firestore) return;

    // For email/password sign-in, we must check if the email is verified.
    // Social sign-ins (Google, GitHub) are assumed to have verified emails.
    const isEmailPasswordSignIn = user.providerData.some(p => p.providerId === 'password');
    if (isEmailPasswordSignIn && !user.emailVerified) {
        toast({
            variant: 'destructive',
            title: 'Verification Required',
            description: 'Please verify your email before signing in. Check your inbox for a verification link.',
            duration: 8000,
        });
        await auth?.signOut(); // Sign out the unverified user
        return; 
    }

    if (user.isAnonymous) {
      router.push('/java/learning-plan');
      return;
    }

    const userRef = doc(firestore, `users/${user.uid}`);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        const nameFromUrl = searchParams.get('name');
        const dobFromUrl = searchParams.get('dob');
        const phoneFromUrl = searchParams.get('phoneNumber');

        const userProfile = {
          id: user.uid,
          email: user.email,
          name: user.displayName || nameFromUrl || user.email,
          phoneNumber: user.phoneNumber || phoneFromUrl || null,
          dob: dobFromUrl ? new Date(dobFromUrl) : null,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          completedTopics: [],
        };
        await setDoc(userRef, userProfile);
    } else {
        await setDoc(userRef, { lastLoginAt: serverTimestamp() }, { merge: true });
    }
    router.push('/java/learning-plan');
  };

  const handleSuccessfulLogin = async (userCredential: UserCredential) => {
    await createUserProfile(userCredential.user);
  };

  const handleGoogleSignIn = async () => {
    if (!auth) return;
    setIsGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      await handleSuccessfulLogin(userCredential);
    } catch (error: any) {
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
    if (!auth) return;
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
    if (!auth) return;
    setIsAnonymousLoading(true);
    try {
      const credential = await signInAnonymously(auth);
      await createUserProfile(credential.user);
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
    if (!auth) return;
    setIsEmailLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await createUserProfile(userCredential.user);
    } catch (error: any) {
      console.error('Email sign-in error:', error);
       let description = 'Invalid email or password. Please try again.';
       if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
            description = 'Invalid email or password. Please try again.';
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

  const isLoading = isEmailLoading || isGoogleLoading || isAnonymousLoading || isGitHubLoading;

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <Logo />
          </div>
          <CardTitle>Welcome Back to Coder Pod</CardTitle>
          <CardDescription>Sign in to continue your learning journey.</CardDescription>
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
