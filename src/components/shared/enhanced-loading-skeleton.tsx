'use client';

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface EnhancedLoadingSkeletonProps {
  className?: string;
  showBackground?: boolean;
}

export function EnhancedLoadingSkeleton({ className = "", showBackground = true }: EnhancedLoadingSkeletonProps) {
  return (
    <div className={`relative ${showBackground ? 'min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900' : ''} ${className}`}>
      {/* Background decorative elements */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl" />
        </div>
      )}
      
      <div className={`relative z-10 p-8 ${showBackground ? 'flex items-center justify-center min-h-screen' : ''}`}>
        <div className="w-full max-w-4xl space-y-6">
          {/* Header skeleton */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl animate-pulse" />
            </div>
            <Skeleton className="h-8 w-3/4 mx-auto bg-slate-200 dark:bg-slate-700" />
            <Skeleton className="h-4 w-1/2 mx-auto bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Content skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-full bg-slate-200 dark:bg-slate-700" />
            <Skeleton className="h-6 w-5/6 bg-slate-200 dark:bg-slate-700" />
            <Skeleton className="h-6 w-4/5 bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Code block skeleton */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 space-y-3">
            <Skeleton className="h-4 w-full bg-slate-300 dark:bg-slate-600" />
            <Skeleton className="h-4 w-11/12 bg-slate-300 dark:bg-slate-600" />
            <Skeleton className="h-4 w-10/12 bg-slate-300 dark:bg-slate-600" />
            <Skeleton className="h-4 w-full bg-slate-300 dark:bg-slate-600" />
          </div>

          {/* Interactive elements skeleton */}
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg" />
            <Skeleton className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg" />
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
