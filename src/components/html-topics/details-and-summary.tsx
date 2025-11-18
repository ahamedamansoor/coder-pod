
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Lightbulb, Check, Shield } from 'lucide-react';
import React from 'react';

export default function DetailsAndSummary({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>FAQ Section</h2>

<details>
  <summary>What is HTML?</summary>
  <p>HTML stands for HyperText Markup Language. It's the standard markup language for creating web pages.</p>
</details>

<details open>
  <summary>What is CSS?</summary>
  <p>CSS stands for Cascading Style Sheets. It's a style sheet language used for describing the presentation of a document written in HTML.</p>
</details>

<details>
  <summary>What is JavaScript?</summary>
  <p>JavaScript is a programming language that enables interactive web pages. It's one of the core technologies of the World Wide Web.</p>
</details>
`,
        css: `details {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}

summary {
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  list-style-type: '❓ '; /* Custom marker */
}

details[open] > summary {
  list-style-type: '✅ '; /* Custom marker for open state */
  color: hsl(var(--primary));
}

details > p {
  padding: 0 1rem 1rem 1rem;
  margin-left: 2rem;
  border-left: 2px solid hsl(var(--border));
}`,
        js: `// No JavaScript needed! The browser handles all the logic.`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <BookOpen className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Details &amp; Summary Elements</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating native, accessible disclosure widgets (accordions) with zero JavaScript.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What are they?</CardTitle>
                <CardDescription>The `&lt;details&gt;` and `&lt;summary&gt;` elements work together to create a disclosure widget in which information is hidden or revealed. This is commonly used for accordions, FAQs, and collapsible sections.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2">
                    <li>`&lt;details&gt;`: The container for the entire widget.</li>
                    <li>`&lt;summary&gt;`: The "handle" or visible label that the user clicks. This must be the first child of the `&lt;details&gt;` element.</li>
                    <li>Any other content inside `&lt;details&gt;` is the hidden content.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Why Use Native Accordions?</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-green-600"/>Accessible by Default</h3>
                    <p className="text-xs text-muted-foreground">It's keyboard-navigable and correctly announces its state (expanded/collapsed) to screen readers out of the box.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600"/>Zero JavaScript</h3>
                    <p className="text-xs text-muted-foreground">The browser handles all the open/close logic, making your code simpler and more lightweight.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600"/>Customizable with CSS</h3>
                    <p className="text-xs text-muted-foreground">You can style the open/closed states, including the default triangle marker, using CSS selectors.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Click on the questions to reveal the answers. Notice the second item is open by default because of the `open` attribute.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>

      </div>
    );
}
