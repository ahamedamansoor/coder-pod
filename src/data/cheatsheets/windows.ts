import { Terminal } from 'lucide-react';

export const windowsCheatsheet = {
  id: 'windows',
  name: 'Windows Commands',
  description: 'Command your Windows system from CMD basics to PowerShell automation mastery',
  icon: Terminal,
  colorTheme: 'purple' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Command Prompt',
      commands: [
        {
          command: 'Opening Command Prompt',
          description: 'How to open Command Prompt on Windows',
          usage: 'Multiple ways to open CMD',
          example: '# Method 1: Press Win+R, type cmd, press Enter\n# Method 2: Press Win+X, select Command Prompt\n# Method 3: Search "cmd" in Start Menu\n# Method 4: Press Win+R, type cmd, press Ctrl+Shift+Enter for Admin',
        },
        {
          command: 'Basic Navigation',
          description: 'Understanding Command Prompt basics',
          usage: 'Basic commands and navigation',
          example: '# Commands are not case-sensitive\n# Use Tab for auto-completion\n# Use Up/Down arrows for command history\n# Use Ctrl+C to cancel current command\n# Use cls to clear screen',
        },
        {
          command: 'help',
          description: 'Display help information',
          usage: 'help [command]',
          example: 'help\nhelp dir\nhelp copy\n# Shows available commands or help for specific command',
        },
        {
          command: 'exit',
          description: 'Exit Command Prompt',
          usage: 'exit',
          example: 'exit\n# Or click the X button or use Alt+F4',
        },
        {
          command: 'cls',
          description: 'Clear the screen',
          usage: 'cls',
          example: 'cls\n# Clears all text from the command prompt window',
        },
      ],
    },
    {
      title: 'File and Directory Navigation',
      commands: [
        {
          command: 'dir',
          description: 'List directory contents',
          usage: 'dir [path] [options]',
          example: 'dir\ndir C:\\Users\ndir /a              # Show all files including hidden\ndir /p              # Pause after each screen\ndir /w              # Wide format\ndir /s              # Include subdirectories',
        },
        {
          command: 'cd',
          description: 'Change directory',
          usage: 'cd [path]',
          example: 'cd C:\\Users\\Documents\ncd ..              # Go to parent directory\ncd \\               # Go to root directory\ncd                 # Show current directory\ncd %USERPROFILE%   # Go to user profile',
        },
        {
          command: 'mkdir',
          description: 'Create directory',
          usage: 'mkdir [directory]',
          example: 'mkdir newfolder\nmkdir "My Documents"\nmkdir folder1 folder2\nmkdir C:\\temp\\newfolder',
        },
        {
          command: 'rmdir',
          description: 'Remove directory',
          usage: 'rmdir [options] [directory]',
          example: 'rmdir emptyfolder\nrmdir /s folder    # Remove directory with files\nrmdir /s /q folder # Remove without confirmation',
        },
        {
          command: 'tree',
          description: 'Display directory structure',
          usage: 'tree [path] [options]',
          example: 'tree\ntree /f            # Show files\ntree /a            # Use ASCII characters\ntree C:\\Users\\Documents',
        },
      ],
    },
    {
      title: 'Basic File Operations',
      commands: [
        {
          command: 'copy',
          description: 'Copy files',
          usage: 'copy [source] [destination]',
          example: 'copy file.txt backup.txt\ncopy *.txt C:\\backup\\\ncopy file.txt + file2.txt combined.txt\ncopy con newfile.txt  # Create file from keyboard',
        },
        {
          command: 'xcopy',
          description: 'Copy files and directories',
          usage: 'xcopy [source] [destination] [options]',
          example: 'xcopy C:\\folder D:\\backup\ncopy /e /h /i    # Copy all including hidden\nxcopy /s /d      # Copy subdirs and newer files only',
        },
        {
          command: 'move',
          description: 'Move or rename files',
          usage: 'move [source] [destination]',
          example: 'move oldname.txt newname.txt\nmove *.txt C:\\documents\\\nmove C:\\temp\\folder C:\\backup\\',
        },
        {
          command: 'del',
          description: 'Delete files',
          usage: 'del [options] [file]',
          example: 'del file.txt\ndel *.tmp          # Delete all .tmp files\ndel /p file.txt   # Confirm before deleting\ndel /f /q *.log   # Force delete quietly',
        },
        {
          command: 'ren',
          description: 'Rename files',
          usage: 'ren [oldname] [newname]',
          example: 'ren old.txt new.txt\nren *.doc *.txt    # Change extension\nren "old name.txt" "new name.txt"',
        },
      ],
    },
    {
      title: 'File Viewing and Text Operations',
      commands: [
        {
          command: 'type',
          description: 'Display file contents',
          usage: 'type [filename]',
          example: 'type file.txt\ntype file.txt | more  # Pause at each screen\ntype *.txt          # Display all .txt files',
        },
        {
          command: 'more',
          description: 'Display file content page by page',
          usage: 'more [filename]',
          example: 'more largefile.txt\n# Space for next page, Enter for next line, Q to quit',
        },
        {
          command: 'find',
          description: 'Search for text in files',
          usage: 'find "text" [file]',
          example: 'find "error" logfile.txt\nfind /i "text" file.txt  # Case insensitive\nfind /n "text" *.txt    # Show line numbers',
        },
        {
          command: 'findstr',
          description: 'Advanced text search',
          usage: 'findstr [options] "pattern" [files]',
          example: 'findstr /s /i "error" *.log\nfindstr /r "^[0-9]" file.txt  # Regular expression\nfindstr /c:"exact phrase" file.txt',
        },
      ],
    },
    {
      title: 'Basic System Information',
      commands: [
        {
          command: 'ver',
          description: 'Display Windows version',
          usage: 'ver',
          example: 'ver\n# Shows Windows version number',
        },
        {
          command: 'hostname',
          description: 'Display computer name',
          usage: 'hostname',
          example: 'hostname\n# Shows current computer name',
        },
        {
          command: 'date',
          description: 'Display or set date',
          usage: 'date',
          example: 'date\n# Shows current date\n# Can also be used to set date',
        },
        {
          command: 'time',
          description: 'Display or set time',
          usage: 'time',
          example: 'time\n# Shows current time\n# Can also be used to set time',
        },
        {
          command: 'vol',
          description: 'Display volume label',
          usage: 'vol [drive:]',
          example: 'vol\nvol C:\n# Shows volume label and serial number',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced File Operations',
      commands: [
        {
          command: 'attrib',
          description: 'Display or change file attributes',
          usage: 'attrib [options] [file]',
          example: 'attrib file.txt\nattrib +h file.txt      # Hide file\nattrib -h file.txt      # Unhide file\nattrib +r file.txt      # Make read-only\nattrib -r *.* /s        # Remove read-only from all files',
        },
        {
          command: 'compact',
          description: 'Compress or uncompress files',
          usage: 'compact [options] [file]',
          example: 'compact /c file.txt     # Compress file\ncompact /u file.txt     # Uncompress file\ncompact /s /c           # Compress all files in subdirs',
        },
        {
          command: 'cipher',
          description: 'Encrypt or decrypt files',
          usage: 'cipher [options]',
          example: 'cipher /e file.txt      # Encrypt file\ncipher /d file.txt      # Decrypt file\ncipher /k               # Generate new encryption key',
        },
        {
          command: 'where',
          description: 'Locate files in PATH',
          usage: 'where [filename]',
          example: 'where notepad\nwhere python\nwhere /r C:\\ *.exe    # Recursive search',
        },
        {
          command: 'icacls',
          description: 'Display or modify file permissions',
          usage: 'icacls [file] [options]',
          example: 'icacls file.txt\nicacls file.txt /grant User:F\nicacls folder /grant Everyone:(OI)(CI)F',
        },
      ],
    },
    {
      title: 'Process Management',
      commands: [
        {
          command: 'tasklist',
          description: 'List running processes',
          usage: 'tasklist [options]',
          example: 'tasklist\ntasklist /svc         # Show services\ntasklist /v           # Verbose output\ntasklist /m           # Show DLL modules\ntasklist /fi "imagename eq chrome.exe"',
        },
        {
          command: 'taskkill',
          description: 'Terminate processes',
          usage: 'taskkill [options]',
          example: 'taskkill /f /im chrome.exe\ntaskkill /f /pid 1234\ntaskkill /im notepad.exe /t\n# /f = force, /im = image name, /pid = process ID',
        },
        {
          command: 'start',
          description: 'Start programs in new window',
          usage: 'start [options] [program]',
          example: 'start notepad\nstart "" "C:\\Program Files\\app.exe"\nstart /max calc      # Start maximized\nstart /min notepad   # Start minimized',
        },
        {
          command: 'wmic process',
          description: 'Windows Management Interface process commands',
          usage: 'wmic process [command]',
          example: 'wmic process get name,processid\nwmic process where name="chrome.exe" get processid\nwmic process where processid=1234 delete',
        },
      ],
    },
    {
      title: 'System Information and Diagnostics',
      commands: [
        {
          command: 'systeminfo',
          description: 'Display comprehensive system information',
          usage: 'systeminfo',
          example: 'systeminfo\nsysteminfo | findstr /i "memory"\nsysteminfo | findstr /i "processor"',
        },
        {
          command: 'wmic',
          description: 'Windows Management Instrumentation',
          usage: 'wmic [alias] get [property]',
          example: 'wmic cpu get name,cores\nwmic bios get serialnumber\nwmic diskdrive get size,model\nwmic os get version,buildnumber\nwmic computersystem get model,manufacturer',
        },
        {
          command: 'driverquery',
          description: 'Display installed drivers',
          usage: 'driverquery [options]',
          example: 'driverquery\ndriverquery /v         # Verbose\ndriverquery /fo csv   # CSV format\ndriverquery /si       # Signed drivers only',
        },
        {
          command: 'msinfo32',
          description: 'System Information GUI tool',
          usage: 'msinfo32',
          example: 'msinfo32\n# Opens System Information window',
        },
      ],
    },
    {
      title: 'Network Commands',
      commands: [
        {
          command: 'ipconfig',
          description: 'Display IP configuration',
          usage: 'ipconfig [options]',
          example: 'ipconfig\nipconfig /all         # Detailed information\nipconfig /release     # Release IP address\nipconfig /renew       # Renew IP address\nipconfig /flushdns    # Clear DNS cache',
        },
        {
          command: 'ping',
          description: 'Test network connectivity',
          usage: 'ping [options] [host]',
          example: 'ping google.com\nping -t 192.168.1.1  # Continuous\nping -n 4 google.com  # Send 4 packets\nping -a 192.168.1.1   # Resolve hostname',
        },
        {
          command: 'tracert',
          description: 'Trace route to destination',
          usage: 'tracert [host]',
          example: 'tracert google.com\ntracert -d google.com  # Don\'t resolve hostnames\ntracert -h 10 google.com  # Max 10 hops',
        },
        {
          command: 'netstat',
          description: 'Display network connections',
          usage: 'netstat [options]',
          example: 'netstat -ano          # Show all connections with PIDs\nnetstat -a            # All connections\nnetstat -n            # Numeric addresses\nnetstat -b            # Show executables',
        },
        {
          command: 'nslookup',
          description: 'DNS lookup utility',
          usage: 'nslookup [domain]',
          example: 'nslookup google.com\nnslookup -type=mx google.com\nnslookup 8.8.8.8',
        },
        {
          command: 'netsh',
          description: 'Network Shell utility',
          usage: 'netsh [context] [command]',
          example: 'netsh wlan show profiles\nnetsh interface ip show config\nnetsh advfirewall show allprofiles\nnetsh winsock reset',
        },
      ],
    },
    {
      title: 'User and Group Management',
      commands: [
        {
          command: 'whoami',
          description: 'Display current user information',
          usage: 'whoami [options]',
          example: 'whoami\nwhoami /groups       # Show group memberships\nwhoami /priv         # Show privileges\nwhoami /user         # Show user SID',
        },
        {
          command: 'net user',
          description: 'Manage user accounts',
          usage: 'net user [username] [options]',
          example: 'net user               # List all users\nnet user username    # Show user details\nnet user username password /add\nnet user username /delete\nnet user username *    # Prompt for password',
        },
        {
          command: 'net localgroup',
          description: 'Manage local groups',
          usage: 'net localgroup [group] [options]',
          example: 'net localgroup         # List all groups\nnet localgroup administrators\nnet localgroup administrators username /add\nnet localgroup administrators username /delete',
        },
        {
          command: 'runas',
          description: 'Run program as different user',
          usage: 'runas /user:[domain\\]user [program]',
          example: 'runas /user:Administrator cmd\nrunas /user:DOMAIN\\user "notepad.exe"\nrunas /user:Administrator /savecred cmd',
        },
      ],
    },
    {
      title: 'Service Management',
      commands: [
        {
          command: 'sc',
          description: 'Service Control utility',
          usage: 'sc [command] [service]',
          example: 'sc query               # List all services\nsc query servicename   # Show service details\nsc start servicename   # Start service\nsc stop servicename    # Stop service\nsc config servicename start= auto',
        },
        {
          command: 'net start',
          description: 'Start services',
          usage: 'net start [service]',
          example: 'net start              # List running services\nnet start wuauserv    # Start Windows Update service\nnet start Themes       # Start Themes service',
        },
        {
          command: 'net stop',
          description: 'Stop services',
          usage: 'net stop [service]',
          example: 'net stop wuauserv     # Stop Windows Update\nnet stop Themes        # Stop Themes service',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'PowerShell Fundamentals',
      commands: [
        {
          command: 'Starting PowerShell',
          description: 'How to open PowerShell',
          usage: 'Multiple ways to open PowerShell',
          example: '# Method 1: Press Win+X, select PowerShell\n# Method 2: Search "PowerShell" in Start Menu\n# Method 3: Press Win+R, type powershell\n# Method 4: In CMD, type powershell\n# For Admin: Win+X, select PowerShell (Admin)',
        },
        {
          command: 'Get-Command',
          description: 'Find available commands',
          usage: 'Get-Command [pattern]',
          example: 'Get-Command\nGet-Command -Noun Process\nGet-Command *service*\nGet-Command -Module Microsoft.PowerShell.Utility',
        },
        {
          command: 'Get-Help',
          description: 'Get help for commands',
          usage: 'Get-Help [command]',
          example: 'Get-Help Get-Process\nGet-Help Get-Process -Examples\nGet-Help Get-Process -Detailed\nGet-Help about_*    # Get help topics',
        },
        {
          command: 'Get-Member',
          description: 'Get object properties and methods',
          usage: 'Get-Member',
          example: 'Get-Process | Get-Member\nGet-ChildItem | Get-Member\nGet-Service | Get-Member -MemberType Properties',
        },
        {
          command: 'Set-ExecutionPolicy',
          description: 'Set script execution policy',
          usage: 'Set-ExecutionPolicy [policy]',
          example: 'Set-ExecutionPolicy RemoteSigned\nSet-ExecutionPolicy AllSigned\nSet-ExecutionPolicy Bypass\nGet-ExecutionPolicy  # View current policy',
        },
      ],
    },
    {
      title: 'PowerShell File Operations',
      commands: [
        {
          command: 'Get-ChildItem',
          description: 'List files and directories',
          usage: 'Get-ChildItem [path] [options]',
          example: 'Get-ChildItem\nGet-ChildItem C:\\Users\nGet-ChildItem -Hidden\nGet-ChildItem -Recurse\nGet-ChildItem -Filter "*.txt"\nls  # Alias\ndir # Alias',
        },
        {
          command: 'Set-Location',
          description: 'Change directory',
          usage: 'Set-Location [path]',
          example: 'Set-Location C:\\Users\nSet-Location ..\nSet-Location \\  # Root directory\nSet-Location $HOME\nsl  # Alias\ncd  # Alias',
        },
        {
          command: 'Copy-Item',
          description: 'Copy files and directories',
          usage: 'Copy-Item [source] [destination] [options]',
          example: 'Copy-Item file.txt backup.txt\nCopy-Item -Path *.txt -Destination C:\\backup\\\nCopy-Item -Path folder -Destination C:\\backup -Recurse\ncp  # Alias',
        },
        {
          command: 'Move-Item',
          description: 'Move files and directories',
          usage: 'Move-Item [source] [destination]',
          example: 'Move-Item old.txt new.txt\nMove-Item *.txt C:\\documents\\\nMove-Item -Path folder -Destination C:\\backup\nmv  # Alias',
        },
        {
          command: 'Remove-Item',
          description: 'Delete files and directories',
          usage: 'Remove-Item [path] [options]',
          example: 'Remove-Item file.txt\nRemove-Item -Path *.txt\nRemove-Item -Path folder -Recurse\nRemove-Item -Path folder -Recurse -Force\nrm  # Alias\ndel # Alias',
        },
        {
          command: 'New-Item',
          description: 'Create new files and directories',
          usage: 'New-Item [path] [options]',
          example: 'New-Item -Path file.txt -ItemType File\nNew-Item -Path folder -ItemType Directory\nNew-Item -Path C:\\temp\\newfile.txt -ItemType File -Force',
        },
      ],
    },
    {
      title: 'PowerShell Process and Service Management',
      commands: [
        {
          command: 'Get-Process',
          description: 'Get running processes',
          usage: 'Get-Process [name]',
          example: 'Get-Process\nGet-Process chrome\nGet-Process | Where-Object {$_.CPU -gt 100}\nGet-Process | Sort-Object CPU -Descending | Select-Object -First 10\nps  # Alias',
        },
        {
          command: 'Stop-Process',
          description: 'Stop processes',
          usage: 'Stop-Process [options]',
          example: 'Stop-Process -Name chrome\nStop-Process -Id 1234\nStop-Process -Name notepad -Force\nkill  # Alias',
        },
        {
          command: 'Start-Process',
          description: 'Start processes',
          usage: 'Start-Process [path] [options]',
          example: 'Start-Process notepad\nStart-Process chrome -ArgumentList "https://google.com"\nStart-Process powershell -Verb RunAs',
        },
        {
          command: 'Get-Service',
          description: 'Get services',
          usage: 'Get-Service [name]',
          example: 'Get-Service\nGet-Service -Name "wuauserv"\nGet-Service | Where-Object {$_.Status -eq "Running"}\nGet-Service | Sort-Object Status',
        },
        {
          command: 'Start-Service / Stop-Service',
          description: 'Control services',
          usage: 'Start-Service/Stop-Service [service]',
          example: 'Start-Service -Name "wuauserv"\nStop-Service -Name "Themes"\nRestart-Service -Name "Spooler"\nSet-Service -Name "wuauserv" -StartupType Automatic',
        },
      ],
    },
    {
      title: 'Disk and Storage Management',
      commands: [
        {
          command: 'diskpart',
          description: 'Disk partition management',
          usage: 'diskpart',
          example: 'diskpart\nlist disk\nlist volume\nselect disk 0\nlist partition\nclean\ncreate partition primary\nformat fs=ntfs\nassign',
        },
        {
          command: 'chkdsk',
          description: 'Check disk for errors',
          usage: 'chkdsk [drive:] [options]',
          example: 'chkdsk C:\nchkdsk C: /f         # Fix errors\nchkdsk C: /r         # Recover data\nchkdsk C: /b         # Re-evaluate bad sectors',
        },
        {
          command: 'format',
          description: 'Format disk or volume',
          usage: 'format [drive:] [options]',
          example: 'format D: /fs:NTFS\nformat D: /fs:NTFS /q /v "Data"\nformat D: /fs:FAT32',
        },
        {
          command: 'fsutil',
          description: 'File system utility',
          usage: 'fsutil [command]',
          example: 'fsutil volume diskfree C:\nfsutil file createnew test.txt 1024\nfsutil hardlink create new.txt existing.txt\nfsutil behavior set disablelastaccess 1',
        },
        {
          command: 'defrag',
          description: 'Defragment hard drive',
          usage: 'defrag [drive:] [options]',
          example: 'defrag C:\ndefrag C: /A        # Analyze only\ndefrag C: /O        # Optimize\ndefrag C: /V        # Verbose',
        },
      ],
    },
    {
      title: 'Registry Management',
      commands: [
        {
          command: 'reg query',
          description: 'Query registry values',
          usage: 'reg query [key] [options]',
          example: 'reg query HKLM\\Software\nreg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nreg query HKLM\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0',
        },
        {
          command: 'reg add',
          description: 'Add registry values',
          usage: 'reg add [key] /v [value] /t [type] /d [data]',
          example: 'reg add HKCU\\Software\\MyApp /v Version /t REG_SZ /d "1.0"\nreg add HKLM\\Software\\MyApp /v Enabled /t REG_DWORD /d 1\nreg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v MyApp /t REG_SZ /d "C:\\app.exe"',
        },
        {
          command: 'reg delete',
          description: 'Delete registry keys or values',
          usage: 'reg delete [key] [options]',
          example: 'reg delete HKCU\\Software\\MyApp /v Version\nreg delete HKCU\\Software\\MyApp /f\nreg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v MyApp /f',
        },
        {
          command: 'reg export / import',
          description: 'Export and import registry files',
          usage: 'reg export/import [key] [file]',
          example: 'reg export HKEY_CURRENT_USER\\Software\\MyApp backup.reg\nreg import backup.reg\nreg export HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall installed.reg',
        },
      ],
    },
    {
      title: 'System Maintenance and Repair',
      commands: [
        {
          command: 'sfc',
          description: 'System File Checker',
          usage: 'sfc [options]',
          example: 'sfc /scannow          # Scan and repair\nsfc /verifyonly       # Scan only\nsfc /scanfile=C:\\windows\\system32\\file.dll\nsfc /offbootdir=C:\\ /offwindir=C:\\windows',
        },
        {
          command: 'DISM',
          description: 'Deployment Image Servicing and Management',
          usage: 'DISM [options]',
          example: 'DISM /Online /Cleanup-Image /CheckHealth\nDISM /Online /Cleanup-Image /ScanHealth\nDISM /Online /Cleanup-Image /RestoreHealth\nDISM /Online /Enable-Feature /FeatureName:NetFx3',
        },
        {
          command: 'shutdown',
          description: 'Shutdown, restart, or logoff',
          usage: 'shutdown [options]',
          example: 'shutdown /s /t 0      # Shutdown now\nshutdown /r /t 0      # Restart now\nshutdown /h           # Hibernate\nshutdown /l           # Logoff\nshutdown /a           # Abort shutdown',
        },
        {
          command: 'gpupdate',
          description: 'Update Group Policy settings',
          usage: 'gpupdate [options]',
          example: 'gpupdate              # Update policy\ngpupdate /force        # Force update\ngpupdate /target:user  # Update user policy only\ngpresult /r           # Show resultant policy',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Advanced PowerShell Scripting',
      commands: [
        {
          command: 'Variables and Data Types',
          description: 'Working with variables in PowerShell',
          usage: '$variable = "value"',
          example: '$name = "John"\n$age = 25\n$numbers = 1,2,3,4,5\n$hashtable = @{Name="John"; Age=25}\n$array = "apple","banana","cherry"\n$process = Get-Process chrome',
        },
        {
          command: 'Conditional Statements',
          description: 'If/Else and Switch statements',
          usage: 'if/elseif/else, switch',
          example: 'if ($age -gt 18) { "Adult" } elseif ($age -gt 12) { "Teenager" } else { "Child" }\n\nswitch ($service.Status) {\n    "Running" { "Service is running" }\n    "Stopped" { "Service is stopped" }\n    default { "Unknown status" }\n}',
        },
        {
          command: 'Loops',
          description: 'For, While, ForEach loops',
          usage: 'Loop constructs',
          example: 'for ($i=1; $i -le 10; $i++) { $i }\n\nwhile ($true) { "Looping"; break }\n\nforeach ($file in Get-ChildItem) { $file.Name }\n\n$files | ForEach-Object { $_.Name }',
        },
        {
          command: 'Functions',
          description: 'Creating and using functions',
          usage: 'function FunctionName { }',
          example: 'function Get-FileInfo {\n    param([string]$Path)\n    $file = Get-Item $Path\n    return @{\n        Name = $file.Name\n        Size = $file.Length\n        Created = $file.CreationTime\n    }\n}\n\nGet-FileInfo "C:\\test.txt"',
        },
        {
          command: 'Error Handling',
          description: 'Try/Catch/Finally blocks',
          usage: 'try { } catch { } finally { }',
          example: 'try {\n    Get-Process "NonExistentProcess" -ErrorAction Stop\n} catch {\n    Write-Host "Process not found: $($_.Exception.Message)"\n} finally {\n    Write-Host "Operation completed"\n}',
        },
      ],
    },
    {
      title: 'PowerShell Modules and Profiles',
      commands: [
        {
          command: 'Module Management',
          description: 'Install, import, and manage modules',
          usage: 'Get-Module, Import-Module, Install-Module',
          example: 'Get-Module -ListAvailable\nImport-Module ActiveDirectory\nInstall-Module -Name PowerShellGet -Force\nUpdate-Module PowerShellGet\nRemove-Module ActiveDirectory',
        },
        {
          command: 'Profile Configuration',
          description: 'Customize PowerShell with profiles',
          usage: '$PROFILE',
          example: '$PROFILE\nnotepad $PROFILE\n# Common profile paths:\n# $PROFILE.CurrentUserAllHosts\n# $PROFILE.CurrentUserCurrentHost\n# $PROFILE.AllUsersAllHosts\n# $PROFILE.AllUsersCurrentHost',
        },
        {
          command: 'Custom Functions in Profile',
          description: 'Add custom functions to profile',
          usage: 'Add to $PROFILE',
          example: '# Add to profile:\nfunction prompt {\n    "PS " + (Get-Location) + "> "\n}\n\nfunction Get-PublicIP {\n    (Invoke-WebRequest -Uri "http://ifconfig.me/ip").Content\n}\n\nSet-Alias -Name ip -Value Get-PublicIP',
        },
        {
          command: 'PowerShell Gallery',
          description: 'Install packages from PSGallery',
          usage: 'Find-Module, Install-Module',
          example: 'Find-Module -Name "PSWindowsUpdate"\nInstall-Module -Name "PSWindowsUpdate" -Force\nGet-InstalledModule\nUninstall-Module -Name "PSWindowsUpdate"',
        },
      ],
    },
    {
      title: 'Advanced Networking and Security',
      commands: [
        {
          command: 'Advanced netsh Commands',
          description: 'Advanced network configuration',
          usage: 'netsh advanced commands',
          example: 'netsh advfirewall firewall add rule name="Allow Port" dir=in action=allow protocol=TCP localport=8080\nnetsh wlan export profile folder=. key=clear\nnetsh interface ipv4 set subinterface "Ethernet" mtu=1500 store=persistent\nnetsh http show iplisten',
        },
        {
          command: 'Windows Firewall Rules',
          description: 'Manage firewall with PowerShell',
          usage: 'Get/Set/New-NetFirewallRule',
          example: 'Get-NetFirewallRule\nNew-NetFirewallRule -DisplayName "Allow HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow\nSet-NetFirewallRule -DisplayName "Allow HTTP" -Enabled False\nRemove-NetFirewallRule -DisplayName "Allow HTTP"',
        },
        {
          command: 'PowerShell Remoting',
          description: 'Execute commands on remote computers',
          usage: 'Enter-PSSession, Invoke-Command',
          example: 'Enable-PSRemoting -Force\nEnter-PSSession -ComputerName Server01\nInvoke-Command -ComputerName Server01,Server02 -ScriptBlock { Get-Process }\nInvoke-Command -ComputerName Server01 -FilePath C:\\scripts\\task.ps1',
        },
        {
          command: 'Certificate Management',
          description: 'Manage certificates with PowerShell',
          usage: 'Get/Import/Export Certificate',
          example: 'Get-ChildItem -Path Cert:\\LocalMachine\\My\nGet-ChildItem -Path Cert:\\CurrentUser\\My | Select-Object Subject, Issuer, NotAfter\nNew-SelfSignedCertificate -DnsName "localhost" -CertStoreLocation "cert:\\LocalMachine\\My"',
        },
        {
          command: 'BitLocker Management',
          description: 'Manage BitLocker encryption',
          usage: 'Manage-BitLocker',
          example: 'Enable-BitLocker -MountPoint "C:" -EncryptionMethod XtsAES256\nGet-BitLockerVolume\nLock-BitLocker -MountPoint "D:"\nUnlock-BitLocker -MountPoint "D:" -Password (Read-Host -AsSecureString)',
        },
      ],
    },
    {
      title: 'Windows Package Management',
      commands: [
        {
          command: 'winget Fundamentals',
          description: 'Windows Package Manager basics',
          usage: 'winget [command]',
          example: 'winget install Microsoft.PowerToys\nwinget install --id Git.Git\nwinget install Microsoft.VisualStudioCode\nwinget install Mozilla.Firefox\nwinget install 7zip.7zip',
        },
        {
          command: 'winget Package Management',
          description: 'Advanced package management',
          usage: 'winget advanced commands',
          example: 'winget search python\nwinget list\nwinget list --name "Visual Studio"\nwinget upgrade --all\nwinget uninstall Microsoft.PowerToys\nwinget show --id Microsoft.PowerToys',
        },
        {
          command: 'winget Configuration',
          description: 'Configure winget settings',
          usage: 'winget settings',
          example: 'winget settings\n# Opens settings JSON file\n# Configure sources, install behavior, etc.\nwinget source list\nwinget source add --name "private" --type "Microsoft.Rest" --url "https://private.source"',
        },
        {
          command: 'Chocolatey Alternative',
          description: 'Chocolatey package manager',
          usage: 'choco [command]',
          example: '# Install Chocolatey:\nSet-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(\'https://community.chocolatey.org/install.ps1\'))\n\nchoco install nodejs\nchoco install git\nchoco upgrade all\nchoco uninstall nodejs',
        },
      ],
    },
    {
      title: 'Performance Monitoring and Optimization',
      commands: [
        {
          command: 'Performance Counters',
          description: 'Monitor system performance',
          usage: 'Get-Counter',
          example: 'Get-Counter -Counter "\\Processor(_Total)\\% Processor Time"\nGet-Counter -Counter "\\Memory\\Available MBytes"\nGet-Counter -Counter "\\Process(*)\\% Processor Time" -SampleInterval 2 -MaxSamples 10',
        },
        {
          command: 'Resource Monitor',
          description: 'Launch Resource Monitor',
          usage: 'resmon',
          example: 'resmon\n# Opens Resource Monitor GUI\n# Monitor CPU, Memory, Disk, Network',
        },
        {
          command: 'Performance Analysis',
          description: 'Windows Performance Toolkit',
          usage: 'WPT commands',
          example: '# Install Windows Performance Toolkit\nwpr -start GeneralProfile\n# Perform actions\nwpr -stop trace.etl\nwpa trace.etl\n# Opens Windows Performance Analyzer',
        },
        {
          command: 'Memory Diagnostics',
          description: 'Windows Memory Diagnostic',
          usage: 'mdsched',
          example: 'mdsched\n# Opens Windows Memory Diagnostic tool\n# Schedule memory test on next restart',
        },
        {
          command: 'System Optimization',
          description: 'System optimization commands',
          usage: 'Various optimization commands',
          example: 'powercfg /energy          # Generate energy report\npowercfg /batteryreport    # Generate battery report\npowercfg /a               # Show available sleep states\npowercfg /change scheme_current /monitor-timeout-ac 10\npowercfg /h off           # Disable hibernation',
        },
      ],
    },
    {
      title: 'Enterprise and Administration',
      commands: [
        {
          command: 'Active Directory Module',
          description: 'Active Directory management',
          usage: 'Active Directory PowerShell module',
          example: '# Import AD module\nImport-Module ActiveDirectory\n\nGet-ADUser -Filter * -Properties *\nGet-ADComputer -Filter *\nNew-ADUser -Name "John Doe" -GivenName "John" -Surname "Doe"\nGet-ADGroup -Filter *',
        },
        {
          command: 'Group Policy Management',
          description: 'Group Policy with PowerShell',
          usage: 'GroupPolicy module',
          example: 'Import-Module GroupPolicy\nGet-GPO -All\nBackup-GPO -Name "Default Domain Policy" -Path "C:\\Backup"\nRestore-GPO -Name "Default Domain Policy" -Path "C:\\Backup"',
        },
        {
          command: 'Event Log Management',
          description: 'Windows Event Logs',
          usage: 'Get-WinEvent',
          example: 'Get-WinEvent -ListLog *\nGet-WinEvent -LogName Application -MaxEvents 100\nGet-WinEvent -FilterHashtable @{LogName=\'Application\'; Level=2}\nClear-EventLog -LogName Application',
        },
        {
          command: 'Scheduled Tasks',
          description: 'Task Scheduler automation',
          usage: 'ScheduledTasks module',
          example: 'Get-ScheduledTask\nRegister-ScheduledTask -Action (New-ScheduledTaskAction -Execute "notepad.exe") -Trigger (New-ScheduledTaskTrigger -Daily -At 3pm) -TaskName "DailyNotepad"\nStart-ScheduledTask -TaskName "DailyNotepad"\nUnregister-ScheduledTask -TaskName "DailyNotepad"',
        },
        {
          command: 'Windows Update Management',
          description: 'Manage Windows updates',
          usage: 'PSWindowsUpdate module',
          example: 'Install-Module PSWindowsUpdate\nGet-WUList\nInstall-WindowsUpdate -AcceptAll\nGet-WUHistory\nHide-WUUpdate -KBArticleID KB123456',
        },
      ],
    },
    {
      title: 'Development and Automation',
      commands: [
        {
          command: 'Windows Subsystem for Linux',
          description: 'WSL management',
          usage: 'wsl commands',
          example: 'wsl --install\nwsl --list --verbose\nwsl --distribution Ubuntu\nwsl --shutdown\nwsl --unregister Ubuntu\nwsl --set-default Ubuntu',
        },
        {
          command: 'Docker on Windows',
          description: 'Docker container management',
          usage: 'docker commands',
          example: 'docker run hello-world\ndocker ps\ndocker images\ndocker run -it ubuntu bash\ndocker-compose up -d\ndocker system prune',
        },
        {
          command: 'Git for Windows',
          description: 'Git version control',
          usage: 'git commands',
          example: 'git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main',
        },
        {
          command: 'Node.js and npm',
          description: 'Node.js package management',
          usage: 'npm commands',
          example: 'npm init -y\nnpm install express\nnpm install --save-dev jest\nnpm run start\nnpm test\nnpm update',
        },
        {
          command: 'Python on Windows',
          description: 'Python package management',
          usage: 'python/pip commands',
          example: 'python --version\npip install requests\npip install --upgrade pip\npip list\npip freeze > requirements.txt\npip install -r requirements.txt',
        },
      ],
    },
    {
      title: 'Advanced Batch Scripting',
      commands: [
        {
          command: 'Advanced Batch Variables',
          description: 'Environment and system variables',
          usage: 'set and %variables%',
          example: 'set PATH=%PATH%;C:\\tools\necho %USERNAME%\necho %COMPUTERNAME%\necho %DATE%\necho %TIME%\necho %RANDOM%\nsetx MYVAR "Hello World"',
        },
        {
          command: 'Conditional Logic',
          description: 'Advanced if statements and conditions',
          usage: 'if with multiple conditions',
          example: 'if exist "file.txt" (\n    echo File exists\n) else (\n    echo File not found\n)\nif "%1"=="help" (\n    echo Help requested\n)\nif errorlevel 1 (\n    echo Error occurred\n)',
        },
        {
          command: 'Advanced Loops',
          description: 'Complex for loop operations',
          usage: 'for with advanced options',
          example: 'for /f "tokens=1,2,3 delims=," %%a in (file.csv) do echo %%a %%b %%c\nfor /r %%i in (*.log) do echo %%i\nfor /L %%i in (1,1,10) do echo %%i\nfor /d %%i in (*) do echo Directory: %%i',
        },
        {
          command: 'Functions and Subroutines',
          description: 'Create reusable code blocks',
          usage: ':labels and call',
          example: ':myfunction\necho This is a function\ngoto :eof\n\ncall :myfunction\n\n:cleanup\nif exist temp.txt del temp.txt\ngoto :eof',
        },
        {
          command: 'Error Handling',
          description: 'Batch error handling techniques',
          usage: 'errorlevel and error checking',
          example: 'command || echo Command failed\nif errorlevel 1 echo Error occurred\ncommand && echo Command succeeded\n2>nul\n>nul 2>&1',
        },
      ],
    },
    {
      title: 'Windows Terminal and Modern Tools',
      commands: [
        {
          command: 'Windows Terminal',
          description: 'Modern terminal application',
          usage: 'wt commands',
          example: 'wt -p "Command Prompt"\nwt -p "PowerShell"\nwt --maximized\nwt --title "My Terminal"\nwt new-tab --profile "Command Prompt"\nwt split-pane --profile "PowerShell"',
        },
        {
          command: 'PowerShell 7+ Features',
          description: 'Latest PowerShell features',
          usage: 'PowerShell 7+ commands',
          example: '# Install PowerShell 7\nwinget install Microsoft.PowerShell\n\n# New features:\nGet-Error\nGet-PSReadLineOption\nSet-PSReadLineOption -PredictionSource History\nForEach-Object -Parallel { $_ }',
        },
        {
          command: 'Azure PowerShell',
          description: 'Azure cloud management',
          usage: 'Az module commands',
          example: 'Install-Module -Name Az -AllowClobber -Force\nConnect-AzAccount\nGet-AzResourceGroup\nNew-AzResourceGroup -Name "MyRG" -Location "East US"\nGet-AzVM',
        },
        {
          command: 'Microsoft 365 Management',
          description: 'M365 administration',
          usage: 'MSOnline module',
          example: 'Install-Module MSOnline\nConnect-MsolService\nGet-MsolUser\nGet-MsolGroup\nNew-MsolUser -UserPrincipalName "user@domain.com"',
        },
        {
          command: 'System Center Configuration',
          description: 'SCCM and System Center',
          usage: 'Configuration Manager module',
          example: 'Import-Module ConfigurationManager\nSet-Location "C:\\Program Files (x86)\\Microsoft Configuration Manager\\AdminConsole\\bin"\nGet-CMDevice\nGet-CMPackage\nStart-CMDeployment',
        },
      ],
    },
  ],
};
