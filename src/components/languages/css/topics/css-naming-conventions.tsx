'use client';

import React from 'react';
import { FileText, Sparkles, Target, Layers, CheckCircle, Hash } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssNamingConventionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssNamingConventions({ onOpenWebPlayground }: CssNamingConventionsProps) {
  
  return (
    <CssTopicLayout
      icon={FileText}
      title="CSS Naming Conventions"
      description="Name your CSS classes in a way everyone understands"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What are CSS Naming Conventions?",
        description: "Rules for naming CSS classes so your code is clear, consistent, and maintainable",
        keyPoints: [
          "Consistent naming across your project",
          "Clear class names that explain their purpose",
          "Avoid naming conflicts and confusion",
          "Make code easier for teams to work on",
          "Popular conventions: BEM, camelCase, kebab-case",
          "Essential for large projects"
        ]
      }}
    >

      {/* The Problem */}
      <InfoAlert type="warning" title="What Happens Without Good Naming?">
        Without naming rules, you end up with a mess: <code>.btn</code>, <code>.button</code>, <code>.button2</code>, 
        <code>.newButton</code>, <code>.btn-new-final</code> all doing the same thing! Good naming conventions 
        prevent this chaos and make your code professional.
      </InfoAlert>

      {/* Basic Naming Styles */}
      <SectionCard
        title="Common Naming Styles"
        description="Different ways to write class names"
        icon={Hash}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🔤 kebab-case",
              description: "Words separated by dashes (most common in CSS)",
              example: ".user-profile, .nav-item, .button-primary"
            },
            {
              title: "🐫 camelCase",
              description: "First word lowercase, rest capitalized",
              example: ".userProfile, .navItem, .buttonPrimary"
            },
            {
              title: "🐍 snake_case",
              description: "Words separated by underscores (rare in CSS)",
              example: ".user_profile, .nav_item, .button_primary"
            },
            {
              title: "🅿️ PascalCase",
              description: "All words capitalized (rare in CSS)",
              example: ".UserProfile, .NavItem, .ButtonPrimary"
            }
          ]}
        />

        <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">✅ Recommended: kebab-case</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            The CSS community mostly uses <strong>kebab-case</strong> because:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Easy to read: <code>.main-navigation</code> vs <code>.mainNavigation</code></li>
            <li>Consistent with CSS properties: <code>font-family</code>, <code>background-color</code></li>
            <li>Used by most CSS frameworks (Bootstrap, Tailwind)</li>
            <li>Standard in the community</li>
          </ul>
        </div>
      </SectionCard>

      {/* BEM Naming Convention */}
      <SectionCard
        title="BEM Naming Convention"
        description="The most popular CSS naming system"
        icon={Layers}
        variant="primary"
      >
        <InfoAlert type="info" title="What is BEM?">
          BEM = <strong>Block Element Modifier</strong>. It's a naming convention that makes class names 
          super descriptive. Format: <code>.block__element--modifier</code>
        </InfoAlert>

        <div className="space-y-6 mt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Block 🏗️</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">The main component</p>
              <code className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block">.card</code>
              <code className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">.menu</code>
              <code className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">.button</code>
            </div>

            <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Element 🧩</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Part of the block (use __)</p>
              <code className="text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded block">.card__title</code>
              <code className="text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded block mt-2">.menu__item</code>
              <code className="text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded block mt-2">.button__icon</code>
            </div>

            <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Modifier 🎨</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Variation (use --)</p>
              <code className="text-sm bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block">.card--featured</code>
              <code className="text-sm bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block mt-2">.menu--vertical</code>
              <code className="text-sm bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block mt-2">.button--large</code>
            </div>
          </div>

          <SyntaxBlock
            title="BEM Example - Product Card"
            code={`/* Block: The main component */
.product-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

/* Elements: Parts of the product card */
.product-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.product-card__title {
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0;
}

.product-card__price {
  font-size: 20px;
  color: #10b981;
  font-weight: 700;
}

.product-card__description {
  font-size: 14px;
  color: #6b7280;
  margin: 8px 0;
}

/* Modifiers: Variations of the product card */
.product-card--featured {
  border-color: #3b82f6;
  border-width: 2px;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
}

.product-card--compact {
  padding: 12px;
}

.product-card--compact .product-card__image {
  height: 120px;
}`}
          />

          <FrontendCodePreview
            html={`<div class="product-card">
  <img class="product-card__image" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" alt="Product">
  <h3 class="product-card__title">Wireless Headphones</h3>
  <p class="product-card__price">$99.99</p>
  <p class="product-card__description">Premium sound quality with active noise cancellation</p>
</div>

<div class="product-card product-card--featured">
  <img class="product-card__image" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop" alt="Product">
  <h3 class="product-card__title">Pro Headphones ⭐</h3>
  <p class="product-card__price">$199.99</p>
  <p class="product-card__description">Our best-selling premium headphones with extended battery</p>
</div>

<div class="product-card product-card--compact">
  <img class="product-card__image" src="https://images.unsplash.com/photo-1545127398-14699f92334b?w=300&h=120&fit=crop" alt="Product">
  <h3 class="product-card__title">Budget Headphones</h3>
  <p class="product-card__price">$49.99</p>
</div>`}
            css={`body {
  padding: 40px;
  font-family: system-ui, sans-serif;
  display: grid;
  gap: 20px;
}

.product-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
}

.product-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
}

.product-card__title {
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0 8px 0;
  color: #1f2937;
}

.product-card__price {
  font-size: 20px;
  color: #10b981;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.product-card__description {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

/* Featured Modifier */
.product-card--featured {
  border-color: #3b82f6;
  border-width: 2px;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

/* Compact Modifier */
.product-card--compact {
  padding: 12px;
}

.product-card--compact .product-card__image {
  height: 120px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1f2937;
  }
  
  .product-card {
    background: #374151;
    border-color: #4b5563;
  }
  
  .product-card__title {
    color: #f3f4f6;
  }
  
  .product-card__description {
    color: #9ca3af;
  }
}`}
            title="BEM Naming in Action"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </div>

        <InfoAlert type="success" title="Why BEM Works">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Self-Documenting:</strong> <code>.product-card__price</code> tells you exactly what it is</li>
            <li><strong>No Conflicts:</strong> Every component has unique class names</li>
            <li><strong>Easy to Find:</strong> Search for "product-card" to find all related styles</li>
            <li><strong>Safe to Change:</strong> Modifying <code>.product-card__title</code> won't break other titles</li>
          </ul>
        </InfoAlert>
      </SectionCard>

      {/* Naming Rules */}
      <SectionCard
        title="General Naming Rules"
        description="Best practices for any naming convention"
        icon={CheckCircle}
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                ✅ DO These Things
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✓ Use descriptive names: <code>.user-avatar</code></li>
                <li>✓ Be consistent: Choose one style and stick to it</li>
                <li>✓ Use lowercase: <code>.nav-menu</code> not <code>.Nav-Menu</code></li>
                <li>✓ Be specific: <code>.article-title</code> not <code>.title</code></li>
                <li>✓ Use full words: <code>.navigation</code> not <code>.nav</code> (unless common abbreviation)</li>
              </ul>
            </div>

            <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                ❌ DON'T Do These Things
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✗ Generic names: <code>.item</code>, <code>.box</code>, <code>.thing</code></li>
                <li>✗ Cryptic abbreviations: <code>.usrprf</code>, <code>.nv</code></li>
                <li>✗ Numbers without context: <code>.box2</code>, <code>.style3</code></li>
                <li>✗ Style-based names: <code>.red-text</code>, <code>.big-box</code></li>
                <li>✗ Starting with numbers: <code>.2-column</code> (invalid!)</li>
              </ul>
            </div>
          </div>

          <SyntaxBlock
            title="Good vs Bad Examples"
            code={`/* ❌ BAD: Generic, unclear names */
.box { }
.item2 { }
.red { }
.big { }
.new { }

/* ✅ GOOD: Descriptive, specific names */
.user-profile-card { }
.navigation-menu-item { }
.error-message { }
.header-logo-large { }
.product-featured { }

/* ❌ BAD: Style-based (what if design changes?) */
.red-button { }         /* What if it becomes blue? */
.left-sidebar { }       /* What if it moves to the right? */

/* ✅ GOOD: Purpose-based */
.button-danger { }      /* Still makes sense if color changes */
.sidebar-navigation { } /* Describes what it is, not where it is */

/* ❌ BAD: Too generic */
.title { }              /* Which title? */
.image { }              /* Which image? */

/* ✅ GOOD: Specific */
.article-title { }
.product-thumbnail { }`}
          />
        </div>
      </SectionCard>

      {/* State Classes */}
      <SectionCard
        title="Naming States and Variations"
        description="How to name different states"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
            <h4 className="text-lg font-semibold mb-3 text-indigo-900 dark:text-indigo-100">Common State Prefixes</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">.is-active</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Currently active/selected</p>
              </div>
              <div>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">.is-disabled</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Not clickable/usable</p>
              </div>
              <div>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">.is-loading</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Fetching data</p>
              </div>
              <div>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">.is-hidden</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Not visible</p>
              </div>
              <div>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">.has-error</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Contains an error</p>
              </div>
              <div>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">.is-open</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Expanded/visible</p>
              </div>
            </div>
          </div>

          <SyntaxBlock
            title="State Class Examples"
            code={`/* Base button */
.button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Button states */
.button.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.button.is-loading {
  position: relative;
  color: transparent;
}

.button.is-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

/* Dropdown states */
.dropdown {
  position: relative;
}

.dropdown__menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
}

.dropdown.is-open .dropdown__menu {
  display: block;
}`}
          />
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Which Convention"
        description="Choosing the right naming style"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Use BEM For..."
            description="Components, reusable UI elements, component libraries"
            icon={Layers}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Use Utility Classes For..."
            description="Common styles: .text-center, .mb-4, .flex"
            icon={Sparkles}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Use State Classes For..."
            description="Temporary states: .is-active, .is-loading, .has-error"
            icon={CheckCircle}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Use Layout Classes For..."
            description="Page structure: .l-header, .l-main, .l-sidebar"
            icon={Target}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Naming Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Be Consistent:</strong> Pick one convention (like BEM) and use it everywhere</li>
          <li><strong>Be Descriptive:</strong> Names should explain what the element does, not how it looks</li>
          <li><strong>Think Long-Term:</strong> Avoid names tied to current design (like .red-button)</li>
          <li><strong>Use Prefixes:</strong> For states (.is-active), layout (.l-header), JavaScript hooks (.js-toggle)</li>
          <li><strong>Keep It Lowercase:</strong> Use kebab-case for consistency with CSS properties</li>
          <li><strong>Avoid Deep Nesting:</strong> <code>.card__header</code> not <code>.card__container__header__title</code></li>
          <li><strong>Document Your System:</strong> Write a style guide for your team</li>
        </ul>
      </InfoAlert>

      {/* Common Mistakes */}
      <InfoAlert type="warning" title="Common Naming Mistakes">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>❌ Too Generic:</strong> <code>.item</code>, <code>.box</code>, <code>.content</code> (too vague)</li>
          <li><strong>❌ Style-Based:</strong> <code>.blue-text</code>, <code>.large-box</code> (what if design changes?)</li>
          <li><strong>❌ Inconsistent:</strong> Mixing <code>.user-card</code> and <code>.userCard</code> in same project</li>
          <li><strong>❌ Too Long:</strong> <code>.homepage-hero-section-container-wrapper-div</code> (overkill!)</li>
          <li><strong>❌ Abbreviated:</strong> <code>.usrprf</code>, <code>.nv</code> (unclear what they mean)</li>
          <li><strong>❌ Numbers:</strong> <code>.button2</code>, <code>.style3-final</code> (no context)</li>
        </ul>
      </InfoAlert>

      {/* Quick Reference */}
      <SectionCard
        title="Quick Reference Guide"
        description="Common patterns at a glance"
        icon={FileText}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">Component Naming (BEM)</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>.component</li>
              <li>.component__element</li>
              <li>.component--modifier</li>
              <li>.component__element--modifier</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">State Naming</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>.is-active</li>
              <li>.is-disabled</li>
              <li>.is-loading</li>
              <li>.has-error</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">Layout Naming</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>.l-header</li>
              <li>.l-sidebar</li>
              <li>.l-main</li>
              <li>.l-footer</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">JavaScript Hooks</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>.js-toggle</li>
              <li>.js-modal-trigger</li>
              <li>.js-form-submit</li>
              <li>.js-dropdown</li>
            </ul>
          </div>
        </div>
      </SectionCard>

    </CssTopicLayout>
  );
}
