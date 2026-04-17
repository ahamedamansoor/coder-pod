'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Download,
  Terminal,
  CheckCircle2,
  AlertCircle,
  Code,
  FolderOpen,
  Zap,
  Globe,
  Monitor,
  Smartphone,
  Package,
  Rocket,
  ArrowRight,
  Circle,
  Cpu,
  FileText,
  Settings,
  Play,
  Lightbulb,
  Target,
  Wrench,
  BookOpen,
  Star,
  Palette,
} from 'lucide-react';

export default function InstallationAndSetup() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Download}
        category="React · Getting Started"
        title="Installation & Setup Guide"
        description="Complete step-by-step guide to installing React and setting up your first development environment. Perfect for beginners!"
        colorTheme="green"
      />

      {/* Quick Start Overview */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Quick Start: 5 Minutes to Your First React App! 🚀
          </CardTitle>
          <CardDescription className="text-base">
            Follow these simple steps to get React running on your computer. We'll guide you through everything!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Step Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: 1,
                title: "Install Node.js",
                description: "JavaScript runtime that powers React",
                icon: Package,
                color: "from-green-400 to-green-600",
                time: "2 min"
              },
              {
                step: 2,
                title: "Choose Your Setup",
                description: "Select the best installation method",
                icon: Settings,
                color: "from-blue-400 to-blue-600",
                time: "1 min"
              },
              {
                step: 3,
                title: "Create React App",
                description: "Generate your first React project",
                icon: FolderOpen,
                color: "from-purple-400 to-purple-600",
                time: "2 min"
              },
              {
                step: 4,
                title: "Run & Explore",
                description: "Start your app and begin coding!",
                icon: Play,
                color: "from-orange-400 to-orange-600",
                time: "1 min"
              }
            ].map((item) => (
              <div key={item.step} className="text-center group relative">
                <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                  {item.time}
                </div>
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Visual Flow */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Installation Journey</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {[
                { icon: Monitor, label: "Your Computer", color: "bg-blue-500" },
                { icon: ArrowRight, label: "Install", color: "bg-gray-400" },
                { icon: Package, label: "Node.js", color: "bg-green-500" },
                { icon: ArrowRight, label: "Create", color: "bg-gray-400" },
                { icon: Code, label: "React App", color: "bg-purple-500" },
                { icon: ArrowRight, label: "Run", color: "bg-gray-400" },
                { icon: Play, label: "Live App", color: "bg-orange-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`${item.color} p-3 rounded-xl text-white shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Install Node.js */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Step 1: Install Node.js
          </CardTitle>
          <CardDescription className="text-base">
            Node.js is the foundation that runs React. Let's get it installed properly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Node.js?</AlertTitle>
            <AlertDescription>
              React uses Node.js to run development tools, manage packages, and serve your app during development. 
              It's like the engine that powers your React development experience.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Installation Methods */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-green-600 dark:text-green-400">Choose Your Installation Method</h4>
              
              {/* Official Installer */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-2">Official Installer (Recommended for Beginners)</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download and install Node.js directly from the official website. This is the easiest method.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-2">Steps:</p>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>Visit <span className="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">nodejs.org</span></li>
                          <li>Click the LTS version (Long Term Support)</li>
                          <li>Download the installer for your OS</li>
                          <li>Run the installer and follow the prompts</li>
                          <li>Restart your terminal/command prompt</li>
                        </ol>
                      </div>
                      
                      <div className="flex gap-2">
                        <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Easy</Badge>
                        <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Recommended</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version Manager */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-2">Version Manager (Advanced)</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use a version manager like nvm to switch between Node.js versions easily.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-2">Using nvm:</p>
                        <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded overflow-x-auto">
{`# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest LTS Node.js
nvm install --lts

# Use the installed version
nvm use --lts`}
                        </pre>
                      </div>
                      
                      <div className="flex gap-2">
                        <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Advanced</Badge>
                        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Flexible</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400">Verify Your Installation</h4>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Installation Verification
                </h5>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    After installation, you should have Node.js and npm ready to use for React development.
                  </p>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                      ⚠️ Version Requirements
                    </p>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• Minimum: Node.js 16.0.0 or higher</li>
                      <li>• Recommended: Latest LTS version</li>
                      <li>• npm comes bundled with Node.js</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
                <h5 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Common Issues & Solutions
                </h5>
                
                <div className="space-y-3">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">Command not found</p>
                    <p className="text-xs text-red-700 dark:text-red-300">
                      Restart your terminal or add Node.js to your PATH
                    </p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">Permission denied</p>
                    <p className="text-xs text-red-700 dark:text-red-300">
                      Run installer as administrator (Windows) or use sudo (Mac/Linux)
                    </p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">Old version detected</p>
                    <p className="text-xs text-red-700 dark:text-red-300">
                      Uninstall old version first, then reinstall the latest LTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Choose Your Setup Method */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Step 2: Choose Your Setup Method
          </CardTitle>
          <CardDescription className="text-base">
            There are several ways to create a React app. Let's explore the best options for different needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert>
            <Target className="h-4 w-4" />
            <AlertTitle>Which Method Should You Choose?</AlertTitle>
            <AlertDescription>
              <strong>For Beginners:</strong> Start with Vite (fastest) or Create React App (most popular).<br/>
              <strong>For Learning:</strong> Vite gives you a better understanding of modern React tools.<br/>
              <strong>For Production:</strong> Next.js for full-featured apps, Vite for lightweight projects.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Vite */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Vite</h5>
                  <p className="text-sm text-muted-foreground">Modern & Fast</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Lightning-fast development server with modern tooling. Perfect for new projects.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Fastest development server</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Modern build tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Great for learning</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Command:</h6>
                  <code className="text-sm bg-purple-100 dark:bg-purple-800 px-2 py-1 rounded">
                    npm create vite@latest my-react-app -- --template react
                  </code>
                </div>
              </div>
            </div>

            {/* Create React App */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Create React App</h5>
                  <p className="text-sm text-muted-foreground">Classic & Stable</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  The official React tool. Battle-tested with extensive documentation and community support.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Official React tool</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Huge community</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Lots of tutorials</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Command:</h6>
                  <code className="text-sm bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                    npx create-react-app my-react-app
                  </code>
                </div>
              </div>
            </div>

            {/* Next.js */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Next.js</h5>
                  <p className="text-sm text-muted-foreground">Full-Featured</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Production-ready framework with server-side rendering, routing, and more built-in.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Server-side rendering</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Built-in routing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Production ready</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h6 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Command:</h6>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    npx create-next-app@latest my-react-app
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Create Your React App */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderOpen className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Step 3: Create Your React App
          </CardTitle>
          <CardDescription className="text-base">
            Let's create your first React project using Vite (recommended for beginners).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert>
            <BookOpen className="h-4 w-4" />
            <AlertTitle>Learning Focus</AlertTitle>
            <AlertDescription>
              We're using Vite because it's fast, modern, and helps you understand how React development tools work. 
              The concepts you learn apply to all React setups!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step-by-Step Guide */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">Step-by-Step Guide</h4>
              
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Open Terminal",
                    description: "Navigate to where you want to create your project",
                    command: "cd ~/Documents",
                    icon: Terminal
                  },
                  {
                    step: 2,
                    title: "Create React App",
                    description: "Use Vite to create a new React project",
                    command: "npm create vite@latest my-first-react-app -- --template react",
                    icon: Package
                  },
                  {
                    step: 3,
                    title: "Navigate to Project",
                    description: "Move into your new project directory",
                    command: "cd my-first-react-app",
                    icon: FolderOpen
                  },
                  {
                    step: 4,
                    title: "Install Dependencies",
                    description: "Download all the necessary packages",
                    command: "npm install",
                    icon: Download
                  },
                  {
                    step: 5,
                    title: "Start Development Server",
                    description: "Launch your React app in development mode",
                    command: "npm run dev",
                    icon: Play
                  }
                ].map((item) => (
                  <div key={item.step} className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center text-xs font-bold">
                            {item.step}
                          </span>
                          <h5 className="font-semibold">{item.title}</h5>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
                          {item.command}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Demo */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">What You'll Get</h4>
              
              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-700">
                <h6 className="font-semibold text-pink-800 dark:text-pink-200 mb-3">What You'll See:</h6>
                <ul className="text-sm text-pink-700 dark:text-pink-300 space-y-2">
                  <li>• A welcome page with React logo</li>
                  <li>• Links to React documentation</li>
                  <li>• Interactive elements to explore</li>
                  <li>• Live reload capability</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎉 Success!</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Once you run <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">npm run dev</code>, 
                  open your browser and go to <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">http://localhost:5173</code> 
                  to see your app running!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Understanding Your Project */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-yellow-50/60 dark:from-orange-950/10 dark:to-yellow-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Wrench className="w-6 h-6 text-orange-600/80 dark:text-orange-400/80" />
            Step 4: Understanding Your Project Structure
          </CardTitle>
          <CardDescription className="text-base">
            Let's explore the files and folders that were created in your React project.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Structure */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-orange-600 dark:text-orange-400">Project Files & Folders</h4>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <div className="space-y-4">
                  {[
                    {
                      name: "src/",
                      description: "Your React components and code",
                      icon: FolderOpen,
                      important: true
                    },
                    {
                      name: "public/",
                      description: "Static files (images, icons)",
                      icon: Globe,
                      important: false
                    },
                    {
                      name: "package.json",
                      description: "Project dependencies and scripts",
                      icon: FileText,
                      important: true
                    },
                    {
                      name: "vite.config.js",
                      description: "Vite configuration",
                      icon: Settings,
                      important: false
                    },
                    {
                      name: "index.html",
                      description: "Main HTML file",
                      icon: Code,
                      important: true
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className={`w-5 h-5 mt-0.5 ${item.important ? 'text-orange-500' : 'text-gray-400'}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.name}
                          </code>
                          {item.important && (
                            <Badge className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                              Important
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Files Explained */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-yellow-600 dark:text-yellow-400">Key Files Explained</h4>
              
              <div className="space-y-4">
                {/* src/App.jsx */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    src/App.jsx
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    This is your main React component. All other components will be built around this.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h6 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Basic Structure:</h6>
                    <pre className="text-xs bg-yellow-100 dark:bg-yellow-800 p-3 rounded overflow-x-auto">
{`function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>Start editing to see some magic happen!</p>
    </div>
  );
}

export default App;`}
                    </pre>
                  </div>
                </div>

                {/* src/main.jsx */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    src/main.jsx
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    This file connects your React app to the HTML document.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                    <h6 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Entry Point:</h6>
                    <pre className="text-xs bg-orange-100 dark:bg-orange-800 p-3 rounded overflow-x-auto">
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create root and render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-teal-50/60 dark:from-emerald-950/10 dark:to-teal-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Star className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            🎉 Congratulations! What's Next?
          </CardTitle>
          <CardDescription className="text-base">
            You've successfully set up your React development environment. Here's what to do next.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Immediate Next Steps */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">Start Learning React</h4>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Explore Components",
                    description: "Modify App.jsx and see how changes appear instantly",
                    action: "Edit the welcome message",
                    icon: Code
                  },
                  {
                    title: "Add Styling",
                    description: "Try adding colors and styles to your components",
                    action: "Experiment with inline styles",
                    icon: Palette
                  },
                  {
                    title: "Create Components",
                    description: "Build your first custom React component",
                    action: "Create a Header component",
                    icon: Package
                  },
                  {
                    title: "Use Props",
                    description: "Pass data between components",
                    action: "Add props to your components",
                    icon: ArrowRight
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-1">{item.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-xs text-emerald-700 dark:text-emerald-300">
                          💡 {item.action}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-teal-600 dark:text-teal-400">Helpful Resources</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Official Documentation
                  </h5>
                  <div className="space-y-2">
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                      📚 React Documentation (react.dev)
                    </a>
                    <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                      ⚡ Vite Documentation
                    </a>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Community & Learning
                  </h5>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">YouTube:</span> React tutorials, coding challenges
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Stack Overflow:</span> Ask questions and get help
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">GitHub:</span> Explore React projects
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
                  <h5 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">🚀 Pro Tips</h5>
                  <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-1">
                    <li>• Save your work frequently with Git</li>
                    <li>• Use browser DevTools to inspect your app</li>
                    <li>• Read error messages carefully</li>
                    <li>• Start small and build gradually</li>
                    <li>• Join React communities for support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Success Message */}
      <Card className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white border-0">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">🎉 You're Ready to Build with React!</h2>
            <p className="text-lg opacity-90">
              Your development environment is set up and you've created your first React app. 
              The journey to becoming a React developer starts now!
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ Node.js Installed
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ React App Created
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ Ready to Code
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
