'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Layers, 
  GitBranch,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Code2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SassNestingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassNestingNew({ onOpenWebPlayground }: SassNestingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="Sass/SCSS · Nesting & Selectors"
        title="Nesting Selectors"
        description="Learn how to nest selectors in SCSS to mirror your HTML structure. Nesting helps organize your code and reduces repetition, making your stylesheets more maintainable."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is Nesting?"
            description="Mirror your HTML structure in CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            One of SCSS's most powerful features is <strong>nesting</strong>. Instead of repeating parent selectors, you can nest child selectors inside parent blocks, just like your HTML structure.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Regular CSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Repeat parent selector every time
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">.nav {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.nav ul {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.nav ul li {'{ }'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">SCSS Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Nest child selectors inside parents
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">.nav {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">ul {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">li {'{ }'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Nesting */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic Nesting Syntax"
            description="How to nest selectors"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Nesting in SCSS follows your HTML structure. Child selectors are written inside parent selector blocks.
          </p>

          <div className="space-y-6">
            {/* HTML Structure */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-500">HTML Structure</Badge>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-sm border border-orange-200 dark:border-orange-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">{'<nav class="navigation">'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'<ul>'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">{'<li><a href="#">Home</a></li>'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">{'<li><a href="#">About</a></li>'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'</ul>'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'</nav>'}</div>
                </div>
              </div>
            </div>

            {/* Regular CSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-500">Regular CSS</Badge>
                <h4 className="font-bold text-red-700 dark:text-red-300">Without Nesting (Repetitive)</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 font-mono text-sm border border-red-200 dark:border-red-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.navigation {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.navigation ul {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">list-style: none;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.navigation ul li {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">display: inline-block;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.navigation ul li a {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: white;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* SCSS Nesting */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">SCSS Nesting</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300">With Nesting (Clean & Organized)</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.navigation {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2">ul {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">list-style: none;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8 mt-2">li {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-12">display: inline-block;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-12 mt-2">a {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-16">color: white;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-12">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Compiles to Regular CSS</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              SCSS nesting compiles to regular CSS with full selectors like <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">.navigation ul li a</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Nesting in Action"
          description="See how nesting makes code more organized"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="card">
  <div class="card-header">
    <h2 class="card-title">Featured Article</h2>
    <span class="card-badge">New</span>
  </div>
  <div class="card-body">
    <p class="card-text">This is a demonstration of SCSS nesting. Notice how the structure mirrors the HTML!</p>
    <ul class="card-list">
      <li>Organized code structure</li>
      <li>Easier to maintain</li>
      <li>Mirrors HTML hierarchy</li>
    </ul>
  </div>
  <div class="card-footer">
    <button class="card-button">Read More</button>
  </div>
</div>`}
          css={`// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

// Card component with nested selectors
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  
  // Nested: card-header
  .card-header {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    // Nested deeper: card-title inside card-header
    .card-title {
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }
    
    // Nested deeper: card-badge inside card-header
    .card-badge {
      background: rgba(255,255,255,0.2);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  }
  
  // Nested: card-body
  .card-body {
    padding: 1.5rem;
    
    // Nested deeper: card-text inside card-body
    .card-text {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1rem;
      
      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }
    
    // Nested deeper: card-list inside card-body
    .card-list {
      list-style: none;
      
      // Even deeper: li inside card-list
      li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        color: #475569;
        
        @media (prefers-color-scheme: dark) {
          color: #cbd5e1;
        }
        
        // Pseudo-element for bullet point
        &:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }
      }
    }
  }
  
  // Nested: card-footer
  .card-footer {
    background: #f8fafc;
    padding: 1.5rem;
    border-top: 1px solid #e2e8f0;
    
    @media (prefers-color-scheme: dark) {
      background: #0f172a;
      border-top-color: #334155;
    }
    
    // Nested deeper: card-button inside card-footer
    .card-button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background: #2563eb;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      }
    }
  }
}`}
          title="Nesting Example"
          description="All styles are nested to match the HTML structure"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Benefits of Nesting */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Benefits of Nesting"
            description="Why use nesting?"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h5 className="font-semibold text-green-700 dark:text-green-300">Better Organization</h5>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Code structure mirrors HTML hierarchy, making it easier to understand component relationships.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h5 className="font-semibold text-emerald-700 dark:text-emerald-300">Less Repetition</h5>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No need to repeat parent selectors. Write <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">li</code> instead of <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.nav ul li</code>.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h5 className="font-semibold text-blue-700 dark:text-blue-300">Easier Maintenance</h5>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All related styles are grouped together. Change the parent class name once, not everywhere.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h5 className="font-semibold text-purple-700 dark:text-purple-300">Component Scoping</h5>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Styles are naturally scoped within components, reducing conflicts and improving modularity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When NOT to Nest */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Nesting Best Practices"
            description="Avoid over-nesting!"
            size="lg"
          />

          <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Don't Over-Nest!</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Limit nesting to <strong>3-4 levels deep</strong>. Too much nesting creates overly specific selectors and makes CSS hard to maintain.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-bold text-red-700 dark:text-red-300 text-lg flex items-center gap-2">
                <span>❌</span> Too Much Nesting (Bad)
              </h5>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <div className="font-mono text-xs text-red-800 dark:text-red-200 space-y-1">
                  <div>.page {'{'}</div>
                  <div className="ml-2">.container {'{'}</div>
                  <div className="ml-4">.sidebar {'{'}</div>
                  <div className="ml-6">.menu {'{'}</div>
                  <div className="ml-8">ul {'{'}</div>
                  <div className="ml-10">li {'{'}</div>
                  <div className="ml-12">a {'{ }'} <span className="text-red-600 dark:text-red-400">// Too deep!</span></div>
                </div>
                <p className="text-xs text-red-700 dark:text-red-300 mt-3">
                  ⚠️ Creates: <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">.page .container .sidebar .menu ul li a</code>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-green-700 dark:text-green-300 text-lg flex items-center gap-2">
                <span>✅</span> Better Approach (Good)
              </h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <div className="font-mono text-xs text-green-800 dark:text-green-200 space-y-1">
                  <div>.sidebar-menu {'{'}</div>
                  <div className="ml-2">ul {'{'}</div>
                  <div className="ml-4">li {'{'}</div>
                  <div className="ml-6">a {'{ }'} <span className="text-green-600 dark:text-green-400">// Just right!</span></div>
                  <div className="ml-4">{'}'}</div>
                  <div className="ml-2">{'}'}</div>
                  <div>{'}'}</div>
                </div>
                <p className="text-xs text-green-700 dark:text-green-300 mt-3">
                  ✓ Creates: <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">.sidebar-menu ul li a</code>
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
            <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Nesting Guidelines</h5>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Max 3-4 levels:</strong> Keep nesting shallow for maintainability</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Use BEM naming:</strong> Combine with class names like <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.card__title</code> instead of deep nesting</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Component boundaries:</strong> Nest within component scope, not across multiple components</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Think modular:</strong> Each nested block should represent a meaningful component part</span>
              </li>
            </ul>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Mirrors HTML</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Nesting structure should match your HTML hierarchy
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Less Repetition</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No need to repeat parent selectors
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Better Organization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Related styles grouped together
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Limit Depth</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Keep nesting to 3-4 levels maximum
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Parent Selector!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now that you understand basic nesting, learn about the <strong>parent selector (&)</strong> for pseudo-classes, hover states, and BEM modifiers! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
