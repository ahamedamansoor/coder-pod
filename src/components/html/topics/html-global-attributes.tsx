'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Fingerprint, Tags, HelpCircle, SpellCheck, Keyboard, EyeOff, Edit, Database, Play, Code, File, Globe, Brush, Move, Hash, BoxSelect, Type, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';

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

      <Card>
        <CardHeader>
          <CardTitle>Live Demo</CardTitle>
          <CardDescription>Experiment with editable content, focus management and hidden toggling.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => openPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
            <Play className="mr-2 h-4 w-4" /> Open Playground Example
          </Button>
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
