'use client';

import React from 'react';
import { Code, Sparkles, Target, Layers, CheckCircle, Hash } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssPreprocessorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPreprocessors({ onOpenWebPlayground }: CssPreprocessorsProps) {
  
  return (
    <CssTopicLayout
      icon={Code}
      title="CSS Preprocessors"
      description="Write better CSS with variables, nesting, and functions"
      category="CSS Tools & Workflow"
      whatIsIt={{
        title: "What are CSS Preprocessors?",
        description: "Tools that let you write CSS with programming features, then compile it to regular CSS",
        keyPoints: [
          "Add features CSS doesn't have (yet)",
          "Write less code with variables and mixins",
          "Organize CSS better with nesting",
          "Popular ones: Sass, Less, Stylus",
          "Compile to regular CSS for browsers",
          "Make maintaining CSS easier"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Simple Explanation">
        CSS preprocessors are like adding a layer of superpowers to CSS. You write in Sass/Less/Stylus 
        (which has cool features), and it automatically converts to regular CSS that browsers understand. 
        Think of it like writing in shorthand and having it expanded to full sentences!
      </InfoAlert>

      {/* Popular Preprocessors */}
      <SectionCard
        title="Popular CSS Preprocessors"
        description="The big three"
        icon={Hash}
        variant="primary"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 border-2 border-pink-200 dark:border-pink-800 rounded-xl bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2 text-lg">Sass/SCSS</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              The most popular. Two syntaxes: Sass (no brackets) and SCSS (looks like CSS).
            </p>
            <div className="text-xs space-y-1">
              <div>✅ Variables</div>
              <div>✅ Nesting</div>
              <div>✅ Mixins</div>
              <div>✅ Functions</div>
              <div>✅ Huge community</div>
            </div>
          </div>

          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-lg">Less</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Closer to CSS syntax. Used by Bootstrap (older versions).
            </p>
            <div className="text-xs space-y-1">
              <div>✅ Variables (@)</div>
              <div>✅ Nesting</div>
              <div>✅ Mixins</div>
              <div>✅ Easy to learn</div>
              <div>✅ JavaScript-based</div>
            </div>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-lg">Stylus</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Most flexible syntax. Optional brackets and semicolons.
            </p>
            <div className="text-xs space-y-1">
              <div>✅ Flexible syntax</div>
              <div>✅ All Sass features</div>
              <div>✅ Python-like</div>
              <div>✅ Powerful</div>
              <div>⚠️ Smaller community</div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-xl border-2 border-pink-200 dark:border-pink-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            💡 <strong>Recommendation:</strong> Use <strong>Sass (SCSS syntax)</strong> - it's the most popular, 
            has the best tooling, and looks almost like regular CSS so it's easy to learn!
          </p>
        </div>
      </SectionCard>

      {/* Key Features */}
      <SectionCard
        title="Key Features (Using Sass/SCSS)"
        description="What makes preprocessors powerful"
        icon={Sparkles}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📦 Variables",
              description: "Store values and reuse them",
              example: "$primary-color: #3b82f6;"
            },
            {
              title: "🪺 Nesting",
              description: "Write CSS inside other CSS",
              example: ".card { .title { } }"
            },
            {
              title: "🔄 Mixins",
              description: "Reusable blocks of styles",
              example: "@mixin flex-center { }"
            },
            {
              title: "⚙️ Functions",
              description: "Calculate values dynamically",
              example: "darken($color, 10%)"
            }
          ]}
        />
      </SectionCard>

      {/* Variables */}
      <SectionCard
        title="Feature 1: Variables"
        description="Store and reuse values"
        icon={Target}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Sass Variables"
            code={`/* Variables in Sass - Start with $ */
$primary-color: #3b82f6;
$secondary-color: #6b7280;
$spacing-unit: 8px;
$border-radius: 8px;
$font-main: system-ui, sans-serif;

/* Use them anywhere */
.button {
  background: $primary-color;
  padding: $spacing-unit * 2; /* Math works! */
  border-radius: $border-radius;
  font-family: $font-main;
}

.card {
  border: 1px solid $secondary-color;
  padding: $spacing-unit * 3;
  border-radius: $border-radius;
}

/* COMPILES TO: */
.button {
  background: #3b82f6;
  padding: 16px;
  border-radius: 8px;
  font-family: system-ui, sans-serif;
}

.card {
  border: 1px solid #6b7280;
  padding: 24px;
  border-radius: 8px;
}`}
          />

          <InfoAlert type="tip" title="Variables vs CSS Custom Properties">
            Sass variables (<code>$var</code>) are compiled away and become fixed values. 
            CSS custom properties (<code>--var</code>) exist in the browser and can change dynamically. 
            Use Sass variables for build-time values, CSS variables for runtime values!
          </InfoAlert>
        </div>
      </SectionCard>

      {/* Nesting */}
      <SectionCard
        title="Feature 2: Nesting"
        description="Write CSS inside CSS"
        icon={Layers}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Sass Nesting"
            code={`/* Nesting in Sass */
.card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  
  /* Nested element */
  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .card-body {
    font-size: 14px;
    color: #6b7280;
  }
  
  /* Nested pseudo-class with & */
  &:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  /* Nested modifier with & */
  &--featured {
    border-color: #3b82f6;
    border-width: 2px;
  }
}

/* COMPILES TO: */
.card {
  padding: 20px;
  border: 1px solid #e5e7eb;
}

.card .card-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.card .card-body {
  font-size: 14px;
  color: #6b7280;
}

.card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card--featured {
  border-color: #3b82f6;
  border-width: 2px;
}`}
          />

          <InfoAlert type="warning" title="Don't Nest Too Deep!">
            Nesting is tempting, but don't go more than 3 levels deep. 
            <code>.nav .menu .item .link</code> is too specific and hard to override. 
            Keep it shallow for maintainable CSS!
          </InfoAlert>
        </div>
      </SectionCard>

      {/* Mixins */}
      <SectionCard
        title="Feature 3: Mixins"
        description="Reusable style blocks"
        icon={CheckCircle}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Sass Mixins"
            code={`/* Define a mixin */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Mixin with parameters */
@mixin button($bg-color, $text-color) {
  background: $bg-color;
  color: $text-color;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background: darken($bg-color, 10%);
  }
}

/* Use mixins */
.modal {
  @include flex-center;
  height: 100vh;
}

.btn-primary {
  @include button(#3b82f6, white);
}

.btn-success {
  @include button(#10b981, white);
}

/* COMPILES TO: */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-success {
  background: #10b981;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-success:hover {
  background: #059669;
}`}
          />
        </div>
      </SectionCard>

      {/* Functions */}
      <SectionCard
        title="Feature 4: Built-in Functions"
        description="Calculate and manipulate values"
        icon={Sparkles}
      >
        <SyntaxBlock
          title="Sass Functions"
          code={`/* Color functions */
$primary: #3b82f6;

.button {
  background: $primary;
}

.button:hover {
  background: darken($primary, 10%); /* Darker blue */
}

.button-light {
  background: lighten($primary, 20%); /* Lighter blue */
}

.button-transparent {
  background: rgba($primary, 0.5); /* 50% transparent */
}

/* Math functions */
$base-spacing: 8px;

.container {
  padding: $base-spacing * 2;        /* 16px */
  margin: $base-spacing * 3;         /* 24px */
}

/* String functions */
$font-path: "/fonts";

@font-face {
  src: url(#{$font-path}/main.woff);  /* Interpolation */
}

/* List functions */
$colors: red, green, blue;

.box {
  color: nth($colors, 2);  /* Gets 'green' */
}`}
        />
      </SectionCard>

      {/* Practical Example */}
      <SectionCard
        title="Practical Example: Sass in Action"
        description="See the power of preprocessors"
        icon={Code}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Sass Code (What You Write)</h4>
            <pre className="text-sm overflow-x-auto bg-purple-900 text-purple-50 p-4 rounded-lg">
{`// Variables
$primary: #3b82f6;
$spacing: 8px;

// Mixin
@mixin card-base {
  padding: $spacing * 3;
  border-radius: $spacing;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

// Nested styles
.card {
  @include card-base;
  background: white;
  
  &__title {
    font-size: 20px;
    color: darken($primary, 20%);
    margin-bottom: $spacing * 2;
  }
  
  &--featured {
    border: 2px solid $primary;
  }
}`}
            </pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Compiled CSS (What Browsers Get)</h4>
            <pre className="text-sm overflow-x-auto bg-green-900 text-green-50 p-4 rounded-lg">
{`.card {
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
}

.card__title {
  font-size: 20px;
  color: #1e40af;
  margin-bottom: 16px;
}

.card--featured {
  border: 2px solid #3b82f6;
}`}
            </pre>
          </div>
        </div>
      </SectionCard>

      {/* How to Use */}
      <SectionCard
        title="How to Use Sass/Preprocessors"
        description="Getting started"
        icon={Target}
      >
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Option 1: Build Tools (Recommended)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Modern build tools have Sass built-in:
            </p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• <strong>Vite:</strong> Just rename <code>.css</code> to <code>.scss</code></li>
              <li>• <strong>Webpack:</strong> Use <code>sass-loader</code></li>
              <li>• <strong>Next.js/Create React App:</strong> Built-in support</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Option 2: Command Line</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Install and compile manually:
            </p>
            <code className="text-sm bg-green-900 text-green-50 px-3 py-2 rounded block">
              npm install -g sass<br/>
              sass styles.scss styles.css --watch
            </code>
          </div>

          <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Option 3: VS Code Extension</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Install "Live Sass Compiler" extension - automatically compiles on save
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Pros and Cons */}
      <SectionCard
        title="Should You Use a Preprocessor?"
        description="Pros and cons"
        icon={CheckCircle}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Pros</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Variables make changes easy</li>
              <li>✓ Nesting keeps code organized</li>
              <li>✓ Mixins reduce repetition</li>
              <li>✓ Functions add powerful features</li>
              <li>✓ Easier to maintain large codebases</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-amber-200 dark:border-amber-800 rounded-xl bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ Cons</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>⚠ Needs build step/compilation</li>
              <li>⚠ Learning curve (syntax to learn)</li>
              <li>⚠ CSS now has variables natively</li>
              <li>⚠ Can over-engineer simple projects</li>
              <li>⚠ Debug compiled CSS, not source</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            💡 <strong>Modern Alternative:</strong> CSS now has custom properties (variables), nesting is coming soon, 
            and PostCSS can handle most preprocessing needs. Consider if you really need Sass, 
            or if modern CSS + PostCSS is enough!
          </p>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Preprocessors"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Large Projects"
            description="Thousands of lines of CSS to organize"
            icon={Layers}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Design Systems"
            description="Reusable components and variables"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Team Projects"
            description="Multiple developers need consistency"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Complex Themes"
            description="Multiple color schemes or brand variations"
            icon={Target}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Preprocessor Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Organize Files:</strong> Split into partials (_variables.scss, _mixins.scss, _buttons.scss)</li>
          <li><strong>Don't Over-Nest:</strong> Max 3 levels deep to keep specificity manageable</li>
          <li><strong>Use Mixins Wisely:</strong> Only for repeated patterns, not one-off styles</li>
          <li><strong>Name Variables Clearly:</strong> <code>$primary-button-color</code> not <code>$blue</code></li>
          <li><strong>Keep It Simple:</strong> Don't use every feature - use what makes your code clearer</li>
          <li><strong>Source Maps:</strong> Enable them so you can debug the original Sass, not compiled CSS</li>
        </ul>
      </InfoAlert>

    </CssTopicLayout>
  );
}
