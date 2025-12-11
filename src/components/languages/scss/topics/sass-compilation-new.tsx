'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  PlayCircle, 
  Terminal, 
  CheckCircle2,
  Lightbulb,
  Zap,
  Settings,
  Eye,
  FileCode,
  Rocket,
  Clock,
  Sparkles,
  Code2
} from 'lucide-react';

interface SassCompilationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCompilationNew({ onOpenWebPlayground }: SassCompilationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={PlayCircle}
        category="Sass/SCSS · Compilation"
        title="Compiling Sass to CSS"
        description="Learn how to compile SCSS to CSS using the command line, watch mode, source maps, and different output styles for development and production."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Why Compile?"
            description="Browsers don't understand SCSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            SCSS files must be <strong>compiled to CSS</strong> before browsers can use them. The Sass compiler takes your SCSS code (with variables, nesting, mixins, etc.) and converts it into regular CSS that all browsers understand.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mb-4">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-pink-700 dark:text-pink-300">Input</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Your SCSS files with variables, nesting, and mixins
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Process</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Sass compiler converts SCSS to CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pure CSS that browsers can read and render
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Compilation */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<PlayCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic Compilation Commands"
            description="One-time compilation"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Compile a single file</h5>
              <CodeSnippetWithOutput
                title="Basic compilation"
                code="sass input.scss output.css"
                output={[
                  'Compiled input.scss to output.css.',
                  '',
                  '✓ SCSS → CSS conversion complete!'
                ]}
                language="bash"
                colorTheme="blue"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                This reads <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">input.scss</code> and outputs <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">output.css</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-cyan-500">
              <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Compile entire directory</h5>
              <CodeSnippetWithOutput
                title="Directory compilation"
                code="sass scss:css"
                output={[
                  'Compiled scss/main.scss to css/main.css.',
                  'Compiled scss/components.scss to css/components.css.',
                  'Compiled scss/utilities.scss to css/utilities.css.',
                  '',
                  '✓ All SCSS files compiled!'
                ]}
                language="bash"
                colorTheme="blue"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                Compiles all <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.scss</code> files from <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">scss/</code> to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">css/</code> directory
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Watch Mode */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Watch Mode (Auto-Compile)"
            description="Automatically recompile on file changes"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Watch mode</strong> is essential for development. It monitors your SCSS files and automatically recompiles whenever you save changes!
          </p>

          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Watch a single file</h5>
              <CodeSnippetWithOutput
                title="Watch single file"
                code="sass --watch input.scss:output.css"
                output={[
                  '>>> Sass is watching for changes. Press Ctrl-C to stop.',
                  '',
                  'Compiled input.scss to output.css.',
                  '// Edit and save input.scss...',
                  'Compiled input.scss to output.css.',
                  '',
                  '✓ Auto-compiling on every save!'
                ]}
                language="bash"
                colorTheme="green"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Watch entire directory</h5>
              <CodeSnippetWithOutput
                title="Watch directory"
                code="sass --watch scss:css"
                output={[
                  '>>> Sass is watching for changes. Press Ctrl-C to stop.',
                  '',
                  'Watching... (press Ctrl-C to exit)',
                  '',
                  '// Any file in scss/ folder auto-compiles!',
                  '✓ Development ready'
                ]}
                language="bash"
                colorTheme="green"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Always Use Watch Mode in Development</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Start watch mode at the beginning of your coding session. Your changes will appear in the browser instantly without manual compilation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Output Styles */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Output Styles"
            description="Control how your CSS is formatted"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Sass can output CSS in different formats. Use <strong>expanded</strong> for development and <strong>compressed</strong> for production.
          </p>

          <div className="space-y-6">
            {/* Expanded Style */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-500">Development</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Expanded (Default)</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <CodeSnippetWithOutput
                  title="Expanded output"
                  code="sass input.scss output.css --style=expanded"
                  output={[
                    'Compiled input.scss to output.css.',
                    '',
                    '// Generated CSS:',
                    'body {',
                    '  background: #f8fafc;',
                    '  color: #1e293b;',
                    '}',
                    '',
                    '✓ Readable, formatted CSS'
                  ]}
                  language="bash"
                  colorTheme="blue"
                />
                
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Best for:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Development and debugging</li>
                    <li>• Easy to read and understand</li>
                    <li>• Larger file size</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compressed Style */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">Production</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Compressed</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <CodeSnippetWithOutput
                  title="Compressed output"
                  code="sass input.scss output.css --style=compressed"
                  output={[
                    'Compiled input.scss to output.css.',
                    '',
                    '// Generated CSS (minified):',
                    'body{background:#f8fafc;color:#1e293b}',
                    '',
                    '✓ Minified CSS - 60% smaller!'
                  ]}
                  language="bash"
                  colorTheme="pink"
                />
                
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-pink-700 dark:text-pink-300">Best for:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Production builds</li>
                    <li>• Smallest file size</li>
                    <li>• Faster page loads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Source Maps */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Source Maps"
            description="Debug SCSS in browser DevTools"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Source maps</strong> let you see your original SCSS files in browser DevTools instead of compiled CSS. This makes debugging much easier!
          </p>

          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-orange-500">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Enable source maps (default)</h5>
              <CodeSnippetWithOutput
                title="With source maps"
                code="sass input.scss output.css"
                output={[
                  'Compiled input.scss to output.css.',
                  'Generated output.css.map',
                  '',
                  '✓ Source maps created automatically!'
                ]}
                language="bash"
                colorTheme="orange"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                By default, Sass generates <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.css.map</code> files
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 mb-3">Disable source maps (production)</h5>
              <CodeSnippetWithOutput
                title="Without source maps"
                code="sass input.scss output.css --no-source-map"
                output={[
                  'Compiled input.scss to output.css.',
                  '',
                  '✓ No source map generated'
                ]}
                language="bash"
                colorTheme="orange"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                For production, disable source maps to reduce file size
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">How Source Maps Help</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              When you inspect an element in Chrome DevTools, it shows <strong>style.scss:12</strong> instead of <strong>style.css:450</strong>. You can see exactly where the style is defined in your SCSS!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common CLI Options */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Useful CLI Options"
            description="Customize compilation behavior"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">--watch</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Auto-compile on file changes</p>
              <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">sass --watch input:output</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">--style</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Output format (expanded/compressed)</p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">--style=compressed</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">--no-source-map</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Don't generate source maps</p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">sass input.scss --no-source-map</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-pink-300 dark:border-pink-700">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">--load-path</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Add import paths</p>
              <code className="text-xs bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">--load-path=node_modules</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">--quiet</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Suppress output messages</p>
              <code className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">sass input.scss --quiet</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">--update</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Only compile changed files</p>
              <code className="text-xs bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">sass --update scss:css</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Real-World Examples"
            description="Common compilation scenarios"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Development Setup</h5>
              <CodeSnippetWithOutput
                title="Development compilation"
                code="sass --watch scss:css --style=expanded"
                output={[
                  '>>> Sass is watching for changes.',
                  '',
                  'Compiled scss/main.scss to css/main.css.',
                  '// Readable CSS with source maps',
                  '✓ Perfect for development'
                ]}
                language="bash"
                colorTheme="blue"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-pink-500">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-3">Production Build</h5>
              <CodeSnippetWithOutput
                title="Production compilation"
                code="sass scss:css --style=compressed --no-source-map"
                output={[
                  'Compiled scss/main.scss to css/main.css.',
                  '// Minified CSS, no source maps',
                  '',
                  '✓ Optimized for production',
                  '✓ 65% smaller file size'
                ]}
                language="bash"
                colorTheme="pink"
              />
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Build Script (package.json)</h5>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800">
                <div className="text-gray-700 dark:text-gray-300">{'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2"><span className="text-blue-600 dark:text-blue-400">"scripts"</span>: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-blue-600 dark:text-blue-400">"dev"</span>: <span className="text-green-600 dark:text-green-400">"sass --watch scss:css"</span>,</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-blue-600 dark:text-blue-400">"build"</span>: <span className="text-green-600 dark:text-green-400">"sass scss:css --style=compressed --no-source-map"</span></div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-gray-700 dark:text-gray-300">Then run:</p>
                <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">npm run dev</code> for development
                <br/>
                <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">npm run build</code> for production
              </div>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Basic Command</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">sass input.scss output.css</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Compile once</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Watch Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">sass --watch scss:css</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Auto-compile on save</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Expanded Style</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">--style=expanded</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Readable (development)</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Compressed Style</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">--style=compressed</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Minified (production)</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Ready to Write SCSS! 🎨</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You now know how to compile SCSS to CSS! Start watch mode and begin using <strong>variables</strong>, <strong>nesting</strong>, and other powerful SCSS features.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
