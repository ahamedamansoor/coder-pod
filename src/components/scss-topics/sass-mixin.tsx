'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Puzzle, BookText, Lightbulb, AlertTriangle, Blocks,
    Code, Eye, EyeOff, CheckCircle, Target, Zap, Settings,
    Globe, RefreshCw, Copy, ArrowRight, Hash, TreePine,
    Layers, Star, Rocket, BookOpen, FolderTree
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassMixin({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const basicMixinHtml = `<button class="error-button">Error</button>
<button class="success-button">Success</button>`;

    const basicMixinScss = `// Define a mixin for a basic theme button
@mixin theme-button($theme-color) {
  background-color: $theme-color;
  color: white;
  border: 1px solid darken($theme-color, 10%);
  padding: 10px 20px;
  border-radius: 5px;
}

// Use the mixin
.error-button {
  @include theme-button(red);
}

.success-button {
  @include theme-button(green);
}`;
    
    const basicMixinCss = `.error-button {
  background-color: red;
  color: white;
  border: 1px solid #cc0000;
  padding: 10px 20px;
  border-radius: 5px;
}

.success-button {
  background-color: green;
  color: white;
  border: 1px solid #006400;
  padding: 10px 20px;
  border-radius: 5px;
}`;

    const contentMixinHtml = `<div class="card">
  <h2>Title</h2>
  <p>Some content here.</p>
</div>`;

    const contentMixinScss = `// Mixin for creating a media query
@mixin for-desktop {
  @media (min-width: 1024px) {
    // The @content directive outputs the styles passed into the mixin
    @content;
  }
}

.card {
  width: 100%;

  // Use the mixin and pass a block of styles
  @include for-desktop {
    width: 50%;
    margin: 0 auto;
  }
}`;

    const contentMixinCss = `.card {
  width: 100%;
}
@media (min-width: 1024px) {
  .card {
    width: 50%;
    margin: 0 auto;
  }
}`;

    const mixinPatterns = [
        {
            type: 'Basic Mixins',
            icon: Blocks,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Simple reusable style groups',
            example: '@mixin button-style { ... }'
        },
        {
            type: 'Parameterized',
            icon: Settings,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Mixins with arguments and defaults',
            example: '@mixin size($w: 100px, $h: 100px)'
        },
        {
            type: 'Content Blocks',
            icon: Code,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Accept style blocks with @content',
            example: '@mixin media-query { @content; }'
        },
        {
            type: 'Advanced Logic',
            icon: Zap,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Conditional logic and loops',
            example: '@if, @for, @each in mixins'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic Mixin Usage',
            html: `<div class="demo-container">
  <div class="card card--primary">
    <h3>Primary Card</h3>
    <p>This card uses the primary theme.</p>
    <button class="btn btn--primary">Action</button>
  </div>
  
  <div class="card card--secondary">
    <h3>Secondary Card</h3>
    <p>This card uses the secondary theme.</p>
    <button class="btn btn--secondary">Action</button>
  </div>
  
  <div class="card card--success">
    <h3>Success Card</h3>
    <p>This card uses the success theme.</p>
    <button class="btn btn--success">Action</button>
  </div>
</div>`,
            scss: '// Color variables\n$primary: #3b82f6;\n$secondary: #64748b;\n$success: #10b981;\n$danger: #ef4444;\n\n// Basic mixin for consistent styling\n@mixin card-base {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n}\n\n// Parameterized mixin for themed elements\n@mixin theme-element($color, $hover-darken: 10%) {\n  background: $color;\n  color: white;\n  border: 2px solid $color;\n  \n  &:hover {\n    background: darken($color, $hover-darken);\n    border-color: darken($color, $hover-darken);\n  }\n}\n\n// Button mixin with size options\n@mixin button-style($size: medium) {\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  \n  @if $size == small {\n    padding: 0.5rem 1rem;\n    font-size: 0.875rem;\n  } @else if $size == large {\n    padding: 1rem 2rem;\n    font-size: 1.125rem;\n  } @else {\n    padding: 0.75rem 1.5rem;\n    font-size: 1rem;\n  }\n}\n\n// Usage\n.demo-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  padding: 2rem;\n}\n\n.card {\n  @include card-base;\n  \n  h3 {\n    margin: 0 0 1rem 0;\n    color: #1a202c;\n  }\n  \n  p {\n    color: #4a5568;\n    margin-bottom: 1.5rem;\n    line-height: 1.6;\n  }\n  \n  &--primary {\n    border-left: 4px solid $primary;\n  }\n  \n  &--secondary {\n    border-left: 4px solid $secondary;\n  }\n  \n  &--success {\n    border-left: 4px solid $success;\n  }\n}\n\n.btn {\n  @include button-style;\n  \n  &--primary {\n    @include theme-element($primary);\n  }\n  \n  &--secondary {\n    @include theme-element($secondary);\n  }\n  \n  &--success {\n    @include theme-element($success);\n  }\n}',
            css: `.demo-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card h3 {
  margin: 0 0 1rem 0;
  color: #1a202c;
}

.card p {
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card--primary {
  border-left: 4px solid #3b82f6;
}

.card--secondary {
  border-left: 4px solid #64748b;
}

.card--success {
  border-left: 4px solid #10b981;
}

.btn {
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn--primary {
  background: #3b82f6;
  color: white;
  border: 2px solid #3b82f6;
}

.btn--primary:hover {
  background: #2563eb;
  border-color: #2563eb;
}

.btn--secondary {
  background: #64748b;
  color: white;
  border: 2px solid #64748b;
}

.btn--secondary:hover {
  background: #475569;
  border-color: #475569;
}`
        },
        advanced: {
            title: 'Advanced Mixin Patterns',
            html: `<div class="responsive-demo">
  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
  </div>
  
  <div class="form-demo">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="input input--valid" placeholder="John Doe">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="input input--error" placeholder="invalid-email">
    </div>
    <div class="form-group">
      <label>Message</label>
      <textarea class="input" placeholder="Your message..."></textarea>
    </div>
  </div>
</div>`,
            scss: '// Advanced mixins with @content and logic\n@mixin respond-to($breakpoint) {\n  @if $breakpoint == mobile {\n    @media (max-width: 767px) { @content; }\n  }\n  @if $breakpoint == tablet {\n    @media (min-width: 768px) and (max-width: 1023px) { @content; }\n  }\n  @if $breakpoint == desktop {\n    @media (min-width: 1024px) { @content; }\n  }\n}\n\n// Mixin with complex logic\n@mixin grid-system($columns: 12, $gap: 1rem) {\n  display: grid;\n  gap: $gap;\n  \n  @include respond-to(mobile) {\n    grid-template-columns: 1fr;\n  }\n  \n  @include respond-to(tablet) {\n    grid-template-columns: repeat(calc($columns / 2), 1fr);\n  }\n  \n  @include respond-to(desktop) {\n    grid-template-columns: repeat($columns, 1fr);\n  }\n}\n\n.responsive-demo {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}',
            css: `@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.responsive-demo {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

@media (max-width: 767px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out 0.1s forwards;
}

.grid-item:nth-child(2) {
  animation-delay: 0.2s;
}

.grid-item:nth-child(3) {
  animation-delay: 0.3s;
}

.grid-item:nth-child(4) {
  animation-delay: 0.4s;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input--valid {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input--valid:focus {
  border-color: #059669;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

.input--error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input--error:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}`
        },
        library: {
            title: 'Mixin Library',
            html: `<div class="library-demo">
  <div class="utility-showcase">
    <div class="flex-center">
      <h3>Flex Center</h3>
    </div>
    
    <div class="aspect-ratio-box">
      <img src="https://via.placeholder.com/400x300" alt="Demo">
    </div>
    
    <div class="truncate-text">
      This is a very long text that will be truncated with ellipsis when it overflows the container width.
    </div>
    
    <div class="glass-card">
      <h4>Glass Morphism</h4>
      <p>Beautiful glass effect card</p>
    </div>
  </div>
</div>`,
            scss: '// Utility Mixin Library\n@mixin flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.library-demo {\n  padding: 2rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 100vh;\n}',
            css: '.library-demo {\n  padding: 2rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 100vh;\n}\n\n.flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Blocks className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sass @mixin & @include Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Create reusable style recipes that eliminate code duplication and boost productivity.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Target className="w-6 h-6 animate-bounce" />
                        The Power of Reusable Styles
                    </CardTitle>
                    <CardDescription>
                        Mixins are like functions for CSS - define once, use everywhere with customizable parameters.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Blocks className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Define Once</h3>
                            <p className="text-sm text-muted-foreground">Create reusable style patterns</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Settings className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Parameterize</h3>
                            <p className="text-sm text-muted-foreground">Customize with arguments</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Include Anywhere</h3>
                            <p className="text-sm text-muted-foreground">Use with @include directive</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Mixin Patterns */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Mixin Patterns & Techniques
                    </CardTitle>
                    <CardDescription>
                        Different approaches to creating and using mixins for various scenarios.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {mixinPatterns.map((pattern, index) => {
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
                        <TreePine className="w-6 h-6" />
                        How Mixins Work: Visual Flow
                    </CardTitle>
                    <CardDescription>
                        See how @mixin definitions get included and compiled into CSS.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="space-y-3">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">📝 Define</h4>
                                <code className="text-xs block">@mixin button-style($color) {'{ ... }'}</code>
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <ArrowRight className="w-6 h-6 text-primary" />
                                <span className="text-sm font-semibold text-primary">@include</span>
                                <ArrowRight className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">📄 Output</h4>
                            <code className="text-xs block">Compiled CSS styles</code>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded border border-amber-200">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 Key Benefits</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <ul className="space-y-1 text-amber-600 dark:text-amber-400">
                                <li>• DRY (Don't Repeat Yourself) principle</li>
                                <li>• Parameterized customization</li>
                                <li>• Consistent styling patterns</li>
                            </ul>
                            <ul className="space-y-1 text-amber-600 dark:text-amber-400">
                                <li>• Easy maintenance and updates</li>
                                <li>• Complex logic with @content</li>
                                <li>• Better code organization</li>
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
                        Interactive Mixin Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different mixin patterns with real examples and compiled output.
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
                                    {key === 'basic' ? '@mixin' : key === 'advanced' ? '@content' : 'Utils'}
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
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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

            {/* @content Deep Dive */}
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Code className="w-6 h-6" />
                        @content: Advanced Mixin Patterns
                    </CardTitle>
                    <CardDescription>
                        The @content directive allows mixins to accept entire style blocks, enabling powerful patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Media Query Mixins</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) { @content; }
  }
  @if $breakpoint == tablet {
    @media (min-width: 768px) { @content; }
  }
  @if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}

.component {
  font-size: 1rem;
  
  @include respond-to(mobile) {
    font-size: 0.875rem;
  }
  
  @include respond-to(desktop) {
    font-size: 1.125rem;
  }
}`
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. State-based Mixins</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `@mixin hover-focus {
  &:hover,
  &:focus {
    @content;
  }
}

@mixin dark-mode {
  @media (prefers-color-scheme: dark) {
    @content;
  }
}

.button {
  background: #3b82f6;
  
  @include hover-focus {
    background: #2563eb;
    transform: translateY(-1px);
  }
  
  @include dark-mode {
    background: #1e40af;
  }
}`
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Animation Mixins</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

@mixin animate($name, $duration: 1s, $timing: ease) {
  animation: $name $duration $timing;
}

@include keyframes(slideIn) {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.slide-element {
  @include animate(slideIn, 0.5s, ease-out);
}`
                                    }}
                                />
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
                        Mixin Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for creating and using mixins effectively.
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
                                    <span>Use descriptive mixin names</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Provide default parameter values</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Keep mixins focused and single-purpose</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use @content for flexible patterns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document complex mixins with comments</span>
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
                                    <span>Creating overly complex mixins</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using mixins for simple, static styles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Not providing default values</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Mixing too many concerns in one mixin</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Overusing mixins for code duplication</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* @mixin vs @extend */}
            <Card className="border-red-500 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="w-6 h-6" />
                        @mixin vs @extend: When to Use What
                    </CardTitle>
                    <CardDescription>
                        Understanding the key differences and choosing the right approach.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">✅ Use @mixin When:</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `// ✅ Good for @mixin - Parameterized
@mixin button-style($color, $size: medium) {
  background: $color;
  @if $size == large {
    padding: 1rem 2rem;
  } @else {
    padding: 0.5rem 1rem;
  }
}

.btn-primary { @include button-style(blue); }
.btn-large { @include button-style(red, large); }

// Result: Styles duplicated but customized`
                                    }}
                                />
                            </div>
                            <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/20 rounded border border-blue-200">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">@mixin Benefits</h4>
                                <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                    <li>• Accepts parameters for customization</li>
                                    <li>• Can include conditional logic</li>
                                    <li>• Works with @content directive</li>
                                    <li>• More flexible and powerful</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">⚠️ Use @extend When:</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `// ⚠️ OK for @extend - Static styles only
