'use client';

import { Suspense, useEffect, useState } from 'react';
import { useUser, useAuth } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { useLoading } from '@/hooks/use-loading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { languages } from '@/app/data';
import { Code2, Sparkles, Rocket, ArrowRight, Zap, Trophy, Target, LogOut, User as UserIcon, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/layout/logo';
import { ThemeToggle } from '@/components/shared/layout/theme-toggle';

function TypingEffect({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

function DashboardContent() {
  const { user, isUserLoading } = useUser();
  const { hideLoader } = useLoading();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isUserLoading) {
      hideLoader();
      setTimeout(() => setShowContent(true), 100);
    }
  }, [isUserLoading, hideLoader]);

  const auth = useAuth();
  const router = useRouter();
  const accentMap: Record<string, string> = {
    javascript: 'from-amber-100/80 via-yellow-50/60 to-amber-100/80',
    html: 'from-rose-100/80 via-orange-50/60 to-rose-100/80',
    css: 'from-sky-100/80 via-blue-50/60 to-indigo-100/80',
    scss: 'from-pink-100/80 via-fuchsia-50/60 to-rose-100/80',
    react: 'from-cyan-100/80 via-sky-50/60 to-blue-100/80',
    java: 'from-orange-100/80 via-amber-50/60 to-pink-100/80',
    spring: 'from-emerald-100/80 via-green-50/60 to-lime-100/80',
    'spring-boot': 'from-teal-100/80 via-emerald-50/60 to-green-100/80',
  };

  const handleLogout = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/login');
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex flex-col min-h-screen min-w-full w-screen bg-background overflow-x-hidden standalone-page" data-route="dashboard">
        <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <Skeleton className="h-8 w-32" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="py-16">
            <div className="text-center mb-12">
              <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-6 w-1/2 mx-auto" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen min-w-full w-screen bg-background overflow-x-hidden standalone-page" data-route="dashboard">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                      <AvatarFallback>
                        {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.displayName || 'User'}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width with 3D Perspective */}
      <div className="mb-12 lg:mb-16 perspective-1000">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          {/* Floating animated background elements */}
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float animate-breathe" />
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-wave" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400/15 dark:bg-pink-600/10 rounded-full blur-3xl animate-wave" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
          <div className="relative px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28">
            <div className="max-w-[1920px] mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6 animate-fade-scale">
                <Badge variant="secondary" className="relative text-sm font-semibold px-4 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-2 overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer opacity-40" />
                  <Sparkles className="relative w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="relative">AI-Powered Learning Platform</span>
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {showContent ? (
                  <TypingEffect text="Welcome to CoderPod!" speed={80} />
                ) : (
                  "Welcome to CoderPod!"
                )}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
                Your personal AI-powered coding tutor. Master programming languages with interactive lessons, 
                real-time feedback, and hands-on practice.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-slide-in-left">
                  <Zap className="w-5 h-5 text-yellow-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Interactive Lessons
                </div>
                <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:-rotate-3 cursor-pointer animate-fade-scale" style={{ animationDelay: '0.1s' }}>
                  <Trophy className="w-5 h-5 text-purple-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Track Progress
                </div>
                <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <Target className="w-5 h-5 text-green-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Achieve Goals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-16 lg:mb-20">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-block mb-4 animate-soft-bounce">
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-800/50 hover:scale-110 transition-transform cursor-pointer overflow-hidden animate-gradient-shift">
                <div className="absolute inset-0 animate-shimmer opacity-30" />
                <Code2 className="relative w-4 h-4 text-primary animate-scale-pulse" />
                <span className="relative text-sm font-medium text-primary">Choose Your Path</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
              Start Your Learning Journey
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a language and begin mastering programming with our interactive courses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
            {languages.map((lang, index) => {
              const topicCount = lang.topics?.length ?? 0;
              const summary = lang.description ?? lang.topics?.[0]?.explanation ?? 'Interactive lessons curated for every learning style.';
              const focusLabel = lang.topics?.find((topic) => topic.category)?.category ?? 'Core Track';
              const accent = accentMap[lang.slug] ?? 'from-slate-400 via-slate-600 to-slate-800';
              
              // Calculate completion status
              const userProgress = user?.progress?.[lang.slug] || {};
              const completedTopics = Object.values(userProgress).filter((status: any) => status?.completed).length;
              const completionPercentage = topicCount > 0 ? Math.round((completedTopics / topicCount) * 100) : 0;
              const isStarted = completedTopics > 0;
              const isCompleted = completionPercentage === 100;

              return (
                <Card
                  key={lang.slug}
                  className={cn(
                    'group relative h-full overflow-hidden rounded-3xl border border-white/40 bg-white/70 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-2xl transition-all duration-500 ease-out',
                    'hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]',
                    "before:absolute before:inset-0 before:rounded-[26px] before:border before:border-white/30 before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:opacity-100",
                    'after:absolute after:inset-0 after:rounded-[26px] after:bg-gradient-to-br after:from-white/5 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100',
                    showContent ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 110}ms`, animationFillMode: 'forwards' }}
                >
                  <Link 
                    href={`/${lang.slug}`} 
                    className="relative block h-full rounded-[22px] bg-gradient-to-br from-white/60 via-white/40 to-white/30 dark:from-slate-950/40 dark:via-slate-900/30 dark:to-slate-900/20 p-1.5 transition-all duration-500 cursor-pointer"
                    onClick={() => console.log(`Navigating to: /${lang.slug}`)}
                  >
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
                      {/* Soft ambient glow with rotation */}
                      <div
                        className={cn(
                          'absolute -top-20 -right-12 h-48 w-48 rounded-full blur-[64px] opacity-20 group-hover:opacity-40 transition-all duration-700 ease-out animate-rotate-glow',
                          `bg-gradient-to-br ${accent}`
                        )}
                      />
                      {/* Top accent line with shimmer */}
                      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 group-hover:opacity-80 group-hover:scale-x-110 transition-all duration-700">
                        <div className="absolute inset-0 animate-shimmer opacity-60" />
                      </div>
                      {/* Bottom soft glow with breathing */}
                      <div className="absolute bottom-8 left-1/4 h-32 w-32 rounded-full bg-primary/[0.03] dark:bg-primary/[0.06] blur-[48px] group-hover:scale-125 group-hover:translate-y-2 transition-all duration-700 animate-breathe" />
                      {/* Radial overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.04),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    <div className="relative flex h-full flex-col rounded-[20px] bg-white/50 dark:bg-slate-950/50 p-6 transition-all duration-500 group-hover:bg-white/60 dark:group-hover:bg-slate-950/60">
                      <CardHeader className="space-y-4 p-0">
                        {/* Header with Icon and Title */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                'relative grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg transition-all duration-500 ease-out group-hover:shadow-xl group-hover:scale-110 overflow-hidden',
                                `bg-gradient-to-br ${accent}`,
                                'animate-gradient-shift'
                              )}
                            >
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-40" />
                              <Code2 className="relative w-5 h-5 text-slate-700 dark:text-white transition-transform duration-500 group-hover:rotate-12" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-primary">{lang.name}</CardTitle>
                              <p className="text-xs text-muted-foreground/70 mt-0.5">{topicCount} Modules</p>
                            </div>
                          </div>
                          
                          {/* Status Badge */}
                          {isCompleted && (
                            <Badge className="bg-green-500/90 text-white text-xs px-2.5 py-1 rounded-full animate-scale-pulse flex items-center gap-1">
                              <span>✓</span> Complete
                            </Badge>
                          )}
                          {isStarted && !isCompleted && (
                            <Badge className="bg-blue-500/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                              <span>⚡</span> In Progress
                            </Badge>
                          )}
                          {!isStarted && (
                            <Badge variant="outline" className="text-xs px-2.5 py-1 rounded-full border-muted-foreground/30">
                              New
                            </Badge>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 transition-colors duration-300 group-hover:text-muted-foreground">{summary}</p>

                        {/* Progress Section */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-muted-foreground/70">Progress</span>
                            <span className="text-sm font-bold text-primary">{completionPercentage}%</span>
                          </div>
                          <div className="relative h-2.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 overflow-hidden">
                            <div 
                              className={cn(
                                "absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out",
                                `bg-gradient-to-r ${accent.replace('/80', '').replace('/60', '')}`,
                                completionPercentage === 0 && "w-0",
                                completionPercentage === 100 && "animate-gradient-shift"
                              )}
                              style={{ width: `${completionPercentage}%` }}
                            />
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="mt-auto p-0 pt-4">
                        <div 
                          className="group/button relative w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/25 dark:shadow-blue-500/15 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-500/35 dark:hover:shadow-blue-500/25 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 dark:hover:from-blue-400 dark:hover:via-indigo-400 dark:hover:to-purple-400 hover:scale-[1.03] hover:-translate-y-0.5 overflow-hidden px-5 py-2.5 text-center cursor-pointer active:scale-[0.98] select-none"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            // Create ripple effect
                            const button = e.currentTarget;
                            const rect = button.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            
                            const ripple = document.createElement('span');
                            ripple.className = 'click-ripple';
                            ripple.style.left = `${x}px`;
                            ripple.style.top = `${y}px`;
                            button.appendChild(ripple);
                            
                            // Add flash effect
                            button.classList.add('animate-click-flash');
                            
                            // Navigate after animation starts
                            setTimeout(() => {
                              router.push(`/${lang.slug}`);
                            }, 150);
                            
                            setTimeout(() => {
                              ripple.remove();
                              button.classList.remove('animate-click-flash');
                            }, 600);
                          }}
                        >
                          {/* Waving border effect - only visible on hover */}
                          <div className="absolute -inset-[2px] rounded-full opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 dark:from-blue-300 dark:via-purple-300 dark:to-indigo-300 animate-wave-border blur-[1px]" />
                          </div>
                          
                          {/* Simple gradient overlay */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/0 to-white/20 group-hover/button:to-white/30 transition-all duration-300 pointer-events-none" />
                          
                          {/* Click indicator */}
                          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 active:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          
                          <span className="relative text-sm font-medium tracking-wide group-hover/button:font-semibold transition-all duration-200 pointer-events-none">
                            Start Learning
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/10 dark:to-indigo-950/10 py-12 sm:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 backdrop-blur-sm border-2 border-blue-200/50 dark:border-blue-800/30 hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-4 hover:rotate-3 hover:scale-105 cursor-pointer transform-gpu">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">{languages.length}</div>
                <div className="text-base text-muted-foreground font-semibold">Languages Available</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-800/30 hover:border-purple-400/50 dark:hover:border-purple-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-4 hover:-rotate-3 hover:scale-105 cursor-pointer transform-gpu">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-125 group-hover:rotate-180 transition-all duration-700">∞</div>
                <div className="text-base text-muted-foreground font-semibold">Interactive Lessons</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-green-950/20 dark:to-gray-900 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-800/30 hover:border-green-400/50 dark:hover:border-green-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-4 hover:rotate-3 hover:scale-105 cursor-pointer transform-gpu">
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-3 group-hover:scale-125 transition-transform duration-500">
                  <Rocket className="w-12 h-12 sm:w-14 sm:h-14 mx-auto text-green-600 dark:text-green-400 group-hover:-rotate-45 group-hover:translate-y-2 transition-all duration-500" />
                </div>
                <div className="text-base text-muted-foreground font-semibold">Start Learning Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
