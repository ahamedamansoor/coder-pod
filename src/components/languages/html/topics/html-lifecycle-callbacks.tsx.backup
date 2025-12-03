'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  RefreshCw, 
  Info, 
  Code2, 
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Zap,
  Activity,
  PlayCircle,
  StopCircle,
  Edit,
  FileText
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlLifecycleCallbacksProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<!-- Lifecycle Demo Component -->
<lifecycle-demo id="demo1" data-message="Hello">
  <p>Initial Content</p>
</lifecycle-demo>

<div style="margin: 1rem 0; display: flex; gap: 0.5rem;">
  <button onclick="addElement()">Add Element</button>
  <button onclick="removeElement()">Remove Element</button>
  <button onclick="changeAttribute()">Change Attribute</button>
  <button onclick="moveElement()">Move Element</button>
</div>

<div id="container"></div>
<div id="logs" style="margin-top: 1rem; padding: 1rem; background: #f8fafc; border-radius: 6px; font-family: monospace; font-size: 0.75rem; max-height: 200px; overflow-y: auto;"></div>`,
  css: `lifecycle-demo {
  display: block;
  padding: 1rem;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  lifecycle-demo {
    background: #1e293b;
  }
}

#logs {
  background: #f8fafc;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  #logs {
    background: #0f172a !important;
    color: #e2e8f0 !important;
    border: 1px solid #334155;
  }
}

