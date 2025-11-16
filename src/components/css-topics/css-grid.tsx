'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Grid, LayoutDashboard, Rows, Columns, Lightbulb, Box } from 'lucide-react';
import React from 'react';

interface CssGridProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssGrid({ onOpenWebPlayground }: CssGridProps) {

    const playgroundCode = {
        html: `<div class="container">
  <div class="item header">Header</div>
  <div class="item sidebar">Sidebar</div>
  <div class="item main">Main Content</div>
  <div class="item footer">Footer</div>
</div>`,
        css: `body {
  font-family: sans-serif;
  color: hsl(var(--foreground));
  background-color: hsl(var(--background));
  padding: 1rem;
}

.container {
  display: grid;
  height: 300px;
  
  /* Define 3 columns: 1fr, 3fr, 1fr */
  grid-template-columns: 1fr 3fr 1fr;
  
  /* Define 3 rows: auto height, 1fr (takes remaining space), auto height */
  grid-template-rows: auto 1fr auto;

  /* Add a gap between grid items */
  gap: 10px;

  /* You can also define named grid areas */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.item {
  background-color: hsl(var(--muted));
  border: 1px solid hsl(var(--border));
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Assigning items to grid areas */
.header { grid-area: header; background-color: hsl(var(--primary) / 0.2); }
.sidebar { grid-area: sidebar; background-color: hsl(var(--secondary) / 0.3); }
.main { grid-area: main; background-color: hsl(var(--card)); }
.footer { grid-area: footer; background-color: hsl(var(--primary) / 0.2); }
`,
        js: ''
    };
    
    const placementExample = {
        html: `<div class="grid-container">
  <div class="grid-item item-a">A</div>
  <div class="grid-item item-b">B</div>
  <div class="grid-item item-c">C</div>
  <div class="grid-item item-d">D</div>
</div>`,
        css: `.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 80px);
  gap: 10px;
}
.grid-item {
  background-color: hsl(var(--muted));
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}
/* Place Item A from column line 1 to column line 3 */
.item-a {
  grid-column: 1 / 3;
  background-color: hsl(var(--primary) / 0.3);
}
/* Place Item D from row line 1 to row line 3 */
.item-d {
  grid-row: 1 / 3;
  grid-column: 4 / 5;
  background-color: hsl(var(--destructive) / 0.3);
}
`
    }

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Grid className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Grid</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A powerful layout model for creating two-dimensional layouts.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Spreadsheet" Analogy</CardTitle>
                    <CardDescription>
                       If Flexbox is for laying things out in a single line (one dimension), Grid is for laying things out in a **two-dimensional grid** of rows and columns, just like a spreadsheet or a newspaper layout. It gives you precise control over both dimensions simultaneously.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Core Grid Concepts</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><LayoutDashboard className="w-5 h-5 text-primary"/>Grid Container</h3>
                        <p className="text-sm text-muted-foreground">The parent element you apply `display: grid;` to.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Box className="w-5 h-5 text-primary"/>Grid Items</h3>
                        <p className="text-sm text-muted-foreground">The direct children of the grid container.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Rows className="w-5 h-5 text-primary"/>Grid Tracks</h3>
                        <p className="text-sm text-muted-foreground">The space between grid lines, which form the rows and columns.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><Columns className="w-5 h-5 text-primary"/>Grid Gap</h3>
                        <p className="text-sm text-muted-foreground">The space between grid tracks, set with the `gap` property.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Key Container Properties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">`grid-template-columns` / `grid-template-rows`</h3>
                        <p className="text-sm text-muted-foreground mb-2">These are the most important properties. They define the number and size of your columns and rows.</p>
                        <div className="bg-muted p-4 rounded-lg">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`/* Creates three equal-width columns */
grid-template-columns: 1fr 1fr 1fr;
/* or */
grid-template-columns: repeat(3, 1fr);

/* Creates a 200px column, a column taking the rest of the space, and a 100px column */
grid-template-columns: 200px 1fr 100px;`}</pre>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">`gap`</h3>
                        <p className="text-sm text-muted-foreground mb-2">Defines the size of the gap between the rows and columns.</p>
                        <div className="bg-muted p-4 rounded-lg">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`gap: 20px; /* 20px gap for rows and columns */
row-gap: 10px;
column-gap: 30px;`}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>What is `fr`?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">The `fr` unit stands for "fractional unit". It represents a fraction of the available space in the grid container. It's a powerful and flexible way to create responsive layouts without using percentages or fixed pixels.</p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Placing Items in the Grid</CardTitle>
                    <CardDescription>You can explicitly place items using `grid-column` and `grid-row`. These properties define which grid lines an item should start and end on.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                         <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`/* Make an item start on column line 1 and end on column line 3 */
.item-a {
  grid-column: 1 / 3;
}

/* A shorthand for spanning 2 columns */
.item-b {
  grid-column: span 2;
}

/* Make an item start on row line 2 and end on row line 4 */
.item-c {
  grid-row: 2 / 4;
}`}</pre>
                    </div>
                    <div className="mt-4">
                        <Button onClick={() => onOpenWebPlayground(placementExample.html, placementExample.css, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try Item Placement
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: Full Page Layout with `grid-template-areas`</CardTitle>
                    <CardDescription>Grid is perfect for creating entire page layouts. The `grid-template-areas` property allows you to name grid cells and place items into those named cells, making your layout code very easy to read.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Layout Example
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
