'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Star, Target, Code, Settings, CheckCircle, 
    AlertTriangle, FileText, Layers, RefreshCw, Sun, 
    Moon, Paintbrush, TreePine, Network, Component, 
    Puzzle, ArrowRight, ArrowDown, Users, Shield,
    Zap, Activity, Eye, MousePointer, Monitor, 
    Smartphone, Tablet, Grid, Box, Compass, Wrench,
    BookOpen, Award, TrendingUp, Clock, Lightbulb
} from 'lucide-react';

interface CssBestPracticesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssBestPractices({ onOpenWebPlayground }: CssBestPracticesProps) {
    const [selectedCategory, setSelectedCategory] = useState('naming');
    const [selectedPrinciple, setSelectedPrinciple] = useState('maintainable');

    // Best Practice Categories
    const practiceCategories = [
        {
            id: 'naming',
            name: 'Naming Conventions',
            icon: FileText,
            description: 'Clear, consistent, and meaningful CSS class names',
            importance: 'Critical',
            difficulty: 'Easy',
            color: 'blue'
        },
        {
            id: 'organization',
            name: 'Code Organization',
            icon: Layers,
            description: 'Structure CSS for maintainability and scalability',
            importance: 'High',
            difficulty: 'Medium',
            color: 'green'
        },
        {
            id: 'performance',
            name: 'Performance',
            icon: Zap,
            description: 'Optimize CSS for speed and efficiency',
            importance: 'High',
            difficulty: 'Medium',
            color: 'orange'
        },
        {
            id: 'accessibility',
            name: 'Accessibility',
            icon: Eye,
            description: 'Make CSS inclusive for all users',
            importance: 'Critical',
            difficulty: 'Medium',
            color: 'purple'
        }
    ];

