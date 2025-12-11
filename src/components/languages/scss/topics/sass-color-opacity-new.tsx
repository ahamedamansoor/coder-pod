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
  Eye, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  EyeOff,
  Layers
} from 'lucide-react';

interface SassColorOpacityNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassColorOpacityNew({ onOpenWebPlayground }: SassColorOpacityNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="Sass/SCSS · Colors"
        title="Color & Opacity"
        description="Master rgba(), transparentize(), opacify(), and alpha channel manipulation."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Color & Opacity"
            description="Alpha channel manipulation"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Control <strong>transparency</strong> and <strong>opacity</strong> with SCSS functions like <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">rgba()</code>, <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">transparentize()</code>, and <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">opacify()</code>. Perfect for overlays, shadows, and layered designs!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">rgba()</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Set alpha directly</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <EyeOff className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">transparentize()</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Make more transparent</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">opacify()</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Make more opaque</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* rgba() Function */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="rgba() Function"
            description="Set color with alpha channel"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic rgba() Usage"
              code={`// rgba(color, alpha)
// alpha: 0 (transparent) to 1 (opaque)

$primary: #3b82f6;

.overlay {
  // 50% opacity
  background: rgba($primary, 0.5);
}

.modal-backdrop {
  // 80% opacity
  background: rgba(#000000, 0.8);
}

.glass-card {
  // 10% opacity
  background: rgba(#ffffff, 0.1);
  backdrop-filter: blur(10px);
}`}
              output={[
                '.overlay { background: rgba(59, 130, 246, 0.5); }',
                '.modal-backdrop { background: rgba(0, 0, 0, 0.8); }',
                '.glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Creating Transparent Variants"
              code={`$brand-color: #10b981;

.button {
  background: $brand-color;
  
  // Hover with transparency
  &:hover {
    background: rgba($brand-color, 0.9);
  }
  
  // Disabled state
  &:disabled {
    background: rgba($brand-color, 0.4);
    cursor: not-allowed;
  }
}

// Transparent backgrounds for alerts
.alert {
  &-info {
    background: rgba(#3b82f6, 0.1);
    border: 1px solid rgba(#3b82f6, 0.3);
    color: #1e40af;
  }
  
  &-success {
    background: rgba(#10b981, 0.1);
    border: 1px solid rgba(#10b981, 0.3);
    color: #065f46;
  }
}`}
              output={[
                '.button { background: #10b981; }',
                '.button:hover { background: rgba(16, 185, 129, 0.9); }',
                '.button:disabled { background: rgba(16, 185, 129, 0.4); cursor: not-allowed; }',
                '.alert-info { background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); color: #1e40af; }',
                '.alert-success { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #065f46; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Shadows with Opacity"
              code={`$shadow-color: #000000;

.card {
  // Subtle shadow
  &-subtle {
    box-shadow: 0 2px 4px rgba($shadow-color, 0.1);
  }
  
  // Medium shadow
  &-medium {
    box-shadow: 0 4px 6px rgba($shadow-color, 0.15);
  }
  
  // Strong shadow
  &-strong {
    box-shadow: 0 10px 30px rgba($shadow-color, 0.3);
  }
  
  // Layered shadows
  &-layered {
    box-shadow: 
      0 2px 4px rgba($shadow-color, 0.1),
      0 8px 16px rgba($shadow-color, 0.15),
      0 16px 48px rgba($shadow-color, 0.2);
  }
}`}
              output={[
                '.card-subtle { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }',
                '.card-medium { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); }',
                '.card-strong { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }',
                '.card-layered { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.15), 0 16px 48px rgba(0, 0, 0, 0.2); }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Alpha Values</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Alpha ranges from <strong>0</strong> (fully transparent) to <strong>1</strong> (fully opaque). Use decimals: 0.5 = 50% opacity.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* transparentize() Function */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<EyeOff className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="transparentize() Function"
            description="Reduce opacity (fade-alpha)"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Making Colors More Transparent"
              code={`// transparentize(color, amount)
// amount: 0 to 1 (reduces opacity)
// Also known as: fade-out()

$color: rgba(#3b82f6, 1);

.fade {
  // Reduce opacity by 30%
  &-light {
    background: transparentize($color, 0.3);
  }
  
  // Reduce opacity by 50%
  &-medium {
    background: transparentize($color, 0.5);
  }
  
  // Reduce opacity by 70%
  &-heavy {
    background: transparentize($color, 0.7);
  }
}`}
              output={[
                '.fade-light { background: rgba(59, 130, 246, 0.7); }',
                '.fade-medium { background: rgba(59, 130, 246, 0.5); }',
                '.fade-heavy { background: rgba(59, 130, 246, 0.3); }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Hover Effects with transparentize()"
              code={`$primary: #3b82f6;

.button {
  background: $primary;
  border: 2px solid $primary;
  
  &:hover {
    // Make background more transparent on hover
    background: transparentize($primary, 0.2);
  }
}

.link {
  color: $primary;
  
  &::after {
    content: '';
    background: $primary;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::after {
    // Fade in underline
    background: transparentize($primary, 0.5);
  }
}`}
              output={[
                '.button { background: #3b82f6; border: 2px solid #3b82f6; }',
                '.button:hover { background: rgba(59, 130, 246, 0.8); }',
                '.link { color: #3b82f6; }',
                '.link::after { content: ""; background: #3b82f6; opacity: 0; transition: opacity 0.3s; }',
                '.link:hover::after { background: rgba(59, 130, 246, 0.5); }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Gradual Transparency"
              code={`$base: #10b981;

// Create transparency scale
.transparency {
  &-0  { background: $base; }
  &-10 { background: transparentize($base, 0.1); }
  &-20 { background: transparentize($base, 0.2); }
  &-30 { background: transparentize($base, 0.3); }
  &-40 { background: transparentize($base, 0.4); }
  &-50 { background: transparentize($base, 0.5); }
  &-60 { background: transparentize($base, 0.6); }
  &-70 { background: transparentize($base, 0.7); }
  &-80 { background: transparentize($base, 0.8); }
  &-90 { background: transparentize($base, 0.9); }
}`}
              output={[
                '.transparency-0 { background: #10b981; }',
                '.transparency-10 { background: rgba(16, 185, 129, 0.9); }',
                '.transparency-20 { background: rgba(16, 185, 129, 0.8); }',
                '.transparency-30 { background: rgba(16, 185, 129, 0.7); }',
                '.transparency-40 { background: rgba(16, 185, 129, 0.6); }',
                '.transparency-50 { background: rgba(16, 185, 129, 0.5); }',
                '.transparency-60 { background: rgba(16, 185, 129, 0.4); }',
                '.transparency-70 { background: rgba(16, 185, 129, 0.3); }',
                '.transparency-80 { background: rgba(16, 185, 129, 0.2); }',
                '.transparency-90 { background: rgba(16, 185, 129, 0.1); }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* opacify() Function */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="opacify() Function"
            description="Increase opacity (fade-in)"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Making Colors More Opaque"
              code={`// opacify(color, amount)
// amount: 0 to 1 (increases opacity)
// Also known as: fade-in()

$transparent-color: rgba(#3b82f6, 0.3);

.solidify {
  // Increase opacity by 20%
  &-light {
    background: opacify($transparent-color, 0.2);
  }
  
  // Increase opacity by 40%
  &-medium {
    background: opacify($transparent-color, 0.4);
  }
  
  // Increase opacity by 60%
  &-heavy {
    background: opacify($transparent-color, 0.6);
  }
}`}
              output={[
                '.solidify-light { background: rgba(59, 130, 246, 0.5); }',
                '.solidify-medium { background: rgba(59, 130, 246, 0.7); }',
                '.solidify-heavy { background: rgba(59, 130, 246, 0.9); }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Animation States"
              code={`$base: rgba(#10b981, 0.2);

.element {
  background: $base;
  transition: background 0.3s;
  
  // Progressive opacity states
  &:hover {
    background: opacify($base, 0.3);
  }
  
  &:focus {
    background: opacify($base, 0.5);
  }
  
  &:active {
    background: opacify($base, 0.7);
  }
}`}
              output={[
                '.element { background: rgba(16, 185, 129, 0.2); transition: background 0.3s; }',
                '.element:hover { background: rgba(16, 185, 129, 0.5); }',
                '.element:focus { background: rgba(16, 185, 129, 0.7); }',
                '.element:active { background: rgba(16, 185, 129, 0.9); }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Aliases</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">fade-out()</code> = transparentize(), <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">fade-in()</code> = opacify()
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* alpha() Function */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="alpha() & opacity() Functions"
            description="Get alpha channel value"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Reading Alpha Values"
              code={`// alpha(color) returns the alpha channel (0-1)
// Also known as: opacity()

$color1: rgba(#3b82f6, 0.5);
$color2: rgba(#10b981, 0.8);
$color3: #ef4444; // No alpha = 1

// Get alpha values
$alpha1: alpha($color1); // 0.5
$alpha2: alpha($color2); // 0.8
$alpha3: alpha($color3); // 1

.debug {
  // Display alpha in content
  &::before {
    content: "Alpha: #{$alpha1}";
  }
}`}
              output={[
                '// $alpha1 = 0.5',
                '// $alpha2 = 0.8',
                '// $alpha3 = 1',
                '.debug::before { content: "Alpha: 0.5"; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Conditional Opacity"
              code={`@function ensure-opacity($color, $min-alpha: 0.3) {
  @if alpha($color) < $min-alpha {
    @return opacify($color, $min-alpha - alpha($color));
  }
  @return $color;
}

// Usage
$light-color: rgba(#3b82f6, 0.1);
$dark-color: rgba(#3b82f6, 0.8);

.element {
  // Ensures minimum 30% opacity
  background: ensure-opacity($light-color); // Will be 0.3
}

.other {
  // Already above minimum
  background: ensure-opacity($dark-color); // Stays 0.8
}`}
              output={[
                '.element { background: rgba(59, 130, 246, 0.3); }',
                '.other { background: rgba(59, 130, 246, 0.8); }'
              ]}
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
          title="Opacity Demo"
          description="Transparency and layering"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <h1>Opacity & Transparency</h1>
  
  <div class="grid">
    <div class="card opacity-100">
      <h3>100%</h3>
      <p>Fully Opaque</p>
    </div>
    
    <div class="card opacity-75">
      <h3>75%</h3>
      <p>Mostly Visible</p>
    </div>
    
    <div class="card opacity-50">
      <h3>50%</h3>
      <p>Half Transparent</p>
    </div>
    
    <div class="card opacity-25">
      <h3>25%</h3>
      <p>Mostly Transparent</p>
    </div>
  </div>
  
  <div class="overlay-demo">
    <div class="backdrop"></div>
    <div class="content">
      <h2>Modal with Overlay</h2>
      <p>Backdrop uses rgba with 80% opacity</p>
    </div>
  </div>
</div>`}
          css={`// SCSS Color & Opacity
$primary: #3b82f6;
$dark: #1e293b;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 3rem 1.5rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  
  h1 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.card {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  h3 {
    color: $primary;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    font-size: 0.875rem;
  }
}

.opacity-100 {
  background: rgba(white, 1);
}

.opacity-75 {
  background: rgba(white, 0.75);
}

.opacity-50 {
  background: rgba(white, 0.5);
}

.opacity-25 {
  background: rgba(white, 0.25);
}

.overlay-demo {
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  
  .backdrop {
    position: absolute;
    inset: 0;
    background: rgba($dark, 0.8);
    backdrop-filter: blur(4px);
  }
  
  .content {
    position: relative;
    z-index: 10;
    background: white;
    margin: 3rem;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    
    h2 {
      color: $primary;
      margin-bottom: 1rem;
    }
    
    p {
      color: #64748b;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .card {
    background: rgba($dark, 0.9);
    
    h3 {
      color: #8b9aef;
    }
    
    p {
      color: #94a3b8;
    }
  }
  
  .overlay-demo .content {
    background: $dark;
    
    h2 {
      color: #8b9aef;
    }
    
    p {
      color: #cbd5e1;
    }
  }
}`}
          title="Opacity Gallery"
          description="Transparency levels and overlays"
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">rgba()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Set alpha directly (0 to 1)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">transparentize()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduce opacity (fade-out)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">opacify()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Increase opacity (fade-in)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">alpha()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Get alpha value (0 to 1)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
