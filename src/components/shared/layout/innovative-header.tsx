'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, FileText, Map, Sparkles, LogOut, Settings, Menu, Code, Play, Zap, StickyNote, LogIn, Brain } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { LanguageSwitcher } from './language-switcher';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { FeatureGateModal } from '@/components/shared/feature-gate-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface InnovativeHeaderProps {
  currentPage?: 'home' | 'roadmaps' | 'cheatsheets' | 'notes' | 'discover' | 'bookmarks' | 'dashboard' | 'learning' | 'ai-interview';
  showNavigation?: boolean;
  user?: {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    isAnonymous?: boolean;
  } | null;
  onLogout?: () => void;
  // Learning page specific props
  showSidebarTrigger?: boolean;
  showLanguageSwitcher?: boolean;
  // Language-specific features
  currentLanguage?: string;
  onPlaygroundOpen?: () => void;
  onWebPlaygroundOpen?: () => void;
}

function getUserInitials(displayName?: string | null, email?: string | null, isAnonymous?: boolean): string {
  if (isAnonymous) {
    return 'G';
  }
  if (displayName && typeof displayName === 'string') {
    const trimmed = displayName.trim();
    if (trimmed) {
      const names = trimmed.split(' ');
      if (names.length >= 2) {
        return (names[0][0] + names[names.length - 1][0]).toUpperCase();
      }
      return trimmed.substring(0, 2).toUpperCase();
    }
  }
  if (email && typeof email === 'string') {
    return email.substring(0, 2).toUpperCase();
  }
  return 'U';
}

