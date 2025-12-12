'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MousePointer, CheckCircle, Lightbulb, ArrowRight, Focus } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function HoverFocusStates() {

  const hoverHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
    Hover Me!
  </button>
  
  <button class="bg-green-500 hover:bg-green-600 hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition transform">
    Hover Scale
  </button>
  
  <button class="bg-purple-500 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition">
    Hover Shadow
  </button>
</div>`;

  const focusHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-4">
  <input 
    type="text" 
    placeholder="Click me (focus)" 
    class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
  />
  
  <input 
    type="email" 
    placeholder="Email with focus ring" 
    class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
  />
</div>`;

  const cardHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition transform cursor-pointer">
      <div class="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Card 1</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover for lift effect</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition transform cursor-pointer">
      <div class="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Card 2</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover for lift effect</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition transform cursor-pointer">
      <div class="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Card 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover for lift effect</p>
    </div>
  </div>
</div>`;

  const groupHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition cursor-pointer">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 bg-orange-500 rounded-full group-hover:scale-110 transition"></div>
      <div>
        <h3 class="font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition">
          Group Hover
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Hover parent to affect children
        </p>
      </div>
      <div class="ml-auto text-gray-400 group-hover:text-orange-500 group-hover:translate-x-2 transition">
        →
      </div>
    </div>
  </div>
</div>`;

  const linkHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="bg-white dark:bg-slate-800 rounded-xl p-8 space-y-4">
    <a href="#" class="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition">
      Regular Link
    </a>
    
    <a href="#" class="block text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-800 dark:hover:text-purple-300 hover:pl-2 transition">
      Link with Slide →
    </a>
    
    <button class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition">
      Gradient Button
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointer}
        category="Tailwind CSS · Effects & Interactivity"
        title="Hover & Focus States"
        description="Add interactive feedback to elements"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <MousePointer className="w-8 h-8 text-white" />
            </div>
            Hover States
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Hover Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">hover:</code> before any utility: 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">hover:bg-blue-600</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={hoverHTML}
            title="Hover Effects"
            description="Hover over buttons to see effects"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Focus className="w-6 h-6 text-white" />
            </div>
            Focus States
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={focusHTML}
            title="Focus Rings"
            description="Click inputs to see focus effects"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Interactive Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardHTML}
            title="Hover Cards"
            description="Cards lift up on hover"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <MousePointer className="w-6 h-6 text-white" />
            </div>
            Group Hover
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={groupHTML}
            title="Parent-Child Hover"
            description="Hover parent affects children"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Links & Buttons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={linkHTML}
            title="Interactive Elements"
            description="Various hover effects"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            State Modifiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { state: 'hover:', desc: 'Mouse over' },
              { state: 'focus:', desc: 'Element focused' },
              { state: 'active:', desc: 'Being clicked' },
              { state: 'disabled:', desc: 'Disabled state' },
              { state: 'group-hover:', desc: 'Parent hovered' },
              { state: 'focus-within:', desc: 'Child focused' }
            ].map(item => (
              <div key={item.state} className="bg-pink-100 dark:bg-pink-900/30 rounded-lg p-4 border border-pink-300 dark:border-pink-700">
                <div className="font-mono font-bold text-pink-900 dark:text-pink-100">
                  {item.state}
                </div>
                <div className="text-sm text-pink-700 dark:text-pink-300 mt-1">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <MousePointer className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Interaction Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition</code> for smooth effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">focus:ring</code> for accessibility</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Group hover: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">group</code> on parent, <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">group-hover:</code> on child</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
