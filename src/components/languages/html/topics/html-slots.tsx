'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Layers, 
  Info, 
  Code2, 
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Box,
  Zap,
  Package,
  Layout,
  Inbox
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlSlotsProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<!-- Define the custom element with slots -->
<user-card>
  <span slot="name">Sarah Johnson</span>
  <span slot="role">Senior Developer</span>
  <img slot="avatar" src="https://i.pravatar.cc/150?img=5" alt="Sarah">
  <p slot="bio">Passionate about clean code and modern web technologies.</p>
</user-card>

<user-card>
  <span slot="name">Mike Chen</span>
  <span slot="role">UX Designer</span>
  <img slot="avatar" src="https://i.pravatar.cc/150?img=7" alt="Mike">
</user-card>`,
  css: `user-card {
  display: block;
  margin: 1rem 0;
}`,
  js: `class UserCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    shadow.innerHTML = \`
      <style>
        .card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: \${isDark ? '#1e293b' : 'white'};
          border: 2px solid #3b82f6;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        ::slotted([slot="avatar"]) {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .info {
          flex: 1;
        }
        
        ::slotted([slot="name"]) {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          color: \${isDark ? '#e2e8f0' : '#1e293b'};
          margin-bottom: 0.25rem;
        }
        
        ::slotted([slot="role"]) {
          display: block;
          color: #3b82f6;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }
        
        ::slotted([slot="bio"]) {
          color: \${isDark ? '#94a3b8' : '#64748b'};
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }
      </style>
      
      <div class="card">
        <slot name="avatar"></slot>
        <div class="info">
          <slot name="name"></slot>
          <slot name="role"></slot>
          <slot name="bio">No bio provided</slot>
        </div>
      </div>
    \`;
  }
}

customElements.define('user-card', UserCard);`
};

