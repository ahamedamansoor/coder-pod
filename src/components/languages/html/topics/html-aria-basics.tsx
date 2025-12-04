'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MessageSquare, Tag, FileText, CheckCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAriaBasicsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAriaBasics({ onOpenWebPlayground }: HtmlAriaBasicsProps) {
  
  const ariaBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARIA Basics - What is ARIA?</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #f59e0b;
      margin-bottom: 20px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #fbbf24;
    }
    
    .intro {
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
      font-size: 1.1rem;
    }
    
    :root.dark .intro {
      color: #94a3b8;
    }
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .info-box {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
      border-left-color: #fbbf24;
    }
    
    .info-box h3 {
      color: #78350f;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    
    :root.dark .info-box h3 {
      color: #fef3c7;
    }
    
    .info-box p {
      color: #92400e;
      line-height: 1.6;
    }
    
    :root.dark .info-box p {
      color: #fde68a;
    }
    
    .aria-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .category-card {
      background: #f3f4f6;
      padding: 25px;
      border-radius: 12px;
      transition: transform 0.2s;
    }
    
    :root.dark .category-card {
      background: #334155;
    }
    
    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
    }
    
    .category-card h4 {
      color: #f59e0b;
      margin-bottom: 10px;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    :root.dark .category-card h4 {
      color: #fbbf24;
    }
    
    .category-card p {
      color: #4b5563;
      line-height: 1.5;
      font-size: 0.95rem;
    }
    
    :root.dark .category-card p {
      color: #cbd5e1;
    }
    
    .code-example {
      background: #1f2937;
      color: #fbbf24;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      font-family: monospace;
      overflow-x: auto;
      line-height: 1.6;
    }
    
    :root.dark .code-example {
      background: #0f172a;
      color: #fde047;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 What is ARIA?</h1>
    <p class="intro">
      Accessible Rich Internet Applications - Making dynamic content accessible
    </p>
    
    <div class="info-box">
      <h3>💡 ARIA in Simple Terms</h3>
      <p>
        ARIA stands for <strong>Accessible Rich Internet Applications</strong>. It's a set of HTML
        attributes that help make web content more accessible to people using assistive technologies
        like screen readers. Think of ARIA as adding "labels" and "instructions" that help screen
        readers understand complex interfaces.
      </p>
    </div>
    
    <h2 style="color: #f59e0b; margin: 40px 0 20px; font-size: 1.8rem;">
      Three Main Categories of ARIA
    </h2>
    
    <div class="aria-categories">
      <div class="category-card">
        <h4>
          🏷️ Roles
        </h4>
        <p>
          Define what an element is or does. Examples: button, dialog, navigation, alert.
        </p>
        <div class="code-example">
&lt;div role="button"&gt;
  Click Me
&lt;/div&gt;
        </div>
      </div>
      
      <div class="category-card">
        <h4>
          📊 Properties
        </h4>
        <p>
          Describe characteristics of an element. Examples: aria-label, aria-labelledby, aria-describedby.
        </p>
        <div class="code-example">
&lt;button 
  aria-label="Close dialog"&gt;
  ✕
&lt;/button&gt;
        </div>
      </div>
      
      <div class="category-card">
        <h4>
          🔄 States
        </h4>
        <p>
          Indicate current status that can change. Examples: aria-expanded, aria-hidden, aria-pressed.
        </p>
        <div class="code-example">
&lt;button 
  aria-expanded="false"&gt;
  Menu
&lt;/button&gt;
        </div>
      </div>
    </div>
    
    <h2 style="color: #f59e0b; margin: 40px 0 20px; font-size: 1.8rem;">
      When to Use ARIA
    </h2>
    
    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #10b981;">
      <h3 style="color: #065f46; margin-bottom: 15px;">✅ Good Uses of ARIA:</h3>
      <ul style="list-style: none; color: #4b5563; line-height: 1.8;">
        <li>✓ Making custom widgets accessible (dropdown menus, tabs, modals)</li>
        <li>✓ Providing labels for icon-only buttons</li>
        <li>✓ Indicating dynamic state changes (expanded/collapsed)</li>
        <li>✓ Adding descriptions to complex elements</li>
        <li>✓ Creating live regions for dynamic content</li>
      </ul>
    </div>
    
    <div style="background: #fef2f2; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #ef4444;">
      <h3 style="color: #991b1b; margin-bottom: 15px;">❌ ARIA Mistakes:</h3>
      <ul style="list-style: none; color: #4b5563; line-height: 1.8;">
        <li>✗ Using ARIA when semantic HTML would work</li>
        <li>✗ Adding aria-label to non-interactive elements</li>
        <li>✗ Overriding native semantics unnecessarily</li>
        <li>✗ Forgetting to update states with JavaScript</li>
        <li>✗ Using ARIA without testing with screen readers</li>
      </ul>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 40px; line-height: 1.6;">
      <strong style="color: #f59e0b;">Golden Rule:</strong> Use semantic HTML first, 
      ARIA only when necessary!
    </p>
  </div>
</body>
</html>`;

  const ariaLabelExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARIA Labels - Common Attributes</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #3b82f6;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #60a5fa;
    }
    
    .example-section {
      margin: 30px 0;
      padding: 30px;
      background: #f3f4f6;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
    }
    
    :root.dark .example-section {
      background: #334155;
      border-left-color: #60a5fa;
    }
    
    .example-section h3 {
      color: #1e40af;
      margin-bottom: 20px;
      font-size: 1.3rem;
    }
    
    :root.dark .example-section h3 {
      color: #93c5fd;
    }
    
    .demo-button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      margin: 10px 5px;
      transition: all 0.2s;
    }
    
    .demo-button:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }
    
    .demo-button:focus {
      outline: 3px solid #93c5fd;
      outline-offset: 2px;
    }
    
    .icon-button {
      background: #3b82f6;
      color: white;
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .icon-button:hover {
      background: #2563eb;
    }
    
    .code-display {
      background: #1f2937;
      color: #60a5fa;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      font-family: monospace;
      font-size: 0.85rem;
      overflow-x: auto;
    }
    
    :root.dark .code-display {
      background: #0f172a;
      color: #93c5fd;
    }
    
    .explanation {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      color: #4b5563;
      line-height: 1.6;
    }
    
    :root.dark .explanation {
      background: #1e293b;
      color: #cbd5e1;
    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏷️ Common ARIA Labels</h1>
    
    <!-- aria-label Example -->
    <div class="example-section">
      <h3>1. aria-label</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Provides an accessible name for an element. Perfect for icon-only buttons.
      </p>
      
      <button class="icon-button" aria-label="Close dialog">
        ✕
      </button>
      
      <button class="icon-button" aria-label="Search" style="margin-left: 10px;">
        🔍
      </button>
      
      <button class="icon-button" aria-label="Settings" style="margin-left: 10px;">
        ⚙️
      </button>
      
      <div class="code-display">
&lt;button aria-label="Close dialog"&gt;✕&lt;/button&gt;
&lt;button aria-label="Search"&gt;🔍&lt;/button&gt;
&lt;button aria-label="Settings"&gt;⚙️&lt;/button&gt;
      </div>
      
      <div class="explanation">
        <strong>Why it's needed:</strong> Screen readers would only announce the icon (✕, 🔍, ⚙️).
        With aria-label, they announce "Close dialog button", "Search button", etc.
      </div>
    </div>
    
    <!-- aria-labelledby Example -->
    <div class="example-section">
      <h3>2. aria-labelledby</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Labels an element using the text from another element.
      </p>
      
      <div style="background: white; padding: 20px; border-radius: 8px;">
        <h4 id="dialog-title" style="color: #1e40af; margin-bottom: 15px;">
          Delete Account?
        </h4>
        <p id="dialog-desc" style="color: #6b7280; margin-bottom: 15px;">
          This action cannot be undone. All your data will be permanently deleted.
        </p>
        <button 
          class="demo-button" 
          aria-labelledby="dialog-title dialog-desc"
          style="background: #ef4444;">
          Delete
        </button>
      </div>
      
      <div class="code-display">
&lt;h4 id="dialog-title"&gt;Delete Account?&lt;/h4&gt;
&lt;p id="dialog-desc"&gt;This action cannot be undone...&lt;/p&gt;
&lt;button aria-labelledby="dialog-title dialog-desc"&gt;
  Delete
&lt;/button&gt;
      </div>
      
      <div class="explanation">
        <strong>Why it's useful:</strong> Screen reader announces both the title and description
        when the button is focused, providing full context.
      </div>
    </div>
    
    <!-- aria-describedby Example -->
    <div class="example-section">
      <h3>3. aria-describedby</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Provides additional description for an element.
      </p>
      
      <div style="background: white; padding: 20px; border-radius: 8px;">
        <label for="password" style="display: block; color: #1f2937; font-weight: 600; margin-bottom: 8px;">
          Password
        </label>
        <input 
          type="password" 
          id="password"
          aria-describedby="password-help"
          style="width: 100%; padding: 10px; border: 2px solid #d1d5db; border-radius: 6px; font-size: 1rem;">
        <p id="password-help" style="color: #6b7280; font-size: 0.85rem; margin-top: 8px;">
          Must be at least 8 characters with uppercase, lowercase, and numbers.
        </p>
      </div>
      
      <div class="code-display">
&lt;label for="password"&gt;Password&lt;/label&gt;
&lt;input 
  id="password"
  aria-describedby="password-help"&gt;
&lt;p id="password-help"&gt;
  Must be at least 8 characters...
&lt;/p&gt;
      </div>
      
      <div class="explanation">
        <strong>Why it's helpful:</strong> Screen readers announce the helper text when the input
        is focused, giving users important context.
      </div>
    </div>
    
    <!-- aria-hidden Example -->
    <div class="example-section">
      <h3>4. aria-hidden</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Hides decorative elements from screen readers.
      </p>
      
      <button class="demo-button">
        <span aria-hidden="true">⭐</span>
        Favorite
        <span class="sr-only">(currently not favorited)</span>
      </button>
      
      <div class="code-display">
&lt;button&gt;
  &lt;span aria-hidden="true"&gt;⭐&lt;/span&gt;
  Favorite
  &lt;span class="sr-only"&gt;(currently not favorited)&lt;/span&gt;
&lt;/button&gt;
      </div>
      
      <div class="explanation">
        <strong>Why it's smart:</strong> The star emoji is hidden from screen readers (decorative).
        The sr-only text provides additional context only for screen reader users.
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MessageSquare}
        category="HTML · Accessibility"
        title="What is ARIA?"
        description="Learn ARIA (Accessible Rich Internet Applications) attributes for enhanced accessibility"
        colorTheme="blue"
      />

      {/* What is ARIA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Understanding ARIA
          </CardTitle>
          <CardDescription>
            What ARIA is and when to use it
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaBasicsExample}
            title="ARIA Basics Introduction"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* ARIA Labels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Common ARIA Labeling Attributes
          </CardTitle>
          <CardDescription>
            Essential ARIA attributes for providing accessible names and descriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaLabelExample}
            title="ARIA Labeling Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Five Rules of ARIA */}
      <Card>
        <CardHeader>
          <CardTitle>The Five Rules of ARIA</CardTitle>
          <CardDescription>
            W3C guidelines for using ARIA correctly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                1️⃣ Use Semantic HTML First
              </h4>
              <p className="text-sm text-muted-foreground">
                If you can use a native HTML element with the semantics you need, DO. Don't re-purpose
                elements with ARIA.
              </p>
              <div className="mt-3 grid md:grid-cols-2 gap-3">
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded">
                  <code className="text-xs text-red-700 dark:text-red-300">
                    ❌ &lt;div role="button"&gt;Click&lt;/div&gt;
                  </code>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <code className="text-xs text-green-700 dark:text-green-300">
                    ✅ &lt;button&gt;Click&lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                2️⃣ Don't Change Native Semantics
              </h4>
              <p className="text-sm text-muted-foreground">
                Unless you really need to. Don't override native HTML semantics with ARIA roles.
              </p>
              <div className="mt-3 grid md:grid-cols-2 gap-3">
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded">
                  <code className="text-xs text-red-700 dark:text-red-300">
                    ❌ &lt;h1 role="button"&gt;Title&lt;/h1&gt;
                  </code>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <code className="text-xs text-green-700 dark:text-green-300">
                    ✅ &lt;h1&gt;Title&lt;/h1&gt;
                  </code>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                3️⃣ All Interactive ARIA Controls Must Be Keyboard Accessible
              </h4>
              <p className="text-sm text-muted-foreground">
                If you add role="button" to a div, you must also add keyboard handling (Enter, Space keys).
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                4️⃣ Don't Use role="presentation" or aria-hidden on Focusable Elements
              </h4>
              <p className="text-sm text-muted-foreground">
                Never hide focusable elements from screen readers. This creates "phantom" controls
                that keyboard users can focus but screen readers can't announce.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                5️⃣ All Interactive Elements Must Have An Accessible Name
              </h4>
              <p className="text-sm text-muted-foreground">
                Buttons, links, form inputs - all need accessible names via text content, aria-label,
                or aria-labelledby.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>ARIA Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic HTML first</strong> - ARIA is for when HTML isn't enough</li>
            <li><strong>Test with screen readers</strong> - NVDA (Windows), VoiceOver (Mac), TalkBack (Android)</li>
            <li><strong>Keep it simple</strong> - Don't over-use ARIA attributes</li>
            <li><strong>Update dynamic states</strong> - Use JavaScript to update aria-expanded, aria-pressed, etc.</li>
            <li><strong>Provide accessible names</strong> - Every interactive element needs a name</li>
            <li><strong>Use landmarks</strong> - role="navigation", role="main", role="search"</li>
            <li><strong>Hide decorative content</strong> - Use aria-hidden="true" for icons</li>
            <li><strong>Announce dynamic changes</strong> - Use aria-live for live regions</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common ARIA Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Using ARIA when semantic HTML exists</strong> - Use &lt;button&gt; not &lt;div role="button"&gt;</li>
            <li><strong>Adding aria-label to divs/spans</strong> - aria-label only works on interactive elements</li>
            <li><strong>Forgetting keyboard support</strong> - ARIA roles don't add keyboard behavior</li>
            <li><strong>Hiding focusable elements</strong> - Never use aria-hidden on buttons/links</li>
            <li><strong>Not updating states</strong> - aria-expanded must change with JavaScript</li>
            <li><strong>Redundant ARIA</strong> - Don't add role="button" to &lt;button&gt;</li>
            <li><strong>Missing accessible names</strong> - Interactive elements need labels</li>
            <li><strong>Overriding semantics</strong> - Don't change what elements naturally are</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser & Screen Reader Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          ARIA is supported by all modern browsers and screen readers. However, support can vary between combinations.
          Always test with: NVDA + Firefox/Chrome (Windows), VoiceOver + Safari (Mac/iOS), TalkBack + Chrome (Android).
        </AlertDescription>
      </Alert>
    </div>
  );
}
