'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { RefreshCw, PlayCircle, StopCircle, Edit, Sparkles, CheckCircle, Info, Activity } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function HtmlLifecycleCallbacks() {
  const basicLifecycleExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifecycle Callbacks</title>
  <style>
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
    
    .controls {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin: 30px 0;
    }
    
    button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    .add-btn {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
    }
    
    .remove-btn {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
    }
    
    #element-container {
      min-height: 100px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
      margin: 20px 0;
    }
    
    #log {
      margin-top: 30px;
      padding: 20px;
      background: #1e293b;
      border-radius: 12px;
      max-height: 300px;
      overflow-y: auto;
      font-family: monospace;
      font-size: 13px;
    }
    
    .log-entry {
      padding: 6px 12px;
      margin: 4px 0;
      border-radius: 6px;
      animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .log-connected {
      background: #064e3b;
      color: #6ee7b7;
    }
    
    .log-disconnected {
      background: #7f1d1d;
      color: #fca5a5;
    }
    
    .log-attribute {
      background: #1e40af;
      color: #93c5fd;
    }
    
    lifecycle-demo {
      display: block;
      padding: 24px;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
      margin: 16px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Lifecycle Callbacks</h1>
    
    <div class="controls">
      <button class="add-btn" onclick="addElement()">
        ➕ Add Element (connected)
      </button>
      <button class="remove-btn" onclick="removeElement()">
        ➖ Remove Element (disconnected)
      </button>
    </div>
    
    <div id="element-container"></div>
    
    <div id="log"></div>
  </div>

  <script>
    const logContainer = document.getElementById('log');
    let elementCount = 0;
    
    function log(message, type = 'info') {
      const entry = document.createElement('div');
      entry.className = \`log-entry log-\${type}\`;
      const time = new Date().toLocaleTimeString();
      entry.textContent = \`[\${time}] \${message}\`;
      logContainer.appendChild(entry);
      logContainer.scrollTop = logContainer.scrollHeight;
    }
    
    class LifecycleDemo extends HTMLElement {
      constructor() {
        super();
        this.elementId = ++elementCount;
        log(\`🔨 Constructor called for element #\${this.elementId}\`, 'info');
      }
      
      // Called when element is added to DOM
      connectedCallback() {
        log(\`✅ connectedCallback: Element #\${this.elementId} added to page\`, 'connected');
        this.innerHTML = \`
          <h3 style="color: #1e40af; margin-bottom: 8px;">
            Element #\${this.elementId}
          </h3>
          <p style="color: #3b82f6; margin-bottom: 12px;">
            This element is now connected to the DOM!
          </p>
          <button onclick="this.parentElement.setAttribute('status', 'active')" 
                  style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Change Attribute
          </button>
        \`;
      }
      
      // Called when element is removed from DOM
      disconnectedCallback() {
        log(\`❌ disconnectedCallback: Element #\${this.elementId} removed from page\`, 'disconnected');
      }
      
      // Declare which attributes to observe
      static get observedAttributes() {
        return ['status'];
      }
      
      // Called when observed attribute changes
      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== null) {
          log(\`🔄 attributeChangedCallback: Element #\${this.elementId} - \${name} changed from "\${oldValue}" to "\${newValue}"\`, 'attribute');
        }
      }
    }
    
    customElements.define('lifecycle-demo', LifecycleDemo);
    
    function addElement() {
      const container = document.getElementById('element-container');
      const element = document.createElement('lifecycle-demo');
      element.setAttribute('status', 'inactive');
      container.appendChild(element);
    }
    
    function removeElement() {
      const container = document.getElementById('element-container');
      const lastElement = container.lastElementChild;
      if (lastElement) {
        container.removeChild(lastElement);
      } else {
        alert('No elements to remove!');
      }
    }
    
    // Add initial element
    log('🚀 Page loaded, ready to demonstrate lifecycle callbacks!', 'info');
  </script>
</body>
</html>`;

  const attributeObserverExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attribute Observer</title>
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
    
    .controls {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      margin-bottom: 30px;
    }
    
    .controls h2 {
      color: #10b981;
      margin-bottom: 20px;
    }
    
    .control-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      color: #374151;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    select, input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
    }
    
    select:focus, input:focus {
      outline: none;
      border-color: #10b981;
    }
    
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 16px;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    #demo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👀 Attribute Change Observer</h1>
    
    <div class="controls">
      <h2>Update Component Attributes</h2>
      
      <div class="control-group">
        <label>Theme</label>
        <select id="theme-select" onchange="updateTheme(this.value)">
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
      </div>
      
      <div class="control-group">
        <label>Size</label>
        <select id="size-select" onchange="updateSize(this.value)">
          <option value="small">Small</option>
          <option value="medium" selected>Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      
      <div class="control-group">
        <label>Title</label>
        <input type="text" id="title-input" value="Hello World" 
               oninput="updateTitle(this.value)" placeholder="Enter title">
      </div>
      
      <p style="color: #6b7280; font-size: 14px; margin-top: 16px;">
        💡 Watch the console below to see attributeChangedCallback firing!
      </p>
    </div>
    
    <div id="demo-container">
      <reactive-card theme="blue" size="medium" title="Hello World"></reactive-card>
    </div>
    
    <div style="background: #1e293b; padding: 20px; border-radius: 16px; max-height: 200px; overflow-y: auto; font-family: monospace; font-size: 13px; color: #93c5fd;" id="console"></div>
  </div>

  <script>
    const consoleEl = document.getElementById('console');
    
    function logToConsole(message) {
      const entry = document.createElement('div');
      entry.textContent = message;
      entry.style.padding = '4px 0';
      consoleEl.appendChild(entry);
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }
    
    class ReactiveCard extends HTMLElement {
      // Declare which attributes to observe
      static get observedAttributes() {
        return ['theme', 'size', 'title'];
      }
      
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        logToConsole('✅ Component connected');
      }
      
      // Called whenever an observed attribute changes
      attributeChangedCallback(name, oldValue, newValue) {
        logToConsole(\`🔄 Attribute "\${name}" changed: "\${oldValue}" → "\${newValue}"\`);
        
        // Re-render when attributes change
        if (oldValue !== null) {
          this.render();
        }
      }
      
      render() {
        const theme = this.getAttribute('theme') || 'blue';
        const size = this.getAttribute('size') || 'medium';
        const title = this.getAttribute('title') || 'Card';
        
        const themes = {
          blue: { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af' },
          green: { bg: '#d1fae5', border: '#10b981', text: '#065f46' },
          purple: { bg: '#e9d5ff', border: '#a855f7', text: '#6b21a8' },
          orange: { bg: '#fed7aa', border: '#f97316', text: '#9a3412' }
        };
        
        const sizes = {
          small: { width: '200px', fontSize: '1rem' },
          medium: { width: '300px', fontSize: '1.25rem' },
          large: { width: '400px', fontSize: '1.5rem' }
        };
        
        const currentTheme = themes[theme] || themes.blue;
        const currentSize = sizes[size] || sizes.medium;
        
        this.shadowRoot.innerHTML = \`
          <style>
            .card {
              width: \${currentSize.width};
              padding: 30px;
              background: \${currentTheme.bg};
              border: 4px solid \${currentTheme.border};
              border-radius: 16px;
              text-align: center;
              transition: all 0.3s ease;
              box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            }
            
            .title {
              font-size: \${currentSize.fontSize};
              font-weight: bold;
              color: \${currentTheme.text};
              margin-bottom: 12px;
            }
            
            .badge {
              display: inline-block;
              padding: 6px 12px;
              background: \${currentTheme.border};
              color: white;
              border-radius: 20px;
              font-size: 0.875rem;
              margin: 4px;
            }
          </style>
          
          <div class="card">
            <div class="title">\${title}</div>
            <div>
              <span class="badge">\${theme}</span>
              <span class="badge">\${size}</span>
            </div>
          </div>
        \`;
      }
    }
    
    customElements.define('reactive-card', ReactiveCard);
    
    const card = document.querySelector('reactive-card');
    
    function updateTheme(value) {
      card.setAttribute('theme', value);
    }
    
    function updateSize(value) {
      card.setAttribute('size', value);
    }
    
    function updateTitle(value) {
      card.setAttribute('title', value);
    }
    
    logToConsole('🚀 Reactive card initialized');
  </script>
</body>
</html>`;

  const adoptedCallbackExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adopted Callback</title>
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
    
    .docs {
      display: grid;
      gap: 24px;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 30px;
    }
    
    .doc-container {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      min-height: 300px;
    }
    
    .doc-container h2 {
      margin-bottom: 20px;
    }
    
    button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 16px;
    }
    
    button:hover {
      opacity: 0.9;
    }
    
    #log {
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    #log h2 {
      color: #667eea;
      margin-bottom: 16px;
    }
    
    .log-content {
      background: #1e293b;
      padding: 16px;
      border-radius: 8px;
      max-height: 200px;
      overflow-y: auto;
      font-family: monospace;
      font-size: 13px;
      color: #93c5fd;
    }
    
    .log-entry {
      padding: 4px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📄 adoptedCallback Demo</h1>
    
    <div class="docs">
      <div class="doc-container" id="doc1">
        <h2 style="color: #3b82f6;">📄 Document 1 (Main)</h2>
        <div id="container1"></div>
        <button onclick="moveToDoc2()">Move Element to Document 2 →</button>
      </div>
      
      <div class="doc-container" id="doc2">
        <h2 style="color: #10b981;">📄 Document 2 (iframe)</h2>
        <iframe id="iframe" style="width: 100%; height: 150px; border: 2px solid #e5e7eb; border-radius: 8px;"></iframe>
        <button onclick="moveToDoc1()">← Move Element to Document 1</button>
      </div>
    </div>
    
    <div id="log">
      <h2>📊 Lifecycle Events Log</h2>
      <div class="log-content" id="log-content"></div>
    </div>
  </div>

  <script>
    const logContent = document.getElementById('log-content');
    let element;
    
    function log(message) {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      const time = new Date().toLocaleTimeString();
      entry.textContent = \`[\${time}] \${message}\`;
      logContent.appendChild(entry);
      logContent.scrollTop = logContent.scrollHeight;
    }
    
    class DocumentAwareElement extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        log('🔨 Constructor called');
      }
      
      connectedCallback() {
        log('✅ connectedCallback - Element added to document');
        this.render();
      }
      
      disconnectedCallback() {
        log('❌ disconnectedCallback - Element removed from document');
      }
      
      // Called when element is moved to a new document
      adoptedCallback() {
        log('🔄 adoptedCallback - Element moved to new document!');
        this.render();
      }
      
      render() {
        const docName = this.ownerDocument === document ? 'Main Document' : 'iframe Document';
        
        this.shadowRoot.innerHTML = \`
          <style>
            .box {
              padding: 20px;
              background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
              border: 3px solid #3b82f6;
              border-radius: 12px;
              text-align: center;
            }
            
            h3 {
              color: #1e40af;
              margin-bottom: 8px;
            }
            
            p {
              color: #3b82f6;
              font-size: 14px;
            }
          </style>
          
          <div class="box">
            <h3>🎯 Movable Element</h3>
            <p>Currently in: <strong>\${docName}</strong></p>
          </div>
        \`;
      }
    }
    
    customElements.define('document-aware-element', DocumentAwareElement);
    
    // Initialize iframe
    const iframe = document.getElementById('iframe');
    iframe.onload = function() {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.body.innerHTML = '<div id="iframe-container" style="padding: 20px;"></div>';
      
      // Create initial element
      element = document.createElement('document-aware-element');
      document.getElementById('container1').appendChild(element);
      log('🚀 Demo initialized');
    };
    iframe.src = 'about:blank';
    
    function moveToDoc2() {
      if (!element) return;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const container = iframeDoc.getElementById('iframe-container');
      
      // adoptNode triggers adoptedCallback
      const adoptedElement = iframeDoc.adoptNode(element);
      container.appendChild(adoptedElement);
    }
    
    function moveToDoc1() {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const iframeElement = iframeDoc.querySelector('document-aware-element');
      if (!iframeElement) return;
      
      // adoptNode triggers adoptedCallback again
      element = document.adoptNode(iframeElement);
      document.getElementById('container1').appendChild(element);
    }
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={RefreshCw}
        category="12. Web Components"
        title="Lifecycle Callbacks"
        description="Learn how to react to element changes throughout its lifetime with lifecycle methods"
        colorTheme="blue"
      />

      {/* What are Lifecycle Callbacks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <RefreshCw className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What are Lifecycle Callbacks?
          </CardTitle>
          <CardDescription>
            Special methods that run at different stages of a custom element's life
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Lifecycle callbacks are special methods in Web Components that automatically run when certain events happen
            to your custom element. They allow you to initialize the element, clean up resources, react to changes, and
            handle document movements.
          </p>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Think of It Like Life Events 🌱</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Just like a person has birth, growth, changes, and... well, you know. Your element has:
              creation → connected → attribute changes → disconnected.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <PlayCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">connectedCallback</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Called when element is added to the page
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <StopCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">disconnectedCallback</h4>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200">
                Called when element is removed from the page
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Edit className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">attributeChangedCallback</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Called when observed attributes change
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">adoptedCallback</h4>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Called when element moves to new document
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lifecycle Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Lifecycle Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800">
            <div className="space-y-4">
              {/* Constructor */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">1</div>
                <div className="flex-1 p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700">
                  <strong className="text-purple-700 dark:text-purple-300">constructor()</strong>
                  <p className="text-sm text-muted-foreground mt-1">Element is created (don't do DOM work here)</p>
                </div>
              </div>

              <div className="text-center text-2xl">↓</div>

              {/* Connected */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">2</div>
                <div className="flex-1 p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-green-300 dark:border-green-700">
                  <strong className="text-green-700 dark:text-green-300">connectedCallback()</strong>
                  <p className="text-sm text-muted-foreground mt-1">Element added to page (render, fetch data, add listeners)</p>
                </div>
              </div>

              <div className="text-center text-2xl">↓</div>

              {/* Attributes */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
                <div className="flex-1 p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700">
                  <strong className="text-blue-700 dark:text-blue-300">attributeChangedCallback()</strong>
                  <p className="text-sm text-muted-foreground mt-1">Attributes change (re-render, update state)</p>
                </div>
              </div>

              <div className="text-center text-2xl">↓</div>

              {/* Disconnected */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">4</div>
                <div className="flex-1 p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-red-300 dark:border-red-700">
                  <strong className="text-red-700 dark:text-red-300">disconnectedCallback()</strong>
                  <p className="text-sm text-muted-foreground mt-1">Element removed (cleanup, remove listeners, cancel timers)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Lifecycle Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Connected & Disconnected
          </CardTitle>
          <CardDescription>
            See when elements are added and removed from the page
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicLifecycleExample}
            css=""
            title="Lifecycle Basics"
            colorTheme="blue"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🎯 Key Points:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">connectedCallback</code> is where you do most initialization work</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">disconnectedCallback</code> is for cleanup to prevent memory leaks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>These can be called multiple times if element is moved around</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Attribute Changed Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Edit className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Attribute Change Observer
          </CardTitle>
          <CardDescription>
            React to attribute changes and re-render automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={attributeObserverExample}
            css=""
            title="Reactive Attributes"
            colorTheme="green"
          />
          
          <div className="mt-4 space-y-3">
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <Info className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900 dark:text-green-100">How It Works</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200 text-sm">
                1. Declare <code>observedAttributes</code> static property<br/>
                2. List attribute names to watch<br/>
                3. <code>attributeChangedCallback</code> fires on changes<br/>
                4. Re-render with new attribute values
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Adopted Callback Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Activity className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            3. Document Adoption (Advanced)
          </CardTitle>
          <CardDescription>
            Handle elements moving between documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={adoptedCallbackExample}
            css=""
            title="Adopted Callback"
            colorTheme="amber"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ When to Use:</h4>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>• Moving elements between iframes</li>
              <li>• Working with multiple documents</li>
              <li>• Document-specific resources need updating</li>
              <li>• Rarely needed in typical applications</li>
            </ul>
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
                  <span>Use connectedCallback for initialization and rendering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Clean up in disconnectedCallback (listeners, intervals)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Declare observedAttributes for reactive properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Check oldValue !== null in attributeChangedCallback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Handle multiple connect/disconnect cycles</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <StopCircle className="h-4 w-4" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>DOM work in constructor (use connectedCallback)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Forgetting to clean up resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Throwing errors in lifecycle methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Assuming callbacks are called only once</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Expensive operations on every attribute change</span>
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
          Lifecycle callbacks are part of the Custom Elements v1 spec and supported in all modern browsers.
          Note: <code>adoptedCallback</code> has the same support as other callbacks but is less commonly used.
        </AlertDescription>
      </Alert>
    </div>
  );
}
