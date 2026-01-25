'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Shield,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
  Info,
  Target,
  Users,
  Globe,
  Server,
  Database,
  Key,
  Zap,
  Cpu,
  Monitor,
  Smartphone,
  Wifi,
  Cloud,
  FileText,
  Code,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Activity,
  Settings,
  Search,
  Filter,
  Bell,
  Award,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityConceptProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  diagram: React.ReactNode;
  threats: string[];
  protections: string[];
}

const SecurityConceptCard: React.FC<SecurityConceptProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  diagram,
  threats,
  protections
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
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Diagram Section */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-500" />
              Visual Diagram
            </h4>
            <div className="flex justify-center">
              {diagram}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Protection Strategies</h4>
            <div className="flex flex-wrap gap-1">
              {protections.slice(0, isExpanded ? protections.length : 3).map((protection, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                  {protection}
                </span>
              ))}
              {!isExpanded && protections.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{protections.length - 3} more
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
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Implementation Notes</h4>
                <div className="flex flex-wrap gap-1">
                  <span key={0} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                    Framework Integration
                  </span>
                  <span key={1} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                    Security Best Practices
                  </span>
                  <span key={2} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                    Regular Audits
                  </span>
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

const SecurityFundamentals: React.FC = () => {
  // Diagram Components
  const AuthenticationDiagram = () => (
    <div className="flex items-center gap-2 text-xs">
      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      </div>
      <ArrowRight className="w-3 h-3 text-slate-400" />
      <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-700">
        <Key className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
      </div>
      <ArrowRight className="w-3 h-3 text-slate-400" />
      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
        <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
      </div>
      <div className="ml-2 text-slate-600 dark:text-slate-400">
        <div>Login → Verify → Access</div>
      </div>
    </div>
  );

  const DataEncryptionDiagram = () => (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
          <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
          <Lock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
          <Cloud className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        Plain Data → Encrypt → Store Securely
      </div>
    </div>
  );

  const NetworkSecurityDiagram = () => (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded border border-red-300 dark:border-red-700">
          <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
          <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
          <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        Threat → Firewall → Safe Access
      </div>
    </div>
  );

  const XSSProtectionDiagram = () => (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded border border-orange-300 dark:border-orange-700">
          <Code className="w-4 h-4 text-orange-600 dark:text-orange-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
          <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        Input → Sanitize → Safe Render
      </div>
    </div>
  );

  const CSRFProtectionDiagram = () => (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
          <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
          <Key className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
          <Server className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        Request → Token → Verify → Process
      </div>
    </div>
  );

  const SecureStorageDiagram = () => (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
          <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-700">
          <Lock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
        </div>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
          <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        Data → Encrypt → Store Securely
      </div>
    </div>
  );

  const securityConcepts = [
    {
      title: 'Authentication & Authorization',
      description: 'Verify user identity and control access to resources',
      icon: Lock,
      color: 'bg-blue-500',
      diagram: <AuthenticationDiagram />,
      threats: [
        'Password attacks',
        'Credential stuffing',
        'Session hijacking',
        'Brute force attacks',
        'Social engineering'
      ],
      protections: [
        'Multi-factor authentication',
        'Strong password policies',
        'Session management',
        'OAuth/OpenID Connect',
        'Rate limiting'
      ]
    },
    {
      title: 'Data Encryption',
      description: 'Protect sensitive data through encryption at rest and in transit',
      icon: Shield,
      color: 'bg-purple-500',
      diagram: <DataEncryptionDiagram />,
      threats: [
        'Data breaches',
        'Man-in-the-middle attacks',
        'Unauthorized access',
        'Data interception',
        'Storage compromise'
      ],
      protections: [
        'HTTPS/TLS encryption',
        'End-to-end encryption',
        'Database encryption',
        'Key management',
        'Certificate pinning'
      ]
    },
    {
      title: 'Network Security',
      description: 'Secure communication channels and protect against network attacks',
      icon: Globe,
      color: 'bg-green-500',
      diagram: <NetworkSecurityDiagram />,
      threats: [
        'DDoS attacks',
        'Network sniffing',
        'DNS attacks',
        'Man-in-the-middle',
        'Port scanning'
      ],
      protections: [
        'Firewalls',
        'CDN protection',
        'Network segmentation',
        'VPN tunnels',
        'DDoS mitigation'
      ]
    },
    {
      title: 'XSS Protection',
      description: 'Prevent Cross-Site Scripting attacks through input validation',
      icon: Code,
      color: 'bg-orange-500',
      diagram: <XSSProtectionDiagram />,
      threats: [
        'Stored XSS',
        'Reflected XSS',
        'DOM-based XSS',
        'Script injection',
        'Content spoofing'
      ],
      protections: [
        'Input sanitization',
        'Output encoding',
        'Content Security Policy',
        'X-XSS-Protection headers',
        'Framework protections'
      ]
    },
    {
      title: 'CSRF Protection',
      description: 'Prevent Cross-Site Request Forgery attacks with tokens',
      icon: Key,
      color: 'bg-cyan-500',
      diagram: <CSRFProtectionDiagram />,
      threats: [
        'State-changing requests',
        'Unauthorized actions',
        'Form hijacking',
        'Token theft',
        'Session exploitation'
      ],
      protections: [
        'CSRF tokens',
        'SameSite cookies',
        'Origin verification',
        'Double submit cookies',
        'Custom headers'
      ]
    },
    {
      title: 'Secure Storage',
      description: 'Safely store sensitive data on client and server sides',
      icon: Database,
      color: 'bg-red-500',
      diagram: <SecureStorageDiagram />,
      threats: [
        'Local storage access',
        'Database breaches',
        'Memory dumps',
        'Cache exposure',
        'Backup theft'
      ],
      protections: [
        'Encrypted storage',
        'Secure cookies',
        'Memory cleanup',
        'Database encryption',
        'Secure backups'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Security Fundamentals"
        description="Master frontend security principles with visual diagrams to understand threats, vulnerabilities, and protection strategies for modern web applications"
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
                  Understanding Frontend Security
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Frontend security is crucial for protecting user data and preventing attacks. 
                  Learn the fundamental security concepts through visual diagrams that make complex 
                  security principles easy to understand and implement.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Security Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Protects sensitive user data and privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Prevents financial and reputational damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Ensures regulatory compliance and trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Maintains application availability and integrity</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Security Mindset
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Defense in Depth:</strong> Multiple security layers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Least Privilege:</strong> Minimum necessary access
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Zero Trust:</strong> Verify everything, trust nothing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Security by Design:</strong> Built from the ground up
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Concepts with Diagrams */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6 text-blue-500" />
              Security Concepts with Visual Diagrams
            </CardTitle>
            <CardDescription>
              Core security principles explained through easy-to-understand visual diagrams
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityConcepts.map((concept, index) => (
                <SecurityConceptCard 
                  key={index} 
                  {...concept} 
                />
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
                  Security Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing robust security in frontend applications
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
                      Always validate and sanitize user inputs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use HTTPS for all communications
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
                      Keep dependencies updated and secure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use security headers and CSP policies
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't store sensitive data in localStorage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't trust client-side validation only
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't expose API keys or secrets in frontend
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore security headers and policies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't skip regular security audits and testing
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

export default SecurityFundamentals;
