import { FileCode } from 'lucide-react';

export const vimCheatsheet = {
  id: 'vim',
  name: 'Vim',
  description: 'Vim editor commands and shortcuts',
  icon: FileCode,
  colorTheme: 'emerald' as const,
  sections: [
    {
      title: 'Basic Navigation',
      commands: [
        {
          command: 'h j k l',
          description: 'Move cursor left, down, up, right',
          usage: 'h j k l',
          example: 'h - left\nj - down\nk - up\nl - right',
        },
        {
          command: 'w / b',
          description: 'Move forward/backward by word',
          usage: 'w / b',
          example: 'w - next word\nb - previous word',
        },
        {
          command: '0 / $',
          description: 'Move to start/end of line',
          usage: '0 / $',
          example: '0 - start of line\n$ - end of line',
        },
        {
          command: 'gg / G',
          description: 'Go to first/last line',
          usage: 'gg / G',
          example: 'gg - first line\nG - last line',
        },
        {
          command: 'Ctrl+f / Ctrl+b',
          description: 'Page down/up',
          usage: 'Ctrl+f / Ctrl+b',
          example: 'Ctrl+f - page down\nCtrl+b - page up',
        },
      ],
    },
    {
      title: 'Editing',
      commands: [
        {
          command: 'i / a',
          description: 'Insert before/after cursor',
          usage: 'i / a',
          example: 'i - insert mode\na - append mode',
        },
        {
          command: 'I / A',
          description: 'Insert at start/end of line',
          usage: 'I / A',
          example: 'I - insert at line start\nA - append at line end',
        },
        {
          command: 'o / O',
          description: 'Open new line below/above',
          usage: 'o / O',
          example: 'o - new line below\nO - new line above',
        },
        {
          command: 'x / X',
          description: 'Delete character under/before cursor',
          usage: 'x / X',
          example: 'x - delete char\nX - delete before',
        },
        {
          command: 'dd',
          description: 'Delete entire line',
          usage: 'dd',
          example: 'dd - delete line\n3dd - delete 3 lines',
        },
        {
          command: 'yy',
          description: 'Copy (yank) line',
          usage: 'yy',
          example: 'yy - copy line\n3yy - copy 3 lines',
        },
        {
          command: 'p / P',
          description: 'Paste after/before cursor',
          usage: 'p / P',
          example: 'p - paste after\nP - paste before',
        },
        {
          command: 'u / Ctrl+r',
          description: 'Undo/redo',
          usage: 'u / Ctrl+r',
          example: 'u - undo\nCtrl+r - redo',
        },
      ],
    },
    {
      title: 'Visual Mode',
      commands: [
        {
          command: 'v',
          description: 'Enter visual mode',
          usage: 'v',
          example: 'v - character selection',
        },
        {
          command: 'V',
          description: 'Enter line visual mode',
          usage: 'V',
          example: 'V - line selection',
        },
        {
          command: 'Ctrl+v',
          description: 'Enter block visual mode',
          usage: 'Ctrl+v',
          example: 'Ctrl+v - block selection',
        },
        {
          command: 'd',
          description: 'Delete selection',
          usage: 'd (in visual mode)',
          example: 'Select text then d',
        },
        {
          command: 'y',
          description: 'Yank (copy) selection',
          usage: 'y (in visual mode)',
          example: 'Select text then y',
        },
      ],
    },
    {
      title: 'Search & Replace',
      commands: [
        {
          command: '/pattern',
          description: 'Search forward',
          usage: '/pattern',
          example: '/hello\nn - next match\nN - previous match',
        },
        {
          command: '?pattern',
          description: 'Search backward',
          usage: '?pattern',
          example: '?world',
        },
        {
          command: ':s/old/new/',
          description: 'Replace in current line',
          usage: ':s/old/new/[g]',
          example: ':s/foo/bar/g\n# Replace all in line',
        },
        {
          command: ':%s/old/new/g',
          description: 'Replace in entire file',
          usage: ':%s/old/new/[gc]',
          example: ':%s/foo/bar/gc\n# Replace all with confirmation',
        },
        {
          command: '*',
          description: 'Search word under cursor',
          usage: '*',
          example: '* - search forward\n# - search backward',
        },
      ],
    },
    {
      title: 'File Operations',
      commands: [
        {
          command: ':w',
          description: 'Save file',
          usage: ':w [filename]',
          example: ':w\n:w newfile.txt',
        },
        {
          command: ':q',
          description: 'Quit',
          usage: ':q[!]',
          example: ':q - quit\n:q! - force quit',
        },
        {
          command: ':wq',
          description: 'Save and quit',
          usage: ':wq',
          example: ':wq\n:x - same as :wq',
        },
        {
          command: ':e',
          description: 'Edit file',
          usage: ':e [filename]',
          example: ':e file.txt',
        },
        {
          command: ':bn / :bp',
          description: 'Next/previous buffer',
          usage: ':bn / :bp',
          example: ':bn - next buffer\n:bp - previous buffer',
        },
      ],
    },
    {
      title: 'Advanced Commands',
      commands: [
        {
          command: 'ci" / ci(',
          description: 'Change inside quotes/parentheses',
          usage: 'ci[delimiter]',
          example: 'ci" - change inside quotes\nci( - change inside parens',
        },
        {
          command: 'di" / di(',
          description: 'Delete inside quotes/parentheses',
          usage: 'di[delimiter]',
          example: 'di" - delete inside quotes\ndi{ - delete inside braces',
        },
        {
          command: '>>  / <<',
          description: 'Indent/unindent line',
          usage: '>> / <<',
          example: '>> - indent\n<< - unindent\n3>> - indent 3 lines',
        },
        {
          command: '.',
          description: 'Repeat last command',
          usage: '.',
          example: '. - repeat last change',
        },
        {
          command: 'J',
          description: 'Join lines',
          usage: 'J',
          example: 'J - join current with next line',
        },
      ],
    },
    {
      title: 'Marks & Jumps',
      commands: [
        {
          command: 'ma',
          description: 'Set mark a',
          usage: 'm[a-z]',
          example: 'ma - set mark a\n\'a - jump to mark a',
        },
        {
          command: 'Ctrl+o / Ctrl+i',
          description: 'Jump back/forward',
          usage: 'Ctrl+o / Ctrl+i',
          example: 'Ctrl+o - older position\nCtrl+i - newer position',
        },
      ],
    },
  ],
};
