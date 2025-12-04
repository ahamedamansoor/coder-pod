'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { ToggleLeft, Eye, CheckSquare, ChevronDown, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAriaStatesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAriaStates({ onOpenWebPlayground }: HtmlAriaStatesProps) {
  
  const ariaExpandedExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aria-expanded - Expandable Content</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #831843 0%, #9f1239 100%); }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #ec4899; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #f9a8d4; }
    
    .accordion-item {
      margin: 20px 0;
      border: 2px solid #f3f4f6;
      border-radius: 8px;
      overflow: hidden;
    }
    :root.dark .accordion-item { border-color: #334155; }
    
    .accordion-button {
      width: 100%;
      padding: 20px;
      background: #fce7f3;
      border: none;
      text-align: left;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s;
    }
    :root.dark .accordion-button { background: #831843; color: #fce7f3; }
    
    .accordion-button:hover { background: #fbcfe8; }
    :root.dark .accordion-button:hover { background: #9f1239; }
    
    .accordion-button:focus {
      outline: 3px solid #f9a8d4;
      outline-offset: 2px;
    }
    
    .accordion-icon {
      transition: transform 0.3s;
      font-size: 1.5rem;
    }
    
    .accordion-button[aria-expanded="true"] .accordion-icon {
      transform: rotate(180deg);
    }
    
    .accordion-panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .accordion-panel[aria-hidden="false"] {
      max-height: 500px;
    }
    
    .accordion-content {
      padding: 20px;
      background: white;
      color: #4b5563;
      line-height: 1.6;
    }
    :root.dark .accordion-content { background: #334155; color: #cbd5e1; }
    
    .state-indicator {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-left: 10px;
    }
    
    .state-collapsed { background: #fee2e2; color: #991b1b; }
    .state-expanded { background: #d1fae5; color: #065f46; }
  </style>
  
  <script>
    function toggleAccordion(button) {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      
      button.setAttribute('aria-expanded', !isExpanded);
      panel.setAttribute('aria-hidden', isExpanded);
      
      // Update state indicator
      const indicator = button.querySelector('.state-indicator');
      if (!isExpanded) {
        indicator.textContent = 'aria-expanded="true"';
        indicator.className = 'state-indicator state-expanded';
      } else {
        indicator.textContent = 'aria-expanded="false"';
        indicator.className = 'state-indicator state-collapsed';
      }
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>🔽 aria-expanded</h1>
    <p style="text-align: center; color: #6b7280; margin-bottom: 30px;">
      Indicates whether content is expanded or collapsed
    </p>
    
    <div class="accordion-item">
      <button 
        class="accordion-button"
        aria-expanded="false"
        aria-controls="panel1"
        onclick="toggleAccordion(this)">
        <span>What is aria-expanded?</span>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="state-indicator state-collapsed">aria-expanded="false"</span>
          <span class="accordion-icon">▼</span>
        </div>
      </button>
      <div id="panel1" class="accordion-panel" role="region" aria-hidden="true">
        <div class="accordion-content">
          <p>
            <strong>aria-expanded</strong> is a state that tells screen readers whether 
            expandable content (like this accordion panel) is currently expanded or collapsed.
          </p>
          <p style="margin-top: 10px;">
            When you click the button, JavaScript updates this attribute, and screen readers
            announce the new state: "expanded" or "collapsed".
          </p>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <button 
        class="accordion-button"
        aria-expanded="false"
        aria-controls="panel2"
        onclick="toggleAccordion(this)">
        <span>When to use aria-expanded?</span>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="state-indicator state-collapsed">aria-expanded="false"</span>
          <span class="accordion-icon">▼</span>
        </div>
      </button>
      <div id="panel2" class="accordion-panel" role="region" aria-hidden="true">
        <div class="accordion-content">
          <ul style="list-style: none; line-height: 2;">
            <li>✓ Accordion panels (like this)</li>
            <li>✓ Dropdown menus</li>
            <li>✓ Collapsible sections</li>
            <li>✓ Tree view items</li>
            <li>✓ Combo boxes</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <button 
        class="accordion-button"
        aria-expanded="false"
        aria-controls="panel3"
        onclick="toggleAccordion(this)">
        <span>Try clicking me!</span>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="state-indicator state-collapsed">aria-expanded="false"</span>
          <span class="accordion-icon">▼</span>
        </div>
      </button>
      <div id="panel3" class="accordion-panel" role="region" aria-hidden="true">
        <div class="accordion-content">
          <p>
            🎉 Great! Notice how the state indicator updated when you clicked the button.
            Screen readers announce this change automatically, letting users know the panel
            is now expanded.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const ariaCheckedExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aria-checked & aria-pressed</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%); }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #3b82f6; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #60a5fa; }
    
    .section {
      margin: 40px 0;
      padding: 30px;
      background: #f3f4f6;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
    }
    :root.dark .section { background: #334155; }
    
    .section h3 { color: #1e40af; margin-bottom: 20px; }
    :root.dark .section h3 { color: #93c5fd; }
    
    /* Custom Checkbox */
    .custom-checkbox {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px 0;
      transition: all 0.2s;
    }
    :root.dark .custom-checkbox { background: #1e293b; }
    
    .custom-checkbox:hover { background: #eff6ff; }
    
    .checkbox-box {
      width: 24px;
      height: 24px;
      border: 2px solid #3b82f6;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    
    .checkbox-box[aria-checked="true"] {
      background: #3b82f6;
      color: white;
    }
    
    .checkbox-box:focus {
      outline: 3px solid #93c5fd;
      outline-offset: 2px;
    }
    
    /* Toggle Button */
    .toggle-button {
      padding: 12px 24px;
      background: #f3f4f6;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
      margin: 10px 5px;
    }
    :root.dark .toggle-button { background: #334155; border-color: #475569; color: #e2e8f0; }
    
    .toggle-button[aria-pressed="true"] {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
    
    .toggle-button:focus {
      outline: 3px solid #93c5fd;
      outline-offset: 2px;
    }
    
    .state-badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-left: 10px;
    }
    
    .badge-false { background: #fee2e2; color: #991b1b; }
    .badge-true { background: #d1fae5; color: #065f46; }
  </style>
  
  <script>
    function toggleCheckbox(element) {
      const isChecked = element.getAttribute('aria-checked') === 'true';
      element.setAttribute('aria-checked', !isChecked);
      element.innerHTML = !isChecked ? '✓' : '';
    }
    
    function toggleButton(button) {
      const isPressed = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', !isPressed);
      
      const badge = button.querySelector('.state-badge');
      badge.textContent = \`aria-pressed="\${!isPressed}"\`;
      badge.className = \`state-badge badge-\${!isPressed}\`;
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>☑️ aria-checked & aria-pressed</h1>
    
    <!-- aria-checked Section -->
    <div class="section">
      <h3>aria-checked (for checkboxes)</h3>
      <p style="color: #6b7280; margin-bottom: 20px;">
        Indicates the checked state of checkboxes and radio buttons.
      </p>
      
      <div class="custom-checkbox">
        <div 
          class="checkbox-box"
          role="checkbox"
          aria-checked="false"
          tabindex="0"
          onclick="toggleCheckbox(this)"
          onkeypress="if(event.key==='Enter' || event.key===' ') toggleCheckbox(this)">
        </div>
        <label>Enable notifications</label>
      </div>
      
      <div class="custom-checkbox">
        <div 
          class="checkbox-box"
          role="checkbox"
          aria-checked="false"
          tabindex="0"
          onclick="toggleCheckbox(this)"
          onkeypress="if(event.key==='Enter' || event.key===' ') toggleCheckbox(this)">
        </div>
        <label>Accept terms and conditions</label>
      </div>
      
      <div class="custom-checkbox">
        <div 
          class="checkbox-box"
          role="checkbox"
          aria-checked="true"
          tabindex="0"
          onclick="toggleCheckbox(this)"
          onkeypress="if(event.key==='Enter' || event.key===' ') toggleCheckbox(this)">
          ✓
        </div>
        <label>Subscribe to newsletter (pre-checked)</label>
      </div>
    </div>
    
    <!-- aria-pressed Section -->
    <div class="section">
      <h3>aria-pressed (for toggle buttons)</h3>
      <p style="color: #6b7280; margin-bottom: 20px;">
        Indicates the pressed state of toggle buttons (like bold/italic in editors).
      </p>
      
      <button 
        class="toggle-button"
        aria-pressed="false"
        onclick="toggleButton(this)">
        <strong>Bold</strong>
        <span class="state-badge badge-false">aria-pressed="false"</span>
      </button>
      
      <button 
        class="toggle-button"
        aria-pressed="false"
        onclick="toggleButton(this)">
        <em>Italic</em>
        <span class="state-badge badge-false">aria-pressed="false"</span>
      </button>
      
      <button 
        class="toggle-button"
        aria-pressed="false"
        onclick="toggleButton(this)">
        <u>Underline</u>
        <span class="state-badge badge-false">aria-pressed="false"</span>
      </button>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      Try clicking or using keyboard (Tab + Enter/Space) to toggle states!
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={ToggleLeft}
        category="HTML · Accessibility"
        title="What are ARIA States?"
        description="Learn dynamic ARIA attributes that change with user interaction"
        colorTheme="blue"
      />

      {/* What are ARIA States */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <ToggleLeft className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Understanding ARIA States
          </CardTitle>
          <CardDescription>
            States vs Properties: What's the difference?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">ARIA states</strong> are attributes that change frequently based on
            user interaction, while <strong className="text-foreground">ARIA properties</strong> are more static.
            States must be updated with JavaScript when the UI changes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🔄 States (Dynamic)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• aria-expanded (true/false)</li>
                <li>• aria-pressed (true/false)</li>
                <li>• aria-checked (true/false/mixed)</li>
                <li>• aria-selected (true/false)</li>
                <li>• aria-hidden (true/false)</li>
                <li>• aria-disabled (true/false)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold mb-2">📌 Properties (Static)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• aria-label (text)</li>
                <li>• aria-labelledby (ID reference)</li>
                <li>• aria-describedby (ID reference)</li>
                <li>• aria-required (true/false)</li>
                <li>• aria-readonly (true/false)</li>
                <li>• aria-haspopup (true/false/menu)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* aria-expanded */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            aria-expanded
          </CardTitle>
          <CardDescription>
            Indicates whether expandable content is open or closed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaExpandedExample}
            title="aria-expanded Interactive Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* aria-checked & aria-pressed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            aria-checked & aria-pressed
          </CardTitle>
          <CardDescription>
            For checkboxes and toggle buttons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaCheckedExample}
            title="aria-checked & aria-pressed Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common ARIA States */}
      <Card>
        <CardHeader>
          <CardTitle>Common ARIA States Reference</CardTitle>
          <CardDescription>
            Quick reference for frequently used states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">aria-expanded="true|false"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Indicates if a dropdown, accordion, or other expandable element is open or closed.
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;button aria-expanded="false" aria-controls="menu"&gt;Menu&lt;/button&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">aria-checked="true|false|mixed"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Indicates the checked state. Use "mixed" for indeterminate checkboxes.
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;div role="checkbox" aria-checked="true"&gt;Option&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">aria-pressed="true|false"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Indicates if a toggle button is pressed (like Bold/Italic in editors).
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;button aria-pressed="false"&gt;Bold&lt;/button&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">aria-selected="true|false"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Indicates if an option in a list or tab is currently selected.
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;div role="tab" aria-selected="true"&gt;Tab 1&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">aria-hidden="true|false"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Hides content from screen readers. Never use on focusable elements!
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;span aria-hidden="true"&gt;🎉&lt;/span&gt; Decorative emoji
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">aria-disabled="true|false"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Indicates element is disabled but still focusable (unlike disabled attribute).
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                &lt;button aria-disabled="true"&gt;Submit&lt;/button&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>ARIA States Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Update with JavaScript</strong> - States must change when UI changes</li>
            <li><strong>Use boolean values</strong> - "true" or "false" as strings, not true/false</li>
            <li><strong>Keep in sync</strong> - Visual state and ARIA state must match</li>
            <li><strong>Test with screen readers</strong> - Verify state changes are announced</li>
            <li><strong>Don't hide focusable</strong> - Never aria-hidden="true" on buttons/links</li>
            <li><strong>aria-disabled vs disabled</strong> - disabled removes from tab order, aria-disabled doesn't</li>
            <li><strong>Announce changes</strong> - Screen readers announce state updates automatically</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common ARIA State Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Forgetting to update</strong> - Setting state once and never changing it</li>
            <li><strong>Wrong values</strong> - Using true instead of "true" (must be string)</li>
            <li><strong>Mismatched visual/ARIA</strong> - Button looks pressed but aria-pressed="false"</li>
            <li><strong>aria-hidden on focus</strong> - Hiding focusable elements creates phantom controls</li>
            <li><strong>Not testing</strong> - States that don't actually get announced</li>
            <li><strong>Overusing aria-disabled</strong> - Use native disabled when possible</li>
            <li><strong>Missing aria-controls</strong> - aria-expanded needs aria-controls to reference panel</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser & Screen Reader Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          ARIA states are well supported across all modern browsers and screen readers. However, testing is crucial
          as support quality varies between combinations of browser + screen reader.
        </AlertDescription>
      </Alert>
    </div>
  );
}
