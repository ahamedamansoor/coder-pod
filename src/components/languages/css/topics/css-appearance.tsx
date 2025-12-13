'use client';

import React from 'react';
import { Eye, Sparkles, CheckSquare, Target, Layers } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssAppearanceProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAppearance({ onOpenWebPlayground }: CssAppearanceProps) {
  
  return (
    <CssTopicLayout
      icon={Eye}
      title="CSS Appearance Property"
      description="Remove browser default styling and take full control"
      category="CSS Styling & UI"
      whatIsIt={{
        title: "What is the Appearance Property?",
        description: "A CSS property that lets you remove default browser styling from form elements",
        keyPoints: [
          "Removes browser's default look for form elements",
          "Gives you complete control over styling",
          "Essential for custom checkboxes, radios, and buttons",
          "Works across all modern browsers",
          "Simple one-line property",
          "Makes elements look the same everywhere"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Real-World Example">
        You know how checkboxes look different in Chrome, Firefox, and Safari? And you can't easily style them? 
        <code>appearance: none</code> removes all that browser-specific styling, giving you a blank canvas to design your own!
      </InfoAlert>

      {/* What It Does */}
      <SectionCard
        title="What appearance: none Does"
        description="The magic behind custom form controls"
        icon={Eye}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🎨 Removes Default Styles",
              description: "Gets rid of browser's built-in look",
              example: "Checkbox becomes a plain box"
            },
            {
              title: "✏️ Full Control",
              description: "You can now style it however you want",
              example: "Add your own colors, borders, shadows"
            },
            {
              title: "🌐 Cross-Browser Consistency",
              description: "Looks the same in all browsers",
              example: "No more Chrome vs Safari differences"
            },
            {
              title: "🔧 Keep Functionality",
              description: "Element still works the same",
              example: "Checkbox still checks/unchecks normally"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to use it"
        icon={Sparkles}
      >
        <SyntaxBlock
          title="Simple Usage"
          code={`/* Remove default styling */
input[type="checkbox"],
input[type="radio"],
select,
button {
  appearance: none;
  -webkit-appearance: none; /* Safari support */
  -moz-appearance: none;    /* Firefox support */
}

/* Now you can style them freely! */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border: 2px solid #3b82f6;
  border-radius: 4px;
}`}
        />

        <InfoAlert type="tip" title="Vendor Prefixes">
          Always include <code>-webkit-appearance</code> for Safari and <code>-moz-appearance</code> for older Firefox. 
          The standard <code>appearance</code> property is now widely supported but prefixes ensure maximum compatibility!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: Custom Checkbox */}
      <SectionCard
        title="Example: Custom Checkbox"
        description="Remove default and create your own design"
        icon={CheckSquare}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <label class="checkbox-label">
    <input type="checkbox" checked>
    <span class="checkbox-text">Enable notifications</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox">
    <span class="checkbox-text">Subscribe to newsletter</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox" checked>
    <span class="checkbox-text">Remember me</span>
  </label>
</div>`}
          css={`.container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: system-ui, sans-serif;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

/* Step 1: Remove default appearance */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  
  /* Step 2: Add your own styling */
  width: 24px;
  height: 24px;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

input[type="checkbox"]:hover {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Checked state */
input[type="checkbox"]:checked {
  background: #3b82f6;
  border-color: #3b82f6;
}

/* Checkmark using ::after */
input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.checkbox-text {
  font-size: 16px;
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  .checkbox-text {
    color: #e5e7eb;
  }
}`}
          title="Custom Checkbox with appearance: none"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Custom Select Dropdown */}
      <SectionCard
        title="Example: Custom Select Dropdown"
        description="Style dropdowns without browser defaults"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <div class="select-wrapper">
    <select>
      <option value="">Choose a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
      <option value="au">Australia</option>
      <option value="de">Germany</option>
    </select>
    <span class="arrow">▼</span>
  </div>
  
  <div class="select-wrapper">
    <select>
      <option value="">Select your plan</option>
      <option value="free">Free - $0/month</option>
      <option value="pro">Pro - $19/month</option>
      <option value="enterprise">Enterprise - $99/month</option>
    </select>
    <span class="arrow">▼</span>
  </div>
</div>`}
          css={`.container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: system-ui, sans-serif;
}

.select-wrapper {
  position: relative;
  width: 100%;
  max-width: 300px;
}

/* Remove default appearance */
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  /* Custom styling */
  width: 100%;
  padding: 14px 40px 14px 16px;
  font-size: 16px;
  font-family: inherit;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
}

select:hover {
  border-color: #3b82f6;
}

select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Custom arrow */
.arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
  font-size: 12px;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  select {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }
  
  select:hover,
  select:focus {
    border-color: #3b82f6;
  }
  
  .arrow {
    color: #9ca3af;
  }
}`}
          title="Custom Select Dropdown"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 3: Custom Button */}
      <SectionCard
        title="Example: Custom Button Styles"
        description="Remove browser button styling"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  <button class="btn btn-success">Success Button</button>
  <button class="btn btn-danger">Danger Button</button>
</div>`}
          css={`.container {
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-family: system-ui, sans-serif;
}

/* Remove default button appearance */
.btn {
  appearance: none;
  -webkit-appearance: none;
  
  /* Custom base styling */
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.btn:active {
  transform: translateY(0);
}

/* Button variants */
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

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
}`}
          title="Custom Buttons"
          colorTheme="purple"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use appearance: none"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Custom Form Controls"
            description="Create unique checkboxes, radio buttons, and selects"
            icon={CheckSquare}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Design Systems"
            description="Maintain consistent styling across browsers"
            icon={Layers}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Branded Interfaces"
            description="Match form elements to your brand guidelines"
            icon={Sparkles}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Custom Buttons"
            description="Remove native button styles for custom designs"
            icon={Target}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Always Include Prefixes:</strong> Use <code>-webkit-appearance</code> and <code>-moz-appearance</code> for maximum browser support</li>
          <li><strong>Maintain Accessibility:</strong> Keep the native HTML element, just style it differently</li>
          <li><strong>Test Focus States:</strong> Make sure keyboard users can still see focus indicators</li>
          <li><strong>Preserve Functionality:</strong> Don't break the element's native behavior</li>
          <li><strong>Consider Mobile:</strong> Ensure touch targets are at least 44×44px</li>
        </ul>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>✅ Excellent Support:</strong> The <code>appearance</code> property is supported in all modern browsers. 
          Use vendor prefixes (<code>-webkit-</code>, <code>-moz-</code>) for older versions. Works in Chrome, Firefox, Safari, and Edge!
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}
