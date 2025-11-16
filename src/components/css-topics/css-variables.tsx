
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Variable, Lightbulb, BoxSelect } from 'lucide-react';
import React from 'react';

interface CssVariablesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssVariables({ onOpenWebPlayground }: CssVariablesProps) {

    const playgroundCode = {
        html: `<h1>Using CSS Variables</h1>
<div class="container">
  <div class="box primary-box">Primary</div>
  <div class="box secondary-box">Secondary</div>
</div>`,
        css: `:root {
  /* Define global variables */
  --primary-color: #3b82f6; /* Blue */
  --secondary-color: #10b981; /* Green */
  --base-padding: 1rem;
  --border-radius: 8px;
}

body {
  font-family: sans-serif;
}

.container {
  padding: var(--base-padding);
}

.box {
  color: white;
  padding: var(--base-padding);
  margin-bottom: 10px;
  border-radius: var(--border-radius);
  text-align: center;
}

.primary-box {
  background-color: var(--primary-color);
}

.secondary-box {
  /* You can override variables for a specific scope */
  --primary-color: #ef4444; /* Red for this box only */

  background-color: var(--secondary-color);
  border: 2px solid var(--primary-color);
}
`,
        js: ''
    };


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Variable className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Variables</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating reusable values in your stylesheets for better maintainability.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are CSS Variables?</CardTitle>
                    <CardDescription>
                       CSS variables, also known as **Custom Properties**, are entities defined by CSS authors which contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`).
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Declaring and Using Variables</CardTitle>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted p-4 rounded-lg mb-4">
                        <h3 className="font-semibold mb-2">1. Declare a variable:</h3>
                        <p className="text-sm text-muted-foreground mb-2">Variable names are case-sensitive and must start with two hyphens (`--`).</p>
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`--primary-color: #4A90E2;`}</pre>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">2. Use the variable with `var()`:</h3>
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`h1 {
  color: var(--primary-color);
}`}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BoxSelect className="text-primary"/>Scope: Global vs. Local</CardTitle>
                    <CardDescription>
                        CSS variables are inherited. You can set them globally on the `:root` pseudo-class or locally on a specific element.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`:root {
  /* This variable is available everywhere */
  --global-font-size: 16px;
}

.my-component {
  /* This variable is only available inside .my-component and its children */
  --component-padding: 20px;
  padding: var(--component-padding);
  font-size: var(--global-font-size);
}
`}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Why Use Variables?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li><strong>DRY (Don't Repeat Yourself):</strong> Avoid repeating the same color hex code or pixel value dozens of times.</li>
                        <li><strong>Easy Theming:</strong> Change the entire look of your site by updating just a few variable values. This is how dark mode is often implemented.</li>
                        <li><strong>Readability:</strong> Code like `color: var(--brand-accent-color);` is much more meaningful than `color: #A434F8;`.</li>
                    </ul>
                </CardContent>
            </Card>
            

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how global variables are defined and used. Notice how the second box overrides a variable to change its border color.</CardDescription>
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
