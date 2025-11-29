import { Chrome } from 'lucide-react';

export const edgeCheatsheet = {
  id: 'edge',
  name: 'Edge DevTools',
  description: 'Microsoft Edge developer tools',
  icon: Chrome,
  colorTheme: 'cyan' as const,
  sections: [
    {
      title: 'Opening DevTools',
      commands: [
        {
          command: 'Open DevTools',
          description: 'Open developer tools',
          usage: 'F12 or Ctrl+Shift+I',
          example: 'F12  # All platforms\nCtrl+Shift+I  # Windows/Linux\nCmd+Option+I  # Mac',
        },
        {
          command: 'Open Elements',
          description: 'Open Elements panel',
          usage: 'Ctrl+Shift+C (Win) / Cmd+Option+C (Mac)',
          example: 'Ctrl+Shift+C  # Windows\nCmd+Option+C  # Mac\n\n# Inspect element mode',
        },
        {
          command: 'Open Console',
          description: 'Open Console panel',
          usage: 'Ctrl+Shift+J (Win) / Cmd+Option+J (Mac)',
          example: 'Ctrl+Shift+J  # Windows\nCmd+Option+J  # Mac',
        },
        {
          command: 'Device Emulation',
          description: 'Toggle device toolbar',
          usage: 'Ctrl+Shift+M (Win) / Cmd+Shift+M (Mac)',
          example: 'Ctrl+Shift+M  # Windows\nCmd+Shift+M  # Mac\n\n# Mobile emulation',
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
          example: 'console.log("Hello Edge");\nconsole.log("User:", user);\nconsole.log({name, age, email});',
        },
        {
          command: 'console.table()',
          description: 'Display data as table',
          usage: 'console.table(data)',
          example: 'const users = [{name: "John", age: 30}, {name: "Jane", age: 25}];\nconsole.table(users);',
        },
        {
          command: 'console.error() / warn()',
          description: 'Print error/warning',
          usage: 'console.error(message)',
          example: 'console.error("Error!");\nconsole.warn("Warning!");',
        },
        {
          command: 'console.time() / timeEnd()',
          description: 'Measure execution time',
          usage: 'console.time(label)',
          example: 'console.time("API");\nawait fetch("/api");\nconsole.timeEnd("API");\n// API: 234ms',
        },
        {
          command: 'console.group()',
          description: 'Group console messages',
          usage: 'console.group(label)',
          example: 'console.group("User");\nconsole.log("Name:", user.name);\nconsole.groupEnd();',
        },
        {
          command: 'console.count()',
          description: 'Count function calls',
          usage: 'console.count(label)',
          example: 'console.count("clicks");\n// clicks: 1, 2, 3...',
        },
        {
          command: 'console.trace()',
          description: 'Print stack trace',
          usage: 'console.trace()',
          example: 'console.trace();\n// Shows call stack',
        },
        {
          command: 'console.assert()',
          description: 'Conditional logging',
          usage: 'console.assert(condition, message)',
          example: 'console.assert(x > 0, "x must be positive");',
        },
      ],
    },
    {
      title: 'Console Utilities',
      commands: [
        {
          command: '$0 - $4',
          description: 'Recently selected elements',
          usage: '$0, $1, $2, $3, $4',
          example: '$0  // Most recent\n$1  // Second most recent\n// Up to 5 elements',
        },
        {
          command: '$() / $$()',
          description: 'Query selectors',
          usage: '$(selector) / $$(selector)',
          example: '$("div.main")  // querySelector\n$$("div.item")  // querySelectorAll',
        },
        {
          command: '$x()',
          description: 'XPath query',
          usage: '$x(xpath)',
          example: '$x("//div[@class=\'main\']")',
        },
        {
          command: 'copy()',
          description: 'Copy to clipboard',
          usage: 'copy(value)',
          example: 'copy(location.href)\ncopy(JSON.stringify(data, null, 2))',
        },
        {
          command: 'keys() / values()',
          description: 'Object keys/values',
          usage: 'keys(obj) / values(obj)',
          example: 'keys({a: 1, b: 2})  // ["a", "b"]\nvalues({a: 1, b: 2})  // [1, 2]',
        },
        {
          command: 'getEventListeners()',
          description: 'Get element listeners',
          usage: 'getEventListeners(element)',
          example: 'getEventListeners($0)\ngetEventListeners(document)',
        },
        {
          command: 'monitor() / unmonitor()',
          description: 'Monitor function calls',
          usage: 'monitor(function)',
          example: 'monitor(myFunction);\nmyFunction();  // Logs call\nunmonitor(myFunction);',
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
          example: '// Or F2\n// Edit directly\n// Esc to cancel',
        },
        {
          command: 'Edit Attributes',
          description: 'Modify attributes',
          usage: 'Double-click attribute',
          example: '// Click to edit\n// Tab to next\n// Enter to apply',
        },
        {
          command: 'Add CSS Rule',
          description: 'Add new CSS rule',
          usage: 'Click + in Styles',
          example: '// New CSS rule\n// Auto-completion\n// Live preview',
        },
        {
          command: 'Toggle Class',
          description: 'Add/remove classes',
          usage: 'Click .cls in Styles',
          example: '// Toggle classes\n// Add new classes\n// Instant feedback',
        },
        {
          command: 'Force Element State',
          description: 'Force pseudo-classes',
          usage: 'Click :hov in Styles',
          example: '// :hover\n// :active\n// :focus\n// :visited\n// :focus-within',
        },
        {
          command: 'Computed Styles',
          description: 'View computed CSS',
          usage: 'Computed tab',
          example: '// Final CSS values\n// Box model\n// All properties',
        },
        {
          command: 'Changes Panel',
          description: 'Track CSS changes',
          usage: 'Changes tool',
          example: '// Shows all CSS edits\n// Copy changes\n// Export to file',
        },
      ],
    },
    {
      title: 'Network Panel',
      commands: [
        {
          command: 'Record Network',
          description: 'Start/stop recording',
          usage: 'Ctrl+E',
          example: 'Ctrl+E  # Toggle recording\n// Red = recording',
        },
        {
          command: 'Preserve Log',
          description: 'Keep logs on navigation',
          usage: 'Check "Preserve log"',
          example: '// Keeps logs across reloads\n// Debug redirects',
        },
        {
          command: 'Disable Cache',
          description: 'Bypass cache',
          usage: 'Check "Disable cache"',
          example: '// Fresh requests\n// While DevTools open',
        },
        {
          command: 'Throttling',
          description: 'Simulate network speed',
          usage: 'Throttling dropdown',
          example: '// Fast 3G\n// Slow 3G\n// Offline\n// Custom',
        },
        {
          command: 'Filter Requests',
          description: 'Filter by type',
          usage: 'Click filter buttons',
          example: '// All, XHR, JS, CSS\n// Img, Media, Font\n// Doc, WS, Manifest',
        },
        {
          command: 'Copy as cURL/Fetch',
          description: 'Export request',
          usage: 'Right-click > Copy',
          example: '// Copy as cURL\n// Copy as Fetch\n// Copy as PowerShell',
        },
        {
          command: 'Replay XHR',
          description: 'Resend request',
          usage: 'Right-click > Replay',
          example: '// Resends XHR\n// Same parameters\n// Test APIs',
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
          example: '// Click line number\n// Ctrl+B toggle\n// Conditional: right-click',
        },
        {
          command: 'debugger',
          description: 'Programmatic breakpoint',
          usage: 'debugger;',
          example: 'function test() {\n  debugger;\n  console.log("paused");\n}',
        },
        {
          command: 'Step Over',
          description: 'Next line',
          usage: 'F10',
          example: 'F10  # Step over\n// Doesn\'t enter functions',
        },
        {
          command: 'Step Into',
          description: 'Enter function',
          usage: 'F11',
          example: 'F11  # Step into\n// Enters function calls',
        },
        {
          command: 'Step Out',
          description: 'Exit function',
          usage: 'Shift+F11',
          example: 'Shift+F11  # Step out\n// Return to caller',
        },
        {
          command: 'Continue',
          description: 'Resume execution',
          usage: 'F8',
          example: 'F8  # Continue\n// Next breakpoint',
        },
        {
          command: 'Watch Expressions',
          description: 'Monitor variables',
          usage: 'Watch panel',
          example: '// Add expressions\n// user.name\n// Updates live',
        },
        {
          command: 'Call Stack',
          description: 'View call stack',
          usage: 'Call Stack panel',
          example: '// Function hierarchy\n// Click to navigate\n// Async stacks',
        },
      ],
    },
    {
      title: 'Performance',
      commands: [
        {
          command: 'Record Performance',
          description: 'Profile performance',
          usage: 'Click record button',
          example: '// Start recording\n// Interact with page\n// Stop and analyze',
        },
        {
          command: 'Reload & Record',
          description: 'Profile page load',
          usage: 'Ctrl+Shift+E',
          example: 'Ctrl+Shift+E\n// Records full page load',
        },
        {
          command: 'Screenshots',
          description: 'Timeline screenshots',
          usage: 'Enable in settings',
          example: '// Visual timeline\n// Frame-by-frame\n// Performance insights',
        },
        {
          command: 'Core Web Vitals',
          description: 'View Web Vitals',
          usage: 'Performance panel',
          example: '// LCP (Largest Contentful Paint)\n// FID (First Input Delay)\n// CLS (Cumulative Layout Shift)',
        },
      ],
    },
    {
      title: 'Memory',
      commands: [
        {
          command: 'Heap Snapshot',
          description: 'Capture memory snapshot',
          usage: 'Take heap snapshot',
          example: '// Capture snapshot\n// Compare snapshots\n// Find memory leaks',
        },
        {
          command: 'Allocation Timeline',
          description: 'Track allocations',
          usage: 'Start recording',
          example: '// Records allocations\n// Over time\n// Memory growth',
        },
        {
          command: 'Garbage Collection',
          description: 'Force GC',
          usage: 'Click trash icon',
          example: '// Forces garbage collection\n// Clean memory\n// Before snapshots',
        },
      ],
    },
    {
      title: 'Application Panel',
      commands: [
        {
          command: 'Local Storage',
          description: 'View localStorage',
          usage: 'Application > Local Storage',
          example: '// View items\n// Edit values\n// Delete entries',
        },
        {
          command: 'Session Storage',
          description: 'View sessionStorage',
          usage: 'Application > Session Storage',
          example: '// Session data\n// Tab-specific\n// Cleared on close',
        },
        {
          command: 'Cookies',
          description: 'Manage cookies',
          usage: 'Application > Cookies',
          example: '// View cookies\n// Edit values\n// Delete cookies\n// Filter by domain',
        },
        {
          command: 'IndexedDB',
          description: 'Browse IndexedDB',
          usage: 'Application > IndexedDB',
          example: '// View databases\n// Object stores\n// Query data',
        },
        {
          command: 'Cache Storage',
          description: 'View caches',
          usage: 'Application > Cache Storage',
          example: '// Service Worker caches\n// View cached files\n// Delete entries',
        },
        {
          command: 'Service Workers',
          description: 'Manage service workers',
          usage: 'Application > Service Workers',
          example: '// View registered workers\n// Update\n// Unregister\n// Offline mode',
        },
      ],
    },
    {
      title: 'Edge-Specific Features',
      commands: [
        {
          command: '3D View',
          description: 'Visualize page layers',
          usage: 'More tools > 3D View',
          example: '// 3D page visualization\n// Z-index layers\n// DOM depth\n// Composited layers',
        },
        {
          command: 'Issues Tool',
          description: 'Find page issues',
          usage: 'Issues panel',
          example: '// Accessibility issues\n// Security warnings\n// Best practices\n// Auto-detected problems',
        },
        {
          command: 'Network Console',
          description: 'Network log in console',
          usage: 'Console > Network messages',
          example: '// Shows network requests\n// In console\n// Unified view',
        },
        {
          command: 'Source Maps Monitor',
          description: 'Track source maps',
          usage: 'Sources > Source Maps',
          example: '// Monitor source map loading\n// Debug map issues\n// Performance impact',
        },
        {
          command: 'CSS Overview',
          description: 'Analyze CSS usage',
          usage: 'More tools > CSS Overview',
          example: '// Capture overview\n// Colors used\n// Font info\n// Media queries\n// Unused CSS',
        },
        {
          command: 'Detached Elements',
          description: 'Find memory leaks',
          usage: 'Memory > Detached elements',
          example: '// Shows detached DOM nodes\n// Memory leaks\n// Retained objects',
        },
      ],
    },
    {
      title: 'edge:// URLs',
      commands: [
        {
          command: 'edge://flags',
          description: 'Experimental features',
          usage: 'edge://flags',
          example: 'edge://flags\n// Enable/disable experiments\n// Warning: unstable',
        },
        {
          command: 'edge://extensions',
          description: 'Manage extensions',
          usage: 'edge://extensions',
          example: 'edge://extensions\n// View extensions\n// Enable/disable\n// Developer mode',
        },
        {
          command: 'edge://settings',
          description: 'Browser settings',
          usage: 'edge://settings',
          example: 'edge://settings\n// All settings',
        },
        {
          command: 'edge://downloads',
          description: 'Download history',
          usage: 'edge://downloads',
          example: 'edge://downloads\n// View downloads',
        },
        {
          command: 'edge://version',
          description: 'Version information',
          usage: 'edge://version',
          example: 'edge://version\n// Edge version\n// Chromium version',
        },
        {
          command: 'edge://inspect',
          description: 'Inspect devices',
          usage: 'edge://inspect',
          example: 'edge://inspect\n// Remote debugging\n// Android devices',
        },
      ],
    },
    {
      title: 'Keyboard Shortcuts',
      commands: [
        {
          command: 'Open File',
          description: 'Quick file search',
          usage: 'Ctrl+P (Win) / Cmd+P (Mac)',
          example: 'Ctrl+P  # Windows\nCmd+P   # Mac\n\n// Search files',
        },
        {
          command: 'Command Menu',
          description: 'Open command palette',
          usage: 'Ctrl+Shift+P (Win) / Cmd+Shift+P (Mac)',
          example: 'Ctrl+Shift+P  # Windows\nCmd+Shift+P   # Mac',
        },
        {
          command: 'Toggle Panel',
          description: 'Show/hide console',
          usage: 'Esc',
          example: 'Esc  # Toggle console drawer\n// Console at bottom',
        },
        {
          command: 'Next/Previous Panel',
          description: 'Switch panels',
          usage: 'Ctrl+] / Ctrl+[',
          example: 'Ctrl+]  # Next panel\nCtrl+[  # Previous panel',
        },
        {
          command: 'Find in Files',
          description: 'Search across files',
          usage: 'Ctrl+Shift+F',
          example: 'Ctrl+Shift+F\n// Search all sources',
        },
        {
          command: 'Hard Refresh',
          description: 'Bypass cache',
          usage: 'Ctrl+Shift+R',
          example: 'Ctrl+Shift+R\n// Force reload',
        },
      ],
    },
    {
      title: 'Device Emulation',
      commands: [
        {
          command: 'Device Presets',
          description: 'Emulate devices',
          usage: 'Device dropdown',
          example: '// iPhone 14 Pro\n// iPad Pro\n// Surface Duo\n// Galaxy S21\n// Custom',
        },
        {
          command: 'Rotate Device',
          description: 'Toggle orientation',
          usage: 'Rotate button',
          example: '// Portrait\n// Landscape\n// Auto-rotate',
        },
        {
          command: 'Show Rulers',
          description: 'Display rulers',
          usage: 'More options > Show rulers',
          example: '// Pixel measurements\n// Viewport dimensions',
        },
        {
          command: 'Capture Screenshot',
          description: 'Take screenshot',
          usage: 'More options > Capture screenshot',
          example: '// Full size\n// Capture node\n// Capture area',
        },
      ],
    },
    {
      title: 'Accessibility',
      commands: [
        {
          command: 'Inspect Accessibility',
          description: 'View a11y properties',
          usage: 'Elements > Accessibility',
          example: '// ARIA attributes\n// Accessible name\n// Role\n// Keyboard support',
        },
        {
          command: 'Emulate Vision',
          description: 'Simulate vision deficiencies',
          usage: 'Rendering > Emulate',
          example: '// No emulation\n// Blurred vision\n// Protanopia\n// Deuteranopia\n// Tritanopia\n// Achromatopsia',
        },
        {
          command: 'Color Contrast',
          description: 'Check contrast ratios',
          usage: 'Color picker',
          example: '// AA/AAA compliance\n// Contrast ratio\n// Suggestions',
        },
      ],
    },
    {
      title: 'Microsoft-Specific Tools',
      commands: [
        {
          command: 'Visual Studio Integration',
          description: 'Debug in VS Code',
          usage: 'Launch Edge from VS Code',
          example: '// Install Edge DevTools extension\n// F5 to launch\n// Integrated debugging',
        },
        {
          command: 'webhint Integration',
          description: 'Best practices hints',
          usage: 'Issues panel',
          example: '// Performance hints\n// Security issues\n// Compatibility warnings\n// Accessibility tips',
        },
        {
          command: 'IE Mode',
          description: 'Test IE compatibility',
          usage: 'Settings > Default browser',
          example: '// Enable IE mode\n// Test legacy apps\n// IE 11 emulation',
        },
      ],
    },
    {
      title: 'Tips & Tricks',
      commands: [
        {
          command: 'Focus Mode',
          description: 'Simplified DevTools',
          usage: 'Enable Focus Mode',
          example: '// Simplified UI\n// Essential tools only\n// Cleaner interface',
        },
        {
          command: 'Customize DevTools',
          description: 'Personalize appearance',
          usage: 'Settings > Appearance',
          example: '// Theme\n// Panel layout\n// Font size\n// Color format',
        },
        {
          command: 'DevTools Tips',
          description: 'Learn new features',
          usage: 'Help > Tips',
          example: '// Daily tips\n// New features\n// Best practices',
        },
        {
          command: 'Network Conditions',
          description: 'Override network settings',
          usage: 'More tools > Network conditions',
          example: '// User agent override\n// Network throttling\n// Offline mode',
        },
      ],
    },
  ],
};
