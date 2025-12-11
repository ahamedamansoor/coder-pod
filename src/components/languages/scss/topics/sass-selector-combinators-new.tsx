'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  GitBranch, 
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  ChevronRight,
  Plus
} from 'lucide-react';

interface SassSelectorCombinatorsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassSelectorCombinatorsNew({ onOpenWebPlayground }: SassSelectorCombinatorsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitBranch}
        category="Sass/SCSS · Nesting & Selectors"
        title="Selector Combinators"
        description="Learn how to use CSS combinators (>, +, ~) with SCSS nesting. Master child, adjacent sibling, and general sibling selectors for precise element targeting."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Selector Combinators?"
            description="Precise element targeting in nested selectors"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Selector combinators</strong> define the relationship between selectors. CSS has four combinators: <strong>descendant (space)</strong>, <strong>child (>)</strong>, <strong>adjacent sibling (+)</strong>, and <strong>general sibling (~)</strong>. SCSS makes them easier to use with nesting!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Regular CSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Write full selector paths
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">.nav {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.nav > .item {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.nav > .item + .item {'{ }'}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-1">Repetitive selectors</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">SCSS Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Use combinators with nesting
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">.nav {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">> .item {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">> .item + .item {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Cleaner!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Child Combinator (>) */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ChevronRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Child Combinator (>)"
            description="Select direct children only"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <strong>child combinator</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">></code> selects elements that are <strong>direct children</strong> of the parent. It doesn't select nested descendants.
          </p>

          <div className="space-y-6">
            {/* HTML Structure */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-500">HTML Structure</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-xs border border-orange-200 dark:border-orange-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">{'<nav>'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-2">{'<li>Direct child</li>      '}<span className="text-green-600 dark:text-green-400">← Selected ✓</span></div>
                  <div className="text-gray-700 dark:text-gray-300 ml-2">{'<div>'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'<li>Nested</li>        '}<span className="text-red-600 dark:text-red-400">← Not selected ✗</span></div>
                  <div className="text-gray-700 dark:text-gray-300 ml-2">{'</div>'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'</nav>'}</div>
                </div>
              </div>
            </div>

            {/* SCSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">SCSS</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Child Combinator</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">nav {'{'}</div>
                  <div className="text-green-600 dark:text-green-400 ml-4">// Select direct children only</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">> li {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">color: blue;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">font-weight: bold;</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Compiled CSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">Compiled CSS</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">nav > li {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: blue;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">font-weight: bold;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Adjacent Sibling Combinator (+) */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Plus className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Adjacent Sibling Combinator (+)"
            description="Select the immediately following sibling"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <strong>adjacent sibling combinator</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">+</code> selects an element that <strong>immediately follows</strong> another element at the same level.
          </p>

          <div className="space-y-6">
            {/* HTML Structure */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-500">HTML Structure</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-xs border border-orange-200 dark:border-orange-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">{'<h2>Heading</h2>        '}<span className="text-red-600 dark:text-red-400">← Not selected</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'<p>First paragraph</p>   '}<span className="text-green-600 dark:text-green-400">← Selected ✓</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'<p>Second paragraph</p>  '}<span className="text-red-600 dark:text-red-400">← Not selected</span></div>
                </div>
              </div>
            </div>

            {/* SCSS */}
            <div className="w-full">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">h2 {'{'}</div>
                  <div className="text-green-600 dark:text-green-400 ml-4">// Select paragraph immediately after h2</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">+ p {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">margin-top: 0;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">color: #6366f1;</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* General Sibling Combinator (~) */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="General Sibling Combinator (~)"
            description="Select all following siblings"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <strong>general sibling combinator</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">~</code> selects <strong>all siblings</strong> that follow an element at the same level.
          </p>

          <div className="space-y-6">
            {/* HTML Structure */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-500">HTML Structure</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-xs border border-orange-200 dark:border-orange-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">{'<h2>Heading</h2>        '}<span className="text-red-600 dark:text-red-400">← Not selected</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'<p>First paragraph</p>   '}<span className="text-green-600 dark:text-green-400">← Selected ✓</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'<p>Second paragraph</p>  '}<span className="text-green-600 dark:text-green-400">← Selected ✓</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'<p>Third paragraph</p>   '}<span className="text-green-600 dark:text-green-400">← Selected ✓</span></div>
                </div>
              </div>
            </div>

            {/* SCSS */}
            <div className="w-full">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">h2 {'{'}</div>
                  <div className="text-green-600 dark:text-green-400 ml-4">// Select all paragraphs after h2</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">~ p {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">color: #64748b;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">line-height: 1.6;</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">+ vs ~</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">+</code> selects only the <strong>immediately following</strong> sibling, while <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">~</code> selects <strong>all following</strong> siblings!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Combinators in Action"
          description="See all three combinators working together"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <nav class="navigation">
    <li class="nav-item">Home</li>
    <li class="nav-item">About</li>
    <li class="nav-item">Services</li>
    <div class="nested">
      <li class="nav-item">Nested Item</li>
    </div>
  </nav>
  
  <article class="content">
    <h2>Article Title</h2>
    <p>First paragraph immediately after heading.</p>
    <p>Second paragraph - also a sibling.</p>
    <p>Third paragraph - another sibling.</p>
    <div>A div element</div>
    <p>Fourth paragraph after div.</p>
  </article>
</div>`}
          css={`// Base
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
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

// Child combinator (>) - Direct children only
.navigation {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  list-style: none;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
  }
  
  // Only direct .nav-item children (not nested ones)
  > .nav-item {
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    background: #dbeafe;
    border-radius: 6px;
    color: #1e40af;
    font-weight: 600;
    
    @media (prefers-color-scheme: dark) {
      background: #1e3a8a;
      color: #bfdbfe;
    }
    
    &:hover {
      background: #bfdbfe;
      
      @media (prefers-color-scheme: dark) {
        background: #1e40af;
      }
    }
  }
  
  .nested {
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    
    .nav-item {
      background: #fee2e2;
      color: #991b1b;
      
      @media (prefers-color-scheme: dark) {
        background: #7f1d1d;
        color: #fecaca;
      }
    }
  }
}

