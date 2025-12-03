'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Shield, Lock, AlertTriangle, CheckCircle, AlertCircle, ShieldAlert, Eye } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlIframeSecurityProps {
  onOpenWebPlayground?: (content: { html: string; css?: string; js?: string }) => void;
}

export default function HtmlIframeSecurity({ onOpenWebPlayground }: HtmlIframeSecurityProps) {
  const sandboxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sandbox Attribute Demo</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    
    .grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    }
    
    .demo-box {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .demo-header {
      padding: 20px;
      color: white;
    }
    
    .unsafe {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    .safe {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }
    
    .demo-body {
      padding: 20px;
    }
    
    iframe {
      width: 100%;
      height: 200px;
      border: 3px solid #e5e7eb;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    
    .warning {
      padding: 12px;
      background: #fef2f2;
      border-left: 4px solid #ef4444;
      border-radius: 4px;
      font-size: 14px;
      color: #991b1b;
    }
    
    .success {
      padding: 12px;
      background: #f0fdf4;
      border-left: 4px solid #10b981;
      border-radius: 4px;
      font-size: 14px;
      color: #065f46;
    }
    
    code {
      background: #f3f4f6;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 13px;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
      }
      
      .demo-box {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      .demo-body {
        color: #94a3b8;
      }
      
      iframe {
        border-color: #475569;
      }
      
      .warning {
        background: #7f1d1d;
        color: #fecaca;
        border-left-color: #dc2626;
      }
      
      .success {
        background: #14532d;
        color: #86efac;
        border-left-color: #22c55e;
      }
      
      code {
        background: #374151;
        color: #e2e8f0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔒 Iframe Sandbox Demo</h1>
    
    <div class="grid">
      <!-- Unsafe Iframe -->
      <div class="demo-box">
        <div class="demo-header unsafe">
          <h3 style="margin: 0;">⚠️ Without Sandbox</h3>
          <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">Dangerous - Scripts can run freely</p>
        </div>
        <div class="demo-body">
          <iframe 
            srcdoc="<h2>Unsafe Iframe</h2><p>This can run scripts and popups!</p><button onclick='alert(\"Popup!\")'>Click Me</button>"
            title="Unsafe iframe">
          </iframe>
          <div class="warning">
            <strong>⚠️ Security Risk:</strong> Scripts, forms, and popups are allowed!
          </div>
        </div>
      </div>
      
      <!-- Safe Iframe -->
      <div class="demo-box">
        <div class="demo-header safe">
          <h3 style="margin: 0;">✅ With Sandbox</h3>
          <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">Protected - Restricted capabilities</p>
        </div>
        <div class="demo-body">
          <iframe 
            srcdoc="<h2>Safe Iframe</h2><p>Sandboxed content - scripts blocked!</p><button onclick='alert(\"This won't work!\")'>Click Me</button>"
            sandbox
            title="Sandboxed iframe">
          </iframe>
          <div class="success">
            <strong>✓ Protected:</strong> Empty <code>sandbox</code> attribute blocks all dangerous features.
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const sandboxOptionsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sandbox Options</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 40px 20px;
      background: #f3f4f6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: #1f2937;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .options-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      margin-bottom: 40px;
    }
    
    .option-card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      border-left: 4px solid #ef4444;
      transition: transform 0.2s;
    }
    
    .option-card:hover {
      transform: translateY(-2px);
    }
    
    .option-card.safe {
      border-left-color: #10b981;
    }
    
    .option-card h3 {
      color: #1f2937;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    .option-card code {
      display: block;
      padding: 8px 12px;
      background: #f3f4f6;
      border-radius: 6px;
      margin: 12px 0;
      font-size: 12px;
      color: #ef4444;
      font-family: monospace;
    }
    
    .option-card.safe code {
      color: #10b981;
    }
    
    .option-card p {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
    }
    
    .demo-section {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .demo-section h2 {
      color: #1f2937;
      margin-bottom: 20px;
    }
    
    iframe {
      width: 100%;
      height: 250px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      margin: 4px 4px 0 0;
    }
    
    .badge-danger {
      background: #fee2e2;
      color: #991b1b;
    }
    
    .badge-success {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
      
      h1 {
        color: #f3f4f6;
      }
      
      .option-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }
      
      .option-card {
        background: #1e293b;
        border-color: #475569;
      }
      
      .option-card h3 {
        color: #f3f4f6;
      }
      
      .option-card p {
        color: #94a3b8;
      }
      
      .demo-section {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      .badge-danger {
        background: #7f1d1d;
        color: #fecaca;
      }
      
      .badge-success {
        background: #14532d;
        color: #86efac;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛡️ Sandbox Attribute Options</h1>
    
    <div class="options-grid">
      <div class="option-card">
        <h3>🚫 Default (Empty)</h3>
        <code>sandbox</code>
        <p>Blocks everything - maximum security</p>
        <div style="margin-top: 12px;">
          <span class="badge badge-danger">No Scripts</span>
          <span class="badge badge-danger">No Forms</span>
          <span class="badge badge-danger">No Popups</span>
        </div>
      </div>
      
      <div class="option-card safe">
        <h3>✅ Allow Scripts</h3>
        <code>sandbox="allow-scripts"</code>
        <p>Enables JavaScript execution</p>
        <div style="margin-top: 12px;">
          <span class="badge badge-success">Scripts OK</span>
          <span class="badge badge-danger">Forms Blocked</span>
        </div>
      </div>
      
      <div class="option-card safe">
        <h3>📝 Allow Forms</h3>
        <code>sandbox="allow-forms"</code>
        <p>Enables form submission</p>
        <div style="margin-top: 12px;">
          <span class="badge badge-success">Forms OK</span>
          <span class="badge badge-danger">Scripts Blocked</span>
        </div>
      </div>
      
      <div class="option-card safe">
        <h3>🔗 Allow Same Origin</h3>
        <code>sandbox="allow-same-origin"</code>
        <p>Treats content as same origin</p>
        <div style="margin-top: 12px;">
          <span class="badge badge-success">Same Origin</span>
        </div>
      </div>
      
      <div class="option-card safe">
        <h3>🪟 Allow Popups</h3>
        <code>sandbox="allow-popups"</code>
        <p>Enables opening new windows</p>
        <div style="margin-top: 12px;">
          <span class="badge badge-success">Popups OK</span>
        </div>
      </div>
      
      <div class="option-card safe">
        <h3>🎯 Allow Top Navigation</h3>
        <code>sandbox="allow-top-navigation"</code>
        <p>Can change parent page URL</p>
        <div style="margin-top: 12px;">
          <span class="badge badge-success">Navigation OK</span>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>🔄 Combined Options Example</h2>
      <p style="margin-bottom: 20px; color: #6b7280;">
        You can combine multiple sandbox values for fine-grained control:
      </p>
      <iframe 
        srcdoc="<style>body{font-family:system-ui;padding:20px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;text-align:center}</style><h2>Controlled Sandbox</h2><p>Scripts and forms are allowed!</p><form><input type='text' placeholder='Type here' style='padding:8px;margin:10px;border-radius:6px;border:none'/><button type='submit' style='padding:8px 16px;background:white;color:#667eea;border:none;border-radius:6px;font-weight:bold;cursor:pointer'>Submit</button></form><script>document.querySelector('form').onsubmit=(e)=>{e.preventDefault();alert('Form submitted!')}</script>"
        sandbox="allow-scripts allow-forms"
        title="Combined sandbox example">
      </iframe>
      <p style="margin-top: 16px; padding: 16px; background: #f0fdf4; border-radius: 8px; color: #065f46; font-size: 14px;">
        <strong>✓ Code:</strong> <code style="background:#d1fae5;padding:4px 8px;border-radius:4px;color:#065f46">sandbox="allow-scripts allow-forms"</code>
      </p>
    </div>
  </div>
</body>
</html>`;

  const securityHeadersExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iframe Security Headers</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .security-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
    
    .security-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .card-header {
      padding: 24px;
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      color: white;
    }
    
    .card-header h3 {
      margin-bottom: 8px;
      font-size: 1.3rem;
    }
    
    .card-header p {
      opacity: 0.8;
      font-size: 14px;
    }
    
    .card-body {
      padding: 24px;
    }
    
    .attribute {
      padding: 16px;
      background: #f3f4f6;
      border-radius: 8px;
      margin-bottom: 16px;
      border-left: 4px solid #667eea;
    }
    
    .attribute code {
      display: block;
      font-family: monospace;
      color: #667eea;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    .attribute p {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
    }
    
    .values {
      margin-top: 12px;
    }
    
    .value-badge {
      display: inline-block;
      padding: 4px 10px;
      background: #667eea;
      color: white;
      border-radius: 12px;
      font-size: 11px;
      margin: 4px 4px 0 0;
      font-family: monospace;
    }
    
    .demo-iframe {
      width: 100%;
      height: 200px;
      border: 3px solid #667eea;
      border-radius: 8px;
      margin-top: 16px;
    }
    
    .tip {
      padding: 16px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      margin-top: 16px;
      border-left: 4px solid #f59e0b;
    }
    
    .tip strong {
      color: #92400e;
      display: block;
      margin-bottom: 4px;
    }
    
    .tip p {
      color: #78350f;
      font-size: 13px;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
      
      h1, h2 {
        color: #f3f4f6;
      }
      
      .security-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }
      
      .attribute-card {
        background: #1e293b;
        border-color: #475569;
      }
      
      .attribute-card h3 {
        color: #f3f4f6;
      }
      
      .attribute-card p {
        color: #94a3b8;
      }
      
      .demo-box {
        background: #1e293b;
      }
      
      .tip {
        background: #78350f;
        color: #fed7aa;
        border-left-color: #fbbf24;
      }
      
      .tip strong {
        color: #fde68a;
      }
      
      .tip p {
        color: #fed7aa;
      }
      
      code {
        background: #374151;
        color: #e2e8f0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔐 Iframe Security Attributes</h1>
    
    <div class="security-grid">
      <!-- CSP Card -->
      <div class="security-card">
        <div class="card-header">
          <h3>🛡️ CSP (Content Security Policy)</h3>
          <p>Controls what can load in iframe</p>
        </div>
        <div class="card-body">
          <div class="attribute">
            <code>csp="default-src 'self'"</code>
            <p>Restricts iframe to load only from same origin</p>
            <div class="values">
              <span class="value-badge">'self'</span>
              <span class="value-badge">'none'</span>
              <span class="value-badge">https://trusted.com</span>
            </div>
          </div>
          <div class="tip">
            <strong>💡 Pro Tip:</strong>
            <p>Use CSP to prevent malicious content injection</p>
          </div>
        </div>
      </div>
      
      <!-- Referrer Policy Card -->
      <div class="security-card">
        <div class="card-header">
          <h3>🔗 Referrer Policy</h3>
          <p>Controls referrer information</p>
        </div>
        <div class="card-body">
          <div class="attribute">
            <code>referrerpolicy="no-referrer"</code>
            <p>Prevents sending referrer header to embedded page</p>
            <div class="values">
              <span class="value-badge">no-referrer</span>
              <span class="value-badge">origin</span>
              <span class="value-badge">strict-origin</span>
            </div>
          </div>
          <iframe 
            src="https://example.com"
            referrerpolicy="no-referrer"
            title="Referrer policy demo"
            class="demo-iframe">
          </iframe>
        </div>
      </div>
      
      <!-- Permissions Policy Card -->
      <div class="security-card">
        <div class="card-header">
          <h3>🎛️ Permissions Policy</h3>
          <p>Fine-grained feature control</p>
        </div>
        <div class="card-body">
          <div class="attribute">
            <code>allow="camera 'none'; microphone 'none'"</code>
            <p>Denies access to camera and microphone</p>
            <div class="values">
              <span class="value-badge">camera</span>
              <span class="value-badge">microphone</span>
              <span class="value-badge">geolocation</span>
              <span class="value-badge">payment</span>
            </div>
          </div>
          <div class="tip">
            <strong>💡 Pro Tip:</strong>
            <p>Always explicitly deny unused permissions</p>
          </div>
        </div>
      </div>
      
      <!-- X-Frame-Options Card -->
      <div class="security-card">
        <div class="card-header">
          <h3>🚫 Clickjacking Protection</h3>
          <p>Prevent your site in iframes</p>
        </div>
        <div class="card-body">
          <div class="attribute">
            <code>X-Frame-Options: DENY</code>
            <p>Server header that prevents framing</p>
            <div class="values">
              <span class="value-badge">DENY</span>
              <span class="value-badge">SAMEORIGIN</span>
              <span class="value-badge">ALLOW-FROM uri</span>
            </div>
          </div>
          <div class="tip">
            <strong>⚠️ Important:</strong>
            <p>Set this header on your server to prevent clickjacking attacks</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Shield}
        category="11. Iframes & Embedding"
        title="Iframe Security"
        description="Learn how to safely use iframes and protect against security vulnerabilities"
        colorTheme="blue"
      />

      {/* Security Risks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            Why Iframe Security Matters
          </CardTitle>
          <CardDescription>
            Iframes can introduce serious security risks if not properly configured
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
            <ShieldAlert className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-900 dark:text-red-100">Security Warning</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Embedding untrusted content can lead to clickjacking, XSS attacks, data theft, and malicious code execution.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Clickjacking</h4>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200">
                Attacker tricks users into clicking invisible iframe elements
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">XSS Attacks</h4>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200">
                Malicious scripts injected through embedded content
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Data Leakage</h4>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200">
                Sensitive information exposed to embedded content
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Unauthorized Access</h4>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200">
                Iframe accessing parent page cookies and storage
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sandbox Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            1. Sandbox Attribute - Basic Protection
          </CardTitle>
          <CardDescription>
            The sandbox attribute restricts what the iframe can do
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={sandboxExample}
            css=""
            title="Sandbox Demo"
            colorTheme="red"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">🛡️ Sandbox Protection:</h4>
            <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <div>• Empty <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">sandbox</code> blocks everything</div>
              <div>• Prevents scripts, forms, popups, and navigation</div>
              <div>• Treats content as unique origin (can't access parent)</div>
              <div>• Add specific permissions only when needed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sandbox Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            2. Sandbox Options - Fine-Grained Control
          </CardTitle>
          <CardDescription>
            Allow specific capabilities while maintaining security
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={sandboxOptionsExample}
            css=""
            title="Sandbox Options"
            colorTheme="blue"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Available Sandbox Values:</h4>
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-blue-800 dark:text-blue-200">
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">allow-scripts</code> - Enable JavaScript</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">allow-forms</code> - Enable form submission</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">allow-popups</code> - Allow opening windows</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">allow-same-origin</code> - Same origin access</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">allow-top-navigation</code> - Navigate parent</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">allow-modals</code> - Show dialogs</div>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>⚠️ Important</AlertTitle>
              <AlertDescription className="text-sm">
                Be very careful with <code>allow-same-origin</code> + <code>allow-scripts</code> together. 
                This combination can let the iframe remove its own sandbox attribute!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Security Headers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
              <ShieldAlert className="h-5 w-5" />
            </div>
            3. Additional Security Attributes
          </CardTitle>
          <CardDescription>
            Modern security features for comprehensive protection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={securityHeadersExample}
            css=""
            title="Security Headers"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Security Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            Security Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Essential Security Measures:</h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Always use <code>sandbox</code> attribute for untrusted content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Set <code>referrerpolicy="no-referrer"</code> to prevent information leakage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Use <code>allow</code> attribute to restrict permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Implement Content Security Policy (CSP) headers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Set X-Frame-Options to prevent clickjacking on your site</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Only embed HTTPS content (avoid mixed content)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Validate and sanitize user-provided iframe sources</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Never Do This:</h4>
              <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Embed user-provided URLs without validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Use iframes without sandbox for untrusted content</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Combine allow-scripts with allow-same-origin carelessly</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Ignore X-Frame-Options on your own pages</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Secure Iframe Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-muted">
            <pre className="text-sm overflow-x-auto">
              <code>{`<iframe 
  src="https://trusted-source.com/content"
  title="Secure embedded content"
  sandbox="allow-scripts allow-same-origin"
  referrerpolicy="no-referrer"
  allow="accelerometer 'none'; camera 'none'; microphone 'none'"
  loading="lazy"
  width="100%"
  height="400">
</iframe>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          <code>sandbox</code> attribute is supported in all modern browsers. 
          <code>referrerpolicy</code> (Chrome 51+, Firefox 50+, Safari 11.1+) and 
          <code>allow</code> (Chrome 60+, Firefox 74+, Safari 11.1+) have excellent support. 
          Always test security features in your target browsers.
        </AlertDescription>
      </Alert>
    </div>
  );
}
