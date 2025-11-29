'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Eye, MousePointer, Globe, Languages,
    RotateCcw, Move, Maximize, Layout, Grid, Compass, Navigation
} from 'lucide-react';

interface CssLogicalPropertiesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssLogicalProperties({ onOpenWebPlayground }: CssLogicalPropertiesProps) {
    const [selectedDirection, setSelectedDirection] = useState('ltr');
    const [selectedProperty, setSelectedProperty] = useState('margin');

    // Logical vs Physical Properties mapping
    const propertyMappings = [
        {
            category: 'Margins',
            physical: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
            logical: ['margin-block-start', 'margin-inline-end', 'margin-block-end', 'margin-inline-start'],
            shorthand: ['margin-block', 'margin-inline']
        },
        {
            category: 'Padding',
            physical: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
            logical: ['padding-block-start', 'padding-inline-end', 'padding-block-end', 'padding-inline-start'],
            shorthand: ['padding-block', 'padding-inline']
        },
        {
            category: 'Borders',
            physical: ['border-top', 'border-right', 'border-bottom', 'border-left'],
            logical: ['border-block-start', 'border-inline-end', 'border-block-end', 'border-inline-start'],
            shorthand: ['border-block', 'border-inline']
        },
        {
            category: 'Positioning',
            physical: ['top', 'right', 'bottom', 'left'],
            logical: ['inset-block-start', 'inset-inline-end', 'inset-block-end', 'inset-inline-start'],
            shorthand: ['inset-block', 'inset-inline']
        }
    ];

