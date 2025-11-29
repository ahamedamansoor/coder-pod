'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, ListChecks, Play, Code, CheckCircle, XCircle, Lightbulb, Globe, ChevronDown, ChevronRight, Settings, ArrowRight, Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlDetailsAndSummaryProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<details open>
  <summary>Accessible Disclosure</summary>
  <p>This content is expanded by default using the 'open' attribute.</p>
</details>
<details>
  <summary>Another Item</summary>
  <p>Hidden until clicked. Great for FAQs.</p>
</details>`,
  css: `body{font-family:system-ui;padding:1rem}details{border:1px solid #cbd5e1;padding:.5rem 1rem;margin:.5rem 0;border-radius:8px;background:#f8fafc}summary{cursor:pointer;font-weight:600}details[open]{background:#e0f2fe;border-color:#38bdf8}`,
  js: `// No JS needed for basic toggle behavior.`
};

export default function HtmlDetailsAndSummary({ onOpenWebPlayground }: HtmlDetailsAndSummaryProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={ChevronDown} 
        category='HTML Basics' 
        title='Details & Summary Elements' 
        description='Native collapsible disclosure widgets without JavaScript'
        colorTheme='blue'
      />

      {/* What are Details & Summary? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are Details & Summary Elements?
          </CardTitle>
          <CardDescription>Native HTML elements for creating collapsible/expandable content</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;details&gt;</code> and <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;summary&gt;</code> elements provide a <strong>native disclosure widget</strong> - no JavaScript required! Perfect for FAQs, accordion menus, and progressive disclosure.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Details Element */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <ChevronDown className='w-4 h-4' />
                &lt;details&gt; Element
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Container</strong> for collapsible content</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Manages state</strong> (open/closed)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Keyboard accessible</strong> by default</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>No JavaScript required</span>
                </li>
              </ul>
            </div>
            
            {/* Summary Element */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <ChevronRight className='w-4 h-4' />
                &lt;summary&gt; Element
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>Clickable heading</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>First child</strong> of details</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>Acts as button</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Always visible</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Basic Structure</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<details>
  <summary>Click to expand</summary>
  <p>This content is hidden by default.</p>
  <p>It shows when you click the summary.</p>
</details>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Details & Summary?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Zero JavaScript</strong> needed for basic functionality. <strong>Native accessibility</strong> with keyboard support and screen reader announcements. Perfect for FAQs, help sections, and progressive disclosure!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5 text-purple-600' />
            The open Attribute
          </CardTitle>
          <CardDescription>Control the initial state of the details element</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
            <div className='flex items-center gap-2 mb-3'>
              <Badge className='bg-purple-600 hover:bg-purple-700'>open</Badge>
              <span className='text-xs text-slate-600 dark:text-slate-400'>(boolean attribute)</span>
            </div>
            <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
              When present, the details element is <strong>expanded by default</strong>. When absent, it starts collapsed.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <h4 className='text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2'>Closed (Default)</h4>
                <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700'>
                  &lt;details&gt;
                </code>
              </div>
              <div>
                <h4 className='text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2'>Open (Expanded)</h4>
                <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700'>
                  &lt;details <span className='text-purple-600'>open</span>&gt;
                </code>
              </div>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertDescription className='text-amber-700 dark:text-amber-300'>
              <strong>JavaScript Control:</strong> You can toggle the open state with JavaScript: <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>element.open = true</code> or listen for the <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>toggle</code> event.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Styling Options */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-emerald-600' />
            Styling & Customization
          </CardTitle>
          <CardDescription>CSS techniques for beautiful disclosure widgets</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Default Marker */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Hide Default Marker</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Remove the browser's default triangle</p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}`}</code>
              </pre>
            </div>

            {/* Open State */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Style Open State</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Target expanded details</p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`details[open] {
  background: #e0f2fe;
  border-color: #38bdf8;
}

details[open] > summary {
  color: #0284c7;
}`}</code>
              </pre>
            </div>

            {/* Custom Icon */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Custom Icon with CSS</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Add custom expand/collapse icon</p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`summary::before {
  content: '▶';
  margin-right: 0.5rem;
}

details[open] summary::before {
  content: '▼';
}`}</code>
              </pre>
            </div>

            {/* Animation */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Smooth Transitions</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Animate the opening/closing</p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`details summary {
  transition: color 0.3s;
}

details[open] {
  animation: expand 0.3s;
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-amber-600' />
            Common Use Cases
          </CardTitle>
          <CardDescription>Real-world scenarios for details & summary elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { 
                icon: HelpCircle,
                title: 'FAQ Sections', 
                desc: 'Frequently asked questions with expandable answers',
                example: 'Q: How do I...? Click to reveal answer'
              },
              { 
                icon: ListChecks,
                title: 'Accordion Menus', 
                desc: 'Navigation or content organization',
                example: 'Section 1 ▼ Subsection A, B, C'
              },
              { 
                icon: Settings,
                title: 'Settings Panels', 
                desc: 'Advanced options hidden by default',
                example: 'Advanced Settings ▶ Show options'
              },
              { 
                icon: Info,
                title: 'Progressive Disclosure', 
                desc: 'Show more details on demand',
                example: 'Show more details ▶'
              },
              { 
                icon: Code,
                title: 'Code Examples', 
                desc: 'Collapsible code snippets',
                example: 'View code ▶ Show implementation'
              },
              { 
                icon: ChevronDown,
                title: 'Table of Contents', 
                desc: 'Expandable document structure',
                example: 'Chapter 1 ▼ Sections 1.1, 1.2'
              },
            ].map((useCase, index) => (
              <div key={index} className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
                <div className='flex items-center gap-2 mb-2'>
                  <useCase.icon className='w-5 h-5 text-blue-600' />
                  <h3 className='font-semibold text-blue-700 dark:text-blue-300'>{useCase.title}</h3>
                </div>
                <p className='text-sm text-slate-700 dark:text-slate-300 mb-2'>{useCase.desc}</p>
                <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700 block'>
                  {useCase.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <ChevronDown className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Details & Summary in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See various styled disclosure widgets with different use cases
        </p>

        {/* Example 1: FAQ Section */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. FAQ Section'
              description='Frequently asked questions with expandable answers'
            html={`<div class="details-container">
  <h3>FAQ Section</h3>
  <p class="description">Frequently asked questions with expandable answers</p>
  
  <details class="faq-item">
    <summary>What are details and summary elements?</summary>
    <p>They are native HTML elements that create collapsible/expandable content without JavaScript. The &lt;details&gt; element contains the content, and &lt;summary&gt; acts as the clickable heading.</p>
  </details>

  <details class="faq-item">
    <summary>Do I need JavaScript to use them?</summary>
    <p>No! They work natively in all modern browsers. You only need JavaScript if you want to add custom behaviors or animations.</p>
  </details>

  <details class="faq-item" open>
    <summary>Can I style them with CSS?</summary>
    <p>Yes! You can style both elements extensively with CSS, including the default disclosure triangle and the open/closed states.</p>
  </details>
  
  <div class="info-badge">
    ✓ Zero JavaScript required
  </div>
</div>

<p class="note">📝 Perfect for FAQ sections - no JavaScript needed!</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.details-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .details-container {
  background: #1e293b;
}

h3 {
  color: #3b82f6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #60a5fa;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.faq-item {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: #f8fafc;
  transition: all 0.3s;
}

html.dark .faq-item {
  background: #0f172a;
  border-color: #334155;
}

.faq-item[open] {
  background: #e0f2fe;
  border-color: #38bdf8;
}

html.dark .faq-item[open] {
  background: #0c4a6e;
  border-color: #0284c7;
}

.faq-item summary {
  cursor: pointer;
  font-weight: 600;
  color: #334155;
}

html.dark .faq-item summary {
  color: #cbd5e1;
}

.faq-item[open] summary {
  color: #0284c7;
  margin-bottom: 0.75rem;
}

html.dark .faq-item[open] summary {
  color: #38bdf8;
}

.faq-item p {
  padding-left: 0.5rem;
  color: #475569;
  font-size: 0.9rem;
}

html.dark .faq-item p {
  color: #94a3b8;
}

summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

details[open] summary::before {
  transform: rotate(90deg);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #93c5fd;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #1e3a8a;
  color: #bfdbfe;
  border-color: #2563eb;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
            colorTheme='blue'
            icon={ChevronDown}
            previewHeight='450px'
          />
        </CardContent>
      </Card>

      {/* Example 2: Styled Accordion */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. Styled Accordion'
            description='Custom styling with icons and colors for accordion-style disclosures'
            html={`<div class="details-container">
  <h3>Styled Accordion</h3>
  <p class="description">Custom styling with icons and colors</p>
  
  <details class="accordion-item">
    <summary>🎨 Design Principles</summary>
    <div class="accordion-content">
      <ul>
        <li>Keep it simple and intuitive</li>
        <li>Use clear visual hierarchy</li>
        <li>Ensure keyboard accessibility</li>
      </ul>
    </div>
  </details>

  <details class="accordion-item">
    <summary>⚡ Performance Tips</summary>
    <div class="accordion-content">
      <ul>
        <li>Avoid heavy animations</li>
        <li>Use CSS transitions</li>
        <li>Test on mobile devices</li>
      </ul>
    </div>
  </details>

  <details class="accordion-item">
    <summary>🔒 Security Best Practices</summary>
    <div class="accordion-content">
      <ul>
        <li>Validate all user input</li>
        <li>Use HTTPS everywhere</li>
        <li>Keep dependencies updated</li>
      </ul>
    </div>
  </details>
  
  <div class="info-badge">
    🎨 Custom styled with CSS
  </div>
</div>

<p class="note">💅 Rich styling with emojis and custom borders</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.details-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .details-container {
  background: #1e293b;
}

h3 {
  color: #8b5cf6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #c4b5fd;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.accordion-item {
  border-left: 4px solid #8b5cf6;
  background: #faf5ff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s;
}

html.dark .accordion-item {
  background: #3b0764;
  border-color: #a855f7;
}

.accordion-item[open] {
  background: #f3e8ff;
}

html.dark .accordion-item[open] {
  background: #581c87;
}

.accordion-item summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: #6b21a8;
}

html.dark .accordion-item summary {
  color: #d8b4fe;
}

.accordion-content {
  margin-top: 0.75rem;
  padding-left: 1rem;
}

.accordion-content ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #64748b;
}

html.dark .accordion-content ul {
  color: #cbd5e1;
}

.accordion-content li {
  margin-bottom: 0.25rem;
}

summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

details[open] summary::before {
  transform: rotate(90deg);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #d8b4fe;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #581c87;
  color: #e9d5ff;
  border-color: #a855f7;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}`}
            colorTheme='purple'
            icon={ListChecks}
            previewHeight='450px'
          />
        </CardContent>
      </Card>

      {/* Example 3: Nested Disclosure */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. Nested Disclosure'
            description='Details elements can be nested for hierarchical content'
            html={`<div class="details-container">
  <h3>Nested Disclosure</h3>
  <p class="description">Hierarchical content organization</p>
  
  <details class="nested-item">
    <summary>📁 Frontend Development</summary>
    <div class="nested-content">
      <details class="nested-item nested">
        <summary>⚛️ React</summary>
        <p>A JavaScript library for building user interfaces. Created by Facebook.</p>
      </details>
      <details class="nested-item nested">
        <summary>🅰️ Angular</summary>
        <p>A TypeScript-based framework by Google for building web applications.</p>
      </details>
    </div>
  </details>

  <details class="nested-item">
    <summary>📁 Backend Development</summary>
    <div class="nested-content">
      <details class="nested-item nested">
        <summary>🟢 Node.js</summary>
        <p>JavaScript runtime built on Chrome's V8 engine for server-side development.</p>
      </details>
      <details class="nested-item nested">
        <summary>🐍 Python</summary>
        <p>High-level programming language known for simplicity and readability.</p>
      </details>
    </div>
  </details>
  
  <div class="info-badge">
    📂 Hierarchical structure
  </div>
</div>

<p class="note">🌳 Perfect for nested menus and category trees</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.details-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .details-container {
  background: #1e293b;
}

h3 {
  color: #10b981;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #6ee7b7;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.nested-item {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: white;
  transition: all 0.3s;
}

html.dark .nested-item {
  background: #1e293b;
  border-color: #475569;
}

.nested-item.nested {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  background: #f1f5f9;
  border-color: #94a3b8;
}

html.dark .nested-item.nested {
  background: #0f172a;
  border-color: #334155;
}

.nested-item summary {
  cursor: pointer;
  font-weight: 600;
  color: #475569;
}

html.dark .nested-item summary {
  color: #cbd5e1;
}

.nested-content {
  margin-top: 0.75rem;
}

.nested-item p {
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
}

html.dark .nested-item p {
  color: #94a3b8;
}

summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

details[open] summary::before {
  transform: rotate(90deg);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #a7f3d0;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #064e3b;
  color: #a7f3d0;
  border-color: #10b981;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
            colorTheme='emerald'
            icon={ChevronRight}
            previewHeight='500px'
          />
        </CardContent>
      </Card>

      {/* Example 4: Settings Panel */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. Settings Panel'
            description='Progressive disclosure for advanced options'
            html={`<div class="details-container">
  <h3>Settings Panel</h3>
  <p class="description">Hide complexity by default</p>
  
  <details class="settings-item">
    <summary>⚙️ Advanced Settings</summary>
    <div class="settings-content">
      <label>
        <input type="checkbox" checked> Enable notifications
      </label>
      <label>
        <input type="checkbox"> Dark mode
      </label>
      <label>
        <input type="checkbox" checked> Auto-save
      </label>
      <label>
        <input type="range" min="0" max="100" value="75" id="volumeSlider">
        Volume: <span id="volumeValue">75</span>%
      </label>
    </div>
  </details>
  
  <div class="info-badge">
    🎛️ Progressive disclosure
  </div>
</div>

<p class="note">🔧 Great for hiding advanced options until needed</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.details-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .details-container {
  background: #1e293b;
}

h3 {
  color: #f59e0b;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #fcd34d;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.settings-item {
  border: 2px solid #10b981;
  border-radius: 8px;
  padding: 1rem;
  background: #ecfdf5;
  transition: all 0.3s;
}

html.dark .settings-item {
  background: #064e3b;
  border-color: #059669;
}

.settings-item summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  color: #047857;
}

html.dark .settings-item summary {
  color: #6ee7b7;
}

.settings-content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.settings-content label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #065f46;
  font-size: 0.9rem;
  cursor: pointer;
}

html.dark .settings-content label {
  color: #a7f3d0;
}

.settings-content input[type="range"] {
  flex: 1;
}

summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

details[open] summary::before {
  transform: rotate(90deg);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #fde68a;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #78350f;
  color: #fcd34d;
  border-color: #f59e0b;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #78350f;
  color: #fde68a;
}`}
            js={`const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

if (volumeSlider && volumeValue) {
  volumeSlider.addEventListener('input', function() {
    volumeValue.textContent = this.value;
  });
}`}
            colorTheme='amber'
            icon={Settings}
            previewHeight='400px'
          />
        </CardContent>
      </Card>
    </div>

    {/* Best Practices */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <CheckCircle className='w-5 h-5 text-green-600' />
          Best Practices
        </CardTitle>
        <CardDescription>Tips for using details & summary effectively</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Do This */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 pb-2 border-b-2 border-green-200 dark:border-green-800'>
              <CheckCircle className='w-5 h-5 text-green-600' />
              <span className='font-semibold text-green-700 dark:text-green-400'>✅ Do This</span>
            </div>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use concise, descriptive summary text</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Keep keyboard accessibility in mind</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Style focus states for better UX</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>open</code> for important content</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Group related details in sections</span>
              </li>
            </ul>
          </div>

          {/* Avoid This */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 pb-2 border-b-2 border-red-200 dark:border-red-800'>
              <XCircle className='w-5 h-5 text-red-600' />
              <span className='font-semibold text-red-700 dark:text-red-400'>❌ Avoid This</span>
            </div>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't nest interactive elements in summary</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't use for critical content (SEO impact)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't remove focus indicators</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't use for primary navigation</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't make summary text too long</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Browser Support */}
    <Card className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-emerald-700 dark:text-emerald-300'>
          <Globe className='w-5 h-5' />
          Browser Support
        </CardTitle>
        <CardDescription>Details & Summary have excellent modern browser support</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { name: 'Chrome', version: '12+', supported: true },
            { name: 'Firefox', version: '49+', supported: true },
            { name: 'Safari', version: '6+', supported: true },
            { name: 'Edge', version: '79+', supported: true },
          ].map((browser, index) => (
            <div key={index} className='bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 text-center'>
              <div className='font-semibold text-slate-700 dark:text-slate-200'>{browser.name}</div>
              <div className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{browser.version}</div>
              <Badge className='mt-2 bg-emerald-600 hover:bg-emerald-700'>✓ Supported</Badge>
            </div>
          ))}
        </div>
        <Alert className='mt-4 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
          <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
          <AlertDescription className='text-blue-700 dark:text-blue-300'>
            <strong>Great Support:</strong> Details & Summary have been supported since 2011-2016 across modern browsers. For older browsers, consider using a polyfill or progressive enhancement.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* Interactive Playground */}
    <Card>
      <CardHeader>
        <CardTitle>Interactive Details & Summary Playground</CardTitle>
        <CardDescription>Experiment with disclosure widgets in a live code editor.</CardDescription>
      </CardHeader>
      <CardContent>
        <InteractivePlayground
          title='Details & Summary Playground'
          description='Play around with collapsible content examples'
          features={[
            'Native HTML',
            'No JavaScript',
            'Keyboard Accessible',
            'Custom Styling'
          ]}
          buttonText='Open Details & Summary Playground'
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

export const __HTML_DETAILS_AND_SUMMARY__ = true;
