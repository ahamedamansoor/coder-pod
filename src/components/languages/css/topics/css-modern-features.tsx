'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Sparkles, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Eye, MousePointer, Globe, 
    RotateCcw, Move, Maximize, Layout, Grid, Compass, Navigation,
    Layers, RefreshCw, Sun, Moon, Paintbrush, Sliders, Hash,
    Monitor, Smartphone, Tablet, Scissors, Box, Crop
} from 'lucide-react';

interface CssModernFeaturesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssModernFeatures({ onOpenWebPlayground }: CssModernFeaturesProps) {
    const [selectedFeature, setSelectedFeature] = useState('subgrid');
    const [selectedDemo, setSelectedDemo] = useState('aspect-ratio');

    // Modern CSS Features
    const modernFeatures = [
        {
            name: 'subgrid',
            title: 'CSS Subgrid',
            icon: Grid,
            description: 'Inherit grid tracks from parent grid',
            support: '95%',
            category: 'Layout',
            color: 'blue'
        },
        {
            name: 'aspect-ratio',
            title: 'Aspect Ratio',
            icon: Monitor,
            description: 'Maintain width-to-height proportions',
            support: '98%',
            category: 'Layout',
            color: 'green'
        },
        {
            name: 'container-queries',
            title: 'Container Queries',
            icon: Box,
            description: 'Responsive design based on container size',
            support: '92%',
            category: 'Responsive',
            color: 'purple'
        },
        {
            name: 'scroll-snap',
            title: 'Scroll Snap',
            icon: Navigation,
            description: 'Control scrolling behavior and snap points',
            support: '96%',
            category: 'UX',
            color: 'orange'
        },
        {
            name: 'gap',
            title: 'Gap Property',
            icon: Layers,
            description: 'Spacing between flex and grid items',
            support: '99%',
            category: 'Layout',
            color: 'teal'
        },
        {
            name: 'backdrop-filter',
            title: 'Backdrop Filter',
            icon: Eye,
            description: 'Apply filters to background content',
            support: '94%',
            category: 'Visual',
            color: 'pink'
        }
    ];

