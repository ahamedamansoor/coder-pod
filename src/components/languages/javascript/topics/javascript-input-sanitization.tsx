'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Filter,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';

export default function JavaScriptInputSanitization() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Filter}
        category="JavaScript Security"
        title="Input Sanitization"
        description="Clean and validate user input to prevent attacks"
        colorTheme="red"
      />

      {/* What is Input Sanitization */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Filter className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Input Sanitization?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Input sanitization is the process of <strong className="text-cyan-700 dark:text-cyan-400">cleaning and validating</strong> user input before using it in your application. It removes or escapes potentially <strong className="text-blue-700 dark:text-blue-400">dangerous characters</strong> and ensures data matches expected formats.
              </p>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Why Sanitize Input?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Never trust user input! Attackers can inject malicious code through forms, URLs, headers, and any other input mechanism.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Validation vs Sanitization */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Validation vs Sanitization</CardTitle>
              <CardDescription>Two complementary security strategies</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Validation</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Check if input meets requirements
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Reject invalid input</li>
                  <li>• Check format, length, type</li>
                  <li>• Whitelist allowed patterns</li>
                  <li>• Return error if invalid</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">Sanitization</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Clean input to make it safe
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Remove dangerous characters</li>
                  <li>• Escape special characters</li>
                  <li>• Transform to safe format</li>
                  <li>• Modify and accept input</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Sanitization Techniques */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Filter className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Sanitization Techniques</CardTitle>
              <CardDescription>Methods to clean user input</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">HTML Encoding</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Convert special characters to HTML entities
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                &lt; becomes &amp;lt;
              </code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Whitespace Trimming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Remove leading/trailing spaces
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                str.trim()
              </code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Type Coercion</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Convert to expected type
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                parseInt(), Number()
              </code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Remove Tags</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Strip HTML/script tags
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                str.replace(/&lt;[^&gt;]*&gt;/g, '')
              </code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">SQL Escaping</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Escape quotes for database queries
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                Use parameterized queries
              </code>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">URL Encoding</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Encode special characters in URLs
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                encodeURIComponent()
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Basic Sanitization */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Basic Input Sanitization Functions</CardTitle>
          <CardDescription>Common sanitization utilities</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// HTML encoding - prevent XSS
function sanitizeHTML(str) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return String(str).replace(/[&<>"'/]/g, (char) => map[char]);
}

// Remove HTML tags
function stripHTML(str) {
  return str.replace(/<[^>]*>/g, '');
}

// Sanitize email
function sanitizeEmail(email) {
  return email.toLowerCase().trim();
}

// Sanitize string (alphanumeric + spaces)
function sanitizeString(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

// Sanitize number
function sanitizeNumber(value) {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}

// Sanitize URL
function sanitizeURL(url) {
  try {
    const parsed = new URL(url);
    // Only allow http/https
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    return parsed.href;
  } catch {
    return '';
  }
}

// Usage
const userInput = '<script>alert("XSS")</script>';
console.log(sanitizeHTML(userInput));
// Output: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Validation + Sanitization */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Combined Validation & Sanitization</CardTitle>
          <CardDescription>Complete input processing</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Complete input processing class
class InputProcessor {
  // Validate and sanitize username
  static processUsername(input) {
    // Sanitize: trim and lowercase
    let username = input.trim().toLowerCase();
    
    // Validate: length check
    if (username.length < 3 || username.length > 20) {
      throw new Error('Username must be 3-20 characters');
    }
    
    // Sanitize: allow only alphanumeric and underscore
    username = username.replace(/[^a-z0-9_]/g, '');
    
    // Validate: check format
    if (!/^[a-z][a-z0-9_]*$/.test(username)) {
      throw new Error('Username must start with letter');
    }
    
    return username;
  }
  
  // Validate and sanitize email
  static processEmail(input) {
    // Sanitize: trim and lowercase
    let email = input.trim().toLowerCase();
    
    // Validate: basic format check
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
    
    // Additional validation: length check
    if (email.length > 254) {
      throw new Error('Email too long');
    }
    
    return email;
  }
  
  // Validate and sanitize password
  static processPassword(input) {
    // No sanitization for passwords!
    // Only validate
    
    if (input.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
    
    if (!/[A-Z]/.test(input)) {
      throw new Error('Password must contain uppercase letter');
    }
    
    if (!/[a-z]/.test(input)) {
      throw new Error('Password must contain lowercase letter');
    }
    
    if (!/[0-9]/.test(input)) {
      throw new Error('Password must contain number');
    }
    
    return input; // Return as-is
  }
  
  // Process comment with sanitization
  static processComment(input) {
    // Sanitize: trim
    let comment = input.trim();
    
    // Validate: length
    if (comment.length === 0) {
      throw new Error('Comment cannot be empty');
    }
    
    if (comment.length > 500) {
      throw new Error('Comment too long (max 500 characters)');
    }
    
    // Sanitize: HTML encode for safety
    comment = this.sanitizeHTML(comment);
    
    return comment;
  }
  
  static sanitizeHTML(str) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    };
    return String(str).replace(/[&<>"']/g, (c) => map[c]);
  }
}

// Usage example
try {
  const username = InputProcessor.processUsername('  Alice_123  ');
  console.log('Username:', username); // 'alice_123'
  
  const email = InputProcessor.processEmail('  Alice@Example.COM  ');
  console.log('Email:', email); // 'alice@example.com'
  
  const comment = InputProcessor.processComment('<b>Great article!</b>');
  console.log('Comment:', comment); // '&lt;b&gt;Great article!&lt;/b&gt;'
  
} catch (error) {
  console.error('Validation error:', error.message);
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Using Libraries */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Using Sanitization Libraries</CardTitle>
          <CardDescription>Popular libraries for input sanitization</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// 1. DOMPurify - HTML sanitization
import DOMPurify from 'dompurify';

const dirty = '<img src=x onerror=alert(1)>';
const clean = DOMPurify.sanitize(dirty);
console.log(clean); // '<img src="x">' - removes onerror

// Rich text with safe HTML
const richText = '<p>Hello <b>World</b></p><script>alert("XSS")</script>';
const sanitized = DOMPurify.sanitize(richText);
console.log(sanitized); // '<p>Hello <b>World</b></p>' - removes script

// 2. validator.js - String validation/sanitization
import validator from 'validator';

// Email validation
const email = '  TEST@EXAMPLE.COM  ';
const isValid = validator.isEmail(email);
const normalized = validator.normalizeEmail(email);
console.log(normalized); // 'test@example.com'

// URL sanitization
const url = 'javascript:alert(1)';
const isSafe = validator.isURL(url, {
  protocols: ['http', 'https'],
  require_protocol: true
});
console.log(isSafe); // false - blocks javascript: protocol

// Escape HTML
const userInput = '<script>alert("XSS")</script>';
const escaped = validator.escape(userInput);
console.log(escaped); // HTML entities

// 3. express-validator - Server-side validation
import { body, validationResult } from 'express-validator';

app.post('/register',
  // Validation and sanitization middleware
  body('username')
    .trim()
    .isLength({ min: 3, max: 20 })
    .isAlphanumeric()
    .escape(),
  
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .escape(),
  
  body('age')
    .optional()
    .isInt({ min: 0, max: 120 })
    .toInt(),
  
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // req.body now contains sanitized data
    const { username, email, age } = req.body;
    // Safe to use...
  }
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
              <CardTitle>Input Sanitization Best Practices</CardTitle>
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
                <li>• Sanitize on server-side (critical)</li>
                <li>• Use whitelist approach (allow known good)</li>
                <li>• Combine validation and sanitization</li>
                <li>• Use established libraries (DOMPurify, validator.js)</li>
                <li>• Context-specific sanitization</li>
                <li>• Sanitize before storage AND display</li>
                <li>• Log suspicious input patterns</li>
                <li>• Provide clear error messages</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Rely on client-side validation only</li>
                <li>• Use blacklist approach (block known bad)</li>
                <li>• Trust any input from users</li>
                <li>• Roll your own sanitization (use libraries)</li>
                <li>• Sanitize passwords (validate only)</li>
                <li>• Double-encode (can break data)</li>
                <li>• Ignore edge cases</li>
                <li>• Assume input is safe because it "looks" ok</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🧹</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Always Sanitize</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean all user input<br/>
                    Never trust client-side data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Validate + Sanitize</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check format, then clean<br/>
                    Both are essential
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Libraries</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    DOMPurify, validator.js<br/>
                    Battle-tested solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Context Matters</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    HTML vs URL vs SQL<br/>
                    Different contexts need different sanitization
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-300 dark:border-cyan-700">
            <Filter className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Server-Side is Critical</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Always sanitize on the server</strong>. Client-side sanitization is easily bypassed. Treat all user input as potentially malicious!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
