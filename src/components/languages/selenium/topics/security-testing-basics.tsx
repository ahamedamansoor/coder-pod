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
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Bug,
  CheckCircle,
  XCircle,
  Info,
  Code,
  Copy,
  Terminal,
  Database,
  Key,
  Fingerprint,
  UserCheck,
  Globe,
  Scan,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

const SecurityTestingBasics = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' | 'warning' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'security-testing-basics',
    title: 'Security Testing Basics',
    explanation: 'Introduction to security testing with Selenium',
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

  const simulateSecurityScan = () => {
    setIsScanning(true);
    addLog('Starting comprehensive security scan...', 'info');
    setVulnerabilityCount(0);
    
    const securityTests = [
      { test: 'SQL Injection', result: 'Potential vulnerability found' },
      { test: 'XSS Protection', result: 'XSS filters working correctly' },
      { test: 'Authentication', result: 'Weak password policy detected' },
      { test: 'Session Management', result: 'Secure session handling' },
      { test: 'Input Validation', result: 'Missing input sanitization' },
      { test: 'HTTPS Enforcement', result: 'SSL/TLS properly configured' }
    ];

    securityTests.forEach((test, index) => {
      setTimeout(() => {
        const hasIssue = Math.random() > 0.5; // 50% chance of issue
        
        if (hasIssue) {
          addLog(`🚨 SECURITY ISSUE: ${test.test} - ${test.result}`, 'error');
          setVulnerabilityCount(prev => prev + 1);
        } else {
          addLog(`✅ SECURE: ${test.test}`, 'success');
        }
        
        if (index === securityTests.length - 1) {
          setIsScanning(false);
          addLog(`Security scan complete! Found ${vulnerabilityCount + (hasIssue ? 1 : 0)} issues`, 'warning');
        }
      }, (index + 1) * 600);
    });
  };

  useEffect(() => {
    addLog('Security Testing tool ready', 'info');
  }, []);

  const simpleCodeExample = `# Python Security Testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def basic_security_test(driver, base_url):
    """Basic security vulnerability test"""
    vulnerabilities = []
    
    # Test 1: Check for basic SQL injection
    sql_payloads = ["'", "1' OR '1'='1", "'; DROP TABLE users--"]
    for payload in sql_payloads:
        test_url = f"{base_url}/search?q={payload}"
        driver.get(test_url)
        time.sleep(2)
        
        page_source = driver.page_source.lower()
        if any(error in page_source for error in ['sql syntax', 'mysql_fetch', 'ora-']):
            vulnerabilities.append({
                'type': 'SQL Injection',
                'payload': payload,
                'url': test_url
            })
    
    # Test 2: Check for XSS
    xss_payloads = ['<script>alert("XSS")</script>', '<img src=x onerror=alert("XSS")>']
    for payload in xss_payloads:
        test_url = f"{base_url}/search?q={payload}"
        driver.get(test_url)
        time.sleep(2)
        
        try:
            driver.switch_to.alert
            vulnerabilities.append({
                'type': 'XSS',
                'payload': payload,
                'url': test_url
            })
        except:
            pass
    
    # Test 3: Check authentication security
    driver.get(f"{base_url}/login")
    time.sleep(2)
    
    # Check if login page uses HTTPS
    if not driver.current_url.startswith('https://'):
        vulnerabilities.append({
            'type': 'Insecure Login',
            'url': driver.current_url
        })
    
    return vulnerabilities

# Usage
driver = webdriver.Chrome()
vulns = basic_security_test(driver, "https://example.com")
print(f"Found {len(vulns)} security vulnerabilities")
driver.quit()`;

  const jsCodeExample = `// JavaScript Security Testing
const { Builder, By } = require('selenium-webdriver');

async function basicSecurityTest(driver, baseUrl) {
    const vulnerabilities = [];
    
    // Test 1: SQL Injection
    const sqlPayloads = ["'", "1' OR '1'='1", "'; DROP TABLE users--"];
    for (const payload of sqlPayloads) {
        const testUrl = \`\${baseUrl}/search?q=\${encodeURIComponent(payload)}\`;
        await driver.get(testUrl);
        await driver.sleep(2000);
        
        const pageSource = await driver.getPageSource();
        if (['sql syntax', 'mysql_fetch', 'ora-'].some(error => 
            pageSource.toLowerCase().includes(error))) {
            vulnerabilities.push({
                type: 'SQL Injection',
                payload: payload,
                url: testUrl
            });
        }
    }
    
    // Test 2: XSS Testing
    const xssPayloads = ['<script>alert("XSS")</script>', '<img src=x onerror=alert("XSS")>'];
    for (const payload of xssPayloads) {
        const testUrl = \`\${baseUrl}/search?q=\${encodeURIComponent(payload)}\`;
        await driver.get(testUrl);
        await driver.sleep(2000);
        
        try {
            await driver.switchTo().alert();
            vulnerabilities.push({
                type: 'XSS',
                payload: payload,
                url: testUrl
            });
        } catch {
            // No alert - likely secure
        }
    }
    
    // Test 3: Authentication Security
    await driver.get(\`\${baseUrl}/login\`);
    await driver.sleep(2000);
    
    const currentUrl = await driver.getCurrentUrl();
    if (!currentUrl.startsWith('https://')) {
        vulnerabilities.push({
            type: 'Insecure Login',
            url: currentUrl
        });
    }
    
    return vulnerabilities;
}

// Usage
(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    const vulns = await basicSecurityTest(driver, 'https://example.com');
    console.log(\`Found \${vulns.length} security vulnerabilities\`);
    await driver.quit();
})();`;

  const securityVulnerabilities = [
    {
      title: 'SQL Injection',
      description: 'Malicious SQL code can manipulate database queries',
      icon: Database,
      severity: 'Critical',
      impact: 'Data theft, data modification, complete database control',
      prevention: 'Parameterized queries, input validation, ORM frameworks'
    },
    {
      title: 'Cross-Site Scripting (XSS)',
      description: 'Malicious scripts injected into web pages',
      icon: Bug,
      severity: 'High',
      impact: 'Session hijacking, data theft, defacement',
      prevention: 'Input validation, output encoding, CSP headers'
    },
    {
      title: 'Authentication Bypass',
      description: 'Weak authentication mechanisms',
      icon: Lock,
      severity: 'Critical',
      impact: 'Unauthorized access to sensitive data',
      prevention: 'Strong passwords, MFA, rate limiting, secure sessions'
    },
    {
      title: 'Session Management',
      description: 'Poor session handling and token management',
      icon: Key,
      severity: 'High',
      impact: 'Session hijacking, privilege escalation',
      prevention: 'Secure cookies, session timeout, proper logout'
    },
    {
      title: 'Input Validation',
      description: 'Missing or weak input validation',
      icon: ShieldCheck,
      severity: 'Medium',
      impact: 'Various injection attacks, data corruption',
      prevention: 'White-list validation, type checking, length limits'
    },
    {
      title: 'Authorization Issues',
      description: 'Improper access control implementation',
      icon: UserCheck,
      severity: 'High',
      impact: 'Unauthorized access to restricted resources',
      prevention: 'Role-based access, principle of least privilege'
    }
  ];

  const securityTools = [
    {
      name: 'OWASP ZAP',
      category: 'Web Scanner',
      price: 'Free',
      description: 'Comprehensive web application security scanner',
      features: ['Automated scanning', 'Passive/active testing', 'API testing'],
      icon: Shield
    },
    {
      name: 'Burp Suite',
      category: 'Proxy Scanner',
      price: 'Free/Pro',
      description: 'Web application security testing platform',
      features: ['Intercepting proxy', 'Scanner', 'Intruder tool'],
      icon: Globe
    },
    {
      name: 'SQLMap',
      category: 'SQL Injection',
      price: 'Free',
      description: 'Automated SQL injection and database takeover tool',
      features: ['SQL injection detection', 'Database fingerprinting', 'Data extraction'],
      icon: Database
    },
    {
      name: 'Nikto',
      category: 'Web Scanner',
      price: 'Free',
      description: 'Web server scanner for dangerous files/CGIs',
      features: ['Server scanning', 'Version detection', 'Vulnerability checking'],
      icon: Scan
    }
  ];

  const testingMethodology = [
    {
      phase: 'Reconnaissance',
      description: 'Gather information about the target application',
      activities: ['Identify technologies', 'Map application structure', 'Find entry points'],
      tools: ['BuiltWith', 'Wappalyzer', 'Nmap']
    },
    {
      phase: 'Vulnerability Assessment',
      description: 'Identify potential security vulnerabilities',
      activities: ['Automated scanning', 'Manual testing', 'Code review'],
      tools: ['OWASP ZAP', 'Burp Suite', 'Nikto']
    },
    {
      phase: 'Exploitation',
      description: 'Attempt to exploit identified vulnerabilities',
      activities: ['Proof of concept', 'Impact assessment', 'Data extraction'],
      tools: ['SQLMap', 'Metasploit', 'Custom scripts']
    },
    {
      phase: 'Reporting',
      description: 'Document findings and provide remediation advice',
      activities: ['Vulnerability documentation', 'Risk assessment', 'Remediation plan'],
      tools: ['Dradis', 'Markdown', 'Custom reports']
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Security Testing Basics"
        description="Introduction to web application security testing with Selenium"
        icon={Shield}
        colorTheme="blue"
      />

      {/* What is Security Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>What is Security Testing?</span>
          </CardTitle>
          <CardDescription>
            Understanding the fundamentals of web application security
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              <strong>Security Testing</strong> is the process of identifying vulnerabilities and security flaws 
              in web applications to protect against unauthorized access, data breaches, and cyber attacks. 
              It ensures that applications are secure, reliable, and protect sensitive user data.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                🛡️ Security testing should be integrated throughout the development lifecycle, not just at the end.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Security Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Scan className="w-5 h-5" />
            <span>Security Vulnerability Scanner</span>
          </CardTitle>
          <CardDescription>
            Interactive security assessment tool
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateSecurityScan}
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
                  <span>Start Security Scan</span>
                </>
              )}
            </Button>
            <Badge variant={vulnerabilityCount > 0 ? "destructive" : "default"}>
              {vulnerabilityCount} Security Issues Found
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
                  Click "Start Security Scan" to begin testing.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Security Vulnerabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>Common Security Vulnerabilities</span>
          </CardTitle>
          <CardDescription>
            Understanding the most critical web security issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityVulnerabilities.map((vuln, index) => {
              const Icon = vuln.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-red-600" />
                    <div>
                      <h4 className="font-semibold">{vuln.title}</h4>
                      <Badge variant={vuln.severity === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                        {vuln.severity}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {vuln.description}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-red-600">Impact:</span>
                      <p className="text-xs mt-1">{vuln.impact}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-green-600">Prevention:</span>
                      <p className="text-xs mt-1">{vuln.prevention}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Security Testing Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Popular Security Testing Tools</span>
          </CardTitle>
          <CardDescription>
            Essential tools for comprehensive security testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">{tool.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{tool.price}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {tool.description}
                  </p>
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-gray-500">Features:</span>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Testing Methodology */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Fingerprint className="w-5 h-5" />
            <span>Security Testing Methodology</span>
          </CardTitle>
          <CardDescription>
            Systematic approach to security testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testingMethodology.map((phase, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{phase.phase}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {phase.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600">Activities:</span>
                    <ul className="text-xs mt-1 list-disc list-inside">
                      {phase.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600">Tools:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {phase.tools.map((tool, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
            <span>Simple Security Testing Code</span>
          </CardTitle>
          <CardDescription>
            Easy-to-implement security testing examples
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

      {/* Important Notes */}
      <Alert>
        <Eye className="w-4 h-4" />
        <AlertTitle>Important Security Testing Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Only test security on applications you own or have explicit permission to test</li>
            <li>Always test in a controlled environment, never on production systems</li>
            <li>Document all findings and follow responsible disclosure practices</li>
            <li>Consider the legal and ethical implications of security testing</li>
            <li>Stay updated with the latest security vulnerabilities and testing techniques</li>
          </ul>
        </AlertDescription>
      </Alert>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

// Provide both named and default exports for compatibility with consumers
export { SecurityTestingBasics };
export default SecurityTestingBasics;
