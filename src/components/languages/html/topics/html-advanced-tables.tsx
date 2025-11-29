'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accessibility, Columns, Play, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface HtmlAdvancedTablesProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

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
</table>`,
  css: `body { font-family: sans-serif; padding: 1rem; }
table { width: 100%; border-collapse: collapse; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
caption { font-size: 1.25rem; font-weight: bold; margin: 1rem 0; color: hsl(var(--primary)); }
th, td { border: 1px solid #cbd5e0; padding: 12px; text-align: left; }
thead th { background-color: hsl(var(--muted)); color: hsl(var(--foreground)); }
tbody th { background-color: hsl(var(--muted)); }
tbody tr:nth-child(even) { background-color: #fdfdfe; }
tbody tr:hover { background-color: hsl(var(--primary) / 0.1); }
tfoot { background-color: hsl(var(--muted)); font-weight: bold; }`,
  js: ''
};

export default function HtmlAdvancedTables({ onOpenWebPlayground }: HtmlAdvancedTablesProps) {
  const advancedElements = [
    { tag: '<thead>', description: 'Groups header content; contains rows with <th> cells.' },
    { tag: '<tbody>', description: 'Main data section; contains standard data rows.' },
    { tag: '<tfoot>', description: 'Footer rows for summaries/totals.' },
    { tag: '<caption>', description: 'Describes the table; improves accessibility context.' },
    { tag: '<colgroup>', description: 'Defines groups of columns for shared styling.' },
    { tag: '<col>', description: 'Individual column properties inside a colgroup.' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={File}
        category="HTML Basics"
        title="Advanced Tables"
        description="Enhancing tabular data with semantic structure and accessibility"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle>Why Go Beyond Basic Tables?</CardTitle>
          <CardDescription>Semantic grouping boosts readability, styling flexibility, and screen reader interpretation.</CardDescription>
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
            <CardTitle className="flex items-center gap-2"><Accessibility className="w-5 h-5 text-primary" />The <code>scope</code> Attribute</CardTitle>
            <CardDescription>Defines what cells a header cell relates to (<code>col</code> vs <code>row</code>).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><code className="font-mono bg-muted p-1 rounded">scope="col"</code>: Header applies to entire column.</p>
            <p><code className="font-mono bg-muted p-1 rounded">scope="row"</code>: Header applies to the row.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Columns className="w-5 h-5 text-primary" />Span Attributes</CardTitle>
            <CardDescription>Merge cells horizontally or vertically.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><code className="font-mono bg-muted p-1 rounded">colspan="2"</code>: Cell spans two columns.</p>
            <p><code className="font-mono bg-muted p-1 rounded">rowspan="3"</code>: Cell spans three rows.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>See It In Action</CardTitle>
          <CardDescription>Open a fully structured table with semantic sections & attributes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => onOpenWebPlayground?.(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
            <Play className="mr-2 h-4 w-4" /> Open Playground Example
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
