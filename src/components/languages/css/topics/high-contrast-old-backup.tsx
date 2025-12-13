import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Contrast, Sparkles, CheckCircle, Code, Zap, Eye, Palette, Sun } from 'lucide-react';

interface HighContrastProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HighContrast({ onOpenWebPlayground }: HighContrastProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Contrast}
                category="CSS · Accessibility"
                title="High Contrast Mode"
                description="Optimize your designs for high contrast mode with prefers-contrast media query for better visibility"
                colorTheme="orange"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
                        <div className="relative">
                            <Contrast className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is High Contrast Mode?
                    </CardTitle>
                    <CardDescription className="text-lg text-orange-600 dark:text-orange-400">
                        🚀 Enhance readability for users with low vision by adapting your design to high contrast preferences!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-orange-400 dark:hover:border-orange-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    👁️ Contrast Preferences
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    The <strong className="text-foreground">prefers-contrast</strong> media query detects if users have requested higher or lower contrast in their system settings. This helps people with low vision, cataracts, or visual impairments see content more clearly.
                                </p>

                                {/* Contrast Visual */}
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-4 rounded-lg border border-orange-200/50">
                                    <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🔍 Visual Clarity
                                    </div>
                                    <div className="text-xs text-orange-600 dark:text-orange-400">
                                        285 million people worldwide have visual impairments - help them see better!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Contrast Values
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Sun className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">no-preference</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Default</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Contrast className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">more</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">High contrast</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Palette className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">less</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Low contrast</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Eye className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">custom</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">User defined</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-yellow-900/30 p-6 rounded-xl border border-orange-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🔍</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-orange-700 dark:text-orange-300">High Contrast</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better visibility
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Clear boundaries
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Readable text
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
                                        Windows: Settings → Accessibility → Contrast themes to test high contrast mode!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Prefers Contrast</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🔍 Enhance contrast for better visibility */</div>
                            <div className="text-purple-700 dark:text-purple-400">@media (prefers-contrast: more)</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">.card</span> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">border-width</span>: <span className="text-yellow-600 dark:text-yellow-400">3px</span>;</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">border-color</span>: <span className="text-yellow-600 dark:text-yellow-400">#000</span>;</div>
                            <div className="text-gray-900 dark:text-white">   {'}'}</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* HIGH CONTRAST MORE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Contrast className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        High Contrast (more)
                    </CardTitle>
                    <CardDescription>
                        Increase contrast for users with low vision
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="High Contrast Enhancement"
                        html={`<div class="content-card">
  <div class="card-header">
    <h2>Welcome to Our Platform</h2>
    <span class="badge">New</span>
  </div>
  
  <p class="description">
    Discover amazing features and tools that will help you build better products faster.
  </p>
  
  <div class="button-group">
    <button class="btn-primary">Get Started</button>
    <button class="btn-secondary">Learn More</button>
  </div>
  
  <div class="info-box">
    <span class="icon">💡</span>
    <p>Pro tip: Use keyboard shortcuts for faster navigation!</p>
  </div>
</div>`}
                        css={`.content-card {
  max-width: 600px;
  margin: 20px auto;
  padding: 32px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

h2 {
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.badge {
  padding: 6px 12px;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.description {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: white;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.btn-secondary:hover {
  background: #eff6ff;
}

.info-box {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: 8px;
}

.icon {
  font-size: 24px;
  flex-shrink: 0;
}

.info-box p {
  margin: 0;
  color: #78350f;
  font-size: 15px;
}

/* 🔍 HIGH CONTRAST MODE - Enhance visibility */
@media (prefers-contrast: more) {
  .content-card {
    border-width: 3px;
    border-color: #000000;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  h2 {
    color: #000000;
    font-weight: 800;
  }
  
  .badge {
    background: #000000;
    color: #ffffff;
    border: 2px solid #000000;
  }
  
  .description {
    color: #000000;
    font-weight: 500;
  }
  
  .btn-primary {
    background: #000000;
    color: #ffffff;
    border: 3px solid #000000;
  }
  
  .btn-secondary {
    background: #ffffff;
    color: #000000;
    border: 3px solid #000000;
  }
  
  .info-box {
    background: #ffffff;
    border: 3px solid #000000;
    border-left-width: 6px;
  }
  
  .info-box p {
    color: #000000;
    font-weight: 600;
  }
}

@media (prefers-color-scheme: dark) {
  .content-card {
    background: #1f2937;
    border-color: #374151;
  }
  
  h2 {
    color: #f9fafb;
  }
  
  .badge {
    background: #1e3a8a;
    color: #dbeafe;
  }
  
  .description {
    color: #d1d5db;
  }
  
  .btn-secondary {
    background: #1f2937;
  }
  
  .info-box {
    background: #78350f;
  }
  
  .info-box p {
    color: #fef3c7;
  }
  
  @media (prefers-contrast: more) {
    .content-card {
      border-color: #ffffff;
    }
    
    h2,
    .description,
    .info-box p {
      color: #ffffff;
    }
    
    .badge {
      background: #ffffff;
      color: #000000;
      border: 3px solid #ffffff;
    }
    
    .btn-primary {
      background: #ffffff;
      color: #000000;
      border: 3px solid #ffffff;
    }
    
    .btn-secondary {
      background: #000000;
      color: #ffffff;
      border: 3px solid #ffffff;
    }
    
    .info-box {
      background: #000000;
      border-color: #ffffff;
    }
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* LOW CONTRAST */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Palette className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Low Contrast (less)
                    </CardTitle>
                    <CardDescription>
                        Reduce contrast for users sensitive to high contrast
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Low Contrast Adjustment"
                        html={`<div class="dashboard">
  <nav class="sidebar">
    <h3>Menu</h3>
    <ul>
      <li class="active">Dashboard</li>
      <li>Analytics</li>
      <li>Settings</li>
      <li>Profile</li>
    </ul>
  </nav>
  
  <main class="main-content">
    <header class="page-header">
      <h1>Dashboard Overview</h1>
      <span class="status">Online</span>
    </header>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">2,847</div>
        <div class="stat-label">Total Users</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-value">$12,450</div>
        <div class="stat-label">Revenue</div>
      </div>
    </div>
  </main>
</div>`}
                        css={`.dashboard {
  display: flex;
  min-height: 400px;
  background: #f9fafb;
  border-radius: 12px;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background: #ffffff;
  padding: 24px;
  border-right: 2px solid #e5e7eb;
}

.sidebar h3 {
  margin: 0 0 20px 0;
  color: #111827;
  font-size: 18px;
  font-weight: 700;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 12px 16px;
  margin-bottom: 8px;
  color: #6b7280;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.sidebar li:hover {
  background: #f3f4f6;
  color: #374151;
}

.sidebar li.active {
  background: #dbeafe;
  color: #1e40af;
}

.main-content {
  flex: 1;
  padding: 24px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

h1 {
  margin: 0;
  color: #111827;
  font-size: 28px;
  font-weight: 700;
}

.status {
  padding: 6px 12px;
  background: #dcfce7;
  color: #166534;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  padding: 24px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.stat-label {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}

/* 🎨 LOW CONTRAST MODE - Soften colors */
@media (prefers-contrast: less) {
  .sidebar {
    border-right-color: #f3f4f6;
  }
  
  .sidebar h3 {
    color: #6b7280;
  }
  
  .sidebar li {
    color: #9ca3af;
  }
  
  .sidebar li.active {
    background: #f3f4f6;
    color: #6b7280;
  }
  
  h1 {
    color: #6b7280;
  }
  
  .status {
    background: #f3f4f6;
    color: #6b7280;
  }
  
  .stat-card {
    border-color: #f3f4f6;
  }
  
  .stat-value {
    color: #6b7280;
  }
  
  .stat-label {
    color: #9ca3af;
  }
}

@media (prefers-color-scheme: dark) {
  .dashboard {
    background: #0f172a;
  }
  
  .sidebar {
    background: #1e293b;
    border-right-color: #334155;
  }
  
  .sidebar h3 {
    color: #f1f5f9;
  }
  
  .sidebar li {
    color: #cbd5e1;
  }
  
  .sidebar li.active {
    background: #1e3a8a;
    color: #dbeafe;
  }
  
  .main-content {
    background: #0f172a;
  }
  
  h1 {
    color: #f1f5f9;
  }
  
  .status {
    background: #064e3b;
    color: #86efac;
  }
  
  .stat-card {
    background: #1e293b;
    border-color: #334155;
  }
  
  .stat-value {
    color: #f1f5f9;
  }
  
  .stat-label {
    color: #cbd5e1;
  }
}`}
                        colorTheme="green"
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
                            <strong className="text-orange-900 dark:text-orange-200">Increase border thickness:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Make borders thicker (2-3px) for better element separation in high contrast mode.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Use stronger colors:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Switch to pure black (#000) and white (#fff) for maximum contrast.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Add visual weight:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Increase font weight to make text more readable in high contrast.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Test with real users:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Use Windows High Contrast themes to test your implementation.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Good Browser Support</strong>
                    prefers-contrast is supported in Chrome 96+, Edge 96+, and Safari 14.1+. Firefox support is limited. Always test with actual high contrast modes.
                </AlertDescription>
            </Alert>
        </div>
    );
}
