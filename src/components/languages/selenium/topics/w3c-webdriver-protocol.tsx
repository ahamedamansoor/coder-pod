'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Network,
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
  Terminal,
  Globe,
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

export function W3CWebDriverProtocolComponent() {
  const [selectedCommand, setSelectedCommand] = useState<string>('navigate');
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [protocolFlow, setProtocolFlow] = useState<string[]>([]);
  const [showProtocolAnimation, setShowProtocolAnimation] = useState(false);

  const getProtocolCode = (command: string = selectedCommand) => {
    if (command === 'navigate') {
      return [
        '// W3C WebDriver Protocol - Navigation Command',
        '// HTTP POST request to /session/:sessionId/url',
        '{',
        '  "method": "POST",',
        '  "url": "/session/12345/url",',
        '  "data": {',
        '    "url": "https://example.com"',
        '  }',
        '}',
        '',
        '// Response from browser',
        '{',
        '  "value": null,',
        '  "sessionId": "12345"',
        '}',
        '',
        '// Java equivalent',
        'driver.get("https://example.com");'
      ];
    } else if (command === 'element') {
      return [
        '// W3C WebDriver Protocol - Find Element',
        '// HTTP POST request to /session/:sessionId/element',
        '{',
        '  "method": "POST",',
        '  "url": "/session/12345/element",',
        '  "data": {',
        '    "using": "css selector",',
        '    "value": "#submit-button"',
        '  }',
        '}',
        '',
        '// Response from browser',
        '{',
        '  "value": {',
        '    "element-6066-11e4-a52e-4f735466cecf": "0.123456789"',
        '  }',
        '}',
        '',
        '// Java equivalent',
        'WebElement element = driver.findElement(By.id("submit-button"));'
      ];
    } else if (command === 'click') {
      return [
        '// W3C WebDriver Protocol - Click Element',
        '// HTTP POST request to /session/:sessionId/element/:elementId/click',
        '{',
        '  "method": "POST",',
        '  "url": "/session/12345/element/0.123456789/click",',
        '  "data": {}',
        '}',
        '',
        '// Response from browser',
        '{',
        '  "value": null,',
        '  "sessionId": "12345"',
        '}',
        '',
        '// Java equivalent',
        'element.click();'
      ];
    } else if (command === 'execute') {
      return [
        '// W3C WebDriver Protocol - Execute Script',
        '// HTTP POST request to /session/:sessionId/execute/sync',
        '{',
        '  "method": "POST",',
        '  "url": "/session/12345/execute/sync",',
        '  "data": {',
        '    "script": "return document.title;",',
        '    "args": []',
        '  }',
        '}',
        '',
        '// Response from browser',
        '{',
        '  "value": "Page Title",',
        '  "sessionId": "12345"',
        '}',
        '',
        '// Java equivalent',
        'String title = (String) ((JavascriptExecutor)driver)',
        '    .executeScript("return document.title;");'
      ];
    }
    return [];
  };

  const simulateProtocolDemo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setProtocolFlow([]);
    setShowProtocolAnimation(true);
    
    const steps = [
      { step: 0, delay: 1500, action: 'Client sends HTTP request', flow: 'Request → Server' },
      { step: 1, delay: 1000, action: 'Server validates command', flow: 'Server validates' },
      { step: 2, delay: 1500, action: 'Server forwards to browser', flow: 'Server → Browser' },
      { step: 3, delay: 1000, action: 'Browser executes command', flow: 'Browser executes' },
      { step: 4, delay: 1500, action: 'Browser returns result', flow: 'Browser → Server' },
      { step: 5, delay: 1000, action: 'Server formats response', flow: 'Server formats' },
      { step: 6, delay: 1500, action: 'Client receives response', flow: 'Response → Client' },
    ];

    for (const { step, delay, action, flow } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      if (flow) {
        setProtocolFlow(prev => [...prev, flow]);
      }
    }

    setShowProtocolAnimation(false);
    setIsDemoRunning(false);
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'w3c-webdriver-protocol',
    title: 'W3C WebDriver Protocol',
    explanation: 'Understanding the standardized WebDriver protocol',
    category: '27. Selenium 4 Features'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const commands = [
    {
      id: 'navigate',
      title: 'Navigation',
      description: 'Navigate to a URL',
      icon: Compass,
      color: 'blue',
      endpoint: '/session/:id/url',
      method: 'POST'
    },
    {
      id: 'element',
      title: 'Find Element',
      description: 'Locate elements on the page',
      icon: Search,
      color: 'green',
      endpoint: '/session/:id/element',
      method: 'POST'
    },
    {
      id: 'click',
      title: 'Click Element',
      description: 'Click on an element',
      icon: Target,
      color: 'orange',
      endpoint: '/session/:id/element/:id/click',
      method: 'POST'
    },
    {
      id: 'execute',
      title: 'Execute Script',
      description: 'Execute JavaScript',
      icon: Code,
      color: 'purple',
      endpoint: '/session/:id/execute/sync',
      method: 'POST'
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="W3C WebDriver Protocol"
        description="Master the standardized WebDriver protocol that enables consistent browser automation across all browsers"
        icon={Network}
        colorTheme="blue"
        badges={[
          { label: 'W3C Standard', variant: 'secondary' },
          { label: 'Cross-Browser', variant: 'secondary' },
          { label: 'HTTP-Based', variant: 'secondary' }
        ]}
      />

      {/* Protocol Overview */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-700 dark:text-blue-300">
            <Network className="w-6 h-6" />
            What is the W3C WebDriver Protocol?
          </CardTitle>
          <CardDescription>
            The industry-standard protocol that defines how automation tools communicate with web browsers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Key Concepts:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Standardized API</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Same commands work across all browsers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">HTTP-based Communication</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Uses RESTful HTTP requests and responses
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PackageOpen className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">JSON Format</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Structured data exchange in JSON format
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Browser Native</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Direct browser implementation, no plugins needed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Benefits:</h4>
              <div className="space-y-3">
                {[
                  'Consistent behavior across browsers',
                  'Better performance and reliability',
                  'Future-proof and maintained by W3C',
                  'No browser-specific plugins required',
                  'Simplified setup and configuration',
                  'Enhanced security model'
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

      {/* Protocol Communication Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-6 h-6" />
            Protocol Communication Flow
          </CardTitle>
          <CardDescription>
            Visual representation of how commands flow between client, server, and browser
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <div className="space-y-8">
              {/* Architecture Diagram */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Client */}
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
                    <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">Test Client</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Selenium WebDriver</p>
                    <div className="mt-2 text-xs text-blue-600">
                      <div>• Sends HTTP requests</div>
                      <div>• Receives JSON responses</div>
                      <div>• Manages session</div>
                    </div>
                  </div>
                </div>

                {/* Server */}
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-purple-300 dark:border-purple-600 shadow-lg">
                    <Server className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300">WebDriver Server</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Browser Driver</p>
                    <div className="mt-2 text-xs text-purple-600">
                      <div>• Validates commands</div>
                      <div>• Translates to browser API</div>
                      <div>• Manages connection</div>
                    </div>
                  </div>
                </div>

                {/* Browser */}
                <div className="text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-green-300 dark:border-green-600 shadow-lg">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Web Browser</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Chrome/Firefox/Safari</p>
                    <div className="mt-2 text-xs text-green-600">
                      <div>• Executes commands</div>
                      <div>• Manipulates DOM</div>
                      <div>• Returns results</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Animation */}
              <div className="space-y-4">
                <h4 className="font-semibold text-center text-blue-700 dark:text-blue-300">Command Flow</h4>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {[
                    { label: 'HTTP Request', icon: Send, color: 'blue' },
                    { label: 'Validation', icon: CheckSquare, color: 'purple' },
                    { label: 'Execution', icon: Play, color: 'green' },
                    { label: 'Response', icon: Download, color: 'orange' },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= index ? `border-${step.color}-500 shadow-lg` : 'border-gray-300'
                      }`}>
                        <step.icon className={`w-6 h-6 ${currentStep >= index ? `text-${step.color}-600` : 'text-gray-400'}`} />
                      </div>
                      <div className="text-xs mt-1 font-medium">{step.label}</div>
                    </div>
                  ))}
                </div>

                {/* Protocol Flow Display */}
                {protocolFlow.length > 0 && (
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h5 className="text-sm font-semibold mb-2">Current Flow:</h5>
                    <div className="space-y-1">
                      {protocolFlow.map((flow, index) => (
                        <div key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-blue-500" />
                          {flow}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              onClick={simulateProtocolDemo}
              disabled={isDemoRunning}
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              {isDemoRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running Protocol Demo...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Communication Demo
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Command Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <FileCode className="w-6 h-6" />
            Command Structure & Endpoints
          </CardTitle>
          <CardDescription>
            Understanding the HTTP commands and their structure in the W3C protocol
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Command Selection */}
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Common Commands:</h4>
              <div className="space-y-3">
                {commands.map((command) => (
                  <div
                    key={command.id}
                    onClick={() => setSelectedCommand(command.id)}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedCommand === command.id
                        ? 'ring-2 ring-blue-500 shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 bg-gradient-to-br from-${command.color}-500 to-${command.color}-600 rounded-full flex items-center justify-center`}>
                          <command.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-slate-800 dark:text-slate-200">
                            {command.title}
                          </h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {command.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                          {command.method}
                        </Badge>
                        <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {command.endpoint}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Protocol Example:</h4>
              <div className="bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileJson className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {commands.find(c => c.id === selectedCommand)?.title} Command
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                    W3C Protocol
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-gray-300 dark:border-gray-600">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-slate-800 dark:text-slate-300">
                      {getProtocolCode(selectedCommand).join('\n')}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Session Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Key className="w-6 h-6" />
            Session Management
          </CardTitle>
          <CardDescription>
            How WebDriver sessions are created, managed, and terminated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Session Lifecycle */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4 text-center">Session Lifecycle</h4>
              
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { 
                    title: 'Create Session', 
                    desc: 'POST /session',
                    icon: Unlock,
                    color: 'green',
                    details: 'Returns session ID'
                  },
                  { 
                    title: 'Execute Commands', 
                    desc: 'POST /session/:id/*',
                    icon: Play,
                    color: 'blue',
                    details: 'Send automation commands'
                  },
                  { 
                    title: 'Get Status', 
                    desc: 'GET /session/:id',
                    icon: Eye,
                    color: 'orange',
                    details: 'Check session status'
                  },
                  { 
                    title: 'Delete Session', 
                    desc: 'DELETE /session/:id',
                    icon: Lock,
                    color: 'red',
                    details: 'Close browser and cleanup'
                  },
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700">
                      <phase.icon className={`w-8 h-8 mx-auto mb-2 text-${phase.color}-600`} />
                      <h5 className="font-semibold text-slate-700 dark:text-slate-300">
                        {phase.title}
                      </h5>
                      <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded block my-2">
                        {phase.desc}
                      </code>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {phase.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Response Example */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Session Creation Response:</h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-slate-800 dark:text-slate-300">
{`{
  "value": {
    "sessionId": "12345-abcde-67890",
    "capabilities": {
      "browserName": "chrome",
      "browserVersion": "120.0.6099.129",
      "platformName": "linux"
    }
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Session Capabilities:</h4>
                <div className="space-y-2">
                  {[
                    'Browser name and version',
                    'Platform information',
                    'Supported features',
                    'Security settings',
                    'Window dimensions',
                    'Time zone configuration'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Compatibility */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Globe className="w-6 h-6" />
            Browser Compatibility Matrix
          </CardTitle>
          <CardDescription>
            W3C protocol support across different browsers and versions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Browser Grid */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4 text-center">Browser Support Status</h4>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Chrome', icon: Chrome, version: 'v+', status: 'Full Support', color: 'green' },
                  { name: 'Firefox', icon: Monitor, version: 'v47+', status: 'Full Support', color: 'green' },
                  { name: 'Safari', icon: Globe, version: 'v10+', status: 'Full Support', color: 'green' },
                  { name: 'Edge', icon: Terminal, version: 'v18+', status: 'Full Support', color: 'green' },
                ].map((browser) => (
                  <div key={browser.name} className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <browser.icon className={`w-8 h-8 mx-auto mb-2 text-${browser.color}-600`} />
                      <h5 className="font-semibold text-slate-700 dark:text-slate-300">
                        {browser.name}
                      </h5>
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {browser.version}
                      </div>
                      <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                        {browser.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Migration Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">From JSON Wire Protocol:</h4>
                <div className="space-y-2">
                  {[
                    'Deprecated browser-specific commands',
                    'Inconsistent error handling',
                    'Limited feature support',
                    'Performance bottlenecks',
                    'Complex setup requirements'
                  ].map((issue, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">To W3C Protocol:</h4>
                <div className="space-y-2">
                  {[
                    'Standardized command set',
                    'Consistent error responses',
                    'Enhanced security model',
                    'Better performance',
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
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <CheckCircle className="w-6 h-6" />
            Best Practices & Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Protocol Usage
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Use appropriate HTTP methods</li>
                <li>• Handle session management properly</li>
                <li>• Implement proper error handling</li>
                <li>• Respect rate limiting</li>
                <li>• Clean up sessions on completion</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Performance
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Reuse sessions when possible</li>
                <li>• Batch operations together</li>
                <li>• Use appropriate timeouts</li>
                <li>• Minimize page loads</li>
                <li>• Optimize element locating</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Security
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Use secure connections (HTTPS)</li>
                <li>• Validate all inputs</li>
                <li>• Implement proper authentication</li>
                <li>• Protect session IDs</li>
                <li>• Follow least privilege principle</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}
