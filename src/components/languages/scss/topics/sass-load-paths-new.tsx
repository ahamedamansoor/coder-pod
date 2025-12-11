'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FolderSearch, 
  Folder,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Package,
  Terminal
} from 'lucide-react';

interface SassLoadPathsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassLoadPathsNew({ onOpenWebPlayground }: SassLoadPathsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FolderSearch}
        category="Sass/SCSS · File Organization"
        title="Load Paths"
        description="Learn how to configure load paths for Sass modules. Access files from node_modules, set custom paths, and use package imports with ease."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FolderSearch className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Load Paths?"
            description="Configure where Sass looks for modules"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Load paths</strong> tell Sass where to look for files when you use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use</code> or <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@forward</code>. By default, Sass only looks in the same directory as your file. With load paths, you can access files from <strong>node_modules</strong>, custom directories, and create cleaner import paths!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Without Load Paths</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Long relative paths
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">@use '../../../base/colors';</div>
                <div className="text-gray-700 dark:text-gray-300">@use '../../utils/mixins';</div>
                <div className="text-red-600 dark:text-red-400 text-[10px] mt-1">Messy paths!</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <FolderSearch className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With Load Paths</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Clean, short paths
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@use 'base/colors';</div>
                <div className="text-gray-700 dark:text-gray-300">@use 'utils/mixins';</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Clean!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuring Load Paths */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Configuring Load Paths"
            description="Command line and build tool setup"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Configure load paths using the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">--load-path</code> option or through your build tool.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Sass CLI"
              description="Using --load-path flag"
              code={`# Add single load path
sass --load-path=src/styles input.scss output.css

# Multiple load paths
sass --load-path=src/styles --load-path=src/utils input.scss output.css

# Watch mode with load path
sass --watch --load-path=src/styles input.scss:output.css`}
              language="bash"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="package.json"
              description="Add to npm scripts"
              code={`{
  "scripts": {
    "sass": "sass --load-path=src/styles src/main.scss dist/style.css",
    "sass:watch": "sass --watch --load-path=src/styles src/main.scss dist/style.css"
  }
}`}
              language="json"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Build Tool Configuration */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Build Tool Configuration"
            description="Webpack, Vite, and other bundlers"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Vite (vite.config.js)"
              description="Configure load paths in Vite"
              code={`import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Add load paths
        includePaths: ['src/styles', 'src/utils']
      }
    }
  }
});`}
              language="javascript"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Webpack (webpack.config.js)"
              description="Configure load paths in Webpack"
              code={`module.exports = {
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
                // Add load paths
                includePaths: ['src/styles', 'src/utils']
              }
            }
          }
        ]
      }
    ]
  }
};`}
              language="javascript"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Using Load Paths */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Folder className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Using Load Paths"
            description="Clean imports without relative paths"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Once load paths are configured, you can import files without messy relative paths.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-green-700 dark:text-green-300">Project Structure</h5>
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-xs border border-green-200 dark:border-green-800 space-y-1">
                    <div className="text-gray-700 dark:text-gray-300">src/</div>
                    <div className="text-gray-700 dark:text-gray-300 ml-3">├── styles/</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-6">├── base/</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-9">└── _colors.scss</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-6">└── utils/</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-9">└── _mixins.scss</div>
                    <div className="text-gray-700 dark:text-gray-300 ml-3">└── components/</div>
                    <div className="text-gray-700 dark:text-gray-300 ml-6">└── button.scss</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-green-700 dark:text-green-300">Load Path Config</h5>
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-xs border border-green-200 dark:border-green-800 space-y-1">
                    <div className="text-green-600 dark:text-green-400">// Load path set to:</div>
                    <div className="text-gray-700 dark:text-gray-300">src/styles</div>
                  </div>
                </div>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="src/components/button.scss"
              description="Clean imports using load path"
              code={`// Without load path (messy):
// @use '../styles/base/colors';
// @use '../styles/utils/mixins';

// With load path (clean):
@use 'base/colors';
@use 'utils/mixins';

.button {
  background: colors.$primary;
  @include mixins.rounded;
}`}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Much Cleaner!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Load paths eliminate messy <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">../../../</code> paths and make imports consistent across your project!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* node_modules Integration */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="node_modules Integration"
            description="Access third-party libraries"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Most build tools automatically include <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">node_modules</code> in load paths, letting you import libraries directly.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Import from node_modules"
              description="Using third-party SCSS libraries"
              code={`// Import Bootstrap
@use 'bootstrap/scss/bootstrap';

// Import Normalize
@use 'normalize.css/normalize';

// Import from a scoped package
@use '@company/design-system';

// These work because node_modules is in the load path`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Package imports"
              description="Some packages have special entry points"
              code={`// Material Design
@use '@material/button';
@use '@material/card';

// Bulma
@use 'bulma/bulma';

// Foundation
@use 'foundation-sites/scss/foundation';`}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Package className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Check Documentation</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Different packages may have different import paths. Always check the library's documentation for the correct import statement!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Best Practices"
            description="Tips for using load paths"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Single Root
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Point load path to your styles root directory (e.g., src/styles)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Consistent Structure
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Organize files in logical folders (base/, utils/, components/)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Document in README
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Document your load path configuration for team members
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Avoid Conflicts
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't have files with same name in different load paths
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Clean Imports</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No more ../../../ in your code
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Configure Once</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Set up in build tool or CLI
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">node_modules Access</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Import third-party libraries easily
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Better Organization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clearer project structure
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Index Files!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now learn about <strong>index files</strong> to create directory-level entry points for even better organization! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
