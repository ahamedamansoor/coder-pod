'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Monitor, Server, Database, Globe, Zap, Shield, 
  ArrowRight, Cpu, Code, Lightbulb, Target, TrendingUp,
  Users, Activity, Puzzle, CheckCircle2, AlertTriangle,
  Play, Pause, RotateCcw, Eye, EyeOff, Lock, Unlock,
  Clock, BarChart3, Settings, Wrench, Hammer, Building2,
  Smartphone, Laptop, Cloud, Network, Router, Wifi, Layers
} from 'lucide-react';

interface FrontendVsBackendSystemDesignProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FrontendVsBackendSystemDesign({ onOpenWebPlayground }: FrontendVsBackendSystemDesignProps) {
  const frontendCharacteristics = [
    {
      title: 'User Interface',
      description: 'Visual elements and user interactions',
      icon: Monitor,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50 dark:bg-sky-950/30',
      borderColor: 'border-sky-200 dark:border-sky-800',
      examples: ['React Components', 'Vue Templates', 'Angular Directives', 'CSS Styles']
    },
    {
      title: 'Client-Side Logic',
      description: 'Business logic running in the browser',
      icon: Code,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50 dark:bg-violet-950/30',
      borderColor: 'border-violet-200 dark:border-violet-800',
      examples: ['Form Validation', 'State Management', 'event Handling', 'API Calls']
    },
    {
      title: 'Performance Optimization',
      description: 'Ensuring fast and responsive UI',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800',
      examples: ['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Optimization']
    },
    {
      title: 'User Experience',
      description: 'Creating intuitive and accessible interfaces',
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      examples: ['Responsive Design', 'Accessibility', 'Animations', 'Progressive Enhancement']
    }
  ];

  const backendCharacteristics = [
    {
      title: 'Business Logic',
      description: 'Core application logic and rules',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      examples: ['Data Processing', 'Business Rules', 'Workflows', 'Algorithms']
    },
    {
      title: 'Database Management',
      description: 'Data storage, retrieval, and manipulation',
      icon: Database,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      examples: ['SQL Queries', 'ORM Operations', 'Data Modeling', 'Migration']
    },
    {
      title: 'API Development',
      description: 'Creating interfaces for client communication',
      icon: Network,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      examples: ['REST APIs', 'GraphQL', 'WebSocket', 'Authentication']
    },
    {
      title: 'System Integration',
      description: 'Connecting with external services and systems',
      icon: Router,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30',
      borderColor: 'border-rose-200 dark:border-rose-800',
      examples: ['Third-party APIs', 'Message Queues', 'Microservices', 'Event Streaming']
    }
  ];

  const comparisonMatrix = [
    {
      aspect: 'Primary Focus',
      frontend: 'User Experience & Interface',
      backend: 'Business Logic & Data',
      frontendIcon: Monitor,
      backendIcon: Server
    },
    {
      aspect: 'Execution Environment',
      frontend: 'Browser (Client-side)',
      backend: 'Server (Server-side)',
      frontendIcon: Globe,
      backendIcon: Cloud
    },
    {
      aspect: 'Main Technologies',
      frontend: 'HTML, CSS, JavaScript, React, Vue',
      backend: 'Node.js, Python, Java, Go, Databases',
      frontendIcon: Code,
      backendIcon: Cpu
    },
    {
      aspect: 'Performance Metrics',
      frontend: 'Page Load Time, First Contentful Paint',
      backend: 'Response Time, Throughput, Scalability',
      frontendIcon: Zap,
      backendIcon: BarChart3
    },
    {
      aspect: 'Security Concerns',
      frontend: 'XSS, CSRF, Data Validation',
      backend: 'Authentication, Authorization, Data Protection',
      frontendIcon: Shield,
      backendIcon: Lock
    },
    {
      aspect: 'Testing Approach',
      frontend: 'Unit Tests, E2E Tests, Visual Testing',
      backend: 'Unit Tests, Integration Tests, Load Tests',
      frontendIcon: Puzzle,
      backendIcon: Activity
    }
  ];

