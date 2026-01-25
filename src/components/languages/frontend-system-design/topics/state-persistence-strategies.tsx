'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  HardDrive, 
  Database, 
  Cloud, 
  Shield, 
  Lock, 
  Unlock,
  RefreshCw,
  Eye,
  EyeOff,
  Code,
  Package,
  Network,
  Server,
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
  Save,
  Download,
  Upload,
  Clock,
  Timer,
  Terminal,
  Settings,
  Wifi,
  WifiOff,
  Activity,
  Zap,
  Globe,
  Cookie,
  Key,
  FileText,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  Home,
  Settings2,
  LogOut,
  UserCircle,
  Camera,
  Image,
  Search,
  Filter,
  SortAsc,
  Bell,
  Heart,
  Bookmark,
  CreditCard,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar,
  FormInput,
  ToggleLeft,
  ToggleRight,
  Battery,
  BatteryLow,
  Signal,
  SignalLow,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Flame,
  Snowflake,
  Mountain,
  Trees,
  Building,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Footprints,
  Coffee,
  Pizza,
  Apple,
  Cherry,
  Grape,
  Beer,
  Wine,
  Cookie as CookieIcon,
  Cake,
  Loader,
  Loader2,
  MoreHorizontal,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Square as SquareIcon,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Send,
  RefreshCcw,
  RotateCcw,
  RotateCw,
  Edit,
  Power,
  PowerOff
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersistenceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  pros: string[];
  cons: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const PersistenceCard: React.FC<PersistenceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  features, 
  frameworks,
  pros, 
  cons,
  isExpanded,
  onToggle
}) => {
  return (
    <Card className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      <CardHeader 
        className="pb-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className={cn('p-3 rounded-xl', color)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg text-slate-900 dark:text-white">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
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
            
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Pros:</h4>
                <ul className="space-y-1">
                  {pros.map((pro, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-1">Cons:</h4>
                <ul className="space-y-1">
                  {cons.map((con, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      )}
      
      {/* Traditional Arrow at Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent cursor-pointer"
        onClick={onToggle}
      >
        <div className="relative h-full">
          {/* Traditional Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown 
              className={cn(
                'w-4 h-4 text-slate-400 transition-all duration-300',
                isExpanded && 'rotate-180 text-blue-500'
              )}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const StatePersistenceStrategies: React.FC = () => {
  // Initialize all cards as expanded
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  
  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Set all cards to expanded by default
  React.useEffect(() => {
    const initialExpanded: Record<number, boolean> = {};
    for (let i = 0; i < 6; i++) { // 6 persistence strategy cards
      initialExpanded[i] = true;
    }
    setExpandedCards(initialExpanded);
  }, []);

  const persistenceStrategies = [
    {
      title: 'Local Storage',
      description: 'Browser-based key-value storage with larger capacity than cookies',
      icon: HardDrive,
      color: 'bg-blue-500',
      features: [
        '5-10MB capacity',
        'Client-side only',
        'String key-value pairs',
        'Persistent across sessions'
      ],
      frameworks: {
        react: ['localStorage API', 'useLocalStorage hook', 'Redux persist'],
        angular: ['localStorage service', 'NgRx localStorage sync', 'Custom storage service'],
        vue: ['localStorage API', 'VueUse useLocalStorage', 'Pinia persist plugin']
      },
      pros: [
        'Large storage capacity',
        'Simple API',
        'No expiration by default',
        'Widely supported'
      ],
      cons: [
        'Synchronous operations',
        'Security vulnerabilities',
        'Limited to strings',
        'No server access'
      ]
    },
    {
      title: 'Session Storage',
      description: 'Tab-specific storage that clears when the session ends',
      icon: Clock,
      color: 'bg-green-500',
      features: [
        '5MB capacity',
        'Tab-specific',
        'Clears on tab close',
        'Session-based'
      ],
      frameworks: {
        react: ['sessionStorage API', 'useSessionStorage hook', 'Tab state management'],
        angular: ['sessionStorage service', 'Component state sync', 'Tab isolation'],
        vue: ['sessionStorage API', 'VueUse useSessionStorage', 'Tab-specific composables']
      },
      pros: [
        'Automatic cleanup',
        'Tab isolation',
        'Better security',
        'Simple API'
      ],
      cons: [
        'Limited to session',
        'No cross-tab sharing',
        'Synchronous operations',
        'Smaller capacity'
      ]
    },
    {
      title: 'IndexedDB',
      description: 'Low-level API for client-side storage of significant amounts of structured data',
      icon: Database,
      color: 'bg-purple-500',
      features: [
        'Large storage capacity',
        'Indexed and transactional',
        'Async operations',
        'Structured data support'
      ],
      frameworks: {
        react: ['Dexie.js', 'idb library', 'React IndexedDB hooks'],
        angular: ['ngx-indexed-db', 'Dexie.js', 'Custom IndexedDB service'],
        vue: ['Dexie.js', 'VueUse useIndexedDB', 'Pinia IndexedDB plugin']
      },
      pros: [
        'Large storage capacity',
        'Async operations',
        'Indexed queries',
        'Transaction support'
      ],
      cons: [
        'Complex API',
        'Browser compatibility',
        'Learning curve',
        'Verbose implementation'
      ]
    },
    {
      title: 'Cookies',
      description: 'Small pieces of data sent with HTTP requests for server-client communication',
      icon: Cookie,
      color: 'bg-orange-500',
      features: [
        '4KB capacity',
        'Server access',
        'Expiration support',
        'HTTP-only option'
      ],
      frameworks: {
        react: ['js-cookie', 'react-cookie', 'Universal cookie'],
        angular: ['ngx-cookie-service', 'Document cookies', 'HTTP interceptors'],
        vue: ['vue-cookies', 'js-cookie', 'Cookie composables']
      },
      pros: [
        'Server accessible',
        'Automatic HTTP headers',
        'Expiration control',
        'Security options'
      ],
      cons: [
        'Very small capacity',
        'Performance impact',
        'Privacy concerns',
        'Limited data types'
      ]
    },
    {
      title: 'File System',
      description: 'Direct file system access for desktop and mobile applications',
      icon: FolderTree,
      color: 'bg-red-500',
      features: [
        'Large capacity',
        'File operations',
        'Native performance',
        'Cross-platform'
      ],
      frameworks: {
        react: ['Electron APIs', 'React Native FS', 'File System Access API'],
        angular: ['Electron APIs', 'Angular Universal', 'Native modules'],
        vue: ['Electron APIs', 'Quasar File System', 'Native plugins']
      },
      pros: [
        'Large capacity',
        'Native performance',
        'File operations',
        'Offline capable'
      ],
      cons: [
        'Platform specific',
        'Security restrictions',
        'Complex setup',
        'Limited web support'
      ]
    },
    {
      title: 'Cloud Storage',
      description: 'Remote storage services with synchronization capabilities',
      icon: Cloud,
      color: 'bg-indigo-500',
      features: [
        'Unlimited capacity',
        'Cross-device sync',
        'Server backup',
        'Real-time updates'
      ],
      frameworks: {
        react: ['Firebase SDK', 'AWS Amplify', 'Supabase client'],
        angular: ['Firebase SDK', 'AngularFire', 'AWS Amplify'],
        vue: ['Firebase SDK', 'VueFire', 'Supabase Vue']
      },
      pros: [
        'Cross-device sync',
        'Server backup',
        'Real-time updates',
        'Scalable storage'
      ],
      cons: [
        'Internet required',
        'Cost implications',
        'Privacy concerns',
        'Vendor lock-in'
      ]
    }
  ];

  const commonUseCases = [
    {
      title: 'User Preferences',
      description: 'Theme, language, and personalization settings',
      icon: Settings,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      strategies: ['Local Storage', 'Cloud Storage', 'IndexedDB'],
      frameworks: ['React: useState + localStorage', 'Angular: Services + localStorage', 'Vue: Composables + localStorage']
    },
    {
      title: 'Authentication',
      description: 'Tokens, sessions, and user authentication state',
      icon: Lock,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      strategies: ['Cookies', 'Local Storage', 'Session Storage'],
      frameworks: ['React: Context + localStorage', 'Angular: Services + cookies', 'Vue: Pinia + localStorage']
    },
    {
      title: 'Form Data',
      description: 'Draft forms, multi-step wizards, and user input',
      icon: FormInput,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      strategies: ['Local Storage', 'Session Storage', 'IndexedDB'],
      frameworks: ['React: useForm + localStorage', 'Angular: Forms + localStorage', 'Vue: Composables + localStorage']
    },
    {
      title: 'Application State',
      description: 'Complete application state for offline usage',
      icon: Package,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      strategies: ['IndexedDB', 'File System', 'Cloud Storage'],
      frameworks: ['React: Redux + IndexedDB', 'Angular: NgRx + IndexedDB', 'Vue: Pinia + IndexedDB']
    }
  ];

  const bestPractices = [
    {
      title: 'Choose Right Storage',
      description: 'Select storage based on data size, sensitivity, and access patterns',
      icon: Target,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Handle Security',
      description: 'Encrypt sensitive data and use secure storage options',
      icon: Shield,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      title: 'Manage Errors',
      description: 'Handle storage failures gracefully with fallbacks',
      icon: AlertCircle,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Optimize Performance',
      description: 'Use async operations and debounce frequent saves',
      icon: Zap,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="State Persistence Strategies"
        description="Master state persistence techniques and storage strategies for React, Angular, and Vue applications"
        icon={HardDrive}
        category="System Design.State Management"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding State Persistence
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  State persistence involves saving application data across sessions, devices, and 
                  browser restarts. It's essential for user experience, offline functionality, 
                  and maintaining application state between user interactions.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Why Persistence Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Preserves user preferences and settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enables offline functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improves user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reduces data transfer</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  Key Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Data size and structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Security and privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Performance implications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Browser compatibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Persistence Strategies */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Archive className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Persistence Strategies
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Comprehensive comparison of storage strategies across React, Angular, and Vue
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {persistenceStrategies.map((strategy, index) => (
                <PersistenceCard 
                  key={index} 
                  {...strategy} 
                  isExpanded={expandedCards[index] || false}
                  onToggle={() => toggleCard(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Use Cases */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="w-6 h-6 text-blue-500" />
              Common Use Cases
            </CardTitle>
            <CardDescription>
              Practical applications of state persistence in real-world scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonUseCases.map((useCase, index) => (
                <Card key={index} className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={cn('p-2 rounded-lg', useCase.color)}>
                        <useCase.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {useCase.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Best Strategies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {useCase.strategies.map((strategy, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {strategy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Framework Examples:</h5>
                        <div className="space-y-1">
                          {useCase.frameworks.map((framework, idx) => (
                            <div key={idx} className="text-xs text-slate-600 dark:text-slate-400">
                              {framework}
                            </div>
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
                  Follow these best practices for robust state persistence
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
                          Improves reliability
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Better performance
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Enhanced security
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guidelines */}
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
                      Choose storage based on data size and sensitivity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper error handling and fallbacks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use async operations for large datasets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Encrypt sensitive data before storage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement data validation and sanitization
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
                      Don't store sensitive data in localStorage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid synchronous operations for large data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore storage quota limitations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid storing large objects without compression
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget to handle storage exceptions
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

export default StatePersistenceStrategies;
