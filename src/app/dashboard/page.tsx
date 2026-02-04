'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { useRouter } from 'next/navigation';
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
import { enabledLanguages as languages } from '@/data/languages';
import { Code, Code2, Sparkles, Rocket, ArrowRight, Zap, Trophy, Target, Linkedin, Heart, Mail, BookOpen, MapPin, Users, Terminal, GitBranch, Database, Cloud, Shield, Globe, Cpu, FileCode, MessageSquare, TrendingUp, Award, Clock } from 'lucide-react';

import { InnovativeHeader } from '@/components/shared';
import { FeaturesShowcase } from '@/components/dashboard/features-showcase';
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';
import { ReactPlaygroundProvider, useReactPlayground } from '@/components/shared/playground/react-playground-context';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { ReactPlaygroundModal } from '@/components/shared/playground/react-playground-modal';

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

function DashboardContent({ user, handleLogout }: { user: any; handleLogout: () => void }) {
  const { openPlayground } = useReactPlayground();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);
  
  const handlePlaygroundOpen = () => {
    openPlayground({
      jsx: `function App() {
  const [count, setCount] = React.useState(0);
  
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: 'Arial, sans-serif'
  };
  
  const cardStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
    minWidth: '300px'
  };
  
  const titleStyle = {
    color: '#333',
    marginBottom: '1rem'
  };
  
  const subtitleStyle = {
    color: '#666',
    marginBottom: '2rem'
  };
  
  const countStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '2rem'
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  };
  
  const buttonStyle = {
    background: '#10b981',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };
  
  const decrementButtonStyle = {
    ...buttonStyle,
    background: '#ef4444'
  };
  
  const resetButtonStyle = {
    ...buttonStyle,
    background: '#6b7280'
  };

  return React.createElement('div', { style: containerStyle },
    React.createElement('div', { style: cardStyle },
      React.createElement('h1', { style: titleStyle }, '🚀 React Counter'),
      React.createElement('p', { style: subtitleStyle }, 'Click the buttons to change the count'),
      
      React.createElement('div', { style: countStyle }, count.toString()),
      
      React.createElement('div', { style: buttonContainerStyle },
        React.createElement('button', {
          style: decrementButtonStyle,
          onClick: () => setCount(count - 1)
        }, '-'),
        
        React.createElement('button', {
          style: resetButtonStyle,
          onClick: () => setCount(0)
        }, 'Reset'),
        
        React.createElement('button', {
          style: buttonStyle,
          onClick: () => setCount(count + 1)
        }, '+')
      )
    )
  );
}

console.log('🚀 React Playground: Starting app render...');
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
  console.log('✅ React Playground: App rendered successfully!');
} catch (error) {
  console.error('❌ React Playground: Failed to render app:', error);
}`
    });
  };

  return (
    <>
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
                    <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-fade-scale" style={{ animationDelay: '0.3s' }}>
                      <BookOpen className="w-5 h-5 text-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      Quick Reference
                    </div>
                    <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-pink-200/50 dark:border-pink-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                      <MapPin className="w-5 h-5 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      Learning Roadmaps
                    </div>
                    <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-fade-scale" style={{ animationDelay: '0.5s' }}>
                      <Sparkles className="w-5 h-5 text-purple-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      Useful AI Tools
                    </div>
                    <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                      <MessageSquare className="w-5 h-5 text-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      AI Assistant Chat
                    </div>
                    <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
                      <BookOpen className="w-5 h-5 text-yellow-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      Smart Note Reference
                    </div>
                    <div className="group flex items-center gap-2 text-sm sm:text-base text-muted-foreground px-4 py-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-110 hover:rotate-3 cursor-pointer animate-fade-scale" style={{ animationDelay: '0.8s' }}>
                      <Globe className="w-5 h-5 text-red-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      Trending Topics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Showcase Section */}
          <FeaturesShowcase />



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
                        <Link href="/roadmaps" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          Roadmaps
                        </Link>
                      </li>
                      <li>
                        <Link href="/cheatsheets" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          Cheatsheets
                        </Link>
                      </li>
                      <li>
                        <Link href="/notes" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          My Notes
                        </Link>
                      </li>
                      <li>
                        <Link href="/discover" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          Discover
                        </Link>
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
                            href="https://buymeacoffee.com/coderpod"
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
                        <span>Built with Next.js, TypeScript & Supabase and Vercel</span>
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

        {/* Playground Modals */}
        <WebPlaygroundModal />
        <ReactPlaygroundModal />
    </>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WebPlaygroundProvider>
        <ReactPlaygroundProvider>
          <DashboardMain />
        </ReactPlaygroundProvider>
      </WebPlaygroundProvider>
    </Suspense>
  );
}

function DashboardMain() {
  const { user, isUserLoading } = useUser();
  const { signOut } = useSupabaseAuth();
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();

  // Handle OAuth callback for Google sign-in
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const email = urlParams.get('email');
    
    if (code && email) {
      // Store email for dynamic client creation
      localStorage.setItem('last-login-email', email);
      
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
      
      // The auth context will handle the rest
      console.log('OAuth callback handled for email:', email);
    }
  }, []);

  const handleLogout = async () => {
    try {
      showLoader();
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      hideLoader();
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
      </div>
    );
  }

  return <DashboardContent user={user} handleLogout={handleLogout} />;
}
