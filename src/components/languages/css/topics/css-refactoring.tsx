'use client';

import React from 'react';
import { RefreshCw, Sparkles, Target, Layers, CheckCircle, Zap } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssRefactoringProps {
  onOpenWebPlayground?: (html: string, css: string) => void;
}

export default function CssRefactoring({ onOpenWebPlayground }: CssRefactoringProps) {
  
  return (
    <CssTopicLayout
      icon={RefreshCw}
      title="CSS Refactoring"
      description="Improve your CSS code without changing its behavior"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Refactoring?",
        description: "The process of improving CSS code structure and quality while keeping the same visual output",
        keyPoints: [
          "Clean up messy, hard-to-maintain CSS",
          "Remove duplicate and unused styles",
          "Improve code organization",
          "Make CSS more reusable",
          "No visual changes - same output",
          "Essential for long-term projects"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Refactor CSS?">
        CSS gets messy over time - duplicated rules, unused styles, confusing names. 
        <strong> Refactoring is like cleaning your room: everything works better when it's organized!</strong> 
        You improve the code without changing how the page looks.
      </InfoAlert>

      {/* Signs You Need Refactoring */}
      <SectionCard
        title="Signs Your CSS Needs Refactoring"
        description="Red flags to watch for"
        icon={Target}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🔄 Lots of Duplication",
              description: "Same styles repeated everywhere",
              example: "5 buttons with identical code"
            },
            {
              title: "❌ Unused Styles",
              description: "CSS that does nothing",
              example: "Styles for deleted components"
            },
            {
              title: "😱 Too Specific",
              description: "Overly complex selectors",
              example: "div > ul > li > a.link"
            },
            {
              title: "🤯 Hard to Understand",
              description: "Confusing class names",
              example: ".box2-final-v3-NEW"
            }
          ]}
        />
      </SectionCard>

      {/* Refactoring Techniques */}
      <SectionCard
        title="CSS Refactoring Techniques"
        description="Common ways to improve CSS"
        icon={RefreshCw}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">6 Key Refactoring Techniques</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">1. Remove Duplication</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Combine repeated styles into reusable classes</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">2. Delete Unused CSS</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Remove styles that aren't used anywhere</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">3. Simplify Selectors</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Make selectors less specific and complex</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">4. Rename Classes</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Use clear, descriptive names</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">5. Extract Variables</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Use CSS variables for repeated values</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">6. Organize Structure</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Group related styles logically</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Technique 1: Remove Duplication */}
      <SectionCard
        title="1. Remove Duplication"
        description="DRY - Don't Repeat Yourself"
        icon={Layers}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Before: Repeated Styles"
            code={`/* ❌ BAD: Same styles repeated 3 times */
.submit-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #3b82f6;
  color: white;
}

.cancel-button {
  padding: 12px 24px;    /* Duplicate! */
  font-size: 16px;       /* Duplicate! */
  font-weight: 600;      /* Duplicate! */
  border: none;          /* Duplicate! */
  border-radius: 6px;    /* Duplicate! */
  cursor: pointer;       /* Duplicate! */
  background: #6b7280;
  color: white;
}

.delete-button {
  padding: 12px 24px;    /* Duplicate! */
  font-size: 16px;       /* Duplicate! */
  font-weight: 600;      /* Duplicate! */
  border: none;          /* Duplicate! */
  border-radius: 6px;    /* Duplicate! */
  cursor: pointer;       /* Duplicate! */
  background: #ef4444;
  color: white;
}`}
          />

          <SyntaxBlock
            title="After: Reusable Base Class"
            code={`/* ✅ GOOD: One base class, modified with utilities */
.button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
}

.button--primary {
  background: #3b82f6;
}

.button--secondary {
  background: #6b7280;
}

.button--danger {
  background: #ef4444;
}

/* Usage in HTML:
<button class="button button--primary">Submit</button>
<button class="button button--secondary">Cancel</button>
<button class="button button--danger">Delete</button>
*/`}
          />
        </div>
      </SectionCard>

      {/* Technique 2: Delete Unused CSS */}
      <SectionCard
        title="2. Delete Unused CSS"
        description="Remove dead code"
        icon={Zap}
      >
        <div className="space-y-6">
          <InfoAlert type="warning" title="Unused CSS is a Problem">
            Unused CSS increases file size, slows page load, and makes code harder to maintain. 
            Delete it!
          </InfoAlert>

          <SyntaxBlock
            title="Finding Unused CSS"
            code={`/* Tools to find unused CSS: */

// 1. Chrome DevTools Coverage Tool
// - Open DevTools → More tools → Coverage
// - Record page load
// - See unused CSS highlighted in red

// 2. PurgeCSS (removes unused CSS automatically)
npm install -D purgecss

// purgecss.config.js
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  css: ['./src/**/*.css']
}

// Run PurgeCSS
npx purgecss --config ./purgecss.config.js --output ./dist

// 3. UnCSS (scans HTML and removes unused styles)
npm install -g uncss

// Command line
uncss https://yoursite.com > clean.css`}
          />

          <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
            <h4 className="text-lg font-semibold mb-3 text-amber-900 dark:text-amber-100">Before Deleting, Check:</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Is it used in JavaScript (dynamic classes)?</li>
              <li>✓ Is it in modal/dropdown content (hidden initially)?</li>
              <li>✓ Is it for different page states (logged in/out)?</li>
              <li>✓ Test thoroughly after deletion!</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Technique 3: Simplify Selectors */}
      <SectionCard
        title="3. Simplify Selectors"
        description="Reduce specificity"
        icon={Target}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Before: Overly Specific Selectors"
            code={`/* ❌ BAD: Too specific, hard to override */
#header div.container ul.nav li.nav-item a.nav-link {
  color: blue;
}

body .content .sidebar .widget .widget-content p {
  font-size: 14px;
}

div > ul > li > a.button {
  background: red;
}`}
          />

          <SyntaxBlock
            title="After: Simple, Flat Selectors"
            code={`/* ✅ GOOD: Simpler, easier to maintain and override */
.nav-link {
  color: blue;
}

.widget-text {
  font-size: 14px;
}

.button {
  background: red;
}

/* Benefits:
- Easier to understand
- Faster to render
- Simpler to override
- Less prone to conflicts
*/`}
          />
        </div>
      </SectionCard>

      {/* Technique 4: Rename Classes */}
      <SectionCard
        title="4. Rename Classes Clearly"
        description="Use descriptive names"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Bad Class Names</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                <li>.box</li>
                <li>.style2</li>
                <li>.blue-text</li>
                <li>.new-final-v3</li>
                <li>.header2</li>
                <li>.temp</li>
              </ul>
            </div>

            <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Good Class Names</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                <li>.user-profile-card</li>
                <li>.secondary-button</li>
                <li>.featured-text</li>
                <li>.navigation-menu</li>
                <li>.site-header</li>
                <li>.search-results</li>
              </ul>
            </div>
          </div>

          <SyntaxBlock
            title="Refactoring Example"
            code={`/* ❌ BEFORE: Unclear names */
.box {
  padding: 20px;
}

.box2 {
  background: white;
}

.blue {
  color: blue;
}

/* ✅ AFTER: Clear, descriptive names */
.product-card {
  padding: 20px;
}

.product-card--featured {
  background: white;
}

.product-card__price {
  color: blue;
}`}
          />
        </div>
      </SectionCard>

      {/* Technique 5: Extract Variables */}
      <SectionCard
        title="5. Extract CSS Variables"
        description="Reuse repeated values"
        icon={CheckCircle}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Before: Repeated Values"
            code={`/* ❌ BAD: Same colors repeated everywhere */
.header {
  background: #3b82f6;
  border-bottom: 2px solid #3b82f6;
}

.button {
  background: #3b82f6;
  border: 1px solid #3b82f6;
}

.link:hover {
  color: #3b82f6;
}

/* If you need to change the blue, you have to find all instances! */`}
          />

          <SyntaxBlock
            title="After: CSS Variables"
            code={`/* ✅ GOOD: Define once, use everywhere */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-danger: #ef4444;
  
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  
  --font-size-base: 16px;
  --font-size-lg: 20px;
}

.header {
  background: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}

.button {
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: var(--spacing-md);
}

.link:hover {
  color: var(--color-primary);
}

/* Change the blue ONCE in :root and it updates everywhere! */`}
          />
        </div>
      </SectionCard>

      {/* Complete Example */}
      <SectionCard
        title="Complete Refactoring Example"
        description="Before and after"
        icon={RefreshCw}
        variant="primary"
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Before: Messy CSS"
            code={`/* ❌ Messy, hard to maintain */
#main div.box {
  padding: 12px 24px 12px 24px;
  background-color: #3b82f6;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
}

#main div.box2 {
  padding: 12px 24px 12px 24px;
  background-color: #6b7280;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
}

body .content .card1 {
  padding: 20px 20px 20px 20px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
}

.blue-text {
  color: #3b82f6;
}

/* Unused old styles */
.old-button {
  background: red;
}`}
          />

          <SyntaxBlock
            title="After: Clean, Refactored CSS"
            code={`/* ✅ Clean, maintainable, reusable */

/* Variables */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --color-border: #e5e7eb;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}

/* Button Component */
.button {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.button--primary {
  background: var(--color-primary);
}

.button--secondary {
  background: var(--color-secondary);
}

/* Card Component */
.card {
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  background: white;
}

/* Utility */
.text-primary {
  color: var(--color-primary);
}

/* Benefits of refactoring:
- 50% less code
- Reusable components
- Easy to maintain
- Clear naming
- CSS variables for consistency
- Deleted unused styles
*/`}
          />
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Refactor CSS"
        description="The right time"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Before Big Features"
            description="Clean code before adding major changes"
            icon={Sparkles}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="After Code Reviews"
            description="Implement feedback and improvements"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Regular Maintenance"
            description="Schedule refactoring time quarterly"
            icon={RefreshCw}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Performance Issues"
            description="Optimize slow, bloated CSS"
            icon={Zap}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Refactoring Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Test After Changes:</strong> Verify visuals haven't changed</li>
          <li><strong>One Step at a Time:</strong> Small, incremental refactors are safer</li>
          <li><strong>Use Version Control:</strong> Commit before and after refactoring</li>
          <li><strong>Document Changes:</strong> Note what you changed and why</li>
          <li><strong>Remove Unused CSS:</strong> Use tools like PurgeCSS to find dead code</li>
          <li><strong>Extract Variables:</strong> Use CSS variables for repeated values</li>
          <li><strong>Simplify Selectors:</strong> Keep specificity low</li>
          <li><strong>Create Reusable Classes:</strong> Follow DRY principle</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="CSS Refactoring Tools">
        <div className="mt-2 space-y-2">
          <p><strong>PurgeCSS:</strong> Removes unused CSS automatically</p>
          <p><strong>UnCSS:</strong> Scans HTML and removes unused styles</p>
          <p><strong>Chrome DevTools Coverage:</strong> Find unused CSS in browser</p>
          <p><strong>cssnano:</strong> Optimizes and minifies CSS</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
