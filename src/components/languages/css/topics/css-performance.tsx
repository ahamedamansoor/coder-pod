'use client';

import React from 'react';
import { Gauge, Zap, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssPerformanceProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPerformance({ onOpenWebPlayground }: CssPerformanceProps) {
  
  return (
    <CssTopicLayout
      icon={Gauge}
      title="CSS Performance"
      description="Make your CSS lightning fast and smooth"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Performance?",
        description: "Techniques to make your CSS load faster, render quicker, and animate smoothly",
        keyPoints: [
          "Faster page loads with optimized CSS",
          "Smooth animations at 60fps",
          "Efficient selectors that render quickly",
          "Reduce file sizes",
          "Avoid expensive CSS properties",
          "Better user experience"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Performance Matters">
        Slow CSS = frustrated users = lost visitors! Every millisecond counts. 
        <strong> Performance optimization makes your site feel instant and smooth</strong>, 
        improving user experience and even SEO rankings!
      </InfoAlert>

      {/* Key Performance Factors */}
      <SectionCard
        title="What Affects CSS Performance?"
        description="The main performance factors"
        icon={Gauge}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📦 File Size",
              description: "Smaller CSS loads faster",
              example: "100KB → 20KB with minification"
            },
            {
              title: "🎯 Selector Efficiency",
              description: "Simple selectors render faster",
              example: ".button (fast) vs div > * (slow)"
            },
            {
              title: "🎨 Expensive Properties",
              description: "Some CSS properties are slow",
              example: "transform (fast) vs box-shadow (slow)"
            },
            {
              title: "⚡ Critical CSS",
              description: "Load essential styles first",
              example: "Above-fold CSS inline"
            }
          ]}
        />
      </SectionCard>

      {/* Optimize File Size */}
      <SectionCard
        title="1. Optimize File Size"
        description="Make CSS files smaller"
        icon={Zap}
        variant="primary"
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Before: Unminified CSS (500 bytes)"
            code={`/* Lots of whitespace and comments */
.button {
  /* Primary button styles */
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
}

.button:hover {
  background-color: #2563eb;
}`}
          />

          <SyntaxBlock
            title="After: Minified CSS (180 bytes - 64% smaller!)"
            code={`.button{background-color:#3b82f6;color:white;padding:12px 24px;border-radius:6px;font-size:16px}.button:hover{background-color:#2563eb}`}
          />

          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">File Size Optimization Techniques</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ <strong>Minify CSS:</strong> Remove whitespace, comments (64% size reduction)</li>
              <li>✓ <strong>Combine Files:</strong> One 50KB file loads faster than ten 5KB files</li>
              <li>✓ <strong>Remove Unused CSS:</strong> Delete styles you're not using</li>
              <li>✓ <strong>Use Shorthand:</strong> <code>margin: 10px;</code> instead of 4 separate properties</li>
              <li>✓ <strong>Gzip Compression:</strong> Server compresses CSS (70-80% reduction)</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Efficient Selectors */}
      <SectionCard
        title="2. Write Efficient Selectors"
        description="Some selectors are faster than others"
        icon={Target}
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">⚡ Fast Selectors</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                <li>✓ #id</li>
                <li>✓ .class</li>
                <li>✓ element</li>
                <li>✓ .parent .child (2 levels)</li>
              </ul>
            </div>

            <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">🐌 Slow Selectors</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                <li>{"✗ *"}</li>
                <li>{"✗ [attribute*=\"value\"]"}</li>
                <li>{"✗ div > div > div > div"}</li>
                <li>{"✗ :nth-child(complex)"}</li>
              </ul>
            </div>
          </div>

          <SyntaxBlock
            title="Selector Performance Examples"
            code={`/* ⚡ FAST: Simple class selector */
.button {
  background: #3b82f6;
}

/* ⚡ FAST: ID selector (fastest) */
#header {
  padding: 20px;
}

/* 🆗 OKAY: 2-3 levels deep */
.nav .item {
  padding: 10px;
}

/* 🐌 SLOW: Too many levels */
.container .wrapper .content .item .link {
  color: blue;
}

/* 🐌 SLOW: Universal selector */
* {
  box-sizing: border-box;  /* Only use once for reset */
}

/* 🐌 SLOW: Complex attribute selector */
[class*="btn"][data-type*="primary"] {
  background: blue;
}

/* ✅ BETTER: Use a specific class instead */
.btn-primary {
  background: blue;
}`}
          />
        </div>
      </SectionCard>

      {/* Expensive Properties */}
      <SectionCard
        title="3. Avoid Expensive Properties"
        description="Some CSS properties are slow to render"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">⚡ Cheap Properties (Use Freely)</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✓ <code>transform</code> - Super fast!</li>
                <li>✓ <code>opacity</code> - Very fast</li>
                <li>✓ <code>color</code></li>
                <li>✓ <code>background-color</code></li>
              </ul>
            </div>

            <div className="p-5 border-2 border-amber-200 dark:border-amber-800 rounded-xl bg-amber-50 dark:bg-amber-950/20">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">🐌 Expensive Properties (Use Sparingly)</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>⚠ <code>box-shadow</code> (large spreads)</li>
                <li>⚠ <code>filter: blur()</code></li>
                <li>⚠ <code>position</code> changes</li>
                <li>⚠ <code>width/height</code> changes</li>
              </ul>
            </div>
          </div>

          <SyntaxBlock
            title="Performance-Friendly Animations"
            code={`/* 🐌 SLOW: Animating width (causes reflow) */
.box-slow {
  width: 100px;
  transition: width 0.3s;
}
.box-slow:hover {
  width: 200px;  /* Slow! Browser recalculates layout */
}

/* ⚡ FAST: Use transform instead */
.box-fast {
  width: 100px;
  transition: transform 0.3s;
}
.box-fast:hover {
  transform: scaleX(2);  /* Fast! GPU accelerated */
}

/* 🐌 SLOW: Large box shadow */
.card-slow {
  box-shadow: 0 0 100px 50px rgba(0,0,0,0.5);  /* Too large! */
}

/* ⚡ FAST: Smaller box shadow */
.card-fast {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  /* Much faster */
}

/* ⚡ FAST: Use will-change for animations */
.animated-element {
  will-change: transform, opacity;  /* Tells browser to optimize */
}

.animated-element.active {
  transform: translateX(100px);
  opacity: 0.5;
}`}
          />
        </div>
      </SectionCard>

      {/* Critical CSS */}
      <SectionCard
        title="4. Load Critical CSS First"
        description="Prioritize above-the-fold styles"
        icon={Layers}
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">What is Critical CSS?</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Critical CSS is the minimum CSS needed to render the top of your page (above the fold). 
              Load it inline in the HTML <code>&lt;head&gt;</code>, and load the rest later.
            </p>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Result:</strong> Page appears instantly, even while CSS file downloads!
            </div>
          </div>

          <SyntaxBlock
            title="Critical CSS Implementation"
            code={`<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
  
  <!-- INLINE critical CSS for instant rendering -->
  <style>
    /* Only styles for above-the-fold content */
    body { margin: 0; font-family: sans-serif; }
    .header { background: #3b82f6; padding: 20px; color: white; }
    .hero { padding: 60px 20px; text-align: center; }
    .hero h1 { font-size: 48px; margin: 0; }
  </style>
  
  <!-- Load full CSS asynchronously -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
<body>
  <header class="header">My Site</header>
  <section class="hero">
    <h1>Welcome!</h1>
  </section>
  <!-- Rest of page... -->
</body>
</html>`}
          />
        </div>
      </SectionCard>

      {/* Practical Example */}
      <SectionCard
        title="Performance Comparison"
        description="See the difference"
        icon={Gauge}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="demo">
  <h2>Hover over each box to see performance</h2>
  
  <div class="boxes">
    <div class="box box-slow">
      <h3>🐌 Slow</h3>
      <p>Animates width (causes reflow)</p>
    </div>
    
    <div class="box box-fast">
      <h3>⚡ Fast</h3>
      <p>Uses transform (GPU accelerated)</p>
    </div>
  </div>
  
  <p class="note">Notice how the fast animation feels smoother!</p>
