'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Package, 
  CheckCircle2,
  Lightbulb,
  Info,
  AlertTriangle,
  ArrowRight,
  Code,
  Terminal
} from 'lucide-react';

interface SassModuleMigrationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassModuleMigrationNew({ onOpenWebPlayground }: SassModuleMigrationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="Sass/SCSS · Migration"
        title="Module System Migration"
        description="Migrate from deprecated @import to modern @use and @forward for better code organization and performance."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Module System Migration"
            description="@import → @use/@forward"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@import is deprecated!</strong> The new module system with <strong>@use</strong> and <strong>@forward</strong> provides better performance, explicit dependencies, and prevents naming conflicts through namespacing.
          </p>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">@import Deprecated</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>@import will be removed in Dart Sass 3.0.</strong> Migrate to @use/@forward as soon as possible!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-red-700 dark:text-red-300">@import Problems</h4>
              </div>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Global namespace pollution</li>
                <li>• Multiple CSS output</li>
                <li>• Slow compilation</li>
                <li>• No true encapsulation</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">@use/@forward Benefits</h4>
              </div>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Namespaced imports</li>
                <li>• Loads once</li>
                <li>• Faster builds</li>
                <li>• True encapsulation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic Migration"
            description="Simple @import to @use"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before (@import)</h4>
              <CodeSnippetWithOutput
                title="_variables.scss"
                code={`$primary: #3b82f6;
$secondary: #8b5cf6;
$spacing: 1rem;`}
                output={[]}
                language="scss"
                colorTheme="blue"
              />
              <CodeSnippetWithOutput
                title="main.scss"
                code={`@import 'variables';

.button {
  background: $primary;
  padding: $spacing;
}`}
                output={[
                  '// ⚠️ Global namespace',
                  '// Variables accessible everywhere'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After (@use)</h4>
              <CodeSnippetWithOutput
                title="_variables.scss"
                code={`$primary: #3b82f6;
$secondary: #8b5cf6;
$spacing: 1rem;`}
                output={[]}
                language="scss"
                colorTheme="blue"
              />
              <CodeSnippetWithOutput
                title="main.scss"
                code={`@use 'variables';

.button {
  background: variables.$primary;
  padding: variables.$spacing;
}`}
                output={[
                  '✅ Namespaced with variables.',
                  '// No global pollution'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Custom Namespace"
            description="Use 'as' to rename"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Custom Namespace"
            code={`@use 'variables' as vars;
@use 'mixins' as mx;

.button {
  background: vars.$primary;
  @include mx.flex-center;
}

// Short names
@use 'utilities' as u;
.text {
  color: u.$text-color;
}`}
            output={[
              '✅ Short, convenient names',
              '// vars. instead of variables.'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="No Namespace (use with caution)"
            code={`@use 'variables' as *;

.button {
  background: $primary;  // No namespace needed
  padding: $spacing;
}

// ⚠️ Be careful: can cause naming conflicts`}
            output={[
              '⚠️ Use sparingly',
              '// Only for trusted libraries'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Migrating Mixins"
            description="Access with namespaces"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before</h4>
              <CodeSnippetWithOutput
                title="_mixins.scss"
                code={`@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}`}
                output={[]}
                language="scss"
                colorTheme="green"
              />
              <CodeSnippetWithOutput
                title="main.scss"
                code={`@import 'mixins';

.container {
  @include flex-center;
}`}
                output={[
                  '// ⚠️ Global mixin'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After</h4>
              <CodeSnippetWithOutput
                title="main.scss"
                code={`@use 'mixins' as mx;

.container {
  @include mx.flex-center;
}

// Or with full name
@use 'mixins';

.container {
  @include mixins.flex-center;
}`}
                output={[
                  '✅ Namespaced mixin access',
                  '// Clear where it comes from'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Using @forward"
            description="Create library APIs"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Library Structure"
            code={`// _variables.scss
$primary: #3b82f6;

// _mixins.scss
@mixin button { ... }

// _functions.scss
@function to-rem($px) { ... }

// index.scss (main entry point)
@forward 'variables';
@forward 'mixins';
@forward 'functions';`}
            output={[
              '✅ Single entry point',
              '// Users import from index'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Using the Library"
            code={`// Consumer code
@use 'your-library' as lib;

.button {
  background: lib.$primary;
  @include lib.button;
  font-size: lib.to-rem(16px);
}`}
            output={[
              '✅ Clean API',
              '// One import for everything'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Selective @forward"
            code={`// Only forward specific members
@forward 'variables' show $primary, $secondary;
@forward 'variables' hide $internal-var;

// Add prefix
@forward 'colors' as color-*;
// $primary becomes $color-primary`}
            output={[
              '✅ Control what\'s exposed',
              '// Hide internal implementation'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Automated Migration"
            description="sass-migrator tool"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install sass-migrator"
            code={`# Install globally
npm install -g sass-migrator

# Or use with npx
npx sass-migrator`}
            output={[
              '✅ Automated migration tool',
              '// Converts @import to @use/@forward'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="Migrate Entire Directory"
            code={`# Migrate all SCSS files
sass-migrator module --migrate-deps src/scss/**/*.scss

# Dry run first (preview changes)
sass-migrator module --dry-run --migrate-deps src/scss/**/*.scss`}
            output={[
              '✅ Automatically converts files',
              '// Updates @import to @use',
              '// Adds namespaces',
              '// Updates variable/mixin references'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="Migrate Single File"
            code={`# Migrate one file
sass-migrator module src/scss/main.scss

# With dependencies
sass-migrator module --migrate-deps src/scss/main.scss`}
            output={[
              '✅ Migrates file and its dependencies'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always run with <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">--dry-run</code> first to preview changes before applying them!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Common Patterns"
            description="Migration examples"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Pattern 1: Simple Variables</h4>
              <CodeSnippetWithOutput
                title="Before"
                code={`@import 'variables';
$custom: $primary;`}
                output={[]}
                language="scss"
                colorTheme="purple"
              />
              <CodeSnippetWithOutput
                title="After"
                code={`@use 'variables' as *;
$custom: $primary;

// Or with namespace
@use 'variables';
$custom: variables.$primary;`}
                output={[]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Pattern 2: Partial Chain</h4>
              <CodeSnippetWithOutput
                title="Before"
                code={`// main.scss
@import 'variables';
@import 'mixins';
@import 'components/button';`}
                output={[]}
                language="scss"
                colorTheme="purple"
              />
              <CodeSnippetWithOutput
                title="After"
                code={`// main.scss
@use 'variables' as *;
@use 'mixins' as mx;
@use 'components/button';`}
                output={[]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Pattern 3: Library Index</h4>
              <CodeSnippetWithOutput
                title="Before"
                code={`// index.scss
@import 'reset';
@import 'variables';
@import 'mixins';
@import 'utilities';`}
                output={[]}
                language="scss"
                colorTheme="purple"
              />
              <CodeSnippetWithOutput
                title="After"
                code={`// index.scss
@forward 'reset';
@forward 'variables';
@forward 'mixins';
@forward 'utilities';`}
                output={[
                  '✅ Use @forward for library APIs'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Migration Checklist"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ 1. Run sass-migrator --dry-run</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Preview changes before applying
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ 2. Commit Your Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easy to revert if needed
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ 3. Run Migration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">sass-migrator module --migrate-deps</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ 4. Test Your Build</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Ensure everything compiles correctly
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ 5. Review Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Check namespaces make sense
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ 6. Update Documentation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Document new import patterns
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use @use</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For consuming modules with namespaces
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Use @forward</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For creating library APIs
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Automate</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use sass-migrator tool
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Test Thoroughly</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Verify build after migration
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
