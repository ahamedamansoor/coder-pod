'use client';

import React from 'react';
import { Zap, Gauge, Sparkles, Target, AlertTriangle, Rocket } from 'lucide-react';
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

interface CssWillChangeProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssWillChange({ onOpenWebPlayground }: CssWillChangeProps) {
  const transformExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Will-Change - Transform Optimization</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #a16207 0%, #854d0e 100%); }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #eab308;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #fde047; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .box {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      transition: transform 0.3s ease;
      border: 3px solid #eab308;
    }
    
    @media (prefers-color-scheme: dark) {
      .box { border-color: #fde047; }
    }
    
    .optimized {
      will-change: transform;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .optimized {
        background: linear-gradient(135deg, #a16207 0%, #854d0e 100%);
        color: #fde68a;
      }
    }
    
    .not-optimized {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      color: #7f1d1d;
    }
    
    @media (prefers-color-scheme: dark) {
      .not-optimized {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
        color: #fecaca;
      }
    }
    
    .box:hover {
      transform: scale(1.1) rotate(5deg);
    }
    
    .badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 10px;
    }
    
    .badge-optimized {
      background: #eab308;
      color: white;
    }
    
    .badge-not {
      background: #ef4444;
      color: white;
    }
    
    .info-box {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-left: 4px solid #10b981;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
        border-left-color: #6ee7b7;
      }
    }
    
    .info-title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #a7f3d0; }
    }
    
    .info-text {
      color: #047857;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #d1fae5; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Will-Change</h1>
    <p class="subtitle">Optimize animations with performance hints</p>
    
    <div class="demo-grid">
      <div class="optimized box">
        ✅ With will-change
        <br>
        <span class="badge badge-optimized">GPU Accelerated</span>
      </div>
      
      <div class="not-optimized box">
        ❌ Without optimization
        <br>
        <span class="badge badge-not">CPU Rendering</span>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">⚡ Performance Boost</div>
      <p class="info-text">
        <strong>Hover over the boxes!</strong> The optimized box uses <strong>will-change: transform</strong> 
        to hint the browser about upcoming animations. This moves the element to GPU layers for 
        smoother, more performant animations.
      </p>
    </div>
  </div>
</body>
</html>`;

  const opacityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Will-Change - Opacity</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #a16207 0%, #854d0e 100%); }
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #eab308; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #fde047; }
    }
    
    .fade-element {
      will-change: opacity;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 700;
      color: #92400e;
      border: 3px solid #eab308;
      animation: fadeInOut 3s ease-in-out infinite;
    }
    
    @media (prefers-color-scheme: dark) {
      .fade-element {
        background: linear-gradient(135deg, #a16207 0%, #854d0e 100%);
        color: #fde68a;
        border-color: #fde047;
      }
    }
    
    @keyframes fadeInOut {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Opacity Animation</h1>
    <div class="fade-element">
      Smooth fade with will-change: opacity
    </div>
  </div>
</body>
</html>`;

  return (
    <CssTopicLayout
      icon={Zap}
      title="Will-Change"
      description="Optimize animations and transitions with performance hints"
      category="Performance & Optimization"
      whatIsIt={{
        title: "What is Will-Change?",
        description: "Browser optimization hint for better animation performance",
        keyPoints: [
          "Hints browser about upcoming property changes",
          "Enables GPU acceleration for animations",
          "Reduces jank and improves smoothness",
          "Creates optimized rendering layers",
          "Must be used carefully to avoid overhead",
          "Remove after animation completes"
        ]
      }}
    >

      {/* Performance Benefits Alert */}
      <InfoAlert type="info" title="Performance Optimization Hint">
        The <code>will-change</code> property informs the browser about which properties will change, 
        allowing it to optimize ahead of time by creating GPU-accelerated layers and preparing rendering pipelines.
      </InfoAlert>

      {/* How It Works */}
      <SectionCard
        title="How Will-Change Works"
        description="Understanding the optimization process"
        icon={Gauge}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "GPU Acceleration",
              description: "Moves elements to dedicated GPU layers for hardware-accelerated rendering",
              example: "will-change: transform;"
            },
            {
              title: "Layer Preparation",
              description: "Browser creates optimized layers before animation starts",
              example: "will-change: opacity;"
            },
            {
              title: "Pipeline Optimization",
              description: "Rendering pipeline prepared in advance for smoother performance",
              example: "will-change: scroll-position;"
            },
            {
              title: "Memory Trade-off",
              description: "Uses more memory for better performance - remove after use",
              example: "element.style.willChange = 'auto';"
            }
          ]}
        />
      </SectionCard>

      {/* Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to use will-change"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Single Property"
            code={`.element {
  /* Hint for transform changes */
  will-change: transform;
  
  /* Apply the actual animation */
  transition: transform 0.3s;
}

