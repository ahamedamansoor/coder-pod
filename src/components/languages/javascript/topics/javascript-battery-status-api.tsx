'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Battery,
  CheckCircle,
  Zap,
  Lightbulb,
  AlertTriangle,
  Code2,
} from 'lucide-react';

export default function JavaScriptBatteryStatusAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Battery}
        category="JavaScript Browser APIs"
        title="Battery Status API"
        description="Check device battery level and charging status"
        colorTheme="amber"
      />

      {/* What is Battery Status API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/20 dark:from-amber-950/10 dark:via-yellow-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
              <Battery className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Battery Status API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Battery Status API lets you check the device's <strong className="text-amber-700 dark:text-amber-400">battery level</strong> and <strong className="text-orange-700 dark:text-orange-400">charging status</strong>. You can optimize your app based on battery life!
              </p>
            </div>
          </div>

          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/30">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle>Limited Browser Support:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              This API is deprecated and removed from most browsers due to privacy concerns. Included here for educational purposes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Demo: Battery Status Check"
        description="See how the API works (deprecated - may not function)"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #d97706; margin-bottom: 20px;">🔋 Battery Status Demo</h2>
  
  <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 3px solid #f59e0b;">
    <button id="checkBtn" style="padding: 12px 24px; background: #d97706; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 16px; width: 100%; margin-bottom: 15px;">
      🔋 Check Battery Status
    </button>
    
    <div id="status" style="padding: 15px; background: white; border-radius: 6px; display: none;"></div>
  </div>
  
  <div style="background: #fee2e2; padding: 15px; border-radius: 6px; border-left: 4px solid #ef4444;">
    <strong style="color: #991b1b;">⚠️ Note:</strong>
    <span style="color: #7f1d1d;"> This API is deprecated and removed from most browsers for privacy reasons. Demo may not work.</span>
  </div>
</div>`}
        css={`button:hover {
  background: #b45309;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(217, 119, 6, 0.3);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}`}
        js={`const checkBtn = document.getElementById('checkBtn');
const status = document.getElementById('status');

checkBtn.addEventListener('click', async () => {
  status.style.display = 'block';
  
  // Check if API is available
  if (!('getBattery' in navigator)) {
    status.innerHTML = \`
      <div style="color: #991b1b;">
        <strong>❌ Not Supported</strong><br/>
        <p style="font-size: 14px; margin-top: 8px;">Battery Status API is not available in this browser.</p>
        <p style="font-size: 12px; margin-top: 8px; color: #7f1d1d;">This API was deprecated due to privacy concerns (device fingerprinting).</p>
      </div>
    \`;
    return;
  }
  
  try {
    const battery = await navigator.getBattery();
    
    const level = Math.floor(battery.level * 100);
    const charging = battery.charging ? '⚡ Yes' : '🔌 No';
    const chargingTime = battery.chargingTime === Infinity 
      ? 'N/A' 
      : Math.floor(battery.chargingTime / 60) + ' min';
    const dischargingTime = battery.dischargingTime === Infinity 
      ? 'N/A' 
      : Math.floor(battery.dischargingTime / 60) + ' min';
    
    status.innerHTML = \`
      <div style="color: #065f46;">
        <h4 style="margin: 0 0 12px 0;">✅ Battery Information:</h4>
        <div style="font-size: 14px; line-height: 1.8;">
          <div>🔋 <strong>Level:</strong> \${level}%</div>
          <div>⚡ <strong>Charging:</strong> \${charging}</div>
          <div>⏱️ <strong>Time to Full:</strong> \${chargingTime}</div>
          <div>⏱️ <strong>Time to Empty:</strong> \${dischargingTime}</div>
        </div>
      </div>
    \`;
    
  } catch (error) {
    status.innerHTML = \`
      <div style="color: #991b1b;">
        <strong>❌ Error</strong><br/>
        <p style="font-size: 14px; margin-top: 8px;">\${error.message}</p>
      </div>
    \`;
  }
});`}
        colorTheme="amber"
      />

      {/* Example 1: Check Battery */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Get Battery Information</CardTitle>
          <CardDescription>Basic battery status check</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Get battery status (if supported)
async function checkBattery() {
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();
      
      // Battery level (0 to 1)
      const level = Math.floor(battery.level * 100);
      console.log('Battery Level:', level + '%');
      
      // Charging status
      console.log('Charging:', battery.charging);
      
      // Time until fully charged (seconds)
      console.log('Charging Time:', battery.chargingTime);
      
      // Time until battery empty (seconds)
      console.log('Discharge Time:', battery.dischargingTime);
      
    } catch (error) {
      console.error('Battery API error:', error);
    }
  } else {
    console.log('Battery API not supported');
  }
}

checkBattery();

// 🎯 Note: Removed from Chrome/Edge for privacy reasons`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Battery Events */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Monitor Battery Changes</CardTitle>
          <CardDescription>Listen for battery events</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Monitor battery changes
async function monitorBattery() {
  if ('getBattery' in navigator) {
    const battery = await navigator.getBattery();
    
    // Listen for level changes
    battery.addEventListener('levelchange', () => {
      const level = Math.floor(battery.level * 100);
      console.log('Battery level changed:', level + '%');
      
      // Show warning if low
      if (level < 20 && !battery.charging) {
        alert('Low battery! Consider saving your work.');
      }
    });
    
    // Listen for charging status
    battery.addEventListener('chargingchange', () => {
      if (battery.charging) {
        console.log('Device is charging');
      } else {
        console.log('Device is not charging');
      }
    });
    
    // Charging time changed
    battery.addEventListener('chargingtimechange', () => {
      console.log('Charging time:', battery.chargingTime);
    });
    
    // Discharge time changed
    battery.addEventListener('dischargingtimechange', () => {
      console.log('Discharge time:', battery.dischargingTime);
    });
  }
}

monitorBattery();

// 🎯 Could adjust app features based on battery`}</code>
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
              <CardTitle>Potential Use Cases</CardTitle>
              <CardDescription>What it could be used for (if supported)</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">⚡ Power Saving Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduce quality/features when battery low
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">🎮 Gaming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Adjust graphics quality for battery life
              </p>
            </div>

            <div className="p-5 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800/30">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">📱 Mobile Apps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Optimize behavior on low battery
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">💾 Auto-Save</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Warn user to save when battery low
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Battery Status API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔋 Get Battery Info</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const battery = await navigator.getBattery();
console.log(battery.level); // 0 to 1
console.log(battery.charging); // true/false`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📡 Monitor Changes</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`battery.addEventListener('levelchange', () => {
  console.log('Battery:', battery.level * 100 + '%');
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>⚠️ Deprecated:</strong> Removed from most browsers for privacy
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">battery.level</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Battery percentage<br/>
                    Value: 0 to 1
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">battery.charging</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Charging status<br/>
                    Boolean value
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Deprecated</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Removed from browsers<br/>
                    Privacy concerns
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📱</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Mobile Focused</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mainly for mobile<br/>
                    Desktop always "charging"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-300 dark:border-amber-700">
            <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Educational Purpose</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Battery Status API was <strong>removed due to privacy concerns</strong> (fingerprinting). Modern browsers no longer support it. Use media queries like <code className="text-xs bg-white dark:bg-slate-800 px-1 rounded">prefers-reduced-motion</code> instead for battery-conscious UX.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
