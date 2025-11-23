import React from 'react';
import { LucideIcon } from 'lucide-react';

type ColorTheme = 
  | 'violet' 
  | 'teal' 
  | 'orange' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'red' 
  | 'indigo' 
  | 'cyan' 
  | 'pink'
  | 'yellow'
  | 'emerald'
  | 'sky'
  | 'rose'
  | 'fuchsia'
  | 'lime'
  | 'amber';

interface PageHeaderProps {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  colorTheme: ColorTheme;
}

const colorClasses: Record<ColorTheme, {
  badgeBg: string;
  badgeBorder: string;
  icon: string;
  text: string;
  gradient: string;
}> = {
  violet: {
    badgeBg: 'bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10',
    badgeBorder: 'border-violet-200 dark:border-violet-800',
    icon: 'text-violet-600 dark:text-violet-400',
    text: 'text-violet-700 dark:text-violet-300',
    gradient: 'bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600',
  },
  teal: {
    badgeBg: 'bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10',
    badgeBorder: 'border-teal-200 dark:border-teal-800',
    icon: 'text-teal-600 dark:text-teal-400',
    text: 'text-teal-700 dark:text-teal-300',
    gradient: 'bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600',
  },
  orange: {
    badgeBg: 'bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10',
    badgeBorder: 'border-orange-200 dark:border-orange-800',
    icon: 'text-orange-600 dark:text-orange-400',
    text: 'text-orange-700 dark:text-orange-300',
    gradient: 'bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600',
  },
  blue: {
    badgeBg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-blue-500/10',
    badgeBorder: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    text: 'text-blue-700 dark:text-blue-300',
    gradient: 'bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600',
  },
  green: {
    badgeBg: 'bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10',
    badgeBorder: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    text: 'text-green-700 dark:text-green-300',
    gradient: 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-600',
  },
  purple: {
    badgeBg: 'bg-gradient-to-r from-purple-500/10 via-purple-500/10 to-purple-500/10',
    badgeBorder: 'border-purple-200 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
    text: 'text-purple-700 dark:text-purple-300',
    gradient: 'bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600',
  },
  red: {
    badgeBg: 'bg-gradient-to-r from-red-500/10 via-red-500/10 to-red-500/10',
    badgeBorder: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    text: 'text-red-700 dark:text-red-300',
    gradient: 'bg-gradient-to-r from-red-600 via-red-600 to-red-600',
  },
  indigo: {
    badgeBg: 'bg-gradient-to-r from-indigo-500/10 via-indigo-500/10 to-indigo-500/10',
    badgeBorder: 'border-indigo-200 dark:border-indigo-800',
    icon: 'text-indigo-600 dark:text-indigo-400',
    text: 'text-indigo-700 dark:text-indigo-300',
    gradient: 'bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600',
  },
  cyan: {
    badgeBg: 'bg-gradient-to-r from-cyan-500/10 via-cyan-500/10 to-cyan-500/10',
    badgeBorder: 'border-cyan-200 dark:border-cyan-800',
    icon: 'text-cyan-600 dark:text-cyan-400',
    text: 'text-cyan-700 dark:text-cyan-300',
    gradient: 'bg-gradient-to-r from-cyan-600 via-cyan-600 to-cyan-600',
  },
  pink: {
    badgeBg: 'bg-gradient-to-r from-pink-500/10 via-pink-500/10 to-pink-500/10',
    badgeBorder: 'border-pink-200 dark:border-pink-800',
    icon: 'text-pink-600 dark:text-pink-400',
    text: 'text-pink-700 dark:text-pink-300',
    gradient: 'bg-gradient-to-r from-pink-600 via-pink-600 to-pink-600',
  },
  yellow: {
    badgeBg: 'bg-gradient-to-r from-yellow-500/10 via-yellow-500/10 to-yellow-500/10',
    badgeBorder: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
    text: 'text-yellow-700 dark:text-yellow-300',
    gradient: 'bg-gradient-to-r from-yellow-600 via-yellow-600 to-yellow-600',
  },
  emerald: {
    badgeBg: 'bg-gradient-to-r from-emerald-500/10 via-emerald-500/10 to-emerald-500/10',
    badgeBorder: 'border-emerald-200 dark:border-emerald-800',
    icon: 'text-emerald-600 dark:text-emerald-400',
    text: 'text-emerald-700 dark:text-emerald-300',
    gradient: 'bg-gradient-to-r from-emerald-600 via-emerald-600 to-emerald-600',
  },
  sky: {
    badgeBg: 'bg-gradient-to-r from-sky-500/10 via-sky-500/10 to-sky-500/10',
    badgeBorder: 'border-sky-200 dark:border-sky-800',
    icon: 'text-sky-600 dark:text-sky-400',
    text: 'text-sky-700 dark:text-sky-300',
    gradient: 'bg-gradient-to-r from-sky-600 via-sky-600 to-sky-600',
  },
  rose: {
    badgeBg: 'bg-gradient-to-r from-rose-500/10 via-rose-500/10 to-rose-500/10',
    badgeBorder: 'border-rose-200 dark:border-rose-800',
    icon: 'text-rose-600 dark:text-rose-400',
    text: 'text-rose-700 dark:text-rose-300',
    gradient: 'bg-gradient-to-r from-rose-600 via-rose-600 to-rose-600',
  },
  fuchsia: {
    badgeBg: 'bg-gradient-to-r from-fuchsia-500/10 via-fuchsia-500/10 to-fuchsia-500/10',
    badgeBorder: 'border-fuchsia-200 dark:border-fuchsia-800',
    icon: 'text-fuchsia-600 dark:text-fuchsia-400',
    text: 'text-fuchsia-700 dark:text-fuchsia-300',
    gradient: 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-600 to-fuchsia-600',
  },
  lime: {
    badgeBg: 'bg-gradient-to-r from-lime-500/10 via-lime-500/10 to-lime-500/10',
    badgeBorder: 'border-lime-200 dark:border-lime-800',
    icon: 'text-lime-600 dark:text-lime-400',
    text: 'text-lime-700 dark:text-lime-300',
    gradient: 'bg-gradient-to-r from-lime-600 via-lime-600 to-lime-600',
  },
  amber: {
    badgeBg: 'bg-gradient-to-r from-amber-500/10 via-amber-500/10 to-amber-500/10',
    badgeBorder: 'border-amber-200 dark:border-amber-800',
    icon: 'text-amber-600 dark:text-amber-400',
    text: 'text-amber-700 dark:text-amber-300',
    gradient: 'bg-gradient-to-r from-amber-600 via-amber-600 to-amber-600',
  },
};

