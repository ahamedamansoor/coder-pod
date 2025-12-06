'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MessageSquare, Slash, Hash, Star, CheckCircle, AlertCircle, Info, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassCommentsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassComments({ onOpenWebPlayground }: SassCommentsProps) {
  
  // Single-line Comments Example - HTML
  const singleLineHtml = `<div class="comment-demo">
  <h2>Single-Line Comments</h2>
  <div class="example-box">
    <p>Single-line comments are removed during compilation and won't appear in the CSS output.</p>
  </div>
</div>`;

  // Single-line Comments Example - SCSS
  const singleLineScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

// Single-line comments start with //
// These comments are REMOVED during compilation
// They won't appear in the final CSS file

.comment-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  
  h2 {
    color: #1e293b;
    margin-bottom: 1.5rem;
    // This is a comment inside a nested selector
    // It's also removed from the output
  }
}

.example-box {
  // Variables can be documented with comments
  $box-color: #dbeafe;  // Light blue background
  $border-color: #3b82f6;  // Primary blue border
  
  background: $box-color;
  padding: 1.5rem;
  border-left: 4px solid $border-color;
  border-radius: 8px;
  
  p {
    color: #1e40af;
    margin: 0;
    line-height: 1.6;
  }
}

// You can use // comments for:
// - Temporary notes
// - TODO items
// - Debugging notes
// - Code that you want to hide from users`;

  // Multi-line Comments Example - HTML
  const multiLineHtml = `<div class="multi-comment-demo">
  <h2>Multi-Line Comments</h2>
  <div class="info-box">
    <p>Multi-line comments are preserved in the CSS output and appear in the compiled file.</p>
  </div>
</div>`;

  // Multi-line Comments Example - SCSS
  const multiLineScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

/*
 * Multi-line comments use /* and */
 * These comments ARE PRESERVED in the CSS output
 * Use them for copyright notices, authorship, or public documentation
 */

/**
 * Component: Multi-Comment Demo
 * Description: Shows how multi-line comments work
 * Author: Your Name
 * Version: 1.0.0
 */
