
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Play, Info } from 'lucide-react';
import React from 'react';

interface CssColorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssColors({ onOpenWebPlayground }: CssColorsProps) {

    const colorFormats = [
        { 
            name: "Named Colors",
            syntax: "color: blue;",
            desc: "Simple, human-readable names for common colors. There are 140+ standard color names.",
            exampleHtml: `<div class="box" style="background-color: dodgerblue; color: white;">Dodger Blue</div>`,
        },
        { 
            name: "Hexadecimal (HEX)",
            syntax: "color: #RRGGBB;",
            desc: "A six-digit code representing Red, Green, and Blue values. Each pair ranges from 00 to FF. Very common in web design.",
            exampleHtml: `<div class="box" style="background-color: #ff4500; color: white;">OrangeRed (#ff4500)</div>`,
        },
        { 
            name: "RGB / RGBA",
            syntax: "rgb(R, G, B)",
            desc: "Specifies color using Red, Green, and Blue values, each from 0 to 255. RGBA adds an 'alpha' channel (0.0 to 1.0) for transparency.",
            exampleHtml: `<div class="box" style="background-color: rgba(46, 204, 113, 0.7); color: white;">Transparent Green</div>`,
        },
        { 
            name: "HSL / HSLA",
            syntax: "hsl(H, S%, L%)",
            desc: "Specifies color using Hue (0-360), Saturation (%), and Lightness (%). Often more intuitive for adjusting colors. HSLA adds an alpha channel.",
            exampleHtml: `<div class="box" style="background-color: hsla(240, 100%, 50%, 0.8); color: white;">Transparent Blue</div>`,
        },
    ];

    const playgroundCode = {
        html: `<h1>CSS Color Formats</h1>

<h2>Named Color</h2>
<div class="box named">Named</div>

<h2>Hexadecimal Color</h2>
<div class="box hex">HEX</div>

<h2>RGB Color</h2>
<div class="box rgb">RGB</div>

<h2>RGBA Color (with transparency)</h2>
<div class="box rgba">RGBA</div>

<h2>HSL Color</h2>
<div class="box hsl">HSL</div>

<h2>HSLA Color (with transparency)</h2>
<div class="box hsla">HSLA</div>`,
        css: `body {
  font-family: sans-serif;
  display: grid;
  gap: 1rem;
  padding: 1rem;
}
.box {
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px black;
}
.named { background-color: steelblue; }
.hex   { background-color: #c71585; }
.rgb   { background-color: rgb(0, 128, 128); }
.rgba  { background-color: rgba(0, 128, 128, 0.5); }
.hsl   { background-color: hsl(270, 60%, 70%); }
.hsla  { background-color: hsla(270, 60%, 70%, 0.5); }
`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Palette className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Colors</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Applying color to text, backgrounds, and borders.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Coloring Your Web Page</CardTitle>
                    <CardDescription>
                       CSS provides several properties for adding color to your elements, including \`color\` (for text), \`background-color\` (for the background), and \`border-color\`. You can define these colors in multiple formats.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Common Color Formats</CardTitle>
                    <CardDescription>
                        Here are the most widely used ways to specify a color in CSS.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    {colorFormats.map(format => (
                        <div key={format.name} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold text-lg mb-2">{format.name}</h3>
                            <code className="font-mono text-sm bg-background p-1 rounded-md">{format.syntax}</code>
                            <p className="text-sm text-muted-foreground my-3">{format.desc}</p>
                            <div dangerouslySetInnerHTML={{__html: `<div style="padding: 1rem; border-radius: 4px; font-weight: bold; text-align: center; text-shadow: 1px 1px 2px black;">${format.exampleHtml}</div>`}} />
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Info className="w-5 h-5"/>Opacity vs. RGBA/HSLA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">You can also make an element transparent using the \`opacity\` property (from 0.0 to 1.0). What's the difference?</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li><strong className="text-foreground">\`opacity\`</strong>: Makes the **entire element** transparent, including all its child elements (text, borders, etc.).</li>
                        <li><strong className="text-foreground">\`RGBA\` or \`HSLA\`</strong>: Makes only the specific property (e.g., \`background-color\`) transparent, leaving the child elements (like text) fully opaque. This is usually what you want.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how all these color formats look when rendered by the browser.</CardDescription>
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
