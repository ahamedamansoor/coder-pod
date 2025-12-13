import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Eye, Sparkles, CheckCircle, Code, Zap, Users, AlertTriangle, Heart } from 'lucide-react';

interface CssAccessibilityProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAccessibility({ onOpenWebPlayground }: CssAccessibilityProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Users}
                category="CSS · Accessibility"
                title="CSS Accessibility"
                description="Build inclusive web experiences with CSS best practices for screen readers, keyboard navigation, and assistive technologies"
                colorTheme="green"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-emerald-600 dark:text-emerald-400">
                        <div className="relative">
                            <Users className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Accessibility?
                    </CardTitle>
                    <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
                        🚀 Make your website usable for everyone - including people with disabilities using assistive technologies!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    ♿ Web Accessibility
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Accessibility</strong> ensures your website is usable by everyone, including people with visual, motor, auditory, or cognitive disabilities. Good CSS practices make content accessible to screen readers, keyboard users, and assistive technologies.
                                </p>

                                {/* Accessibility Visual */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🌍 Universal Design
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        1 in 4 adults has a disability - accessible design benefits everyone!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    ♿ Key Areas
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Eye className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Visual</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Color contrast</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Heart className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Motor</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Keyboard nav</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Users className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Screen Readers</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Hidden content</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <AlertTriangle className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Motion</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Reduce motion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-green-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">♿</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-green-700 dark:text-green-300">Inclusive Design</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better SEO
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Legal compliance
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            More users
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💡</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Test with keyboard only (no mouse) and screen readers like NVDA or VoiceOver!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code Example */}
                    <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Screen Reader Only Text</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* ♿ Visually hidden but screen reader accessible */</div>
                            <div className="text-blue-600 dark:text-blue-400">.sr-only</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">position</span>: <span className="text-yellow-600 dark:text-yellow-400">absolute</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">width</span>: <span className="text-yellow-600 dark:text-yellow-400">1px</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">height</span>: <span className="text-yellow-600 dark:text-yellow-400">1px</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">clip</span>: <span className="text-yellow-600 dark:text-yellow-400">rect(0, 0, 0, 0)</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">overflow</span>: <span className="text-yellow-600 dark:text-yellow-400">hidden</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* SCREEN READER ONLY TEXT */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Screen Reader Only Content
                    </CardTitle>
                    <CardDescription>
                        Hide content visually but keep it accessible to screen readers
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Screen Reader Only Class"
                        html={`<nav>
  <ul class="nav-list">
    <li><a href="#home">Home</a></li>
    <li>
      <a href="#about">
        <span class="sr-only">Navigate to </span>About
      </a>
    </li>
    <li>
      <a href="#services">
        <span class="sr-only">Navigate to </span>Services
      </a>
    </li>
    <li>
      <a href="#contact">
        <span class="sr-only">Navigate to </span>Contact
      </a>
    </li>
  </ul>
</nav>

<button class="icon-button">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 7L10 16L5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <span class="sr-only">Mark as complete</span>
</button>

<div class="status-indicator success">
  <span class="sr-only">Success: </span>
  Form submitted successfully!
</div>`}
                        css={`/* Screen Reader Only utility class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Alternative: Clip-path method (modern) */
.sr-only-modern {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Navigation */
.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 20px;
  background: white;
  border-radius: 12px;
}

.nav-list a {
  text-decoration: none;
  color: #3b82f6;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.3s;
}

.nav-list a:hover {
  background: #dbeafe;
}

.nav-list a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Icon button */
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  background: #3b82f6;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 20px;
}

.icon-button:hover {
  background: #2563eb;
  transform: scale(1.05);
}

.icon-button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Status indicator */
.status-indicator {
  padding: 16px 20px;
  border-radius: 12px;
  font-weight: 500;
  margin-top: 20px;
}

.status-indicator.success {
  background: #dcfce7;
  color: #166534;
  border-left: 4px solid #22c55e;
}

@media (prefers-color-scheme: dark) {
  .nav-list {
    background: #1f2937;
  }
  
  .nav-list a {
    color: #60a5fa;
  }
  
  .nav-list a:hover {
    background: #1e3a8a;
  }
  
  .status-indicator.success {
    background: #064e3b;
    color: #86efac;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* SKIP LINKS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Skip Navigation Links
                    </CardTitle>
                    <CardDescription>
                        Allow keyboard users to skip repetitive content
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Skip to Main Content"
                        html={`<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<nav class="main-nav">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#products">Products</a>
  <a href="#team">Team</a>
  <a href="#contact">Contact</a>
</nav>

<main id="main-content">
  <h1>Main Content Area</h1>
  <p>Press Tab key to see the skip link appear at the top!</p>
  <p>This allows keyboard users to jump directly to the main content without tabbing through all navigation links.</p>
</main>`}
                        css={`/* Skip link - hidden until focused */
.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  background: #3b82f6;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 0 0 8px 0;
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index: 9999;
}

