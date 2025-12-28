import { Monitor } from 'lucide-react';

export const safariCheatsheet = {
  id: 'safari-web-inspector',
  name: 'Safari Web Inspector',
  description: 'Master Safari Web Inspector from basics to expert debugging, performance analysis, and web development (Safari 17+)',
  icon: Monitor,
  colorTheme: 'indigo' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Safari Web Inspector',
      commands: [
        {
          command: 'Enable Developer Menu and Web Inspector',
          description: 'Enable developer features and access Web Inspector',
          usage: 'Safari > Preferences > Advanced > Show Develop menu',
          example: '# Enable Developer Menu\n\n# Step 1: Enable Developer Menu\nSafari → Preferences → Advanced\nCheck "Show Develop menu in menu bar"\n\n# Step 2: Access Web Inspector\nDevelop → Show Web Inspector\n\n# Keyboard Shortcuts\nCmd+Option+I - Open Web Inspector\nCmd+Option+C - Open Console directly\nCmd+Option+R - Responsive Design Mode\n\n# Context Menu Access\nRight-click → Inspect Element\n\n# Menu Bar Access\nDevelop → Show Web Inspector\nDevelop → Show JavaScript Console\nDevelop → Enter Responsive Design Mode',
        },
        {
          command: 'Safari Web Inspector Key Components',
          description: 'Essential panels and their purposes',
          usage: 'Understanding each Web Inspector panel',
          example: '# Safari Web Inspector Panels\n\n# Elements Panel\nDOM and CSS inspection\nReal-time style editing\nBox model visualization\n\n# Console Panel\nJavaScript debugging and logging\nInteractive programming\nError monitoring\n\n# Sources Panel\nScript debugging and editing\nSource maps\nFile workspace\n\n# Network Panel\nNetwork request monitoring\nPerformance analysis\nResource inspection\n\n# Timeline Panel\nRuntime performance analysis\nFlame charts\nMemory profiling\n\n# Memory Panel\nHeap snapshots\nMemory leak detection\nAllocation tracking\n\n# Storage Panel\nStorage inspection\nService workers\nProgressive web apps\n\n# Layers Panel\nCompositing layers\nGPU acceleration\nPaint profiling',
        },
        {
          command: 'Opening Web Inspector and Navigation',
          description: 'Quick access methods and efficient panel navigation',
          usage: 'Keyboard shortcuts and menu access',
          example: '# Safari Web Inspector Navigation\n\n# Panel Access\nCmd+Option+I - Open Web Inspector\nCmd+Option+C - Open Console directly\n\n# Panel Switching\nCmd+1, Cmd+2, ... - Switch to panel by number\nCmd+Tab - Next panel\nCmd+Shift+Tab - Previous panel\nEsc - Toggle console drawer\n\n# Element Inspection\nCmd+Option+C - Element selector mode\n\n# Responsive Design\nCmd+Option+R - Responsive Design Mode\n\n# Menu Navigation\nDevelop menu - All developer options\nRight-click context - Quick element inspection',
        },
        {
          command: 'Essential Settings and Configuration',
          description: 'Customizing Web Inspector for optimal workflow',
          usage: 'Settings menu and preferences',
          example: '# Safari Web Inspector Settings\n\n# Access Settings\nWeb Inspector → Gear icon → Settings\n\n# Essential Preferences\n\n## Appearance\n- Theme: Light/Dark/System preference\n- Panel layout: Horizontal/Vertical\n- Show whitespace characters\n- Enable source maps\n\n## Elements\n- Show user agent shadow DOM\n- Show HTML comments\n- Word wrap: On/Off\n- Highlight DOM updates on change\n\n## Console\n- Enable timestamp display\n- Log network requests\n- Persist logs across navigation\n\n## Sources\n- Enable JavaScript source maps\n- Enable CSS source maps\n- Search in content scripts',
        },
        {
          command: 'Safari Specific Configuration',
          description: 'Safari-specific settings and advanced options',
          usage: 'Develop menu and experimental features',
          example: '# Safari Advanced Configuration\n\n# Develop Menu Options\nDevelop → Disable Cross-Origin Restrictions\nDevelop → Disable JavaScript\nDevelop → Disable Caches\nDevelop → Allow JavaScript from Apple Events\n\n# Experimental Features\nSafari → Preferences → Advanced\nExperimental features - Enable new Web Inspector tools\n\n# Web Inspector Extensions\nDevelop → Allow Web Extensions\nExtension debugging support\n\n# iOS Simulator\nDevelop → iOS Simulator\nTest on iOS devices and simulators\n\n# Advanced Settings\nabout:config equivalent via Develop menu\nAdvanced debugging options',
        },
        {
          command: 'Command Menu and Quick Actions',
          description: 'Universal command search for all features',
          usage: 'Cmd+Shift+P for command menu',
          example: '# Safari Command Menu\n\n# Command Menu Access\nCmd+Shift+P - Universal command search\n\n# Popular Commands\n- Show Elements Panel\n- Show Console Panel\n- Show Sources Panel\n- Show Network Panel\n- Show Timeline Panel\n- Show Memory Panel\n- Show Storage Panel\n- Show Layers Panel\n\n# Quick Actions\n- Disable JavaScript\n- Enter Responsive Design Mode\n- Clear Caches\n- Disable Caches\n- Allow Unsigned Scripts\n- Show Page Source\n- Audit Page Performance',
        },
      ],
    },
    {
      title: 'Elements Panel Mastery',
      commands: [
        {
          command: 'Element Selection Mode',
          description: 'Enter element selection mode for inspection',
          usage: 'Cmd+Option+C or element selector tool',
          example: '# Safari Element Selection\n\n# Activate Selection Mode\nCmd+Option+C - Element selector mode\nClick element selector icon in toolbar\n\n# Usage\n1. Activate selection mode\n2. Hover over elements to highlight\n3. Click element to inspect\n4. Elements panel opens with selected element\n\n# Selection Tips\n- Hover shows element tooltip\n- Click selects and inspects\n- ESC to exit selection mode\n- Visual highlight shows selection area',
        },
        {
          command: 'DOM Tree Navigation',
          description: 'Navigate DOM tree efficiently',
          usage: 'Arrow keys and keyboard navigation',
          example: '# Safari DOM Tree Navigation\n\n# Keyboard Navigation\nArrow keys - Navigate DOM tree\nRight arrow - Expand collapsed element\nLeft arrow - Collapse element\nHome/End - First/last child\n\n# Element Search\nCmd+F - Search within current panel\nCmd+Option+F - Search across all sources\n\n# DOM Tree Manipulation\nDrag element - Reorder DOM elements\nDelete key - Remove selected element\nEnter - Edit element as HTML\n\n# Tree Expansion\nCmd+Click - Expand/collapse all\nOption+Click - Expand subtree',
        },
        {
          command: 'Element State Inspection',
          description: 'Force element states for debugging',
          usage: 'Right-click element → Force pseudo-class',
          example: '# Safari Element State Inspection\n\n# Force Element States\nRight-click element → Force pseudo-class\n\n# Available States\n:hover - Force hover state\n:active - Force active state\n:focus - Force focus state\n:visited - Force visited state\n\n# Usage Tips\n- Test hover effects without mouse\n- Debug active button states\n- Inspect focus styles\n- Debug visited link states\n\n# State Toggles\nCheck/uncheck states in Computed panel\nMultiple states can be active simultaneously',
        },
        {
          command: 'DOM Breakpoints',
          description: 'Set breakpoints on DOM changes',
          usage: 'Right-click element → Break on',
          example: '# Safari DOM Breakpoints\n\n# Set DOM Breakpoints\nRight-click element → Break on\n\n# Breakpoint Types\n- Subtree modifications\n- Attribute modifications\n- Node removal\n\n# Usage\n1. Right-click target element\n2. Select "Break on"\n3. Choose breakpoint type\n4. Web Inspector pauses when change occurs\n\n# Management\nBreakpoints panel - View all breakpoints\nRight-click breakpoint - Edit/remove\nDisable/enable breakpoints as needed',
        },
        {
          command: 'Copy Element Information',
          description: 'Copy various element data to clipboard',
          usage: 'Right-click element → Copy',
          example: '# Safari Copy Element Data\n\n# Copy Options\nRight-click element → Copy\n\n# Available Copies\n- Copy inner HTML\n- Copy outer HTML\n- Copy selector\n- Copy XPath\n- Copy CSS path\n- Copy text content\n\n# Usage Examples\n// Copy selector for querySelector\ndocument.querySelector(".copied-selector")\n\n// Copy XPath for document.evaluate\ndocument.evaluate(copiedXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)',
        },
        {
          command: 'CSS Style Editing',
          description: 'Edit CSS properties in real-time',
          usage: 'Click style property to edit',
          example: '# Safari CSS Style Editing\n\n# Style Editing\nClick style property - Edit value\nClick property name - Edit property\nTab/Shift+Tab - Navigate between properties\nEnter - Apply changes\nEscape - Cancel editing\n\n# Adding New Rules\nClick "+" icon - Add new style rule\n.cls { } - Class selector\n#id { } - ID selector\nelement { } - Element selector\n\n# CSS State Styling\n:hover - Toggle hover state\n:active - Toggle active state\n:focus - Toggle focus state',
        },
        {
          command: 'Color and Value Editing',
          description: 'Edit colors and numeric values efficiently',
          usage: 'Click color value or numeric property',
          example: '# Safari Color and Value Editing\n\n# Color Editing\nClick color value - Open color picker\nShift+click color - Cycle through formats\n\n# Numeric Value Editing\nClick value - Edit numeric\nArrow up/down - Increment/decrement by 1\nShift+arrow - Increment/decrement by 10\nOption+arrow - Increment/decrement by 0.1\n\n# Color Formats\nHex: #ff0000\nRGB: rgb(255, 0, 0)\nHSL: hsl(0, 100%, 50%)\nNamed: red\n\n# Value Units\npx, em, rem, %, vw, vh - Automatic unit conversion',
        },
        {
          command: 'CSS Grid and Flexbox Visualization',
          description: 'Visualize layout containers and their properties',
          usage: 'Grid and Flexbox icons in Elements panel',
          example: '# Safari CSS Layout Visualization\n\n# Flexbox Inspector\nFlexbox icon in Elements panel\n- Container properties visualization\n- Item properties display\n- Flex direction, wrap, alignment\n\n# Grid Inspector\nGrid icon in Elements panel\n- Grid lines visualization\n- Grid areas display\n- Track sizing information\n\n# Usage\n1. Select flexbox/grid container\n2. Click layout icon in Styles panel\n3. Visual overlay shows structure\n4. Hover to highlight areas\n\n# Layout Tools\nGrid overlay - Visual grid lines\nFlex overlay - Flex container visualization',
        },
        {
          command: 'Box Model Visualization',
          description: 'Interactive box model diagram for layout debugging',
          usage: 'Styles panel → Box model diagram',
          example: '# Safari Box Model Visualization\n\n# Box Model Diagram\nStyles panel → Box model diagram\n- Content: Blue\n- Padding: Green\n- Border: Yellow\n- Margin: Orange\n\n# Interactive Editing\nClick box model area - Edit corresponding value\nType value + Enter - Apply change\n\n# Layout Properties\nComputed tab → Layout properties\ndisplay: block/inline/flex/grid\nposition: static/relative/absolute/fixed/sticky\n\n# Visual Feedback\nHover over areas - Highlight corresponding CSS\nClick values - Edit directly in diagram',
        },
        {
          command: 'Computed Styles Analysis',
          description: 'View final computed CSS values',
          usage: 'Computed tab in Styles panel',
          example: '# Safari Computed Styles\n\n# View Computed Values\nComputed tab - View final computed values\nShow all - Show all properties\n\n# CSS Inheritance\nTrace inheritance chain\nShow inherited - Include inherited properties\n\n# CSS Debugging\n- Struck-through text: Overridden property\n- Yellow warning: Invalid property\n- Grey text: Inherited property\n\n# Usage Tips\n- Filter by property name\n- Show browser default values\n- Trace inheritance path\n- Group by property category',
        },
      ],
    },
    {
      title: 'Console Panel Fundamentals',
      commands: [
        {
          command: 'Console Access and Navigation',
          description: 'Open console and navigate console features',
          usage: 'Cmd+Option+C and console navigation',
          example: '# Safari Console Access\n\n# Opening Console\nCmd+Option+C - Open Console directly\nCmd+Option+I - Web Inspector then Console tab\nEsc - Toggle console drawer\n\n# Console Navigation\nUp/Down arrows - Navigate command history\nTab - Autocomplete\nCmd+K - Clear console\n\n# Console Context\nTop frame - Main page context\niframe contexts - Switch between frames\nWorker contexts - Service worker console\n\n# Multi-line Mode\nShift+Enter - New line without executing',
        },
        {
          command: 'Basic Console Logging',
          description: 'Essential logging methods for debugging',
          usage: 'console methods for different message types',
          example: '# Safari Console Logging\n\n# Logging Methods\nconsole.log("Hello"); - Simple log\nconsole.error("Error"); - Error message\nconsole.warn("Warning"); - Warning message\nconsole.info("Info"); - Info message\nconsole.debug("Debug"); - Debug message\n\n# Advanced Logging\nconsole.table(data); - Table format\nconsole.group("Group"); - Group messages\nconsole.groupEnd(); - End group\nconsole.time("Timer"); - Start timer\nconsole.timeEnd("Timer"); - End timer\n\n# Safari Specific\nconsole.dir(object); - Object properties\nconsole.dirxml(element); - XML tree',
        },
        {
          command: 'Variable and Expression Evaluation',
          description: 'Inspect variables and evaluate expressions',
          usage: 'Type expressions directly in console',
          example: '# Safari Console Evaluation\n\n# Variable Inspection\nlet x = 10; - Declare variable\nx - Show value\ndir(x) - Show object properties\n\n# Expression Evaluation\n2 + 2 - Math operations\nMath.random() - Function calls\ndocument.title - Property access\n\n# Object Inspection\nkeys(object); - Object keys\nvalues(object); - Object values\ninspect(object); - Object inspection\n\n# Safari Utilities\n$0 - Currently inspected element\n$1 - Previously inspected element\n$2-4 - Element history',
        },
        {
          command: 'Console Query Selectors',
          description: 'Quick DOM querying from console',
          usage: 'Built-in selector shortcuts',
          example: '# Safari Console Query Selectors\n\n# Query Commands\n$("selector") - document.querySelector\n$$("selector") - document.querySelectorAll\n$x("xpath") - document.evaluate\n\n# Usage Examples\n$(".button") - First button\n$$(".button") - All buttons\n$x("//div[@class=\'content\']") - XPath selector\n\n# Chain Commands\n$$(".class").forEach(el => console.log(el));\n\n# Element References\n$0 - Current selected element\n$1-4 - Selection history',
        },
        {
          command: 'Console Settings and Filtering',
          description: 'Customize console output and filtering',
          usage: 'Console panel settings and controls',
          example: '# Safari Console Settings\n\n# Console Controls\nFilter input - Filter console output\nPersist logs - Keep logs on navigation\nHide network - Hide network messages\n\n# Console Methods\nconsole.clear(); - Clear console\ncopy(object) - Copy to clipboard\n\n# Console Formatting\nconsole.log("%c styled", "color: red; font-size: 20px");\nconsole.log("%s %d", "string", 123); - Format strings\n\n# Safari Specific\nconsole.profile(label); - Start profiling\nconsole.profileEnd(label); - End profiling',
        },
        {
          command: 'JavaScript Debugging in Console',
          description: 'Advanced debugging techniques using console',
          usage: 'Breakpoints and debugging commands',
          example: '# Safari Console Debugging\n\n# Breakpoints\ndebugger; - Code breakpoint\nconsole.debugger(); - Conditional debugger\n\n# Debugging Commands\nconsole.assert(condition, message); - Conditional logging\nconsole.count(label); - Counter\nconsole.trace(); - Stack trace\nconsole.profile(label); - CPU profiler\n\n# Error Handling\ntry {\n  // Code that might error\n} catch (error) {\n  console.error("Error:", error);\n}\n\n# Safari Debugging\ndebug(functionName); - Debug function calls\nundebug(functionName); - Stop debugging',
        },
        {
          command: 'Event Monitoring and Debugging',
          description: 'Monitor and debug DOM events',
          usage: 'Event monitoring commands',
          example: '# Safari Event Monitoring\n\n# Event Commands\nmonitorEvents(element, [events]) - Monitor DOM events\nunmonitorEvents(element) - Stop monitoring\ngetEventListeners(element) - Show event listeners\n\n# Usage Examples\nmonitorEvents(document.body, "click");\ngetEventListeners(document.querySelector(".button"));\n\n# Network Debugging\nmonitorEvents(window, "resize");\nunmonitorEvents(window);\n\n# Safari Specific\nmonitorEvents($0, "mouse"); - Monitor current element',
        },
        {
          command: 'Storage Inspection from Console',
          description: 'Inspect browser storage via console',
          usage: 'Access storage APIs directly',
          example: '# Safari Storage Inspection\n\n# Local Storage\nlocalStorage; - View local storage\nlocalStorage.setItem("key", "value");\nlocalStorage.getItem("key");\nlocalStorage.removeItem("key");\n\n# Session Storage\nsessionStorage; - View session storage\nsessionStorage.setItem("key", "value");\n\n# Cookie Management\ndocument.cookie; - View cookies\ndocument.cookie = "name=value; expires=...; path=/"\n\n# Safari Storage\nApplication Cache - Offline storage\nWeb SQL Database - Client-side SQL\nIndexedDB - NoSQL database',
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
          example: '# Safari Sources Navigation\n\n# File Tree Navigation\nSources panel → File tree\nArrow keys - Navigate files\nEnter - Open file\nRight-click - File context menu\n\n# Quick File Opening\nCmd+P - Quick open file dialog\nType filename - Search files\n:line:column - Go to specific line\n\n# File Search\nCmd+Option+F - Search across all files\nCmd+F - Search in current file\nCmd+G - Go to line\n\n# File Operations\nCmd+S - Save file\nCmd+Z - Undo\nCmd+Shift+Z - Redo',
        },
        {
          command: 'Source Maps Configuration',
          description: 'Enable and configure source maps for debugging',
          usage: 'Settings → Sources → Enable source maps',
          example: '# Safari Source Maps Setup\n\n# Enable Source Maps\nSettings → Sources\n- Enable JavaScript source maps\n- Enable CSS source maps\n\n# Source Map Benefits\nDebug original source code\nMap compiled to source\nBetter error stack traces\n\n# Source Map Types\nInline source maps - Embedded in files\nExternal source maps - Separate .map files\n\n# Safari Specific\nSource map debugging - Enhanced source map support\nAuto-detection - Automatic source map loading',
        },
        {
          command: 'Code Snippets Creation',
          description: 'Create and manage reusable code snippets',
          usage: 'Sources panel → Snippets tab',
          example: '# Safari Code Snippets\n\n# Create Snippet\nSources panel → Snippets → New snippet\n\n# Snippet Usage\nWrite code in snippet editor\nCmd+Enter - Run snippet\n\n# Snippet Features\nAuto-save snippets\nMulti-line code support\nError reporting\n\n# Usage Examples\n// Utility functions\nfunction logElement(selector) {\n  console.log(document.querySelector(selector));\n}\n\n// Test code\ndocument.body.style.backgroundColor = "red";',
        },
        {
          command: 'Workspace Setup and File Mapping',
          description: 'Map local files to network resources',
          usage: 'Sources → Filesystem → Add folder',
          example: '# Safari Workspace Setup\n\n# Add Local Folder\nSources → Filesystem → Add folder\nChoose local directory\n\n# Map Network Resources\nMap local files to network resources\nLive editing with auto-save\n\n# Benefits\nEdit local files directly\nChanges apply immediately\nPersistent file mapping\nVersion control integration\n\n# Safari Specific\nLocal file overrides - Override network files\nAuto-refresh - Automatic page refresh on save',
        },
        {
          command: 'JavaScript Breakpoint Management',
          description: 'Set and manage various types of breakpoints',
          usage: 'Click line number or right-click in Sources panel',
          example: '# Safari Breakpoint Types\n\n# Line Breakpoints\nClick line number - Set breakpoint\nRight-click → Add breakpoint\n\n# Conditional Breakpoints\nRight-click → Add conditional breakpoint\nExpression must be true\n\n# Logpoints\nRight-click → Add logpoint\nLog message without stopping\n\n# Breakpoint Controls\nRight-click breakpoint - Edit condition\nDisable breakpoint - Turn off temporarily\nDelete breakpoint - Remove breakpoint\n\n# Safari Specific\nDOM breakpoints - Break on DOM changes\nEvent breakpoints - Break on specific events',
        },
        {
          command: 'Step Debugging Controls',
          description: 'Navigate code execution step by step',
          usage: 'Debugging toolbar controls',
          example: '# Safari Step Debugging\n\n# Debugging Controls\nCmd+\\ - Resume/Pause\nF10 - Step over\nF11 - Step into\nShift+F11 - Step out\nCmd+Shift+\\ - Stop on exceptions\n\n# Call Stack\nCall Stack panel - View execution stack\nClick frame - Jump to execution context\nAsync checkbox - Show async stack traces\n\n# Safari Specific\nStep into external code - Control stepping behavior\nBlackbox scripts - Skip library code',
        },
        {
          command: 'Variable and Scope Inspection',
          description: 'Inspect and modify variables during debugging',
          usage: 'Scope panel and variable hover',
          example: '# Safari Variable Inspection\n\n# Scope Panel\nScope panel - View local and global variables\nVariable hover - Quick value preview\nVariable editing - Modify values during debug\n\n# Watch Expressions\nAdd watch - Monitor specific expressions\nEdit watch - Modify watch expression\nDelete watch - Remove watch\n\n# Variable Types\nLocal variables - Function scope\nClosure variables - Closure scope\nGlobal variables - Window/global scope\n\n# Safari Specific\nObject property editing - Edit object properties\nArray inspection - Enhanced array visualization',
        },
        {
          command: 'Pretty Print and Minified Code',
          description: 'Format and debug minified JavaScript',
          usage: 'Pretty print button in Sources panel',
          example: '# Safari Pretty Print\n\n# Pretty Print Code\nPretty print button - Format minified code\nAuto-indent - Proper indentation\nSyntax highlighting - Color-coded syntax\n\n# Benefits\nReadable code structure\nBetter debugging experience\nLine breakpoints work\nError stack traces improved\n\n# Usage\n1. Open minified file\n2. Click pretty print button ({})\n3. Code becomes readable\n4. Set breakpoints as needed\n\n# Safari Specific\nAuto-format on paste - Automatically format pasted code',
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
          example: '# Safari Network Monitoring\n\n# Start Recording\nRecord button (red dot) - Start/stop recording\nAuto-refresh on navigation - Automatic recording\n\n# Request Filtering\nFilter input box - Filter requests\nURL filtering - Filter by URL\nType filtering - Filter by resource type\nStatus filtering - Filter by status code\n\n# Resource Types\n- XHR/Fetch - AJAX requests\n- JS - JavaScript files\n- CSS - Stylesheets\n- Img - Images\n- Media - Video/audio\n\n# Safari Specific\nResource timing - Detailed timing info\nInitiator tracking - What triggered request',
        },
        {
          command: 'Request Analysis and Inspection',
          description: 'Detailed analysis of individual requests',
          usage: 'Click request to view details',
          example: '# Safari Request Details\n\n# Request Overview\nName - Resource name\nStatus - HTTP status code\nType - Resource type\nInitiator - What triggered request\nSize - Response size\nTime - Request duration\n\n# Request Headers\nHeaders tab - View all headers\nRequest headers - Sent headers\nResponse headers - Received headers\n\n# Response Analysis\nPreview tab - Rendered response\nResponse tab - Raw response data\nInitiator tab - Call stack\nTiming tab - Detailed timing',
        },
        {
          command: 'Network Performance Analysis',
          description: 'Analyze network performance and bottlenecks',
          usage: 'Waterfall view and timing breakdown',
          example: '# Safari Performance Analysis\n\n# Timing Breakdown\nWaterfall view - Visual timeline\nQueueing - Time in queue\nStalled - Time before request\nRequest start - Request sent time\nResponse time - Time to first byte\nContent download - Download time\n\n# Performance Metrics\nTotal page weight - All resources size\nNumber of requests - Total HTTP requests\nLoad time - Page load duration\nDOMContentLoaded - DOM ready time\nLoad event - Full page load time\n\n# Safari Specific\nResource loading priority - Loading order analysis',
        },
        {
          command: 'Network Conditions Simulation',
          description: 'Simulate different network conditions',
          usage: 'Throttling dropdown in Network panel',
          example: '# Safari Network Simulation\n\n# Throttling Options\nNo throttling - Full speed\nRegular 3G - 3G speed\nGood 3G - Faster 3G\nRegular 4G - 4G speed\nLTE - Fast 4G\nWi-Fi - Wi-Fi speed\n\n# Custom Throttling\nDownload speed - Set download limit\nUpload speed - Set upload limit\nLatency - Set round-trip time\n\n# Safari Specific\nNetwork conditions - iOS simulation\nOffline mode - Test offline behavior',
        },
        {
          command: 'Advanced Network Debugging',
          description: 'Deep network analysis and troubleshooting',
          usage: 'Advanced network features and tools',
          example: '# Safari Advanced Network Features\n\n# Export HAR Data\nRight-click → Save All As HAR\nImport HAR files\n\n# Request Blocking\nBlock specific URLs\nPattern matching\n\n# WebSockets\nWS tab - WebSocket connections\nFrames view - Message history\nSend/Receive filters - Filter messages\n\n# Service Workers\nService Workers tab - SW registration status\nOffline mode - Test offline behavior\n\n# Safari Specific\nNetwork priority - Loading priority visualization',
        },
      ],
    },
    {
      title: 'Timeline Panel Expert Guide',
      commands: [
        {
          command: 'Timeline Recording Setup',
          description: 'Configure and start timeline recordings',
          usage: 'Timeline panel → Record button',
          example: '# Safari Timeline Recording\n\n# Start Recording\nTimeline panel → Record button (circle)\nRecord reload button - Record page reload\n\n# Recording Process\n1. Click Record (red circle)\n2. Interact with page\n3. Click Stop (square)\n4. Analyze results\n\n# Recording Settings\nCapture screenshots - Visual timeline\nDisable JavaScript samples - Reduce overhead\nNetwork throttling - Simulate conditions\nMemory tracking - Include memory data\n\n# Safari Specific\nFPS meter - Frame rate monitoring\nCPU usage - Processor utilization',
        },
        {
          command: 'Performance Metrics Analysis',
          description: 'Analyze key performance indicators',
          usage: 'Performance metrics and timing analysis',
          example: '# Safari Performance Metrics\n\n# Key Metrics\nFPS - Frames per second\nCPU usage - Processor utilization\nNET - Network activity\nHEAP - Memory usage\n\n# Timeline View\nMain thread - JavaScript execution\nCompositor thread - Rendering work\nRaster thread - Drawing operations\nGPU - GPU activity\n\n# Performance Indicators\nLong tasks - Identify blocking operations\nLayout shifts - Unwanted element movement\nPaint time - Rendering duration\n\n# Safari Specific\nRendering frames - Visual frame analysis',
        },
        {
          command: 'Flame Chart Analysis',
          description: 'Analyze function execution with flame charts',
          usage: 'Flame chart view in Timeline panel',
          example: '# Safari Flame Chart Analysis\n\n# Flame Chart Features\nFunction execution - Visual call hierarchy\nSelf time - Function execution time\nTotal time - Including child calls\n\n# Analysis Techniques\nWide bars - Long execution time\nDeep stacks - Complex call chains\nHot functions - Performance bottlenecks\n\n# Navigation\nZoom in/out - Scroll or use controls\nClick function - Jump to source\nSearch functions - Filter by name\n\n# Safari Specific\nJavaScript profiling - Enhanced JS analysis',
        },
        {
          command: 'Memory Profiling Basics',
          description: 'Profile memory usage and detect leaks',
          usage: 'Memory panel → Heap snapshot',
          example: '# Safari Memory Profiling\n\n# Heap Snapshots\nMemory panel → Heap snapshot\nTake snapshot button - Capture current memory\n\n# Snapshot Types\nHeap snapshot - Current memory state\nComparison snapshot - Compare two states\nAllocation timeline - Track allocations over time\n\n# Memory Analysis\nObjects - All allocated objects\nConstructor names - Object types\nRetained size - Memory kept by object\nShallow size - Object direct size\n\n# Safari Specific\nMemory timeline - Memory usage over time',
        },
        {
          command: 'Memory Leak Detection',
          description: 'Identify and fix memory leaks',
          usage: 'Comparison snapshots and analysis',
          example: '# Safari Memory Leak Detection\n\n# Comparison Analysis\nTake baseline snapshot - Initial state\nPerform actions - Execute code\nTake comparison snapshot - Compare states\n\n# Leak Indicators\nGrowing heap size - Memory not released\nDetached DOM nodes - Unreferenced elements\nEvent listeners - Unremoved listeners\nClosures - Unreleased variables\n\n# Retainers Analysis\nRetainer paths - What keeps objects alive\nReference chains - Object relationships\n\n# Safari Specific\nMemory graph - Visual memory relationships',
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Storage Panel Deep Dive',
      commands: [
        {
          command: 'Local Storage Inspection',
          description: 'Inspect and manage localStorage data',
          usage: 'Storage panel → Local Storage',
          example: '# Safari Local Storage\n\n# Access Local Storage\nStorage panel → Local Storage\nView key-value pairs\n\n# Storage Operations\nEdit values directly\nAdd/remove items\nClear storage\n\n# Storage API\nlocalStorage.setItem("key", "value");\nlocalStorage.getItem("key");\nlocalStorage.removeItem("key");\nlocalStorage.clear();\n\n# Safari Specific\nStorage quota - Available space usage\nStorage events - Storage change monitoring',
        },
        {
          command: 'Session Storage Management',
          description: 'Work with session-specific storage',
          usage: 'Storage panel → Session Storage',
          example: '# Safari Session Storage\n\n# Access Session Storage\nStorage panel → Session Storage\nTab-specific storage\n\n# Storage Characteristics\nSession-lifetime data\n5-10 MB limit\nString-only values\n\n# Storage API\nsessionStorage.setItem("key", "value");\nsessionStorage.getItem("key");\nsessionStorage.removeItem("key");\n\n# Safari Specific\nSession tracking - Cross-tab session sync',
        },
        {
          command: 'Cookie Inspection and Management',
          description: 'Inspect, edit, and manage cookies',
          usage: 'Storage panel → Cookies',
          example: '# Safari Cookie Management\n\n# Cookie Inspection\nStorage panel → Cookies\nView all cookies\n\n# Cookie Operations\nEdit cookie values\nAdd new cookies\nDelete cookies\n\n# Cookie Properties\nName/Value - Cookie data\nDomain/Path - Scope restrictions\nExpires/Max-Age - Lifetime\nSecure/HttpOnly - Security flags\n\n# Safari Specific\nCookie blocking - Privacy features\nThird-party cookie restrictions',
        },
        {
          command: 'IndexedDB Database Inspection',
          description: 'Inspect and query IndexedDB databases',
          usage: 'Storage panel → IndexedDB',
          example: '# Safari IndexedDB\n\n# Database Inspection\nStorage panel → IndexedDB\nDatabase browsing\n\n# Database Operations\nObject store viewing\nData editing\nQuery execution\n\n# IndexedDB Features\nNoSQL database\nLarge storage capacity\nTransaction support\nIndex-based queries\n\n# Safari Specific\nIndexedDB quota - Storage space management',
        },
        {
          command: 'Application Cache and Web SQL',
          description: 'Inspect offline storage and SQL databases',
          usage: 'Storage panel → Application Cache',
          example: '# Safari Application Cache\n\n# Application Cache\nStorage panel → Application Cache\nManifest inspection\nCache status\n\n# Web SQL Database\nStorage panel → Web SQL\nDatabase browsing\nSQL query execution\n\n# Usage Scenarios\nOffline web applications\nLocal data storage\nClient-side databases\n\n# Safari Specific\nCache manifest - Offline application support\nWeb SQL support - Client-side SQL databases',
        },
      ],
    },
    {
      title: 'Layers Panel and GPU Debugging',
      commands: [
        {
          command: 'Layers Panel Overview',
          description: 'Understand compositing layers and GPU acceleration',
          usage: 'Layers panel visualization',
          example: '# Safari Layers Panel\n\n# Layers Overview\nLayers panel - Compositing layers visualization\nGPU acceleration - Hardware acceleration info\n\n# Layer Properties\nLayer bounds - Layer dimensions\nPaint count - Paint operations\nMemory usage - GPU memory\n\n# Layer Types\nNormal layers - Standard DOM elements\nComposited layers - GPU accelerated\n\n# Usage\nDebug performance issues\nOptimize GPU usage\nIdentify unnecessary layers',
        },
        {
          command: 'Compositing Analysis',
          description: 'Analyze layer compositing and rendering',
          usage: 'Layers panel compositing view',
          example: '# Safari Compositing Analysis\n\n# Compositing Debugging\nLayer tree - Visual layer hierarchy\nCompositing reasons - Why layers created\n\n# Performance Impact\nLayer count - Number of layers\nMemory usage - GPU memory consumption\nPaint complexity - Rendering complexity\n\n# Optimization Tips\nReduce layer count\nOptimize paint operations\nMinimize GPU memory usage\n\n# Safari Specific\nHardware acceleration - GPU utilization analysis',
        },
        {
          command: 'Paint Profiling',
          description: 'Profile paint operations and rendering performance',
          usage: 'Layers panel paint profiling',
          example: '# Safari Paint Profiling\n\n# Paint Analysis\nPaint profiler - Paint operation timeline\nPaint regions - Visual paint areas\n\n# Performance Metrics\nPaint time - Rendering duration\nPaint count - Number of paint operations\nInvalidation regions - Areas needing repaint\n\n# Debugging Tools\nPaint flashing - Visual paint indication\nLayer borders - Layer boundary visualization\n\n# Safari Specific\nRendering pipeline - Safari-specific rendering analysis',
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
          example: '# Safari Conditional Breakpoints\n\n# Set Conditional Breakpoint\nRight-click line number → Add conditional breakpoint\nExpression must be true\n\n# Condition Examples\nx > 10 - Break when x greater than 10\narray.length === 0 - Break when array empty\nelement.classList.contains(\'active\') - Break when element has class\n\n# Complex Conditions\nuser.isAdmin && user.age >= 18\nresponse.status >= 400\nDate.now() - startTime > 5000\n\n# Safari Specific\nDOM conditions - Break on DOM state changes',
        },
        {
          command: 'Logpoints for Debugging',
          description: 'Add logging without breaking execution',
          usage: 'Right-click line number → Add logpoint',
          example: '# Safari Logpoints\n\n# Add Logpoint\nRight-click line number → Add logpoint\nLog message without stopping\n\n# Logpoint Examples\n"Variable x value: " + x\n"Array length: " + array.length\n"User object: " + JSON.stringify(user)\n\n# Template Literals\n`Current time: ${new Date().toISOString()}`\n`Element class: ${element.className}`\n`API response: ${JSON.stringify(response)}`\n\n# Safari Specific\nConditional logging - Log based on conditions',
        },
        {
          command: 'DOM Mutation Breakpoints',
          description: 'Break on DOM changes and mutations',
          usage: 'Right-click element → Break on',
          example: '# Safari DOM Mutation Breakpoints\n\n# Set DOM Breakpoints\nRight-click element → Break on\n\n# Breakpoint Types\nSubtree modifications - Child changes\nAttribute modifications - Attribute changes\nNode removal - Element deletion\n\n# Usage Scenarios\nDebug dynamic content\nTrack SPA navigation\nMonitor form changes\nDetect unwanted modifications\n\n# Safari Specific\nAttribute specifics - Break on specific attribute changes',
        },
        {
          command: 'Event Listener Breakpoints',
          description: 'Break on specific DOM events',
          usage: 'Sources panel → Event Listener Breakpoints',
          example: '# Safari Event Listener Breakpoints\n\n# Event Categories\nMouse events (click, mousedown, etc.)\nKeyboard events (keydown, keyup, etc.)\nTouch events (touchstart, etc.)\nForm events (submit, change, etc.)\n\n# Set Event Breakpoints\nSources panel → Event Listener Breakpoints\nFilter by event type\nEnable specific events\n\n# Common Events\nclick - Mouse clicks\nkeydown - Key presses\nsubmit - Form submissions\nload - Resource loading\n\n# Safari Specific\nTouch events - iOS-specific touch debugging',
        },
        {
          command: 'Blackboxing Scripts',
          description: 'Ignore third-party code during debugging',
          usage: 'Sources panel → Blackbox script',
          example: '# Safari Blackboxing Scripts\n\n# Blackbox Third-party Code\nRight-click script → Blackbox script\nIgnore third-party code\nFramework blackboxing\n\n# Benefits\nSkip library code\nFocus on application code\nCleaner call stacks\nFaster debugging\n\n# Common Blackboxes\njQuery, React, Angular\nLibrary files\nMinified code\nThird-party frameworks\n\n# Safari Specific\nSystem scripts - Safari-specific script handling',
        },
      ],
    },
    {
      title: 'Safari-Specific Features',
      commands: [
        {
          command: 'Responsive Design Mode',
          description: 'Test responsive design across Apple devices',
          usage: 'Cmd+Option+R for Responsive Design Mode',
          example: '# Safari Responsive Design Mode\n\n# Activate Responsive Mode\nCmd+Option+R - Responsive Design Mode\n\n# Device Presets\niPhone models (all sizes)\niPad models (all sizes)\nCustom device dimensions\n\n# Features\nDevice simulation - Mobile device presets\nViewport resizing - Drag to resize\nTouch simulation - Touch event testing\nNetwork throttling - Mobile network simulation\n\n# Safari Specific\nApple device optimization - iOS-specific testing\nRetina display simulation - High-DPI testing\n\n# Testing Tools\nScreenshot capture - Device screenshots\nGeolocation - GPS simulation\nDevice orientation - Rotation testing',
        },
        {
          command: 'iOS Simulator Integration',
          description: 'Debug on iOS simulators and devices',
          usage: 'Develop → iOS Simulator',
          example: '# Safari iOS Simulator\n\n# iOS Simulator Access\nDevelop → iOS Simulator\nChoose device model\n\n# Features\nReal device simulation - Actual iOS behavior\nTouch events - Multi-touch support\nDevice APIs - Camera, GPS, accelerometer\n\n# Debugging Capabilities\nWeb Inspector on iOS - Debug mobile Safari\nRemote debugging - Debug from desktop\nPerformance testing - Mobile performance\n\n# Safari Specific\niOS version testing - Test different iOS versions\nDevice-specific bugs - iOS-only issues\n\n# Usage\nConnect iOS device\nEnable Web Inspector on iOS\nDebug from desktop Safari',
        },
        {
          command: 'Apple Pay and WebKit Features',
          description: 'Debug Apple-specific web features',
          usage: 'WebKit and Apple Pay debugging',
          example: '# Safari Apple Features\n\n# Apple Pay Debugging\nApple Pay JS API - Payment debugging\nPayment Request API - Cross-platform payments\n\n# WebKit Features\nWebKit-specific APIs - Safari-only features\nCSS properties - Apple-specific CSS\nJavaScript extensions - Safari JS extensions\n\n# Debugging Tools\nFeature detection - WebKit feature testing\nCompatibility testing - Safari version testing\n\n# Safari Specific\nApple Pay validation - Payment flow testing\nWebKit bug detection - Safari-specific issues\n\n# Usage\nTest Apple Pay integration\nDebug WebKit-specific features\nOptimize for Safari performance',
        },
        {
          command: 'Privacy and Security Features',
          description: 'Debug privacy and security features',
          usage: 'Safari privacy and security tools',
          example: '# Safari Privacy Features\n\n# Privacy Debugging\nIntelligent Tracking Prevention - Cookie blocking\nPrivacy Report - Tracking protection\nSandbox security - Security sandbox\n\n# Security Features\nMixed content detection - HTTP/HTTPS issues\nCertificate inspection - SSL/TLS debugging\nContent Security Policy - CSP debugging\n\n# Safari Specific\nCross-origin restrictions - CORS debugging\nSecure context requirements - HTTPS requirements\n\n# Usage\nDebug privacy issues\nTest security features\nValidate compliance',
        },
        {
          command: 'Performance and Power Optimization',
          description: 'Optimize for Safari performance and battery life',
          usage: 'Safari-specific performance tools',
          example: '# Safari Performance Optimization\n\n# Performance Features\nLow Power Mode - Battery optimization\nMemory pressure - Memory usage optimization\nCPU throttling - Performance limiting\n\n# Safari-Specific Metrics\nPower usage - Battery consumption\nThermal state - Device temperature\nMemory efficiency - Safari memory optimization\n\n# Debugging Tools\nPerformance timeline - Safari performance analysis\nPower profiler - Battery usage analysis\n\n# Safari Specific\niOS optimization - Mobile performance\nmacOS optimization - Desktop performance\n\n# Usage\nOptimize for battery life\nImprove Safari performance\nDebug power issues',
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
          example: '# Safari Essential Shortcuts\n\n# Panel Navigation\nCmd+Option+I - Open Web Inspector\nCmd+1-9 - Switch to panel\nCmd+Tab - Next panel\nCmd+Shift+Tab - Previous panel\nEsc - Toggle console drawer\n\n# Element Inspection\nCmd+Option+C - Element selector\n\n# Console\nCmd+Option+C - Console\nCmd+K - Clear console\n\n# Debugging\nCmd+\\ - Resume/Pause\nF10 - Step over\nF11 - Step into\nShift+F11 - Step out\n\n# Safari Specific\nCmd+Option+R - Responsive Design Mode',
        },
        {
          command: 'Command Menu Mastery',
          description: 'Universal command search for all features',
          usage: 'Cmd+Shift+P for command menu',
          example: '# Safari Command Menu Power Usage\nCmd+Shift+P - Universal command search\n\n# Feature Discovery\nType any Web Inspector feature name\nSearch by functionality\nDiscover hidden tools\nAccess experimental features\n\n# Quick Actions\nDisable JavaScript\nEnter Responsive Design Mode\nClear Caches\nDisable Caches\nAudit Page Performance\n\n# Safari Specific\niOS Simulator - Mobile debugging\nApple Pay testing - Payment debugging\nPrivacy settings - Security configuration',
        },
        {
          command: 'Workspace Customization',
          description: 'Set up personalized development workspace',
          usage: 'Settings and workspace configuration',
          example: '# Safari Workspace Setup\n\n# Local Workspace\nSources → Filesystem → Add folder\nMap local files\nLive editing\n\n# Custom Settings\nSettings → Preferences\nCustom themes\nShortcut customization\nPanel layout\n\n# Workspace Features\nFile mapping\nOverride configuration\nPersistent mapping\nSnippets library\n\n# Safari Specific\niOS workspace - Mobile development setup\nCross-device sync - Settings synchronization',
        },
        {
          command: 'Extension Integration',
          description: 'Enhance Web Inspector with Safari extensions',
          usage: 'Safari extensions and Web Extensions',
          example: '# Safari Web Extensions\n\n# Popular Extensions\nReact Developer Tools\nVue.js devtools\nAngular DevTools\nRedux DevTools\n\n# Safari-Specific Extensions\nSafari Web Extensions - Native Safari extensions\nContent Blockers - Ad and content blocking\n\n# Installation\nSafari Extensions Gallery\nSide loading for development\n\n# Safari Specific\nNative extension debugging\nContent script debugging\n\n# Usage\nDebug Safari extensions\nTest content blockers\nOptimize extension performance',
        },
        {
          command: 'Cross-Platform Testing',
          description: 'Test across Apple ecosystem',
          usage: 'Multi-device testing workflows',
          example: '# Safari Cross-Platform Testing\n\n# Device Testing\niPhone/iPad testing - Mobile Safari\nmacOS testing - Desktop Safari\nApple Watch - Web content on watchOS\n\n# Testing Workflows\nResponsive Design Mode - Device simulation\niOS Simulator - Real device testing\nRemote debugging - Debug mobile from desktop\n\n# Safari Specific\nContinuity testing - Handoff and Continuity\nApple Pay testing - Payment across devices\n\n# Usage\nTest across all Apple devices\nEnsure consistent experience\nDebug platform-specific issues',
        },
        {
          command: 'Automation and Scripting',
          description: 'Automate repetitive tasks with scripts',
          usage: 'Console scripting and automation',
          example: '# Safari Web Inspector Automation\n\n# Console Scripting\n// Auto-refresh page\nsetInterval(() => location.reload(), 5000);\n\n// Performance testing\nconsole.time("test");\n// Code to test\nconsole.timeEnd("test");\n\n// DOM manipulation\ndocument.querySelectorAll(".error").forEach(el => el.remove());\n\n# Automation Tools\n// Custom functions\nfunction clearStorage() {\n  localStorage.clear();\n  sessionStorage.clear();\n}\n\n// Batch operations\n$$(".old-class").forEach(el => el.classList.replace("old-class", "new-class"));\n\n# Safari Specific\nAppleScript integration - macOS automation\niOS Shortcuts - Mobile automation',
        },
      ],
    },
  ],
};
