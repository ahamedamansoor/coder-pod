import { Terminal } from 'lucide-react';

export const windowsCheatsheet = {
  id: 'windows',
  name: 'Windows Commands',
  description: 'Essential Windows CMD and PowerShell commands',
  icon: Terminal,
  colorTheme: 'purple' as const,
  sections: [
    {
      title: 'File Operations',
      commands: [
        {
          command: 'dir',
          description: 'List directory contents',
          usage: 'dir [path] [options]',
          example: 'dir /a /s\n# List all files including hidden',
        },
        {
          command: 'cd',
          description: 'Change directory',
          usage: 'cd [path]',
          example: 'cd C:\\Users\\Documents\ncd ..\ncd /',
        },
        {
          command: 'mkdir',
          description: 'Create directory',
          usage: 'mkdir [directory]',
          example: 'mkdir newfolder\nmkdir "My Folder"',
        },
        {
          command: 'rmdir',
          description: 'Remove directory',
          usage: 'rmdir [options] [directory]',
          example: 'rmdir /s /q folder\n# Force delete with subdirs',
        },
        {
          command: 'copy',
          description: 'Copy files',
          usage: 'copy [source] [destination]',
          example: 'copy file.txt D:\\backup\\',
        },
        {
          command: 'xcopy',
          description: 'Copy files and directories',
          usage: 'xcopy [source] [destination] [options]',
          example: 'xcopy C:\\folder D:\\backup /e /h /i\n# Copy all including hidden',
        },
        {
          command: 'move',
          description: 'Move or rename files',
          usage: 'move [source] [destination]',
          example: 'move oldname.txt newname.txt',
        },
        {
          command: 'del',
          description: 'Delete files',
          usage: 'del [options] [file]',
          example: 'del /f /q file.txt\n# Force delete',
        },
      ],
    },
    {
      title: 'File Viewing & Search',
      commands: [
        {
          command: 'type',
          description: 'Display file contents',
          usage: 'type [filename]',
          example: 'type file.txt\ntype file.txt | more',
        },
        {
          command: 'find',
          description: 'Search text in files',
          usage: 'find "text" [file]',
          example: 'find "error" logfile.txt\nfind /i "text" file.txt  # Case insensitive',
        },
        {
          command: 'findstr',
          description: 'Advanced text search',
          usage: 'findstr [options] "pattern" [files]',
          example: 'findstr /s /i "error" *.log\n# Recursive case-insensitive',
        },
        {
          command: 'where',
          description: 'Locate files',
          usage: 'where [file]',
          example: 'where python\nwhere /r C:\\ file.txt',
        },
        {
          command: 'tree',
          description: 'Display directory structure',
          usage: 'tree [path] [options]',
          example: 'tree /f /a\n# Show files with ASCII chars',
        },
      ],
    },
    {
      title: 'System Information',
      commands: [
        {
          command: 'systeminfo',
          description: 'Display system information',
          usage: 'systeminfo',
          example: 'systeminfo\nsysteminfo | findstr /i "memory"',
        },
        {
          command: 'hostname',
          description: 'Display computer name',
          usage: 'hostname',
          example: 'hostname',
        },
        {
          command: 'ver',
          description: 'Display Windows version',
          usage: 'ver',
          example: 'ver',
        },
        {
          command: 'wmic',
          description: 'Windows Management Instrumentation',
          usage: 'wmic [alias] [command]',
          example: 'wmic cpu get name\nwmic bios get serialnumber',
        },
        {
          command: 'driverquery',
          description: 'Display installed drivers',
          usage: 'driverquery [options]',
          example: 'driverquery /v',
        },
      ],
    },
    {
      title: 'Disk Management',
      commands: [
        {
          command: 'diskpart',
          description: 'Disk partition utility',
          usage: 'diskpart',
          example: 'diskpart\nlist disk\nlist volume',
        },
        {
          command: 'chkdsk',
          description: 'Check disk for errors',
          usage: 'chkdsk [drive:] [options]',
          example: 'chkdsk C: /f /r\n# Fix errors and recover data',
        },
        {
          command: 'format',
          description: 'Format disk',
          usage: 'format [drive:] [options]',
          example: 'format D: /fs:NTFS /q\n# Quick format to NTFS',
        },
        {
          command: 'fsutil',
          description: 'File system utility',
          usage: 'fsutil [command]',
          example: 'fsutil volume diskfree C:\n# Show free space',
        },
      ],
    },
    {
      title: 'Network Commands',
      commands: [
        {
          command: 'ipconfig',
          description: 'Display network configuration',
          usage: 'ipconfig [options]',
          example: 'ipconfig /all\nipconfig /release\nipconfig /renew',
        },
        {
          command: 'ping',
          description: 'Test network connectivity',
          usage: 'ping [options] [host]',
          example: 'ping google.com\nping -t 192.168.1.1  # Continuous',
        },
        {
          command: 'tracert',
          description: 'Trace route to host',
          usage: 'tracert [host]',
          example: 'tracert google.com',
        },
        {
          command: 'netstat',
          description: 'Display network statistics',
          usage: 'netstat [options]',
          example: 'netstat -ano\n# Show ports with PIDs',
        },
        {
          command: 'nslookup',
          description: 'DNS lookup',
          usage: 'nslookup [domain]',
          example: 'nslookup google.com',
        },
        {
          command: 'netsh',
          description: 'Network shell utility',
          usage: 'netsh [context] [command]',
          example: 'netsh wlan show profiles\nnetsh interface ip show config',
        },
        {
          command: 'getmac',
          description: 'Display MAC address',
          usage: 'getmac [options]',
          example: 'getmac /v',
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
          example: 'tasklist\ntasklist /svc  # Show services',
        },
        {
          command: 'taskkill',
          description: 'Kill process',
          usage: 'taskkill [options] [/PID pid | /IM name]',
          example: 'taskkill /f /im chrome.exe\ntaskkill /f /pid 1234',
        },
        {
          command: 'start',
          description: 'Start program or file',
          usage: 'start [options] [program]',
          example: 'start notepad\nstart "" "C:\\path\\app.exe"',
        },
        {
          command: 'wmic process',
          description: 'Process information',
          usage: 'wmic process [command]',
          example: 'wmic process get name,processid\nwmic process where name="chrome.exe" delete',
        },
      ],
    },
    {
      title: 'User Management',
      commands: [
        {
          command: 'whoami',
          description: 'Display current user',
          usage: 'whoami [options]',
          example: 'whoami\nwhoami /groups',
        },
        {
          command: 'net user',
          description: 'User account management',
          usage: 'net user [username] [options]',
          example: 'net user\nnet user username password /add',
        },
        {
          command: 'net localgroup',
          description: 'Manage local groups',
          usage: 'net localgroup [group] [options]',
          example: 'net localgroup administrators\nnet localgroup administrators user /add',
        },
        {
          command: 'runas',
          description: 'Run as different user',
          usage: 'runas /user:[domain\\]user [program]',
          example: 'runas /user:admin cmd',
        },
      ],
    },
    {
      title: 'Services & Startup',
      commands: [
        {
          command: 'sc',
          description: 'Service control',
          usage: 'sc [command] [service]',
          example: 'sc query\nsc start servicename\nsc stop servicename',
        },
        {
          command: 'net start',
          description: 'Start service',
          usage: 'net start [service]',
          example: 'net start servicename',
        },
        {
          command: 'net stop',
          description: 'Stop service',
          usage: 'net stop [service]',
          example: 'net stop servicename',
        },
        {
          command: 'msconfig',
          description: 'System configuration utility',
          usage: 'msconfig',
          example: 'msconfig',
        },
      ],
    },
    {
      title: 'PowerShell Commands',
      commands: [
        {
          command: 'Get-Process',
          description: 'Get running processes',
          usage: 'Get-Process [name]',
          example: 'Get-Process\nGet-Process chrome',
        },
        {
          command: 'Get-Service',
          description: 'Get services',
          usage: 'Get-Service [name]',
          example: 'Get-Service\nGet-Service -Name "wuauserv"',
        },
        {
          command: 'Get-ChildItem',
          description: 'List files (like dir)',
          usage: 'Get-ChildItem [path]',
          example: 'Get-ChildItem C:\\\nls  # Alias',
        },
        {
          command: 'Copy-Item',
          description: 'Copy files/folders',
          usage: 'Copy-Item [source] [destination]',
          example: 'Copy-Item file.txt D:\\backup\\',
        },
        {
          command: 'Remove-Item',
          description: 'Delete files/folders',
          usage: 'Remove-Item [path] [options]',
          example: 'Remove-Item file.txt\nrm -r folder  # Recursive',
        },
        {
          command: 'Get-Content',
          description: 'Read file contents',
          usage: 'Get-Content [file]',
          example: 'Get-Content file.txt\ncat file.txt  # Alias',
        },
        {
          command: 'Set-ExecutionPolicy',
          description: 'Set script execution policy',
          usage: 'Set-ExecutionPolicy [policy]',
          example: 'Set-ExecutionPolicy RemoteSigned',
        },
      ],
    },
    {
      title: 'System Control',
      commands: [
        {
          command: 'shutdown',
          description: 'Shutdown or restart',
          usage: 'shutdown [options]',
          example: 'shutdown /s /t 0\nshutdown /r /t 0  # Restart\nshutdown /a  # Abort',
        },
        {
          command: 'sfc',
          description: 'System File Checker',
          usage: 'sfc [options]',
          example: 'sfc /scannow\n# Scan and repair system files',
        },
        {
          command: 'DISM',
          description: 'Deployment Image Servicing',
          usage: 'DISM [options]',
          example: 'DISM /Online /Cleanup-Image /RestoreHealth\n# Repair Windows image',
        },
        {
          command: 'gpupdate',
          description: 'Update Group Policy',
          usage: 'gpupdate [options]',
          example: 'gpupdate /force',
        },
        {
          command: 'control',
          description: 'Open Control Panel items',
          usage: 'control [item]',
          example: 'control panel\ncontrol system',
        },
      ],
    },
    {
      title: 'Registry Commands',
      commands: [
        {
          command: 'reg query',
          description: 'Query registry',
          usage: 'reg query [key]',
          example: 'reg query HKLM\\Software',
        },
        {
          command: 'reg add',
          description: 'Add registry value',
          usage: 'reg add [key] /v [name] /d [data]',
          example: 'reg add HKCU\\Software\\MyApp /v Version /d 1.0',
        },
        {
          command: 'reg delete',
          description: 'Delete registry key/value',
          usage: 'reg delete [key] [options]',
          example: 'reg delete HKCU\\Software\\MyApp /f',
        },
        {
          command: 'regedit',
          description: 'Registry Editor',
          usage: 'regedit',
          example: 'regedit',
        },
      ],
    },
    {
      title: 'Windows Package Manager',
      commands: [
        {
          command: 'winget install',
          description: 'Install application',
          usage: 'winget install [app]',
          example: 'winget install Microsoft.PowerToys\nwinget install -e --id Git.Git',
        },
        {
          command: 'winget search',
          description: 'Search for applications',
          usage: 'winget search [query]',
          example: 'winget search chrome',
        },
        {
          command: 'winget list',
          description: 'List installed apps',
          usage: 'winget list',
          example: 'winget list',
        },
        {
          command: 'winget upgrade',
          description: 'Upgrade applications',
          usage: 'winget upgrade [app]',
          example: 'winget upgrade --all',
        },
        {
          command: 'winget uninstall',
          description: 'Uninstall application',
          usage: 'winget uninstall [app]',
          example: 'winget uninstall Microsoft.PowerToys',
        },
      ],
    },
    {
      title: 'Batch Scripting',
      commands: [
        {
          command: 'echo',
          description: 'Display message',
          usage: 'echo [message]',
          example: 'echo Hello World\necho off',
        },
        {
          command: 'set',
          description: 'Set environment variable',
          usage: 'set [variable]=[value]',
          example: 'set PATH=%PATH%;C:\\tools\necho %PATH%',
        },
        {
          command: 'if',
          description: 'Conditional statement',
          usage: 'if [condition] [command]',
          example: 'if exist file.txt echo File exists',
        },
        {
          command: 'for',
          description: 'Loop command',
          usage: 'for [variable] in (set) do [command]',
          example: 'for %%f in (*.txt) do type %%f',
        },
        {
          command: 'goto',
          description: 'Jump to label',
          usage: 'goto [label]',
          example: ':start\necho Hello\ngoto start',
        },
      ],
    },
    {
      title: 'File Attributes',
      commands: [
        {
          command: 'attrib',
          description: 'Display or change file attributes',
          usage: 'attrib [options] [file]',
          example: 'attrib +h file.txt\nattrib -r *.* /s  # Remove read-only',
        },
        {
          command: 'icacls',
          description: 'Display or modify ACLs',
          usage: 'icacls [file] [options]',
          example: 'icacls file.txt /grant user:F',
        },
        {
          command: 'takeown',
          description: 'Take ownership of file',
          usage: 'takeown /f [file]',
          example: 'takeown /f file.txt /r',
        },
      ],
    },
    {
      title: 'Compression & Archives',
      commands: [
        {
          command: 'compact',
          description: 'Display/alter file compression',
          usage: 'compact [options] [file]',
          example: 'compact /c file.txt\n# Compress file',
        },
        {
          command: 'Compress-Archive',
          description: 'Create zip archive (PowerShell)',
          usage: 'Compress-Archive [path] [destination]',
          example: 'Compress-Archive -Path C:\\folder -DestinationPath archive.zip',
        },
        {
          command: 'Expand-Archive',
          description: 'Extract zip archive (PowerShell)',
          usage: 'Expand-Archive [archive] [destination]',
          example: 'Expand-Archive -Path archive.zip -DestinationPath C:\\extract',
        },
      ],
    },
  ],
};
