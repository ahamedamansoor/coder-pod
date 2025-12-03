'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Type,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlTableCaptionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicCaptionExample = {
  html: `<h3>Basic Table with Caption</h3>
<table>
  <caption>Annual Sales Report 2024</caption>
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue</th>
      <th>Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Q1</td>
      <td>$250,000</td>
      <td>5%</td>
    </tr>
    <tr>
      <td>Q2</td>
      <td>$280,000</td>
      <td>12%</td>
    </tr>
    <tr>
      <td>Q3</td>
      <td>$315,000</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Q4</td>
      <td>$340,000</td>
      <td>8%</td>
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

caption {
  padding: 1rem;
  background: #f0f9ff;
  color: #3b82f6;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: left;
  border-bottom: 2px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  caption {
    background: #0c2340;
    color: #60a5fa;
    border-color: #0891b2;
  }
}

th {
  background: #3b82f6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  th {
    background: #1e40af;
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
  background: #f9fafb;
}

@media (prefers-color-scheme: dark) {
  tr:hover {
    background: #0f172a;
  }
}`,
  js: ``,
};

const styledCaptionExample = {
  html: `<h3>Styled Caption Examples</h3>

<table class="table-bottom">
  <caption class="caption-bottom">Table 1: Student Performance (Bottom Caption)</caption>
  <thead>
    <tr>
      <th>Student</th>
      <th>Math</th>
      <th>Science</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>95</td>
      <td>92</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>87</td>
      <td>89</td>
    </tr>
  </tbody>
</table>

<table class="table-top">
  <caption class="caption-top">Table 2: Monthly Sales (Top Caption)</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$15,000</td>
      <td>$12,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$18,000</td>
      <td>$15,000</td>
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
  margin: 2rem auto 1rem;
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

.caption-top {
  caption-side: top;
  padding: 1rem;
  background: #f0f9ff;
  color: #3b82f6;
  font-weight: bold;
  border-bottom: 2px solid #3b82f6;
  text-align: left;
}

@media (prefers-color-scheme: dark) {
  .caption-top {
    background: #0c2340;
    color: #60a5fa;
    border-color: #0891b2;
  }
}

.caption-bottom {
  caption-side: bottom;
  padding: 1rem;
  background: #f0f9ff;
  color: #06b6d4;
  font-weight: bold;
  border-top: 2px solid #06b6d4;
  text-align: left;
}

@media (prefers-color-scheme: dark) {
  .caption-bottom {
    background: #0c2340;
    color: #22d3ee;
    border-color: #0891b2;
  }
}

th {
  background: #8b5cf6;
  color: white;
  padding: 0.75rem;
  text-align: left;
  font-weight: bold;
  font-size: 0.95rem;
}

@media (prefers-color-scheme: dark) {
  th {
    background: #6d28d9;
  }
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.95rem;
}

@media (prefers-color-scheme: dark) {
  td {
    border-color: #334155;
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const accessibleCaptionExample = {
  html: `<h3>Accessible Table with Caption</h3>
<table>
  <caption>
    <strong>Q1 2024 Financial Summary</strong><br>
    <small>Revenue and expenses breakdown by department</small>
  </caption>
  <thead>
    <tr>
      <th scope="col">Department</th>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
      <th scope="col">Net</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sales</th>
      <td>$500,000</td>
      <td>$150,000</td>
      <td>$350,000</td>
    </tr>
    <tr>
      <th scope="row">Marketing</th>
      <td>$300,000</td>
      <td>$200,000</td>
      <td>$100,000</td>
    </tr>
    <tr>
      <th scope="row">Operations</th>
      <td>$200,000</td>
      <td>$180,000</td>
      <td>$20,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$1,000,000</td>
      <td>$530,000</td>
      <td>$470,000</td>
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

caption {
  padding: 1.5rem 1rem;
  background: #f0f9ff;
  color: #3b82f6;
  text-align: left;
  border-bottom: 2px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  caption {
    background: #0c2340;
    color: #60a5fa;
    border-color: #0891b2;
  }
}

caption strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

caption small {
  color: #64748b;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  caption small {
    color: #94a3b8;
  }
}

th {
  background: #3b82f6;
  color: white;
  padding: 0.75rem;
  text-align: left;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  th {
    background: #1e40af;
  }
}

tbody th {
  background: transparent;
  color: #1e293b;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  tbody th {
    color: #f1f5f9;
  }
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
  text-align: right;
}

td:first-child,
th:first-child {
  text-align: left;
}

