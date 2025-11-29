import { Code } from 'lucide-react';

export const vscodeCheatsheet = {
  id: 'vscode',
  name: 'VS Code',
  description: 'Visual Studio Code shortcuts & commands',
  icon: Code,
  colorTheme: 'blue' as const,
  sections: [
    {
      title: 'General (Mac / Windows)',
      commands: [
        {
          command: 'Cmd+Shift+P / Ctrl+Shift+P',
          description: 'Command Palette',
          usage: 'Cmd+Shift+P (Mac) / Ctrl+Shift+P (Win)',
          example: 'Access all commands',
        },
        {
          command: 'Cmd+P / Ctrl+P',
          description: 'Quick Open file',
          usage: 'Cmd+P (Mac) / Ctrl+P (Win)',
          example: 'Type filename to open',
        },
        {
          command: 'Cmd+, / Ctrl+,',
          description: 'Open Settings',
          usage: 'Cmd+, (Mac) / Ctrl+, (Win)',
          example: 'Open user settings',
        },
        {
          command: 'Cmd+K Cmd+S / Ctrl+K Ctrl+S',
          description: 'Keyboard Shortcuts',
          usage: 'Cmd+K Cmd+S (Mac)',
          example: 'View all shortcuts',
        },
      ],
    },
    {
      title: 'Editing',
      commands: [
        {
          command: 'Cmd+X / Ctrl+X',
          description: 'Cut line',
          usage: 'Cmd+X (Mac) / Ctrl+X (Win)',
          example: 'Cut entire line',
        },
        {
          command: 'Cmd+C / Ctrl+C',
          description: 'Copy line',
          usage: 'Cmd+C (Mac) / Ctrl+C (Win)',
          example: 'Copy entire line',
        },
        {
          command: 'Alt+↑/↓',
          description: 'Move line up/down',
          usage: 'Alt+↑ or Alt+↓',
          example: 'Move current line',
        },
        {
          command: 'Shift+Alt+↓ / Shift+Alt+↑',
          description: 'Copy line up/down',
          usage: 'Shift+Alt+↓/↑',
          example: 'Duplicate line',
        },
        {
          command: 'Cmd+Shift+K / Ctrl+Shift+K',
          description: 'Delete line',
          usage: 'Cmd+Shift+K (Mac)',
          example: 'Delete entire line',
        },
        {
          command: 'Cmd+Enter / Ctrl+Enter',
          description: 'Insert line below',
          usage: 'Cmd+Enter (Mac)',
          example: 'New line below',
        },
        {
          command: 'Cmd+/ / Ctrl+/',
          description: 'Toggle line comment',
          usage: 'Cmd+/ (Mac) / Ctrl+/ (Win)',
          example: 'Comment/uncomment',
        },
        {
          command: 'Shift+Alt+A',
          description: 'Toggle block comment',
          usage: 'Shift+Alt+A',
          example: '/* block comment */',
        },
      ],
    },
    {
      title: 'Multi-Cursor',
      commands: [
        {
          command: 'Alt+Click',
          description: 'Add cursor',
          usage: 'Alt+Click',
          example: 'Click to add cursor',
        },
        {
          command: 'Cmd+Alt+↑/↓ / Ctrl+Alt+↑/↓',
          description: 'Add cursor above/below',
          usage: 'Cmd+Alt+↑/↓ (Mac)',
          example: 'Multiple cursors',
        },
        {
          command: 'Cmd+D / Ctrl+D',
          description: 'Select next occurrence',
          usage: 'Cmd+D (Mac) / Ctrl+D (Win)',
          example: 'Multi-select word',
        },
        {
          command: 'Cmd+Shift+L / Ctrl+Shift+L',
          description: 'Select all occurrences',
          usage: 'Cmd+Shift+L (Mac)',
          example: 'Select all matches',
        },
      ],
    },
    {
      title: 'Search & Replace',
      commands: [
        {
          command: 'Cmd+F / Ctrl+F',
          description: 'Find',
          usage: 'Cmd+F (Mac) / Ctrl+F (Win)',
          example: 'Search in file',
        },
        {
          command: 'Cmd+H / Ctrl+H',
          description: 'Replace',
          usage: 'Cmd+H (Mac) / Ctrl+H (Win)',
          example: 'Find and replace',
        },
        {
          command: 'Cmd+Shift+F / Ctrl+Shift+F',
          description: 'Find in files',
          usage: 'Cmd+Shift+F (Mac)',
          example: 'Search workspace',
        },
        {
          command: 'Cmd+G / F3',
          description: 'Find next',
          usage: 'Cmd+G (Mac) / F3 (Win)',
          example: 'Next match',
        },
      ],
    },
    {
      title: 'Navigation',
      commands: [
        {
          command: 'Cmd+T / Ctrl+T',
          description: 'Go to Symbol',
          usage: 'Cmd+T (Mac) / Ctrl+T (Win)',
          example: 'Jump to function/class',
        },
        {
          command: 'Cmd+G / Ctrl+G',
          description: 'Go to Line',
          usage: 'Cmd+G (Mac) / Ctrl+G (Win)',
          example: 'Jump to line number',
        },
        {
          command: 'Ctrl+- / Ctrl+-',
          description: 'Go back/forward',
          usage: 'Ctrl+- (back) / Ctrl+Shift+- (forward)',
          example: 'Navigate history',
        },
        {
          command: 'F12',
          description: 'Go to Definition',
          usage: 'F12',
          example: 'Jump to definition',
        },
        {
          command: 'Alt+F12',
          description: 'Peek Definition',
          usage: 'Alt+F12',
          example: 'Inline definition',
        },
      ],
    },
    {
      title: 'Display',
      commands: [
        {
          command: 'Cmd+B / Ctrl+B',
          description: 'Toggle sidebar',
          usage: 'Cmd+B (Mac) / Ctrl+B (Win)',
          example: 'Show/hide sidebar',
        },
        {
          command: 'Cmd+Shift+E / Ctrl+Shift+E',
          description: 'Show Explorer',
          usage: 'Cmd+Shift+E (Mac)',
          example: 'File explorer',
        },
        {
          command: 'Cmd+Shift+F / Ctrl+Shift+F',
          description: 'Show Search',
          usage: 'Cmd+Shift+F (Mac)',
          example: 'Search panel',
        },
        {
          command: 'Cmd+Shift+D / Ctrl+Shift+D',
          description: 'Show Debug',
          usage: 'Cmd+Shift+D (Mac)',
          example: 'Debug panel',
        },
        {
          command: 'Cmd+Shift+X / Ctrl+Shift+X',
          description: 'Show Extensions',
          usage: 'Cmd+Shift+X (Mac)',
          example: 'Extensions panel',
        },
        {
          command: 'Cmd+` / Ctrl+`',
          description: 'Toggle terminal',
          usage: 'Cmd+` (Mac) / Ctrl+` (Win)',
          example: 'Show/hide terminal',
        },
      ],
    },
    {
      title: 'File Management',
      commands: [
        {
          command: 'Cmd+N / Ctrl+N',
          description: 'New file',
          usage: 'Cmd+N (Mac) / Ctrl+N (Win)',
          example: 'Create new file',
        },
        {
          command: 'Cmd+O / Ctrl+O',
          description: 'Open file',
          usage: 'Cmd+O (Mac) / Ctrl+O (Win)',
          example: 'Open file dialog',
        },
        {
          command: 'Cmd+S / Ctrl+S',
          description: 'Save file',
          usage: 'Cmd+S (Mac) / Ctrl+S (Win)',
          example: 'Save current file',
        },
        {
          command: 'Cmd+Shift+S / Ctrl+Shift+S',
          description: 'Save As',
          usage: 'Cmd+Shift+S (Mac)',
          example: 'Save with new name',
        },
        {
          command: 'Cmd+W / Ctrl+W',
          description: 'Close file',
          usage: 'Cmd+W (Mac) / Ctrl+W (Win)',
          example: 'Close current tab',
        },
      ],
    },
    {
      title: 'Code Formatting',
      commands: [
        {
          command: 'Shift+Alt+F',
          description: 'Format document',
          usage: 'Shift+Alt+F',
          example: 'Auto-format entire file',
        },
        {
          command: 'Cmd+K Cmd+F / Ctrl+K Ctrl+F',
          description: 'Format selection',
          usage: 'Cmd+K Cmd+F (Mac)',
          example: 'Format selected code',
        },
        {
          command: 'Cmd+] / Ctrl+]',
          description: 'Indent line',
          usage: 'Cmd+] (Mac) / Ctrl+] (Win)',
          example: 'Increase indent',
        },
        {
          command: 'Cmd+[ / Ctrl+[',
          description: 'Outdent line',
          usage: 'Cmd+[ (Mac) / Ctrl+[ (Win)',
          example: 'Decrease indent',
        },
      ],
    },
    {
      title: 'IntelliSense',
      commands: [
        {
          command: 'Ctrl+Space',
          description: 'Trigger suggestions',
          usage: 'Ctrl+Space',
          example: 'Show autocomplete',
        },
        {
          command: 'Cmd+. / Ctrl+.',
          description: 'Quick fix',
          usage: 'Cmd+. (Mac) / Ctrl+. (Win)',
          example: 'Show code actions',
        },
        {
          command: 'Shift+Cmd+Space / Shift+Ctrl+Space',
          description: 'Parameter hints',
          usage: 'Shift+Cmd+Space (Mac)',
          example: 'Show function params',
        },
        {
          command: 'F2',
          description: 'Rename symbol',
          usage: 'F2',
          example: 'Rename variable/function',
        },
        {
          command: 'Cmd+K Cmd+I / Ctrl+K Ctrl+I',
          description: 'Show hover',
          usage: 'Cmd+K Cmd+I (Mac)',
          example: 'Show documentation',
        },
      ],
    },
    {
      title: 'Refactoring',
      commands: [
        {
          command: 'F2',
          description: 'Rename symbol',
          usage: 'F2',
          example: 'Rename across all files',
        },
        {
          command: 'Cmd+. / Ctrl+.',
          description: 'Code actions',
          usage: 'Cmd+. (Mac) / Ctrl+. (Win)',
          example: 'Extract method, import, etc.',
        },
        {
          command: 'Shift+Alt+R',
          description: 'Refactor (extract)',
          usage: 'Shift+Alt+R',
          example: 'Extract to function/variable',
        },
        {
          command: 'Cmd+K Cmd+M / Ctrl+K Ctrl+M',
          description: 'Change file language',
          usage: 'Cmd+K Cmd+M (Mac)',
          example: 'Set language mode',
        },
      ],
    },
    {
      title: 'Source Control (Git)',
      commands: [
        {
          command: 'Cmd+Shift+G / Ctrl+Shift+G',
          description: 'Show Source Control',
          usage: 'Cmd+Shift+G (Mac)',
          example: 'Open Git panel',
        },
        {
          command: 'Cmd+K Cmd+O / Ctrl+K Ctrl+O',
          description: 'Open repository',
          usage: 'Cmd+K Cmd+O (Mac)',
          example: 'Open Git repository',
        },
        {
          command: 'Cmd+Enter / Ctrl+Enter',
          description: 'Commit (in SCM)',
          usage: 'Cmd+Enter (Mac) in Source Control',
          example: 'Commit staged changes',
        },
        {
          command: 'Cmd+K Cmd+C / Ctrl+K Ctrl+C',
          description: 'Stage selected changes',
          usage: 'Cmd+K Cmd+C (Mac)',
          example: 'Stage file changes',
        },
        {
          command: 'Cmd+K Cmd+U / Ctrl+K Ctrl+U',
          description: 'Unstage selected',
          usage: 'Cmd+K Cmd+U (Mac)',
          example: 'Unstage file',
        },
      ],
    },
    {
      title: 'Terminal',
      commands: [
        {
          command: 'Cmd+` / Ctrl+`',
          description: 'Toggle terminal',
          usage: 'Cmd+` (Mac) / Ctrl+` (Win)',
          example: 'Show/hide integrated terminal',
        },
        {
          command: 'Ctrl+Shift+` / Ctrl+Shift+`',
          description: 'Create new terminal',
          usage: 'Ctrl+Shift+`',
          example: 'Open new terminal instance',
        },
        {
          command: 'Cmd+\\ / Ctrl+\\',
          description: 'Split terminal',
          usage: 'Cmd+\\ (Mac) in terminal',
          example: 'Split terminal pane',
        },
        {
          command: 'Cmd+K / Ctrl+K',
          description: 'Clear terminal',
          usage: 'Cmd+K (Mac) in terminal',
          example: 'Clear terminal output',
        },
        {
          command: 'Cmd+↑/↓',
          description: 'Scroll terminal',
          usage: 'Cmd+↑/↓ in terminal',
          example: 'Scroll terminal history',
        },
      ],
    },
    {
      title: 'Debugging',
      commands: [
        {
          command: 'F5',
          description: 'Start/Continue debugging',
          usage: 'F5',
          example: 'Start debug session',
        },
        {
          command: 'Shift+F5',
          description: 'Stop debugging',
          usage: 'Shift+F5',
          example: 'Stop debug session',
        },
        {
          command: 'Cmd+Shift+F5 / Ctrl+Shift+F5',
          description: 'Restart debugging',
          usage: 'Cmd+Shift+F5 (Mac)',
          example: 'Restart debugger',
        },
        {
          command: 'F9',
          description: 'Toggle breakpoint',
          usage: 'F9',
          example: 'Add/remove breakpoint',
        },
        {
          command: 'F10',
          description: 'Step over',
          usage: 'F10',
          example: 'Step to next line',
        },
        {
          command: 'F11',
          description: 'Step into',
          usage: 'F11',
          example: 'Step into function',
        },
        {
          command: 'Shift+F11',
          description: 'Step out',
          usage: 'Shift+F11',
          example: 'Step out of function',
        },
        {
          command: 'Cmd+K Cmd+I / Ctrl+K Ctrl+I',
          description: 'Show hover (debug)',
          usage: 'Cmd+K Cmd+I (Mac)',
          example: 'Inspect variable value',
        },
      ],
    },
    {
      title: 'Advanced Editing',
      commands: [
        {
          command: 'Cmd+U / Ctrl+U',
          description: 'Undo cursor position',
          usage: 'Cmd+U (Mac) / Ctrl+U (Win)',
          example: 'Undo last cursor change',
        },
        {
          command: 'Cmd+K Cmd+L / Ctrl+K Ctrl+L',
          description: 'Fold all',
          usage: 'Cmd+K Cmd+0 (Mac)',
          example: 'Collapse all code blocks',
        },
        {
          command: 'Cmd+K Cmd+J / Ctrl+K Ctrl+J',
          description: 'Unfold all',
          usage: 'Cmd+K Cmd+J (Mac)',
          example: 'Expand all code blocks',
        },
        {
          command: 'Cmd+K Cmd+C / Ctrl+K Ctrl+C',
          description: 'Add line comment',
          usage: 'Cmd+K Cmd+C (Mac)',
          example: 'Comment selected lines',
        },
        {
          command: 'Cmd+K Cmd+U / Ctrl+K Ctrl+U',
          description: 'Remove line comment',
          usage: 'Cmd+K Cmd+U (Mac)',
          example: 'Uncomment lines',
        },
        {
          command: 'Cmd+Shift+\\ / Ctrl+Shift+\\',
          description: 'Jump to matching bracket',
          usage: 'Cmd+Shift+\\ (Mac)',
          example: 'Navigate to pair bracket',
        },
        {
          command: 'Cmd+K Cmd+X / Ctrl+K Ctrl+X',
          description: 'Trim trailing whitespace',
          usage: 'Cmd+K Cmd+X (Mac)',
          example: 'Remove trailing spaces',
        },
      ],
    },
    {
      title: 'Selection',
      commands: [
        {
          command: 'Cmd+L / Ctrl+L',
          description: 'Select current line',
          usage: 'Cmd+L (Mac) / Ctrl+L (Win)',
          example: 'Select entire line',
        },
        {
          command: 'Cmd+Shift+L / Ctrl+Shift+L',
          description: 'Select all occurrences',
          usage: 'Cmd+Shift+L (Mac)',
          example: 'Multi-cursor on all matches',
        },
        {
          command: 'Shift+Alt+→ / Shift+Alt+→',
          description: 'Expand selection',
          usage: 'Shift+Alt+→',
          example: 'Smart expand selection',
        },
        {
          command: 'Shift+Alt+← / Shift+Alt+←',
          description: 'Shrink selection',
          usage: 'Shift+Alt+←',
          example: 'Smart shrink selection',
        },
        {
          command: 'Cmd+Shift+→ / Ctrl+Shift+→',
          description: 'Select to end of line',
          usage: 'Cmd+Shift+→ (Mac)',
          example: 'Select from cursor to line end',
        },
        {
          command: 'Cmd+Shift+↑/↓ / Ctrl+Shift+↑/↓',
          description: 'Column (box) selection',
          usage: 'Cmd+Shift+↑/↓ (Mac)',
          example: 'Select column of text',
        },
      ],
    },
    {
      title: 'Window & Tab Management',
      commands: [
        {
          command: 'Cmd+W / Ctrl+W',
          description: 'Close editor',
          usage: 'Cmd+W (Mac) / Ctrl+W (Win)',
          example: 'Close current tab',
        },
        {
          command: 'Cmd+K W / Ctrl+K W',
          description: 'Close all editors',
          usage: 'Cmd+K W (Mac)',
          example: 'Close all tabs',
        },
        {
          command: 'Cmd+K F / Ctrl+K F',
          description: 'Close folder',
          usage: 'Cmd+K F (Mac)',
          example: 'Close current workspace',
        },
        {
          command: 'Cmd+\\ / Ctrl+\\',
          description: 'Split editor',
          usage: 'Cmd+\\ (Mac) / Ctrl+\\ (Win)',
          example: 'Split editor vertically',
        },
        {
          command: 'Cmd+1/2/3 / Ctrl+1/2/3',
          description: 'Focus editor group',
          usage: 'Cmd+1 (Mac) / Ctrl+1 (Win)',
          example: 'Switch to editor group',
        },
        {
          command: 'Cmd+K Cmd+→/← / Ctrl+K Ctrl+→/←',
          description: 'Focus next/previous group',
          usage: 'Cmd+K Cmd+→ (Mac)',
          example: 'Navigate editor groups',
        },
        {
          command: 'Cmd+Tab / Ctrl+Tab',
          description: 'Switch between tabs',
          usage: 'Cmd+Tab (Mac) / Ctrl+Tab (Win)',
          example: 'Quick tab switcher',
        },
      ],
    },
    {
      title: 'Workspace',
      commands: [
        {
          command: 'Cmd+K Cmd+O / Ctrl+K Ctrl+O',
          description: 'Open folder',
          usage: 'Cmd+K Cmd+O (Mac)',
          example: 'Open folder in workspace',
        },
        {
          command: 'Cmd+K R / Ctrl+K R',
          description: 'Reveal in Finder/Explorer',
          usage: 'Cmd+K R (Mac)',
          example: 'Show file in file manager',
        },
        {
          command: 'Cmd+K P / Ctrl+K P',
          description: 'Copy path',
          usage: 'Cmd+K P (Mac)',
          example: 'Copy file path to clipboard',
        },
        {
          command: 'Cmd+K Cmd+N / Ctrl+K Ctrl+N',
          description: 'New window',
          usage: 'Cmd+K Cmd+N (Mac)',
          example: 'Open new VS Code window',
        },
        {
          command: 'Cmd+Shift+N / Ctrl+Shift+N',
          description: 'New window',
          usage: 'Cmd+Shift+N (Mac)',
          example: 'New VS Code instance',
        },
      ],
    },
    {
      title: 'Extensions',
      commands: [
        {
          command: 'Cmd+Shift+X / Ctrl+Shift+X',
          description: 'Show Extensions',
          usage: 'Cmd+Shift+X (Mac)',
          example: 'Open extensions marketplace',
        },
        {
          command: 'Cmd+K Cmd+V / Ctrl+K Ctrl+V',
          description: 'Open Markdown preview',
          usage: 'Cmd+K V (Mac)',
          example: 'Preview markdown file',
        },
        {
          command: 'Cmd+Shift+V / Ctrl+Shift+V',
          description: 'Open preview to side',
          usage: 'Cmd+Shift+V (Mac)',
          example: 'Markdown preview in split',
        },
      ],
    },
    {
      title: 'Snippets & Emmet',
      commands: [
        {
          command: 'Tab',
          description: 'Expand Emmet abbreviation',
          usage: 'Type abbreviation then Tab',
          example: 'div.container>ul>li*3 then Tab',
        },
        {
          command: 'Cmd+K Cmd+S / Ctrl+K Ctrl+S',
          description: 'Insert snippet',
          usage: 'Cmd+K Cmd+S (Mac)',
          example: 'Browse and insert snippets',
        },
        {
          command: 'Ctrl+Space',
          description: 'Trigger snippet suggestions',
          usage: 'Ctrl+Space after typing prefix',
          example: 'Show available snippets',
        },
        {
          command: 'Tab / Shift+Tab',
          description: 'Navigate snippet placeholders',
          usage: 'Tab (next) / Shift+Tab (previous)',
          example: 'Jump between $1, $2, etc.',
        },
      ],
    },
    {
      title: 'Zen Mode & Focus',
      commands: [
        {
          command: 'Cmd+K Z / Ctrl+K Z',
          description: 'Toggle Zen mode',
          usage: 'Cmd+K Z (Mac)',
          example: 'Distraction-free mode',
        },
        {
          command: 'F11',
          description: 'Toggle fullscreen',
          usage: 'F11',
          example: 'Enter/exit fullscreen',
        },
        {
          command: 'Cmd+J / Ctrl+J',
          description: 'Toggle panel',
          usage: 'Cmd+J (Mac) / Ctrl+J (Win)',
          example: 'Show/hide bottom panel',
        },
        {
          command: 'Cmd+= / Ctrl+=',
          description: 'Zoom in',
          usage: 'Cmd+= (Mac) / Ctrl+= (Win)',
          example: 'Increase editor zoom',
        },
        {
          command: 'Cmd+- / Ctrl+-',
          description: 'Zoom out',
          usage: 'Cmd+- (Mac) / Ctrl+- (Win)',
          example: 'Decrease editor zoom',
        },
      ],
    },
    {
      title: 'Problems & Output',
      commands: [
        {
          command: 'Cmd+Shift+M / Ctrl+Shift+M',
          description: 'Show Problems',
          usage: 'Cmd+Shift+M (Mac)',
          example: 'View errors and warnings',
        },
        {
          command: 'F8',
          description: 'Go to next problem',
          usage: 'F8',
          example: 'Jump to next error/warning',
        },
        {
          command: 'Shift+F8',
          description: 'Go to previous problem',
          usage: 'Shift+F8',
          example: 'Jump to previous error/warning',
        },
        {
          command: 'Cmd+Shift+U / Ctrl+Shift+U',
          description: 'Show Output',
          usage: 'Cmd+Shift+U (Mac)',
          example: 'View output panel',
        },
      ],
    },
    {
      title: 'Settings & Preferences',
      commands: [
        {
          command: 'Cmd+, / Ctrl+,',
          description: 'Open Settings',
          usage: 'Cmd+, (Mac) / Ctrl+, (Win)',
          example: 'Open user settings',
        },
        {
          command: 'Cmd+K Cmd+S / Ctrl+K Ctrl+S',
          description: 'Keyboard Shortcuts',
          usage: 'Cmd+K Cmd+S (Mac)',
          example: 'Edit keyboard shortcuts',
        },
        {
          command: 'Cmd+K Cmd+T / Ctrl+K Ctrl+T',
          description: 'Color theme',
          usage: 'Cmd+K Cmd+T (Mac)',
          example: 'Change color theme',
        },
        {
          command: 'Cmd+Shift+P settings.json',
          description: 'Open settings JSON',
          usage: 'Command Palette > settings.json',
          example: 'Edit raw settings file',
        },
      ],
    },
    {
      title: 'Remote Development',
      commands: [
        {
          command: 'F1 > Remote-SSH',
          description: 'Connect to SSH Host',
          usage: 'Command Palette > Remote-SSH',
          example: 'Connect to remote server',
        },
        {
          command: 'F1 > Remote-Containers',
          description: 'Reopen in Container',
          usage: 'Command Palette > Reopen',
          example: 'Open folder in container',
        },
        {
          command: 'F1 > WSL',
          description: 'Reopen in WSL',
          usage: 'Command Palette > WSL',
          example: 'Open in Windows Subsystem Linux',
        },
      ],
    },
    {
      title: 'Testing',
      commands: [
        {
          command: 'Cmd+; A / Ctrl+; A',
          description: 'Run all tests',
          usage: 'Cmd+; A (Mac)',
          example: 'Execute all tests',
        },
        {
          command: 'Cmd+; C / Ctrl+; C',
          description: 'Run tests in current file',
          usage: 'Cmd+; C (Mac)',
          example: 'Run tests in active file',
        },
        {
          command: 'Cmd+; L / Ctrl+; L',
          description: 'Run last test',
          usage: 'Cmd+; L (Mac)',
          example: 'Rerun previous test',
        },
        {
          command: 'Cmd+; E / Ctrl+; E',
          description: 'Show test output',
          usage: 'Cmd+; E (Mac)',
          example: 'View test results',
        },
      ],
    },
    {
      title: 'Useful Commands (Command Palette)',
      commands: [
        {
          command: 'Reload Window',
          description: 'Restart VS Code',
          usage: 'Cmd+Shift+P > Reload Window',
          example: 'Restart without closing',
        },
        {
          command: 'Developer: Reload Window',
          description: 'Force reload',
          usage: 'Cmd+Shift+P > Developer: Reload',
          example: 'Hard restart',
        },
        {
          command: 'Sort Lines Ascending',
          description: 'Sort selected lines',
          usage: 'Cmd+Shift+P > Sort Lines',
          example: 'Alphabetically sort lines',
        },
        {
          command: 'Transform to Uppercase',
          description: 'Convert to uppercase',
          usage: 'Cmd+Shift+P > Transform',
          example: 'MAKE TEXT UPPERCASE',
        },
        {
          command: 'Transform to Lowercase',
          description: 'Convert to lowercase',
          usage: 'Cmd+Shift+P > Transform',
          example: 'make text lowercase',
        },
        {
          command: 'Duplicate Workspace in New Window',
          description: 'Clone workspace',
          usage: 'Cmd+Shift+P > Duplicate',
          example: 'Open same folder in new window',
        },
        {
          command: 'Join Lines',
          description: 'Merge lines',
          usage: 'Cmd+Shift+P > Join Lines',
          example: 'Combine multiple lines',
        },
      ],
    },
    {
      title: 'Productivity Tips',
      commands: [
        {
          command: 'Cmd+K Cmd+R / Ctrl+K Ctrl+R',
          description: 'Reveal active file in Explorer',
          usage: 'Cmd+K R (Mac)',
          example: 'Locate file in sidebar',
        },
        {
          command: 'Cmd+K Cmd+Q / Ctrl+K Ctrl+Q',
          description: 'Go to last edit location',
          usage: 'Cmd+K Cmd+Q (Mac)',
          example: 'Jump to last edit',
        },
        {
          command: 'Shift+Alt+Click',
          description: 'Column selection',
          usage: 'Shift+Alt+Drag',
          example: 'Select vertical block',
        },
        {
          command: 'Cmd+K V / Ctrl+K V',
          description: 'Open file to side',
          usage: 'Cmd+K V (Mac)',
          example: 'Open in split editor',
        },
        {
          command: 'Cmd+Click / Ctrl+Click',
          description: 'Go to definition',
          usage: 'Cmd+Click (Mac) on symbol',
          example: 'Navigate to declaration',
        },
      ],
    },
  ],
};
