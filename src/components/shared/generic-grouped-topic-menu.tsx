'use client';
import React, { RefObject } from 'react';
import Link from 'next/link';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Topic } from '@/app/data/types';
import { 
  ChevronRight, 
  Sparkles,
  Code,
  CheckCircle,
  Circle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface Group {
  title: string;
  topics: Topic[];
}

interface GenericGroupedTopicMenuProps {
  groups: Group[];
  selectedTopicSlug: string | null;
  completedTopics: Set<string>;
  isUserAuthenticated: boolean;
  languageSlug: string;
  activeItemRef: RefObject<HTMLAnchorElement>;
}

export function GenericGroupedTopicMenu({
  groups,
  selectedTopicSlug,
  completedTopics,
  isUserAuthenticated,
  languageSlug,
  activeItemRef,
}: GenericGroupedTopicMenuProps) {
  if (!groups || groups.length === 0) return null;

  // Calculate group progress
  const getGroupProgress = (group: Group) => {
    const completed = group.topics.filter(t => completedTopics.has(t.slug)).length;
    const total = group.topics.length;
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  return (
    <>
      {groups.map((group, index) => {
        const progress = getGroupProgress(group);
        const isGroupComplete = progress.completed === progress.total && progress.total > 0;
        
        return (
          <div 
            key={group.title} 
            className="space-y-2 animate-in fade-in-50 slide-in-from-left-5"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Enhanced Group Header */}
            <div className="relative px-2 py-2 rounded-lg bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300 group">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-1">
                  {isGroupComplete ? (
                    <Sparkles className="w-4 h-4 text-primary shrink-0 animate-pulse" />
                  ) : (
                    <Code className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                  <p className={cn(
                    "text-sm font-bold transition-colors line-clamp-1",
                    isGroupComplete ? "text-primary" : "text-foreground"
                  )}>
                    {group.title}
                  </p>
                </div>
                
                {/* Progress Badge */}
                {isUserAuthenticated && progress.total > 0 && (
                  <Badge 
                    variant="secondary"
                    className={cn(
                      "text-[10px] px-1.5 py-0 h-5 shrink-0 transition-all duration-300",
                      isGroupComplete 
                        ? "bg-primary/15 text-primary border-primary/20" 
                        : "bg-muted/80 text-muted-foreground border-border"
                    )}
                  >
                    {progress.completed}/{progress.total}
                  </Badge>
                )}
              </div>
              
              {/* Progress Bar */}
              {isUserAuthenticated && progress.total > 0 && progress.completed > 0 && (
                <div className="mt-2 h-1 w-full bg-muted/50 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-500 ease-out",
                      isGroupComplete 
                        ? "bg-primary" 
                        : "bg-primary/70"
                    )}
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              )}
            </div>

            {/* Enhanced Topic List */}
            <div className="ml-4 border-l-2 border-border pl-3 space-y-0.5 transition-all duration-300">
                  {group.topics.map((topic, topicIndex) => {
                    const isCompleted = completedTopics.has(topic.slug);
                    const isActive = selectedTopicSlug === topic.slug;
                    const truncatedTitle =
                      topic.title.length > 48 ? `${topic.title.slice(0, 45)}…` : topic.title;
                
                return (
                  <SidebarMenuItem 
                    key={topic.slug}
                    className="animate-in fade-in-50 slide-in-from-left-3"
                    style={{ animationDelay: `${(index * 50) + (topicIndex * 20)}ms` }}
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={topic.title}
                      className={cn(
                        "justify-start text-xs transition-all duration-200 group/item",
                        "hover:translate-x-0.5",
                        isActive && "!bg-muted/50 font-semibold",
                        !isActive && "hover:bg-muted/30"
                      )}
                    >
                      <Link
                        href={`/${languageSlug}/${topic.slug}`}
                        ref={isActive ? activeItemRef : null}
                        className={cn(
                          "flex items-center gap-2 w-full transition-colors",
                          isActive && "!text-primary"
                        )}
                      >
                        {/* Status Icon */}
                        <div className="relative shrink-0">
                          {isCompleted && isUserAuthenticated ? (
                            <CheckCircle 
                              className={cn(
                                "w-4 h-4 transition-all duration-200",
                                isActive ? "text-primary" : "text-primary/70"
                              )} 
                            />
                          ) : isActive ? (
                            <ChevronRight 
                              className="w-4 h-4 text-primary" 
                            />
                          ) : (
                            <Circle 
                              className="w-3.5 h-3.5 text-muted-foreground/40 group-hover/item:text-muted-foreground/60 transition-all duration-200"
                            />
                          )}
                        </div>

                        {/* Topic Title */}
                        <span
                          className={cn(
                            "transition-all duration-200 flex-1 truncate",
                            isActive && "font-semibold"
                          )}
                        >
                          {truncatedTitle}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
