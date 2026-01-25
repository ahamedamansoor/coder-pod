'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, 
  HardDrive, 
  Cloud, 
  Shield, 
 
  Timer, 
 
  RefreshCw, 
 
  Upload, 
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
 
  Square, 
  Circle, 
  Triangle, 
  Hexagon, 
  Pentagon, 
  Heart,
  Activity, 
 
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
 
 
 
  Fuel
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CachingStrategyPatternProps {
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

const CachingStrategyPatternCard: React.FC<CachingStrategyPatternProps> = ({ 
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

interface CachingStrategyProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  type: string;
  duration: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  benefits: string[];
  challenges: string[];
}

const CachingStrategyCard: React.FC<CachingStrategyProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  type, 
  duration, 
  frameworks,
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
            <div className="text-xs text-slate-500 dark:text-slate-400">{duration}</div>
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
            <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Benefits:</h4>
            <ul className="space-y-1">
              {benefits.slice(0, 3).map((benefit, index) => (
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

const CachingStrategy: React.FC = () => {
  const cachingStrategies = [
    {
      title: 'Browser Cache',
      description: 'Store responses in browser for faster access',
      icon: HardDrive,
      color: 'bg-blue-500',
      type: 'Client-side',
      duration: 'Varies',
      frameworks: {
        react: ['Service Workers', 'Cache API', 'LocalStorage', 'SessionStorage'],
        angular: ['Service Workers', 'HTTP Interceptors', 'Cache API', 'Browser Storage'],
        vue: ['Service Workers', 'Vuex Persist', 'Cache API', 'Browser Storage']
      },
      benefits: [
        'Instant data retrieval',
        'Reduced network requests',
        'Offline functionality',
        'Better user experience'
      ],
      challenges: [
        'Limited storage space',
        'Cache invalidation complexity',
        'Browser compatibility',
        'Security concerns'
      ]
    },
    {
      title: 'Memory Cache',
      description: 'Store data in application memory for quick access',
      icon: Cpu,
      color: 'bg-green-500',
      type: 'In-memory',
      duration: 'Session-based',
      frameworks: {
        react: ['React Query', 'SWR', 'Context API', 'Custom hooks'],
        angular: ['RxJS Cache', 'Services', 'BehaviorSubject', 'State Management'],
        vue: ['Vuex', 'Pinia', 'Reactive refs', 'Composition API']
      },
      benefits: [
        'Fastest access speed',
        'No network latency',
        'Real-time updates',
        'Low overhead'
      ],
      challenges: [
        'Limited by memory size',
        'Lost on page refresh',
        'Memory leaks risk',
        'Scalability issues'
      ]
    },
    {
      title: 'CDN Cache',
      description: 'Distributed caching across global network',
      icon: Cloud,
      color: 'bg-purple-500',
      type: 'Edge',
      duration: 'Configurable',
      frameworks: {
        react: ['Next.js CDN', 'Vercel Edge', 'CloudFront', 'Cloudflare'],
        angular: ['Angular Universal', 'CloudFront', 'Cloudflare', 'Akamai'],
        vue: ['Nuxt.js CDN', 'Vercel Edge', 'CloudFront', 'Cloudflare']
      },
      benefits: [
        'Global distribution',
        'High availability',
        'Reduced latency',
        'Automatic scaling'
      ],
      challenges: [
        'Cache propagation delay',
        'Cost considerations',
        'Configuration complexity',
        'Limited control'
      ]
    },
    {
      title: 'API Response Cache',
      description: 'Cache API responses at different levels',
      icon: Server,
      color: 'bg-orange-500',
      type: 'Server-side',
      duration: 'Configurable',
      frameworks: {
        react: ['React Query', 'Apollo Client', 'SWR', 'Custom caching'],
        angular: ['HTTP Client Cache', 'Apollo Angular', 'Custom interceptors'],
        vue: ['Apollo Vue', 'Vue Query', 'Axios interceptors', 'Custom solutions']
      },
      benefits: [
        'Reduced server load',
        'Faster API responses',
        'Bandwidth savings',
        'Better scalability'
      ],
      challenges: [
        'Stale data issues',
        'Cache synchronization',
        'Complex invalidation',
        'Memory usage'
      ]
    },
    {
      title: 'Service Worker Cache',
      description: 'Advanced caching with service workers',
      icon: Shield,
      color: 'bg-red-500',
      type: 'Client-side',
      duration: 'Controlled',
      frameworks: {
        react: ['Workbox', 'Custom SW', 'Next.js SW', 'Create React App SW'],
        angular: ['Angular Service Worker', 'Workbox', 'Custom SW', 'PWA tools'],
        vue: ['Workbox', 'Custom SW', 'Nuxt.js SW', 'PWA module']
      },
      benefits: [
        'Offline functionality',
        'Background sync',
        'Push notifications',
        'Fine-grained control'
      ],
      challenges: [
        'Complex implementation',
        'Debugging difficulty',
        'Browser support',
        'Update management'
      ]
    },
    {
      title: 'Database Cache',
      description: 'Cache frequently accessed database queries',
      icon: Database,
      color: 'bg-cyan-500',
      type: 'Server-side',
      duration: 'Configurable',
      frameworks: {
        react: ['React Query Server', 'Redis', 'Memcached', 'Custom solutions'],
        angular: ['Redis', 'Memcached', 'Database caching', 'Custom middleware'],
        vue: ['Redis', 'Memcached', 'Database caching', 'Server-side solutions']
      },
      benefits: [
        'Reduced database load',
        'Faster query responses',
        'Improved scalability',
        'Better performance'
      ],
      challenges: [
        'Cache consistency',
        'Memory requirements',
        'Complex setup',
        'Maintenance overhead'
      ]
    }
  ];

  const cachingPatterns = [
    {
      title: 'Cache-Aside',
      description: 'Application manages cache directly',
      icon: Layers,
      color: 'bg-blue-500',
      frameworks: {
        react: ['React Query', 'Custom hooks', 'Context API', 'Local storage'],
        angular: ['Services', 'RxJS patterns', 'HTTP interceptors', 'State management'],
        vue: ['Vuex plugins', 'Composables', 'Pinia plugins', 'Custom solutions']
      },
      benefits: ['Simple implementation', 'Direct control', 'Flexible', 'Easy debugging'],
      useCases: ['User sessions', 'Application state', 'Temporary data', 'Configuration']
    },
    {
      title: 'Write-Through',
      description: 'Write to cache and database simultaneously',
      icon: Edit,
      color: 'bg-green-500',
      frameworks: {
        react: ['Form handlers', 'State management', 'API services', 'Custom hooks'],
        angular: ['Services', 'HTTP interceptors', 'State management', 'Form handling'],
        vue: ['Composition API', 'Pinia stores', 'API services', 'Form handling']
      },
      benefits: ['Data consistency', 'Reliable', 'No cache misses', 'Durability'],
      useCases: ['User profiles', 'Settings', 'Critical data', 'Form submissions']
    },
    {
      title: 'Write-Behind',
      description: 'Write to cache first, then to database',
      icon: Clock,
      color: 'bg-purple-500',
      frameworks: {
        react: ['Optimistic updates', 'React Query', 'State management', 'Background sync'],
        angular: ['Optimistic updates', 'RxJS patterns', 'Background tasks', 'State management'],
        vue: ['Optimistic updates', 'Pinia', 'Background sync', 'Composition API']
      },
      benefits: ['Better performance', 'Reduced latency', 'Batch operations', 'User experience'],
      useCases: ['Analytics', 'Logging', 'Non-critical updates', 'High-frequency writes']
    },
    {
      title: 'Refresh-Ahead',
      description: 'Preemptively refresh cache before expiry',
      icon: RefreshCw,
      color: 'bg-orange-500',
      frameworks: {
        react: ['Background refetching', 'React Query', 'SWR', 'Custom timers'],
        angular: ['Background tasks', 'RxJS schedulers', 'HTTP polling', 'Custom services'],
        vue: ['Background refetching', 'Pinia actions', 'Custom timers', 'Composition API']
      },
      benefits: ['No stale data', 'Proactive updates', 'Better UX', 'Reduced latency'],
      useCases: ['News feeds', 'Stock data', 'Weather data', 'Real-time updates']
    }
  ];

  const cachingTools = [
    {
      name: 'Redis',
      description: 'In-memory data structure store',
      icon: Database,
      features: ['High performance', 'Data structures', 'Persistence', 'Clustering'],
      frameworks: ['All frameworks', 'Backend integration', 'Session storage', 'Caching layer']
    },
    {
      name: 'Memcached',
      description: 'Distributed memory caching system',
      icon: MemoryStick,
      features: ['Simple design', 'High speed', 'Distributed', 'Memory management'],
      frameworks: ['All frameworks', 'Database caching', 'Session storage', 'API caching']
    },
    {
      name: 'React Query',
      description: 'Server state management for React',
      icon: Layers,
      features: ['Caching', 'Background updates', 'Devtools', 'TypeScript support'],
      frameworks: ['React', 'Server state', 'API caching', 'Real-time updates']
    },
    {
      name: 'Workbox',
      description: 'Service worker libraries',
      icon: Shield,
      features: ['Caching strategies', 'Offline support', 'Background sync', 'Push notifications'],
      frameworks: ['All frameworks', 'PWA development', 'Service workers', 'Offline functionality']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Caching Strategy"
        description="Master caching techniques and strategies for building high-performance, scalable web applications across React, Angular, and Vue"
        icon={Database}
        category="System Design.Performance"
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
                  Understanding Caching Strategies
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Caching is essential for application performance, scalability, and user experience. 
                  Learn the key strategies, patterns, and tools for implementing effective caching in modern web applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Caching Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reduces latency and improves response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Decreases server load and database queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enables offline functionality and better UX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Saves bandwidth and reduces costs</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Caching Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Cache Invalidation:</strong> When and how to update
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>TTL Strategies:</strong> Time-to-live management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Storage Limits:</strong> Memory and space constraints
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Consistency:</strong> Data synchronization issues
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Caching Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Database className="w-6 h-6 text-blue-500" />
              Caching Strategies
            </CardTitle>
            <CardDescription>
              Different caching approaches for various use cases and requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cachingStrategies.map((strategy, index) => (
                <CachingStrategyCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Caching Patterns */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Layers className="w-6 h-6 text-green-500" />
              Caching Patterns
            </CardTitle>
            <CardDescription>
              Common design patterns for implementing caching effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cachingPatterns.map((pattern, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${pattern.color}`}>
                        <pattern.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {pattern.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {pattern.description}
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
                            <span className="text-xs text-slate-600 dark:text-slate-400">{pattern.frameworks.react.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{pattern.frameworks.angular.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{pattern.frameworks.vue.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Benefits:</h4>
                          <ul className="space-y-1">
                            {pattern.benefits.map((benefit, i) => (
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
                            {pattern.useCases.map((useCase, i) => (
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

        {/* Caching Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart className="w-6 h-6 text-purple-500" />
              Caching Tools and Libraries
            </CardTitle>
            <CardDescription>
              Essential tools for implementing and managing caching in your applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cachingTools.map((tool, index) => (
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
                  Caching Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing effective caching strategies
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
                      Implement proper cache invalidation strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use appropriate TTL values based on data volatility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Monitor cache hit rates and performance metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement multi-layer caching for optimal performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Consider cache warming strategies for critical data
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
                      Don't cache sensitive or personal data without encryption
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore cache invalidation and stale data issues
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't over-cache without considering memory constraints
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't neglect cache monitoring and performance analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget about cache security and access control
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

export default CachingStrategy;
