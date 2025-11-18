'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Code, Search, Lightbulb } from 'lucide-react';
import React from 'react';

export default function MicrodataStructuredData({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<div itemscope itemtype="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <p>Directed by: <span itemprop="director">James Cameron</span></p>
  <p>Genre: <span itemprop="genre">Science Fiction</span></p>
  <a href="https://www.imdb.com/title/tt0499549/" itemprop="url">IMDb Page</a>
</div>`,
        css: `body { font-family: sans-serif; }
div[itemscope] {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    background-color: #f9f9f9;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Code className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Microdata & Structured Data</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Adding extra semantic information to your HTML for search engines.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is Structured Data?</CardTitle>
                <CardDescription>Structured data is a standardized format for providing information about a page and classifying the page content. For example, on a recipe page, what are the ingredients, the cooking time, the temperature, etc.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This information helps search engines like Google understand the content of your pages and provide richer search results (e.g., showing ratings, cooking times, or event dates directly in the search results).</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Microdata: The HTML Implementation</CardTitle>
                <CardDescription>Microdata is a set of HTML attributes used to add structured data to your web pages.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">itemscope</code>: A boolean attribute that creates a new item and indicates that the rest of the attributes on this element are about that item.</p>
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">itemtype</code>: A URL that specifies the vocabulary (like Schema.org) and the type of item (e.g., `https://schema.org/Movie`).</p>
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">itemprop</code>: Specifies a property of the item (e.g., `name`, `director`, `genre`).</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>This example marks up a "Movie" item using the Schema.org vocabulary. While it looks normal on the page, search engines can now understand that "James Cameron" is the director.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{playgroundCode.html}</pre>
                </div>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
         <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>JSON-LD: The Modern Alternative</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">While Microdata works, the more modern and recommended approach is **JSON-LD**. It involves placing a `&lt;script type="application/ld+json"&gt;` block in your page's `&lt;head&gt;` or `&lt;body&gt;`. This separates the structured data from your HTML, making it cleaner and easier to manage.</p>
            </CardContent>
        </Card>
      </div>
    );
}
