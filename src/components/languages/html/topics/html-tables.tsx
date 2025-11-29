
'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, Play, Rows, Columns, Heading2, Heading3 } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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
        <div className="space-y-10 pb-16">
            <PageHeader
              icon={Table}
              category="HTML Basics"
              title="HTML Tables"
              description="Structuring data in rows and columns"
              colorTheme="blue"
            />

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

            {/* HTML Tables in Action */}
            <div className='space-y-6'>
              <div className='flex items-center gap-3 mb-4'>
                <Table className='w-6 h-6 text-blue-600' />
                <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>HTML Tables in Action</h2>
              </div>
              <p className='text-slate-600 dark:text-slate-400 mb-6'>
                See how tables work with headers, sections, styling, and responsive design
              </p>

              {/* Example 1: Simple Table */}
              <Card>
                <CardContent className='pt-6'>
                  <FrontendCodePreview
                    title="1. Simple Table"
                    description="Basic table structure with headers and data cells"
                  html={`<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$999</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Mouse</td>
    <td>$25</td>
    <td>48</td>
  </tr>
  <tr>
    <td>Keyboard</td>
    <td>$75</td>
    <td>32</td>
  </tr>
</table>

<p class="note">📊 Basic table with headers (<code>&lt;th&gt;</code>) and data cells (<code>&lt;td&gt;</code>)</p>`}
                  css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark table {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #cbd5e1;
}

html.dark th,
html.dark td {
  border-color: #475569;
}

th {
  background: #3b82f6;
  font-weight: 600;
  color: white;
}

html.dark th {
  background: #1e40af;
}

tbody tr:hover {
  background: #eff6ff;
}

html.dark tbody tr:hover {
  background: #1e3a8a;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #93c5fd;
}

