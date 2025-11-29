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
import { useHtml } from '@/app/languages/html/html-context';
import { useCss } from '@/app/languages/css/css-context';
import { useScss } from '@/app/languages/scss/scss-context';
import { useDsa } from '@/app/languages/dsa/dsa-context';
import { useRxjs } from '@/app/languages/rxjs/rxjs-context';
import { useUser } from '@/firebase';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GenericGroupedTopicMenu } from './generic-grouped-topic-menu';
import { cn } from '@/lib/utils';
import { dsaCategoryOrder } from '@/data/dsa-roadmap';
import { rxjsCategoryOrder } from '@/data/rxjs-roadmap';

// A new hook for Spring Boot will be needed here
// import { useSpringBoot } from '@/app/spring-boot/spring-boot-context';


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
        // Add case for spring-boot when its context is created
        case 'javascript':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useJavascript();
        case 'react':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useReact();
        case 'html':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useHtml();
        case 'css':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useCss();
        case 'scss':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useScss();
        case 'dsa':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useDsa();
        case 'rxjs':
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useRxjs();
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
  
  const { completedTopics } = useLanguageContext(language);
  const { user } = useUser();
  const isUserAuthenticated = user && !user.isAnonymous;
  // Use Coder Pod brand color (primary token) for all sidebar elements
  const brandTheme = {
    primary: 'text-primary',
    textSecondary: 'text-muted-foreground',
    activeMenuContainer: '!bg-primary/10 !border-primary/40',
    activeMenuLink: '!text-primary',
  };

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

    if (language.slug === 'java') {
        const javaGroups: Record<string, string[]> = {
            "Getting Started": ['what-is-java', 'history-of-java', 'features-of-java', 'jdk-jre-jvm', 'how-java-works', 'setting-up-environment', 'first-java-program', 'comments-in-java'],
            "Basic Output": ['print-statements-and-format-specifiers', 'escape-sequences'],
            "Variables & Data Types": ['variables', 'data-types', 'type-casting', 'constants', 'literals'],
            "Operators": ['arithmetic-operators', 'assignment-operators', 'comparison-operators', 'logical-operators', 'bitwise-operators', 'ternary-operator', 'operator-precedence'],
            "User Input": ['scanner-class', 'reading-different-types', 'input-validation'],
            "Control Flow": ['if-else', 'switch', 'for-loop', 'while-loop', 'break-continue'],
            "Strings & Arrays": ['strings', 'arrays', 'multi-dimensional-arrays'],
            "Methods & OOP Basics": ['methods', 'method-parameters', 'method-overloading', 'scope', 'recursion', 'classes-objects', 'constructors'],
            "Advanced OOP": ['class-attributes', 'class-methods', 'access-modifiers', 'encapsulation', 'packages', 'inheritance', 'super-keyword', 'method-overriding', 'polymorphism', 'instanceof-operator', 'inner-classes', 'abstraction', 'interfaces', 'enums', 'object-class'],
            "Advanced Collections": ['arraylist', 'linkedlist', 'hashmap', 'hashset', 'treemap-treeset', 'queue-deque', 'comparable-comparator', 'iterator', 'wrapper-classes'],
            "Error Handling & Generics": ['exceptions', 'generics-intro', 'generics-methods-classes'],
            "Functional Programming": ['lambda', 'streams-api', 'optional-class', 'method-references'],
            "Advanced Concurrency": ['threads', 'synchronized-keyword', 'volatile-keyword', 'executors-thread-pools'],
            "Files & Regex": ['file-handling', 'regex', 'date-time'],
        };
        for (const groupName in javaGroups) {
            if (javaGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
        }
    } else if (language.slug === 'spring') {
        const springGroups: Record<string, string[]> = {
            "Spring Core Concepts": ['spring-modules-overview', 'ioc-container-and-beans'],
            "Advanced Dependency Injection": ['dependency-injection-overview', 'constructor-injection', 'setter-injection', 'injecting-collections'],
            "Bean Configuration": ['bean-scopes', 'bean-lifecycle-and-inheritance'],
        };
         for (const groupName in springGroups) {
            if (springGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
        }
    } else if (language.slug === 'spring-boot') {
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
    } else if (language.slug === 'react') {
        const allTopics = language.topics.filter(t => !['learning-plan', 'interview-questions', 'react-version-updates'].includes(t.slug));
        const reactGroups: Record<string, string[]> = {
            '1. Getting Started': allTopics.slice(0, 5).map(t => t.slug),
            '2. Describing the UI': allTopics.slice(5, 10).map(t => t.slug),
            '3. Adding Interactivity': allTopics.slice(10, 17).map(t => t.slug),
            '4. Managing State': allTopics.slice(17, 21).map(t => t.slug),
            '5. Escape Hatches': allTopics.slice(21, 30).map(t => t.slug),
            '6. Hooks (Comprehensive)': allTopics.slice(30, 47).map(t => t.slug),
            '7. Component APIs': allTopics.slice(47, 54).map(t => t.slug),
            '8. ReactDOM APIs': allTopics.slice(54, 55).map(t => t.slug),
            '9. Form Handling': allTopics.slice(55, 58).map(t => t.slug),
            '10. Advanced Patterns': allTopics.slice(58, 65).map(t => t.slug),
            '11. Context API': allTopics.slice(65, 71).map(t => t.slug),
            '12. Performance': allTopics.slice(71, 75).map(t => t.slug),
            '13. Testing': allTopics.slice(75, 80).map(t => t.slug),
            '14. Deployment': allTopics.slice(80, 83).map(t => t.slug),
            '15. TypeScript Integration': allTopics.slice(83, 89).map(t => t.slug),
            '16. Advanced Features': allTopics.slice(89, 94).map(t => t.slug),
            '17. Developer Tools': allTopics.slice(94, 96).map(t => t.slug),
            '18. API Reference': allTopics.slice(96, 99).map(t => t.slug),
            '19. Rules & Best Practices': allTopics.slice(99, 102).map(t => t.slug),
            '20. Thinking in React': allTopics.slice(102, 105).map(t => t.slug)
        };
        for (const groupName in reactGroups) {
          if (reactGroups[groupName].includes(topic.slug)) {
              group = groupName;
              break;
          }
        }
    } else if (language.slug === 'html') {
        // New categories aligned with learning roadmap reorganization
        const htmlGroups: Record<string, string[]> = {
          'Foundation': ['introduction-to-html', 'document-structure'],
          'Core Building Blocks': ['html-elements-and-tags','html-headings-and-paragraphs','text-formatting','html-attributes','global-attributes','html-comments','character-entities'],
          'Grouping & Layout': ['block-vs-inline','html-lists','html-links','html-images','html-tables','html-semantic-elements'],
          'Forms & User Input': ['html-forms','form-input-types','form-attributes','form-validation','datalist-element','output-element','progress-and-meter'],
          'Media & Graphics': ['audio-and-video','responsive-images','iframes','svg-and-canvas'],
          'Interactive & Components': ['details-and-summary','dialog-element','popover-api','template-and-slot','content-editable','data-attributes'],
          'Web Components': ['web-components-introduction','custom-elements','shadow-dom','web-component-templates','web-component-slots','web-component-lifecycle','web-component-attributes','web-component-styling','web-component-events','web-components-advanced'],
          'Performance & Enhancement': ['lazy-loading','content-visibility','advanced-tables'],
          'Browser & Platform APIs': ['html5-latest-features','fetch-api','web-storage-api','geolocation-api','drag-and-drop-api','web-workers-api'],
          'Metadata & SEO': ['meta-tags-and-seo','html-document-metadata','microdata-structured-data'],
          'Accessibility & Quality': ['accessibility','html-best-practices'],
        };
        for (const groupName in htmlGroups) {
          if (htmlGroups[groupName].includes(topic.slug)) {
            group = groupName;
            break;
          }
        }
    } else if (language.slug === 'css') {
      const cssGroups: Record<string, string[]> = {
            "Fundamentals": ['introduction-to-css', 'css-syntax-and-selectors', 'css-specificity', 'css-units'],
            "Styling Basics": ['css-colors', 'css-typography', 'css-text-effects'],
            "Box Model & Layout": ['css-box-model', 'css-display', 'css-positioning', 'css-float-clear'],
            "Advanced Selectors": ['css-combinators', 'css-attribute-selectors', 'css-pseudo-classes', 'css-pseudo-elements'],
            "Modern Layout": ['css-flexbox', 'css-grid', 'css-layout-patterns'],
            "Responsive Design": ['css-responsive-design', 'css-media-queries', 'css-container-queries'],
            "Animations & Effects": ['css-transitions', 'css-animations', 'css-transforms'],
            "Advanced CSS": ['css-variables', 'css-functions', 'css-logical-properties', 'css-modern-features'],
            "Professional CSS": ['css-performance', 'css-architecture', 'css-debugging', 'css-best-practices'],
        };
        for (const groupName in cssGroups) {
            if (cssGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
        }
    } else if (language.slug === 'scss') {
        const scssGroups: Record<string, string[]> = {
            "1. Fundamentals": ['what-is-sass', 'sass-installation', 'sass-comments', 'sass-variables'],
            "2. Nesting & Selectors": ['sass-nesting', 'sass-parent-selector'],
            "3. File Organization": ['sass-import', 'sass-modules'],
            "4. Reusability": ['sass-mixin', 'sass-extend-inheritance', 'sass-placeholder', 'sass-functions'],
            "5. Control & Logic": ['sass-operators', 'sass-interpolation', 'sass-control-directives'],
            "6. Data Types & Functions": ['sass-string', 'sass-numeric', 'sass-list', 'sass-map', 'sass-color', 'sass-selector', 'sass-introspection'],
            "7. Advanced Topics": ['sass-advanced-nesting', 'sass-custom-functions', 'sass-responsive-mixins', 'sass-debugging'],
            "8. Professional Development": ['sass-architecture', 'sass-performance', 'sass-advanced-patterns'],
        };
        for (const groupName in scssGroups) {
            if (scssGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
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
    ? ['Foundation','Core Building Blocks','Grouping & Layout','Forms & User Input','Media & Graphics','Interactive & Components','Web Components','Performance & Enhancement','Browser & Platform APIs','Metadata & SEO','Accessibility & Quality']
    : language.slug === 'java'
    ? ["Getting Started", "Basic Output", "Variables & Data Types", "Operators", "User Input", "Control Flow", "Strings & Arrays", "Methods & OOP Basics", "Advanced OOP", "Advanced Collections", "Error Handling & Generics", "Functional Programming", "Advanced Concurrency", "Files & Regex", "Others"]
    : language.slug === 'spring' 
    ? ["Spring Core Concepts", "Advanced Dependency Injection", "Bean Configuration"]
    : language.slug === 'spring-boot'
    ? ["Core Concepts", "Configuration", "Advanced", "Others"]
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
        "15. Security & Testing",
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
        '7. Component APIs',
        '8. ReactDOM APIs',
        '9. Form Handling',
        '10. Advanced Patterns',
        '11. Context API',
        '12. Performance',
        '13. Testing',
        '14. Deployment',
        '15. TypeScript Integration',
        '16. Advanced Features',
        '17. Developer Tools',
        '18. API Reference',
        '19. Rules & Best Practices',
        '20. Thinking in React'
      ]
    : language.slug === 'css'
    ? ["Fundamentals", "Styling Basics", "Box Model & Layout", "Advanced Selectors", "Modern Layout", "Responsive Design", "Animations & Effects", "Advanced CSS", "Professional CSS"]
    : language.slug === 'scss'
    ? ["1. Fundamentals", "2. Nesting & Selectors", "3. File Organization", "4. Reusability", "5. Control & Logic", "6. Data Types & Functions", "7. Advanced Topics", "8. Professional Development"]
    : language.slug === 'dsa'
    ? dsaCategoryOrder
    : language.slug === 'rxjs'
    ? rxjsCategoryOrder
    : [];

  // Build ordered groups array for generic component (HTML and JavaScript)
  const orderedGroupsForGeneric = (language.slug === 'html' || language.slug === 'javascript')
    ? groupOrder.map(group => ({ title: group, topics: topicsByGroup[group] || [] }))
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
                {title}
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
            
            const truncatedTitle =
              topic.title.length > 48 ? `${topic.title.slice(0, 45)}…` : topic.title;

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
                    href={`/${language.slug}/${topic.slug}`} 
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
       <Link href={`/${language.slug}/${learningPlanTopic?.slug}`} ref={selectedTopicSlug === learningPlanTopic?.slug ? activeItemRef : null} className={cn(
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
       <Link href={`/${language.slug}/${interviewTopic?.slug}`} ref={selectedTopicSlug === interviewTopic?.slug ? activeItemRef : null} className={cn(
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
      <Link href={`/${language.slug}/${reactUpdatesTopic?.slug}`} ref={selectedTopicSlug === reactUpdatesTopic?.slug ? activeItemRef : null} className={cn(
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
        <Logo />
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
                  {(language.slug === 'html' || language.slug === 'javascript') ? (
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
