'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Lightbulb, CheckCircle2, XCircle, Play, File } from 'lucide-react';
import { PageHeader } from '../generic-page-header';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface HtmlWebStorageApiProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

const playground = {
  html: `<h2>Web Storage API Demo</h2>
<input id="dataInput" placeholder="Enter something to save..." />
<div class="buttons">
  <button id="saveLocal">Save to localStorage</button>
  <button id="saveSession">Save to sessionStorage</button>
</div>
<div class="buttons">
  <button id="loadLocal">Load from localStorage</button>
  <button id="loadSession">Load from sessionStorage</button>
</div>
<p>Current Value: <span id="output"></span></p>
<small>Try saving then refresh; close & reopen to test persistence.</small>`,
  css: `body { font-family: system-ui; line-height:1.6; }
input { width:100%; padding:8px; margin-bottom:1rem; }
.buttons { display:flex; gap:1rem; margin-bottom:1rem; }
button { flex:1; }
#output { font-weight:bold; color:hsl(var(--primary)); }`,
  js: `const input = document.getElementById('dataInput');
const output = document.getElementById('output');
const setOut = msg => output.textContent = msg;
['saveLocal','saveSession','loadLocal','loadSession'].forEach(id => {
  document.getElementById(id).onclick = () => {
    if(id==='saveLocal'){ localStorage.setItem('myLocalData', input.value); setOut('Saved local'); }
    if(id==='saveSession'){ sessionStorage.setItem('mySessionData', input.value); setOut('Saved session'); }
    if(id==='loadLocal'){ setOut(localStorage.getItem('myLocalData')||'(empty)'); }
    if(id==='loadSession'){ setOut(sessionStorage.getItem('mySessionData')||'(empty)'); }
  };
});`
};

export default function HtmlWebStorageApi({ onOpenWebPlayground }: HtmlWebStorageApiProps) {
  return (
    <div className="space-y-8">
      <PageHeader icon={File} category="HTML Basics" title="Web Storage API" description="Local persistence with localStorage & sessionStorage" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Overview</CardTitle><CardDescription>Key/value storage mechanisms simpler than cookies.</CardDescription></CardHeader>
      </Card>
      <Card>
        <CardHeader><CardTitle>localStorage vs sessionStorage</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Feature</TableHead><TableHead>localStorage</TableHead><TableHead>sessionStorage</TableHead></TableRow></TableHeader>
            <TableBody>
              <TableRow><TableCell className="font-semibold">Persistence</TableCell><TableCell>Survives tab & browser restarts <CheckCircle2 className="inline w-4 h-4 text-green-600" /></TableCell><TableCell>Cleared when tab closes <XCircle className="inline w-4 h-4 text-destructive" /></TableCell></TableRow>
              <TableRow><TableCell className="font-semibold">Scope</TableCell><TableCell>Shared across tabs (same origin)</TableCell><TableCell>Per single tab</TableCell></TableRow>
              <TableRow><TableCell className="font-semibold">Typical Use</TableCell><TableCell>Theme, auth token, preferences</TableCell><TableCell>Wizard step state, temp form data</TableCell></TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Common Methods</CardTitle><CardDescription>API surface shared by both stores.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {['setItem(key,value)','getItem(key)','removeItem(key)','clear()'].map(m => <div key={m} className="bg-muted p-2 rounded border"><code className="font-mono text-[11px]">{m}</code></div>)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Experiment with persistence behavior.</CardDescription></CardHeader>
        <CardContent><Button onClick={() => onOpenWebPlayground?.(playground.html, playground.css, playground.js)}><Play className="mr-2 h-4 w-4" /> Open Example</Button></CardContent>
      </Card>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Notes</CardTitle></CardHeader>
        <CardContent className="text-xs space-y-1">
          <ul className="list-disc list-inside space-y-1">
            <li>Stores strings only; wrap complex data with JSON.</li>
            <li>Synchronous API—avoid large payloads.</li>
            <li>Do not store sensitive secrets in plain text.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

