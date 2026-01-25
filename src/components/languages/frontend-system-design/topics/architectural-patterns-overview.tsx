'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Layers, Box, ArrowRight, ArrowLeft, ArrowUpDown, 
  Database, Monitor, Smartphone, Code, Zap, Shield,
  Users, Settings, Cpu, Globe, Cloud, Network,
  CheckCircle2, AlertTriangle, TrendingUp, Target,
  Eye, Brain, Heart, MessageSquare, Rocket, GitBranch,
  Building2, Puzzle, Activity, Star, Award, Lightbulb
} from 'lucide-react';

interface ArchitecturalPatternsOverviewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ArchitecturalPatternsOverview({ onOpenWebPlayground }: ArchitecturalPatternsOverviewProps) {
  const [activeFramework, setActiveFramework] = useState<'all' | 'react' | 'angular' | 'vue'>('all');

  const architecturePatterns = [
    {
      name: 'MVC (Model-View-Controller)',
      description: 'Separates application logic into three interconnected components',
      icon: Layers,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      components: {
        model: 'Data and business logic',
        view: 'User interface',
        controller: 'Handles user input'
      },
      flow: 'User → View → Controller → Model → View',
      bestFor: ['Traditional web applications', 'Server-side rendering', 'Enterprise applications'],
      pros: ['Clear separation', 'Testable components', 'Parallel development'],
      cons: ['Complex for simple apps', 'Tight coupling', 'Controller bloat'],
      realWorld: ['Ruby on Rails', 'Django', 'ASP.NET MVC'],
      frameworkSupport: {
        react: {
          supported: false,
          reason: 'React follows component-based architecture rather than traditional MVC. React components combine view and controller logic, making pure MVC separation unnatural.',
          alternatives: ['Component-based patterns', 'Flux/Redux for state management']
        },
        angular: {
          supported: true,
          reason: 'Angular was originally built on MVC principles and evolved to MVVM. It supports MVC-like separation with Components (View), Services (Model), and Controllers.',
          implementation: 'Components act as controllers, services handle model logic, templates represent views'
        },
        vue: {
          supported: true,
          reason: 'Vue supports MVC-like patterns but is more flexible. Components can follow MVC principles with proper organization.',
          implementation: 'Templates as views, component methods as controllers, data/services as models'
        }
      }
    },
    {
      name: 'MVP (Model-View-Presenter)',
      description: 'Derivative of MVC with presenter handling all UI logic',
      icon: Box,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      components: {
        model: 'Data and business logic',
        view: 'Passive UI elements',
        presenter: 'Mediates between model and view'
      },
      flow: 'User → View → Presenter → Model → Presenter → View',
      bestFor: ['Desktop applications', 'Mobile apps', 'Test-driven development'],
      pros: ['Better testability', 'View is passive', 'Clear separation'],
      cons: ['More boilerplate', 'Presenter can become bloated', 'Complex for simple UI'],
      realWorld: ['Android development', 'Windows Forms', 'Java Swing'],
      frameworkSupport: {
        react: {
          supported: false,
          reason: 'React components are not passive views; they contain their own logic. MVP requires passive views which contradicts React\'s component model.',
          alternatives: ['Component patterns', 'Custom hooks for logic separation', 'Render props']
        },
        angular: {
          supported: true,
          reason: 'Angular can implement MVP with Components as Views and Services as Presenters. The framework\'s dependency injection supports this pattern well.',
          implementation: 'Component templates as passive views, services as presenters, models as data services'
        },
        vue: {
          supported: true,
          reason: 'Vue can implement MVP with templates as passive views and composables/services as presenters. The composition API supports this separation.',
          implementation: 'Templates as passive views, composables as presenters, reactive data as models'
        }
      }
    },
    {
      name: 'MVVM (Model-View-ViewModel)',
      description: 'Designed for modern UI frameworks with data binding',
      icon: Monitor,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      components: {
        model: 'Data and business logic',
        view: 'Declarative UI',
        viewmodel: 'Presentation logic and state'
      },
      flow: 'User ↔ View ↔ ViewModel ↔ Model',
      bestFor: ['Modern web apps', 'Mobile applications', 'Data-heavy interfaces'],
      pros: ['Two-way binding', 'Great testability', 'Designer-friendly'],
      cons: ['Learning curve', 'Memory leaks risk', 'Complex debugging'],
      realWorld: ['Vue.js', 'Knockout.js', 'Angular', 'WPF'],
      frameworkSupport: {
        react: {
          supported: false,
          reason: 'React doesn\'t have built-in two-way data binding which is core to MVVM. React\'s one-way data flow conflicts with MVVM\'s bidirectional binding.',
          alternatives: ['Controlled components', 'State management libraries', 'Custom hooks']
        },
        angular: {
          supported: true,
          reason: 'Angular was designed with MVVM in mind. Components act as Views, Services/Classes as ViewModels, and dependency injection provides the Model layer.',
          implementation: 'Component templates as views, component classes as viewmodels, services as models'
        },
        vue: {
          supported: true,
          reason: 'Vue is inherently MVVM-based. The framework was built around this pattern with reactive data binding as a core feature.',
          implementation: 'Templates as views, component instances as viewmodels, reactive data/services as models'
        }
      }
    },
    {
      name: 'Flux Architecture',
      description: 'Unidirectional data flow pattern for complex applications',
      icon: ArrowRight,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      components: {
        store: 'Application state',
        actions: 'Events that change state',
        dispatcher: 'Coordinates actions',
        views: 'React to state changes'
      },
      flow: 'Action → Dispatcher → Store → View',
      bestFor: ['Large React apps', 'Complex state management', 'Real-time applications'],
      pros: ['Predictable state', 'Easy debugging', 'Time travel'],
      cons: ['Boilerplate heavy', 'Learning curve', 'Overkill for simple apps'],
      realWorld: ['Flux', 'Redux', 'Vuex', 'NgRx'],
      frameworkSupport: {
        react: {
          supported: true,
          reason: 'Flux was created by Facebook specifically for React. It complements React\'s component model perfectly with unidirectional data flow.',
          implementation: 'Redux, Zustand, or custom Flux implementations with React hooks'
        },
        angular: {
          supported: true,
          reason: 'Angular can implement Flux-like patterns using NgRx (Redux for Angular) or custom store implementations. RxJS operators make this natural.',
          implementation: 'NgRx store with actions, reducers, and effects integrated with Angular services'
        },
        vue: {
          supported: true,
          reason: 'Vue has excellent Flux support through Vuex (official state management) and Pinia (modern alternative). Vue\'s reactivity works well with Flux.',
          implementation: 'Vuex or Pinia stores with actions, mutations, and state management'
        }
      }
    },
    {
      name: 'Microservices',
      description: 'Decomposes application into small, independent services',
      icon: Network,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      components: {
        services: 'Independent business units',
        apiGateway: 'Single entry point',
        database: 'Per-service databases',
        messaging: 'Service communication'
      },
      flow: 'Client → API Gateway → Services → Databases',
      bestFor: ['Large applications', 'Team scaling', 'Cloud deployment'],
      pros: ['Independent deployment', 'Technology diversity', 'Team autonomy'],
      cons: ['Network complexity', 'Data consistency', 'Operational overhead'],
      realWorld: ['Netflix', 'Amazon', 'Uber', 'Spotify'],
      frameworkSupport: {
        react: {
          supported: true,
          reason: 'React is excellent for microservice frontends. It can consume multiple microservice APIs and works well with micro-frontend architectures.',
          implementation: 'Single-page applications consuming REST/GraphQL APIs, micro-frontend with Module Federation'
        },
        angular: {
          supported: true,
          reason: 'Angular\'s enterprise features make it suitable for microservice frontends. Dependency injection and HTTP client support service communication.',
          implementation: 'Enterprise SPAs consuming microservice APIs, micro-frontend with single-spa or Module Federation'
        },
        vue: {
          supported: true,
          reason: 'Vue\'s lightweight nature and progressive adoption make it ideal for microservice frontends and micro-frontend architectures.',
          implementation: 'Progressive web apps consuming microservice APIs, micro-frontend with Vite Module Federation'
        }
      }
    },
    {
      name: 'Serverless Architecture',
      description: 'Event-driven, function-based architecture without server management',
      icon: Cloud,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      components: {
        functions: 'Event-driven code',
        apiGateway: 'HTTP routing',
        storage: 'Managed databases',
        events: 'Triggers for functions'
      },
      flow: 'Event → Function → Storage → Response',
      bestFor: ['APIs', 'Event processing', 'Burst workloads'],
      pros: ['No server management', 'Auto-scaling', 'Pay-per-use'],
      cons: ['Cold starts', 'Vendor lock-in', 'Complex orchestration'],
      realWorld: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions'],
      frameworkSupport: {
        react: {
          supported: true,
          reason: 'React works well with serverless backends through API calls. Static site generation with Next.js/React can be deployed serverlessly.',
          implementation: 'Static sites with Next.js, API routes, client-side calls to serverless functions'
        },
        angular: {
          supported: true,
          reason: 'Angular applications can consume serverless APIs effectively. Angular Universal enables server-side rendering in serverless environments.',
          implementation: 'Angular Universal SSR, API service integration, static site generation'
        },
        vue: {
          supported: true,
          reason: 'Vue\'s lightweight nature is perfect for serverless. Nuxt.js provides excellent serverless deployment options.',
          implementation: 'Nuxt.js serverless deployment, static generation, API routes integration'
        }
      }
    }
  ];

