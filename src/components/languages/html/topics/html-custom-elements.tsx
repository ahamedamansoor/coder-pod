'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared';
import { FrontendCodePreview } from '@/components/shared';
import { Component, Code, Sparkles, CheckCircle, AlertCircle, Info, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlCustomElementsProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<!-- Use custom element -->
<user-profile 
  name="John Doe" 
  email="john@example.com"
  avatar="https://i.pravatar.cc/150?img=1">
</user-profile>`,
  css: `user-profile {
  display: block;
  margin: 1rem 0;
}`,
  js: `class UserProfile extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const email = this.getAttribute('email');
    const avatar = this.getAttribute('avatar');
    
    const isDark = document.documentElement.classList.contains('dark');
    const bgColor = isDark ? '#1e293b' : 'white';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const mutedColor = isDark ? '#94a3b8' : '#64748b';
    
    this.innerHTML = \`
      <div style="border: 2px solid #3b82f6; padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; align-items: center; background: \${bgColor};">
        <img src="\${avatar}" alt="\${name}" style="width: 60px; height: 60px; border-radius: 50%;">
        <div>
          <h3 style="margin: 0; color: \${textColor};">\${name}</h3>
          <p style="margin: 0.25rem 0 0; color: \${mutedColor};">\${email}</p>
        </div>
      </div>
    \`;
  }
}

customElements.define('user-profile', UserProfile);`
};

