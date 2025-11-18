
'use client';
import React, { useEffect, useRef } from 'react';
import type { Language } from '@/app/data/index';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Logo } from './logo';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useJava } from '@/app/java/java-context';
import { useSpring } from '@/app/spring/spring-context';
import { useJavascript } from '@/app/javascript/javascript-context';
import { useReact } from '@/app/react/react-context';
import { useHtml } from '@/app/html/html-context';
import { useCss } from '@/app/css/css-context';
import { useScss } from '@/app/scss/scss-context';
import { useUser } from '@/firebase';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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

  useEffect(() => {
    if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
    }
  }, [selectedTopicSlug]);

  const learningPlanTopic = language.topics.find(t => t.slug === 'learning-plan');
  
  const topicsByGroup = language.topics.reduce((acc, topic) => {
    if (topic.slug === 'learning-plan') return acc;
    
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
      const jsGroups: Record<string, string[]> = {
        "Fundamentals": ['introduction-to-js', 'js-variables', 'js-data-types', 'js-operators'],
        "Functions & Scope": ['js-functions', 'js-scope'],
        "Data Structures": ['js-objects', 'js-arrays', 'js-array-methods'],
        "Control Flow": ['js-loops', 'js-conditionals'],
        "Browser APIs": ['js-dom-manipulation', 'js-events'],
        "Asynchronous JS": ['js-async'],
        "Modern JS": ['js-es6'],
      };
       for (const groupName in jsGroups) {
          if (jsGroups[groupName].includes(topic.slug)) {
              group = groupName;
              break;
          }
      }
    } else if (language.slug === 'react') {
        const reactGroups: Record<string, string[]> = {
            "Fundamentals": ['what-is-react', 'setting-up-react', 'jsx', 'react-components', 'react-state', 'handling-events'],
            "Rendering UI": ['conditional-rendering', 'lists-and-keys', 'react-forms'],
            "Hooks Deep Dive": ['rules-of-hooks', 'use-state-hook', 'use-effect-hook', 'use-context-hook', 'use-reducer-hook', 'use-ref-hook', 'memoization-hooks', 'custom-hooks'],
            "Advanced React": ['react-router', 'state-management-libraries', 'composition-patterns', 'error-boundaries', 'code-splitting'],
            "Ecosystem & Modern React": ['react-and-typescript', 'react-performance', 'server-vs-client-components', 'testing-react-apps']
        };
        for (const groupName in reactGroups) {
          if (reactGroups[groupName].includes(topic.slug)) {
              group = groupName;
              break;
          }
      }
    } else if (language.slug === 'html') {
        const htmlGroups: Record<string, string[]> = {
            "HTML Basics": ['introduction-to-html', 'document-structure', 'html-elements-and-tags', 'html-attributes', 'html-headings-and-paragraphs', 'text-formatting', 'html-comments', 'character-entities'],
            "Content & Structure": ['html-lists', 'html-links', 'html-images', 'block-vs-inline', 'html-tables', 'html-semantic-elements'],
            "Forms & Input": ['html-forms', 'form-input-types', 'form-attributes', 'form-validation', 'datalist-element', 'output-element'],
            "Media & Graphics": ['audio-and-video', 'iframes', 'svg-and-canvas', 'responsive-images'],
            "Advanced Topics & HTML5 Features": ['html5-latest-features', 'dialog-element', 'popover-api', 'details-and-summary', 'lazy-loading', 'content-visibility', 'template-and-slot', 'data-attributes', 'content-editable', 'progress-and-meter', 'advanced-tables'],
            "Metadata, SEO, and Best Practices": ['meta-tags-and-seo', 'html-document-metadata', 'microdata-structured-data', 'html-best-practices', 'global-attributes'],
            "API & Interactivity": ['html5-apis', 'web-storage-api', 'fetch-api', 'geolocation-api', 'drag-and-drop-api', 'web-workers-api', 'accessibility'],
            "Practice": ['interview-questions', 'interview-simulator'],
        };
        for (const groupName in htmlGroups) {
            if (htmlGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
        }
    } else if (language.slug === 'css') {
      const cssGroups: Record<string, string[]> = {
            "CSS Fundamentals": ['introduction-to-css', 'css-syntax-and-selectors', 'css-colors', 'css-box-model', 'css-typography', 'css-combinators'],
            "Layout": ['css-positioning', 'css-flexbox', 'css-grid'],
            "Advanced Styling": ['css-pseudo-classes', 'css-pseudo-elements', 'css-variables'],
            "Animation & Interactivity": ['css-transitions', 'css-animations'],
            "Responsive Design": ['css-responsive-design'],
        };
        for (const groupName in cssGroups) {
            if (cssGroups[groupName].includes(topic.slug)) {
                group = groupName;
                break;
            }
        }
    } else if (language.slug === 'scss') {
        group = 'Sass/SCSS Basics';
    }


    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(topic);
    return acc;
  }, {} as Record<string, typeof language.topics>);

  const groupOrder = language.slug === 'java' 
    ? ["Getting Started", "Basic Output", "Variables & Data Types", "Operators", "User Input", "Control Flow", "Strings & Arrays", "Methods & OOP Basics", "Advanced OOP", "Advanced Collections", "Error Handling & Generics", "Functional Programming", "Advanced Concurrency", "Files & Regex", "Others"]
    : language.slug === 'spring' 
    ? ["Spring Core Concepts", "Advanced Dependency Injection", "Bean Configuration"]
    : language.slug === 'spring-boot'
    ? ["Core Concepts", "Configuration", "Advanced", "Others"]
    : language.slug === 'javascript'
    ? ["Fundamentals", "Functions & Scope", "Data Structures", "Control Flow", "Browser APIs", "Asynchronous JS", "Modern JS", "Others"]
    : language.slug === 'react'
    ? ["Fundamentals", "Rendering UI", "Hooks Deep Dive", "Advanced React", "Ecosystem & Modern React", "Others"]
    : language.slug === 'html'
    ? ["HTML Basics", "Content & Structure", "Forms & Input", "Media & Graphics", "Advanced Topics & HTML5 Features", "Metadata, SEO, and Best Practices", "API & Interactivity", "Practice", "Others"]
    : language.slug === 'css'
    ? ["CSS Fundamentals", "Layout", "Advanced Styling", "Animation & Interactivity", "Responsive Design", "Others"]
    : language.slug === 'scss'
    ? ['Sass/SCSS Basics']
    : [];

  const renderTopicGroup = (title: string, topics: typeof language.topics) => (
    topics && topics.length > 0 && (
      <div key={title} className="space-y-2">
        <p className="px-2 text-md font-semibold text-foreground">{title}</p>
        <div className="ml-2 border-l pl-2 space-y-1">
          {topics.map((topic) => (
            <SidebarMenuItem key={topic.slug}>
              <SidebarMenuButton
                asChild
                isActive={selectedTopicSlug === topic.slug}
                tooltip={topic.title}
                className="justify-start text-sm"
              >
                <Link href={`/${language.slug}/${topic.slug}`} ref={selectedTopicSlug === topic.slug ? activeItemRef : null}>
                  {completedTopics.has(topic.slug) && isUserAuthenticated && <CheckCircle className="text-primary" />}
                  {topic.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </div>
      </div>
    )
  );

  const learningPlanButton = (
    <SidebarMenuButton
      asChild
      isActive={selectedTopicSlug === learningPlanTopic?.slug}
      tooltip={learningPlanTopic?.title}
      className="justify-start"
      disabled={!isUserAuthenticated}
    >
       <Link href={`/${language.slug}/${learningPlanTopic?.slug}`} ref={selectedTopicSlug === learningPlanTopic?.slug ? activeItemRef : null}>
          {learningPlanTopic?.title}
       </Link>
    </SidebarMenuButton>
  )

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
                {learningPlanTopic && (
                  <div key={learningPlanTopic.slug}>
                    <SidebarMenuItem>
                      {isUserAuthenticated ? (
                        learningPlanButton
                      ) : (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="w-full">{learningPlanButton}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Sign in to track your progress.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </SidebarMenuItem>
                  </div>
                )}
                
                <Separator />

                <div className='space-y-4'>
                  <p className="px-2 py-1 text-xl font-semibold text-muted-foreground">Topics</p>
                  
                  {groupOrder.map(groupName => renderTopicGroup(groupName, topicsByGroup[groupName]))}
                </div>

              </SidebarMenu>
           </div>
        </ScrollArea>
      </SidebarContent>
    </>
  );
}
