'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, 
  Layers, 
  ArrowRight, 
  ArrowDown, 
  ArrowUp, 
  Circle, 
  Square, 
  Triangle,
  Zap,
  Cpu,
  Globe,
  Lock,
  Unlock,
  RefreshCw,
  Eye,
  EyeOff,
  Code,
  Package,
  Network,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Target,
  Workflow,
  GitBranch,
  Box,
  Archive,
  FolderTree,
  Link,
  CheckCircle2,
  Star,
  Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StateTypeCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  examples: string[];
}

const StateTypeCard: React.FC<StateTypeCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  features, 
  examples 
}) => (
  <Card className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
    <CardHeader className="pb-4">
      <div className="flex items-center gap-3">
        <div className={cn('p-3 rounded-xl', color)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <CardTitle className="text-lg text-slate-900 dark:text-white">{title}</CardTitle>
          <CardDescription className="text-sm mt-1">{description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Examples:</h4>
          <div className="flex flex-wrap gap-2">
            {examples.map((example, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {example}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

interface StateFlowDiagramProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const StateFlowDiagram: React.FC<StateFlowDiagramProps> = ({ title, description, children }) => (
  <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
    <CardHeader className="pb-4">
      <CardTitle className="text-lg text-slate-900 dark:text-white flex items-center gap-2">
        <Workflow className="w-5 h-5 text-blue-500" />
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        {children}
      </div>
    </CardContent>
  </Card>
);

const StateManagementFundamentals: React.FC = () => {
  const stateTypes = [
    {
      title: 'Local State',
      description: 'Component-specific state managed within a single component',
      icon: Package,
      color: 'bg-blue-500',
      features: [
        'Component-scoped',
        'Fast access',
        'Simple to implement',
        'No external dependencies'
      ],
      examples: [
        'React: useState, useReducer', 
        'Angular: Component properties, BehaviorSubject',
        'Vue: ref, reactive, data()',
        'Form inputs, UI toggles'
      ]
    },
    {
      title: 'Global State',
      description: 'Application-wide state shared across multiple components',
      icon: Globe,
      color: 'bg-purple-500',
      features: [
        'Cross-component sharing',
        'Centralized management',
        'Consistent data',
        'Complex state logic'
      ],
      examples: [
        'React: Redux, Zustand, Context API', 
        'Angular: NgRx, Akita, Services',
        'Vue: Pinia, Vuex, Composition API',
        'User data, settings'
      ]
    },
    {
      title: 'Server State',
      description: 'Data fetched from external APIs and cached locally',
      icon: Server,
      color: 'bg-green-500',
      features: [
        'Remote data source',
        'Automatic synchronization',
        'Caching strategies',
        'Optimistic updates'
      ],
      examples: [
        'React: React Query, SWR, Apollo Client', 
        'Angular: HTTP Client with interceptors',
        'Vue: Vue Query, Apollo Vue',
        'API data, sync'
      ]
    },
    {
      title: 'URL State',
      description: 'State stored in the browser URL for shareable links',
      icon: Link,
      color: 'bg-orange-500',
      features: [
        'Bookmarkable URLs',
        'Browser navigation',
        'Shareable state',
        'SEO friendly'
      ],
      examples: [
        'React: React Router, useSearchParams', 
        'Angular: Router queryParams, fragment',
        'Vue: Vue Router, query params',
        'Filters, pagination'
      ]
    }
  ];

  const stateManagementPatterns = [
    {
      name: 'Unidirectional Flow',
      description: 'State flows in one direction from top to bottom',
      icon: ArrowDown,
      color: 'text-blue-500'
    },
    {
      name: 'Centralized Store',
      description: 'Single source of truth for application state',
      icon: Database,
      color: 'text-purple-500'
    },
    {
      name: 'Immutable Updates',
      description: 'State is never mutated directly, always replaced',
      icon: RefreshCw,
      color: 'text-green-500'
    },
    {
      name: 'Predictable Changes',
      description: 'State changes through defined actions/reducers',
      icon: GitBranch,
      color: 'text-orange-500'
    }
  ];

  const bestPractices = [
    {
      title: 'Keep State Minimal',
      description: 'Only store what\'s necessary and derive the rest',
      icon: Box,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Normalize Data',
      description: 'Store data in a flat structure to avoid duplication',
      icon: FolderTree,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      title: 'Separate Concerns',
      description: 'Keep UI state and server state separate',
      icon: Layers,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Optimize Re-renders',
      description: 'Use selectors and memoization to prevent unnecessary updates',
      icon: Zap,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="State Management Fundamentals"
        description="Master the art of managing application state with modern patterns, best practices, and powerful tools"
        icon={Database}
        category="System Design.State Management"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding State Management
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  State management is the process of handling data that changes over time in an application. 
                  It encompasses how you store, update, and synchronize data across your application for 
                  predictable data flow, consistent UI updates, scalable architecture, and better debugging.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Why It Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Prevents data inconsistencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improves application performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enhances developer experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enables better testing</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Predictable data flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Consistent UI updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Scalable architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Debugging capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* State Flow Diagram */}
        <StateFlowDiagram 
          title="State Flow in Modern Applications" 
          description="How data flows through a typical React application with state management"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* User Interaction */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">User Interaction</span>
              </div>
              <ArrowDown className="w-5 h-5 text-slate-400" />
            </div>

            {/* Action Dispatch */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Action Dispatch</span>
              </div>
              <ArrowDown className="w-5 h-5 text-slate-400" />
            </div>

            {/* State Update */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">State Update</span>
              </div>
              <ArrowDown className="w-5 h-5 text-slate-400" />
            </div>

            {/* Component Re-render */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Smartphone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Component Re-render</span>
              </div>
            </div>
          </div>
        </StateFlowDiagram>

        {/* State Types Section */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Types of State Management
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Different types of state require different management approaches. Understanding these types 
                  helps you choose the right solution for your specific needs.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateTypes.map((stateType, index) => (
                <StateTypeCard key={index} {...stateType} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GitBranch className="w-6 h-6 text-blue-500" />
              State Type Comparison
            </CardTitle>
            <CardDescription>
              Compare different state types to choose the right approach for your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Type</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">React Examples</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Angular Examples</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Vue Examples</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Local</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">useState, useReducer</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Component properties, BehaviorSubject</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">ref, reactive, data()</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Form data, UI state</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Global</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Redux, Zustand, Context</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">NgRx, Akita, Services</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Pinia, Vuex, Composition API</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">User data, settings</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Server</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">React Query, SWR, Apollo</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">HTTP Client, interceptors</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Vue Query, Apollo Vue</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">API data, sync</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-900 dark:text-white">URL</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">React Router, useSearchParams</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Router queryParams, fragment</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Vue Router, query params</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Filters, pagination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* State Management Patterns */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  State Management Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Common patterns and approaches for managing state in modern applications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {stateManagementPatterns.map((pattern, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <pattern.icon className={cn('w-6 h-6', pattern.color)} />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {pattern.name}
                      </CardTitle>
                    </div>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {pattern.description} This pattern ensures predictable state changes and makes debugging easier.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-500" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          Core pattern in modern state management
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pattern Examples */}
        <StateFlowDiagram 
          title="Common Implementation Patterns" 
          description="Visual representation of popular state management patterns"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* React Pattern */}
            <div className="text-center space-y-3">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto" />
              </div>
              <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">React Pattern</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Store → Actions → Reducers → State
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Examples: Redux, Context API, Zustand
              </div>
            </div>

            {/* Angular Pattern */}
            <div className="text-center space-y-3">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <Terminal className="w-6 h-6 text-red-600 dark:text-red-400 mx-auto" />
              </div>
              <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Angular Pattern</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Services → RxJS → Observables → State
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Examples: NgRx, Akita, Services + RxJS
              </div>
            </div>

            {/* Vue Pattern */}
            <div className="text-center space-y-3">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Network className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto" />
              </div>
              <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Vue Pattern</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Store → Actions → Mutations → State
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Examples: Pinia, Vuex, Composition API
              </div>
            </div>
          </div>
        </StateFlowDiagram>

        {/* Best Practices */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500 rounded-xl">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                  Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Follow these best practices to build maintainable and performant state management solutions
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={cn('p-2 rounded-lg', practice.color)}>
                        <practice.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {practice.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {practice.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Improves performance
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Reduces complexity
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Enhances maintainability
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Tips */}
        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Implementation Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Choose the right state management solution for your use case
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Keep state structure flat and normalized
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use TypeScript for better type safety
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper error handling
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't over-engineer simple state needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid deeply nested state structures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't mutate state directly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid storing derived data in state
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StateManagementFundamentals;
