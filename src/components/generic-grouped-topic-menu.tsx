'use client';
import React, { RefObject } from 'react';
import Link from 'next/link';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Topic } from '@/app/data/types';
import { CheckCircle } from 'lucide-react';

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

  return (
    <>
      {groups.map(group => (
        <div key={group.title} className="space-y-2">
          <p className="px-2 text-md font-semibold text-foreground">{group.title}</p>
          <div className="ml-2 border-l pl-2 space-y-1">
            {group.topics.map(topic => (
              <SidebarMenuItem key={topic.slug}>
                <SidebarMenuButton
                  asChild
                  isActive={selectedTopicSlug === topic.slug}
                  tooltip={topic.title}
                  className="justify-start text-sm"
                >
                  <Link
                    href={`/${languageSlug}/${topic.slug}`}
                    ref={selectedTopicSlug === topic.slug ? activeItemRef : null}
                  >
                    {completedTopics.has(topic.slug) && isUserAuthenticated && (
                      <CheckCircle className="text-primary" />
                    )}
                    {topic.title}
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

