'use client';

import React from 'react';
import { Award, CheckCircle, Sparkles, Target, Layers, Zap } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssBestPracticesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBestPractices({ onOpenWebPlayground }: CssBestPracticesProps) {
  
  return (
    <CssTopicLayout
      icon={Award}
      title="CSS Best Practices"
      description="Write clean, maintainable, and performant CSS"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What are CSS Best Practices?",
        description: "Proven techniques and patterns for writing high-quality CSS that's easy to maintain and performs well",
        keyPoints: [
          "Organize CSS logically and consistently",
          "Use clear, descriptive class names",
          "Write reusable, modular code",
          "Optimize for performance",
          "Make CSS accessible and maintainable",
          "Follow industry standards"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Best Practices Matter">
        Bad CSS is like a messy room - it works, but it's hard to find things, clean up, or add new stuff. 
        Best practices are like organizing your room: <strong>everything has a place, it's easy to maintain, 
        and you can find what you need quickly!</strong>
      </InfoAlert>

      {/* Core Best Practices */}
      <SectionCard
        title="The Golden Rules of CSS"
        description="Essential practices every developer should follow"
        icon={Award}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📁 Organize Your Code",
              description: "Group related styles together",
              example: "base.css, layout.css, components.css"
            },
            {
              title: "📛 Name Things Clearly",
              description: "Use descriptive class names",
              example: ".user-profile-card not .box2"
            },
            {
              title: "🔄 Write Reusable Code",
              description: "Don't repeat yourself",
              example: "One .button class, not 10 versions"
            },
            {
              title: "⚡ Keep It Fast",
              description: "Optimize for performance",
              example: "Minimize CSS, avoid expensive selectors"
            }
          ]}
        />
      </SectionCard>

      {/* Organization */}
      <SectionCard
        title="1. Code Organization"
        description="Structure your CSS files properly"
        icon={Layers}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Recommended File Structure</h4>
            <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <div>📁 styles/</div>
              <div className="ml-4">📄 1-reset.css (normalize browser styles)</div>
              <div className="ml-4">📄 2-variables.css (colors, spacing, fonts)</div>
              <div className="ml-4">📄 3-typography.css (headings, paragraphs)</div>
              <div className="ml-4">📄 4-layout.css (grid, flexbox, structure)</div>
              <div className="ml-4">📄 5-components.css (buttons, cards, forms)</div>
              <div className="ml-4">📄 6-utilities.css (helpers, overrides)</div>
              <div className="ml-4">📄 main.css (imports all files)</div>
            </div>
          </div>

          <SyntaxBlock
            title="Good: Organized CSS"
            code={`/* ✅ GOOD: Organized by sections with clear comments */

/* ======================
   Variables
   ====================== */
:root {
  --color-primary: #3b82f6;
  --spacing-unit: 8px;
}

/* ======================
   Typography
   ====================== */
h1 { font-size: 32px; }
h2 { font-size: 24px; }
p { line-height: 1.6; }

/* ======================
   Components
   ====================== */
.button {
  padding: 12px 24px;
  background: var(--color-primary);
}

.card {
  padding: 20px;
  border: 1px solid #e5e7eb;
}`}
          />

          <SyntaxBlock
            title="Bad: Unorganized CSS"
            code={`/* ❌ BAD: Everything mixed together, no structure */

.button { padding: 12px 24px; }
h1 { font-size: 32px; }
.card { padding: 20px; }
p { line-height: 1.6; }
h2 { font-size: 24px; }
.button { background: #3b82f6; } /* Duplicate! */
.card { border: 1px solid #e5e7eb; }`}
          />
        </div>
      </SectionCard>

      {/* Naming */}
      <SectionCard
        title="2. Naming Conventions"
        description="Choose clear, consistent names"
        icon={CheckCircle}
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ DO: Clear Names</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-mono">
                <li>✓ .user-profile</li>
                <li>✓ .navigation-menu</li>
                <li>✓ .button-primary</li>
                <li>✓ .card-header</li>
                <li>✓ .form-input-error</li>
              </ul>
            </div>

            <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ DON'T: Vague Names</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-mono">
                <li>✗ .box</li>
                <li>✗ .thing</li>
                <li>✗ .btn2</li>
                <li>✗ .top</li>
                <li>✗ .red-text</li>
              </ul>
            </div>
          </div>

          <SyntaxBlock
            title="Naming Best Practices"
            code={`/* ✅ GOOD: Descriptive, consistent naming */
.user-profile-card { }
.user-profile-card__avatar { }
.user-profile-card__name { }
.user-profile-card--featured { }

/* Use BEM (Block Element Modifier) */
.block { }              /* Component */
.block__element { }     /* Part of component */
.block--modifier { }    /* Variation */

/* ❌ BAD: Unclear, inconsistent naming */
.box { }
.userCard { }           /* Inconsistent casing */
.user_profile { }       /* Mixed conventions */
.blue { }               /* Style-based */
.new-final-v2 { }       /* Meaningless */`}
          />
        </div>
      </SectionCard>

      {/* Reusability */}
      <SectionCard
        title="3. Write Reusable CSS"
        description="Don't Repeat Yourself (DRY)"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Good: Reusable Classes"
            code={`/* ✅ GOOD: One button class, modified with utilities */
.button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.button--primary { background: #3b82f6; color: white; }
.button--secondary { background: #6b7280; color: white; }
.button--large { padding: 16px 32px; font-size: 18px; }
.button--small { padding: 8px 16px; font-size: 14px; }

/* Combine classes in HTML */
/* <button class="button button--primary button--large">Click Me</button> */`}
          />

          <SyntaxBlock
            title="Bad: Repetitive CSS"
            code={`/* ❌ BAD: Repeating the same styles everywhere */
.submit-button {
  padding: 12px 24px;
  font-size: 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cancel-button {
  padding: 12px 24px;      /* Duplicated! */
  font-size: 16px;         /* Duplicated! */
  background: #6b7280;
  color: white;
  border: none;            /* Duplicated! */
  border-radius: 6px;      /* Duplicated! */
  cursor: pointer;         /* Duplicated! */
}

.big-submit-button {
  padding: 16px 32px;
  font-size: 18px;
  background: #3b82f6;
  color: white;
  border: none;            /* Still duplicating! */
  border-radius: 6px;
  cursor: pointer;
}`}
          />
        </div>
      </SectionCard>

      {/* Performance */}
      <SectionCard
        title="4. Performance Optimization"
        description="Keep your CSS fast"
        icon={Zap}
      >
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ DO: Fast Selectors</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono">{`.button { }              /* Fast: class selector */
#header { }              /* Fast: ID selector */
.nav .item { }           /* Okay: 2 levels */`}</pre>
          </div>

          <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ DON'T: Slow Selectors</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono">{`div div div div { }     /* Slow: too many levels */
