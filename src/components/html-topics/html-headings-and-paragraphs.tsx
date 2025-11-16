
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Heading1, Heading2, Heading3, Pilcrow, Play, AlertTriangle } from 'lucide-react';
import React from 'react';

export default function HtmlHeadingsAndParagraphs({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    const hierarchy = [
        { Icon: Heading1, tag: '<h1>', description: 'The main headline. There should only be ONE per page for SEO and accessibility.' },
        { Icon: Heading2, tag: '<h2>', description: 'Main section titles. You can have multiple of these.' },
        { Icon: Heading3, tag: '<h3>', description: 'Sub-sections within an <h2> section.' },
    ];
    
    const playgroundCode = {
        html: `<!-- The main title of the whole page -->
<h1>The Ultimate Guide to Making Coffee</h1>

<p>This is an introductory paragraph about the wonderful world of coffee.</p>

<!-- A major section -->
<h2>Chapter 1: Choosing Your Beans</h2>
<p>The first step to a great cup of coffee is selecting high-quality beans. There are two main types: Arabica and Robusta.</p>

<!-- A sub-section within Chapter 1 -->
<h3>Arabica Beans</h3>
<p>Known for their complex aroma and flavor, Arabica beans are the most popular choice worldwide.</p>

<!-- Another sub-section within Chapter 1 -->
<h3>Robusta Beans</h3>
<p>These beans have a stronger, harsher taste and higher caffeine content.</p>

<!-- Another major section -->
<h2>Chapter 2: The Grinding Process</h2>
<p>How you grind your beans has a huge impact on the final taste. The grind size should match your brewing method.</p>`,
        css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  color: #333;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Georgia', serif;
  color: hsl(var(--primary));
  line-height: 1.2;
}
h1 {
  font-size: 2.5rem;
  border-bottom: 2px solid hsl(var(--primary) / 0.2);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 2rem;
  margin-top: 2rem;
}
h3 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}
p {
  margin-bottom: 1rem;
  color: #555;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Newspaper className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Headings & Paragraphs</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating structure and hierarchy in your content.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The Newspaper Analogy</CardTitle>
                <CardDescription>Think of your web page like a newspaper article. Headings are the titles that organize the content, and paragraphs are the actual text you read.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This structure isn't just for looks; it's how search engines (like Google) and screen readers (for visually impaired users) understand the outline and importance of your content.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Headings: The Document Outline</CardTitle>
                <CardDescription>There are six levels of headings in HTML, from `<h1>` to `<h6>`. They create a hierarchical structure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {hierarchy.map((item) => (
                    <div key={item.tag} className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                            <item.Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <code className="font-bold text-lg font-mono">{item.tag}</code>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Paragraphs: The Body Text</CardTitle>
                <CardDescription>The `<p>` tag is used to define a paragraph. Browsers automatically add some space (a margin) before and after each paragraph.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Pilcrow className="w-6 h-6" />
                </div>
                 <p className="text-sm text-muted-foreground">You should use `<p>` tags to wrap blocks of text. Don't just use line breaks (`<br>`) to separate them, as this doesn't provide the same structural meaning.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Here’s an example showing a properly structured document. Notice how `<h2>` tags represent major sections and `<h3>` tags are nested within them.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{playgroundCode.html}</pre>
                </div>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Try it in the Web Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-destructive bg-destructive/10">
             <CardHeader className="flex-row items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive"/>
                <div>
                    <CardTitle className="text-destructive">Common Mistake</CardTitle>
                    <CardDescription className="text-destructive/80">Never use headings just to make text BIG or **bold**. Their main purpose is to give your document structure. Use CSS (`font-size`, `font-weight`) for styling instead.</CardDescription>
                </div>
            </CardHeader>
        </Card>
      </div>
    );
}
