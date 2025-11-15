
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

interface TopicSidebarProps {
  language: Language;
  selectedTopicSlug: string | null;
}

export function TopicSidebar({
  language,
  selectedTopicSlug,
}: TopicSidebarProps) {
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { completedTopics } = useJava();

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
  
  const gettingStartedTopics = language.topics.filter(t => 
    ['what-is-java', 'history-of-java', 'features-of-java', 'jdk-jre-jvm', 'how-java-works', 'setting-up-environment', 'first-java-program', 'comments-in-java'].includes(t.slug)
  );
  
  const basicOutputTopics = language.topics.filter(t => 
    ['print-statements-and-format-specifiers', 'escape-sequences'].includes(t.slug)
  );

  const variablesAndDataTypesTopics = language.topics.filter(t => 
    ['variables', 'data-types', 'type-casting', 'constants', 'literals'].includes(t.slug)
  );

  const operatorsTopics = language.topics.filter(t => 
    ['arithmetic-operators', 'assignment-operators', 'comparison-operators', 'logical-operators', 'bitwise-operators', 'ternary-operator', 'operator-precedence'].includes(t.slug)
  );

  const userInputTopics = language.topics.filter(t =>
    ['scanner-class', 'reading-different-types', 'input-validation'].includes(t.slug)
  );

  const controlFlowTopics = language.topics.filter(t =>
    ['if-else', 'switch', 'for-loop', 'while-loop', 'break-continue'].includes(t.slug)
  );

  const stringsTopics = language.topics.filter(t =>
    ['strings'].includes(t.slug)
  );

  const arraysTopics = language.topics.filter(t =>
    ['arrays', 'multi-dimensional-arrays'].includes(t.slug)
  );

  const methodsTopics = language.topics.filter(t =>
    ['methods', 'method-parameters', 'method-overloading', 'scope', 'recursion'].includes(t.slug)
  );

  const oopTopics = language.topics.filter(t =>
    ['classes-objects', 'class-attributes', 'class-methods', 'constructors', 'access-modifiers', 'encapsulation', 'packages', 'inheritance', 'polymorphism', 'inner-classes', 'abstraction', 'interfaces', 'enums'].includes(t.slug)
  );

  const collectionsTopics = language.topics.filter(t =>
    ['hashmap', 'hashset', 'iterator', 'wrapper-classes'].includes(t.slug)
  );

  const advancedTopics = language.topics.filter(t =>
    ['exceptions', 'regex', 'threads', 'lambda', 'file-handling', 'date-time'].includes(t.slug)
  );


  const otherTopics = language.topics.filter(t => 
    ![
      'learning-plan', 
      ...gettingStartedTopics.map(t => t.slug), 
      ...basicOutputTopics.map(t => t.slug), 
      ...variablesAndDataTypesTopics.map(t => t.slug), 
      ...operatorsTopics.map(t => t.slug),
      ...userInputTopics.map(t => t.slug),
      ...controlFlowTopics.map(t => t.slug),
      ...stringsTopics.map(t => t.slug),
      ...arraysTopics.map(t => t.slug),
      ...methodsTopics.map(t => t.slug),
      ...oopTopics.map(t => t.slug),
      ...collectionsTopics.map(t => t.slug),
      ...advancedTopics.map(t => t.slug),
    ].includes(t.slug)
  );

  const renderTopicGroup = (title: string, topics: typeof language.topics) => (
    topics.length > 0 && (
      <div className="space-y-2">
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
                <Link href={`/java/${topic.slug}`} ref={selectedTopicSlug === topic.slug ? activeItemRef : null}>
                  {completedTopics.has(topic.slug) && <CheckCircle className="text-primary" />}
                  {topic.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </div>
      </div>
    )
  );

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
                    <p className="px-2 py-1 text-xl font-semibold text-muted-foreground">Learning Path</p>
                    <SidebarMenuItem key={learningPlanTopic.slug}>
                      <SidebarMenuButton
                        asChild
                        isActive={selectedTopicSlug === learningPlanTopic.slug}
                        tooltip={learningPlanTopic.title}
                        className="justify-start"
                      >
                         <Link href={`/java/${learningPlanTopic.slug}`} ref={selectedTopicSlug === learningPlanTopic.slug ? activeItemRef : null}>
                            {learningPlanTopic.title}
                         </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </div>
                )}
                
                <div className='space-y-4'>
                  <p className="px-2 py-1 text-xl font-semibold text-muted-foreground">Topics</p>
                  
                  {renderTopicGroup("Getting Started", gettingStartedTopics)}
                  {renderTopicGroup("Basic Output", basicOutputTopics)}
                  {renderTopicGroup("Variables & Data Types", variablesAndDataTypesTopics)}
                  {renderTopicGroup("Operators", operatorsTopics)}
                  {renderTopicGroup("User Input", userInputTopics)}
                  {renderTopicGroup("Control Flow", controlFlowTopics)}
                  {renderTopicGroup("Strings", stringsTopics)}
                  {renderTopicGroup("Arrays", arraysTopics)}
                  {renderTopicGroup("Methods", methodsTopics)}
                  {renderTopicGroup("Object-Oriented Programming", oopTopics)}
                  {renderTopicGroup("Collections", collectionsTopics)}
                  {renderTopicGroup("Advanced Topics", advancedTopics)}

                  {otherTopics.map((topic) => (
                    <SidebarMenuItem key={topic.slug}>
                      <SidebarMenuButton
                        asChild
                        isActive={selectedTopicSlug === topic.slug}
                        tooltip={topic.title}
                        className="justify-start"
                      >
                        <Link href={`/java/${topic.slug}`} ref={selectedTopicSlug === topic.slug ? activeItemRef : null}>
                          {topic.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>

              </SidebarMenu>
           </div>
        </ScrollArea>
      </SidebarContent>
    </>
  );
}
