
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, MousePointerClick, Target, ListTree, Lightbulb } from 'lucide-react';
import React from 'react';

interface CssPseudoClassesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPseudoClasses({ onOpenWebPlayground }: CssPseudoClassesProps) {

    const playgroundCode = {
        html: `<h2>Interactive Links & Inputs</h2>
<a href="#">Hover over me</a>
<input type="text" placeholder="Click to focus" />

<h2>Structural Pseudo-classes</h2>
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item (even)</li>
  <li>Fifth item</li>
  <li>Sixth item (even)</li>
  <li>Last item</li>
</ul>`,
        css: `body {
  font-family: sans-serif;
}

/* Link pseudo-classes */
a:link { color: hsl(var(--primary)); } /* Unvisited link */
a:visited { color: hsl(var(--chart-3)); }   /* Visited link */
a:hover {                           /* Mouse over link */
  color: hsl(var(--destructive));
  text-decoration: none;
}
a:active { background-color: yellow; }  /* Selected link */

/* Input pseudo-classes */
input:focus {
  border-color: hsl(var(--primary));
  box-shadow: 0 0 5px hsl(var(--primary) / 0.5);
  outline: none;
}

/* Structural pseudo-classes */
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

/* Style the first list item */
li:first-child {
  font-weight: bold;
  background-color: hsl(var(--primary) / 0.1);
}

/* Style the last list item */
li:last-child {
  border-bottom: none;
  font-style: italic;
  background-color: hsl(var(--primary) / 0.1);
}

/* Style every even list item */
li:nth-child(even) {
  background-color: hsl(var(--muted));
}
`,
        js: ''
    };

    const stateClasses = [
        { name: ':hover', desc: 'Styles an element when the user mouses over it.' },
        { name: ':focus', desc: 'Styles an element when it has keyboard focus (e.g., clicking in a text input).' },
        { name: ':active', desc: 'Styles an element when it is being activated (e.g., while a link is being clicked).' },
        { name: ':visited', desc: 'Styles a link that the user has already visited.' },
    ];
    
    const structuralClasses = [
        { name: ':first-child', desc: 'Selects the first element among a group of siblings.' },
        { name: ':last-child', desc: 'Selects the last element among a group of siblings.' },
        { name: ':nth-child(n)', desc: 'A powerful selector for targeting elements based on their position. `n` can be a number (e.g., `3`), a keyword (`even` or `odd`), or a formula (`2n+1`).' },
        { name: ':not(selector)', desc: 'Selects every element that is NOT the specified selector.' },
    ];


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <MousePointerClick className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Pseudo-classes</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Styling elements based on their state or position.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Pseudo-classes?</CardTitle>
                    <CardDescription>
                       A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, you can use a pseudo-class to style a button differently when a user is hovering over it. The syntax is a colon (`:`) followed by the pseudo-class name.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`/* selector:pseudo-class */
a:hover {
  color: red;
}`}</pre>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Target className="text-primary"/>State-Based Pseudo-classes</CardTitle>
                        <CardDescription>These react to user interaction.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                         {stateClasses.map(p => (
                            <div key={p.name} className="bg-muted p-3 rounded-lg border">
                                <h3 className="font-bold font-mono text-primary">{p.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ListTree className="text-primary"/>Structural Pseudo-classes</CardTitle>
                        <CardDescription>These select elements based on their position in the document tree.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                         {structuralClasses.map(p => (
                            <div key={p.name} className="bg-muted p-3 rounded-lg border">
                                <h3 className="font-bold font-mono text-primary">{p.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
            
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Link Order Matters: LVHA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">When styling links, it's best to follow the **LVHA** order: `:link`, `:visited`, `:hover`, `:active`. Because of CSS specificity rules, putting them in this order ensures they work as expected. A good mnemonic is "**L**o**V**e **HA**te".</p>
                </CardContent>
            </Card>
            

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how various pseudo-classes work on links, inputs, and list items.</CardDescription>
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
