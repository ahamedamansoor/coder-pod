'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared';
import { FrontendCodePreview } from '@/components/shared';
import { Shield, Eye, EyeOff, Sparkles, CheckCircle, AlertCircle, Info, Lock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function HtmlShadowDom() {
  const basicShadowDOMExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shadow DOM Basics</title>
  <style>
    /* Global styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #667eea;
      text-align: center;
      margin-bottom: 30px;
    }
    
    /* These global styles will affect regular DOM */
    .warning {
      color: red !important;
      font-size: 24px !important;
      border: 3px solid red !important;
      padding: 20px !important;
    }
    
    .demo-section {
      margin: 30px 0;
      padding: 20px;
      background: #f8fafc;
      border-radius: 12px;
    }
    
    .demo-section h3 {
      margin-bottom: 16px;
      color: #334155;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛡️ Shadow DOM Protection</h1>
    
    <div class="demo-section">
      <h3>1️⃣ Regular DOM (No Protection)</h3>
      <div class="warning">
        This div gets affected by global .warning styles!
      </div>
    </div>
    
    <div class="demo-section">
      <h3>2️⃣ Shadow DOM (Protected)</h3>
      <div id="shadow-host"></div>
    </div>
    
    <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; border-left: 4px solid #f59e0b;">
      <strong style="color: #92400e; display: block; margin-bottom: 8px;">💡 Notice the Difference:</strong>
      <p style="color: #78350f; font-size: 14px; line-height: 1.6;">
        The first div gets affected by global .warning styles, but the Shadow DOM version is completely isolated!
      </p>
    </div>
  </div>

  <script>
    // Create Shadow DOM
    const host = document.getElementById('shadow-host');
    const shadow = host.attachShadow({ mode: 'open' });
    
    // Shadow DOM content with its own styles
    shadow.innerHTML = \`
      <style>
        .warning {
          color: #10b981;
          font-size: 16px;
          border: 2px solid #10b981;
          padding: 16px;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-radius: 8px;
        }
      </style>
      
      <div class="warning">
        ✅ This div has the SAME "warning" class but different styles!
        Shadow DOM keeps it isolated from global styles.
      </div>
    \`;
  </script>
</body>
</html>`;

  const shadowWithSlotExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shadow DOM with Slots</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎰 Slots: Content Projection</h1>
    
    <!-- Custom element with slotted content -->
    <user-card>
      <span slot="name">Sarah Johnson</span>
      <span slot="role">Senior Developer</span>
      <p slot="bio">
        Passionate about building scalable web applications.
        Love working with modern JavaScript and Web Components!
      </p>
      <img slot="avatar" src="https://i.pravatar.cc/150?img=5" alt="Sarah">
    </user-card>
    
    <user-card>
      <span slot="name">Michael Chen</span>
      <span slot="role">UI/UX Designer</span>
      <p slot="bio">
        Creating beautiful and intuitive user experiences.
        Advocate for accessible design and user-centered thinking.
      </p>
      <img slot="avatar" src="https://i.pravatar.cc/150?img=12" alt="Michael">
    </user-card>
  </div>

  <script>
    class UserCard extends HTMLElement {
      connectedCallback() {
        // Create Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Shadow DOM with slots for content projection
        shadow.innerHTML = \`
          <style>
            :host {
              display: block;
              margin: 24px auto;
              max-width: 700px;
            }
            
            .card {
              background: white;
              border-radius: 16px;
              padding: 30px;
              box-shadow: 0 8px 32px rgba(0,0,0,0.2);
              display: grid;
              grid-template-columns: 120px 1fr;
              gap: 24px;
              align-items: start;
            }
            
            .avatar-container {
              text-align: center;
            }
            
            ::slotted(img[slot="avatar"]) {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              object-fit: cover;
              border: 4px solid #10b981;
              box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
            }
            
            .content {
              min-width: 0;
            }
            
            .header {
              margin-bottom: 16px;
            }
            
            ::slotted([slot="name"]) {
              display: block;
              font-size: 1.75rem;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 4px;
            }
            
            ::slotted([slot="role"]) {
              display: inline-block;
              padding: 6px 12px;
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
              color: white;
              border-radius: 20px;
              font-size: 0.875rem;
              font-weight: 600;
            }
            
            .bio {
              margin-top: 16px;
              padding-top: 16px;
              border-top: 2px solid #f3f4f6;
            }
            
            ::slotted([slot="bio"]) {
              color: #6b7280;
              line-height: 1.6;
              margin: 0;
            }
          </style>
          
          <div class="card">
            <div class="avatar-container">
              <slot name="avatar"></slot>
            </div>
            <div class="content">
              <div class="header">
                <slot name="name"></slot>
                <slot name="role"></slot>
              </div>
              <div class="bio">
                <slot name="bio"></slot>
              </div>
            </div>
          </div>
        \`;
      }
    }
    
    customElements.define('user-card', UserCard);
  </script>
</body>
</html>`;

  const modeComparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open vs Closed Shadow DOM</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      margin-bottom: 30px;
    }
    
    .demo-card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .demo-card h2 {
      margin-bottom: 20px;
      font-size: 1.5rem;
    }
    
    .open-mode { border-top: 4px solid #10b981; }
    .closed-mode { border-top: 4px solid #ef4444; }
    
    .open-mode h2 { color: #10b981; }
    .closed-mode h2 { color: #ef4444; }
    
    button {
      width: 100%;
      padding: 12px;
      margin-top: 16px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    .open-btn {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
    }
    
    .closed-btn {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
    }
    
    .result {
      margin-top: 16px;
      padding: 16px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      background: #f9fafb;
      color: #1f2937;
      min-height: 60px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔓 vs 🔒 Shadow DOM Modes</h1>
    
    <div class="grid">
      <!-- Open Mode -->
      <div class="demo-card open-mode">
        <h2>🔓 mode: 'open'</h2>
        <p style="color: #6b7280; margin-bottom: 16px;">
          Shadow root is accessible via JavaScript
        </p>
        
        <div id="open-host"></div>
        
        <button class="open-btn" onclick="accessOpen()">
          Try to Access Shadow Root
        </button>
        
        <div id="open-result" class="result"></div>
      </div>
      
      <!-- Closed Mode -->
      <div class="demo-card closed-mode">
        <h2>🔒 mode: 'closed'</h2>
        <p style="color: #6b7280; margin-bottom: 16px;">
          Shadow root is NOT accessible
        </p>
        
        <div id="closed-host"></div>
        
        <button class="closed-btn" onclick="accessClosed()">
          Try to Access Shadow Root
        </button>
        
        <div id="closed-result" class="result"></div>
      </div>
    </div>
    
    <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
      <h2 style="color: #667eea; margin-bottom: 16px;">📚 Key Differences</h2>
      <div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
        <div style="padding: 16px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
          <strong style="color: #065f46; display: block; margin-bottom: 8px;">Open Mode</strong>
          <ul style="color: #047857; font-size: 14px; line-height: 1.8; padding-left: 20px;">
            <li>shadowRoot is accessible</li>
            <li>Can query shadow DOM from outside</li>
            <li>Useful for debugging</li>
            <li>More flexible</li>
          </ul>
        </div>
        <div style="padding: 16px; background: #fef2f2; border-radius: 8px; border-left: 4px solid #ef4444;">
          <strong style="color: #991b1b; display: block; margin-bottom: 8px;">Closed Mode</strong>
          <ul style="color: #b91c1c; font-size: 14px; line-height: 1.8; padding-left: 20px;">
            <li>shadowRoot returns null</li>
            <li>Cannot access from outside</li>
            <li>Better encapsulation</li>
            <li>More secure</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Create OPEN shadow DOM
    const openHost = document.getElementById('open-host');
    const openShadow = openHost.attachShadow({ mode: 'open' });
    openShadow.innerHTML = \`
      <div style="padding: 16px; background: #d1fae5; border-radius: 8px; color: #065f46;">
        ✅ Open Shadow DOM Content
      </div>
    \`;
    
    // Create CLOSED shadow DOM
    const closedHost = document.getElementById('closed-host');
    const closedShadow = closedHost.attachShadow({ mode: 'closed' });
    closedShadow.innerHTML = \`
      <div style="padding: 16px; background: #fee2e2; border-radius: 8px; color: #991b1b;">
        🔒 Closed Shadow DOM Content
      </div>
    \`;
    
    // Try to access open shadow root
    function accessOpen() {
      const result = document.getElementById('open-result');
      const shadowRoot = openHost.shadowRoot;
      
      if (shadowRoot) {
        result.textContent = \`✅ Success! Shadow root is accessible\\n\\nCan query elements: \${shadowRoot.querySelector('div').textContent}\`;
        result.style.background = '#d1fae5';
        result.style.color = '#065f46';
      } else {
        result.textContent = '❌ Cannot access shadow root';
        result.style.background = '#fee2e2';
        result.style.color = '#991b1b';
      }
    }
    
    // Try to access closed shadow root
    function accessClosed() {
      const result = document.getElementById('closed-result');
      const shadowRoot = closedHost.shadowRoot;
      
      if (shadowRoot) {
        result.textContent = '✅ Shadow root is accessible';
        result.style.background = '#d1fae5';
        result.style.color = '#065f46';
      } else {
        result.textContent = \`❌ Failed! shadowRoot is null\\n\\nClosed mode prevents external access.\`;
        result.style.background = '#fee2e2';
        result.style.color = '#991b1b';
      }
    }
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Shield}
        category="12. Web Components"
        title="Shadow DOM"
        description="Learn how to encapsulate styles and markup for true component isolation"
        colorTheme="blue"
      />

      {/* What is Shadow DOM */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What is Shadow DOM?
          </CardTitle>
          <CardDescription>
            A way to attach a hidden, isolated DOM tree to an element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Shadow DOM is a web standard that provides encapsulation for DOM and CSS. It allows you to attach a hidden
            DOM tree to an element, completely isolated from the main document. Styles defined inside Shadow DOM don't
            leak out, and styles from the page don't leak in.
          </p>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Think of It Like a Bubble 🫧</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Shadow DOM creates a protective bubble around your component. Styles and scripts inside the bubble don't
              affect the outside world, and outside styles don't affect what's inside the bubble.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Encapsulation</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Styles and markup are completely isolated
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <EyeOff className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Hidden</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Shadow DOM tree is hidden from main document
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Composable</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Use slots to insert content from Light DOM
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Shadow DOM Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800">
            <div className="space-y-4">
              {/* Document */}
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-900">
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full font-semibold">Document</span>
                </div>
                
                {/* Regular DOM */}
                <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 mb-3">
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Regular DOM</div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                </div>

                {/* Shadow Host */}
                <div className="p-4 rounded-lg border-4 border-purple-500 bg-purple-50 dark:bg-purple-950/30">
                  <div className="text-center mb-3">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full font-semibold">Shadow Host</span>
                  </div>
                  
                  {/* Shadow Root */}
                  <div className="p-3 rounded-lg border-2 border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-950/30">
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Shadow Root</span>
                    </div>
                    
                    {/* Shadow DOM */}
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-200 dark:bg-blue-800 rounded">
                        <div className="text-xs text-blue-900 dark:text-blue-100">Scoped Styles 🎨</div>
                      </div>
                      <div className="p-2 bg-blue-200 dark:bg-blue-800 rounded">
                        <div className="text-xs text-blue-900 dark:text-blue-100">Isolated Markup 📦</div>
                      </div>
                      <div className="text-xs text-center text-blue-600 dark:text-blue-400 mt-2">
                        🔒 Protected from outside
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Style Encapsulation
          </CardTitle>
          <CardDescription>
            See how Shadow DOM protects styles from global CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicShadowDOMExample}
            css=""
            title="Shadow DOM Protection"
            colorTheme="blue"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🛡️ How It Works:</h4>
            <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-200 list-decimal list-inside">
              <li>Global styles affect regular DOM elements</li>
              <li>Create Shadow DOM with <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">attachShadow()</code></li>
              <li>Shadow DOM has its own isolated styles</li>
              <li>Global styles cannot penetrate Shadow DOM!</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Slots Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Slots for Content Projection
          </CardTitle>
          <CardDescription>
            Use slots to insert content from the Light DOM into Shadow DOM
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={shadowWithSlotExample}
            css=""
            title="Shadow DOM with Slots"
            colorTheme="green"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">🎰 Slot Features:</h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Named slots:</strong> Use <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">slot="name"</code> attribute</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>::slotted():</strong> Style slotted content from Shadow DOM</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Fallback content:</strong> Default content if slot is empty</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Mode Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-green-500 to-red-500 text-white rounded-lg">
              <Lock className="h-5 w-5" />
            </div>
            3. Open vs Closed Mode
          </CardTitle>
          <CardDescription>
            Understanding the difference between open and closed Shadow DOM
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={modeComparisonExample}
            css=""
            title="Shadow DOM Modes"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Special Selectors */}
      <Card>
        <CardHeader>
          <CardTitle>Shadow DOM CSS Selectors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">:host</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Selects the shadow host element
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
<code className="text-blue-700 dark:text-blue-300">{`:host {
  display: block;
  padding: 1rem;
}

:host(.active) {
  background: blue;
}`}</code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">::slotted()</h4>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Styles slotted content
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
<code className="text-green-700 dark:text-green-300">{`::slotted(*) {
  font-family: inherit;
}

::slotted(p) {
  color: blue;
}`}</code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">:host-context()</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Match host with ancestor selector
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
<code className="text-purple-700 dark:text-purple-300">{`:host-context(.dark) {
  background: #000;
  color: #fff;
}`}</code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">::part()</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                Style shadow parts from outside
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
<code className="text-amber-700 dark:text-amber-300">{`/* In Shadow DOM */
<div part="button">Click</div>

/* From outside */
my-element::part(button) {
  color: red;
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use Shadow DOM for style encapsulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use 'open' mode for debugging and flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Provide slots for flexible content projection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use ::part() to expose styleable elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Style :host for theming support</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using Shadow DOM for everything (adds complexity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Forgetting about accessibility in Shadow DOM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using 'closed' mode unnecessarily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Not providing fallback content for slots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Relying on global styles inside Shadow DOM</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          Shadow DOM is supported in all modern browsers: Chrome 53+, Firefox 63+, Safari 10+, Edge 79+.
          For older browsers, use the <a href="https://github.com/webcomponents/polyfills" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Web Components polyfills</a>.
        </AlertDescription>
      </Alert>
    </div>
  );
}
