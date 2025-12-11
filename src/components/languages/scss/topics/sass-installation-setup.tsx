'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Download, 
  Terminal, 
  CheckCircle2,
  Lightbulb,
  Package,
  Zap,
  Settings,
  PlayCircle,
  FileCode,
  AlertCircle,
  Rocket
} from 'lucide-react';

interface SassInstallationSetupProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassInstallationSetup({ onOpenWebPlayground }: SassInstallationSetupProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Download}
        category="Sass/SCSS · Setup"
        title="Installation & Setup"
        description="Learn how to install Sass and set it up in your projects. We'll cover npm installation, standalone setup, and integration with popular build tools."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Getting Started with Sass"
            description="Choose your installation method"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Before you can use Sass/SCSS, you need to install it on your computer. Sass needs to be <strong>compiled to CSS</strong> before browsers can read it. There are several ways to install Sass depending on your project setup!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-pink-700 dark:text-pink-300">npm/Node.js</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Best for modern web projects. Install via npm or yarn
              </p>
              <Badge className="mt-3 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">Recommended</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Standalone</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Download and run directly. No dependencies needed
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Build Tools</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Integrate with Vite, Webpack, or other bundlers
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Dart Sass is the Official Implementation</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <strong>Dart Sass</strong> (the official, actively maintained version). Avoid LibSass or Node Sass as they're deprecated.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 1: npm Installation */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Method 1: Install via npm (Recommended)"
            description="For Node.js projects"
            size="lg"
          />

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              If you're working on a modern web project, installing via <strong>npm</strong> is the easiest and most common method.
            </p>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Step 1: Make sure you have Node.js installed</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Check if Node.js is installed by running:
              </p>
              <CodeSnippetWithOutput
                title="Check Node.js version"
                code="node --version"
                output={['v20.10.0', '// If you see a version number, you\'re good!']}
                language="bash"
                colorTheme="green"
              />
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Don't have Node.js? Download it from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">nodejs.org</a>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Step 2: Install Sass globally (optional)</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Install Sass globally to use the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">sass</code> command anywhere:
              </p>
              <CodeSnippetWithOutput
                title="Global installation"
                code="npm install -g sass"
                output={[
                  'added 1 package in 2s',
                  '',
                  '// Now you can use "sass" command anywhere!'
                ]}
                language="bash"
                colorTheme="green"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Step 3: Or install in your project (recommended)</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Better practice: Install as a dev dependency in your project:
              </p>
              <CodeSnippetWithOutput
                title="Project installation"
                code={`# Navigate to your project
cd my-project

# Install Sass as a dev dependency
npm install --save-dev sass`}
                output={[
                  'added 1 package, and audited 2 packages in 1s',
                  '',
                  '✓ sass installed successfully!'
                ]}
                language="bash"
                colorTheme="green"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 4: Verify installation</h5>
              <CodeSnippetWithOutput
                title="Check Sass version"
                code="sass --version"
                output={['1.69.5 compiled with dart2js 3.1.0', '', '✓ Sass is ready to use!']}
                language="bash"
                colorTheme="blue"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start: Compile Your First File */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<PlayCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Quick Start: Compile Your First SCSS File"
            description="Let's test the installation"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 1: Create a SCSS file</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Create a file called <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">style.scss</code>:
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800">
                <div className="text-green-600 dark:text-green-400">// style.scss</div>
                <div className="text-pink-600 dark:text-pink-400 mt-2">$primary-color: #6366f1;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">body {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: <span className="text-pink-600 dark:text-pink-400">$primary-color</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">h1 {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">color: white;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 2: Compile to CSS</h5>
              <CodeSnippetWithOutput
                title="Compile SCSS to CSS"
                code="sass style.scss style.css"
                output={[
                  'Compiled style.scss to style.css.',
                  '',
                  '✓ Your SCSS is now CSS!'
                ]}
                language="bash"
                colorTheme="purple"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Step 3: See the compiled CSS</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Check <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">style.css</code> - it's now regular CSS:
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800">
                <div className="text-green-600 dark:text-green-400">/* style.css - Compiled! */</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">body {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: #6366f1;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">body h1 {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">color: white;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Success! 🎉</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You just compiled your first SCSS file to CSS! The variable <code className="bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">$primary-color</code> was replaced with its value.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Watch Mode */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Watch Mode: Auto-Compile on Save"
            description="No need to manually compile every time"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Instead of manually compiling every time you change your SCSS, use <strong>watch mode</strong> to automatically compile on save!
          </p>

          <CodeSnippetWithOutput
            title="Watch a single file"
            code="sass --watch style.scss:style.css"
            output={[
              '>>> Sass is watching for changes. Press Ctrl-C to stop.',
              '',
              'Compiled style.scss to style.css.',
              '// Edit style.scss and save - it compiles automatically!'
            ]}
            language="bash"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Watch an entire folder"
            code="sass --watch scss:css"
            output={[
              '>>> Sass is watching for changes. Press Ctrl-C to stop.',
              '',
              'Compiled scss/style.scss to css/style.css.',
              'Compiled scss/components.scss to css/components.css.',
              '',
              '✓ All SCSS files auto-compile on save!'
            ]}
            language="bash"
            colorTheme="blue"
          />

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Pro Tip: Use Watch Mode</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always use watch mode during development. Your changes appear instantly without manual compilation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Build Tool Integration */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Integration with Build Tools"
            description="Use Sass with Vite, Webpack, or other bundlers"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Modern build tools can compile SCSS automatically. Here's how to set up the most popular ones:
          </p>

          <div className="space-y-6">
            {/* Vite */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Vite</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Recommended for new projects</p>
                </div>
              </div>
              
              <CodeSnippetWithOutput
                title="Install Sass for Vite"
                code="npm install --save-dev sass"
                output={['✓ Done! Vite automatically compiles .scss files']}
                language="bash"
                colorTheme="purple"
              />
              
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                That's it! Just import your SCSS files:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs mt-2">
                <span className="text-purple-600 dark:text-purple-400">import</span> './style.scss'
              </div>
            </div>

            {/* Webpack */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Webpack</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Requires sass-loader</p>
                </div>
              </div>
              
              <CodeSnippetWithOutput
                title="Install loaders for Webpack"
                code="npm install --save-dev sass sass-loader css-loader style-loader"
                output={['✓ Installed 4 packages']}
                language="bash"
                colorTheme="blue"
              />
              
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                Add to webpack.config.js:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-xs mt-2">
                <div className="text-gray-700 dark:text-gray-300">module: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">rules: [{'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">test: <span className="text-green-600 dark:text-green-400">/\.scss$/</span>,</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">use: ['style-loader', 'css-loader', 'sass-loader']</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">{'}]'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>

            {/* Parcel */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-pink-700 dark:text-pink-300">Parcel</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Zero config bundler</p>
                </div>
              </div>
              
              <CodeSnippetWithOutput
                title="Install Sass for Parcel"
                code="npm install --save-dev sass"
                output={['✓ Parcel automatically detects and compiles .scss files!']}
                language="bash"
                colorTheme="pink"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Package.json Scripts */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Add npm Scripts for Easy Compilation"
            description="Run Sass with simple commands"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Add these scripts to your <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">package.json</code> for easy compilation:
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-green-300 dark:border-green-700">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800">
              <div className="text-gray-700 dark:text-gray-300">{'{'}</div>
              <div className="text-gray-700 dark:text-gray-300 ml-2"><span className="text-blue-600 dark:text-blue-400">"scripts"</span>: {'{'}</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-blue-600 dark:text-blue-400">"sass:build"</span>: <span className="text-green-600 dark:text-green-400">"sass scss:css"</span>,</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-blue-600 dark:text-blue-400">"sass:watch"</span>: <span className="text-green-600 dark:text-green-400">"sass --watch scss:css"</span>,</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-blue-600 dark:text-blue-400">"sass:prod"</span>: <span className="text-green-600 dark:text-green-400">"sass scss:css --style=compressed"</span></div>
              <div className="text-gray-700 dark:text-gray-300 ml-2">{'}'}</div>
              <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Development</h5>
              <code className="text-sm bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">npm run sass:watch</code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Watch mode for development</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Build</h5>
              <code className="text-sm bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">npm run sass:build</code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">One-time compilation</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Production</h5>
              <code className="text-sm bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">npm run sass:prod</code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Minified for production</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Common Issues & Solutions"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ "sass: command not found"</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong> Sass isn't installed or not in PATH
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>• Run <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm install -g sass</code> to install globally</li>
                <li>• Or use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npx sass</code> instead of <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">sass</code></li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-orange-500">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">⚠️ Using deprecated Node Sass</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong> Switch to Dart Sass
              </p>
              <CodeSnippetWithOutput
                title="Remove node-sass and install sass"
                code={`npm uninstall node-sass
npm install --save-dev sass`}
                output={['✓ Switched to Dart Sass (the official version)']}
                language="bash"
                colorTheme="orange"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-yellow-500">
              <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">⚠️ Files not compiling</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> Check file paths and make sure you're in the right directory
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Install via npm</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">npm install --save-dev sass</code> is the easiest method
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use Watch Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">sass --watch</code> auto-compiles on save
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Build Tool Integration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Vite, Webpack, and Parcel support SCSS out of the box
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Use Dart Sass</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Avoid deprecated LibSass and Node Sass
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">You're Ready to Code! 🚀</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Sass is installed and ready to use. Let's start learning SCSS features like <strong>variables</strong>, <strong>nesting</strong>, and <strong>mixins</strong>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
