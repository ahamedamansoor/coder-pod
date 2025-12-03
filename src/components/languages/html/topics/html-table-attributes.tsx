'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Settings,
  Lightbulb,
  CheckCircle2,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlTableAttributesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const colspanRowspanExample = {
  html: `<h3>Schedule with Merged Cells</h3>
<table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00 AM</td>
      <td colspan="2">Team Meeting</td>
      <td>Workshop</td>
    </tr>
    <tr>
      <td>1:00 PM</td>
      <td rowspan="2">Project Work</td>
      <td>Review</td>
      <td rowspan="2">Training</td>
    </tr>
    <tr>
      <td>3:00 PM</td>
      <td>Lunch Break</td>
    </tr>
  </tbody>
</table>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h3 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

table {
  width: 100%;
  max-width: 700px;
  margin: 1.5rem auto;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  table {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

th {
  background: #3b82f6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #1e40af;
}

@media (prefers-color-scheme: dark) {
  th {
    background: #1e40af;
    border-color: #0c4a6e;
  }
}

td {
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  color: #475569;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  td {
    border-color: #334155;
    color: #cbd5e1;
  }
}

td:first-child {
  text-align: left;
  font-weight: 500;
  background: #f9fafb;
}

@media (prefers-color-scheme: dark) {
  td:first-child {
    background: #0f172a;
  }
}

tr:hover {
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  tr:hover {
    background: #0c2340;
  }
}`,
  js: ``,
};

