'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Menu, Lightbulb, ArrowRight, ChevronRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Navigation() {

  const navHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <nav class="bg-white dark:bg-slate-800 rounded-xl shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-8">
          <div class="text-xl font-bold text-indigo-600 dark:text-indigo-400">Brand</div>
          <div class="hidden md:flex gap-1">
            <a href="#" class="px-3 py-2 text-white bg-indigo-600 rounded-lg font-medium">Home</a>
            <a href="#" class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">About</a>
            <a href="#" class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">Services</a>
            <a href="#" class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">Contact</a>
          </div>
        </div>
        <button class="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  </nav>
</div>`;

  const sidebarHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="flex gap-6 max-w-4xl mx-auto">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 h-fit">
      <div class="space-y-2">
        <a href="#" class="flex items-center gap-3 px-3 py-2 bg-blue-500 text-white rounded-lg">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          <span class="font-medium">Dashboard</span>
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          <span class="font-medium">Analytics</span>
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span class="font-medium">Settings</span>
        </a>
      </div>
    </aside>
    
    <!-- Content -->
    <main class="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Main Content</h2>
      <p class="text-gray-600 dark:text-gray-400">Sidebar navigation with active state</p>
    </main>
  </div>
</div>`;

  const tabsHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
    <div class="flex border-b border-gray-200 dark:border-gray-700 mb-6">
      <button class="px-4 py-2 text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 font-medium">Overview</button>
      <button class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition">Details</button>
      <button class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition">Settings</button>
    </div>
    <div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Overview Tab</h3>
      <p class="text-gray-600 dark:text-gray-400">Tab navigation with active indicator</p>
    </div>
  </div>
</div>`;

  const breadcrumbsHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
    <nav class="flex items-center gap-2 text-sm mb-6">
      <a href="#" class="text-green-600 dark:text-green-400 hover:underline">Home</a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      <a href="#" class="text-green-600 dark:text-green-400 hover:underline">Products</a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      <span class="text-gray-600 dark:text-gray-400">Current Page</span>
    </nav>
    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Breadcrumb Navigation</h2>
    <p class="text-gray-600 dark:text-gray-400 mt-2">Shows the current page location in the site hierarchy</p>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Menu}
        category="Tailwind CSS · Forms & UI Components"
        title="Navigation"
        description="Building responsive navigation bars, sidebars, tabs, and breadcrumbs"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <Menu className="w-8 h-8 text-white" />
            </div>
            Header Navigation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Active States</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Show which page is active with different background colors or border indicators
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={navHTML}
            title="Horizontal Navigation"
            description="Desktop menu with active state and mobile hamburger"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Menu className="w-6 h-6 text-white" />
            </div>
            Sidebar Navigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={sidebarHTML}
            title="Vertical Sidebar"
            description="Dashboard-style sidebar with icons"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Menu className="w-6 h-6 text-white" />
            </div>
            Tab Navigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={tabsHTML}
            title="Tabs"
            description="Content tabs with bottom border indicator"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
            Breadcrumbs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={breadcrumbsHTML}
            title="Breadcrumb Trail"
            description="Hierarchical navigation path"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gray-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Navigation Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { pattern: 'Active State', code: 'bg-indigo-600 text-white', desc: 'Highlight current page' },
              { pattern: 'Hover Effect', code: 'hover:bg-gray-100 transition', desc: 'Interactive feedback' },
              { pattern: 'Mobile Menu', code: 'hidden md:flex', desc: 'Show/hide on breakpoints' },
              { pattern: 'Sticky Nav', code: 'sticky top-0 z-50', desc: 'Keep nav visible on scroll' },
              { pattern: 'Dropdown', code: 'group-hover:block hidden', desc: 'Show submenu on hover' },
              { pattern: 'Icons', code: 'flex items-center gap-2', desc: 'Add icons to links' }
            ].map(item => (
              <div key={item.pattern} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.pattern}</h4>
                <code className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded block mb-2">{item.code}</code>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <Menu className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Navigation Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always indicate the active/current page clearly</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">hidden md:flex</code> for responsive navigation</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">transition</code> for smooth hover effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consider using <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">sticky top-0</code> for persistent navigation</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
