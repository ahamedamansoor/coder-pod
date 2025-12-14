'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Wifi,
  CheckCircle,
  Signal,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptNetworkInfoAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Wifi}
        category="JavaScript Browser APIs"
        title="Network Information API"
        description="Check user's connection speed and type"
        colorTheme="indigo"
      />

      {/* What is Network Info API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-violet-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-violet-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
              <Wifi className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Network Information API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Network Information API tells you about the user's <strong className="text-indigo-700 dark:text-indigo-400">connection type and speed</strong>. You can optimize content delivery based on their network!
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Adaptive Loading:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Serve lower quality images on slow connections, or defer non-essential resources to save data.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Demo: Network Information"
        description="Check your current connection details"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #4f46e5; margin-bottom: 20px;">📶 Network Info Demo</h2>
  
  <div style="background: #e0e7ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 3px solid #6366f1;">
    <button id="checkBtn" style="padding: 12px 24px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 16px; width: 100%; margin-bottom: 15px;">
      📶 Check Network Info
    </button>
    
    <div id="info" style="padding: 15px; background: white; border-radius: 6px; display: none;"></div>
  </div>
  
  <div style="background: #dbeafe; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
    <strong style="color: #1e40af;">💡 Tip:</strong>
    <span style="color: #1e3a8a;"> Try switching between WiFi and mobile data to see changes!</span>
  </div>
</div>`}
        css={`button:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}`}
        js={`const checkBtn = document.getElementById('checkBtn');
const info = document.getElementById('info');

function getConnectionInfo() {
  const connection = navigator.connection 
    || navigator.mozConnection 
    || navigator.webkitConnection;
  
  info.style.display = 'block';
  
  if (!connection) {
    info.innerHTML = \`
      <div style="color: #991b1b;">
        <strong>❌ Not Supported</strong><br/>
        <p style="font-size: 14px; margin-top: 8px;">Network Information API is not available in this browser.</p>
      </div>
    \`;
    return;
  }
  
  const effectiveType = connection.effectiveType || 'unknown';
  const downlink = connection.downlink || 'N/A';
  const rtt = connection.rtt || 'N/A';
  const saveData = connection.saveData ? '✅ Enabled' : '❌ Disabled';
  
  // Get icon based on connection type
  let icon = '📶';
  if (effectiveType === '4g') icon = '🚀';
  else if (effectiveType === '3g') icon = '📱';
  else if (effectiveType === '2g' || effectiveType === 'slow-2g') icon = '🐌';
  
  info.innerHTML = \`
    <div style="color: #065f46;">
      <h4 style="margin: 0 0 12px 0;">\${icon} Network Information:</h4>
      <div style="font-size: 14px; line-height: 1.8;">
        <div>📡 <strong>Connection Type:</strong> \${effectiveType.toUpperCase()}</div>
        <div>⚡ <strong>Download Speed:</strong> \${downlink} Mbps</div>
        <div>⏱️ <strong>Round Trip Time:</strong> \${rtt} ms</div>
        <div>💾 <strong>Data Saver:</strong> \${saveData}</div>
      </div>
    </div>
  \`;
}

checkBtn.addEventListener('click', getConnectionInfo);

// Listen for connection changes
const connection = navigator.connection 
  || navigator.mozConnection 
  || navigator.webkitConnection;

if (connection) {
  connection.addEventListener('change', () => {
    if (info.style.display !== 'none') {
      getConnectionInfo();
    }
  });
}`}
        colorTheme="indigo"
      />

      {/* Example 1: Check Connection */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Get Connection Information</CardTitle>
          <CardDescription>Check network type and speed</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Get connection information
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

if (connection) {
  // Connection type (e.g., 'wifi', 'cellular', '4g')
  console.log('Type:', connection.effectiveType);
  
  // Downlink speed in Mbps
  console.log('Speed:', connection.downlink + ' Mbps');
  
  // Round-trip time in milliseconds
  console.log('RTT:', connection.rtt + ' ms');
  
  // Data saver mode enabled?
  console.log('Save Data:', connection.saveData);
  
} else {
  console.log('Network Information API not supported');
}

// effectiveType values:
// - 'slow-2g' - Very slow
// - '2g' - Slow
// - '3g' - Medium
// - '4g' - Fast

// 🎯 Use to optimize content delivery`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Adaptive Loading */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Adaptive Image Loading</CardTitle>
          <CardDescription>Serve images based on connection</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Load images based on connection speed
function loadImage() {
  const connection = navigator.connection;
  const img = document.getElementById('hero-image');
  
  if (!connection) {
    // No API support - load normal image
    img.src = 'hero-normal.jpg';
    return;
  }
  
  // Check connection type
  if (connection.saveData) {
    // User enabled data saver
    img.src = 'hero-low.jpg';
    console.log('Loading low-quality image (data saver on)');
    
  } else if (connection.effectiveType === '4g') {
    // Fast connection - load high quality
    img.src = 'hero-high.jpg';
    console.log('Loading high-quality image');
    
  } else if (connection.effectiveType === '3g') {
    // Medium connection - load normal
    img.src = 'hero-normal.jpg';
    console.log('Loading normal-quality image');
    
  } else {
    // Slow connection - load low quality
    img.src = 'hero-low.jpg';
    console.log('Loading low-quality image (slow connection)');
  }
}

loadImage();

// Listen for connection changes
navigator.connection?.addEventListener('change', () => {
  console.log('Connection changed:', navigator.connection.effectiveType);
  loadImage(); // Reload with appropriate quality
});

// 🎯 Better UX on slow connections!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>When to use Network Info</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">📸 Image Quality</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Serve lower quality on slow connections
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">🎬 Video Streaming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-adjust video quality (like Netflix)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">📱 Data Saver</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Respect user's data saving preference
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">⚡ Preloading</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only preload resources on fast connections
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Network Information API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📶 Get Connection Info</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const conn = navigator.connection;
console.log(conn.effectiveType); // '4g', '3g', etc.
console.log(conn.downlink); // Mbps
console.log(conn.saveData); // true/false`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📡 Listen for Changes</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`navigator.connection?.addEventListener('change', () => {
  console.log('Connection changed');
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💾 Data Saver:</strong> Respect saveData preference
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📶</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">effectiveType</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Connection speed<br/>
                    slow-2g, 2g, 3g, 4g
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">saveData</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data saver mode<br/>
                    Respect user choice
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">downlink</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Download speed<br/>
                    In Mbps
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Adaptive UX</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimize for network<br/>
                    Better performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-300 dark:border-indigo-700">
            <Signal className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Adaptive Content Delivery</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Network Information API enables <strong>adaptive loading</strong> - serve appropriate content based on connection speed. Great for improving UX on slow networks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
