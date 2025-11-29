'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Zap, 
  Info, 
  Code2, 
  Layers,
  Box,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Package,
  Eye,
  Lock,
  Puzzle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlWebComponentsIntroductionProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<!-- Define a simple web component -->
<my-greeting name="World"></my-greeting>

<script>
  class MyGreeting extends HTMLElement {
    connectedCallback() {
      const name = this.getAttribute('name') || 'Guest';
      const isDark = document.documentElement.classList.contains('dark');
      const bgColor = isDark ? '#1e293b' : '#3b82f6';
      
      this.innerHTML = \`
        <div style="padding: 1rem; background: \${bgColor}; color: white; border-radius: 8px; border: 2px solid #3b82f6;">
          <h2>Hello, \${name}! 👋</h2>
        </div>
      \`;
    }
  }
  
  customElements.define('my-greeting', MyGreeting);
</script>`,
  css: `my-greeting {
  display: block;
  margin: 1rem 0;
}`,
  js: ''
};

export default function HtmlWebComponentsIntroduction({ onOpenWebPlayground }: HtmlWebComponentsIntroductionProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Zap} 
        category='Web Components' 
        title='Web Components Introduction' 
        description='Build reusable, encapsulated custom elements with native browser APIs'
        colorTheme='blue'
      />

      {/* What are Web Components? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are Web Components?
          </CardTitle>
          <CardDescription>
            Native browser standard for creating reusable custom elements
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            <strong>Web Components</strong> are a set of web platform APIs that allow you to create custom, reusable, and encapsulated HTML tags for use in web pages and apps. Unlike framework-specific components, Web Components work natively in the browser without any libraries or frameworks—though they can be used with them too!
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {/* Custom Elements */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Box className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>
                  Custom Elements
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Define your own HTML tags with custom behavior
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700 mt-3'>
                &lt;my-button&gt;
              </code>
            </div>

            {/* Shadow DOM */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Lock className='w-5 h-5 text-purple-600' />
                <h3 className='font-semibold text-purple-700 dark:text-purple-300'>
                  Shadow DOM
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Encapsulate styles and markup from the main document
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700 mt-3'>
                attachShadow()
              </code>
            </div>

            {/* HTML Templates */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Layers className='w-5 h-5 text-emerald-600' />
                <h3 className='font-semibold text-emerald-700 dark:text-emerald-300'>
                  HTML Templates
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Reusable markup that isn't rendered until used
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700 mt-3'>
                &lt;template&gt;
              </code>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Why Use Web Components?
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Web Components are <strong>framework-agnostic</strong>, meaning they work with React, Vue, Angular, or vanilla JavaScript. They provide <strong>true encapsulation</strong> and are <strong>future-proof</strong> since they're built on web standards.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The Three Pillars */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Package className='w-5 h-5 text-purple-600' />
            The Three Pillars of Web Components
          </CardTitle>
          <CardDescription>Core technologies that make Web Components possible</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-3 gap-4'>
            {[
              {
                number: '1',
                icon: Code2,
                title: 'Custom Elements',
                desc: 'JavaScript API to define new HTML elements',
                features: ['Define custom tags', 'Extend native elements', 'Lifecycle callbacks'],
                color: 'blue'
              },
              {
                number: '2',
                icon: Lock,
                title: 'Shadow DOM',
                desc: 'Encapsulated DOM and styles',
                features: ['Style isolation', 'Markup encapsulation', 'True component boundaries'],
                color: 'purple'
              },
              {
                number: '3',
                icon: Layers,
                title: 'HTML Templates',
                desc: 'Reusable markup patterns',
                features: ['Inert content', 'Clone & reuse', 'Slot composition'],
                color: 'emerald'
              }
            ].map((pillar, index) => (
              <div key={index} className='relative'>
                <div className={`bg-${pillar.color}-50 dark:bg-${pillar.color}-950/20 p-4 rounded-lg border-2 border-${pillar.color}-200 dark:border-${pillar.color}-800 h-full`}>
                  <div className={`w-8 h-8 rounded-full bg-${pillar.color}-600 text-white flex items-center justify-center font-bold mb-3`}>
                    {pillar.number}
                  </div>
                  <pillar.icon className={`w-5 h-5 text-${pillar.color}-600 mb-2`} />
                  <h3 className={`font-semibold text-${pillar.color}-700 dark:text-${pillar.color}-300 mb-2`}>
                    {pillar.title}
                  </h3>
                  <p className='text-xs text-slate-600 dark:text-slate-400 mb-3'>
                    {pillar.desc}
                  </p>
                  <ul className='text-xs space-y-1'>
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start gap-1 text-slate-600 dark:text-slate-400'>
                        <span className={`text-${pillar.color}-500 mt-0.5`}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2'>
              <Info className='w-4 h-4 text-blue-600' />
              Working Together
            </h4>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              These three technologies work together: <strong>Custom Elements</strong> define the component behavior, <strong>Shadow DOM</strong> provides encapsulation, and <strong>Templates</strong> offer reusable markup patterns. You can use them individually or combine them for maximum power.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How Web Components Work - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            How Web Components Work
          </CardTitle>
          <CardDescription>From definition to usage in 4 steps</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-4 gap-3'>
            {[
              {
                step: '1',
                title: 'Define Class',
                desc: 'Extend HTMLElement',
                icon: Code2,
                color: 'blue'
              },
              {
                step: '2',
                title: 'Register Element',
                desc: 'customElements.define()',
                icon: Package,
                color: 'purple'
              },
              {
                step: '3',
                title: 'Use in HTML',
                desc: '<my-component>',
                icon: Box,
                color: 'emerald'
              },
              {
                step: '4',
                title: 'Browser Renders',
                desc: 'Lifecycle runs',
                icon: Eye,
                color: 'amber'
              }
            ].map((item, index) => (
              <div key={index} className='relative'>
                <div className={`bg-${item.color}-50 dark:bg-${item.color}-950/20 p-3 rounded-lg border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                  <div className={`w-6 h-6 rounded-full bg-${item.color}-600 text-white flex items-center justify-center font-bold text-sm mb-2`}>
                    {item.step}
                  </div>
                  <item.icon className={`w-4 h-4 text-${item.color}-600 mb-1`} />
                  <h3 className={`font-semibold text-${item.color}-700 dark:text-${item.color}-300 text-sm mb-1`}>
                    {item.title}
                  </h3>
                  <p className='text-xs text-slate-600 dark:text-slate-400'>
                    {item.desc}
                  </p>
                </div>
                {index < 3 && (
                  <ArrowRight className='hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10' />
                )}
              </div>
            ))}
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Basic Web Component Pattern
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`// 1. Define the component class
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Hello from Web Component!</p>';
  }
}

// 2. Register the custom element
customElements.define('my-component', MyComponent);

// 3. Use it in HTML
// <my-component></my-component>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Simple Custom Element */}
      <FrontendCodePreview
        title='Your First Web Component'
        description='Create a simple custom element without Shadow DOM'
        html={`<!-- Use the custom element -->
<hello-world></hello-world>
<hello-world name="Sarah"></hello-world>`}
        css={`hello-world {
  display: block;
  margin: 1rem 0;
  font-family: system-ui;
}`}
        js={`// Define the custom element class
class HelloWorld extends HTMLElement {
  // Called when element is inserted into DOM
  connectedCallback() {
    // Get the 'name' attribute or use default
    const name = this.getAttribute('name') || 'World';
    
    // Detect dark mode
    const isDark = document.documentElement.classList.contains('dark');
    const bgGradient = isDark 
      ? 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    
    // Set the element's content with dark mode support
    this.innerHTML = \`
      <div style="background: \${bgGradient}; padding: 1rem; border-radius: 8px;">
        <h2 style="margin: 0; font-size: 1.5rem; color: white;">👋 Hello, \${name}!</h2>
        <p style="margin: 0.5rem 0 0 0; color: rgba(255, 255, 255, 0.9);">This is a Web Component!</p>
      </div>
    \`;
  }
}

// Register the custom element
// Must use kebab-case name with a dash
customElements.define('hello-world', HelloWorld);`}
        colorTheme='blue'
        icon={Zap}
        previewHeight='350px'
      />

      {/* Example 2: Component with Shadow DOM */}
      <FrontendCodePreview
        title='Web Component with Shadow DOM'
        description='Encapsulated component with isolated styles'
        html={`<style>
  /* This style won't affect shadow DOM */
  p { color: red; }
</style>

<p>This paragraph is red (outside component)</p>

<!-- Shadow DOM component -->
<shadow-card title="Encapsulated Card">
  <p>This paragraph is NOT red (inside shadow DOM)</p>
</shadow-card>`}
        css={`shadow-card {
  display: block;
  margin: 1rem 0;
}`}
        js={`class ShadowCard extends HTMLElement {
  connectedCallback() {
    // Create shadow root for encapsulation
    const shadow = this.attachShadow({ mode: 'open' });
    
    const title = this.getAttribute('title') || 'Card';
    const isDark = document.documentElement.classList.contains('dark');
    const bgColor = isDark ? '#1e293b' : 'white';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    
    // Set shadow DOM content with scoped styles
    shadow.innerHTML = \`
      <style>
        :host {
          display: block;
        }
        .card {
          border: 2px solid #3b82f6;
          border-radius: 8px;
          padding: 1.5rem;
          background: \${bgColor};
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h3 {
          margin: 0 0 1rem 0;
          color: #3b82f6;
        }
        /* Styles are isolated to shadow DOM */
        p {
          color: \${textColor};
          line-height: 1.6;
        }
      </style>
      
      <div class="card">
        <h3>\${title}</h3>
        <slot></slot>
      </div>
    \`;
  }
}

customElements.define('shadow-card', ShadowCard);`}
        colorTheme='purple'
        icon={Lock}
        previewHeight='450px'
      />

      {/* Example 3: Component with Template */}
      <FrontendCodePreview
        title='Using HTML Templates'
        description='Reusable markup with <template> element'
        html={`<!-- Define template once -->
<template id="user-card-template">
  <style>
    .user-card {
      border: 2px solid #10b981;
      border-radius: 8px;
      padding: 1rem;
      background: #f0fdf4;
      margin: 0.5rem 0;
    }
    .user-name {
      font-size: 1.25rem;
      font-weight: bold;
      color: #065f46;
    }
    .user-email {
      color: #047857;
      font-size: 0.875rem;
    }
  </style>
  <div class="user-card">
    <div class="user-name"></div>
    <div class="user-email"></div>
  </div>
</template>

<!-- Web component will use the template -->
<user-card name="Alice Johnson" email="alice@example.com"></user-card>
<user-card name="Bob Smith" email="bob@example.com"></user-card>`}
        css={`user-card {
  display: block;
}`}
        js={`class UserCard extends HTMLElement {
  connectedCallback() {
    // Get the template
    const template = document.getElementById('user-card-template');
    
    // Clone the template content
    const content = template.content.cloneNode(true);
    
    // Populate with data from attributes
    content.querySelector('.user-name').textContent = 
      this.getAttribute('name');
    content.querySelector('.user-email').textContent = 
      this.getAttribute('email');
    
    // Add dark mode support
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      const style = content.querySelector('style');
      style.textContent += \`
        .user-card {
          background: #064e3b !important;
        }
        .user-name {
          color: #6ee7b7 !important;
        }
        .user-email {
          color: #34d399 !important;
        }
      \`;
    }
    
    // Create shadow DOM and append template
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(content);
  }
}

customElements.define('user-card', UserCard);`}
        colorTheme='emerald'
        icon={Layers}
        previewHeight='450px'
      />

      {/* Example 4: Interactive Component */}
      <FrontendCodePreview
        title='Interactive Counter Component'
        description='Stateful component with event handling'
        html={`<counter-button></counter-button>
<counter-button initial="10"></counter-button>`}
        css={`counter-button {
  display: inline-block;
  margin: 0.5rem;
}`}
        js={`class CounterButton extends HTMLElement {
  constructor() {
    super();
    // Initialize state
    this.count = parseInt(this.getAttribute('initial')) || 0;
  }
  
  connectedCallback() {
    // Create shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Detect dark mode
    const isDark = document.documentElement.classList.contains('dark');
    const buttonBg = isDark ? '#422006' : 'white';
    const buttonColor = isDark ? '#fcd34d' : '#000';
    const buttonHover = isDark ? '#78350f' : '#fef3c7';
    
    shadow.innerHTML = \`
      <style>
        .counter {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: #f59e0b;
          border-radius: 8px;
          font-family: system-ui;
        }
        button {
          background: \${buttonBg};
          color: \${buttonColor};
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: bold;
          transition: all 0.2s;
        }
        button:hover {
          background: \${buttonHover};
          transform: scale(1.1);
        }
        .count {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          min-width: 40px;
          text-align: center;
        }
      </style>
      
      <div class="counter">
        <button class="decrement">−</button>
        <span class="count">\${this.count}</span>
        <button class="increment">+</button>
      </div>
    \`;
    
    // Add event listeners
    shadow.querySelector('.increment').addEventListener('click', () => {
      this.count++;
      this.render();
    });
    
    shadow.querySelector('.decrement').addEventListener('click', () => {
      this.count--;
      this.render();
    });
  }
  
  render() {
    const countEl = this.shadowRoot.querySelector('.count');
    countEl.textContent = this.count;
  }
}

customElements.define('counter-button', CounterButton);`}
        colorTheme='amber'
        icon={Puzzle}
        previewHeight='350px'
      />

      {/* Benefits & Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-5 h-5 text-emerald-600' />
            Benefits of Web Components
          </CardTitle>
          <CardDescription>Why choose Web Components for your project</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Benefits */}
            <div className='space-y-3'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                Key Benefits
              </h3>
              {[
                'Framework-agnostic - works everywhere',
                'True encapsulation with Shadow DOM',
                'Native browser support - no dependencies',
                'Reusable across projects and teams',
                'Standards-based and future-proof',
                'Interoperable with existing code'
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className='space-y-3'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2'>
                <Lightbulb className='w-4 h-4' />
                Common Use Cases
              </h3>
              {[
                'Design system components',
                'Shareable UI widgets',
                'Third-party embeddable widgets',
                'Micro-frontends architecture',
                'Cross-framework component libraries',
                'Browser extension UI elements'
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-2 text-sm'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                </div>
              ))}
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
          <CardDescription>Guidelines for building effective Web Components</CardDescription>
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
                'Use kebab-case names with a dash (my-component)',
                'Always use Shadow DOM for style encapsulation',
                'Provide clear attribute names and defaults',
                'Document your component API thoroughly',
                'Handle lifecycle callbacks properly',
                'Make components accessible with ARIA'
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
                "Don't manipulate DOM outside your component",
                "Don't forget to clean up event listeners",
                "Don't use global styles for component internals",
                "Don't ignore browser compatibility needs",
                "Don't make components too large or complex"
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
          <CardDescription>Web Components support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Custom Elements</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Shadow DOM</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Templates</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', custom: '54+', shadow: '53+', template: '26+' },
                  { browser: 'Firefox', custom: '63+', shadow: '63+', template: '22+' },
                  { browser: 'Safari', custom: '10.1+', shadow: '10.1+', template: '9+' },
                  { browser: 'Edge', custom: '79+', shadow: '79+', template: '15+' },
                  { browser: 'Opera', custom: '41+', shadow: '40+', template: '15+' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.custom}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-purple-600 hover:bg-purple-700'>{row.shadow}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-emerald-600 hover:bg-emerald-700'>{row.template}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <CheckCircle className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertTitle className='text-emerald-700 dark:text-emerald-300'>
              Excellent Modern Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              All modern browsers fully support Web Components. For older browsers, polyfills are available from the <code className='px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900 rounded'>@webcomponents/webcomponentsjs</code> package.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Web Components Playground</CardTitle>
          <CardDescription>Experiment with Web Components and see them in action</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Web Components Playground'
            description='Build your first custom element and explore Web Components'
            features={[
              'Custom Elements',
              'Shadow DOM',
              'HTML Templates',
              'Interactive Examples'
            ]}
            buttonText='Open Web Components Playground'
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
