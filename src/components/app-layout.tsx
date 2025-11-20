'use client';
import React, { useState, useEffect, useRef } from 'react';
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
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Bot, Code, LogOut, User, Zap, LogIn, Target, BrainCircuit, Rocket, CheckCircle, TrendingUp, Award, BookOpen, Clock, Star, Activity, ChevronRight, Sparkles, Trophy, Calendar, BarChart3 } from 'lucide-react';
import { LearnModal } from './learn-modal';
import { ThemeToggle } from './theme-toggle';
import { useUser, useAuth, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { useRouter, useSearchParams } from 'next/navigation';
import { doc, collection, query, orderBy, limit, where, onSnapshot } from 'firebase/firestore';
import { ScheduleStudyModal } from './schedule-study-modal';
import { StudySessionsWidget } from './study-sessions-widget';

export default function AppLayout() {
  const { user } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isNewUser = searchParams.get('isNewUser') === 'true';
  
  // Animation states
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    coursesCompleted: 0,
    hoursLearned: 0,
    streak: 0,
    achievements: 0
  });

  // Live activity data
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [isLoadingActivities, setIsLoadingActivities] = useState(true);
  
  // Check if user is guest/anonymous
  const isGuestUser = user?.isAnonymous || false;

  // Mock user stats - in real app, fetch from Firebase
  const userStats = {
    coursesCompleted: 12,
    hoursLearned: 47,
    streak: 15,
    achievements: 8,
    currentLevel: 'Intermediate',
    nextMilestone: 'Advanced',
    progressToNext: 68
  };

  // Multiple phrases for typing effect
  const typingPhrases = [
    'Welcome to Your AI-Powered Learning Space',
    'Master Programming with Interactive Tutorials',
    'Build Real Projects with Expert Guidance',
    'Learn, Code, and Grow with AI Assistance',
    'Transform Your Coding Skills Today'
  ];

  // Enhanced typing animation effect with multiple phrases
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      const currentPhrase = typingPhrases[phraseIndex];
      
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeWriter, 80);
        } else {
          // Pause at end of phrase, then start deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, 2000);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setTypedText(currentPhrase.slice(0, charIndex - 1));
          charIndex--;
          timeoutId = setTimeout(typeWriter, 30);
        } else {
          // Move to next phrase
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % typingPhrases.length;
          setCurrentPhraseIndex(phraseIndex);
          
          // Show stats after first phrase completes
          if (!showStats) {
            setShowStats(true);
          }
          
          // Start typing next phrase
          timeoutId = setTimeout(typeWriter, 500);
        }
      }
    };

    // Start the typing effect
    typeWriter();

    // Show stats immediately after 3 seconds for better UX
    const statsTimer = setTimeout(() => {
      setShowStats(true);
    }, 3000);

    // Fallback: ensure stats show after 5 seconds regardless
    const fallbackTimer = setTimeout(() => {
      if (!showStats) {
        setShowStats(true);
      }
    }, 5000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      clearTimeout(statsTimer);
      clearTimeout(fallbackTimer);
    };
  }, []); // Empty dependency array to run only once

  // Stats animation effect
  useEffect(() => {
    if (showStats) {
      const animateStats = () => {
        const duration = 1500;
        const steps = 60;
        const stepDuration = duration / steps;
        
        let step = 0;
        const timer = setInterval(() => {
          const progress = step / steps;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          setAnimatedStats({
            coursesCompleted: Math.round(userStats.coursesCompleted * easeOut),
            hoursLearned: Math.round(userStats.hoursLearned * easeOut),
            streak: Math.round(userStats.streak * easeOut),
            achievements: Math.round(userStats.achievements * easeOut)
          });
          
          step++;
          if (step > steps) clearInterval(timer);
        }, stepDuration);
      };
      
      animateStats();
    }
  }, [showStats]);

  // Fetch live activity data from Firebase
  useEffect(() => {
    if (!user || !firestore) {
      setIsLoadingActivities(false);
      return;
    }
    
    // For guest users, show mock data instead of trying to fetch from Firestore
    if (isGuestUser) {
      setRecentActivities([
        {
          id: 'guest-1',
          action: 'Started',
          item: 'Guest Learning Session',
          timestamp: { toDate: () => new Date() },
          type: 'guest_session',
          icon: 'User',
          color: 'text-blue-600'
        },
        {
          id: 'guest-2', 
          action: 'Exploring',
          item: 'Dashboard Features',
          timestamp: { toDate: () => new Date(Date.now() - 5 * 60 * 1000) },
          type: 'guest_exploration',
          icon: 'Sparkles',
          color: 'text-purple-600'
        }
      ]);
      setIsLoadingActivities(false);
      return;
    }

    const activitiesRef = collection(firestore, 'users', user.uid, 'activities');
    const activitiesQuery = query(
      activitiesRef,
      orderBy('timestamp', 'desc'),
      limit(10)
    );

    const unsubscribe = onSnapshot(activitiesQuery, (snapshot) => {
      const activities = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setRecentActivities(activities);
      setIsLoadingActivities(false);
    }, (error) => {
      console.error('Error fetching activities:', error);
      setIsLoadingActivities(false);
    });

    return () => unsubscribe();
  }, [user, firestore, isGuestUser]);

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore || isGuestUser) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore, isGuestUser]);

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

  // Helper function to format timestamp to relative time
  const formatRelativeTime = (timestamp: any) => {
    if (!timestamp) return 'Unknown time';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  // Helper function to get icon component from string
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      CheckCircle,
      BookOpen,
      Award,
      Code,
      Trophy,
      Target,
      Activity,
      User,
      Sparkles,
    };
    return iconMap[iconName] || Activity;
  };

  // Helper function to get activity color based on type
  const getActivityColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      course_completion: 'text-green-600',
      course_start: 'text-blue-600',
      achievement: 'text-yellow-600',
      practice: 'text-purple-600',
      lesson_complete: 'text-emerald-600',
      quiz_passed: 'text-indigo-600',
      guest_session: 'text-blue-600',
      guest_exploration: 'text-purple-600'
    };
    return colorMap[type] || 'text-gray-600';
  };

  return (
    <div id="dashboard-page" data-test="dashboard-page" className="flex flex-col min-h-screen bg-muted/40">
      {/* Guest User Banner */}
      {isGuestUser && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-b border-blue-200 dark:border-blue-800">
          <div className="px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    You're browsing as a guest
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Sign up to save your progress and access all features
                  </p>
                </div>
              </div>
              <Button 
                size="sm" 
                onClick={() => router.push('/signup')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-4">
              <ScheduleStudyModal>
                  <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                  </Button>
              </ScheduleStudyModal>
              <LearnModal autoOpen={isNewUser} />
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
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Hero Section with Typing Animation */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            AI-Powered Learning Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 min-h-[4rem] flex items-center justify-center">
            {typedText}
            <span className="animate-pulse ml-1 text-primary">|</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
            Master new programming languages with interactive tools, AI assistance, and a structured learning path.
          </p>
          
          {/* Quick Stats Dashboard */}
          {showStats && !isGuestUser && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '2.5s', animationFillMode: 'forwards'}}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Courses</span>
                </div>
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{animatedStats.coursesCompleted}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 p-4 rounded-xl border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">Hours</span>
                </div>
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{animatedStats.hoursLearned}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 p-4 rounded-xl border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Streak</span>
                </div>
                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{animatedStats.streak}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 p-4 rounded-xl border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Awards</span>
                </div>
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{animatedStats.achievements}</div>
              </div>
            </div>
          )}

          {/* Progress Section */}
          {showStats && !isGuestUser && (
            <div className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl animate-fade-in-up" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Progress to {userStats.nextMilestone}</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {userStats.currentLevel}
                </Badge>
              </div>
              <Progress value={userStats.progressToNext} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">{userStats.progressToNext}% complete</p>
            </div>
          )}
        </div>

        {/* Interactive Feature Cards with Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="flex-row items-center gap-4 relative z-10">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <Zap className="w-6 h-6" />
              </div>
              <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">AI-Powered Explanations</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-4">
                Whether you're a student learning new concepts or a professional needing a quick refresher, our AI simplifies complex topics into easy-to-understand explanations at a glance.
              </p>
              <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore AI Features</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="flex-row items-center gap-4 relative z-10">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <Code className="w-6 h-6" />
              </div>
              <CardTitle className="group-hover:text-green-600 transition-colors duration-300">Interactive Coding Platform</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-4">
                Test your knowledge directly in the browser with our integrated code editor. Run code snippets and see the output immediately.
              </p>
              <div className="flex items-center text-green-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Start Coding</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="flex-row items-center gap-4 relative z-10">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <Bot className="w-6 h-6" />
              </div>
              <CardTitle className="group-hover:text-purple-600 transition-colors duration-300">Personalized Learning</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-4">
                Follow a structured learning path, track your progress, and get personalized feedback to accelerate your learning journey.
              </p>
              <div className="flex items-center text-purple-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Learning Path</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Activity Feed & Sessions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Recent Learning Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoadingActivities ? (
                  Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg animate-pulse">
                      <div className="w-8 h-8 bg-muted rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                  ))
                ) : recentActivities.length > 0 ? (
                  recentActivities.map((activity) => {
                    const IconComponent = getIconComponent(activity.icon || 'Activity');
                    const activityColor = activity.color || getActivityColor(activity.type);
                    
                    return (
                      <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                        <div className={`p-2 rounded-full bg-muted ${activityColor}`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            <span className="text-muted-foreground">{activity.action}</span> {activity.item}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatRelativeTime(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8">
                    <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No recent activity found</p>
                    <p className="text-sm text-muted-foreground mt-1">Start learning to see your progress here!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <StudySessionsWidget />
          </div>
        </div>

        {/* Why Coder Pod Stands Out - Modern Design */}
        <div className="relative overflow-hidden bg-gradient-to-br from-card/50 via-card/30 to-primary/5 backdrop-blur-sm p-12 rounded-3xl border border-border/50">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                What Makes Us Different
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Coder Pod Stands Out</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Experience the future of programming education with our innovative approach</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-600 p-6 rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">Learn by Doing, Not Just Watching</h3>
                <p className="text-muted-foreground leading-relaxed">Stop the tutorial fatigue. Our integrated AI-powered code editor lets you run and experiment with code directly in your browser, turning passive learning into active practice.</p>
              </div>
              
              <div className="group text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-600 p-6 rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <BrainCircuit className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-purple-600 transition-colors duration-300">Your Personal AI Tutor</h3>
                <p className="text-muted-foreground leading-relaxed">Stuck on a concept? No need to open another tab. Our AI assistant can simplify complex topics, provide analogies, and answer your specific questions, 24/7.</p>
              </div>
              
              <div className="group text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-600 p-6 rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-green-600 transition-colors duration-300">Guided Path to Mastery</h3>
                <p className="text-muted-foreground leading-relaxed">Don't get lost in random tutorials. We provide a structured, expert-designed learning roadmap that guides you from the basics to advanced topics, with progress tracking to keep you motivated.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
