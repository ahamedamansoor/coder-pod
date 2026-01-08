'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';
import { 
  Network,
  Code,
  Copy,
  CheckCircle,
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
  Terminal,
  Globe,
  Wifi,
  WifiOff,
  Maximize2,
  Minimize2,
  MessageSquare,
  Navigation,
  Search,
  Filter,
  Bug,
  Clock,
  Radio,
  Webhook,
  ZapOff,
  Lock,
  Unlock,
  Send,
  ArrowLeftRight,
  Link,
  Unlink,
  Power,
  PowerOff,
  Router,
  Bluetooth,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  Loader2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  RefreshCcw,
  RotateCcw,
  RotateCw,
  SkipForward,
  SkipBack,
  Square as SquareIcon,
  Triangle,
  Hexagon,
  Diamond,
  Star,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Flag,
  Bell,
  BellOff,
  Check,
  UserX,
  Users2,
  UsersRound,
  Building,
  Building2,
  Home,
  Briefcase,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  Calendar,
  CalendarDays,
  CalendarRange,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  TimerReset,
  BarChart,
  BarChart2,
  BarChart3,
  BarChart4,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  Gauge,
  GaugeCircle,
  Lightbulb,
} from 'lucide-react';

const BidiApis = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isConnected, setIsConnected] = useState(false);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'bidi-apis',
    title: 'BiDi APIs',
    explanation: 'WebDriver BiDi - Next-generation bidirectional browser automation protocol for enhanced testing and real-time communication',
    category: '27. Selenium 4 Features'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const addLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { timestamp, message, type }]);
  };

  const copyToClipboard = async (code: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(null), 2000);
      addLog('Code copied to clipboard', 'success');
    } catch (err) {
      addLog('Failed to copy code', 'error');
    }
  };

  const simulateConnection = () => {
    setIsConnected(true);
    addLog('Connecting to WebDriver BiDi...', 'info');
    setTimeout(() => {
      addLog('WebSocket connection established', 'success');
      addLog('BiDi session started', 'success');
    }, 1000);
  };

  const simulateDisconnection = () => {
    setIsConnected(false);
    addLog('Disconnecting from WebDriver BiDi...', 'info');
    setTimeout(() => {
      addLog('WebSocket connection closed', 'info');
    }, 500);
  };

  const simulateEvent = () => {
    if (isConnected) {
      const events = [
        { type: 'info', message: 'Received: log.entryAdded', delay: 0 },
        { type: 'success', message: 'Console log: "Hello from BiDi!"', delay: 200 },
        { type: 'info', message: 'Received: browsingContext.domContentLoaded', delay: 400 },
        { type: 'info', message: 'Context: "main" - DOM fully loaded', delay: 600 },
        { type: 'info', message: 'Received: network.beforeRequestSent', delay: 800 },
        { type: 'info', message: 'Request: GET https://api.example.com/data', delay: 1000 },
        { type: 'success', message: 'Response: 200 OK - 1.2KB', delay: 1200 },
        { type: 'info', message: 'Received: script.message', delay: 1400 },
        { type: 'success', message: 'Script executed: document.title = "BiDi Demo"', delay: 1600 },
        { type: 'info', message: 'Received: input.fileDialogOpened', delay: 1800 },
        { type: 'info', message: 'File dialog triggered by input element', delay: 2000 },
        { type: 'info', message: 'Received: log.entryAdded', delay: 2200 },
        { type: 'success', message: 'Console warning: "BiDi connection active"', delay: 2400 },
        { type: 'info', message: 'Received: browsingContext.navigationStarted', delay: 2600 },
        { type: 'info', message: 'Navigation started to: /dashboard', delay: 2800 },
        { type: 'success', message: 'Navigation completed successfully', delay: 3000 }
      ];

      events.forEach(event => {
        setTimeout(() => {
          addLog(event.message, event.type as 'info' | 'success' | 'error');
        }, event.delay);
      });
    }
  };

  useEffect(() => {
    addLog('WebDriver BiDi component initialized', 'info');
  }, []);

  const codeExamples = {
    python: `from selenium.webdriver.common.bidi import bidi

# Initialize BiDi connection
driver = webdriver.Chrome()
bidi_connection = bidi(driver)

# Subscribe to console log events
await bidi_connection.subscribe("log.entryAdded")

# Listen for events
async def handle_log_entry(event):
    print(f"Console log: {event['args'][0]['value']}")

bidi_connection.add_event_handler("log.entryAdded", handle_log_entry)

# Execute JavaScript that triggers logs
driver.execute_script("console.log('Hello BiDi!')")`,
    
    javascript: `const { Builder } = require('selenium-webdriver');
const bidi = require('selenium-webdriver/bidi');

// Initialize BiDi connection
let driver = await new Builder().forBrowser('chrome').build();
let bidiDriver = await bidi.createDriver(driver);

// Subscribe to console log events
await bidiDriver.subscribe('log.entryAdded');

// Listen for events
bidiDriver.on('log.entryAdded', (event) => {
  console.log('Console log:', event.args[0].value);
});

// Execute JavaScript that triggers logs
await driver.executeScript('console.log("Hello BiDi!");');`,
    
    java: `import org.openqa.selenium.bidi.BiDi;
import org.openqa.selenium.bidi.browsingcontext.BrowsingContext;
import org.openqa.selenium.bidi.log.LogEntry;
import org.openqa.selenium.bidi.log.LogHandler;

// Initialize BiDi connection
WebDriver driver = new ChromeDriver();
BiDi bidi = new BiDi(driver);

// Subscribe to console log events
bidi.subscribe("log.entryAdded");

// Listen for events
bidi.onLogEntryAdded(new LogHandler() {
  @Override
  public void onLogEntry(LogEntry entry) {
    System.out.println("Console log: " + entry.getArgs().get(0).getValue());
  }
});

// Execute JavaScript that triggers logs
driver.executeScript("console.log('Hello BiDi!');");`,
    
    csharp: `using OpenQA.Selenium.Bidi;
using OpenQA.Selenium.Bidi.Log;
using OpenQA.Selenium.Chrome;

// Initialize BiDi connection
var driver = new ChromeDriver();
var bidi = new BiDi(driver);

// Subscribe to console log events
await bidi.SubscribeAsync("log.entryAdded");

// Listen for events
bidi.OnLogEntryAdded += (sender, e) => {
    Console.WriteLine($"Console log: {e.Entry.Args[0].Value}");
};

// Execute JavaScript that triggers logs
driver.ExecuteScript("console.log('Hello BiDi!');");`
  };

  const features = [
    {
      title: 'Bidirectional Communication',
      description: 'Real-time two-way communication between test script and browser',
      icon: ArrowLeftRight,
      color: 'text-blue-600'
    },
    {
      title: 'WebSocket Transport',
      description: 'Efficient WebSocket-based communication for low latency',
      icon: Wifi,
      color: 'text-green-600'
    },
    {
      title: 'Event-Driven Architecture',
      description: 'Subscribe to browser events and react in real-time',
      icon: Radio,
      color: 'text-purple-600'
    },
    {
      title: 'Cross-Browser Support',
      description: 'Standardized protocol working across all major browsers',
      icon: Globe,
      color: 'text-orange-600'
    },
    {
      title: 'Enhanced Debugging',
      description: 'Powerful debugging and inspection capabilities',
      icon: Bug,
      color: 'text-red-600'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time performance metrics and monitoring',
      icon: Activity,
      color: 'text-indigo-600'
    }
  ];

  const modules = [
    {
      name: 'Session',
      description: 'Session management and configuration',
      commands: ['status', 'subscribe', 'unsubscribe'],
      events: ['message']
    },
    {
      name: 'Browsing Context',
      description: 'Tab and window management',
      commands: ['create', 'close', 'navigate', 'reload'],
      events: ['contextCreated', 'contextDestroyed', 'navigationStarted']
    },
    {
      name: 'Network',
      description: 'Network request/response monitoring',
      commands: ['addIntercept', 'removeIntercept', 'continueRequest'],
      events: ['beforeRequestSent', 'responseStarted', 'responseCompleted']
    },
    {
      name: 'Script',
      description: 'JavaScript execution and evaluation',
      commands: ['evaluate', 'callFunction'],
      events: ['message']
    },
    {
      name: 'Log',
      description: 'Console and error log monitoring',
      commands: [],
      events: ['entryAdded']
    },
    {
      name: 'Input',
      description: 'Advanced input simulation',
      commands: ['performActions', 'releaseActions', 'setFiles'],
      events: ['fileDialogOpened']
    }
  ];

  const comparisonData = [
    {
      feature: 'Communication',
      classic: 'Request/Response only',
      bidi: 'Bidirectional + Events',
      improvement: 'Real-time event handling'
    },
    {
      feature: 'Transport',
      classic: 'HTTP/HTTPS',
      bidi: 'WebSocket',
      improvement: 'Lower latency, persistent connection'
    },
    {
      feature: 'Event Listening',
      classic: 'Not supported',
      bidi: 'Native event subscription',
      improvement: 'React to browser events instantly'
    },
    {
      feature: 'Performance',
      classic: 'Higher overhead',
      bidi: 'Optimized for speed',
      improvement: 'Faster test execution'
    },
    {
      feature: 'Debugging',
      classic: 'Limited',
      bidi: 'Advanced debugging tools',
      improvement: 'Better test debugging experience'
    },
    {
      feature: 'Browser Control',
      classic: 'Basic automation',
      bidi: 'Fine-grained control',
      improvement: 'More precise browser manipulation'
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="WebDriver BiDi APIs"
        description="Next-generation bidirectional browser automation protocol for enhanced testing and real-time communication"
        icon={ArrowLeftRight}
        category="Selenium · Advanced Protocols"
        colorTheme="blue"
      />

      {/* What is BiDi? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Info className="w-5 h-5" />
            <span>What is WebDriver BiDi?</span>
          </CardTitle>
          <CardDescription>
            Understanding the next evolution of browser automation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              <strong>WebDriver BiDi</strong> (Bidirectional WebDriver) is a modern browser automation protocol that enables 
              real-time, two-way communication between your test scripts and web browsers. Unlike traditional WebDriver 
              which only allows command-response interactions, BiDi lets browsers <strong>push events</strong> to your 
              test code as they happen.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                💡 Think of it like this: Traditional WebDriver is like sending letters (request/response), 
                while BiDi is like having a phone conversation (real-time bidirectional communication).
              </p>
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-3">Why Should You Use BiDi?</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Lightning Fast Performance</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      WebSocket-based communication reduces latency by up to 90% compared to HTTP requests
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Radio className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Real-time Event Monitoring</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Listen to console logs, network requests, DOM changes as they happen
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Enhanced Debugging</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Capture browser events for better test debugging and analysis
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Cross-Browser Standard</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      W3C standard ensuring consistent behavior across Chrome, Firefox, Safari, and Edge
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Advanced Browser Control</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Fine-grained control over browser behavior and state
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Future-Proof Technology</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      The future of browser automation, actively developed by major browser vendors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-3">When Should You Use BiDi?</h4>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <strong className="text-green-800 dark:text-green-200">Perfect Use Cases</strong>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Real-time Monitoring:</strong> Track console logs, network requests, and DOM changes during test execution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Performance Testing:</strong> Monitor page load times, resource loading, and rendering performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Debugging Complex Applications:</strong> Capture browser events to debug SPAs, dynamic content, and async operations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Network Testing:</strong> Intercept, modify, and monitor HTTP/HTTPS requests and responses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Advanced Automation:</strong> Build sophisticated test frameworks that react to browser events</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <strong className="text-yellow-800 dark:text-yellow-200">Consider Traditional WebDriver When...</strong>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Simple Test Scenarios:</strong> Basic form filling, clicking, and navigation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Legacy Systems:</strong> Working with older browsers or environments without BiDi support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Minimal Requirements:</strong> When you don't need real-time event monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-6">
              <h5 className="font-semibold mb-2 flex items-center space-x-2">
                <Lightbulb className="w-4 h-4" />
                <span>Quick Comparison</span>
              </h5>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium text-blue-600">Traditional WebDriver</div>
                  <div className="text-gray-600 dark:text-gray-300">Request/Response</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-purple-600">BiDi</div>
                  <div className="text-gray-600 dark:text-gray-300">Bidirectional + Events</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-green-600">Recommendation</div>
                  <div className="text-gray-600 dark:text-gray-300">Use BiDi for modern apps</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Terminal className="w-5 h-5" />
            <span>BiDi Connection Demo</span>
          </CardTitle>
          <CardDescription>
            Interactive demonstration of WebDriver BiDi connection and event handling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateConnection}
              disabled={isConnected}
              className="flex items-center space-x-2"
            >
              <Power className="w-4 h-4" />
              <span>Connect BiDi</span>
            </Button>
            <Button
              onClick={simulateDisconnection}
              disabled={!isConnected}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <PowerOff className="w-4 h-4" />
              <span>Disconnect</span>
            </Button>
            <Button
              onClick={simulateEvent}
              disabled={!isConnected}
              variant="secondary"
              className="flex items-center space-x-2"
            >
              <Radio className="w-4 h-4" />
              <span>Simulate Event</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium">
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>

          {/* Event Log */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-48 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Event Log</h4>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setLogs([])}
              >
                Clear
              </Button>
            </div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-mono">{log.timestamp}</span>
                  <span className={`flex items-center space-x-1 ${
                    log.type === 'success' ? 'text-green-600' : 
                    log.type === 'error' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {log.type === 'success' && <CheckCircle2 className="w-3 h-3" />}
                    {log.type === 'error' && <XCircle className="w-3 h-3" />}
                    {log.type === 'info' && <Info className="w-3 h-3" />}
                    <span>{log.message}</span>
                  </span>
                </div>
              ))}
              {logs.length === 0 && (
                <div className="text-gray-400 dark:text-gray-500 text-center py-4">
                  No events yet. Connect to BiDi to see events.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BiDi Modules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="w-5 h-5" />
            <span>BiDi Protocol Modules</span>
          </CardTitle>
          <CardDescription>
            Core modules that provide specific functionality in the WebDriver BiDi protocol
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">{module.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{module.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600">Commands:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {module.commands.map((cmd, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cmd}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600">Events:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {module.events.map((event, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {event}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="w-5 h-5" />
            <span>WebDriver Classic vs BiDi</span>
          </CardTitle>
          <CardDescription>
            Comparison between traditional WebDriver and the new BiDi protocol
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold">WebDriver Classic</th>
                  <th className="text-left p-3 font-semibold">WebDriver BiDi</th>
                  <th className="text-left p-3 font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3 text-sm">{row.classic}</td>
                    <td className="p-3 text-sm">{row.bidi}</td>
                    <td className="p-3 text-sm text-green-600">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>Code Examples</span>
          </CardTitle>
          <CardDescription>
            Practical examples of using WebDriver BiDi in different programming languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(codeExamples).map(([language, code]) => (
              <div key={language} className="border rounded-lg">
                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b flex items-center justify-between">
                  <span className="font-medium capitalize">{language}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(code, language)}
                  >
                    {copiedCode === language ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <pre className="p-4 text-sm overflow-x-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                  <code>{code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <AlertTriangle className="w-4 h-4" />
        <AlertTitle>Important Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>WebDriver BiDi is currently in development and may have limited browser support</li>
            <li>Requires Selenium 4.6.0 or later for BiDi functionality</li>
            <li>Chrome, Edge, and Firefox have the best BiDi support currently</li>
            <li>Some advanced features may still be behind experimental flags</li>
            <li>BiDi complements rather than completely replaces WebDriver Classic</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Best Practices</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use BiDi for real-time event monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Leverage WebSocket for better performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Subscribe only to events you need</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Handle connection errors gracefully</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-600">Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use BiDi for simple automation tasks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore WebSocket connection management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't subscribe to all events unnecessarily</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't assume all browsers support BiDi equally</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

export default BidiApis;
