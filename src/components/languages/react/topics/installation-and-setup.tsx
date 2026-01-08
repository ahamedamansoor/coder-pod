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
  Play,
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
} from 'lucide-react';

export default function InstallationAndSetup() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Download}
        category="React · Installation"
        title="Installation & Setup"
        description="Get React running on your machine in minutes. Follow these visual steps to create your first React application."
        colorTheme="green"
      />

      {/* Visual Installation Journey */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Your React Journey Starts Here! 🚀
          </CardTitle>
          <CardDescription className="text-base">
            Follow these 4 simple steps to get React running on your computer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Step Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: 1,
                title: "Check Prerequisites",
                description: "Make sure you have what you need",
                icon: "🔍",
                color: "from-blue-400 to-blue-600"
              },
              {
                step: 2,
                title: "Install Node.js",
                description: "Get the JavaScript runtime",
                icon: "📦",
                color: "from-green-400 to-green-600"
              },
              {
                step: 3,
                title: "Create React App",
                description: "Set up your first project",
                icon: "⚡",
                color: "from-purple-400 to-purple-600"
              },
              {
                step: 4,
                title: "Run Your App",
                description: "See it in action!",
                icon: "🎉",
                color: "from-orange-400 to-orange-600"
              }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Visual Flow Diagram */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Installation Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
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

      {/* Step 1: Prerequisites */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Monitor className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Step 1: Check Your Prerequisites
          </CardTitle>
          <CardDescription className="text-base">
            Before we start, make sure you have these tools ready.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Essential Tools */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-green-600 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Must Have Tools
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Terminal className="w-6 h-6 text-white dark:text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Terminal/Command Prompt</h5>
                      <p className="text-sm text-muted-foreground">Your command center for installation</p>
                      <div className="mt-2 flex gap-2">
                        <Badge className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Mac: Terminal</Badge>
                        <Badge className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Windows: cmd/PowerShell</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Internet Connection</h5>
                      <p className="text-sm text-muted-foreground">For downloading Node.js and packages</p>
                      <div className="mt-2">
                        <Badge className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Required</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Code Editor</h5>
                      <p className="text-sm text-muted-foreground">Where you'll write your React code</p>
                      <div className="mt-2 flex gap-2">
                        <Badge className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">VS Code</Badge>
                        <Badge className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Recommended</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpful Knowledge */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Helpful to Know
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Basic JavaScript</h5>
                      <p className="text-sm text-muted-foreground">Variables, functions, arrays, objects</p>
                      <div className="mt-2">
                        <Badge className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Foundation</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">HTML & CSS Basics</h5>
                      <p className="text-sm text-muted-foreground">Understanding of web structure</p>
                      <div className="mt-2">
                        <Badge className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">Web Basics</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Modern Browser</h5>
                      <p className="text-sm text-muted-foreground">Chrome, Firefox, Safari, or Edge</p>
                      <div className="mt-2 flex gap-2">
                        <Badge className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Chrome</Badge>
                        <Badge className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Firefox</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Ready to Start?</AlertTitle>
            <AlertDescription>
              If you have all the "Must Have" tools, you're ready to move to the next step! The "Helpful to Know" items will make your journey easier but aren't required.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Step 2: Install Node.js */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Download className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Step 2: Install Node.js
          </CardTitle>
          <CardDescription className="text-base">
            Node.js is JavaScript running outside your browser. React needs it to work.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Why Node.js */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Why Does React Need Node.js?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Bundle Code</h5>
                <p className="text-sm text-muted-foreground">Packages your JavaScript for browsers</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Dev Server</h5>
                <p className="text-sm text-muted-foreground">Runs your app locally</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Manage Packages</h5>
                <p className="text-sm text-muted-foreground">Installs React and tools</p>
              </div>
            </div>
          </div>

          {/* Installation Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1: Download */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                Download from Website (Recommended)
              </h4>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border">
                <div className="space-y-4">
                  {[
                    { step: "Visit", desc: "Go to nodejs.org", highlight: "nodejs.org" },
                    { step: "Choose", desc: "Click the LTS version", highlight: "LTS" },
                    { step: "Download", desc: "Download the installer", highlight: "" },
                    { step: "Install", desc: "Run the installer", highlight: "" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.step}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.desc} {item.highlight && <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{item.highlight}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Option 2: Homebrew */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                Using Homebrew (Mac Only)
              </h4>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border">
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
                      brew install node
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>• Install Homebrew first if you don't have it</p>
                    <p>• Run the command in Terminal</p>
                    <p>• Homebrew handles everything automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-700">
            <h4 className="font-bold text-lg mb-4 text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Verify Your Installation
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Open your terminal and run these commands to check if Node.js is working:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span>node --version</span>
                  <Badge className="bg-green-600 text-white text-xs">Copy & Run</Badge>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span>npm --version</span>
                  <Badge className="bg-green-600 text-white text-xs">Copy & Run</Badge>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                ✅ Success! You should see version numbers like v18.17.0 and 9.6.7
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Create React App */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderOpen className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Step 3: Create Your React App
          </CardTitle>
          <CardDescription className="text-base">
            Use Create React App to set up your first React project with all the tools you need.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Visual Process */}
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">The Magic Command</h3>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl text-center">
              <div className="font-mono text-xl mb-2">npx create-react-app my-first-app</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">This one command does everything!</p>
            </div>
          </div>

          {/* Step by Step */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl">Follow These Steps:</h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">Navigate to Your Projects Folder</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Go to where you want to create your project (Desktop, Documents, etc.)
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm">
                      cd Desktop
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">Create the React App</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      This command creates a new folder with everything you need
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm">
                      npx create-react-app my-first-app
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      💡 Replace "my-first-app" with your preferred project name
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">Wait for Installation</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      This will take a few minutes as it downloads all dependencies
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border">
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        ⏳ Installing packages... This might take a couple of minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">Navigate to Your Project</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Move into the newly created project folder
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm">
                      cd my-first-app
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Run Your App */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-red-50/60 dark:from-orange-950/10 dark:to-red-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-orange-600/80 dark:text-orange-400/80" />
            Step 4: Run Your React App
          </CardTitle>
          <CardDescription className="text-base">
            The exciting moment - see your React app come to life!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Start Command */}
          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">Start the Development Server</h3>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl text-center">
              <div className="font-mono text-xl mb-2">npm start</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Run this in your project folder</p>
            </div>
          </div>

          {/* What Happens */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">What This Command Does</h4>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Compiles your code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Starts a local server</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Opens your browser automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Watches for file changes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">What You'll See</h4>
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-xl font-mono text-xs">
                <div>Compiled successfully!</div>
                <div></div>
                <div>You can now view my-first-app in the browser.</div>
                <div></div>
                <div>  Local:            http://localhost:3000</div>
                <div>  On Your Network:  http://192.168.1.100:3000</div>
                <div></div>
                <div>Note that the development build is not optimized.</div>
                <div>To create a production build, use npm run build.</div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-green-50 dark:bg-green-900/30 p-8 rounded-xl border-2 border-green-200 dark:border-green-700 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
              🎉 Congratulations!
            </h3>
            <p className="text-lg text-green-700 dark:text-green-300 mb-4">
              Your React app is now running at <span className="font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">http://localhost:3000</span>
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="px-4 py-2 bg-green-500 text-white">React Installed</Badge>
              <Badge className="px-4 py-2 bg-blue-500 text-white">Server Running</Badge>
              <Badge className="px-4 py-2 bg-purple-500 text-white">Ready to Code!</Badge>
            </div>
          </div>

          {/* Important Tips */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-700">
            <h4 className="font-bold text-lg mb-4 text-yellow-800 dark:text-yellow-200">Important Tips</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">While the Server is Running:</h5>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Changes to code auto-reload the page</li>
                  <li>• Keep the terminal window open</li>
                  <li>• Press Ctrl+C to stop the server</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Common Issues:</h5>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Port 3000 busy? It will try 3001, 3002...</li>
                  <li>• Firewall might ask for permission</li>
                  <li>• Make sure you're in the right folder</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Structure Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderOpen className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Your Project Structure
          </CardTitle>
          <CardDescription className="text-base">
            Understanding what Create React App gives you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-yellow-600" />
                <span className="font-bold">my-first-app/</span>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-yellow-600" />
                <span>node_modules/</span>
                <Badge className="ml-2 text-xs bg-gray-500">All packages</Badge>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-blue-600" />
                <span>public/</span>
                <Badge className="ml-2 text-xs bg-blue-500">Static files</Badge>
              </div>
              <div className="ml-8 text-gray-600">├── index.html</div>
              <div className="ml-8 text-gray-600">├── favicon.ico</div>
              <div className="ml-8 text-gray-600">└── manifest.json</div>
              <div className="ml-4 flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-green-600" />
                <span className="font-bold">src/</span>
                <Badge className="ml-2 text-xs bg-green-500">Your code!</Badge>
              </div>
              <div className="ml-8 text-green-600 font-semibold">├── App.js</div>
              <div className="ml-8 text-green-600 font-semibold">├── index.js</div>
              <div className="ml-8 text-green-600 font-semibold">└── App.css</div>
              <div className="ml-4 text-gray-600">├── package.json</div>
              <div className="ml-4 text-gray-600">└── README.md</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-xl">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">📁 src/ Folder</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">Where you'll write all your React components</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl">
              <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📦 package.json</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">Lists your project dependencies and scripts</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-950/10 dark:to-purple-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">🎯 What's Next?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Congratulations! You now have a working React development environment. 
            You're ready to start building amazing React applications!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="px-4 py-2 text-sm bg-green-500 text-white">✅ Node.js Installed</Badge>
            <Badge className="px-4 py-2 text-sm bg-blue-500 text-white">✅ React App Created</Badge>
            <Badge className="px-4 py-2 text-sm bg-purple-500 text-white">✅ Server Running</Badge>
            <Badge className="px-4 py-2 text-sm bg-orange-500 text-white">✅ Ready to Code!</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
