
'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Code, LogOut, User, LogIn, LayoutGrid, Home, ToyBrick, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { useRouter, usePathname } from 'next/navigation';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { LanguageSwitcher } from './language-switcher';
import Link from 'next/link';
import { useLoading } from '@/hooks/use-loading';
import { enabledLanguages as languages } from '@/data/languages';
import { ReactPlaygroundModal } from '@/components/shared/playground/react-playground-modal';
import { useReactPlayground } from '@/components/shared/playground/react-playground-context';

const reactPlaygroundSample = {
  jsx: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>🎯 Quick React Playground</h2>
      <p>Edit the code and hit Run to see changes.</p>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</div>
      <button onClick={() => setCount(count + 1)} style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', border: 'none', background: '#4f46e5', color: 'white' }}>
        Increment
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
  css: `body { background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%); }`,
};

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
  const { user, userProfile, signOut } = useSupabaseAuth();
  const router = useRouter();
  const pathname = usePathname() || '';
  const { showLoader } = useLoading();
  const { openPlayground: openReactPlayground } = useReactPlayground();
  
  const currentLanguageSlug = pathname.split('/')[1] || undefined;
  const currentLanguage = languages.find(lang => lang.slug === currentLanguageSlug);

  const handleSignOut = async () => {
    showLoader({
      title: 'Signing Out...',
      subtitle: 'Securing your session and clearing data'
    });
    // await signOut(); // Disabled for debugging
    
    // Add delay to show loader before navigation
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/login');
  };
  
  const handleSignIn = () => {
    router.push('/login');
  };

  const handleOpenReactPlayground = () => {
    openReactPlayground(reactPlaygroundSample);
  };

  const getInitials = (name?: string | null) => {
    if (!user) return 'G';
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const displayName = user ? (userProfile?.name || user.name || user.email?.split('@')[0] || 'User') : 'Guest User';

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
          <>
            <Button
              onClick={handleOpenReactPlayground}
              className="rounded-full border border-blue-200/70 bg-white/80 text-blue-700 shadow-sm hover:shadow-md hover:bg-white transition-all dark:border-blue-900/40 dark:bg-slate-900/70 dark:text-blue-200"
            >
              <ToyBrick className="mr-2 h-4 w-4" />
              React Playground
            </Button>
            <ReactPlaygroundModal />
          </>
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
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
              html.classList.remove('dark');
              html.classList.add('light');
            } else {
              html.classList.remove('light');
              html.classList.add('dark');
            }
          }}
          title="Toggle theme"
          className="relative"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Button>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer h-9 w-9">
                <AvatarImage
                  src={userProfile?.avatar_url || user.avatar || ''}
                  alt={displayName}
                />
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
