'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  List,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlUnorderedListsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicUnorderedListExample = {
  html: `<h3>Shopping List</h3>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Cheese</li>
  <li>Eggs</li>
  <li>Butter</li>
</ul>`,
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

ul {
  background: white;
  border-left: 4px solid #06b6d4;
  border-radius: 8px;
  padding: 2rem 2rem 2rem 3rem;
  max-width: 500px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  ul {
    background: #1e293b;
    border-color: #22d3ee;
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

const listStyleTypeExample = {
  html: `<div class="list-styles">
  <div class="style-group">
    <h4>Disc (default) ●</h4>
    <ul style="list-style-type: disc;">
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ul>
  </div>

  <div class="style-group">
    <h4>Circle ○</h4>
    <ul style="list-style-type: circle;">
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ul>
  </div>

  <div class="style-group">
    <h4>Square ■</h4>
    <ul style="list-style-type: square;">
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ul>
  </div>

  <div class="style-group">
    <h4>None (no bullet)</h4>
    <ul style="list-style-type: none;">
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ul>
  </div>
</div>`,
  css: `.list-styles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .list-styles {
    background: #0f172a;
  }
}

.style-group {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  .style-group {
    background: #1e293b;
    border-color: #334155;
  }
}

.style-group h4 {
  color: #06b6d4;
  margin-top: 0;
  font-size: 0.95rem;
}

@media (prefers-color-scheme: dark) {
  .style-group h4 {
    color: #22d3ee;
  }
}

.style-group ul {
  margin: 1rem 0 0;
  padding-left: 1.5rem;
  list-style-position: inside;
}

.style-group li {
  margin-bottom: 0.5rem;
  color: #475569;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .style-group li {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const customBulletExample = {
  html: `<div class="custom-bullets">
  <div class="bullet-group">
    <h4>Emoji Bullets</h4>
    <ul class="emoji-bullets">
      <li>Frontend Development</li>
      <li>Backend Development</li>
      <li>Database Design</li>
    </ul>
  </div>

  <div class="bullet-group">
    <h4>Color Coded</h4>
    <ul class="color-bullets">
      <li class="primary">Primary feature</li>
      <li class="secondary">Secondary feature</li>
      <li class="tertiary">Tertiary feature</li>
    </ul>
  </div>

  <div class="bullet-group">
    <h4>Checkmark Style</h4>
    <ul class="checkmark-bullets">
      <li>Feature one</li>
      <li>Feature two</li>
      <li>Feature three</li>
    </ul>
  </div>
</div>`,
  css: `.custom-bullets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .custom-bullets {
    background: #0f172a;
  }
}

.bullet-group {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  .bullet-group {
    background: #1e293b;
    border-color: #334155;
  }
}

.bullet-group h4 {
  margin-top: 0;
  color: #6366f1;
}

@media (prefers-color-scheme: dark) {
  .bullet-group h4 {
    color: #a5b4fc;
  }
}

.bullet-group ul {
  margin: 1rem 0 0;
  padding-left: 1.5rem;
  list-style: none;
}

.emoji-bullets li::before {
  content: "🚀 ";
  margin-right: 0.5rem;
}

.color-bullets li {
  margin-bottom: 0.75rem;
}

.color-bullets li::before {
  content: "● ";
  margin-right: 0.5rem;
}

.primary::before {
  color: #3b82f6;
}

.secondary::before {
  color: #8b5cf6;
}

.tertiary::before {
  color: #ec4899;
}

.checkmark-bullets li::before {
  content: "✓ ";
  margin-right: 0.5rem;
  color: #10b981;
  font-weight: bold;
}

.bullet-group li {
  margin-bottom: 0.75rem;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  .bullet-group li {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const nestedUnorderedListExample = {
  html: `<h3>Web Development Skills</h3>
<ul>
  <li>Frontend
    <ul>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>React/Vue</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Databases</li>
      <li>APIs</li>
    </ul>
  </li>
  <li>Tools & Practices
    <ul>
      <li>Version Control</li>
      <li>Testing</li>
      <li>Deployment</li>
    </ul>
  </li>
</ul>`,
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

ul {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  ul {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

ul ul {
  margin: 0.75rem 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  border-left: 3px solid #06b6d4;
  background: transparent;
  box-shadow: none;
}

@media (prefers-color-scheme: dark) {
  ul ul {
    border-color: #22d3ee;
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

export default function HtmlUnorderedLists({ onOpenWebPlayground }: HtmlUnorderedListsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={List}
        category="HTML · Lists"
        title="Unordered Lists"
        description="Learn to create bulleted lists with HTML"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <List className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Unordered Lists?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Lists with bullet points
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            An unordered list is used when the order of items doesn't matter. Each item is displayed with a bullet point.
            Use the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;ul&gt;</code> element
            to create an unordered list, and wrap each item in <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;li&gt;</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                When to Use
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Shopping lists</li>
                <li>✓ Feature lists</li>
                <li>✓ Item collections</li>
                <li>✓ Bullet points</li>
                <li>✓ Benefits or highlights</li>
                <li>✓ Tag collections</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Syntax Example
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use unordered lists for any collection of items where the order doesn't matter!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Unordered List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <List className="w-7 h-7" />
            Basic Unordered List
          </CardTitle>
          <CardDescription className="text-base">
            Simple bulleted list with default styling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The most basic unordered list uses the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;ul&gt;</code> tag
            and displays items with bullet points.
          </p>

          <FrontendCodePreview
            title="Simple Shopping List"
            description="Basic unordered list with bullet points"
            html={basicUnorderedListExample.html}
            css={basicUnorderedListExample.css}
            js={basicUnorderedListExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* List Style Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Bullet Style Types
          </CardTitle>
          <CardDescription className="text-base">
            Different bullet styles for unordered lists
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            You can change the bullet style using the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">list-style-type</code> CSS property
            on the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;ul&gt;</code> element.
          </p>

          <div className="grid gap-3">
            {[
              { type: 'disc', desc: 'Solid circle (●) - Default', symbol: '●', color: 'orange' },
              { type: 'circle', desc: 'Hollow circle (○)', symbol: '○', color: 'emerald' },
              { type: 'square', desc: 'Square (■)', symbol: '■', color: 'purple' },
              { type: 'none', desc: 'No bullet (custom styling)', symbol: '—', color: 'amber' },
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
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-mono font-semibold mb-1">{item.type}</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                    </div>
                    <span className="text-3xl opacity-50">{item.symbol}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <FrontendCodePreview
            title="All Bullet Style Examples"
            description="See different bullet styles in action"
            html={listStyleTypeExample.html}
            css={listStyleTypeExample.css}
            js={listStyleTypeExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Custom Bullets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Custom Bullet Styles
          </CardTitle>
          <CardDescription className="text-base">
            Create unique bullets with CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            You can create custom bullets using CSS <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">::before</code> pseudo-elements
            to add emojis, icons, or custom symbols.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">CSS Example</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`ul {
  list-style: none;
  padding-left: 0;
}

li::before {
  content: "🚀 ";
  margin-right: 0.5rem;
}`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Custom Bullet Examples"
            description="Emoji, color-coded, and checkmark bullets"
            html={customBulletExample.html}
            css={customBulletExample.css}
            js={customBulletExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Nested Lists */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Nested Unordered Lists
          </CardTitle>
          <CardDescription className="text-base">
            Create multi-level lists for categorized information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            You can nest lists inside list items to create sub-lists. This is useful for organizing information into categories.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Example HTML Structure</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<ul>
  <li>Category
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </li>
  <li>Another category</li>
</ul>`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Nested Skills List"
            description="Multi-level categorized list"
            html={nestedUnorderedListExample.html}
            css={nestedUnorderedListExample.css}
            js={nestedUnorderedListExample.js}
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
                <li>✓ Use for unrelated items</li>
                <li>✓ Keep items concise</li>
                <li>✓ Use consistent formatting</li>
                <li>✓ Customize bullets appropriately</li>
                <li>✓ Maintain semantic HTML</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't use for sequential items</li>
                <li>✗ Don't nest too deeply (3+ levels)</li>
                <li>✗ Don't use for layout</li>
                <li>✗ Don't forget opening tags</li>
                <li>✗ Don't mix with divs</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Screen readers announce unordered lists as "list" with the number of items, helping users understand the structure.
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
              { title: 'Shopping', desc: 'Grocery and todo lists', emoji: '🛒' },
              { title: 'Features', desc: 'Product capabilities', emoji: '⭐' },
              { title: 'Navigation', desc: 'Menu items and links', emoji: '🔗' },
              { title: 'Benefits', desc: 'Advantages and highlights', emoji: '✨' },
              { title: 'Tags', desc: 'Categories and labels', emoji: '🏷️' },
              { title: 'Content', desc: 'Articles and resources', emoji: '📚' },
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

