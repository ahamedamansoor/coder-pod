'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FileOutput, 
  CheckCircle2,
  Lightbulb,
  Info,
  Maximize2,
  Minimize2,
  Layout,
  Code
} from 'lucide-react';

interface SassOutputStyleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassOutputStyleNew({ onOpenWebPlayground }: SassOutputStyleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileOutput}
        category="Sass/SCSS · Performance"
        title="Output Styles"
        description="Control how SCSS compiles to CSS with different output styles for development and production."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileOutput className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Output Styles"
            description="CSS compilation formats"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            SCSS offers <strong>4 output styles</strong> to control how your CSS is formatted. Choose based on your needs: <strong>development</strong> (readable) or <strong>production</strong> (compressed)!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Development</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <strong>Expanded</strong> - Most readable</li>
                <li>• <strong>Nested</strong> - Shows structure</li>
                <li>• Easy to debug</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Production</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <strong>Compressed</strong> - Smallest file</li>
                <li>• Minified output</li>
                <li>• Fastest loading</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Compilation Option</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Set output style with: <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">sass input.scss output.css --style=compressed</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Expanded Style */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Maximize2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Expanded (Default)"
            description="Most readable format"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Best for development.</strong> Each property on its own line, full formatting.
          </p>

          <CodeSnippetWithOutput
            title="SCSS Input"
            code={`.button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: #3b82f6;
  
  &:hover {
    background: #2563eb;
  }
}`}
            output={[]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Expanded Output"
            code={`.button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: #3b82f6;
}
.button:hover {
  background: #2563eb;
}`}
            output={[
              '✅ Most readable',
              '✅ Easy to debug',
              '✅ Standard CSS format',
              '❌ Larger file size'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-cyan-400 mb-2"># Compile with expanded style</div>
            <code>sass input.scss output.css --style=expanded</code>
          </div>
        </CardContent>
      </Card>

      {/* Compressed Style */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Minimize2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Compressed"
            description="Minified for production"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Best for production.</strong> All whitespace removed, smallest file size.
          </p>

          <CodeSnippetWithOutput
            title="SCSS Input"
            code={`.button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: #3b82f6;
  
  &:hover {
    background: #2563eb;
  }
  
  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
}`}
            output={[]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Compressed Output"
            code={`.button{padding:.5rem 1rem;border-radius:4px;background:#3b82f6}.button:hover{background:#2563eb}.button--large{padding:1rem 2rem;font-size:1.125rem}`}
            output={[
              '✅ Smallest file size',
              '✅ Fastest loading',
              '✅ Perfect for production',
              '❌ Hard to read/debug'
            ]}
            language="scss"
            colorTheme="green"
          />

          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-cyan-400 mb-2"># Compile with compressed style</div>
            <code>sass input.scss output.css --style=compressed</code>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Production Standard</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Always use <strong>compressed</strong> for production deployments. Reduces file size by ~40-60%!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Nested Style */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Nested"
            description="Shows SCSS structure"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Good for debugging.</strong> Indentation reflects SCSS nesting structure.
          </p>

          <CodeSnippetWithOutput
            title="SCSS Input"
            code={`.card {
  background: white;
  border-radius: 8px;
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  &__body {
    padding: 1rem;
  }
}`}
            output={[]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Nested Output"
            code={`.card {
  background: white;
  border-radius: 8px; }
  .card__title {
    font-size: 1.5rem;
    font-weight: 700; }
  .card__body {
    padding: 1rem; }`}
            output={[
              '✅ Shows nesting structure',
              '✅ Easier to trace',
              '⚠️ Unusual formatting',
              '❌ Closing braces on same line'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-cyan-400 mb-2"># Compile with nested style</div>
            <code>sass input.scss output.css --style=nested</code>
          </div>
        </CardContent>
      </Card>

      {/* Compact Style */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Compact"
            description="One rule per line"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Middle ground.</strong> Each selector on one line, readable but compact.
          </p>

          <CodeSnippetWithOutput
            title="SCSS Input"
            code={`.nav {
  display: flex;
  gap: 1rem;
  
  &__item {
    padding: 0.5rem;
    color: #333;
  }
  
  &__link {
    text-decoration: none;
    color: inherit;
  }
}`}
            output={[]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Compact Output"
            code={`.nav { display: flex; gap: 1rem; }
.nav__item { padding: 0.5rem; color: #333; }
.nav__link { text-decoration: none; color: inherit; }`}
            output={[
              '✅ Reasonably readable',
              '✅ Smaller than expanded',
              '⚠️ Less common',
              '❌ Not standard format'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-cyan-400 mb-2"># Compile with compact style</div>
            <code>sass input.scss output.css --style=compact</code>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileOutput className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Style Comparison"
            description="Which to use when"
            size="lg"
          />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-indigo-300 dark:border-indigo-700">
                  <th className="text-left p-3 font-bold text-indigo-900 dark:text-indigo-100">Style</th>
                  <th className="text-left p-3 font-bold text-indigo-900 dark:text-indigo-100">Readability</th>
                  <th className="text-left p-3 font-bold text-indigo-900 dark:text-indigo-100">File Size</th>
                  <th className="text-left p-3 font-bold text-indigo-900 dark:text-indigo-100">Use Case</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Expanded</td>
                  <td className="p-3"><Badge className="bg-green-500">Excellent</Badge></td>
                  <td className="p-3"><Badge className="bg-red-500">Largest</Badge></td>
                  <td className="p-3">Development</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Compressed</td>
                  <td className="p-3"><Badge className="bg-red-500">Poor</Badge></td>
                  <td className="p-3"><Badge className="bg-green-500">Smallest</Badge></td>
                  <td className="p-3">Production</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Nested</td>
                  <td className="p-3"><Badge className="bg-yellow-500">Good</Badge></td>
                  <td className="p-3"><Badge className="bg-orange-500">Medium</Badge></td>
                  <td className="p-3">Debugging structure</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Compact</td>
                  <td className="p-3"><Badge className="bg-yellow-500">Fair</Badge></td>
                  <td className="p-3"><Badge className="bg-yellow-500">Medium-Small</Badge></td>
                  <td className="p-3">Quick review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Files */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Configuration Files"
            description="Set output style in config"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="package.json Scripts"
              code={`{
  "scripts": {
    "sass:dev": "sass src/scss:dist/css --style=expanded --watch",
    "sass:build": "sass src/scss:dist/css --style=compressed",
    "sass:debug": "sass src/scss:dist/css --style=nested"
  }
}`}
              output={[
                '// Different scripts for different needs'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Vite Config"
              code={`// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        // Development
        outputStyle: process.env.NODE_ENV === 'production' 
          ? 'compressed' 
          : 'expanded'
      }
    }
  }
}`}
              output={[
                '// Auto-switch based on environment'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Webpack Config"
              code={`// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      }
    ]
  }
}`}
              output={[
                '// Webpack sass-loader configuration'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Development: Expanded</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Most readable, easiest to debug
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Production: Compressed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smallest file size, fastest loading
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Even with compressed output, use source maps for debugging: <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--source-map</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Environment-Based</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-switch output style based on <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">NODE_ENV</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Don't Use Compressed in Dev</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Makes debugging impossible
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Don't Use Expanded in Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Wastes bandwidth and slows page load
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">4 Output Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Expanded, Compressed, Nested, Compact
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Compressed for Prod</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                40-60% smaller file size
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Expanded for Dev</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Most readable, easiest debugging
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">CLI Flag</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                --style=compressed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
