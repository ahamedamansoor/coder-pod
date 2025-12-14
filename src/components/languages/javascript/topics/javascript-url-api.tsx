'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Link2,
  CheckCircle,
  Globe,
  Lightbulb,
  Search,
  Code2,
} from 'lucide-react';

export default function JavaScriptURLAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Link2}
        category="JavaScript Browser APIs"
        title="URL API"
        description="Parse and manipulate URLs easily"
        colorTheme="green"
      />

      {/* What is URL API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <Link2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the URL API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The URL API makes it <strong className="text-green-700 dark:text-green-400">easy to work with URLs</strong> - parse them, read parts, modify them, and build new ones. No more messy string splitting! It breaks URLs into clean, easy-to-use pieces.
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Think of a URL like a <strong>home address</strong>:<br/>
              • Protocol = Country<br/>
              • Hostname = City<br/>
              • Path = Street & house number<br/>
              • Search params = Special delivery instructions
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* URL Parts */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Understanding URL Parts</CardTitle>
              <CardDescription>Breaking down a complete URL</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30 mb-4">
            <code className="text-sm break-all text-blue-800 dark:text-blue-200">
              https://user:pass@example.com:8080/path/page?search=value&sort=asc#section
            </code>
          </div>

          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-green-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-green-700 dark:text-green-400">protocol</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">https:</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Communication method</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-blue-700 dark:text-blue-400">username</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">user</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Login username (rare)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-purple-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-purple-700 dark:text-purple-400">password</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">pass</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Login password (rare)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-amber-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-amber-700 dark:text-amber-400">hostname</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">example.com</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Domain name</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-cyan-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">port</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">8080</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Port number</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-red-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-red-700 dark:text-red-400">pathname</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">/path/page</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">File/page path</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-orange-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-orange-700 dark:text-orange-400">search</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">?search=value&sort=asc</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Query string</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-l-4 border-pink-500">
              <div className="flex justify-between items-start">
                <div>
                  <code className="text-sm font-semibold text-pink-700 dark:text-pink-400">hash</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">#section</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Fragment/anchor</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: URL Parser & Query Builder"
        description="Try parsing URLs and building search queries!"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #10b981; margin-bottom: 20px;">🔗 URL API Playground</h2>
  
  <!-- URL Parser Section -->
  <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 2px solid #86efac;">
    <h3 style="color: #15803d; margin-bottom: 15px;">📋 URL Parser</h3>
    <input 
      type="text" 
      id="urlInput" 
      value="https://shop.com:8080/products?category=electronics&sort=price#reviews"
      style="width: 100%; padding: 12px; border: 2px solid #86efac; border-radius: 6px; font-size: 14px; font-family: monospace; margin-bottom: 15px;"
      placeholder="Enter a URL to parse...">
    <button id="parseBtn" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
      Parse URL
    </button>
    
    <div id="parsedResult" style="margin-top: 15px; background: white; padding: 15px; border-radius: 6px; display: none;">
      <h4 style="margin-top: 0; color: #15803d;">URL Parts:</h4>
      <div id="urlParts" style="font-family: monospace; font-size: 13px; line-height: 2;"></div>
    </div>
  </div>
  
  <!-- Query Builder Section -->
  <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border: 2px solid #93c5fd;">
    <h3 style="color: #1e40af; margin-bottom: 15px;">🔍 Search Filter Builder</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1e40af; font-size: 14px;">Search:</label>
        <input type="text" id="searchInput" placeholder="e.g., laptop" style="width: 100%; padding: 8px; border: 2px solid #93c5fd; border-radius: 6px;">
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1e40af; font-size: 14px;">Category:</label>
        <select id="categorySelect" style="width: 100%; padding: 8px; border: 2px solid #93c5fd; border-radius: 6px;">
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1e40af; font-size: 14px;">Min Price:</label>
        <input type="number" id="minPrice" placeholder="0" style="width: 100%; padding: 8px; border: 2px solid #93c5fd; border-radius: 6px;">
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1e40af; font-size: 14px;">Max Price:</label>
        <input type="number" id="maxPrice" placeholder="1000" style="width: 100%; padding: 8px; border: 2px solid #93c5fd; border-radius: 6px;">
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1e40af; font-size: 14px;">Sort By:</label>
        <select id="sortSelect" style="width: 100%; padding: 8px; border: 2px solid #93c5fd; border-radius: 6px;">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1e40af; font-size: 14px;">Page:</label>
        <input type="number" id="pageInput" value="1" min="1" style="width: 100%; padding: 8px; border: 2px solid #93c5fd; border-radius: 6px;">
      </div>
    </div>
    
    <button id="buildBtn" style="padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin-right: 10px;">
      🔨 Build URL
    </button>
    <button id="clearBtn" style="padding: 10px 20px; background: #64748b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
      Clear
    </button>
    
    <div id="builtUrl" style="margin-top: 15px; padding: 12px; background: white; border-radius: 6px; font-family: monospace; font-size: 13px; color: #1e40af; word-break: break-all; display: none;"></div>
  </div>
  
  <!-- Results Display -->
  <div id="results" style="margin-top: 20px; padding: 15px; background: #fefce8; border-radius: 8px; border: 2px solid #fde047; display: none;">
    <h4 style="margin-top: 0; color: #854d0e;">✨ Active Filters:</h4>
    <div id="activeFilters" style="font-size: 14px; color: #713f12;"></div>
  </div>
</div>`}
        css={`button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}

