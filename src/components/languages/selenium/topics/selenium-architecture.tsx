'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Layers,
  ArrowRight,
  ArrowLeft,
  Globe,
  Code,
  Server,
  Monitor,
  Zap,
  Network,
  CheckCircle,
  AlertCircle,
  Play,
  Cpu,
  Box,
  GitBranch,
  MessageSquare,
  Radio,
  Workflow,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { useSeleniumPlayground } from '../playground/selenium-playground-context';
import { SeleniumPlaygroundModal } from '../playground/selenium-playground-modal';
import { PageHeader } from '@/components/shared/generic-page-header';

export function SeleniumArchitecture() {
  const { openPlayground } = useSeleniumPlayground();
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Layers}
        category="Selenium · Architecture"
        title="Selenium Architecture"
        description="Understand how Selenium WebDriver works under the hood - from your test code to browser actions"
        colorTheme="green"
        badges={[
          { label: 'Client-Server Model', variant: 'default' },
          { label: 'HTTP Protocol', variant: 'info' },
          { label: 'Browser Drivers', variant: 'secondary' },
        ]}
      />

      {/* Architecture Overview */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Selenium WebDriver Architecture
          </CardTitle>
          <CardDescription>How your test code communicates with the browser</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* High-Level Overview */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Box className="w-5 h-5" />
              The Big Picture
            </h4>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Selenium WebDriver follows a <strong className="text-blue-700 dark:text-blue-300">client-server architecture</strong>. 
              Your test code (client) sends commands over HTTP to a browser driver (server), which then controls the actual browser.
            </p>
            
            {/* Visual Flow Diagram */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {/* Step 1: Test Code */}
                <div className="flex-1 min-w-[200px]">
                  <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-green-900 dark:text-green-100 mb-1">1. Your Test Code</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Python, Java, JS, C#</div>
                    </CardContent>
                  </Card>
                </div>

                <ArrowRight className="w-8 h-8 text-blue-500 flex-shrink-0" />

                {/* Step 2: Language Binding */}
                <div className="flex-1 min-w-[200px]">
                  <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-blue-900 dark:text-blue-100 mb-1">2. Language Binding</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Selenium Client Library</div>
                    </CardContent>
                  </Card>
                </div>

                <ArrowRight className="w-8 h-8 text-blue-500 flex-shrink-0" />

                {/* Step 3: JSON Wire Protocol */}
                <div className="flex-1 min-w-[200px]">
                  <Card className="border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-purple-900 dark:text-purple-100 mb-1">3. HTTP Commands</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">JSON over HTTP</div>
                    </CardContent>
                  </Card>
                </div>

                <ArrowRight className="w-8 h-8 text-blue-500 flex-shrink-0" />

                {/* Step 4: Browser Driver */}
                <div className="flex-1 min-w-[200px]">
                  <Card className="border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-orange-900 dark:text-orange-100 mb-1">4. Browser Driver</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">ChromeDriver, GeckoDriver</div>
                    </CardContent>
                  </Card>
                </div>

                <ArrowRight className="w-8 h-8 text-blue-500 flex-shrink-0" />

                {/* Step 5: Browser */}
                <div className="flex-1 min-w-[200px]">
                  <Card className="border-2 border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-teal-900 dark:text-teal-100 mb-1">5. Browser</div>
                      <div className="text-xs text-teal-700 dark:text-teal-300">Chrome, Firefox, Edge</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Key Point */}
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Zap className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Key Concept</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Unlike Selenium RC (the old version), WebDriver <strong>directly controls the browser</strong> through 
              browser-specific drivers. This makes it faster, more reliable, and closer to how real users interact with browsers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Component Breakdown */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Box className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Architecture Components Explained
          </CardTitle>
          <CardDescription>Understanding each piece of the puzzle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Component 1: Test Script */}
          <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                    1️⃣ Test Script (Your Code)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    This is the code you write in your preferred programming language. It contains test logic, 
                    assertions, and Selenium commands.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">Example:</div>
                    <code className="text-xs text-green-800 dark:text-green-200">
                      driver.get("https://example.com")<br/>
                      driver.find_element(By.ID, "username").send_keys("test")
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component 2: Language Binding */}
          <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                    2️⃣ Selenium Client Library (Language Binding)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The Selenium library you install (pip install selenium, npm install selenium-webdriver, etc.). 
                    It translates your high-level commands into HTTP requests.
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Provides WebDriver API</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Handles JSON serialization</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Manages HTTP communication</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Returns responses to your code</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component 3: JSON Wire Protocol */}
          <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
                    3️⃣ JSON Wire Protocol / W3C WebDriver Protocol
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A standardized communication protocol using JSON over HTTP. Commands are sent as HTTP requests 
                    (GET, POST, DELETE) to specific endpoints.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">Example Request:</div>
                    <code className="text-xs text-purple-800 dark:text-purple-200">
                      POST http://localhost:4444/session/abc123/element<br/>
                      {`{"using": "id", "value": "username"}`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component 4: Browser Driver */}
          <Card className="border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-2">
                    4️⃣ Browser Driver (WebDriver Server)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A browser-specific executable (ChromeDriver, GeckoDriver, EdgeDriver) that acts as a server. 
                    It receives HTTP commands and translates them into browser-native commands.
                  </p>
                  <div className="grid md:grid-cols-3 gap-2">
                    <Badge variant="outline" className="justify-center">ChromeDriver</Badge>
                    <Badge variant="outline" className="justify-center">GeckoDriver</Badge>
                    <Badge variant="outline" className="justify-center">EdgeDriver</Badge>
                    <Badge variant="outline" className="justify-center">SafariDriver</Badge>
                    <Badge variant="outline" className="justify-center">IEDriver</Badge>
                    <Badge variant="outline" className="justify-center">OperaDriver</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component 5: Browser */}
          <Card className="border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">
                    5️⃣ Browser (Chrome, Firefox, Edge, etc.)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The actual browser application that renders web pages and executes the commands. 
                    Each browser has its own engine and implementation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-xs bg-teal-50 dark:bg-teal-950/30 px-3 py-1.5 rounded-full border border-teal-200 dark:border-teal-800">
                      <Monitor className="w-3.5 h-3.5 text-teal-600" />
                      <span>Renders HTML/CSS/JS</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-teal-50 dark:bg-teal-950/30 px-3 py-1.5 rounded-full border border-teal-200 dark:border-teal-800">
                      <Cpu className="w-3.5 h-3.5 text-teal-600" />
                      <span>Executes JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-teal-50 dark:bg-teal-950/30 px-3 py-1.5 rounded-full border border-teal-200 dark:border-teal-800">
                      <Radio className="w-3.5 h-3.5 text-teal-600" />
                      <span>Handles user interactions</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Communication Flow Example */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <GitBranch className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Real-World Communication Flow
          </CardTitle>
          <CardDescription>See how a simple click command travels through the architecture</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">
              Example: Clicking a Login Button
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">You write test code:</div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border text-sm font-mono">
                    login_button = driver.find_element(By.ID, "login-btn")<br/>
                    login_button.click()
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">Selenium Client Library converts to HTTP:</div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border text-sm font-mono">
                    POST http://localhost:9515/session/abc123/element/xyz789/click<br/>
                    Headers: {`{"Content-Type": "application/json"}`}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">ChromeDriver receives request:</div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border text-sm">
                    Parses JSON → Identifies element → Prepares browser command
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">ChromeDriver sends to Chrome:</div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border text-sm">
                    Uses Chrome DevTools Protocol (CDP) to trigger click event
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <div className="font-semibold text-green-900 dark:text-green-100 mb-1">Chrome executes the click:</div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-800 text-sm">
                    ✅ Button is clicked → Form submits → Page navigates
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
              </div>

              {/* Step 6 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div className="flex-1">
                  <div className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Response travels back:</div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border text-sm">
                    Chrome → ChromeDriver → HTTP Response → Selenium Client → Your Code
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">All of this happens in milliseconds!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              The entire round-trip communication typically takes 50-200ms, making Selenium fast enough 
              for real-world test automation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Practice Section */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Play className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            See Architecture in Action
          </CardTitle>
          <CardDescription>Practice with live examples to understand the flow</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Practice Card 1 */}
          <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                      🔍 Element Location Flow
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      See how finding an element travels through all architecture layers - from your code to the browser and back.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-5 rounded-xl border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    What You'll See:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Test code execution</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">HTTP request formation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Driver processing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Browser interaction</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    size="lg" 
                    onClick={() => openPlayground('locators')}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                    Try Locator Flow Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Card 2 */}
          <Card className="border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                      🌐 Action Execution Flow
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Watch how user actions (clicks, typing) are processed through the WebDriver architecture.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-5 rounded-xl border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    What You'll Practice:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Click actions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Text input</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Form submission</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 dark:text-green-200">Response handling</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    size="lg" 
                    onClick={() => openPlayground('actions')}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                    Try Action Flow Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/40">
              <CheckCircle className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </div>
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <div className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Client-Server Model</div>
                <div className="text-sm text-muted-foreground">
                  WebDriver uses HTTP-based client-server architecture for browser control
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <div className="font-semibold text-green-900 dark:text-green-100 mb-1">Browser-Specific Drivers</div>
                <div className="text-sm text-muted-foreground">
                  Each browser needs its own driver (ChromeDriver, GeckoDriver, etc.)
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <div className="font-semibold text-purple-900 dark:text-purple-100 mb-1">JSON Communication</div>
                <div className="text-sm text-muted-foreground">
                  Commands are sent as JSON over HTTP using W3C WebDriver Protocol
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <div className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Direct Browser Control</div>
                <div className="text-sm text-muted-foreground">
                  Unlike old Selenium RC, WebDriver directly controls browsers for better performance
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Your Knowledge */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Test Your Knowledge
          </CardTitle>
          <CardDescription>Check your understanding of Selenium Architecture</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-4">
              Question: What is the role of the Browser Driver in Selenium WebDriver architecture?
            </h3>
            
            <div className="space-y-3">
              {[
                { id: 1, text: "It translates your test code into machine code", correct: false },
                { id: 2, text: "It acts as a server that receives HTTP commands and translates them into browser-native commands", correct: true },
                { id: 3, text: "It renders the HTML and CSS of web pages", correct: false },
                { id: 4, text: "It stores test results and generates reports", correct: false }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setSelectedAnswer(option.id);
                    setShowAnswer(true);
                  }}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showAnswer
                      ? option.correct
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                        : selectedAnswer === option.id
                        ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 cursor-pointer'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      showAnswer && option.correct
                        ? 'border-green-500 bg-green-500'
                        : showAnswer && selectedAnswer === option.id && !option.correct
                        ? 'border-red-500 bg-red-500'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {showAnswer && option.correct && <CheckCircle className="w-4 h-4 text-white" />}
                      {showAnswer && selectedAnswer === option.id && !option.correct && <span className="text-white text-xs">✗</span>}
                    </div>
                    <span className={`flex-1 ${
                      showAnswer && option.correct
                        ? 'text-green-900 dark:text-green-100 font-semibold'
                        : showAnswer && selectedAnswer === option.id
                        ? 'text-red-900 dark:text-red-100'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {showAnswer && (
              <Alert className="mt-6 border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
                <Lightbulb className="h-5 w-5 text-green-600" />
                <AlertTitle className="text-green-900 dark:text-green-100">Explanation</AlertTitle>
                <AlertDescription className="text-green-800 dark:text-green-200">
                  The Browser Driver (like ChromeDriver or GeckoDriver) is a <strong>server-side component</strong> that:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Listens for HTTP requests from the Selenium client library</li>
                    <li>• Translates JSON commands into browser-specific native commands</li>
                    <li>• Communicates directly with the browser using protocols like Chrome DevTools Protocol</li>
                    <li>• Returns responses back to your test code</li>
                  </ul>
                  It's the crucial bridge between your test code and the actual browser!
                </AlertDescription>
              </Alert>
            )}

            {showAnswer && (
              <div className="flex justify-center mt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAnswer(false);
                    setSelectedAnswer(null);
                  }}
                  className="gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Include the playground modal */}
      <SeleniumPlaygroundModal />
    </div>
  );
}
