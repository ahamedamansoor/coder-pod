'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Play, Database, Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';

export default function WebStorageApi({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
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
<small>Try saving to both, then refresh the page. Then, close this tab and reopen the playground to see what persists.</small>`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 1rem;
}
.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
button {
  flex: 1;
}
#output {
  font-weight: bold;
  color: hsl(var(--primary));
}`,
        js: `const input = document.getElementById('dataInput');
const output = document.getElementById('output');

// Save to localStorage
document.getElementById('saveLocal').onclick = () => {
  localStorage.setItem('myLocalData', input.value);
  output.textContent = 'Saved to localStorage!';
};

// Save to sessionStorage
document.getElementById('saveSession').onclick = () => {
  sessionStorage.setItem('mySessionData', input.value);
  output.textContent = 'Saved to sessionStorage!';
};

// Load from localStorage
document.getElementById('loadLocal').onclick = () => {
  const data = localStorage.getItem('myLocalData');
  output.textContent = data || '(empty)';
};

// Load from sessionStorage
document.getElementById('loadSession').onclick = () => {
  const data = sessionStorage.getItem('mySessionData');
  output.textContent = data || '(empty)';
};`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Database className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Web Storage API</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing data locally in the user's browser.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is the Web Storage API?</CardTitle>
                <CardDescription>The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive way than using cookies. There are two main types of web storage.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>`localStorage` vs. `sessionStorage`</CardTitle>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>localStorage</TableHead>
                            <TableHead>sessionStorage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">Persistence</TableCell>
                            <TableCell>Persists even after the browser is closed and reopened. <CheckCircle2 className="inline w-4 h-4 text-green-500"/></TableCell>
                            <TableCell>Lasts only for the duration of the page session (until the tab is closed). <XCircle className="inline w-4 h-4 text-destructive"/></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-semibold">Accessibility</TableCell>
                            <TableCell>Accessible from any tab or window from the same origin.</TableCell>
                            <TableCell>Only accessible in the tab it was created in.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Example Use Case</TableCell>
                            <TableCell>Storing user preferences (like theme) or a "remember me" login status.</TableCell>
                            <TableCell>Storing data in a multi-step form that you don't want to lose on a page refresh.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Common Methods</CardTitle>
                <CardDescription>Both `localStorage` and `sessionStorage` share the same simple API.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <p><code className="font-mono bg-muted p-1 rounded">setItem(key, value)</code>: Add a key/value pair.</p>
                <p><code className="font-mono bg-muted p-1 rounded">getItem(key)</code>: Get the value for a key.</p>
                <p><code className="font-mono bg-muted p-1 rounded">removeItem(key)</code>: Remove an item by key.</p>
                <p><code className="font-mono bg-muted p-1 rounded">clear()</code>: Remove all items.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. Try saving some text to both `localStorage` and `sessionStorage`. Refresh the preview pane - what happens? Now close and reopen the playground - which value persisted?
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Web Storage can only store strings. If you want to store an object, you must first convert it to a string using `JSON.stringify()` and then parse it back with `JSON.parse()`.</li>
                    <li>Web Storage is synchronous, meaning it can block the main thread if you're storing large amounts of data. Use it for small pieces of data.</li>
                 </ul>
            </CardContent>
        </Card>
      </div>
    );
}
