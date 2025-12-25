'use client';
import React, { useEffect, useRef } from 'react';
import type { Language } from '@/data/languages';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Logo } from './layout/logo';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sparkles, ArrowRight, CheckCircle, Circle } from 'lucide-react';
import Link from 'next/link';
import { useJava } from '@/app/languages/java/java-context';
import { useSpring } from '@/app/languages/spring/spring-context';
import { useJavascript } from '@/app/languages/javascript/javascript-context';
import { useReact } from '@/app/languages/react/react-context';
import { useVueContext } from '@/app/languages/vue/vue-context';
import { useNextjsContext } from '@/app/languages/nextjs/nextjs-context';
import { useAngular } from '@/app/languages/angular/angular-context';
import { useHtml } from '@/app/languages/html/html-context';
import { useCss } from '@/app/languages/css/css-context';
import { useScss } from '@/app/languages/scss/scss-context';
import { useTailwind } from '@/app/languages/tailwind/tailwind-context';
import { useTypeScript } from '@/app/languages/typescript/typescript-context';
import { useDsa } from '@/app/languages/dsa/dsa-context';
import { useRxjs } from '@/app/languages/rxjs/rxjs-context';
import { useSpringBoot } from '@/app/languages/spring-boot/spring-boot-context';
import { usePlaywright } from '@/app/languages/playwright/playwright-context';
import { useSelenium } from '@/app/languages/selenium/selenium-context';
import { useUser } from '@/hooks/use-auth-compat';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GenericGroupedTopicMenu } from './generic-grouped-topic-menu';
import { cn } from '@/lib/utils';
import { dsaCategoryOrder } from '@/data/dsa-roadmap';
import { rxjsCategoryOrder } from '@/data/rxjs-roadmap';



interface TopicSidebarProps {
  language: Language;
  selectedTopicSlug: string | null;
}

function useLanguageContext(language: Language) {
    switch(language.slug) {
        case 'java':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useJava();
        case 'spring':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSpring();
        case 'spring-boot':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSpringBoot();
        case 'javascript':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useJavascript();
        case 'react':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useReact();
        case 'vue':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useVueContext();
        case 'nextjs':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useNextjsContext();
        case 'angular':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useAngular();
        case 'html':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useHtml();
        case 'css':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useCss();
        case 'scss':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useScss();
        case 'tailwind':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useTailwind();
        case 'typescript':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useTypeScript();
        case 'dsa':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useDsa();
        case 'rxjs':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useRxjs();
        case 'playwright':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return usePlaywright();
        case 'selenium':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSelenium();
        default:
            // Fallback or default context if necessary
            return { completedTopics: new Set(), handleToggleComplete: () => {}, isProgressLoading: true };
    }
}