/**
 * Generic Page Header Component
 * 
 * A reusable header component for all topic pages across different languages
 * (HTML, CSS, JavaScript, React, Java, Spring, etc.)
 * 
 * @example
 * ```tsx
 * import { PageHeader } from '@/components/shared/generic-page-header';
 * import { FileCode } from 'lucide-react';
 * 
 * <PageHeader
 *   icon={FileCode}
 *   category="HTML Basics"
 *   title="HTML Document Structure"
 *   description="The essential boilerplate for every web page"
 *   colorTheme="blue"
 * />
 * ```
 */
export function PageHeader({
  icon: Icon,
  category,
  title,
  description,
  colorTheme,
}: PageHeaderProps) {
  const colors = colorClasses[colorTheme];

  return (
    <div className="text-center space-y-4 py-8">
      {/* Category Badge with Icon */}
      <div className={`inline-flex items-center gap-2 ${colors.badgeBg} px-6 py-3 rounded-full border ${colors.badgeBorder} animate-in fade-in slide-in-from-top-4 duration-500`}>
        <Icon className={`h-6 w-6 ${colors.icon}`} />
        <span className={`text-sm font-semibold ${colors.text}`}>
          {category}
        </span>
      </div>
      
      {/* Main Title with Gradient */}
      <h1 className={`text-5xl font-bold ${colors.gradient} bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700`}>
        {title}
      </h1>
      
      {/* Description */}
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000">
        {description}
      </p>
    </div>
  );
}
