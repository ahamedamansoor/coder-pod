'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Wind, Sparkles, Lightbulb, AlignLeft, 
  CheckCircle, Info, ArrowRight, AlertTriangle,
  AlignRight, Image as ImageIcon
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssFloatClearProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssFloatClear({ onOpenWebPlayground }: CssFloatClearProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Wind}
        category="CSS · Box Model & Layout"
        title="Float & Clear"
        description="Understanding floating elements and text wrapping (legacy layout technique)"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Wind className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Float & Clear Properties</CardTitle>
              <CardDescription className="text-base">Making elements float and text wrap around them</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Float = Text Wrapping</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">float</code> property 
              makes an element "float" to the left or right, allowing text and inline elements to wrap around it. 
              Originally designed for magazine-style layouts with images.
            </AlertDescription>
          </Alert>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Legacy Technique</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Float was historically used for page layouts, but <strong>Flexbox and Grid are now preferred</strong> for layout. 
              Float is still useful for text wrapping around images!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-blue-600" />
              Common Use Case Today
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Float an image left or right and let text wrap around it - like in newspapers and magazines!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Float Values */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Wind className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Float Values
          </CardTitle>
          <CardDescription>Three float directions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Float Left */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">left</Badge>
              <div className="flex items-center gap-2 mb-3">
                <AlignLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold">Float Left</h3>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Element floats to the left, content wraps on the right
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg">
                <code className="text-sm text-blue-100">
                  float: left;
                </code>
              </div>
            </div>

            {/* Float Right */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">right</Badge>
              <div className="flex items-center gap-2 mb-3">
                <AlignRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="font-bold">Float Right</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Element floats to the right, content wraps on the left
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100">
                  float: right;
                </code>
              </div>
            </div>

            {/* Float None */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <Badge className="bg-gray-600 text-white text-lg mb-3">none</Badge>
              <h3 className="font-bold mb-3">No Float</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Default - element doesn't float
              </p>
              <div className="bg-gray-900 dark:bg-black p-3 rounded-lg">
                <code className="text-sm text-gray-100">
                  float: none;
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Text Wrapping Demo
          </CardTitle>
          <CardDescription>See float in action - magazine-style layout</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .article {
      margin-bottom: 40px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .article {
        background: #374151;
      }
    }
    
    .label {
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 15px;
      font-size: 13px;
    }
    
    .label-left {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-left {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .label-right {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-right {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .image-box {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      border-radius: 12px;
      margin: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .float-left {
      float: left;
    }
    
    .float-right {
      float: right;
    }
    
    .article p {
      text-align: justify;
      line-height: 1.8;
      color: #4b5563;
    }
    
    @media (prefers-color-scheme: dark) {
      .article p {
        color: #d1d5db;
      }
    }
    
    /* Clear floats */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📰 Float Examples</h1>
    
    <div class="article clearfix">
      <div class="label label-left">float: left</div>
      <div class="image-box float-left">
        Floated<br>Left
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Notice how the text wraps around the floated element on the right side. 
        This is perfect for magazine-style layouts where you want images 
        to be surrounded by text. The float property was originally designed 
        for exactly this purpose. Sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. The content flows naturally around 
        the floated box, creating an organic reading experience similar 
        to traditional print media.
      </p>
    </div>
    
    <div class="article clearfix">
      <div class="label label-right">float: right</div>
      <div class="image-box float-right">
        Floated<br>Right
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Now the element is floated to the right, and text wraps on the left side. 
        This creates a different visual flow and can be used to vary the layout 
        of your content. Sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. The float property removes the element from normal document 
        flow, allowing text and inline elements to wrap around it. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
        This technique is still commonly used for images in blog posts and 
        articles where you want text to flow around visual content naturally.
      </p>
    </div>
  </div>
</body>
</html>`}
            title="Float Left & Right"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Clear Property */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            The Clear Property
          </CardTitle>
          <CardDescription>Controlling elements after floats</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">clear</code> property 
            specifies which sides of an element cannot be adjacent to floated elements.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">clear: left</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                No floated elements allowed on the left
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  clear: left;
                </code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">clear: right</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                No floated elements allowed on the right
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  clear: right;
                </code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-300 dark:border-orange-700 shadow-lg">
              <Badge className="bg-orange-600 text-white mb-3">clear: both</Badge>
              <Badge className="bg-orange-700 text-white mb-3 ml-2">⭐ Common</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                No floated elements on either side
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  clear: both;
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clearfix Technique */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            The Clearfix Hack
          </CardTitle>
          <CardDescription>Fixing collapsed containers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Info className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">The Collapsing Problem</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              When all children inside a container are floated, the container height collapses to zero! 
              The "clearfix" technique fixes this issue.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              The Classic Clearfix Solution
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200 mb-4">
              Add this class to the parent container that has floated children:
            </p>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`}
              </code>
            </div>
            <p className="text-xs text-green-700 dark:text-green-300 mt-4">
              Then apply: <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">&lt;div class="clearfix"&gt;</code>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-bold text-sm mb-2 text-red-900 dark:text-red-100">❌ Without Clearfix</h4>
              <p className="text-xs text-red-700 dark:text-red-300">
                Container height collapses, floated children overflow
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-sm mb-2 text-green-900 dark:text-green-100">✅ With Clearfix</h4>
              <p className="text-xs text-green-700 dark:text-green-300">
                Container properly contains floated children
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Alternative */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/10 dark:to-pink-950/10">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Modern Alternatives
          </CardTitle>
          <CardDescription>Better options for layout today</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Use Flexbox or Grid Instead</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              For page layouts and complex arrangements, <strong>Flexbox</strong> and <strong>Grid</strong> are 
              much more powerful and predictable than float. Only use float for text wrapping around images!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-sm mb-2">✅ Use Float For:</h4>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Wrapping text around images</li>
                <li>• Magazine-style layouts</li>
                <li>• Drop caps in articles</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-sm mb-2">❌ Don't Use Float For:</h4>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Page layouts (use Grid)</li>
                <li>• Navigation bars (use Flexbox)</li>
                <li>• Card arrangements (use Grid/Flexbox)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>float</strong> - Makes elements float left/right with text wrapping</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>clear</strong> - Prevents elements from sitting next to floats</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>clearfix</strong> - Fixes collapsed container height</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Modern approach</strong> - Use Flexbox/Grid for layouts, float for images only</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
