
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
    // Fallback or default context if necessary
    return { completedTopics: new Set(), handleToggleComplete: () => {}, isProgressLoading: true };
}


export function TopicSidebar({
  language,
  selectedTopicSlug,
}: TopicSidebarProps) {
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const { completedTopics } = useLanguageContext(language);
  const { user } = useUser();


  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      const activeElement = activeItemRef.current;
      const scrollContainer = scrollContainerRef.current;
      
      const containerRect = scrollContainer.getBoundingClientRect();
      const itemRect = activeElement.getBoundingClientRect();

      const isVisible = itemRect.top >= containerRect.top && itemRect.bottom <= containerRect.bottom;

      if (!isVisible) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
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
            "Strings": ['strings'],
            "Arrays": ['arrays', 'multi-dimensional-arrays'],
            "Methods": ['methods', 'method-parameters', 'method-overloading', 'scope', 'recursion'],
            "Object-Oriented Programming": ['classes-objects', 'class-attributes', 'class-methods', 'constructors', 'access-modifiers', 'encapsulation', 'packages', 'inheritance', 'polymorphism', 'inner-classes', 'abstraction', 'interfaces', 'enums'],
            "Collections": ['linkedlist', 'hashmap', 'hashset', 'iterator', 'wrapper-classes'],
            "Advanced Topics": ['exceptions', 'regex', 'threads', 'lambda', 'file-handling', 'date-time'],
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
    }

    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(topic);
    return acc;
  }, {} as Record<string, typeof language.topics>);

  const groupOrder = language.slug === 'java' 
    ? ["Getting Started", "Basic Output", "Variables & Data Types", "Operators", "User Input", "Control Flow", "Strings", "Arrays", "Methods", "Object-Oriented Programming", "Collections", "Advanced Topics", "Others"]
    : ["Spring Core", "Data & Persistence", "Spring MVC & Web", "Spring Boot", "Advanced Topics", "Spring Ecosystem", "Others"];

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
           <div ref={scrollContainerRef} className="h-full">
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
