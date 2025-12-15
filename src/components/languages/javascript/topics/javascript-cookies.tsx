'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Cookie, AlertTriangle, CheckCircle2, Shield } from 'lucide-react';

export default function JavaScriptCookies() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Cookie}
        category="APIs & Browser"
        title="Cookies"
        description="Working with browser cookies for data persistence"
        colorTheme="amber"
      />

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What are Cookies?</CardTitle>
          <CardDescription>Small pieces of data stored in the browser</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Cookies are small text files stored by the browser that can hold data up to 4KB per cookie. They are automatically 
            sent with every HTTP request to the same domain, making them useful for authentication, tracking, and storing user preferences.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Sent with Requests</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Automatically included in HTTP requests to the server
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/10 border border-yellow-200 dark:border-yellow-700">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Expiration Date</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can be set to expire at a specific time or when browser closes
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Domain & Path</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can be scoped to specific domains and URL paths
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Cookie Attributes</CardTitle>
          <CardDescription>Important properties that control cookie behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-100 dark:bg-amber-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Attribute</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Description</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">name=value</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Cookie name and value (required)
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">username=john</code>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">expires</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Expiration date (UTC format)
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">expires=Wed, 31 Dec 2025</code>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">max-age</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Lifetime in seconds
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">max-age=3600</code>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">domain</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Domain that can access cookie
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">domain=example.com</code>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">path</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    URL path where cookie is valid
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">path=/admin</code>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">secure</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Only sent over HTTPS
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">secure</code>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">httpOnly</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Not accessible via JavaScript
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">httpOnly</code>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-amber-600 dark:text-amber-400">sameSite</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    CSRF protection (Strict, Lax, None)
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">sameSite=Strict</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
            <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Security Note</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Always use <code className="text-red-700 dark:text-red-300">secure</code>, <code className="text-red-700 dark:text-red-300">httpOnly</code>, 
              and <code className="text-red-700 dark:text-red-300">sameSite</code> attributes for sensitive cookies to prevent XSS and CSRF attacks.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Cookie Operations</CardTitle>
          <CardDescription>Creating, reading, and deleting cookies</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            title="Cookie Helper Functions"
            description="Essential functions for cookie manipulation"
            language="javascript"
            colorTheme="amber"
            code={`// Set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

// Delete a cookie
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Usage examples
setCookie('username', 'John', 7); // Expires in 7 days
const user = getCookie('username'); // Returns "John"
deleteCookie('username'); // Removes the cookie`}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Cookie Manager Class</CardTitle>
          <CardDescription>Professional cookie management with security features</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            title="Complete Cookie Manager"
            description="Production-ready cookie handling with security options"
            language="javascript"
            colorTheme="amber"
            code={`class CookieManager {
  // Set a cookie with options
  static set(name, value, options = {}) {
    let cookieString = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)}\`;
    
    // Set expiration
    if (options.days) {
      const date = new Date();
      date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
      cookieString += \`; expires=\${date.toUTCString()}\`;
    }
    
    // Set path (default to root)
    cookieString += \`; path=\${options.path || '/'}\`;
    
    // Set domain if specified
    if (options.domain) {
      cookieString += \`; domain=\${options.domain}\`;
    }
    
    // Security flags
    if (options.secure) {
      cookieString += '; secure';
    }
    
    if (options.sameSite) {
      cookieString += \`; sameSite=\${options.sameSite}\`;
    }
    
    document.cookie = cookieString;
  }
  
  // Get a cookie value
  static get(name) {
    const nameEQ = encodeURIComponent(name) + "=";
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(
          cookie.substring(nameEQ.length)
        );
      }
    }
    return null;
  }
  
  // Delete a cookie
  static remove(name, options = {}) {
    this.set(name, '', {
      ...options,
      days: -1
    });
  }
  
  // Check if cookie exists
  static has(name) {
    return this.get(name) !== null;
  }
  
  // Get all cookies as object
  static getAll() {
    const cookies = {};
    document.cookie.split(';').forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name) {
        cookies[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    });
    return cookies;
  }
}

// Usage examples
// Set with security options
CookieManager.set('session', 'abc123', {
  days: 7,
  secure: true,
  sameSite: 'Strict'
});

// Get cookie value
const sessionId = CookieManager.get('session');

// Check if exists
if (CookieManager.has('session')) {
  console.log('User is logged in');
}

// Get all cookies
const allCookies = CookieManager.getAll();

// Remove cookie
CookieManager.remove('session');`}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Cookies vs localStorage vs sessionStorage</CardTitle>
          <CardDescription>Choose the right storage mechanism</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-100 dark:bg-amber-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Cookies</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">localStorage</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">sessionStorage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Capacity</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">~4KB</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">~5-10MB</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">~5-10MB</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Sent to Server</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">Yes (automatic)</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">No</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">No</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Expiration</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Configurable</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Never (manual)</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Tab close</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Scope</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Domain/path</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Origin</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Tab/window</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Best For</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Auth tokens, tracking</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">User preferences</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Form data, temp state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices & Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use secure and sameSite attributes</li>
                <li>• Set httpOnly for sensitive cookies (server-side)</li>
                <li>• Use short expiration times for sensitive data</li>
                <li>• Encode/decode cookie values properly</li>
                <li>• Keep cookie size small (under 4KB)</li>
                <li>• Use path and domain restrictions</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Don't store sensitive data in plain text</li>
                <li>• Don't create too many cookies (20-50 max)</li>
                <li>• Don't exceed 4KB per cookie</li>
                <li>• Don't rely on cookies for critical security</li>
                <li>• Don't forget to URL-encode special characters</li>
                <li>• Don't use cookies for large data storage</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Server Communication</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automatically sent with every HTTP request
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Limited Size</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Maximum 4KB per cookie
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Security Attributes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use secure, httpOnly, and sameSite flags
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Configurable Expiration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set custom expiration dates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
