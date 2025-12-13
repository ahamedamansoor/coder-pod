'use client';

import React from 'react';
import { Palette, BookOpen, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface DesignSystemsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function DesignSystems({ onOpenWebPlayground }: DesignSystemsProps) {
  
  return (
    <CssTopicLayout
      icon={Palette}
      title="Design Systems"
      description="Create consistent designs across your entire product"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is a Design System?",
        description: "A collection of reusable components, guidelines, and standards that ensure design consistency",
        keyPoints: [
          "Consistent colors, typography, and spacing",
          "Reusable UI components with clear guidelines",
          "Design tokens for easy theme changes",
          "Documentation for designers and developers",
          "Used by big companies (Google Material, Apple)",
          "Speeds up design and development"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Real-World Example">
        Think of LEGO blocks: every piece follows the same rules (how they connect, their size system), 
        you can combine them in endless ways, and everything works together perfectly. 
        A design system is the same - <strong>consistent building blocks that work together to create any interface!</strong>
      </InfoAlert>

      {/* Core Parts */}
      <SectionCard
        title="Parts of a Design System"
        description="What makes up a design system"
        icon={Layers}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🎨 Design Tokens",
              description: "Variables for colors, spacing, fonts",
              example: "--primary-color: #3b82f6"
            },
            {
              title: "📦 Components",
              description: "Reusable UI pieces (buttons, cards, forms)",
              example: "Button component with 5 variations"
            },
            {
              title: "📐 Guidelines",
              description: "Rules for using components",
              example: "When to use primary vs secondary buttons"
            },
            {
              title: "📚 Documentation",
              description: "How to use everything",
              example: "Component examples and code snippets"
            }
          ]}
        />
      </SectionCard>

      {/* Design Tokens */}
      <SectionCard
        title="Design Tokens - The Foundation"
        description="Variables that define your design"
        icon={Sparkles}
        variant="primary"
      >
        <InfoAlert type="info" title="What are Design Tokens?">
          Design tokens are named variables that store design decisions (colors, spacing, fonts). 
          Change one token, update everywhere! Think of them as the DNA of your design system.
        </InfoAlert>

        <div className="space-y-6 mt-6">
          <SyntaxBlock
            title="Design Tokens Example"
            code={`/* design-tokens.css - Your design system's foundation */

/* Colors */
:root {
  /* Primary colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-900: #1e3a8a;
  
  /* Neutral colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-500: #6b7280;
  --color-gray-900: #111827;
  
  /* Semantic colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  
  /* Typography */
  --font-sans: system-ui, sans-serif;
  --font-mono: 'Courier New', monospace;
  
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}`}
          />

          <SyntaxBlock
            title="Using Design Tokens in Components"
            code={`/* button.css - Uses design tokens */

.button {
  /* Use tokens instead of hardcoded values */
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-family: var(--font-sans);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.button--primary {
  background: var(--color-primary-500);
  color: white;
}

.button--primary:hover {
  background: var(--color-primary-600);
}

.button--small {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.button--large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}`}
          />
        </div>
      </SectionCard>

      {/* Example: Mini Design System */}
      <SectionCard
        title="Example: Mini Design System"
        description="See design tokens in action"
        icon={BookOpen}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h1 class="heading-large">Design System Demo</h1>
  <p class="text-body">This demo uses a simple design system with tokens for colors, spacing, and typography.</p>
  
  <div class="section">
    <h2 class="heading-medium">Buttons</h2>
    <button class="btn btn--primary btn--medium">Primary</button>
    <button class="btn btn--secondary btn--medium">Secondary</button>
    <button class="btn btn--success btn--medium">Success</button>
  </div>
  
  <div class="section">
    <h2 class="heading-medium">Cards</h2>
    <div class="card-grid">
      <div class="card">
        <h3 class="heading-small">Feature 1</h3>
        <p class="text-body">Consistent spacing and typography</p>
      </div>
      <div class="card">
        <h3 class="heading-small">Feature 2</h3>
        <p class="text-body">Reusable components</p>
      </div>
    </div>
  </div>
</div>`}
          css={`:root {
  /* Design Tokens */
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-text: #1f2937;
  --color-text-muted: #6b7280;
  --color-bg: #ffffff;
  --color-border: #e5e7eb;
  
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 24px;
  --text-2xl: 32px;
  
  --radius-md: 8px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}

body {
  font-family: system-ui, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
}

.container {
  padding: var(--space-8);
}

/* Typography using tokens */
.heading-large {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin: 0 0 var(--space-2) 0;
}

.heading-medium {
  font-size: var(--text-xl);
  font-weight: 600;
  margin: 0 0 var(--space-4) 0;
}

.heading-small {
  font-size: var(--text-lg);
  font-weight: 600;
  margin: 0 0 var(--space-2) 0;
}

.text-body {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-6) 0;
  line-height: 1.6;
}

.section {
  margin-bottom: var(--space-8);
}

