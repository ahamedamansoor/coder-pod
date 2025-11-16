
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heading1, Heading2, Heading3, Pilcrow, Play, AlertTriangle } from 'lucide-react';
import React from 'react';

export default function HtmlHeadingsAndParagraphs({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const playgroundCode = {
        html: `<h1>Main Title of the Page (h1)</h1>
<p>This is a paragraph introducing the main topic. It provides an overview and sets the stage for the sections to follow.</p>

<h2>First Main Section (h2)</h2>
<p>This paragraph explains the first key point. It's a block of text related to the h2 heading.</p>

<h3>A Subsection (h3)</h3>
<p>This paragraph goes into more detail about a specific aspect of the first main section.</p>

<h2>Second Main Section (h2)</h2>
<p>This is a new section, at the same level of importance as the first one. Notice how the structure is clear and logical.</p>
`,
        css: `body {
  font-family: sans-serif;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  color: hsl(var(--primary));
  font-weight: bold;
  margin-bottom: 0.5rem;
}

h1 { font-size: 2.5em; }
h2 { font-size: 2em; }
h3 { font-size: 1.75em; }

p {
  margin-bottom: 1rem;
  color: hsl(var(--muted-foreground));
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Heading1 className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Headings & Paragraphs</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Structuring your text content for readability and meaning.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Heading1 className="w-6 h-6 text-primary"/>Headings (`<h1>` to `<h6>`)</CardTitle>
                <CardDescription>Headings are used to define the hierarchical structure of your content, like an outline for a document.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p>There are six levels of headings, from `<h1>` (the most important) to `<h6>` (the least important). Browsers display these with decreasing font sizes by default.</p>
                <div className="bg-muted p-4 rounded-lg">
                    <h1>h1: The most important heading</h1>
                    <h2>h2: A secondary heading</h2>
                    <h3>h3: A sub-heading</h3>
                    <h4>h4: A sub-sub-heading</h4>
                    <h5>h5: Even less important</h5>
                    <h6>h6: The least important heading</h6>
                </div>
            </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>Crucial Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p><strong className="text-foreground">Use Only One `<h1>` Per Page:</strong> The `<h1>` should be the main title of your page content, similar to the main title of a book. Using more than one can confuse search engines and screen readers.</p>
                <p><strong className="text-foreground">Don't Skip Heading Levels:</strong> You should follow a logical order. Don't jump from an `<h2>` to an `<h4>` just because you like the smaller font size. The structure `h1 -> h2 -> h3` is correct. The structure `h1 -> h3` is not.</p>
                <p><strong className="text-foreground">Don't Use Headings for Styling:</strong> Use headings to structure your content, not just to make text bold or big. If you only want to style text, use CSS instead.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Pilcrow className="w-6 h-6 text-primary" />Paragraphs (`<p>`)</CardTitle>
                <CardDescription>The `<p>` tag is used to define a paragraph of text. Browsers automatically add some space (a margin) before and after each paragraph.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Here is an example of a well-structured document using headings and paragraphs. Notice the logical hierarchy.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg border">
                    <pre className="font-mono text-sm whitespace-pre-wrap">{playgroundCode.html}</pre>
                </div>
                 <div className="mt-4">
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Try in Web Playground
                    </Button>
                </div>
            </CardContent>
        </Card>

      </div>
    );
}
