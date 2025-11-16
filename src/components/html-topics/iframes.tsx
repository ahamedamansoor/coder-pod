'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Frame, Play, ShieldAlert, BadgeInfo, CheckCircle } from 'lucide-react';
import React from 'react';

export default function Iframes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const basicIframe = `<iframe 
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13,51.5,0.1,51.51" 
  width="600" 
  height="450" 
  title="A map of London"
></iframe>`;
    
    const sandboxIframe = `<iframe 
  src="https://example.com"
  title="A sandboxed example"
  sandbox="allow-scripts allow-same-origin"
></iframe>`;

    const allowIframe = `<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  width="560" 
  height="315" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`;

    const playgroundCode = {
        html: `<h2>Basic Iframe: OpenStreetMap</h2>
<p>This iframe embeds an interactive map.</p>
<iframe 
  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01,40.70,-73.99,40.72" 
  width="100%" 
  height="300" 
  title="A map of lower Manhattan"
  style="border:1px solid black;"
></iframe>

<h2 style="margin-top: 2rem;">Embedded Video: YouTube</h2>
<p>This iframe embeds a YouTube video with specific permissions.</p>
<iframe 
  src="https://www.youtube.com/embed/LXb3EKWsInQ" 
  title="YouTube video player" 
  width="100%" 
  height="315" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
iframe {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
h2 {
  color: hsl(var(--primary));
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Frame className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Iframes</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Embedding another HTML document within the current one.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is an Iframe?</CardTitle>
                <CardDescription>
                    An Inline Frame (Iframe) is like a window within your webpage that displays a completely separate webpage. It's a way to embed content from another source directly into your site, such as maps, videos, or even other websites.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{basicIframe}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Core Iframe Attributes</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-1">`src`</h3>
                    <p className="text-sm text-muted-foreground">The URL of the page to embed. This is the most important attribute.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-1">`title`</h3>
                    <p className="text-sm text-muted-foreground">Provides a label for the iframe, which is crucial for screen readers and accessibility.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-1">`width` & `height`</h3>
                    <p className="text-sm text-muted-foreground">Specifies the dimensions of the iframe in pixels.</p>
                </div>
            </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2"><ShieldAlert className="w-6 h-6"/>Security: The `sandbox` Attribute</CardTitle>
                <CardDescription>
                    The `sandbox` attribute is a critical security feature. It applies a set of restrictions to the content in the iframe, helping to prevent potentially malicious content from affecting your main page.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">When the `sandbox` attribute is present, it disables things like forms, popups, and scripts. You can then selectively re-enable features by adding specific values.</p>
                <div className="bg-card rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{sandboxIframe}</pre>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1">
                    <li>`allow-forms`: Allows form submission.</li>
                    <li>`allow-scripts`: Allows the embedded document to run scripts (but not create popups).</li>
                    <li>`allow-popups`: Allows popups.</li>
                    <li>`allow-same-origin`: Allows the iframe content to be treated as being from the same origin as the parent page.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle className="w-6 h-6 text-primary"/>Permissions: The `allow` Attribute</CardTitle>
                <CardDescription>
                    The `allow` attribute controls which browser features the iframe can access, such as the camera, microphone, or fullscreen mode. This is part of the Feature Policy.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">This is particularly important when embedding content like YouTube videos that need fullscreen capabilities.</p>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{allowIframe}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to see how iframes are used to embed a map and a video.</CardDescription>
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