export default function HtmlSlots({ onOpenWebPlayground }: HtmlSlotsProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Layers} 
        category='Web Components' 
        title='Slots & Content Projection' 
        description='Project external content into Web Components with flexible slot mechanisms'
        colorTheme='blue'
      />

      {/* What are Slots? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are Slots?
          </CardTitle>
          <CardDescription>
            Placeholders for external content in Shadow DOM
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            <strong>Slots</strong> are placeholders inside Shadow DOM that allow you to insert external content from the Light DOM. They enable <strong>content projection</strong>—letting users of your Web Component provide their own markup while you control the structure and styling. Think of slots as "holes" in your component where users can insert their content.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {/* Default Slot */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Inbox className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>
                  Default Slot
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Unnamed slot catches all content not assigned to named slots
              </p>
            </div>

            {/* Named Slots */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Package className='w-5 h-5 text-purple-600' />
                <h3 className='font-semibold text-purple-700 dark:text-purple-300'>
                  Named Slots
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Target specific content to specific slots using slot attribute
              </p>
            </div>

            {/* Fallback Content */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Layout className='w-5 h-5 text-emerald-600' />
                <h3 className='font-semibold text-emerald-700 dark:text-emerald-300'>
                  Fallback Content
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Default content shown when no content is provided for a slot
              </p>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Basic Slot Pattern
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<!-- Shadow DOM (inside component) -->
<div class="card">
  <slot name="title"></slot>
  <slot></slot> <!-- default slot -->
</div>

<!-- Light DOM (using component) -->
<my-card>
  <h2 slot="title">Card Title</h2>
  <p>This goes to the default slot</p>
</my-card>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Light DOM vs Shadow DOM
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Content lives in the <strong>Light DOM</strong> (regular DOM) but is <strong>projected</strong> into slots in the Shadow DOM. The content remains accessible and styleable from outside, but the component controls where it appears.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Slots Work - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            How Content Projection Works
          </CardTitle>
          <CardDescription>Understanding the slot projection mechanism</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
            <div className='space-y-4'>
              {[
                {
                  step: '1',
                  title: 'Light DOM Content',
                  desc: 'User provides content with slot attributes',
                  code: '<my-card>\n  <h2 slot="title">Hello</h2>\n  <p>Content</p>\n</my-card>',
                  color: 'blue'
                },
                {
                  step: '2',
                  title: 'Shadow DOM Structure',
                  desc: 'Component defines slots as placeholders',
                  code: '<div>\n  <slot name="title"></slot>\n  <slot></slot>\n</div>',
                  color: 'purple'
                },
                {
                  step: '3',
                  title: 'Slot Matching',
                  desc: 'Browser matches content to slots by name',
                  code: 'slot="title" → <slot name="title">',
                  color: 'emerald'
                },
                {
                  step: '4',
                  title: 'Content Projection',
                  desc: 'Content is visually projected into slots',
                  code: 'Rendered: <div>\n  <h2>Hello</h2>\n  <p>Content</p>\n</div>',
                  color: 'amber'
                }
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-950 border-2 border-${item.color}-500 flex items-center justify-center font-bold text-${item.color}-700 dark:text-${item.color}-300`}>
                    {item.step}
                  </div>
                  <div className='flex-1'>
                    <h4 className={`font-semibold text-${item.color}-700 dark:text-${item.color}-300 mb-1`}>
                      {item.title}
                    </h4>
                    <p className='text-sm text-slate-600 dark:text-slate-400 mb-2'>
                      {item.desc}
                    </p>
                    <pre className='text-xs bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 overflow-x-auto'>
                      {item.code}
                    </pre>
                  </div>
                  {index < 3 && (
                    <ArrowRight className='w-5 h-5 text-slate-400 absolute left-5 mt-12' />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                Key Concepts
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Content stays in Light DOM</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Slots are projection points</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Named slots target specific content</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Default slot catches unassigned content</span>
                </li>
              </ul>
            </div>

            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Zap className='w-4 h-4' />
                Benefits
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Flexible component composition</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Content remains accessible</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>SEO-friendly (content in Light DOM)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Easy to style from outside</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Default Slot */}
      <FrontendCodePreview
        title='Default Slot (Unnamed)'
        description='Simple slot that accepts any content'
        html={`<simple-card>
  <h2>Welcome to Web Components!</h2>
  <p>This content goes into the default slot.</p>
  <button>Learn More</button>
</simple-card>

<simple-card>
  <img src="https://picsum.photos/200/100" alt="Random">
  <p>Slots accept any HTML content!</p>
</simple-card>`}
        css={`simple-card {
  display: block;
  margin: 1rem 0;
}`}
        js={`class SimpleCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    shadow.innerHTML = \`
      <style>
        .card {
          padding: 1.5rem;
          background: \${isDark ? '#1e293b' : 'white'};
          border: 2px solid \${isDark ? '#334155' : '#e2e8f0'};
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        /* Style slotted content from inside shadow DOM */
        ::slotted(*) {
          margin: 0.5rem 0;
        }
        
        ::slotted(h2) {
          color: #3b82f6;
          font-size: 1.5rem;
        }
        
        ::slotted(p) {
          color: \${isDark ? '#94a3b8' : '#64748b'};
          line-height: 1.6;
        }
        
        ::slotted(button) {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
        }
        
        ::slotted(img) {
          width: 100%;
          border-radius: 6px;
        }
      </style>
      
      <div class="card">
        <!-- Default slot - accepts all content -->
        <slot></slot>
      </div>
    \`;
  }
}

customElements.define('simple-card', SimpleCard);`}
        colorTheme='blue'
        icon={Inbox}
        previewHeight='450px'
      />

      {/* Example 2: Named Slots */}
      <FrontendCodePreview
        title='Named Slots'
        description='Target specific content to specific locations'
        html={`<article-card>
  <h2 slot="title">Understanding Web Components</h2>
  <span slot="author">by Sarah Johnson</span>
  <span slot="date">November 29, 2024</span>
  
  <p>Web Components are a set of web platform APIs that allow you to create reusable custom elements.</p>
  <p>They provide true encapsulation and work across all modern frameworks.</p>
  
  <button slot="action">Read More</button>
</article-card>`}
        css={`article-card {
  display: block;
  margin: 1rem 0;
}`}
        js={`class ArticleCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    shadow.innerHTML = \`
      <style>
        .card {
          background: \${isDark ? '#1e293b' : 'white'};
          border: 2px solid \${isDark ? '#334155' : '#e2e8f0'};
          border-radius: 8px;
          padding: 1.5rem;
        }
        
        .header {
          border-bottom: 2px solid \${isDark ? '#334155' : '#e2e8f0'};
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        
        ::slotted([slot="title"]) {
          font-size: 1.75rem;
          font-weight: bold;
          color: \${isDark ? '#e2e8f0' : '#1e293b'};
          margin: 0 0 0.5rem 0;
        }
        
        .meta {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
          color: \${isDark ? '#94a3b8' : '#64748b'};
        }
        
        ::slotted([slot="author"]) {
          color: #3b82f6;
          font-weight: 600;
        }
        
        .content {
          margin: 1rem 0;
        }
        
        ::slotted(p) {
          color: \${isDark ? '#cbd5e1' : '#475569'};
          line-height: 1.6;
          margin: 0.75rem 0;
        }
        
        .footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 2px solid \${isDark ? '#334155' : '#e2e8f0'};
        }
        
        ::slotted([slot="action"]) {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }
      </style>
      
      <div class="card">
        <div class="header">
          <slot name="title"></slot>
          <div class="meta">
            <slot name="author"></slot>
            <slot name="date"></slot>
          </div>
        </div>
        
        <div class="content">
          <!-- Default slot for article content -->
          <slot></slot>
        </div>
        
        <div class="footer">
          <slot name="action"></slot>
        </div>
      </div>
    \`;
  }
}

customElements.define('article-card', ArticleCard);`}
        colorTheme='purple'
        icon={Package}
        previewHeight='550px'
      />

      {/* Example 3: Fallback Content */}
      <FrontendCodePreview
        title='Fallback Content'
        description='Default content shown when no content is provided'
        html={`<!-- Card with all slots filled -->
<profile-card>
  <img slot="avatar" src="https://i.pravatar.cc/150?img=3" alt="User">
  <span slot="name">Alex Morgan</span>
  <span slot="role">Product Manager</span>
  <p slot="bio">Building amazing products for amazing people.</p>
</profile-card>

<!-- Card with minimal content - fallbacks show -->
<profile-card>
  <span slot="name">Jamie Lee</span>
</profile-card>`}
        css={`profile-card {
  display: block;
  margin: 1rem 0;
}`}
        js={`class ProfileCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    
    shadow.innerHTML = \`
      <style>
        .card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
        }
        
        .avatar-wrapper ::slotted(img) {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid white;
        }
        
        /* Fallback avatar styling */
        .avatar-wrapper .default-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 3px solid white;
        }
        
        .info {
          flex: 1;
        }
        
        ::slotted([slot="name"]) {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        
        ::slotted([slot="role"]) {
          display: block;
          opacity: 0.9;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }
        
        /* Fallback role styling */
        .default-role {
          opacity: 0.7;
          font-style: italic;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }
        
        ::slotted([slot="bio"]) {
          opacity: 0.9;
          line-height: 1.6;
          font-size: 0.875rem;
          margin: 0;
        }
        
        /* Fallback bio styling */
        .default-bio {
          opacity: 0.7;
          font-style: italic;
          font-size: 0.875rem;
        }
      </style>
      
      <div class="card">
        <div class="avatar-wrapper">
          <slot name="avatar">
            <!-- Fallback: shown if no avatar provided -->
            <div class="default-avatar">👤</div>
          </slot>
        </div>
        
        <div class="info">
          <slot name="name">Anonymous User</slot>
          
          <slot name="role">
            <!-- Fallback: shown if no role provided -->
            <span class="default-role">Role not specified</span>
          </slot>
          
          <slot name="bio">
            <!-- Fallback: shown if no bio provided -->
            <p class="default-bio">No bio provided</p>
          </slot>
        </div>
      </div>
    \`;
  }
}

customElements.define('profile-card', ProfileCard);`}
        colorTheme='emerald'
        icon={Layout}
        previewHeight='550px'
      />

      {/* Example 4: Multiple Slots & Reordering */}
      <FrontendCodePreview
        title='Multiple Slots & Reordering'
        description='Slots let you control layout while users provide content'
        html={`<feature-card>
  <h3 slot="title">Fast Performance</h3>
  <p slot="description">Lightning-fast load times with optimized rendering.</p>
  <span slot="icon">⚡</span>
</feature-card>

<feature-card>
  <h3 slot="title">Secure by Default</h3>
  <p slot="description">Built-in security features protect your application.</p>
  <span slot="icon">🔒</span>
</feature-card>

<feature-card>
  <h3 slot="title">Easy to Use</h3>
  <p slot="description">Intuitive API makes development a breeze.</p>
  <span slot="icon">✨</span>
</feature-card>`}
        css={`feature-card {
  display: inline-block;
  width: calc(33.333% - 1rem);
  margin: 0.5rem;
  vertical-align: top;
}

@media (max-width: 768px) {
  feature-card {
    width: 100%;
    margin: 0.5rem 0;
  }
}`}
        js={`class FeatureCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    shadow.innerHTML = \`
      <style>
        .card {
          background: \${isDark ? '#1e293b' : 'white'};
          border: 2px solid \${isDark ? '#334155' : '#e2e8f0'};
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.2s;
          height: 100%;
        }
        
        .card:hover {
          border-color: #3b82f6;
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
          transform: translateY(-4px);
        }
        
        /* Icon appears FIRST even though in HTML it's LAST */
        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        ::slotted([slot="icon"]) {
          font-size: 3rem;
        }
        
        ::slotted([slot="title"]) {
          font-size: 1.25rem;
          font-weight: bold;
          color: \${isDark ? '#e2e8f0' : '#1e293b'};
          margin: 0 0 0.75rem 0;
        }
        
        ::slotted([slot="description"]) {
          color: \${isDark ? '#94a3b8' : '#64748b'};
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }
      </style>
      
      <div class="card">
        <!-- Note: Icon slot comes first in layout, 
             even though it's last in the HTML! -->
        <div class="icon">
          <slot name="icon">📦</slot>
        </div>
        
        <slot name="title">Feature Title</slot>
        <slot name="description">Feature description goes here.</slot>
      </div>
    \`;
  }
}

customElements.define('feature-card', FeatureCard);`}
        colorTheme='amber'
        icon={Box}
        previewHeight='450px'
      />

      {/* Slot JavaScript API */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code2 className='w-5 h-5 text-blue-600' />
            Slot JavaScript API
          </CardTitle>
          <CardDescription>Programmatically work with slots and slotted content</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Getting Slotted Elements */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>
                Getting Slotted Elements
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Get slot element
const slot = shadow.querySelector('slot');

// Get assigned elements
const elements = slot.assignedElements();

// Get assigned nodes (includes text)
const nodes = slot.assignedNodes();

// Check if slot has content
if (slot.assignedElements().length > 0) {
  console.log('Slot has content');
}`}</code>
              </pre>
            </div>

            {/* Slot Events */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>
                Slot Change Event
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`const slot = shadow.querySelector('slot');

// Listen for slot changes
slot.addEventListener('slotchange', (e) => {
  const assigned = slot.assignedElements();
  console.log('Slot changed:', assigned);
  
  // React to content changes
  if (assigned.length === 0) {
    // Show fallback message
  }
});`}</code>
              </pre>
            </div>

            {/* Named Slot Access */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>
                Access Named Slots
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Get specific named slot
const titleSlot = shadow
  .querySelector('slot[name="title"]');

const titleElements = 
  titleSlot.assignedElements();

// Get default slot
const defaultSlot = shadow
  .querySelector('slot:not([name])');`}</code>
              </pre>
            </div>

            {/* Get Assigned Slot */}
            <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-800'>
              <h3 className='font-semibold text-amber-700 dark:text-amber-300 mb-3'>
                Get Assigned Slot (from Light DOM)
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-amber-200 dark:border-amber-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// From Light DOM element
const element = 
  document.querySelector('h2');

// Find which slot it's assigned to
const slot = element.assignedSlot;

console.log('Assigned to:', 
  slot.name || 'default slot');`}</code>
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
          <CardDescription>Guidelines for effective slot usage</CardDescription>
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
                'Always provide fallback content for optional slots',
                'Use named slots for structured content',
                'Use ::slotted() to style projected content',
                'Keep slot names semantic and descriptive',
                'Document expected slot content in component docs',
                'Use slotchange event to react to content updates'
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
                "Don't use too many named slots (keep it simple)",
                "Don't forget ::slotted() has limited specificity",
                "Don't assume content will always be provided",
                "Don't try to style inside slotted elements deeply",
                "Don't use slots for data (use attributes instead)",
                "Don't rely on slot order in JavaScript"
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
          <CardDescription>Slot support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Slots</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>::slotted()</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', slots: '53+', slotted: '53+', notes: 'Full support' },
                  { browser: 'Firefox', slots: '63+', slotted: '63+', notes: 'Full support' },
                  { browser: 'Safari', slots: '10+', slotted: '10+', notes: 'Full support' },
                  { browser: 'Edge', slots: '79+', slotted: '79+', notes: 'Full support' },
                  { browser: 'Opera', slots: '40+', slotted: '40+', notes: 'Full support' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.slots}</Badge>
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
              Excellent Browser Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Slots and <code className='px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900 rounded'>::slotted()</code> are supported in all modern browsers. They're a core part of Web Components and work seamlessly across platforms.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Slots Playground</CardTitle>
          <CardDescription>Experiment with slots and content projection</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Slots & Content Projection Playground'
            description='Create flexible components with named and default slots'
            features={[
              'Named Slots',
              'Default Slots',
              'Fallback Content',
              '::slotted() Styling'
            ]}
            buttonText='Open Slots Playground'
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
