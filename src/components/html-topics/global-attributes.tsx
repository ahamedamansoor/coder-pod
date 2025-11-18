'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Fingerprint, Tags, HelpCircle, SpellCheck, Keyboard, EyeOff, Edit, Database, Play } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function GlobalAttributes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const attributes = [
        { icon: Fingerprint, attr: 'id', desc: 'Provides a unique identifier for an element. Crucial for JavaScript manipulation and anchor links.' },
        { icon: Tags, attr: 'class', desc: 'Assigns one or more class names to an element, primarily for CSS styling.' },
        { icon: HelpCircle, attr: 'title', desc: 'Provides extra information about an element, which typically appears as a tooltip on hover.' },
        { icon: SpellCheck, attr: 'lang', desc: 'Specifies the language of the element\'s content, which helps search engines and screen readers.' },
        { icon: Keyboard, attr: 'tabindex', desc: 'Controls whether an element can be focused with the Tab key and in what order.' },
        { icon: EyeOff, attr: 'hidden', desc: 'A boolean attribute that hides an element from view. It is similar to using CSS `display: none;`.' },
        { icon: Edit, attr: 'contenteditable', desc: 'A boolean attribute that makes the content of an element editable by the user.' },
        { icon: Database, attr: 'data-*', desc: 'A set of custom attributes to store private data for the page or application, easily accessible by JavaScript.' },
    ];
    
    const playgroundCode = {
        html: `<h2>Global Attributes Demo</h2>

<p id="main-paragraph" 
   class="important-text" 
   lang="en" 
   title="This is a tooltip!">
  This paragraph uses id, class, lang, and title attributes. Hover over it!
</p>

<div tabindex="0" style="padding: 10px; border: 1px solid #ccc; outline: none; border-radius: 4px;"
    data-user-id="123" data-role="admin">
  This div is focusable (try tabbing to it) and has custom data.
</div>

<p contenteditable="true">You can edit this paragraph directly!</p>

<button onclick="toggleVisibility()">Toggle Hidden Text</button>
<p id="hidden-text" hidden>This text is initially hidden.</p>`,
        css: `body { font-family: sans-serif; }
#main-paragraph {
  border-left: 4px solid hsl(var(--primary));
  padding-left: 10px;
}
.important-text {
  font-weight: bold;
}
div[tabindex="0"]:focus {
  border-color: hsl(var(--primary));
  box-shadow: 0 0 5px hsl(var(--primary) / 0.5);
}
p[contenteditable="true"]:focus {
    outline: 2px solid hsl(var(--primary));
}
`,
        js: `function toggleVisibility() {
  const elem = document.getElementById('hidden-text');
  elem.hidden = !elem.hidden;
}

const dataDiv = document.querySelector('div[data-user-id]');
console.log('User ID from data attribute:', dataDiv.dataset.userId);
console.log('Role from data attribute:', dataDiv.dataset.role);
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Globe className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Global Attributes Overview</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Attributes that can be used on all HTML elements.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What are Global Attributes?</CardTitle>
                <CardDescription>Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Key Global Attributes</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attributes.map(p => (
                    <div key={p.attr} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>`{p.attr}`</h3>
                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See Them In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to interact with the elements and see how their global attributes affect them.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>

      </div>
    );
}
