'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Variable, DollarSign, RefreshCw, CheckCircle, AlertCircle, Info, Sparkles, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassVariablesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassVariables({ onOpenWebPlayground }: SassVariablesProps) {
  
  // Basic Variables Example - HTML
  const basicVariablesHtml = `<div class="demo">
  <h2>Color Buttons</h2>
  <div class="buttons">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
  </div>
  <p class="note">All buttons use variables for consistent theming!</p>
</div>`;

  // Basic Variables Example - SCSS
  const basicVariablesScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Define variables with $
$primary-color: #3b82f6;
$success-color: #10b981;
$danger-color: #ef4444;
$border-radius: 8px;
$padding: 0.75rem 1.5rem;

// Use variables in your styles
.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  
  h2 {
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn {
  padding: $padding;  // Using variable
  border-radius: $border-radius;  // Using variable
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
}

// Different button variations using color variables
.btn-primary {
  background: $primary-color;  // Using variable
}

.btn-success {
  background: $success-color;  // Using variable
}

.btn-danger {
  background: $danger-color;  // Using variable
}

.note {
  background: #eff6ff;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #1e40af;
}`;

  // Variable Types Example - HTML
  const variableTypesHtml = `<div class="types-demo">
  <h3>Variable Types Demo</h3>
  <div class="type-card color-type">
    <strong>Colors:</strong> #3b82f6, rgb(59, 130, 246)
  </div>
  <div class="type-card number-type">
    <strong>Numbers:</strong> 16px, 1.5rem, 100%
  </div>
  <div class="type-card string-type">
    <strong>Strings:</strong> "Arial", sans-serif
  </div>
  <div class="type-card list-type">
    <strong>Lists:</strong> 10px 20px 30px 40px (margins)
  </div>
</div>`;

  // Variable Types Example - SCSS
  const variableTypesScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Different variable types in SCSS
$text-color: #1e293b;           // Color
$font-size: 16px;                // Number with unit
$line-height: 1.6;               // Unitless number
$font-family: 'Georgia', serif;  // String
$box-shadow: 0 2px 8px rgba(0,0,0,0.1);  // List
$enable-rounded: true;           // Boolean
$content: null;                  // Null

.types-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: $box-shadow;  // Using list variable
  max-width: 600px;
  
  h3 {
    color: $text-color;  // Using color variable
    margin-bottom: 1.5rem;
    font-size: $font-size * 1.5;  // Math with variables!
  }
}

.type-card {
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 8px;
  font-size: $font-size;  // Using number variable
  line-height: $line-height;  // Using unitless number
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
}

.color-type {
  background: #dbeafe;
  border-left: 4px solid #3b82f6;
}

.number-type {
  background: #dcfce7;
  border-left: 4px solid #10b981;
}

.string-type {
  background: #fce7f3;
  border-left: 4px solid #ec4899;
}

.list-type {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
}`;

  // Variable Scope Example - HTML
  const scopeHtml = `<div class="scope-demo">
  <div class="global-scope">
    <h3>Global Scope</h3>
    <p>Global variables are defined outside any selector and can be used anywhere.</p>
  </div>
  <div class="local-scope">
    <h3>Local Scope</h3>
    <p>Local variables are defined inside a selector and only accessible within that scope.</p>
  </div>
</div>`;

  // Variable Scope Example - SCSS
  const scopeScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Global variable - accessible everywhere
$global-color: #3b82f6;
$global-padding: 1.5rem;

.scope-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
}

.global-scope {
  // Can use global variable here
  border: 2px solid $global-color;
  padding: $global-padding;
  border-radius: 8px;
  margin-bottom: 1rem;
  
  h3 {
    color: $global-color;  // Global variable works here
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    margin: 0;
  }
}

.local-scope {
  // Local variable - only accessible within this block
  $local-color: #10b981;  // Local to .local-scope
  $local-padding: 1rem;   // Local to .local-scope
  
  border: 2px solid $local-color;
  padding: $local-padding;
  border-radius: 8px;
  
  h3 {
    color: $local-color;   // Local variable works here
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    margin: 0;
  }
}

// $local-color is NOT accessible here - it's scoped to .local-scope
// But $global-color IS accessible everywhere`;

  // Default Values Example - HTML
  const defaultValuesHtml = `<div class="default-demo">
  <h3>Default Values (!default)</h3>
  <div class="card">
    <div class="card-header">
      Custom Theme
    </div>
    <div class="card-body">
      Use <code>!default</code> to set variables that can be overridden by users.
    </div>
  </div>
</div>`;

  // Default Values Example - SCSS
  const defaultValuesScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Default variables - can be overridden before import
