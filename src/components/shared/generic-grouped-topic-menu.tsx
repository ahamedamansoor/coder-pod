'use client';
import React, { RefObject } from 'react';
import Link from 'next/link';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Topic } from '@/app/data/types';
import { CheckCircle } from 'lucide-react';
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

  // Use Coder Pod brand color (primary token) for all menu elements
  const brandTheme = {
    primary: 'text-primary',
    activeMenuContainer: '!bg-primary/10 !border-primary/40',
    activeMenuLink: '!text-primary',
  };

  return (
    <>
      {groups.map(group => (
        <div key={group.title} className="space-y-2 animate-in fade-in-50">
          <p 
            className={cn(
              "px-2 text-md font-semibold transition-colors",
              brandTheme.primary
            )}
          >
            {group.title}
          </p>
          <div 
            className={cn(
              "ml-2 border-l-2 border-primary/40 pl-2 space-y-1 transition-colors"
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
                      brandTheme.primary,
                      "font-semibold",
                      brandTheme.activeMenuContainer
                    )
                  )}
                >
                  <Link
                    href={`/${languageSlug}/${topic.slug}`}
                    ref={selectedTopicSlug === topic.slug ? activeItemRef : null}
                    className={cn(
                      "flex items-center gap-2 transition-colors",
                      selectedTopicSlug === topic.slug && brandTheme.activeMenuLink
                    )}
                  >
                    {completedTopics.has(topic.slug) && isUserAuthenticated && (
                      <CheckCircle className={cn(
                        "w-4 h-4 transition-colors animate-in zoom-in-95",
                        brandTheme.primary
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
