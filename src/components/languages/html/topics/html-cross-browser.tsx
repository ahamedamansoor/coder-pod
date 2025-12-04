'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Globe, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlCrossBrowserProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlCrossBrowser({ onOpenWebPlayground }: HtmlCrossBrowserProps) {
  
  const crossBrowserExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cross-Browser Compatibility</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #064e3b 0%, #065f46 100%); }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #10b981; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #34d399; }
    
    .browser-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 15px;
      margin: 30px 0;
    }
    
    .browser-card {
      background: #f0fdf4;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      border: 2px solid #10b981;
    }
    :root.dark .browser-card { background: #064e3b; border-color: #34d399; }
    
    .browser-icon {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    
    .browser-card h3 {
      color: #065f46;
      font-size: 1rem;
      margin-bottom: 5px;
    }
    :root.dark .browser-card h3 { color: #6ee7b7; }
    
    .compatibility-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background: white;
      border-radius: 8px;
      overflow: hidden;
    }
    :root.dark .compatibility-table { background: #334155; }
    
    .compatibility-table th {
      background: #10b981;
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: 600;
    }
    
    .compatibility-table td {
      padding: 12px;
      border-bottom: 1px solid #e5e7eb;
    }
    :root.dark .compatibility-table td { border-bottom-color: #475569; }
    
    .supported { color: #10b981; font-weight: bold; }
    .partial { color: #f59e0b; font-weight: bold; }
    .not-supported { color: #ef4444; font-weight: bold; }
    
    .tip-card {
      background: #fef3c7;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #f59e0b;
      margin: 20px 0;
    }
    :root.dark .tip-card { background: #78350f; }
    
    .tip-card h3 {
      color: #78350f;
      margin-bottom: 10px;
    }
    :root.dark .tip-card h3 { color: #fcd34d; }
    
    .tip-card ul {
      list-style: none;
      line-height: 2;
      color: #92400e;
    }
    :root.dark .tip-card ul { color: #fde68a; }
    
    .tip-card li::before {
      content: "✓ ";
      color: #10b981;
      font-weight: bold;
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌐 Cross-Browser Compatibility</h1>
    
    <p style="text-align: center; color: #6b7280; margin-bottom: 30px;">
      Ensuring your HTML works across all modern browsers
    </p>
    
    <!-- Browser Support Grid -->
    <div class="browser-grid">
      <div class="browser-card">
        <div class="browser-icon">🟢</div>
        <h3>Chrome</h3>
        <p style="font-size: 0.8rem; color: #6b7280;">Evergreen</p>
      </div>
      
      <div class="browser-card">
        <div class="browser-icon">🦊</div>
        <h3>Firefox</h3>
        <p style="font-size: 0.8rem; color: #6b7280;">Evergreen</p>
      </div>
      
      <div class="browser-card">
        <div class="browser-icon">🧭</div>
        <h3>Safari</h3>
        <p style="font-size: 0.8rem; color: #6b7280;">Evergreen</p>
      </div>
      
      <div class="browser-card">
        <div class="browser-icon">🌊</div>
        <h3>Edge</h3>
        <p style="font-size: 0.8rem; color: #6b7280;">Chromium</p>
      </div>
    </div>
    
    <!-- Feature Support Table -->
    <h2 style="color: #10b981; margin-top: 40px; margin-bottom: 20px;">
      HTML5 Feature Support
    </h2>
    
    <table class="compatibility-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Chrome</th>
          <th>Firefox</th>
          <th>Safari</th>
          <th>Edge</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;dialog&gt;</code></td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
        </tr>
        <tr>
          <td><code>&lt;details&gt;</code></td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
        </tr>
        <tr>
          <td>Lazy Loading</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
        </tr>
        <tr>
          <td>Input types</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="partial">⚠ Partial</td>
          <td class="supported">✓ Yes</td>
        </tr>
        <tr>
          <td>Web Components</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
          <td class="supported">✓ Yes</td>
        </tr>
      </tbody>
    </table>
    
    <!-- Best Practices -->
    <div class="tip-card">
      <h3>🛠️ Cross-Browser Best Practices</h3>
      <ul>
        <li>Always use DOCTYPE declaration</li>
        <li>Validate HTML with W3C validator</li>
        <li>Test in all major browsers</li>
        <li>Use feature detection, not browser detection</li>
        <li>Provide fallbacks for new features</li>
        <li>Use CSS vendor prefixes when needed</li>
        <li>Check Can I Use (caniuse.com) for support</li>
        <li>Use polyfills for missing features</li>
      </ul>
    </div>
    
    <!-- Testing Tools -->
    <h2 style="color: #10b981; margin-top: 40px; margin-bottom: 20px;">
      Testing Tools
    </h2>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
      <div style="background: #eff6ff; padding: 15px; border-radius: 8px;">
        <h4 style="color: #1e40af; margin-bottom: 8px;">BrowserStack</h4>
        <p style="font-size: 0.85rem; color: #6b7280;">
          Test on real devices and browsers
        </p>
      </div>
      
      <div style="background: #eff6ff; padding: 15px; border-radius: 8px;">
        <h4 style="color: #1e40af; margin-bottom: 8px;">Can I Use</h4>
        <p style="font-size: 0.85rem; color: #6b7280;">
          Check browser feature support
        </p>
      </div>
      
      <div style="background: #eff6ff; padding: 15px; border-radius: 8px;">
        <h4 style="color: #1e40af; margin-bottom: 8px;">Lighthouse</h4>
        <p style="font-size: 0.85rem; color: #6b7280;">
          Chrome DevTools auditing tool
        </p>
      </div>
      
      <div style="background: #eff6ff; padding: 15px; border-radius: 8px;">
        <h4 style="color: #1e40af; margin-bottom: 8px;">Modernizr</h4>
        <p style="font-size: 0.85rem; color: #6b7280;">
          Feature detection library
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Globe}
        category="HTML · Best Practices"
        title="What is Cross-Browser Compatibility?"
        description="Learn how to ensure your HTML works across all browsers"
        colorTheme="blue"
      />

      {/* Cross-Browser Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Cross-Browser Compatibility Guide
          </CardTitle>
          <CardDescription>
            Browser support and testing strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={crossBrowserExample}
            title="Cross-Browser Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Browser Market Share */}
      <Card>
        <CardHeader>
          <CardTitle>Modern Browser Landscape (2024)</CardTitle>
          <CardDescription>
            Focus on these browsers for maximum coverage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Chrome (Chromium-based)</h4>
                  <p className="text-sm text-muted-foreground">~65% market share</p>
                </div>
                <span className="text-2xl">🟢</span>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Safari (WebKit)</h4>
                  <p className="text-sm text-muted-foreground">~20% market share (iOS dominant)</p>
                </div>
                <span className="text-2xl">🧭</span>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Firefox (Gecko)</h4>
                  <p className="text-sm text-muted-foreground">~3-5% market share</p>
                </div>
                <span className="text-2xl">🦊</span>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Edge (Chromium)</h4>
                  <p className="text-sm text-muted-foreground">~5% market share</p>
                </div>
                <span className="text-2xl">🌊</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Cross-Browser Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use DOCTYPE</strong> - Triggers standards mode in all browsers</li>
            <li><strong>Validate HTML</strong> - Use W3C validator to catch errors</li>
            <li><strong>Test regularly</strong> - Test in Chrome, Safari, Firefox, Edge</li>
            <li><strong>Feature detection</strong> - Use Modernizr or native APIs, not browser sniffing</li>
            <li><strong>Progressive enhancement</strong> - Start with basic HTML, enhance with CSS/JS</li>
            <li><strong>Use standard features</strong> - Avoid experimental or deprecated features</li>
            <li><strong>Provide fallbacks</strong> - Alternative content for unsupported features</li>
            <li><strong>Check Can I Use</strong> - Verify feature support before using</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Issues */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Cross-Browser Issues</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>No DOCTYPE</strong> - Triggers quirks mode, inconsistent rendering</li>
            <li><strong>Vendor prefixes missing</strong> - CSS features don't work in all browsers</li>
            <li><strong>Experimental features</strong> - Using features not widely supported</li>
            <li><strong>Input type support</strong> - Safari has partial support for some input types</li>
            <li><strong>Flexbox/Grid bugs</strong> - Minor differences in implementation</li>
            <li><strong>Custom properties</strong> - Older browsers don't support CSS variables</li>
            <li><strong>Browser-specific bugs</strong> - Edge cases in specific browsers</li>
            <li><strong>Font rendering</strong> - Different engines render fonts differently</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing Tools */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Testing Resources</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Can I Use</strong> (caniuse.com) - Check feature browser support</li>
            <li><strong>BrowserStack</strong> - Test on real devices and browsers</li>
            <li><strong>Modernizr</strong> - JavaScript library for feature detection</li>
            <li><strong>Autoprefixer</strong> - Automatically add vendor prefixes</li>
            <li><strong>Lighthouse</strong> - Chrome DevTools audit tool</li>
            <li><strong>MDN Browser Compatibility</strong> - Detailed compatibility tables</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
