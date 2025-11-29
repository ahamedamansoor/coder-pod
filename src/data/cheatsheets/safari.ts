import { Chrome } from 'lucide-react';

export const safariCheatsheet = {
  id: 'safari',
  name: 'Safari Web Inspector',
  description: 'Safari developer tools & debugging',
  icon: Chrome,
  colorTheme: 'indigo' as const,
  sections: [
    {
      title: 'Opening Web Inspector',
      commands: [
        {
          command: 'Enable Developer Menu',
          description: 'Enable developer features',
          usage: 'Safari > Preferences > Advanced',
          example: '// Check "Show Develop menu in menu bar"\n// Required first step',
        },
        {
          command: 'Open Web Inspector',
          description: 'Open developer tools',
          usage: 'Cmd+Option+I',
          example: 'Cmd+Option+I  # Mac only\n// Or right-click > Inspect Element',
        },
        {
          command: 'Open Console',
          description: 'Open Console directly',
          usage: 'Cmd+Option+C',
          example: 'Cmd+Option+C\n// Opens with Console tab active',
        },
        {
          command: 'Enter Responsive Design Mode',
          description: 'Device simulation',
          usage: 'Cmd+Option+R',
          example: 'Cmd+Option+R\n// Test responsive layouts',
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
          example: 'console.log("Hello Safari");\nconsole.log("User:", user);\nconsole.log({name, age});',
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
          example: 'console.error("Error occurred");\nconsole.warn("Warning message");',
        },
        {
          command: 'console.time() / timeEnd()',
          description: 'Measure execution time',
          usage: 'console.time(label)',
          example: 'console.time("Load");\nawait loadData();\nconsole.timeEnd("Load");\n// Load: 234ms',
        },
        {
          command: 'console.group()',
          description: 'Group messages',
          usage: 'console.group(label)',
          example: 'console.group("User Data");\nconsole.log("Name:", name);\nconsole.log("Email:", email);\nconsole.groupEnd();',
        },
        {
          command: 'console.count()',
          description: 'Count occurrences',
          usage: 'console.count(label)',
          example: 'console.count("clicks");\n// clicks: 1, 2, 3...',
        },
        {
          command: 'console.trace()',
          description: 'Print stack trace',
          usage: 'console.trace()',
          example: 'console.trace();\n// Shows function call stack',
        },
        {
          command: 'console.assert()',
          description: 'Conditional error',
          usage: 'console.assert(condition, message)',
          example: 'console.assert(x > 0, "x must be positive");',
        },
        {
          command: 'console.dir()',
          description: 'Display object properties',
          usage: 'console.dir(object)',
          example: 'console.dir(document.body);\n// Shows all properties',
        },
      ],
    },
    {
      title: 'Console Utilities',
      commands: [
        {
          command: '$0 - $99',
          description: 'Recently inspected elements',
          usage: '$0, $1, $2...',
          example: '$0  // Most recent\n$1  // Second most recent\n// Up to 100 elements',
        },
        {
          command: '$() / $$()',
          description: 'Query selectors',
          usage: '$(selector) / $$(selector)',
          example: '$("div.main")  // querySelector\n$$("div")  // querySelectorAll',
        },
        {
          command: '$x()',
          description: 'XPath query',
          usage: '$x(xpath)',
          example: '$x("//div[@class=\'main\']")\n// Returns array',
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
          command: 'inspect()',
          description: 'Inspect element',
          usage: 'inspect(element)',
          example: 'inspect($("div"))\n// Opens Elements tab',
        },
        {
          command: 'getEventListeners()',
          description: 'Get event listeners',
          usage: 'getEventListeners(element)',
          example: 'getEventListeners($0)\n// Shows all listeners',
        },
      ],
    },
    {
      title: 'Elements Tab',
      commands: [
        {
          command: 'Edit HTML',
          description: 'Edit element HTML',
          usage: 'Double-click element or press Return',
          example: '// Double-click tag\n// Or press Return\n// Edit HTML directly',
        },
        {
          command: 'Edit Attributes',
          description: 'Modify attributes',
          usage: 'Double-click attribute',
          example: '// Click attribute to edit\n// Tab to next\n// Return to apply',
        },
        {
          command: 'Add CSS Rule',
          description: 'Add new style rule',
          usage: 'Click + in Styles sidebar',
          example: '// New CSS rule\n// Auto-completion\n// Live preview',
        },
        {
          command: 'Toggle CSS Property',
          description: 'Enable/disable property',
          usage: 'Click checkbox',
          example: '// Check/uncheck to toggle\n// Test styles quickly',
        },
        {
          command: 'Force Element State',
          description: 'Force pseudo-class',
          usage: 'Styles sidebar > Force State',
          example: '// :hover\n// :active\n// :focus\n// :visited\n// :target',
        },
        {
          command: 'Computed Styles',
          description: 'View computed CSS',
          usage: 'Computed tab',
          example: '// Final CSS values\n// Box model\n// All applied styles',
        },
        {
          command: 'Show Shadow DOM',
          description: 'View shadow DOM',
          usage: 'Elements > Show Shadow DOM',
          example: '// Inspect shadow DOM\n// Web components\n// Encapsulated styles',
        },
      ],
    },
    {
      title: 'Sources Tab',
      commands: [
        {
          command: 'Set Breakpoint',
          description: 'Add breakpoint',
          usage: 'Click line number',
          example: '// Click line number\n// Cmd+\\ to toggle\n// Conditional: right-click',
        },
        {
          command: 'debugger',
          description: 'Programmatic breakpoint',
          usage: 'debugger;',
          example: 'function test() {\n  debugger;\n  console.log("paused");\n}',
        },
        {
          command: 'Step Over',
          description: 'Execute next line',
          usage: 'F6 or Cmd+\'',
          example: 'F6  # Step over\nCmd+\'  # Alternative\n// Next line',
        },
        {
          command: 'Step Into',
          description: 'Enter function',
          usage: 'F7 or Cmd+;',
          example: 'F7  # Step into\nCmd+;  # Alternative',
        },
        {
          command: 'Step Out',
          description: 'Exit function',
          usage: 'F8 or Cmd+Shift+;',
          example: 'F8  # Step out\n// Return to caller',
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
          usage: 'Add in Watch section',
          example: '// Add expression\n// user.name\n// Updates on each step',
        },
        {
          command: 'Call Stack',
          description: 'View call stack',
          usage: 'Call Stack section',
          example: '// Function hierarchy\n// Click to jump\n// Async call stacks',
        },
      ],
    },
    {
      title: 'Network Tab',
      commands: [
        {
          command: 'Record Network',
          description: 'Start/stop recording',
          usage: 'Click record button',
          example: '// Red = recording\n// Gray = stopped',
        },
        {
          command: 'Preserve Log',
          description: 'Keep logs on navigation',
          usage: 'Click "Preserve Log"',
          example: '// Keeps logs across loads\n// Debug redirects',
        },
        {
          command: 'Disable Caches',
          description: 'Bypass cache',
          usage: 'Check "Disable Caches"',
          example: '// Fresh requests\n// While inspector open',
        },
        {
          command: 'Filter Requests',
          description: 'Filter by type',
          usage: 'Filter bar',
          example: '// All\n// Documents\n// Stylesheets\n// Images\n// Scripts\n// XHR\n// Fonts\n// Other',
        },
        {
          command: 'Copy as cURL',
          description: 'Export request',
          usage: 'Right-click > Copy as cURL',
          example: '// Copy as cURL command\n// Copy request/response',
        },
        {
          command: 'HAR Export',
          description: 'Export network log',
          usage: 'Export HAR',
          example: '// Export as HAR file\n// Share network data\n// Analyze offline',
        },
      ],
    },
    {
      title: 'Timelines',
      commands: [
        {
          command: 'Record Timeline',
          description: 'Profile performance',
          usage: 'Click record in Timelines',
          example: '// Start recording\n// Interact with page\n// Stop and analyze',
        },
        {
          command: 'JavaScript & Events',
          description: 'JS execution timeline',
          usage: 'JavaScript & Events view',
          example: '// Function calls\n// Execution time\n// Event handlers',
        },
        {
          command: 'Layout & Rendering',
          description: 'Layout timeline',
          usage: 'Layout & Rendering view',
          example: '// Styles\n// Layout\n// Paint\n// Composite',
        },
        {
          command: 'Network Requests',
          description: 'Network timeline',
          usage: 'Network Requests view',
          example: '// Request waterfall\n// Download times\n// Resource timing',
        },
        {
          command: 'CPU Usage',
          description: 'CPU timeline',
          usage: 'CPU view',
          example: '// CPU activity\n// Main thread\n// Worker threads',
        },
      ],
    },
    {
      title: 'Storage',
      commands: [
        {
          command: 'Local Storage',
          description: 'View localStorage',
          usage: 'Storage > Local Storage',
          example: '// View items\n// Edit values\n// Delete entries\n// Clear all',
        },
        {
          command: 'Session Storage',
          description: 'View sessionStorage',
          usage: 'Storage > Session Storage',
          example: '// Session data\n// Tab-specific\n// Cleared on close',
        },
        {
          command: 'Cookies',
          description: 'Manage cookies',
          usage: 'Storage > Cookies',
          example: '// View cookies\n// Edit values\n// Delete cookies\n// Filter by domain',
        },
        {
          command: 'IndexedDB',
          description: 'Browse IndexedDB',
          usage: 'Storage > IndexedDB',
          example: '// View databases\n// Object stores\n// Browse data',
        },
        {
          command: 'Cache Storage',
          description: 'View caches',
          usage: 'Storage > Cache Storage',
          example: '// Service Worker caches\n// View cached files\n// Delete entries',
        },
        {
          command: 'Application Cache',
          description: 'View AppCache (deprecated)',
          usage: 'Storage > Application Cache',
          example: '// Legacy AppCache\n// Manifest files\n// Cached resources',
        },
      ],
    },
    {
      title: 'Graphics',
      commands: [
        {
          command: 'Show Paint Flashing',
          description: 'Highlight repaints',
          usage: 'Develop > Show Paint Flashing',
          example: '// Green flash = repaint\n// Optimize performance',
        },
        {
          command: 'Show Compositing Borders',
          description: 'Show layer borders',
          usage: 'Develop > Show Compositing Borders',
          example: '// Red = composited layers\n// Orange = tiles\n// Hardware acceleration',
        },
        {
          command: 'Canvas Inspector',
          description: 'Debug canvas',
          usage: 'Graphics tab',
          example: '// Record canvas calls\n// Step through frames\n// WebGL debugging',
        },
        {
          command: 'Show Transparency Grid',
          description: 'Visualize transparency',
          usage: 'Graphics > Show Grid',
          example: '// Checkerboard pattern\n// Transparent areas\n// Alpha channel',
        },
      ],
    },
    {
      title: 'Layers',
      commands: [
        {
          command: 'View Layers',
          description: '3D layer visualization',
          usage: 'Layers tab',
          example: '// 3D view of layers\n// Compositing layers\n// Z-index visualization\n// Memory usage',
        },
        {
          command: 'Inspect Layer',
          description: 'View layer details',
          usage: 'Click layer in 3D view',
          example: '// Layer properties\n// Compositing reasons\n// Memory cost\n// Paint count',
        },
        {
          command: 'Show Layer Borders',
          description: 'Highlight layer boundaries',
          usage: 'Layers > Show Borders',
          example: '// Visualize layers\n// Compositing borders',
        },
      ],
    },
    {
      title: 'Safari-Specific Features',
      commands: [
        {
          command: 'iOS Simulator',
          description: 'Debug iOS apps',
          usage: 'Develop > Simulator',
          example: '// Debug iOS simulator\n// Connect to iPhone/iPad\n// Remote debugging',
        },
        {
          command: 'Show JavaScript Console',
          description: 'Console for current page',
          usage: 'Develop > Show JavaScript Console',
          example: 'Cmd+Option+C\n// Quick console access',
        },
        {
          command: 'Show Page Resources',
          description: 'View all resources',
          usage: 'Develop > Show Page Resources',
          example: '// All page resources\n// Images, scripts, styles\n// Resource tree',
        },
        {
          command: 'Disable JavaScript',
          description: 'Test without JS',
          usage: 'Develop > Disable JavaScript',
          example: '// Disable JS\n// Test progressive enhancement\n// Re-enable to restore',
        },
        {
          command: 'Disable Images',
          description: 'Test without images',
          usage: 'Develop > Disable Images',
          example: '// No images load\n// Test alt text\n// Faster testing',
        },
        {
          command: 'Disable Styles',
          description: 'View unstyled HTML',
          usage: 'Develop > Disable Styles',
          example: '// Remove all CSS\n// View semantic HTML\n// Check structure',
        },
        {
          command: 'User Agent',
          description: 'Change user agent',
          usage: 'Develop > User Agent',
          example: '// Safari - iOS\n// Safari - iPadOS\n// Chrome\n// Firefox\n// Edge\n// Custom',
        },
        {
          command: 'WebDriver',
          description: 'Automation support',
          usage: 'Develop > Allow Remote Automation',
          example: '// Enable WebDriver\n// Selenium testing\n// Automated testing',
        },
      ],
    },
    {
      title: 'Responsive Design Mode',
      commands: [
        {
          command: 'Enter RDM',
          description: 'Enter responsive mode',
          usage: 'Cmd+Option+R',
          example: 'Cmd+Option+R\n// Test responsive designs',
        },
        {
          command: 'Device Presets',
          description: 'Select device',
          usage: 'Device dropdown',
          example: '// iPhone 14 Pro\n// iPhone 14 Pro Max\n// iPad Pro 12.9"\n// iPad Pro 11"\n// Custom',
        },
        {
          command: 'Rotate Device',
          description: 'Toggle orientation',
          usage: 'Rotate button',
          example: '// Portrait\n// Landscape\n// Test both',
        },
        {
          command: 'Touch Bar',
          description: 'Show Touch Bar (if available)',
          usage: 'Touch Bar preview',
          example: '// MacBook Pro Touch Bar\n// Preview Touch Bar UI',
        },
      ],
    },
    {
      title: 'Develop Menu',
      commands: [
        {
          command: 'Empty Caches',
          description: 'Clear all caches',
          usage: 'Develop > Empty Caches',
          example: 'Cmd+Option+E\n// Clear all caches\n// Fresh reload',
        },
        {
          command: 'Disable Local File Restrictions',
          description: 'Test local files',
          usage: 'Develop > Disable Local File Restrictions',
          example: '// Access local files\n// Cross-origin testing\n// Development only',
        },
        {
          command: 'Disable Cross-Origin Restrictions',
          description: 'Disable CORS',
          usage: 'Develop > Disable Cross-Origin Restrictions',
          example: '// Bypass CORS\n// Development only\n// Not for production',
        },
        {
          command: 'Show Web Inspector',
          description: 'Open Web Inspector',
          usage: 'Develop > Show Web Inspector',
          example: 'Cmd+Option+I\n// Main developer tool',
        },
        {
          command: 'Connect to Device',
          description: 'Debug iOS device',
          usage: 'Develop > [Device Name]',
          example: '// Connect via USB\n// Enable Web Inspector on iOS\n// Select page to debug',
        },
      ],
    },
    {
      title: 'Experimental Features',
      commands: [
        {
          command: 'Experimental Features',
          description: 'Enable experiments',
          usage: 'Develop > Experimental Features',
          example: '// CSS features\n// JavaScript features\n// Web APIs\n// Warning: unstable',
        },
        {
          command: 'Feature Flags',
          description: 'Toggle WebKit features',
          usage: 'Develop > Feature Flags',
          example: '// Enable/disable features\n// Test new APIs\n// WebKit experiments',
        },
      ],
    },
    {
      title: 'Accessibility',
      commands: [
        {
          command: 'Accessibility Inspector',
          description: 'Check accessibility',
          usage: 'Node tab > Accessibility',
          example: '// ARIA attributes\n// Computed role\n// Accessible name\n// Keyboard access',
        },
        {
          command: 'Audit',
          description: 'Run accessibility audit',
          usage: 'Audit tab',
          example: '// Automated checks\n// WCAG compliance\n// Best practices\n// Issues found',
        },
      ],
    },
    {
      title: 'Tips & Tricks',
      commands: [
        {
          command: 'Snippet Editor',
          description: 'Save code snippets',
          usage: 'Sources > Create Resource',
          example: '// Save JavaScript snippets\n// Run frequently used code\n// Quick utilities',
        },
        {
          command: 'Color Picker',
          description: 'Advanced color tool',
          usage: 'Click color in Styles',
          example: '// Color picker\n// Eyedropper\n// Format conversion\n// Contrast checker',
        },
        {
          command: 'Timezones',
          description: 'Override timezone',
          usage: 'Sources > Override Timezone',
          example: '// Test different timezones\n// Date/time testing',
        },
        {
          command: 'Network Link Conditioner',
          description: 'Simulate network speeds',
          usage: 'Network tab > Network Link Conditioner',
          example: '// 3G\n// LTE\n// WiFi\n// Custom profiles',
        },
        {
          command: 'Keyboard Shortcuts',
          description: 'View all shortcuts',
          usage: 'Help > Web Inspector Shortcuts',
          example: '// All keyboard shortcuts\n// Quick reference',
        },
      ],
    },
  ],
};
