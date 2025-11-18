'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, FileCode, Link, Zap, Clock, BrainCircuit } from 'lucide-react';
import React from 'react';

export default function HtmlDocumentMetadata({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Metadata</title>
    
    <!-- Base URL for all relative URLs in the page -->
    <base href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
    
    <!-- Preconnect to an origin to speed up subsequent requests -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    
    <!-- Eagerly fetch a high-priority resource -->
    <link rel="preload" href="style.css" as="style">
    
    <!-- Fetch a low-priority resource during browser idle time -->
    <link rel="prefetch" href="next-page.html">
    
    <link rel="stylesheet" href="style.css">
    
    <!-- Defer script execution until after the page has parsed -->
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Advanced Document Metadata</h1>
    <p>This page uses several advanced metadata tags in the head.</p>
    <p>The link below is relative, but because of the &lt;base&gt; tag, it will point to an MDN page.</p>
    <a href="Element/base">Learn about the &lt;base&gt; element</a>
</body>
</html>`,
        css: `body { font-family: sans-serif; } a { color: hsl(var(--primary)); }`,
        js: `console.log("This script was deferred and ran after the HTML was parsed.");`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <BrainCircuit className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Advanced Document Metadata</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Fine-tuning your document's behavior with special head tags.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The &lt;base&gt; Element</CardTitle>
                <CardDescription>Specifies the base URL to use for all relative URLs in a page. You can only have one `&lt;base&gt;` element in a document.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm">For example, if you set <code className="font-mono bg-muted p-1 rounded">&lt;base href="https://example.com/docs/"&gt;</code>, a link like <code className="font-mono bg-muted p-1 rounded">&lt;a href="page1.html"&gt;</code> will actually point to `https://example.com/docs/page1.html`.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Link className="w-5 h-5 text-primary"/>Advanced &lt;link&gt; Relations</CardTitle>
                <CardDescription>Beyond `rel="stylesheet"`, the `&lt;link&gt;` tag has powerful attributes for performance optimization.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <p><code className="font-mono bg-muted p-1 rounded">rel="preconnect"</code>: Tells the browser to connect to an origin in advance, saving time on future requests.</p>
                <p><code className="font-mono bg-muted p-1 rounded">rel="preload"</code>: Tells the browser to fetch a high-priority resource (like a critical script or font) as soon as possible.</p>
                <p><code className="font-mono bg-muted p-1 rounded">rel="prefetch"</code>: A hint to the browser to fetch a low-priority resource (like the next page a user might visit) during idle time.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary"/>&lt;script&gt; Attributes: `async` vs. `defer`</CardTitle>
                <CardDescription>These attributes control how external scripts are loaded and executed, preventing them from blocking your page from rendering.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold flex items-center gap-2 mb-2"><Clock className="w-4 h-4"/>`async`</h3>
                    <p className="text-xs text-muted-foreground">The script is downloaded "asynchronously" alongside the HTML. It will execute as soon as it's downloaded, which might interrupt the HTML parsing. The order of execution for multiple async scripts is not guaranteed.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold flex items-center gap-2 mb-2"><Clock className="w-4 h-4"/>`defer`</h3>
                    <p className="text-xs text-muted-foreground">The script is also downloaded asynchronously, but the browser guarantees it will only execute *after* the entire HTML document has been parsed. The order of execution for multiple defer scripts is maintained.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Check the `<head>` of the code in the playground to see these advanced tags in use.</CardDescription>
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
