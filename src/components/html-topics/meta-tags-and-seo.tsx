'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Search, Link, Share2, FileJson, Image } from 'lucide-react';
import React from 'react';

export default function MetaTagsAndSeo({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Basic SEO Meta Tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Awesome Web Page | My Site</title>
  <meta name="description" content="An awesome web page about HTML, CSS, and JavaScript.">
  <meta name="keywords" content="HTML, CSS, JavaScript, Web Development">
  <meta name="author" content="Coder Pod">
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://example.com/">
  <meta property="og:title" content="Awesome Web Page | My Site">
  <meta property="og:description" content="An awesome web page about HTML, CSS, and JavaScript.">
  <meta property="og:image" content="https://picsum.photos/seed/og-image/1200/630">

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://example.com/">
  <meta property="twitter:title" content="Awesome Web Page | My Site">
  <meta property="twitter:description" content="An awesome web page about HTML, CSS, and JavaScript.">
  <meta property="twitter:image" content="https://picsum.photos/seed/twitter-image/1200/630">
</head>
<body>
  <h1>Check the &lt;head&gt; of this document!</h1>
  <p>All the important meta tags are in the head section. They tell browsers, search engines, and social media platforms about this page.</p>
</body>
</html>`,
        css: `body { font-family: sans-serif; padding: 2rem; }`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Search className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Meta Tags &amp; SEO</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Improving your site's visibility on search engines and social media.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Basic SEO Meta Tags</CardTitle>
                <CardDescription>These are the essential tags that every web page should have inside the `&lt;head&gt;` element.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">&lt;title&gt;</code>: The title of your page, shown in the browser tab and search results.</p>
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">&lt;meta name="description" ...&gt;</code>: A brief summary of the page's content, often shown below the title in search results.</p>
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">&lt;meta name="keywords" ...&gt;</code>: A list of keywords relevant to the page's content (less important for modern SEO, but still good practice).</p>
                <p><code className="font-mono bg-muted p-1 rounded font-semibold">&lt;meta name="author" ...&gt;</code>: The author of the page.</p>
                 <p><code className="font-mono bg-muted p-1 rounded font-semibold">&lt;link rel="icon" ...&gt;</code>: The "favicon" for your page, shown in the browser tab.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Share2 className="w-5 h-5 text-primary"/>Open Graph &amp; Twitter Cards</CardTitle>
                <CardDescription>These special meta tags control how your page appears when shared on social media platforms like Facebook, LinkedIn, and Twitter.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><FileJson className="w-4 h-4"/>Open Graph (og:...)</h3>
                    <p className="text-xs text-muted-foreground">Used by Facebook, LinkedIn, and others.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Image className="w-4 h-4"/>Twitter Cards (twitter:...)</h3>
                     <p className="text-xs text-muted-foreground">Used by Twitter (X).</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It All In Action</CardTitle>
                <CardDescription>This example contains all the essential meta tags. Open it in the playground and inspect the `&lt;head&gt;` element.</CardDescription>
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
