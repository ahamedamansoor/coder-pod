'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Play, File } from 'lucide-react';
import { PageHeader } from '../generic-page-header';

interface HtmlFormValidationProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

const playground = {
  html: `<form>
  <div class="form-group">
    <label for="username">Username (required, 4-8 chars):</label>
    <input type="text" id="username" name="username" required minlength="4" maxlength="8">
  </div>
  <div class="form-group">
    <label for="email">Email (required):</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="age">Age (18-99):</label>
    <input type="number" id="age" name="age" min="18" max="99">
  </div>
  <div class="form-group">
    <label for="zip">Zip Code (5 digits):</label>
    <input type="text" id="zip" name="zip" pattern="[0-9]{5}" title="Five digit zip code">
  </div>
  <button type="submit">Submit</button>
</form>`,
  css: `form { font-family: system-ui; max-width: 400px; margin: 2rem auto; }
.form-group { margin-bottom: 1rem; }
label { display:block; margin-bottom:0.25rem; }
input { width:100%; padding:8px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px; }
input:invalid { border-color:red; box-shadow:0 0 3px rgba(255,0,0,0.3); }`,
  js: ''
};

export default function HtmlFormValidation({ onOpenWebPlayground }: HtmlFormValidationProps) {
  const validationAttrs = [
    { attr: 'required', desc: 'Field must be completed before submit.' },
    { attr: 'minlength / maxlength', desc: 'Character length boundaries.' },
    { attr: 'min / max', desc: 'Numeric/date range limits.' },
    { attr: 'type', desc: 'Built‑in semantic + basic pattern (email, url).' },
    { attr: 'pattern', desc: 'Regex for custom matching.' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader icon={File} category="HTML Basics" title="HTML Form Validation" description="Ensuring correctness & usability before submission" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Client vs Server Validation</CardTitle><CardDescription>Client improves UX; server is mandatory for security.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-muted p-4 rounded border"><h3 className="font-semibold mb-1">Client-Side</h3><p className="text-xs text-muted-foreground">Immediate feedback via HTML5 constraints; can be bypassed.</p></div>
          <div className="bg-muted p-4 rounded border"><h3 className="font-semibold mb-1">Server-Side</h3><p className="text-xs text-muted-foreground">Authoritative validation after submission (always required).</p></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Constraint Attributes</CardTitle><CardDescription>Declarative validation hooks.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-xs">
          {validationAttrs.map(v => <div key={v.attr} className="bg-muted p-3 rounded border"><code className="font-mono bg-background px-1 rounded font-semibold">{v.attr}</code><p className="mt-1 text-muted-foreground">{v.desc}</p></div>)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Trigger browser messages with invalid entries.</CardDescription></CardHeader>
        <CardContent><Button onClick={() => onOpenWebPlayground?.(playground.html, playground.css, playground.js)}><Play className="mr-2 h-4 w-4" /> Open Example</Button></CardContent>
      </Card>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Best Practices</CardTitle></CardHeader>
        <CardContent className="text-xs space-y-1">
          <ul className="list-disc list-inside space-y-1">
            <li>Never rely solely on client validation.</li>
            <li>Pair <code>pattern</code> with descriptive <code>title</code>.</li>
            <li>Use semantic <code>type</code> to reduce custom JS.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

