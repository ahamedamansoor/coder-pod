'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Box, ArrowRight, ArrowLeft, ArrowUpDown, ArrowUp, ArrowDown, Database, Monitor, 
  Code, Zap, Shield, Users, Settings, Cpu, Globe, Cloud, Network,
  CheckCircle2, AlertTriangle, TrendingUp, Target, Eye, Brain, Heart,
  MessageSquare, Rocket, GitBranch, Building2, Puzzle, Activity, Star,
  Award, Lightbulb, TestTube, Smartphone, Laptop, Layers, FileText,
  Play, Square, Circle, Triangle, Hexagon, Package, Wrench, Hammer, XCircle,
  RefreshCw, MousePointer, Webhook, Router, Server, BarChart, CreditCard, ShoppingCart,
  Grid3x3, Layout, Blocks, Link2, Unlink, Dock, Terminal, GitPullRequest,
  MonitorSpeaker, PackageOpen, Archive, FolderTree, TreePine, Workflow, Layers3,
  Home, Building, Factory, Construction, BrickWall, CloudCog, CloudDrizzle, CloudRain,
  CloudSnow, CloudLightning, CloudMoon, CloudSun, Wifi, Radio, Satellite, Antenna,
  Signal, WifiOff, RadioIcon, Send, Download, Upload
} from 'lucide-react';

interface ServiceOrientedFrontendProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ServiceOrientedFrontend({ onOpenWebPlayground }: ServiceOrientedFrontendProps) {

  const serviceTypes = [
    {
      name: 'API Services',
      description: 'Backend services that provide data and business logic through REST/GraphQL APIs',
      icon: Server,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBgColor: 'bg-blue-100 dark:bg-blue-900/50',
      examples: ['REST APIs', 'GraphQL', 'WebSocket Services', 'gRPC Services'],
      technologies: ['Express.js', 'FastAPI', 'Spring Boot', 'NestJS'],
      responsibilities: ['Data Management', 'Business Logic', 'Authentication', 'Validation']
    },
    {
      name: 'UI Services',
      description: 'Frontend services that render user interfaces and handle user interactions',
      icon: Monitor,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      hoverBgColor: 'bg-green-100 dark:bg-green-900/50',
      examples: ['React Components', 'Vue Applications', 'Angular Apps', 'Web Components'],
      technologies: ['React', 'Vue.js', 'Angular', 'Svelte'],
      responsibilities: ['User Interface', 'User Experience', 'Client-side Logic', 'State Management']
    },
    {
      name: 'Integration Services',
      description: 'Services that connect different systems and facilitate communication between services',
      icon: Link2,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      hoverBgColor: 'bg-purple-100 dark:bg-purple-900/50',
      examples: ['API Gateways', 'Message Brokers', 'Event Buses', 'Service Mesh'],
      technologies: ['Kong', 'RabbitMQ', 'Kafka', 'Istio'],
      responsibilities: ['Service Communication', 'Routing', 'Load Balancing', 'Message Queuing']
    },
    {
      name: 'Data Services',
      description: 'Specialized services for data storage, caching, and real-time synchronization',
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      hoverBgColor: 'bg-orange-100 dark:bg-orange-900/50',
      examples: ['Database Services', 'Cache Services', 'File Storage', 'Search Services'],
      technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch'],
      responsibilities: ['Data Persistence', 'Caching', 'File Management', 'Search Indexing']
    }
  ];

  const architecturePatterns = [
    {
      name: 'Service Composition',
      description: 'Combining multiple services to create complex user experiences',
      icon: Blocks,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      hoverBgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      benefits: ['Reusability', 'Modularity', 'Maintainability', 'Testability'],
      challenges: ['Complexity', 'Performance', 'Debugging', 'Version Management'],
      useCases: ['E-commerce Platforms', 'Social Media', 'Enterprise Applications']
    },
    {
      name: 'Service Orchestration',
      description: 'Coordinating multiple services to execute business workflows',
      icon: Workflow,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-950/30',
      borderColor: 'border-teal-200 dark:border-teal-800',
      hoverBgColor: 'bg-teal-100 dark:bg-teal-900/50',
      benefits: ['Process Control', 'Error Handling', 'Monitoring', 'Scalability'],
      challenges: ['Coordination', 'Fault Tolerance', 'Performance', 'Complexity'],
      useCases: ['Business Processes', 'Data Pipelines', 'Microservices Coordination']
    },
    {
      name: 'Service Choreography',
      description: 'Decentralized service coordination through events and messages',
      icon: Radio,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      hoverBgColor: 'bg-cyan-100 dark:bg-cyan-900/50',
      benefits: ['Decoupling', 'Flexibility', 'Scalability', 'Resilience'],
      challenges: ['Event Management', 'Debugging', 'Complexity', 'Consistency'],
      useCases: ['Event-driven Systems', 'Real-time Applications', 'IoT Systems']
    }
  ];

