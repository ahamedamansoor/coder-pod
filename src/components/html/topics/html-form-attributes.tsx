'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Send, Key, Vote, FileInput, Shield, Lightbulb, Play, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface HtmlFormAttributesProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

const playgroundHTML = `<form action="#" method="get" style="max-width:620px;margin:auto;font-family:system-ui;">
  <fieldset><legend>Login Form</legend>
    <p><label for="username">Username:</label><br><input type="text" id="username" name="username" required minlength="4" autofocus placeholder="user123"></p>
    <p><label for="password">Password:</label><br><input type="password" id="password" name="password" required pattern=".{8,}" title="Min 8 chars"></p>
    <p><label for="age">Age:</label><br><input type="number" id="age" name="age" min="18" max="120" value="25"></p>
    <p><label for="profile">Profile (readonly):</label><br><input type="text" id="profile" name="profile" value="user_profile_123" readonly></p>
    <p><label for="legacy">Legacy ID (disabled):</label><br><input type="text" id="legacy" name="legacy" value="old-id-001" disabled></p>
  </fieldset>
  <input type="submit" value="Submit" style="margin-top:1rem;">
</form>`;
const playgroundCSS = `fieldset{border:1px solid #ccc;border-radius:6px;padding:1rem;margin-bottom:1rem;}legend{font-weight:600;}input{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;}input:read-only{background:#eee;}input:disabled{background:#f9f9f9;cursor:not-allowed;}`;

export default function HtmlFormAttributes({ onOpenWebPlayground }: HtmlFormAttributesProps) {
  const formAttrs = [
    { icon: Send, attr: 'action', desc: 'Submission endpoint URL.' },
    { icon: Key, attr: 'method', desc: 'HTTP verb: GET (query) or POST (body).' },
    { icon: Vote, attr: 'target', desc: 'Where response loads (_blank new tab).' },
    { icon: FileInput, attr: 'enctype', desc: 'Encoding type for form data (multipart/form-data for files).' },
    { icon: Shield, attr: 'novalidate', desc: 'Skip built-in client validation.' },
  ];
  const inputAttrs = [
    { attr: 'name', desc: 'Key used when sending value.' },
    { attr: 'id', desc: 'Identifier; connects label via for attribute.' },
    { attr: 'value', desc: 'Initial/current value of control.' },
    { attr: 'placeholder', desc: 'Hint text displayed when empty.' },
    { attr: 'required', desc: 'Must be filled before submit.' },
    { attr: 'disabled', desc: 'Unusable & skipped on submit.' },
    { attr: 'readonly', desc: 'Visible but not editable.' },
    { attr: 'autofocus', desc: 'Gets focus on page load.' },
    { attr: 'pattern', desc: 'Regex constraint applied on submit.' },
    { attr: 'min / max', desc: 'Numeric or date bounds.' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader icon={File} category="HTML Basics" title="Form Attributes" description="Configuring form submission and input behavior" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Form-Level Attributes</CardTitle><CardDescription>Govern submission mechanics & destination.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {formAttrs.map(a => <div key={a.attr} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><a.icon className="w-4 h-4 text-primary" />{a.attr}</h3><p className="text-xs text-muted-foreground">{a.desc}</p></div>)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Input-Level Attributes</CardTitle><CardDescription>Validation & usability for individual controls.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {inputAttrs.map(a => <div key={a.attr} className="bg-muted p-3 rounded border"><code className="font-mono bg-background px-1 rounded font-semibold">{a.attr}</code><p className="mt-1 text-muted-foreground">{a.desc}</p></div>)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Test constraints & attribute effects.</CardDescription></CardHeader>
        <CardContent><Button onClick={() => onOpenWebPlayground?.(playgroundHTML, playgroundCSS, '')}><Play className="mr-2 h-4 w-4" /> Open Example</Button></CardContent>
      </Card>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Tips</CardTitle></CardHeader>
        <CardContent className="text-xs space-y-1">
          <ul className="list-disc list-inside space-y-1">
            <li>Use POST for sensitive data.</li>
            <li>Combine pattern + title for helpful error messages.</li>
            <li>Prefer native validation before JS custom logic.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

