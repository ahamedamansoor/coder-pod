'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  Zap,
  TrendingUp,
  Activity,
  Eye,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Target,
  BarChart3,
} from 'lucide-react';

export default function JavaScriptLighthouseNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Gauge}
        category="JavaScript Design Patterns"
        title="Google Lighthouse"
        description="Automated performance auditing and optimization"
        colorTheme="yellow"
      />

      {/* What is Lighthouse? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-teal-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Lighthouse: Your Performance Guide 🚀
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-blue-700 dark:text-blue-400">Google Lighthouse</strong> is an automated, open-source tool built into Chrome DevTools that audits your web app for performance, accessibility, best practices, SEO, and Progressive Web App features. It gives you a score (0-100) for each category and provides actionable recommendations to improve.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">Why Use Lighthouse?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              It's free, built-in, and gives you a comprehensive health check in minutes. Perfect for identifying issues and tracking improvements over time!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 5 Categories Lighthouse Audits */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>5 Categories Lighthouse Audits</CardTitle>
              <CardDescription>What Lighthouse measures and why it matters</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Performance */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-500 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">1. Performance (0-100)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Measures how fast your page loads and becomes interactive. This is the most important category for user experience.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-2">Key Metrics Measured:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>First Contentful Paint (FCP):</strong> When first content appears</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Largest Contentful Paint (LCP):</strong> When main content is visible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Total Blocking Time (TBT):</strong> How long page is unresponsive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Cumulative Layout Shift (CLS):</strong> Visual stability (no jumping content)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Speed Index:</strong> How quickly content is visually displayed</span>
                    </li>
                  </ul>
                  <div className="pt-3 border-t border-orange-200 dark:border-orange-800/30 mt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong className="text-green-600 dark:text-green-400">Good:</strong> 90-100 • 
                      <strong className="text-orange-600 dark:text-orange-400"> Needs Improvement:</strong> 50-89 • 
                      <strong className="text-red-600 dark:text-red-400"> Poor:</strong> 0-49
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500 text-white">
                <Eye className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">2. Accessibility (0-100)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Checks if your site is usable by people with disabilities. Important for inclusive design and legal compliance.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">What it Checks:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span><strong>Alt text on images:</strong> Screen readers need descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span><strong>Color contrast:</strong> Text must be readable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span><strong>ARIA labels:</strong> Proper labels for interactive elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span><strong>Keyboard navigation:</strong> All features accessible without mouse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span><strong>Focus indicators:</strong> Visible focus states for navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span><strong>Semantic HTML:</strong> Proper heading hierarchy, landmarks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500 text-white">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">3. Best Practices (0-100)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Ensures your site follows web development best practices for security, modern standards, and reliability.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Audits Include:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span><strong>HTTPS usage:</strong> Secure connection required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span><strong>No console errors:</strong> Clean browser console</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span><strong>Image aspect ratios:</strong> Proper sizing to avoid layout shift</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span><strong>Deprecated APIs:</strong> Not using old/unsafe features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span><strong>Secure cookies:</strong> Proper cookie attributes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span><strong>Geolocation permissions:</strong> Proper permission requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-500 text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">4. SEO (0-100)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Checks if your site is optimized for search engine rankings. Better SEO = more organic traffic.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">Key Checks:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span><strong>Meta description:</strong> Page summary for search results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span><strong>Title tag:</strong> Unique, descriptive page title</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span><strong>Viewport meta tag:</strong> Mobile-friendly configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span><strong>Readable font sizes:</strong> Text not too small</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span><strong>Valid robots.txt:</strong> Search crawler instructions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span><strong>Crawlable links:</strong> Search engines can find all pages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PWA */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-500 text-white">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">5. Progressive Web App (0-100)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Checks if your site can work like a native app - installable, offline-capable, and fast.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-2">PWA Requirements:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">•</span>
                      <span><strong>Web app manifest:</strong> Icons, name, colors for install</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">•</span>
                      <span><strong>Service worker:</strong> Enables offline functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">•</span>
                      <span><strong>HTTPS:</strong> Secure connection required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">•</span>
                      <span><strong>Fast page load:</strong> Quick initial load time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">•</span>
                      <span><strong>Responsive design:</strong> Works on all screen sizes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Run Lighthouse */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>How to Run Lighthouse</CardTitle>
              <CardDescription>3 easy ways to audit your site</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="text-lg font-bold mb-3 text-blue-900 dark:text-blue-200">Method 1: Chrome DevTools (Recommended)</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Open your website in Google Chrome</p>
              <p><strong>Step 2:</strong> Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">F12</kbd> or right-click → Inspect</p>
              <p><strong>Step 3:</strong> Click the <strong>Lighthouse</strong> tab</p>
              <p><strong>Step 4:</strong> Choose categories to audit (Performance, Accessibility, etc.)</p>
              <p><strong>Step 5:</strong> Select device (Mobile or Desktop)</p>
              <p><strong>Step 6:</strong> Click <strong>"Analyze page load"</strong></p>
              <p><strong>Step 7:</strong> Wait 30-60 seconds for the report</p>
            </div>
            <Alert className="mt-4 bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertDescription className="text-sm">
                <strong>Pro tip:</strong> Always test in Incognito mode to avoid browser extensions affecting results
              </AlertDescription>
            </Alert>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="text-lg font-bold mb-3 text-green-900 dark:text-green-200">Method 2: PageSpeed Insights (Online)</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>URL:</strong> <span className="text-blue-600 dark:text-blue-400 font-mono">pagespeed.web.dev</span></p>
              <p><strong>Step 1:</strong> Visit PageSpeed Insights website</p>
              <p><strong>Step 2:</strong> Enter your website URL</p>
              <p><strong>Step 3:</strong> Click <strong>"Analyze"</strong></p>
              <p><strong>Step 4:</strong> Get results for both Mobile and Desktop</p>
            </div>
            <Alert className="mt-4 bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700">
              <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription className="text-sm">
                <strong>Bonus:</strong> Shows real user data from Chrome User Experience Report (if available)
              </AlertDescription>
            </Alert>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="text-lg font-bold mb-3 text-purple-900 dark:text-purple-200">Method 3: Command Line (For CI/CD)</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Install:</strong> <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">npm install -g lighthouse</code></p>
              <p><strong>Run:</strong> <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">lighthouse https://example.com</code></p>
              <p><strong>Use case:</strong> Automate audits in your build pipeline</p>
            </div>
            <Alert className="mt-4 bg-purple-50 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <AlertDescription className="text-sm">
                <strong>For teams:</strong> Integrate into CI/CD to prevent performance regressions
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Understanding the Report */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Understanding the Report</CardTitle>
              <CardDescription>How to read and act on Lighthouse results</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Score Ranges */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900 border-2 border-slate-200 dark:border-slate-800">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Score Ranges Explained</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-green-100 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-bold text-green-800 dark:text-green-300">90-100: Good</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Your site is performing well! Minor optimizations only.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-orange-100 dark:bg-orange-950/30 border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-bold text-orange-800 dark:text-orange-300">50-89: Needs Work</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Moderate issues. Follow recommendations to improve.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-red-100 dark:bg-red-950/30 border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-bold text-red-800 dark:text-red-300">0-49: Poor</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Significant problems. Urgent optimizations needed.
                </p>
              </div>
            </div>
          </div>

          {/* Report Sections */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
              <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-2">📊 Metrics Section</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Shows specific timing metrics with color-coded scores. Each metric shows the actual time (e.g., "2.4s") and whether it's good, needs improvement, or poor.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                Focus on LCP and TBT first - they have the biggest impact on user experience.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30">
              <h5 className="font-bold text-green-900 dark:text-green-200 mb-2">🎯 Opportunities Section</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Lists potential time savings. Each opportunity shows estimated time you could save (e.g., "Save 1.2s").
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                Prioritize opportunities with the largest time savings first.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30">
              <h5 className="font-bold text-purple-900 dark:text-purple-200 mb-2">💡 Diagnostics Section</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Additional information about performance. Shows issues that don't have specific time savings but affect overall performance.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                Review these after addressing main opportunities.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/30">
              <h5 className="font-bold text-orange-900 dark:text-orange-200 mb-2">✅ Passed Audits</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Things you're doing well! These are audits you passed.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                Expand to see what you're doing right (and make sure you keep doing it).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues & Fixes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Issues & Quick Fixes</CardTitle>
              <CardDescription>Most frequent problems and how to solve them</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ Large JavaScript Files</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Big JS bundles slow down page load
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Fix:</strong> Code splitting, lazy loading, tree shaking, minification
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ Unoptimized Images</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Large image files take forever to load
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Fix:</strong> Compress images, use WebP format, responsive images, lazy loading
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ No Text Compression</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Sending large text files uncompressed
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Fix:</strong> Enable Gzip or Brotli compression on your server
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ Render-Blocking Resources</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> CSS/JS files block page rendering
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Fix:</strong> Inline critical CSS, defer non-critical JS, use async attributes
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ Missing Cache Headers</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Browser can't cache resources effectively
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Fix:</strong> Set proper Cache-Control headers on server
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ Too Many Third-Party Scripts</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Analytics, ads, social widgets slow down site
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Fix:</strong> Load scripts asynchronously, remove unnecessary ones, use facades
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">5 Categories</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Performance, Accessibility, Best Practices, SEO, PWA<br/>
                    Each scored 0-100
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Easy to Run</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    F12 → Lighthouse tab → Analyze<br/>
                    Or use PageSpeed Insights online
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Actionable Reports</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Metrics, opportunities, diagnostics<br/>
                    Shows time savings per fix
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Regular Testing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test after every major change<br/>
                    Track improvements over time
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Don't try to fix everything at once! Start with the "Opportunities" section and tackle the items with the largest potential time savings first. Small improvements add up quickly!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
