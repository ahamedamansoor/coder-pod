
'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Code, LogOut, User, LogIn, LayoutGrid, Home, ToyBrick } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser, useAuth, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { doc } from 'firebase/firestore';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { LanguageSwitcher } from './language-switcher';
import Link from 'next/link';
import { useLoading } from '@/hooks/use-loading';
import { languages } from '@/data/languages';
import { ReactPlaygroundModal } from '@/components/languages/react/react-playground-modal';

interface MainHeaderProps {
  onToggleEditor: () => void;
  isEditorOpen: boolean;
  showCodeEditorButton?: boolean;
  showWebPlaygroundButton?: boolean;
}

export function MainHeader({
  onToggleEditor,
  isEditorOpen,
  showCodeEditorButton = true,
  showWebPlaygroundButton = true,
}: MainHeaderProps) {
  const { user } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const pathname = usePathname();
  const { showLoader } = useLoading();
  
  const currentLanguageSlug = pathname.split('/')[1] || undefined;
  const currentLanguage = languages.find(lang => lang.slug === currentLanguageSlug);

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: userData } = useDoc(userDocRef);

  const handleSignOut = async () => {
    showLoader();
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
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Button variant="ghost" size="icon" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950/30">
            <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
            </Link>
        </Button>
        <LanguageSwitcher currentLanguageSlug={currentLanguageSlug} />
      </div>
      <div className="flex items-center gap-4">
        {currentLanguage?.slug === 'react' ? (
          <ReactPlaygroundModal>
            <Button className="rounded-full border border-blue-200/70 bg-white/80 text-blue-700 shadow-sm hover:shadow-md hover:bg-white transition-all dark:border-blue-900/40 dark:bg-slate-900/70 dark:text-blue-200">
              <ToyBrick className="mr-2 h-4 w-4" />
              React Playground
            </Button>
          </ReactPlaygroundModal>
        ) : (
          showWebPlaygroundButton && (
            <WebPlaygroundModal initialLanguage={currentLanguageSlug}>
              <Button className="rounded-full border border-blue-200/70 bg-white/80 text-blue-700 shadow-sm hover:shadow-md hover:bg-white transition-all dark:border-blue-900/40 dark:bg-slate-900/70 dark:text-blue-200">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Web Playground
              </Button>
            </WebPlaygroundModal>
          )
        )}
        {showCodeEditorButton && (
          <Button onClick={onToggleEditor} className="rounded-full border border-slate-200/70 bg-white/80 text-slate-700 shadow-sm hover:shadow-md hover:bg-white transition-all dark:border-slate-800/40 dark:bg-slate-900/70 dark:text-slate-100">
            <Code className="mr-2 h-4 w-4" />
            Code Editor
          </Button>
        )}
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
           <Button onClick={handleSignIn} className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
           </Button>
        )}
      </div>
    </header>
  );
}
