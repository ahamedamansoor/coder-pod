'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { SkipForward, Navigation, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlSkipLinksProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlSkipLinks({ onOpenWebPlayground }: HtmlSkipLinksProps) {
  
  const skipLinkExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skip Links Example</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    /* Skip Link - Hidden by default */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      font-weight: 600;
      border-radius: 0 0 8px 0;
      transition: top 0.3s;
      z-index: 100;
    }
    
    /* Skip Link - Visible on focus */
    .skip-link:focus {
      top: 0;
      outline: 3px solid #fbbf24;
      outline-offset: 2px;
    }
    
    header {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      color: white;
      padding: 20px;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    nav {
      background: #f3f4f6;
      padding: 15px;
      border-bottom: 2px solid #8b5cf6;
    }
    
    :root.dark nav { background: #334155; }
    
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    nav a {
      color: #7c3aed;
      text-decoration: none;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 6px;
      transition: background 0.2s;
    }
    
    :root.dark nav a { color: #c4b5fd; }
    
    nav a:hover, nav a:focus {
      background: #ddd6fe;
      outline: none;
    }
    
    :root.dark nav a:hover,
    :root.dark nav a:focus { background: #5b21b6; }
    
    main {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
      background: white;
      min-height: 60vh;
    }
    
    :root.dark main { background: #1e293b; color: #e2e8f0; }
    
    h1 { color: #8b5cf6; margin-bottom: 20px; font-size: 2rem; }
    :root.dark h1 { color: #a78bfa; }
    
    .demo-notice {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    :root.dark .demo-notice { background: #78350f; }
    
    .demo-notice strong { color: #78350f; }
    :root.dark .demo-notice strong { color: #fef3c7; }
    
    .demo-notice p {
      color: #92400e;
      line-height: 1.6;
      margin-top: 10px;
    }
    
    :root.dark .demo-notice p { color: #fde68a; }
    
    footer {
      background: #1e293b;
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    
    .content-section {
      background: #faf5ff;
      padding: 25px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #8b5cf6;
    }
    
    :root.dark .content-section { background: #4c1d95; }
  </style>
</head>
<body>
  <!-- Skip Link - Press Tab when page loads to see it! -->
  <a href="#main-content" class="skip-link">
    Skip to main content ⏭️
  </a>
  
  <header>
    <h1>🏠 My Website</h1>
    <p>Welcome to our accessibility-friendly site!</p>
  </header>
  
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  
  <main id="main-content" tabindex="-1">
    <h1>Skip Link Demonstration</h1>
    
    <div class="demo-notice">
      <strong>🎯 Try This:</strong>
      <p>
        Reload this page and immediately press the Tab key. You'll see a "Skip to main content" 
        link appear at the top. Press Enter to skip the navigation and jump straight to this content!
      </p>
      <p style="margin-top: 15px;">
        <strong>Why it matters:</strong> Imagine having to tab through 50+ navigation links 
        on every page. Skip links save keyboard and screen reader users tons of time!
      </p>
    </div>
    
    <div class="content-section">
      <h2 style="color: #7c3aed; margin-bottom: 15px;">What Are Skip Links?</h2>
      <p style="color: #4b5563; line-height: 1.6;">
        Skip links are hidden navigation links that become visible when focused with the keyboard.
        They allow users to bypass repetitive content (like navigation menus) and jump straight
        to the main content of the page.
      </p>
    </div>
    
    <div class="content-section">
      <h2 style="color: #7c3aed; margin-bottom: 15px;">When to Use Skip Links?</h2>
      <ul style="list-style: none; line-height: 2; color: #4b5563;">
        <li>✓ Large navigation menus with many links</li>
        <li>✓ Sites with sidebars before main content</li>
        <li>✓ Pages with multiple navigation sections</li>
        <li>✓ Any page where main content isn't first</li>
      </ul>
    </div>
    
    <div class="content-section">
      <h2 style="color: #7c3aed; margin-bottom: 15px;">Implementation Tips</h2>
      <ul style="list-style: none; line-height: 2; color: #4b5563;">
        <li>1. Place skip link as first focusable element</li>
        <li>2. Make it visible on focus (never keep it hidden)</li>
        <li>3. Link to main content area with id</li>
        <li>4. Add tabindex="-1" to target if needed</li>
        <li>5. Test with Tab key to ensure it works</li>
      </ul>
    </div>
    
    <p style="color: #6b7280; margin-top: 40px; padding-top: 30px; border-top: 2px solid #e5e7eb;">
      This is the main content area. Without a skip link, keyboard users would have to 
      tab through the entire navigation menu (6 links) before reaching this content on every page load.
    </p>
  </main>
  
  <footer>
    <p>&copy; 2024 Skip Links Demo. Made with ♿ accessibility in mind.</p>
  </footer>
</body>
</html>`;

  const multipleSkipLinksExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiple Skip Links</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f3f4f6;
    }
    
    :root.dark body { background: #0f172a; }
    
    /* Skip Links Container */
    .skip-links {
      position: absolute;
      top: -100px;
      left: 0;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    .skip-links a {
      background: #10b981;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      font-weight: 600;
      border-radius: 0 8px 8px 0;
      transition: top 0.3s;
      white-space: nowrap;
    }
    
    .skip-links a:focus {
      position: relative;
      top: 100px;
      outline: 3px solid #fbbf24;
      outline-offset: 2px;
    }
    
    header {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    
    .page-wrapper {
      display: grid;
      grid-template-columns: 250px 1fr 250px;
      gap: 20px;
      max-width: 1400px;
      margin: 20px auto;
      padding: 0 20px;
    }
    
    @media (max-width: 968px) {
      .page-wrapper {
        grid-template-columns: 1fr;
      }
    }
    
    aside {
      background: white;
      padding: 25px;
      border-radius: 12px;
      height: fit-content;
      position: sticky;
      top: 20px;
    }
    
    :root.dark aside { background: #1e293b; color: #e2e8f0; }
    
    aside h3 {
      color: #10b981;
      margin-bottom: 15px;
      font-size: 1.2rem;
    }
    
    :root.dark aside h3 { color: #34d399; }
    
    aside ul {
      list-style: none;
      line-height: 2;
    }
    
    aside a {
      color: #059669;
      text-decoration: none;
    }
    
    :root.dark aside a { color: #6ee7b7; }
    
    aside a:hover {
      text-decoration: underline;
    }
    
    main {
      background: white;
      padding: 40px;
      border-radius: 12px;
      min-height: 70vh;
    }
    
    :root.dark main { background: #1e293b; color: #e2e8f0; }
    
    h2 { color: #10b981; margin: 30px 0 15px; }
    :root.dark h2 { color: #34d399; }
    
    p {
      color: #4b5563;
      line-height: 1.6;
      margin: 15px 0;
    }
    
    :root.dark p { color: #cbd5e1; }
    
    .info-box {
      background: #d1fae5;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #10b981;
      margin: 20px 0;
    }
    
    :root.dark .info-box { background: #064e3b; }
    
    .info-box strong {
      color: #065f46;
      display: block;
      margin-bottom: 10px;
    }
    
    :root.dark .info-box strong { color: #6ee7b7; }
  </style>
</head>
<body>
  <!-- Multiple Skip Links -->
  <nav class="skip-links" aria-label="Skip links">
    <a href="#main-content">Skip to main content ⏭️</a>
    <a href="#sidebar-nav">Skip to navigation 🧭</a>
    <a href="#related-links">Skip to related links 🔗</a>
  </nav>
  
  <header>
    <h1>🏢 Complex Page Layout</h1>
    <p>Demonstrating multiple skip links for complex layouts</p>
  </header>
  
  <div class="page-wrapper">
    <!-- Left Sidebar -->
    <aside id="sidebar-nav">
      <h3>📚 Navigation</h3>
      <ul>
        <li><a href="#section1">Introduction</a></li>
        <li><a href="#section2">Getting Started</a></li>
        <li><a href="#section3">Advanced Topics</a></li>
        <li><a href="#section4">Best Practices</a></li>
        <li><a href="#section5">Resources</a></li>
        <li><a href="#section6">FAQ</a></li>
        <li><a href="#section7">Contact</a></li>
      </ul>
    </aside>
    
    <!-- Main Content -->
    <main id="main-content" tabindex="-1">
      <h2>Main Content Area</h2>
      
      <div class="info-box">
        <strong>🎯 Try This:</strong>
        Reload the page and press Tab three times. You'll see three skip links:
        <ol style="margin-top: 10px; margin-left: 20px; color: #065f46; line-height: 1.8;">
          <li>Skip to main content (this area)</li>
          <li>Skip to navigation (left sidebar)</li>
          <li>Skip to related links (right sidebar)</li>
        </ol>
      </div>
      
      <p>
        On complex pages with multiple sections, you can provide multiple skip links
        to let users jump to different areas of the page quickly.
      </p>
      
      <h2 id="section1">Why Multiple Skip Links?</h2>
      <p>
        Some users might want to skip to navigation, others to main content, and some
        to sidebars or footers. Providing options gives users control over their browsing experience.
      </p>
      
      <h2 id="section2">Best Practices</h2>
      <ul style="margin-left: 20px; line-height: 2;">
        <li>Keep skip link text descriptive and clear</li>
        <li>Place all skip links at the very top of the page</li>
        <li>Make them visible on focus (never permanently hidden)</li>
        <li>Ensure they're the first tab stops on the page</li>
        <li>Test that they actually jump to the correct sections</li>
      </ul>
      
      <h2 id="section3">Implementation</h2>
      <p>
        Group skip links in a nav element with aria-label="Skip links" to clearly
        identify their purpose to screen reader users.
      </p>
    </main>
    
    <!-- Right Sidebar -->
    <aside id="related-links">
      <h3>🔗 Related Links</h3>
      <ul>
        <li><a href="#">Accessibility Guide</a></li>
        <li><a href="#">WCAG 2.1 Guidelines</a></li>
        <li><a href="#">Screen Reader Testing</a></li>
        <li><a href="#">Keyboard Navigation</a></li>
        <li><a href="#">ARIA Attributes</a></li>
      </ul>
    </aside>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={SkipForward}
        category="HTML · Accessibility"
        title="What are Skip Links?"
        description="Learn how to help keyboard users bypass repetitive content"
        colorTheme="blue"
      />

      {/* What are Skip Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <SkipForward className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Understanding Skip Links
          </CardTitle>
          <CardDescription>
            Why skip links are essential for keyboard users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Skip links</strong> are hidden navigation links that become visible
            when focused with the keyboard. They allow users to bypass repetitive content (like navigation menus) and
            jump directly to the main content or other important sections of the page.
          </p>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2">💡 Why They Matter</h4>
            <p className="text-sm text-muted-foreground">
              Imagine visiting a website with 50 navigation links. As a keyboard user, you'd have to press Tab 50 times
              on EVERY page just to get to the content. Skip links solve this by letting you jump straight to what matters.
              This is especially helpful for screen reader and keyboard-only users.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Basic Skip Link */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Basic Skip Link Implementation
          </CardTitle>
          <CardDescription>
            Simple skip to main content example
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={skipLinkExample}
            title="Skip Link Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Multiple Skip Links */}
      <Card>
        <CardHeader>
          <CardTitle>Multiple Skip Links</CardTitle>
          <CardDescription>
            Providing multiple navigation options for complex layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={multipleSkipLinksExample}
            title="Multiple Skip Links Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Implementation Guide */}
      <Card>
        <CardHeader>
          <CardTitle>How to Implement Skip Links</CardTitle>
          <CardDescription>
            Step-by-step guide to adding skip links
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">1. Add skip link as first element</h4>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                &lt;a href="#main-content" class="skip-link"&gt;Skip to main content&lt;/a&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">2. Hide it visually by default</h4>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                position: absolute; top: -40px;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">3. Show it on focus</h4>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                .skip-link:focus {"{ top: 0; }"}
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">4. Add ID to target section</h4>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                &lt;main id="main-content"&gt;...&lt;/main&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">5. Make target focusable (optional)</h4>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                &lt;main id="main-content" tabindex="-1"&gt;...&lt;/main&gt;
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                tabindex="-1" ensures focus moves to the target element in all browsers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Skip Links Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Make them first</strong> - Skip links should be the first focusable elements</li>
            <li><strong>Visible on focus</strong> - Must be visible when focused, never permanently hidden</li>
            <li><strong>Descriptive text</strong> - "Skip to main content" not just "Skip"</li>
            <li><strong>High contrast</strong> - Use colors that stand out against the background</li>
            <li><strong>Test them</strong> - Verify they work by pressing Tab when page loads</li>
            <li><strong>Multiple options</strong> - Consider skip links to navigation, search, footer</li>
            <li><strong>Group them</strong> - Use nav with aria-label="Skip links"</li>
            <li><strong>Add tabindex="-1"</strong> - To target for better browser support</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Skip Link Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Permanently hidden</strong> - Never showing skip link, even on focus</li>
            <li><strong>Wrong order</strong> - Skip link not the first focusable element</li>
            <li><strong>Broken links</strong> - href doesn't match any ID on page</li>
            <li><strong>Poor contrast</strong> - Skip link hard to see when visible</li>
            <li><strong>Missing tabindex</strong> - Target element not focusable in some browsers</li>
            <li><strong>Vague text</strong> - "Skip navigation" when it skips more than just nav</li>
            <li><strong>Not testing</strong> - Assuming it works without keyboard testing</li>
            <li><strong>Using display:none</strong> - Hides from screen readers too</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* WCAG Requirements */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">WCAG Requirements</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <p className="mb-2">
            Skip links help meet WCAG 2.1 Success Criterion 2.4.1 - "Bypass Blocks" (Level A).
            This requires a mechanism to bypass blocks of content that are repeated on multiple pages.
          </p>
          <p>
            Skip links are the most common and widely supported way to meet this requirement, though
            ARIA landmarks and headings can also help.
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
