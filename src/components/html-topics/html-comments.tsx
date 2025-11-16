
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Play, Lightbulb, EyeOff, FileCode } from 'lucide-react';
import React from 'react';

export default function HtmlComments({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    
    const purposes = [
        { icon: FileCode, title: 'Explain Code', description: 'Clarify the purpose of a complex section for yourself or other developers.' },
        { icon: Lightbulb, title: 'Leave Notes', description: 'Add reminders or suggestions for future improvements (e.g., "TODO: Add more images here").' },
        { icon: EyeOff, title: 'Disable Code', description: 'Temporarily hide a piece of HTML during testing or debugging without deleting it.' },
    ];
    
    const playgroundCode = {
        html: `<!-- This is a comment. It will not be displayed in the browser. -->

<h1>My Website</h1>

<p>This is a visible paragraph.</p>

<!-- 
  This is a multi-line comment.
  The section below is temporarily disabled for testing.
-->

<!--
<section>
  <h2>Temporarily Hidden Section</h2>
  <p>This paragraph is inside a comment, so you won't see it!</p>
</section>
-->

<!-- TODO: Re-enable the section above before deploying. -->

<p>This is another visible paragraph after the commented-out section.</p>`,
        css: `body {
  font-family: sans-serif;
  background-color: #f9f9f9;
}
h1 {
  color: hsl(var(--primary));
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
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Leaving invisible notes in your code for developers.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What are HTML Comments?</CardTitle>
                <CardDescription>
                    Comments are pieces of text in your HTML file that are **completely ignored by the browser**. They are not displayed on the web page. Their only purpose is to help developers understand the code.
                </CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The Three Main Purposes of Comments</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                {purposes.map((p) => (
                    <div key={p.title} className="bg-muted p-4 rounded-lg border">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-2">
                            <p.icon className="w-5 h-5 text-primary"/>
                            {p.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Syntax: How to Write a Comment</CardTitle>
                <CardDescription>An HTML comment starts with `<!--` and ends with `-->`. Everything in between is considered a comment.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold text-foreground">Single-Line Comment</h3>
                     <div className="bg-muted p-3 rounded-lg border font-mono text-sm mt-2">
                        &lt;!-- This is a single-line comment --&gt;
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Multi-Line Comment</h3>
                     <div className="bg-muted p-3 rounded-lg border font-mono text-sm mt-2">
                        &lt;!-- <br/>
                        &nbsp;&nbsp;This comment <br/>
                        &nbsp;&nbsp;spans multiple lines.<br/>
                        --&gt;
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Try it Out: See What the Browser Ignores</CardTitle>
                <CardDescription>Notice how the "Temporarily Hidden Section" and the notes do not appear in the live preview when you open this in the playground.</CardDescription>
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

        <Card className="border-yellow-500/50 bg-yellow-500/5">
            <CardHeader>
                <CardTitle className="text-yellow-700 flex items-center gap-2"><Lightbulb className="w-6 h-6"/>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-yellow-800">
                    <li>**Be clear and concise.** Good comments save time, they don't waste it.</li>
                    <li>**Don't comment on the obvious.** A comment like `<!-- This is a paragraph -->` above a `<p>` tag is not helpful.</li>
                    <li>**Never put sensitive information in comments.** Although they are not displayed on the page, they are still visible to anyone who views the page's source code.</li>
                </ul>
            </CardContent>
        </Card>

      </div>
    );
}
