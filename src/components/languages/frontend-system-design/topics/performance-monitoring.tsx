'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Activity, 
  Monitor, 
  Smartphone, 
  Battery, 
  Wifi, 
  Settings, 
  Target, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Lightbulb, 
  Rocket, 
  BarChart, 
  PieChart, 
  LineChart, 
  Eye, 
  Layers, 
  Box, 
  Package, 
  Server, 
  Code, 
  Archive, 
  FolderTree, 
  Link, 
  Star, 
  Award, 
  Trophy, 
  Medal, 
  Crown, 
  Diamond, 
  Gem, 
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
  Loader, 
  Loader2, 
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
  Download, 
  RotateCcw, 
  RotateCw, 
  Edit, 
  Power, 
  PowerOff, 
  Cpu, 
  MemoryStick, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Network, 
  Users, 
  Clock, 
  Calendar, 
  MapPin, 
  Navigation, 
  Compass, 
  Anchor, 
  Flag, 
  Bookmark, 
  Filter, 
  Search, 
  Bell, 
  MessageSquare, 
  Mail, 
  Phone, 
  VideoIcon, 
  Mic, 
  MicOff, 
  VideoOff, 
  Maximize, 
  Minimize, 
  Move, 
  Expand, 
  Shrink, 
  Fullscreen, 
  Home, 
  List, 
  Layout, 
  Columns, 
  Rows, 
  Sidebar, 
  PanelLeft, 
  PanelRight, 
  PanelTop, 
  PanelBottom, 
  Grid, 
  AlignLeft, 
  AlignRight, 
  AlignCenter, 
  AlignJustify, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  Code2, 
  Quote, 
  Heading1, 
  Heading2, 
  Heading3, 
  Heading4, 
  Heading5, 
  Heading6, 
  Undo, 
  Redo, 
  Scissors, 
  Copy, 
  Clipboard, 
  Save, 
  DownloadCloud, 
  UploadCloud, 
  CloudOff, 
  CloudRain, 
  CloudSnow, 
  CloudDrizzle, 
  CloudLightning, 
  Sun, 
  Moon, 
  StarHalf, 
  StarOff, 
  ZapOff, 
  Flame, 
  Droplet, 
  Wind, 
  Thermometer, 
  Gauge, 
  Zap, 
  Fuel,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PerformanceMonitoringPatternProps {
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

const PerformanceMonitoringPatternCard: React.FC<PerformanceMonitoringPatternProps> = ({ 
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

interface PerformanceMonitoringProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  type: string;
  complexity: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  metrics: string[];
  benefits: string[];
  challenges: string[];
}

const PerformanceMonitoringCard: React.FC<PerformanceMonitoringProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  type, 
  complexity, 
  frameworks,
  metrics,
  benefits,
  challenges
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
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{type}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{complexity}</div>
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
            <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-1">Key Metrics:</h4>
            <ul className="space-y-1">
              {metrics.slice(0, 3).map((metric, index) => (
                <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <Activity className="w-3 h-3 text-purple-500" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Benefits:</h4>
            <ul className="space-y-1">
              {benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-orange-600 dark:text-orange-400 mb-1">Challenges:</h4>
            <ul className="space-y-1">
              {challenges.slice(0, 2).map((challenge, index) => (
                <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <AlertCircle className="w-3 h-3 text-orange-500" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PerformanceMonitoring: React.FC = () => {
  const monitoringTools = [
    {
      title: 'Chrome DevTools',
      description: 'Built-in browser tools for performance analysis',
      icon: Monitor,
      color: 'bg-blue-500',
      type: 'Browser Tools',
      complexity: 'Beginner',
      frameworks: {
        react: ['React DevTools', 'Performance Tab', 'Memory Tab', 'Network Tab'],
        angular: ['Angular DevTools', 'Performance Tab', 'Profiler', 'Network Tab'],
        vue: ['Vue DevTools', 'Performance Tab', 'Timeline', 'Network Tab']
      },
      metrics: ['Load Time', 'Memory Usage', 'Network Requests', 'Rendering Performance'],
      benefits: [
        'Free and built-in',
        'Real-time monitoring',
        'Detailed insights',
        'Cross-browser support'
      ],
      challenges: [
        'Limited to browser context',
        'Learning curve for advanced features',
        'Cannot monitor production',
        'Manual analysis required'
      ]
    },
    {
      title: 'Lighthouse',
      description: 'Automated tool for improving web page quality',
      icon: Award,
      color: 'bg-green-500',
      type: 'Auditing Tool',
      complexity: 'Intermediate',
      frameworks: {
        react: ['Performance Audits', 'SEO Analysis', 'Best Practices', 'Accessibility'],
        angular: ['Performance Audits', 'SEO Analysis', 'Best Practices', 'PWA Analysis'],
        vue: ['Performance Audits', 'SEO Analysis', 'Best Practices', 'Build Analysis']
      },
      metrics: ['Performance Score', 'Accessibility Score', 'Best Practices', 'SEO Score'],
      benefits: [
        'Comprehensive audits',
        'Actionable recommendations',
        'Performance scoring',
        'Industry standards'
      ],
      challenges: [
        'Lab environment only',
        'May not reflect real-world',
        'Limited to page load',
        'Requires regular runs'
      ]
    },
    {
      title: 'Web Vitals',
      description: 'Essential metrics for user experience',
      icon: Target,
      color: 'bg-purple-500',
      type: 'Core Metrics',
      complexity: 'Beginner',
      frameworks: {
        react: ['React Vitals', 'useWebVitals', 'Performance Observer', 'Custom Hooks'],
        angular: ['Angular Vitals', 'Performance Observer', 'RxJS Monitoring', 'Directives'],
        vue: ['Vue Vitals', 'Performance Observer', 'Composition API', 'Custom Plugins']
      },
      metrics: ['LCP (Largest Contentful Paint)', 'FID (First Input Delay)', 'CLS (Cumulative Layout Shift)', 'FCP (First Contentful Paint)'],
      benefits: [
        'User-focused metrics',
        'Google ranking factor',
        'Real-user measurement',
        'Industry standard'
      ],
      challenges: [
        'Limited metrics scope',
        'Requires proper implementation',
        'Browser compatibility',
        'Interpretation complexity'
      ]
    },
    {
      title: 'React DevTools Profiler',
      description: 'React-specific performance profiling tool',
      icon: Brain,
      color: 'bg-cyan-500',
      type: 'Framework Tool',
      complexity: 'Intermediate',
      frameworks: {
        react: ['Profiler API', 'useMemo', 'useCallback', 'React.memo'],
        angular: ['Angular Profiler', 'Change Detection', 'OnPush Strategy', 'TrackBy'],
        vue: ['Vue DevTools Profiler', 'Reactivity System', 'Computed Properties', 'Watchers']
      },
      metrics: ['Render Time', 'Component Updates', 'Re-renders', 'Memory Usage'],
      benefits: [
        'Framework-specific insights',
        'Component-level analysis',
        'Render optimization',
        'Detailed profiling'
      ],
      challenges: [
        'Framework-specific',
        'Development only',
        'Limited to components',
        'Requires setup'
      ]
    },
    {
      title: 'Performance Observer API',
      description: 'Web API for monitoring performance metrics',
      icon: Activity,
      color: 'bg-orange-500',
      type: 'Web API',
      complexity: 'Advanced',
      frameworks: {
        react: ['Custom Hooks', 'Performance Observer', 'useEffect', 'Event Listeners'],
        angular: ['Services', 'Performance Observer', 'RxJS', 'Lifecycle Hooks'],
        vue: ['Composition API', 'Performance Observer', 'Watchers', 'Plugins']
      },
      metrics: ['Navigation Timing', 'Resource Timing', 'Paint Timing', 'User Timing'],
      benefits: [
        'Custom monitoring',
        'Real-time data',
        'Comprehensive metrics',
        'Programmatic control'
      ],
      challenges: [
        'Complex implementation',
        'Browser compatibility',
        'Data interpretation',
        'Performance overhead'
      ]
    },
    {
      title: 'Sentry',
      description: 'Error and performance monitoring platform',
      icon: Shield,
      color: 'bg-red-500',
      type: 'Monitoring Service',
      complexity: 'Intermediate',
      frameworks: {
        react: ['React SDK', 'Error Boundaries', 'Performance Monitoring', 'User Feedback'],
        angular: ['Angular SDK', 'Error Handling', 'Performance Monitoring', 'Tracing'],
        vue: ['Vue SDK', 'Error Handling', 'Performance Monitoring', 'User Sessions']
      },
      metrics: ['Error Rates', 'Performance Scores', 'User Sessions', 'Release Health'],
      benefits: [
        'Production monitoring',
        'Error tracking',
        'User context',
        'Alerting system'
      ],
      challenges: [
        'Cost consideration',
        'Setup complexity',
        'Data privacy',
        'Vendor lock-in'
      ]
    }
  ];

  const monitoringMetrics = [
    {
      title: 'Core Web Vitals',
      description: 'Essential user experience metrics',
      icon: Target,
      color: 'bg-blue-500',
      frameworks: {
        react: ['useWebVitals', 'Performance Observer', 'Custom Hooks', 'Third-party Libraries'],
        angular: ['Performance Observer', 'Services', 'RxJS', 'Directives'],
        vue: ['Performance Observer', 'Composition API', 'Plugins', 'Third-party Libraries']
      },
      metrics: ['LCP', 'FID', 'CLS', 'FCP'],
      implementation: 'Measure user experience quality and Google ranking factors',
      bestPractices: ['Optimize images', 'Reduce JavaScript', 'Improve server response', 'Eliminate layout shifts']
    },
    {
      title: 'Runtime Performance',
      description: 'Application execution performance',
      icon: Cpu,
      color: 'bg-green-500',
      frameworks: {
        react: ['Profiler API', 'useMemo', 'useCallback', 'React.memo'],
        angular: ['Change Detection', 'OnPush', 'TrackBy', 'Lazy Loading'],
        vue: ['Reactivity System', 'Computed Properties', 'Watchers', 'Lazy Loading']
      },
      metrics: ['Frame Rate', 'JavaScript Execution Time', 'Memory Usage', 'CPU Usage'],
      implementation: 'Monitor application responsiveness and resource utilization',
      bestPractices: ['Optimize renders', 'Reduce bundle size', 'Use lazy loading', 'Implement virtualization']
    },
    {
      title: 'Network Performance',
      description: 'Network request and response monitoring',
      icon: Network,
      color: 'bg-purple-500',
      frameworks: {
        react: ['React Query', 'SWR', 'Axios Interceptors', 'Service Workers'],
        angular: ['HTTP Interceptors', 'RxJS', 'HTTP Cache', 'Service Workers'],
        vue: ['Axios', 'Vue Query', 'Pinia', 'Service Workers']
      },
      metrics: ['Request Time', 'Response Size', 'Cache Hit Rate', 'Error Rate'],
      implementation: 'Track API performance and optimize data fetching',
      bestPractices: ['Implement caching', 'Use compression', 'Optimize API calls', 'Monitor errors']
    },
    {
      title: 'User Experience Metrics',
      description: 'User interaction and engagement metrics',
      icon: Users,
      color: 'bg-orange-500',
      frameworks: {
        react: ['Analytics Libraries', 'Event Tracking', 'Custom Hooks', 'A/B Testing'],
        angular: ['Analytics Services', 'Event Tracking', 'Directives', 'A/B Testing'],
        vue: ['Analytics Plugins', 'Event Tracking', 'Composition API', 'A/B Testing']
      },
      metrics: ['Page Views', 'Bounce Rate', 'Session Duration', 'Conversion Rate'],
      implementation: 'Measure user engagement and business metrics',
      bestPractices: ['Track key actions', 'Monitor user flows', 'Analyze drop-off points', 'Optimize conversion']
    }
  ];

  const monitoringToolsList = [
    {
      name: 'Google Analytics',
      description: 'Web analytics service for tracking user behavior',
      icon: BarChart,
      features: ['User tracking', 'Page views', 'Conversion tracking', 'Custom events'],
      frameworks: ['All frameworks', 'Easy integration', 'Real-time data', 'Free tier available']
    },
    {
      name: 'New Relic',
      description: 'Full-stack performance monitoring platform',
      icon: Activity,
      features: ['APM', 'Infrastructure monitoring', 'Digital experience', 'Log management'],
      frameworks: ['All frameworks', 'End-to-end visibility', 'AI-powered insights', 'Custom dashboards']
    },
    {
      name: 'Datadog',
      description: 'Cloud-scale monitoring and analytics platform',
      icon: Monitor,
      features: ['APM', 'Infrastructure', 'Logs', 'Security monitoring'],
      frameworks: ['All frameworks', 'Real-time monitoring', 'Machine learning', 'Custom metrics']
    },
    {
      name: 'LogRocket',
      description: 'Frontend error and session replay tool',
      icon: Video,
      features: ['Session replay', 'Error tracking', 'Performance monitoring', 'User feedback'],
      frameworks: ['React', 'Angular', 'Vue', 'JavaScript applications']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Performance Monitoring"
        description="Master performance monitoring techniques and tools for building high-performance, observable web applications across React, Angular, and Vue"
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
                  Understanding Performance Monitoring
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Performance monitoring is crucial for maintaining optimal user experience, identifying bottlenecks, 
                  and ensuring applications meet performance standards. Learn the key tools, metrics, and strategies 
                  for effective performance monitoring.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Performance Monitoring Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Identify performance bottlenecks before users notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Monitor user experience and satisfaction metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Optimize resource usage and reduce costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Maintain competitive advantage with fast applications</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Key Monitoring Areas
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Core Web Vitals:</strong> User experience metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Runtime Performance:</strong> Application execution metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Network Performance:</strong> API and resource loading
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>User Experience:</strong> Engagement and interaction metrics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Monitor className="w-6 h-6 text-blue-500" />
              Performance Monitoring Tools
            </CardTitle>
            <CardDescription>
              Essential tools and platforms for monitoring application performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringTools.map((tool, index) => (
                <PerformanceMonitoringCard 
                  key={index} 
                  {...tool} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Metrics */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart className="w-6 h-6 text-green-500" />
              Key Performance Metrics
            </CardTitle>
            <CardDescription>
              Essential metrics to monitor for optimal application performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringMetrics.map((metric, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${metric.color}`}>
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {metric.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {metric.description}
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
                            <span className="text-xs text-slate-600 dark:text-slate-400">{metric.frameworks.react.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{metric.frameworks.angular.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{metric.frameworks.vue.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-1">Key Metrics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {metric.metrics.map((m, i) => (
                            <span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded text-xs">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-blue-600 dark:text-blue-400 mb-1">Implementation:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {metric.implementation}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Best Practices:</h4>
                        <ul className="space-y-1">
                          {metric.bestPractices.map((practice, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Platforms */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Server className="w-6 h-6 text-purple-500" />
              Monitoring Platforms & Services
            </CardTitle>
            <CardDescription>
              Professional monitoring services for production applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringToolsList.map((platform, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <platform.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {platform.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {platform.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {platform.features.map((feature, i) => (
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
                          {platform.frameworks.join(' • ')}
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
                  Performance Monitoring Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing effective performance monitoring strategies
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
                      Monitor Core Web Vitals for user experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Set up real-user monitoring (RUM) in production
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Establish performance budgets and alerts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use synthetic monitoring for proactive detection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Correlate performance with business metrics
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
                      Don't ignore performance regressions in deployments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't rely solely on lab environment metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't monitor too many metrics without context
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget to monitor third-party dependencies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't neglect mobile performance monitoring
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

export default PerformanceMonitoring;
