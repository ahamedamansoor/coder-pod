
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Play, ExternalLink, Link as LinkIcon, FileImage, ShieldAlert, BadgeInfo, Frame, Rocket } from 'lucide-react';
import React from 'react';

export default function HtmlImages({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const simpleImageCode = `<img 
  src="https://picsum.photos/seed/picsum/400/250" 
  alt="A random scenic image from Picsum Photos"
>`;

    const attributesCode = `<img 
  src="https://picsum.photos/seed/road/400/250" 
  alt="A winding road through a forest" 
  width="400" 
  height="250"
>`;

    const lazyLoadingCode = `<img 
  src="https://picsum.photos/seed/lazy/400/250" 
  alt="This image will only load when you scroll near it."
  width="400"
  height="250"
  loading="lazy"
>`;

    const linkImageCode = `<a href="https://picsum.photos/" target="_blank">
  <img 
    src="https://picsum.photos/seed/mountains/400/250" 
    alt="Click to visit Picsum Photos" 
    width="400" 
    height="250"
  >
</a>`;
    
    const figureCode = `<figure>
  <img 
    src="https://picsum.photos/seed/city/400/250" 
    alt="A bustling city street at night" 
    width="400" 
    height="250"
  >
  <figcaption>Fig.1 - A city skyline at night, showcasing modern architecture.</figcaption>
</figure>`;

    const fullPlaygroundCode = {
        html: `<h1>Image Showcase</h1>

<h2>Basic Image with Sizing</h2>
<img 
  src="https://picsum.photos/seed/beach/300/200" 
  alt="A beautiful sunny beach"
  width="300"
  height="200"
>

<h2>Linked Image</h2>
<p>Click the image below to go to Unsplash.</p>
<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://picsum.photos/seed/camera/300/200" 
    alt="A vintage camera, click to visit Unsplash"
    width="300"
    height="200"
  >
</a>

<h2>Image with a Semantic Caption</h2>
<figure>
  <img 
    src="https://picsum.photos/seed/forest/300/200" 
    alt="A dense green forest with sunlight filtering through."
    width="300"
    height="200"
  >
  <figcaption>Fig.1 - A forest in the morning light.</figcaption>
</figure>

<p style="margin-top: 100vh;">Scroll down to see the lazy-loaded image...</p>

<h2>Lazy-Loaded Image</h2>
<img 
    src="https://picsum.photos/seed/lazyload/300/200" 
    alt="This image loaded only when it was needed."
    width="300"
    height="200"
    loading="lazy"
>
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
img {
  border: 2px solid hsl(var(--border));
  border-radius: 8px;
  max-width: 100%; /* Important for responsiveness */
  height: auto;
  display: block; /* To prevent extra space below */
  margin-bottom: 1rem;
}
a img {
  border-color: hsl(var(--primary));
  transition: transform 0.2s ease-in-out;
}
a:hover img {
  transform: scale(1.05);
  box-shadow: 0 4px 15px hsla(var(--foreground), 0.1);
}
figure {
  border: 1px solid hsl(var(--border));
  padding: 1rem;
  border-radius: 8px;
  display: inline-block; /* To make it wrap the image */
  background-color: hsl(var(--muted));
  margin: 0;
}
figcaption {
  margin-top: 0.5rem;
  font-style: italic;
  font-size: 0.9rem;
  text-align: center;
  color: hsl(var(--muted-foreground));
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <FileImage className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Images</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Embedding visual content into your web pages.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Anatomy of the `&lt;img&gt;` Tag</CardTitle>
                <CardDescription>The `&lt;img&gt;` tag is used to embed an image. It's an "empty" or "void" element, meaning it has no closing tag.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg border">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{simpleImageCode}</pre>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <p className="text-sm">It requires at least two attributes: <code className="font-mono bg-foreground/10 p-1 rounded">src</code> to specify the image source and <code className="font-mono bg-foreground/10 p-1 rounded">alt</code> for alternative text.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Attributes: `src` and `alt`</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><ExternalLink className="w-5 h-5 text-primary"/>`src` (Source)</h3>
                    <p className="text-xs text-muted-foreground mb-2">Specifies the path to the image. It can be an absolute URL to another website or a relative path to a file on your own server.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><BadgeInfo className="w-5 h-5 text-primary"/>`alt` (Alternative Text)</h3>
                    <p className="text-xs text-muted-foreground mb-2">Provides a text description of the image. This is crucial for accessibility (for screen readers) and is displayed if the image fails to load.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Sizing: `width` and `height`</CardTitle>
                <CardDescription>Specifying the image dimensions helps the browser reserve space for the image before it loads, preventing the page layout from jumping around.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{attributesCode}</pre>
                </div>
                 <Button onClick={() => onOpenWebPlayground(attributesCode, 'img { border: 2px solid red; }', '')}>
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary"><Rocket className="w-5 h-5"/>Performance Boost: Lazy Loading</CardTitle>
                <CardDescription>The `loading="lazy"` attribute tells the browser to wait to load an image until the user scrolls near it. This is great for performance.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">This simple attribute can significantly speed up your initial page load time and save data for users on slow connections, especially on pages with many images below the fold.</p>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{lazyLoadingCode}</pre>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Note: The effect is best observed on a long page. Use your browser's developer tools (Network tab) to see images loading as you scroll.</p>
            </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><LinkIcon className="w-5 h-5 text-primary"/>Image as a Link</CardTitle>
                    <CardDescription>To make an image clickable, simply wrap the `&lt;img&gt;` tag within an `&lt;a&gt;` (anchor) tag.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{linkImageCode}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(linkImageCode, 'img { border: 2px solid blue; }', '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Frame className="w-5 h-5 text-primary"/>Semantic Captions</CardTitle>
                    <CardDescription>The `&lt;figure&gt;` and `&lt;figcaption&gt;` tags are the correct way to associate an image with a caption.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{figureCode}</pre>
                    </div>
                     <Button onClick={() => onOpenWebPlayground(figureCode, fullPlaygroundCode.css, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Open this complete example in the Web Playground to see all image types in action.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(fullPlaygroundCode.html, fullPlaygroundCode.css, fullPlaygroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>
      </div>
    );
}
