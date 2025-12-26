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
          command: 'Basic File Operations',
          description: 'Create, open, save, and manage files',
          usage: 'File menu and keyboard shortcuts',
          example: '# File operations\nCmd+N (Mac) / Ctrl+N (Win) - New file\nCmd+O (Mac) / Ctrl+O (Win) - Open file\nCmd+S (Mac) / Ctrl+S (Win) - Save file\nCmd+Shift+S (Mac) / Ctrl+Shift+S (Win) - Save As\n\n# Quick Open\nCmd+P (Mac) / Ctrl+P (Win) - Quick file switcher',
        },
        {
          command: 'Settings and Preferences',
          description: 'Configure VS Code behavior',
          usage: 'Cmd+, (Mac) / Ctrl+, (Windows)',
          example: '# Open Settings\nCmd+, (Mac) / Ctrl+, (Win)\n\n# Settings UI vs JSON\n# UI: User-friendly interface\n# JSON: Advanced configuration\n\n# Common settings:\n# - Font size\n# - Color theme\n# - Tab size\n# - Word wrap\n# - Auto save',
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
          example: '# Movement\nArrow keys - Move cursor\nCmd+→ (Mac) / End (Win) - End of line\nCmd+← (Mac) / Home (Win) - Start of line\n\n# Selection\nShift + Arrow keys - Extend selection\nCmd+A (Mac) / Ctrl+A (Win) - Select all\nCmd+L (Mac) / Ctrl+L (Win) - Select current line',
        },
        {
          command: 'Basic Text Editing',
          description: 'Cut, copy, paste, and delete operations',
          usage: 'Standard text editing shortcuts',
          example: '# Cut/Copy/Paste\nCmd+X (Mac) / Ctrl+X (Win) - Cut\nCmd+C (Mac) / Ctrl+C (Win) - Copy\nCmd+V (Mac) / Ctrl+V (Win) - Paste\n\n# Delete operations\nCmd+Shift+K (Mac) / Ctrl+Shift+K (Win) - Delete line\nBackspace/Delete - Delete characters',
        },
        {
          command: 'Undo and Redo',
          description: 'Manage editing history',
          usage: 'Cmd+Z / Cmd+Shift+Z (Mac) / Ctrl+Z / Ctrl+Y (Win)',
          example: '# Undo/Redo\nCmd+Z (Mac) / Ctrl+Z (Win) - Undo\nCmd+Shift+Z (Mac) / Ctrl+Y (Win) - Redo\n\n# Cursor position undo\nCmd+U (Mac) / Ctrl+U (Win) - Undo cursor position',
        },
        {
          command: 'Find and Replace',
          description: 'Search and replace text in files',
          usage: 'Cmd+F / Cmd+H (Mac) / Ctrl+F / Ctrl+H (Win)',
          example: '# Find\nCmd+F (Mac) / Ctrl+F (Win) - Find in current file\n\n# Replace\nCmd+H (Mac) / Ctrl+H (Win) - Find and replace\n\n# Find options\n# - Case sensitive\n# - Whole word\n# - Regular expression',
        },
        {
          command: 'Line Management',
          description: 'Manipulate lines and code blocks',
          usage: 'Alt+↑/↓, Shift+Alt+↑/↓',
          example: '# Move lines\nAlt+↑/↓ - Move line up/down\n\n# Copy lines\nShift+Alt+↓/↑ - Duplicate line up/down\n\n# Insert lines\nCmd+Enter (Mac) / Ctrl+Enter (Win) - Insert line below\nCmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win) - Insert line above',
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
          example: '# Trigger suggestions\nCtrl+Space - Show autocomplete\n\n# IntelliSense features:\n# - Code completion\n# - Parameter hints\n# - Quick info\n# - Member completion\n\n# Works with:\n# - JavaScript/TypeScript\n# - Python\n# - Java\n# - C++\n# - Many more languages',
        },
        {
          command: 'Code Actions and Quick Fixes',
          description: 'Automated code improvements',
          usage: 'Cmd+. (Mac) / Ctrl+. (Windows)',
          example: '# Quick fixes\nCmd+. (Mac) / Ctrl+. (Win) - Show code actions\n\n# Common actions:\n# - Import missing modules\n# - Fix syntax errors\n# - Extract to function\n# - Add missing braces\n# - Organize imports',
        },
        {
          command: 'Go to Definition',
          description: 'Navigate to symbol definitions',
          usage: 'F12 or Cmd+Click',
          example: '# Go to definition\nF12 - Jump to definition\n\n# Peek definition\nAlt+F12 - Inline definition\n\n# Alternative\nCmd+Click (Mac) / Ctrl+Click (Win) on symbol',
        },
        {
          command: 'Parameter Hints',
          description: 'Show function parameter information',
          usage: 'Shift+Cmd+Space (Mac) / Shift+Ctrl+Space (Win)',
          example: '# Parameter hints\nShift+Cmd+Space (Mac) - Show function parameters\n\n# Hover information\nCmd+K Cmd+I (Mac) / Ctrl+K Ctrl+I (Win) - Show hover\n\n# Shows:\n# - Function signatures\n# - Parameter types\n# - Documentation',
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
          usage: 'Alt+Click, Cmd+Alt+↑/↓',
          example: '# Add cursors\nAlt+Click - Add cursor at position\nCmd+Alt+↑/↓ (Mac) / Ctrl+Alt+↑/↓ (Win) - Add cursor above/below\n\n# Select next occurrence\nCmd+D (Mac) / Ctrl+D (Win) - Select next match\n\n# Select all occurrences\nCmd+Shift+L (Mac) / Ctrl+Shift+L (Win) - Select all matches',
        },
        {
          command: 'Column Selection',
          description: 'Select vertical blocks of text',
          usage: 'Shift+Alt+Drag or Cmd+Shift+↑/↓',
          example: '# Column selection\nShift+Alt+Drag - Select column\nCmd+Shift+↑/↓ (Mac) / Ctrl+Shift+↑/↓ (Win) - Column selection\n\n# Useful for:\n# - Editing similar code patterns\n# - Changing variable names\n# - Reformatting data',
        },
        {
          command: 'Smart Selection',
          description: 'Intelligently expand/shrink selections',
          usage: 'Shift+Alt+→/←',
          example: '# Expand selection\nShift+Alt+→ - Expand to larger scope\n\n# Shrink selection\nShift+Alt+← - Shrink to smaller scope\n\n# Selection hierarchy:\n# Word → Line → Block → Function → Class',
        },
        {
          command: 'Code Folding',
          description: 'Collapse and expand code blocks',
          usage: 'Cmd+K Cmd+0/1/2/3/4/5',
          example: '# Folding levels\nCmd+K Cmd+0 (Mac) - Fold all\nCmd+K Cmd+1 (Mac) - Fold level 1\nCmd+K Cmd+J (Mac) - Unfold all\n\n# Toggle folding\nCmd+K Cmd+L (Mac) - Toggle current fold\n\n# Click fold indicators in gutter',
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
          example: '# Open folder\nCmd+K Cmd+O (Mac) / Ctrl+K Ctrl+O (Win) - Add folder to workspace\n\n# Save workspace\nFile > Save Workspace As...\n\n# Workspace features:\n# - Multi-folder projects\n# - Shared settings\n# - Debug configurations\n# - Task configurations',
        },
        {
          command: 'File Explorer Navigation',
          description: 'Efficient file and folder management',
          usage: 'Explorer panel shortcuts',
          example: '# Explorer shortcuts\nCmd+Shift+E (Mac) / Ctrl+Shift+E (Win) - Show Explorer\n\n# File operations:\n# - New file/folder\n# - Rename (F2)\n# - Delete (Del)\n# - Copy path\n\n# Search in files\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win)',
        },
        {
          command: 'Tab Management',
          description: 'Manage multiple open files',
          usage: 'Cmd+Tab, Cmd+W, Cmd+Number',
          example: '# Tab navigation\nCmd+Tab (Mac) / Ctrl+Tab (Win) - Switch tabs\nCmd+1/2/3... (Mac) / Ctrl+1/2/3... (Win) - Go to tab by number\n\n# Tab operations\nCmd+W (Mac) / Ctrl+W (Win) - Close current tab\nCmd+K W (Mac) / Ctrl+K W (Win) - Close all tabs',
        },
        {
          command: 'Split Editor',
          description: 'Work with multiple editor layouts',
          usage: 'Cmd+\\, View menu',
          example: '# Split editor\nCmd+\\ (Mac) / Ctrl+\\ (Win) - Split editor\n\n# Layout options:\n# - Split vertical/horizontal\n# - Editor groups\n# - Grid layout\n\n# Focus groups\nCmd+1/2/3 (Mac) / Ctrl+1/2/3 (Win) - Focus editor group',
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
          example: '# Global search\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n\n# Search options:\n# - Include/exclude files\n# - Case sensitivity\n# - Whole word\n# - Regular expression\n# - Context lines',
        },
        {
          command: 'Search in Selection',
          description: 'Limit search to selected text',
          usage: 'Select text then Cmd+Shift+F',
          example: '# Search in selection\n1. Select text\n2. Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n3. Click "Selection" toggle\n\n# Useful for:\n# - Searching specific functions\n# - Analyzing code blocks\n# - Finding references in scope',
        },
        {
          command: 'Replace in Files',
          description: 'Global find and replace',
          usage: 'Cmd+Shift+H (Mac) / Ctrl+Shift+H (Win)',
          example: '# Replace in files\nCmd+Shift+H (Mac) / Ctrl+Shift+H (Win)\n\n# Features:\n# - Preview changes\n# - Replace all\n# - Individual file replacement\n# - Preserve case',
        },
        {
          command: 'Regular Expressions',
          description: 'Advanced pattern matching',
          usage: 'Enable regex in search',
          example: '# Regex search\n1. Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n2. Click .* button\n3. Enter regex pattern\n\n# Common patterns:\n# \\w+ - Word characters\n# \\d+ - Digits\n# [a-zA-Z] - Letters\n# \\s+ - Whitespace',
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
          example: '# Breakpoint types\nF9 - Toggle line breakpoint\n\n# Conditional breakpoints\nRight-click breakpoint > Edit Breakpoint\n\n# Logpoints\nRight-click > Add Logpoint\n\n# Exception breakpoints\nDebug panel > Breakpoints > Add Exception Breakpoint',
        },
        {
          command: 'Debug Console',
          description: 'Interactive debugging console',
          usage: 'Debug panel > Console',
          example: '# Debug console\n# - Evaluate expressions\n# - Execute commands\n# - Inspect variables\n\n# Console commands:\n# var name - Show variable\n# expression - Evaluate\n# await expression - Async evaluation',
        },
        {
          command: 'Launch Configurations',
          description: 'Custom debugging setups',
          usage: 'launch.json file',
          example: '# Create launch.json\n1. Run > Add Configuration\n2. Select environment\n3. Customize settings\n\n# Common configurations:\n# - Node.js debugging\n# - Browser debugging\n# - Python debugging\n# - Docker debugging',
        },
        {
          command: 'Data Inspection',
          description: 'Advanced variable inspection',
          usage: 'Variables panel, hover inspection',
          example: '# Variable inspection\n# - Hover over variables\n# - Variables panel\n# - Watch panel\n\n# Advanced features:\n# - Object property expansion\n# - Array element inspection\n# - Function scope analysis',
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
          example: '# Advanced Git\n# - Stash changes\n# - Cherry pick\n# - Rebase interactive\n# - Merge conflicts resolution\n\n# Command Palette:\n# > Git: Stash\n# > Git: Cherry Pick\n# > Git: Rebase\n# > Git: Resolve Merge Conflicts',
        },
        {
          command: 'Branch Management',
          description: 'Git branch operations',
          usage: 'Status bar branch indicator',
          example: '# Branch operations\n# - Create branch\n# - Switch branch\n# - Delete branch\n# - Compare branches\n\n# Click branch name in status bar\n# or use Command Palette:\n# > Git: Create Branch\n# > Git: Checkout to...',
        },
        {
          command: 'Commit and Staging',
          description: 'Advanced commit workflows',
          usage: 'Source Control panel',
          example: '# Staging strategies\n# - Stage individual changes\n# - Stage entire file\n# - Stage selected lines\n\n# Commit features:\n# - Signed commits\n# - Amend commits\n# - Commit message templates\n# - Pre-commit hooks',
        },
        {
          command: 'Git History',
          description: 'Visual Git history exploration',
          usage: 'GitLens extension, Timeline view',
          example: '# Git history\n# - Timeline view\n# - GitLens annotations\n# - File history\n# - Branch history\n\n# Features:\n# - Commit details\n# - Author information\n# - Commit comparisons\n# - Blame annotations',
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
          example: '# Terminal management\nCtrl+Shift+` - Create new terminal\nCmd+\\ (Mac) / Ctrl+\\ (Win) - Split terminal\n\n# Terminal features:\n# - Multiple profiles\n# - Shell integration\n# - Command history\n# - Task automation',
        },
        {
          command: 'Task Automation',
          description: 'Automated build and development tasks',
          usage: 'tasks.json file',
          example: '# Create tasks.json\n1. Terminal > Configure Tasks\n2. Select template\n3. Customize commands\n\n# Task types:\n# - Build tasks\n# - Test tasks\n# - Watch tasks\n# - Custom tasks',
        },
        {
          command: 'Shell Integration',
          description: 'Enhanced terminal features',
          usage: 'Terminal settings',
          example: '# Shell integration\n# - Command navigation\n# - Current working directory tracking\n# - Enhanced command history\n\n# Settings:\n# "terminal.integrated.shellIntegration.enabled": true',
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
          example: '# Create extension\nyo code\n\n# Extension types:\n# - New Extension (TypeScript)\n# - New Extension (JavaScript)\n# - Color Theme\n# - Language Support\n# - Code Snippets\n# - Keymap\n# - Extension Pack',
        },
        {
          command: 'Extension API',
          description: 'Core VS Code extension APIs',
          usage: 'vscode module',
          example: '# Core APIs\nimport * as vscode from \'vscode\';\n\n# Common APIs:\n# - window.showInformationMessage()\n# - workspace.getConfiguration()\n# - commands.registerCommand()\n# - languages.registerCompletionItemProvider()',
        },
        {
          command: 'Extension Testing',
          description: 'Test extension functionality',
          usage: 'VS Code test runner',
          example: '# Test setup\n# - Mocha test framework\n# - VS Code test runner\n# - Mock VS Code APIs\n\n# Test commands\nnpm run test\nnpm run compile\nnpm run watch',
        },
        {
          command: 'Extension Publishing',
          description: 'Publish to marketplace',
          usage: 'vsce tool',
          example: '# Publish extension\nnpm install -g vsce\nvsce publish\n\n# Publishing steps:\n# 1. Create Azure DevOps account\n# 2. Create publisher\n# 3. Package extension\n# 4. Publish to marketplace',
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
          example: '# Performance settings\n{\n  "files.watcherExclude": {\n    "**/node_modules/**": true,\n    "**/.git/**": true\n  },\n  "search.exclude": {\n    "**/node_modules": true\n  }\n}',
        },
        {
          command: 'Memory Management',
          description: 'Optimize VS Code memory usage',
          usage: 'Command palette and settings',
          example: '# Memory optimization\n# - Restart VS Code regularly\n# - Close unused tabs\n# - Limit extensions\n# - Adjust workspace settings\n\n# Command:\n> Developer: Reload Window',
        },
        {
          command: 'Extension Performance',
          description: 'Manage extension impact',
          usage: 'Extensions panel, performance tools',
          example: '# Extension management\n# - Disable unused extensions\n# - Use lightweight alternatives\n# - Monitor extension performance\n\n# Performance tools:\n# - Help > Toggle Developer Tools\n# - Extension performance profiling',
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
          example: '# Remote SSH setup\n1. Install Remote SSH extension\n2. Cmd+Shift+P > Remote-SSH: Connect to Host\n3. Enter SSH connection details\n\n# Features:\n# - Full VS Code experience remotely\n# - Port forwarding\n# - File synchronization',
        },
        {
          command: 'Dev Containers',
          description: 'Development in Docker containers',
          usage: 'Dev Containers extension',
          example: '# Dev containers\n1. Create .devcontainer folder\n2. Add devcontainer.json\n3. Reopen in container\n\n# Benefits:\n# - Consistent development environment\n# - Isolated dependencies\n# - Team collaboration',
        },
        {
          command: 'WSL Development',
          description: 'Windows Subsystem for Linux integration',
          usage: 'WSL extension',
          example: '# WSL development\n1. Install WSL extension\n2. Cmd+Shift+P > WSL: Reopen in WSL\n\n# Features:\n# - Linux tools on Windows\n# - Cross-platform development\n# - Performance optimization',
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
          example: '# Theme creation\nyo code\n# Select Color Theme\n\n# Theme structure:\n# - Token colors\n# - UI colors\n# - Icon themes\n# - Product icon themes',
        },
        {
          command: 'Settings Sync',
          description: 'Synchronize VS Code settings',
          usage: 'Turn on Settings Sync',
          example: '# Settings sync\n1. Turn on Settings Sync\n2. Sign in with Microsoft/GitHub\n3. Choose settings to sync\n\n# Synced items:\n# - Settings\n# - Keybindings\n# - Extensions\n# - UI State',
        },
        {
          command: 'Custom Keybindings',
          description: 'Create personalized keyboard shortcuts',
          usage: 'keybindings.json',
          example: '# Custom keybindings\n{\n  "key": "cmd+k cmd+p",\n  "command": "workbench.action.showCommands"\n}\n\n# When clauses:\n# - "editorTextFocus"\n# - "explorerViewletVisible"\n# - "terminalFocus"',
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
          example: '# Zen mode\nCmd+K Z (Mac) / Ctrl+K Z (Win)\n\n# Features:\n# - Fullscreen editing\n# - Hidden UI elements\n# - Centered layout\n\n# Exit: Esc twice',
        },
        {
          command: 'Profile Templates',
          description: 'Pre-configured development setups',
          usage: 'Profiles feature',
          example: '# Profiles\n1. Manage > Profiles\n2. Create new profile\n3. Configure settings and extensions\n\n# Profile features:\n# - Settings\n# - Extensions\n# - Keybindings\n# - Snippets',
        },
        {
          command: 'Notebook Editing',
          description: 'Jupyter notebook integration',
          usage: '.ipynb files',
          example: '# Notebook features\n# - Code cells\n# - Markdown cells\n# - Interactive execution\n# - Variable explorer\n\n# Extensions:\n# - Jupyter\n# - Python\n# - R',
        },
        {
          command: 'GitHub Copilot Integration',
          description: 'AI-powered code completion',
          usage: 'GitHub Copilot extension',
          example: '# Copilot features\n# - Inline suggestions\n# - Whole line completions\n# - Function generation\n# - Comment-to-code\n\n# Commands:\n# Tab - Accept suggestion\n# Esc - Reject suggestion\n# Ctrl+Enter - Accept line',
        },
        {
          command: 'Live Share',
          description: 'Real-time collaborative coding',
          usage: 'Live Share extension',
          example: '# Live Share\n# - Start collaboration session\n# - Share editor and terminal\n# - Audio calls\n# - Port forwarding\n\n# Benefits:\n# - Pair programming\n# - Code reviews\n# - Remote assistance',
        },
      ],
    },
  ],
};
