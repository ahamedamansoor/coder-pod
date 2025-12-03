'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ListOrdered,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlOrderedListsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicOrderedListExample = {
  html: `<h3>Recipe Steps</h3>
<ol>
  <li>Gather all ingredients</li>
  <li>Preheat oven to 350°F</li>
  <li>Mix ingredients together</li>
  <li>Pour into baking pan</li>
  <li>Bake for 25 minutes</li>
</ol>`,
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

ol {
  background: white;
  border-left: 4px solid #3b82f6;
  border-radius: 8px;
  padding: 2rem 2rem 2rem 3rem;
  max-width: 500px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  ol {
    background: #1e293b;
    border-color: #60a5fa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

li {
  margin-bottom: 1rem;
  color: #475569;
  line-height: 1.6;
}

li:last-child {
  margin-bottom: 0;
}

@media (prefers-color-scheme: dark) {
  li {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const listTypeExample = {
  html: `<div class="list-types">
  <div class="type-group">
    <h4>Numbers (1, 2, 3) - Default</h4>
    <ol type="1">
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  </div>

  <div class="type-group">
    <h4>Uppercase Letters (A, B, C)</h4>
    <ol type="A">
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  </div>

  <div class="type-group">
    <h4>Lowercase Letters (a, b, c)</h4>
    <ol type="a">
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  </div>

  <div class="type-group">
    <h4>Roman Numerals (I, II, III)</h4>
    <ol type="I">
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  </div>

  <div class="type-group">
    <h4>Lowercase Roman (i, ii, iii)</h4>
    <ol type="i">
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  </div>
</div>`,
  css: `.list-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .list-types {
    background: #0f172a;
  }
}

.type-group {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  .type-group {
    background: #1e293b;
    border-color: #334155;
  }
}

.type-group h4 {
  color: #3b82f6;
  margin-top: 0;
  font-size: 0.95rem;
}

@media (prefers-color-scheme: dark) {
  .type-group h4 {
    color: #60a5fa;
  }
}

.type-group ol {
  margin: 1rem 0 0;
  padding-left: 2rem;
}

.type-group li {
  margin-bottom: 0.5rem;
  color: #475569;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .type-group li {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const startAttributeExample = {
  html: `<h3>Starting from Different Numbers</h3>

<div class="start-examples">
  <div class="example">
    <p class="label">Start from 5:</p>
    <ol start="5">
      <li>Fifth item</li>
      <li>Sixth item</li>
      <li>Seventh item</li>
    </ol>
  </div>

  <div class="example">
    <p class="label">Start from 10:</p>
    <ol start="10">
      <li>Tenth item</li>
      <li>Eleventh item</li>
      <li>Twelfth item</li>
    </ol>
  </div>

  <div class="example">
    <p class="label">Reversed (descending):</p>
    <ol reversed>
      <li>Third item</li>
      <li>Second item</li>
      <li>First item</li>
    </ol>
  </div>
</div>`,
  css: `.start-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .start-examples {
    background: #0f172a;
  }
}

.example {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
}

@media (prefers-color-scheme: dark) {
  .example {
    background: #1e293b;
    border-color: #a78bfa;
  }
}

.label {
  font-weight: bold;
  color: #8b5cf6;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .label {
    color: #c4b5fd;
  }
}

.example ol {
  margin: 0;
  padding-left: 2rem;
}

.example li {
  margin-bottom: 0.5rem;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  .example li {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const nestedListExample = {
  html: `<h3>Multi-Level Instructions</h3>
<ol>
  <li>Prepare ingredients
    <ol>
      <li>Wash vegetables</li>
      <li>Cut into pieces</li>
      <li>Set aside</li>
    </ol>
  </li>
  <li>Cook the meal
    <ol>
      <li>Heat oil in pan</li>
      <li>Add ingredients</li>
      <li>Stir frequently</li>
    </ol>
  </li>
  <li>Serve and enjoy</li>
</ol>`,
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

ol {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  ol {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

ol ol {
  margin: 0.75rem 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-left: 3px solid #ec4899;
  background: transparent;
  box-shadow: none;
}

@media (prefers-color-scheme: dark) {
  ol ol {
    border-color: #f472b6;
  }
}

li {
  margin-bottom: 1rem;
  color: #475569;
}

li:last-child {
  margin-bottom: 0;
}

@media (prefers-color-scheme: dark) {
  li {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

export default function HtmlOrderedLists({ onOpenWebPlayground }: HtmlOrderedListsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={ListOrdered}
        category="HTML · Lists"
        title="Ordered Lists"
        description="Learn to create numbered and sequential lists with HTML"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <ListOrdered className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Ordered Lists?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Lists with numbered items
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            An ordered list is used when the sequence or order of items matters. Each item is automatically numbered.
            Use the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;ol&gt;</code> element
            to create an ordered list, and wrap each item in <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;li&gt;</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                When to Use
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Step-by-step instructions</li>
                <li>✓ Recipe directions</li>
                <li>✓ Rankings or priorities</li>
                <li>✓ Sequential processes</li>
                <li>✓ Top 10 lists</li>
                <li>✓ Numbered procedures</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Syntax Example
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use ordered lists for instructions, recipes, or anything where the order matters!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Ordered List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ListOrdered className="w-7 h-7" />
            Basic Ordered List
          </CardTitle>
          <CardDescription className="text-base">
            Simple numbered list with default styling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The most basic ordered list uses the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;ol&gt;</code> tag
            and automatically numbers your items starting from 1.
          </p>

          <FrontendCodePreview
            title="Simple Recipe Instructions"
            description="Basic ordered list for step-by-step directions"
            html={basicOrderedListExample.html}
            css={basicOrderedListExample.css}
            js={basicOrderedListExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* List Type Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            List Style Types
          </CardTitle>
          <CardDescription className="text-base">
            Different numbering formats for ordered lists
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            You can change how items are numbered using the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">type</code> attribute
            on the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;ol&gt;</code> element.
          </p>

          <div className="grid gap-3">
            {[
              { type: '1', desc: 'Numbers (1, 2, 3) - Default', color: 'orange' },
              { type: 'A', desc: 'Uppercase letters (A, B, C)', color: 'emerald' },
              { type: 'a', desc: 'Lowercase letters (a, b, c)', color: 'purple' },
              { type: 'I', desc: 'Uppercase Roman numerals (I, II, III)', color: 'amber' },
              { type: 'i', desc: 'Lowercase Roman numerals (i, ii, iii)', color: 'pink' },
            ].map((item, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400',
                amber: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 border-amber-200 dark:border-amber-700 text-amber-600 dark:text-amber-400',
                pink: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20 border-pink-200 dark:border-pink-700 text-pink-600 dark:text-pink-400',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-mono font-semibold mb-1">type="{item.type}"</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                    </div>
                    <code className="text-2xl font-bold opacity-50">{item.type}</code>
                  </div>
                </div>
              );
            })}
          </div>

          <FrontendCodePreview
            title="All List Type Examples"
            description="See different numbering styles in action"
            html={listTypeExample.html}
            css={listTypeExample.css}
            js={listTypeExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Start and Reversed Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Advanced List Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Control starting number and ordering direction
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">start Attribute</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Change the starting number of your list
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700">
                <code>{`<ol start="5">\n  <li>Item 5</li>\n  <li>Item 6</li>\n</ol>`}</code>
              </pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">reversed Attribute</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Count down instead of up
              </p>
              <pre className="text-xs bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-700">
                <code>{`<ol reversed>\n  <li>Third</li>\n  <li>Second</li>\n  <li>First</li>\n</ol>`}</code>
              </pre>
            </div>
          </div>

          <FrontendCodePreview
            title="Start and Reversed Examples"
            description="Custom starting numbers and reversed ordering"
            html={startAttributeExample.html}
            css={startAttributeExample.css}
            js={startAttributeExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Nested Lists */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Nested Ordered Lists
          </CardTitle>
          <CardDescription className="text-base">
            Create multi-level lists for complex hierarchies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            You can nest lists inside list items to create sub-lists. Nested lists are useful for breaking down complex procedures
            into detailed steps.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Example HTML Structure</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<ol>
  <li>Main step
    <ol>
      <li>Sub-step 1</li>
      <li>Sub-step 2</li>
    </ol>
  </li>
  <li>Next main step</li>
</ol>`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Multi-Level Instructions"
            description="Nested lists for detailed procedures"
            html={nestedListExample.html}
            css={nestedListExample.css}
            js={nestedListExample.js}
            colorTheme="blue"
            previewHeight="450px"
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
                <li>✓ Use ordered lists for sequential items</li>
                <li>✓ Keep list items concise</li>
                <li>✓ Use consistent structure</li>
                <li>✓ Use for ranked content</li>
                <li>✓ Style with CSS for clarity</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't use for unrelated items</li>
                <li>✗ Don't nest too deeply (3+ levels)</li>
                <li>✗ Don't add extra styling to items</li>
                <li>✗ Don't use for non-sequential data</li>
                <li>✗ Don't mix with unordered lists</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Screen readers announce ordered lists as "list" with the number of items, helping users understand the structure.
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
              { title: 'Recipes', desc: 'Step-by-step cooking instructions', emoji: '🍳' },
              { title: 'Tutorials', desc: 'Sequential learning steps', emoji: '📚' },
              { title: 'Rankings', desc: 'Top 10, best to worst lists', emoji: '🏆' },
              { title: 'Procedures', desc: 'How-to guides and processes', emoji: '📋' },
              { title: 'Directions', desc: 'Navigation and driving routes', emoji: '🗺️' },
              { title: 'Priorities', desc: 'Most to least important items', emoji: '⭐' },
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

