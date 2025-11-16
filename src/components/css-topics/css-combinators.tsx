
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Link, Plus, GitMerge, Waves } from 'lucide-react';
import React from 'react';

interface CssCombinatorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssCombinators({ onOpenWebPlayground }: CssCombinatorsProps) {

    const combinators = [
        {
            icon: ' ',
            name: "Descendant Selector",
            syntax: "div p",
            description: "Selects all `<p>` elements that are inside a `<div>` element, no matter how deeply nested.",
            exampleHtml: `<div> <p>I am selected</p> <span><p>I am also selected</p></span> </div> <p>I am NOT selected</p>`
        },
        {
            icon: '>',
            name: "Child Selector",
            syntax: "div > p",
            description: "Selects all `<p>` elements that are direct children of a `<div>` element.",
            exampleHtml: `<div> <p>I am selected</p> <span><p>I am NOT selected (not a direct child)</p></span> </div>`
        },
        {
            icon: '+',
            name: "Adjacent Sibling Selector",
            syntax: "div + p",
            description: "Selects the first `<p>` element that is placed immediately after a `<div>` element.",
            exampleHtml: `<div>This is a div</div> <p>I am selected</p> <p>I am NOT selected</p>`
        },
        {
            icon: '~',
            name: "General Sibling Selector",
            syntax: "div ~ p",
            description: "Selects all `<p>` elements that are siblings of a `<div>` and come after it.",
            exampleHtml: `<div>This is a div</div> <p>I am selected</p> <code>Some code</code> <p>I am also selected</p>`
        },
    ];

    const playgroundCode = {
        html: `<h2>Combinator Playground</h2>

<!-- Descendant Selector (div p) -->
<div class="descendant-example">
  <p>I am a direct child paragraph.</p>
  <section>
    <p>I am a nested paragraph.</p>
  </section>
</div>
<p>I am an outside paragraph.</p>

<hr>

<!-- Child Selector (div > p) -->
<div class="child-example">
  <p>I am a direct child.</p>
  <section>
    <p>I am NOT a direct child.</p>
  </section>
</div>

<hr>

<!-- Adjacent Sibling Selector (h3 + p) -->
<div class="adjacent-example">
  <h3>A Heading</h3>
  <p>I am adjacent to the h3.</p>
  <p>I am NOT adjacent.</p>
</div>

<hr>

<!-- General Sibling Selector (h3 ~ p) -->
<div class="general-example">
  <h3>Another Heading</h3>
  <div>A div sibling</div>
  <p>I am a later sibling.</p>
  <p>I am also a later sibling.</p>
</div>
`,
        css: `/* General Styles */
body { font-family: sans-serif; }
p { margin: 5px 0; padding: 5px; border: 1px solid #eee; }
hr { margin: 20px 0; }
div[class$="-example"] { border: 2px dashed #ccc; padding: 10px; margin-bottom: 10px; }

/* Styles to demonstrate selectors */

/* Descendant: any p inside */
.descendant-example p {
  background-color: lightblue;
}

/* Child: only direct children p */
.child-example > p {
  background-color: lightgreen;
}

/* Adjacent: only the p IMMEDIATELY after h3 */
.adjacent-example h3 + p {
  background-color: lightcoral;
}

/* General: ALL p siblings after h3 */
.general-example h3 ~ p {
  background-color: lightgoldenrodyellow;
}
`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Link className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Combinators</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Combining selectors to target elements based on their relationship.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Combinators?</CardTitle>
                    <CardDescription>
                       A combinator is something that explains the relationship between the selectors. It sits between two selectors to create a more complex and specific rule.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>The Four Combinators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {combinators.map(c => (
                        <div key={c.name} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 text-lg mb-2">
                                <span className="font-mono text-xl text-primary bg-background w-8 h-8 rounded-md flex items-center justify-center">{c.icon}</span>
                                {c.name}
                            </h3>
                             <p className="text-sm text-muted-foreground mb-3">{c.description}</p>
                            <code className="font-mono text-sm bg-background p-2 rounded-md">{c.syntax}</code>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See Them All In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how each combinator targets different elements based on their relationship in the HTML structure.</CardDescription>
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
