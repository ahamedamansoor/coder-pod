# Learning Path Implementation Guide

This guide documents the complete process for implementing a new learning path in the Coder Pod platform, based on the Git & GitHub learning path implementation.

## Overview

The learning path system consists of several interconnected components:
- Language data files with topics and categories
- Dashboard integration with filtering
- Page routing and layout structure
- Sidebar menu with topic navigation
- Content display components
- Progress tracking

## Step-by-Step Implementation

### 1. Create Language Data File

Create a new file in `/src/data/languages/[language].ts`:

```typescript
import type { Language } from './types';

export const [language]: Language = {
  slug: '[language-slug]',
  name: '[Language Display Name]',
  description: '[Description for the learning path]',
  topics: [
    // Learning plan topic (required)
    { 
      slug: 'learning-plan', 
      title: 'Learning Plan', 
      explanation: 'A comprehensive roadmap to master [language] from basics to advanced concepts.' 
    },

    // Category 1: [Category Name]
    { 
      slug: '[topic-slug]', 
      title: '[Topic Title]', 
      explanation: '[Topic description]', 
      category: '1. [Category Name]' 
    },
    // ... more topics
  ],
};
```

**Key Points:**
- Use numbered categories for logical ordering (e.g., "1. Git Fundamentals", "2. Branching")
- Include a `learning-plan` topic as the first item
- Each topic needs: slug, title, explanation, and optionally category
- Categories should follow a progressive learning path

### 2. Register Language in Index

Update `/src/data/languages/index.ts`:

```typescript
// Add import
import { [language] } from './[language]';

// Add to languages array
export const languages: Language[] = [
  // ... existing languages
  { ...[language], enabled: true },
];
```

### 3. Update Dashboard Integration

Update `/src/app/learning-paths/page.tsx`:

```typescript
// Add to allowed slugs
const allowedSlugs = useMemo(() => new Set(['html', 'css', '...', '[language-slug]']), []);

// Add to language categories
const [categoryName]Languages: string[] = ['[language-slug]'];

// Add filter type
type Filter = 'all' | 'frontend' | '...' | '[category-name]';

// Add filter option in UI
{ id: '[category-name]', label: '[Category Label]' }

// Add accent color
const accentMap: Record<string, string> = {
  // ... existing colors
  '[language-slug]': 'from-[color]-100/80 via-[color]-50/60 to-[color]-100/80',
};
```

### 4. Create Page Structure

#### Layout File
Create `/src/app/languages/[language]/layout.tsx`:

```typescript
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { notFound, useParams, useRouter } from 'next/navigation';
import { [Language]Provider } from './[language]-context';
import { [Language]LayoutProvider, use[Language]Layout } from './[language]-layout-context';
import { useLoading } from '@/hooks/use-loading';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { getRouteParam } from '@/lib/params';
import { useCompletionSync } from '@/hooks/use-completion-sync';

function [Language]TopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const { isEditorOpen, setIsEditorOpen } = use[Language]Layout();
  const { hideLoader } = useLoading();
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();
  
  useCompletionSync();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const language = languages.find((lang) => lang.slug === '[language-slug]');
  if (!language) {
    notFound();
  }
  const topicSlug = getRouteParam(params, 'topic');
  const selectedTopic = language.topics.find((t) => t.slug === topicSlug);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="[language]-topic-page"
        data-test="[language]-topic-page"
        className="flex h-screen bg-background w-screen"
      >
        <Sidebar>
          <TopicSidebar
            language={language}
            selectedTopicSlug={selectedTopicSlug}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <InnovativeHeader
            currentPage="learning"
            user={user}
            onLogout={handleLogout}
            showSidebarTrigger={true}
            showLanguageSwitcher={true}
          />
          <main className="flex-1 flex overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default function [Language]TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <[Language]Provider>
      <[Language]LayoutProvider>
        <[Language]TopicLayoutContent>
          {children}
        </[Language]TopicLayoutContent>
      </[Language]LayoutProvider>
    </[Language]Provider>
  );
}
```

#### Topic Page
Create `/src/app/languages/[language]/[topic]/page.tsx`:

