'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Package,
  CheckCircle,
  Download,
  RefreshCw,
  Lightbulb,
  Zap,
} from 'lucide-react';

export default function JavaScriptNpmYarn() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript Tooling"
        title="npm & Yarn"
        description="Package managers for JavaScript projects"
        colorTheme="red"
      />

      {/* What are Package Managers */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-rose-50/30 to-pink-50/20 dark:from-red-950/10 dark:via-rose-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg">
              <Package className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are npm & Yarn?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                npm (Node Package Manager) and Yarn are <strong className="text-red-700 dark:text-red-400">package managers</strong> that help you install, manage, and share JavaScript libraries. They handle dependencies, versioning, and make it easy to use thousands of open-source packages in your projects.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Install Packages</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                One command to add libraries to your project
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Manage Dependencies</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Track versions and update packages easily
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Share Code</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Publish your own packages to npm registry
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* npm vs Yarn */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>npm vs Yarn</CardTitle>
              <CardDescription>Comparing the two popular package managers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">npm</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Comes with Node.js (built-in)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Largest package registry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Standard for most projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Uses package-lock.json</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Yarn</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Faster parallel installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Better offline mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Workspaces support (monorepos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Uses yarn.lock</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Both are Great!</AlertTitle>
            <AlertDescription>
              Both npm and Yarn are excellent choices. npm is more common and comes pre-installed. Yarn is faster for large projects. Pick what your team prefers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Commands */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Commands</CardTitle>
              <CardDescription>Essential commands for both package managers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">npm</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    npm init
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Create new project</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Yarn</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    yarn init
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Create new project</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    npm install package-name
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Install a package</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    yarn add package-name
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Install a package</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    npm install --save-dev package
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Install dev dependency</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    yarn add --dev package
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Install dev dependency</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    npm uninstall package-name
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Remove a package</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    yarn remove package-name
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Remove a package</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    npm update
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Update all packages</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    yarn upgrade
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Update all packages</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Installing Packages */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Installing Packages</CardTitle>
          <CardDescription>How to add libraries to your project</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# Create a new project
npm init -y

# Install React (production dependency)
npm install react react-dom

# Install Webpack (development dependency)
npm install --save-dev webpack webpack-cli

# Install globally (available everywhere)
npm install -g create-react-app

# Install specific version
npm install lodash@4.17.21

# Install from GitHub
npm install user/repo

# Check installed packages
npm list

# Check outdated packages
npm outdated`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Running Scripts */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Running Scripts</CardTitle>
          <CardDescription>Execute commands defined in package.json</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# package.json scripts section
{
  "scripts": {
    "start": "node server.js",
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/"
  }
}

# Run scripts with npm
npm start        # Runs "node server.js"
npm run dev      # Runs webpack dev server
npm run build    # Production build
npm test         # Run tests

# Run scripts with Yarn
yarn start
yarn dev
yarn build
yarn test`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Tips & Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Tips & Best Practices</CardTitle>
              <CardDescription>Make the most of package managers</CardDescription>
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
                <li>• Commit lock files to version control</li>
                <li>• Use exact versions for production</li>
                <li>• Regularly update dependencies</li>
                <li>• Check for security vulnerabilities</li>
                <li>• Use scripts for common tasks</li>
                <li>• Document required Node version</li>
                <li>• Use .npmrc for configuration</li>
                <li>• Clean install on CI/CD</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Commit node_modules folder</li>
                <li>• Mix npm and Yarn in same project</li>
                <li>• Install everything globally</li>
                <li>• Ignore security warnings</li>
                <li>• Use outdated packages</li>
                <li>• Modify lock files manually</li>
                <li>• Skip version ranges understanding</li>
                <li>• Install untrusted packages</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/20 dark:via-rose-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Package Managers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    npm and Yarn manage dependencies<br/>
                    Make development easier
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Simple Commands</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    npm install / yarn add<br/>
                    Install packages in seconds
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Lock Files</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ensure consistent installs<br/>
                    Commit to version control
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Scripts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automate common tasks<br/>
                    Define in package.json
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Essential Tool</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Package managers are <strong>fundamental</strong> to modern JavaScript development. Master npm or Yarn to manage dependencies efficiently!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
