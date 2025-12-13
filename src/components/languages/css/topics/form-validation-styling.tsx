import React from 'react';
import { CheckCircle, AlertCircle, Shield, XCircle, AlertTriangle, Target, Layers } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface FormValidationStylingProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FormValidationStyling({ onOpenWebPlayground }: FormValidationStylingProps) {
    
    return (
        <CssTopicLayout
            icon={Shield}
            title="Form Validation Styling"
            description="Show users when they're doing it right (or wrong)"
            category="CSS Forms & UI"
            whatIsIt={{
                title: "What is Form Validation Styling?",
                description: "Using CSS to show if form inputs are correct or have errors",
                keyPoints: [
                    "Give instant visual feedback to users",
                    "Show green borders for correct inputs",
                    "Show red borders for errors",
                    "Indicate required fields clearly",
                    "Works with HTML5 validation automatically",
                    "Makes forms easier to fill out correctly"
                ]
            }}
        >

            {/* Simple Explanation */}
            <InfoAlert type="info" title="Simple Concept">
                Imagine filling out a form - wouldn't it be nice if the input turned green when you typed your email correctly, 
                or red if something's wrong? That's what form validation styling does!
            </InfoAlert>

            {/* How It Works */}
            <SectionCard
                title="Validation Pseudo-Classes"
                description="Different states for different situations"
                icon={Shield}
                variant="primary"
            >
                <ConceptGrid
                    concepts={[
                        {
                            title: ":valid",
                            description: "Input is correct and meets all requirements",
                            example: "input:valid { border-color: green; }"
                        },
                        {
                            title: ":invalid",
                            description: "Input has errors or doesn't meet requirements",
                            example: "input:invalid { border-color: red; }"
                        },
                        {
                            title: ":required",
                            description: "Field must be filled out before submitting",
                            example: "input:required { border-left: 3px solid orange; }"
                        },
                        {
                            title: ":optional",
                            description: "Field can be left empty",
                            example: "input:optional { opacity: 0.8; }"
                        }
                    ]}
                />
            </SectionCard>

            {/* Basic Syntax */}
            <SectionCard
                title="Basic Syntax"
                description="How to style validation states"
                icon={CheckCircle}
            >
                <div className="space-y-6">
                    <SyntaxBlock
                        title="Valid Inputs (Green)"
                        code={`/* Style correct inputs with green */
input:valid {
  border-color: #10b981;
  background-color: #f0fdf4;
}

/* Add a checkmark icon */
input:valid {
  background-image: url("checkmark.svg");
  background-repeat: no-repeat;
  background-position: right 12px center;
}`}
                    />

                    <SyntaxBlock
                        title="Invalid Inputs (Red)"
                        code={`/* Style incorrect inputs with red */
input:invalid {
  border-color: #ef4444;
  background-color: #fef2f2;
}

/* Add an X icon */
input:invalid {
  background-image: url("error.svg");
  background-repeat: no-repeat;
  background-position: right 12px center;
}`}
                    />

                    <SyntaxBlock
                        title="Required Fields"
                        code={`/* Show required fields with orange indicator */
input:required {
  border-left: 3px solid #f59e0b;
}

/* Optional fields - subtle styling */
input:optional {
  border-left: 3px solid #e5e7eb;
}`}
                    />
                </div>

                <InfoAlert type="tip" title="Important Tip">
                    Use <code>:not(:placeholder-shown)</code> to only show validation after the user starts typing: 
                    <code>input:valid:not(:placeholder-shown)</code>. This prevents showing errors on empty fields!
                </InfoAlert>
            </SectionCard>

            {/* Example */}
            <SectionCard
                title="Example: Email Validation Form"
                description="Try typing valid and invalid emails!"
                icon={Shield}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Email Validation"
                        html={`<form>
  <div class="form-group">
    <label for="email">Email Address *</label>
    <input 
      type="email" 
      id="email" 
      placeholder="you@example.com"
      required
    >
    <span class="valid-feedback">✓ Valid email</span>
    <span class="invalid-feedback">✗ Please enter a valid email</span>
  </div>
  
  <div class="form-group">
    <label for="website">Website URL</label>
    <input 
      type="url" 
      id="website" 
      placeholder="https://example.com"
    >
    <span class="valid-feedback">✓ Valid URL</span>
    <span class="invalid-feedback">✗ Please enter a valid URL</span>
  </div>
</form>`}
                        css={`.form-group {
  margin-bottom: 24px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Valid state */
input:valid:not(:placeholder-shown) {
  border-color: #10b981;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M16 6L8 14L4 10' stroke='%2310b981' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

input:valid:not(:placeholder-shown):focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

/* Invalid state */
input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 6L14 14M14 6L6 14' stroke='%23ef4444' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

input:invalid:not(:placeholder-shown):focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Feedback messages */
.valid-feedback,
.invalid-feedback {
  display: none;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
}

.valid-feedback {
  color: #10b981;
}

.invalid-feedback {
  color: #ef4444;
}

input:valid:not(:placeholder-shown) ~ .valid-feedback {
  display: block;
}

input:invalid:not(:placeholder-shown) ~ .invalid-feedback {
  display: block;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Example 2: Required Fields */}
            <SectionCard
                title="Example: Required & Optional Fields"
                description="Show which fields are mandatory"
                icon={AlertTriangle}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Required Fields"
                        html={`<form>
  <div class="form-field">
    <label for="name">Full Name *</label>
    <input type="text" id="name" required>
  </div>
  
  <div class="form-field">
    <label for="phone">Phone (optional)</label>
    <input type="tel" id="phone">
  </div>
  
  <div class="form-field">
    <label for="message">Message *</label>
    <textarea id="message" required rows="4"></textarea>
  </div>
</form>`}
                        css={`.form-field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input, textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

/* Required fields indicator */
input:required,
textarea:required {
  border-left-width: 4px;
  border-left-color: #f59e0b;
}

input:required:focus,
textarea:required:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

/* Optional fields */
input:optional,
textarea:optional {
  border-left-width: 4px;
  border-left-color: #6b7280;
}

input:optional:focus,
textarea:optional:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Add indicator after label for required */
label:has(+ input:required)::after,
label:has(+ textarea:required)::after {
  content: ' (required)';
  color: #f59e0b;
  font-size: 12px;
  font-weight: normal;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input, textarea {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
}`}
                        colorTheme="orange"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Example 3: Range Validation */}
            <SectionCard
                title="Example: Number Range Validation"
                description="Validate numbers with min and max values"
                icon={Target}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Range Validation"
                        html={`<div class="range-group">
  <label for="age">Age (18-65)</label>
  <input type="number" id="age" min="18" max="65" placeholder="Enter age">
  <div class="range-info">
    <span class="range-valid">✓ Age is valid</span>
    <span class="range-invalid">✗ Age must be between 18 and 65</span>
  </div>
</div>

<div class="range-group">
  <label for="quantity">Quantity (1-10)</label>
  <input type="number" id="quantity" min="1" max="10" value="5">
  <div class="range-info">
    <span class="range-valid">✓ Quantity is valid</span>
    <span class="range-invalid">✗ Quantity must be between 1 and 10</span>
  </div>
</div>

<div class="range-group">
  <label for="price">Price ($10-$1000)</label>
  <input type="number" id="price" min="10" max="1000" step="10" placeholder="Enter price">
  <div class="range-info">
    <span class="range-valid">✓ Price is valid</span>
    <span class="range-invalid">✗ Price must be between $10 and $1000</span>
  </div>
</div>`}
                        css={`.range-group {
  margin-bottom: 24px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input[type="number"] {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

input[type="number"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* In-range styling */
input[type="number"]:in-range {
  border-color: #10b981;
  background: linear-gradient(to right, 
    rgba(16, 185, 129, 0.05), 
    rgba(16, 185, 129, 0.02)
  );
}

input[type="number"]:in-range:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

/* Out-of-range styling */
input[type="number"]:out-of-range {
  border-color: #ef4444;
  background: linear-gradient(to right, 
    rgba(239, 68, 68, 0.05), 
    rgba(239, 68, 68, 0.02)
  );
}

input[type="number"]:out-of-range:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Range info messages */
.range-info {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
}

.range-valid,
.range-invalid {
  display: none;
}

.range-valid {
  color: #10b981;
}

.range-invalid {
  color: #ef4444;
}

input[type="number"]:in-range ~ .range-info .range-valid {
  display: block;
}

input[type="number"]:out-of-range ~ .range-info .range-invalid {
  display: block;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input[type="number"] {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Use Cases */}
            <SectionCard
                title="When to Use Validation Styling"
                description="Common scenarios"
                icon={Target}
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <UseCaseCard
                        title="Registration Forms"
                        description="Help users create accounts with correct information"
                        icon={CheckCircle}
                        gradient="from-green-500 to-emerald-600"
                    />
                    <UseCaseCard
                        title="Contact Forms"
                        description="Ensure messages can be sent successfully"
                        icon={Shield}
                        gradient="from-blue-500 to-indigo-600"
                    />
                    <UseCaseCard
                        title="Checkout Pages"
                        description="Validate payment and shipping details properly"
                        icon={AlertTriangle}
                        gradient="from-orange-500 to-amber-600"
                    />
                    <UseCaseCard
                        title="Settings Pages"
                        description="Make sure users enter valid configuration data"
                        icon={Layers}
                        gradient="from-purple-500 to-pink-600"
                    />
                </div>
            </SectionCard>

            {/* Best Practices */}
            <InfoAlert type="success" title="Best Practices">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>Wait for Interaction:</strong> Use <code>:not(:placeholder-shown)</code> to avoid showing errors immediately</li>
                    <li><strong>Clear Messages:</strong> Explain what's wrong and how to fix it</li>
                    <li><strong>HTML5 Types:</strong> Use proper input types like <code>type="email"</code>, <code>type="url"</code> for automatic validation</li>
                    <li><strong>Don't Rely Only on Color:</strong> Use icons and text labels for accessibility</li>
                    <li><strong>Combine with JavaScript:</strong> CSS validation is for UX, always validate on the server too!</li>
                </ul>
            </InfoAlert>

            {/* Browser Support */}
            <InfoAlert type="info" title="Browser Support">
                <p className="mt-2">
                    <strong>✅ All Modern Browsers:</strong> Validation pseudo-classes (:valid, :invalid, :required, :in-range) work in 
                    Chrome, Firefox, Safari, and Edge. They're part of CSS3 and have been supported for years!
                </p>
            </InfoAlert>

        </CssTopicLayout>
    );
}