export function TopicSidebar({
  language,
  selectedTopicSlug,
}: TopicSidebarProps) {
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  
  const { completedTopics: rawCompletedTopics } = useLanguageContext(language);
  
  // Ensure completedTopics is always a Set (defensive programming)
  const completedTopics = React.useMemo(() => {
    if (rawCompletedTopics instanceof Set) {
      return rawCompletedTopics;
    }
    if (Array.isArray(rawCompletedTopics)) {
      console.warn('completedTopics was an array in sidebar, converting to Set');
      return new Set(rawCompletedTopics);
    }
    return new Set<string>();
  }, [rawCompletedTopics]);
  
  const { user } = useUser();
  const isUserAuthenticated = user && !user.isAnonymous;
  // Use Coder Pod brand color (primary token) for all sidebar elements
  const brandTheme = {
    primary: 'text-primary',
    textSecondary: 'text-muted-foreground',
    activeMenuContainer: '!bg-primary/10 !border-primary/40',
    activeMenuLink: '!text-primary',
  };

  const formatGroupTitle = (title: string) => title.replace(/^\d+\.?\s*/, '').trim();

  useEffect(() => {
    if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
    }
  }, [selectedTopicSlug]);

  const learningPlanTopic = language.topics.find(t => t.slug === 'learning-plan');
  const interviewTopic = language.topics.find(t => t.slug === 'interview-questions');
  const reactUpdatesTopic = language.topics.find(t => t.slug === 'react-version-updates');
  
  const topicsByGroup = language.topics.reduce((acc, topic) => {
    if (['learning-plan', 'interview-questions', 'react-version-updates'].includes(topic.slug)) return acc;
    
    let group = 'Others'; // Default group

    if (language.slug === 'spring-boot') {
        const springBootGroups: Record<string, string[]> = {
            "Core Concepts": ['spring-boot-basics', 'autoconfiguration', 'spring-boot-starters'],
            "Configuration": ['spring-boot-properties', 'spring-boot-profiles'],
            "Advanced": ['spring-boot-testing', 'spring-boot-actuator', 'spring-boot-webflux'],
        };
         for (const groupName in springBootGroups) {
            if (springBootGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
        }
    } else if (language.slug === 'javascript') {
      // Use category from topic data if available
      if (topic.category) {
        group = topic.category;
      }
    } else if (language.slug === 'html' || language.slug === 'typescript' || language.slug === 'css' || language.slug === 'tailwind' || language.slug === 'scss' || language.slug === 'react' || language.slug === 'angular' || language.slug === 'java' || language.slug === 'spring' || language.slug === 'spring-boot' || language.slug === 'playwright' || language.slug === 'selenium' || language.slug === 'vue' || language.slug === 'nextjs') {
      // Use category from topic data if available
      if (topic.category) {
        group = topic.category;
      }
    } else if (language.slug === 'dsa' || language.slug === 'rxjs') {
      if (topic.category) {
        group = topic.category;
      }
    }


    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(topic);
    return acc;
  }, {} as Record<string, typeof language.topics>);

  const groupOrder = language.slug === 'html'
    ? ['1. Fundamentals','2. Text & Content','3. Links & Navigation','4. Images & Media','5. Lists & Tables','6. Forms','7. Semantic HTML','8. Document Head','9. Scripts & Styles','10. Interactive Elements','11. Iframes & Embedding','12. Web Components','13. HTML5 APIs','14. Performance','15. SEO & Metadata','16. Accessibility','17. Modern HTML Features','18. Best Practices']
    : language.slug === 'java'
    ? ["1. Getting Started", "2. Basic Output", "3. Variables & Data Types", "4. Operators", "5. User Input", "6. Control Flow", "7. Strings & Arrays", "8. Methods & OOP Basics", "9. Advanced OOP", "10. Advanced Collections", "11. Error Handling", "12. Generics", "13. Functional Programming", "14. Concurrency", "15. Java 8+ Features", "16. Java 9-11 Features", "17. Java 12-16 Features", "18. Java 17+ (LTS)", "19. File I/O", "20. Annotations", "21. Reflection", "22. JVM Internals", "23. Testing", "24. Best Practices"]
    : language.slug === 'spring' 
    ? ["1. Introduction", "2. Core Container", "3. Dependency Injection", "4. Configuration", "5. AOP", "6. Spring MVC", "7. Data Access", "8. ORM Integration", "9. Spring Security", "10. Validation", "11. Testing", "12. Messaging", "13. Caching", "14. Scheduling", "15. Events", "16. Spring WebFlux", "17. Spring 5+ Features", "18. Spring 6+ Features", "19. SpEL", "20. Best Practices"]
    : language.slug === 'spring-boot'
    ? ["1. Introduction & Setup", "2. Core Concepts", "3. Configuration", "4. Web Development", "5. Data Access", "6. Security", "7. Validation", "8. Testing", "9. Actuator & Monitoring", "10. Caching", "11. Messaging", "12. Scheduling", "13. Reactive Programming", "14. Documentation", "15. Logging", "16. Performance", "17. Deployment", "18. Spring Boot 3.x", "19. Best Practices"]
    : language.slug === 'javascript'
    ? [
        "1. Fundamentals",
        "2. Operators & Control Flow",
        "3. Functions",
        "4. Arrays & Objects",
        "5. Strings & Regex",
        "6. Scope & Closures",
        "7. Object-Oriented JavaScript",
        "8. Asynchronous JavaScript",
        "9. DOM Manipulation",
        "10. Events",
        "11. ES6+ Features",
        "12. Design Patterns",
        "13. Performance & Optimization",
        "14. APIs & Browser",
        "15. Modern JavaScript",
        "16. Advanced Array Methods",
        "17. Advanced Object Patterns",
        "18. Sets & Maps",
        "19. Date & Time",
        "20. Math & Numbers",
        "21. JSON",
        "22. Internationalization",
        "23. Browser APIs",
        "24. Advanced Async Patterns",
        "25. Runtime Environments",
        "26. Tooling & Build",
        "27. Security & Best Practices",
        "28. Testing",
        "29. Meta-Programming",
        "30. Memory & Performance",
        "Others"
      ]
    : language.slug === 'react'
    ? [
        '1. Getting Started', 
        '2. Describing the UI', 
        '3. Adding Interactivity', 
        '4. Managing State', 
        '5. Escape Hatches',
        '6. Hooks (Comprehensive)',
        '7. Component Details',
        '8. Client Libraries',
        '9. Form Details',
        '10. Advanced Patterns',
        '11. Context API',
        '12. Performance Optimization',
        '13. Testing',
        '14. Deployment',
        '15. TypeScript Integration',
        '16. Advanced Features',
        '17. Developer Tools',
        '18. API Reference',
        '19. Rules & Best Practices',
        '20. Thinking in React',
        '21. React Router',
        '22. Redux',
        '23. MobX',
        '24. Zustand',
        '25. React Query',
        '26. SWR'
      ]
    : language.slug === 'css'
    ? ["Fundamentals", "Styling Basics", "Box Model & Layout", "Advanced Selectors", "Modern Layout", "Responsive Design", "Animations & Effects", "Visual Effects", "Advanced CSS", "Modern Features", "Forms & UI", "Accessibility", "Print & Media", "Optimization", "Architecture", "Preprocessors & Tooling", "Browser Support", "Debugging & Testing", "Best Practices"]
    : language.slug === 'scss'
    ? ["1. Fundamentals", "2. Nesting & Selectors", "3. File Organization", "4. Reusability", "5. Control & Logic", "6. Built-in Modules", "7. Advanced Features", "8. Colors", "9. Mixins Library", "10. Architecture", "11. Design Systems", "12. Performance", "13. Build Tools", "14. Testing & Quality", "15. Migration", "16. Best Practices"]
    : language.slug === 'typescript'
    ? ["1. Introduction", "2. Basic Types", "3. Type Annotations", "4. Interfaces", "5. Type Aliases", "6. Functions", "7. Classes", "8. Generics", "9. Advanced Types", "10. Utility Types", "11. Modules & Namespaces", "12. Decorators", "13. TypeScript 4.x Features", "14. TypeScript 5.x Features", "15. tsconfig.json", "16. Type Narrowing", "17. Working with React", "18. Working with Node.js", "19. Testing", "20. Performance", "21. Best Practices", "22. Migration", "23. Tooling", "24. Advanced Patterns"]
    : language.slug === 'tailwind'
    ? ["Fundamentals", "Core Concepts", "Layout", "Effects & Interactivity", "Advanced Features", "Responsive Design", "Forms & UI Components", "Optimization", "Design Systems", "Typography", "Accessibility", "Filters & Effects", "Utilities", "Advanced Patterns", "Modern CSS", "Variants & Modifiers", "Gradients & Images", "SVG & Icons", "Printing", "Best Practices", "Tooling"]
    : language.slug === 'angular'
    ? ["1. Introduction & Setup", "2. Components", "3. Templates & Data Binding", "4. Directives", "5. Pipes", "6. Services & DI", "7. RxJS & Observables", "8. Forms", "9. Routing & Navigation", "10. HTTP Client", "11. State Management", "12. Modules", "13. Standalone Components", "14. Change Detection", "15. Animations", "16. Testing", "17. Performance", "18. CLI & Build", "19. Material & CDK", "20. Modern Angular", "21. Angular 16+", "22. Angular 17+", "23. Angular 18+", "24. Best Practices"]
    : language.slug === 'dsa'
    ? dsaCategoryOrder
    : language.slug === 'rxjs'
    ? rxjsCategoryOrder
    : language.slug === 'playwright'
    ? ["1. Getting Started", "2. Core Concepts", "3. Assertions & Expectations", "4. Test Organization", "5. Configuration", "6. Advanced Locators", "7. Network & API Testing", "8. Authentication & State", "9. Visual Testing", "10. Debugging & Development", "11. Parallelization & Performance", "12. Reporters & Results", "13. Mobile & Device Testing", "14. Advanced Features", "15. Accessibility Testing", "16. CI/CD Integration", "17. TypeScript Integration", "18. Best Practices"]
    : language.slug === 'vue'
    ? ["1. Getting Started", "2. Essentials", "3. Components In-Depth", "4. Reusability", "5. Built-in Components", "6. Scaling Up", "7. Composition API", "8. Reactivity In Depth", "9. Rendering Mechanism", "10. Vue Router", "11. Pinia (State Management)", "12. VueUse (Utilities)", "13. TypeScript with Vue", "14. Best Practices", "15. Testing", "16. Tooling & Ecosystem", "17. Server-Side Rendering", "18. Migration & Compatibility", "19. API Reference"]
    : language.slug === 'nextjs'
    ? ["1. Getting Started", "2. Routing Fundamentals", "3. App Router", "4. Data Fetching", "5. Server Components & Actions", "6. Client Components", "7. Rendering Strategies", "8. Caching & Revalidation", "9. Styling", "10. Optimizations", "11. API Routes", "12. Middleware", "13. Authentication", "14. Internationalization", "15. Testing", "16. Deployment", "17. Configuration", "18. Advanced Patterns", "19. Performance", "20. API Reference"]
    : language.slug === 'selenium'
    ? ["Overview", "1. Getting Started", "2. Browser Configuration", "3. Locator Strategies", "4. Element Interactions", "5. Waits & Synchronization", "6. Browser Navigation", "7. Advanced Interactions", "8. Frames & Alerts", "9. JavaScript Execution", "10. Screenshots & Visual Testing", "11. Cookies & Storage", "12. Test Frameworks Integration", "13. Page Object Model", "14. Data-Driven Testing", "15. Selenium Grid", "16. Handling Special Elements", "17. Error Handling & Debugging", "18. CI/CD Integration", "19. Performance & Optimization", "20. Best Practices", "21. Framework Architecture", "22. BDD & Cucumber Integration", "23. Reporting & Documentation", "24. API & UI Combined Testing", "25. Mobile Web Testing", "26. Advanced Design Patterns", "27. Selenium 4 Features", "28. Security Testing", "29. Accessibility Testing", "30. Performance Testing Integration", "31. Test Management & Organization", "32. Real-World Scenarios", "33. Interview Preparation"]
    : [];

  // Build ordered groups array for generic component (HTML, JavaScript, TypeScript, CSS, Tailwind, SCSS, Angular, Java, Spring, Spring Boot, Playwright, Selenium, Vue, Next.js, DSA)
  const orderedGroupsForGeneric = (language.slug === 'html' || language.slug === 'javascript' || language.slug === 'typescript' || language.slug === 'css' || language.slug === 'tailwind' || language.slug === 'scss' || language.slug === 'angular' || language.slug === 'java' || language.slug === 'spring' || language.slug === 'spring-boot' || language.slug === 'playwright' || language.slug === 'selenium' || language.slug === 'vue' || language.slug === 'nextjs' || language.slug === 'dsa')
    ? groupOrder
        .map(group => ({ title: formatGroupTitle(group), topics: topicsByGroup[group] || [] }))
        .filter(group => {
          // Remove "Others" category from Next.js and Vue.js roadmaps
          if ((language.slug === 'nextjs' || language.slug === 'vue') && group.title === 'Others') {
            return false;
          }
          return group.topics.length > 0;
        })
    : [];

  const renderTopicGroup = (title: string, topics: typeof language.topics) => {
    if (!topics || topics.length === 0) return null;
    
    // Calculate group progress
    const completedCount = topics.filter(t => completedTopics.has(t.slug)).length;
    const totalCount = topics.length;
    const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const isGroupComplete = completedCount === totalCount && totalCount > 0;
    
    return (
      <div key={title} className="space-y-2">
        {/* Enhanced Group Header */}
        <div className="relative px-2 py-2 rounded-lg bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300 group">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1">
              {isGroupComplete ? (
                <Sparkles className="w-4 h-4 text-primary shrink-0 animate-pulse" />
              ) : (
                <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0" />
              )}
              <p className={cn(
                "text-sm font-bold transition-colors line-clamp-1 truncate",
                isGroupComplete ? "text-primary" : "text-foreground"
              )}>
                {formatGroupTitle(title)}
              </p>
            </div>
            
            {/* Progress Badge */}
            {isUserAuthenticated && totalCount > 0 && (
              <span className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-md font-semibold shrink-0 transition-all duration-300",
                isGroupComplete 
                  ? "bg-primary/15 text-primary border border-primary/20" 
                  : "bg-muted/80 text-muted-foreground border border-border"
              )}>
                {completedCount}/{totalCount}
              </span>
            )}
          </div>
          
          {/* Progress Bar */}
          {isUserAuthenticated && totalCount > 0 && completedCount > 0 && (
            <div className="mt-2 h-1 w-full bg-muted/50 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  isGroupComplete 
                    ? "bg-primary" 
                    : "bg-primary/70"
                )}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          )}
        </div>
        
        {/* Enhanced Topic List */}
        <div className={cn(
          "ml-4 border-l-2 border-border pl-3 space-y-0.5 transition-all duration-300"
        )}>
          {topics.map((topic) => {
            const isCompleted = completedTopics.has(topic.slug);
            const isActive = selectedTopicSlug === topic.slug;
            
            const truncatedTitle = topic.title
              ? (topic.title.length > 48 ? `${topic.title.slice(0, 45)}…` : topic.title)
              : topic.slug;

            return (
              <SidebarMenuItem key={topic.slug}>
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
                    href={`/languages/${language.slug}/${topic.slug}`} 
                    ref={isActive ? activeItemRef : null} 
                    className={cn(
                      "flex items-center gap-2 w-full transition-colors",
                      isActive && brandTheme.activeMenuLink
                    )}
                  >
                    {/* Status Icon */}
                    {isCompleted && isUserAuthenticated ? (
                      <CheckCircle className={cn(
                        "w-4 h-4 transition-all duration-200 shrink-0",
                        isActive ? "text-primary" : "text-primary/70"
                      )} />
                    ) : isActive ? (
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-muted-foreground/40 group-hover/item:border-muted-foreground/60 transition-all duration-200 shrink-0" />
                    )}
                    
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
  };

  const learningPlanButton = (
    <SidebarMenuButton
      asChild
      isActive={selectedTopicSlug === learningPlanTopic?.slug}
      tooltip={learningPlanTopic?.title}
      className={cn(
        "justify-start text-sm transition-colors",
        selectedTopicSlug === learningPlanTopic?.slug && cn(
          brandTheme.primary,
          "font-semibold",
          brandTheme.activeMenuContainer
        )
      )}
      disabled={!isUserAuthenticated}
    >
       <Link href={`/languages/${language.slug}/${learningPlanTopic?.slug}`} ref={selectedTopicSlug === learningPlanTopic?.slug ? activeItemRef : null} className={cn(
        "flex items-center gap-2 transition-colors",
        selectedTopicSlug === learningPlanTopic?.slug && brandTheme.activeMenuLink
       )}>
          {learningPlanTopic?.title}
       </Link>
    </SidebarMenuButton>
  )

  const interviewButton = (
    <SidebarMenuButton
      asChild
      isActive={selectedTopicSlug === interviewTopic?.slug}
      tooltip={interviewTopic?.title}
      className={cn(
        "justify-start text-sm transition-colors",
        selectedTopicSlug === interviewTopic?.slug && cn(
          brandTheme.primary,
          "font-semibold",
          brandTheme.activeMenuContainer
        )
      )}
    >
       <Link href={`/languages/${language.slug}/${interviewTopic?.slug}`} ref={selectedTopicSlug === interviewTopic?.slug ? activeItemRef : null} className={cn(
        "flex items-center gap-2 transition-colors",
        selectedTopicSlug === interviewTopic?.slug && brandTheme.activeMenuLink
       )}>
          {interviewTopic?.title}
       </Link>
    </SidebarMenuButton>
  );

  const reactUpdatesButton = (
    <SidebarMenuButton
      asChild
      isActive={selectedTopicSlug === reactUpdatesTopic?.slug}
      tooltip={reactUpdatesTopic?.title}
      className={cn(
        "justify-start text-sm transition-colors",
        selectedTopicSlug === reactUpdatesTopic?.slug && cn(
          brandTheme.primary,
          "font-semibold",
          brandTheme.activeMenuContainer
        )
      )}
    >
      <Link href={`/languages/${language.slug}/${reactUpdatesTopic?.slug}`} ref={selectedTopicSlug === reactUpdatesTopic?.slug ? activeItemRef : null} className={cn(
        "flex items-center gap-2 transition-colors",
        selectedTopicSlug === reactUpdatesTopic?.slug && brandTheme.activeMenuLink
      )}>
          {reactUpdatesTopic?.title}
      </Link>
    </SidebarMenuButton>
  );

  const mainLinks = [
    learningPlanTopic && {
      key: learningPlanTopic.slug,
      content: isUserAuthenticated ? learningPlanButton : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><div className="w-full">{learningPlanButton}</div></TooltipTrigger>
            <TooltipContent><p>Sign in to track your progress.</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
    },
    interviewTopic && {
      key: interviewTopic.slug,
      content: interviewButton,
    },
    reactUpdatesTopic && language.slug === 'react' && {
      key: reactUpdatesTopic.slug,
      content: reactUpdatesButton,
    },
  ].filter((link): link is { key: string; content: React.ReactElement } => Boolean(link));

  return (
    <>
      <SidebarHeader className="p-4">
        <Logo align="left" />
      </SidebarHeader>
      <Separator />
      <SidebarContent asChild>
        <ScrollArea>
           <div className="h-full">
              <SidebarMenu className="p-4 space-y-4">
                {mainLinks.map(link => (
                  <div key={link.key}>
                    <SidebarMenuItem>{link.content}</SidebarMenuItem>
                  </div>
                ))}

                <Separator />

                <div className='space-y-4'>
                  <p className={cn(
                    "px-2 py-1 text-xl font-semibold transition-colors",
                    brandTheme.primary
                  )}>Topics</p>
                  {(language.slug === 'html' || language.slug === 'javascript' || language.slug === 'typescript' || language.slug === 'css' || language.slug === 'tailwind' || language.slug === 'scss' || language.slug === 'angular' || language.slug === 'java' || language.slug === 'spring' || language.slug === 'spring-boot' || language.slug === 'playwright' || language.slug === 'selenium' || language.slug === 'vue' || language.slug === 'nextjs' || language.slug === 'dsa') ? (
                    <GenericGroupedTopicMenu
                      groups={orderedGroupsForGeneric}
                      selectedTopicSlug={selectedTopicSlug}
                      completedTopics={completedTopics as Set<string>}
                      isUserAuthenticated={!!isUserAuthenticated}
                      languageSlug={language.slug}
                      activeItemRef={activeItemRef}
                    />
                  ) : (
                    groupOrder.map(groupName => renderTopicGroup(groupName, topicsByGroup[groupName]))
                  )}
                </div>

              </SidebarMenu>
           </div>
        </ScrollArea>
      </SidebarContent>
    </>
  );
}
