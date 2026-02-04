'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Wind, Code2, Zap, Sparkles, CheckCircle, BookOpen, Lightbulb, ArrowRight, FileCode, Palette, Layout } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function IntroductionToTailwind() {

  // Simple Button Example
  const simpleButtonHTML = `<!DOCTYPE html>
<html class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: #0f172a;
      color: #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }
  </style>
</head>
<body>
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
    Click Me!
  </button>
</body>
</html>`;

  // Card Example
  const cardExampleHTML = `<!DOCTYPE html>
<html class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: #0f172a;
      color: #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }
  </style>
</head>
<body>
  <div class="bg-slate-800 rounded-xl shadow-lg p-6 max-w-sm border border-slate-600">
    <h3 class="text-xl font-bold text-white mb-2">Beautiful Card</h3>
    <p class="text-slate-300">This card was created with just utility classes!</p>
  </div>
</body>
</html>`;

  // Layout Example
  const layoutExampleHTML = `<!DOCTYPE html>
<html class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: #0f172a;
      color: #e2e8f0;
      min-height: 200px;
    }
  </style>
</head>
<body>
  <div class="flex items-center justify-center gap-4 p-8">
    <div class="bg-blue-500 text-white p-4 rounded">Box 1</div>
    <div class="bg-green-500 text-white p-4 rounded">Box 2</div>
    <div class="bg-purple-500 text-white p-4 rounded">Box 3</div>
  </div>
</body>
</html>`;

  // Responsive Example
  const responsiveHTML = `<!DOCTYPE html>
<html class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: #0f172a;
      color: #e2e8f0;
      min-height: 200px;
    }
  </style>
</head>
<body>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <div class="bg-cyan-500 text-white p-6 rounded-lg text-center">
      <p class="font-semibold">1 column on mobile</p>
    </div>
    <div class="bg-blue-500 text-white p-6 rounded-lg text-center">
      <p class="font-semibold">2 columns on tablet</p>
    </div>
    <div class="bg-violet-500 text-white p-6 rounded-lg text-center">
      <p class="font-semibold">3 columns on desktop</p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Wind}
        category="Tailwind CSS · Fundamentals"
        title="Introduction to Tailwind CSS"
        description="Learn the utility-first CSS framework that's changing how we build websites"
        colorTheme="cyan"
      />

      {/* WHAT IS TAILWIND? */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Wind className="w-8 h-8 text-white" />
            </div>
            What is Tailwind CSS?
          </CardTitle>
          <CardDescription className="text-base">
            A completely different way to write CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Simple Explanation */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
            <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-3">
              ✨ The Simple Explanation
            </h3>
            <p className="text-lg text-cyan-800 dark:text-cyan-200 leading-relaxed">
              Instead of writing CSS in a separate file, Tailwind lets you style elements using pre-built class names directly in your HTML. 
              It's like having thousands of tiny CSS rules ready to use!
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Way */}
            <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Traditional Way</h4>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-600 dark:text-red-400 font-semibold mb-1">HTML:</p>
                  <div className="bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs">
                    &lt;button class="my-button"&gt;Click&lt;/button&gt;
                  </div>
                </div>
                
                <div>
                  <p className="text-red-600 dark:text-red-400 font-semibold mb-1">CSS (separate file):</p>
                  <div className="bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs text-red-600 dark:text-red-400">
                    .my-button {'{'}<br/>
                    &nbsp;&nbsp;background: blue;<br/>
                    &nbsp;&nbsp;color: white;<br/>
                    &nbsp;&nbsp;padding: 12px 24px;<br/>
                    &nbsp;&nbsp;border-radius: 8px;<br/>
                    {'}'}
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-red-600 dark:text-red-400 mt-3">
                😓 Switch between 2 files, think of class names, write lots of code
              </p>
            </div>

            {/* Tailwind Way */}
            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="font-bold text-green-700 dark:text-green-300">✅ Tailwind Way</h4>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-1">HTML only:</p>
                  <div className="bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs text-green-600 dark:text-green-400">
                    &lt;button class="bg-blue-500 text-white px-6 py-3 rounded-lg"&gt;Click&lt;/button&gt;
                  </div>
                </div>
                
                <div className="bg-green-100 dark:bg-green-900/30 rounded p-3">
                  <p className="text-green-700 dark:text-green-300 font-semibold text-xs">
                    🎉 That's it! No CSS file needed!
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                😊 One file, no naming, instant styling, super fast!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HOW IT WORKS */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            How Does It Work?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding utility classes in 3 simple steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                1
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-xl p-6 pt-8 border-2 border-cyan-300 dark:border-cyan-700 h-full">
                <FileCode className="w-12 h-12 text-cyan-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-cyan-900 dark:text-cyan-100">Use Classes</h4>
                <p className="text-sm text-cyan-800 dark:text-cyan-200">
                  Add utility classes directly in your HTML. Each class does one specific thing.
                </p>
                <div className="mt-3 bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs">
                  <span className="text-blue-600">bg-blue-500</span> = blue background<br/>
                  <span className="text-blue-600">px-6</span> = padding horizontal<br/>
                  <span className="text-blue-600">rounded</span> = rounded corners
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                2
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl p-6 pt-8 border-2 border-blue-300 dark:border-blue-700 h-full">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-100">Combine Them</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Mix multiple utility classes together to create any design you want.
                </p>
                <div className="mt-3 bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs">
                  class="<span className="text-green-600">bg-blue-500 text-white px-6 py-3 rounded-lg</span>"
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                3
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/30 dark:to-violet-900/30 rounded-xl p-6 pt-8 border-2 border-violet-300 dark:border-violet-700 h-full">
                <Sparkles className="w-12 h-12 text-violet-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-violet-900 dark:text-violet-100">See Results!</h4>
                <p className="text-sm text-violet-800 dark:text-violet-200">
                  Your element is instantly styled! No CSS file, no extra steps needed.
                </p>
                <div className="mt-3 flex justify-center">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors cursor-pointer">
                    ✨ Styled!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-2">
                  <Code2 className="w-8 h-8 text-cyan-600" />
                </div>
                <p className="text-sm font-semibold">Write HTML</p>
              </div>
              <ArrowRight className="w-8 h-8 text-blue-500" />
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold">Add Classes</p>
              </div>
              <ArrowRight className="w-8 h-8 text-violet-500" />
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center mb-2">
                  <Sparkles className="w-8 h-8 text-violet-600" />
                </div>
                <p className="text-sm font-semibold">Done!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* UNDERSTANDING UTILITY CLASSES */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            Understanding Utility Classes
          </CardTitle>
          <CardDescription className="text-base">
            Each class does one thing - and does it well
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Key Concept</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Utility classes are small, single-purpose classes. Instead of <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">.button</code>, 
              you use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">bg-blue-500 px-6 py-3 rounded</code> - each handling one style property!
            </AlertDescription>
          </Alert>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Colors */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">🎨 Colors</h4>
              <div className="space-y-1 text-xs font-mono">
                <div className="bg-blue-500 text-white px-2 py-1 rounded">bg-blue-500</div>
                <div className="bg-green-500 text-white px-2 py-1 rounded">bg-green-500</div>
                <div className="bg-purple-500 text-white px-2 py-1 rounded">bg-purple-500</div>
              </div>
            </div>

            {/* Spacing */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">📏 Spacing</h4>
              <div className="space-y-1 text-xs font-mono text-blue-700 dark:text-blue-300">
                <div>p-4 = padding: 1rem</div>
                <div>m-2 = margin: 0.5rem</div>
                <div>px-6 = padding x-axis</div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✏️ Typography</h4>
              <div className="space-y-1 text-xs text-green-700 dark:text-green-300">
                <div className="text-xl font-bold">text-xl font-bold</div>
                <div className="text-sm">text-sm</div>
                <div className="italic">italic</div>
              </div>
            </div>

            {/* Layout */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">📦 Layout</h4>
              <div className="space-y-1 text-xs font-mono text-purple-700 dark:text-purple-300">
                <div>flex = display: flex</div>
                <div>grid = display: grid</div>
                <div>rounded = border-radius</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LIVE EXAMPLES */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
              <Layout className="w-8 h-8 text-white" />
            </div>
            Try It Yourself!
          </CardTitle>
          <CardDescription className="text-base">
            See live examples and play with the code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Example 1: Simple Button */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-cyan-500">Example 1</Badge>
              Simple Button
            </h3>
            <FrontendCodePreview
              html={simpleButtonHTML}
              title="Button with Tailwind"
              description="Just add classes - no CSS file needed!"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>

          {/* Example 2: Card */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-blue-500">Example 2</Badge>
              Beautiful Card
            </h3>
            <FrontendCodePreview
              html={cardExampleHTML}
              title="Card Component"
              description="Create stunning cards with utility classes"
              colorTheme="blue"
              styleLanguage="tailwind"
            />
          </div>

          {/* Example 3: Layout */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-purple-500">Example 3</Badge>
              Flexbox Layout
            </h3>
            <FrontendCodePreview
              html={layoutExampleHTML}
              title="Flexbox Layout"
              description="Build layouts without writing CSS"
              colorTheme="purple"
              styleLanguage="tailwind"
            />
          </div>

          {/* Example 4: Responsive */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-violet-500">Example 4</Badge>
              Responsive Design
            </h3>
            <FrontendCodePreview
              html={responsiveHTML}
              title="Responsive Grid"
              description="Mobile-first responsive design without media queries!"
              colorTheme="violet"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* KEY BENEFITS */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            Why Developers Love Tailwind
          </CardTitle>
          <CardDescription className="text-base">
            The advantages that make it so popular
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-green-900 dark:text-green-100 mb-2">⚡ Super Fast Development</h4>
                  <p className="text-green-800 dark:text-green-200">
                    No more switching between files or thinking of class names. Just add classes and see instant results!
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">📦 Tiny File Sizes</h4>
                  <p className="text-blue-800 dark:text-blue-200">
                    Tailwind removes unused styles in production. Your final CSS is usually under 10KB!
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-2">🎨 Consistent Design</h4>
                  <p className="text-purple-800 dark:text-purple-200">
                    Built-in design system with spacing, colors, and typography. Your designs stay consistent automatically!
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-2">🚀 Easy Maintenance</h4>
                  <p className="text-orange-800 dark:text-orange-200">
                    All styles are in your HTML. Delete a component and its styles disappear with it. No orphaned CSS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GETTING STARTED */}
      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Sparkles className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Ready to Start?</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-3">
          <p className="text-base">
            You can start using Tailwind in seconds! Just add this to your HTML with dark mode:
          </p>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 font-mono text-sm text-green-400">
            &lt;!DOCTYPE html&gt;<br/>
            &lt;html class="dark"&gt;<br/>
            &lt;head&gt;<br/>
            &nbsp;&nbsp;&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;<br/>
            &lt;/head&gt;<br/>
            &lt;body&gt;<br/>
            &nbsp;&nbsp;&lt;!-- Your content here --&gt;<br/>
            &lt;/body&gt;<br/>
            &lt;/html&gt;
          </div>
          <p className="text-sm">
            💡 <strong>Pro Tip:</strong> Use the CDN for learning and prototyping. For production apps, install via npm for better performance!
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