button {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`,
  js: `const logs = document.getElementById('logs');

function log(message, color = '#3b82f6') {
  const time = new Date().toLocaleTimeString();
  logs.innerHTML += \`<div style="color: \${color}; margin: 0.25rem 0;">\${time} - \${message}</div>\`;
  logs.scrollTop = logs.scrollHeight;
}

class LifecycleDemo extends HTMLElement {
  static get observedAttributes() {
    return ['data-message'];
  }
  
  constructor() {
    super();
    log('🔨 constructor() called', '#8b5cf6');
  }
  
  connectedCallback() {
    log('✅ connectedCallback() - Element added to DOM', '#10b981');
    this.render();
  }
  
  disconnectedCallback() {
    log('❌ disconnectedCallback() - Element removed from DOM', '#ef4444');
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    log(\`🔄 attributeChangedCallback() - \${name}: "\${oldValue}" → "\${newValue}"\`, '#f59e0b');
    this.render();
  }
  
  adoptedCallback() {
    log('📦 adoptedCallback() - Element moved to new document', '#06b6d4');
  }
  
  render() {
    const message = this.getAttribute('data-message') || 'No message';
    this.style.background = \`linear-gradient(135deg, #667eea 0%, #764ba2 100%)\`;
    this.style.color = 'white';
    this.innerHTML = \`
      <h3 style="margin: 0 0 0.5rem 0;">Lifecycle Demo</h3>
      <p style="margin: 0;">Message: \${message}</p>
    \`;
  }
}

customElements.define('lifecycle-demo', LifecycleDemo);

// Demo functions
function addElement() {
  const el = document.createElement('lifecycle-demo');
  el.setAttribute('data-message', 'Dynamically created!');
  el.textContent = 'New element';
  document.getElementById('container').appendChild(el);
}

function removeElement() {
  const el = document.querySelector('#container lifecycle-demo');
  if (el) {
    el.remove();
  } else {
    log('⚠️  No element to remove', '#64748b');
  }
}

function changeAttribute() {
  const el = document.getElementById('demo1');
  const messages = ['Hello', 'Bonjour', 'Hola', 'Ciao'];
  const random = messages[Math.floor(Math.random() * messages.length)];
  el.setAttribute('data-message', random);
}

function moveElement() {
  const el = document.getElementById('demo1');
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  iframe.contentDocument.body.appendChild(el);
  setTimeout(() => {
    document.body.appendChild(el);
    iframe.remove();
  }, 100);
}`
};

export default function HtmlLifecycleCallbacks({ onOpenWebPlayground }: HtmlLifecycleCallbacksProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={RefreshCw} 
        category='Web Components' 
        title='Lifecycle Callbacks' 
        description='React to custom element lifecycle events with built-in callback methods'
        colorTheme='blue'
      />

      {/* What are Lifecycle Callbacks? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are Lifecycle Callbacks?
          </CardTitle>
          <CardDescription>
            Special methods invoked at key moments in a custom element's life
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            <strong>Lifecycle callbacks</strong> are special methods automatically called by the browser at specific moments in a Custom Element's lifecycle. They allow you to run code when an element is created, added to the DOM, removed from the DOM, or when its attributes change. These callbacks are essential for initialization, cleanup, and responding to changes.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Four Main Callbacks */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Activity className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>
                  Four Main Callbacks
                </h3>
              </div>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>1.</span>
                  <span><code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>constructor()</code> - Element created</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>2.</span>
                  <span><code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>connectedCallback()</code> - Added to DOM</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>3.</span>
                  <span><code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>disconnectedCallback()</code> - Removed from DOM</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>4.</span>
                  <span><code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>attributeChangedCallback()</code> - Attributes changed</span>
                </li>
              </ul>
            </div>

            {/* Common Use Cases */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Zap className='w-5 h-5 text-emerald-600' />
                <h3 className='font-semibold text-emerald-700 dark:text-emerald-300'>
                  Common Use Cases
                </h3>
              </div>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Initialize state and setup</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Add event listeners</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Fetch data from APIs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Cleanup resources</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Basic Pattern
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`class MyElement extends HTMLElement {
  constructor() {
    super(); // Always call super() first
    // Initialize instance properties
  }
  
  connectedCallback() {
    // Element added to DOM - setup goes here
  }
  
  disconnectedCallback() {
    // Element removed - cleanup goes here
  }
}`}</code>
            </pre>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>
              Important Rule
            </AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              Always call <code className='px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900 rounded'>super()</code> first in the constructor! The element won't work without it. Do initialization in <code className='px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900 rounded'>connectedCallback()</code>, not the constructor.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Lifecycle Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            Lifecycle Flow
          </CardTitle>
          <CardDescription>The complete lifecycle of a custom element</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
            <div className='space-y-4'>
              {[
                {
                  step: '1',
                  title: 'constructor()',
                  desc: 'Element instance created',
                  when: 'When: createElement() or parser encounters tag',
                  icon: '🔨',
                  color: 'purple'
                },
                {
                  step: '2',
                  title: 'connectedCallback()',
                  desc: 'Element inserted into DOM',
                  when: 'When: appendChild(), insertBefore(), etc.',
                  icon: '✅',
                  color: 'emerald'
                },
                {
                  step: '3',
                  title: 'attributeChangedCallback()',
                  desc: 'Observed attribute changes',
                  when: 'When: setAttribute(), attribute modified',
                  icon: '🔄',
                  color: 'blue'
                },
                {
                  step: '4',
                  title: 'disconnectedCallback()',
                  desc: 'Element removed from DOM',
                  when: 'When: remove(), removeChild(), etc.',
                  icon: '❌',
                  color: 'red'
                },
                {
                  step: '5',
                  title: 'adoptedCallback()',
                  desc: 'Element moved to new document',
                  when: 'When: adoptNode() (rare)',
                  icon: '📦',
                  color: 'amber'
                }
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-950 border-2 border-${item.color}-500 flex items-center justify-center font-bold text-${item.color}-700 dark:text-${item.color}-300`}>
                    {item.step}
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-1'>
                      <span className='text-xl'>{item.icon}</span>
                      <code className={`text-sm font-semibold text-${item.color}-700 dark:text-${item.color}-300`}>
                        {item.title}
                      </code>
                    </div>
                    <p className='text-sm text-slate-700 dark:text-slate-300 mb-1'>
                      {item.desc}
                    </p>
                    <p className='text-xs text-slate-500 dark:text-slate-400 italic'>
                      {item.when}
                    </p>
                  </div>
                  {index < 4 && (
                    <ArrowRight className='w-5 h-5 text-slate-400 absolute left-5 mt-12' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: constructor() */}
      <FrontendCodePreview
        title='constructor() - Element Creation'
        description='Initialize your element when it is created'
        html={`<counter-element></counter-element>
<counter-element></counter-element>
<counter-element></counter-element>

<p style="margin-top: 1rem; color: #64748b; font-size: 0.875rem;">
  Each element has its own independent state initialized in constructor
</p>`}
        css={`counter-element {
  display: inline-block;
  margin: 0.5rem;
  padding: 1rem;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  text-align: center;
  min-width: 120px;
}

@media (prefers-color-scheme: dark) {
  counter-element {
    background: #1e293b;
  }
  
  p {
    color: #94a3b8 !important;
  }
}`}
        js={`class CounterElement extends HTMLElement {
  constructor() {
    // ALWAYS call super() first
    super();
    
    // Initialize instance properties
    this.count = 0;
    this.instanceId = Math.random().toString(36).substr(2, 9);
    
    console.log(\`Constructor called for instance: \${this.instanceId}\`);
    
    // Create shadow DOM in constructor
    this.attachShadow({ mode: 'open' });
    
    // Note: Don't manipulate DOM here!
    // Wait for connectedCallback()
  }
  
  connectedCallback() {
    // Now we can safely work with the DOM
    this.render();
    
    // Add event listener
    this.shadowRoot.querySelector('button')
      .addEventListener('click', () => {
        this.count++;
        this.render();
      });
  }
  
  render() {
    this.shadowRoot.innerHTML = \`
      <style>
        .counter {
          font-family: system-ui;
        }
        .count {
          font-size: 2rem;
          font-weight: bold;
          color: #3b82f6;
          margin: 0.5rem 0;
        }
        button {
          padding: 0.5rem 1rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background: #2563eb;
        }
        .id {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 0.5rem;
        }
      </style>
      
      <div class="counter">
        <div class="count">\${this.count}</div>
        <button>Increment</button>
        <div class="id">ID: \${this.instanceId.substr(0, 4)}</div>
      </div>
    \`;
  }
}

customElements.define('counter-element', CounterElement);`}
        colorTheme='purple'
        icon={PlayCircle}
        previewHeight='350px'
      />

      {/* Example 2: connectedCallback() */}
      <FrontendCodePreview
        title='connectedCallback() - DOM Insertion'
        description='Setup code runs when element is added to the page'
        html={`<timer-element></timer-element>

<div style="margin-top: 1rem;">
  <button onclick="addTimer()">Add Timer</button>
  <button onclick="removeTimer()">Remove Timer</button>
</div>

<div id="container"></div>`}
        css={`timer-element {
  display: block;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin: 1rem 0;
  font-family: system-ui;
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.5rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`class TimerElement extends HTMLElement {
  constructor() {
    super();
    this.seconds = 0;
    this.intervalId = null;
  }
  
  connectedCallback() {
    console.log('✅ Timer connected - starting...');
    
    // Initial render
    this.render();
    
    // Start interval when added to DOM
    this.intervalId = setInterval(() => {
      this.seconds++;
      this.render();
    }, 1000);
  }
  
  disconnectedCallback() {
    console.log('❌ Timer disconnected - cleaning up...');
    
    // IMPORTANT: Clear interval when removed
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  render() {
    this.innerHTML = \`
      <h3 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">Timer Element</h3>
      <div style="font-size: 2.5rem; font-weight: bold;">\${this.seconds}s</div>
      <div style="font-size: 0.875rem; opacity: 0.9; margin-top: 0.5rem;">
        Status: Running
      </div>
    \`;
  }
}

customElements.define('timer-element', TimerElement);

// Demo functions
function addTimer() {
  const timer = document.createElement('timer-element');
  document.getElementById('container').appendChild(timer);
}

function removeTimer() {
  const timer = document.querySelector('#container timer-element');
  if (timer) {
    timer.remove();
  } else {
    alert('No timer to remove!');
  }
}`}
        colorTheme='emerald'
        icon={PlayCircle}
        previewHeight='500px'
      />

      {/* Example 3: disconnectedCallback() */}
      <FrontendCodePreview
        title='disconnectedCallback() - Cleanup'
        description='Clean up resources when element is removed'
        html={`<div style="margin-bottom: 1rem;">
  <button onclick="addStream()">Add Video Stream</button>
  <button onclick="removeStream()">Remove Stream</button>
</div>

<div id="stream-container"></div>

<div id="log" style="margin-top: 1rem; padding: 1rem; background: #f8fafc; border-radius: 6px; font-size: 0.75rem; font-family: monospace;"></div>`}
        css={`video-stream {
  display: block;
  padding: 1.5rem;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  video-stream {
    background: #1e293b;
  }
}

#log {
  background: #f8fafc;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  #log {
    background: #0f172a !important;
    color: #e2e8f0 !important;
    border: 1px solid #334155;
  }
}

button {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.5rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`const logEl = document.getElementById('log');

function log(message, color = '#3b82f6') {
  logEl.innerHTML += \`<div style="color: \${color}; margin: 0.25rem 0;">\${message}</div>\`;
}

class VideoStream extends HTMLElement {
  constructor() {
    super();
    this.stream = null;
    this.listeners = [];
  }
  
  connectedCallback() {
    log('✅ Video stream connected - initializing...', '#10b981');
    
    // Simulate starting a video stream
    this.stream = {
      id: Math.random().toString(36).substr(2, 9),
      active: true
    };
    
    log(\`📹 Started stream: \${this.stream.id}\`, '#3b82f6');
    
    // Add event listeners
    const clickHandler = () => log('Stream clicked', '#64748b');
    this.addEventListener('click', clickHandler);
    this.listeners.push({ type: 'click', handler: clickHandler });
    
    this.render();
  }
  
  disconnectedCallback() {
    log('❌ Video stream disconnected - cleaning up...', '#ef4444');
    
    // Clean up stream
    if (this.stream && this.stream.active) {
      this.stream.active = false;
      log(\`🛑 Stopped stream: \${this.stream.id}\`, '#f59e0b');
      this.stream = null;
    }
    
    // Remove all event listeners
    this.listeners.forEach(({ type, handler }) => {
      this.removeEventListener(type, handler);
    });
    this.listeners = [];
    
    log('🧹 Cleanup complete', '#10b981');
  }
  
  render() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    
    this.innerHTML = \`
      <div style="text-align: center;">
        <h3 style="margin: 0 0 0.5rem 0; color: \${textColor};">Video Stream</h3>
        <div style="font-size: 3rem; margin: 0.5rem 0;">📹</div>
        <div style="color: #10b981; font-size: 0.875rem;">
          ● Active - ID: \${this.stream?.id.substr(0, 4)}
        </div>
      </div>
    \`;
  }
}

customElements.define('video-stream', VideoStream);

function addStream() {
  const stream = document.createElement('video-stream');
  document.getElementById('stream-container').appendChild(stream);
}

function removeStream() {
  const stream = document.querySelector('#stream-container video-stream');
  if (stream) {
    stream.remove();
  }
}`}
        colorTheme='blue'
        icon={StopCircle}
        previewHeight='550px'
      />

      {/* Example 4: attributeChangedCallback() */}
      <FrontendCodePreview
        title='attributeChangedCallback() - Reactive Attributes'
        description='Respond to attribute changes'
        html={`<status-badge status="pending" message="Processing..."></status-badge>

<div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
  <button onclick="setStatus('pending')">Pending</button>
  <button onclick="setStatus('success')">Success</button>
  <button onclick="setStatus('error')">Error</button>
  <button onclick="setStatus('warning')">Warning</button>
</div>

<div style="margin-top: 1rem;">
  <input id="messageInput" placeholder="Enter message" style="padding: 0.5rem; border: 2px solid #e2e8f0; border-radius: 6px;">
  <button onclick="setMessage()">Update Message</button>
</div>`}
        css={`status-badge {
  display: block;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: system-ui;
  transition: all 0.3s ease;
}

input {
  width: 200px;
  margin-right: 0.5rem;
  background: white;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  input {
    background: #1e293b !important;
    color: #e2e8f0 !important;
    border-color: #334155 !important;
  }
}

button {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`class StatusBadge extends HTMLElement {
  // Specify which attributes to observe
  static get observedAttributes() {
    return ['status', 'message'];
  }
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
  }
  
  // Called when observed attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`Attribute "\${name}" changed: "\${oldValue}" → "\${newValue}"\`);
    
    // Only re-render if connected
    if (this.isConnected) {
      this.render();
    }
  }
  
  render() {
    const status = this.getAttribute('status') || 'pending';
    const message = this.getAttribute('message') || 'No message';
    
    const statusConfig = {
      pending: { bg: '#f59e0b', icon: '⏳', text: 'Pending' },
      success: { bg: '#10b981', icon: '✅', text: 'Success' },
      error: { bg: '#ef4444', icon: '❌', text: 'Error' },
      warning: { bg: '#f59e0b', icon: '⚠️', text: 'Warning' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    
    this.shadowRoot.innerHTML = \`
      <style>
        .badge {
          padding: 1.5rem;
          background: \${config.bg};
          color: white;
          border-radius: 8px;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        
        .status {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .message {
          opacity: 0.9;
          font-size: 0.875rem;
        }
      </style>
      
      <div class="badge">
        <div class="icon">\${config.icon}</div>
        <div class="status">\${config.text}</div>
        <div class="message">\${message}</div>
      </div>
    \`;
  }
}

customElements.define('status-badge', StatusBadge);

const badge = document.querySelector('status-badge');

function setStatus(status) {
  badge.setAttribute('status', status);
}

function setMessage() {
  const input = document.getElementById('messageInput');
  if (input.value) {
    badge.setAttribute('message', input.value);
    input.value = '';
  }
}`}
        colorTheme='amber'
        icon={Edit}
        previewHeight='500px'
      />

      {/* Callback Rules & Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <FileText className='w-5 h-5 text-purple-600' />
            Callback Rules & Timing
          </CardTitle>
          <CardDescription>Important things to know about lifecycle callbacks</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* constructor() Rules */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>
                constructor() Rules
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Always call <code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>super()</code> first</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Initialize instance properties</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Attach shadow DOM if needed</span>
                </li>
                <li className='flex items-start gap-2'>
                  <XCircle className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>Don't manipulate attributes or children</span>
                </li>
                <li className='flex items-start gap-2'>
                  <XCircle className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>Don't add event listeners</span>
                </li>
              </ul>
            </div>

            {/* connectedCallback() Rules */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>
                connectedCallback() Rules
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Safe to access attributes and children</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Add event listeners here</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Start timers, fetch data</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Lightbulb className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Can be called multiple times (if moved)</span>
                </li>
              </ul>
            </div>

            {/* disconnectedCallback() Rules */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>
                disconnectedCallback() Rules
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Clean up event listeners</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Clear intervals and timeouts</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Release resources (streams, connections)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Lightbulb className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>May not fire if page closes abruptly</span>
                </li>
              </ul>
            </div>

            {/* attributeChangedCallback() Rules */}
            <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-800'>
              <h3 className='font-semibold text-amber-700 dark:text-amber-300 mb-3'>
                attributeChangedCallback() Rules
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <Lightbulb className='w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0' />
                  <span>Must declare <code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>observedAttributes</code></span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0' />
                  <span>Called before <code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>connectedCallback()</code></span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0' />
                  <span>Check <code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>isConnected</code> before DOM work</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Lightbulb className='w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0' />
                  <span>Only watches listed attributes</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Info className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Callback Order
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              When an element with attributes is inserted: <strong>constructor → attributeChangedCallback (for each attribute) → connectedCallback</strong>. The <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>attributeChangedCallback</code> fires before <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>connectedCallback</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-5 h-5 text-emerald-600' />
            Best Practices
          </CardTitle>
          <CardDescription>Guidelines for effective lifecycle management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Do This */}
            <div className='space-y-3'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                Do This
              </h3>
              {[
                'Always call super() first in constructor',
                'Do initialization in connectedCallback, not constructor',
                'Clean up resources in disconnectedCallback',
                'Declare observedAttributes as static getter',
                'Check isConnected before DOM manipulation',
                'Handle multiple connected/disconnected cycles'
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                </div>
              ))}
            </div>

            {/* Avoid This */}
            <div className='space-y-3'>
              <h3 className='font-semibold text-red-700 dark:text-red-300 flex items-center gap-2'>
                <XCircle className='w-4 h-4' />
                Avoid This
              </h3>
              {[
                "Don't manipulate attributes in constructor",
                "Don't access children in constructor",
                "Don't forget to clean up event listeners",
                "Don't assume disconnectedCallback always fires",
                "Don't do heavy work in constructor",
                "Don't forget observedAttributes for reactive attributes"
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-2 text-sm'>
                  <XCircle className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0' />
                  <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-purple-600' />
            Browser Support
          </CardTitle>
          <CardDescription>Lifecycle callbacks support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Version</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Status</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', version: '54+', status: '✅', notes: 'Full support' },
                  { browser: 'Firefox', version: '63+', status: '✅', notes: 'Full support' },
                  { browser: 'Safari', version: '10.1+', status: '✅', notes: 'Full support' },
                  { browser: 'Edge', version: '79+', status: '✅', notes: 'Chromium-based' },
                  { browser: 'Opera', version: '41+', status: '✅', notes: 'Full support' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.version}</Badge>
                    </td>
                    <td className='py-3 px-4 text-2xl'>{row.status}</td>
                    <td className='py-3 px-4 text-slate-600 dark:text-slate-400 text-xs'>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <CheckCircle className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertTitle className='text-emerald-700 dark:text-emerald-300'>
              Excellent Browser Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Lifecycle callbacks are supported in all modern browsers as part of the Custom Elements v1 specification. They're safe to use in production without polyfills.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Lifecycle Playground</CardTitle>
          <CardDescription>Experiment with lifecycle callbacks and see them in action</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Lifecycle Callbacks Playground'
            description='Watch lifecycle callbacks execute in real-time'
            features={[
              'All Four Callbacks',
              'Real-time Logging',
              'Interactive Controls',
              'State Management'
            ]}
            buttonText='Open Lifecycle Playground'
            onLaunchPlayground={onOpenWebPlayground!}
            playgroundData={{
              html: demo.html,
              css: demo.css,
              js: demo.js
            }}
            colorTheme='blue'
          />
        </CardContent>
      </Card>
    </div>
  );
}
