'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Layers, Code, Eye, EyeOff, Sparkles, GitBranch, AlertTriangle, CheckCircle, Copy, BookOpen, Zap } from 'lucide-react';
import React, { useState } from 'react';

export default function SassAdvancedNesting({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('bem');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'BEM', icon: GitBranch, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Block Element Modifier', ex: '.block__element--modifier' },
        { type: 'Media Queries', icon: Layers, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Nested @media', ex: '@media { ... }' },
        { type: 'Parent Chain', icon: Zap, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Multiple &', ex: '& & &' },
        { type: 'Context', icon: AlertTriangle, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Contextual styles', ex: '.theme & { ... }' }
    ];

    const examples = {
        bem: {
            title: 'BEM with Nesting',
            html: '<div class="card card--featured">\n  <div class="card__header">\n    <h2 class="card__title card__title--large">Title</h2>\n  </div>\n  <div class="card__body">Content</div>\n</div>',
            scss: '// BEM METHODOLOGY WITH NESTING\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  \n  // Element: Header\n  &__header {\n    border-bottom: 1px solid #e5e7eb;\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n  }\n  \n  // Element: Title\n  &__title {\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0;\n    \n    // Modifier: Large\n    &--large {\n      font-size: 1.5rem;\n      color: #3b82f6;\n    }\n    \n    // Modifier: Small\n    &--small {\n      font-size: 1rem;\n    }\n  }\n  \n  // Element: Body\n  &__body {\n    color: #4b5563;\n    line-height: 1.6;\n  }\n  \n  // Modifier: Featured\n  &--featured {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    \n    #{&}__header {\n      border-bottom-color: rgba(255,255,255,0.2);\n    }\n    \n    #{&}__title {\n      color: white;\n    }\n    \n    #{&}__body {\n      color: rgba(255,255,255,0.9);\n    }\n  }\n}',
            css: '.card {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.card__header {\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n}\n\n.card__title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n\n.card__title--large {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n\n.card__body {\n  color: #4b5563;\n  line-height: 1.6;\n}\n\n.card--featured {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n}\n\n.card--featured .card__header {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n\n.card--featured .card__title {\n  color: white;\n}'
        },
        media: {
            title: 'Nested Media Queries',
            html: '<div class="responsive-component">\n  <p>Responsive Content</p>\n</div>',
            scss: '// NESTED MEDIA QUERIES\n.responsive-component {\n  padding: 1rem;\n  font-size: 1rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  \n  // Mobile styles nested inside\n  @media (max-width: 640px) {\n    padding: 0.5rem;\n    font-size: 0.875rem;\n    \n    p {\n      margin: 0.5rem 0;\n    }\n  }\n  \n  // Tablet styles\n  @media (min-width: 641px) and (max-width: 1024px) {\n    padding: 1.5rem;\n    font-size: 1rem;\n    \n    p {\n      margin: 1rem 0;\n    }\n  }\n  \n  // Desktop styles\n  @media (min-width: 1025px) {\n    padding: 2rem;\n    font-size: 1.125rem;\n    \n    p {\n      margin: 1.5rem 0;\n    }\n    \n    // Nested hover on desktop only\n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n    }\n  }\n  \n  // Dark mode nested\n  @media (prefers-color-scheme: dark) {\n    background: linear-gradient(135deg, #1e3a8a, #7c3aed);\n  }\n}',
            css: '.responsive-component {\n  padding: 1rem;\n  font-size: 1rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n}\n\n@media (max-width: 640px) {\n  .responsive-component {\n    padding: 0.5rem;\n    font-size: 0.875rem;\n  }\n  .responsive-component p {\n    margin: 0.5rem 0;\n  }\n}\n\n@media (min-width: 641px) and (max-width: 1024px) {\n  .responsive-component {\n    padding: 1.5rem;\n    font-size: 1rem;\n  }\n  .responsive-component p {\n    margin: 1rem 0;\n  }\n}\n\n@media (min-width: 1025px) {\n  .responsive-component {\n    padding: 2rem;\n    font-size: 1.125rem;\n  }\n  .responsive-component p {\n    margin: 1.5rem 0;\n  }\n  .responsive-component:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  }\n}'
        },
        context: {
            title: 'Contextual Nesting',
            html: '<div class="theme-dark">\n  <button class="button">Dark Theme Button</button>\n</div>\n<div class="theme-light">\n  <button class="button">Light Theme Button</button>\n</div>',
            scss: '// CONTEXTUAL NESTING\n.button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  \n  // Default (light theme)\n  background: #3b82f6;\n  color: white;\n  \n  // Dark theme context\n  .theme-dark & {\n    background: #1e293b;\n    color: #f1f5f9;\n    border: 1px solid #475569;\n    \n    &:hover {\n      background: #334155;\n      border-color: #64748b;\n    }\n  }\n  \n  // Light theme context\n  .theme-light & {\n    background: #eff6ff;\n    color: #1e40af;\n    border: 1px solid #bfdbfe;\n    \n    &:hover {\n      background: #dbeafe;\n      border-color: #93c5fd;\n    }\n  }\n  \n  // Sidebar context\n  .sidebar & {\n    width: 100%;\n    font-size: 0.875rem;\n    padding: 0.5rem 1rem;\n  }\n  \n  // Modal context\n  .modal & {\n    margin-top: 1rem;\n    \n    & + & {\n      margin-left: 0.5rem;\n    }\n  }\n}',
            css: '.button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #3b82f6;\n  color: white;\n}\n\n.theme-dark .button {\n  background: #1e293b;\n  color: #f1f5f9;\n  border: 1px solid #475569;\n}\n\n.theme-dark .button:hover {\n  background: #334155;\n  border-color: #64748b;\n}\n\n.theme-light .button {\n  background: #eff6ff;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n\n.theme-light .button:hover {\n  background: #dbeafe;\n  border-color: #93c5fd;\n}\n\n.sidebar .button {\n  width: 100%;\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n}\n\n.modal .button {\n  margin-top: 1rem;\n}\n\n.modal .button + .button {\n  margin-left: 0.5rem;\n}'
        },
        complex: {
            title: 'Complex Parent Chains',
            html: '<div class="component component--active">\n  <div class="component__item">Item</div>\n</div>',
            scss: '// COMPLEX PARENT SELECTOR CHAINS\n.component {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  \n  // Multiple parent references\n  &--active&--highlighted {\n    background: linear-gradient(135deg, #fef3c7, #fcd34d);\n    border: 2px solid #f59e0b;\n  }\n  \n  // Parent selector in middle\n  .container & {\n    max-width: 100%;\n  }\n  \n  // Adjacent sibling with parent\n  & + & {\n    margin-top: 1rem;\n  }\n  \n  // Direct child with parent\n  & > &__item {\n    padding: 0.5rem;\n    \n    // Grandparent reference\n    &--special {\n      background: linear-gradient(135deg, #a78bfa, #8b5cf6);\n      color: white;\n    }\n  }\n  \n  // State with parent modifier\n  &--active {\n    border: 2px solid #3b82f6;\n    \n    & #{&}__item {\n      background: #dbeafe;\n      color: #1e40af;\n      font-weight: 600;\n    }\n    \n    &:hover {\n      border-color: #2563eb;\n      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n    }\n  }\n  \n  // Multiple contexts\n  .dark-theme &,\n  .high-contrast & {\n    border: 1px solid #64748b;\n  }\n}',
            css: '.component {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n}\n\n.component--active.component--highlighted {\n  background: linear-gradient(135deg, #fef3c7, #fcd34d);\n  border: 2px solid #f59e0b;\n}\n\n.container .component {\n  max-width: 100%;\n}\n\n.component + .component {\n  margin-top: 1rem;\n}\n\n.component > .component__item {\n  padding: 0.5rem;\n}\n\n.component > .component__item--special {\n  background: linear-gradient(135deg, #a78bfa, #8b5cf6);\n  color: white;\n}\n\n.component--active {\n  border: 2px solid #3b82f6;\n}\n\n.component--active .component--active__item {\n  background: #dbeafe;\n  color: #1e40af;\n  font-weight: 600;\n}\n\n.component--active:hover {\n  border-color: #2563eb;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layers className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Advanced Sass Nesting</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master complex nesting patterns, BEM methodology, and contextual styling for professional Sass architectures.</p>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        Advanced Nesting Patterns
                    </CardTitle>
                    <CardDescription>
                        Go beyond basic nesting with powerful patterns for BEM, responsive design, theming, and complex selector combinations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {categories.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div key={i} className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                                    <div className={`w-12 h-12 ${c.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <Icon className={`w-6 h-6 ${c.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-1">{c.type}</h3>
                                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><GitBranch className="w-6 h-6" />Nesting Depth Visual Guide</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                <h3 className="font-semibold text-red-700 dark:text-red-300">❌ Too Deep (Avoid)</h3>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-xs space-y-1">
                                <div>.parent {'{'}</div>
                                <div className="ml-4">.child {'{'}</div>
                                <div className="ml-8">.grandchild {'{'}</div>
                                <div className="ml-12">.great-grandchild {'{'}</div>
                                <div className="ml-16 text-red-600">// Too specific! 🚫</div>
                            </div>
                            <p className="text-xs text-red-600 dark:text-red-400 mt-3">Over-nesting creates overly specific selectors that are hard to override</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200">
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <h3 className="font-semibold text-green-700 dark:text-green-300">✅ Good Depth (Max 3-4)</h3>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-xs space-y-1">
                                <div>.card {'{'}</div>
                                <div className="ml-4">&__header {'{'}</div>
                                <div className="ml-8">&:hover {'{'}</div>
                                <div className="ml-12 text-green-600">// Perfect! ✓</div>
                            </div>
                            <p className="text-xs text-green-600 dark:text-green-400 mt-3">Maintains readability and reasonable specificity</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Advanced Pattern Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {categories.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div key={i} className={`p-4 rounded-lg border ${c.bgColor} ${c.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <Icon className={`w-5 h-5 ${c.color} mb-2`} />
                                    <h3 className="font-bold text-sm mb-1">{c.type}</h3>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block break-words">{c.ex}</code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Play className="w-6 h-6" />Interactive Examples</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(examples).map(([key, ex]) => (
                            <Button key={key} variant={selectedExample === key ? "default" : "outline"} onClick={() => setSelectedExample(key)} size="sm">
                                {ex.title}
                            </Button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">SCSS</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{examples[selectedExample as keyof typeof examples].scss}</pre>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">CSS</h3>
                                <Button variant="ghost" size="sm" onClick={() => setShowOutput(!showOutput)}>
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? examples[selectedExample as keyof typeof examples].css : 'Click eye to reveal'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-emerald-600 to-teal-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Best Practices & Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700 dark:text-green-300">
                                    <CheckCircle className="w-4 h-4" />
                                    Do's
                                </h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Keep nesting max 3-4 levels deep</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Use & for BEM modifiers and states</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Nest media queries within selectors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Use contextual nesting for themes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-700 dark:text-red-300">
                                    <AlertTriangle className="w-4 h-4" />
                                    Don'ts
                                </h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Don't nest deeper than 4 levels</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Don't mirror entire HTML structure</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Don't nest unrelated selectors together</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Don't create overly specific selectors</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
