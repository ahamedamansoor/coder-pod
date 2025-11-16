
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Box, Layers, Brush } from 'lucide-react';
import React from 'react';

interface CssBoxModelProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssBoxModel({ onOpenWebPlayground }: CssBoxModelProps) {

    const playgroundCode = {
        html: `<div class="box">I am the content!</div>`,
        css: `body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(var(--background));
}

.box {
  /* 1. The content itself has a width and height */
  width: 200px;
  height: 100px;
  background-color: hsl(var(--primary) / 0.7);
  color: hsl(var(--primary-foreground));
  
  /* 2. Padding is the space INSIDE the border */
  padding: 20px;
  
  /* 3. The border goes around the padding and content */
  border: 10px solid hsl(var(--primary));
  
  /* 4. The margin is the space OUTSIDE the border */
  margin: 30px;
  
  /* This helps to see the full box including margin */
  outline: 2px dashed hsl(var(--muted-foreground));
}`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Box className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">The CSS Box Model</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding how every HTML element is a box.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The Picture Frame Analogy</CardTitle>
                    <CardDescription>
                       Every element on a web page is a rectangular box. The CSS box model describes how this box is composed. Think of it like a framed picture:
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>The **picture itself** is the `content`.</li>
                        <li>The **matting** between the picture and the frame is the `padding`.</li>
                        <li>The **frame** is the `border`.</li>
                        <li>The **space between this picture and other pictures** on the wall is the `margin`.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Visualizing the Box Model</CardTitle>
                    <CardDescription>
                        The layers stack outwards from the content.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <div className="bg-muted p-4 rounded-lg border w-full max-w-md text-center">
                        <div className="bg-foreground/10 p-4 border-2 border-dashed border-foreground/30">
                            <p className="text-xs font-semibold">Margin</p>
                            <div className="bg-primary/20 p-4 mt-2 border-2 border-dashed border-primary/40">
                               <p className="text-xs font-semibold">Border</p>
                               <div className="bg-secondary p-4 mt-2 border-2 border-dashed border-secondary-foreground/40">
                                   <p className="text-xs font-semibold">Padding</p>
                                   <div className="bg-background p-8 mt-2">
                                       <p className="font-bold">Content</p>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Box Model Properties</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Layers className="text-primary"/>`padding`</h3>
                        <p className="text-sm text-muted-foreground">Clears an area around the content. The padding is affected by the background color of the element.</p>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Brush className="text-primary"/>`border`</h3>
                        <p className="text-sm text-muted-foreground">A border that goes around the padding and content. You can set its width, style (solid, dashed, etc.), and color.</p>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Box className="text-primary"/>`margin`</h3>
                        <p className="text-sm text-muted-foreground">Clears an area outside the border. The margin is completely transparent.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Brush className="text-primary"/>`box-sizing`</h3>
                        <p className="text-sm text-muted-foreground">The `box-sizing: border-box;` property is often used to make layout easier. It tells the browser to include the padding and border in the element's total width and height, not add it on top.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how padding, border, and margin contribute to the final size and spacing of an element.</CardDescription>
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
