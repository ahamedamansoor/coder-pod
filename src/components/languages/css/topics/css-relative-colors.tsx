'use client';

import React from 'react';
import { Palette, Droplet, Paintbrush, Target, Layers, Sparkles } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  PropertyTable,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssRelativeColorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssRelativeColors({ onOpenWebPlayground }: CssRelativeColorsProps) {
  // Example 1: Understanding color-mix basics
  const mixBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Color Mix Basics</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8, #581c87); }
    }
    
    .container {
      max-width: 900px;
      width: 100%;
      background: white;
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 15px;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
      font-size: 0.95rem;
    }
    
    .demo-section {
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #8b5cf6;
      margin-bottom: 20px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title { color: #c4b5fd; }
    }
    
    .color-row {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .color-box {
      width: 120px;
      height: 120px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
      border: 3px solid rgba(255,255,255,0.3);
      font-size: 0.85rem;
    }
    
    .plus {
      font-size: 2rem;
      color: #64748b;
      display: flex;
      align-items: center;
    }
    
    .equals {
      font-size: 2rem;
      color: #64748b;
      display: flex;
      align-items: center;
    }
    
    /* First example - mix blue with white */
    .blue { background: #3b82f6; }
    .white { background: white; color: #1e293b; border-color: #e2e8f0; }
    .light-blue { background: color-mix(in srgb, #3b82f6 50%, white); }
    
    /* Second example - mix red with black */
    .red { background: #ef4444; }
    .black { background: #1e293b; }
    .dark-red { background: color-mix(in srgb, #ef4444 70%, black); }
    
    /* Third example - mix two colors */
    .purple { background: #8b5cf6; }
    .pink { background: #ec4899; }
    .purple-pink { background: color-mix(in srgb, #8b5cf6 50%, #ec4899); }
    
    .code-box {
      background: #f8fafc;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      color: #1e293b;
      text-align: center;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-box { background: #0f172a; color: #e2e8f0; border-color: #334155; }
    }
    
    .code-box .highlight {
      color: #8b5cf6;
      font-weight: 700;
    }
    
    .info {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
      font-size: 0.9rem;
      color: #78350f;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info {
        background: linear-gradient(135deg, #78350f, #92400e);
        color: #fef3c7;
        border-left-color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Understanding color-mix()</h1>
    <p class="subtitle">Mix colors together to create new ones!</p>
    
    <!-- Example 1: Lighten -->
    <div class="demo-section">
      <div class="section-title">Making Colors Lighter</div>
      <div class="color-row">
        <div class="color-box blue">Blue</div>
        <div class="plus">+</div>
        <div class="color-box white">White</div>
        <div class="equals">=</div>
        <div class="color-box light-blue">Light Blue</div>
      </div>
      <div class="code-box">
        <span class="highlight">color-mix(in srgb, #3b82f6 50%, white)</span>
      </div>
    </div>
    
    <!-- Example 2: Darken -->
    <div class="demo-section">
      <div class="section-title">Making Colors Darker</div>
      <div class="color-row">
        <div class="color-box red">Red</div>
        <div class="plus">+</div>
        <div class="color-box black">Black</div>
        <div class="equals">=</div>
        <div class="color-box dark-red">Dark Red</div>
      </div>
      <div class="code-box">
        <span class="highlight">color-mix(in srgb, #ef4444 70%, black)</span>
      </div>
    </div>
    
    <!-- Example 3: Mix two colors -->
    <div class="demo-section">
      <div class="section-title">Mixing Two Colors</div>
      <div class="color-row">
        <div class="color-box purple">Purple</div>
        <div class="plus">+</div>
        <div class="color-box pink">Pink</div>
        <div class="equals">=</div>
        <div class="color-box purple-pink">Purple-Pink</div>
      </div>
      <div class="code-box">
        <span class="highlight">color-mix(in srgb, #8b5cf6 50%, #ec4899)</span>
      </div>
    </div>
    
    <div class="info">
      <strong>💡 Key Point:</strong> The percentage controls how much of the first color to use. 
      50% means equal parts of both colors. 70% means more of the first color, less of the second!
    </div>
  </div>
</body>
</html>`;

  // Example 2: Creating a color palette
  const paletteExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Color Palette Generator</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8, #581c87); }
    }
    
    .container {
      max-width: 1100px;
      width: 100%;
      background: white;
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
      font-size: 0.95rem;
    }
    
    :root {
      --brand-color: #10b981;
    }
    
    .palette {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px;
      margin-bottom: 30px;
    }
    
    .swatch {
      aspect-ratio: 1;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 0.9rem;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
      border: 3px solid rgba(255,255,255,0.2);
    }
    
    .label {
      font-size: 0.7rem;
      opacity: 0.9;
      margin-top: 5px;
    }
    
    /* Auto-generate shades */
    .shade-100 {
      background: color-mix(in srgb, var(--brand-color) 20%, white);
      color: #1e293b;
    }
    
    .shade-300 {
      background: color-mix(in srgb, var(--brand-color) 50%, white);
      color: #1e293b;
    }
    
    .shade-500 {
      background: var(--brand-color);
    }
    
    .shade-700 {
      background: color-mix(in srgb, var(--brand-color) 80%, black);
    }
    
    .shade-900 {
      background: color-mix(in srgb, var(--brand-color) 50%, black);
    }
    
    .code-sample {
      background: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #e2e8f0;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-sample { background: #0f172a; color: #e2e8f0; border-color: #334155; }
    }
    
    .code-sample .comment {
      color: #64748b;
      font-style: italic;
    }
    
    .code-sample .var-name {
      color: #10b981;
      font-weight: 700;
    }
    
    .info {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #10b981;
      font-size: 0.9rem;
      color: #065f46;
      margin-top: 30px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info {
        background: linear-gradient(135deg, #064e3b, #065f46);
        color: #d1fae5;
        border-left-color: #6ee7b7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Automatic Color Palette</h1>
    <p class="subtitle">5 shades generated from one base color</p>
    
    <div class="palette">
      <div class="swatch shade-100">
        <div>100</div>
        <div class="label">Lightest</div>
      </div>
      <div class="swatch shade-300">
        <div>300</div>
        <div class="label">Light</div>
      </div>
      <div class="swatch shade-500">
        <div>500</div>
        <div class="label">Base</div>
      </div>
      <div class="swatch shade-700">
        <div>700</div>
        <div class="label">Dark</div>
      </div>
      <div class="swatch shade-900">
        <div>900</div>
        <div class="label">Darkest</div>
      </div>
    </div>
    
    <div class="code-sample">
      <div><span class="comment">/* One base color */</span></div>
      <div><span class="var-name">--brand-color</span>: #10b981;</div>
      <br>
      <div><span class="comment">/* Light shade - mix with white */</span></div>
      <div>background: color-mix(in srgb, var(--brand-color) 20%, white);</div>
      <br>
      <div><span class="comment">/* Dark shade - mix with black */</span></div>
      <div>background: color-mix(in srgb, var(--brand-color) 50%, black);</div>
    </div>
    
    <div class="info">
      <strong>💡 How it works:</strong> By changing just ONE color variable (--brand-color), 
      all 5 shades automatically update! Perfect for themes and design systems.
    </div>
  </div>
</body>
</html>`;

  return (
    <CssTopicLayout
      icon={Palette}
      title="Relative Colors"
      description="Mix colors together to create new shades automatically"
      category="Modern CSS Features"
      whatIsIt={{
        title: "What are Relative Colors?",
        description: "Mix existing colors to create new ones without manual calculation",
        keyPoints: [
          "Mix colors together with color-mix() function",
          "Lighten colors by mixing with white",
          "Darken colors by mixing with black",
          "Create entire color palettes from one base color",
          "Perfect for themes and design systems",
          "No manual color calculations needed"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Simple Concept">
        Think of color-mix() like mixing paint! Mix blue paint with white paint to get light blue. 
        Mix blue paint with black paint to get dark blue. That's exactly what color-mix() does in CSS!
      </InfoAlert>

      {/* How It Works */}
      <SectionCard
        title="How color-mix() Works"
        description="Understanding the basics"
        icon={Droplet}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "Mix with White",
              description: "Makes colors lighter - like adding white paint",
              example: "color-mix(in srgb, blue 50%, white)"
            },
            {
              title: "Mix with Black",
              description: "Makes colors darker - like adding black paint",
              example: "color-mix(in srgb, red 70%, black)"
            },
            {
              title: "Mix Two Colors",
              description: "Blend two colors together to create a new one",
              example: "color-mix(in srgb, purple 50%, pink)"
            },
            {
              title: "Control the Mix",
              description: "The percentage controls how much of the first color to use",
              example: "50% = equal parts, 70% = more first color"
            }
          ]}
        />
      </SectionCard>

      {/* Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to write color-mix()"
        icon={Paintbrush}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Basic Format"
            code={`color-mix(in srgb, color1 percentage, color2)`}
          />

          <SyntaxBlock
            title="Lighten a Color"
            code={`/* Mix with white to lighten */
.button {
  background: color-mix(in srgb, #3b82f6 50%, white);
  /* Result: Light blue */
}`}
          />

          <SyntaxBlock
            title="Darken a Color"
            code={`/* Mix with black to darken */
.button:hover {
  background: color-mix(in srgb, #3b82f6 70%, black);
  /* Result: Dark blue */
}`}
          />

          <SyntaxBlock
            title="Create Color Palette from Variable"
            code={`:root {
  --brand: #10b981;
  --brand-light: color-mix(in srgb, var(--brand) 50%, white);
  --brand-dark: color-mix(in srgb, var(--brand) 70%, black);
}

/* Now use them anywhere! */
.button { background: var(--brand); }
.button:hover { background: var(--brand-dark); }`}
          />
        </div>

        <InfoAlert type="tip" title="Pro Tip">
          Use CSS variables with color-mix() so you can change one color and all variations update automatically!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: Basic Mixing */}
      <SectionCard
        title="See It In Action: Color Mixing Basics"
        description="Visual demonstration of how colors mix"
        icon={Palette}
        variant="primary"
      >
        <FrontendCodePreview
          html={mixBasicsExample}
          title="Understanding Color Mix"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Palette Generation */}
      <SectionCard
        title="Practical Example: Color Palette"
        description="Generate shades from one base color"
        icon={Layers}
        variant="primary"
      >
        <FrontendCodePreview
          html={paletteExample}
          title="Auto-Generated Palette"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Relative Colors"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Design Systems"
            description="Generate hover, active, and disabled states from base colors automatically"
            icon={Paintbrush}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Theme Generation"
            description="Create light and dark variants of colors for themes"
            icon={Droplet}
            gradient="from-blue-500 to-cyan-600"
          />
          <UseCaseCard
            title="Brand Customization"
            description="Let users customize brand colors and auto-generate palettes"
            icon={Sparkles}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Color Palettes"
            description="Build entire color systems from a single base color"
            icon={Layers}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Benefits */}
      <InfoAlert type="success" title="Why Use color-mix()?">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>No Math:</strong> No need to manually calculate hex/rgb values</li>
          <li><strong>Consistency:</strong> All shades stay related to base color</li>
          <li><strong>Easy Updates:</strong> Change one color, everything updates</li>
          <li><strong>Fast:</strong> Browser-optimized, no JavaScript needed</li>
        </ul>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support (2024)">
        <div className="space-y-2 mt-2">
          <p><strong>✅ Chrome 111+:</strong> Full support</p>
          <p><strong>✅ Firefox 113+:</strong> Full support</p>
          <p><strong>✅ Safari 16.2+:</strong> Full support</p>
          <p><strong>✅ Edge 111+:</strong> Full support</p>
          <p className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
            <strong>Great news:</strong> Widely supported in all modern browsers!
          </p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
