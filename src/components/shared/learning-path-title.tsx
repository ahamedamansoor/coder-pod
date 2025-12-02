'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LearningPathTitleProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function LearningPathTitle({
  icon: Icon,
  title,
  subtitle,
  action,
}: LearningPathTitleProps) {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-6 bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s' }} />
        <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] bg-primary/8 dark:bg-primary/4 rounded-full blur-3xl animate-wave" style={{ animationDelay: '2s', animationDuration: '14s' }} />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <div className={cn("text-center", "animate-in fade-in-50 slide-in-from-top-4 duration-700")}>
          <div className="relative mb-4">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 dark:opacity-10 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
            </div>
            
            <div className="flex flex-col items-center justify-center gap-3 mb-3 animate-in zoom-in-95 duration-500">
              <div className="relative">
                <Icon className={cn(
                  "w-10 h-10", 
                  "text-primary",
                  "transition-all duration-500 hover:scale-110 hover:rotate-12"
                )} />
                <div className={cn(
                  "absolute -inset-2 rounded-full blur-xl opacity-50 -z-10",
                  "bg-primary/30 animate-pulse"
                )} />
              </div>
              
              <h1 className={cn(
                "text-3xl md:text-4xl font-extrabold tracking-tight",
                "animate-in slide-in-from-left-5 duration-700"
              )}>
                <span className={cn(
                  "text-primary",
                  "relative inline-block",
                  "transition-all duration-300 hover:scale-105"
                )}>
                  {title}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent rounded-lg blur-sm -z-10" />
                </span>
              </h1>

              {subtitle && (
                <p className={cn(
                  "text-sm md:text-base max-w-3xl mx-auto leading-relaxed",
                  "text-muted-foreground",
                  "animate-in fade-in-50 slide-in-from-bottom-3 duration-700 delay-150"
                )}>
                  {subtitle}
                </p>
              )}

              {action && (
                <div className="mt-2 animate-in fade-in-50 slide-in-from-bottom-3 duration-700 delay-300">
                  {action}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
