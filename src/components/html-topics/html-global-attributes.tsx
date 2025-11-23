'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Fingerprint, Tags, HelpCircle, SpellCheck, Keyboard, EyeOff, Edit, Database, Play, Code, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '../generic-page-header';

interface HtmlGlobalAttributesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
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

export default function HtmlGlobalAttributes({ onOpenWebPlayground }: HtmlGlobalAttributesProps) {
  const attributes = [
    { icon: Fingerprint, attr: 'id', desc: 'Unique identifier for targeting with CSS, JS, or anchor links.' },
    { icon: Tags, attr: 'class', desc: 'Assigns reusable style hooks (can be multiple space-separated classes).' },
    { icon: HelpCircle, attr: 'title', desc: 'Tooltip text providing additional context on hover/focus.' },
    { icon: SpellCheck, attr: 'lang', desc: 'Defines language of element content aiding screen readers & SEO.' },
    { icon: Code, attr: 'style', desc: 'Inline CSS for quick unique styling (avoid overuse).' },
    { icon: Keyboard, attr: 'tabindex', desc: 'Controls keyboard focus order and focusability of non-interactive elements.' },
    { icon: EyeOff, attr: 'hidden', desc: 'Boolean attribute that hides element; not announced by screen readers.' },
    { icon: Edit, attr: 'contenteditable', desc: 'Makes element content directly editable by the user.' },
    { icon: Database, attr: 'data-*', desc: 'Custom data attributes accessible via JS (e.g. dataset.role).' },
  ];

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
              <p className="text-xs text-muted-foreground">{a.desc}</p>
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
          <Button onClick={() => onOpenWebPlayground?.(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
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
    </div>
  );
}
