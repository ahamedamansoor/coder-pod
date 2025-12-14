'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  XCircle,
  Lock,
  Lightbulb,
  AlertTriangle,
} from 'lucide-react';

export default function JavaScriptSecureCoding() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ShieldCheck}
        category="JavaScript Best Practices"
        title="Secure Coding Practices"
        description="Write secure, maintainable JavaScript code"
        colorTheme="green"
      />

      {/* What is Secure Coding */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Secure Coding?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Secure coding is the practice of writing code that is <strong className="text-green-700 dark:text-green-400">resistant to attacks</strong> and <strong className="text-emerald-700 dark:text-emerald-400">protects sensitive data</strong>. It involves following security principles, avoiding common vulnerabilities, and thinking like an attacker.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Security Principles */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Core Security Principles</CardTitle>
              <CardDescription>Fundamental concepts for secure code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Principle of Least Privilege</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Grant minimum permissions necessary
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Limit user access rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Run code with minimum privileges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Restrict API access</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Defense in Depth</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Multiple layers of security
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Input validation + Output encoding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>CSP + Content sanitization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>CSRF tokens + SameSite cookies</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Fail Securely</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Default to secure state on errors
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Deny access on error</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Don't expose error details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Log errors securely</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Never Trust Input</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                All input is potentially malicious
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Validate all user input</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Sanitize before use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Verify on server-side</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Security Vulnerabilities */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>OWASP Top 10 - JavaScript Context</CardTitle>
              <CardDescription>Most critical web application security risks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">1. Injection (XSS, SQL Injection)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Sanitize input, use parameterized queries, escape output
              </p>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">2. Broken Authentication</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Use strong session management, implement MFA, secure password storage
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">3. Sensitive Data Exposure</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Encrypt data in transit (HTTPS), at rest, don't log sensitive data
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">4. Security Misconfiguration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Secure defaults, disable debug mode, update dependencies
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">5. Broken Access Control</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ✅ Verify permissions on server, implement RBAC, deny by default
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Secure Authentication */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Secure Authentication Flow</CardTitle>
          <CardDescription>Best practices for user authentication</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Secure password hashing (bcrypt)
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  // Use high salt rounds (10-12)
  const saltRounds = 12;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

// ✅ Secure session management
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET, // Strong random secret
  name: 'sessionId', // Don't use default name
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,       // HTTPS only
    httpOnly: true,     // No JavaScript access
    maxAge: 3600000,    // 1 hour
    sameSite: 'strict'  // CSRF protection
  }
}));

// ✅ Rate limiting to prevent brute force
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, try again later'
});

app.post('/login', loginLimiter, async (req, res) => {
  const { email, password } = req.body;
  
  // ✅ Always use constant-time comparison
  const user = await findUserByEmail(email);
  
  if (!user) {
    // ✅ Don't reveal if user exists
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const isValid = await verifyPassword(password, user.passwordHash);
  
  if (!isValid) {
    // ✅ Log failed attempts
    logFailedLogin(email, req.ip);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // ✅ Regenerate session on login
  req.session.regenerate((err) => {
    if (err) return res.status(500).json({ error: 'Login failed' });
    
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) return res.status(500).json({ error: 'Login failed' });
      res.json({ success: true });
    });
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Secure Data Handling */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Secure Data Handling</CardTitle>
          <CardDescription>Protecting sensitive information</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Environment variables for secrets
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  dbPassword: process.env.DB_PASSWORD,
  jwtSecret: process.env.JWT_SECRET
};

// ❌ DON'T hardcode secrets
// const apiKey = "sk-1234567890abcdef";

// ✅ Encrypt sensitive data at rest
const crypto = require('crypto');

function encrypt(text) {
  const algorithm = 'aes-256-gcm';
  const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex')
  };
}

// ✅ Secure logging - redact sensitive data
function sanitizeLog(data) {
  const sensitive = ['password', 'token', 'ssn', 'creditCard'];
  const sanitized = { ...data };
  
  for (const key of sensitive) {
    if (sanitized[key]) {
      sanitized[key] = '[REDACTED]';
    }
  }
  
  return sanitized;
}

// Usage
const userData = {
  email: 'user@example.com',
  password: 'secret123',
  name: 'John'
};

console.log(sanitizeLog(userData));
// { email: 'user@example.com', password: '[REDACTED]', name: 'John' }

// ✅ Secure token generation
function generateSecureToken() {
  return crypto.randomBytes(32).toString('hex');
}

// ✅ JWT with short expiration
const jwt = require('jsonwebtoken');

function createToken(userId) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '15m' } // Short-lived tokens
  );
}

// ✅ Verify and refresh tokens
function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Secure API Calls */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Secure API Communication</CardTitle>
          <CardDescription>Safe external service integration</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ HTTPS only for API calls
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.example.com', // HTTPS
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ✅ Validate SSL certificates
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: true // Don't allow self-signed certs
});

// ✅ API key in headers, not URL
async function secureAPICall(endpoint, data) {
  try {
    const response = await api.post(endpoint, data, {
      httpsAgent: agent,
      headers: {
        'Authorization': \`Bearer \${process.env.API_KEY}\`,
        'X-Request-ID': generateSecureToken()
      }
    });
    
    return response.data;
  } catch (error) {
    // ✅ Don't expose internal error details
    console.error('API call failed:', error.message);
    throw new Error('External service unavailable');
  }
}

// ✅ Implement request timeout
async function callWithTimeout(promise, timeout = 5000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
}

// ✅ Validate API responses
function validateAPIResponse(data, schema) {
  // Use a validation library like Joi or Zod
  const { error, value } = schema.validate(data);
  
  if (error) {
    throw new Error('Invalid API response');
  }
  
  return value;
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Best Practices Checklist */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Secure Coding Checklist</CardTitle>
              <CardDescription>Essential security practices</CardDescription>
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
                <li>• Use HTTPS everywhere</li>
                <li>• Hash passwords with bcrypt/argon2</li>
                <li>• Implement rate limiting</li>
                <li>• Use prepared statements for SQL</li>
                <li>• Set secure HTTP headers</li>
                <li>• Keep dependencies updated</li>
                <li>• Use environment variables for secrets</li>
                <li>• Implement proper error handling</li>
                <li>• Log security events</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Store passwords in plain text</li>
                <li>• Expose sensitive data in logs</li>
                <li>• Use weak encryption algorithms</li>
                <li>• Trust client-side validation</li>
                <li>• Hardcode secrets in code</li>
                <li>• Use insecure random number generators</li>
                <li>• Expose detailed error messages</li>
                <li>• Ignore security warnings</li>
                <li>• Use deprecated packages</li>
                <li>• Skip security testing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Security First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Build security in from the start<br/>
                    Not an afterthought
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Defense in Depth</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Multiple security layers<br/>
                    Never rely on one defense
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Never Trust Input</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validate and sanitize everything<br/>
                    Assume all input is malicious
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Stay Updated</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Update dependencies regularly<br/>
                    Follow security advisories
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Security is a Journey</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Secure coding is an ongoing process. <strong>Stay informed</strong> about new vulnerabilities, follow best practices, and always think about security implications!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
