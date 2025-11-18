'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Edit, Lightbulb, AlertTriangle, SpellCheck } from 'lucide-react';
import React from 'react';

export default function ContentEditable({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Simple Editable To-Do List</h2>
<p>Click on the list items to edit them.</p>

<ul id="todo-list">
  <li contenteditable="true">Read about HTML</li>
  <li contenteditable="true">Practice with the playground</li>
  <li contenteditable="true">Build a cool project</li>
</ul>

<button id="save-btn">Log Content to Console</button>
`,
        css: `body { 
  font-family: sans-serif;
}
ul {
  list-style-type: '✅ ';
  padding-left: 2rem;
}
li[contenteditable="true"] {
  padding: 8px;
  border-radius: 4px;
  outline: none;
  cursor: text;
}
li[contenteditable="true"]:focus {
  background-color: hsl(var(--primary) / 0.1);
  box-shadow: 0 0 0 2px hsl(var(--primary));
}`,
        js: `const saveBtn = document.getElementById('save-btn');
const todoList = document.getElementById('todo-list');

saveBtn.addEventListener('click', () => {
  console.log("Current To-Do List Content:");
  const items = todoList.querySelectorAll('li');
  items.forEach((item, index) => {
    // Use .textContent to get the raw text, which is safer
    console.log(\`Item \${index + 1}: \`, item.textContent);
  });
});`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Edit className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Content Editable</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Turning any HTML element into a rich text editor with a single attribute.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The "Magic Whiteboard" Analogy</CardTitle>
                <CardDescription>The `contenteditable` attribute is a global attribute that makes an HTML element editable by the user. It's like turning a static sign into an interactive whiteboard where users can write, erase, and edit the content directly.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>How it Works</CardTitle>
                <CardDescription>You simply add the `contenteditable` attribute to nearly any HTML element.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`<div contenteditable="true">
  This text is now editable! Try clicking on me.
</div>`}</pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Attribute Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><code className="font-mono bg-muted p-1 rounded">true</code> or an empty string: The element is editable.</p>
                <p><code className="font-mono bg-muted p-1 rounded">false</code>: The element is not editable.</p>
                <p><code className="font-mono bg-muted p-1 rounded">inherit</code>: The element inherits its parent's editable state.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. You can click and edit the to-do list items directly. Click the "Log Content" button to see how JavaScript can read the edited text.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>Security Warning!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">`contenteditable` allows users to input rich text, including pasting HTML from other sources. If you plan to save and display this user-generated content, you **must sanitize it** on your server before storing it. Failing to do so can lead to Cross-Site Scripting (XSS) attacks, where a malicious user could inject harmful scripts into your webpage.</p>
                <p className="text-sm text-muted-foreground mt-2">Always use `element.textContent` instead of `element.innerHTML` to read the content safely as plain text on the client-side.</p>
            </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><SpellCheck className="w-5 h-5"/>`spellcheck` Attribute</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">You can use the `spellcheck="true"` or `spellcheck="false"` attribute to control whether the browser's built-in spell checker is active for an editable element.</p>
            </CardContent>
        </Card>
      </div>
    );
}
