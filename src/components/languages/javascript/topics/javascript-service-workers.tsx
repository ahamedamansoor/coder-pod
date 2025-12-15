'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, Wifi, AlertTriangle, CheckCircle2, Shield } from 'lucide-react';

export default function JavaScriptServiceWorkers() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Wifi}
        category="APIs & Browser"
        title="Service Workers"
        description="Offline functionality and background sync with service workers"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What are Service Workers?</CardTitle>
          <CardDescription>Programmable network proxy for your web app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Service Workers are JavaScript files that run in the background, separate from your web page. They act as a programmable 
            network proxy, allowing you to intercept network requests, cache resources, and provide offline functionality. They're 
            the foundation of Progressive Web Apps (PWAs).
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/10 border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Offline Support</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cache resources and serve them when offline
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/10 border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Background Sync</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Defer actions until network connectivity
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10 border border-violet-200 dark:border-violet-700">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Push Notifications</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Receive notifications when app isn't open
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Service Worker Lifecycle</CardTitle>
          <CardDescription>Understanding registration and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">1. Registration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Browser downloads and parses the service worker file
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">2. Installation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Service worker installs and caches essential resources
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-700">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">3. Activation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Service worker takes control and cleans up old caches
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">4. Idle / Fetch / Message</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Service worker intercepts requests or terminates when idle
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Registering a Service Worker</CardTitle>
          <CardDescription>Main thread registration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register after page load
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration.scope);
        
        // Check for updates
        registration.update();
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('New service worker found');
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New update available
                console.log('New content available, refresh to update');
              } else {
                // First install
                console.log('Content cached for offline use');
              }
            }
          });
        });
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
  
  // Listen for controller change (when new SW activates)
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('Service Worker updated, reloading...');
    window.location.reload();
  });
} else {
  console.log('Service Workers not supported');
}`}</code></pre>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">HTTPS Required</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Service Workers require HTTPS (except on localhost) for security reasons. They have powerful capabilities 
              and must be served over a secure connection.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Service Worker File (Install & Activate)</CardTitle>
          <CardDescription>Setting up caching strategy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// service-worker.js

const CACHE_NAME = 'my-app-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/logo.png',
  '/offline.html'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        // Take control immediately
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        // Take control of all pages
        return self.clients.claim();
      })
  );
});`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Fetch Event & Caching Strategies</CardTitle>
          <CardDescription>Intercepting network requests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// STRATEGY 1: Cache First (best for static assets)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version or fetch from network
        return cachedResponse || fetch(event.request);
      })
  );
});

// STRATEGY 2: Network First (best for dynamic content)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Cache the fresh response
        return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
});

// STRATEGY 3: Stale While Revalidate (best for balance)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Fetch in background and update cache
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, networkResponse.clone());
              });
            return networkResponse;
          });
        
        // Return cached immediately, or wait for network
        return cachedResponse || fetchPromise;
      })
  );
});

