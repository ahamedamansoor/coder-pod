
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Box, Text, Square, PenLine, Code, Play } from 'lucide-react';
import React from 'react';

export default function BlockVsInline({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const playgroundCode = {
        html: `<h2>Block-level Elements (like div)</h2>
<div class="box block">Block 1</div>
<div class="box block">Block 2</div>

<h2>Inline Elements (like span)</h2>
<p>
  This is a sentence with <span class="box inline">Inline 1</span> and <span class="box inline">Inline 2</span> inside it. They flow like words.
</p>

<h2>The Best of Both: inline-block</h2>
<p>
  Now we can set width/height: <span class="box inline-block">Inline-Block 1</span> <span class="box inline-block">Inline-Block 2</span> and they still flow.
</p>
`,
        css: `body {
  font-family: sans-serif;
}
.box {
  border: 2px solid;
  padding: 10px;
  margin: 10px;
}
.block {
  border-color: hsl(var(--primary));
  background-color: hsla(var(--primary), 0.1);
  width: 200px; /* Block elements respect width */
  height: 50px; /* Block elements respect height */
}
.inline {
  border-color: hsl(var(--destructive));
  background-color: hsla(var(--destructive), 0.1);
  width: 200px; /* THIS IS IGNORED */
  height: 50px; /* THIS IS IGNORED */
}
.inline-block {
  border-color: hsl(var(--chart-4));
  background-color: hsla(var(--chart-4), 0.1);
  width: 150px; /* This works now! */
  height: 40px;  /* This works now! */
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Box className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Block vs. Inline Elements</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding the two fundamental layout behaviors in HTML.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The "Paragraph vs. Word" Analogy</CardTitle>
                <CardDescription>Think of your web page as a document.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Box className="w-5 h-5 text-primary"/>Block-level Elements are like PARAGRAPHS</h3>
                    <p className="text-sm text-muted-foreground">They demand their own space. They always start on a new line and stack vertically, one after the other.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Text className="w-5 h-5 text-primary"/>Inline-level Elements are like WORDS</h3>
                    <p className="text-sm text-muted-foreground">They fit within the flow of content. They don't start on a new line and sit next to each other horizontally.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Characteristics</CardTitle>
                <CardDescription>Here are the key differences in behavior.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Square className="w-5 h-5 text-primary"/>Block-level</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Always starts on a new line.</li>
                        <li>Takes up the full width available by default.</li>
                        <li>You CAN set `width`, `height`, `margin` (top/bottom), and `padding`.</li>
                        <li>Common examples: `div`, `p`, `h1`-`h6`, `ul`, `li`, `section`, `article`.</li>
                    </ul>
                </div>
                 <div className="bg-background border p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Text className="w-5 h-5 text-primary"/>Inline-level</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Does NOT start on a new line.</li>
                        <li>Only takes up as much width as its content needs.</li>
                        <li>You CANNOT set `width`, `height`, or top/bottom `margin`.</li>
                        <li>Common examples: `span`, `a`, `strong`, `em`, `img`, `input`.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary"><PenLine className="w-5 h-5"/>Changing Behavior with CSS</CardTitle>
                <CardDescription>You are not stuck with an element's default behavior! The CSS `display` property lets you change it.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg border">
                    <code className="font-mono text-sm bg-background p-1 rounded">display: block;</code>
                    <p className="text-xs text-muted-foreground mt-1">Makes an inline element behave like a block.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <code className="font-mono text-sm bg-background p-1 rounded">display: inline;</code>
                    <p className="text-xs text-muted-foreground mt-1">Makes a block element behave like an inline one.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <code className="font-mono text-sm bg-background p-1 rounded">display: inline-block;</code>
                    <p className="text-xs text-muted-foreground mt-1">The best of both worlds! It flows like an inline element but you CAN set width, height, and vertical margins.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Notice how `width` and `height` are ignored by the inline elements, but respected by block and inline-block.</CardDescription>
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