export function InnovativeHeader({ 
  currentPage, 
  showNavigation = true, 
  user, 
  onLogout,
  showSidebarTrigger = false,
  showLanguageSwitcher = false,
  currentLanguage,
  onPlaygroundOpen,
  onWebPlaygroundOpen
}: InnovativeHeaderProps) {
  const isGuest = user?.isAnonymous;
  const router = useRouter();
  const [showFeatureGate, setShowFeatureGate] = useState(false);
  const [gatedFeatureName, setGatedFeatureName] = useState('');

  const allNavItems = [
    { href: '/', label: 'Home', icon: Home, page: 'home', requiresAuth: false },
    { href: '/roadmaps', label: 'Roadmaps', icon: Map, page: 'roadmaps', requiresAuth: false },
    { href: '/cheatsheets', label: 'Cheatsheets', icon: FileText, page: 'cheatsheets', requiresAuth: false },
    { href: '/ai-interview', label: 'AI Interview', icon: Brain, page: 'ai-interview', requiresAuth: false },
    { href: '/notes', label: 'Notes', icon: StickyNote, page: 'notes', requiresAuth: true },
    { href: '/discover', label: 'Discover', icon: Sparkles, page: 'discover', requiresAuth: false },
  ];

  // Filter out Discover button when on Learning page
  const navItems = currentPage === 'learning' 
    ? allNavItems.filter(item => item.page !== 'discover')
    : allNavItems;

  const handleNavClick = (e: React.MouseEvent, item: typeof allNavItems[0]) => {
    if (item.requiresAuth && isGuest) {
      e.preventDefault();
      setGatedFeatureName(item.label);
      setShowFeatureGate(true);
    }
  };

  return (
    <header className="relative border-b border-slate-200/50 dark:border-slate-800/50 flex-shrink-0 sticky top-0 z-[100] overflow-hidden group">
      {/* Elegant Gradient Background with Glass Morphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-blue-50/30 to-purple-50/30 dark:from-slate-950/95 dark:via-blue-950/20 dark:to-purple-950/20 backdrop-blur-xl">
        {/* Subtle floating orbs */}
        <div className="absolute top-0 left-[10%] w-32 h-32 bg-blue-500/5 dark:bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 right-[15%] w-40 h-40 bg-purple-500/5 dark:bg-purple-400/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header Content */}
      <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left Side - Sidebar Trigger, Logo/Language Switcher */}
        <div className="flex items-center gap-3">
          {/* Sidebar Trigger for Learning Pages */}
          {showSidebarTrigger && (
            <div className="lg:hidden">
              <SidebarTrigger className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/50 dark:hover:to-purple-950/50 transition-all duration-300" />
            </div>
          )}

          {/* Show Logo on non-learning pages */}
          {!showLanguageSwitcher && (
            <div className="relative group/logo transition-transform duration-300 hover:scale-105">
              <Logo />
            </div>
          )}

          {/* Sidebar Toggle Button on Learning Pages */}
          {showLanguageSwitcher && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="transition-transform duration-300 hover:scale-105">
                  <SidebarTrigger className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/50 dark:hover:to-purple-950/50 transition-all duration-300 hover:shadow-lg" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Sidebar</p>
              </TooltipContent>
            </Tooltip>
          )}

          {/* Language Switcher on Learning Pages */}
          {showLanguageSwitcher && (
            <div className="sm:block">
              <LanguageSwitcher currentLanguageSlug={currentLanguage} />
            </div>
          )}
        </div>

        {/* Center - Navigation (Desktop) */}
        {showNavigation && (
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-lg">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                
                return (
                  <Link key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item)}>
                    <button
                      className={cn(
                        "relative group/btn flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
                        "hover:scale-105 active:scale-98",
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10"
                          : "text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80"
                      )}
                    >
                      {/* Subtle active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg transition-opacity duration-300" />
                      )}
                      <Icon className={cn(
                        "w-4 h-4 relative z-10 flex-shrink-0 transition-transform duration-300",
                        "group-hover/btn:scale-110"
                      )} />
                      <span className={cn(
                        "relative z-10 font-medium whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden",
                        isActive 
                          ? "opacity-100 max-w-[200px] ml-0" 
                          : "opacity-0 max-w-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:max-w-[200px] group-hover/btn:ml-0"
                      )}>
                        {item.label}
                      </span>
                    </button>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        {/* Right Side - Playground Button, Theme Toggle & User */}
        <div className="flex items-center gap-3">
          {/* React Playground Button */}
          {currentLanguage === 'react' && onPlaygroundOpen && (
            <Button
              onClick={onPlaygroundOpen}
              className="relative group/play hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              size="sm"
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover/play:opacity-30 blur transition-all duration-300" />
              
              {/* Icon and Text */}
              <Code className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-semibold">React Playground</span>
              <Zap className="w-4 h-4 text-yellow-300 relative z-10 animate-pulse" />
            </Button>
          )}
          
          {/* Mobile React Playground Button */}
          {currentLanguage === 'react' && onPlaygroundOpen && (
            <Button
              onClick={onPlaygroundOpen}
              className="sm:hidden relative group/play flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 p-0"
              size="sm"
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover/play:opacity-30 blur transition-all duration-300" />
              
              {/* Icon */}
              <Play className="w-5 h-5 relative z-10" />
            </Button>
          )}

          {/* Web Playground Button (HTML, CSS, SCSS, JS, TS, Tailwind) */}
          {['html', 'css', 'scss', 'javascript', 'typescript', 'tailwind'].includes(currentLanguage || '') && onWebPlaygroundOpen && (
            <Button
              onClick={onWebPlaygroundOpen}
              className="relative group/web hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              size="sm"
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full opacity-0 group-hover/web:opacity-30 blur transition-all duration-300" />
              
              {/* Icon and Text */}
              <Code className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-semibold">Web Playground</span>
              <Zap className="w-4 h-4 text-yellow-300 relative z-10 animate-pulse" />
            </Button>
          )}
          
          {/* Mobile Web Playground Button */}
          {['html', 'css', 'scss', 'javascript', 'typescript', 'tailwind'].includes(currentLanguage || '') && onWebPlaygroundOpen && (
            <Button
              onClick={onWebPlaygroundOpen}
              className="sm:hidden relative group/web flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 p-0"
              size="sm"
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full opacity-0 group-hover/web:opacity-30 blur transition-all duration-300" />
              
              {/* Icon */}
              <Play className="w-5 h-5 relative z-10" />
            </Button>
          )}
          {/* Mobile Navigation */}
          {showNavigation && (
            <div className="flex lg:hidden items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                
                return (
                  <Link key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "gap-2 transition-all duration-300 ease-in-out group/mobile-btn",
                        isActive 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md" 
                          : "hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className={cn(
                        "transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap",
                        isActive 
                          ? "inline max-w-[200px] opacity-100 ml-0" 
                          : "max-w-0 opacity-0 -ml-2 group-hover/mobile-btn:max-w-[200px] group-hover/mobile-btn:opacity-100 group-hover/mobile-btn:ml-0 sm:inline sm:max-w-[200px] sm:opacity-100 sm:ml-0"
                      )}>
                        {item.label}
                      </span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Theme Toggle */}
          <div className="transition-transform duration-300 hover:scale-105">
            <ThemeToggle />
          </div>

          {/* Sign In Button for Guests */}
          {!user && (
            <Link href="/login">
              <Button
                className="relative group/signin bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md opacity-0 group-hover/signin:opacity-30 blur transition-all duration-300" />
                <span className="relative z-10 font-semibold">Sign In</span>
              </Button>
            </Link>
          )}

          {/* User Profile with Modern Dropdown */}
          {user && (
            user.isAnonymous ? (
              <Link href="/login">
                <button className="relative group/signin flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/signin:opacity-20 blur transition-all duration-300" />
                  
                  {/* Animated background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-purple-500/0 translate-x-[-100%] group-hover/signin:translate-x-[100%] transition-transform duration-700" />
                  
                  {/* Avatar Circle with Icon Animation */}
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md transition-all duration-300 group-hover/signin:shadow-lg">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <span className="absolute transition-all duration-300 group-hover/signin:opacity-0 group-hover/signin:scale-50">G</span>
                      <LogIn className="absolute h-4 w-4 transition-all duration-300 opacity-0 scale-50 group-hover/signin:opacity-100 group-hover/signin:scale-100" />
                    </div>
                  </div>
                  
                  {/* Sliding Text Animation (Hidden on Mobile) */}
                  <div className="hidden sm:block relative h-5 w-16 overflow-hidden">
                    <span className="absolute inset-0 flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 group-hover/signin:-translate-y-full group-hover/signin:opacity-0">
                      Guest
                    </span>
                    <span className="absolute inset-0 flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 translate-y-full opacity-0 group-hover/signin:translate-y-0 group-hover/signin:opacity-100">
                      Sign In
                    </span>
                  </div>
                </button>
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative group/avatar flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    {/* Gradient Glow on Hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/avatar:opacity-20 blur transition-all duration-300" />
                    
                    {/* Avatar Circle */}
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md transition-all duration-300 group-hover/avatar:shadow-lg">
                      <span className="relative z-10">{getUserInitials(user.displayName, user.email, user.isAnonymous)}</span>
                    </div>
                    
                    {/* User Name (Hidden on Mobile) */}
                    <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-300 relative z-10">
                      {(typeof user.displayName === 'string' ? user.displayName.split(' ')[0] : null) || (typeof user.email === 'string' ? user.email.split('@')[0] : null) || 'User'}
                    </span>
                  </button>
                </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-72 mt-2 p-0 overflow-hidden" align="end" forceMount>
                {/* Profile Header with Gradient */}
                <div className="relative p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                  </div>
                  
                  <div className="relative flex items-center gap-3">
                    {/* Large Avatar */}
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg border-2 border-white/30">
                      {getUserInitials(user.displayName, user.email, user.isAnonymous)}
                    </div>
                    
                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base truncate">
                        {user.isAnonymous ? 'Guest User' : ((typeof user.displayName === 'string' ? user.displayName : null) || (typeof user.email === 'string' ? user.email.split('@')[0] : null) || 'User')}
                      </p>
                      <p className="text-sm text-white/80 truncate">{user.isAnonymous ? 'Browsing as guest' : (typeof user.email === 'string' ? user.email : 'No email')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Menu Items */}
                <div className="p-2">
                  
                  <DropdownMenuItem className="cursor-pointer rounded-lg p-3 transition-colors">
                    <Settings className="mr-3 h-4 w-4 text-slate-500 dark:text-slate-400" />
                    <span className="font-medium">Settings</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="my-2" />
                  
                  {onLogout && (
                    <DropdownMenuItem 
                      onClick={onLogout} 
                      className="cursor-pointer rounded-lg p-3 text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400 focus:bg-red-50 dark:focus:bg-red-950/20 transition-colors"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      <span className="font-medium">Log out</span>
                    </DropdownMenuItem>
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            )
          )}
        </div>
      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent dark:via-blue-400/30" />

      {/* Feature Gate Modal */}
      <FeatureGateModal 
        isOpen={showFeatureGate}
        onClose={() => setShowFeatureGate(false)}
        featureName={gatedFeatureName}
      />
    </header>
  );
}
