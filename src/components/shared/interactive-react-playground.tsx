'use client';

import React from 'react';
import { Rocket, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface InteractiveReactPlaygroundProps {
  title?: string;
  description?: string;
  features?: string[];
  buttonText?: string;
  onLaunchPlayground: () => void;
  colorTheme?: 'cyan' | 'blue' | 'purple' | 'emerald' | 'orange';
  className?: string;
}

const colorThemes = {
  cyan: {
    gradient: 'from-cyan-600 to-blue-600',
    iconBg: 'bg-cyan-500/10 dark:bg-cyan-500/20',
    iconText: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-200 dark:border-cyan-800',
    featureBorder: 'border-l-cyan-500',
  },
  blue: {
    gradient: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
    iconText: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    featureBorder: 'border-l-blue-500',
  },
  purple: {
    gradient: 'from-purple-600 to-pink-600',
    iconBg: 'bg-purple-500/10 dark:bg-purple-500/20',
    iconText: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    featureBorder: 'border-l-purple-500',
  },
  emerald: {
    gradient: 'from-emerald-600 to-green-600',
    iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    iconText: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-800',
    featureBorder: 'border-l-emerald-500',
  },
  orange: {
    gradient: 'from-orange-600 to-red-600',
    iconBg: 'bg-orange-500/10 dark:bg-orange-500/20',
    iconText: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
    featureBorder: 'border-l-orange-500',
  },
};

export function InteractiveReactPlayground({
  title = "Interactive React Playground",
  description = "Build and test React components with live preview and instant feedback",
  features = [
    "JSX/React syntax with live compilation",
    "Real-time preview with hot reload",
    "Console output for debugging",
    "React Hooks support (useState, useEffect, etc.)",
    "CSS styling with instant updates",
    "Auto-run or manual execution modes"
  ],
  buttonText = "Launch React Playground",
  onLaunchPlayground,
  colorTheme = 'cyan',
  className,
}: InteractiveReactPlaygroundProps) {
  const theme = colorThemes[colorTheme];

  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md",
        theme.border,
        className
      )}
    >
      {/* Header */}
      <div className={cn("p-6 bg-gradient-to-br", theme.gradient)}>
        <div className="flex items-start gap-4">
          <div className={cn("p-3 rounded-xl backdrop-blur-sm bg-white/20")}>
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className={cn("w-5 h-5", theme.iconText)} />
          <h4 className="font-semibold text-foreground">Features</h4>
        </div>
        
        <div className="grid gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg border-l-4 bg-muted/30 transition-all duration-200 hover:bg-muted/50",
                theme.featureBorder
              )}
            >
              <div className={cn("p-1 rounded-full mt-0.5", theme.iconBg)}>
                <div className={cn("w-2 h-2 rounded-full", theme.iconText.replace('text-', 'bg-'))} />
              </div>
              <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        {/* Launch Button */}
        <div className="pt-4">
          <Button
            onClick={onLaunchPlayground}
            size="lg"
            className={cn(
              "w-full gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
              `bg-gradient-to-r ${theme.gradient} hover:opacity-90`
            )}
          >
            <Rocket className="w-5 h-5" />
            {buttonText}
          </Button>
        </div>

        {/* Tech Stack Info */}
        <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
          <Palette className="w-4 h-4" />
          <span>Powered by React 18 + Babel + Monaco Editor</span>
        </div>
      </div>
    </div>
  );
}
