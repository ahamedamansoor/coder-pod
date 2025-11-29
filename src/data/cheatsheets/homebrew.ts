import { Terminal } from 'lucide-react';

export const homebrewCheatsheet = {
  id: 'homebrew',
  name: 'Homebrew',
  description: 'macOS/Linux package manager commands',
  icon: Terminal,
  colorTheme: 'amber' as const,
  sections: [
    {
      title: 'Installation & Setup',
      commands: [
        {
          command: 'Install Homebrew',
          description: 'Install Homebrew on macOS/Linux',
          usage: '/bin/bash -c "$(curl -fsSL ...)"',
          example: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n# Official installation command',
        },
        {
          command: 'Uninstall Homebrew',
          description: 'Remove Homebrew',
          usage: '/bin/bash -c "$(curl -fsSL ...uninstall.sh)"',
          example: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"',
        },
        {
          command: 'brew --version',
          description: 'Check Homebrew version',
          usage: 'brew --version',
          example: 'brew --version\n# Output: Homebrew 4.0.0',
        },
        {
          command: 'brew help',
          description: 'Show help information',
          usage: 'brew help [command]',
          example: 'brew help\nbrew help install\nbrew help upgrade',
        },
      ],
    },
    {
      title: 'Package Management',
      commands: [
        {
          command: 'brew install',
          description: 'Install package',
          usage: 'brew install package_name',
          example: 'brew install node\nbrew install python@3.11\nbrew install wget git curl',
        },
        {
          command: 'brew uninstall',
          description: 'Remove package',
          usage: 'brew uninstall package_name',
          example: 'brew uninstall node\nbrew uninstall wget\n\n# Alternative\nbrew remove node',
        },
        {
          command: 'brew reinstall',
          description: 'Reinstall package',
          usage: 'brew reinstall package_name',
          example: 'brew reinstall node\n# Uninstalls and installs fresh',
        },
        {
          command: 'brew upgrade',
          description: 'Upgrade packages',
          usage: 'brew upgrade [package_name]',
          example: 'brew upgrade\n# Upgrades all packages\n\nbrew upgrade node\n# Upgrades specific package',
        },
        {
          command: 'brew list',
          description: 'List installed packages',
          usage: 'brew list [--formula|--cask]',
          example: 'brew list\nbrew list --formula  # Only formulae\nbrew list --cask     # Only casks\nbrew list node       # Files in package',
        },
        {
          command: 'brew info',
          description: 'Show package information',
          usage: 'brew info package_name',
          example: 'brew info node\n# Shows version, dependencies, caveats',
        },
      ],
    },
    {
      title: 'Search & Discovery',
      commands: [
        {
          command: 'brew search',
          description: 'Search for packages',
          usage: 'brew search query',
          example: 'brew search python\nbrew search /^node$/  # Regex search\nbrew search --desc database  # Search descriptions',
        },
        {
          command: 'brew desc',
          description: 'Show package description',
          usage: 'brew desc package_name',
          example: 'brew desc node\nbrew desc wget curl  # Multiple packages',
        },
        {
          command: 'brew home',
          description: 'Open package homepage',
          usage: 'brew home package_name',
          example: 'brew home node\n# Opens in browser',
        },
      ],
    },
    {
      title: 'Dependencies',
      commands: [
        {
          command: 'brew deps',
          description: 'Show package dependencies',
          usage: 'brew deps package_name',
          example: 'brew deps node\nbrew deps --tree node  # Tree view\nbrew deps --installed  # All installed deps',
        },
        {
          command: 'brew uses',
          description: 'Show dependents',
          usage: 'brew uses package_name',
          example: 'brew uses python\n# Shows what depends on python\n\nbrew uses --installed python',
        },
        {
          command: 'brew missing',
          description: 'Show missing dependencies',
          usage: 'brew missing',
          example: 'brew missing\n# Lists packages with missing deps',
        },
      ],
    },
    {
      title: 'Cask (Applications)',
      commands: [
        {
          command: 'brew install --cask',
          description: 'Install GUI application',
          usage: 'brew install --cask app_name',
          example: 'brew install --cask google-chrome\nbrew install --cask visual-studio-code\nbrew install --cask docker',
        },
        {
          command: 'brew uninstall --cask',
          description: 'Remove GUI application',
          usage: 'brew uninstall --cask app_name',
          example: 'brew uninstall --cask google-chrome\nbrew uninstall --cask --zap google-chrome  # Remove all files',
        },
        {
          command: 'brew upgrade --cask',
          description: 'Upgrade cask apps',
          usage: 'brew upgrade --cask [app_name]',
          example: 'brew upgrade --cask\n# Upgrades all cask apps\n\nbrew upgrade --cask google-chrome',
        },
        {
          command: 'brew list --cask',
          description: 'List installed casks',
          usage: 'brew list --cask',
          example: 'brew list --cask\n# Shows all installed GUI apps',
        },
        {
          command: 'brew outdated --cask',
          description: 'Show outdated casks',
          usage: 'brew outdated --cask',
          example: 'brew outdated --cask\n# Lists apps with updates',
        },
      ],
    },
    {
      title: 'Update & Cleanup',
      commands: [
        {
          command: 'brew update',
          description: 'Update Homebrew itself',
          usage: 'brew update',
          example: 'brew update\n# Updates brew and formulae list',
        },
        {
          command: 'brew outdated',
          description: 'Show outdated packages',
          usage: 'brew outdated',
          example: 'brew outdated\n# Lists packages with updates\n\nbrew outdated --formula\nbrew outdated --cask',
        },
        {
          command: 'brew cleanup',
          description: 'Remove old versions',
          usage: 'brew cleanup [package_name]',
          example: 'brew cleanup\n# Removes all old versions\n\nbrew cleanup node\nbrew cleanup -n  # Dry run\nbrew cleanup -s  # Scrub cache',
        },
        {
          command: 'brew autoremove',
          description: 'Remove unused dependencies',
          usage: 'brew autoremove',
          example: 'brew autoremove\n# Removes orphaned dependencies',
        },
      ],
    },
    {
      title: 'Pin & Hold',
      commands: [
        {
          command: 'brew pin',
          description: 'Prevent package upgrade',
          usage: 'brew pin package_name',
          example: 'brew pin node\n# Locks node at current version',
        },
        {
          command: 'brew unpin',
          description: 'Allow package upgrade',
          usage: 'brew unpin package_name',
          example: 'brew unpin node\n# Allows upgrades again',
        },
        {
          command: 'brew list --pinned',
          description: 'Show pinned packages',
          usage: 'brew list --pinned',
          example: 'brew list --pinned\n# Lists all pinned packages',
        },
      ],
    },
    {
      title: 'Services (Background)',
      commands: [
        {
          command: 'brew services start',
          description: 'Start service',
          usage: 'brew services start service_name',
          example: 'brew services start postgresql\nbrew services start redis\nbrew services start nginx',
        },
        {
          command: 'brew services stop',
          description: 'Stop service',
          usage: 'brew services stop service_name',
          example: 'brew services stop postgresql\nbrew services stop redis',
        },
        {
          command: 'brew services restart',
          description: 'Restart service',
          usage: 'brew services restart service_name',
          example: 'brew services restart postgresql\nbrew services restart nginx',
        },
        {
          command: 'brew services list',
          description: 'List all services',
          usage: 'brew services list',
          example: 'brew services list\n# Shows status of all services',
        },
        {
          command: 'brew services run',
          description: 'Run service once',
          usage: 'brew services run service_name',
          example: 'brew services run postgresql\n# Runs without launching at boot',
        },
      ],
    },
    {
      title: 'Taps (Third-party)',
      commands: [
        {
          command: 'brew tap',
          description: 'Add/list repositories',
          usage: 'brew tap [user/repo]',
          example: 'brew tap\n# Lists all taps\n\nbrew tap homebrew/cask-fonts\nbrew tap mongodb/brew',
        },
        {
          command: 'brew untap',
          description: 'Remove repository',
          usage: 'brew untap user/repo',
          example: 'brew untap homebrew/cask-fonts\nbrew untap mongodb/brew',
        },
        {
          command: 'brew tap-info',
          description: 'Show tap information',
          usage: 'brew tap-info tap_name',
          example: 'brew tap-info homebrew/core\n# Shows tap details',
        },
      ],
    },
    {
      title: 'Diagnostics',
      commands: [
        {
          command: 'brew doctor',
          description: 'Check system for issues',
          usage: 'brew doctor',
          example: 'brew doctor\n# Diagnoses common problems',
        },
        {
          command: 'brew config',
          description: 'Show Homebrew configuration',
          usage: 'brew config',
          example: 'brew config\n# Shows system and brew config',
        },
        {
          command: 'brew --prefix',
          description: 'Show Homebrew prefix',
          usage: 'brew --prefix [package]',
          example: 'brew --prefix\n# /opt/homebrew (Apple Silicon)\n# /usr/local (Intel)\n\nbrew --prefix node\n# Package install location',
        },
        {
          command: 'brew --cache',
          description: 'Show cache location',
          usage: 'brew --cache',
          example: 'brew --cache\n# Shows download cache path',
        },
        {
          command: 'brew --cellar',
          description: 'Show cellar location',
          usage: 'brew --cellar',
          example: 'brew --cellar\n# Shows installation directory',
        },
      ],
    },
    {
      title: 'Formula Creation',
      commands: [
        {
          command: 'brew create',
          description: 'Create new formula',
          usage: 'brew create URL',
          example: 'brew create https://example.com/package.tar.gz\n# Opens editor with template',
        },
        {
          command: 'brew edit',
          description: 'Edit formula',
          usage: 'brew edit package_name',
          example: 'brew edit node\n# Opens formula in editor',
        },
        {
          command: 'brew audit',
          description: 'Check formula for issues',
          usage: 'brew audit package_name',
          example: 'brew audit node\nbrew audit --strict --online node',
        },
      ],
    },
    {
      title: 'Links & Paths',
      commands: [
        {
          command: 'brew link',
          description: 'Symlink package to prefix',
          usage: 'brew link package_name',
          example: 'brew link node\nbrew link --overwrite node\nbrew link --force node',
        },
        {
          command: 'brew unlink',
          description: 'Remove symlinks',
          usage: 'brew unlink package_name',
          example: 'brew unlink node\n# Removes symlinks but keeps package',
        },
        {
          command: 'brew switch',
          description: 'Switch between versions',
          usage: 'brew switch package version',
          example: 'brew switch python 3.11\n# Note: Deprecated, use `brew link --force` instead',
        },
      ],
    },
    {
      title: 'Advanced Operations',
      commands: [
        {
          command: 'brew bundle',
          description: 'Install from Brewfile',
          usage: 'brew bundle [install]',
          example: '# Create Brewfile\nbrew bundle dump\n\n# Install from Brewfile\nbrew bundle install\n\n# Cleanup unneeded packages\nbrew bundle cleanup',
        },
        {
          command: 'brew fetch',
          description: 'Download package source',
          usage: 'brew fetch package_name',
          example: 'brew fetch node\n# Downloads without installing',
        },
        {
          command: 'brew shellenv',
          description: 'Print export statements',
          usage: 'brew shellenv',
          example: 'eval "$(brew shellenv)"\n# Add to ~/.zshrc or ~/.bash_profile',
        },
        {
          command: 'brew analytics',
          description: 'Control analytics',
          usage: 'brew analytics [on|off|state]',
          example: 'brew analytics off\nbrew analytics state\n# Disable/check analytics',
        },
      ],
    },
    {
      title: 'Cask Specific',
      commands: [
        {
          command: 'brew reinstall --cask',
          description: 'Reinstall cask app',
          usage: 'brew reinstall --cask app_name',
          example: 'brew reinstall --cask google-chrome\n# Fresh install of app',
        },
        {
          command: 'brew info --cask',
          description: 'Show cask information',
          usage: 'brew info --cask app_name',
          example: 'brew info --cask google-chrome\n# Shows app details',
        },
        {
          command: 'brew uninstall --zap',
          description: 'Remove app with all files',
          usage: 'brew uninstall --cask --zap app_name',
          example: 'brew uninstall --cask --zap google-chrome\n# Removes app + preferences + caches',
        },
        {
          command: 'brew home --cask',
          description: 'Open cask homepage',
          usage: 'brew home --cask app_name',
          example: 'brew home --cask google-chrome\n# Opens in browser',
        },
      ],
    },
    {
      title: 'Popular Formulae',
      commands: [
        {
          command: 'Development Tools',
          description: 'Common dev packages',
          usage: 'brew install [package]',
          example: 'brew install node\nbrew install python\nbrew install git\nbrew install golang\nbrew install rust\nbrew install jq\nbrew install wget curl',
        },
        {
          command: 'Databases',
          description: 'Database servers',
          usage: 'brew install [database]',
          example: 'brew install postgresql\nbrew install mysql\nbrew install mongodb-community\nbrew install redis\nbrew install sqlite',
        },
        {
          command: 'CLI Tools',
          description: 'Useful command line tools',
          usage: 'brew install [tool]',
          example: 'brew install htop\nbrew install tree\nbrew install bat  # Better cat\nbrew install exa  # Better ls\nbrew install fzf  # Fuzzy finder\nbrew install ripgrep  # Better grep\nbrew install fd    # Better find',
        },
      ],
    },
    {
      title: 'Popular Casks',
      commands: [
        {
          command: 'Browsers',
          description: 'Web browsers',
          usage: 'brew install --cask [browser]',
          example: 'brew install --cask google-chrome\nbrew install --cask firefox\nbrew install --cask brave-browser\nbrew install --cask microsoft-edge',
        },
        {
          command: 'Development',
          description: 'Developer applications',
          usage: 'brew install --cask [app]',
          example: 'brew install --cask visual-studio-code\nbrew install --cask iterm2\nbrew install --cask docker\nbrew install --cask postman\nbrew install --cask tableplus',
        },
        {
          command: 'Utilities',
          description: 'Utility applications',
          usage: 'brew install --cask [utility]',
          example: 'brew install --cask rectangle  # Window manager\nbrew install --cask alfred\nbrew install --cask notion\nbrew install --cask slack',
        },
      ],
    },
    {
      title: 'Troubleshooting',
      commands: [
        {
          command: 'Clear cache',
          description: 'Remove cached downloads',
          usage: 'rm -rf "$(brew --cache)"',
          example: 'rm -rf "$(brew --cache)"\n# Frees disk space',
        },
        {
          command: 'Fix permissions',
          description: 'Repair ownership',
          usage: 'sudo chown -R $(whoami) $(brew --prefix)/*',
          example: 'sudo chown -R $(whoami) $(brew --prefix)/*\n# Fixes permission issues',
        },
        {
          command: 'Reinstall Homebrew',
          description: 'Fresh install',
          usage: 'Uninstall then install again',
          example: '# First uninstall\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"\n\n# Then install\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
        },
        {
          command: 'brew update-reset',
          description: 'Reset repository state',
          usage: 'brew update-reset',
          example: 'brew update-reset\n# Fixes update issues',
        },
      ],
    },
    {
      title: 'Tips & Best Practices',
      commands: [
        {
          command: 'Regular maintenance',
          description: 'Keep system clean',
          usage: 'Update and cleanup regularly',
          example: 'brew update\nbrew upgrade\nbrew cleanup\nbrew doctor',
        },
        {
          command: 'Brewfile',
          description: 'Track installations',
          usage: 'Use Brewfile for reproducibility',
          example: '# Export current packages\nbrew bundle dump --force\n\n# Brewfile example:\nbrew "node"\nbrew "python"\ncask "visual-studio-code"',
        },
        {
          command: 'Auto-update',
          description: 'Enable automatic updates',
          usage: 'export HOMEBREW_AUTO_UPDATE_SECS=86400',
          example: '# Add to ~/.zshrc\nexport HOMEBREW_AUTO_UPDATE_SECS=86400\n# Updates once per day',
        },
      ],
    },
  ],
};