%button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary { 
  @extend %button-base;
  background: blue;
}
.btn-secondary { 
  @extend %button-base;
  background: gray;
}

// Result: Grouped selectors, smaller CSS`
                                    }}
                                />
                            </div>
                            <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded border border-yellow-200">
                                <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">@extend Limitations</h4>
                                <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                                    <li>• No parameters or customization</li>
                                    <li>• Can create complex selector chains</li>
                                    <li>• Harder to debug and maintain</li>
                                    <li>• Limited flexibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Real-world Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Real-world Mixin Library
                    </CardTitle>
                    <CardDescription>
                        Professional mixin patterns used in production codebases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Typography System</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `@mixin font-size($size) {
  $sizes: (
    xs: (12px, 1.3),
    sm: (14px, 1.4),
    base: (16px, 1.5),
    lg: (18px, 1.6),
    xl: (20px, 1.6),
    2xl: (24px, 1.7)
  );
  
  $font-data: map-get($sizes, $size);
  font-size: nth($font-data, 1);
  line-height: nth($font-data, 2);
}

@mixin heading($level: 1) {
  font-weight: 700;
  margin-bottom: 0.5em;
  
  @if $level == 1 {
    @include font-size(2xl);
  } @else if $level == 2 {
    @include font-size(xl);
  } @else {
    @include font-size(lg);
  }
}`
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Layout Utilities</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre 
                                    className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: `@mixin container($max-width: 1200px) {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
}

@mixin grid($columns: 12, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

@mixin flex-center($direction: row) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: $direction;
}`
                                    }}
                                />
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
                        Mixin Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@mixin name {'{ ... }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@include name;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@mixin name($param) {'{ ... }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@include name(value);</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Advanced Features</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@mixin name {'{ @content; }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@include name {'{ styles }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">$param: default !default;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@if, @for, @each</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Common Patterns</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Media queries</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Button variants</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Typography scales</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Layout utilities</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            Start with simple mixins and gradually add parameters and logic as needed. 
                            Use @content for flexible patterns like media queries and state management. 
                            Always prefer mixins over @extend for better maintainability.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
