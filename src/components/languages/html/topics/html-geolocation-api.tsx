'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MapPin, Navigation, AlertCircle, CheckCircle, Info, Compass } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlGeolocationApiProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlGeolocationApi({ onOpenWebPlayground }: HtmlGeolocationApiProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geolocation API</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #10b981;
      margin-bottom: 10px;
      font-size: 1.8rem;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      margin-bottom: 20px;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    }
    
    button:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }
    
    .result-box {
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      min-height: 150px;
      margin-bottom: 16px;
    }
    
    .result-title {
      font-weight: 600;
      color: #10b981;
      margin-bottom: 12px;
      font-size: 13px;
      text-transform: uppercase;
    }
    
    .coord-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 16px;
    }
    
    .coord-item {
      padding: 12px;
      background: white;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
    
    .coord-label {
      font-size: 11px;
      color: #6b7280;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    
    .coord-value {
      font-size: 16px;
      font-weight: 600;
      color: #1f2937;
      font-family: monospace;
    }
    
    .map-link {
      display: block;
      text-align: center;
      padding: 12px;
      background: #dbeafe;
      color: #1e40af;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.2s;
    }
    
    .map-link:hover {
      background: #bfdbfe;
    }
    
    .loading {
      text-align: center;
      padding: 30px;
      color: #6b7280;
    }
    
    .spinner {
      border: 3px solid #e5e7eb;
      border-top: 3px solid #10b981;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 12px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .error {
      color: #dc2626;
      padding: 12px;
      background: #fee2e2;
      border-radius: 6px;
      border: 1px solid #fecaca;
    }
    
    .info-box {
      padding: 12px;
      background: #d1fae5;
      border-radius: 6px;
      border-left: 4px solid #10b981;
      font-size: 13px;
      color: #065f46;
      margin-top: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #34d399;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .result-box {
        background: #0f172a;
        border-color: #475569;
      }
      
      .result-title {
        color: #34d399;
      }
      
      .coord-item {
        background: #1e293b;
        border-color: #475569;
      }
      
      .coord-label {
        color: #94a3b8;
      }
      
      .coord-value {
        color: #e2e8f0;
      }
      
      .map-link {
        background: #1e3a5f;
        color: #93c5fd;
      }
      
      .map-link:hover {
        background: #1e40af;
      }
      
      .error {
        background: #7f1d1d;
        color: #fecaca;
        border-color: #dc2626;
      }
      
      .info-box {
        background: #14532d;
        color: #86efac;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .result-box {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .result-title {
      color: #34d399;
    }
    
    :root.dark .coord-item {
      background: #1e293b;
      border-color: #475569;
    }
    
    :root.dark .coord-label {
      color: #94a3b8;
    }
    
    :root.dark .coord-value {
      color: #e2e8f0;
    }
    
    :root.dark .map-link {
      background: #1e3a5f;
      color: #93c5fd;
    }
    
    :root.dark .map-link:hover {
      background: #1e40af;
    }
    
    :root.dark .error {
      background: #7f1d1d;
      color: #fecaca;
      border-color: #dc2626;
    }
    
    :root.dark .info-box {
      background: #14532d;
      color: #86efac;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📍 Geolocation API</h1>
    <p class="subtitle">Get your current location (browser will ask for permission)</p>
    
    <button id="getLocationBtn">🌍 Get My Location</button>
    
    <div class="result-box" id="resultBox">
      <div class="result-title">Your Coordinates</div>
      <p style="color: #6b7280; text-align: center; padding: 20px;">Click the button above to get your location</p>
    </div>
    
    <div class="info-box">
      <strong>🔒 Privacy:</strong> The browser will ask for your permission before accessing your location. This is a security feature to protect your privacy.
    </div>
  </div>
  
  <script>
    const btn = document.getElementById('getLocationBtn');
    const resultBox = document.getElementById('resultBox');
    
    btn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        resultBox.innerHTML = '<div class="error">❌ Geolocation is not supported by your browser</div>';
        return;
      }
      
      // Show loading state
      btn.disabled = true;
      btn.textContent = '⏳ Getting location...';
      
      resultBox.innerHTML = \`
        <div class="loading">
          <div class="spinner"></div>
          <p>Requesting your location...</p>
        </div>
      \`;
      
      // Request current position
      navigator.geolocation.getCurrentPosition(
        // Success callback
        (position) => {
          const { latitude, longitude, accuracy, altitude, heading, speed } = position.coords;
          
          resultBox.innerHTML = \`
            <div class="result-title">📍 Location Found!</div>
            <div class="coord-grid">
              <div class="coord-item">
                <div class="coord-label">Latitude</div>
                <div class="coord-value">\${latitude.toFixed(6)}°</div>
              </div>
              <div class="coord-item">
                <div class="coord-label">Longitude</div>
                <div class="coord-value">\${longitude.toFixed(6)}°</div>
              </div>
              <div class="coord-item">
                <div class="coord-label">Accuracy</div>
                <div class="coord-value">\${accuracy.toFixed(0)}m</div>
              </div>
              <div class="coord-item">
                <div class="coord-label">Altitude</div>
                <div class="coord-value">\${altitude ? altitude.toFixed(0) + 'm' : 'N/A'}</div>
              </div>
            </div>
            <a href="https://www.google.com/maps?q=\${latitude},\${longitude}" target="_blank" class="map-link">
              🗺️ View on Google Maps
            </a>
          \`;
          
          btn.disabled = false;
          btn.textContent = '🔄 Refresh Location';
        },
        // Error callback
        (error) => {
          let errorMessage = '';
          
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "❌ Permission denied. Please allow location access.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "❌ Location information unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "❌ Request timed out. Please try again.";
              break;
            default:
              errorMessage = "❌ Unknown error occurred.";
          }
          
          resultBox.innerHTML = \`<div class="error">\${errorMessage}</div>\`;
          
          btn.disabled = false;
          btn.textContent = '🔄 Try Again';
        },
        // Options
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    });
  </script>
</body>
</html>`;

  const watchPositionExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Watch Position</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #3b82f6;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    .controls {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }
    
    button {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-start {
      background: #10b981;
      color: white;
    }
    
    .btn-start:hover {
      background: #059669;
    }
    
    .btn-stop {
      background: #ef4444;
      color: white;
    }
    
    .btn-stop:hover {
      background: #dc2626;
    }
    
    .btn-stop:disabled,
    .btn-start:disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
    
    .status-badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .status-watching {
      background: #d1fae5;
      color: #065f46;
    }
    
    .status-stopped {
      background: #fee2e2;
      color: #991b1b;
    }
    
    .track-log {
      background: #f9fafb;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      padding: 16px;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .log-item {
      padding: 12px;
      background: white;
      border-radius: 6px;
      margin-bottom: 8px;
      border-left: 3px solid #3b82f6;
      font-size: 13px;
      animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .log-time {
      color: #6b7280;
      font-size: 11px;
      margin-bottom: 4px;
    }
    
    .log-coords {
      color: #1f2937;
      font-family: monospace;
      font-size: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #60a5fa;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .track-log {
        background: #0f172a;
        border-color: #475569;
      }
      
      .log-item {
        background: #1e293b;
        border-left-color: #60a5fa;
      }
      
      .log-coords {
        color: #e2e8f0;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #60a5fa;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .track-log {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .log-item {
      background: #1e293b;
      border-left-color: #60a5fa;
    }
    
    :root.dark .log-coords {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛰️ Watch Position</h1>
    <p class="subtitle">Continuously track your location as you move</p>
    
    <span class="status-badge status-stopped" id="statusBadge">⭕ Stopped</span>
    
    <div class="controls">
      <button class="btn-start" id="startBtn">▶️ Start Watching</button>
      <button class="btn-stop" id="stopBtn" disabled>⏹️ Stop Watching</button>
    </div>
    
    <div class="track-log" id="trackLog">
      <p style="color: #6b7280; text-align: center; padding: 20px;">Click "Start Watching" to begin tracking</p>
    </div>
  </div>
  
  <script>
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const statusBadge = document.getElementById('statusBadge');
    const trackLog = document.getElementById('trackLog');
    
    let watchId = null;
    let updateCount = 0;
    
    function addLog(lat, lon, accuracy) {
      if (updateCount === 0) {
        trackLog.innerHTML = '';
      }
      updateCount++;
      
      const time = new Date().toLocaleTimeString();
      const logItem = document.createElement('div');
      logItem.className = 'log-item';
      logItem.innerHTML = \`
        <div class="log-time">Update #\${updateCount} at \${time}</div>
        <div class="log-coords">
          📍 \${lat.toFixed(6)}°, \${lon.toFixed(6)}° (±\${accuracy.toFixed(0)}m)
        </div>
      \`;
      
      trackLog.insertBefore(logItem, trackLog.firstChild);
      
      // Keep only last 20 updates
      while (trackLog.children.length > 20) {
        trackLog.removeChild(trackLog.lastChild);
      }
    }
    
    startBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        alert('❌ Geolocation not supported');
        return;
      }
      
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          addLog(latitude, longitude, accuracy);
        },
        (error) => {
          alert('❌ Error: ' + error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
      
      startBtn.disabled = true;
      stopBtn.disabled = false;
      statusBadge.className = 'status-badge status-watching';
      statusBadge.textContent = '🟢 Watching...';
    });
    
    stopBtn.addEventListener('click', () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
      }
      
      startBtn.disabled = false;
      stopBtn.disabled = true;
      statusBadge.className = 'status-badge status-stopped';
      statusBadge.textContent = '⭕ Stopped';
    });
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MapPin}
        category="HTML · APIs"
        title="Geolocation API"
        description="Access user's geographic location with their permission"
        colorTheme="green"
      />

      {/* What is Geolocation API */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Navigation className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            What is the Geolocation API?
          </CardTitle>
          <CardDescription>
            A web API that allows websites to access the user's geographic location
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">Geolocation API</code> provides access to geographical location data from the device. It can use GPS, WiFi, cellular networks, or IP address to determine location.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Permission Required</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                User must explicitly allow access
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Multiple Sources</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                GPS, WiFi, cellular, IP address
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">High Accuracy</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Optional high-accuracy mode
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Get Current Position
          </CardTitle>
          <CardDescription>
            Request the user's current location once
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="getCurrentPosition() Demo"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      {/* Watch Position Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Watch Position (Continuous Tracking)
          </CardTitle>
          <CardDescription>
            Monitor location changes in real-time as the user moves
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={watchPositionExample}
            title="watchPosition() Demo"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Core Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Core Methods</CardTitle>
          <CardDescription>
            Three main methods available in the Geolocation API
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400 block mb-2">getCurrentPosition()</code>
              <p className="text-sm text-muted-foreground">Get location once</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400 block mb-2">watchPosition()</code>
              <p className="text-sm text-muted-foreground">Track location continuously</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400 block mb-2">clearWatch()</code>
              <p className="text-sm text-muted-foreground">Stop watching location</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Privacy & Security</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>HTTPS Required:</strong> Only works on secure (HTTPS) connections in production</li>
            <li><strong>User Permission:</strong> Browser always prompts user for permission first</li>
            <li><strong>Permission can be revoked:</strong> User can deny or revoke at any time</li>
            <li><strong>Handle errors gracefully:</strong> Always implement error callbacks</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Use Cases */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <Info className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Common Use Cases</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Store Locators:</strong> Find nearest stores or services</li>
            <li><strong>Weather Apps:</strong> Show local weather automatically</li>
            <li><strong>Delivery Apps:</strong> Track delivery location in real-time</li>
            <li><strong>Fitness Trackers:</strong> Record running/cycling routes</li>
            <li><strong>Location-based Services:</strong> Show relevant local content</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

