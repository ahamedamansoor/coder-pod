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
  Key,
  UserCheck,
  AlertTriangle,
  Bug,
  CheckCircle,
  XCircle,
  Info,
  Code,
  Copy,
  RefreshCw,
  Scan,
  ShieldCheck,
  Terminal,
  Eye,
  EyeOff,
  Fingerprint,
  Smartphone,
  Clock,
  Users,
} from 'lucide-react';

const AuthenticationTesting = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' | 'warning' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'authentication-testing',
    title: 'Authentication Testing',
    explanation: 'Testing authentication and authorization mechanisms',
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

  const simulateAuthTest = () => {
    setIsScanning(true);
    addLog('Starting authentication security scan...', 'info');
    setVulnerabilityCount(0);
    
    const authTests = [
      { test: 'Password Strength', result: 'Weak password policy detected' },
      { test: 'Login Rate Limiting', result: 'No rate limiting implemented' },
      { test: 'Session Management', result: 'Secure session handling' },
      { test: 'Multi-Factor Auth', result: 'MFA not configured' },
      { test: 'Account Lockout', result: 'Account lockout policy working' },
      { test: 'Password Reset', result: 'Insecure password reset flow' }
    ];

    authTests.forEach((test, index) => {
      setTimeout(() => {
        const hasIssue = Math.random() > 0.5; // 50% chance of issue
        
        if (hasIssue) {
          addLog(`🚨 AUTH ISSUE: ${test.test} - ${test.result}`, 'error');
          setVulnerabilityCount(prev => prev + 1);
        } else {
          addLog(`✅ SECURE: ${test.test}`, 'success');
        }
        
        if (index === authTests.length - 1) {
          setIsScanning(false);
          addLog(`Authentication scan complete! Found ${vulnerabilityCount + (hasIssue ? 1 : 0)} issues`, 'warning');
        }
      }, (index + 1) * 600);
    });
  };

  useEffect(() => {
    addLog('Authentication Testing tool ready', 'info');
  }, []);

  const simpleCodeExample = `# Python Authentication Testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_authentication_security(driver, login_url):
    """Test authentication security vulnerabilities"""
    vulnerabilities = []
    
    # Test 1: Weak password testing
    weak_passwords = ['123456', 'password', 'admin', '12345678']
    username = 'testuser'
    
    for password in weak_passwords:
        driver.get(login_url)
        
        # Enter credentials
        driver.find_element(By.NAME, 'username').send_keys(username)
        driver.find_element(By.NAME, 'password').send_keys(password)
        driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
        
        time.sleep(2)
        
        # Check if login succeeded (vulnerability)
        if 'dashboard' in driver.current_url or 'welcome' in driver.page_source.lower():
            vulnerabilities.append({
                'type': 'Weak Password',
                'password': password,
                'url': driver.current_url
            })
            print(f"Weak password accepted: {password}")
            break
    
    # Test 2: SQL Injection in login
    sql_payloads = ["' OR '1'='1", "' OR '1'='1' --", "admin'--"]
    
    for payload in sql_payloads:
        driver.get(login_url)
        driver.find_element(By.NAME, 'username').send_keys(payload)
        driver.find_element(By.NAME, 'password').send_keys('anything')
        driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
        
        time.sleep(2)
        
        if 'dashboard' in driver.current_url:
            vulnerabilities.append({
                'type': 'SQL Injection',
                'payload': payload,
                'url': driver.current_url
            })
            print(f"SQL injection successful: {payload}")
            break
    
    # Test 3: Brute force protection
    login_attempts = 0
    for i in range(10):
        driver.get(login_url)
        driver.find_element(By.NAME, 'username').send_keys('testuser')
        driver.find_element(By.NAME, 'password').send_keys(f'wrongpass{i}')
        driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
        time.sleep(1)
        login_attempts += 1
        
        # Check if account is locked
        if 'locked' in driver.page_source.lower() or 'blocked' in driver.page_source.lower():
            print(f"Account locked after {login_attempts} attempts")
            break
    else:
        vulnerabilities.append({
            'type': 'No Rate Limiting',
            'attempts': login_attempts
        })
    
    return vulnerabilities

# Usage
driver = webdriver.Chrome()
vulns = test_authentication_security(driver, "https://example.com/login")
print(f"Found {len(vulns)} authentication vulnerabilities")
driver.quit()`;

  const jsCodeExample = `// JavaScript Authentication Testing
const { Builder, By } = require('selenium-webdriver');

async function testAuthenticationSecurity(driver, loginUrl) {
    const vulnerabilities = [];
    
    // Test 1: Weak password testing
    const weakPasswords = ['123456', 'password', 'admin', '12345678'];
    const username = 'testuser';
    
    for (const password of weakPasswords) {
        await driver.get(loginUrl);
        
        // Enter credentials
        await driver.findElement(By.name('username')).sendKeys(username);
        await driver.findElement(By.name('password')).sendKeys(password);
        await driver.findElement(By.css('button[type="submit"]')).click();
        
        await driver.sleep(2000);
        
        // Check if login succeeded (vulnerability)
        const currentUrl = await driver.getCurrentUrl();
        const pageSource = await driver.getPageSource();
        
        if (currentUrl.includes('dashboard') || pageSource.toLowerCase().includes('welcome')) {
            vulnerabilities.push({
                type: 'Weak Password',
                password: password,
                url: currentUrl
            });
            console.log(\`Weak password accepted: \${password}\`);
            break;
        }
    }
    
    // Test 2: SQL Injection in login
    const sqlPayloads = ["' OR '1'='1", "' OR '1'='1' --", "admin'--"];
    
    for (const payload of sqlPayloads) {
        await driver.get(loginUrl);
        await driver.findElement(By.name('username')).sendKeys(payload);
        await driver.findElement(By.name('password')).sendKeys('anything');
        await driver.findElement(By.css('button[type="submit"]')).click();
        
        await driver.sleep(2000);
        
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('dashboard')) {
            vulnerabilities.push({
                type: 'SQL Injection',
                payload: payload,
                url: currentUrl
            });
            console.log(\`SQL injection successful: \${payload}\`);
            break;
        }
    }
    
    // Test 3: Brute force protection
    let loginAttempts = 0;
    for (let i = 0; i < 10; i++) {
        await driver.get(loginUrl);
        await driver.findElement(By.name('username')).sendKeys('testuser');
        await driver.findElement(By.name('password')).sendKeys(\`wrongpass\${i}\`);
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.sleep(1000);
        loginAttempts++;
        
        // Check if account is locked
        const pageSource = await driver.getPageSource();
        if (pageSource.toLowerCase().includes('locked') || 
            pageSource.toLowerCase().includes('blocked')) {
            console.log(\`Account locked after \${loginAttempts} attempts\`);
            break;
        }
    }
    
    if (loginAttempts >= 10) {
        vulnerabilities.push({
            type: 'No Rate Limiting',
            attempts: loginAttempts
        });
    }
    
    return vulnerabilities;
}

// Usage
(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    const vulns = await testAuthenticationSecurity(driver, 'https://example.com/login');
    console.log(\`Found \${vulns.length} authentication vulnerabilities\`);
    await driver.quit();
})();`;

  const authVulnerabilities = [
    {
      title: 'Weak Passwords',
      description: 'Users can create weak or easily guessable passwords',
      icon: Lock,
      severity: 'High',
      impact: 'Easy account compromise via brute force attacks',
      prevention: 'Strong password policies, complexity requirements, password meters'
    },
    {
      title: 'No Rate Limiting',
      description: 'Unlimited login attempts without blocking',
      icon: Clock,
      severity: 'High',
      impact: 'Brute force attacks can succeed given enough time',
      prevention: 'Rate limiting, account lockout after failed attempts, CAPTCHA'
    },
    {
      title: 'SQL Injection',
      description: 'SQL injection vulnerabilities in login forms',
      icon: Bug,
      severity: 'Critical',
      impact: 'Complete authentication bypass, database access',
      prevention: 'Parameterized queries, input validation, prepared statements'
    },
    {
      title: 'Insecure Session Management',
      description: 'Poor session token handling and storage',
      icon: Key,
      severity: 'High',
      impact: 'Session hijacking, unauthorized access',
      prevention: 'Secure cookies, session timeout, proper logout'
    },
    {
      title: 'Missing Multi-Factor Auth',
      description: 'No additional authentication factors required',
      icon: Smartphone,
      severity: 'Medium',
      impact: 'Increased risk of account compromise',
      prevention: 'Implement MFA, SMS codes, authenticator apps'
    },
    {
      title: 'Insecure Password Reset',
      description: 'Weak password reset mechanisms',
      icon: EyeOff,
      severity: 'High',
      impact: 'Account takeover via password reset attacks',
      prevention: 'Secure tokens, expiration, verification questions'
    }
  ];

  const authTestingMethods = [
    {
      method: 'Password Policy Testing',
      description: 'Test password strength requirements and validation',
      steps: ['Try common weak passwords', 'Test minimum length requirements', 'Check complexity rules'],
      tools: ['Custom scripts', 'Password dictionaries', 'Selenium automation']
    },
    {
      method: 'Brute Force Testing',
      description: 'Test resistance against brute force attacks',
      steps: ['Attempt multiple logins', 'Check for rate limiting', 'Test account lockout'],
      tools: ['Burp Suite Intruder', 'Hydra', 'Custom scripts']
    },
    {
      method: 'Session Testing',
      description: 'Test session management and security',
      steps: ['Check session cookies', 'Test session fixation', 'Verify logout functionality'],
      tools: ['Browser dev tools', 'Cookie editors', 'Selenium']
    },
    {
      method: 'Multi-Factor Auth Testing',
      description: 'Test MFA implementation and bypasses',
      steps: ['Test MFA bypass attempts', 'Check backup codes', 'Verify MFA enforcement'],
      tools: ['Intercepting proxy', 'Custom scripts', 'Manual testing']
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Authentication Testing"
        description="Comprehensive authentication and authorization security testing with Selenium"
        icon={Shield}
        colorTheme="purple"
      />

      {/* What is Authentication Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <UserCheck className="w-5 h-5" />
            <span>What is Authentication Testing?</span>
          </CardTitle>
          <CardDescription>
            Understanding authentication security vulnerabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              <strong>Authentication Testing</strong> involves testing the mechanisms that verify user identity and control 
              access to sensitive resources. It focuses on identifying weaknesses in login systems, password policies, 
              session management, and authorization controls that could lead to unauthorized access.
            </p>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-4">
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                🔐 Authentication is the first line of defense. Weak authentication can compromise the entire system.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Scan className="w-5 h-5" />
            <span>Authentication Security Scanner</span>
          </CardTitle>
          <CardDescription>
            Interactive authentication vulnerability detection tool
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateAuthTest}
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
                  <span>Start Auth Scan</span>
                </>
              )}
            </Button>
            <Badge variant={vulnerabilityCount > 0 ? "destructive" : "default"}>
              {vulnerabilityCount} Auth Issues Found
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
                  Click "Start Auth Scan" to begin testing.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Vulnerabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>Common Authentication Vulnerabilities</span>
          </CardTitle>
          <CardDescription>
            Understanding authentication security weaknesses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authVulnerabilities.map((vuln, index) => {
              const Icon = vuln.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-purple-600" />
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

      {/* Authentication Testing Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Fingerprint className="w-5 h-5" />
            <span>Authentication Testing Methods</span>
          </CardTitle>
          <CardDescription>
            Systematic approaches to authentication security testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authTestingMethods.map((method, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{method.method}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600">Testing Steps:</span>
                    <ul className="text-xs mt-1 list-disc list-inside">
                      {method.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600">Tools:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {method.tools.map((tool, i) => (
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
            <span>Authentication Testing Code</span>
          </CardTitle>
          <CardDescription>
            Practical authentication security testing examples
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
        <Users className="w-4 h-4" />
        <AlertTitle>Important Authentication Testing Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Only test authentication on applications you own or have explicit permission to test</li>
            <li>Never test with real user credentials or production data</li>
            <li>Be careful with account lockout testing - don't lock out legitimate users</li>
            <li>Document all findings and follow responsible disclosure practices</li>
            <li>Consider the impact of authentication bypass on data security and privacy</li>
          </ul>
        </AlertDescription>
      </Alert>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

export default AuthenticationTesting;
