import { Terminal } from 'lucide-react';

export const linuxCheatsheet = {
  id: 'linux',
  name: 'Linux Commands',
  description: 'Navigate Linux like a pro from terminal basics to system administration mastery',
  icon: Terminal,
  colorTheme: 'emerald' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started',
      commands: [
        {
          command: 'Terminal Basics',
          description: 'Understanding the Linux terminal',
          usage: 'Open terminal and start typing commands',
          example: '# Open terminal with Ctrl+Alt+T\n# Commands are case-sensitive\n# Use Tab for auto-completion\n# Use Up/Down arrows for command history',
        },
        {
          command: 'man',
          description: 'Display manual pages for commands',
          usage: 'man command_name',
          example: 'man ls\nman grep\nman -k search_term  # Search manuals',
        },
        {
          command: '--help',
          description: 'Show help for most commands',
          usage: 'command --help',
          example: 'ls --help\ngrep --help\ncp --help',
        },
        {
          command: 'clear',
          description: 'Clear terminal screen',
          usage: 'clear',
          example: 'clear\n# Or use Ctrl+L',
        },
        {
          command: 'exit',
          description: 'Exit terminal or shell',
          usage: 'exit',
          example: 'exit\n# Or use Ctrl+D',
        },
      ],
    },
    {
      title: 'Basic Navigation',
      commands: [
        {
          command: 'pwd',
          description: 'Print working directory',
          usage: 'pwd',
          example: 'pwd\n/home/username\n# Shows current directory',
        },
        {
          command: 'cd',
          description: 'Change directory',
          usage: 'cd [directory]',
          example: 'cd /home/user\ncd ~              # Home directory\ncd ..             # Parent directory\ncd -              # Previous directory\ncd ../sibling     # Sibling directory',
        },
        {
          command: 'ls',
          description: 'List directory contents',
          usage: 'ls [options]',
          example: 'ls\nls -l            # Long format\nls -a            # Show hidden files\nls -la           # Long format with hidden\nls -lh           # Human-readable sizes\nls -lt           # Sort by time (newest first)\nls -R            # Recursive',
        },
        {
          command: 'tree',
          description: 'Display directory structure as tree',
          usage: 'tree [options] [directory]',
          example: 'tree\ntree -L 2         # Limit depth\ntree -d           # Directories only',
        },
      ],
    },
    {
      title: 'File Operations',
      commands: [
        {
          command: 'touch',
          description: 'Create empty files or update timestamps',
          usage: 'touch filename',
          example: 'touch file.txt\ntouch file1.txt file2.txt\ntouch -d "2023-01-01" file.txt  # Set timestamp',
        },
        {
          command: 'mkdir',
          description: 'Create directories',
          usage: 'mkdir [options] directory_name',
          example: 'mkdir myfolder\nmkdir -p path/to/nested/folder  # Create parent dirs\nmkdir dir1 dir2 dir3  # Multiple dirs',
        },
        {
          command: 'rm',
          description: 'Remove files and directories',
          usage: 'rm [options] file_or_directory',
          example: 'rm file.txt\nrm -r directory    # Remove directory\nrm -f file.txt     # Force remove\nrm -rf directory   # Force remove directory\n# BE CAREFUL with rm -rf!',
        },
        {
          command: 'rmdir',
          description: 'Remove empty directories',
          usage: 'rmdir directory',
          example: 'rmdir empty_folder\n# Only works on empty directories',
        },
        {
          command: 'cp',
          description: 'Copy files and directories',
          usage: 'cp [options] source destination',
          example: 'cp file.txt backup.txt\ncp file.txt /path/to/destination/\ncp -r directory /backup/  # Copy directory\ncp -p file.txt backup.txt  # Preserve permissions',
        },
        {
          command: 'mv',
          description: 'Move or rename files',
          usage: 'mv source destination',
          example: 'mv old.txt new.txt\nmv file.txt /path/to/destination/\nmv *.txt backup/  # Move all txt files',
        },
      ],
    },
    {
      title: 'File Viewing',
      commands: [
        {
          command: 'cat',
          description: 'Display file contents',
          usage: 'cat filename',
          example: 'cat file.txt\ncat file1.txt file2.txt > combined.txt\n# Concatenate files',
        },
        {
          command: 'less',
          description: 'View files with pagination',
          usage: 'less filename',
          example: 'less large_file.txt\n# Use / to search, q to quit, arrows to navigate',
        },
        {
          command: 'more',
          description: 'View file page by page',
          usage: 'more filename',
          example: 'more file.txt\n# Press space for next page, q to quit',
        },
        {
          command: 'head',
          description: 'Show first lines of file',
          usage: 'head [-n number] filename',
          example: 'head file.txt\nhead -n 20 file.txt  # First 20 lines\nhead -c 100 file.txt  # First 100 bytes',
        },
        {
          command: 'tail',
          description: 'Show last lines of file',
          usage: 'tail [-n number] filename',
          example: 'tail file.txt\ntail -n 10 file.txt  # Last 10 lines\ntail -f log.txt      # Follow file in real-time',
        },
      ],
    },
    {
      title: 'Text Editors',
      commands: [
        {
          command: 'nano',
          description: 'Simple text editor',
          usage: 'nano filename',
          example: 'nano file.txt\n# Ctrl+X to exit, Y to save, N to cancel\n# Ctrl+O to save without exiting',
        },
        {
          command: 'vim basics',
          description: 'Advanced text editor basics',
          usage: 'vim filename',
          example: 'vim file.txt\n# i to insert mode, Esc to normal mode\n# :w to save, :q to quit, :wq to save and quit\n# :q! to quit without saving',
        },
        {
          command: 'vim navigation',
          description: 'Vim movement commands',
          usage: 'h j k l (left down up right)',
          example: '# Normal mode navigation:\nh - left, j - down, k - up, l - right\nw - next word, b - previous word\n0 - start of line, $ - end of line\nG - end of file, gg - start of file',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'File Permissions',
      commands: [
        {
          command: 'ls -l',
          description: 'View file permissions',
          usage: 'ls -l filename',
          example: 'ls -l file.txt\n# -rw-r--r-- 1 user group size date filename\n# d rwx r-x r-x (directory)\n# - rw- r-- r-- (file)',
        },
        {
          command: 'chmod',
          description: 'Change file permissions',
          usage: 'chmod [permissions] file',
          example: 'chmod 755 script.sh    # rwxr-xr-x\nchmod 644 file.txt      # rw-r--r--\nchmod +x script.sh      # Make executable\nchmod -w file.txt       # Remove write permission\nchmod u+x,g-w file.txt   # User execute, group no write',
        },
        {
          command: 'chown',
          description: 'Change file owner',
          usage: 'chown [owner]:[group] file',
          example: 'sudo chown user file.txt\nsudo chown user:group file.txt\nsudo chown -R user directory/  # Recursive',
        },
        {
          command: 'chgrp',
          description: 'Change group ownership',
          usage: 'chgrp group file',
          example: 'sudo chgrp developers file.txt\nsudo chgrp -R team directory/',
        },
      ],
    },
    {
      title: 'User Management',
      commands: [
        {
          command: 'whoami',
          description: 'Show current user',
          usage: 'whoami',
          example: 'whoami\nusername',
        },
        {
          command: 'id',
          description: 'Show user and group IDs',
          usage: 'id [username]',
          example: 'id\nid username\n# Shows uid, gid, and groups',
        },
        {
          command: 'sudo',
          description: 'Execute command as superuser',
          usage: 'sudo command',
          example: 'sudo apt update\nsudo -i            # Switch to root\nsudo -u user command  # Run as specific user',
        },
        {
          command: 'su',
          description: 'Switch user',
          usage: 'su [username]',
          example: 'su - username    # Switch with environment\nsu                # Switch to root\nexit              # Return to previous user',
        },
        {
          command: 'passwd',
          description: 'Change user password',
          usage: 'passwd [username]',
          example: 'passwd            # Change own password\nsudo passwd user   # Change other user password',
        },
      ],
    },
    {
      title: 'Process Management',
      commands: [
        {
          command: 'ps',
          description: 'Show running processes',
          usage: 'ps [options]',
          example: 'ps\nps aux            # All processes\nps -ef             # All processes (different format)\nps -u username     # Processes by user\nps -p PID          # Specific process',
        },
        {
          command: 'top',
          description: 'Interactive process viewer',
          usage: 'top',
          example: 'top\n# Press q to quit, M sort by memory, N sort by CPU\n# k to kill process, u to filter by user',
        },
        {
          command: 'htop',
          description: 'Enhanced process viewer',
          usage: 'htop',
          example: 'htop\n# Better interface than top\n# F keys for sorting, mouse support',
        },
        {
          command: 'kill',
          description: 'Terminate processes',
          usage: 'kill [signal] PID',
          example: 'kill 1234          # Graceful termination\nkill -9 1234        # Force kill\nkill -TERM 1234     # Termination signal\nkill -KILL 1234     # Kill signal',
        },
        {
          command: 'killall',
          description: 'Kill processes by name',
          usage: 'killall [options] process_name',
          example: 'killall chrome\nkillall -9 process_name  # Force kill\nkillall -u username   # Kill user processes',
        },
        {
          command: 'pkill',
          description: 'Kill processes by pattern',
          usage: 'pkill [options] pattern',
          example: 'pkill -f python    # Kill python processes\npkill -u username   # Kill user processes\npkill -signal TERM pattern',
        },
        {
          command: 'jobs',
          description: 'Show background jobs',
          usage: 'jobs',
          example: 'jobs\n# Shows [1]+ Running command &\n# [2]- Stopped command',
        },
        {
          command: 'bg',
          description: 'Resume job in background',
          usage: 'bg [job_id]',
          example: 'bg %1\n# Resume job 1 in background',
        },
        {
          command: 'fg',
          description: 'Bring job to foreground',
          usage: 'fg [job_id]',
          example: 'fg %1\n# Bring job 1 to foreground',
        },
        {
          command: 'nohup',
          description: 'Run command immune to hangups',
          usage: 'nohup command &',
          example: 'nohup python script.py &\n# Command continues after logout',
        },
      ],
    },
    {
      title: 'System Information',
      commands: [
        {
          command: 'uname',
          description: 'System information',
          usage: 'uname [options]',
          example: 'uname\nuname -a          # All information\nuname -r          # Kernel version\nuname -s          # Kernel name',
        },
        {
          command: 'df',
          description: 'Disk space usage',
          usage: 'df [options]',
          example: 'df\ndf -h             # Human readable\ndf -T             # Show filesystem types\ndf -i             # Show inodes',
        },
        {
          command: 'du',
          description: 'Directory space usage',
          usage: 'du [options] [directory]',
          example: 'du\ndu -h             # Human readable\ndu -sh *          # Summary for each item\ndu -a             # All files',
        },
        {
          command: 'free',
          description: 'Memory usage',
          usage: 'free [options]',
          example: 'free\nfree -h           # Human readable\nfree -m           # Megabytes\nfree -s 5         # Update every 5 seconds',
        },
        {
          command: 'uptime',
          description: 'System uptime and load',
          usage: 'uptime',
          example: 'uptime\n# Shows: time up, users, load average',
        },
        {
          command: 'hostname',
          description: 'Show or set hostname',
          usage: 'hostname [name]',
          example: 'hostname\nsudo hostname newname  # Set hostname',
        },
        {
          command: 'date',
          description: 'Show or set date/time',
          usage: 'date [options]',
          example: 'date\ndate +"%Y-%m-%d %H:%M:%S"\nsudo date "2023-12-25 10:30:00"  # Set date',
        },
        {
          command: 'cal',
          description: 'Display calendar',
          usage: 'cal [month] [year]',
          example: 'cal\ncal 12 2023       # December 2023\ncal -y            # Whole year',
        },
      ],
    },
    {
      title: 'Search and Find',
      commands: [
        {
          command: 'find',
          description: 'Find files and directories',
          usage: 'find [path] [expression]',
          example: 'find . -name "*.txt"\nfind / -name "config"\nfind . -type f -name "*.js"\nfind . -mtime -7     # Modified in last 7 days\nfind . -size +100M   # Larger than 100MB\nfind . -exec rm {} \\;  # Delete found files',
        },
        {
          command: 'locate',
          description: 'Find files by name (fast)',
          usage: 'locate filename',
          example: 'locate nginx.conf\nlocate -i config  # Case insensitive\nsudo updatedb      # Update database',
        },
        {
          command: 'which',
          description: 'Locate command in PATH',
          usage: 'which command',
          example: 'which python\nwhich ls\nwhich -a python  # All occurrences',
        },
        {
          command: 'whereis',
          description: 'Locate binary, source, manual',
          usage: 'whereis command',
          example: 'whereis python\n# Shows binary, source, manual locations',
        },
        {
          command: 'grep',
          description: 'Search text in files',
          usage: 'grep [options] pattern file',
          example: 'grep "error" log.txt\ngrep -r "TODO" .\ngrep -i "error" log.txt  # Case insensitive\ngrep -v "debug" log.txt  # Invert match\ngrep -n "error" log.txt  # Line numbers\ngrep -c "error" log.txt  # Count matches',
        },
        {
          command: 'grep advanced',
          description: 'Advanced grep patterns',
          usage: 'grep [regex] file',
          example: 'grep -E "error|warning" log.txt  # Extended regex\ngrep -o "\\d+" file.txt  # Extract numbers\ngrep -A 5 -B 5 "error" log.txt  # Context lines\ngrep -l "pattern" *.txt  # Files with matches\ngrep --include="*.py" -r "import" .',
        },
      ],
    },
    {
      title: 'Text Processing',
      commands: [
        {
          command: 'wc',
          description: 'Word, line, character count',
          usage: 'wc [options] file',
          example: 'wc file.txt\nwc -l file.txt    # Lines\nwc -w file.txt    # Words\nwc -c file.txt    # Characters\nwc -m file.txt    # Characters (multibyte)',
        },
        {
          command: 'sort',
          description: 'Sort lines of text',
          usage: 'sort [options] file',
          example: 'sort file.txt\nsort -n file.txt   # Numeric sort\nsort -r file.txt   # Reverse sort\nsort -u file.txt   # Unique lines\nsort -k 2 file.txt # Sort by 2nd column',
        },
        {
          command: 'uniq',
          description: 'Remove duplicate lines',
          usage: 'uniq [options] file',
          example: 'sort file.txt | uniq\nuniq -c file.txt  # Count duplicates\nuniq -d file.txt  # Show only duplicates\nuniq -u file.txt  # Show only unique',
        },
        {
          command: 'cut',
          description: 'Extract columns from text',
          usage: 'cut [options] file',
          example: 'cut -d: -f1 /etc/passwd  # First field\ncut -c1-5 file.txt  # Characters 1-5\ncut -f2,4 file.txt   # Fields 2 and 4',
        },
        {
          command: 'paste',
          description: 'Merge lines from files',
          usage: 'paste [options] files',
          example: 'paste file1 file2\npaste -d "," file1 file2  # Comma delimiter\npaste -s file.txt  # Sequential',
        },
        {
          command: 'tr',
          description: 'Translate or delete characters',
          usage: 'tr [options] set1 set2',
          example: 'echo "hello" | tr "a-z" "A-Z"\ntr -d " " < file.txt  # Delete spaces\ntr -s " " < file.txt  # Squeeze spaces',
        },
        {
          command: 'sed',
          description: 'Stream editor for text',
          usage: 'sed [script] file',
          example: 'sed "s/old/new/g" file.txt\nsed -i "s/old/new/g" file.txt  # In-place\nsed "1d" file.txt  # Delete first line\nsed -n "10,20p" file.txt  # Print lines 10-20',
        },
        {
          command: 'awk',
          description: 'Pattern scanning and processing',
          usage: 'awk [script] file',
          example: 'awk "{print $1}" file.txt  # First column\nawk -F: "{print $1}" /etc/passwd\nawk "{sum+=$1} END {print sum}" file.txt\nawk "NR==10,NR==20" file.txt  # Lines 10-20',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Networking Basics',
      commands: [
        {
          command: 'ping',
          description: 'Test network connectivity',
          usage: 'ping [options] host',
          example: 'ping google.com\nping -c 4 google.com  # 4 packets\nping -i 2 google.com  # 2 second interval',
        },
        {
          command: 'ip',
          description: 'Modern network configuration',
          usage: 'ip [object] [command]',
          example: 'ip addr show        # Show IP addresses\nip route show        # Show routing table\nip link show         # Show network interfaces\nip addr add 192.168.1.100/24 dev eth0',
        },
        {
          command: 'ifconfig',
          description: 'Legacy network configuration',
          usage: 'ifconfig [interface]',
          example: 'ifconfig\nifconfig eth0\nifconfig eth0 up    # Bring interface up\nifconfig eth0 down  # Bring interface down',
        },
        {
          command: 'netstat',
          description: 'Network statistics',
          usage: 'netstat [options]',
          example: 'netstat -tuln      # Listening ports\nnetstat -an         # All connections\nnetstat -i          # Interface statistics\nnetstat -rn         # Routing table',
        },
        {
          command: 'ss',
          description: 'Socket statistics (modern netstat)',
          usage: 'ss [options]',
          example: 'ss -tuln          # Listening ports\nss -an             # All sockets\nss -tpn             # TCP with process info',
        },
        {
          command: 'curl',
          description: 'Transfer data from URLs',
          usage: 'curl [options] URL',
          example: 'curl https://api.com\ncurl -I https://api.com  # Headers only\ncurl -X POST -d "data" https://api.com\ncurl -o file.txt https://example.com/file',
        },
        {
          command: 'wget',
          description: 'Download files from web',
          usage: 'wget [options] URL',
          example: 'wget https://example.com/file.zip\nwget -r https://example.com/  # Recursive\nwget -c https://example.com/largefile  # Continue',
        },
      ],
    },
    {
      title: 'Archive and Compression',
      commands: [
        {
          command: 'tar',
          description: 'Tape archive utility',
          usage: 'tar [options] archive files',
          example: 'tar -czvf archive.tar.gz folder/  # Create\ntar -xzvf archive.tar.gz           # Extract\ntar -tvf archive.tar.gz            # List contents\ntar -czvf backup.tar.gz --exclude="*.log" folder/  # Exclude',
        },
        {
          command: 'zip',
          description: 'Create zip archives',
          usage: 'zip [options] archive files',
          example: 'zip -r archive.zip folder/\nzip -r archive.zip file1 file2 folder/\nzip -r archive.zip -x "*.tmp" folder/  # Exclude',
        },
        {
          command: 'unzip',
          description: 'Extract zip files',
          usage: 'unzip [options] archive',
          example: 'unzip archive.zip\nunzip archive.zip -d destination/\nunzip -l archive.zip  # List contents',
        },
        {
          command: 'gzip',
          description: 'Compress files with gzip',
          usage: 'gzip [options] file',
          example: 'gzip file.txt        # Creates file.txt.gz\ngzip -k file.txt     # Keep original\ngzip -d file.txt.gz  # Decompress\ngzip -r folder/      # Compress directory',
        },
        {
          command: 'gunzip',
          description: 'Decompress gzip files',
          usage: 'gunzip [options] file.gz',
          example: 'gunzip file.txt.gz\ngunzip -k file.txt.gz  # Keep compressed',
        },
        {
          command: '7z',
          description: '7-Zip compression',
          usage: '7z [command] archive files',
          example: '7z a archive.7z folder/  # Create\n7z x archive.7z             # Extract\n7z l archive.7z             # List contents\n7z a archive.7z -m0=lzma2 folder/  # LZMA2 compression',
        },
      ],
    },
    {
      title: 'Package Management',
      commands: [
        {
          command: 'apt (Ubuntu/Debian)',
          description: 'Advanced Package Tool',
          usage: 'apt [command] [options]',
          example: 'sudo apt update          # Update package list\nsudo apt upgrade         # Upgrade packages\nsudo apt install package  # Install package\nsudo apt remove package   # Remove package\napt search keyword        # Search packages\napt show package          # Package info\nsudo apt autoremove       # Remove unused packages',
        },
        {
          command: 'yum/dnf (RHEL/CentOS/Fedora)',
          description: 'Yellowdog Updater Modified',
          usage: 'yum/dnf [command]',
          example: 'sudo yum update          # Update packages\nsudo yum install package # Install\nsudo yum remove package  # Remove\nyum search keyword        # Search\nsudo yum clean all        # Clean cache',
        },
        {
          command: 'pacman (Arch Linux)',
          description: 'Package manager for Arch',
          usage: 'pacman [command]',
          example: 'sudo pacman -Syu        # Update system\nsudo pacman -S package    # Install\nsudo pacman -R package    # Remove\npacman -Ss keyword        # Search\npacman -Qi package        # Package info',
        },
        {
          command: 'snap',
          description: 'Universal package manager',
          usage: 'snap [command]',
          example: 'sudo snap install package\nsudo snap remove package\nsnap list\nsnap find keyword\nsudo snap refresh package',
        },
        {
          command: 'flatpak',
          description: 'Application sandboxing',
          usage: 'flatpak [command]',
          example: 'flatpak install app\nflatpak uninstall app\nflatpak list\nflatpak search app\nflatpak update',
        },
      ],
    },
    {
      title: 'SSH and Remote Access',
      commands: [
        {
          command: 'ssh',
          description: 'Secure shell login',
          usage: 'ssh [options] user@host',
          example: 'ssh user@server.com\nssh -p 2222 user@server.com  # Custom port\nssh -i key.pem user@server.com  # Use key file',
        },
        {
          command: 'ssh-keygen',
          description: 'Generate SSH keys',
          usage: 'ssh-keygen [options]',
          example: 'ssh-keygen -t ed25519 -C "email@example.com"\nssh-keygen -t rsa -b 4096\nssh-keygen -f ~/.ssh/custom_key',
        },
        {
          command: 'ssh-copy-id',
          description: 'Copy SSH key to remote server',
          usage: 'ssh-copy-id [options] user@host',
          example: 'ssh-copy-id user@server.com\nssh-copy-id -i ~/.ssh/custom_key user@server.com',
        },
        {
          command: 'ssh tunnels',
          description: 'SSH port forwarding',
          usage: 'ssh -L/R/D port:host:port user@server',
          example: 'ssh -L 8080:localhost:80 user@server    # Local forward\nssh -R 9090:localhost:3000 user@server  # Remote forward\nssh -D 8080 user@server                  # SOCKS proxy',
        },
        {
          command: 'scp',
          description: 'Secure copy over SSH',
          usage: 'scp [options] source destination',
          example: 'scp file.txt user@server:/path/\nscp user@server:/path/file.txt .\nscp -r folder/ user@server:/path/\nscp -P 2222 file.txt user@server:/path/',
        },
        {
          command: 'rsync',
          description: 'Remote file synchronization',
          usage: 'rsync [options] source destination',
          example: 'rsync -avz folder/ user@server:/backup/\nrsync -avz --delete folder/ user@server:/backup/\nrsync -avz -e ssh folder/ user@server:/backup/',
        },
      ],
    },
    {
      title: 'Shell Scripting Basics',
      commands: [
        {
          command: 'shebang',
          description: 'Script interpreter declaration',
          usage: '#!/path/to/interpreter',
          example: '#!/bin/bash\n#!/usr/bin/env python3\n#!/usr/bin/env sh',
        },
        {
          command: 'variables',
          description: 'Shell variable usage',
          usage: 'VARIABLE=value',
          example: 'NAME="John"\nAGE=25\necho "My name is $NAME and I am $AGE years old"\nexport PATH=$PATH:/new/path  # Environment variable',
        },
        {
          command: 'command substitution',
          description: 'Use command output as values',
          usage: '$(command) or `command`',
          example: 'CURRENT_DIR=$(pwd)\nDATE=$(date +%Y-%m-%d)\nFILES=$(ls *.txt)\necho "Current directory: $CURRENT_DIR"',
        },
        {
          command: 'conditionals',
          description: 'If-else statements',
          usage: 'if [ condition ]; then ... fi',
          example: 'if [ -f "file.txt" ]; then\n  echo "File exists"\nelse\n  echo "File not found"\nfi\n\nif [ $AGE -gt 18 ]; then\n  echo "Adult"\nfi',
        },
        {
          command: 'loops',
          description: 'For and while loops',
          usage: 'for item in list; do ... done',
          example: 'for i in {1..5}; do\n  echo "Number: $i"\ndone\n\nfor file in *.txt; do\n  echo "Processing: $file"\ndone\n\ncounter=1\nwhile [ $counter -le 5 ]; do\n  echo "Count: $counter"\n  ((counter++))\ndone',
        },
        {
          command: 'functions',
          description: 'Define and use functions',
          usage: 'function_name() { ... }',
          example: 'greet() {\n  echo "Hello, $1!"\n}\n\ngreet "Alice"\n\nsum() {\n  echo $(($1 + $2))\n}\n\nresult=$(sum 5 3)',
        },
        {
          command: 'command line arguments',
          description: 'Access script arguments',
          usage: '$1, $2, ..., $#, $@, $0',
          example: '#!/bin/bash\necho "Script name: $0"\necho "First argument: $1"\necho "Second argument: $2"\necho "Number of arguments: $#"\necho "All arguments: $@"',
        },
        {
          command: 'making executable',
          description: 'Make script executable',
          usage: 'chmod +x script.sh',
          example: 'chmod +x myscript.sh\n./myscript.sh arg1 arg2\n# Or add to PATH and run from anywhere',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'System Monitoring and Performance',
      commands: [
        {
          command: 'vmstat',
          description: 'Virtual memory statistics',
          usage: 'vmstat [interval] [count]',
          example: 'vmstat\nvmstat 1 10     # Every 1 second, 10 times\nvmstat -s       # Summary statistics',
        },
        {
          command: 'iostat',
          description: 'I/O and CPU statistics',
          usage: 'iostat [options] [interval]',
          example: 'iostat\niostat -x 1     # Extended stats every second\niostat -d       # Device statistics only',
        },
        {
          command: 'sar',
          description: 'System activity reporter',
          usage: 'sar [options] [interval] [count]',
          example: 'sar -u 1 5     # CPU usage\nsar -r 1 5     # Memory usage\nsar -b 1 5     # I/O usage\nsar -n DEV 1 5 # Network usage',
        },
        {
          command: 'lsof',
          description: 'List open files',
          usage: 'lsof [options]',
          example: 'lsof\nlsof -i :8080   # Files using port 8080\nlsof -u username # Files opened by user\nlsof -p PID     # Files opened by process\nlsof +D /path   # All files in directory',
        },
        {
          command: 'strace',
          description: 'Trace system calls',
          usage: 'strace [options] command',
          example: 'strace ls\nstrace -p PID   # Trace running process\nstrace -c ls    # Count system calls\nstrace -e trace=open,read ls',
        },
        {
          command: 'ltrace',
          description: 'Trace library calls',
          usage: 'ltrace [options] command',
          example: 'ltrace ls\nltrace -p PID\nltrace -c ls    # Count library calls',
        },
        {
          command: 'perf',
          description: 'Performance analysis tool',
          usage: 'perf [command]',
          example: 'perf top\nperf record ./myprogram\nperf report\nperf stat ./myprogram',
        },
      ],
    },
    {
      title: 'Advanced Networking',
      commands: [
        {
          command: 'nmap',
          description: 'Network exploration and security scanning',
          usage: 'nmap [options] target',
          example: 'nmap scanme.nmap.org\nnmap -sP 192.168.1.0/24    # Ping scan\nnmap -sS target.com        # SYN scan\nnmap -sV target.com        # Version detection\nnmap -O target.com         # OS detection\nnmap -p 80,443 target.com   # Port scan',
        },
        {
          command: 'tcpdump',
          description: 'Packet analyzer',
          usage: 'tcpdump [options]',
          example: 'sudo tcpdump -i eth0\nsudo tcpdump -i eth0 port 80\nsudo tcpdump -i eth0 host 192.168.1.1\nsudo tcpdump -i eth0 -w capture.pcap\ntcpdump -r capture.pcap',
        },
        {
          command: 'dig',
          description: 'DNS lookup utility',
          usage: 'dig [options] domain',
          example: 'dig google.com\ndig +short google.com\ndig MX google.com\ndig ANY google.com\ndig @8.8.8.8 google.com  # Use specific DNS',
        },
        {
          command: 'traceroute',
          description: 'Trace network path to host',
          usage: 'traceroute [options] host',
          example: 'traceroute google.com\ntraceroute -n google.com  # No DNS resolution\ntraceroute -I google.com  # Use ICMP\ntraceroute -T google.com  # Use TCP',
        },
        {
          command: 'mtr',
          description: 'Network diagnostic tool (traceroute + ping)',
          usage: 'mtr [options] host',
          example: 'mtr google.com\nmtr -r -c 10 google.com  # 10 hops, report mode\nmtr -n google.com  # No DNS resolution',
        },
        {
          command: 'netcat (nc)',
          description: 'Network Swiss Army knife',
          usage: 'nc [options] host port',
          example: 'nc -l 8080              # Listen on port 8080\nnc google.com 80          # Connect to port 80\necho "test" | nc -l 8080  # Echo server\nnc -l 8080 > file.txt     # File receiver\nnc host.com 8080 < file.txt  # File sender',
        },
        {
          command: 'iptables',
          description: 'Linux firewall administration',
          usage: 'iptables [command] [chain] [options]',
          example: 'sudo iptables -L        # List rules\nsudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT\nsudo iptables -A INPUT -j DROP\nsudo iptables -F        # Flush all rules\nsudo iptables-save > rules.txt',
        },
        {
          command: 'ufw',
          description: 'Uncomplicated Firewall',
          usage: 'ufw [command]',
          example: 'sudo ufw enable\nsudo ufw status\nsudo ufw allow 22/tcp\nsudo ufw deny 80\nsudo ufw allow from 192.168.1.0/24\nsudo ufw disable',
        },
      ],
    },
    {
      title: 'Disk and Filesystem Management',
      commands: [
        {
          command: 'fdisk',
          description: 'Disk partitioning utility',
          usage: 'fdisk [options] device',
          example: 'sudo fdisk -l        # List all partitions\nsudo fdisk /dev/sda    # Partition /dev/sda\n# Commands: n (new), d (delete), p (print), w (write), q (quit)',
        },
        {
          command: 'gdisk',
          description: 'GPT partitioning utility',
          usage: 'gdisk [options] device',
          example: 'sudo gdisk -l\nsudo gdisk /dev/sda\n# For GPT partitions, supports >2TB disks',
        },
        {
          command: 'parted',
          description: 'Partition manipulation utility',
          usage: 'parted [options] device',
          example: 'sudo parted /dev/sda\nparted /dev/sda print\nparted /dev/sda mklabel gpt\nparted /dev/sda mkpart primary 0% 100%',
        },
        {
          command: 'mkfs',
          description: 'Create filesystem',
          usage: 'mkfs.[type] device',
          example: 'sudo mkfs.ext4 /dev/sda1\nsudo mkfs.ntfs /dev/sda2\nsudo mkfs.xfs /dev/sda3\nsudo mkfs.btrfs /dev/sda4',
        },
        {
          command: 'fsck',
          description: 'Filesystem check and repair',
          usage: 'fsck [options] device',
          example: 'sudo fsck /dev/sda1\nsudo fsck -y /dev/sda1  # Auto-repair\nsudo fsck.ext4 /dev/sda1\n# Run on unmounted filesystem',
        },
        {
          command: 'mount',
          description: 'Mount filesystem',
          usage: 'mount [options] device mountpoint',
          example: 'sudo mount /dev/sda1 /mnt\nmount -t ext4 /dev/sda1 /mnt\nmount -o ro /dev/sda1 /mnt  # Read-only\nmount -a  # Mount all from fstab',
        },
        {
          command: 'umount',
          description: 'Unmount filesystem',
          usage: 'umount [options] mountpoint',
          example: 'sudo umount /mnt\nsudo umount -l /mnt  # Lazy unmount\nsudo umount -f /mnt  # Force unmount',
        },
        {
          command: 'lsblk',
          description: 'List block devices',
          usage: 'lsblk [options]',
          example: 'lsblk\nlsblk -f  # Show filesystems\nlsblk -m  # Show permissions\nlsblk -d  # Show only disks',
        },
        {
          command: 'dd',
          description: 'Convert and copy file (disk cloning)',
          usage: 'dd if=input of=output [options]',
          example: 'sudo dd if=/dev/sda of=backup.img bs=4M\nsudo dd if=backup.img of=/dev/sda bs=4M\ndd if=/dev/zero of=file bs=1M count=100\ndd if=/dev/urandom of=file bs=1M count=10',
        },
        {
          command: 'smartctl',
          description: 'SMART disk monitoring',
          usage: 'smartctl [options] device',
          example: 'sudo smartctl -a /dev/sda\nsudo smartctl -H /dev/sda  # Health\nsudo smartctl -t short /dev/sda  # Test\nsudo smartctl -l selftest /dev/sda',
        },
      ],
    },
    {
      title: 'Security and Permissions',
      commands: [
        {
          command: 'sudoers',
          description: 'Configure sudo access',
          usage: 'sudo visudo',
          example: 'sudo visudo\n# Add lines like:\n# username ALL=(ALL) NOPASSWD: /usr/bin/apt\n# %group ALL=(ALL) ALL',
        },
        {
          command: 'setfacl',
          description: 'Set file access control lists',
          usage: 'setfacl [options] file',
          example: 'setfacl -m u:username:rw file.txt\nsetfacl -m g:group:r file.txt\nsetfacl -x u:username file.txt\ngetfacl file.txt  # View ACLs',
        },
        {
          command: 'chattr',
          description: 'Change file attributes',
          usage: 'chattr [+-attribute] file',
          example: 'sudo chattr +i file.txt    # Immutable\nsudo chattr +a file.txt    # Append only\nsudo chattr -i file.txt    # Remove immutable\nlsattr file.txt  # View attributes',
        },
        {
          command: 'fail2ban-client',
          description: 'Control fail2ban service',
          usage: 'fail2ban-client [command]',
          example: 'sudo fail2ban-client status\nsudo fail2ban-client status sshd\nsudo fail2ban-client set sshd unbanip IP_ADDRESS\nsudo fail2ban-client reload',
        },
        {
          command: 'ufw advanced',
          description: 'Advanced firewall rules',
          usage: 'ufw [command] [rule]',
          example: 'sudo ufw deny from 192.168.1.100\nsudo ufw allow to any port 80 proto tcp\nsudo ufw route allow in on eth0 out on eth1 to 192.168.2.0/24\nsudo ufw delete deny 80',
        },
        {
          command: 'openssl',
          description: 'OpenSSL command line tool',
          usage: 'openssl [command]',
          example: 'openssl genrsa -out private.key 2048\nopenssl req -new -x509 -key private.key -out certificate.crt -days 365\nopenssl s_client -connect google.com:443\nopenssl x509 -in certificate.crt -text -noout',
        },
        {
          command: 'gpg',
          description: 'GNU Privacy Guard encryption',
          usage: 'gpg [command]',
          example: 'gpg --gen-key                    # Generate key\ngpg --list-keys                  # List keys\ngpg --encrypt -r recipient file.txt  # Encrypt\ngpg --decrypt file.txt.gpg        # Decrypt\ngpg --sign file.txt               # Sign',
        },
      ],
    },
    {
      title: 'Virtualization and Containers',
      commands: [
        {
          command: 'docker basics',
          description: 'Docker container management',
          usage: 'docker [command]',
          example: 'docker run nginx\ndocker ps\ndocker ps -a\ndocker images\ndocker stop container_id\ndocker rm container_id\ndocker rmi image_name',
        },
        {
          command: 'docker advanced',
          description: 'Advanced Docker operations',
          usage: 'docker [advanced command]',
          example: 'docker run -d -p 80:80 nginx\ndocker run -v /host/path:/container/path nginx\ndocker exec -it container_id bash\ndocker logs container_id\ndocker stats\ndocker system prune',
        },
        {
          command: 'docker build',
          description: 'Build Docker images',
          usage: 'docker build [options] path',
          example: 'docker build -t myapp:latest .\ndocker build -f Dockerfile.prod -t myapp:prod .\ndocker build --no-cache -t myapp:latest .\ndocker history myapp:latest',
        },
        {
          command: 'docker compose',
          description: 'Multi-container applications',
          usage: 'docker-compose [command]',
          example: 'docker-compose up -d\ndocker-compose down\ndocker-compose ps\ndocker-compose logs\ndocker-compose build\ndocker-compose exec service_name bash',
        },
        {
          command: 'podman',
          description: 'Podman container engine',
          usage: 'podman [command]',
          example: 'podman run nginx\npodman ps\npodman images\npodman generate systemd --name container --files\npodman play kube pod.yaml',
        },
        {
          command: 'kubernetes basics',
          description: 'Kubernetes cluster management',
          usage: 'kubectl [command]',
          example: 'kubectl get pods\nkubectl get services\nkubectl describe pod pod_name\nkubectl logs pod_name\nkubectl exec -it pod_name bash\nkubectl apply -f deployment.yaml',
        },
        {
          command: 'libvirt',
          description: 'Virtualization management',
          usage: 'virsh [command]',
          example: 'virsh list --all\nvirsh start vm_name\nvirsh shutdown vm_name\nvirsh console vm_name\nvirsh dumpxml vm_name\nvirt-install --name vm --ram 2048 --disk size=20 --cdrom ubuntu.iso',
        },
        {
          command: 'Vagrant',
          description: 'Development environment management',
          usage: 'vagrant [command]',
          example: 'vagrant init ubuntu/focal64\nvagrant up\nvagrant ssh\nvagrant halt\nvagrant destroy\nvagrant reload\nvagrant status',
        },
      ],
    },
    {
      title: 'Cloud and DevOps Tools',
      commands: [
        {
          command: 'aws cli',
          description: 'Amazon Web Services command line',
          usage: 'aws [service] [command]',
          example: 'aws s3 ls\naws ec2 describe-instances\naws s3 cp file.txt s3://bucket/\naws configure\naws sts get-caller-identity',
        },
        {
          command: 'gcloud',
          description: 'Google Cloud Platform CLI',
          usage: 'gcloud [command]',
          example: 'gcloud auth login\ngcloud config set project project_id\ngcloud compute instances list\ngcloud storage ls gs://bucket/',
        },
        {
          command: 'az cli',
          description: 'Azure Command Line Interface',
          usage: 'az [command]',
          example: 'az login\naz group list\naz vm list\naz storage account list\naz account show',
        },
        {
          command: 'terraform',
          description: 'Infrastructure as Code',
          usage: 'terraform [command]',
          example: 'terraform init\nterraform plan\nterraform apply\nterraform destroy\nterraform validate\nterraform fmt',
        },
        {
          command: 'ansible',
          description: 'Configuration management',
          usage: 'ansible [command]',
          example: 'ansible all -m ping\nansible-playbook playbook.yml\nansible inventory -i hosts\nansible-doc module_name',
        },
        {
          command: 'kubectl advanced',
          description: 'Advanced Kubernetes operations',
          usage: 'kubectl [advanced command]',
          example: 'kubectl top nodes\nkubectl top pods\nkubectl scale deployment app --replicas=3\nkubectl set image deployment/app app=image:tag\nkubectl rollout status deployment/app\nkubectl get events --sort-by=.metadata.creationTimestamp',
        },
        {
          command: 'helm',
          description: 'Kubernetes package manager',
          usage: 'helm [command]',
          example: 'helm repo add stable https://charts.helm.sh/stable\nhelm install myapp stable/nginx\nhelm list\nhelm uninstall myapp\nhelm upgrade myapp stable/nginx',
        },
        {
          command: 'istioctl',
          description: 'Istio service mesh CLI',
          usage: 'istioctl [command]',
          example: 'istioctl install\nistioctl proxy-status\nistioctl analyze\nistioctl dashboard kiali\nistioctl manifest generate',
        },
      ],
    },
    {
      title: 'Advanced Shell Features',
      commands: [
        {
          command: 'tmux',
          description: 'Terminal multiplexer',
          usage: 'tmux [command]',
          example: 'tmux new -s session_name\ntmux attach -t session_name\ntmux ls\ntmux kill-session -t session_name\n# Inside tmux: Ctrl+b c (new window), Ctrl+b " (split), Ctrl+b % (vertical split)',
        },
        {
          command: 'screen',
          description: 'Terminal multiplexer (legacy)',
          usage: 'screen [command]',
          example: 'screen -S session_name\nscreen -r session_name\nscreen -ls\n# Inside screen: Ctrl+a c (new window), Ctrl+a d (detach)',
        },
        {
          command: 'zsh',
          description: 'Z shell with advanced features',
          usage: 'zsh [options]',
          example: 'zsh\n# Features: better tab completion, themes, plugins\n# Use with Oh My Zsh: sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
        },
        {
          command: 'fish',
          description: 'Friendly Interactive Shell',
          usage: 'fish [options]',
          example: 'fish\n# Features: syntax highlighting, autosuggestions\nfish_config  # Web-based configuration',
        },
        {
          command: 'bash scripting advanced',
          description: 'Advanced bash features',
          usage: 'Advanced bash constructs',
          example: '# Arrays\narr=(apple banana cherry)\necho ${arr[1]}  # banana\necho ${arr[@]}  # all elements\n\n# Associative arrays\ndeclare -A colors\ncolors[red]="#FF0000"\ncolors[green]="#00FF00"\n\n# Process substitution\ndiff <(sort file1) <(sort file2)\n\n# Command grouping\n{ command1; command2; } > output.txt',
        },
        {
          command: 'regex with grep',
          description: 'Advanced regular expressions',
          usage: 'grep -E "pattern" file',
          example: 'grep -E "^[0-9]{3}-[0-9]{3}-[0-9]{4}$" phones.txt  # Phone numbers\ngrep -E "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b" emails.txt  # Emails\ngrep -E "https?://[^\\s]+" urls.txt  # URLs\ngrep -P "(?<=prefix).*(?=suffix)" file.txt  # Lookarounds',
        },
        {
          command: 'awk advanced patterns',
          description: 'Advanced AWK programming',
          usage: 'awk [advanced script]',
          example: 'awk \'BEGIN{FS=","; OFS=","} $3>1000{$3=$3*1.1}1\' file.csv  # CSV processing\nawk \'NR%2==0\' file.txt  # Even lines\nawk \'NF>5\' file.txt  # Lines with >5 fields\nawk \'{a[NR]=$0} END{for(i=NR;i>0;i--) print a[i]}\' file.txt  # Reverse file',
        },
        {
          command: 'sed advanced',
          description: 'Advanced sed operations',
          usage: 'sed [advanced script]',
          example: 'sed -n "1,10p" file.txt  # Extract lines 1-10\nsed "/^$/d" file.txt  # Remove empty lines\nsed "s/^/prefix /" file.txt  # Add prefix\nsed "s/\\(.*\\)/\\1/" file.txt  # Grouping\nsed -e "s/a/A/g" -e "s/b/B/g" file.txt  # Multiple edits',
        },
      ],
    },
    {
      title: 'System Administration',
      commands: [
        {
          command: 'systemctl',
          description: 'Systemd service manager',
          usage: 'systemctl [command] service',
          example: 'sudo systemctl start nginx\nsudo systemctl stop nginx\nsudo systemctl restart nginx\nsudo systemctl enable nginx  # Start on boot\nsudo systemctl disable nginx\nsystemctl status nginx\nsystemctl list-units --type=service',
        },
        {
          command: 'journalctl',
          description: 'Query systemd logs',
          usage: 'journalctl [options]',
          example: 'journalctl -u nginx\njournalctl -f  # Follow logs\njournalctl --since "2023-01-01"\njournalctl --since "1 hour ago"\njournalctl -p err  # Error logs only',
        },
        {
          command: 'cron',
          description: 'Schedule recurring tasks',
          usage: 'crontab [options]',
          example: 'crontab -e  # Edit crontab\ncrontab -l  # List crontab\ncrontab -r  # Remove crontab\n# Format: * * * * * command\n# 0 2 * * * /backup.sh  # Daily at 2 AM',
        },
        {
          command: 'at',
          description: 'Schedule one-time tasks',
          usage: 'at [time]',
          example: 'at 10:30 PM\nat> /path/to/script.sh\nat> Ctrl+D\nat 1am tomorrow\nat now + 1 hour',
        },
        {
          command: 'logrotate',
          description: 'Log rotation management',
          usage: 'logrotate [options] config',
          example: 'sudo logrotate -f /etc/logrotate.conf\nsudo logrotate -d /etc/logrotate.conf  # Dry run\n# Config file: /etc/logrotate.d/app',
        },
        {
          command: 'rsync advanced',
          description: 'Advanced file synchronization',
          usage: 'rsync [advanced options]',
          example: 'rsync -avz --delete --exclude="*.tmp" source/ destination/\nrsync -avz --partial --progress largefile user@server:/path/\nrsync -avz -e "ssh -p 2222" source/ user@server:/path/\nrsync --dry-run -avz source/ destination/  # Preview',
        },
        {
          command: 'backup strategies',
          description: 'System backup commands',
          usage: 'Various backup tools',
          example: '# Full backup with tar\ntar -czvf backup-$(date +%Y%m%d).tar.gz --exclude=/proc --exclude=/sys --exclude=/dev /\n\n# Incremental backup with rsync\nrsync -av --link-dest=/backup/yesterday /source /backup/today\n\n# Database backup\nmysqldump -u user -p database > backup.sql',
        },
        {
          command: 'system rescue',
          description: 'System recovery commands',
          usage: 'Emergency system tools',
          example: 'sudo fsck -y /dev/sda1  # Filesystem check\nsudo grub-install /dev/sda  # Reinstall GRUB\nsudo update-grub  # Update GRUB config\nsudo dpkg-reconfigure -a  # Reconfigure packages\nsudo apt --fix-broken install  # Fix broken packages',
        },
      ],
    },
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'ulimit',
          description: 'Set system resource limits',
          usage: 'ulimit [options]',
          example: 'ulimit -a  # Show all limits\nulimit -n 65536  # Set open file limit\nulimit -u 4096   # Set user process limit\n# Permanent: /etc/security/limits.conf',
        },
        {
          command: 'sysctl',
          description: 'Configure kernel parameters',
          usage: 'sysctl [parameter]',
          example: 'sysctl -a  # Show all parameters\nsysctl net.ipv4.ip_forward  # Show specific\nsudo sysctl -w net.ipv4.ip_forward=1  # Set parameter\n# Permanent: /etc/sysctl.conf',
        },
        {
          command: 'tuned',
          description: 'System tuning daemon',
          usage: 'tuned-adm [command]',
          example: 'sudo tuned-adm list\ntuned-adm active\nsudo tuned-adm profile throughput-performance\nsudo tuned-adm profile balanced',
        },
        {
          command: 'cpufreq',
          description: 'CPU frequency scaling',
          usage: 'cpufreq-set [options]',
          example: 'sudo cpufreq-set -g performance  # Set governor\ncpufreq-info  # Show info\nsudo cpufreq-set -d 800MHz -u 2.5GHz  # Min/max freq',
        },
        {
          command: 'iotop',
          description: 'I/O monitoring tool',
          usage: 'iotop [options]',
          example: 'sudo iotop\nsudo iotop -o  # Only processes with I/O\nsudo iotop -a  # Accumulated I/O',
        },
        {
          command: 'nethogs',
          description: 'Network usage by process',
          usage: 'nethogs [options]',
          example: 'sudo nethogs\nsudo nethogs eth0\nsudo nethogs -t  # Trace mode',
        },
        {
          command: 'powertop',
          description: 'Power consumption analysis',
          usage: 'powertop [options]',
          example: 'sudo powertop\nsudo powertop --calibrate  # Calibrate\nsudo powertop --html=report.html',
        },
      ],
    },
  ],
};
