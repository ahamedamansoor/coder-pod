import { Zap } from 'lucide-react';

export const jetbrainsCheatsheet = {
  id: 'jetbrains',
  name: 'JetBrains IDEs',
  description: 'Master IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs from basics to expert (2023.3+)',
  icon: Zap,
  colorTheme: 'purple' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with JetBrains IDEs',
      commands: [
        {
          command: 'IDE Installation and Setup',
          description: 'Install and configure JetBrains IDEs',
          usage: 'Download from jetbrains.com',
          example: '# Installation Options:\n# - IntelliJ IDEA (Java/Kotlin/Scala)\n# - PyCharm (Python)\n# - WebStorm (JavaScript/TypeScript)\n# - PhpStorm (PHP)\n# - RubyMine (Ruby)\n# - CLion (C/C++)\n# - GoLand (Go)\n# - DataGrip (SQL)\n\n# First-time setup:\n# 1. Import settings if available\n# 2. Choose UI theme (Darcula/Light)\n# 3. Configure keymap (Default/Visual Studio/Emacs)\n# 4. Install essential plugins',
        },
        {
          command: 'Understanding the Interface',
          description: 'JetBrains IDE UI components and layout',
          usage: 'Menu bar, Tool windows, Editor, Status bar',
          example: '# Main Components:\n# Menu Bar - File, Edit, View, Navigate, Code, Refactor, Run, Tools, Window, Help\n# Tool Windows - Project, Structure, Favorites, Find, Run, Debug, etc.\n# Editor Area - Code editing with tabs\n# Status Bar - Information, notifications, quick actions\n\n# Customization:\n# View > Appearance > various options\n# Right-click tool window header for customization',
        },
        {
          command: 'Find Action',
          description: 'Access all IDE commands and features',
          usage: 'Cmd+Shift+A (Mac) / Ctrl+Shift+A (Win)',
          example: '# Open Find Action\nCmd+Shift+A (Mac) / Ctrl+Shift+A (Win)\n\n# Examples:\n# > Settings - Open IDE settings\n# > Project Structure - Configure project\n# > Reformat Code - Format current file\n# > Git Commit - Open commit dialog\n# > Run Configuration - Create run config',
        },
        {
          command: 'Search Everywhere',
          description: 'Universal search for files, classes, symbols, actions',
          usage: 'Double Shift',
          example: '# Search Everywhere\nPress Shift twice quickly\n\n# Search categories:\n# - Classes and files\n# - Symbols and methods\n# - Actions and settings\n# - Git branches\n# - Recent locations\n\n# Tips:\n# - Use filters (Classes, Files, Symbols, Actions)\n# - Use camel case matching: MyClassName matches mcn',
        },
        {
          command: 'Settings and Preferences',
          description: 'Configure IDE behavior and appearance',
          usage: 'Cmd+, (Mac) / Ctrl+Alt+S (Win)',
          example: '# Open Settings\nCmd+, (Mac) / Ctrl+Alt+S (Win)\n\n# Key settings categories:\n# - Appearance & Behavior (themes, fonts)\n# - Editor (colors, code style, inspections)\n# - Build, Execution, Deployment\n# - Version Control\n# - Plugins\n\n# Project-specific settings:\n# File > Project Structure',
        },
      ],
    },
    {
      title: 'Basic Navigation and File Operations',
      commands: [
        {
          command: 'Recent Files',
          description: 'Quick access to recently opened files',
          usage: 'Cmd+E (Mac) / Ctrl+E (Win)',
          example: '# Recent Files\nCmd+E (Mac) / Ctrl+E (Win)\n\n# Features:\n# - Jump to any recently opened file\n# - Filter by typing filename\n# - Shows most recent at top\n\n# Recent Locations:\nCmd+Shift+E (Mac) / Ctrl+Shift+E (Win)',
        },
        {
          command: 'Go to Class',
          description: 'Navigate to any class in project',
          usage: 'Cmd+O (Mac) / Ctrl+N (Win)',
          example: '# Go to Class\nCmd+O (Mac) / Ctrl+N (Win)\n\n# Features:\n# - Fuzzy matching\n# - Camel case support\n# - Show qualified names\n# - Navigate to inner classes',
        },
        {
          command: 'Go to File',
          description: 'Navigate to any file in project',
          usage: 'Cmd+Shift+O (Mac) / Ctrl+Shift+N (Win)',
          example: '# Go to File\nCmd+Shift+O (Mac) / Ctrl+Shift+N (Win)\n\n# Tips:\n# - Use partial filename: pom.xml -> pom\n# - Navigate directories: src/main/java\n# - Show file paths in results',
        },
        {
          command: 'Go to Symbol',
          description: 'Navigate to methods, fields, and symbols',
          usage: 'Cmd+Alt+O (Mac) / Ctrl+Alt+Shift+N (Win)',
          example: '# Go to Symbol\nCmd+Alt+O (Mac) / Ctrl+Alt+Shift+N (Win)\n\n# Searches:\n# - Methods and functions\n# - Fields and variables\n# - Constants\n# - Class members',
        },
        {
          command: 'Go to Line',
          description: 'Jump to specific line number',
          usage: 'Cmd+L (Mac) / Ctrl+G (Win)',
          example: '# Go to Line\nCmd+L (Mac) / Ctrl+G (Win)\n\n# Enter line number to jump\n# Shows current line in dialog\n# Works with column numbers too',
        },
      ],
    },
    {
      title: 'Basic Code Editing',
      commands: [
        {
          command: 'Duplicate Line',
          description: 'Duplicate current line or selection',
          usage: 'Cmd+D (Mac) / Ctrl+D (Win)',
          example: '# Duplicate Line\nCmd+D (Mac) / Ctrl+D (Win)\n\n# Works with:\n# - Single lines\n# - Multi-line selections\n# - Code blocks',
        },
        {
          command: 'Delete Line',
          description: 'Delete entire line at cursor',
          usage: 'Cmd+Backspace (Mac) / Ctrl+Y (Win)',
          example: '# Delete Line\nCmd+Backspace (Mac) / Ctrl+Y (Win)\n\n# Features:\n# - Removes entire line\n# - Preserves undo history\n# - Works with multiple selected lines',
        },
        {
          command: 'Move Line Up/Down',
          description: 'Move lines vertically',
          usage: 'Cmd+Shift+↑/↓ (Mac) / Ctrl+Shift+↑/↓ (Win)',
          example: '# Move Line\nCmd+Shift+↑ (Mac) - Move line up\nCmd+Shift+↓ (Mac) - Move line down\n\n# Maintains proper indentation\n# Works with multi-line selections',
        },
        {
          command: 'Comment Line',
          description: 'Toggle line comments',
          usage: 'Cmd+/ (Mac) / Ctrl+/ (Win)',
          example: '# Comment Line\nCmd+/ (Mac) / Ctrl+/ (Win)\n\n# Features:\n# - Toggle comment on/off\n# - Works with multiple lines\n# - Language-specific comment syntax',
        },
        {
          command: 'Comment Block',
          description: 'Toggle block comments',
          usage: 'Cmd+Alt+/ (Mac) / Ctrl+Shift+/ (Win)',
          example: '# Comment Block\nCmd+Alt+/ (Mac) / Ctrl+Shift+/ (Win)\n\n# Creates block comments:\n# /* ... */ for C-style languages\n# <!-- ... --> for XML/HTML\n# """...""" for Python',
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Navigation',
      commands: [
        {
          command: 'Go to Declaration',
          description: 'Navigate to symbol definition',
          usage: 'Cmd+B (Mac) / Ctrl+B (Win)',
          example: '# Go to Declaration\nCmd+B (Mac) / Ctrl+B (Win)\n\n# Alternative:\n# - Ctrl+Click (Mac/Win)\n# - Cmd+Click (Mac)\n\n# Features:\n# - Jump to class/method definition\n# - Navigate to variable declaration\n# - Follow imports and includes',
        },
        {
          command: 'Go to Implementation',
          description: 'Navigate to interface implementations',
          usage: 'Cmd+Alt+B (Mac) / Ctrl+Alt+B (Win)',
          example: '# Go to Implementation\nCmd+Alt+B (Mac) / Ctrl+Alt+B (Win)\n\n# Shows:\n# - Class implementations of interface\n# - Method overrides\n# - Multiple implementations available',
        },
        {
          command: 'Go to Super Method',
          description: 'Navigate to parent class/method',
          usage: 'Cmd+U (Mac) / Ctrl+U (Win)',
          example: '# Go to Super Method\nCmd+U (Mac) / Ctrl+U (Win)\n\n# Navigates to:\n# - Parent class\n# - Overridden method\n# - Interface method',
        },
        {
          command: 'Navigate Back/Forward',
          description: 'Navigate through location history',
          usage: 'Cmd+[ / Cmd+] (Mac) / Ctrl+Alt+←/→ (Win)',
          example: '# Navigate History\nCmd+[ (Mac) / Ctrl+Alt+← (Win) - Back\nCmd+] (Mac) / Ctrl+Alt+→ (Win) - Forward\n\n# Maintains navigation stack\n# Works across files and symbols',
        },
        {
          command: 'Last Edit Location',
          description: 'Jump to last edited position',
          usage: 'Cmd+Shift+Backspace (Mac) / Ctrl+Shift+Backspace (Win)',
          example: '# Last Edit Location\nCmd+Shift+Backspace (Mac) / Ctrl+Shift+Backspace (Win)\n\n# Quickly return to where you were editing\n# Maintains edit history across sessions',
        },
      ],
    },
    {
      title: 'Code Completion and Intelligence',
      commands: [
        {
          command: 'Basic Completion',
          description: 'Standard code completion',
          usage: 'Ctrl+Space',
          example: '# Basic Completion\nCtrl+Space\n\n# Suggestions:\n# - Local variables and methods\n# - Class members\n# - Keywords and syntax\n# - Import suggestions',
        },
        {
          command: 'Smart Completion',
          description: 'Context-aware completion',
          usage: 'Ctrl+Shift+Space',
          example: '# Smart Completion\nCtrl+Shift+Space\n\n# Filters suggestions based on:\n# - Expected type\n# - Current context\n# - Variable types\n# - Method return types',
        },
        {
          command: 'Complete Statement',
          description: 'Auto-complete current statement',
          usage: 'Cmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win)',
          example: '# Complete Statement\nCmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win)\n\n# Auto-adds:\n# - Semicolons\n# - Braces and parentheses\n# - Missing syntax elements\n# - Proper indentation',
        },
        {
          command: 'Parameter Info',
          description: 'Show method parameter information',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win)',
          example: '# Parameter Info\nCmd+P (Mac) / Ctrl+P (Win)\n\n# Shows:\n# - Parameter names\n# - Parameter types\n# - Current parameter highlight\n# - Documentation hints',
        },
        {
          command: 'Quick Documentation',
          description: 'Show documentation popup',
          usage: 'Cmd+Q (Mac) / Ctrl+Q (Win)',
          example: '# Quick Documentation\nCmd+Q (Mac) / Ctrl+Q (Win)\n\n# Displays:\n# - JSDoc/Javadoc\n# - Method signatures\n# - Parameter descriptions\n# - Return value documentation',
        },
      ],
    },
    {
      title: 'Refactoring Basics',
      commands: [
        {
          command: 'Refactor This',
          description: 'Show all available refactorings',
          usage: 'Ctrl+T (Mac) / Ctrl+Alt+Shift+T (Win)',
          example: '# Refactor This\nCtrl+T (Mac) / Ctrl+Alt+Shift+T (Win)\n\n# Available refactorings:\n# - Rename\n# - Extract Method/Variable/Constant\n# - Inline\n# - Change Signature\n# - Pull/Push Members',
        },
        {
          command: 'Rename',
          description: 'Rename symbol across project',
          usage: 'Shift+F6',
          example: '# Rename\nShift+F6\n\n# Renames:\n# - Variables and methods\n# - Classes and files\n# - Packages and modules\n# - All references automatically',
        },
        {
          command: 'Extract Method',
          description: 'Extract selected code to method',
          usage: 'Cmd+Alt+M (Mac) / Ctrl+Alt+M (Win)',
          example: '# Extract Method\nCmd+Alt+M (Mac) / Ctrl+Alt+M (Win)\n\n# Process:\n# 1. Select code to extract\n# 2. Press shortcut\n# 3. Enter method name\n# 4. Configure parameters',
        },
        {
          command: 'Extract Variable',
          description: 'Extract expression to variable',
          usage: 'Cmd+Alt+V (Mac) / Ctrl+Alt+V (Win)',
          example: '# Extract Variable\nCmd+Alt+V (Mac) / Ctrl+Alt+V (Win)\n\n# Creates:\n# - Local variables\n# - Constants (optionally)\n# - Proper type inference',
        },
        {
          command: 'Inline',
          description: 'Inline variable/method back to code',
          usage: 'Cmd+Alt+N (Mac) / Ctrl+Alt+N (Win)',
          example: '# Inline\nCmd+Alt+N (Mac) / Ctrl+Alt+N (Win)\n\n# Inlines:\n# - Variables\n# - Methods\n# - Constants\n# - Parameters',
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced Refactoring',
      commands: [
        {
          command: 'Extract Constant',
          description: 'Extract value to constant',
          usage: 'Cmd+Alt+C (Mac) / Ctrl+Alt+C (Win)',
          example: '# Extract Constant\nCmd+Alt+C (Mac) / Ctrl+Alt+C (Win)\n\n# Features:\n# - Creates static final fields\n# - Replaces all occurrences\n# - Suggests appropriate scope',
        },
        {
          command: 'Extract Field',
          description: 'Extract to class field',
          usage: 'Cmd+Alt+F (Mac) / Ctrl+Alt+F (Win)',
          example: '# Extract Field\nCmd+Alt+F (Mac) / Ctrl+Alt+F (Win)\n\n# Creates:\n# - Instance fields\n# - Static fields (optionally)\n# - Proper encapsulation',
        },
        {
          command: 'Extract Parameter',
          description: 'Extract to method parameter',
          usage: 'Cmd+Alt+P (Mac) / Ctrl+Alt+P (Win)',
          example: '# Extract Parameter\nCmd+Alt+P (Mac) / Ctrl+Alt+P (Win)\n\n# Features:\n# - Adds parameter to method signature\n# - Updates all call sites\n# - Handles default values',
        },
        {
          command: 'Change Signature',
          description: 'Modify method signature',
          usage: 'Cmd+F6 (Mac) / Ctrl+F6 (Win)',
          example: '# Change Signature\nCmd+F6 (Mac) / Ctrl+F6 (Win)\n\n# Can modify:\n# - Parameter names and types\n# - Return type\n# - Parameter order\n# - Add/remove parameters',
        },
        {
          command: 'Move',
          description: 'Move class/method to different location',
          usage: 'F6',
          example: '# Move\nF6\n\n# Can move:\n# - Classes to different packages\n# - Methods to different classes\n# - Files to different directories',
        },
      ],
    },
    {
      title: 'Search and Replace Advanced',
      commands: [
        {
          command: 'Find in Path',
          description: 'Search across entire project',
          usage: 'Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)',
          example: '# Find in Path\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n\n# Options:\n# - File masks (*.java, *.js)\n# - Scope (Project, Module, Directory)\n# - Case sensitivity\n# - Whole word\n# - Regular expressions',
        },
        {
          command: 'Replace in Path',
          description: 'Replace across entire project',
          usage: 'Cmd+Shift+R (Mac) / Ctrl+Shift+R (Win)',
          example: '# Replace in Path\nCmd+Shift+R (Mac) / Ctrl+Shift+R (Win)\n\n# Features:\n# - Preview changes\n# - Replace all or individual\n# - Context preview\n# - Safe replace with refactoring',
        },
        {
          command: 'Find Usages',
          description: 'Find all symbol usages',
          usage: 'Cmd+Alt+F7 (Mac) / Alt+F7 (Win)',
          example: '# Find Usages\nCmd+Alt+F7 (Mac) / Alt+F7 (Win)\n\n# Shows:\n# - All usages in project\n# - Grouped by file\n# - Navigate to each usage',
        },
        {
          command: 'Structural Search',
          description: 'Search by code patterns',
          usage: 'Edit > Find > Search Structurally',
          example: '# Structural Search\n# Search by patterns, not text\n# Example: find all for loops\n# for($type$ $var$ : $collection$) { $stmt$ }\n\n# Templates for common patterns:\n# - Method calls\n# - Class declarations\n# - Exception handling',
        },
      ],
    },
    {
      title: 'Multi-Cursor and Advanced Selection',
      commands: [
        {
          command: 'Column Selection',
          description: 'Select rectangular blocks of text',
          usage: 'Alt+Shift+Drag or Cmd+Shift+8 (Mac)',
          example: '# Column Selection\nAlt+Shift+Drag - Select with mouse\nCmd+Shift+8 (Mac) - Toggle column mode\n\n# Useful for:\n# - Editing similar code patterns\n# - Changing variable names\n# - Reformatting data',
        },
        {
          command: 'Add Selection for Next Occurrence',
          description: 'Multi-select next matching word',
          usage: 'Ctrl+G (Mac) / Alt+J (Win)',
          example: '# Add Selection\nCtrl+G (Mac) / Alt+J (Win)\n\n# Features:\n# - Selects next occurrence\n# - Builds multi-cursor\n# - Works with any word',
        },
        {
          command: 'Select All Occurrences',
          description: 'Select all matching words',
          usage: 'Ctrl+Cmd+G (Mac) / Ctrl+Alt+Shift+J (Win)',
          example: '# Select All\nCtrl+Cmd+G (Mac) / Ctrl+Alt+Shift+J (Win)\n\n# Selects all matches in file\n# Creates multiple cursors\n# Great for bulk edits',
        },
        {
          command: 'Extend/Shrink Selection',
          description: 'Intelligently expand/shrink selections',
          usage: 'Cmd+W / Cmd+Shift+W (Mac) / Ctrl+W / Ctrl+Shift+W (Win)',
          example: '# Selection Control\nCmd+W (Mac) / Ctrl+W (Win) - Extend\nCmd+Shift+W (Mac) / Ctrl+Shift+W (Win) - Shrink\n\n# Selection hierarchy:\n# Word → Line → Block → Method → Class',
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Debugging Advanced',
      commands: [
        {
          command: 'Conditional Breakpoints',
          description: 'Breakpoints with conditions',
          usage: 'Right-click breakpoint > Edit Breakpoint',
          example: '# Conditional Breakpoints\n# Set conditions like:\n# - x > 100\n# - str.equals("test")\n# - i % 10 == 0\n\n# Types:\n# - Condition breakpoints\n# - Log breakpoints (no pause)\n# - Exception breakpoints',
        },
        {
          command: 'Evaluate Expression',
          description: 'Execute code in debugger context',
          usage: 'Alt+F8',
          example: '# Evaluate Expression\nAlt+F8\n\n# Can:\n# - Execute any code\n# - Inspect variables\n# - Modify values\n# - Call methods\n# - Create new objects',
        },
        {
          command: 'Step Into/Over/Out',
          description: 'Controlled code execution',
          usage: 'F7 (Step Into), F8 (Step Over), Shift+F8 (Step Out)',
          example: '# Debug Navigation\nF7 - Step Into (enter method)\nF8 - Step Over (execute line)\nShift+F8 - Step Out (exit method)\n\n# Advanced:\n# - Force Step Into (Alt+Shift+F7)\n# - Run to Cursor (Alt+F9)\n# - Smart Step Into (Shift+F7)',
        },
        {
          command: 'Watch Expressions',
          description: 'Monitor variable values',
          usage: 'Debug tool window > Watches tab',
          example: '# Watch Expressions\n# Add expressions to monitor:\n# - Variables\n# - Method calls\n# - Complex expressions\n# - Field access\n\n# Updates during debugging',
        },
      ],
    },
    {
      title: 'Version Control Advanced',
      commands: [
        {
          command: 'Git Integration',
          description: 'Advanced Git operations',
          usage: 'Git tool window and VCS operations',
          example: '# Git Operations\n# - Commit (Cmd+K)\n# - Push (Cmd+Shift+K)\n# - Pull (Cmd+T)\n# - Branch management\n# - Merge conflicts\n# - Stash changes\n# - Interactive rebase',
        },
        {
          command: 'Annotate/Blame',
          description: 'Show line-by-line git history',
          usage: 'Right-click > Git > Annotate',
          example: '# Git Annotate\n# Shows:\n# - Who wrote each line\n# - When it was last modified\n# - Commit message\n# - Branch information',
        },
        {
          command: 'Shelve Changes',
          description: 'Temporarily store changes',
          usage: 'Git > Shelve Changes',
          example: '# Shelve Changes\n# - Store uncommitted changes\n# - Apply later when needed\n# - Manage multiple shelves\n# - Compare with current version',
        },
        {
          command: 'Cherry-Pick',
          description: 'Apply specific commits',
          usage: 'Git > Cherry-Pick',
          example: '# Cherry-Pick\n# - Apply commits from other branches\n# - Select specific commits\n# - Resolve conflicts if needed\n# - Maintain commit history',
        },
      ],
    },
    {
      title: 'Database Tools (Ultimate Edition)',
      commands: [
        {
          command: 'Database Explorer',
          description: 'Connect and explore databases',
          usage: 'View > Tool Windows > Database',
          example: '# Database Features\n# - Connect to databases\n# - Browse schemas and tables\n# - Edit table data\n# - Run SQL queries\n# - Export/import data',
        },
        {
          command: 'SQL Console',
          description: 'Execute SQL queries',
          usage: 'Right-click table > Console',
          example: '# SQL Console\n# - Syntax highlighting\n# - Code completion\n# - Query execution\n# - Results viewing\n# - Export results',
        },
        {
          command: 'Data Editor',
          description: 'Edit database data directly',
          usage: 'Double-click table',
          example: '# Data Editor\n# - Edit cells directly\n# - Add/delete rows\n# - Filter and sort\n# - Copy/paste data\n# - Mass updates',
        },
      ],
    },
    {
      title: 'Performance and Optimization',
      commands: [
        {
          command: 'Performance Profiling',
          description: 'Analyze application performance',
          usage: 'Run > Profiler',
          example: '# Profiler Features\n# - CPU profiling\n# - Memory usage\n# - Method timing\n# - Call tree analysis\n# - Hotspot identification',
        },
        {
          command: 'Memory View',
          description: 'Monitor memory usage',
          usage: 'Debug tool window > Memory',
          example: '# Memory Analysis\n# - Heap inspection\n# - Object counting\n# - Garbage collection\n# - Memory leaks detection\n# - Object references',
        },
        {
          command: 'Code Analysis',
          description: 'Advanced code inspection',
          usage: 'Code > Inspect Code',
          example: '# Code Inspection\n# - Run full project analysis\n# - Find potential issues\n# - Code quality metrics\n# - Security vulnerabilities\n# - Performance issues',
        },
      ],
    },
    {
      title: 'Customization and Productivity',
      commands: [
        {
          command: 'Live Templates',
          description: 'Create custom code templates',
          usage: 'Settings > Editor > Live Templates',
          example: '# Live Templates\n# Create shortcuts for:\n# - Common code patterns\n# - Boilerplate code\n# - Method signatures\n# - Class structures\n\n# Example: psvm -> public static void main',
        },
        {
          command: 'File and Code Templates',
          description: 'Customize file creation templates',
          usage: 'Settings > Editor > File and Code Templates',
          example: '# File Templates\n# Customize:\n# - Class templates\n# - Interface templates\n# - File headers\n# - Copyright notices\n# - Package comments',
        },
        {
          command: 'Keymap Customization',
          description: 'Create custom keyboard shortcuts',
          usage: 'Settings > Keymap',
          example: '# Keymap Customization\n# - Modify existing shortcuts\n# - Add new key bindings\n# - Create custom keymaps\n# - Import/export keymaps',
        },
        {
          command: 'Productivity Boosters',
          description: 'Advanced productivity features',
          usage: 'Various shortcuts and features',
          example: '# Productivity Features\n# - Scratch files (Cmd+Shift+N)\n# - Multiple carets\n# - Intentions (Alt+Enter)\n# - Postfix completion\n# - Surround with templates\n# - Bookmarks (F11/F3)',
        },
      ],
    },
    {
      title: 'IDE-Specific Features',
      commands: [
        {
          command: 'IntelliJ IDEA Specific',
          description: 'Java/Kotlin development features',
          usage: 'Java-specific actions',
          example: '# IntelliJ IDEA Features\n# - Spring Boot integration\n# - Maven/Gradle support\n# - Java EE support\n# - Android development\n# - Kotlin development\n# - Code coverage',
        },
        {
          command: 'PyCharm Specific',
          description: 'Python development features',
          usage: 'Python-specific tools',
          example: '# PyCharm Features\n# - Django/Flask integration\n# - Scientific tools (NumPy, Pandas)\n# - Virtual environments\n# - Testing frameworks\n# - Profiling tools\n# - Remote debugging',
        },
        {
          command: 'WebStorm Specific',
          description: 'JavaScript/TypeScript features',
          usage: 'Web development tools',
          example: '# WebStorm Features\n# - Node.js integration\n# - React/Angular/Vue support\n# - TypeScript\n# - CSS/SCSS/Sass\n# - Build tools (Webpack, npm)\n# - Docker integration',
        },
        {
          command: 'Ultimate Edition Features',
          description: 'Professional-only features',
          usage: 'Ultimate edition capabilities',
          example: '# Ultimate Features\n# - Database tools\n# - Profiling tools\n# - JavaScript debugger\n# - Spring support\n# - Enterprise frameworks\n# - Code review tools',
        },
      ],
    },
  ],
};