* { }                    /* Slow: universal selector */
[class*="btn"] { }       /* Slow: attribute selector with wildcard */
.nav > ul > li > a { }   /* Slow: overly specific */`}</pre>
          </div>

          <SyntaxBlock
            title="Performance Best Practices"
            code={`/* ✅ GOOD: Performance-friendly CSS */

/* 1. Keep selectors shallow (max 3 levels) */
.card { }
.card__title { }         /* Better than .card .container .title */

/* 2. Avoid expensive properties where possible */
.box {
  /* Fast */
  transform: translateX(10px);
  opacity: 0.5;
  
  /* Avoid if possible */
  /* box-shadow: 0 0 50px 50px rgba(0,0,0,0.5); (expensive) */
  /* filter: blur(10px); (expensive) */
}

/* 3. Use CSS variables for repeated values */
:root {
  --primary-color: #3b82f6;
  --spacing: 16px;
}

.button { 
  background: var(--primary-color); 
  padding: var(--spacing);
}

/* 4. Minimize and combine CSS files */
/* Use build tools to minify and combine CSS */`}
          />
        </div>
      </SectionCard>

      {/* Practical Example */}
      <SectionCard
        title="Best Practices in Action"
        description="See good CSS organization"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <header class="site-header">
    <h1 class="site-header__title">My Website</h1>
    <nav class="site-header__nav">
      <a href="#" class="nav-link nav-link--active">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Contact</a>
    </nav>
  </header>
  
  <main class="main-content">
    <article class="card">
      <h2 class="card__title">Article Title</h2>
      <p class="card__text">This example demonstrates clean CSS with good organization, 
      clear naming (BEM), and reusable classes.</p>
      <button class="button button--primary">Read More</button>
    </article>
    
    <article class="card card--featured">
      <h2 class="card__title">Featured Article</h2>
      <p class="card__text">This card uses the same base styles but has a "featured" modifier.</p>
      <button class="button button--primary button--large">Learn More</button>
    </article>
  </main>
</div>`}
          css={`/* Variables */
:root {
  --color-primary: #3b82f6;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}

/* Base */
body {
  font-family: system-ui, sans-serif;
  color: var(--color-text);
  padding: var(--spacing-lg);
}

/* Layout */
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Header Component */
.site-header {
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-border);
}

.site-header__title {
  margin: 0 0 var(--spacing-md) 0;
  font-size: 28px;
}

.site-header__nav {
  display: flex;
  gap: var(--spacing-md);
}

/* Navigation Component */
.nav-link {
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text);
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-link:hover {
  background: #f3f4f6;
}

.nav-link--active {
  background: var(--color-primary);
  color: white;
}

/* Card Component */
.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: white;
}

.card__title {
  margin: 0 0 var(--spacing-sm) 0;
  font-size: 20px;
}

.card__text {
  margin: 0 0 var(--spacing-md) 0;
  line-height: 1.6;
  color: #6b7280;
}

.card--featured {
  border-color: var(--color-primary);
  border-width: 2px;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
}

/* Button Component */
.button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.button:hover {
  opacity: 0.9;
}

.button--primary {
  background: var(--color-primary);
  color: white;
}

.button--large {
  padding: 16px 32px;
  font-size: 18px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f3f4f6;
    --color-border: #374151;
  }
  
  body {
    background: #1f2937;
  }
  
  .card {
    background: #374151;
  }
  
  .nav-link:hover {
    background: #4b5563;
  }
}`}
          title="Best Practices Demo"
          colorTheme="green"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Additional Best Practices */}
      <SectionCard
        title="More Important Best Practices"
        description="Additional rules to follow"
        icon={CheckCircle}
      >
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">5. Use CSS Variables</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Define colors, spacing, and fonts once. Change everywhere instantly.
            </p>
            <code className="text-sm">:root &#123; --primary: #3b82f6; &#125;</code>
          </div>

          <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">6. Mobile-First Design</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Start with mobile styles, then add desktop styles with media queries.
            </p>
            <code className="text-sm">@media (min-width: 768px) &#123; ... &#125;</code>
          </div>

          <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">7. Comment Your Code</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Explain complex CSS, mark sections, and note browser hacks.
            </p>
            <code className="text-sm">/* Header Component - Used on all pages */</code>
          </div>

          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">8. Avoid !important</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              If you need !important, your CSS structure probably needs improvement.
            </p>
            <code className="text-sm text-red-600">color: red !important; /* Try to avoid */</code>
          </div>

          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-950/20">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">9. Validate Your CSS</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Use tools like CSS Validator to catch errors and improve quality.
            </p>
            <code className="text-sm">jigsaw.w3.org/css-validator/</code>
          </div>

          <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">10. Test in Multiple Browsers</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Don't just test in Chrome. Check Firefox, Safari, and Edge too.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When Best Practices Matter Most"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Team Projects"
            description="Multiple developers need consistency"
            icon={Layers}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Large Codebases"
            description="Thousands of lines of CSS"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Long-Term Projects"
            description="Code maintained for years"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="High-Traffic Sites"
            description="Performance matters"
            icon={Zap}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Summary */}
      <InfoAlert type="success" title="Quick Best Practices Checklist">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>✓ Organize CSS into logical sections with clear comments</li>
          <li>✓ Use clear, descriptive class names (BEM is recommended)</li>
          <li>✓ Write reusable code - don't repeat yourself</li>
          <li>✓ Keep selectors shallow (max 3 levels)</li>
          <li>✓ Use CSS variables for colors, spacing, fonts</li>
          <li>✓ Mobile-first responsive design</li>
          <li>✓ Comment complex or unusual CSS</li>
          <li>✓ Avoid !important unless absolutely necessary</li>
          <li>✓ Validate and test in multiple browsers</li>
          <li>✓ Minify and combine CSS for production</li>
        </ul>
      </InfoAlert>

    </CssTopicLayout>
  );
}
