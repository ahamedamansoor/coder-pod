'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  RefreshCw, 
  CheckCircle2,
  Lightbulb,
  Info,
  AlertTriangle,
  Code,
  ArrowRight,
  Terminal
} from 'lucide-react';

interface SassMigrationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMigrationNew({ onOpenWebPlayground }: SassMigrationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="Sass/SCSS · Migration"
        title="Migrating to Dart Sass"
        description="Migrate from deprecated LibSass/Node Sass to the modern, actively maintained Dart Sass compiler."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<RefreshCw className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Migrating to Dart Sass"
            description="Modern Sass compiler"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Dart Sass</strong> is the primary, actively maintained implementation of Sass. <strong>LibSass</strong> and <strong>Node Sass</strong> are deprecated and no longer receiving updates. Migrating to Dart Sass ensures future compatibility and access to latest features!
          </p>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Important!</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>LibSass and Node Sass are officially deprecated.</strong> All new Sass features are only added to Dart Sass. Migrate as soon as possible!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-red-700 dark:text-red-300">LibSass/Node Sass</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">❌ Deprecated, no updates</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Dart Sass</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">✅ Actively maintained, latest features</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Migration</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Easy upgrade path</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installation"
            description="Replace Node Sass with Dart Sass"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Uninstall Node Sass"
            code={`# Remove node-sass
npm uninstall node-sass

# Or remove from package.json and run
npm install`}
            output={[
              '✅ node-sass removed',
              '// Deprecated package uninstalled'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Install Dart Sass"
            code={`# Install sass (Dart Sass)
npm install sass

# Or with pnpm
pnpm add sass`}
            output={[
              '✅ sass (Dart Sass) installed',
              '// Modern Sass compiler'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">That's It!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              For most projects, simply replacing the package is enough. The API is largely compatible!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Breaking Changes"
            description="What might need updating"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">⚠️ Division Operator</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <code className="bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">/</code> no longer means division
              </p>
              <CodeSnippetWithOutput
                title="Before (Node Sass)"
                code={`$width: 100px / 2;  // 50px`}
                output={[
                  '// ⚠️ Deprecated in Dart Sass'
                ]}
                language="scss"
                colorTheme="purple"
              />
              <CodeSnippetWithOutput
                title="After (Dart Sass)"
                code={`@use "sass:math";

$width: math.div(100px, 2);  // 50px
// Or use calc()
$width: calc(100px / 2);  // 50px`}
                output={[
                  '✅ Use math.div() or calc()'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">⚠️ Color Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Some color functions have changed
              </p>
              <CodeSnippetWithOutput
                title="Before (Node Sass)"
                code={`$lighter: lighten($color, 10%);
$darker: darken($color, 10%);
$transparent: fade-out($color, 0.5);`}
                output={[
                  '// ⚠️ Deprecated'
                ]}
                language="scss"
                colorTheme="purple"
              />
              <CodeSnippetWithOutput
                title="After (Dart Sass)"
                code={`@use "sass:color";

$lighter: color.scale($color, $lightness: 10%);
$darker: color.scale($color, $lightness: -10%);
$transparent: color.adjust($color, $alpha: -0.5);`}
                output={[
                  '✅ Use sass:color module'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">⚠️ @import Deprecated</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Migrate to modern module system
              </p>
              <CodeSnippetWithOutput
                title="Before"
                code={`@import 'variables';
@import 'mixins';`}
                output={[
                  '// ⚠️ Deprecated, use @use'
                ]}
                language="scss"
                colorTheme="purple"
              />
              <CodeSnippetWithOutput
                title="After"
                code={`@use 'variables';
@use 'mixins';

.element {
  color: variables.$primary;
  @include mixins.flex-center;
}`}
                output={[
                  '✅ Use @use with namespaces'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Build Tool Updates"
            description="Update webpack, Gulp, etc."
            size="lg"
          />

          <div className="space-y-6">
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
              implementation: require('sass'),  // ← Use Dart Sass
              sassOptions: {
                api: 'modern-compiler'  // ← Optional: faster compilation
              }
            }
          }
        ]
      }
    ]
  }
};`}
              output={[
                '✅ Webpack configured for Dart Sass',
                '// Modern compiler API for better performance'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Gulp Config"
              code={`// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  // ← Pass Dart Sass

function compileSass() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

exports.sass = compileSass;`}
              output={[
                '✅ Gulp configured for Dart Sass'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Vite Config"
              code={`// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'  // ← Use modern compiler
      }
    }
  }
};`}
              output={[
                '✅ Vite configured for Dart Sass'
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
            icon={<Terminal className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Migration Checklist"
            description="Step-by-step guide"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Uninstall node-sass</h4>
                  <code className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    npm uninstall node-sass
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Install Dart Sass</h4>
                  <code className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
                    npm install sass
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Update Build Config</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Update webpack/Gulp to use Dart Sass
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Fix Division</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Replace / with math.div() or calc()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-teal-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 dark:text-teal-300">Test Everything</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Run build and check output
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Benefits of Dart Sass"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Active Development</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Regular updates and new features
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Module System</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @use and @forward for better code organization
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Better Errors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                More helpful error messages
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Faster Compilation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Modern compiler API for improved performance
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Future-Proof</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All new features only in Dart Sass
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Easy Migration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Usually just replace the package
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Fix Division</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use math.div() or calc()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Update @import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Migrate to @use/@forward
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Future-Proof</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Stay up-to-date with latest features
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
