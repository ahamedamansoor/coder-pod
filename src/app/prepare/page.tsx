'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InterviewHeader from '@/components/shared/interview-header';
import { 
  BookOpen, 
  Code, 
  Palette, 
  FileText, 
  Play, 
  CheckCircle, 
  Clock,
  ArrowRight,
  Layers,
  Search,
  Code2,
  Server,
  TestTube,
  Target,
  TrendingUp,
  Building2,
  Database,
  Lock,
  Sparkles,
  LogIn
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LearningPathTitle } from '@/components/shared';
import Link from 'next/link';
import { useEnhancedAuth } from '@/lib/auth/enhanced-auth-context';
import { useRouter } from 'next/navigation';

interface LanguageCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats: {
    totalQuestions: number;
    difficulty: string;
    estimatedTime: string;
    progress: number;
  };
  features: string[];
  href: string;
  status: 'learning' | 'available';
}

const languagesData: LanguageCard[] = [
  {
    title: 'HTML',
    description: 'Master the foundation of web development with comprehensive HTML interview questions',
    icon: <Code className="w-8 h-8" />,
    color: 'orange',
    stats: {
      totalQuestions: 82,
      difficulty: 'Beginner to Advanced',
      estimatedTime: '1-2 hours',
      progress: 100
    },
    features: [
      'Audio & Video Elements',
      'Canvas & SVG Graphics',
      'Web Storage APIs',
      'Geolocation API',
      'WebSockets & SSE',
      'Maps & Embedding'
    ],
    href: '/prepare/html/interview-questions',
    status: 'available'
  },
  {
    title: 'CSS',
    description: 'Deep dive into styling, layout, and modern CSS techniques for interviews',
    icon: <Palette className="w-8 h-8" />,
    color: 'blue',
    stats: {
      totalQuestions: 40,
      difficulty: 'Beginner to Advanced',
      estimatedTime: '3-4 hours',
      progress: 0
    },
    features: [
      'CSS Selectors',
      'Layout & Positioning',
      'Flexbox & Grid',
      'Animations & Transitions',
      'Responsive Design'
    ],
    href: '/prepare/css/interview-questions',
    status: 'available'
  },
  {
    title: 'JavaScript',
    description: 'Comprehensive JavaScript concepts from basics to advanced topics',
    icon: <FileText className="w-8 h-8" />,
    color: 'yellow',
    stats: {
      totalQuestions: 24,
      difficulty: 'Beginner to Expert',
      estimatedTime: '1-2 hours',
      progress: 100
    },
    features: [
      'ES6+ Features',
      'Async Programming',
      'DOM Manipulation',
      'Design Patterns',
      'Error Handling'
    ],
    href: '/prepare/javascript/interview-questions',
    status: 'available'
  },
  {
    title: 'React',
    description: 'Master React concepts from components and hooks to advanced patterns and performance optimization',
    icon: <Layers className="w-8 h-8" />,
    color: 'cyan',
    stats: {
      totalQuestions: 55,
      difficulty: 'Beginner to Expert',
      estimatedTime: '2-3 hours',
      progress: 100
    },
    features: [
      'Components & Hooks',
      'State Management',
      'Performance Optimization',
      'Advanced Patterns',
      'Modern React Features'
    ],
    href: '/prepare/react/interview-questions',
    status: 'available'
  },
  {
    title: 'TypeScript',
    description: 'Master TypeScript concepts from basic types to advanced type system features and best practices',
    icon: <Code2 className="w-8 h-8" />,
    color: 'indigo',
    stats: {
      totalQuestions: 15,
      difficulty: 'Beginner to Expert',
      estimatedTime: '1 hour',
      progress: 100
    },
    features: [
      'Type System',
      'Generics & Utilities',
      'Advanced Types',
      'Type Safety',
      'Best Practices'
    ],
    href: '/prepare/typescript/interview-questions',
    status: 'available'
  },
  {
    title: 'Angular',
    description: 'Master Angular framework from basic components to advanced patterns, RxJS, and enterprise-level applications',
    icon: <Target className="w-8 h-8" />,
    color: 'red',
    stats: {
      totalQuestions: 63,
      difficulty: 'Beginner to Expert',
      estimatedTime: '2-3 hours',
      progress: 100
    },
    features: [
      'Components & Modules',
      'RxJS & Observables',
      'Forms & Validation',
      'Routing & Guards',
      'NgRx State Management',
      'Testing & Performance'
    ],
    href: '/prepare/angular/interview-questions',
    status: 'available'
  },
  {
    title: 'Vue.js',
    description: 'Master Vue.js framework from basic components to advanced patterns, Composition API, and modern Vue development',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'green',
    stats: {
      totalQuestions: 50,
      difficulty: 'Beginner to Expert',
      estimatedTime: '2-3 hours',
      progress: 100
    },
    features: [
      'Components & Directives',
      'Composition API',
      'Vue Router & Pinia',
      'Reactivity System',
      'Advanced Patterns',
      'Performance Optimization'
    ],
    href: '/prepare/vue/interview-questions',
    status: 'available'
  },
  ];

