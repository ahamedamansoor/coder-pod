'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Code, 
  BookOpen, 
  Zap, 
  RefreshCw,
  Compass,
  Lightbulb,
  Rocket,
  Ghost
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const suggestions = [
    { 
      icon: Code, 
      title: 'Browse Languages', 
      description: 'Explore programming languages and frameworks',
      href: '/languages',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: BookOpen, 
      title: 'Learning Paths', 
      description: 'Structured roadmaps for your learning journey',
      href: '/learning-paths',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Zap, 
      title: 'AI Tools', 
      description: 'AI-powered coding assistants and tools',
      href: '/ai-tools',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: Compass, 
      title: 'Discover', 
      description: 'Find new content and trending topics',
      href: '/discover',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const floatingElements = [
    { icon: Code, delay: 0, duration: 3 },
    { icon: Lightbulb, delay: 0.5, duration: 4 },
    { icon: Rocket, delay: 1, duration: 3.5 },
    { icon: BookOpen, delay: 1.5, duration: 4.5 },
    { icon: Zap, delay: 2, duration: 3 },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute opacity-10 dark:opacity-20"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${10 + (index * 15)}%`,
              animation: `float ${element.duration}s ease-in-out ${element.delay}s infinite`,
            }}
          >
            <element.icon className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full py-16">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="relative">
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* 404 Text */}
            <div className="relative flex items-center justify-center">
              <div className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-pulse">
                4
              </div>
              <div className="relative mx-2">
                <Ghost className="w-24 h-24 text-blue-600 dark:text-blue-400 animate-bounce" />
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full blur-xl opacity-30 animate-ping"></div>
              </div>
              <div className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-pulse">
                4
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-8 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            This page seems to have vanished into the digital void.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Don't worry, even the best coders get lost sometimes. Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={goBack}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
            
            <Link href="/">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Home Page
              </Button>
            </Link>

            <Button 
              onClick={() => window.location.reload()}
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Suggestions Cards */}
        <div className="w-full px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
            Where would you like to go next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestions.map((suggestion, index) => (
              <Link key={index} href={suggestion.href}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${suggestion.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${suggestion.color} mb-4`}>
                      <suggestion.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {suggestion.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {suggestion.description}
                    </p>
                    
                    <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      Explore →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-12 w-full px-4 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for content..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const query = e.currentTarget.value;
                  if (query.trim()) {
                    router.push(`/discover?search=${encodeURIComponent(query.trim())}`);
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            "404: The page you're looking for is like a bug in production - everyone knows it exists, but no one can find it."
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}
