import React from 'react';
import { Edit, Target, Layers, Paintbrush, CheckCircle, Sparkles } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  PropertyTable,
  UseCaseCard
} from '../shared/css-topic-layout';

interface FormStylingProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FormStyling({ onOpenWebPlayground }: FormStylingProps) {
    
    return (
        <CssTopicLayout
            icon={Edit}
            title="Form Styling"
            description="Make forms beautiful and user-friendly with CSS"
            category="CSS Forms & UI"
            whatIsIt={{
                title: "What is Form Styling?",
                description: "Using CSS to make forms look good and work better",
                keyPoints: [
                    "Style input fields, buttons, and other form elements",
                    "Create consistent, professional-looking forms",
                    "Improve user experience with visual feedback",
                    "Make forms accessible and mobile-friendly",
                    "Add hover, focus, and disabled states",
                    "Works in all modern browsers"
                ]
            }}
        >

            {/* Simple Explanation */}
            <InfoAlert type="info" title="Simple Concept">
                Forms are everywhere on the web - login pages, contact forms, search boxes. 
                With CSS, you can make them look professional and easy to use!
            </InfoAlert>

            {/* How It Works */}
            <SectionCard
                title="What Can You Style?"
                description="All the parts of a form"
                icon={Edit}
                variant="primary"
            >
                <ConceptGrid
                    concepts={[
                        {
                            title: "Input Fields",
                            description: "Text boxes where users type information",
                            example: "<input type='text'>"
                        },
                        {
                            title: "Buttons",
                            description: "Clickable elements to submit or cancel",
                            example: "<button>Submit</button>"
                        },
                        {
                            title: "Select Dropdowns",
                            description: "Menus to choose from options",
                            example: "<select><option>...</option></select>"
                        },
                        {
                            title: "Labels",
                            description: "Text that describes each field",
                            example: "<label>Name:</label>"
                        }
                    ]}
                />
            </SectionCard>

            {/* Basic Syntax */}
            <SectionCard
                title="Basic Syntax"
                description="How to style form elements"
                icon={Paintbrush}
            >
                <div className="space-y-6">
                    <SyntaxBlock
                        title="Style Input Fields"
                        code={`input {
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
}

/* When user clicks/focuses */
input:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}`}
                    />

                    <SyntaxBlock
                        title="Style Buttons"
                        code={`.button {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* When user hovers over button */
.button:hover {
  background: #2563eb;
}`}
                    />
                </div>

                <InfoAlert type="tip" title="Mobile Tip">
                    Use <code>font-size: 16px</code> minimum on iOS to prevent auto-zoom when focusing inputs!
                </InfoAlert>
            </SectionCard>

            {/* Example 1: Text Inputs */}
            <SectionCard
                title="Example: Text Input Form"
                description="Beautiful input fields with labels"
                icon={Edit}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Modern Text Input"
                        html={`<div class="form-group">
  <label for="username">Username</label>
  <input type="text" id="username" placeholder="Enter your username">
</div>

<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">
</div>

<div class="form-group">
  <label for="message">Message</label>
  <textarea id="message" placeholder="Your message here..." rows="4"></textarea>
</div>`}
                        css={`.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #6b7280;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Example 2: Buttons */}
            <SectionCard
                title="Example: Button Styles"
                description="Multiple button variants"
                icon={Target}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Button Variants"
                        html={`<div class="button-group">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>
  <button class="btn btn-ghost">Ghost</button>
</div>

<div class="button-group">
  <button class="btn btn-sm">Small</button>
  <button class="btn">Medium</button>
  <button class="btn btn-lg">Large</button>
</div>

<div class="button-group">
  <button class="btn btn-primary" disabled>Disabled</button>
</div>`}
                        css={`.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: #8b5cf6;
  color: white;
}

.btn-secondary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #3b82f6;
  border-color: #3b82f6;
}

.btn-outline:hover {
  background: #3b82f6;
  color: white;
}

.btn-ghost {
  background: transparent;
  color: #374151;
  border-color: transparent;
}

.btn-ghost:hover {
  background: #f3f4f6;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 14px;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 18px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

@media (prefers-color-scheme: dark) {
  .btn-ghost {
    color: #e5e7eb;
  }
  
  .btn-ghost:hover {
    background: #374151;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Example 3: Select Dropdown */}
            <SectionCard
                title="Example: Select Dropdown"
                description="Custom dropdown with arrow"
                icon={Layers}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Custom Select"
                        html={`<div class="select-wrapper">
  <label for="country">Country</label>
  <select id="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
    <option value="au">Australia</option>
  </select>
</div>

<div class="select-wrapper">
  <label for="size">Size</label>
  <select id="size">
    <option value="xs">Extra Small</option>
    <option value="sm">Small</option>
    <option value="md" selected>Medium</option>
    <option value="lg">Large</option>
    <option value="xl">Extra Large</option>
  </select>
</div>`}
                        css={`.select-wrapper {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  
  /* Custom arrow */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%236b7280' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

select:hover {
  border-color: #9ca3af;
}

select:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  select {
    background-color: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%239ca3af' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  }
  
  select option {
    background: #1f2937;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Use Cases */}
            <SectionCard
                title="When to Style Forms"
                description="Common scenarios"
                icon={Target}
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <UseCaseCard
                        title="Login & Signup Forms"
                        description="Make authentication forms professional and trustworthy"
                        icon={Edit}
                        gradient="from-blue-500 to-indigo-600"
                    />
                    <UseCaseCard
                        title="Contact Forms"
                        description="Create welcoming forms that encourage users to reach out"
                        icon={Target}
                        gradient="from-green-500 to-emerald-600"
                    />
                    <UseCaseCard
                        title="Search Inputs"
                        description="Style search bars to stand out and be easy to use"
                        icon={Layers}
                        gradient="from-purple-500 to-pink-600"
                    />
                    <UseCaseCard
                        title="Settings Pages"
                        description="Organize controls clearly with consistent styling"
                        icon={Paintbrush}
                        gradient="from-amber-500 to-orange-600"
                    />
                </div>
            </SectionCard>

            {/* Best Practices */}
            <InfoAlert type="success" title="Best Practices">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>Consistent Spacing:</strong> Use the same padding/margins on all form elements</li>
                    <li><strong>Clear Focus States:</strong> Always show visible outline when user focuses an input</li>
                    <li><strong>Mobile-Friendly:</strong> Make buttons at least 44×44px for easy tapping</li>
                    <li><strong>Color Contrast:</strong> Ensure text is readable (minimum 4.5:1 contrast ratio)</li>
                    <li><strong>Disabled States:</strong> Make disabled inputs look obviously different</li>
                </ul>
            </InfoAlert>

            {/* Browser Support */}
            <InfoAlert type="info" title="Browser Support">
                <p className="mt-2">
                    <strong>✅ All Modern Browsers:</strong> Form styling properties work in Chrome, Firefox, Safari, and Edge. 
                    Some advanced features like custom file upload styling may need workarounds for older browsers.
                </p>
            </InfoAlert>

        </CssTopicLayout>
    );
}
