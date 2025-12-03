'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Layers,
  Lightbulb,
  CheckCircle2,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlTableStructureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const semanticTableExample = {
  html: `<h3>Sales Report</h3>
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Q1</th>
      <th>Q2</th>
      <th>Q3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptops</td>
      <td>150</td>
      <td>200</td>
      <td>180</td>
    </tr>
    <tr>
      <td>Tablets</td>
      <td>100</td>
      <td>120</td>
      <td>140</td>
    </tr>
    <tr>
      <td>Phones</td>
      <td>250</td>
      <td>300</td>
      <td>280</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>500</td>
      <td>620</td>
      <td>600</td>
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

thead {
  background: #3b82f6;
}

thead th {
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #1e40af;
}

@media (prefers-color-scheme: dark) {
  thead {
    background: #1e40af;
  }
  
  thead th {
    border-color: #0c4a6e;
  }
}

tbody td {
  padding: 0.75rem 1rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  tbody td {
    border-color: #334155;
    color: #cbd5e1;
  }
}

tbody tr:hover {
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  tbody tr:hover {
    background: #0c2340;
  }
}

tfoot {
  background: #f0f9ff;
  border-top: 2px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  tfoot {
    background: #0c2340;
    border-color: #0891b2;
  }
}

tfoot th,
tfoot td {
  padding: 0.75rem 1rem;
  color: #1e293b;
  text-align: center;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  tfoot th,
  tfoot td {
    color: #f1f5f9;
  }
}`,
  js: ``,
};

const complexStructureExample = {
  html: `<h3>Monthly Budget</h3>
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Housing</td>
      <td>$1200</td>
      <td>$1200</td>
      <td>$1200</td>
    </tr>
    <tr>
      <td>Food</td>
      <td>$400</td>
      <td>$380</td>
      <td>$420</td>
    </tr>
    <tr>
      <td>Transportation</td>
      <td>$200</td>
      <td>$180</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>Entertainment</td>
      <td>$150</td>
      <td>$200</td>
      <td>$175</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total Monthly</th>
      <td>$1950</td>
      <td>$1960</td>
      <td>$1995</td>
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
  max-width: 650px;
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

thead {
  background: #06b6d4;
}

thead th {
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #0891b2;
}

@media (prefers-color-scheme: dark) {
  thead {
    background: #0891b2;
  }
  
  thead th {
    border-color: #0e7490;
  }
}

tbody tr:nth-child(odd) {
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  tbody tr:nth-child(odd) {
    background: #0c2340;
  }
}

tbody td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

tbody td:first-child {
  font-weight: 500;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  tbody td {
    border-color: #334155;
    color: #cbd5e1;
  }
  
  tbody td:first-child {
    color: #f1f5f9;
  }
}

tfoot {
  background: #f0f9ff;
  border-top: 3px solid #06b6d4;
}

@media (prefers-color-scheme: dark) {
  tfoot {
    background: #0c2340;
    border-color: #0891b2;
  }
}

tfoot th,
tfoot td {
  padding: 1rem;
  color: #1e293b;
  font-weight: bold;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  tfoot th,
  tfoot td {
    color: #f1f5f9;
  }
}`,
  js: ``,
};

const scopeAttributeExample = {
  html: `<h3>Accessible Table Example</h3>
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John</th>
      <td>28</td>
      <td>New York</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>32</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th scope="row">Mike</th>
      <td>25</td>
      <td>Chicago</td>
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
  max-width: 550px;
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

thead th {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #6d28d9;
}

@media (prefers-color-scheme: dark) {
  thead th {
    background: #6d28d9;
    border-color: #4c1d95;
  }
}

tbody th {
  background: #f3e8ff;
  color: #5b21b6;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  tbody th {
    background: #4c1d95;
    color: #e9d5ff;
    border-color: #334155;
  }
}

tbody td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  tbody td {
    border-color: #334155;
    color: #cbd5e1;
  }
}

tbody tr:hover {
  background: #f9fafb;
}

@media (prefers-color-scheme: dark) {
  tbody tr:hover {
    background: #0f172a;
  }
}`,
  js: ``,
};

