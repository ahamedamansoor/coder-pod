'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Zap, 
  Gauge, 
  Timer, 
  Activity, 
  TrendingUp, 
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
  Download, 
  Upload, 
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
  Zap as ZapIcon, 
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
  Cpu as CpuIcon, 
  Server as ServerIcon, 
  Cloud as CloudIcon, 
  Wifi as WifiIcon, 
  Battery as BatteryIcon, 
  Download as DownloadIcon, 
  Upload as UploadIcon, 
  RefreshCw as RefreshCwIcon, 
  Settings as SettingsIcon, 
  Target as TargetIcon, 
  CheckCircle as CheckCircleIcon, 
  AlertCircle as AlertCircleIcon, 
  Info as InfoIcon, 
  Lightbulb as LightbulbIcon, 
  Rocket as RocketIcon, 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon, 
  LineChart as LineChartIcon, 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon, 
  Layers as LayersIcon, 
  Box as BoxIcon, 
  Archive as ArchiveIcon, 
  FolderTree as FolderTreeIcon, 
  Link as LinkIcon, 
  Star as StarIcon, 
  Award as AwardIcon, 
  Trophy as TrophyIcon, 
  Medal as MedalIcon, 
  Crown as CrownIcon, 
  Diamond as DiamondIcon, 
  Gem as GemIcon, 
  Shield as ShieldIcon, 
  Lock as LockIcon, 
  Unlock as UnlockIcon, 
  Key as KeyIcon, 
  FileText as FileTextIcon, 
  Image as ImageIcon, 
  Video as VideoIcon, 
  Music as MusicIcon, 
  Camera as CameraIcon, 
  Play as PlayIcon, 
  Pause as PauseIcon, 
  Square as SquareIcon, 
  Circle as CircleIcon, 
  Triangle as TriangleIcon, 
  Hexagon as HexagonIcon, 
  Octagon as OctagonIcon, 
  Pentagon as PentagonIcon, 
  Heart as HeartIcon, 
  Activity as PulseIcon, 
  Brain as BrainIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PerformancePatternProps {
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

const PerformancePatternCard: React.FC<PerformancePatternProps> = ({ 
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

interface PerformanceMetricProps {
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
}

const PerformanceMetric: React.FC<PerformanceMetricProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  value, 
  target, 
  frameworks,
  optimization
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
          </div>
        </CardContent>
    </Card>
  );
};

const PerformanceFundamentals: React.FC = () => {

  const performanceMetrics = [
    {
      title: 'First Contentful Paint (FCP)',
      description: 'Time when first content is rendered',
      icon: Eye,
      color: 'bg-blue-500',
      value: '< 1.8s',
      target: '< 1.8s',
      frameworks: {
        react: ['React.lazy', 'Suspense', 'Code splitting'],
        angular: ['Lazy loading', 'Preloading strategies', 'Ahead-of-Time compilation'],
        vue: ['Async components', 'Dynamic imports', 'Vue Router lazy loading']
      },
      optimization: [
        'Minimize render-blocking resources',
        'Optimize critical rendering path',
        'Use resource hints (preload, prefetch)',
        'Implement server-side rendering'
      ]
    },
    {
      title: 'Largest Contentful Paint (LCP)',
      description: 'Time when largest content element is rendered',
      icon: Monitor,
      color: 'bg-green-500',
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
      ]
    },
    {
      title: 'Time to Interactive (TTI)',
      description: 'Time when page becomes fully interactive',
      icon: Zap,
      color: 'bg-purple-500',
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
      ]
    },
    {
      title: 'Cumulative Layout Shift (CLS)',
      description: 'Measure of visual stability',
      icon: Layers,
      color: 'bg-orange-500',
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
      ]
    },
    {
      title: 'First Input Delay (FID)',
      description: 'Time from first user interaction to response',
      icon: Activity,
      color: 'bg-red-500',
      value: '< 100ms',
      target: '< 100ms',
      frameworks: {
        react: ['React.startTransition', 'useDeferredValue', 'Event delegation'],
        angular: ['Zone.js optimization', 'Change detection strategies', 'OnPush change detection'],
        vue: ['Vue.nextTick', 'Computed properties', 'Event modifiers']
      },
      optimization: [
        'Break up long tasks',
        'Use web workers for JavaScript',
        'Minimize JavaScript execution time',
        'Optimize event listeners'
      ]
    },
    {
      title: 'Bundle Size',
      description: 'Total size of JavaScript bundles',
      icon: Package,
      color: 'bg-cyan-500',
      value: '< 250KB',
      target: '< 250KB gzipped',
      frameworks: {
        react: ['Code splitting', 'Tree shaking', 'Dynamic imports'],
        angular: ['Ivy compiler', 'Tree shaking', 'Differential loading'],
        vue: ['Tree shaking', 'Rollup optimization', 'External libraries']
      },
      optimization: [
        'Remove unused code and dependencies',
        'Use code splitting and lazy loading',
        'Optimize images and assets',
        'Enable compression (gzip, Brotli)'
      ]
    }
  ];

  const optimizationStrategies = [
    {
      title: 'Code Splitting',
      description: 'Break code into smaller chunks for better loading',
      icon: Box,
      color: 'bg-blue-500',
      frameworks: {
        react: ['React.lazy()', 'Suspense', 'Dynamic import()'],
        angular: ['Lazy loading modules', 'Preloading strategies', 'LoadChildren'],
        vue: ['Async components', 'Dynamic imports', 'defineAsyncComponent']
      },
      benefits: ['Faster initial load', 'Better caching', 'Reduced memory usage']
    },
    {
      title: 'Tree Shaking',
      description: 'Remove unused code from bundles',
      icon: Package,
      color: 'bg-green-500',
      frameworks: {
        react: ['ES6 modules', 'Webpack optimization', 'Side effects: false'],
        angular: ['Ivy compiler', 'ES6 modules', 'Import optimization'],
        vue: ['ES6 modules', 'Rollup', 'Import statements']
      },
      benefits: ['Smaller bundles', 'Faster downloads', 'Better performance']
    },
    {
      title: 'Memoization',
      description: 'Cache expensive computations and renders',
      icon: Cpu,
      color: 'bg-purple-500',
      frameworks: {
        react: ['React.memo', 'useMemo', 'useCallback'],
        angular: ['OnPush strategy', 'Pure pipes', 'Change detection optimization'],
        vue: ['Computed properties', 'v-memo', 'Keep-alive']
      },
      benefits: ['Fewer re-renders', 'Faster updates', 'Better user experience']
    },
    {
      title: 'Virtual Scrolling',
      description: 'Render only visible items in large lists',
      icon: Layers,
      color: 'bg-orange-500',
      frameworks: {
        react: ['react-window', 'react-virtualized', 'Custom implementations'],
        angular: ['Angular CDK Scrolling', 'ngx-virtual-scroller', 'Custom directives'],
        vue: ['vue-virtual-scroller', 'vue3-virtual-scroll-list', 'Composable functions']
      },
      benefits: ['Handles large datasets', 'Smooth scrolling', 'Memory efficiency']
    }
  ];

  const performanceTools = [
    {
      name: 'Lighthouse',
      description: 'Automated web performance auditing',
      icon: Award,
      features: ['Performance scoring', 'Accessibility audit', 'Best practices', 'SEO analysis'],
      frameworks: ['All frameworks', 'Chrome DevTools', 'CI/CD integration']
    },
    {
      name: 'WebPageTest',
      description: 'Comprehensive performance testing',
      icon: BarChart,
      features: ['Real device testing', 'Network throttling', 'Filmstrip view', 'Waterfall charts'],
      frameworks: ['All frameworks', 'Multiple locations', 'Mobile testing']
    },
    {
      name: 'Chrome DevTools',
      description: 'Built-in browser performance tools',
      icon: Monitor,
      features: ['Performance profiling', 'Memory analysis', 'Network inspection', 'Coverage analysis'],
      frameworks: ['All frameworks', 'Real-time debugging', 'Source maps']
    },
    {
      name: 'Bundle Analyzer',
      description: 'Visualize bundle composition',
      icon: PieChart,
      features: ['Bundle size analysis', 'Dependency visualization', 'Optimization suggestions'],
      frameworks: ['React (webpack-bundle-analyzer)', 'Angular (webpack-bundle-analyzer)', 'Vue (vue-cli-service build --report)']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Performance Fundamentals"
        description="Master performance optimization techniques for React, Angular, and Vue applications"
        icon={Zap}
        category="System Design.Performance"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Web Performance
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Performance is crucial for user experience, SEO, and conversion rates. 
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
                  Why Performance Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Better user experience and engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improved SEO rankings and visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Higher conversion rates and revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reduced bounce rates and better retention</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Core Web Vitals
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>LCP:</strong> Loading performance - largest content paint
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>FID:</strong> Interactivity - first input delay
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>CLS:</strong> Visual stability - cumulative layout shift
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>FCP/TTI:</strong> Loading and interactivity metrics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gauge className="w-6 h-6 text-blue-500" />
              Key Performance Metrics
            </CardTitle>
            <CardDescription>
              Essential metrics to measure and optimize for better user experience
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceMetrics.map((metric, index) => (
                <PerformanceMetric 
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
              Optimization Strategies
            </CardTitle>
            <CardDescription>
              Proven techniques to improve application performance across frameworks
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart className="w-6 h-6 text-purple-500" />
              Performance Tools
            </CardTitle>
            <CardDescription>
              Essential tools for measuring, analyzing, and optimizing performance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceTools.map((tool, index) => (
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
                  Performance Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for maintaining optimal performance
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
                      Measure performance regularly with real user monitoring
                    </span>
                  </li>
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
                      Implement code splitting and lazy loading for better initial load
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use caching strategies and service workers for offline functionality
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
                      Don't ignore Core Web Vitals and user experience metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't load large libraries without tree shaking or code splitting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't use blocking scripts that delay page rendering
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
                      Don't forget to monitor performance in production regularly
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

export default PerformanceFundamentals;
