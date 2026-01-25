'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Shield,
  Lock,
  Eye,
  EyeOff,
  Database,
  FileText,
  Cloud,
  Server,
  Key,
  CheckCircle,
  AlertCircle,
  Info,
  Target,
  Settings,
  Cpu,
  Monitor,
  Smartphone,
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
  PoundSterling,
  Currency,
  CreditCardIcon,
  Wallet,
  PiggyBank,
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
  MinusCircle,
  PlusCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataProtectionStrategyProps {
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
  compliance: string[];
}

const DataProtectionStrategyCard: React.FC<DataProtectionStrategyProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges,
  compliance
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
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Compliance Standards</h4>
            <div className="flex flex-wrap gap-1">
              {compliance.slice(0, isExpanded ? compliance.length : 3).map((item, index) => (
                <span key={index} className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
                  {item}
                </span>
              ))}
              {!isExpanded && compliance.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{compliance.length - 3} more
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

const DataProtection: React.FC = () => {
  const dataProtectionStrategies = [
    {
      title: 'Client-Side Encryption',
      description: 'Encrypting sensitive data in the browser before transmission or storage',
      icon: Lock,
      color: 'bg-blue-500',
      category: 'Frontend Security',
      complexity: 'Medium',
      frameworks: {
        react: ['crypto-js', 'Web Crypto API', 'AES encryption', 'React CryptoHook'],
        angular: ['crypto-js', 'Web Crypto API', 'Encryption services', 'Security pipes'],
        vue: ['crypto-js', 'Web Crypto API', 'Encryption plugins', 'Security composables']
      },
      benefits: [
        'End-to-end encryption',
        'Zero-knowledge architecture',
        'Reduced server liability',
        'User privacy control',
        'Compliance advantage',
        'Trust building'
      ],
      challenges: [
        'JavaScript performance',
        'Key management in browser',
        'Code obfuscation needed',
        'Browser compatibility',
        'Memory security concerns'
      ],
      compliance: ['GDPR', 'HIPAA', 'PCI DSS', 'CCPA', 'SOX']
    },
    {
      title: 'Secure Form Handling',
      description: 'Protecting user input data from collection to submission',
      icon: FileText,
      color: 'bg-green-500',
      category: 'Frontend Forms',
      complexity: 'Low',
      frameworks: {
        react: ['React Hook Form', 'Formik', 'Yup validation', 'Secure form components'],
        angular: ['Reactive Forms', 'Template Forms', 'Custom validators', 'Form security'],
        vue: ['Vue Formulate', 'VeeValidate', 'Composition API', 'Secure form plugins']
      },
      benefits: [
        'Input sanitization',
        'XSS prevention',
        'Data validation',
        'User experience',
        'Error handling',
        'Security compliance'
      ],
      challenges: [
        'Complex validation rules',
        'User experience balance',
        'Performance optimization',
        'Accessibility requirements',
        'Mobile considerations'
      ],
      compliance: ['GDPR', 'CCPA', 'WCAG', 'Section 508', 'EN 301 549']
    },
    {
      title: 'Browser Storage Security',
      description: 'Secure handling of localStorage, sessionStorage, and IndexedDB',
      icon: Database,
      color: 'bg-purple-500',
      category: 'Frontend Storage',
      complexity: 'Medium',
      frameworks: {
        react: ['useSecureStorage', 'react-secure-storage', 'IndexedDB hooks', 'Storage encryption'],
        angular: ['SecureStorage service', 'Storage guards', 'IndexedDB service', 'Encryption pipes'],
        vue: ['vue-secure-storage', 'Storage composables', 'IndexedDB plugins', 'Encryption directives']
      },
      benefits: [
        'Offline functionality',
        'Performance optimization',
        'User preferences',
        'Session management',
        'Data persistence',
        'Reduced server load'
      ],
      challenges: [
        'Storage size limits',
        'Security vulnerabilities',
        'Cross-tab synchronization',
        'Data expiration',
        'Privacy concerns'
      ],
      compliance: ['GDPR', 'CCPA', 'PCI DSS', 'HIPAA', 'Browser policies']
    },
    {
      title: 'Frontend Data Masking',
      description: 'Masking sensitive data in the UI for privacy and security',
      icon: EyeOff,
      color: 'bg-red-500',
      category: 'Frontend Privacy',
      complexity: 'Low',
      frameworks: {
        react: ['React Mask', 'DataMask components', 'Privacy hooks', 'Mask display'],
        angular: ['Mask pipes', 'Privacy directives', 'DataMask services', 'Secure display'],
        vue: ['Vue Mask', 'Privacy directives', 'Mask plugins', 'Secure composables']
      },
      benefits: [
        'Visual privacy',
        'Shoulder surfing prevention',
        'Compliance display',
        'User trust',
        'Data minimization',
        'Security awareness'
      ],
      challenges: [
        'User experience impact',
        'Implementation complexity',
        'Accessibility concerns',
        'Performance overhead',
        'Testing requirements'
      ],
      compliance: ['GDPR', 'CCPA', 'HIPAA', 'PCI DSS', 'Privacy laws']
    },
    {
      title: 'Content Security Policy (CSP)',
      description: 'Preventing data injection attacks through browser security policies',
      icon: Shield,
      color: 'bg-cyan-500',
      category: 'Frontend Security',
      complexity: 'High',
      frameworks: {
        react: ['CSP headers', 'Nonce generation', 'React strict mode', 'Security middleware'],
        angular: ['CSP interceptors', 'Security headers', 'Angular strict mode', 'Content guards'],
        vue: ['CSP plugins', 'Security directives', 'Vue strict mode', 'Content policies']
      },
      benefits: [
        'XSS prevention',
        'Data injection protection',
        'Code execution control',
        'Security hardening',
        'Compliance support',
        'Attack surface reduction'
      ],
      challenges: [
        'Complex policy configuration',
        'Third-party integration',
        'Development overhead',
        'Debugging difficulties',
        'Performance impact'
      ],
      compliance: ['OWASP', 'NIST', 'CIS controls', 'Security standards', 'PCI DSS']
    },
    {
      title: 'Privacy-First Analytics',
      description: 'Implementing analytics while respecting user privacy and data protection',
      icon: BarChart3,
      color: 'bg-orange-500',
      category: 'Frontend Analytics',
      complexity: 'Medium',
      frameworks: {
        react: ['Privacy analytics', 'Consent management', 'Data minimization', 'Anonymous tracking'],
        angular: ['Privacy services', 'Consent guards', 'Data minimization', 'Anonymous analytics'],
        vue: ['Privacy plugins', 'Consent directives', 'Data minimization', 'Anonymous tracking']
      },
      benefits: [
        'Privacy compliance',
        'User trust',
        'Legal protection',
        'Data minimization',
        'Consent management',
        'Ethical analytics'
      ],
      challenges: [
        'Limited data insights',
        'Implementation complexity',
        'User consent management',
        'Third-party limitations',
        'Analytics accuracy'
      ],
      compliance: ['GDPR', 'CCPA', 'ePrivacy', 'Cookie laws', 'Privacy regulations']
    }
  ];

  const dataFlows = [
    {
      title: 'Frontend Data Collection Flow',
      description: 'Secure client-side data collection and validation process',
      steps: ['User input in form', 'Client-side validation', 'Input sanitization', 'Client-side encryption', 'Secure transmission'],
      icon: ArrowRight,
      color: 'bg-blue-500'
    },
    {
      title: 'Frontend Data Processing Flow',
      description: 'Client-side data processing and transformation',
      steps: ['Data retrieval', 'Client-side decryption', 'Frontend processing', 'Data masking', 'UI display'],
      icon: ArrowUp,
      color: 'bg-green-500'
    },
    {
      title: 'Frontend Data Cleanup Flow',
      description: 'Client-side data disposal and storage cleanup',
      steps: ['Identify stored data', 'Clear browser storage', 'Remove session data', 'Clear cache', 'Confirm cleanup'],
      icon: ArrowDown,
      color: 'bg-red-500'
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation - EU data protection law',
      icon: Shield,
      requirements: ['Data minimization', 'Consent management', 'Right to be forgotten', 'Data portability', 'Breach notification'],
      region: 'European Union'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act - California privacy law',
      icon: Shield,
      requirements: ['Right to know', 'Right to delete', 'Opt-out rights', 'Non-discrimination', 'Data transparency'],
      region: 'California, USA'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act - Healthcare data protection',
      icon: Shield,
      requirements: ['Administrative safeguards', 'Physical safeguards', 'Technical safeguards', 'Breach notification', 'Access controls'],
      region: 'United States'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard - Payment card protection',
      icon: CreditCard,
      requirements: ['Network security', 'Data protection', 'Vulnerability testing', 'Access control', 'Monitoring'],
      region: 'Global'
    }
  ];

  const dataProtectionTools = [
    {
      name: 'crypto-js',
      description: 'JavaScript library for client-side cryptography and data encryption',
      icon: Lock,
      features: ['AES encryption', 'Hash functions', 'HMAC', 'PBKDF2', 'Encoding support'],
      category: 'Frontend Encryption'
    },
    {
      name: 'Web Crypto API',
      description: 'Browser-native cryptographic operations for secure data handling',
      icon: Shield,
      features: ['Native encryption', 'Key generation', 'Digital signatures', 'Hash functions', 'Random generation'],
      category: 'Browser Security'
    },
    {
      name: 'react-secure-storage',
      description: 'Secure storage solution for React applications with encryption',
      icon: Database,
      features: ['Encrypted storage', 'Auto-expiration', 'Cross-tab sync', 'TypeScript support', 'Easy integration'],
      category: 'Frontend Storage'
    },
    {
      name: 'CookieConsent',
      description: 'Frontend cookie consent management and privacy compliance',
      icon: UserCheck,
      features: ['GDPR compliance', 'Customizable UI', 'Consent logging', 'Category management', 'Multi-language'],
      category: 'Privacy Compliance'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Data Protection"
        description="Master frontend data protection strategies for securing sensitive information, ensuring privacy compliance, and implementing robust data handling practices in modern web applications"
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
                  Understanding Data Protection
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Data protection encompasses the strategies, technologies, and practices used to safeguard sensitive information 
                  from unauthorized access, use, disclosure, alteration, or destruction. Learn essential frontend approaches 
                  for implementing robust data protection, ensuring privacy compliance, and building user trust.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Core Principles
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Confidentiality:</strong> Protecting data from unauthorized access
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Integrity:</strong> Ensuring data accuracy and completeness
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Availability:</strong> Ensuring data is accessible when needed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Privacy:</strong> Protecting personal and sensitive information
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
                      <strong>Regulatory Compliance:</strong> Meeting legal requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Classification:</strong> Categorizing data by sensitivity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Risk Assessment:</strong> Identifying and mitigating risks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>User Trust:</strong> Building confidence through transparency
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Database className="w-6 h-6 text-blue-500" />
              Data Protection Strategies
            </CardTitle>
            <CardDescription>
              Essential approaches for securing and protecting sensitive data in frontend applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataProtectionStrategies.map((strategy, index) => (
                <DataProtectionStrategyCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Flows */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="w-6 h-6 text-green-500" />
              Data Protection Flows
            </CardTitle>
            <CardDescription>
              Secure data handling workflows and their implementation patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {dataFlows.map((flow, index) => (
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

        {/* Compliance Frameworks */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ShieldCheck className="w-6 h-6 text-purple-500" />
              Compliance Frameworks
            </CardTitle>
            <CardDescription>
              Major regulatory frameworks and their data protection requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <framework.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {framework.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {framework.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {framework.requirements.slice(0, 3).map((requirement, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-1">Region:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {framework.region}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Protection Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-orange-500" />
              Data Protection Tools
            </CardTitle>
            <CardDescription>
              Essential platforms and services for implementing data protection strategies
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataProtectionTools.map((tool, index) => (
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
                  Frontend Data Protection Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing client-side data protection strategies and ensuring user privacy
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
                      Encrypt sensitive data on the client side before transmission
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper input validation and sanitization in forms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use secure browser storage with encryption for sensitive data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement Content Security Policy (CSP) headers for XSS protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use privacy-first analytics with user consent management
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
                      Don't store sensitive data in plain text localStorage or sessionStorage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't transmit sensitive data over unencrypted HTTP connections
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore client-side data validation and sanitization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't skip implementing proper cookie consent and privacy notices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget to implement secure data cleanup on logout
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

export default DataProtection;
