'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Zap, 
  CheckCircle2,
  Lightbulb,
  Info,
  TrendingDown,
  FileCode,
  Minimize2,
  Sparkles
} from 'lucide-react';

interface SassOptimizationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassOptimizationNew({ onOpenWebPlayground }: SassOptimizationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="Sass/SCSS · Performance"
        title="CSS Optimization"
        description="Optimize your compiled CSS output, remove duplicates, and minimize file size for production."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="CSS Optimization"
            description="Techniques to minimize compiled CSS size"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>CSS optimization</strong> focuses on reducing the size of your compiled CSS files by removing duplicates, minimizing output, and using efficient compilation strategies. Smaller CSS = faster page loads!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Minimize2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Minification</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Remove whitespace, comments</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Deduplication</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Remove duplicate rules</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Tree Shaking</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Remove unused code</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Optimize?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Optimized CSS loads faster, reduces bandwidth costs, and improves user experience. A <strong>40-60% size reduction</strong> is typical with compression!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Minimize2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Compressed Output Style"
            description="Built-in minification"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Sass Compressed Output"
            code={`# Compile with compressed style
sass input.scss output.css --style=compressed

# Before (expanded): 150 KB
# After (compressed): 60 KB (40% reduction!)`}
            output={[
              '✅ Minified CSS output',
              '✅ Whitespace removed',
              '✅ Comments stripped',
              '// 40-60% size reduction typical'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Expanded (150 KB)</h4>
              <pre className="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded overflow-x-auto"><code>{`.button {
  background: #3b82f6;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}

.button:hover {
  background: #2563eb;
}`}</code></pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Compressed (60 KB)</h4>
              <pre className="text-xs bg-green-50 dark:bg-green-900/30 p-3 rounded overflow-x-auto"><code>{`.button{background:#3b82f6;padding:.75rem 1.5rem;border-radius:.5rem}.button:hover{background:#2563eb}`}</code></pre>
              <Badge className="mt-2 bg-green-500">60% smaller!</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TrendingDown className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Avoiding Duplicates"
            description="Write DRY SCSS"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ Bad: Repeated Styles</h4>
              <CodeSnippetWithOutput
                title="Duplicate Code"
                code={`// ❌ Duplicated styles across components
.button-primary {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.button-secondary {
  padding: 0.75rem 1.5rem;  // Duplicate!
  border-radius: 0.5rem;    // Duplicate!
  font-weight: 600;         // Duplicate!
}

.button-tertiary {
  padding: 0.75rem 1.5rem;  // Duplicate!
  border-radius: 0.5rem;    // Duplicate!
  font-weight: 600;         // Duplicate!
}`}
                output={[
                  '❌ Repeated CSS in output',
                  '❌ Larger file size',
                  '❌ Hard to maintain'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Good: Use Mixins</h4>
              <CodeSnippetWithOutput
                title="DRY with Mixin"
                code={`// ✅ Define once, reuse everywhere
@mixin button-base {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.button-primary {
  @include button-base;
  background: blue;
}

.button-secondary {
  @include button-base;
  background: gray;
}

.button-tertiary {
  @include button-base;
  background: purple;
}`}
                output={[
                  '✅ No duplication in source',
                  '✅ Easier to maintain',
                  '// But CSS still has repeated properties!'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">⭐ Best: Use @extend</h4>
              <CodeSnippetWithOutput
                title="Extend Placeholder"
                code={`// ⭐ Sass groups selectors - no duplication!
%button-base {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.button-primary {
  @extend %button-base;
  background: blue;
}

.button-secondary {
  @extend %button-base;
  background: gray;
}

.button-tertiary {
  @extend %button-base;
  background: purple;
}`}
                output={[
                  '/* Compiled CSS */',
                  '.button-primary, .button-secondary, .button-tertiary {',
                  '  padding: 0.75rem 1.5rem;',
                  '  border-radius: 0.5rem;',
                  '  font-weight: 600;',
                  '}',
                  '',
                  '✅ No duplication in output!',
                  '✅ Smallest file size'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">When to Use @extend</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Use <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">@extend</code> for shared styles that never change. Use mixins for styles with parameters or variations.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Limiting Nesting Depth"
            description="Avoid selector bloat"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ Bad: Deep Nesting</h4>
              <CodeSnippetWithOutput
                title="Too Deep"
                code={`// ❌ 6 levels deep!
.sidebar {
  .nav {
    .menu {
      .list {
        .item {
          .link {
            color: blue;
          }
        }
      }
    }
  }
}`}
                output={[
                  '/* Compiled to long selector */',
                  '.sidebar .nav .menu .list .item .link { color: blue; }',
                  '',
                  '❌ High specificity',
                  '❌ Hard to override',
                  '❌ Larger file size'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>

            <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Good: 3 Levels Max</h4>
              <CodeSnippetWithOutput
                title="Shallow Nesting"
                code={`// ✅ 3 levels max (recommended)
.sidebar {
  .nav-item {
    color: gray;
    
    &:hover {
      color: blue;
    }
  }
}

// Or use BEM for flat structure
.sidebar__nav-item {
  color: gray;
  
  &:hover {
    color: blue;
  }
}`}
                output={[
                  '/* Short selectors */',
                  '.sidebar .nav-item { color: gray; }',
                  '.sidebar .nav-item:hover { color: blue; }',
                  '',
                  '✅ Low specificity',
                  '✅ Easy to override',
                  '✅ Smaller file size'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>
          </div>

          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Rule of Thumb</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>Maximum 3-4 levels</strong> of nesting</li>
              <li>• <strong>Maximum 50 characters</strong> in compiled selector</li>
              <li>• <strong>Use BEM</strong> to avoid deep nesting</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Removing Unused CSS"
            description="Tree shaking with PurgeCSS"
            size="lg"
          />

          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>PurgeCSS</strong> scans your HTML/JS files and removes unused CSS classes from the compiled output. Essential for frameworks like Tailwind or large component libraries!
          </p>

          <CodeSnippetWithOutput
            title="Install PurgeCSS"
            code={`# Install
npm install --save-dev @fullhuman/postcss-purgecss

# Or with pnpm
pnpm add -D @fullhuman/postcss-purgecss`}
            output={[
              '✅ PurgeCSS installed',
              '// Typically removes 90%+ of unused CSS!'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="PostCSS Configuration"
            code={`// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.html',
        './src/**/*.tsx',
        './src/**/*.jsx',
      ],
      defaultExtractor: content => content.match(/[\\w-/:]+(?<!:)/g) || [],
      safelist: ['active', 'disabled', /^data-/]  // Classes to keep
    })
  ]
}`}
            output={[
              '✅ PurgeCSS configured',
              '// Scans HTML/JSX for used classes',
              '// Removes everything else'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Before PurgeCSS</h4>
              <Badge className="bg-red-500 mb-2">2.5 MB</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">Includes all CSS from library</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">After PurgeCSS</h4>
              <Badge className="bg-green-500 mb-2">15 KB</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">Only used classes remain!</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Safelist Dynamic Classes</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Add dynamically generated classes to the <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">safelist</code> so PurgeCSS does not remove them!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="PostCSS Optimization Plugins"
            description="Additional optimization tools"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">cssnano</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Advanced CSS minifier with multiple optimization passes
              </p>
              <CodeSnippetWithOutput
                title="Install & Configure"
                code={`# Install
npm install --save-dev cssnano

// postcss.config.js
module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        colormin: true,
        minifySelectors: true
      }]
    })
  ]
}`}
                output={[
                  '✅ Advanced minification',
                  '✅ Color optimization',
                  '✅ Selector compression'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">postcss-combine-duplicated-selectors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Merges duplicate selectors automatically
              </p>
              <CodeSnippetWithOutput
                title="Before & After"
                code={`/* Before */
.button { color: red; }
.card { background: white; }
.button { padding: 10px; }  // Duplicate selector!

/* After Plugin */
.button { color: red; padding: 10px; }
.card { background: white; }`}
                output={[
                  '✅ Selectors combined',
                  '✅ Smaller file size'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">autoprefixer</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Adds vendor prefixes only when needed (removes unnecessary ones)
              </p>
              <CodeSnippetWithOutput
                title="Configuration"
                code={`// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%']
    })
  ]
}`}
                output={[
                  '✅ Smart vendor prefixes',
                  '✅ Removes outdated prefixes',
                  '✅ Smaller CSS output'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Code Splitting"
            description="Split CSS into smaller chunks"
            size="lg"
          />

          <p className="text-sm text-gray-700 dark:text-gray-300">
            Instead of one large CSS file, split it into smaller chunks loaded only when needed.
          </p>

          <CodeSnippetWithOutput
            title="Split by Route/Component"
            code={`// Instead of:
// styles.scss (500 KB) - Everything!

// Do this:
// shared.scss (50 KB) - Common styles
// home.scss (30 KB) - Homepage only
// dashboard.scss (80 KB) - Dashboard only
// profile.scss (20 KB) - Profile only

// Load only what's needed per page!`}
            output={[
              '✅ Smaller initial load',
              '✅ Faster page render',
              '✅ Better performance'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">With Webpack</h4>
            <CodeSnippetWithOutput
              title="Dynamic Import"
              code={`// Webpack automatically splits CSS
import('./dashboard.scss').then(() => {
  // CSS loaded dynamically
});

// Or with React lazy loading
const Dashboard = lazy(() => import('./Dashboard'));
// CSS loads with component!`}
              output={[
                '✅ CSS code splitting automatic',
                '✅ Lazy load CSS with components'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Optimization Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Compressed Output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--style=compressed</code> for production
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use @extend for Shared Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prevent duplicate properties in output
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Limit Nesting to 3-4 Levels</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Shorter selectors = smaller CSS
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use PurgeCSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Remove unused CSS (90% reduction typical!)
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Gzip/Brotli</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Server-side compression (additional 70% reduction)
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Split Large Files</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Code split CSS by route/component
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Deep Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Long selectors increase file size
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Repeat Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use mixins or @extend instead
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Minification</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                40-60% size reduction with compressed output
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Deduplication</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use @extend to avoid duplicate CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Tree Shaking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                PurgeCSS removes 90%+ unused CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Best Result</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combine all techniques for maximum optimization!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
