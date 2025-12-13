'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Layers, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Palette
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssBlendModesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBlendModes({ onOpenWebPlayground }: CssBlendModesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="CSS · Visual Effects"
        title="Blend Modes"
        description="Mix colors and create stunning visual effects"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Blend Modes</CardTitle>
              <CardDescription className="text-base">Photoshop-style blending in CSS</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Blend Modes = Photoshop Effects! 🎨</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Control how elements blend with their background. Just like Photoshop layers! 
              Create stunning visual effects with <strong>mix-blend-mode</strong> and <strong>background-blend-mode</strong>.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white mb-2">mix-blend-mode</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Blends <strong>element</strong> with content behind it
              </p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white mb-2">background-blend-mode</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Blends <strong>multiple backgrounds</strong> together
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Blend Mode Values
          </CardTitle>
          <CardDescription>16 different blend modes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { mode: 'normal', desc: 'Default - no blending' },
            { mode: 'multiply', desc: 'Multiplies colors (darker)' },
            { mode: 'screen', desc: 'Inverts, multiplies, inverts (lighter)' },
            { mode: 'overlay', desc: 'Multiply + Screen combined' },
            { mode: 'darken', desc: 'Keeps darkest color' },
            { mode: 'lighten', desc: 'Keeps lightest color' },
            { mode: 'color-dodge', desc: 'Brightens background' },
            { mode: 'color-burn', desc: 'Darkens background' },
            { mode: 'hard-light', desc: 'Multiply or screen based on blend' },
            { mode: 'soft-light', desc: 'Softer version of hard-light' },
            { mode: 'difference', desc: 'Subtracts colors' },
            { mode: 'exclusion', desc: 'Similar to difference, lower contrast' },
            { mode: 'hue', desc: 'Uses hue of blend color' },
            { mode: 'saturation', desc: 'Uses saturation of blend color' },
            { mode: 'color', desc: 'Uses hue and saturation' },
            { mode: 'luminosity', desc: 'Uses luminosity of blend color' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div>
                <code className="font-mono font-bold text-purple-700 dark:text-purple-400">{item.mode}</code>
                <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See blend modes in action</CardDescription>
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
      max-width: 1200px;
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
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    
    .blend-box {
      position: relative;
      height: 180px;
      background: linear-gradient(135deg, #f093fb, #f5576c);
      border-radius: 12px;
      overflow: hidden;
    }
    
    .blend-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #667eea, #764ba2);
    }
    
    .label {
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      text-align: center;
      z-index: 2;
    }
    
    /* Apply different blend modes */
    .normal .blend-overlay { mix-blend-mode: normal; }
    .multiply .blend-overlay { mix-blend-mode: multiply; }
    .screen .blend-overlay { mix-blend-mode: screen; }
    .overlay .blend-overlay { mix-blend-mode: overlay; }
    .darken .blend-overlay { mix-blend-mode: darken; }
    .lighten .blend-overlay { mix-blend-mode: lighten; }
    .color-dodge .blend-overlay { mix-blend-mode: color-dodge; }
    .color-burn .blend-overlay { mix-blend-mode: color-burn; }
    .hard-light .blend-overlay { mix-blend-mode: hard-light; }
    .soft-light .blend-overlay { mix-blend-mode: soft-light; }
    .difference .blend-overlay { mix-blend-mode: difference; }
    .exclusion .blend-overlay { mix-blend-mode: exclusion; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 CSS Blend Modes</h1>
    
    <div class="grid">
      <div class="blend-box normal">
        <div class="blend-overlay"></div>
        <div class="label">normal</div>
      </div>
      
      <div class="blend-box multiply">
        <div class="blend-overlay"></div>
        <div class="label">multiply</div>
      </div>
      
      <div class="blend-box screen">
        <div class="blend-overlay"></div>
        <div class="label">screen</div>
      </div>
      
      <div class="blend-box overlay">
        <div class="blend-overlay"></div>
        <div class="label">overlay</div>
      </div>
      
      <div class="blend-box darken">
        <div class="blend-overlay"></div>
        <div class="label">darken</div>
      </div>
      
      <div class="blend-box lighten">
        <div class="blend-overlay"></div>
        <div class="label">lighten</div>
      </div>
      
      <div class="blend-box color-dodge">
        <div class="blend-overlay"></div>
        <div class="label">color-dodge</div>
      </div>
      
      <div class="blend-box color-burn">
        <div class="blend-overlay"></div>
        <div class="label">color-burn</div>
      </div>
      
      <div class="blend-box hard-light">
        <div class="blend-overlay"></div>
        <div class="label">hard-light</div>
      </div>
      
      <div class="blend-box soft-light">
        <div class="blend-overlay"></div>
        <div class="label">soft-light</div>
      </div>
      
      <div class="blend-box difference">
        <div class="blend-overlay"></div>
        <div class="label">difference</div>
      </div>
      
      <div class="blend-box exclusion">
        <div class="blend-overlay"></div>
        <div class="label">exclusion</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Blend Modes Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Practical applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                use: 'Text Over Images',
                mode: 'multiply / screen',
                desc: 'Make text readable on any background',
                code: '.text { mix-blend-mode: multiply; }'
              },
              {
                use: 'Duotone Images',
                mode: 'color / hue',
                desc: 'Create Instagram-style color effects',
                code: '.image { mix-blend-mode: color; }'
              },
              {
                use: 'Gradient Overlays',
                mode: 'overlay / soft-light',
                desc: 'Blend gradients with images',
                code: 'background-blend-mode: overlay;'
              },
              {
                use: 'Logo Adaptability',
                mode: 'multiply / screen',
                desc: 'Logo adapts to any background',
                code: '.logo { mix-blend-mode: multiply; }'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-green-900 dark:text-green-100">{item.use}</h4>
                  <Badge className="bg-green-600 text-white text-xs">{item.mode}</Badge>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">{item.desc}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-3 py-2 rounded block">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Isolation Property
          </CardTitle>
          <CardDescription>Control blend mode stacking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">isolation: isolate</code> to 
            create a new stacking context and prevent blend modes from affecting parent elements.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`.container {
  isolation: isolate;  /* Creates boundary */
}

.blend-element {
  mix-blend-mode: multiply;  /* Only affects siblings */
}`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>mix-blend-mode</strong> for elements, <strong>background-blend-mode</strong> for backgrounds</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>multiply</strong> darkens, <strong>screen</strong> lightens</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>isolation: isolate</strong> to contain blending</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Experiment! Visual results vary by color combination</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
