'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  Database,
  FileText,
  Cloud,
  Server,
  Globe,
  Zap,
  Activity,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Clock,
  Timer,
  RefreshCw,
  Bell,
  Mail,
  Phone,
  MessageSquare,
  QrCode,
  Fingerprint,
  CreditCard,
  User,
  UserCheck,
  UserX,
  Crown,
  Award,
  Star,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Anchor,
  Bookmark,
  Filter,
  Search,
  Code,
  Folder,
  FolderOpen,
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
  Fuel,
  Trash2,
  Archive,
  HardDrive,
  Wifi,
  Battery,
  Gauge,
  BarChart3,
  PieChart,
  LineChart,
  Package,
  Box,
  PackageOpen,
  Truck,
  Receipt,
  Calculator,
  DollarSign,
  Euro,
  TrendingDown,
  AlertTriangle,
  Ban,
  ShieldCheck,
  ShieldOff,
  LockOpen,
  Unlock,
  KeyRound,
  KeySquare,
  FingerprintIcon,
  IdCard,
  Badge,
  UserCircle,
  UsersRound,
  UserPlus,
  UserMinus,
  UserCheckIcon,
  UserXIcon,
  UserCog,
  UserSearch,
  UserPen,
  Terminal,
  Braces,
  Hash,
  Link,
  Link2,
  Link2Off,
  Unlink,
  Plug,
  PlugZap,
  Power,
  PowerOff,
  Cpu,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  Watch,
  Camera,
  CameraOff,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Radio,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Router,
  Cable,
  Usb,
  ThumbsUp,
  ThumbsDown,
  Contrast,
  Target,
  Info,
  CheckCircle,
  AlertCircle,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface APISecurityStrategyProps {
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
  threats: string[];
}