const borderSpacingExample = {
  html: `<h3>Tables with Different Spacing</h3>
<div class="table-wrapper">
  <h4>Border Collapse</h4>
  <table class="collapse-table">
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>87</td>
    </tr>
  </table>
</div>

<div class="table-wrapper">
  <h4>Border Separate</h4>
  <table class="separate-table">
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>87</td>
    </tr>
  </table>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

.table-wrapper {
  background: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
  border-radius: 8px;
  max-width: 450px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .table-wrapper {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.table-wrapper h4 {
  color: #1e293b;
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  .table-wrapper h4 {
    color: #f1f5f9;
  }
}

.collapse-table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #3b82f6;
}

.collapse-table th {
  background: #3b82f6;
  color: white;
  padding: 0.75rem;
}

.collapse-table td {
  padding: 0.75rem;
  border: 1px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  .collapse-table {
    border-color: #60a5fa;
  }
  
  .collapse-table th {
    background: #1e40af;
  }
  
  .collapse-table td {
    border-color: #1e40af;
    color: #cbd5e1;
  }
}

.separate-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 8px;
}

.separate-table th {
  background: #06b6d4;
  color: white;
  padding: 0.75rem;
  border-radius: 4px;
}

.separate-table td {
  padding: 0.75rem;
  border: 1px solid #06b6d4;
  border-radius: 4px;
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  .separate-table th {
    background: #0891b2;
  }
  
  .separate-table td {
    border-color: #0891b2;
    background: #0c2340;
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const cellPropertiesExample = {
  html: `<h3>Table with Data Attributes</h3>
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th data-type="number">Price</th>
      <th data-type="number">Quantity</th>
      <th data-type="number">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td align="right">$999</td>
      <td align="center">2</td>
      <td align="right">$1998</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td align="right">$25</td>
      <td align="center">5</td>
      <td align="right">$125</td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td align="right">$75</td>
      <td align="center">3</td>
      <td align="right">$225</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Totals</th>
      <td colspan="2" align="right">10 items</td>
      <td align="right">$2348</td>
    </tr>
  </tfoot>
</table>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h3 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

table {
  width: 100%;
  max-width: 600px;
  margin: 1.5rem auto;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  table {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

th {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #6d28d9;
}

@media (prefers-color-scheme: dark) {
  th {
    background: #6d28d9;
    border-color: #4c1d95;
  }
}

td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  td {
    border-color: #334155;
    color: #cbd5e1;
  }
}

td[align="right"] {
  text-align: right;
  font-family: 'Courier New', monospace;
}

td[align="center"] {
  text-align: center;
}

tbody tr:nth-child(odd) {
  background: #f9fafb;
}

@media (prefers-color-scheme: dark) {
  tbody tr:nth-child(odd) {
    background: #0f172a;
  }
}

tfoot {
  background: #f0f9ff;
  border-top: 2px solid #8b5cf6;
}

@media (prefers-color-scheme: dark) {
  tfoot {
    background: #0c2340;
    border-color: #a78bfa;
  }
}`,
  js: ``,
};

export default function HtmlTableAttributes({ onOpenWebPlayground }: HtmlTableAttributesProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Settings}
        category="HTML · Tables"
        title="Table Attributes"
        description="Learn to use attributes to control table appearance and behavior"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Settings className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Table Attributes
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Control table layout and cell behavior
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            HTML table attributes allow you to control how cells span across rows and columns, and how content is aligned within cells.
            Common attributes include <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">colspan</code>,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">rowspan</code>, and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">align</code>.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Modern Approach</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              While HTML attributes exist, it's often better to use CSS for styling and alignment. HTML5 focuses on semantic meaning.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Essential Table Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Important attributes for table cells
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3">
            {[
              {
                attribute: 'colspan',
                desc: 'Merge cells horizontally across columns',
                example: '<td colspan="2">Spans 2 columns</td>',
                color: 'orange',
              },
              {
                attribute: 'rowspan',
                desc: 'Merge cells vertically across rows',
                example: '<td rowspan="2">Spans 2 rows</td>',
                color: 'emerald',
              },
              {
                attribute: 'align',
                desc: 'Align content (left, center, right)',
                example: '<td align="center">Centered</td>',
                color: 'purple',
              },
              {
                attribute: 'width',
                desc: 'Set column width (use CSS instead)',
                example: '<td width="200">Wide cell</td>',
                color: 'amber',
              },
            ].map((item, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700',
                amber: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 border-amber-200 dark:border-amber-700',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <h4 className="font-mono font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {item.attribute}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    {item.desc}
                  </p>
                  <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-current border-opacity-20">
                    <code className="text-slate-800 dark:text-slate-200">{item.example}</code>
                  </pre>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Colspan and Rowspan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Colspan and Rowspan
          </CardTitle>
          <CardDescription className="text-base">
            Merge cells across multiple columns and rows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">colspan - Horizontal Merge</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Combines multiple columns into one cell
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-700">
                <code>{`<td colspan="3">\n  Spans 3 columns\n</td>`}</code>
              </pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">rowspan - Vertical Merge</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Combines multiple rows into one cell
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700">
                <code>{`<td rowspan="2">\n  Spans 2 rows\n</td>`}</code>
              </pre>
            </div>
          </div>

          <FrontendCodePreview
            title="Merged Cells Example"
            description="Using colspan and rowspan for complex tables"
            html={colspanRowspanExample.html}
            css={colspanRowspanExample.css}
            js={colspanRowspanExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Border and Spacing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Border Collapse and Spacing
          </CardTitle>
          <CardDescription className="text-base">
            Control how table borders appear
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">border-collapse: collapse</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Borders merge into single lines
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-orange-200 dark:border-orange-700">
                <code>{`table {\n  border-collapse: collapse;\n}`}</code>
              </pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">border-collapse: separate</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Space between cell borders
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-cyan-200 dark:border-cyan-700">
                <code>{`table {\n  border-collapse: separate;\n  border-spacing: 8px;\n}`}</code>
              </pre>
            </div>
          </div>

          <FrontendCodePreview
            title="Spacing Styles"
            description="Compare border-collapse and border-spacing"
            html={borderSpacingExample.html}
            css={borderSpacingExample.css}
            js={borderSpacingExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Alignment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Cell Alignment
          </CardTitle>
          <CardDescription className="text-base">
            Align content within table cells
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            While HTML align attribute still works, it's better to use CSS text-align and vertical-align properties for modern websites.
          </p>

          <FrontendCodePreview
            title="Cell Alignment"
            description="Aligning content in table cells"
            html={cellPropertiesExample.html}
            css={cellPropertiesExample.css}
            js={cellPropertiesExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use CSS for styling</li>
                <li>✓ Use colspan/rowspan sparingly</li>
                <li>✓ Align with text-align CSS</li>
                <li>✓ Test with colspan/rowspan</li>
                <li>✓ Keep tables simple</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't use align attribute</li>
                <li>✗ Don't overuse colspan/rowspan</li>
                <li>✗ Don't use table layout</li>
                <li>✗ Don't mix old and new attrs</li>
                <li>✗ Don't skip responsive design</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Modern Recommendation</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Use CSS Grid or Flexbox for complex layouts instead of nested tables or excessive colspan/rowspan attributes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

