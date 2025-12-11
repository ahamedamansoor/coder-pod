'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  MapPin, 
  CheckCircle2,
  Lightbulb,
  Info,
  Bug,
  Search,
  FileCode,
  Zap
} from 'lucide-react';

interface SassSourceMapsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassSourceMapsNew({ onOpenWebPlayground }: SassSourceMapsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={MapPin}
        category="Sass/SCSS · Performance"
        title="Source Maps"
        description="Debug compiled CSS like a pro with source maps that link back to your original SCSS files."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<MapPin className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Source Maps"
            description="Bridge between compiled CSS and original SCSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Source maps</strong> are files that map your compiled CSS back to the original SCSS. When debugging in browser DevTools, you see <strong>SCSS file names and line numbers</strong> instead of compiled CSS!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Without Source Maps</h4>
              <pre className="text-xs bg-red-50 dark:bg-red-900/30 p-2 rounded overflow-x-auto"><code>styles.css:2847{'\n'}.button &#123; ... &#125;</code></pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Hard to find in huge CSS file!</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">With Source Maps</h4>
              <pre className="text-xs bg-green-50 dark:bg-green-900/30 p-2 rounded overflow-x-auto"><code>_button.scss:15{'\n'}.button &#123; ... &#125;</code></pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Jump straight to SCSS file!</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Source Maps?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Debugging compiled CSS is painful. Source maps let you see and edit the <strong>original SCSS</strong> in browser DevTools!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Generating Source Maps"
            description="CLI and config options"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="CLI with --source-map"
              code={`# Generate source map
sass input.scss output.css --source-map

# This creates two files:
# 1. output.css
# 2. output.css.map (the source map)

# Source map is automatically linked in CSS:
/* output.css */
.button { ... }
/*# sourceMappingURL=output.css.map */`}
              output={[
                '✅ output.css - Compiled CSS',
                '✅ output.css.map - Source map',
                '// CSS file automatically links to map'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Watch Mode with Source Maps"
              code={`# Watch and generate source maps
sass --watch input.scss:output.css --source-map

# Multiple files
sass --watch src/scss:dist/css --source-map`}
              output={[
                'Watching for changes...',
                '✓ Compiled src/scss/main.scss to dist/css/main.css',
                '✓ Generated dist/css/main.css.map'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Embedded Source Maps"
              code={`# Embed source map inside CSS file (for development)
sass input.scss output.css --embed-source-map

# No separate .map file created
# Source map is base64 encoded in CSS`}
              output={[
                '✅ Source map embedded in CSS file',
                '// Good for development',
                '❌ Not for production (increases file size)'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Package.json Scripts"
            description="Automate source map generation"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="package.json"
            code={`{
  "scripts": {
    // Development: expanded + source maps
    "sass:dev": "sass src/scss:dist/css --watch --source-map --style=expanded",
    
    // Production: compressed + source maps
    "sass:build": "sass src/scss:dist/css --source-map --style=compressed",
    
    // Debug mode: embedded source maps
    "sass:debug": "sass src/scss:dist/css --embed-source-map --style=expanded"
  }
}`}
            output={[
              '// npm run sass:dev → Watch mode with source maps',
              '// npm run sass:build → Production with source maps',
              '// npm run sass:debug → Embedded source maps'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Build Tool Configuration"
            description="Webpack, Vite, Parcel"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Webpack (sass-loader)"
              code={`// webpack.config.js
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  
  // Enable source maps
  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true  // Enable source maps
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true  // Enable source maps
            }
          }
        ]
      }
    ]
  }
};`}
              output={[
                '✅ Source maps enabled in Webpack',
                '// DevTools shows original SCSS files'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Vite"
              code={`// vite.config.js
export default {
  css: {
    devSourcemap: true,  // Dev source maps
    
    preprocessorOptions: {
      scss: {
        // SCSS options
      }
    }
  },
  
  build: {
    sourcemap: true  // Production source maps
  }
}`}
              output={[
                '✅ Source maps in dev and production',
                '// Vite automatically handles SCSS source maps'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Parcel"
              code={`// .parcelrc or package.json
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html --source-maps"
  }
}

// Parcel automatically generates source maps in dev mode
// Use --source-maps flag for production`}
              output={[
                '✅ Parcel handles source maps automatically',
                '// No configuration needed for dev'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Search className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Using Source Maps in DevTools"
            description="Debugging with browser tools"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">1. Open DevTools</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Right-click on page → Inspect Element (or F12)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">2. Go to Sources Tab</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                You will see your SCSS files in the file tree (e.g., <code className="bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">_button.scss</code>)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">3. Click on SCSS File</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                View and edit your original SCSS code directly!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">4. Inspect Element</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                In Elements tab, styles show: <code className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">_button.scss:15</code>
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">5. Live Edit (Optional)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Edit SCSS in DevTools, see changes live. Save to disk with Workspaces.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
            <h4 className="text-cyan-400 mb-3">Example: DevTools Display</h4>
            <pre className="text-sm overflow-x-auto"><code>{`Elements → Styles
─────────────────────────────────
.button {
  background: #3b82f6;        _button.scss:15
  padding: 0.75rem 1.5rem;    _button.scss:16
  border-radius: 0.5rem;      _button.scss:17
}

Click line number → Jump to SCSS file!`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<MapPin className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Source Map Types"
            description="External vs Inline vs Embedded"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">External Source Maps (Recommended)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Separate <code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">.css.map</code> file
              </p>
              <pre className="text-xs bg-blue-50 dark:bg-blue-900/30 p-2 rounded overflow-x-auto mb-2"><code>sass input.scss output.css --source-map</code></pre>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>✅ No impact on CSS file size</li>
                <li>✅ Only loads in DevTools</li>
                <li>✅ Best for production</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Inline Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Embedded as data URI in CSS file
              </p>
              <pre className="text-xs bg-purple-50 dark:bg-purple-900/30 p-2 rounded overflow-x-auto mb-2"><code>sass input.scss output.css --embed-source-map</code></pre>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>✅ No separate file</li>
                <li>❌ Increases CSS file size (base64)</li>
                <li>⚠️ Good for development only</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">With Source Content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Includes SCSS source in the map
              </p>
              <pre className="text-xs bg-green-50 dark:bg-green-900/30 p-2 rounded overflow-x-auto mb-2"><code>sass input.scss output.css --source-map --embed-sources</code></pre>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>✅ Works without SCSS files</li>
                <li>❌ Larger map file</li>
                <li>⚠️ Use if SCSS not deployed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Bug className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Production Considerations"
            description="Should you ship source maps?"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Include Source Maps</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Debug production issues</li>
                <li>• Only load in DevTools</li>
                <li>• Minimal performance impact</li>
                <li>• Better error reports</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ Risks to Consider</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Exposes source code</li>
                <li>• Adds file size (same as CSS)</li>
                <li>• Security concerns?</li>
                <li>• Can disable per environment</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Recommendation</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <strong>Include source maps in production!</strong> They only load when DevTools is open, do not affect performance, and make debugging much easier. If code security is critical, disable them.
            </AlertDescription>
          </Alert>

          <CodeSnippetWithOutput
            title="Environment-Based Source Maps"
            code={`// package.json
{
  "scripts": {
    "build:staging": "sass src/scss:dist/css --source-map --style=compressed",
    "build:prod": "sass src/scss:dist/css --no-source-map --style=compressed"
  }
}

// Or in Webpack/Vite config
const sourcemap = process.env.NODE_ENV !== 'production';`}
            output={[
              '// Staging: Include source maps',
              '// Production: No source maps (optional)'
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
            title="Source Map Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Always Use in Development</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Essential for debugging during development
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ External Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use external <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">.map</code> files, not embedded
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Include in Production (Usually)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Makes debugging easier, minimal cost
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Compressed + Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Production CSS should be compressed WITH source maps
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Embed in Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">--embed-source-map</code> increases file size
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Commit .map Files</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">*.css.map</code> to <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">.gitignore</code> (generated files)
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">What Are They?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Maps compiled CSS back to SCSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Why Use Them?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Debug SCSS in DevTools, not CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">How to Generate?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                --source-map flag
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Production?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Yes, usually include them!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
