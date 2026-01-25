'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  TrendingUp,
  Layers,
  GitBranch,
  Users,
  Database,
  Zap,
  Cloud,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface ScalabilityPatternProps {
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

const ScalabilityPatternCard: React.FC<ScalabilityPatternProps> = ({ 
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

export default function ScalabilityPrinciples() {
  const scalabilityPatterns = [
    {
      title: 'Micro-Frontends',
      description: 'Decompose frontend into independent team-owned applications',
      icon: Layers,
      color: 'bg-indigo-500',
      category: 'Advanced',
      complexity: 'Hard',
      frameworks: {
        react: ['Module Federation', 'Single-SPA', 'Qiankun', 'Webpack 5'],
        angular: ['Angular Elements', 'Micro-frontends with NgRx', 'Module Federation', 'Custom Elements'],
        vue: ['Module Federation', 'Vue Micro Frontends', 'Composition API', 'Plugin System']
      },
      benefits: [
        'Independent team deployments',
        'Technology diversity per team',
        'Isolated failure domains',
        'Scalable team organization',
        'Autonomous development cycles',
        'Gradual migration path'
      ],
      challenges: [
        'Cross-app communication',
        'Shared dependency management',
        'Consistent UX across apps',
        'Build and deployment complexity',
        'Performance overhead',
        'Integration testing complexity'
      ],
      useCases: [
        'Large enterprise applications',
        'Multi-team development',
        'Legacy system migration',
        'Acquired product integration',
        'Independent feature teams'
      ]
    },
    {
      title: 'Event-Driven Frontend',
      description: 'Use events to communicate between frontend components',
      icon: GitBranch,
      color: 'bg-pink-500',
      category: 'Advanced',
      complexity: 'Medium',
      frameworks: {
        react: ['EventEmitter', 'RxJS', 'React Context', 'Custom Hooks'],
        angular: ['RxJS Subjects', 'EventEmitter', 'NgRx Effects', 'Services'],
        vue: ['Event Bus', 'Vuex Actions', 'Composition API', 'Provide/Inject']
      },
      benefits: [
        'Loose component coupling',
        'Better component reusability',
        'Asynchronous UI updates',
        'Event sourcing for state',
        'Real-time synchronization',
        'Scalable communication'
      ],
      challenges: [
        'Event schema management',
        'Debugging event flows',
        'Event ordering issues',
        'Memory leak risks',
        'Complex event chains',
        'Testing difficulties'
      ],
      useCases: [
        'Real-time dashboards',
        'Complex form workflows',
        'Multi-component synchronization',
        'Plugin architectures',
        'WebSocket applications'
      ]
    },
    {
      title: 'Client-Side Load Balancing',
      description: 'Distribute requests across multiple API endpoints from the frontend',
      icon: Users,
      color: 'bg-purple-500',
      category: 'Fundamental',
      complexity: 'Medium',
      frameworks: {
        react: ['React Query', 'SWR', 'Axios Interceptors', 'Custom Hooks'],
        angular: ['HTTP Interceptors', 'RxJS Retry', 'Load Balancer Service', 'Service Workers'],
        vue: ['Vue Query', 'Axios Plugins', 'Composable Functions', 'Nuxt Plugins']
      },
      benefits: [
        'API endpoint failover strategies',
        'Geographic routing for better latency',
        'Circuit breaker patterns in frontend',
        'Health checks for API availability',
        'Improved reliability',
        'Better user experience'
      ],
      challenges: [
        'Client-side complexity',
        'Consistent state management',
        'Network latency detection',
        'Fallback mechanism design',
        'Configuration management',
        'Error handling complexity'
      ],
      useCases: [
        'Global applications',
        'High-availability systems',
        'CDN-based APIs',
        'Multi-region deployments',
        'Critical user interfaces'
      ]
    },
    {
      title: 'Frontend Data Caching',
      description: 'Strategies for caching data in the browser and frontend',
      icon: Database,
      color: 'bg-orange-500',
      category: 'Fundamental',
      complexity: 'Easy',
      frameworks: {
        react: ['React Query', 'SWR', 'Redux Persist', 'Local Storage Hooks'],
        angular: ['NgRx Store DevTools', 'HTTP Cache', 'Service Workers', 'LocalStorage Service'],
        vue: ['Vuex Persist', 'Vue Query', 'Composition API', 'Pinia Persist']
      },
      benefits: [
        'Service worker caching strategies',
        'LocalStorage for offline data',
        'Memory caching for repeated requests',
        'Cache invalidation patterns',
        'Reduced API calls',
        'Offline functionality'
      ],
      challenges: [
        'Cache invalidation complexity',
        'Memory management',
        'Data consistency issues',
        'Storage limitations',
        'Cache synchronization',
        'Performance optimization'
      ],
      useCases: [
        'Offline-first applications',
        'Data-heavy dashboards',
        'Mobile applications',
        'Progressive Web Apps',
        'Real-time data displays'
      ]
    },
    {
      title: 'CDN & Edge Computing',
      description: 'Leverage CDN for frontend asset delivery and edge computing',
      icon: Cloud,
      color: 'bg-cyan-500',
      category: 'Fundamental',
      complexity: 'Easy',
      frameworks: {
        react: ['Next.js CDN', 'Vite CDN', 'Webpack CDN', 'Cloudflare Workers'],
        angular: ['Angular Universal', 'Angular CLI CDN', 'Edge Functions', 'Static Site Generation'],
        vue: ['Nuxt CDN', 'Vue CLI CDN', 'Edge Side Includes', 'Jamstack Deployment']
      },
      benefits: [
        'Static asset optimization',
        'Edge-side includes for dynamic content',
        'Geographic distribution',
        'Cache control headers',
        'Reduced latency',
        'Better performance'
      ],
      challenges: [
        'Cache invalidation strategies',
        'Edge computing limitations',
        'Configuration complexity',
        'Cost management',
        'Debugging edge issues',
        'Vendor lock-in concerns'
      ],
      useCases: [
        'Global applications',
        'Static site generation',
        'Media-heavy websites',
        'E-commerce platforms',
        'Content delivery networks'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Frontend techniques for handling scale and maintaining performance',
      icon: Zap,
      color: 'bg-red-500',
      category: 'Fundamental',
      complexity: 'Medium',
      frameworks: {
        react: ['React.lazy', 'Suspense', 'Memo', 'Code Splitting'],
        angular: ['Lazy Loading', 'OnPush Change Detection', 'TrackBy', 'AoT Compilation'],
        vue: ['Async Components', 'Keep Alive', 'Computed Properties', 'Tree Shaking']
      },
      benefits: [
        'Code splitting and lazy loading',
        'Bundle size optimization',
        'Image optimization and responsive loading',
        'Critical rendering path optimization',
        'Faster load times',
        'Better user experience'
      ],
      challenges: [
        'Bundle analysis complexity',
        'Performance monitoring',
        'Cross-browser compatibility',
        'SEO optimization',
        'Measurement accuracy',
        'Continuous optimization'
      ],
      useCases: [
        'Large-scale applications',
        'Mobile-first websites',
        'Performance-critical applications',
        'E-commerce platforms',
        'Media streaming services'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Scalability Principles"
        description="Master frontend scalability patterns and architectures for building applications that grow seamlessly with user demand, data volume, and feature complexity while maintaining optimal performance."
        icon={TrendingUp}
        category="System Design.Scalability"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Frontend Scalability
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Frontend scalability is about designing user interfaces that handle growing user bases, 
                  increasing data volumes, and maintaining performance under load. Learn how frontend architects 
                  make decisions that impact user experience at scale.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">User Growth</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Handle increasing concurrent users
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Database className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Data Volume</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Manage growing datasets efficiently
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Performance</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Maintain speed under load
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scalability Patterns */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Essential Scalability Patterns
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore the fundamental and advanced scalability patterns that power modern web applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {scalabilityPatterns.map((pattern, index) => (
              <ScalabilityPatternCard key={index} {...pattern} />
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 dark:text-green-300 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Scalability Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Follow these guidelines to build scalable and maintainable frontend applications
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
                      Design for horizontal scaling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Implement effective caching strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Monitor performance metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Optimize bundle sizes
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Don'ts
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Ignore performance monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Over-engineer simple solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Neglect caching strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Skip load testing
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
}
