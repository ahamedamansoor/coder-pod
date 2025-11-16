'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { useSpring } from '@/app/spring/spring-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const SpringLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useSpring();
  const [expandedModule, setExpandedModule] = useState<string | null>("Spring Core");
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  
  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const modules = [
    {
      id: "Spring Core",
      title: "Spring Core",
      level: "Foundation",
      duration: "Weeks 1-2",
      icon: "☕",
      topics: [
        { id: "spring-core-overview", name: "Spring Core Overview", desc: "Introduction to the core concepts of the Spring Framework.", difficulty: "Easy" },
        { id: "ioc-and-dependency-injection", name: "IoC and Dependency Injection", desc: "Understanding Inversion of Control and Dependency Injection.", difficulty: "Medium" },
        { id: "spring-beans", name: "Spring Beans", desc: "Learn about the objects that form the backbone of your application.", difficulty: "Medium" },
      ]
    },
    {
      id: "Data & Persistence",
      title: "Data & Persistence",
      level: "Core Concepts",
      duration: "Weeks 3-4",
      icon: "💾",
      topics: [
        { id: "spring-data-jpa", name: "Spring Data JPA", desc: "Simplifying data access layers with Spring Data JPA.", difficulty: "Medium" },
        { id: "jdbc-template", name: "JdbcTemplate", desc: "Working with databases using Spring's JdbcTemplate.", difficulty: "Medium" },
      ]
    },
    {
      id: "Spring MVC & Web",
      title: "Spring MVC & Web",
      level: "Core Concepts",
      duration: "Weeks 5-6",
      icon: "🌐",
      topics: [
        { id: "spring-mvc", name: "Spring MVC", desc: "Building web applications with the Model-View-Controller pattern.", difficulty: "Medium" },
        { id: "rest-controllers", name: "REST Controllers", desc: "Creating RESTful web services with Spring.", difficulty: "Medium" },
      ]
    },
    {
      id: "Spring Boot",
      title: "Spring Boot",
      level: "Advanced",
      duration: "Weeks 7-8",
      icon: "🚀",
      topics: [
        { id: "spring-boot-basics", name: "Spring Boot Basics", desc: "Getting started with Spring Boot for rapid application development.", difficulty: "Easy" },
        { id: "autoconfiguration", name: "Autoconfiguration", desc: "Understanding how Spring Boot automatically configures your application.", difficulty: "Medium" },
      ]
    },
    {
      id: "Advanced Spring",
      title: "Advanced Spring",
      level: "Advanced",
      duration: "Weeks 9-10",
      icon: "⚙️",
      topics: [
        { id: "spring-security", name: "Spring Security", desc: "Securing your applications with Spring Security.", difficulty: "Hard" },
        { id: "testing-in-spring", name: "Testing in Spring", desc: "Learn how to test your Spring applications.", difficulty: "Medium" },
        { id: "spring-aop", name: "Spring AOP", desc: "Understanding Aspect-Oriented Programming with Spring.", difficulty: "Hard" },
      ]
    },
    {
      id: "Spring Ecosystem",
      title: "Spring Ecosystem",
      level: "Expert",
      duration: "Weeks 11-12",
      icon: "🌍",
      topics: [
        { id: "spring-webflux", name: "Spring WebFlux", desc: "Building reactive web applications with Spring WebFlux.", difficulty: "Hard" },
        { id: "spring-cloud", name: "Spring Cloud", desc: "Building distributed systems with Spring Cloud.", difficulty: "Hard" },
        { id: "spring-kafka", name: "Spring for Apache Kafka", desc: "Integrating with Apache Kafka for messaging.", difficulty: "Hard" },
      ]
    }
  ];

  const allTopics = modules.flatMap(m => m.topics);
  
  const chartData = [
    { level: "Foundation", topics: modules.filter(m => m.level === "Foundation").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-1))" },
    { level: "Core Concepts", topics: modules.filter(m => m.level === "Core Concepts").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-2))" },
    { level: "Advanced", topics: modules.filter(m => m.level === "Advanced").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-3))" },
    { level: "Expert", topics: modules.filter(m => m.level === "Expert").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-4))" },
  ];

  const toggleTopic = (topicId: string) => {
    if (!isUserAuthenticated) {
      return;
    }
    handleToggleComplete(topicId);

    const topicModule = modules.find(m => {
        return m.topics.some(t => t.id === topicId);
    });

    if (!topicModule) return;
    
    const isCompleting = !completedTopics.has(topicId);

    if (isCompleting) {
        const allTopicsInModuleCompleted = topicModule.topics.every(t =>
          completedTopics.has(t.id) || t.id === topicId
        );

        if (allTopicsInModuleCompleted) {
          const currentModuleIndex = modules.findIndex(m => m.id === topicModule.id);
          if (currentModuleIndex !== -1 && currentModuleIndex < modules.length - 1) {
            const nextModule = modules[currentModuleIndex + 1];
            setExpandedModule(nextModule.id);
          }
        }
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
      case 'Hard': return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const calculateProgress = () => {
    if (!isUserAuthenticated) return 0;
    const totalTopics = allTopics.length;
    if (totalTopics === 0) return 0;
    const completed = completedTopics.size;
    return Math.round((completed / totalTopics) * 100);
  };

  if (isUserLoading || isProgressLoading) {
    return (
        <div className="p-2 md:p-6">
            <div className="mx-auto max-w-none">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <Skeleton className="h-12 w-96" />
                    </div>
                    <Skeleton className="h-6 w-80 mx-auto mb-6" />
                    
                    <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
                        <div className="flex items-center justify-between mb-3">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-8 w-16" />
                        </div>
                        <Skeleton className="w-full h-4 rounded-full" />
                        <Skeleton className="h-4 w-48 mt-2" />
                    </div>
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-xl" />
                    ))}
                </div>
            </div>
        </div>
    );
  }
  
  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = allTopics.length;
  
  const TopicItem = ({ topic }: { topic: (typeof modules)[0]['topics'][0] }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.id);
    const itemContent = (
      <div
        onClick={() => toggleTopic(topic.id)}
        className={cn(
          "bg-background border rounded-lg p-4 transition-all duration-200",
          isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50",
          !isUserAuthenticated && "cursor-not-allowed opacity-70",
          isCompleted ? 'border-primary bg-primary/5' : 'border-border'
        )}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {isCompleted ? (
              <CheckCircle className="w-6 h-6 text-primary" />
            ) : (
              <Circle className="w-6 h-6 text-muted-foreground/50" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <Link href={`/spring/${topic.id}`} className="hover:underline">
                <h3 className="text-lg font-semibold text-foreground">{topic.name}</h3>
              </Link>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                {topic.difficulty}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{topic.desc}</p>
          </div>
        </div>
      </div>
    );

    if (!isUserAuthenticated) {
      return (
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
            <TooltipContent>
              <p>Sign in to track your progress.</p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      );
    }
    return itemContent;
  };

  return (
    <div className="p-2 md:p-6 max-w-none">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold text-foreground">Spring Learning Path</h1>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            A structured roadmap for beginners to master the Spring Framework.
          </p>
          
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">Overall Progress</span>
              <span className="text-2xl font-bold text-primary">{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4">
              <div 
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {completedCount} of {totalTopicCount} topics completed
            </p>
          </div>
        </div>
        
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Roadmap Overview</CardTitle>
                <CardDescription>A visual breakdown of topics by difficulty level.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="level" type="category" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} width={100} />
                            <Tooltip
                                cursor={{ fill: 'hsl(var(--muted))' }}
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    borderColor: 'hsl(var(--border))',
                                    borderRadius: 'var(--radius)',
                                }}
                            />
                            <Bar dataKey="topics" radius={[0, 4, 4, 0]} barSize={32}>
                                <LabelList dataKey="topics" position="right" offset={10} className="fill-foreground font-semibold" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="bg-card border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                className={`bg-card p-6 cursor-pointer flex items-center justify-between border-b`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-muted p-3 rounded-full">{module.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {module.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{module.duration} • {module.topics.length} topics</p>
                  </div>
                </div>
                {expandedModule === module.id ? (
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-muted-foreground" />
                )}
              </div>

              {expandedModule === module.id && (
                <div className="p-6 space-y-3 bg-muted/50">
                  {module.topics.map((topic) => (
                    <TopicItem key={topic.id} topic={topic} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 text-primary-foreground rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Learning Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-foreground">
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">✅ Focus on Core Concepts</h3>
              <p className="text-sm text-muted-foreground">Master Dependency Injection and the IoC container. They are the heart of Spring.</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">🔨 Build Incrementally</h3>
              <p className="text-sm text-muted-foreground">Start with a simple console app, then add a database, then a web layer. Don't try to learn everything at once.</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">🚀 Embrace Spring Boot</h3>
              <p className="text-sm text-muted-foreground">For new projects, always start with Spring Boot. It drastically simplifies configuration.</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">📖 Read the Official Docs</h3>
              <p className="text-sm text-muted-foreground">The Spring documentation is excellent. When in doubt, it's the best source of truth.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
          <p className="text-lg font-semibold">Estimated completion time: 10-12 weeks</p>
          <p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p>
        </div>
      </div>
    </div>
  );
};