</div>`}
          css={`body {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

.demo h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1f2937;
}

.boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.box {
  padding: 30px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}

.box h3 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

.box p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}

/* SLOW: Animates width (causes layout recalculation) */
.box-slow {
  width: 200px;
  transition: width 0.3s;
}

.box-slow:hover {
  width: 250px;  /* Slow - triggers reflow */
}

/* FAST: Uses transform (GPU accelerated) */
.box-fast {
  width: 200px;
  transition: transform 0.3s;
}

.box-fast:hover {
  transform: scale(1.1);  /* Fast - no reflow! */
}

.note {
  text-align: center;
  color: #6b7280;
  font-style: italic;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1f2937;
  }
  
  .demo h2,
  .note {
    color: #f3f4f6;
  }
  
  .box {
    background: #374151;
    border-color: #4b5563;
  }
  
  .box p {
    color: #9ca3af;
  }
}`}
          title="Performance Demo"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When Performance Matters Most"
        description="Critical scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Mobile Devices"
            description="Limited CPU power needs optimization"
            icon={Gauge}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="High-Traffic Sites"
            description="Millions of visitors = performance critical"
            icon={Zap}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Animation-Heavy"
            description="Smooth 60fps animations required"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="E-commerce"
            description="Every 100ms delay = 1% lost sales"
            icon={CheckCircle}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Performance Checklist">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Minify CSS:</strong> Remove whitespace and comments (64% size reduction)</li>
          <li><strong>Combine Files:</strong> One file loads faster than many small files</li>
          <li><strong>Remove Unused CSS:</strong> Use tools like PurgeCSS to delete unused styles</li>
          <li><strong>Keep Selectors Simple:</strong> Max 2-3 levels deep</li>
          <li><strong>Use transform & opacity:</strong> For animations (GPU accelerated)</li>
          <li><strong>Avoid Expensive Properties:</strong> Large shadows, complex filters</li>
          <li><strong>Load Critical CSS Inline:</strong> Above-fold styles in HTML head</li>
          <li><strong>Enable Gzip:</strong> Server compression (70-80% reduction)</li>
          <li><strong>Use will-change:</strong> For elements you plan to animate</li>
          <li><strong>Test on Real Devices:</strong> Especially older mobile phones</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="Performance Testing Tools">
        <div className="mt-2 space-y-2">
          <p><strong>Chrome DevTools:</strong> Performance tab shows CSS rendering time</p>
          <p><strong>Lighthouse:</strong> Google's tool for performance audits</p>
          <p><strong>WebPageTest:</strong> Test from different locations and devices</p>
          <p><strong>CSS Stats:</strong> Analyze your CSS complexity and size</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
