'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Image, CheckCircle, Lightbulb, ArrowRight, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function BackgroundUtilities() {

  const gradientHTML = `<div class="p-8 space-y-4">
  <!-- Linear Gradients -->
  <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg text-center font-semibold">
    Left to Right Gradient
  </div>
  
  <div class="bg-gradient-to-b from-green-400 to-blue-500 text-white p-6 rounded-lg text-center font-semibold">
    Top to Bottom Gradient
  </div>
  
  <div class="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white p-6 rounded-lg text-center font-semibold">
    Diagonal with Via Color
  </div>
  
  <div class="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white p-6 rounded-lg text-center font-semibold">
    Three Color Gradient
  </div>
</div>`;

  const bgImageHTML = `<div class="p-8 space-y-6">
  <!-- Cover -->
  <div class="h-48 bg-cover bg-center rounded-lg" 
       style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800')">
    <div class="h-full bg-black/50 flex items-center justify-center rounded-lg">
      <p class="text-white text-2xl font-bold">bg-cover</p>
    </div>
  </div>
  
  <!-- Contain -->
  <div class="h-48 bg-contain bg-center bg-no-repeat bg-gray-100 dark:bg-gray-800 rounded-lg" 
       style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400')">
  </div>
</div>`;

  const bgPositionHTML = `<div class="p-8 grid md:grid-cols-3 gap-4">
  <div class="h-32 bg-cover bg-top rounded-lg border-2 border-gray-300 dark:border-gray-600" 
       style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400')">
    <div class="bg-black/50 text-white text-xs p-2 rounded-tl-lg font-semibold">bg-top</div>
  </div>
  
  <div class="h-32 bg-cover bg-center rounded-lg border-2 border-gray-300 dark:border-gray-600" 
       style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400')">
    <div class="bg-black/50 text-white text-xs p-2 rounded-tl-lg font-semibold">bg-center</div>
  </div>
  
  <div class="h-32 bg-cover bg-bottom rounded-lg border-2 border-gray-300 dark:border-gray-600" 
       style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400')">
    <div class="bg-black/50 text-white text-xs p-2 rounded-tl-lg font-semibold">bg-bottom</div>
  </div>
</div>`;

  const bgRepeatHTML = `<div class="p-8 space-y-4">
  <div class="h-32 bg-repeat rounded-lg border-2 border-gray-300 dark:border-gray-600" 
       style="background-image: url('https://via.placeholder.com/50')">
    <div class="bg-black/50 text-white text-xs p-2 rounded-tl-lg font-semibold">bg-repeat</div>
  </div>
  
  <div class="h-32 bg-no-repeat bg-center rounded-lg border-2 border-gray-300 dark:border-gray-600" 
       style="background-image: url('https://via.placeholder.com/50')">
    <div class="bg-black/50 text-white text-xs p-2 rounded-tl-lg font-semibold">bg-no-repeat</div>
  </div>
</div>`;

  const heroSectionHTML = `<div class="relative h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden">
  <!-- Pattern Overlay -->
  <div class="absolute inset-0 bg-black/20"></div>
  
  <!-- Content -->
  <div class="relative h-full flex flex-col items-center justify-center text-center p-8">
    <h1 class="text-5xl font-black text-white mb-4">
      Beautiful Backgrounds
    </h1>
    <p class="text-xl text-white/90 mb-6 max-w-2xl">
      Create stunning designs with gradients, images, and overlays
    </p>
    <button class="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
      Get Started
    </button>
  </div>
  
  <!-- Decorative Elements -->
  <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
  <div class="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Image}
        category="Tailwind CSS · Core Concepts"
        title="Background Utilities"
        description="Master background colors, gradients, images, and positioning"
        colorTheme="blue"
      />

      {/* GRADIENTS */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            Gradient Backgrounds
          </CardTitle>
          <CardDescription className="text-base">
            Create beautiful color transitions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Gradient Directions</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">bg-gradient-to-r</code> = right, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">bg-gradient-to-b</code> = bottom, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">bg-gradient-to-br</code> = bottom-right
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Gradient Syntax:</h3>
            <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span>Direction: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">bg-gradient-to-r</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span>Start color: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">from-blue-500</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span>Middle (optional): <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">via-purple-500</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <span>End color: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">to-pink-500</code></span>
                </li>
              </ol>
            </div>
          </div>

          <FrontendCodePreview
            html={gradientHTML}
            title="Gradient Examples"
            description="Different gradient directions and colors"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* BACKGROUND IMAGES */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Image className="w-6 h-6 text-white" />
            </div>
            Background Images
          </CardTitle>
          <CardDescription>
            Control image sizing and positioning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-blue-500">Example 1</Badge>
              Background Size
            </h3>
            <FrontendCodePreview
              html={bgImageHTML}
              title="Background Size"
              description="bg-cover fills the container, bg-contain fits inside"
              colorTheme="blue"
              styleLanguage="tailwind"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-cyan-500">Example 2</Badge>
              Background Position
            </h3>
            <FrontendCodePreview
              html={bgPositionHTML}
              title="Background Position"
              description="Control image alignment"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-indigo-500">Example 3</Badge>
              Background Repeat
            </h3>
            <FrontendCodePreview
              html={bgRepeatHTML}
              title="Background Repeat"
              description="Control image repetition"
              colorTheme="indigo"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* COMPLETE EXAMPLE */}
      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Hero Section Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={heroSectionHTML}
            title="Complete Hero Section"
            description="Gradient + overlay + content"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Gradients</h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200 font-mono">
                <li>bg-gradient-to-r</li>
                <li>bg-gradient-to-b</li>
                <li>bg-gradient-to-br</li>
                <li>from-{'{'}color{'}'}</li>
                <li>via-{'{'}color{'}'}</li>
                <li>to-{'{'}color{'}'}</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Images</h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200 font-mono">
                <li>bg-cover / bg-contain</li>
                <li>bg-center / bg-top</li>
                <li>bg-repeat / bg-no-repeat</li>
                <li>bg-fixed / bg-scroll</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Layers className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Pro Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Layer gradients over images with overlays</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">bg-black/50</code> for dark overlays</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">bg-cover</code> with <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">bg-center</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