const APISecurityStrategyCard: React.FC<APISecurityStrategyProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges,
  threats
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
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Common Threats</h4>
            <div className="flex flex-wrap gap-1">
              {threats.slice(0, isExpanded ? threats.length : 3).map((threat, index) => (
                <span key={index} className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs">
                  {threat}
                </span>
              ))}
              {!isExpanded && threats.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{threats.length - 3} more
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

const APISecurity: React.FC = () => {
  const apiSecurityStrategies = [
    {
      title: 'API Authentication',
      description: 'Securing API endpoints with proper authentication mechanisms',
      icon: Key,
      color: 'bg-blue-500',
      category: 'Authentication',
      complexity: 'Medium',
      frameworks: {
        react: ['Axios interceptors', 'Auth context', 'JWT handling', 'OAuth2 flow'],
        angular: ['HTTP interceptors', 'Auth guards', 'JWT services', 'OAuth2 services'],
        vue: ['Axios plugins', 'Auth composables', 'JWT utilities', 'OAuth2 plugins']
      },
      benefits: [
        'Secure API access',
        'User identity verification',
        'Session management',
        'Token-based security',
        'Cross-origin protection',
        'Scalable authentication'
      ],
      challenges: [
        'Token management',
        'Refresh token handling',
        'Session expiration',
        'Cross-tab synchronization',
        'Performance overhead'
      ],
      threats: ['Unauthorized access', 'Session hijacking', 'Token theft', 'Brute force attacks']
    },
    {
      title: 'Request Rate Limiting',
      description: 'Preventing API abuse and DoS attacks through rate limiting',
      icon: Timer,
      color: 'bg-green-500',
      category: 'Protection',
      complexity: 'Low',
      frameworks: {
        react: ['Rate limiting hooks', 'Request throttling', 'Debounce utilities', 'Queue management'],
        angular: ['Rate limiting services', 'Request throttling', 'Debounce pipes', 'Queue services'],
        vue: ['Rate limiting plugins', 'Request throttling', 'Debounce directives', 'Queue composables']
      },
      benefits: [
        'DoS protection',
        'Resource conservation',
        'Fair usage',
        'Cost control',
        'Performance stability',
        'User experience'
      ],
      challenges: [
        'Implementation complexity',
        'User experience impact',
        'Burst handling',
        'Distributed coordination',
        'Configuration tuning'
      ],
      threats: ['DoS attacks', 'API abuse', 'Resource exhaustion', 'Cost escalation']
    },
    {
      title: 'Input Validation & Sanitization',
      description: 'Validating and sanitizing API requests to prevent injection attacks',
      icon: ShieldCheck,
      color: 'bg-purple-500',
      category: 'Validation',
      complexity: 'Medium',
      frameworks: {
        react: ['Form validation', 'Input sanitization', 'Schema validation', 'Type checking'],
        angular: ['Form validators', 'Input sanitization', 'Schema validation', 'Type guards'],
        vue: ['Form validation', 'Input sanitization', 'Schema validation', 'Type checking']
      },
      benefits: [
        'Injection prevention',
        'Data integrity',
        'Error reduction',
        'Security hardening',
        'Compliance support',
        'Quality improvement'
      ],
      challenges: [
        'Complex validation rules',
        'Performance impact',
        'User experience balance',
        'Maintenance overhead',
        'Edge cases'
      ],
      threats: ['SQL injection', 'XSS attacks', 'NoSQL injection', 'Command injection']
    },
    {
      title: 'HTTPS & TLS Implementation',
      description: 'Ensuring secure communication channels for API data transmission',
      icon: Lock,
      color: 'bg-red-500',
      category: 'Transport',
      complexity: 'Low',
      frameworks: {
        react: ['HTTPS enforcement', 'Certificate validation', 'Secure headers', 'Mixed content prevention'],
        angular: ['HTTPS interceptors', 'Certificate validation', 'Secure headers', 'Mixed content guards'],
        vue: ['HTTPS plugins', 'Certificate validation', 'Secure headers', 'Mixed content directives']
      },
      benefits: [
        'Data encryption',
        'Man-in-the-middle prevention',
        'Data integrity',
        'Trust establishment',
        'Compliance requirement',
        'User confidence'
      ],
      challenges: [
        'Certificate management',
        'Performance overhead',
        'Configuration complexity',
        'Browser compatibility',
        'Mixed content issues'
      ],
      threats: ['Man-in-the-middle attacks', 'Data interception', 'Certificate spoofing', 'Downgrade attacks']
    },
    {
      title: 'CORS Security Configuration',
      description: 'Configuring Cross-Origin Resource Sharing for secure API access',
      icon: Globe,
      color: 'bg-cyan-500',
      category: 'Cross-Origin',
      complexity: 'Medium',
      frameworks: {
        react: ['CORS handling', 'Origin validation', 'Preflight requests', 'Credential management'],
        angular: ['CORS interceptors', 'Origin validation', 'Preflight handling', 'Credential services'],
        vue: ['CORS plugins', 'Origin validation', 'Preflight directives', 'Credential composables']
      },
      benefits: [
        'Cross-origin security',
        'Controlled access',
        'CSRF protection',
        'Resource isolation',
        'Policy enforcement',
        'Compliance support'
      ],
      challenges: [
        'Configuration complexity',
        'Development friction',
        'Third-party integration',
        'Testing difficulties',
        'Performance impact'
      ],
      threats: ['CSRF attacks', 'Cross-origin data theft', 'Unauthorized API access', 'Resource hijacking']
    },
    {
      title: 'API Response Security',
      description: 'Securing API responses and preventing sensitive data exposure',
      icon: EyeOff,
      color: 'bg-orange-500',
      category: 'Response',
      complexity: 'Medium',
      frameworks: {
        react: ['Response filtering', 'Data masking', 'Error handling', 'Response transformation'],
        angular: ['Response filters', 'Data masking pipes', 'Error interceptors', 'Response transformers'],
        vue: ['Response plugins', 'Data masking directives', 'Error handlers', 'Response composables']
      },
      benefits: [
        'Data protection',
        'Privacy compliance',
        'Information hiding',
        'Attack surface reduction',
        'User trust',
        'Legal compliance'
      ],
      challenges: [
        'Data classification',
        'Performance impact',
        'Development complexity',
        'Testing requirements',
        'Maintenance overhead'
      ],
      threats: ['Data leakage', 'Information disclosure', 'Privacy violations', 'Reconnaissance attacks']
    }
  ];

  const apiSecurityFlows = [
    {
      title: 'Secure API Request Flow',
      description: 'Frontend process for making secure API requests',
      steps: ['User action', 'Request validation', 'Authentication', 'Rate limiting check', 'Secure transmission'],
      icon: ArrowRight,
      color: 'bg-blue-500'
    },
    {
      title: 'API Response Handling Flow',
      description: 'Secure processing of API responses in the frontend',
      steps: ['Response receipt', 'Status validation', 'Data sanitization', 'Error handling', 'UI update'],
      icon: ArrowUp,
      color: 'bg-green-500'
    },
    {
      title: 'Error & Security Event Flow',
      description: 'Handling security events and errors in frontend applications',
      steps: ['Security event detected', 'Error classification', 'User notification', 'Logging', 'Recovery action'],
      icon: ArrowDown,
      color: 'bg-red-500'
    }
  ];

  const commonThreats = [
    {
      name: 'Man-in-the-Middle (MITM)',
      description: 'Attacker intercepting communication between client and server',
      icon: Ban,
      prevention: ['HTTPS encryption', 'Certificate validation', 'HSTS headers', 'Pinning certificates'],
      impact: 'High'
    },
    {
      name: 'Cross-Site Scripting (XSS)',
      description: 'Malicious scripts injected into web pages viewed by other users',
      icon: AlertTriangle,
      prevention: ['Input sanitization', 'Content Security Policy', 'Output encoding', 'HttpOnly cookies'],
      impact: 'High'
    },
    {
      name: 'Cross-Site Request Forgery (CSRF)',
      description: 'Unwanted actions performed on authenticated user applications',
      icon: ShieldOff,
      prevention: ['CSRF tokens', 'SameSite cookies', 'Origin validation', 'Double submit cookies'],
      impact: 'Medium'
    },
    {
      name: 'API Abuse & DoS',
      description: 'Excessive API requests causing service degradation',
      icon: TrendingDown,
      prevention: ['Rate limiting', 'Request throttling', 'Captcha', 'IP blocking'],
      impact: 'High'
    }
  ];

  const apiSecurityTools = [
    {
      name: 'Axios',
      description: 'Popular HTTP client with interceptors for API security',
      icon: Zap,
      features: ['Request/response interceptors', 'Automatic transforms', 'Error handling', 'Timeout management'],
      category: 'HTTP Client'
    },
    {
      name: 'Fetch API',
      description: 'Browser-native API for making secure HTTP requests',
      icon: Globe,
      features: ['Native browser support', 'Promise-based', 'Stream support', 'CORS handling'],
      category: 'Browser API'
    },
    {
      name: 'JWT.io',
      description: 'JSON Web Token library for frontend authentication',
      icon: Key,
      features: ['Token encoding/decoding', 'Signature verification', 'Expiration handling', 'Refresh token support'],
      category: 'Authentication'
    },
    {
      name: 'Helmet.js',
      description: 'Security headers middleware for frontend applications',
      icon: Shield,
      features: ['Security headers', 'CSP configuration', 'HSTS support', 'X-frame options'],
      category: 'Security Headers'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="API Security"
        description="Master frontend API security strategies for protecting client-server communications, preventing common attacks, and implementing secure data handling in modern web applications"
        icon={Shield}
        category="System Design.Security"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Frontend API Security
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  API security from a frontend perspective focuses on securing the communication channel between 
                  client applications and backend services. Learn essential strategies for protecting API requests, 
                  preventing common attacks, and implementing secure data handling patterns in modern web applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Frontend Security Focus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Request Security:</strong> Securing outgoing API requests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Response Protection:</strong> Safely handling API responses
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Authentication:</strong> Managing API credentials and tokens
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Threat Prevention:</strong> Blocking common frontend attacks
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Key Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Transport Security:</strong> HTTPS and TLS implementation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Validation:</strong> Input sanitization and validation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Rate Limiting:</strong> Preventing API abuse and DoS attacks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Error Handling:</strong> Secure error management and logging
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Security Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6 text-blue-500" />
              Frontend API Security Strategies
            </CardTitle>
            <CardDescription>
              Essential approaches for securing API communications from the frontend perspective
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiSecurityStrategies.map((strategy, index) => (
                <APISecurityStrategyCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Security Flows */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="w-6 h-6 text-green-500" />
              API Security Flows
            </CardTitle>
            <CardDescription>
              Secure API request/response workflows and security event handling
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {apiSecurityFlows.map((flow, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn('p-3 rounded-xl', flow.color)}>
                        <flow.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {flow.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {flow.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Process Steps:</h4>
                      <div className="flex flex-wrap gap-2">
                        {flow.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">
                              {i + 1}
                            </div>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{step}</span>
                            {i < flow.steps.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-slate-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Threats */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Common API Threats
            </CardTitle>
            <CardDescription>
              Major security threats targeting frontend API communications and their prevention strategies
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonThreats.map((threat, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                        <threat.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {threat.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {threat.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Prevention Methods:</h4>
                        <ul className="space-y-1">
                          {threat.prevention.slice(0, 3).map((method, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-1">Impact Level:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {threat.impact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Security Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-orange-500" />
              Frontend API Security Tools
            </CardTitle>
            <CardDescription>
              Essential libraries and tools for implementing secure API communications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiSecurityTools.map((tool, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                        <tool.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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
                          {tool.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-orange-600 dark:text-orange-400 mb-1">Category:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {tool.category}
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
                  Frontend API Security Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing secure API communications in frontend applications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Frontend Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Always use HTTPS for API communications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper authentication and authorization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Validate and sanitize all API request data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement rate limiting for API requests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Handle API responses securely and mask sensitive data
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Frontend Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't send sensitive data in URL parameters
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore CORS policies and security headers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't expose API keys or secrets in client-side code
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't disable browser security features for convenience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore API error messages and security warnings
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

export default APISecurity;