    const directions = [
        { value: 'ltr', label: 'Left-to-Right (LTR)', flag: '🇺🇸', example: 'English, Spanish' },
        { value: 'rtl', label: 'Right-to-Left (RTL)', flag: '🇸🇦', example: 'Arabic, Hebrew' },
        { value: 'ttb', label: 'Top-to-Bottom (TTB)', flag: '🇯🇵', example: 'Japanese, Chinese' }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Compass className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Logical Properties</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Write direction-agnostic CSS that adapts to different writing modes and languages automatically.
                </p>
            </div>

            {/* What are Logical Properties? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Globe className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Logical Properties?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Create truly international websites with CSS that automatically adapts to different writing directions and modes!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Physical vs Logical Properties
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">📐 Physical Properties</div>
                                        <div className="relative h-24 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                                            <div className="w-16 h-16 bg-blue-500 rounded mx-auto mt-1 relative">
                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-bold">top</div>
                                                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-xs text-blue-600 font-bold">right</div>
                                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-bold">bottom</div>
                                                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-xs text-blue-600 font-bold">left</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Fixed to Screen Directions</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🧭 Logical Properties</div>
                                        <div className="relative h-24 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                                            <div className="w-16 h-16 bg-green-500 rounded mx-auto mt-1 relative">
                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs text-green-600 font-bold">block-start</div>
                                                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-xs text-green-600 font-bold">inline-end</div>
                                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-600 font-bold">block-end</div>
                                                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-green-600 font-bold">inline-start</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Adapts to Writing Mode</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🌍 International-Ready CSS!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Logical properties automatically adapt to different writing directions and languages.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Writing Modes Demo */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🌍</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Writing Modes</div>
                                    
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-center gap-2 text-sm">
                                            <span className="text-2xl">🇺🇸</span>
                                            <div>
                                                <div className="font-semibold">LTR</div>
                                                <div className="text-xs text-gray-600">Left → Right</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-center gap-2 text-sm">
                                            <span className="text-2xl">🇸🇦</span>
                                            <div>
                                                <div className="font-semibold">RTL</div>
                                                <div className="text-xs text-gray-600">Right → Left</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-center gap-2 text-sm">
                                            <span className="text-2xl">🇯🇵</span>
                                            <div>
                                                <div className="font-semibold">TTB</div>
                                                <div className="text-xs text-gray-600">Top → Bottom</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use logical properties for truly international websites that work in any language!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Property Mappings */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Grid className="w-5 h-5" />
                        Property Mappings
                    </CardTitle>
                    <CardDescription>
                        Complete mapping between physical and logical properties for all CSS properties.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {propertyMappings.map((mapping, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">
                                    {mapping.category}
                                </h4>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Physical Properties:</div>
                                        <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                                            {mapping.physical.map((prop, i) => (
                                                <div key={i} className="bg-red-50 dark:bg-red-900/20 p-1 rounded">{prop}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Logical Properties:</div>
                                        <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                                            {mapping.logical.map((prop, i) => (
                                                <div key={i} className="bg-green-50 dark:bg-green-900/20 p-1 rounded">{prop}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Shorthand:</div>
                                        <div className="flex gap-1 text-xs font-mono">
                                            {mapping.shorthand.map((prop, i) => (
                                                <div key={i} className="bg-blue-50 dark:bg-blue-900/20 p-1 rounded">{prop}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Direction Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Languages className="w-5 h-5" />
                        Interactive Writing Direction Demo
                    </CardTitle>
                    <CardDescription>
                        See how logical properties adapt to different writing directions in real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6 md:space-y-8">
                        {/* Direction Selector */}
                        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                            {directions.map((dir) => (
                                <button
                                    key={dir.value}
                                    onClick={() => setSelectedDirection(dir.value)}
                                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                                        selectedDirection === dir.value
                                            ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/30'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">{dir.flag}</span>
                                        <div className="text-left">
                                            <div className="font-semibold text-sm">{dir.label}</div>
                                            <div className="text-xs text-gray-600">{dir.example}</div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Live Demo */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-4">Live Example:</h4>
                            <div 
                                className="border-2 border-dashed border-gray-300 p-4 rounded-lg"
                                style={{ 
                                    direction: selectedDirection === 'rtl' ? 'rtl' : 'ltr',
                                    writingMode: selectedDirection === 'ttb' ? 'vertical-rl' : 'horizontal-tb'
                                }}
                            >
                                <div 
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded"
                                    style={{
                                        marginInlineStart: '20px',
                                        marginBlockStart: '10px',
                                        paddingInlineEnd: '30px',
                                        borderInlineStart: '4px solid #fbbf24'
                                    }}
                                >
                                    <div className="font-semibold mb-2">
                                        {selectedDirection === 'ltr' && 'Logical Properties in Action'}
                                        {selectedDirection === 'rtl' && 'الخصائص المنطقية في العمل'}
                                        {selectedDirection === 'ttb' && '論理プロパティの実行'}
                                    </div>
                                    <div className="text-sm opacity-90">
                                        {selectedDirection === 'ltr' && 'This text demonstrates how logical properties automatically adapt to different writing directions. The margin, padding, and border positions change based on the text direction!'}
                                        {selectedDirection === 'rtl' && 'يوضح هذا النص كيف تتكيف الخصائص المنطقية تلقائيًا مع اتجاهات الكتابة المختلفة. تتغير مواضع الهامش والحشو والحدود بناءً على اتجاه النص!'}
                                        {selectedDirection === 'ttb' && 'このテキストは、論理プロパティが異なる書字方向に自動的に適応する方法を示しています。マージン、パディング、ボーダーの位置がテキストの方向に基づいて変化します！'}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded text-sm font-mono">
                                <div className="text-gray-600 dark:text-gray-400 mb-2">CSS used:</div>
                                <div>margin-inline-start: 20px;</div>
                                <div>margin-block-start: 10px;</div>
                                <div>padding-inline-end: 30px;</div>
                                <div>border-inline-start: 4px solid #fbbf24;</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Block vs Inline Concepts */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Layout className="w-5 h-5" />
                        Block vs Inline Dimensions
                    </CardTitle>
                    <CardDescription>
                        Understanding the fundamental concepts of block and inline directions in different writing modes.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {/* LTR Example */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <span className="text-2xl">🇺🇸</span>
                                Left-to-Right (LTR)
                            </h4>
                            <div className="space-y-3">
                                <div className="relative bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                                    <div className="text-center text-sm font-semibold text-blue-700 dark:text-blue-300">Block Direction</div>
                                    <div className="flex justify-center mt-2">
                                        <ArrowDown className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-xs text-center mt-1">Top → Bottom</div>
                                </div>
                                <div className="relative bg-green-100 dark:bg-green-900/30 p-4 rounded">
                                    <div className="text-center text-sm font-semibold text-green-700 dark:text-green-300">Inline Direction</div>
                                    <div className="flex justify-center mt-2">
                                        <ArrowRight className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="text-xs text-center mt-1">Left → Right</div>
                                </div>
                                <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded text-xs">
                                    <div className="font-mono">Hello World</div>
                                    <div className="text-gray-600 dark:text-gray-400">English text flows left to right</div>
                                </div>
                            </div>
                        </div>

                        {/* RTL Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <span className="text-2xl">🇸🇦</span>
                                Right-to-Left (RTL)
                            </h4>
                            <div className="space-y-3">
                                <div className="relative bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                                    <div className="text-center text-sm font-semibold text-blue-700 dark:text-blue-300">Block Direction</div>
                                    <div className="flex justify-center mt-2">
                                        <ArrowDown className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-xs text-center mt-1">Top → Bottom</div>
                                </div>
                                <div className="relative bg-green-100 dark:bg-green-900/30 p-4 rounded">
                                    <div className="text-center text-sm font-semibold text-green-700 dark:text-green-300">Inline Direction</div>
                                    <div className="flex justify-center mt-2">
                                        <ArrowLeft className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="text-xs text-center mt-1">Right → Left</div>
                                </div>
                                <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded text-xs" dir="rtl">
                                    <div className="font-mono">مرحبا بالعالم</div>
                                    <div className="text-gray-600 dark:text-gray-400">Arabic text flows right to left</div>
                                </div>
                            </div>
                        </div>

                        {/* Vertical Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <span className="text-2xl">🇯🇵</span>
                                Vertical (TTB)
                            </h4>
                            <div className="space-y-3">
                                <div className="relative bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                                    <div className="text-center text-sm font-semibold text-blue-700 dark:text-blue-300">Block Direction</div>
                                    <div className="flex justify-center mt-2">
                                        <ArrowLeft className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-xs text-center mt-1">Right → Left</div>
                                </div>
                                <div className="relative bg-green-100 dark:bg-green-900/30 p-4 rounded">
                                    <div className="text-center text-sm font-semibold text-green-700 dark:text-green-300">Inline Direction</div>
                                    <div className="flex justify-center mt-2">
                                        <ArrowDown className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="text-xs text-center mt-1">Top → Bottom</div>
                                </div>
                                <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded text-xs">
                                    <div className="font-mono" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', height: '60px', display: 'inline-block' }}>
                                        こんにちは世界
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 mt-2">Japanese text flows top to bottom</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Code Examples */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Code className="w-5 h-5" />
                        Practical Code Examples
                    </CardTitle>
                    <CardDescription>
                        Real-world examples showing how to use logical properties effectively.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6 md:space-y-8">
                        {/* Before/After Comparison */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div>
                                <h4 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Physical Properties (Old Way)</h4>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* Not international-friendly */</div>
                                        <div><span className="text-blue-400">.card</span> {'{'}</div>
                                        <div>  <span className="text-green-400">margin-left</span>: <span className="text-yellow-400">20px</span>;</div>
                                        <div>  <span className="text-green-400">padding-right</span>: <span className="text-yellow-400">15px</span>;</div>
                                        <div>  <span className="text-green-400">border-left</span>: <span className="text-yellow-400">3px solid blue</span>;</div>
                                        <div>  <span className="text-green-400">text-align</span>: <span className="text-yellow-400">left</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ Logical Properties (New Way)</h4>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* International-ready! */</div>
                                        <div><span className="text-blue-400">.card</span> {'{'}</div>
                                        <div>  <span className="text-green-400">margin-inline-start</span>: <span className="text-yellow-400">20px</span>;</div>
                                        <div>  <span className="text-green-400">padding-inline-end</span>: <span className="text-yellow-400">15px</span>;</div>
                                        <div>  <span className="text-green-400">border-inline-start</span>: <span className="text-yellow-400">3px solid blue</span>;</div>
                                        <div>  <span className="text-green-400">text-align</span>: <span className="text-yellow-400">start</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Complete Example */}
                        <div>
                            <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">🎯 Complete Component Example</h4>
                            <div className="bg-gray-900 rounded-lg p-4">
                                <div className="font-mono text-sm text-white">
                                    <div className="text-gray-400">/* Fully logical component */</div>
                                    <div><span className="text-blue-400">.notification</span> {'{'}</div>
                                    <div>  <span className="text-green-400">padding-block</span>: <span className="text-yellow-400">1rem</span>;</div>
                                    <div>  <span className="text-green-400">padding-inline</span>: <span className="text-yellow-400">1.5rem</span>;</div>
                                    <div>  <span className="text-green-400">margin-block-end</span>: <span className="text-yellow-400">1rem</span>;</div>
                                    <div>  <span className="text-green-400">border-inline-start</span>: <span className="text-yellow-400">4px solid #3b82f6</span>;</div>
                                    <div>  <span className="text-green-400">border-start-start-radius</span>: <span className="text-yellow-400">0</span>;</div>
                                    <div>  <span className="text-green-400">border-end-start-radius</span>: <span className="text-yellow-400">0</span>;</div>
                                    <div>{'}'}</div>
                                    <br />
                                    <div><span className="text-blue-400">.notification-icon</span> {'{'}</div>
                                    <div>  <span className="text-green-400">margin-inline-end</span>: <span className="text-yellow-400">0.75rem</span>;</div>
                                    <div>  <span className="text-green-400">float</span>: <span className="text-yellow-400">inline-start</span>;</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Browser Support & Best Practices */}
            <Card className="border-teal-200 bg-teal-50/50 dark:bg-teal-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                        <CheckCircle className="w-5 h-5" />
                        Browser Support & Best Practices
                    </CardTitle>
                    <CardDescription>
                        Everything you need to know about using logical properties in production.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ Best Practices</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Use logical properties for new projects
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Gradually migrate existing codebases
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Test with different writing modes
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Use fallbacks for older browsers
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Consider your target audience
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">🌐 Browser Support</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Chrome</span>
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">87+</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Firefox</span>
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">66+</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Safari</span>
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">14.1+</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Edge</span>
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">87+</Badge>
                                    </div>
                                </div>
                                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">
                                    <strong>Note:</strong> Most logical properties have excellent modern browser support. Always check caniuse.com for specific properties.
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
                        Experiment with logical properties in a live environment.
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
                            <title>CSS Logical Properties Playground</title>
</head>
<body>
    <div class="container">
        <h1>CSS Logical Properties Demo</h1>
        
        <div class="direction-controls">
            <button onclick="setDirection('ltr')">LTR (English)</button>
            <button onclick="setDirection('rtl')">RTL (Arabic)</button>
            <button onclick="setDirection('ttb')">TTB (Japanese)</button>
        </div>
        
        <div class="demo-box" id="demoBox">
            <div class="icon">🌍</div>
            <div class="content">
                <h3>Logical Properties</h3>
                <p>This box uses logical properties that adapt to different writing directions automatically!</p>
            </div>
        </div>
        
        <div class="code-display" id="codeDisplay">
            <h4>Current CSS:</h4>
            <pre id="cssCode"></pre>
        </div>
    </div>
</body>
</html>`,
                            `* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    color: white;
    margin-block-end: 2rem;
}

.direction-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-block-end: 2rem;
}

.direction-controls button {
    padding-block: 0.75rem;
    padding-inline: 1.5rem;
    border: none;
    border-radius: 8px;
    background: white;
    color: #4f46e5;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.direction-controls button:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
}

.demo-box {
    background: white;
    border-radius: 12px;
    padding-block: 2rem;
    padding-inline: 2rem;
    margin-block-end: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    /* Logical properties in action */
    margin-inline-start: 2rem;
    border-inline-start: 6px solid #10b981;
    padding-inline-end: 3rem;
}

.demo-box .icon {
    font-size: 3rem;
    margin-block-end: 1rem;
    text-align: start;
}

.demo-box h3 {
    color: #1f2937;
    margin-block-end: 0.5rem;
    text-align: start;
}

.demo-box p {
    color: #6b7280;
    line-height: 1.6;
    text-align: start;
}

.code-display {
    background: #1f2937;
    border-radius: 8px;
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
    color: white;
}

.code-display h4 {
    margin-block-start: 0;
    margin-block-end: 1rem;
    color: #f3f4f6;
}

.code-display pre {
    margin: 0;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #d1d5db;
}

/* RTL specific adjustments */
[dir="rtl"] .demo-box .icon,
[dir="rtl"] .demo-box h3,
[dir="rtl"] .demo-box p {
    text-align: start; /* Still uses logical start */
}

/* Vertical writing mode adjustments */
.vertical .demo-box {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    max-inline-size: 300px;
    margin-inline: auto;
}`,
                            `function setDirection(direction) {
    const demoBox = document.getElementById('demoBox');
    const body = document.body;
    const cssCode = document.getElementById('cssCode');
    
    // Reset classes
    body.className = '';
    demoBox.style.direction = '';
    demoBox.style.writingMode = '';
    
    let cssText = '';
    
    switch(direction) {
        case 'ltr':
            body.dir = 'ltr';
            cssText = \`/* Left-to-Right (English, Spanish, etc.) */
direction: ltr;
writing-mode: horizontal-tb;

/* Logical properties adapt automatically */
margin-inline-start: 2rem;        /* → margin-left */
border-inline-start: 6px solid;   /* → border-left */
padding-inline-end: 3rem;         /* → padding-right */\`;
            break;
            
        case 'rtl':
            body.dir = 'rtl';
            cssText = \`/* Right-to-Left (Arabic, Hebrew, etc.) */
direction: rtl;
writing-mode: horizontal-tb;

/* Logical properties adapt automatically */
margin-inline-start: 2rem;        /* → margin-right */
border-inline-start: 6px solid;   /* → border-right */
padding-inline-end: 3rem;         /* → padding-left */\`;
            break;
            
        case 'ttb':
            body.className = 'vertical';
            demoBox.style.writingMode = 'vertical-rl';
            cssText = \`/* Top-to-Bottom (Japanese, Chinese, etc.) */
writing-mode: vertical-rl;
text-orientation: mixed;

/* Logical properties adapt automatically */
margin-inline-start: 2rem;        /* → margin-top */
border-inline-start: 6px solid;   /* → border-top */
padding-inline-end: 3rem;         /* → padding-bottom */\`;
            break;
    }
    
    cssCode.textContent = cssText;
}

// Initialize with LTR
setDirection('ltr');`
                        )}
                        className="w-full"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Open Interactive Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
