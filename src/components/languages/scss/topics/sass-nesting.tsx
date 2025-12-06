'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, TreePine, CheckCircle, AlertCircle, Hash, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassNestingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassNesting({ onOpenWebPlayground }: SassNestingProps) {
  
  // Basic Nesting Example - HTML
  const basicNestingHtml = `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`;

  // Basic Nesting Example - SCSS
  const basicNestingScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Nesting mirrors HTML structure
nav {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      
      a {
        text-decoration: none;
        color: #3b82f6;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.2s;
        display: inline-block;
        
        &:hover {
          background: #eff6ff;
          color: #2563eb;
        }
      }
    }
  }
}`;

  // Card Nesting Example - HTML
  const cardNestingHtml = `<div class="card">
  <div class="card-header">
    <h2>Card Title</h2>
    <span class="badge">New</span>
  </div>
  <div class="card-body">
    <p>This card demonstrates Sass nesting. The structure in SCSS mirrors the HTML hierarchy.</p>
    <button class="btn">Read More</button>
  </div>
</div>`;

  // Card Nesting Example - SCSS
  const cardNestingScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Card component with nested selectors
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 400px;
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transform: translateY(-4px);
  }
  
  // Nested element selectors
  .card-header {
    background: #f8fafc;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    
    h2 {
      color: #1e293b;
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
    }
    
    .badge {
      display: inline-block;
      background: #3b82f6;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  }
  
  .card-body {
    padding: 1.5rem;
    
    p {
      color: #64748b;
      line-height: 1.6;
      margin: 0 0 1rem 0;
    }
    
    .btn {
      background: #3b82f6;
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
      
      &:hover {
        background: #2563eb;
      }
    }
  }
}`;

  // Nested Properties Example - HTML
  const nestedPropertiesHtml = `<div class="text-box">
  <strong>Nested Properties Demo</strong><br><br>
  This element uses nested properties in SCSS:<br>
  • font: { family, size, weight }<br>
  • border: { style, width, color, radius }
</div>`;

  // Nested Properties Example - SCSS
  const nestedPropertiesScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Nested properties group related CSS properties
.text-box {
  // Font properties grouped together
  font: {
    family: 'Georgia', serif;
    size: 18px;
    weight: 400;
  }
  
  // Border properties grouped together
  border: {
    style: solid;
    width: 2px;
    color: #3b82f6;
    radius: 8px;
  }
  
  padding: 2rem;
  background: white;
  color: #1e293b;
  line-height: 1.6;
}`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Sass/SCSS · Fundamentals"
        title="Nesting"
        description="Learn how to write CSS that mirrors your HTML structure for cleaner, more maintainable stylesheets"
        colorTheme="pink"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <TreePine className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What is Sass Nesting?
          </CardTitle>
          <CardDescription>
            Write CSS that follows your HTML structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Nesting</strong> allows you to write CSS selectors that mirror your HTML hierarchy. 
            Instead of writing separate selectors, you can nest them inside each other, making your code more organized and easier to maintain.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <TreePine className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Mirror HTML</h4>
              <p className="text-sm text-muted-foreground">
                CSS structure matches HTML hierarchy
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <Code className="h-5 w-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Cleaner Code</h4>
              <p className="text-sm text-muted-foreground">
                Reduce repetition and improve readability
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Easy Maintenance</h4>
              <p className="text-sm text-muted-foreground">
                Logical organization for better maintenance
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Nesting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <TreePine className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Basic Nesting Example
          </CardTitle>
          <CardDescription>
            Nest selectors to match HTML structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicNestingHtml}
            css={basicNestingScss}
            title="Navigation with Nested Selectors"
            description="SCSS nesting mirrors the HTML structure"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ SCSS (Nested):</h4>
              <div className="text-sm font-mono text-blue-700 dark:text-blue-300 space-y-1">
                <div>nav {'{'}</div>
                <div>&nbsp;&nbsp;ul {'{'}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;li {'{'}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a {'{'} ... {'}'}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                <div>&nbsp;&nbsp;{'}'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">✅ Mirrors HTML structure</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Compiled CSS:</h4>
              <div className="text-sm font-mono text-gray-700 dark:text-gray-300 space-y-1">
                <div>nav {'{'} ... {'}'}</div>
                <div>nav ul {'{'} ... {'}'}</div>
                <div>nav ul li {'{'} ... {'}'}</div>
                <div>nav ul li a {'{'} ... {'}'}</div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">✅ Standard CSS selectors</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Component Nesting
          </CardTitle>
          <CardDescription>
            Organize component styles with nesting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardNestingHtml}
            css={cardNestingScss}
            title="Card Component with Nesting"
            description="All card styles grouped in one nested structure"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Nesting Benefits</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>All card styles are grouped together</li>
                <li>Clear visual hierarchy in your SCSS</li>
                <li>Easy to find and update related styles</li>
                <li>Reduces selector repetition</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Nested Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Hash className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Nested Properties
          </CardTitle>
          <CardDescription>
            Group related CSS properties together
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={nestedPropertiesHtml}
            css={nestedPropertiesScss}
            title="Nested Properties Demo"
            description="Group font and border properties logically"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Common Property Groups:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Font:</strong>
                <code className="block text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded mt-1">
                  font: {'{ family, size, weight }'}
                </code>
              </div>
              <div>
                <strong>Border:</strong>
                <code className="block text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded mt-1">
                  border: {'{ style, width, color }'}
                </code>
              </div>
              <div>
                <strong>Margin:</strong>
                <code className="block text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded mt-1">
                  margin: {'{ top, right, bottom, left }'}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Nesting Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Keep it shallow:</strong> Limit nesting to 3-4 levels max</li>
            <li><strong>Mirror HTML structure:</strong> Nest selectors as they appear in markup</li>
            <li><strong>Use for organization:</strong> Group related styles together</li>
            <li><strong>Avoid over-nesting:</strong> Too much nesting creates overly specific selectors</li>
            <li><strong>Be consistent:</strong> Follow the same nesting patterns across your project</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Warning */}
      <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
        <AlertCircle className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-yellow-900 dark:text-yellow-100">Avoid Over-Nesting</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200">
          Deep nesting creates overly specific selectors that are hard to override and maintain. 
          Keep your nesting shallow (3-4 levels max) for better CSS specificity management.
        </AlertDescription>
      </Alert>
    </div>
  );
}
