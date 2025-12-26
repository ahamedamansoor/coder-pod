import { FileCode } from 'lucide-react';

export const vimCheatsheet = {
  id: 'vim',
  name: 'Vim',
  description: 'Master Vim editor from basics to advanced features (Vim 8-9, Neovim)',
  icon: FileCode,
  colorTheme: 'emerald' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Vim',
      commands: [
        {
          command: 'Vim Installation & Setup',
          description: 'Install Vim and verify setup',
          usage: 'vim --version',
          example: '# Install Vim\n# Ubuntu/Debian: sudo apt install vim\n# macOS: brew install vim\n# Windows: Download from vim.org\n\n# Verify installation\nvim --version\n\n# Check Vim features\nvim --version | grep -E "(huge|normal|small)"',
        },
        {
          command: 'Vim Modes Overview',
          description: 'Understanding Vim\'s modal editing',
          usage: 'Normal, Insert, Visual, Command modes',
          example: '# Normal Mode (default)\n# Navigation and commands\n# Press ESC to return to normal mode\n\n# Insert Mode\n# Text editing\n# Press i, a, o, O from normal mode\n\n# Visual Mode\n# Text selection\n# Press v, V, Ctrl+v from normal mode\n\n# Command Mode\n# File operations\n# Press : from normal mode',
        },
        {
          command: 'Basic File Operations',
          description: 'Open, save, and quit files',
          usage: ':e, :w, :q, :wq',
          example: '# Open file\nvim filename.txt\nvim file.js file.css  # Multiple files\n\n# Save and quit\n:w              # Save\n:w newname.txt   # Save as\n:q              # Quit\n:q!             # Force quit\n:wq             # Save and quit\n:x              # Same as :wq',
        },
        {
          command: 'Vim Help System',
          description: 'Getting help with Vim commands',
          usage: ':help [command]',
          example: '# General help\n:help\n\n# Help for specific command\n:help i\n:help visual-mode\n:help :w\n\n# Search help\n:helpgrep pattern\n:helpgrep navigation\n\n# Quick reference\n:h  # Short for :help',
        },
      ],
    },
    {
      title: 'Basic Navigation',
      commands: [
        {
          command: 'Cursor Movement',
          description: 'Move cursor within file',
          usage: 'h j k l',
          example: 'h - move left\nj - move down\nk - move up\nl - move right\n\n# Movement counts\n3h - move 3 characters left\n5j - move 5 lines down',
        },
        {
          command: 'Word Movement',
          description: 'Navigate by words and sentences',
          usage: 'w b e ge',
          example: 'w - move to next word start\nb - move to previous word start\ne - move to next word end\nge - move to previous word end\n\n# Word movement counts\n3w - move 3 words forward\n2b - move 2 words backward',
        },
        {
          command: 'Line Navigation',
          description: 'Move within and between lines',
          usage: '0 ^ $',
          example: '0 - move to line start\n^ - move to first non-blank character\n$ - move to line end\ng_ - move to last non-blank character\n\n# Go to specific line\n:50 - go to line 50\n50G - go to line 50',
        },
        {
          command: 'Screen Navigation',
          description: 'Navigate within visible screen',
          usage: 'H M L',
          example: 'H - move to top of screen\nM - move to middle of screen\nL - move to bottom of screen\n\n# Scroll without moving cursor\nCtrl+e - scroll down one line\nCtrl+y - scroll up one line',
        },
        {
          command: 'File Navigation',
          description: 'Jump to beginning/end of file',
          usage: 'gg G',
          example: 'gg - go to first line\nG - go to last line\n1G - go to first line (same as gg)\n\n# Go to percentage of file\n:50% - go to 50% of file',
        },
        {
          command: 'Page Navigation',
          description: 'Navigate by pages and screens',
          usage: 'Ctrl+f Ctrl+b',
          example: 'Ctrl+f - page forward (down)\nCtrl+b - page backward (up)\nCtrl+d - scroll down half page\nCtrl+u - scroll up half page',
        },
      ],
    },
    {
      title: 'Basic Editing',
      commands: [
        {
          command: 'Insert Mode Commands',
          description: 'Enter insert mode at different positions',
          usage: 'i a I A o O',
          example: 'i - insert before cursor\na - append after cursor\nI - insert at line start\nA - append at line end\no - open new line below\nO - open new line above',
        },
        {
          command: 'Delete Commands',
          description: 'Delete text in various ways',
          usage: 'x X dw dd',
          example: 'x - delete character under cursor\nX - delete character before cursor\ndw - delete word\ndd - delete line\n3dd - delete 3 lines\nd$ - delete to end of line\nd0 - delete to start of line',
        },
        {
          command: 'Change Commands',
          description: 'Change text (delete and enter insert mode)',
          usage: 'c cw cc C',
          example: 'cw - change word\ncc - change line\nC - change to end of line\nc$ - change to end of line\nc0 - change to start of line\n3cw - change 3 words',
        },
        {
          command: 'Copy and Paste',
          description: 'Yank and put text',
          usage: 'y p P yy',
          example: 'yy - yank (copy) line\n3yy - yank 3 lines\nyw - yank word\ny$ - yank to end of line\n\np - paste after cursor\nP - paste before cursor\n3p - paste 3 times',
        },
        {
          command: 'Undo and Redo',
          description: 'Revert and repeat changes',
          usage: 'u Ctrl+r .',
          example: 'u - undo last change\n3u - undo last 3 changes\nCtrl+r - redo last undone change\n. - repeat last change\n3. - repeat last change 3 times',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Visual Mode Selection',
      commands: [
        {
          command: 'Character Visual Mode',
          description: 'Select text character by character',
          usage: 'v',
          example: 'v - enter character visual mode\n# Move with navigation keys to select\n# d - delete selection\n# y - yank (copy) selection\n# c - change selection\n# > - indent selection\n# < - unindent selection',
        },
        {
          command: 'Line Visual Mode',
          description: 'Select entire lines',
          usage: 'V',
          example: 'V - enter line visual mode\n# Move up/down to select lines\n# Works with same commands as v mode\n# d - delete selected lines\n# y - yank selected lines\n# > - indent selected lines',
        },
        {
          command: 'Block Visual Mode',
          description: 'Select rectangular blocks of text',
          usage: 'Ctrl+v',
          example: 'Ctrl+v - enter block visual mode\n# Select rectangular block\n# I - insert at start of each line in block\n# A - append at end of each line in block\n# c - change block\n# d - delete block',
        },
        {
          command: 'Visual Mode Operations',
          description: 'Actions in visual mode',
          usage: 'd y c > <',
          example: '# After selecting text in visual mode:\nd - delete selection\ny - yank (copy) selection\nc - change selection\n> - indent selection\n< - unindent selection\n~ - toggle case\nJ - join selected lines',
        },
      ],
    },
    {
      title: 'Search and Replace',
      commands: [
        {
          command: 'Basic Search',
          description: 'Search for text patterns',
          usage: '/pattern ?pattern',
          example: '/hello - search forward for "hello"\n?world - search backward for "world"\n\n# Navigate search results\nn - next match\nN - previous match\n\n# Case sensitivity\n/hello\\c - case insensitive\n/hello\\C - case sensitive',
        },
        {
          command: 'Current Word Search',
          description: 'Search for word under cursor',
          usage: '* #',
          example: '* - search forward for word under cursor\n# - search backward for word under cursor\n\ng* - search forward for partial word\ng# - search backward for partial word',
        },
        {
          command: 'Basic Replace',
          description: 'Replace text in current line',
          usage: ':s/old/new/[flags]',
          example: ':s/foo/bar/ - replace first occurrence\n:s/foo/bar/g - replace all in line\n:s/foo/bar/i - case insensitive\n:s/foo/bar/gc - replace with confirmation',
        },
        {
          command: 'Global Replace',
          description: 'Replace text in entire file',
          usage: ':%s/old/new/[flags]',
          example: ':%s/foo/bar/g - replace all in file\n:%s/foo/bar/gc - replace all with confirmation\n:%s/foo/bar/gi - case insensitive\n:%s/\\s\\+$//g - remove trailing spaces',
        },
        {
          command: 'Range Replace',
          description: 'Replace text in specific range',
          usage: ':start,end s/old/new/[flags]',
          example: ':10,20s/foo/bar/g - replace lines 10-20\n:.,$s/foo/bar/g - from current to end\n:\'<,\'>s/foo/bar/g - in visual selection\n:%s/foo/bar/g | %s/bar/baz/g - chain commands',
        },
        {
          command: 'Search Options',
          description: 'Configure search behavior',
          usage: ':set [option]',
          example: ':set ignorecase - ignore case in search\n:set smartcase - smart case sensitivity\n:set hlsearch - highlight search results\n:set incsearch - incremental search\n:set nohlsearch - remove highlighting\n:noh - temporary remove highlighting',
        },
      ],
    },
    {
      title: 'Text Objects',
      commands: [
        {
          command: 'Word Text Objects',
          description: 'Operate on words',
          usage: 'c[i]w d[i]w y[i]w',
          example: 'ciw - change inner word\ncaw - change a word\ndiw - delete inner word\ndaw - delete a word\nyiw - yank inner word\nyaw - yank a word',
        },
        {
          command: 'Sentence Text Objects',
          description: 'Operate on sentences',
          usage: 'cis cas dis das',
          example: 'cis - change inner sentence\ncas - change a sentence\ndis - delete inner sentence\ndas - delete a sentence\nyis - yank inner sentence\nyas - yank a sentence',
        },
        {
          command: 'Paragraph Text Objects',
          description: 'Operate on paragraphs',
          usage: 'cip cap dip dap',
          example: 'cip - change inner paragraph\ncap - change a paragraph\ndip - delete inner paragraph\ndap - delete a paragraph\nyip - yank inner paragraph\nyap - yank a paragraph',
        },
        {
          command: 'Delimited Text Objects',
          description: 'Operate within quotes, brackets, etc.',
          usage: 'ci" di" yi" ca" da" ya"',
          example: 'ci" - change inside quotes\ndi" - delete inside quotes\nyi" - yank inside quotes\nca" - change a quote (including quotes)\nda" - delete a quote\nya" - yank a quote\n\n# Works with: " \' ( ) [ ] { } < > `',
        },
        {
          command: 'Tag Text Objects',
          description: 'Operate within HTML/XML tags',
          usage: 'cit dat dit yit',
          example: 'cit - change inner tag\ndat - delete a tag\ndit - delete inner tag\nyit - yank inner tag\n\n# Example HTML: <div>content</div>\n# With cursor on "content":\n# cit deletes "content" and enters insert mode',
        },
      ],
    },
    {
      title: 'Marks and Jumps',
      commands: [
        {
          command: 'Local Marks',
          description: 'Set and jump to marks within file',
          usage: 'm[a-z] \'[a-z]',
          example: 'ma - set mark a\nmb - set mark b\n\'a - jump to mark a (line start)\n`a - jump to mark a (exact position)\n\n# Marks a-z are local to buffer',
        },
        {
          command: 'Global Marks',
          description: 'Set marks accessible across files',
          usage: 'm[A-Z] \'[A-Z]',
          example: 'mA - set global mark A\n\'A - jump to global mark A\n\n# Marks A-Z are global across files\n# Can jump between different files',
        },
        {
          command: 'Special Marks',
          description: 'Built-in marks for navigation',
          usage: '\'. \'\' \'^ \'$',
          example: '\'. - jump to last modified line\n\'\' - jump to previous position\n\'^ - jump to last insert position\n\'$ - jump to last line in buffer\n\'0 - jump to last exited file',
        },
        {
          command: 'Jump List Navigation',
          description: 'Navigate through jump history',
          usage: 'Ctrl+i Ctrl+o',
          example: 'Ctrl+i - jump to newer position\nCtrl+o - jump to older position\n:jumps - show jump list\n:clearjumps - clear jump list',
        },
        {
          command: 'Change List Navigation',
          description: 'Navigate through modification history',
          usage: 'g; g,',
          example: 'g; - go to older change position\ng, - go to newer change position\n:changes - show change list',
        },
      ],
    },
    {
      title: 'Windows and Tabs',
      commands: [
        {
          command: 'Window Splitting',
          description: 'Split window horizontally and vertically',
          usage: ':split :vsplit',
          example: ':split - split horizontally\n:vsplit - split vertically\n:split filename - open file in new split\n:vsplit filename - open file in vertical split\n\n# Short forms\n:sp - split horizontally\n:vs - split vertically',
        },
        {
          command: 'Window Navigation',
          description: 'Move between windows',
          usage: 'Ctrl+w [hjkl]',
          example: 'Ctrl+w h - move to left window\nCtrl+w j - move to below window\nCtrl+w k - move to above window\nCtrl+w l - move to right window\n\n# Cycle through windows\nCtrl+w w - cycle to next window\nCtrl+w W - cycle to previous window',
        },
        {
          command: 'Window Resizing',
          description: 'Resize windows',
          usage: 'Ctrl+w [+ - > <]',
          example: 'Ctrl+w + - increase height\nCtrl+w - - decrease height\nCtrl+w > - increase width\nCtrl+w < - decrease width\n\n# Equalize windows\nCtrl+w = - make all windows equal size',
        },
        {
          command: 'Window Operations',
          description: 'Close and move windows',
          usage: ':close :only',
          example: ':close - close current window\n:only - close all other windows\n:hide - hide current window\n\n# Move windows\nCtrl+w H - move window to left\nCtrl+w J - move window to bottom\nCtrl+w K - move window to top\nCtrl+w L - move window to right',
        },
        {
          command: 'Tab Management',
          description: 'Work with tabs',
          usage: ':tabnew :tabclose :tabnext',
          example: ':tabnew - create new tab\n:tabnew filename - open file in new tab\n:tabclose - close current tab\n:tabnext - go to next tab\n:tabprev - go to previous tab\n:tabfirst - go to first tab\n:tablast - go to last tab\n\n# Tab navigation\ngt - go to next tab\ngT - go to previous tab\n3gt - go to tab 3',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Navigation',
      commands: [
        {
          command: 'Advanced Word Movement',
          description: 'Navigate with more word options',
          usage: 'W B E gE',
          example: 'W - move to next WORD (big word)\nB - move to previous WORD\nE - move to next WORD end\ngE - move to previous WORD end\n\n# WORD includes punctuation and spaces',
        },
        {
          command: 'Sentence and Paragraph Movement',
          description: 'Navigate by sentences and paragraphs',
          usage: '( ) { }',
          example: '( - move to previous sentence\n) - move to next sentence\n{ - move to previous paragraph\n} - move to next paragraph\n\n# Movement counts\n3) - move 3 sentences forward\n2{ - move 2 paragraphs backward',
        },
        {
          command: 'Matching Navigation',
          description: 'Jump to matching characters',
          usage: '%',
          example: '% - jump to matching pair\n# Works with: ( ), [ ], { }, < >\n# Also works with #if/#endif in code\n\n# Go to specific match type\n[{ - jump to previous unmatched {\n]} - jump to next unmatched }\n[( - jump to previous unmatched ([\n]) - jump to next unmatched )',
        },
        {
          command: 'Scrolling Commands',
          description: 'Advanced scrolling options',
          usage: 'zz zt zb',
          example: 'zz - center cursor on screen\nzt - move cursor to top of screen\nzb - move cursor to bottom of screen\n\n# Scroll keeping cursor\nCtrl+e - scroll down, cursor stays\nCtrl+y - scroll up, cursor stays\nCtrl+d - scroll down half page\nCtrl+u - scroll up half page',
        },
        {
          command: 'Column Movement',
          description: 'Move to specific columns',
          usage: '|',
          example: '| - move to column 1\n10| - move to column 10\n\n# Useful for alignment\ng_ - move to last non-blank character',
        },
      ],
    },
    {
      title: 'Advanced Editing',
      commands: [
        {
          command: 'Advanced Delete Commands',
          description: 'Delete with more precision',
          usage: 'D J',
          example: 'D - delete to end of line (same as d$)\nJ - join current line with next\n3J - join 3 lines\n\ngJ - join lines without spaces\n\n# Delete with motion\ndgg - delete to start of file\ndG - delete to end of file\nd} - delete to next paragraph',
        },
        {
          command: 'Advanced Change Commands',
          description: 'Change text with advanced options',
          usage: 'S R',
          example: 'S - change entire line (same as cc)\nR - replace mode (overwrites characters)\n\n# Change with motion\ncgg - change to start of file\ncG - change to end of file\nc} - change to next paragraph',
        },
        {
          command: 'Advanced Copy Commands',
          description: 'Yank with more options',
          usage: 'Y',
          example: 'Y - yank entire line (same as yy)\nyG - yank to end of file\nygg - yank to start of file\n\n# Yank with motion\ny} - yank to next paragraph\nyw - yank word\ny$ - yank to end of line',
        },
        {
          command: 'Advanced Paste Commands',
          description: 'Paste with different behaviors',
          usage: 'gp gP',
          example: 'p - paste after cursor\nP - paste before cursor\ngp - paste after cursor and move cursor after pasted text\ngP - paste before cursor and move cursor after pasted text\n\n# Paste from specific registers\n"ap - paste from register a\n"0p - paste from last yank\n"+p - paste from system clipboard',
        },
        {
          command: 'Repetition and Counting',
          description: 'Apply commands with counts',
          usage: '[count][command]',
          example: '3x - delete 3 characters\n5dd - delete 5 lines\n2yy - yank 2 lines\n10j - move down 10 lines\n3w - move 3 words forward\n\n# Combine with visual mode\nV3j - select 4 lines total\n3dd - delete 3 lines',
        },
      ],
    },
    {
      title: 'Registers',
      commands: [
        {
          command: 'Named Registers',
          description: 'Use named registers for copying and pasting',
          usage: '"[a-z]y "[a-z]p',
          example: '"ayy - yank line to register a\n"ap - paste from register a\n"byy - yank line to register b\n"bp - paste from register b\n\n# Registers a-z are user-defined',
        },
        {
          command: 'System Registers',
          description: 'Access system clipboard',
          usage: '"+y "+p "*y "*p',
          example: '"+yy - yank line to system clipboard\n"+p - paste from system clipboard\n"*yy - yank to primary selection (X11)\n"*p - paste from primary selection (X11)\n\n# Works with GUI Vim and gvim',
        },
        {
          command: 'Numbered Registers',
          description: 'Access numbered registers',
          usage: '"[0-9]p',
          example: '"0p - paste last yanked text\n"1p - paste last deleted text\n"2p - paste second last deleted text\n...\n"9p - paste ninth last deleted text\n\n# Register 0 always holds last yank\n# Registers 1-9 hold last 9 deletes',
        },
        {
          command: 'Special Registers',
          description: 'Access special purpose registers',
          usage: '". "% ": "#',
          example: '". - last inserted text\n"% - current file name\n": - last command line\n"# - alternate file name\n"/ - last search pattern\n\n# View all registers\n:registers\n:reg',
        },
        {
          command: 'Register Operations',
          description: 'Manipulate registers',
          usage: ':let @a = "text"',
          example: ':let @a = "hello world" - set register a\n:let @+ = @a - copy register a to clipboard\n:echo @a - show register a contents\n\n# Append to register\n"Ayy - append line to register a',
        },
      ],
    },
    {
      title: 'Macros and Recording',
      commands: [
        {
          command: 'Recording Macros',
          description: 'Record and play back command sequences',
          usage: 'q[a-z] q',
          example: 'qa - start recording to register a\n# Perform your commands here\nq - stop recording\n\n# Play back macro\n@a - play macro from register a\n@@ - repeat last macro',
        },
        {
          command: 'Advanced Macro Operations',
          description: 'Work with macros efficiently',
          usage: '[count]@a',
          example: '10@a - play macro a 10 times\n\n# Append to macro\nqA - append to macro a\n\n# Edit macro\n:let @a = "commands" - set macro content\n:put @a - paste macro content for editing',
        },
        {
          command: 'Recursive Macros',
          description: 'Create recursive macros',
          usage: '@a in macro definition',
          example: '# Example: recursive find and replace\nqa\n/word<Enter>\ncwreplacement<Esc>nq\n\n# Run recursively\n@a - will continue until no more matches',
        },
        {
          command: 'Macro Registers',
          description: 'View and manage recorded macros',
          usage: ':register :let',
          example: ':reg a - show macro in register a\n:let @a = "" - clear macro a\n\n# Save macro to file\n:let @a = @% - put filename in register a\n"ap - paste macro for editing',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Advanced Search and Patterns',
      commands: [
        {
          command: 'Regular Expression Patterns',
          description: 'Use regex in search and replace',
          usage: '/pattern \\v \\V',
          example: '\\v - very magic mode (all special chars)\n\\V - very nomagic mode (all literal chars)\n\n# Regex examples\n/\\v(hello|world) - search hello or world\n/\\v\\d+ - search numbers\n/\\v[a-z]+ - search lowercase letters\n/\\v\\s\\+$ - search trailing spaces',
        },
        {
          command: 'Advanced Search Patterns',
          description: 'Complex search patterns',
          usage: '/\\c \\C \\zs \\ze',
          example: '/hello\\c - case insensitive search\n/hello\\C - case sensitive search\n\n# Start and end of match\n/hello\\zsworld - match ending with "world"\n/hello\\zeworld - match starting with "hello"\n\n# Word boundaries\n/\\v<hello> - whole word "hello"',
        },
        {
          command: 'Search in Multiple Files',
          description: 'Search across multiple buffers',
          usage: ':bufdo :argdo',
          example: ':bufdo /pattern - search in all buffers\n:argdo /pattern - search in argument list\n\n# Replace in multiple files\n:bufdo %s/old/new/g | update\n:argdo %s/old/new/g | update',
        },
        {
          command: 'Search and Replace with Expressions',
          description: 'Use expressions in replacement',
          usage: ':s/old/\\=expression/',
          example: ':s/\\d\\+/\\=submatch(0) + 1/g - increment numbers\n:s/.*/\\=toupper(submatch(0))/g - uppercase\n:s/.*/\\=line(".") . ": " . submatch(0)/g - add line numbers',
        },
      ],
    },
    {
      title: 'Advanced Configuration',
      commands: [
        {
          command: 'Vimrc Configuration',
          description: 'Configure Vim with .vimrc file',
          usage: '~/.vimrc file',
          example: '" Basic configuration\nset number              " Show line numbers\nset relativenumber      " Relative line numbers\nset tabstop=4           " Tab width\nset shiftwidth=4        " Indent width\nset expandtab           " Use spaces instead of tabs\nset autoindent          " Auto indent\nset smartindent         " Smart indent\nset hlsearch            " Highlight search\nset incsearch           " Incremental search\nset ignorecase         " Ignore case\nset smartcase          " Smart case',
        },
        {
          command: 'Color Schemes and Appearance',
          description: 'Customize Vim appearance',
          usage: ':colorscheme :highlight',
          example: ':colorscheme desert - set color scheme\n:colorscheme darkblue - set dark theme\n\n# Custom highlighting\n:highlight Search cterm=reverse ctermfg=black ctermbg=yellow\n:highlight Comment ctermfg=blue\n\n# Check available schemes\n:colorscheme <Tab>',
        },
        {
          command: 'Key Mappings',
          description: 'Create custom key mappings',
          usage: ':map :noremap',
          example: ':map <F2> :w<Enter> - F2 saves file\n:noremap <C-s> :w<Enter> - Ctrl+s saves\n\n# Mode-specific mappings\n:nmap <leader>w :w<Enter> - Normal mode\n:imap <C-s> <Esc>:w<Enter>a - Insert mode\n:vmap <C-c> "+y - Visual mode\n\n# Leader key\nlet mapleader = ","',
        },
        {
          command: 'Autocommands',
          description: 'Automatic commands for events',
          usage: ':autocmd',
          example: ':autocmd BufWritePost *.py !python %\n:autocmd FileType python setlocal expandtab\n:autocmd BufRead *.md setlocal wrap\n:autocmd VimLeave * !rm /tmp/vim-temp-*\n\n# Groups\naugroup MyGroup\n  autocmd!\n  autocmd FileType python setlocal expandtab\naugroup END',
        },
        {
          command: 'Status Line Configuration',
          description: 'Customize status line',
          usage: 'set statusline',
          example: 'set statusline=%f         " File name\nset statusline+=%m        " Modified flag\nset statusline+=%r        " Read-only flag\nset statusline+=%h        " Help flag\nset statusline+=%w        " Preview flag\nset statusline+=%=        " Right align\nset statusline+=%y        " File type\nset statusline+=\\ %l/%L  " Line/total lines\nset statusline+=\\ %c     " Column',
        },
      ],
    },
    {
      title: 'Plugins and Extensions',
      commands: [
        {
          command: 'Plugin Management',
          description: 'Install and manage Vim plugins',
          usage: 'Plugin managers: vim-plug, Vundle, Packer',
          example: '# Using vim-plug\ncurl -fLo ~/.vim/autoload/plug.vim --create-dirs \\\n  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n\n" In .vimrc\ncall plug#begin()\nPlug \'tpope/vim-surround\'\nPlug \'scrooloose/nerdtree\'\ncall plug#end()\n\n" Install plugins\n:PlugInstall',
        },
        {
          command: 'Essential Plugins',
          description: 'Popular and useful Vim plugins',
          usage: 'Plugin recommendations',
          example: '" File navigation\nPlug \'scrooloose/nerdtree\'\nPlug \'ctrlpvim/ctrlp.vim\'\n\n" Editing enhancements\nPlug \'tpope/vim-surround\'\nPlug \'tpope/vim-commentary\'\nPlug \'Raimondi/delimitMate\'\n\n" Git integration\nPlug \'tpope/vim-fugitive\'\nPlug \'airblade/vim-gitgutter\'\n\n" Language support\nPlug \'sheerun/vim-polyglot\'\nPlug \'neoclide/coc.nvim\'',
        },
        {
          command: 'Plugin Configuration',
          description: 'Configure plugin behavior',
          usage: 'Plugin-specific settings',
          example: '" NERDTree configuration\nlet g:NERDTreeShowHidden = 1\nnnoremap <C-n> :NERDTreeToggle<Enter>\n\n" CtrlP configuration\nlet g:ctrlp_map = \'<c-p>\'\nlet g:ctrlp_working_path_mode = \'r\'\n\n" CoC configuration\nnmap <silent> gd <Plug>(coc-definition)\nnmap <silent> gr <Plug>(coc-references)',
        },
      ],
    },
    {
      title: 'Advanced File Operations',
      commands: [
        {
          command: 'File Comparison',
          description: 'Compare files and directories',
          usage: ':diffsplit :diffpatch',
          example: ':diffsplit file.txt - open file in diff mode\n:diffpatch patchfile - apply patch and show diff\n\n# Diff navigation\n[c - go to previous change\n]c - go to next change\ndo - obtain change (from other window)\ndp - put change (to other window)\n\n# Update diff\ndiffupdate',
        },
        {
          command: 'File Encryption',
          description: 'Encrypt and decrypt files',
          usage: ':X :set key=',
          example: ':X - set encryption key\n:set key=mypassword - set encryption\n\n# Encryption methods\n:set cm=blowfish - Blowfish encryption\n:set cm=blowfish2 - Blowfish2 encryption\n\n# Remove encryption\n:set key= - remove encryption key',
        },
        {
          command: 'File Recovery',
          description: 'Recover files after crashes',
          usage: ':recover :swapfile',
          example: ':recover - recover from swap file\n:recover file.txt - recover specific file\n\n# Swap file management\n:set swapfile - enable swap files\n:set noswapfile - disable swap files\n:set directory=/tmp - set swap file location\n\n# View swap files\n:swapname - show current swap file name',
        },
        {
          command: 'File Information',
          description: 'Get file and buffer information',
          usage: ':file :buffers',
          example: ':file - show current file info\n:file newname.txt - rename file\n\n:buffers - list all buffers\n:ls - list buffers (short form)\n\n# Buffer operations\n:bnext - next buffer\n:bprev - previous buffer\n:bfirst - first buffer\n:blast - last buffer',
        },
      ],
    },
    {
      title: 'Programming Features',
      commands: [
        {
          command: 'Code Folding',
          description: 'Fold and unfold code sections',
          usage: 'zf zo zc zd',
          example: 'zf - create fold\nzo - open fold\nzc - close fold\nzd - delete fold\n\n# Folding methods\n:set foldmethod=manual - manual folding\n:set foldmethod=indent - indent folding\n:set foldmethod=syntax - syntax folding\n:set foldmethod=marker - marker folding\n\n# Fold navigation\nzj - move to next fold\nzk - move to previous fold\n[z - start of current fold\n]z - end of current fold',
        },
        {
          command: 'Auto-completion',
          description: 'Use Vim\'s built-in completion',
          usage: 'Ctrl+n Ctrl+p',
          example: 'Ctrl+n - next completion match\nCtrl+p - previous completion match\nCtrl+x - completion mode\n\n# Completion modes\nCtrl+x Ctrl+l - line completion\nCtrl+x Ctrl+f - file completion\nCtrl+x Ctrl+] - tag completion\nCtrl+x Ctrl+d - definition completion\nCtrl+x Ctrl+v - Vim expression completion',
        },
        {
          command: 'Tag Navigation',
          description: 'Navigate using ctags',
          usage: 'Ctrl+] Ctrl+t',
          example: 'Ctrl+] - jump to tag definition\nCtrl+t - jump back from tag\n\n# Tag commands\n:tag function_name - jump to tag\n:pop - go back in tag stack\n:tags - show tag stack\n\n# Generate tags\n!ctags -R . - generate tags for current directory',
        },
        {
          command: 'Syntax Highlighting',
          description: 'Configure syntax highlighting',
          usage: ':syntax :syntax on',
          example: ':syntax on - enable syntax highlighting\n:syntax off - disable syntax highlighting\n:syntax enable - enable syntax (auto)\n\n# Syntax checking\n:syntax clear - clear syntax rules\n:syntax sync fromstart - sync from start\n:syntax sync minlines=50 - sync after 50 lines',
        },
        {
          command: 'Indentation and Formatting',
          description: 'Format and indent code',
          usage: '= gg=G',
          example: '= - indent selected lines\n== - indent current line\ngg=G - indent entire file\n\n# Auto-format\n:format - format selected text\n:retab - convert tabs to spaces\n\n# Indent settings\n:set autoindent - auto indent\n:set smartindent - smart indent\n:set cindent - C-style indent\n:set indentexpr= - custom indent expression',
        },
      ],
    },
    {
      title: 'Advanced Vim Features',
      commands: [
        {
          command: 'Session Management',
          description: 'Save and restore Vim sessions',
          usage: ':mksession :source',
          example: ':mksession - save session\n:mksession mysession.vim - save named session\n\n:source mysession.vim - restore session\n\n# Session options\n:set sessionoptions=buffers,curdir,folds\n:set ssop=buffers,curdir,folds,winpos',
        },
        {
          command: 'Viewports and Splits',
          description: 'Advanced window management',
          usage: ':split :vsplit',
          example: ':split - horizontal split\n:vsplit - vertical split\n\n# Split with file\n:split file.txt - open file in split\n:vsplit file.txt - open file in vertical split\n\n# Split commands\n:only - close all other windows\n:hide - hide current window\n:all - show all windows',
        },
        {
          command: 'Command Line Editing',
          description: 'Edit command line efficiently',
          usage: 'Ctrl+h Ctrl+w',
          example: 'Ctrl+h - delete character left\nCtrl+w - delete word left\nCtrl+u - delete to start\nCtrl+v - insert special character\n\n# History\n:up - previous command\n:down - next command\n:history - show command history',
        },
        {
          command: 'External Commands',
          description: 'Run external commands from Vim',
          usage: ':! :r !',
          example: ':!ls - run shell command\n:!python % - run current file with Python\n\n:r !date - insert date\n:r !ls - insert file listing\n\n# Filter through external command\n:%!sort - sort entire file\n:\'<,\'>!sort - sort selected lines',
        },
        {
          command: 'Vim Scripting',
          description: 'Write Vim scripts and functions',
          usage: ':function :endfunction',
          example: ':function HelloWorld()\n:  echo "Hello, World!"\n:endfunction\n\n:call HelloWorld() - call function\n\n# Scripting examples\n:let x = 10 - set variable\n:echo x - show variable\n:if x > 5\n:  echo "Big"\n:endif',
        },
      ],
    },
    {
      title: 'Neovim and Modern Vim',
      commands: [
        {
          command: 'Neovim Features',
          description: 'Modern Vim features and Neovim',
          usage: 'Neovim-specific commands',
          example: '# Neovim installation\n# macOS: brew install neovim\n# Ubuntu: sudo apt install neovim\n\n# Neovim configuration\n~/.config/nvim/init.vim - main config\n~/.local/share/nvim/site/pack - plugins\n\n# Neovim features\n:terminal - built-in terminal\n:lua - execute Lua code\n:checkhealth - check system health',
        },
        {
          command: 'Modern Plugin Managers',
          description: 'Contemporary plugin management',
          usage: 'Packer, lazy.nvim',
          example: '# Using Packer (Neovim)\ngit clone --depth 1 https://github.com/wbthomason/packer.nvim \\\n  ~/.local/share/nvim/site/pack/packer/start/packer.nvim\n\n" In init.vim\nlua require(\'packer\').startup(function()\n  use \'wbthomason/packer.nvim\'\n  use \'nvim-treesitter/nvim-treesitter\'\nend)',
        },
        {
          command: 'LSP Integration',
          description: 'Language Server Protocol support',
          usage: 'LSP configuration',
          example: '# Using nvim-lspconfig\nlua require(\'lspconfig\').pyright.setup{}\n\n# LSP commands\n:lua vim.lsp.buf.definition() - go to definition\n:lua vim.lsp.buf.references() - find references\n:lua vim.lsp.buf.hover() - show documentation\n\n# LSP key mappings\nnnoremap gd :lua vim.lsp.buf.definition()<Enter>',
        },
        {
          command: 'Treesitter Integration',
          description: 'Syntax highlighting with Treesitter',
          usage: 'nvim-treesitter',
          example: '# Install Treesitter\n:PackerInstall nvim-treesitter\n\n# Treesitter commands\n:TSInstall python - install Python parser\n:TSInstallInfo - show installed parsers\n:TSBufEnable highlight - enable highlighting\n\n# Treesitter features\n# Better syntax highlighting\n# Code navigation\n# Structural selection',
        },
        {
          command: 'Modern Vim Ecosystem',
          description: 'Current Vim ecosystem and tools',
          usage: 'Modern Vim tools',
          example: '# Modern Vim distributions\n# SpaceVim, LunarVim, NVChad\n\n# Development tools\n# fzf.vim - fuzzy finder\n# vim-test - test runner\n# vim-gitgutter - git diff\n# vim-airline - enhanced status line\n\n# Configuration management\n# dotfiles management\n# cross-platform configuration',
        },
      ],
    },
    {
      title: 'Performance and Optimization',
      commands: [
        {
          command: 'Performance Tuning',
          description: 'Optimize Vim performance',
          usage: 'Performance settings',
          example: 'set lazyredraw - don\'t redraw during macros\nset synmaxcol=200 - limit syntax highlighting\nset history=1000 - command history size\nset undolevels=1000 - undo levels\nset ttyfast - fast terminal connection\n\n# Disable unused features\nset loadplugins\nset nocursorline\nset nocursorcolumn',
        },
        {
          command: 'Memory Management',
          description: 'Manage Vim memory usage',
          usage: 'Memory settings',
          example: 'set maxmempattern=1000 - max pattern memory\nset swapfile - enable swap files\nset directory=/tmp - swap file location\nset undofile - enable persistent undo\nset undodir=~/.vim/undo - undo file location\n\n# Clear memory\n:clear - clear registers and marks',
        },
        {
          command: 'Startup Optimization',
          description: 'Speed up Vim startup',
          usage: 'Optimization techniques',
          example: '# Profile startup\nvim --startuptime startup.log\n\n# Optimize .vimrc\n" Use conditional loading\nif has(\'gui_running\')\n  " GUI-specific settings\nendif\n\n" Lazy load plugins\n" Use autocmd for FileType\n" Minimize expensive operations',
        },
        {
          command: 'Large File Handling',
          description: 'Work efficiently with large files',
          usage: 'Large file settings',
          example: '# Detect large files\nautocmd BufReadPre * if getfsize(expand("%")) > 10000000 |\n  setlocal noswapfile |\n  setlocal undolevels=-1 |\n  setlocal syntax=OFF |\nendif\n\n# Manual large file mode\n:set noswapfile\n:set undolevels=-1\n:set syntax=OFF',
        },
      ],
    },
    {
      title: 'Troubleshooting and Debugging',
      commands: [
        {
          command: 'Debugging Vim Issues',
          description: 'Diagnose and fix Vim problems',
          usage: 'Debug commands',
          example: ':version - show Vim version and features\n:checkhealth - check system health (Neovim)\n:scriptnames - show loaded scripts\n:verbose set <option>? - show where option was set\n\n# Debug mode\nvim -V - start in verbose mode\nvim --startuptime - profile startup',
        },
        {
          command: 'Common Issues and Solutions',
          description: 'Fix frequent Vim problems',
          usage: 'Troubleshooting commands',
          example: '# Backspace not working\n:set backspace=indent,eol,start\n\n# Arrow keys not working\n:set nocompatible\n\n# Colors not displaying\n:set t_Co=256\n:set termguicolors\n\n# Syntax highlighting not working\n:syntax enable\n:set filetype=python',
        },
        {
          command: 'Reset and Recovery',
          description: 'Reset Vim state and recover files',
          usage: 'Reset commands',
          example: ':reset - reset terminal\n:restore - restore screen\n\n# Clear all\n:clear - clear registers and marks\n:messages - clear message history\n\n# Recover from swap file\nvim -r filename.txt\n:recover filename.txt',
        },
      ],
    },
    {
      title: 'Quick Reference',
      commands: [
        {
          command: 'Essential Commands Summary',
          description: 'Most important Vim commands',
          usage: 'Quick reference',
          example: '# Navigation\nh j k l - basic movement\nw b e - word movement\n0 ^ $ - line navigation\ngg G - file navigation\n\n# Editing\ni a o - insert mode\nx dd - delete\nyy p - copy paste\nu Ctrl+r - undo redo\n\n# Search\n/ ? n N - search navigation\n* # - word search\n\n# Files\n:w :q :wq - file operations\n:e :bn :bp - buffer operations',
        },
        {
          command: 'Mode Reference',
          description: 'Vim modes and how to enter them',
          usage: 'Mode transitions',
          example: '# Normal Mode (default)\nESC - return to normal mode\n\n# Insert Mode\ni a I A o O - enter insert mode\nESC - return to normal\n\n# Visual Mode\nv V Ctrl+v - enter visual mode\nESC - return to normal\n\n# Command Mode\n: - enter command mode\nESC - return to normal\n\n# Replace Mode\nR - enter replace mode\nESC - return to normal',
        },
        {
          command: 'Help and Learning Resources',
          description: 'How to learn Vim effectively',
          usage: 'Learning commands',
          example: '# Built-in tutor\nvimtutor - interactive Vim tutorial\n\n# Help system\n:help - general help\n:help command - specific command help\n:helpgrep pattern - search help\n\n# Practice exercises\n# 1. Try vimtutor\n# 2. Practice hjkl navigation\n# 3. Learn text objects\n# 4. Master visual mode\n# 5. Customize .vimrc',
        },
      ],
    },
  ],
};
