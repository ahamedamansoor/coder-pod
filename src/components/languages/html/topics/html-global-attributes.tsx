'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Fingerprint, Tags, HelpCircle, SpellCheck, Keyboard, EyeOff, Edit, Database, Play, Code, File, Globe, Brush, Move, Hash, BoxSelect, Type, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlGlobalAttributesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
  onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void;
}

const playgroundCode = {
  html: `<h2>Global Attributes Demo</h2>
<p id="main-paragraph" class="important-text" lang="en" title="This is a tooltip!" style="color: blue; border-left: 4px solid blue; padding-left: 10px;">
  This paragraph uses id, class, lang, title and style attributes. Hover over it!
</p>
<div tabindex="0" data-user-id="123" data-role="admin" style="padding: 10px; border: 1px solid #ccc; outline: none; border-radius: 4px;">
  This div is focusable (try tabbing to it) and has custom data.
</div>
<p contenteditable="true" style="margin-top: 1rem; border: 1px dashed #ccc; padding: 5px;">You can edit this paragraph directly!</p>
<button onclick="toggleVisibility()" style="margin-top: 1rem;">Toggle Hidden Text</button>
<p id="hidden-text" hidden>This text is initially hidden.</p>`,
  css: `.important-text { font-weight: bold; }
div[tabindex="0"]:focus { border-color: hsl(var(--primary)); box-shadow: 0 0 5px hsl(var(--primary) / 0.5); }
p[contenteditable="true"]:focus { outline: 2px solid hsl(var(--primary)); }`,
  js: `function toggleVisibility() { const elem = document.getElementById('hidden-text'); elem.hidden = !elem.hidden; }
const dataDiv = document.querySelector('div[data-user-id]');
console.log('User ID:', dataDiv.dataset.userId);`,
};

