
'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, Play, Rows, Columns, Heading2, Heading3 } from 'lucide-react';

export default function HtmlTables({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const simpleTableCode = `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`;
    
    const advancedTableCode = `<table>
  <caption>Monthly Savings</caption>
  <colgroup>
    <col span="1" style="background-color: #f2f2f2" />
    <col style="background-color: #e8f5e9" />
    <col style="background-color: #e3f2fd" />
  </colgroup>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
      <th>Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
      <td>$150</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
      <td>$120</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$180</td>
      <td>$270</td>
    </tr>
  </tfoot>
</table>`;

    const playgroundCode = {
        html: `<h2>Simple Customer Table</h2>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

<h2>Advanced Savings Table</h2>
<table>
  <caption>Monthly Savings</caption>
  <colgroup>
    <col span="1" />
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
      <th>Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
      <td>$150</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
      <td>$120</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Savings:</td>
      <td>$180</td>
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
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
caption {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: hsl(var(--primary));
}
th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}
th {
  background-color: hsl(var(--muted));
  font-weight: bold;
}
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
tbody tr:hover {
  background-color: hsl(var(--primary) / 0.1);
}
tfoot {
  background-color: hsl(var(--muted));
  font-weight: bold;
}
colgroup col:nth-child(2) {
    background-color: hsl(var(--chart-2) / 0.1);
}
colgroup col:nth-child(3) {
    background-color: hsl(var(--chart-4) / 0.1);
}
`,
        js: ''
    };

    const tableElements = [
      { tag: '<table>', icon: Table, description: 'The wrapper for the entire table.' },
      { tag: '<tr>', icon: Rows, description: 'Table Row. Defines a row of cells.' },
      { tag: '<th>', icon: Heading2, description: 'Table Header. Defines a header cell. Text is bold and centered by default.' },
      { tag: '<td>', icon: Columns, description: 'Table Data. Defines a standard data cell.' },
      { tag: '<thead>', icon: Heading2, description: 'Groups the header content in a table.' },
      { tag: '<tbody>', icon: Rows, description: 'Groups the main body content in a table.' },
      { tag: '<tfoot>', icon: Heading3, description: 'Groups the footer content in a table.' },
      { tag: '<caption>', icon: Rows, description: 'Defines a table caption.' },
      { tag: '<colgroup>', icon: Columns, description: 'Specifies a group of one or more columns for formatting.' },
      { tag: '<col>', icon: Columns, description: 'Used with <colgroup> to specify column properties for each column.' },
    ];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Table className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">HTML Tables</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Structuring data in rows and columns.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Core Table Elements</CardTitle>
                    <CardDescription>These are the building blocks for any HTML table.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tableElements.map(el => (
                        <div key={el.tag} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-1"><el.icon className="w-5 h-5 text-primary" /><code>{el.tag}</code></h3>
                            <p className="text-sm text-muted-foreground">{el.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Simple Table Example</CardTitle>
                    <CardDescription>A basic table structure with headers (`&lt;th&gt;`) and data cells (`&lt;td&gt;`) organized into rows (`&lt;tr&gt;`).</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{simpleTableCode}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Advanced Table Structure</CardTitle>
                    <CardDescription>For more complex tables, use `&lt;thead&gt;`, `&lt;tbody&gt;`, and `&lt;tfoot&gt;` to define header, body, and footer sections. This provides better structure for browsers and screen readers. `&lt;colgroup&gt;` and `&lt;col&gt;` can be used for styling entire columns.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{advancedTableCode}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It All In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how both simple and advanced tables are styled and rendered.</CardDescription>
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
