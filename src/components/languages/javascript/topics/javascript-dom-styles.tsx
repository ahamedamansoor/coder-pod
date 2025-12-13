'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Palette,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from 'lucide-react';

export default function DOMStyles() {
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px'
  });

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Palette}
        category="JavaScript Fundamentals"
        title="DOM Styles"
        description="Change CSS styles dynamically with JavaScript"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Styling Elements with JavaScript
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript can <strong className="text-yellow-700 dark:text-yellow-400">dynamically change</strong> any CSS property - colors, sizes, positions, animations, and more! Make your page come alive with interactive styles.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Palette className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Two Ways to Style</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              You can change styles with <strong>inline styles</strong> (element.style) or by adding/removing <strong>CSS classes</strong> (classList). Classes are usually better!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Style Demo</CardTitle>
          <CardDescription>Click buttons to change styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div 
            className="rounded-lg p-8 text-center font-bold text-lg transition-all duration-300"
            style={boxStyle}
          >
            Styled Box
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => setBoxStyle({...boxStyle, backgroundColor: '#ef4444'})} className="bg-red-500">
              Red Background
            </Button>
            <Button onClick={() => setBoxStyle({...boxStyle, backgroundColor: '#10b981'})} className="bg-green-500">
              Green Background
            </Button>
            <Button onClick={() => setBoxStyle({...boxStyle, backgroundColor: '#8b5cf6'})} className="bg-purple-500">
              Purple Background
            </Button>
            <Button onClick={() => setBoxStyle({...boxStyle, padding: '40px'})} variant="outline">
              More Padding
            </Button>
            <Button onClick={() => setBoxStyle({...boxStyle, borderRadius: '50px'})} variant="outline">
              Rounded
            </Button>
            <Button 
              onClick={() => setBoxStyle({
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '20px',
                borderRadius: '8px'
              })}
              variant="outline"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Inline Styles */}
      <CodeSnippet
        title="Inline Styles (element.style)"
        description="Change CSS properties directly"
        code={`const box = document.querySelector('.box');

// Single property (camelCase for multi-word properties)
box.style.color = 'blue';
box.style.backgroundColor = 'yellow';
box.style.fontSize = '20px';
box.style.borderRadius = '10px';
box.style.padding = '20px';
box.style.margin = '10px auto';

// Get computed style
console.log(box.style.color);  // 'blue'

// Remove style
box.style.color = '';

// Multiple properties at once
Object.assign(box.style, {
  color: 'white',
  backgroundColor: 'blue',
  padding: '20px',
  borderRadius: '8px'
});

// CSS custom properties (variables)
box.style.setProperty('--main-color', 'blue');
box.style.setProperty('color', 'var(--main-color)');`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; }
    .box { padding: 15px; margin: 10px 0; background: #f1f5f9; border: 2px solid #cbd5e1; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Inline Styles Demo</h2>
  <div class="box">Watch my styles change!</div>
</body>
</html>`,
          css: '',
          js: `const box = document.querySelector('.box');

// Change styles
box.style.color = 'blue';
box.style.backgroundColor = 'yellow';
box.style.fontSize = '20px';
box.style.borderRadius = '10px';
box.style.padding = '20px';
console.log('Applied inline styles');

// Multiple properties
setTimeout(() => {
  Object.assign(box.style, {
    color: 'white',
    backgroundColor: 'blue',
    padding: '30px',
    borderRadius: '20px'
  });
  console.log('Applied multiple styles');
}, 2000);`,
          visiblePanels: ['js', 'preview', 'console']
        }}
      />

      <CodeSnippet
        title="CSS Property Names"
        description="Convert CSS to JavaScript property names"
        code={`// CSS property → JavaScript property (camelCase)

// CSS: background-color
element.style.backgroundColor = 'red';

// CSS: font-size
element.style.fontSize = '20px';

// CSS: border-radius
element.style.borderRadius = '10px';

// CSS: margin-top
element.style.marginTop = '20px';

// CSS: z-index
element.style.zIndex = '100';

// CSS: text-align
element.style.textAlign = 'center';

// Shorthand properties
element.style.border = '2px solid red';
element.style.padding = '10px 20px';
element.style.margin = '0 auto';

// All properties at once
element.style.cssText = 'color: blue; font-size: 20px; padding: 10px;';`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Using CSS Classes (Better!)"
        description="Prefer classes over inline styles"
        code={`const box = document.querySelector('.box');

// Add class
box.classList.add('highlight');

// Remove class
box.classList.remove('highlight');

// Toggle class
box.classList.toggle('active');

// Add multiple classes
box.classList.add('large', 'primary', 'shadow');

// Why classes are better:
// 1. Keep styles in CSS where they belong
// 2. Easier to maintain
// 3. Better performance
// 4. Reusable across elements
// 5. Can use CSS animations/transitions

// Example: Instead of this...
element.style.backgroundColor = 'blue';
element.style.color = 'white';
element.style.padding = '20px';
element.style.borderRadius = '8px';

// ...do this:
element.classList.add('highlighted');

// Then in your CSS:
// .highlighted {
//   background-color: blue;
//   color: white;
//   padding: 20px;
//   border-radius: 8px;
// }`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Getting Computed Styles"
        description="Read actual rendered styles"
        code={`const box = document.querySelector('.box');

// Get computed style (includes all CSS, not just inline)
const styles = window.getComputedStyle(box);

// Get specific property
console.log(styles.color);           // 'rgb(0, 0, 255)'
console.log(styles.fontSize);        // '16px'
console.log(styles.backgroundColor); // 'rgb(255, 255, 0)'

// Get pseudo-element styles
const beforeStyles = window.getComputedStyle(box, '::before');
console.log(beforeStyles.content);

// Note: getComputedStyle returns computed values
console.log(styles.width);  // '200px' (computed, not just what you set)

// element.style vs getComputedStyle
box.style.color = 'blue';
console.log(box.style.color);                    // 'blue'
console.log(getComputedStyle(box).color);        // 'rgb(0, 0, 255)'

// element.style only shows inline styles
// getComputedStyle shows ALL styles (CSS + inline)`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Animating with JavaScript"
        description="Smooth style transitions"
        code={`const box = document.querySelector('.box');

// Method 1: CSS transitions (add class)
box.style.transition = 'all 0.3s ease';
box.style.transform = 'translateX(100px)';

// Method 2: requestAnimationFrame (smooth animation)
let position = 0;
function animate() {
  position += 2;
  box.style.transform = \`translateX(\${position}px)\`;
  
  if (position < 300) {
    requestAnimationFrame(animate);
  }
}
animate();

// Method 3: Web Animations API
box.animate([
  { transform: 'translateX(0px)' },
  { transform: 'translateX(300px)' }
], {
  duration: 1000,
  easing: 'ease-in-out'
});

// Fade in effect
function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = 0;
  element.style.transition = 'opacity 0.5s';
  
  setTimeout(() => {
    element.style.opacity = 1;
  }, 10);
}

fadeIn(box);`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Responsive Styles"
        description="Change styles based on conditions"
        code={`const box = document.querySelector('.box');

// Based on window size
function updateStyles() {
  if (window.innerWidth < 768) {
    // Mobile
    box.style.fontSize = '14px';
    box.style.padding = '10px';
  } else {
    // Desktop
    box.style.fontSize = '18px';
    box.style.padding = '20px';
  }
}

window.addEventListener('resize', updateStyles);
updateStyles();

// Based on scroll position
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  
  if (scrolled > 100) {
    box.classList.add('scrolled');
  } else {
    box.classList.remove('scrolled');
  }
});

// Based on element position
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

observer.observe(box);`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Common Style Patterns"
        description="Useful styling techniques"
        code={`// Hide/Show elements
function hide(element) {
  element.style.display = 'none';
}

function show(element) {
  element.style.display = 'block';  // or 'flex', 'grid', etc.
}

// Toggle visibility
function toggleVisibility(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Fade out and remove
function fadeOutAndRemove(element) {
  element.style.transition = 'opacity 0.5s';
  element.style.opacity = '0';
  
  setTimeout(() => {
    element.remove();
  }, 500);
}

// Highlight temporarily
function flashHighlight(element) {
  element.classList.add('highlight');
  setTimeout(() => {
    element.classList.remove('highlight');
  }, 1000);
}

// Disable/enable element
function disable(element) {
  element.style.opacity = '0.5';
  element.style.pointerEvents = 'none';
}

function enable(element) {
  element.style.opacity = '1';
  element.style.pointerEvents = 'auto';
}

// Loading state
function showLoading(element) {
  element.style.opacity = '0.6';
  element.style.cursor = 'wait';
}

function hideLoading(element) {
  element.style.opacity = '1';
  element.style.cursor = 'default';
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Prefer <strong>CSS classes</strong> over inline styles</li>
                <li>• Use <strong>camelCase</strong> for property names</li>
                <li>• Include units (px, %, em, etc.)</li>
                <li>• Use <strong>getComputedStyle()</strong> to read styles</li>
                <li>• Use CSS transitions for smooth changes</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use inline styles when classes work</li>
                <li>• Don't forget units (10px not just 10)</li>
                <li>• Don't use element.style to read computed styles</li>
                <li>• Don't animate with setInterval</li>
                <li>• Don't set many individual styles (use Object.assign)</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">When to Use Each Method</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>CSS Classes:</strong> For most styling needs, themes, states</div>
              <div><strong>Inline Styles:</strong> For dynamic values, calculations, animations</div>
              <div><strong>getComputedStyle():</strong> To read current rendered styles</div>
              <div><strong>cssText:</strong> To set multiple styles at once (rarely needed)</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              CSS classes are almost always better than inline styles. They're easier to maintain, more performant, and work better with CSS frameworks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
