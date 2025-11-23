'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  Play, Code2, Globe, Layers, Sparkles, BookOpen, Lightbulb, 
  TrendingUp, CheckCircle2, ArrowRight, Brain, Rocket, Target,
  Coffee, Cpu, Database, Users, Award, Menu, X, ChevronRight,
  Terminal, Zap, Info, ExternalLink
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface JavaScriptWhatIsProps {
  onOpenWebPlayground?: (code: string) => void;
}

export default function JavaScriptWhatIs({ onOpenWebPlayground }: JavaScriptWhatIsProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [playgroundCode, setPlaygroundCode] = useState('');
  const [playgroundOutput, setPlaygroundOutput] = useState('');

  const sections = [
    { id: 'overview', title: 'Overview', icon: Globe },
    { id: 'history', title: 'History & Evolution', icon: TrendingUp },
    { id: 'features', title: 'Key Features', icon: Sparkles },
    { id: 'ecosystem', title: 'Ecosystem', icon: Layers },
    { id: 'examples', title: 'Live Examples', icon: Play },
    { id: 'comparison', title: 'JS vs Others', icon: Target },
    { id: 'career', title: 'Career Path', icon: Rocket }
  ];

  const runCode = (code: string) => {
    try {
      const result = eval(code);
      setPlaygroundOutput(String(result));
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      setPlaygroundOutput(`Error: ${errMsg}`);
    }
  };

  const codeExamples = {
    basic: `// Your first JavaScript code
console.log("Hello, JavaScript World!");

// Variables and data types
let message = "JavaScript is awesome!";
let year = 2024;
let isActive = true;

console.log(message);
console.log("Year:", year);
console.log("Active:", isActive);`,

    interactive: `// Interactive JavaScript
function greetUser() {
  const name = prompt("What's your name?");
  alert(\`Hello, \${name}! Welcome to JavaScript!\`);
}

// DOM Manipulation
function changeColor() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === 'lightblue' 
      ? 'lightgreen' : 'lightblue';
}

// Call the functions
greetUser();
changeColor();`,

    modern: `// Modern JavaScript (ES6+)
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Arrow functions and array methods
const adults = users
  .filter(user => user.age >= 18)
  .map(user => \`\${user.name} (\${user.age})\`)
  .join(', ');

console.log("Adults:", adults);

// Destructuring and template literals
const { name, age } = users[0];
console.log(\`First user: \${name}, age \${age}\`);`
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950">
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed top-4 left-4 z-50 md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-r border-amber-200 dark:border-amber-800 z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100">JavaScript</h2>
              <p className="text-sm text-amber-600 dark:text-amber-400">What is JavaScript?</p>
            </div>
          </div>

          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-100 border border-amber-300 dark:border-amber-700'
                      : 'hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-700 dark:text-amber-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{section.title}</span>
                  {activeSection === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-80 min-h-screen">
        <div className="w-full p-6 md:p-8">
          {/* Page Header */}
          <PageHeader
            icon={Code2}
            category="JavaScript Fundamentals"
            title="What is JavaScript?"
            description="Discover the world's most popular programming language that powers the modern web"
            colorTheme="amber"
          />

          {/* Content Sections */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              {/* Hero Section */}
              <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-100/50 to-yellow-100/50 dark:from-amber-900/20 dark:to-yellow-900/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                        JavaScript: The Language of the Web
                      </h2>
                      <p className="text-lg text-amber-700 dark:text-amber-300 mb-6">
                        JavaScript is a versatile, high-level programming language that brings websites to life. 
                        It's the only programming language that runs natively in web browsers, making it essential 
                        for modern web development.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-amber-200 text-amber-900 dark:bg-amber-800 dark:text-amber-100">
                          <Globe className="w-3 h-3 mr-1" />
                          Web Development
                        </Badge>
                        <Badge className="bg-yellow-200 text-yellow-900 dark:bg-yellow-800 dark:text-yellow-100">
                          <Zap className="w-3 h-3 mr-1" />
                          Dynamic
                        </Badge>
                        <Badge className="bg-orange-200 text-orange-900 dark:bg-orange-800 dark:text-orange-100">
                          <Rocket className="w-3 h-3 mr-1" />
                          Versatile
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                      <pre className="text-sm text-amber-900 dark:text-amber-100 overflow-x-auto">
{`// JavaScript in action
function welcome() {
  const message = "Hello, World!";
  console.log(message);
  
  // Make it interactive
  document.querySelector('h1')
    .style.color = 'gold';
}

welcome();`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Concepts */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle className="text-amber-900 dark:text-amber-100">Easy to Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 dark:text-amber-300">
                      JavaScript has a gentle learning curve with forgiving syntax, 
                      making it perfect for beginners while offering advanced features for experts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                      <Layers className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <CardTitle className="text-amber-900 dark:text-amber-100">Multi-Purpose</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 dark:text-amber-300">
                      Build websites, mobile apps, desktop applications, servers, 
                      games, and even IoT devices with JavaScript.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle className="text-amber-900 dark:text-amber-100">Huge Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 dark:text-amber-300">
                      Join millions of developers worldwide. JavaScript has the largest 
                      ecosystem of libraries, frameworks, and learning resources.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* What Makes JavaScript Special */}
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    What Makes JavaScript Special?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-900 dark:text-amber-100">Runs Everywhere</h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm">
                            Browsers, servers (Node.js), mobile apps, desktop applications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-900 dark:text-amber-100">Dynamic & Flexible</h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm">
                            Variables can change types, objects can be modified at runtime
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-900 dark:text-amber-100">Event-Driven</h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm">
                            Responds to user interactions, making websites interactive
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-900 dark:text-amber-100">No Compilation</h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm">
                            Write code and run it immediately - no build step required
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-900 dark:text-amber-100">Rich Ecosystem</h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm">
                            Millions of packages available through npm
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-900 dark:text-amber-100">Constantly Evolving</h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm">
                            Regular updates with new features and improvements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'history' && (
            <div className="space-y-8">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    JavaScript Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { year: '1995', title: 'Birth of JavaScript', desc: 'Created by Brendan Eich at Netscape in just 10 days' },
                      { year: '1997', title: 'ECMAScript Standard', desc: 'JavaScript became standardized as ECMAScript' },
                      { year: '2005', title: 'AJAX Revolution', desc: 'Asynchronous web applications became possible' },
                      { year: '2009', title: 'Node.js Launch', desc: 'JavaScript moved to server-side development' },
                      { year: '2015', title: 'ES6/ES2015', desc: 'Major update with classes, modules, arrow functions' },
                      { year: '2024', title: 'Modern JavaScript', desc: 'Continues to evolve with annual updates' }
                    ].map((milestone, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center font-bold text-amber-900 dark:text-amber-100 text-sm">
                          {milestone.year}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">{milestone.title}</h3>
                          <p className="text-amber-700 dark:text-amber-300">{milestone.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'examples' && (
            <div className="space-y-8">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <Play className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    Interactive JavaScript Examples
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="basic" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="basic">Basic Syntax</TabsTrigger>
                      <TabsTrigger value="interactive">Interactive</TabsTrigger>
                      <TabsTrigger value="modern">Modern JS</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="basic" className="space-y-4">
                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{codeExamples.basic}</code>
                        </pre>
                      </div>
                      <Button 
                        onClick={() => onOpenWebPlayground?.(codeExamples.basic)}
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try in Playground
                      </Button>
                    </TabsContent>

                    <TabsContent value="interactive" className="space-y-4">
                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{codeExamples.interactive}</code>
                        </pre>
                      </div>
                      <Button 
                        onClick={() => onOpenWebPlayground?.(codeExamples.interactive)}
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try in Playground
                      </Button>
                    </TabsContent>

                    <TabsContent value="modern" className="space-y-4">
                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{codeExamples.modern}</code>
                        </pre>
                      </div>
                      <Button 
                        onClick={() => onOpenWebPlayground?.(codeExamples.modern)}
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try in Playground
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'career' && (
            <div className="space-y-8">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    JavaScript Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: 'Frontend Developer', desc: 'Build user interfaces with React, Vue, Angular', salary: '$70k - $120k' },
                      { title: 'Backend Developer', desc: 'Server-side development with Node.js', salary: '$75k - $130k' },
                      { title: 'Full-Stack Developer', desc: 'End-to-end web application development', salary: '$80k - $140k' },
                      { title: 'Mobile Developer', desc: 'React Native, Ionic mobile apps', salary: '$70k - $125k' }
                    ].map((role, index) => (
                      <Card key={index} className="border-amber-200 dark:border-amber-800">
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">{role.title}</h3>
                          <p className="text-amber-700 dark:text-amber-300 text-sm mb-2">{role.desc}</p>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {role.salary}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Quick Start Guide */}
          <Card className="border-amber-200 dark:border-amber-800 mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Ready to Start Learning?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  onClick={() => onOpenWebPlayground?.('console.log("Hello, JavaScript!");')}
                  className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try JavaScript Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900/20 flex-1"
                  onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Official Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
