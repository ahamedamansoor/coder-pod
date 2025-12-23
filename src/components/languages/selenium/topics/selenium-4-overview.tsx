'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Rocket,
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
  Network,
  Wifi,
  Chrome,
  Monitor,
  Smartphone,
  Tablet,
  MonitorIcon,
  Grid3X3,
  Container,
  Anchor,
  Target,
  Compass,
  MapPin,
  Navigation,
  Search,
  Filter,
  Zap as ZapIcon,
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
  Info
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function Selenium4OverviewComponent() {
  const [selectedFeature, setSelectedFeature] = useState<string>('w3c');
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeBrowsers, setActiveBrowsers] = useState<string[]>([]);
  const [showProtocolAnimation, setShowProtocolAnimation] = useState(false);

  const getSelenium4Code = (feature: string = selectedFeature) => {
    if (feature === 'w3c') {
      return [
        '// Selenium 4 - W3C WebDriver Protocol',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://example.com");',
        '',
        '// Standardized commands across all browsers',
        'WebElement element = driver.findElement(By.id("submit"));',
        'element.click();',
        '',
        '// Bi-directional communication',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        'devTools.getNetwork().enable();'
      ];
    } else if (feature === 'relative') {
      return [
        '// Selenium 4 - Relative Locators',
        'WebElement submitButton = driver.findElement(By.id("submit"));',
        '',
        '// Find elements relative to other elements',
        'WebElement usernameField = driver.findElement(RelativeLocators.withTagName("input")',
        '    .near(submitButton));',
        '',
        '// Above, below, left, right of an element',
        'WebElement header = driver.findElement(RelativeLocators.withTagName("h1")',
        '    .above(submitButton));',
        '',
        '// To the right of an element',
        'WebElement sidebar = driver.findElement(RelativeLocators.withTagName("div")',
        '    .toRightOf(submitButton));'
      ];
    } else if (feature === 'cdp') {
      return [
        '// Selenium 4 - Chrome DevTools Protocol',
        'ChromeDriver driver = new ChromeDriver();',
        'DevTools devTools = driver.getDevTools();',
        'devTools.createSession();',
        '',
        '// Network monitoring',
        'devTools.getNetwork().enable();',
        'devTools.getNetwork().addResponseHandler(response -> {',
        '    System.out.println("Response URL: " + response.getUrl());',
        '});',
        '',
        '// Performance monitoring',
        'devTools.getPerformance().enable(Metric.ALL);',
        'List<Metric> metrics = devTools.getPerformance().getMetrics();'
      ];
    } else if (feature === 'grid') {
      return [
        '// Selenium 4 - Enhanced Grid',
        'URL gridUrl = new URL("http://localhost:4444");',
        'GridClient gridClient = new GridClient(gridUrl);',
        '',
        '// Get session information',
        'SessionId sessionId = driver.getSessionId();',
        'SessionInfo sessionInfo = gridClient.getSession(sessionId);',
        '',
        '// Monitor grid status',
        'GridStatus status = gridClient.getStatus();',
        'System.out.println("Available nodes: " + status.getNodes().size());',
        '',
        '// Docker support',
        'DockerOptions options = new DockerOptions();',
        'options.setDockerImage("selenium/standalone-chrome:4.0.0");'
      ];
    }
    return [];
  };

  const simulateSelenium4Demo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setActiveBrowsers([]);
    setShowProtocolAnimation(true);
    
    const steps = [
      { step: 0, delay: 1500, action: 'Initialize Selenium 4 WebDriver', browser: 'Chrome' },
      { step: 1, delay: 1000, action: 'Establish W3C Protocol Connection', browser: null },
      { step: 2, delay: 1500, action: 'Enable Chrome DevTools Protocol', browser: null },
      { step: 3, delay: 1000, action: 'Start Network Monitoring', browser: null },
      { step: 4, delay: 1500, action: 'Navigate to Application', browser: null },
      { step: 5, delay: 1000, action: 'Use Relative Locators', browser: null },
      { step: 6, delay: 1500, action: 'Capture Performance Metrics', browser: null },
      { step: 7, delay: 1000, action: 'Generate Test Report', browser: null },
    ];

    for (const { step, delay, action, browser } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      
      if (browser) {
        setActiveBrowsers(prev => [...prev, browser]);
      }
    }

    setShowProtocolAnimation(false);
    setIsDemoRunning(false);
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'selenium-4-overview',
    title: 'Selenium 4 Overview',
    explanation: 'New features and improvements in Selenium 4',
    category: '27. Selenium 4 Features'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const features = [
    {
      id: 'w3c',
      title: 'W3C WebDriver Protocol',
      description: 'Standardized protocol for cross-browser compatibility',
      icon: Network,
      color: 'blue',
      highlights: ['Cross-browser consistency', 'Standardized commands', 'Better performance']
    },
    {
      id: 'relative',
      title: 'Relative Locators',
      description: 'Find elements relative to other elements on the page',
      icon: Compass,
      color: 'green',
      highlights: ['above/below', 'toLeftOf/toRightOf', 'near', 'chaining']
    },
    {
      id: 'cdp',
      title: 'Chrome DevTools Protocol',
      description: 'Direct access to browser DevTools capabilities',
      icon: Terminal,
      color: 'orange',
      highlights: ['Network monitoring', 'Performance metrics', 'Console access']
    },
    {
      id: 'grid',
      title: 'Enhanced Selenium Grid',
      description: 'Improved distributed testing with Docker support',
      icon: Grid3X3,
      color: 'purple',
      highlights: ['Docker integration', 'Better monitoring', 'Session management']
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Selenium 4 - The Next Generation"
        description="Explore the revolutionary features and improvements in Selenium 4 that make web automation more powerful and efficient than ever"
        icon={Rocket}
        colorTheme="orange"
        badges={[
          { label: 'Latest Version', variant: 'secondary' },
          { label: 'W3C Compliant', variant: 'secondary' },
          { label: 'Enhanced Performance', variant: 'secondary' }
        ]}
      />

      {/* Key Features Overview */}
      <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-700 dark:text-orange-300">
            <Zap className="w-6 h-6" />
            Revolutionary Features in Selenium 4
          </CardTitle>
          <CardDescription>
            Interactive overview of the major enhancements that make Selenium 4 a game-changer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedFeature === feature.id
                    ? 'ring-2 ring-orange-500 shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-full flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          {highlight}
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

      {/* W3C Protocol Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Network className="w-6 h-6" />
            W3C WebDriver Protocol - The Universal Standard
          </CardTitle>
          <CardDescription>
            How Selenium 4 implements the standardized W3C protocol for consistent browser automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <div className="space-y-8">
              {/* Protocol Layers */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
                    <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">Test Code</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Selenium Commands</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-purple-700">W3C Protocol</div>
                    <div className="text-xs text-purple-600">Standardized Communication</div>
                    <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-green-300 dark:border-green-600 shadow-lg">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Browser</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Native Implementation</p>
                  </div>
                </div>
              </div>

              {/* Browser Support */}
              <div className="space-y-4">
                <h4 className="font-semibold text-center text-blue-700 dark:text-blue-300">Universal Browser Support</h4>
                <div className="flex justify-center gap-6 flex-wrap">
                  {[
                    { name: 'Chrome', icon: Chrome, color: 'green' },
                    { name: 'Firefox', icon: Monitor, color: 'orange' },
                    { name: 'Safari', icon: Globe, color: 'blue' },
                    { name: 'Edge', icon: Terminal, color: 'purple' },
                  ].map((browser) => (
                    <div key={browser.name} className="text-center">
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700">
                        <browser.icon className={`w-8 h-8 mx-auto mb-2 text-${browser.color}-600`} />
                        <div className="text-sm font-semibold">{browser.name}</div>
                        <div className="text-xs text-green-600">W3C Compliant</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protocol Benefits */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Consistency', desc: 'Same commands work across all browsers', icon: CheckCircle },
                  { title: 'Performance', desc: 'Faster execution with direct browser communication', icon: Zap },
                  { title: 'Reliability', desc: 'More stable with standardized protocol', icon: Shield },
                ].map((benefit, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <benefit.icon className="w-5 h-5 text-blue-600" />
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300">{benefit.title}</h5>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Relative Locators Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Compass className="w-6 h-6" />
            Relative Locators - Find Elements Spatially
          </CardTitle>
          <CardDescription>
            Revolutionary way to locate elements based on their position relative to other elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Visual Layout */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4 text-center">Visual Relative Locating</h4>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border-2 border-gray-300 dark:border-gray-600">
                {/* Simulated Web Page Layout */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="text-center">
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-6 py-2 rounded border-2 border-blue-300 dark:border-blue-600">
                      <span className="text-blue-700 dark:text-blue-300 font-semibold">Header (h1)</span>
                    </div>
                  </div>
                  
                  {/* Form Section */}
                  <div className="flex justify-center gap-8 items-center">
                    {/* Left side - Username */}
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded border-2 border-green-300 dark:border-green-600">
                        <span className="text-green-700 dark:text-green-300 text-sm">Username</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">input field</div>
                    </div>
                    
                    {/* Center - Password */}
                    <div className="text-center">
                      <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded border-2 border-orange-300 dark:border-orange-600">
                        <span className="text-orange-700 dark:text-orange-300 text-sm">Password</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">input field</div>
                    </div>
                    
                    {/* Right side - Submit Button */}
                    <div className="text-center">
                      <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded border-2 border-purple-300 dark:border-purple-600">
                        <span className="text-purple-700 dark:text-purple-300 text-sm">Submit</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">button</div>
                    </div>
                  </div>
                  
                  {/* Relative Position Indicators */}
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <ArrowUp className="w-3 h-3 text-blue-500" />
                      <span className="text-blue-600">above</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowDown className="w-3 h-3 text-green-500" />
                      <span className="text-green-600">below</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowRight className="w-3 h-3 text-orange-500" />
                      <span className="text-orange-600">toRightOf</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-3 h-3 text-purple-500" />
                      <span className="text-purple-600">near</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Practical Examples:</h4>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-slate-800 dark:text-slate-300">
{`// Find password field below username
WebElement username = driver.findElement(By.id("username"));
WebElement password = driver.findElement(RelativeLocators.withTagName("input")
    .below(username));

// Find submit button near password field
WebElement submit = driver.findElement(RelativeLocators.withTagName("button")
    .near(password));

// Chain multiple locators
WebElement submitBtn = driver.findElement(RelativeLocators.withTagName("button")
    .toRightOf(password)
    .below(username));`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chrome DevTools Protocol */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Terminal className="w-6 h-6" />
            Chrome DevTools Protocol - Deep Browser Integration
          </CardTitle>
          <CardDescription>
            Access powerful browser debugging and monitoring capabilities directly from your tests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* CDP Features */}
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300">Available Capabilities:</h4>
              <div className="space-y-3">
                {[
                  { title: 'Network Monitoring', desc: 'Capture all network requests and responses', icon: Activity },
                  { title: 'Performance Metrics', desc: 'Get detailed performance timing data', icon: Gauge },
                  { title: 'Console Access', desc: 'Read browser console logs and errors', icon: Terminal },
                  { title: 'Security Insights', desc: 'Analyze security headers and certificates', icon: Shield },
                  { title: 'DOM Manipulation', desc: 'Inspect and modify page elements', icon: Code },
                  { title: 'Memory Analysis', desc: 'Monitor memory usage and leaks', icon: Database },
                ].map((capability, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <capability.icon className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-slate-700 dark:text-slate-300">{capability.title}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{capability.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300">Real-time Monitoring:</h4>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Network Activity</span>
                    <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                      Monitoring
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { url: 'GET /api/users', status: 200, time: '45ms' },
                      { url: 'POST /api/login', status: 201, time: '120ms' },
                      { url: 'GET /api/profile', status: 200, time: '67ms' },
                    ].map((request, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-mono flex-1">{request.url}</span>
                        <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                          {request.status}
                        </Badge>
                        <span className="text-xs text-slate-500">{request.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white dark:bg-slate-800 rounded p-3 border border-gray-200 dark:border-gray-700">
                      <div className="text-xs text-slate-500 mb-1">Performance Score</div>
                      <div className="text-lg font-bold text-green-600">94</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded p-3 border border-gray-200 dark:border-gray-700">
                      <div className="text-xs text-slate-500 mb-1">Page Load Time</div>
                      <div className="text-lg font-bold text-blue-600">1.2s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Selenium Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <Grid3X3 className="w-6 h-6" />
            Enhanced Selenium Grid 4 - Distributed Testing Revolution
          </CardTitle>
          <CardDescription>
            Powerful improvements in distributed testing with Docker integration and better monitoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Grid Architecture */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4 text-center">Grid Architecture</h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Hub */}
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-purple-300 dark:border-purple-600 shadow-lg">
                    <Server className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300">Grid Hub</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Central Coordinator</p>
                    <div className="mt-2 text-xs text-purple-600">
                      <div>• Load Balancing</div>
                      <div>• Session Management</div>
                      <div>• Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Nodes */}
                <div className="space-y-3">
                  <h5 className="text-center font-semibold text-purple-700 dark:text-purple-300">Docker Nodes</h5>
                  {[
                    { name: 'Chrome Node', icon: Chrome, color: 'green' },
                    { name: 'Firefox Node', icon: Monitor, color: 'orange' },
                    { name: 'Edge Node', icon: Terminal, color: 'purple' },
                  ].map((node, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <Container className="w-4 h-4 text-blue-500" />
                        <node.icon className={`w-5 h-5 text-${node.color}-600`} />
                        <span className="text-sm font-semibold">{node.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clients */}
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
                    <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">Test Clients</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Parallel Execution</p>
                    <div className="mt-2 text-xs text-blue-600">
                      <div>• CI/CD Integration</div>
                      <div>• Cloud Support</div>
                      <div>• Auto-scaling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Improvements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Key Improvements:</h4>
                <div className="space-y-2">
                  {[
                    'Docker-native support',
                    'Real-time session monitoring',
                    'Improved load balancing',
                    'Better error reporting',
                    'GraphQL API for monitoring',
                    'Enhanced security features'
                  ].map((improvement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Use Cases:</h4>
                <div className="space-y-2">
                  {[
                    'Cross-browser parallel testing',
                    'Cloud-based test execution',
                    'CI/CD pipeline integration',
                    'Large-scale test automation',
                    'Performance testing',
                    'Multi-environment testing'
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Migration Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
            <ArrowUp className="w-6 h-6" />
            Migration from Selenium 3 to 4
          </CardTitle>
          <CardDescription>
            Smooth transition guide with breaking changes and new opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Breaking Changes:</h4>
              <div className="space-y-2">
                {[
                  'Removed deprecated methods',
                  'Changed JSON Wire Protocol to W3C',
                  'Updated driver initialization',
                  'Modified capabilities format',
                  'Changed element finding strategies'
                ].map((change, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{change}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Migration Benefits:</h4>
              <div className="space-y-2">
                {[
                  'Better cross-browser compatibility',
                  'Improved performance and stability',
                  'Access to new browser features',
                  'Enhanced debugging capabilities',
                  'Future-proof architecture'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Alert className="mt-6 border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <Info className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Quick Migration Tip</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Most Selenium 3 tests work with Selenium 4 without changes. The main difference is the underlying protocol, but your test code remains largely the same.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}