const getStatusBadge = (status: LanguageCard['status']) => {
  switch (status) {
    case 'learning':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Learning</Badge>;
    case 'available':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>;
  }
};

const getStatusIcon = (status: LanguageCard['status']) => {
  switch (status) {
    case 'learning':
      return <TrendingUp className="w-5 h-5 text-yellow-600" />;
    case 'available':
      return <Target className="w-5 h-5 text-gray-600" />;
  }
};

const getColorClasses = (color: string) => {
  const colorMap = {
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/40',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-800',
      hover: 'hover:shadow-orange-100'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/40',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      hover: 'hover:shadow-blue-100'
    },
    yellow: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/40',
      text: 'text-yellow-600 dark:text-yellow-400',
      border: 'border-yellow-200 dark:border-yellow-800',
      hover: 'hover:shadow-yellow-100'
    },
    cyan: {
      bg: 'bg-cyan-100 dark:bg-cyan-900/40',
      text: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-200 dark:border-cyan-800',
      hover: 'hover:shadow-cyan-100'
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/40',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
      hover: 'hover:shadow-indigo-100'
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/40',
      text: 'text-red-600 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800',
      hover: 'hover:shadow-red-100'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/40',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
      hover: 'hover:shadow-purple-100'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/40',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
      hover: 'hover:shadow-green-100'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

// Filter categories for interview topics
const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'testing', label: 'Testing', icon: TestTube },
  { id: 'devops', label: 'DevOps', icon: Target },
];

const categoryMap: Record<string, string[]> = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Angular', 'Vue.js'],
  backend: [],
  database: [],
  testing: [],
  devops: [],
};

