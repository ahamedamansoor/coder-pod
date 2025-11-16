
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Puzzle, Lightbulb } from 'lucide-react';
import React from 'react';

interface CssPseudoElementsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPseudoElements({ onOpenWebPlayground }: CssPseudoElementsProps) {

    const playgroundCode = {
        html: `<p class="first-letter-example">This paragraph has a styled first letter.</p>

<p class="first-line-example">This paragraph has a styled first line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, ex. This part is not styled.</p>

<div class="before-example">I have content before me!</div>

<div class="after-example">I have content after me!</div>

<input type="text" placeholder="This placeholder is styled" />`,
        css: `p, div { margin-bottom: 1.5rem; }

/* Style the first letter of a paragraph */
.first-letter-example::first-letter {
  font-size: 200%;
  color: hsl(var(--primary));
  font-weight: bold;
}

/* Style the first line of a paragraph */
.first-line-example::first-line {
  color: hsl(var(--destructive));
  font-variant: small-caps;
}

/* Insert content before an element */
.before-example::before {
  content: "✨ ";
}

/* Insert content after an element */
.after-example::after {
  content: " 🔗";
  font-weight: bold;
}

/* Style the placeholder text of an input */
::placeholder {
  color: hsl(var(--primary) / 0.6);
  font-style: italic;
}
`,
        js: ''
    };

    const elements = [
        { name: '::before', desc: 'Inserts some content before the content of an element. Requires the `content` property.' },
        { name: '::after', desc: 'Inserts some content after the content of an element. Requires the `content` property.' },
        { name: '::first-letter', desc: 'Selects the first letter of the first line of a block-level element.' },
        { name: '::first-line', desc: 'Selects the first line of a block-level element.' },
        { name: '::selection', desc: 'Styles the portion of a document that has been highlighted by the user.' },
        { name: '::placeholder', desc: 'Styles the placeholder text in an `<input>` or `<textarea>`.' },
    ];


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Puzzle className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Pseudo-elements</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Styling a specific part of a selected element.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Pseudo-elements?</CardTitle>
                    <CardDescription>
                       A pseudo-element is used to style a specific part of an element, like the first letter or line, or to insert content before or after the element's content. The syntax is a double colon (`::`) followed by the pseudo-element name.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`/* selector::pseudo-element */
p::first-letter {
  font-size: 200%;
}`}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Single vs. Double Colon (`:` vs `::`)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">You might see pseudo-elements written with a single colon (e.g., `:before`). This was the old syntax in CSS2. The double-colon syntax (`::before`) was introduced in CSS3 to distinguish between **pseudo-classes** (which describe a state, like `:hover`) and **pseudo-elements** (which style a part of an element). Modern browsers support both, but it's best practice to use `::` for pseudo-elements.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Common Pseudo-elements</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                     {elements.map(p => (
                        <div key={p.name} className="bg-muted p-3 rounded-lg border">
                            <h3 className="font-bold font-mono text-primary">{p.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how these pseudo-elements style specific parts of the content.</CardDescription>
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