export default function HtmlGlobalAttributes({ onOpenWebPlayground, onOpenWebPlaygroundAction }: { onOpenWebPlayground?: (html: string, css: string, js: string) => void; onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void; }) {
  const openPlayground = (html: string, css: string, js: string) => {
    (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);
  };

  const attributes = [
    { icon: Fingerprint, attr: 'id', desc: 'Unique identifier for targeting with CSS, JS, or anchor links.' },
    { icon: Tags, attr: 'class', desc: 'Assigns reusable style hooks (multiple space-separated classes).' },
    { icon: HelpCircle, attr: 'title', desc: 'Accessible tooltip text on hover/focus.' },
    { icon: SpellCheck, attr: 'lang', desc: 'Language of the element’s content (improves screen readers & SEO).' },
    { icon: Code, attr: 'style', desc: 'Inline CSS for one-off styling (prefer classes for reuse).' },
    { icon: Keyboard, attr: 'tabindex', desc: 'Controls tab ordering & focusability; 0 adds to natural order.' },
    { icon: EyeOff, attr: 'hidden', desc: 'Completely hides element; removed from accessibility tree.' },
    { icon: Edit, attr: 'contenteditable', desc: 'Turns region into direct editable surface.' },
    { icon: Database, attr: 'data-*', desc: 'Custom lightweight metadata accessible via dataset.' },
    { icon: Move, attr: 'draggable', desc: 'Hint that element can be dragged (Drag & Drop API).' },
    { icon: Globe, attr: 'dir', desc: 'Text direction (ltr, rtl, auto) for internationalization.' },
    { icon: BoxSelect, attr: 'inert', desc: 'Makes subtree unfocusable & ignored by assistive tech until removed.' },
    { icon: Hash, attr: 'accesskey', desc: 'Defines shortcut key (use sparingly; can conflict with OS).' },
    { icon: Languages, attr: 'translate', desc: 'Suggest if content should be translated (yes | no).' },
    { icon: Type, attr: 'inputmode', desc: 'Hints preferred virtual keyboard layout (e.g. numeric).'},
    { icon: Brush, attr: 'autocapitalize', desc: 'Controls auto-capitalization behavior on editable/input content.' },
  ];

  const microdataSnippet = `<div itemscope itemtype="https://schema.org/` + `Book">\n  <span itemprop="name">The Hobbit</span>\n  <span itemprop="author">J.R.R. Tolkien</span>\n</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={File}
        category="HTML Basics"
        title="Global Attributes Overview"
        description="Attributes that can be used on any HTML element"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle>What are Global Attributes?</CardTitle>
          <CardDescription>Common attributes available on most HTML elements (some may have no effect on specific tags).</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attributes.map(a => (
            <div key={a.attr} className="bg-muted p-4 rounded-lg border">
              <h3 className="font-semibold flex items-center gap-2 mb-2"><a.icon className="w-5 h-5 text-primary" />{a.attr}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Global Attributes in Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3"><Tags className="w-6 h-6 text-blue-600" /> Global Attributes in Action</CardTitle>
          <CardDescription className="text-base">See how global attributes work on different elements with dark mode support</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Essential Global Attributes"
            description="Practical examples of id, class, title, data-*, tabindex, and contenteditable"
            html={`<div id="container" class="main-wrapper">
  <h2 class="title" title="This is a helpful tooltip!">Global Attributes Demo</h2>
  
  <!-- ID and Class -->
  <p id="intro" class="highlight important">
    This paragraph has both an ID and multiple classes for styling.
  </p>
  
  <!-- Title attribute (tooltip) -->
  <p title="Hover over me to see the tooltip!">
    🎯 Hover to see a helpful tooltip
  </p>
  
  <!-- Data attributes -->
  <div 
    class="user-card"
    data-user-id="12345"
    data-role="admin"
    data-active="true">
    <h3>User Profile</h3>
    <p>This element contains custom data-* attributes for JavaScript access.</p>
  </div>
  
  <!-- Tabindex (focus control) -->
  <div 
    tabindex="0" 
    class="focusable-box"
    title="Press Tab to focus on this element">
    Tab to focus me! 🎯
  </div>
  
  <!-- Contenteditable -->
  <p contenteditable="true" class="editable">
    ✏️ Click here to edit this text directly!
  </p>
  
  <!-- Hidden attribute -->
  <p id="secret" hidden>
    🔒 This paragraph is hidden by the 'hidden' attribute
  </p>
  
  <!-- Lang attribute -->
  <p lang="es" dir="ltr" class="spanish">
    ¡Hola Mundo! (Spanish text with lang attribute)
  </p>
  
  <p lang="ar" dir="rtl" class="arabic">
    مرحبا بالعالم (Arabic text with rtl direction)
  </p>
</div>`}
            css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

#container {
  max-width: 700px;
  margin: 0 auto;
}

.main-wrapper {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  transition: background-color 0.3s;
}

html.dark .main-wrapper {
  background: #1e293b;
}

.title {
  color: #1e40af;
  margin-bottom: 1.5rem;
  cursor: help;
  transition: color 0.3s;
}

html.dark .title {
  color: #60a5fa;
}

#intro {
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.highlight {
  background: #fef3c7;
  padding: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .highlight {
  background: #713f12;
  color: #fef3c7;
}

.important {
  border-left: 4px solid #f59e0b;
  font-weight: 500;
}

.user-card {
  background: #dbeafe;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 2px solid #3b82f6;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark .user-card {
  background: #1e3a8a;
  border-color: #60a5fa;
}

.user-card h3 {
  color: #1e40af;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .user-card h3 {
  color: #93c5fd;
}

.user-card p {
  color: #475569;
  font-size: 0.875rem;
  transition: color 0.3s;
}

html.dark .user-card p {
  color: #cbd5e1;
}

.focusable-box {
  background: #e0e7ff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #6366f1;
  margin: 1.5rem 0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.focusable-box:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  transform: scale(1.02);
}

html.dark .focusable-box {
  background: #312e81;
  border-color: #818cf8;
  color: #e0e7ff;
}

html.dark .focusable-box:focus {
  border-color: #c7d2fe;
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.3);
}

.editable {
  background: #fef9c3;
  padding: 1rem;
  border-radius: 6px;
  border: 2px dashed #ca8a04;
  margin: 1.5rem 0;
  cursor: text;
  transition: all 0.3s;
}

.editable:focus {
  outline: none;
  border-color: #eab308;
  border-style: solid;
  box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.2);
}

html.dark .editable {
  background: #713f12;
  border-color: #fbbf24;
  color: #fef3c7;
}

html.dark .editable:focus {
  border-color: #fcd34d;
}

.spanish, .arabic {
  background: #f0fdf4;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #16a34a;
  margin: 1rem 0;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

html.dark .spanish,
html.dark .arabic {
  background: #14532d;
  border-left-color: #4ade80;
  color: #dcfce7;
}`}
            colorTheme="blue"
            icon={Tags}
            previewHeight="750px"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Playground</CardTitle>
          <CardDescription>Experiment with editable content, focus management and hidden toggling.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Global Attributes Playground"
            description="Explore editable content, custom data attributes, tabindex and visibility toggling"
            features={[
              'Editable Content',
              'Focus Management',
              'Custom Data Attributes',
              'Hidden Toggle'
            ]}
            buttonText="Open Global Attributes Playground"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: playgroundCode.html,
              css: playgroundCode.css,
              js: playgroundCode.js
            }}
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="border-primary bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>Prefer classes over inline <code>style</code> for maintainability.</li>
            <li><code>tabindex</code> greater than 0 creates a custom focus order—use sparingly.</li>
            <li>Avoid using <code>hidden</code> to toggle interactive content; manage visibility with CSS + ARIA when needed.</li>
            <li>Use <code>data-*</code> for lightweight metadata—avoid storing complex JSON.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attribute Groups Diagram</CardTitle>
          <CardDescription>Conceptual map of global attributes by their primary purpose.</CardDescription>
        </CardHeader>
        <CardContent className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm'>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Fingerprint className='w-3 h-3 text-primary'/>Identification</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>id</code></li>
              <li><code>class</code></li>
              <li><code>part</code> / <code>exportparts</code> (Shadow DOM)</li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Globe className='w-3 h-3 text-primary'/>Localization & Text</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>lang</code>, <code>dir</code></li>
              <li><code>translate</code></li>
              <li><code>autocapitalize</code></li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Keyboard className='w-3 h-3 text-primary'/>Focus & Interaction</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>tabindex</code>, <code>accesskey</code></li>
              <li><code>draggable</code></li>
              <li><code>inert</code></li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Edit className='w-3 h-3 text-primary'/>Editing & Input</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>contenteditable</code></li>
              <li><code>inputmode</code></li>
              <li><code>autocapitalize</code></li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><EyeOff className='w-3 h-3 text-primary'/>Visibility & State</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>hidden</code></li>
              <li><code>style</code></li>
              <li><code>popover</code> (new lightweight overlays)</li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Database className='w-3 h-3 text-primary'/>Metadata & Semantics</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>data-*</code></li>
              <li><code>itemprop</code>, <code>itemscope</code>, <code>itemtype</code>, <code>itemid</code>, <code>itemref</code></li>
              <li><code>slot</code></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code Snippets</CardTitle>
          <CardDescription>Common patterns using global attributes effectively.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4 text-sm'>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Accessible Language Switch</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<p lang="fr">Bonjour!</p>\n<p lang="en" translate="no">ProductName™</p>`}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Editable Region With Keyboard Hint</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<div contenteditable inputmode="email" autocapitalize="off">Type your email here...</div>`}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Hidden Placeholder Until Ready</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<section hidden id="results">...</section>\n<script>fetch('/api').then(()=>document.getElementById('results').hidden=false);</script>`}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Structured Data Microdata Stub</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{microdataSnippet}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Shadow DOM Part Exposure</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<my-button part="button root"></my-button>\n/* CSS */\nmy-button::part(button){ background:var(--primary); }`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Attribute Tester</CardTitle>
          <CardDescription>Toggle selected attributes and inspect resulting behavior.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4 text-sm'>
          <div id='ga-container' className='p-4 rounded border bg-muted flex flex-col gap-3'>
            <div id='sample' contentEditable='true' data-skill-level='beginner' lang='en' dir='ltr' style={{outline:'1px dashed var(--border)',padding:'8px'}}>
              Editable sample text. Change direction, language & visibility.
            </div>
            <div className='flex flex-wrap gap-2'>
              <button type='button' className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm' onClick={()=>{
                const el=document.getElementById('sample'); if(!el) return; el.toggleAttribute('hidden');
              }}>Toggle hidden</button>
              <button type='button' className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm' onClick={()=>{
                const el=document.getElementById('sample'); if(!el) return; el.setAttribute('dir', el.getAttribute('dir')==='ltr'?'rtl':'ltr');
              }}>Switch dir</button>
              <button type='button' className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm' onClick={()=>{
                const el=document.getElementById('sample'); if(!el) return; el.setAttribute('lang', el.getAttribute('lang')==='en'?'ar':'en');
              }}>Toggle lang</button>
              <button type='button' className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm' onClick={()=>{
                const el=document.getElementById('sample'); if(!el) return; el.setAttribute('contenteditable', el.getAttribute('contenteditable')==='true'?'false':'true');
              }}>Toggle editable</button>
            </div>
            <pre className='text-sm bg-background/50 p-2 rounded overflow-x-auto' id='snapshot'></pre>
          </div>
          <p className='text-sm text-muted-foreground'>Buttons update attributes on the element and reflect changes in snapshot below.</p>
          <script dangerouslySetInnerHTML={{__html:`function snap(){const el=document.getElementById('sample');if(!el)return;const attrs=['hidden','dir','lang','contenteditable','data-skill-level'];const out=attrs.map(a=>a+': '+(el.getAttribute(a)|| (el.hasAttribute(a)?'':'(none)'))).join('\n');document.getElementById('snapshot').textContent=out;}['click','keyup','input'].forEach(ev=>document.getElementById('ga-container').addEventListener(ev,snap));snap();`}} />
        </CardContent>
      </Card>
    </div>
  );
}
