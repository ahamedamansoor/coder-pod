import React, { useState } from 'react';
import { Copy, CheckCircle, Code, Zap, TrendingUp, AlertTriangle, CheckCheck, FileCode, Gauge, X } from 'lucide-react';
import { PageHeader } from './page-header';

export default function SassPerformance() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedExample, setSelectedExample] = useState(0);
  const [showOutput, setShowOutput] = useState<{ [key: number]: boolean }>({});

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleOutput = (index: number) => {
    setShowOutput(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const examples = [
    {
      title: "Efficient Selector Nesting",
      bad: `// ❌ Bad: Deep nesting (poor performance)
.header {
  .nav {
    .menu {
      .item {
        .link {
          .icon {
            color: blue;
          }
        }
      }
    }
  }
}`,
      good: `// ✅ Good: Shallow nesting (better performance)
.header-nav-menu-item-link-icon {
  color: blue;
}

// Or use BEM methodology
.header {
  &__nav-icon {
    color: blue;
  }
}`,
      badOutput: `.header .nav .menu .item .link .icon {
  color: blue;
}`,
      goodOutput: `.header-nav-menu-item-link-icon {
  color: blue;
}
.header__nav-icon {
  color: blue;
}`,
      explanation: "Avoid deep nesting (>3 levels). It creates overly specific selectors that are slower to match and harder to override."
    },
    {
      title: "Use @use Instead of @import",
      bad: `// ❌ Bad: @import creates duplicates
// main.scss
@import 'variables';
@import 'mixins';
@import 'buttons';
@import 'forms';

// Each file that imports creates its own copy`,
      good: `// ✅ Good: @use with namespaces (loads once)
@use 'variables' as vars;
@use 'mixins' as mx;
@use 'buttons';
@use 'forms';

// Modules are loaded only once
$primary: vars.$primary-color;`,
      badOutput: `/* variables.css - duplicated 4 times */
/* mixins.css - duplicated 4 times */
/* buttons.css */
/* forms.css */
/* Result: Bloated CSS file */`,
      goodOutput: `/* variables.css - loaded once */
/* mixins.css - loaded once */
/* buttons.css */
/* forms.css */
/* Result: Optimized CSS file */`,
      explanation: "@use loads files once and provides namespace isolation. @import duplicates code, increasing file size."
    },
    {
      title: "Optimize Mixin Usage",
      bad: `// ❌ Bad: Mixin for simple properties
@mixin text-color($color) {
  color: $color;
}

.title { @include text-color(blue); }
.subtitle { @include text-color(gray); }
.text { @include text-color(black); }`,
      good: `// ✅ Good: Direct properties for simple cases
$text-colors: (
  'title': blue,
  'subtitle': gray,
  'text': black
);

@each $name, $color in $text-colors {
  .#{$name} { color: $color; }
}

// Use mixins for complex patterns
@mixin button-variant($bg, $hover) {
  background: $bg;
  border: 1px solid darken($bg, 10%);
  &:hover { background: $hover; }
}`,
      badOutput: `.title {
  color: blue;
}
.subtitle {
  color: gray;
}
.text {
  color: black;
}`,
      goodOutput: `.title {
  color: blue;
}
.subtitle {
  color: gray;
}
.text {
  color: black;
}`,
      explanation: "Use mixins for complex patterns with multiple properties, not for simple single-property declarations."
    },
    {
      title: "Efficient Variable Scoping",
      bad: `// ❌ Bad: Global variables everywhere
$color: blue;
$size: 16px;
$spacing: 20px;

.component {
  color: $color;
  font-size: $size;
  padding: $spacing;
}`,
      good: `// ✅ Good: Organized with maps
$theme: (
  'colors': (
    'primary': blue,
    'secondary': gray
  ),
  'typography': (
    'base': 16px,
    'large': 20px
  ),
  'spacing': (
    'sm': 10px,
    'md': 20px,
    'lg': 30px
  )
);

@use 'sass:map';

.component {
  color: map.get($theme, 'colors', 'primary');
  font-size: map.get($theme, 'typography', 'base');
  padding: map.get($theme, 'spacing', 'md');
}`,
      badOutput: `.component {
  color: blue;
  font-size: 16px;
  padding: 20px;
}`,
      goodOutput: `.component {
  color: blue;
  font-size: 16px;
  padding: 20px;
}`,
      explanation: "Organize variables in maps for better maintainability and reduced global scope pollution."
    },
    {
      title: "Avoid Expensive Operations",
      bad: `// ❌ Bad: Complex calculations in loops
@for $i from 1 through 100 {
  .width-#{$i} {
    width: percentage($i / 100);
    padding: $i * 2px + 5px;
    margin: calc(#{$i}px * 2);
  }
}`,
      good: `// ✅ Good: Pre-calculate and use strategic breakpoints
$widths: (25, 50, 75, 100);

@each $width in $widths {
  .w-#{$width} {
    width: #{$width * 1%};
  }
}

// Or use CSS custom properties for runtime
.dynamic {
  --multiplier: 1;
  width: calc(var(--multiplier) * 100px);
}`,
      badOutput: `/* Generates 100 classes with complex calculations */
.width-1 { width: 1%; padding: 7px; margin: calc(1px * 2); }
.width-2 { width: 2%; padding: 9px; margin: calc(2px * 2); }
/* ... 98 more classes ... */`,
      goodOutput: `.w-25 { width: 25%; }
.w-50 { width: 50%; }
.w-75 { width: 75%; }
.w-100 { width: 100%; }
.dynamic {
  --multiplier: 1;
  width: calc(var(--multiplier) * 100px);
}`,
      explanation: "Minimize compile-time calculations. Use strategic utility classes or CSS custom properties for dynamic values."
    },
    {
      title: "Conditional Compilation",
      bad: `// ❌ Bad: Including unused code
.component {
  // Desktop styles
  @media (min-width: 1024px) {
    width: 1200px;
    padding: 40px;
  }
  
  // Tablet styles  
  @media (min-width: 768px) {
    width: 768px;
    padding: 30px;
  }
  
  // Mobile styles
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
}`,
      good: `// ✅ Good: Use configuration flags
$target-platform: 'mobile'; // or 'tablet', 'desktop'

.component {
  @if $target-platform == 'mobile' {
    width: 100%;
    padding: 20px;
  } @else if $target-platform == 'tablet' {
    width: 768px;
    padding: 30px;
  } @else {
    width: 1200px;
    padding: 40px;
  }
}

// Compile different bundles for different platforms`,
      badOutput: `.component {
  /* All media queries included */
}
@media (min-width: 1024px) {
  .component { width: 1200px; padding: 40px; }
}
@media (min-width: 768px) {
  .component { width: 768px; padding: 30px; }
}
@media (max-width: 767px) {
  .component { width: 100%; padding: 20px; }
}`,
      goodOutput: `/* Mobile bundle */
.component {
  width: 100%;
  padding: 20px;
}

/* Or tablet/desktop bundles separately */`,
      explanation: "Use conditional compilation to create platform-specific bundles, reducing unused CSS in production."
    }
  ];

  const performanceMetrics = [
    { label: "Selector Depth", good: "≤ 3 levels", bad: "> 4 levels", impact: "High" },
    { label: "File Size", good: "< 50KB", bad: "> 200KB", impact: "Critical" },
    { label: "Compile Time", good: "< 1s", bad: "> 5s", impact: "Medium" },
    { label: "Module Imports", good: "@use", bad: "@import", impact: "High" },
    { label: "CSS Output", good: "Minified", bad: "Expanded", impact: "Critical" }
  ];

  const bestPractices = [
    { icon: CheckCheck, title: "Limit Nesting", desc: "Keep nesting to 3 levels max" },
    { icon: Zap, title: "Use @use", desc: "Prefer @use over @import for modules" },
    { icon: FileCode, title: "Organize Code", desc: "Split into focused, small files" },
    { icon: TrendingUp, title: "Profile Builds", desc: "Monitor compilation time" },
    { icon: Gauge, title: "Minify Output", desc: "Use compressed output style" },
    { icon: Code, title: "Avoid Calculations", desc: "Pre-calculate complex values" }
  ];

  return (
    <div className="w-full space-y-8 min-h-screen pb-16">
      <PageHeader
        icon={Gauge}
        category="SCSS Performance & Optimization"
        title="Write Faster, Leaner SCSS"
        description="Master performance optimization techniques to create efficient, maintainable, and blazing-fast stylesheets"
        colorTheme="orange"
      />

      {/* Performance Metrics Table */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-orange-600" />
          Performance Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-orange-200 dark:border-orange-800">
                <th className="text-left py-3 px-4 font-semibold">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-green-700 dark:text-green-400">✓ Good</th>
                <th className="text-left py-3 px-4 font-semibold text-red-700 dark:text-red-400">✗ Bad</th>
                <th className="text-left py-3 px-4 font-semibold">Impact</th>
              </tr>
            </thead>
            <tbody>
              {performanceMetrics.map((metric, index) => (
                <tr key={index} className="border-b border-orange-100 dark:border-orange-900/50 hover:bg-orange-100/50 dark:hover:bg-orange-900/20">
                  <td className="py-3 px-4 font-medium">{metric.label}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                      <CheckCircle className="h-3 w-3" />
                      {metric.good}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                      <X className="h-3 w-3" />
                      {metric.bad}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      metric.impact === 'Critical' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' :
                      metric.impact === 'High' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' :
                      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                    }`}>
                      {metric.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {bestPractices.map((practice, index) => (
          <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-card to-orange-50 dark:to-orange-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
            <practice.icon className="h-10 w-10 text-orange-600 dark:text-orange-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">{practice.title}</h3>
            <p className="text-sm text-muted-foreground">{practice.desc}</p>
          </div>
        ))}
      </div>

      {/* Interactive Examples */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Code className="h-8 w-8 text-orange-600" />
          Performance Optimization Examples
        </h2>

        {/* Example Selector */}
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setSelectedExample(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === index
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Selected Example */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">{examples[selectedExample].title}</h3>
              <p className="text-muted-foreground">{examples[selectedExample].explanation}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bad Example */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-700 dark:text-red-400">❌ Inefficient Approach</span>
              </div>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(examples[selectedExample].bad, selectedExample * 2)}
                  className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors z-10"
                  title="Copy code"
                >
                  {copiedIndex === selectedExample * 2 ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 border-2 border-red-300 dark:border-red-800">
                  <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                    {examples[selectedExample].bad}
                  </pre>
                </div>
              </div>
              
              <button
                onClick={() => toggleOutput(selectedExample * 2)}
                className="w-full px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors font-medium"
              >
                {showOutput[selectedExample * 2] ? 'Hide' : 'Show'} Generated CSS
              </button>

              {showOutput[selectedExample * 2] && (
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <pre className="text-red-600 dark:text-red-400 font-mono text-sm whitespace-pre-wrap">
                    {examples[selectedExample].badOutput}
                  </pre>
                </div>
              )}
            </div>

            {/* Good Example */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-700 dark:text-green-400">✅ Optimized Approach</span>
              </div>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(examples[selectedExample].good, selectedExample * 2 + 1)}
                  className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors z-10"
                  title="Copy code"
                >
                  {copiedIndex === selectedExample * 2 + 1 ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 border-2 border-green-300 dark:border-green-800">
                  <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                    {examples[selectedExample].good}
                  </pre>
                </div>
              </div>

              <button
                onClick={() => toggleOutput(selectedExample * 2 + 1)}
                className="w-full px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors font-medium"
              >
                {showOutput[selectedExample * 2 + 1] ? 'Hide' : 'Show'} Generated CSS
              </button>

              {showOutput[selectedExample * 2 + 1] && (
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                    {examples[selectedExample].goodOutput}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gradient-to-br from-card to-orange-50 dark:to-orange-950/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
        <h2 className="text-2xl font-bold mb-6">⚡ Quick Reference: Performance Checklist</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">✅ Do This</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">@use</code> for module imports</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Limit nesting to 3 levels maximum</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Use maps for organizing related variables</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Compile with compressed output style</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pre-calculate complex math operations</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Use mixins for complex, reusable patterns</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">❌ Avoid This</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Using <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded">@import</code> (creates duplicates)</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Deep nesting beyond 3-4 levels</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Mixins for single-property declarations</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Complex calculations inside loops</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Generating hundreds of utility classes</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Including all media queries in every bundle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
