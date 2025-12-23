'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Box,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Settings,
  Zap,
  Shield,
  Lock,
  Key,
  Database,
  Server,
  Monitor,
  Cpu,
  Layers,
  GitBranch,
  Package,
  Activity,
  Eye,
  EyeOff,
  ToggleLeft,
  ToggleRight,
  RadioIcon,
  Wifi,
  Cable,
  ArrowRight,
  ArrowDown,
  Users,
  FileText,
  Folder,
  HardDrive,
  Cloud,
  Terminal,
  Globe,
  Home,
  User,
  ShoppingCart,
  CreditCard
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function SingletonPatternComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('java');
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeRequests, setActiveRequests] = useState<string[]>([]);
  const [singletonInstance, setSingletonInstance] = useState<string | null>(null);
  const [showFlowAnimation, setShowFlowAnimation] = useState(false);

  const getInstanceCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'java') {
      return [
        'public class DatabaseConnection {',
        '    // Private static instance',
        '    private static DatabaseConnection instance;',
        '',
        '    // Private constructor',
        '    private DatabaseConnection() {',
        '        // Initialize connection',
        '        System.out.println("Database connection created");',
        '    }',
        '',
        '    // Public static method to get instance',
        '    public static synchronized DatabaseConnection getInstance() {',
        '        if (instance == null) {',
        '            instance = new DatabaseConnection();',
        '        }',
        '        return instance;',
        '    }',
        '',
        '    public void connect() {',
        '        System.out.println("Connected to database");',
        '    }',
        '}'
      ];
    } else if (language === 'python') {
      return [
        'class DatabaseConnection:',
        '    _instance = None',
        '    _initialized = False',
        '',
        '    def __new__(cls):',
        '        if cls._instance is None:',
        '            cls._instance = super(DatabaseConnection, cls).__new__(cls)',
        '        return cls._instance',
        '',
        '    def __init__(self):',
        '        if not self._initialized:',
        '            print("Database connection created")',
        '            self._initialized = True',
        '',
        '    def connect(self):',
        '        print("Connected to database")',
        '',
        '# Usage',
        'db1 = DatabaseConnection()',
        'db2 = DatabaseConnection()',
        'print(db1 is db2)  # True'
      ];
    } else {
      return [
        'class DatabaseConnection {',
        '    constructor() {',
        '        if (DatabaseConnection.instance) {',
        '            return DatabaseConnection.instance;',
        '        }',
        '        this.connection = null;',
        '        console.log("Database connection created");',
        '        DatabaseConnection.instance = this;',
        '    }',
        '',
        '    static getInstance() {',
        '        if (!DatabaseConnection.instance) {',
        '            DatabaseConnection.instance = new DatabaseConnection();',
        '        }',
        '        return DatabaseConnection.instance;',
        '    }',
        '',
        '    connect() {',
        '        console.log("Connected to database");',
        '    }',
        '}',
        '',
        '// Usage',
        'const db1 = DatabaseConnection.getInstance();',
        'const db2 = DatabaseConnection.getInstance();',
        'console.log(db1 === db2); // true'
      ];
    }
  };

  const simulateMultiClassDemo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setActiveRequests([]);
    setSingletonInstance(null);
    setShowFlowAnimation(true);
    
    const steps = [
      { step: 0, delay: 1500, action: 'UserService requests DatabaseConnection', request: 'UserService' },
      { step: 1, delay: 1000, action: 'Check if instance exists', request: null },
      { step: 2, delay: 1500, action: 'Create new instance', request: null, instance: 'DatabaseConnection@123' },
      { step: 3, delay: 1000, action: 'Return instance to UserService', request: null },
      { step: 4, delay: 1500, action: 'OrderService requests DatabaseConnection', request: 'OrderService' },
      { step: 5, delay: 1000, action: 'Check if instance exists', request: null },
      { step: 6, delay: 1500, action: 'Return existing instance', request: null },
      { step: 7, delay: 1500, action: 'PaymentService requests DatabaseConnection', request: 'PaymentService' },
      { step: 8, delay: 1000, action: 'Check if instance exists', request: null },
      { step: 9, delay: 1500, action: 'Return existing instance', request: null },
    ];

    for (const { step, delay, action, request, instance } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      
      if (request) {
        setActiveRequests(prev => [...prev, request]);
      }
      
      if (instance) {
        setSingletonInstance(instance);
      }
      
      if (step === 3 || step === 6 || step === 9) {
        // Simulate returning instance
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setShowFlowAnimation(false);
    setIsDemoRunning(false);
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'singleton-pattern',
    title: 'Singleton Pattern',
    explanation: 'Using Singleton for WebDriver instance management',
    category: '26. Advanced Design Patterns'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Singleton Design Pattern"
        description="Master the Singleton pattern with comprehensive diagrams showing how a single instance works across multiple classes and files"
        icon={Layers}
        colorTheme="purple"
        badges={[
          { label: 'Design Pattern', variant: 'secondary' },
          { label: 'Creational Pattern', variant: 'secondary' },
          { label: 'Global Access Point', variant: 'secondary' }
        ]}
      />

      {/* Comprehensive Multi-Class Diagram */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-700 dark:text-purple-300">
            <GitBranch className="w-6 h-6" />
            Multi-Class Singleton Architecture
          </CardTitle>
          <CardDescription>
            Visual diagram showing how multiple classes share the same Singleton instance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            {/* Architecture Diagram */}
            <div className="space-y-6">
              {/* Client Classes Row */}
              <div className="flex justify-center gap-8 flex-wrap">
                {[
                  { name: 'UserService', icon: User, color: 'blue' },
                  { name: 'OrderService', icon: ShoppingCart, color: 'green' },
                  { name: 'PaymentService', icon: CreditCard, color: 'orange' }
                ].map((service, index) => (
                  <div key={index} className="relative">
                    <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-${service.color}-300 dark:border-${service.color}-600 shadow-lg w-32`}>
                      <div className="text-center">
                        <service.icon className={`w-8 h-8 mx-auto mb-2 text-${service.color}-600`} />
                        <div className="text-sm font-semibold">{service.name}</div>
                        <div className="text-xs text-muted-foreground">Client Class</div>
                      </div>
                    </div>
                    {activeRequests.includes(service.name) && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Arrows pointing to Singleton */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-6 h-6 text-purple-600" />
                  <div className="text-sm font-semibold text-purple-700">getInstance() requests</div>
                  <ArrowDown className="w-6 h-6 text-purple-600" />
                </div>
              </div>

              {/* Singleton Class */}
              <div className="flex justify-center">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-purple-600 shadow-xl w-80">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full font-semibold">
                      <Database className="w-5 h-5" />
                      DatabaseConnection (Singleton)
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Lock className="w-4 h-4 text-red-500" />
                      <span className="font-mono text-red-600 dark:text-red-400">private static instance</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Lock className="w-4 h-4 text-red-500" />
                      <span className="font-mono text-red-600 dark:text-red-400">private constructor()</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Key className="w-4 h-4 text-green-500" />
                      <span className="font-mono text-green-600 dark:text-green-400">public static getInstance()</span>
                    </div>
                  </div>

                  {singletonInstance && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
                      <div className="text-xs text-green-800 dark:text-green-200 text-center">
                        Active Instance: <span className="font-mono font-bold">{singletonInstance}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Database Connection */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-6 h-6 text-purple-600" />
                  <div className="text-sm text-purple-700">Single Database Connection</div>
                  <ArrowDown className="w-6 h-6 text-purple-600" />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-slate-400 dark:border-slate-600 shadow-lg w-32">
                  <div className="text-center">
                    <HardDrive className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    <div className="text-sm font-semibold">Database</div>
                    <div className="text-xs text-muted-foreground">Single Connection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Activity className="w-6 h-6" />
            How Singleton Works: Step-by-Step Flow
          </CardTitle>
          <CardDescription>
            Detailed visualization of the Singleton pattern execution flow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Flow Steps */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-300 dark:bg-purple-700"></div>
              {[
                { step: 1, title: 'Client Request', desc: 'UserService calls DatabaseConnection.getInstance()', icon: Users },
                { step: 2, title: 'Check Instance', desc: 'Method checks if static instance is null', icon: Eye },
                { step: 3, title: 'Create Instance', desc: 'If null, create new instance using private constructor', icon: Package },
                { step: 4, title: 'Store Instance', desc: 'Store instance in static variable', icon: HardDrive },
                { step: 5, title: 'Return Instance', desc: 'Return the same instance to all clients', icon: ArrowRight },
                { step: 6, title: 'Future Requests', desc: 'Subsequent calls return the existing instance', icon: RefreshCw },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold z-10 ${
                    currentStep >= index ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className={`w-5 h-5 ${currentStep >= index ? 'text-purple-600' : 'text-gray-400'}`} />
                      <h3 className={`font-semibold ${currentStep >= index ? 'text-purple-700 dark:text-purple-300' : 'text-gray-500'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-sm ${currentStep >= index ? 'text-slate-700 dark:text-slate-300' : 'text-gray-400'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Demo Controls */}
            <div className="flex justify-center">
              <Button
                onClick={simulateMultiClassDemo}
                disabled={isDemoRunning}
                className="gap-2 bg-purple-600 hover:bg-purple-700"
              >
                {isDemoRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Running Animation...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Start Multi-Class Demo
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Structure Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Folder className="w-6 h-6" />
            Project File Structure
          </CardTitle>
          <CardDescription>
            How Singleton pattern is organized across multiple files in a real project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600">
            <div className="space-y-4">
              {/* File Tree */}
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold">src/main/java/com/example/</span>
                </div>
                
                <div className="ml-6 space-y-2">
                  {/* DatabaseConnection.java - The Singleton */}
                  <div className="flex items-center gap-2 p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">DatabaseConnection.java</span>
                    <Badge variant="outline" className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 border-purple-400 dark:border-purple-600">
                      Singleton
                    </Badge>
                  </div>
                  
                  {/* Service Classes */}
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">UserService.java</span>
                    <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                      Client
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700 dark:text-slate-300">OrderService.java</span>
                    <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                      Client
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600">
                    <FileText className="w-4 h-4 text-orange-600" />
                    <span className="text-slate-700 dark:text-slate-300">PaymentService.java</span>
                    <Badge variant="outline" className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                      Client
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Code Connections */}
              <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">How Files Connect:</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <span className="text-purple-700 dark:text-purple-300">// DatabaseConnection.java (Singleton)</span>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <span className="text-blue-700 dark:text-blue-300">// UserService.java</span>
                    <div className="text-xs text-blue-600 dark:text-blue-400">DatabaseConnection db = DatabaseConnection.getInstance();</div>
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    <span className="text-green-700 dark:text-green-300">// OrderService.java</span>
                    <div className="text-xs text-green-600 dark:text-green-400">DatabaseConnection db = DatabaseConnection.getInstance();</div>
                  </div>
                  <div className="p-2 bg-orange-50 dark:bg-orange-950/20 rounded">
                    <span className="text-orange-700 dark:text-orange-300">// PaymentService.java</span>
                    <div className="text-xs text-orange-600 dark:text-orange-400">DatabaseConnection db = DatabaseConnection.getInstance();</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Characteristics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Shield className="w-6 h-6" />
            Key Characteristics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-purple-700 dark:text-purple-300">Private Constructor</h3>
              <p className="text-sm text-muted-foreground">
                Prevents direct instantiation from outside the class
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-purple-700 dark:text-purple-300">Static Instance</h3>
              <p className="text-sm text-muted-foreground">
                Single static instance that belongs to the class itself
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-purple-700 dark:text-purple-300">Global Access Point</h3>
              <p className="text-sm text-muted-foreground">
                Public static method provides access to the instance
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Code className="w-6 h-6" />
            Implementation Examples
          </CardTitle>
          <CardDescription>
            Singleton pattern implementation in different programming languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6 border-b">
            {(['java', 'python', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 font-medium capitalize transition-all rounded-t-lg ${
                  selectedLanguage === lang
                    ? 'bg-purple-600 text-white border-b-2 border-purple-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'java' && '☕ Java'}
                {lang === 'python' && '🐍 Python'}
                {lang === 'javascript' && '🟨 JavaScript'}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {selectedLanguage === 'java' && 'Java Singleton Implementation'}
                  {selectedLanguage === 'python' && 'Python Singleton Implementation'}
                  {selectedLanguage === 'javascript' && 'JavaScript Singleton Implementation'}
                </span>
              </div>
              <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                Thread Safe
              </Badge>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {getInstanceCode(selectedLanguage).join('\n')}
                </code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selenium WebDriver Singleton */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Monitor className="w-6 h-6" />
            Selenium WebDriver Singleton
          </CardTitle>
          <CardDescription>
            Practical implementation of Singleton pattern for WebDriver management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Zap className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Why Use Singleton for WebDriver?</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Managing WebDriver instances with Singleton pattern ensures efficient resource utilization, consistent session management, and prevents browser overhead in your test suite.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Benefits:</h4>
              <div className="space-y-2">
                {[
                  'Single browser instance across tests',
                  'Reduced memory consumption',
                  'Faster test execution',
                  'Consistent session state',
                  'Easy resource cleanup'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Use Cases:</h4>
              <div className="space-y-2">
                {[
                  'Test framework initialization',
                  'Configuration management',
                  'Database connection pools',
                  'Logging services',
                  'Cache management'
                ].map((useCase, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedLanguage === 'java' && (
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                WebDriver Singleton Example (Java)
              </h4>
              <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-slate-800 dark:text-slate-300">
{`public class DriverManager {
    private static WebDriver driver;
    private static final ThreadLocal<WebDriver> threadDriver = 
        new ThreadLocal<>();
    
    private DriverManager() {}
    
    public static WebDriver getDriver() {
        if (threadDriver.get() == null) {
            WebDriver chromeDriver = new ChromeDriver();
            threadDriver.set(chromeDriver);
        }
        return threadDriver.get();
    }
    
    public static void quitDriver() {
        if (threadDriver.get() != null) {
            threadDriver.get().quit();
            threadDriver.remove();
        }
    }
}`}
                  </code>
                </pre>
              </div>
            </div>
          )}
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
                When to Use
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Resource pooling (connections, drivers)</li>
                <li>• Configuration management</li>
                <li>• Logging services</li>
                <li>• Cache management</li>
                <li>• Hardware interfaces</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                When to Avoid
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• When multiple instances are needed</li>
                <li>• In test environments</li>
                <li>• For simple data objects</li>
                <li>• When subclassing is required</li>
                <li>• In multi-threaded scenarios without proper sync</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Implementation Tips
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Use enum for singletons in Java</li>
                <li>• Consider dependency injection</li>
                <li>• Implement proper cleanup</li>
                <li>• Handle serialization carefully</li>
                <li>• Document the singleton behavior</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}
