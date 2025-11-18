'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Zap, EyeOff, Lightbulb, AlertTriangle } from 'lucide-react';
import React from 'react';

export default function ContentVisibility({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h1>Content Visibility Demo</h1>
<div class="container">
  <div class="item">Section 1</div>
  <div class="item">Section 2</div>
  <div class="item">Section 3</div>
  <div class="item">Section 4</div>
  <div class="item">Section 5</div>
  <div class="item">Section 6</div>
  <div class="item">Section 7</div>
  <div class="item">Section 8</div>
  <div class="item">Section 9</div>
  <div class="item">Section 10</div>
  <div class="item">Section 11</div>
  <div class="item">Section 12</div>
</div>
`,
        css: `body {
  font-family: sans-serif;
}
.container {
  overflow-y: scroll;
  height: 400px;
  border: 1px solid #ccc;
}
.item {
  /* This is the magic! */
  content-visibility: auto;

  /* 
    This is also crucial! It gives an estimated size
    to prevent the scrollbar from jumping.
  */
  contain-intrinsic-size: 200px;
  
  height: 200px;
  border-bottom: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: hsl(var(--muted));
}`,
        js: `// No JavaScript needed!`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">CSS Content Visibility</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A superpower for boosting rendering performance on long pages.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is `content-visibility`?</CardTitle>
                <CardDescription>The `content-visibility` CSS property is one of the most impactful new CSS properties for improving page load performance. It tells the browser it's safe to skip the rendering work (layout, painting, etc.) for an element until it's needed—i.e., until it's about to scroll into the user's viewport.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><EyeOff className="w-6 h-6 text-primary" />How it Works</CardTitle>
                <CardDescription>
                    When an element has `content-visibility: auto;`, the browser does the following:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Off-screen:</strong> The browser skips rendering the element's content entirely. It treats it almost like an empty box.</li>
                    <li><strong>Approaching viewport:</strong> As the user scrolls and the element gets close to being visible, the browser starts rendering it.</li>
                    <li><strong>On-screen:</strong> The content is fully rendered and visible.</li>
                </ol>
            </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>The Scrollbar Problem & `contain-intrinsic-size`</CardTitle>
                <CardDescription>When an off-screen element isn't rendered, its height is 0. This makes the total scroll height of the page incorrect, causing the scrollbar to jump around as you scroll and new content is rendered. This is a bad user experience.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">The solution is the companion property, `contain-intrinsic-size`. You use it to provide a placeholder size for the element when it's not rendered. This allows the browser to correctly calculate the scrollbar size, even before the content is rendered.</p>
                <div className="bg-background rounded-md p-4 mt-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`section {
  content-visibility: auto;
  contain-intrinsic-size: 500px; /* An estimate of the element's height */
}`}</pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. While it's hard to see the performance benefit visually in a small demo, you can open your browser's performance monitor (in Developer Tools) and record a performance profile while scrolling to see how much less "Rendering" work the browser has to do.
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
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>When to use it</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">`content-visibility` is most effective on long pages with many distinct sections, like a blog with many articles, a product listing page, or a social media feed. Applying it to these individual sections can provide significant performance gains.</p>
            </CardContent>
        </Card>

      </div>
    );
}
