
import { SidebarTrigger } from './ui/sidebar';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Code, LogOut, User, LogIn, LayoutGrid } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useUser, useAuth, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { useParams, useRouter } from 'next/navigation';
import { doc } from 'firebase/firestore';
import { WebPlaygroundModal } from './web-playground-modal';
import { LanguageSwitcher } from './language-switcher';
import Link from 'next/link';
import { useLoading } from '@/hooks/use-loading';

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
  const params = useParams();
  const { showLoader } = useLoading();
  
  const currentLanguageSlug = Array.isArray(params.lang) ? params.lang[0] : params.lang as string || 
                              (router as any).query?.lang as string || 
                              Object.keys(params)[0];

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
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div className="hidden md:block">
          <Logo />
        </div>
        <LanguageSwitcher currentLanguageSlug={currentLanguageSlug} />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/dashboard">
            <LayoutGrid className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        {showWebPlaygroundButton && (
          <WebPlaygroundModal>
              <Button variant="outline">
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Web Playground
              </Button>
          </WebPlaygroundModal>
        )}
        {showCodeEditorButton && (
          <Button variant="outline" onClick={onToggleEditor}>
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
           <Button onClick={handleSignIn}>
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
           </Button>
        )}
      </div>
    </header>
  );
}
