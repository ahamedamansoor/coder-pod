'use client';

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface EnhancedLoadingSkeletonProps {
  className?: string;
  showBackground?: boolean;
}

export function EnhancedLoadingSkeleton({ className = "", showBackground = true }: EnhancedLoadingSkeletonProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Background decorative elements */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 dark:from-indigo-400/5 dark:to-pink-400/5 rounded-full blur-3xl animate-pulse" />
        </div>
      )}
      
      <div className="relative z-10">
        <div className="text-center space-y-4 py-8">
          {/* Category Badge with Icon - Matching PageHeader */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border animate-pulse"
                 style={{ 
                   backgroundColor: '#4A7BF5',
                   borderColor: '#4A7BF5'
                 }}>
              <div className="h-6 w-6 bg-white/20 rounded animate-pulse" />
              <span className="text-sm font-semibold text-white w-20 h-4 bg-white/20 rounded animate-pulse" />
            </div>
          </div>
          
          {/* Main Title - Matching PageHeader */}
          <div className="flex justify-center">
            <div 
              className="h-12 w-3/4 max-w-3xl rounded animate-pulse"
              style={{ backgroundColor: '#5B7FFF' }}
            />
          </div>
          
          {/* Description - Matching PageHeader */}
          <div className="flex justify-center">
            <div className="h-6 w-2/3 max-w-2xl bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
            <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
          </div>

          {/* YouTube Button */}
          <div className="flex justify-center mt-6">
            <div className="h-10 w-32 bg-red-500 dark:bg-red-600 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-4 py-8 space-y-6">
          {/* Content skeleton */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
          </div>

          {/* Code block skeleton */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 space-y-3">
            <div className="h-4 w-full bg-slate-300 dark:bg-slate-600 rounded animate-pulse" />
            <div className="h-4 w-11/12 bg-slate-300 dark:bg-slate-600 rounded animate-pulse" />
            <div className="h-4 w-10/12 bg-slate-300 dark:bg-slate-600 rounded animate-pulse" />
          </div>

          {/* Interactive elements skeleton */}
          <div className="flex gap-4 justify-center">
            <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
            <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface CompactLoadingSkeletonProps {
  className?: string;
}

export function CompactLoadingSkeleton({ className = "" }: CompactLoadingSkeletonProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg animate-pulse" />
        <Skeleton className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700" />
      </div>
      
      <div className="space-y-3">
        <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="h-4 w-4/5 bg-slate-200 dark:bg-slate-700" />
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 space-y-2">
        <Skeleton className="h-3 w-full bg-slate-300 dark:bg-slate-600" />
        <Skeleton className="h-3 w-11/12 bg-slate-300 dark:bg-slate-600" />
        <Skeleton className="h-3 w-10/12 bg-slate-300 dark:bg-slate-600" />
      </div>
    </div>
  );
}
