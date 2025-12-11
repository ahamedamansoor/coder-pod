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
  ArrowUpToLine, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Layers,
  GitBranch,
  Zap
} from 'lucide-react';

interface SassAtRootNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassAtRootNew({ onOpenWebPlayground }: SassAtRootNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={ArrowUpToLine}
        category="Sass/SCSS · Advanced Features"
        title="@at-root Directive"
        description="Escape nested selectors and emit styles at the root level for breaking out of parent contexts."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowUpToLine className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="@at-root Directive"
            description="Break out of nested selectors"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>@at-root</strong> directive allows you to emit styles at the root level of the stylesheet, even when you're inside nested selectors. This is useful for generating utility classes, creating modifiers, or working with complex selector patterns without deep nesting!
          </p>

          <CodeSnippetWithOutput
            title="Basic @at-root"
            code={`.parent {
  color: blue;
  
  @at-root .child {
    color: red;
  }
}`}
            output={[
              '.parent {',
              '  color: blue;',
              '}',
              '.child {',
              '  color: red;',
              '}'
            ]}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <ArrowUpToLine className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Escape Nesting!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@at-root</code> moves styles to the root, ignoring parent selectors.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Usage */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic Usage"
            description="Breaking out of parent context"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Without @at-root"
              description="Normal nesting behavior"
              code={`.card {
  padding: 1rem;
  
  .title {
    font-size: 1.5rem;
  }
}`}
              output={[
                '.card {',
                '  padding: 1rem;',
                '}',
                '.card .title {',
                '  font-size: 1.5rem;',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="With @at-root"
              description="Breaks out to root level"
              code={`.card {
  padding: 1rem;
  
  @at-root .title {
    font-size: 1.5rem;
  }
}`}
              output={[
                '.card {',
                '  padding: 1rem;',
                '}',
                '.title {',
                '  font-size: 1.5rem;',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Keeping Context with &"
              code={`.card {
  padding: 1rem;
  
  @at-root .title#{&} {
    font-size: 1.5rem;
  }
}`}
              output={[
                '.card {',
                '  padding: 1rem;',
                '}',
                '.title.card {',
                '  font-size: 1.5rem;',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Utility Classes */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Generate Utility Classes"
            description="Create helper classes from components"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Component-Scoped Utilities"
              code={`.button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  
  // Generate utility classes at root
  @at-root {
    .button-small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    
    .button-large {
      padding: 0.75rem 1.5rem;
      font-size: 1.125rem;
    }
    
    .button-primary {
      background: blue;
      color: white;
    }
  }
}`}
              output={[
                '.button {',
                '  padding: 0.5rem 1rem;',
                '  border-radius: 4px;',
                '}',
                '.button-small { padding: 0.25rem 0.5rem; font-size: 0.875rem; }',
                '.button-large { padding: 0.75rem 1.5rem; font-size: 1.125rem; }',
                '.button-primary { background: blue; color: white; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="BEM Modifiers"
              code={`.card {
  background: white;
  padding: 1rem;
  
  @at-root {
    #{&}--featured {
      border: 2px solid gold;
    }
    
    #{&}--compact {
      padding: 0.5rem;
    }
  }
}`}
              output={[
                '.card {',
                '  background: white;',
                '  padding: 1rem;',
                '}',
                '.card--featured {',
                '  border: 2px solid gold;',
                '}',
                '.card--compact {',
                '  padding: 0.5rem;',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Media Queries */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="@at-root with @media"
            description="Escape nested media queries"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Breaking Out of Media Queries"
              code={`@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  
  @at-root {
    .mobile-only {
      display: none;
    }
  }
}`}
              output={[
                '@media (min-width: 768px) {',
                '  .container {',
                '    max-width: 720px;',
                '  }',
                '}',
                '.mobile-only {',
                '  display: none;',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Selective Unwrapping"
              description="Use (without: media) to keep other nesting"
              code={`.sidebar {
  width: 250px;
  
  @media (max-width: 768px) {
    width: 100%;
    
    @at-root (without: media) {
      #{&}-toggle {
        display: block;
      }
    }
  }
}`}
              output={[
                '.sidebar {',
                '  width: 250px;',
                '}',
                '@media (max-width: 768px) {',
                '  .sidebar {',
                '    width: 100%;',
                '  }',
                '}',
                '.sidebar-toggle {',
                '  display: block;',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Selective Control!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">(without: media)</code> or <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">(with: rule)</code> for fine control.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Advanced Patterns */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Advanced Patterns"
            description="Complex @at-root scenarios"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Keyframe Animations"
              code={`.button {
  padding: 0.5rem 1rem;
  
  &:hover {
    animation: pulse 0.3s ease-in-out;
  }
  
  @at-root {
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  }
}`}
              output={[
                '.button {',
                '  padding: 0.5rem 1rem;',
                '}',
                '.button:hover {',
                '  animation: pulse 0.3s ease-in-out;',
                '}',
                '@keyframes pulse {',
                '  0%, 100% { transform: scale(1); }',
                '  50% { transform: scale(1.05); }',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Multiple Classes"
              code={`.theme-dark {
  background: #000;
  color: #fff;
  
  @at-root {
    #{&} .card,
    #{&} .button {
      border-color: #333;
    }
  }
}`}
              output={[
                '.theme-dark {',
                '  background: #000;',
                '  color: #fff;',
                '}',
                '.theme-dark .card,',
                '.theme-dark .button {',
                '  border-color: #333;',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="With & Without Options"
              code={`.component {
  @media print {
    @at-root (without: media) {
      // Escapes media query
      .no-print {
        display: none;
      }
    }
    
    @at-root (with: media) {
      // Keeps media query
      body {
        font-size: 12pt;
      }
    }
  }
}`}
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
          title="@at-root in Action"
          description="Component with utility classes and modifiers"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  
  <button class="btn btn-primary btn-small">Small Primary</button>
  <button class="btn btn-secondary btn-large">Large Secondary</button>
</div>`}
          css={`// Using @at-root to escape nesting and generate utilities

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 600px;
}

// Base button styles
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    animation: pulse 0.3s ease-in-out;
  }
  
  // Using @at-root to break out and generate utilities
  @at-root {
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      
      &:hover {
        background: linear-gradient(135deg, #5568d3 0%, #65398b 100%);
      }
    }
    
    .btn-secondary {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      
      &:hover {
        background: linear-gradient(135deg, #df7eeb 0%, #e4465b 100%);
      }
    }
    
    // Size variants
    .btn-small {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
    
    .btn-large {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    }
    
    // Keyframe animation at root level
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
}`}
          title="Utility Classes with @at-root"
          description="Using @at-root to break out and generate utilities"
          colorTheme="cyan"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Escape Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @at-root moves styles to root level
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Utilities</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate helper classes from components
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Control</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use (with:) or (without:) options
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">BEM</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for modifiers and elements
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
