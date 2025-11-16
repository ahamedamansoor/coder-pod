
'use client';
import React, { useEffect, useRef } from 'react';
import type { Language } from '@/app/data';
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
import { useUser } from '@/firebase';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TopicSidebarProps {
  language: Language;
  selectedTopicSlug: string | null;
}

function useLanguageContext(language: Language) {
    if (language.slug === 'java') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useJava();
    }
    if (language.slug === 'spring') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useSpring();
    }
    if (language.slug === 'javascript') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useJavascript();
    }
    if (language.slug === 'react') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useReact();
    }
    // Fallback or default context if necessary
    return { completedTopics: new Set(), handleToggleComplete: () => {}, isProgressLoading: true };
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
            "Spring Core": ['spring-core-overview', 'ioc-and-dependency-injection', 'spring-beans'],
            "Data & Persistence": ['spring-data-jpa', 'jdbc-template'],
            "Spring MVC & Web": ['spring-mvc', 'rest-controllers'],
            "Spring Boot": ['spring-boot-basics', 'autoconfiguration'],
            "Advanced Topics": ['spring-security', 'testing-in-spring', 'spring-aop', 'spring-webflux'],
            "Spring Ecosystem": ['spring-cloud', 'spring-kafka'],
        };
         for (const groupName in springGroups) {
            if (springGroups[groupName].includes(topic.slug)) {
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
        "Core Concepts": ['what-is-react', 'jsx', 'react-components', 'react-state', 'react-lifecycle'],
        "Rendering": ['conditional-rendering', 'lists-and-keys'],
        "Forms & Events": ['react-forms'],
        "Hooks": ['use-state-hook', 'use-effect-hook', 'use-context-hook', 'custom-hooks'],
        "Advanced": ['react-router', 'react-state-management', 'react-performance'],
      };
        for (const groupName in reactGroups) {
          if (reactGroups[groupName].includes(topic.slug)) {
              group = groupName;
              break;
          }
      }
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
    ? ["Spring Core", "Data & Persistence", "Spring MVC & Web", "Spring Boot", "Advanced Topics", "Spring Ecosystem", "Others"]
    : language.slug === 'javascript'
    ? ["Fundamentals", "Functions & Scope", "Data Structures", "Control Flow", "Browser APIs", "Asynchronous JS", "Modern JS", "Others"]
    : language.slug === 'react'
    ? ["Core Concepts", "Rendering", "Forms & Events", "Hooks", "Advanced", "Others"]
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
                  <div>
                    <SidebarMenuItem key={learningPlanTopic.slug}>
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
