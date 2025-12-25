import { Terminal } from 'lucide-react';

export const macCheatsheet = {
  id: 'mac',
  name: 'macOS Commands',
  description: 'Unlock macOS power from terminal basics to advanced system administration',
  icon: Terminal,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Terminal',
      commands: [
        {
          command: 'Terminal Basics',
          description: 'Opening and understanding the macOS Terminal',
          usage: 'Open Terminal from Applications > Utilities or search with Spotlight',
          example: '# Open Terminal with Spotlight: Cmd+Space, type "Terminal"\n# Terminal uses Zsh by default (since macOS Catalina)\n# Commands are case-sensitive\n# Use Tab for auto-completion',
        },
        {
          command: 'clear',
          description: 'Clear terminal screen',
          usage: 'clear',
          example: 'clear\n# Or use Cmd+K to clear terminal',
        },
        {
          command: 'exit',
          description: 'Exit terminal session',
          usage: 'exit',
          example: 'exit\n# Or use Cmd+Q to quit Terminal',
        },
        {
          command: 'man',
          description: 'Display manual pages for commands',
          usage: 'man command_name',
          example: 'man ls\nman cd\nman -k search_term  # Search manuals',
        },
        {
          command: '--help',
          description: 'Show help for most commands',
          usage: 'command --help',
          example: 'ls --help\ncd --help\nopen --help',
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
          example: 'pwd\n/Users/username\n# Shows current directory path',
        },
        {
          command: 'cd',
          description: 'Change directory',
          usage: 'cd [directory]',
          example: 'cd ~/Desktop\ncd ~              # Home directory\ncd ..             # Parent directory\ncd -              # Previous directory\ncd ../Documents   # Sibling directory',
        },
        {
          command: 'ls',
          description: 'List directory contents',
          usage: 'ls [options]',
          example: 'ls\nls -l            # Long format\nls -a            # Show hidden files\nls -la           # Long format with hidden\nls -lh           # Human-readable sizes\nls -lt           # Sort by time (newest first)',
        },
        {
          command: 'open',
          description: 'Open files and directories in Finder',
          usage: 'open [path]',
          example: 'open .              # Open current directory\nopen ~/Downloads   # Open Downloads folder\nopen file.txt       # Open file with default app',
        },
        {
          command: 'tree',
          description: 'Display directory structure (requires installation)',
          usage: 'tree [options] [directory]',
          example: '# Install first: brew install tree\ntree\ntree -L 2         # Limit depth\ntree -d           # Directories only',
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
          example: 'mkdir myfolder\nmkdir -p path/to/nested/folder  # Create parent dirs\nmkdir dir1 dir2 dir3  # Multiple directories',
        },
        {
          command: 'rm',
          description: 'Remove files and directories',
          usage: 'rm [options] file_or_directory',
          example: 'rm file.txt\nrm -r directory    # Remove directory\nrm -f file.txt     # Force remove\nrm -rf directory   # Force remove directory\n# BE CAREFUL with rm -rf!',
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
      title: 'File Viewing and Editing',
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
        {
          command: 'nano',
          description: 'Simple text editor',
          usage: 'nano filename',
          example: 'nano file.txt\n# Ctrl+X to exit, Y to save, N to cancel\n# Ctrl+O to save without exiting',
        },
        {
          command: 'vim',
          description: 'Advanced text editor basics',
          usage: 'vim filename',
          example: 'vim file.txt\n# i to insert mode, Esc to normal mode\n# :w to save, :q to quit, :wq to save and quit',
        },
      ],
    },
    {
      title: 'macOS System Information',
      commands: [
        {
          command: 'sw_vers',
          description: 'Display macOS version',
          usage: 'sw_vers',
          example: 'sw_vers\nProductName: macOS\nProductVersion: 14.0\nBuildVersion: 23A344',
        },
        {
          command: 'system_profiler',
          description: 'Display detailed system information',
          usage: 'system_profiler [datatype]',
          example: 'system_profiler SPHardwareDataType      # Hardware info\nsystem_profiler SPDisplaysDataType      # Display info\nsystem_profiler SPNetworkDataType       # Network info\nsystem_profiler --help                  # List all datatypes',
        },
        {
          command: 'uname',
          description: 'System information',
          usage: 'uname [options]',
          example: 'uname\nuname -a          # All information\nuname -m          # Machine architecture\nuname -r          # Kernel version',
        },
        {
          command: 'date',
          description: 'Display current date and time',
          usage: 'date [format]',
          example: 'date\ndate +"%Y-%m-%d %H:%M:%S"\ndate +"%A, %B %d, %Y"',
        },
        {
          command: 'uptime',
          description: 'System uptime and load',
          usage: 'uptime',
          example: 'uptime\n# Shows: time up, users, load average',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Finder Integration',
      commands: [
        {
          command: 'open with applications',
          description: 'Open files with specific applications',
          usage: 'open -a "Application" file',
          example: 'open -a "TextEdit" file.txt\nopen -a "Safari" https://google.com\nopen -a "Visual Studio Code" .',
        },
        {
          command: 'mdfind',
          description: 'Spotlight search from terminal',
          usage: 'mdfind [query]',
          example: 'mdfind "kind:pdf"              # Find all PDFs\nmdfind "kMDItemContentType == public.image"  # Find images\nmdfind -name "document.pdf"     # Find by name',
        },
        {
          command: 'mdls',
          description: 'List file metadata',
          usage: 'mdls [file]',
          example: 'mdls document.pdf\n# Shows creation date, modification date, file size, etc.',
        },
        {
          command: 'pbcopy',
          description: 'Copy to clipboard',
          usage: 'command | pbcopy',
          example: 'cat file.txt | pbcopy\n# Copy file content to clipboard\necho "Hello" | pbcopy',
        },
        {
          command: 'pbpaste',
          description: 'Paste from clipboard',
          usage: 'pbpaste',
          example: 'pbpaste\n# Paste clipboard content\npbpaste > file.txt  # Save clipboard to file',
        },
        {
          command: 'chflags',
          description: 'Change file flags (hide/unhide)',
          usage: 'chflags [flags] file',
          example: 'chflags hidden file.txt        # Hide file\nchflags nohidden file.txt      # Unhide file\nchflags hidden ~/Desktop/Secret',
        },
      ],
    },
    {
      title: 'Application Management',
      commands: [
        {
          command: 'launchctl',
          description: 'Manage Launch Agents and Daemons',
          usage: 'launchctl [subcommand]',
          example: 'launchctl list                           # List services\nlaunchctl load ~/Library/LaunchAgents/com.example.plist\nlaunchctl unload ~/Library/LaunchAgents/com.example.plist\nlaunchctl start com.example.service',
        },
        {
          command: 'killall',
          description: 'Kill applications by name',
          usage: 'killall [app_name]',
          example: 'killall Finder            # Restart Finder\nkillall Dock               # Restart Dock\nkillall Safari\nkillall -9 "Google Chrome" # Force kill',
        },
        {
          command: 'defaults',
          description: 'Read/write user defaults and preferences',
          usage: 'defaults [read/write] domain key',
          example: 'defaults write com.apple.finder AppleShowAllFiles -bool true\nkillall Finder\n\ndefaults write com.apple.dock autohide -bool true\nkillall Dock\n\ndefaults read com.apple.finder',
        },
        {
          command: 'osascript',
          description: 'Execute AppleScript from terminal',
          usage: 'osascript -e "script"',
          example: 'osascript -e "display notification \\"Task Complete\\""  # Notification\nosascript -e "tell application \\"Finder\\" to quit"  # Quit Finder\nosascript -e "display alert \\"Warning!\\" message \\"Check this\\""',
        },
      ],
    },
    {
      title: 'Homebrew Package Management',
      commands: [
        {
          command: 'Install Homebrew',
          description: 'Install Homebrew package manager',
          usage: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
          example: '# Install Homebrew\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n# Add to PATH (Apple Silicon)\necho \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> ~/.zshrc\neval "$(/opt/homebrew/bin/brew shellenv)"',
        },
        {
          command: 'brew install',
          description: 'Install packages and applications',
          usage: 'brew install [package]',
          example: 'brew install node                # Install Node.js\nbrew install python3             # Install Python\nbrew install --cask visual-studio-code  # Install VS Code\nbrew install --cask google-chrome       # Install Chrome',
        },
        {
          command: 'brew update/upgrade',
          description: 'Update Homebrew and packages',
          usage: 'brew update && brew upgrade',
          example: 'brew update                    # Update Homebrew\nbrew upgrade                    # Upgrade all packages\nbrew upgrade node               # Upgrade specific package',
        },
        {
          command: 'brew management',
          description: 'Manage installed packages',
          usage: 'brew [command]',
          example: 'brew list                       # List installed packages\nbrew list --cask                # List installed applications\nbrew uninstall package          # Remove package\nbrew search keyword             # Search for packages\nbrew cleanup                    # Clean up old versions',
        },
      ],
    },
    {
      title: 'System Control and Power',
      commands: [
        {
          command: 'pmset',
          description: 'Power management settings',
          usage: 'pmset [options]',
          example: 'pmset -g                          # Show all settings\npmset -g batt                      # Battery information\npmset -g therm                     # Thermal state\npmset displaysleepnow              # Sleep display now\npmset sleepnow                     # Sleep system now',
        },
        {
          command: 'caffeinate',
          description: 'Prevent system sleep',
          usage: 'caffeinate [options]',
          example: 'caffeinate                          # Prevent sleep indefinitely\ncaffeinate -t 3600                 # Prevent sleep for 1 hour\ncaffeinate -d                      # Prevent display sleep only\ncaffeinate -i                      # Prevent system idle sleep only',
        },
        {
          command: 'shutdown/restart',
          description: 'System shutdown and restart',
          usage: 'sudo shutdown [options] time',
          example: 'sudo shutdown -h now               # Shutdown now\nsudo shutdown -r now               # Restart now\nsudo shutdown -h +60               # Shutdown in 60 minutes\nsudo shutdown -c                    # Cancel scheduled shutdown',
        },
        {
          command: 'say',
          description: 'Text-to-speech',
          usage: 'say "text"',
          example: 'say "Hello World"\nsay -v "Samantha" "Hello"       # Different voice\nsay -f file.txt                    # Read from file\nsay -r 200 "Fast speech"            # Speech rate',
        },
      ],
    },
    {
      title: 'Screenshots and Screen Capture',
      commands: [
        {
          command: 'screencapture',
          description: 'Take screenshots from terminal',
          usage: 'screencapture [options] file',
          example: 'screencapture screenshot.png           # Capture screen\nscreencapture -i screenshot.png        # Interactive selection\nscreencapture -w screenshot.png        # Capture window\nscreencapture -c                      # To clipboard\nscreencapture -T 5 screenshot.png     # 5 second delay',
        },
        {
          command: 'screencapture advanced',
          description: 'Advanced screenshot options',
          usage: 'screencapture [advanced options]',
          example: 'screencapture -x -o -t png ~/Desktop/screen.png\n# -x no sound, -o no shadow, -t format\n\nscreencapture -R 100,100,400,300 region.png\n# Capture specific region (x,y,width,height)',
        },
        {
          command: 'system_profiler display',
          description: 'Display information',
          usage: 'system_profiler SPDisplaysDataType',
          example: 'system_profiler SPDisplaysDataType\n# Shows resolution, color depth, GPU info',
        },
      ],
    },
    {
      title: 'Time Machine and Backup',
      commands: [
        {
          command: 'tmutil',
          description: 'Time Machine utility',
          usage: 'tmutil [verb]',
          example: 'tmutil startbackup                   # Start backup\ntmutil stopbackup                    # Stop backup\ntmutil listbackups                   # List backups\ntmutil latestbackup                  # Show latest backup path',
        },
        {
          command: 'tmutil status',
          description: 'Check Time Machine status',
          usage: 'tmutil status',
          example: 'tmutil status\n# Shows backup progress and status',
        },
        {
          command: 'tmutil compare',
          description: 'Compare backup snapshots',
          usage: 'tmutil compare [snapshot]',
          example: 'tmutil compare                       # Compare with latest\ntmutil compare /path/to/snapshot     # Compare with specific',
        },
        {
          command: 'tmutil restore',
          description: 'Restore from Time Machine',
          usage: 'tmutil restore [source] [destination]',
          example: 'tmutil restore /Volumes/TimeMachine/Backups.backupdb/Mac/Latest/Macintosh HD/Users/username/Documents /Users/username/Desktop/RestoredDocs',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Networking Configuration',
      commands: [
        {
          command: 'networksetup',
          description: 'Configure network settings',
          usage: 'networksetup [command]',
          example: 'networksetup -listallnetworkservices    # List network services\nnetworksetup -getinfo "Wi-Fi"           # Get Wi-Fi info\nnetworksetup -setairportpower en0 on    # Turn Wi-Fi on\nnetworksetup -setairportpower en0 off   # Turn Wi-Fi off',
        },
        {
          command: 'ifconfig',
          description: 'Configure network interfaces',
          usage: 'ifconfig [interface]',
          example: 'ifconfig en0                        # Show Wi-Fi interface\nifconfig en0 down                    # Disable interface\nifconfig en0 up                      # Enable interface\nifconfig lo0                         # Loopback interface',
        },
        {
          command: 'scutil',
          description: 'System configuration utility',
          usage: 'scutil [options]',
          example: 'scutil --get ComputerName            # Get computer name\nscutil --get LocalHostName           # Get local host name\nscutil --get HostName                 # Get host name\nscutil --set ComputerName "MacBook"',
        },
        {
          command: 'dns management',
          description: 'DNS cache management',
          usage: 'sudo dscacheutil -flushcache',
          example: 'sudo dscacheutil -flushcache\nsudo killall -HUP mDNSResponder\n# Flush DNS cache',
        },
        {
          command: 'airport utility',
          description: 'Wi-Fi diagnostics and management',
          usage: '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport',
          example: '# Create alias first:\nalias airport="/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport"\n\nairport -s                           # Scan Wi-Fi networks\nairport -I                           # Current connection info\nairport --scaninfo                   # Detailed scan',
        },
      ],
    },
    {
      title: 'Disk and Filesystem Management',
      commands: [
        {
          command: 'diskutil',
          description: 'Disk utility operations',
          usage: 'diskutil [verb] [options]',
          example: 'diskutil list                        # List all disks\ndiskutil info disk0                  # Disk information\ndiskutil eraseVolume JHFS+ "Data" disk0s2  # Erase volume\ndiskutil repairVolume /Volumes/Data   # Repair volume',
        },
        {
          command: 'hdiutil',
          description: 'Disk image utility',
          usage: 'hdiutil [verb] [options]',
          example: 'hdiutil attach image.dmg            # Mount disk image\nhdiutil detach /Volumes/image        # Unmount disk image\nhdiutil create -size 1g -fs HFS+ disk.dmg  # Create disk image\nhdiutil convert image.dmg -format UDRW -o converted.dmg',
        },
        {
          command: 'fs_usage',
          description: 'Monitor file system activity',
          usage: 'sudo fs_usage [options]',
          example: 'sudo fs_usage                         # Monitor all file activity\nsudo fs_usage -f filesys              # Filesystem operations only\nsudo fs_usage -f network              # Network operations only\nsudo fs_usage -w | grep "filename"   # Filter by filename',
        },
        {
          command: 'disk space analysis',
          description: 'Analyze disk space usage',
          usage: 'du and df commands',
          example: 'df -h                                 # Disk space summary\ndu -sh *                              # Size of each item\ndu -h -d 1 .                        # Human readable, depth 1\ndu -h | sort -hr | head -10         # Top 10 largest directories',
        },
      ],
    },
    {
      title: 'Security and Privacy',
      commands: [
        {
          command: 'security',
          description: 'Keychain and security commands',
          usage: 'security [command]',
          example: 'security find-generic-password -ga "name"    # Find password\nsecurity delete-generic-password -a "account"  # Delete password\nsecurity unlock-keychain ~/Library/Keychains/login.keychain\nsecurity create-keychain -p password new.keychain',
        },
        {
          command: 'spctl',
          description: 'Gatekeeper management',
          usage: 'spctl [options]',
          example: 'spctl --status                       # Check Gatekeeper status\nspctl --master-disable                # Disable Gatekeeper\nspctl --master-enable                 # Enable Gatekeeper\nspctl --assess --verbose /path/to/app  # Assess app',
        },
        {
          command: 'fdesetup',
          description: 'FileVault management',
          usage: 'sudo fdesetup [command]',
          example: 'sudo fdesetup status                 # Check FileVault status\nsudo fdesetup enable                   # Enable FileVault\nsudo fdesetup disable                  # Disable FileVault\nsudo fdesetup list                     # List recovery keys',
        },
        {
          command: 'csrutil',
          description: 'System Integrity Protection',
          usage: 'csrutil [command]',
          example: 'csrutil status                       # Check SIP status (in Recovery Mode)\ncsrutil disable                      # Disable SIP (Recovery Mode)\ncsrutil enable                       # Enable SIP (Recovery Mode)\ncsrutil clear                         # Clear SIP configuration',
        },
        {
          command: 'tccutil',
          description: 'Privacy permissions management',
          usage: 'tccutil [command]',
          example: 'tccutil reset Camera                  # Reset camera permissions\ntccutil reset Microphone              # Reset microphone permissions\ntccutil reset All                     # Reset all permissions\ntccutil list                          # List services',
        },
      ],
    },
    {
      title: 'Development Tools Setup',
      commands: [
        {
          command: 'xcode-select',
          description: 'Manage Xcode command line tools',
          usage: 'xcode-select [options]',
          example: 'xcode-select --install               # Install command line tools\nxcode-select --print-path             # Show current path\nsudo xcode-select --switch /Applications/Xcode.app/Contents/Developer',
        },
        {
          command: 'xcrun',
          description: 'Run Xcode developer tools',
          usage: 'xcrun [tool]',
          example: 'xcrun simctl list                   # List iOS simulators\nxcrun simctl boot "iPhone 14"        # Boot simulator\nxcrun swift -version                  # Swift version\nxcrun clang --version                 # Clang version',
        },
        {
          command: 'codesign',
          description: 'Code signing utility',
          usage: 'codesign [options] file',
          example: 'codesign -v app.app                   # Verify signature\ncodesign --force --sign "Developer ID" app.app\ncodesign -d --entitlements - app.app   # Show entitlements',
        },
        {
          command: 'plutil',
          description: 'Property list utility',
          usage: 'plutil [options] file',
          example: 'plutil -convert xml1 file.plist      # Convert to XML\nplutil -convert json file.plist      # Convert to JSON\nplutil -replace KeyName -string "Value" file.plist\nplutil -p file.plist                 # Print plist',
        },
      ],
    },
    {
      title: 'Process and Memory Management',
      commands: [
        {
          command: 'top',
          description: 'Display running processes',
          usage: 'top [options]',
          example: 'top -o cpu                          # Sort by CPU usage\ntop -o mem                          # Sort by memory usage\ntop -u username                      # Show user processes\ntop -l 1                             # Single sample',
        },
        {
          command: 'ps',
          description: 'Process status',
          usage: 'ps [options]',
          example: 'ps aux                               # All processes\nps -ef                               # All processes (different format)\nps -p PID                            # Specific process\nps aux | grep "process_name"         # Find process',
        },
        {
          command: 'lsof',
          description: 'List open files',
          usage: 'lsof [options]',
          example: 'lsof -i :8080                       # Check port 8080\nlsof -u username                     # Files opened by user\nlsof -p PID                          # Files opened by process\nlsof +D /path/to/directory           # All files in directory',
        },
        {
          command: 'memory management',
          description: 'Memory monitoring and management',
          usage: 'vm_stat and purge',
          example: 'vm_stat                              # Virtual memory statistics\nvm_stat 5                            # Update every 5 seconds\nsudo purge                           # Clear disk cache and free memory\nmemory_pressure                      # Memory pressure monitoring',
        },
      ],
    },
    {
      title: 'Automation and Scripting',
      commands: [
        {
          command: 'shortcuts',
          description: 'Run Shortcuts from terminal',
          usage: 'shortcuts [command]',
          example: 'shortcuts list                       # List all shortcuts\nshortcuts run "Shortcut Name"        # Run specific shortcut\nshortcuts view "Shortcut Name"        # Show shortcut details',
        },
        {
          command: 'automator',
          description: 'Run Automator workflows',
          usage: 'automator workflow.workflow',
          example: 'automator myworkflow.workflow\n# Execute Automator workflow from terminal',
        },
        {
          command: 'osascript advanced',
          description: 'Advanced AppleScript operations',
          usage: 'osascript -e "script"',
          example: 'osascript -e \'tell application "System Events" to keystroke "c" using command down\'  # Cmd+C\nosascript -e \'tell application "Finder" to set clipboard to (selection as text)\'\nosascript -e \'display dialog "Message" buttons {"OK", "Cancel"} default button "OK"\'',
        },
        {
          command: 'launchd services',
          description: 'Create and manage launchd services',
          usage: 'launchctl commands',
          example: '# Create plist file: ~/Library/LaunchAgents/com.example.plist\n# Load service:\nlaunchctl load ~/Library/LaunchAgents/com.example.plist\n# Start service:\nlaunchctl start com.example.service\n# Unload service:\nlaunchctl unload ~/Library/LaunchAgents/com.example.plist',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'System Administration',
      commands: [
        {
          command: 'softwareupdate',
          description: 'System software update management',
          usage: 'softwareupdate [options]',
          example: 'softwareupdate -l                    # List available updates\nsoftwareupdate -ia                   # Install all updates\nsoftwareupdate -i "macOS Monterey"   # Install specific update\nsoftwareupdate --history            # Show update history\nsoftwareupdate --download --all     # Download all updates',
        },
        {
          command: 'system logs',
          description: 'System logging and diagnostics',
          usage: 'log [command]',
          example: 'log show --last 1h                  # Show last hour of logs\nlog show --predicate \'process == "kernel"\' --last 1d\nlog stream                           # Live log stream\nlog show --info --last 3h > logs.txt  # Save logs to file',
        },
        {
          command: 'sysdiagnose',
          description: 'Collect comprehensive system diagnostics',
          usage: 'sudo sysdiagnose',
          example: 'sudo sysdiagnose                     # Creates diagnostic bundle\n# Bundle saved to /var/tmp/sysdiagnose_<timestamp>.tar.gz\nsudo sysdiagnose -f ~/Desktop/      # Save to specific location',
        },
        {
          command: 'system_profiler advanced',
          description: 'Advanced system profiling',
          usage: 'system_profiler [options]',
          example: 'system_profiler -detailLevel full   # Full detailed report\nsystem_profiler SPHardwareDataType SPSoftwareDataType\nsystem_profiler -xml > system_info.xml  # Export to XML',
        },
      ],
    },
    {
      title: 'Advanced Networking',
      commands: [
        {
          command: 'networkQuality',
          description: 'Network quality testing (macOS 12+)',
          usage: 'networkQuality',
          example: 'networkQuality                       # Run network quality test\nnetworkQuality -v                   # Verbose output\n# Tests download/upload speeds, latency, jitter',
        },
        {
          command: 'tcpdump',
          description: 'Packet capture and analysis',
          usage: 'sudo tcpdump [options]',
          example: 'sudo tcpdump -i en0                  # Capture on Wi-Fi interface\nsudo tcpdump -i en0 port 80         # Capture HTTP traffic\nsudo tcpdump -i en0 host google.com  # Capture traffic to/from Google\nsudo tcpdump -i en0 -w capture.pcap  # Save to file',
        },
        {
          command: 'nettop',
          description: 'Network traffic monitor',
          usage: 'nettop [options]',
          example: 'nettop                               # Show network usage\nnettop -t wifi                       # Wi-Fi traffic only\nnettop -d                            # Detailed mode\nnettop -k process,bytes_in,bytes_out',
        },
        {
          command: 'scutil advanced',
          description: 'Advanced system configuration',
          usage: 'scutil --set [parameter]',
          example: 'sudo scutil --set ComputerName "MacBook Pro"\nsudo scutil --set LocalHostName "macbook-pro"\nsudo scutil --set HostName "macbook-pro.local"\nscutil --get ComputerName',
        },
      ],
    },
    {
      title: 'Performance Monitoring and Tuning',
      commands: [
        {
          command: 'powermetrics',
          description: 'Detailed power and performance metrics',
          usage: 'sudo powermetrics [options]',
          example: 'sudo powermetrics                    # Show all metrics\nsudo powermetrics -i 1000 -n 5     # Sample every second, 5 times\nsudo powermetrics --samplers cpu_power,thermal\nsudo powermetrics -p process_name    # Specific process',
        },
        {
          command: 'ioreg',
          description: 'I/O Registry exploration',
          usage: 'ioreg [options]',
          example: 'ioreg -l                             # Detailed registry\nioreg -l | grep -i battery          # Battery information\nioreg -p IODeviceTree                # Device tree\nioreg -c AppleSmartBattery           # Smart battery info',
        },
        {
          command: 'systemload',
          description: 'System load monitoring',
          usage: 'systemload [options]',
          example: 'systemload                           # Show current load\nsystemload -n                        # Continuous monitoring\nsystemload -d                        # Detailed output',
        },
        {
          command: 'spindump',
          description: 'Spin dump for performance analysis',
          usage: 'sudo spindump [options]',
          example: 'sudo spindump                         # Generate spin dump\nsudo spindump -file ~/Desktop/spindump.txt\nsudo spindump -pid 1234               # Specific process',
        },
      ],
    },
    {
      title: 'Advanced Development Environment',
      commands: [
        {
          command: 'xcodebuild',
          description: 'Build Xcode projects from command line',
          usage: 'xcodebuild [options]',
          example: 'xcodebuild -list                     # List targets and schemes\nxcodebuild -scheme MyApp -configuration Debug build\nxcodebuild -scheme MyApp clean build\nxcodebuild -scheme MyApp test',
        },
        {
          command: 'instruments',
          description: 'Performance analysis and profiling',
          usage: 'instruments [options]',
          example: 'instruments -s devices                # List available devices\ninstruments -t "Time Profiler" /path/to/app\ninstruments -w "MyApp" -t "Allocations"',
        },
        {
          command: 'swift package manager',
          description: 'Swift package management',
          usage: 'swift [command]',
          example: 'swift package init                    # Initialize package\nswift build                           # Build package\nswift test                            # Run tests\nswift package update                  # Update dependencies',
        },
        {
          command: 'simctl advanced',
          description: 'Advanced iOS Simulator control',
          usage: 'xcrun simctl [command]',
          example: 'xcrun simctl list devices            # List all devices\nxcrun simctl boot "iPhone 14"        # Boot simulator\nxcrun simctl install "iPhone 14" app.ipa\nxcrun simctl launch "iPhone 14" com.example.app\nxcrun simctl shutdown "iPhone 14"       # Shutdown simulator',
        },
      ],
    },
    {
      title: 'Containerization and Virtualization',
      commands: [
        {
          command: 'docker on macOS',
          description: 'Docker container management',
          usage: 'docker [command]',
          example: 'docker run nginx                      # Run container\ndocker ps                             # List containers\ndocker images                         # List images\ndocker exec -it container bash        # Access container\ndocker-compose up -d                  # Start services',
        },
        {
          command: 'colima',
          description: 'Container runtimes on macOS (alternative to Docker Desktop)',
          usage: 'colima [command]',
          example: 'brew install colima\ncolima start                          # Start container runtime\ncolima stop                           # Stop runtime\ncolima status                         # Check status\ncolima delete                         # Remove runtime',
        },
        {
          command: 'lima',
          description: 'Linux virtual machines on macOS',
          usage: 'lima [command]',
          example: 'brew install lima\nlimactl start                         # Start default VM\nlimactl shell                         # Access VM shell\nlimactl list                          # List VMs\nlimactl stop default                  # Stop VM',
        },
        {
          command: 'UTM',
          description: 'Virtual machines on Apple Silicon',
          usage: 'utm [command]',
          example: '# Install UTM from App Store or website\nutm create                            # Create new VM\nutm start vm-name                    # Start VM\nutm list                             # List VMs',
        },
      ],
    },
    {
      title: 'Apple Silicon and Rosetta',
      commands: [
        {
          command: 'arch',
          description: 'Architecture detection and switching',
          usage: 'arch [options]',
          example: 'arch                                 # Show current architecture\narch -x86_64 /bin/bash               # Run x86_64 shell\narch -arm64 /bin/bash                 # Run ARM64 shell\nuname -m                             # Show machine architecture',
        },
        {
          command: 'softwareupdate Rosetta',
          description: 'Rosetta 2 installation and management',
          usage: 'softwareupdate --install-rosetta',
          example: 'softwareupdate --install-rosetta      # Install Rosetta 2\nsoftwareupdate --install-rosetta --agree-to-license  # Non-interactive',
        },
        {
          command: 'binary architecture check',
          description: 'Check binary architecture',
          usage: 'file and lipo commands',
          example: 'file /usr/bin/python3                # Check binary architecture\nlipo -info /usr/bin/python3          # Show supported architectures\nlipo -create arm64_binary x86_64_binary -output universal_binary',
        },
        {
          command: 'universal binary creation',
          description: 'Create universal binaries',
          usage: 'lipo command',
          example: '# Compile for ARM64\nclang -target arm64-apple-macos11 -o app_arm64 app.c\n# Compile for x86_64\nclang -target x86_64-apple-macos10.15 -o app_x86_64 app.c\n# Create universal binary\nlipo -create app_arm64 app_x86_64 -output app_universal',
        },
      ],
    },
    {
      title: 'Advanced Security and Privacy',
      commands: [
        {
          command: 'sip management',
          description: 'System Integrity Protection advanced',
          usage: 'csrutil [command]',
          example: '# Boot into Recovery Mode to use these\ncsrutil disable                      # Disable SIP\ncsrutil enable                       # Enable SIP\ncsrutil clear                        # Clear SIP configuration\ncsrutil status                       # Check SIP status',
        },
        {
          command: 'secure boot',
          description: 'Secure Boot configuration',
          usage: 'bputil command',
          example: '# Boot into Recovery Mode\nbputil -status                       # Check Secure Boot status\nbputil -set -medium                   # Set medium security\nbputil -set -full                     # Set full security\nbputil -set -off                      # Disable Secure Boot',
        },
        {
          command: 'keychain advanced',
          description: 'Advanced keychain management',
          usage: 'security commands',
          example: 'security create-keychain -p password new.keychain\nsecurity unlock-keychain new.keychain\nsecurity set-keychain-settings -t 3600 new.keychain\nsecurity delete-keychain new.keychain',
        },
        {
          command: 'notarization',
          description: 'App notarization for distribution',
          usage: 'xcrun commands',
          example: 'xcrun altool --notarize-app --primary-bundle-id "com.example.app" --username "email@example.com" --password "@keychain:AC_PASSWORD" --file app.zip\nxcrun altool --notarization-info "RequestUUID" --username "email@example.com" --password "@keychain:AC_PASSWORD"\nstaple staple "app.dmg"',
        },
      ],
    },
    {
      title: 'macOS Ecosystem Integration',
      commands: [
        {
          command: 'mas (Mac App Store)',
          description: 'Mac App Store command line interface',
          usage: 'mas [command]',
          example: 'brew install mas                      # Install mas\nmas list                              # List installed apps\nmas search Xcode                      # Search for apps\nmas install 497799835                 # Install Xcode (by ID)\nas upgrade                           # Upgrade all apps\nmas outdated                          # Show outdated apps',
        },
        {
          command: 'iCloud Drive',
          description: 'iCloud Drive command line operations',
          usage: 'brctl command',
          example: 'brctl log -w                          # Watch iCloud sync logs\nbrctl status                          # Check iCloud status\nbrctl download ~/Documents/file.txt  # Force download\nbrctl upload ~/Documents/file.txt    # Force upload',
        },
        {
          command: 'Continuity and Handoff',
          description: 'Continuity features management',
          usage: 'defaults commands',
          example: 'defaults write com.apple.coreservices.uiagent CSUIHasShowedHandoffSetup -bool true\ndefaults write com.apple.coreservices.uiagent CSUIHasShowedContinuitySetup -bool true\nkillall cfprefsd',
        },
        {
          command: 'Sidecar',
          description: 'Sidecar (iPad as second display) management',
          usage: 'Sidecar preferences',
          example: 'defaults write com.apple.sidecar.display SidebarAllowed -bool true\ndefaults write com.apple.sidecar.display TouchBarAllowed -bool true\nkillall Sidecar',
        },
      ],
    },
    {
      title: 'Advanced Shell and Terminal Configuration',
      commands: [
        {
          command: 'shell configuration',
          description: 'Advanced shell setup and customization',
          usage: 'Shell configuration files',
          example: '# Zsh configuration files:\n~/.zshrc          # Main configuration\n~/.zprofile       # Login configuration\n~/.zshenv         # Environment variables\n~/.zsh_aliases     # Command aliases\n\n# Reload configuration:\nsource ~/.zshrc',
        },
        {
          command: 'oh-my-zsh',
          description: 'Zsh framework installation and management',
          usage: 'Oh My Zsh commands',
          example: '# Install Oh My Zsh\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# Popular themes:\n# ~/.oh-my-zsh/custom/themes/\n# Plugins: git, docker, kubectl, npm',
        },
        {
          command: 'iterm2 integration',
          description: 'iTerm2 advanced features',
          usage: 'iTerm2 shell integration',
          example: '# Install shell integration:\ncurl -L https://iterm2.com/shell_integration/install_shell_integration_and_utilities.sh | bash\n\n# Features:\n# Shell integration, tmux integration, profile switching',
        },
        {
          command: 'terminal multiplexers',
          description: 'Advanced terminal management with tmux',
          usage: 'tmux commands',
          example: 'tmux new -s session_name           # Create session\ntmux attach -t session_name          # Attach to session\ntmux ls                              # List sessions\ntmux kill-session -t session_name   # Kill session\n# Inside tmux: Ctrl+b c (new window), Ctrl+b " (split)',
        },
      ],
    },
  ],
};
