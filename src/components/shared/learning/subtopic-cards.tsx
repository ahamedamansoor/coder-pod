'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { Subtopic } from '@/data/languages/types';
import { Clock, ChevronRight } from 'lucide-react';

interface SubtopicCardsProps {
  subtopics: Subtopic[];
  className?: string;
  isCompleted?: boolean;
}

export const SubtopicCards: React.FC<SubtopicCardsProps> = ({
  subtopics,
  className,
  isCompleted = false
}) => {
  if (!subtopics || subtopics.length === 0) {
    return null;
  }

  return (
    <div className={cn("mt-3 space-y-2", className)}>
      <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
        Includes {subtopics.length} item{subtopics.length > 1 ? 's' : ''}:
      </div>
      <div className="grid grid-cols-1 gap-2">
        {subtopics.map((subtopic) => (
          <div
            key={subtopic.id}
            className={cn(
              "group flex items-center gap-2 p-2 rounded-lg border text-xs transition-all duration-200 hover:scale-[1.02] hover:shadow-sm",
              isCompleted
                ? "bg-green-50/80 dark:bg-green-900/20 border-green-200/50"
                : "bg-purple-50/60 dark:bg-purple-900/20 border-purple-200/50 hover:border-purple-300/70"
            )}
          >
            {/* Icon */}
            <div className={cn(
              "flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs",
              isCompleted
                ? "bg-green-500 text-white"
                : "bg-purple-500 text-white"
            )}>
              {subtopic.icon || <ChevronRight className="w-3 h-3" />}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className={cn(
                "font-medium truncate",
                isCompleted
                  ? "text-green-800 dark:text-green-200"
                  : "text-purple-800 dark:text-purple-200"
              )}>
                {subtopic.title}
              </div>
              <div className={cn(
                "text-xs truncate opacity-75",
                isCompleted
                  ? "text-green-600 dark:text-green-300"
                  : "text-purple-600 dark:text-purple-300"
              )}>
                {subtopic.description}
              </div>
            </div>
            
            {/* Time indicator */}
            {subtopic.estimatedTime && (
              <div className="flex items-center gap-1 text-xs opacity-60">
                <Clock className="w-3 h-3" />
                <span>{subtopic.estimatedTime}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface SubtopicIndicatorProps {
  count: number;
  className?: string;
}

export const SubtopicIndicator: React.FC<SubtopicIndicatorProps> = ({
  count,
  className
}) => {
  if (count <= 0) return null;

  return (
    <div className={cn(
      "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700",
      className
    )}>
      <span>{count}</span>
      <span>item{count > 1 ? 's' : ''}</span>
    </div>
  );
};
