'use client';

import React from 'react';
import { Bug, Sparkles, Target, Layers, CheckCircle, Eye } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssDebuggingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssDebugging({ onOpenWebPlayground }: CssDebuggingProps) {
  
  return (
    <CssTopicLayout
      icon={Bug}
      title="CSS Debugging"
      description="Find and fix CSS problems like a pro"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Debugging?",
        description: "The process of finding and fixing problems in your CSS code",
        keyPoints: [
          "Identify why styles aren't working",
          "Find specificity conflicts",
          "Discover layout issues",
          "Use browser DevTools effectively",
          "Debug responsive design problems",
          "Essential skill for all developers"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why CSS Debugging Matters">
        CSS can be frustrating when it doesn't work as expected. Is it specificity? A typo? Wrong selector? 
        <strong> Learning to debug CSS systematically saves hours of trial and error!</strong> 
        Master these techniques and you'll fix issues 10x faster.
      </InfoAlert>

      {/* Common CSS Problems */}
      <SectionCard
        title="Common CSS Problems"
        description="What usually goes wrong"
        icon={Bug}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🎯 Wrong Selector",
              description: "CSS doesn't target the right element",
              example: ".buton instead of .button"
            },
            {
              title: "⚔️ Specificity War",
              description: "Another style is more specific",
              example: "#id beats .class"
            },
            {
              title: "📦 Box Model Issues",
              description: "Padding/margin not as expected",
              example: "box-sizing problems"
            },
            {
              title: "👻 Invisible Elements",
              description: "Elements hidden or off-screen",
              example: "display: none or opacity: 0"
            }
          ]}
        />
      </SectionCard>

      {/* Browser DevTools */}
      <SectionCard
        title="1. Browser DevTools - Your Best Friend"
        description="The most powerful debugging tool"
        icon={Eye}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">How to Open DevTools</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">Chrome/Edge</p>
                <code className="text-xs">F12 or Ctrl+Shift+I</code><br/>
                <code className="text-xs">Mac: Cmd+Option+I</code>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">Firefox</p>
                <code className="text-xs">F12 or Ctrl+Shift+I</code><br/>
                <code className="text-xs">Mac: Cmd+Option+I</code>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">Safari</p>
                <code className="text-xs">Cmd+Option+I</code><br/>
                <p className="text-xs">(Enable in Preferences first)</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 1: Inspect Element</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Right-click any element → "Inspect" or "Inspect Element"
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 This opens DevTools and selects that exact element in the Elements/Inspector panel
              </p>
            </div>

            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Step 2: View Computed Styles</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Look at the "Styles" or "Rules" panel to see ALL CSS applied to the element
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 Styles are shown from most specific to least specific. Crossed-out styles are overridden.
              </p>
            </div>

            <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Step 3: Edit Live</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Click any CSS value and change it - see results instantly!
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 Changes are temporary - refresh to reset. Great for experimenting!
              </p>
            </div>

            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Step 4: Check Box Model</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Look at the box model diagram showing content, padding, border, margin
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 Hover over the diagram to highlight areas on the page. Instantly see spacing issues!
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Border Debugging Technique */}
      <SectionCard
        title="2. The Border Debugging Technique"
        description="Quick and simple visual debugging"
        icon={Target}
      >
        <div className="space-y-6">
          <InfoAlert type="tip" title="Classic Debugging Trick">
            Add colored borders to elements to see their actual size and position. 
            This reveals layout problems instantly!
          </InfoAlert>

          <SyntaxBlock
            title="Border Debugging Method"
            code={`/* Add this temporarily to debug layout issues */

/* See all elements */
* {
  border: 1px solid red !important;
}

/* Or target specific elements */
.container {
  border: 2px solid blue !important;
}

.item {
  border: 2px solid green !important;
}

/* Debug specific element */
.problematic-div {
  border: 3px solid red !important;
  background: rgba(255, 0, 0, 0.1) !important;
}`}
          />

          <FrontendCodePreview
            html={`<div class="container">
  <div class="header">Header</div>
  <div class="content">
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
  </div>
  <div class="footer">Footer</div>
</div>`}
            css={`/* Remove the debugging borders to see the problem */
.container {
  max-width: 800px;
  margin: 20px auto;
}

/* WITH DEBUG BORDERS - Uncomment to see layout clearly */
* {
  border: 1px solid red !important;
}

.container { border-color: blue !important; }
.header { border-color: green !important; }
.content { border-color: purple !important; }
.sidebar { border-color: orange !important; }
.main { border-color: pink !important; }
.footer { border-color: brown !important; }

/* Original styles */
.header, .footer {
  padding: 20px;
  background: #3b82f6;
  color: white;
  text-align: center;
}

.content {
  display: flex;
  gap: 20px;
  padding: 20px 0;
}

.sidebar {
  width: 200px;
  padding: 15px;
  background: #f3f4f6;
}

.main {
  flex: 1;
  padding: 15px;
  background: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  .header, .footer {
    background: #2563eb;
  }
  
  .sidebar {
    background: #374151;
    color: #f3f4f6;
  }
  
  .main {
    background: #4b5563;
    color: #f3f4f6;
  }
}`}
            title="Border Debugging Demo"
            colorTheme="red"
            onOpenPlayground={onOpenWebPlayground}
          />
        </div>
      </SectionCard>

      {/* Specificity Debugging */}
      <SectionCard
        title="3. Debugging Specificity Issues"
        description="Why your styles aren't applying"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Specificity Hierarchy</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-between p-2 bg-white dark:bg-purple-900/20 rounded">
                <span>1. Inline styles</span>
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">style="..."</code>
                <span className="text-red-600 font-semibold">HIGHEST</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-purple-900/20 rounded">
                <span>2. IDs</span>
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">#id</code>
                <span className="text-orange-600 font-semibold">HIGH</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-purple-900/20 rounded">
                <span>3. Classes, attributes, pseudo-classes</span>
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">.class</code>
                <span className="text-blue-600 font-semibold">MEDIUM</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-purple-900/20 rounded">
                <span>4. Elements, pseudo-elements</span>
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">div</code>
                <span className="text-green-600 font-semibold">LOW</span>
              </div>
            </div>
          </div>

          <SyntaxBlock
            title="Specificity Problem Example"
            code={`/* ❌ PROBLEM: Your style doesn't apply */
.button {
  background: blue;  /* This won't work! */
}

/* ✓ Reason: More specific selector wins */
#header .nav .button {
  background: red;  /* This wins (1 ID + 2 classes) */
}

/* ❌ BAD FIX: Using !important */
.button {
  background: blue !important;  /* Works but creates problems */
}

/* ✅ GOOD FIX: Match or exceed specificity */
#header .nav .button {
  background: blue;  /* Same specificity, later in file wins */
}

/* ✅ BETTER FIX: Reduce original specificity */
.nav-button {
  background: blue;  /* Simpler, easier to override later */
}`}
          />

          <InfoAlert type="warning" title="How to Check Specificity in DevTools">
            In DevTools, look for crossed-out styles. Hover over them to see which rule is overriding them. 
            The rule at the top of the list has the highest specificity and wins!
          </InfoAlert>
        </div>
      </SectionCard>

      {/* Common Debugging Scenarios */}
      <SectionCard
        title="Common Debugging Scenarios"
        description="Problems and solutions"
        icon={CheckCircle}
      >
        <div className="space-y-4">
          <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ "My CSS isn't loading!"</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Check:</p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Is the file path correct? (Check browser Network tab)</li>
              <li>Is there a syntax error? (Missing <code>&#125;</code> breaks everything after it)</li>
              <li>Is the <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code>?</li>
              <li>Hard refresh: Ctrl+F5 (clears cache)</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-orange-200 dark:border-orange-800 rounded-xl bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">❌ "My layout is broken!"</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Check:</p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Box model in DevTools - unexpected padding/margin?</li>
              <li>Missing <code>box-sizing: border-box</code>?</li>
              <li>Flexbox/Grid issues - check parent and child properties</li>
              <li>Z-index problems - check stacking context</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl bg-yellow-50 dark:bg-yellow-950/20">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">❌ "Element is invisible!"</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Check:</p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><code>display: none</code> or <code>visibility: hidden</code>?</li>
              <li><code>opacity: 0</code>?</li>
              <li>Z-index - is it behind something else?</li>
              <li>Color same as background?</li>
              <li>Width/height set to 0?</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">❌ "Hover/Focus not working!"</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Check:</p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Is there an element covering it? (Check z-index)</li>
              <li>Typo in selector? <code>:hover</code> not <code>:Hover</code></li>
              <li>Specificity - is another rule overriding it?</li>
              <li>DevTools: Force element state (hover/focus/active)</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">❌ "Responsive design broken!"</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Check:</p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Missing viewport meta tag in HTML?</li>
              <li>Media query breakpoints correct?</li>
              <li>Test in DevTools responsive mode</li>
              <li>Fixed widths preventing responsive behavior?</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* DevTools Pro Tips */}
      <SectionCard
        title="DevTools Pro Tips"
        description="Advanced debugging techniques"
        icon={Sparkles}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Element State Simulation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              In DevTools, click the ":hov" button to force :hover, :active, :focus states. 
              Great for debugging interactive styles!
            </p>
          </div>

          <div className="p-4 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📱 Device Simulation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Toggle device toolbar (Ctrl+Shift+M) to test mobile layouts. 
              Choose specific devices or custom dimensions.
            </p>
          </div>

          <div className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-xl bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎨 Color Picker</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Click any color value in DevTools to open a color picker. 
              Test different colors instantly!
            </p>
          </div>

          <div className="p-4 border-2 border-amber-200 dark:border-amber-800 rounded-xl bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">📋 Copy Styles</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Right-click on an element → Copy → Copy styles. 
              Paste computed styles into your CSS file!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When Debugging is Essential"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Layout Issues"
            description="Elements not positioned correctly"
            icon={Layers}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Responsive Breakage"
            description="Mobile/tablet layouts broken"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Style Conflicts"
            description="Multiple CSS files interfering"
            icon={Bug}
            gradient="from-red-500 to-pink-600"
          />
          <UseCaseCard
            title="Browser Differences"
            description="Works in Chrome, broken in Safari"
            icon={CheckCircle}
            gradient="from-purple-500 to-indigo-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Debugging Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Use DevTools First:</strong> Right-click → Inspect is your starting point for every issue</li>
          <li><strong>Check Specificity:</strong> Look for crossed-out styles in DevTools Styles panel</li>
          <li><strong>Validate CSS:</strong> Use W3C CSS Validator to catch syntax errors</li>
          <li><strong>Border Debugging:</strong> Add colored borders temporarily to see element boundaries</li>
          <li><strong>Test Incrementally:</strong> Make one change at a time to isolate the problem</li>
          <li><strong>Check Console:</strong> Look for CSS loading errors in browser console</li>
          <li><strong>Use Semantic Names:</strong> Clear class names make debugging easier</li>
          <li><strong>Comment Your CSS:</strong> Future you will thank you when debugging</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="Debugging Tools & Extensions">
        <div className="mt-2 space-y-2">
          <p><strong>Browser DevTools:</strong> Chrome/Firefox/Safari built-in tools (F12)</p>
          <p><strong>CSS Validator:</strong> jigsaw.w3.org/css-validator - catches syntax errors</p>
          <p><strong>Specificity Calculator:</strong> specificity.keegan.st - calculate selector specificity</p>
          <p><strong>What CSS:</strong> Browser extension to see all styles on hover</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
