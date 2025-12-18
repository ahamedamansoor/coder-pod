import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type ColorTheme = 'slate' | 'blue' | 'green' | 'teal' | 'indigo' | 'purple' | 'emerald' | 'cyan' | 'red' | 'orange';

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorTheme: ColorTheme;
  badges?: string[];
}

const colorClasses: Record<ColorTheme, {
  badgeBg: string;
  badgeBorder: string;
  icon: string;
  text: string;
  gradient: string;
}> = {
  slate: {
    badgeBg: 'bg-gradient-to-r from-slate-500/10 via-slate-500/10 to-slate-500/10',
    badgeBorder: 'border-slate-200 dark:border-slate-800',
    icon: 'text-slate-600 dark:text-slate-400',
    text: 'text-slate-700 dark:text-slate-300',
    gradient: 'bg-gradient-to-r from-slate-600 via-slate-600 to-slate-600',
  },
  blue: {
    badgeBg: 'bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10',
    badgeBorder: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    text: 'text-blue-700 dark:text-blue-300',
    gradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600',
  },
  green: {
    badgeBg: 'bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10',
    badgeBorder: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    text: 'text-green-700 dark:text-green-300',
    gradient: 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-600',
  },
  teal: {
    badgeBg: 'bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10',
    badgeBorder: 'border-teal-200 dark:border-teal-800',
    icon: 'text-teal-600 dark:text-teal-400',
    text: 'text-teal-700 dark:text-teal-300',
    gradient: 'bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600',
  },
  indigo: {
    badgeBg: 'bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10',
    badgeBorder: 'border-indigo-200 dark:border-indigo-800',
    icon: 'text-indigo-600 dark:text-indigo-400',
    text: 'text-indigo-700 dark:text-indigo-300',
    gradient: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600',
  },
  purple: {
    badgeBg: 'bg-gradient-to-r from-purple-500/10 via-purple-500/10 to-purple-500/10',
    badgeBorder: 'border-purple-200 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
    text: 'text-purple-700 dark:text-purple-300',
    gradient: 'bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600',
  },
  emerald: {
    badgeBg: 'bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10',
    badgeBorder: 'border-emerald-200 dark:border-emerald-800',
    icon: 'text-emerald-600 dark:text-emerald-400',
    text: 'text-emerald-700 dark:text-emerald-300',
    gradient: 'bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600',
  },
  cyan: {
    badgeBg: 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10',
    badgeBorder: 'border-cyan-200 dark:border-cyan-800',
    icon: 'text-cyan-600 dark:text-cyan-400',
    text: 'text-cyan-700 dark:text-cyan-300',
    gradient: 'bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600',
  },
  red: {
    badgeBg: 'bg-gradient-to-r from-red-500/10 via-red-500/10 to-red-500/10',
    badgeBorder: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    text: 'text-red-700 dark:text-red-300',
    gradient: 'bg-gradient-to-r from-red-600 via-red-600 to-red-600',
  },
  orange: {
    badgeBg: 'bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10',
    badgeBorder: 'border-orange-200 dark:border-orange-800',
    icon: 'text-orange-600 dark:text-orange-400',
    text: 'text-orange-700 dark:text-orange-300',
    gradient: 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600',
  },
};

export function PageHeader({
  icon: Icon,
  title,
  description,
  colorTheme,
  badges = [],
}: PageHeaderProps) {
  const colors = colorClasses[colorTheme];

  return (
    <div className="text-center space-y-4">
      {/* Icon */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <Icon className={`w-10 h-10 ${colors.icon}`} />
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
      </div>
      
      {/* Description */}
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        {description}
      </p>
      
      {/* Badges */}
      {badges.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "secondary" : "outline"} 
              className="text-sm"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
