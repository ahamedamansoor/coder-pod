'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import { useUser, useAuth, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
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
import { languages } from '@/data/languages';
import { Code2, Sparkles, Rocket, ArrowRight, Zap, Trophy, Target, LogOut, User as UserIcon, Settings, Linkedin, Heart, Mail, Github, Mic, Lock, Key, BookOpen, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import InterviewSimulator from '@/components/shared/interview-simulator';
import { cn } from '@/lib/utils';
import { InnovativeHeader } from '@/components/shared';

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

  // Apply brand styling: "CODER" in blue, "POD" in gray/white
  const renderStyledText = () => {
    const parts = displayedText.split(/(CODER|POD)/);
    return parts.map((part, index) => {
      if (part === 'CODER') {
        return (
          <span key={index} className="font-black tracking-tight" style={{ color: '#5B7FFF' }}>
            {part}
          </span>
        );
      } else if (part === 'POD') {
        return (
          <span key={index} className="font-black tracking-tight text-gray-900 dark:text-white">
            {part}
          </span>
        );
      }
      return <span key={index} className="text-gray-900 dark:text-white">{part}</span>;
    });
  };

  return (
    <span>
      {renderStyledText()}
      {currentIndex < text.length && (
        <span className="animate-pulse text-gray-900 dark:text-white">|</span>
      )}
    </span>
  );
}

// Helper function to get user initials
function getUserInitials(displayName: string | null | undefined, email: string | null | undefined): string {
  if (displayName) {
    const nameParts = displayName.trim().split(' ');
    if (nameParts.length >= 2) {
      return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    }
    return displayName.substring(0, 2).toUpperCase();
  }
  if (email) {
    return email.substring(0, 2).toUpperCase();
  }
  return 'U';
}