// STRATEGY 4: Cache with Network Fallback + Offline Page
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request)
          .catch(() => {
            // Show offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// STRATEGY 5: Selective Caching (different strategies per resource)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Cache first for static assets
  if (url.pathname.match(/\\.(css|js|png|jpg|gif|svg)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request))
    );
  }
  // Network first for API calls
  else if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
  }
  // Network only for everything else
  else {
    event.respondWith(fetch(event.request));
  }
});`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Background Sync</CardTitle>
          <CardDescription>Defer actions until network is available</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Main thread - register sync
navigator.serviceWorker.ready.then(registration => {
  // Register a sync event
  return registration.sync.register('sync-messages');
}).catch(error => {
  console.error('Sync registration failed:', error);
});

// Service Worker - handle sync event
self.addEventListener('sync', (event) => {
  console.log('Background sync:', event.tag);
  
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      // Get pending messages from IndexedDB
      getPendingMessages()
        .then(messages => {
          // Send all pending messages
          return Promise.all(
            messages.map(msg => 
              fetch('/api/messages', {
                method: 'POST',
                body: JSON.stringify(msg)
              })
            )
          );
        })
        .then(() => {
          // Clear pending messages
          return clearPendingMessages();
        })
        .catch(error => {
          console.error('Sync failed:', error);
          throw error; // Retry later
        })
    );
  }
});

// Example: Queue message for sync
async function queueMessage(message) {
  // Save to IndexedDB
  await saveToPendingMessages(message);
  
  // Register sync
  if ('serviceWorker' in navigator && 'sync' in ServiceWorkerRegistration.prototype) {
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('sync-messages');
  } else {
    // Fallback: send immediately
    await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify(message)
    });
  }
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Push Notifications</CardTitle>
          <CardDescription>Receive notifications from server</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Main thread - subscribe to push
async function subscribeToPush() {
  const registration = await navigator.serviceWorker.ready;
  
  // Request notification permission
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    console.log('Notification permission denied');
    return;
  }
  
  // Subscribe to push notifications
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  });
  
  // Send subscription to server
  await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  });
  
  console.log('Subscribed to push notifications');
}

// Service Worker - handle push event
self.addEventListener('push', (event) => {
  console.log('Push notification received');
  
  let data = {
    title: 'New Notification',
    body: 'You have a new message',
    icon: '/icon.png',
    badge: '/badge.png'
  };
  
  if (event.data) {
    data = event.data.json();
  }
  
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      data: data.url,
      actions: [
        { action: 'open', title: 'Open' },
        { action: 'close', title: 'Close' }
      ]
    })
  );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open') {
    // Open the app
    event.waitUntil(
      clients.openWindow(event.notification.data || '/')
    );
  }
});

// Helper function
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\\-/g, '+')
    .replace(/_/g, '/');
  
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Complete PWA Service Worker</CardTitle>
          <CardDescription>Production-ready service worker implementation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// service-worker.js - Complete PWA implementation

const CACHE_NAME = 'pwa-cache-v1';
const RUNTIME_CACHE = 'pwa-runtime-v1';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/offline.html'
];

// Install - precache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
            .map(name => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch - smart caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }
  
  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }
  
  // Handle static assets
  event.respondWith(cacheFirst(request));
});

// Cache first strategy
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  
  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}

// Network first strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw error;
  }
}

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Get pending data from IndexedDB
  const db = await openDB();
  const pending = await db.getAll('pending');
  
  // Sync each item
  for (const item of pending) {
    try {
      await fetch('/api/sync', {
        method: 'POST',
        body: JSON.stringify(item)
      });
      await db.delete('pending', item.id);
    } catch (error) {
      console.error('Sync failed for item:', item.id);
    }
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Notification', {
      body: data.body,
      icon: data.icon || '/icon-192.png',
      badge: '/badge-72.png',
      data: { url: data.url },
      actions: [
        { action: 'open', title: 'Open' },
        { action: 'close', title: 'Dismiss' }
      ]
    })
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Message handling (communicate with main thread)
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys()
        .then(names => Promise.all(names.map(name => caches.delete(name))))
    );
  }
});`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Version your cache names</li>
                <li>• Clean up old caches on activate</li>
                <li>• Use appropriate caching strategies</li>
                <li>• Provide offline fallback pages</li>
                <li>• Test thoroughly before deployment</li>
                <li>• Use skipWaiting() and claim() carefully</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Don't cache user-specific data</li>
                <li>• Don't forget to update cache version</li>
                <li>• Don't cache too much (storage limits)</li>
                <li>• Don't use synchronous APIs</li>
                <li>• Don't assume SW will always run</li>
                <li>• Don't hardcode URLs</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Security & Scope</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Service Workers only control pages within their scope (directory they're served from). They require HTTPS 
              and can't access DOM directly. Use postMessage() to communicate with pages.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-violet-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Offline Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Cache resources for offline access
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Network Proxy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Intercept and control network requests
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Background Sync</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Defer actions until connectivity
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">PWA Foundation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essential for Progressive Web Apps
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
