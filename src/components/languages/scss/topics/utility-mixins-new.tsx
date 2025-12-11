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
  Wrench, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  Eye,
  EyeOff,
  Scissors,
  Maximize2
} from 'lucide-react';

interface UtilityMixinsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function UtilityMixinsNew({ onOpenWebPlayground }: UtilityMixinsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Wrench}
        category="Sass/SCSS · Mixins Library"
        title="Utility Mixins"
        description="Common reusable mixins: clearfix, visually-hidden, text truncation, and aspect-ratio."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wrench className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Utility Mixins"
            description="Reusable helper mixins for common patterns"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Utility mixins are <strong>reusable code snippets</strong> that solve common CSS problems. Instead of repeating the same patterns, create mixins once and use them throughout your project!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Clearfix</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Clear floated elements</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <EyeOff className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Visually Hidden</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Accessible screen-reader only</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Scissors className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Truncate</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Ellipsis overflow text</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Maximize2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300">Aspect Ratio</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Maintain proportions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clearfix Mixin */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Clearfix Mixin"
            description="Clear floated child elements"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Clearfix Implementation"
              code={`// Clearfix mixin for floated elements
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

// Usage
.container {
  @include clearfix;
  
  .sidebar {
    float: left;
    width: 30%;
  }
  
  .main {
    float: right;
    width: 70%;
  }
}`}
              output={[
                '.container::after {',
                '  content: "";',
                '  display: table;',
                '  clear: both;',
                '}',
                '.container .sidebar { float: left; width: 30%; }',
                '.container .main { float: right; width: 70%; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Modern Alternative"
              code={`// Modern clearfix (simpler)
@mixin clearfix {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

// Or use display: flow-root
@mixin modern-clearfix {
  display: flow-root;
}`}
              output={[
                '// Old approach with ::after',
                '.box::after { content: ""; display: block; clear: both; }',
                '',
                '// Modern approach',
                '.box { display: flow-root; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use clearfix when parent container needs to wrap around floated children. Modern alternative: use flexbox or grid instead of floats!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Visually Hidden */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<EyeOff className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Visually Hidden Mixin"
            description="Hide content visually but keep for screen readers"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Visually Hidden (Accessible)"
              code={`// Screen reader only content
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

// Usage for skip links
.skip-link {
  @include visually-hidden;
  
  &:focus {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    white-space: normal;
  }
}`}
              output={[
                '.skip-link {',
                '  position: absolute;',
                '  width: 1px;',
                '  height: 1px;',
                '  padding: 0;',
                '  margin: -1px;',
                '  overflow: hidden;',
                '  clip: rect(0, 0, 0, 0);',
                '  white-space: nowrap;',
                '  border-width: 0;',
                '}',
                '.skip-link:focus { /* visible when focused */ }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Real-World Example"
              code={`@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

// Icon-only button with accessible label
.icon-button {
  padding: 0.5rem;
  
  .label {
    @include visually-hidden;
  }
}

// Form labels (hidden visually, read by screen readers)
.search-form {
  label {
    @include visually-hidden;
  }
}`}
              output={[
                '.icon-button { padding: 0.5rem; }',
                '.icon-button .label {',
                '  position: absolute;',
                '  width: 1px; height: 1px;',
                '  // Screen reader only',
                '}',
                '.search-form label { /* visually hidden */ }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Never use <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">display: none</code> for content that should be read by screen readers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Truncate Text */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Scissors className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Text Truncation Mixins"
            description="Ellipsis overflow with single or multiple lines"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Single Line Truncate"
              code={`// Single line text truncation with ellipsis
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Usage
.title {
  @include truncate;
  max-width: 200px;
}

.filename {
  @include truncate;
  width: 300px;
}`}
              output={[
                '.title {',
                '  overflow: hidden;',
                '  text-overflow: ellipsis;',
                '  white-space: nowrap;',
                '  max-width: 200px;',
                '}',
                '.filename { /* same truncate styles */ width: 300px; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Multi-Line Truncate"
              code={`// Multi-line truncation with line clamp
@mixin line-clamp($lines: 3) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Usage
.description {
  @include line-clamp(2); // Show 2 lines max
}

.article-preview {
  @include line-clamp(4); // Show 4 lines max
}

.card-text {
  @include line-clamp; // Default 3 lines
}`}
              output={[
                '.description {',
                '  display: -webkit-box;',
                '  -webkit-line-clamp: 2;',
                '  -webkit-box-orient: vertical;',
                '  overflow: hidden;',
                '}',
                '.article-preview { -webkit-line-clamp: 4; }',
                '.card-text { -webkit-line-clamp: 3; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Combined Truncate Utilities"
              code={`// Single line
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Multi-line
@mixin line-clamp($lines: 3) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card {
  &-title {
    @include truncate;
  }
  
  &-description {
    @include line-clamp(3);
  }
}`}
              output={[
                '.card-title { /* single line truncate */ }',
                '.card-description { /* 3 line clamp */ }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Aspect Ratio */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Maximize2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Aspect Ratio Mixin"
            description="Maintain element proportions"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Modern Aspect Ratio"
              code={`// Modern approach using aspect-ratio property
@mixin aspect-ratio($width, $height) {
  aspect-ratio: $width / $height;
}

// Usage
.video {
  @include aspect-ratio(16, 9); // 16:9
  width: 100%;
}

.square {
  @include aspect-ratio(1, 1); // 1:1 (square)
  width: 200px;
}

.portrait {
  @include aspect-ratio(3, 4); // 3:4
}`}
              output={[
                '.video { aspect-ratio: 16 / 9; width: 100%; }',
                '.square { aspect-ratio: 1 / 1; width: 200px; }',
                '.portrait { aspect-ratio: 3 / 4; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Legacy Padding Technique"
              code={`// Old technique for older browsers
@mixin aspect-ratio-legacy($width, $height) {
  position: relative;
  
  &::before {
    content: "";
    display: block;
    padding-top: ($height / $width) * 100%;
  }
  
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.video-legacy {
  @include aspect-ratio-legacy(16, 9);
}`}
              output={[
                '.video-legacy { position: relative; }',
                '.video-legacy::before {',
                '  content: "";',
                '  display: block;',
                '  padding-top: 56.25%;',
                '}',
                '.video-legacy > * { position: absolute; ... }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Common Aspect Ratios"
              code={`@mixin aspect-ratio($width, $height) {
  aspect-ratio: $width / $height;
}

// Predefined ratios
.ratio-16-9 {
  @include aspect-ratio(16, 9); // Video
}

.ratio-4-3 {
  @include aspect-ratio(4, 3); // Old TV
}

.ratio-1-1 {
  @include aspect-ratio(1, 1); // Square
}

.ratio-21-9 {
  @include aspect-ratio(21, 9); // Ultrawide
}`}
              output={[
                '.ratio-16-9 { aspect-ratio: 16 / 9; }',
                '.ratio-4-3 { aspect-ratio: 4 / 3; }',
                '.ratio-1-1 { aspect-ratio: 1 / 1; }',
                '.ratio-21-9 { aspect-ratio: 21 / 9; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* All Utilities Together */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wrench className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Complete Utilities Library"
            description="All mixins in one place"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="utilities.scss"
              code={`// ===== Clearfix =====
@mixin clearfix {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

// ===== Visually Hidden =====
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

// ===== Text Truncation =====
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin line-clamp($lines: 3) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// ===== Aspect Ratio =====
@mixin aspect-ratio($width, $height) {
  aspect-ratio: $width / $height;
}`}
              output={[
                '// All utility mixins ready to use!',
                '// Import: @use "utilities" as *;',
                '',
                '.container { @include clearfix; }',
                '.sr-only { @include visually-hidden; }',
                '.title { @include truncate; }',
                '.description { @include line-clamp(3); }',
                '.video { @include aspect-ratio(16, 9); }'
              ]}
              language="scss"
              colorTheme="pink"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Utility Mixins Demo"
          description="See all utilities in action"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="demo">
  <h1>Utility Mixins Demo</h1>
  
  <div class="grid">
    <div class="card">
      <h3>Text Truncation</h3>
      <p class="truncate-single">This is a very long title that will be truncated with an ellipsis at the end when it overflows</p>
      <p class="truncate-multi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    </div>
    
    <div class="card">
      <h3>Aspect Ratio</h3>
      <div class="aspect-box">
        16:9 Video
      </div>
    </div>
    
    <div class="card">
      <h3>Accessible</h3>
      <button class="icon-btn">
        <span class="sr-only">Search</span>
        🔍
      </button>
      <p>Icon button with screen-reader label</p>
    </div>
  </div>
</div>`}
          css={`// SCSS Utility Mixins
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin line-clamp($lines: 3) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@mixin aspect-ratio($width, $height) {
  aspect-ratio: $width / $height;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
}

.demo {
  max-width: 1000px;
  margin: 0 auto;
  
  h1 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  h3 {
    color: #667eea;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1rem;
  }
}

.truncate-single {
  @include truncate;
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 500;
}

.truncate-multi {
  @include line-clamp(2);
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 8px;
  line-height: 1.6;
}

.aspect-box {
  @include aspect-ratio(16, 9);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.5rem;
}

.icon-btn {
  background: #667eea;
  border: none;
  color: white;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
}

.sr-only {
  @include visually-hidden;
}

@media (prefers-color-scheme: dark) {
  .card {
    background: #1e293b;
    
    h3 {
      color: #8b9aef;
    }
    
    p {
      color: #94a3b8;
    }
  }
  
  .truncate-single,
  .truncate-multi {
    background: #334155;
    color: #cbd5e1;
  }
}`}
          title="Utility Mixins Gallery"
          description="All utility mixins in action"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Clearfix</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clear floated children with ::after
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Visually Hidden</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Accessible screen-reader content
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Truncate</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Single or multi-line ellipsis
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Aspect Ratio</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Maintain proportions (16:9, 1:1, etc.)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
