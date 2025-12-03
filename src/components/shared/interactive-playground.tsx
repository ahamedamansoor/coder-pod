'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, CheckCircle } from 'lucide-react';

/**
 * InteractivePlayground - A clean, minimal component for coding playgrounds
 * Designed for languages like JavaScript, Java, Python, etc.
 * 
 * Features:
 * - Clean title with arrow indicator
 * - Descriptive subtitle
 * - Prominent gradient button on the left
 * - Circular checkmark badges on the right
 * - Minimal, professional design
 */

interface InteractivePlaygroundProps {
  title?: string;
  description?: string;
  features?: string[];
  buttonText?: string;
  onLaunchPlayground: (html: string, css: string, js: string) => void;
  playgroundData: {
    html: string;
    css: string;
    js: string;
  };
  colorTheme?: 'blue' | 'purple' | 'emerald' | 'amber' | 'orange';
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({
  title = 'Interactive Playground',
  description = 'Explore comprehensive live-action examples including visualizations, along comparisons, margin collapse, shorthand properties, and an interactive calculator with live updates.',
  features = [
    'Live Code Editor',
    'Syntax Highlighting',
    'Console Output',
    'Instant Feedback',
  ],
  buttonText = 'Open Complete Playground',
  onLaunchPlayground,
  playgroundData,
  colorTheme = 'blue',
}) => {
  const handleLaunch = () => {
    onLaunchPlayground(playgroundData.html, playgroundData.css, playgroundData.js);
  };

  const themeClasses = {
    blue: {
      title: 'text-blue-600 dark:text-blue-400',
      button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    },
    purple: {
      title: 'text-purple-600 dark:text-purple-400',
      button: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    },
    emerald: {
      title: 'text-emerald-600 dark:text-emerald-400',
      button: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
    },
    amber: {
      title: 'text-amber-600 dark:text-amber-400',
      button: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
    },
    orange: {
      title: 'text-orange-600 dark:text-orange-400',
      button: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    },
  };

  const theme = themeClasses[colorTheme];

  return (
    <div className="border rounded-lg p-6 bg-white dark:bg-slate-900/50">
      {/* Title with arrow */}
      <div className="mb-2">
        <h3 className={`text-lg font-semibold flex items-center gap-1 ${theme.title}`}>
          <ChevronRight className="w-4 h-4" />
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Button and Badges Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Button on the left */}
        <Button
          onClick={handleLaunch}
          className={`${theme.button} text-white font-medium shadow-md px-6 flex-shrink-0`}
          size="default"
        >
          {buttonText}
        </Button>

        {/* Circular badges with checkmarks on the right */}
        <div className="flex flex-wrap items-center gap-2">
          {features.map((feature, index) => (
            <Badge
              key={index}
              variant="outline"
              className="rounded-full pl-2 pr-3 py-1.5 text-xs font-normal bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
            >
              <CheckCircle className="w-3 h-3 mr-1.5 text-emerald-500" />
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
