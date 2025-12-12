'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Play, Lightbulb, ArrowRight, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TailwindPlay() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Play}
        category="Tailwind CSS · Tooling"
        title="Tailwind Play"
        description="Official online playground"
        colorTheme="pink"
      />

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Play className="w-8 h-8 text-white" />
            </div>
            Tailwind Play
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
            <Lightbulb className="w-5 h-5 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Instant Experimentation</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Try Tailwind CSS in the browser with no setup required
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is Tailwind Play?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tailwind Play is the official online playground where you can experiment 
              with Tailwind CSS directly in your browser. No installation, configuration, 
              or build process needed!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-rose-500 rounded-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { feature: 'Live Preview', desc: 'See changes instantly as you type' },
              { feature: 'Full Tailwind', desc: 'Complete Tailwind CSS available' },
              { feature: 'Config Customization', desc: 'Customize your tailwind.config.js' },
              { feature: 'Share Links', desc: 'Share your experiments with others' },
              { feature: 'Dark Mode Support', desc: 'Toggle dark mode with one click' },
              { feature: 'Responsive Design', desc: 'Test different screen sizes' }
            ].map((item, i) => (
              <div key={i} className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-3 border border-rose-200 dark:border-rose-800">
                <h4 className="font-bold text-rose-900 dark:text-rose-100 text-sm mb-1">{item.feature}</h4>
                <p className="text-xs text-rose-700 dark:text-rose-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { use: 'Quick Prototyping', desc: 'Test ideas without setting up a project' },
              { use: 'Learning Tailwind', desc: 'Experiment with different utilities' },
              { use: 'Sharing Examples', desc: 'Share code examples with team/community' },
              { use: 'Bug Reports', desc: 'Create reproducible examples for issues' },
              { use: 'Testing Configurations', desc: 'Try custom config settings' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800 flex items-start gap-2">
                <span className="text-lg">→</span>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 text-sm mb-1">{item.use}</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            Getting Started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">How to Use:</h4>
            <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-200 mb-4">
              <li>1. Visit play.tailwindcss.com</li>
              <li>2. Start typing HTML in the editor</li>
              <li>3. Add Tailwind classes to elements</li>
              <li>4. See changes live in the preview</li>
              <li>5. Click "Share" to get a shareable link</li>
            </ol>
            <button 
              onClick={() => window.open('https://play.tailwindcss.com', '_blank')}
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open Tailwind Play
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Pro Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { tip: 'Use Keyboard Shortcuts', desc: 'Cmd/Ctrl+S to save, Cmd/Ctrl+K for search' },
              { tip: 'Customize Config', desc: 'Click "Config" to modify tailwind.config.js' },
              { tip: 'Toggle Dark Mode', desc: 'Test dark mode classes with the theme toggle' },
              { tip: 'Responsive Preview', desc: 'Resize the preview pane to test breakpoints' },
              { tip: 'Share Examples', desc: 'Use share link for bug reports or questions' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.tip}</h4>
                <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
        <Play className="w-5 h-5 text-pink-600" />
        <AlertTitle className="text-2xl text-pink-900 dark:text-pink-100">Tailwind Play Tips</AlertTitle>
        <AlertDescription className="text-pink-800 dark:text-pink-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for quick experiments and prototyping</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>No setup required - works instantly in browser</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great for sharing examples and bug reports</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Try custom configs before adding to your project</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
