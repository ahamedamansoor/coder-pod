'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Share2, 
  Copy,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  AlertTriangle,
  GitBranch
} from 'lucide-react';

interface SassExtendInheritanceNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassExtendInheritanceNew({ onOpenWebPlayground }: SassExtendInheritanceNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Share2}
        category="Sass/SCSS · Reusable Code"
        title="@extend & Inheritance"
        description="Learn how to share styles between selectors using @extend. Understand selector inheritance, when to use @extend vs mixins, and how to avoid common pitfalls."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Share2 className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @extend?"
            description="Share styles between selectors"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@extend</strong> lets one selector <strong>inherit the styles</strong> of another selector. Unlike mixins that copy styles, @extend groups selectors together in the CSS output, making it more efficient for shared base styles.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Copy styles to each selector
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">.btn {'{ padding... }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.btn-primary {'{ padding... }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.btn-success {'{ padding... }'}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-1">Duplicates CSS</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">@extend</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Group selectors together
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">.btn,</div>
                <div className="text-gray-700 dark:text-gray-300">.btn-primary,</div>
                <div className="text-gray-700 dark:text-gray-300">.btn-success {'{ padding... }'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">More efficient!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic @extend Syntax */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic @extend Syntax"
            description="Inherit styles from another selector"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@extend</code> to inherit all styles from another selector.
          </p>

          <div className="space-y-6">
            {/* SCSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">SCSS</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Using @extend</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// Base message style</div>
                  <div className="text-gray-700 dark:text-gray-300">.message {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 1rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: 8px;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border: 2px solid transparent;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-3"><span className="text-green-600 dark:text-green-400">// Success inherits from message</span></div>
                  <div className="text-gray-700 dark:text-gray-300">.message-success {'{'}</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">@extend .message;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #d1fae5;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-color: #10b981;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: #047857;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2"><span className="text-green-600 dark:text-green-400">// Error inherits from message</span></div>
                  <div className="text-gray-700 dark:text-gray-300">.message-error {'{'}</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">@extend .message;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #fee2e2;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-color: #ef4444;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: #991b1b;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Compiled CSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">Compiled CSS</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300">Grouped Selectors</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">/* Selectors grouped together */</div>
                  <div className="text-gray-700 dark:text-gray-300">.message,</div>
                  <div className="text-gray-700 dark:text-gray-300">.message-success,</div>
                  <div className="text-gray-700 dark:text-gray-300">.message-error {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 1rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: 8px;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border: 2px solid transparent;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-3">.message-success {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #d1fae5;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-color: #10b981;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: #047857;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.message-error {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #fee2e2;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-color: #ef4444;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: #991b1b;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Grouped, Not Duplicated</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Notice how the base styles appear only once with all selectors grouped together. This is more efficient than mixins!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Chaining Extends */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Chaining @extend"
            description="Extend selectors that extend others"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can create <strong>inheritance chains</strong> where selectors extend other selectors that are already extending.
          </p>

          <div className="w-full">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 0.5rem 1rem;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">border: none;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button-primary {'{'}</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">@extend .button;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">color: white;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2"><span className="text-green-600 dark:text-green-400">// Extends .button-primary (which extends .button)</span></div>
                <div className="text-gray-700 dark:text-gray-300">.button-primary-large {'{'}</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">@extend .button-primary;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 1rem 2rem;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">font-size: 1.125rem;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="@extend in Action"
          description="See inheritance working in practice"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="message message-info">
    <strong>Info:</strong> This is an informational message.
  </div>
  
  <div class="message message-success">
    <strong>Success:</strong> Operation completed successfully!
  </div>
  
  <div class="message message-warning">
    <strong>Warning:</strong> Please review your changes.
  </div>
  
  <div class="message message-error">
    <strong>Error:</strong> Something went wrong.
  </div>
  
  <div class="buttons">
    <button class="btn">Default</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-success">Success</button>
  </div>
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
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

// Base message - will be extended
.message {
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 0.875rem;
  line-height: 1.6;
  transition: all 0.3s;
  
  strong {
    font-weight: 700;
    margin-right: 0.25rem;
  }
  
  &:hover {
    transform: translateX(4px);
  }
}

// All message types extend .message
.message-info {
  @extend .message;
  background: #dbeafe;
  border-color: #3b82f6;
  color: #1e40af;
  
  @media (prefers-color-scheme: dark) {
    background: #1e3a8a;
    color: #bfdbfe;
  }
}

.message-success {
  @extend .message;
  background: #d1fae5;
  border-color: #10b981;
  color: #047857;
  
  @media (prefers-color-scheme: dark) {
    background: #064e3b;
    color: #a7f3d0;
  }
}

.message-warning {
  @extend .message;
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
  
  @media (prefers-color-scheme: dark) {
    background: #78350f;
    color: #fde68a;
  }
}

.message-error {
  @extend .message;
  background: #fee2e2;
  border-color: #ef4444;
  color: #991b1b;
  
  @media (prefers-color-scheme: dark) {
    background: #7f1d1d;
    color: #fecaca;
  }
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

// Base button
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  background: #e5e7eb;
  color: #1f2937;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background: #374151;
    color: #e5e7eb;
  }
}

// Button variants extend .btn
.btn-primary {
  @extend .btn;
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
  }
}

.btn-success {
  @extend .btn;
  background: #10b981;
  color: white;
  
  &:hover {
    background: #059669;
  }
}`}
          title="@extend Example"
          description="Messages and buttons using inheritance"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* @extend vs @mixin */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="@extend vs @mixin"
            description="When to use each"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <Copy className="w-5 h-5" />
                Use @mixin when...
              </h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You need to pass arguments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Styles vary based on parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You need @content blocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Selectors shouldn't be related</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Use @extend when...
              </h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Sharing identical base styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Semantic relationship exists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>No arguments needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Want more efficient CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Common Pitfalls"
            description="Avoid these @extend mistakes"
            size="lg"
          />

          <div className="space-y-4">
            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Don't Extend Across Media Queries</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200 space-y-2">
                <p>You cannot extend a selector that's outside a media query from inside one (or vice versa).</p>
                <div className="bg-red-100 dark:bg-red-900/30 rounded p-2 font-mono text-xs mt-2">
                  <div className="text-red-700 dark:text-red-300">❌ .mobile {'{ @extend .button; }'} // Error!</div>
                </div>
              </AlertDescription>
            </Alert>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Can Create Bloat</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Extending too many selectors can create large, complex selector lists. Use placeholders (%) for extend-only selectors.
              </AlertDescription>
            </Alert>
          </div>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Groups Selectors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @extend groups selectors instead of duplicating CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">More Efficient</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smaller CSS output than mixins for shared styles
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Can Chain</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create inheritance hierarchies
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Use Wisely</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Not always better than mixins
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Placeholder Selectors!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Learn about <strong>placeholder selectors (%)</strong> — the perfect companion to @extend for creating extend-only base styles! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
