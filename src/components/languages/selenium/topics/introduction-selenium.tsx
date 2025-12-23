'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Zap, 
  Globe, 
  CheckCircle, 
  Users, 
  Clock, 
  Target,
  Monitor,
  MousePointer,
  Code,
  TrendingUp,
  AlertCircle,
  Play,
  ArrowRight,
  Sparkles,
  BookOpen,
  Rocket,
  TestTube,
  Database,
  Shield,
  Layers
} from 'lucide-react';
import { useSeleniumPlayground } from '../playground/selenium-playground-context';
import { SeleniumPlaygroundModal } from '../playground/selenium-playground-modal';
import { PageHeader } from '@/components/shared/generic-page-header';

export function IntroductionSelenium() {
  const { openPlayground } = useSeleniumPlayground();

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Zap}
        category="Selenium · Getting Started"
        title="Introduction to Selenium"
        description="Master the world's most powerful browser automation tool. Learn to test any website, on any browser, on any platform — automatically."
        colorTheme="green"
        badges={[
          { label: 'Industry Standard', variant: 'success' },
          { label: 'Cross-Platform', variant: 'info' },
          { label: 'Multi-Language', variant: 'secondary' },
        ]}
      />

      {/* What is Selenium - Visual Explanation */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            What is Selenium?
          </CardTitle>
          <CardDescription>Understanding browser automation from the ground up</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Main Definition */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              The Simple Definition
            </h4>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-blue-700 dark:text-blue-300">Selenium</strong> is a free, open-source automation framework 
                that allows you to control web browsers programmatically. Think of it as a <strong>robot that can interact with websites</strong> 
                exactly like a human would - but faster, more accurately, and without getting tired!
              </p>
              
              {/* Visual Comparison */}
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    MANUAL TESTING (Human)
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">⏱️</span>
                      <span>Takes hours to test all scenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">😴</span>
                      <span>Gets tired and makes mistakes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">🔁</span>
                      <span>Repetitive and boring work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">💰</span>
                      <span>Expensive for large test suites</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    SELENIUM (Automated)
                  </div>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">⚡</span>
                      <span>Runs hundreds of tests in minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">🎯</span>
                      <span>100% consistent and accurate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">🔄</span>
                      <span>Runs 24/7 without complaints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">💎</span>
                      <span>Cost-effective at scale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What Selenium Can Do */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <MousePointer className="w-5 h-5" />
              What Can Selenium Do?
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Click Buttons & Links</div>
                    <div className="text-xs text-muted-foreground">Automatically click any element on the page</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Fill Forms</div>
                    <div className="text-xs text-muted-foreground">Type text, select dropdowns, check boxes</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Navigate Pages</div>
                    <div className="text-xs text-muted-foreground">Go back, forward, refresh, switch tabs</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Extract Data</div>
                    <div className="text-xs text-muted-foreground">Read text, attributes, and page content</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Verify Elements</div>
                    <div className="text-xs text-muted-foreground">Check if elements exist, are visible, enabled</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Take Screenshots</div>
                    <div className="text-xs text-muted-foreground">Capture page state for debugging</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Key Concept</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Selenium controls <strong>real browsers</strong> (Chrome, Firefox, Safari, Edge), not simulators. 
              This means your tests run exactly as a real user would experience them!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Why Use Selenium */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Why Use Selenium?
          </CardTitle>
          <CardDescription>The benefits that make Selenium the industry standard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 duration-300 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-1">Save Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Run hundreds of test cases in minutes instead of days of manual testing
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 duration-300 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Reduce Errors</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated tests are consistent and eliminate human mistakes
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 duration-300 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Scale Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Test on multiple browsers and devices simultaneously
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 duration-300 border-orange-200 dark:border-orange-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Team Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Share tests and integrate with CI/CD pipelines
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 duration-300 border-red-200 dark:border-red-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">Real Browser Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Tests run in actual browsers, ensuring real-world accuracy
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 duration-300 border-teal-200 dark:border-teal-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">Multi-Language</h3>
                  <p className="text-sm text-muted-foreground">
                    Write tests in Python, Java, JavaScript, C#, Ruby, and more
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Real-World Use Cases
          </CardTitle>
          <CardDescription>See how companies use Selenium in production</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Testing & QA */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                  Testing & Quality Assurance
                </h3>
              </div>
              
              <Card className="p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                    🛒 E-commerce Testing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Automate testing of shopping carts, checkout flows, payment processing, 
                    and inventory updates across multiple browsers and devices.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Forms</Badge>
                    <Badge variant="outline" className="text-xs">Navigation</Badge>
                    <Badge variant="outline" className="text-xs">Payments</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-green-500 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                    🏦 Banking Applications
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Test login flows, account transfers, balance checks, and security features 
                    with high accuracy and reliability.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Security</Badge>
                    <Badge variant="outline" className="text-xs">Authentication</Badge>
                    <Badge variant="outline" className="text-xs">Transactions</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
                    📱 Social Media Platforms
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Automate testing of posting, liking, commenting, messaging, and 
                    notification systems across different user scenarios.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Dynamic Content</Badge>
                    <Badge variant="outline" className="text-xs">AJAX</Badge>
                    <Badge variant="outline" className="text-xs">Real-time</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Automation & Beyond */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                  Automation & Beyond
                </h3>
              </div>
              
              <Card className="p-4 border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
                    📊 Data Extraction & Scraping
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Extract product information, prices, reviews, competitor data, 
                    and market trends from websites for business intelligence.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Web Scraping</Badge>
                    <Badge variant="outline" className="text-xs">Data Mining</Badge>
                    <Badge variant="outline" className="text-xs">Analytics</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-red-500 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 flex items-center gap-2">
                    🔄 Workflow Automation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Automate repetitive tasks like data entry, report generation, 
                    file uploads, and administrative workflows.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">RPA</Badge>
                    <Badge variant="outline" className="text-xs">Scheduling</Badge>
                    <Badge variant="outline" className="text-xs">Batch Processing</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-teal-500 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
                    📈 Monitoring & Alerts
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor website uptime, performance, content changes, and 
                    trigger alerts when issues are detected.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Health Checks</Badge>
                    <Badge variant="outline" className="text-xs">Performance</Badge>
                    <Badge variant="outline" className="text-xs">Alerts</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Live Examples */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Play className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Try Selenium Live - Interactive Examples
          </CardTitle>
          <CardDescription>Click any example below to practice in the live playground</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Login Automation Example */}
          <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                      🔐 Login Form Automation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how to automate login flows - the most common automation task in web testing.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-5 rounded-xl border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    What You'll Practice:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Finding input fields by ID</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Typing text into fields</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Clicking submit buttons</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Waiting for page loads</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    size="lg" 
                    onClick={() => openPlayground('forms')}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                    Try Login Automation Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Filling Example */}
          <Card className="border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                      📝 Complex Form Handling
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Master interacting with different form elements - inputs, dropdowns, checkboxes, and more.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-5 rounded-xl border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    What You'll Practice:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Text input fields</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Dropdown selections</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Checkbox interactions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Radio button selection</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    size="lg" 
                    onClick={() => openPlayground('forms')}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                    Try Form Filling Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Element Locators Example */}
          <Card className="border-2 border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                      🎯 Element Locators Practice
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn different strategies to find elements on a page - the foundation of Selenium automation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-5 rounded-xl border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    What You'll Practice:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-800 dark:text-purple-200">Find by ID</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-800 dark:text-purple-200">Find by Class Name</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-800 dark:text-purple-200">CSS Selectors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-800 dark:text-purple-200">XPath expressions</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    size="lg" 
                    onClick={() => openPlayground('locators')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                    Try Locators Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions & Interactions Example */}
          <Card className="border-2 border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MousePointer className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                      🖱️ Advanced Actions & Interactions
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Practice complex user interactions like hover, drag-and-drop, double-click, and more.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-5 rounded-xl border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    What You'll Practice:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-orange-800 dark:text-orange-200">Click & Double-click</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-orange-800 dark:text-orange-200">Hover (Mouse over)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-orange-800 dark:text-orange-200">Drag and Drop</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-orange-800 dark:text-orange-200">Right-click context menu</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    size="lg" 
                    onClick={() => openPlayground('actions')}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                    Try Actions Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* All Playground Features */}
          <Alert className="border-2 border-teal-200 dark:border-teal-700 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
            <Sparkles className="h-5 w-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">💡 Pro Tip: Practice Makes Perfect!</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              Each example opens in our interactive Selenium Playground where you can:
              <ul className="mt-2 space-y-1 ml-4">
                <li>• See live demonstrations of Selenium commands</li>
                <li>• Practice on real HTML elements</li>
                <li>• Get instant feedback on your actions</li>
                <li>• Learn by doing, not just reading!</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Concepts Overview */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Core Concepts You'll Master
          </CardTitle>
          <CardDescription>Essential skills for Selenium automation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 border-blue-200 dark:border-blue-800">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Locators</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Find elements using ID, class, XPath, CSS selectors, and more
              </p>
            </Card>

            <Card className="p-5 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 border-green-200 dark:border-green-800">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <MousePointer className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Interactions</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click, type, select, drag, hover, and perform complex actions
              </p>
            </Card>

            <Card className="p-5 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 border-purple-200 dark:border-purple-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Waits</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Handle dynamic content with implicit, explicit, and fluent waits
              </p>
            </Card>

            <Card className="p-5 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 border-orange-200 dark:border-orange-800">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-orange-900 dark:text-orange-100">Best Practices</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Write maintainable, reliable, and efficient automation scripts
              </p>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Selenium Components Overview */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/40">
              <Layers className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </div>
            Selenium Suite Components
          </CardTitle>
          <CardDescription>Understanding the Selenium ecosystem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">
                    Selenium WebDriver
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                    The core component that controls browsers. This is what you'll use most of the time 
                    to write automation scripts in your preferred programming language.
                  </p>
                  <Badge variant="outline" className="text-xs">Most Popular</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Selenium Grid
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    Run tests in parallel across multiple machines and browsers. Perfect for 
                    large test suites and cross-browser testing at scale.
                  </p>
                  <Badge variant="outline" className="text-xs">Advanced</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MousePointer className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">
                    Selenium IDE
                  </h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
                    A browser extension for recording and playing back user interactions. 
                    Great for quick prototyping and learning Selenium basics.
                  </p>
                  <Badge variant="outline" className="text-xs">Beginner Friendly</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Include the playground modal */}
      <SeleniumPlaygroundModal />
    </div>
  );
}
