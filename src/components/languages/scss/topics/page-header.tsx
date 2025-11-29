import React from 'react';
import { LucideIcon } from 'lucide-react';

type ColorTheme = 'violet' | 'teal' | 'orange' | 'blue' | 'green' | 'purple' | 'red' | 'indigo' | 'cyan';

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
};

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
      {/* Badge with Icon */}
      <div className={`inline-flex items-center gap-2 ${colors.badgeBg} px-6 py-3 rounded-full border ${colors.badgeBorder}`}>
        <Icon className={`h-6 w-6 ${colors.icon}`} />
        <span className={`text-sm font-semibold ${colors.text}`}>
          {category}
        </span>
      </div>
      
      {/* Main Title with Gradient */}
      <h1 className={`text-5xl font-bold ${colors.gradient} bg-clip-text text-transparent`}>
        {title}
      </h1>
      
      {/* Description */}
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
