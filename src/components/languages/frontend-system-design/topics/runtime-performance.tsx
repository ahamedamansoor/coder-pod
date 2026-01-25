'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Activity, 
  Zap, 
  Timer, 
  Cpu, 
  MemoryStick, 
  Gauge, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Monitor, 
  Smartphone, 
  Battery, 
  Wifi, 
  Download, 
  Upload, 
  RefreshCw, 
  Settings, 
  Target, 
  BarChart, 
  PieChart, 
  LineChart, 
  Eye, 
  Layers, 
  Box, 
  Database, 
  Server, 
  Cloud, 
  Code, 
  Package, 
  Shield, 
  Lock, 
  Key, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Camera, 
  Play, 
  Pause, 
  Square, 
  Circle, 
  Triangle, 
  Hexagon, 
  Pentagon, 
  Heart, 
  Brain, 
  Lightbulb, 
  Rocket, 
  Award, 
  Trophy, 
  Medal, 
  Crown, 
  Diamond, 
  Gem, 
  Star, 
  Archive, 
  FolderTree, 
  Link, 
  MoreHorizontal, 
  MoreVertical, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Send, 
  RotateCcw, 
  RotateCw, 
  Edit, 
  Power, 
  PowerOff, 
  Loader, 
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RuntimePerformancePatternProps {
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

const RuntimePerformancePatternCard: React.FC<RuntimePerformancePatternProps> = ({ 
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

interface RuntimeMetricProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  value: string;
  target: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  optimization: string[];
  impact: string;
}

const RuntimeMetric: React.FC<RuntimeMetricProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  value, 
  target, 
  frameworks,
  optimization,
  impact
}) => {
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
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Target: {target}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Support:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{frameworks.react.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{frameworks.angular.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{frameworks.vue.join(', ')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Optimization Techniques:</h4>
            <ul className="space-y-1">
              {optimization.map((opt, index) => (
                <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {opt}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-orange-600 dark:text-orange-400 mb-1">Impact:</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{impact}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RuntimePerformance: React.FC = () => {
  const runtimeMetrics = [
    {
      title: 'JavaScript Execution Time',
      description: 'Time taken to execute JavaScript code',
      icon: Cpu,
      color: 'bg-blue-500',
      value: '< 50ms',
      target: '< 50ms per frame',
      frameworks: {
        react: ['React.memo', 'useMemo', 'useCallback', 'Code splitting'],
        angular: ['OnPush strategy', 'Pure pipes', 'Change detection optimization', 'Lazy loading'],
        vue: ['Computed properties', 'v-memo', 'Keep-alive', 'Async components']
      },
      optimization: [
        'Minimize JavaScript execution time',
        'Use efficient algorithms and data structures',
        'Implement proper memoization',
        'Avoid unnecessary re-renders'
      ],
      impact: 'Critical for smooth animations and user interactions'
    },
    {
      title: 'Memory Usage',
      description: 'Amount of memory consumed by the application',
      icon: MemoryStick,
      color: 'bg-green-500',
      value: '< 50MB',
      target: '< 50MB for typical apps',
      frameworks: {
        react: ['Cleanup functions', 'WeakMap/WeakSet', 'Memory profiling', 'Component unmounting'],
        angular: ['Destroy lifecycle hooks', 'Memory leak detection', 'Service cleanup', 'Change detection optimization'],
        vue: ['BeforeDestroy hooks', 'Memory management', 'Component cleanup', 'Reactive system optimization']
      },
      optimization: [
        'Properly clean up event listeners and timers',
        'Use WeakMap/WeakSet for cached data',
        'Avoid memory leaks in closures',
        'Monitor memory usage regularly'
      ],
      impact: 'Affects application stability and performance over time'
    },
    {
      title: 'Frame Rate',
      description: 'Number of frames rendered per second',
      icon: Activity,
      color: 'bg-purple-500',
      value: '60 FPS',
      target: '60 FPS for smooth animations',
      frameworks: {
        react: ['React.startTransition', 'useDeferredValue', 'Concurrent features', 'Optimized rendering'],
        angular: ['Zone.js optimization', 'Change detection strategies', 'Animation performance', 'Render optimization'],
        vue: ['NextTick optimization', 'Async updates', 'Transition system', 'Render batching']
      },
      optimization: [
        'Use requestAnimationFrame for animations',
        'Optimize rendering cycles',
        'Implement proper loading states',
        'Use CSS transforms instead of layout changes'
      ],
      impact: 'Directly affects user experience and perceived performance'
    },
    {
      title: 'CPU Usage',
      description: 'Processor utilization during runtime',
      icon: Gauge,
      color: 'bg-orange-500',
      value: '< 30%',
      target: '< 30% during normal usage',
      frameworks: {
        react: ['Virtual scrolling', 'Lazy loading', 'Code splitting', 'Optimized re-renders'],
        angular: ['Ivy renderer', 'Differential loading', 'Tree shaking', 'Bundle optimization'],
        vue: ['Virtual DOM optimization', 'Template compilation', 'Reactive system', 'Async components']
      },
      optimization: [
        'Optimize expensive computations',
        'Use Web Workers for heavy tasks',
        'Implement proper caching strategies',
        'Minimize synchronous operations'
      ],
      impact: 'Affects battery life and overall system performance'
    },
    {
      title: 'Network Requests',
      description: 'Number and size of network requests',
      icon: Wifi,
      color: 'bg-red-500',
      value: '< 20',
      target: '< 20 requests per page',
      frameworks: {
        react: ['Apollo Client', 'React Query', 'SWR', 'Request batching'],
        angular: ['HTTP interceptors', 'Request caching', 'Lazy loading', 'Service workers'],
        vue: ['Vue Router', 'Axios integration', 'Request plugins', 'Data prefetching']
      },
      optimization: [
        'Implement request batching and caching',
        'Use service workers for offline support',
        'Optimize API response sizes',
        'Implement proper error handling'
      ],
      impact: 'Affects loading speed and data transfer costs'
    },
    {
      title: 'Battery Consumption',
      description: 'Power consumption during runtime',
      icon: Battery,
      color: 'bg-cyan-500',
      value: 'Low',
      target: 'Minimal battery drain',
      frameworks: {
        react: ['Efficient rendering', 'Background sync', 'Push notifications', 'Optimized updates'],
        angular: ['Efficient change detection', 'Background tasks', 'Service workers', 'Power optimization'],
        vue: ['Reactive system efficiency', 'Computed properties', 'Async operations', 'Power-aware features']
      },
      optimization: [
        'Optimize for battery life on mobile devices',
        'Use efficient algorithms and data structures',
        'Implement proper background processing',
        'Minimize unnecessary computations'
      ],
      impact: 'Critical for mobile user experience and device longevity'
    }
  ];

  const optimizationStrategies = [
    {
      title: 'Virtual Scrolling',
      description: 'Render only visible items in large lists',
      icon: Layers,
      color: 'bg-blue-500',
      frameworks: {
        react: ['react-window', 'react-virtualized', 'Custom implementations'],
        angular: ['Angular CDK Scrolling', 'ngx-virtual-scroller', 'Custom directives'],
        vue: ['vue-virtual-scroller', 'vue3-virtual-scroll-list', 'Composable functions']
      },
      benefits: ['Handles large datasets', 'Smooth scrolling', 'Memory efficiency'],
      useCases: ['Data tables', 'Chat lists', 'Image galleries', 'Feed components']
    },
    {
      title: 'Web Workers',
      description: 'Run JavaScript in background threads',
      icon: Cpu,
      color: 'bg-green-500',
      frameworks: {
        react: ['Workerize', 'Comlink', 'Custom worker implementations'],
        angular: ['Web Worker APIs', 'Angular Workers', 'Background processing'],
        vue: ['Vue Worker plugins', 'Custom workers', 'Background tasks']
      },
      benefits: ['Non-blocking operations', 'Better performance', 'Parallel processing'],
      useCases: ['Data processing', 'Image manipulation', 'Complex calculations', 'File operations']
    },
    {
      title: 'Memory Management',
      description: 'Optimize memory usage and prevent leaks',
      icon: MemoryStick,
      color: 'bg-purple-500',
      frameworks: {
        react: ['Cleanup functions', 'useEffect dependencies', 'Weak references'],
        angular: ['OnDestroy hooks', 'Memory profiling', 'Service cleanup'],
        vue: ['BeforeDestroy hooks', 'Memory management', 'Component cleanup']
      },
      benefits: ['Stable performance', 'Prevents crashes', 'Better user experience'],
      useCases: ['Large applications', 'Long-running sessions', 'Memory-intensive features']
    },
    {
      title: 'Request Optimization',
      description: 'Optimize network requests and data transfer',
      icon: Wifi,
      color: 'bg-orange-500',
      frameworks: {
        react: ['React Query', 'Apollo Client', 'SWR', 'Request batching'],
        angular: ['HTTP interceptors', 'Request caching', 'Service workers'],
        vue: ['Vue Router', 'Axios integration', 'Request plugins']
      },
      benefits: ['Faster loading', 'Reduced bandwidth', 'Better UX'],
      useCases: ['API calls', 'Data fetching', 'Real-time updates', 'Offline support']
    }
  ];

  const monitoringTools = [
    {
      name: 'Chrome DevTools Performance',
      description: 'Built-in browser performance profiling',
      icon: Monitor,
      features: ['CPU profiling', 'Memory analysis', 'Network inspection', 'Frame rate monitoring'],
      frameworks: ['All frameworks', 'Real-time debugging', 'Detailed metrics']
    },
    {
      name: 'Lighthouse',
      description: 'Automated performance auditing',
      icon: Award,
      features: ['Performance scoring', 'Runtime metrics', 'Optimization suggestions', 'Best practices'],
      frameworks: ['All frameworks', 'CI/CD integration', 'Performance monitoring']
    },
    {
      name: 'Web Vitals',
      description: 'Core web performance metrics',
      icon: Target,
      features: ['FID monitoring', 'CLS tracking', 'LCP measurement', 'User experience metrics'],
      frameworks: ['All frameworks', 'Real user monitoring', 'Performance tracking']
    },
    {
      name: 'Memory Profiler',
      description: 'Memory usage analysis and leak detection',
      icon: MemoryStick,
      features: ['Heap snapshots', 'Memory leak detection', 'Object tracking', 'Memory optimization'],
      frameworks: ['All frameworks', 'Memory analysis', 'Performance optimization']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Runtime Performance"
        description="Master runtime performance optimization techniques for smooth, efficient web applications across React, Angular, and Vue"
        icon={Activity}
        category="System Design.Performance"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Runtime Performance
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Runtime performance is crucial for user experience, application stability, and resource efficiency. 
                  Learn the key metrics and optimization strategies for modern web applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Runtime Performance Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Smooth user interactions and animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reduced battery consumption on mobile devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Better memory management and stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improved accessibility and user experience</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Runtime Performance Metrics
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>JavaScript Execution:</strong> Code processing time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Memory Usage:</strong> Resource consumption
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Frame Rate:</strong> Rendering performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>CPU Usage:</strong> Processor utilization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Runtime Metrics */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Timer className="w-6 h-6 text-blue-500" />
              Key Runtime Metrics
            </CardTitle>
            <CardDescription>
              Essential metrics to measure and optimize for better runtime performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {runtimeMetrics.map((metric, index) => (
                <RuntimeMetric 
                  key={index} 
                  {...metric} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Optimization Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Rocket className="w-6 h-6 text-green-500" />
              Runtime Optimization Strategies
            </CardTitle>
            <CardDescription>
              Proven techniques to improve runtime performance across frameworks
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {optimizationStrategies.map((strategy, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${strategy.color}`}>
                        <strategy.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {strategy.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {strategy.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Implementation:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{strategy.frameworks.react.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{strategy.frameworks.angular.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{strategy.frameworks.vue.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Benefits:</h4>
                          <ul className="space-y-1">
                            {strategy.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-blue-600 dark:text-blue-400 mb-1">Use Cases:</h4>
                          <ul className="space-y-1">
                            {strategy.useCases.map((useCase, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <Target className="w-3 h-3 text-blue-500" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart className="w-6 h-6 text-purple-500" />
              Runtime Performance Tools
            </CardTitle>
            <CardDescription>
              Essential tools for measuring, analyzing, and optimizing runtime performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringTools.map((tool, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <tool.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-1">Framework Support:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {tool.frameworks.join(' • ')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  Runtime Performance Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for optimal runtime performance
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Monitor runtime performance regularly with real user data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use memoization and caching to optimize expensive operations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper memory management and cleanup
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Optimize for 60 FPS animations and smooth interactions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use Web Workers for heavy computational tasks
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
                      Don't ignore memory leaks and cleanup operations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't block the main thread with heavy computations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't neglect mobile performance and battery usage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't skip performance testing and profiling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't overlook the impact of third-party scripts
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

export default RuntimePerformance;
