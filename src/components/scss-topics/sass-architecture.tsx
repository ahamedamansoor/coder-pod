'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, FolderTree, Code, Eye, EyeOff, Sparkles, Folder, FileCode, Copy, BookOpen, Package, Layers, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { PageHeader } from './page-header';

export default function SassArchitecture({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('seven-one');
    const [showOutput, setShowOutput] = useState(false);

    const patterns = [
        { name: '7-1 Pattern', icon: FolderTree, color: 'text-blue-600', desc: '7 folders, 1 main file', popular: true },
        { name: 'ITCSS', icon: Layers, color: 'text-green-600', desc: 'Inverted Triangle CSS', popular: true },
        { name: 'SMACSS', icon: Package, color: 'text-purple-600', desc: 'Scalable & Modular', popular: false },
        { name: 'Atomic', icon: FileCode, color: 'text-orange-600', desc: 'Atoms, Molecules, Organisms', popular: false }
    ];

    const examples = {
        'seven-one': {
            title: '7-1 Pattern',
            html: '<div class="app">\n  <button class="btn btn--primary">Click Me</button>\n</div>',
            scss: `// 7-1 PATTERN ARCHITECTURE
// Main file that imports everything
// File: main.scss

// 1. ABSTRACTS - Variables, functions, mixins
@use 'abstracts/variables';
@use 'abstracts/functions';
@use 'abstracts/mixins';

// 2. VENDORS - Third-party styles
@use 'vendors/normalize';

// 3. BASE - Reset, typography, base elements
@use 'base/reset';
@use 'base/typography';

// 4. LAYOUT - Header, footer, grid
@use 'layout/header';
@use 'layout/footer';
@use 'layout/grid';

// 5. COMPONENTS - Buttons, cards, etc.
@use 'components/buttons';
@use 'components/cards';

// 6. PAGES - Page-specific styles
@use 'pages/home';
@use 'pages/about';

// 7. THEMES - Theme variations
@use 'themes/default';
@use 'themes/dark';

// Example component: _buttons.scss
@use '../abstracts/variables' as vars;
@use '../abstracts/mixins' as mix;

.btn {
  padding: vars.$spacing-md;
  border-radius: vars.$border-radius;
  font-weight: 600;
  border: none;
  cursor: pointer;
  
  &--primary {
    background: vars.$primary-color;
    color: white;
  }
}`,
            css: `.btn {
  padding: 1rem;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background: #3b82f6;
  color: white;
}`
        },
        'itcss': {
            title: 'ITCSS Pattern',
            html: '<div class="container">\n  <h1 class="heading">Title</h1>\n</div>',
            scss: `// INVERTED TRIANGLE CSS (ITCSS)
// Organized from generic to specific

// 1. SETTINGS - Variables, config
$color-primary: #3b82f6;
$spacing-unit: 8px;

// 2. TOOLS - Mixins and functions
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

// 3. GENERIC - Reset, normalize, box-sizing
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// 4. ELEMENTS - Bare HTML elements
body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

h1, h2, h3 {
  font-weight: 700;
}

// 5. OBJECTS - Design patterns (OOCSS)
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-unit * 2;
}

// 6. COMPONENTS - UI components
.heading {
  color: $color-primary;
  font-size: 2rem;
  margin-bottom: $spacing-unit * 2;
}

// 7. UTILITIES - Helper classes
.u-text-center {
  text-align: center;
}`,
            css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

h1, h2, h3 {
  font-weight: 700;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.heading {
  color: #3b82f6;
  font-size: 2rem;
  margin-bottom: 16px;
}

.u-text-center {
  text-align: center;
}`
        },
        'modules': {
            title: 'Module Organization',
            html: '<div class="card">\n  <h3>Card Title</h3>\n</div>',
            scss: `// MODULE-BASED ORGANIZATION
// Using @use and @forward for better encapsulation

// File: _config.scss
$primary: #3b82f6 !default;
$secondary: #10b981 !default;
$spacing: 1rem !default;

// File: _theme.scss
@use 'config' as cfg;

$colors: (
  primary: cfg.$primary,
  secondary: cfg.$secondary
);

// File: _mixins.scss
@use 'config';

@mixin card-base {
  padding: config.$spacing * 2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

// File: _index.scss (Public API)
@forward 'config';
@forward 'theme';
@forward 'mixins';

// File: components/_card.scss
@use '../styles' as *;

.card {
  @include card-base;
  background: white;
  
  h3 {
    color: map-get($colors, primary);
    margin-bottom: $spacing;
    font-size: 1.25rem;
  }
}`,
            css: `.card {
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
}

.card h3 {
  color: #3b82f6;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}`
        },
        'naming': {
            title: 'Naming Conventions',
            html: '<div class="c-product-card c-product-card--featured">\n  <div class="c-product-card__image"></div>\n  <h3 class="c-product-card__title">Product</h3>\n</div>',
            scss: `// NAMING CONVENTIONS
// BEM (Block Element Modifier) with namespace prefixes

// NAMESPACES:
// c- = Component
// l- = Layout
// u- = Utility
// is-/has- = State

// Component: Product Card
.c-product-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  
  // Element: Image
  &__image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  // Element: Title
  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0;
  }
  
  // Modifier: Featured
  &--featured {
    border: 2px solid #3b82f6;
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.2);
    
    .c-product-card__title {
      color: #3b82f6;
    }
  }
  
  // State: Loading
  &.is-loading {
    opacity: 0.6;
    pointer-events: none;
  }
}

// Layout: Grid
.l-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

// Utility: Text center
.u-text-center {
  text-align: center;
}`,
            css: `.c-product-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
}

.c-product-card__image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 4px;
  margin-bottom: 1rem;
}

.c-product-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.c-product-card--featured {
  border: 2px solid #3b82f6;
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.2);
}

.c-product-card--featured .c-product-card__title {
  color: #3b82f6;
}

.c-product-card.is-loading {
  opacity: 0.6;
  pointer-events: none;
}

.l-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.u-text-center {
  text-align: center;
}`
        }
    };

    return (
        <div className="w-full space-y-8 min-h-screen pb-16">
            <PageHeader
                icon={FolderTree}
                category="SCSS Architecture & Organization"
                title="Build Scalable Sass Projects"
                description="Master proven architectural patterns and best practices for organizing large-scale Sass codebases"
                colorTheme="violet"
            />

            {/* Popular Architecture Patterns */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-violet-600" />
                    Popular Architecture Patterns
                </h2>
                <p className="text-muted-foreground mb-6">
                    Industry-standard patterns for organizing large-scale Sass projects.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {patterns.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <div key={i} className="relative text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-violet-200 dark:border-violet-800 hover:shadow-lg transition-all duration-300">
                                {p.popular && (
                                    <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">Popular</Badge>
                                )}
                                <Icon className={`h-10 w-10 ${p.color} mx-auto mb-3`} />
                                <h3 className="font-bold text-base mb-1">{p.name}</h3>
                                <p className="text-sm text-muted-foreground">{p.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 7-1 Folder Structure */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FolderTree className="h-6 w-6 text-violet-600" />
                    7-1 Folder Structure
                </h2>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-6 border border-blue-200">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="font-mono text-sm space-y-1">
                                <div className="flex items-center gap-2">
                                    <Folder className="w-4 h-4 text-blue-600" />
                                    <span className="font-semibold">scss/</span>
                                </div>
                                <div className="ml-6 space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-green-600" />
                                        <span>abstracts/</span>
                                        <Badge variant="outline" className="text-xs">Variables, mixins</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-yellow-600" />
                                        <span>vendors/</span>
                                        <Badge variant="outline" className="text-xs">3rd party</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-red-600" />
                                        <span>base/</span>
                                        <Badge variant="outline" className="text-xs">Reset, typography</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-purple-600" />
                                        <span>layout/</span>
                                        <Badge variant="outline" className="text-xs">Header, footer</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-orange-600" />
                                        <span>components/</span>
                                        <Badge variant="outline" className="text-xs">Buttons, cards</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-pink-600" />
                                        <span>pages/</span>
                                        <Badge variant="outline" className="text-xs">Page styles</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Folder className="w-4 h-4 text-indigo-600" />
                                        <span>themes/</span>
                                        <Badge variant="outline" className="text-xs">Theme vars</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileCode className="w-4 h-4 text-blue-600" />
                                        <span className="font-bold">main.scss</span>
                                        <Badge className="bg-blue-600 text-white text-xs">Entry</Badge>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Clear separation</p>
                                        <p className="text-xs text-muted-foreground">Each folder has specific purpose</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Easy to navigate</p>
                                        <p className="text-xs text-muted-foreground">Find files quickly</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Scalable</p>
                                        <p className="text-xs text-muted-foreground">Grows with project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {/* ITCSS Layers */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Layers className="h-6 w-6 text-violet-600" />
                    ITCSS Layers
                </h2>
                    <div className="space-y-2">
                        {[
                            { name: 'Settings', desc: 'Variables, config', specificity: 'Low', color: 'bg-blue-100 dark:bg-blue-900' },
                            { name: 'Tools', desc: 'Mixins, functions', specificity: 'Low', color: 'bg-green-100 dark:bg-green-900' },
                            { name: 'Generic', desc: 'Reset, normalize', specificity: 'Low', color: 'bg-yellow-100 dark:bg-yellow-900' },
                            { name: 'Elements', desc: 'HTML elements', specificity: 'Medium', color: 'bg-orange-100 dark:bg-orange-900' },
                            { name: 'Objects', desc: 'Design patterns', specificity: 'Medium', color: 'bg-red-100 dark:bg-red-900' },
                            { name: 'Components', desc: 'UI components', specificity: 'High', color: 'bg-purple-100 dark:bg-purple-900' },
                            { name: 'Utilities', desc: 'Helpers', specificity: 'High', color: 'bg-pink-100 dark:bg-pink-900' }
                        ].map((layer, i) => (
                            <div key={i} className={`${layer.color} p-3 rounded-lg flex items-center justify-between`}>
                                <div className="flex items-center gap-3">
                                    <Badge variant="outline">{i + 1}</Badge>
                                    <div>
                                        <h4 className="font-semibold text-sm">{layer.name}</h4>
                                        <p className="text-xs text-muted-foreground">{layer.desc}</p>
                                    </div>
                                </div>
                                <Badge>{layer.specificity}</Badge>
                            </div>
                        ))}
                    </div>
            </div>

            {/* Interactive Examples */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Code className="h-8 w-8 text-violet-600" />
                    Interactive Examples
                </h2>
                <div className="flex flex-wrap gap-2">
                    {Object.entries(examples).map(([key, ex]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedExample(key)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                selectedExample === key
                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {ex.title}
                        </button>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800 space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">SCSS</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{examples[selectedExample as keyof typeof examples].scss}</pre>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">CSS Output</h3>
                                <Button variant="ghost" size="sm" onClick={() => setShowOutput(!showOutput)}>
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? examples[selectedExample as keyof typeof examples].css : 'Click eye to reveal'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-violet-600 to-purple-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </div>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-violet-600" />
                    Best Practices
                </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-violet-700 dark:text-violet-300">Organization</h4>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>One component per file</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Use partials (_filename.scss)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Group by feature or type</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Keep files under 200 lines</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Naming</h4>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Use BEM methodology</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Add namespace prefixes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Descriptive variable names</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Consistent file naming</span>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
}
