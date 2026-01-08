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
  Router,
  Edit,
  Ban,
  Check,
  X,
  ArrowLeftRight,
  ArrowDownUp,
  Webhook,
  Plug,
  Unplug,
  ToggleLeft,
  ToggleRight,
  Power,
  PowerOff,
  WifiOff,
  ShoppingCart
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function NetworkInterceptionComponent() {
  const [selectedInterception, setSelectedInterception] = useState<string>('request');
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [interceptedRequests, setInterceptedRequests] = useState<any[]>([]);
  const [modifiedResponses, setModifiedResponses] = useState<any[]>([]);
  const [blockedRequests, setBlockedRequests] = useState<any[]>([]);
  const [showInterceptionAnimation, setShowInterceptionAnimation] = useState(false);

  const getNetworkInterceptionCode = (type: string = selectedInterception) => {
    if (type === 'request') {
      return [
        '// Network Interception - Request Modification',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable network interception',
        'devTools.getNetwork().enable();',
        'devTools.getNetwork().setCacheDisabled(true);',
        '',
        '// Add request interceptor',
        'devTools.getNetwork().addRequestHandler(request -> {',
        '    // Modify request headers',
        '    Map<String, Object> headers = new HashMap<>(request.getHeaders());',
        '    headers.put("Authorization", "Bearer token123");',
        '    headers.put("X-Custom-Header", "test-value");',
        '    ',
        '    // Modify request URL',
        '    String newUrl = request.getUrl().replace("api/v1", "api/v2");',
        '    ',
        '    // Continue with modified request',
        '    devTools.getNetwork().continueRequest(request.getRequestId(), newUrl, headers, null);',
        '});'
      ];
    } else if (type === 'response') {
      return [
        '// Network Interception - Response Modification',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable network interception',
        'devTools.getNetwork().enable();',
        '',
        '// Add response interceptor',
        'devTools.getNetwork().addResponseHandler(response -> {',
        '    // Check if response contains JSON',
        '    if (response.getMimeType().contains("application/json")) {',
        '        // Get response body',
        '        String responseBody = response.getBody();',
        '        ',
        '        // Modify JSON response',
        '        String modifiedBody = responseBody.replace("status:\\"active\\"", "status:\\"modified\\"");',
        '        ',
        '        // Create new headers',
        '        Map<String, Object> newHeaders = new HashMap<>(response.getHeaders());',
        '        newHeaders.put("X-Intercepted", "true");',
        '        ',
        '        // Continue with modified response',
        '        devTools.getNetwork().continueResponse(',
        '            response.getRequestId(),',
        '            200,',
        '            newHeaders,',
        '            modifiedBody.getBytes()',
        '        );',
        '    }',
        '});'
      ];
    } else if (type === 'block') {
      return [
        '// Network Interception - Request Blocking',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable network interception',
        'devTools.getNetwork().enable();',
        '',
        '// Add request blocker',
        'devTools.getNetwork().addRequestHandler(request -> {',
        '    String url = request.getUrl();',
        '    ',
        '    // Block specific domains',
        '    if (url.contains("analytics.google.com") || ',
        '        url.contains("facebook.com") ||',
        '        url.contains("doubleclick.net")) {',
        '        ',
        '        // Block the request',
        '        devTools.getNetwork().failRequest(',
        '            request.getRequestId(),',
        '            "AccessDenied"',
        '        );',
        '        return;',
        '    }',
        '    ',
        '    // Allow other requests',
        '    devTools.getNetwork().continueRequest(request.getRequestId(), null, null, null);',
        '});'
      ];
    } else if (type === 'mock') {
      return [
        '// Network Interception - API Mocking',
        'DevTools devTools = ((ChromeDriver)driver).getDevTools();',
        'devTools.createSession();',
        '',
        '// Enable network interception',
        'devTools.getNetwork().enable();',
        '',
        '// Add mock response handler',
        'devTools.getNetwork().addRequestHandler(request -> {',
        '    String url = request.getUrl();',
        '    ',
        '    // Mock API responses',
        '    if (url.contains("/api/users")) {',
        '        String mockResponse = "{\\"users\\":[{\\"id\\":1,\\"name\\":\\"John\\"}]}";',
        '        Map<String, Object> headers = Map.of("Content-Type", "application/json");',
        '        ',
        '        devTools.getNetwork().continueResponse(',
        '            request.getRequestId(),',
        '            200,',
        '            headers,',
        '            mockResponse.getBytes()',
        '        );',
        '    } else if (url.contains("/api/login")) {',
        '        String mockResponse = "{\\"token\\":\\"mock-jwt-token\\",\\"success\\":true}";',
        '        Map<String, Object> headers = Map.of("Content-Type", "application/json");',
        '        ',
        '        devTools.getNetwork().continueResponse(',
        '            request.getRequestId(),',
        '            200,',
        '            headers,',
        '            mockResponse.getBytes()',
        '        );',
        '    }',
        '});'
      ];
    }
    return [];
  };

  const simulateNetworkInterceptionDemo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setInterceptedRequests([]);
    setModifiedResponses([]);
    setBlockedRequests([]);
    setShowInterceptionAnimation(true);
    
    const steps = [
      { step: 0, delay: 1000, action: 'Initialize Network Interception', type: 'setup' },
      { step: 1, delay: 800, action: 'Enable Request Interception', type: 'request' },
      { step: 2, delay: 1200, action: 'Intercept and Modify Request', type: 'request' },
      { step: 3, delay: 800, action: 'Analyze Request Pattern', type: 'request' },
      { step: 4, delay: 1000, action: 'Enable Response Interception', type: 'response' },
      { step: 5, delay: 1200, action: 'Intercept and Modify Response', type: 'response' },
      { step: 6, delay: 800, action: 'Mock API Response', type: 'response' },
      { step: 7, delay: 1000, action: 'Enable Request Blocking', type: 'block' },
      { step: 8, delay: 1200, action: 'Block Unwanted Requests', type: 'block' },
      { step: 9, delay: 800, action: 'Filter Analytics Traffic', type: 'block' },
      { step: 10, delay: 1000, action: 'Enable API Mocking', type: 'mock' },
      { step: 11, delay: 1200, action: 'Return Mock Responses', type: 'mock' },
      { step: 12, delay: 800, action: 'Optimize Performance', type: 'mock' },
      { step: 13, delay: 1000, action: 'Complete Integration Test', type: 'complete' },
      { step: 14, delay: 1200, action: 'Generate Test Report', type: 'complete' },
    ];

    for (const { step, delay, action, type } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      
      // Simulate request interception
      if (type === 'request' && step >= 2) {
        setInterceptedRequests(prev => [...prev, {
          url: `GET /api/intercepted-${step}`,
          original: 'Original request',
          modified: 'Headers enhanced',
          status: 'intercepted'
        }]);
      }
      
      // Simulate response mocking
      if (type === 'response' && step >= 5) {
        setModifiedResponses(prev => [...prev, {
          url: `GET /api/response-${step}`,
          original: 'Original response',
          modified: 'Content optimized',
          status: 'mocked'
        }]);
      }
      
      // Simulate request blocking
      if (type === 'block' && step >= 8) {
        setBlockedRequests(prev => [...prev, {
          url: `https://blocked-site-${step}.com`,
          reason: 'Security/Performance policy',
          status: 'blocked'
        }]);
      }
      
      // Simulate API mocking
      if (type === 'mock' && step >= 11) {
        setModifiedResponses(prev => [...prev, {
          url: `GET /api/mock-${step}`,
          original: 'Real API',
          modified: 'Mocked response',
          status: 'mocked'
        }]);
      }
    }

    setShowInterceptionAnimation(false);
    setIsDemoRunning(false);
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'network-interception',
    title: 'Network Interception',
    explanation: 'Advanced network request/response manipulation and mocking',
    category: '27. Selenium 4 Features'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const interceptionTypes = [
    {
      id: 'request',
      title: 'Request Interception',
      description: 'Modify outgoing requests before they reach the server',
      icon: Send,
      color: 'blue',
      features: ['Header modification', 'URL rewriting', 'Parameter injection', 'Authentication']
    },
    {
      id: 'response',
      title: 'Response Interception',
      description: 'Modify incoming responses before they reach the browser',
      icon: Download,
      color: 'green',
      features: ['Content modification', 'Header injection', 'Status code changes', 'Data transformation']
    },
    {
      id: 'block',
      title: 'Request Blocking',
      description: 'Block specific requests from reaching the network',
      icon: Ban,
      color: 'red',
      features: ['Domain blocking', 'URL filtering', 'Resource blocking', 'Privacy protection']
    },
    {
      id: 'mock',
      title: 'API Mocking',
      description: 'Return custom responses without hitting real servers',
      icon: PackageOpen,
      color: 'purple',
      features: ['Response mocking', 'API simulation', 'Test data generation', 'Offline testing']
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Network Interception"
        description="Master advanced network request/response manipulation, blocking, and mocking capabilities in Selenium 4 for complete test control"
        icon={Network}
        category="Selenium · Advanced Protocols"
        colorTheme="purple"
        badges={[
          { label: 'Request/Response Control', variant: 'secondary' },
          { label: 'API Mocking', variant: 'secondary' },
          { label: 'Network Security', variant: 'secondary' }
        ]}
      />

      {/* Network Interception Overview */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-700 dark:text-purple-300">
            <Network className="w-6 h-6" />
            What is Network Interception?
          </CardTitle>
          <CardDescription>
            Powerful capability to intercept, modify, block, and mock network requests and responses during test execution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Key Capabilities:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Edit className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Request Modification</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Modify headers, URLs, and request bodies before sending
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PackageOpen className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Response Manipulation</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Change response content, headers, and status codes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">Request Blocking</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Block unwanted requests for privacy and performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300">API Mocking</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Return custom responses without hitting real servers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Testing Benefits:</h4>
              <div className="space-y-3">
                {[
                  'Test offline scenarios',
                  'Simulate error conditions',
                  'Validate authentication flows',
                  'Improve test performance',
                  'Protect sensitive data',
                  'Control test environment'
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

      {/* Interception Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Layers className="w-6 h-6" />
            Interception Types & Capabilities
          </CardTitle>
          <CardDescription>
            Explore different types of network interception and their use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interceptionTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedInterception(type.id)}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedInterception === type.id
                    ? 'ring-2 ring-purple-500 shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${type.color}-500 to-${type.color}-600 rounded-full flex items-center justify-center`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.slice(0, 2).map((feature, index) => (
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

      {/* Comprehensive Network Interception Animated Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-indigo-600 dark:text-indigo-400">
            <Activity className="w-6 h-6" />
            Complete Network Interception Animated Showcase
          </CardTitle>
          <CardDescription>
            Experience all network interception capabilities working together with real-time animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Integrated Network Flow Animation */}
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-slate-950/20 p-8 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-6 text-center text-lg">
                Complete Network Interception Flow
              </h4>
              
              <div className="grid md:grid-cols-6 gap-3">
                {[
                  { step: 'Client Request', desc: 'Browser sends', icon: Send, color: 'blue' },
                  { step: 'Intercept', desc: 'Selenium captures', icon: Eye, color: 'indigo' },
                  { step: 'Analyze', desc: 'Process request', icon: Search, color: 'sky' },
                  { step: 'Modify/Block', desc: 'Transform action', icon: Edit, color: 'violet' },
                  { step: 'Forward/Mock', desc: 'Send response', icon: PackageOpen, color: 'purple' },
                  { step: 'Complete', desc: 'Browser receives', icon: CheckCircle, color: 'slate' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`bg-white dark:bg-slate-800 rounded-lg p-3 border-2 transition-all duration-700 ${
                      currentStep >= index ? 'border-indigo-400 shadow-lg transform scale-105' : 'border-gray-200 dark:border-gray-700'
                    }`}>
                      <item.icon className={`w-6 h-6 mx-auto mb-2 transition-all duration-700 ${
                        currentStep >= index ? `text-${item.color}-600 animate-pulse` : 'text-gray-400'
                      }`} />
                      <h5 className="font-semibold text-slate-700 dark:text-slate-300 text-xs">
                        {item.step}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {item.desc}
                      </p>
                    </div>
                    {index < 5 && (
                      <ArrowRight className={`w-3 h-3 mx-auto mt-2 transition-all duration-700 ${
                        currentStep >= index ? 'text-indigo-500 animate-bounce' : 'text-gray-400'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Monitoring Dashboard */}
            <div className="grid md:grid-cols-4 gap-4">
              {/* Request Interception */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-700 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Request Interception</h4>
                  <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700 animate-pulse">
                    {interceptedRequests.length} Modified
                  </Badge>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {interceptedRequests.slice(-2).map((request, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-blue-200 dark:border-blue-700 animate-pulse">
                      <Edit className="w-3 h-3 text-blue-500" />
                      <span className="text-xs font-mono flex-1">{request.url}</span>
                      <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                        Modified
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Mocking */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-700 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Response Mocking</h4>
                  <Badge variant="outline" className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 animate-pulse">
                    {modifiedResponses.length} Mocked
                  </Badge>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {modifiedResponses.slice(-2).map((response, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-emerald-200 dark:border-emerald-700 animate-pulse">
                      <PackageOpen className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs font-mono flex-1">{response.url}</span>
                      <Badge variant="outline" className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700">
                        Mocked
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Blocking */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 p-4 rounded-xl border-2 border-rose-200 dark:border-rose-700 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-rose-700 dark:text-rose-300">Request Blocking</h4>
                  <Badge variant="outline" className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700 animate-pulse">
                    {blockedRequests.length} Blocked
                  </Badge>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {blockedRequests.slice(-2).map((request, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-rose-200 dark:border-rose-700 animate-pulse">
                      <Ban className="w-3 h-3 text-rose-500" />
                      <span className="text-xs font-mono flex-1">{request.url}</span>
                      <Badge variant="outline" className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700">
                        Blocked
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Impact */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-700 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-300">Performance Impact</h4>
                  <Badge variant="outline" className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700 animate-pulse">
                    Active
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Latency:</span>
                    <span className="font-mono animate-pulse">{Math.floor(Math.random() * 50) + 10}ms</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Throughput:</span>
                    <span className="font-mono animate-pulse">{Math.floor(Math.random() * 1000) + 500} req/s</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Success Rate:</span>
                    <span className="font-mono text-emerald-600 animate-pulse">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo Controls */}
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-slate-950/20 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex justify-center">
                <Button
                  onClick={simulateNetworkInterceptionDemo}
                  disabled={isDemoRunning}
                  className="gap-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-700 hover:via-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3 transition-all duration-500 transform hover:scale-105"
                >
                  {isDemoRunning ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Running Complete Network Interception Demo...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Start Complete Network Interception Demo
                    </>
                  )}
                </Button>
              </div>

              {/* Enhanced Demo Progress */}
              {isDemoRunning && (
                <div className="mt-6 space-y-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">Demo Progress</span>
                        <span className="text-sm text-indigo-600">Step {currentStep + 1} of 15</span>
                      </div>
                      <div className="w-full bg-indigo-200 dark:bg-indigo-800 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 h-3 rounded-full transition-all duration-700"
                          style={{ width: `${((currentStep + 1) / 15) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-slate-700 dark:text-slate-300">
            <Code className="w-6 h-6" />
            Network Interception Code Examples
          </CardTitle>
          <CardDescription>
            Practical code examples for implementing network interception in Selenium 4
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Interception Type Selection */}
            <div className="flex gap-2 mb-6 border-b">
              {interceptionTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedInterception(type.id)}
                  className={`px-6 py-3 font-medium transition-all rounded-t-lg ${
                    selectedInterception === type.id
                      ? 'bg-purple-600 text-white border-b-2 border-purple-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {type.title}
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {interceptionTypes.find(t => t.id === selectedInterception)?.title} Example
                  </span>
                </div>
                <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                  Java + Selenium 4
                </Badge>
              </div>
              
              <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-gray-300 dark:border-gray-600">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-slate-800 dark:text-slate-300">
                    {getNetworkInterceptionCode(selectedInterception).join('\n')}
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
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <CheckCircle className="w-6 h-6" />
            Best Practices & Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Implementation
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Enable only necessary interceptions</li>
                <li>• Clean up interceptors after tests</li>
                <li>• Handle errors gracefully</li>
                <li>• Use specific URL patterns</li>
                <li>• Test interception logic separately</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Security
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Never log sensitive data</li>
                <li>• Validate modified requests</li>
 <li>• Use HTTPS in production</li>
                <li>• Protect authentication tokens</li>
                <li>• Audit interception rules</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Performance
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Minimize interception overhead</li>
                <li>• Use efficient matching patterns</li>
                <li>• Cache modified responses</li>
                <li>• Avoid blocking essential requests</li>
                <li>• Monitor interception impact</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Info className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Important Note</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Network interception is a powerful feature that should be used judiciously. Always ensure that your interception logic doesn't interfere with the application's normal behavior and that you clean up properly after tests.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}
