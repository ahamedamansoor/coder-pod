'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, 
  Layers, 
  ArrowRight, 
  ArrowDown, 
  ArrowUp, 
  ArrowLeft,
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
  Braces,
  Puzzle,
  Settings,
  Shield,
  Radio,
  Router,
  HardDrive,
  Terminal,
  Code2,
  PackageOpen,
  GitMerge,
  Split,
  Hexagon,
  Diamond,
  Octagon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlobalStatePatternProps {
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

const GlobalStatePatternCard: React.FC<GlobalStatePatternProps> = ({ 
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

const GlobalStatePatterns: React.FC = () => {
  const globalStatePatterns = [
    {
      title: 'Redux Pattern',
      description: 'Predictable state container with centralized store and unidirectional data flow',
      icon: Database,
      color: 'bg-purple-500',
      category: 'State Management',
      complexity: 'High',
      frameworks: {
        react: ['Redux Toolkit', 'RTK Query', 'React Redux', 'Redux DevTools'],
        angular: ['NgRx Store', 'NgRx Component Store', 'Redux for Angular', 'RxJS Integration'],
        vue: ['Vuex', 'Pinia (Redux-style)', 'Vue Redux', 'Composition API']
      },
      benefits: [
        'Predictable state changes',
        'Excellent debugging tools',
        'Large ecosystem',
        'Strong TypeScript support',
        'Time-travel debugging',
        'Middleware support'
      ],
      challenges: [
        'Boilerplate heavy',
        'Steep learning curve',
        'Performance overhead',
        'Complex for simple apps'
      ],
      useCases: [
        'Large enterprise applications',
        'Complex state management',
        'Team collaboration',
        'Real-time applications',
        'E-commerce platforms'
      ]
    },
    {
      title: 'Context API',
      description: 'Built-in React solution for passing data through component tree without prop drilling',
      icon: Layers,
      color: 'bg-blue-500',
      category: 'State Management',
      complexity: 'Medium',
      frameworks: {
        react: ['useContext', 'createContext', 'Context Provider', 'useReducer'],
        angular: ['Services + RxJS', 'Dependency Injection', 'BehaviorSubject', 'Angular Services'],
        vue: ['Provide/Inject', 'Composition API', 'Reactive State', 'Vue 3 Context']
      },
      benefits: [
        'No extra libraries',
        'Easy to learn',
        'Good for moderate state',
        'React native support',
        'Built into React',
        'Simple API'
      ],
      challenges: [
        'Performance issues',
        'Frequent re-renders',
        'Limited tooling',
        'Not for complex state'
      ],
      useCases: [
        'Theme switching',
        'User authentication',
        'Language localization',
        'Component communication',
        'Medium complexity apps'
      ]
    },
    {
      title: 'Zustand Pattern',
      description: 'Minimalist state management with simple API and excellent performance',
      icon: Zap,
      color: 'bg-green-500',
      category: 'State Management',
      complexity: 'Easy',
      frameworks: {
        react: ['create', 'useStore', 'devtools', 'persist'],
        angular: ['Custom services', 'RxJS patterns', 'State services', 'Angular adapters'],
        vue: ['Composables', 'Vue adapters', 'Reactive patterns', 'Pinia alternative']
      },
      benefits: [
        'Very simple API',
        'Excellent performance',
        'Small bundle size',
        'Easy to test',
        'Minimal boilerplate',
        'TypeScript first'
      ],
      challenges: [
        'Limited ecosystem',
        'Fewer tools',
        'Less structured',
        'Newer library'
      ],
      useCases: [
        'Small to medium apps',
        'Rapid prototyping',
        'Performance-critical apps',
        'Simple state needs',
        'Modern React apps'
      ]
    },
    {
      title: 'MobX Pattern',
      description: 'Reactive state management with observable patterns and automatic dependencies',
      icon: Radio,
      color: 'bg-orange-500',
      category: 'State Management',
      complexity: 'Medium',
      frameworks: {
        react: ['observable', 'observer', 'useLocalObservable', 'MobX React Lite'],
        angular: ['RxJS + Services', 'BehaviorSubject', 'Observable patterns', 'Angular MobX'],
        vue: ['Vue reactivity system', 'Composition API', 'Reactive state', 'Vue 3 reactivity']
      },
      benefits: [
        'Minimal boilerplate',
        'Excellent performance',
        'Intuitive API',
        'Flexible usage',
        'Observable state',
        'Automatic reactions'
      ],
      challenges: [
        'Magic behavior',
        'Harder to debug',
        'TypeScript challenges',
        'Learning curve'
      ],
      useCases: [
        'Complex reactive apps',
        'Real-time data flows',
        'Form state management',
        'Data visualization',
        'Interactive applications'
      ]
    },
    {
      title: 'Recoil Pattern',
      description: 'Facebook\'s experimental state management with atoms and selectors',
      icon: Hexagon,
      color: 'bg-indigo-500',
      category: 'State Management',
      complexity: 'High',
      frameworks: {
        react: ['atom', 'selector', 'useRecoilState', 'useRecoilValue'],
        angular: ['Signals', 'RxJS patterns', 'State services', 'Angular reactive'],
        vue: ['Refs + Computed', 'Composition API', 'Reactive state', 'Vue 3 patterns']
      },
      benefits: [
        'Modern React patterns',
        'Excellent TypeScript',
        'Fine-grained control',
        'Facebook backing',
        'Atoms and selectors',
        'Derived state'
      ],
      challenges: [
        'Experimental status',
        'Limited adoption',
        'Complex concepts',
        'Performance concerns'
      ],
      useCases: [
        'Experimental React apps',
        'Complex state dependencies',
        'Facebook ecosystem',
        'Modern React projects',
        'Research applications'
      ]
    },
    {
      title: 'Jotai Pattern',
      description: 'Primitive and flexible state management with atomic approach',
      icon: Diamond,
      color: 'bg-pink-500',
      category: 'State Management',
      complexity: 'Medium',
      frameworks: {
        react: ['atom', 'useAtom', 'useAtomValue', 'useSetAtom'],
        angular: ['Custom atomic services', 'RxJS patterns', 'State atoms', 'Angular adapters'],
        vue: ['Composables', 'Reactive atoms', 'Vue adapters', 'Composition API']
      },
      benefits: [
        'Minimal API surface',
        'Excellent performance',
        'Flexible composition',
        'Good TypeScript',
        'Atomic state',
        'Composable atoms'
      ],
      challenges: [
        'Smaller ecosystem',
        'Less documentation',
        'Newer project',
        'Niche adoption'
      ],
      useCases: [
        'Modern React apps',
        'Performance-critical apps',
        'Minimal state solutions',
        'TypeScript projects',
        'Atomic composition'
      ]
    }
  ];

  const implementationStrategies = [
    {
      title: 'Single Store Architecture',
      description: 'All global state managed in one centralized store',
      icon: Package,
      color: 'text-purple-600',
      details: [
        'Single source of truth',
        'Centralized actions',
        'Unified middleware',
        'Global state snapshot'
      ],
      patterns: ['Redux', 'Zustand', 'MobX']
    },
    {
      title: 'Multiple Stores Architecture',
      description: 'State split across multiple specialized stores',
      icon: PackageOpen,
      color: 'text-blue-600',
      details: [
        'Domain separation',
        'Independent stores',
        'Selective subscriptions',
        'Better organization'
      ],
      patterns: ['Multiple Zustand stores', 'Context API', 'MobX stores']
    },
    {
      title: 'Hybrid Architecture',
      description: 'Combination of different patterns for optimal results',
      icon: GitMerge,
      color: 'text-green-600',
      details: [
        'Pattern mixing',
        'Use case specific',
        'Flexible approach',
        'Best of both worlds'
      ],
      patterns: ['Redux + Context', 'Zustand + Recoil', 'Custom solutions']
    }
  ];

  const bestPractices = [
    {
      title: 'Structure Your State',
      description: 'Organize state logically with proper normalization',
      icon: FolderTree,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Use Selectors',
      description: 'Create derived state with memoized selectors',
      icon: Target,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      title: 'Optimize Performance',
      description: 'Prevent unnecessary re-renders with proper subscriptions',
      icon: Zap,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Handle Side Effects',
      description: 'Manage async operations and side effects properly',
      icon: RefreshCw,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Global State Patterns"
        description="Master advanced global state management patterns, architectures, and best practices for scalable React applications"
        icon={Globe}
        category="System Design.State Management"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Global State Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Global state management patterns provide solutions for sharing data across components 
                  without prop drilling. They offer centralized state management, predictable updates, 
                  and powerful debugging capabilities for complex applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Why Global State Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Eliminates prop drilling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Centralized state management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Predictable state updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Powerful debugging tools</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  When to Use Global State
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">User authentication data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Application settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Cross-component data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Complex application state</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global State Patterns */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Braces className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Popular Global State Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Explore the most widely used global state management patterns, their strengths, 
                  weaknesses, and ideal use cases for different application requirements.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalStatePatterns.map((pattern, index) => (
                <GlobalStatePatternCard key={index} {...pattern} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pattern Comparison */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GitBranch className="w-6 h-6 text-blue-500" />
              Pattern Comparison Matrix
            </CardTitle>
            <CardDescription>
              Compare different global state patterns to choose the right approach for your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Pattern</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">React</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Angular</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Vue</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Complexity</th>
                    <th className="text-left p-3 font-medium text-slate-700 dark:text-slate-300">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Redux</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Redux Toolkit</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">NgRx Store</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Vuex/Pinia</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">High</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Large apps</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Context</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">useContext</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Services</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Provide/Inject</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Low</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Simple apps</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Zustand</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">useStore</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Custom services</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Composables</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Low</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Most apps</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">MobX</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">observable</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">RxJS</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Vue reactivity</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Medium</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Reactive apps</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Recoil</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">atom/selector</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Signals</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Refs/Computed</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Medium</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">React apps</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-900 dark:text-white">Jotai</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">atom/useAtom</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Atomic services</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Composables</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Low</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">TS apps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Strategies */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  Implementation Strategies
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Different architectural approaches for implementing global state in your applications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {implementationStrategies.map((strategy, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <strategy.icon className={cn('w-6 h-6', strategy.color)} />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {strategy.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        {strategy.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                        <h5 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Common Patterns:</h5>
                        <div className="flex flex-wrap gap-1">
                          {strategy.patterns.map((pattern, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {pattern}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* State Flow Diagram */}
        <StateFlowDiagram 
          title="Global State Data Flow" 
          description="How data flows through different global state management patterns"
        >
          <div className="space-y-8">
            {/* Redux Flow */}
            <div className="space-y-4">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 text-center">Redux Pattern Flow</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Smartphone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Component</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Action</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Reducer</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Store</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Update</span>
                </div>
              </div>
            </div>

            {/* Context Flow */}
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-center">Context API Flow</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Provider</span>
                </div>
                <ArrowDown className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Context</span>
                </div>
                <ArrowDown className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Consumer</span>
                </div>
              </div>
            </div>

            {/* Zustand Flow */}
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400 text-center">Zustand Pattern Flow</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Smartphone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Component</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Hook</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Store</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Update</span>
                </div>
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
                  Follow these best practices to build efficient and maintainable global state management
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
              Implementation Guidelines
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
                      Choose patterns based on application complexity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Normalize state structure to avoid duplication
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
                      Implement proper error boundaries
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use selectors for derived state
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
                      Avoid storing UI state in global state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't mix concerns in single store
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid deep nesting in state structure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore performance implications
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

export default GlobalStatePatterns;
