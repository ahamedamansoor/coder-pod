
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Layers, ArrowRight, Lightbulb, AlertTriangle, 
    Target, TreePine, Code, Eye, EyeOff, CheckCircle,
    Hash, Settings, Zap, RefreshCw, BookOpen, Star,
    FileText, Globe, Lock, Copy, Wrench, Rocket
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassNesting({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const basicNestingHtml = `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>`;
    
    const basicNestingScss = `nav {
  background-color: #f0f0f0;
  padding: 1rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 1rem;

      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
}`;
    
    const basicNestingCss = `nav {
  background-color: #f0f0f0;
  padding: 1rem;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
  margin-right: 1rem;
}
nav ul li a {
  text-decoration: none;
  color: #333;
}`;

    const parentSelectorScss = `.button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
  
  // The '&' refers to the parent selector, which is '.button'
  &:hover {
    background-color: darkblue;
  }

  &.disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}`;

    const parentSelectorCss = `.button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
}
.button:hover {
  background-color: darkblue;
}
.button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}`;
    
    const bemExampleScss = `.card {
  border: 1px solid #ccc;

  // '&' refers to '.card'
  &__header {
    font-weight: bold;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
  
  &__content {
    padding: 1rem;
  }
  
  &--dark {
    background-color: #333;
    color: white;
  }
}`;

    const bemExampleCss = `.card {
  border: 1px solid #ccc;
}
.card__header {
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
.card__content {
  padding: 1rem;
}
.card--dark {
  background-color: #333;
  color: white;
}`;

    const nestedPropsScss = `div {
  font: {
    family: sans-serif;
    size: 16px;
    weight: bold;
  }
  
  border: {
    style: solid;
    width: 2px;
    color: red;
    radius: 5px; // This is a bonus - border-radius
  }
}`;

     const nestedPropsCss = `div {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-style: solid;
  border-width: 2px;
  border-color: red;
  border-radius: 5px;
}`;

    const overNestingScss = `section.main-content {
  div.container {
    article.post {
      h1.post-title {
        color: red; // A very specific selector
      }
    }
  }
}`;

    const overNestingCss = `section.main-content div.container article.post h1.post-title {
  color: red;
}`;

    const nestingPatterns = [
        {
            type: 'Basic Nesting',
            icon: TreePine,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Mirror your HTML structure in CSS',
            example: 'nav ul li a { }'
        },
        {
            type: 'Parent Selector (&)',
            icon: Hash,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Reference the parent selector',
            example: '&:hover, &.active, &__element'
        },
        {
            type: 'Nested Properties',
            icon: Settings,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Group related CSS properties',
            example: 'font: { family: ..., size: ... }'
        },
        {
            type: 'Media Queries',
            icon: Globe,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Nest media queries inside selectors',
            example: '@media (max-width: 768px) { }'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic Nesting',
            html: `<div class="card">
  <header class="card-header">
    <h2>Card Title</h2>
    <span class="badge">New</span>
  </header>
  <div class="card-body">
    <p>Card content goes here.</p>
    <button class="btn">Read More</button>
  </div>
</div>`,
            scss: `// Basic nesting mirrors HTML structure
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  
  .card-header {
    background: #f8fafc;
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
    
    h2 {
      margin: 0;
      color: #1a202c;
      font-size: 1.25rem;
    }
    
    .badge {
      background: #3b82f6;
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      float: right;
    }
  }
  
  .card-body {
    padding: 1rem;
    
    p {
      color: #4a5568;
      margin-bottom: 1rem;
    }
    
    .btn {
      background: #3b82f6;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}`,
            css: `.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.card .card-header {
  background: #f8fafc;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.card .card-header h2 {
  margin: 0;
  color: #1a202c;
  font-size: 1.25rem;
}

.card .card-header .badge {
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  float: right;
}

.card .card-body {
  padding: 1rem;
}

.card .card-body p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.card .card-body .btn {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`
        },
        parent: {
            title: 'Parent Selector (&)',
            html: `<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<div class="menu">
  <div class="menu-item active">Home</div>
  <div class="menu-item">About</div>
</div>`,
            scss: `// Parent selector (&) for pseudo-classes and modifiers
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  // Pseudo-classes with &
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  // Modifier classes with &
  &-primary {
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &-secondary {
    background: #64748b;
    color: white;
    
    &:hover {
      background: #475569;
    }
  }
}

.menu {
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.5rem;
  
  &-item {
    padding: 0.75rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover {
      background: #e2e8f0;
    }
    
    &.active {
      background: #3b82f6;
      color: white;
    }
  }
}`,
            css: `.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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

.menu {
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.5rem;
}

.menu-item {
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-item:hover {
  background: #e2e8f0;
}

.menu-item.active {
  background: #3b82f6;
  color: white;
}`
        },
        advanced: {
            title: 'Advanced Patterns',
            html: `<div class="component">
  <h3>Responsive Component</h3>
  <p>This component adapts to different screen sizes.</p>
</div>`,
            scss: `// Advanced nesting with media queries and complex selectors
.component {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin: 0 0 1rem 0;
    color: #1a202c;
    
    // Nested media query
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    
    @media (min-width: 769px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #4a5568;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
  
  // Parent context with &
  .sidebar & {
    // When .component is inside .sidebar
    max-width: 300px;
  }
  
  .main-content & {
    // When .component is inside .main-content
    max-width: 600px;
  }
  
  // Complex parent selector usage
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  &:nth-child(even) {
    background: #f7fafc;
  }
}`,
            css: `.component {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.component h3 {
  margin: 0 0 1rem 0;
  color: #1a202c;
}

@media (max-width: 768px) {
  .component h3 {
    font-size: 1.25rem;
  }
}

@media (min-width: 769px) {
  .component h3 {
    font-size: 1.5rem;
  }
}

.component p {
  color: #4a5568;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .component p {
    font-size: 0.875rem;
  }
}

.sidebar .component {
  max-width: 300px;
}

.main-content .component {
  max-width: 600px;
}

.component:not(:last-child) {
  margin-bottom: 2rem;
}

.component:nth-child(even) {
  background: #f7fafc;
}`
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <TreePine className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass Nesting Mastery</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of writing CSS rules that mirror your HTML structure for cleaner, more maintainable code.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Target className="w-6 h-6" />
                        The Power of Nesting
                    </CardTitle>
                    <CardDescription>
                        Nesting allows you to write CSS that follows your HTML structure, making it more intuitive and organized.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <TreePine className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Mirror HTML</h3>
                            <p className="text-sm text-muted-foreground">CSS structure matches HTML hierarchy</p>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Code className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Cleaner Code</h3>
                            <p className="text-sm text-muted-foreground">Reduce repetition and improve readability</p>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Wrench className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Easy Maintenance</h3>
                            <p className="text-sm text-muted-foreground">Logical organization for better maintenance</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Nesting Patterns Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Nesting Patterns
                    </CardTitle>
                    <CardDescription>
                        Different types of nesting patterns and when to use each one.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {nestingPatterns.map((pattern, index) => {
                            const Icon = pattern.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${pattern.bgColor} ${pattern.borderColor}`}>
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

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Nesting Examples
                    </CardTitle>
                    <CardDescription>
                        See how different nesting patterns work in real Sass code.
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
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
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
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal CSS output'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <Button 
                            onClick={() => onOpenWebPlayground(
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].html,
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss,
                                ''
                            )}
                            className="flex items-center gap-2"
                        >
                            <Play className="w-4 h-4" />
                            Try in Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Nested Properties */}
            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Settings className="w-6 h-6" />
                        Nested Properties
                    </CardTitle>
                    <CardDescription>
                        Group related CSS properties that share a common prefix for cleaner organization.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-3">SCSS Input</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{nestedPropsScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">CSS Output</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">{nestedPropsCss}</pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <h4 className="font-semibold mb-2">Common Property Groups</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <strong>Font Properties:</strong>
                                <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                                    font: {'{ family, size, weight }'}
                                </code>
                            </div>
                            <div>
                                <strong>Border Properties:</strong>
                                <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                                    border: {'{ style, width, color }'}
                                </code>
                            </div>
                            <div>
                                <strong>Margin/Padding:</strong>
                                <code className="block text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                                    margin: {'{ top, right, bottom, left }'}
                                </code>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Parent Selector Deep Dive */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Hash className="w-6 h-6 text-primary" />
                        Parent Selector (&) Mastery
                    </CardTitle>
                    <CardDescription>
                        Master the powerful parent selector for pseudo-classes, modifiers, and complex selectors.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Pseudo-classes and Pseudo-elements</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Pseudo-classes
.button {
  background: #3b82f6;
  
  &:hover { background: #2563eb; }
  &:focus { outline: 2px solid #3b82f6; }
  &:active { transform: scale(0.98); }
  &:disabled { opacity: 0.5; }
}

// Pseudo-elements
.tooltip {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    // Arrow styles
  }
  
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    // Tooltip content styles
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. BEM Methodology</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{bemExampleScss}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Context-Dependent Styles</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Parent context styling
.card {
  background: white;
  
  // When card is inside sidebar
  .sidebar & {
    max-width: 250px;
    font-size: 0.875rem;
  }
  
  // When card is inside main content
  .main-content & {
    max-width: 600px;
  }
  
  // When card has dark theme
  .theme-dark & {
    background: #1f2937;
    color: white;
  }
}`}</pre>
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
                        Nesting Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for effective and maintainable nesting.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Do's
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Keep nesting to 3-4 levels maximum</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use nesting to mirror HTML structure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Group related pseudo-classes together</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use & for modifier classes and states</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Nest media queries inside selectors</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Don'ts
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't nest more than 4 levels deep</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't nest unrelated selectors together</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't over-qualify selectors unnecessarily</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't nest just for the sake of nesting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't create overly specific selectors</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Over-nesting Warning */}
            <Card className="border-red-500 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="w-6 h-6" />
                        Avoiding Over-nesting
                    </CardTitle>
                    <CardDescription>
                        Learn to recognize and avoid the common pitfall of excessive nesting.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">❌ Bad: Over-nested</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{overNestingScss}</pre>
                            </div>
                            <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                                Creates overly specific selectors that are hard to override
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">✅ Good: Flattened</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`.main-content {
  padding: 2rem;
}

.post {
  margin-bottom: 2rem;
}

.post-title {
  color: #1a202c;
  font-size: 2rem;
  margin-bottom: 1rem;
}`}</pre>
                            </div>
                            <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                                Creates maintainable, reusable selectors with appropriate specificity
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">💡 The 3-Level Rule</h4>
                        <p className="text-sm text-muted-foreground">
                            A good rule of thumb is to avoid nesting more than 3 levels deep. If you find yourself going deeper, 
                            consider breaking the styles into separate, more specific selectors.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Advanced Nesting Techniques
                    </CardTitle>
                    <CardDescription>
                        Expert-level nesting patterns for complex scenarios.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Nested Media Queries</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`.component {
  padding: 1rem;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.875rem;
    
    .title {
      font-size: 1.25rem;
    }
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
    font-size: 1.125rem;
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. Complex Parent Selectors</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`.button {
  // Multiple parent references
  &.primary&.large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
  
  // Parent in the middle
  .form-group & {
    margin-top: 0.5rem;
  }
  
  // Complex combinations
  .dark-theme &:not(.outline) {
    background: #374151;
    color: white;
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Conditional Nesting</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Using Sass conditionals with nesting
$theme: 'dark';

.component {
  padding: 1rem;
  
  @if $theme == 'dark' {
    background: #1f2937;
    color: white;
    
    .title {
      color: #f9fafb;
    }
  } @else {
    background: white;
    color: #1f2937;
    
    .title {
      color: #111827;
    }
  }
}`}</pre>
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
                        Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Nesting</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">.parent {'{ .child { } }'}</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">nav ul li a {'{ }'}</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Parent Selector</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">&:hover {'{ }'}</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">&.active {'{ }'}</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">&__element {'{ }'}</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Nested Properties</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">font: {'{ family, size }'}</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">border: {'{ style, width }'}</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
