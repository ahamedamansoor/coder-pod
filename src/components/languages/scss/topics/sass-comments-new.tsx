'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  MessageSquare, 
  FileCode, 
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Code2,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';

interface SassCommentsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCommentsNew({ onOpenWebPlayground }: SassCommentsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={MessageSquare}
        category="Sass/SCSS · Fundamentals"
        title="Comments in SCSS"
        description="Learn how to add comments to your SCSS code. Understand the difference between single-line comments that are removed during compilation and multi-line comments that can appear in the CSS output."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<MessageSquare className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Why Use Comments?"
            description="Document your code for better maintainability"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Comments help you and other developers understand your code. In SCSS, there are <strong>two types of comments</strong> with different behaviors during compilation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <EyeOff className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Silent Comments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded text-xs">// Single-line</code>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Removed during compilation - never appear in CSS output
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-pink-700 dark:text-pink-300">Loud Comments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded text-xs">/* Multi-line */</code>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can appear in compiled CSS output (unless compressed)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Single-Line Comments */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Single-Line Comments (Silent)"
            description="Use // for comments that won't appear in CSS"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Single-line comments start with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">//</code> and extend to the end of the line. These are <strong>SCSS-only</strong> comments that are <strong>completely removed</strong> during compilation.
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <EyeOff className="w-5 h-5" />
                Silent Comments (Removed from CSS)
              </h5>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-sm border border-blue-200 dark:border-blue-800 space-y-1">
                <div className="text-green-600 dark:text-green-400">// This is a single-line comment</div>
                <div className="text-green-600 dark:text-green-400">// It won't appear in the compiled CSS</div>
                <div className="text-gray-700 dark:text-gray-300 mt-3">$primary: #3b82f6; <span className="text-green-600 dark:text-green-400">// Define primary color</span></div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4">// Apply primary color to button</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: $primary;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Best for Development Notes</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Use <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">//</code> for notes, explanations, and TODOs that you don't want in the final CSS.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Multi-Line Comments */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Multi-Line Comments (Loud)"
            description="Use /* */ for comments that can appear in CSS"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Multi-line comments start with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/*</code> and end with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">*/</code>. These can <strong>appear in the compiled CSS</strong> (unless using compressed style).
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Loud Comments (Appear in CSS)
              </h5>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                <div className="text-purple-600 dark:text-purple-400">/* Main stylesheet */</div>
                <div className="text-purple-600 dark:text-purple-400">/* Author: Your Name */</div>
                <div className="text-gray-700 dark:text-gray-300 mt-3">.header {'{'}</div>
                <div className="text-purple-600 dark:text-purple-400 ml-4">/* Header styling */</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 2rem;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-3">/* Utility classes below */</div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Best for Copyright & Attribution</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Use <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">/* */</code> for copyright notices, licenses, or important information that should remain in CSS.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Comments in Action"
          description="See how comments work in compiled CSS"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="demo-card">
  <h2>Comments Demo</h2>
  <p>Check the SCSS to see both comment types!</p>
  <button class="btn">Click Me</button>
</div>`}
          css={`/* 
 * Demo Stylesheet
 * Shows both comment types
 */

// Base reset (this won't appear in CSS)
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
  
  // Dark mode support
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

// Variables (these comments are removed)
$card-bg: white;
$card-bg-dark: #1e293b;
$primary: #3b82f6;
$text-color: #1e293b;
$text-color-muted: #64748b;
$text-color-dark: #e2e8f0;
$text-color-muted-dark: #94a3b8;
$radius: 12px;

/* Main card component */
.demo-card {
  background: $card-bg;
  padding: 2rem;
  border-radius: $radius;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
  
  // Dark mode for card
  @media (prefers-color-scheme: dark) {
    background: $card-bg-dark;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  
  h2 {
    // This is the heading (hidden comment)
    color: $primary;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    
    // Dark mode heading
    @media (prefers-color-scheme: dark) {
      color: #60a5fa;
    }
  }
  
  p {
    // Paragraph styling (hidden comment)
    color: $text-color-muted;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    
    // Dark mode text
    @media (prefers-color-scheme: dark) {
      color: $text-color-muted-dark;
    }
  }
}

/* Button styles */
.btn {
  // Base button (hidden comment)
  background: $primary;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: $radius / 2;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  // Dark mode button
  @media (prefers-color-scheme: dark) {
    background: #60a5fa;
  }
  
  // Hover effect (hidden comment)
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
    
    // Dark mode hover
    @media (prefers-color-scheme: dark) {
      background: #3b82f6;
      box-shadow: 0 6px 16px rgba(96, 165, 250, 0.4);
    }
  }
}`}
          title="Comments Example"
          description="Silent comments (//) are removed, loud comments (/* */) remain in CSS"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Comment Comparison */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Compilation Behavior"
            description="What happens to comments when SCSS compiles to CSS"
            size="lg"
          />

          <div className="space-y-6">
            {/* SCSS Input */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">SCSS Input</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Before Compilation</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// This is a silent comment</div>
                  <div className="text-purple-600 dark:text-purple-400">/* This is a loud comment */</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                  <div className="text-green-600 dark:text-green-400 ml-4">// Button styling</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* CSS Output (Expanded) */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-500">CSS Output (Expanded)</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300">After Compilation</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-sm border border-blue-200 dark:border-blue-800 space-y-1">
                  <div className="text-purple-600 dark:text-purple-400">/* This is a loud comment */</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: #3b82f6;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-3">
                  ✓ Silent comments removed<br/>
                  ✓ Loud comments preserved
                </p>
              </div>
            </div>

            {/* CSS Output (Compressed) */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">CSS Output (Compressed)</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300">Production Build</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800">
                  <div className="text-gray-700 dark:text-gray-300">.button{'{'}background:#3b82f6{'}'}</div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-3">
                  ✓ All comments removed (even loud ones)<br/>
                  ✓ Smallest file size
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Best Practices"
            description="How to use comments effectively"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-bold text-green-700 dark:text-green-300 text-lg">✅ Do This</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Use // for development notes</p>
                <div className="font-mono text-xs text-green-800 dark:text-green-200">
                  // TODO: Update colors<br/>
                  // BUG: Fix spacing issue
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Use /* */ for copyright</p>
                <div className="font-mono text-xs text-green-800 dark:text-green-200">
                  /* © 2024 Company Name */<br/>
                  /* License: MIT */
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Document complex code</p>
                <div className="font-mono text-xs text-green-800 dark:text-green-200">
                  // Calculate responsive spacing<br/>
                  $spacing: calc(1rem + 2vw);
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-red-700 dark:text-red-300 text-lg">❌ Avoid This</h5>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">Over-commenting obvious code</p>
                <div className="font-mono text-xs text-red-800 dark:text-red-200">
                  // Set color to blue<br/>
                  color: blue; // Bad!
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">Leaving commented-out code</p>
                <div className="font-mono text-xs text-red-800 dark:text-red-200">
                  // color: red;<br/>
                  // padding: 1rem;<br/>
                  // Delete old code!
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">Using /* */ for temp notes</p>
                <div className="font-mono text-xs text-red-800 dark:text-red-200">
                  /* temporary fix */<br/>
                  /* Use // instead */
                </div>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">// Single-Line</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Silent comments - removed from CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">/* Multi-Line */</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Loud comments - can appear in CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Development</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use // for notes and explanations
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compressed mode removes all comments
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Variables!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now that you know how to document your code, learn about <strong>variables</strong> to make your SCSS reusable and maintainable! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
