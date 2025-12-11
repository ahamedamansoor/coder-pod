'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Layers, 
  CheckCircle2,
  Lightbulb,
  Info,
  FileCode,
  Layout,
  Box,
  Palette,
  Settings
} from 'lucide-react';

interface SassSmacssNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassSmacssNew({ onOpenWebPlayground }: SassSmacssNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="Sass/SCSS · Architecture"
        title="SMACSS"
        description="Scalable and Modular Architecture for CSS - Organize styles into 5 categories."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="SMACSS"
            description="Scalable and Modular Architecture for CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>SMACSS</strong> (pronounced "smacks") is a style guide that helps you organize CSS into <strong>5 categories</strong>: Base, Layout, Module, State, and Theme. Created by Jonathan Snook.
          </p>

          <div className="grid md:grid-cols-5 gap-3">
            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">Base</h4>
            </div>

            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Layout className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Layout</h4>
            </div>

            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <Box className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Module</h4>
            </div>

            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <Settings className="w-5 h-5 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-bold text-orange-700 dark:text-orange-300 text-sm">State</h4>
            </div>

            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-2 border-pink-300 dark:border-pink-700">
              <Palette className="w-5 h-5 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-bold text-pink-700 dark:text-pink-300 text-sm">Theme</h4>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 1. Base Rules */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="1. Base Rules"
            description="Element selectors, defaults, resets"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Base rules</strong> are defaults for single element selectors, attribute selectors, pseudo-class selectors. No classes or IDs.
          </p>

          <CodeSnippetWithOutput
            title="base.scss"
            code={`// Base resets and defaults
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

a {
  text-decoration: none;
  color: #3b82f6;
  
  &:hover {
    text-decoration: underline;
  }
}

img {
  max-width: 100%;
  display: block;
}

button {
  font-family: inherit;
  cursor: pointer;
}`}
            output={[
              '* { margin: 0; padding: 0; box-sizing: border-box; }',
              'html { font-size: 16px; scroll-behavior: smooth; }',
              'body { font-family: -apple-system, ...; line-height: 1.6; color: #333; background: #fff; }',
              'h1, h2, h3, h4, h5, h6 { font-weight: 700; line-height: 1.2; margin-bottom: 0.5em; }',
              'a { text-decoration: none; color: #3b82f6; }',
              'a:hover { text-decoration: underline; }',
              'img { max-width: 100%; display: block; }',
              'button { font-family: inherit; cursor: pointer; }'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Base Rules</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use element selectors only. No classes or IDs. These are your foundation styles.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 2. Layout Rules */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="2. Layout Rules"
            description="Major layout sections (prefix: .l- or .layout-)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Layout rules</strong> divide the page into sections. Prefix with <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">.l-</code> or <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">.layout-</code>
          </p>

          <CodeSnippetWithOutput
            title="layout.scss"
            code={`// Layout components (major sections)
.l-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.l-sidebar {
  width: 250px;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 1.5rem;
  position: fixed;
  left: 0;
  top: 60px;
}

.l-main {
  margin-left: 250px;
  padding: 2rem;
  min-height: calc(100vh - 60px);
}

.l-footer {
  background: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.l-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.l-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}`}
            output={[
              '.l-header { position: sticky; top: 0; z-index: 100; background: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 1rem 0; }',
              '.l-sidebar { width: 250px; min-height: 100vh; background: #f5f5f5; padding: 1.5rem; position: fixed; left: 0; top: 60px; }',
              '.l-main { margin-left: 250px; padding: 2rem; min-height: calc(100vh - 60px); }',
              '.l-footer { background: #333; color: white; padding: 2rem 0; text-align: center; }',
              '.l-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }',
              '.l-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem; }'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* 3. Module Rules */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="3. Module Rules"
            description="Reusable components (no prefix)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Modules</strong> are reusable, modular parts. These are your components. Use class names without prefixes.
          </p>

          <CodeSnippetWithOutput
            title="modules.scss"
            code={`// Modules (reusable components)
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &-header {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  &-body {
    color: #666;
    line-height: 1.6;
  }
  
  &-footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &-primary {
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &-secondary {
    background: #6b7280;
    color: white;
    
    &:hover {
      background: #4b5563;
    }
  }
}

.nav {
  display: flex;
  gap: 1.5rem;
  
  &-item {
    color: #666;
    transition: color 0.3s;
    
    &:hover {
      color: #3b82f6;
    }
  }
}`}
            output={[
              '.card { background: white; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }',
              '.card-header { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: #333; }',
              '.card-body { color: #666; line-height: 1.6; }',
              '.card-footer { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee; }',
              '.button { display: inline-block; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; font-weight: 600; text-align: center; cursor: pointer; transition: all 0.3s; }',
              '.button-primary { background: #3b82f6; color: white; }',
              '.button-primary:hover { background: #2563eb; }',
              '...'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      {/* 4. State Rules */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="4. State Rules"
            description="State changes (prefix: .is-)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>State rules</strong> describe how modules or layouts look in a particular state. Prefix with <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">.is-</code>
          </p>

          <CodeSnippetWithOutput
            title="state.scss"
            code={`// State rules (usually toggled via JavaScript)
.is-hidden {
  display: none !important;
}

.is-visible {
  display: block !important;
}

.is-active {
  font-weight: 700;
  color: #3b82f6;
  border-bottom: 2px solid #3b82f6;
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.is-loading {
  position: relative;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid #3b82f6;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.is-expanded {
  max-height: 1000px;
  overflow: visible;
}

.is-collapsed {
  max-height: 0;
  overflow: hidden;
}

.is-error {
  border-color: #ef4444 !important;
  color: #ef4444 !important;
}

.is-success {
  border-color: #10b981 !important;
  color: #10b981 !important;
}`}
            output={[
              '.is-hidden { display: none !important; }',
              '.is-visible { display: block !important; }',
              '.is-active { font-weight: 700; color: #3b82f6; border-bottom: 2px solid #3b82f6; }',
              '.is-disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }',
              '.is-loading { position: relative; pointer-events: none; }',
              '.is-loading::after { content: ""; position: absolute; top: 50%; left: 50%; width: 20px; height: 20px; margin: -10px 0 0 -10px; border: 2px solid #3b82f6; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite; }',
              '@keyframes spin { to { transform: rotate(360deg); } }',
              '...'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">State Rules</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              State rules can override other styles. Using <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">!important</code> is acceptable here.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 5. Theme Rules */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="5. Theme Rules"
            description="Color schemes and themes (prefix: .theme-)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Theme rules</strong> describe how layouts and modules might look with different themes. Optional category.
          </p>

          <CodeSnippetWithOutput
            title="theme.scss"
            code={`// Theme rules
.theme-dark {
  background: #1a1a1a;
  color: #e0e0e0;
  
  .card {
    background: #2a2a2a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .button-primary {
    background: #60a5fa;
    
    &:hover {
      background: #3b82f6;
    }
  }
  
  .l-header {
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
  }
}

.theme-high-contrast {
  background: black;
  color: white;
  
  .card {
    background: #000;
    border: 2px solid white;
  }
  
  .button-primary {
    background: yellow;
    color: black;
    border: 2px solid white;
  }
  
  a {
    color: yellow;
    text-decoration: underline;
  }
}`}
            output={[
              '.theme-dark { background: #1a1a1a; color: #e0e0e0; }',
              '.theme-dark .card { background: #2a2a2a; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); }',
              '.theme-dark .button-primary { background: #60a5fa; }',
              '.theme-dark .button-primary:hover { background: #3b82f6; }',
              '.theme-dark .l-header { background: #2a2a2a; border-bottom: 1px solid #3a3a3a; }',
              '.theme-high-contrast { background: black; color: white; }',
              '.theme-high-contrast .card { background: #000; border: 2px solid white; }',
              '...'
            ]}
            language="scss"
            colorTheme="pink"
          />
        </CardContent>
      </Card>

      {/* SMACSS File Structure */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="SMACSS File Structure"
            description="Organizing your SCSS files"
            size="lg"
          />

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre>{`scss/
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── layout/
│   ├── _header.scss
│   ├── _sidebar.scss
│   ├── _main.scss
│   └── _footer.scss
├── module/
│   ├── _button.scss
│   ├── _card.scss
│   ├── _nav.scss
│   └── _form.scss
├── state/
│   └── _states.scss
├── theme/
│   ├── _dark.scss
│   └── _high-contrast.scss
└── main.scss`}</pre>
          </div>

          <CodeSnippetWithOutput
            title="main.scss"
            code={`// Import in SMACSS order
// 1. Base
@import 'base/reset';
@import 'base/typography';

// 2. Layout
@import 'layout/header';
@import 'layout/sidebar';
@import 'layout/main';
@import 'layout/footer';

// 3. Module
@import 'module/button';
@import 'module/card';
@import 'module/nav';
@import 'module/form';

// 4. State
@import 'state/states';

// 5. Theme
@import 'theme/dark';
@import 'theme/high-contrast';`}
            output={[
              '// All SMACSS categories imported in order',
              '// Compiled CSS output'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="SMACSS Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Categorize All Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Every rule belongs in one of the 5 categories
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Prefixes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">.l-</code> for layout, 
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded ml-1">.is-</code> for state, 
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded ml-1">.theme-</code> for themes
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Minimize Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Keep specificity low. Avoid deep nesting.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Single Responsibility</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each class should do one thing well
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

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">5 Categories</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Base, Layout, Module, State, Theme
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Prefixes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                .l- .is- .theme- for clarity
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Scalable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easy to maintain large codebases
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
