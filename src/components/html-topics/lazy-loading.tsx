
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Image as ImageIcon, Frame, Lightbulb, Check, Shield } from 'lucide-react';
import React from 'react';

export default function LazyLoading({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Regularly Loaded Image</h2>
<img src="https://picsum.photos/seed/img1/400/250" alt="This loads immediately" width="400" height="250" data-ai-hint="nature forest">

<p style="margin-top: 100vh;">Scroll down to see the lazy-loaded content...</p>

<h2>Lazy-Loaded Image</h2>
<img src="https://picsum.photos/seed/img2/400/250" loading="lazy" alt="This only loads when you scroll near it" width="400" height="250" data-ai-hint="nature mountain">

<h2>Lazy-Loaded Iframe</h2>
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.5,-0.09,51.51" loading="lazy" width="400" height="250" title="Lazy-loaded map"></iframe>
`,
        css: `body { 
  font-family: sans-serif;
  padding: 2rem;
}
img, iframe {
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: block;
}`,
        js: `// No JavaScript needed!`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Rocket className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Native Lazy Loading</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Improving performance by deferring the loading of off-screen images and iframes.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is Lazy Loading?</CardTitle>
                <CardDescription>Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load them only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Instead of loading every single image and iframe when a user first visits a page, we tell the browser to wait and only load them as the user scrolls them into view.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>How it Works: The `loading` Attribute</CardTitle>
                <CardDescription>Natively, lazy loading is enabled by adding the `loading="lazy"` attribute to `&lt;img&gt;` and `&lt;iframe&gt;` elements.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">For Images</h3>
                        <pre className="font-mono text-sm bg-background p-2 rounded-md">{`<img src="..." alt="..." loading="lazy">`}</pre>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">For Iframes</h3>
                        <pre className="font-mono text-sm bg-background p-2 rounded-md">{`<iframe src="..." title="..." loading="lazy"></iframe>`}</pre>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground and then open your browser's Developer Tools to the "Network" tab. You'll see the first image load immediately. As you scroll down, you'll see a new network request for the second image appear just as it comes into view.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Don't lazy-load everything!</strong> Images that are "above the fold" (visible without scrolling) should be loaded normally so they appear instantly. Use `loading="lazy"` for content further down the page.</li>
                    <li><strong>Provide dimensions:</strong> Always specify `width` and `height` attributes on your images. This allows the browser to reserve the correct amount of space for the image before it loads, preventing the page layout from "jumping" as images load in.</li>
                </ul>
            </CardContent>
        </Card>

      </div>
    );
}
