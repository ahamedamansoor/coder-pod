'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Link2, Lightbulb, Target, Sparkles, Hash, 
    Code, Eye, EyeOff, CheckCircle, AlertTriangle,
    ArrowRight, Zap, Settings, Globe, RefreshCw,
    BookOpen, Star, Rocket, TreePine, Layers, Copy
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassParentSelector({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('pseudo');
    const [showOutput, setShowOutput] = useState(false);

    const hoverHtml = `<button class="btn">Hover Me!</button>
<a href="#" class="link">Click Me!</a>`;

    const hoverScss = `$primary-color: #3b82f6;
$hover-color: #2563eb;

.btn {
  background: $primary-color;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  
  // & references the parent selector (.btn)
  &:hover {
    background: $hover-color;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.link {
  color: $primary-color;
  text-decoration: none;
  position: relative;
  
  &:hover {
    color: $hover-color;
  }
  
  // Create an underline on hover
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: $hover-color;
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
}`;

    const bemHtml = `<div class="card">
  <h2 class="card__title">Card Title</h2>
  <p class="card__content">Card content goes here.</p>
  <button class="card__button">Action</button>
</div>

<div class="card card--featured">
  <h2 class="card__title">Featured Card</h2>
  <p class="card__content">This is a featured card.</p>
  <button class="card__button card__button--primary">Primary Action</button>
</div>`;

    const bemScss = `// BEM: Block Element Modifier
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  background: white;
  
  // Element: card__title
  &__title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  // Element: card__content
  &__content {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  // Element: card__button
  &__button {
    padding: 8px 16px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: #f5f5f5;
    }
    
    // Modifier: card__button--primary
    &--primary {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
      
      &:hover {
        background: #2563eb;
      }
    }
  }
  
  // Modifier: card--featured
  &--featured {
    border-color: #3b82f6;
    border-width: 2px;
    background: #eff6ff;
  }
}`;

    const advancedHtml = `<nav class="nav">
  <a href="#" class="nav__link">Home</a>
  <a href="#" class="nav__link">About</a>
  <a href="#" class="nav__link">Contact</a>
</nav>

<div class="theme-dark">
  <p class="text">This text adapts to theme</p>
</div>`;

    const advancedScss = `// Adjacent sibling selector
.nav {
  display: flex;
  gap: 0;
  
  &__link {
    padding: 10px 20px;
    color: #666;
    text-decoration: none;
    border-right: 1px solid #ddd;
    
    // First child has no left border
    &:first-child {
      border-left: 1px solid #ddd;
    }
    
    // Using & with adjacent sibling combinator
    & + & {
      // margin-left: -1px; // Prevent double borders
    }
    
    &:hover {
      background: #f5f5f5;
      color: #333;
    }
  }
}

// Using & at the end (selector suffix)
.text {
  color: #333;
  
  // If .theme-dark contains .text
  .theme-dark & {
    color: #fff;
  }
}

// Compiled to: .theme-dark .text { color: #fff; }

// Multiple parent references
.button {
  background: white;
  
  // .sidebar .button
  .sidebar & {
    width: 100%;
  }
  
  // .header .button
  .header & {
    float: right;
  }
}`;

    const diagramScss = `.card {
  // This is .card
  
  &__title {
    // This becomes .card__title
  }
  
  &:hover {
    // This becomes .card:hover
  }
  
  .parent & {
    // This becomes .parent .card
  }
  
  &.active {
    // This becomes .card.active
  }
}`;

    const parentSelectorPatterns = [
        {
            type: 'Pseudo-classes',
            icon: Target,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Add interactive states like :hover, :focus',
            example: '&:hover, &:focus, &:active'
        },
        {
            type: 'BEM Elements',
            icon: Hash,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Create BEM element selectors',
            example: '&__element, &__title, &__content'
        },
        {
            type: 'BEM Modifiers',
            icon: Settings,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Add BEM modifier classes',
            example: '&--modifier, &--large, &--primary'
        },
        {
            type: 'Context Styling',
            icon: Globe,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Style based on parent context',
            example: '.parent &, .theme-dark &'
        }
    ];

    const interactiveExamples = {
        pseudo: {
            title: 'Pseudo-classes & States',
            html: `<div class="interactive-demo">
  <button class="btn">Primary Button</button>
  <button class="btn btn--secondary">Secondary</button>
  <input class="input" placeholder="Focus me" />
  <a href="#" class="link">Hover Link</a>
</div>`,
            scss: `// Pseudo-classes with parent selector
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #3b82f6;
  color: white;
  
  // Hover state
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
  
  // Active state
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
  }
  
  // Focus state
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  // Disabled state
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  // Secondary variant
  &--secondary {
    background: #64748b;
    
    &:hover {
      background: #475569;
    }
  }
}

.input {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:invalid {
    border-color: #ef4444;
  }
}

.link {
  color: #3b82f6;
  text-decoration: none;
  position: relative;
  
  &:hover {
    color: #2563eb;
  }
  
  // Animated underline
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}`,
            css: `.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #3b82f6;
  color: white;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn--secondary {
  background: #64748b;
}

.btn--secondary:hover {
  background: #475569;
}`
        },
        bem: {
            title: 'BEM Methodology',
            html: `<div class="card">
  <div class="card__header">
    <h3 class="card__title">Standard Card</h3>
    <span class="card__badge">New</span>
  </div>
  <div class="card__body">
    <p class="card__text">This is a standard card component.</p>
    <button class="card__button">Read More</button>
  </div>
</div>

<div class="card card--featured">
  <div class="card__header">
    <h3 class="card__title">Featured Card</h3>
    <span class="card__badge card__badge--premium">Premium</span>
  </div>
  <div class="card__body">
    <p class="card__text">This is a featured card with premium styling.</p>
    <button class="card__button card__button--primary">Get Started</button>
  </div>
</div>`,
            scss: `// BEM with parent selector
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  
  // BEM Elements
  &__header {
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a202c;
  }
  
  &__badge {
    padding: 0.25rem 0.75rem;
    background: #3b82f6;
    color: white;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    
    // Badge modifier
    &--premium {
      background: linear-gradient(135deg, #f59e0b, #d97706);
    }
  }
  
  &__body {
    padding: 1.5rem;
  }
  
  &__text {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  &__button {
    padding: 0.5rem 1rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: #edf2f7;
    }
    
    // Button modifier
    &--primary {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
      
      &:hover {
        background: #2563eb;
      }
    }
  }
  
  // Card modifiers
  &--featured {
    border-color: #3b82f6;
    border-width: 2px;
    
    .card__header {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
  }
}`,
            css: `.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card__header {
  padding: 1.5rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
}

.card__badge {
  padding: 0.25rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.card__badge--premium {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.card--featured {
  border-color: #3b82f6;
  border-width: 2px;
}

.card--featured .card__header {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
}`
        },
        advanced: {
            title: 'Advanced Patterns',
            html: `<div class="theme-light">
  <div class="component">Light Theme Component</div>
</div>

<div class="theme-dark">
  <div class="component">Dark Theme Component</div>
</div>

<div class="sidebar">
  <nav class="nav">
    <a href="#" class="nav__item">Home</a>
    <a href="#" class="nav__item nav__item--active">About</a>
    <a href="#" class="nav__item">Contact</a>
  </nav>
</div>`,
            scss: `// Advanced parent selector patterns
.component {
  padding: 1rem;
  background: white;
  color: #1a202c;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  // Context-based styling (parent at end)
  .theme-dark & {
    background: #2d3748;
    color: #f7fafc;
  }
  
  .theme-light & {
    background: #f7fafc;
    color: #2d3748;
    border: 1px solid #e2e8f0;
  }
  
  // Multiple parent contexts
  .sidebar & {
    font-size: 0.875rem;
    padding: 0.75rem;
  }
  
  .main-content & {
    font-size: 1rem;
    padding: 1.5rem;
  }
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  &__item {
    padding: 0.75rem 1rem;
    color: #4a5568;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s ease;
    position: relative;
    
    &:hover {
      background: #f7fafc;
      color: #2d3748;
    }
    
    // Adjacent sibling selector
    & + & {
      margin-top: 0.125rem;
    }
    
    // Active state modifier
    &--active {
      background: #3b82f6;
      color: white;
      
      &:hover {
        background: #2563eb;
      }
      
      // Active indicator
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 60%;
        background: white;
        border-radius: 0 2px 2px 0;
      }
    }
    
    // First and last child styling
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  // When nav is in sidebar
  .sidebar & {
    padding: 0.5rem;
    
    .nav__item {
      font-size: 0.875rem;
      padding: 0.5rem 0.75rem;
    }
  }
}

// Complex selector combinations
.button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: white;
  
  // Multiple class combination
  &.primary&.large {
    padding: 1rem 2rem;
    background: #3b82f6;
    color: white;
    font-size: 1.125rem;
  }
  
  // Attribute selector combination
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  // Pseudo-class with class combination
  &:not(.outline) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}`,
            css: `.component {
  padding: 1rem;
  background: white;
  color: #1a202c;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.theme-dark .component {
  background: #2d3748;
  color: #f7fafc;
}

.theme-light .component {
  background: #f7fafc;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}

.sidebar .component {
  font-size: 0.875rem;
  padding: 0.75rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav__item {
  padding: 0.75rem 1rem;
  color: #4a5568;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
}

.nav__item:hover {
  background: #f7fafc;
  color: #2d3748;
}

.nav__item + .nav__item {
  margin-top: 0.125rem;
}

.nav__item--active {
  background: #3b82f6;
  color: white;
}

.nav__item--active:hover {
  background: #2563eb;
}

.nav__item--active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: white;
  border-radius: 0 2px 2px 0;
}`
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Hash className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Parent Selector (&) Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the powerful ampersand (&) to create dynamic selectors, BEM patterns, and context-aware styles.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Target className="w-6 h-6 animate-bounce" />
                        The Magic of & (Ampersand)
                    </CardTitle>
                    <CardDescription>
                        The & symbol is like a placeholder that gets replaced with the parent selector, enabling powerful CSS patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Hash className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Reference Parent</h3>
                            <p className="text-sm text-muted-foreground">& gets replaced with the parent selector</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Dynamic Selectors</h3>
                            <p className="text-sm text-muted-foreground">Create complex selectors dynamically</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Clean Code</h3>
                            <p className="text-sm text-muted-foreground">Organize styles logically and efficiently</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Parent Selector Patterns */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Parent Selector Patterns
                    </CardTitle>
                    <CardDescription>
                        Different ways to use the & symbol for various CSS patterns and methodologies.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {parentSelectorPatterns.map((pattern, index) => {
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
                        How & Works: Visual Guide
                    </CardTitle>
                    <CardDescription>
                        See exactly how the & symbol gets replaced in different contexts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm">
                        <pre className="text-gray-800 dark:text-white whitespace-pre-wrap">{diagramScss}</pre>
                    </div>
                    <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">✨ Key Points</h4>
                            <ul className="space-y-1 text-blue-600 dark:text-blue-400">
                                <li>• & represents the parent selector</li>
                                <li>• Can be used at start, middle, or end</li>
                                <li>• Enables complex selector patterns</li>
                            </ul>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">🎯 Common Uses</h4>
                            <ul className="space-y-1 text-green-600 dark:text-green-400">
                                <li>• Pseudo-classes (:hover, :focus)</li>
                                <li>• BEM methodology</li>
                                <li>• Context-dependent styling</li>
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
                        Interactive Parent Selector Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different parent selector patterns with live examples and compiled output.
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
                                    {key === 'pseudo' ? '&:' : key === 'bem' ? '&__' : '&+'}
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

            {/* Best Practices */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <Lightbulb className="w-6 h-6" />
                        Parent Selector Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for using the & symbol effectively and maintainably.
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
                                    <span>Use & for pseudo-classes and pseudo-elements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Perfect for BEM methodology implementation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use for context-dependent styling</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Keep selectors readable and searchable</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document complex & usage with comments</span>
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
                                    <span>Don't create overly complex selectors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Avoid deep nesting with multiple &</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't use & just to avoid writing selectors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Avoid making code hard to search/debug</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't sacrifice readability for brevity</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Advanced Parent Selector Techniques
                    </CardTitle>
                    <CardDescription>
                        Expert-level patterns and creative uses of the & symbol.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Multiple Parent References</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`.button {
  // Multiple & in one selector
  &.primary&.large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
  
  // Chaining modifiers
  &--primary&--outline {
    background: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. Parent in Middle of Selector</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`.component {
  // Parent in the middle
  .theme-dark & .content {
    color: white;
  }
  
  // Multiple contexts
  .sidebar &,
  .modal & {
    font-size: 0.875rem;
  }
  
  // Complex combinations
  .mobile & + & {
    margin-top: 0.5rem;
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Attribute and Pseudo-class Combinations</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`.input {
  // Combining attribute selectors
  &[type="email"],
  &[type="password"] {
    background-image: url('icon.svg');
  }
  
  // Complex pseudo-class combinations
  &:not(:disabled):not(:read-only):focus {
    border-color: #3b82f6;
  }
  
  // State combinations
  &:invalid:not(:focus) {
    border-color: #ef4444;
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">4. Dynamic Class Generation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Using loops with &
$colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981,
  danger: #ef4444
);

.btn {
  @each $name, $color in $colors {
    &--#{$name} {
      background: $color;
      
      &:hover {
        background: darken($color, 10%);
      }
    }
  }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Real-world Examples */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Star className="w-6 h-6" />
                        Real-world Use Cases
                    </CardTitle>
                    <CardDescription>
                        Practical examples of parent selector usage in production code.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold mb-2">🎨 Theme System</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{`.component {
  color: #1a202c;
  
  .theme-dark & { color: #f7fafc; }
  .theme-high-contrast & { color: #000; }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">📱 Responsive Components</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{`.card {
  .mobile & { padding: 1rem; }
  .tablet & { padding: 1.5rem; }
  .desktop & { padding: 2rem; }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">🔧 State Management</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{`.button {
  &:not(:disabled) {
    cursor: pointer;
    
    &:hover { transform: translateY(-1px); }
    &:active { transform: translateY(0); }
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
                        Parent Selector Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Usage</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&:hover</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&:focus</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&::before</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&.active</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">BEM Patterns</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&__element</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&--modifier</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&__item--active</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Context Styling</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">.parent &</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">& + &</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">&.class&.other</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Remember</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            The & symbol gets replaced with the exact parent selector, including all classes and pseudo-classes. 
                            Use it to create clean, maintainable, and logically organized stylesheets.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

