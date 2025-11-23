
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Share2, Lightbulb, AlertTriangle, Puzzle, Copy,
    Code, Eye, EyeOff, CheckCircle, Target, Zap, Settings,
    Globe, RefreshCw, ArrowRight, Hash, TreePine, Layers,
    Star, Rocket, BookOpen, FolderTree, Users, Link2,
    GitBranch, Workflow, Network, Merge
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassExtendInheritance({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const extendHtml = `<div class="alert">A basic alert.</div>
<div class="alert alert-success">A success message.</div>
<div class="alert alert-error">An error message.</div>`;

    const extendScss = `// Define a base style using a class selector
.alert {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

// Extend the .alert styles
.alert-success {
  @extend .alert;
  border-color: green;
  background-color: #e8f5e9;
}

.alert-error {
  @extend .alert;
  border-color: red;
  background-color: #ffebee;
}`;

    const extendCss = `/* The selectors are grouped together */
.alert, .alert-success, .alert-error {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

.alert-success {
  border-color: green;
  background-color: #e8f5e9;
}

.alert-error {
  border-color: red;
  background-color: #ffebee;
}`;

    const placeholderScss = `// Define a placeholder selector
// This will NOT appear in the CSS unless it's extended
%message-base {
  font-family: sans-serif;
  border: 1px solid blue;
  padding: 10px;
}

.success {
  @extend %message-base;
  background-color: lightgreen;
}

.warning {
  @extend %message-base;
  background-color: lightyellow;
}`;

    const placeholderCss = `/* %message-base does not appear on its own */
.success, .warning {
  font-family: sans-serif;
  border: 1px solid blue;
  padding: 10px;
}

.success {
  background-color: lightgreen;
}

.warning {
  background-color: lightyellow;
}`;

    const extendPatterns = [
        {
            type: 'Basic Extend',
            icon: Link2,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Inherit styles from existing selectors',
            example: '@extend .base-class;'
        },
        {
            type: 'Placeholder Selectors',
            icon: Hash,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Use %placeholder for extend-only styles',
            example: '%base { ... } @extend %base;'
        },
        {
            type: 'Multiple Inheritance',
            icon: Network,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Extend multiple selectors in one rule',
            example: '@extend %base, %theme;'
        },
        {
            type: 'Chained Extends',
            icon: GitBranch,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Create inheritance hierarchies',
            example: 'A extends B, B extends C'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic @extend Usage',
            html: '<div class="demo-container">\n  <div class="card card--primary">\n    <h3>Primary Card</h3>\n    <p>This card extends the base card styles.</p>\n    <button class="btn btn--primary">Primary Action</button>\n  </div>\n  \n  <div class="card card--secondary">\n    <h3>Secondary Card</h3>\n    <p>This card also extends the base card styles.</p>\n    <button class="btn btn--secondary">Secondary Action</button>\n  </div>\n  \n  <div class="card card--success">\n    <h3>Success Card</h3>\n    <p>Another card extending the same base.</p>\n    <button class="btn btn--success">Success Action</button>\n  </div>\n</div>',
            scss: '// Base card placeholder\n%card-base {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n  \n  h3 {\n    margin: 0 0 1rem 0;\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n  \n  p {\n    color: #6b7280;\n    margin-bottom: 1.5rem;\n    line-height: 1.6;\n  }\n}\n\n// Button base placeholder\n%btn-base {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  \n  &:hover {\n    transform: translateY(-1px);\n  }\n}\n\n// Card variants extending base\n.card {\n  @extend %card-base;\n  \n  &--primary {\n    border-left: 4px solid #3b82f6;\n    \n    h3 {\n      color: #1e40af;\n    }\n  }\n  \n  &--secondary {\n    border-left: 4px solid #64748b;\n    \n    h3 {\n      color: #374151;\n    }\n  }\n  \n  &--success {\n    border-left: 4px solid #10b981;\n    \n    h3 {\n      color: #047857;\n    }\n  }\n}\n\n// Button variants extending base\n.btn {\n  @extend %btn-base;\n  \n  &--primary {\n    background: #3b82f6;\n    color: white;\n    \n    &:hover {\n      background: #2563eb;\n    }\n  }\n  \n  &--secondary {\n    background: #64748b;\n    color: white;\n    \n    &:hover {\n      background: #475569;\n    }\n  }\n  \n  &--success {\n    background: #10b981;\n    color: white;\n    \n    &:hover {\n      background: #059669;\n    }\n  }\n}\n\n.demo-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  padding: 2rem;\n}',
            css: '.card, .card--primary, .card--secondary, .card--success {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.card:hover, .card--primary:hover, .card--secondary:hover, .card--success:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.card h3, .card--primary h3, .card--secondary h3, .card--success h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n\n.card p, .card--primary p, .card--secondary p, .card--success p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n\n.btn, .btn--primary, .btn--secondary, .btn--success {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn:hover, .btn--primary:hover, .btn--secondary:hover, .btn--success:hover {\n  transform: translateY(-1px);\n}\n\n.card--primary {\n  border-left: 4px solid #3b82f6;\n}\n\n.card--primary h3 {\n  color: #1e40af;\n}\n\n.btn--primary {\n  background: #3b82f6;\n  color: white;\n}\n\n.btn--primary:hover {\n  background: #2563eb;\n}'
        },
        advanced: {
            title: 'Advanced Inheritance Patterns',
            html: '<div class="inheritance-demo">\n  <div class="notification notification--info">\n    <div class="notification__icon">ℹ️</div>\n    <div class="notification__content">\n      <h4>Information</h4>\n      <p>This is an informational message.</p>\n    </div>\n  </div>\n  \n  <div class="notification notification--warning">\n    <div class="notification__icon">⚠️</div>\n    <div class="notification__content">\n      <h4>Warning</h4>\n      <p>This is a warning message.</p>\n    </div>\n  </div>\n  \n  <div class="notification notification--error">\n    <div class="notification__icon">❌</div>\n    <div class="notification__content">\n      <h4>Error</h4>\n      <p>This is an error message.</p>\n    </div>\n  </div>\n  \n  <div class="form-demo">\n    <div class="form-group">\n      <label class="label">Name</label>\n      <input type="text" class="input input--valid" placeholder="John Doe">\n    </div>\n    <div class="form-group">\n      <label class="label">Email</label>\n      <input type="email" class="input input--error" placeholder="invalid-email">\n    </div>\n  </div>\n</div>',
            scss: '// Base notification system with inheritance hierarchy\n%notification-base {\n  display: flex;\n  align-items: flex-start;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border-left: 4px solid transparent;\n  background: #f8fafc;\n  \n  &__icon {\n    font-size: 1.25rem;\n    margin-right: 0.75rem;\n    flex-shrink: 0;\n  }\n  \n  &__content {\n    flex: 1;\n    \n    h4 {\n      margin: 0 0 0.5rem 0;\n      font-weight: 600;\n      font-size: 0.875rem;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n    \n    p {\n      margin: 0;\n      font-size: 0.875rem;\n      line-height: 1.5;\n    }\n  }\n}\n\n// Themed notification variants\n%notification-info {\n  @extend %notification-base;\n  border-left-color: #3b82f6;\n  background: #eff6ff;\n  \n  .notification__content {\n    h4 {\n      color: #1e40af;\n    }\n    \n    p {\n      color: #1e3a8a;\n    }\n  }\n}\n\n%notification-warning {\n  @extend %notification-base;\n  border-left-color: #f59e0b;\n  background: #fffbeb;\n  \n  .notification__content {\n    h4 {\n      color: #d97706;\n    }\n    \n    p {\n      color: #92400e;\n    }\n  }\n}\n\n%notification-error {\n  @extend %notification-base;\n  border-left-color: #ef4444;\n  background: #fef2f2;\n  \n  .notification__content {\n    h4 {\n      color: #dc2626;\n    }\n    \n    p {\n      color: #991b1b;\n    }\n  }\n}\n\n// Form system with multiple inheritance\n%form-element-base {\n  font-family: inherit;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n%input-base {\n  @extend %form-element-base;\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #d1d5db;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  \n  &:focus {\n    outline: none;\n    border-color: #3b82f6;\n    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n  }\n}\n\n%label-base {\n  @extend %form-element-base;\n  display: block;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n\n// Usage classes\n.notification {\n  &--info {\n    @extend %notification-info;\n  }\n  \n  &--warning {\n    @extend %notification-warning;\n  }\n  \n  &--error {\n    @extend %notification-error;\n  }\n}\n\n.input {\n  @extend %input-base;\n  \n  &--valid {\n    border-color: #10b981;\n    \n    &:focus {\n      border-color: #059669;\n      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);\n    }\n  }\n  \n  &--error {\n    border-color: #ef4444;\n    \n    &:focus {\n      border-color: #dc2626;\n      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n    }\n  }\n}\n\n.label {\n  @extend %label-base;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.inheritance-demo {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.form-demo {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin-top: 2rem;\n}',
            css: '.notification--info, .notification--warning, .notification--error {\n  display: flex;\n  align-items: flex-start;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border-left: 4px solid transparent;\n  background: #f8fafc;\n}\n\n.notification--info .notification__icon, .notification--warning .notification__icon, .notification--error .notification__icon {\n  font-size: 1.25rem;\n  margin-right: 0.75rem;\n  flex-shrink: 0;\n}\n\n.notification--info {\n  border-left-color: #3b82f6;\n  background: #eff6ff;\n}\n\n.notification--warning {\n  border-left-color: #f59e0b;\n  background: #fffbeb;\n}\n\n.notification--error {\n  border-left-color: #ef4444;\n  background: #fef2f2;\n}\n\n.input, .input--valid, .input--error, .label {\n  font-family: inherit;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.input, .input--valid, .input--error {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #d1d5db;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.input:focus, .input--valid:focus, .input--error:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}'
        },
        architecture: {
            title: 'Design System Architecture',
            html: '<div class="design-system-demo">\n  <div class="component-library">\n    <div class="atoms-section">\n      <h3>Atoms</h3>\n      <button class="atom-btn atom-btn--primary">Primary</button>\n      <button class="atom-btn atom-btn--secondary">Secondary</button>\n      <span class="atom-badge atom-badge--success">Success</span>\n      <span class="atom-badge atom-badge--warning">Warning</span>\n    </div>\n    \n    <div class="molecules-section">\n      <h3>Molecules</h3>\n      <div class="molecule-card">\n        <h4>Card Title</h4>\n        <p>Card content goes here.</p>\n        <button class="atom-btn atom-btn--primary">Action</button>\n      </div>\n    </div>\n    \n    <div class="organisms-section">\n      <h3>Organisms</h3>\n      <div class="organism-header">\n        <div class="organism-header__brand">Brand</div>\n        <nav class="organism-header__nav">\n          <a href="#">Home</a>\n          <a href="#">About</a>\n          <a href="#">Contact</a>\n        </nav>\n        <button class="atom-btn atom-btn--secondary">Login</button>\n      </div>\n    </div>\n  </div>\n</div>',
            scss: '// Atomic Design System with @extend\n\n// === DESIGN TOKENS ===\n%design-tokens {\n  // This placeholder holds our design system values\n  // but never gets compiled to CSS\n}\n\n// === ATOMS ===\n%atom-base {\n  font-family: system-ui, -apple-system, sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n%atom-btn-base {\n  @extend %atom-base;\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  \n  &:hover {\n    transform: translateY(-1px);\n  }\n  \n  &:active {\n    transform: translateY(0);\n  }\n}\n\n%atom-badge-base {\n  @extend %atom-base;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-block;\n}\n\n// === MOLECULES ===\n%molecule-card-base {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  \n  h4 {\n    margin: 0 0 1rem 0;\n    font-size: 1.125rem;\n    font-weight: 600;\n    color: #111827;\n  }\n  \n  p {\n    margin: 0 0 1.5rem 0;\n    color: #6b7280;\n    line-height: 1.6;\n  }\n}\n\n// === ORGANISMS ===\n%organism-header-base {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  \n  &__brand {\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: #111827;\n  }\n  \n  &__nav {\n    display: flex;\n    gap: 2rem;\n    \n    a {\n      color: #6b7280;\n      text-decoration: none;\n      font-weight: 500;\n      transition: color 0.2s ease;\n      \n      &:hover {\n        color: #111827;\n      }\n    }\n  }\n}\n\n// === COMPONENT IMPLEMENTATIONS ===\n.atom-btn {\n  @extend %atom-btn-base;\n  \n  &--primary {\n    background: #3b82f6;\n    color: white;\n    \n    &:hover {\n      background: #2563eb;\n    }\n  }\n  \n  &--secondary {\n    background: #f3f4f6;\n    color: #374151;\n    \n    &:hover {\n      background: #e5e7eb;\n    }\n  }\n}\n\n.atom-badge {\n  @extend %atom-badge-base;\n  \n  &--success {\n    background: #d1fae5;\n    color: #065f46;\n  }\n  \n  &--warning {\n    background: #fef3c7;\n    color: #92400e;\n  }\n}\n\n.molecule-card {\n  @extend %molecule-card-base;\n}\n\n.organism-header {\n  @extend %organism-header-base;\n}\n\n// === LAYOUT ===\n.design-system-demo {\n  padding: 2rem;\n  background: #f9fafb;\n  min-height: 100vh;\n}\n\n.component-library {\n  max-width: 1200px;\n  margin: 0 auto;\n  \n  > div {\n    background: white;\n    padding: 2rem;\n    border-radius: 12px;\n    margin-bottom: 2rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    \n    h3 {\n      margin: 0 0 1.5rem 0;\n      font-size: 1.25rem;\n      font-weight: 600;\n      color: #111827;\n      border-bottom: 2px solid #e5e7eb;\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.atoms-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n}\n\n.molecules-section .molecule-card {\n  max-width: 300px;\n}\n\n.organisms-section .organism-header {\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}',
            css: '.atom-btn, .atom-btn--primary, .atom-btn--secondary, .atom-badge, .atom-badge--success, .atom-badge--warning {\n  font-family: system-ui, -apple-system, sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.atom-btn, .atom-btn--primary, .atom-btn--secondary {\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.atom-btn:hover, .atom-btn--primary:hover, .atom-btn--secondary:hover {\n  transform: translateY(-1px);\n}\n\n.atom-badge, .atom-badge--success, .atom-badge--warning {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-block;\n}\n\n.molecule-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n}\n\n.organism-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.atom-btn--primary {\n  background: #3b82f6;\n  color: white;\n}\n\n.atom-btn--primary:hover {\n  background: #2563eb;\n}\n\n.atom-badge--success {\n  background: #d1fae5;\n  color: #065f46;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Share2 className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        Sass @extend & Inheritance Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of sharing styles efficiently while keeping your CSS DRY and maintainable.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Users className="w-6 h-6 animate-bounce" />
                        The Power of Style Inheritance
                    </CardTitle>
                    <CardDescription>
                        @extend creates efficient CSS by grouping selectors that share the same styles, reducing file size and maintaining consistency.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Link2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Share Styles</h3>
                            <p className="text-sm text-muted-foreground">Inherit styles from other selectors</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Hash className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Placeholders</h3>
                            <p className="text-sm text-muted-foreground">Use %placeholder for extend-only styles</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Merge className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Group Selectors</h3>
                            <p className="text-sm text-muted-foreground">Efficient CSS with grouped rules</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Extend Patterns */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Network className="w-6 h-6 text-primary" />
                        @extend Patterns & Techniques
                    </CardTitle>
                    <CardDescription>
                        Different approaches to using @extend for various inheritance scenarios.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {extendPatterns.map((pattern, index) => {
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

            {/* Visual Diagram */}
            <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Workflow className="w-6 h-6" />
                        How @extend Works: Inheritance Flow
                    </CardTitle>
                    <CardDescription>
                        See how @extend creates efficient CSS by grouping selectors instead of duplicating styles.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="space-y-3">
                            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200">
                                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">📝 Define Base</h4>
                                <code className="text-xs block">%base {'{ styles }'}</code>
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <ArrowRight className="w-6 h-6 text-primary" />
                                <span className="text-sm font-semibold text-primary">@extend</span>
                                <ArrowRight className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">📄 Grouped CSS</h4>
                            <code className="text-xs block">.a, .b, .c {'{ styles }'}</code>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded border border-amber-200">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 Key Advantages</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <ul className="space-y-1 text-amber-600 dark:text-amber-400">
                                <li>• Smaller CSS file sizes</li>
                                <li>• Grouped selector efficiency</li>
                                <li>• Consistent style inheritance</li>
                            </ul>
                            <ul className="space-y-1 text-amber-600 dark:text-amber-400">
                                <li>• No style duplication</li>
                                <li>• Easy maintenance</li>
                                <li>• Perfect for design systems</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive @extend Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different inheritance patterns with real examples and compiled output.
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
                                    {key === 'basic' ? '@extend' : key === 'advanced' ? 'Hierarchy' : 'System'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-600" />
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
                            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
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

            {/* Placeholder Selectors Deep Dive */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Hash className="w-6 h-6" />
                        Placeholder Selectors: The % Symbol
                    </CardTitle>
                    <CardDescription>
                        Placeholder selectors are the secret weapon of @extend - they exist only to be extended, never compiled on their own.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Why Use Placeholders?</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ With %placeholder</h4>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                        <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`%btn-base {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
}

.btn-primary {
  @extend %btn-base;
  background: blue;
}

.btn-secondary {
  @extend %btn-base;
  background: gray;
}`}
                                        </pre>
                                    </div>
                                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                                        ✓ Clean CSS output<br/>
                                        ✓ No unused base class<br/>
                                        ✓ Semantic HTML
                                    </p>
                                </div>
                                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Without %placeholder</h4>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                        <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`.btn-base {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
}

.btn-primary {
  @extend .btn-base;
  background: blue;
}

.btn-secondary {
  @extend .btn-base;
  background: gray;
}`}
                                        </pre>
                                    </div>
                                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                                        ❌ Unused .btn-base in CSS<br/>
                                        ❌ Potential HTML confusion<br/>
                                        ❌ Less semantic
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Advanced Placeholder Patterns</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Nested placeholder hierarchy
%component-base {
  position: relative;
  display: block;
}

%interactive-component {
  @extend %component-base;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
}

%form-element {
  @extend %component-base;
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid #ccc;
}

// Multiple inheritance
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

.button {
  @extend %interactive-component;
  @extend %clickable;
  @extend %focusable;
  
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
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
                        @extend Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for using @extend effectively and avoiding common pitfalls.
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
                                    <span>Always use %placeholder selectors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Keep extended styles static and simple</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use for design system foundations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Group related selectors logically</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document inheritance hierarchies</span>
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
                                    <span>Extending complex nested selectors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using @extend across media queries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Extending selectors with parameters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating deep inheritance chains</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Mixing @extend with @mixin unnecessarily</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* @extend vs @mixin Comparison */}
            <Card className="border-purple-500 bg-purple-50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <GitBranch className="w-6 h-6" />
                        @extend vs @mixin: The Ultimate Comparison
                    </CardTitle>
                    <CardDescription>
                        Understanding when to use each approach for optimal CSS architecture.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">🎯 Use @extend When:</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// ✅ Perfect for @extend - Static styles
%card-base {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-card {
  @extend %card-base;
  // Add specific styles
}

.user-card {
  @extend %card-base;
  // Add specific styles
}

// Result: Grouped selectors, smaller CSS`}
                                </pre>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/20 rounded border border-green-200">
                                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">@extend Benefits</h4>
                                <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                                    <li>• Smaller CSS file sizes</li>
                                    <li>• Efficient selector grouping</li>
                                    <li>• Perfect for design systems</li>
                                    <li>• No style duplication</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">⚡ Use @mixin When:</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// ✅ Perfect for @mixin - Dynamic styles
@mixin button-style($color, $size: medium) {
  background: $color;
  color: white;
  border: none;
  border-radius: 6px;
  
  @if $size == large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  } @else {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

.btn-primary {
  @include button-style(#3b82f6);
}

.btn-large {
  @include button-style(#10b981, large);
}

// Result: Customized styles per use`}
                                </pre>
                            </div>
                            <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/20 rounded border border-blue-200">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">@mixin Benefits</h4>
                                <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                    <li>• Accepts parameters</li>
                                    <li>• Conditional logic support</li>
                                    <li>• Works with @content</li>
                                    <li>• Maximum flexibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">🎯 Decision Framework</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">Static Styles?</h5>
                                <p className="text-purple-600 dark:text-purple-400">Use @extend with %placeholder</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Need Parameters?</h5>
                                <p className="text-blue-600 dark:text-blue-400">Use @mixin with arguments</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-1">Design System?</h5>
                                <p className="text-green-600 dark:text-green-400">Combine both strategically</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Real-world Architecture */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Real-world @extend Architecture
                    </CardTitle>
                    <CardDescription>
                        Professional patterns for building scalable design systems with @extend.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Component Library Structure</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// === FOUNDATION LAYER ===
%reset-base {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

%typography-base {
  @extend %reset-base;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

%interactive-base {
  @extend %reset-base;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
}

// === COMPONENT LAYER ===
%button-base {
  @extend %interactive-base;
  @extend %typography-base;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-1px);
  }
}

%card-base {
  @extend %reset-base;
  
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

%form-field-base {
  @extend %typography-base;
  
  width: 100%;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.75rem;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
}

// === IMPLEMENTATION LAYER ===
.btn {
  @extend %button-base;
  padding: 0.75rem 1.5rem;
}

.btn--large {
  @extend %button-base;
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.card {
  @extend %card-base;
}

.input {
  @extend %form-field-base;
}

.textarea {
  @extend %form-field-base;
  min-height: 120px;
  resize: vertical;
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
                        @extend Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">%placeholder {'{ ... }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@extend %placeholder;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@extend .class;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@extend %a, %b;</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Best Practices</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Use %placeholder</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Keep styles static</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Avoid deep nesting</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Document hierarchy</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Common Use Cases</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Design systems</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Component bases</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Reset styles</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Theme foundations</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                            Use @extend for your design system's foundation layer and @mixin for the customization layer. 
                            This creates efficient, maintainable CSS with the best of both worlds: grouped selectors for common styles 
                            and flexible mixins for variations.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