.skip-link:focus {
  transform: translateY(0);
  outline: 2px solid #1e40af;
  outline-offset: 2px;
}

/* Navigation */
.main-nav {
  display: flex;
  gap: 8px;
  padding: 20px;
  background: white;
  border-bottom: 2px solid #e5e7eb;
  flex-wrap: wrap;
}

.main-nav a {
  padding: 10px 16px;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s;
}

.main-nav a:hover {
  background: #f3f4f6;
  color: #3b82f6;
}

.main-nav a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  background: #dbeafe;
}

/* Main content */
main {
  padding: 40px 20px;
  max-width: 800px;
}

h1 {
  color: #111827;
  margin-bottom: 20px;
  font-size: 28px;
}

p {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 16px;
}

@media (prefers-color-scheme: dark) {
  .skip-link {
    background: #60a5fa;
    color: #1e293b;
  }
  
  .main-nav {
    background: #1f2937;
    border-bottom-color: #374151;
  }
  
  .main-nav a {
    color: #e5e7eb;
  }
  
  .main-nav a:hover {
    background: #374151;
    color: #60a5fa;
  }
  
  .main-nav a:focus {
    background: #1e3a8a;
  }
  
  h1 {
    color: #f9fafb;
  }
  
  p {
    color: #d1d5db;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* COLOR CONTRAST */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Color Contrast
                    </CardTitle>
                    <CardDescription>
                        Ensure sufficient contrast for readability (WCAG guidelines)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Contrast Examples"
                        html={`<div class="contrast-demo">
  <div class="contrast-section">
    <h3>❌ Poor Contrast (Fails WCAG)</h3>
    <div class="poor-contrast">
      <p class="text-poor">This text is hard to read (2.5:1 ratio)</p>
      <button class="btn-poor">Low Contrast Button</button>
    </div>
  </div>
  
  <div class="contrast-section">
    <h3>✅ Good Contrast (Passes WCAG AA)</h3>
    <div class="good-contrast">
      <p class="text-good">This text is readable (4.5:1 ratio)</p>
      <button class="btn-good">Good Contrast Button</button>
    </div>
  </div>
  
  <div class="contrast-section">
    <h3>⭐ Excellent Contrast (Passes WCAG AAA)</h3>
    <div class="excellent-contrast">
      <p class="text-excellent">This text is very readable (7:1 ratio)</p>
      <button class="btn-excellent">Excellent Contrast Button</button>
    </div>
  </div>
</div>`}
                        css={`.contrast-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
}

.contrast-section h3 {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
  color: #374151;
}

/* Poor Contrast - FAILS WCAG (< 3:1) */
.poor-contrast {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #ef4444;
}

.text-poor {
  color: #d1d5db;
  font-size: 16px;
  margin-bottom: 16px;
}

.btn-poor {
  background: #fecaca;
  color: #fee2e2;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

/* Good Contrast - PASSES WCAG AA (4.5:1) */
.good-contrast {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
}

.text-good {
  color: #1f2937;
  font-size: 16px;
  margin-bottom: 16px;
}

.btn-good {
  background: #3b82f6;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-good:hover {
  background: #2563eb;
}

/* Excellent Contrast - PASSES WCAG AAA (7:1) */
.excellent-contrast {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #22c55e;
}

.text-excellent {
  color: #000000;
  font-size: 16px;
  margin-bottom: 16px;
}

.btn-excellent {
  background: #000000;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-excellent:hover {
  background: #1f2937;
}

@media (prefers-color-scheme: dark) {
  .contrast-section h3 {
    color: #e5e7eb;
  }
  
  .poor-contrast,
  .good-contrast,
  .excellent-contrast {
    background: #1f2937;
  }
  
  .text-poor {
    color: #4b5563;
  }
  
  .btn-poor {
    background: #374151;
    color: #4b5563;
  }
  
  .text-good {
    color: #e5e7eb;
  }
  
  .text-excellent {
    color: #ffffff;
  }
}`}
                        colorTheme="orange"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Sparkles className="w-5 h-5" />
                        Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Test with real users:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Use automated tools (WAVE, axe) but also test with actual screen readers and keyboard navigation.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Use semantic HTML:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Proper HTML elements provide built-in accessibility - don't override with CSS unnecessarily.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Visible focus indicators:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Never remove focus outlines without providing better alternatives.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Text alternatives:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Always provide text alternatives for icon-only buttons and links.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* WCAG STANDARDS */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">WCAG Standards</strong>
                    Follow WCAG 2.1 guidelines: Level AA requires 4.5:1 contrast for normal text, 3:1 for large text. Level AAA requires 7:1 for normal text, 4.5:1 for large text.
                </AlertDescription>
            </Alert>
        </div>
    );
}
