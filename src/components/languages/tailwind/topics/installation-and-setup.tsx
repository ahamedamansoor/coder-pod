'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Download, Package, Terminal, CheckCircle, Lightbulb, ArrowRight, Zap, Rocket, Code2, ExternalLink, Play } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function InstallationAndSetup() {

  // CDN Example
  const cdnHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600">
    Hello Tailwind!
  </h1>
</body>
</html>`;

  // Basic HTML with Tailwind
  const simpleExampleHTML = `<div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-xl text-center">
  <h1 class="text-4xl font-bold mb-2">🎉 Tailwind is Working!</h1>
  <p class="text-xl">You're all set to start building!</p>
</div>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Download}
        category="Tailwind CSS · Fundamentals"
        title="Installation & Setup"
        description="Get Tailwind CSS up and running in minutes with multiple installation methods"
        colorTheme="cyan"
      />

      {/* QUICK START OPTIONS */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            Choose Your Installation Method
          </CardTitle>
          <CardDescription className="text-base">
            Pick the method that best fits your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Method 1: CDN */}
            <div className="relative group hover:scale-105 transition-transform">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Fastest! ⚡
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700 h-full">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                  1. CDN (Quickest)
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  Start in seconds! Perfect for learning and prototyping.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                    <span>No build tools needed</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                    <span>Works immediately</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                    <span>Great for beginners</span>
                  </div>
                </div>
                <Badge className="mt-4 bg-green-600 text-white">Recommended for Learning</Badge>
              </div>
            </div>

            {/* Method 2: CLI */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700 h-full">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                2. Tailwind CLI
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Use the standalone CLI tool without any framework.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Simple setup</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Watch mode included</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Production ready</span>
                </div>
              </div>
              <Badge className="mt-4 bg-blue-600 text-white">Good for Static Sites</Badge>
            </div>

            {/* Method 3: Framework */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700 h-full">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                3. With Framework
              </h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Install with React, Vue, Next.js, or other frameworks.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Full integration</span>
                </div>
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Optimized builds</span>
                </div>
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Best for production</span>
                </div>
              </div>
              <Badge className="mt-4 bg-purple-600 text-white">Best for Apps</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* METHOD 1: CDN - DETAILED */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            Method 1: CDN (Start in 30 Seconds!)
          </CardTitle>
          <CardDescription>
            The fastest way to try Tailwind - perfect for beginners
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Perfect for Learning!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              The CDN is great for learning, prototyping, and experimenting. For production apps, use the CLI or PostCSS setup for better performance.
            </AlertDescription>
          </Alert>

          {/* Step by Step */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Just 2 Simple Steps:</h3>
            
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Add the CDN Script</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Add this single line to your HTML <code className="bg-muted px-2 py-1 rounded">&lt;head&gt;</code>:
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-green-400">
                  &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Start Using Tailwind Classes!</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  That's it! You can now use any Tailwind class in your HTML.
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-cyan-400">
                  &lt;h1 class="text-3xl font-bold text-blue-600"&gt;
                  <br />
                  &nbsp;&nbsp;Hello Tailwind!
                  <br />
                  &lt;/h1&gt;
                </div>
              </div>
            </div>
          </div>

          {/* Full Example */}
          <div>
            <h3 className="text-lg font-bold mb-3">Complete HTML Example:</h3>
            <FrontendCodePreview
              html={cdnHTML}
              title="CDN Setup - Complete Example"
              description="Copy this entire file and open it in your browser!"
              colorTheme="green"
              styleLanguage="tailwind"
            />
          </div>

          {/* Test It */}
          <div>
            <h3 className="text-lg font-bold mb-3">Test Your Setup:</h3>
            <FrontendCodePreview
              html={simpleExampleHTML}
              title="Success Test"
              description="If you see the gradient box, Tailwind is working!"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* METHOD 2: CLI */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            Method 2: Tailwind CLI
          </CardTitle>
          <CardDescription>
            Standalone tool for production-ready builds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Prerequisites</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Make sure you have <strong>Node.js 12.13.0 or higher</strong> installed. Check with: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">node --version</code>
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {/* Step 1: Install */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Install Tailwind CSS</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Run this command in your project folder:
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-green-400">
                  npm install -D tailwindcss
                  <br />
                  npx tailwindcss init
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 This creates a <code className="bg-muted px-1 rounded">tailwind.config.js</code> file
                </p>
              </div>
            </div>

            {/* Step 2: Configure */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Configure Template Paths</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Add paths to your HTML files in <code className="bg-muted px-2 py-1 rounded">tailwind.config.js</code>:
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-cyan-400">
                  /** @type {'{'}import('tailwindcss').Config{'}'} */
                  <br />
                  module.exports = {'{'}
                  <br />
                  &nbsp;&nbsp;content: ["./src/**/*.{'{'}html,js{'}'}"],
                  <br />
                  &nbsp;&nbsp;theme: {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;extend: {'{}'},
                  <br />
                  &nbsp;&nbsp;{'}'},
                  <br />
                  &nbsp;&nbsp;plugins: [],
                  <br />
                  {'}'}
                </div>
              </div>
            </div>

            {/* Step 3: CSS File */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Create CSS File</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Create <code className="bg-muted px-2 py-1 rounded">src/input.css</code>:
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-purple-400">
                  @tailwind base;
                  <br />
                  @tailwind components;
                  <br />
                  @tailwind utilities;
                </div>
              </div>
            </div>

            {/* Step 4: Build */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Start Build Process</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Run the CLI to scan files and build CSS:
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-green-400">
                  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 <code className="bg-muted px-1 rounded">--watch</code> rebuilds automatically when you make changes!
                </p>
              </div>
            </div>

            {/* Step 5: Use */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">Link CSS in HTML</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Add the compiled CSS to your HTML:
                </p>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-yellow-400">
                  &lt;link href="/dist/output.css" rel="stylesheet"&gt;
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* METHOD 3: FRAMEWORKS */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            Method 3: With Frameworks
          </CardTitle>
          <CardDescription>
            Official guides for popular frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Next.js */}
            <Button
              variant="outline"
              className="h-auto p-4 justify-start"
              onClick={() => window.open('https://tailwindcss.com/docs/guides/nextjs', '_blank')}
            >
              <div className="text-left flex-1">
                <div className="font-bold text-base mb-1">Next.js</div>
                <div className="text-xs text-muted-foreground">Full-stack React framework</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            {/* React */}
            <Button
              variant="outline"
              className="h-auto p-4 justify-start"
              onClick={() => window.open('https://tailwindcss.com/docs/guides/create-react-app', '_blank')}
            >
              <div className="text-left flex-1">
                <div className="font-bold text-base mb-1">React (CRA)</div>
                <div className="text-xs text-muted-foreground">Create React App</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            {/* Vite */}
            <Button
              variant="outline"
              className="h-auto p-4 justify-start"
              onClick={() => window.open('https://tailwindcss.com/docs/guides/vite', '_blank')}
            >
              <div className="text-left flex-1">
                <div className="font-bold text-base mb-1">Vite</div>
                <div className="text-xs text-muted-foreground">Modern build tool</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            {/* Vue */}
            <Button
              variant="outline"
              className="h-auto p-4 justify-start"
              onClick={() => window.open('https://tailwindcss.com/docs/guides/vite#vue', '_blank')}
            >
              <div className="text-left flex-1">
                <div className="font-bold text-base mb-1">Vue</div>
                <div className="text-xs text-muted-foreground">Progressive framework</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* NEXT STEPS */}
      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Rocket className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">You're All Set!</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-3">
          <p className="text-base">
            Tailwind is installed and ready to use. Here's what to learn next:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-cyan-600" />
              <span><strong>Utility-First CSS:</strong> Learn the core philosophy</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-cyan-600" />
              <span><strong>Responsive Design:</strong> Mobile-first breakpoints</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-cyan-600" />
              <span><strong>Core Utilities:</strong> Colors, spacing, typography</span>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
