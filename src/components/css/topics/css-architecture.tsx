'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Building2, Target, Code, Settings, Layers, 
    CheckCircle, AlertTriangle, FileText, Folder, 
    Monitor, Smartphone, Tablet, Grid, Box,
    Zap, RefreshCw, Sun, Moon, Paintbrush, 
    TreePine, Network, Component, Puzzle,
    ArrowRight, ArrowDown, Users, Shield
} from 'lucide-react';

interface CssArchitectureProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssArchitecture({ onOpenWebPlayground }: CssArchitectureProps) {
    const [selectedMethodology, setSelectedMethodology] = useState('bem');
    const [selectedPattern, setSelectedPattern] = useState('atomic');

    // CSS Methodologies
    const cssMethodologies = [
        {
            id: 'bem',
            name: 'BEM',
            fullName: 'Block Element Modifier',
            icon: Box,
            description: 'Component-based methodology for naming CSS classes',
            difficulty: 'Easy',
            popularity: 'High',
            color: 'blue',
            example: '.card__title--large'
        },
        {
            id: 'oocss',
            name: 'OOCSS',
            fullName: 'Object-Oriented CSS',
            icon: Component,
            description: 'Separate structure from skin, container from content',
            difficulty: 'Medium',
            popularity: 'Medium',
            color: 'green',
            example: '.btn .btn--primary'
        },
        {
            id: 'smacss',
            name: 'SMACSS',
            fullName: 'Scalable & Modular Architecture',
            icon: Layers,
            description: 'Categorize CSS rules into Base, Layout, Module, State, Theme',
            difficulty: 'Medium',
            popularity: 'Medium',
            color: 'purple',
            example: '.l-header .m-nav .is-active'
        },
        {
            id: 'itcss',
            name: 'ITCSS',
            fullName: 'Inverted Triangle CSS',
            icon: TreePine,
            description: 'Layer CSS from generic to specific in an inverted triangle',
            difficulty: 'Hard',
            popularity: 'Low',
            color: 'orange',
            example: 'Settings → Tools → Generic → Elements → Objects → Components → Utilities'
        }
    ];