export default function HtmlCustomElements({ onOpenWebPlayground }: HtmlCustomElementsProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Box} 
        category='12. Web Components' 
        title='Custom Elements' 
        description='Create your own HTML tags with custom behavior using native JavaScript APIs'
        colorTheme='blue'
      />

      {/* What are Custom Elements? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are Custom Elements?
          </CardTitle>
          <CardDescription>
            Define your own reusable HTML tags with JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            <strong>Custom Elements</strong> are a web standard that allows you to define your own HTML tags with custom behavior. They're one of the core technologies behind Web Components. Once defined, custom elements work just like built-in HTML elements—you can use them in your markup, style them with CSS, and they have their own lifecycle methods.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Features Card */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Zap className='w-4 h-4' />
                Key Features
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Custom tag names</strong> - Create your own elements</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Lifecycle callbacks</strong> - React to element changes</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Attributes & properties</strong> - Accept configuration</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Extend native elements</strong> - Build on existing tags</span>
                </li>
              </ul>
            </div>

            {/* Benefits Card */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Package className='w-4 h-4' />
                Benefits
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Reusable across projects</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Framework-independent</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Self-contained components</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Native browser support</span>
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
              <code className='text-slate-800 dark:text-slate-200'>{`// 1. Define the class
class MyElement extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Hello, Custom Element!';
  }
}

// 2. Register the element
customElements.define('my-element', MyElement);

// 3. Use in HTML
// <my-element></my-element>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Naming Rules
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Custom element names <strong>must contain a hyphen (-)</strong> to distinguish them from standard HTML elements. Examples: <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>my-button</code>, <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>user-card</code>, <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>app-header</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Lifecycle Callbacks */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <RefreshCw className='w-5 h-5 text-purple-600' />
            Lifecycle Callbacks
          </CardTitle>
          <CardDescription>React to element changes throughout its lifetime</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-4'>
            {[
              {
                name: 'connectedCallback',
                desc: 'Called when element is inserted into the DOM',
                use: 'Initialize, fetch data, add listeners',
                color: 'blue'
              },
              {
                name: 'disconnectedCallback',
                desc: 'Called when element is removed from the DOM',
                use: 'Cleanup, remove listeners, cancel timers',
                color: 'purple'
              },
              {
                name: 'attributeChangedCallback',
                desc: 'Called when an observed attribute changes',
                use: 'React to attribute updates, re-render',
                color: 'emerald'
              },
              {
                name: 'adoptedCallback',
                desc: 'Called when element is moved to new document',
                use: 'Handle document context changes',
                color: 'amber'
              }
            ].map((callback, index) => (
              <div key={index} className={`bg-${callback.color}-50 dark:bg-${callback.color}-950/20 p-4 rounded-lg border-2 border-${callback.color}-200 dark:border-${callback.color}-800`}>
                <code className={`text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-${callback.color}-200 dark:border-${callback.color}-700 text-${callback.color}-700 dark:text-${callback.color}-300 font-mono`}>
                  {callback.name}()
                </code>
                <p className='text-sm mt-3 text-slate-700 dark:text-slate-300 font-semibold'>
                  {callback.desc}
                </p>
                <p className='text-xs mt-2 text-slate-600 dark:text-slate-400'>
                  <strong>Common use:</strong> {callback.use}
                </p>
              </div>
            ))}
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2'>
              <Info className='w-4 h-4 text-blue-600' />
              Lifecycle Example
            </h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`class MyElement extends HTMLElement {
  // Specify which attributes to observe
  static get observedAttributes() {
    return ['color', 'size'];
  }
  
  connectedCallback() {
    console.log('Element added to page');
    this.render();
  }
  
  disconnectedCallback() {
    console.log('Element removed from page');
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`Attribute \${name} changed from \${oldValue} to \${newValue}\`);
    this.render();
  }
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Custom Element */}
      <FrontendCodePreview
        title='Basic Custom Element'
        description='Simple custom element with lifecycle callbacks'
        html={`<!-- Use the custom element multiple times -->
<greeting-card name="Alice"></greeting-card>
<greeting-card name="Bob"></greeting-card>
<greeting-card></greeting-card>`}
        css={`greeting-card {
  display: block;
  margin: 1rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-family: system-ui;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

greeting-card h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

greeting-card p {
  margin: 0;
  opacity: 0.9;
}`}
        js={`class GreetingCard extends HTMLElement {
  // Called when element is added to DOM
  connectedCallback() {
    // Get attribute or use default
    const name = this.getAttribute('name') || 'Guest';
    
    // Set the content
    this.innerHTML = \`
      <h2>👋 Hello, \${name}!</h2>
      <p>Welcome to Custom Elements</p>
    \`;
    
    console.log('GreetingCard connected:', name);
  }
  
  // Called when element is removed from DOM
  disconnectedCallback() {
    console.log('GreetingCard disconnected');
  }
}

// Register the custom element
// Name MUST contain a hyphen (-)
customElements.define('greeting-card', GreetingCard);`}
        colorTheme='blue'
        icon={Box}
        previewHeight='450px'
      />

      {/* Example 2: Attributes and Properties */}
      <FrontendCodePreview
        title='Reactive Attributes'
        description='Custom element that responds to attribute changes'
        html={`<color-box color="blue" size="large">
  This box is blue and large
</color-box>

<div style="margin-top: 1rem;">
  <button onclick="changeColor()">Change Color</button>
  <button onclick="changeSize()">Change Size</button>
</div>`}
        css={`color-box {
  display: block;
  padding: 1.5rem;
  border-radius: 8px;
  font-family: system-ui;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background: #2563eb;
}`}
        js={`class ColorBox extends HTMLElement {
  // Declare which attributes to observe
  static get observedAttributes() {
    return ['color', 'size'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  // Called whenever an observed attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`\${name} changed from \${oldValue} to \${newValue}\`);
    this.render();
  }
  
  render() {
    const color = this.getAttribute('color') || 'gray';
    const size = this.getAttribute('size') || 'medium';
    
    // Color mapping
    const colors = {
      blue: '#3b82f6',
      red: '#ef4444',
      green: '#10b981',
      purple: '#8b5cf6'
    };
    
    // Size mapping
    const sizes = {
      small: '100px',
      medium: '150px',
      large: '200px'
    };
    
    this.style.backgroundColor = colors[color] || colors.blue;
    this.style.width = sizes[size] || sizes.medium;
    this.style.height = sizes[size] || sizes.medium;
  }
}

customElements.define('color-box', ColorBox);

// Helper functions to change attributes
const box = document.querySelector('color-box');
const colors = ['blue', 'red', 'green', 'purple'];
const sizes = ['small', 'medium', 'large'];
let colorIndex = 0;
let sizeIndex = 1;

function changeColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  box.setAttribute('color', colors[colorIndex]);
}

function changeSize() {
  sizeIndex = (sizeIndex + 1) % sizes.length;
  box.setAttribute('size', sizes[sizeIndex]);
}`}
        colorTheme='purple'
        icon={Settings}
        previewHeight='450px'
      />

      {/* Example 3: Properties vs Attributes */}
      <FrontendCodePreview
        title='Properties vs Attributes'
        description='Understanding the difference between attributes and properties'
        html={`<user-badge id="myBadge" username="johndoe" role="admin"></user-badge>

<div style="margin-top: 1rem;">
  <button onclick="updateViaAttribute()">Update via Attribute</button>
  <button onclick="updateViaProperty()">Update via Property</button>
  <button onclick="showData()">Show Data</button>
</div>

<pre id="output"></pre>`}
        css={`user-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f59e0b;
  color: white;
  border-radius: 8px;
  font-family: system-ui;
  font-weight: 600;
}

pre#output {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
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
        js={`class UserBadge extends HTMLElement {
  static get observedAttributes() {
    return ['username', 'role'];
  }
  
  constructor() {
    super();
    // Initialize internal property
    this._data = { count: 0 };
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  
  // Property getter/setter (not reflected in HTML)
  get userData() {
    return this._data;
  }
  
  set userData(value) {
    this._data = value;
    console.log('Property updated:', this._data);
  }
  
  render() {
    const username = this.getAttribute('username') || 'guest';
    const role = this.getAttribute('role') || 'user';
    
    this.textContent = \`👤 \${username} (\${role})\`;
  }
}

customElements.define('user-badge', UserBadge);

const badge = document.getElementById('myBadge');
const output = document.getElementById('output');

// Apply dark mode styling
const isDark = document.documentElement.classList.contains('dark');
output.style.background = isDark ? '#0f172a' : '#f1f5f9';
output.style.color = isDark ? '#e2e8f0' : '#1e293b';

// Attributes are reflected in HTML
function updateViaAttribute() {
  badge.setAttribute('username', 'jane_doe');
  badge.setAttribute('role', 'editor');
  output.textContent = 'Updated via setAttribute()\\nCheck HTML to see changes!';
}

// Properties are JavaScript-only
function updateViaProperty() {
  badge.userData = { count: Math.floor(Math.random() * 100) };
  output.textContent = 'Updated property (not visible in HTML)\\nData: ' + JSON.stringify(badge.userData);
}

function showData() {
  output.textContent = \`
Attribute username: \${badge.getAttribute('username')}
Attribute role: \${badge.getAttribute('role')}
Property userData: \${JSON.stringify(badge.userData)}
  \`;
}`}
        colorTheme='emerald'
        icon={Settings}
        previewHeight='550px'
      />

      {/* Example 4: Extending Built-in Elements */}
      <FrontendCodePreview
        title='Extending Built-in Elements'
        description='Enhance existing HTML elements with custom behavior'
        html={`<!-- Extended button with custom behavior -->
<button is="fancy-button" data-icon="✨">
  Click Me!
</button>

<button is="fancy-button" data-icon="🚀">
  Launch
</button>

<button is="fancy-button" data-icon="💾">
  Save
</button>`}
        css={`button[is="fancy-button"] {
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  font-family: system-ui;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

button[is="fancy-button"]:hover {
  background: #3b82f6 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

button[is="fancy-button"]:active {
  transform: translateY(0);
}`}
        js={`class FancyButton extends HTMLButtonElement {
  connectedCallback() {
    const icon = this.dataset.icon || '⭐';
    
    // Apply dark mode styling
    const isDark = document.documentElement.classList.contains('dark');
    this.style.background = isDark ? '#1e293b' : 'white';
    this.style.color = isDark ? '#60a5fa' : '#3b82f6';
    
    // Add icon before text
    const text = this.textContent;
    this.textContent = \`\${icon} \${text}\`;
    
    // Add click animation
    this.addEventListener('click', () => {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
      
      // Show feedback
      const originalText = this.textContent;
      this.textContent = '✓ Done!';
      setTimeout(() => {
        this.textContent = originalText;
      }, 1000);
    });
  }
}

// Use { extends: 'button' } to extend built-in element
customElements.define('fancy-button', FancyButton, { extends: 'button' });`}
        colorTheme='amber'
        icon={Zap}
        previewHeight='350px'
      />

      {/* Autonomous vs Customized Elements */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Layers className='w-5 h-5 text-blue-600' />
            Two Types of Custom Elements
          </CardTitle>
          <CardDescription>Autonomous vs Customized built-in elements</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Autonomous */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <Badge className='bg-blue-600 hover:bg-blue-700 mb-3'>
                Autonomous
              </Badge>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>
                Standalone Elements
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
                Completely new elements that extend HTMLElement
              </p>
              <div className='space-y-2 text-xs'>
                <div className='bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                  <strong className='text-blue-600'>Define:</strong>
                  <code className='block mt-1 text-slate-700 dark:text-slate-300'>
                    class extends HTMLElement
                  </code>
                </div>
                <div className='bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                  <strong className='text-blue-600'>Register:</strong>
                  <code className='block mt-1 text-slate-700 dark:text-slate-300'>
                    define('my-element', MyElement)
                  </code>
                </div>
                <div className='bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                  <strong className='text-blue-600'>Use:</strong>
                  <code className='block mt-1 text-slate-700 dark:text-slate-300'>
                    &lt;my-element&gt;&lt;/my-element&gt;
                  </code>
                </div>
              </div>
            </div>

            {/* Customized */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <Badge className='bg-purple-600 hover:bg-purple-700 mb-3'>
                Customized Built-in
              </Badge>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-2'>
                Enhanced Native Elements
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
                Extend existing HTML elements with new features
              </p>
              <div className='space-y-2 text-xs'>
                <div className='bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700'>
                  <strong className='text-purple-600'>Define:</strong>
                  <code className='block mt-1 text-slate-700 dark:text-slate-300'>
                    class extends HTMLButtonElement
                  </code>
                </div>
                <div className='bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700'>
                  <strong className='text-purple-600'>Register:</strong>
                  <code className='block mt-1 text-slate-700 dark:text-slate-300'>
                    define('x', X, {'{extends: "button"}'})
                  </code>
                </div>
                <div className='bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700'>
                  <strong className='text-purple-600'>Use:</strong>
                  <code className='block mt-1 text-slate-700 dark:text-slate-300'>
                    &lt;button is="x"&gt;&lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>
              Which to Choose?
            </AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              Use <strong>autonomous elements</strong> for new components with unique functionality. Use <strong>customized built-in elements</strong> when you want to enhance existing HTML elements while keeping their native features (accessibility, form participation, etc.).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Custom Elements Registry */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Package className='w-5 h-5 text-purple-600' />
            Custom Elements Registry
          </CardTitle>
          <CardDescription>Managing and querying custom elements</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Define */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>
                Define Elements
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Register custom element
customElements.define(
  'my-element',
  MyElementClass
);

// Check if already defined
if (!customElements.get('my-element')) {
  customElements.define('my-element', MyElementClass);
}`}</code>
              </pre>
            </div>

            {/* Query */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>
                Query Elements
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Get element class
const MyClass = customElements.get('my-element');

// Wait for definition
customElements.whenDefined('my-element')
  .then(() => {
    console.log('Element is defined!');
  });`}</code>
              </pre>
            </div>

            {/* Upgrade */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>
                Upgrade Elements
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Manually upgrade element
const el = document.createElement('my-element');
customElements.upgrade(el);

// Check if upgraded
console.log(el instanceof MyElementClass);`}</code>
              </pre>
            </div>

            {/* Create */}
            <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-800'>
              <h3 className='font-semibold text-amber-700 dark:text-amber-300 mb-3'>
                Create Elements
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-amber-200 dark:border-amber-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Create via constructor
const el = new MyElementClass();

// Create via createElement
const el2 = document.createElement('my-element');

// Both are equivalent`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-5 h-5 text-emerald-600' />
            Best Practices
          </CardTitle>
          <CardDescription>Guidelines for building effective custom elements</CardDescription>
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
                'Use kebab-case names with a dash (my-element)',
                'Define observedAttributes for reactive attributes',
                'Clean up in disconnectedCallback (listeners, timers)',
                'Use Shadow DOM for style encapsulation',
                'Provide fallback content for unsupported browsers',
                'Make elements accessible with proper ARIA'
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
                "Don't use single-word names (must have dash)",
                "Don't work in the constructor (use connectedCallback)",
                "Don't forget to call super() in constructor",
                "Don't manipulate children before connectedCallback",
                "Don't throw errors in lifecycle callbacks",
                "Don't make elements overly complex"
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
          <CardDescription>Custom Elements support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Autonomous</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Customized Built-in</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', autonomous: '54+', customized: '67+', notes: 'Full support' },
                  { browser: 'Firefox', autonomous: '63+', customized: '63+', notes: 'Full support' },
                  { browser: 'Safari', autonomous: '10.1+', customized: '❌', notes: 'No customized built-in' },
                  { browser: 'Edge', autonomous: '79+', customized: '79+', notes: 'Full support' },
                  { browser: 'Opera', autonomous: '41+', customized: '54+', notes: 'Full support' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.autonomous}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      {row.customized === '❌' ? (
                        <Badge className='bg-red-600 hover:bg-red-700'>{row.customized}</Badge>
                      ) : (
                        <Badge className='bg-purple-600 hover:bg-purple-700'>{row.customized}</Badge>
                      )}
                    </td>
                    <td className='py-3 px-4 text-slate-600 dark:text-slate-400 text-xs'>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <CheckCircle className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertTitle className='text-emerald-700 dark:text-emerald-300'>
              Good Browser Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Custom Elements have excellent support in all modern browsers. <strong>Note:</strong> Safari doesn't support customized built-in elements, so stick to autonomous elements for maximum compatibility, or use polyfills.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Custom Elements Playground</CardTitle>
          <CardDescription>Experiment with custom elements and see them in action</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Custom Elements Playground'
            description='Build your own custom HTML elements with lifecycle callbacks'
            features={[
              'Define Custom Tags',
              'Lifecycle Callbacks',
              'Reactive Attributes',
              'Real-Time Updates'
            ]}
            buttonText='Open Custom Elements Playground'
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
