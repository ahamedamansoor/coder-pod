'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, MapPin, AlertTriangle, CheckCircle2, Shield } from 'lucide-react';

export default function JavaScriptGeolocation() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={MapPin}
        category="APIs & Browser"
        title="Geolocation API"
        description="Accessing user location data with the Geolocation API"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is Geolocation API?</CardTitle>
          <CardDescription>Access user's geographical location</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Geolocation API allows you to access the user's geographical position. It provides latitude, longitude, altitude, 
            speed, and more. The API requires user permission for privacy reasons.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Privacy First</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                User must explicitly grant permission before location access
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/10 border border-cyan-200 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Multiple Sources</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Uses GPS, WiFi, IP address, cell towers for location
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/10 border border-sky-200 dark:border-sky-700">
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-2">Real-time Updates</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can continuously track user's position as they move
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Getting Current Position</CardTitle>
          <CardDescription>One-time location retrieval</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Check if Geolocation is supported
if ('geolocation' in navigator) {
  // Get current position
  navigator.geolocation.getCurrentPosition(
    // Success callback
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      
      console.log(\`Latitude: \${lat}\`);
      console.log(\`Longitude: \${lon}\`);
      console.log(\`Accuracy: \${accuracy} meters\`);
      
      // Optional properties (may not be available)
      if (position.coords.altitude !== null) {
        console.log(\`Altitude: \${position.coords.altitude}m\`);
      }
      
      if (position.coords.speed !== null) {
        console.log(\`Speed: \${position.coords.speed} m/s\`);
      }
    },
    
    // Error callback
    (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.error('User denied geolocation');
          break;
        case error.POSITION_UNAVAILABLE:
          console.error('Position unavailable');
          break;
        case error.TIMEOUT:
          console.error('Request timeout');
          break;
        default:
          console.error('Unknown error');
      }
    },
    
    // Options
    {
      enableHighAccuracy: true,  // Use GPS if available
      timeout: 5000,              // Wait max 5 seconds
      maximumAge: 0               // Don't use cached position
    }
  );
} else {
  console.error('Geolocation not supported');
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Position Object Properties</CardTitle>
          <CardDescription>Available location data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Property</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Description</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Always Available</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.latitude</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Latitude in decimal degrees
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">Yes</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.longitude</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Longitude in decimal degrees
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">Yes</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.accuracy</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Accuracy in meters
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">Yes</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.altitude</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Height above sea level (meters)
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-amber-700 dark:text-amber-300">No</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.altitudeAccuracy</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Altitude accuracy in meters
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-amber-700 dark:text-amber-300">No</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.heading</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Direction of travel (degrees, 0=North)
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-amber-700 dark:text-amber-300">No</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">coords.speed</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Speed in meters per second
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-amber-700 dark:text-amber-300">No</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">timestamp</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    When position was acquired
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Watching Position (Real-time Tracking)</CardTitle>
          <CardDescription>Continuously monitor user movement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Start watching position
const watchId = navigator.geolocation.watchPosition(
  // Success callback (called repeatedly)
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    console.log(\`New position: \${lat}, \${lon}\`);
    
    // Update map marker, calculate distance, etc.
    updateMapMarker(lat, lon);
  },
  
  // Error callback
  (error) => {
    console.error('Watch error:', error.message);
  },
  
  // Options
  {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  }
);

// Stop watching when done
function stopTracking() {
  navigator.geolocation.clearWatch(watchId);
  console.log('Stopped tracking');
}`}</code></pre>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Battery Usage Warning</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Continuous position watching, especially with <code className="text-amber-700 dark:text-amber-300">enableHighAccuracy: true</code>, 
              can significantly drain device battery. Always call <code className="text-amber-700 dark:text-amber-300">clearWatch()</code> when done.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Location-based Weather App</CardTitle>
          <CardDescription>Complete geolocation implementation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class LocationWeatherApp {
  constructor() {
    this.watchId = null;
  }
  
  // Get user location and fetch weather
  async getWeatherForCurrentLocation() {
    // Check support
    if (!('geolocation' in navigator)) {
      throw new Error('Geolocation not supported');
    }
    
    try {
      const position = await this.getCurrentPosition();
      const weather = await this.fetchWeather(
        position.coords.latitude,
        position.coords.longitude
      );
      
      return {
        location: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          accuracy: position.coords.accuracy
        },
        weather: weather
      };
    } catch (error) {
      this.handleLocationError(error);
      throw error;
    }
  }
  
  // Promisified getCurrentPosition
  getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000, // Cache for 1 minute
          ...options
        }
      );
    });
  }
  
  // Fetch weather from API
  async fetchWeather(lat, lon) {
    const response = await fetch(
      \`https://api.weather.com/v1/geocode/\${lat}/\${lon}/observations.json\`
    );
    
    if (!response.ok) {
      throw new Error('Weather fetch failed');
    }
    
    return await response.json();
  }
  
  // Start tracking user movement
  startTracking(callback) {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        callback({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          speed: position.coords.speed,
          heading: position.coords.heading,
          timestamp: position.timestamp
        });
      },
      (error) => this.handleLocationError(error),
      {
        enableHighAccuracy: true,
        maximumAge: 5000
      }
    );
  }
  
  // Stop tracking
  stopTracking() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }
  
  // Handle errors
  handleLocationError(error) {
    const errorMessages = {
      1: 'Permission denied. Please allow location access.',
      2: 'Position unavailable. Check your GPS/WiFi.',
      3: 'Request timeout. Please try again.',
    };
    
    console.error(
      errorMessages[error.code] || 'Unknown location error'
    );
  }
  
  // Calculate distance between two points (Haversine formula)
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }
  
  toRad(degrees) {
    return degrees * (Math.PI / 180);
  }
}

// Usage
const app = new LocationWeatherApp();

// Get weather for current location
app.getWeatherForCurrentLocation()
  .then(data => {
    console.log('Weather:', data.weather);
    console.log('Location accuracy:', data.location.accuracy + 'm');
  })
  .catch(error => {
    console.error('Failed:', error.message);
  });

// Start tracking movement
app.startTracking((position) => {
  console.log('New position:', position);
});

// Stop tracking when done
setTimeout(() => {
  app.stopTracking();
}, 60000); // Stop after 1 minute`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
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
                <li>• Always check for geolocation support</li>
                <li>• Provide clear UI feedback during loading</li>
                <li>• Handle all error cases gracefully</li>
                <li>• Use maximumAge to cache positions</li>
                <li>• Clear watchers when not needed</li>
                <li>• Explain why you need location access</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Don't use high accuracy unnecessarily</li>
                <li>• Don't forget to stop watching position</li>
                <li>• Don't store location without permission</li>
                <li>• Don't use for sensitive tracking</li>
                <li>• Don't assume GPS is always available</li>
                <li>• Don't set timeout too low</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Privacy & HTTPS Requirement</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Geolocation API requires <strong>HTTPS</strong> (except on localhost). Users must explicitly grant permission, 
              and browsers show clear indicators when location is being accessed. Always respect user privacy.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">User Permission Required</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Privacy-first design with explicit consent
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    getCurrentPosition() and watchPosition()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">HTTPS Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Secure context required (except localhost)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Battery Awareness</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    High accuracy tracking drains battery
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
