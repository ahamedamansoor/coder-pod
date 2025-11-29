import { Chrome } from 'lucide-react';

export const firefoxCheatsheet = {
  id: 'firefox',
  name: 'Firefox DevTools',
  description: 'Firefox browser & developer tools',
  icon: Chrome,
  colorTheme: 'orange' as const,
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
          command: 'Open Inspector',
          description: 'Open Inspector panel',
          usage: 'Cmd+Option+C (Mac) / Ctrl+Shift+C (Win)',
          example: 'Cmd+Option+C  # Mac\nCtrl+Shift+C  # Windows\n\n# Pick element from page',
        },
        {
          command: 'Open Web Console',
          description: 'Open Console panel',
          usage: 'Cmd+Option+K (Mac) / Ctrl+Shift+K (Win)',
          example: 'Cmd+Option+K  # Mac\nCtrl+Shift+K  # Windows',
        },
        {
          command: 'Open Debugger',
          description: 'Open Debugger panel',
          usage: 'Cmd+Option+S (Mac) / Ctrl+Shift+S (Win)',
          example: 'Cmd+Option+S  # Mac\nCtrl+Shift+S  # Windows',
        },
        {
          command: 'Responsive Design Mode',
          description: 'Toggle device simulation',
          usage: 'Cmd+Option+M (Mac) / Ctrl+Shift+M (Win)',
          example: 'Cmd+Option+M  # Mac\nCtrl+Shift+M  # Windows',
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
          example: 'console.log("Hello Firefox");\nconsole.log("User:", user);\nconsole.log({name, age, email});',
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
          example: 'console.error("Error occurred!");\nconsole.warn("Deprecated API used");',
        },
        {
          command: 'console.time() / timeEnd()',
          description: 'Measure execution time',
          usage: 'console.time(label) / console.timeEnd(label)',
          example: 'console.time("Fetch");\nawait fetch("/api/data");\nconsole.timeEnd("Fetch");\n// Fetch: 234ms',
        },
        {
          command: 'console.group()',
          description: 'Group console messages',
          usage: 'console.group(label) / console.groupEnd()',
          example: 'console.group("User Info");\nconsole.log("Name:", user.name);\nconsole.log("Email:", user.email);\nconsole.groupEnd();',
        },
        {
          command: 'console.count()',
          description: 'Count occurrences',
          usage: 'console.count(label)',
          example: 'function myFunc() {\n  console.count("Calls");\n}\nmyFunc(); // Calls: 1\nmyFunc(); // Calls: 2',
        },
        {
          command: 'console.trace()',
          description: 'Print stack trace',
          usage: 'console.trace()',
          example: 'function foo() {\n  console.trace();\n}\nfoo();\n// Shows call stack',
        },
        {
          command: 'console.assert()',
          description: 'Conditional error',
          usage: 'console.assert(condition, message)',
          example: 'console.assert(x > 0, "x must be positive");\n// Only logs if condition false',
        },
      ],
    },
    {
      title: 'Console Helpers',
      commands: [
        {
          command: '$0',
          description: 'Currently selected element',
          usage: '$0',
          example: '// Select element in Inspector\n$0  // Returns selected element\n$0.style.color = "red";',
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
          example: '$x("//div[@class=\'main\']")\n// Returns array of elements',
        },
        {
          command: 'copy()',
          description: 'Copy to clipboard',
          usage: 'copy(value)',
          example: 'copy(location.href)\ncopy(JSON.stringify(data, null, 2))\ncopy($$("a").map(a => a.href))',
        },
        {
          command: 'cd()',
          description: 'Switch execution context',
          usage: 'cd(iframe)',
          example: 'cd($("iframe"))\n// Execute in iframe context',
        },
      ],
    },
    {
      title: 'Inspector Panel',
      commands: [
        {
          command: 'Edit HTML',
          description: 'Edit element HTML',
          usage: 'Right-click > Edit as HTML',
          example: '// Or press F2\n// Edit HTML directly\n// Esc to cancel',
        },
        {
          command: 'Edit Attributes',
          description: 'Modify attributes',
          usage: 'Double-click attribute',
          example: '// Click to edit\n// Tab to next attribute\n// Enter to apply',
        },
        {
          command: 'Add CSS Rule',
          description: 'Add new CSS rule',
          usage: 'Click + in Rules panel',
          example: '// Adds rule for element\n// Type properties\n// Auto-completion available',
        },
        {
          command: 'Toggle Class',
          description: 'Add/remove classes',
          usage: 'Click .cls button',
          example: '// Toggle existing classes\n// Add new classes\n// Instant visual feedback',
        },
        {
          command: 'Pseudo-classes',
          description: 'Force element state',
          usage: 'Click :hov button',
          example: '// Force :hover\n// Force :active\n// Force :focus\n// Force :visited',
        },
        {
          command: 'Screenshot Node',
          description: 'Capture element screenshot',
          usage: 'Right-click > Screenshot Node',
          example: '// Saves element as image\n// Perfect dimensions\n// PNG format',
        },
        {
          command: 'Show DOM Properties',
          description: 'View element properties',
          usage: 'Right-click > Show DOM Properties',
          example: '// Shows all JS properties\n// Live object inspection\n// Click to expand',
        },
      ],
    },
    {
      title: 'Debugger',
      commands: [
        {
          command: 'Set Breakpoint',
          description: 'Add breakpoint',
          usage: 'Click line number',
          example: '// Click line number\n// Cmd+B to toggle\n// Conditional: right-click',
        },
        {
          command: 'debugger',
          description: 'Programmatic breakpoint',
          usage: 'debugger;',
          example: 'function myFunction() {\n  debugger;  // Pauses here\n  console.log("After");\n}',
        },
        {
          command: 'Step Over',
          description: 'Execute next line',
          usage: 'F10',
          example: 'F10  # Next line\n// Doesn\'t enter functions',
        },
        {
          command: 'Step Into',
          description: 'Enter function',
          usage: 'F11',
          example: 'F11  # Enter function\n// Steps into function calls',
        },
        {
          command: 'Step Out',
          description: 'Exit function',
          usage: 'Shift+F11',
          example: 'Shift+F11  # Exit function\n// Returns to caller',
        },
        {
          command: 'Continue',
          description: 'Resume execution',
          usage: 'F8',
          example: 'F8  # Continue\n// Runs to next breakpoint',
        },
        {
          command: 'Watch Expressions',
          description: 'Monitor variables',
          usage: 'Add in Watch panel',
          example: '// Add expressions\n// user.name\n// count + 1\n// Updates on each step',
        },
        {
          command: 'Blackbox Source',
          description: 'Ignore file in debugging',
          usage: 'Right-click > Blackbox source',
          example: '// Skips library code\n// Focus on your code\n// Improves debugging speed',
        },
      ],
    },
    {
      title: 'Network Monitor',
      commands: [
        {
          command: 'Persist Logs',
          description: 'Keep logs on navigation',
          usage: 'Click gear > Persist Logs',
          example: '// Keeps logs across page loads\n// Useful for redirects',
        },
        {
          command: 'Disable Cache',
          description: 'Bypass browser cache',
          usage: 'Click gear > Disable Cache',
          example: '// Forces fresh requests\n// Only when DevTools open',
        },
        {
          command: 'Throttling',
          description: 'Simulate slow network',
          usage: 'Throttling dropdown',
          example: '// GPRS (50 KB/s)\n// Regular 2G\n// Good 2G\n// Regular 3G\n// Good 3G\n// Regular 4G\n// WiFi',
        },
        {
          command: 'Filter Requests',
          description: 'Filter by type',
          usage: 'Click filter buttons',
          example: '// HTML\n// CSS\n// JS\n// XHR\n// Fonts\n// Images\n// Media\n// WS (WebSocket)',
        },
        {
          command: 'Copy as cURL',
          description: 'Export request',
          usage: 'Right-click > Copy > Copy as cURL',
          example: '// Copy as cURL command\n// Copy URL\n// Copy as Fetch\n// Copy request headers',
        },
        {
          command: 'Edit and Resend',
          description: 'Modify and replay request',
          usage: 'Right-click > Edit and Resend',
          example: '// Edit request\n// Change headers\n// Modify body\n// Resend',
        },
      ],
    },
    {
      title: 'Performance',
      commands: [
        {
          command: 'Record Performance',
          description: 'Profile page performance',
          usage: 'Click record button',
          example: '// 1. Click record\n// 2. Interact with page\n// 3. Stop recording\n// 4. Analyze waterfall',
        },
        {
          command: 'Markers',
          description: 'View performance markers',
          usage: 'Analyze timeline markers',
          example: '// Styles\n// Reflow\n// Paint\n// JavaScript\n// Garbage Collection',
        },
        {
          command: 'Flame Chart',
          description: 'Visualize call stacks',
          usage: 'View flame chart',
          example: '// Shows function calls\n// Execution time\n// Call hierarchy',
        },
      ],
    },
    {
      title: 'Storage Inspector',
      commands: [
        {
          command: 'Local Storage',
          description: 'View/edit localStorage',
          usage: 'Storage > Local Storage',
          example: '// View all items\n// Double-click to edit\n// Right-click to delete',
        },
        {
          command: 'Session Storage',
          description: 'View/edit sessionStorage',
          usage: 'Storage > Session Storage',
          example: '// Session-only data\n// Cleared on tab close',
        },
        {
          command: 'Cookies',
          description: 'Manage cookies',
          usage: 'Storage > Cookies',
          example: '// View all cookies\n// Edit values\n// Delete cookies\n// See domain/path',
        },
        {
          command: 'IndexedDB',
          description: 'Browse IndexedDB',
          usage: 'Storage > IndexedDB',
          example: '// View databases\n// Browse object stores\n// Query data',
        },
        {
          command: 'Cache Storage',
          description: 'View cached resources',
          usage: 'Storage > Cache Storage',
          example: '// Service Worker caches\n// Delete entries\n// Clear cache',
        },
      ],
    },
    {
      title: 'Accessibility Inspector',
      commands: [
        {
          command: 'Show Accessibility Tree',
          description: 'View a11y tree',
          usage: 'Accessibility panel',
          example: '// Shows accessibility tree\n// ARIA roles\n// Labels and descriptions\n// Keyboard navigation',
        },
        {
          command: 'Check Contrast',
          description: 'Check color contrast',
          usage: 'Inspect text elements',
          example: '// Shows contrast ratio\n// WCAG AA/AAA compliance\n// Suggests improvements',
        },
        {
          command: 'Simulate Disabilities',
          description: 'Test with disabilities',
          usage: 'Accessibility > Simulate',
          example: '// Protanopia (red-blind)\n// Deuteranopia (green-blind)\n// Tritanopia (blue-blind)\n// Achromatopsia (no color)\n// Contrast loss',
        },
      ],
    },
    {
      title: 'Firefox-Specific Features',
      commands: [
        {
          command: 'CSS Grid Inspector',
          description: 'Visualize CSS Grid',
          usage: 'Inspector > Grid overlay',
          example: '// Shows grid lines\n// Line numbers\n// Grid areas\n// Gap visualization',
        },
        {
          command: 'Flexbox Inspector',
          description: 'Debug flexbox layouts',
          usage: 'Inspector > Flex overlay',
          example: '// Shows flex container\n// Flex items\n// Direction\n// Alignment',
        },
        {
          command: 'Fonts Panel',
          description: 'Inspect fonts',
          usage: 'Inspector > Fonts tab',
          example: '// Shows all fonts used\n// Font family\n// Font weight\n// Font size\n// Preview text',
        },
        {
          command: 'Shape Path Editor',
          description: 'Edit CSS shapes',
          usage: 'Inspector > Edit shape',
          example: '// Visual editor for:\n// clip-path\n// shape-outside\n// Drag points to adjust',
        },
        {
          command: 'Container Queries',
          description: 'Debug container queries',
          usage: 'Inspector > Container badge',
          example: '// Shows container contexts\n// Container dimensions\n// Active queries',
        },
      ],
    },
    {
      title: 'about: URLs',
      commands: [
        {
          command: 'about:config',
          description: 'Advanced settings',
          usage: 'about:config',
          example: 'about:config\n// Advanced preferences\n// Warning: expert settings',
        },
        {
          command: 'about:addons',
          description: 'Manage extensions',
          usage: 'about:addons',
          example: 'about:addons\n// Extensions\n// Themes\n// Plugins',
        },
        {
          command: 'about:performance',
          description: 'Performance monitor',
          usage: 'about:performance',
          example: 'about:performance\n// Memory usage\n// CPU usage\n// Per-tab stats',
        },
        {
          command: 'about:debugging',
          description: 'Debug browser/addons',
          usage: 'about:debugging',
          example: 'about:debugging\n// Debug extensions\n// Debug tabs\n// Debug workers',
        },
        {
          command: 'about:memory',
          description: 'Memory reports',
          usage: 'about:memory',
          example: 'about:memory\n// Detailed memory usage\n// Force GC\n// Memory reports',
        },
        {
          command: 'about:support',
          description: 'Troubleshooting info',
          usage: 'about:support',
          example: 'about:support\n// System info\n// Graphics\n// Extensions',
        },
      ],
    },
    {
      title: 'Responsive Design Mode',
      commands: [
        {
          command: 'Device Presets',
          description: 'Emulate devices',
          usage: 'Select device from dropdown',
          example: '// iPhone 14 Pro\n// iPad\n// Galaxy S21\n// Custom dimensions',
        },
        {
          command: 'Rotate Device',
          description: 'Toggle orientation',
          usage: 'Click rotate button',
          example: '// Portrait\n// Landscape\n// Tests both orientations',
        },
        {
          command: 'Touch Simulation',
          description: 'Simulate touch events',
          usage: 'Enable touch simulation',
          example: '// Simulates touch\n// Tests mobile interactions\n// Touch gestures',
        },
        {
          command: 'Screenshot',
          description: 'Capture device view',
          usage: 'Click camera icon',
          example: '// Takes screenshot\n// Device dimensions\n// Perfect for mockups',
        },
      ],
    },
    {
      title: 'Keyboard Shortcuts',
      commands: [
        {
          command: 'Quick Open',
          description: 'Open file search',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win)',
          example: 'Cmd+P  # Mac\nCtrl+P  # Windows\n\n# Search files',
        },
        {
          command: 'Command Palette',
          description: 'Open command menu',
          usage: 'Cmd+Shift+P (Mac) / Ctrl+Shift+P (Win)',
          example: 'Cmd+Shift+P  # Mac\nCtrl+Shift+P  # Windows\n\n# All commands',
        },
        {
          command: 'Search in Files',
          description: 'Search across files',
          usage: 'Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)',
          example: 'Cmd+Shift+F  # Mac\nCtrl+Shift+F  # Windows',
        },
        {
          command: 'Next/Previous Panel',
          description: 'Switch panels',
          usage: 'Cmd+] / Cmd+[ (Mac)',
          example: 'Cmd+]  # Next panel\nCmd+[  # Previous panel',
        },
      ],
    },
    {
      title: 'Scratchpad (Legacy)',
      commands: [
        {
          command: 'Open Scratchpad',
          description: 'JavaScript playground',
          usage: 'Shift+F4',
          example: 'Shift+F4\n// Write and execute JS\n// Multi-line editor\n// Execute: Cmd+R',
        },
      ],
    },
    {
      title: 'WebExtension Debugging',
      commands: [
        {
          command: 'Debug Extensions',
          description: 'Debug add-ons',
          usage: 'about:debugging > This Firefox',
          example: '// Debug extensions\n// Temporary add-ons\n// Inspect background pages',
        },
        {
          command: 'Browser Console',
          description: 'Firefox browser console',
          usage: 'Cmd+Shift+J (Mac) / Ctrl+Shift+J (Win)',
          example: 'Cmd+Shift+J  # Mac\n// Shows browser logs\n// Chrome context\n// Extension logs',
        },
      ],
    },
    {
      title: 'Tips & Features',
      commands: [
        {
          command: 'Take Screenshot',
          description: 'Full page screenshot',
          usage: 'Command menu > Screenshot',
          example: '// Cmd+Shift+P > screenshot\n// Full page\n// Visible area\n// Selected node',
        },
        {
          command: 'Multi-line Console',
          description: 'Write multi-line code',
          usage: 'Shift+Enter in console',
          example: 'Shift+Enter  # New line\n// Write multiple lines\n// Execute with Enter',
        },
        {
          command: 'Eyedropper Tool',
          description: 'Pick colors from page',
          usage: 'Inspector > Color picker',
          example: '// Click eyedropper icon\n// Click anywhere on page\n// Copies color value',
        },
        {
          command: 'CSS Variables',
          description: 'View CSS custom properties',
          usage: 'Inspector shows variables',
          example: '// Shows --custom-property\n// Click to see definition\n// Trace inheritance',
        },
      ],
    },
  ],
};