export default function PreparePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grid');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const { user } = useEnhancedAuth();
  const router = useRouter();
  
  const completedLanguages = languagesData.filter(lang => lang.status === 'available').length;
  const totalQuestions = languagesData.reduce((sum, lang) => sum + lang.stats.totalQuestions, 0);

  // Filter based on active category and search query
  const filteredLanguages = languagesData.filter(lang => {
    // Category filter
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'available' && lang.status === 'available') ||
      (activeCategory === 'coming' && lang.status === 'learning') ||
      categoryMap[activeCategory]?.includes(lang.title);

    // Search filter
    const matchesSearch = !searchQuery ||
      lang.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <TooltipProvider>
      <div className="w-screen px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      {/* Interview Header */}
      <InterviewHeader showBackButton={false} currentLanguage="Dashboard" />
      
      {/* Page Title - Like Cheatsheet Dashboard */}
      <div className="w-full max-w-7xl mx-auto mt-0 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <LearningPathTitle
            icon={BookOpen}
            title="Interview Questions"
            subtitle="Practice technical interview questions across different programming languages and technologies"
          />
        </div>
      </div>
      
      {/* Filter Pills - Sticky */}
      <div className="sticky top-0 z-40 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-200">
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 w-fit">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? languagesData.length
                : cat.id === 'available' 
                  ? languagesData.filter(lang => lang.status === 'available').length
                  : cat.id === 'coming'
                    ? languagesData.filter(lang => lang.status === 'learning').length
                    : categoryMap[cat.id]?.filter(slug => languagesData.some(r => r.title === slug)).length || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap',
                    'transition-all duration-300 ease-out',
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  {/* Active indicator glow */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />
                  )}
                  <Icon className={cn(
                    'w-4 h-4 relative z-10 transition-transform duration-300',
                    isActive && 'scale-110'
                  )} />
                  <span className="relative z-10">{cat.label}</span>
                  <span className={cn(
                    'relative z-10 px-2 py-0.5 rounded-full text-xs font-semibold transition-colors duration-300',
                    isActive
                      ? 'bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                      : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-500 dark:text-slate-400'
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-lg flex-shrink-0">
            <input
              type="text"
              placeholder="Search interview topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/60 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          </div>
        </div>
      </div>

      {/* Language Cards */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredLanguages.map((language, index) => {
            const colorClasses = getColorClasses(language.color);
            const isDisabled = language.status !== 'available';
            
            // Mock company data based on language
            const companies = language.title === 'HTML' 
              ? ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']
              : language.title === 'CSS'
              ? ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']
              : language.title === 'JavaScript'
              ? ['Google', 'Meta', 'Netflix', 'Tesla', 'Twitter']
              : language.title === 'React'
              ? ['Meta', 'Netflix', 'Airbnb', 'Uber', 'Spotify']
              : language.title === 'TypeScript'
              ? ['Microsoft', 'Google', 'Meta', 'Amazon', 'Slack']
              : language.title === 'Angular'
              ? ['Google', 'Microsoft', 'IBM', 'Accenture', 'Deloitte']
              : ['Coming Soon'];
            
            return (
              <Card 
                key={index} 
                className={`border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/80 hover:to-slate-50/80 dark:hover:from-slate-800/80 dark:hover:to-slate-900/80 hover:backdrop-blur-sm relative overflow-hidden ${
                  isDisabled ? 'opacity-75' : ''
                }`}
              >
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <CardHeader className="pb-3 px-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                      <div className={colorClasses.text}>
                        {language.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg leading-tight text-slate-900 dark:text-slate-100">
                        {language.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-4 pb-4 space-y-3">
                  {/* Companies Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Asked at:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {companies.slice(0, 3).map((company, idx) => {
                        const companyColors = [
                          'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 dark:from-blue-900/30 dark:to-blue-800/40 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50',
                          'bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 dark:from-emerald-900/30 dark:to-emerald-800/40 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-700/50',
                          'bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700 dark:from-violet-900/30 dark:to-violet-800/40 dark:text-violet-300 border border-violet-200/50 dark:border-violet-700/50',
                          'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 dark:from-amber-900/30 dark:to-amber-800/40 dark:text-amber-300 border border-amber-200/50 dark:border-amber-700/50',
                          'bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 dark:from-rose-900/30 dark:to-rose-800/40 dark:text-rose-300 border border-rose-200/50 dark:border-rose-700/50'
                        ];
                        return (
                          <span 
                            key={idx}
                            className={`px-3 py-1 text-xs font-semibold rounded-full antialiased tracking-tight shadow-sm hover:shadow-md transition-all duration-200 ${companyColors[idx % companyColors.length]}`}
                          >
                            {company}
                          </span>
                        );
                      })}
                      {companies.length > 3 && (
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full cursor-help">
                              +{companies.length - 3}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm font-medium">More companies:</p>
                            <div className="flex flex-col gap-1 mt-1">
                              {companies.slice(3).map((company, idx) => (
                                <span key={idx} className="text-xs">• {company}</span>
                              ))}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {language.stats.totalQuestions}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        Questions
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {language.stats.estimatedTime}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        Time
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Topics:</div>
                    <div className="flex flex-wrap gap-1">
                      {language.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="px-2 py-0.5 text-xs bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {language.features.length > 3 && (
                        <span className="px-2 py-0.5 text-xs bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-500 rounded">
                          +{language.features.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    size="sm"
                    className={`w-full ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={isDisabled}
                    onClick={() => {
                      if (user) {
                        router.push(language.href);
                      } else {
                        setShowSignInModal(true);
                      }
                    }}
                  >
                    {isDisabled ? 'Coming Soon' : 'Practice'}
                    {!isDisabled && <ArrowRight className="w-3 h-3 ml-1" />}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredLanguages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              No interview topics in this category yet.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              View All
            </button>
          </div>
        )}
      </div>

      {/* Getting Started Guide */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            How to Get Started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Choose Your Language</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Select a technology you want to prepare for. Start with HTML if you're new to web development.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Practice Questions</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Go through interview questions organized by difficulty levels. Try to answer before viewing the solution.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Track Progress</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monitor your preparation progress and revisit topics as needed. Practice regularly for best results.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sign In Required Modal */}
      <Dialog open={showSignInModal} onOpenChange={setShowSignInModal}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            {/* Animated lock icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Sign In Required
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Practice Interview Questions</span> is available only for signed-in users
              </p>
            </div>

            {/* Feature benefits */}
            <div className="w-full space-y-3 text-left">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-slate-900 dark:text-white">Track your progress</p>
                  <p className="text-slate-600 dark:text-slate-400">Monitor your preparation across all topics</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-slate-900 dark:text-white">Save your preferences</p>
                  <p className="text-slate-600 dark:text-slate-400">Keep your learning journey organized</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col w-full gap-3 pt-2">
              <Link href="/login" className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Sign In to Continue
                </Button>
              </Link>
              <Button variant="ghost" onClick={() => setShowSignInModal(false)} className="w-full">
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    </TooltipProvider>
  );
}
