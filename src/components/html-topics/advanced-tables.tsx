'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Table, Rows, Columns, Heading2, Accessibility, Lightbulb } from 'lucide-react';
import React from 'react';

export default function AdvancedTables({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const advancedElements = [
        { tag: '<thead>', description: 'Groups the header content in a table. It should contain one or more `<tr>` elements with `<th>` cells.' },
        { tag: '<tbody>', description: 'Groups the main body content in a table. It contains the primary data rows (`<tr>` with `<td>` cells).' },
        { tag: '<tfoot>', description: 'Groups the footer content in a table, often used for summaries or totals.' },
        { tag: '<caption>', description: 'Defines a table caption, which is important for accessibility as it describes the table\'s content.' },
        { tag: '<colgroup>', description: 'Specifies a group of one or more columns in a table for formatting.' },
        { tag: '<col>', description: 'Used within a `<colgroup>` to specify column properties for each column.' },
    ];
    
    const playgroundCode = {
        html: `<h2>Quarterly Sales Report</h2>
<table>
  <caption>Q1 & Q2 Sales Data</caption>
  <colgroup>
    <col span="1" style="background-color: #f7fafc;">
    <col style="background-color: #ebf8ff;">
    <col style="background-color: #e6fffa;">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Salesperson</th>
      <th scope="col">Q1 Sales</th>
      <th scope="col">Q2 Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alice</th>
      <td>$12,000</td>
      <td>$15,000</td>
    </tr>
    <tr>
      <th scope="row">Bob</th>
      <td>$9,000</td>
      <td>$14,500</td>
    </tr>
     <tr>
      <th scope="row">Charlie</th>
      <td>$18,000</td>
      <td>$20,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total Q1 & Q2 Sales:</th>
      <td>$88,500</td>
    </tr>
  </tfoot>
</table>
`,
        css: `body {
  font-family: sans-serif;
  padding: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
caption {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0;
  color: hsl(var(--primary));
}
th, td {
  border: 1px solid #cbd5e0;
  padding: 12px;
  text-align: left;
}
thead th {
  background-color: hsl(var(--muted));
  color: hsl(var(--foreground));
}
tbody th {
  background-color: hsl(var(--muted));
}
tbody tr:nth-child(even) {
  background-color: #fdfdfe;
}
tbody tr:hover {
  background-color: hsl(var(--primary) / 0.1);
}
tfoot {
  background-color: hsl(var(--muted));
  font-weight: bold;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Table className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Advanced Tables</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Enhancing tables with semantic structure and better accessibility.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Go Beyond Basic Tables?</CardTitle>
                <CardDescription>While basic tables work, using advanced structural elements makes your tables more readable for both browsers and screen readers, and easier to style.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Structural Elements</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advancedElements.map(el => (
                    <div key={el.tag} className="bg-muted p-4 rounded-lg border">
                        <code className="font-mono font-bold text-primary">{el.tag}</code>
                        <p className="text-xs text-muted-foreground mt-1">{el.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Accessibility className="w-5 h-5 text-primary"/>The `scope` Attribute</CardTitle>
                    <CardDescription>For accessibility, `scope` tells browsers and screen readers what a header cell (`<th>`) is a header for.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><code className="font-mono bg-muted p-1 rounded">scope="col"</code>: The header is for a column.</p>
                    <p><code className="font-mono bg-muted p-1 rounded">scope="row"</code>: The header is for a row.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Columns className="w-5 h-5 text-primary"/>`colspan` and `rowspan`</CardTitle>
                    <CardDescription>These attributes allow a single cell to span over multiple columns or rows.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><code className="font-mono bg-muted p-1 rounded">colspan="2"</code>: Makes a cell take up the width of two columns.</p>
                    <p><code className="font-mono bg-muted p-1 rounded">rowspan="3"</code>: Makes a cell take up the height of three rows.</p>
                </CardContent>
            </Card>
        </div>


        <Card>
            <CardHeader>
                <CardTitle>See It All In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to see a well-structured table using `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`, `scope`, and `colspan`.</CardDescription>
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