  const collaborationPatterns = [
    {
      pattern: 'API-First Design',
      description: 'Design APIs before implementing frontend or backend',
      benefits: ['Clear contracts', 'Parallel development', 'Better documentation'],
      challenges: ['Initial overhead', 'Requires planning', 'Less flexibility']
    },
    {
      pattern: 'Microservices Architecture',
      description: 'Separate frontend and backend into independent services',
      benefits: ['Independent scaling', 'Technology flexibility', 'Team autonomy'],
      challenges: ['Complex deployment', 'Network overhead', 'Debugging complexity']
    },
    {
      pattern: 'Full-Stack Frameworks',
      description: 'Use frameworks that handle both frontend and backend',
      benefits: ['Unified development', 'Shared code', 'Simplified deployment'],
      challenges: ['Limited flexibility', 'Tight coupling', 'Vendor lock-in']
    },
    {
      pattern: 'Headless Architecture',
      description: 'Decouple frontend from backend via APIs',
      benefits: ['Multi-platform support', 'Independent evolution', 'Better performance'],
      challenges: ['API complexity', 'Initial setup', 'Maintenance overhead']
    }
  ];

  const realWorldExamples = [
    {
      company: 'Netflix',
      frontend: 'React-based TV interface with adaptive streaming',
      backend: 'Microservices for content delivery and recommendations',
      collaboration: 'API-driven architecture with separate teams',
      technologies: {
        frontend: ['React', 'Redux', 'JavaScript', 'CSS'],
        backend: ['Node.js', 'Python', 'AWS', 'Kubernetes']
      }
    },
    {
      company: 'Spotify',
      frontend: 'Cross-platform web and mobile apps',
      backend: 'Event-driven architecture for real-time features',
      collaboration: 'GraphQL APIs with frontend-backend separation',
      technologies: {
        frontend: ['React', 'React Native', 'TypeScript', 'Styled Components'],
        backend: ['Go', 'Python', 'Kafka', 'PostgreSQL']
      }
    },
    {
      company: 'Airbnb',
      frontend: 'Progressive web app with offline capabilities',
      backend: 'Service-oriented architecture with API gateway',
      collaboration: 'Design system with shared components',
      technologies: {
        frontend: ['React', 'React Native', 'GraphQL', 'Styled System'],
        backend: ['Java', 'Ruby', 'GraphQL', 'MySQL']
      }
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="System Design.Comparison"
        title="Frontend vs Backend System Design"
        description="Understanding the roles, responsibilities, and collaboration patterns between frontend and backend systems"
        colorTheme="blue"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-sky-200 dark:border-sky-800 bg-gradient-to-br from-sky-50/50 to-indigo-50/30 dark:from-sky-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-sky-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-sky-700 dark:text-sky-300">
                Understanding Frontend vs Backend
              </CardTitle>
              <CardDescription className="text-base mt-2">
                The two essential pillars of modern web applications
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-sky-200 dark:border-sky-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Frontend and backend systems</strong> represent the two fundamental components of web applications. While they serve different purposes and operate in different environments, their effective collaboration is crucial for building successful software systems.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-sky-50 dark:bg-sky-950/30 rounded-lg border border-sky-200 dark:border-sky-800">
                <div className="flex items-center gap-2 mb-2">
                  <Monitor className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h4 className="font-semibold text-sky-700 dark:text-sky-300">Frontend</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Everything the user sees and interacts with in their browser
                </p>
              </div>
              <div className="p-4 bg-violet-50 dark:bg-violet-950/30 rounded-lg border border-violet-200 dark:border-violet-800">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="font-semibold text-violet-700 dark:text-violet-300">Backend</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Server-side logic, data processing, and system operations
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Frontend Characteristics Section */}
      <Card className="mb-8 border-2 border-sky-200 dark:border-sky-800 bg-gradient-to-br from-sky-50/50 to-cyan-50/30 dark:from-sky-950/20 dark:to-cyan-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-sky-500 rounded-xl">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-sky-700 dark:text-sky-300">
                Frontend System Design
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key characteristics and responsibilities of frontend systems
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {frontendCharacteristics.map((characteristic, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${characteristic.borderColor} ${characteristic.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${characteristic.bgColor} rounded-lg`}>
                    <characteristic.icon className={`w-6 h-6 ${characteristic.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${characteristic.color} mb-2`}>
                      {characteristic.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {characteristic.description}
                    </p>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Examples:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {characteristic.examples.map((example, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
              Frontend Design Considerations
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Performance</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Bundle size optimization</li>
                  <li>• Lazy loading strategies</li>
                  <li>• Image optimization</li>
                  <li>• Caching strategies</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">User Experience</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Responsive design</li>
                  <li>• Accessibility standards</li>
                  <li>• Progressive enhancement</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Backend Characteristics Section */}
      <Card className="mb-8 border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/30 dark:from-violet-950/20 dark:to-purple-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-violet-500 rounded-xl">
              <Server className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-violet-700 dark:text-violet-300">
                Backend System Design
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Core responsibilities and architectural patterns for backend systems
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {backendCharacteristics.map((characteristic, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${characteristic.borderColor} ${characteristic.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${characteristic.bgColor} rounded-lg`}>
                    <characteristic.icon className={`w-6 h-6 ${characteristic.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${characteristic.color} mb-2`}>
                      {characteristic.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {characteristic.description}
                    </p>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Examples:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {characteristic.examples.map((example, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">
              Backend Design Considerations
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Scalability</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Horizontal vs vertical scaling</li>
                  <li>• Load balancing strategies</li>
                  <li>• Database sharding</li>
                  <li>• Caching layers</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Reliability</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Redundancy patterns</li>
                  <li>• Failover mechanisms</li>
                  <li>• Circuit breakers</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Matrix Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Frontend vs Backend Comparison
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key differences and complementary roles
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {comparisonMatrix.map((item, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                      <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                        {item.aspect}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-100 dark:bg-sky-900 rounded-lg">
                      <item.frontendIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300">
                        {item.frontend}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-violet-100 dark:bg-violet-900 rounded-lg">
                      <item.backendIcon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300">
                        {item.backend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-4">
              Complementary Relationship
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Frontend and backend systems are not competitors but collaborators. Each excels in its domain while relying on the other for complete functionality.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-amber-200 dark:border-amber-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Frontend Strengths</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Rich user interactions</li>
                  <li>• Real-time feedback</li>
                  <li>• Visual presentation</li>
                  <li>• Client-side optimization</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-amber-200 dark:border-amber-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Backend Strengths</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Data processing</li>
                  <li>• Business logic</li>
                  <li>• Security enforcement</li>
                  <li>• System integration</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Collaboration Patterns Section */}
      <Card className="mb-8 border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-amber-500 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-amber-700 dark:text-amber-300">
                Collaboration Patterns
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Architectural patterns for frontend-backend integration
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {collaborationPatterns.map((pattern, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-800">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {pattern.pattern}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {pattern.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                      Benefits
                    </h5>
                    <ul className="space-y-1">
                      {pattern.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-rose-700 dark:text-rose-300 mb-2">
                      Challenges
                    </h5>
                    <ul className="space-y-1">
                      {pattern.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <AlertTriangle className="w-3 h-3 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples Section */}
      <Card className="mb-8 border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/30 dark:from-rose-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-rose-500 rounded-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-rose-700 dark:text-rose-300">
                Real-World Examples
              </CardTitle>
              <CardDescription className="text-base mt-2">
                How leading companies structure their frontend-backend systems
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {realWorldExamples.map((example, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-rose-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-rose-100 dark:bg-rose-900 rounded-lg">
                    <Building2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      {example.company}
                    </h4>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="p-4 bg-sky-50 dark:bg-sky-950/30 rounded-lg border border-sky-200 dark:border-sky-800">
                    <h5 className="font-semibold text-sky-700 dark:text-sky-300 mb-2 flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      Frontend
                    </h5>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {example.frontend}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {example.technologies.frontend.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-sky-100 dark:bg-sky-900 rounded text-xs text-sky-700 dark:text-sky-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-violet-50 dark:bg-violet-950/30 rounded-lg border border-violet-200 dark:border-violet-800">
                    <h5 className="font-semibold text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2">
                      <Server className="w-4 h-4" />
                      Backend
                    </h5>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {example.backend}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {example.technologies.backend.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-violet-100 dark:bg-violet-900 rounded text-xs text-violet-700 dark:text-violet-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Network className="w-4 h-4" />
                    Collaboration Approach
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400">
                    {example.collaboration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
              Key Takeaways
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Best Practices</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Clear API contracts</li>
                  <li>• Independent deployment</li>
                  <li>• Shared design systems</li>
                  <li>• Comprehensive testing</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Success Factors</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Strong communication</li>
                  <li>• Technical alignment</li>
                  <li>• Performance monitoring</li>
                  <li>• Continuous integration</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
