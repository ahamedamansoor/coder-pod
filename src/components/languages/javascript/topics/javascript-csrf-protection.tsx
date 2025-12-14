'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Key,
  Lightbulb,
} from 'lucide-react';

export default function JavaScriptCSRFProtection() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ShieldCheck}
        category="JavaScript Security"
        title="CSRF Protection"
        description="Prevent Cross-Site Request Forgery attacks"
        colorTheme="red"
      />

      {/* What is CSRF */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is CSRF (Cross-Site Request Forgery)?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                CSRF is an attack that tricks a user's browser into making <strong className="text-blue-700 dark:text-blue-400">unwanted requests</strong> to a website where they're authenticated. Attackers exploit the browser's automatic inclusion of cookies to perform actions on behalf of the victim.
              </p>
            </div>
          </div>

          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/30">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle>How CSRF Works</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              1. User logs into legitimate site (e.g., bank.com)<br/>
              2. Browser stores authentication cookie<br/>
              3. User visits malicious site (evil.com)<br/>
              4. Malicious site triggers request to bank.com<br/>
              5. Browser automatically includes cookie<br/>
              6. Bank accepts request as legitimate
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* CSRF Attack Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>CSRF Attack Scenario</CardTitle>
              <CardDescription>Understanding the vulnerability</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Example: Money Transfer</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                User is logged into bank.com. Attacker sends email with hidden form:
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                {`<!-- On evil.com -->
<form action="https://bank.com/transfer" method="POST" id="csrf">
  <input type="hidden" name="to" value="attacker-account">
  <input type="hidden" name="amount" value="10000">
</form>
<script>document.getElementById('csrf').submit();</script>`}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                ❌ Browser sends cookies automatically → Money transferred without user's knowledge!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Other Attack Vectors</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Image tags: <code className="bg-slate-50 dark:bg-slate-900 px-1 rounded">&lt;img src="bank.com/transfer?to=attacker"&gt;</code></li>
                <li>• AJAX requests from malicious sites</li>
                <li>• Hidden iframes with forms</li>
                <li>• Link clicks that trigger state changes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Vulnerable Code */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Vulnerable Backend</CardTitle>
          <CardDescription>❌ No CSRF protection</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto border-2 border-red-300 dark:border-red-800">
            <code>{`// ❌ VULNERABLE: No CSRF token verification
app.post('/transfer', (req, res) => {
  // Only checks if user is authenticated via cookie
  if (!req.session.userId) {
    return res.status(401).send('Unauthorized');
  }
  
  // Performs action without verifying request origin
  const { to, amount } = req.body;
  transferMoney(req.session.userId, to, amount);
  
  res.send('Transfer successful');
});

// ❌ VULNERABLE: Frontend form without token
<form action="/transfer" method="POST">
  <input name="to" value="recipient-account">
  <input name="amount" value="100">
  <button>Transfer</button>
</form>

// Attacker can trigger this from ANY website!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* CSRF Protection Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>CSRF Protection Methods</CardTitle>
              <CardDescription>Defense strategies</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-900 dark:text-green-100">CSRF Tokens</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Generate unique token per session/request
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Include in form as hidden field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Send in custom header for AJAX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Verify on server before action</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-900 dark:text-blue-100">SameSite Cookies</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Browser prevents cookies in cross-site requests
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>SameSite=Strict (most secure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>SameSite=Lax (balanced)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>No cookies on cross-origin POST</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Double Submit Cookie</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Send token in both cookie and request body
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Set token in cookie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Read cookie via JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Send same value in header/body</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-bold text-amber-900 dark:text-amber-100">Custom Headers</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Leverage CORS to require custom headers
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Simple forms can't set custom headers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Use with AJAX/fetch requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Example: X-Requested-With</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: CSRF Token Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: CSRF Token Protection</CardTitle>
          <CardDescription>✅ Secure implementation with tokens</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto border-2 border-green-300 dark:border-green-800">
            <code>{`// Backend: Generate and validate CSRF tokens
import crypto from 'crypto';

// Generate CSRF token
function generateCSRFToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Middleware to generate token
app.use((req, res, next) => {
  if (!req.session.csrfToken) {
    req.session.csrfToken = generateCSRFToken();
  }
  res.locals.csrfToken = req.session.csrfToken;
  next();
});

// Middleware to verify token
function verifyCSRFToken(req, res, next) {
  const token = req.body._csrf || req.headers['x-csrf-token'];
  
  if (!token || token !== req.session.csrfToken) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  
  next();
}

// ✅ PROTECTED: Transfer endpoint with CSRF protection
app.post('/transfer', verifyCSRFToken, (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send('Unauthorized');
  }
  
  const { to, amount } = req.body;
  transferMoney(req.session.userId, to, amount);
  
  res.send('Transfer successful');
});

// Render token in page
app.get('/transfer-page', (req, res) => {
  res.render('transfer', { csrfToken: req.session.csrfToken });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Frontend CSRF Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Frontend CSRF Token Usage</CardTitle>
          <CardDescription>Including tokens in requests</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Method 1: Hidden field in form
<form action="/transfer" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <input name="to" value="recipient-account">
  <input name="amount" value="100">
  <button>Transfer</button>
</form>

// ✅ Method 2: AJAX with custom header
function transferMoney(to, amount) {
  // Get token from meta tag
  const token = document.querySelector('meta[name="csrf-token"]').content;
  
  fetch('/transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token  // Custom header
    },
    credentials: 'same-origin',  // Include cookies
    body: JSON.stringify({ to, amount })
  })
  .then(response => {
    if (!response.ok) throw new Error('Transfer failed');
    return response.json();
  })
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
}

// ✅ Method 3: Axios with interceptor
import axios from 'axios';

// Set CSRF token for all requests
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

// Or use interceptor
axios.interceptors.request.use(config => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  config.headers['X-CSRF-Token'] = token;
  return config;
});

