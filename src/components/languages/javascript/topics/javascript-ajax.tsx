'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Workflow, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function JavaScriptAjax() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Workflow}
        category="APIs & Browser"
        title="AJAX & XMLHttpRequest"
        description="The original way to make asynchronous HTTP requests"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-violet-50/50 to-fuchsia-50/30 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-xl">
              <Workflow className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                What is AJAX?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-purple-700 dark:text-purple-400">AJAX</strong> (Asynchronous JavaScript And XML) is a 
                <strong className="text-violet-700 dark:text-violet-400"> technique</strong> for making HTTP requests 
                <strong className="text-fuchsia-700 dark:text-fuchsia-400"> without reloading the page</strong>. 
                It uses <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">XMLHttpRequest</code> (XHR) 
                to communicate with servers asynchronously, enabling dynamic content updates and better user experience.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Historical Note</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              While XMLHttpRequest is older technology, it's still used in legacy codebases. Modern code should use 
              <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs mx-1">fetch()</code> instead.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How XMLHttpRequest Works</CardTitle>
          <CardDescription>Understanding the XHR lifecycle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            XMLHttpRequest goes through several states during a request:
          </p>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Ready States</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">0</div>
                <div className="text-gray-700 dark:text-gray-300">
                  <strong>UNSENT</strong> - XHR created, not opened yet
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold">1</div>
                <div className="text-gray-700 dark:text-gray-300">
                  <strong>OPENED</strong> - open() called
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-fuchsia-500 text-white flex items-center justify-center font-bold">2</div>
                <div className="text-gray-700 dark:text-gray-300">
                  <strong>HEADERS_RECEIVED</strong> - send() called, headers received
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">3</div>
                <div className="text-gray-700 dark:text-gray-300">
                  <strong>LOADING</strong> - Downloading response data
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">4</div>
                <div className="text-gray-700 dark:text-gray-300">
                  <strong>DONE</strong> - Operation complete ✅
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic GET Request</CardTitle>
          <CardDescription>Making a simple request with XHR</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10 border-2 border-violet-200 dark:border-violet-800">
            <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-3">Step-by-Step GET Request</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`// 1. Create XMLHttpRequest object
const xhr = new XMLHttpRequest();

// 2. Configure: GET request to URL
xhr.open('GET', 'https://api.example.com/data');

// 3. Set up callback for when response arrives
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.status);
  }
};

// 4. Handle network errors
xhr.onerror = function() {
  console.error('Network error');
};

// 5. Send the request
xhr.send();`}</pre>
            
            <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Explanation:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• <code className="text-xs bg-violet-100 dark:bg-violet-900/30 px-1.5 py-0.5 rounded">open()</code> - Configure method and URL</li>
                <li>• <code className="text-xs bg-violet-100 dark:bg-violet-900/30 px-1.5 py-0.5 rounded">onload</code> - Fires when request completes successfully</li>
                <li>• <code className="text-xs bg-violet-100 dark:bg-violet-900/30 px-1.5 py-0.5 rounded">onerror</code> - Fires on network errors</li>
                <li>• <code className="text-xs bg-violet-100 dark:bg-violet-900/30 px-1.5 py-0.5 rounded">send()</code> - Initiates the request</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>POST Request with Data</CardTitle>
          <CardDescription>Sending data to the server</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
            <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-3">Sending JSON Data</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/users');

// Set Content-Type header for JSON
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
  if (xhr.status === 201) {
    console.log('Created:', JSON.parse(xhr.responseText));
  }
};

// Send JSON data
const data = { name: 'John', email: 'john@example.com' };
xhr.send(JSON.stringify(data));`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3">Sending Form Data</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/upload');

const formData = new FormData();
formData.append('username', 'john_doe');
formData.append('file', fileInput.files[0]);

// No need to set Content-Type - automatically set for FormData
xhr.send(formData);`}</pre>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              <strong>Note:</strong> When sending FormData, don't set Content-Type header - 
              the browser sets it automatically with the correct boundary.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Event Handlers & Monitoring Progress</CardTitle>
          <CardDescription>Tracking request progress and handling events</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Common Event Handlers</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">onload</code> - Request completed</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">onerror</code> - Network error</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">onabort</code> - Request aborted</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">ontimeout</code> - Request timed out</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">onprogress</code> - Progress updates</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
              <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Response Properties</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">status</code> - HTTP status code</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">statusText</code> - Status message</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">responseText</code> - Response as text</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">responseXML</code> - Response as XML</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">readyState</code> - Current state</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Upload Progress Tracking</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const xhr = new XMLHttpRequest();

// Track upload progress
xhr.upload.onprogress = function(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    console.log(\`Upload: \${percentComplete.toFixed(2)}%\`);
  }
};

// Track download progress
xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    console.log(\`Download: \${percentComplete.toFixed(2)}%\`);
  }
};`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Features</CardTitle>
          <CardDescription>Timeouts, aborting, and request configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Setting Timeout</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');

