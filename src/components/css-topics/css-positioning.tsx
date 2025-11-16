
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pin, Link, MapPin, Anchor, Layers, Lightbulb } from 'lucide-react';
import React from 'react';

interface CssPositioningProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPositioning({ onOpenWebPlayground }: CssPositioningProps) {

    const positions = [
        { icon: Pin, name: 'static', desc: "The default value. The element is not positioned in any special way; it is always positioned according to the normal flow of the page." },
        { icon: Link, name: 'relative', desc: "The element is positioned relative to its normal position. Setting `top`, `right`, `bottom`, and `left` will cause it to be adjusted away from this normal position. Other content will not be adjusted to fit into any gap left by the element." },
        { icon: MapPin, name: 'absolute', desc: "The element is positioned relative to its nearest *positioned* ancestor (instead of positioned relative to the viewport, like `fixed`). If an absolutely-positioned element has no positioned ancestors, it uses the document body." },
        { icon: Anchor, name: 'fixed', desc: "The element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. `top`, `right`, `bottom`, and `left` are used." },
        { icon: Layers, name: 'sticky', desc: "A hybrid of `relative` and `fixed`. The element is treated as `relative` until it crosses a specified threshold (e.g., `top: 0`), at which point it 'sticks' in place like it's `fixed`." },
    ];
    
    const playgroundCode = {
        html: `<div class="parent">
  <div class="box static">Static (Default)</div>
  <div class="box relative">Relative</div>
  <div class="box absolute">Absolute</div>
  <div class="box sticky">Sticky</div>
</div>
<div class="box fixed">Fixed</div>
`,
        css: `body {
  height: 200vh; /* Make body scrollable to see sticky and fixed effects */
  font-family: sans-serif;
  padding: 1rem;
}

.parent {
  position: relative; /* The 'absolute' box will be positioned relative to this parent */
  border: 2px dashed hsl(var(--border));
  padding: 1rem;
  height: 400px;
  background-color: hsl(var(--muted));
}

.box {
  width: 120px;
  height: 80px;
  padding: 1rem;
  color: hsl(var(--primary-foreground));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.static {
  background-color: hsl(var(--chart-1));
}

.relative {
  background-color: hsl(var(--chart-2));
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute {
  background-color: hsl(var(--chart-3));
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.fixed {
  background-color: hsl(var(--chart-4));
  position: fixed;
  bottom: 20px;
  left: 20px;
}

.sticky {
  background-color: hsl(var(--chart-5));
  position: sticky;
  top: 10px;
}`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <MapPin className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Positioning</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Controlling the layout and placement of elements on a page.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The `position` Property</CardTitle>
                    <CardDescription>The `position` property specifies the type of positioning method used for an element. Once an element is "positioned" (i.e., its position is set to anything other than `static`), you can use the offset properties `top`, `bottom`, `left`, and `right` to move it around.</CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Position Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {positions.map(p => (
                        <div key={p.name} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                                <p.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{p.name}</h3>
                                <p className="text-sm text-muted-foreground">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
             <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Key Concept: Positioned Ancestor</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p className="text-sm text-muted-foreground">The `absolute` value is powerful but can be tricky. It positions an element relative to its nearest **positioned** ancestor. A "positioned" element is any element whose `position` value is NOT `static`. If no positioned ancestor is found, the `absolute` element will be positioned relative to the initial containing block (usually the `<html>` element).</p> */}
                    {/* <p className="text-sm text-muted-foreground mt-2">This is why it's a very common pattern to set `position: relative;` on a parent element when you want to place a child element with `position: absolute;` inside it.</p> */}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground. Scroll the page to see how `sticky` and `fixed` elements behave differently. Notice how the `absolute` box is contained within its `relative` parent.</CardDescription>
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
