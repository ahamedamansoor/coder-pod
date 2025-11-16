'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Layers, Paintbrush, Play, Lightbulb, Check, X, Code, Zap } from 'lucide-react';
import React from 'react';

export default function SvgAndCanvas({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const svgExample = `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.
</svg> `;

    const canvasExample = `<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;">
  Your browser does not support the HTML canvas tag.
</canvas>

<script>
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 150, 75);
</script>`;
    
    const playgroundCode = {
        html: `<h2>SVG Example: A Scalable Circle</h2>
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

<h2 style="margin-top:2rem;">Canvas Example: A Drawn Rectangle</h2>
<canvas id="myCanvas" width="200" height="100"></canvas>
`,
        css: `body { 
  font-family: sans-serif; 
}
svg {
  border: 1px dashed #ccc;
}
canvas {
  border: 1px dashed #333;
  background-color: #f4f4f4;
}
`,
        js: `// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Check if the browser supports canvas
if (canvas.getContext) {
  const ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 150, 80);
}
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Layers className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">SVG and Canvas</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Two powerful ways to draw graphics directly in the browser.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The "Stencils vs. Painting" Analogy</CardTitle>
                <CardDescription>The best way to understand the difference is through an analogy.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Layers className="w-5 h-5 text-primary"/>SVG is like using STENCILS</h3>
                    <p className="text-sm text-muted-foreground">You define a set of shapes (circles, paths, rectangles). The browser remembers each shape as a separate object. If you want to change a shape, you just modify its properties.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Paintbrush className="w-5 h-5 text-primary"/>Canvas is like PAINTING</h3>
                    <p className="text-sm text-muted-foreground">You get a blank canvas and use JavaScript to "paint" pixels onto it. Once a shape is drawn, the browser forgets it was a circle or a square; it just sees a grid of colored pixels.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>SVG vs. Canvas: A Detailed Comparison</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>SVG (Scalable Vector Graphics)</TableHead>
                            <TableHead>Canvas</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">Type</TableCell>
                            <TableCell>Vector-based (defined by math).</TableCell>
                            <TableCell>Raster-based (pixel grid).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Scalability</TableCell>
                            <TableCell>Scales to any size without losing quality. <Check className="inline w-4 h-4 text-green-500"/></TableCell>
                            <TableCell>Becomes pixelated when scaled up. <X className="inline w-4 h-4 text-destructive"/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Rendering</TableCell>
                            <TableCell>XML-based markup. Each shape is a DOM node.</TableCell>
                            <TableCell>Drawn programmatically with a JavaScript API.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Interactivity</TableCell>
                            <TableCell>Easy. You can attach JavaScript event listeners directly to shapes.</TableCell>
                            <TableCell>Difficult. You have to manually track coordinates of shapes.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Accessibility</TableCell>
                            <TableCell>Excellent. Text is accessible, and you can add ARIA attributes.</TableCell>
                            <TableCell>Poor. It's just an image to screen readers. Requires fallback content.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Best for...</TableCell>
                            <TableCell>Logos, icons, illustrations, charts, and interface elements.</TableCell>
                            <TableCell>Games, video processing, complex data visualizations, image editing.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-5 h-5 text-primary"/>SVG Example</CardTitle>
                    <CardDescription>SVG uses XML tags to define shapes. It's descriptive and easy to read.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{svgExample}</pre>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary"/>Canvas Example</CardTitle>
                    <CardDescription>Canvas requires JavaScript to draw anything on its 2D context.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{canvasExample}</pre>
                    </div>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to see a simple SVG and a simple Canvas drawing rendered side-by-side.</CardDescription>
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
