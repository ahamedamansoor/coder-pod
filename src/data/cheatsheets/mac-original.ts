import { Terminal } from 'lucide-react';

export const macCheatsheet = {
  id: 'mac',
  name: 'macOS Commands',
  description: 'Essential macOS terminal commands',
  icon: Terminal,
  colorTheme: 'blue' as const,
  sections: [
    {
      title: 'System Information',
      commands: [
        {
          command: 'sw_vers',
          description: 'Display macOS version',
          usage: 'sw_vers',
          example: 'sw_vers\nProductVersion: 14.0',
        },
        {
          command: 'system_profiler',
          description: 'Display system hardware info',
          usage: 'system_profiler [datatype]',
          example: 'system_profiler SPHardwareDataType\n# Hardware overview',
        },
        {
          command: 'sysctl',
          description: 'Get or set kernel parameters',
          usage: 'sysctl [option] name',
          example: 'sysctl hw.ncpu\n# Number of CPUs',
        },
        {
          command: 'diskutil',
          description: 'Disk utility operations',
          usage: 'diskutil [verb] [options]',
          example: 'diskutil list\n# List all disks',
        },
      ],
    },
    {
      title: 'Finder & File Management',
      commands: [
        {
          command: 'open',
          description: 'Open files and applications',
          usage: 'open [file/app]',
          example: 'open .\nopen -a "Visual Studio Code" file.txt',
        },
        {
          command: 'mdfind',
          description: 'Spotlight search from terminal',
          usage: 'mdfind [query]',
          example: 'mdfind "kind:pdf"\n# Find all PDFs',
        },
        {
          command: 'mdls',
          description: 'List file metadata',
          usage: 'mdls [file]',
          example: 'mdls document.pdf\n# Show metadata',
        },
        {
          command: 'pbcopy',
          description: 'Copy to clipboard',
          usage: 'command | pbcopy',
          example: 'cat file.txt | pbcopy\n# Copy file content',
        },
        {
          command: 'pbpaste',
          description: 'Paste from clipboard',
          usage: 'pbpaste',
          example: 'pbpaste > file.txt\n# Save clipboard to file',
        },
        {
          command: 'chflags',
          description: 'Change file flags',
          usage: 'chflags [flags] file',
          example: 'chflags hidden file.txt\n# Hide file',
        },
      ],
    },
    {
      title: 'Application Management',
      commands: [
        {
          command: 'launchctl',
          description: 'Manage Launch Agents/Daemons',
          usage: 'launchctl [subcommand]',
          example: 'launchctl list\nlaunchctl stop service',
        },
        {
          command: 'killall',
          description: 'Kill applications by name',
          usage: 'killall [app_name]',
          example: 'killall Finder\n# Restart Finder',
        },
        {
          command: 'defaults',
          description: 'Read/write user defaults',
          usage: 'defaults [read/write] domain key',
          example: 'defaults write com.apple.finder AppleShowAllFiles -bool true',
        },
        {
          command: 'osascript',
          description: 'Execute AppleScript',
          usage: 'osascript -e "script"',
          example: 'osascript -e "display notification \\"Hello\\""',
        },
      ],
    },
    {
      title: 'Networking',
      commands: [
        {
          command: 'networksetup',
          description: 'Configure network settings',
          usage: 'networksetup [command]',
          example: 'networksetup -listallnetworkservices\n# List network services',
        },
        {
          command: 'ifconfig',
          description: 'Configure network interface',
          usage: 'ifconfig [interface]',
          example: 'ifconfig en0\n# Show Wi-Fi info',
        },
        {
          command: 'scutil',
          description: 'System configuration utility',
          usage: 'scutil [options]',
          example: 'scutil --get ComputerName\n# Get computer name',
        },
        {
          command: 'dscacheutil',
          description: 'Flush DNS cache',
          usage: 'dscacheutil -flushcache',
          example: 'sudo dscacheutil -flushcache\nsudo killall -HUP mDNSResponder',
        },
      ],
    },
    {
      title: 'Package Management (Homebrew)',
      commands: [
        {
          command: 'brew install',
          description: 'Install package',
          usage: 'brew install [package]',
          example: 'brew install node\nbrew install --cask visual-studio-code',
        },
        {
          command: 'brew update',
          description: 'Update Homebrew',
          usage: 'brew update',
          example: 'brew update',
        },
        {
          command: 'brew upgrade',
          description: 'Upgrade installed packages',
          usage: 'brew upgrade [package]',
          example: 'brew upgrade\nbrew upgrade node',
        },
        {
          command: 'brew uninstall',
          description: 'Uninstall package',
          usage: 'brew uninstall [package]',
          example: 'brew uninstall node',
        },
        {
          command: 'brew list',
          description: 'List installed packages',
          usage: 'brew list',
          example: 'brew list\nbrew list --cask',
        },
        {
          command: 'brew search',
          description: 'Search for packages',
          usage: 'brew search [query]',
          example: 'brew search python',
        },
        {
          command: 'brew cleanup',
          description: 'Remove old versions',
          usage: 'brew cleanup',
          example: 'brew cleanup -n\n# Dry run',
        },
      ],
    },
    {
      title: 'System Control',
      commands: [
        {
          command: 'pmset',
          description: 'Power management settings',
          usage: 'pmset [options]',
          example: 'pmset -g batt\n# Battery info',
        },
        {
          command: 'caffeinate',
          description: 'Prevent system sleep',
          usage: 'caffeinate [options]',
          example: 'caffeinate -t 3600\n# Prevent sleep for 1 hour',
        },
        {
          command: 'shutdown',
          description: 'Shut down or restart',
          usage: 'sudo shutdown [options] time',
          example: 'sudo shutdown -h now\nsudo shutdown -r now  # Restart',
        },
        {
          command: 'say',
          description: 'Text-to-speech',
          usage: 'say "text"',
          example: 'say "Hello World"\nsay -f file.txt',
        },
      ],
    },
    {
      title: 'Screenshots & Screen Recording',
      commands: [
        {
          command: 'screencapture',
          description: 'Take screenshots',
          usage: 'screencapture [options] file',
          example: 'screencapture -i screenshot.png\n# Interactive mode',
        },
        {
          command: 'screencapture -c',
          description: 'Screenshot to clipboard',
          usage: 'screencapture -c',
          example: 'screencapture -ic\n# Interactive to clipboard',
        },
        {
          command: 'screencapture -T',
          description: 'Delayed screenshot',
          usage: 'screencapture -T seconds file',
          example: 'screencapture -T 5 screenshot.png\n# 5 second delay',
        },
      ],
    },
    {
      title: 'Spotlight & Search',
      commands: [
        {
          command: 'mdfind',
          description: 'Search files using Spotlight',
          usage: 'mdfind [query]',
          example: 'mdfind -name "document.pdf"\nmdfind "kMDItemContentType == public.image"',
        },
        {
          command: 'mdutil',
          description: 'Manage Spotlight index',
          usage: 'sudo mdutil [options]',
          example: 'sudo mdutil -E /Volumes/Drive\n# Re-index drive',
        },
      ],
    },
    {
      title: 'Time Machine',
      commands: [
        {
          command: 'tmutil',
          description: 'Time Machine utility',
          usage: 'tmutil [verb]',
          example: 'tmutil startbackup\ntmutil listbackups',
        },
        {
          command: 'tmutil compare',
          description: 'Compare backup snapshots',
          usage: 'tmutil compare [snapshot]',
          example: 'tmutil compare',
        },
      ],
    },
    {
      title: 'User & Authentication',
      commands: [
        {
          command: 'dscl',
          description: 'Directory Service command line',
          usage: 'dscl [datasource] [command]',
          example: 'dscl . -list /Users\n# List all users',
        },
        {
          command: 'whoami',
          description: 'Display current user',
          usage: 'whoami',
          example: 'whoami\nusername',
        },
        {
          command: 'id',
          description: 'Display user and group IDs',
          usage: 'id [username]',
          example: 'id\n# Current user info',
        },
      ],
    },
    {
      title: 'File System',
      commands: [
        {
          command: 'hdiutil',
          description: 'Disk image utility',
          usage: 'hdiutil [verb] [options]',
          example: 'hdiutil mount image.dmg\nhdiutil create -size 1g -fs HFS+ disk.dmg',
        },
        {
          command: 'diskutil',
          description: 'Disk management',
          usage: 'diskutil [verb]',
          example: 'diskutil list\ndiskutil info disk0',
        },
        {
          command: 'fs_usage',
          description: 'Monitor file system activity',
          usage: 'sudo fs_usage [options]',
          example: 'sudo fs_usage -f filesys\n# Monitor file operations',
        },
      ],
    },
    {
      title: 'Developer Tools',
      commands: [
        {
          command: 'xcode-select',
          description: 'Manage Xcode tools',
          usage: 'xcode-select [options]',
          example: 'xcode-select --install\n# Install command line tools',
        },
        {
          command: 'codesign',
          description: 'Code signing utility',
          usage: 'codesign [options] file',
          example: 'codesign -v app.app\n# Verify signature',
        },
        {
          command: 'plutil',
          description: 'Property list utility',
          usage: 'plutil [options] file',
          example: 'plutil -convert xml1 file.plist\n# Convert to XML',
        },
        {
          command: 'softwareupdate',
          description: 'System software update',
          usage: 'softwareupdate [options]',
          example: 'softwareupdate -l\n# List updates',
        },
      ],
    },
    {
      title: 'Security & Privacy',
      commands: [
        {
          command: 'security',
          description: 'Keychain and security',
          usage: 'security [command]',
          example: 'security find-generic-password -ga "name"\n# Find password',
        },
        {
          command: 'spctl',
          description: 'Gatekeeper management',
          usage: 'spctl [options]',
          example: 'spctl --status\n# Check Gatekeeper status',
        },
        {
          command: 'security unlock-keychain',
          description: 'Unlock keychain',
          usage: 'security unlock-keychain [keychain]',
          example: 'security unlock-keychain ~/Library/Keychains/login.keychain',
        },
      ],
    },
    {
      title: 'QuickLook & Preview',
      commands: [
        {
          command: 'qlmanage',
          description: 'QuickLook manager',
          usage: 'qlmanage [options]',
          example: 'qlmanage -p file.pdf\n# Preview file',
        },
        {
          command: 'qlmanage -r',
          description: 'Reset QuickLook generators',
          usage: 'qlmanage -r',
          example: 'qlmanage -r cache',
        },
        {
          command: 'textutil',
          description: 'Document conversion utility',
          usage: 'textutil [options]',
          example: 'textutil -convert html file.rtf\n# Convert to HTML',
        },
      ],
    },
    {
      title: 'Audio & Video',
      commands: [
        {
          command: 'afplay',
          description: 'Audio file player',
          usage: 'afplay [file]',
          example: 'afplay music.mp3\nafplay -v 0.5 sound.wav  # 50% volume',
        },
        {
          command: 'ffmpeg',
          description: 'Video/audio converter (via Homebrew)',
          usage: 'ffmpeg [options]',
          example: 'ffmpeg -i input.mov output.mp4\n# Convert video',
        },
        {
          command: 'audiodevice',
          description: 'Manage audio devices',
          usage: 'audiodevice [command]',
          example: 'audiodevice output "Headphones"\n# Switch audio output',
        },
      ],
    },
    {
      title: 'Notifications & Display',
      commands: [
        {
          command: 'osascript notification',
          description: 'Display notification',
          usage: 'osascript -e "display notification"',
          example: 'osascript -e \'display notification "Task Done" with title "Success"\'',
        },
        {
          command: 'osascript alert',
          description: 'Display alert dialog',
          usage: 'osascript -e "display alert"',
          example: 'osascript -e \'display alert "Warning!" message "Check this"\'',
        },
        {
          command: 'brightness',
          description: 'Control screen brightness',
          usage: 'brightness [value]',
          example: 'brightness 0.5\n# Set to 50%',
        },
      ],
    },
    {
      title: 'Bluetooth & AirDrop',
      commands: [
        {
          command: 'blueutil',
          description: 'Bluetooth utility (via Homebrew)',
          usage: 'blueutil [options]',
          example: 'blueutil --power 1\nblueutil --power 0  # Toggle',
        },
        {
          command: 'system_profiler SPBluetoothDataType',
          description: 'Show Bluetooth info',
          usage: 'system_profiler SPBluetoothDataType',
          example: 'system_profiler SPBluetoothDataType',
        },
      ],
    },
    {
      title: 'Battery & Power',
      commands: [
        {
          command: 'pmset -g',
          description: 'Display power settings',
          usage: 'pmset -g [option]',
          example: 'pmset -g batt\npmset -g therm  # Thermal',
        },
        {
          command: 'pmset displaysleepnow',
          description: 'Sleep display immediately',
          usage: 'pmset displaysleepnow',
          example: 'pmset displaysleepnow',
        },
        {
          command: 'ioreg',
          description: 'I/O Registry info (battery)',
          usage: 'ioreg -l',
          example: 'ioreg -l | grep -i capacity\n# Battery capacity',
        },
      ],
    },
    {
      title: 'App Store & Updates',
      commands: [
        {
          command: 'mas',
          description: 'Mac App Store CLI (via Homebrew)',
          usage: 'mas [command]',
          example: 'mas list\nmas search Xcode\nmas install 497799835',
        },
        {
          command: 'softwareupdate',
          description: 'System software updates',
          usage: 'softwareupdate [options]',
          example: 'softwareupdate -l\nsoftwareupdate -ia  # Install all',
        },
        {
          command: 'softwareupdate --history',
          description: 'Show update history',
          usage: 'softwareupdate --history',
          example: 'softwareupdate --history',
        },
      ],
    },
    {
      title: 'System Preferences',
      commands: [
        {
          command: 'defaults dock',
          description: 'Dock preferences',
          usage: 'defaults write com.apple.dock [key]',
          example: 'defaults write com.apple.dock autohide -bool true\nkillall Dock',
        },
        {
          command: 'defaults finder',
          description: 'Finder preferences',
          usage: 'defaults write com.apple.finder [key]',
          example: 'defaults write com.apple.finder ShowPathbar -bool true\nkillall Finder',
        },
        {
          command: 'defaults safari',
          description: 'Safari preferences',
          usage: 'defaults write com.apple.Safari [key]',
          example: 'defaults write com.apple.Safari IncludeDevelopMenu -bool true',
        },
        {
          command: 'defaults screenshots',
          description: 'Screenshot location',
          usage: 'defaults write com.apple.screencapture',
          example: 'defaults write com.apple.screencapture location ~/Desktop\nkillall SystemUIServer',
        },
      ],
    },
    {
      title: 'Network Diagnostics',
      commands: [
        {
          command: 'airport',
          description: 'Wi-Fi diagnostics',
          usage: '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport [options]',
          example: 'airport -s\n# Scan Wi-Fi networks',
        },
        {
          command: 'networkQuality',
          description: 'Test network quality (macOS 12+)',
          usage: 'networkQuality',
          example: 'networkQuality\n# Run speed test',
        },
        {
          command: 'traceroute',
          description: 'Trace network route',
          usage: 'traceroute [host]',
          example: 'traceroute google.com',
        },
        {
          command: 'nslookup',
          description: 'DNS lookup',
          usage: 'nslookup [domain]',
          example: 'nslookup google.com',
        },
      ],
    },
    {
      title: 'Compression & Archives',
      commands: [
        {
          command: 'ditto',
          description: 'Copy directory preserving metadata',
          usage: 'ditto [source] [destination]',
          example: 'ditto -V folder archive.zip\n# Create archive',
        },
        {
          command: 'zip',
          description: 'Create zip archives',
          usage: 'zip [options] archive files',
          example: 'zip -r archive.zip folder/\nzip -er secure.zip folder/  # Encrypt',
        },
        {
          command: 'unzip',
          description: 'Extract zip archives',
          usage: 'unzip [archive]',
          example: 'unzip archive.zip\nunzip -l archive.zip  # List',
        },
      ],
    },
    {
      title: 'Terminal & Shell',
      commands: [
        {
          command: 'history',
          description: 'Show command history',
          usage: 'history [n]',
          example: 'history 20\n# Last 20 commands',
        },
        {
          command: 'alias',
          description: 'Create command shortcuts',
          usage: 'alias name="command"',
          example: 'alias ll="ls -lah"\nalias ..="cd .."',
        },
        {
          command: 'source',
          description: 'Reload shell configuration',
          usage: 'source [file]',
          example: 'source ~/.zshrc\nsource ~/.bash_profile',
        },
        {
          command: 'clear',
          description: 'Clear terminal screen',
          usage: 'clear',
          example: 'clear',
        },
      ],
    },
    {
      title: 'Process & Activity Monitor',
      commands: [
        {
          command: 'top',
          description: 'Display processes',
          usage: 'top [options]',
          example: 'top -o cpu\n# Sort by CPU',
        },
        {
          command: 'activity_monitor',
          description: 'Launch Activity Monitor',
          usage: 'open -a "Activity Monitor"',
          example: 'open -a "Activity Monitor"',
        },
        {
          command: 'lsof',
          description: 'List open files',
          usage: 'lsof [options]',
          example: 'lsof -i :8080\n# Check port 8080',
        },
        {
          command: 'lsof -ti | xargs kill',
          description: 'Kill process running on port',
          usage: 'lsof -ti:<port> | xargs kill',
          example: 'lsof -ti:3000 | xargs kill\n# Kill process on port 3000\nlsof -ti:8080 | xargs kill -9\n# Force kill port 8080',
        },
        {
          command: 'ps',
          description: 'Process status',
          usage: 'ps [options]',
          example: 'ps aux | grep app\n# Find process',
        },
      ],
    },
    {
      title: 'Memory & Storage',
      commands: [
        {
          command: 'purge',
          description: 'Clear disk cache & free memory',
          usage: 'sudo purge',
          example: 'sudo purge\n# Free inactive memory',
        },
        {
          command: 'vm_stat',
          description: 'Virtual memory statistics',
          usage: 'vm_stat [interval]',
          example: 'vm_stat 5\n# Update every 5 seconds',
        },
        {
          command: 'du',
          description: 'Disk usage',
          usage: 'du [options] [directory]',
          example: 'du -sh *\n# Size of each item',
        },
        {
          command: 'df',
          description: 'Disk space',
          usage: 'df -h',
          example: 'df -h\n# Human-readable',
        },
      ],
    },
    {
      title: 'Useful Shortcuts',
      commands: [
        {
          command: 'open -a',
          description: 'Open application',
          usage: 'open -a [app_name]',
          example: 'open -a Safari\nopen -a "Visual Studio Code" .',
        },
        {
          command: 'open .',
          description: 'Open current directory in Finder',
          usage: 'open .',
          example: 'open .\nopen ~/Downloads',
        },
        {
          command: 'killall',
          description: 'Restart applications',
          usage: 'killall [app]',
          example: 'killall Dock\nkillall Finder\nkillall SystemUIServer',
        },
        {
          command: 'date',
          description: 'Display date and time',
          usage: 'date [format]',
          example: 'date\ndate +"%Y-%m-%d %H:%M:%S"',
        },
      ],
    },
    {
      title: 'Development Tools',
      commands: [
        {
          command: 'xcrun',
          description: 'Run Xcode tools',
          usage: 'xcrun [tool]',
          example: 'xcrun simctl list\n# List simulators',
        },
        {
          command: 'instruments',
          description: 'Performance analysis tool',
          usage: 'instruments [options]',
          example: 'instruments -s devices\n# List devices',
        },
        {
          command: 'xcodebuild',
          description: 'Build Xcode projects',
          usage: 'xcodebuild [options]',
          example: 'xcodebuild -list\n# List targets',
        },
        {
          command: 'swift',
          description: 'Swift REPL or compiler',
          usage: 'swift [file]',
          example: 'swift file.swift\nswift  # REPL',
        },
      ],
    },
    {
      title: 'Accessibility',
      commands: [
        {
          command: 'voiceover',
          description: 'Toggle VoiceOver',
          usage: 'Cmd+F5',
          example: 'System accessibility feature',
        },
        {
          command: 'zoom',
          description: 'Toggle zoom',
          usage: 'Cmd+Option+8',
          example: 'Screen zoom accessibility',
        },
      ],
    },
    {
      title: 'Shortcuts & Automation',
      commands: [
        {
          command: 'shortcuts',
          description: 'Run Shortcuts from terminal',
          usage: 'shortcuts run "Shortcut Name"',
          example: 'shortcuts run "My Shortcut"\nshortcuts list',
        },
        {
          command: 'automator',
          description: 'Run Automator workflows',
          usage: 'automator workflow.workflow',
          example: 'automator myworkflow.workflow',
        },
      ],
    },
    {
      title: 'Shell & Environment',
      commands: [
        {
          command: 'echo $SHELL',
          description: 'Show current shell',
          usage: 'echo $SHELL',
          example: 'echo $SHELL\n/bin/zsh',
        },
        {
          command: 'chsh',
          description: 'Change shell',
          usage: 'chsh -s /bin/zsh',
          example: 'chsh -s /bin/bash\n# Change to bash',
        },
        {
          command: 'env',
          description: 'Display environment variables',
          usage: 'env',
          example: 'env | grep PATH',
        },
        {
          command: 'export',
          description: 'Set environment variable',
          usage: 'export VAR=value',
          example: 'export PATH=$PATH:/usr/local/bin',
        },
      ],
    },
    {
      title: 'macOS Keyboard Shortcuts',
      commands: [
        {
          command: 'Cmd+Space',
          description: 'Spotlight search',
          usage: 'Cmd+Space',
          example: 'Quick search anything',
        },
        {
          command: 'Cmd+Tab',
          description: 'Switch applications',
          usage: 'Cmd+Tab',
          example: 'App switcher',
        },
        {
          command: 'Cmd+`',
          description: 'Switch windows in app',
          usage: 'Cmd+`',
          example: 'Cycle through app windows',
        },
        {
          command: 'Cmd+Shift+3',
          description: 'Screenshot entire screen',
          usage: 'Cmd+Shift+3',
          example: 'Captures full screen',
        },
        {
          command: 'Cmd+Shift+4',
          description: 'Screenshot selection',
          usage: 'Cmd+Shift+4',
          example: 'Select area to capture',
        },
        {
          command: 'Cmd+Shift+5',
          description: 'Screenshot & recording options',
          usage: 'Cmd+Shift+5',
          example: 'Screen recording menu',
        },
        {
          command: 'Ctrl+Cmd+Q',
          description: 'Lock screen',
          usage: 'Ctrl+Cmd+Q',
          example: 'Quick lock',
        },
        {
          command: 'Cmd+H',
          description: 'Hide application',
          usage: 'Cmd+H',
          example: 'Hide current app',
        },
        {
          command: 'Cmd+Option+Esc',
          description: 'Force quit applications',
          usage: 'Cmd+Option+Esc',
          example: 'Force quit dialog',
        },
      ],
    },
    {
      title: 'Mission Control & Spaces',
      commands: [
        {
          command: 'Ctrl+Up',
          description: 'Mission Control',
          usage: 'Ctrl+Up',
          example: 'Show all windows',
        },
        {
          command: 'Ctrl+Down',
          description: 'Application windows',
          usage: 'Ctrl+Down',
          example: 'Show app windows',
        },
        {
          command: 'Ctrl+Left/Right',
          description: 'Switch desktops',
          usage: 'Ctrl+Left or Ctrl+Right',
          example: 'Navigate between spaces',
        },
        {
          command: 'F11',
          description: 'Show desktop',
          usage: 'F11',
          example: 'Hide all windows',
        },
      ],
    },
    {
      title: 'Finder Shortcuts',
      commands: [
        {
          command: 'Cmd+Shift+N',
          description: 'New folder',
          usage: 'Cmd+Shift+N',
          example: 'Create folder in Finder',
        },
        {
          command: 'Cmd+Shift+.',
          description: 'Show hidden files',
          usage: 'Cmd+Shift+.',
          example: 'Toggle hidden files',
        },
        {
          command: 'Cmd+Delete',
          description: 'Move to trash',
          usage: 'Cmd+Delete',
          example: 'Delete selected files',
        },
        {
          command: 'Cmd+Shift+Delete',
          description: 'Empty trash',
          usage: 'Cmd+Shift+Delete',
          example: 'Empty trash with confirmation',
        },
        {
          command: 'Cmd+I',
          description: 'Get info',
          usage: 'Cmd+I',
          example: 'Show file/folder info',
        },
        {
          command: 'Cmd+D',
          description: 'Duplicate',
          usage: 'Cmd+D',
          example: 'Duplicate selected file',
        },
        {
          command: 'Space',
          description: 'Quick Look',
          usage: 'Space',
          example: 'Preview file',
        },
      ],
    },
    {
      title: 'Universal Clipboard',
      commands: [
        {
          command: 'Cmd+C',
          description: 'Copy (syncs across devices)',
          usage: 'Cmd+C',
          example: 'Copy on Mac, paste on iPhone',
        },
        {
          command: 'Cmd+V',
          description: 'Paste from any device',
          usage: 'Cmd+V',
          example: 'Universal clipboard paste',
        },
      ],
    },
    {
      title: 'AirDrop & Sharing',
      commands: [
        {
          command: 'Cmd+Shift+R',
          description: 'AirDrop window',
          usage: 'Cmd+Shift+R',
          example: 'Open AirDrop in Finder',
        },
        {
          command: 'sharing',
          description: 'Control sharing settings',
          usage: 'sudo sharing -a /path',
          example: 'sharing -l\n# List shared items',
        },
      ],
    },
    {
      title: 'Rosetta 2 (Apple Silicon)',
      commands: [
        {
          command: 'arch',
          description: 'Check or change architecture',
          usage: 'arch',
          example: 'arch\narch -x86_64 /bin/bash',
        },
        {
          command: 'softwareupdate --install-rosetta',
          description: 'Install Rosetta 2',
          usage: 'softwareupdate --install-rosetta',
          example: 'Install x86 compatibility',
        },
        {
          command: 'file',
          description: 'Check binary architecture',
          usage: 'file /path/to/binary',
          example: 'file /usr/bin/python3\n# Check if ARM or x86',
        },
      ],
    },
    {
      title: 'Privacy & Security',
      commands: [
        {
          command: 'tccutil',
          description: 'TCC (privacy) database utility',
          usage: 'tccutil reset [service]',
          example: 'tccutil reset Camera\n# Reset camera permissions',
        },
        {
          command: 'fdesetup',
          description: 'FileVault management',
          usage: 'sudo fdesetup status',
          example: 'sudo fdesetup status\n# Check FileVault status',
        },
        {
          command: 'csrutil',
          description: 'System Integrity Protection',
          usage: 'csrutil status',
          example: 'csrutil status\n# Check SIP status (in Recovery)',
        },
      ],
    },
    {
      title: 'Logs & Diagnostics',
      commands: [
        {
          command: 'log',
          description: 'View unified logging',
          usage: 'log [command]',
          example: 'log show --last 1h\nlog stream',
        },
        {
          command: 'console',
          description: 'Open Console app',
          usage: 'open -a Console',
          example: 'open -a Console',
        },
        {
          command: 'sysdiagnose',
          description: 'Collect system diagnostics',
          usage: 'sudo sysdiagnose',
          example: 'sudo sysdiagnose\n# Creates diagnostic bundle',
        },
      ],
    },
  ],
};
