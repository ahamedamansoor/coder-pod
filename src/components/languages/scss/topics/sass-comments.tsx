'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    MessageSquare, Code, Play, Eye, EyeOff, FileText, 
    Lightbulb, AlertTriangle, CheckCircle, Copy, ArrowRight,
    Hash, Slash, Star, Zap, Settings, BookOpen, Target
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassComments({ onOpenEditor, onOpenWebPlayground }: {
  onOpenEditor?: (code: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
} = {}) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const singleLineExample = `// This is a single-line comment
// It won't appear in the compiled CSS

$primary-color: #3b82f6; // You can also add comments at the end of a line

.button {
  background: $primary-color;
  // This comment explains why we set this padding
  padding: 10px 20px;
}`;

    const multiLineExample = `/* 
 * Multi-line comments are preserved in the compiled CSS
 * Use them for important documentation
 * Author: Your Name
 * Date: 2025
 */

$theme-colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981
);

.header {
  /* This will appear in the final CSS */
  background: map-get($theme-colors, primary);
}`;

    const compressedExample = `// SCSS Input:
.button {
  /* This comment stays */
  background: blue;
  // This comment is removed
  padding: 10px;
}

/* Output (compressed mode): */
.button{background:blue;padding:10px}

/* Output (expanded mode): */
.button {
  /* This comment stays */
  background: blue;
  padding: 10px;
}`;

    const commentInterpolation = `$version: "1.0.0";

/* 
 * Theme Version: #{$version}
 * This uses interpolation to insert the version
 */

.app {
  // Generated on: #{current-date()} - This won't work in real Sass
  content: "Version: #{$version}"; // This is in the CSS
}`;

    const documentationExample = `//
// Typography System
// =============================================================================
// 
// This file contains all typography-related variables and mixins.
// Last updated: 2025-11-22
//

// Font Families
// -----------------------------------------------------------------------------
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
$font-mono: 'Fira Code', 'Courier New', monospace;

// Font Sizes
// -----------------------------------------------------------------------------
$font-size-base: 16px;    // Body text
$font-size-lg: 18px;      // Large text
$font-size-xl: 24px;      // Headings
$font-size-sm: 14px;      // Small text

// Line Heights
// -----------------------------------------------------------------------------
$line-height-base: 1.6;   // Comfortable reading
$line-height-tight: 1.2;  // Headings
$line-height-loose: 2;    // Spacious text

/**
 * Typography Mixin
 * 
 * @param {String} $size - Font size keyword (sm, base, lg, xl)
 * @param {Number} $line-height - Line height value
 * 
 * @example
 *   .heading {
 *     @include typography(xl, $line-height-tight);
 *   }
 */
@mixin typography($size: base, $line-height: $line-height-base) {
  @if $size == xl {
    font-size: $font-size-xl;
  } @else if $size == lg {
    font-size: $font-size-lg;
  } @else if $size == sm {
    font-size: $font-size-sm;
  } @else {
    font-size: $font-size-base;
  }
  line-height: $line-height;
}`;

    const interactiveExamples = {
        basic: {
            title: 'Basic Comments',
            scss: `// Single-line comment (won't appear in CSS)
$primary: #3b82f6;

/* Multi-line comment (will appear in CSS) */
.button {
  background: $primary; // Inline comment
  padding: 10px 20px;
}`,
            css: `/* Multi-line comment (will appear in CSS) */
.button {
  background: #3b82f6;
  padding: 10px 20px;
}`
        },
        advanced: {
            title: 'Advanced Documentation',
            scss: `/*!
 * Button Component Library v2.1.0
 * Copyright (c) 2025 Your Company
 * Licensed under MIT
 */

// =============================================================================
// BUTTON VARIABLES
// =============================================================================

$btn-padding-y: 0.75rem !default;  // Vertical padding
$btn-padding-x: 1.5rem !default;   // Horizontal padding
$btn-border-radius: 0.375rem !default; // Border radius

// Button Colors
// -----------------------------------------------------------------------------
$btn-primary: #3b82f6 !default;    // Primary button color
$btn-secondary: #6b7280 !default;  // Secondary button color

/**
 * Button Mixin
 * Creates a button with specified color and hover effect
 * 
 * @param {Color} $bg-color - Background color
 * @param {Color} $text-color - Text color  
 * @param {Color} $hover-color - Hover background color
 */
@mixin button-variant($bg-color, $text-color: white, $hover-color: darken($bg-color, 10%)) {
  background-color: $bg-color;
  color: $text-color;
  
  &:hover {
    background-color: $hover-color;
  }
}`,
            css: `/*!
 * Button Component Library v2.1.0
 * Copyright (c) 2025 Your Company
 * Licensed under MIT
 */`
        },
        conditional: {
            title: 'Conditional Comments',
            scss: `$debug-mode: true;

// Debug comments only appear when debug mode is on
@if $debug-mode {
  /* DEBUG: Button styles loaded */
}

.button {
  padding: 10px 20px;
  
  // TODO: Add focus styles
  // FIXME: Border radius not working in IE11
  // NOTE: This uses flexbox for alignment
  
  @if $debug-mode {
    /* DEBUG: Button base styles applied */
  }
}`,
            css: `/* DEBUG: Button styles loaded */
.button {
  padding: 10px 20px;
  /* DEBUG: Button base styles applied */
}`
        }
    };

    const commentTypes = [
        {
            type: '//',
            name: 'Single-line',
            icon: Slash,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Silent comments removed from CSS',
            features: ['Development notes', 'TODOs and FIXMEs', 'Code explanations', 'Temporary comments']
        },
        {
            type: '/* */',
            name: 'Multi-line',
            icon: Hash,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Preserved in compiled CSS',
            features: ['Copyright notices', 'File headers', 'Public documentation', 'License information']
        },
        {
            type: '/*! */',
            name: 'Important',
            icon: Star,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Always preserved, even in compressed mode',
            features: ['Legal notices', 'Attribution', 'Critical information', 'Library headers']
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <MessageSquare className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass Comments Mastery</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of commenting in Sass - from basic syntax to advanced documentation patterns.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Target className="w-6 h-6" />
                        Comment Types at a Glance
                    </CardTitle>
                    <CardDescription>
                        Sass offers three types of comments, each serving different purposes in your development workflow.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        {commentTypes.map((comment, index) => {
                            const Icon = comment.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${comment.bgColor} ${comment.borderColor}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${comment.color}`} />
                                        <h3 className="font-bold">{comment.name}</h3>
                                    </div>
                                    <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-2">
                                        {comment.type}
                                    </code>
                                    <p className="text-sm text-muted-foreground mb-3">{comment.description}</p>
                                    <ul className="text-xs space-y-1">
                                        {comment.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Comment Examples
                    </CardTitle>
                    <CardDescription>
                        See how different comment types behave in real Sass compilation.
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
                            >
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
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
                                    {interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-green-600" />
                                    CSS Output
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowOutput(!showOutput)}
                                >
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal CSS output'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    {onOpenWebPlayground && (
                        <div className="mt-6">
                            <Button 
                                onClick={() => onOpenWebPlayground(
                                    '<h1>Comment Example</h1>\n<div class="button">Button</div>',
                                    interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss,
                                    ''
                                )}
                                className="flex items-center gap-2"
                            >
                                <Play className="w-4 h-4" />
                                Try in Playground
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Compilation Behavior */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                        <Settings className="w-6 h-6" />
                        Compilation Behavior
                    </CardTitle>
                    <CardDescription>
                        Understanding how different output styles affect comment preservation.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Eye className="w-5 h-5 text-green-600" />
                                    Expanded Mode
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Preserves multi-line comments for debugging and documentation.
                                </p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                    <code className="text-green-400 text-xs">
                                        sass --style=expanded input.scss output.css
                                    </code>
                                </div>
                            </div>
                            
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-orange-600" />
                                    Compressed Mode
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Removes most comments for production optimization.
                                </p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                    <code className="text-green-400 text-xs">
                                        sass --style=compressed input.scss output.css
                                    </code>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Comment Preservation Rules</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <EyeOff className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Single-line comments (//)</strong> - Always removed from output
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Eye className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Multi-line comments (/* */)</strong> - Kept in expanded mode, removed in compressed
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Important comments (/*! */)</strong> - Always preserved in all modes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Comment Interpolation */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Hash className="w-6 h-6 text-primary" />
                        Comment Interpolation
                    </CardTitle>
                    <CardDescription>
                        Inject dynamic values into comments using Sass interpolation syntax.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{commentInterpolation}</pre>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">✅ Works in Multi-line</h4>
                            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                /* Version: #{'#{'}$version{'}'} */
                            </code>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Doesn't Work in Single-line</h4>
                            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                // Version: #{'#{'}$version{'}'} (not processed)
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Documentation Best Practices */}
            <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <BookOpen className="w-6 h-6" />
                        Professional Documentation Patterns
                    </CardTitle>
                    <CardDescription>
                        Learn industry-standard commenting patterns for maintainable Sass codebases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
                        <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{documentationExample}</pre>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Best Practices
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use <code>//</code> for internal development notes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use <code>/* */</code> for public API documentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document mixin/function parameters with @param</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Include usage examples with @example</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use section dividers for organization</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Common Mistakes
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Over-commenting obvious code</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Leaving outdated comments in code</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using multi-line comments for temporary notes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Forgetting to document complex logic</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Inconsistent comment formatting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-6 h-6" />
                        Advanced Comment Techniques
                    </CardTitle>
                    <CardDescription>
                        Expert-level commenting strategies for large-scale projects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold mb-3">1. Conditional Documentation</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`$debug: true;

@if $debug {
  /* DEBUG MODE: Additional styles for development */
  .debug-grid {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255,0,0,0.1) 10px,
      rgba(255,0,0,0.1) 20px
    );
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3">2. Version-Aware Comments</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`$library-version: "2.1.0";
$build-date: "2025-11-22";

/*!
 * Component Library v#{$library-version}
 * Built on #{$build-date}
 * 
 * @license MIT
 * @author Your Team
 */`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3">3. TODO Management System</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// TODO: [Priority] Description - @author - date
// TODO: [HIGH] Add dark mode support - @john - 2025-11-22
// FIXME: [CRITICAL] IE11 compatibility issue - @sarah - 2025-11-20
// NOTE: This mixin will be deprecated in v3.0
// HACK: Temporary fix for Safari bug, remove when fixed`}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Target className="w-6 h-6" />
                        Quick Reference Guide
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-3">
                            <h4 className="font-semibold">Comment Types</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs">//</code>
                                    <span>Silent (dev only)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs">/* */</code>
                                    <span>Standard (preserved)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs">/*! */</code>
                                    <span>Important (always kept)</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <h4 className="font-semibold">Use Cases</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Development:</strong> //, TODOs, notes</div>
                                <div><strong>Documentation:</strong> /* */, API docs</div>
                                <div><strong>Legal:</strong> /*! */, licenses</div>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <h4 className="font-semibold">Output Modes</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Expanded:</strong> Keeps /* */</div>
                                <div><strong>Compressed:</strong> Removes /* */</div>
                                <div><strong>All modes:</strong> Keep /*! */</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <Lightbulb className="w-6 h-6" />
                        Pro Tips for Comment Mastery
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">💡</span>
                                <div>
                                    <strong>Use comment headers</strong> to create visual sections in large files
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">💡</span>
                                <div>
                                    <strong>Document browser quirks</strong> and workarounds for future reference
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">💡</span>
                                <div>
                                    <strong>Include performance notes</strong> for expensive operations
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">💡</span>
                                <div>
                                    <strong>Use interpolation</strong> for dynamic documentation
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">💡</span>
                                <div>
                                    <strong>Comment complex calculations</strong> with step-by-step explanations
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">💡</span>
                                <div>
                                    <strong>Keep a consistent style</strong> across your team and projects
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

