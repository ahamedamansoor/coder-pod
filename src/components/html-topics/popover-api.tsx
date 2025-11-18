
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Play, Lightbulb, Check, Shield, Pointer } from 'lucide-react';
import React from 'react';

export default function PopoverApi({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<!-- A button to control a popover -->
<button popovertarget="my-popover">Toggle Popover</button>

<!-- The popover element. It's hidden by default. -->
<div id="my-popover" popover>
  <h2>Popover Title</h2>
  <p>This is a native HTML popover. You can close it by clicking outside or pressing Escape.</p>
  <button popovertarget="my-popover" popovertargetaction="hide">Close</button>
</div>

<hr />

<!-- A different popover triggered by another button -->
<button popovertarget="another-popover">Show Another</button>
<div id="another-popover" popover>
    <p>This is another popover!</p>
</div>
`,
        css: `[popover] {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  margin: 1rem;
}

/* Style the backdrop that can appear with ::backdrop */
[popover]::backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}
`,
        js: `// No JavaScript needed for basic toggle functionality!`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Pointer className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">The Popover API</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A brand-new, declarative way to create popovers, tooltips, and menus.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is the Popover API?</CardTitle>
                <CardDescription>The Popover API provides a standard, built-in way to create transient UI elements that appear on top of other page content. This was previously only possible with complex JavaScript and CSS.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">It gives us the `popover` attribute to define popover elements and the `popovertarget` attribute on buttons to control them, all with minimal-to-no JavaScript.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Key Features & Benefits</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-green-600"/>Built-in Behavior</h3>
                    <p className="text-xs text-muted-foreground">Handles light-dismiss (clicking outside), focus management, and Escape key closing automatically.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600"/>Declarative HTML</h3>
                    <p className="text-xs text-muted-foreground">You can connect a button to a popover using just HTML attributes, without writing any JS for basic toggling.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600"/>Top Layer Rendering</h3>
                    <p className="text-xs text-muted-foreground">Just like `&lt;dialog&gt;`, popovers are promoted to a top layer, so you don't need to fight with `z-index`.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Attributes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>1. The `popover` attribute:</strong> Add this to the element you want to act as a popover. By default, it will be hidden.</p>
                <pre className="font-mono text-sm bg-muted p-2 rounded">{'<div id="my-popover" popover>...</div>'}</pre>
                
                <p><strong>2. The `popovertarget` attribute:</strong> Add this to a `&lt;button&gt;` to make it control a popover. Its value should be the `id` of the popover element.</p>
                <pre className="font-mono text-sm bg-muted p-2 rounded">{'<button popovertarget="my-popover">Toggle</button>'}</pre>
                
                <p><strong>3. The `popovertargetaction` attribute:</strong> Specifies the action (`show`, `hide`, or `toggle`) the button should perform. `toggle` is the default.</p>
                 <pre className="font-mono text-sm bg-muted p-2 rounded">{'<button popovertarget="my-popover" popovertargetaction="hide">Close</button>'}</pre>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Notice how the buttons control the popovers without any JavaScript needed.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Popover vs. Dialog</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">They seem similar, but have a key difference:</p>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>A `&lt;dialog&gt;` opened with `showModal()` is **modal**: it traps focus and requires an explicit user action to dismiss. Use it for critical information that requires a user response.</li>
                    <li>A `popover` is **non-modal**: it has a "light dismiss" behavior. Clicking outside or pressing Escape will close it. Use it for less critical, transient UI like menus, tooltips, or notifications.</li>
                </ul>
            </CardContent>
        </Card>

      </div>
    );
}