@media (prefers-color-scheme: dark) {
  td {
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
}

tfoot {
  background: #f0f9ff;
  border-top: 2px solid #3b82f6;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  tfoot {
    background: #0c2340;
    border-color: #0891b2;
  }
}`,
  js: ``,
};

export default function HtmlTableCaptions({ onOpenWebPlayground }: HtmlTableCaptionsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Type}
        category="HTML · Tables"
        title="Table Captions"
        description="Learn to add descriptive titles to HTML tables"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Type className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Table Captions
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Add descriptive titles to your tables
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;caption&gt;</code> element
            provides a title or description for a table. It's placed directly after the opening <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;table&gt;</code> tag
            and serves as a label for the entire table, improving both accessibility and usability.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Benefits
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Describes table purpose</li>
                <li>✓ Improves accessibility</li>
                <li>✓ Helps screen readers</li>
                <li>✓ Provides context</li>
                <li>✓ Professional appearance</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Basic Syntax
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<table>
  <caption>
    Table Description
  </caption>
  <!-- rest of table -->
</table>`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Key Point</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              &lt;caption&gt; must be the first child of the &lt;table&gt; element, before any &lt;thead&gt;, &lt;tbody&gt;, or &lt;tr&gt;.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Caption */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Type className="w-7 h-7" />
            Basic Caption Example
          </CardTitle>
          <CardDescription className="text-base">
            A simple table with a descriptive caption
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The caption appears as a label that describes what the table contains. It's semantically associated with the table and helps users understand the data.
          </p>

          <FrontendCodePreview
            title="Sales Report with Caption"
            description="Table with descriptive caption"
            html={basicCaptionExample.html}
            css={basicCaptionExample.css}
            js={basicCaptionExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Caption Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Caption Features and Placement
          </CardTitle>
          <CardDescription className="text-base">
            Style and position captions with CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">caption-side: top</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Default position - caption appears above table
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-700">
                <code>{`caption {\n  caption-side: top;\n}`}</code>
              </pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">caption-side: bottom</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Caption appears below table
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700">
                <code>{`caption {\n  caption-side: bottom;\n}`}</code>
              </pre>
            </div>
          </div>

          <FrontendCodePreview
            title="Styled Captions"
            description="Captions positioned at top and bottom"
            html={styledCaptionExample.html}
            css={styledCaptionExample.css}
            js={styledCaptionExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Caption Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Writing Effective Captions
          </CardTitle>
          <CardDescription className="text-base">
            Guidelines for creating descriptive captions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3">
            {[
              {
                title: 'Be Descriptive',
                desc: 'Clearly state what the table contains',
                example: '✓ "Monthly Sales Report 2024"',
                color: 'orange',
              },
              {
                title: 'Keep It Concise',
                desc: 'Use clear, short language',
                example: '✓ "Employee Performance Metrics"',
                color: 'emerald',
              },
              {
                title: 'Include Context',
                desc: 'Mention time period or department if relevant',
                example: '✓ "Q1 2024 Customer Feedback"',
                color: 'purple',
              },
              {
                title: 'Use Consistent Style',
                desc: 'Match caption style across tables',
                example: '✓ Title-cased and descriptive',
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
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    {item.desc}
                  </p>
                  <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border block w-fit">
                    {item.example}
                  </code>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Accessible Captions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Accessible Captions
          </CardTitle>
          <CardDescription className="text-base">
            Create captions that work well with screen readers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            Good captions include both a title and optional description. You can use HTML elements within captions to format them.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Enhanced Caption Structure</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<caption>
  <strong>2024 Financial Summary</strong><br>
  <small>Revenue and expenses by department</small>
</caption>`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Accessible Financial Table"
            description="Table with structured caption and scope attributes"
            html={accessibleCaptionExample.html}
            css={accessibleCaptionExample.css}
            js={accessibleCaptionExample.js}
            colorTheme="blue"
            previewHeight="500px"
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
                <li>✓ Use descriptive captions</li>
                <li>✓ Place as first table child</li>
                <li>✓ Style with CSS</li>
                <li>✓ Use with scope attributes</li>
                <li>✓ Include context (dates, etc.)</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't skip captions</li>
                <li>✗ Don't use vague titles</li>
                <li>✗ Don't place outside table</li>
                <li>✗ Don't use align attribute</li>
                <li>✗ Don't overload with details</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Screen readers announce table captions, making them essential for users with visual impairments to understand table purpose.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            When to Use Captions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Reports', desc: 'Financial or sales reports', emoji: '📊' },
              { title: 'Schedules', desc: 'Class timetables, events', emoji: '📅' },
              { title: 'Data Tables', desc: 'Statistical information', emoji: '📈' },
              { title: 'Specs', desc: 'Product specifications', emoji: '⚙️' },
              { title: 'Comparisons', desc: 'Side-by-side features', emoji: '⚖️' },
              { title: 'Results', desc: 'Survey or test data', emoji: '✓' },
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

