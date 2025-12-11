'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  FileCode, 
  Sparkles, 
  Code2, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight,
  Zap,
  AlertCircle,
  Info
} from 'lucide-react';

interface SassVsScssProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassVsScssSyntax({ onOpenWebPlayground }: SassVsScssProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileCode}
        category="Sass/SCSS · Syntax Comparison"
        title="Sass vs SCSS Syntax"
        description="Understanding the differences between .sass (indented) and .scss (CSS-like) syntax, and choosing the right one for your project."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Two Syntaxes, Same Power"
            description="Choose your preferred style"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Sass offers <strong>two different syntax options</strong>: the original indented syntax (<code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">.sass</code>) and the newer SCSS syntax (<code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">.scss</code>). Both compile to the exact same CSS and have access to all the same features. The only difference is how you write your code!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Sass (.sass)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Original indented syntax - clean and minimal with no braces or semicolons
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <p>✓ Indentation-based</p>
                <p>✓ No curly braces</p>
                <p>✓ No semicolons</p>
                <p>✓ Cleaner appearance</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-pink-700 dark:text-pink-300">SCSS (.scss)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                CSS-like syntax - every valid CSS is valid SCSS with extra features
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <p>✓ Uses curly braces</p>
                <p>✓ Uses semicolons</p>
                <p>✓ CSS compatible</p>
                <p>✓ Most popular choice</p>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Recommended for Beginners</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              We recommend <strong>SCSS (.scss)</strong> for most developers because it looks just like CSS. You can copy any CSS code, save it as .scss, and it will work immediately!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Side-by-Side Syntax Comparison */}
      <div className="space-y-6">
        <TopicTitle
          icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Syntax Comparison"
          description="See the differences side by side"
          size="lg"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sass Syntax Example */}
          <Card className="border-2 border-purple-300 dark:border-purple-700">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-500">Sass Syntax</Badge>
                <span className="text-xs text-gray-600 dark:text-gray-400">.sass file</span>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-4 font-mono text-sm space-y-1 border border-purple-200 dark:border-purple-800">
                <div className="text-pink-600 dark:text-pink-400">$primary-color: #6366f1</div>
                <div className="text-pink-600 dark:text-pink-400">$spacing: 1rem</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: <span className="text-pink-600 dark:text-pink-400">$primary-color</span></div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: <span className="text-pink-600 dark:text-pink-400">$spacing</span></div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: 8px</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2">&:hover</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">opacity: 0.8</div>
              </div>

              <div className="space-y-2 text-sm">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300">Key Features:</h5>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>No curly braces <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{`{}`}</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>No semicolons <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">;</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Indentation defines structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Cleaner, more minimal look</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* SCSS Syntax Example */}
          <Card className="border-2 border-pink-300 dark:border-pink-700">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-pink-500">SCSS Syntax</Badge>
                <span className="text-xs text-gray-600 dark:text-gray-400">.scss file</span>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm space-y-1 border border-pink-200 dark:border-pink-800">
                <div className="text-pink-600 dark:text-pink-400">$primary-color: #6366f1;</div>
                <div className="text-pink-600 dark:text-pink-400">$spacing: 1rem;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: <span className="text-pink-600 dark:text-pink-400">$primary-color</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: <span className="text-pink-600 dark:text-pink-400">$spacing</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: 8px;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2">&:hover {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">opacity: 0.8;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>

              <div className="space-y-2 text-sm">
                <h5 className="font-semibold text-pink-700 dark:text-pink-300">Key Features:</h5>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Uses curly braces <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{`{}`}</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Requires semicolons <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">;</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Familiar CSS syntax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Every CSS is valid SCSS</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive SCSS Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Live SCSS Example"
          description="We use SCSS in this course"
          size="lg"
        />
        
        <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="text-blue-900 dark:text-blue-100">SCSS Throughout This Course</AlertTitle>
          <AlertDescription className="text-blue-800 dark:text-blue-200">
            All examples in this Sass/SCSS course use <strong>SCSS syntax (.scss)</strong> because it's easier to learn and more widely used in the industry.
          </AlertDescription>
        </Alert>

        <FrontendCodePreview
          html={`<div class="card">
  <div class="card-header">
    <h3>Welcome to SCSS!</h3>
    <span class="badge">New</span>
  </div>
  <div class="card-body">
    <p>SCSS syntax looks just like CSS, but with superpowers! ✨</p>
    <button class="btn btn-primary">Get Started</button>
    <button class="btn btn-secondary">Learn More</button>
  </div>
</div>`}
          css={`// Variables
$primary: #3b82f6;
$secondary: #8b5cf6;
$spacing: 1rem;
$radius: 12px;

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f8fafc;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

// Card component with nesting
.card {
  background: white;
  border-radius: $radius;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
  overflow: hidden;
  
  // Nested card header
  .card-header {
    background: linear-gradient(135deg, $primary 0%, $secondary 100%);
    padding: $spacing * 1.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    // Nested heading
    h3 {
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }
    
    // Nested badge
    .badge {
      background: rgba(255,255,255,0.2);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  }
  
  // Nested card body
  .card-body {
    padding: $spacing * 1.5;
    
    p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: $spacing * 1.5;
    }
  }
}

// Button styles
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: $radius / 2;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s;
  font-size: 0.875rem;
  
  // Nested hover state
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
}

.btn-primary {
  background: $primary;
  color: white;
  
  &:hover {
    background: #2563eb;
  }
}

.btn-secondary {
  background: white;
  color: $secondary;
  border: 2px solid $secondary;
  
  &:hover {
    background: $secondary;
    color: white;
  }
}`}
          title="SCSS in Action"
          description="This example uses SCSS features: variables, nesting, and parent selector (&)"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* When to Use Each */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Which Syntax Should You Choose?"
            description="Making the right decision"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4 text-lg">Choose Sass (.sass) if:</h4>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>You prefer a cleaner, more minimal syntax</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>You're comfortable with indentation-based languages (like Python)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>You don't need to copy/paste CSS code frequently</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Your team is already using Sass syntax</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-4 text-lg">Choose SCSS (.scss) if:</h4>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>You're already familiar with CSS syntax</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>You want to gradually adopt Sass features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>You need to use existing CSS code or libraries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>You want better tooling and IDE support</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Industry Standard</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              <strong>SCSS (.scss) is the most popular choice</strong> in the industry today. Most frameworks, libraries, and tutorials use SCSS because it's easier to learn and adopt gradually. If you're unsure, start with SCSS!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Important Things to Know"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Both Compile to the Same CSS</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Whether you use Sass or SCSS, they both compile to identical CSS output. The syntax you choose doesn't affect performance or functionality.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">You Can Mix Both (But Don't)</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Technically, you can use both .sass and .scss files in the same project, but it's not recommended. Pick one syntax and stick with it for consistency.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-pink-500">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Easy to Convert Between Them</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Sass provides built-in tools to convert between .sass and .scss formats if you ever need to switch. The conversion is usually automatic and seamless.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">All Features Work in Both</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Variables, nesting, mixins, functions, and all other Sass features work exactly the same in both syntaxes. Only the way you write them differs.
              </p>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Sass Syntax (.sass)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Indentation-based, no braces or semicolons. Cleaner look but requires learning new syntax rules.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">SCSS Syntax (.scss)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                CSS-like with braces and semicolons. Easier to learn, industry standard, recommended for most projects.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Same Features</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Both syntaxes have access to all Sass features: variables, nesting, mixins, functions, and more.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Our Recommendation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use SCSS for easier learning, better tooling support, and seamless CSS integration.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Ready to Continue?</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now that you understand the difference between Sass and SCSS, let's move on to <strong>Installation & Setup</strong> to get Sass running on your machine! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