  const comparisonMatrix = [
    {
      aspect: 'Complexity',
      mvc: 'Medium',
      mvp: 'Medium',
      mvvm: 'High',
      flux: 'High',
      microservices: 'Very High',
      serverless: 'Medium'
    },
    {
      aspect: 'Testability',
      mvc: 'Good',
      mvp: 'Excellent',
      mvvm: 'Excellent',
      flux: 'Good',
      microservices: 'Excellent',
      serverless: 'Excellent'
    },
    {
      aspect: 'Learning Curve',
      mvc: 'Low',
      mvp: 'Medium',
      mvvm: 'High',
      flux: 'High',
      microservices: 'Very High',
      serverless: 'Medium'
    },
    {
      aspect: 'Scalability',
      mvc: 'Medium',
      mvp: 'Medium',
      mvvm: 'Good',
      flux: 'Good',
      microservices: 'Excellent',
      serverless: 'Excellent'
    },
    {
      aspect: 'Team Size',
      mvc: 'Small-Medium',
      mvp: 'Small-Medium',
      mvvm: 'Small-Large',
      flux: 'Medium-Large',
      microservices: 'Large',
      serverless: 'Small-Large'
    },
    {
      aspect: 'Best For',
      mvc: 'Traditional Web',
      mvp: 'Desktop Apps',
      mvvm: 'Modern UI',
      flux: 'Complex State',
      microservices: 'Large Systems',
      serverless: 'APIs/Events'
    }
  ];

