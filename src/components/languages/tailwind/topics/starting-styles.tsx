'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FrontendCodePreview } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Play, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const startingStyleExampleHTML = `
<style>
  @starting-style {
    .starting-screen {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  .starting-screen {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
</style>

<div class="min-h-[320px] flex items-center justify-center bg-slate-950 text-white p-8">
  <div class="starting-screen rounded-3xl border border-white/20 bg-gradient-to-br from-emerald-500/70 to-lime-500/60 shadow-2xl p-6 text-center space-y-2">
    <p class="text-xs uppercase tracking-[0.5em] text-white/70 ">Entry animation</p>
    <h3 class="text-2xl font-semibold">@starting-style smooth behavior</h3>
    <p class="text-sm text-white/80">
      Tailwind transition classes keep the final state in sync with the CSS starting-style.
    </p>
    <div class="flex justify-center gap-2 mt-3">
      <span class="px-3 py-1 rounded-full bg-white/20 text-xs">transition-all</span>
      <span class="px-3 py-1 rounded-full bg-white/20 text-xs">duration-500</span>
    </div>
  </div>
</div>
`;

export default function StartingStyles() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Play}
        category="Tailwind CSS · Variants & Modifiers"
        title="Starting Styles"
        description="@starting-style for transition-from utilities (Tailwind 3.4+)"
        colorTheme="lime"
      />

      <Card className="border-2 border-lime-200 dark:border-lime-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl">
              <Play className="w-8 h-8 text-white" />
            </div>
            Starting Styles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-lime-200 dark:border-lime-800 bg-lime-50 dark:bg-lime-950/20">
            <Lightbulb className="w-5 h-5 text-lime-600" />
            <AlertTitle className="text-lime-900 dark:text-lime-100">Entry Animations (Tailwind 3.4+)</AlertTitle>
            <AlertDescription className="text-lime-800 dark:text-lime-200">
              Define starting state for elements entering the DOM
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is @starting-style?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              CSS @starting-style lets you define the initial state of an element before it transitions 
              to its final state, enabling smooth entry animations for elements appearing in the DOM.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Traditional Problem:</h4>
            <p className="text-sm text-green-700 dark:text-green-300 mb-2">
              When elements are added to the DOM, they instantly appear with their final styles. 
              Transitions don't work because there's no "before" state.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">@starting-style Solution:</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              Defines the initial state before the element transitions to its final state, 
              enabling smooth entry animations.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-emerald-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Example Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`/* In your CSS */
@starting-style {
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
  }
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}`}
          </pre>

          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- In your HTML -->
<div class="fade-in">
  This element will fade in smoothly!
</div>`}
          </pre>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            Starting Styles Demo
          </CardTitle>
          <CardDescription>
            Combines @starting-style with Tailwind transition utilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={startingStyleExampleHTML}
            title="Smooth entry animation"
            description="Use @starting-style to set the pre-transition state, then rely on Tailwind utilities for the final animation."
            colorTheme="lime"
            styleLanguage="css"
            previewHeight="420px"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                pattern: 'Fade In',
                starting: 'opacity: 0',
                final: 'opacity: 1',
                transition: 'transition-opacity'
              },
              {
                pattern: 'Slide In (Top)',
                starting: 'transform: translateY(-20px)',
                final: 'transform: translateY(0)',
                transition: 'transition-transform'
              },
              {
                pattern: 'Slide In (Left)',
                starting: 'transform: translateX(-20px)',
                final: 'transform: translateX(0)',
                transition: 'transition-transform'
              },
              {
                pattern: 'Scale In',
                starting: 'transform: scale(0.9)',
                final: 'transform: scale(1)',
                transition: 'transition-transform'
              }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">{item.pattern}</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded">
                    <span className="font-bold">Starting:</span> {item.starting}
                  </div>
                  <div className="bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded">
                    <span className="font-bold">Final:</span> {item.final}
                  </div>
                </div>
                <p className="text-xs text-teal-700 dark:text-teal-300 mt-2">+ {item.transition}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            Browser Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Modern Feature</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <div className="space-y-2 mt-2">
                <p>✅ Chrome 117+</p>
                <p>✅ Edge 117+</p>
                <p>⚠️ Firefox (in development)</p>
                <p>⚠️ Safari (in development)</p>
                <p className="text-sm mt-3">Progressive enhancement - degrades gracefully</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="border-2 border-lime-200 dark:border-lime-800 bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20">
        <Play className="w-5 h-5 text-lime-600" />
        <AlertTitle className="text-2xl text-lime-900 dark:text-lime-100">Starting Styles Tips</AlertTitle>
        <AlertDescription className="text-lime-800 dark:text-lime-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for modal/dialog entry animations</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works with dynamically added elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Requires transition properties to work</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Check browser support before using in production</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
