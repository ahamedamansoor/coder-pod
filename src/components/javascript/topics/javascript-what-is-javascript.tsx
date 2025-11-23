'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Play,
  Code2,
  Zap,
  Globe,
  Layers,
  Terminal,
  Sparkles,
  BookOpen,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Users,
  Award,
  Info,
  CheckCircle,
  ExternalLink,
  FileCode,
  Box,
  Workflow
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface JavaScriptWhatIsJavaScriptProps {
  onOpenEditor?: (code: string) => void;
}

export default function JavaScriptWhatIsJavaScript({ onOpenEditor }: JavaScriptWhatIsJavaScriptProps) {
  const [activePlayground, setActivePlayground] = useState<string>('');
  const [playgroundOutput, setPlaygroundOutput] = useState<string>('');
  const [activeSidebar, setActiveSidebar] = useState<string>('overview');

  const runCode = (code: string, playgroundId: string) => {
    setActivePlayground(playgroundId);
    try {
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      };

      eval(code);
      console.log = originalLog;
      setPlaygroundOutput(logs.join('\n') || '✓ Code executed successfully!');
    } catch (error) {
      setPlaygroundOutput(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Navigation sections
  const sections = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'history', label: 'History & Evolution', icon: TrendingUp },
    { id: 'features', label: 'Core Features', icon: Sparkles },
    { id: 'playground', label: 'Interactive Examples', icon: Play },
    { id: 'ecosystem', label: 'Ecosystem', icon: Globe },
  ];

  const codeExamples = [
    {
      id: 'hello',
      title: 'Hello World',
      description: 'Your first JavaScript program',
      code: `// The classic first program
console.log('Hello, World!');
console.log('Welcome to JavaScript!');

// JavaScript is case-sensitive
const message = 'Hello';
console.log(message);`
    },
    {
      id: 'variables',
      title: 'Variables & Types',
      description: 'Dynamic typing in action',
      code: `// Modern variable declarations
let name = 'JavaScript';
const year = 1995;
let isPopular = true;

console.log(typeof name);      // "string"
console.log(typeof year);      // "number"
console.log(typeof isPopular); // "boolean"

// Variables can change types
let dynamic = 42;
console.log(typeof dynamic);   // "number"
dynamic = "Now I'm a string";
console.log(typeof dynamic);   // "string"`
    },
    {
      id: 'functions',
      title: 'Functions',
      description: 'First-class functions',
      code: `// Function declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrow function (ES6+)
const greetArrow = (name) => \`Hello, \${name}!\`;

// Functions are values
const myFunc = greet;

console.log(greet('World'));
console.log(greetArrow('JavaScript'));
console.log(myFunc('Functions'));`
    },
    {
      id: 'async',
      title: 'Async Nature',
      description: 'Understanding the event loop',
      code: `// Synchronous vs Asynchronous
console.log('1. First');

setTimeout(() => {
  console.log('2. Timeout (async)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise (microtask)');
});

console.log('4. Last');

// Output order: 1, 4, 3, 2
// Shows: sync code → microtasks → macrotasks`
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-50/30 via-background to-orange-50/30 dark:from-yellow-950/10 dark:via-background dark:to-orange-950/10">
      {/* JavaScript Theme: Yellow/Orange gradient */}

      {/* Page Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <PageHeader
          icon={Zap}
          category="JavaScript Fundamentals"
          title="What is JavaScript?"
          description="Discover the world's most popular programming language"
          colorTheme="yellow"
        />
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex w-full">
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-yellow-200 dark:border-yellow-900/30 bg-gradient-to-b from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20">
          <nav className="p-6 space-y-2">
            <h3 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100 mb-4 uppercase tracking-wider flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              Contents
            </h3>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSidebar(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                  activeSidebar === section.id
                    ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30 font-semibold'
                    : 'text-yellow-900 dark:text-yellow-100 hover:bg-yellow-100 dark:hover:bg-yellow-900/30'
                }`}
              >
                <section.icon className="h-4 w-4 flex-shrink-0" />
                <span className="text-left">{section.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area - Viewport Width */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 space-y-12 max-w-none">

          {/* Overview Section */}
          <section id="overview" className="scroll-mt-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-yellow-900 dark:text-yellow-100 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-yellow-600" />
                What is JavaScript?
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl">
                JavaScript is a <strong className="text-yellow-700 dark:text-yellow-400">high-level, interpreted programming language</strong> that
                enables interactive and dynamic web pages. It's one of the three core technologies of the World Wide Web,
                alongside HTML and CSS.
              </p>
            </div>

            {/* Hero Card with Visual Diagram */}
            <Card className="border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 shadow-xl">
              <CardContent className="pt-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-yellow-900 dark:text-yellow-100">
                          The Language of Interactive Web
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/70">
                          JavaScript brings websites to life. From simple button clicks to complex applications like
                          Gmail, Netflix, and Facebook - JavaScript powers the interactivity you experience every day.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100 text-xs">
                        <Zap className="h-3 w-3 mr-1" /> Dynamic
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100 text-xs">
                        <Terminal className="h-3 w-3 mr-1" /> Interpreted
                      </Badge>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100 text-xs">
                        <Layers className="h-3 w-3 mr-1" /> Multi-paradigm
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100 text-xs">
                        <Globe className="h-3 w-3 mr-1" /> Universal
                      </Badge>
                    </div>

                    <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
                      <Info className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-sm">
                        <strong>Important:</strong> JavaScript is <strong>not related to Java</strong>. Despite the
                        similar name, they are completely different languages.
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Tech Stack Diagram */}
                  <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border-2 border-yellow-500/30 shadow-inner">
                    <h4 className="text-sm font-semibold mb-4 text-center text-yellow-900 dark:text-yellow-100">
                      Web Technology Stack
                    </h4>
                    <pre className="text-xs font-mono leading-relaxed text-gray-800 dark:text-gray-200">
{`    ┌─────────────────────────────┐
    │   🌐 Web Browser           │
    │   (Chrome, Firefox, etc.)  │
    └───────────┬─────────────────┘
                │
    ┌───────────▼─────────────────┐
    │                             │
    │  📄 HTML  (Structure)       │
    │     Defines what to show    │
    │                             │
    │  🎨 CSS   (Presentation)    │
    │     Defines how it looks    │
    │                             │
    │  ⚡ JavaScript (Behavior)   │
    │     Defines how it works    │
    │                             │
    └───────────┬─────────────────┘
                │
    ┌───────────▼─────────────────┐
    │  ✨ Interactive Web App     │
    │                             │
    │  • Dynamic content          │
    │  • User interactions        │
    │  • Real-time updates        │
    │  • API communication        │
    └─────────────────────────────┘`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Characteristics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Terminal,
                  title: 'Interpreted',
                  description: 'Executes directly without compilation',
                  color: 'text-blue-600'
                },
                {
                  icon: Box,
                  title: 'Dynamic Typing',
                  description: 'Variables can hold any data type',
                  color: 'text-green-600'
                },
                {
                  icon: GitBranch,
                  title: 'Prototype-based',
                  description: 'Objects inherit from other objects',
                  color: 'text-purple-600'
                },
                {
                  icon: Zap,
                  title: 'Event-driven',
                  description: 'Responds to user actions instantly',
                  color: 'text-orange-600'
                },
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105">
                  <CardContent className="pt-6">
                    <item.icon className={`h-10 w-10 ${item.color} mb-3`} />
                    <h4 className="font-semibold text-base mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-950/40 dark:to-orange-950/40 border-yellow-300 dark:border-yellow-900">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-900 dark:text-yellow-100 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  JavaScript by the Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Coffee, label: 'Created', value: '1995', sublabel: 'In 10 days!' },
                    { icon: TrendingUp, label: 'Rank', value: '#1', sublabel: 'Most used' },
                    { icon: Globe, label: 'Websites', value: '98%+', sublabel: 'Use JS' },
                    { icon: Users, label: 'Developers', value: '17M+', sublabel: 'Worldwide' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center space-y-2">
                      <stat.icon className="h-8 w-8 mx-auto text-yellow-700 dark:text-yellow-400" />
                      <div>
                        <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">{stat.value}</p>
                        <p className="text-xs text-yellow-700 dark:text-yellow-300 font-medium">{stat.label}</p>
                        <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12 bg-yellow-200 dark:bg-yellow-900" />

          {/* History & Evolution Section */}
          <section id="history" className="scroll-mt-6 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
                History & Evolution
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl">
                From a 10-day prototype to powering the modern web
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Timeline */}
              <Card className="border-yellow-200 dark:border-yellow-900 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-900 dark:text-yellow-100">Key Milestones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      year: '1995',
                      event: 'JavaScript Born',
                      detail: 'Brendan Eich created JavaScript in 10 days at Netscape'
                    },
                    {
                      year: '1997',
                      event: 'ECMAScript Standard',
                      detail: 'First standardization (ECMAScript 1)'
                    },
                    {
                      year: '2009',
                      event: 'Node.js Released',
                      detail: 'JavaScript moves to server-side'
                    },
                    {
                      year: '2015',
                      event: 'ES6 Revolution',
                      detail: 'Major update: classes, modules, arrow functions'
                    },
                    {
                      year: '2020+',
                      event: 'Modern Era',
                      detail: 'Annual updates with new features'
                    },
                  ].map((milestone, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <Badge className="bg-yellow-600 text-white min-w-[70px] justify-center flex-shrink-0 shadow-md">
                        {milestone.year}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">{milestone.event}</p>
                        <p className="text-sm text-muted-foreground">{milestone.detail}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Where JavaScript Runs */}
              <Card className="border-yellow-200 dark:border-yellow-900 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-900 dark:text-yellow-100">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Where JavaScript Runs
                  </CardTitle>
                  <CardDescription>JavaScript has expanded far beyond browsers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-sm">Client-Side (Browsers)</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2 ml-7">
                        {['Chrome (V8)', 'Firefox (SpiderMonkey)', 'Safari (JavaScriptCore)', 'Edge (V8)'].map((browser, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <span>{browser}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-sm">Server-Side</h4>
                      </div>
                      <div className="space-y-1 ml-7 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>Node.js (most popular)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>Deno (secure runtime)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>Bun (fast & modern)</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Layers className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold text-sm">Mobile & Desktop</h4>
                      </div>
                      <div className="space-y-1 ml-7 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>React Native (mobile apps)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>Electron (desktop apps)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12 bg-yellow-200 dark:bg-yellow-900" />

          {/* Core Features Section */}
          <section id="features" className="scroll-mt-6 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-yellow-600" />
                Core Features
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl">
                What makes JavaScript unique and powerful
              </p>
            </div>

            <Tabs defaultValue="typing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-yellow-100 dark:bg-yellow-900/30">
                <TabsTrigger value="typing" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                  Dynamic Typing
                </TabsTrigger>
                <TabsTrigger value="functions" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                  First-Class Functions
                </TabsTrigger>
                <TabsTrigger value="async" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                  Asynchronous
                </TabsTrigger>
                <TabsTrigger value="prototype" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                  Prototype-based
                </TabsTrigger>
              </TabsList>

              <TabsContent value="typing" className="space-y-4 mt-6">
                <Card className="border-yellow-200 dark:border-yellow-900">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Box className="h-5 w-5 text-yellow-600" />
                      Dynamic Typing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Variables can hold any type of data and change types at runtime. No type declarations needed!
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
                      <pre className="text-sm font-mono text-gray-900 dark:text-gray-100 overflow-x-auto">
{`let data = 42;           // Number
console.log(typeof data); // "number"

data = "Hello";        // Now it's a String
console.log(typeof data); // "string"

data = true;           // Now it's a Boolean
console.log(typeof data); // "boolean"

data = [1, 2, 3];      // Now it's an Array
console.log(typeof data); // "object"

// This flexibility is powerful but requires care!`}
                      </pre>
                    </div>
                    <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                      <Lightbulb className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-sm">
                        <strong>Pro Tip:</strong> TypeScript adds optional static typing to JavaScript for better type safety in large applications.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="functions" className="space-y-4 mt-6">
                <Card className="border-yellow-200 dark:border-yellow-900">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-green-600" />
                      First-Class Functions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Functions are treated as values - they can be assigned to variables, passed as arguments, and returned from other functions.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
                      <pre className="text-sm font-mono text-gray-900 dark:text-gray-100 overflow-x-auto">
{`// Assign function to variable
const greet = function(name) {
  return 'Hello, ' + name;
};

// Pass function as argument
function execute(fn, value) {
  return fn(value);
}

console.log(execute(greet, 'World')); // "Hello, World"

// Return function from function
function multiplier(factor) {
  return (x) => x * factor;
}

const double = multiplier(2);
console.log(double(5)); // 10`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="async" className="space-y-4 mt-6">
                <Card className="border-yellow-200 dark:border-yellow-900">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-purple-600" />
                      Asynchronous Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      JavaScript handles operations without blocking, keeping your UI responsive while waiting for data.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
                      <pre className="text-sm font-mono text-gray-900 dark:text-gray-100 overflow-x-auto">
{`// Modern async/await syntax
async function fetchUserData() {
  const response = await fetch('/api/user');
  const data = await response.json();
  return data;
}

// Promise-based approach
fetch('/api/user')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Callback approach (older style)
setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Callbacks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Promises</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Async/Await</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Event Loop</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prototype" className="space-y-4 mt-6">
                <Card className="border-yellow-200 dark:border-yellow-900">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-orange-600" />
                      Prototype-Based Inheritance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Objects inherit directly from other objects. ES6 classes are syntactic sugar over prototypes.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
                      <pre className="text-sm font-mono text-gray-900 dark:text-gray-100 overflow-x-auto">
{`// ES6 Class syntax (syntactic sugar)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks!\`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // "Buddy barks!"

// Behind the scenes, it's all prototypes!`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* What JS Can Do */}
            <Card className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-yellow-900 dark:text-yellow-100">
                  <Rocket className="h-6 w-6 text-yellow-600" />
                  What Can JavaScript Do?
                </CardTitle>
                <CardDescription>
                  The capabilities that make JavaScript essential for modern web development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: '🎨 DOM Manipulation',
                      items: ['Add/remove elements', 'Change styles', 'Modify content', 'Animate elements']
                    },
                    {
                      title: '🖱️ Event Handling',
                      items: ['Click events', 'Keyboard input', 'Form submissions', 'Mouse movements']
                    },
                    {
                      title: '🌐 Network Requests',
                      items: ['Fetch API calls', 'WebSocket connections', 'Server communication', 'Real-time updates']
                    },
                    {
                      title: '💾 Data Storage',
                      items: ['localStorage', 'sessionStorage', 'IndexedDB', 'Cookies']
                    },
                    {
                      title: '✅ Form Validation',
                      items: ['Input validation', 'Error messages', 'Live feedback', 'Custom rules']
                    },
                    {
                      title: '🎬 Animations',
                      items: ['CSS animations', 'Canvas graphics', 'WebGL 3D', 'SVG manipulation']
                    },
                  ].map((capability, idx) => (
                    <Card key={idx} className="bg-white dark:bg-gray-950 border-yellow-200 dark:border-yellow-900 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-semibold">{capability.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1.5">
                          {capability.items.map((item, i) => (
                            <li key={i} className="text-xs flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-600 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12 bg-yellow-200 dark:bg-yellow-900" />

          {/* Interactive Playground Section */}
          <section id="playground" className="scroll-mt-6 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-3">
                <Play className="h-8 w-8 text-green-600" />
                Interactive Playground
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl">
                Try these examples right here - click "Run Code" to see JavaScript in action!
              </p>
            </div>

            <div className="grid gap-6">
              {codeExamples.map((example) => (
                <Card key={example.id} className="border-l-4 border-l-green-500 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-yellow-900 dark:text-yellow-100">{example.title}</CardTitle>
                        <CardDescription>{example.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs border-green-500 text-green-700 dark:text-green-400">
                        <Play className="h-3 w-3 mr-1" />
                        Interactive
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Code Block with theme support */}
                    <div className="bg-gray-100 dark:bg-gray-950 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-800">
                      <pre className="text-sm font-mono text-gray-900 dark:text-gray-100 overflow-x-auto whitespace-pre">
                        {example.code}
                      </pre>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        onClick={() => runCode(example.code, example.id)}
                        className="bg-green-600 hover:bg-green-700 text-white shadow-md"
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Run Code
                      </Button>
                      {onOpenEditor && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onOpenEditor(example.code)}
                          className="border-yellow-500 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                        >
                          <Code2 className="h-4 w-4 mr-1" />
                          Open in Editor
                        </Button>
                      )}
                    </div>

                    {/* Output Display */}
                    {activePlayground === example.id && (
                      <Card className="bg-gray-50 dark:bg-gray-900 border-2 border-green-500/30">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm flex items-center gap-2 text-green-700 dark:text-green-400">
                            <Terminal className="h-4 w-4" />
                            Console Output:
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <pre className="text-sm font-mono text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                            {playgroundOutput}
                          </pre>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
              <Lightbulb className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>Experiment!</strong> Try modifying the code examples above and run them again.
                Change values, add new lines, and see what happens. Learning by doing is the best way!
              </AlertDescription>
            </Alert>
          </section>

          <Separator className="my-12 bg-yellow-200 dark:bg-yellow-900" />

          {/* Ecosystem Section */}
          <section id="ecosystem" className="scroll-mt-6 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-3">
                <Globe className="h-8 w-8 text-blue-600" />
                The JavaScript Ecosystem
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl">
                A vast collection of tools, libraries, and frameworks
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="frameworks" className="border-yellow-200 dark:border-yellow-900">
                <AccordionTrigger className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 hover:text-yellow-700 dark:hover:text-yellow-300">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-blue-600" />
                    Frontend Frameworks & Libraries
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {[
                      { name: 'React', desc: 'Component-based UI library by Meta', color: 'bg-blue-100 dark:bg-blue-900/30' },
                      { name: 'Vue.js', desc: 'Progressive framework for building UIs', color: 'bg-green-100 dark:bg-green-900/30' },
                      { name: 'Angular', desc: 'Full-featured framework by Google', color: 'bg-red-100 dark:bg-red-900/30' },
                      { name: 'Svelte', desc: 'Compile-time framework', color: 'bg-orange-100 dark:bg-orange-900/30' },
                    ].map((framework, idx) => (
                      <Card key={idx} className={`${framework.color} border-none`}>
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-sm mb-1">{framework.name}</h4>
                          <p className="text-xs text-muted-foreground">{framework.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="runtime" className="border-yellow-200 dark:border-yellow-900">
                <AccordionTrigger className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 hover:text-yellow-700 dark:hover:text-yellow-300">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-green-600" />
                    Runtime Environments
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-4">
                    {[
                      { name: 'Node.js', desc: 'Most popular JavaScript runtime built on V8 engine', url: 'https://nodejs.org' },
                      { name: 'Deno', desc: 'Secure TypeScript & JavaScript runtime', url: 'https://deno.com' },
                      { name: 'Bun', desc: 'Fast all-in-one JavaScript runtime', url: 'https://bun.sh' },
                    ].map((runtime, idx) => (
                      <Card key={idx} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-4 flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{runtime.name}</h4>
                            <p className="text-xs text-muted-foreground">{runtime.desc}</p>
                          </div>
                          <a
                            href={runtime.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-600 hover:text-yellow-700"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tools" className="border-yellow-200 dark:border-yellow-900">
                <AccordionTrigger className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 hover:text-yellow-700 dark:hover:text-yellow-300">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-purple-600" />
                    Package Managers & Build Tools
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">Package Managers</h4>
                      {['npm', 'yarn', 'pnpm'].map((pm, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{pm}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">Bundlers</h4>
                      {['Webpack', 'Vite', 'Rollup'].map((tool, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">Testing</h4>
                      {['Jest', 'Vitest', 'Cypress'].map((test, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* npm Stats */}
            <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-900 dark:text-blue-100">
                  <Award className="h-5 w-5 text-blue-600" />
                  npm - The Package Registry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">2M+</p>
                    <p className="text-sm text-muted-foreground">Packages</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">40B+</p>
                    <p className="text-sm text-muted-foreground">Downloads/month</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">#1</p>
                    <p className="text-sm text-muted-foreground">Largest ecosystem</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Official Resources */}
            <Card className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-yellow-900 dark:text-yellow-100">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                  Official Documentation & Learning Resources
                </CardTitle>
                <CardDescription>
                  Learn from authoritative sources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'MDN Web Docs',
                      desc: 'Comprehensive JavaScript documentation by Mozilla',
                      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                      icon: BookOpen
                    },
                    {
                      title: 'ECMAScript Specification',
                      desc: 'Official language specification',
                      url: 'https://tc39.es/ecma262/',
                      icon: FileCode
                    },
                    {
                      title: 'Node.js Documentation',
                      desc: 'Official Node.js runtime docs',
                      url: 'https://nodejs.org/docs/',
                      icon: Terminal
                    },
                    {
                      title: 'JavaScript.info',
                      desc: 'Modern JavaScript tutorial',
                      url: 'https://javascript.info/',
                      icon: Lightbulb
                    },
                  ].map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="border-yellow-200 dark:border-yellow-900 hover:shadow-lg hover:border-yellow-400 dark:hover:border-yellow-600 transition-all">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                                <resource.icon className="h-5 w-5 text-yellow-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm mb-1 group-hover:text-yellow-700 dark:group-hover:text-yellow-300">
                                  {resource.title}
                                </h4>
                                <p className="text-xs text-muted-foreground">{resource.desc}</p>
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-yellow-600" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps */}
          <Card className="mt-12 border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-yellow-900 dark:text-yellow-100">
                <Rocket className="h-6 w-6 text-yellow-600" />
                Ready to Dive Deeper?
              </CardTitle>
              <CardDescription>
                Continue your JavaScript learning journey with these topics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: 'Variables & Types', icon: Box, color: 'bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50' },
                  { title: 'Functions', icon: Code2, color: 'bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50' },
                  { title: 'Arrays & Objects', icon: Database, color: 'bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50' },
                  { title: 'DOM Manipulation', icon: Globe, color: 'bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-900/50' },
                ].map((topic, idx) => (
                  <Card key={idx} className={`${topic.color} border-none transition-all cursor-pointer hover:scale-105 hover:shadow-lg`}>
                    <CardContent className="pt-6 text-center">
                      <topic.icon className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold text-sm">{topic.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Explore the complete JavaScript curriculum to master web development →
              </p>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  );
}

