'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Wifi,
  Server,
  Monitor,
  Code,
  CheckCircle,
  AlertCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  Settings,
  Link,
  Lock,
  Key,
  Globe,
  Shield,
  Activity,
  Network,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  ArrowRight,
  Zap,
  Target,
  Clock,
  Users,
  Cpu,
  HardDrive,
  Terminal,
  Command,
  Power,
  Plus,
  Minus,
  Download,
  Upload,
  FileText,
  Database,
  Cloud,
  Truck,
  Package,
  Box,
  GitBranch,
  Layers,
  BarChart3,
  PieChart,
  TrendingUp,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  Edit,
  Save,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  BookOpen,
  Video,
  PlayCircle,
  PauseCircle,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Expand,
  Shrink,
  Move,
  MousePointer,
  Touchpad,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export function RemoteWebDriverComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp' | 'javascript'>('java');
  const [selectedOS, setSelectedOS] = useState<'windows' | 'macos' | 'linux'>('windows');
  const [selectedConnection, setSelectedConnection] = useState<'direct' | 'hub' | 'cloud'>('hub');
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({ main: true });

  const getPlatformConfig = (os: string) => {
    const configs = {
      windows: {
        platform: 'Windows',
        version: '10',
        capabilities: {
          'screenResolution': '1920x1080',
          'timezone': 'UTC'
        }
      },
      macos: {
        platform: 'macOS',
        version: '14',
        capabilities: {
          'screenResolution': '1920x1080',
          'timezone': 'PST'
        }
      },
      linux: {
        platform: 'Linux',
        version: 'Ubuntu 20.04',
        capabilities: {
          'screenResolution': '1920x1080',
          'timezone': 'UTC'
        }
      }
    };
    return configs[os as keyof typeof configs];
  };

  const getConnectionExample = (language: string, connection: string, os: string) => {
    const config = getPlatformConfig(os);
    const languageLabel = language.charAt(0).toUpperCase() + language.slice(1);
    const connectionLabel = connection.charAt(0).toUpperCase() + connection.slice(1);
    return `// ${languageLabel} ${connectionLabel} connection
// Platform: ${config.platform} ${config.version}
// Endpoint: example-remote-url
// Add your full code sample here based on the selected options.`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const toggleCodeVisibility = (codeId: string) => {
    setShowCode(prev => ({
      ...prev,
      [codeId]: !prev[codeId]
    }));
  };

  const connectionTypes = [
    {
      type: 'direct' as const,
      title: 'Direct Connection',
      description: 'Connect directly to a remote WebDriver server',
      icon: <Link className="w-6 h-6" />,
      useCase: 'Single remote machine testing',
      pros: ['Simple setup', 'Direct control', 'Fast response'],
      cons: ['No load balancing', 'Single point of failure', 'Limited scalability']
    },
    {
      type: 'hub' as const,
      title: 'Grid Hub Connection',
      description: 'Connect through Selenium Grid hub for load balancing',
      icon: <Server className="w-6 h-6" />,
      useCase: 'Multiple browsers and platforms',
      pros: ['Load balancing', 'Parallel execution', 'Scalable'],
      cons: ['Complex setup', 'Hub dependency', 'Network overhead']
    },
    {
      type: 'cloud' as const,
      title: 'Cloud Platform Connection',
      description: 'Connect to cloud testing platforms like BrowserStack',
      icon: <Cloud className="w-6 h-6" />,
      useCase: 'Professional testing infrastructure',
      pros: ['No maintenance', 'Wide browser coverage', 'Professional support'],
      cons: ['Cost', 'Internet dependency', 'Vendor lock-in']
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Wifi}
        category="Selenium · Grid"
        title="Remote WebDriver"
        description="Learn how to connect to remote WebDriver instances across different architectures and platforms."
        colorTheme="blue"
      />

      {/* Connection Types */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Connection Types
          </CardTitle>
          <CardDescription>
            Choose the appropriate connection method for your testing needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {connectionTypes.map((conn) => (
              <Card
                key={conn.type}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedConnection === conn.type
                    ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/30'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedConnection(conn.type)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      {conn.icon}
                    </div>
                    <div>
                      <CardTitle className="text-sm">{conn.title}</CardTitle>
                      <CardDescription className="text-xs">{conn.useCase}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {conn.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-green-700 dark:text-green-400">Pros:</div>
                    {conn.pros.map((pro, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {pro}
                      </div>
                    ))}
                    <div className="text-xs font-medium text-red-700 dark:text-red-400 mt-2">Cons:</div>
                    {conn.cons.map((con, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <AlertCircle className="w-3 h-3 text-red-500" />
                        {con}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Language & OS Selection */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Configuration Selection
          </CardTitle>
          <CardDescription>
            Select your preferred programming language and operating system for code examples
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Programming Language
              </label>
              <div className="flex gap-3">
                {[
                  { lang: 'java' as const, name: 'Java', recommended: true },
                  { lang: 'python' as const, name: 'Python', recommended: false },
                  { lang: 'javascript' as const, name: 'JavaScript', recommended: false },
                  { lang: 'csharp' as const, name: 'C#', recommended: false }
                ].map((option) => (
                  <Button
                    key={option.lang}
                    variant={selectedLanguage === option.lang ? 'default' : 'outline'}
                    onClick={() => setSelectedLanguage(option.lang)}
                    className="flex items-center gap-2"
                  >
                    {option.name}
                    {option.recommended && (
                      <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Operating System
              </label>
              <div className="flex gap-3">
                {[
                  { os: 'windows' as const, name: 'Windows', icon: <Monitor className="w-4 h-4" /> },
                  { os: 'macos' as const, name: 'macOS', icon: <Laptop className="w-4 h-4" /> },
                  { os: 'linux' as const, name: 'Linux', icon: <Terminal className="w-4 h-4" /> }
                ].map((option) => (
                  <Button
                    key={option.os}
                    variant={selectedOS === option.os ? 'default' : 'outline'}
                    onClick={() => setSelectedOS(option.os)}
                    className="flex items-center gap-2"
                  >
                    {option.icon}
                    {option.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Code Implementation
          </CardTitle>
          <CardDescription>
            Complete code examples for {connectionTypes.find(c => c.type === selectedConnection)?.title} on {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
              <Info className="w-4 h-4" />
              <span>Showing {selectedLanguage} • {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)} • {selectedConnection} connection</span>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-sm capitalize">
                {selectedLanguage} • {selectedConnection} • {selectedOS}
              </h4>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCodeVisibility('main')}
                >
                  {showCode['main'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(getConnectionExample(selectedLanguage, selectedConnection, selectedOS), 'Code example')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {showCode['main'] && (
              <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{getConnectionExample(selectedLanguage, selectedConnection, selectedOS)}</pre>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Platform-Specific Configurations */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            Platform-Specific Configurations
          </CardTitle>
          <CardDescription>
            Additional configurations for different operating systems
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Windows Configuration */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-base mb-3 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-blue-500" />
              Windows Configuration
            </h4>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
              <pre className="text-blue-600 dark:text-blue-300">{`// Windows-specific options
options.addArguments("--no-sandbox");
options.addArguments("--disable-dev-shm-usage");
options.setPlatformName("Windows");
options.setBrowserVersion("120");`}</pre>
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Chrome on Windows 10/11 with standard options and no-sandbox for security
            </div>
          </div>
          
          {/* macOS Configuration */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-base mb-3 flex items-center gap-2">
              <Laptop className="w-4 h-4 text-purple-500" />
              macOS Configuration
            </h4>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
              <pre className="text-purple-600 dark:text-purple-300">{`// macOS-specific options
options.addArguments("--no-sandbox");
options.addArguments("--disable-dev-shm-usage");
options.setPlatformName("macOS");
options.setBrowserVersion("120");`}</pre>
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Chrome on macOS 14 (Sonoma) with native options and optimized performance
            </div>
          </div>
          
          {/* Linux Configuration */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-base mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-green-500" />
              Linux Configuration
            </h4>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
              <pre className="text-green-600 dark:text-green-300">{`// Linux-specific options
options.addArguments("--no-sandbox");
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--headless");
options.setPlatformName("Linux");`}</pre>
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Chrome on Ubuntu 20.04 with headless mode for server environments
            </div>
          </div>
          
          {/* JavaScript Configuration */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-base mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-yellow-500" />
              JavaScript Configuration
            </h4>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
              <pre className="text-yellow-600 dark:text-yellow-300">{`// JavaScript-specific options
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');
options.setPlatformName('Windows');
options.setBrowserVersion('120');

const driver = await new Builder()
  .forBrowser('chrome')
  .usingServer('http://localhost:4444')
  .withCapabilities(options)
  .build();`}</pre>
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Node.js Selenium WebDriver with async/await and Chrome options
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-orange-900 dark:text-orange-100">Connection Management</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Always use try-catch blocks for connection errors
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Implement proper timeout configurations
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Use connection pooling for high-volume testing
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-orange-900 dark:text-orange-100">Security Considerations</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Use HTTPS for cloud platform connections
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Store credentials securely, never in code
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Implement proper authentication and authorization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Alert className="border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-950/20">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <AlertTitle className="text-red-900 dark:text-red-100">Common Issues & Solutions</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200 space-y-2">
          <div>• <strong>Connection Timeout:</strong> Check network connectivity and firewall settings</div>
          <div>• <strong>Browser Not Found:</strong> Verify browser installation and driver compatibility</div>
          <div>• <strong>Session Not Created:</strong> Ensure requested capabilities match available nodes</div>
          <div>• <strong>Hub Unavailable:</strong> Verify hub is running and accessible from the client</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