function DashboardContent() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { hideLoader } = useLoading();
  const [showContent, setShowContent] = useState(false);
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'testing'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);
  
  const { data: userData } = useDoc(userDocRef);

  // Filter languages based on category
  const frontendLanguages = ['html', 'css', 'javascript', 'react', 'vue', 'angular', 'scss', 'rxjs', 'tailwind', 'typescript'];
  const backendLanguages = ['java', 'spring', 'spring-boot'];
  const testingLanguages = ['playwright'];
  
  const filteredLanguages = languages.filter(lang => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        lang.name.toLowerCase().includes(query) ||
        lang.description?.toLowerCase().includes(query) ||
        lang.slug.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    
    // Category filter
    if (filter === 'all') return true;
    if (filter === 'frontend') return frontendLanguages.includes(lang.slug);
    if (filter === 'backend') return backendLanguages.includes(lang.slug);
    if (filter === 'testing') return testingLanguages.includes(lang.slug);
    return true;
  });

  useEffect(() => {
    if (!isUserLoading) {
      hideLoader();
      setTimeout(() => setShowContent(true), 100);
    }
  }, [isUserLoading, hideLoader]);

  // Check scroll position
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  // Scroll handler
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Check scroll on mount and when filtered languages change
  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [filteredLanguages]);

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
    dsa: 'from-violet-100/80 via-indigo-50/60 to-blue-100/80',
    rxjs: 'from-cyan-100/80 via-sky-50/60 to-indigo-100/80',
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
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-32" />
              <Skeleton className="h-9 w-9 rounded-md" />
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
      {/* Innovative Header with User */}
      <InnovativeHeader 
        currentPage="home" 
        user={user}
        onLogout={handleLogout}
      />

      {/* Hero Section - Full Width with 3D Perspective */}
      <div className="mb-12 lg:mb-16 perspective-1000">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          {/* Floating animated background elements - enhanced for visibility */}
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-400/25 dark:bg-blue-600/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s' }} />
          <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] bg-cyan-400/20 dark:bg-cyan-600/12 rounded-full blur-3xl animate-wave" style={{ animationDelay: '2s', animationDuration: '14s' }} />
          <div className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] bg-purple-400/25 dark:bg-purple-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '13s' }} />
          <div className="absolute bottom-1/4 -left-32 w-[480px] h-[480px] bg-pink-400/20 dark:bg-pink-600/12 rounded-full blur-3xl animate-wave" style={{ animationDelay: '3s', animationDuration: '15s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-400/15 dark:bg-indigo-600/10 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
          <div className="relative px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28">
            <div className="max-w-[1920px] mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6 animate-fade-scale">
                <Badge variant="secondary" className="relative text-sm font-semibold px-4 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-2 overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer opacity-40" />
                  <Sparkles className="relative w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="relative">AI-Powered Learning Platform</span>
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                {showContent ? (
                  <TypingEffect text="Welcome to CODER POD!!!" speed={80} />
                ) : (
                  <>
                    <span className="text-gray-900 dark:text-white">Welcome to </span>
                    <span className="font-black tracking-tight" style={{ color: '#5B7FFF' }}>CODER</span>
                    {' '}
                    <span className="font-black tracking-tight text-gray-900 dark:text-white">POD</span>
                    <span className="text-gray-900 dark:text-white">!!!</span>
                  </>
                )}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
                Your personal AI-powered coding tutor. Master programming languages with interactive lessons, 
                quick reference cheatsheets, real-time feedback, and hands-on practice.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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
                <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:-rotate-3 cursor-pointer animate-fade-scale" style={{ animationDelay: '0.3s' }}>
                  <BookOpen className="w-5 h-5 text-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Quick Reference
                </div>
                <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-pink-200/50 dark:border-pink-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                  <MapPin className="w-5 h-5 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Learning Roadmaps
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

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/30 dark:border-slate-700/50 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-200"
              />
              <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-all duration-200',
                  filter === 'all' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white/20 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-800/60'
                )}
              >
                All
              </button>
              <button
                onClick={() => setFilter('frontend')}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-all duration-200',
                  filter === 'frontend' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white/20 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-800/60'
                )}
              >
                Frontend
              </button>
              <button
                onClick={() => setFilter('backend')}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-all duration-200',
                  filter === 'backend' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white/20 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-800/60'
                )}
              >
                Backend
              </button>
              <button
                onClick={() => setFilter('testing')}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-all duration-200',
                  filter === 'testing' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white/20 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-800/60'
                )}
              >
                Testing
              </button>
            </div>
          </div>

          {/* Current Filter Display */}
          {filter !== 'all' && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {filter === 'frontend' && 'Frontend'}
                {filter === 'backend' && 'Backend'}
              </h3>
            </div>
          )}

          {/* Results Count */}
          {searchQuery && (
            <div className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              Found {filteredLanguages.length} {filteredLanguages.length === 1 ? 'language' : 'languages'}
            </div>
          )}

          {/* Scrollable Container with Navigation */}
          <div className="relative group/carousel">
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute -left-12 sm:-left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-700/50 text-white shadow-xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute -right-12 sm:-right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-700/50 text-white shadow-xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden scroll-smooth pb-4 scrollbar-hide"
            >
              <div className="inline-grid grid-rows-2 grid-flow-col gap-5 auto-cols-[minmax(280px,1fr)] sm:auto-cols-[minmax(300px,1fr)]">
            {filteredLanguages.map((lang, index) => {
              const topicCount = lang.topics?.length ?? 0;
              const summary = lang.description ?? lang.topics?.[0]?.explanation ?? 'Interactive lessons curated for every learning style.';
              const focusLabel = lang.topics?.find((topic) => topic.category)?.category ?? 'Core Track';
              const accent = accentMap[lang.slug] ?? 'from-slate-400 via-slate-600 to-slate-800';
              
              // Calculate completion status from Firestore
              const completedTopicsArray = userData?.completedTopics?.[lang.slug] || [];
              const completedCount = Array.isArray(completedTopicsArray) ? completedTopicsArray.length : 0;
              // Exclude 'learning-plan' from total count
              const actualTopicCount = lang.topics?.filter(t => t.slug !== 'learning-plan').length ?? 0;
              const completionPercentage = actualTopicCount > 0 ? Math.round((completedCount / actualTopicCount) * 100) : 0;
              const isStarted = completedCount > 0;
              const isCompleted = completionPercentage === 100;

              return (
                <Link 
                  key={lang.slug}
                  href={`/languages/${lang.slug}/learning-plan`} 
                  className={cn(
                    'group relative h-full overflow-hidden rounded-2xl cursor-pointer block',
                    // Glass morphism base - transparent with blur
                    'bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl',
                    // Borders with subtle gradient
                    'border border-white/20 dark:border-white/10',
                    'shadow-[0_8px_32px_rgba(31,38,135,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
                    // Glass reflection layer
                    'after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-white/8 after:via-transparent after:to-transparent after:pointer-events-none',
                    // Smooth transitions
                    'transition-all duration-500 ease-out',
                    showContent ? 'animate-in fade-in zoom-in-95' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Holographic shimmer effect */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shine-glow_1.5s_ease-in-out] pointer-events-none" />
                  </div>

                  <div className="relative p-5">
                  {/* Progress Badge - Top Right */}
                  <div className="absolute top-3 right-3">
                    <div className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full",
                      "border-2 font-bold text-sm",
                      completionPercentage === 0 && "border-slate-600 text-slate-400",
                      completionPercentage > 0 && completionPercentage < 100 && "border-blue-500 text-blue-400",
                      completionPercentage === 100 && "border-green-500 text-green-400"
                    )}>
                      {completionPercentage}%
                    </div>
                  </div>

                  {/* Language Title */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{lang.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{actualTopicCount} Topics</p>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-3">
                    {isCompleted && (
                      <Badge className="bg-green-500/10 text-green-400 border border-green-500/30 text-xs px-2 py-0.5">
                        Active
                      </Badge>
                    )}
                    {isStarted && !isCompleted && (
                      <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs px-2 py-0.5">
                        Active
                      </Badge>
                    )}
                    {!isStarted && (
                      <Badge className="bg-slate-700/50 text-slate-300 border border-slate-600/50 text-xs px-2 py-0.5">
                        New
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs">
                      <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-white/10">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        <span className="text-slate-900 dark:text-white font-medium">{completedCount}/{actualTopicCount}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-white/10">
                        <Target className="w-3 h-3 text-blue-400" />
                        <span className="text-slate-900 dark:text-white font-medium">{actualTopicCount - completedCount} left</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">{summary}</p>

                  {/* Start Button */}
                  <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">
                    Start Learning
                  </button>
                  </div>
                </Link>
              );
            })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-16 lg:mb-20">
        <div className="max-w-[1920px] mx-auto">
          <Card className="relative overflow-hidden border-2 border-gradient-to-r from-emerald-200/50 to-cyan-200/50 dark:from-emerald-900/30 dark:to-cyan-900/30 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20 shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 left-1/4 w-64 h-64 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    AI-Powered Features
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Practice with AI Interview Simulator across all languages
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Feature 1 */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                      <Mic className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Mock Interviews</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Practice technical interviews with AI-generated questions tailored to your chosen language
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-teal-200/50 dark:border-teal-800/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                      <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Real-time Feedback</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get instant, constructive feedback on your answers with ideal solutions
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-800/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                      <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">All Languages</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available for JavaScript, React, Java, Spring, HTML, CSS and more
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col items-center gap-4 justify-center">
                <InterviewSimulator language="JavaScript">
                  <Button className="relative group overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-lg">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Mic className="mr-3 h-5 w-5 relative z-10" />
                    <span className="relative z-10 font-semibold">Start AI Interview</span>
                  </Button>
                </InterviewSimulator>
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  Choose from 7 AI providers (Gemini, ChatGPT, Claude, Perplexity, Groq, Mistral, Cohere)
                </p>
              </div>
            </CardContent>
          </Card>
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

      {/* Footer Section */}
      <footer className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/20 border-t border-slate-200/50 dark:border-slate-800/50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
          <div className="max-w-[1920px] mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* About Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">
                    <span className="font-black" style={{ color: '#5B7FFF' }}>CODER</span>
                    {' '}
                    <span className="font-black text-gray-900 dark:text-white">POD</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your AI-powered coding companion for mastering programming languages through interactive lessons and hands-on practice.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Empowering developers worldwide</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/notes" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      My Notes
                    </Link>
                  </li>
                  <li>
                    <a href="#languages" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Languages
                    </a>
                  </li>
                </ul>
              </div>

              {/* Developer Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Connect</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                    <span>Crafted with passion</span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.linkedin.com/in/ahamedamansoor/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                    >
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="mailto:ahamedamansoor@gmail.com" 
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Mail className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="mb-8">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-800/30 hover:border-purple-400/50 dark:hover:border-purple-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        <div className="relative p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                          <Heart className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 text-center sm:text-left space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Enjoying your learning journey?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We're dedicated to keeping all content free for everyone. Your support helps us create more quality resources and maintain this platform for the community.
                      </p>
                    </div>
                    
                    {/* CTA Section */}
                    <div className="flex-shrink-0">
                      <a 
                        href="https://buymeacoffee.com/ahamedamansoor" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          console.log('Support Us clicked - redirecting to:', e.currentTarget.href);
                        }}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 cursor-pointer"
                      >
                        <span className="text-xl group-hover/btn:scale-125 transition-transform">☕</span>
                        <span>Support Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-transparent via-slate-50 dark:via-slate-950 to-transparent px-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>Built with Next.js, TypeScript & Firebase</span>
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar - Developer Credits */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-500" />
                  <span>© {new Date().getFullYear()} CODER POD. All rights reserved.</span>
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Developed & Maintained by</span>
                <a 
                  href="https://www.linkedin.com/in/ahamedamansoor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="relative">
                    Ahamed Mansoor A
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </div>
            </div>

            {/* Subtle Animation Indicator */}
            <div className="flex justify-center mt-6 opacity-30 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
