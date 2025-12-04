'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Navigation, FileText, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAriaRolesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAriaRoles({ onOpenWebPlayground }: HtmlAriaRolesProps) {
  
  const landmarkRolesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARIA Landmark Roles</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
    }
    
    .page-container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .page-container {
      background: #1e293b;
    }
    
    [role="banner"] {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      color: white;
      padding: 30px;
      position: relative;
    }
    
    [role="banner"]::before {
      content: "role='banner'";
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    [role="navigation"] {
      background: #f3f4f6;
      padding: 15px 30px;
      border-bottom: 2px solid #8b5cf6;
      position: relative;
    }
    
    :root.dark [role="navigation"] {
      background: #334155;
    }
    
    [role="navigation"]::before {
      content: "role='navigation'";
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ddd6fe;
      color: #5b21b6;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    [role="main"] {
      padding: 40px;
      position: relative;
      min-height: 400px;
    }
    
    :root.dark [role="main"] {
      color: #e2e8f0;
    }
    
    [role="main"]::before {
      content: "role='main'";
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ddd6fe;
      color: #5b21b6;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    [role="complementary"] {
      background: #faf5ff;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #8b5cf6;
      position: relative;
    }
    
    :root.dark [role="complementary"] {
      background: #4c1d95;
    }
    
    [role="complementary"]::before {
      content: "role='complementary'";
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ddd6fe;
      color: #5b21b6;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    [role="contentinfo"] {
      background: #1e293b;
      color: white;
      padding: 30px;
      text-align: center;
      position: relative;
    }
    
    [role="contentinfo"]::before {
      content: "role='contentinfo'";
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
    
    nav a {
      color: #7c3aed;
      text-decoration: none;
      font-weight: 600;
    }
    
    :root.dark nav a {
      color: #c4b5fd;
    }
    
    h1 { font-size: 2rem; margin-bottom: 10px; }
    h2 { color: #7c3aed; margin: 20px 0 15px; }
    :root.dark h2 { color: #c4b5fd; }
    p { line-height: 1.6; margin: 10px 0; color: #4b5563; }
    :root.dark p { color: #cbd5e1; }
  </style>
</head>
<body>
  <div class="page-container">
    <!-- Banner (Header) -->
    <header role="banner">
      <h1>🏗️ ARIA Landmark Roles</h1>
      <p>Helping screen readers navigate your page structure</p>
    </header>
    
    <!-- Navigation -->
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
    <!-- Main Content -->
    <main role="main">
      <h2>Understanding Landmark Roles</h2>
      <p>
        Landmark roles help screen reader users navigate your page by creating a "table of contents"
        they can jump between. Think of them as signposts on your webpage.
      </p>
      
      <p>
        Screen reader users can press a keyboard shortcut to see all landmarks and jump directly
        to any section. This is incredibly helpful on long pages!
      </p>
      
      <!-- Complementary (Sidebar) -->
      <aside role="complementary" aria-label="Related info">
        <h3 style="color: #7c3aed; margin-bottom: 10px;">💡 Quick Tip</h3>
        <p style="margin: 0;">
          Modern HTML5 elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, and &lt;footer&gt;
          have implicit ARIA roles. You only need to add role attributes when using generic
          elements like &lt;div&gt;.
        </p>
      </aside>
      
      <h2>Common Landmark Roles</h2>
      <ul style="list-style: none; line-height: 2;">
        <li>🏠 <strong>banner</strong> - Site header (typically top of page)</li>
        <li>🧭 <strong>navigation</strong> - Navigation menus</li>
        <li>📄 <strong>main</strong> - Primary page content (only one per page)</li>
        <li>📌 <strong>complementary</strong> - Supporting content (sidebars)</li>
        <li>🔍 <strong>search</strong> - Search functionality</li>
        <li>📰 <strong>region</strong> - Important section of page</li>
        <li>📄 <strong>contentinfo</strong> - Page footer with metadata</li>
      </ul>
    </main>
    
    <!-- Footer (Content Info) -->
    <footer role="contentinfo">
      <p>&copy; 2024 CoderPod. Landmarks make navigation accessible!</p>
    </footer>
  </div>
</body>
</html>`;

  const widgetRolesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARIA Widget Roles</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
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
      color: #10b981;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 { color: #34d399; }
    
    .widget-section {
      margin: 30px 0;
      padding: 25px;
      background: #f0fdf4;
      border-radius: 12px;
      border-left: 4px solid #10b981;
    }
    
    :root.dark .widget-section {
      background: #064e3b;
    }
    
    .widget-section h3 {
      color: #065f46;
      margin-bottom: 15px;
    }
    
    :root.dark .widget-section h3 { color: #6ee7b7; }
    
    [role="tablist"] {
      display: flex;
      gap: 5px;
      border-bottom: 2px solid #10b981;
      margin-bottom: 20px;
    }
    
    [role="tab"] {
      padding: 12px 24px;
      background: #f3f4f6;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 8px 8px 0 0;
      transition: all 0.2s;
    }
    
    :root.dark [role="tab"] {
      background: #334155;
      color: #e2e8f0;
    }
    
    [role="tab"][aria-selected="true"] {
      background: #10b981;
      color: white;
    }
    
    [role="tab"]:hover { background: #d1fae5; }
    [role="tab"]:focus { outline: 3px solid #6ee7b7; outline-offset: 2px; }
    
    [role="tabpanel"] {
      padding: 20px;
      background: white;
      border-radius: 8px;
      display: none;
    }
    
    :root.dark [role="tabpanel"] {
      background: #334155;
    }
    
    [role="tabpanel"][hidden="false"] {
      display: block;
    }
    
    [role="alert"] {
      background: #fef2f2;
      border-left: 4px solid #ef4444;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
    }
    
    :root.dark [role="alert"] {
      background: #7f1d1d;
    }
    
    [role="status"] {
      background: #dbeafe;
      border-left: 4px solid #3b82f6;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
    }
    
    :root.dark [role="status"] {
      background: #1e3a8a;
    }
    
    [role="progressbar"] {
      width: 100%;
      height: 30px;
      background: #f3f4f6;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
    }
    
    :root.dark [role="progressbar"] {
      background: #334155;
    }
    
    [role="progressbar"] .fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #059669);
      transition: width 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 ARIA Widget Roles</h1>
    
    <!-- Tabs Widget -->
    <div class="widget-section">
      <h3>role="tab", role="tablist", role="tabpanel"</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Tab interface for organizing content into multiple panels.
      </p>
      
      <div role="tablist" aria-label="Programming Languages">
        <button role="tab" aria-selected="true" aria-controls="html-panel" id="html-tab">
          HTML
        </button>
        <button role="tab" aria-selected="false" aria-controls="css-panel" id="css-tab">
          CSS
        </button>
        <button role="tab" aria-selected="false" aria-controls="js-panel" id="js-tab">
          JavaScript
        </button>
      </div>
      
      <div role="tabpanel" id="html-panel" aria-labelledby="html-tab" hidden="false">
        <h4 style="color: #10b981; margin-bottom: 10px;">HTML</h4>
        <p style="color: #4b5563;">
          HyperText Markup Language - the backbone of web pages. Provides structure and semantics.
        </p>
      </div>
      
      <div role="tabpanel" id="css-panel" aria-labelledby="css-tab" hidden="true">
        <h4 style="color: #10b981; margin-bottom: 10px;">CSS</h4>
        <p style="color: #4b5563;">
          Cascading Style Sheets - makes websites beautiful with colors, layouts, and animations.
        </p>
      </div>
      
      <div role="tabpanel" id="js-panel" aria-labelledby="js-tab" hidden="true">
        <h4 style="color: #10b981; margin-bottom: 10px;">JavaScript</h4>
        <p style="color: #4b5563;">
          Programming language that adds interactivity and dynamic behavior to web pages.
        </p>
      </div>
    </div>
    
    <!-- Alert -->
    <div class="widget-section">
      <h3>role="alert"</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Important message that needs immediate attention (announced automatically).
      </p>
      
      <div role="alert">
        <strong style="color: #991b1b;">⚠️ Error:</strong>
        <span style="color: #7f1d1d;">Please fill in all required fields before submitting.</span>
      </div>
    </div>
    
    <!-- Status -->
    <div class="widget-section">
      <h3>role="status"</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Advisory information for the user (lower priority than alert).
      </p>
      
      <div role="status" aria-live="polite">
        <strong style="color: #1e40af;">ℹ️ Status:</strong>
        <span style="color: #1e3a8a;">Your changes have been saved successfully.</span>
      </div>
    </div>
    
    <!-- Progressbar -->
    <div class="widget-section">
      <h3>role="progressbar"</h3>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Shows completion progress of a task.
      </p>
      
      <div 
        role="progressbar" 
        aria-valuenow="65" 
        aria-valuemin="0" 
        aria-valuemax="100"
        aria-label="Upload progress">
        <div class="fill" style="width: 65%;">65%</div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      <strong>Remember:</strong> These roles need JavaScript to manage states and keyboard interaction!
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="HTML · Accessibility"
        title="What are ARIA Roles?"
        description="Learn about ARIA roles that define element purpose and behavior"
        colorTheme="blue"
      />

      {/* Landmark Roles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Landmark Roles
          </CardTitle>
          <CardDescription>
            Roles that help screen readers navigate page structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={landmarkRolesExample}
            title="ARIA Landmark Roles Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Widget Roles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Widget Roles
          </CardTitle>
          <CardDescription>
            Roles for interactive components like tabs, dialogs, and menus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={widgetRolesExample}
            title="ARIA Widget Roles Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Role Categories */}
      <Card>
        <CardHeader>
          <CardTitle>ARIA Role Categories</CardTitle>
          <CardDescription>
            Understanding different types of ARIA roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🏗️ Landmark Roles</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Define major sections of page for navigation
              </p>
              <ul className="text-sm space-y-1">
                <li>• banner (header)</li>
                <li>• navigation (nav)</li>
                <li>• main (main content)</li>
                <li>• complementary (aside)</li>
                <li>• contentinfo (footer)</li>
                <li>• search, region, form</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🎨 Widget Roles</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Interactive components that need keyboard handling
              </p>
              <ul className="text-sm space-y-1">
                <li>• button, link, checkbox</li>
                <li>• tab, tablist, tabpanel</li>
                <li>• menu, menuitem, menubar</li>
                <li>• dialog, alertdialog</li>
                <li>• slider, progressbar</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📄 Document Structure Roles</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Describe document organization
              </p>
              <ul className="text-sm space-y-1">
                <li>• article, heading</li>
                <li>• list, listitem</li>
                <li>• row, cell, table</li>
                <li>• separator, toolbar</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📢 Live Region Roles</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Announce dynamic content changes
              </p>
              <ul className="text-sm space-y-1">
                <li>• alert (immediate)</li>
                <li>• status (polite)</li>
                <li>• log, timer</li>
                <li>• marquee</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>ARIA Role Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic HTML first</strong> - &lt;nav&gt; instead of role="navigation"</li>
            <li><strong>Only one main per page</strong> - role="main" should be unique</li>
            <li><strong>Label landmarks</strong> - Use aria-label when multiple of same type</li>
            <li><strong>Widget roles need keyboard</strong> - Add keyboard event handlers</li>
            <li><strong>Don't override semantics</strong> - Don't add role="button" to &lt;button&gt;</li>
            <li><strong>Update dynamic roles</strong> - Change with JavaScript when needed</li>
            <li><strong>Test with screen readers</strong> - Verify roles are announced correctly</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common ARIA Role Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Multiple main landmarks</strong> - Only one role="main" per page</li>
            <li><strong>Adding roles to semantic HTML</strong> - &lt;button role="button"&gt; is redundant</li>
            <li><strong>Widget roles without keyboard</strong> - role="button" needs Enter/Space handlers</li>
            <li><strong>Wrong role for element</strong> - Don't use role="heading" on &lt;button&gt;</li>
            <li><strong>Forgetting required children</strong> - tablist needs tab children</li>
            <li><strong>Not labeling multiple landmarks</strong> - Two navs need aria-label</li>
            <li><strong>Using presentation incorrectly</strong> - Don't hide focusable elements</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">HTML5 Elements Have Implicit Roles</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          Modern HTML5 elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;, and &lt;button&gt;
          already have implicit ARIA roles. You only need to add role attributes when using generic elements
          like &lt;div&gt; or &lt;span&gt;, or when creating custom widgets.
        </AlertDescription>
      </Alert>
    </div>
  );
}