  const implementationStrategies = [
    {
      category: 'API Design',
      strategies: [
        {
          name: 'RESTful APIs',
          description: 'Standard HTTP-based API design with resource-oriented endpoints',
          pros: ['Simple', 'Standardized', 'Cacheable', 'Stateless'],
          cons: ['Limited', 'Over-fetching', 'Multiple requests', 'Versioning issues'],
          tools: ['OpenAPI', 'Swagger', 'Postman', 'Insomnia']
        },
        {
          name: 'GraphQL',
          description: 'Query language for APIs that allows clients to request exactly what they need',
          pros: ['Flexible', 'Efficient', 'Single endpoint', 'Strong typing'],
          cons: ['Complex', 'Caching challenges', 'Performance issues', 'Learning curve'],
          tools: ['Apollo', 'Relay', 'GraphQL Playground', 'Prisma']
        },
        {
          name: 'WebSocket APIs',
          description: 'Real-time bidirectional communication between client and server',
          pros: ['Real-time', 'Efficient', 'Low latency', 'Persistent connection'],
          cons: ['Complex', 'Scaling issues', 'Stateful', 'Resource intensive'],
          tools: ['Socket.io', 'WebSocket API', 'SignalR', 'SockJS']
        }
      ]
    },
    {
      category: 'Service Communication',
      strategies: [
        {
          name: 'HTTP/HTTPS',
          description: 'Standard web protocol for request-response communication',
          pros: ['Universal', 'Secure', 'Standardized', 'Firewall friendly'],
          cons: ['Overhead', 'Stateless', 'Latency', 'Connection limits'],
          tools: ['Fetch API', 'Axios', 'HTTP Clients', 'Load Balancers']
        },
        {
          name: 'Message Queues',
          description: 'Asynchronous communication through message brokers',
          pros: ['Decoupled', 'Reliable', 'Scalable', 'Load balancing'],
          cons: ['Complex', 'Eventual consistency', 'Debugging', 'Infrastructure'],
          tools: ['RabbitMQ', 'Apache Kafka', 'AWS SQS', 'Redis Pub/Sub']
        },
        {
          name: 'Event Streaming',
          description: 'Real-time event-driven communication patterns',
          pros: ['Real-time', 'Scalable', 'Persistent', 'Replayable'],
          cons: ['Complex', 'Resource intensive', 'Learning curve', 'Monitoring'],
          tools: ['Kafka', 'Apache Pulsar', 'Kinesis', 'EventStore']
        }
      ]
    },
    {
      category: 'State Management',
      strategies: [
        {
          name: 'Client-side State',
          description: 'Managing application state on the client side',
          pros: ['Fast', 'Offline capable', 'Reduced server load', 'User experience'],
          cons: ['Limited', 'Security risks', 'Synchronization', 'Memory usage'],
          tools: ['Redux', 'MobX', 'Zustand', 'Context API']
        },
        {
          name: 'Server-side State',
          description: 'Centralized state management on the server',
          pros: ['Consistent', 'Secure', 'Scalable', 'Centralized'],
          cons: ['Latency', 'Server load', 'Network dependency', 'Complexity'],
          tools: ['Session Stores', 'Databases', 'Caches', 'State Servers']
        },
        {
          name: 'Hybrid State',
          description: 'Combining client and server state management strategies',
          pros: ['Balanced', 'Flexible', 'Optimized', 'Best of both'],
          cons: ['Complex', 'Synchronization', 'Consistency', 'Debugging'],
          tools: ['React Query', 'SWR', 'Apollo Client', 'State Machines']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Service-Oriented Frontend"
        description="Master service-oriented architecture for frontend applications, including API integration, service composition, and distributed systems design"
        icon={CloudCog}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-indigo-500 rounded-xl">
                <CloudCog className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-indigo-700 dark:text-indigo-300">
                  Understanding Service-Oriented Frontend
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Service-oriented frontend architecture breaks down applications into specialized services that communicate through well-defined interfaces, enabling better scalability, maintainability, and team autonomy.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Key Principles
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Service separation and specialization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Well-defined service contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Loose coupling between services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Independent deployment and scaling</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improved scalability and performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Better team autonomy and productivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Technology diversity and flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enhanced reliability and fault tolerance</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Types */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Layers3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Service Types
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Different types of services in a service-oriented frontend architecture
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {serviceTypes.map((service, index) => (
                <div key={index} className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl animate-pulse"></div>
                  
                  {/* Service Card */}
                  <div className={`relative p-6 rounded-2xl border-3 bg-gradient-to-br ${service.bgColor} ${service.borderColor} shadow-2xl transform transition-all duration-300 hover:scale-105`}>
                    <div className="absolute -top-3 -right-3">
                      <div className={`w-8 h-8 ${service.color.replace('text', 'bg')} rounded-full flex items-center justify-center`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-3`} />
                      <h3 className={`text-xl font-bold ${service.color} mb-2`}>
                        {service.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Examples:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {service.examples.map((example, i) => (
                            <span key={i} className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Responsibilities:
                        </h5>
                        <ul className="space-y-1">
                          {service.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Architecture Patterns */}
        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 dark:from-teal-950/20 dark:to-cyan-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-teal-500 rounded-xl">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-teal-700 dark:text-teal-300">
                  Architecture Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Common patterns for organizing and coordinating services in frontend applications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-teal-200 dark:border-teal-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${pattern.bgColor} rounded-xl flex items-center justify-center`}>
                    <pattern.icon className={`w-6 h-6 ${pattern.color}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${pattern.color}`}>
                      {pattern.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {pattern.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Benefits:</h5>
                    <ul className="space-y-1">
                      {pattern.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">Challenges:</h5>
                    <ul className="space-y-1">
                      {pattern.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <AlertTriangle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Use Cases:</h5>
                    <ul className="space-y-1">
                      {pattern.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <Target className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Implementation Strategies */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500 rounded-xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                  Implementation Strategies
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Practical approaches for implementing service-oriented frontend architecture
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {implementationStrategies.map((category, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.strategies.map((strategy, i) => (
                    <div key={i} className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                        {strategy.name}
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {strategy.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div>
                          <h6 className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros:</h6>
                          <ul className="space-y-1">
                            {strategy.pros.map((pro, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons:</h6>
                          <ul className="space-y-1">
                            {strategy.cons.map((con, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <XCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Tools:</h6>
                          <div className="flex flex-wrap gap-1">
                            {strategy.tools.map((tool, j) => (
                              <span key={j} className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-950/20 dark:to-red-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500 rounded-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                  Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Guidelines for building effective service-oriented frontend applications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Design Principles
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Single Responsibility:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Each service should have one clear responsibility and purpose
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Loose Coupling:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Minimize dependencies between services for better maintainability
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">High Cohesion:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Group related functionality together within services
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">API First:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Design APIs before implementation to ensure clear contracts
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Performance Optimization
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Caching Strategies:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Implement multi-level caching to reduce service calls
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Lazy Loading:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Load services and data only when needed
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Batch Operations:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Combine multiple requests to reduce network overhead
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Service Mesh:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Use service mesh for advanced traffic management
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl border border-orange-200 dark:border-orange-800">
              <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Implementation Tips
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Start Small</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Begin with a few critical services and expand gradually
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Monitor Everything</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Implement comprehensive monitoring and observability
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Iterate Continuously</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Refine and improve services based on usage patterns
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-950/20 dark:to-gray-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-500 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-slate-700 dark:text-slate-300">
                  Key Takeaways
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential insights for implementing service-oriented frontend architecture
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Strategic Considerations
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Team Structure:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Align service boundaries with team boundaries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Business Domain:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Design services around business capabilities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Technical Debt:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Manage complexity to avoid technical debt accumulation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Success Metrics
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Developer Productivity:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Measure development speed and deployment frequency
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">System Performance:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Track response times and system reliability
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Business Value:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Evaluate impact on user experience and business goals
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 text-center">
                Build Scalable, Maintainable Frontend Applications
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                Service-oriented frontend architecture provides a powerful approach to building 
                complex web applications that can scale with your team and business needs. 
                By focusing on clear service boundaries, effective communication patterns, and 
                continuous improvement, you can create applications that are both powerful 
                and maintainable.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
