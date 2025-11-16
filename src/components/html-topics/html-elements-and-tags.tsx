
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sandwich, Code, Play, Braces, List, Ban, Pilcrow, Type, FileText } from 'lucide-react';
import React from 'react';

export default function HtmlElementsAndTags({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const anatomyCode = `<p>This is a paragraph.</p>`;
    
    const commonElements = [
        {
            category: 'Text Content',
            icon: Type,
            elements: [
                { tag: '<h1> to <h6>', description: 'Headings, from most to least important.' },
                { tag: '<p>', description: 'A paragraph of text.' },
                { tag: '<span>', description: 'An inline container for styling a part of a text.' },
                { tag: '<strong>', description: 'Indicates text with strong importance (typically bold).' },
                { tag: '<em>', description: 'Indicates text with emphasis (typically italic).' },
            ]
        },
        {
            category: 'Grouping Content',
            icon: Braces,
            elements: [
                { tag: '<div>', description: 'A generic block-level container for flow content.' },
                { tag: '<section>', description: 'A thematic grouping of content, typically with a heading.' },
                { tag: '<article>', description: 'A self-contained composition (e.g., a blog post).' },
                { tag: '<nav>', description: 'A section of a page that links to other pages or parts within the page.' },
            ]
        },
        {
            category: 'List Content',
            icon: List,
            elements: [
                { tag: '<ul>', description: 'An unordered list (bullet points).' },
                { tag: '<ol>', description: 'An ordered list (numbered).' },
                { tag: '<li>', description: 'A list item, used inside `<ul>` or `<ol>`.' },
            ]
        }
    ];

    const playgroundCode = {
        html: `<nav>
  <a href="#intro">Introduction</a> | 
  <a href="#content">Content</a>
</nav>

<section id="intro">
  <h1>Main Title</h1>
  <p>This is an introductory paragraph with <strong>important</strong> text and some <em>emphasized</em> words.</p>
</section>

<section id="content">
  <h2>My Favorite Foods</h2>
  <p>Here are a few of my favorite foods:</p>
  <ul>
    <li>Pizza</li>
    <li>Sushi</li>
    <li>Tacos</li>
  </ul>
  
  <h2>My Todo List</h2>
  <ol>
    <li>Learn HTML</li>
    <li>Practice with the Web Playground</li>
    <li>Build an awesome website</li>
  </ol>
</section>

<hr />
<footer>
  <p>Copyright 2024 Coder Pod</p>
</footer>`,
        css: `body {
  font-family: sans-serif;
  line-height: 1.6;
}
nav {
  background-color: #f4f4f4;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
section {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
h1, h2 {
  color: hsl(var(--primary));
}
strong {
  color: red;
}
em {
  font-style: italic;
  color: blue;
}
footer {
    text-align: center;
    font-size: 0.8rem;
    color: #777;
    margin-top: 1rem;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Pilcrow className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Elements and Tags</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The fundamental building blocks of every web page.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Sandwich className="w-6 h-6 text-primary" />The Sandwich Analogy</CardTitle>
                <CardDescription>An HTML element is like a sandwich. It wraps your content between an opening and closing tag.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 font-mono text-lg text-center border">
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-blue-500">&lt;p&gt;</span>
                        </div>
                        <p className="text-sm text-muted-foreground hidden md:block">Opening Tag</p>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">Opening Tag</p>
                    
                    <div className="text-3xl font-thin text-muted-foreground">+</div>

                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-foreground">Content</span>
                        </div>
                        <p className="text-sm text-muted-foreground hidden md:block">The Filling</p>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">The Filling</p>

                    <div className="text-3xl font-thin text-muted-foreground">+</div>

                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-blue-500">&lt;/p&gt;</span>
                        </div>
                        <p className="text-sm text-muted-foreground hidden md:block">Closing Tag</p>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">Closing Tag</p>
                </div>
                 <div className="mt-6 text-center">
                    <p className="text-muted-foreground">The whole thing—opening tag, content, and closing tag—is the **element**.</p>
                    <div className="bg-background border inline-block p-4 rounded-lg mt-2 font-mono shadow-sm">{anatomyCode}</div>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><FileText className="w-6 h-6 text-primary" />Common Element Categories</CardTitle>
                <CardDescription>While there are over 100 HTML tags, they can be grouped into logical categories.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                {commonElements.map((category) => (
                    <div key={category.category} className="bg-muted p-4 rounded-lg border">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-3">
                            <category.icon className="w-5 h-5 text-primary"/>
                            {category.category}
                        </h3>
                        <div className="space-y-3">
                            {category.elements.map(el => (
                                <div key={el.tag}>
                                    <code className="font-mono text-sm bg-background p-1 rounded">&lt;{el.tag.replace('<', '').replace('>', '')}&gt;</code>
                                    <p className="text-xs text-muted-foreground mt-1">{el.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardContent>
                 <div className="mt-4">
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Try Elements in the Playground
                    </Button>
                </div>
            </CardContent>
        </Card>

        <Card className="border-accent bg-accent/10">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary"><Ban className="w-6 h-6" />Void (or Empty) Elements</CardTitle>
                <CardDescription>Some elements are "self-closing" because they don't wrap around content. They represent a single instruction.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg border text-center">
                    <code className="font-mono font-bold">&lt;br /&gt;</code>
                    <p className="text-sm text-muted-foreground mt-1">A line break.</p>
                </div>
                <div className="bg-background p-4 rounded-lg border text-center">
                    <code className="font-mono font-bold">&lt;hr /&gt;</code>
                    <p className="text-sm text-muted-foreground mt-1">A horizontal rule (a thematic break).</p>
                </div>
                <div className="bg-background p-4 rounded-lg border text-center">
                    <code className="font-mono font-bold">&lt;img src="..." /&gt;</code>
                    <p className="text-sm text-muted-foreground mt-1">An image.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    );
}
