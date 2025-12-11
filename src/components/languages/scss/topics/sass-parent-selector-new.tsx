'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  ArrowUpCircle, 
  MousePointer2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Target
} from 'lucide-react';

interface SassParentSelectorNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassParentSelectorNew({ onOpenWebPlayground }: SassParentSelectorNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={ArrowUpCircle}
        category="Sass/SCSS · Nesting & Selectors"
        title="Parent Selector (&)"
        description="Learn how to use the ampersand (&) to reference the parent selector in SCSS. Perfect for pseudo-classes, pseudo-elements, modifiers, and BEM naming patterns."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowUpCircle className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is the Parent Selector?"
            description="The ampersand (&) references the parent selector"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>parent selector (&)</strong> is one of SCSS's most powerful features. It lets you reference the outer selector from within a nested block, making it perfect for <strong>pseudo-classes</strong>, <strong>modifiers</strong>, and <strong>BEM naming</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Without &</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Creates descendant selector
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">:hover {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// Compiles to:</div>
                <div className="text-red-600 dark:text-red-400">.button :hover</div>
                <div className="text-red-600 dark:text-red-400 text-[10px]">❌ Wrong!</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With &</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Replaces with parent selector
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">&:hover {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// Compiles to:</div>
                <div className="text-green-600 dark:text-green-400">.button:hover</div>
                <div className="text-green-600 dark:text-green-400 text-[10px]">✓ Correct!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pseudo-Classes */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<MousePointer2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Pseudo-Classes with &"
            description=":hover, :focus, :active, etc."
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The most common use of <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&</code> is with pseudo-classes like <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">:hover</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">:focus</code>, and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">:active</code>.
          </p>

          <div className="space-y-6">
            {/* SCSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">SCSS</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Using & for Pseudo-Classes</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: white;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-pink-600 dark:text-pink-400">&</span>:hover {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">background: #2563eb;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-pink-600 dark:text-pink-400">&</span>:focus {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">outline: 2px solid #60a5fa;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-pink-600 dark:text-pink-400">&</span>:active {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">transform: scale(0.95);</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Compiled CSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">Compiled CSS</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300">Output</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: white;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.button:hover {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #2563eb;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.button:focus {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">outline: 2px solid #60a5fa;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.button:active {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">transform: scale(0.95);</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEM Modifiers */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="BEM Modifiers with &"
            description="Perfect for BEM naming patterns"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&</code> is perfect for <strong>BEM modifiers</strong>. Append modifier classes without repeating the block name.
          </p>

          <div className="space-y-6">
            {/* SCSS with BEM */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-purple-500">SCSS with BEM</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.card {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: white;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 1rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-green-600 dark:text-green-400">// Modifier: card--large</span></div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-pink-600 dark:text-pink-400">&--large</span> {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">padding: 2rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-green-600 dark:text-green-400">// Modifier: card--featured</span></div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-pink-600 dark:text-pink-400">&--featured</span> {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">border: 2px solid gold;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-green-600 dark:text-green-400">// Element: card__title</span></div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-pink-600 dark:text-pink-400">&__title</span> {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">font-size: 1.5rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Compiled */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">Compiled CSS</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.card {'{ background: white; padding: 1rem; }'}</div>
                  <div className="text-gray-700 dark:text-gray-300">.card--large {'{ padding: 2rem; }'}</div>
                  <div className="text-gray-700 dark:text-gray-300">.card--featured {'{ border: 2px solid gold; }'}</div>
                  <div className="text-gray-700 dark:text-gray-300">.card__title {'{ font-size: 1.5rem; }'}</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">BEM Made Easy!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              The <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">&</code> makes BEM naming patterns much cleaner by avoiding repetition!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Pseudo-Elements */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Pseudo-Elements with &"
            description="::before and ::after"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&</code> for pseudo-elements like <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">::before</code> and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">::after</code>.
          </p>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-sm border border-orange-200 dark:border-orange-800 space-y-1">
              <div className="text-gray-700 dark:text-gray-300">.badge {'{'}</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4">position: relative;</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4">padding-left: 1.5rem;</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-green-600 dark:text-green-400">// Add icon before text</span></div>
              <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-pink-600 dark:text-pink-400">&::before</span> {'{'}</div>
              <div className="text-gray-700 dark:text-gray-300 ml-8">content: '✓';</div>
              <div className="text-gray-700 dark:text-gray-300 ml-8">position: absolute;</div>
              <div className="text-gray-700 dark:text-gray-300 ml-8">left: 0;</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2"><span className="text-green-600 dark:text-green-400">// Add underline after</span></div>
              <div className="text-gray-700 dark:text-gray-300 ml-4"><span className="text-pink-600 dark:text-pink-400">&::after</span> {'{'}</div>
              <div className="text-gray-700 dark:text-gray-300 ml-8">content: '';</div>
              <div className="text-gray-700 dark:text-gray-300 ml-8">display: block;</div>
              <div className="text-gray-700 dark:text-gray-300 ml-8">border-bottom: 2px solid;</div>
              <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
              <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Parent Selector in Action"
          description="See & used for hover, focus, and modifiers"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="demo">
  <button class="btn">Normal Button</button>
  <button class="btn btn--primary">Primary Button</button>
  <button class="btn btn--large">Large Button</button>
  
  <div class="card">
    <h3 class="card__title">Standard Card</h3>
    <p class="card__text">Regular card styling</p>
  </div>
  
  <div class="card card--featured">
    <h3 class="card__title">Featured Card</h3>
    <p class="card__text">With featured modifier</p>
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

.demo {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

// Button with & for pseudo-classes and modifiers
.btn {
  background: #64748b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  // Pseudo-classes with &
  &:hover {
    background: #475569;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  // BEM modifiers with &
  &--primary {
    background: #3b82f6;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
}

// Card with BEM
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }
  
  // Hover state with &
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
  
  // BEM elements with &
  &__title {
    color: #1e293b;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    
    @media (prefers-color-scheme: dark) {
      color: #e2e8f0;
    }
  }
  
  &__text {
    color: #64748b;
    line-height: 1.6;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
  
  // BEM modifier with &
  &--featured {
    border: 3px solid #10b981;
    
    .card__title {
      color: #10b981;
      
      @media (prefers-color-scheme: dark) {
        color: #34d399;
      }
      
      // Pseudo-element with &
      &::before {
        content: '⭐ ';
      }
    }
  }
}`}
          title="Parent Selector Example"
          description="Hover, focus, BEM modifiers, and pseudo-elements"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Common Use Cases */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Common Use Cases"
            description="When to use &"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Pseudo-Classes</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>&:hover</div>
                <div>&:focus</div>
                <div>&:active</div>
                <div>&:disabled</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Pseudo-Elements</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>&::before</div>
                <div>&::after</div>
                <div>&::placeholder</div>
                <div>&::selection</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">BEM Modifiers</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>&--large</div>
                <div>&--primary</div>
                <div>&--disabled</div>
                <div>&--active</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">BEM Elements</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>&__title</div>
                <div>&__body</div>
                <div>&__footer</div>
                <div>&__icon</div>
              </div>
            </div>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">References Parent</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">&</code> is replaced with the parent selector
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Pseudo-Classes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for :hover, :focus, :active
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">BEM Naming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clean modifiers with &--modifier
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Pseudo-Elements</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use with &::before and &::after
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Master of Nesting!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You now understand both basic nesting and the parent selector! Next up: learn about <strong>Mixins</strong> for reusable code blocks! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
