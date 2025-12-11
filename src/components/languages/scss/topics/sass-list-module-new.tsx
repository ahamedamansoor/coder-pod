'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  List, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Plus,
  Search,
  Layers
} from 'lucide-react';

interface SassListModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassListModuleNew({ onOpenWebPlayground }: SassListModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={List}
        category="Sass/SCSS · Built-in Modules"
        title="sass:list Module"
        description="Master list operations: length, nth, append, join, index, separator, set-nth, and zip for working with collections."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<List className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:list Module"
            description="List manipulation functions"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:list</strong> module provides functions for working with lists (Sass arrays). Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:list'</code> to access functions for getting length, accessing elements, appending, joining, and more!
          </p>

          <CodeSnippetWithOutput
            title="Loading the Module"
            code={`// Load the list module
@use 'sass:list';

$colors: red, blue, green;

.element {
  // Get list length
  $count: list.length($colors);  // 3
  
  // Get first item
  color: list.nth($colors, 1);   // red
  
  // Find position
  $pos: list.index($colors, blue);  // 2
}`}
            language="scss"
            colorTheme="pink"
          />
        </CardContent>
      </Card>

      {/* Length & Access */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Length & Access"
            description="length(), nth(), index()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="list.length()"
              description="Get number of items"
              code={`@use 'sass:list';

$sizes: small, medium, large;
$colors: red, blue, green, yellow;

.element {
  // Get length
  $size-count: list.length($sizes);    // 3
  $color-count: list.length($colors);  // 4
  
  @if list.length($sizes) > 2 {
    content: 'Multiple sizes available';
  }
}`}
              output={[
                '$size-count: 3',
                '$color-count: 4'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="list.nth()"
              description="Access item by position (1-indexed!)"
              code={`@use 'sass:list';

$colors: red, blue, green, yellow;

.element {
  // Get first item (index 1)
  color: list.nth($colors, 1);   // red
  
  // Get second item
  color: list.nth($colors, 2);   // blue
  
  // Get last item (negative index)
  color: list.nth($colors, -1);  // yellow
  
  // Get second to last
  color: list.nth($colors, -2);  // green
}`}
              output={[
                'First: red',
                'Last: yellow'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="list.index()"
              description="Find position of item"
              code={`@use 'sass:list';

$colors: red, blue, green, yellow;

.element {
  // Find position of 'blue'
  $pos: list.index($colors, blue);     // 2
  
  // Find 'green'
  $pos2: list.index($colors, green);   // 3
  
  // Not found? Returns null
  $pos3: list.index($colors, purple);  // null
  
  @if list.index($colors, blue) {
    content: 'Blue is in the list!';
  }
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">1-Indexed!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Unlike JavaScript, Sass lists are 1-indexed. The first element is at position 1, not 0!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Append & Join */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Plus className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Append & Join"
            description="Add items to lists"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="list.append()"
              description="Add item to end"
              code={`@use 'sass:list';

$colors: red, blue;

// Append single item
$new-colors: list.append($colors, green);
// (red, blue, green)

// Append another
$more-colors: list.append($new-colors, yellow);
// (red, blue, green, yellow)

// Specify separator
$spaced: list.append($colors, green, space);
// red blue green

$commaed: list.append($colors, green, comma);
// red, blue, green`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="list.join()"
              description="Combine two lists"
              code={`@use 'sass:list';

$list1: red, blue;
$list2: green, yellow;

// Join lists
$combined: list.join($list1, $list2);
// (red, blue, green, yellow)

// Join with space separator
$spaced: list.join($list1, $list2, space);
// red blue green yellow

// Join with comma separator
$commaed: list.join($list1, $list2, comma);
// red, blue, green, yellow`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Set & Separator */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Set & Separator"
            description="Modify lists"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="list.set-nth()"
              description="Replace item at position"
              code={`@use 'sass:list';

$colors: red, blue, green;

// Replace second item
$new-colors: list.set-nth($colors, 2, purple);
// (red, purple, green)

// Replace first
$updated: list.set-nth($colors, 1, orange);
// (orange, blue, green)

// Replace last (negative index)
$changed: list.set-nth($colors, -1, yellow);
// (red, blue, yellow)`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="list.separator()"
              description="Get list separator type"
              code={`@use 'sass:list';

$commas: red, blue, green;
$spaces: red blue green;

// Get separator
$sep1: list.separator($commas);  // 'comma'
$sep2: list.separator($spaces);  // 'space'

// Useful for preserving format
@function add-item($list, $item) {
  $sep: list.separator($list);
  @return list.append($list, $item, $sep);
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="List Module in Action"
          description="Dynamic class generation"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="box box-small box-primary">Small Primary</div>
  <div class="box box-medium box-success">Medium Success</div>
  <div class="box box-large box-warning">Large Warning</div>
</div>`}
          css={`@use 'sass:list';

// Using list functions
// $sizes: 120px, 180px, 240px
// list.nth($sizes, 1) => 120px
// list.length($sizes) => 3
// list.index($sizes, 180px) => 2

$size-small: 120px;      // list.nth($sizes, 1)
$size-medium: 180px;     // list.nth($sizes, 2)
$size-large: 240px;      // list.nth($sizes, 3)

$color-primary: #3b82f6;   // list.nth($colors, 1)
$color-success: #10b981;   // list.nth($colors, 2)
$color-warning: #f59e0b;   // list.nth($colors, 3)

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  max-width: 800px;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 600;
  color: white;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
}

// Size classes (using list.nth($sizes, index))
.box-small {
  width: $size-small;
  height: $size-small;
}

.box-medium {
  width: $size-medium;
  height: $size-medium;
}

.box-large {
  width: $size-large;
  height: $size-large;
}

// Color classes (using list.nth($colors, index))
.box-primary {
  background: $color-primary;
}

.box-success {
  background: $color-success;
}

.box-warning {
  background: $color-warning;
}`}
          title="List-Driven Generation"
          description="Using list.nth() and list.length() for dynamic classes"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Access</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                nth(), length(), index()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Modify</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                append(), join(), set-nth()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">1-Indexed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                First item is at position 1
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Immutable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Functions return new lists
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
