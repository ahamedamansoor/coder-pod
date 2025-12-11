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
  Settings,
  Rocket,
  FileCode,
  Terminal
} from 'lucide-react';

interface SassViteNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassViteNew({ onOpenWebPlayground }: SassViteNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="Sass/SCSS · Build Tools"
        title="Vite Integration"
        description="Use Sass with Vite for lightning-fast development with built-in SCSS support and instant HMR."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Vite Integration"
            description="Modern build tool with native SCSS support"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Vite</strong> is a next-generation build tool that provides <strong>instant server start</strong> and <strong>lightning-fast HMR</strong>. SCSS support is built-in - just install the preprocessor and start using it!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Fast</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Instant server start, sub-second HMR</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Zero Config</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">SCSS works out of the box</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">ESM</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Native ES modules in dev</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Vite?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Vite is <strong>10-100x faster</strong> than traditional bundlers like Webpack. SCSS is supported natively with minimal configuration!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installation"
            description="Quick setup in minutes"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Create Vite Project"
            code={`# Create new Vite project
npm create vite@latest my-app

# Choose framework (React, Vue, Vanilla, etc.)
# Choose TypeScript or JavaScript

cd my-app
npm install`}
            output={[
              '✅ Vite project created',
              '// SCSS support ready to enable'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Install Sass"
            code={`# Install Sass preprocessor
npm install --save-dev sass

# Or with pnpm
pnpm add -D sass

# Or with yarn
yarn add -D sass`}
            output={[
              '✅ Sass installed',
              '// Vite will automatically detect and use it!'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">That's It!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              No configuration needed! Just import <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">.scss</code> files and Vite handles the rest.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Basic Usage"
            description="Import SCSS files directly"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Import in JavaScript/TypeScript"
            code={`// main.js or main.ts
import './styles/main.scss';

// In React component
import React from 'react';
import './Button.scss';

export function Button({ children }) {
  return <button className="btn">{children}</button>;
}

// In Vue component
<script setup>
import './MyComponent.scss';
</script>`}
            output={[
              '✅ SCSS automatically compiled',
              '✅ CSS injected into page',
              '✅ HMR updates instantly'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Create SCSS File"
            code={`// styles/main.scss
$primary: #3b82f6;
$spacing: 1rem;

.btn {
  background: $primary;
  padding: $spacing;
  border-radius: 0.5rem;
  
  &:hover {
    background: darken($primary, 10%);
  }
}`}
            output={[
              '✅ SCSS features work perfectly',
              '✅ Variables, nesting, functions all supported'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
            <h4 className="text-cyan-400 mb-3">Terminal Output</h4>
            <pre className="text-sm overflow-x-auto"><code>{`VITE v5.0.0  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose

✓ SCSS compiled successfully
✓ Hot Module Replacement enabled`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Vite Configuration"
            description="vite.config.js customization"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Basic Configuration"
            code={`// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Additional data prepended to every SCSS file
        additionalData: \`
          @import "@/styles/variables";
          @import "@/styles/mixins";
        \`,
        
        // Sass options
        api: 'modern-compiler',  // Use modern Sass compiler
      }
    },
    
    // Enable source maps in dev
    devSourcemap: true
  }
});`}
            output={[
              '✅ Global imports configured',
              '✅ Modern compiler enabled',
              '✅ Source maps in dev mode'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Production Source Maps"
            code={`// vite.config.js
export default defineConfig({
  build: {
    sourcemap: true  // Enable source maps in production
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "@/styles/variables";\`
      }
    }
  }
});`}
            output={[
              '✅ Production source maps enabled',
              '// Debug SCSS in production DevTools'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Path Aliases"
            description="Simplify imports with @ aliases"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Configure Aliases"
            code={`// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "@styles/variables";\`
      }
    }
  }
});`}
            output={[
              '✅ Aliases configured',
              '✅ Works in SCSS @import',
              '✅ Works in JavaScript imports'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Using Aliases in SCSS"
            code={`// Before (relative paths)
@import '../../../styles/variables';
@import '../../../styles/mixins';

// After (with aliases)
@use '@styles/variables';
@use '@styles/mixins';

// In JavaScript
import '@styles/main.scss';
import Button from '@components/Button';`}
            output={[
              '✅ Clean imports',
              '✅ No relative path hell'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">TypeScript Support</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Add aliases to <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">tsconfig.json</code> paths for TypeScript autocomplete!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="PostCSS Integration"
            description="Autoprefixer and plugins"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install PostCSS Plugins"
            code={`# Install PostCSS and plugins
npm install --save-dev autoprefixer postcss-preset-env`}
            output={[
              '✅ PostCSS plugins installed'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="postcss.config.js"
            code={`// postcss.config.js
export default {
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }
  }
};`}
            output={[
              '✅ PostCSS configured',
              '✅ Autoprefixer enabled',
              '// Runs automatically after SCSS compilation'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="Vite PostCSS Config (Alternative)"
            code={`// vite.config.js
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('postcss-preset-env')({
          stage: 3
        })
      ]
    }
  }
});`}
            output={[
              '✅ PostCSS in Vite config',
              '// Alternative to postcss.config.js'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Complete Configuration"
            description="Production-ready Vite config"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="vite.config.js (Complete)"
            code={`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  
  css: {
    // Dev source maps
    devSourcemap: true,
    
    // SCSS options
    preprocessorOptions: {
      scss: {
        // Modern compiler (faster!)
        api: 'modern-compiler',
        
        // Global imports
        additionalData: \`
          @import "@styles/variables";
          @import "@styles/mixins";
        \`,
        
        // Sass options
        includePaths: ['node_modules']
      }
    },
    
    // PostCSS
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default'
        })
      ]
    }
  },
  
  build: {
    // Production source maps
    sourcemap: true,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Rollup options
    rollupOptions: {
      output: {
        // Separate CSS files per chunk
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name].[hash].css';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  },
  
  server: {
    port: 3000,
    open: true
  }
});`}
            output={[
              '✅ Complete production config',
              '✅ Modern Sass compiler',
              '✅ Global imports',
              '✅ PostCSS integration',
              '✅ Source maps',
              '✅ CSS code splitting',
              '✅ Optimized output'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="Scripts & Commands"
            description="package.json scripts"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="package.json"
            code={`{
  "name": "my-vite-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "build:staging": "vite build --mode staging",
    "build:prod": "vite build --mode production"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "sass": "^1.69.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  }
}`}
            output={[
              '// npm run dev → Start dev server',
              '// npm run build → Production build',
              '// npm run preview → Preview production build'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Hot Module Replacement"
            description="Instant updates without page reload"
            size="lg"
          />

          <p className="text-sm text-gray-700 dark:text-gray-300">
            Vite's HMR for SCSS is <strong>instant</strong>. Changes reflect immediately without full page reload!
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">1. Edit SCSS File</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Change a color, spacing, or any style
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">2. Vite Compiles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                SCSS compiled to CSS in milliseconds
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">3. Instant Update</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Browser updates without reload - component state preserved!
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
            <h4 className="text-cyan-400 mb-3">Terminal Output</h4>
            <pre className="text-sm overflow-x-auto"><code>{`styles/Button.scss updated
✓ SCSS compiled in 12ms
HMR updated`}</code></pre>
          </div>
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
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Modern Compiler</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Set <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">api: 'modern-compiler'</code> for faster compilation
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Configure Aliases</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use @ aliases for cleaner imports
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">devSourcemap: true</code> for debugging
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use additionalData</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-import variables and mixins globally
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable CSS Code Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">cssCodeSplit: true</code> for optimal loading
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Large additionalData</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only import what's needed globally (variables, mixins)
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Import Components in additionalData</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only utilities, not actual styles
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Zero Config</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Just install Sass and start using SCSS!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                10-100x faster than Webpack
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Instant HMR</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Changes reflect in milliseconds
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Modern Tooling</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ESM, TypeScript, PostCSS built-in
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
