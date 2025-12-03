'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Table,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlBasicTablesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicTableExample = {
  html: `<h3>Student Grades</h3>
<table>
  <tr>
    <th>Name</th>
    <th>Math</th>
    <th>Science</th>
    <th>English</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>95</td>
    <td>88</td>
    <td>92</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>87</td>
    <td>91</td>
    <td>85</td>
  </tr>
  <tr>
    <td>Charlie</td>
    <td>92</td>
    <td>94</td>
    <td>89</td>
  </tr>
</table>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
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
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  td {
    border-color: #334155;
    color: #cbd5e1;
  }
}

tr:hover {
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  tr:hover {
    background: #0c2340;
  }
}

tr:last-child td {
  border-bottom: none;
}`,
  js: ``,
};

const simpleTableExample = {
  html: `<h3>Weather This Week</h3>
<table>
  <tr>
    <th>Day</th>
    <th>Temperature</th>
    <th>Condition</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>72°F</td>
    <td>Sunny</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>68°F</td>
    <td>Cloudy</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>65°F</td>
    <td>Rainy</td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>70°F</td>
    <td>Partly Cloudy</td>
  </tr>
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
  max-width: 500px;
  margin: 1.5rem auto;
  border-collapse: collapse;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  overflow: hidden;
}

@media (prefers-color-scheme: dark) {
  table {
    background: #1e293b;
    border-color: #60a5fa;
  }
}

th {
  background: #06b6d4;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  th {
    background: #0891b2;
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

tr:nth-child(even) {
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  tr:nth-child(even) {
    background: #0c2340;
  }
}

tr:last-child td {
  border-bottom: none;
}`,
  js: ``,
};

const comparisonTableExample = {
  html: `<h3>Feature Comparison</h3>
<table>
  <tr>
    <th>Feature</th>
    <th>Basic</th>
    <th>Pro</th>
    <th>Enterprise</th>
  </tr>
  <tr>
    <td>Users</td>
    <td>1</td>
    <td>10</td>
    <td>Unlimited</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>10 GB</td>
    <td>100 GB</td>
    <td>Unlimited</td>
  </tr>
  <tr>
    <td>Support</td>
    <td>Email</td>
    <td>Priority</td>
    <td>24/7 Phone</td>
  </tr>
  <tr>
    <td>Analytics</td>
    <td>❌</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
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
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  text-align: center;
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
  text-align: center;
}

td:first-child {
  text-align: left;
  font-weight: 500;
  background: #f9fafb;
}

@media (prefers-color-scheme: dark) {
  td {
    border-color: #334155;
    color: #cbd5e1;
  }
  
  td:first-child {
    background: #0f172a;
  }
}

tr:last-child td {
  border-bottom: none;
}`,
  js: ``,
};

export default function HtmlBasicTables({ onOpenWebPlayground }: HtmlBasicTablesProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Table}
        category="HTML · Tables"
        title="Basic Tables"
        description="Learn to create simple HTML tables for data"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Table className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are HTML Tables?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Display data in rows and columns
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            HTML tables are used to display data in an organized, grid-like format with rows and columns.
            Use the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;table&gt;</code> element to create a table,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;tr&gt;</code> for rows,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;th&gt;</code> for header cells, and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;td&gt;</code> for data cells.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                When to Use
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Display data sets</li>
                <li>✓ Comparisons</li>
                <li>✓ Schedules</li>
                <li>✓ Financial data</li>
                <li>✓ Structured information</li>
                <li>✓ Grade sheets</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Basic Elements
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<table>
  <tr>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
  </tr>
</table>`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Always use tables for tabular data, never for layout. Use semantic elements like &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Table className="w-7 h-7" />
            Basic Table Structure
          </CardTitle>
          <CardDescription className="text-base">
            Essential elements for creating a table
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3">
            {[
              {
                element: '&lt;table&gt;',
                desc: 'Container for all table elements',
                color: 'orange',
              },
              {
                element: '&lt;tr&gt;',
                desc: 'Table row - contains cells',
                color: 'emerald',
              },
              {
                element: '&lt;th&gt;',
                desc: 'Table header cell - bold and centered',
                color: 'purple',
              },
              {
                element: '&lt;td&gt;',
                desc: 'Table data cell - contains content',
                color: 'amber',
              },
            ].map((item, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400',
                amber: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 border-amber-200 dark:border-amber-700 text-amber-600 dark:text-amber-400',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <div className="flex items-start gap-3">
                    <code className="text-sm font-mono font-bold">{item.element}</code>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Complete HTML Structure</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* First Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Student Grades Table
          </CardTitle>
          <CardDescription className="text-base">
            Simple data table with headers and values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example shows a basic table displaying student grades. Notice the header row with &lt;th&gt; elements and data rows with &lt;td&gt; elements.
          </p>

          <FrontendCodePreview
            title="Student Grades"
            description="Basic table with rows and columns"
            html={basicTableExample.html}
            css={basicTableExample.css}
            js={basicTableExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Second Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Weather Data Table
          </CardTitle>
          <CardDescription className="text-base">
            Table with alternating row colors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example demonstrates using CSS to style tables with alternating row colors for better readability.
          </p>

          <FrontendCodePreview
            title="Weather Forecast"
            description="Table with alternating colors"
            html={simpleTableExample.html}
            css={simpleTableExample.css}
            js={simpleTableExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Comparison Table
          </CardTitle>
          <CardDescription className="text-base">
            Table for comparing features or options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Comparison tables are perfect for displaying different options side-by-side. This example shows pricing plans with different features.
          </p>

          <FrontendCodePreview
            title="Feature Comparison"
            description="Comparison table with pricing plans"
            html={comparisonTableExample.html}
            css={comparisonTableExample.css}
            js={comparisonTableExample.js}
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
                <li>✓ Use for tabular data</li>
                <li>✓ Use semantic elements</li>
                <li>✓ Add border-collapse CSS</li>
                <li>✓ Make headers distinct</li>
                <li>✓ Use meaningful headers</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't use for layout</li>
                <li>✗ Don't forget headers</li>
                <li>✗ Don't nest tables deeply</li>
                <li>✗ Don't leave cells empty</li>
                <li>✗ Don't use for spacing</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Always use &lt;th&gt; for headers with scope attribute to help screen readers understand table structure.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Data Display', desc: 'Organized information', emoji: '📊' },
              { title: 'Schedules', desc: 'Timetables and calendars', emoji: '📅' },
              { title: 'Pricing', desc: 'Plan comparisons', emoji: '💰' },
              { title: 'Specifications', desc: 'Product details', emoji: '⚙️' },
              { title: 'Reports', desc: 'Financial data', emoji: '📈' },
              { title: 'Results', desc: 'Test or survey data', emoji: '✓' },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <div className="text-3xl mb-2">{useCase.emoji}</div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{useCase.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

