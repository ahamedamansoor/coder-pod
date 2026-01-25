'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Users,
  Globe,
  Server,
  Cloud,
  Zap,
  TrendingUp,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Monitor,
  Smartphone,
  Wifi,
  Battery,
  MapPin,
  Navigation,
  Compass,
  Anchor,
  Flag,
  Target,
  Settings,
  Cpu,
  Database,
  HardDrive,
  Shield,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Award,
  Crown,
  Diamond,
  Gem,
  Star,
  Rocket,
  Gauge,
  Timer,
  Clock,
  RefreshCw,
  Download,
  Upload,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  GitBranch,
  Layers,
  Box,
  Package,
  Puzzle,
  Plug,
  Code,
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
  Fuel
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserScalabilityPatternProps {
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

const UserScalabilityPatternCard: React.FC<UserScalabilityPatternProps> = ({ 
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

interface UserScalabilityProps {
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
}

const UserScalabilityCard: React.FC<UserScalabilityProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges
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
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Implementation:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{frameworks.react.slice(0, 2).join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{frameworks.angular.slice(0, 2).join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{frameworks.vue.slice(0, 2).join(', ')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Key Benefits:</h4>
            <ul className="space-y-1">
              {benefits.slice(0, isExpanded ? benefits.length : 2).map((benefit, index) => (
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
              {challenges.slice(0, isExpanded ? challenges.length : 1).map((challenge, index) => (
                <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <AlertCircle className="w-3 h-3 text-orange-500" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {(benefits.length > 2 || challenges.length > 1) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3 h-3" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" />
                  Show more
                </>
              )}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const UserScalability: React.FC = () => {
  const scalabilityStrategies = [
    {
      title: 'CDN Distribution',
      description: 'Global content delivery for reduced latency',
      icon: Globe,
      color: 'bg-blue-500',
      category: 'Distribution',
      complexity: 'Medium',
      frameworks: {
        react: ['Next.js CDN', 'Vercel Edge', 'CloudFront', 'Cloudflare'],
        angular: ['Angular Universal', 'CloudFront', 'Cloudflare', 'Akamai'],
        vue: ['Nuxt.js CDN', 'Vercel Edge', 'CloudFront', 'Cloudflare']
      },
      benefits: [
        'Reduced latency worldwide',
        'Improved page load speeds',
        'Better user experience',
        'Automatic scaling',
        'Cost optimization',
        'High availability'
      ],
      challenges: [
        'Cache invalidation complexity',
        'Configuration overhead',
        'Cost management',
        'Geographic coverage planning'
      ],
      useCases: [
        'Global applications',
        'Media streaming',
        'E-commerce platforms',
        'Content-heavy websites',
        'SaaS applications'
      ]
    },
    {
      title: 'Load Balancing',
      description: 'Distribute traffic across multiple servers',
      icon: Activity,
      color: 'bg-green-500',
      category: 'Performance',
      complexity: 'High',
      frameworks: {
        react: ['React Query', 'SWR', 'Custom load balancing', 'Service workers'],
        angular: ['HTTP interceptors', 'RxJS patterns', 'Custom services', 'Load balancer integration'],
        vue: ['Vue Query', 'Axios interceptors', 'Custom plugins', 'Service integration']
      },
      benefits: [
        'Improved reliability',
        'Better resource utilization',
        'Automatic failover',
        'Traffic distribution',
        'Performance optimization',
        'Scalability support'
      ],
      challenges: [
        'Session management complexity',
        'Configuration complexity',
        'Health monitoring',
        'Synchronization issues'
      ],
      useCases: [
        'High-traffic websites',
        'API gateways',
        'Microservices',
        'Real-time applications',
        'Financial systems'
      ]
    },
    {
      title: 'Caching Layers',
      description: 'Multi-level caching for optimal performance',
      icon: Database,
      color: 'bg-purple-500',
      category: 'Performance',
      complexity: 'Medium',
      frameworks: {
        react: ['React Query', 'SWR', 'Service Workers', 'Local storage'],
        angular: ['HTTP Client Cache', 'RxJS Cache', 'Services', 'Browser storage'],
        vue: ['Vue Query', 'Pinia Cache', 'Composables', 'Browser storage']
      },
      benefits: [
        'Reduced server load',
        'Faster response times',
        'Better user experience',
        'Bandwidth savings',
        'Offline capability',
        'Cost reduction'
      ],
      challenges: [
        'Cache invalidation',
        'Data consistency',
        'Storage limitations',
        'Complex debugging'
      ],
      useCases: [
        'Data-heavy applications',
        'API responses',
        'Static assets',
        'User sessions',
        'Real-time data'
      ]
    },
    {
      title: 'Progressive Web Apps',
      description: 'Offline-first architecture for reliability',
      icon: Smartphone,
      color: 'bg-orange-500',
      category: 'Experience',
      complexity: 'High',
      frameworks: {
        react: ['Create React App PWA', 'Next.js PWA', 'Workbox', 'Custom service workers'],
        angular: ['Angular PWA', 'Service Workers', 'Workbox', 'PWA schematics'],
        vue: ['Vue PWA plugin', 'Nuxt.js PWA', 'Workbox', 'Custom PWA setup']
      },
      benefits: [
        'Offline functionality',
        'App-like experience',
        'Push notifications',
        'Faster loading',
        'Better engagement',
        'Cross-platform compatibility'
      ],
      challenges: [
        'Complex implementation',
        'Browser compatibility',
        'Update management',
        'Storage limitations'
      ],
      useCases: [
        'Mobile applications',
        'E-commerce sites',
        'News portals',
        'Social media',
        'Business websites'
      ]
    },
    {
      title: 'Responsive Design',
      description: 'Optimize for all devices and screen sizes',
      icon: Monitor,
      color: 'bg-cyan-500',
      category: 'Experience',
      complexity: 'Medium',
      frameworks: {
        react: ['CSS-in-JS', 'Styled Components', 'Tailwind CSS', 'Material-UI'],
        angular: ['Angular Material', 'Flex Layout', 'CSS Grid', 'Responsive directives'],
        vue: ['Vuetify', 'Quasar', 'Tailwind CSS', 'CSS Grid']
      },
      benefits: [
        'Universal device support',
        'Better user experience',
        'SEO optimization',
        'Single codebase',
        'Cost efficiency',
        'Future-proof design'
      ],
      challenges: [
        'Testing complexity',
        'Performance optimization',
        'Design consistency',
        'Browser compatibility'
      ],
      useCases: [
        'Multi-device platforms',
        'Mobile-first applications',
        'Content management systems',
        'Educational platforms',
        'Corporate websites'
      ]
    },
    {
      title: 'Real-time Optimization',
      description: 'Dynamic performance based on user conditions',
      icon: Zap,
      color: 'bg-red-500',
      category: 'Performance',
      complexity: 'High',
      frameworks: {
        react: ['React Suspense', 'Error Boundaries', 'Performance APIs', 'Custom hooks'],
        angular: ['OnPush CD', 'Lazy loading', 'Performance monitoring', 'RxJS optimization'],
        vue: ['Async components', 'Suspense', 'Performance APIs', 'Composables']
      },
      benefits: [
        'Adaptive performance',
        'Better user experience',
        'Resource optimization',
        'Network awareness',
        'Device optimization',
        'Battery efficiency'
      ],
      challenges: [
        'Complex implementation',
        'Performance monitoring',
        'Testing overhead',
        'Maintenance complexity'
      ],
      useCases: [
        'Gaming applications',
        'Video streaming',
        'Real-time collaboration',
        'Mobile applications',
        'IoT interfaces'
      ]
    }
  ];

  const optimizationPatterns = [
    {
      title: 'Edge Computing',
      description: 'Process data closer to users',
      icon: Cloud,
      color: 'bg-blue-500',
      frameworks: {
        react: ['Next.js Edge', 'Cloudflare Workers', 'Vercel Edge', 'Edge middleware'],
        angular: ['Angular Universal Edge', 'Cloudflare Workers', 'Edge functions', 'Server-side rendering'],
        vue: ['Nuxt.js Edge', 'Cloudflare Workers', 'Edge functions', 'SSR optimization']
      },
      benefits: ['Ultra-low latency', 'Better performance', 'Reduced bandwidth', 'Improved privacy'],
      examples: ['API routing', 'Authentication', 'Content personalization', 'A/B testing']
    },
    {
      title: 'Connection Awareness',
      description: 'Adapt to network conditions',
      icon: Wifi,
      color: 'bg-green-500',
      frameworks: {
        react: ['Network Information API', 'Service Workers', 'Progressive loading', 'Data saving mode'],
        angular: ['Network detection', 'Lazy loading', 'Progressive enhancement', 'Connection monitoring'],
        vue: ['Network APIs', 'Progressive loading', 'Connection monitoring', 'Data optimization']
      },
      benefits: ['Better UX on slow networks', 'Data savings', 'Improved performance', 'User satisfaction'],
      examples: ['Image quality adjustment', 'Video streaming', 'Data prefetching', 'Offline mode']
    },
    {
      title: 'Geographic Optimization',
      description: 'Optimize based on user location',
      icon: MapPin,
      color: 'bg-purple-500',
      frameworks: {
        react: ['Geolocation API', 'IP-based routing', 'Regional content', 'Time zone optimization'],
        angular: ['Location services', 'Regional routing', 'Content localization', 'Time zone handling'],
        vue: ['Geolocation plugins', 'IP detection', 'Regional content', 'Localization']
      },
      benefits: ['Reduced latency', 'Localized experience', 'Compliance support', 'Better performance'],
      examples: ['Content localization', 'Currency conversion', 'Regional features', 'Compliance handling']
    }
  ];

  const performanceTools = [
    {
      name: 'Cloudflare CDN',
      description: 'Global content delivery network',
      icon: Cloud,
      features: ['Global distribution', 'DDoS protection', 'Edge computing', 'Web optimization'],
      frameworks: ['All frameworks', 'Static assets', 'API caching', 'Security features']
    },
    {
      name: 'AWS CloudFront',
      description: 'Amazon content delivery service',
      icon: UploadCloud,
      features: ['Global edge locations', 'Dynamic content', 'Security', 'Analytics'],
      frameworks: ['All frameworks', 'Media streaming', 'API acceleration', 'Static content']
    },
    {
      name: 'Google PageSpeed',
      description: 'Performance optimization tools',
      icon: Gauge,
      features: ['Performance insights', 'Optimization suggestions', 'Core Web Vitals', 'Best practices'],
      frameworks: ['All frameworks', 'Performance monitoring', 'SEO optimization', 'User experience']
    },
    {
      name: 'Vercel Edge',
      description: 'Edge computing platform',
      icon: Zap,
      features: ['Edge functions', 'Global deployment', 'Real-time analytics', 'Automatic scaling'],
      frameworks: ['Next.js', 'React', 'Static sites', 'Serverless functions']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="User Scalability"
        description="Master frontend strategies for architecting applications that scale gracefully with user growth, ensuring optimal performance and user experience at any scale"
        icon={Users}
        category="System Design.Scalability"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding User Scalability
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  User scalability focuses on ensuring your frontend application can handle growing user bases 
                  while maintaining optimal performance, reliability, and user experience. Learn the essential 
                  strategies and patterns for building applications that scale effectively with user growth.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why User Scalability Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Ensures consistent performance as user base grows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reduces infrastructure costs through optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improves user experience across different regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Supports business growth and market expansion</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Key Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Geographic Distribution:</strong> Global user reach and latency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Network Conditions:</strong> Varying connection speeds and quality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Device Diversity:</strong> Different capabilities and screen sizes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Peak Load Handling:</strong> Traffic spikes and concurrent users
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scalability Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Rocket className="w-6 h-6 text-blue-500" />
              User Scalability Strategies
            </CardTitle>
            <CardDescription>
              Core strategies for implementing scalable frontend applications that handle user growth effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scalabilityStrategies.map((strategy, index) => (
                <UserScalabilityPatternCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Optimization Patterns */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gauge className="w-6 h-6 text-green-500" />
              Performance Optimization Patterns
            </CardTitle>
            <CardDescription>
              Advanced patterns for optimizing frontend performance based on user conditions and context
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {optimizationPatterns.map((pattern, index) => (
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                          <h4 className="font-semibold text-sm text-blue-600 dark:text-blue-400 mb-1">Examples:</h4>
                          <ul className="space-y-1">
                            {pattern.examples.map((example, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <Target className="w-3 h-3 text-blue-500" />
                                {example}
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

        {/* Performance Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-purple-500" />
              Performance & Scalability Tools
            </CardTitle>
            <CardDescription>
              Essential tools for implementing and monitoring user scalability in frontend applications
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
                  User Scalability Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for building frontend applications that scale effectively with user growth
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
                      Implement global CDN distribution for reduced latency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use multi-level caching strategies for optimal performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Design responsive layouts for all device types and screen sizes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Monitor performance metrics and user experience continuously
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement progressive enhancement for varying network conditions
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
                      Don't ignore geographic distribution and latency considerations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't overlook mobile performance and battery optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't assume all users have high-speed internet connections
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't neglect accessibility and inclusive design principles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget to plan for traffic spikes and peak load scenarios
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

export default UserScalability;