input:focus, select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}`}
        js={`// URL Parser
document.getElementById('parseBtn').addEventListener('click', () => {
  const urlString = document.getElementById('urlInput').value;
  
  try {
    const url = new URL(urlString);
    
    // Display parsed parts
    const parts = \`
      <div style="margin-bottom: 8px;"><strong style="color: #10b981;">protocol:</strong> <span style="color: #64748b;">\${url.protocol}</span></div>
      <div style="margin-bottom: 8px;"><strong style="color: #3b82f6;">hostname:</strong> <span style="color: #64748b;">\${url.hostname}</span></div>
      <div style="margin-bottom: 8px;"><strong style="color: #8b5cf6;">port:</strong> <span style="color: #64748b;">\${url.port || '(default)'}</span></div>
      <div style="margin-bottom: 8px;"><strong style="color: #ef4444;">pathname:</strong> <span style="color: #64748b;">\${url.pathname}</span></div>
      <div style="margin-bottom: 8px;"><strong style="color: #f59e0b;">search:</strong> <span style="color: #64748b;">\${url.search || '(none)'}</span></div>
      <div style="margin-bottom: 8px;"><strong style="color: #ec4899;">hash:</strong> <span style="color: #64748b;">\${url.hash || '(none)'}</span></div>
      <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
        <strong style="color: #15803d;">Full URL:</strong><br>
        <span style="color: #64748b; word-break: break-all;">\${url.href}</span>
      </div>
    \`;
    
    document.getElementById('urlParts').innerHTML = parts;
    document.getElementById('parsedResult').style.display = 'block';
    
  } catch (error) {
    document.getElementById('urlParts').innerHTML = \`
      <div style="color: #dc2626; padding: 10px; background: #fee2e2; border-radius: 4px;">
        ❌ Invalid URL! Please enter a valid URL.
      </div>
    \`;
    document.getElementById('parsedResult').style.display = 'block';
  }
});

// Query Builder
function buildSearchUrl() {
  // Start with base URL
  const url = new URL('https://shop.com/products');
  const params = url.searchParams;
  
  // Get all filter values
  const search = document.getElementById('searchInput').value.trim();
  const category = document.getElementById('categorySelect').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const sort = document.getElementById('sortSelect').value;
  const page = document.getElementById('pageInput').value;
  
  // Add parameters (only if they have values)
  if (search) params.set('q', search);
  if (category) params.set('category', category);
  if (minPrice) params.set('min', minPrice);
  if (maxPrice) params.set('max', maxPrice);
  if (sort !== 'popularity') params.set('sort', sort);
  if (page !== '1') params.set('page', page);
  
  // Display the built URL
  document.getElementById('builtUrl').textContent = url.href;
  document.getElementById('builtUrl').style.display = 'block';
  
  // Show active filters
  const filters = [];
  if (search) filters.push(\`Search: "\${search}"\`);
  if (category) filters.push(\`Category: \${category}\`);
  if (minPrice || maxPrice) {
    const priceRange = \`Price: $\${minPrice || '0'} - $\${maxPrice || '∞'}\`;
    filters.push(priceRange);
  }
  if (sort !== 'popularity') filters.push(\`Sort: \${sort}\`);
  if (page !== '1') filters.push(\`Page: \${page}\`);
  
  if (filters.length > 0) {
    document.getElementById('activeFilters').innerHTML = filters.map(f => 
      \`<div style="margin-bottom: 5px;">• \${f}</div>\`
    ).join('');
    document.getElementById('results').style.display = 'block';
  } else {
    document.getElementById('results').style.display = 'none';
  }
}

document.getElementById('buildBtn').addEventListener('click', buildSearchUrl);

// Clear filters
document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('categorySelect').value = '';
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.getElementById('sortSelect').value = 'popularity';
  document.getElementById('pageInput').value = '1';
  document.getElementById('builtUrl').style.display = 'none';
  document.getElementById('results').style.display = 'none';
});

// Auto-build on Enter key
document.querySelectorAll('#searchInput, #minPrice, #maxPrice, #pageInput').forEach(input => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buildSearchUrl();
  });
});

// Auto-build on select change
document.querySelectorAll('#categorySelect, #sortSelect').forEach(select => {
  select.addEventListener('change', buildSearchUrl);
});`}
        colorTheme="green"
      />

      {/* Example 1: Creating and Reading URL */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Parse and Read URL</CardTitle>
          <CardDescription>Break URL into parts</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Create URL object from string
const url = new URL('https://example.com:8080/products?category=books&sort=price#reviews');

// Read all the parts easily!
console.log(url.protocol);   // "https:"
console.log(url.hostname);   // "example.com"
console.log(url.port);       // "8080"
console.log(url.pathname);   // "/products"
console.log(url.search);     // "?category=books&sort=price"
console.log(url.hash);       // "#reviews"

// Get full URL back
console.log(url.href);       // Full URL string

// Get host (hostname + port)
console.log(url.host);       // "example.com:8080"

// Get origin (protocol + hostname + port)
console.log(url.origin);     // "https://example.com:8080"

// 🎯 No more messy string parsing!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: URLSearchParams */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Work with Query Parameters</CardTitle>
          <CardDescription>URLSearchParams makes it easy!</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// URL with query parameters
const url = new URL('https://shop.com/products?category=shoes&color=red&size=10');

// Get URLSearchParams object
const params = url.searchParams;

// Read parameters
console.log(params.get('category')); // "shoes"
console.log(params.get('color'));    // "red"
console.log(params.has('size'));     // true

// Add/change parameters
params.set('brand', 'nike');          // Add new parameter
params.set('color', 'blue');          // Change existing parameter
params.delete('size');                // Remove parameter

console.log(url.href);
// "https://shop.com/products?category=shoes&color=blue&brand=nike"

// Loop through all parameters
for (const [key, value] of params) {
  console.log(\`\${key}: \${value}\`);
}

// 🎯 Clean API - no messy string manipulation!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Try Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Try the Interactive Demo Above!</CardTitle>
          <CardDescription>The live playground shows URL parsing and query building</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            Scroll up to the interactive demo to try parsing URLs and building search queries with filters. See how URLSearchParams works in real-time!
          </p>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use URL API</CardTitle>
              <CardDescription>Common scenarios</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🔍 Search & Filters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Read and modify search parameters
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">🌐 API Calls</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Build API URLs with parameters
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">📄 Pagination</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Handle page numbers in URL
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">🔗 Link Processing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Parse and validate user-submitted URLs
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">🛣️ Routing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Extract path and query info for routing
              </p>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">🎯 Analytics</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Track URL parameters for analytics
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using URL API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Use for All URL Manipulation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't manually build URLs with string concatenation - use URL API
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ URLSearchParams for Query Strings</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use searchParams to read and modify query parameters easily
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Automatic Encoding</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                URL API automatically handles special characters and encoding
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✅ Validate URLs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use try/catch when creating URL objects from user input
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 block">
                try {'{'}  const url = new URL(userInput); {'}'} catch {'{'}  /* invalid */ {'}'}
              </code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't Forget Base URL</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Relative URLs need a base URL as second parameter
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>URL API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔗 Parse URL</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const url = new URL('https://example.com/path?key=value#hash');
console.log(url.hostname); // "example.com"
console.log(url.pathname); // "/path"
console.log(url.search);   // "?key=value"`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔍 URLSearchParams</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const params = url.searchParams;
params.get('key');        // Get value
params.set('key', 'new'); // Set value
params.delete('key');     // Remove parameter`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>✨ Auto Encoding:</strong> Handles special characters automatically
              </p>
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
                <span className="text-3xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Parse URLs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    new URL() breaks URLs<br/>
                    Into easy-to-use parts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">searchParams</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Easy query parameter<br/>
                    Read, add, modify, delete
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Build URLs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Construct API URLs<br/>
                    Clean and readable
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto Encoding</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Handles special chars<br/>
                    No manual encoding
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <Link2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Clean URL Manipulation</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The URL API makes working with URLs <strong>simple and clean</strong>. No more messy string splitting or manual encoding. Use it for search filters, API calls, routing, and any URL manipulation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
