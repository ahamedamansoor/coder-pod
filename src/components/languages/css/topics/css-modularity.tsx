'use client';

import React from 'react';
import { Puzzle, Box, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssModularityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssModularity({ onOpenWebPlayground }: CssModularityProps) {
  
  return (
    <CssTopicLayout
      icon={Puzzle}
      title="CSS Modularity"
      description="Break your CSS into reusable, maintainable pieces"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Modularity?",
        description: "Organizing CSS into small, independent, reusable modules instead of one giant stylesheet",
        keyPoints: [
          "Break CSS into smaller, focused files",
          "Each module does one thing well",
          "Reuse modules across projects",
          "Easy to find and update styles",
          "Prevents CSS from becoming messy",
          "Essential for large projects"
        ]
      }}
    >

      {/* The Problem */}
      <InfoAlert type="warning" title="The Problem Without Modularity">
        Imagine a single 5,000-line CSS file with everything mixed together: buttons, forms, navigation, colors, typography... 
        Finding anything is a nightmare, changing one thing breaks another, and nobody wants to touch it! 
        <strong> Modularity fixes this by breaking CSS into logical, manageable pieces.</strong>
      </InfoAlert>

      {/* Core Principles */}
      <SectionCard
        title="Core Principles of Modular CSS"
        description="What makes CSS modular"
        icon={CheckCircle}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📦 Single Responsibility",
              description: "Each module handles one thing",
              example: "buttons.css only contains button styles"
            },
            {
              title: "🔄 Reusable",
              description: "Use the same module anywhere",
              example: "card.css works on any page"
            },
            {
              title: "🎯 Independent",
              description: "Modules don't depend on each other",
              example: "Changing buttons doesn't break forms"
            },
            {
              title: "📝 Self-Contained",
              description: "Everything for one component in one file",
              example: "modal.css has all modal styles"
            }
          ]}
        />
      </SectionCard>

      {/* File Organization */}
      <SectionCard
        title="How to Organize Modular CSS"
        description="Common file structures"
        icon={Layers}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Option 1: Component-Based Structure</h4>
            <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <div>📁 styles/</div>
              <div className="ml-4">📁 components/</div>
              <div className="ml-8">📄 button.css</div>
              <div className="ml-8">📄 card.css</div>
              <div className="ml-8">📄 modal.css</div>
              <div className="ml-8">📄 form.css</div>
              <div className="ml-4">📁 layout/</div>
              <div className="ml-8">📄 header.css</div>
              <div className="ml-8">📄 footer.css</div>
              <div className="ml-8">📄 grid.css</div>
              <div className="ml-4">📁 base/</div>
              <div className="ml-8">📄 reset.css</div>
              <div className="ml-8">📄 typography.css</div>
              <div className="ml-8">📄 colors.css</div>
              <div className="ml-4">📄 main.css (imports all)</div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">Option 2: ITCSS (Inverted Triangle)</h4>
            <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <div>📁 styles/</div>
              <div className="ml-4">📄 1-settings.css (variables)</div>
              <div className="ml-4">📄 2-tools.css (mixins)</div>
              <div className="ml-4">📄 3-generic.css (reset)</div>
              <div className="ml-4">📄 4-elements.css (h1, p, a)</div>
              <div className="ml-4">📄 5-objects.css (layout patterns)</div>
              <div className="ml-4">📄 6-components.css (UI components)</div>
              <div className="ml-4">📄 7-utilities.css (helpers)</div>
            </div>
          </div>

          <SyntaxBlock
            title="Main CSS File (Imports All Modules)"
            code={`/* main.css - Import order matters! */

/* Base styles first */
@import './base/reset.css';
@import './base/typography.css';
@import './base/colors.css';

/* Layout styles */
@import './layout/grid.css';
@import './layout/header.css';
@import './layout/footer.css';

/* Components */
@import './components/button.css';
@import './components/card.css';
@import './components/form.css';
@import './components/modal.css';

/* Utilities last (highest specificity) */
@import './utilities/spacing.css';
@import './utilities/text.css';`}
          />
        </div>
      </SectionCard>

      {/* Example: Button Module */}
      <SectionCard
        title="Example: Button Module"
        description="Complete, self-contained button styles"
        icon={Box}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="components/button.css"
            code={`/* Button Module - All button styles in one file */

/* Base button */
.button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Button sizes */
.button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.button--large {
  padding: 16px 32px;
  font-size: 18px;
}

/* Button colors */
.button--primary {
  background: #3b82f6;
  color: white;
}

.button--primary:hover {
  background: #2563eb;
}

.button--secondary {
  background: #6b7280;
  color: white;
}

.button--secondary:hover {
  background: #4b5563;
}

.button--success {
  background: #10b981;
  color: white;
}

.button--success:hover {
  background: #059669;
}

/* Button states */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--loading {
  position: relative;
  color: transparent;
}

.button--loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`}
          />

          <FrontendCodePreview
            html={`<div class="demo">
  <h2>Button Module in Action</h2>
  
  <div class="section">
    <h3>Primary Buttons</h3>
    <button class="button button--primary">Default</button>
    <button class="button button--primary button--small">Small</button>
    <button class="button button--primary button--large">Large</button>
  </div>
  
  <div class="section">
    <h3>Button Colors</h3>
    <button class="button button--primary">Primary</button>
    <button class="button button--secondary">Secondary</button>
    <button class="button button--success">Success</button>
  </div>
  
  <div class="section">
    <h3>Button States</h3>
    <button class="button button--primary">Normal</button>
    <button class="button button--primary" disabled>Disabled</button>
    <button class="button button--primary button--loading">Loading</button>
  </div>
</div>`}
            css={`body {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

.demo h2 {
  margin: 0 0 24px 0;
  color: #1f2937;
}

.section {
  margin-bottom: 32px;
}

.section h3 {
  margin: 0 0 12px 0;
  color: #4b5563;
  font-size: 16px;
}

/* Button Module Styles */
.button {
  display: inline-block;
  padding: 12px 24px;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.button--large {
  padding: 16px 32px;
  font-size: 18px;
}

.button--primary {
  background: #3b82f6;
  color: white;
}

.button--primary:hover {
  background: #2563eb;
}

.button--secondary {
  background: #6b7280;
  color: white;
}

.button--secondary:hover {
  background: #4b5563;
}

.button--success {
  background: #10b981;
  color: white;
}

.button--success:hover {
  background: #059669;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--loading {
  position: relative;
  color: transparent;
}

.button--loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1f2937;
  }
  
  .demo h2 {
    color: #f3f4f6;
  }
  
  .section h3 {
    color: #9ca3af;
  }
}`}
            title="Button Module Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </div>
      </SectionCard>

      {/* Benefits */}
      <SectionCard
        title="Benefits of Modular CSS"
        description="Why break CSS into modules"
        icon={Sparkles}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
              ✅ Easy to Find
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Need to change button styles? Go straight to <code>button.css</code>. 
              No hunting through a 5,000-line file!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
              ✅ Easy to Reuse
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Need buttons on a new project? Copy <code>button.css</code> and you're done. 
              No copying half a stylesheet!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
              ✅ Safe to Change
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Updating <code>card.css</code> won't accidentally break your buttons. 
              Each module is independent!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
              ✅ Team Friendly
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Multiple developers can work on different modules without conflicts. 
              No more merge nightmares!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Best Practices */}
      <SectionCard
        title="Modular CSS Best Practices"
        description="How to do it right"
        icon={Target}
      >
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. One Component = One File</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Each UI component should have its own CSS file. Don't mix button and card styles in one file.
            </p>
          </div>

          <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">2. Keep Modules Small</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If a module gets too big (&gt;200 lines), split it into smaller modules. Break <code>form.css</code> into 
              <code>input.css</code>, <code>select.css</code>, <code>checkbox.css</code>.
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. Use Clear Names</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Name files after what they style: <code>button.css</code>, <code>navigation.css</code>, <code>modal.css</code>. 
              Not <code>styles2.css</code> or <code>new-css.css</code>.
            </p>
          </div>

          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">4. Import Order Matters</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Always import in this order: Reset → Base → Layout → Components → Utilities. 
              This prevents specificity issues.
            </p>
          </div>

          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">5. Document Your Modules</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Add comments at the top of each module explaining what it does and how to use it. 
              Your future self will thank you!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Modular CSS"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Component Libraries"
            description="Building reusable UI components"
            icon={Box}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Large Projects"
            description="Websites with hundreds of pages"
            icon={Layers}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Team Projects"
            description="Multiple developers working together"
            icon={CheckCircle}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Design Systems"
            description="Consistent UI across products"
            icon={Sparkles}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Common Mistakes */}
      <InfoAlert type="warning" title="Common Modular CSS Mistakes">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>❌ Too Many Small Files:</strong> Don't create 100 tiny files. Group related styles (all form inputs in one file)</li>
          <li><strong>❌ Mixing Concerns:</strong> Don't put typography in <code>button.css</code> - keep each module focused</li>
          <li><strong>❌ Deep Dependencies:</strong> Modules shouldn't depend on each other. <code>button.css</code> shouldn't need <code>card.css</code></li>
          <li><strong>❌ No Naming Convention:</strong> Use consistent naming (BEM, OOCSS) across all modules</li>
          <li><strong>❌ Ignoring Import Order:</strong> Wrong order causes specificity battles and unexpected styles</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="Tools for Modular CSS">
        <div className="mt-2 space-y-2">
          <p><strong>CSS Preprocessors:</strong> Sass, Less, PostCSS make imports and organization easier</p>
          <p><strong>CSS Modules:</strong> React/Vue/Angular can scope CSS to components automatically</p>
          <p><strong>Build Tools:</strong> Webpack, Vite, Parcel bundle multiple CSS files into one</p>
          <p><strong>Frameworks:</strong> Bootstrap, Tailwind, Material UI are examples of modular CSS</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
