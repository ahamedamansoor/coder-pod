'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Lock, 
  Info, 
  Code2, 
  Eye,
  Shield,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Layers,
  EyeOff,
  Palette,
  Box
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlShadowDomProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<style>
  /* Global styles - won't affect shadow DOM */
  p { color: red; font-size: 20px; }
</style>

<p>This paragraph is styled globally (red, 20px)</p>

<shadow-card title="Encapsulated Card">
  <p>This paragraph is NOT affected by global styles</p>
  <p>Shadow DOM provides true style isolation!</p>
</shadow-card>`,
  css: `shadow-card {
  display: block;
  margin: 1rem 0;
}`,
  js: `class ShadowCard extends HTMLElement {
  connectedCallback() {
    // Create shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    
    const title = this.getAttribute('title') || 'Card';
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Shadow DOM with scoped styles
    shadow.innerHTML = \`
      <style>
        .card {
          border: 2px solid #3b82f6;
          border-radius: 12px;
          padding: 1.5rem;
          background: \${isDark ? '#1e293b' : 'white'};
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          margin: 0 0 1rem 0;
          color: #3b82f6;
          font-size: 1.5rem;
        }
        /* These styles are isolated */
        p {
          color: \${isDark ? '#e2e8f0' : '#1e293b'};
          font-size: 14px;
          line-height: 1.6;
        }
      </style>
      
      <div class="card">
        <h2>\${title}</h2>
        <slot></slot>
      </div>
    \`;
  }
}

customElements.define('shadow-card', ShadowCard);`
};

export default function HtmlShadowDom({ onOpenWebPlayground }: HtmlShadowDomProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Lock} 
        category='Web Components' 
        title='Shadow DOM' 
        description='Encapsulate styles and markup with true component isolation'
        colorTheme='blue'
      />

      {/* What is Shadow DOM? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What is Shadow DOM?
          </CardTitle>
          <CardDescription>
            Isolated DOM subtree with scoped styles and markup
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            <strong>Shadow DOM</strong> is a web standard that enables true encapsulation by creating a separate DOM tree that's attached to an element but isolated from the main document. Styles defined inside Shadow DOM don't leak out, and external styles don't leak in—providing the foundation for truly reusable components.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {/* Style Isolation */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Shield className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>
                  Style Isolation
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                CSS styles are scoped to the shadow tree—no conflicts!
              </p>
            </div>

            {/* DOM Encapsulation */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-3'>
                <EyeOff className='w-5 h-5 text-purple-600' />
                <h3 className='font-semibold text-purple-700 dark:text-purple-300'>
                  DOM Encapsulation
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Internal DOM structure is hidden from external scripts
              </p>
            </div>

            {/* Composition */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Layers className='w-5 h-5 text-emerald-600' />
                <h3 className='font-semibold text-emerald-700 dark:text-emerald-300'>
                  Composition
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Combine external content with internal markup using slots
              </p>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Why Shadow DOM?
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Without Shadow DOM, CSS styles can conflict across your entire page. Shadow DOM creates a <strong>protective boundary</strong> around your component, ensuring styles and DOM structure remain private and predictable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Shadow DOM Works - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            Shadow DOM Structure
          </CardTitle>
          <CardDescription>Understanding shadow roots and shadow trees</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
            <div className='space-y-4 font-mono text-sm'>
              <div className='flex items-start gap-3'>
                <div className='text-blue-600 dark:text-blue-400 font-semibold min-w-[120px]'>Document</div>
                <div className='flex-1'>
                  <div className='bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-700'>
                    <div className='text-slate-700 dark:text-slate-300'>
                      &lt;my-element&gt; <Badge className='ml-2 bg-slate-600'>Shadow Host</Badge>
                    </div>
                    <div className='ml-6 mt-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded border-2 border-purple-300 dark:border-purple-700'>
                      <div className='text-purple-700 dark:text-purple-300 font-semibold mb-2'>
                        #shadow-root <Badge className='ml-2 bg-purple-600'>Shadow Root</Badge>
                      </div>
                      <div className='ml-4 mt-2 space-y-2 text-sm'>
                        <div className='bg-white dark:bg-slate-950 p-2 rounded'>
                          &lt;style&gt; .card {'{ }'} &lt;/style&gt;
                        </div>
                        <div className='bg-white dark:bg-slate-950 p-2 rounded'>
                          &lt;div class="card"&gt;
                          <div className='ml-4 mt-1'>
                            &lt;slot&gt;&lt;/slot&gt;
                          </div>
                          &lt;/div&gt;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-3 gap-4'>
            {[
              {
                term: 'Shadow Host',
                desc: 'The regular DOM element that hosts the shadow tree',
                icon: Box,
                color: 'blue'
              },
              {
                term: 'Shadow Root',
                desc: 'The root of the shadow tree, attached to the host',
                icon: Layers,
                color: 'purple'
              },
              {
                term: 'Shadow Tree',
                desc: 'The DOM tree inside the shadow root (encapsulated)',
                icon: Shield,
                color: 'emerald'
              }
            ].map((item, index) => (
              <div key={index} className={`bg-${item.color}-50 dark:bg-${item.color}-950/20 p-4 rounded-lg border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <item.icon className={`w-5 h-5 text-${item.color}-600 mb-2`} />
                <h3 className={`font-semibold text-${item.color}-700 dark:text-${item.color}-300 mb-2`}>
                  {item.term}
                </h3>
                <p className='text-xs text-slate-600 dark:text-slate-400'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Creating Shadow DOM
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`// Attach shadow root to element
const shadowRoot = element.attachShadow({ mode: 'open' });

// Add content to shadow DOM
shadowRoot.innerHTML = \`
  <style>
    p { color: blue; }
  </style>
  <p>This is in the shadow DOM!</p>
\`;`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Shadow DOM Modes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Eye className='w-5 h-5 text-purple-600' />
            Shadow DOM Modes
          </CardTitle>
          <CardDescription>Open vs Closed shadow roots</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Open Mode */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <Badge className='bg-blue-600 hover:bg-blue-700 mb-3'>
                mode: "open"
              </Badge>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>
                Open Shadow Root
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
                Shadow root is accessible via element.shadowRoot
              </p>
              <div className='space-y-2 text-xs'>
                <div className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5' />
                  <span className='text-slate-700 dark:text-slate-300'>Can be accessed from outside</span>
                </div>
                <div className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5' />
                  <span className='text-slate-700 dark:text-slate-300'>Useful for debugging</span>
                </div>
                <div className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5' />
                  <span className='text-slate-700 dark:text-slate-300'>Most common choice</span>
                </div>
              </div>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700 mt-3'>
                <code className='text-slate-800 dark:text-slate-200'>{`attachShadow({ mode: 'open' })`}</code>
              </pre>
            </div>

            {/* Closed Mode */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <Badge className='bg-purple-600 hover:bg-purple-700 mb-3'>
                mode: "closed"
              </Badge>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-2'>
                Closed Shadow Root
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
                Shadow root is NOT accessible (returns null)
              </p>
              <div className='space-y-2 text-xs'>
                <div className='flex items-start gap-2'>
                  <XCircle className='w-4 h-4 text-purple-600 mt-0.5' />
                  <span className='text-slate-700 dark:text-slate-300'>Cannot access from outside</span>
                </div>
                <div className='flex items-start gap-2'>
                  <XCircle className='w-4 h-4 text-purple-600 mt-0.5' />
                  <span className='text-slate-700 dark:text-slate-300'>More encapsulated</span>
                </div>
                <div className='flex items-start gap-2'>
                  <Lightbulb className='w-4 h-4 text-purple-600 mt-0.5' />
                  <span className='text-slate-700 dark:text-slate-300'>Rarely needed</span>
                </div>
              </div>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700 mt-3'>
                <code className='text-slate-800 dark:text-slate-200'>{`attachShadow({ mode: 'closed' })`}</code>
              </pre>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>
              Recommendation
            </AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              Use <code className='px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900 rounded'>mode: "open"</code> in most cases. Closed mode doesn't provide true security and makes debugging harder. Real encapsulation comes from the shadow boundary itself, not the mode.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Example 1: Basic Shadow DOM */}
      <FrontendCodePreview
        title='Basic Shadow DOM'
        description='Simple component with style encapsulation'
        html={`<style>
  /* Global style - affects regular DOM */
  .message {
    color: red;
    font-size: 24px;
  }
</style>

<!-- Regular DOM element -->
<div class="message">Global Style: Red & Large</div>

<!-- Shadow DOM element -->
<styled-box></styled-box>`}
        css={`styled-box {
  display: block;
  margin: 1rem 0;
}`}
        js={`class StyledBox extends HTMLElement {
  connectedCallback() {
    // Create shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Add styles and content to shadow DOM
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const bgColor = isDark ? '#0f172a' : '#eff6ff';
    
    shadow.innerHTML = \`
      <style>
        /* These styles ONLY affect shadow DOM */
        .message {
          color: blue;
          font-size: 14px;
          padding: 1rem;
          border: 2px solid #3b82f6;
          border-radius: 8px;
          background: \${bgColor};
        }
      </style>
      
      <div class="message">
        Shadow DOM Style: Blue & Small
        <br>
        <small>Same class name, different styles!</small>
      </div>
    \`;
  }
}

customElements.define('styled-box', StyledBox);`}
        colorTheme='blue'
        icon={Lock}
        previewHeight='400px'
      />

      {/* Example 2: Style Isolation Demo */}
      <FrontendCodePreview
        title='Style Isolation in Action'
        description='Demonstrating complete style encapsulation'
        html={`<style>
  /* Global styles */
  h2 { color: red; }
  p { color: orange; font-size: 20px; }
  button { background: red; }
</style>

<div>
  <h2>Regular DOM (affected by global styles)</h2>
  <p>This text is orange and large</p>
  <button>Red Button</button>
</div>

<encapsulated-card>
  <h2>Inside Shadow DOM (NOT affected)</h2>
  <p>This text has its own styles</p>
  <button>Styled Button</button>
</encapsulated-card>`}
        css={`encapsulated-card {
  display: block;
  margin: 1rem 0;
}`}
        js={`class EncapsulatedCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hostBg = isDark ? '#0f172a' : '#f8fafc';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    
    shadow.innerHTML = \`
      <style>
        :host {
          display: block;
          padding: 1.5rem;
          background: \${hostBg};
          border-radius: 8px;
        }
        
        /* Shadow DOM has its own styles */
        h2 {
          color: #3b82f6;
          margin: 0 0 1rem 0;
        }
        
        p {
          color: \${textColor};
          font-size: 14px;
          line-height: 1.6;
        }
        
        button {
          background: #10b981;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
        }
        
        button:hover {
          background: #059669;
        }
      </style>
      
      <slot></slot>
    \`;
  }
}

customElements.define('encapsulated-card', EncapsulatedCard);`}
        colorTheme='purple'
        icon={Shield}
        previewHeight='500px'
      />

      {/* Example 3: :host Selectors */}
      <FrontendCodePreview
        title=':host Selector'
        description='Styling the shadow host element from inside shadow DOM'
        html={`<themed-button theme="primary">Primary Button</themed-button>
<themed-button theme="success">Success Button</themed-button>
<themed-button theme="danger">Danger Button</themed-button>

<p style="margin-top: 1rem;">Try hovering over the buttons!</p>`}
        css={`themed-button {
  display: inline-block;
  margin: 0.5rem;
}`}
        js={`class ThemedButton extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    
    shadow.innerHTML = \`
      <style>
        /* Style the host element itself */
        :host {
          display: inline-block;
          cursor: pointer;
        }
        
        /* Style host based on attributes */
        :host([theme="primary"]) button {
          background: #3b82f6;
          border-color: #2563eb;
        }
        
        :host([theme="success"]) button {
          background: #10b981;
          border-color: #059669;
        }
        
        :host([theme="danger"]) button {
          background: #ef4444;
          border-color: #dc2626;
        }
        
        /* Style host on hover */
        :host(:hover) button {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        button {
          padding: 0.75rem 1.5rem;
          color: white;
          border: 2px solid;
          border-radius: 8px;
          font-weight: 600;
          font-family: system-ui;
          transition: all 0.2s;
          cursor: pointer;
        }
      </style>
      
      <button>
        <slot></slot>
      </button>
    \`;
  }
}

customElements.define('themed-button', ThemedButton);`}
        colorTheme='emerald'
        icon={Palette}
        previewHeight='350px'
      />

      {/* Example 4: ::slotted Selector */}
      <FrontendCodePreview
        title='::slotted() Selector'
        description='Styling slotted content from inside shadow DOM'
        html={`<fancy-list>
  <li>First item - styled by ::slotted()</li>
  <li>Second item - styled by ::slotted()</li>
  <li>Third item - styled by ::slotted()</li>
</fancy-list>`}
        css={`fancy-list {
  display: block;
  margin: 1rem 0;
}`}
        js={`class FancyList extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hostBg = isDark ? '#0f172a' : '#f8fafc';
    const itemBg = isDark ? '#1e293b' : 'white';
    const hoverBg = isDark ? '#334155' : '#eff6ff';
    
    shadow.innerHTML = \`
      <style>
        :host {
          display: block;
          padding: 1.5rem;
          background: \${hostBg};
          border-radius: 8px;
        }
        
        h3 {
          margin: 0 0 1rem 0;
          color: #3b82f6;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        /* Style slotted list items */
        ::slotted(li) {
          padding: 0.75rem 1rem;
          margin: 0.5rem 0;
          background: \${itemBg};
          border-left: 4px solid #3b82f6;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        ::slotted(li:hover) {
          background: \${hoverBg};
          border-left-color: #2563eb;
          transform: translateX(4px);
        }
        
        /* Style first and last items differently */
        ::slotted(li:first-child) {
          border-left-color: #10b981;
        }
        
        ::slotted(li:last-child) {
          border-left-color: #f59e0b;
        }
      </style>
      
      <h3>📋 My List</h3>
      <ul>
        <slot></slot>
      </ul>
    \`;
  }
}

customElements.define('fancy-list', FancyList);`}
        colorTheme='amber'
        icon={Layers}
        previewHeight='400px'
      />

      {/* CSS Custom Properties (Variables) */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Palette className='w-5 h-5 text-blue-600' />
            CSS Custom Properties & Shadow DOM
          </CardTitle>
          <CardDescription>Theming with CSS variables that pierce shadow boundaries</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            While styles don't cross shadow boundaries, <strong>CSS Custom Properties (variables)</strong> do! This allows you to create themeable components that can be styled from outside while maintaining encapsulation.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>
                Inside Shadow DOM
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`<style>
  :host {
    /* Use CSS variables */
    background: var(--card-bg, white);
    color: var(--card-color, black);
    padding: var(--card-padding, 1rem);
  }
</style>`}</code>
              </pre>
            </div>

            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>
                Outside (Light DOM)
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`<style>
  my-card {
    /* Set CSS variables */
    --card-bg: #3b82f6;
    --card-color: white;
    --card-padding: 2rem;
  }
</style>`}</code>
              </pre>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Best Practice
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Always provide <strong>fallback values</strong> in your CSS variables using <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>var(--name, fallback)</code>. This ensures your component works even without external styling.
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
          <CardDescription>Guidelines for effective Shadow DOM usage</CardDescription>
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
                'Use Shadow DOM for true component encapsulation',
                'Prefer mode: "open" for better debugging',
                'Use CSS custom properties for theming',
                'Provide fallback values for variables',
                'Use :host selectors to style the host element',
                'Use ::slotted() to style slotted content'
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
                "Don't use mode: 'closed' unless absolutely necessary",
                "Don't expect global styles to work inside",
                "Don't try to style shadow DOM from outside (use CSS vars)",
                "Don't forget that JavaScript can still access open shadow roots",
                "Don't over-engineer with too many nested shadow DOMs",
                "Don't assume closed mode provides security"
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
          <CardDescription>Shadow DOM support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Shadow DOM v1</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>::slotted()</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', shadow: '53+', slotted: '53+', notes: 'Full support' },
                  { browser: 'Firefox', shadow: '63+', slotted: '63+', notes: 'Full support' },
                  { browser: 'Safari', shadow: '10.1+', slotted: '10.1+', notes: 'Full support' },
                  { browser: 'Edge', shadow: '79+', slotted: '79+', notes: 'Chromium-based' },
                  { browser: 'Opera', shadow: '40+', slotted: '40+', notes: 'Full support' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.shadow}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-purple-600 hover:bg-purple-700'>{row.slotted}</Badge>
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
              Excellent Modern Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Shadow DOM v1 is supported by all modern browsers. For older browser support, use the <code className='px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900 rounded'>@webcomponents/webcomponentsjs</code> polyfill.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Shadow DOM Playground</CardTitle>
          <CardDescription>Experiment with Shadow DOM and see style isolation in action</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Shadow DOM Playground'
            description='Create encapsulated components with isolated styles'
            features={[
              'Style Isolation',
              ':host Selectors',
              '::slotted() Styling',
              'CSS Variables'
            ]}
            buttonText='Open Shadow DOM Playground'
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
