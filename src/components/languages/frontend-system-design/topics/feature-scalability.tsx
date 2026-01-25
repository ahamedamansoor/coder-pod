'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Box,
  Package,
  Layers,
  GitBranch,
  Puzzle,
  Zap,
  Users,
  Code,
  Cpu,
  Monitor,
  Smartphone,
  Globe,
  Rocket,
  TrendingUp,
  Settings,
  Plug,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  ToggleLeft,
  ToggleRight,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Target,
  Award,
  Crown,
  Diamond,
  Gem,
  Star,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Anchor,
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
  Fuel
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureScalabilityProps {
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

const FeatureScalabilityCard: React.FC<FeatureScalabilityProps> = ({ 
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
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Use Cases</h4>
            <div className="flex flex-wrap gap-1">
              <span key={0} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                Feature Management
              </span>
              <span key={1} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                A/B Testing
              </span>
              <span key={2} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                Progressive Rollout
              </span>
              {!isExpanded && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +more
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

const FeatureScalability: React.FC = () => {
  const scalabilityStrategies = [
    {
      title: 'Feature Flags',
      description: 'Toggle features on/off without deployment',
      icon: ToggleRight,
      color: 'bg-blue-500',
      category: 'Control',
      complexity: 'Low',
      frameworks: {
        react: ['React Feature Flags', 'LaunchDarkly', 'Unleash', 'Custom hooks'],
        angular: ['Angular Feature Flags', 'LaunchDarkly SDK', 'Unleash', 'Feature modules'],
        vue: ['Vue Feature Flags', 'LaunchDarkly', 'Unleash', 'Composables']
      },
      benefits: [
        'Instant feature activation/deactivation',
        'A/B testing capabilities',
        'Gradual feature rollout',
        'Emergency kill switches',
        'Reduced deployment risk',
        'Targeted user segments'
      ],
      challenges: [
        'Feature flag management complexity',
        'Technical debt accumulation',
        'Testing overhead',
        'Performance considerations'
      ]
    },
    {
      title: 'Modular Architecture',
      description: 'Build features as independent modules',
      icon: Puzzle,
      color: 'bg-green-500',
      category: 'Structure',
      complexity: 'Medium',
      frameworks: {
        react: ['Module Federation', 'React.lazy', 'Dynamic imports', 'Micro-frontends'],
        angular: ['Angular Modules', 'Lazy loading', 'Feature modules', 'Micro-frontends'],
        vue: ['Vue Plugins', 'Async components', 'Dynamic imports', 'Module federation']
      },
      benefits: [
        'Independent feature development',
        'Reduced bundle size',
        'Team autonomy',
        'Easier testing',
        'Better code organization',
        'Scalable team structure'
      ],
      challenges: [
        'Initial setup complexity',
        'Inter-module communication',
        'Dependency management',
        'Build tool configuration'
      ]
    },
    {
      title: 'Progressive Enhancement',
      description: 'Layer features with increasing complexity',
      icon: Layers,
      color: 'bg-purple-500',
      category: 'Delivery',
      complexity: 'Medium',
      frameworks: {
        react: ['React.lazy', 'Suspense', 'Error Boundaries', 'Component composition'],
        angular: ['Lazy loading', 'OnPush change detection', 'CD strategies', 'Guards'],
        vue: ['Async components', 'Suspense', 'Teleport', 'Component slots']
      },
      benefits: [
        'Faster initial load',
        'Better user experience',
        'Graceful degradation',
        'Performance optimization',
        'Accessibility improvements',
        'SEO benefits'
      ],
      challenges: [
        'Complex state management',
        'Loading state handling',
        'Error recovery strategies',
        'Testing complexity'
      ]
    },
    {
      title: 'Plugin Architecture',
      description: 'Extensible system with plugin capabilities',
      icon: Plug,
      color: 'bg-orange-500',
      category: 'Extension',
      complexity: 'High',
      frameworks: {
        react: ['React plugins', 'HOC patterns', 'Render props', 'Custom hooks'],
        angular: ['Angular plugins', 'Dynamic components', 'Injection tokens', 'Extensions'],
        vue: ['Vue plugins', 'Mixins', 'Directives', 'Composition API']
      },
      benefits: [
        'Third-party integrations',
        'Custom functionality',
        'Marketplace opportunities',
        'Core system stability',
        'Feature isolation',
        'Revenue potential'
      ],
      challenges: [
        'API design complexity',
        'Security considerations',
        'Version compatibility',
        'Documentation requirements'
      ]
    },
    {
      title: 'Component Libraries',
      description: 'Reusable UI components for consistency',
      icon: Package,
      color: 'bg-cyan-500',
      category: 'Reuse',
      complexity: 'Medium',
      frameworks: {
        react: ['Storybook', 'Design systems', 'Component libraries', 'Props APIs'],
        angular: ['Angular Material', 'Component libraries', 'Storybook', 'Directives'],
        vue: ['Vue component libraries', 'Storybook', 'Design systems', 'Slots API']
      },
      benefits: [
        'Design consistency',
        'Development speed',
        'Maintenance efficiency',
        'Brand compliance',
        'Accessibility built-in',
        'Testing standardization'
      ],
      challenges: [
        'Initial investment',
        'Documentation maintenance',
        'Version management',
        'Team adoption'
      ]
    },
    {
      title: 'API-First Features',
      description: 'Design features with API contracts first',
      icon: Code,
      color: 'bg-red-500',
      category: 'Integration',
      complexity: 'Medium',
      frameworks: {
        react: ['React Query', 'Apollo Client', 'SWR', 'Custom hooks'],
        angular: ['HTTP Client', 'Apollo Angular', 'RxJS', 'Services'],
        vue: ['Vue Query', 'Apollo Vue', 'Axios', 'Composables']
      },
      benefits: [
        'Parallel development',
        'Clear contracts',
        'Better testing',
        'Mock data capabilities',
        'Team coordination',
        'Documentation generation'
      ],
      challenges: [
        'API design overhead',
        'Contract maintenance',
        'Version management',
        'Synchronization issues'
      ]
    }
  ];

  const implementationPatterns = [
    {
      title: 'Lazy Loading',
      description: 'Load features only when needed',
      icon: Clock,
      color: 'bg-blue-500',
      frameworks: {
        react: ['React.lazy', 'Suspense', 'Dynamic imports', 'Code splitting'],
        angular: ['Lazy loading', 'Preloading strategies', 'Dynamic imports', 'RouterModule'],
        vue: ['Async components', 'defineAsyncComponent', 'Dynamic imports', 'Router lazy loading']
      },
      benefits: ['Reduced bundle size', 'Faster initial load', 'Better performance', 'Resource efficiency'],
      examples: ['Admin panels', 'Settings pages', 'Complex forms', 'Report generators']
    },
    {
      title: 'Feature Toggles',
      description: 'Control feature availability dynamically',
      icon: ToggleLeft,
      color: 'bg-green-500',
      frameworks: {
        react: ['Custom hooks', 'Context API', 'Redux middleware', 'Feature flag services'],
        angular: ['Services', 'Guards', 'Directives', 'Feature flag modules'],
        vue: ['Composables', 'Plugins', 'Directives', 'Pinia stores']
      },
      benefits: ['Risk reduction', 'A/B testing', 'Gradual rollout', 'Emergency controls'],
      examples: ['Beta features', 'Seasonal campaigns', 'User tier features', 'Geographic releases']
    },
    {
      title: 'Micro-frontends',
      description: 'Independent frontend applications',
      icon: Box,
      color: 'bg-purple-500',
      frameworks: {
        react: ['Module Federation', 'Single-spa', 'qiankun', 'Custom solutions'],
        angular: ['Angular Elements', 'Single-spa', 'Module Federation', 'Web Components'],
        vue: ['Module Federation', 'Single-spa', 'Web Components', 'Custom integrations']
      },
      benefits: ['Team autonomy', 'Technology diversity', 'Independent deployments', 'Scalable architecture'],
      examples: ['E-commerce platforms', 'Enterprise dashboards', 'Multi-brand applications', 'SaaS platforms']
    }
  ];

  const scalabilityTools = [
    {
      name: 'LaunchDarkly',
      description: 'Feature management platform',
      icon: Target,
      features: ['Feature flags', 'A/B testing', 'Targeting', 'Analytics'],
      frameworks: ['React SDK', 'Angular SDK', 'Vue SDK', 'JavaScript SDK']
    },
    {
      name: 'Webpack Module Federation',
      description: 'Micro-frontend architecture',
      icon: GitBranch,
      features: ['Dynamic loading', 'Shared dependencies', 'Independent builds', 'Runtime integration'],
      frameworks: ['React', 'Angular', 'Vue', 'All frameworks']
    },
    {
      name: 'Storybook',
      description: 'Component development environment',
      icon: Eye,
      features: ['Component isolation', 'Interactive documentation', 'Visual testing', 'Design systems'],
      frameworks: ['React', 'Angular', 'Vue', 'All frameworks']
    },
    {
      name: 'Single-spa',
      description: 'Micro-frontend framework',
      icon: Layers,
      features: ['Framework agnostic', 'Routing integration', 'Lifecycle management', 'Error isolation'],
      frameworks: ['React', 'Angular', 'Vue', 'Multiple frameworks']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Feature Scalability"
        description="Master feature scalability techniques for building flexible, maintainable, and scalable frontend applications across React, Angular, and Vue"
        icon={Box}
        category="System Design.Scalability"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Box className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Feature Scalability
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Feature scalability is the ability to add, modify, and manage features in your application 
                  without compromising performance, maintainability, or user experience. Learn the key strategies 
                  and patterns for building scalable frontend applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Feature Scalability Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enables rapid feature development and deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reduces technical debt and maintenance overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Supports team growth and parallel development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improves user experience with faster, more reliable features</span>
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
                      <strong>Performance Impact:</strong> Bundle size and loading speed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Team Coordination:</strong> Cross-team dependencies and communication
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Code Quality:</strong> Consistency and maintainability standards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>User Experience:</strong> Seamless feature integration and transitions
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
              Feature Scalability Strategies
            </CardTitle>
            <CardDescription>
              Core strategies for implementing scalable feature management in frontend applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scalabilityStrategies.map((strategy, index) => (
                <FeatureScalabilityCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Patterns */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Layers className="w-6 h-6 text-green-500" />
              Implementation Patterns
            </CardTitle>
            <CardDescription>
              Practical patterns for implementing scalable features in modern applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {implementationPatterns.map((pattern, index) => (
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

        {/* Scalability Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-purple-500" />
              Scalability Tools and Platforms
            </CardTitle>
            <CardDescription>
              Essential tools for implementing and managing feature scalability in your applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scalabilityTools.map((tool, index) => (
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
                  Feature Scalability Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing scalable and maintainable feature architecture
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
                      Design features as independent, loosely coupled modules
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement feature flags for controlled rollouts and A/B testing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use lazy loading to optimize initial bundle size and performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Establish clear API contracts and interfaces between features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Create reusable component libraries and design systems
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
                      Don't create tightly coupled dependencies between features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore performance impact of feature additions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't accumulate technical debt with temporary feature flags
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't overlook testing and documentation for new features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't sacrifice user experience for development convenience
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

export default FeatureScalability;
