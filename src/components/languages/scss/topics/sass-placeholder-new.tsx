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
  Ghost, 
  Eye,
  EyeOff,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  FileX,
  Zap
} from 'lucide-react';

interface SassPlaceholderNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassPlaceholderNew({ onOpenWebPlayground }: SassPlaceholderNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Ghost}
        category="Sass/SCSS · Reusability"
        title="Placeholder Selectors (%)"
        description="Learn about silent selectors that don't compile to CSS until extended. Reduce bloat and create cleaner, more efficient stylesheets."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Ghost className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Placeholder Selectors?"
            description="Silent CSS that only appears when used"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Placeholder selectors</strong> (starting with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">%</code>) are like regular selectors, but they're <strong>invisible</strong> in the compiled CSS until you extend them. They're perfect for creating base styles that you only want to include when actually used!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Regular Classes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Always in CSS, even if unused
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">.button-base {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-1">// Always compiled</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-1">Visible</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Ghost className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Placeholders</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Only in CSS when extended
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">%button-base {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-1">// Only if extended</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Silent!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <EyeOff className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Silent Selectors!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Placeholders won't appear in your CSS at all unless you <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@extend</code> them!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Placeholders */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Creating Placeholders"
            description="Use % instead of . or #"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Define placeholder selectors with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">%name</code> and extend them with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@extend</code>.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Define and Extend Placeholder"
              description="Silent until extended"
              code={`// Define placeholder (won't be in CSS)
%button-base {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

// Extend it in classes
.btn-primary {
  @extend %button-base;
  background: #3b82f6;
  color: white;
}

.btn-success {
  @extend %button-base;
  background: #10b981;
  color: white;
}`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              description="Placeholder becomes a shared selector"
              code={`/* Efficient grouped selector */
.btn-primary, .btn-success {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-success {
  background: #10b981;
  color: white;
}`}
              output={[
                '✓ No %button-base in CSS',
                '✓ Shared styles grouped efficiently'
              ]}
              language="css"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* vs Regular Classes */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileX className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Placeholders vs Classes"
            description="Reduce unused CSS"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Regular classes always compile to CSS, even if unused. Placeholders only compile when extended.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-red-700 dark:text-red-300">Regular Class (Always Compiled)</h5>
                <CodeSnippetWithOutput
                  title="SCSS"
                  code={`.button-base {
  padding: 1rem;
  border: none;
}

// Even if never used!`}
                  language="scss"
                  colorTheme="red"
                />
                <CodeSnippetWithOutput
                  title="CSS"
                  code={`.button-base {
  padding: 1rem;
  border: none;
}

/* In CSS even if unused */`}
                  language="css"
                  colorTheme="red"
                />
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-green-700 dark:text-green-300">Placeholder (Only When Extended)</h5>
                <CodeSnippetWithOutput
                  title="SCSS"
                  code={`%button-base {
  padding: 1rem;
  border: none;
}

// Not extended = not in CSS`}
                  language="scss"
                  colorTheme="green"
                />
                <CodeSnippetWithOutput
                  title="CSS"
                  code={`/* Nothing! */

/* Not in CSS unless extended */`}
                  language="css"
                  colorTheme="green"
                />
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Smaller CSS Files!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Placeholders reduce file size by only including styles that are actually used!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Placeholders in Action"
          description="See efficient style sharing"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <button class="btn-primary">Primary</button>
  <button class="btn-success">Success</button>
  <button class="btn-danger">Danger</button>
  
  <div class="card card-info">
    <h3>Info Card</h3>
    <p>Using placeholder styles</p>
  </div>
  
  <div class="card card-warning">
    <h3>Warning Card</h3>
    <p>Shared base styles</p>
  </div>
</div>`}
          css={`// Placeholder for button base
%button-base {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.875rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: scale(0.98);
  }
}

// Placeholder for card base
%card-base {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
  
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }
  
  p {
    margin: 0;
    opacity: 0.9;
  }
}

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  padding: 2rem;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

// Extend button placeholder
.btn-primary {
  @extend %button-base;
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
  }
}

.btn-success {
  @extend %button-base;
  background: #10b981;
  color: white;
  
  &:hover {
    background: #059669;
  }
}

.btn-danger {
  @extend %button-base;
  background: #ef4444;
  color: white;
  
  &:hover {
    background: #dc2626;
  }
}

// Extend card placeholder
.card-info {
  @extend %card-base;
  background: #dbeafe;
  color: #1e40af;
  border-left: 4px solid #3b82f6;
  
  @media (prefers-color-scheme: dark) {
    background: #1e3a8a;
    color: #bfdbfe;
  }
}

.card-warning {
  @extend %card-base;
  background: #fef3c7;
  color: #92400e;
  border-left: 4px solid #f59e0b;
  
  @media (prefers-color-scheme: dark) {
    background: #78350f;
    color: #fde68a;
  }
}

.card {
  width: 300px;
}`}
          title="Placeholder Selectors Example"
          description="Buttons and cards sharing base styles efficiently"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Common Patterns */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Common Placeholder Patterns"
            description="Reusable base styles"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <CodeSnippetWithOutput
              title="Typography Base"
              code={`%heading-base {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 {
  @extend %heading-base;
  font-size: 2.5rem;
}

h2 {
  @extend %heading-base;
  font-size: 2rem;
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Reset Base"
              code={`%list-reset {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list {
  @extend %list-reset;
}

.menu-list {
  @extend %list-reset;
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Clearfix"
              code={`%clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

.container {
  @extend %clearfix;
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Visually Hidden"
              code={`%sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.skip-link {
  @extend %sr-only;
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* When to Use */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="When to Use Placeholders"
            description="Best practices"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Use Placeholders When:
              </h5>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 ml-4 list-disc">
                <li>Creating base styles to extend</li>
                <li>Building component libraries</li>
                <li>Styles only used via @extend</li>
                <li>Want to reduce CSS file size</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Use Regular Classes When:
              </h5>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 ml-4 list-disc">
                <li>Used directly in HTML</li>
                <li>Utility classes</li>
                <li>Always need the style</li>
                <li>Using with JavaScript</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Golden Rule</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              If it's only meant to be extended, use a placeholder. If it's used in HTML, use a regular class!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">% Silent</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Not in CSS unless extended
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Reduce Bloat</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smaller CSS file size
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Base Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for shared patterns
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Efficient</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Grouped selectors in output
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
