
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Box, Play, Search, Accessibility, Code, Building, Sidebar, List, Newspaper, Image, Clock } from 'lucide-react';
import React from 'react';

export default function HtmlSemanticElements({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    
    const whySemantic = [
        { icon: Search, title: "Better SEO", description: "Search engines like Google better understand the content and context of your webpage, which can improve your search rankings." },
        { icon: Accessibility, title: "Better Accessibility", description: "Screen readers can use semantic tags to navigate a page, making your site much easier to use for visually impaired users." },
        { icon: Code, title: "Easier for Developers", description: "The code is more readable and easier to maintain. A `<nav>` block is instantly understandable, while a `<div class=\"main-nav\">` requires more thought." },
    ];
    
    const layoutTags = [
        { tag: "<header>", description: "Introductory content for a section or the whole page. Typically contains a logo, navigation, and a search bar." },
        { tag: "<nav>", description: "A container for major navigation links." },
        { tag: "<main>", description: "The main, unique content of the page. There should only be one `<main>` element per page." },
        { tag: "<section>", description: "A thematic grouping of content, which should almost always have its own heading." },
        { tag: "<article>", description: "A self-contained piece of content that could be distributed on its own, like a blog post or news story." },
        { tag: "<aside>", description: "Content that is tangentially related to the main content, like a sidebar or pull quotes." },
        { tag: "<footer>", description: "Footer content for a section or the whole page. Typically contains copyright info, contact details, and related links." },
    ];

    const playgroundCode = {
        html: `<header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <h1>My Semantic Blog</h1>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>This is the main content of the blog post...</p>
  </article>

  <aside>
    <h3>Related Posts</h3>
    <ul>
      <li>Another Post</li>
      <li>A Third Post</li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Coder Pod</p>
</footer>`,
        css: `body {
  font-family: sans-serif;
  color: #333;
}
header, footer {
  background-color: #f2f2f2;
  padding: 1rem;
  border: 1px dashed #ccc;
  margin-bottom: 1rem;
}
main {
  display: flex;
  gap: 1rem;
}
article {
  flex: 3;
  border: 1px dashed #aaa;
  padding: 1rem;
}
aside {
  flex: 1;
  border: 1px dashed #aaa;
  padding: 1rem;
  background-color: #fafafa;
}
nav a {
  margin-right: 1rem;
  color: hsl(var(--primary));
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Box className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Semantic HTML</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Writing HTML that describes its meaning, not just its appearance.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The "Well-Labeled Boxes" Analogy</CardTitle>
                <CardDescription>Imagine you're moving. You could put everything in identical, unlabeled brown boxes, or you could label them "Kitchen," "Books," "Clothes." Which is easier to unpack?</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Box className="w-5 h-5 text-destructive"/>Non-Semantic: `&lt;div&gt;` and `&lt;span&gt;`</h3>
                    <p className="text-sm text-muted-foreground">These are the unlabeled brown boxes. They tell the browser nothing about the content inside them. A page made only of `div`s is a jumble of boxes.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Box className="w-5 h-5 text-primary"/>Semantic Elements: `&lt;nav&gt;`, `&lt;article&gt;`</h3>
                    <p className="text-sm text-muted-foreground">These are the labeled boxes. They clearly communicate their purpose—both to the browser and to other developers.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Why Semantic HTML Matters</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                {whySemantic.map((reason, index) => (
                    <div key={index} className="bg-muted p-4 rounded-lg text-center border">
                        <reason.icon className="w-8 h-8 text-primary mx-auto mb-3"/>
                        <h3 className="font-semibold text-lg">{reason.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{reason.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>The Main Layout Elements</CardTitle>
                <CardDescription>These tags form the primary structure of almost every modern webpage.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted">
                    {layoutTags.map(tag => (
                        <div key={tag.tag} className="flex items-start gap-3 my-2">
                           <code>{tag.tag}</code><p className="text-sm text-muted-foreground">- {tag.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Try Layout in Playground
                    </Button>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Other Important Semantic Tags</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Image className="w-4 h-4"/>`&lt;figure&gt;` and `&lt;figcaption&gt;`</h3>
                    <p className="text-sm text-muted-foreground">Used to group media content (like an image or diagram) with its caption.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Clock className="w-4 h-4"/>`&lt;time&gt;`</h3>
                    <p className="text-sm text-muted-foreground">Represents a specific period in time. Can be used with a `datetime` attribute for machine-readable dates.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><List className="w-4 h-4"/>`&lt;ul&gt;`, `&lt;ol&gt;`, `&lt;li&gt;`</h3>
                    <p className="text-sm text-muted-foreground">Correctly identify content as being part of a list, rather than just lines of text with bullet points.</p>
                </div>
            </CardContent>
        </Card>

      </div>
    );
}