    // Architecture Patterns
    const architecturePatterns = [
        {
            id: 'atomic',
            name: 'Atomic Design',
            icon: Grid,
            description: 'Build interfaces from atoms to organisms',
            levels: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages']
        },
        {
            id: 'component',
            name: 'Component-Based',
            icon: Puzzle,
            description: 'Organize CSS around reusable components',
            levels: ['Base', 'Components', 'Layouts', 'Utilities']
        },
        {
            id: 'modular',
            name: 'Modular CSS',
            icon: Network,
            description: 'Self-contained, reusable CSS modules',
            levels: ['Core', 'Modules', 'Themes', 'Overrides']
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Building2 className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Architecture</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master CSS organization, methodologies, and scalable architecture patterns for maintainable stylesheets.
                </p>
            </div>

            {/* Interactive CSS Architecture Playground */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Building2 className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        Interactive CSS Architecture Playground
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        Master CSS organization, methodologies, and scalable architecture patterns with interactive examples.
                    </CardDescription>
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <Button 
                            variant={selectedMethodology === 'bem' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedMethodology('bem')}
                            className="flex items-center gap-2"
                        >
                            <Box className="w-4 h-4" />
                            BEM
                        </Button>
                        <Button 
                            variant={selectedMethodology === 'oocss' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedMethodology('oocss')}
                            className="flex items-center gap-2"
                        >
                            <Component className="w-4 h-4" />
                            OOCSS
                        </Button>
                        <Button 
                            variant={selectedMethodology === 'smacss' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedMethodology('smacss')}
                            className="flex items-center gap-2"
                        >
                            <Layers className="w-4 h-4" />
                            SMACSS
                        </Button>
                        <Button 
                            variant={selectedPattern === 'atomic' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedPattern('atomic')}
                            className="flex items-center gap-2"
                        >
                            <Grid className="w-4 h-4" />
                            Atomic Design
                        </Button>
                        <Button 
                            variant={selectedPattern === 'component' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedPattern('component')}
                            className="flex items-center gap-2"
                        >
                            <Puzzle className="w-4 h-4" />
                            Component-Based
                        </Button>
                        <Button 
                            variant={selectedPattern === 'modular' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedPattern('modular')}
                            className="flex items-center gap-2"
                        >
                            <Network className="w-4 h-4" />
                            Modular CSS
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Architecture Problems & Solutions */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    🎯 CSS Architecture Problems
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🚫 Poor Architecture</div>
                                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200">
                                            <div className="space-y-2 text-xs">
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Naming conflicts</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Specificity wars</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Code duplication</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Hard to maintain</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Chaos & Technical Debt</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">✅ Good Architecture</div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200">
                                            <div className="space-y-2 text-xs">
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Clear naming</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Predictable styles</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Reusable code</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Easy to scale</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Organized & Scalable</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🏗️ Architecture Benefits
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Good CSS architecture reduces bugs, improves team productivity, and makes code easier to understand and modify.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Layers className="w-5 h-5" />
                                    🏛️ Architecture Principles
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <FileText className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Predictable</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Rules behave as expected</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <RefreshCw className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Reusable</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Components work anywhere</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Settings className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Maintainable</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Easy to modify & extend</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Zap className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Scalable</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Grows with your project</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Architecture Benefits */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2">🏗️</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Good Architecture</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Team Collaboration
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Code Consistency
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Easy Debugging
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">💥</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Poor Architecture</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Naming Conflicts
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Specificity Wars
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Technical Debt
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Choose an architecture that fits your team size and project complexity!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CSS Methodologies */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Target className="w-5 h-5" />
                        CSS Methodologies
                    </CardTitle>
                    <CardDescription>
                        Popular naming conventions and organizational approaches for CSS architecture.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Methodologies Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {cssMethodologies.map((methodology) => (
                                <div 
                                    key={methodology.id}
                                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        selectedMethodology === methodology.id
                                            ? 'border-green-500 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedMethodology(methodology.id)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <methodology.icon className={`w-8 h-8 text-${methodology.color}-500`} />
                                        <div>
                                            <h3 className="font-bold text-lg">{methodology.name}</h3>
                                            <div className="text-xs text-gray-500">{methodology.fullName}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        {methodology.description}
                                    </p>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="secondary" className={`bg-${methodology.color}-100 text-${methodology.color}-800`}>
                                            {methodology.difficulty}
                                        </Badge>
                                        <Badge variant="outline">
                                            {methodology.popularity} Popularity
                                        </Badge>
                                    </div>
                                    <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                        {methodology.example}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* BEM Deep Dive */}
                        {selectedMethodology === 'bem' && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200">
                                <h4 className="font-semibold mb-4 text-blue-700 dark:text-blue-300">🧱 BEM Methodology Deep Dive</h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🧱</div>
                                        <div className="font-semibold text-blue-700 dark:text-blue-300">Block</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Standalone component</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-xs">
                                            .card
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🔧</div>
                                        <div className="font-semibold text-blue-700 dark:text-blue-300">Element</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Part of a block</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-xs">
                                            .card__title
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">⚡</div>
                                        <div className="font-semibold text-blue-700 dark:text-blue-300">Modifier</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Variation or state</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-xs">
                                            .card--large
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Architecture Patterns */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Grid className="w-5 h-5" />
                        Architecture Patterns
                    </CardTitle>
                    <CardDescription>
                        Structural approaches to organizing CSS code and components.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Atomic Design Visualization */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Grid className="w-5 h-5" />
                                ⚛️ Atomic Design Pattern
                            </h4>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                                <div className="grid grid-cols-5 gap-4 text-center">
                                    <div>
                                        <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                                        <div className="font-semibold text-sm">Atoms</div>
                                        <div className="text-xs text-gray-600">Button, Input</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="flex gap-1 justify-center mb-2">
                                            <div className="w-3 h-3 bg-orange-500 rounded"></div>
                                            <div className="w-3 h-3 bg-orange-500 rounded"></div>
                                        </div>
                                        <div className="font-semibold text-sm">Molecules</div>
                                        <div className="text-xs text-gray-600">Search Form</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="w-12 h-8 bg-green-500 rounded mx-auto mb-2 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded"></div>
                                        </div>
                                        <div className="font-semibold text-sm">Organisms</div>
                                        <div className="text-xs text-gray-600">Header, Footer</div>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <ArrowDown className="w-4 h-4 text-gray-400 mx-auto mb-2" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="w-full h-12 bg-blue-500 rounded mb-2"></div>
                                            <div className="font-semibold text-sm">Templates</div>
                                            <div className="text-xs text-gray-600">Page wireframes</div>
                                        </div>
                                        <div>
                                            <div className="w-full h-12 bg-purple-500 rounded mb-2"></div>
                                            <div className="font-semibold text-sm">Pages</div>
                                            <div className="text-xs text-gray-600">Final instances</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* File Organization */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Folder className="w-5 h-5" />
                                📁 File Organization Structure
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="text-sm font-medium mb-2">ITCSS Structure</div>
                                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                                        <div className="text-gray-400">scss/</div>
                                        <div className="text-blue-400 ml-2">├── 01-settings/</div>
                                        <div className="text-green-400 ml-2">├── 02-tools/</div>
                                        <div className="text-yellow-400 ml-2">├── 03-generic/</div>
                                        <div className="text-orange-400 ml-2">├── 04-elements/</div>
                                        <div className="text-red-400 ml-2">├── 05-objects/</div>
                                        <div className="text-purple-400 ml-2">├── 06-components/</div>
                                        <div className="text-pink-400 ml-2">└── 07-utilities/</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2">Component-Based Structure</div>
                                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                                        <div className="text-gray-400">css/</div>
                                        <div className="text-blue-400 ml-2">├── base/</div>
                                        <div className="text-green-400 ml-2">├── components/</div>
                                        <div className="text-yellow-400 ml-4">│   ├── button.css</div>
                                        <div className="text-yellow-400 ml-4">│   ├── card.css</div>
                                        <div className="text-yellow-400 ml-4">│   └── modal.css</div>
                                        <div className="text-orange-400 ml-2">├── layout/</div>
                                        <div className="text-red-400 ml-2">└── utilities/</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Examples */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Code className="w-5 h-5" />
                        Live Architecture Examples
                    </CardTitle>
                    <CardDescription>
                        See different CSS architectures in action with real code examples.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* BEM Example */}
                        <div>
                            <h4 className="font-semibold mb-4 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Box className="w-5 h-5" />
                                🧱 BEM in Action
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                        <div className="card card--featured">
                                            <div className="card__header">
                                                <h3 className="card__title card__title--large">Featured Article</h3>
                                                <div className="card__meta">
                                                    <span className="card__date">Nov 22, 2024</span>
                                                    <span className="card__author">John Doe</span>
                                                </div>
                                            </div>
                                            <div className="card__content">
                                                <p className="card__excerpt">This is a sample article excerpt using BEM methodology...</p>
                                                <button className="card__button card__button--primary">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* BEM CSS */</div>
                                        <div><span className="text-blue-400">.card</span> {'{'}</div>
                                        <div>  <span className="text-green-400">border</span>: <span className="text-yellow-400">1px solid #ddd</span>;</div>
                                        <div>  <span className="text-green-400">border-radius</span>: <span className="text-yellow-400">8px</span>;</div>
                                        <div>{'}'}</div>
                                        <br />
                                        <div><span className="text-blue-400">.card--featured</span> {'{'}</div>
                                        <div>  <span className="text-green-400">border-color</span>: <span className="text-yellow-400">#007bff</span>;</div>
                                        <div>{'}'}</div>
                                        <br />
                                        <div><span className="text-blue-400">.card__title</span> {'{'}</div>
                                        <div>  <span className="text-green-400">font-size</span>: <span className="text-yellow-400">1.2rem</span>;</div>
                                        <div>{'}'}</div>
                                        <br />
                                        <div><span className="text-blue-400">.card__title--large</span> {'{'}</div>
                                        <div>  <span className="text-green-400">font-size</span>: <span className="text-yellow-400">1.5rem</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Component Architecture Example */}
                        <div>
                            <h4 className="font-semibold mb-4 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Component className="w-5 h-5" />
                                🧩 Component Architecture
                            </h4>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="text-sm mb-4 font-medium">Modular Button System</div>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <button className="btn btn-primary">Primary</button>
                                    <button className="btn btn-secondary">Secondary</button>
                                    <button className="btn btn-success">Success</button>
                                    <button className="btn btn-danger">Danger</button>
                                    <button className="btn btn-primary btn-lg">Large</button>
                                    <button className="btn btn-primary btn-sm">Small</button>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-xs">
                                    <div>/* Base component */</div>
                                    <div>.btn {'{ padding: 0.5rem 1rem; border: none; border-radius: 4px; }'}</div>
                                    <br />
                                    <div>/* Variants */</div>
                                    <div>.btn-primary {'{ background: #007bff; color: white; }'}</div>
                                    <div>.btn-secondary {'{ background: #6c757d; color: white; }'}</div>
                                    <br />
                                    <div>/* Sizes */</div>
                                    <div>.btn-lg {'{ padding: 0.75rem 1.5rem; font-size: 1.125rem; }'}</div>
                                    <div>.btn-sm {'{ padding: 0.25rem 0.5rem; font-size: 0.875rem; }'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Play className="w-5 h-5" />
                        Interactive Playground
                    </CardTitle>
                    <CardDescription>
                        Experiment with different CSS architecture patterns and methodologies in a live, interactive environment.
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
    <title>CSS Architecture Playground</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>CSS Architecture Playground</h1>
            <nav class="nav">
                <button onclick="switchArchitecture('bem')" class="nav__button nav__button--active" id="bem-btn">BEM</button>
                <button onclick="switchArchitecture('oocss')" class="nav__button" id="oocss-btn">OOCSS</button>
                <button onclick="switchArchitecture('smacss')" class="nav__button" id="smacss-btn">SMACSS</button>
            </nav>
        </header>
        
        <main class="main">
            <section class="demo-section" id="bem-demo">
                <h2>BEM Methodology</h2>
                <div class="card card--featured">
                    <div class="card__header">
                        <h3 class="card__title card__title--large">BEM Card Example</h3>
                        <div class="card__meta">
                            <span class="card__date">Block__Element--Modifier</span>
                        </div>
                    </div>
                    <div class="card__content">
                        <p class="card__text">This card demonstrates BEM naming convention with clear block, element, and modifier structure.</p>
                        <button class="card__button card__button--primary">Action Button</button>
                    </div>
                </div>
            </section>
            
            <section class="demo-section hidden" id="oocss-demo">
                <h2>OOCSS Methodology</h2>
                <div class="media featured">
                    <div class="media-object">
                        <div class="avatar avatar-lg"></div>
                    </div>
                    <div class="media-body">
                        <h3 class="heading heading-lg">OOCSS Example</h3>
                        <p class="text">Object-Oriented CSS separates structure from skin and container from content.</p>
                        <button class="btn btn-primary btn-lg">Primary Action</button>
                    </div>
                </div>
            </section>
            
            <section class="demo-section hidden" id="smacss-demo">
                <h2>SMACSS Methodology</h2>
                <div class="l-card m-article is-featured">
                    <div class="l-card-header">
                        <h3 class="m-article-title">SMACSS Example</h3>
                        <div class="m-article-meta">
                            <span class="m-article-date">Layout-Module-State</span>
                        </div>
                    </div>
                    <div class="l-card-body">
                        <p class="m-article-content">SMACSS categorizes CSS into Base, Layout, Module, State, and Theme.</p>
                        <button class="m-button is-primary">Module Button</button>
                    </div>
                </div>
            </section>
        </main>
        
        <aside class="sidebar">
            <div class="info-panel">
                <h3>Architecture Info</h3>
                <div id="architecture-info">
                    <p>Select an architecture above to see its implementation and naming conventions.</p>
                </div>
            </div>
        </aside>
    </div>
</body>
</html>`,
                            `/* Base Styles */
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

.main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

.demo-section {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.hidden {
    display: none;
}

/* BEM Architecture */
.nav {
    display: flex;
    gap: 1rem;
}

.nav__button {
    padding: 0.75rem 1.5rem;
    border: 2px solid #dee2e6;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav__button--active {
    background: #007bff;
    color: white;
    border-color: #007bff;
}

.nav__button:hover {
    border-color: #007bff;
}

.card {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
}

.card--featured {
    border-color: #007bff;
    box-shadow: 0 4px 12px rgba(0,123,255,0.15);
}

.card__header {
    padding: 1.5rem;
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}

.card__title {
    margin: 0 0 0.5rem 0;
    color: #333;
}

.card__title--large {
    font-size: 1.5rem;
}

.card__meta {
    font-size: 0.875rem;
    color: #6c757d;
}

.card__content {
    padding: 1.5rem;
}

.card__text {
    margin: 0 0 1rem 0;
    color: #666;
}

.card__button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.card__button--primary {
    background: #007bff;
    color: white;
}

.card__button--primary:hover {
    background: #0056b3;
}

/* OOCSS Architecture */
.media {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid #dee2e6;
    border-radius: 8px;
}

.media.featured {
    border-color: #28a745;
    background: #f8fff9;
}

.media-object {
    flex-shrink: 0;
}

.media-body {
    flex: 1;
}

.avatar {
    width: 48px;
    height: 48px;
    background: #6c757d;
    border-radius: 50%;
}

.avatar-lg {
    width: 64px;
    height: 64px;
}

.heading {
    margin: 0 0 0.5rem 0;
}

.heading-lg {
    font-size: 1.5rem;
}

.text {
    margin: 0 0 1rem 0;
    color: #666;
}

.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #28a745;
    color: white;
}

.btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
}

/* SMACSS Architecture */
/* Layout */
.l-card {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
}

.l-card-header {
    padding: 1.5rem;
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}

.l-card-body {
    padding: 1.5rem;
}

/* Modules */
.m-article {
    /* Article module styles */
}

.m-article.is-featured {
    border-color: #ffc107;
    background: #fffbf0;
}

.m-article-title {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 1.5rem;
}

.m-article-meta {
    font-size: 0.875rem;
    color: #6c757d;
}

.m-article-content {
    margin: 0 0 1rem 0;
    color: #666;
}

.m-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* States */
.is-primary {
    background: #ffc107;
    color: #212529;
}

.is-featured {
    /* Featured state styles applied above */
}

.sidebar {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    height: fit-content;
}

.info-panel h3 {
    margin: 0 0 1rem 0;
    color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main {
        grid-template-columns: 1fr;
    }
    
    .nav {
        flex-direction: column;
    }
    
    .media {
        flex-direction: column;
    }
}`,
                            `// CSS Architecture Playground JavaScript
let currentArchitecture = 'bem';

const architectureInfo = {
    bem: {
        title: 'BEM (Block Element Modifier)',
        description: 'A methodology that helps create reusable components and code sharing in front-end development.',
        principles: [
            'Block: Standalone entity that is meaningful on its own',
            'Element: A part of a block that has no standalone meaning',
            'Modifier: A flag on a block or element for appearance or behavior'
        ],
        naming: 'block__element--modifier',
        example: '.card__title--large'
    },
    oocss: {
        title: 'OOCSS (Object-Oriented CSS)',
        description: 'An approach for writing CSS that encourages code reuse and maintainable stylesheets.',
        principles: [
            'Separate structure and skin',
            'Separate container and content',
            'Create reusable objects',
            'Use classes instead of IDs'
        ],
        naming: 'object-name modifier',
        example: '.media .media-object'
    },
    smacss: {
        title: 'SMACSS (Scalable & Modular Architecture)',
        description: 'A style guide that categorizes CSS rules to make code more organized and maintainable.',
        principles: [
            'Base: Default styles for HTML elements',
            'Layout: Major containing elements (l-)',
            'Module: Reusable components (m-)',
            'State: How modules look in different states (is-)',
            'Theme: Color schemes and typography'
        ],
        naming: 'category-name',
        example: '.l-header .m-nav .is-active'
    }
};

function switchArchitecture(architecture) {
    // Hide all demos
    document.querySelectorAll('.demo-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected demo
    document.getElementById(architecture + '-demo').classList.remove('hidden');
    
    // Update button states
    document.querySelectorAll('.nav__button').forEach(btn => {
        btn.classList.remove('nav__button--active');
    });
    document.getElementById(architecture + '-btn').classList.add('nav__button--active');
    
    // Update info panel
    updateInfoPanel(architecture);
    
    currentArchitecture = architecture;
}

function updateInfoPanel(architecture) {
    const info = architectureInfo[architecture];
    const infoPanel = document.getElementById('architecture-info');
    
    infoPanel.innerHTML = \`
        <h4>\${info.title}</h4>
        <p>\${info.description}</p>
        <h5>Key Principles:</h5>
        <ul>
            \${info.principles.map(principle => \`<li>\${principle}</li>\`).join('')}
        </ul>
        <h5>Naming Convention:</h5>
        <code>\${info.naming}</code>
        <h5>Example:</h5>
        <code>\${info.example}</code>
    \`;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateInfoPanel('bem');
    console.log('CSS Architecture Playground loaded!');
});`
                        )}
                        className="w-full"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Open Architecture Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
