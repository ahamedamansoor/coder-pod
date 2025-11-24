'use client';
import React, { RefObject } from 'react';
import Link from 'next/link';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Topic } from '@/app/data/types';
import { CheckCircle } from 'lucide-react';
import { animationClasses } from '@/lib/language-themes';
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

  // Use consistent blue branding color for all menu elements
  const blueTheme = {
    primary: 'text-blue-600 dark:text-blue-400',
    activeMenuContainer: '!bg-blue-100 dark:!bg-blue-900/20 !border-blue-300 dark:!border-blue-700',
    activeMenuLink: '!text-blue-700 dark:!text-blue-300',
  };

  return (
    <>
      {groups.map(group => (
        <div key={group.title} className={cn("space-y-2", animationClasses.fadeIn)}>
          <p 
            className={cn(
              "px-2 text-md font-semibold transition-colors",
              blueTheme.primary
            )}
          >
            {group.title}
          </p>
          <div 
            className={cn(
              "ml-2 border-l-2 border-blue-300 dark:border-blue-700 pl-2 space-y-1 transition-colors"
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
                      blueTheme.primary,
                      "font-semibold",
                      blueTheme.activeMenuContainer
                    )
                  )}
                >
                  <Link
                    href={`/${languageSlug}/${topic.slug}`}
                    ref={selectedTopicSlug === topic.slug ? activeItemRef : null}
                    className={cn(
                      "flex items-center gap-2 transition-colors",
                      selectedTopicSlug === topic.slug && blueTheme.activeMenuLink
                    )}
                  >
                    {completedTopics.has(topic.slug) && isUserAuthenticated && (
                      <CheckCircle className={cn(
                        "w-4 h-4 transition-colors",
                        blueTheme.primary,
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
