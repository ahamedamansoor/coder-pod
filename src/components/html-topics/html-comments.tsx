
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Play, Lightbulb, Code, Ban } from 'lucide-react';
import React from 'react';

export default function HtmlComments({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const singleLineExample = `<!-- This is a single-line comment -->
<p>This paragraph is visible.</p>`;

    const multiLineExample = `<!--
  This is a multi-line comment.
  It can span across several lines.
  Useful for longer explanations.
-->
<p>Another visible paragraph.</p>`;
    
    const commentOutExample = `<!-- <p>This paragraph is commented out and will not be displayed.</p> -->
<p>But this one will!</p>`;

    const playgroundCode = {
        html: `<h1>HTML Comments Demo</h1>

<!-- This is a comment explaining the next section -->
<h2>My Favorite Foods</h2>
<ul>
  <li>Pizza</li>
  <!-- <li>Sushi</li>  <-- Temporarily removed this item -->
  <li>Tacos</li>
</ul>

<!--
  TODO: Add a new section here about hobbies.
  This is a reminder for later.
-->
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}`,
        js: ''
    };


    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <MessageSquare className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Comments</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Leaving notes in your code that the browser will ignore.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Use Comments?</CardTitle>
                <CardDescription>Comments are essential for making your code understandable for yourself and other developers.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Lightbulb className="w-5 h-5 text-primary"/>Explain Your Code</h3>
                    <p className="text-xs text-muted-foreground">Clarify the purpose of a section or explain complex logic.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Ban className="w-5 h-5 text-primary"/>Temporarily Disable Code</h3>
                    <p className="text-xs text-muted-foreground">Quickly "comment out" a block of HTML to hide it without deleting it.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Code className="w-5 h-5 text-primary"/>Leave Reminders</h3>
                    <p className="text-xs text-muted-foreground">Add "TODO" notes or reminders for future work directly in the code.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Syntax</CardTitle>
                <CardDescription>An HTML comment starts with `&lt;!--` and ends with `--&gt;`. Everything in between is ignored by the browser.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{singleLineExample}</pre>
                </div>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{multiLineExample}</pre>
                </div>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{commentOutExample}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Open this example in the Web Playground to see how comments work. Notice that the commented-out list item does not appear in the output.</CardDescription>
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
