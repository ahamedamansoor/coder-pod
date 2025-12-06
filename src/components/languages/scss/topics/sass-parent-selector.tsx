'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Hash, Target, CheckCircle, AlertCircle, Code, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassParentSelectorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassParentSelector({ onOpenWebPlayground }: SassParentSelectorProps) {
  
  // Pseudo-classes Example - HTML
  const pseudoClassesHtml = `<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <button class="btn">Hover Me!</button>
  <button class="btn" disabled>Disabled</button>
  <a href="#" class="link">Hover Link</a>
</div>`;

  // Pseudo-classes Example - SCSS
  const pseudoClassesScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Using & for pseudo-classes
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #3b82f6;
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  margin-right: 0.5rem;
  
  // & references the parent (.btn)
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
  }
  
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

.link {
  color: #3b82f6;
  text-decoration: none;
  position: relative;
  padding: 0.5rem;
  font-weight: 500;
  display: inline-block;
  
  &:hover {
    color: #2563eb;
  }
  
  // Pseudo-element with &
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}`;

  // BEM Example - HTML
  const bemHtml = `<div class="card">
  <div class="card__header">
    <h2 class="card__title">Standard Card</h2>
    <span class="card__badge">New</span>
  </div>
  <div class="card__content">
    This demonstrates BEM methodology with the parent selector.
  </div>
  <button class="card__button">Learn More</button>
</div>

<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">Featured Card</h2>
    <span class="card__badge card__badge--premium">Premium</span>
  </div>
  <div class="card__content">
    Featured cards have special styling using modifiers.
  </div>
  <button class="card__button card__button--primary">Get Started</button>
</div>`;

  // BEM Example - SCSS
  const bemScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// BEM: Block__Element--Modifier
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 500px;
  transition: all 0.3s;
  margin-bottom: 1.5rem;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transform: translateY(-4px);
  }
  
  // Block__Element pattern
  &__header {
    background: #f8fafc;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__title {
    margin: 0;
    font-size: 1.5rem;
    color: #1e293b;
  }
  
  &__badge {
    padding: 0.25rem 0.75rem;
    background: #3b82f6;
    color: white;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    
    // Nested modifier: &__badge--premium
    &--premium {
      background: linear-gradient(135deg, #f59e0b, #d97706);
    }
  }
  
  &__content {
    padding: 1.5rem;
    color: #64748b;
    line-height: 1.6;
  }
  
  &__button {
    margin: 0 1.5rem 1.5rem;
    padding: 0.75rem 1.5rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
    
    &:hover {
      background: #edf2f7;
    }
    
    // Nested modifier: &__button--primary
    &--primary {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
      
      &:hover {
        background: #2563eb;
      }
    }
  }
  
  // Block--Modifier pattern
  &--featured {
    border-color: #3b82f6;
    border-width: 2px;
    
    // Modify nested element when card is featured
    .card__header {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
  }
}`;

  // Context Styling Example - HTML
  const contextHtml = `<div class="theme-light">
  <div class="component">
    <h3>Light Theme Component</h3>
    <p>This component adapts based on its parent context.</p>
  </div>
</div>

<div class="theme-dark">
  <div class="component">
    <h3>Dark Theme Component</h3>
    <p>The same component with different styling.</p>
  </div>
</div>

<div class="sidebar">
  <div class="component">
    <h3>Sidebar Component</h3>
    <p>Smaller text and padding in sidebar.</p>
  </div>
</div>`;

  // Context Styling Example - SCSS
  const contextScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Context-dependent styling with &
.component {
  padding: 1.5rem;
  background: white;
  color: #1e293b;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
  transition: all 0.3s;
  
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  // Parent context at the END: .theme-dark .component
  .theme-dark & {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
  }
  
  .theme-light & {
    background: #f8fafc;
    color: #334155;
    border-color: #cbd5e1;
  }
  
  // Multiple contexts
  .sidebar & {
    font-size: 0.875rem;
    padding: 1rem;
  }
  
  .main-content & {
    font-size: 1rem;
    padding: 2rem;
  }
}