```typescript
'use client';

import { useState, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { use[Language]Layout } from '../[language]-layout-context';
import React from 'react';
import { [Language]ContentDisplay } from '@/components/languages/[language]/[language]-content-display';
import { [Language]LearningRoadmap } from '@/components/languages/[language]/[language]-learning-roadmap';
import { InteractiveLoading } from '@/components/shared/interactive-loading';
import { getRouteParam } from '@/lib/params';

function TopicPageContent() {
  const params = useParams();
  const topicSlug = getRouteParam(params, 'topic');
  const { isEditorOpen } = use[Language]Layout();

  const language: Language | undefined = languages.find((lang) => lang.slug === '[language-slug]');
  if (!language) notFound();

  // Default to learning-plan if no topic slug is provided
  const finalTopicSlug = topicSlug || 'learning-plan';
  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === finalTopicSlug);
  if (!selectedTopic) notFound();

  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      {isLearningPlanTopic ? (
        <[Language]LearningRoadmap language={language} />
      ) : (
        <[Language]ContentDisplay
          topic={selectedTopic}
          language={language}
        />
      )}
    </div>
  );
}

export default function [Language]TopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
```

### 5. Create Context Files

#### Language Context
Create `/src/app/languages/[language]/[language]-context.tsx`:

```typescript
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface [Language]ContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const [Language]Context = createContext<[Language]ContextType | undefined>(undefined);

export function [Language]Provider({ children }: { children: ReactNode }) {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('[language-slug]');

  return (
    <[Language]Context.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </[Language]Context.Provider>
  );
}

export function use[Language]() {
  const context = useContext([Language]Context);
  if (context === undefined) {
    throw new Error('use[Language] must be used within a [Language]Provider');
  }
  return context;
}
```

#### Layout Context
Create `/src/app/languages/[language]/[language]-layout-context.tsx`:

```typescript
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface [Language]LayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const [Language]LayoutContext = createContext<[Language]LayoutContextType | undefined>(undefined);

export function [Language]LayoutProvider({ children }: { children: ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <[Language]LayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </[Language]LayoutContext.Provider>
  );
}

export function use[Language]Layout() {
  const context = useContext([Language]LayoutContext);
  if (context === undefined) {
    throw new Error('use[Language]Layout must be used within a [Language]LayoutProvider');
  }
  return context;
}
```

### 6. Create Component Files

#### Learning Roadmap
Create `/src/components/languages/[language]/[language]-learning-roadmap.tsx`:

```typescript
'use client';
import { [Icon1], [Icon2], [Icon3] } from 'lucide-react';
import { use[Language] } from '@/app/languages/[language]/[language]-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for [Language] - using theme colors
const categoryIcons = {
  '1. [Category Name]': { icon: [Icon1], color: 'text-[color]-600', level: 'Beginner' },
  '2. [Category Name]': { icon: [Icon2], color: 'text-[color]-500', level: 'Intermediate' },
  // ... more categories
};

export const [Language]LearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = use[Language]();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
```

#### Content Display
Create `/src/components/languages/[language]/[language]-content-display.tsx`:

```typescript
'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';

// Lazy load all the topic components
const [Topic1] = lazy(() => import('@/components/languages/[language]/topics/[topic-1]'));
const [Topic2] = lazy(() => import('@/components/languages/[language]/topics/[topic-2]'));
// ... more topics

// Map topic slugs to components
const topicComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  '[topic-1-slug]': [Topic1],
  '[topic-2-slug]': [Topic2],
  // ... more topics
};

interface [Language]ContentDisplayProps {
  topic: Topic;
  language: Language;
}

export const [Language]ContentDisplay: React.FC<[Language]ContentDisplayProps> = ({ topic, language }) => {
  const TopicComponent = topicComponents[topic.slug];

  if (!TopicComponent) {
    // Return a placeholder component for topics that don't have specific components yet
    return (
      <GenericContentDisplay
        topic={topic}
        language={language}
      />
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      }
    >
      <TopicComponent />
    </Suspense>
  );
};
```

### 7. Update Topic Sidebar

Update `/src/components/shared/topic-sidebar.tsx`:

```typescript
// Add import
import { use[Language] } from '@/app/languages/[language]/[language]-context';

// Add to useLanguageContext switch statement
function useLanguageContext(language: Language) {
    switch(language.slug) {
        // ... existing cases
        case '[language-slug]':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return use[Language]();
        default:
            return { completedTopics: new Set(), handleToggleComplete: () => {}, isProgressLoading: true };
    }
}

// Add to language category grouping
} else if (language.slug === 'html' || language.slug === 'typescript' || ... || language.slug === '[language-slug]') {
  // Use category from topic data if available
  if (topic.category) {
    group = topic.category;
  }
}

// Add group order
: language.slug === '[language-slug]'
    ? ['1. [Category 1]', '2. [Category 2]', '3. [Category 3]', ...]
    : [];

// Add to generic component condition
const orderedGroupsForGeneric = (language.slug === 'html' || ... || language.slug === '[language-slug]')
```

