'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, Bell, AlertTriangle, CheckCircle2, Shield } from 'lucide-react';

export default function JavaScriptNotificationAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Bell}
        category="APIs & Browser"
        title="Notification API"
        description="Displaying browser notifications to users"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is the Notification API?</CardTitle>
          <CardDescription>Display system notifications to users</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Notification API allows web pages to display system notifications to the user. These notifications appear outside the browser 
            window, even when the page is not active, making them perfect for alerts, reminders, and real-time updates.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">System-level</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Notifications appear outside the browser in the OS notification center
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/10 border border-violet-200 dark:border-violet-700">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Permission Required</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Users must explicitly grant notification permission
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border border-fuchsia-200 dark:border-fuchsia-700">
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Interactive</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can include actions, images, and respond to clicks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Requesting Permission</CardTitle>
          <CardDescription>First step before showing notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Check if notifications are supported
if (!('Notification' in window)) {
  console.log('Notifications not supported');
} else {
  // Check current permission status
  console.log('Permission:', Notification.permission);
  // Possible values: "granted", "denied", "default"
  
  // Request permission (modern way with Promises)
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Permission granted!');
    } else if (permission === 'denied') {
      console.log('Permission denied');
    } else {
      console.log('Permission dismissed');
    }
  });
  
  // Old callback-based way (for compatibility)
  Notification.requestPermission(permission => {
    console.log('Permission:', permission);
  });
}`}</code></pre>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Best Practice</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Always request permission in response to a user action (like a button click), not immediately on page load. 
              Browsers may block automatic permission requests.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Creating Notifications</CardTitle>
          <CardDescription>Basic notification display</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Simple notification
if (Notification.permission === 'granted') {
  new Notification('Hello!', {
    body: 'This is a notification message',
    icon: '/icon.png'
  });
}

// Notification with all options
const notification = new Notification('New Message', {
  body: 'You have a new message from John',
  icon: '/avatar.png',
  badge: '/badge.png',      // Small icon shown in notification tray
  image: '/preview.jpg',    // Large preview image
  tag: 'message-123',       // Unique ID (replaces duplicate notifications)
  requireInteraction: false, // Keep notification until user dismisses
  silent: false,            // Play notification sound
  vibrate: [200, 100, 200], // Vibration pattern (mobile)
  data: {                   // Custom data attached to notification
    userId: 123,
    messageId: 456
  },
  actions: [                // Action buttons (requires Service Worker)
    {
      action: 'reply',
      title: 'Reply'
    },
    {
      action: 'close',
      title: 'Close'
    }
  ]
});

// Listen to notification events
notification.onclick = () => {
  console.log('Notification clicked');
  window.focus(); // Focus the browser window
  notification.close(); // Close the notification
};

notification.onclose = () => {
  console.log('Notification closed');
};

notification.onerror = (error) => {
  console.error('Notification error:', error);
};

notification.onshow = () => {
  console.log('Notification shown');
};

// Close notification programmatically
setTimeout(() => {
  notification.close();
}, 5000); // Close after 5 seconds`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Notification Options</CardTitle>
          <CardDescription>Available configuration properties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Option</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Type</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">body</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">string</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Notification message text
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">icon</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">string (URL)</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Icon image URL
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">badge</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">string (URL)</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Small badge icon for notification tray
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">image</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">string (URL)</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Large preview image
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">tag</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">string</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Unique ID (replaces existing notification with same tag)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">requireInteraction</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">boolean</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Keep notification until user dismisses
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">silent</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">boolean</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    No sound or vibration
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">vibrate</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">array</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Vibration pattern [vibrate, pause, vibrate, ...]
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">data</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">any</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Custom data attached to notification
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Notification Manager</CardTitle>
          <CardDescription>Complete notification system with permission handling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class NotificationManager {
  constructor() {
    this.supported = 'Notification' in window;
    this.notifications = new Map();
  }
  
  // Check if notifications are supported
  isSupported() {
    return this.supported;
  }
  
  // Get current permission status
  getPermission() {
    if (!this.supported) return 'unsupported';
    return Notification.permission;
  }
  
  // Request notification permission
  async requestPermission() {
    if (!this.supported) {
      throw new Error('Notifications not supported');
    }
    
    if (Notification.permission === 'granted') {
      return 'granted';
    }
    
    if (Notification.permission === 'denied') {
      return 'denied';
    }
    
    // Request permission
    const permission = await Notification.requestPermission();
    return permission;
  }
  
  // Show a notification
  async show(title, options = {}) {
    // Ensure we have permission
    if (Notification.permission !== 'granted') {
      const permission = await this.requestPermission();
      if (permission !== 'granted') {
        throw new Error('Permission not granted');
      }
    }
    
    // Create notification
    const notification = new Notification(title, {
      icon: '/icon.png',
      ...options
    });
    
    // Store reference
    const id = options.tag || Date.now().toString();
    this.notifications.set(id, notification);
    
    // Setup event handlers
    notification.onclick = (e) => {
      console.log('Notification clicked:', id);
      if (options.onClick) {
        options.onClick(e);
      }
      window.focus();
      notification.close();
    };
    
    notification.onclose = () => {
      this.notifications.delete(id);
      if (options.onClose) {
        options.onClose();
      }
    };
    
    // Auto-close after duration
    if (options.duration) {
      setTimeout(() => {
        notification.close();
      }, options.duration);
    }
    
    return {
      id,
      notification,
      close: () => notification.close()
    };
  }
  
  // Show success notification
  success(message, options = {}) {
    return this.show('✅ Success', {
      body: message,
      icon: '/success-icon.png',
      tag: 'success',
      ...options
    });
  }
  
  // Show error notification
  error(message, options = {}) {
    return this.show('❌ Error', {
      body: message,
      icon: '/error-icon.png',
      tag: 'error',
      requireInteraction: true,
      ...options
    });
  }
  
  // Show info notification
  info(message, options = {}) {
    return this.show('ℹ️ Info', {
      body: message,
      icon: '/info-icon.png',
      tag: 'info',
      ...options
    });
  }
  
  // Close specific notification
  close(id) {
    const notification = this.notifications.get(id);
    if (notification) {
      notification.close();
    }
  }
  
  // Close all notifications
  closeAll() {
    this.notifications.forEach(notification => {
      notification.close();
    });
    this.notifications.clear();
  }
}

