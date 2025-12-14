'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  FileJson,
  CheckCircle,
  Package,
  Code2,
  Lightbulb,
  Settings,
} from 'lucide-react';

export default function JavaScriptPackageJson() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={FileJson}
        category="JavaScript Tooling"
        title="package.json"
        description="The heart of your Node.js project"
        colorTheme="yellow"
      />

      {/* What is package.json */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/20 dark:from-amber-950/10 dark:via-yellow-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-lg">
              <FileJson className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is package.json?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                package.json is a <strong className="text-amber-700 dark:text-amber-400">configuration file</strong> that contains metadata about your project. It lists dependencies, defines scripts, specifies versions, and much more. Every Node.js project has one!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Dependencies</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lists all required packages
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Scripts</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define custom commands
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Metadata</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Project info and configuration
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Structure */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <FileJson className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Structure</CardTitle>
              <CardDescription>Essential fields in package.json</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "description": "A brief description of your project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "keywords": ["javascript", "node", "web"],
  "author": "Your Name <you@example.com>",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "react": "^18.2.0"
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "webpack": "^5.88.0"
  }
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Key Fields Explained */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Key Fields Explained</CardTitle>
              <CardDescription>Understanding each property</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">name</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Unique identifier for your package. Lowercase, no spaces.
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"name": "my-package"</code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">version</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Semantic versioning (MAJOR.MINOR.PATCH). Example: 1.2.3
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"version": "1.0.0"</code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">main</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Entry point of your application. File that runs when package is imported.
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"main": "index.js"</code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">scripts</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Custom commands you can run with npm run or yarn.
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"scripts": {'{'} "start": "node app.js" {'}'}</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dependencies */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Dependencies vs DevDependencies</CardTitle>
              <CardDescription>When to use each</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">dependencies</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Packages needed for your app to <strong>run in production</strong>
              </p>
              <div className="space-y-2">
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">express</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Web server</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">react</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">UI library</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">axios</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">HTTP client</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">devDependencies</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Tools only needed for <strong>development and testing</strong>
              </p>
              <div className="space-y-2">
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">webpack</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Bundler</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">jest</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Testing framework</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">eslint</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Linter</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Version Ranges */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Version Ranges</CardTitle>
              <CardDescription>Understanding version symbols</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-blue-900 dark:text-blue-100">^</code>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Caret (^)</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Allow minor and patch updates
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">^1.2.3 → allows 1.2.4, 1.3.0 but NOT 2.0.0</code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-green-900 dark:text-green-100">~</code>
                <h4 className="font-semibold text-green-900 dark:text-green-100">Tilde (~)</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Allow only patch updates
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">~1.2.3 → allows 1.2.4, 1.2.5 but NOT 1.3.0</code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-purple-900 dark:text-purple-100">*</code>
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Wildcard (*)</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Accept any version (not recommended!)
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">* → latest version always</code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-red-900 dark:text-red-100">exact</code>
                <h4 className="font-semibold text-red-900 dark:text-red-100">Exact Version</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                No symbol = exact version only
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">1.2.3 → only 1.2.3, nothing else</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scripts Example */}
      <Card>
        <CardHeader>
          <CardTitle>Example: Useful Scripts</CardTitle>
          <CardDescription>Common script configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`{
  "scripts": {
    // Development
    "dev": "webpack serve --mode development",
    "start": "node server.js",
    
    // Building
    "build": "webpack --mode production",
    "build:watch": "webpack --watch",
    
    // Testing
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    
    // Linting & Formatting
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write 'src/**/*.js'",
    
    // Utilities
    "clean": "rm -rf dist/",
    "prebuild": "npm run clean",  // Runs before build
    "postbuild": "npm run deploy", // Runs after build
    
    // Multiple commands
    "validate": "npm run lint && npm run test"
  }
}

// Run with:
npm run dev
npm run build
npm test  // "test" doesn't need "run"`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for managing package.json</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use semantic versioning properly</li>
                <li>• Document your scripts clearly</li>
                <li>• Specify Node version required</li>
                <li>• Use exact versions for CI/CD</li>
                <li>• Keep dependencies up to date</li>
                <li>• Add description and keywords</li>
                <li>• Include a license</li>
                <li>• Use devDependencies correctly</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use wildcard versions (*)</li>
                <li>• Install everything as dependencies</li>
                <li>• Commit unused packages</li>
                <li>• Edit manually (use npm/yarn)</li>
                <li>• Ignore security warnings</li>
                <li>• Skip version field</li>
                <li>• Forget to test scripts</li>
                <li>• Make scripts too complex</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Project Manifest</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    package.json is the heart of your project<br/>
                    Contains all metadata
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Dependencies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Production vs development<br/>
                    Choose the right category
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Scripts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automate tasks easily<br/>
                    npm run script-name
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📌</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Versioning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ^ for minor updates<br/>
                    ~ for patch updates only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <FileJson className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Foundation File</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Every Node.js project <strong>starts with package.json</strong>. It's your project's configuration hub and dependency tracker!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
