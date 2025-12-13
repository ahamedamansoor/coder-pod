'use client';

import React from 'react';
import { Palette, Sparkles, Target, Layers, CheckSquare } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface AccentColorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function AccentColor({ onOpenWebPlayground }: AccentColorProps) {
  
  return (
    <CssTopicLayout
      icon={Palette}
      title="Accent Color"
      description="Change form control colors with one simple property"
      category="CSS Styling & UI"
      whatIsIt={{
        title: "What is accent-color?",
        description: "A CSS property that changes the color of checkboxes, radio buttons, and sliders",
        keyPoints: [
          "Style form controls with one line of CSS",
          "Changes checkboxes, radio buttons, and range sliders",
          "Much simpler than custom styling",
          "Automatically adjusts contrast for accessibility",
          "Works with your brand colors",
          "Supported in all modern browsers"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="The Problem It Solves">
        Normally, checkboxes and radio buttons are blue (or whatever your browser decides). 
        To match your brand, you'd need complex CSS. But <code>accent-color</code> lets you change the color with just one line!
      </InfoAlert>

      {/* What It Affects */}
      <SectionCard
        title="What Elements Does It Style?"
        description="Three main form controls"
        icon={CheckSquare}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "☑️ Checkboxes",
              description: "Changes the check color and background",
              example: "input[type='checkbox'] { accent-color: blue; }"
            },
            {
              title: "⭕ Radio Buttons",
              description: "Changes the dot color and ring",
              example: "input[type='radio'] { accent-color: green; }"
            },
            {
              title: "🎚️ Range Sliders",
              description: "Changes the filled track color",
              example: "input[type='range'] { accent-color: red; }"
            },
            {
              title: "📊 Progress Bars",
              description: "Changes the progress bar color",
              example: "progress { accent-color: purple; }"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to use accent-color"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Simple Usage"
            code={`/* Change all form controls to your brand color */
input[type="checkbox"],
input[type="radio"],
input[type="range"] {
  accent-color: #3b82f6;
}

/* Or use any color format */
input {
  accent-color: rgb(59, 130, 246);
  accent-color: hsl(217, 91%, 60%);
  accent-color: blue;
}`}
          />

          <SyntaxBlock
            title="Different Colors for Different Elements"
            code={`/* Checkboxes - Blue */
input[type="checkbox"] {
  accent-color: #3b82f6;
}

/* Radio buttons - Green */
input[type="radio"] {
  accent-color: #10b981;
}

/* Range sliders - Purple */
input[type="range"] {
  accent-color: #8b5cf6;
}`}
          />

          <SyntaxBlock
            title="Theme-wide Accent"
            code={`/* Set accent color for entire page */
:root {
  accent-color: #3b82f6;
}

/* All checkboxes, radios, and sliders 
   will automatically use this color! */`}
          />
        </div>

        <InfoAlert type="tip" title="Auto Contrast">
          The browser automatically picks a contrasting text color for checkmarks and dots, 
          so they're always visible. You don't need to worry about accessibility!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: Checkboxes */}
      <SectionCard
        title="Example: Styled Checkboxes"
        description="Different colors for different options"
        icon={CheckSquare}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Choose Your Features</h2>
  
  <label class="option">
    <input type="checkbox" class="blue" checked>
    <span>Dark Mode (Blue accent)</span>
  </label>
  
  <label class="option">
    <input type="checkbox" class="green" checked>
    <span>Notifications (Green accent)</span>
  </label>
  
  <label class="option">
    <input type="checkbox" class="purple">
    <span>Premium Features (Purple accent)</span>
  </label>
  
  <label class="option">
    <input type="checkbox" class="pink" checked>
    <span>Newsletter (Pink accent)</span>
  </label>
</div>`}
          css={`.container {
  padding: 40px;
  max-width: 500px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 24px;
}

.option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  margin-bottom: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

input[type="checkbox"] {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

/* Different accent colors */
input.blue {
  accent-color: #3b82f6;
}

input.green {
  accent-color: #10b981;
}

input.purple {
  accent-color: #8b5cf6;
}

input.pink {
  accent-color: #ec4899;
}

.option span {
  font-size: 16px;
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .option {
    background: #374151;
    border-color: #4b5563;
  }
  
  .option:hover {
    background: #4b5563;
    border-color: #6b7280;
  }
  
  .option span {
    color: #e5e7eb;
  }
}`}
          title="Accent Color Checkboxes"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Radio Buttons */}
      <SectionCard
        title="Example: Styled Radio Buttons"
        description="Color-coded options"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Select Your Plan</h2>
  
  <label class="plan-option">
    <input type="radio" name="plan" value="free" class="gray" checked>
    <div class="plan-details">
      <strong>Free</strong>
      <span>$0/month</span>
    </div>
  </label>
  
  <label class="plan-option">
    <input type="radio" name="plan" value="basic" class="blue">
    <div class="plan-details">
      <strong>Basic</strong>
      <span>$9/month</span>
    </div>
  </label>
  
  <label class="plan-option">
    <input type="radio" name="plan" value="pro" class="purple">
    <div class="plan-details">
      <strong>Pro</strong>
      <span>$29/month</span>
    </div>
  </label>
  
  <label class="plan-option">
    <input type="radio" name="plan" value="enterprise" class="amber">
    <div class="plan-details">
      <strong>Enterprise</strong>
      <span>$99/month</span>
    </div>
  </label>
</div>`}
          css={`.container {
  padding: 40px;
  max-width: 400px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 24px;
}

.plan-option {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  margin-bottom: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.plan-option:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

input[type="radio"] {
  width: 24px;
  height: 24px;
  cursor: pointer;
  flex-shrink: 0;
}

/* Different accent colors for plans */
input.gray {
  accent-color: #6b7280;
}

input.blue {
  accent-color: #3b82f6;
}

input.purple {
  accent-color: #8b5cf6;
}

input.amber {
  accent-color: #f59e0b;
}

.plan-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plan-details strong {
  font-size: 18px;
  color: #1f2937;
}

.plan-details span {
  font-size: 14px;
  color: #6b7280;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .plan-option {
    background: #374151;
    border-color: #4b5563;
  }
  
  .plan-option:hover {
    background: #4b5563;
    border-color: #6b7280;
  }
  
  .plan-details strong {
    color: #f3f4f6;
  }
  
  .plan-details span {
    color: #9ca3af;
  }
}`}
          title="Accent Color Radio Buttons"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 3: Range Slider */}
      <SectionCard
        title="Example: Styled Range Slider"
        description="Color-coded sliders"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Volume Controls</h2>
  
  <div class="slider-group">
    <label>
      Master Volume
      <span class="value">50%</span>
    </label>
    <input type="range" class="blue" value="50">
  </div>
  
  <div class="slider-group">
    <label>
      Music
      <span class="value">75%</span>
    </label>
    <input type="range" class="green" value="75">
  </div>
  
  <div class="slider-group">
    <label>
      Effects
      <span class="value">25%</span>
    </label>
    <input type="range" class="purple" value="25">
  </div>
</div>`}
          css={`.container {
  padding: 40px;
  max-width: 500px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 32px 0;
  color: #1f2937;
  font-size: 24px;
}

.slider-group {
  margin-bottom: 32px;
}

.slider-group label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
}

.value {
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
}

input[type="range"] {
  width: 100%;
  height: 8px;
  cursor: pointer;
}

/* Different accent colors */
input.blue {
  accent-color: #3b82f6;
}

input.green {
  accent-color: #10b981;
}

input.purple {
  accent-color: #8b5cf6;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .slider-group label {
    color: #e5e7eb;
  }
  
  .value {
    color: #9ca3af;
  }
}`}
          title="Accent Color Range Sliders"
          colorTheme="purple"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use accent-color"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Brand Consistency"
            description="Match form controls to your brand colors easily"
            icon={Palette}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Quick Theming"
            description="Style forms without complex custom CSS"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Color Coding"
            description="Use different colors to indicate different options"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Dark Mode"
            description="Accent colors work great in light and dark themes"
            icon={Layers}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Use Brand Colors:</strong> Match your accent color to your brand for consistency</li>
          <li><strong>Trust Auto Contrast:</strong> Browsers automatically ensure checkmarks are visible</li>
          <li><strong>Set Once:</strong> Define accent-color on <code>:root</code> for site-wide consistency</li>
          <li><strong>Combine with Custom Styling:</strong> Use accent-color for simple cases, full custom CSS for complex needs</li>
          <li><strong>Test in Dark Mode:</strong> Ensure your accent color works in both light and dark themes</li>
        </ul>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>✅ Good Modern Support:</strong> The <code>accent-color</code> property works in Chrome 93+, 
          Firefox 92+, Safari 15.4+, and Edge 93+. For older browsers, form controls will just use the default blue color.
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}
