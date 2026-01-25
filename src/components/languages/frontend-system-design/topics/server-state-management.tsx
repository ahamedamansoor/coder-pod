'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Server, 
  Database,
  RefreshCw,
  Globe,
  Shield,
  Cloud,
  Zap,
  CheckCircle,
  Upload,
  Wifi
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServerStatePatternProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  category: string;
  complexity: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  benefits: string[];
  challenges: string[];
  useCases: string[];
}

const ServerStatePatternCard: React.FC<ServerStatePatternProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  category,
  complexity,
  frameworks,
  benefits,
  challenges,
  useCases
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className={cn('p-3 rounded-xl', color)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-900 dark:text-white">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{description}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{category}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{complexity}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Benefits</h4>
            <div className="flex flex-wrap gap-1">
              {benefits.slice(0, isExpanded ? benefits.length : 3).map((benefit, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                  {benefit}
                </span>
              ))}
              {!isExpanded && benefits.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{benefits.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Common Use Cases</h4>
            <div className="flex flex-wrap gap-1">
              {useCases.slice(0, isExpanded ? useCases.length : 3).map((useCase, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {useCase}
                </span>
              ))}
              {!isExpanded && useCases.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{useCases.length - 3} more
                </span>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Support</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.react.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.angular.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.vue.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Challenges</h4>
                <div className="flex flex-wrap gap-1">
                  {challenges.map((challenge, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const ServerStateManagement: React.FC = () => {
  const serverStateLibraries = [
    {
      title: 'React Query',
      description: 'Powerful data synchronization and server state management for React',
      icon: Database,
      color: 'bg-blue-500',
      category: 'Server State',
      complexity: 'Medium',
      frameworks: {
        react: ['React Query', 'TanStack Query', 'useQuery', 'useMutation'],
        angular: ['HTTP Client', 'RxJS', 'Services', 'NgRx Data'],
        vue: ['Vue Query', 'Pinia', 'Composables', 'Vue 3 async']
      },
      benefits: [
        'Automatic caching',
        'Background updates',
        'Optimistic updates',
        'Pagination support',
        'DevTools integration',
        'TypeScript support'
      ],
      challenges: [
        'Learning curve',
        'Cache complexity',
        'Memory management',
        'Configuration overhead'
      ],
      useCases: [
        'API data fetching',
        'Real-time updates',
        'Background synchronization',
        'Offline support',
        'Data caching'
      ]
    },
    {
      title: 'SWR',
      description: 'Lightweight data fetching library with React Hooks for remote data synchronization',
      icon: RefreshCw,
      color: 'bg-green-500',
      category: 'Server State',
      complexity: 'Easy',
      frameworks: {
        react: ['SWR', 'useSWR', 'useSWRInfinite', 'mutate'],
        angular: ['Custom services', 'RxJS patterns', 'HTTP interceptors', 'Angular equivalents'],
        vue: ['Vue SWR', 'Composables', 'Vue 3 patterns', 'Reactive fetching']
      },
      benefits: [
        'Lightweight',
        'Simple API',
        'Auto revalidation',
        'Focus tracking',
        'Reconnect on recovery',
        'TypeScript support'
      ],
      challenges: [
        'Limited features',
        'React-specific',
        'Less powerful than React Query',
        'Smaller ecosystem'
      ],
      useCases: [
        'Simple data fetching',
        'Real-time data',
        'Auto-refresh scenarios',
        'Lightweight apps',
        'Quick prototyping'
      ]
    },
    {
      title: 'Apollo Client',
      description: 'Comprehensive state management library for GraphQL with caching and synchronization',
      icon: Globe,
      color: 'bg-purple-500',
      category: 'Server State',
      complexity: 'High',
      frameworks: {
        react: ['Apollo Client', 'useQuery', 'useMutation', 'Apollo Provider'],
        angular: ['Apollo Angular', 'GraphQL', 'RxJS integration', 'Angular services'],
        vue: ['Apollo Vue', 'Vue Apollo', 'Composition API', 'Vue 3 integration']
      },
      benefits: [
        'GraphQL integration',
        'Advanced caching',
        'Real-time updates',
        'DevTools support',
        'TypeScript support',
        'Large ecosystem'
      ],
      challenges: [
        'Complex setup',
        'GraphQL learning curve',
        'Bundle size',
        'Overkill for simple APIs'
      ],
      useCases: [
        'GraphQL applications',
        'Complex data requirements',
        'Real-time collaboration',
        'Enterprise applications',
        'API aggregation'
      ]
    },
    {
      title: 'Axios Interceptors',
      description: 'HTTP request/response interceptors for centralized state management',
      icon: Shield,
      color: 'bg-red-500',
      category: 'Server State',
      complexity: 'Medium',
      frameworks: {
        react: ['Axios', 'React Query', 'Custom hooks', 'Context API'],
        angular: ['HTTP Client', 'Interceptors', 'Services', 'RxJS'],
        vue: ['Axios', 'Pinia', 'Composables', 'Vue 3 patterns']
      },
      benefits: [
        'Request/response interception',
        'Error handling',
        'Authentication',
        'Logging',
        'Framework agnostic',
        'Fine-grained control'
      ],
      challenges: [
        'Manual implementation',
        'Limited features',
        'No built-in caching',
        'More boilerplate'
      ],
      useCases: [
        'Custom state management',
        'Authentication flows',
        'Error handling',
        'Request logging',
        'API middleware'
      ]
    }
  ];

  const implementationStrategies = [
    {
      title: 'Cache First',
      description: 'Always serve from cache, update in background',
      icon: Database,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      patterns: [
        'React: React Query staleTime',
        'Angular: RxJS shareReplay',
        'Vue: Pinia with computed'
      ]
    },
    {
      title: 'Network First',
      description: 'Always fetch from network, cache as fallback',
      icon: Wifi,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      patterns: [
        'React: SWR revalidateOnFocus',
        'Angular: HTTP with interceptors',
        'Vue: Composables with refetch'
      ]
    },
    {
      title: 'Data Mutation',
      description: 'Updating server data and cache',
      icon: Upload,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      patterns: [
        'React: useMutation, optimistic updates',
        'Angular: HTTP methods + cache update',
        'Vue: composables with Pinia'
      ]
    },
    {
      title: 'Optimistic Updates',
      description: 'Update UI immediately, rollback on failure',
      icon: Zap,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      patterns: [
        'React: useMutation optimistic options',
        'Angular: RxJS tap and catchError',
        'Vue: Immediate Pinia updates'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Server State Management"
        description="Master server state management patterns and libraries for React, Angular, and Vue applications"
        icon={Server}
        category="System Design.State Management"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Server State Libraries */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10 mb-8">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Server State Libraries</CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential libraries for managing server state, caching, and data synchronization
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serverStateLibraries.map((library, index) => (
                <ServerStatePatternCard key={index} {...library} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Strategies */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Implementation Strategies</CardTitle>
                <CardDescription className="text-base mt-2">
                  Common patterns and strategies for implementing server state management
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {implementationStrategies.map((strategy, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn('p-3 rounded-xl', strategy.color)}>
                        <strategy.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">{strategy.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{strategy.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Implementation Patterns:</h4>
                      <ul className="space-y-1">
                        {strategy.patterns.map((pattern, patternIndex) => (
                          <li key={patternIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {pattern}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServerStateManagement;
