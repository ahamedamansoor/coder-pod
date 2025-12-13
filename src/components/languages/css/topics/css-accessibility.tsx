'use client';

import React from 'react';
import { Users, Eye, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssAccessibilityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAccessibility({ onOpenWebPlayground }: CssAccessibilityProps) {
  
  return (
    <CssTopicLayout
      icon={Users}
      title="CSS Accessibility"
      description="Make your websites usable for everyone"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Accessibility?",
        description: "Using CSS to make websites work for people with disabilities",
        keyPoints: [
          "Ensure enough color contrast for readability",
          "Support keyboard navigation with focus styles",
          "Hide elements visually but keep them for screen readers",
          "Make text readable and resizable",
          "Respect user preferences (dark mode, reduced motion)",
          "Help everyone use your website"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why It Matters">
        About 15% of people have some form of disability. Good CSS accessibility means everyone can use your website, 
        whether they use a screen reader, keyboard navigation, or just need larger text. It's not just nice to have - it's essential!
      </InfoAlert>

      {/* Key Principles */}
      <SectionCard
        title="Four Key Accessibility Principles"
        description="What to focus on with CSS"
        icon={CheckCircle}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "👁️ Visible Focus States",
              description: "Show which element is selected when using keyboard",
              example: "button:focus { outline: 2px solid blue; }"
            },
            {
              title: "🎨 Sufficient Contrast",
              description: "Text must be readable against background",
              example: "Minimum 4.5:1 ratio for normal text"
            },
            {
              title: "📱 Responsive Text",
              description: "Let users resize text without breaking layout",
              example: "Use rem units, not fixed px"
            },
            {
              title: "♿ Screen Reader Support",
              description: "Hide decorative elements, keep important content",
              example: ".sr-only class for screen-reader-only text"
            }
          ]}
        />
      </SectionCard>

      {/* Focus Styles */}
      <SectionCard
        title="1. Focus Styles for Keyboard Users"
        description="Show which element is active"
        icon={Eye}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Good Focus Styles"
            code={`/* NEVER do this! */
button:focus {
  outline: none; /* ❌ Makes keyboard navigation impossible */
}

/* GOOD - Clear, visible focus */
button:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

/* BETTER - Custom focus ring */
button:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Modern approach */
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 4px;
}`}
          />
        </div>

        <InfoAlert type="warning" title="Never Remove Outlines!">
          Don't use <code>outline: none</code> unless you replace it with another clear focus indicator. 
          Keyboard users need to see where they are on the page!
        </InfoAlert>
      </SectionCard>

      {/* Example: Focus States */}
      <SectionCard
        title="Example: Accessible Focus States"
        description="Clear keyboard navigation"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Try tabbing through these buttons</h2>
  <p class="hint">Press Tab key to navigate →</p>
  
  <div class="button-group">
    <button class="btn btn-primary">Primary Action</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Save Changes</button>
  </div>
  
  <div class="links">
    <a href="#">Learn More</a>
    <a href="#">Documentation</a>
    <a href="#">Contact Us</a>
  </div>
</div>`}
          css={`.container {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 24px;
}

.hint {
  margin: 0 0 32px 0;
  color: #6b7280;
  font-size: 14px;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* IMPORTANT: Clear focus styles for keyboard users */
.btn:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 3px;
  transform: translateY(-2px);
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.links a {
  color: #3b82f6;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 0;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.links a:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* Clear focus for links */
.links a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 4px;
  background: rgba(59, 130, 246, 0.1);
  padding-left: 8px;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .hint {
    color: #9ca3af;
  }
  
  .links a {
    color: #60a5fa;
  }
  
  .links a:hover {
    color: #93c5fd;
  }
}`}
          title="Accessible Focus Styles"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Screen Reader Only Content */}
      <SectionCard
        title="2. Screen Reader Only Content"
        description="Hide visually, but keep for assistive tech"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Screen Reader Only Class"
            code={`/* Visually hide but keep for screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Make visible when focused (for skip links) */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}`}
          />

          <SyntaxBlock
            title="How to Use It"
            code={`<!-- Add context for screen readers -->
<button>
  <svg><!-- icon --></svg>
  <span class="sr-only">Delete item</span>
</button>

<!-- Skip to main content link -->
<a href="#main" class="sr-only-focusable">
  Skip to main content
</a>

<main id="main">
  <!-- Your content -->
</main>`}
          />
        </div>

        <InfoAlert type="tip" title="When to Use">
          Use <code>.sr-only</code> for icon buttons, decorative images, or additional context that sighted users don't need 
          but screen reader users do!
        </InfoAlert>
      </SectionCard>

      {/* Color Contrast */}
      <SectionCard
        title="3. Color Contrast"
        description="Make text readable"
        icon={Eye}
        variant="primary"
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Contrast Requirements"
            code={`/* ❌ BAD - Low contrast (fails WCAG) */
.text-bad {
  color: #cccccc;
  background: #ffffff;
  /* Contrast ratio: 1.6:1 - Too low! */
}

/* ✅ GOOD - Normal text (WCAG AA) */
.text-normal {
  color: #767676;
  background: #ffffff;
  /* Contrast ratio: 4.5:1 - Passes! */
}

/* ✅ BETTER - Large text (WCAG AA) */
.text-large {
  font-size: 24px;
  color: #959595;
  background: #ffffff;
  /* Contrast ratio: 3:1 - Passes for large text! */
}

/* ✅ BEST - High contrast (WCAG AAA) */
.text-best {
  color: #333333;
  background: #ffffff;
  /* Contrast ratio: 7:1 - Excellent! */
}`}
          />
        </div>

        <InfoAlert type="info" title="Contrast Ratios">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Normal text:</strong> Minimum 4.5:1 ratio</li>
            <li><strong>Large text (18px+ or 14px+ bold):</strong> Minimum 3:1 ratio</li>
            <li><strong>AAA standard:</strong> 7:1 for normal text, 4.5:1 for large text</li>
          </ul>
        </InfoAlert>
      </SectionCard>

      {/* Respect User Preferences */}
      <SectionCard
        title="4. Respect User Preferences"
        description="Support reduced motion and dark mode"
        icon={Layers}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Reduced Motion"
            code={`/* Animations by default */
.box {
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1) rotate(5deg);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .box {
    transition: none;
  }
  
  .box:hover {
    transform: none; /* No animations */
  }
  
  /* Keep functionality, remove motion */
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
          />

          <SyntaxBlock
            title="Dark Mode Support"
            code={`/* Light mode (default) */
body {
  background: #ffffff;
  color: #1f2937;
}

/* Respect dark mode preference */
@media (prefers-color-scheme: dark) {
  body {
    background: #1f2937;
    color: #f3f4f6;
  }
  
  a {
    color: #60a5fa; /* Better contrast in dark */
  }
}`}
          />
        </div>

        <InfoAlert type="success" title="Why This Matters">
          Some users have vestibular disorders and get dizzy from animations. Others prefer dark mode for eye strain. 
          Respecting these preferences makes your site more comfortable for everyone!
        </InfoAlert>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Focus on Accessibility"
        description="Always! But especially..."
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Forms"
            description="Clear labels, focus states, and error messages"
            icon={CheckCircle}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Navigation"
            description="Keyboard accessible menus and skip links"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Interactive Elements"
            description="Buttons, links, and controls with clear focus"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Content"
            description="Readable text with proper contrast and sizing"
            icon={Eye}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Quick Accessibility Checklist">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Focus States:</strong> Never remove outlines without replacement</li>
          <li><strong>Color Contrast:</strong> Minimum 4.5:1 for normal text</li>
          <li><strong>Font Size:</strong> Use rem units, allow text resizing</li>
          <li><strong>Screen Readers:</strong> Use .sr-only for icon buttons</li>
          <li><strong>Reduced Motion:</strong> Respect prefers-reduced-motion</li>
          <li><strong>Dark Mode:</strong> Support prefers-color-scheme</li>
          <li><strong>Touch Targets:</strong> Minimum 44×44px for mobile</li>
          <li><strong>Test:</strong> Use keyboard navigation and screen readers!</li>
        </ul>
      </InfoAlert>

      {/* Tools */}
      <InfoAlert type="info" title="Testing Tools">
        <p className="mt-2">
          <strong>🛠️ Useful Tools:</strong> Chrome DevTools (Lighthouse accessibility audit), 
          WebAIM Contrast Checker, axe DevTools browser extension, and NVDA/JAWS screen readers for testing.
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}
