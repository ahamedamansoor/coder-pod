'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Type, Sparkles, Lightbulb, Bold, 
  CheckCircle, Info, ArrowRight, Italic,
  AlignCenter, Hash
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssTypographyProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTypography({ onOpenWebPlayground }: CssTypographyProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Type}
        category="CSS · Styling Basics"
        title="Typography"
        description="Master fonts, text styling, and creating beautiful readable content"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Type className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Typography</CardTitle>
              <CardDescription className="text-base">Making text beautiful and readable</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Typography = Text Styling</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Good typography makes content readable, accessible, and visually appealing. CSS gives you complete 
              control over fonts, sizes, spacing, alignment, and text effects.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
              <Type className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Fonts</h3>
              <p className="text-xs text-blue-800 dark:text-blue-200">Family, size, weight</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 text-center">
              <Hash className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Spacing</h3>
              <p className="text-xs text-purple-800 dark:text-purple-200">Line height, letter spacing</p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 text-center">
              <AlignCenter className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Alignment</h3>
              <p className="text-xs text-green-800 dark:text-green-200">Text alignment, decoration</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Font Properties */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Font Properties
          </CardTitle>
          <CardDescription>Control typeface, size, weight, and style</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Font Family */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">font-family</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Specifies the typeface. Always provide fallback fonts!
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-blue-100">
                  font-family: 'Arial', 'Helvetica', sans-serif;
                </code>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">Generic families:</strong>
                  <div className="mt-2 space-y-1">
                    <div>• serif (Times New Roman)</div>
                    <div>• sans-serif (Arial)</div>
                    <div>• monospace (Courier)</div>
                  </div>
                </div>
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">Web-safe fonts:</strong>
                  <div className="mt-2 space-y-1">
                    <div>• Arial</div>
                    <div>• Georgia</div>
                    <div>• Verdana</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Font Size */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">font-size</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Controls text size. Use rem for accessibility!
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-green-100">
                  font-size: 16px; /* or 1rem */
                </code>
              </div>
              <div className="space-y-2">
                <div style={{fontSize: '12px'}}>12px - Small text</div>
                <div style={{fontSize: '16px'}}>16px - Body text (default)</div>
                <div style={{fontSize: '24px'}}>24px - Heading</div>
                <div style={{fontSize: '32px'}}>32px - Large heading</div>
              </div>
            </div>

            {/* Font Weight */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">font-weight</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Controls text thickness from 100 (thin) to 900 (black)
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-purple-100">
                  font-weight: 400; /* or bold */
                </code>
              </div>
              <div className="space-y-2">
                <div style={{fontWeight: 300}}>300 - Light</div>
                <div style={{fontWeight: 400}}>400 - Normal (default)</div>
                <div style={{fontWeight: 600}}>600 - Semi-bold</div>
                <div style={{fontWeight: 700}}>700 - Bold</div>
              </div>
            </div>

            {/* Font Style */}
            <div className="p-6 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white text-lg mb-3">font-style</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Makes text italic or oblique
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-orange-100">
                  font-style: italic;
                </code>
              </div>
              <div className="space-y-2">
                <div style={{fontStyle: 'normal'}}>normal - Regular text</div>
                <div style={{fontStyle: 'italic'}}>italic - Slanted text</div>
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
            Typography Showcase
          </CardTitle>
          <CardDescription>See typography properties in action</CardDescription>
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
      font-family: Georgia, serif;
      font-size: 42px;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 10px;
      letter-spacing: -1px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      font-family: 'Arial', sans-serif;
      font-size: 18px;
      font-weight: 300;
      color: #8b5cf6;
      margin-bottom: 30px;
      font-style: italic;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #c4b5fd;
      }
    }
    
    .body-text {
      font-family: 'Helvetica', 'Arial', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.8;
      color: #4b5563;
      margin-bottom: 25px;
      text-align: justify;
    }
    
    @media (prefers-color-scheme: dark) {
      .body-text {
        color: #d1d5db;
      }
    }
    
    .quote {
      font-family: Georgia, serif;
      font-size: 20px;
      font-weight: 400;
      font-style: italic;
      color: #667eea;
      padding: 20px;
      border-left: 4px solid #667eea;
      background: #f3f4f6;
      margin: 30px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .quote {
        color: #a78bfa;
        background: #374151;
        border-left-color: #a78bfa;
      }
    }
    
    .showcase {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .card {
      padding: 20px;
      border-radius: 12px;
      background: #f9fafb;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #374151;
      }
    }
    
    .card-title {
      font-size: 12px;
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-title {
        color: #9ca3af;
      }
    }
    
    .font-serif {
      font-family: Georgia, serif;
    }
    
    .font-sans {
      font-family: Arial, sans-serif;
    }
    
    .font-mono {
      font-family: 'Courier New', monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Typography Matters</h1>
    <div class="subtitle">The art and technique of arranging type</div>
    
    <p class="body-text">
      Typography is the visual component of the written word. A well-designed
      typographic system can help guide the reader's eye through a hierarchy of
      content, making text more accessible and enjoyable to read. Good typography
      combines font choice, size, spacing, and alignment to create readable,
      beautiful text.
    </p>
    
    <div class="quote">
      "Typography is the craft of endowing human language with a durable visual form."
      <div style="margin-top: 10px; font-size: 14px; font-style: normal; color: #8b5cf6;">
        — Robert Bringhurst
      </div>
    </div>
    
    <p class="body-text">
      When choosing fonts for your project, consider readability first. Serif fonts
      like Georgia work well for long-form content, while sans-serif fonts like Arial
      are great for UI elements and shorter text. Always include fallback fonts in
      your font-family declaration to ensure text renders properly across all devices.
    </p>
    
    <div class="showcase">
      <div class="card">
        <div class="card-title">Serif</div>
        <div style="font-size: 32px;" class="font-serif">Aa</div>
        <div style="font-size: 12px; color: #6b7280;">Georgia</div>
      </div>
      
      <div class="card">
        <div class="card-title">Sans-serif</div>
        <div style="font-size: 32px;" class="font-sans">Aa</div>
        <div style="font-size: 12px; color: #6b7280;">Arial</div>
      </div>
      
      <div class="card">
        <div class="card-title">Monospace</div>
        <div style="font-size: 32px;" class="font-mono">Aa</div>
        <div style="font-size: 12px; color: #6b7280;">Courier</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Typography Example"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Text Spacing */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Hash className="w-6 h-6 text-green-600 dark:text-green-400" />
            Text Spacing
          </CardTitle>
          <CardDescription>Line height, letter spacing, and word spacing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white mb-3">line-height</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Space between lines of text
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  line-height: 1.6;
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                Recommended: 1.5 to 1.8 for body text
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white mb-3">letter-spacing</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Space between characters
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  letter-spacing: 0.5px;
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                Use for headings and uppercase text
              </p>
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
            <span>Use <strong>font-family</strong> with fallback fonts</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>rem</strong> for font-size (accessibility!)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>line-height: 1.6</strong> for readable body text</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Good typography = better readability & UX</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