    // Core Principles
    const corePrinciples = [
        {
            id: 'maintainable',
            name: 'Maintainable',
            icon: Wrench,
            description: 'Easy to update and modify over time',
            examples: ['Clear naming', 'Modular structure', 'Documentation']
        },
        {
            id: 'scalable',
            name: 'Scalable',
            icon: TrendingUp,
            description: 'Grows with your project without breaking',
            examples: ['Consistent patterns', 'Reusable components', 'Flexible architecture']
        },
        {
            id: 'performant',
            name: 'Performant',
            icon: Zap,
            description: 'Fast loading and efficient rendering',
            examples: ['Minimal CSS', 'Efficient selectors', 'Critical CSS']
        },
        {
            id: 'accessible',
            name: 'Accessible',
            icon: Users,
            description: 'Works for users with disabilities',
            examples: ['Color contrast', 'Focus indicators', 'Screen reader support']
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Star className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Best Practices</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master professional CSS development with proven best practices, patterns, and techniques.
                </p>
            </div>

            {/* Interactive CSS Best Practices Playground */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Star className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        Interactive CSS Best Practices Playground
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        Master professional CSS development with proven best practices, interactive examples, and practical techniques.
                    </CardDescription>
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <Button 
                            variant={selectedCategory === 'naming' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedCategory('naming')}
                            className="flex items-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            Naming Conventions
                        </Button>
                        <Button 
                            variant={selectedCategory === 'organization' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedCategory('organization')}
                            className="flex items-center gap-2"
                        >
                            <Layers className="w-4 h-4" />
                            Code Organization
                        </Button>
                        <Button 
                            variant={selectedCategory === 'performance' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedCategory('performance')}
                            className="flex items-center gap-2"
                        >
                            <Zap className="w-4 h-4" />
                            Performance
                        </Button>
                        <Button 
                            variant={selectedCategory === 'accessibility' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedCategory('accessibility')}
                            className="flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" />
                            Accessibility
                        </Button>
                        <Button 
                            variant={selectedPrinciple === 'maintainable' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedPrinciple('maintainable')}
                            className="flex items-center gap-2"
                        >
                            <Wrench className="w-4 h-4" />
                            Maintainable
                        </Button>
                        <Button 
                            variant={selectedPrinciple === 'scalable' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedPrinciple('scalable')}
                            className="flex items-center gap-2"
                        >
                            <TrendingUp className="w-4 h-4" />
                            Scalable
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Core Principles */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    🏆 The Four Pillars of Great CSS
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    {corePrinciples.map((principle) => (
                                        <div 
                                            key={principle.id}
                                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                                                selectedPrinciple === principle.id
                                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-200 bg-gray-50 dark:bg-gray-700/50'
                                            }`}
                                            onClick={() => setSelectedPrinciple(principle.id)}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <principle.icon className="w-5 h-5 text-blue-500" />
                                                <div className="font-semibold text-blue-700 dark:text-blue-300">{principle.name}</div>
                                            </div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                                {principle.description}
                                            </div>
                                            <div className="space-y-1">
                                                {principle.examples.map((example, index) => (
                                                    <div key={index} className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                                                        <CheckCircle className="w-3 h-3" />
                                                        {example}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50 mt-4">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        💡 Why Best Practices Matter
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Following best practices reduces bugs, improves team collaboration, and makes your CSS future-proof and professional.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    🎯 Good vs Bad CSS Comparison
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">❌ Bad CSS</div>
                                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200">
                                            <div className="space-y-2 text-xs font-mono">
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">.redButton123</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">div div div p</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">!important everywhere</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">No comments</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">🚫 Hard to maintain</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">✅ Good CSS</div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200">
                                            <div className="space-y-2 text-xs font-mono">
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">.btn--primary</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">.article__content</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Logical specificity</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Well documented</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Professional & scalable</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Visualization */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2">🎯</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Best Practices Benefits</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <Clock className="w-4 h-4" />
                                            Faster Development
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                                            <Users className="w-4 h-4" />
                                            Better Collaboration
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <Shield className="w-4 h-4" />
                                            Fewer Bugs
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
                                            <Zap className="w-4 h-4" />
                                            Better Performance
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Start with best practices from day one - it's easier than refactoring later!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practice Categories */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <BookOpen className="w-5 h-5" />
                        Essential Best Practice Categories
                    </CardTitle>
                    <CardDescription>
                        Core areas every CSS developer should master for professional development.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Categories Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {practiceCategories.map((category) => (
                                <div 
                                    key={category.id}
                                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        selectedCategory === category.id
                                            ? 'border-green-500 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <category.icon className={`w-8 h-8 text-${category.color}-500`} />
                                        <div>
                                            <h3 className="font-bold text-lg">{category.name}</h3>
                                            <div className="flex gap-2">
                                                <Badge variant="secondary" className={`bg-${category.color}-100 text-${category.color}-800`}>
                                                    {category.importance}
                                                </Badge>
                                                <Badge variant="outline">
                                                    {category.difficulty}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {category.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Naming Conventions Deep Dive */}
                        {selectedCategory === 'naming' && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200">
                                <h4 className="font-semibold mb-4 text-blue-700 dark:text-blue-300">📝 Naming Convention Best Practices</h4>
                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-sm font-medium mb-2 text-green-600">✅ Good Examples</div>
                                            <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs space-y-1">
                                                <div className="text-green-600">.btn--primary</div>
                                                <div className="text-green-600">.card__header</div>
                                                <div className="text-green-600">.nav-item--active</div>
                                                <div className="text-green-600">.form-input--error</div>
                                                <div className="text-green-600">.sidebar-menu</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-2 text-red-600">❌ Bad Examples</div>
                                            <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs space-y-1">
                                                <div className="text-red-600">.redButton</div>
                                                <div className="text-red-600">.div1</div>
                                                <div className="text-red-600">.myClass123</div>
                                                <div className="text-red-600">.bigText</div>
                                                <div className="text-red-600">.leftSide</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-4 rounded-lg">
                                        <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                                            🎯 Naming Rules
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                            <div>• Use descriptive, semantic names</div>
                                            <div>• Avoid presentational names (red, big, left)</div>
                                            <div>• Use consistent naming patterns (BEM, kebab-case)</div>
                                            <div>• Keep names readable and meaningful</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Code Organization */}
                        {selectedCategory === 'organization' && (
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200">
                                <h4 className="font-semibold mb-4 text-green-700 dark:text-green-300">🗂️ Code Organization Structure</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-sm font-medium mb-2">Recommended File Structure</div>
                                        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                                            <div className="text-gray-400">styles/</div>
                                            <div className="text-blue-400 ml-2">├── base/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── reset.css</div>
                                            <div className="text-yellow-400 ml-4">│   ├── typography.css</div>
                                            <div className="text-yellow-400 ml-4">│   └── variables.css</div>
                                            <div className="text-green-400 ml-2">├── components/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── buttons.css</div>
                                            <div className="text-yellow-400 ml-4">│   ├── cards.css</div>
                                            <div className="text-yellow-400 ml-4">│   └── forms.css</div>
                                            <div className="text-orange-400 ml-2">├── layout/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── header.css</div>
                                            <div className="text-yellow-400 ml-4">│   ├── footer.css</div>
                                            <div className="text-yellow-400 ml-4">│   └── grid.css</div>
                                            <div className="text-red-400 ml-2">└── utilities/</div>
                                            <div className="text-yellow-400 ml-4">    ├── spacing.css</div>
                                            <div className="text-yellow-400 ml-4">    └── helpers.css</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                                            <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Organization Benefits</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                                <div>• Easy to find and modify styles</div>
                                                <div>• Better team collaboration</div>
                                                <div>• Reduced code duplication</div>
                                                <div>• Logical separation of concerns</div>
                                            </div>
                                        </div>
                                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                                            <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">CSS Order</div>
                                            <div className="text-xs text-green-600 dark:text-green-400 space-y-1">
                                                <div>1. Variables & Custom Properties</div>
                                                <div>2. Base & Reset Styles</div>
                                                <div>3. Layout & Grid Systems</div>
                                                <div>4. Components & Modules</div>
                                                <div>5. Utilities & Helpers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Performance Best Practices */}
            {selectedCategory === 'performance' && (
                <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                            <Zap className="w-5 h-5" />
                            Performance Best Practices
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">⚡ CSS Performance Tips</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-sm">Minimize CSS Size</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400">Remove unused styles, minify files</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-sm">Efficient Selectors</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400">Avoid deep nesting, use classes</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-sm">Critical CSS</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400">Inline above-the-fold styles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">🚫 Performance Killers</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-sm">Complex Selectors</div>
                                            <div className="text-xs text-red-600 dark:text-red-400 font-mono">div {'>'} ul {'>'} li {'>'} a:hover</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-sm">Excessive !important</div>
                                            <div className="text-xs text-red-600 dark:text-red-400">Creates specificity wars</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                                        <div>
                                            <div className="font-medium text-sm">Large CSS Files</div>
                                            <div className="text-xs text-red-600 dark:text-red-400">Blocks page rendering</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Interactive Playground */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Play className="w-5 h-5" />
                        Interactive Playground
                    </CardTitle>
                    <CardDescription>
                        Practice and compare good vs bad CSS practices with interactive examples in a live, interactive environment.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <Button 
                        onClick={() => onOpenWebPlayground(
                            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Best Practices Playground</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>CSS Best Practices Lab</h1>
            <nav class="practice-nav">
                <button onclick="showPractice('naming')" class="nav-btn active" id="naming-btn">Naming</button>
                <button onclick="showPractice('organization')" class="nav-btn" id="organization-btn">Organization</button>
                <button onclick="showPractice('performance')" class="nav-btn" id="performance-btn">Performance</button>
                <button onclick="showPractice('accessibility')" class="nav-btn" id="accessibility-btn">Accessibility</button>
            </nav>
        </header>
        
        <main class="main-content">
            <section class="practice-section" id="naming-practice">
                <h2>Naming Conventions</h2>
                <div class="comparison-grid">
                    <div class="bad-example">
                        <h3>❌ Bad Naming</h3>
                        <div class="example-card">
                            <button class="redButton">Click Me</button>
                            <div class="bigText">Important Text</div>
                            <div class="leftSide">Sidebar Content</div>
                        </div>
                        <div class="code-snippet">
                            <pre>.redButton { background: red; }
.bigText { font-size: 24px; }
.leftSide { float: left; }</pre>
                        </div>
                    </div>
                    <div class="good-example">
                        <h3>✅ Good Naming</h3>
                        <div class="example-card">
                            <button class="btn btn--primary">Click Me</button>
                            <div class="content__title">Important Text</div>
                            <div class="sidebar">Sidebar Content</div>
                        </div>
                        <div class="code-snippet">
                            <pre>.btn--primary { background: var(--primary-color); }
.content__title { font-size: var(--title-size); }
.sidebar { /* layout styles */ }</pre>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="practice-section hidden" id="organization-practice">
                <h2>Code Organization</h2>
                <div class="file-structure">
                    <h3>📁 Organized CSS Structure</h3>
                    <div class="folder-tree">
                        <div class="folder">📁 styles/</div>
                        <div class="folder indent-1">📁 base/ - Reset, typography, variables</div>
                        <div class="folder indent-1">📁 components/ - Reusable UI components</div>
                        <div class="folder indent-1">📁 layout/ - Page structure, grid</div>
                        <div class="folder indent-1">📁 utilities/ - Helper classes</div>
                    </div>
                </div>
            </section>
            
            <section class="practice-section hidden" id="performance-practice">
                <h2>Performance Optimization</h2>
                <div class="performance-demo">
                    <div class="metric-card">
                        <h3>CSS File Size</h3>
                        <div class="metric-comparison">
                            <div class="bad-metric">❌ Unoptimized: 150KB</div>
                            <div class="good-metric">✅ Optimized: 45KB</div>
                        </div>
                    </div>
                    <div class="selector-demo">
                        <h3>Selector Efficiency</h3>
                        <div class="selector-comparison">
                            <div class="bad-selector">❌ div > ul > li > a:hover</div>
                            <div class="good-selector">✅ .nav-link:hover</div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="practice-section hidden" id="accessibility-practice">
                <h2>Accessibility Best Practices</h2>
                <div class="a11y-examples">
                    <div class="focus-demo">
                        <h3>Focus Indicators</h3>
                        <button class="btn-no-focus">No Focus Style</button>
                        <button class="btn-good-focus">Good Focus Style</button>
                    </div>
                    <div class="contrast-demo">
                        <h3>Color Contrast</h3>
                        <div class="low-contrast">Low Contrast Text</div>
                        <div class="high-contrast">High Contrast Text</div>
                    </div>
                </div>
            </section>
        </main>
        
        <aside class="info-panel">
            <h3>Practice Tips</h3>
            <div id="practice-info">
                <p>Select a practice area to see examples and learn best practices.</p>
            </div>
        </aside>
    </div>
</body>
</html>`,
                            `/* CSS Best Practices Playground Styles */
* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 0;
    background: #f8f9fa;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.header {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.header h1 {
    margin: 0 0 1rem 0;
    color: #333;
}

.practice-nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid #007bff;
    background: white;
    color: #007bff;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-btn:hover,
.nav-btn.active {
    background: #007bff;
    color: white;
}

.main-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

.practice-section {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.hidden {
    display: none;
}

/* Naming Practice Styles */
.comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
}

.bad-example,
.good-example {
    padding: 1rem;
    border-radius: 8px;
}

.bad-example {
    background: #fff5f5;
    border: 2px solid #fed7d7;
}

.good-example {
    background: #f0fff4;
    border: 2px solid #c6f6d5;
}

.example-card {
    margin: 1rem 0;
    padding: 1rem;
    background: white;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
}

/* Bad naming examples */
.redButton {
    background: red;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.bigText {
    font-size: 24px;
    font-weight: bold;
    margin: 1rem 0;
}

.leftSide {
    float: left;
    width: 200px;
    background: #f0f0f0;
    padding: 1rem;
    margin-right: 1rem;
}

/* Good naming examples */
.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn--primary {
    background: #007bff;
    color: white;
}

.btn--primary:hover {
    background: #0056b3;
}

.content__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    color: #333;
}

.sidebar {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 6px;
    border-left: 4px solid #007bff;
}

.code-snippet {
    background: #2d3748;
    color: #e2e8f0;
    padding: 1rem;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    margin-top: 1rem;
    overflow-x: auto;
}

/* Organization Practice Styles */
.file-structure {
    margin-top: 1rem;
}

.folder-tree {
    background: #2d3748;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
}

.folder {
    margin: 0.5rem 0;
    padding: 0.25rem 0;
}

.indent-1 {
    margin-left: 2rem;
    color: #a0aec0;
}

/* Performance Practice Styles */
.performance-demo {
    margin-top: 1rem;
}

.metric-card {
    background: #f7fafc;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.metric-comparison {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
}

.bad-metric {
    color: #e53e3e;
    font-weight: 600;
}

.good-metric {
    color: #38a169;
    font-weight: 600;
}

.selector-demo {
    background: #f7fafc;
    padding: 1.5rem;
    border-radius: 8px;
}

.selector-comparison {
    margin-top: 1rem;
}

.bad-selector,
.good-selector {
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
}

.bad-selector {
    background: #fed7d7;
    color: #c53030;
}

.good-selector {
    background: #c6f6d5;
    color: #2f855a;
}

/* Accessibility Practice Styles */
.a11y-examples {
    margin-top: 1rem;
}

.focus-demo,
.contrast-demo {
    background: #f7fafc;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.btn-no-focus {
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 1rem;
}

.btn-no-focus:focus {
    outline: none; /* Bad practice */
}

.btn-good-focus {
    padding: 0.75rem 1.5rem;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-good-focus:focus {
    outline: 3px solid #ffc107;
    outline-offset: 2px;
}

.low-contrast {
    color: #ccc;
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.high-contrast {
    color: #333;
    background: #fff;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.info-panel {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    height: fit-content;
    position: sticky;
    top: 2rem;
}

.info-panel h3 {
    margin: 0 0 1rem 0;
    color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .practice-nav {
        flex-direction: column;
    }
    
    .metric-comparison {
        flex-direction: column;
        gap: 1rem;
    }
}`,
                            `// CSS Best Practices Playground JavaScript
let currentPractice = 'naming';

const practiceInfo = {
    naming: {
        title: 'Naming Conventions',
        tips: [
            'Use semantic, descriptive names',
            'Avoid presentational names (red, big, left)',
            'Follow consistent patterns (BEM, kebab-case)',
            'Make names readable and meaningful'
        ]
    },
    organization: {
        title: 'Code Organization',
        tips: [
            'Group related styles together',
            'Use consistent file structure',
            'Separate concerns (base, components, utilities)',
            'Comment your code sections'
        ]
    },
    performance: {
        title: 'Performance Optimization',
        tips: [
            'Minimize CSS file size',
            'Use efficient selectors',
            'Avoid deep nesting',
            'Implement critical CSS'
        ]
    },
    accessibility: {
        title: 'Accessibility Best Practices',
        tips: [
            'Ensure sufficient color contrast',
            'Provide focus indicators',
            'Use semantic HTML with CSS',
            'Test with screen readers'
        ]
    }
};

function showPractice(practice) {
    // Hide all practice sections
    document.querySelectorAll('.practice-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected practice
    document.getElementById(practice + '-practice').classList.remove('hidden');
    
    // Update button states
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(practice + '-btn').classList.add('active');
    
    // Update info panel
    updateInfoPanel(practice);
    
    currentPractice = practice;
}

function updateInfoPanel(practice) {
    const info = practiceInfo[practice];
    const infoPanel = document.getElementById('practice-info');
    
    infoPanel.innerHTML = \`
        <h4>\${info.title}</h4>
        <h5>Key Tips:</h5>
        <ul>
            \${info.tips.map(tip => \`<li>\${tip}</li>\`).join('')}
        </ul>
        <div style="margin-top: 1rem; padding: 1rem; background: #e3f2fd; border-radius: 6px; font-size: 0.875rem;">
            💡 <strong>Pro Tip:</strong> Practice these techniques in your daily CSS development to build good habits!
        </div>
    \`;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateInfoPanel('naming');
    console.log('CSS Best Practices Playground loaded!');
    console.log('Explore different practice areas to learn professional CSS techniques.');
});`
                        )}
                        className="w-full"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Open Best Practices Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