// Usage
const notifier = new NotificationManager();

// Check support
if (notifier.isSupported()) {
  console.log('Notifications are supported!');
}

// Request permission on user action
document.getElementById('enableBtn').addEventListener('click', async () => {
  try {
    const permission = await notifier.requestPermission();
    console.log('Permission:', permission);
  } catch (error) {
    console.error('Error:', error);
  }
});

// Show notifications
notifier.success('Data saved successfully!', {
  duration: 3000
});

notifier.error('Failed to connect to server', {
  onClick: () => {
    console.log('User clicked error notification');
    window.location.href = '/settings';
  }
});

notifier.info('New update available', {
  onClick: () => {
    console.log('Checking for updates...');
  },
  duration: 5000
});

// Close all notifications
window.addEventListener('beforeunload', () => {
  notifier.closeAll();
});`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
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
                <li>• Request permission on user action</li>
                <li>• Provide clear, concise notification text</li>
                <li>• Use appropriate icons and images</li>
                <li>• Handle click events to focus your app</li>
                <li>• Close notifications when no longer relevant</li>
                <li>• Use tags to prevent duplicate notifications</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Don't spam users with too many notifications</li>
                <li>• Don't request permission on page load</li>
                <li>• Don't show notifications for trivial updates</li>
                <li>• Don't use vague notification text</li>
                <li>• Don't forget to handle permission denial</li>
                <li>• Don't use notifications for critical messages</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Security & HTTPS</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Notification API requires <strong>HTTPS</strong> (except localhost). Users can revoke permissions at any time through 
              browser settings. Always respect user preferences and don't abuse notifications.
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
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Permission Required</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Users must explicitly grant permission
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">System-level</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Appears in OS notification center
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rich Content</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Supports icons, images, and actions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Event Handling</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Respond to clicks and closes
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
