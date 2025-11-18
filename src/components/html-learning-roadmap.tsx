'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight } from 'lucide-react';
import { useHtml } from '@/app/html/html-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Language } from '@/app/data';

export const HtmlLearningRoadmap = ({ language }: { language: Language }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useHtml();
  const [expandedModule, setExpandedModule] = useState<string | null>("HTML Basics");
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  
  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const getTopicsForSlugs = (slugs: string[]) => {
    return language.topics.filter(topic => slugs.includes(topic.slug));
  };
  
  const modules = [
    {
      id: "HTML Basics",
      title: "HTML Basics",
      level: "Foundation",
      icon: "🚀",
      topics: getTopicsForSlugs(['introduction-to-html', 'document-structure', 'html-elements-and-tags', 'html-attributes', 'html-headings-and-paragraphs', 'text-formatting', 'html-comments']),
    },
    {
      id: "Content & Structure",
      title: "Content & Structure",
      level: "Core Concepts",
      icon: "🧱",
      topics: getTopicsForSlugs(['html-lists', 'html-links', 'html-images', 'block-vs-inline', 'html-tables', 'html-semantic-elements', 'character-entities']),
    },
    {
      id: "Forms & Input",
      title: "Forms & Input",
      level: "Core Concepts",
      icon: "📝",
      topics: getTopicsForSlugs(['html-forms', 'form-input-types', 'form-attributes']),
    },
    {
      id: "Media & Graphics",
      title: "Media & Graphics",
      level: "Advanced",
      icon: "🖼️",
      topics: getTopicsForSlugs(['audio-and-video', 'iframes', 'svg-and-canvas']),
    },
    {
      id: "Advanced Topics",
      title: "Advanced Topics",
      level: "Expert",
      icon: "✨",
      topics: getTopicsForSlugs(['html5-apis', 'web-workers-api', 'accessibility']),
    },
  ];

  const allTopics = modules.flatMap(m => m.topics);
  
  const chartData = modules.map(m => ({
    level: m.title,
    topics: m.topics.length,
    fill: `hsl(var(--chart-${modules.indexOf(m) + 1}))`
  }));

  const toggleTopic = (topicId: string) => {
    if (!isUserAuthenticated) return;
    handleToggleComplete(topicId);

    const topicModule = modules.find(m => m.topics.some(t => t.slug === topicId));
    if (!topicModule) return;
    
    const isCompleting = !completedTopics.has(topicId);
    if (isCompleting) {
        const allTopicsInModuleCompleted = topicModule.topics.every(t => completedTopics.has(t.slug) || t.slug === topicId);
        if (allTopicsInModuleCompleted) {
          const currentModuleIndex = modules.findIndex(m => m.id === topicModule.id);
          if (currentModuleIndex !== -1 && currentModuleIndex < modules.length - 1) {
            setExpandedModule(modules[currentModuleIndex + 1].id);
          }
        }
    }
  };

  const calculateProgress = () => {
    if (!isUserAuthenticated) return 0;
    const totalTopics = allTopics.length;
    if (totalTopics === 0) return 0;
    return Math.round((completedTopics.size / totalTopics) * 100);
  };

  if (isUserLoading || isProgressLoading) {
    return (
        <div className="p-2 md:p-6">
          <Skeleton className="h-48 w-full mb-8" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (<Skeleton key={i} className="h-24 w-full rounded-xl" />))}
          </div>
        </div>
    );
  }
  
  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = allTopics.length;
  
  const TopicItem = ({ topic }: { topic: (typeof allTopics)[0] }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.slug);
    const itemContent = (
      <div onClick={() => toggleTopic(topic.slug)} className={cn("bg-background border rounded-lg p-4 transition-all duration-200", isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50", !isUserAuthenticated && "cursor-not-allowed opacity-70", isCompleted ? 'border-primary bg-primary/5' : 'border-border')}>
        <div className="flex items-start gap-3">
          <div className="mt-1">{isCompleted ? <CheckCircle className="w-6 h-6 text-primary" /> : <Circle className="w-6 h-6 text-muted-foreground/50" />}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <Link href={`/${language.slug}/${topic.slug}`} className="hover:underline"><h3 className="text-lg font-semibold text-foreground">{topic.title}</h3></Link>
            </div>
            <p className="text-muted-foreground text-sm">{topic.explanation}</p>
          </div>
        </div>
      </div>
    );

    if (!isUserAuthenticated) {
      return (<TooltipProvider><UITooltip><TooltipTrigger asChild>{itemContent}</TooltipTrigger><TooltipContent><p>Sign in to track your progress.</p></TooltipContent></UITooltip></TooltipProvider>);
    }
    return itemContent;
  };

  return (
    <div className="p-2 md:p-6 max-w-none">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4"><BookOpen className="w-12 h-12 text-primary" /><h1 className="text-5xl font-bold text-foreground">HTML Learning Path</h1></div>
          <p className="text-muted-foreground text-lg mb-6">A structured roadmap for beginners to master HTML.</p>
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
            <div className="flex items-center justify-between mb-3"><span className="text-sm font-semibold text-foreground">Overall Progress</span><span className="text-2xl font-bold text-primary">{calculateProgress()}%</span></div>
            <div className="w-full bg-muted rounded-full h-4"><div className="bg-primary h-4 rounded-full transition-all duration-500" style={{ width: `${calculateProgress()}%` }}></div></div>
            <p className="text-sm text-muted-foreground mt-2">{completedCount} of {totalTopicCount} topics completed</p>
          </div>
        </div>
        
        <Card className="mb-8">
            <CardHeader><CardTitle>Roadmap Overview</CardTitle><CardDescription>A visual breakdown of topics by category.</CardDescription></CardHeader>
            <CardContent>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} layout="horizontal" margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                          <XAxis dataKey="level" type="category" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                          <YAxis type="number" hide />
                          <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: 'var(--radius)' }} />
                          <Bar dataKey="topics" radius={[4, 4, 0, 0]} barSize={32}>
                            <LabelList dataKey="topics" position="top" offset={8} className="fill-foreground font-semibold" />
                          </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="bg-card border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)} className={`bg-card p-6 cursor-pointer flex items-center justify-between border-b`}>
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-muted p-3 rounded-full">{module.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1"><h2 className="text-xl font-bold text-foreground">{module.title}</h2><span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{module.level}</span></div>
                  </div>
                </div>
                {expandedModule === module.id ? <ChevronDown className="w-6 h-6 text-muted-foreground" /> : <ChevronRight className="w-6 h-6 text-muted-foreground" />}
              </div>
              {expandedModule === module.id && (<div className="p-6 space-y-3 bg-muted/50">{module.topics.map((topic) => (<TopicItem key={topic.slug} topic={topic} />))}</div>)}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground"><Award className="w-12 h-12 mx-auto mb-3 text-primary" /><p className="text-lg font-semibold">Happy Coding!</p><p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p></div>
      </div>
    </div>
  );
};
