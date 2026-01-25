'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Package, 
  Layers, 
  ArrowRight, 
  ArrowDown, 
  ArrowUp, 
  ArrowLeft,
  Circle, 
  Square, 
  Triangle,
  Zap,
  Cpu,
  Globe,
  Lock,
  Unlock,
  RefreshCw,
  Eye,
  EyeOff,
  Code,
  PackageOpen,
  Network,
  Server,
  Cloud,
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
  Braces,
  Puzzle,
  Settings,
  Shield,
  Radio,
  Router,
  HardDrive,
  Terminal,
  Code2,
  PackageOpen as PackageIcon,
  GitMerge,
  Split,
  Hexagon,
  Diamond,
  Octagon,
  FormInput,
  ToggleLeft,
  ToggleRight,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  ShoppingCart,
  Heart,
  Bookmark,
  Bell,
  Search,
  Filter,
  SortAsc,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  X,
  Menu,
  Home,
  Settings2,
  LogOut,
  UserCircle,
  Camera,
  Image,
  FileText,
  Download,
  Upload,
  Play,
  Pause,
  Square as SquareIcon,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
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
  Zap as ZapIcon,
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
  Cookie,
  Cake
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocalStatePatternProps {
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

const LocalStatePatternCard: React.FC<LocalStatePatternProps> = ({ 
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

interface StateFlowDiagramProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const StateFlowDiagram: React.FC<StateFlowDiagramProps> = ({ title, description, children }) => (
  <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
    <CardHeader className="pb-4">
      <CardTitle className="text-lg text-slate-900 dark:text-white flex items-center gap-2">
        <Workflow className="w-5 h-5 text-blue-500" />
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        {children}
      </div>
    </CardContent>
  </Card>
);

const LocalStateManagement: React.FC = () => {
  const stateHooks = [
    {
      title: 'useState',
      description: 'Basic hook for managing component state with getter and setter',
      icon: Package,
      color: 'bg-blue-500',
      category: 'Local State',
      complexity: 'Easy',
      frameworks: {
        react: ['useState', 'useReducer', 'useState with types', 'Custom hooks'],
        angular: ['Component properties', 'BehaviorSubject', 'Services', 'RxJS patterns'],
        vue: ['ref', 'reactive', 'Composition API', 'Vue 3 reactivity']
      },
      benefits: [
        'Simple API',
        'Re-renders on change',
        'Functional updates',
        'Lazy initialization',
        'Built into React',
        'TypeScript support'
      ],
      challenges: [
        'Limited to component scope',
        'Prop drilling needed',
        'Complex state logic',
        'Multiple state updates'
      ],
      useCases: [
        'Form inputs',
        'Toggle states',
        'Counters',
        'Simple data',
        'Component configuration',
        'UI state management'
      ]
    },
    {
      title: 'useReducer',
      description: 'Alternative to useState for complex state logic with actions',
      icon: Terminal,
      color: 'bg-purple-500',
      category: 'Local State',
      complexity: 'Medium',
      frameworks: {
        react: ['useReducer', 'Reducer pattern', 'Complex state', 'Action dispatch'],
        angular: ['Services + RxJS', 'State services', 'NgRx patterns', 'Component state'],
        vue: ['Composables', 'Pinia stores', 'State management', 'Vue 3 patterns']
      },
      benefits: [
        'Complex state logic',
        'Action-based updates',
        'Predictable changes',
        'Better for related state',
        'Redux-like patterns',
        'Testable logic'
      ],
      challenges: [
        'More boilerplate',
        'Learning curve',
        'Action definitions',
        'Reducer complexity'
      ],
      useCases: [
        'Complex forms',
        'State machines',
        'Multi-step wizards',
        'Related state values',
        'Shopping cart',
        'Game state'
      ]
    },
    {
      title: 'useContext',
      description: 'Share state between components without prop drilling',
      icon: Layers,
      color: 'bg-green-500',
      category: 'Local State',
      complexity: 'Medium',
      frameworks: {
        react: ['useContext', 'createContext', 'Context Provider', 'useReducer + Context'],
        angular: ['Services + RxJS', 'Dependency Injection', 'BehaviorSubject', 'Angular Services'],
        vue: ['Provide/Inject', 'Composition API', 'Reactive state', 'Vue 3 context']
      },
      benefits: [
        'Avoid prop drilling',
        'Global state access',
        'Provider pattern',
        'Consumer components',
        'Built into React',
        'Simple API'
      ],
      challenges: [
        'Performance issues',
        'Frequent re-renders',
        'Context hell',
        'Not for complex state'
      ],
      useCases: [
        'Theme switching',
        'User authentication',
        'Language settings',
        'App configuration',
        'Global preferences',
        'Cross-component data'
      ]
    },
    {
      title: 'useRef',
      description: 'Store mutable values that don\'t trigger re-renders',
      icon: Eye,
      color: 'bg-orange-500',
      category: 'Local State',
      complexity: 'Easy',
      frameworks: {
        react: ['useRef', 'forwardRef', 'useImperativeHandle', 'DOM manipulation'],
        angular: ['ViewChild', 'ElementRef', 'TemplateRef', 'DOM access'],
        vue: ['ref', 'template refs', 'Composition API', 'Vue 3 refs']
      },
      benefits: [
        'No re-renders',
        'Mutable reference',
        'DOM access',
        'Persistent values',
        'Performance optimized',
        'Simple API'
      ],
      challenges: [
        'Not reactive',
        'Manual updates',
        'DOM coupling',
        'Limited use cases'
      ],
      useCases: [
        'DOM manipulation',
        'Focus management',
        'Timer IDs',
        'Previous values',
        'Input references',
        'Scroll positions'
      ]
    },
    {
      title: 'useMemo',
      description: 'Memoize expensive calculations to prevent re-computation',
      icon: Zap,
      color: 'bg-indigo-500',
      category: 'Local State',
      complexity: 'Medium',
      frameworks: {
        react: ['useMemo', 'React.memo', 'useCallback', 'Performance hooks'],
        angular: ['RxJS operators', 'OnPush change detection', 'Pure pipes', 'Memoization'],
        vue: ['computed', 'memo', 'watchEffect', 'Vue 3 reactivity']
      },
      benefits: [
        'Performance optimization',
        'Memoized values',
        'Dependency tracking',
        'Expensive calculations',
        'Prevent re-computation',
        'Better UX'
      ],
      challenges: [
        'Over-optimization risk',
        'Dependency array complexity',
        'Memory overhead',
        'Debugging complexity'
      ],
      useCases: [
        'Data filtering',
        'Complex computations',
        'Derived state',
        'Performance optimization',
        'Large datasets',
        'Real-time calculations'
      ]
    },
    {
      title: 'useCallback',
      description: 'Memoize functions to prevent re-creation on every render',
      icon: Shield,
      color: 'bg-pink-500',
      category: 'Local State',
      complexity: 'Medium',
      frameworks: {
        react: ['useCallback', 'React.memo', 'useMemo', 'Performance optimization'],
        angular: ['Memoized methods', 'OnPush strategy', 'Change detection', 'Angular optimization'],
        vue: ['Memoized functions', 'Computed properties', 'Vue 3 optimization', 'Reactive patterns']
      },
      benefits: [
        'Function memoization',
        'Reference equality',
        'Performance optimization',
        'Child component optimization',
        'Prevent re-renders',
        'Stable references'
      ],
      challenges: [
        'Over-optimization',
        'Dependency complexity',
        'Memory usage',
        'Debugging difficulty'
      ],
      useCases: [
        'Event handlers',
        'Callback props',
        'Optimized components',
        'Function dependencies',
        'Child optimization',
        'Performance critical apps'
      ]
    }
  ];

  const statePatterns = [
    {
      title: 'Single State Object',
      description: 'All related state in one object for better organization',
      icon: PackageIcon,
      color: 'text-blue-600',
      details: [
        'Grouped state management',
        'Single update function',
        'Better organization',
        'Easier to maintain'
      ],
      example: `React: const [user, setUser] = useState({
  name: '', email: '', age: 0
});

Angular: user = { name: '', email: '', age: 0 };

Vue: const user = ref({
  name: '', email: '', age: 0
});`
    },
    {
      title: 'Multiple State Variables',
      description: 'Separate state variables for independent values',
      icon: Split,
      color: 'text-purple-600',
      details: [
        'Independent state',
        'Granular updates',
        'Simple logic',
        'Clear separation'
      ],
      example: `React: const [name, setName] = useState('');
const [email, setEmail] = useState('');

Angular: name = ''; email = '';

Vue: const name = ref('');
const email = ref('');`
    },
    {
      title: 'Reducer Pattern',
      description: 'Complex state logic with action-based updates',
      icon: Terminal,
      color: 'text-green-600',
      details: [
        'Complex logic',
        'Action dispatch',
        'Predictable updates',
        'State transitions'
      ],
      example: `React: const [state, dispatch] = useReducer(userReducer, initialState);

Angular: Component + Service with state machine pattern

Vue: Composable with reducer pattern
const useUserReducer = () => { ... };`
    }
  ];

  const commonUseCases = [
    {
      title: 'Form Management',
      description: 'Handling form inputs, validation, and submission',
      icon: FormInput,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      scenarios: [
        'User registration forms',
        'Contact forms',
        'Search forms',
        'Settings forms'
      ],
      hooks: [
        'React: useState, useReducer, useForm', 
        'Angular: FormControl, FormGroup, FormBuilder', 
        'Vue: ref, reactive, v-model'
      ]
    },
    {
      title: 'UI State Management',
      description: 'Managing component visibility, loading states, and interactions',
      icon: Monitor,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      scenarios: [
        'Modal visibility',
        'Loading spinners',
        'Toggle switches',
        'Tab navigation'
      ],
      hooks: [
        'React: useState, useCallback, useMemo', 
        'Angular: Component properties, BehaviorSubject', 
        'Vue: ref, computed, watch'
      ]
    },
    {
      title: 'Data Caching',
      description: 'Caching API responses and computed values',
      icon: HardDrive,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      scenarios: [
        'API response caching',
        'Computed values',
        'Filtered data',
        'Search results'
      ],
      hooks: [
        'React: useMemo, useCallback, useRef', 
        'Angular: RxJS operators, Services', 
        'Vue: computed, watchEffect, memo'
      ]
    },
    {
      title: 'Animation State',
      description: 'Managing animation states and transitions',
      icon: ZapIcon,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      scenarios: [
        'CSS animations',
        'Transition states',
        'Progress indicators',
        'Loading animations'
      ],
      hooks: [
        'React: useState, useRef, useEffect', 
        'Angular: Animation state, ElementRef', 
        'Vue: ref, watch, transition hooks'
      ]
    }
  ];

  const bestPractices = [
    {
      title: 'Keep State Close to Usage',
      description: 'Store state as close as possible to where it\'s used',
      icon: Target,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Use the Right Hook',
      description: 'Choose the appropriate hook based on complexity and needs',
      icon: Settings,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      title: 'Optimize Performance',
      description: 'Use useMemo and useCallback to prevent unnecessary re-renders',
      icon: Zap,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Normalize State Structure',
      description: 'Organize state logically to avoid deep nesting',
      icon: FolderTree,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Local State Management"
        description="Master React hooks and patterns for efficient local state management in components"
        icon={Package}
        category="System Design.State Management"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Local State Management
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Local state management is fundamental to React development, allowing components to 
                  maintain and update their own data independently. It provides the foundation for 
                  building interactive and responsive user interfaces with predictable behavior.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Why Local State Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Component encapsulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Predictable behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Easy testing</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  When to Use Local State
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Form inputs and validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">UI component states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Temporary data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Component-specific logic</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* React State Hooks */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Braces className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  React State Hooks
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential React hooks for managing local state with different use cases and complexity levels
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateHooks.map((hook, index) => (
                <LocalStatePatternCard key={index} {...hook} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* State Patterns */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Puzzle className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  State Management Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Common patterns for organizing and managing local state in React components
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {statePatterns.map((pattern, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <pattern.icon className={cn('w-6 h-6', pattern.color)} />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {pattern.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        {pattern.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                        <h5 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Example:</h5>
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-700 dark:text-slate-300">
                          {pattern.example}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              Practical examples of local state management in real-world scenarios
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
                        <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Scenarios:</h5>
                        <div className="flex flex-wrap gap-2">
                          {useCase.scenarios.map((scenario, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {scenario}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Common Hooks:</h5>
                        <div className="flex flex-wrap gap-2">
                          {useCase.hooks.map((hook, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {hook}
                            </Badge>
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

        {/* State Flow Diagram */}
        <StateFlowDiagram 
          title="Local State Lifecycle" 
          description="How local state flows through a React component lifecycle"
        >
          <div className="space-y-8">
            {/* React Flow */}
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-center">React Local State Lifecycle</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Initialize</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Edit className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Update</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Re-render</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Display</span>
                </div>
              </div>
            </div>

            {/* Angular Flow */}
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600 dark:text-red-400 text-center">Angular Local State Lifecycle</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Terminal className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Component</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Settings className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Properties</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Change Detection</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Eye className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Update View</span>
                </div>
              </div>
            </div>

            {/* Vue Flow */}
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400 text-center">Vue Local State Lifecycle</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Network className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">ref/reactive</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Edit className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Modify</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Reactivity</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">DOM Update</span>
                </div>
              </div>
            </div>
          </div>
        </StateFlowDiagram>

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
                  Follow these best practices to build efficient and maintainable local state management
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
                          Improves performance
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Reduces complexity
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Enhances maintainability
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Tips */}
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
                      Keep state close to where it's used
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use useReducer for complex state logic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Optimize with useMemo and useCallback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Create custom hooks for reusable logic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use TypeScript for better type safety
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
                      Don't over-optimize prematurely
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid deep nesting in state objects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't mutate state directly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Avoid storing derived data in state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore performance implications
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

export default LocalStateManagement;
