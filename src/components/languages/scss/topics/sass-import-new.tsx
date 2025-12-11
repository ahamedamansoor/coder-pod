'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FileWarning, 
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  XCircle,
  Code2,
  ArrowRight,
  Ban
} from 'lucide-react';

interface SassImportNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassImportNew({ onOpenWebPlayground }: SassImportNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileWarning}
        category="Sass/SCSS · File Organization"
        title="@import (Deprecated)"
        description="Learn about the legacy @import directive, why it's deprecated, and how to migrate to the modern @use and @forward system."
        colorTheme="pink"
      />

      {/* Deprecation Notice */}
      <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
        <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
        <AlertTitle className="text-red-900 dark:text-red-100 text-lg">⚠️ @import is Deprecated!</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200 space-y-2">
          <p className="font-semibold">The Sass team officially deprecated @import and will remove it in a future version.</p>
          <p>Use <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">@use</code> and <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">@forward</code> instead for better performance, namespacing, and module encapsulation!</p>
        </AlertDescription>
      </Alert>

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileWarning className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @import?"
            description="The legacy way to include files"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@import</code> was the original way to include SCSS files in other SCSS files. While it works, it has several <strong>serious problems</strong> that led to its deprecation.
          </p>

          <div className="space-y-4">
            <CodeSnippetWithOutput
              title="Legacy @import Syntax"
              description="How @import was used (deprecated)"
              code={`// Import variables
@import 'variables';

// Import mixins
@import 'mixins';

// Import components
@import 'components/buttons';
@import 'components/cards';

// Use imported variables and mixins
.button {
  background: $primary-color;
  @include border-radius(4px);
}`}
              language="scss"
              colorTheme="red"
            />
          </div>
        </CardContent>
      </Card>

      {/* Problems with @import */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Problems with @import"
            description="Why it's being removed"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">1. Global Scope</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Everything is global. Variables and mixins from imported files can conflict with each other or override existing definitions.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-orange-700 dark:text-orange-300">2. Multiple Imports</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                If file A imports B, and file C imports both A and B, the code in B gets duplicated in the output CSS.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Ban className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">3. No Namespacing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can't tell where a variable or mixin came from. Was $color from variables.scss or theme.scss?
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-orange-700 dark:text-orange-300">4. Private Members</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No way to keep variables or mixins private to a file. Everything imported is accessible everywhere.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">5. Order Matters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Import order affects which values win. Later imports can accidentally override earlier ones.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-orange-700 dark:text-orange-300">6. Performance</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Slower compilation because Sass has to process the same files multiple times if they're imported in multiple places.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Global Scope Problem Example */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Global Scope Problem"
            description="Name conflicts are common"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            With @import, everything is global. This leads to naming conflicts and unexpected behavior.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_theme.scss"
              description="Theme colors"
              code={`$color: #3b82f6;  // Blue theme color
$spacing: 1rem;`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="_components.scss"
              description="Component colors"
              code={`$color: #ef4444;  // Red component color
$padding: $spacing;`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Imports both files"
              code={`@import 'theme';
@import 'components';

// Which $color is this? Red! Theme color was overridden 😱
.button {
  background: $color;  // #ef4444 (red), not blue!
}`}
              output={[
                '⚠️ $color from theme.scss was overridden!',
                '⚠️ No warning, no error - silent bug!'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Silent Conflicts!</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              The last imported value wins. No error, no warning. This makes debugging very difficult in large projects!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @import vs @use Comparison */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="@import vs @use"
            description="Modern solution to old problems"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-red-500">❌ @import (Old)</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 font-mono text-sm border border-red-200 dark:border-red-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">@import 'variables';</div>
                  <div className="text-gray-700 dark:text-gray-300">@import 'mixins';</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-3">// Everything is global</div>
                  <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: $primary;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">@include rounded;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
                
                <div className="mt-4 space-y-2 text-xs text-red-700 dark:text-red-300">
                  <div>❌ Global namespace</div>
                  <div>❌ Name conflicts possible</div>
                  <div>❌ Can import multiple times</div>
                  <div>❌ No private members</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-500">✓ @use (New)</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">@use 'variables';</div>
                  <div className="text-gray-700 dark:text-gray-300">@use 'mixins';</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-3">// Namespaced access</div>
                  <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: variables.$primary;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">@include mixins.rounded;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
                
                <div className="mt-4 space-y-2 text-xs text-green-700 dark:text-green-300">
                  <div>✓ Namespaced</div>
                  <div>✓ No conflicts</div>
                  <div>✓ Imports only once</div>
                  <div>✓ Private members with -</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Migration Guide */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Migration Guide"
            description="How to migrate from @import to @use"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-red-700 dark:text-red-300 flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  Before: @import
                </h4>
                
                <CodeSnippetWithOutput
                  title="Old way"
                  code={`// _variables.scss
$primary: #3b82f6;
$secondary: #8b5cf6;

// main.scss
@import 'variables';

.button {
  background: $primary;
  color: $secondary;
}`}
                  language="scss"
                  colorTheme="red"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  After: @use
                </h4>
                
                <CodeSnippetWithOutput
                  title="New way"
                  code={`// _variables.scss
$primary: #3b82f6;
$secondary: #8b5cf6;

// main.scss
@use 'variables';

.button {
  background: variables.$primary;
  color: variables.$secondary;
}`}
                  language="scss"
                  colorTheme="green"
                />
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Use 'as' for Custom Namespace</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <div className="space-y-2">
                  <div>You can customize the namespace:</div>
                  <code className="block bg-blue-100 dark:bg-blue-900/30 p-2 rounded mt-2">
                    @use 'variables' as vars;<br/>
                    color: vars.$primary;
                  </code>
                  <div className="mt-2">Or remove it entirely with <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">as *</code> (not recommended):</div>
                  <code className="block bg-blue-100 dark:bg-blue-900/30 p-2 rounded mt-2">
                    @use 'variables' as *;<br/>
                    color: $primary;
                  </code>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* When to Still Use @import */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Compatibility Period"
            description="@import still works (for now)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            While @import is deprecated, it will continue to work until Sass 2.0. You can still use it in existing projects, but all new code should use @use and @forward.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Start Using @use
              </h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• All new projects</li>
                <li>• New files in existing projects</li>
                <li>• When refactoring old code</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                @import Still OK (temporarily)
              </h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Large legacy codebases</li>
                <li>• Third-party libraries not yet updated</li>
                <li>• Gradual migration period</li>
              </ul>
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
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">@import is Deprecated</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Will be removed in Sass 2.0
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Global Scope Problems</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Name conflicts and duplication issues
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Use @use Instead</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Modern, namespaced module system
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Better Performance</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @use loads files only once
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <ArrowRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Learn @use!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now that you understand why @import is deprecated, learn about the modern <strong>@use</strong> and <strong>@forward</strong> module system! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
