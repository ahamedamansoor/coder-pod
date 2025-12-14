'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Code2,
  Lightbulb,
  Lock,
} from 'lucide-react';

export default function JavaScriptCSP() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ShieldAlert}
        category="JavaScript Security"
        title="Content Security Policy (CSP)"
        description="Control which resources can be loaded and executed"
        colorTheme="red"
      />

      {/* What is CSP */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/20 dark:from-purple-950/10 dark:via-indigo-950/5 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Content Security Policy?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                CSP is an HTTP security header that <strong className="text-purple-700 dark:text-purple-400">restricts which resources</strong> (scripts, styles, images, etc.) can be loaded on your web page. It's a powerful defense against <strong className="text-indigo-700 dark:text-indigo-400">XSS attacks, data injection, and clickjacking</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">XSS Prevention</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Blocks inline scripts and unsafe eval()
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Whitelisting</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only approved sources can load resources
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Reporting</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Get notified of policy violations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CSP Directives */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Common CSP Directives</CardTitle>
              <CardDescription>Control different resource types</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">default-src</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Fallback for all resource types
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">default-src 'self';</code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">script-src</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Controls JavaScript sources
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">script-src 'self' cdn.example.com;</code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">style-src</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Controls CSS stylesheets
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">style-src 'self' 'unsafe-inline';</code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">img-src</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Controls image sources
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">img-src 'self' data: https:;</code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">connect-src</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Controls AJAX, WebSocket, fetch
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">connect-src 'self' api.example.com;</code>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">frame-ancestors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Prevents clickjacking
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">frame-ancestors 'none';</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Basic CSP */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Basic CSP Header</CardTitle>
          <CardDescription>Setting up content security policy</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Node.js/Express - Set CSP header
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' https://cdn.jsdelivr.net; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://api.example.com; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'"
  );
  next();
});

// Or use helmet.js middleware
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"],
  }
}));`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* CSP Source Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>CSP Source Keywords</CardTitle>
              <CardDescription>Special values for resource sources</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">'self'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Resources from same origin (same protocol, domain, port)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">'none'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Block all sources (nothing allowed)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">'unsafe-inline'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ⚠️ Allows inline scripts/styles (defeats purpose of CSP, avoid if possible)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">'unsafe-eval'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ⚠️ Allows eval() and similar functions (dangerous, avoid)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">'nonce-{'{random}'}'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Allow specific inline scripts with matching nonce attribute
              </p>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">'sha256-{'{hash}'}'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Allow specific inline script by its hash
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Nonce-based CSP */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Using Nonces for Inline Scripts</CardTitle>
          <CardDescription>✅ Secure way to allow specific inline scripts</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Backend: Generate nonce per request
const crypto = require('crypto');

app.use((req, res, next) => {
  // Generate random nonce
  res.locals.cspNonce = crypto.randomBytes(16).toString('base64');
  
  // Set CSP with nonce
  res.setHeader(
    'Content-Security-Policy',
    \`default-src 'self'; script-src 'self' 'nonce-\${res.locals.cspNonce}'\`
  );
  
  next();
});

// HTML template: Use nonce attribute
<script nonce="<%= cspNonce %>">
  // This inline script is allowed!
  console.log('Script with valid nonce');
</script>

<script>
  // This will be BLOCKED (no nonce)
  console.log('Blocked!');
</script>

// React/Next.js example
export default function Page() {
  const nonce = headers().get('x-nonce'); // Get from headers
  
  return (
    <html>
      <head>
        <script nonce={nonce}>
          {/* Inline script allowed with nonce */}
        </script>
      </head>
    </html>
  );
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Report-Only Mode */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: CSP Report-Only Mode</CardTitle>
          <CardDescription>Test CSP without blocking resources</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Use Content-Security-Policy-Report-Only for testing
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; " +
    "script-src 'self'; " +
    "report-uri /csp-violation-report"  // Where to send violations
  );
  next();
});

// Endpoint to receive violation reports
app.post('/csp-violation-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  const violation = req.body;
  
  console.log('CSP Violation:', {
    blockedURI: violation['blocked-uri'],
    violatedDirective: violation['violated-directive'],
    documentURI: violation['document-uri'],
    lineNumber: violation['line-number'],
    sourceFile: violation['source-file']
  });
  
  // Log to monitoring service
  // logger.warn('CSP violation detected', violation);
  
  res.status(204).end();
});

// Modern alternative: report-to directive
res.setHeader('Report-To', JSON.stringify({
  group: "csp-endpoint",
  max_age: 10886400,
  endpoints: [{ url: "https://example.com/csp-reports" }]
}));

res.setHeader(
  'Content-Security-Policy',
  "default-src 'self'; report-to csp-endpoint"
);`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>CSP Best Practices</CardTitle>
              <CardDescription>Implementing CSP effectively</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Start with Report-Only mode</li>
                <li>• Use nonces or hashes for inline scripts</li>
                <li>• Set default-src as fallback</li>
                <li>• Use 'self' as primary source</li>
                <li>• Whitelist specific CDN domains</li>
                <li>• Set frame-ancestors to prevent clickjacking</li>
                <li>• Monitor violation reports</li>
                <li>• Test thoroughly before enforcing</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use 'unsafe-inline' for scripts</li>
                <li>• Use 'unsafe-eval' unless absolutely necessary</li>
                <li>• Allow * (wildcard) for script sources</li>
                <li>• Deploy CSP without testing</li>
                <li>• Ignore violation reports</li>
                <li>• Make CSP too permissive</li>
                <li>• Forget about browser compatibility</li>
                <li>• Mix HTTP and HTTPS sources</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/10 dark:to-blue-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Defense in Depth</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CSP is a powerful XSS defense layer<br/>
                    Complements input validation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Nonces</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefer nonces over 'unsafe-inline'<br/>
                    Secure way to allow inline scripts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Monitor Violations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use Report-Only to test<br/>
                    Track CSP violations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Whitelist Sources</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only allow trusted domains<br/>
                    Avoid wildcards for scripts
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-300 dark:border-purple-700">
            <ShieldAlert className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Essential Security Header</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              CSP significantly <strong>reduces XSS attack surface</strong>. Start with Report-Only mode, gradually tighten policy, and always monitor violations!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
