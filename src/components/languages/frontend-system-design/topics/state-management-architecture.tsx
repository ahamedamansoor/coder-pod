'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database,
  Box,
  Layers,
  GitBranch,
  Archive,
  Zap,
  Cpu,
  Server,
  Cloud,
  Package,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Target,
  Workflow,
  RefreshCw,
  Eye,
  Code,
  Terminal,
  Shield,
  Lock,
  Key,
  Network,
  Settings,
  Puzzle,
  TreePine,
  Radio,
  Activity
} from 'lucide-react';

interface StateManagementPatternProps {
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

const StateManagementPatternCard: React.FC<StateManagementPatternProps> = ({ 
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
    <Card className="transition-all duration-300 hover:shadow-lg border-2 hover:border-opacity-50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            category === 'Fundamental' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
            category === 'Advanced' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
            'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
          }`}>
            {category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            complexity === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
            complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
          }`}>
            {complexity}
          </span>
        </div>
      </CardHeader>
      <CardContent>
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

const StateManagementArchitecture: React.FC = () => {
  const stateManagementPatterns = [
    {
      title: 'Redux Pattern',
      description: 'Predictable state container with immutable updates and time-travel debugging',
      icon: Database,
      color: 'bg-purple-500',
      category: 'Fundamental',
      complexity: 'Medium',
      frameworks: {
        react: ['Redux', 'Redux Toolkit', 'React-Redux', 'Redux Saga'],
        angular: ['NgRx', 'Redux Angular', 'RxJS Integration', 'Store DevTools'],
        vue: ['Vue Redux', 'Vuex (Redux-like)', 'Pinia (Redux-inspired)', 'Composition API']
      },
      benefits: [
        'Predictable state updates',
        'Time-travel debugging',
        'Immutable state',
        'Centralized store',
        'Middleware support',
        'DevTools integration'
      ],
      challenges: [
        'Boilerplate code',
        'Learning curve',
        'Verbosity',
        'Setup complexity',
        'Performance overhead',
        'Over-engineering risk'
      ],
      useCases: [
        'Large applications',
        'Complex state logic',
        'Team collaboration',
        'Enterprise software',
        'E-commerce platforms',
        'Data-intensive apps'
      ]
    },
    {
      title: 'MobX Pattern',
      description: 'Simple, scalable state management with reactive programming',
      icon: Radio,
      color: 'bg-orange-500',
      category: 'Fundamental',
      complexity: 'Easy',
      frameworks: {
        react: ['MobX', 'MobX React', 'MobX State Tree', 'Observer Components'],
        angular: ['MobX Angular', 'RxJS Integration', 'Observable Services', 'Reactive Forms'],
        vue: ['Vue MobX', 'Composition API', 'Reactive State', 'Observable Computed']
      },
      benefits: [
        'Minimal boilerplate',
        'Automatic reactivity',
        'Simple learning curve',
        'Fine-grained control',
        'Performance optimized',
        'TypeScript support'
      ],
      challenges: [
        'Magic behavior',
        'Debugging complexity',
        'Implicit dependencies',
        'Testing challenges',
        'State mutation',
        'Performance tuning'
      ],
      useCases: [
        'Rapid prototyping',
        'Small to medium apps',
        'Real-time applications',
        'Form-heavy apps',
        'Interactive UIs',
        'Data visualization'
      ]
    },
    {
      title: 'Context API Pattern',
      description: 'Built-in React solution for passing data through component tree',
      icon: TreePine,
      color: 'bg-blue-500',
      category: 'Fundamental',
      complexity: 'Easy',
      frameworks: {
        react: ['Context API', 'useContext', 'useReducer', 'Custom Hooks'],
        angular: ['Services', 'Dependency Injection', 'RxJS Subjects', 'Hierarchical DI'],
        vue: ['Provide/Inject', 'Composition API', 'Reactive State', 'Global State']
      },
      benefits: [
        'Built-in solution',
        'No external dependencies',
        'Simple API',
        'Component isolation',
        'TypeScript support',
        'Performance optimized'
      ],
      challenges: [
        'Prop drilling',
        'Re-render issues',
        'Performance concerns',
        'Complex state logic',
        'Limited features',
        'Scalability limits'
      ],
      useCases: [
        'Theme switching',
        'User authentication',
        'Language localization',
        'Simple global state',
        'Component libraries',
        'Configuration management'
      ]
    },
    {
      title: 'Zustand Pattern',
      description: 'Minimalist state management with hooks-based API',
      icon: Package,
      color: 'bg-green-500',
      category: 'Advanced',
      complexity: 'Easy',
      frameworks: {
        react: ['Zustand', 'Zustand Middleware', 'Persist Middleware', 'DevTools'],
        angular: ['Zustand Integration', 'RxJS Wrapper', 'Service Pattern', 'Hook-like API'],
        vue: ['Vue Zustand', 'Composition API', 'Composable Pattern', 'Reactive Store']
      },
      benefits: [
        'Minimal boilerplate',
        'Simple API',
        'TypeScript first',
        'Performance optimized',
        'Middleware support',
        'No providers needed'
      ],
      challenges: [
        'Limited ecosystem',
        'Smaller community',
        'Fewer tools',
        'Learning curve',
        'Documentation gaps',
        'Advanced patterns'
      ],
      useCases: [
        'Modern React apps',
        'TypeScript projects',
        'Performance-critical apps',
        'Simple state needs',
        'Rapid development',
        'Component libraries'
      ]
    },
    {
      title: 'NgRx Pattern',
      description: 'Reactive state management for Angular applications using RxJS',
      icon: Activity,
      color: 'bg-red-500',
      category: 'Advanced',
      complexity: 'Hard',
      frameworks: {
        react: ['NgRx Concepts', 'RxJS Integration', 'Redux Observable', 'Epics Pattern'],
        angular: ['NgRx Store', 'NgRx Effects', 'NgRx Entity', 'NgRx Router Store'],
        vue: ['Vue RxJS', 'Observable Vuex', 'Reactive Patterns', 'Custom NgRx-like']
      },
      benefits: [
        'Reactive programming',
        'Immutable state',
        'Powerful effects',
        'TypeScript support',
        'DevTools integration',
        'Enterprise ready'
      ],
      challenges: [
        'Steep learning curve',
        'RxJS complexity',
        'Boilerplate heavy',
        'Over-engineering',
        'Verbosity',
        'Debugging difficulty'
      ],
      useCases: [
        'Enterprise Angular apps',
        'Complex workflows',
        'Real-time applications',
        'Large-scale systems',
        'Financial applications',
        'Critical business logic'
      ]
    },
    {
      title: 'Pinia Pattern',
      description: 'Modern Vue state management with composition API support',
      icon: Puzzle,
      color: 'bg-emerald-500',
      category: 'Advanced',
      complexity: 'Easy',
      frameworks: {
        react: ['Pinia Concepts', 'Composition API', 'Store Pattern', 'Reactive State'],
        angular: ['Pinia-like Services', 'RxJS Store', 'State Services', 'Reactive Patterns'],
        vue: ['Pinia', 'Composition API', 'TypeScript Support', 'DevTools']
      },
      benefits: [
        'Vue 3 native',
        'TypeScript support',
        'Simple API',
        'Modular stores',
        'Hot module replacement',
        'Excellent DX'
      ],
      challenges: [
        'Vue ecosystem limited',
        'Migration from Vuex',
        'Learning curve',
        'Documentation gaps',
        'Third-party integrations',
        'Testing patterns'
      ],
      useCases: [
        'Vue 3 applications',
        'TypeScript projects',
        'Modern web apps',
        'Component libraries',
        'Progressive web apps',
        'Mobile web apps'
      ]
    }
  ];

  const realWorldExamples = [
    {
      name: 'E-commerce Platform',
      description: 'Shopping cart, user authentication, and product catalog management',
      icon: Package,
      features: ['Cart persistence', 'User sessions', 'Product filters', 'Order tracking'],
      category: 'Retail'
    },
    {
      name: 'Social Media Dashboard',
      description: 'Real-time feed, notifications, and user interactions',
      icon: Activity,
      features: ['Real-time updates', 'Infinite scroll', 'Push notifications', 'User presence'],
      category: 'Social'
    },
    {
      name: 'Financial Trading App',
      description: 'Real-time market data, portfolio management, and trading operations',
      icon: Database,
      features: ['Real-time quotes', 'Portfolio tracking', 'Risk management', 'Trade execution'],
      category: 'Finance'
    },
    {
      name: 'Project Management Tool',
      description: 'Task management, team collaboration, and progress tracking',
      icon: GitBranch,
      features: ['Task boards', 'Team collaboration', 'Progress tracking', 'Time tracking'],
      category: 'Productivity'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="State Management Architecture"
        description="Master state management patterns and architectures for building scalable, maintainable, and performant frontend applications with predictable state updates and optimal user experiences"
        icon={Database}
        category="System Design.Architecture"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Understanding State Management Architecture
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  State management architecture defines how application state is stored, updated, and accessed across components. 
                  Master essential patterns for building predictable, scalable, and maintainable web applications with optimal 
                  performance and developer experience.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Why State Management Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Provides single source of truth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Enables predictable state updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Improves debugging and testing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Supports complex application logic
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-pink-200 dark:border-pink-800">
                <h4 className="text-lg font-semibold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  Key Principles
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Single source of truth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Immutable state updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Predictable state transitions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Clear separation of concerns
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* State Management Patterns */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Essential State Management Patterns
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore the fundamental and advanced state management patterns that power modern web applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {stateManagementPatterns.map((pattern, index) => (
              <StateManagementPatternCard key={index} {...pattern} />
            ))}
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              See how state management patterns are implemented in production applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realWorldExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit">
                    <example.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{example.name}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features</h5>
                      <div className="flex flex-wrap gap-1">
                        {example.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                        {example.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 dark:text-green-300 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              State Management Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Follow these guidelines to build robust and maintainable state management architectures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Do's
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Choose the right pattern for your app size
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Keep state normalized and flat
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Use TypeScript for type safety
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Implement proper error handling
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Don'ts
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Over-engineer simple applications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Mix multiple state management solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Store derived state in the store
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Ignore performance implications
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

export default StateManagementArchitecture;
