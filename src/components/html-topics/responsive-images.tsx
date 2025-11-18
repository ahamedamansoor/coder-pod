
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Play, Lightbulb, Check, Shield, Smartphone, Tablet, Laptop, Maximize } from 'lucide-react';
import React from 'react';

export default function ResponsiveImages({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Responsive Images Demo</h2>
<p>Resize the width of the preview pane to see the browser load different images.</p>

<h3>Using 'srcset' and 'sizes' for different resolutions</h3>
<img 
  srcset="https://picsum.photos/seed/resp1/400/267 400w, 
          https://picsum.photos/seed/resp1/800/533 800w, 
          https://picsum.photos/seed/resp1/1200/800 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  src="https://picsum.photos/seed/resp1/800/533" 
  alt="A city skyline, which loads at different resolutions."
  data-ai-hint="city urban">

<hr />

<h3>Using '&lt;picture&gt;' for art direction</h3>
<picture>
  <!-- Show a tall, cropped image on small screens -->
  <source media="(max-width: 799px)" srcset="https://picsum.photos/seed/resp2/400/600">
  <!-- Show a wide, landscape image on large screens -->
  <source media="(min-width: 800px)" srcset="https://picsum.photos/seed/resp2/1200/400">
  <!-- Fallback image -->
  <img src="https://picsum.photos/seed/resp2/1200/400" alt="A landscape that changes crop based on screen size." data-ai-hint="nature landscape">
</picture>
`,
        css: `body { 
  font-family: sans-serif;
  padding: 1rem;
}
img {
  max-width: 100%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
}
hr {
  margin: 2rem 0;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Maximize className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Responsive Images</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Serving the right image for the right screen to improve performance and user experience.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Responsive Images?</CardTitle>
                <CardDescription>Serving a huge desktop image to a small mobile phone is wasteful. It slows down page load and uses unnecessary data. Responsive images solve two main problems:</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold text-lg">Resolution Switching</h3>
                    <p className="text-sm text-muted-foreground">Serving smaller images to narrow screens (like mobile) and larger, higher-quality images to wider screens (like desktops).</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold text-lg">Art Direction</h3>
                    <p className="text-sm text-muted-foreground">Serving completely different images for different screen sizes (e.g., a cropped, portrait image for mobile and a full landscape image for desktop).</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Resolution Switching: `srcset` and `sizes`</CardTitle>
                <CardDescription>These two attributes work together on an `<img>` tag to let the browser choose the best image from a list.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-4 mb-4 text-muted-foreground">
                    <li><strong>`srcset`</strong>: Provides a comma-separated list of image URLs and their intrinsic widths (e.g., `small.jpg 400w, medium.jpg 800w`). The `w` unit tells the browser the actual width of the image file.</li>
                    <li><strong>`sizes`</strong>: Provides a comma-separated list of media conditions and the size the image will be on the page for that condition (e.g., `(max-width: 600px) 100vw, 50vw`). `100vw` means the image will be 100% of the viewport width. The last item is the default.</li>
                </ul>
                <p className="text-sm font-semibold">With this information, the browser can intelligently decide: "Okay, the screen is 500px wide, and the image will take up 100% of that space. The `small.jpg` (400w) is a bit small, but the `medium.jpg` (800w) is a good fit. I'll download that one."</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Art Direction: The `&lt;picture&gt;` Element</CardTitle>
                <CardDescription>The `<picture>` element is a wrapper that contains multiple `<source>` elements and one `<img>` element. This gives you more explicit control.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    <li>The browser goes through each `<source>` element and checks its `media` attribute.</li>
                    <li>It will use the first `<source>` that matches the media query and ignore the rest.</li>
                    <li>The `<img>` tag at the end is a mandatory fallback for browsers that don't support `<picture>` or if no media conditions match.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. In your browser's developer tools, go to the "Network" tab. As you resize the preview pane, you'll see different image files being downloaded.</CardDescription>
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
