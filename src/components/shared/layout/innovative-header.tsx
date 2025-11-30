'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, FileText, Map, Sparkles, LogOut, Settings, Menu, Shield } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { LanguageSwitcher } from './language-switcher';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { isUserAdmin } from '@/lib/admin';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface InnovativeHeaderProps {
  currentPage?: 'home' | 'roadmaps' | 'cheatsheets' | 'dashboard' | 'learning';
  showNavigation?: boolean;
  user?: {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
  } | null;
  onLogout?: () => void;
  // Learning page specific props
  showSidebarTrigger?: boolean;
  showLanguageSwitcher?: boolean;
}

function getUserInitials(displayName?: string | null, email?: string | null): string {
  if (displayName) {
    const names = displayName.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return displayName.substring(0, 2).toUpperCase();
  }
  if (email) {
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
  showLanguageSwitcher = false
}: InnovativeHeaderProps) {
  const navItems = [
    { href: '/', label: 'Home', icon: Home, page: 'home' },
    { href: '/roadmaps', label: 'Roadmaps', icon: Map, page: 'roadmaps' },
    { href: '/cheatsheets', label: 'Cheatsheets', icon: FileText, page: 'cheatsheets' },
  ];

  return (
    <header className="relative border-b border-slate-200/50 dark:border-slate-800/50 flex-shrink-0 sticky top-0 z-50 overflow-hidden group">
      {/* Elegant Gradient Background with Glass Morphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/20 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/10 dark:to-purple-950/10 backdrop-blur-xl">
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

          {/* Language Switcher on Learning Pages */}
          {showLanguageSwitcher && (
            <div className="sm:block">
              <LanguageSwitcher />
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
                  <Link key={item.href} href={item.href}>
                    <button
                      className={cn(
                        "relative group/btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-98",
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10"
                          : "text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80"
                      )}
                    >
                      {/* Subtle active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />
                      )}
                      <Icon className={cn("w-4 h-4 relative z-10 transition-transform duration-300", "group-hover/btn:scale-110")} />
                      <span className="relative z-10 font-medium">{item.label}</span>
                    </button>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        {/* Right Side - Theme Toggle & User */}
        <div className="flex items-center gap-3">
          {/* Mobile Navigation */}
          {showNavigation && (
            <div className="flex lg:hidden items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "gap-2 transition-all duration-300",
                        isActive && "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{item.label}</span>
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

          {/* User Profile with Modern Dropdown */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative group/avatar flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/avatar:opacity-20 blur transition-all duration-300" />
                  
                  {/* Avatar Circle */}
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md transition-all duration-300 group-hover/avatar:shadow-lg">
                    <span className="relative z-10">{getUserInitials(user.displayName, user.email)}</span>
                  </div>
                  
                  {/* User Name (Hidden on Mobile) */}
                  <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-300 relative z-10">
                    {user.displayName?.split(' ')[0] || user.email?.split('@')[0] || 'User'}
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
                      {getUserInitials(user.displayName, user.email)}
                    </div>
                    
                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base truncate">{user.displayName || user.email?.split('@')[0] || 'User'}</p>
                      <p className="text-sm text-white/80 truncate">{user.email}</p>
                    </div>
                  </div>
                </div>
                
                {/* Menu Items */}
                <div className="p-2">
                  {isUserAdmin(user) && (
                    <>
                      <Link href="/admin">
                        <DropdownMenuItem className="cursor-pointer rounded-lg p-3 transition-colors">
                          <Shield className="mr-3 h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">Admin Dashboard</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator className="my-2" />
                    </>
                  )}
                  
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
          )}
        </div>
      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent dark:via-blue-400/30" />
    </header>
  );
}
