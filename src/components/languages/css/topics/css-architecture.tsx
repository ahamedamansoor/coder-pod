'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { InteractivePlayground } from '@/components/shared';
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
    // Removed state - pills are now informational only, not interactive

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
            example: 'Settings -> Tools -> Generic -> Elements -> Objects -> Components -> Utilities'
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
            {/* PAGE HEADER */}
            <PageHeader
                icon={Building2}
                category="CSS · Architecture"
                title="CSS Architecture"
                description="Master CSS organization, methodologies, and scalable architecture patterns for maintainable stylesheets"
                colorTheme="blue"
            />

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
                    
                    {/* CSS Architecture Methodologies - Informational Pills */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium w-full mb-2">
                            CSS Architecture Methodologies:
                        </div>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700"
                        >
                            <Box className="w-3.5 h-3.5" />
                            BEM
                        </Badge>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700"
                        >
                            <Component className="w-3.5 h-3.5" />
                            OOCSS
                        </Badge>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700"
                        >
                            <Layers className="w-3.5 h-3.5" />
                            SMACSS
                        </Badge>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-700"
                        >
                            <TreePine className="w-3.5 h-3.5" />
                            ITCSS
                        </Badge>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700"
                        >
                            <Grid className="w-3.5 h-3.5" />
                            Atomic Design
                        </Badge>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border border-pink-300 dark:border-pink-700"
                        >
                            <Puzzle className="w-3.5 h-3.5" />
                            Component-Based
                        </Badge>
                        <Badge 
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700"
                        >
                            <Network className="w-3.5 h-3.5" />
                            Modular CSS
                        </Badge>
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
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 hover:border-gray-300"
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
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200">
                            <h4 className="font-semibold mb-4 text-blue-700 dark:text-blue-300">🧱 BEM Methodology Deep Dive</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                                BEM (Block Element Modifier) enforces a consistent naming structure that keeps CSS predictable: start with a block name for a self-contained component, denote nested elements with double underscores, and add modifiers with double hyphens for variants or states.
                            </p>
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

            {/* INTERACTIVE PLAYGROUND */}
            {onOpenWebPlayground && (
                <InteractivePlayground
                    title="🏗️ Try CSS Architecture"
                    description="Experiment with BEM, OOCSS, SMACSS, and other methodologies in a live playground"
                    features={[
                        'BEM Methodology',
                        'OOCSS Patterns',
                        'SMACSS Structure',
                        'Live Preview'
                    ]}
                    buttonText="Open Architecture Playground"
                    onLaunchPlayground={onOpenWebPlayground}
                    playgroundData={{
                        html: `<div class="architecture-playground">
  <!-- Header with Methodology Switcher -->
  <header class="arch-header">
    <h1 class="arch-header__title">🏗️ CSS Architecture Playground</h1>
    <p class="arch-header__subtitle">Explore BEM, OOCSS, and SMACSS methodologies</p>
    
    <nav class="arch-nav">
      <button onclick="switchArchitecture('bem')" class="arch-nav__btn arch-nav__btn--active" id="bem-btn">
        BEM
      </button>
      <button onclick="switchArchitecture('oocss')" class="arch-nav__btn" id="oocss-btn">
        OOCSS
      </button>
      <button onclick="switchArchitecture('smacss')" class="arch-nav__btn" id="smacss-btn">
        SMACSS
      </button>
    </nav>
  </header>

  <!-- BEM Demo -->
  <section class="arch-section" id="bem-demo">
    <div class="methodology-badge methodology-badge--bem">BEM: Block__Element--Modifier</div>
    
    <div class="card card--featured">
      <div class="card__header">
        <div class="card__icon">📦</div>
        <div>
          <h3 class="card__title">Premium Product Card</h3>
          <span class="card__badge card__badge--new">New!</span>
        </div>
      </div>
      
      <div class="card__body">
        <p class="card__description">
          BEM uses clear naming: <code>block__element--modifier</code>. 
          The card is the block, header/body are elements, and featured/new are modifiers.
        </p>
        <div class="card__stats">
          <div class="card__stat">
            <span class="card__stat-value">4.9</span>
            <span class="card__stat-label">Rating</span>
          </div>
          <div class="card__stat">
            <span class="card__stat-value">1.2k</span>
            <span class="card__stat-label">Reviews</span>
          </div>
        </div>
      </div>
      
      <div class="card__footer">
        <button class="card__button card__button--primary">Add to Cart</button>
        <button class="card__button card__button--secondary">Details</button>
      </div>
    </div>
  </section>

  <!-- OOCSS Demo -->
  <section class="arch-section hidden" id="oocss-demo">
    <div class="methodology-badge methodology-badge--oocss">OOCSS: Separate Structure from Skin</div>
    
    <div class="media box box--elevated">
      <div class="media-figure">
        <div class="avatar avatar--lg avatar--primary">
          <span>JS</span>
        </div>
      </div>
      <div class="media-body">
        <h3 class="heading heading--lg">John Smith</h3>
        <p class="text text--muted">Senior Developer</p>
        <p class="text">
          OOCSS separates structure (media, box) from skin (colors, borders). 
          The <code>media</code> object is reusable regardless of styling.
        </p>
        <div class="btn-group">
          <button class="btn btn--primary btn--md">Follow</button>
          <button class="btn btn--outline btn--md">Message</button>
        </div>
      </div>
    </div>
  </section>

  <!-- SMACSS Demo -->
  <section class="arch-section hidden" id="smacss-demo">
    <div class="methodology-badge methodology-badge--smacss">SMACSS: Categorize CSS Rules</div>
    
    <div class="l-container">
      <article class="m-article is-featured">
        <header class="m-article-header">
          <span class="m-tag m-tag--primary">Technology</span>
          <h3 class="m-article-title">Understanding SMACSS</h3>
          <div class="m-article-meta">
            <span>5 min read</span>
            <span>•</span>
            <span>Dec 6, 2025</span>
          </div>
        </header>
        
        <div class="m-article-content">
          <p>
            SMACSS uses prefixes: <code>l-</code> for layout, <code>m-</code> for modules, 
            and <code>is-</code> for states. This creates clear categories and reduces naming conflicts.
          </p>
        </div>
        
        <footer class="m-article-footer">
          <button class="m-button m-button--primary">Read More</button>
          <button class="m-button m-button--ghost">Share</button>
        </footer>
      </article>
    </div>
  </section>
</div>`,
                        css: `/* ===== BASE & RESET ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  background: #f5f7fa;
  color: #2d3748;
  line-height: 1.6;
  padding: 20px;
  transition: background 0.3s, color 0.3s;
}

code {
  background: #edf2f7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #d63384;
  font-family: 'Courier New', monospace;
}

.hidden {
  display: none !important;
}

/* ===== PLAYGROUND CONTAINER ===== */
.architecture-playground {
  max-width: 900px;
  margin: 0 auto;
}

/* ===== HEADER SECTION ===== */
.arch-header {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  text-align: center;
}

.arch-header__title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 8px;
}

.arch-header__subtitle {
  color: #718096;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

/* Navigation Buttons */
.arch-nav {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.arch-nav__btn {
  padding: 12px 28px;
  border: 2px solid #e2e8f0;
  background: white;
  color: #4a5568;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.arch-nav__btn:hover {
  border-color: #3182ce;
  background: #ebf8ff;
  color: #2c5282;
  transform: translateY(-2px);
}

.arch-nav__btn--active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Section Container */
.arch-section {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Methodology Badge */
.methodology-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.methodology-badge--bem {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.methodology-badge--oocss {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.methodology-badge--smacss {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

/* ===== BEM STYLES ===== */
.card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card--featured {
  border-color: #667eea;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
}

.card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  border-bottom: 2px solid #e2e8f0;
}

.card__icon {
  font-size: 2.5rem;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 4px;
}

.card__badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.card__badge--new {
  background: #48bb78;
  color: white;
}

.card__body {
  padding: 24px;
}

.card__description {
  color: #4a5568;
  margin-bottom: 20px;
  line-height: 1.7;
}

.card__stats {
  display: flex;
  gap: 32px;
  padding-top: 16px;
  border-top: 2px solid #e2e8f0;
}

.card__stat {
  text-align: center;
}

.card__stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: #667eea;
}

.card__stat-label {
  display: block;
  font-size: 0.85rem;
  color: #718096;
  margin-top: 4px;
}

.card__footer {
  display: flex;
  gap: 12px;
  padding: 24px;
  background: #f7fafc;
  border-top: 2px solid #e2e8f0;
}

.card__button {
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card__button--primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.card__button--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

.card__button--secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.card__button--secondary:hover {
  background: #667eea;
  color: white;
}

/* ===== OOCSS STYLES ===== */
/* Structure (media object) */
.media {
  display: flex;
  gap: 20px;
  align-items: start;
}

.media-figure {
  flex-shrink: 0;
}

.media-body {
  flex: 1;
}

/* Skin (box styling) */
.box {
  padding: 28px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
}

.box--elevated {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #f093fb;
}

/* Avatar (structure + skin separation) */
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
}

.avatar--lg {
  width: 80px;
  height: 80px;
  font-size: 2rem;
}

.avatar--primary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

/* Text styling */
.heading {
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
}

.heading--lg {
  font-size: 1.75rem;
}

.text {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 16px;
}

.text--muted {
  color: #718096;
  font-size: 0.95rem;
}

/* Button structure */
.btn {
  padding: 10px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--md {
  padding: 12px 28px;
  font-size: 1rem;
}

/* Button skin */
.btn--primary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(240, 147, 251, 0.4);
}

.btn--outline {
  background: white;
  color: #f5576c;
  border: 2px solid #f5576c;
}

.btn--outline:hover {
  background: #f5576c;
  color: white;
}

.btn-group {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

/* ===== SMACSS STYLES ===== */
/* Layout (l-prefix) */
.l-container {
  max-width: 100%;
}

/* Module (m-prefix) */
.m-article {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}

.m-article-header {
  padding: 24px;
  background: linear-gradient(135deg, #4facfe10 0%, #00f2fe10 100%);
  border-bottom: 2px solid #e2e8f0;
}

.m-tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.m-tag--primary {
  background: #4facfe;
  color: white;
}

.m-article-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 12px;
}

.m-article-meta {
  color: #718096;
  font-size: 0.9rem;
  display: flex;
  gap: 8px;
}

.m-article-content {
  padding: 24px;
  color: #4a5568;
  line-height: 1.7;
}

.m-article-footer {
  padding: 24px;
  background: #f7fafc;
  border-top: 2px solid #e2e8f0;
  display: flex;
  gap: 12px;
}

.m-button {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.m-button--primary {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.m-button--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(79, 172, 254, 0.4);
}

.m-button--ghost {
  background: transparent;
  color: #4facfe;
  border: 2px solid #4facfe;
}

.m-button--ghost:hover {
  background: #4facfe;
  color: white;
}

/* State (is-prefix) */
.is-featured {
  border-color: #4facfe;
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.2);
}

/* ===== DARK MODE ===== */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a202c;
    color: #e2e8f0;
  }

  code {
    background: #2d3748;
    color: #fc8181;
  }

  .arch-header {
    background: #2d3748;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .arch-header__title {
    color: #f7fafc;
  }

  .arch-header__subtitle {
    color: #a0aec0;
  }

  .arch-nav__btn {
    background: #2d3748;
    color: #e2e8f0;
    border-color: #4a5568;
  }

  .arch-nav__btn:hover {
    background: #374151;
    border-color: #667eea;
  }

  .arch-section {
    background: #2d3748;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .card {
    background: #2d3748;
    border-color: #4a5568;
  }

  .card__header {
    background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
    border-bottom-color: #4a5568;
  }

  .card__title {
    color: #f7fafc;
  }

  .card__description {
    color: #cbd5e0;
  }

  .card__stats {
    border-top-color: #4a5568;
  }

  .card__footer {
    background: #1a202c;
    border-top-color: #4a5568;
  }

  .box {
    background: #2d3748;
    border-color: #4a5568;
  }

  .heading {
    color: #f7fafc;
  }

  .text {
    color: #cbd5e0;
  }

  .text--muted {
    color: #a0aec0;
  }

  .m-article {
    background: #2d3748;
    border-color: #4a5568;
  }

  .m-article-header {
    background: linear-gradient(135deg, #4facfe20 0%, #00f2fe20 100%);
    border-bottom-color: #4a5568;
  }

  .m-article-title {
    color: #f7fafc;
  }

  .m-article-meta {
    color: #a0aec0;
  }

  .m-article-content {
    color: #cbd5e0;
  }

  .m-article-footer {
    background: #1a202c;
    border-top-color: #4a5568;
  }

  .btn--outline,
  .card__button--secondary,
  .m-button--ghost {
    background: transparent;
    border-color: currentColor;
  }

  .btn--outline:hover,
  .card__button--secondary:hover,
  .m-button--ghost:hover {
    background: currentColor;
    color: #1a202c;
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .arch-header {
    padding: 24px;
  }

  .arch-header__title {
    font-size: 1.5rem;
  }

  .arch-nav {
    flex-direction: column;
  }

  .arch-nav__btn {
    width: 100%;
  }

  .arch-section {
    padding: 20px;
  }

  .media {
    flex-direction: column;
  }

  .card__footer,
  .btn-group,
  .m-article-footer {
    flex-direction: column;
  }

  .card__button,
  .btn {
    width: 100%;
  }
}`,
                        js: `// CSS Architecture Playground JavaScript
function switchArchitecture(architecture) {
  // Hide all architecture sections
  document.querySelectorAll('.arch-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show selected architecture section
  const selectedSection = document.getElementById(architecture + '-demo');
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
  }
  
  // Update button active states
  document.querySelectorAll('.arch-nav__btn').forEach(btn => {
    btn.classList.remove('arch-nav__btn--active');
  });
  
  const activeBtn = document.getElementById(architecture + '-btn');
  if (activeBtn) {
    activeBtn.classList.add('arch-nav__btn--active');
  }
  
  console.log('Switched to:', architecture);
}

// Initialize on page load
console.log('🏗️ CSS Architecture Playground loaded!');
console.log('Click the buttons above to explore different methodologies');`
                    }}
                    colorTheme="blue"
                />
            )}
        </div>
    );
}
