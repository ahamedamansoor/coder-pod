'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Keyboard, ArrowRight, Space, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlKeyboardNavigationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlKeyboardNavigation({ onOpenWebPlayground }: HtmlKeyboardNavigationProps) {
  
  const focusExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Keyboard Focus Indicators</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #78350f 0%, #92400e 100%); }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #f59e0b; margin-bottom: 20px; text-align: center; }
    :root.dark h1 { color: #fbbf24; }
    
    .instruction {
      text-align: center;
      background: #fef3c7;
      padding: 20px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #f59e0b;
    }
    :root.dark .instruction { background: #78350f; border-left-color: #fbbf24; }
    
    .instruction strong { color: #78350f; }
    :root.dark .instruction strong { color: #fef3c7; }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    .bad-example, .good-example {
      padding: 25px;
      border-radius: 12px;
    }
    
    .bad-example {
      background: #fef2f2;
      border: 3px solid #ef4444;
    }
    :root.dark .bad-example { background: #7f1d1d; border-color: #f87171; }
    
    .good-example {
      background: #f0fdf4;
      border: 3px solid #10b981;
    }
    :root.dark .good-example { background: #064e3b; border-color: #34d399; }
    
    .bad-example h3 { color: #991b1b; margin-bottom: 15px; }
    :root.dark .bad-example h3 { color: #fca5a5; }
    
    .good-example h3 { color: #065f46; margin-bottom: 15px; }
    :root.dark .good-example h3 { color: #6ee7b7; }
    
    /* Bad button - no focus indicator */
    .bad-button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      margin: 10px 0;
      display: block;
      width: 100%;
    }
    
    .bad-button:focus {
      outline: none; /* ❌ Bad: removes focus indicator */
    }
    
    /* Good button - clear focus indicator */
    .good-button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      margin: 10px 0;
      display: block;
      width: 100%;
      transition: all 0.2s;
    }
    
    .good-button:focus {
      outline: 4px solid #fbbf24;
      outline-offset: 3px;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
    }
    
    .good-button:hover {
      background: #2563eb;
    }
    
    p { color: #6b7280; line-height: 1.5; margin-top: 10px; font-size: 0.9rem; }
    :root.dark p { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⌨️ Keyboard Focus Indicators</h1>
    
    <div class="instruction">
      <strong>Try This:</strong> Press <kbd style="background: white; padding: 4px 8px; border-radius: 4px; border: 1px solid #d1d5db;">Tab</kbd> to navigate between buttons below
    </div>
    
    <div class="comparison">
      <div class="bad-example">
        <h3>❌ No Focus Indicator</h3>
        <button class="bad-button">Click Me</button>
        <button class="bad-button">Another Button</button>
        <button class="bad-button">Third Button</button>
        <p>
          Can you tell which button is focused? Keyboard users can't either!
          This makes navigation impossible.
        </p>
      </div>
      
      <div class="good-example">
        <h3>✅ Clear Focus Indicator</h3>
        <button class="good-button">Click Me</button>
        <button class="good-button">Another Button</button>
        <button class="good-button">Third Button</button>
        <p>
          Much better! The focused button has a bright outline, making it
          obvious which element is active.
        </p>
      </div>
    </div>
    
    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; margin-top: 30px; border-left: 4px solid #3b82f6;">
      <h3 style="color: #1e40af; margin-bottom: 10px;">💡 Focus Indicator Best Practices</h3>
      <ul style="list-style: none; line-height: 2; color: #1e3a8a;">
        <li>✓ Use outline or box-shadow, not just background color</li>
        <li>✓ Ensure 3:1 contrast ratio against adjacent colors</li>
        <li>✓ Make it at least 2px thick</li>
        <li>✓ Consider offset for breathing room</li>
        <li>✓ Never use outline: none without a replacement!</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  const keyboardPatternsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Keyboard Navigation Patterns</title>
  
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
    
    .pattern-grid {
      display: grid;
      gap: 20px;
      margin: 30px 0;
    }
    
    .pattern-card {
      padding: 25px;
      background: #faf5ff;
      border-radius: 12px;
      border-left: 4px solid #8b5cf6;
    }
    :root.dark .pattern-card { background: #4c1d95; }
    
    .pattern-card h3 {
      color: #7c3aed;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    :root.dark .pattern-card h3 { color: #c4b5fd; }
    
    .keys {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 15px 0;
    }
    
    .key {
      background: white;
      border: 2px solid #8b5cf6;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
      color: #7c3aed;
    }
    :root.dark .key { background: #334155; border-color: #a78bfa; color: #c4b5fd; }
    
    .description {
      color: #6b7280;
      line-height: 1.6;
      margin-top: 10px;
    }
    :root.dark .description { color: #cbd5e1; }
    
    .interactive-demo {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      margin-top: 15px;
    }
    :root.dark .interactive-demo { background: #334155; }
    
    .menu {
      background: white;
      border: 2px solid #8b5cf6;
      border-radius: 8px;
      list-style: none;
      overflow: hidden;
    }
    :root.dark .menu { background: #1e293b; }
    
    .menu-item {
      padding: 15px 20px;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 1px solid #e5e7eb;
    }
    :root.dark .menu-item { border-bottom-color: #475569; }
    
    .menu-item:last-child { border-bottom: none; }
    
    .menu-item:hover {
      background: #ede9fe;
    }
    :root.dark .menu-item:hover { background: #5b21b6; }
    
    .menu-item:focus {
      background: #ddd6fe;
      outline: 3px solid #a78bfa;
      outline-offset: -3px;
    }
    
    button {
      background: #8b5cf6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.2s;
    }
    
    button:hover { background: #7c3aed; }
    button:focus {
      outline: 3px solid #c4b5fd;
      outline-offset: 2px;
    }
  </style>
  
  <script>
    function handleMenuKeyboard(event) {
      const items = Array.from(event.currentTarget.querySelectorAll('.menu-item'));
      const currentIndex = items.indexOf(document.activeElement);
      
      switch(event.key) {
        case 'ArrowDown':
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % items.length;
          items[nextIndex].focus();
          break;
        case 'ArrowUp':
          event.preventDefault();
          const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          items[prevIndex].focus();
          break;
        case 'Home':
          event.preventDefault();
          items[0].focus();
          break;
        case 'End':
          event.preventDefault();
          items[items.length - 1].focus();
          break;
      }
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>⌨️ Keyboard Navigation Patterns</h1>
    
    <div class="pattern-grid">
      <!-- Tab Pattern -->
      <div class="pattern-card">
        <h3>
          <span style="font-size: 1.5rem;">⇥</span>
          Tab / Shift+Tab
        </h3>
        <div class="keys">
          <span class="key">Tab</span>
          <span class="key">Shift + Tab</span>
        </div>
        <p class="description">
          Move forward/backward through focusable elements (buttons, links, inputs).
          This is the most important keyboard navigation pattern.
        </p>
      </div>
      
      <!-- Enter/Space Pattern -->
      <div class="pattern-card">
        <h3>
          <span style="font-size: 1.5rem;">↵</span>
          Enter / Space
        </h3>
        <div class="keys">
          <span class="key">Enter</span>
          <span class="key">Space</span>
        </div>
        <p class="description">
          Activate buttons and links. Enter works for links and buttons, Space for buttons and checkboxes.
        </p>
        <div class="interactive-demo">
          <button onclick="alert('Button activated!')">Try pressing Enter or Space</button>
        </div>
      </div>
      
      <!-- Arrow Keys Pattern -->
      <div class="pattern-card">
        <h3>
          <span style="font-size: 1.5rem;">↕↔</span>
          Arrow Keys
        </h3>
        <div class="keys">
          <span class="key">↑</span>
          <span class="key">↓</span>
          <span class="key">←</span>
          <span class="key">→</span>
        </div>
        <p class="description">
          Navigate within components like menus, radio groups, tabs, and sliders.
        </p>
        <div class="interactive-demo">
          <p style="color: #6b7280; margin-bottom: 10px; font-size: 0.9rem;">
            Click any item, then use ↑↓ arrows to navigate:
          </p>
          <ul class="menu" onkeydown="handleMenuKeyboard(event)">
            <li class="menu-item" tabindex="0">Home</li>
            <li class="menu-item" tabindex="0">About</li>
            <li class="menu-item" tabindex="0">Services</li>
            <li class="menu-item" tabindex="0">Contact</li>
          </ul>
        </div>
      </div>
      
      <!-- Escape Pattern -->
      <div class="pattern-card">
        <h3>
          <span style="font-size: 1.5rem;">⎋</span>
          Escape
        </h3>
        <div class="keys">
          <span class="key">Esc</span>
        </div>
        <p class="description">
          Close modals, dialogs, dropdown menus, and other overlay content. Cancel operations.
        </p>
      </div>
      
      <!-- Home/End Pattern -->
      <div class="pattern-card">
        <h3>
          <span style="font-size: 1.5rem;">⇱⇲</span>
          Home / End
        </h3>
        <div class="keys">
          <span class="key">Home</span>
          <span class="key">End</span>
        </div>
        <p class="description">
          Jump to first/last item in lists, first/last character in inputs.
        </p>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin-top: 30px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #78350f; margin-bottom: 15px;">⚡ Quick Testing Checklist</h3>
      <ul style="list-style: none; line-height: 2; color: #92400e;">
        <li>✓ Can you reach all interactive elements with Tab?</li>
        <li>✓ Is focus indicator visible on all elements?</li>
        <li>✓ Do buttons activate with Enter and Space?</li>
        <li>✓ Do arrow keys work in custom widgets?</li>
        <li>✓ Does Esc close modals/menus?</li>
        <li>✓ Can you complete forms without touching mouse?</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Keyboard}
        category="HTML · Accessibility"
        title="What is Keyboard Navigation?"
        description="Learn how to make your website fully usable with keyboard only"
        colorTheme="blue"
      />

      {/* Focus Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Keyboard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Focus Indicators
          </CardTitle>
          <CardDescription>
            Why visible focus indicators are critical for accessibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={focusExample}
            title="Focus Indicator Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Keyboard Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Common Keyboard Patterns
          </CardTitle>
          <CardDescription>
            Standard keyboard interactions users expect
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={keyboardPatternsExample}
            title="Keyboard Navigation Patterns"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Tab Order */}
      <Card>
        <CardHeader>
          <CardTitle>Tab Order & tabindex</CardTitle>
          <CardDescription>
            Controlling the order of keyboard navigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">tabindex="0"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Makes non-interactive elements focusable. Adds to natural tab order.
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;div tabindex="0" role="button"&gt;Focusable div&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">tabindex="-1"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Focusable programmatically (via JavaScript) but not via Tab key.
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;div tabindex="-1" id="modal"&gt;Modal content&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">
                ❌ tabindex="1+" (Positive values)
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                DON'T USE! Creates confusing tab order. Use source order instead.
              </p>
              <code className="text-xs bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
                &lt;!-- AVOID: tabindex="1", tabindex="2", etc. --&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Keyboard Navigation Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Logical tab order</strong> - Follow visual layout (left-to-right, top-to-bottom)</li>
            <li><strong>Visible focus indicators</strong> - 3:1 contrast, at least 2px outline</li>
            <li><strong>Support standard keys</strong> - Enter, Space, Esc, arrows work as expected</li>
            <li><strong>Skip links</strong> - Add "Skip to main content" link at top</li>
            <li><strong>No keyboard traps</strong> - Users can always Tab away</li>
            <li><strong>Focus management</strong> - Set focus when opening modals, moving to errors</li>
            <li><strong>Test with keyboard only</strong> - Unplug mouse and try using your site</li>
            <li><strong>Avoid positive tabindex</strong> - Use tabindex="0" or "-1" only</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Keyboard Navigation Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>outline: none without replacement</strong> - Removes focus indicator entirely</li>
            <li><strong>Keyboard traps</strong> - Focus gets stuck in modal, can't escape</li>
            <li><strong>Wrong tab order</strong> - Using tabindex="1", "2", etc.</li>
            <li><strong>Missing keyboard handlers</strong> - Custom widgets that only work with mouse</li>
            <li><strong>Hidden focus</strong> - Focus indicator too subtle to see</li>
            <li><strong>Not managing focus</strong> - Modal opens but focus stays on button</li>
            <li><strong>Arrow keys don't work</strong> - Menus/tabs that don't respond to arrows</li>
            <li><strong>Can't close with Escape</strong> - Modals/dropdowns missing Esc handler</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Testing Keyboard Navigation</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <p className="mb-2">
            The best way to test keyboard accessibility is to actually use your site with keyboard only:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Unplug or disable your mouse</li>
            <li>Use Tab to navigate, Enter/Space to activate</li>
            <li>Try completing common tasks (filling forms, navigating menus)</li>
            <li>Check if focus indicator is always visible</li>
            <li>Verify you can escape from all modals/menus</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
