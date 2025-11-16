
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { List, ListOrdered, BookText, Play, ArrowRight, GitMerge, ListIcon, Circle, Square } from 'lucide-react';
import React from 'react';

export default function HtmlLists({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const unorderedListCode = `<h2>Shopping List</h2>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>`;

    const unorderedListTypesCode = `<h3>Default (disc)</h3>
<ul type="disc">
  <li>First item</li>
  <li>Second item</li>
</ul>

<h3>Circle</h3>
<ul type="circle">
  <li>First item</li>
  <li>Second item</li>
</ul>

<h3>Square</h3>
<ul type="square">
  <li>First item</li>
  <li>Second item</li>
</ul>`;

    const orderedListCode = `<h2>Recipe Steps</h2>
<ol>
  <li>Boil water.</li>
  <li>Add pasta.</li>
  <li>Cook for 8-10 minutes.</li>
</ol>`;

    const orderedListTypesCode = `<h3>Numbers (default)</h3>
<ol type="1">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Uppercase Letters</h3>
<ol type="A">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Lowercase Letters</h3>
<ol type="a">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Uppercase Roman</h3>
<ol type="I">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Lowercase Roman</h3>
<ol type="i">
  <li>First item</li>
  <li>Second item</li>
</ol>`;

    const descriptionListCode = `<h2>Glossary</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, a language used for describing the presentation of a document written in a markup language.</dd>
</dl>`;
    
    const nestedListCode = `<ul>
  <li>Fruit
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>`;

    const fullPlaygroundCode = {
        html: `<h1>List Examples</h1>

<h2>Shopping List (Unordered)</h2>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>

<h2>Recipe (Ordered)</h2>
<ol type="1">
  <li>Boil water.</li>
  <li>Add pasta.</li>
  <li>Cook for 8-10 minutes.</li>
</ol>

<h2>Glossary (Description)</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>

<h2>Nested List</h2>
<ul>
  <li>Americas
    <ul>
      <li>USA</li>
      <li>Canada</li>
    </ul>
  </li>
  <li>Europe
    <ul>
      <li>France</li>
      <li>Germany</li>
    </ul>
  </li>
</ul>`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
h1, h2, h3 {
  color: hsl(var(--primary));
  border-bottom: 1px solid hsl(var(--border));
  padding-bottom: 4px;
}
ul, ol, dl {
  background-color: hsl(var(--muted));
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 8px;
  border: 1px solid hsl(var(--border));
}
dt {
  font-weight: bold;
  color: hsl(var(--foreground));
}
dd {
  margin-left: 1rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 0.5rem;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <List className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Lists</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Organizing content into ordered, unordered, and description lists.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The Three Types of Lists</CardTitle>
                <CardDescription>HTML provides three main list types for different organizational needs.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-lg text-center border">
                    <List className="w-8 h-8 text-primary mx-auto mb-2"/>
                    <h3 className="font-bold text-lg">Unordered List</h3>
                    <p className="text-sm text-muted-foreground">For items where order doesn't matter. (e.g., a shopping list)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center border">
                    <ListOrdered className="w-8 h-8 text-primary mx-auto mb-2"/>
                    <h3 className="font-bold text-lg">Ordered List</h3>
                    <p className="text-sm text-muted-foreground">For items where sequence is important. (e.g., recipe steps)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center border">
                    <BookText className="w-8 h-8 text-primary mx-auto mb-2"/>
                    <h3 className="font-bold text-lg">Description List</h3>
                    <p className="text-sm text-muted-foreground">For key-value pairs. (e.g., a glossary)</p>
                </div>
            </CardContent>
        </Card>
        
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><List className="w-6 h-6 text-primary"/>Unordered Lists: `&lt;ul&gt;` and `&lt;li&gt;`</CardTitle>
                    <CardDescription>Use `&lt;ul&gt;` (unordered list) for a list of items where the order is not important. Each item in the list is defined by an `&lt;li&gt;` (list item) tag.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{unorderedListCode}</pre>
                    </div>
                     <div className="my-4">
                        <h4 className="font-semibold mb-2">Changing the Bullet Style with `type`</h4>
                        <p className="text-sm text-muted-foreground mb-2">While usually styled with CSS, the `type` attribute on `&lt;ul&gt;` can be `disc` (default), `circle`, or `square`.</p>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{unorderedListTypesCode}</pre>
                        </div>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(unorderedListCode + '\n' + unorderedListTypesCode, fullPlaygroundCode.css, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><ListOrdered className="w-6 h-6 text-primary"/>Ordered Lists: `&lt;ol&gt;` and `&lt;li&gt;`</CardTitle>
                    <CardDescription>Use `&lt;ol&gt;` (ordered list) for sequential information. The browser automatically numbers the `&lt;li&gt;` items.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{orderedListCode}</pre>
                    </div>
                    <div className="my-4">
                        <h4 className="font-semibold mb-2">Changing the Numbering Style with `type`</h4>
                        <p className="text-sm text-muted-foreground mb-2">You can use the `type` attribute on the `&lt;ol&gt;` tag to change the marker style.</p>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{orderedListTypesCode}</pre>
                        </div>
                    </div>
                     <Button onClick={() => onOpenWebPlayground(orderedListCode + '\n' + orderedListTypesCode, fullPlaygroundCode.css, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><BookText className="w-6 h-6 text-primary"/>Description Lists: `&lt;dl&gt;`, `&lt;dt&gt;`, `&lt;dd&gt;`</CardTitle>
                    <CardDescription>A description list is a list of terms, with a description of each term. It's perfect for glossaries, dictionaries, or metadata.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                        <li>`&lt;dl&gt;`: The description list container.</li>
                        <li>`&lt;dt&gt;`: The description term (the key).</li>
                        <li>`&lt;dd&gt;`: The description details (the value).</li>
                    </ul>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{descriptionListCode}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(descriptionListCode, fullPlaygroundCode.css, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-accent bg-accent/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><GitMerge className="w-6 h-6 text-primary"/>Nested Lists</CardTitle>
                    <CardDescription>You can place a whole list inside of an `&lt;li&gt;` element to create sub-lists, which is great for hierarchical data.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{nestedListCode}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(nestedListCode, fullPlaygroundCode.css, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Putting It All Together</CardTitle>
                    <CardDescription>Open this complete example in the Web Playground to see all list types in action and experiment with them.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(fullPlaygroundCode.html, fullPlaygroundCode.css, fullPlaygroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                    </Button>
                </CardContent>
             </Card>

        </div>
      </div>
    );
}
