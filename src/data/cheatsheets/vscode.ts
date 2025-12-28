import { Code } from 'lucide-react';

export const vscodeCheatsheet = {
  id: 'vscode',
  name: 'VS Code',
  description: 'Master Visual Studio Code from basics to advanced features (VS Code 1.80+)',
  icon: Code,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with VS Code',
      commands: [
        {
          command: 'VS Code Installation & Setup',
          description: 'Install VS Code and initial configuration',
          usage: 'Download from code.visualstudio.com',
          example: '# Installation\n# Windows: Download installer from website\n# macOS: brew install --cask visual-studio-code\n# Linux: sudo snap install code --classic\n\n# First launch setup\n# 1. Open VS Code\n# 2. Complete welcome tour\n# 3. Install recommended extensions\n# 4. Configure basic settings',
        },
        {
          command: 'Understanding the Interface',
          description: 'VS Code UI components and layout',
          usage: 'Activity Bar, Sidebar, Editor, Panel',
          example: '# Main Components:\n# Activity Bar (left) - Navigation\n# Sidebar - File explorer, search, source control\n# Editor area - Code editing\n# Panel (bottom) - Terminal, output, problems\n# Status bar - Information and notifications\n\n# Customization:\n# View > Appearance > various options\n# Right-click activity bar to hide/show',
        },
        {
          command: 'Command Palette',
          description: 'Access all VS Code commands',
          usage: 'Cmd+Shift+P (Mac) / Ctrl+Shift+P (Windows)',
          example: '# Open Command Palette\nCmd+Shift+P\n\n# Common commands:\n# > File: New File\n# > View: Toggle Terminal\n# > Git: Clone\n# > Preferences: Color Theme\n# > Extensions: Install Extensions',
        },
        {
          command: 'VS Code Extensions',
          description: 'Install and manage extensions',
          usage: 'Extensions panel',
          example: '# Open Extensions\nCmd+Shift+X (Mac) / Ctrl+Shift+X (Win)\n\n# Popular extensions:\n# - Python, JavaScript, TypeScript\n# - Prettier, ESLint\n# - GitLens, Live Share\n# - Docker, Remote SSH\n\n# Extension management:\n# - Install: Click Install button\n# - Disable/Enable: Right-click > Disable/Enable\n# - Uninstall: Right-click > Uninstall',
        },
      ],
    },
    {
      title: 'Basic File Operations',
      commands: [
        {
          command: 'File Management',
          description: 'Create, open, save, and manage files',
          usage: 'File menu and keyboard shortcuts',
          example: '# File operations\nCmd+N (Mac) / Ctrl+N (Win) - New file\nCmd+O (Mac) / Ctrl+O (Win) - Open file\nCmd+S (Mac) / Ctrl+S (Win) - Save file\nCmd+Shift+S (Mac) / Ctrl+Shift+S (Win) - Save As\n\n# Quick Open\nCmd+P (Mac) / Ctrl+P (Win) - Quick file switcher\nCmd+K P (Mac) / Ctrl+K P (Win) - Copy path of active file',
        },
        {
          command: 'Settings and Preferences',
          description: 'Configure VS Code behavior',
          usage: 'Cmd+, (Mac) / Ctrl+, (Windows)',
          example: '# Open Settings\nCmd+, (Mac) / Ctrl+, (Win)\n\n# Settings UI vs JSON\n# UI: User-friendly interface\n# JSON: Advanced configuration\n\n# Common settings:\n# - Font size, Font family\n# - Color theme, Icon theme\n# - Tab size, Word wrap\n# - Auto save, Format on save\n# - Line numbers, Minimap',
        },
        {
          command: 'File Explorer Navigation',
          description: 'Navigate and manage files efficiently',
          usage: 'Explorer panel shortcuts',
          example: '# Explorer shortcuts\nCmd+Shift+E (Mac) / Ctrl+Shift+E (Win) - Show Explorer\n\n# File operations:\n# - New file/folder: Right-click\n# - Rename: F2 or Enter\n# - Delete: Del or Backspace\n# - Copy path: Right-click > Copy Path\n\n# Quick file creation:\n# Right-click folder > New File',
        },
      ],
    },
    {
      title: 'Basic Editing and Navigation',
      commands: [
        {
          command: 'Text Selection and Movement',
          description: 'Navigate and select text efficiently',
          usage: 'Arrow keys, Shift, Cmd/Ctrl modifiers',
          example: '# Movement\nArrow keys - Move cursor\nCmd+→ (Mac) / End (Win) - End of line\nCmd+← (Mac) / Home (Win) - Start of line\nCmd+↑ (Mac) / Ctrl+Home (Win) - Start of file\nCmd+↓ (Mac) / Ctrl+End (Win) - End of file\n\n# Selection\nShift + Arrow keys - Extend selection\nCmd+A (Mac) / Ctrl+A (Win) - Select all\nCmd+L (Mac) / Ctrl+L (Win) - Select current line',
        },
        {
          command: 'Basic Text Editing',
          description: 'Cut, copy, paste, and delete operations',
          usage: 'Standard text editing shortcuts',
          example: '# Cut/Copy/Paste\nCmd+X (Mac) / Ctrl+X (Win) - Cut\nCmd+C (Mac) / Ctrl+C (Win) - Copy\nCmd+V (Mac) / Ctrl+V (Win) - Paste\nCmd+Shift+V (Mac) / Ctrl+Shift+V (Win) - Paste as plain text\n\n# Delete operations\nCmd+Shift+K (Mac) / Ctrl+Shift+K (Win) - Delete line\nBackspace/Delete - Delete characters\nCmd+Backspace (Mac) / Ctrl+Backspace (Win) - Delete to start of word',
        },
        {
          command: 'Undo and Redo',
          description: 'Manage editing history',
          usage: 'Cmd+Z / Cmd+Shift+Z (Mac) / Ctrl+Z / Ctrl+Y (Win)',
          example: '# Undo/Redo\nCmd+Z (Mac) / Ctrl+Z (Win) - Undo\nCmd+Shift+Z (Mac) / Ctrl+Y (Win) - Redo\n\n# Cursor position undo\nCmd+U (Mac) / Ctrl+U (Win) - Undo cursor position\n\n# Soft undo (cursor movement)\nCmd+K Cmd+Z (Mac) / Ctrl+K Ctrl+Z (Win)',
        },
        {
          command: 'Find and Replace',
          description: 'Search and replace text in files',
          usage: 'Cmd+F / Cmd+H (Mac) / Ctrl+F / Ctrl+H (Win)',
          example: '# Find\nCmd+F (Mac) / Ctrl+F (Win) - Find in current file\nCmd+G (Mac) / F3 (Win) - Find next\nCmd+Shift+G (Mac) / Shift+F3 (Win) - Find previous\n\n# Replace\nCmd+H (Mac) / Ctrl+H (Win) - Find and replace\nCmd+Alt+Enter (Mac) / Ctrl+Alt+Enter (Win) - Replace all\n\n# Find options\n# - Case sensitive: Alt+C\n# - Whole word: Alt+W\n# - Regular expression: Alt+R',
        },
        {
          command: 'Line Management',
          description: 'Manipulate lines and code blocks',
          usage: 'Alt+↑/↓, Shift+Alt+↑/↓',
          example: '# Move lines\nAlt+↑/↓ - Move line up/down\nAlt+Shift+↑/↓ - Copy line up/down\n\n# Insert lines\nCmd+Enter (Mac) / Ctrl+Enter (Win) - Insert line below\nCmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win) - Insert line above\n\n# Line operations\nCmd+\\ (Mac) / Ctrl+\\ (Win) - Split editor\nCmd+J (Mac) / Ctrl+J (Win) - Join lines',
        },
      ],
    },
    {
      title: 'Code Intelligence and Autocompletion',
      commands: [
        {
          command: 'IntelliSense',
          description: 'Smart code completion and suggestions',
          usage: 'Ctrl+Space',
          example: '# Trigger suggestions\nCtrl+Space - Show autocomplete\nCtrl+Shift+Space - Show parameter hints\n\n# IntelliSense features:\n# - Code completion\n# - Parameter hints\n# - Quick info\n# - Member completion\n\n# Works with:\n# - JavaScript/TypeScript\n# - Python, Java, C++\n# - HTML, CSS, JSON\n# - Many more languages',
        },
        {
          command: 'Code Actions and Quick Fixes',
          description: 'Automated code improvements',
          usage: 'Cmd+. (Mac) / Ctrl+. (Windows)',
          example: '# Quick fixes\nCmd+. (Mac) / Ctrl+. (Win) - Show code actions\n\n# Common actions:\n# - Import missing modules\n# - Fix syntax errors\n# - Extract to function\n# - Add missing braces\n# - Organize imports\n# - Generate constructor',
        },
        {
          command: 'Navigation and References',
          description: 'Navigate through code efficiently',
          usage: 'F12, Alt+F12, Cmd+Click (Mac) / Ctrl+Click (Win), Go to commands',
          example: '# Go to definition\nF12 - Jump to definition\nAlt+F12 - Peek definition\nCmd+Click (Mac) / Ctrl+Click (Win) - Go to definition\n\n# Go to references\nShift+F12 - Find all references\n\n# Navigate back/forward\nAlt+← (Mac) / Alt+← (Win) - Go back\nAlt+→ (Mac) / Alt+→ (Win) - Go forward',
        },
        {
          command: 'Symbol Navigation',
          description: 'Navigate to symbols in file/workspace',
          usage: 'Cmd+Shift+O (Mac) / Ctrl+Shift+O (Win), Cmd+T (Mac) / Ctrl+T (Win)',
          example: '# Go to symbol in file\nCmd+Shift+O (Mac) / Ctrl+Shift+O (Win) - Outline\n\n# Go to symbol in workspace\nCmd+T (Mac) / Ctrl+T (Win) - Go to symbol across files\n\n# Go to file\nCmd+P (Mac) / Ctrl+P (Win) - Quick open\nCmd+P (Mac) / Ctrl+P (Win) then @ - Go to symbol in file\nCmd+P (Mac) / Ctrl+P (Win) then # - Go to symbol in workspace',
        },
        {
          command: 'Hover and Documentation',
          description: 'View documentation and type information',
          usage: 'Hover over symbols',
          example: '# Hover information\nHover over symbol - Show quick info\nCmd+K Cmd+I (Mac) / Ctrl+K Ctrl+I (Win) - Show hover\n\n# Parameter hints\nShift+Cmd+Space (Mac) / Shift+Ctrl+Space (Win) - Parameter hints\n\n# Shows:\n# - Function signatures\n# - Parameter types\n# - Documentation\n# - Type definitions',
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Multi-Cursor and Advanced Editing',
      commands: [
        {
          command: 'Multi-Cursor Selection',
          description: 'Edit multiple locations simultaneously',
          usage: 'Alt+Click, Cmd+Alt+↑/↓ (Mac) / Ctrl+Alt+↑/↓ (Win)',
          example: '# Add cursors\nAlt+Click - Add cursor at position\nCmd+Alt+↑/↓ (Mac) / Ctrl+Alt+↑/↓ (Win) - Add cursor above/below\nCmd+Alt+←/→ (Mac) / Ctrl+Alt+←/→ (Win) - Add cursor left/right\n\n# Select next occurrence\nCmd+D (Mac) / Ctrl+D (Win) - Select next match\nCmd+K Cmd+D (Mac) / Ctrl+K Ctrl+D (Win) - Skip current\n\n# Select all occurrences\nCmd+Shift+L (Mac) / Ctrl+Shift+L (Win) - Select all matches',
        },
        {
          command: 'Column Selection',
          description: 'Select vertical blocks of text',
          usage: 'Shift+Alt+Drag or Cmd+Shift+↑/↓ (Mac) / Ctrl+Shift+↑/↓ (Win)',
          example: '# Column selection\nShift+Alt+Drag - Select column\nCmd+Shift+↑/↓ (Mac) / Ctrl+Shift+↑/↓ (Win) - Column selection\nShift+Alt+PageUp/PageDown - Select column up/down\n\n# Useful for:\n# - Editing similar code patterns\n# - Changing variable names\n# - Reformatting data\n# - Multi-line editing',
        },
        {
          command: 'Smart Selection',
          description: 'Intelligently expand/shrink selections',
          usage: 'Shift+Alt+→/←',
          example: '# Expand selection\nShift+Alt+→ - Expand to larger scope\n\n# Shrink selection\nShift+Alt+← - Shrink to smaller scope\n\n# Selection hierarchy:\n# Word → Line → Block → Function → Class → File\n\n# Quick selection\nCmd+D (Mac) / Ctrl+D (Win) - Select current word',
        },
        {
          command: 'Code Folding',
          description: 'Collapse and expand code blocks',
          usage: 'Cmd+K Cmd+0/1/2/3/4/5 (Mac) / Ctrl+K Ctrl+0/1/2/3/4/5 (Win)',
          example: '# Folding levels\nCmd+K Cmd+0 (Mac) / Ctrl+K Ctrl+0 (Win) - Fold all\nCmd+K Cmd+1 (Mac) / Ctrl+K Ctrl+1 (Win) - Fold level 1\nCmd+K Cmd+2 (Mac) / Ctrl+K Ctrl+2 (Win) - Fold level 2\nCmd+K Cmd+J (Mac) / Ctrl+K Ctrl+J (Win) - Unfold all\n\n# Toggle folding\nCmd+K Cmd+L (Mac) / Ctrl+K Ctrl+L (Win) - Toggle current fold\n\n# Click fold indicators in gutter\nAlt+←/→ - Collapse/expand region',
        },
        {
          command: 'Bracket Matching',
          description: 'Navigate between matching brackets',
          usage: 'Cmd+Shift+\\ (Mac) / Ctrl+Shift+\\ (Win)',
          example: '# Go to matching bracket\nCmd+Shift+\\ (Mac) / Ctrl+Shift+\\ (Win) - Jump to matching bracket\n\n# Select to matching bracket\nCmd+Shift+\\ then Cmd+Shift+\\ (Mac) / Ctrl+Shift+\\ then Ctrl+Shift+\\ (Win) - Select inside brackets\n\n# Works with:\n# - Parentheses ()\n# - Square brackets []\n# - Curly braces {}\n# - Angle brackets <>',
        },
      ],
    },
    {
      title: 'Workspace and File Management',
      commands: [
        {
          command: 'Workspace Management',
          description: 'Manage multiple folders and projects',
          usage: 'File menu and workspace settings',
          example: '# Open folder\nCmd+K Cmd+O (Mac) / Ctrl+K Ctrl+O (Win) - Add folder to workspace\n\n# Save workspace\nFile > Save Workspace As...\n\n# Workspace features:\n# - Multi-folder projects\n# - Shared settings (.vscode/settings.json)\n# - Debug configurations (.vscode/launch.json)\n# - Task configurations (.vscode/tasks.json)',
        },
        {
          command: 'Tab Management',
          description: 'Manage multiple open files',
          usage: 'Cmd+Tab (Mac) / Ctrl+Tab (Win), Cmd+W (Mac) / Ctrl+W (Win), Cmd+Number (Mac) / Ctrl+Number (Win)',
          example: '# Tab navigation\nCmd+Tab (Mac) / Ctrl+Tab (Win) - Switch tabs\nCmd+1/2/3... (Mac) / Ctrl+1/2/3... (Win) - Go to tab by number\n\n# Tab operations\nCmd+W (Mac) / Ctrl+W (Win) - Close current tab\nCmd+K W (Mac) / Ctrl+K W (Win) - Close all tabs\nCmd+K Shift+W (Mac) / Ctrl+K Shift+W (Win) - Close other tabs\n\n# Reopen closed tab\nCmd+Shift+T (Mac) / Ctrl+Shift+T (Win)',
        },
        {
          command: 'Split Editor Layouts',
          description: 'Work with multiple editor layouts',
          usage: 'Cmd+\\ (Mac) / Ctrl+\\ (Win), View menu',
          example: '# Split editor\nCmd+\\ (Mac) / Ctrl+\\ (Win) - Split editor\nCmd+Alt+\\ (Mac) / Ctrl+Alt+\\ (Win) - Split editor orthogonally\n\n# Layout options:\n# - Split vertical/horizontal\n# - Editor groups (up to 4 groups)\n# - Grid layout\n\n# Focus groups\nCmd+1/2/3 (Mac) / Ctrl+1/2/3 (Win) - Focus editor group\n\n# Move editor between groups\nCtrl+Alt+←/→ (Win) - Move editor left/right',
        },
        {
          command: 'File and Folder Operations',
          description: 'Advanced file management',
          usage: 'Explorer and context menus',
          example: '# File operations\n# - Duplicate: Alt+Drag file\n# - Move to new folder: Drag and drop\n# - Copy path: Right-click > Copy Path\n# - Reveal in Finder: Right-click > Reveal in Finder\n\n# Folder operations\n# - New folder: Right-click > New Folder\n# - Collapse all: Right-click > Collapse All\n# - Save as workspace: Right-click > Add to Workspace',
        },
      ],
    },
    {
      title: 'Search and Replace Advanced',
      commands: [
        {
          command: 'Global Search',
          description: 'Search across entire workspace',
          usage: 'Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)',
          example: '# Global search\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n\n# Search options:\n# - Include/exclude files\n# - Case sensitivity\n# - Whole word\n# - Regular expression\n# - Context lines\n\n# Search in specific files\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win) then @ - Search in open editors\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win) then # - Search in workspace symbols',
        },
        {
          command: 'Search in Selection',
          description: 'Limit search to selected text',
          usage: 'Select text then Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)',
          example: '# Search in selection\n1. Select text\n2. Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n3. Click "Selection" toggle\n\n# Useful for:\n# - Searching specific functions\n# - Analyzing code blocks\n# - Finding references in scope\n\n# Alternative: Right-click > Find in Selection',
        },
        {
          command: 'Replace in Files',
          description: 'Global find and replace',
          usage: 'Cmd+Shift+H (Mac) / Ctrl+Shift+H (Win)',
          example: '# Replace in files\nCmd+Shift+H (Mac) / Ctrl+Shift+H (Win)\n\n# Features:\n# - Preview changes\n# - Replace all\n# - Individual file replacement\n# - Preserve case\n\n# Replace options:\n# - Use regular expressions\n# - Case sensitive\n# - Whole word',
        },
        {
          command: 'Regular Expressions',
          description: 'Advanced pattern matching',
          usage: 'Enable regex in search',
          example: '# Regex search\n1. Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n2. Click .* button\n3. Enter regex pattern\n\n# Common patterns:\n# \\w+ - Word characters\n# \\d+ - Digits\n# [a-zA-Z] - Letters\n# \\s+ - Whitespace\n# ^Start - Line starts with\n# End$ - Line ends with\n\n# Capture groups: (.*)',
        },
        {
          command: 'Search Filters',
          description: 'Filter search results',
          usage: 'Files to include/exclude',
          example: '# Include/exclude patterns\n# Include: *.js, *.ts, src/**\n# Exclude: node_modules/**, *.min.js\n\n# Examples:\n# - Search only in TypeScript files\n# - Exclude test files\n# - Search in specific folder\n\n# Quick filters:\n# @followed by symbol name\n# #followed by workspace symbol',
        },
      ],
    },
    {
      title: 'Bookmarks and Navigation',
      commands: [
        {
          command: 'Bookmarks',
          description: 'Mark and navigate to important locations',
          usage: 'Bookmarks extension or built-in features',
          example: '# Built-in navigation\nCmd+K Cmd+P (Mac) / Ctrl+K Ctrl+P (Win) then > - Go to line\n\n# Bookmarks extension (if installed)\n# Ctrl+Alt+K - Toggle bookmark\n# Ctrl+Alt+J - Jump to next bookmark\n# Ctrl+Alt+L - Jump to previous bookmark\n\n# Alternative: Use comments\n// TODO: Important location\n// FIXME: Needs attention',
        },
        {
          command: 'Quick Open Navigation',
          description: 'Navigate files and symbols quickly',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win) with modifiers',
          example: '# Quick open combinations\nCmd+P (Mac) / Ctrl+P (Win) - Open file\nCmd+P (Mac) / Ctrl+P (Win) then @ - Go to symbol in file\nCmd+P (Mac) / Ctrl+P (Win) then # - Go to symbol in workspace\nCmd+P (Mac) / Ctrl+P (Win) then : - Go to line number\nCmd+P (Mac) / Ctrl+P (Win) then > - Go to command\n\n# Recent files\nCmd+P (Mac) / Ctrl+P (Win) then R - Recent files\nCmd+P (Mac) / Ctrl+P (Win) then >recent - Open recent',
        },
        {
          command: 'Error and Warning Navigation',
          description: 'Navigate through problems',
          usage: 'F8, Problems panel',
          example: '# Navigate errors/warnings\nF8 - Go to next error or warning\nShift+F8 - Go to previous error or warning\n\n# Problems panel\nCmd+Shift+M (Mac) / Ctrl+Shift+M (Win) - Show problems\n\n# Error lens features:\n# - Inline error display\n# - Click to navigate to error',
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Debugging Advanced',
      commands: [
        {
          command: 'Breakpoint Management',
          description: 'Advanced breakpoint techniques',
          usage: 'F9, Debug panel',
          example: '# Breakpoint types\nF9 - Toggle line breakpoint\n\n# Conditional breakpoints\nRight-click breakpoint > Edit Breakpoint\n# Example: count > 5\n\n# Logpoints\nRight-click > Add Logpoint\n# Example: "Value: {count}"\n\n# Exception breakpoints\nDebug panel > Breakpoints > Add Exception Breakpoint\n\n# Function breakpoints\nDebug panel > Breakpoints > Add Function Breakpoint',
        },
        {
          command: 'Debug Console',
          description: 'Interactive debugging console',
          usage: 'Debug panel > Console',
          example: '# Debug console\n# - Evaluate expressions\n# - Execute commands\n# - Inspect variables\n\n# Console commands:\n# var name - Show variable\n# expression - Evaluate\n# await expression - Async evaluation\n\n# Useful expressions:\n# JSON.stringify(object)\n# object.property\n# array.length',
        },
        {
          command: 'Launch Configurations',
          description: 'Custom debugging setups',
          usage: 'launch.json file',
          example: '# Create launch.json\n1. Run > Add Configuration\n2. Select environment\n3. Customize settings\n\n# Common configurations:\n# - Node.js debugging\n# - Browser debugging\n# - Python debugging\n# - Docker debugging\n\n# Example Node.js config:\n{\n  "type": "node",\n  "request": "launch",\n  "program": "${workspaceFolder}/app.js"\n}',
        },
        {
          command: 'Debugging Features',
          description: 'Advanced debugging capabilities',
          usage: 'Debug panel and editor',
          example: '# Debug actions\nF5 - Start debugging\nShift+F5 - Stop debugging\nF9 - Toggle breakpoint\nF10 - Step over\nF11 - Step into\nShift+F11 - Step out\n\n# Debug features:\n# - Variable inspection\n# - Call stack navigation\n# - Watch expressions\n# - Inline values\n\n# Hot reload (if supported)\n# Auto-restart on file changes',
        },
        {
          command: 'Data Inspection',
          description: 'Advanced variable inspection',
          usage: 'Variables panel, hover inspection',
          example: '# Variable inspection\n# - Hover over variables\n# - Variables panel\n# - Watch panel\n\n# Advanced features:\n# - Object property expansion\n# - Array element inspection\n# - Function scope analysis\n# - Expression evaluation\n\n# Watch expressions:\n# - Add variables to watch\n# - Monitor expression results\n# - Track value changes',
        },
      ],
    },
    {
      title: 'Git Integration Advanced',
      commands: [
        {
          command: 'Advanced Git Operations',
          description: 'Complex Git workflows in VS Code',
          usage: 'Source Control panel, Command Palette',
          example: '# Advanced Git\n# - Stash changes\n# - Cherry pick\n# - Rebase interactive\n# - Merge conflicts resolution\n\n# Command Palette:\n# > Git: Stash\n# > Git: Stash Pop\n# > Git: Cherry Pick\n# > Git: Rebase\n# > Git: Resolve Merge Conflicts\n\n# Git operations:\n# - Stage/unstage changes\n# - Commit with message\n# - Push/pull branches',
        },
        {
          command: 'Branch Management',
          description: 'Git branch operations',
          usage: 'Status bar branch indicator',
          example: '# Branch operations\n# - Create branch\n# - Switch branch\n# - Delete branch\n# - Compare branches\n\n# Click branch name in status bar\n# or use Command Palette:\n# > Git: Create Branch\n# > Git: Checkout to...\n# > Git: Delete Branch\n\n# Branch features:\n# - Branch comparison\n# - Merge conflicts\n# - Pull requests',
        },
        {
          command: 'Commit and Staging',
          description: 'Advanced commit workflows',
          usage: 'Source Control panel',
          example: '# Staging strategies\n# - Stage individual changes\n# - Stage entire file\n# - Stage selected lines\n\n# Commit features:\n# - Signed commits\n# - Amend commits\n# - Commit message templates\n# - Pre-commit hooks\n\n# Staging shortcuts:\n# - Click file to stage/unstage\n# - Right-click for more options\n# - Drag to stage selected lines',
        },
        {
          command: 'Git History and Timeline',
          description: 'Visual Git history exploration',
          usage: 'GitLens extension, Timeline view',
          example: '# Git history\n# - Timeline view\n# - GitLens annotations\n# - File history\n# - Branch history\n\n# Features:\n# - Commit details\n# - Author information\n# - Commit comparisons\n# - Blame annotations\n\n# Timeline view:\n# - Right-click file > Open Timeline\n# - See file changes over time\n# - Restore previous versions',
        },
        {
          command: 'Merge Conflicts',
          description: 'Resolve merge conflicts efficiently',
          usage: 'Merge conflict editor',
          example: '# Merge conflict resolution\n# - Visual diff editor\n# - Accept current/ incoming/ both changes\n# - Manual editing\n\n# Conflict indicators:\n# - Red: conflicting changes\n# - Green: incoming changes\n# - Blue: current changes\n\n# Resolution options:\n# - Accept current change\n# - Accept incoming change\n# - Accept both changes\n# - Compare changes',
        },
      ],
    },
    {
      title: 'Terminal Integration',
      commands: [
        {
          command: 'Advanced Terminal Usage',
          description: 'Multi-terminal management',
          usage: 'Terminal panel, Ctrl+Shift+`',
          example: '# Terminal management\nCtrl+Shift+` - Create new terminal\nCmd+\\ (Mac) / Ctrl+\\ (Win) - Split terminal\nCmd+Shift+\\ (Mac) / Ctrl+Shift+\\ (Win) - Split terminal orthogonally\n\n# Terminal features:\n# - Multiple profiles\n# - Shell integration\n# - Command history\n# - Task automation\n\n# Terminal navigation:\n# - Focus terminal: Ctrl+`\n# - Kill terminal: Right-click > Kill Terminal',
        },
        {
          command: 'Task Automation',
          description: 'Automated build and development tasks',
          usage: 'tasks.json file',
          example: '# Create tasks.json\n1. Terminal > Configure Tasks\n2. Select template\n3. Customize commands\n\n# Task types:\n# - Build tasks\n# - Test tasks\n# - Watch tasks\n# - Custom tasks\n\n# Example task:\n{\n  "label": "build",\n  "type": "shell",\n  "command": "npm run build",\n  "group": "build"\n}\n\n# Run tasks:\n# Cmd+Shift+P > Tasks: Run Task',
        },
        {
          command: 'Shell Integration',
          description: 'Enhanced terminal features',
          usage: 'Terminal settings',
          example: '# Shell integration\n# - Command navigation\n# - Current working directory tracking\n# - Enhanced command history\n\n# Settings:\n# "terminal.integrated.shellIntegration.enabled": true\n\n# Features:\n# - Command decorations\n# - Exit code indicators\n# - Git status in terminal\n\n# Shell profiles:\n# - Multiple shell configurations\n# - Custom shell paths',
        },
        {
          command: 'Terminal Commands',
          description: 'Useful terminal commands for development',
          usage: 'Terminal panel',
          example: '# Common development commands\n# Node.js:\nnpm install, npm run, npm test\n\n# Python:\npip install, python -m venv, pytest\n\n# Git:\ngit status, git add, git commit, git push\n\n# Docker:\ndocker build, docker run, docker-compose\n\n# File operations:\nls, cd, mkdir, rm, cp, mv\n\n# Search:\ngrep, find, locate',
        },
      ],
    },
    {
      title: 'Snippets and Templates',
      commands: [
        {
          command: 'Code Snippets',
          description: 'Create and use code snippets',
          usage: 'Snippets files and insert snippet command',
          example: '# Insert snippet\nCmd+Shift+P (Mac) / Ctrl+Shift+P (Win) > Insert Snippet\n\n# Built-in snippets:\n# - JavaScript: for, if, function\n# - Python: class, def, for\n# - HTML: html:5, link, script\n\n# Create custom snippets:\n# 1. Cmd+Shift+P (Mac) / Ctrl+Shift+P (Win) > Configure User Snippets\n# 2. Select language\n# 3. Add snippet definitions\n\n# Example snippet:\n"Console log": {\n  "prefix": "cl",\n  "body": "console.log($1);",\n  "description": "Log to console"\n}',
        },
        {
          command: 'File and Project Templates',
          description: 'Template files for quick project setup',
          usage: 'File templates and generators',
          example: '# File templates\n# - Create template files\n# - Use placeholders\n# - Auto-format on creation\n\n# Project templates:\n# - Use generators like Yeoman\n# - Extension: Project Templates\n# - Custom folder templates\n\n# Template placeholders:\n# ${TM_FILENAME} - Current file name\n# ${TM_DIRECTORY} - Current directory\n# ${CURRENT_YEAR} - Current year\n# ${1:placeholder} - Tab stop',
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Extension Development',
      commands: [
        {
          command: 'Extension Creation',
          description: 'Build VS Code extensions',
          usage: 'Yo code generator',
          example: '# Create extension\nyo code\n\n# Extension types:\n# - New Extension (TypeScript)\n# - New Extension (JavaScript)\n# - Color Theme\n# - Language Support\n# - Code Snippets\n# - Keymap\n# - Extension Pack\n\n# Extension structure:\n# - src/ - Source code\n# - package.json - Extension manifest\n# - README.md - Documentation',
        },
        {
          command: 'Extension API',
          description: 'Core VS Code extension APIs',
          usage: 'vscode module',
          example: '# Core APIs\nimport * as vscode from \'vscode\';\n\n# Common APIs:\n# - window.showInformationMessage()\n# - workspace.getConfiguration()\n# - commands.registerCommand()\n# - languages.registerCompletionItemProvider()\n# - workspace.createFileSystemWatcher()\n\n# Extension context:\n# - extensionPath\n# - globalState\n# - workspaceState\n# - subscriptions',
        },
        {
          command: 'Extension Testing',
          description: 'Test extension functionality',
          usage: 'VS Code test runner',
          example: '# Test setup\n# - Mocha test framework\n# - VS Code test runner\n# - Mock VS Code APIs\n\n# Test commands\nnpm run test\nnpm run compile\nnpm run watch\n\n# Test types:\n# - Unit tests\n# - Integration tests\n# - Extension tests\n\n# Debug tests:\n# - F5 to launch extension\n# - Run tests in debug mode',
        },
        {
          command: 'Extension Publishing',
          description: 'Publish to marketplace',
          usage: 'vsce tool',
          example: '# Publish extension\nnpm install -g vsce\nvsce publish\n\n# Publishing steps:\n# 1. Create Azure DevOps account\n# 2. Create publisher\n# 3. Package extension\n# 4. Publish to marketplace\n\n# Commands:\nvsce package - Package extension\nvsce publish - Publish to marketplace\nvsce ls-publisher - List publishers',
        },
        {
          command: 'Extension Commands and Menus',
          description: 'Add commands and menu items',
          usage: 'package.json configuration',
          example: '# Register commands\nvscode.commands.registerCommand(\'extension.hello\', () => {\n  vscode.window.showInformationMessage(\'Hello World!\');\n});\n\n# package.json configuration:\n"contributes": {\n  "commands": [\n    {\n      "command": "extension.hello",\n      "title": "Hello World"\n    }\n  ]\n}',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Workspace Performance',
          description: 'Optimize large workspace performance',
          usage: 'Settings and workspace configuration',
          example: '# Performance settings\n{\n  "files.watcherExclude": {\n    "**/node_modules/**": true,\n    "**/.git/**": true,\n    "**/dist/**": true\n  },\n  "search.exclude": {\n    "**/node_modules": true,\n    "**/dist": true\n  },\n  "typescript.preferences.includePackageJsonAutoImports": "off"\n}',
        },
        {
          command: 'Memory Management',
          description: 'Optimize VS Code memory usage',
          usage: 'Command palette and settings',
          example: '# Memory optimization\n# - Restart VS Code regularly\n# - Close unused tabs\n# - Limit extensions\n# - Adjust workspace settings\n\n# Commands:\n> Developer: Reload Window\n> Developer: Reload With Extensions Disabled\n\n# Settings:\n# "window.zoomLevel": 0\n# "editor.minimap.enabled": false\n# "editor.renderLineHighlight": "none"',
        },
        {
          command: 'Extension Performance',
          description: 'Manage extension impact',
          usage: 'Extensions panel, performance tools',
          example: '# Extension management\n# - Disable unused extensions\n# - Use lightweight alternatives\n# - Monitor extension performance\n\n# Performance tools:\n# - Help > Toggle Developer Tools\n# - Extension performance profiling\n# - Startup time analysis\n\n# Settings:\n# "extensions.autoUpdate": false\n# "extensions.ignoreRecommendations": true',
        },
        {
          command: 'File and Memory Optimization',
          description: 'Optimize file handling and memory',
          usage: 'Advanced settings',
          example: '# File optimization\n{\n  "files.autoSave": "afterDelay",\n  "files.autoSaveDelay": 1000,\n  "files.maxMemoryForLargeFilesMB": 4096,\n  "editor.largeFileOptimizations": true\n}\n\n# Memory optimization\n# - Use exclude patterns\n# - Limit file watchers\n# - Optimize search\n# - Manage extensions',
        },
      ],
    },
    {
      title: 'Remote Development',
      commands: [
        {
          command: 'Remote SSH',
          description: 'Connect to remote servers via SSH',
          usage: 'Remote SSH extension',
          example: '# Remote SSH setup\n1. Install Remote SSH extension\n2. Cmd+Shift+P > Remote-SSH: Connect to Host\n3. Enter SSH connection details\n\n# Features:\n# - Full VS Code experience remotely\n# - Port forwarding\n# - File synchronization\n\n# SSH configuration:\n# ~/.ssh/config\nHost server-name\n  HostName server.com\n  User username\n  Port 22',
        },
        {
          command: 'Dev Containers',
          description: 'Development in Docker containers',
          usage: 'Dev Containers extension',
          example: '# Dev containers\n1. Create .devcontainer folder\n2. Add devcontainer.json\n3. Reopen in container\n\n# Benefits:\n# - Consistent development environment\n# - Isolated dependencies\n# - Team collaboration\n\n# Example devcontainer.json:\n{\n  "name": "Node.js",\n  "image": "mcr.microsoft.com/devcontainers/node:18",\n  "extensions": ["dbaeumer.vscode-eslint"]\n}',
        },
        {
          command: 'WSL Development',
          description: 'Windows Subsystem for Linux integration',
          usage: 'WSL extension',
          example: '# WSL development\n1. Install WSL extension\n2. Cmd+Shift+P > WSL: Reopen in WSL\n\n# Features:\n# - Linux tools on Windows\n# - Cross-platform development\n# - Performance optimization\n\n# WSL distributions:\n# - Ubuntu, Debian, Fedora\n# - Docker integration\n# - Git integration',
        },
        {
          command: 'Remote Tips and Tricks',
          description: 'Optimize remote development experience',
          usage: 'Remote development extensions',
          example: '# Remote development tips\n# - Use port forwarding for web apps\n# - Sync extensions automatically\n# - Configure settings per-remote\n\n# Performance:\n# - Use local extensions when possible\n# - Optimize file transfers\n# - Limit workspace size\n\n# Port forwarding:\n# - Forward ports automatically\n# - Access local services\n# - Debug remote applications',
        },
      ],
    },
    {
      title: 'Customization and Themes',
      commands: [
        {
          command: 'Custom Themes',
          description: 'Create and customize themes',
          usage: 'Theme development tools',
          example: '# Theme creation\nyo code\n# Select Color Theme\n\n# Theme structure:\n# - Token colors\n# - UI colors\n# - Icon themes\n# - Product icon themes\n\n# Install themes:\n# - Extensions marketplace\n# - File > Preferences > Color Theme\n# - File > Preferences > Icon Theme\n\n# Popular themes:\n# - Dark+, Light+, Monokai\n# - Dracula, Nord, Material',
        },
        {
          command: 'Settings Sync',
          description: 'Synchronize VS Code settings',
          usage: 'Turn on Settings Sync',
          example: '# Settings sync\n1. Turn on Settings Sync\n2. Sign in with Microsoft/GitHub\n3. Choose settings to sync\n\n# Synced items:\n# - Settings\n# - Keybindings\n# - Extensions\n# - UI State\n\n# Sync options:\n# - Sync all settings\n# - Select specific items\n# - Turn on/off sync',
        },
        {
          command: 'Custom Keybindings',
          description: 'Create personalized keyboard shortcuts',
          usage: 'keybindings.json',
          example: '# Custom keybindings\n{\n  "key": "cmd+k cmd+p",\n  "command": "workbench.action.showCommands"\n}\n\n# When clauses:\n# - "editorTextFocus"\n# - "explorerViewletVisible"\n# - "terminalFocus"\n\n# Override defaults:\n# - Add custom combinations\n# - Modify existing shortcuts\n# - Context-specific bindings',
        },
        {
          command: 'Workspace Settings',
          description: 'Project-specific configuration',
          usage: '.vscode/settings.json',
          example: '# Workspace settings\n.vscode/settings.json\n\n# Example:\n{\n  "editor.tabSize": 2,\n  "editor.formatOnSave": true,\n  "eslint.workingDirectories": ["src"],\n  "python.defaultInterpreterPath": "./venv/bin/python"\n}\n\n# Settings hierarchy:\n# - User settings (global)\n# - Remote settings (SSH/WSL)\n# - Workspace settings (project)\n# - Folder settings (multi-root)',
        },
      ],
    },
    {
      title: 'Advanced Features and Tips',
      commands: [
        {
          command: 'Zen Mode and Focus',
          description: 'Distraction-free coding environment',
          usage: 'Cmd+K Z (Mac) / Ctrl+K Z (Win)',
          example: '# Zen mode\nCmd+K Z (Mac) / Ctrl+K Z (Win)\n\n# Features:\n# - Fullscreen editing\n# - Hidden UI elements\n# - Centered layout\n\n# Exit: Esc twice\n\n# Focus mode:\n# - Highlight current line\n# - Fade out other content\n# - Improve concentration',
        },
        {
          command: 'Profile Templates',
          description: 'Pre-configured development setups',
          usage: 'Profiles feature',
          example: '# Profiles\n1. Manage > Profiles\n2. Create new profile\n3. Configure settings and extensions\n\n# Profile features:\n# - Settings\n# - Extensions\n# - Keybindings\n# - Snippets\n\n# Share profiles:\n# - Export profile\n# - Import profile\n# - Use templates',
        },
        {
          command: 'Notebook Editing',
          description: 'Jupyter notebook integration',
          usage: '.ipynb files',
          example: '# Notebook features\n# - Code cells\n# - Markdown cells\n# - Interactive execution\n# - Variable explorer\n\n# Extensions:\n# - Jupyter\n# - Python\n# - R\n\n# Notebook shortcuts:\n# - Shift+Enter: Run cell\n# - Alt+Enter: Run cell and insert below\n# - Ctrl+Enter: Run cell and stay',
        },
        {
          command: 'GitHub Copilot Integration',
          description: 'AI-powered code completion',
          usage: 'GitHub Copilot extension',
          example: '# Copilot features\n# - Inline suggestions\n# - Whole line completions\n# - Function generation\n# - Comment-to-code\n\n# Commands:\n# Tab - Accept suggestion\n# Esc - Reject suggestion\n# Ctrl+Enter - Accept line\n\n# Copilot Chat:\n# - Ask questions\n# - Explain code\n# - Generate tests\n# - Refactor code',
        },
        {
          command: 'Live Share',
          description: 'Real-time collaborative coding',
          usage: 'Live Share extension',
          example: '# Live Share\n# - Start collaboration session\n# - Share editor and terminal\n# - Audio calls\n# - Port forwarding\n\n# Benefits:\n# - Pair programming\n# - Code reviews\n# - Remote assistance\n\n# Features:\n# - Shared debugging\n# - Code collaboration\n# - Server sharing',
        },
        {
          command: 'Advanced Editor Features',
          description: 'Powerful editor capabilities',
          usage: 'Editor settings and commands',
          example: '# Advanced features\n# - Multiple cursors\n# - Column selection\n# - Bracket matching\n# - Code folding\n\n# Editor settings:\n# - Word wrap, line numbers\n# - Minimap, breadcrumbs\n# - Render whitespace\n# - Font ligatures\n\n# Commands:\n# - Toggle word wrap\n# - Toggle minimap\n# - Increase/decrease font size',
        },
      ],
    },
    {
      title: 'Productivity Tips and Shortcuts',
      commands: [
        {
          command: 'Time-Saving Shortcuts',
          description: 'Essential shortcuts for productivity',
          usage: 'Keyboard combinations',
          example: '# Essential shortcuts\n# Navigation:\nCmd+P (Mac) / Ctrl+P (Win) - Quick open\nCmd+Shift+O (Mac) / Ctrl+Shift+O (Win) - Go to symbol\nCmd+G (Mac) / F3 (Win) - Find next\n\n# Editing:\nCmd+/ (Mac) / Ctrl+/ (Win) - Toggle comment\nCmd+] (Mac) / Ctrl+] (Win) - Indent line\nCmd+[ (Mac) / Ctrl+[ (Win) - Outdent line\n\n# Windows/Tabs:\nCmd+\\ (Mac) / Ctrl+\\ (Win) - Split editor\nCmd+1/2/3 (Mac) / Ctrl+1/2/3 (Win) - Focus editor group\nCmd+W (Mac) / Ctrl+W (Win) - Close tab',
        },
        {
          command: 'Quick Fixes and Actions',
          description: 'Common code actions',
          usage: 'Cmd+. and context menu',
          example: '# Quick fixes (Cmd+.)\n# - Import missing modules\n# - Fix syntax errors\n# - Add missing braces\n# - Organize imports\n# - Extract to function\n\n# Context actions:\n# - Right-click for menu\n# - Light bulb suggestions\n# - Auto-fix issues\n\n# Refactoring:\n# - Rename symbol (F2)\n# - Extract function\n# - Extract variable',
        },
        {
          command: 'Search and Navigation Tips',
          description: 'Efficient searching techniques',
          usage: 'Search panels and commands',
          example: '# Search tips\n# - Use @ for symbols\n# - Use # for workspace symbols\n# - Use : for line numbers\n# - Use > for commands\n\n# Navigation tips:\n# - Ctrl+Click to go to definition\n# - Right-click > Peek\n# - Use breadcrumbs for navigation\n# - Toggle minimap for overview',
        },
        {
          command: 'Customization Tips',
          description: 'Personalize your workspace',
          usage: 'Settings and extensions',
          example: '# Customization tips\n# - Customize color themes\n# - Create custom snippets\n# - Set up keybindings\n# - Configure workspace settings\n\n# Extension recommendations:\n# - Prettier for formatting\n# - ESLint for linting\n# - GitLens for Git features\n# - Live Share for collaboration\n\n# Productivity extensions:\n# - Auto Rename Tag\n# - Bracket Pair Colorizer\n# - Path Intellisense',
        },
      ],
    },
  ],
};
