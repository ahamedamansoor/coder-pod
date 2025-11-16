'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Layout, Box, ArrowRightLeft, AlignStartVertical, AlignEndVertical, StretchHorizontal, WrapText } from 'lucide-react';
import React from 'react';

interface CssFlexboxProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssFlexbox({ onOpenWebPlayground }: CssFlexboxProps) {

    const playgroundCode = {
        html: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
        css: `/* Try changing the container properties! */
.container {
  display: flex;
  background-color: hsl(var(--muted));
  padding: 1rem;
  border-radius: 8px;

  /* Main-axis alignment */
  justify-content: space-around; /* e.g., flex-start, center, space-between */
  
  /* Cross-axis alignment */
  align-items: center; /* e.g., flex-start, center, stretch */

  /* Direction */
  flex-direction: row; /* e.g., column, row-reverse */

  height: 200px;
}

.item {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 1rem 2rem;
  margin: 0.5rem;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
}`,
        js: ''
    };

    const containerProps = [
        { icon: Layout, prop: 'display: flex;', desc: 'This is the magic wand that turns an element into a flex container.' },
        { icon: ArrowRightLeft, prop: 'flex-direction', desc: 'Defines the main axis. Can be `row` (default), `row-reverse`, `column`, or `column-reverse`.' },
        { icon: AlignEndVertical, prop: 'justify-content', desc: 'Aligns items along the main axis. (e.g., `flex-start`, `center`, `space-between`).' },
        { icon: AlignStartVertical, prop: 'align-items', desc: 'Aligns items along the cross axis. (e.g., `flex-start`, `center`, `stretch`).' },
        { icon: WrapText, prop: 'flex-wrap', desc: 'Allows items to wrap onto multiple lines. Can be `nowrap` (default), `wrap`, or `wrap-reverse`.' },
    ];
    
    const itemProps = [
         { icon: StretchHorizontal, prop: 'flex-grow', desc: 'A number specifying how much an item should grow relative to others if there is extra space.' },
         { icon: StretchHorizontal, prop: 'flex-shrink', desc: 'A number specifying how much an item should shrink relative to others if there isn\'t enough space.' },
         { icon: StretchHorizontal, prop: 'flex-basis', desc: 'Defines the default size of an element before the remaining space is distributed.' },
         { icon: StretchHorizontal, prop: 'align-self', desc: 'Overrides the container\'s `align-items` property for a single flex item.' },
    ];


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layout className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Flexbox</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A modern, powerful layout model for creating one-dimensional layouts.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Books on a Shelf" Analogy</CardTitle>
                    <CardDescription>
                       Think of a bookshelf (the **flex container**) and the books on it (the **flex items**). Flexbox gives you super-powers to easily arrange those books. You can line them up at the start, center them, space them out evenly, or even stack them vertically.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Flexbox works along a single dimension at a time—either as a row or as a column. This is its main difference from CSS Grid, which works in two dimensions.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Container Properties</CardTitle>
                    <CardDescription>
                        These properties are set on the parent element (the "shelf").
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {containerProps.map(p => (
                        <div key={p.prop} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>`{p.prop}`</h3>
                            <p className="text-sm text-muted-foreground">{p.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action: Try It Yourself</CardTitle>
                    <CardDescription>Open this example in the Web Playground and experiment by changing the `justify-content` and `align-items` properties on the container.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Item Properties</CardTitle>
                    <CardDescription>
                        These properties are set on the children elements (the "books").
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {itemProps.map(p => (
                        <div key={p.prop} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>`{p.prop}`</h3>
                            <p className="text-sm text-muted-foreground">{p.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

        </div>
    );
}