// This compiles to:
// .theme-dark .component { ... }
// .theme-light .component { ... }
// .sidebar .component { ... }`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Hash}
        category="Sass/SCSS · Fundamentals"
        title="Parent Selector (&)"
        description="Master the powerful ampersand to create dynamic selectors, BEM patterns, and context-aware styles"
        colorTheme="pink"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Hash className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What is the Parent Selector (&)?
          </CardTitle>
          <CardDescription>
            Reference the parent selector dynamically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The <strong className="text-foreground">&</strong> symbol (ampersand) is a special selector that references the parent selector. 
            It gets replaced with the parent selector when compiled, enabling powerful patterns like pseudo-classes, BEM methodology, and context-aware styling.
          </p>
          
          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-pink-700 dark:text-pink-300">&:hover</div>
                <div className="text-xl">→</div>
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">.button:hover</div>
              </div>
              <p className="text-sm text-pink-800 dark:text-pink-200">
                The <code className="bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded">&</code> gets replaced with the parent selector name
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Pseudo-classes</h4>
              <p className="text-sm text-muted-foreground">
                Add :hover, :focus, :active states
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <Layers className="h-5 w-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">BEM Methodology</h4>
              <p className="text-sm text-muted-foreground">
                Create __element and --modifier selectors
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Context Styling</h4>
              <p className="text-sm text-muted-foreground">
                Style based on parent context
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pseudo-classes Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Pseudo-classes & States
          </CardTitle>
          <CardDescription>
            Use & for hover, focus, active, and other states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={pseudoClassesHtml}
            css={pseudoClassesScss}
            title="Interactive States with Parent Selector"
            description="& is replaced with .btn for all pseudo-classes"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ SCSS:</h4>
              <div className="text-sm font-mono text-blue-700 dark:text-blue-300 space-y-1">
                <div>.btn {'{'}</div>
                <div>&nbsp;&nbsp;&:hover {'{'} ... {'}'}</div>
                <div>&nbsp;&nbsp;&:active {'{'} ... {'}'}</div>
                <div>&nbsp;&nbsp;&:focus {'{'} ... {'}'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">✅ Clean and organized</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Compiled CSS:</h4>
              <div className="text-sm font-mono text-gray-700 dark:text-gray-300 space-y-1">
                <div>.btn {'{'} ... {'}'}</div>
                <div>.btn:hover {'{'} ... {'}'}</div>
                <div>.btn:active {'{'} ... {'}'}</div>
                <div>.btn:focus {'{'} ... {'}'}</div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">✅ Standard CSS output</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEM Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            BEM Methodology
          </CardTitle>
          <CardDescription>
            Use & for Block__Element--Modifier pattern
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={bemHtml}
            css={bemScss}
            title="BEM with Parent Selector"
            description="&__element creates .block__element, &--modifier creates .block--modifier"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">BEM Pattern</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><code>&__element</code> creates .card__element</li>
                <li><code>&--modifier</code> creates .card--modifier</li>
                <li><code>&__element--modifier</code> creates .card__element--modifier</li>
                <li>Perfect for component-based architecture</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Context Styling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Context-Dependent Styling
          </CardTitle>
          <CardDescription>
            Style components based on parent context
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={contextHtml}
            css={contextScss}
            title="Context-Aware Components"
            description="& at the end references parent context: .parent &"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Context Pattern:</h4>
            <div className="space-y-2 text-sm font-mono text-purple-700 dark:text-purple-300">
              <div>.component {'{'}</div>
              <div>&nbsp;&nbsp;.theme-dark & {'{'} ... {'}'}  // .theme-dark .component</div>
              <div>&nbsp;&nbsp;.sidebar & {'{'} ... {'}'}     // .sidebar .component</div>
              <div>{'}'}</div>
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-3">
              The & can appear at the end to reference the parent context
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Parent Selector Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use for pseudo-classes:</strong> &:hover, &:focus, &:active</li>
            <li><strong>Perfect for BEM:</strong> &__element, &--modifier</li>
            <li><strong>Context styling:</strong> .parent & for conditional styling</li>
            <li><strong>Keep it readable:</strong> Avoid complex & combinations</li>
            <li><strong>Document complex usage:</strong> Add comments for clarity</li>
            <li><strong>Be consistent:</strong> Follow same patterns across project</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Parent Selector Patterns</CardTitle>
          <CardDescription>
            Quick reference for & usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-blue-600">Pseudo-classes:</div>
              <div>&:hover</div>
              <div>&:focus</div>
              <div>&:active</div>
              <div>&:disabled</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-green-600">BEM Elements:</div>
              <div>&__header</div>
              <div>&__content</div>
              <div>&__footer</div>
              <div>&__button</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-purple-600">BEM Modifiers:</div>
              <div>&--large</div>
              <div>&--small</div>
              <div>&--primary</div>
              <div>&--featured</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="font-semibold mb-2 text-orange-600">Context:</div>
              <div>.parent &</div>
              <div>.theme-dark &</div>
              <div>.sidebar &</div>
              <div>.container &</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
