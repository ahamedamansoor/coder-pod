'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Grid3x3, CheckCircle, Lightbulb, ArrowRight, LayoutGrid } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function GridLayout() {

  const basicGridHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">1</div>
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">2</div>
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">3</div>
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">4</div>
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">5</div>
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">6</div>
  </div>
</div>`;

  const responsiveGridHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 1</p>
      <p class="text-xs mt-1">1→2→4 cols</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 2</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 3</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 4</p>
    </div>
  </div>
</div>`;

  const spanHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2 bg-green-500 text-white p-6 rounded text-center font-semibold">
      col-span-2
    </div>
    <div class="bg-green-500 text-white p-6 rounded text-center font-semibold">1</div>
    <div class="bg-green-500 text-white p-6 rounded text-center font-semibold">2</div>
    <div class="bg-green-500 text-white p-6 rounded text-center font-semibold">3</div>
    <div class="col-span-3 bg-green-500 text-white p-6 rounded text-center font-semibold">
      col-span-3
    </div>
  </div>
</div>`;

  const rowsHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="grid grid-cols-3 grid-rows-3 gap-4 h-80">
    <div class="row-span-3 bg-orange-500 text-white p-6 rounded flex items-center justify-center font-semibold">
      row-span-3
    </div>
    <div class="bg-orange-500 text-white p-6 rounded flex items-center justify-center">1</div>
    <div class="bg-orange-500 text-white p-6 rounded flex items-center justify-center">2</div>
    <div class="row-span-2 bg-orange-500 text-white p-6 rounded flex items-center justify-center font-semibold">
      row-span-2
    </div>
    <div class="bg-orange-500 text-white p-6 rounded flex items-center justify-center">3</div>
    <div class="bg-orange-500 text-white p-6 rounded flex items-center justify-center">4</div>
  </div>
</div>`;

  const dashboardHTML = `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-lg">
  <!-- Sidebar -->
  <div class="md:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-6">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4">Menu</h3>
    <div class="space-y-2">
      <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded text-blue-700 dark:text-blue-300">Dashboard</div>
      <div class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-400 cursor-pointer">Profile</div>
      <div class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-400 cursor-pointer">Settings</div>
    </div>
  </div>
  
  <!-- Main Content -->
  <div class="md:col-span-2 space-y-4">
    <div class="bg-white dark:bg-slate-800 rounded-lg p-6">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">Main Content</h3>
      <p class="text-gray-600 dark:text-gray-400">Grid layout creates responsive dashboards easily!</p>
    </div>
    
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6">
        <p class="text-2xl font-bold text-gray-800 dark:text-white">42</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">Users</p>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6">
        <p class="text-2xl font-bold text-gray-800 dark:text-white">128</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">Sales</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Grid3x3}
        category="Tailwind CSS · Layout"
        title="CSS Grid"
        description="Create complex two-dimensional layouts with grid utilities"
        colorTheme="purple"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Grid3x3 className="w-8 h-8 text-white" />
            </div>
            Grid Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Grid Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">grid</code> + 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">grid-cols-{'{'}n{'}'}</code> + 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">gap-4</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={basicGridHTML}
            title="Basic Grid"
            description="3 columns with gap"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            Responsive Grid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={responsiveGridHTML}
            title="Adaptive Columns"
            description="1→2→4 columns as screen grows"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Column Span
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={spanHTML}
            title="Spanning Columns"
            description="Make items span multiple columns"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Row Span
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={rowsHTML}
            title="Spanning Rows"
            description="Make items span multiple rows"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Dashboard Layout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={dashboardHTML}
            title="Grid Dashboard"
            description="Sidebar + main content layout"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Grid3x3 className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Grid Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use grid for 2D layouts, flex for 1D</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">gap-4</code> adds spacing between all items</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
