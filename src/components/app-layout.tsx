'use client';
import React, { useMemo } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Logo } from './logo';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bot, Code, LogOut, User, Zap, LogIn } from 'lucide-react';
import { LearnModal } from './learn-modal';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useUser, useAuth, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { doc } from 'firebase/firestore';

export default function AppLayout() {
  const { user } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData } = useDoc(userDocRef);

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
    }
    router.push('/login');
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  const getInitials = (name?: string | null) => {
    if (user?.isAnonymous) return 'G';
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };
  
  const displayName = user?.isAnonymous ? 'Guest User' : userData?.name || user?.displayName || 'User';

  return (
    <div id="dashboard-page" data-test="dashboard-page" className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-4">
              <LearnModal />
              <ThemeToggle />
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer h-9 w-9">
                      <AvatarImage src={user.photoURL || ''} alt={displayName} />
                      <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel className='flex items-center gap-2'>
                      <User />
                      {displayName}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={handleSignIn}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Welcome to Your AI-Powered Learning Space
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master new programming languages with interactive tools, AI assistance, and a structured learning path.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Zap className="w-6 h-6" />
              </div>
              <CardTitle>AI-Powered Explanations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Don't get stuck. Use our AI to simplify complex topics, get your questions answered instantly, and see practical code examples.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Code className="w-6 h-6" />
              </div>
              <CardTitle>Interactive Coding Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Test your knowledge directly in the browser with our integrated code editor. Run code snippets and see the output immediately.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Bot className="w-6 h-6" />
              </div>
              <CardTitle>Personalized Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Follow a structured learning path, track your progress, and get personalized feedback to accelerate your learning journey.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Language</h2>
            <p className="text-muted-foreground mb-8">Select a language to begin your learning journey.</p>
            <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg" asChild>
                    <Link href="/java/learning-plan">Start Learning Java</Link>
                </Button>
                <Button size="lg" asChild>
                    <Link href="/spring/learning-plan">Start Learning Spring</Link>
                </Button>
                 <Button size="lg" asChild>
                    <Link href="/javascript/learning-plan">Start Learning JavaScript</Link>
                </Button>
                 <Button size="lg" asChild>
                    <Link href="/react/learning-plan">Start Learning React</Link>
                </Button>
            </div>
        </div>

      </main>
    </div>
  );
}