// Set timeout to 5 seconds
xhr.timeout = 5000;

xhr.ontimeout = function() {
  console.error('Request timed out');
};

xhr.send();`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 border-2 border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Aborting a Request</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');

xhr.onabort = function() {
  console.log('Request aborted');
};

xhr.send();

// Cancel the request
xhr.abort();`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/10 border-2 border-teal-200 dark:border-teal-800">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Custom Headers & Authentication</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');

// Set custom headers
xhr.setRequestHeader('Authorization', 'Bearer token123');
xhr.setRequestHeader('X-Custom-Header', 'value');

// Send credentials (cookies)
xhr.withCredentials = true;

xhr.send();`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fetch API vs XMLHttpRequest</CardTitle>
          <CardDescription>Understanding the differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30">
                  <th className="p-3 text-left border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">XMLHttpRequest</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Fetch API</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Promise-based</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">No (callbacks)</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Yes ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Async/Await support</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">No</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Yes ✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Syntax</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Verbose</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Clean ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Progress events</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Yes ✅</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Limited</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Browser support</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">All browsers ✅</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Modern browsers ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Recommended</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Legacy only</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Yes ✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Migration Tip</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              For new projects, always use Fetch API. Only use XMLHttpRequest when maintaining legacy code 
              or when you need upload progress tracking.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Complete Example: Weather Widget with Progress Tracking</CardTitle>
          <CardDescription>XMLHttpRequest with upload/download progress monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Code Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">JavaScript Code</h4>
                <span className="text-xs px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">XHR</span>
              </div>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`function fetchWeatherData(city) {
  const xhr = new XMLHttpRequest();
  const statusDiv = document.getElementById('status');
  const weatherDiv = document.getElementById('weather');
  
  // Configure request
  xhr.open('GET', 
    \`https://api.weather.com/data?city=\${city}\`, 
    true
  );
  
  // Track upload progress
  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const percent = (e.loaded / e.total) * 100;
      statusDiv.innerHTML = 
        \`Uploading: \${percent.toFixed(0)}%\`;
    }
  });
  
  // Track download progress
  xhr.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const percent = (e.loaded / e.total) * 100;
      statusDiv.innerHTML = 
        \`Loading: \${percent.toFixed(0)}%\`;
    }
  });
  
  // Handle response
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      weatherDiv.innerHTML = \`
        <div class="weather-card">
          <h2>\${data.city}</h2>
          <p>Temperature: \${data.temp}°C</p>
          <p>Condition: \${data.condition}</p>
        </div>
      \`;
      statusDiv.innerHTML = 'Loaded!';
    } else {
      weatherDiv.innerHTML = \`Error: \${xhr.status}\`;
    }
  };
  
  // Handle errors
  xhr.onerror = function() {
    weatherDiv.innerHTML = 'Network error occurred';
  };
  
  // Send request
  xhr.send();
}

// Call the function
fetchWeatherData('London');`}</code></pre>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Expected Output</h4>
                <span className="text-xs px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Success</span>
              </div>
              <div className="rounded-lg bg-white dark:bg-slate-900 p-6 border-2 border-purple-200 dark:border-purple-800/30 min-h-[400px]">
                <div className="space-y-4">
                  {/* Progress States */}
                  <div className="space-y-2">
                    <div className="p-2 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                      <p className="text-xs text-blue-700 dark:text-blue-300">📤 Status: Uploading: 45%</p>
                    </div>
                    <div className="p-2 rounded bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700">
                      <p className="text-xs text-indigo-700 dark:text-indigo-300">📥 Status: Loading: 78%</p>
                    </div>
                    <div className="p-2 rounded bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                      <p className="text-xs text-green-700 dark:text-green-300">✓ Status: Loaded!</p>
                    </div>
                  </div>

                  {/* Success State */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">London</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Temperature: 18°C</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Condition: Partly Cloudy</p>
                  </div>

                  {/* Error State */}
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                    <p className="text-sm text-red-800 dark:text-red-300 mb-1">❌ Error state (if API fails):</p>
                    <p className="text-xs text-red-700 dark:text-red-400">"Error: 404" or "Network error occurred"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-4 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">What This Shows</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                <p className="text-sm">✅ Progress tracking (upload/download)</p>
                <p className="text-sm">✅ Multiple event handlers</p>
                <p className="text-sm">✅ Success rendering</p>
                <p className="text-sm">✅ Error handling</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Legacy API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Older, callback-based approach
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Progress Tracking</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Good for upload/download progress
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Ready States</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    0-4 states tracking request lifecycle
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Fetch Instead</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern alternative for new code
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
