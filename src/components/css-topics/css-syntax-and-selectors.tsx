
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Code, Pointer, Tags, Fingerprint, Star } from 'lucide-react';
import React from 'react';

interface CssSyntaxAndSelectorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssSyntaxAndSelectors({ onOpenWebPlayground }: CssSyntaxAndSelectorsProps) {

    const syntaxExample = `selector {
  property: value;
}`;
    
    const playgroundCode = {
        html: `<h1>Styling with Selectors</h1>
<p id="intro">This is a paragraph with an ID.</p>
<p class="highlight">This paragraph has a class.</p>
<div>
  <p class="highlight">Another paragraph with the same class.</p>
</div>
<p>This is a plain paragraph.</p>`,
        css: `/* Element Selector: targets all <p> tags */
p {
  font-family: sans-serif;
  border-bottom: 1px solid #eee;
  padding: 10px;
}

/* ID Selector: targets the single element with id="intro" */
#intro {
  color: hsl(var(--primary));
  font-size: 1.2rem;
  font-weight: bold;
}

/* Class Selector: targets all elements with class="highlight" */
.highlight {
  background-color: hsl(var(--primary) / 0.1);
  border-left: 4px solid hsl(var(--primary));
}
`,
        js: ''
    };
    
    const selectors = [
        { icon: Code, name: "Element Selector", example: "p { ... }", desc: "Selects all elements of a certain type (e.g., all `<p>` tags)." },
        { icon: Fingerprint, name: "ID Selector", example: "#myId { ... }", desc: "Selects the single element with a specific `id`. ID must be unique on the page." },
        { icon: Tags, name: "Class Selector", example: ".myClass { ... }", desc: "Selects all elements that have a specific `class` name." },
        { icon: Star, name: "Universal Selector", example: "* { ... }", desc: "Selects all HTML elements on the page." },
    ];


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Pointer className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Syntax & Selectors</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">How to write CSS rules and target the HTML elements you want to style.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Basic CSS Syntax</CardTitle>
                    <CardDescription>
                       A CSS rule consists of a selector and a declaration block.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{syntaxExample}</pre>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>The **selector** points to the HTML element you want to style.</li>
                        <li>The **declaration block** contains one or more declarations separated by semicolons.</li>
                        <li>Each **declaration** includes a CSS property name and a value, separated by a colon.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Common Selectors</CardTitle>
                    <CardDescription>
                        Selectors are how you "find" or "select" the HTML elements you want to style. Here are the most basic ones.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    {selectors.map(s => (
                         <div key={s.name} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><s.icon className="w-5 h-5 text-primary"/>{s.name}</h3>
                            <p className="text-xs text-muted-foreground mb-2">{s.desc}</p>
                            <code className="font-mono text-sm bg-background p-1 rounded-md">{s.example}</code>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how different selectors target specific elements.</CardDescription>
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
