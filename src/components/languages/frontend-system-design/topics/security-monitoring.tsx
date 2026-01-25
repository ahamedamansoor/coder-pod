'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Shield,
  Eye,
  AlertTriangle,
  Bell,
  Activity,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Clock,
  Timer,
  RefreshCw,
  Search,
  Filter,
  Settings,
  CheckCircle,
  AlertCircle,
  Info,
  Target,
  Users,
  Database,
  FileText,
  Cloud,
  Server,
  Key,
  Lock,
  EyeOff,
  Ban,
  ShieldCheck,
  ShieldOff,
  User,
  UserCheck,
  UserX,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Router,
  Cable,
  Usb,
  BarChart3,
  PieChart,
  LineChart,
  Gauge,
  TrendingDown,
  AlertCircle as AlertIcon,
  Camera,
  CameraOff,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Fingerprint,
  CreditCard,
  Mail,
  Phone,
  MessageSquare,
  QrCode,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Anchor,
  Bookmark,
  Code,
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
  HardDrive,
  Battery,
  Thermometer,
  Flame,
  Droplet,
  Wind,
  Sun,
  Moon,
  Star,
  StarHalf,
  StarOff,
  Award,
  Crown,
  ZapOff,
  Trash2,
  Archive,
  DownloadCloud,
  UploadCloud,
  CloudOff,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
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
  Calculator,
  DollarSign,
  Euro,
  Receipt,
  Package,
  Box,
  PackageOpen,
  Truck,
  Folder,
  FolderOpen,
  Radio
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityMonitoringStrategyProps {
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

const SecurityMonitoringStrategyCard: React.FC<SecurityMonitoringStrategyProps> = ({ 
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

const SecurityMonitoring: React.FC = () => {
  const securityMonitoringStrategies = [
    {
      title: 'Real-time Threat Detection',
      description: 'Monitoring and detecting security threats in real-time from the frontend',
      icon: Eye,
      color: 'bg-blue-500',
      category: 'Detection',
      complexity: 'High',
      frameworks: {
        react: ['React Security Monitor', 'WebSockets', 'Event listeners', 'Security hooks'],
        angular: ['Security interceptors', 'Event monitoring', 'Real-time services', 'Security guards'],
        vue: ['Security plugins', 'Event watchers', 'Real-time composables', 'Security directives']
      },
      benefits: [
        'Immediate threat detection',
        'Proactive security response',
        'Real-time user protection',
        'Attack pattern recognition',
        'Behavioral analysis',
        'Incident prevention'
      ],
      challenges: [
        'Performance overhead',
        'False positives',
        'Resource consumption',
        'Privacy concerns',
        'Implementation complexity'
      ],
      threats: ['XSS attacks', 'CSRF attempts', 'Malicious scripts', 'Unauthorized access', 'Data exfiltration']
    },
    {
      title: 'Client-Side Logging',
      description: 'Implementing secure logging mechanisms for security events on the client',
      icon: FileText,
      color: 'bg-green-500',
      category: 'Logging',
      complexity: 'Medium',
      frameworks: {
        react: ['React Logger', 'Security logging hooks', 'Error boundaries', 'Log aggregation'],
        angular: ['Logging services', 'Error interceptors', 'Log formatters', 'Security logging'],
        vue: ['Logging plugins', 'Error handlers', 'Log composables', 'Security utilities']
      },
      benefits: [
        'Security event tracking',
        'Incident investigation',
        'Compliance support',
        'Audit trail creation',
        'Debugging capabilities',
        'Forensic analysis'
      ],
      challenges: [
        'Log storage limits',
        'Privacy compliance',
        'Performance impact',
        'Log tampering risks',
        'Data volume management'
      ],
      threats: ['Log injection', 'Data leakage', 'Privacy violations', 'Log manipulation', 'Storage attacks']
    },
    {
      title: 'Security Event Analytics',
      description: 'Analyzing security events and patterns from frontend data',
      icon: BarChart3,
      color: 'bg-purple-500',
      category: 'Analytics',
      complexity: 'High',
      frameworks: {
        react: ['React Analytics', 'Security dashboards', 'Data visualization', 'Pattern analysis'],
        angular: ['Analytics services', 'Security dashboards', 'Chart components', 'Data analysis'],
        vue: ['Analytics plugins', 'Security widgets', 'Chart libraries', 'Pattern detection']
      },
      benefits: [
        'Threat pattern identification',
        'Security trend analysis',
        'Risk assessment',
        'Predictive security',
        'Performance metrics',
        'Compliance reporting'
      ],
      challenges: [
        'Data processing complexity',
        'Real-time analysis requirements',
        'Visualization challenges',
        'Resource intensive',
        'Privacy regulations'
      ],
      threats: ['Data poisoning', 'Analytics bypass', 'Pattern evasion', 'Data manipulation', 'Privacy breaches']
    },
    {
      title: 'Browser Security Monitoring',
      description: 'Monitoring browser security features and detecting vulnerabilities',
      icon: Monitor,
      color: 'bg-red-500',
      category: 'Browser Security',
      complexity: 'Medium',
      frameworks: {
        react: ['Browser security hooks', 'Security APIs', 'Feature detection', 'Vulnerability scanning'],
        angular: ['Browser security services', 'Security APIs', 'Feature detection', 'Security monitoring'],
        vue: ['Browser security plugins', 'Security utilities', 'Feature detection', 'Vulnerability checks']
      },
      benefits: [
        'Browser vulnerability detection',
        'Security feature monitoring',
        'Compatibility verification',
        'Risk assessment',
        'User protection',
        'Compliance checking'
      ],
      challenges: [
        'Browser compatibility',
        'API limitations',
        'Feature detection complexity',
        'Performance impact',
        'Maintenance overhead'
      ],
      threats: ['Browser exploits', 'Outdated browsers', 'Disabled security features', 'Vulnerability attacks', 'Compatibility issues']
    },
    {
      title: 'Network Security Monitoring',
      description: 'Monitoring network requests and detecting suspicious activities',
      icon: Wifi,
      color: 'bg-cyan-500',
      category: 'Network Security',
      complexity: 'High',
      frameworks: {
        react: ['Network interceptors', 'Request monitoring', 'Traffic analysis', 'Security middleware'],
        angular: ['HTTP interceptors', 'Network monitoring', 'Traffic analysis', 'Security guards'],
        vue: ['Network plugins', 'Request watchers', 'Traffic analysis', 'Security middleware']
      },
      benefits: [
        'Network threat detection',
        'Traffic analysis',
        'Anomaly detection',
        'Performance monitoring',
        'Security enforcement',
        'Compliance support'
      ],
      challenges: [
        'Performance overhead',
        'Privacy concerns',
        'Implementation complexity',
        'Browser limitations',
        'Data volume'
      ],
      threats: ['Man-in-the-middle attacks', 'Network injection', 'Data interception', 'Traffic analysis', 'Unauthorized access']
    },
    {
      title: 'User Behavior Monitoring',
      description: 'Monitoring user behavior patterns for security anomaly detection',
      icon: Users,
      color: 'bg-orange-500',
      category: 'Behavioral Security',
      complexity: 'High',
      frameworks: {
        react: ['Behavior analytics', 'User tracking', 'Pattern recognition', 'Anomaly detection'],
        angular: ['Behavior services', 'User analytics', 'Pattern analysis', 'Anomaly detection'],
        vue: ['Behavior plugins', 'User tracking', 'Pattern libraries', 'Anomaly composables']
      },
      benefits: [
        'Anomaly detection',
        'Fraud prevention',
        'User experience insights',
        'Security automation',
        'Risk assessment',
        'Compliance support'
      ],
      challenges: [
        'Privacy compliance',
        'Data collection ethics',
        'False positive rates',
        'Performance impact',
        'User acceptance'
      ],
      threats: ['Account takeover', 'Behavioral spoofing', 'Privacy violations', 'Data misuse', 'User profiling']
    }
  ];

  const monitoringFlows = [
    {
      title: 'Security Event Detection Flow',
      description: 'Frontend process for detecting and handling security events',
      steps: ['Event occurrence', 'Pattern matching', 'Threat classification', 'Alert generation', 'Response initiation'],
      icon: ArrowRight,
      color: 'bg-blue-500'
    },
    {
      title: 'Security Alert Processing Flow',
      description: 'Processing and responding to security alerts in the frontend',
      steps: ['Alert received', 'Severity assessment', 'User notification', 'Response action', 'Event logging'],
      icon: ArrowUp,
      color: 'bg-red-500'
    },
    {
      title: 'Security Data Analysis Flow',
      description: 'Analyzing security data for patterns and insights',
      steps: ['Data collection', 'Pattern analysis', 'Anomaly detection', 'Risk scoring', 'Report generation'],
      icon: ArrowDown,
      color: 'bg-green-500'
    }
  ];

  const securityMetrics = [
    {
      name: 'Threat Detection Rate',
      description: 'Percentage of security threats successfully detected',
      icon: Target,
      calculation: 'Detected threats / Total threats × 100',
      target: '> 95%',
      category: 'Detection'
    },
    {
      name: 'False Positive Rate',
      description: 'Percentage of legitimate activities flagged as threats',
      icon: AlertTriangle,
      calculation: 'False positives / Total alerts × 100',
      target: '< 5%',
      category: 'Accuracy'
    },
    {
      name: 'Response Time',
      description: 'Average time to detect and respond to security events',
      icon: Timer,
      calculation: 'Detection time + Response time',
      target: '< 5 seconds',
      category: 'Performance'
    },
    {
      name: 'Security Coverage',
      description: 'Percentage of application components monitored',
      icon: Shield,
      calculation: 'Monitored components / Total components × 100',
      target: '> 90%',
      category: 'Coverage'
    }
  ];

  const monitoringTools = [
    {
      name: 'Sentry',
      description: 'Error tracking and performance monitoring for frontend applications',
      icon: AlertCircle,
      features: ['Error tracking', 'Performance monitoring', 'Security alerts', 'Release tracking', 'User feedback'],
      category: 'Error Monitoring'
    },
    {
      name: 'LogRocket',
      description: 'Frontend session replay and error monitoring',
      icon: Video,
      features: ['Session replay', 'Error tracking', 'User behavior', 'Performance metrics', 'Security insights'],
      category: 'Session Monitoring'
    },
    {
      name: 'Datadog RUM',
      description: 'Real user monitoring and frontend performance tracking',
      icon: Activity,
      features: ['Real user monitoring', 'Performance tracking', 'Error analysis', 'User journey', 'Security events'],
      category: 'Performance Monitoring'
    },
    {
      name: 'Google Analytics',
      description: 'User behavior analytics and security event tracking',
      icon: BarChart3,
      features: ['User analytics', 'Event tracking', 'Custom reports', 'Real-time data', 'Security insights'],
      category: 'Analytics'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Security Monitoring"
        description="Master frontend security monitoring strategies for real-time threat detection, security event tracking, and implementing comprehensive security observability in modern web applications"
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
                  Understanding Frontend Security Monitoring
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Security monitoring from a frontend perspective focuses on detecting, analyzing, and responding to 
                  security threats in real-time within the browser environment. Learn essential strategies for implementing 
                  comprehensive security observability, threat detection, and incident response in modern web applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Frontend Monitoring Focus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Real-time Detection:</strong> Immediate threat identification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Client-Side Analysis:</strong> Browser-based security monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>User Behavior:</strong> Anomaly detection and pattern analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Event Tracking:</strong> Security event logging and analysis
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
                      <strong>Privacy Compliance:</strong> Balancing security with user privacy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Performance Impact:</strong> Minimizing monitoring overhead
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>False Positives:</strong> Reducing incorrect threat detection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Real-time Response:</strong> Immediate security incident handling
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Monitoring Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Eye className="w-6 h-6 text-blue-500" />
              Frontend Security Monitoring Strategies
            </CardTitle>
            <CardDescription>
              Essential approaches for implementing comprehensive security monitoring in frontend applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMonitoringStrategies.map((strategy, index) => (
                <SecurityMonitoringStrategyCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Flows */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="w-6 h-6 text-green-500" />
              Security Monitoring Flows
            </CardTitle>
            <CardDescription>
              Real-time security monitoring workflows and incident response processes
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {monitoringFlows.map((flow, index) => (
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

        {/* Security Metrics */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gauge className="w-6 h-6 text-purple-500" />
              Security Monitoring Metrics
            </CardTitle>
            <CardDescription>
              Key performance indicators for measuring frontend security monitoring effectiveness
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMetrics.map((metric, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <metric.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {metric.name}
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
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Calculation:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          {metric.calculation}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Target:</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{metric.target}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-1">Category:</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{metric.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-orange-500" />
              Frontend Security Monitoring Tools
            </CardTitle>
            <CardDescription>
              Essential platforms and services for implementing security monitoring in frontend applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringTools.map((tool, index) => (
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
                  Frontend Security Monitoring Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing effective and secure monitoring systems in frontend applications
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
                      Implement real-time threat detection and response mechanisms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Monitor user behavior patterns for anomaly detection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement secure logging with privacy protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use performance-optimized monitoring to minimize impact
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper error handling and security event classification
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
                      Don't compromise user privacy for security monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore performance impact of monitoring systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't store sensitive monitoring data in plain text
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore false positives in threat detection systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't skip user consent for behavioral monitoring
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

export default SecurityMonitoring;