export default function HtmlTableStructure({ onOpenWebPlayground }: HtmlTableStructureProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="HTML · Tables"
        title="Table Structure"
        description="Learn proper semantic table structure with thead, tbody, and tfoot"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Semantic Table Structure
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Organize tables with proper sections
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Semantic table structure involves grouping table rows into logical sections using
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;thead&gt;</code>,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;tbody&gt;</code>, and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;tfoot&gt;</code>.
            This improves accessibility and makes styling easier.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                element: '&lt;thead&gt;',
                desc: 'Header rows',
                content: 'Column titles',
              },
              {
                element: '&lt;tbody&gt;',
                desc: 'Body rows',
                content: 'Main data',
              },
              {
                element: '&lt;tfoot&gt;',
                desc: 'Footer rows',
                content: 'Totals, summaries',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <h4 className="font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2 text-sm">
                  {item.element}
                </h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {item.desc}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Best Practice</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Always use &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; to structure your tables semantically!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* First Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Sales Report with Structure
          </CardTitle>
          <CardDescription className="text-base">
            Table with thead, tbody, and tfoot sections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example shows a complete table structure with headers, body rows, and a footer with totals.
          </p>

          <FrontendCodePreview
            title="Sales Report"
            description="Structured table with all sections"
            html={semanticTableExample.html}
            css={semanticTableExample.css}
            js={semanticTableExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Structure Sections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Understanding Each Section
          </CardTitle>
          <CardDescription className="text-base">
            What each section of a structured table contains
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {[
              {
                name: 'Table Head (&lt;thead&gt;)',
                purpose: 'Contains header cells that label columns',
                details: 'Used with &lt;tr&gt; and &lt;th&gt; elements',
                color: 'orange',
              },
              {
                name: 'Table Body (&lt;tbody&gt;)',
                purpose: 'Contains the main data rows',
                details: 'Can have multiple tbody elements for grouping',
                color: 'emerald',
              },
              {
                name: 'Table Footer (&lt;tfoot&gt;)',
                purpose: 'Contains summary rows like totals',
                details: 'Appears at the bottom of the table',
                color: 'purple',
              },
            ].map((item, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">
                    <strong>Purpose:</strong> {item.purpose}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Details:</strong> {item.details}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Complete Structure Example</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>Sum</td>
    </tr>
  </tfoot>
</table>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Second Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Budget Table with Styling
          </CardTitle>
          <CardDescription className="text-base">
            Table with structured rows and enhanced visual design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example demonstrates styled tbody with alternating colors and a prominent footer section.
          </p>

          <FrontendCodePreview
            title="Monthly Budget"
            description="Structured table with alternating rows and totals"
            html={complexStructureExample.html}
            css={complexStructureExample.css}
            js={complexStructureExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Scope Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Using the Scope Attribute
          </CardTitle>
          <CardDescription className="text-base">
            Improve accessibility with scope attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">scope</code> attribute on &lt;th&gt; elements helps screen readers understand table relationships.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">scope="col"</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                For column headers
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-700">
                <code>{`<th scope="col">\n  Name\n</th>`}</code>
              </pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">scope="row"</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                For row headers
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700">
                <code>{`<th scope="row">\n  John\n</th>`}</code>
              </pre>
            </div>
          </div>

          <FrontendCodePreview
            title="Accessible Table"
            description="Table using scope attributes for better accessibility"
            html={scopeAttributeExample.html}
            css={scopeAttributeExample.css}
            js={scopeAttributeExample.js}
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
                <li>✓ Use thead, tbody, tfoot</li>
                <li>✓ Use scope attributes</li>
                <li>✓ One row per &lt;tbody&gt; section</li>
                <li>✓ Group related rows</li>
                <li>✓ Style sections differently</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't skip semantic elements</li>
                <li>✗ Don't forget scope attributes</li>
                <li>✗ Don't nest tables in structure</li>
                <li>✗ Don't leave empty sections</li>
                <li>✗ Don't use for layout</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Semantic table structure with scope attributes makes tables accessible to screen readers and assistive technologies.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

