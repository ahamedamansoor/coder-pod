
'use client';
import React, { useState, useEffect } from 'react';
import { Code, CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { useSpring } from '@/app/spring/spring-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Coffee, Database, Server, Rocket, Shield, TestTube, Share2, Layers, Cloud, MessageSquare } from 'lucide-react';

export const SpringLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useSpring();
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const phases = [
    {
      id: 1,
      title: "Spring Core",
      icon: Coffee,
      color: "from-green-500 to-emerald-500",
      duration: "Weeks 1-2",
      project: "Build a simple command-line application that manages a list of products using Dependency Injection.",
      topics: [
        { name: "Spring Core Overview", subtopics: ["Introduction", "Core Container", "Modules"] },
        { name: "IoC and Dependency Injection", subtopics: ["Inversion of Control", "DI Types (Constructor, Setter)", "Autowiring"] },
        { name: "Spring Beans", subtopics: ["Bean Scopes", "Bean Lifecycle", "Configuration (@Bean, @Component)"] },
      ],
    },
    {
      id: 2,
      title: "Data & Persistence",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      duration: "Weeks 3-4",
      project: "Extend the product management app to save and retrieve products from a database using Spring Data JPA.",
      topics: [
        { name: "Spring Data JPA", subtopics: ["Repositories", "JPQL", "Entity Relationships"] },
        { name: "JdbcTemplate", subtopics: ["Queries", "RowMappers", "Batch Updates"] },
      ],
    },
    {
      id: 3,
      title: "Spring MVC & Web",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      duration: "Weeks 5-6",
      project: "Create a web-based version of the product management app with endpoints to list, add, and view products.",
      topics: [
        { name: "Spring MVC", subtopics: ["DispatcherServlet", "Model-View-Controller", "View Resolvers"] },
        { name: "REST Controllers", subtopics: ["@RestController", "@GetMapping", "@PostMapping", "ResponseEntity"] },
      ],
    },
    {
      id: 4,
      title: "Spring Boot",
      icon: Rocket,
      color: "from-red-500 to-orange-500",
      duration: "Weeks 7-8",
      project: "Rebuild the product management app using Spring Boot, significantly reducing boilerplate configuration.",
      topics: [
        { name: "Spring Boot Basics", subtopics: ["Starters", "Executable JARs", "Application Properties"] },
        { name: "Autoconfiguration", subtopics: ["@EnableAutoConfiguration", "Conditional Annotations", "Custom Starters"] },
      ],
    },
    {
      id: 5,
      title: "Advanced Topics",
      icon: Layers,
      color: "from-yellow-500 to-amber-500",
      duration: "Weeks 9-10",
      project: "Add user authentication to the app and write unit and integration tests for the REST endpoints.",
      topics: [
        { name: "Spring Security", subtopics: ["Authentication", "Authorization", "OAuth2", "JWT"] },
        { name: "Testing in Spring", subtopics: ["Unit Testing", "Integration Testing", "@SpringBootTest", "MockMVC"] },
        { name: "Spring AOP", subtopics: ["Aspects", "Pointcuts", "Advice (@Before, @After)"] },
      ],
    },
     {
      id: 6,
      title: "Spring Ecosystem",
      icon: Share2,
      color: "from-indigo-500 to-violet-500",
      duration: "Weeks 11-12",
      project: "Evolve the application into a microservice. Use Spring Cloud for service discovery and add a Kafka message queue for product update notifications.",
      topics: [
        { name: "Spring WebFlux", subtopics: ["Reactive Streams", "Mono & Flux", "Functional Endpoints"] },
        { name: "Spring Cloud", subtopics: ["Service Discovery (Eureka)", "API Gateway", "Configuration Server"] },
        { name: "Spring for Apache Kafka", subtopics: ["KafkaTemplate", "@KafkaListener", "Producers & Consumers"] },
      ],
    },
  ];

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const toggleTopic = (topicId: string) => {
    handleToggleComplete(topicId);
  };
  
  const totalTopics = phases.reduce((acc, phase) => acc + phase.topics.length, 0);
  const completedCount = completedTopics.size;
  const progress = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

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

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-foreground mb-4">Spring Framework Learning Path</h1>
          <p className="text-xl text-muted-foreground">Your journey to becoming a professional Spring developer.</p>

          <div className="mt-8 bg-card border rounded-full p-1 max-w-md mx-auto">
            <div className="relative h-6 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 flex items-center justify-center"
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <span className="text-white text-xs font-bold">{progress}%</span>
                )}
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">{completedCount} of {totalTopics} topics completed</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

          {phases.map((phase) => {
            const Icon = phase.icon;
            const isExpanded = expandedPhase === phase.id;
            
            return (
              <div key={phase.id} className="relative mb-8 ml-20">
                <div className={`absolute -left-16 top-6 w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border hover:border-primary transition-all">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => togglePhase(phase.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-foreground">
                            Phase {phase.id}: {phase.title}
                          </h2>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${phase.color} text-white`}>
                            {phase.duration}
                          </span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="mt-6 space-y-4">
                        {phase.topics.map((topic, topicIndex) => {
                          const topicId = `${phase.id}-${topicIndex}`;
                          const isCompleted = completedTopics.has(topicId);
                          
                          return (
                            <div key={topicIndex} className="bg-muted rounded-lg p-4 border border-border">
                              <div 
                                className="flex items-start gap-3 cursor-pointer"
                                onClick={() => toggleTopic(topicId)}
                              >
                                {isCompleted ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                ) : (
                                  <Circle className="w-5 h-5 text-muted-foreground/50 mt-1 flex-shrink-0" />
                                )}
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-foreground mb-2">{topic.name}</h3>
                                  <div className="flex flex-wrap gap-2">
                                    {topic.subtopics.map((subtopic, subIndex) => (
                                      <span 
                                        key={subIndex}
                                        className="px-3 py-1 bg-card text-muted-foreground rounded-full text-sm border"
                                      >
                                        {subtopic}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-4 border border-purple-500">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="w-5 h-5 text-purple-300" />
                          <h4 className="font-semibold text-purple-200">Practice Project</h4>
                        </div>
                        <p className="text-white">{phase.project}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Timeline: 4-6 months with consistent practice (2-3 hours daily)
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg">
              <div className="text-white font-bold text-lg">2-3 hours</div>
              <div className="text-white text-sm">Daily Practice</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg">
              <div className="text-white font-bold text-lg">6 Projects</div>
              <div className="text-white text-sm">Hands-on</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-lg">
              <div className="text-white font-bold text-lg">Job Ready</div>
              <div className="text-white text-sm">In 4-6 months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