// Adjacent sibling (+) and General sibling (~)
.content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
  }
  
  h2 {
    color: #1e293b;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    
    @media (prefers-color-scheme: dark) {
      color: #e2e8f0;
    }
    
    // Adjacent sibling (+) - First paragraph only
    + p {
      color: #6366f1;
      font-weight: 600;
      font-size: 1.125rem;
      margin-top: 0;
      padding: 1rem;
      background: #eef2ff;
      border-left: 4px solid #6366f1;
      border-radius: 6px;
      
      @media (prefers-color-scheme: dark) {
        background: #312e81;
        color: #c7d2fe;
      }
    }
    
    // General sibling (~) - All paragraphs after h2
    ~ p {
      color: #64748b;
      line-height: 1.8;
      margin-top: 1rem;
      
      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }
  }
  
  div {
    background: #fef3c7;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 6px;
    color: #92400e;
    font-style: italic;
    
    @media (prefers-color-scheme: dark) {
      background: #78350f;
      color: #fde68a;
    }
  }
}`}
          title="Selector Combinators Example"
          description="Child (>), adjacent sibling (+), and general sibling (~) in action"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Combinator Reference */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Combinator Reference"
            description="Quick reference guide"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <span className="text-2xl">{'>'}</span> Child
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Selects direct children
              </p>
              <div className="font-mono text-xs bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                .parent > .child
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <span className="text-2xl">+</span> Adjacent Sibling
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Next sibling immediately after
              </p>
              <div className="font-mono text-xs bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                h2 + p
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <span className="text-2xl">~</span> General Sibling
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                All following siblings
              </p>
              <div className="font-mono text-xs bg-green-50 dark:bg-green-900/20 p-2 rounded">
                h2 ~ p
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <span className="text-2xl">(space)</span> Descendant
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Any nested descendants
              </p>
              <div className="font-mono text-xs bg-orange-50 dark:bg-orange-900/20 p-2 rounded">
                .parent .child
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">&gt; Child Combinator</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Direct children only, not nested
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">+ Adjacent Sibling</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Immediately following sibling only
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">~ General Sibling</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All following siblings at same level
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Works with Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cleaner code when combined with SCSS
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Mastered Nesting!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've completed all nesting topics! Next up: learn about <strong>@import and modules</strong> for organizing your SCSS files! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
