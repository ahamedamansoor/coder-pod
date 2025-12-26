import { Code } from 'lucide-react';

export const bashCheatsheet = {
  id: 'bash',
  name: 'Bash',
  description: 'Comprehensive Bash scripting guide covering beginner to expert commands, shell programming, and automation techniques',
  icon: Code,
  color: 'from-green-600 to-emerald-600',
  category: 'programming',
  tags: ['bash', 'shell', 'linux', 'scripting', 'automation'],
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Bash',
      commands: [
        {
          command: 'Bash Overview',
          description: 'Introduction to Bash shell',
          usage: 'Understanding Bash shell basics',
          example: `Bash Overview:
- Default shell on most Linux distributions
- Command-line interpreter
- Scripting language
- Process management
- File system navigation`,
        },
        {
          command: 'Shell Types',
          description: 'Different Unix shells available',
          usage: 'Common shell types and their characteristics',
          example: `Shell Types:
- bash: Bourne Again Shell (default)
- sh: Bourne Shell (basic)
- zsh: Z Shell (advanced)
- fish: Friendly Interactive Shell
- ksh: KornShell`,
        },
        {
          command: 'Check Current Shell',
          description: 'Identify current shell and version',
          usage: 'echo $SHELL, echo $0, which bash',
          example: `echo $SHELL                    # Shows current shell
echo $0                       # Shows current shell name
which bash                   # Shows bash location
bash --version               # Shows bash version`,
        },
        {
          command: 'Start Different Shells',
          description: 'Launch different shell environments',
          usage: 'bash, sh, zsh commands',
          example: `bash                         # Start bash shell
sh                           # Start sh shell
zsh                          # Start zsh shell`,
        },
        {
          command: 'Shell Features',
          description: 'Key capabilities of modern shells',
          usage: 'Understanding shell capabilities',
          example: `Shell features:
- Command history
- Tab completion
- Command line editing
- Scripting capabilities
- Environment variables
- Process control`,
        },
        {
          command: 'Print Working Directory',
          description: 'Show current directory location',
          usage: 'pwd command',
          example: `pwd                          # Print working directory`,
        },
        {
          command: 'List Files Basic',
          description: 'List files in current directory',
          usage: 'ls command',
          example: `ls                           # List files in current directory`,
        },
        {
          command: 'List Files with Details',
          description: 'Show detailed file information',
          usage: 'ls -la command',
          example: `ls -la                       # List all files with details`,
        },
        {
          command: 'List Files Human Readable',
          description: 'Show file sizes in readable format',
          usage: 'ls -lh command',
          example: `ls -lh                       # List with human-readable sizes`,
        },
        {
          command: 'List Files by Time',
          description: 'Sort files by modification time',
          usage: 'ls -t command',
          example: `ls -t                        # List sorted by time`,
        },
        {
          command: 'List Files Reverse Order',
          description: 'Reverse the sort order',
          usage: 'ls -r command',
          example: `ls -r                        # Reverse order`,
        },
        {
          command: 'Change Directory',
          description: 'Navigate to specific directory',
          usage: 'cd /path/to/directory',
          example: `cd /path/to/directory        # Change to specific directory`,
        },
        {
          command: 'Go Up One Directory',
          description: 'Navigate to parent directory',
          usage: 'cd ..',
          example: `cd ..                        # Go up one directory`,
        },
        {
          command: 'Go Up Multiple Directories',
          description: 'Navigate up multiple levels',
          usage: 'cd ../..',
          example: `cd ../..                     # Go up two directories`,
        },
        {
          command: 'Go to Home Directory',
          description: 'Navigate to user home directory',
          usage: 'cd ~ or cd $HOME',
          example: `cd ~                         # Go to home directory
cd $HOME                     # Go to home directory`,
        },
        {
          command: 'Go to Previous Directory',
          description: 'Return to previous directory',
          usage: 'cd -',
          example: `cd -                         # Go to previous directory`,
        },
        {
          command: 'Create Empty File',
          description: 'Create a new empty file',
          usage: 'touch filename',
          example: `touch filename.txt           # Create empty file`,
        },
        {
          command: 'Create Directory',
          description: 'Create a new directory',
          usage: 'mkdir directory_name',
          example: `mkdir directory_name         # Create directory`,
        },
        {
          command: 'Create Nested Directories',
          description: 'Create directory hierarchy',
          usage: 'mkdir -p path/to/dir',
          example: `mkdir -p path/to/dir         # Create nested directories`,
        },
        {
          command: 'Remove Empty Directory',
          description: 'Delete empty directory',
          usage: 'rmdir directory_name',
          example: `rmdir empty_directory        # Remove empty directory`,
        },
        {
          command: 'Remove File',
          description: 'Delete a file',
          usage: 'rm filename',
          example: `rm filename                  # Remove file`,
        },
        {
          command: 'Remove Directory',
          description: 'Delete directory and contents',
          usage: 'rm -r directory',
          example: `rm -r directory              # Remove directory and contents`,
        },
        {
          command: 'Force Remove Directory',
          description: 'Force delete without prompts',
          usage: 'rm -rf directory',
          example: `rm -rf directory             # Force remove directory`,
        },
        {
          command: 'Copy File',
          description: 'Copy file to destination',
          usage: 'cp source destination',
          example: `cp source.txt destination    # Copy file`,
        },
        {
          command: 'Copy Directory',
          description: 'Copy directory recursively',
          usage: 'cp -r source_dir dest_dir',
          example: `cp -r source_dir dest_dir   # Copy directory`,
        },
        {
          command: 'Rename File',
          description: 'Rename or move file',
          usage: 'mv old_name new_name',
          example: `mv old_name new_name         # Rename file/directory`,
        },
        {
          command: 'Move File',
          description: 'Move file to different location',
          usage: 'mv file.txt /path/to/dest',
          example: `mv file.txt /path/to/dest    # Move file`,
        },
        {
          command: 'Display File Content',
          description: 'Show entire file content',
          usage: 'cat filename',
          example: `cat filename.txt             # Display file content`,
        },
        {
          command: 'View File with Pagination',
          description: 'Browse file with navigation',
          usage: 'less filename',
          example: `less filename.txt            # View file with pagination`,
        },
        {
          command: 'View File Basic Pagination',
          description: 'Simple file viewer',
          usage: 'more filename',
          example: `more filename.txt            # View file with pagination`,
        },
        {
          command: 'Show First Lines',
          description: 'Display first n lines of file',
          usage: 'head -n filename',
          example: `head -n 10 filename.txt      # Show first 10 lines`,
        },
        {
          command: 'Show Last Lines',
          description: 'Display last n lines of file',
          usage: 'tail -n filename',
          example: `tail -n 10 filename.txt      # Show last 10 lines`,
        },
        {
          command: 'Follow File Changes',
          description: 'Monitor file for changes',
          usage: 'tail -f filename',
          example: `tail -f filename.txt         # Follow file changes`,
        },
      ],
    },
    {
      title: 'File Permissions',
      commands: [
        {
          command: 'View File Permissions',
          description: 'Check file permission settings',
          usage: 'ls -l filename',
          example: `ls -l filename                # View file permissions
# Example: -rwxr-xr--
# -: file type (d=directory, l=link, -=file)
# rwx: owner permissions (read, write, execute)
# r-x: group permissions (read, execute)
# r--: others permissions (read only)`,
        },
        {
          command: 'Add Execute Permission',
          description: 'Grant execute permission to owner',
          usage: 'chmod u+x filename',
          example: `chmod u+x filename            # Add execute for owner`,
        },
        {
          command: 'Add Write Permission',
          description: 'Grant write permission to group',
          usage: 'chmod g+w filename',
          example: `chmod g+w filename            # Add write for group`,
        },
        {
          command: 'Remove Read Permission',
          description: 'Revoke read permission from others',
          usage: 'chmod o-r filename',
          example: `chmod o-r filename            # Remove read for others`,
        },
        {
          command: 'Add Read for All',
          description: 'Grant read permission to everyone',
          usage: 'chmod a+r filename',
          example: `chmod a+r filename            # Add read for all`,
        },
        {
          command: 'Set Specific Permissions',
          description: 'Set exact permissions for all',
          usage: 'chmod u=rwx,g=rx,o=r filename',
          example: `chmod u=rwx,g=rx,o=r filename # Set specific permissions`,
        },
        {
          command: 'Numeric Permission 755',
          description: 'Set rwxr-xr-x permissions',
          usage: 'chmod 755 filename',
          example: `chmod 755 filename            # rwxr-xr-x (common for executables)`,
        },
        {
          command: 'Numeric Permission 644',
          description: 'Set rw-r--r-- permissions',
          usage: 'chmod 644 filename',
          example: `chmod 644 filename            # rw-r--r-- (common for files)`,
        },
        {
          command: 'Full Permissions',
          description: 'Set all permissions for everyone',
          usage: 'chmod 777 filename',
          example: `chmod 777 filename            # rwxrwxrwx (full permissions)`,
        },
        {
          command: 'Private Directory',
          description: 'Set private directory permissions',
          usage: 'chmod 700 directory',
          example: `chmod 700 directory            # rwx------ (private directory)`,
        },
        {
          command: 'Change File Owner',
          description: 'Change file ownership',
          usage: 'sudo chown user filename',
          example: `sudo chown user filename       # Change owner`,
        },
        {
          command: 'Change Owner and Group',
          description: 'Change both owner and group',
          usage: 'sudo chown user:group filename',
          example: `sudo chown user:group filename # Change owner and group`,
        },
        {
          command: 'Change Group Only',
          description: 'Change file group ownership',
          usage: 'sudo chgrp group filename',
          example: `sudo chgrp group filename      # Change group only`,
        },
        {
          command: 'Set SUID Bit',
          description: 'Set Set User ID permission',
          usage: 'chmod +s filename',
          example: `chmod +s filename              # Set SUID bit`,
        },
        {
          command: 'Set SGID Bit',
          description: 'Set Set Group ID permission',
          usage: 'chmod +s directory',
          example: `chmod +s directory             # Set SGID bit`,
        },
        {
          command: 'Set Sticky Bit',
          description: 'Set sticky bit for directory',
          usage: 'chmod +t directory',
          example: `chmod +t directory             # Set sticky bit`,
        },
        {
          command: 'Show Octal Permissions',
          description: 'Display permissions in octal format',
          usage: 'stat -c "%a %n" filename',
          example: `stat -c "%a %n" filename       # Show octal permissions`,
        },
        {
          command: 'Show Detailed ACL',
          description: 'Display Access Control List',
          usage: 'getfacl filename',
          example: `getfacl filename               # Show detailed ACL permissions`,
        },
      ],
    },
    {
      title: 'Environment Variables',
      commands: [
        {
          command: 'List Environment Variables',
          description: 'Show all environment variables',
          usage: 'env or printenv',
          example: `env                          # List all environment variables
printenv                     # List all environment variables`,
        },
        {
          command: 'List All Variables',
          description: 'Show environment and shell variables',
          usage: 'set command',
          example: `set                          # List all variables (including shell vars)`,
        },
        {
          command: 'Show Specific Variable',
          description: 'Display value of specific variable',
          usage: 'echo $VARIABLE',
          example: `echo $HOME                   # Show specific variable
echo $PATH                   # Show PATH variable
echo $USER                   # Show current user`,
        },
        {
          command: 'Set Local Variable',
          description: 'Create shell-local variable',
          usage: 'VAR="value"',
          example: `MY_VAR="value"               # Set shell variable (local)`,
        },
        {
          command: 'Set Environment Variable',
          description: 'Create environment variable',
          usage: 'export VAR="value"',
          example: `export MY_VAR="value"        # Set environment variable`,
        },
        {
          command: 'Set Multiple Variables',
          description: 'Create multiple environment variables',
          usage: 'export VAR1="val1" VAR2="val2"',
          example: `export VAR1="val1" VAR2="val2" # Set multiple variables`,
        },
        {
          command: 'Use Variable with Default',
          description: 'Use variable with fallback value',
          usage: 'echo ${VAR:-default}',
          example: `echo \${VAR:-default}         # Use default if unset`,
        },
        {
          command: 'Use Variable if Set',
          description: 'Use value only if variable is set',
          usage: 'echo ${VAR:+value}',
          example: `echo \${VAR:+value}           # Use value if set`,
        },
        {
          command: 'Get String Length',
          description: 'Calculate length of variable value',
          usage: 'echo ${#VAR}',
          example: `echo \${#VAR}                 # Get string length`,
        },
        {
          command: 'Get Substring',
          description: 'Extract substring from variable',
          usage: 'echo ${VAR:start:length}',
          example: `echo \${VAR:2:3}              # Get substring`,
        },
        {
          command: 'Show PATH Entries',
          description: 'Display PATH entries on separate lines',
          usage: 'echo $PATH | tr ":" "\\n"',
          example: `echo $PATH | tr ':' '\\n'    # Show PATH entries per line`,
        },
        {
          command: 'Add to PATH',
          description: 'Append directory to PATH',
          usage: 'export PATH=$PATH:/new/path',
          example: `export PATH=$PATH:/new/path  # Add to PATH`,
        },
        {
          command: 'Prepend to PATH',
          description: 'Add directory to beginning of PATH',
          usage: 'export PATH="/new/path:$PATH"',
          example: `export PATH="/new/path:$PATH" # Add to beginning of PATH`,
        },
        {
          command: 'Create Temporary File',
          description: 'Generate temporary file name',
          usage: 'temp_file=$(mktemp)',
          example: `temp_file=$(mktemp)           # Create temporary file`,
        },
        {
          command: 'Create Temporary Directory',
          description: 'Generate temporary directory',
          usage: 'temp_dir=$(mktemp -d)',
          example: `temp_dir=$(mktemp -d)         # Create temporary directory`,
        },
        {
          command: 'Load Environment File',
          description: 'Source environment variables from file',
          usage: 'source .env',
          example: `source .env                   # Load environment file
. .env                        # Alternative syntax`,
        },
        {
          command: 'Set Default Editor',
          description: 'Configure default text editor',
          usage: 'export EDITOR=vim',
          example: `export EDITOR=vim             # Set default editor`,
        },
        {
          command: 'Set Default Browser',
          description: 'Configure default web browser',
          usage: 'export BROWSER=firefox',
          example: `export BROWSER=firefox        # Set default browser`,
        },
        {
          command: 'Set Locale',
          description: 'Configure system locale',
          usage: 'export LANG=en_US.UTF-8',
          example: `export LANG=en_US.UTF-8       # Set locale`,
        },
        {
          command: 'Set Timezone',
          description: 'Configure system timezone',
          usage: 'export TZ=America/New_York',
          example: `export TZ=America/New_York    # Set timezone`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Text Processing',
      commands: [
        {
          command: 'Basic grep Search',
          description: 'Search for pattern in file',
          usage: 'grep "pattern" file',
          example: `grep "pattern" file          # Search for pattern`,
        },
        {
          command: 'Case Insensitive grep',
          description: 'Search ignoring case',
          usage: 'grep -i "pattern" file',
          example: `grep -i "pattern" file        # Case insensitive search`,
        },
        {
          command: 'Recursive grep Search',
          description: 'Search pattern in directory recursively',
          usage: 'grep -r "pattern" /dir/',
          example: `grep -r "pattern" /dir/       # Recursive search`,
        },
        {
          command: 'grep with Line Numbers',
          description: 'Show line numbers with matches',
          usage: 'grep -n "pattern" file',
          example: `grep -n "pattern" file        # Show line numbers`,
        },
        {
          command: 'Invert grep Match',
          description: 'Show lines that don\'t match pattern',
          usage: 'grep -v "pattern" file',
          example: `grep -v "pattern" file        # Invert match (show non-matching)`,
        },
        {
          command: 'Count grep Matches',
          description: 'Count number of matching lines',
          usage: 'grep -c "pattern" file',
          example: `grep -c "pattern" file        # Count matches`,
        },
        {
          command: 'List Files with Matches',
          description: 'Show files containing pattern',
          usage: 'grep -l "pattern" *.txt',
          example: `grep -l "pattern" *.txt       # Show files with matches`,
        },
        {
          command: 'Extended Regex grep',
          description: 'Use extended regular expressions',
          usage: 'grep -E "regex" file',
          example: `grep -E "regex" file          # Extended regex`,
        },
        {
          command: 'Show Only Matches',
          description: 'Display only matching parts',
          usage: 'grep -o "pattern" file',
          example: `grep -o "pattern" file        # Show only matches`,
        },
        {
          command: 'grep Context After',
          description: 'Show lines after match',
          usage: 'grep -A 5 "pattern" file',
          example: `grep -A 5 "pattern" file      # Show 5 lines after match`,
        },
        {
          command: 'grep Context Before',
          description: 'Show lines before match',
          usage: 'grep -B 5 "pattern" file',
          example: `grep -B 5 "pattern" file      # Show 5 lines before match`,
        },
        {
          command: 'grep Context Around',
          description: 'Show lines before and after match',
          usage: 'grep -C 5 "pattern" file',
          example: `grep -C 5 "pattern" file      # Show 5 lines before and after`,
        },
        {
          command: 'sed Replace All',
          description: 'Replace all occurrences in file',
          usage: 'sed \'s/old/new/g\' file',
          example: `sed \'s/old/new/g\' file        # Replace all occurrences`,
        },
        {
          command: 'sed Replace First',
          description: 'Replace only first occurrence',
          usage: 'sed \'s/old/new/\' file',
          example: `sed \'s/old/new/\' file         # Replace first occurrence`,
        },
        {
          command: 'sed Replace In-Place',
          description: 'Replace directly in file',
          usage: 'sed -i \'s/old/new/g\' file',
          example: `sed -i \'s/old/new/g\' file     # Replace in file (in-place)`,
        },
        {
          command: 'sed Replace with Backup',
          description: 'Replace with backup creation',
          usage: 'sed -i.bak \'s/old/new/g\' file',
          example: `sed -i.bak \'s/old/new/g\' file # Replace with backup`,
        },
        {
          command: 'sed Case Insensitive Replace',
          description: 'Replace ignoring case',
          usage: 'sed \'s/old/new/gi\' file',
          example: `sed \'s/old/new/gi\' file       # Case insensitive replace`,
        },
        {
          command: 'sed Replace Nth Occurrence',
          description: 'Replace specific occurrence',
          usage: 'sed \'s/old/new/2\' file',
          example: `sed \'s/old/new/2\' file        # Replace 2nd occurrence`,
        },
        {
          command: 'sed Delete Matching Lines',
          description: 'Delete lines matching pattern',
          usage: 'sed \'/pattern/d\' file',
          example: `sed \'/pattern/d\' file         # Delete lines matching pattern`,
        },
        {
          command: 'sed Delete First Line',
          description: 'Remove first line of file',
          usage: 'sed \'1d\' file',
          example: `sed \'1d\' file                 # Delete first line`,
        },
        {
          command: 'sed Delete Last Line',
          description: 'Remove last line of file',
          usage: 'sed \'$d\' file',
          example: `sed \'$d\' file                 # Delete last line`,
        },
        {
          command: 'sed Show Line Range',
          description: 'Display specific line range',
          usage: 'sed -n \'1,5p\' file',
          example: `sed -n \'1,5p\' file            # Show lines 1-5`,
        },
        {
          command: 'sed Show Pattern Range',
          description: 'Show lines between patterns',
          usage: 'sed -n \'/start/,/end/p\' file',
          example: `sed -n \'/start/,/end/p\' file  # Show lines between patterns`,
        },
        {
          command: 'awk Print First Column',
          description: 'Extract first column from file',
          usage: 'awk \'{print $1}\' file',
          example: `awk \'{print $1}\' file         # Print first column`,
        },
        {
          command: 'awk Print Last Column',
          description: 'Extract last column from file',
          usage: 'awk \'{print $NF}\' file',
          example: `awk \'{print $NF}\' file         # Print last column`,
        },
        {
          command: 'awk Print Line Numbers',
          description: 'Add line numbers to output',
          usage: 'awk \'{print NR, $0}\' file',
          example: `awk \'{print NR, $0}\' file     # Print line number and content`,
        },
        {
          command: 'awk Print Matching Lines',
          description: 'Print lines matching pattern',
          usage: 'awk \'/pattern/ {print}\' file',
          example: `awk \'/pattern/ {print}\' file  # Print lines matching pattern`,
        },
        {
          command: 'awk Print Line Lengths',
          description: 'Show length of each line',
          usage: 'awk \'{print length($0)}\' file',
          example: `awk \'{print length($0)}\' file # Print line lengths`,
        },
        {
          command: 'awk with Custom Delimiter',
          description: 'Use custom field separator',
          usage: 'awk -F: \'{print $1}\' file',
          example: `awk -F: \'{print $1}\' /etc/passwd # Use : as delimiter`,
        },
        {
          command: 'awk Sum Column',
          description: 'Calculate sum of column values',
          usage: 'awk \'{sum+=$1} END {print sum}\' file',
          example: `awk \'{sum+=$1} END {print sum}\' file # Sum first column`,
        },
        {
          command: 'sort Alphabetically',
          description: 'Sort lines alphabetically',
          usage: 'sort file',
          example: `sort file                     # Sort alphabetically`,
        },
        {
          command: 'sort Numerically',
          description: 'Sort lines numerically',
          usage: 'sort -n file',
          example: `sort -n file                  # Sort numerically`,
        },
        {
          command: 'sort Reverse',
          description: 'Sort in reverse order',
          usage: 'sort -r file',
          example: `sort -r file                  # Reverse sort`,
        },
        {
          command: 'sort by Column',
          description: 'Sort by specific column',
          usage: 'sort -k2 file',
          example: `sort -k2 file                 # Sort by second column`,
        },
        {
          command: 'sort Unique Lines',
          description: 'Sort and remove duplicates',
          usage: 'sort -u file',
          example: `sort -u file                  # Sort and remove duplicates`,
        },
        {
          command: 'Remove Duplicate Lines',
          description: 'Remove adjacent duplicate lines',
          usage: 'uniq file',
          example: `uniq file                     # Remove duplicate lines`,
        },
        {
          command: 'Count Duplicate Lines',
          description: 'Count occurrences of each line',
          usage: 'uniq -c file',
          example: `uniq -c file                  # Count duplicate lines`,
        },
        {
          command: 'cut Extract Columns',
          description: 'Extract specific columns',
          usage: 'cut -d: -f1,3 file',
          example: `cut -d: -f1,3 /etc/passwd     # Extract columns 1 and 3`,
        },
        {
          command: 'cut by Character Position',
          description: 'Extract by character position',
          usage: 'cut -c1-10 file',
          example: `cut -c1-10 file               # Extract characters 1-10`,
        },
        {
          command: 'tr Translate Characters',
          description: 'Translate or delete characters',
          usage: 'tr \'[:lower:]\' \'[:upper:]\'',
          example: `echo "hello" | tr a-z A-Z     # Convert to uppercase
tr -d \'[:digit:]\' < file      # Remove digits`,
        },
        {
          command: 'wc Count Lines',
          description: 'Count lines in file',
          usage: 'wc -l file',
          example: `wc -l file                    # Count lines`,
        },
        {
          command: 'wc Count Words',
          description: 'Count words in file',
          usage: 'wc -w file',
          example: `wc -w file                    # Count words`,
        },
        {
          command: 'wc Count Characters',
          description: 'Count characters in file',
          usage: 'wc -c file',
          example: `wc -c file                    # Count characters`,
        },
      ],
    },
    {
      title: 'Process Management',
      commands: [
        {
          command: 'List Running Processes',
          description: 'Show all running processes',
          usage: 'ps aux',
          example: `ps aux                       # Show all running processes`,
        },
        {
          command: 'List User Processes',
          description: 'Show processes for current user',
          usage: 'ps -u $USER',
          example: `ps -u $USER                  # Show current user processes`,
        },
        {
          command: 'Find Process by Name',
          description: 'Search for specific process',
          usage: 'pgrep process_name',
          example: `pgrep nginx                  # Find nginx process
pgrep -l python              # Find python with names`,
        },
        {
          command: 'Monitor Processes',
          description: 'Real-time process monitoring',
          usage: 'top command',
          example: `top                          # Interactive process monitor
htop                         # Enhanced process monitor (if installed)`,
        },
        {
          command: 'Kill Process by PID',
          description: 'Terminate process by ID',
          usage: 'kill PID',
          example: `kill 1234                    # Kill process with PID 1234`,
        },
        {
          command: 'Force Kill Process',
          description: 'Force terminate process',
          usage: 'kill -9 PID',
          example: `kill -9 1234                 # Force kill process`,
        },
        {
          command: 'Kill Process by Name',
          description: 'Terminate process by name',
          usage: 'killall process_name',
          example: `killall nginx                # Kill all nginx processes`,
        },
        {
          command: 'Run Process in Background',
          description: 'Start command in background',
          usage: 'command &',
          example: `sleep 300 &                  # Run sleep in background`,
        },
        {
          command: 'List Background Jobs',
          description: 'Show background jobs',
          usage: 'jobs command',
          example: `jobs                         # List background jobs`,
        },
        {
          command: 'Bring Job to Foreground',
          description: 'Move background job to foreground',
          usage: 'fg %job_number',
          example: `fg %1                        # Bring job 1 to foreground`,
        },
        {
          command: 'Send Job to Background',
          description: 'Move foreground job to background',
          usage: 'bg %job_number',
          example: `bg %1                        # Send job 1 to background`,
        },
        {
          command: 'Stop Process',
          description: 'Pause process execution',
          usage: 'kill -STOP PID',
          example: `kill -STOP 1234              # Stop process`,
        },
        {
          command: 'Resume Process',
          description: 'Resume stopped process',
          usage: 'kill -CONT PID',
          example: `kill -CONT 1234              # Resume process`,
        },
        {
          command: 'Check Process Status',
          description: 'Verify process is running',
          usage: 'kill -0 PID',
          example: `if kill -0 1234; then echo "Running"; fi`,
        },
        {
          command: 'Show Process Tree',
          description: 'Display process hierarchy',
          usage: 'pstree command',
          example: `pstree                       # Show process tree
pstree -p                    # Show with PIDs`,
        },
        {
          command: 'Monitor System Resources',
          description: 'Check CPU and memory usage',
          usage: 'free, df, du commands',
          example: `free -h                      # Show memory usage
df -h                        # Show disk usage
du -sh *                     # Show directory sizes`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Shell Scripting',
      commands: [
        {
          command: 'Create Basic Script',
          description: 'Create executable shell script',
          usage: '#!/bin/bash script structure',
          example: `#!/bin/bash
# Basic script structure
echo "Hello, World!"

# Make executable:
chmod +x script.sh
./script.sh`,
        },
        {
          command: 'Script Arguments',
          description: 'Handle command line arguments',
          usage: '$1, $2, $#, $@, $0',
          example: `#!/bin/bash
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Number of arguments: $#"
echo "All arguments: $@"`,
        },
        {
          command: 'Check Arguments Count',
          description: 'Validate number of arguments',
          usage: 'if [ $# -ne 2 ]',
          example: `#!/bin/bash
if [ $# -ne 2 ]; then
    echo "Usage: $0 <arg1> <arg2>"
    exit 1
fi`,
        },
        {
          command: 'Read User Input',
          description: 'Get input from user',
          usage: 'read command',
          example: `#!/bin/bash
echo "Enter your name:"
read name
echo "Hello, $name!"`,
        },
        {
          command: 'Read with Prompt',
          description: 'Read input with custom prompt',
          usage: 'read -p "prompt" variable',
          example: `#!/bin/bash
read -p "Enter your age: " age
echo "You are $age years old"`,
        },
        {
          command: 'Silent Input',
          description: 'Read password without echo',
          usage: 'read -s variable',
          example: `#!/bin/bash
read -s -p "Enter password: " password
echo
echo "Password received"`,
        },
        {
          command: 'If Statement',
          description: 'Conditional execution',
          usage: 'if [ condition ]; then ... fi',
          example: `#!/bin/bash
if [ $USER == "root" ]; then
    echo "Running as root"
else
    echo "Running as regular user"
fi`,
        },
        {
          command: 'If-Else Statement',
          description: 'Two-way conditional',
          usage: 'if [ condition ]; then ... else ... fi',
          example: `#!/bin/bash
if [ -f "file.txt" ]; then
    echo "File exists"
else
    echo "File does not exist"
fi`,
        },
        {
          command: 'If-Elif-Else',
          description: 'Multi-way conditional',
          usage: 'if [ condition ]; then ... elif ... else ... fi',
          example: `#!/bin/bash
if [ $1 -gt 90 ]; then
    echo "Grade: A"
elif [ $1 -gt 80 ]; then
    echo "Grade: B"
else
    echo "Grade: C"
fi`,
        },
        {
          command: 'For Loop',
          description: 'Iterate over list',
          usage: 'for item in list; do ... done',
          example: `#!/bin/bash
for i in 1 2 3 4 5; do
    echo "Number: $i"
done`,
        },
        {
          command: 'For Loop Range',
          description: 'Iterate over number range',
          usage: 'for i in {1..10}; do ... done',
          example: `#!/bin/bash
for i in {1..10}; do
    echo "Count: $i"
done`,
        },
        {
          command: 'While Loop',
          description: 'Loop while condition is true',
          usage: 'while [ condition ]; do ... done',
          example: `#!/bin/bash
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done`,
        },
        {
          command: 'Until Loop',
          description: 'Loop until condition is true',
          usage: 'until [ condition ]; do ... done',
          example: `#!/bin/bash
count=1
until [ $count -gt 5 ]; do
    echo "Count: $count"
    ((count++))
done`,
        },
        {
          command: 'Case Statement',
          description: 'Pattern matching conditional',
          usage: 'case $var in pattern) ... ;; esac',
          example: `#!/bin/bash
case $1 in
    start)
        echo "Starting service"
        ;;
    stop)
        echo "Stopping service"
        ;;
    *)
        echo "Usage: $0 {start|stop}"
        ;;
esac`,
        },
        {
          command: 'Function Definition',
          description: 'Define reusable functions',
          usage: 'function_name() { ... }',
          example: `#!/bin/bash
greet() {
    echo "Hello, $1!"
}

greet "World"
greet "Bash"`,
        },
        {
          command: 'Function with Return Value',
          description: 'Functions that return values',
          usage: 'return command',
          example: `#!/bin/bash
check_file() {
    if [ -f "$1" ]; then
        return 0  # Success
    else
        return 1  # Failure
    fi
}

if check_file "test.txt"; then
    echo "File exists"
fi`,
        },
        {
          command: 'Local Variables in Functions',
          description: 'Use local variables in functions',
          usage: 'local variable=value',
          example: `#!/bin/bash
calculate() {
    local result=$(( $1 + $2 ))
    echo "Result: $result"
}

calculate 5 3`,
        },
        {
          command: 'Array Declaration',
          description: 'Create and use arrays',
          usage: 'array=(value1 value2 value3)',
          example: `#!/bin/bash
fruits=("apple" "banana" "cherry")
echo "First fruit: \${fruits[0]}"
echo "All fruits: \${fruits[@]}"`,
        },
        {
          command: 'Array Operations',
          description: 'Work with array elements',
          usage: '${array[@]}, ${#array[@]}',
          example: `#!/bin/bash
numbers=(1 2 3 4 5)
echo "All elements: \${numbers[@]}"
echo "Number of elements: \${#numbers[@]}"
echo "Last element: \${numbers[-1]}"`,
        },
        {
          command: 'Associative Arrays',
          description: 'Use key-value arrays',
          usage: 'declare -A array',
          example: `#!/bin/bash
declare -A person
person[name]="John"
person[age]=30
echo "Name: \${person[name]}"
echo "Age: \${person[age]}"`,
        },
        {
          command: 'String Manipulation',
          description: 'Common string operations',
          usage: '${var:pos:len}, ${var//old/new}',
          example: `#!/bin/bash
text="Hello, World!"
echo "Length: \${#text}"
echo "Substring: \${text:0:5}"
echo "Replace: \${text/World/Bash}"`,
        },
        {
          command: 'Math Operations',
          description: 'Perform arithmetic calculations',
          usage: '$((expression)), let, expr',
          example: `#!/bin/bash
result=$(( 5 + 3 ))
echo "5 + 3 = $result"

let result=10*2
echo "10 * 2 = $result"

result=$(expr 20 / 4)
echo "20 / 4 = $result"`,
        },
        {
          command: 'File Test Operators',
          description: 'Check file properties',
          usage: '-f, -d, -r, -w, -x, -s',
          example: `#!/bin/bash
if [ -f "file.txt" ]; then
    echo "Regular file exists"
fi

if [ -d "directory" ]; then
    echo "Directory exists"
fi

if [ -r "file.txt" ]; then
    echo "File is readable"
fi`,
        },
        {
          command: 'String Comparison',
          description: 'Compare string values',
          usage: '=, !=, <, >, -z, -n',
          example: `#!/bin/bash
if [ "$str1" = "$str2" ]; then
    echo "Strings are equal"
fi

if [ -z "$str" ]; then
    echo "String is empty"
fi`,
        },
        {
          command: 'Numeric Comparison',
          description: 'Compare numbers',
          usage: '-eq, -ne, -lt, -le, -gt, -ge',
          example: `#!/bin/bash
if [ $num1 -eq $num2 ]; then
    echo "Numbers are equal"
fi

if [ $num1 -gt $num2 ]; then
    echo "First is greater"
fi`,
        },
        {
          command: 'Logical Operations',
          description: 'Combine conditions',
          usage: '&&, ||, !',
          example: `#!/bin/bash
if [ -f "file.txt" ] && [ -r "file.txt" ]; then
    echo "File exists and is readable"
fi

if [ ! -d "directory" ]; then
    echo "Directory does not exist"
fi`,
        },
        {
          command: 'Exit Script',
          description: 'Terminate script with status',
          usage: 'exit [status_code]',
          example: `#!/bin/bash
if [ $# -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

echo "Processing $1"
exit 0`,
        },
        {
          command: 'Source External Script',
          description: 'Include external script file',
          usage: 'source script.sh or . script.sh',
          example: `#!/bin/bash
source config.sh
# or
. config.sh

echo "Config loaded"`,
        },
      ],
    },
    {
      title: 'Advanced Scripting',
      commands: [
        {
          command: 'Command Substitution',
          description: 'Use command output as variable',
          usage: '$(command) or \`command\`',
          example: `#!/bin/bash
current_dir=$(pwd)
files_count=$(ls -1 | wc -l)
echo "Current directory: $current_dir"
echo "Files count: $files_count"`,
        },
        {
          command: 'Process Substitution',
          description: 'Use process output as file',
          usage: '>(command) <(command)',
          example: `#!/bin/bash
# Compare two directories
diff <(ls dir1) <(ls dir2)

# Sort and unique
sort <(cat file1 file2) | uniq`,
        },
        {
          command: 'Pipe and Redirect',
          description: 'Control input/output streams',
          usage: '|, >, >>, <, 2>, 2>&1',
          example: `#!/bin/bash
# Pipe to another command
ls -l | grep ".txt"

# Redirect output to file
echo "Hello" > output.txt
echo "World" >> output.txt

# Redirect error to file
command 2> error.log

# Redirect both output and error
command > output.log 2>&1`,
        },
        {
          command: 'Here Document',
          description: 'Multi-line input in script',
          usage: '<<EOF ... EOF',
          example: `#!/bin/bash
cat <<EOF
This is a multi-line
string that can contain
quotes and variables like $HOME
EOF`,
        },
        {
          command: 'Here String',
          description: 'Pass string as input to command',
          usage: '<<< "string"',
          example: `#!/bin/bash
# Count words in string
wc -w <<< "Hello world this is bash"

# Use with grep
grep "world" <<< "Hello world bash"`,
        },
        {
          command: 'Signal Handling',
          description: 'Handle signals in script',
          usage: 'trap command signal',
          example: `#!/bin/bash
trap 'echo "Cleaning up..."; rm -f /tmp/tempfile' EXIT

# Create temp file
touch /tmp/tempfile

# Script logic
echo "Working..."
sleep 5

# Cleanup happens automatically on exit`,
        },
        {
          command: 'Error Handling',
          description: 'Handle errors in script',
          usage: 'set -e, trap ERR',
          example: `#!/bin/bash
set -e  # Exit on any error

trap 'echo "Error occurred at line $LINENO"' ERR

# Commands that might fail
command1
command2

echo "All commands completed successfully"`,
        },
        {
          command: 'Debug Script',
          description: 'Debug shell script execution',
          usage: 'set -x, bash -x script.sh',
          example: `#!/bin/bash
set -x  # Enable debug mode

# Commands will be printed as they execute
echo "Debug mode enabled"
result=$((5 + 3))
echo "Result: $result"

set +x  # Disable debug mode
echo "Debug mode disabled"`,
        },
        {
          command: 'Get Options',
          description: 'Parse command line options',
          usage: 'getopts command',
          example: `#!/bin/bash
while getopts ":a:b:" opt; do
    case $opt in
        a) echo "Option -a with argument: $OPTARG" ;;
        b) echo "Option -b with argument: $OPTARG" ;;
        \?) echo "Invalid option: -$OPTARG" ;;
    esac
done`,
        },
        {
          command: 'Temporary Files',
          description: 'Create and manage temporary files',
          usage: 'mktemp, trap for cleanup',
          example: `#!/bin/bash
temp_file=$(mktemp)
trap "rm -f $temp_file" EXIT

echo "Working with temp file: $temp_file"
echo "Data" > $temp_file

# File will be cleaned up on exit`,
        },
        {
          command: 'Parallel Processing',
          description: 'Run commands in parallel',
          usage: '&, wait command',
          example: `#!/bin/bash
# Start multiple background processes
process1 &
pid1=$!

process2 &
pid2=$!

# Wait for all to complete
wait $pid1
wait $pid2

echo "All processes completed"`,
        },
        {
          command: 'Network Operations',
          description: 'Basic network scripting',
          usage: 'curl, wget, nc',
          example: `#!/bin/bash
# Download file
wget http://example.com/file.txt

# HTTP request with curl
response=$(curl -s http://api.example.com/data)

# Check if port is open
nc -z localhost 8080 && echo "Port 8080 is open"`,
        },
        {
          command: 'JSON Processing',
          description: 'Work with JSON data',
          usage: 'jq command',
          example: `#!/bin/bash
# Parse JSON with jq
curl -s http://api.example.com/data | jq '.name'

# Extract multiple fields
curl -s http://api.example.com/data | jq '{name, age}'`,
        },
        {
          command: 'XML Processing',
          description: 'Parse XML data',
          usage: 'xmllint command',
          example: `#!/bin/bash
# Extract data from XML
xmllint --xpath "//title/text()" data.xml

# Validate XML
xmllint --valid data.xml`,
        },
      ],
    },
    {
      title: 'System Administration',
      commands: [
        {
          command: 'System Information',
          description: 'Get system details',
          usage: 'uname, lscpu, free, df',
          example: `#!/bin/bash
echo "=== System Information ==="
uname -a                    # System info
lscpu                      # CPU info
free -h                    # Memory info
df -h                      # Disk info
uptime                     # Uptime`,
        },
        {
          command: 'User Management',
          description: 'Manage system users',
          usage: 'useradd, usermod, userdel',
          example: `#!/bin/bash
# Add user
sudo useradd -m -s /bin/bash username

# Modify user
sudo usermod -aG sudo username

# Delete user
sudo userdel -r username

# List users
cat /etc/passwd | grep -E "bash|sh"`,
        },
        {
          command: 'Service Management',
          description: 'Manage system services',
          usage: 'systemctl commands',
          example: `#!/bin/bash
# Start service
sudo systemctl start nginx

# Stop service
sudo systemctl stop nginx

# Enable service (start on boot)
sudo systemctl enable nginx

# Check status
systemctl status nginx

# List all services
systemctl list-units --type=service`,
        },
        {
          command: 'Log Management',
          description: 'Work with system logs',
          usage: 'journalctl, log files',
          example: `#!/bin/bash
# View system logs
journalctl -f               # Follow logs
journalctl -u nginx        # Service logs
journalctl --since "1 hour ago"

# Traditional log files
tail -f /var/log/syslog
tail -f /var/log/auth.log`,
        },
        {
          command: 'Backup Script',
          description: 'Create backup automation',
          usage: 'tar, rsync commands',
          example: `#!/bin/bash
backup_dir="/backup/$(date +%Y%m%d)"
source_dir="/home/user"

# Create backup directory
mkdir -p "$backup_dir"

# Create compressed backup
tar -czf "$backup_dir/home_backup.tar.gz" "$source_dir"

# Sync with rsync
rsync -av --delete "$source_dir/" "$backup_dir/sync/"`,
        },
        {
          command: 'Cron Jobs',
          description: 'Schedule recurring tasks',
          usage: 'crontab command',
          example: `#!/bin/bash
# Edit crontab
crontab -e

# Crontab format:
# * * * * * command
# | | | | |
# | | | | +----- day of week (0-7)
# | | | +------- month (1-12)
# | | +--------- day of month (1-31)
# | +----------- hour (0-23)
# +------------- minute (0-59)

# Examples:
# 0 2 * * * /path/to/backup.sh    # Daily at 2 AM
# */15 * * * * /path/to/check.sh  # Every 15 minutes`,
        },
        {
          command: 'Disk Usage Analysis',
          description: 'Analyze disk space usage',
          usage: 'du, find commands',
          example: `#!/bin/bash
echo "=== Disk Usage Analysis ==="

# Show directory sizes
du -sh /home/* | sort -hr | head -10

# Find large files
find / -type f -size +100M 2>/dev/null | head -10

# Show disk usage by filesystem
df -h`,
        },
        {
          command: 'Memory Usage Analysis',
          description: 'Analyze memory consumption',
          usage: 'free, ps, smem',
          example: `#!/bin/bash
echo "=== Memory Usage ==="

# General memory info
free -h

# Top memory consumers
ps aux --sort=-%mem | head -10

# Memory by process
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -10`,
        },
        {
          command: 'Network Configuration',
          description: 'Check network settings',
          usage: 'ip, ifconfig, netstat',
          example: `#!/bin/bash
echo "=== Network Information ==="

# IP addresses
ip addr show

# Network interfaces
ifconfig -a

# Open ports
netstat -tuln

# Network connections
ss -tuln`,
        },
        {
          command: 'Security Audit',
          description: 'Basic security checks',
          usage: 'Various security commands',
          example: `#!/bin/bash
echo "=== Security Audit ==="

# Check for open ports
ss -tuln | grep LISTEN

# Check failed login attempts
grep "Failed password" /var/log/auth.log | tail -10

# Check sudo usage
grep sudo /var/log/auth.log | tail -10

# Check file permissions
find /etc -type f -perm /o+w 2>/dev/null`,
        },
      ],
    },
    {
      title: 'Performance Monitoring',
      commands: [
        {
          command: 'CPU Monitoring',
          description: 'Monitor CPU usage',
          usage: 'top, mpstat, ps',
          example: `#!/bin/bash
echo "=== CPU Usage ==="

# Overall CPU usage
top -bn1 | grep "Cpu(s)"

# CPU usage by process
ps aux --sort=-%cpu | head -10

# Per-core usage
mpstat -P ALL 1 1`,
        },
        {
          command: 'Memory Monitoring',
          description: 'Monitor memory usage',
          usage: 'free, vmstat, smem',
          example: `#!/bin/bash
echo "=== Memory Usage ==="

# Memory overview
free -h

# Memory statistics
vmstat 1 3

# Memory by process
ps aux --sort=-%mem | head -10`,
        },
        {
          command: 'Disk I/O Monitoring',
          description: 'Monitor disk performance',
          usage: 'iostat, iotop',
          example: `#!/bin/bash
echo "=== Disk I/O ==="

# Disk I/O statistics
iostat -x 1 3

# I/O by process (if iotop available)
sudo iotop -b -n1 | head -10`,
        },
        {
          command: 'Network Monitoring',
          description: 'Monitor network traffic',
          usage: 'iftop, nethogs, netstat',
          example: `#!/bin/bash
echo "=== Network Usage ==="

# Network connections
netstat -i

# Network statistics
cat /proc/net/dev

# Bandwidth by process (if nethogs available)
sudo nethogs -t -c 1`,
        },
        {
          command: 'Process Monitoring',
          description: 'Monitor specific processes',
          usage: 'ps, pgrep, pidstat',
          example: `#!/bin/bash
process_name="nginx"

if pgrep "$process_name" > /dev/null; then
    echo "=== $process_name Process Info ==="
    ps aux | grep "$process_name"
    
    echo "=== Resource Usage ==="
    pidstat -p $(pgrep "$process_name") 1 3
else
    echo "$process_name is not running"
fi`,
        },
        {
          command: 'System Load',
          description: 'Check system load average',
          usage: 'uptime, w, /proc/loadavg',
          example: `#!/bin/bash
echo "=== System Load ==="

# Load average and uptime
uptime

# Current users and their processes
w

# Detailed load info
cat /proc/loadavg`,
        },
        {
          command: 'Temperature Monitoring',
          description: 'Monitor system temperature',
          usage: 'sensors, /sys/class/thermal',
          example: `#!/bin/bash
echo "=== Temperature ==="

# CPU temperature (if sensors available)
if command -v sensors &> /dev/null; then
    sensors
fi

# Thermal zones
for zone in /sys/class/thermal/thermal_zone*/temp; do
    if [ -f "$zone" ]; then
        temp=$(cat "$zone")
        temp_celsius=$((temp / 1000))
        echo "$(basename $(dirname $zone)): \${temp_celsius}°C"
    fi
done`,
        },
        {
          command: 'Performance Alert',
          description: 'Alert on performance thresholds',
          usage: 'Monitoring script with alerts',
          example: `#!/bin/bash
# Performance thresholds
CPU_THRESHOLD=80
MEMORY_THRESHOLD=90
DISK_THRESHOLD=85

# Check CPU usage
cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | sed 's/%us,//')
if (( $(echo "$cpu_usage > $CPU_THRESHOLD" | bc -l) )); then
    echo "ALERT: CPU usage is \${cpu_usage}%"
fi

# Check memory usage
memory_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
if [ "$memory_usage" -gt "$MEMORY_THRESHOLD" ]; then
    echo "ALERT: Memory usage is \${memory_usage}%"
fi

# Check disk usage
disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$disk_usage" -gt "$DISK_THRESHOLD" ]; then
    echo "ALERT: Disk usage is \${disk_usage}%"
fi`,
        },
      ],
    },
    {
      title: 'Security and Hardening',
      commands: [
        {
          command: 'Secure File Permissions',
          description: 'Set secure file permissions',
          usage: 'find with chmod',
          example: `#!/bin/bash
# Secure web directory permissions
find /var/www -type f -exec chmod 644 {} \\;
find /var/www -type d -exec chmod 755 {} \\;

# Secure SSH keys
find /home -type f -name "*.ssh" -exec chmod 600 {} \\;
find /home -type d -name ".ssh" -exec chmod 700 {} \\;`,
        },
        {
          command: 'Check Open Ports',
          description: 'Audit network open ports',
          usage: 'ss, netstat commands',
          example: `#!/bin/bash
echo "=== Open Ports ==="
ss -tuln | grep LISTEN

echo "=== Running Services ==="
systemctl list-units --type=service --state=running`,
        },
        {
          command: 'User Security Audit',
          description: 'Audit user security',
          usage: 'Check user permissions and access',
          example: `#!/bin/bash
echo "=== Users with shell access ==="
cat /etc/passwd | grep -E "bash|sh|zsh"

echo "=== Users with sudo access ==="
groups $(whoami)
sudo -l -U $(whoami)

echo "=== Recent logins ==="
last -n 10`,
        },
        {
          command: 'File Integrity Check',
          description: 'Monitor file integrity',
          usage: 'checksums and verification',
          example: `#!/bin/bash
monitor_integrity() {
    local dir=$1
    local checksum_file="checksums.md5"
    
    # Generate checksums
    find "$dir" -type f -exec md5sum {} \\; > "$checksum_file"
    echo "Checksums saved to $checksum_file"
    
    # Verify integrity
    md5sum -c "$checksum_file"
}

monitor_integrity "/etc"`,
        },
        {
          command: 'Password Policy Check',
          description: 'Verify password security settings',
          usage: 'Check login.defs and user passwords',
          example: `#!/bin/bash
echo "=== Password Policy ==="
grep "^PASS_MAX_DAYS" /etc/login.defs
grep "^PASS_MIN_DAYS" /etc/login.defs
grep "^PASS_WARN_AGE" /etc/login.defs

echo "=== Users with expired passwords ==="
sudo chage -l $(whoami) | grep "Password expires"`,
        },
        {
          command: 'Firewall Setup',
          description: 'Configure UFW firewall',
          usage: 'ufw commands',
          example: `#!/bin/bash
# Basic UFW setup
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw status verbose`,
        },
        {
          command: 'SSH Hardening',
          description: 'Secure SSH configuration',
          usage: 'Modify sshd_config',
          example: `#!/bin/bash
sshd_config="/etc/ssh/sshd_config"

# Backup original config
sudo cp "$sshd_config" "$sshd_config.backup"

# Security settings
sudo sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' "$sshd_config"
sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' "$sshd_config"
sudo sed -i 's/#Port 22/Port 2222/' "$sshd_config"

echo "SSH configuration hardened. Restart SSH service with:"
echo "sudo systemctl restart sshd"`,
        },
        {
          command: 'Log Monitoring',
          description: 'Monitor security logs',
          usage: 'grep and tail on log files',
          example: `#!/bin/bash
echo "=== Recent Security Events ==="

# Failed login attempts
grep "Failed password" /var/log/auth.log | tail -10

# SSH connections
grep "Accepted" /var/log/auth.log | tail -10

# Sudo usage
grep sudo /var/log/auth.log | tail -10

# Failed authentication
grep "authentication failure" /var/log/auth.log | tail -10`,
        },
        {
          command: 'System Update Security',
          description: 'Secure system update process',
          usage: 'apt, yum security updates',
          example: `#!/bin/bash
# Security updates for Ubuntu/Debian
if command -v apt &> /dev/null; then
    sudo apt update
    sudo apt upgrade -y
    sudo apt autoremove -y
fi

# Security updates for CentOS/RHEL
if command -v yum &> /dev/null; then
    sudo yum update -y --security
    sudo yum autoremove -y
fi`,
        },
      ],
    },
    {
      title: 'Best Practices and Optimization',
      commands: [
        {
          command: 'Script Best Practices',
          description: 'Write maintainable scripts',
          usage: 'Scripting guidelines',
          example: `#!/bin/bash
# Best practices template

# Always use set -euo pipefail
set -euo pipefail

# Use readonly for constants
readonly SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
readonly LOG_FILE="/var/log/my_script.log"

# Use functions for modularity
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Validate input
validate_input() {
    if [[ ! -z "$1" && -n "$1" ]]; then
        return 0
    else
        return 1
    fi
}

# Main function
main() {
    log_message "Script started"
    
    # Script logic here
    
    log_message "Script completed"
}

# Execute main function
main "$@"`,
        },
        {
          command: 'Error Handling Patterns',
          description: 'Robust error handling',
          usage: 'trap, exit codes, validation',
          example: `#!/bin/bash
set -euo pipefail

# Error handling function
error_handler() {
    local line_number=$1
    echo "Error occurred in script at line $line_number"
    cleanup
    exit 1
}

# Cleanup function
cleanup() {
    echo "Performing cleanup..."
    # Cleanup operations
}

# Set error trap
trap 'error_handler $LINENO' ERR

# Resource cleanup trap
trap cleanup EXIT

# Validate environment
if ! command -v required_command &> /dev/null; then
    echo "Required command not found"
    exit 1
fi`,
        },
        {
          command: 'Performance Optimization',
          description: 'Optimize script performance',
          usage: 'Efficient scripting techniques',
          example: `#!/bin/bash
# Use built-in commands instead of external ones
# Slow: ls | wc -l
# Fast: echo *

# Use arrays instead of string manipulation
files=($(ls))
echo "\${#files[@]}"

# Avoid subshells when possible
# Slow: result=$(command)
# Fast: command > tempfile; read result < tempfile

# Use process substitution for large data
while read -r line; do
    process "$line"
done < <(find . -type f)

# Parallel processing
for item in "\${array[@]}"; do
    process "$item" &
done
wait`,
        },
        {
          command: 'Memory Management',
          description: 'Manage memory usage in scripts',
          usage: 'Limit memory consumption',
          example: `#!/bin/bash
# Process large files in chunks
process_large_file() {
    local file="$1"
    local chunk_size=1000
    
    while IFS= read -r -n "$chunk_size" chunk; do
        process_chunk "$chunk"
    done < "$file"
}

# Use temp files for large data
large_data_processing() {
    local temp_file=$(mktemp)
    
    generate_large_data > "$temp_file"
    
    while read -r line; do
        process_line "$line"
    done < "$temp_file"
    
    rm -f "$temp_file"
}

# Limit memory with ulimit
ulimit -v 1048576  # Limit virtual memory to 1GB`,
        },
        {
          command: 'Logging and Debugging',
          description: 'Implement comprehensive logging',
          usage: 'Log levels, debugging techniques',
          example: `#!/bin/bash
# Logging levels
readonly LOG_ERROR=1
readonly LOG_WARN=2
readonly LOG_INFO=3
readonly LOG_DEBUG=4

# Current log level
readonly LOG_LEVEL=\${LOG_LEVEL:-$LOG_INFO}

log() {
    local level=$1
    local message=$2
    
    if [ "$level" -le "$LOG_LEVEL" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') [$level] $message"
    fi
}

# Usage examples
log $LOG_ERROR "This is an error message"
log $LOG_WARN "This is a warning"
log $LOG_INFO "This is info"
log $LOG_DEBUG "This is debug info"

# Debug mode
if [ "\${DEBUG:-0}" = "1" ]; then
    set -x
fi`,
        },
        {
          command: 'Configuration Management',
          description: 'Handle configuration files',
          usage: 'Source configs, validation',
          example: `#!/bin/bash
# Configuration file handling
load_config() {
    local config_file="$1"
    
    if [ ! -f "$config_file" ]; then
        echo "Configuration file $config_file not found"
        return 1
    fi
    
    # Source config with validation
    set -a
    source "$config_file"
    set +a
    
    # Validate required config
    local required_vars=("DB_HOST" "DB_USER" "DB_PASS")
    for var in "\${required_vars[@]}"; do
        if [ -z "\${!var}" ]; then
            echo "Required configuration variable $var is missing"
            return 1
        fi
    done
    
    echo "Configuration loaded successfully"
}

# Usage
load_config "config.env"`,
        },
        {
          command: 'Testing Scripts',
          description: 'Test shell scripts effectively',
          usage: 'Unit testing, validation',
          example: `#!/bin/bash
# Simple testing framework

test_count=0
pass_count=0

assert_equals() {
    local expected="$1"
    local actual="$2"
    local message="$3"
    
    ((test_count++))
    
    if [ "$expected" = "$actual" ]; then
        echo "✓ PASS: $message"
        ((pass_count++))
    else
        echo "✗ FAIL: $message"
        echo "  Expected: $expected"
        echo "  Actual: $actual"
    fi
}

# Test functions
test_addition() {
    result=$((2 + 3))
    assert_equals "5" "$result" "Addition test"
}

test_string_concat() {
    result="hello world"
    assert_equals "hello world" "$result" "String concatenation test"
}

# Run tests
test_addition
test_string_concat

echo
echo "Tests: $test_count, Passed: $pass_count, Failed: $((test_count - pass_count))"

# Exit with failure if any tests failed
if [ "$pass_count" -ne "$test_count" ]; then
    exit 1
fi`,
        },
      ],
    },
  ],
};
