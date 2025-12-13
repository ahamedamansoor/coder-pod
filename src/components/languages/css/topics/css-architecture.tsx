'use client';

import React from 'react';
import { Building2, Box, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssArchitectureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssArchitecture({ onOpenWebPlayground }: CssArchitectureProps) {
  
  return (
    <CssTopicLayout
      icon={Building2}
      title="CSS Architecture"
      description="Organize your CSS code so it's easy to maintain and scale"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Architecture?",
        description: "A system for organizing CSS code in large projects so it stays clean and maintainable",
        keyPoints: [
          "Prevents CSS from becoming a mess",
          "Makes code easier to understand and modify",
          "Helps teams work together without conflicts",
          "Uses naming conventions and organization rules",
          "Popular methodologies: BEM, OOCSS, SMACSS",
          "Essential for large websites and applications"
        ]
      }}
    >

      {/* The Problem */}
      <InfoAlert type="warning" title="The Problem Without CSS Architecture">
        Without organization, CSS becomes a nightmare: classes with names like <code>.button2-new-final</code>, 
        styles scattered everywhere, team members overwriting each other's code with <code>!important</code>, 
        and nobody knowing which CSS is safe to delete. Sound familiar? CSS Architecture solves this!
      </InfoAlert>

      {/* Core Principles */}
      <SectionCard
        title="Core Principles of Good CSS Architecture"
        description="What makes CSS organized and maintainable"
        icon={CheckCircle}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📛 Clear Naming",
              description: "Class names explain what they do",
              example: ".user-profile__avatar (clear) vs .img2 (unclear)"
            },
            {
              title: "🔄 Reusable",
              description: "Write CSS once, use it many times",
              example: "One .button class for all buttons"
            },
            {
              title: "🎯 Specific",
              description: "Styles apply only where intended",
              example: ".card__title (specific) vs .title (too broad)"
            },
            {
              title: "📦 Modular",
              description: "Each component is self-contained",
              example: "Card CSS doesn't affect button CSS"
            }
          ]}
        />
      </SectionCard>

      {/* BEM Methodology */}
      <SectionCard
        title="BEM (Block Element Modifier)"
        description="The most popular CSS naming convention"
        icon={Box}
        variant="primary"
      >
        <InfoAlert type="info" title="What is BEM?">
          BEM is a naming convention that makes class names super clear. It uses three parts: 
          <strong> Block</strong> (component), <strong>Element</strong> (part of component), 
          and <strong>Modifier</strong> (variation). It looks like: <code>.block__element--modifier</code>
        </InfoAlert>

        <div className="space-y-6 mt-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">BEM Structure Explained</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-24 font-mono text-sm font-semibold text-blue-700 dark:text-blue-300">Block:</div>
                <div className="flex-1">
                  <code className="text-blue-600 dark:text-blue-400">.card</code>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">The main component (like a card, button, menu)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-24 font-mono text-sm font-semibold text-blue-700 dark:text-blue-300">Element:</div>
                <div className="flex-1">
                  <code className="text-blue-600 dark:text-blue-400">.card__title</code>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">A part of the block (uses double underscore __)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-24 font-mono text-sm font-semibold text-blue-700 dark:text-blue-300">Modifier:</div>
                <div className="flex-1">
                  <code className="text-blue-600 dark:text-blue-400">.card--featured</code>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">A variation of the block (uses double dash --)</p>
                </div>
              </div>
            </div>
          </div>

          <SyntaxBlock
            title="BEM Example - User Card"
            code={`/* Block: The main component */
.user-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

/* Element: Part of the card (notice __) */
.user-card__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.user-card__name {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}

.user-card__bio {
  font-size: 14px;
  color: #6b7280;
}

/* Modifier: Variation of the card (notice --) */
.user-card--premium {
  border-color: #3b82f6;
  background: linear-gradient(to bottom, #eff6ff, white);
}

.user-card--compact {
  padding: 10px;
}

.user-card--compact .user-card__avatar {
  width: 40px;
  height: 40px;
}`}
          />
        </div>

        <div className="mt-6">
          <FrontendCodePreview
            html={`<div class="user-card">
  <img class="user-card__avatar" src="https://via.placeholder.com/60" alt="User">
  <h3 class="user-card__name">John Doe</h3>
  <p class="user-card__bio">Web Developer</p>
</div>

<div class="user-card user-card--premium">
  <img class="user-card__avatar" src="https://via.placeholder.com/60" alt="User">
  <h3 class="user-card__name">Jane Smith</h3>
  <p class="user-card__bio">Premium Member ⭐</p>
</div>

<div class="user-card user-card--compact">
  <img class="user-card__avatar" src="https://via.placeholder.com/40" alt="User">
  <h3 class="user-card__name">Bob Wilson</h3>
</div>`}
            css={`.user-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  margin-bottom: 20px;
  font-family: system-ui, sans-serif;
}

.user-card__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  margin-bottom: 12px;
}

.user-card__name {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1f2937;
}

.user-card__bio {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Premium Modifier */
.user-card--premium {
  border-color: #3b82f6;
  border-width: 2px;
  background: linear-gradient(to bottom, #eff6ff, white);
}

/* Compact Modifier */
.user-card--compact {
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-card--compact .user-card__avatar {
  width: 40px;
  height: 40px;
  margin-bottom: 0;
}

.user-card--compact .user-card__name {
  font-size: 16px;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  .user-card {
    background: #374151;
    border-color: #4b5563;
  }
  
  .user-card__name {
    color: #f3f4f6;
  }
  
  .user-card__bio {
    color: #9ca3af;
  }
  
  .user-card--premium {
    background: linear-gradient(to bottom, #1e3a8a, #374151);
    border-color: #3b82f6;
  }
}`}
            title="BEM in Action"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </div>

        <InfoAlert type="success" title="Why BEM is Popular">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Class names are self-explanatory: <code>.menu__item--active</code> tells you everything</li>
            <li>No naming conflicts: Every component has unique class names</li>
            <li>Easy to search: Find all card-related styles by searching "card"</li>
            <li>Safe to modify: Changing <code>.card__title</code> won't break anything else</li>
          </ul>
        </InfoAlert>
      </SectionCard>

      {/* OOCSS */}
      <SectionCard
        title="OOCSS (Object-Oriented CSS)"
        description="Writing reusable CSS 'objects'"
        icon={Layers}
      >
        <InfoAlert type="info" title="What is OOCSS?">
          OOCSS is about separating <strong>structure</strong> (layout, positioning) from <strong>skin</strong> (colors, fonts). 
          You create reusable objects that can be combined in different ways.
        </InfoAlert>

        <div className="space-y-6 mt-6">
          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">OOCSS Principles</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">1. Separate Structure from Skin</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">Structure = size, padding, margin. Skin = colors, fonts, shadows</p>
              </div>
              <div>
                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">2. Separate Container from Content</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">Content should look the same no matter where it's placed</p>
              </div>
            </div>
          </div>

          <SyntaxBlock
            title="OOCSS Example"
            code={`/* STRUCTURE: Layout and sizing */
.box {
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* SKIN: Visual appearance */
.skin-primary {
  background: #3b82f6;
  color: white;
  border: 2px solid #2563eb;
}

.skin-success {
  background: #10b981;
  color: white;
  border: 2px solid #059669;
}

.skin-danger {
  background: #ef4444;
  color: white;
  border: 2px solid #dc2626;
}

/* COMBINE THEM */
/* <div class="box skin-primary">...</div> */
/* <div class="box skin-success">...</div> */

/* CONTENT: Works anywhere */
.media {
  display: flex;
  gap: 15px;
}

.media__image {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.media__content {
  flex: 1;
}`}
          />

          <FrontendCodePreview
            html={`<div class="box skin-primary">
  <h3>Primary Box</h3>
  <p>This box uses the primary skin</p>
</div>

<div class="box skin-success">
  <h3>Success Box</h3>
  <p>This box uses the success skin</p>
</div>

<div class="box skin-danger">
  <h3>Danger Box</h3>
  <p>This box uses the danger skin</p>
</div>

<div class="media">
  <img class="media__image" src="https://via.placeholder.com/60" alt="User">
  <div class="media__content">
    <h4>Media Object</h4>
    <p>Content looks the same anywhere</p>
  </div>
</div>`}
            css={`body {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

/* STRUCTURE */
.box {
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.box h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.box p {
  margin: 0;
  font-size: 14px;
}

/* SKINS */
.skin-primary {
  background: #3b82f6;
  color: white;
  border: 2px solid #2563eb;
}

.skin-success {
  background: #10b981;
  color: white;
  border: 2px solid #059669;
}

.skin-danger {
  background: #ef4444;
  color: white;
  border: 2px solid #dc2626;
}

/* MEDIA OBJECT */
.media {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.media__image {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.media__content h4 {
  margin: 0 0 8px 0;
  color: #1f2937;
}

.media__content p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1f2937;
  }
  
  .media {
    background: #374151;
    border-color: #4b5563;
  }
  
  .media__content h4 {
    color: #f3f4f6;
  }
  
  .media__content p {
    color: #9ca3af;
  }
}`}
            title="OOCSS in Action"
            colorTheme="green"
            onOpenPlayground={onOpenWebPlayground}
          />
        </div>

        <InfoAlert type="success" title="Benefits of OOCSS">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Very reusable: Mix and match structure + skin classes</li>
            <li>Smaller CSS files: No duplicated styles</li>
            <li>Easy updates: Change one skin, update everywhere</li>
            <li>Framework-friendly: How Bootstrap and Tailwind work</li>
          </ul>
        </InfoAlert>
      </SectionCard>

      {/* SMACSS */}
      <SectionCard
        title="SMACSS (Scalable and Modular Architecture)"
        description="Organizing CSS files by category"
        icon={Target}
      >
        <InfoAlert type="info" title="What is SMACSS?">
          SMACSS organizes CSS into five categories: <strong>Base</strong>, <strong>Layout</strong>, 
          <strong>Module</strong>, <strong>State</strong>, and <strong>Theme</strong>. 
          Each category has its own file and naming convention.
        </InfoAlert>

        <div className="space-y-6 mt-6">
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100">SMACSS Categories</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">1. Base 📄</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Default styles for HTML elements</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">body, h1, a, button</code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">2. Layout 🏗️</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Major page structure (prefix with l-)</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">.l-header, .l-sidebar, .l-main</code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">3. Module 📦</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Reusable components</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">.card, .button, .menu</code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">4. State 🔄</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">How things look in different states (prefix with is-)</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">.is-active, .is-hidden, .is-error</code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">5. Theme 🎨</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Colors and visual themes (prefix with theme-)</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">.theme-dark, .theme-light</code>
              </div>
            </div>
          </div>

          <SyntaxBlock
            title="SMACSS File Structure"
            code={`/* File: base.css - Default element styles */
body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3 {
  margin-bottom: 1rem;
}

/* File: layout.css - Page structure */
.l-header {
  padding: 20px;
  background: #3b82f6;
}

.l-sidebar {
  width: 250px;
  float: left;
}

.l-main {
  margin-left: 270px;
}

/* File: module.css - Components */
.card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* File: state.css - States */
.is-active {
  background: #3b82f6;
  color: white;
}

.is-hidden {
  display: none;
}

.is-loading {
  opacity: 0.6;
  pointer-events: none;
}

/* File: theme.css - Themes */
.theme-dark {
  background: #1f2937;
  color: #f3f4f6;
}

.theme-light {
  background: #ffffff;
  color: #1f2937;
}`}
          />
        </div>

        <InfoAlert type="success" title="Benefits of SMACSS">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Organized files: Easy to find styles</li>
            <li>Clear naming: Prefixes tell you the category</li>
            <li>Scalable: Works for small and huge projects</li>
            <li>Team-friendly: Everyone knows where to put CSS</li>
          </ul>
        </InfoAlert>
      </SectionCard>

      {/* Comparison */}
      <SectionCard
        title="Which One Should You Use?"
        description="Choosing the right methodology"
        icon={Target}
      >
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Use BEM if...</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ You want clear, specific class names</li>
              <li>✓ Working on a component-based project</li>
              <li>✓ Using React, Vue, or Angular</li>
              <li>✓ Team needs naming consistency</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Use OOCSS if...</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ You want maximum reusability</li>
              <li>✓ Building a CSS framework</li>
              <li>✓ Need small CSS files</li>
              <li>✓ Like utility classes (like Tailwind)</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-purple-200 dark:border-purple-800 rounded-xl bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Use SMACSS if...</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ You want organized file structure</li>
              <li>✓ Large project with many files</li>
              <li>✓ Need clear categories</li>
              <li>✓ Working with a big team</li>
            </ul>
          </div>
        </div>

        <InfoAlert type="tip" title="Pro Tip: Combine Them!">
          Many teams combine methodologies! For example: Use <strong>SMACSS</strong> for file organization, 
          <strong>BEM</strong> for naming, and <strong>OOCSS</strong> principles for reusability. 
          There's no one "right" way - pick what works for your project!
        </InfoAlert>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Architecture Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Pick One System:</strong> Choose a methodology and stick to it across your project</li>
          <li><strong>Document It:</strong> Write a style guide so everyone follows the same rules</li>
          <li><strong>Be Consistent:</strong> Consistent naming is more important than perfect naming</li>
          <li><strong>Keep It Simple:</strong> Don't over-engineer - start simple and add complexity if needed</li>
          <li><strong>Use Tools:</strong> Linters like stylelint can enforce your architecture rules</li>
          <li><strong>Review Code:</strong> Check that new CSS follows your chosen methodology</li>
        </ul>
      </InfoAlert>

      {/* Common Mistakes */}
      <InfoAlert type="warning" title="Common Mistakes to Avoid">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>❌ Mixing Methodologies:</strong> Don't use BEM on some components and random names on others</li>
          <li><strong>❌ Over-nesting:</strong> Keep selectors shallow (.card__title, not .card .inner .title)</li>
          <li><strong>❌ Using !important:</strong> If you need it, your architecture probably needs improvement</li>
          <li><strong>❌ Vague Names:</strong> .box2 and .new-button tell you nothing about what they do</li>
          <li><strong>❌ Global Styles:</strong> Avoid styling generic classes like .title or .content</li>
        </ul>
      </InfoAlert>

    </CssTopicLayout>
  );
}
