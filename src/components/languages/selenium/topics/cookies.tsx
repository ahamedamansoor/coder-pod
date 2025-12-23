'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Cookie,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Monitor,
  Plus,
  Trash2,
  Shield,
  AlertCircle,
  Gauge,
  Key,
  Clock,
  Lock
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

type CookieType = {
  name: string;
  value: string;
  domain?: string;
  path?: string;
  expiry?: number | null;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
};

type Language = 'python' | 'java' | 'javascript';

const Cookies = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [cookies, setCookies] = React.useState<CookieType[]>([]);
  const [browserState, setBrowserState] = React.useState({
    currentUrl: '',
    title: '',
    cookieJar: [] as CookieType[]
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateCookieManagement = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setCookies([]);
    setBrowserState({
      currentUrl: '',
      title: '',
      cookieJar: []
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, add: 10, get: 13, delete: 16, clear: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav: 7, add: 10, get: 13, delete: 16, clear: 19, quit: 21 };
      } else {
        return { init: 2, nav: 3, add: 6, get: 9, delete: 12, clear: 15, quit: 17 };
      }
    };
    const lines = getCodeLines();

    const demoCookies: CookieType[] = [
      { name: 'session_id', value: 'abc123xyz789', domain: '.example.com', path: '/', secure: true, httpOnly: true },
      { name: 'user_preferences', value: '{"theme":"dark","lang":"en"}', domain: '.example.com', path: '/', secure: false },
      { name: 'analytics_id', value: 'GA-XYZ-123', domain: '.example.com', path: '/analytics', secure: false },
    ];

    const steps = [
      { step: 0, log: '🚀 Starting Cookie Management demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome browser...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to example.com...', delay: 1000 * multiplier, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Loaded: https://example.com', delay: 700 * multiplier, codeLine: lines.nav, variable: { name: 'driver', value: 'https://example.com' }, action: 'nav' },
      { step: 4, log: '🍪 Adding session cookie...', delay: 1000 * multiplier, codeLine: lines.add, variable: { name: 'driver', value: 'https://example.com' }, action: 'add-cookie' },
      { step: 5, log: '✅ Added: session_id=abc123xyz789', delay: 700 * multiplier, codeLine: lines.add, variable: { name: 'cookie', value: 'session_id=abc123xyz789' }, action: 'cookie-added' },
      { step: 6, log: '📋 Getting all cookies...', delay: 800 * multiplier, codeLine: lines.get, variable: { name: 'driver', value: 'https://example.com' }, action: 'get-cookies' },
      { step: 7, log: '✅ Found 1 cookie', delay: 700 * multiplier, codeLine: lines.get, variable: { name: 'all_cookies', value: '[1 cookie]' }, action: 'cookies-retrieved' },
      { step: 8, log: '🗑️ Deleting session cookie...', delay: 1000 * multiplier, codeLine: lines.delete, variable: { name: 'all_cookies', value: '[1 cookie]' }, action: 'delete-cookie' },
      { step: 9, log: '✅ Deleted: session_id', delay: 700 * multiplier, codeLine: lines.delete, variable: { name: 'deleted', value: 'session_id' }, action: 'cookie-deleted' },
      { step: 10, log: '🧹 Clearing all cookies...', delay: 800 * multiplier, codeLine: lines.clear, variable: { name: 'deleted', value: 'session_id' }, action: 'clear-all' },
      { step: 11, log: '✅ All cookies cleared', delay: 700 * multiplier, codeLine: lines.clear, variable: { name: 'cleared', value: 'true' }, action: 'all-cleared' },
      { step: 12, log: '🎉 Cookie Management demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'cleared', value: 'true' } },
    ];

    for (const { step, log, delay, codeLine, variable, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'nav') {
        setBrowserState({ currentUrl: 'https://example.com', title: 'Example Website', cookieJar: [] });
      } else if (action === 'add-cookie') {
        setBrowserState(prev => ({ ...prev, cookieJar: [demoCookies[0]] }));
      } else if (action === 'cookie-added') {
        setCookies([demoCookies[0]]);
      } else if (action === 'get-cookies') {
        setBrowserState(prev => ({ ...prev, cookieJar: [demoCookies[0]] }));
      } else if (action === 'cookies-retrieved') {
        setCookies([demoCookies[0]]);
      } else if (action === 'delete-cookie') {
        setBrowserState(prev => ({ ...prev, cookieJar: [] }));
      } else if (action === 'cookie-deleted') {
        setCookies([]);
      } else if (action === 'clear-all') {
        setBrowserState(prev => ({ ...prev, cookieJar: [] }));
      } else if (action === 'all-cleared') {
        setCookies([]);
      }
    }

    setIsRunning(false);
  };

  const getCookieCode = (language: Language = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to website',
        'driver.get("https://example.com")',
        '',
        '# Add a cookie',
        'driver.add_cookie({',
        '    "name": "session_id",',
        '    "value": "abc123xyz789",',
        '    "domain": ".example.com",',
        '    "path": "/",',
        '    "secure": True,',
        '    "httpOnly": True',
        '})',
        '',
        '# Get all cookies',
        'all_cookies = driver.get_cookies()',
        'print("All cookies:", all_cookies)',
        '',
        '# Get specific cookie',
        'session_cookie = driver.get_cookie("session_id")',
        'print("Session cookie:", session_cookie)',
        '',
        '# Delete specific cookie',
        'driver.delete_cookie("session_id")',
        '',
        '# Delete all cookies',
        'driver.delete_all_cookies()',
        '',
        '# Verify cookies are deleted',
        'print("Cookies after deletion:", driver.get_cookies())',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.Cookie;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Navigate to website',
        'driver.get("https://example.com");',
        '',
        '// Add a cookie',
        'Cookie sessionCookie = new Cookie.Builder("session_id", "abc123xyz789")',
        '    .domain(".example.com")',
        '    .path("/")',
        '    .isSecure(true)',
        '    .isHttpOnly(true)',
        '    .build();',
        'driver.manage().addCookie(sessionCookie);',
        '',
        '// Get all cookies',
        'Set<Cookie> allCookies = driver.manage().getCookies();',
        'System.out.println("All cookies: " + allCookies);',
        '',
        '// Get specific cookie',
        'Cookie session = driver.manage().getCookieNamed("session_id");',
        'System.out.println("Session cookie: " + session);',
        '',
        '// Delete specific cookie',
        'driver.manage().deleteCookieNamed("session_id");',
        '',
        '// Delete all cookies',
        'driver.manage().deleteAllCookies();',
        '',
        '// Verify cookies are deleted',
        'System.out.println("Cookies after deletion: " + driver.manage().getCookies());',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://example.com\');',
        '',
        '// Add a cookie',
        'await driver.manage().addCookie({',
        '  name: \'session_id\',',
        '  value: \'abc123xyz789\',',
        '  domain: \'.example.com\',',
        '  path: \'/\',',
        '  secure: true,',
        '  httpOnly: true',
        '});',
        '',
        '// Get all cookies',
        'const allCookies = await driver.manage().getCookies();',
        'console.log(\'All cookies:\', allCookies);',
        '',
        '// Get specific cookie',
        'const sessionCookie = await driver.manage().getCookie(\'session_id\');',
        'console.log(\'Session cookie:\', sessionCookie);',
        '',
        '// Delete specific cookie',
        'await driver.manage().deleteCookie(\'session_id\');',
        '',
        '// Delete all cookies',
        'await driver.manage().deleteAllCookies();',
        '',
        '// Verify cookies are deleted',
        'console.log(\'Cookies after deletion:\', await driver.manage().getCookies());',
        '',
        'await driver.quit();',
      ];
    }
  };

  const cookieExample = {
    python: getCookieCode('python').join('\n'),
    java: getCookieCode('java').join('\n'),
    javascript: getCookieCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Cookie Management"
        description="Handle browser cookies in Selenium WebDriver"
        icon={Cookie}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-amber-600" />
            Cookie Operations
          </CardTitle>
          <CardDescription>
            Manage browser cookies like a pro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Selenium provides comprehensive cookie management capabilities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>add_cookie():</strong> Add new cookies to browser</li>
            <li><strong>get_cookies():</strong> Retrieve all cookies</li>
            <li><strong>get_cookie(name):</strong> Get specific cookie by name</li>
            <li><strong>delete_cookie(name):</strong> Delete specific cookie</li>
            <li><strong>delete_all_cookies():</strong> Clear all cookies</li>
          </ul>

          <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
            <Cookie className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Cookie Security</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Cookies can have security attributes like Secure, HttpOnly, and SameSite to control access and transmission.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Cookie management syntax in Python, Java, and JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === lang
                    ? 'border-b-2 border-amber-600 text-amber-600 dark:text-amber-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cookie Operations</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700">
                  {selectedLanguage === 'python' && '🐍 Python'}
                  {selectedLanguage === 'java' && '☕ Java'}
                  {selectedLanguage === 'javascript' && '🟨 JavaScript'}
                </Badge>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# 🍪 Cookie Management in Selenium Python

# 1️⃣ Add a secure cookie with all attributes
cookie = {
    "name": "session_id",           # Cookie identifier
    "value": "abc123xyz789",        # Session token
    "domain": ".example.com",       # Subdomain access
    "path": "/",                    # Available site-wide
    "secure": True,                 # HTTPS only 🔒
    "httpOnly": True,               # JS protected 🛡️
    "expiry": 1735689600           # Unix timestamp ⏰
}
driver.add_cookie(cookie)

# 2️⃣ Retrieve all cookies
cookies = driver.get_cookies()
print(f"Found {len(cookies)} cookies:")
for cookie in cookies:
    print(f"  🍪 {cookie['name']}: {cookie['value']}")

# 3️⃣ Get specific cookie by name
session = driver.get_cookie("session_id")
if session:
    print(f"✅ Session active: {session['value']}")

# 4️⃣ Delete specific cookie
driver.delete_cookie("session_id")
print("🗑️ Session cookie removed")

# 5️⃣ Clear all cookies (cleanup)
driver.delete_all_cookies()
print("🧹 All cookies cleared")`}
                  {selectedLanguage === 'java' && `// 🍪 Cookie Management in Selenium Java

// 1️⃣ Add a secure cookie using Builder pattern
Cookie cookie = new Cookie.Builder("session_id", "abc123xyz789")
    .domain(".example.com")        // Subdomain access
    .path("/")                      // Available site-wide
    .isSecure(true)                 // HTTPS only 🔒
    .isHttpOnly(true)               // JS protected 🛡️
    .build();
driver.manage().addCookie(cookie);

// 2️⃣ Retrieve all cookies
Set<Cookie> cookies = driver.manage().getCookies();
System.out.println("Found " + cookies.size() + " cookies:");
for (Cookie c : cookies) {
    System.out.println("  🍪 " + c.getName() + ": " + c.getValue());
}

// 3️⃣ Get specific cookie by name
Cookie session = driver.manage().getCookieNamed("session_id");
if (session != null) {
    System.out.println("✅ Session active: " + session.getValue());
}

// 4️⃣ Delete specific cookie
driver.manage().deleteCookieNamed("session_id");
System.out.println("🗑️ Session cookie removed");

// 5️⃣ Clear all cookies (cleanup)
driver.manage().deleteAllCookies();
System.out.println("🧹 All cookies cleared");`}
                  {selectedLanguage === 'javascript' && `// 🍪 Cookie Management in Selenium JavaScript

// 1️⃣ Add a secure cookie with all attributes
await driver.manage().addCookie({
  name: 'session_id',              // Cookie identifier
  value: 'abc123xyz789',           // Session token
  domain: '.example.com',          // Subdomain access
  path: '/',                       // Available site-wide
  secure: true,                    // HTTPS only 🔒
  httpOnly: true,                  // JS protected 🛡️
  expiry: 1735689600              // Unix timestamp ⏰
});

// 2️⃣ Retrieve all cookies
const cookies = await driver.manage().getCookies();
console.log(\`Found \${cookies.length} cookies:\`);
cookies.forEach(cookie => {
  console.log(\`  🍪 \${cookie.name}: \${cookie.value}\`);
});

// 3️⃣ Get specific cookie by name
const session = await driver.manage().getCookie('session_id');
if (session) {
  console.log(\`✅ Session active: \${session.value}\`);
}

// 4️⃣ Delete specific cookie
await driver.manage().deleteCookie('session_id');
console.log('🗑️ Session cookie removed');

// 5️⃣ Clear all cookies (cleanup)
await driver.manage().deleteAllCookies();
console.log('🧹 All cookies cleared');`}
                </code>
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-2 text-center">
                <div className="text-amber-600 dark:text-amber-400 text-lg mb-1">🔐</div>
                <div className="text-xs font-medium text-amber-900 dark:text-amber-100">Secure</div>
                <div className="text-[10px] text-amber-700 dark:text-amber-300">HTTPS only</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 text-center">
                <div className="text-blue-600 dark:text-blue-400 text-lg mb-1">🛡️</div>
                <div className="text-xs font-medium text-blue-900 dark:text-blue-100">HttpOnly</div>
                <div className="text-[10px] text-blue-700 dark:text-blue-300">JS protected</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2 text-center">
                <div className="text-purple-600 dark:text-purple-400 text-lg mb-1">⏰</div>
                <div className="text-xs font-medium text-purple-900 dark:text-purple-100">Expiry</div>
                <div className="text-[10px] text-purple-700 dark:text-purple-300">Auto-expire</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-amber-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch cookie management in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Cookie Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch cookies being added, retrieved, and deleted with inline variable values. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">Execution Speed:</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: 'slow', label: 'Slow', icon: '🐢' },
                  { value: 'medium', label: 'Medium', icon: '🚶' },
                  { value: 'fast', label: 'Fast', icon: '🚀' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
                      speed === option.value
                        ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-amber-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-cookies"
                      value={option.value}
                      checked={speed === option.value}
                      onChange={(e) => setSpeed(e.target.value as any)}
                      disabled={isRunning}
                      className="w-4 h-4"
                    />
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateCookieManagement}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Run Demo
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(cookieExample[selectedLanguage], 'Cookie management code')}
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getCookieCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-amber-200 dark:bg-amber-900/50 border-l-4 border-amber-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-amber-900 dark:text-amber-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              const match = codeLine.match(/^(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else if (selectedLanguage === 'java') {
                              const match = codeLine.match(/\b(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else {
                              const match = codeLine.match(/(?:let|const|var)\s+(\w+)\s*=/);
                              return match ? match[1] : null;
                            }
                          };
                          const varName = getVariableName(line);
                          return varName && liveVariables[varName] ? (
                            <span className="ml-2 px-2 py-0.5 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 rounded text-[10px] font-semibold">
                              = {liveVariables[varName]}
                            </span>
                          ) : null;
                        })()}
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-700">
                        <div className="text-[10px] font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-amber-800 dark:text-amber-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-amber-600 dark:text-amber-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{cookieExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cookie Manager</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-mono text-white/90 border border-white/20">
                        {browserState.currentUrl || 'about:blank'}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-amber-600 hover:bg-amber-700 text-white text-xs px-2 py-1">
                          <Cookie className="w-3 h-3 mr-1" />
                          {browserState.cookieJar.length} cookies
                        </Badge>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 min-h-[350px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    {/* Browser Content Area */}
                    <div className="flex flex-col items-center justify-center h-full">
                      {/* Loading/Navigation State */}
                      {currentStep <= 3 && (
                        <div className="text-center space-y-3">
                          <div className="relative">
                            <Cookie className="w-20 h-20 text-amber-500 animate-bounce" />
                            {currentStep === 2 && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                                <RefreshCw className="w-3 h-3 text-white animate-spin" />
                              </div>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            {browserState.title || 'Loading...'}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                            {browserState.currentUrl}
                          </p>
                          {currentStep === 3 && (
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                              <CheckCircle className="w-4 h-4" />
                              Page loaded successfully
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Cookie Operations State */}
                      {currentStep >= 4 && (
                        <div className="w-full space-y-4">
                          {/* Operation Status */}
                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-700 rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {currentStep === 4 && <Plus className="w-4 h-4 text-amber-600 animate-pulse" />}
                                {currentStep === 6 && <Key className="w-4 h-4 text-blue-600 animate-pulse" />}
                                {currentStep === 8 && <Trash2 className="w-4 h-4 text-red-600 animate-pulse" />}
                                {currentStep === 10 && <RefreshCw className="w-4 h-4 text-purple-600 animate-pulse" />}
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {currentStep === 4 && 'Adding cookie...'}
                                  {currentStep === 5 && 'Cookie added!'}
                                  {currentStep === 6 && 'Retrieving cookies...'}
                                  {currentStep === 7 && 'Cookies retrieved!'}
                                  {currentStep === 8 && 'Deleting cookie...'}
                                  {currentStep === 9 && 'Cookie deleted!'}
                                  {currentStep === 10 && 'Clearing all cookies...'}
                                  {currentStep === 11 && 'All cleared!'}
                                </span>
                              </div>
                              {currentStep >= 5 && currentStep <= 9 && (
                                <Badge variant="outline" className="text-xs">
                                  {cookies.length} active
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {/* Cookie Jar Visualization */}
                          <div className="bg-white dark:bg-slate-900 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 p-4 min-h-[120px]">
                            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                              <Cookie className="w-4 h-4" />
                              Cookie Jar
                              {cookies.length > 0 && (
                                <span className="ml-auto text-amber-600 dark:text-amber-400">
                                  {cookies.length} item{cookies.length !== 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                            
                            {cookies.length > 0 ? (
                              <div className="space-y-2">
                                {cookies.map((cookie, index) => (
                                  <div 
                                    key={index}
                                    className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="font-mono font-bold text-amber-700 dark:text-amber-300 text-sm">
                                            {cookie.name}
                                          </span>
                                          <div className="flex gap-1">
                                            {cookie.secure && (
                                              <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center" title="Secure">
                                                <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                                              </div>
                                            )}
                                            {cookie.httpOnly && (
                                              <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center" title="HttpOnly">
                                                <Shield className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 mb-2">
                                          Value: {cookie.value}
                                        </div>
                                        <div className="flex gap-3 text-[10px] text-slate-500 dark:text-slate-500">
                                          <span>🌐 {cookie.domain}</span>
                                          <span>📁 {cookie.path}</span>
                                        </div>
                                      </div>
                                      {(currentStep === 8 || currentStep === 9) && index === 0 && (
                                        <div className="ml-2">
                                          {currentStep === 8 && (
                                            <Trash2 className="w-4 h-4 text-red-500 animate-pulse" />
                                          )}
                                          {currentStep === 9 && (
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-6 text-slate-400 dark:text-slate-500">
                                <Cookie className="w-12 h-12 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">Cookie jar is empty</p>
                                <p className="text-xs mt-1">No cookies stored</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-blue-600" />
            Cookie Security Attributes
          </CardTitle>
          <CardDescription>Essential security features for cookies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">Secure</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">HTTPS Only</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Cookie only sent over HTTPS connections
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">HttpOnly</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">JavaScript Protected</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Cannot be accessed via JavaScript
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">SameSite</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">CSRF Protection</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Controls cross-site request behavior
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Set Domain Correctly</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use leading dot (.example.com) for subdomain access
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Check Cookie Existence</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always verify cookie exists before accessing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Expiry</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use Unix timestamp for expiration dates
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Clear Before Tests</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Start with clean cookie state for reliable tests
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">Invalid Cookie Domain</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Cookie not being set<br/>
                <strong>Solution:</strong> Ensure domain matches current URL or use leading dot for subdomains
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Cookie Not Found</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> get_cookie() returns None<br/>
                <strong>Solution:</strong> Check if cookie exists before accessing properties
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Secure Flag Issues</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Secure cookie not working on HTTP<br/>
                <strong>Solution:</strong> Secure cookies only work on HTTPS sites
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { Cookies };
