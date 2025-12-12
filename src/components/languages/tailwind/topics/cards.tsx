'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { LayoutGrid, Lightbulb, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Cards() {

  const cardsHTML = `<div class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-950 dark:to-slate-950 p-8">
  <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div class="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Lightning fast load times for better user experience.</p>
      <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Learn more →</a>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div class="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Customizable</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Fully customizable to match your brand identity.</p>
      <a href="#" class="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium">Learn more →</a>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div class="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Built with security best practices in mind.</p>
      <a href="#" class="text-green-600 dark:text-green-400 hover:underline text-sm font-medium">Learn more →</a>
    </div>
  </div>
</div>`;

  const imageCardHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div class="h-48 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
      <div class="p-6">
        <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Technology</span>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">Card with Image</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Beautiful card design with image header and content section.</p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-500">5 min read</span>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">Read More</button>
        </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div class="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      <div class="p-6">
        <span class="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Design</span>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">Beautiful Layout</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Clean and modern card design with gradient placeholder.</p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-500">3 min read</span>
          <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const horizontalHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="max-w-3xl mx-auto space-y-4">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-green-400 to-emerald-500"></div>
        <div class="p-6 flex-1">
          <span class="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">Featured</span>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">Horizontal Card Layout</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Perfect for list views and blog posts. Stacks vertically on mobile.</p>
          <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">View Details</button>
        </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-blue-400 to-cyan-500"></div>
        <div class="p-6 flex-1">
          <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">New</span>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">Another Card</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Flexible layout that works great for various content types.</p>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">View Details</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const statsHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2.5K</div>
      <div class="text-gray-600 dark:text-gray-400 font-medium">Users</div>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">15K</div>
      <div class="text-gray-600 dark:text-gray-400 font-medium">Downloads</div>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <div class="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">98%</div>
      <div class="text-gray-600 dark:text-gray-400 font-medium">Satisfaction</div>
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
      <div class="text-gray-600 dark:text-gray-400 font-medium">Support</div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={LayoutGrid}
        category="Tailwind CSS · Forms & UI Components"
        title="Card Components"
        description="Building beautiful card layouts with Tailwind CSS"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <LayoutGrid className="w-8 h-8 text-white" />
            </div>
            Feature Cards
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Hover Effects</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Add <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">hover:shadow-xl hover:-translate-y-1</code> for interactive cards
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={cardsHTML}
            title="Card Grid"
            description="Responsive feature cards with icons"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            Image Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={imageCardHTML}
            title="Cards with Images"
            description="Blog-style cards with image headers"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            Horizontal Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={horizontalHTML}
            title="Horizontal Layout"
            description="Side-by-side image and content"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            Stat Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={statsHTML}
            title="Statistics Cards"
            description="Showcase numbers and metrics"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <LayoutGrid className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Card Design Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">rounded-xl</code> for modern card appearance</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">shadow-lg hover:shadow-xl</code> for depth</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">overflow-hidden</code> for image cards</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Grid layouts: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">grid md:grid-cols-3 gap-6</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
