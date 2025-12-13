'use client';

import React from 'react';
import { Focus, Eye, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface FocusManagementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FocusManagement({ onOpenWebPlayground }: FocusManagementProps) {
  
  return (
    <CssTopicLayout
      icon={Focus}
      title="Focus Management"
      description="Show keyboard users where they are on your page"
      category="CSS Accessibility"
      whatIsIt={{
        title: "What is Focus Management?",
        description: "Making sure keyboard users can see which element is currently selected",
        keyPoints: [
          "Show clear visual indicators for focused elements",
          "Essential for keyboard navigation",
          "Use :focus and :focus-visible selectors",
          "Never remove focus outlines without replacement",
          "Help users navigate without a mouse",
          "Required for web accessibility"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why It Matters">
        Many people navigate websites using only a keyboard (Tab key). They need to see which button or link is currently selected. 
        Focus indicators are like a highlight that shows "you are here" - without them, keyboard users are lost!
      </InfoAlert>

      {/* Two Main Selectors */}
      <SectionCard
        title="Two Key CSS Selectors"
        description="Understanding :focus vs :focus-visible"
        icon={Eye}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🎯 :focus",
              description: "Shows on ALL focus (keyboard AND mouse click)",
              example: "button:focus { outline: 2px solid blue; }"
            },
            {
              title: "⌨️ :focus-visible",
              description: "Shows ONLY for keyboard focus (recommended)",
              example: "button:focus-visible { outline: 2px solid blue; }"
            },
            {
              title: "🚫 :focus-within",
              description: "Styles parent when child is focused",
              example: "form:focus-within { border-color: blue; }"
            },
            {
              title: "✅ Best Practice",
              description: "Use :focus-visible to avoid mouse click outlines",
              example: "More natural user experience"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Focus Styling"
        description="How to create visible focus indicators"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Basic Focus Outline"
            code={`/* Simple focus indicator */
button:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

/* Custom focus ring with shadow */
a:focus-visible {
  outline: 2px solid #10b981;
  outline-offset: 4px;
  border-radius: 4px;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
}

/* Focus for inputs */
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #3b82f6;
  border-color: #3b82f6;
}`}
          />

          <SyntaxBlock
            title="Focus Within (Parent Styling)"
            code={`/* Style form when any input is focused */
form:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Style card when button inside is focused */
.card:focus-within {
  background: #f0f9ff;
  border-color: #3b82f6;
}`}
          />
        </div>

        <InfoAlert type="warning" title="Never Do This!">
          <strong>❌ DON'T:</strong> <code>*:focus {'{ outline: none; }'}</code>
          <br />
          This removes all focus indicators and makes your site unusable for keyboard users. 
          Always provide a visible alternative if you remove the default outline!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: Focus Visible */}
      <SectionCard
        title="Example: Focus-Visible vs Focus"
        description="See the difference in behavior"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Click vs Tab Behavior</h2>
  <p class="hint">Try both clicking and tabbing through these buttons</p>
  
  <div class="demo-section">
    <h3>Using :focus (shows on click too)</h3>
    <button class="btn-focus">Click or Tab Me</button>
    <button class="btn-focus">Another Button</button>
  </div>
  
  <div class="demo-section">
    <h3>Using :focus-visible (keyboard only)</h3>
    <button class="btn-focus-visible">Click or Tab Me</button>
    <button class="btn-focus-visible">Another Button</button>
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

.demo-section {
  margin-bottom: 32px;
  padding: 24px;
  background: #f9fafb;
  border-radius: 12px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  color: #374151;
  font-size: 16px;
  font-weight: 600;
}

button {
  padding: 12px 24px;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

/* :focus shows on BOTH click and keyboard */
.btn-focus:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

/* :focus-visible shows ONLY on keyboard */
.btn-focus-visible:focus-visible {
  outline: 3px solid #10b981;
  outline-offset: 2px;
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
  
  .demo-section {
    background: #374151;
  }
  
  .demo-section h3 {
    color: #e5e7eb;
  }
  
  button {
    background: #4b5563;
    border-color: #6b7280;
    color: #f3f4f6;
  }
  
  button:hover {
    background: #6b7280;
  }
}`}
          title="Focus vs Focus-Visible"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Focus Within */}
      <SectionCard
        title="Example: Focus-Within for Forms"
        description="Style parent elements when children are focused"
        icon={Layers}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Form Focus States</h2>
  
  <form class="form-card">
    <h3>Contact Form</h3>
    
    <div class="field">
      <label>Name</label>
      <input type="text" placeholder="Enter your name">
    </div>
    
    <div class="field">
      <label>Email</label>
      <input type="email" placeholder="your@email.com">
    </div>
    
    <div class="field">
      <label>Message</label>
      <textarea rows="4" placeholder="Your message..."></textarea>
    </div>
    
    <button type="submit">Send Message</button>
  </form>
</div>`}
          css={`.container {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 24px;
}

/* Form card with focus-within */
.form-card {
  max-width: 500px;
  padding: 32px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  transition: all 0.3s ease;
}

/* Highlight entire form when any field is focused */
.form-card:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
  background: #f0f9ff;
}

.form-card h3 {
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: inherit;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  transition: all 0.2s ease;
}

/* Individual field focus */
input:focus,
textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

button {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: #2563eb;
}

button:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .form-card {
    background: #374151;
    border-color: #4b5563;
  }
  
  .form-card:focus-within {
    background: #1e3a5f;
  }
  
  .form-card h3 {
    color: #f3f4f6;
  }
  
  label {
    color: #e5e7eb;
  }
  
  input,
  textarea {
    background: #4b5563;
    border-color: #6b7280;
    color: #f3f4f6;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
  }
}`}
          title="Focus-Within Example"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Focus Management"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Forms"
            description="Clear focus indicators for all input fields"
            icon={CheckCircle}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Navigation"
            description="Visible focus on menu items and links"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Buttons & CTAs"
            description="Clear indication of which action is selected"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Custom Components"
            description="Accessible focus for dropdowns, modals, tabs"
            icon={Layers}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Focus Management Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Use :focus-visible:</strong> Better UX - only shows for keyboard, not mouse clicks</li>
          <li><strong>High Contrast:</strong> Use colors with good contrast (minimum 3:1 ratio)</li>
          <li><strong>Sufficient Size:</strong> Make focus outlines at least 2px thick</li>
          <li><strong>Clear Offset:</strong> Add outline-offset for breathing room</li>
          <li><strong>Test with Tab:</strong> Navigate your entire site using only the keyboard</li>
          <li><strong>Consistent Style:</strong> Keep focus indicators similar across your site</li>
        </ul>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>✅ Excellent Support:</strong> <code>:focus</code> works everywhere. 
          <code>:focus-visible</code> is supported in Chrome 86+, Firefox 85+, Safari 15.4+, and Edge 86+. 
          Use both for maximum compatibility!
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}
