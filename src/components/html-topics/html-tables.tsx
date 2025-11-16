
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, Play, Rows, Columns, Group, Grid, LayoutList } from 'lucide-react';
import React from 'react';

export default function HtmlTables({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const simpleTableCode = `<table>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>`;
    
    const headersCode = `<table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </tbody>
</table>`;
    
    const colspanCode = `<h3>Spanning Columns with 'colspan'</h3>
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>555-77854</td>
    <td>555-77855</td>
  </tr>
</table>`;
    
    const rowspanCode = `<h3>Spanning Rows with 'rowspan'</h3>
<table>
  <tr>
    <th>Name</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone</th>
    <td>555-77854</td>
  </tr>
  <tr>
    <td>555-77855</td>
  </tr>
</table>`;

    const fullPlaygroundCode = {
        html: `<h2>Employee Schedule</h2>
<table>
  <caption>A more complex table with spanning cells</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Day</th>
      <th colspan="2">Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Alice</td>
      <td>Monday</td>
      <td>9:00 AM</td>
      <td>5:00 PM</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>10:00 AM</td>
      <td>4:00 PM</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Wednesday</td>
      <td colspan="2">Off</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>Thursday</td>
      <td>11:00 AM</td>
      <td>7:00 PM</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">All schedules are subject to change.</td>
    </tr>
  </tfoot>
</table>`,
        css: `body {
  font-family: sans-serif;
  padding: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse; /* This is key for nice borders */
  box-shadow: 0 2px 5px hsla(var(--foreground), 0.1);
}
caption {
    caption-side: bottom;
    padding: 8px;
    font-size: 0.9rem;
    color: hsl(var(--muted-foreground));
}
th, td {
  border: 1px solid hsl(var(--border));
  padding: 12px;
  text-align: left;
}
thead {
  background-color: hsl(var(--muted));
}
th {
  font-weight: bold;
  color: hsl(var(--foreground));
}
tbody tr:nth-child(even) {
  background-color: hsl(var(--muted)/0.5);
}
tbody tr:hover {
  background-color: hsl(var(--accent)/0.1);
}
tfoot {
    background-color: hsl(var(--muted));
    font-style: italic;
    color: hsl(var(--muted-foreground));
    text-align: center;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Table className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Tables</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Organizing data into rows and columns, just like a spreadsheet.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Fundamental Table Structure</CardTitle>
                <CardDescription>A table is built with three core tags working together.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-lg text-center border">
                    <Grid className="w-8 h-8 text-primary mx-auto mb-2"/>
                    <h3 className="font-bold text-lg">&lt;table&gt;</h3>
                    <p className="text-sm text-muted-foreground">The wrapper for the entire table.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center border">
                    <Rows className="w-8 h-8 text-primary mx-auto mb-2"/>
                    <h3 className="font-bold text-lg">&lt;tr&gt;</h3>
                    <p className="text-sm text-muted-foreground">Defines a **t**able **r**ow.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center border">
                    <LayoutList className="w-8 h-8 text-primary mx-auto mb-2"/>
                    <h3 className="font-bold text-lg">&lt;td&gt;</h3>
                    <p className="text-sm text-muted-foreground">Defines **t**able **d**ata, a single cell.</p>
                </div>
            </CardContent>
             <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{simpleTableCode}</pre>
                </div>
                <Button onClick={() => onOpenWebPlayground(simpleTableCode, 'table, th, td { border: 1px solid black; }', '')}>
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Semantic Structure</CardTitle>
                    <CardDescription>For better organization and accessibility, group your table content.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <h4 className="font-mono text-primary font-semibold">&lt;thead&gt;</h4>
                        <p className="text-sm text-muted-foreground">Groups the header content.</p>
                    </div>
                     <div className="flex items-start gap-3">
                        <h4 className="font-mono text-primary font-semibold">&lt;tbody&gt;</h4>
                        <p className="text-sm text-muted-foreground">Groups the main body content.</p>
                    </div>
                     <div className="flex items-start gap-3">
                        <h4 className="font-mono text-primary font-semibold">&lt;tfoot&gt;</h4>
                        <p className="text-sm text-muted-foreground">Groups the footer content.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Table Headers: &lt;th&gt;</CardTitle>
                    <CardDescription>Use `<th>` instead of `<td>` to define a header cell. This is important for screen readers and also makes the text bold and centered by default.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{headersCode}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(headersCode, 'table, th, td { border: 1px solid black; border-collapse: collapse; padding: 5px; }', '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Spanning Columns and Rows</CardTitle>
                <CardDescription>Create more complex table layouts by making cells span multiple columns or rows.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Columns className="w-5 h-5 text-primary"/>`colspan`</h3>
                    <p className="text-xs text-muted-foreground mb-2">Makes a cell span across multiple columns.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{colspanCode}</pre>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Rows className="w-5 h-5 text-primary"/>`rowspan`</h3>
                    <p className="text-xs text-muted-foreground mb-2">Makes a cell span down multiple rows.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{rowspanCode}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>This complete example uses semantic structure, headers, and spanning cells. Open it in the playground to see how it all works.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(fullPlaygroundCode.html, fullPlaygroundCode.css, fullPlaygroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>
      </div>
    );
}
