
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heading1, Pilcrow, Play, Search, Accessibility, BookOpen } from 'lucide-react';
import React from 'react';

export default function HtmlHeadingsAndParagraphs({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const playgroundCode = {
        html: `<h1>This is the Main Title (h1)</h1>
<p>This is a paragraph introducing the main topic. It provides an overview and sets the stage for the sections to follow.</p>

<h2>This is a Major Section (h2)</h2>
<p>This paragraph belongs to the first major section. It elaborates on a key point related to the main title.</p>

<h3>A Sub-Section (h3)</h3>
<p>This is a more detailed point within the major section. It breaks down the information further.</p>

<h2>Another Major Section (h2)</h2>
<p>This marks the beginning of a new, distinct topic at the same level of importance as the first major section.</p>`,
        css: `body {
  font-family: sans-serif;
  line-height: 1.6;
}
h1, h2, h3, h4, h5, h6 {
  color: hsl(var(--primary));
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
p {
  color: hsl(var(--muted-foreground));
  margin-bottom: 1rem;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Heading1 className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Headings & Paragraphs</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Structuring your text content for readability and meaning.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-primary"/>The Document Outline Analogy</CardTitle>
                <CardDescription>Think of headings as the outline of a book or a report. They create a logical structure that is easy to follow.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg border">
                    <p className="font-bold">`&lt;h1&gt;`: The Book Title</p>
                    <div className="pl-4 border-l ml-2">
                        <p className="font-bold mt-2">`&lt;h2&gt;`: A Chapter Title</p>
                        <div className="pl-4 border-l ml-2">
                           <p className="font-semibold mt-2">`&lt;h3&gt;`: A Section within a Chapter</p>
                            <div className="pl-4 border-l ml-2">
                                <p className="text-sm mt-2">`&lt;h4&gt;`...`&lt;h6&gt;`: Sub-sections...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">This hierarchy is crucial for both search engines and assistive technologies like screen readers to understand your content's structure.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Heading Tags: `&lt;h1&gt;` to `&lt;h6&gt;`</CardTitle>
                <CardDescription>HTML provides six levels of headings. The number indicates the level of importance.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg border flex flex-col gap-2 text-foreground">
                    <h1>h1: The most important heading</h1>
                    <h2>h2: A major section heading</h2>
                    <h3>h3: A sub-section heading</h3>
                    <h4>h4: A deeper sub-section</h4>
                    <h5>h5: Even deeper</h5>
                    <h6>h6: The least important heading</h6>
                </div>
                 <div className="mt-4 p-4 rounded-lg border-primary/50 bg-primary/10 text-primary-foreground">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-2"><Search className="w-5 h-5"/>Important Rule: One `&lt;h1&gt;` Per Page</h3>
                    <p className="text-sm text-primary/90">For best SEO and accessibility practices, you should only have **one** `&lt;h1&gt;` element on each page. It should represent the main title or purpose of that entire page.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Pilcrow className="w-6 h-6 text-primary"/>Paragraph Tag: `&lt;p&gt;`</CardTitle>
                <CardDescription>The `&lt;p&gt;` tag is used to define a paragraph of text. Browsers automatically add some space (a margin) before and after each paragraph.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`<p>This is the first paragraph. It contains several sentences that form a single block of text.</p>
<p>This is the second paragraph. Notice how the browser creates a space between this one and the one above.</p>`}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It All In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to see how the browser renders the different heading levels and paragraph spacing.</CardDescription>
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