// Now all requests include token automatically
axios.post('/transfer', { to: 'account', amount: 100 });`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: SameSite Cookie Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: SameSite Cookie Protection</CardTitle>
          <CardDescription>Modern browser-based CSRF defense</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Set SameSite attribute on session cookies

// Express with cookie-session
app.use(cookieSession({
  name: 'session',
  secret: 'your-secret-key',
  sameSite: 'strict',  // or 'lax'
  httpOnly: true,      // Prevent JavaScript access
  secure: true,        // HTTPS only
  maxAge: 24 * 60 * 60 * 1000  // 24 hours
}));

// Express with express-session
app.use(session({
  secret: 'your-secret-key',
  cookie: {
    sameSite: 'strict',
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Manual cookie setting
res.cookie('sessionId', sessionId, {
  sameSite: 'strict',  // Prevents cross-site usage
  httpOnly: true,
  secure: true
});

/*
SameSite Values:
- Strict: Never send cookie cross-site (most secure)
- Lax: Send on top-level navigation (GET only)
- None: Always send (requires Secure flag)
*/

// ✅ Example with different SameSite values
// Strict - No cross-site cookies at all
res.cookie('auth', token, { sameSite: 'strict' });
// Even clicking link from google.com won't send cookie

// Lax - Allows safe cross-site navigation
res.cookie('auth', token, { sameSite: 'lax' });
// Link from google.com → yoursite.com (cookie sent)
// Form POST from evil.com → yoursite.com (cookie NOT sent)

// None - No protection (not recommended)
res.cookie('tracking', id, { sameSite: 'none', secure: true });
// Only use for legitimate cross-site scenarios`}</code>
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
              <CardTitle>CSRF Protection Best Practices</CardTitle>
              <CardDescription>Security guidelines</CardDescription>
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
                <li>• Use CSRF tokens for state-changing operations</li>
                <li>• Set SameSite=Lax or Strict on cookies</li>
                <li>• Verify Origin/Referer headers</li>
                <li>• Use POST/PUT/DELETE for state changes</li>
                <li>• Implement token rotation</li>
                <li>• Use HttpOnly and Secure cookie flags</li>
                <li>• Require re-authentication for sensitive actions</li>
                <li>• Use CORS properly for APIs</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use GET for state-changing operations</li>
                <li>• Rely solely on cookies for authentication</li>
                <li>• Skip CSRF protection on "minor" actions</li>
                <li>• Use predictable tokens</li>
                <li>• Store tokens in localStorage (XSS risk)</li>
                <li>• Disable SameSite for convenience</li>
                <li>• Forget to verify token on server</li>
                <li>• Trust client-side validation only</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use CSRF Tokens</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate unique tokens per session<br/>
                    Verify on every state-changing request
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🍪</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">SameSite Cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set SameSite=Lax or Strict<br/>
                    Modern, effective CSRF defense
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No GET for State Changes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use POST/PUT/DELETE only<br/>
                    GET should be read-only
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Layer Defenses</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tokens + SameSite + Origin checks<br/>
                    Defense in depth approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700">
            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Critical for State Changes</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              CSRF protection is <strong>essential</strong> for any action that modifies data (transfers, deletions, updates). Combine multiple techniques for strongest defense!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
