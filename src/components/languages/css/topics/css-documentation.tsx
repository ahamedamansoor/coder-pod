'use client';

import React from 'react';
import { FileText, Sparkles, Target, Layers, CheckCircle, Book } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssDocumentationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssDocumentation({ onOpenWebPlayground }: CssDocumentationProps) {
  
  return (
    <CssTopicLayout
      icon={FileText}
      title="CSS Documentation"
      description="Document your CSS for better maintainability and team collaboration"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Documentation?",
        description: "Comments and explanations in your CSS that help others (and future you) understand the code",
        keyPoints: [
          "Explain complex or unusual CSS",
          "Document component purposes",
          "Note browser hacks and workarounds",
          "Help team members understand code",
          "Essential for large projects",
          "Saves time during maintenance"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Document CSS?">
        In 6 months, you won't remember why you wrote that complex CSS. 
        <strong> Good documentation is like leaving notes for future you and your team</strong> - 
        it explains the "why" behind the code, not just the "what"!
      </InfoAlert>

      {/* When to Document */}
      <SectionCard
        title="When to Add CSS Comments"
        description="What deserves documentation"
        icon={FileText}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🔧 Complex Solutions",
              description: "Tricky CSS that's not obvious",
              example: "Z-index management, flex hacks"
            },
            {
              title: "🐛 Browser Workarounds",
              description: "Fixes for specific browsers",
              example: "IE11 fixes, Safari bugs"
            },
            {
              title: "📦 Component Purpose",
              description: "What the section does",
              example: "Header, navigation, footer"
            },
            {
              title: "⚠️ Important Notes",
              description: "Warnings and gotchas",
              example: "Don't change this value!"
            }
          ]}
        />
      </SectionCard>

      {/* Comment Styles */}
      <SectionCard
        title="CSS Comment Styles"
        description="Different ways to document"
        icon={Book}
        variant="primary"
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="1. Section Headers (Large Sections)"
            code={`/**
 * ================================================
 * HEADER COMPONENT
 * ================================================
 * Main site header with logo, navigation, and search.
 * Used on all pages.
 * 
 * @author Design Team
 * @date 2024-12-13
 */

.header {
  /* styles here */
}`}
          />

          <SyntaxBlock
            title="2. Block Comments (Components/Groups)"
            code={`/* =================================
   Navigation Component
   ================================= */

.nav {
  display: flex;
  justify-content: space-between;
}

/* Navigation items */
.nav__item {
  padding: 10px 20px;
}

/* Active navigation state */
.nav__item--active {
  background: #3b82f6;
  color: white;
}`}
          />

          <SyntaxBlock
            title="3. Inline Comments (Single Properties)"
            code={`.element {
  /* Fix for IE11 flexbox bug */
  flex: 1 1 auto;
  
  /* Force hardware acceleration */
  transform: translateZ(0);
  
  /* Prevent text selection */
  user-select: none;
  
  /* Magic number - matches design spec */
  padding: 23px;
}`}
          />

          <SyntaxBlock
            title="4. TODO Comments (Reminders)"
            code={`/* TODO: Optimize this for mobile */
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

/* FIXME: Safari rendering issue - investigate */
.card {
  backdrop-filter: blur(10px);
}

/* NOTE: Don't change this - it breaks the layout */
.sidebar {
  width: 250px;
}`}
          />
        </div>
      </SectionCard>

      {/* Documentation Best Practices */}
      <SectionCard
        title="Documentation Best Practices"
        description="How to write good CSS comments"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ DO: Good Comments</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white dark:bg-green-900/20 rounded">
                  <p className="font-semibold mb-1">Explain WHY</p>
                  <code className="text-xs">/* Z-index: 1000 to appear above modal */</code>
                </div>
                <div className="p-3 bg-white dark:bg-green-900/20 rounded">
                  <p className="font-semibold mb-1">Document Hacks</p>
                  <code className="text-xs">/* IE11 flexbox fix */</code>
                </div>
                <div className="p-3 bg-white dark:bg-green-900/20 rounded">
                  <p className="font-semibold mb-1">Section Headers</p>
                  <code className="text-xs">/* === HEADER SECTION === */</code>
                </div>
                <div className="p-3 bg-white dark:bg-green-900/20 rounded">
                  <p className="font-semibold mb-1">Warnings</p>
                  <code className="text-xs">/* WARNING: Don't modify */</code>
                </div>
              </div>
            </div>

            <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ DON'T: Bad Comments</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white dark:bg-red-900/20 rounded">
                  <p className="font-semibold mb-1">State the Obvious</p>
                  <code className="text-xs">/* Make text blue */ color: blue;</code>
                </div>
                <div className="p-3 bg-white dark:bg-red-900/20 rounded">
                  <p className="font-semibold mb-1">Redundant Comments</p>
                  <code className="text-xs">/* Set padding to 10px */ padding: 10px;</code>
                </div>
                <div className="p-3 bg-white dark:bg-red-900/20 rounded">
                  <p className="font-semibold mb-1">Outdated Comments</p>
                  <code className="text-xs">/* Works in all browsers */ -webkit-transform: ...</code>
                </div>
                <div className="p-3 bg-white dark:bg-red-900/20 rounded">
                  <p className="font-semibold mb-1">Commented-Out Code</p>
                  <code className="text-xs">/* .old-style &#123; ... &#125; */</code>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Golden Rules for CSS Comments</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Explain WHY, not WHAT (code shows what it does)</li>
              <li>✓ Document browser hacks and workarounds</li>
              <li>✓ Use section headers for major components</li>
              <li>✓ Keep comments up to date with code changes</li>
              <li>✓ Delete outdated or commented-out code</li>
              <li>✓ Be concise but clear</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* File Organization & TOC */}
      <SectionCard
        title="File Organization with TOC"
        description="Table of Contents for large CSS files"
        icon={Layers}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="CSS File with Table of Contents"
            code={`/**
 * ================================================
 * MAIN STYLESHEET
 * ================================================
 * 
 * Table of Contents:
 * 
 * 1. CSS Variables
 * 2. Reset & Base Styles
 * 3. Typography
 * 4. Layout
 *    4.1 Header
 *    4.2 Navigation
 *    4.3 Main Content
 *    4.4 Sidebar
 *    4.5 Footer
 * 5. Components
 *    5.1 Buttons
 *    5.2 Cards
 *    5.3 Forms
 *    5.4 Modals
 * 6. Utilities
 * 7. Media Queries
 * 
 * ================================================
 */


/* ================================================
   1. CSS VARIABLES
   ================================================ */

:root {
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --spacing-unit: 8px;
}


/* ================================================
   2. RESET & BASE STYLES
   ================================================ */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
          />
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When Documentation is Essential"
        description="Critical scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Team Projects"
            description="Multiple developers need to understand code"
            icon={Layers}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Large Codebases"
            description="Thousands of lines of CSS to maintain"
            icon={FileText}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Complex Layouts"
            description="Intricate CSS that needs explanation"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Long-Term Projects"
            description="Code maintained for years"
            icon={CheckCircle}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Documentation Checklist">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Section Headers:</strong> Use clear headers for major components and sections</li>
          <li><strong>Explain Complex CSS:</strong> Document tricky solutions and why they're needed</li>
          <li><strong>Browser Hacks:</strong> Always note browser-specific workarounds</li>
          <li><strong>Magic Numbers:</strong> Explain why specific values are used</li>
          <li><strong>TOC for Large Files:</strong> Add table of contents if file is 500+ lines</li>
          <li><strong>Update Comments:</strong> Keep documentation in sync with code changes</li>
          <li><strong>Remove Old Code:</strong> Delete commented-out CSS - use version control instead</li>
          <li><strong>Be Concise:</strong> Write clear, brief comments - avoid essays</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="Documentation Tools">
        <div className="mt-2 space-y-2">
          <p><strong>StyleDocco:</strong> Generates style guides from CSS comments</p>
          <p><strong>KSS:</strong> Living style guide methodology</p>
          <p><strong>Storybook:</strong> Component explorer with documentation</p>
          <p><strong>Pattern Lab:</strong> Creates pattern libraries from code</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