  const selectionGuidelines = [
    {
      scenario: 'Small Team, Simple Application',
      recommendation: 'MVC',
      reasoning: 'Simple to understand, good separation of concerns, minimal overhead',
      alternatives: ['MVP if testability is priority'],
      examples: ['Blog', 'Portfolio site', 'Small business website']
    },
    {
      scenario: 'Modern Web Application with Rich UI',
      recommendation: 'MVVM',
      reasoning: 'Excellent for data binding, designer-friendly, great testability',
      alternatives: ['Flux for complex state management'],
      examples: ['Dashboard', 'Admin panel', 'Data visualization app']
    },
    {
      scenario: 'Mobile Application',
      recommendation: 'MVP',
      reasoning: 'Designed for mobile, excellent testability, passive view pattern',
      alternatives: ['MVVM for data-heavy apps'],
      examples: ['iOS app', 'Android app', 'Cross-platform mobile app']
    },
    {
      scenario: 'Large Enterprise Application',
      recommendation: 'Microservices',
      reasoning: 'Team autonomy, independent deployment, technology diversity',
      alternatives: ['Modular monolith as intermediate step'],
      examples: ['E-commerce platform', 'Banking system', 'Enterprise ERP']
    },
    {
      scenario: 'API or Event-Driven System',
      recommendation: 'Serverless',
      reasoning: 'Auto-scaling, pay-per-use, no server management',
      alternatives: ['Microservices for complex workflows'],
      examples: ['REST API', 'Webhook processor', 'Image processing service']
    },
    {
      scenario: 'Complex State Management',
      recommendation: 'Flux',
      reasoning: 'Predictable state flow, excellent debugging, time travel',
      alternatives: ['MVVM for simpler state needs'],
      examples: ['Real-time collaboration', 'Complex forms', 'Multi-user dashboard']
    }
  ];

