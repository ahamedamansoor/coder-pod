import { Zap } from 'lucide-react';

export const jetbrainsCheatsheet = {
  id: 'jetbrains',
  name: 'JetBrains IDEs',
  description: 'Master IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs from basics to expert (2023.3+)',
  icon: Zap,
  colorTheme: 'purple' as const,
  sections: [
    {
      title: 'Getting Started with JetBrains IDEs',
      commands: [
        {
          command: 'IntelliJ IDEA Installation',
          description: 'Install IntelliJ IDEA IDE',
          usage: 'Download from jetbrains.com',
          example: `# IntelliJ IDEA (Java/Kotlin/Scala)`,
        },
        {
          command: 'PyCharm Installation',
          description: 'Install PyCharm IDE',
          usage: 'Download from jetbrains.com',
          example: `# PyCharm (Python)`,
        },
        {
          command: 'WebStorm Installation',
          description: 'Install WebStorm IDE',
          usage: 'Download from jetbrains.com',
          example: `# WebStorm (JavaScript/TypeScript)`,
        },
        {
          command: 'PhpStorm Installation',
          description: 'Install PhpStorm IDE',
          usage: 'Download from jetbrains.com',
          example: `# PhpStorm (PHP)`,
        },
        {
          command: 'RubyMine Installation',
          description: 'Install RubyMine IDE',
          usage: 'Download from jetbrains.com',
          example: `# RubyMine (Ruby)`,
        },
        {
          command: 'CLion Installation',
          description: 'Install CLion IDE',
          usage: 'Download from jetbrains.com',
          example: `# CLion (C/C++)`,
        },
        {
          command: 'GoLand Installation',
          description: 'Install GoLand IDE',
          usage: 'Download from jetbrains.com',
          example: `# GoLand (Go)`,
        },
        {
          command: 'DataGrip Installation',
          description: 'Install DataGrip IDE',
          usage: 'Download from jetbrains.com',
          example: `# DataGrip (SQL)`,
        },
        {
          command: 'First-Time Setup Import Settings',
          description: 'Import existing IDE settings',
          usage: 'Import settings during setup',
          example: `# 1. Import settings if available`,
        },
        {
          command: 'Choose UI Theme',
          description: 'Select IDE appearance theme',
          usage: 'Setup theme selection',
          example: `# 2. Choose UI theme (Darcula/Light)`,
        },
        {
          command: 'Configure Keymap',
          description: 'Select keyboard shortcut scheme',
          usage: 'Setup keymap preferences',
          example: `# 3. Configure keymap (Default/Visual Studio/Emacs)`,
        },
        {
          command: 'Install Essential Plugins',
          description: 'Install recommended plugins',
          usage: 'Plugin installation during setup',
          example: `# 4. Install essential plugins`,
        },
        {
          command: 'Menu Bar Components',
          description: 'Understanding menu bar structure',
          usage: 'Menu bar navigation',
          example: `# Menu Bar - File, Edit, View, Navigate, Code, Refactor, Run, Tools, Window, Help`,
        },
        {
          command: 'Tool Windows Overview',
          description: 'Understanding tool windows',
          usage: 'Tool window navigation',
          example: `# Tool Windows - Project, Structure, Favorites, Find, Run, Debug, etc.`,
        },
        {
          command: 'Editor Area Features',
          description: 'Understanding editor workspace',
          usage: 'Editor area navigation',
          example: `# Editor Area - Code editing with tabs`,
        },
        {
          command: 'Status Bar Information',
          description: 'Understanding status bar',
          usage: 'Status bar information',
          example: `# Status Bar - Information, notifications, quick actions`,
        },
        {
          command: 'Customize Appearance',
          description: 'Customize IDE appearance',
          usage: 'View > Appearance options',
          example: `# View > Appearance > various options`,
        },
        {
          command: 'Customize Tool Windows',
          description: 'Customize tool window layout',
          usage: 'Right-click tool window header',
          example: `# Right-click tool window header for customization`,
        },
        {
          command: 'Find Action Shortcut',
          description: 'Access all IDE commands',
          usage: 'Cmd+Shift+A (Mac) / Ctrl+Shift+A (Win)',
          example: `# Open Find Action
Cmd+Shift+A (Mac) / Ctrl+Shift+A (Win)`,
        },
        {
          command: 'Find Action Settings',
          description: 'Open IDE settings via Find Action',
          usage: 'Find Action > Settings',
          example: `# > Settings - Open IDE settings`,
        },
        {
          command: 'Find Action Project Structure',
          description: 'Configure project via Find Action',
          usage: 'Find Action > Project Structure',
          example: `# > Project Structure - Configure project`,
        },
        {
          command: 'Find Action Reformat Code',
          description: 'Format code via Find Action',
          usage: 'Find Action > Reformat Code',
          example: `# > Reformat Code - Format current file`,
        },
        {
          command: 'Find Action Git Commit',
          description: 'Open commit dialog via Find Action',
          usage: 'Find Action > Git Commit',
          example: `# > Git Commit - Open commit dialog`,
        },
        {
          command: 'Find Action Run Configuration',
          description: 'Create run config via Find Action',
          usage: 'Find Action > Run Configuration',
          example: `# > Run Configuration - Create run config`,
        },
        {
          command: 'Search Everywhere Activation',
          description: 'Activate universal search',
          usage: 'Double Shift',
          example: `# Search Everywhere
Press Shift twice quickly`,
        },
        {
          command: 'Search Everywhere Classes',
          description: 'Search for classes and files',
          usage: 'Search Everywhere categories',
          example: `# - Classes and files`,
        },
        {
          command: 'Search Everywhere Symbols',
          description: 'Search for symbols and methods',
          usage: 'Search Everywhere categories',
          example: `# - Symbols and methods`,
        },
        {
          command: 'Search Everywhere Actions',
          description: 'Search for actions and settings',
          usage: 'Search Everywhere categories',
          example: `# - Actions and settings`,
        },
        {
          command: 'Search Everywhere Git Branches',
          description: 'Search for Git branches',
          usage: 'Search Everywhere categories',
          example: `# - Git branches`,
        },
        {
          command: 'Search Everywhere Recent Locations',
          description: 'Search for recent locations',
          usage: 'Search Everywhere categories',
          example: `# - Recent locations`,
        },
        {
          command: 'Search Everywhere Filters',
          description: 'Use search filters',
          usage: 'Search Everywhere tips',
          example: `# - Use filters (Classes, Files, Symbols, Actions)`,
        },
        {
          command: 'Search Everywhere Camel Case',
          description: 'Use camel case matching',
          usage: 'Search Everywhere tips',
          example: `# - Use camel case matching: MyClassName matches mcn`,
        },
        {
          command: 'Open Settings Shortcut',
          description: 'Open IDE settings',
          usage: 'Cmd+, (Mac) / Ctrl+Alt+S (Win)',
          example: `# Open Settings
Cmd+, (Mac) / Ctrl+Alt+S (Win)`,
        },
        {
          command: 'Settings Appearance Behavior',
          description: 'Configure appearance and behavior',
          usage: 'Settings categories',
          example: `# - Appearance & Behavior (themes, fonts)`,
        },
        {
          command: 'Settings Editor',
          description: 'Configure editor settings',
          usage: 'Settings categories',
          example: `# - Editor (colors, code style, inspections)`,
        },
        {
          command: 'Settings Build Execution',
          description: 'Configure build and deployment',
          usage: 'Settings categories',
          example: `# - Build, Execution, Deployment`,
        },
        {
          command: 'Settings Version Control',
          description: 'Configure version control',
          usage: 'Settings categories',
          example: `# - Version Control`,
        },
        {
          command: 'Settings Plugins',
          description: 'Configure plugins',
          usage: 'Settings categories',
          example: `# - Plugins`,
        },
        {
          command: 'Project Structure Settings',
          description: 'Configure project-specific settings',
          usage: 'File > Project Structure',
          example: `# Project-specific settings:
# File > Project Structure`,
        },
      ],
    },
    {
      title: 'Basic Navigation and File Operations',
      commands: [
        {
          command: 'Recent Files Shortcut',
          description: 'Access recent files',
          usage: 'Cmd+E (Mac) / Ctrl+E (Win)',
          example: `# Recent Files
Cmd+E (Mac) / Ctrl+E (Win)`,
        },
        {
          command: 'Recent Files Features',
          description: 'Recent files capabilities',
          usage: 'Recent files functionality',
          example: `# Features:
# - Jump to any recently opened file
# - Filter by typing filename
# - Shows most recent at top`,
        },
        {
          command: 'Recent Locations Shortcut',
          description: 'Access recent locations',
          usage: 'Cmd+Shift+E (Mac) / Ctrl+Shift+E (Win)',
          example: `# Recent Locations:
Cmd+Shift+E (Mac) / Ctrl+Shift+E (Win)`,
        },
        {
          command: 'Go to Class Shortcut',
          description: 'Navigate to any class',
          usage: 'Cmd+O (Mac) / Ctrl+N (Win)',
          example: `# Go to Class
Cmd+O (Mac) / Ctrl+N (Win)`,
        },
        {
          command: 'Go to Class Features',
          description: 'Class navigation capabilities',
          usage: 'Go to class functionality',
          example: `# Features:
# - Fuzzy matching
# - Camel case support
# - Show qualified names
# - Navigate to inner classes`,
        },
        {
          command: 'Go to File Shortcut',
          description: 'Navigate to any file',
          usage: 'Cmd+Shift+O (Mac) / Ctrl+Shift+N (Win)',
          example: `# Go to File
Cmd+Shift+O (Mac) / Ctrl+Shift+N (Win)`,
        },
        {
          command: 'Go to File Partial Name',
          description: 'Use partial filename matching',
          usage: 'Go to file tips',
          example: `# - Use partial filename: pom.xml -> pom`,
        },
        {
          command: 'Go to File Directories',
          description: 'Navigate directories',
          usage: 'Go to file tips',
          example: `# - Navigate directories: src/main/java`,
        },
        {
          command: 'Go to File Paths',
          description: 'Show file paths in results',
          usage: 'Go to file tips',
          example: `# - Show file paths in results`,
        },
        {
          command: 'Go to Symbol Shortcut',
          description: 'Navigate to symbols',
          usage: 'Cmd+Alt+O (Mac) / Ctrl+Alt+Shift+N (Win)',
          example: `# Go to Symbol
Cmd+Alt+O (Mac) / Ctrl+Alt+Shift+N (Win)`,
        },
        {
          command: 'Go to Symbol Methods',
          description: 'Search for methods and functions',
          usage: 'Go to symbol searches',
          example: `# - Methods and functions`,
        },
        {
          command: 'Go to Symbol Fields',
          description: 'Search for fields and variables',
          usage: 'Go to symbol searches',
          example: `# - Fields and variables`,
        },
        {
          command: 'Go to Symbol Constants',
          description: 'Search for constants',
          usage: 'Go to symbol searches',
          example: `# - Constants`,
        },
        {
          command: 'Go to Symbol Class Members',
          description: 'Search for class members',
          usage: 'Go to symbol searches',
          example: `# - Class members`,
        },
        {
          command: 'Go to Line Shortcut',
          description: 'Jump to specific line',
          usage: 'Cmd+L (Mac) / Ctrl+G (Win)',
          example: `# Go to Line
Cmd+L (Mac) / Ctrl+G (Win)`,
        },
        {
          command: 'Go to Line Features',
          description: 'Line navigation features',
          usage: 'Go to line functionality',
          example: `# Enter line number to jump
# Shows current line in dialog
# Works with column numbers too`,
        },
      ],
    },
    {
      title: 'Basic Code Editing',
      commands: [
        {
          command: 'Duplicate Line Shortcut',
          description: 'Duplicate current line',
          usage: 'Cmd+D (Mac) / Ctrl+D (Win)',
          example: `# Duplicate Line
Cmd+D (Mac) / Ctrl+D (Win)`,
        },
        {
          command: 'Duplicate Line Features',
          description: 'Duplication capabilities',
          usage: 'Duplicate line functionality',
          example: `# Works with:
# - Single lines
# - Multi-line selections
# - Code blocks`,
        },
        {
          command: 'Delete Line Shortcut',
          description: 'Delete entire line',
          usage: 'Cmd+Backspace (Mac) / Ctrl+Y (Win)',
          example: `# Delete Line
Cmd+Backspace (Mac) / Ctrl+Y (Win)`,
        },
        {
          command: 'Delete Line Features',
          description: 'Deletion capabilities',
          usage: 'Delete line functionality',
          example: `# Features:
# - Removes entire line
# - Preserves undo history
# - Works with multiple selected lines`,
        },
        {
          command: 'Move Line Up',
          description: 'Move line up',
          usage: 'Cmd+Shift+↑ (Mac) / Ctrl+Shift+↑ (Win)',
          example: `# Move Line
Cmd+Shift+↑ (Mac) - Move line up`,
        },
        {
          command: 'Move Line Down',
          description: 'Move line down',
          usage: 'Cmd+Shift+↓ (Mac) / Ctrl+Shift+↓ (Win)',
          example: `Cmd+Shift+↓ (Mac) - Move line down`,
        },
        {
          command: 'Move Line Features',
          description: 'Line movement features',
          usage: 'Move line functionality',
          example: `# Maintains proper indentation
# Works with multi-line selections`,
        },
        {
          command: 'Comment Line Shortcut',
          description: 'Toggle line comments',
          usage: 'Cmd+/ (Mac) / Ctrl+/ (Win)',
          example: `# Comment Line
Cmd+/ (Mac) / Ctrl+/ (Win)`,
        },
        {
          command: 'Comment Line Features',
          description: 'Line comment features',
          usage: 'Comment line functionality',
          example: `# Features:
# - Toggle comment on/off
# - Works with multiple lines
# - Language-specific comment syntax`,
        },
        {
          command: 'Comment Block Shortcut',
          description: 'Toggle block comments',
          usage: 'Cmd+Alt+/ (Mac) / Ctrl+Shift+/ (Win)',
          example: `# Comment Block
Cmd+Alt+/ (Mac) / Ctrl+Shift+/ (Win)`,
        },
        {
          command: 'Comment Block C Style',
          description: 'C-style block comments',
          usage: 'Comment block types',
          example: `# /* ... */ for C-style languages`,
        },
        {
          command: 'Comment Block XML',
          description: 'XML/HTML block comments',
          usage: 'Comment block types',
          example: `# <!-- ... --> for XML/HTML`,
        },
        {
          command: 'Comment Block Python',
          description: 'Python block comments',
          usage: 'Comment block types',
          example: `# """...""" for Python`,
        },
      ],
    },
    {
      title: 'Advanced Navigation',
      commands: [
        {
          command: 'Go to Declaration Shortcut',
          description: 'Navigate to symbol definition',
          usage: 'Cmd+B (Mac) / Ctrl+B (Win)',
          example: `# Go to Declaration
Cmd+B (Mac) / Ctrl+B (Win)`,
        },
        {
          command: 'Go to Declaration Alternative',
          description: 'Alternative navigation methods',
          usage: 'Click navigation',
          example: `# Alternative:
# - Ctrl+Click (Mac/Win)
# - Cmd+Click (Mac)`,
        },
        {
          command: 'Go to Declaration Features',
          description: 'Declaration navigation features',
          usage: 'Declaration navigation',
          example: `# Features:
# - Jump to class/method definition
# - Navigate to variable declaration
# - Follow imports and includes`,
        },
        {
          command: 'Go to Implementation Shortcut',
          description: 'Navigate to implementations',
          usage: 'Cmd+Alt+B (Mac) / Ctrl+Alt+B (Win)',
          example: `# Go to Implementation
Cmd+Alt+B (Mac) / Ctrl+Alt+B (Win)`,
        },
        {
          command: 'Go to Implementation Features',
          description: 'Implementation navigation features',
          usage: 'Implementation navigation',
          example: `# Shows:
# - Class implementations of interface
# - Method overrides
# - Multiple implementations available`,
        },
        {
          command: 'Go to Super Method Shortcut',
          description: 'Navigate to parent method',
          usage: 'Cmd+U (Mac) / Ctrl+U (Win)',
          example: `# Go to Super Method
Cmd+U (Mac) / Ctrl+U (Win)`,
        },
        {
          command: 'Go to Super Method Features',
          description: 'Super method navigation features',
          usage: 'Super method navigation',
          example: `# Navigates to:
# - Parent class
# - Overridden method
# - Interface method`,
        },
        {
          command: 'Navigate Back Shortcut',
          description: 'Navigate back in history',
          usage: 'Cmd+[ (Mac) / Ctrl+Alt+← (Win)',
          example: `# Navigate History
Cmd+[ (Mac) / Ctrl+Alt+← (Win) - Back`,
        },
        {
          command: 'Navigate Forward Shortcut',
          description: 'Navigate forward in history',
          usage: 'Cmd+] (Mac) / Ctrl+Alt+→ (Win)',
          example: `Cmd+] (Mac) / Ctrl+Alt+→ (Win) - Forward`,
        },
        {
          command: 'Navigate History Features',
          description: 'Navigation history features',
          usage: 'Navigation history',
          example: `# Maintains navigation stack
# Works across files and symbols`,
        },
        {
          command: 'Last Edit Location Shortcut',
          description: 'Jump to last edit position',
          usage: 'Cmd+Shift+Backspace (Mac) / Ctrl+Shift+Backspace (Win)',
          example: `# Last Edit Location
Cmd+Shift+Backspace (Mac) / Ctrl+Shift+Backspace (Win)`,
        },
        {
          command: 'Last Edit Location Features',
          description: 'Last edit location features',
          usage: 'Last edit navigation',
          example: `# Quickly return to where you were editing
# Maintains edit history across sessions`,
        },
      ],
    },
    {
      title: 'Code Completion and Intelligence',
      commands: [
        {
          command: 'Basic Completion Shortcut',
          description: 'Standard code completion',
          usage: 'Ctrl+Space',
          example: `# Basic Completion
Ctrl+Space`,
        },
        {
          command: 'Basic Completion Suggestions',
          description: 'Basic completion suggestions',
          usage: 'Basic completion types',
          example: `# Suggestions:
# - Local variables and methods
# - Class members
# - Keywords and syntax
# - Import suggestions`,
        },
        {
          command: 'Smart Completion Shortcut',
          description: 'Context-aware completion',
          usage: 'Ctrl+Shift+Space',
          example: `# Smart Completion
Ctrl+Shift+Space`,
        },
        {
          command: 'Smart Completion Filtering',
          description: 'Smart completion filtering',
          usage: 'Smart completion features',
          example: `# Filters suggestions based on:
# - Expected type
# - Current context
# - Variable types
# - Method return types`,
        },
        {
          command: 'Complete Statement Shortcut',
          description: 'Auto-complete current statement',
          usage: 'Cmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win)',
          example: `# Complete Statement
Cmd+Shift+Enter (Mac) / Ctrl+Shift+Enter (Win)`,
        },
        {
          command: 'Complete Statement Features',
          description: 'Statement completion features',
          usage: 'Complete statement functionality',
          example: `# Auto-adds:
# - Semicolons
# - Braces and parentheses
# - Missing syntax elements
# - Proper indentation`,
        },
        {
          command: 'Parameter Info Shortcut',
          description: 'Show method parameter info',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win)',
          example: `# Parameter Info
Cmd+P (Mac) / Ctrl+P (Win)`,
        },
        {
          command: 'Parameter Info Features',
          description: 'Parameter info features',
          usage: 'Parameter info functionality',
          example: `# Shows:
# - Parameter names
# - Parameter types
# - Current parameter highlight
# - Documentation hints`,
        },
        {
          command: 'Quick Documentation Shortcut',
          description: 'Show documentation popup',
          usage: 'Cmd+Q (Mac) / Ctrl+Q (Win)',
          example: `# Quick Documentation
Cmd+Q (Mac) / Ctrl+Q (Win)`,
        },
        {
          command: 'Quick Documentation Features',
          description: 'Documentation features',
          usage: 'Documentation functionality',
          example: `# Displays:
# - JSDoc/Javadoc
# - Method signatures
# - Parameter descriptions
# - Return value documentation`,
        },
      ],
    },
    {
      title: 'Refactoring Basics',
      commands: [
        {
          command: 'Refactor This Shortcut',
          description: 'Show available refactorings',
          usage: 'Ctrl+T (Mac) / Ctrl+Alt+Shift+T (Win)',
          example: `# Refactor This
Ctrl+T (Mac) / Ctrl+Alt+Shift+T (Win)`,
        },
        {
          command: 'Refactor This Options',
          description: 'Available refactoring options',
          usage: 'Refactoring types',
          example: `# Available refactorings:
# - Rename
# - Extract Method/Variable/Constant
# - Inline
# - Change Signature
# - Pull/Push Members`,
        },
        {
          command: 'Rename Shortcut',
          description: 'Rename symbol across project',
          usage: 'Shift+F6',
          example: `# Rename
Shift+F6`,
        },
        {
          command: 'Rename Features',
          description: 'Rename refactoring features',
          usage: 'Rename functionality',
          example: `# Renames:
# - Variables and methods
# - Classes and files
# - Packages and modules
# - All references automatically`,
        },
        {
          command: 'Extract Method Shortcut',
          description: 'Extract code to method',
          usage: 'Cmd+Alt+M (Mac) / Ctrl+Alt+M (Win)',
          example: `# Extract Method
Cmd+Alt+M (Mac) / Ctrl+Alt+M (Win)`,
        },
        {
          command: 'Extract Method Process',
          description: 'Method extraction process',
          usage: 'Extract method steps',
          example: `# Process:
# 1. Select code to extract
# 2. Press shortcut
# 3. Enter method name
# 4. Configure parameters`,
        },
        {
          command: 'Extract Variable Shortcut',
          description: 'Extract expression to variable',
          usage: 'Cmd+Alt+V (Mac) / Ctrl+Alt+V (Win)',
          example: `# Extract Variable
Cmd+Alt+V (Mac) / Ctrl+Alt+V (Win)`,
        },
        {
          command: 'Extract Variable Features',
          description: 'Variable extraction features',
          usage: 'Extract variable functionality',
          example: `# Creates:
# - Local variables
# - Constants (optionally)
# - Proper type inference`,
        },
        {
          command: 'Inline Shortcut',
          description: 'Inline variable/method',
          usage: 'Cmd+Alt+N (Mac) / Ctrl+Alt+N (Win)',
          example: `# Inline
Cmd+Alt+N (Mac) / Ctrl+Alt+N (Win)`,
        },
        {
          command: 'Inline Features',
          description: 'Inline refactoring features',
          usage: 'Inline functionality',
          example: `# Inlines:
# - Variables
# - Methods
# - Constants
# - Parameters`,
        },
      ],
    },
    {
      title: 'Advanced Refactoring',
      commands: [
        {
          command: 'Extract Constant Shortcut',
          description: 'Extract value to constant',
          usage: 'Cmd+Alt+C (Mac) / Ctrl+Alt+C (Win)',
          example: `# Extract Constant
Cmd+Alt+C (Mac) / Ctrl+Alt+C (Win)`,
        },
        {
          command: 'Extract Constant Features',
          description: 'Constant extraction features',
          usage: 'Extract constant functionality',
          example: `# Features:
# - Creates static final fields
# - Replaces all occurrences
# - Suggests appropriate scope`,
        },
        {
          command: 'Extract Field Shortcut',
          description: 'Extract to class field',
          usage: 'Cmd+Alt+F (Mac) / Ctrl+Alt+F (Win)',
          example: `# Extract Field
Cmd+Alt+F (Mac) / Ctrl+Alt+F (Win)`,
        },
        {
          command: 'Extract Field Features',
          description: 'Field extraction features',
          usage: 'Extract field functionality',
          example: `# Creates:
# - Instance fields
# - Static fields (optionally)
# - Proper encapsulation`,
        },
        {
          command: 'Extract Parameter Shortcut',
          description: 'Extract to method parameter',
          usage: 'Cmd+Alt+P (Mac) / Ctrl+Alt+P (Win)',
          example: `# Extract Parameter
Cmd+Alt+P (Mac) / Ctrl+Alt+P (Win)`,
        },
        {
          command: 'Extract Parameter Features',
          description: 'Parameter extraction features',
          usage: 'Extract parameter functionality',
          example: `# Features:
# - Adds parameter to method signature
# - Updates all call sites
# - Handles default values`,
        },
        {
          command: 'Change Signature Shortcut',
          description: 'Modify method signature',
          usage: 'Cmd+F6 (Mac) / Ctrl+F6 (Win)',
          example: `# Change Signature
Cmd+F6 (Mac) / Ctrl+F6 (Win)`,
        },
        {
          command: 'Change Signature Features',
          description: 'Signature modification features',
          usage: 'Change signature functionality',
          example: `# Can modify:
# - Parameter names and types
# - Return type
# - Parameter order
# - Add/remove parameters`,
        },
        {
          command: 'Move Shortcut',
          description: 'Move class/method to different location',
          usage: 'F6',
          example: `# Move
F6`,
        },
        {
          command: 'Move Features',
          description: 'Move refactoring features',
          usage: 'Move functionality',
          example: `# Can move:
# - Classes to different packages
# - Methods to different classes
# - Files to different directories`,
        },
      ],
    },
    {
      title: 'Search and Replace Advanced',
      commands: [
        {
          command: 'Find in Path Shortcut',
          description: 'Search across entire project',
          usage: 'Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)',
          example: `# Find in Path
Cmd+Shift+F (Mac) / Ctrl+Shift+F (Win)`,
        },
        {
          command: 'Find in Path File Masks',
          description: 'Search with file masks',
          usage: 'Find options',
          example: `# - File masks (*.java, *.js)`,
        },
        {
          command: 'Find in Path Scope',
          description: 'Search with scope limits',
          usage: 'Find options',
          example: `# - Scope (Project, Module, Directory)`,
        },
        {
          command: 'Find in Path Options',
          description: 'Search with additional options',
          usage: 'Find options',
          example: `# - Case sensitivity
# - Whole word
# - Regular expressions`,
        },
        {
          command: 'Replace in Path Shortcut',
          description: 'Replace across entire project',
          usage: 'Cmd+Shift+R (Mac) / Ctrl+Shift+R (Win)',
          example: `# Replace in Path
Cmd+Shift+R (Mac) / Ctrl+Shift+R (Win)`,
        },
        {
          command: 'Replace in Path Features',
          description: 'Replace features',
          usage: 'Replace functionality',
          example: `# Features:
# - Preview changes
# - Replace all or individual
# - Context preview
# - Safe replace with refactoring`,
        },
        {
          command: 'Find Usages Shortcut',
          description: 'Find all symbol usages',
          usage: 'Cmd+Alt+F7 (Mac) / Alt+F7 (Win)',
          example: `# Find Usages
Cmd+Alt+F7 (Mac) / Alt+F7 (Win)`,
        },
        {
          command: 'Find Usages Features',
          description: 'Usage finding features',
          usage: 'Find usages functionality',
          example: `# Shows:
# - All usages in project
# - Grouped by file
# - Navigate to each usage`,
        },
        {
          command: 'Structural Search Menu',
          description: 'Access structural search',
          usage: 'Edit > Find > Search Structurally',
          example: `# Structural Search`,
        },
        {
          command: 'Structural Search Patterns',
          description: 'Search by code patterns',
          usage: 'Structural search concept',
          example: `# Search by patterns, not text`,
        },
        {
          command: 'Structural Search Example',
          description: 'Example structural search',
          usage: 'For loop pattern',
          example: `# Example: find all for loops
# for($type$ $var$ : $collection$) { $stmt$ }`,
        },
        {
          command: 'Structural Search Templates',
          description: 'Common pattern templates',
          usage: 'Structural search templates',
          example: `# Templates for common patterns:
# - Method calls
# - Class declarations
# - Exception handling`,
        },
      ],
    },
    {
      title: 'Multi-Cursor and Advanced Selection',
      commands: [
        {
          command: 'Column Selection Mouse',
          description: 'Select with mouse',
          usage: 'Alt+Shift+Drag',
          example: `# Column Selection
Alt+Shift+Drag - Select with mouse`,
        },
        {
          command: 'Column Selection Toggle',
          description: 'Toggle column mode',
          usage: 'Cmd+Shift+8 (Mac)',
          example: `Cmd+Shift+8 (Mac) - Toggle column mode`,
        },
        {
          command: 'Column Selection Uses',
          description: 'Column selection use cases',
          usage: 'Column selection applications',
          example: `# Useful for:
# - Editing similar code patterns
# - Changing variable names
# - Reformatting data`,
        },
        {
          command: 'Add Selection Shortcut',
          description: 'Multi-select next occurrence',
          usage: 'Ctrl+G (Mac) / Alt+J (Win)',
          example: `# Add Selection
Ctrl+G (Mac) / Alt+J (Win)`,
        },
        {
          command: 'Add Selection Features',
          description: 'Multi-selection features',
          usage: 'Add selection functionality',
          example: `# Features:
# - Selects next occurrence
# - Builds multi-cursor
# - Works with any word`,
        },
        {
          command: 'Select All Occurrences Shortcut',
          description: 'Select all matching words',
          usage: 'Ctrl+Cmd+G (Mac) / Ctrl+Alt+Shift+J (Win)',
          example: `# Select All
Ctrl+Cmd+G (Mac) / Ctrl+Alt+Shift+J (Win)`,
        },
        {
          command: 'Select All Features',
          description: 'Select all features',
          usage: 'Select all functionality',
          example: `# Selects all matches in file
# Creates multiple cursors
# Great for bulk edits`,
        },
        {
          command: 'Extend Selection Shortcut',
          description: 'Expand selection intelligently',
          usage: 'Cmd+W (Mac) / Ctrl+W (Win)',
          example: `# Selection Control
Cmd+W (Mac) / Ctrl+W (Win) - Extend`,
        },
        {
          command: 'Shrink Selection Shortcut',
          description: 'Shrink selection intelligently',
          usage: 'Cmd+Shift+W (Mac) / Ctrl+Shift+W (Win)',
          example: `Cmd+Shift+W (Mac) / Ctrl+Shift+W (Win) - Shrink`,
        },
        {
          command: 'Selection Hierarchy',
          description: 'Selection expansion levels',
          usage: 'Selection levels',
          example: `# Selection hierarchy:
# Word → Line → Block → Method → Class`,
        },
      ],
    },
    {
      title: 'Debugging Advanced',
      commands: [
        {
          command: 'Conditional Breakpoints Setup',
          description: 'Create conditional breakpoints',
          usage: 'Right-click breakpoint > Edit Breakpoint',
          example: `# Conditional Breakpoints
# Set conditions like:
# - x > 100
# - str.equals("test")
# - i % 10 == 0`,
        },
        {
          command: 'Breakpoint Types',
          description: 'Different breakpoint types',
          usage: 'Breakpoint categories',
          example: `# Types:
# - Condition breakpoints
# - Log breakpoints (no pause)
# - Exception breakpoints`,
        },
        {
          command: 'Evaluate Expression Shortcut',
          description: 'Execute code in debugger',
          usage: 'Alt+F8',
          example: `# Evaluate Expression
Alt+F8`,
        },
        {
          command: 'Evaluate Expression Features',
          description: 'Expression evaluation features',
          usage: 'Evaluate functionality',
          example: `# Can:
# - Execute any code
# - Inspect variables
# - Modify values
# - Call methods
# - Create new objects`,
        },
        {
          command: 'Step Into',
          description: 'Step into method calls',
          usage: 'F7',
          example: `# Debug Navigation
F7 - Step Into (enter method)`,
        },
        {
          command: 'Step Over',
          description: 'Step over current line',
          usage: 'F8',
          example: `F8 - Step Over (execute line)`,
        },
        {
          command: 'Step Out',
          description: 'Step out of current method',
          usage: 'Shift+F8',
          example: `Shift+F8 - Step Out (exit method)`,
        },
        {
          command: 'Force Step Into',
          description: 'Force step into method',
          usage: 'Alt+Shift+F7',
          example: `# Advanced:
# - Force Step Into (Alt+Shift+F7)`,
        },
        {
          command: 'Run to Cursor',
          description: 'Run to cursor position',
          usage: 'Alt+F9',
          example: `# - Run to Cursor (Alt+F9)`,
        },
        {
          command: 'Smart Step Into',
          description: 'Smart step into lambda',
          usage: 'Shift+F7',
          example: `# - Smart Step Into (Shift+F7)`,
        },
        {
          command: 'Watch Expressions Setup',
          description: 'Add watch expressions',
          usage: 'Debug tool window > Watches tab',
          example: `# Watch Expressions
# Add expressions to monitor:`,
        },
        {
          command: 'Watch Expression Types',
          description: 'Types of watch expressions',
          usage: 'Watch expression categories',
          example: `# - Variables
# - Method calls
# - Complex expressions
# - Field access`,
        },
        {
          command: 'Watch Expression Updates',
          description: 'Watch expression behavior',
          usage: 'Watch functionality',
          example: `# Updates during debugging`,
        },
      ],
    },
    {
      title: 'Version Control Advanced',
      commands: [
        {
          command: 'Git Commit Shortcut',
          description: 'Commit changes',
          usage: 'Cmd+K',
          example: `# Git Operations
# - Commit (Cmd+K)`,
        },
        {
          command: 'Git Push Shortcut',
          description: 'Push changes',
          usage: 'Cmd+Shift+K',
          example: `# - Push (Cmd+Shift+K)`,
        },
        {
          command: 'Git Pull Shortcut',
          description: 'Pull changes',
          usage: 'Cmd+T',
          example: `# - Pull (Cmd+T)`,
        },
        {
          command: 'Git Branch Management',
          description: 'Manage branches',
          usage: 'Git tool window',
          example: `# - Branch management`,
        },
        {
          command: 'Git Merge Conflicts',
          description: 'Resolve merge conflicts',
          usage: 'Git conflict resolution',
          example: `# - Merge conflicts`,
        },
        {
          command: 'Git Stash Changes',
          description: 'Stash uncommitted changes',
          usage: 'Git stash operations',
          example: `# - Stash changes`,
        },
        {
          command: 'Git Interactive Rebase',
          description: 'Interactive rebase operations',
          usage: 'Git rebase features',
          example: `# - Interactive rebase`,
        },
        {
          command: 'Git Annotate Menu',
          description: 'Access git annotate',
          usage: 'Right-click > Git > Annotate',
          example: `# Git Annotate`,
        },
        {
          command: 'Git Annotate Features',
          description: 'Annotate information',
          usage: 'Git annotate data',
          example: `# Shows:
# - Who wrote each line
# - When it was last modified
# - Commit message
# - Branch information`,
        },
        {
          command: 'Shelve Changes Menu',
          description: 'Access shelve changes',
          usage: 'Git > Shelve Changes',
          example: `# Shelve Changes`,
        },
        {
          command: 'Shelve Changes Features',
          description: 'Shelve functionality',
          usage: 'Shelve operations',
          example: `# - Store uncommitted changes
# - Apply later when needed
# - Manage multiple shelves
# - Compare with current version`,
        },
        {
          command: 'Cherry-Pick Menu',
          description: 'Access cherry-pick',
          usage: 'Git > Cherry-Pick',
          example: `# Cherry-Pick`,
        },
        {
          command: 'Cherry-Pick Features',
          description: 'Cherry-pick functionality',
          usage: 'Cherry-pick operations',
          example: `# - Apply commits from other branches
# - Select specific commits
# - Resolve conflicts if needed
# - Maintain commit history`,
        },
      ],
    },
    {
      title: 'Database Tools (Ultimate Edition)',
      commands: [
        {
          command: 'Database Explorer Access',
          description: 'Open database explorer',
          usage: 'View > Tool Windows > Database',
          example: `# Database Features`,
        },
        {
          command: 'Database Connect',
          description: 'Connect to databases',
          usage: 'Database connection setup',
          example: `# - Connect to databases`,
        },
        {
          command: 'Database Browse',
          description: 'Browse database schemas',
          usage: 'Database exploration',
          example: `# - Browse schemas and tables`,
        },
        {
          command: 'Database Edit Data',
          description: 'Edit table data',
          usage: 'Data editing',
          example: `# - Edit table data`,
        },
        {
          command: 'Database Run Queries',
          description: 'Execute SQL queries',
          usage: 'Query execution',
          example: `# - Run SQL queries`,
        },
        {
          command: 'Database Export Import',
          description: 'Export and import data',
          usage: 'Data operations',
          example: `# - Export/import data`,
        },
        {
          command: 'SQL Console Access',
          description: 'Open SQL console',
          usage: 'Right-click table > Console',
          example: `# SQL Console`,
        },
        {
          command: 'SQL Console Features',
          description: 'SQL console capabilities',
          usage: 'SQL console functionality',
          example: `# - Syntax highlighting
# - Code completion
# - Query execution
# - Results viewing
# - Export results`,
        },
        {
          command: 'Data Editor Access',
          description: 'Open data editor',
          usage: 'Double-click table',
          example: `# Data Editor`,
        },
        {
          command: 'Data Editor Features',
          description: 'Data editor capabilities',
          usage: 'Data editing functionality',
          example: `# - Edit cells directly
# - Add/delete rows
# - Filter and sort
# - Copy/paste data
# - Mass updates`,
        },
      ],
    },
    {
      title: 'Performance and Optimization',
      commands: [
        {
          command: 'Performance Profiling Access',
          description: 'Access performance profiler',
          usage: 'Run > Profiler',
          example: `# Profiler Features`,
        },
        {
          command: 'CPU Profiling',
          description: 'Profile CPU usage',
          usage: 'CPU profiling features',
          example: `# - CPU profiling`,
        },
        {
          command: 'Memory Profiling',
          description: 'Profile memory usage',
          usage: 'Memory profiling features',
          example: `# - Memory usage`,
        },
        {
          command: 'Method Timing',
          description: 'Profile method execution time',
          usage: 'Timing analysis',
          example: `# - Method timing`,
        },
        {
          command: 'Call Tree Analysis',
          description: 'Analyze call tree',
          usage: 'Call tree features',
          example: `# - Call tree analysis`,
        },
        {
          command: 'Hotspot Identification',
          description: 'Identify performance hotspots',
          usage: 'Hotspot detection',
          example: `# - Hotspot identification`,
        },
        {
          command: 'Memory View Access',
          description: 'Access memory view',
          usage: 'Debug tool window > Memory',
          example: `# Memory Analysis`,
        },
        {
          command: 'Heap Inspection',
          description: 'Inspect heap memory',
          usage: 'Heap analysis',
          example: `# - Heap inspection`,
        },
        {
          command: 'Object Counting',
          description: 'Count objects in memory',
          usage: 'Object counting',
          example: `# - Object counting`,
        },
        {
          command: 'Garbage Collection',
          description: 'Monitor garbage collection',
          usage: 'GC monitoring',
          example: `# - Garbage collection`,
        },
        {
          command: 'Memory Leaks Detection',
          description: 'Detect memory leaks',
          usage: 'Leak detection',
          example: `# - Memory leaks detection`,
        },
        {
          command: 'Object References',
          description: 'Analyze object references',
          usage: 'Reference analysis',
          example: `# - Object references`,
        },
        {
          command: 'Code Analysis Access',
          description: 'Access code analysis',
          usage: 'Code > Inspect Code',
          example: `# Code Inspection`,
        },
        {
          command: 'Full Project Analysis',
          description: 'Run complete project analysis',
          usage: 'Project-wide inspection',
          example: `# - Run full project analysis`,
        },
        {
          command: 'Find Potential Issues',
          description: 'Identify code issues',
          usage: 'Issue detection',
          example: `# - Find potential issues`,
        },
        {
          command: 'Code Quality Metrics',
          description: 'Analyze code quality',
          usage: 'Quality metrics',
          example: `# - Code quality metrics`,
        },
        {
          command: 'Security Vulnerabilities',
          description: 'Find security issues',
          usage: 'Security analysis',
          example: `# - Security vulnerabilities`,
        },
        {
          command: 'Performance Issues',
          description: 'Find performance problems',
          usage: 'Performance analysis',
          example: `# - Performance issues`,
        },
      ],
    },
    {
      title: 'Customization and Productivity',
      commands: [
        {
          command: 'Live Templates Access',
          description: 'Access live templates settings',
          usage: 'Settings > Editor > Live Templates',
          example: `# Live Templates`,
        },
        {
          command: 'Live Templates Uses',
          description: 'Live template applications',
          usage: 'Template usage',
          example: `# Create shortcuts for:
# - Common code patterns
# - Boilerplate code
# - Method signatures
# - Class structures`,
        },
        {
          command: 'Live Templates Example',
          description: 'Example live template',
          usage: 'Template example',
          example: `# Example: psvm -> public static void main`,
        },
        {
          command: 'File Templates Access',
          description: 'Access file templates settings',
          usage: 'Settings > Editor > File and Code Templates',
          example: `# File Templates`,
        },
        {
          command: 'File Templates Customization',
          description: 'Customize file templates',
          usage: 'Template customization',
          example: `# Customize:
# - Class templates
# - Interface templates
# - File headers
# - Copyright notices
# - Package comments`,
        },
        {
          command: 'Keymap Customization Access',
          description: 'Access keymap settings',
          usage: 'Settings > Keymap',
          example: `# Keymap Customization`,
        },
        {
          command: 'Keymap Features',
          description: 'Keymap customization features',
          usage: 'Keymap functionality',
          example: `# - Modify existing shortcuts
# - Add new key bindings
# - Create custom keymaps
# - Import/export keymaps`,
        },
        {
          command: 'Scratch Files Shortcut',
          description: 'Create scratch files',
          usage: 'Cmd+Shift+N',
          example: `# Productivity Features`,
        },
        {
          command: 'Multiple Carets',
          description: 'Use multiple cursors',
          usage: 'Multi-cursor editing',
          example: `# - Multiple carets`,
        },
        {
          command: 'Intentions Shortcut',
          description: 'Access intention actions',
          usage: 'Alt+Enter',
          example: `# - Intentions (Alt+Enter)`,
        },
        {
          command: 'Postfix Completion',
          description: 'Use postfix completion',
          usage: 'Postfix templates',
          example: `# - Postfix completion`,
        },
        {
          command: 'Surround with Templates',
          description: 'Surround code with templates',
          usage: 'Surround templates',
          example: `# - Surround with templates`,
        },
        {
          command: 'Bookmarks Toggle',
          description: 'Toggle bookmarks',
          usage: 'F11',
          example: `# - Bookmarks (F11/F3)`,
        },
        {
          command: 'Bookmarks Navigation',
          description: 'Navigate bookmarks',
          usage: 'F3',
          example: `# - Bookmarks (F11/F3)`,
        },
      ],
    },
    {
      title: 'IDE-Specific Features',
      commands: [
        {
          command: 'IntelliJ IDEA Spring Boot',
          description: 'Spring Boot integration',
          usage: 'IntelliJ IDEA features',
          example: `# IntelliJ IDEA Features
# - Spring Boot integration`,
        },
        {
          command: 'IntelliJ IDEA Maven Gradle',
          description: 'Build tool support',
          usage: 'Build tool integration',
          example: `# - Maven/Gradle support`,
        },
        {
          command: 'IntelliJ IDEA Java EE',
          description: 'Java EE support',
          usage: 'Enterprise framework support',
          example: `# - Java EE support`,
        },
        {
          command: 'IntelliJ IDEA Android',
          description: 'Android development',
          usage: 'Android development tools',
          example: `# - Android development`,
        },
        {
          command: 'IntelliJ IDEA Kotlin',
          description: 'Kotlin development',
          usage: 'Kotlin language support',
          example: `# - Kotlin development`,
        },
        {
          command: 'IntelliJ IDEA Code Coverage',
          description: 'Code coverage tools',
          usage: 'Coverage analysis',
          example: `# - Code coverage`,
        },
        {
          command: 'PyCharm Django Flask',
          description: 'Web framework integration',
          usage: 'Python web frameworks',
          example: `# PyCharm Features
# - Django/Flask integration`,
        },
        {
          command: 'PyCharm Scientific Tools',
          description: 'Scientific computing tools',
          usage: 'Data science integration',
          example: `# - Scientific tools (NumPy, Pandas)`,
        },
        {
          command: 'PyCharm Virtual Environments',
          description: 'Virtual environment support',
          usage: 'Python environment management',
          example: `# - Virtual environments`,
        },
        {
          command: 'PyCharm Testing Frameworks',
          description: 'Testing framework support',
          usage: 'Python testing tools',
          example: `# - Testing frameworks`,
        },
        {
          command: 'PyCharm Profiling Tools',
          description: 'Python profiling',
          usage: 'Performance analysis',
          example: `# - Profiling tools`,
        },
        {
          command: 'PyCharm Remote Debugging',
          description: 'Remote debugging capabilities',
          usage: 'Remote development',
          example: `# - Remote debugging`,
        },
        {
          command: 'WebStorm Node.js',
          description: 'Node.js integration',
          usage: 'JavaScript runtime support',
          example: `# WebStorm Features
# - Node.js integration`,
        },
        {
          command: 'WebStorm React Angular Vue',
          description: 'Frontend framework support',
          usage: 'JavaScript frameworks',
          example: `# - React/Angular/Vue support`,
        },
        {
          command: 'WebStorm TypeScript',
          description: 'TypeScript support',
          usage: 'TypeScript language support',
          example: `# - TypeScript`,
        },
        {
          command: 'WebStorm CSS SCSS Sass',
          description: 'CSS preprocessing support',
          usage: 'CSS and preprocessors',
          example: `# - CSS/SCSS/Sass`,
        },
        {
          command: 'WebStorm Build Tools',
          description: 'Build tool integration',
          usage: 'JavaScript build tools',
          example: `# - Build tools (Webpack, npm)`,
        },
        {
          command: 'WebStorm Docker',
          description: 'Docker integration',
          usage: 'Container development',
          example: `# - Docker integration`,
        },
        {
          command: 'Ultimate Database Tools',
          description: 'Database integration',
          usage: 'Ultimate database features',
          example: `# Ultimate Features
# - Database tools`,
        },
        {
          command: 'Ultimate Profiling Tools',
          description: 'Performance profiling',
          usage: 'Ultimate profiling features',
          example: `# - Profiling tools`,
        },
        {
          command: 'Ultimate JavaScript Debugger',
          description: 'JavaScript debugging',
          usage: 'Ultimate debugging features',
          example: `# - JavaScript debugger`,
        },
        {
          command: 'Ultimate Spring Support',
          description: 'Spring framework support',
          usage: 'Enterprise framework features',
          example: `# - Spring support`,
        },
        {
          command: 'Ultimate Enterprise Frameworks',
          description: 'Enterprise framework support',
          usage: 'Enterprise development',
          example: `# - Enterprise frameworks`,
        },
        {
          command: 'Ultimate Code Review Tools',
          description: 'Code review features',
          usage: 'Collaboration tools',
          example: `# - Code review tools`,
        },
      ],
    },
  ],
};