.element:hover {
  transform: scale(1.2);
}`}
          />

          <SyntaxBlock
            title="Multiple Properties"
            code={`.element {
  /* Hint for multiple properties */
  will-change: transform, opacity;
  
  transition: all 0.3s ease;
}

.element:active {
  transform: scale(0.95);
  opacity: 0.7;
}`}
          />

          <SyntaxBlock
            title="JavaScript Control (Recommended)"
            language="javascript"
            code={`// Add before animation
element.addEventListener('mouseenter', () => {
  element.style.willChange = 'transform';
});

// Remove after animation completes
element.addEventListener('transitionend', () => {
  element.style.willChange = 'auto';
});`}
          />
        </div>

        <InfoAlert type="tip" title="Pro Tip">
          Use JavaScript to add <code>will-change</code> just before animation starts and remove it 
          after completion. This prevents unnecessary memory usage.
        </InfoAlert>
      </SectionCard>

      {/* Common Values */}
      <SectionCard
        title="Common Values"
        description="Most frequently used properties"
        icon={Rocket}
      >
        <PropertyTable
          properties={[
            {
              property: 'will-change: transform',
              values: 'N/A',
              description: 'For scale, rotate, translate animations'
            },
            {
              property: 'will-change: opacity',
              values: 'N/A',
              description: 'For fade in/out animations'
            },
            {
              property: 'will-change: scroll-position',
              values: 'N/A',
              description: 'For scroll-based animations and parallax'
            },
            {
              property: 'will-change: contents',
              values: 'N/A',
              description: 'For elements with changing content'
            },
            {
              property: 'will-change: auto',
              values: 'default',
              description: 'Remove optimization (default value)'
            }
          ]}
        />
      </SectionCard>

      {/* Visual Example */}
      <SectionCard
        title="Transform Example"
        description="See the performance difference"
        icon={Zap}
        variant="primary"
      >
        <FrontendCodePreview
          html={transformExample}
          title="Will-Change: Transform Optimization"
          colorTheme="indigo"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Opacity Example */}
      <SectionCard
        title="Opacity Example"
        description="Smooth fade animations"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          html={opacityExample}
          title="Will-Change: Opacity Animation"
          colorTheme="indigo"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Will-Change"
        description="Common scenarios for optimization"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Hover Animations"
            description="Scale, rotate, and transform effects on user interaction"
            icon={Sparkles}
            gradient="from-blue-500 to-cyan-600"
          />
          <UseCaseCard
            title="Scroll Animations"
            description="Parallax effects and scroll-triggered animations"
            icon={Gauge}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Page Transitions"
            description="Slide-in/out navigation and route changes"
            icon={Rocket}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Drag & Drop"
            description="Smooth element dragging and repositioning"
            icon={Target}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <SectionCard
        title="Best Practices"
        description="How to use will-change effectively"
        icon={AlertTriangle}
        variant="success"
      >
        <div className="space-y-4">
          <InfoAlert type="success" title="✅ Do">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use for elements about to animate</li>
              <li>Remove after animation completes</li>
              <li>Limit to specific properties (not <code>all</code>)</li>
              <li>Test performance impact with DevTools</li>
              <li>Add via JavaScript for better control</li>
            </ul>
          </InfoAlert>

          <InfoAlert type="warning" title="❌ Don't">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Apply to many elements simultaneously</li>
              <li>Use <code>will-change: all</code> (too broad)</li>
              <li>Leave it on permanently (memory leak)</li>
              <li>Use without measuring actual benefit</li>
              <li>Apply before user interaction starts</li>
            </ul>
          </InfoAlert>
        </div>

        <SyntaxBlock
          title="Best Practice Pattern"
          language="javascript"
          code={`const button = document.querySelector('.animated-button');

// Add hint before animation
button.addEventListener('mouseenter', () => {
  button.style.willChange = 'transform';
});

// Clean up after animation
button.addEventListener('mouseleave', () => {
  setTimeout(() => {
    button.style.willChange = 'auto';
  }, 300); // Match transition duration
});`}
        />
      </SectionCard>

      {/* Warning Alert */}
      <InfoAlert type="warning" title="Performance Consideration">
        <strong>Memory Usage:</strong> <code>will-change</code> uses additional memory to create optimized layers. 
        Using it on too many elements can actually hurt performance. Always remove it after the animation completes!
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        Widely supported in all modern browsers: Chrome 36+, Firefox 36+, Safari 9.1+, Edge 79+
      </InfoAlert>

    </CssTopicLayout>
  );
}