$theme-color: #3b82f6 !default;
$card-padding: 1.5rem !default;
$card-radius: 8px !default;

// If user defines $theme-color before importing this file,
// their value will be used instead of the default

.default-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  
  h3 {
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
  
  code {
    background: #f1f5f9;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-family: monospace;
    color: #ec4899;
  }
}

.card {
  border: 1px solid #e2e8f0;
  border-radius: $card-radius;  // Using default variable
  overflow: hidden;
}

.card-header {
  background: $theme-color;  // Using default variable
  color: white;
  padding: $card-padding;  // Using default variable
  font-weight: 600;
}

.card-body {
  padding: $card-padding;  // Using default variable
  color: #64748b;
}`;

  // Variable Interpolation Example - HTML
  const interpolationHtml = `<div class="interpolation-demo">
  <h3>Variable Interpolation #{}</h3>
  <div class="dynamic-left">Left sidebar</div>
  <div class="dynamic-right">Right sidebar</div>
  <p class="info">Variables can be interpolated into selectors, property names, and strings!</p>
</div>`;

  // Variable Interpolation Example - SCSS
  const interpolationScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

$side: left;  // Variable to interpolate
$property: border;  // Variable for property name

.interpolation-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  
  h3 {
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
}

// Interpolate variable into selector
.dynamic-#{$side} {
  // This becomes .dynamic-left
  padding: 1rem;
  background: #dbeafe;
  border-#{$side}: 4px solid #3b82f6;  // border-left
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.dynamic-right {
  padding: 1rem;
  background: #dcfce7;
  border-right: 4px solid #10b981;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.info {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #92400e;
  margin: 0;
}

// Interpolation in strings
$font-path: "/fonts";
@import url("#{$font-path}/custom-font.woff2");`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Variable}
        category="Sass/SCSS · Fundamentals"
        title="Variables"
        description="Store and reuse values with $ variables for maintainable stylesheets"
        colorTheme="pink"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What are Sass Variables?
          </CardTitle>
          <CardDescription>
            Store values and reuse them throughout your stylesheet
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Variables</strong> in Sass let you store values (colors, fonts, sizes, etc.) 
            and reuse them throughout your stylesheet. Variables start with a <code className="bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded">$</code> symbol.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Variable className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Define Once</h4>
              <p className="text-sm text-muted-foreground">
                Set a value in one place
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <RefreshCw className="h-5 w-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Use Everywhere</h4>
              <p className="text-sm text-muted-foreground">
                Reference throughout your code
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Easy Updates</h4>
              <p className="text-sm text-muted-foreground">
                Change once, update everywhere
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Basic Variables
          </CardTitle>
          <CardDescription>
            Define once, use many times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicVariablesHtml}
            css={basicVariablesScss}
            title="Variables in Action"
            description="Define colors once, use them everywhere"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Without Variables:</h4>
              <div className="text-sm font-mono text-red-700 dark:text-red-300 space-y-1">
                <div>.btn-primary {'{'} background: <span className="text-red-600">#3b82f6</span>; {'}'}</div>
                <div>.link {'{'} color: <span className="text-red-600">#3b82f6</span>; {'}'}</div>
                <div>.border {'{'} border: 1px solid <span className="text-red-600">#3b82f6</span>; {'}'}</div>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">Repetitive and hard to update</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ With Variables:</h4>
              <div className="text-sm font-mono text-green-700 dark:text-green-300 space-y-1">
                <div><span className="text-pink-600 dark:text-pink-400">$primary</span>: #3b82f6;</div>
                <div>.btn-primary {'{'} background: <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
                <div>.link {'{'} color: <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
                <div>.border {'{'} border: 1px solid <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">DRY (Don't Repeat Yourself)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Variable Types
          </CardTitle>
          <CardDescription>
            Variables can store different data types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={variableTypesHtml}
            css={variableTypesScss}
            title="Different Variable Types"
            description="Colors, numbers, strings, lists, booleans, and null"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold mb-2">Common Types:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li><strong>Colors:</strong> <code>#3b82f6</code>, <code>rgb(59, 130, 246)</code></li>
                <li><strong>Numbers:</strong> <code>16px</code>, <code>1.5rem</code>, <code>100%</code></li>
                <li><strong>Strings:</strong> <code>"Arial"</code>, <code>sans-serif</code></li>
                <li><strong>Lists:</strong> <code>10px 20px 30px 40px</code></li>
                <li><strong>Booleans:</strong> <code>true</code>, <code>false</code></li>
                <li><strong>Null:</strong> <code>null</code></li>
              </ul>
            </div>
            
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold mb-2">Variable Operations:</h4>
              <ul className="space-y-1 text-muted-foreground font-mono text-xs">
                <li><code>$size * 2</code> → Math operations</li>
                <li><code>$color + #111</code> → Color operations</li>
                <li><code>$font + ", Arial"</code> → String concat</li>
                <li><code>join($list1, $list2)</code> → List operations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Variable className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Variable Scope
          </CardTitle>
          <CardDescription>
            Global vs local variables
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={scopeHtml}
            css={scopeScss}
            title="Understanding Scope"
            description="Global variables work everywhere, local variables only in their scope"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Info className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Scope Rules</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Global:</strong> Defined outside any selector, accessible everywhere</li>
                <li><strong>Local:</strong> Defined inside a selector, only accessible within that block</li>
                <li><strong>Shadowing:</strong> Local variables can shadow global ones</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Default Values */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <RefreshCw className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            Default Values (!default)
          </CardTitle>
          <CardDescription>
            Set variables that can be overridden
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={defaultValuesHtml}
            css={defaultValuesScss}
            title="Default Values Demo"
            description="Use !default to allow users to override your variables"
            colorTheme="orange"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">How !default Works:</h4>
            <div className="text-sm font-mono text-orange-700 dark:text-orange-300 space-y-2">
              <div className="bg-white dark:bg-orange-900/30 p-2 rounded">
                <div className="text-gray-500">// Library code:</div>
                <div>$theme-color: #3b82f6 <span className="text-pink-600">!default</span>;</div>
                <div className="text-gray-500 mt-1">// If $theme-color is already defined, use that</div>
                <div className="text-gray-500">// Otherwise, use #3b82f6</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Interpolation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Variable Interpolation #{'{}'}
          </CardTitle>
          <CardDescription>
            Use variables in selectors and property names
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interpolationHtml}
            css={interpolationScss}
            title="Interpolation Examples"
            description="Use #{$variable} to interpolate variables anywhere"
            colorTheme="pink"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">Interpolation Uses:</h4>
            <ul className="text-sm text-pink-800 dark:text-pink-200 space-y-2">
              <li><strong>Selectors:</strong> <code className="bg-white dark:bg-pink-900 px-2 py-1 rounded">.dynamic-#{'{'} $side {'}'}</code></li>
              <li><strong>Property names:</strong> <code className="bg-white dark:bg-pink-900 px-2 py-1 rounded">border-#{'{'} $side {'}'}: 1px solid</code></li>
              <li><strong>Strings:</strong> <code className="bg-white dark:bg-pink-900 px-2 py-1 rounded">url("#{'{'} $path {'}'}/image.png")</code></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Variable Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use descriptive names:</strong> <code>$primary-color</code> instead of <code>$blue</code></li>
            <li><strong>Group related variables:</strong> Keep colors together, sizes together</li>
            <li><strong>Use !default for libraries:</strong> Allow users to customize</li>
            <li><strong>Avoid deep nesting:</strong> Keep variables at global or module level</li>
            <li><strong>Document your variables:</strong> Add comments explaining their purpose</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Variable Patterns</CardTitle>
          <CardDescription>
            Typical ways to organize variables
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-blue-600">Colors:</div>
              <div>$primary: #3b82f6;</div>
              <div>$secondary: #64748b;</div>
              <div>$success: #10b981;</div>
              <div>$danger: #ef4444;</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-green-600">Spacing:</div>
              <div>$spacing-sm: 0.5rem;</div>
              <div>$spacing-md: 1rem;</div>
              <div>$spacing-lg: 1.5rem;</div>
              <div>$spacing-xl: 2rem;</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-purple-600">Typography:</div>
              <div>$font-body: 'Arial', sans-serif;</div>
              <div>$font-heading: 'Georgia', serif;</div>
              <div>$font-mono: 'Courier', monospace;</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-orange-600">Breakpoints:</div>
              <div>$screen-sm: 640px;</div>
              <div>$screen-md: 768px;</div>
              <div>$screen-lg: 1024px;</div>
              <div>$screen-xl: 1280px;</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
