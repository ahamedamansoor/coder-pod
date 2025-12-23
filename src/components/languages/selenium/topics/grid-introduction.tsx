'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Grid3x3,
  Server,
  Monitor,
  Wifi,
  Users,
  Zap,
  Target,
  Settings,
  Play,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Cpu,
  HardDrive,
  Network,
  Shield,
  Activity,
  Layers,
  GitBranch,
  Box,
  Package,
  Truck,
  Cloud,
  Database,
  Code,
  Terminal,
  Command,
  Power,
  RefreshCw,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Link,
  Unlink,
  Download,
  Upload,
  FileText,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  Copy,
  Trash2,
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

export function GridIntroductionComponent() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Grid architecture visualization data
  const [nodes, setNodes] = useState([
    { id: 'hub', type: 'hub', status: 'active', connections: ['node1', 'node2', 'node3'] },
    { id: 'node1', type: 'node', status: 'active', browser: 'chrome', platform: 'windows' },
    { id: 'node2', type: 'node', status: 'active', browser: 'firefox', platform: 'mac' },
    { id: 'node3', type: 'node', status: 'idle', browser: 'edge', platform: 'linux' }
  ]);

  const [testRequests, setTestRequests] = useState([
    { id: 1, status: 'pending', target: 'chrome', assigned: null },
    { id: 2, status: 'running', target: 'firefox', assigned: 'node2' },
    { id: 3, status: 'completed', target: 'edge', assigned: 'node3' }
  ]);

  const steps = [
    {
      step: 1,
      action: 'init',
      title: '🚀 What is Selenium Grid?',
      description: 'Selenium Grid is a powerful tool that enables parallel test execution across multiple machines, browsers, and operating systems simultaneously.',
      highlight: 'hub',
      codeLine: 1,
      var1: 'Hub',
      var2: 'Nodes',
      var3: 'Tests'
    },
    {
      step: 2,
      action: 'setup',
      title: '🏗️ Grid Architecture',
      description: 'The Grid consists of a central Hub that manages multiple Node machines. Each Node registers with the Hub and makes its browser capabilities available.',
      highlight: 'nodes',
      codeLine: 2,
      var1: 'Hub',
      var2: '3 Nodes',
      var3: 'Ready'
    },
    {
      step: 3,
      action: 'connect',
      title: '🔗 Node Registration',
      description: 'Nodes automatically register with the Hub, reporting their available browsers, versions, and platform capabilities.',
      highlight: 'node1',
      codeLine: 3,
      var1: 'Node 1',
      var2: 'Chrome',
      var3: 'Windows'
    },
    {
      step: 4,
      action: 'request',
      title: '📤 Test Request',
      description: 'When a test requests a specific browser capability, the Hub routes the request to an appropriate Node that matches those requirements.',
      highlight: 'hub',
      codeLine: 4,
      var1: 'Request',
      var2: 'Chrome',
      var3: 'Pending'
    },
    {
      step: 5,
      action: 'route',
      title: '🎯 Smart Routing',
      description: 'The Hub intelligently routes test requests to available nodes based on browser type, version, platform, and current load.',
      highlight: 'node1',
      codeLine: 5,
      var1: 'Routed',
      var2: 'Node 1',
      var3: 'Chrome'
    },
    {
      step: 6,
      action: 'execute',
      title: '⚡ Parallel Execution',
      description: 'Multiple tests run simultaneously across different nodes, dramatically reducing total execution time.',
      highlight: 'node2',
      codeLine: 6,
      var1: 'Running',
      var2: 'Firefox',
      var3: 'Active'
    },
    {
      step: 7,
      action: 'result',
      title: '📊 Results Collection',
      description: 'Test results are sent back from nodes to the hub, which aggregates and returns them to the test client.',
      highlight: 'hub',
      codeLine: 7,
      var1: 'Results',
      var2: 'Collected',
      var3: 'Complete'
    },
    {
      step: 8,
      action: 'scale',
      title: '📈 Scalability',
      description: 'Easily scale your test infrastructure by adding more nodes to handle increased test loads.',
      highlight: 'nodes',
      codeLine: 8,
      var1: 'Scalable',
      var2: 'Dynamic',
      var3: 'Efficient'
    }
  ];

  const getSpeedDelay = () => {
    switch (animationSpeed) {
      case 'slow': return 2000;
      case 'fast': return 500;
      default: return 1000;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsAnimating(false);
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, getSpeedDelay());
  };

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      {
        line: 1,
        code: '// Selenium Grid Hub Configuration',
        active: stepData.codeLine === 1,
        indent: 0
      },
      {
        line: 2,
        code: 'Hub hub = new Hub();',
        active: stepData.codeLine === 2,
        indent: 0
      },
      {
        line: 3,
        code: 'hub.registerNode("http://node1:5555", chromeCapabilities);',
        active: stepData.codeLine === 3,
        indent: 2
      },
      {
        line: 4,
        code: 'DesiredCapabilities caps = new DesiredCapabilities();',
        active: stepData.codeLine === 4,
        indent: 2
      },
      {
        line: 5,
        code: 'caps.setBrowserName("chrome");',
        active: stepData.codeLine === 5,
        indent: 2
      },
      {
        line: 6,
        code: 'WebDriver driver = hub.getDriver(caps);',
        active: stepData.codeLine === 6,
        indent: 2
      },
      {
        line: 7,
        code: 'TestResults results = driver.executeTest();',
        active: stepData.codeLine === 7,
        indent: 2
      },
      {
        line: 8,
        code: 'hub.scaleNodes(5); // Scale to 5 nodes',
        active: stepData.codeLine === 8,
        indent: 0
      }
    ];
  };

  const getNodeIcon = (node: typeof nodes[0]) => {
    if (node.type === 'hub') {
      return <Server className="w-8 h-8" />;
    }
    switch (node.browser) {
      case 'chrome': return <Monitor className="w-6 h-6" />;
      case 'firefox': return <Monitor className="w-6 h-6" />;
      case 'edge': return <Monitor className="w-6 h-6" />;
      default: return <Monitor className="w-6 h-6" />;
    }
  };

  const getNodeColor = (node: typeof nodes[0]) => {
    if (node.type === 'hub') return 'blue';
    switch (node.browser) {
      case 'chrome': return 'green';
      case 'firefox': return 'orange';
      case 'edge': return 'blue';
      default: return 'gray';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'idle': return 'text-yellow-500';
      case 'running': return 'text-blue-500';
      case 'completed': return 'text-green-600';
      case 'pending': return 'text-gray-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Grid3x3}
        category="Selenium · Grid"
        title="Grid Introduction"
        description="Learn how Selenium Grid enables parallel test execution across multiple machines, browsers, and operating systems for scalable test automation."
        colorTheme="blue"
      />

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-lg">Central Hub</CardTitle>
                <CardDescription>Manages and distributes tests</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Test routing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Load balancing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Node management</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle className="text-lg">Grid Nodes</CardTitle>
                <CardDescription>Execute tests on different browsers</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Multiple browsers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cross-platform</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Parallel execution</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-lg">Benefits</CardTitle>
                <CardDescription>Why use Selenium Grid</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>10x faster execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Scalable infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cost effective</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Grid Visualization */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Interactive Grid Architecture
          </CardTitle>
          <CardDescription>
            Visualize how Selenium Grid distributes tests across multiple nodes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Animation Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="w-4 h-4 mr-2" />
                {isAnimating ? 'Running...' : 'Start Animation'}
              </Button>
              <Button
                onClick={resetAnimation}
                variant="outline"
                disabled={isAnimating}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Speed:</span>
              <Button
                variant={animationSpeed === 'slow' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setAnimationSpeed('slow')}
                disabled={isAnimating}
              >
                Slow
              </Button>
              <Button
                variant={animationSpeed === 'normal' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setAnimationSpeed('normal')}
                disabled={isAnimating}
              >
                Normal
              </Button>
              <Button
                variant={animationSpeed === 'fast' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setAnimationSpeed('fast')}
                disabled={isAnimating}
              >
                Fast
              </Button>
            </div>
          </div>

          {/* Grid Visualization */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="relative">
              {/* Hub */}
              <div className="flex justify-center mb-16">
                <div className={`relative transition-all duration-500 ${
                  steps[currentStep]?.highlight === 'hub' ? 'scale-110' : 'scale-100'
                }`}>
                  <div className={`p-6 rounded-2xl border-4 ${
                    steps[currentStep]?.highlight === 'hub' 
                      ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg shadow-blue-500/25' 
                      : 'border-blue-300 bg-blue-50 dark:bg-blue-950/30'
                  }`}>
                    <div className="flex flex-col items-center gap-3">
                      <Server className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                      <div className="text-center">
                        <div className="font-semibold text-blue-900 dark:text-blue-100">Grid Hub</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">Central Controller</div>
                        {steps[currentStep]?.action === 'route' && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            🔄 Routing tests...
                          </div>
                        )}
                        {steps[currentStep]?.action === 'request' && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            📬 Receiving requests...
                          </div>
                        )}
                        {steps[currentStep]?.action === 'result' && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            📈 Collecting results...
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {steps[currentStep]?.highlight === 'hub' && (
                    <div className="absolute -top-2 -right-2">
                      <div className="p-2 bg-green-500 rounded-full animate-pulse">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hub Request Indicator */}
                  {steps[currentStep]?.action === 'request' && (
                    <div className="absolute -top-2 -left-2">
                      <div className="p-2 bg-blue-500 rounded-full animate-bounce">
                        <ArrowDown className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hub Result Indicator */}
                  {steps[currentStep]?.action === 'result' && (
                    <div className="absolute -bottom-2 -left-2">
                      <div className="p-2 bg-green-500 rounded-full animate-bounce">
                        <ArrowUp className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hub Routing Indicator */}
                  {steps[currentStep]?.action === 'route' && (
                    <div className="absolute -top-2 -left-2">
                      <div className="p-2 bg-purple-500 rounded-full animate-spin">
                        <RefreshCw className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step Description - Right Side */}
              <div className="absolute top-0 right-0 -mr-4 mt-8">
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {steps[currentStep]?.action === 'init' && '🏛️ Central Hub manages all test distribution'}
                    {steps[currentStep]?.action === 'setup' && '🔧 Grid Architecture: Hub + 3 Nodes ready'}
                    {steps[currentStep]?.action === 'connect' && '🔌 Node 1 (Chrome) registers with Hub'}
                    {steps[currentStep]?.action === 'request' && '📨 Test request arrives at Hub'}
                    {steps[currentStep]?.action === 'route' && '🎯 Hub routes tests to matching nodes'}
                    {steps[currentStep]?.action === 'execute' && '⚡ Tests run in parallel on all nodes'}
                    {steps[currentStep]?.action === 'result' && '📊 Results flow back to Hub'}
                    {steps[currentStep]?.action === 'scale' && '📈 Grid scales by adding more nodes'}
                  </div>
                </div>
              </div>

              {/* Connection Lines with Animated Pointers */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Connection Lines */}
                <line
                  x1="50%"
                  y1="160"
                  x2="25%"
                  y2="230"
                  stroke={steps[currentStep]?.highlight === 'route' ? '#3b82f6' : '#d1d5db'}
                  strokeWidth={steps[currentStep]?.highlight === 'route' ? '4' : '2'}
                  className="transition-all duration-500"
                  strokeDasharray={steps[currentStep]?.highlight === 'route' ? '10,5' : 'none'}
                >
                  {steps[currentStep]?.highlight === 'route' && (
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;15"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </line>
                <line
                  x1="50%"
                  y1="160"
                  x2="50%"
                  y2="230"
                  stroke={steps[currentStep]?.highlight === 'route' ? '#10b981' : '#d1d5db'}
                  strokeWidth={steps[currentStep]?.highlight === 'route' ? '4' : '2'}
                  className="transition-all duration-500"
                  strokeDasharray={steps[currentStep]?.highlight === 'route' ? '10,5' : 'none'}
                >
                  {steps[currentStep]?.highlight === 'route' && (
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;15"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </line>
                <line
                  x1="50%"
                  y1="160"
                  x2="75%"
                  y2="230"
                  stroke={steps[currentStep]?.highlight === 'route' ? '#f59e0b' : '#d1d5db'}
                  strokeWidth={steps[currentStep]?.highlight === 'route' ? '4' : '2'}
                  className="transition-all duration-500"
                  strokeDasharray={steps[currentStep]?.highlight === 'route' ? '10,5' : 'none'}
                >
                  {steps[currentStep]?.highlight === 'route' && (
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;15"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </line>
                
                {/* Animated Pointers for Route Step */}
                {steps[currentStep]?.highlight === 'route' && (
                  <>
                    <defs>
                      <marker
                        id="pointer-arrow"
                        markerWidth="8"
                        markerHeight="8"
                        refX="4"
                        refY="4"
                        orient="auto"
                      >
                        <circle cx="4" cy="4" r="3" fill="#3b82f6" />
                      </marker>
                    </defs>
                    
                    {/* Pointer to Node 1 */}
                    <circle r="8" fill="#3b82f6" opacity="0.9">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 50% 160 L 25% 230"
                        rotate="auto"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;1;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="r"
                        values="4;8;8;8;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Pointer to Node 2 */}
                    <circle r="8" fill="#10b981" opacity="0.9">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0.7s"
                        path="M 50% 160 L 50% 230"
                        rotate="auto"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;1;0"
                        dur="2s"
                        begin="0.7s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="r"
                        values="4;8;8;8;4"
                        dur="2s"
                        begin="0.7s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Pointer to Node 3 */}
                    <circle r="8" fill="#f59e0b" opacity="0.9">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.4s"
                        path="M 50% 160 L 75% 230"
                        rotate="auto"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;1;0"
                        dur="2s"
                        begin="1.4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="r"
                        values="4;8;8;8;4"
                        dur="2s"
                        begin="1.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Trail effects */}
                    <circle r="4" fill="#3b82f6" opacity="0.5">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 50% 160 L 25% 230"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.5;0.5;0.5;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    <circle r="4" fill="#10b981" opacity="0.5">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0.7s"
                        path="M 50% 160 L 50% 230"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.5;0.5;0.5;0"
                        dur="2s"
                        begin="0.7s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    <circle r="4" fill="#f59e0b" opacity="0.5">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.4s"
                        path="M 50% 160 L 75% 230"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.5;0.5;0.5;0"
                        dur="2s"
                        begin="1.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </>
                )}
                
                {/* Request Flow Arrows */}
                {(steps[currentStep]?.action === 'request' || steps[currentStep]?.action === 'route') && (
                  <>
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3, 0 6"
                          fill="#3b82f6"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="50%"
                      y1="100"
                      x2="50%"
                      y2="120"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      className="animate-pulse"
                    />
                  </>
                )}
                
                {/* Result Flow Arrows */}
                {steps[currentStep]?.action === 'result' && (
                  <>
                    <defs>
                      <marker
                        id="arrowhead-result"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3, 0 6"
                          fill="#10b981"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="25%"
                      y1="230"
                      x2="50%"
                      y2="100"
                      stroke="#10b981"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead-result)"
                      className="animate-pulse"
                    />
                    <line
                      x1="50%"
                      y1="230"
                      x2="50%"
                      y2="100"
                      stroke="#10b981"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead-result)"
                      className="animate-pulse"
                    />
                    <line
                      x1="75%"
                      y1="230"
                      x2="50%"
                      y2="100"
                      stroke="#10b981"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead-result)"
                      className="animate-pulse"
                    />
                  </>
                )}
              </svg>

              {/* Nodes */}
              <div className="grid grid-cols-3 gap-8 relative" style={{ zIndex: 2 }}>
                {nodes.filter(node => node.type === 'node').map((node) => (
                  <div key={node.id} className="flex justify-center">
                    <div className={`relative transition-all duration-500 ${
                      steps[currentStep]?.highlight === node.id ? 'scale-110' : 'scale-100'
                    }`}>
                      <div className={`p-4 rounded-xl border-2 ${
                        steps[currentStep]?.highlight === node.id
                          ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg shadow-green-500/25'
                          : node.status === 'active'
                          ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                          : 'border-gray-300 bg-gray-50 dark:bg-gray-950/30'
                      }`}>
                        <div className="flex flex-col items-center gap-2">
                          {getNodeIcon(node)}
                          <div className="text-center">
                            <div className="font-medium text-sm capitalize">{node.id}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{node.browser}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500 capitalize">{node.platform}</div>
                            {steps[currentStep]?.action === 'execute' && node.status === 'active' && (
                              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                                ⚡ Running test...
                              </div>
                            )}
                            {steps[currentStep]?.action === 'connect' && node.id === 'node1' && (
                              <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                                🔌 Registering...
                              </div>
                            )}
                            {steps[currentStep]?.action === 'route' && (
                              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                                📋 Test assigned
                              </div>
                            )}
                            {steps[currentStep]?.action === 'result' && (
                              <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                                ✅ Test complete
                              </div>
                            )}
                            {steps[currentStep]?.action === 'scale' && (
                              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                                📈 Ready to scale
                              </div>
                            )}
                          </div>
                          <div className={`text-xs font-medium ${getStatusColor(node.status)}`}>
                            {node.status}
                          </div>
                        </div>
                      </div>
                      {steps[currentStep]?.highlight === node.id && (
                        <div className="absolute -top-2 -right-2">
                          <div className="p-1.5 bg-green-500 rounded-full animate-pulse">
                            <Activity className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                      
                      {/* Execution Status Indicator */}
                      {steps[currentStep]?.action === 'execute' && node.status === 'active' && (
                        <div className="absolute -top-2 -left-2">
                          <div className="p-1.5 bg-blue-500 rounded-full animate-bounce">
                            <Play className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                      
                      {/* Connection Status Indicator */}
                      {steps[currentStep]?.action === 'connect' && node.id === 'node1' && (
                        <div className="absolute -top-2 -left-2">
                          <div className="p-1.5 bg-purple-500 rounded-full animate-pulse">
                            <Link className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                      
                      {/* Scale Indicator */}
                      {steps[currentStep]?.action === 'scale' && (
                        <div className="absolute -bottom-2 -right-2">
                          <div className="p-1.5 bg-orange-500 rounded-full animate-pulse">
                            <Plus className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Test Requests Flow */}
              <div className="mt-8">
                <div className="flex justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 max-w-md">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                      Test Queue
                      {steps[currentStep]?.action === 'request' && (
                        <div className="p-1 bg-blue-500 rounded-full animate-pulse">
                          <ArrowDown className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {steps[currentStep]?.action === 'result' && (
                        <div className="p-1 bg-green-500 rounded-full animate-pulse">
                          <ArrowUp className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    {steps[currentStep]?.action === 'request' && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 text-center">
                        📥 New test requests arriving...
                      </div>
                    )}
                    {steps[currentStep]?.action === 'route' && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 text-center">
                        🎯 Assigning tests to matching nodes...
                      </div>
                    )}
                    {steps[currentStep]?.action === 'execute' && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 text-center">
                        ⚡ Tests running in parallel...
                      </div>
                    )}
                    {steps[currentStep]?.action === 'result' && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 text-center">
                        ✅ Test results collected!
                      </div>
                    )}
                    <div className="space-y-2">
                      {testRequests.map((request, index) => (
                        <div
                          key={request.id}
                          className={`flex items-center justify-between p-2 rounded border transition-all duration-500 ${
                            request.status === 'running' 
                              ? 'border-blue-200 bg-blue-50 dark:bg-blue-950/30 shadow-sm'
                              : request.status === 'completed'
                              ? 'border-green-200 bg-green-50 dark:bg-green-950/30 shadow-sm'
                              : 'border-gray-200 bg-gray-50 dark:bg-gray-950/30'
                          } ${
                            steps[currentStep]?.action === 'request' && request.status === 'pending'
                              ? 'animate-pulse border-blue-300'
                              : ''
                          } ${
                            steps[currentStep]?.action === 'result' && request.status === 'completed'
                              ? 'animate-pulse border-green-300'
                              : ''
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(request.status)} ${
                              request.status === 'running' ? 'animate-pulse' : ''
                            }`} />
                            <span className="text-sm capitalize">Test {request.id}</span>
                            <Badge variant="outline" className="text-xs">
                              {request.target}
                            </Badge>
                            {request.status === 'running' && (
                              <div className="p-1 bg-blue-500 rounded-full animate-spin">
                                <RefreshCw className="w-3 h-3 text-white" />
                              </div>
                            )}
                            {request.status === 'completed' && (
                              <div className="p-1 bg-green-500 rounded-full">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {request.assigned || 'Unassigned'}
                          </div>
                        </div>
                      ))}
                    </div>
                    {steps[currentStep]?.action === 'request' && (
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-center">
                        💡 Tests wait in queue until matching nodes are available
                      </div>
                    )}
                    {steps[currentStep]?.action === 'route' && (
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-center">
                        💡 Hub finds best node based on browser, version, and platform
                      </div>
                    )}
                    {steps[currentStep]?.action === 'execute' && (
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-center">
                        💡 Multiple tests run simultaneously for faster execution
                      </div>
                    )}
                    {steps[currentStep]?.action === 'result' && (
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-center">
                        💡 Results are sent back to the hub for aggregation
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step Controls */}
          <div className="flex items-center justify-between">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </div>
            
            <Button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Step Description */}
      {currentStep >= 0 && (
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-green-600">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                    Step {steps[currentStep].step} of {steps.length}
                  </div>
                  <div className="text-lg font-medium text-green-900 dark:text-green-100 mt-0.5">
                    {steps[currentStep].title}
                  </div>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 pl-14">
                {steps[currentStep].description}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Code Implementation */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Code Implementation
          </CardTitle>
          <CardDescription>
            See how the Grid concepts translate to actual code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
            <div className="space-y-1">
              {getCodeWithValues(steps[currentStep]).map((lineData) => (
                <div
                  key={lineData.line}
                  className={`flex items-center gap-3 py-1 px-2 -mx-2 rounded transition-all duration-300 ${
                    lineData.active
                      ? 'bg-purple-900/30 border-l-2 border-purple-400'
                      : ''
                  }`}
                >
                  <span className={`select-none w-6 text-right flex-shrink-0 ${
                    lineData.active
                      ? 'text-purple-400 font-semibold'
                      : 'text-gray-600'
                  }`}>
                    {lineData.line}
                  </span>
                  <code className="flex-1" style={{ marginLeft: `${lineData.indent * 16}px` }}>
                    {lineData.code}
                  </code>
                </div>
              ))}
            </div>
            
            {/* Variable Values */}
            <div className="border-t border-gray-700 mt-4 pt-3 flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Hub:</span>
                <span className="text-purple-400 font-semibold">{steps[currentStep].var1}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Nodes:</span>
                <span className="text-purple-400 font-semibold">{steps[currentStep].var2}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Status:</span>
                <span className="text-purple-400 font-semibold">{steps[currentStep].var3}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            Key Benefits of Selenium Grid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Parallel Execution</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Run multiple tests simultaneously across different browsers and platforms
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Scalability</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Easily scale your test infrastructure by adding more nodes as needed
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <Clock className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Time Savings</h3>
              <p className="text-sm text-green-800 dark:text-green-200">
                Reduce test execution time by up to 10x with parallel testing
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
              <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cross-Platform</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Test across Windows, Mac, Linux, and mobile platforms simultaneously
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Common Use Cases</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div>• <strong>Cross-Browser Testing:</strong> Ensure your application works across Chrome, Firefox, Safari, and Edge</div>
          <div>• <strong>Cross-Platform Testing:</strong> Test on Windows, macOS, and Linux simultaneously</div>
          <div>• <strong>Performance Testing:</strong> Run load tests with multiple concurrent users</div>
          <div>• <strong>CI/CD Integration:</strong> Accelerate your continuous integration pipeline</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
