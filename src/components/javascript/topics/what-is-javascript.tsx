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
    ArrowRight,
    Brain,
    Rocket,
    Target,
    Coffee,
    Cpu,
    Database,
    GitBranch,
    Users,
    Award,
    Flame,
    Info,
    CheckCircle,
    XCircle,
    Link as LinkIcon,
    ExternalLink
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface WhatIsJavaScriptProps {
    onOpenEditor?: (code: string) => void;
}

export default function WhatIsJavaScript({ onOpenEditor }: WhatIsJavaScriptProps) {
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

    // Navigation sections for sidebar
    const sections = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'history', label: 'History & Evolution', icon: TrendingUp },
        { id: 'features', label: 'Core Features', icon: Sparkles },
        { id: 'syntax', label: 'Basic Syntax', icon: Code2 },
        { id: 'playground', label: 'Live Examples', icon: Play },
        { id: 'ecosystem', label: 'Ecosystem', icon: Globe },
        { id: 'resources', label: 'Official Resources', icon: ExternalLink },
    ];

    const codeExamples = {
        helloWorld: {
            title: 'Hello World',
            code: `// Your first JavaScript code
console.log('Hello, World!');
console.log('Welcome to JavaScript!');`,
            description: 'The classic first program in JavaScript'
        },
        variables: {
            title: 'Variables',
            code: `// Modern variable declarations
let message = 'Hello';
const MAX_SIZE = 100;
var oldStyle = 'avoid this';

console.log(message);
console.log('Max size:', MAX_SIZE);`,
            description: 'Declaring variables with let, const, and var'
        },
        dataTypes: {
            title: 'Data Types',
            code: `// JavaScript has dynamic types
let number = 42;          // Number
let text = "JavaScript";  // String  
let isActive = true;      // Boolean
let nothing = null;       // Null
let notDefined;           // Undefined
let bigNum = 12345n;      // BigInt

console.log(typeof number);   // "number"
console.log(typeof text);     // "string"
console.log(typeof isActive); // "boolean"`,
            description: 'Exploring JavaScript\'s dynamic type system'
        },
        functions: {
            title: 'Functions',
            code: `// Different ways to create functions
function greet(name) {
  return 'Hello, ' + name + '!';
}

const greetArrow = (name) => \`Hello, \${name}!\`;

console.log(greet('World'));
console.log(greetArrow('JavaScript'));`,
            description: 'Function declarations and arrow functions'
        },
        objects: {
            title: 'Objects',
            code: `// Objects store key-value pairs
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    return 'Hi, I am ' + this.name;
  }
};

console.log(person.name);
console.log(person.greet());`,
            description: 'Working with JavaScript objects'
        },
        async: {
            title: 'Async Example',
            code: `// Simulating asynchronous code
console.log('1. Start');

setTimeout(() => {
  console.log('2. After timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise resolved');
});

console.log('4. End');

// Output: 1, 4, 3, 2 (event loop!)`,
            description: 'Understanding asynchronous JavaScript'
        },
    };

    return (
        <div className="min-h-screen w-full">
            {/* Page Header */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
                <PageHeader
                    icon={Zap}
                    category="JavaScript Fundamentals"
                    title="What is JavaScript?"
                    description="An introduction to the world's most popular programming language"
                    colorTheme="yellow"
                />
            </div>

            {/* Main Content with Sidebar Navigation */}
            <div className="flex w-full">
                {/* Sticky Sidebar Navigation */}
                <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-0 h-screen overflow-y-auto border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <nav className="p-6 space-y-2">
                        <h3 className="font-semibold text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                            Contents
                        </h3>
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveSidebar(section.id);
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all ${
                                    activeSidebar === section.id
                                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100 font-medium'
                                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                }`}
                            >
                                <section.icon className="h-4 w-4 flex-shrink-0" />
                                <span className="text-left">{section.label}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area - Stretches to viewport */}
                <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 space-y-12 max-w-none">

                    {/* Overview Section */}
                    <section id="overview" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <BookOpen className="h-7 w-7 text-yellow-600" />
                                What is JavaScript?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                                JavaScript is a <strong className="text-foreground">high-level, interpreted programming language</strong> that
                                enables interactive and dynamic web pages. It's one of the core technologies of the World Wide Web,
                                alongside HTML and CSS.
                            </p>
                        </div>

                        {/* Hero Card with Diagram */}
                        <Card className="border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                            <CardContent className="pt-6">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Sparkles className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">The Language of the Web</h3>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    JavaScript powers the interactive elements of nearly every website you visit.
                                                    From simple button clicks to complex single-page applications, JavaScript makes
                                                    the web dynamic and responsive.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <Badge variant="secondary" className="text-xs flex items-center gap-1">
                                                <Zap className="h-3 w-3" /> Dynamic
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs flex items-center gap-1">
                                                <Code2 className="h-3 w-3" /> Interpreted
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs flex items-center gap-1">
                                                <Layers className="h-3 w-3" /> Multi-paradigm
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs flex items-center gap-1">
                                                <Globe className="h-3 w-3" /> Universal
                                            </Badge>
                                        </div>

                                        <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
                                            <Info className="h-4 w-4 text-blue-600" />
                                            <AlertDescription className="text-sm">
                                                JavaScript is <strong>not related to Java</strong>. Despite the similar name, they are
                                                completely different languages with different purposes and syntax.
                                            </AlertDescription>
                                        </Alert>
                                    </div>

                                    {/* Tech Stack Diagram */}
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-yellow-500/30 shadow-inner">
                                        <h4 className="text-sm font-semibold mb-4 text-center">The Web Technology Stack</h4>
                                        <pre className="text-xs font-mono leading-relaxed text-gray-800 dark:text-gray-200">
{`    ┌─────────────────────────────┐
    │   🌐 Web Browser           │
    │   (Chrome, Firefox, etc.)  │
    └───────────┬─────────────────┘
                │
    ┌───────────▼─────────────────┐
    │                             │
    │  📄 HTML  (Structure)       │
    │     Defines content         │
    │                             │
    │  🎨 CSS   (Style)           │
    │     Makes it beautiful      │
    │                             │
    │  ⚡ JavaScript (Behavior)   │
    │     Makes it interactive    │
    │                             │
    └───────────┬─────────────────┘
                │
    ┌───────────▼─────────────────┐
    │  ✨ Interactive Web App     │
    │                             │
    │  • Dynamic content          │
    │  • User interactions        │
    │  • Real-time updates        │
    │  • Data processing          │
    └─────────────────────────────┘`}
                    </pre>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Key Characteristics */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: Terminal,
                                    title: 'Interpreted',
                                    description: 'Runs directly in the browser without compilation',
                                    color: 'text-blue-600'
                                },
                                {
                                    icon: Layers,
                                    title: 'Dynamic Typing',
                                    description: 'Variables can hold any type of data',
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
                                    description: 'Responds to user interactions and events',
                                    color: 'text-orange-600'
                                },
                            ].map((item, idx) => (
                                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500">
                                    <CardContent className="pt-6">
                                        <item.icon className={`h-10 w-10 ${item.color} mb-3`} />
                                        <h4 className="font-semibold text-base mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                            <CardHeader>
                                <CardTitle className="text-xl">JavaScript by the Numbers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        { icon: Coffee, label: 'Created', value: '1995', sublabel: 'In 10 days' },
                                        { icon: TrendingUp, label: 'Popularity', value: '#1', sublabel: 'Most used language' },
                                        { icon: Globe, label: 'Websites', value: '98%+', sublabel: 'Use JavaScript' },
                                        { icon: Users, label: 'Developers', value: '17M+', sublabel: 'Worldwide' },
                                    ].map((stat, idx) => (
                                        <div key={idx} className="text-center space-y-2">
                                            <stat.icon className="h-8 w-8 mx-auto text-yellow-600" />
                                            <div>
                                                <p className="text-2xl font-bold">{stat.value}</p>
                                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                                                <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <Separator className="my-12" />

                    {/* History & Evolution Section */}
                    <section id="history" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <TrendingUp className="h-7 w-7 text-yellow-600" />
                                History & Evolution
                            </h2>
                            <p className="text-base text-muted-foreground max-w-3xl">
                                From a 10-day prototype to the world's most popular programming language
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Timeline */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Key Milestones</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        {
                                            year: '1995',
                                            event: 'JavaScript Created',
                                            detail: 'Brendan Eich created JavaScript in just 10 days at Netscape'
                                        },
                                        {
                                            year: '1997',
                                            event: 'ECMAScript Standard',
                                            detail: 'First standardization as ECMAScript (ES1)'
                                        },
                                        {
                                            year: '2005',
                                            event: 'AJAX Revolution',
                                            detail: 'Asynchronous web became mainstream with AJAX'
                                        },
                                        {
                                            year: '2009',
                                            event: 'Node.js Released',
                                            detail: 'JavaScript moved to the server-side'
                                        },
                                        {
                                            year: '2015',
                                            event: 'ES6/ES2015',
                                            detail: 'Major update with classes, modules, arrow functions, promises'
                                        },
                                        {
                                            year: '2020+',
                                            event: 'Modern Era',
                                            detail: 'Annual updates, optional chaining, nullish coalescing, top-level await'
                                        },
                                    ].map((milestone, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <Badge className="bg-yellow-600 text-white min-w-[70px] justify-center flex-shrink-0">
                                                {milestone.year}
                                            </Badge>
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm">{milestone.event}</p>
                                                <p className="text-sm text-muted-foreground">{milestone.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* The Name Story */}
                            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                                        The Name Story
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3 text-sm">
                                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                                            <p className="font-semibold mb-2">Original Names:</p>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li className="flex items-center gap-2">
                                                    <ArrowRight className="h-3 w-3" />
                                                    Mocha (initial prototype)
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <ArrowRight className="h-3 w-3" />
                                                    LiveScript (first release name)
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <ArrowRight className="h-3 w-3" />
                                                    JavaScript (marketing decision)
                                                </li>
                                            </ul>
                                        </div>

                                        <Alert>
                                            <Info className="h-4 w-4" />
                                            <AlertDescription>
                                                The "JavaScript" name was chosen to capitalize on Java's popularity at the time,
                                                even though the languages are fundamentally different.
                                            </AlertDescription>
                                        </Alert>

                                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                                            <p className="font-semibold mb-2">Official Standard:</p>
                                            <p className="text-muted-foreground">
                                                <strong>ECMAScript</strong> is the official specification name. JavaScript is
                                                the implementation of the ECMAScript standard.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Where JavaScript Runs */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-blue-600" />
                                    Where JavaScript Runs
                                </CardTitle>
                                <CardDescription>JavaScript has expanded beyond the browser</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Globe className="h-5 w-5 text-blue-600" />
                                            <h4 className="font-semibold">Client-Side (Browser)</h4>
                                        </div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Chrome (V8 engine)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Firefox (SpiderMonkey)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Safari (JavaScriptCore)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Edge (V8 engine)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Cpu className="h-5 w-5 text-green-600" />
                                            <h4 className="font-semibold">Server-Side</h4>
                                        </div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Node.js (most popular)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Deno (secure runtime)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Bun (fast runtime)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Layers className="h-5 w-5 text-purple-600" />
                                            <h4 className="font-semibold">Mobile & Desktop</h4>
                                        </div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>React Native (mobile)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Electron (desktop)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Ionic/Capacitor</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <Separator className="my-12" />

                    {/* Core Features Section */}
                    <section id="features" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <Sparkles className="h-7 w-7 text-yellow-600" />
                                Core Features
                            </h2>
                            <p className="text-base text-muted-foreground max-w-3xl">
                                What makes JavaScript unique and powerful
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Dynamic Typing */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-yellow-600" />
                                        Dynamic Typing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Variables can hold any type of data and change types at runtime
                                    </p>
                                    <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-xs font-mono overflow-x-auto">
{`let data = 42;           // Number
data = "Hello";       // Now it's a String
data = true;          // Now it's a Boolean
data = [1, 2, 3];     // Now it's an Array
data = { x: 10 };     // Now it's an Object

// This flexibility makes JS easy but requires care`}
                    </pre>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                                        <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-blue-900 dark:text-blue-100">
                      TypeScript adds optional static typing to JavaScript for better type safety
                    </span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* First-Class Functions */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Code2 className="h-5 w-5 text-green-600" />
                                        First-Class Functions
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Functions are objects and can be assigned, passed, and returned
                                    </p>
                                    <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-xs font-mono overflow-x-auto">
{`// Functions can be assigned to variables
const sayHello = function() {
  return "Hello!";
};

// Passed as arguments
function execute(fn) {
  return fn();
}

// Returned from functions
function multiplier(factor) {
  return (x) => x * factor;
}

const double = multiplier(2);
console.log(double(5)); // 10`}
                    </pre>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Asynchronous */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Cpu className="h-5 w-5 text-purple-600" />
                                        Asynchronous Programming
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Non-blocking operations keep the UI responsive
                                    </p>
                                    <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-xs font-mono overflow-x-auto">
{`// Modern async/await syntax
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

// Or using Promises
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
                    </pre>
                                    </div>
                                    <div className="space-y-1 text-xs">
                                        <p className="font-semibold">Async Mechanisms:</p>
                                        <ul className="space-y-1 ml-4">
                                            <li>• Callbacks</li>
                                            <li>• Promises</li>
                                            <li>• Async/Await</li>
                                            <li>• Event Loop</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Prototype-Based */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <GitBranch className="h-5 w-5 text-orange-600" />
                                        Prototype-Based Inheritance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Objects inherit directly from other objects
                                    </p>
                                    <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-xs font-mono overflow-x-auto">
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
    console.log(\`\${this.name} barks\`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // "Buddy barks"`}
                    </pre>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* What JavaScript Can Do */}
                        <Card className="border-2 border-yellow-500/30">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <Rocket className="h-6 w-6 text-yellow-600" />
                                    What Can JavaScript Do?
                                </CardTitle>
                                <CardDescription>
                                    The capabilities that make JavaScript essential for web development
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        {
                                            title: 'DOM Manipulation',
                                            items: ['Add/remove elements', 'Change styles', 'Modify content', 'Create animations']
                                        },
                                        {
                                            title: 'Event Handling',
                                            items: ['User clicks', 'Keyboard input', 'Form submissions', 'Mouse movements']
                                        },
                                        {
                                            title: 'AJAX & APIs',
                                            items: ['Fetch data', 'Send requests', 'Real-time updates', 'WebSockets']
                                        },
                                        {
                                            title: 'Data Storage',
                                            items: ['localStorage', 'sessionStorage', 'IndexedDB', 'Cookies']
                                        },
                                        {
                                            title: 'Form Validation',
                                            items: ['Input validation', 'Error messages', 'Live feedback', 'Custom rules']
                                        },
                                        {
                                            title: 'Animations',
                                            items: ['CSS animations', 'Canvas graphics', 'WebGL 3D', 'SVG manipulation']
                                        },
                                    ].map((capability, idx) => (
                                        <Card key={idx} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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

                    <Separator className="my-12" />

                    {/* Basic Syntax Section */}
                    <section id="syntax" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <Code2 className="h-7 w-7 text-yellow-600" />
                                Basic Syntax Overview
                            </h2>
                            <p className="text-base text-muted-foreground max-w-3xl">
                                A quick look at JavaScript syntax before diving deeper
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Syntax Rules */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Syntax Rules</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        {[
                                            {
                                                rule: 'Case Sensitive',
                                                example: 'myVariable ≠ myvariable',
                                                description: 'Variable names are case-sensitive'
                                            },
                                            {
                                                rule: 'Semicolons',
                                                example: 'let x = 5; // optional',
                                                description: 'Semicolons are optional but recommended'
                                            },
                                            {
                                                rule: 'Comments',
                                                example: '// single-line /* multi-line */',
                                                description: 'Use // or /* */ for comments'
                                            },
                                            {
                                                rule: 'Statements',
                                                example: 'let name = "John";',
                                                description: 'Instructions that perform actions'
                                            },
                                        ].map((item, idx) => (
                                            <div key={idx} className="p-3 bg-muted rounded-lg">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="font-semibold text-sm">{item.rule}</span>
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                </div>
                                                <code className="text-xs text-purple-600 dark:text-purple-400">{item.example}</code>
                                                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Data Types Overview */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Data Types (Overview)</CardTitle>
                                    <CardDescription className="text-xs">Detailed in separate topics</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { type: 'String', example: '"Hello" or \'World\'', icon: '📝' },
                                            { type: 'Number', example: '42 or 3.14', icon: '🔢' },
                                            { type: 'Boolean', example: 'true or false', icon: '✓✗' },
                                            { type: 'Undefined', example: 'let x;', icon: '❓' },
                                            { type: 'Null', example: 'let y = null;', icon: '∅' },
                                            { type: 'Object', example: '{ key: "value" }', icon: '📦' },
                                            { type: 'Array', example: '[1, 2, 3]', icon: '📊' },
                                            { type: 'Function', example: 'function() {}', icon: '⚙️' },
                                        ].map((type, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-2 hover:bg-accent rounded-lg transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-lg">{type.icon}</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">{type.type}</p>
                                                        <code className="text-xs text-muted-foreground">{type.example}</code>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Visual Flow Diagram */}
                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                            <CardHeader>
                                <CardTitle className="text-lg">How JavaScript Executes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border">
                  <pre className="text-xs font-mono leading-relaxed text-gray-800 dark:text-gray-200 overflow-x-auto">
{`    ┌──────────────────────────────────────┐
    │  1. Parse JavaScript Code           │
    │     Check syntax errors             │
    └─────────────┬────────────────────────┘
                  │
    ┌─────────────▼────────────────────────┐
    │  2. Compilation (JIT)               │
    │     Convert to machine code         │
    └─────────────┬────────────────────────┘
                  │
    ┌─────────────▼────────────────────────┐
    │  3. Execution Context               │
    │     • Global Context                │
    │     • Function Context              │
    │     • Eval Context                  │
    └─────────────┬────────────────────────┘
                  │
    ┌─────────────▼────────────────────────┐
    │  4. Call Stack                      │
    │     Execute functions one by one    │
    └─────────────┬────────────────────────┘
                  │
    ┌─────────────▼────────────────────────┐
    │  5. Event Loop                      │
    │     Handle async operations         │
    │     • Callbacks                     │
    │     • Promises                      │
    │     • Microtasks                    │
    └──────────────────────────────────────┘`}
                  </pre>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <Separator className="my-12" />

                    {/* Live Playground Section */}
                    <section id="playground" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <Play className="h-7 w-7 text-green-600" />
                                Interactive Playground
                            </h2>
                            <p className="text-base text-muted-foreground max-w-3xl">
                                Try these examples right here - click "Run Code" to see the output!
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {Object.entries(codeExamples).map(([key, example]) => (
                                <Card key={key} className="border-l-4 border-l-green-500">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg">{example.title}</CardTitle>
                                            <Badge variant="outline" className="text-xs">
                                                <Play className="h-3 w-3 mr-1" />
                                                Interactive
                                            </Badge>
                                        </div>
                                        <CardDescription>{example.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Code Block */}
                                        <div className="bg-gray-900 dark:bg-black rounded-lg p-4 border border-gray-700">
                      <pre className="text-sm font-mono text-green-400 overflow-x-auto whitespace-pre">
                        {example.code}
                      </pre>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 flex-wrap">
                                            <Button
                                                size="sm"
                                                onClick={() => runCode(example.code, key)}
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                            >
                                                <Play className="h-4 w-4 mr-1" />
                                                Run Code
                                            </Button>
                                            {onOpenEditor && (
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => onOpenEditor(example.code)}
                                                >
                                                    <Code2 className="h-4 w-4 mr-1" />
                                                    Open in Editor
                                                </Button>
                                            )}
                                        </div>

                                        {/* Output Display */}
                                        {activePlayground === key && (
                                            <Card className="bg-gray-50 dark:bg-gray-900 border-2 border-green-500/30">
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-sm flex items-center gap-2">
                                                        <Terminal className="h-4 w-4 text-green-600" />
                                                        Output:
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                          <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
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
                                <strong>Tip:</strong> Try modifying the code examples above and run them again to see different results.
                                Experiment with different values and see what happens!
                            </AlertDescription>
                        </Alert>
                    </section>

                    <Separator className="my-12" />

                    {/* Ecosystem Section */}
                    <section id="ecosystem" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <Globe className="h-7 w-7 text-blue-600" />
                                The JavaScript Ecosystem
                            </h2>
                            <p className="text-base text-muted-foreground max-w-3xl">
                                A vast collection of tools, frameworks, and libraries
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Frontend Frameworks */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Layers className="h-5 w-5 text-blue-600" />
                                        Frontend Frameworks
                                    </CardTitle>
                                    <CardDescription>Build modern web applications</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'React', desc: 'Component-based UI library', color: 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100' },
                                            { name: 'Vue', desc: 'Progressive framework', color: 'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-100' },
                                            { name: 'Angular', desc: 'Full-featured framework', color: 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100' },
                                            { name: 'Svelte', desc: 'Compile-time framework', color: 'bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-100' },
                                        ].map((framework, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:shadow-md transition-shadow">
                                                <div>
                                                    <p className="font-semibold text-sm">{framework.name}</p>
                                                    <p className="text-xs text-muted-foreground">{framework.desc}</p>
                                                </div>
                                                <Badge className={framework.color}>{framework.name}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Backend Runtime */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Cpu className="h-5 w-5 text-green-600" />
                                        Backend & Runtime
                                    </CardTitle>
                                    <CardDescription>Server-side JavaScript</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'Node.js', desc: 'Most popular JS runtime', color: 'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-100' },
                                            { name: 'Deno', desc: 'Secure by default', color: 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100' },
                                            { name: 'Bun', desc: 'Fast all-in-one toolkit', color: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-100' },
                                            { name: 'Express', desc: 'Minimalist web framework', color: 'bg-gray-100 text-gray-900 dark:bg-gray-900/30 dark:text-gray-100' },
                                        ].map((runtime, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:shadow-md transition-shadow">
                                                <div>
                                                    <p className="font-semibold text-sm">{runtime.name}</p>
                                                    <p className="text-xs text-muted-foreground">{runtime.desc}</p>
                                                </div>
                                                <Badge className={runtime.color}>{runtime.name}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Package Managers */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Database className="h-5 w-5 text-purple-600" />
                                        Package Managers
                                    </CardTitle>
                                    <CardDescription>Manage dependencies and libraries</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'npm', desc: 'Default Node package manager' },
                                            { name: 'yarn', desc: 'Fast, reliable package manager' },
                                            { name: 'pnpm', desc: 'Efficient disk space usage' },
                                        ].map((pm, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm">{pm.name}</p>
                                                    <p className="text-xs text-muted-foreground">{pm.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Build Tools */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Flame className="h-5 w-5 text-orange-600" />
                                        Build Tools
                                    </CardTitle>
                                    <CardDescription>Bundle and optimize code</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'Webpack', desc: 'Module bundler' },
                                            { name: 'Vite', desc: 'Next-gen frontend tooling' },
                                            { name: 'Rollup', desc: 'JavaScript module bundler' },
                                        ].map((tool, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm">{tool.name}</p>
                                                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* NPM Stats */}
                        <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
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
                                        <p className="text-sm text-muted-foreground">Package ecosystem</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <Separator className="my-12" />

                    {/* Official Resources Section */}
                    <section id="resources" className="scroll-mt-6 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                                <ExternalLink className="h-7 w-7 text-blue-600" />
                                Official Resources & Documentation
                            </h2>
                            <p className="text-base text-muted-foreground max-w-3xl">
                                Learn from the official sources and authoritative documentation
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'MDN Web Docs',
                                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                                    description: 'The most comprehensive JavaScript documentation, maintained by Mozilla',
                                    icon: BookOpen,
                                    color: 'text-blue-600'
                                },
                                {
                                    title: 'ECMAScript Specification',
                                    url: 'https://tc39.es/ecma262/',
                                    description: 'Official language specification by TC39',
                                    icon: Terminal,
                                    color: 'text-purple-600'
                                },
                                {
                                    title: 'Node.js Documentation',
                                    url: 'https://nodejs.org/docs/',
                                    description: 'Official docs for Node.js runtime',
                                    icon: Cpu,
                                    color: 'text-green-600'
                                },
                                {
                                    title: 'Can I Use',
                                    url: 'https://caniuse.com/',
                                    description: 'Browser compatibility tables for JavaScript features',
                                    icon: Globe,
                                    color: 'text-orange-600'
                                },
                                {
                                    title: 'JavaScript.info',
                                    url: 'https://javascript.info/',
                                    description: 'Modern JavaScript tutorial from basics to advanced',
                                    icon: Lightbulb,
                                    color: 'text-yellow-600'
                                },
                                {
                                    title: 'V8 JavaScript Engine',
                                    url: 'https://v8.dev/docs',
                                    description: 'Google\'s high-performance JavaScript engine documentation',
                                    icon: Zap,
                                    color: 'text-red-600'
                                },
                            ].map((resource, idx) => (
                                <Card key={idx} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-muted">
                                                    <resource.icon className={`h-5 w-5 ${resource.color}`} />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">{resource.title}</CardTitle>
                                                </div>
                                            </div>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                                        <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                                        >
                                            <LinkIcon className="h-3 w-3" />
                                            {resource.url}
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-sm">
                                <strong>Official Sources Only:</strong> The resources above are official documentation and
                                authoritative sources for learning JavaScript. Always refer to official documentation for
                                accurate and up-to-date information.
                            </AlertDescription>
                        </Alert>
                    </section>

                    {/* Next Steps */}
                    <Card className="mt-12 border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Rocket className="h-6 w-6 text-yellow-600" />
                                Ready to Learn More?
                            </CardTitle>
                            <CardDescription>
                                This is just the beginning! Explore the full JavaScript curriculum
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { title: 'Variables', icon: Code2, color: 'bg-blue-100 dark:bg-blue-900/30' },
                                    { title: 'Functions', icon: Zap, color: 'bg-purple-100 dark:bg-purple-900/30' },
                                    { title: 'Arrays', icon: Layers, color: 'bg-green-100 dark:bg-green-900/30' },
                                    { title: 'Objects', icon: Database, color: 'bg-orange-100 dark:bg-orange-900/30' },
                                ].map((topic, idx) => (
                                    <Card key={idx} className={`${topic.color} border-none hover:scale-105 transition-transform cursor-pointer`}>
                                        <CardContent className="pt-6 text-center">
                                            <topic.icon className="h-8 w-8 mx-auto mb-2" />
                                            <p className="font-semibold text-sm">{topic.title}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                                Continue your journey with the next topics in the JavaScript curriculum →
                            </p>
                        </CardContent>
                    </Card>

                </main>
            </div>
        </div>
    );
}

