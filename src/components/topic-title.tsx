'use client';
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TopicTitleProps {
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// A generic reusable title+description wrapper for topic cards/pages.
export function TopicTitle({ icon, title, description, size = 'lg', className }: TopicTitleProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }[size];

  return (
    <CardHeader className={cn('space-y-2', className)}>
      <CardTitle className={cn('flex items-center gap-3 font-bold', sizeClasses)}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{title}</span>
      </CardTitle>
      {description && (
        <CardDescription className={cn(size === 'xl' ? 'text-lg' : 'text-sm md:text-base')}>{description}</CardDescription>
      )}
    </CardHeader>
  );
}

export default TopicTitle;

