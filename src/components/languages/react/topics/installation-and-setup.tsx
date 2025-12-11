'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Download,
  Rocket,
  Terminal,
  Play,
  CheckCircle2,
  Zap,
  Folder,
  FileCode,
  Package,
  Sparkles,
  ArrowRight,
  Lightbulb,
  Code,
  Settings
} from 'lucide-react';

export default function InstallationAndSetup() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Download}
        category="React · Getting Started"
        title="Installation & Setup"
        description="Get React running on your machine in minutes! Learn how to set up your development environment and create your first React app with modern tools."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Prerequisites Section */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What You Need First"
              description="Before we start, let's make sure you have the essential tools installed"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-lg">Node.js</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Node.js is like the engine that runs JavaScript outside the browser. You need it to use React's tools!
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-sm border mb-3">
                  node --version
                </div>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">Version 18+ recommended</Badge>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Package className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-lg">npm or yarn</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Think of npm as an app store for JavaScript packages. It comes automatically with Node.js!
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-sm border mb-3">
                  npm --version
                </div>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">Comes with Node.js</Badge>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Installation Tip</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Download Node.js from <strong>nodejs.org</strong>. Choose the LTS (Long Term Support) version - it's the most stable! The installer will set up both Node.js and npm for you.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Creating Your First React App */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Create Your First React App"
            description="Three simple commands to get your React app running!"
            size="lg"
          />

          {/* Step 1 */}
          <Card className="border-2 border-cyan-200 dark:border-cyan-800">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Create Project with Vite
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Vite</strong> (pronounced "veet" ⚡) is the fastest way to create a React app. It's like a super-fast development server that makes building React apps a breeze!
                  </p>
                  
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 mb-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-cyan-400">Terminal</span>
                    </div>
                    <pre className="font-mono text-sm text-emerald-400">npm create vite@latest my-react-app -- --template react</pre>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
                      <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1">What does this do?</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Creates a new folder called "my-react-app" with all the React files you need!</p>
                    </div>
                    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
                      <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Why Vite?</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Super fast startup, instant updates, and officially recommended by React team!</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-2 border-cyan-200 dark:border-cyan-800">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
                    <Folder className="w-5 h-5" />
                    Enter Your Project
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Navigate into your new project folder. This is where all the magic happens!
                  </p>
                  
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 mb-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-cyan-400">Terminal</span>
                    </div>
                    <pre className="font-mono text-sm text-emerald-400">cd my-react-app</pre>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    💡 <strong>cd</strong> means "change directory" - it's like opening a folder in your file explorer!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-2 border-cyan-200 dark:border-cyan-800">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Install Dependencies
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Install all the packages your project needs. Think of it like downloading all the ingredients for a recipe!
                  </p>
                  
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 mb-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-cyan-400">Terminal</span>
                    </div>
                    <pre className="font-mono text-sm text-emerald-400">npm install</pre>
                  </div>

                  <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800">
                    <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <AlertDescription className="text-blue-800 dark:text-blue-200 text-xs">
                      This downloads React and other tools into a <code>node_modules</code> folder. Takes about 30 seconds - perfect time for a coffee! ☕
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Start the Development Server
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Fire up your React app! This starts a local server and opens your app in the browser. 🚀
                  </p>
                  
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 mb-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-cyan-400">Terminal</span>
                    </div>
                    <pre className="font-mono text-sm text-emerald-400">npm run dev</pre>
                  </div>

                  <div className="flex items-center gap-2 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border-2 border-emerald-500 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm">Success! 🎉</p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">Your app is running at <code className="bg-emerald-200 dark:bg-emerald-800 px-1 py-0.5 rounded">http://localhost:5173</code></p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Open this URL in your browser to see your React app live! Every time you save a file, the page automatically updates. This is called <strong>Hot Module Replacement (HMR)</strong> - it's like magic! ✨
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Structure */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Folder className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Understanding Your Project Structure"
              description="Let's explore what Vite created for you - every file has a purpose!"
              size="lg"
            />

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6 rounded-xl border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <Folder className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">my-react-app/</p>
                    <p className="text-xs text-muted-foreground ml-6">Your project root folder</p>
                  </div>
                </div>

                <div className="ml-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Folder className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">node_modules/</p>
                      <p className="text-xs text-muted-foreground">All installed packages (React, Vite, etc.) - don't touch this!</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Folder className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">public/</p>
                      <p className="text-xs text-muted-foreground">Static files like images and icons</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Folder className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">src/</p>
                      <p className="text-xs text-muted-foreground mb-3">⭐ Your main workspace - where you write code!</p>
                      
                      <div className="ml-6 space-y-2 border-l-2 border-cyan-300 dark:border-cyan-700 pl-4">
                        <div className="flex items-start gap-2">
                          <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-cyan-600 dark:text-cyan-400 font-semibold">main.jsx</p>
                            <p className="text-xs text-muted-foreground">Entry point - where React starts</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-cyan-600 dark:text-cyan-400 font-semibold">App.jsx</p>
                            <p className="text-xs text-muted-foreground">Your main component - edit this to see changes!</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileCode className="w-4 h-4 text-pink-600 dark:text-pink-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-pink-600 dark:text-pink-400 font-semibold">App.css</p>
                            <p className="text-xs text-muted-foreground">Styles for your App component</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileCode className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">index.html</p>
                      <p className="text-xs text-muted-foreground">The HTML file that loads your React app</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileCode className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">package.json</p>
                      <p className="text-xs text-muted-foreground">Lists your project dependencies and scripts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">vite.config.js</p>
                      <p className="text-xs text-muted-foreground">Vite configuration (usually don't need to touch)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Focus on the src folder!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                As a beginner, you'll spend 99% of your time in the <strong>src/</strong> folder. Start by editing <strong>src/App.jsx</strong> - try changing the text and watch it update instantly in your browser!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Quick Commands Reference */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Terminal className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Quick Command Reference"
              description="Save these commands - you'll use them all the time!"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold">Start Development Server</h4>
                </div>
                <div className="bg-slate-900 dark:bg-slate-950 rounded p-3 font-mono text-sm border mb-2">
                  <span className="text-emerald-400">npm run dev</span>
                </div>
                <p className="text-xs text-muted-foreground">Starts your app at localhost:5173</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold">Build for Production</h4>
                </div>
                <div className="bg-slate-900 dark:bg-slate-950 rounded p-3 font-mono text-sm border mb-2">
                  <span className="text-emerald-400">npm run build</span>
                </div>
                <p className="text-xs text-muted-foreground">Creates optimized production files</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold">Preview Production Build</h4>
                </div>
                <div className="bg-slate-900 dark:bg-slate-950 rounded p-3 font-mono text-sm border mb-2">
                  <span className="text-emerald-400">npm run preview</span>
                </div>
                <p className="text-xs text-muted-foreground">Test your production build locally</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Download className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold">Install New Package</h4>
                </div>
                <div className="bg-slate-900 dark:bg-slate-950 rounded p-3 font-mono text-sm border mb-2">
                  <span className="text-emerald-400">npm install package-name</span>
                </div>
                <p className="text-xs text-muted-foreground">Add new libraries to your project</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-emerald-900 dark:text-emerald-100">
                  🎉 Congratulations! You're All Set Up!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You now have a fully functional React development environment! Your app is running, and every change you make will instantly appear in the browser.
                </p>
                
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-4 mb-4 border-2 border-emerald-300 dark:border-emerald-700">
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">What to try next:</h4>
                  <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Edit <code className="bg-emerald-200 dark:bg-emerald-800 px-1 py-0.5 rounded">src/App.jsx</code> and watch changes appear instantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Change colors in <code className="bg-emerald-200 dark:bg-emerald-800 px-1 py-0.5 rounded">src/App.css</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Add <code className="bg-emerald-200 dark:bg-emerald-800 px-1 py-0.5 rounded">console.log()</code> statements to see output in browser console</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Move on to learning about React Components in the next lesson!</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  💡 Remember: The development server must be running (npm run dev) for your app to work. Keep that terminal window open!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
