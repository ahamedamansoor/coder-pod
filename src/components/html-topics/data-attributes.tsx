
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Tag, Database, Settings, Lightbulb } from 'lucide-react';
import React from 'react';

export default function DataAttributes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<div id="user-profile" 
     class="user-card"
     data-user-id="12345" 
     data-user-role="admin"
     data-last-login="2024-05-21">
  
  <h2>User Profile</h2>
  <p>Name: <span id="user-name">John Doe</span></p>
</div>

<button id="show-data-btn">Show User Data</button>
<div id="output"></div>
`,
        css: `.user-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
/* Style based on a data attribute */
[data-user-role="admin"] {
  border-left: 5px solid hsl(var(--primary));
  background-color: hsl(var(--primary) / 0.1);
}
#output {
  margin-top: 1rem;
  font-family: monospace;
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
}
`,
        js: `const showDataBtn = document.getElementById('show-data-btn');
const profileDiv = document.getElementById('user-profile');
const outputDiv = document.getElementById('output');

showDataBtn.addEventListener('click', () => {
  // Access data attributes via the .dataset property
  const userId = profileDiv.dataset.userId;
  const userRole = profileDiv.dataset.userRole;
  const lastLogin = profileDiv.dataset.lastLogin;

  outputDiv.innerHTML = 
    'User ID: ' + userId + '<br>' +
    'Role: ' + userRole + '<br>' +
    'Last Login: ' + lastLogin;
    
  // You can also change data attributes
  profileDiv.dataset.lastLogin = new Date().toISOString().split('T')[0];
});
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Tag className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Custom Data Attributes</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing extra, private information on standard HTML elements.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What are `data-*` Attributes?</CardTitle>
                <CardDescription>
                    The `data-*` attributes form a class of attributes called custom data attributes, that allow you to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes or extra properties on DOM.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Think of them as private "sticky notes" you can attach to your HTML elements, which can then be easily read and manipulated by your JavaScript code.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Syntax</CardTitle>
                <CardDescription>A custom data attribute name starts with `data-` and must contain at least one character after the prefix. The name should not contain any uppercase letters.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`<div data-user-id="123" data-user-role="admin">...</div>`}</pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Database className="w-5 h-5 text-primary"/>Accessing in JavaScript</CardTitle>
                <CardDescription>
                    The real power of `data-*` attributes comes from how easily you can access them in JavaScript using the `dataset` property.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">An attribute named `data-user-id` is accessed as `element.dataset.userId` (camelCase). An attribute `data-last-login` becomes `element.dataset.lastLogin`.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Click the button to read the `data-*` attributes from the user profile card and display them. Also notice how CSS can target elements based on their data attributes.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>When to Use `data-*` Attributes</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Use them when you need to store simple data that is closely tied to an element and doesn't have a more appropriate semantic attribute. It's great for things that JavaScript needs to know about, like an item's ID from a database, a component's state, or configuration options.</p>
            </CardContent>
        </Card>

      </div>
    );
}