  const evolutionTimeline = [
    {
      era: '1970s-1980s',
      patterns: ['Monolithic', 'Layered Architecture'],
      drivers: ['Mainframe computing', 'Simple applications'],
      characteristics: ['Single codebase', 'Procedural programming']
    },
    {
      era: '1990s',
      patterns: ['MVC', 'Client-Server'],
      drivers: ['GUI applications', 'Web emergence'],
      characteristics: ['Separation of concerns', 'Event-driven']
    },
    {
      era: '2000s',
      patterns: ['MVP', 'MVVM', 'SOA'],
      drivers: ['Test-driven development', 'Rich UI applications'],
      characteristics: ['Better testability', 'Service orientation']
    },
    {
      era: '2010s',
      patterns: ['Flux', 'Microservices', 'Serverless'],
      drivers: ['Mobile apps', 'Cloud computing', 'DevOps'],
      characteristics: ['Event-driven', 'Distributed systems', 'Auto-scaling']
    },
    {
      era: '2020s',
      patterns: ['Event Sourcing', 'CQRS', 'Distributed Systems'],
      drivers: ['Real-time apps', 'Big data', 'Edge computing'],
      characteristics: ['Event-driven', 'Cloud-native', 'Scalable']
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="System Design.Architecture"
        title="Architectural Patterns Overview"
        description="A comprehensive guide to frontend architectural patterns and when to use them"
        colorTheme="blue"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Understanding Architectural Patterns
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Architectural patterns provide proven solutions for organizing code and structuring applications
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Architectural patterns</strong> are reusable solutions to common problems in software architecture. They provide a blueprint for organizing code, managing complexity, and ensuring maintainability in frontend applications.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Purpose-Driven</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Each pattern solves specific architectural challenges
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">Evolution Ready</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Patterns evolve with technology and requirements
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">Best Practices</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Encapsulate proven design principles and conventions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Architecture Patterns Grid */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Puzzle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Core Architecture Patterns
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Essential patterns every frontend developer should know
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${pattern.borderColor} ${pattern.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${pattern.bgColor} rounded-lg`}>
                    <pattern.icon className={`w-6 h-6 ${pattern.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${pattern.color} mb-2`}>
                      {pattern.name}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {pattern.description}
                    </p>
                    
                    {/* Framework Support Tabs */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <button
                          onClick={() => setActiveFramework('all')}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            activeFramework === 'all'
                              ? 'bg-blue-500 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                          }`}
                        >
                          All Frameworks
                        </button>
                        <button
                          onClick={() => setActiveFramework('react')}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            activeFramework === 'react'
                              ? 'bg-blue-500 text-white'
                              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
                          }`}
                        >
                          React
                        </button>
                        <button
                          onClick={() => setActiveFramework('angular')}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            activeFramework === 'angular'
                              ? 'bg-red-500 text-white'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800'
                          }`}
                        >
                          Angular
                        </button>
                        <button
                          onClick={() => setActiveFramework('vue')}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            activeFramework === 'vue'
                              ? 'bg-green-500 text-white'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800'
                          }`}
                        >
                          Vue
                        </button>
                      </div>
                      
                      {/* Framework Support Content */}
                      {(activeFramework === 'all' || activeFramework === 'react') && (
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">React</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              pattern.frameworkSupport.react.supported 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            }`}>
                              {pattern.frameworkSupport.react.supported ? 'Supported' : 'Not Supported'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                            {pattern.frameworkSupport.react.reason}
                          </p>
                          {pattern.frameworkSupport.react.implementation && (
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                              <strong>Implementation:</strong> {pattern.frameworkSupport.react.implementation}
                            </p>
                          )}
                          {pattern.frameworkSupport.react.alternatives && (
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                              <strong>Alternatives:</strong> {pattern.frameworkSupport.react.alternatives.join(', ')}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {(activeFramework === 'all' || activeFramework === 'angular') && (
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 mb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-red-700 dark:text-red-300">Angular</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              pattern.frameworkSupport.angular.supported 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            }`}>
                              {pattern.frameworkSupport.angular.supported ? 'Supported' : 'Not Supported'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                            {pattern.frameworkSupport.angular.reason}
                          </p>
                          {pattern.frameworkSupport.angular.implementation && (
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                              <strong>Implementation:</strong> {pattern.frameworkSupport.angular.implementation}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {(activeFramework === 'all' || activeFramework === 'vue') && (
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 mb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Vue</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              pattern.frameworkSupport.vue.supported 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            }`}>
                              {pattern.frameworkSupport.vue.supported ? 'Supported' : 'Not Supported'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                            {pattern.frameworkSupport.vue.reason}
                          </p>
                          {pattern.frameworkSupport.vue.implementation && (
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                              <strong>Implementation:</strong> {pattern.frameworkSupport.vue.implementation}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Components:
                        </h5>
                        <div className="space-y-1 text-sm">
                          {Object.entries(pattern.components).map(([key, value]) => (
                            <div key={key} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 dark:text-slate-400">
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Data Flow:
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                          {pattern.flow}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h6 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Best For:</h6>
                          <ul className="space-y-1">
                            {pattern.bestFor.slice(0, 2).map((item, i) => (
                              <li key={i} className="text-xs text-slate-600 dark:text-slate-400">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">Real World:</h6>
                          <ul className="space-y-1">
                            {pattern.realWorld.slice(0, 2).map((item, i) => (
                              <li key={i} className="text-xs text-slate-600 dark:text-slate-400">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparison Matrix */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Pattern Comparison Matrix
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Quick comparison of key characteristics across patterns
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-8 gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                <div>Aspect</div>
                <div className="text-center">MVC</div>
                <div className="text-center">MVP</div>
                <div className="text-center">MVVM</div>
                <div className="text-center">Flux</div>
                <div className="text-center">Microservices</div>
                <div className="text-center">Serverless</div>
              </div>
              
              {comparisonMatrix.map((row, index) => (
                <div key={index} className="grid grid-cols-8 gap-2 items-center py-2 border-b border-slate-200 dark:border-slate-700">
                  <div className="font-medium text-slate-700 dark:text-slate-300">
                    {row.aspect}
                  </div>
                  <div className="text-center text-xs text-slate-600 dark:text-slate-400">
                    {row.mvc}
                  </div>
                  <div className="text-center text-xs text-slate-600 dark:text-slate-400">
                    {row.mvp}
                  </div>
                  <div className="text-center text-xs text-slate-600 dark:text-slate-400">
                    {row.mvvm}
                  </div>
                  <div className="text-center text-xs text-slate-600 dark:text-slate-400">
                    {row.flux}
                  </div>
                  <div className="text-center text-xs text-slate-600 dark:text-slate-400">
                    {row.microservices}
                  </div>
                  <div className="text-center text-xs text-slate-600 dark:text-slate-400">
                    {row.serverless}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-sm text-purple-700 dark:text-purple-300">
              <strong>💡 Tip:</strong> Use this matrix to quickly identify which patterns best match your project requirements and constraints.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Selection Guidelines */}
      <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-500 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                Pattern Selection Guidelines
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Choose the right pattern based on your specific needs
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {selectionGuidelines.map((guideline, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                        {guideline.scenario}
                      </h4>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm font-semibold">
                        Recommended: {guideline.recommendation}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      <strong>Reasoning:</strong> {guideline.reasoning}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Examples:
                        </h5>
                        <ul className="space-y-1">
                          {guideline.examples.map((example, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Alternatives:
                        </h5>
                        <ul className="space-y-1">
                          {guideline.alternatives.map((alt, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <AlertTriangle className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                              {alt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Evolution Timeline */}
      <Card className="mb-8 border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-950/20 dark:to-gray-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-slate-500 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-slate-700 dark:text-slate-300">
                Evolution of Architectural Patterns
              </CardTitle>
              <CardDescription className="text-base mt-2">
                How architectural patterns have evolved with technology
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {evolutionTimeline.map((era, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-800">
                    <div className="text-center">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {era.era}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Patterns:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {era.patterns.map((pattern, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {pattern}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Drivers:
                        </h5>
                        <ul className="space-y-1">
                          {era.drivers.map((driver, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400">
                              • {driver}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Characteristics:
                        </h5>
                        <ul className="space-y-1">
                          {era.characteristics.map((char, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400">
                              • {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {index < evolutionTimeline.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="mb-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                Key Takeaways
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Essential principles for architectural pattern selection
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Selection Principles
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Match to Requirements:</strong> Choose patterns that solve your specific problems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Consider Team Skills:</strong> Select patterns your team can effectively implement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Think Long-term:</strong> Consider maintenance and scalability needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Start Simple:</strong> Begin with simpler patterns and evolve as needed
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Best Practices
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Understand Trade-offs:</strong> Every pattern has pros and cons
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Stay Consistent:</strong> Apply patterns consistently across the application
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Document Decisions:</strong> Record why and how patterns were chosen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Review and Adapt:</strong> Regularly evaluate if patterns still fit your needs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
