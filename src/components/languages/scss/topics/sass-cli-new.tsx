'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Terminal, 
  CheckCircle2,
  Lightbulb,
  Info,
  Play,
  Eye,
  FileCode,
  Zap
} from 'lucide-react';

interface SassCLINewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCLINew({ onOpenWebPlayground }: SassCLINewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Terminal}
        category="Sass/SCSS · Build Tools"
        title="Sass CLI"
        description="Master command-line compilation with watch mode, output styles, and automation scripts."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Sass CLI"
            description="Command-line interface for Sass"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>Sass CLI</strong> provides powerful command-line tools to compile SCSS files, watch for changes, and automate workflows without any build tools or bundlers.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Compile</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Single file or directory</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Watch</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Auto-compile on changes</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Fast</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Dart Sass compiler</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Use CLI?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Perfect for <strong>simple projects</strong> without build tools. Fast, lightweight, and requires no configuration!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installation"
            description="Install Sass CLI globally or locally"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Global Installation"
            code={`# Install globally with npm
npm install -g sass

# Verify installation
sass --version`}
            output={[
              '✅ Sass CLI installed globally',
              '1.69.5 compiled with dart2js 3.2.0'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Local Installation (Project-Specific)"
            code={`# Install as dev dependency
npm install --save-dev sass

# Add to package.json scripts
{
  "scripts": {
    "sass": "sass src/scss:dist/css",
    "sass:watch": "sass --watch src/scss:dist/css"
  }
}`}
            output={[
              '✅ Sass installed locally',
              '// Run with: npm run sass'
            ]}
            language="scss"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Play className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Basic Compilation"
            description="Compile single files or directories"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Compile Single File"
              code={`# Compile input.scss to output.css
sass input.scss output.css

# Example
sass src/scss/main.scss dist/css/main.css`}
              output={[
                'Compiled src/scss/main.scss to dist/css/main.css.'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Compile Directory"
              code={`# Compile all SCSS files in a directory
sass src/scss:dist/css

# This compiles:
# src/scss/main.scss → dist/css/main.css
# src/scss/components/button.scss → dist/css/components/button.css
# etc.`}
              output={[
                'Compiled src/scss/main.scss to dist/css/main.css.',
                'Compiled src/scss/components/button.scss to dist/css/components/button.css.',
                '✅ All files compiled'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Compile to Stdout"
              code={`# Output to terminal instead of file
sass input.scss

# Useful for piping or debugging`}
              output={[
                '.button { background: #3b82f6; padding: 0.75rem; }',
                '// CSS printed to terminal'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Watch Mode"
            description="Auto-compile on file changes"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Watch Single File"
            code={`# Watch a single file
sass --watch input.scss:output.css

# Watches for changes and auto-compiles`}
            output={[
              'Compiled input.scss to output.css.',
              'Sass is watching for changes. Press Ctrl-C to stop.',
              '',
              '// Edit input.scss...',
              'Change detected to: input.scss',
              'Compiled input.scss to output.css.'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Watch Directory"
            code={`# Watch entire directory
sass --watch src/scss:dist/css

# Watches all SCSS files in src/scss/`}
            output={[
              'Compiled src/scss/main.scss to dist/css/main.css.',
              'Sass is watching for changes. Press Ctrl-C to stop.',
              '',
              '// Auto-compiles on any SCSS file change'
            ]}
            language="scss"
            colorTheme="green"
          />

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best for Development</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Watch mode is <strong>perfect for development</strong>. Changes reflect instantly without manual compilation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Output Styles"
            description="Control CSS formatting"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Expanded (Default)"
            code={`# Default expanded output
sass input.scss output.css --style=expanded

# Most readable, good for development`}
            output={[
              '.button {',
              '  background: #3b82f6;',
              '  padding: 0.75rem;',
              '}',
              '',
              '✅ Readable, multi-line format'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Compressed (Production)"
            code={`# Minified output
sass input.scss output.css --style=compressed

# Smallest file size, for production`}
            output={[
              '.button{background:#3b82f6;padding:.75rem}',
              '',
              '✅ Minified, single-line format'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Source Maps"
            description="Debug SCSS in DevTools"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Generate Source Maps"
            code={`# Generate external source map
sass input.scss output.css --source-map

# Creates output.css and output.css.map`}
            output={[
              'Compiled input.scss to output.css.',
              '✅ Generated output.css.map'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="Embed Source Maps"
            code={`# Embed source map in CSS file
sass input.scss output.css --embed-source-map

# No separate .map file created`}
            output={[
              '✅ Source map embedded in CSS',
              '// Good for development only'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="No Source Maps"
            code={`# Disable source maps
sass input.scss output.css --no-source-map`}
            output={[
              '✅ No source map generated',
              '// Smaller file size'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Advanced Options"
            description="Load paths, charset, indentation"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Load Paths"
              code={`# Add load path for @import/@use
sass --load-path=node_modules input.scss output.css

# Multiple load paths
sass --load-path=node_modules --load-path=lib input.scss output.css`}
              output={[
                '✅ Can import from node_modules',
                '@use "bootstrap/scss/bootstrap";'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="No Charset"
              code={`# Omit @charset declaration
sass input.scss output.css --no-charset

# Useful for libraries`}
              output={[
                '✅ No @charset in output',
                '// Cleaner for concatenation'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Indentation"
              code={`# Set indentation width
sass input.scss output.css --indentation=2

# Or use tabs
sass input.scss output.css --indentation=tab`}
              output={[
                '✅ Custom indentation applied',
                '// 2 spaces or tabs'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Line Number Comments"
              code={`# Add line number comments (legacy)
sass input.scss output.css --line-numbers

# Shows source line numbers in CSS`}
              output={[
                '/* line 5, input.scss */',
                '.button { ... }',
                '',
                '// Useful for debugging without source maps'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="Common Commands"
            description="Frequently used CLI patterns"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Development Build</h4>
              <code className="text-sm bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded block overflow-x-auto">
                sass --watch src/scss:dist/css --source-map --style=expanded
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Production Build</h4>
              <code className="text-sm bg-green-50 dark:bg-green-900/30 px-3 py-2 rounded block overflow-x-auto">
                sass src/scss:dist/css --no-source-map --style=compressed
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">With Load Path</h4>
              <code className="text-sm bg-purple-50 dark:bg-purple-900/30 px-3 py-2 rounded block overflow-x-auto">
                sass --watch src/scss:dist/css --load-path=node_modules
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Debug with Line Numbers</h4>
              <code className="text-sm bg-orange-50 dark:bg-orange-900/30 px-3 py-2 rounded block overflow-x-auto">
                sass src/scss:dist/css --line-numbers --style=expanded
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Package.json Scripts"
            description="Automate CLI commands"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="NPM Scripts"
            code={`{
  "scripts": {
    // Development with watch
    "sass:dev": "sass --watch src/scss:dist/css --source-map --style=expanded",
    
    // Production build
    "sass:build": "sass src/scss:dist/css --no-source-map --style=compressed",
    
    // Single compile
    "sass": "sass src/scss:dist/css",
    
    // With load path
    "sass:lib": "sass src/scss:dist/css --load-path=node_modules"
  }
}`}
            output={[
              '// npm run sass:dev → Development mode',
              '// npm run sass:build → Production build',
              '// npm run sass → Single compilation'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Watch Mode in Development</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--watch</code> for auto-compilation
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Compress for Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--style=compressed</code> reduces file size
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Source Maps in Dev</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--source-map</code> for debugging
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Load Paths for Libraries</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--load-path=node_modules</code> for clean imports
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Package.json Scripts</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easier to remember than long CLI commands
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Embed Source Maps in Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">--embed-source-map</code> increases file size
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Expanded Style in Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always use compressed for smaller files
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Simple & Fast</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No build tools required, just CLI
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Watch Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-compile on file changes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Output Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Expanded (dev) or compressed (prod)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Debug SCSS in browser DevTools
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
