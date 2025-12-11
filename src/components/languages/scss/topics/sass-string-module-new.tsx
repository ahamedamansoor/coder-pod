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
  Type, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  AlignLeft,
  Hash,
  Quote
} from 'lucide-react';

interface SassStringModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassStringModuleNew({ onOpenWebPlayground }: SassStringModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Type}
        category="Sass/SCSS · Built-in Modules"
        title="sass:string Module"
        description="Master string manipulation: quote, unquote, to-upper-case, to-lower-case, length, slice, index, and insert for text processing."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:string Module"
            description="String manipulation functions"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:string</strong> module provides functions for manipulating strings. Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:string'</code> to access functions for quotes, case conversion, slicing, searching, and more!
          </p>

          <CodeSnippetWithOutput
            title="Loading the Module"
            code={`// Load the string module
@use 'sass:string';

.element {
  // Use string functions
  content: string.quote(Hello);              // "Hello"
  content: string.to-upper-case('hello');    // "HELLO"
  content: string.slice('Hello World', 1, 5); // "Hello"
}`}
            language="scss"
            colorTheme="pink"
          />
        </CardContent>
      </Card>

      {/* Quote & Unquote */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Quote & Unquote"
            description="Add or remove quotes"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="string.quote()"
              description="Add quotes to a string"
              code={`@use 'sass:string';

.element {
  // Add quotes
  content: string.quote(hello);         // "hello"
  content: string.quote(hello world);   // "hello world"
  
  // Already quoted? No change
  content: string.quote("already");     // "already"
  
  // Font family example
  $font: Arial;
  font-family: string.quote($font);     // "Arial"
}`}
              output={[
                'content: "hello";',
                'content: "hello world";',
                'font-family: "Arial";'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="string.unquote()"
              description="Remove quotes from a string"
              code={`@use 'sass:string';

.element {
  // Remove quotes
  content: string.unquote("hello");      // hello
  content: string.unquote('world');      // world
  
  // Not quoted? No change
  content: string.unquote(test);         // test
  
  // Useful for property values
  $value: "10px solid blue";
  border: string.unquote($value);        // 10px solid blue
}`}
              output={[
                'content: hello;',
                'border: 10px solid blue;'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Case Conversion */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlignLeft className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Case Conversion"
            description="to-upper-case, to-lower-case"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="string.to-upper-case()"
              code={`@use 'sass:string';

.element {
  // Convert to uppercase
  content: string.to-upper-case('hello');      // "HELLO"
  content: string.to-upper-case('World');      // "WORLD"
  content: string.to-upper-case('CSS Rules'); // "CSS RULES"
  
  // Class generation
  $name: 'button';
  .#{string.to-upper-case($name)} {
    // .BUTTON { }
  }
}`}
              output={[
                'content: "HELLO";',
                'content: "WORLD";',
                'content: "CSS RULES";'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="string.to-lower-case()"
              code={`@use 'sass:string';

.element {
  // Convert to lowercase
  content: string.to-lower-case('HELLO');      // "hello"
  content: string.to-lower-case('World');      // "world"
  content: string.to-lower-case('CSS-RULES'); // "css-rules"
  
  // Normalize names
  $className: 'PRIMARY-BUTTON';
  .#{string.to-lower-case($className)} {
    // .primary-button { }
  }
}`}
              output={[
                'content: "hello";',
                'content: "world";',
                'content: "css-rules";'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Length & Slice */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Length & Slice"
            description="Measure and extract strings"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="string.length()"
              description="Get string length"
              code={`@use 'sass:string';

$text: 'Hello';
$len: string.length($text);  // 5

.element {
  content: '#{$len} characters';
  
  // Conditional based on length
  @if string.length($text) > 3 {
    font-size: 16px;
  }
}`}
              output={[
                'content: "5 characters";',
                'font-size: 16px;'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="string.slice()"
              description="Extract substring"
              code={`@use 'sass:string';

$text: 'Hello World';

.element {
  // Slice from position 1 to 5
  content: string.slice($text, 1, 5);      // "Hello"
  
  // From position 7 to end
  content: string.slice($text, 7);         // "World"
  
  // Negative index (from end)
  content: string.slice($text, -5);        // "World"
  
  // First 3 characters
  content: string.slice($text, 1, 3);      // "Hel"
}`}
              output={[
                'content: "Hello";',
                'content: "World";',
                'content: "Hel";'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">1-Indexed!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Sass strings are 1-indexed (not 0-indexed like JavaScript). First character is at position 1!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Index & Insert */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Search & Insert"
            description="index, insert"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="string.index()"
              description="Find position of substring"
              code={`@use 'sass:string';

$text: 'Hello World';

.element {
  // Find position of 'World'
  $pos: string.index($text, 'World');  // 7
  
  // Find 'o'
  $pos2: string.index($text, 'o');     // 5 (first occurrence)
  
  // Not found? Returns null
  $pos3: string.index($text, 'xyz');   // null
  
  @if string.index($text, 'Hello') {
    content: 'Found Hello!';
  }
}`}
              output={[
                '$pos: 7',
                '$pos2: 5',
                'content: "Found Hello!";'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="string.insert()"
              description="Insert string at position"
              code={`@use 'sass:string';

$text: 'Hello World';

.element {
  // Insert at position 6
  content: string.insert($text, 'Beautiful ', 7);
  // "Hello Beautiful World"
  
  // Insert at beginning
  content: string.insert($text, 'Hey! ', 1);
  // "Hey! Hello World"
  
  // Insert at end
  content: string.insert($text, '!', string.length($text) + 1);
  // "Hello World!"
}`}
              output={[
                'content: "Hello Beautiful World";',
                'content: "Hey! Hello World";',
                'content: "Hello World!";'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="String Module in Action"
          description="Dynamic text generation"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card card-primary">
    <span class="badge">PRIMARY</span>
    Primary Card
  </div>
  <div class="card card-success">
    <span class="badge">SUCCESS</span>
    Success Card
  </div>
  <div class="card card-warning">
    <span class="badge">WARNING</span>
    Warning Card
  </div>
</div>`}
          css={`@use 'sass:string';

// Using string functions
// string.to-upper-case('primary') => 'PRIMARY'
// string.length('success') => 7
// string.slice('warning', 1, 4) => 'warn'

$variants: 'primary', 'success', 'warning';
$colors: #3b82f6, #10b981, #f59e0b;

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
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
}

.card {
  padding: 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
}

.badge {
  display: block;
  font-size: 0.75rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}

// Generate card variants using string functions
@for $i from 1 through 3 {
  $variant: nth($variants, $i);
  $color: nth($colors, $i);
  
  .card-#{$variant} {
    background: $color;
    color: white;
  }
}`}
          title="String Functions Demo"
          description="Using string.to-upper-case() and dynamic generation"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Quotes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                quote(), unquote()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Case</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                to-upper-case(), to-lower-case()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Extract</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                slice(), length()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Search</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                index(), insert()
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
