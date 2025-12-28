import { Monitor } from 'lucide-react';

export const edgeCheatsheet = {
  id: 'edge-devtools',
  name: 'Edge DevTools',
  description: 'Master Microsoft Edge DevTools from basics to expert debugging, performance analysis, and web development (Edge 120+)',
  icon: Monitor,
  colorTheme: 'cyan' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Edge DevTools',
      commands: [
        {
          command: 'Edge DevTools Overview and Access',
          description: 'Understanding Edge DevTools and how to access them',
          usage: 'Multiple access methods for different workflows',
          example: '# Edge DevTools Access Methods\n\n# Keyboard Shortcuts\nF12 (Windows/Linux)\nCtrl+Shift+I (Windows/Linux)\nCmd+Option+I (Mac)\n\n# Context Menu\nRight-click → Inspect\n\n# Edge Menu\nEdge Menu (⋯) → More tools → Developer tools\n\n# Panel Navigation\nCtrl/Cmd + [1-9]: Quick panel switching\nCtrl/Cmd + Tab: Cycle through panels\nEsc: Toggle console drawer',
        },
        {
          command: 'Edge DevTools Key Components',
          description: 'Essential panels and their purposes',
          usage: 'Understanding each DevTools panel',
          example: '# Edge DevTools Panels\n\n# Elements Panel\nDOM and CSS inspection\nReal-time style editing\nBox model visualization\n\n# Console Panel\nJavaScript debugging and logging\nInteractive programming\nError monitoring\n\n# Sources Panel\nScript debugging and editing\nSource maps\nFile workspace\n\n# Network Panel\nNetwork request monitoring\nPerformance analysis\nResource inspection\n\n# Performance Panel\nRuntime performance analysis\nFlame charts\nMemory profiling\n\n# Memory Panel\nHeap snapshots\nMemory leak detection\nAllocation tracking\n\n# Application Panel\nStorage inspection\nService workers\nProgressive web apps\n\n# Security Panel\nSecurity overview\nCertificate inspection\nMixed content analysis\n\n# Lighthouse Panel\nPerformance auditing and optimization',
        },
        {
          command: 'Opening DevTools and Navigation',
          description: 'Quick access methods and efficient panel navigation',
          usage: 'Keyboard shortcuts and context menu access',
          example: '# Edge DevTools Navigation\n\n# Panel Switching\nCtrl+1, Ctrl+2, ... (Windows/Linux)\nCmd+1, Cmd+2, ... (Mac)\n\n# Panel Navigation\nCtrl+Tab (Windows/Linux) / Cmd+Tab (Mac) - Next panel\nCtrl+Shift+Tab (Windows/Linux) / Cmd+Shift+Tab (Mac) - Previous panel\n\n# Quick Access\nCtrl+Shift+P (Windows/Linux) / Cmd+Shift+P (Mac) - Command menu\n\n# Element Inspection\nCtrl+Shift+C (Windows/Linux) / Cmd+Option+C (Mac) - Element selector mode\n\n# Console Access\nCtrl+Shift+J (Windows/Linux) / Cmd+Option+J (Mac) - Console directly',
        },
        {
          command: 'Essential Settings and Configuration',
          description: 'Customizing DevTools for optimal workflow',
          usage: 'Settings menu and key preferences',
          example: '# Edge DevTools Settings\n\n# Open Settings\nClick gear icon (top right)\nCtrl+Shift+P (Windows/Linux) / Cmd+Shift+P (Mac) → "Preferences"\nF1 (when DevTools is focused)\n\n# Essential Preferences\n\n## Appearance\n- Theme: Light/Dark/System preference\n- Panel layout: Horizontal/Vertical/Auto\n- Show whitespace characters\n- Enable Ctrl+1-9 shortcuts\n\n## Elements\n- Show user agent shadow DOM\n- Show HTML comments\n- Word wrap: On/Off\n- Highlight DOM updates on change\n\n## Console\n- Enable custom formatters\n- Hide network messages\n- Log XMLHTTPRequests\n- Eval on console panel activation\n\n## Sources\n- Enable JavaScript source maps\n- Enable CSS source maps\n- Search in content scripts\n- Autocomplete from history',
        },
        {
          command: 'Network Settings Configuration',
          description: 'Network panel specific settings',
          usage: 'Optimize network monitoring',
          example: '# Edge Network Panel Settings\n\n# Essential Network Preferences\n- Preserve log upon navigation\n- Disable cache (while DevTools open)\n- Show request/response bodies\n- Color-code resource types\n\n# Performance Settings\n- Enable advanced paint instrumentation\n- Show FPS meter\n- Show memory usage\n\n# Workspace Setup\nRight-click in Sources → Add folder to workspace\nMap local files to network resources\nLive edit local files with auto-save',
        },
        {
          command: 'Command Menu and Quick Actions',
          description: 'Universal command search for all DevTools features',
          usage: 'Ctrl+Shift+P (Windows/Linux) / Cmd+Shift+P (Mac)',
          example: '# Edge Command Menu Usage\nCtrl+Shift+P (Windows/Linux) / Cmd+Shift+P (Mac)\n\n# Popular Commands\n- Show Elements Panel\n- Show Console Panel\n- Show Sources Panel\n- Show Network Panel\n- Show Performance Panel\n- Show Memory Panel\n- Show Application Panel\n- Show Security Panel\n- Show Lighthouse Panel\n\n# Quick Actions\n- Disable JavaScript\n- Enable device toolbar\n- Capture screenshot\n- Clear site data\n- Empty cache and hard reload\n- Emulate CSS media type\n- Apply device metrics\n- Network conditions\n- User agent\n- Geolocation\n- Sensors',
        },
      ],
    },
    {
      title: 'Elements Panel Mastery',
      commands: [
        {
          command: 'Element Selection Mode',
          description: 'Enter element selection mode for inspection',
          usage: 'Ctrl+Shift+C (Windows/Linux) / Cmd+Option+C (Mac)',
          example: '# Edge Element Selection Mode\n\n# Activate Selection Mode\nCtrl+Shift+C (Windows/Linux) / Cmd+Option+C (Mac)\n\n# Usage\n1. Activate selection mode\n2. Hover over elements to highlight\n3. Click element to inspect\n4. Elements panel opens with selected element\n\n# Selection Tips\n- Hover shows element tooltip\n- Click selects and inspects\n- ESC to exit selection mode',
        },
        {
          command: 'DOM Tree Navigation',
          description: 'Navigate DOM tree efficiently',
          usage: 'Arrow keys and keyboard navigation',
          example: '# Edge DOM Tree Navigation\n\n# Keyboard Navigation\nArrow keys - Navigate DOM tree\nRight arrow - Expand collapsed element\nLeft arrow - Collapse element\nHome/End - First/last child\n\n# Element Search\nCtrl+F - Search within current panel\nCtrl+Shift+F - Search across all sources\n\n# DOM Tree Manipulation\nDrag element - Reorder DOM elements\nDelete key - Remove selected element\nEnter - Edit element as HTML',
        },
        {
          command: 'Element State Inspection',
          description: 'Force element states for debugging',
          usage: 'Right-click element → Force state',
          example: '# Edge Element State Inspection\n\n# Force Element States\nRight-click element → Force state\n\n# Available States\n:hover - Force hover state\n:active - Force active state\n:focus - Force focus state\n:visited - Force visited state\n\n# Usage Tips\n- Test hover effects without mouse\n- Debug active button states\n- Inspect focus styles\n- Debug visited link styles',
        },
        {
          command: 'DOM Breakpoints',
          description: 'Set breakpoints on DOM changes',
          usage: 'Right-click element → Break on',
          example: '# Edge DOM Breakpoints\n\n# Set DOM Breakpoints\nRight-click element → Break on\n\n# Breakpoint Types\n- Subtree modifications\n- Attribute modifications\n- Node removal\n\n# Usage\n1. Right-click target element\n2. Select "Break on"\n3. Choose breakpoint type\n4. DevTools pauses when change occurs\n\n# Management\nBreakpoints panel - View all breakpoints\nRight-click breakpoint - Edit/remove',
        },
        {
          command: 'Copy Element Information',
          description: 'Copy various element data to clipboard',
          usage: 'Right-click element → Copy',
          example: '# Edge Copy Element Data\n\n# Copy Options\nRight-click element → Copy\n\n# Available Copies\n- Copy outerHTML\n- Copy innerHTML\n- Copy selector\n- Copy XPath\n- Copy JS path\n\n# Usage Examples\n// Copy selector for querySelector\ndocument.querySelector(".copied-selector")\n\n// Copy XPath for document.evaluate\ndocument.evaluate(copiedXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)',
        },
        {
          command: 'CSS Style Editing',
          description: 'Edit CSS properties in real-time',
          usage: 'Click style property to edit',
          example: '# Edge CSS Style Editing\n\n# Style Editing\nClick style property - Edit value\nClick property name - Edit property\nTab/Shift+Tab - Navigate between properties\nEnter - Apply changes\nEscape - Cancel editing\n\n# Adding New Rules\nClick "+" icon - Add new style rule\n.cls { } - Class selector\n#id { } - ID selector\nelement { } - Element selector\n\n# CSS State Styling\n:hov - Toggle hover state\n:act - Toggle active state\n:foc - Toggle focus state',
        },
        {
          command: 'Color and Value Editing',
          description: 'Edit colors and numeric values efficiently',
          usage: 'Click color value or numeric property',
          example: '# Edge Color and Value Editing\n\n# Color Editing\nClick color value - Open color picker\nShift+click color - Cycle through formats\n\n# Numeric Value Editing\nClick value - Edit numeric\nArrow up/down - Increment/decrement by 1\nShift+arrow - Increment/decrement by 10\nAlt+arrow - Increment/decrement by 0.1\n\n# Color Formats\nHex: #ff0000\nRGB: rgb(255, 0, 0)\nHSL: hsl(0, 100%, 50%)\nNamed: red',
        },
        {
          command: 'CSS Grid and Flexbox Visualization',
          description: 'Visualize layout containers and their properties',
          usage: 'Click grid/flexbox icons in Elements panel',
          example: '# Edge CSS Layout Visualization\n\n# Flexbox Inspector\nFlexbox icon in Elements panel\n- Container properties visualization\n- Item properties display\n- Flex direction, wrap, alignment\n\n# Grid Inspector\nGrid icon in Elements panel\n- Grid lines visualization\n- Grid areas display\n- Track sizing information\n\n# Usage\n1. Select flexbox/grid container\n2. Click layout icon in Styles panel\n3. Visual overlay shows structure\n4. Hover to highlight areas',
        },
        {
          command: 'Box Model Visualization',
          description: 'Interactive box model diagram for layout debugging',
          usage: 'Styles panel → Box model diagram',
          example: '# Edge Box Model Visualization\n\n# Box Model Diagram\nStyles panel → Box model diagram\n- Content: Blue\n- Padding: Green\n- Border: Yellow\n- Margin: Orange\n\n# Interactive Editing\nClick box model area - Edit corresponding value\nType value + Enter - Apply change\n\n# Layout Properties\nComputed tab → Layout properties\ndisplay: block/inline/flex/grid\nposition: static/relative/absolute/fixed/sticky',
        },
        {
          command: 'Computed Styles Analysis',
          description: 'View final computed CSS values',
          usage: 'Computed tab in Styles panel',
          example: '# Edge Computed Styles\n\n# View Computed Values\nComputed tab - View final computed values\nShow all - Show all properties\n\n# CSS Inheritance\nTrace inheritance chain\nShow inherited - Include inherited properties\n\n# CSS Debugging\n- Struck-through text: Overridden property\n- Yellow warning: Invalid property\n- Grey text: Inherited property\n\n# Usage Tips\n- Filter by property name\n- Show browser default values\n- Trace inheritance path',
        },
      ],
    },
    {
      title: 'Console Panel Fundamentals',
      commands: [
        {
          command: 'Console Access and Navigation',
          description: 'Open console and navigate console features',
          usage: 'Ctrl+Shift+J (Windows/Linux) / Cmd+Option+J (Mac)',
          example: '# Edge Console Access\n\n# Opening Console\nCtrl+Shift+J (Windows/Linux) / Cmd+Option+J (Mac)\nEsc - Toggle console drawer\n\n# Console Navigation\nUp/Down arrows - Navigate command history\nTab - Autocomplete\nCtrl+L - Clear console\n\n# Console Context\nTop frame - Main page context\niframe contexts - Switch between frames\nWorker contexts - Service worker console',
        },
        {
          command: 'Basic Console Logging',
          description: 'Essential logging methods for debugging',
          usage: 'console methods for different message types',
          example: '# Edge Console Logging\n\n# Logging Methods\nconsole.log("Hello"); - Simple log\nconsole.error("Error"); - Error message\nconsole.warn("Warning"); - Warning message\nconsole.info("Info"); - Info message\nconsole.debug("Debug"); - Debug message\n\n# Advanced Logging\nconsole.table(data); - Table format\nconsole.group("Group"); - Group messages\nconsole.groupEnd(); - End group\nconsole.time("Timer"); - Start timer\nconsole.timeEnd("Timer"); - End timer',
        },
        {
          command: 'Variable and Expression Evaluation',
          description: 'Inspect variables and evaluate expressions',
          usage: 'Type expressions directly in console',
          example: '# Edge Console Evaluation\n\n# Variable Inspection\nlet x = 10; - Declare variable\nx - Show value\ndir(x) - Show object properties\n\n# Expression Evaluation\n2 + 2 - Math operations\nMath.random() - Function calls\ndocument.title - Property access\n\n# Object Inspection\nkeys(object); - Object keys\nvalues(object); - Object values\ninspect(object); - Object inspection',
        },
        {
          command: 'Console Query Selectors',
          description: 'Quick DOM querying from console',
          usage: 'Built-in selector shortcuts',
          example: '# Edge Console Query Selectors\n\n# Query Commands\n$("selector") - document.querySelector\n$$("selector") - document.querySelectorAll\n$x("xpath") - document.evaluate\n\n# Usage Examples\n$(".button") - First button\n$$(".button") - All buttons\n$x("//div[@class=\'content\']") - XPath selector\n\n# Chain Commands\n$$(".class").forEach(el => console.log(el));',
        },
        {
          command: 'Console Settings and Filtering',
          description: 'Customize console output and filtering',
          usage: 'Console panel settings and controls',
          example: '# Edge Console Settings\n\n# Console Controls\nFilter input - Filter console output\nPreserve log - Keep logs on navigation\nHide network - Hide network messages\n\n# Console Methods\nconsole.clear(); - Clear console\ncopy(object) - Copy to clipboard\n\n# Console Formatting\nconsole.log("%c styled", "color: red; font-size: 20px");\nconsole.log("%s %d", "string", 123); - Format strings',
        },
        {
          command: 'JavaScript Debugging in Console',
          description: 'Advanced debugging techniques using console',
          usage: 'Breakpoints and debugging commands',
          example: '# Edge Console Debugging\n\n# Breakpoints\ndebugger; - Code breakpoint\nconsole.debugger(); - Conditional debugger\n\n# Debugging Commands\nconsole.assert(condition, message); - Conditional logging\nconsole.count(label); - Counter\nconsole.trace(); - Stack trace\nconsole.profile(label); - CPU profiler\n\n# Error Handling\ntry {\n  // Code that might error\n} catch (error) {\n  console.error("Error:", error);\n}',
        },
        {
          command: 'Event Monitoring and Debugging',
          description: 'Monitor and debug DOM events',
          usage: 'Event monitoring commands',
          example: '# Edge Event Monitoring\n\n# Event Commands\nmonitorEvents(element, [events]) - Monitor DOM events\nunmonitorEvents(element) - Stop monitoring\ngetEventListeners(element) - Show event listeners\n\n# Usage Examples\nmonitorEvents(document.body, "click");\ngetEventListeners(document.querySelector(".button"));\n\n# Network Debugging\nmonitorEvents(window, "resize");\nunmonitorEvents(window);',
        },
        {
          command: 'Storage Inspection from Console',
          description: 'Inspect browser storage via console',
          usage: 'Access storage APIs directly',
          example: '# Edge Storage Inspection\n\n# Local Storage\nlocalStorage; - View local storage\nlocalStorage.setItem("key", "value");\nlocalStorage.getItem("key");\nlocalStorage.removeItem("key");\n\n# Session Storage\nsessionStorage; - View session storage\nsessionStorage.setItem("key", "value");\n\n# Cookie Management\ndocument.cookie; - View cookies\ndocument.cookie = "name=value; expires=...; path=/"',
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Sources Panel Deep Dive',
      commands: [
        {
          command: 'Source File Navigation',
          description: 'Navigate and manage source files efficiently',
          usage: 'File tree and search features',
          example: '# Edge File Navigation\n\n# File Tree Navigation\nSources panel → File tree\nArrow keys - Navigate files\nEnter - Open file\nRight-click - File context menu\n\n# Quick File Opening\nCtrl+P (Windows/Linux) / Cmd+P (Mac) - Quick open file dialog\nType filename - Search files\n:line:column - Go to specific line\n\n# File Search\nCtrl+Shift+F (Windows/Linux) / Cmd+Option+F (Mac) - Search across all files\nCtrl+F - Search in current file\nCtrl+G - Go to line',
        },
        {
          command: 'Source Maps Configuration',
          description: 'Enable and configure source maps for debugging',
          usage: 'Settings → Sources → Enable source maps',
          example: '# Edge Source Maps Setup\n\n# Enable Source Maps\nSettings → Sources\n- Enable JavaScript source maps\n- Enable CSS source maps\n\n# Source Map Benefits\nDebug original source code\nMap compiled to source\nBetter error stack traces\n\n# Source Map Types\nInline source maps - Embedded in files\nExternal source maps - Separate .map files',
        },
        {
          command: 'Code Snippets Creation',
          description: 'Create and manage reusable code snippets',
          usage: 'Sources panel → Snippets tab',
          example: '# Edge Code Snippets\n\n# Create Snippet\nSources panel → Snippets → New snippet\n\n# Snippet Usage\nWrite code in snippet editor\nRight-click → Run or Ctrl+Enter\n\n# Snippet Examples\n// Utility functions\nfunction logElement(selector) {\n  console.log(document.querySelector(selector));\n}\n\n// Test code\ndocument.body.style.backgroundColor = "red";',
        },
        {
          command: 'Workspace Setup and File Mapping',
          description: 'Map local files to network resources',
          usage: 'Sources → Filesystem → Add folder',
          example: '# Edge Workspace Setup\n\n# Add Local Folder\nSources → Filesystem → Add folder\nChoose local directory\n\n# Map Network Resources\nMap local files to network resources\nLive editing with auto-save\n\n# Benefits\nEdit local files directly\nChanges apply immediately\nPersistent file mapping\nVersion control integration',
        },
        {
          command: 'JavaScript Breakpoint Management',
          description: 'Set and manage various types of breakpoints',
          usage: 'Click line number or right-click in Sources panel',
          example: '# Edge Breakpoint Types\n\n# Line Breakpoints\nClick line number - Set breakpoint\nRight-click → Add breakpoint\n\n# Conditional Breakpoints\nRight-click → Add conditional breakpoint\nExpression must be true\n\n# Logpoints\nRight-click → Add logpoint\nLog message without stopping\n\n# Breakpoint Controls\nRight-click breakpoint - Edit condition\nDisable breakpoint - Turn off temporarily\nDelete breakpoint - Remove breakpoint',
        },
        {
          command: 'Step Debugging Controls',
          description: 'Navigate code execution step by step',
          usage: 'Debugging toolbar controls',
          example: '# Edge Step Debugging\n\n# Debugging Controls\nF8 - Resume/Pause\nF10 - Step over\nF11 - Step into\nShift+F11 - Step out\nCtrl+Shift+F8 (Windows/Linux) / Cmd+Shift+F8 (Mac) - Stop on exceptions\n\n# Call Stack\nCall Stack panel - View execution stack\nClick frame - Jump to execution context\nAsync checkbox - Show async stack traces',
        },
        {
          command: 'Variable and Scope Inspection',
          description: 'Inspect and modify variables during debugging',
          usage: 'Scope panel and variable hover',
          example: '# Edge Variable Inspection\n\n# Scope Panel\nScope panel - View local and global variables\nVariable hover - Quick value preview\nVariable editing - Modify values during debug\n\n# Watch Expressions\nAdd watch - Monitor specific expressions\nEdit watch - Modify watch expression\nDelete watch - Remove watch\n\n# Variable Types\nLocal variables - Function scope\nClosure variables - Closure scope\nGlobal variables - Window/global scope',
        },
        {
          command: 'Live Editing and Overrides',
          description: 'Edit code in real-time with persistent changes',
          usage: 'Sources panel → Overrides',
          example: '# Edge Live Editing\n\n# Inline Editing\nDouble-click code - Edit mode\nCtrl+S (Windows/Linux) / Cmd+S (Mac) - Save changes\nCtrl+Z - Undo\nCtrl+Y - Redo\n\n# Local Overrides\nSources → Overrides → + Select folder\nNetwork panel → Right-click response → Save for overrides\n\n# Override Benefits\nChanges persist across reloads\nEdit local files instead of network\nAuto-save changes immediately',
        },
      ],
    },
    {
      title: 'Network Panel Mastery',
      commands: [
        {
          command: 'Network Request Monitoring',
          description: 'Monitor and analyze network requests',
          usage: 'Network panel recording and filtering',
          example: '# Edge Network Monitoring\n\n# Start Recording\nRecord button (red dot) - Start/stop recording\nAuto-refresh on navigation - Automatic recording\n\n# Request Filtering\nFilter input box - Filter requests\nURL filtering - Filter by URL\nType filtering - Filter by resource type\nStatus filtering - Filter by status code\n\n# Resource Types\n- XHR/Fetch - AJAX requests\n- JS - JavaScript files\n- CSS - Stylesheets\n- Img - Images\n- Media - Video/audio',
        },
        {
          command: 'Request Analysis and Inspection',
          description: 'Detailed analysis of individual requests',
          usage: 'Click request to view details',
          example: '# Edge Request Details\n\n# Request Overview\nName - Resource name\nStatus - HTTP status code\nType - Resource type\nInitiator - What triggered request\nSize - Response size\nTime - Request duration\n\n# Request Headers\nHeaders tab - View all headers\nRequest headers - Sent headers\nResponse headers - Received headers\n\n# Response Analysis\nPreview tab - Rendered response\nResponse tab - Raw response data\nInitiator tab - Call stack\nTiming tab - Detailed timing',
        },
        {
          command: 'Network Performance Analysis',
          description: 'Analyze network performance and bottlenecks',
          usage: 'Waterfall view and timing breakdown',
          example: '# Edge Performance Analysis\n\n# Timing Breakdown\nWaterfall view - Visual timeline\nQueueing - Time in queue\nStalled - Time before request\nRequest start - Request sent time\nResponse time - Time to first byte\nContent download - Download time\n\n# Performance Metrics\nTotal page weight - All resources size\nNumber of requests - Total HTTP requests\nLoad time - Page load duration\nDOMContentLoaded - DOM ready time\nLoad event - Full page load time',
        },
        {
          command: 'Network Conditions Simulation',
          description: 'Simulate different network conditions',
          usage: 'Throttling dropdown in Network panel',
          example: '# Edge Network Simulation\n\n# Throttling Options\nNo throttling - Full speed\nSlow 3G - 3G simulation\nFast 3G - Faster 3G\nCustom - Custom settings\n\n# Custom Throttling\nDownload speed - Set download limit\nUpload speed - Set upload limit\nLatency - Set round-trip time\n\n# Testing Scenarios\nOffline testing - No network\nMobile simulation - 3G/4G speeds\nPoor connection - High latency',
        },
        {
          command: 'Advanced Network Debugging',
          description: 'Deep network analysis and troubleshooting',
          usage: 'Advanced network features and tools',
          example: '# Edge Advanced Network Features\n\n# Export HAR Data\nRight-click → Save as HAR\nImport HAR files\n\n# Request Blocking\nBlock specific URLs\nPattern matching\n\n# WebSockets\nWS tab - WebSocket connections\nFrames view - Message history\nSend/Receive filters - Filter messages\n\n# Service Workers\nService Workers tab - SW registration status\nOffline mode - Test offline behavior',
        },
      ],
    },
    {
      title: 'Performance Panel Expert Guide',
      commands: [
        {
          command: 'Performance Recording Setup',
          description: 'Configure and start performance recordings',
          usage: 'Performance panel → Record button',
          example: '# Edge Performance Recording\n\n# Start Recording\nPerformance panel → Record button (circle)\nRecord reload button - Record page reload\n\n# Recording Process\n1. Click Record (red circle)\n2. Interact with page\n3. Click Stop (square)\n4. Analyze results\n\n# Recording Settings\nCapture screenshots - Visual timeline\nDisable JavaScript samples - Reduce overhead\nNetwork throttling - Simulate conditions\nCPU throttling - Limit CPU usage',
        },
        {
          command: 'Performance Metrics Analysis',
          description: 'Analyze key performance indicators',
          usage: 'Performance metrics and timing analysis',
          example: '# Edge Performance Metrics\n\n# Key Metrics\nFPS - Frames per second\nCPU usage - Processor utilization\nNET - Network activity\nHEAP - Memory usage\n\n# Timeline View\nMain thread - JavaScript execution\nCompositor thread - Rendering work\nRaster thread - Drawing operations\nGPU - GPU activity\n\n# Performance Indicators\nLong tasks - Identify blocking operations\nLayout shifts - Unwanted element movement\nPaint time - Rendering duration',
        },
        {
          command: 'Flame Chart Analysis',
          description: 'Analyze function execution with flame charts',
          usage: 'Flame chart view in Performance panel',
          example: '# Edge Flame Chart Analysis\n\n# Flame Chart Features\nFunction execution - Visual call hierarchy\nSelf time - Function execution time\nTotal time - Including child calls\n\n# Analysis Techniques\nWide bars - Long execution time\nDeep stacks - Complex call chains\nHot functions - Performance bottlenecks\n\n# Navigation\nZoom in/out - Scroll or use controls\nClick function - Jump to source\nSearch functions - Filter by name',
        },
        {
          command: 'Memory Profiling Basics',
          description: 'Profile memory usage and detect leaks',
          usage: 'Memory panel → Heap snapshot',
          example: '# Edge Memory Profiling\n\n# Heap Snapshots\nMemory panel → Heap snapshot\nTake snapshot button - Capture current memory\n\n# Snapshot Types\nHeap snapshot - Current memory state\nComparison snapshot - Compare two states\nAllocation timeline - Track allocations over time\n\n# Memory Analysis\nObjects - All allocated objects\nConstructor names - Object types\nRetained size - Memory kept by object\nShallow size - Object direct size',
        },
        {
          command: 'Memory Leak Detection',
          description: 'Identify and fix memory leaks',
          usage: 'Comparison snapshots and analysis',
          example: '# Edge Memory Leak Detection\n\n# Comparison Analysis\nTake baseline snapshot - Initial state\nPerform actions - Execute code\nTake comparison snapshot - Compare states\n\n# Leak Indicators\nGrowing heap size - Memory not released\nDetached DOM nodes - Unreferenced elements\nEvent listeners - Unremoved listeners\nClosures - Unreleased variables\n\n# Retainers Analysis\nRetainer paths - What keeps objects alive\nReference chains - Object relationships',
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Application Panel Deep Dive',
      commands: [
        {
          command: 'Local Storage Inspection',
          description: 'Inspect and manage localStorage data',
          usage: 'Application → Local Storage',
          example: '# Edge Local Storage\n\n# Access Local Storage\nApplication → Local Storage\nView key-value pairs\n\n# Storage Operations\nEdit values directly\nAdd/remove items\nClear storage\n\n# Storage API\nlocalStorage.setItem("key", "value");\nlocalStorage.getItem("key");\nlocalStorage.removeItem("key");\nlocalStorage.clear();',
        },
        {
          command: 'Session Storage Management',
          description: 'Work with session-specific storage',
          usage: 'Application → Session Storage',
          example: '# Edge Session Storage\n\n# Access Session Storage\nApplication → Session Storage\nTab-specific storage\n\n# Storage Characteristics\nSession-lifetime data\n5-10 MB limit\nString-only values\n\n# Storage API\nsessionStorage.setItem("key", "value");\nsessionStorage.getItem("key");\nsessionStorage.removeItem("key");',
        },
        {
          command: 'Cookie Inspection and Management',
          description: 'Inspect, edit, and manage cookies',
          usage: 'Application → Cookies',
          example: '# Edge Cookie Management\n\n# Cookie Inspection\nApplication → Cookies\nView all cookies\n\n# Cookie Operations\nEdit cookie values\nAdd new cookies\nDelete cookies\n\n# Cookie Properties\nName/Value - Cookie data\nDomain/Path - Scope restrictions\nExpires/Max-Age - Lifetime\nSecure/HttpOnly - Security flags',
        },
        {
          command: 'IndexedDB Database Inspection',
          description: 'Inspect and query IndexedDB databases',
          usage: 'Application → IndexedDB',
          example: '# Edge IndexedDB\n\n# Database Inspection\nApplication → IndexedDB\nDatabase browsing\n\n# Database Operations\nObject store viewing\nData editing\nQuery execution\n\n# IndexedDB Features\nNoSQL database\nLarge storage capacity\nTransaction support\nIndex-based queries',
        },
        {
          command: 'Service Worker Debugging',
          description: 'Debug service workers and offline functionality',
          usage: 'Application → Service Workers',
          example: '# Edge Service Workers\n\n# Service Worker Panel\nApplication → Service Workers\nRegistration status\nActive worker\nWaiting worker\n\n# Service Worker Lifecycle\nRegistering - Initial registration\nInstalled - Download complete\nActivating - Becoming active\nActivated - Controlling pages\nRedundant - Replaced by new version',
        },
        {
          command: 'Cache Storage Inspection',
          description: 'Inspect service worker caches',
          usage: 'Application → Cache Storage',
          example: '# Edge Cache Storage\n\n# Cache Inspection\nApplication → Cache Storage\nService worker caches\n\n# Cache Operations\nCache inspection\nCache contents\nCache management\n\n# Cache Strategies\nCache-first strategy\nNetwork-first strategy\nStale while revalidate\nBackground updates',
        },
        {
          command: 'Progressive Web App Analysis',
          description: 'Analyze PWA manifest and features',
          usage: 'Application → Manifest',
          example: '# Edge PWA Analysis\n\n# Web App Manifest\nApplication → Manifest\nManifest validation\nIcon inspection\nDisplay properties\n\n# PWA Features\nService worker integration\nOffline functionality\nApp-like experience\nInstall capabilities\n\n# Manifest Properties\nname/short_name - App names\nicons - App icons\ndisplay - Display mode\nstart_url - App start URL',
        },
      ],
    },
    {
      title: 'Security Panel and Privacy',
      commands: [
        {
          command: 'Security Overview Analysis',
          description: 'Analyze page security and certificate information',
          usage: 'Security panel overview',
          example: '# Edge Security Overview\n\n# Security Panel\nSecurity panel - Connection security overview\n\n# Security Information\nConnection security - HTTPS status\nCertificate details - SSL/TLS info\nOrigin security - Page security assessment\n\n# Security Recommendations\nMixed content warnings - HTTP/HTTPS issues\nInsecure resources - Security risks\nCertificate problems - Invalid certificates',
        },
        {
          command: 'Certificate Inspection',
          description: 'Inspect SSL/TLS certificate details',
          usage: 'Security panel → Certificate details',
          example: '# Edge Certificate Inspection\n\n# Certificate Details\nCertificate chain - Certificate hierarchy\nIssuer information - Certificate authority\nValidity period - Expiration dates\nProtocol version - TLS version\nCipher suite - Encryption method\n\n# Certificate Validation\nCertificate transparency - Log verification\nSignature algorithm - Signing method\nPublic key - Encryption key',
        },
        {
          command: 'Mixed Content Analysis',
          description: 'Identify and fix mixed content security issues',
          usage: 'Security panel mixed content warnings',
          example: '# Edge Mixed Content Analysis\n\n# Mixed Content Types\nActive mixed content - Scripts, styles, iframes\nPassive mixed content - Images, audio, video\n\n# Security Risks\nMan-in-the-middle attacks\nData interception\nContent tampering\n\n# Resolution Strategies\nUpgrade to HTTPS resources\nUse protocol-relative URLs\nContent Security Policy (CSP)',
        },
      ],
    },
    {
      title: 'Lighthouse and Performance Auditing',
      commands: [
        {
          command: 'Lighthouse Performance Auditing',
          description: 'Run comprehensive performance audits using Lighthouse',
          usage: 'Lighthouse panel in DevTools',
          example: '# Edge Lighthouse Auditing\n\n# Running Lighthouse\nLighthouse panel - Generate report\nCategories: Performance, PWA, Best Practices, SEO, Accessibility\n\n# Performance Metrics\nFirst Contentful Paint (FCP)\nLargest Contentful Paint (LCP)\nFirst Input Delay (FID)\nCumulative Layout Shift (CLS)\nTime to Interactive (TTI)\n\n# Optimization Opportunities\nImage optimization\nJavaScript bundling\nCSS minification\nResource caching',
        },
        {
          command: 'Web Vitals Monitoring',
          description: 'Monitor Core Web Vitals for user experience',
          usage: 'Lighthouse and Performance panel',
          example: '# Edge Core Web Vitals\n\n# LCP - Largest Contentful Paint\nMeasure loading performance\nTarget: < 2.5 seconds\n\n# FID - First Input Delay\nMeasure interactivity\nTarget: < 100 milliseconds\n\n# CLS - Cumulative Layout Shift\nMeasure visual stability\nTarget: < 0.1\n\n# Monitoring Tools\nLighthouse - Lab data\nChrome User Experience Report - Field data\nWeb Vitals extension - Real user monitoring',
        },
        {
          command: 'Accessibility Auditing',
          description: 'Audit and improve website accessibility',
          usage: 'Lighthouse accessibility category',
          example: '# Edge Accessibility Auditing\n\n# Lighthouse Accessibility\nAccessibility category - Comprehensive audit\n\n# Audit Areas\nColor contrast - Text readability\nKeyboard navigation - Accessibility without mouse\nScreen reader support - ARIA labels and roles\nFocus management - Logical tab order\n\n# Accessibility Tools\nAccessibility panel - Element inspection\nAccessibility tree - DOM accessibility structure\nARIA inspection - ARIA attributes validation',
        },
      ],
    },
    {
      title: 'Advanced Debugging Techniques',
      commands: [
        {
          command: 'Conditional Breakpoints',
          description: 'Set breakpoints that trigger on specific conditions',
          usage: 'Right-click line number → Add conditional breakpoint',
          example: '# Edge Conditional Breakpoints\n\n# Set Conditional Breakpoint\nRight-click line number → Add conditional breakpoint\nExpression must be true\n\n# Condition Examples\nx > 10 - Break when x greater than 10\narray.length === 0 - Break when array empty\nelement.classList.contains(\'active\') - Break when element has class\n\n# Complex Conditions\nuser.isAdmin && user.age >= 18\nresponse.status >= 400\nDate.now() - startTime > 5000',
        },
        {
          command: 'Logpoints for Debugging',
          description: 'Add logging without breaking execution',
          usage: 'Right-click line number → Add logpoint',
          example: '# Edge Logpoints\n\n# Add Logpoint\nRight-click line number → Add logpoint\nLog message without stopping\n\n# Logpoint Examples\n"Variable x value: " + x\n"Array length: " + array.length\n"User object: " + JSON.stringify(user)\n\n# Template Literals\n`Current time: ${new Date().toISOString()}`\n`Element class: ${element.className}`\n`API response: ${JSON.stringify(response)}`',
        },
        {
          command: 'DOM Mutation Breakpoints',
          description: 'Break on DOM changes and mutations',
          usage: 'Right-click element → Break on',
          example: '# Edge DOM Mutation Breakpoints\n\n# Set DOM Breakpoints\nRight-click element → Break on\n\n# Breakpoint Types\nSubtree modifications - Child changes\nAttribute modifications - Attribute changes\nNode removal - Element deletion\n\n# Usage Scenarios\nDebug dynamic content\nTrack SPA navigation\nMonitor form changes\nDetect unwanted modifications',
        },
        {
          command: 'Event Listener Breakpoints',
          description: 'Break on specific DOM events',
          usage: 'Sources panel → Event Listener Breakpoints',
          example: '# Edge Event Listener Breakpoints\n\n# Event Categories\nMouse events (click, mousedown, etc.)\nKeyboard events (keydown, keyup, etc.)\nTouch events (touchstart, etc.)\nForm events (submit, change, etc.)\n\n# Set Event Breakpoints\nSources panel → Event Listener Breakpoints\nFilter by event type\nEnable specific events\n\n# Common Events\nclick - Mouse clicks\nkeydown - Key presses\nsubmit - Form submissions\nload - Resource loading',
        },
        {
          command: 'XHR/Fetch Request Breakpoints',
          description: 'Break on network requests',
          usage: 'Sources panel → XHR/Fetch Breakpoints',
          example: '# Edge XHR/Fetch Breakpoints\n\n# Request Breakpoints\nSources panel → XHR/Fetch Breakpoints\nBreak on any XHR\nURL pattern matching\n\n# URL Pattern Examples\n*/api/users* - API endpoints\n*.json - JSON requests\n*/debug* - Debug endpoints\n\n# Use Cases\nDebug API calls\nIntercept requests\nModify request data\nTest error handling',
        },
        {
          command: 'Async Function Debugging',
          description: 'Debug promises and async/await code',
          usage: 'Async stack traces and promise inspection',
          example: '# Edge Async Debugging\n\n# Promise Inspection\nPromise state inspection\nAsync stack traces\nAwait debugging\n\n# Async Features\nAsync checkbox - Show async stack frames\nPromise state - Pending/fulfilled/rejected\nStack traces - Show async call chains\n\n# Debugging Techniques\nawait breakpoint - Step through async\nPromise inspection - View state\nError handling - Catch async errors',
        },
        {
          command: 'Blackboxing Scripts',
          description: 'Ignore third-party code during debugging',
          usage: 'Sources panel → Blackbox script',
          example: '# Edge Blackboxing Scripts\n\n# Blackbox Third-party Code\nRight-click script → Blackbox script\nIgnore third-party code\nFramework blackboxing\n\n# Benefits\nSkip library code\nFocus on application code\nCleaner call stacks\nFaster debugging\n\n# Common Blackboxes\njQuery, React, Angular\nLibrary files\nMinified code\nThird-party frameworks',
        },
      ],
    },
    {
      title: 'Edge-Specific Features',
      commands: [
        {
          command: 'Edge Collections Integration',
          description: 'Use Edge Collections for web research and organization',
          usage: 'Collections panel and integration',
          example: '# Edge Collections Integration\n\n# Collections Panel\nCollections tab - Web content organization\nSave pages, images, and text\nOrganize into collections\n\n# DevTools Integration\nAdd to Collections - Save inspected elements\nResearch mode - Collect debugging information\n\n# Usage Scenarios\nBug tracking - Collect problematic elements\nResearch - Gather related resources\nDocumentation - Save debugging sessions\n\n# Edge Specific\nCross-device sync - Collections sync across devices\nSharing - Share collections with team',
        },
        {
          command: 'Edge Immersive Reader Integration',
          description: 'Test and debug Immersive Reader compatibility',
          usage: 'Immersive Reader testing tools',
          example: '# Edge Immersive Reader\n\n# Immersive Reader Testing\nEnter Immersive Reader - Test content compatibility\nReading preferences - Font, spacing, colors\n\n# Debugging Features\nContent extraction - Test text extraction\nImage handling - Verify image processing\nReading View - Test reading experience\n\n# Edge Specific\nLearning tools - Educational features\nAccessibility - Reading accessibility\n\n# Usage\nTest content readability\nVerify Immersive Reader support\nDebug reading experience',
        },
        {
          command: 'Edge Web Select and Capture',
          description: 'Use Edge\'s advanced capture and selection features',
          usage: 'Web Select and capture tools',
          example: '# Edge Web Select and Capture\n\n# Web Select Tool\nWeb Select - Advanced text selection\nCopy formatted content\nExtract structured data\n\n# Capture Features\nScroll capture - Full page screenshots\nArea capture - Selective screenshots\nScreen recording - Record interactions\n\n# Edge Specific\nSmart copy - Format-aware copying\nPDF capture - Save as PDF\n\n# Usage\nDebug content extraction\nTest copy functionality\nCapture bugs for documentation',
        },
        {
          command: 'Edge Vertical Tabs and Layouts',
          description: 'Debug for Edge\'s unique UI layouts',
          usage: 'Vertical tabs and layout testing',
          example: '# Edge Vertical Tabs\n\n# Vertical Tabs Testing\nToggle vertical tabs - Test layout adaptation\nSide panel testing - Verify sidebar compatibility\n\n# Layout Features\nVertical tab groups - Test tab organization\nSplit screen - Multi-window debugging\n\n# Edge Specific\nLayout adaptation - Responsive to vertical layout\nUI integration - DevTools placement\n\n# Usage\nTest vertical tab compatibility\nDebug layout issues\nOptimize for Edge UI',
        },
        {
          command: 'Edge Performance and Power Features',
          description: 'Optimize for Edge performance and battery life',
          usage: 'Edge-specific performance tools',
          example: '# Edge Performance Features\n\n# Efficiency Mode\nBattery optimization - Power saving\nPerformance tuning - Resource management\n\n# Edge-Specific Metrics\nSleeping tabs - Memory optimization\nStartup boost - Faster launch\n\n# Debugging Tools\nPerformance monitor - Resource usage\nPower usage - Battery consumption\n\n# Edge Specific\nHardware acceleration - GPU utilization\nMemory efficiency - Edge optimization\n\n# Usage\nOptimize for battery life\nImprove Edge performance\nDebug power issues',
        },
        {
          command: 'Microsoft Integration Features',
          description: 'Leverage Microsoft ecosystem integration',
          usage: 'Microsoft 365 and Azure integration',
          example: '# Edge Microsoft Integration\n\n# Microsoft 365 Integration\nOffice integration - Web Office apps\nOneDrive sync - Cloud storage\nSharePoint - Enterprise collaboration\n\n# Azure Integration\nAzure DevTools - Cloud debugging\nApp Service integration - Web app testing\n\n# Edge Specific\nEnterprise features - Business tools\nSecurity integration - Microsoft security\n\n# Usage\nTest Microsoft integrations\nDebug enterprise features\nOptimize for Microsoft ecosystem',
        },
      ],
    },
    {
      title: 'Productivity and Workflow Optimization',
      commands: [
        {
          command: 'Essential Keyboard Shortcuts',
          description: 'Must-know shortcuts for maximum productivity',
          usage: 'Keyboard combinations for efficiency',
          example: '# Edge Essential Shortcuts\n\n# Panel Navigation\nCtrl+Shift+I (Windows/Linux) / Cmd+Option+I (Mac) - Open DevTools\nCtrl+1-9 (Windows/Linux) / Cmd+1-9 (Mac) - Switch to panel\nCtrl+Tab (Windows/Linux) / Cmd+Tab (Mac) - Next panel\nEsc - Toggle console drawer\n\n# Element Inspection\nCtrl+Shift+C (Windows/Linux) / Cmd+Option+C (Mac) - Element selector\n\n# Console\nCtrl+Shift+J (Windows/Linux) / Cmd+Option+J (Mac) - Console\nCtrl+L - Clear console\n\n# Debugging\nF8 - Resume/Pause\nF10 - Step over\nF11 - Step into\nShift+F11 - Step out',
        },
        {
          command: 'Command Menu Mastery',
          description: 'Universal command search for all features',
          usage: 'Ctrl+Shift+P (Windows/Linux) / Cmd+Shift+P (Mac)',
          example: '# Edge Command Menu Power Usage\nCtrl+Shift+P (Windows/Linux) / Cmd+Shift+P (Mac)\n\n# Feature Discovery\nType any DevTools feature name\nSearch by functionality\nDiscover hidden tools\nAccess experimental features\n\n# Quick Actions\nDisable JavaScript\nEnable device toolbar\nCapture screenshot\nClear site data\nEmpty cache and hard reload\nEmulate CSS media type\nApply device metrics\nNetwork conditions\nUser agent\nGeolocation\nSensors',
        },
        {
          command: 'Workspace Customization',
          description: 'Set up personalized development workspace',
          usage: 'Settings and workspace configuration',
          example: '# Edge Workspace Setup\n\n# Local Workspace\nSources → Filesystem → Add folder\nMap local files\nLive editing\n\n# Custom Settings\nSettings → Preferences\nCustom themes\nShortcut customization\nPanel layout\n\n# Workspace Features\nFile mapping\nOverride configuration\nPersistent mapping\nSnippets library\n\n# Edge Specific\nCollections integration - Research workspace\nMicrosoft sync - Cross-device settings',
        },
        {
          command: 'Device Emulation and Testing',
          description: 'Test across different devices and screen sizes',
          usage: 'Device toolbar and responsive design testing',
          example: '# Edge Device Emulation\n\n# Device Toolbar\nToggle device toolbar\nDevice selection\nScreen resolution\n\n# Responsive Design\nViewport resizing\nBreakpoint testing\nMedia query debugging\n\n# Device Simulation\niPhone simulation\nAndroid simulation\nTouch event simulation\n\n# Network Simulation\n3G/4G simulation\nOffline testing\nLatency simulation\n\n# Edge Specific\nSurface device testing - Microsoft hardware\nXbox compatibility - Console testing',
        },
        {
          command: 'Extension Integration',
          description: 'Enhance DevTools with third-party extensions',
          usage: 'Chrome Web Store and extension management',
          example: '# Edge DevTools Extensions\n\n# Popular Extensions\nReact Developer Tools\nVue.js devtools\nAngular DevTools\nRedux DevTools\n\n# Performance Extensions\nLighthouse\nWebPageTest\nPageSpeed Insights\n\n# Debugging Extensions\nJavaScript Errors\nConsole Importer\nCSS Peeper\n\n# Edge Specific\nMicrosoft Store extensions - Edge-optimized\nEnterprise extensions - Business tools\n\n# Installation\nChrome Web Store (compatible)\nEdge Add-ons store\nDevelopment mode',
        },
        {
          command: 'Automation and Scripting',
          description: 'Automate repetitive tasks with scripts',
          usage: 'Console scripting and automation',
          example: '# Edge DevTools Automation\n\n# Console Scripting\n// Auto-refresh page\nsetInterval(() => location.reload(), 5000);\n\n// Performance testing\nconsole.time("test");\n// Code to test\nconsole.timeEnd("test");\n\n// DOM manipulation\ndocument.querySelectorAll(".error").forEach(el => el.remove());\n\n# Automation Tools\n// Custom functions\nfunction clearStorage() {\n  localStorage.clear();\n  sessionStorage.clear();\n}\n\n// Batch operations\n$$(".old-class").forEach(el => el.classList.replace("old-class", "new-class"));\n\n# Edge Specific\nCollections API - Programmatically manage collections\nPowerShell integration - Windows automation',
        },
      ],
    },
  ],
};