### 8. Create Topic Components

Create individual topic components in `/src/components/languages/[language]/topics/`:

```typescript
// Example: [topic].tsx
'use client';

import React from 'react';
import { [Icon] } from 'lucide-react';

export default function [TopicName]() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[color]-100 dark:bg-[color]-950/30">
            <[Icon] className="w-8 h-8 text-[color]-600 dark:text-[color]-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">[Topic Title]</h1>
            <p className="text-lg text-muted-foreground">[Topic subtitle]</p>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <section className="space-y-4">
        {/* Your content here */}
      </section>
    </div>
  );
}
```

## File Structure Summary

```
/src/
├── data/languages/
│   ├── index.ts                    # Register language
│   ├── types.ts                    # Language type definitions
│   └── [language].ts               # Language data and topics
├── app/languages/[language]/
│   ├── layout.tsx                  # Main layout with sidebar
│   ├── [language]-context.tsx      # Progress tracking context
│   ├── [language]-layout-context.tsx # Layout state context
│   └── [topic]/
│       └── page.tsx               # Dynamic topic page
├── components/languages/[language]/
│   ├── [language]-learning-roadmap.tsx # Learning plan component
│   ├── [language]-content-display.tsx  # Content display component
│   └── topics/
│       ├── [topic-1].tsx          # Individual topic components
│       └── [topic-2].tsx
└── components/shared/
    └── topic-sidebar.tsx          # Update with new language
```

## Common Issues and Solutions

### 1. Sidebar Topics Not Showing
**Problem:** Topics don't appear in the sidebar menu
**Solution:** Ensure the language is added to the TopicSidebar component:
- Add to `useLanguageContext` switch statement
- Add to category grouping condition
- Add to group order array
- Add to `orderedGroupsForGeneric` condition

### 2. Page Not Found
**Problem:** Getting 404 errors when accessing learning path
**Solution:** Check:
- Language is registered in `/src/data/languages/index.ts`
- Layout file exists and exports properly
- Topic page handles missing topicSlug correctly

### 3. Progress Tracking Not Working
**Problem:** Completed topics not being tracked
**Solution:** Ensure:
- Context uses `useStableCompletion('[language-slug]')`
- Context is properly provided in layout
- TopicSidebar imports and uses the context

### 4. Dashboard Card Not Showing
**Problem:** Language card not appearing on learning paths dashboard
**Solution:** Check:
- Language is in `allowedSlugs` set
- Language is enabled in languages array
- Accent color is defined
- Filter category includes the language

### 5. JSX Parsing Errors
**Problem:** Syntax errors in topic components
**Solution:** 
- Replace special characters with HTML entities (e.g., `>` → `&gt;`)
- Ensure proper JSX syntax
- Check for missing imports

## Best Practices

1. **Consistent Naming:** Use kebab-case for slugs and PascalCase for components
2. **Progressive Learning:** Structure topics from beginner to advanced
3. **Category Organization:** Use numbered categories for logical flow
4. **Component Lazy Loading:** Use lazy loading for better performance
5. **Error Handling:** Include proper error boundaries and fallbacks
6. **Accessibility:** Include proper ARIA labels and semantic HTML
7. **Responsive Design:** Ensure components work on all screen sizes
8. **Type Safety:** Use TypeScript interfaces for all props and contexts

## Testing Checklist

- [ ] Language card appears on dashboard
- [ ] Dashboard filter works correctly
- [ ] Sidebar shows all topics in correct order
- [ ] Learning plan page loads and displays roadmap
- [ ] Individual topic pages load correctly
- [ ] Progress tracking works (mark topics complete)
- [ ] Navigation between topics works
- [ ] Responsive design on mobile/tablet/desktop
- [ ] No console errors
- [ ] Accessibility features work

## Git & GitHub Implementation Reference

The Git & GitHub learning path serves as a complete reference implementation with:
- 24 topics across 18 categories
- Complete sidebar integration
- Progress tracking
- Sample topic component
- Proper error handling

Use this as a template for implementing new learning paths.
