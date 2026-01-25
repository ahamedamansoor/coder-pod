'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Download, 
  Upload, 
  Timer, 
  TrendingUp, 
  Activity,
  Monitor, 
  Smartphone, 
  Globe, 
  Code, 
  Package, 
  Database, 
  Network, 
  Server, 
  Cloud, 
  Cpu, 
  HardDrive, 
  Battery, 
  Wifi, 
  RefreshCw, 
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
  Zap, 
  Eye, 
  EyeOff, 
  Layers, 
  Box, 
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
  Shield, 
  Lock, 
  Unlock, 
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
  Octagon, 
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
  RotateCcw, 
  RotateCw, 
  Edit, 
  Power, 
  PowerOff
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingPerformancePatternProps {
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

const LoadingPerformancePatternCard: React.FC<LoadingPerformancePatternProps> = ({ 
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

interface LoadingMetricProps {
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

const LoadingMetric: React.FC<LoadingMetricProps> = ({ 
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
    <Card className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
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

const LoadingPerformance: React.FC = () => {

  const loadingMetrics = [
    {
      title: 'Time to First Byte (TTFB)',
      description: 'Time from request to first byte of response',
      icon: Download,
      color: 'bg-blue-500',
      value: '< 200ms',
      target: '< 200ms',
      frameworks: {
        react: ['Server-side rendering', 'Static generation', 'CDN deployment'],
        angular: ['Angular Universal', 'Static site generation', 'Edge caching'],
        vue: ['Nuxt.js SSR', 'Static generation', 'Jamstack deployment']
      },
      optimization: [
        'Use fast hosting and CDN',
        'Enable server-side caching',
        'Optimize database queries',
        'Use HTTP/2 or HTTP/3'
      ],
      impact: 'Critical for initial loading perception and SEO rankings'
    },
    {
      title: 'First Contentful Paint (FCP)',
      description: 'Time when first content is rendered on screen',
      icon: Eye,
      color: 'bg-green-500',
      value: '< 1.8s',
      target: '< 1.8s',
      frameworks: {
        react: ['React.lazy', 'Suspense', 'Critical CSS inlining'],
        angular: ['Lazy loading', 'Preloading strategies', 'Critical CSS'],
        vue: ['Async components', 'Critical CSS', 'Lazy loading']
      },
      optimization: [
        'Minimize render-blocking resources',
        'Optimize critical rendering path',
        'Use resource hints (preload, prefetch)',
        'Implement server-side rendering'
      ],
      impact: 'Directly affects user engagement and bounce rates'
    },
    {
      title: 'Largest Contentful Paint (LCP)',
      description: 'Time when largest content element is fully rendered',
      icon: Monitor,
      color: 'bg-purple-500',
      value: '< 2.5s',
      target: '< 2.5s',
      frameworks: {
        react: ['Image optimization', 'Priority hints', 'Component lazy loading'],
        angular: ['Image optimization', 'CDN integration', 'Resource prioritization'],
        vue: ['Image optimization', 'Lazy loading', 'Resource hints']
      },
      optimization: [
        'Optimize images (WebP, responsive images)',
        'Remove render-blocking JavaScript',
        'Use efficient caching strategies',
        'Implement critical CSS'
      ],
      impact: 'Key metric for user experience and Core Web Vitals'
    },
    {
      title: 'Speed Index',
      description: 'Average time at which visible parts of page are displayed',
      icon: Activity,
      color: 'bg-orange-500',
      value: '< 3.4s',
      target: '< 3.4s',
      frameworks: {
        react: ['Progressive loading', 'Skeleton screens', 'Optimized bundles'],
        angular: ['Progressive rendering', 'Angular CDK', 'Bundle optimization'],
        vue: ['Progressive enhancement', 'Vue transitions', 'Optimized builds']
      },
      optimization: [
        'Implement progressive loading',
        'Use skeleton screens for perceived performance',
        'Optimize above-the-fold content',
        'Minimize layout shifts'
      ],
      impact: 'Measures perceived loading performance and user satisfaction'
    },
    {
      title: 'Time to Interactive (TTI)',
      description: 'Time when page becomes fully interactive',
      icon: Zap,
      color: 'bg-red-500',
      value: '< 3.8s',
      target: '< 3.8s',
      frameworks: {
        react: ['Code splitting', 'Tree shaking', 'React.memo'],
        angular: ['Ivy renderer', 'Lazy loading', 'Differential loading'],
        vue: ['Tree shaking', 'Async components', 'Computed properties']
      },
      optimization: [
        'Reduce JavaScript execution time',
        'Minimize main thread work',
        'Use Web Workers for heavy tasks',
        'Optimize third-party scripts'
      ],
      impact: 'Critical for user interaction and conversion rates'
    },
    {
      title: 'Cumulative Layout Shift (CLS)',
      description: 'Measure of visual stability during loading',
      icon: Layers,
      color: 'bg-cyan-500',
      value: '< 0.1',
      target: '< 0.1',
      frameworks: {
        react: ['Skeleton screens', 'React.Suspense', 'Layout components'],
        angular: ['Angular CDK', 'Skeleton loaders', 'TrackBy function'],
        vue: ['Vue transitions', 'Skeleton components', 'Keep-alive']
      },
      optimization: [
        'Include size attributes for images',
        'Reserve space for dynamic content',
        'Avoid inserting content above existing content',
        'Use transform animations instead of layout changes'
      ],
      impact: 'Affects user experience and can frustrate users with unexpected shifts'
    }
  ];

  const loadingStrategies = [
    {
      title: 'Lazy Loading',
      description: 'Load resources only when needed',
      icon: Loader,
      color: 'bg-blue-500',
      frameworks: {
        react: ['React.lazy()', 'Suspense', 'Intersection Observer'],
        angular: ['Lazy loading modules', 'Preloading strategies', 'LoadChildren'],
        vue: ['Async components', 'Dynamic imports', 'defineAsyncComponent']
      },
      benefits: ['Faster initial load', 'Reduced bandwidth', 'Better perceived performance'],
      useCases: ['Images below fold', 'Route components', 'Heavy components']
    },
    {
      title: 'Preloading',
      description: 'Load critical resources early',
      icon: Download,
      color: 'bg-green-500',
      frameworks: {
        react: ['Preload critical components', 'Prefetch next routes', 'Resource hints'],
        angular: ['Preload modules', 'Prefetch data', 'Preloading strategies'],
        vue: ['Prefetch components', 'Preload data', 'Resource hints']
      },
      benefits: ['Faster navigation', 'Better user experience', 'Reduced latency'],
      useCases: ['Critical CSS', 'Above-fold images', 'Next page resources']
    },
    {
      title: 'Code Splitting',
      description: 'Break code into smaller chunks',
      icon: Package,
      color: 'bg-purple-500',
      frameworks: {
        react: ['React.lazy()', 'Dynamic imports', 'Route-based splitting'],
        angular: ['Lazy loading', 'Module splitting', 'Differential loading'],
        vue: ['Async components', 'Dynamic imports', 'Route splitting']
      },
      benefits: ['Smaller initial bundles', 'Better caching', 'Parallel loading'],
      useCases: ['Route components', 'Large libraries', 'Feature modules']
    },
    {
      title: 'Resource Optimization',
      description: 'Optimize assets for faster loading',
      icon: Image,
      color: 'bg-orange-500',
      frameworks: {
        react: ['Image optimization', 'Asset bundling', 'CDN integration'],
        angular: ['Asset optimization', 'Build optimization', 'CDN usage'],
        vue: ['Image optimization', 'Build tools', 'Asset management']
      },
      benefits: ['Smaller file sizes', 'Faster downloads', 'Better compression'],
      useCases: ['Images', 'Videos', 'Font files', 'Static assets']
    }
  ];

  const loadingTools = [
    {
      name: 'Lighthouse',
      description: 'Automated loading performance auditing',
      icon: Award,
      features: ['Performance scoring', 'Loading metrics', 'Optimization suggestions', 'Core Web Vitals'],
      frameworks: ['All frameworks', 'Chrome DevTools', 'CI/CD integration']
    },
    {
      name: 'WebPageTest',
      description: 'Comprehensive loading performance testing',
      icon: BarChart,
      features: ['Real device testing', 'Network throttling', 'Filmstrip view', 'Waterfall charts'],
      frameworks: ['All frameworks', 'Multiple locations', 'Mobile testing']
    },
    {
      name: 'Chrome DevTools',
      description: 'Built-in browser loading analysis',
      icon: Monitor,
      features: ['Network analysis', 'Performance profiling', 'Coverage analysis', 'Resource timing'],
      frameworks: ['All frameworks', 'Real-time debugging', 'Source maps']
    },
    {
      name: 'Bundle Analyzer',
      description: 'Analyze bundle composition and size',
      icon: PieChart,
      features: ['Bundle size analysis', 'Dependency visualization', 'Optimization suggestions'],
      frameworks: ['React (webpack-bundle-analyzer)', 'Angular (webpack-bundle-analyzer)', 'Vue (vue-cli-service build --report)']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Loading Performance"
        description="Master loading optimization techniques for faster web applications across React, Angular, and Vue"
        icon={Download}
        category="System Design.Performance"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Loading Performance
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Loading performance is crucial for user experience, SEO, and conversion rates. 
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
                  Why Loading Performance Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">53% of users abandon sites that take &gt;3 seconds to load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">1-second delay reduces conversion by 7%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Core Web Vitals impact Google rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Better performance improves user engagement</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Loading Performance Metrics
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>TTFB:</strong> Server response time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>FCP:</strong> First content appearance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>LCP:</strong> Largest content render
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>TTI:</strong> Full interactivity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Metrics */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Timer className="w-6 h-6 text-blue-500" />
              Key Loading Metrics
            </CardTitle>
            <CardDescription>
              Essential metrics to measure and optimize for better loading performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loadingMetrics.map((metric, index) => (
                <LoadingMetric 
                  key={index} 
                  {...metric} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Loading Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Rocket className="w-6 h-6 text-green-500" />
              Loading Optimization Strategies
            </CardTitle>
            <CardDescription>
              Proven techniques to improve loading performance across frameworks
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loadingStrategies.map((strategy, index) => (
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

        {/* Loading Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart className="w-6 h-6 text-purple-500" />
              Loading Performance Tools
            </CardTitle>
            <CardDescription>
              Essential tools for measuring, analyzing, and optimizing loading performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loadingTools.map((tool, index) => (
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
                  Loading Performance Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for optimal loading performance
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
                      Optimize critical rendering path and prioritize above-the-fold content
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use modern image formats (WebP, AVIF) and responsive images
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement lazy loading and code splitting for better initial load
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use CDN and caching strategies for static assets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Monitor loading performance regularly with real user data
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
                      Don't load large images without optimization or lazy loading
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't use render-blocking JavaScript or CSS in the head
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore Core Web Vitals and loading metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't neglect mobile performance and network conditions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget to optimize third-party scripts and fonts
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

export default LoadingPerformance;