code {
  background: rgba(59, 130, 246, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                    colorTheme="blue"
                    icon={Table}
                    previewHeight="350px"
                  />
                </CardContent>
              </Card>

              {/* Example 2: Structured Table */}
              <Card>
                <CardContent className='pt-6'>
                  <FrontendCodePreview
                    title="2. Structured Table with Sections"
                    description="Using thead, tbody, and tfoot for semantic structure"
                    html={`<table>
  <caption>Q1 2024 Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Revenue</th>
      <th>Expenses</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$12,500</td>
      <td>$8,200</td>
      <td class="profit">$4,300</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$15,800</td>
      <td>$9,100</td>
      <td class="profit">$6,700</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$18,200</td>
      <td>$10,500</td>
      <td class="profit">$7,700</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Profit</td>
      <td class="total">$18,700</td>
    </tr>
  </tfoot>
</table>

<p class="note">🎯 Semantic structure with <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code></p>`}
                    css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark table {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

caption {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.75rem;
  color: #10b981;
  text-align: left;
}

html.dark caption {
  color: #34d399;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #cbd5e1;
}

html.dark th,
html.dark td {
  border-color: #475569;
}

thead th {
  background: #10b981;
  font-weight: 600;
  color: white;
}

html.dark thead th {
  background: #059669;
}

tfoot td {
  background: #d1fae5;
  font-weight: 600;
  color: #065f46;
}

html.dark tfoot td {
  background: #064e3b;
  color: #a7f3d0;
}

.profit {
  color: #15803d;
  font-weight: 600;
}

html.dark .profit {
  color: #4ade80;
}

.total {
  color: #047857;
  font-weight: 700;
  font-size: 1.1rem;
}

html.dark .total {
  color: #6ee7b7;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}

code {
  background: rgba(16, 185, 129, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                    colorTheme="emerald"
                    icon={Rows}
                    previewHeight="400px"
                  />
                </CardContent>
              </Card>

              {/* Example 3: Styled & Striped Table */}
              <Card>
                <CardContent className='pt-6'>
                  <FrontendCodePreview
                    title="3. Styled & Striped Table"
                    description="Striped rows with hover effects and status badges"
                    html={`<table>
  <caption>Employee Directory</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td>
      <td>Engineering</td>
      <td>alice@company.com</td>
      <td><span class="badge active">Active</span></td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>Marketing</td>
      <td>bob@company.com</td>
      <td><span class="badge active">Active</span></td>
    </tr>
    <tr>
      <td>Carol Williams</td>
      <td>Design</td>
      <td>carol@company.com</td>
      <td><span class="badge away">Away</span></td>
    </tr>
    <tr>
      <td>David Brown</td>
      <td>Sales</td>
      <td>david@company.com</td>
      <td><span class="badge active">Active</span></td>
    </tr>
  </tbody>
</table>

<p class="note">🎨 Alternate row colors with <code>:nth-child(even)</code> and hover effects</p>`}
                    css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark table {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

caption {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.75rem;
  color: #f59e0b;
  text-align: left;
}

html.dark caption {
  color: #fbbf24;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #cbd5e1;
}

html.dark th,
html.dark td {
  border-color: #475569;
}

thead th {
  background: #f59e0b;
  font-weight: 600;
  color: white;
}

html.dark thead th {
  background: #d97706;
}

tbody tr:nth-child(even) {
  background: #fef3c7;
}

html.dark tbody tr:nth-child(even) {
  background: #713f12;
}

tbody tr:hover {
  background: #fed7aa;
  transform: scale(1.01);
  transition: all 0.2s;
}

html.dark tbody tr:hover {
  background: #78350f;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.badge.active {
  background: #d1fae5;
  color: #065f46;
}

html.dark .badge.active {
  background: #064e3b;
  color: #6ee7b7;
}

.badge.away {
  background: #fecaca;
  color: #991b1b;
}

html.dark .badge.away {
  background: #7f1d1d;
  color: #fca5a5;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #78350f;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #713f12;
  color: #fef3c7;
}

code {
  background: rgba(245, 158, 11, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                    colorTheme="amber"
                    icon={Columns}
                    previewHeight="450px"
                  />
                </CardContent>
              </Card>

              {/* Example 4: Colspan & Rowspan */}
              <Card>
                <CardContent className='pt-6'>
                  <FrontendCodePreview
                    title="4. Table with Colspan & Rowspan"
                    description="Merging cells horizontally and vertically"
                    html={`<table>
  <caption>Class Schedule</caption>
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
      <td colspan="2" class="merged">Mathematics (Room 101)</td>
      <td>Science</td>
    </tr>
    <tr>
      <td>10:00 AM</td>
      <td>English</td>
      <td rowspan="2" class="merged-vertical">History<br/>(Double Period)</td>
      <td>Art</td>
    </tr>
    <tr>
      <td>11:00 AM</td>
      <td>PE</td>
      <td>Music</td>
    </tr>
  </tbody>
</table>

<p class="note">📐 Use <code>colspan</code> to span columns and <code>rowspan</code> to span rows</p>`}
                    css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark table {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

caption {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.75rem;
  color: #8b5cf6;
  text-align: left;
}

html.dark caption {
  color: #a78bfa;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #cbd5e1;
}

html.dark th,
html.dark td {
  border-color: #475569;
}

thead th {
  background: #8b5cf6;
  font-weight: 600;
  color: white;
}

html.dark thead th {
  background: #7c3aed;
}

.merged {
  background: #ddd6fe;
  font-weight: 600;
  text-align: center;
  color: #5b21b6;
}

html.dark .merged {
  background: #581c87;
  color: #e9d5ff;
}

.merged-vertical {
  background: #fce7f3;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  color: #831843;
}

html.dark .merged-vertical {
  background: #701a75;
  color: #fce7f3;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}

code {
  background: rgba(139, 92, 246, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                    colorTheme="purple"
                    icon={Heading3}
                    previewHeight="400px"
                  />
                </CardContent>
              </Card>

              {/* Example 5: Responsive Table */}
              <Card>
                <CardContent className='pt-6'>
                  <FrontendCodePreview
                    title="5. Responsive Table"
                    description="Scrollable table wrapper for small screens"
                    html={`<div class="table-wrapper">
  <table>
    <caption>Product Comparison</caption>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Basic</th>
        <th>Pro</th>
        <th>Enterprise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Users</td>
        <td>5</td>
        <td>25</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Storage</td>
        <td>10 GB</td>
        <td>100 GB</td>
        <td>1 TB</td>
      </tr>
      <tr>
        <td>Support</td>
        <td>Email</td>
        <td>Phone & Email</td>
        <td>24/7 Priority</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="note">📱 Horizontal scroll on small screens with <code>overflow-x: auto</code></p>`}
                    css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
  margin: 1.5rem 0;
}

table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark table {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

caption {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.75rem;
  color: #ec4899;
  text-align: left;
}

html.dark caption {
  color: #f472b6;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #cbd5e1;
  white-space: nowrap;
}

html.dark th,
html.dark td {
  border-color: #475569;
}

thead th {
  background: #ec4899;
  font-weight: 600;
  color: white;
}

html.dark thead th {
  background: #db2777;
}

tbody tr:hover {
  background: #fce7f3;
}

html.dark tbody tr:hover {
  background: #831843;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #831843;
  color: #fecdd3;
}

code {
  background: rgba(236, 72, 153, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                    colorTheme="pink"
                    icon={Table}
                    previewHeight="350px"
                  />
                </CardContent>
              </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Interactive Tables Playground</CardTitle>
                    <CardDescription>Experiment with all table features in a live code editor with preview and console.</CardDescription>
                </CardHeader>
                <CardContent>
                    <InteractivePlayground
                      title="Complete Tables Playground"
                      description="Explore simple tables, structured sections, styling, colspan/rowspan, and responsive design"
                      features={[
                        'Table Structure',
                        'Header & Footer',
                        'Colspan & Rowspan',
                        'Responsive Design'
                      ]}
                      buttonText="Open Tables Playground"
                      onLaunchPlayground={onOpenWebPlayground}
                      playgroundData={{
                        html: playgroundCode.html,
                        css: playgroundCode.css,
                        js: playgroundCode.js
                      }}
                      colorTheme="blue"
                    />
                </CardContent>
            </Card>
        </div>
    );
}
