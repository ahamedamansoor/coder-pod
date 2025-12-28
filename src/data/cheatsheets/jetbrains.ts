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
          example: '# IntelliJ IDEA (Java/Kotlin/Scala)\n# PyCharm (Python)\n# WebStorm (JavaScript/TypeScript)\n# PhpStorm (PHP)\n# RubyMine (Ruby)\n# CLion (C/C++)\n# GoLand (Go)\n# DataGrip (SQL)\n\n# Installation:\n# - Download from jetbrains.com\n# - Choose Community or Ultimate\n# - Run installer and follow setup\n\n# First-time setup:\n# 1. Import settings if available\n# 2. Choose UI theme (Darcula/Light)\n# 3. Configure keymap (Default/VS Code/Emacs)\n# 4. Install essential plugins',
        },
        {
          command: 'Understanding the Interface',
          description: 'JetBrains IDE UI components and layout',
          usage: 'Menu bar, tool windows, editor area',
          example: '# Main Components:\n# Menu Bar - File, Edit, View, Navigate, Code, Refactor, Run, Tools, Window, Help\n# Tool Windows - Project, Structure, Favorites, Find, Run, Debug, Terminal, etc.\n# Editor Area - Code editing with tabs\n# Status Bar - Information, notifications, quick actions\n\n# Customization:\n# View > Appearance > various options\n# Right-click tool window header for layout options\n# Drag tool windows to rearrange layout',
        },
        {
          command: 'Find Action - Universal Command Search',
          description: 'Access all IDE commands and settings',
          usage: 'Cmd+Shift+A (Mac) / Ctrl+Shift+A (Win)',
          example: '# Open Find Action\nCmd+Shift+A (Mac) / Ctrl+Shift+A (Win)\n\n# Common commands via Find Action:\n# > Settings - Open IDE settings\n# > Project Structure - Configure project\n# > Reformat Code - Format current file\n# > Git Commit - Open commit dialog\n# > Run Configuration - Create run config\n\n# Features:\n# - Search any IDE action\n# - Find settings and preferences\n# - Execute commands directly',
        },
        {
          command: 'Search Everywhere - Universal Search',
          description: 'Search for classes, files, symbols, actions, and more',
          usage: 'Double Shift (press Shift twice quickly)',
          example: '# Search Everywhere\nPress Shift twice quickly\n\n# Search categories:\n# - Classes and files\n# - Symbols and methods\n# - Actions and settings\n# - Git branches\n# - Recent locations\n\n# Search tips:\n# - Use filters: Classes, Files, Symbols, Actions\n# - Camel case matching: MyClassName matches mcn\n# - Fuzzy matching enabled\n# - Navigate with arrow keys and Enter',
        },
        {
          command: 'IDE Settings and Preferences',
          description: 'Configure IDE behavior and appearance',
          usage: 'Cmd+, (Mac) / Ctrl+Alt+S (Win)',
          example: '# Open Settings\nCmd+, (Mac) / Ctrl+Alt+S (Win)\n\n# Settings categories:\n# - Appearance & Behavior (themes, fonts, keymaps)\n# - Editor (colors, code style, inspections, intentions)\n# - Build, Execution, Deployment (build tools, run configurations)\n# - Version Control (Git, SVN, Mercurial)\n# - Plugins (manage IDE extensions)\n\n# Project-specific settings:\n# File > Project Structure\n# .idea folder for project configuration',
        },
        {
          command: 'Plugin Management',
          description: 'Install and manage IDE plugins',
          usage: 'Settings > Plugins',
          example: '# Plugin Management\nSettings > Plugins\n\n# Popular plugins:\n# - Key Promoter X (shows shortcuts)\n# - Rainbow Brackets (color matching)\n# - GitToolBox (Git enhancements)\n# - Markdown Navigator (Markdown support)\n# - Docker (container integration)\n# - Database Navigator (SQL tools)\n\n# Plugin operations:\n# - Install: Marketplace tab > Search > Install\n# - Enable/Disable: Installed tab > Toggle\n# - Update: Updates tab > Update All\n# - Configure: Plugin settings in IDE preferences',
        },
      ],
    },
    {
      title: 'Basic Navigation and File Operations',
      commands: [
        {
          command: 'Recent Files Access',
          description: 'Quickly access recently opened files',
          usage: 'Cmd+E (Mac) / Ctrl+E (Win)',
          example: '# Recent Files\nCmd+E (Mac) / Ctrl+E (Win)\n\n# Features:\n# - Jump to any recently opened file\n# - Filter by typing filename\n# - Shows most recent at top\n# - Includes files from all projects\n\n# Usage:\n# - Type to filter results\n# - Arrow keys to navigate\n# - Enter to open selected file',
        },
        {
          command: 'Recent Locations Navigation',
          description: 'Navigate to recent cursor positions',
          usage: 'Cmd+Shift+E (Mac) / Ctrl+Shift+E (Win)',
          example: '# Recent Locations\nCmd+Shift+E (Mac) / Ctrl+Shift+E (Win)\n\n# Features:\n# - Jump to recent cursor positions\n# - Shows file and line number\n# - Maintains location history\n# - Works across all open files',
        },
        {
          command: 'Go to Class Navigation',
          description: 'Navigate to any class in project',
          usage: 'Cmd+O (Mac) / Ctrl+N (Win)',
          example: '# Go to Class\nCmd+O (Mac) / Ctrl+N (Win)\n\n# Features:\n# - Fuzzy matching\n# - Camel case support\n# - Show qualified names\n# - Navigate to inner classes\n\n# Examples:\n# - Type "MyClass" to find MyClass\n# - Type "MC" to find MyClassController\n# - Check "Include non-project items" for libraries',
        },
        {
          command: 'Go to File Navigation',
          description: 'Navigate to any file in project',
          usage: 'Cmd+Shift+O (Mac) / Ctrl+Shift+N (Win)',
          example: '# Go to File\nCmd+Shift+O (Mac) / Ctrl+Shift+N (Win)\n\n# Features:\n# - Navigate any file type\n# - Partial filename matching\n# - Directory navigation\n# - Show file paths\n\n# Examples:\n# - pom.xml -> pom\n# - src/main/java -> Navigate directories\n# - README.md -> Find readme files\n# - *.properties -> Filter by extension',
        },
        {
          command: 'Go to Symbol Navigation',
          description: 'Navigate to methods, fields, and symbols',
          usage: 'Cmd+Alt+O (Mac) / Ctrl+Alt+Shift+N (Win)',
          example: '# Go to Symbol\nCmd+Alt+O (Mac) / Ctrl+Alt+Shift+N (Win)\n\n# Symbol types:\n# - Methods and functions\n# - Fields and variables\n# - Constants\n# - Class members\n\n# Features:\n# - Search across all files\n# - Filter by symbol type\n# - Show containing class\n# - Navigate to declaration',
        },
        {
          command: 'Go to Line Navigation',
          description: 'Jump to specific line number',
          usage: 'Cmd+L (Mac) / Ctrl+G (Win)',
          example: '# Go to Line\nCmd+L (Mac) / Ctrl+G (Win)\n\n# Features:\n# - Enter line number to jump\n# - Shows current line in dialog\n# - Works with column numbers\n# - Supports relative line numbers',
        },
      ],
    },
    {
      title: 'Basic Code Editing',
      commands: [
        {
          command: 'Duplicate Line or Selection',
          description: 'Duplicate current line or selection',
          usage: 'Cmd+D (Mac) / Ctrl+D (Win)',
          example: '# Duplicate Line/Selection\nCmd+D (Mac) / Ctrl+D (Win)\n\n# Works with:\n# - Single lines\n# - Multi-line selections\n# - Code blocks\n# - Any text selection\n\n# Features:\n# - Maintains proper indentation\n# - Preserves formatting\n# - Works with any language',
        },
        {
          command: 'Delete Line',
          description: 'Delete entire line at cursor',
          usage: 'Cmd+Backspace (Mac) / Ctrl+Y (Win)',
          example: '# Delete Line\nCmd+Backspace (Mac) / Ctrl+Y (Win)\n\n# Features:\n# - Removes entire line\n# - Preserves undo history\n# - Works with multiple selected lines\n# - Maintains file structure',
        },
        {
          command: 'Move Lines Up/Down',
          description: 'Move lines up or down in file',
          usage: 'Cmd+Shift+↑/↓ (Mac) / Ctrl+Shift+↑/↓ (Win)',
          example: '# Move Line Up\nCmd+Shift+↑ (Mac) / Ctrl+Shift+↑ (Win)\n\n# Move Line Down\nCmd+Shift+↓ (Mac) / Ctrl+Shift+↓ (Win)\n\n# Features:\n# - Maintains proper indentation\n# - Works with multi-line selections\n# - Preserves code structure\n# - Smart formatting',
        },
        {
          command: 'Toggle Line Comments',
          description: 'Add or remove line comments',
          usage: 'Cmd+/ (Mac) / Ctrl+/ (Win)',
          example: '# Toggle Line Comment\nCmd+/ (Mac) / Ctrl+/ (Win)\n\n# Features:\n# - Toggle comment on/off\n# - Works with multiple lines\n# - Language-specific comment syntax\n# - Smart indentation\n\n# Examples:\n# // Java, JavaScript, C++\n# # Python, Ruby, Shell\n# -- SQL, Haskell',
        },
        {
          command: 'Toggle Block Comments',
          description: 'Add or remove block comments',
          usage: 'Cmd+Alt+/ (Mac) / Ctrl+Shift+/ (Win)',
          example: '# Toggle Block Comment\nCmd+Alt+/ (Mac) / Ctrl+Shift+/ (Win)\n\n# Comment types by language:\n# /* ... */ for C-style languages (Java, C++, JavaScript)\n# <!-- ... --> for XML/HTML\n# """...""" for Python\n# (* ... *) for Pascal\n# {- ... -} for Haskell',
        },
        {
          command: 'Smart Line Join',
          description: 'Join multiple lines into one',
          usage: 'Cmd+Shift+J (Mac) / Ctrl+Shift+J (Win)',
          example: '# Smart Line Join\nCmd+Shift+J (Mac) / Ctrl+Shift+J (Win)\n\n# Features:\n# - Intelligently joins lines\n# - Removes unnecessary whitespace\n# - Maintains code structure\n# - Works with strings and code',
        },
        {
          command: 'Split Line',
          description: 'Split current line at cursor position',
          usage: 'Cmd+Enter (Mac) / Ctrl+Enter (Win)',
          example: '# Split Line\nCmd+Enter (Mac) / Ctrl+Enter (Win)\n\n# Features:\n# - Split line at cursor\n# - Smart indentation\n# - Maintains code structure\n# - Works with any language',
        },
      ],
    },
    {
      title: 'Code Completion and Intelligence',
      commands: [
        {
          command: 'Basic Code Completion',
          description: 'Standard code completion suggestions',
          usage: 'Ctrl+Space',
          example: '# Basic Completion\nCtrl+Space\n\n# Suggestions:\n# - Local variables and methods\n# - Class members\n# - Keywords and syntax\n# - Import suggestions\n# - Code templates\n\n# Features:\n# - Context-aware suggestions\n# - Automatic import completion\n# - Camel case support',
        },
        {
          command: 'Smart Type Completion',
          description: 'Context-aware completion filtered by type',
          usage: 'Ctrl+Shift+Space',
          example: '# Smart Completion\nCtrl+Shift+Space\n\n# Filters suggestions based on:\n# - Expected type\n# - Current context\n# - Variable types\n# - Method return types\n\n# Features:\n# - More precise suggestions\n# - Type-compatible only\n# - Reduces suggestion list\n# - Better code accuracy',
        },
        {
          command: 'Complete Current Statement',
          description: 'Auto-complete current statement with syntax',
          usage: 'Cmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win)',
          example: '# Complete Statement\nCmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win)\n\n# Auto-adds:\n# - Semicolons\n# - Braces and parentheses\n# - Missing syntax elements\n# - Proper indentation\n\n# Examples:\n# if (condition) -> if (condition) {}\n# for (int i = 0) -> for (int i = 0; i < ; i++) {}',
        },
        {
          command: 'Parameter Information',
          description: 'Show method parameter information',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win)',
          example: '# Parameter Info\nCmd+P (Mac) / Ctrl+P (Win)\n\n# Shows:\n# - Parameter names\n# - Parameter types\n# - Current parameter highlight\n# - Documentation hints\n\n# Features:\n# - Real-time parameter tracking\n# - Overloaded method variants\n# - Parameter documentation',
        },
        {
          command: 'Quick Documentation',
          description: 'Show documentation for current symbol',
          usage: 'Cmd+Q (Mac) / Ctrl+Q (Win)',
          example: '# Quick Documentation\nCmd+Q (Mac) / Ctrl+Q (Win)\n\n# Displays:\n# - JSDoc/Javadoc\n# - Method signatures\n# - Parameter descriptions\n# - Return value documentation\n\n# Features:\n# - External documentation links\n# - Parameter details\n# - Usage examples\n# - Related symbols',
        },
        {
          command: 'Quick Definition',
          description: 'Show definition without navigation',
          usage: 'Cmd+Shift+I (Mac) / Ctrl+Shift+I (Win)',
          example: '# Quick Definition\nCmd+Shift+I (Mac) / Ctrl+Shift+I (Win)\n\n# Features:\n# - Show definition in popup\n# - No navigation required\n# - View method implementation\n# - See class declaration\n\n# Usage:\n# - Hover over symbol\n# - Press shortcut to see definition\n# - ESC to close popup',
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
          example: '# Go to Declaration\nCmd+B (Mac) / Ctrl+B (Win)\n\n# Alternative methods:\n# - Ctrl+Click (Mac/Win)\n# - Cmd+Click (Mac)\n\n# Features:\n# - Jump to class/method definition\n# - Navigate to variable declaration\n# - Follow imports and includes\n# - Cross-language navigation',
        },
        {
          command: 'Go to Implementation',
          description: 'Navigate to interface implementations',
          usage: 'Cmd+Alt+B (Mac) / Ctrl+Alt+B (Win)',
          example: '# Go to Implementation\nCmd+Alt+B (Mac) / Ctrl+Alt+B (Win)\n\n# Shows:\n# - Class implementations of interface\n# - Method overrides\n# - Multiple implementations available\n\n# Features:\n# - Choose from multiple implementations\n# - Navigate to concrete classes\n# - Method override navigation',
        },
        {
          command: 'Go to Super Method',
          description: 'Navigate to parent class or overridden method',
          usage: 'Cmd+U (Mac) / Ctrl+U (Win)',
          example: '# Go to Super Method\nCmd+U (Mac) / Ctrl+U (Win)\n\n# Navigates to:\n# - Parent class\n# - Overridden method\n# - Interface method\n# - Super constructor\n\n# Features:\n# - Jump up inheritance hierarchy\n# - Navigate to method being overridden\n# - Works with classes and methods',
        },
        {
          command: 'Navigate Back/Forward',
          description: 'Navigate through navigation history',
          usage: 'Cmd+[ (Mac) / Ctrl+Alt+← (Win) - Back\nCmd+] (Mac) / Ctrl+Alt+→ (Win) - Forward',
          example: '# Navigate History\nCmd+[ (Mac) / Ctrl+Alt+← (Win) - Back\nCmd+] (Mac) / Ctrl+Alt+→ (Win) - Forward\n\n# Features:\n# - Maintains navigation stack\n# - Works across files and symbols\n# - Similar to browser navigation\n# - Unlimited history depth',
        },
        {
          command: 'Last Edit Location',
          description: 'Jump to last cursor edit position',
          usage: 'Cmd+Shift+Backspace (Mac) / Ctrl+Shift+Backspace (Win)',
          example: '# Last Edit Location\nCmd+Shift+Backspace (Mac) / Ctrl+Shift+Backspace (Win)\n\n# Features:\n# - Quickly return to where you were editing\n# - Maintains edit history across sessions\n# - Works across all open files\n# - Multiple edit positions tracked',
        },
        {
          command: 'File Structure Popup',
          description: 'Navigate within current file structure',
          usage: 'Cmd+F12 (Mac) / Ctrl+F12 (Win)',
          example: '# File Structure\nCmd+F12 (Mac) / Ctrl+F12 (Win)\n\n# Shows:\n# - Class methods and fields\n# - File structure hierarchy\n# - Navigate to any symbol\n\n# Features:\n# - Quick navigation in file\n# - Filter by typing\n# - Shows inheritance structure\n# - Navigate with arrow keys',
        },
      ],
    },
    {
      title: 'Refactoring Basics',
      commands: [
        {
          command: 'Refactor This',
          description: 'Show available refactorings for current context',
          usage: 'Ctrl+T (Mac) / Ctrl+Alt+Shift+T (Win)',
          example: '# Refactor This\nCtrl+T (Mac) / Ctrl+Alt+Shift+T (Win)\n\n# Available refactorings:\n# - Rename\n# - Extract Method/Variable/Constant/Field/Parameter\n# - Inline\n# - Change Signature\n# - Pull/Push Members\n# - Introduce Parameter Object\n\n# Features:\n# - Context-aware suggestions\n# - Safe refactoring\n# - Preview changes',
        },
        {
          command: 'Rename Refactoring',
          description: 'Rename symbol across entire project',
          usage: 'Shift+F6',
          example: '# Rename\nShift+F6\n\n# Renames:\n# - Variables and methods\n# - Classes and files\n# - Packages and modules\n# - All references automatically\n\n# Features:\n# - Safe rename with validation\n# - Preview all changes\n# - Rename in comments and strings\n# - Update imports and references',
        },
        {
          command: 'Extract Method',
          description: 'Extract selected code to a new method',
          usage: 'Cmd+Alt+M (Mac) / Ctrl+Alt+M (Win)',
          example: '# Extract Method\nCmd+Alt+M (Mac) / Ctrl+Alt+M (Win)\n\n# Process:\n# 1. Select code to extract\n# 2. Press shortcut\n# 3. Enter method name\n# 4. Configure parameters\n# 5. Choose visibility\n\n# Features:\n# - Automatic parameter detection\n# - Return type inference\n# - Exception handling\n# - Code optimization',
        },
        {
          command: 'Extract Variable',
          description: 'Extract expression to a variable',
          usage: 'Cmd+Alt+V (Mac) / Ctrl+Alt+V (Win)',
          example: '# Extract Variable\nCmd+Alt+V (Mac) / Ctrl+Alt+V (Win)\n\n# Creates:\n# - Local variables\n# - Constants (optionally)\n# - Proper type inference\n# - Appropriate naming\n\n# Features:\n# - Smart type detection\n# - Replace all occurrences\n# - Proper scope determination\n# - Variable naming suggestions',
        },
        {
          command: 'Inline Refactoring',
          description: 'Inline variable or method usage',
          usage: 'Cmd+Alt+N (Mac) / Ctrl+Alt+N (Win)',
          example: '# Inline\nCmd+Alt+N (Mac) / Ctrl+Alt+N (Win)\n\n# Inlines:\n# - Variables\n# - Methods\n# - Constants\n# - Parameters\n\n# Features:\n# - Remove unused declarations\n# - Replace all usages\n# - Safe inline validation\n# - Code optimization',
        },
      ],
    },
    {
      title: 'Multi-Cursor and Advanced Selection',
      commands: [
        {
          command: 'Column Selection Mode',
          description: 'Select vertical blocks of text',
          usage: 'Alt+Shift+Drag (Mouse) or Cmd+Shift+8 (Mac)',
          example: '# Column Selection\nAlt+Shift+Drag - Select with mouse\nCmd+Shift+8 (Mac) - Toggle column mode\n\n# Useful for:\n# - Editing similar code patterns\n# - Changing variable names\n# - Reformatting data\n# - Multi-line editing\n\n# Features:\n# - Vertical selection\n# - Multiple cursors\n# - Independent editing\n# - Rectangular selection',
        },
        {
          command: 'Add Selection for Next Occurrence',
          description: 'Add cursor at next occurrence of current word',
          usage: 'Ctrl+G (Mac) / Alt+J (Win)',
          example: '# Add Selection for Next Occurrence\nCtrl+G (Mac) / Alt+J (Win)\n\n# Features:\n# - Multi-cursor editing\n# - Select similar code\n# - Batch editing\n# - Pattern matching\n\n# Usage:\n# 1. Place cursor on word\n# 2. Press shortcut to select next\n# 3. Repeat for more occurrences\n# 4. Edit all simultaneously',
        },
        {
          command: 'Add Selection for All Occurrences',
          description: 'Select all occurrences of current word',
          usage: 'Cmd+Ctrl+G (Mac) / Ctrl+Shift+Alt+J (Win)',
          example: '# Add Selection for All Occurrences\nCmd+Ctrl+G (Mac) / Ctrl+Shift+Alt+J (Win)\n\n# Features:\n# - Select all matches instantly\n# - Global multi-cursor editing\n# - Pattern-based selection\n# - Efficient bulk editing',
        },
        {
          command: 'Unselect Previous Occurrence',
          description: 'Remove previous selection occurrence',
          usage: 'Cmd+Alt+G (Mac) / Alt+Shift+J (Win)',
          example: '# Unselect Previous Occurrence\nCmd+Alt+G (Mac) / Alt+Shift+J (Win)\n\n# Features:\n# - Remove last selection\n# - Undo multi-cursor addition\n# - Fine-tune selection\n# - Maintain other selections',
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
          example: '# Find in Path\nCmd+Shift+F (Mac) / Ctrl+Shift+F (Win)\n\n# Search options:\n# - File masks (*.java, *.js)\n# - Scope (Project, Module, Directory)\n# - Case sensitivity\n# - Whole word\n# - Regular expressions\n\n# Features:\n# - Preview results\n# - Group by file\n# - Context display\n# - Replace in path',
        },
        {
          command: 'Replace in Path',
          description: 'Replace across entire project',
          usage: 'Cmd+Shift+R (Mac) / Ctrl+Shift+R (Win)',
          example: '# Replace in Path\nCmd+Shift+R (Mac) / Ctrl+Shift+R (Win)\n\n# Features:\n# - Preview changes\n# - Replace all or individual\n# - Context preview\n# - Safe replace with refactoring\n\n# Options:\n# - Replace all matches\n# - Skip specific files\n# - Confirm each replacement\n# - Backup before replace',
        },
        {
          command: 'Find Usages',
          description: 'Find all usages of symbol in project',
          usage: 'Cmd+Alt+F7 (Mac) / Alt+F7 (Win)',
          example: '# Find Usages\nCmd+Alt+F7 (Mac) / Alt+F7 (Win)\n\n# Shows:\n# - All usages in project\n# - Grouped by file\n# - Navigate to each usage\n# - Usage types (read/write)\n\n# Features:\n# - Filter by usage type\n# - Group by package/module\n# - Show line numbers\n# - Direct navigation',
        },
        {
          command: 'Show Usages in Current File',
          description: 'Highlight all usages in current file',
          usage: 'Cmd+F7 (Mac) / Ctrl+F7 (Win)',
          example: '# Show Usages in Current File\nCmd+F7 (Mac) / Ctrl+F7 (Win)\n\n# Features:\n# - Highlight all usages\n# - Navigate with F3/Shift+F3\n# - Show usage count\n# - Clear highlighting with ESC',
        },
        {
          command: 'Structural Search and Replace',
          description: 'Search by code patterns, not just text',
          usage: 'Edit > Find > Search Structurally',
          example: '# Structural Search\nEdit > Find > Search Structurally\n\n# Search by patterns, not text\n\n# Example: find all for loops\n# for($type$ $var$ : $collection$) { $stmt$ }\n\n# Templates for common patterns:\n# - Method calls\n# - Class declarations\n# - Exception handling\n# - Variable assignments\n\n# Features:\n# - Pattern-based search\n# - Variable placeholders\n# - Structural replacement\n# - Code template library',
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced Refactoring',
      commands: [
        {
          command: 'Extract Constant',
          description: 'Extract value to a constant',
          usage: 'Cmd+Alt+C (Mac) / Ctrl+Alt+C (Win)',
          example: '# Extract Constant\nCmd+Alt+C (Mac) / Ctrl+Alt+C (Win)\n\n# Features:\n# - Creates static final fields\n# - Replaces all occurrences\n# - Suggests appropriate scope\n# - Proper naming conventions\n\n# Options:\n# - Private/public/protected\n# - Static vs instance\n# - Final modifier\n# - Initialize in declaration',
        },
        {
          command: 'Extract Field',
          description: 'Extract expression to class field',
          usage: 'Cmd+Alt+F (Mac) / Ctrl+Alt+F (Win)',
          example: '# Extract Field\nCmd+Alt+F (Mac) / Ctrl+Alt+F (Win)\n\n# Creates:\n# - Instance fields\n# - Static fields (optionally)\n# - Proper encapsulation\n# - Initialization in constructor\n\n# Features:\n# - Smart field placement\n# - Constructor parameterization\n# - Getter/setter generation\n# - Access modifier selection',
        },
        {
          command: 'Extract Parameter',
          description: 'Extract expression to method parameter',
          usage: 'Cmd+Alt+P (Mac) / Ctrl+Alt+P (Win)',
          example: '# Extract Parameter\nCmd+Alt+P (Mac) / Ctrl+Alt+P (Win)\n\n# Features:\n# - Adds parameter to method signature\n# - Updates all call sites\n# - Handles default values\n# - Parameter type inference\n\n# Options:\n# - Parameter name\n# - Parameter type\n# - Default value\n# - Update call sites',
        },
        {
          command: 'Change Signature',
          description: 'Modify method signature safely',
          usage: 'Cmd+F6 (Mac) / Ctrl+F6 (Win)',
          example: '# Change Signature\nCmd+F6 (Mac) / Ctrl+F6 (Win)\n\n# Can modify:\n# - Parameter names and types\n# - Return type\n# - Parameter order\n# - Add/remove parameters\n\n# Features:\n# - Updates all call sites\n# - Parameter propagation\n# - Default value handling\n# - Refactoring preview',
        },
        {
          command: 'Move Class or Member',
          description: 'Move to different package or class',
          usage: 'F6',
          example: '# Move\nF6\n\n# Can move:\n# - Classes to different packages\n# - Methods to different classes\n# - Files to different directories\n# - Static members to other classes\n\n# Features:\n# - Package refactoring\n# - Import updates\n# - Reference updates\n# - Visibility adjustment',
        },
        {
          command: 'Pull Members Up/Push Down',
          description: 'Move class members in inheritance hierarchy',
          usage: 'Refactor > Pull Members Up / Push Members Down',
          example: '# Pull Members Up\nRefactor > Pull Members Up\n\n# Push Members Down\nRefactor > Push Members Down\n\n# Features:\n# - Move to parent/child class\n# - Maintain inheritance\n# - Update references\n# - Preserve functionality\n\n# Use cases:\n# - Extract common functionality\n# - Specialize child classes\n# - Refactor inheritance\n# - Improve code organization',
        },
        {
          command: 'Extract Interface/Supertype',
          description: 'Extract common interface from class',
          usage: 'Refactor > Extract Interface / Extract Supertype',
          example: '# Extract Interface\nRefactor > Extract Interface\n\n# Features:\n# - Create interface from class\n# - Select methods to include\n# - Update class to implement\n# - Choose interface name\n\n# Extract Supertype:\n# - Create abstract class\n# - Move common methods\n# - Maintain inheritance\n# - Refactor hierarchy',
        },
        {
          command: 'Encapsulate Fields',
          description: 'Generate getters and setters with field protection',
          usage: 'Refactor > Encapsulate Fields',
          example: '# Encapsulate Fields\nRefactor > Encapsulate Fields\n\n# Features:\n# - Generate getters/setters\n# - Make fields private\n# - Update field access\n# - Choose access level\n\n# Options:\n# - Getter/setter generation\n# - Field visibility\n# - Access methods\n# - Update existing usages',
        },
      ],
    },
    {
      title: 'Debugging Advanced',
      commands: [
        {
          command: 'Debug Configuration',
          description: 'Create and manage debug configurations',
          usage: 'Run > Edit Configurations',
          example: '# Debug Configuration\nRun > Edit Configurations\n\n# Configuration types:\n# - Application (Java main)\n# - JUnit/TestNG tests\n# - Remote JVM Debug\n# - JavaScript/Node.js\n# - Python scripts\n# - Docker containers\n\n# Settings:\n# - Main class/script\n# - Program arguments\n# - VM options\n# - Environment variables\n# - Working directory',
        },
        {
          command: 'Breakpoint Management',
          description: 'Advanced breakpoint features',
          usage: 'Click gutter or Run > View Breakpoints',
          example: '# Breakpoint Types\n# - Line breakpoints (click gutter)\n# - Method breakpoints\n# - Exception breakpoints\n# - Field watchpoints\n# - Conditional breakpoints\n\n# Breakpoint Features:\n# - Conditions (right-click > Condition)\n# - Hit count (stop after N hits)\n# - Disable/enable\n# - Grouping\n# - Export/import breakpoints',
        },
        {
          command: 'Debug Navigation',
          description: 'Navigate during debugging',
          usage: 'F8 (Step Over), F7 (Step Into), Shift+F8 (Step Out), F9 (Resume)',
          example: '# Debug Navigation\nF8 - Step Over (next line)\nF7 - Step Into (method call)\nShift+F8 - Step Out (current method)\nF9 - Resume Program\n\n# Additional:\n# Alt+F9 - Run to Cursor\n# Alt+F8 - Evaluate Expression\n# F9 - Resume Program\n# Ctrl+F2 - Stop Debug Session',
        },
        {
          command: 'Variable Inspection',
          description: 'Inspect and modify variables during debug',
          usage: 'Variables window during debug',
          example: '# Variable Inspection\n# - Variables window shows current scope\n# - Expand objects to see fields\n# - Modify values in-place\n# - Watch expressions\n# - Evaluate expressions\n\n# Features:\n# - Real-time value updates\n# - Object inspection\n# - Array/collection viewing\n# - Custom object views\n# - Value modification',
        },
        {
          command: 'Evaluate Expression',
          description: 'Execute expressions during debugging',
          usage: 'Alt+F8 during debug',
          example: '# Evaluate Expression\nAlt+F8 during debug\n\n# Features:\n# - Execute any valid expression\n# - Access current variables\n# - Call methods\n# - Modify state\n# - Test conditions\n\n# Uses:\n# - Test bug fixes\n# - Inspect complex objects\n# - Try different values\n# - Debug complex logic',
        },
        {
          command: 'Remote Debugging',
          description: 'Debug applications running remotely',
          usage: 'Run > Edit Configurations > Remote',
          example: '# Remote Debugging\nRun > Edit Configurations > Remote\n\n# Setup:\n# 1. Configure remote JVM debug\n# 2. Set host and port\n# 3. Start remote app with debug flags\n# 4. Connect from IDE\n\n# Java Remote Debug:\n# -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005\n\n# Features:\n# - Debug production code\n# - Container debugging\n# - Cloud application debug\n# - Microservices debugging',
        },
      ],
    },
    {
      title: 'Version Control Integration',
      commands: [
        {
          command: 'Git Integration Basics',
          description: 'Git version control operations',
          usage: 'VCS menu or Git tool window',
          example: '# Git Operations\n# - Commit (Cmd+K / Ctrl+K)\n# - Push (Cmd+Shift+K / Ctrl+Shift+K)\n# - Pull (Cmd+T / Ctrl+T)\n# - Merge (Ctrl+Shift+A > Git > Merge)\n\n# Git Tool Window:\n# - Log view (commit history)\n# - Console (git command output)\n# - Branches (branch management)\n# - Local Changes (staging area)',
        },
        {
          command: 'Commit and Push',
          description: 'Commit changes and push to remote',
          usage: 'Cmd+K (Mac) / Ctrl+K (Win) for commit',
          example: '# Commit Changes\nCmd+K (Mac) / Ctrl+K (Win)\n\n# Commit Features:\n# - Stage/unstage files\n# - Write commit message\n# - Code analysis before commit\n# - Auto-format on commit\n\n# Push Changes\nCmd+Shift+K (Mac) / Ctrl+Shift+K (Win)\n\n# Features:\n# - Push to remote repository\n# - Force push option\n# - Branch selection\n# - Push tags',
        },
        {
          command: 'Branch Management',
          description: 'Create, switch, and manage branches',
          usage: 'Git tool window > Branches',
          example: '# Branch Operations\n# - New Branch (right-click > New Branch)\n# - Checkout (double-click branch)\n# - Delete Branch (right-click > Delete)\n# - Merge (right-click > Merge)\n\n# Branch Features:\n# - Branch comparison\n# - Cherry-pick commits\n# - Rebase branches\n# - Stash changes\n\n# Quick Checkout:\n# Ctrl+Shift+A > Git > Checkout',
        },
        {
          command: 'Diff and Merge',
          description: 'Compare changes and resolve conflicts',
          usage: 'Annotate > Show Diff or merge conflicts',
          example: '# View Diff\n# - Click file in Local Changes\n# - Right-click > Show Diff\n# - Compare with any version\n\n# Merge Conflicts:\n# - Automatic conflict detection\n# - Three-way merge view\n# - Accept/Reject changes\n# - Resolve conflicts manually\n\n# Features:\n# - Side-by-side comparison\n# - Unified diff view\n# - Ignore whitespace\n# - Diff by revision',
        },
        {
          command: 'Git History and Blame',
          description: 'View commit history and code annotations',
          usage: 'Git tool window > Log or Annotate',
          example: '# Git History\nGit tool window > Log\n\n# Features:\n# - Commit timeline\n# - Branch graph\n# - Commit details\n# - File history\n\n# Git Blame\nAnnotate > Annotate\n\n# Features:\n# - Line-by-line authorship\n# - Commit information\n# - Navigate to commits\n# - Track code changes',
        },
      ],
    },
    {
      title: 'Build Tools and Run Configurations',
      commands: [
        {
          command: 'Run Configuration Management',
          description: 'Create and manage run configurations',
          usage: 'Run > Edit Configurations',
          example: '# Run Configuration\nRun > Edit Configurations\n\n# Configuration Types:\n# - Application (Java main)\n# - JUnit/TestNG tests\n# - Maven/Gradle tasks\n# - JavaScript/Node.js\n# - Python scripts\n# - Docker containers\n\n# Settings:\n# - Main class/script\n# - Program arguments\n# - VM options\n# - Environment variables\n# - Working directory\n# - Before/after launch tasks',
        },
        {
          command: 'Maven Integration',
          description: 'Maven build tool integration',
          usage: 'Maven tool window',
          example: '# Maven Tool Window\n# - Lifecycle (clean, compile, test, package)\n# - Dependencies (manage dependencies)\n# - Plugins (configure plugins)\n# - Profiles (activate profiles)\n\n# Maven Features:\n# - Auto-import dependencies\n# - Download sources/javadoc\n# - Run Maven goals\n# - Dependency analysis\n\n# Quick Actions:\n# - Double-click lifecycle phase\n# - Right-click for more options\n# - Reload projects (F5)',
        },
        {
          command: 'Gradle Integration',
          description: 'Gradle build tool integration',
          usage: 'Gradle tool window',
          example: '# Gradle Tool Window\n# - Tasks (run Gradle tasks)\n# - Dependencies (view dependencies)\n# - Projects (project structure)\n\n# Gradle Features:\n# - Task execution\n# - Dependency management\n# - Build script editing\n# - Custom tasks\n\n# Quick Actions:\n# - Double-click task to run\n# - Refresh projects\n# - Toggle offline mode\n# - Daemon status',
        },
        {
          command: 'Build Automation',
          description: 'Automate build processes',
          usage: 'Settings > Build Tools',
          example: '# Build Automation\nSettings > Build Tools\n\n# Features:\n# - Auto-build on save\n# - Compile on the fly\n# - Build error highlighting\n# - External tool integration\n\n# Configuration:\n# - Compiler settings\n# - Build process order\n# - Output directories\n# - Resource processing\n\n# Integration:\n# - Maven/Gradle\n# - Ant\n# - External build tools\n# - Custom build scripts',
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Database Integration',
      commands: [
        {
          command: 'Database Connection Setup',
          description: 'Configure database connections',
          usage: 'Database tool window > Add Data Source',
          example: '# Database Connection\nDatabase tool window > Add Data Source\n\n# Supported Databases:\n# - MySQL, PostgreSQL\n# - Oracle, SQL Server\n# - SQLite, H2\n# - MongoDB, Redis\n\n# Connection Settings:\n# - Host and port\n# - Database name\n# - Username/password\n# - SSL configuration\n# - SSH tunnel\n\n# Features:\n# - Connection testing\n# - Driver management\n# - Connection pooling\n# - SSL certificates',
        },
        {
          command: 'SQL Query Execution',
          description: 'Write and execute SQL queries',
          usage: 'Console in Database tool window',
          example: '# SQL Console\nDatabase tool window > New Console\n\n# Features:\n# - Syntax highlighting\n# - Code completion\n# - Query formatting\n# - Execute statements\n# - Batch execution\n\n# SQL Support:\n# - All major SQL dialects\n# - Stored procedures\n# - Functions and triggers\n# - PL/SQL, T-SQL\n\n# Query Tools:\n# - Explain plan\n# - Query profiling\n# - Result export\n# - Query history',
        },
        {
          command: 'Database Object Management',
          description: 'Manage tables, indexes, and schemas',
          usage: 'Database tool tree',
          example: '# Database Objects\nDatabase tool window > Expand database\n\n# Object Types:\n# - Tables, Views\n# - Indexes, Constraints\n# - Procedures, Functions\n# - Triggers, Sequences\n\n# Operations:\n# - Create/modify tables\n# - Add/drop columns\n# - Create indexes\n# - Edit data directly\n\n# Features:\n# - Visual table editor\n# - Data import/export\n# - Schema comparison\n# - DDL generation',
        },
        {
          command: 'Data Import and Export',
          description: 'Transfer data between databases and files',
          usage: 'Right-click table > Import/Export',
          example: '# Data Export\nRight-click table > Export Data\n\n# Export Formats:\n# - CSV, TSV\n# - Excel (XLSX)\n# - JSON, XML\n# - SQL scripts\n\n# Data Import\nRight-click table > Import Data\n\n# Import Formats:\n# - CSV, Excel\n# - JSON, XML\n# - SQL dumps\n# - Database transfer\n\n# Features:\n# - Format mapping\n# - Data type conversion\n# - Batch processing\n# - Error handling',
        },
      ],
    },
    {
      title: 'Performance Profiling',
      commands: [
        {
          command: 'CPU Profiling',
          description: 'Analyze CPU performance and bottlenecks',
          usage: 'Run > Profile or View > Tool Windows > Profiler',
          example: '# CPU Profiler\nRun > Profile > [Application]\n\n# Profiling Features:\n# - Method execution time\n# - Call tree analysis\n# - Hot spot detection\n# - Flame graphs\n\n# Analysis Tools:\n# - Method timing\n# - Call hierarchy\n# - Sampling vs instrumentation\n# - Thread analysis\n\n# Usage:\n# 1. Create profile configuration\n# 2. Run with profiling\n# 3. Analyze results\n# 4. Identify bottlenecks',
        },
        {
          command: 'Memory Profiling',
          description: 'Analyze memory usage and leaks',
          usage: 'Run > Profile with Memory Settings',
          example: '# Memory Profiler\nRun > Profile > Memory Settings\n\n# Memory Analysis:\n# - Heap dump analysis\n# - Object allocation\n# - Garbage collection\n# - Memory leaks\n\n# Tools:\n# - Heap snapshots\n# - Object reference chains\n# - GC roots analysis\n# - Memory allocation tracking\n\n# Features:\n# - Live objects view\n# - Class histogram\n# - Dominator tree\n# - Leak detection',
        },
        {
          command: 'Thread Debugging',
          description: 'Analyze thread behavior and concurrency',
          usage: 'Debug > Thread View or Profiler',
          example: '# Thread Analysis\nDebug > Thread View\n\n# Thread Features:\n# - Thread state monitoring\n# - Deadlock detection\n# - Race condition analysis\n# - Synchronization issues\n\n# Tools:\n# - Thread dump analysis\n# - Lock contention\n# - Thread timeline\n# - Concurrent execution\n\n# Uses:\n# - Debug concurrency issues\n# - Optimize threading\n# - Analyze performance\n# - Fix deadlocks',
        },
      ],
    },
    {
      title: 'Code Quality and Analysis',
      commands: [
        {
          command: 'Code Inspections',
          description: 'Static code analysis and quality checks',
          usage: 'Code > Inspect Code or Settings > Editor > Inspections',
          example: '# Code Inspections\nCode > Inspect Code\n\n# Inspection Categories:\n# - Probable bugs\n# - Performance issues\n# - Security vulnerabilities\n# - Code style violations\n# - Internationalization\n# - Unused code\n\n# Features:\n# - Real-time analysis\n# - Batch inspection\n# - Custom inspection profiles\n# - Severity levels\n\n# Usage:\n# 1. Select inspection scope\n# 2. Choose inspection profile\n# 3. Run inspection\n# 4. Review results\n# 5. Fix issues',
        },
        {
          command: 'Code Coverage',
          description: 'Measure test coverage of code',
          usage: 'Run > Run with Coverage',
          example: '# Code Coverage\nRun > Run with Coverage\n\n# Coverage Metrics:\n# - Line coverage\n# - Branch coverage\n# - Method coverage\n# - Class coverage\n\n# Features:\n# - Visual coverage highlighting\n# - Coverage reports\n# - Coverage thresholds\n# - Historical tracking\n\n# Usage:\n# 1. Run tests with coverage\n# 2. Review coverage results\n# 3. Identify uncovered code\n# 4. Add tests for gaps\n# 5. Monitor coverage trends',
        },
        {
          command: 'Duplicate Code Detection',
          description: 'Find duplicated code fragments',
          usage: 'Code > Locate Duplicates',
          example: '# Duplicate Detection\nCode > Locate Duplicates\n\n# Analysis Scope:\n# - Current file\n# - Current package\n# - Entire project\n# - Custom scope\n\n# Features:\n# - Structural similarity\n# - Parameterized duplicates\n# - Configuration options\n# - Refactoring suggestions\n\n# Benefits:\n# - Code deduplication\n# - Extract common code\n# - Improve maintainability\n# - Reduce code size',
        },
        {
          command: 'Dependency Analysis',
          description: 'Analyze project dependencies and structure',
          usage: 'Analyze > Dependencies',
          example: '# Dependency Analysis\nAnalyze > Dependencies\n\n# Analysis Types:\n# - Module dependencies\n# - Package dependencies\n# - Class dependencies\n# - Circular dependencies\n\n# Features:\n# - Dependency graph\n# - Unused dependencies\n# - Dependency cycles\n# - Impact analysis\n\n# Uses:\n# - Refactoring planning\n# - Module design\n# - Architecture analysis\n# - Dependency cleanup',
        },
      ],
    },
    {
      title: 'Advanced Customization',
      commands: [
        {
          command: 'Custom File Templates',
          description: 'Create custom file and code templates',
          usage: 'Settings > Editor > File and Code Templates',
          example: '# File Templates\nSettings > Editor > File and Code Templates\n\n# Template Types:\n# - Files (new file templates)\n# - Includes (reusable fragments)\n# - Code Templates (live templates)\n\n# Template Variables:\n# ${NAME} - File name\n# ${PACKAGE_NAME} - Package\n# ${USER} - Current user\n# ${DATE} - Current date\n# ${TIME} - Current time\n\n# Examples:\n# - Class templates\n# - Interface templates\n# - Test class templates\n# - Configuration files',
        },
        {
          command: 'Live Templates',
          description: 'Create code snippets and abbreviations',
          usage: 'Settings > Editor > Live Templates',
          example: '# Live Templates\nSettings > Editor > Live Templates\n\n# Template Features:\n# - Abbreviation expansion\n# - Variables and expressions\n# - Context-aware activation\n# - Custom template groups\n\n# Built-in Examples:\n# - sout -> System.out.println()\n# - fori -> for loop\n# - psfs -> public static final String\n# - thr -> throw new\n\n# Custom Templates:\n# - Create your own abbreviations\n# - Define template context\n# - Add editable variables\n# - Set expansion keys',
        },
        {
          command: 'Custom Keymaps',
          description: 'Create personalized keyboard shortcuts',
          usage: 'Settings > Keymap',
          example: '# Custom Keymaps\nSettings > Keymap\n\n# Keymap Features:\n# - Duplicate existing keymaps\n# - Modify shortcuts\n# - Create custom keymaps\n# - Export/import keymaps\n\n# Popular Keymaps:\n# - Default (JetBrains)\n# - Visual Studio\n# - Eclipse\n# - NetBeans\n# - macOS System Shortcuts\n\n# Customization:\n# - Find action by name\n# - Assign multiple shortcuts\n# - Configure conflicts\n# - Reset to defaults',
        },
        {
          command: 'Color Scheme Customization',
          description: 'Create custom editor color schemes',
          usage: 'Settings > Editor > Color Scheme',
          example: '# Color Schemes\nSettings > Editor > Color Scheme\n\n# Customization Options:\n# - Syntax highlighting\n# - Editor colors\n# - Console colors\n# - Darcula/Light themes\n\n# Color Elements:\n# - Keywords, strings, comments\n# - Method/variable names\n# - Error/warning highlighting\n# - Selection and caret\n\n# Features:\n# - Import/export schemes\n# - Share with community\n# - Plugin color schemes\n# - High contrast themes',
        },
      ],
    },
    {
      title: 'Productivity Tips and Workflows',
      commands: [
        {
          command: 'Essential Shortcuts',
          description: 'Must-know shortcuts for productivity',
          usage: 'Keyboard combinations',
          example: '# Essential Shortcuts\n\n# Navigation:\n# Double Shift - Search Everywhere\n# Cmd+Shift+A (Mac) / Ctrl+Shift+A (Win) - Find Action\n# Cmd+E (Mac) / Ctrl+E (Win) - Recent Files\n# Cmd+O (Mac) / Ctrl+N (Win) - Go to Class\n\n# Editing:\n# Cmd+D (Mac) / Ctrl+D (Win) - Duplicate Line\n# Cmd+/ (Mac) / Ctrl+/ (Win) - Comment Line\n# Alt+Enter - Show Intention Actions\n\n# Refactoring:\n# Shift+F6 - Rename\n# Cmd+Alt+M (Mac) / Ctrl+Alt+M (Win) - Extract Method\n# F6 - Move',
        },
        {
          command: 'Intention Actions',
          description: 'Quick fixes and code improvements',
          usage: 'Alt+Enter or click light bulb',
          example: '# Intention Actions\nAlt+Enter or click light bulb\n\n# Common Actions:\n# - Import missing classes\n# - Implement methods\n# - Create local variable\n# - Add exception handling\n# - Optimize imports\n# - Convert to lambda\n\n# Features:\n# - Context-aware suggestions\n# - Quick fixes for errors\n# - Code improvements\n# - Refactoring suggestions\n\n# Usage:\n# - Click on error/warning\n# - Press Alt+Enter\n# - Choose action from list',
        },
        {
          command: 'Code Generation',
          description: 'Generate code automatically',
          usage: 'Code > Generate or Cmd+N / Alt+Insert',
          example: '# Code Generation\nCode > Generate or Cmd+N (Mac) / Alt+Insert (Win)\n\n# Generate Options:\n# - Constructor\n# - Getter/Setter\n# - toString()\n# - equals() and hashCode()\n# - Override methods\n# - Delegate methods\n# - Test methods\n\n# Features:\n# - Smart code generation\n# - Template-based\n# - Language-specific\n# - Customizable templates',
        },
        {
          command: 'Quick Switch Scheme',
          description: 'Quickly change keymaps, themes, and view modes',
          usage: 'Ctrl+` (backtick)',
          example: '# Quick Switch Scheme\nCtrl+` (backtick)\n\n# Switch Options:\n# - Keymap (Default, VS Code, etc.)\n# - View Mode (Editor, Distraction Free)\n# - Look and Feel (Theme)\n# - Quick List (custom actions)\n\n# Features:\n# - Fast switching\n# - Temporary changes\n# - Easy experimentation\n# - Productivity boost',
        },
        {
          command: 'Distraction Free Mode',
          description: 'Focus mode for coding without distractions',
          usage: 'View > Appearance > Enter Distraction Free Mode',
          example: '# Distraction Free Mode\nView > Appearance > Enter Distraction Free Mode\n\n# Features:\n# - Minimal UI\n# - Full screen editing\n# - Centered layout\n# - Tool window auto-hide\n\n# Usage:\n# - Focus on code\n# - Reduce distractions\n# - Improve concentration\n# - Clean workspace\n\n# Exit: ESC or View > Exit Distraction Free Mode',
        },
        {
          command: 'Productivity Plugins',
          description: 'Essential plugins for enhanced productivity',
          usage: 'Settings > Plugins',
          example: '# Essential Productivity Plugins\n\n# Development:\n# - Key Promoter X (shows shortcuts)\n# - Rainbow Brackets (color matching)\n# - String Manipulation (text operations)\n# - .ignore (gitignore support)\n\n# Framework Support:\n# - Lombok (annotation processing)\n# - Spring Assistant (Spring Boot)\n# - Docker (container support)\n# - Kubernetes (K8s support)\n\n# Tools:\n# - GitToolBox (Git enhancements)\n# - Database Navigator (SQL tools)\n# - Markdown Navigator (Markdown support)\n# - RestfulToolkit (REST API)',
        },
      ],
    },
  ],
};
