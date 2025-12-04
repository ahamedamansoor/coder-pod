'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { TrendingUp, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlProgressiveEnhancementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlProgressiveEnhancement({ onOpenWebPlayground }: HtmlProgressiveEnhancementProps) {
  
  const progressiveExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progressive Enhancement</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%); }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #8b5cf6; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #a78bfa; }
    
    .layers {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 30px 0;
    }
    
    .layer {
      padding: 25px;
      border-radius: 12px;
      border: 3px solid;
      position: relative;
    }
    
    .layer-1 { background: #fef3c7; border-color: #f59e0b; }
    .layer-2 { background: #dbeafe; border-color: #3b82f6; }
    .layer-3 { background: #dcfce7; border-color: #10b981; }
    :root.dark .layer-1 { background: #78350f; }
    :root.dark .layer-2 { background: #1e3a8a; }
    :root.dark .layer-3 { background: #064e3b; }
    
    .layer h2 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
    
    .layer-1 h2 { color: #78350f; }
    .layer-2 h2 { color: #1e40af; }
    .layer-3 h2 { color: #065f46; }
    :root.dark .layer-1 h2 { color: #fcd34d; }
    :root.dark .layer-2 h2 { color: #93c5fd; }
    :root.dark .layer-3 h2 { color: #6ee7b7; }
    
    .example-code {
      background: #1f2937;
      color: #e5e7eb;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      line-height: 1.6;
      margin: 15px 0;
      overflow-x: auto;
    }
    :root.dark .example-code { background: #0f172a; }
    
    .benefits {
      list-style: none;
      line-height: 2;
      color: #4b5563;
    }
    :root.dark .benefits { color: #cbd5e1; }
    
    .benefits li::before {
      content: "✓ ";
      color: #10b981;
      font-weight: bold;
      margin-right: 8px;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    
    .bad-practice {
      background: #fef2f2;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #ef4444;
    }
    
    .good-practice {
      background: #f0fdf4;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #10b981;
    }
    :root.dark .bad-practice { background: #7f1d1d; border-color: #f87171; }
    :root.dark .good-practice { background: #064e3b; border-color: #34d399; }
    
    .bad-practice h4 { color: #991b1b; }
    .good-practice h4 { color: #065f46; }
    :root.dark .bad-practice h4 { color: #fca5a5; }
    :root.dark .good-practice h4 { color: #6ee7b7; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📈 Progressive Enhancement</h1>
    
    <p style="text-align: center; color: #6b7280; margin-bottom: 30px;">
      Build for everyone, enhance for capable browsers
    </p>
    
    <!-- Three Layers -->
    <div class="layers">
      <div class="layer layer-1">
        <h2>Layer 1: HTML (Core Content)</h2>
        <p style="color: #6b7280; margin-bottom: 15px;">
          Basic semantic HTML - works everywhere, even without CSS or JavaScript
        </p>
        <div class="example-code">
&lt;article&gt;
  &lt;h1&gt;Article Title&lt;/h1&gt;
  &lt;p&gt;Content that works everywhere&lt;/p&gt;
  &lt;a href="/read-more"&gt;Read More&lt;/a&gt;
&lt;/article&gt;
        </div>
        <ul class="benefits">
          <li>Accessible to all devices and browsers</li>
          <li>Works without CSS or JavaScript</li>
          <li>Fast loading, minimal bandwidth</li>
          <li>SEO-friendly, crawlable content</li>
        </ul>
      </div>
      
      <div class="layer layer-2">
        <h2>Layer 2: CSS (Presentation)</h2>
        <p style="color: #6b7280; margin-bottom: 15px;">
          Add styling for visual enhancement - degrades gracefully
        </p>
        <div class="example-code">
article {
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* Modern CSS features with fallbacks */
@supports (display: grid) {
  .layout { display: grid; }
}
        </div>
        <ul class="benefits">
          <li>Beautiful design for modern browsers</li>
          <li>Fallbacks for older browsers</li>
          <li>Responsive and adaptive</li>
          <li>Print styles for offline access</li>
        </ul>
      </div>
      
      <div class="layer layer-3">
        <h2>Layer 3: JavaScript (Behavior)</h2>
        <p style="color: #6b7280; margin-bottom: 15px;">
          Add interactivity - enhances but not required
        </p>
        <div class="example-code">
// Feature detection before use
if ('IntersectionObserver' in window) {
  // Use Intersection Observer
  const observer = new IntersectionObserver(...);
} else {
  // Fallback: show all content
  showAllContent();
}
        </div>
        <ul class="benefits">
          <li>Rich interactions for capable browsers</li>
          <li>Works without JavaScript too</li>
          <li>Feature detection, not browser detection</li>
          <li>Graceful degradation</li>
        </ul>
      </div>
    </div>
    
    <!-- Good vs Bad -->
    <h2 style="color: #8b5cf6; margin-top: 40px; margin-bottom: 20px;">
      Progressive vs Non-Progressive
    </h2>
    
    <div class="comparison">
      <div class="bad-practice">
        <h4>❌ Non-Progressive</h4>
        <div class="example-code" style="font-size: 0.75rem;">
&lt;!-- Requires JavaScript --&gt;
&lt;div onclick="loadContent()"&gt;
  Click to load
&lt;/div&gt;

&lt;script&gt;
  // Nothing works without JS
&lt;/script&gt;
        </div>
        <p style="color: #6b7280; font-size: 0.9rem; margin-top: 10px;">
          Breaks completely if JS fails or is disabled
        </p>
      </div>
      
      <div class="good-practice">
        <h4>✅ Progressive</h4>
        <div class="example-code" style="font-size: 0.75rem;">
&lt;!-- Works with or without JS --&gt;
&lt;a href="/content"&gt;
  Load Content
&lt;/a&gt;

&lt;script&gt;
  // Enhance with AJAX if supported
&lt;/script&gt;
        </div>
        <p style="color: #6b7280; font-size: 0.9rem; margin-top: 10px;">
          Works everywhere, enhanced where possible
        </p>
      </div>
    </div>
    
    <div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border-left: 4px solid #10b981; margin-top: 30px;">
      <h3 style="color: #065f46; margin-bottom: 10px;">💡 Key Principles</h3>
      <ul style="list-style: none; line-height: 2; color: #166534;">
        <li>✓ Start with semantic HTML</li>
        <li>✓ Add CSS for visual enhancement</li>
        <li>✓ Use JavaScript for interactivity</li>
        <li>✓ Each layer enhances the previous one</li>
        <li>✓ Site works without upper layers</li>
        <li>✓ Feature detection over browser detection</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TrendingUp}
        category="HTML · Best Practices"
        title="What is Progressive Enhancement?"
        description="Learn how to build websites that work for everyone"
        colorTheme="blue"
      />

      {/* Progressive Enhancement Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Progressive Enhancement Layers
          </CardTitle>
          <CardDescription>
            Build from basic HTML up to rich interactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={progressiveExample}
            title="Progressive Enhancement"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* The Three Layers */}
      <Card>
        <CardHeader>
          <CardTitle>The Three Layers</CardTitle>
          <CardDescription>
            HTML → CSS → JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2">1. HTML - Structure (Required)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Semantic HTML that works everywhere, even in text browsers
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Content accessible to everyone</li>
                <li>Works without CSS or JavaScript</li>
                <li>Screen reader friendly</li>
                <li>SEO optimized</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2">2. CSS - Presentation (Enhanced)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Visual styling that degrades gracefully
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Beautiful design for modern browsers</li>
                <li>Fallbacks for older browsers</li>
                <li>Responsive layouts</li>
                <li>Print-friendly styles</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">3. JavaScript - Behavior (Enhanced)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Interactive features that enhance the experience
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Rich interactions for capable browsers</li>
                <li>Feature detection before use</li>
                <li>Graceful fallbacks</li>
                <li>Works without JS too</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Progressive Enhancement Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Start with HTML</strong> - Semantic markup that works everywhere</li>
            <li><strong>Add CSS for styling</strong> - Visual enhancement, not required for function</li>
            <li><strong>JavaScript for interactivity</strong> - Enhance, don't require</li>
            <li><strong>Use feature detection</strong> - Check if feature exists before using</li>
            <li><strong>Provide fallbacks</strong> - Alternative functionality when features missing</li>
            <li><strong>Test without JS</strong> - Disable JavaScript to verify core functionality</li>
            <li><strong>Semantic HTML</strong> - Use proper elements (button not div)</li>
            <li><strong>Accessible by default</strong> - Work with keyboard and screen readers</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>JavaScript-only functionality</strong> - Nothing works without JS</li>
            <li><strong>CSS-dependent layout</strong> - Content unreadable without CSS</li>
            <li><strong>No fallbacks</strong> - New features break in older browsers</li>
            <li><strong>Browser detection</strong> - Use feature detection instead</li>
            <li><strong>Div soup</strong> - Using divs instead of semantic HTML</li>
            <li><strong>Click handlers on divs</strong> - Use buttons for clickable elements</li>
            <li><strong>Assuming JS always works</strong> - 2-3% of users have JS disabled/blocked</li>
            <li><strong>No keyboard support</strong> - Requiring mouse for all interactions</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Benefits */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Benefits of Progressive Enhancement</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Accessibility</strong> - Works with screen readers and assistive tech</li>
            <li><strong>Reliability</strong> - Core functionality always works</li>
            <li><strong>Performance</strong> - Fast initial load, enhance later</li>
            <li><strong>SEO</strong> - Content crawlable by search engines</li>
            <li><strong>Compatibility</strong> - Works on old and new browsers</li>
            <li><strong>Resilience</strong> - Graceful degradation when features fail</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
