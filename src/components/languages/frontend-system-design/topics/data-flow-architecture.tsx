'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Network,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Database,
  Server,
  Cloud,
  Monitor,
  Smartphone,
  Cpu,
  Globe,
  Layers,
  Zap,
  RefreshCw,
  Package,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Target,
  Workflow,
  GitBranch,
  Box,
  Archive,
  Eye,
  Code,
  Terminal
} from 'lucide-react';

interface DataFlowPatternProps {
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

const DataFlowPatternCard: React.FC<DataFlowPatternProps> = ({ 
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

const DataFlowArchitecture: React.FC = () => {
  const dataFlowPatterns = [
    {
      title: 'Unidirectional Data Flow',
      description: 'Data flows in a single direction from parent to child components',
      icon: ArrowRight,
      color: 'bg-blue-500',
      category: 'Fundamental',
      complexity: 'Easy',
      frameworks: {
        react: ['React State Props', 'Context API', 'Redux', 'Recoil'],
        angular: ['Services', 'RxJS', 'NgRx', 'Component Communication'],
        vue: ['Props Down Events Up', 'Vuex', 'Pinia', 'Provide/Inject']
      },
      benefits: [
        'Predictable data flow',
        'Easy to debug',
        'Clear data ownership',
        'Better performance',
        'Simplified testing',
        'Maintainable code'
      ],
      challenges: [
        'Prop drilling',
        'Boilerplate code',
        'Learning curve',
        'Verbosity',
        'Setup complexity'
      ],
      useCases: [
        'React applications',
        'Component libraries',
        'Form handling',
        'State management',
        'Data visualization',
        'Dashboard applications'
      ]
    },
    {
      title: 'Bidirectional Data Binding',
      description: 'Automatic synchronization of data between model and view',
      icon: RefreshCw,
      color: 'bg-green-500',
      category: 'Fundamental',
      complexity: 'Easy',
      frameworks: {
        react: ['Controlled Components', 'State Hooks', 'Form Libraries', 'Custom Hooks'],
        angular: ['[(ngModel)]', 'Forms Module', 'Reactive Forms', 'Template-driven Forms'],
        vue: ['v-model', 'Computed Properties', 'Watchers', 'Form Handling']
      },
      benefits: [
        'Less boilerplate',
        'Automatic updates',
        'Simple forms',
        'Real-time sync',
        'Developer friendly',
        'Quick development'
      ],
      challenges: [
        'Performance overhead',
        'Complex debugging',
        'Unpredictable updates',
        'Memory leaks',
        'Testing complexity'
      ],
      useCases: [
        'Form applications',
        'Real-time editors',
        'Configuration panels',
        'Settings pages',
        'Data entry forms',
        'Interactive UI components'
      ]
    },
    {
      title: 'Event-Driven Architecture',
      description: 'Components communicate through events and message passing',
      icon: Zap,
      color: 'bg-purple-500',
      category: 'Advanced',
      complexity: 'Medium',
      frameworks: {
        react: ['Event Emitters', 'Custom Events', 'Pub/Sub Patterns', 'Event Buses'],
        angular: ['EventEmitter', 'Services', 'RxJS Subjects', 'Event Delegation'],
        vue: ['Event Bus', 'Event Emitters', 'Provide/Inject', 'Global Events']
      },
      benefits: [
        'Loose coupling',
        'Scalable architecture',
        'Real-time updates',
        'Component independence',
        'Flexible communication',
        'Event sourcing'
      ],
      challenges: [
        'Event management',
        'Debugging complexity',
        'Memory management',
        'Event ordering',
        'Testing difficulties'
      ],
      useCases: [
        'Real-time applications',
        'Chat systems',
        'Monitoring dashboards',
        'Trading platforms',
        'Gaming applications',
        'IoT interfaces'
      ]
    },
    {
      title: 'State Management Pattern',
      description: 'Centralized state management with predictable updates',
      icon: Database,
      color: 'bg-orange-500',
      category: 'Advanced',
      complexity: 'Medium',
      frameworks: {
        react: ['Redux', 'MobX', 'Zustand', 'Recoil'],
        angular: ['NgRx', 'Akita', 'RxJS', 'State Services'],
        vue: ['Vuex', 'Pinia', 'Composition API', 'Reactive State']
      },
      benefits: [
        'Centralized state',
        'Predictable updates',
        'Time-travel debugging',
        'Testable code',
        'Scalable architecture',
        'DevTools support'
      ],
      challenges: [
        'Learning curve',
        'Boilerplate code',
        'Performance overhead',
        'Complex setup',
        'Over-engineering risk'
      ],
      useCases: [
        'Large applications',
        'E-commerce platforms',
        'Enterprise software',
        'Complex workflows',
        'Multi-user applications',
        'Data-intensive apps'
      ]
    },
    {
      title: 'Server-Side Data Flow',
      description: 'Managing data flow between client and server with optimization',
      icon: Server,
      color: 'bg-red-500',
      category: 'Advanced',
      complexity: 'Hard',
      frameworks: {
        react: ['React Query', 'SWR', 'Apollo Client', 'RTK Query'],
        angular: ['HTTP Client', 'RxJS', 'Apollo Angular', 'HTTP Interceptors'],
        vue: ['Vue Query', 'Apollo Vue', 'Axios', 'Composables']
      },
      benefits: [
        'Automatic caching',
        'Background updates',
        'Optimistic updates',
        'Error handling',
        'Loading states',
        'Data synchronization'
      ],
      challenges: [
        'Complex caching',
        'Network latency',
        'Error boundaries',
        'Offline support',
        'Data consistency'
      ],
      useCases: [
        'REST APIs',
        'GraphQL applications',
        'Real-time data',
        'Offline applications',
        'Mobile apps',
        'Progressive Web Apps'
      ]
    },
    {
      title: 'Microservices Data Flow',
      description: 'Managing data flow across distributed frontend services',
      icon: Cloud,
      color: 'bg-indigo-500',
      category: 'Advanced',
      complexity: 'Hard',
      frameworks: {
        react: ['Module Federation', 'Micro-frontends', 'Web Components', 'Shared Libraries'],
        angular: ['Angular Elements', 'Micro-frontends', 'Shared Modules', 'Lazy Loading'],
        vue: ['Vue Micro-frontends', 'Plugin System', 'Component Libraries', 'Shared State']
      },
      benefits: [
        'Team autonomy',
        'Independent deployment',
        'Technology diversity',
        'Scalable teams',
        'Risk isolation',
        'Gradual upgrades'
      ],
      challenges: [
        'Complex integration',
        'Performance overhead',
        'Version conflicts',
        'Shared dependencies',
        'Testing complexity'
      ],
      useCases: [
        'Enterprise applications',
        'Multi-team projects',
        'Large-scale platforms',
        'Legacy migration',
        'Plugin architectures',
        'Distributed systems'
      ]
    }
  ];

  const realWorldExamples = [
    {
      name: 'E-commerce Cart',
      description: 'Shopping cart with real-time updates and persistence',
      icon: Package,
      features: ['Real-time sync', 'Local storage', 'Server sync', 'Multi-tab support'],
      category: 'Retail'
    },
    {
      name: 'Chat Application',
      description: 'Real-time messaging with WebSocket connections',
      icon: Globe,
      features: ['WebSocket', 'Message queuing', 'User presence', 'Typing indicators'],
      category: 'Communication'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Data visualization with real-time updates',
      icon: Monitor,
      features: ['Real-time charts', 'Data streaming', 'Interactive filters', 'Export capabilities'],
      category: 'Analytics'
    },
    {
      name: 'Collaborative Editor',
      description: 'Multi-user document editing with conflict resolution',
      icon: Code,
      features: ['OT/CRDT', 'Real-time sync', 'Version control', 'Conflict resolution'],
      category: 'Productivity'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Data Flow Architecture"
        description="Master frontend data flow patterns for building scalable, maintainable, and performant web applications with predictable state management and optimal user experiences"
        icon={Network}
        category="System Design.Architecture"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Data Flow Architecture
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Data flow architecture defines how data moves through your frontend application, from user interactions 
                  to server responses and back to the UI. Master essential patterns for building predictable, scalable, 
                  and maintainable web applications with optimal performance and user experience.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Data Flow Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Ensures predictable application behavior
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Improves debugging and maintenance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Enables better performance optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Supports scalable application architecture
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Key Principles
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Single source of truth for state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Unidirectional data flow when possible
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
                      Clear separation of concerns
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Flow Patterns */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Essential Data Flow Patterns
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore the fundamental and advanced data flow patterns that power modern web applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {dataFlowPatterns.map((pattern, index) => (
              <DataFlowPatternCard key={index} {...pattern} />
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
              See how data flow patterns are implemented in production applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realWorldExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl w-fit">
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
                          <span key={idx} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
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
              Data Flow Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Follow these guidelines to build robust and maintainable data flow architectures
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
                      Choose the right pattern for your use case
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Keep data flow predictable and debuggable
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Optimize for performance and user experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Implement proper error handling and loading states
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
                      Create spaghetti data flow architecture
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Ignore performance implications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Mix multiple patterns without clear strategy
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

export default DataFlowArchitecture;
