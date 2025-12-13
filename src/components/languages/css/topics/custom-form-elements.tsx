import React from 'react';
import { CheckSquare, Upload, Sliders, Target, Sparkles, Layers } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CustomFormElementsProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CustomFormElements({ onOpenWebPlayground }: CustomFormElementsProps) {
    
    return (
        <CssTopicLayout
            icon={CheckSquare}
            title="Custom Form Elements"
            description="Make checkboxes, radio buttons, and sliders look exactly how you want"
            category="CSS Forms & UI"
            whatIsIt={{
                title: "What are Custom Form Elements?",
                description: "Replacing boring default form controls with your own beautiful designs",
                keyPoints: [
                    "Style checkboxes to match your brand",
                    "Create custom radio buttons with any shape",
                    "Design beautiful file upload buttons",
                    "Make range sliders look modern",
                    "Use appearance: none to remove browser defaults",
                    "Works across all modern browsers"
                ]
            }}
        >

            {/* Simple Explanation */}
            <InfoAlert type="info" title="Simple Concept">
                You know how checkboxes and radio buttons look different in every browser? And they're pretty ugly? 
                With CSS, you can hide those defaults and create your own beautiful custom versions that match your design perfectly!
            </InfoAlert>

            {/* Elements You Can Customize */}
            <SectionCard
                title="What Can You Customize?"
                description="Four main form elements"
                icon={CheckSquare}
                variant="primary"
            >
                <ConceptGrid
                    concepts={[
                        {
                            title: "☑️ Checkboxes",
                            description: "Boxes that users can check on/off",
                            example: "Styled squares with checkmarks"
                        },
                        {
                            title: "⭕ Radio Buttons",
                            description: "Circles where users pick one option",
                            example: "Custom circles with dots inside"
                        },
                        {
                            title: "📁 File Uploads",
                            description: "Buttons to select files",
                            example: "Beautiful upload buttons"
                        },
                        {
                            title: "🎚️ Range Sliders",
                            description: "Sliders to pick numbers",
                            example: "Modern slider with custom track"
                        }
                    ]}
                />
            </SectionCard>

            {/* Basic Technique */}
            <SectionCard
                title="The Magic Property"
                description="appearance: none removes browser defaults"
                icon={Sparkles}
            >
                <SyntaxBlock
                    title="Step 1: Remove Default Styling"
                    code={`/* Hide the ugly default checkbox/radio */
input[type="checkbox"],
input[type="radio"] {
  appearance: none;  /* This is the magic! */
  -webkit-appearance: none;
}

/* Now you have a blank canvas to style! */`}
                />

                <InfoAlert type="tip" title="Important">
                    <code>appearance: none</code> removes all browser default styling, giving you complete control. 
                    Always include <code>-webkit-appearance: none</code> for Safari support!
                </InfoAlert>
            </SectionCard>

            {/* Example 1: Custom Checkboxes */}
            <SectionCard
                title="Example: Custom Checkboxes"
                description="Beautiful checkboxes with animations"
                icon={CheckSquare}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Modern Checkboxes"
                        html={`<div class="checkbox-group">
  <label class="checkbox-label">
    <input type="checkbox" checked>
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Enable notifications</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox">
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Subscribe to newsletter</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox" checked>
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Remember me</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox" disabled>
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Disabled option</span>
  </label>
</div>`}
                        css={`.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s;
}

.checkbox-label:has(input:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hide default checkbox */
.checkbox-label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Custom checkbox */
.checkbox-custom {
  position: relative;
  width: 22px;
  height: 22px;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.checkbox-label:hover .checkbox-custom {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* Checked state */
.checkbox-label input:checked + .checkbox-custom {
  background: #3b82f6;
  border-color: #3b82f6;
}

/* Checkmark */
.checkbox-label input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Focus state */
.checkbox-label input:focus-visible + .checkbox-custom {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Label text */
.checkbox-text {
  font-size: 16px;
  color: #374151;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  .checkbox-custom {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .checkbox-label:hover .checkbox-custom {
    border-color: #60a5fa;
  }
  
  .checkbox-label input:checked + .checkbox-custom {
    background: #3b82f6;
    border-color: #3b82f6;
  }
  
  .checkbox-text {
    color: #e5e7eb;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Example 2: Custom Radio Buttons */}
            <SectionCard
                title="Example: Custom Radio Buttons"
                description="Styled circular radio buttons"
                icon={Target}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Modern Radio Buttons"
                        html={`<div class="radio-group">
  <p class="group-label">Choose your plan:</p>
  
  <label class="radio-label">
    <input type="radio" name="plan" value="free" checked>
    <span class="radio-custom"></span>
    <span class="radio-content">
      <strong>Free Plan</strong>
      <small>Basic features</small>
    </span>
  </label>
  
  <label class="radio-label">
    <input type="radio" name="plan" value="pro">
    <span class="radio-custom"></span>
    <span class="radio-content">
      <strong>Pro Plan</strong>
      <small>Advanced features</small>
    </span>
  </label>
  
  <label class="radio-label">
    <input type="radio" name="plan" value="enterprise">
    <span class="radio-custom"></span>
    <span class="radio-content">
      <strong>Enterprise Plan</strong>
      <small>Full features</small>
    </span>
  </label>
</div>`}
                        css={`.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 16px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.radio-label:hover {
  border-color: #10b981;
  background: #f0fdf4;
}

/* Hide default radio */
.radio-label input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Custom radio button */
.radio-custom {
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid #9ca3af;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.radio-label:hover .radio-custom {
  border-color: #10b981;
}

/* Checked state */
.radio-label input:checked ~ .radio-custom {
  border-color: #10b981;
  background: white;
}

/* Inner dot */
.radio-label input:checked ~ .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
}

/* Selected label style */
.radio-label:has(input:checked) {
  border-color: #10b981;
  background: #f0fdf4;
}

/* Radio content */
.radio-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.radio-content strong {
  color: #374151;
  font-size: 16px;
}

.radio-content small {
  color: #6b7280;
  font-size: 14px;
}

/* Focus state */
.radio-label input:focus-visible ~ .radio-custom {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .group-label {
    color: #e5e7eb;
  }
  
  .radio-label {
    background: #1f2937;
    border-color: #374151;
  }
  
  .radio-label:hover {
    background: #065f46;
    border-color: #10b981;
  }
  
  .radio-custom {
    background: #1f2937;
    border-color: #6b7280;
  }
  
  .radio-label input:checked ~ .radio-custom {
    background: #1f2937;
  }
  
  .radio-label:has(input:checked) {
    background: #065f46;
  }
  
  .radio-content strong {
    color: #e5e7eb;
  }
  
  .radio-content small {
    color: #9ca3af;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Example 3: Custom Range Slider */}
            <SectionCard
                title="Example: Custom Range Slider"
                description="Modern slider with custom styling"
                icon={Sliders}
                variant="primary"
            >
                <FrontendCodePreview
                        title="Modern Range Slider"
                        html={`<div class="slider-wrapper">
  <label for="volume">Volume: <span id="volume-value">50</span>%</label>
  <input type="range" id="volume" min="0" max="100" value="50">
</div>

<div class="slider-wrapper">
  <label for="brightness">Brightness: <span id="brightness-value">75</span>%</label>
  <input type="range" id="brightness" min="0" max="100" value="75">
</div>

<script>
const volume = document.getElementById('volume');
const volumeValue = document.getElementById('volume-value');
volume.addEventListener('input', () => {
  volumeValue.textContent = volume.value;
});

const brightness = document.getElementById('brightness');
const brightnessValue = document.getElementById('brightness-value');
brightness.addEventListener('input', () => {
  brightnessValue.textContent = brightness.value;
});
</script>`}
                        css={`.slider-wrapper {
  margin-bottom: 32px;
}

label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #374151;
  font-size: 16px;
}

/* Range input styling */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, 
    #8b5cf6 0%, 
    #8b5cf6 50%, 
    #e5e7eb 50%, 
    #e5e7eb 100%
  );
  outline: none;
  transition: background 0.3s;
}

/* Webkit (Chrome, Safari) Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
  transition: all 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #7c3aed;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.6);
  transform: scale(1.1);
}

/* Firefox Thumb */
input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
  transition: all 0.3s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  background: #7c3aed;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.6);
  transform: scale(1.1);
}

/* Firefox Track */
input[type="range"]::-moz-range-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
}

/* Focus state */
input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input[type="range"] {
    background: linear-gradient(to right, 
      #8b5cf6 0%, 
      #8b5cf6 50%, 
      #374151 50%, 
      #374151 100%
    );
  }
  
  input[type="range"]::-moz-range-track {
    background: #374151;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
            </SectionCard>

            {/* Use Cases */}
            <SectionCard
                title="When to Use Custom Form Elements"
                description="Common scenarios"
                icon={Target}
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <UseCaseCard
                        title="Branding"
                        description="Match form controls to your company's design system"
                        icon={CheckSquare}
                        gradient="from-blue-500 to-indigo-600"
                    />
                    <UseCaseCard
                        title="User Experience"
                        description="Create larger, more user-friendly controls"
                        icon={Target}
                        gradient="from-green-500 to-emerald-600"
                    />
                    <UseCaseCard
                        title="Mobile Apps"
                        description="Make controls touch-friendly for mobile devices"
                        icon={Sparkles}
                        gradient="from-purple-500 to-pink-600"
                    />
                    <UseCaseCard
                        title="Themes"
                        description="Create dark mode or themed form controls"
                        icon={Layers}
                        gradient="from-amber-500 to-orange-600"
                    />
                </div>
            </SectionCard>

            {/* Best Practices */}
            <InfoAlert type="success" title="Best Practices">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>Maintain Accessibility:</strong> Keep native HTML elements and only hide them visually</li>
                    <li><strong>Keyboard Support:</strong> Ensure Tab, Space, and Enter keys work properly</li>
                    <li><strong>Focus Indicators:</strong> Always provide visible focus states for keyboard navigation</li>
                    <li><strong>Touch Targets:</strong> Make clickable areas at least 44×44px for mobile</li>
                    <li><strong>Test Thoroughly:</strong> Check with screen readers and across devices</li>
                </ul>
            </InfoAlert>

            {/* Browser Support */}
            <InfoAlert type="info" title="Browser Support">
                <p className="mt-2">
                    <strong>✅ All Modern Browsers:</strong> Custom form elements using <code>appearance: none</code> work in 
                    Chrome, Firefox, Safari, and Edge. Range sliders need vendor prefixes for best compatibility.
                </p>
            </InfoAlert>

        </CssTopicLayout>
    );
}