/* Button component using tokens */
.btn {
  display: inline-block;
  margin-right: var(--space-3);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: 600;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  opacity: 0.9;
}

.btn--secondary {
  background: var(--color-secondary);
  color: white;
}

.btn--secondary:hover {
  opacity: 0.9;
}

.btn--success {
  background: var(--color-success);
  color: white;
}

.btn--success:hover {
  opacity: 0.9;
}

/* Card component using tokens */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
}

.card {
  padding: var(--space-6);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f3f4f6;
    --color-text-muted: #9ca3af;
    --color-bg: #1f2937;
    --color-border: #374151;
  }
  
  .btn--primary {
    background: var(--color-primary);
  }
  
  .btn--secondary {
    background: var(--color-secondary);
  }
  
  .btn--success {
    background: var(--color-success);
  }
}`}
          title="Design System in Action"
          colorTheme="purple"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Benefits */}
      <SectionCard
        title="Why Use a Design System?"
        description="The advantages"
        icon={CheckCircle}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Consistency</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Every button looks the same. Every spacing follows the same scale. 
              No more "this button is 14px, that one is 15px" inconsistencies.
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Speed</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              No decisions needed - use existing components. Build pages in minutes, not hours. 
              Designers and developers work faster.
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Easy Updates</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Change <code>--color-primary</code> once, update 1,000 buttons instantly. 
              Rebranding becomes easy!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Team Alignment</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Everyone uses the same components. Designers design with real components. 
              Developers build what was designed. No surprises!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* How to Build */}
      <SectionCard
        title="How to Build a Design System"
        description="Step-by-step process"
        icon={Target}
      >
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 1: Define Design Tokens</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Start with the basics: colors (3-5 main colors), spacing scale (4px, 8px, 12px...), 
              typography (2-3 fonts, 5-6 sizes), and border radius values.
            </p>
          </div>

          <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Step 2: Build Core Components</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Start with the most-used components: Button, Input, Card, Modal. 
              Make sure they use your design tokens.
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Step 3: Document Everything</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Write clear guidelines: when to use each component, examples, code snippets. 
              Make it easy for new team members.
            </p>
          </div>

          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Step 4: Create a Storybook</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Build a website showing all components with live examples. 
              Tools like Storybook, Figma, or even a simple HTML page work great.
            </p>
          </div>

          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Step 5: Maintain & Evolve</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Review and update regularly. Add new components as needed. 
              Get feedback from users and improve!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Famous Design Systems */}
      <SectionCard
        title="Famous Design Systems to Learn From"
        description="Real-world examples"
        icon={BookOpen}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎨 Material Design (Google)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Google's design system used across all their products. Comprehensive, well-documented, 
              with components for web and mobile.
            </p>
            <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">material.io</code>
          </div>

          <div className="p-5 border-2 border-purple-200 dark:border-purple-800 rounded-xl">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🍎 Human Interface (Apple)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Apple's design language. Clean, minimalist, with detailed guidelines 
              for iOS, macOS, and web.
            </p>
            <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">developer.apple.com/design</code>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Lightning (Salesforce)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Enterprise-focused design system. Great example of complex component library 
              with clear documentation.
            </p>
            <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">lightningdesignsystem.com</code>
          </div>

          <div className="p-5 border-2 border-pink-200 dark:border-pink-800 rounded-xl">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">🛒 Polaris (Shopify)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              E-commerce focused design system. Excellent examples of practical components 
              for admin interfaces.
            </p>
            <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded">polaris.shopify.com</code>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Create a Design System"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Multiple Products"
            description="When you have 2+ apps that should look similar"
            icon={Layers}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Large Teams"
            description="5+ designers/developers working together"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Long-Term Projects"
            description="Products that will be maintained for years"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="White-Label Products"
            description="Same product with different branding for clients"
            icon={Palette}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Design System Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Start Small:</strong> Begin with 10-15 tokens and 5 components. Don't try to build everything at once</li>
          <li><strong>Use Your System:</strong> Actually use it in a real project. You'll find what's missing or doesn't work</li>
          <li><strong>Version Control:</strong> Treat your design system like code - use Git, track changes, release versions</li>
          <li><strong>Get Feedback:</strong> Talk to designers and developers using it. What's confusing? What's missing?</li>
          <li><strong>Keep Documentation Updated:</strong> Every component should have examples and usage guidelines</li>
          <li><strong>Make it Accessible:</strong> All components should work with keyboard and screen readers</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="Design System Tools">
        <div className="mt-2 space-y-2">
          <p><strong>Design:</strong> Figma, Sketch, Adobe XD - create design libraries</p>
          <p><strong>Documentation:</strong> Storybook, Docz, Styleguidist - showcase components</p>
          <p><strong>Tokens:</strong> Style Dictionary, Theo - manage design tokens</p>
          <p><strong>CSS:</strong> CSS Variables, Sass, CSS Modules - implement tokens</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
