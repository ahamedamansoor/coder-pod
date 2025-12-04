'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Shield, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlSecurityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlSecurity({ onOpenWebPlayground }: HtmlSecurityProps) {
  
  const securityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Security Best Practices</title>
  
  <!-- Content Security Policy -->
  <meta http-equiv="Content-Security-Policy" 
    content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
  
  <!-- Prevent MIME type sniffing -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  
  <!-- Prevent clickjacking -->
  <meta http-equiv="X-Frame-Options" content="DENY">
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%); }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #dc2626; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #f87171; }
    
    .threat-card {
      background: #fef2f2;
      padding: 25px;
      border-radius: 12px;
      border-left: 4px solid #ef4444;
      margin: 20px 0;
    }
    :root.dark .threat-card { background: #7f1d1d; }
    
    .threat-card h2 {
      color: #991b1b;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    :root.dark .threat-card h2 { color: #fca5a5; }
    
    .vulnerability {
      background: #fee2e2;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      font-family: monospace;
      color: #991b1b;
    }
    :root.dark .vulnerability { background: #450a0a; color: #fecaca; }
    
    .solution {
      background: #dcfce7;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      font-family: monospace;
      color: #065f46;
    }
    :root.dark .solution { background: #064e3b; color: #6ee7b7; }
    
    .security-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin: 20px 0;
    }
    
    .security-item {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
    }
    :root.dark .security-item { background: #374151; border-color: #4b5563; }
    
    .security-item h4 {
      color: #1f2937;
      margin-bottom: 10px;
    }
    :root.dark .security-item h4 { color: #f3f4f6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔒 HTML Security</h1>
    
    <!-- XSS Protection -->
    <div class="threat-card">
      <h2>1. Cross-Site Scripting (XSS)</h2>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Malicious scripts injected into web pages
      </p>
      
      <h3 style="color: #ef4444; margin-top: 20px; margin-bottom: 10px;">
        ❌ Vulnerable Code
      </h3>
      <div class="vulnerability">
&lt;!-- Never insert user input directly --&gt;
&lt;div&gt;Welcome &lt;script&gt;document.write(userInput)&lt;/script&gt;&lt;/div&gt;

&lt;!-- Dangerous innerHTML --&gt;
element.innerHTML = userInput;
      </div>
      
      <h3 style="color: #10b981; margin-top: 20px; margin-bottom: 10px;">
        ✅ Secure Code
      </h3>
      <div class="solution">
&lt;!-- Escape user input --&gt;
&lt;div&gt;Welcome &lt;span id="username"&gt;&lt;/span&gt;&lt;/div&gt;

&lt;script&gt;
  // Use textContent, not innerHTML
  document.getElementById('username').textContent = userInput;
&lt;/script&gt;
      </div>
    </div>
    
    <!-- CSRF Protection -->
    <div class="threat-card">
      <h2>2. Cross-Site Request Forgery (CSRF)</h2>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Unauthorized commands from trusted users
      </p>
      
      <h3 style="color: #10b981; margin-top: 20px; margin-bottom: 10px;">
        ✅ Protection
      </h3>
      <div class="solution">
&lt;!-- Include CSRF token in forms --&gt;
&lt;form method="POST" action="/transfer"&gt;
  &lt;input type="hidden" name="csrf_token" value="random_token"&gt;
  &lt;input type="text" name="amount"&gt;
  &lt;button type="submit"&gt;Transfer&lt;/button&gt;
&lt;/form&gt;
      </div>
    </div>
    
    <!-- Security Headers -->
    <h2 style="color: #dc2626; margin-top: 40px; margin-bottom: 20px;">
      🛡️ Security Headers
    </h2>
    
    <div class="security-grid">
      <div class="security-item">
        <h4>Content Security Policy</h4>
        <p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 10px;">
          Prevents XSS by restricting resource sources
        </p>
        <code style="font-size: 0.7rem; background: #e5e7eb; padding: 4px; border-radius: 4px; display: block;">
          Content-Security-Policy: default-src 'self'
        </code>
      </div>
      
      <div class="security-item">
        <h4>X-Frame-Options</h4>
        <p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 10px;">
          Prevents clickjacking attacks
        </p>
        <code style="font-size: 0.7rem; background: #e5e7eb; padding: 4px; border-radius: 4px; display: block;">
          X-Frame-Options: DENY
        </code>
      </div>
      
      <div class="security-item">
        <h4>X-Content-Type-Options</h4>
        <p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 10px;">
          Prevents MIME type sniffing
        </p>
        <code style="font-size: 0.7rem; background: #e5e7eb; padding: 4px; border-radius: 4px; display: block;">
          X-Content-Type-Options: nosniff
        </code>
      </div>
      
      <div class="security-item">
        <h4>Strict-Transport-Security</h4>
        <p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 10px;">
          Forces HTTPS connections
        </p>
        <code style="font-size: 0.7rem; background: #e5e7eb; padding: 4px; border-radius: 4px; display: block;">
          Strict-Transport-Security: max-age=31536000
        </code>
      </div>
    </div>
    
    <div style="background: #dcfce7; padding: 20px; border-radius: 12px; border-left: 4px solid #10b981; margin-top: 30px;">
      <h3 style="color: #065f46; margin-bottom: 10px;">🔐 Security Checklist</h3>
      <ul style="list-style: none; line-height: 2; color: #166534;">
        <li>✓ Validate and sanitize all user input</li>
        <li>✓ Use HTTPS everywhere</li>
        <li>✓ Implement Content Security Policy</li>
        <li>✓ Add CSRF tokens to forms</li>
        <li>✓ Escape output (textContent not innerHTML)</li>
        <li>✓ Set security headers</li>
        <li>✓ Keep dependencies updated</li>
        <li>✓ Use SameSite cookies</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Shield}
        category="HTML · Best Practices"
        title="What is HTML Security?"
        description="Learn how to protect your website from common security threats"
        colorTheme="blue"
      />

      {/* Security Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            HTML Security Best Practices
          </CardTitle>
          <CardDescription>
            Protecting against XSS, CSRF, and other threats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={securityExample}
            title="Security Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common Threats */}
      <Card>
        <CardHeader>
          <CardTitle>Common Security Threats</CardTitle>
          <CardDescription>
            Vulnerabilities to watch out for
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Cross-Site Scripting (XSS)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Attacker injects malicious scripts into web pages
              </p>
              <p className="text-xs bg-white dark:bg-slate-900 p-2 rounded font-mono mb-2">
                ❌ element.innerHTML = userInput;
              </p>
              <p className="text-xs bg-white dark:bg-slate-900 p-2 rounded font-mono">
                ✅ element.textContent = userInput;
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Cross-Site Request Forgery (CSRF)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Unauthorized actions performed on behalf of authenticated users
              </p>
              <p className="text-xs bg-white dark:bg-slate-900 p-2 rounded font-mono">
                ✅ Include CSRF token in all forms
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Clickjacking</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Tricking users into clicking hidden elements
              </p>
              <p className="text-xs bg-white dark:bg-slate-900 p-2 rounded font-mono">
                ✅ X-Frame-Options: DENY
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Open Redirects</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Redirecting users to malicious sites
              </p>
              <p className="text-xs bg-white dark:bg-slate-900 p-2 rounded font-mono">
                ✅ Validate redirect URLs against whitelist
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Headers */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Security Headers</CardTitle>
          <CardDescription>
            HTTP headers that enhance security
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Content-Security-Policy (CSP)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Controls which resources can be loaded
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com;
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">X-Frame-Options</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Prevents site from being embedded in iframe
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                X-Frame-Options: DENY or SAMEORIGIN
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">X-Content-Type-Options</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Prevents MIME-sniffing attacks
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                X-Content-Type-Options: nosniff
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Strict-Transport-Security (HSTS)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Forces HTTPS connections
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                Strict-Transport-Security: max-age=31536000; includeSubDomains
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Referrer-Policy</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Controls referrer information sent
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                Referrer-Policy: strict-origin-when-cross-origin
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>HTML Security Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Validate all user input</strong> - Server-side validation is required</li>
            <li><strong>Escape output</strong> - Use textContent, not innerHTML for user data</li>
            <li><strong>Use HTTPS everywhere</strong> - Encrypt all traffic</li>
            <li><strong>Implement CSP</strong> - Content Security Policy headers</li>
            <li><strong>CSRF tokens</strong> - Include in all state-changing forms</li>
            <li><strong>SameSite cookies</strong> - Prevent CSRF attacks</li>
            <li><strong>Security headers</strong> - X-Frame-Options, X-Content-Type-Options, etc.</li>
            <li><strong>Keep dependencies updated</strong> - Patch security vulnerabilities</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Security Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Trusting user input</strong> - All input is potentially malicious</li>
            <li><strong>Using innerHTML with user data</strong> - Opens XSS vulnerabilities</li>
            <li><strong>No CSRF protection</strong> - Forms vulnerable to cross-site attacks</li>
            <li><strong>Missing security headers</strong> - No CSP, X-Frame-Options, etc.</li>
            <li><strong>Not using HTTPS</strong> - Data transmitted in plain text</li>
            <li><strong>Inline scripts without CSP</strong> - Allows script injection</li>
            <li><strong>Outdated dependencies</strong> - Known vulnerabilities unpatched</li>
            <li><strong>Client-side validation only</strong> - Easily bypassed</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Additional Info */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Security Resources</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>OWASP</strong> - Open Web Application Security Project (owasp.org)</li>
            <li><strong>MDN Security</strong> - Mozilla Developer Network security guides</li>
            <li><strong>SecurityHeaders.com</strong> - Test your security headers</li>
            <li><strong>CSP Evaluator</strong> - Google's CSP validation tool</li>
            <li><strong>Snyk</strong> - Find vulnerabilities in dependencies</li>
            <li><strong>Helmet.js</strong> - Set security headers in Node.js apps</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
