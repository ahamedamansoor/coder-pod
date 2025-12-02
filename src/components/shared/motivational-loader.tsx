'use client';

import { useEffect, useState } from 'react';
import { getRandomLoadingQuote } from '@/data/motivational-quotes';
import { Sparkles, Loader2 } from 'lucide-react';

interface MotivationalLoaderProps {
  isLoading: boolean;
  message?: string;
}

export function MotivationalLoader({ isLoading, message }: MotivationalLoaderProps) {
  const [quote, setQuote] = useState(() => getRandomLoadingQuote());
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Get a new quote when loading starts
      setQuote(getRandomLoadingQuote());
      setFadeIn(false);
      const timer = setTimeout(() => setFadeIn(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-opacity duration-300">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Loader content */}
      <div className={`relative max-w-2xl mx-4 transition-all duration-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Animated border */}
        <div className="relative rounded-3xl p-[2px] bg-slate-200/50 dark:bg-slate-700/50 overflow-hidden">
          <div className="absolute inset-0 rounded-3xl animate-border-spin" style={{
            background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.6) 2%, rgba(147, 197, 253, 0.9) 4%, rgba(96, 165, 250, 0.6) 6%, rgba(59, 130, 246, 0.3) 8%, transparent 10%, transparent 40%, rgba(59, 130, 246, 0.3) 50%, rgba(96, 165, 250, 0.6) 52%, rgba(147, 197, 253, 0.9) 54%, rgba(96, 165, 250, 0.6) 56%, rgba(59, 130, 246, 0.3) 58%, transparent 60%, transparent 100%)'
          }} />
          
          {/* Card content */}
          <div className="relative p-12 rounded-3xl bg-white dark:bg-slate-900 text-center space-y-6">
            {/* Spinning loader with sparkles */}
            <div className="flex items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 animate-pulse" />
            </div>

            {/* Message */}
            {message && (
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                {message}
              </p>
            )}

            {/* Motivational quote */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-base text-slate-600 dark:text-slate-400 italic leading-relaxed">
                "{quote.text}"
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                — {quote.author}
              </p>
            </div>

            {/* Animated dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