    const categories = ['All', 'Layout', 'Responsive', 'UX', 'Visual'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredFeatures = selectedCategory === 'All' 
        ? modernFeatures 
        : modernFeatures.filter(feature => feature.category === selectedCategory);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Sparkles className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Modern CSS Features</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Explore the latest CSS features that are revolutionizing web development and design.
                </p>
            </div>

            {/* Interactive Modern CSS Features Playground */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Sparkles className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        Interactive Modern CSS Features Playground
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        Explore cutting-edge CSS capabilities with interactive examples, live demos, and practical implementations.
                    </CardDescription>
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <Button 
                            variant={selectedFeature === 'subgrid' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('subgrid')}
                            className="flex items-center gap-2"
                        >
                            <Grid className="w-4 h-4" />
                            Subgrid
                        </Button>
                        <Button 
                            variant={selectedFeature === 'aspect-ratio' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('aspect-ratio')}
                            className="flex items-center gap-2"
                        >
                            <Monitor className="w-4 h-4" />
                            Aspect Ratio
                        </Button>
                        <Button 
                            variant={selectedFeature === 'container-queries' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('container-queries')}
                            className="flex items-center gap-2"
                        >
                            <Box className="w-4 h-4" />
                            Container Queries
                        </Button>
                        <Button 
                            variant={selectedFeature === 'scroll-snap' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('scroll-snap')}
                            className="flex items-center gap-2"
                        >
                            <Navigation className="w-4 h-4" />
                            Scroll Snap
                        </Button>
                        <Button 
                            variant={selectedFeature === 'gap' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('gap')}
                            className="flex items-center gap-2"
                        >
                            <Layers className="w-4 h-4" />
                            Gap Property
                        </Button>
                        <Button 
                            variant={selectedFeature === 'backdrop-filter' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('backdrop-filter')}
                            className="flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" />
                            Backdrop Filter
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Old vs New CSS Approaches
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🏚️ Traditional CSS</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2 text-xs">
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Complex workarounds</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">JavaScript dependencies</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Browser inconsistencies</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Complicated & Limited</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">✨ Modern CSS</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2 text-xs">
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Native solutions</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Pure CSS power</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Excellent support</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Simple & Powerful</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 The Future is Here!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Modern CSS features eliminate the need for complex JavaScript solutions and provide native, performant alternatives.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    🎨 Feature Categories
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Layout className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Layout</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Grid, Flexbox, Subgrid</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Monitor className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Responsive</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Container Queries</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Navigation className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">UX</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Scroll Snap, Smooth</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Eye className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Visual</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Backdrop Filter, Masks</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Comparison */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2">✨</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                            NEW
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Modern CSS</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Native Solutions
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better Performance
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Less JavaScript
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">🏚️</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Legacy Methods</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Complex Workarounds
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            JS Dependencies
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Browser Issues
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Start using modern CSS features today - they have excellent browser support and will future-proof your code!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Feature Explorer */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Grid className="w-5 h-5" />
                        Modern CSS Features Explorer
                    </CardTitle>
                    <CardDescription>
                        Explore the latest CSS features with interactive examples and browser support information.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'border-green-500 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                        : 'border-gray-200 hover:border-gray-300 text-gray-600 dark:text-gray-400'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFeatures.map((feature) => (
                            <div 
                                key={feature.name}
                                className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                    selectedFeature === feature.name
                                        ? 'border-green-500 shadow-lg'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => setSelectedFeature(feature.name)}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <feature.icon className={`w-8 h-8 text-${feature.color}-500`} />
                                    <div>
                                        <h3 className="font-bold text-lg">{feature.title}</h3>
                                        <Badge variant="secondary" className={`bg-${feature.color}-100 text-${feature.color}-800`}>
                                            {feature.category}
                                        </Badge>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {feature.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="text-xs text-gray-500">Browser Support</div>
                                    <div className={`text-sm font-bold ${
                                        parseInt(feature.support) > 95 ? 'text-green-600' : 
                                        parseInt(feature.support) > 90 ? 'text-yellow-600' : 'text-red-600'
                                    }`}>
                                        {feature.support}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Demos */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Play className="w-5 h-5" />
                        Live Feature Demonstrations
                    </CardTitle>
                    <CardDescription>
                        See modern CSS features in action with interactive examples you can experiment with.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Aspect Ratio Demo */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Monitor className="w-5 h-5" />
                                🎯 Aspect Ratio Property
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-3">
                                        <div 
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold"
                                            style={{ aspectRatio: '16/9' }}
                                        >
                                            16:9 Video
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                        <div 
                                            className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold"
                                            style={{ aspectRatio: '1/1' }}
                                        >
                                            1:1 Square
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* Modern CSS */</div>
                                        <div><span className="text-blue-400">.video</span> {'{'}</div>
                                        <div>  <span className="text-green-400">aspect-ratio</span>: <span className="text-yellow-400">16 / 9</span>;</div>
                                        <div>{'}'}</div>
                                        <br />
                                        <div><span className="text-blue-400">.square</span> {'{'}</div>
                                        <div>  <span className="text-green-400">aspect-ratio</span>: <span className="text-yellow-400">1</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gap Property Demo */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Layers className="w-5 h-5" />
                                📏 Gap Property in Flexbox
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                        <div className="flex" style={{ gap: '1rem' }}>
                                            <div className="bg-blue-500 text-white p-3 rounded flex-1 text-center text-sm">Item 1</div>
                                            <div className="bg-green-500 text-white p-3 rounded flex-1 text-center text-sm">Item 2</div>
                                            <div className="bg-red-500 text-white p-3 rounded flex-1 text-center text-sm">Item 3</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* No more margin hacks! */</div>
                                        <div><span className="text-blue-400">.flex-container</span> {'{'}</div>
                                        <div>  <span className="text-green-400">display</span>: <span className="text-yellow-400">flex</span>;</div>
                                        <div>  <span className="text-green-400">gap</span>: <span className="text-yellow-400">1rem</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scroll Snap Demo */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Navigation className="w-5 h-5" />
                                🎢 Scroll Snap
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div 
                                        className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto"
                                        style={{ 
                                            scrollSnapType: 'x mandatory',
                                            display: 'flex',
                                            gap: '1rem'
                                        }}
                                    >
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <div 
                                                key={num}
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg flex-shrink-0 w-48 text-center font-bold"
                                                style={{ scrollSnapAlign: 'start' }}
                                            >
                                                Slide {num}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                        ← Scroll horizontally to see snap behavior →
                                    </p>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* Smooth scrolling */</div>
                                        <div><span className="text-blue-400">.scroll-container</span> {'{'}</div>
                                        <div>  <span className="text-green-400">scroll-snap-type</span>: <span className="text-yellow-400">x mandatory</span>;</div>
                                        <div>  <span className="text-green-400">overflow-x</span>: <span className="text-yellow-400">auto</span>;</div>
                                        <div>{'}'}</div>
                                        <br />
                                        <div><span className="text-blue-400">.scroll-item</span> {'{'}</div>
                                        <div>  <span className="text-green-400">scroll-snap-align</span>: <span className="text-yellow-400">start</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Browser Support */}
            <Card className="border-teal-200 bg-teal-50/50 dark:bg-teal-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                        <Globe className="w-5 h-5" />
                        Browser Support & Implementation
                    </CardTitle>
                    <CardDescription>
                        Current browser support status and implementation tips for modern CSS features.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ Ready to Use</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">CSS Grid</span>
                                        <Badge className="bg-green-100 text-green-800">99%</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Flexbox Gap</span>
                                        <Badge className="bg-green-100 text-green-800">98%</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Aspect Ratio</span>
                                        <Badge className="bg-green-100 text-green-800">97%</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Scroll Snap</span>
                                        <Badge className="bg-green-100 text-green-800">96%</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">🚀 Implementation Tips</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Use feature queries (@supports) for fallbacks
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Progressive enhancement approach
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Test across different browsers
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Keep fallbacks simple and functional
                                    </li>
                                </ul>
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
                        Experiment with modern CSS features in a live, interactive environment.
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
    <title>Modern CSS Features Playground</title>
</head>
<body>
    <div class="container">
        <h1>Modern CSS Features Demo</h1>
        
        <section class="demo-section">
            <h2>Aspect Ratio</h2>
            <div class="aspect-demo">
                <div class="video-box">16:9 Video</div>
                <div class="square-box">1:1 Square</div>
            </div>
        </section>
        
        <section class="demo-section">
            <h2>Gap Property</h2>
            <div class="flex-gap-demo">
                <div class="item">Item 1</div>
                <div class="item">Item 2</div>
                <div class="item">Item 3</div>
            </div>
        </section>
        
        <section class="demo-section">
            <h2>Scroll Snap</h2>
            <div class="scroll-demo">
                <div class="scroll-item">Slide 1</div>
                <div class="scroll-item">Slide 2</div>
                <div class="scroll-item">Slide 3</div>
                <div class="scroll-item">Slide 4</div>
            </div>
        </section>
        
        <section class="demo-section">
            <h2>Backdrop Filter</h2>
            <div class="backdrop-demo">
                <div class="background-image"></div>
                <div class="glass-card">
                    <h3>Glass Effect</h3>
                    <p>This card has a backdrop filter applied!</p>
                </div>
            </div>
        </section>
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
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    color: white;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.demo-section {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.demo-section h2 {
    color: #4f46e5;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
}

/* Aspect Ratio Demo */
.aspect-demo {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 2rem;
    align-items: start;
}

.video-box {
    aspect-ratio: 16 / 9;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.square-box {
    aspect-ratio: 1;
    background: linear-gradient(45deg, #10b981, #06b6d4);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
}

/* Gap Property Demo */
.flex-gap-demo {
    display: flex;
    gap: 1.5rem;
}

.flex-gap-demo .item {
    flex: 1;
    padding: 1.5rem;
    background: linear-gradient(45deg, #f59e0b, #ef4444);
    color: white;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}

/* Scroll Snap Demo */
.scroll-demo {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 1rem 0;
}

.scroll-item {
    flex-shrink: 0;
    width: 250px;
    height: 150px;
    background: linear-gradient(45deg, #8b5cf6, #ec4899);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    scroll-snap-align: start;
}

/* Backdrop Filter Demo */
.backdrop-demo {
    position: relative;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
}

.background-image {
    position: absolute;
    inset: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="%23ff6b6b"/><circle cx="75" cy="25" r="2" fill="%234ecdc4"/><circle cx="25" cy="75" r="2" fill="%23ffe66d"/><circle cx="75" cy="75" r="2" fill="%23a8e6cf"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat,
                linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffe66d, #a8e6cf);
    background-size: 50px 50px, cover;
}

.glass-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    color: white;
    min-width: 250px;
}

.glass-card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
}

.glass-card p {
    margin: 0;
    opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
    .aspect-demo {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .flex-gap-demo {
        flex-direction: column;
    }
    
    .scroll-item {
        width: 200px;
        height: 120px;
    }
}`,
                            `// Interactive functionality for modern CSS features
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all demo sections
    document.querySelectorAll('.demo-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add click handlers for interactive elements
    document.querySelectorAll('.scroll-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Dynamic aspect ratio changer
    let currentRatio = 0;
    const ratios = ['16/9', '4/3', '1/1', '3/4'];
    
    document.querySelector('.video-box').addEventListener('click', function() {
        currentRatio = (currentRatio + 1) % ratios.length;
        this.style.aspectRatio = ratios[currentRatio];
        this.textContent = ratios[currentRatio] + ' Ratio';
    });
    
    console.log('Modern CSS Features playground loaded!');
    console.log('Try clicking on elements to see interactive features.');
});`
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
