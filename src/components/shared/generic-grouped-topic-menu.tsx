'use client';
import React, { RefObject } from 'react';
import Link from 'next/link';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Topic } from '@/app/data/types';
import { CheckCircle } from 'lucide-react';
import { getThemeClasses, animationClasses } from '@/lib/language-themes';
import { cn } from '@/lib/utils';

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

  // Get theme classes for the current language
  const themeClasses = getThemeClasses(languageSlug);
  
  // Remove per-language manual maps; rely on themeClasses.active* utilities
  const getActiveStyles = () => themeClasses.activeMenuContainer;
  const getActiveTextStyles = () => themeClasses.activeMenuLink;

  return (
    <>
      {groups.map(group => (
        <div key={group.title} className={cn("space-y-2", animationClasses.fadeIn)}>
          <p 
            className={cn(
              "px-2 text-md font-semibold transition-colors",
              themeClasses.primary
            )}
          >
            {group.title}
          </p>
          <div 
            className={cn(
              "ml-2 border-l-2 pl-2 space-y-1 transition-colors",
              themeClasses.primary.replace('text-', 'border-')
            )}
          >
            {group.topics.map(topic => (
              <SidebarMenuItem key={topic.slug}>
                <SidebarMenuButton
                  asChild
                  isActive={selectedTopicSlug === topic.slug}
                  tooltip={topic.title}
                  className={cn(
                    "justify-start text-sm transition-all duration-200 hover:shadow-sm",
                    selectedTopicSlug === topic.slug && cn(
                      themeClasses.primary,
                      "font-semibold",
                      getActiveStyles()
                    )
                  )}
                >
                  <Link
                    href={`/${languageSlug}/${topic.slug}`}
                    ref={selectedTopicSlug === topic.slug ? activeItemRef : null}
                    className={cn(
                      "flex items-center gap-2 transition-colors",
                      selectedTopicSlug === topic.slug && cn(
                        themeClasses.primary,
                        getActiveTextStyles()
                      )
                    )}
                  >
                    {completedTopics.has(topic.slug) && isUserAuthenticated && (
                      <CheckCircle className={cn(
                        "w-4 h-4 transition-colors",
                        themeClasses.primary,
                        animationClasses.scaleIn
                      )} />
                    )}
                    <span 
                      className="transition-colors"
                    >
                      {topic.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
