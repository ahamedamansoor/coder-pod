import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Pause, Sparkles, CheckCircle, Code, Zap, Play, AlertTriangle, Heart } from 'lucide-react';

interface ReducedMotionProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ReducedMotion({ onOpenWebPlayground }: ReducedMotionProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Pause}
                category="CSS · Accessibility"
                title="Reduced Motion"
                description="Respect user motion preferences with prefers-reduced-motion media query for accessible animations"
                colorTheme="pink"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-pink-600 dark:text-pink-400">
                        <div className="relative">
                            <Pause className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is Reduced Motion?
                    </CardTitle>
                    <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
                        🚀 Make your animations accessible by respecting user preferences for reduced motion - critical for vestibular disorders!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-pink-400 dark:hover:border-pink-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-pink-600 dark:text-pink-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🎬 Motion Preferences
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    The <strong className="text-foreground">prefers-reduced-motion</strong> media query detects if users have requested less motion in their OS settings. People with vestibular disorders or motion sensitivity can experience dizziness, nausea, or seizures from animations.
                                </p>

                                {/* Motion Visual */}
                                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-lg border border-pink-200/50">
                                    <div className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        ⚡ Health Impact
                                    </div>
                                    <div className="text-xs text-pink-600 dark:text-pink-400">
                                        35% of users have motion sensitivity - respect their preferences!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-pink-600 dark:text-pink-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Motion Strategies
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Pause className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Disable Animations</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Remove all motion</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Play className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Subtle Motion</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Gentle transitions</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <AlertTriangle className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Instant Updates</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">No parallax</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Heart className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Fade Only</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Opacity changes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">⏸️</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-pink-700 dark:text-pink-300">Reduced Motion</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Health safety
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            User respect
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better UX
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
                                        Use mobile/desktop settings to test: macOS → Accessibility → Display → Reduce Motion
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Prefers Reduced Motion</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* ⏸️ Disable animations if user prefers */</div>
                            <div className="text-purple-700 dark:text-purple-400">@media (prefers-reduced-motion: reduce)</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">*</span> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">animation-duration</span>: <span className="text-yellow-600 dark:text-yellow-400">0.01ms</span> <span className="text-gray-600 dark:text-gray-400">!important</span>;</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">transition-duration</span>: <span className="text-yellow-600 dark:text-yellow-400">0.01ms</span> <span className="text-gray-600 dark:text-gray-400">!important</span>;</div>
                            <div className="text-gray-900 dark:text-white">   {'}'}</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC USAGE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Pause className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Basic Implementation
                    </CardTitle>
                    <CardDescription>
                        Disable animations for users who prefer reduced motion
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Reduced Motion Example"
                        html={`<div class="demo-container">
  <h2>Animation Examples</h2>
  <p class="info">💡 Enable "Reduce Motion" in your OS settings to see the difference!</p>
  
  <div class="box spinning">
    <span>Spinning Box</span>
  </div>
  
  <div class="box sliding">
    <span>Sliding Box</span>
  </div>
  
  <div class="box bouncing">
    <span>Bouncing Box</span>
  </div>
  
  <button class="animated-button">
    Click Me
  </button>
</div>`}
                        css={`.demo-container {
  padding: 20px;
  text-align: center;
}

h2 {
  color: #111827;
  margin-bottom: 12px;
  font-size: 24px;
}

.info {
  color: #6b7280;
  margin-bottom: 32px;
  padding: 12px;
  background: #fef3c7;
  border-radius: 8px;
  display: inline-block;
}

.box {
  width: 120px;
  height: 120px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Spinning animation */
.spinning {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Sliding animation */
.sliding {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  animation: slide 2s ease-in-out infinite;
}

@keyframes slide {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(100px); }
}

/* Bouncing animation */
.bouncing {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  animation: bounce 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

/* Animated button */
.animated-button {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animated-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

/* ⏸️ REDUCED MOTION - Disable all animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .info {
    background: #dcfce7;
    border: 2px solid #22c55e;
  }
  
  .info::before {
    content: '✅ Reduced motion is enabled! ';
  }
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f9fafb;
  }
  
  .info {
    color: #e5e7eb;
    background: #78350f;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .info {
      background: #064e3b;
    }
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* PROGRESSIVE APPROACH */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Progressive Enhancement
                    </CardTitle>
                    <CardDescription>
                        Keep subtle motion for better UX while respecting preferences
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Subtle Motion Alternative"
                        html={`<div class="cards-container">
  <div class="card">
    <div class="card-icon">🚀</div>
    <h3>Fast Loading</h3>
    <p>Optimized performance with lazy loading</p>
  </div>
  
  <div class="card">
    <div class="card-icon">🎨</div>
    <h3>Beautiful Design</h3>
    <p>Modern interface with smooth interactions</p>
  </div>
  
  <div class="card">
    <div class="card-icon">⚡</div>
    <h3>Lightning Fast</h3>
    <p>Instant response with zero delays</p>
  </div>
</div>`}
                        css={`.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px;
}

