'use client';

import React from 'react';
import { Contrast, Eye, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface HighContrastProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HighContrast({ onOpenWebPlayground }: HighContrastProps) {
  
  return (
    <CssTopicLayout
      icon={Contrast}
      title="High Contrast Mode"
      description="Make your site more visible for users who need high contrast"
      category="CSS Accessibility"
      whatIsIt={{
        title: "What is prefers-contrast?",
        description: "A CSS media query that detects if users want higher contrast colors",
        keyPoints: [
          "Some users have low vision or color blindness",
          "Detects system high contrast preference",
          "Increase color contrast for better visibility",
          "Make borders and text more prominent",
          "Simple @media query to implement",
          "Helps users with visual impairments"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why This Matters">
        People with low vision, color blindness, or eye strain need higher contrast to read content easily. 
        Windows, Mac, and mobile devices have high contrast modes. We can detect this preference and adjust our colors!
      </InfoAlert>

      {/* Values */}
      <SectionCard
        title="Contrast Preference Values"
        description="What the media query can detect"
        icon={Eye}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🎨 no-preference (default)",
              description: "User hasn't set any preference",
              example: "Use your normal color scheme"
            },
            {
              title: "⬆️ more",
              description: "User wants higher contrast",
              example: "Use darker/brighter colors, thicker borders"
            },
            {
              title: "⬇️ less",
              description: "User wants lower contrast (rare)",
              example: "Use softer, muted colors"
            },
            {
              title: "🔍 custom",
              description: "User has custom contrast settings",
              example: "Let browser handle it"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to detect and respond to high contrast"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Increase Contrast"
            code={`/* Normal styling */
.card {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #6b7280;
}

/* High contrast mode - increase visibility */
@media (prefers-contrast: more) {
  .card {
    background: #ffffff;
    border: 3px solid #000000; /* Thicker, darker border */
    color: #000000; /* Pure black text */
  }
}`}
          />

          <SyntaxBlock
            title="Enhance Text Readability"
            code={`/* Normal text */
.text {
  color: #6b7280;
}

h1 {
  color: #1f2937;
}

/* High contrast - use pure black/white */
@media (prefers-contrast: more) {
  .text {
    color: #000000;
    font-weight: 500; /* Slightly bolder */
  }
  
  h1 {
    color: #000000;
    border-bottom: 3px solid #000000;
  }
}`}
          />

          <SyntaxBlock
            title="Button Contrast"
            code={`/* Normal button */
.button {
  background: #3b82f6;
  color: white;
  border: none;
}

/* High contrast button - clear boundaries */
@media (prefers-contrast: more) {
  .button {
    background: #000000;
    color: #ffffff;
    border: 3px solid #000000;
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
  
  .button:hover {
    background: #ffffff;
    color: #000000;
    outline-color: #000000;
  }
}`}
          />
        </div>

        <InfoAlert type="tip" title="High Contrast Tips">
          In high contrast mode: Use <strong>pure black (#000000) and white (#ffffff)</strong>, 
          make borders <strong>thicker (2-3px)</strong>, and <strong>increase font weight</strong> for better visibility!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: High Contrast UI */}
      <SectionCard
        title="Example: High Contrast Interface"
        description="See how UI adapts to high contrast"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>User Interface</h2>
  <p class="description">Enable High Contrast mode in your OS to see changes</p>
  
  <div class="cards">
    <div class="card">
      <h3>Profile Settings</h3>
      <p>Manage your account preferences and privacy settings</p>
      <button class="btn">Edit Profile</button>
    </div>
    
    <div class="card">
      <h3>Notifications</h3>
      <p>Control how and when you receive updates</p>
      <button class="btn">Configure</button>
    </div>
    
    <div class="card">
      <h3>Security</h3>
      <p>Two-factor authentication and password settings</p>
      <button class="btn">Manage</button>
    </div>
  </div>
  
  <div class="info">
    <strong>High Contrast Mode:</strong> Borders, text, and buttons become more visible
  </div>
</div>`}
          css={`.container {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 28px;
}

.description {
  margin: 0 0 32px 0;
  color: #6b7280;
  font-size: 14px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.card {
  padding: 24px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.card h3 {
  margin: 0 0 12px 0;
  color: #1f2937;
  font-size: 18px;
}

.card p {
  margin: 0 0 16px 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
}

.btn {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #2563eb;
}

.info {
  padding: 20px;
  background: #eff6ff;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  color: #1e40af;
  text-align: center;
}

/* HIGH CONTRAST MODE */
@media (prefers-contrast: more) {
  h2 {
    color: #000000;
    font-weight: 700;
    border-bottom: 3px solid #000000;
    padding-bottom: 8px;
  }
  
  .description {
    color: #000000;
    font-weight: 500;
  }
  
  .card {
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 0; /* Remove rounded corners for clarity */
  }
  
  .card h3 {
    color: #000000;
    font-weight: 700;
  }
  
  .card p {
    color: #000000;
    font-weight: 500;
  }
  
  .btn {
    background: #000000;
    color: #ffffff;
    border: 3px solid #000000;
    border-radius: 0;
    font-weight: 700;
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
  
  .btn:hover {
    background: #ffffff;
    color: #000000;
    outline-color: #000000;
  }
  
  .info {
    background: #ffffff;
    border: 3px solid #000000;
    color: #000000;
    font-weight: 600;
    border-radius: 0;
  }
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .description {
    color: #9ca3af;
  }
  
  .card {
    background: #374151;
    border-color: #4b5563;
  }
  
  .card h3 {
    color: #f3f4f6;
  }
  
  .card p {
    color: #9ca3af;
  }
  
  .info {
    background: #1e3a8a;
    border-color: #3b82f6;
    color: #93c5fd;
  }
}`}
          title="High Contrast UI"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Form Contrast */}
      <SectionCard
        title="Example: High Contrast Forms"
        description="Make form inputs more visible"
        icon={Layers}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <form class="form">
    <h2>Contact Form</h2>
    
    <div class="field">
      <label for="name">Full Name</label>
      <input type="text" id="name" placeholder="John Doe">
    </div>
    
    <div class="field">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="john@example.com">
    </div>
    
    <div class="field">
      <label for="message">Message</label>
      <textarea id="message" rows="4" placeholder="Your message..."></textarea>
    </div>
    
    <button type="submit">Send Message</button>
  </form>
</div>`}
          css={`.container {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

.form {
  max-width: 500px;
  padding: 32px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}

.form h2 {
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 24px;
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: all 0.2s ease;
}

input:focus,
textarea:focus {
  outline: 2px solid #3b82f6;
  border-color: #3b82f6;
}

button {
  width: 100%;
  padding: 14px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: #2563eb;
}

/* HIGH CONTRAST MODE */
@media (prefers-contrast: more) {
  .form {
    background: #ffffff;
    border: 4px solid #000000;
    border-radius: 0;
  }
  
  .form h2 {
    color: #000000;
    font-weight: 700;
    border-bottom: 3px solid #000000;
    padding-bottom: 12px;
  }
  
  label {
    color: #000000;
    font-weight: 700;
  }
  
  input,
  textarea {
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 0;
    color: #000000;
    font-weight: 500;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #666666;
    font-weight: 500;
  }
  
  input:focus,
  textarea:focus {
    outline: 3px solid #000000;
    outline-offset: 3px;
    border-color: #000000;
  }
  
  button {
    background: #000000;
    color: #ffffff;
    border: 3px solid #000000;
    border-radius: 0;
    font-weight: 700;
    outline: 3px solid #ffffff;
    outline-offset: 2px;
  }
  
  button:hover {
    background: #ffffff;
    color: #000000;
    outline-color: #000000;
  }
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  .form {
    background: #374151;
    border-color: #4b5563;
  }
  
  .form h2 {
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
          title="High Contrast Forms"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use High Contrast"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Forms"
            description="Make inputs and labels more visible"
            icon={CheckCircle}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Buttons & Links"
            description="Ensure clear boundaries and states"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Text Content"
            description="Increase text darkness and weight"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Borders & Outlines"
            description="Make element boundaries more prominent"
            icon={Layers}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="High Contrast Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Use Pure Black/White:</strong> #000000 and #ffffff for maximum contrast</li>
          <li><strong>Thicker Borders:</strong> Increase from 1-2px to 3-4px</li>
          <li><strong>Increase Font Weight:</strong> Use 500-700 weight for better readability</li>
          <li><strong>Remove Rounded Corners:</strong> Sharp corners are clearer in high contrast</li>
          <li><strong>Add Outlines:</strong> Use outline property for extra emphasis</li>
          <li><strong>Test Both Modes:</strong> Check regular and high contrast versions</li>
        </ul>
      </InfoAlert>

      {/* How to Enable */}
      <InfoAlert type="info" title="How to Enable High Contrast">
        <div className="mt-2 space-y-2">
          <p><strong>🪟 Windows:</strong> Settings → Ease of Access → High Contrast → Turn on high contrast</p>
          <p><strong>🍎 Mac:</strong> System Preferences → Accessibility → Display → Increase contrast</p>
          <p><strong>🍏 iOS:</strong> Settings → Accessibility → Display & Text Size → Increase Contrast</p>
          <p><strong>🤖 Android:</strong> Settings → Accessibility → High contrast text</p>
        </div>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>⚠️ Good but Growing:</strong> <code>prefers-contrast</code> is supported in Chrome 96+, Edge 96+, 
          and Safari 14.1+. Firefox support is limited. Always provide good default contrast as a fallback!
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}
