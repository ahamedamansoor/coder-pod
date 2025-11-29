import { Chrome } from 'lucide-react';

export const chromeCheatsheet = {
  id: 'chrome',
  name: 'Chrome DevTools',
  description: 'Chrome browser & DevTools commands',
  icon: Chrome,
  colorTheme: 'blue' as const,
  sections: [
    {
      title: 'Opening DevTools',
      commands: [
        {
          command: 'Open DevTools',
          description: 'Open developer tools',
          usage: 'Cmd+Option+I (Mac) / Ctrl+Shift+I (Win)',
          example: 'Cmd+Option+I  # Mac\nCtrl+Shift+I  # Windows/Linux\nF12           # All platforms',
        },
        {
          command: 'Open Elements',
          description: 'Open Elements panel',
          usage: 'Cmd+Option+C (Mac) / Ctrl+Shift+C (Win)',
          example: 'Cmd+Option+C  # Mac\nCtrl+Shift+C  # Windows\n\n# Inspect element mode',
        },
        {
          command: 'Open Console',
          description: 'Open Console panel',
          usage: 'Cmd+Option+J (Mac) / Ctrl+Shift+J (Win)',
          example: 'Cmd+Option+J  # Mac\nCtrl+Shift+J  # Windows',
        },
        {
          command: 'Toggle Device Mode',
          description: 'Mobile device emulation',
          usage: 'Cmd+Shift+M (Mac) / Ctrl+Shift+M (Win)',
          example: 'Cmd+Shift+M  # Mac\nCtrl+Shift+M  # Windows\n\n# Test responsive designs',
        },
      ],
    },
    {
      title: 'Console Commands',
      commands: [
        {
          command: 'console.log()',
          description: 'Print to console',
          usage: 'console.log(message)',
          example: 'console.log("Hello World");\nconsole.log("User:", user);\nconsole.log("Value:", 42);',
        },
        {
          command: 'console.table()',
          description: 'Display data as table',
          usage: 'console.table(data)',
          example: 'const users = [{name: "John", age: 30}, {name: "Jane", age: 25}];\nconsole.table(users);',
        },
        {
          command: 'console.error()',
          description: 'Print error message',
          usage: 'console.error(message)',
          example: 'console.error("Something went wrong!");\nconsole.error("Failed:", error);',
        },
        {
          command: 'console.warn()',
          description: 'Print warning',
          usage: 'console.warn(message)',
          example: 'console.warn("Deprecated function used");\nconsole.warn("Low memory");',
        },
        {
          command: 'console.time() / timeEnd()',
          description: 'Measure execution time',
          usage: 'console.time(label) / console.timeEnd(label)',
          example: 'console.time("API Call");\nawait fetch("/api/data");\nconsole.timeEnd("API Call");\n// API Call: 234.56ms',
        },
        {
          command: 'console.group()',
          description: 'Group console messages',
          usage: 'console.group(label) / console.groupEnd()',
          example: 'console.group("User Details");\nconsole.log("Name:", user.name);\nconsole.log("Email:", user.email);\nconsole.groupEnd();',
        },
        {
          command: 'console.count()',
          description: 'Count function calls',
          usage: 'console.count(label)',
          example: 'function myFunction() {\n  console.count("Calls");\n}\nmyFunction(); // Calls: 1\nmyFunction(); // Calls: 2',
        },
        {
          command: 'console.trace()',
          description: 'Print stack trace',
          usage: 'console.trace()',
          example: 'function foo() {\n  console.trace("Stack trace");\n}\nfoo();\n// Shows call stack',
        },
        {
          command: 'console.clear()',
          description: 'Clear console',
          usage: 'console.clear()',
          example: 'console.clear();\n// Clears all console messages',
        },
      ],
    },
    {
      title: 'Console Shortcuts',
      commands: [
        {
          command: '$0',
          description: 'Currently selected element',
          usage: '$0',
          example: '// In Elements panel, select an element\n$0  // Returns selected element\n$0.style.background = "red";',
        },
        {
          command: '$() / $$()',
          description: 'Query selector shortcuts',
          usage: '$(selector) / $$(selector)',
          example: '$("div.main")  // document.querySelector()\n$$("div.item")  // document.querySelectorAll()\n\n$$("a").forEach(a => console.log(a.href));',
        },
        {
          command: '$x()',
          description: 'XPath selector',
          usage: '$x(xpath)',
          example: '$x("//div[@class=\'main\']")\n// Returns array of matching elements',
        },
        {
          command: 'copy()',
          description: 'Copy to clipboard',
          usage: 'copy(value)',
          example: 'copy(location.href)\ncopy(JSON.stringify(data, null, 2))\ncopy($$("a").map(a => a.href))',
        },
        {
          command: 'keys() / values()',
          description: 'Object keys/values',
          usage: 'keys(object) / values(object)',
          example: 'const obj = {name: "John", age: 30};\nkeys(obj)    // ["name", "age"]\nvalues(obj)  // ["John", 30]',
        },
        {
          command: 'getEventListeners()',
          description: 'Get element event listeners',
          usage: 'getEventListeners(element)',
          example: 'getEventListeners($0)\ngetEventListeners(document.body)\n// Shows all event listeners',
        },
        {
          command: 'monitor() / unmonitor()',
          description: 'Monitor function calls',
          usage: 'monitor(function)',
          example: 'function myFunc() { return "test"; }\nmonitor(myFunc);\nmyFunc();  // Logs function call\nunmonitor(myFunc);',
        },
      ],
    },
    {
      title: 'Elements Panel',
      commands: [
        {
          command: 'Edit HTML',
          description: 'Edit element HTML',
          usage: 'Right-click > Edit as HTML',
          example: '// Or double-click element tag\n// F2 key to edit\n// Cmd+Z to undo',
        },
        {
          command: 'Edit Attributes',
          description: 'Modify element attributes',
          usage: 'Double-click attribute',
          example: '// Click attribute to edit\n// Tab to move to next attribute\n// Enter to apply changes',
        },
        {
          command: 'Add Style Rule',
          description: 'Add CSS rule',
          usage: 'Click + in Styles panel',
          example: '// Adds new CSS rule for selected element\n// Type selector and properties',
        },
        {
          command: 'Toggle Class',
          description: 'Add/remove CSS classes',
          usage: 'Click .cls in Styles panel',
          example: '// Toggle existing classes\n// Add new classes\n// Press Enter to apply',
        },
        {
          command: 'Force State',
          description: 'Force pseudo-class',
          usage: 'Click :hov in Styles panel',
          example: '// Force :hover, :active, :focus states\n// Useful for debugging hover effects',
        },
        {
          command: 'Show Computed',
          description: 'View computed styles',
          usage: 'Computed tab in Styles',
          example: '// Shows final computed CSS values\n// Box model visualization\n// All applied styles',
        },
        {
          command: 'Break on',
          description: 'DOM breakpoints',
          usage: 'Right-click element > Break on',
          example: '// Subtree modifications\n// Attribute modifications\n// Node removal',
        },
      ],
    },
    {
      title: 'Network Panel',
      commands: [
        {
          command: 'Record Network',
          description: 'Start/stop recording',
          usage: 'Click record button or Cmd+E',
          example: 'Cmd+E  # Mac\nCtrl+E  # Windows\n\n# Toggle network recording',
        },
        {
          command: 'Preserve Log',
          description: 'Keep logs on navigation',
          usage: 'Check "Preserve log"',
          example: '// Keeps network logs across page loads\n// Useful for debugging redirects',
        },
        {
          command: 'Disable Cache',
          description: 'Ignore browser cache',
          usage: 'Check "Disable cache"',
          example: '// Forces fresh requests\n// Always fetches from server\n// Only works while DevTools open',
        },
        {
          command: 'Filter Requests',
          description: 'Filter by type',
          usage: 'Click filter buttons',
          example: '// XHR: AJAX requests\n// JS: JavaScript files\n// CSS: Stylesheets\n// Img: Images\n// Media: Videos/Audio',
        },
        {
          command: 'Throttling',
          description: 'Simulate slow network',
          usage: 'Network throttling dropdown',
          example: '// Fast 3G\n// Slow 3G\n// Offline\n// Custom profiles',
        },
        {
          command: 'Copy Request',
          description: 'Copy as cURL/fetch',
          usage: 'Right-click request > Copy',
          example: '// Copy as cURL\n// Copy as Fetch\n// Copy as PowerShell\n// Copy request headers',
        },
        {
          command: 'Replay Request',
          description: 'Resend XHR',
          usage: 'Right-click XHR > Replay XHR',
          example: '// Resends the same request\n// Useful for testing APIs',
        },
      ],
    },
    {
      title: 'Sources Panel',
      commands: [
        {
          command: 'Set Breakpoint',
          description: 'Add breakpoint',
          usage: 'Click line number',
          example: '// Click line number to add breakpoint\n// Cmd+B to toggle breakpoint\n// Conditional breakpoints: right-click',
        },
        {
          command: 'debugger',
          description: 'Programmatic breakpoint',
          usage: 'debugger;',
          example: 'function myFunction() {\n  debugger;  // Pauses execution here\n  console.log("After debugger");\n}',
        },
        {
          command: 'Step Over',
          description: 'Next line',
          usage: 'F10 or click button',
          example: 'F10  # Step to next line\n// Doesn\'t enter function calls',
        },
        {
          command: 'Step Into',
          description: 'Enter function',
          usage: 'F11 or click button',
          example: 'F11  # Step into function\n// Enters function calls',
        },
        {
          command: 'Step Out',
          description: 'Exit function',
          usage: 'Shift+F11',
          example: 'Shift+F11  # Exit current function\n// Returns to caller',
        },
        {
          command: 'Continue',
          description: 'Resume execution',
          usage: 'F8 or click button',
          example: 'F8  # Continue to next breakpoint\n// Or end of script',
        },
        {
          command: 'Watch Expressions',
          description: 'Monitor variables',
          usage: 'Add in Watch panel',
          example: '// Add expressions to watch\n// Updates on each step\n// Example: user.name, count + 1',
        },
        {
          command: 'Call Stack',
          description: 'View call stack',
          usage: 'Call Stack panel',
          example: '// Shows function call hierarchy\n// Click to jump to function\n// Useful for tracing execution',
        },
      ],
    },
    {
      title: 'Performance Panel',
      commands: [
        {
          command: 'Record Performance',
          description: 'Profile page performance',
          usage: 'Click record button',
          example: '// 1. Click record\n// 2. Interact with page\n// 3. Stop recording\n// 4. Analyze timeline',
        },
        {
          command: 'Reload & Record',
          description: 'Profile page load',
          usage: 'Cmd+Shift+E (Mac) / Ctrl+Shift+E (Win)',
          example: 'Cmd+Shift+E  # Mac\nCtrl+Shift+E  # Windows\n\n# Records full page load',
        },
        {
          command: 'Screenshots',
          description: 'Capture screenshots',
          usage: 'Enable in settings',
          example: '// Settings > Capture screenshots\n// Shows visual timeline\n// Useful for visual debugging',
        },
        {
          command: 'FPS Meter',
          description: 'Show frame rate',
          usage: 'Cmd+Shift+P > Show frames',
          example: '// Command menu: "Show frames per second"\n// Displays real-time FPS',
        },
      ],
    },
    {
      title: 'Memory Panel',
      commands: [
        {
          command: 'Heap Snapshot',
          description: 'Capture memory snapshot',
          usage: 'Take snapshot button',
          example: '// 1. Take snapshot\n// 2. Perform actions\n// 3. Take another snapshot\n// 4. Compare for leaks',
        },
        {
          command: 'Allocation Timeline',
          description: 'Track memory allocations',
          usage: 'Start recording allocations',
          example: '// Records memory allocations over time\n// Shows what\'s allocating memory',
        },
        {
          command: 'Garbage Collection',
          description: 'Force garbage collection',
          usage: 'Click trash icon',
          example: '// Forces garbage collection\n// Cleans up unused memory\n// Useful before taking snapshots',
        },
      ],
    },
    {
      title: 'Application Panel',
      commands: [
        {
          command: 'Local Storage',
          description: 'View/edit localStorage',
          usage: 'Application > Local Storage',
          example: '// View all localStorage items\n// Double-click to edit\n// Right-click to delete',
        },
        {
          command: 'Session Storage',
          description: 'View/edit sessionStorage',
          usage: 'Application > Session Storage',
          example: '// View session storage\n// Persists until tab closed',
        },
        {
          command: 'Cookies',
          description: 'Manage cookies',
          usage: 'Application > Cookies',
          example: '// View all cookies\n// Edit cookie values\n// Delete individual cookies\n// Clear all cookies',
        },
        {
          command: 'IndexedDB',
          description: 'View IndexedDB',
          usage: 'Application > IndexedDB',
          example: '// Browse database stores\n// View object stores\n// Query data',
        },
        {
          command: 'Cache Storage',
          description: 'View cached resources',
          usage: 'Application > Cache Storage',
          example: '// View service worker caches\n// Delete cache entries\n// Clear all caches',
        },
        {
          command: 'Service Workers',
          description: 'Manage service workers',
          usage: 'Application > Service Workers',
          example: '// View registered workers\n// Update worker\n// Unregister worker\n// Test offline mode',
        },
      ],
    },
    {
      title: 'Lighthouse',
      commands: [
        {
          command: 'Run Lighthouse',
          description: 'Audit page quality',
          usage: 'Lighthouse tab > Generate report',
          example: '// Audits:\n// - Performance\n// - Accessibility\n// - Best Practices\n// - SEO\n// - PWA',
        },
        {
          command: 'Performance Score',
          description: 'Measure load speed',
          usage: 'Focus on Performance category',
          example: '// Scores 0-100\n// First Contentful Paint\n// Largest Contentful Paint\n// Total Blocking Time',
        },
        {
          command: 'Accessibility',
          description: 'Check accessibility',
          usage: 'Focus on Accessibility category',
          example: '// ARIA attributes\n// Color contrast\n// Screen reader support\n// Keyboard navigation',
        },
      ],
    },
    {
      title: 'Chrome URLs',
      commands: [
        {
          command: 'chrome://flags',
          description: 'Experimental features',
          usage: 'chrome://flags',
          example: 'chrome://flags\n// Enable/disable experimental features\n// Warning: may be unstable',
        },
        {
          command: 'chrome://extensions',
          description: 'Manage extensions',
          usage: 'chrome://extensions',
          example: 'chrome://extensions\n// Enable/disable extensions\n// View extension details',
        },
        {
          command: 'chrome://settings',
          description: 'Browser settings',
          usage: 'chrome://settings',
          example: 'chrome://settings\n// All Chrome settings',
        },
        {
          command: 'chrome://downloads',
          description: 'Download history',
          usage: 'chrome://downloads',
          example: 'chrome://downloads\n// View all downloads',
        },
        {
          command: 'chrome://history',
          description: 'Browsing history',
          usage: 'chrome://history',
          example: 'chrome://history\n// View browsing history',
        },
        {
          command: 'chrome://version',
          description: 'Chrome version info',
          usage: 'chrome://version',
          example: 'chrome://version\n// Shows Chrome version and build info',
        },
        {
          command: 'chrome://inspect',
          description: 'Inspect devices',
          usage: 'chrome://inspect',
          example: 'chrome://inspect\n// Debug remote devices\n// Inspect service workers',
        },
      ],
    },
    {
      title: 'Keyboard Shortcuts',
      commands: [
        {
          command: 'Search Files',
          description: 'Open file search',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win)',
          example: 'Cmd+P  # Mac\nCtrl+P  # Windows\n\n# Quick file navigation',
        },
        {
          command: 'Command Menu',
          description: 'Open command palette',
          usage: 'Cmd+Shift+P (Mac) / Ctrl+Shift+P (Win)',
          example: 'Cmd+Shift+P  # Mac\nCtrl+Shift+P  # Windows\n\n# Access all commands',
        },
        {
          command: 'Toggle Panel',
          description: 'Show/hide bottom panel',
          usage: 'Esc',
          example: 'Esc  # Toggle console panel\n// Shows console at bottom',
        },
        {
          command: 'Next/Previous Panel',
          description: 'Switch between panels',
          usage: 'Cmd+] / Cmd+[ (Mac)',
          example: 'Cmd+]  # Next panel (Mac)\nCmd+[  # Previous panel (Mac)\n\nCtrl+]  # Next (Windows)\nCtrl+[  # Previous (Windows)',
        },
        {
          command: 'Find in Files',
          description: 'Search across files',
          usage: 'Cmd+Option+F (Mac) / Ctrl+Shift+F (Win)',
          example: 'Cmd+Option+F  # Mac\nCtrl+Shift+F  # Windows\n\n# Search all source files',
        },
        {
          command: 'Hard Refresh',
          description: 'Bypass cache',
          usage: 'Cmd+Shift+R (Mac) / Ctrl+Shift+R (Win)',
          example: 'Cmd+Shift+R  # Mac\nCtrl+Shift+R  # Windows\n\n# Force reload without cache',
        },
      ],
    },
    {
      title: 'Device Emulation',
      commands: [
        {
          command: 'Responsive Mode',
          description: 'Test responsive design',
          usage: 'Cmd+Shift+M (Mac) / Ctrl+Shift+M (Win)',
          example: 'Cmd+Shift+M  # Mac\nCtrl+Shift+M  # Windows\n\n// Drag to resize\n// Rotate device\n// Custom dimensions',
        },
        {
          command: 'Device Presets',
          description: 'Emulate specific devices',
          usage: 'Select from device dropdown',
          example: '// iPhone 14 Pro\n// iPad Air\n// Galaxy S20\n// Pixel 7\n// Custom devices',
        },
        {
          command: 'Throttling',
          description: 'Simulate network conditions',
          usage: 'Throttling dropdown',
          example: '// No throttling\n// Fast 3G\n// Slow 3G\n// Offline',
        },
        {
          command: 'User Agent',
          description: 'Override user agent',
          usage: 'More options > Add custom device',
          example: '// iOS Safari\n// Android Chrome\n// Desktop browsers\n// Custom user agent',
        },
      ],
    },
    {
      title: 'Rendering Options',
      commands: [
        {
          command: 'Show Paint Flashing',
          description: 'Highlight repaints',
          usage: 'More tools > Rendering > Paint flashing',
          example: '// Green flashes show repainted areas\n// Useful for optimizing performance',
        },
        {
          command: 'Show Layout Shifts',
          description: 'Visualize layout shifts',
          usage: 'Rendering > Layout Shift Regions',
          example: '// Blue highlights show layout shifts\n// Helps fix CLS issues',
        },
        {
          command: 'Emulate CSS Media',
          description: 'Force media queries',
          usage: 'Rendering > Emulate CSS media',
          example: '// prefers-color-scheme: dark\n// prefers-reduced-motion\n// print media type',
        },
        {
          command: 'Disable JavaScript',
          description: 'Test without JS',
          usage: 'Cmd+Shift+P > Disable JavaScript',
          example: '// Command menu: "Disable JavaScript"\n// Test progressive enhancement',
        },
      ],
    },
    {
      title: 'Coverage Tool',
      commands: [
        {
          command: 'Code Coverage',
          description: 'Find unused code',
          usage: 'More tools > Coverage',
          example: '// 1. Open Coverage\n// 2. Click record\n// 3. Interact with page\n// 4. View unused CSS/JS\n// Red = unused, Green = used',
        },
        {
          command: 'Analyze Coverage',
          description: 'Optimize bundle size',
          usage: 'Review coverage report',
          example: '// Shows percentage used\n// Click to see unused lines\n// Helps reduce bundle size',
        },
      ],
    },
    {
      title: 'Animations Inspector',
      commands: [
        {
          command: 'Inspect Animations',
          description: 'Debug CSS animations',
          usage: 'More tools > Animations',
          example: '// 1. Open Animations panel\n// 2. Trigger animation\n// 3. View timeline\n// 4. Adjust timing',
        },
        {
          command: 'Replay Animation',
          description: 'Replay at slow speed',
          usage: 'Use playback speed slider',
          example: '// 100% = normal speed\n// 50% = half speed\n// 25% = quarter speed\n// 10% = very slow',
        },
      ],
    },
    {
      title: 'Security Panel',
      commands: [
        {
          command: 'Certificate Info',
          description: 'View SSL certificate',
          usage: 'Security panel',
          example: '// View certificate details\n// Check expiration\n// Verify issuer',
        },
        {
          command: 'Mixed Content',
          description: 'Find insecure resources',
          usage: 'Security > View mixed content',
          example: '// Shows HTTP resources on HTTPS page\n// Security warnings\n// Upgrade to HTTPS',
        },
      ],
    },
    {
      title: 'Snippets',
      commands: [
        {
          command: 'Create Snippet',
          description: 'Save reusable code',
          usage: 'Sources > Snippets > New snippet',
          example: '// Save frequently used code\n// Run with Cmd+Enter\n// Example: Clear all localStorage\nlocalStorage.clear();\nsessionStorage.clear();',
        },
        {
          command: 'Run Snippet',
          description: 'Execute saved snippet',
          usage: 'Right-click > Run or Cmd+Enter',
          example: 'Cmd+Enter  # Run current snippet\n// Runs in page context',
        },
      ],
    },
    {
      title: 'Tips & Tricks',
      commands: [
        {
          command: 'Live Expressions',
          description: 'Pin expressions',
          usage: 'Console > Eye icon',
          example: '// Create live expression\n// Updates in real-time\n// Example: document.activeElement',
        },
        {
          command: 'Store as Global',
          description: 'Save console output',
          usage: 'Right-click result > Store as global',
          example: '// Stores as temp1, temp2, etc.\n// Reuse complex objects\n// Access in console',
        },
        {
          command: 'Multi-cursor Edit',
          description: 'Edit multiple lines',
          usage: 'Cmd+D (Mac) / Ctrl+D (Win)',
          example: 'Cmd+D  # Select next occurrence\n// Edit multiple at once\n// Like VS Code',
        },
        {
          command: 'Pretty Print',
          description: 'Format minified code',
          usage: 'Click {} button',
          example: '// Formats minified JS/CSS\n// Makes code readable\n// Bottom left of Sources',
        },
      ],
    },
  ],
};