.card {
  padding: 32px 24px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  
  /* Full animations by default */
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card:hover {
  transform: translateY(-12px) rotate(2deg);
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 16px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

h3 {
  color: #111827;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 700;
}

p {
  color: #6b7280;
  line-height: 1.5;
  font-size: 15px;
}

/* 🎯 REDUCED MOTION - Keep functionality, reduce motion */
@media (prefers-reduced-motion: reduce) {
  .card {
    /* Replace movement with subtle fade and scale */
    transition: opacity 0.2s ease, 
                box-shadow 0.2s ease;
  }
  
  .card:hover {
    /* No position change or rotation */
    transform: none;
    /* Keep the focus indication */
    opacity: 0.9;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  }
  
  /* Remove floating animation */
  .card-icon {
    animation: none;
  }
}

@media (prefers-color-scheme: dark) {
  .card {
    background: #1f2937;
    border-color: #374151;
  }
  
  .card:hover {
    border-color: #60a5fa;
  }
  
  h3 {
    color: #f9fafb;
  }
  
  p {
    color: #d1d5db;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* GLOBAL RESET */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Global Motion Reset
                    </CardTitle>
                    <CardDescription>
                        Disable all animations site-wide for reduced motion users
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Universal Motion Disable"
                        html={`<div class="motion-demo">
  <div class="loader"></div>
  
  <div class="notification">
    <span class="icon">🔔</span>
    New message received!
  </div>
  
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
  
  <button class="action-btn">
    <span class="btn-text">Submit Form</span>
    <span class="btn-icon">→</span>
  </button>
</div>`}
                        css={`.motion-demo {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

/* Spinning loader */
.loader {
  width: 60px;
  height: 60px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Sliding notification */
.notification {
  padding: 16px 24px;
  background: #dbeafe;
  border-left: 4px solid #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.icon {
  font-size: 24px;
  animation: wiggle 0.5s ease infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

/* Animated progress bar */
.progress-bar {
  width: 300px;
  height: 12px;
  background: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 6px;
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

/* Animated button */
.action-btn {
  padding: 16px 32px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: #059669;
  transform: scale(1.05);
}

.btn-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.action-btn:hover .btn-icon {
  transform: translateX(4px);
}

/* 🚫 GLOBAL RESET for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Show instant states instead */
  .progress-fill {
    width: 70%;
  }
  
  .notification {
    transform: translateX(0);
    opacity: 1;
  }
  
  /* Keep hover feedback but remove motion */
  .action-btn:hover {
    transform: none;
    opacity: 0.9;
  }
}

@media (prefers-color-scheme: dark) {
  .loader {
    border-color: #374151;
    border-top-color: #60a5fa;
  }
  
  .notification {
    background: #1e3a8a;
    border-left-color: #60a5fa;
    color: #e5e7eb;
  }
  
  .progress-bar {
    background: #374151;
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
                            <strong className="text-orange-900 dark:text-orange-200">Don't remove all motion:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Consider keeping subtle transitions (opacity, color) while removing position/rotation changes.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Maintain functionality:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Ensure interactive elements still provide visual feedback, just without motion.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Test your implementation:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Enable "Reduce Motion" in your OS and navigate your entire site.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Avoid parallax scrolling:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Parallax effects are particularly problematic for vestibular disorders - always disable them.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Excellent Browser Support</strong>
                    prefers-reduced-motion is supported in all modern browsers (Chrome 74+, Firefox 63+, Safari 10.1+). Always include this for accessibility compliance.
                </AlertDescription>
            </Alert>
        </div>
    );
}