.multi-comment-demo {
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

/* This comment will appear in the compiled CSS */
.info-box {
  background: #dcfce7;
  padding: 1.5rem;
  border-left: 4px solid #10b981;
  border-radius: 8px;
  
  p {
    color: #166534;
    margin: 0;
    line-height: 1.6;
  }
}

/*
 * Use multi-line comments for:
 * - Copyright notices
 * - License information
 * - Public API documentation
 * - Important user-facing notes
 */`;

  // Comparison Example - HTML
  const comparisonHtml = `<div class="comparison-demo">
  <h2>Comments Comparison</h2>
  <div class="grid">
    <div class="card silent">
      <h3>// Silent Comments</h3>
      <p>Removed from output</p>
      <code>// This won't appear in CSS</code>
    </div>
    <div class="card loud">
      <h3>/* Loud Comments */</h3>
      <p>Preserved in output</p>
      <code>/* This will appear in CSS */</code>
    </div>
  </div>
</div>`;

  // Comparison Example - SCSS
  const comparisonScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

.comparison-demo {
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

// This is a silent comment - won't be in CSS
/* This is a loud comment - will be in CSS */

.card {
  padding: 1.5rem;
  border-radius: 8px;
  
  h3 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
  
  code {
    background: #f1f5f9;
    padding: 0.5rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.75rem;
    display: block;
  }
}

// Silent comment example card
.silent {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  
  h3 {
    color: #92400e;
  }
  
  code {
    color: #92400e;
  }
}

/* Loud comment example card */
.loud {
  background: #fce7f3;
  border-left: 4px solid #ec4899;
  
  h3 {
    color: #9f1239;
  }
  
  code {
    color: #9f1239;
  }
}`;

  // Documentation Example - HTML
  const documentationHtml = `<div class="doc-demo">
  <h2>Documentation Comments</h2>
  <div class="component">
    <div class="component-header">
      Button Component
    </div>
    <div class="component-body">
      <button class="btn btn-primary">Primary Button</button>
      <p>Well-documented SCSS makes maintenance easier!</p>
    </div>
  </div>
</div>`;

  // Documentation Example - SCSS
  const documentationScss = `// Basic styling
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f8fafc;
}

/**
 * ==============================================
 * BUTTON COMPONENT
 * ==============================================
 * A reusable button component with multiple variants
 * 
 * Usage:
 * <button class="btn btn-primary">Click me</button>
 * 
 * Available variants:
 * - btn-primary: Primary action button
 * - btn-secondary: Secondary action button
 * - btn-success: Success state button
 * ==============================================
 */

// Color palette for buttons
$btn-primary: #3b82f6;    // Blue
$btn-secondary: #64748b;  // Gray
$btn-success: #10b981;    // Green

// Button dimensions
$btn-padding: 0.75rem 1.5rem;
$btn-radius: 8px;

.doc-demo {
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

.component {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.component-header {
  background: #f8fafc;
  padding: 1rem 1.5rem;
  font-weight: 600;
  color: #1e293b;
  border-bottom: 1px solid #e2e8f0;
}

.component-body {
  padding: 1.5rem;
  
  p {
    color: #64748b;
    margin-top: 1rem;
    margin-bottom: 0;
  }
}

/**
 * Base button styles
 * Applied to all button variants
 */
.btn {
  padding: $btn-padding;
  border-radius: $btn-radius;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  
  // Hover effect for all buttons
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  // Active state
  &:active {
    transform: translateY(0);
  }
}

// Primary button variant
.btn-primary {
  background: $btn-primary;
}

// Secondary button variant
.btn-secondary {
  background: $btn-secondary;
}

// Success button variant
.btn-success {
  background: $btn-success;
}`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MessageSquare}
        category="Sass/SCSS · Fundamentals"
        title="Comments"
        description="Learn about single-line and multi-line comments in SCSS"
        colorTheme="pink"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <MessageSquare className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Two Types of Comments
          </CardTitle>
          <CardDescription>
            Silent comments and loud comments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sass supports two types of comments: <strong className="text-foreground">single-line comments (//) </strong> 
            which are removed during compilation, and <strong className="text-foreground">multi-line comments (/* */)</strong> which are preserved in the output CSS.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <Slash className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h4 className="font-semibold mb-2">// Silent Comments</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Removed from compiled CSS
              </p>
              <code className="text-xs bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded block">
                // This won't appear in output
              </code>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Star className="h-5 w-5 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">/* Loud Comments */</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Preserved in compiled CSS
              </p>
              <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded block">
                /* This will appear in output */
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Single-line Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Slash className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            Single-Line Comments (//)
          </CardTitle>
          <CardDescription>
            Silent comments removed during compilation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={singleLineHtml}
            css={singleLineScss}
            title="Silent Comments Demo"
            description="These comments won't appear in compiled CSS"
            colorTheme="yellow"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
            <Info className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">Best Use Cases</AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Temporary notes and TODO items</li>
                <li>Debugging information</li>
                <li>Internal documentation for developers</li>
                <li>Code you want to hide from end users</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Multi-line Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Star className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Multi-Line Comments (/* */)
          </CardTitle>
          <CardDescription>
            Loud comments preserved in compiled CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={multiLineHtml}
            css={multiLineScss}
            title="Loud Comments Demo"
            description="These comments will appear in compiled CSS"
            colorTheme="pink"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
            <Info className="h-4 w-4 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Best Use Cases</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Copyright and license information</li>
                <li>Author and version details</li>
                <li>Public API documentation</li>
                <li>Important notes for CSS users</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Side-by-Side Comparison
          </CardTitle>
          <CardDescription>
            See both comment types in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={comparisonHtml}
            css={comparisonScss}
            title="Comments Comparison"
            description="Silent vs Loud comments"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">// Silent (SCSS only)</h4>
              <div className="text-sm font-mono text-yellow-700 dark:text-yellow-300 space-y-1">
                <div>// TODO: Refactor this</div>
                <div>// $color: red;</div>
                <div>// Debug: Check margin</div>
              </div>
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">❌ Not in CSS output</p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">/* Loud (CSS compatible) */</h4>
              <div className="text-sm font-mono text-pink-700 dark:text-pink-300 space-y-1">
                <div>/* MIT License */</div>
                <div>/* Author: John Doe */</div>
                <div>/* Version: 1.0.0 */</div>
              </div>
              <p className="text-xs text-pink-600 dark:text-pink-400 mt-2">✅ Appears in CSS output</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documentation Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Documentation Comments
          </CardTitle>
          <CardDescription>
            Professional comment structure for components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={documentationHtml}
            css={documentationScss}
            title="Well-Documented Component"
            description="Use comments to document your components"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Documentation Structure:</h4>
            <div className="text-sm font-mono text-purple-700 dark:text-purple-300 space-y-2">
              <div className="bg-white dark:bg-purple-900/30 p-2 rounded">
                <div className="text-gray-500">/** Component Header */</div>
                <div className="text-gray-500">// Variable definitions</div>
                <div className="text-gray-500">/** Section comments */</div>
                <div className="text-gray-500">// Inline explanations</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Comment Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use // for temporary notes:</strong> Debug info, TODOs, internal docs</li>
            <li><strong>Use /* */ for public info:</strong> Copyright, licenses, API docs</li>
            <li><strong>Comment the "why", not the "what":</strong> Explain reasoning, not obvious code</li>
            <li><strong>Keep comments updated:</strong> Remove outdated comments</li>
            <li><strong>Be concise but clear:</strong> Write helpful, meaningful comments</li>
            <li><strong>Document complex logic:</strong> Help future maintainers understand</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            When to use each comment type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Slash className="h-4 w-4" />
                Use // for:
              </div>
              <ul className="space-y-1 text-muted-foreground">
                <li>✓ Temporary notes</li>
                <li>✓ Commented-out code</li>
                <li>✓ TODOs and FIXMEs</li>
                <li>✓ Developer notes</li>
                <li>✓ Debugging info</li>
              </ul>
            </div>
            <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded border">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Use /* */ for:
              </div>
              <ul className="space-y-1 text-muted-foreground">
                <li>✓ Copyright notices</li>
                <li>✓ License info</li>
                <li>✓ Author/version details</li>
                <li>✓ Public API docs</li>
                <li>✓ Component headers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
