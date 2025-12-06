'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Play, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Eye, MousePointer, Globe, Languages,
    RotateCcw, Move, Maximize, Layout, Grid, Compass, Navigation, Sparkles, Info
} from 'lucide-react';

interface CssLogicalPropertiesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssLogicalProperties({ onOpenWebPlayground }: CssLogicalPropertiesProps) {
    const [selectedDirection, setSelectedDirection] = useState('ltr');
    const [selectedProperty, setSelectedProperty] = useState('margin');

    // Physical vs Logical Example
    const physicalVsLogicalExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Physical vs Logical Properties</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        }
    }
    
    .container {
        max-width: 1000px;
        margin: 0 auto;
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .container {
            background: #1e293b;
            color: #e2e8f0;
        }
    }
    
    h1 {
        text-align: center;
        color: #3b82f6;
        margin-bottom: 20px;
        font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #60a5fa;
        }
    }
    
    .subtitle {
        text-align: center;
        color: #64748b;
        margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
        .subtitle {
            color: #94a3b8;
        }
    }
    
    .comparison {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-bottom: 30px;
    }
    
    .demo-card {
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        padding: 24px;
        background: #f8fafc;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .demo-card {
            background: #334155;
            border-color: #475569;
        }
    }
    
    .demo-card h3 {
        font-size: 1.1rem;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .physical h3 {
        color: #ef4444;
    }
    
    .logical h3 {
        color: #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
        .physical h3 {
            color: #f87171;
        }
        .logical h3 {
            color: #34d399;
        }
    }
    
    .demo-box {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 16px;
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        word-wrap: break-word;
        max-width: 100%;
    }
    
    .physical .demo-box {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        margin-left: 30px;
        border-left: 5px solid #fbbf24;
        padding-right: 40px;
    }
    
    .logical .demo-box {
        background: linear-gradient(135deg, #10b981, #059669);
        margin-inline-start: 30px;
        border-inline-start: 5px solid #fbbf24;
        padding-inline-end: 40px;
    }
    
    .code-display {
        background: #1e293b;
        border-radius: 6px;
        padding: 12px;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        color: #94a3b8;
        overflow-x: auto;
    }
    
    @media (prefers-color-scheme: dark) {
        .code-display {
            background: #0f172a;
        }
    }
    
    .code-display code {
        color: #22c55e;
    }
    
    .direction-buttons {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 30px;
        flex-wrap: wrap;
    }
    
    .direction-buttons button {
        padding: 10px 20px;
        border: 2px solid #3b82f6;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        color: #3b82f6;
        transition: all 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
        .direction-buttons button {
            background: #334155;
            border-color: #60a5fa;
            color: #60a5fa;
        }
    }
    
    .direction-buttons button:hover {
        background: #3b82f6;
        color: white;
    }
    
    @media (prefers-color-scheme: dark) {
        .direction-buttons button:hover {
            background: #60a5fa;
            color: #1e293b;
        }
    }
    
    .direction-buttons button.active {
        background: #3b82f6;
        color: white;
    }
    
    @media (prefers-color-scheme: dark) {
        .direction-buttons button.active {
            background: #60a5fa;
            color: #1e293b;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧭 Physical vs Logical Properties</h1>
        <p class="subtitle">See how logical properties adapt to different writing directions</p>
        
        <div class="comparison">
            <div class="demo-card physical">
                <h3>❌ Physical Properties</h3>
                <div class="demo-box" id="physicalBox">Fixed Direction - Always Left Border</div>
                <div class="code-display">
                    <code>margin-left: 30px;<br>
                    border-left: 5px solid;<br>
                    padding-right: 40px;</code>
                </div>
                <p style="margin-top: 12px; font-size: 0.85rem; color: #64748b;">Always uses screen directions</p>
            </div>
            
            <div class="demo-card logical">
                <h3>✅ Logical Properties</h3>
                <div class="demo-box" id="logicalBox">Adapts Automatically - Inline Start Border</div>
                <div class="code-display">
                    <code>margin-inline-start: 30px;<br>
                    border-inline-start: 5px solid;<br>
                    padding-inline-end: 40px;</code>
                </div>
                <p style="margin-top: 12px; font-size: 0.85rem; color: #10b981;">Adapts to writing direction!</p>
            </div>
        </div>
        
        <div class="direction-buttons">
            <button class="active" onclick="changeDirection('ltr')">🇺🇸 LTR (English)</button>
            <button onclick="changeDirection('rtl')">🇸🇦 RTL (Arabic)</button>
        </div>
    </div>
    
    <script>
    function changeDirection(dir) {
        const container = document.querySelector('.container');
        const buttons = document.querySelectorAll('.direction-buttons button');
        const physicalBox = document.getElementById('physicalBox');
        const logicalBox = document.getElementById('logicalBox');
        
        container.setAttribute('dir', dir);
        
        if (dir === 'rtl') {
            physicalBox.textContent = 'اتجاه ثابت - حد أيسر دائماً';
            logicalBox.textContent = 'يتكيف تلقائياً - حد البداية المضمنة';
        } else {
            physicalBox.textContent = 'Fixed Direction - Always Left Border';
            logicalBox.textContent = 'Adapts Automatically - Inline Start Border';
        }
        
        buttons.forEach((btn, i) => {
            if ((dir === 'ltr' && i === 0) || (dir === 'rtl' && i === 1)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    </script>
</body>
</html>`;

    // Complete Logical Properties Example
    const completeExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logical Properties Showcase</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        }
    }
    
    .container {
        max-width: 900px;
        margin: 0 auto;
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .container {
            background: #1e293b;
            color: #e2e8f0;
        }
    }
    
    h1 {
        text-align: center;
        color: #3b82f6;
        margin-block-end: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #60a5fa;
        }
    }
    
    .subtitle {
        text-align: center;
        color: #64748b;
        margin-block-end: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .subtitle {
            color: #94a3b8;
        }
    }
    
    .examples-grid {
        display: grid;
        gap: 1.5rem;
        margin-block-end: 2rem;
    }
    
    .example-card {
        background: #f8fafc;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .example-card {
            background: #334155;
            border-color: #475569;
        }
    }
    
    .example-card h3 {
        color: #1f2937;
        margin-block-end: 1rem;
        font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .example-card h3 {
            color: #f1f5f9;
        }
    }
    
    .notification {
        background: linear-gradient(135deg, #60a5fa, #3b82f6);
        color: white;
        padding-block: 1rem;
        padding-inline: 1.5rem;
        border-radius: 8px;
        border-inline-start: 4px solid #fbbf24;
        margin-block-end: 1rem;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .card {
        background: white;
        padding-block: 1.5rem;
        padding-inline: 1.5rem;
        border-radius: 8px;
        border-inline-start: 3px solid #10b981;
        margin-block-end: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
        .card {
            background: #1e293b;
        }
    }
    
    .card h4 {
        color: #1f2937;
        margin-block-end: 0.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .card h4 {
            color: #f1f5f9;
        }
    }
    
    .card p {
        color: #64748b;
        line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
        .card p {
            color: #cbd5e1;
        }
    }
    
    .code-block {
        background: #1e293b;
        color: #22c55e;
        padding: 1rem;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        margin-block-start: 0.75rem;
        overflow-x: auto;
    }
    
    @media (prefers-color-scheme: dark) {
        .code-block {
            background: #0f172a;
        }
    }
    
    .toggle-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .toggle-buttons button {
        padding-block: 0.75rem;
        padding-inline: 1.5rem;
        border: 2px solid #3b82f6;
        background: white;
        color: #3b82f6;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
        .toggle-buttons button {
            background: #334155;
            border-color: #60a5fa;
            color: #60a5fa;
        }
    }
    
    .toggle-buttons button:hover {
        background: #3b82f6;
        color: white;
        transform: translateY(-2px);
    }
    
    @media (prefers-color-scheme: dark) {
        .toggle-buttons button:hover {
            background: #60a5fa;
            color: #1e293b;
        }
    }
    </style>
</head>
<body>
    <div class="container" id="container">
        <h1>🌍 Logical Properties Showcase</h1>
        <p class="subtitle">Components that adapt to any writing direction</p>
        
        <div class="examples-grid">
            <div class="example-card">
                <h3 id="notifTitle">📢 Notification Component</h3>
                <div class="notification" id="notification">
                    <strong>Success!</strong> Your settings have been saved.
                </div>
                <div class="code-block">padding-block: 1rem;<br>
padding-inline: 1.5rem;<br>
border-inline-start: 4px solid;</div>
            </div>
            
            <div class="example-card">
                <h3 id="cardTitle">📋 Card Component</h3>
                <div class="card" id="card">
                    <h4 id="cardHeading">Card Title</h4>
                    <p id="cardText">Cards with logical properties adapt seamlessly to different text directions!</p>
                </div>
                <div class="code-block">padding-block: 1.5rem;<br>
padding-inline: 1.5rem;<br>
border-inline-start: 3px solid;</div>
            </div>
        </div>
        
        <div class="toggle-buttons">
            <button class="active" onclick="setDir('ltr')">🇺🇸 English (LTR)</button>
            <button onclick="setDir('rtl')">🇸🇦 Arabic (RTL)</button>
        </div>
    </div>
    
    <script>
    function setDir(direction) {
        const container = document.getElementById('container');
        const notification = document.getElementById('notification');
        const notifTitle = document.getElementById('notifTitle');
        const cardTitle = document.getElementById('cardTitle');
        const cardHeading = document.getElementById('cardHeading');
        const cardText = document.getElementById('cardText');
        const buttons = document.querySelectorAll('.toggle-buttons button');
        
        container.setAttribute('dir', direction);
        
        if (direction === 'rtl') {
            notifTitle.innerHTML = '📢 مكون الإشعار';
            notification.innerHTML = '<strong>نجح!</strong> تم حفظ إعداداتك.';
            cardTitle.innerHTML = '📋 مكون البطاقة';
            cardHeading.textContent = 'عنوان البطاقة';
            cardText.textContent = 'البطاقات ذات الخصائص المنطقية تتكيف بسلاسة مع اتجاهات النص المختلفة!';
            buttons[1].classList.add('active');
            buttons[0].classList.remove('active');
        } else {
            notifTitle.innerHTML = '📢 Notification Component';
            notification.innerHTML = '<strong>Success!</strong> Your settings have been saved.';
            cardTitle.innerHTML = '📋 Card Component';
            cardHeading.textContent = 'Card Title';
            cardText.textContent = 'Cards with logical properties adapt seamlessly to different text directions!';
            buttons[0].classList.add('active');
            buttons[1].classList.remove('active');
        }
    }
    </script>
</body>
</html>`;

    const handleOpenPlayground = () => {
        if (onOpenWebPlayground) {
            onOpenWebPlayground(physicalVsLogicalExample, '', '');
        }
    };

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
            {/* PAGE HEADER */}
            <PageHeader
                icon={Compass}
                category="CSS · Advanced"
                title="CSS Logical Properties"
                description="Write direction-agnostic CSS that adapts to different writing modes and languages automatically - perfect for international websites."
                colorTheme="red"
            />

            {/* INTRODUCTION */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <Sparkles className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                        What are CSS Logical Properties?
                    </CardTitle>
                    <CardDescription>
                        Create truly international websites with CSS that automatically adapts to different writing directions
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Logical properties</strong> use abstract directions (like "start" and "end") instead of physical directions (like "left" and "right"). This makes your CSS automatically adapt to different <strong className="text-foreground">writing modes</strong> and <strong className="text-foreground">text directions</strong> used in various languages around the world.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                            <Globe className="h-6 w-6 text-red-600 dark:text-red-400 mb-2" />
                            <h4 className="font-semibold mb-2">International Ready</h4>
                            <p className="text-sm text-muted-foreground">
                                Works seamlessly with languages written in any direction
                            </p>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                            <Languages className="h-6 w-6 text-red-600 dark:text-red-400 mb-2" />
                            <h4 className="font-semibold mb-2">Flexible Layouts</h4>
                            <p className="text-sm text-muted-foreground">
                                Single CSS works for LTR, RTL, and vertical writing modes
                            </p>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                            <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-400 mb-2" />
                            <h4 className="font-semibold mb-2">Future Proof</h4>
                            <p className="text-sm text-muted-foreground">
                                Modern standard adopted by all major browsers
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* PHYSICAL VS LOGICAL DEMONSTRATION */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <Grid className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                        1. Physical vs Logical Properties
                    </CardTitle>
                    <CardDescription>
                        See the difference between physical and logical properties in action
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={physicalVsLogicalExample}
                        title="Interactive Physical vs Logical Demo"
                        colorTheme="red"
                        onOpenPlayground={handleOpenPlayground}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">💡 Key Differences:</h4>
                        <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Physical properties</strong> (left, right) are fixed to screen directions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Logical properties</strong> (inline-start, inline-end) adapt based on text direction</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>Use logical properties for truly international websites</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* COMPLETE EXAMPLE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <Layout className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                        2. Complete Component Examples
                    </CardTitle>
                    <CardDescription>
                        Real-world components built with logical properties
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={completeExample}
                        title="Logical Properties Components"
                        colorTheme="red"
                        onOpenPlayground={() => onOpenWebPlayground?.(completeExample, '', '')}
                    />
                </CardContent>
            </Card>

            {/* PROPERTY MAPPINGS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <Code className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                        Property Mapping Reference
                    </CardTitle>
                    <CardDescription>
                        Complete reference of physical to logical property conversions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <div className="p-3 rounded-lg bg-muted border">
                            <div className="font-mono text-sm mb-2">
                                <span className="text-red-600 dark:text-red-400 line-through">margin-left</span>
                                <span className="mx-2">→</span>
                                <span className="text-green-600 dark:text-green-400 font-semibold">margin-inline-start</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Start of the inline direction (left in LTR, right in RTL)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <div className="font-mono text-sm mb-2">
                                <span className="text-red-600 dark:text-red-400 line-through">margin-right</span>
                                <span className="mx-2">→</span>
                                <span className="text-green-600 dark:text-green-400 font-semibold">margin-inline-end</span>
                            </div>
                            <p className="text-sm text-muted-foreground">End of the inline direction (right in LTR, left in RTL)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <div className="font-mono text-sm mb-2">
                                <span className="text-red-600 dark:text-red-400 line-through">margin-top</span>
                                <span className="mx-2">→</span>
                                <span className="text-green-600 dark:text-green-400 font-semibold">margin-block-start</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Start of the block direction (top in horizontal text)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <div className="font-mono text-sm mb-2">
                                <span className="text-red-600 dark:text-red-400 line-through">margin-bottom</span>
                                <span className="mx-2">→</span>
                                <span className="text-green-600 dark:text-green-400 font-semibold">margin-block-end</span>
                            </div>
                            <p className="text-sm text-muted-foreground">End of the block direction (bottom in horizontal text)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <div className="font-mono text-sm mb-2">
                                <span className="text-red-600 dark:text-red-400 line-through">width</span>
                                <span className="mx-2">→</span>
                                <span className="text-green-600 dark:text-green-400 font-semibold">inline-size</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Size in the inline direction</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <div className="font-mono text-sm mb-2">
                                <span className="text-red-600 dark:text-red-400 line-through">height</span>
                                <span className="mx-2">→</span>
                                <span className="text-green-600 dark:text-green-400 font-semibold">block-size</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Size in the block direction</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900 dark:text-green-100">Best Practices</AlertTitle>
                <AlertDescription className="text-green-800 dark:text-green-200">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Start with logical properties</strong> - Use them in new projects from the beginning</li>
                        <li><strong>Gradual migration</strong> - Convert existing code property by property</li>
                        <li><strong>Test thoroughly</strong> - Check your layouts in both LTR and RTL directions</li>
                        <li><strong>Use fallbacks</strong> - Provide physical property fallbacks for older browsers if needed</li>
                        <li><strong>Document your choices</strong> - Comment why you use logical vs physical properties</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Excellent support across all modern browsers!</strong> CSS Logical Properties are supported in Chrome 87+, Firefox 66+, Safari 14.1+, and Edge 87+. Most logical properties have universal support in current browser versions.
                </AlertDescription>
            </Alert>
        </div>
    );
}
