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
  FileText,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Package
} from 'lucide-react';

interface SassPropertyNestingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassPropertyNestingNew({ onOpenWebPlayground }: SassPropertyNestingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="Sass/SCSS · Nesting & Selectors"
        title="Property Nesting"
        description="Learn how to nest CSS properties that share the same namespace. Perfect for font, border, background, margin, padding, and other grouped properties."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is Property Nesting?"
            description="Nest properties with shared namespaces"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Property nesting</strong> allows you to nest CSS properties that share the same <strong>namespace</strong>. Properties like <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-family</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-size</code>, and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-weight</code> all start with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-</code>, so they can be nested!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Regular CSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Repeat the namespace prefix
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">h1 {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">font-family: Arial;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">font-size: 2rem;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">font-weight: bold;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-1">Repetitive prefix</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Property Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Group under namespace
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">h1 {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">font: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">family: Arial;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">size: 2rem;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">weight: bold;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Organized!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Font Properties */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Font Properties"
            description="Nest font-family, font-size, font-weight"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font</code> namespace includes family, size, weight, style, and more.
          </p>

          <div className="space-y-6">
            {/* SCSS */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">SCSS</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Font Property Nesting</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.heading {'{'}</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">font: {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">family: 'Arial', sans-serif;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">size: 2rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">weight: 700;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-8">style: italic;</div>
                  <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
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
                  <div className="text-gray-700 dark:text-gray-300">.heading {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">font-family: 'Arial', sans-serif;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">font-size: 2rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">font-weight: 700;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">font-style: italic;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Border Properties */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Border Properties"
            description="Nest border-width, border-style, border-color"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">border</code> namespace includes width, style, color, and radius.
          </p>

          <div className="w-full">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">.box {'{'}</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">border: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">width: 2px;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">style: solid;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">color: #3b82f6;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">radius: 8px;</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 1rem;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Background Properties */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Background Properties"
            description="Nest background-color, background-image, background-position"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">background</code> namespace includes color, image, size, position, and repeat.
          </p>

          <div className="w-full">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-sm border border-orange-200 dark:border-orange-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">.hero {'{'}</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">background: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">color: #f3f4f6;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">image: url('/pattern.png');</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">size: cover;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">position: center;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">repeat: no-repeat;</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multiple Namespaces */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Multiple Namespaces"
            description="Combine multiple property nesting"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can nest multiple property namespaces in the same selector.
          </p>

          <div className="w-full">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">.card {'{'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4">// Font properties</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">font: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">family: 'Helvetica', sans-serif;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">size: 1rem;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">weight: 500;</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4 mt-2">// Border properties</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">border: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">width: 1px;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">style: solid;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">color: #e5e7eb;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">radius: 12px;</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4 mt-2">// Margin properties</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">margin: {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">top: 1rem;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">bottom: 2rem;</div>
                <div className="text-pink-600 dark:text-pink-400 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Organize Related Properties</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Property nesting helps keep related properties grouped together, making your code more organized and readable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Property Nesting in Action"
          description="See nested properties working in a real example"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card">
    <h2 class="card-title">Card Title</h2>
    <p class="card-text">This card uses property nesting for font, border, background, and margin properties.</p>
    <button class="card-button">Learn More</button>
  </div>
  
  <div class="info-box">
    <h3>Info Box</h3>
    <p>Property nesting keeps related styles organized and makes your SCSS more readable.</p>
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
  gap: 2rem;
}

// Card with property nesting
.card {
  background: white;
  padding: 2rem;
  transition: all 0.3s;
  
  // Font property nesting
  font: {
    family: -apple-system, sans-serif;
    size: 1rem;
    weight: 400;
  }
  
  // Border property nesting
  border: {
    width: 2px;
    style: solid;
    color: #e5e7eb;
    radius: 12px;
  }
  
  // Margin property nesting
  margin: {
    bottom: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    
    border: {
      color: #3b82f6;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    
    border: {
      color: #475569;
    }
    
    &:hover {
      border: {
        color: #60a5fa;
      }
    }
  }
}

.card-title {
  color: #1e293b;
  
  // Font property nesting
  font: {
    size: 1.5rem;
    weight: 700;
  }
  
  // Margin property nesting
  margin: {
    bottom: 0.75rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
  }
}

.card-text {
  color: #64748b;
  line-height: 1.6;
  
  // Margin property nesting
  margin: {
    bottom: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
}

.card-button {
  background: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  
  // Font property nesting
  font: {
    size: 0.875rem;
    weight: 600;
  }
  
  // Padding property nesting
  padding: {
    top: 0.75rem;
    bottom: 0.75rem;
    left: 1.5rem;
    right: 1.5rem;
  }
  
  // Border property nesting
  border: {
    radius: 6px;
  }
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
}

.info-box {
  background: #dbeafe;
  
  // Padding property nesting
  padding: {
    top: 1.25rem;
    bottom: 1.25rem;
    left: 1.5rem;
    right: 1.5rem;
  }
  
  // Border property nesting
  border: {
    left: 4px solid #3b82f6;
    radius: 8px;
  }
  
  h3 {
    color: #1e40af;
    
    // Font property nesting
    font: {
      size: 1.125rem;
      weight: 700;
    }
    
    // Margin property nesting
    margin: {
      bottom: 0.5rem;
    }
  }
  
  p {
    color: #1e40af;
    
    // Font property nesting
    font: {
      size: 0.875rem;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1e3a8a;
    
    border: {
      left-color: #60a5fa;
    }
    
    h3 {
      color: #bfdbfe;
    }
    
    p {
      color: #bfdbfe;
    }
  }
}`}
          title="Property Nesting Example"
          description="Cards using nested font, border, margin, and padding properties"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Common Property Namespaces */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Common Property Namespaces"
            description="Properties you can nest"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">font:</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>family, size, weight</div>
                <div>style, variant, stretch</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">border:</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>width, style, color</div>
                <div>radius, top, bottom</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">background:</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>color, image, size</div>
                <div>position, repeat, attachment</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">margin / padding:</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>top, right, bottom, left</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">text:</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>align, decoration, transform</div>
                <div>indent, shadow, overflow</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">flex:</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>direction, wrap, grow</div>
                <div>shrink, basis</div>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Organized Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Groups related properties together
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Less Repetition</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No need to repeat namespace prefixes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Works with Any Namespace</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                font, border, background, margin, padding, etc.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Better Readability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Makes code structure clearer
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Operators!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've mastered property nesting! Now learn about <strong>operators</strong> for calculations and logic in SCSS! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
