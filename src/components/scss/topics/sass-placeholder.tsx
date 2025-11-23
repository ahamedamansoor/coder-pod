'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Percent, Ghost, Lightbulb, AlertTriangle, CheckCircle,
    Code, Eye, EyeOff, Target, Zap, Settings, Globe, RefreshCw,
    Copy, ArrowRight, Hash, TreePine, Layers, Star, Rocket,
    BookOpen, FolderTree, Users, Link2, GitBranch, Workflow,
    Network, Merge, Sparkles, Wand2, Package, Shield
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassPlaceholder({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const placeholderHtml = `<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-danger">Danger Button</button>`;

    const placeholderScss = `// Define a placeholder
%button-base {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
}

// Extend the placeholder
.btn-primary {
  @extend %button-base;
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
  }
}

.btn-secondary {
  @extend %button-base;
  background: #64748b;
  color: white;
  
  &:hover {
    background: #475569;
  }
}

.btn-danger {
  @extend %button-base;
  background: #ef4444;
  color: white;
  
  &:hover {
    background: #dc2626;
  }
}`;

    const placeholderCss = `/* Notice: %button-base doesn't appear in the output */

.btn-primary, .btn-secondary, .btn-danger {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
}

.btn-primary:hover, .btn-secondary:hover, .btn-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-primary:active, .btn-secondary:active, .btn-danger:active {
  transform: translateY(0);
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #64748b;
  color: white;
}

.btn-secondary:hover {
  background: #475569;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}`;

    const vsExtendHtml = `<div class="message-success">Success!</div>
<div class="message-error">Error!</div>
<div class="message-warning">Warning!</div>`;

    const vsExtendScss = `// Using a regular class with @extend
.message {
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
  border-left: 4px solid;
}

.message-success {
  @extend .message;
  background: #d1fae5;
  border-color: #10b981;
  color: #065f46;
}

.message-error {
  @extend .message;
  background: #fee2e2;
  border-color: #ef4444;
  color: #991b1b;
}

.message-warning {
  @extend .message;
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

// ❌ Problem: .message appears in CSS even if unused`;

    const vsPlaceholderScss = `// Using a placeholder
%message-base {
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
  border-left: 4px solid;
}

.message-success {
  @extend %message-base;
  background: #d1fae5;
  border-color: #10b981;
  color: #065f46;
}

.message-error {
  @extend %message-base;
  background: #fee2e2;
  border-color: #ef4444;
  color: #991b1b;
}

.message-warning {
  @extend %message-base;
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

// ✅ Better: %message-base doesn't appear in output`;

    const utilityHtml = `<div class="flex-center">Centered Content</div>
<div class="text-truncate">This is a very long text that will be truncated with ellipsis</div>
<div class="clearfix">Float clearing</div>`;

    const utilityScss = `// Common utility placeholders
%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

%text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

%clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

%sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Use them anywhere
.flex-center {
  @extend %flex-center;
}

.text-truncate {
  @extend %text-truncate;
  max-width: 200px;
}

.clearfix {
  @extend %clearfix;
}

.modal-title {
  @extend %text-truncate;
  max-width: 300px;
  font-weight: bold;
}`;

    const placeholderPatterns = [
        {
            type: 'Basic Placeholders',
            icon: Hash,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Simple reusable style patterns',
            example: '%base { styles } @extend %base;'
        },
        {
            type: 'Utility Placeholders',
            icon: Wand2,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Common utility patterns and helpers',
            example: '%flex-center, %text-truncate'
        },
        {
            type: 'Component Bases',
            icon: Package,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Foundation styles for components',
            example: '%button-base, %card-base'
        },
        {
            type: 'System Placeholders',
            icon: Shield,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Design system foundations',
            example: '%reset, %typography-base'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic Placeholder Usage',
            html: '<div class="demo-container">\n  <div class="notification notification--info">\n    <div class="notification__icon">ℹ️</div>\n    <div class="notification__content">\n      <h4>Information</h4>\n      <p>This is an informational message using placeholder styles.</p>\n    </div>\n  </div>\n  \n  <div class="notification notification--success">\n    <div class="notification__icon">✅</div>\n    <div class="notification__content">\n      <h4>Success</h4>\n      <p>Operation completed successfully!</p>\n    </div>\n  </div>\n  \n  <div class="notification notification--warning">\n    <div class="notification__icon">⚠️</div>\n    <div class="notification__content">\n      <h4>Warning</h4>\n      <p>Please review your input before proceeding.</p>\n    </div>\n  </div>\n  \n  <div class="notification notification--error">\n    <div class="notification__icon">❌</div>\n    <div class="notification__content">\n      <h4>Error</h4>\n      <p>Something went wrong. Please try again.</p>\n    </div>\n  </div>\n</div>',
            scss: '// Base notification placeholder - never appears in CSS unless extended\n%notification-base {\n  display: flex;\n  align-items: flex-start;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border-left: 4px solid transparent;\n  background: #f8fafc;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n  \n  &__icon {\n    font-size: 1.25rem;\n    margin-right: 0.75rem;\n    flex-shrink: 0;\n  }\n  \n  &__content {\n    flex: 1;\n    \n    h4 {\n      margin: 0 0 0.5rem 0;\n      font-weight: 600;\n      font-size: 0.875rem;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n    \n    p {\n      margin: 0;\n      font-size: 0.875rem;\n      line-height: 1.5;\n    }\n  }\n}\n\n// Themed notification variants extending the base\n.notification {\n  &--info {\n    @extend %notification-base;\n    border-left-color: #3b82f6;\n    background: #eff6ff;\n    \n    .notification__content {\n      h4 { color: #1e40af; }\n      p { color: #1e3a8a; }\n    }\n  }\n  \n  &--success {\n    @extend %notification-base;\n    border-left-color: #10b981;\n    background: #ecfdf5;\n    \n    .notification__content {\n      h4 { color: #047857; }\n      p { color: #065f46; }\n    }\n  }\n  \n  &--warning {\n    @extend %notification-base;\n    border-left-color: #f59e0b;\n    background: #fffbeb;\n    \n    .notification__content {\n      h4 { color: #d97706; }\n      p { color: #92400e; }\n    }\n  }\n  \n  &--error {\n    @extend %notification-base;\n    border-left-color: #ef4444;\n    background: #fef2f2;\n    \n    .notification__content {\n      h4 { color: #dc2626; }\n      p { color: #991b1b; }\n    }\n  }\n}\n\n.demo-container {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}',
            css: '.notification--info, .notification--success, .notification--warning, .notification--error {\n  display: flex;\n  align-items: flex-start;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border-left: 4px solid transparent;\n  background: #f8fafc;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.notification--info:hover, .notification--success:hover, .notification--warning:hover, .notification--error:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.notification--info .notification__icon, .notification--success .notification__icon, .notification--warning .notification__icon, .notification--error .notification__icon {\n  font-size: 1.25rem;\n  margin-right: 0.75rem;\n  flex-shrink: 0;\n}\n\n.notification--info {\n  border-left-color: #3b82f6;\n  background: #eff6ff;\n}\n\n.notification--info .notification__content h4 {\n  color: #1e40af;\n}\n\n.notification--success {\n  border-left-color: #10b981;\n  background: #ecfdf5;\n}\n\n.notification--success .notification__content h4 {\n  color: #047857;\n}'
        },
        utilities: {
            title: 'Utility Placeholder Library',
            html: '<div class="utility-demo">\n  <div class="layout-examples">\n    <div class="flex-center-demo">\n      <h3>Flex Center</h3>\n      <p>Perfectly centered content</p>\n    </div>\n    \n    <div class="aspect-ratio-demo">\n      <img src="https://via.placeholder.com/400x300" alt="Demo image">\n    </div>\n    \n    <div class="text-examples">\n      <div class="truncate-demo">\n        This is a very long text that will be truncated with ellipsis when it exceeds the container width\n      </div>\n      \n      <div class="sr-only-demo">\n        <span class="visually-hidden">Screen reader only text</span>\n        <span>Visible text</span>\n      </div>\n    </div>\n  </div>\n  \n  <div class="form-examples">\n    <div class="form-group">\n      <label class="form-label">Name</label>\n      <input type="text" class="form-input" placeholder="Enter your name">\n    </div>\n    \n    <div class="form-group">\n      <label class="form-label">Message</label>\n      <textarea class="form-textarea" placeholder="Enter your message"></textarea>\n    </div>\n  </div>\n</div>',
            scss: '// === LAYOUT UTILITIES ===\n%flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n%aspect-ratio-16-9 {\n  position: relative;\n  overflow: hidden;\n  \n  &::before {\n    content: "";\n    display: block;\n    padding-top: 56.25%; // 9/16 * 100%\n  }\n  \n  > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n%grid-center {\n  display: grid;\n  place-items: center;\n}\n\n// === TEXT UTILITIES ===\n%text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n%text-truncate-multiline {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n%visually-hidden {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n// === FORM UTILITIES ===\n%form-element-base {\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1.5;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.75rem;\n  transition: all 0.2s ease;\n  \n  &:focus {\n    outline: none;\n    border-color: #3b82f6;\n    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n  }\n}\n\n%form-label-base {\n  display: block;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n\n// === COMPONENT IMPLEMENTATIONS ===\n.flex-center-demo {\n  @extend %flex-center;\n  @extend %aspect-ratio-16-9;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  text-align: center;\n  border-radius: 12px;\n  \n  h3 {\n    margin: 0 0 0.5rem 0;\n    font-size: 1.5rem;\n  }\n  \n  p {\n    margin: 0;\n    opacity: 0.9;\n  }\n}\n\n.aspect-ratio-demo {\n  @extend %aspect-ratio-16-9;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.truncate-demo {\n  @extend %text-truncate;\n  max-width: 300px;\n  padding: 1rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\n.visually-hidden {\n  @extend %visually-hidden;\n}\n\n.form-label {\n  @extend %form-label-base;\n}\n\n.form-input {\n  @extend %form-element-base;\n  width: 100%;\n}\n\n.form-textarea {\n  @extend %form-element-base;\n  width: 100%;\n  min-height: 120px;\n  resize: vertical;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n// === LAYOUT ===\n.utility-demo {\n  padding: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.layout-examples {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n\n.text-examples {\n  space-y: 1rem;\n}\n\n.form-examples {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}',
            css: '.notification--info, .notification--success, .notification--warning, .notification--error, .flex-center-demo, .aspect-ratio-demo {\n  position: relative;\n  overflow: hidden;\n}\n\n.flex-center-demo, .aspect-ratio-demo::before {\n  content: "";\n  display: block;\n  padding-top: 56.25%;\n}\n\n.flex-center-demo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-center-demo > *, .aspect-ratio-demo > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.truncate-demo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.visually-hidden {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n.form-label, .form-input, .form-textarea {\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.form-input, .form-textarea {\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.75rem;\n  transition: all 0.2s ease;\n}\n\n.form-input:focus, .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}'
        },
        architecture: {
            title: 'Design System Architecture',
            html: '<div class="design-system-demo">\n  <div class="foundation-layer">\n    <h2>Foundation Layer</h2>\n    <div class="foundation-examples">\n      <div class="reset-example">Reset Styles Applied</div>\n      <div class="typography-example">Typography Base Applied</div>\n      <div class="spacing-example">Spacing System Applied</div>\n    </div>\n  </div>\n  \n  <div class="component-layer">\n    <h2>Component Layer</h2>\n    <div class="component-examples">\n      <button class="btn btn--primary">Primary Button</button>\n      <button class="btn btn--secondary">Secondary Button</button>\n      \n      <div class="card">\n        <h3>Card Component</h3>\n        <p>This card extends the base card placeholder.</p>\n        <button class="btn btn--primary">Action</button>\n      </div>\n      \n      <div class="input-group">\n        <label class="label">Input Field</label>\n        <input type="text" class="input" placeholder="Enter text">\n      </div>\n    </div>\n  </div>\n  \n  <div class="pattern-layer">\n    <h2>Pattern Layer</h2>\n    <div class="pattern-examples">\n      <div class="media-object">\n        <div class="media-object__figure">📷</div>\n        <div class="media-object__body">\n          <h4>Media Object Pattern</h4>\n          <p>Flexible pattern for media and content alignment.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>',
            scss: '// === FOUNDATION LAYER ===\n// These placeholders form the base of our design system\n\n%reset-base {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n%typography-base {\n  @extend %reset-base;\n  font-family: system-ui, -apple-system, sans-serif;\n  line-height: 1.5;\n  color: #1f2937;\n}\n\n%interactive-base {\n  @extend %reset-base;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  \n  &:focus {\n    outline: 2px solid #3b82f6;\n    outline-offset: 2px;\n  }\n}\n\n%spacing-system {\n  // Consistent spacing using CSS custom properties\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n}\n\n// === COMPONENT LAYER ===\n// Building blocks that extend foundation placeholders\n\n%button-base {\n  @extend %interactive-base;\n  @extend %typography-base;\n  \n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  text-decoration: none;\n  \n  &:hover {\n    transform: translateY(-1px);\n  }\n  \n  &:active {\n    transform: translateY(0);\n  }\n}\n\n%card-base {\n  @extend %reset-base;\n  @extend %spacing-system;\n  \n  background: white;\n  border-radius: 12px;\n  padding: var(--space-lg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  \n  h3 {\n    @extend %typography-base;\n    margin: 0 0 var(--space-md) 0;\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n  \n  p {\n    @extend %typography-base;\n    margin: 0 0 var(--space-lg) 0;\n    color: #6b7280;\n  }\n}\n\n%form-field-base {\n  @extend %typography-base;\n  \n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  \n  &:focus {\n    outline: none;\n    border-color: #3b82f6;\n    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n  }\n}\n\n%label-base {\n  @extend %typography-base;\n  \n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n\n// === PATTERN LAYER ===\n// Complex patterns built from components\n\n%media-object {\n  @extend %reset-base;\n  \n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  \n  &__figure {\n    flex-shrink: 0;\n    font-size: 2rem;\n  }\n  \n  &__body {\n    flex: 1;\n    \n    h4 {\n      @extend %typography-base;\n      margin: 0 0 0.5rem 0;\n      font-weight: 600;\n    }\n    \n    p {\n      @extend %typography-base;\n      margin: 0;\n      color: #6b7280;\n    }\n  }\n}\n\n// === IMPLEMENTATION ===\n// Actual classes that extend the placeholders\n\n.btn {\n  @extend %button-base;\n  \n  &--primary {\n    background: #3b82f6;\n    color: white;\n    \n    &:hover {\n      background: #2563eb;\n    }\n  }\n  \n  &--secondary {\n    background: #f3f4f6;\n    color: #374151;\n    \n    &:hover {\n      background: #e5e7eb;\n    }\n  }\n}\n\n.card {\n  @extend %card-base;\n}\n\n.input {\n  @extend %form-field-base;\n}\n\n.label {\n  @extend %label-base;\n}\n\n.media-object {\n  @extend %media-object;\n}\n\n// === LAYOUT ===\n.design-system-demo {\n  @extend %spacing-system;\n  \n  padding: var(--space-xl);\n  max-width: 1200px;\n  margin: 0 auto;\n  \n  h2 {\n    @extend %typography-base;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-bottom: var(--space-lg);\n    color: #1f2937;\n    border-bottom: 2px solid #e5e7eb;\n    padding-bottom: var(--space-sm);\n  }\n}\n\n.foundation-layer,\n.component-layer,\n.pattern-layer {\n  margin-bottom: var(--space-xl);\n  padding: var(--space-lg);\n  background: #f9fafb;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n\n.foundation-examples,\n.component-examples {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--space-lg);\n}\n\n.reset-example,\n.typography-example,\n.spacing-example {\n  @extend %typography-base;\n  \n  padding: var(--space-md);\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n  font-weight: 500;\n}\n\n.input-group {\n  max-width: 300px;\n}',
            css: '.btn, .btn--primary, .btn--secondary, .card, .input, .label, .media-object, .reset-example, .typography-example, .spacing-example {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.btn, .btn--primary, .btn--secondary, .card h3, .card p, .input, .label, .media-object__body h4, .media-object__body p, .design-system-demo h2, .reset-example, .typography-example, .spacing-example {\n  font-family: system-ui, -apple-system, sans-serif;\n  line-height: 1.5;\n  color: #1f2937;\n}\n\n.btn, .btn--primary, .btn--secondary {\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.btn:focus, .btn--primary:focus, .btn--secondary:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n}\n\n.btn:hover, .btn--primary:hover, .btn--secondary:hover {\n  transform: translateY(-1px);\n}\n\n.card, .design-system-demo {\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n}\n\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: var(--space-lg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n}\n\n.btn--primary {\n  background: #3b82f6;\n  color: white;\n}\n\n.btn--primary:hover {\n  background: #2563eb;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Percent className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Placeholder Selectors Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of creating invisible, reusable styles that keep your CSS clean, efficient, and perfectly organized.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Ghost className="w-6 h-6 animate-bounce" />
                        The Magic of Invisible Styles
                    </CardTitle>
                    <CardDescription>
                        Placeholder selectors are like invisible blueprints—they exist only to be extended, never compiled on their own.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Clean Output</h3>
                            <p className="text-sm text-muted-foreground">No unused CSS in final output</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Wand2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Reusable Magic</h3>
                            <p className="text-sm text-muted-foreground">Define once, extend everywhere</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">System Foundation</h3>
                            <p className="text-sm text-muted-foreground">Perfect for design systems</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Placeholder Patterns */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-6 h-6 text-primary" />
                        Placeholder Patterns & Types
                    </CardTitle>
                    <CardDescription>
                        Different categories of placeholder selectors for various use cases and architectural patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {placeholderPatterns.map((pattern, index) => {
                            const Icon = pattern.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${pattern.bgColor} ${pattern.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${pattern.color}`} />
                                        <h3 className="font-bold text-sm">{pattern.type}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{pattern.description}</p>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                        {pattern.example}
                                    </code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Visual Comparison */}
            <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <GitBranch className="w-6 h-6" />
                        Placeholder vs Regular Class: The Difference
                    </CardTitle>
                    <CardDescription>
                        See how placeholders create cleaner CSS by only appearing when extended.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                            <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" />
                                ❌ Regular Class with @extend
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 mb-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`.message {
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
}

.success {
  @extend .message;
  background: green;
}

/* Problem: .message appears 
   in CSS even if unused */`}
                                </pre>
                            </div>
                            <div className="text-xs text-red-600 dark:text-red-400 space-y-1">
                                <p>• Unused base class in output</p>
                                <p>• Potential HTML confusion</p>
                                <p>• Less semantic approach</p>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                ✅ Placeholder Selector
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 mb-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`%message-base {
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
}

.success {
  @extend %message-base;
  background: green;
}

/* Better: %message-base only 
   appears when extended */`}
                                </pre>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400 space-y-1">
                                <p>• Clean CSS output</p>
                                <p>• No unused base styles</p>
                                <p>• Semantic and efficient</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Placeholder Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different placeholder patterns with real examples and compiled output.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(interactiveExamples).map(([key, example]) => (
                            <Button
                                key={key}
                                variant={selectedExample === key ? "default" : "outline"}
                                onClick={() => setSelectedExample(key)}
                                size="sm"
                                className="transition-all duration-200"
                            >
                                <Badge variant="secondary" className="mr-2 text-xs">
                                    {key === 'basic' ? '%base' : key === 'utilities' ? '%utils' : '%system'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-purple-600" />
                                    SCSS Input
                                </h3>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
                                    {interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                    CSS Output
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowOutput(!showOutput)}
                                    className="transition-all duration-200"
                                >
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal compiled CSS output'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                        <Button 
                            onClick={() => onOpenWebPlayground(
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].html,
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss,
                                ''
                            )}
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                            <Play className="w-4 h-4" />
                            Try in Playground
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss)}
                            className="flex items-center gap-2"
                        >
                            <Copy className="w-4 h-4" />
                            Copy SCSS
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Placeholder Patterns */}
            <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Rocket className="w-6 h-6" />
                        Advanced Placeholder Patterns
                    </CardTitle>
                    <CardDescription>
                        Professional techniques for building complex placeholder hierarchies and utility systems.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Nested Placeholder Hierarchies</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Foundation layer
%element-base {
  position: relative;
  box-sizing: border-box;
}

%interactive-element {
  @extend %element-base;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
}

%form-element {
  @extend %element-base;
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid #ccc;
}

// Component layer
%button-foundation {
  @extend %interactive-element;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
}

%input-foundation {
  @extend %form-element;
  padding: 0.75rem;
  border-radius: 6px;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
}

// Implementation
.btn {
  @extend %button-foundation;
  padding: 0.75rem 1.5rem;
}

.input {
  @extend %input-foundation;
  width: 100%;
}`}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Multiple Inheritance Patterns</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Trait-like placeholders
%clickable {
  cursor: pointer;
  user-select: none;
}

%focusable {
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
}

%hoverable {
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
}

%accessible {
  @extend %focusable;
  
  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Combine multiple traits
.interactive-card {
  @extend %clickable;
  @extend %hoverable;
  @extend %accessible;
  
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Utility Library Showcase */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Wand2 className="w-6 h-6" />
                        Complete Utility Placeholder Library
                    </CardTitle>
                    <CardDescription>
                        A comprehensive collection of utility placeholders for common design patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                <h4 className="font-semibold mb-2 text-blue-600">Layout Utilities</h4>
                                <ul className="text-sm space-y-1">
                                    <li><code>%flex-center</code></li>
                                    <li><code>%grid-center</code></li>
                                    <li><code>%aspect-ratio-16-9</code></li>
                                    <li><code>%container</code></li>
                                    <li><code>%clearfix</code></li>
                                </ul>
                            </div>
                            <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                <h4 className="font-semibold mb-2 text-green-600">Text Utilities</h4>
                                <ul className="text-sm space-y-1">
                                    <li><code>%text-truncate</code></li>
                                    <li><code>%text-truncate-multiline</code></li>
                                    <li><code>%visually-hidden</code></li>
                                    <li><code>%text-gradient</code></li>
                                    <li><code>%text-shadow</code></li>
                                </ul>
                            </div>
                            <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                <h4 className="font-semibold mb-2 text-purple-600">Effect Utilities</h4>
                                <ul className="text-sm space-y-1">
                                    <li><code>%glass-morphism</code></li>
                                    <li><code>%card-shadow</code></li>
                                    <li><code>%hover-lift</code></li>
                                    <li><code>%fade-in</code></li>
                                    <li><code>%loading-shimmer</code></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3">Complete Utility Library Example</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// === LAYOUT UTILITIES ===
%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

%grid-center {
  display: grid;
  place-items: center;
}

%aspect-ratio-16-9 {
  position: relative;
  
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// === TEXT UTILITIES ===
%text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

%visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

// === EFFECT UTILITIES ===
%glass-morphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

%card-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

%hover-lift {
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <Lightbulb className="w-6 h-6" />
                        Placeholder Best Practices & Guidelines
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for creating maintainable and efficient placeholder systems.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Best Practices
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use descriptive names: <code>%button-base</code>, <code>%card-shadow</code></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Organize in dedicated <code>_placeholders.scss</code> files</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Create hierarchical placeholder systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use for internal, reusable style patterns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document placeholder purposes and usage</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Common Pitfalls
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Extending placeholders from inside media queries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating overly complex inheritance chains</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using placeholders when mixins would be better</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Overusing @extend for dynamic styles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating placeholders for single-use styles</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎯 Decision Framework</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Use Placeholders When:</h5>
                                <p className="text-blue-600 dark:text-blue-400">Static styles shared across multiple selectors</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-1">Use Mixins When:</h5>
                                <p className="text-green-600 dark:text-green-400">Dynamic styles with parameters or logic</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">Use Regular Classes When:</h5>
                                <p className="text-purple-600 dark:text-purple-400">Standalone styles used directly in HTML</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* File Organization */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FolderTree className="w-6 h-6 text-primary" />
                        Placeholder File Organization
                    </CardTitle>
                    <CardDescription>
                        Professional structure for organizing placeholder selectors in large projects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Recommended File Structure</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`scss/
├── placeholders/
│   ├── _index.scss           // Import all placeholders
│   ├── _foundation.scss      // Base system placeholders
│   ├── _layout.scss          // Layout utility placeholders
│   ├── _typography.scss      // Text-related placeholders
│   ├── _components.scss      // Component base placeholders
│   ├── _effects.scss         // Visual effect placeholders
│   └── _utilities.scss       // General utility placeholders
├── components/
│   ├── _buttons.scss         // Extends %button-base
│   ├── _cards.scss           // Extends %card-base
│   └── _forms.scss           // Extends %form-element-base
└── main.scss                 // Import placeholders first`}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Example: _foundation.scss</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// === FOUNDATION PLACEHOLDERS ===
// These form the base of your design system

%reset-base {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

%typography-base {
  @extend %reset-base;
  font-family: var(--font-family-base);
  line-height: var(--line-height-base);
  color: var(--color-text-primary);
}

%interactive-base {
  @extend %reset-base;
  cursor: pointer;
  transition: all var(--transition-duration-fast) ease;
  
  &:focus {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

%spacing-system {
  // CSS custom properties for consistent spacing
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <BookOpen className="w-6 h-6" />
                        Placeholder Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%placeholder-name {'{ ... }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@extend %placeholder-name;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@extend %a, %b;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%nested {'{ &__child { ... } }'}</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Common Patterns</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%component-base</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%utility-helper</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%foundation-reset</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%effect-animation</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Best Use Cases</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Design systems</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Utility libraries</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Component bases</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Internal helpers</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400">
                            Think of placeholders as "invisible blueprints" for your styles. They're perfect for creating 
                            clean, maintainable CSS architectures where you define patterns once and reuse them efficiently 
                            without cluttering your final CSS output with unused base classes.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

