'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Terminal,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Settings,
  Zap,
  Shield,
  Package,
  Database,
  Server,
  Monitor,
  Cpu,
  Layers,
  GitBranch,
  Activity,
  Eye,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Users,
  FileText,
  Folder,
  HardDrive,
  Cloud,
  Globe,
  Network,
  Wifi,
  Chrome,
  Smartphone,
  Tablet,
  Grid3X3,
  Container,
  Anchor,
  Target,
  Compass,
  MapPin,
  Navigation,
  Search,
  Filter,
  Bug,
  Clock,
  Timer,
  Gauge,
  BarChart,
  TrendingUp,
  Download,
  Upload,
  CheckSquare,
  AlertTriangle,
  Info,
  Send,
  MessageSquare,
  PackageOpen,
  Lock,
  Unlock,
  Key,
  Hash,
  FileJson,
  FileCode,
  Cpu as CpuIcon,
  Radio,
  Router
  } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function ChromeDevToolsProtocolComponent() {
  const [selectedDomain, setSelectedDomain] = useState<string>('network');
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [networkRequests, setNetworkRequests] = useState<any[]>([]);
  const [consoleMessages, setConsoleMessages] = useState<any[]>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>({});
  const [showProtocolAnimation, setShowProtocolAnimation] = useState(false);

  const getCDPCode = (domain: string = selectedDomain) => {
    if (domain === 'network') {
      return [
        '// Chrome DevTools Protocol - Network Domain',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable network monitoring',
        'devTools.getNetwork().enable();',
        '',
        '// Add request listener',
        'devTools.getNetwork().addRequestHandler(request -> {',
        '    System.out.println("Request: " + request.getUrl());',
        '    System.out.println("Method: " + request.getMethod());',
        '    System.out.println("Headers: " + request.getHeaders());',
        '});',
        '',
        '// Add response listener',
        'devTools.getNetwork().addResponseHandler(response -> {',
        '    System.out.println("Response: " + response.getUrl());',
        '    System.out.println("Status: " + response.getStatus());',
        '    System.out.println("Response Time: " + response.getResponseTime());',
        '});'
      ];
    } else if (domain === 'console') {
      return [
        '// Chrome DevTools Protocol - Console Domain',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable console logging',
        'devTools.getConsole().enable();',
        '',
        '// Add console message listener',
        'devTools.getConsole().addMessageHandler(message -> {',
        '    System.out.println("Level: " + message.getLevel());',
        '    System.out.println("Message: " + message.getText());',
        '    System.out.println("Source: " + message.getSource());',
        '    System.out.println("Timestamp: " + message.getTimestamp());',
        '});',
        '',
        '// Clear console',
        'devTools.getConsole().clear();',
        '',
        '// Execute JavaScript and capture console output',
        'devTools.getRuntime().evaluate("console.log(\'Hello CDP!\');");'
      ];
    } else if (domain === 'performance') {
      return [
        '// Chrome DevTools Protocol - Performance Domain',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable performance monitoring',
        'devTools.getPerformance().enable(Metric.ALL);',
        '',
        '// Start performance recording',
        'devTools.getPerformance().start();',
        '',
        '// Navigate to page',
        'driver.get("https://example.com");',
        '',
        '// Get performance metrics',
        'List<Metric> metrics = devTools.getPerformance().getMetrics();',
        'for (Metric metric : metrics) {',
        '    System.out.println(metric.getName() + ": " + metric.getValue());',
        '}',
        '',
        '// Get memory usage',
        'MemoryInfo memory = devTools.getMemory().getMemoryInfo();',
        'System.out.println("JS Heap Size: " + memory.getJsHeapSize());'
      ];
    } else if (domain === 'dom') {
      return [
        '// Chrome DevTools Protocol - DOM Domain',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable DOM inspection',
        'devTools.getDOM().enable();',
        '',
        '// Get document root',
        'NodeId rootId = devTools.getDOM().getDocument().getNodeId();',
        '',
        '// Find elements by selector',
        'List<NodeId> nodes = devTools.getDOM().querySelectorAll(rootId, "button");',
        '',
        '// Get node attributes',
        'for (NodeId nodeId : nodes) {',
        '    Map<String, String> attributes = devTools.getDOM().getAttributes(nodeId);',
        '    System.out.println("Attributes: " + attributes);',
        '}',
        '',
        '// Modify element properties',
        'devTools.getDOM().setAttributeValue(nodeId, "style", "color: red;");'
      ];
    }
    return [];
  };

  const simulateCDPDemo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setNetworkRequests([]);
    setConsoleMessages([]);
    setPerformanceMetrics({});
    setShowProtocolAnimation(true);
    
    const steps = [
      { step: 0, delay: 1500, action: 'Initialize Chrome DevTools', domain: 'setup' },
      { step: 1, delay: 1000, action: 'Enable Network Domain', domain: 'network' },
      { step: 2, delay: 1500, action: 'Start Network Monitoring', domain: 'network' },
      { step: 3, delay: 1000, action: 'Enable Console Domain', domain: 'console' },
      { step: 4, delay: 1500, action: 'Capture Console Messages', domain: 'console' },
      { step: 5, delay: 1000, action: 'Enable Performance Domain', domain: 'performance' },
      { step: 6, delay: 1500, action: 'Collect Performance Metrics', domain: 'performance' },
      { step: 7, delay: 1000, action: 'Enable DOM Domain', domain: 'dom' },
      { step: 8, delay: 1500, action: 'Inspect DOM Elements', domain: 'dom' },
    ];

    for (const { step, delay, action, domain } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      
      if (domain === 'network' && step >= 2) {
        setNetworkRequests(prev => [...prev, {
          url: `GET /api/data-${step}`,
          method: 'GET',
          status: 200,
          time: `${Math.floor(Math.random() * 100) + 50}ms`
        }]);
      }
      
      if (domain === 'console' && step >= 4) {
        setConsoleMessages(prev => [...prev, {
          level: 'log',
          message: `Console message ${step}`,
          timestamp: new Date().toISOString()
        }]);
      }
      
      if (domain === 'performance' && step >= 6) {
        setPerformanceMetrics((prev: any) => ({
          ...prev,
          [`metric-${step}`]: Math.floor(Math.random() * 1000)
        }));
      }
    }

    setShowProtocolAnimation(false);
    setIsDemoRunning(false);
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'chrome-devtools-protocol',
    title: 'Chrome DevTools Protocol',
    explanation: 'Deep browser integration with Chrome DevTools Protocol',
    category: '27. Selenium 4 Features'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const domains = [
    {
      id: 'network',
      title: 'Network',
      description: 'Monitor HTTP requests and responses',
      icon: Network,
      color: 'blue',
      features: ['Request/Response monitoring', 'Network throttling', 'Cache inspection', 'WebSocket tracking']
    },
    {
      id: 'console',
      title: 'Console',
      description: 'Capture console logs and messages',
      icon: Terminal,
      color: 'green',
      features: ['Log capture', 'Error tracking', 'Debug messages', 'Console API']
    },
    {
      id: 'performance',
      title: 'Performance',
      description: 'Analyze page performance metrics',
      icon: Gauge,
      color: 'orange',
      features: ['Timing metrics', 'Memory usage', 'CPU profiling', 'Render performance']
    },
    {
      id: 'dom',
      title: 'DOM',
      description: 'Inspect and manipulate DOM elements',
      icon: Code,
      color: 'purple',
      features: ['Element inspection', 'Attribute modification', 'Event handling', 'Style manipulation']
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Chrome DevTools Protocol"
        description="Unlock powerful browser debugging and monitoring capabilities with direct Chrome DevTools Protocol integration in Selenium 4"
        icon={Terminal}
        category="Selenium · Advanced Protocols"
        colorTheme="orange"
        badges={[
          { label: 'CDP Integration', variant: 'secondary' },
          { label: 'Deep Browser Access', variant: 'secondary' },
          { label: 'Real-time Monitoring', variant: 'secondary' }
        ]}
      />

      {/* CDP Overview */}
      <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-700 dark:text-orange-300">
            <Terminal className="w-6 h-6" />
            What is Chrome DevTools Protocol?
          </CardTitle>
          <CardDescription>
            A powerful protocol that allows direct communication with Chrome browser's internal debugging capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300">Key Capabilities:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Real-time Monitoring</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Monitor network requests, console logs, and performance metrics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">DOM Manipulation</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Inspect and modify page elements in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Performance Analysis</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Capture detailed performance metrics and timing data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Security Insights</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Analyze security headers and certificate information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300">Benefits for Testing:</h4>
              <div className="space-y-3">
                {[
                  'Debug failing tests with browser insights',
                  'Monitor API calls and responses',
                  'Capture performance regressions',
                  'Analyze JavaScript errors',
                  'Validate network behavior',
                  'Inspect application state'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CDP Domains */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Layers className="w-6 h-6" />
            CDP Domains - Browser Capabilities
          </CardTitle>
          <CardDescription>
            Explore the different domains available in Chrome DevTools Protocol
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain) => (
              <div
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedDomain === domain.id
                    ? 'ring-2 ring-orange-500 shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${domain.color}-500 to-${domain.color}-600 rounded-full flex items-center justify-center`}>
                      <domain.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                        {domain.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {domain.description}
                  </p>
                  <div className="space-y-2">
                    {domain.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Play className="w-6 h-6" />
            Interactive CDP Demo
          </CardTitle>
          <CardDescription>
            Experience the power of Chrome DevTools Protocol with live monitoring demonstrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-center">
              <Button
                onClick={simulateCDPDemo}
                disabled={isDemoRunning}
                className="gap-2 bg-orange-600 hover:bg-orange-700"
              >
                {isDemoRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Running CDP Demo...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Start Full CDP Demo
                  </>
                )}
              </Button>
            </div>

            {/* Demo Progress */}
            {isDemoRunning && (
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">Demo Progress</span>
                    <span className="text-sm text-orange-600">Step {currentStep + 1} of 9</span>
                  </div>
                  <div className="w-full bg-orange-200 dark:bg-orange-800 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentStep + 1) / 9) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Network Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Network className="w-6 h-6" />
            Network Monitoring - Real-time Traffic Analysis
          </CardTitle>
          <CardDescription>
            Capture and analyze all HTTP/HTTPS requests and responses during test execution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Network Request Display */}
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Network Activity</h4>
                <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                  {networkRequests.length} Requests
                </Badge>
              </div>
              
              <div className="space-y-2">
                {networkRequests.length > 0 ? (
                  networkRequests.map((request, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-mono flex-1">{request.url}</span>
                      <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                        {request.method}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                        {request.status}
                      </Badge>
                      <span className="text-xs text-slate-500">{request.time}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    <Network className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No network requests captured yet</p>
                    <p className="text-xs">Start the demo to see network monitoring in action</p>
                  </div>
                )}
              </div>
            </div>

            {/* Network Capabilities */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Wifi className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Request Monitoring</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Capture all outgoing requests with headers, body, and timing
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-green-700 dark:text-green-300">Response Analysis</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Analyze response data, status codes, and performance
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-5 h-5 text-orange-600" />
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300">Performance Metrics</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Track request timing, size, and network performance
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Console Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Terminal className="w-6 h-6" />
            Console Monitoring - JavaScript Output Capture
          </CardTitle>
          <CardDescription>
            Capture console logs, errors, warnings, and debug messages during test execution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Console Messages Display */}
            <div className="bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Console Output</h4>
                <Badge variant="outline" className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-600">
                  {consoleMessages.length} Messages
                </Badge>
              </div>
              
              <div className="bg-black dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
                {consoleMessages.length > 0 ? (
                  consoleMessages.map((message, index) => (
                    <div key={index} className="mb-2">
                      <span className="text-blue-400">{message.timestamp}</span>
                      <span className="text-yellow-400 ml-2">[{message.level.toUpperCase()}]</span>
                      <span className="text-green-400 ml-2">{message.message}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4" />
                      <span>Console ready. Waiting for messages...</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Start the demo to see console monitoring in action
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Console Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Message Types:</h4>
                <div className="space-y-2">
                  {[
                    { type: 'log', color: 'green', desc: 'General log messages' },
                    { type: 'error', color: 'red', desc: 'JavaScript errors' },
                    { type: 'warning', color: 'yellow', desc: 'Warning messages' },
                    { type: 'info', color: 'blue', desc: 'Informational messages' },
                    { type: 'debug', color: 'purple', desc: 'Debug output' },
                    { type: 'trace', color: 'gray', desc: 'Stack traces' }
                  ].map((msgType, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 bg-${msgType.color}-500 rounded-full`}></div>
                      <span className="text-sm font-medium">{msgType.type}</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">- {msgType.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Use Cases:</h4>
                <div className="space-y-2">
                  {[
                    'Debug JavaScript errors in tests',
                    'Monitor application state changes',
                    'Validate console output expectations',
                    'Track async operations',
                    'Analyze performance bottlenecks',
                    'Verify logging functionality'
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Gauge className="w-6 h-6" />
            Performance Analysis - Metrics & Timing
          </CardTitle>
          <CardDescription>
            Capture detailed performance metrics to analyze page load times and resource usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Performance Metrics Display */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">Performance Metrics</h4>
                <Badge variant="outline" className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                  Real-time Analysis
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Timing</h5>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Page Load:</span>
                      <span className="text-sm font-mono">1.2s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">DOM Ready:</span>
                      <span className="text-sm font-mono">0.8s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">First Paint:</span>
                      <span className="text-sm font-mono">0.6s</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-green-600" />
                    <h5 className="font-semibold text-green-700 dark:text-green-300">Memory</h5>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">JS Heap:</span>
                      <span className="text-sm font-mono">45MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">DOM Nodes:</span>
                      <span className="text-sm font-mono">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Listeners:</span>
                      <span className="text-sm font-mono">89</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-orange-600" />
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300">Resources</h5>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Requests:</span>
                      <span className="text-sm font-mono">42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Transfer:</span>
                      <span className="text-sm font-mono">2.3MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cached:</span>
                      <span className="text-sm font-mono">1.1MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Key Metrics:</h4>
                <div className="space-y-2">
                  {[
                    'First Contentful Paint (FCP)',
                    'Largest Contentful Paint (LCP)',
                    'Time to Interactive (TTI)',
                    'Cumulative Layout Shift (CLS)',
                    'First Input Delay (FID)',
                    'Network timing information'
                  ].map((metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Gauge className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Testing Benefits:</h4>
                <div className="space-y-2">
                  {[
                    'Identify performance regressions',
                    'Monitor resource usage',
                    'Optimize page load times',
                    'Validate caching strategies',
                    'Analyze user experience metrics',
                    'Benchmark application performance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Code className="w-6 h-6" />
            CDP Integration Examples
          </CardTitle>
          <CardDescription>
            Practical code examples for integrating Chrome DevTools Protocol with Selenium 4
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Domain Selection */}
            <div className="flex gap-2 mb-6 border-b">
              {domains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`px-6 py-3 font-medium transition-all rounded-t-lg ${
                    selectedDomain === domain.id
                      ? 'bg-orange-600 text-white border-b-2 border-orange-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {domain.title}
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {domains.find(d => d.id === selectedDomain)?.title} Domain Example
                  </span>
                </div>
                <Badge variant="outline" className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                  Java + Selenium 4
                </Badge>
              </div>
              
              <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-gray-300 dark:border-gray-600">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-slate-800 dark:text-slate-300">
                    {getCDPCode(selectedDomain).join('\n')}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <CheckCircle className="w-6 h-6" />
            Best Practices & Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Setup & Configuration
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Enable only required domains</li>
                <li>• Clean up resources after tests</li>
                <li>• Handle connection errors gracefully</li>
                <li>• Use appropriate timeouts</li>
                <li>• Monitor memory usage</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Performance Optimization
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Batch operations when possible</li>
                <li>• Filter events to reduce noise</li>
                <li>• Use efficient data structures</li>
                <li>• Limit monitoring duration</li>
                <li>• Cache frequently accessed data</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Security & Privacy
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Secure WebSocket connections</li>
                <li>• Validate all inputs</li>
                <li>• Handle sensitive data carefully</li>
                <li>• Use secure contexts</li>
                <li>• Follow browser security policies</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <Info className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Use CDP for debugging and monitoring, but rely on standard WebDriver commands for test assertions. CDP provides powerful insights but should complement, not replace, standard automation practices.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}
