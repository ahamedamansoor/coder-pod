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
  Globe,
  Database,
  Settings,
  FileText,
  Zap,
  Download,
  Upload,
} from 'lucide-react';

const OWASPIntegration = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' | 'warning' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'owasp-integration',
    title: 'OWASP Integration',
    explanation: 'Integrating OWASP ZAP with Selenium tests',
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

  const simulateOWASPScan = () => {
    setIsScanning(true);
    addLog('Starting OWASP ZAP security scan...', 'info');
    setVulnerabilityCount(0);
    
    const owaspTests = [
      { test: 'SQL Injection', result: 'High severity vulnerability found' },
      { test: 'XSS (Reflected)', result: 'Medium severity XSS detected' },
      { test: 'Security Headers', result: 'Missing security headers' },
      { test: 'Directory Browsing', result: 'Directory browsing disabled' },
      { test: 'CSRF Protection', result: 'CSRF token validation working' },
      { test: 'SSL/TLS Configuration', result: 'Weak SSL configuration' }
    ];

    owaspTests.forEach((test, index) => {
      setTimeout(() => {
        const hasIssue = Math.random() > 0.5; // 50% chance of issue
        
        if (hasIssue) {
          addLog(`🚨 OWASP ALERT: ${test.test} - ${test.result}`, 'error');
          setVulnerabilityCount(prev => prev + 1);
        } else {
          addLog(`✅ SECURE: ${test.test}`, 'success');
        }
        
        if (index === owaspTests.length - 1) {
          setIsScanning(false);
          addLog(`OWASP scan complete! Found ${vulnerabilityCount + (hasIssue ? 1 : 0)} vulnerabilities`, 'warning');
        }
      }, (index + 1) * 700);
    });
  };

  useEffect(() => {
    addLog('OWASP Integration tool ready', 'info');
  }, []);

  const simpleCodeExample = `# Python OWASP ZAP Integration with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import requests
import time
import json

class OWASPZAPIntegration:
    def __init__(self, zap_proxy="http://localhost:8080", zap_api_key=""):
        self.zap_proxy = zap_proxy
        self.zap_api_key = zap_api_key
        self.zap_base_url = f"{zap_proxy}/JSON"
        self.session_id = None
        
    def start_zap_session(self):
        """Start a new ZAP session"""
        try:
            response = requests.get(f"{self.zap_base_url}/core/view/coresessionversion/")
            if response.status_code == 200:
                self.session_id = response.json().get('session', 'default')
                print("ZAP session started successfully")
                return True
        except Exception as e:
            print(f"Failed to start ZAP session: {e}")
        return False
    
    def configure_selenium_with_zap(self):
        """Configure Selenium to use ZAP proxy"""
        options = webdriver.ChromeOptions()
        options.add_argument(f'--proxy-server={self.zap_proxy}')
        options.add_argument('--ignore-certificate-errors')
        
        driver = webdriver.Chrome(options=options)
        return driver
    
    def spider_target(self, target_url):
        """Run ZAP spider on target URL"""
        try:
            # Start spider
            response = requests.get(f"{self.zap_base_url}/spider/action/scan/", 
                                 params={'url': target_url})
            scan_id = response.json().get('scan', '')
            
            # Wait for spider to complete
            while True:
                response = requests.get(f"{self.zap_base_url}/spider/view/status/", 
                                     params={'scanId': scan_id})
                status = int(response.json().get('status', '0'))
                if status >= 100:
                    break
                time.sleep(2)
            
            print("Spider scan completed")
            return True
        except Exception as e:
            print(f"Spider scan failed: {e}")
        return False
    
    def active_scan(self, target_url):
        """Run ZAP active scan on target URL"""
        try:
            # Start active scan
            response = requests.get(f"{self.zap_base_url}/ascan/action/scan/", 
                                 params={'url': target_url})
            scan_id = response.json().get('scan', '')
            
            # Wait for active scan to complete
            while True:
                response = requests.get(f"{self.zap_base_url}/ascan/view/status/", 
                                     params={'scanId': scan_id})
                status = int(response.json().get('status', '0'))
                if status >= 100:
                    break
                time.sleep(5)
            
            print("Active scan completed")
            return True
        except Exception as e:
            print(f"Active scan failed: {e}")
        return False
    
    def get_alerts(self, risk_level="High"):
        """Get security alerts from ZAP"""
        try:
            response = requests.get(f"{self.zap_base_url}/core/view/alerts/", 
                                 params={'riskId': risk_level})
            alerts = response.json().get('alerts', [])
            return alerts
        except Exception as e:
            print(f"Failed to get alerts: {e}")
        return []
    
    def generate_report(self, output_file="zap_report.html"):
        """Generate ZAP security report"""
        try:
            response = requests.get(f"{self.zap_base_url}/core/htmlreport/")
            with open(output_file, 'w') as f:
                f.write(response.text)
            print(f"Report saved to {output_file}")
            return True
        except Exception as e:
            print(f"Failed to generate report: {e}")
        return False
    
    def run_full_security_test(self, target_url):
        """Run complete security test with ZAP and Selenium"""
        print(f"Starting security test for: {target_url}")
        
        # Start ZAP session
        if not self.start_zap_session():
            return False
        
        # Configure Selenium with ZAP proxy
        driver = self.configure_selenium_with_zap()
        
        try:
            # Navigate through application with Selenium
            driver.get(target_url)
            time.sleep(3)
            
            # Find and click common links
            links = driver.find_elements(By.TAG_NAME, "a")
            for link in links[:10]:  # Test first 10 links
                try:
                    link.click()
                    time.sleep(2)
                    driver.back()
                    time.sleep(1)
                except:
                    continue
            
            # Run ZAP spider
            self.spider_target(target_url)
            
            # Run ZAP active scan
            self.active_scan(target_url)
            
            # Get high-risk alerts
            high_risk_alerts = self.get_alerts("High")
            print(f"Found {len(high_risk_alerts)} high-risk vulnerabilities")
            
            # Generate report
            self.generate_report()
            
            return len(high_risk_alerts)
            
        finally:
            driver.quit()

# Usage
if __name__ == "__main__":
    zap = OWASPZAPIntegration()
    vuln_count = zap.run_full_security_test("https://example.com")
    print(f"Security test completed. Found {vuln_count} vulnerabilities")`;

  const jsCodeExample = `// JavaScript OWASP ZAP Integration
const { Builder, By } = require('selenium-webdriver');
const axios = require('axios');

class OWASPZAPIntegration {
    constructor(zapProxy = 'http://localhost:8080', zapApiKey = '') {
        this.zapProxy = zapProxy;
        this.zapApiKey = zapApiKey;
        this.zapBaseUrl = \`\${zapProxy}/JSON\`;
        this.sessionId = null;
    }
    
    async startZapSession() {
        try {
            const response = await axios.get(\`\${this.zapBaseUrl}/core/view/coresessionversion/\`);
            if (response.status === 200) {
                this.sessionId = response.data.session || 'default';
                console.log('ZAP session started successfully');
                return true;
            }
        } catch (error) {
            console.log(\`Failed to start ZAP session: \${error.message}\`);
        }
        return false;
    }
    
    configureSeleniumWithZAP() {
        const options = new chrome.Options();
        options.addArguments(\`--proxy-server=\${this.zapProxy}\`);
        options.addArguments('--ignore-certificate-errors');
        
        const driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        return driver;
    }
    
    async spiderTarget(targetUrl) {
        try {
            // Start spider
            const response = await axios.get(\`\${this.zapBaseUrl}/spider/action/scan/\`, {
                params: { url: targetUrl }
            });
            const scanId = response.data.scan;
            
            // Wait for spider to complete
            while (true) {
                const statusResponse = await axios.get(\`\${this.zapBaseUrl}/spider/view/status/\`, {
                    params: { scanId: scanId }
                });
                const status = parseInt(statusResponse.data.status || '0');
                if (status >= 100) break;
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
            
            console.log('Spider scan completed');
            return true;
        } catch (error) {
            console.log(\`Spider scan failed: \${error.message}\`);
        }
        return false;
    }
    
    async activeScan(targetUrl) {
        try {
            // Start active scan
            const response = await axios.get(\`\${this.zapBaseUrl}/ascan/action/scan/\`, {
                params: { url: targetUrl }
            });
            const scanId = response.data.scan;
            
            // Wait for active scan to complete
            while (true) {
                const statusResponse = await axios.get(\`\${this.zapBaseUrl}/ascan/view/status/\`, {
                    params: { scanId: scanId }
                });
                const status = parseInt(statusResponse.data.status || '0');
                if (status >= 100) break;
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
            
            console.log('Active scan completed');
            return true;
        } catch (error) {
            console.log(\`Active scan failed: \${error.message}\`);
        }
        return false;
    }
    
    async getAlerts(riskLevel = 'High') {
        try {
            const response = await axios.get(\`\${this.zapBaseUrl}/core/view/alerts/\`, {
                params: { riskId: riskLevel }
            });
            return response.data.alerts || [];
        } catch (error) {
            console.log(\`Failed to get alerts: \${error.message}\`);
        }
        return [];
    }
    
    async generateReport(outputFile = 'zap_report.html') {
        try {
            const response = await axios.get(\`\${this.zapBaseUrl}/core/htmlreport/\`);
            const fs = require('fs');
            fs.writeFileSync(outputFile, response.data);
            console.log(\`Report saved to \${outputFile}\`);
            return true;
        } catch (error) {
            console.log(\`Failed to generate report: \${error.message}\`);
        }
        return false;
    }
    
    async runFullSecurityTest(targetUrl) {
        console.log(\`Starting security test for: \${targetUrl}\`);
        
        // Start ZAP session
        if (!await this.startZapSession()) {
            return false;
        }
        
        // Configure Selenium with ZAP proxy
        const driver = this.configureSeleniumWithZAP();
        
        try {
            // Navigate through application with Selenium
            await driver.get(targetUrl);
            await driver.sleep(3000);
            
            // Find and click common links
            const links = await driver.findElements(By.tagName('a'));
            for (let i = 0; i < Math.min(10, links.length); i++) {
                try {
                    await links[i].click();
                    await driver.sleep(2000);
                    await driver.navigate().back();
                    await driver.sleep(1000);
                } catch (error) {
                    continue;
                }
            }
            
            // Run ZAP spider
            await this.spiderTarget(targetUrl);
            
            // Run ZAP active scan
            await this.activeScan(targetUrl);
            
            // Get high-risk alerts
            const highRiskAlerts = await this.getAlerts('High');
            console.log(\`Found \${highRiskAlerts.length} high-risk vulnerabilities\`);
            
            // Generate report
            await this.generateReport();
            
            return highRiskAlerts.length;
            
        } finally {
            await driver.quit();
        }
    }
}

// Usage
(async () => {
    const zap = new OWASPZAPIntegration();
    const vulnCount = await zap.runFullSecurityTest('https://example.com');
    console.log(\`Security test completed. Found \${vulnCount} vulnerabilities\`);
})();`;

  const owaspFeatures = [
    {
      title: 'Automated Scanning',
      description: 'Automated vulnerability scanning with ZAP',
      icon: Zap,
      features: ['Passive scanning', 'Active scanning', 'Spider crawling', 'API scanning'],
      benefit: 'Comprehensive vulnerability detection without manual effort'
    },
    {
      title: 'Selenium Integration',
      description: 'Seamless integration with Selenium tests',
      icon: Settings,
      features: ['Proxy configuration', 'Session management', 'Test orchestration', 'Report generation'],
      benefit: 'Security testing integrated with functional testing'
    },
    {
      title: 'Vulnerability Detection',
      description: 'Detection of OWASP Top 10 vulnerabilities',
      icon: AlertTriangle,
      features: ['SQL Injection', 'XSS detection', 'Security headers', 'Authentication issues'],
      benefit: 'Coverage of most critical web security vulnerabilities'
    },
    {
      title: 'Reporting & Analysis',
      description: 'Detailed security reports and analysis',
      icon: FileText,
      features: ['HTML reports', 'JSON data', 'Risk scoring', 'Remediation advice'],
      benefit: 'Actionable insights for security improvements'
    }
  ];

  const owaspSetup = [
    {
      step: 'Install OWASP ZAP',
      description: 'Download and install OWASP ZAP on your system',
      actions: ['Download from owasp.org', 'Install desktop application', 'Start ZAP proxy', 'Configure API key'],
      verification: 'ZAP running on localhost:8080'
    },
    {
      step: 'Configure Selenium',
      description: 'Set up Selenium to use ZAP as proxy',
      actions: ['Add proxy settings to browser options', 'Ignore certificate errors', 'Configure proxy authentication', 'Test proxy connection'],
      verification: 'Traffic flowing through ZAP'
    },
    {
      step: 'API Integration',
      description: 'Integrate ZAP API with your test framework',
      actions: ['Import HTTP client library', 'Configure ZAP API endpoints', 'Implement session management', 'Add error handling'],
      verification: 'API calls to ZAP working'
    },
    {
      step: 'Test Orchestration',
      description: 'Create automated security test workflows',
      actions: ['Start ZAP session', 'Run Selenium tests', 'Trigger ZAP scans', 'Generate reports'],
      verification: 'End-to-end automated security testing'
    }
  ];

  const vulnerabilityTypes = [
    { type: 'SQL Injection', severity: 'High', description: 'Database query manipulation' },
    { type: 'XSS (Reflected)', severity: 'Medium', description: 'Reflected script injection' },
    { type: 'XSS (Stored)', severity: 'High', description: 'Stored script injection' },
    { type: 'CSRF', severity: 'Medium', description: 'Cross-site request forgery' },
    { type: 'Security Headers', severity: 'Low', description: 'Missing security headers' },
    { type: 'Directory Browsing', severity: 'Medium', description: 'Directory listing enabled' },
    { type: 'SSL/TLS Issues', severity: 'High', description: 'Weak SSL configuration' },
    { type: 'Authentication Bypass', severity: 'Critical', description: 'Authentication weaknesses' }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="OWASP Integration"
        description="Integrating OWASP ZAP with Selenium for comprehensive security testing"
        icon={Shield}
        category="Selenium · Security Testing"
        colorTheme="red"
      />

      {/* What is OWASP Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>What is OWASP ZAP Integration?</span>
          </CardTitle>
          <CardDescription>
            Understanding OWASP ZAP and Selenium integration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              <strong>OWASP ZAP (Zed Attack Proxy)</strong> is a free, open-source penetration testing tool for finding 
              vulnerabilities in web applications. Integrating ZAP with Selenium allows you to combine automated 
              functional testing with comprehensive security scanning, providing continuous security assessment 
              throughout the development lifecycle.
            </p>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
              <p className="text-sm font-medium text-red-800 dark:text-red-200">
                🛡️ OWASP ZAP is maintained by the Open Web Application Security Project (OWASP) and is 
                widely used for security testing and vulnerability assessment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* OWASP Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Scan className="w-5 h-5" />
            <span>OWASP ZAP Scanner</span>
          </CardTitle>
          <CardDescription>
            Interactive OWASP vulnerability scanning simulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateOWASPScan}
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
                  <span>Start OWASP Scan</span>
                </>
              )}
            </Button>
            <Badge variant={vulnerabilityCount > 0 ? "destructive" : "default"}>
              {vulnerabilityCount} OWASP Vulnerabilities
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
                  Click "Start OWASP Scan" to begin testing.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* OWASP Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5" />
            <span>OWASP ZAP Features</span>
          </CardTitle>
          <CardDescription>
            Key capabilities of OWASP ZAP integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {owaspFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-red-600" />
                    <h4 className="font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-blue-600">Features:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {feature.features.map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-green-600">Benefit:</span>
                      <p className="text-xs mt-1">{feature.benefit}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>OWASP ZAP Setup Guide</span>
          </CardTitle>
          <CardDescription>
            Step-by-step setup for ZAP and Selenium integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {owaspSetup.map((step, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Step {index + 1}: {step.step}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {step.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600">Actions:</span>
                    <ul className="text-xs mt-1 list-disc list-inside">
                      {step.actions.map((action, i) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600">Verification:</span>
                    <p className="text-xs mt-1">{step.verification}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vulnerability Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-5 h-5" />
            <span>Detected Vulnerability Types</span>
          </CardTitle>
          <CardDescription>
            OWASP ZAP can detect various vulnerability types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {vulnerabilityTypes.map((vuln, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm">{vuln.type}</h5>
                  <Badge variant={vuln.severity === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                    {vuln.severity}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {vuln.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Terminal className="w-5 h-5" />
            <span>OWASP Integration Code</span>
          </CardTitle>
          <CardDescription>
            Complete integration examples for ZAP and Selenium
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
        <AlertTriangle className="w-4 h-4" />
        <AlertTitle>Important OWASP Testing Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Only run OWASP ZAP on applications you own or have explicit permission to test</li>
            <li>Active scanning can impact application performance - schedule appropriately</li>
            <li>Ensure ZAP proxy is properly configured before running tests</li>
            <li>Review and validate ZAP findings - false positives can occur</li>
            <li>Keep ZAP updated for latest vulnerability detection capabilities</li>
          </ul>
        </AlertDescription>
      </Alert>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

export default OWASPIntegration;
