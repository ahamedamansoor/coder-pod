import { Server } from 'lucide-react';

export const npmCheatsheet = {
  id: 'npm',
  name: 'NPM',
  description: 'Master Node Package Manager from basics to advanced features (NPM v6-v10)',
  icon: Server,
  colorTheme: 'purple' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Node Version Manager (NVM)',
      commands: [
        {
          command: 'NVM Installation',
          description: 'Install NVM for managing Node.js versions',
          usage: 'Install NVM using curl or wget',
          example: '# Install NVM (macOS/Linux)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\n\n# Alternative with wget\nwget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\n\n# For Windows, use nvm-windows:\n# Download from https://github.com/coreybutler/nvm-windows/releases\n\n# Reload shell configuration\nsource ~/.bashrc  # or ~/.zshrc',
        },
        {
          command: 'NVM Basic Commands',
          description: 'Essential NVM commands for version management',
          usage: 'nvm [command] [version]',
          example: '# Install Node.js version\nnvm install 18\nnvm install 20.5.0\nnvm install latest\nnvm install lts\n\n# Use specific Node.js version\nnvm use 18\nnvm use 20.5.0\nnvm use latest\nnvm use lts\n\n# List installed versions\nnvm ls\nnvm list\n\n# List available versions\nnvm ls-remote\nnvm ls-remote --lts',
        },
        {
          command: 'NVM Version Management',
          description: 'Switch between and manage Node.js versions',
          usage: 'nvm [use|current|default]',
          example: '# Show current version\nnvm current\n\n# Set default version\nnvm default 18\nnvm alias default 20.5.0\n\n# Switch to previous version\nnvm prev\n\n# Uninstall Node.js version\nnvm uninstall 18.17.0\n\n# Verify Node.js and NPM versions\nnode --version\nnpm --version\nnvm --version',
        },
        {
          command: 'NVM Aliases & Configuration',
          description: 'Create aliases and configure NVM behavior',
          usage: 'nvm alias <name> <version>',
          example: '# Create version aliases\nnvm alias stable 20.5.0\nnvm alias dev 18.17.0\nnvm alias project-default 18\n\n# List aliases\nnvm alias\n\n# Remove alias\nnvm unalias stable\n\n# NVM configuration file\n# ~/.nvm/alias  # Aliases configuration\n# ~/.nvmrc     # Project-specific Node version',
        },
        {
          command: 'Project-Specific Node Versions',
          description: 'Use .nvmrc files for project Node.js versions',
          usage: '.nvmrc file in project root',
          example: '# Create .nvmrc file\necho "18.17.0" > .nvmrc\necho "lts/*" > .nvmrc  # Use latest LTS\necho "20" > .nvmrc    # Use latest 20.x\n\n# Auto-switch to project version\nnvm use  # Automatically reads .nvmrc\n\n# Add to shell for auto-switching\necho \'nvm use\' >> ~/.bashrc\n\n# .nvmrc file content examples\n18.17.0\nlts/hydrogen\n20.5.0\nnode',
        },
        {
          command: 'NVM Integration with NPM',
          description: 'How NVM works with NPM across Node versions',
          usage: 'NPM is installed per Node.js version',
          example: '# Each Node.js version has its own NPM\nnvm use 18\nnpm --version  # Shows NPM version for Node 18\n\nnvm use 20\nnpm --version  # Shows NPM version for Node 20\n\n# Install global packages per version\nnvm use 18\nnpm install -g typescript\n\nnvm use 20\nnpm install -g typescript  # Separate installation\n\n# Migrate global packages (experimental)\nnvm install-latest-npm  # Update NPM for current Node',
        },
      ],
    },
    {
      title: 'Getting Started with NPM',
      commands: [
        {
          command: 'NPM Installation & Setup',
          description: 'Install NPM and verify setup',
          usage: 'npm --version && node --version',
          example: '# NPM comes with Node.js installation\n# Install Node.js from https://nodejs.org/\n# Or using version manager:\n# nvm install 20\n# nvm use 20\n\n# Verify installation\nnode --version  # v20.x.x\nnpm --version   # v10.x.x\n\n# Check NPM environment\nnpm doctor\nnpm config list',
        },
        {
          command: 'NPM Help System',
          description: 'Getting help with NPM commands',
          usage: 'npm help [command] or npm [command] --help',
          example: '# General help\nnpm help\n\n# Help for specific command\nnpm help install\nnpm install --help\n\n# List all available commands\nnpm --help',
        },
        {
          command: 'NPM Configuration',
          description: 'Configure NPM settings and preferences',
          usage: 'npm config set <key> <value>',
          example: '# Set default registry\nnpm config set registry https://registry.npmjs.org/\n\n# Set default author\nnpm config set init-author-name "Your Name"\nnpm config set init-author-email "your.email@example.com"\n\n# Set save-exact for precise versions\nnpm config set save-exact true\n\n# View all configuration\nnpm config list\nnpm config list --json  # JSON format',
        },
        {
          command: 'NPM Environment Check',
          description: 'Diagnose NPM setup issues',
          usage: 'npm doctor',
          example: 'npm doctor\n# Checks:\n# - npm ping connectivity\n# - registry connectivity\n# - permissions on npm cache\n# - permissions on local node_modules\n# - Node.js version compatibility',
        },
      ],
    },
    {
      title: 'Initializing Projects',
      commands: [
        {
          command: 'Create New Package',
          description: 'Initialize a new Node.js project',
          usage: 'npm init [-y|--yes]',
          example: '# Interactive mode (prompts for all fields)\nnpm init\n\n# Accept all defaults\nnpm init -y\nnpm init --yes\n\n# Specify package name and version\nnpm init --scope=@mycompany\nnpm init my-new-project',
        },
        {
          command: 'Package Initializers',
          description: 'Use community project templates',
          usage: 'npm init <initializer>',
          example: '# React application\nnpm init react-app my-app\n\n# Vite project\nnpm init vite@latest my-project\n\n# Next.js application\nnpm init next-app my-next-app\n\n# TypeScript project\nnpm init typescript-project',
        },
        {
          command: 'Create Command (NPM 7+)',
          description: 'Modern way to create projects',
          usage: 'npm create <initializer>',
          example: '# Create Vite project\nnpm create vite@latest my-vite-app\n\n# Create React app\nnpm create react-app my-react-app\n\n# Create with specific template\nnpm create vite@latest my-app --template react-ts',
        },
        {
          command: 'Package.json Structure',
          description: 'Understanding package.json fields',
          usage: 'JSON configuration file',
          example: '{\n  "name": "my-project",\n  "version": "1.0.0",\n  "description": "A sample project",\n  "main": "index.js",\n  "type": "module",           // ES modules\n  "scripts": {\n    "start": "node index.js",\n    "test": "jest"\n  },\n  "keywords": ["node", "javascript"],\n  "author": "Your Name",\n  "license": "MIT",\n  "dependencies": {},\n  "devDependencies": {},\n  "engines": {\n    "node": ">=18.0.0",\n    "npm": ">=9.0.0"\n  }\n}',
        },
      ],
    },
    {
      title: 'Installing Dependencies',
      commands: [
        {
          command: 'Install All Dependencies',
          description: 'Install packages from package.json',
          usage: 'npm install',
          example: '# Install all dependencies\nnpm install\nnpm i  # Short form\n\n# Install with exact versions from package-lock.json\nnpm ci  # Clean install for CI/CD',
        },
        {
          command: 'Install Production Dependencies',
          description: 'Add packages to dependencies',
          usage: 'npm install <package>[@version]',
          example: '# Install latest version\nnpm install react\n\n# Install specific version\nnpm install react@18.2.0\n\n# Install version range\nnpm install react@^18.0.0\n\n# Install from git repository\nnpm install https://github.com/user/repo.git\n\n# Install local package\nnpm install ./my-local-package',
        },
        {
          command: 'Install Development Dependencies',
          description: 'Add packages for development only',
          usage: 'npm install --save-dev <package>',
          example: '# Install as dev dependency\nnpm install --save-dev typescript\nnpm install -D eslint\nnpm i -D prettier @types/node\n\n# Dev dependencies won\'t be installed in production\nnpm install --production',
        },
        {
          command: 'Global Package Installation',
          description: 'Install packages globally for system-wide use',
          usage: 'npm install --global <package>',
          example: '# Install globally\nnpm install --global nodemon\nnpm install -g typescript\nnpm i -g @angular/cli\n\n# List global packages\nnpm list -g --depth=0\n\n# Uninstall global package\nnpm uninstall -g nodemon',
        },
        {
          command: 'Optional Dependencies',
          description: 'Install packages that may not be required',
          usage: 'npm install --save-optional <package>',
          example: '# Install optional dependency\nnpm install --save-optional fsevents\nnpm install -O chalk\n\n# Optional dependencies are not installed by default\n# Use --include=optional to install them\nnpm install --include=optional',
        },
        {
          command: 'Exact Version Installation',
          description: 'Install packages without version ranges',
          usage: 'npm install --save-exact <package>',
          example: '# Install exact version (no ^ or ~)\nnpm install --save-exact react@18.2.0\nnpm install -E lodash@4.17.21\n\n# This prevents automatic updates\n# package.json will have: "react": "18.2.0" instead of "^18.2.0"',
        },
        {
          command: 'Install Without Saving',
          description: 'Install packages temporarily',
          usage: 'npm install --no-save <package>',
          example: '# Install without adding to package.json\nnpm install --no-save test-package\n\n# Useful for testing or one-time use\nnpm install --no-save webpack-cli',
        },
        {
          command: 'Clean Install (CI/CD)',
          description: 'Fast, reliable installation for automated environments',
          usage: 'npm ci',
          example: '# Clean install (removes node_modules first)\nnpm ci\n\n# Install with optional dependencies\nnpm ci --include=optional\n\n# Install only production dependencies\nnpm ci --only=production\n\n# Much faster than npm install for CI/CD',
        },
      ],
    },
    {
      title: 'Managing Dependencies',
      commands: [
        {
          command: 'Remove Packages',
          description: 'Uninstall installed packages',
          usage: 'npm uninstall <package>',
          example: '# Remove package\nnpm uninstall lodash\nnpm un react  # Short form\n\n# Remove from specific dependency type\nnpm uninstall --save-dev typescript\nnpm uninstall --global nodemon\n\n# Remove multiple packages\nnpm uninstall lodash react axios',
        },
        {
          command: 'Update Packages',
          description: 'Update installed packages to latest versions',
          usage: 'npm update [package]',
          example: '# Update all packages (within version ranges)\nnpm update\n\n# Update specific package\nnpm update react\n\n# Update global packages\nnpm update -g\nnpm update -g npm  # Update npm itself\n\n# Dry run to see what would be updated\nnpm update --dry-run',
        },
        {
          command: 'Check Outdated Packages',
          description: 'Find packages that need updating',
          usage: 'npm outdated',
          example: '# Check for outdated packages\nnpm outdated\n\n# Check global packages\nnpm outdated --global\n\n# Output in JSON format\nnpm outdated --json',
        },
        {
          command: 'Security Audit',
          description: 'Check and fix security vulnerabilities',
          usage: 'npm audit [fix]',
          example: '# Run security audit\nnpm audit\n\n# Automatically fix vulnerabilities\nnpm audit fix\n\n# Force fix (including breaking changes)\nnpm audit fix --force\n\n# JSON output for automation\nnpm audit --json',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Package Information & Discovery',
      commands: [
        {
          command: 'List Installed Packages',
          description: 'View installed dependencies and their versions',
          usage: 'npm list [--depth=n]',
          example: '# List all dependencies (tree view)\nnpm list\nnpm ls  # Short form\n\n# List only top-level dependencies\nnpm list --depth=0\n\n# List global packages\nnpm list -g --depth=0\n\n# Output as JSON\nnpm list --json\n\n# List only production dependencies\nnpm list --production',
        },
        {
          command: 'View Package Information',
          description: 'Get detailed information about packages',
          usage: 'npm view <package> [field]',
          example: '# View package details\nnpm view react\nnpm info react  # Alias\n\n# View specific field\nnpm view react version\nnpm view react description\nnpm view react dependencies\n\n# View all available versions\nnpm view react versions\n\n# View package maintainers\nnpm view react maintainers',
        },
        {
          command: 'Search for Packages',
          description: 'Find packages in the npm registry',
          usage: 'npm search <term>',
          example: '# Search packages\nnpm search react router\nnpm s "date formatter"  # Short form\n\n# Limit search results\nnpm search react --searchlimit=10\n\n# JSON output\nnpm search react --json',
        },
        {
          command: 'Package Repository & Documentation',
          description: 'Quick access to package resources',
          usage: 'npm repo|docs|home <package>',
          example: '# Open package repository\nnpm repo react\n\n# Open package documentation\nnpm docs lodash\n\n# Open package homepage\nnpm home express\n\n# Open in browser automatically',
        },
      ],
    },
    {
      title: 'Running Scripts & Tasks',
      commands: [
        {
          command: 'Run Custom Scripts',
          description: 'Execute scripts defined in package.json',
          usage: 'npm run <script-name>',
          example: '# Run script\nnpm run build\nnpm run dev\nnpm run test\n\n# Run with arguments\nnpm run test -- --watch\nnpm start -- --port 3001\n\n# Silent mode (no npm output)\nnpm run --silent build',
        },
        {
          command: 'Lifecycle Scripts',
          description: 'Built-in npm lifecycle scripts',
          usage: 'npm start|test|stop|restart',
          example: '# Built-in scripts\nnpm start   # Runs "start" script\nnpm test    # Runs "test" script (alias: npm t)\nnpm stop    # Runs "stop" script\nnpm restart # Runs "stop" then "start"',
        },
        {
          command: 'Pre/Post Hooks',
          description: 'Automatic script execution hooks',
          usage: '"pre<script>": "...", "post<script>": "..."',
          example: '{\n  "scripts": {\n    "pretest": "eslint .",\n    "test": "jest",\n    "posttest": "npm run coverage",\n    "prebuild": "npm run clean",\n    "build": "webpack",\n    "postbuild": "npm run optimize"\n  }\n}\n\n# npm run test will automatically run pretest and posttest',
        },
        {
          command: 'Sequential Commands',
          description: 'Combine multiple commands in scripts',
          usage: '"script": "cmd1 && cmd2" or "cmd1 || cmd2"',
          example: '{\n  "scripts": {\n    "build": "tsc && webpack",\n    "dev": "npm run build && npm run serve",\n    "test:cover": "jest --coverage || echo Tests failed",\n    "clean:all": "rm -rf dist && rm -rf coverage"\n  }\n}',
        },
      ],
    },
    {
      title: 'NPX - Package Executor',
      commands: [
        {
          command: 'Execute Packages',
          description: 'Run packages without installing them',
          usage: 'npx <package> [args]',
          example: '# Execute locally installed package\nnpx eslint .\n\n# Execute without installing\nnpx create-react-app my-app\nnpx typescript --init\n\n# Execute specific version\nnpx create-react-app@5.0.0 my-app',
        },
        {
          command: 'Install and Execute',
          description: 'Temporarily install and run package',
          usage: 'npx -p <package> <command>',
          example: '# Install and run command\nnpx -p cowsay cowsay "Hello World"\nnpx -p typescript tsc --init\n\n# Multiple packages\nnpx -p webpack -p webpack-cli webpack --mode production',
        },
        {
          command: 'NPX Options',
          description: 'Control npx behavior',
          usage: 'npx [options] <package>',
          example: '# Skip installation confirmation\nnpx --yes create-next-app@latest\nnpx -y vite my-project\n\n# Use only if already installed\nnpx --no-install eslint\n\n# Clear cache\nnpx --clear-cache\n\n# Specify node version\nnpx --node=16 node --version',
        },
        {
          command: 'Interactive Mode',
          description: 'Interactive package execution',
          usage: 'npx --interactive <package>',
          example: '# Interactive mode with prompts\nnpx --interactive create-react-app\n\n# Combine with other options\nnpx -y --interactive vite my-app',
        },
      ],
    },
    {
      title: 'Cache Management',
      commands: [
        {
          command: 'Clear Cache',
          description: 'Clean npm cache to fix issues',
          usage: 'npm cache clean [--force]',
          example: '# Clear cache (requires --force in npm 5+)\nnpm cache clean --force\n\n# Alternative: verify and clean\nnpm cache verify\nnpm cache clean --force',
        },
        {
          command: 'Verify Cache',
          description: 'Check cache integrity and garbage collect',
          usage: 'npm cache verify',
          example: '# Verify cache integrity\nnpm cache verify\n\n# Fixes corrupted cache entries\n# Frees up space from unused packages',
        },
        {
          command: 'View Cache Contents',
          description: 'Inspect cached packages',
          usage: 'npm cache ls [package]',
          example: '# List all cached packages\nnpm cache ls\n\n# List specific package\nnpm cache ls react\n\n# View cache location\nnpm config get cache',
        },
        {
          command: 'Cache Configuration',
          description: 'Configure cache behavior',
          usage: 'npm config set cache <path>',
          example: '# Set custom cache location\nnpm config set cache /path/to/cache\n\n# Disable cache (not recommended)\nnpm config set cache false\n\n# Set cache max size\nnpm config set maxsockets 5',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Configuration',
      commands: [
        {
          command: 'Configuration Management',
          description: 'Manage npm configuration settings',
          usage: 'npm config <set|get|delete|list|edit> <key> [value]',
          example: '# Set configuration\nnpm config set registry https://registry.npmjs.org/\nnpm config set proxy http://proxy.company.com:8080\nnpm config set https-proxy http://proxy.company.com:8080\n\n# Get configuration\nnpm config get registry\nnpm config get proxy\n\n# Delete configuration\nnpm config delete proxy\n\n# List all configuration\nnpm config list\nnpm config list --json  # JSON format\n\n# Edit configuration file\nnpm config edit  # Opens .npmrc in editor',
        },
        {
          command: 'Project Configuration',
          description: 'Use .npmrc files for project-specific settings',
          usage: '.npmrc file in project root',
          example: '# Project .npmrc file\nregistry=https://registry.npmjs.org/\nsave-exact=true\n@mycompany:registry=https://npm.mycompany.com/\n//npm.mycompany.com/:_authToken=${NPM_TOKEN}\n\n# Environment-specific configs\n.npmrc          # Project config\n~/.npmrc         # User config\nglobal .npmrc    # System config',
        },
        {
          command: 'Environment Variables',
          description: 'Configure npm using environment variables',
          usage: 'npm_config_<key>=<value>',
          example: '# Set registry via environment\nexport npm_config_registry=https://registry.npmjs.org/\n\n# Set proxy via environment\nexport npm_config_proxy=http://proxy.company.com:8080\n\n# Use in CI/CD\nenv npm_config_registry=https://private-registry.com npm install',
        },
        {
          command: 'Authentication Configuration',
          description: 'Configure private registry access',
          usage: 'npm login or .npmrc authentication',
          example: '# Login to registry\nnpm login\n# Enter username, password, email\n\n# Or configure in .npmrc\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n//private-registry.com/:_authToken=your-token\n\n# Scoped package authentication\n@mycompany:registry=https://npm.mycompany.com/\n//npm.mycompany.com/:_authToken=${NPM_TOKEN}',
        },
      ],
    },
    {
      title: 'Package Publishing & Distribution',
      commands: [
        {
          command: 'Registry Authentication',
          description: 'Login and manage registry access',
          usage: 'npm login|logout|whoami',
          example: '# Login to registry\nnpm login\n# Enter username, password, email (2FA if enabled)\n\n# Check current user\nnpm whoami\n\n# Logout from registry\nnpm logout\n\n# Login to scoped registry\nnpm login --scope=@mycompany --registry=https://npm.mycompany.com',
        },
        {
          command: 'Publish Packages',
          description: 'Publish packages to npm registry',
          usage: 'npm publish [options]',
          example: '# Publish package\nnpm publish\n\n# Publish scoped package as public\nnpm publish --access=public\n\n# Publish to different registry\nnpm publish --registry=https://npm.mycompany.com\n\n# Publish with tag\nnpm publish --tag beta\n\n# Dry run (check without publishing)\nnpm publish --dry-run',
        },
        {
          command: 'Version Management',
          description: 'Manage package versions automatically',
          usage: 'npm version <major|minor|patch|prerelease>',
          example: '# Update version and create git tag\nnpm version patch    # 1.0.0 -> 1.0.1\nnpm version minor    # 1.0.0 -> 1.1.0\nnpm version major    # 1.0.0 -> 2.0.0\n\n# Pre-release versions\nnpm version prerelease --preid=alpha  # 1.0.0 -> 1.0.1-alpha.0\nnpm version prerelease --preid=beta   # 1.0.1-alpha.0 -> 1.0.1-alpha.1\n\n# Specific version\nnpm version 1.2.3\n\n# Skip git operations\nnpm version patch --no-git-tag-version',
        },
        {
          command: 'Package Deprecation & Unpublish',
          description: 'Manage published package lifecycle',
          usage: 'npm deprecate|unpublish',
          example: '# Deprecate version\nnpm deprecate my-package@1.0.0 "Use version 2.0.0 instead"\nnpm deprecate my-package@<1.2.0 "Security issues in older versions"\n\n# Unpublish version (within 72 hours)\nnpm unpublish my-package@1.0.0\n\n# Unpublish entire package (force)\nnpm unpublish my-package --force',
        },
        {
          command: 'Create Package Tarball',
          description: 'Create distributable package archive',
          usage: 'npm pack',
          example: '# Create .tgz file\nnpm pack\n\n# Pack specific package\nnpm pack ./my-package\n\n# Include readme in pack\nnpm pack --pack-destination ./dist',
        },
      ],
    },
    {
      title: 'Advanced Security Features',
      commands: [
        {
          command: 'Security Audit',
          description: 'Comprehensive security vulnerability scanning',
          usage: 'npm audit [options]',
          example: '# Run security audit\nnpm audit\n\n# JSON output for automation\nnpm audit --json\n\n# Fix vulnerabilities automatically\nnpm audit fix\n\n# Force fix (including breaking changes)\nnpm audit fix --force\n\n# Fix only production dependencies\nnpm audit fix --production\n\n# Check audit signatures (npm 10+)\nnpm audit signatures',
        },
        {
          command: 'Package Signatures',
          description: 'Verify package integrity and authenticity',
          usage: 'npm audit signatures (npm 10+)',
          example: '# Verify package signatures\nnpm audit signatures\n\n# Enable signature verification\nnpm config set audit-signature-verification true\n\n# Check specific package signature\nnpm audit react --signatures',
        },
        {
          command: 'Security Best Practices',
          description: 'Configure npm for enhanced security',
          usage: 'Security configuration options',
          example: '# Enable strict SSL\nnpm config set strict-ssl true\n\n# Set audit level\nnpm config set audit-level moderate\n# Options: low, moderate, high, critical\n\n# Enable package provenance\nnpm config set package-provenance true\n\n# Use private registry with authentication\nnpm config set registry https://secure-registry.com',
        },
      ],
    },
    {
      title: 'Workspaces & Monorepos',
      commands: [
        {
          command: 'Workspace Configuration',
          description: 'Set up npm workspaces for monorepo management',
          usage: 'workspaces property in package.json',
          example: '# Root package.json\n{\n  "name": "my-monorepo",\n  "version": "1.0.0",\n  "workspaces": [\n    "packages/*",\n    "apps/*",\n    "libs/*"\n  ],\n  "scripts": {\n    "build": "npm run build --workspaces",\n    "test": "npm run test --workspaces"\n  }\n}',
        },
        {
          command: 'Workspace Commands',
          description: 'Run commands in specific or all workspaces',
          usage: 'npm <command> --workspace=<name>',
          example: '# Run in specific workspace\nnpm run build --workspace=packages/app\nnpm install react --workspace=packages/ui\n\n# Run in all workspaces\nnpm run test --workspaces\nnpm install --workspaces\n\n# List workspaces\nnpm ls --workspaces\n\n# Install dependencies for all workspaces\nnpm install --workspaces',
        },
        {
          command: 'Workspace Management',
          description: 'Advanced workspace operations',
          usage: 'Workspace-specific commands',
          example: '# Add dependency to specific workspace\nnpm install lodash --workspace=packages/utils\n\n# Add dev dependency to all workspaces\nnpm install --save-dev jest --workspaces\n\n# Remove from workspace\nnpm uninstall react --workspace=packages/ui\n\n# Run script in workspace context\nnpm run dev --workspace=packages/app',
        },
        {
          command: 'Linking Local Packages',
          description: 'Link local packages for development',
          usage: 'npm link [package]',
          example: '# In package directory\ncd my-package && npm link\n\n# In consuming project\ncd my-app && npm link my-package\n\n# Unlink\nnpm unlink my-package\n\n# Link in workspace context\nnpm link --workspace=packages/utils',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Advanced NVM & Node Management',
      commands: [
        {
          command: 'NVM Advanced Configuration',
          description: 'Advanced NVM setup and customization',
          usage: 'NVM environment variables and configuration',
          example: '# NVM environment variables\nexport NVM_DIR="$HOME/.nvm"\nexport NVM_NODEJS_ORG_MIRROR="https://nodejs.org/dist"\nexport NVM_IOJS_ORG_MIRROR="https://iojs.org/dist"\n\n# Custom Node.js mirror for faster downloads\nexport NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"\n\n# NVM shell integration\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"',
        },
        {
          command: 'NVM Scripting & Automation',
          description: 'Automate Node.js version management',
          usage: 'NVM in scripts and CI/CD',
          example: '# CI/CD example with NVM\n#!/bin/bash\n\n# Load NVM\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"\n\n# Install and use specific Node version\nnvm install 18\nnvm use 18\n\n# Install dependencies and run tests\nnpm ci\nnpm test\n\n# Docker with NVM\nFROM node:18-alpine\nRUN npm install -g nvm\nRUN nvm install 20 && nvm use 20',
        },
        {
          command: 'Multiple Node Version Managers',
          description: 'Managing multiple version managers',
          usage: 'NVM vs fnm vs Volta vs asdf',
          example: '# Alternative Node version managers\n\n# fnm (Fast Node Manager)\ncurl -fsSL https://fnm.vercel.app/install | bash\nfnm install 18\nfnm use 18\n\n# Volta (JavaScript Tool Manager)\ncurl https://get.volta.sh | bash\nvolta install node@18\nvolta pin node@18\n\n# asdf (Version manager for multiple languages)\nasdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git\nasdf install nodejs 18.17.0\nasdf global nodejs 18.17.0\n\n# Convert from NVM to fnm\nfnm migrate',
        },
        {
          command: 'NVM Troubleshooting',
          description: 'Common NVM issues and solutions',
          usage: 'Debug NVM problems',
          example: '# NVM not found\ncommand -v nvm  # Check if NVM is loaded\n\n# Reload NVM\nsource ~/.nvm/nvm.sh\n\n# Check NVM installation\nls -la ~/.nvm\n\n# Fix permission issues\nchmod +x ~/.nvm/nvm.sh\n\n# NVM slow downloads\nexport NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"\n\n# Reset NVM\nrm -rf ~/.nvm\n# Reinstall NVM',
        },
        {
          command: 'NVM Performance Optimization',
          description: 'Optimize NVM for better performance',
          usage: 'Performance tuning for NVM',
          example: '# Use faster mirrors\nexport NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"\n\n# Preload Node versions\nnvm install 18 --reinstall-packages-from=current\n\n# Use binary packages (faster installation)\nexport NVM_MAKE_OPTS="-j$(nproc)"\n\n# Cache NPM packages globally\nnpm config set cache ~/.npm-global-cache\n\n# Parallel installations\nnvm install 18 && nvm install 20 &',
        },
      ],
    },
    {
      title: 'Dependency Analysis & Optimization',
      commands: [
        {
          command: 'Dependency Tree Analysis',
          description: 'Analyze and understand dependency relationships',
          usage: 'npm explain|ls|tree',
          example: '# Explain why package is installed\nnpm explain lodash\nnpm why lodash  # Alias\n\n# View dependency tree\nnpm ls --json\n\n# Check for duplicates\nnpm ls --depth=0 | grep \\.\\*\\.\n\n# Find circular dependencies\nnpm ls --all',
        },
        {
          command: 'Dependency Query (npm 8.16+)',
          description: 'Query dependency tree with CSS selectors',
          usage: 'npm query <selector>',
          example: '# Query dependencies\nnpm query "[name=react]"  # Find react\nnpm query ":root > *"     # Direct dependencies\nnpm query "#react"        # By package name as ID\nnpm query ".dev"          # Dev dependencies\nnpm query ":empty"        # Packages without dependencies\nnpm query ":scope(@react)" # Scoped packages',
        },
        {
          command: 'Package Deduplication',
          description: 'Reduce duplicate dependencies',
          usage: 'npm dedupe',
          example: '# Deduplicate dependencies\nnpm dedupe\nnpm ddp  # Short form\n\n# Check before deduping\nnpm ls --depth=0\nnpm dedupe --dry-run\n\n# Dedupe global packages\nnpm dedupe -g',
        },
        {
          command: 'Dependency Diffing',
          description: 'Compare package versions and dependencies',
          usage: 'npm diff [package]',
          example: '# Compare installed vs package.json\nnpm diff\n\n# Compare specific package versions\nnpm diff react@17.0.0 react@18.0.0\n\n# Compare with registry\nnpm diff --diff=package-name',
        },
        {
          command: 'Funding Information',
          description: 'View package funding details',
          usage: 'npm fund',
          example: '# View funding info\nnpm fund\n\n# View specific package funding\nnpm fund react\n\n# JSON output\nnpm fund --json',
        },
      ],
    },
    {
      title: 'Advanced Scripting & Automation',
      commands: [
        {
          command: 'Package.json Scripts Advanced',
          description: 'Complex script configurations and automation',
          usage: 'Advanced package.json script patterns',
          example: '{\n  "scripts": {\n    "scripts": {\n      "preinstall": "node scripts/preinstall.js",\n      "postinstall": "node scripts/postinstall.js",\n      "prepare": "npm run build",\n      "prepack": "npm run test && npm run build",\n      "postpack": "npm run cleanup"\n    },\n    "concurrent": {\n      "dev": "concurrently \\"npm run dev:server\\" \\"npm run dev:client\\"",\n      "test:all": "concurrently \\"npm run test:unit\\" \\"npm run test:integration\\""\n    },\n    "conditional": {\n      "build:prod": "cross-env NODE_ENV=production npm run build",\n      "build:dev": "cross-env NODE_ENV=development npm run build"\n    }\n  }\n}',
        },
        {
          command: 'Lifecycle Script Hooks',
          description: 'Complete npm lifecycle script reference',
          usage: 'npm lifecycle scripts',
          example: '# Installation lifecycle\npreinstall, install, postinstall\nprepack, pack, postpack\nprepare, prepublish, prepublishOnly\n\n# Publishing lifecycle\nprepublishOnly, prepare, prepublish, publish, postpublish\n\n# Other lifecycle\nprestart, start, poststart\nprestop, stop, poststop\nprerestart, restart, postrestart\npretest, test, posttest\npreuninstall, uninstall, postuninstall',
        },
        {
          command: 'Script Execution Context',
          description: 'Environment variables and context in scripts',
          usage: 'npm script environment',
          example: '# Available environment variables in scripts\nnpm_package_name\nnpm_package_version\nnpm_config_<key>\nnpm_lifecycle_event\nnpm_node_execpath\nnpm_execpath\n\n# Example usage in script\n"scripts": {\n  "build": "echo Building $npm_package_name@$npm_package_version",\n  "deploy": "echo $npm_lifecycle_event on $npm_config_env"\n}',
        },
        {
          command: 'Cross-Platform Scripts',
          description: 'Write scripts that work on all platforms',
          usage: 'Cross-platform scripting tools',
          example: '# Use cross-platform tools\n{\n  "scripts": {\n    "clean": "rimraf dist",\n    "copy": "cpy src/*.js dist/",\n    "set-env": "cross-env NODE_ENV=production",\n    "run-series": "run-s clean build test",\n    "run-parallel": "run-p lint test"\n  }\n}\n\n# Install dev dependencies\nnpm install --save-dev rimraf cpy cross-env npm-run-all',
        },
      ],
    },
    {
      title: 'Package Manager Ecosystem',
      commands: [
        {
          command: 'Alternative Package Managers',
          description: 'Compare npm with other package managers',
          usage: 'Package manager alternatives',
          example: '# Yarn (Facebook)\nyarn install\nyarn add react\nyarn remove lodash\nyarn upgrade\n\n# pnpm (Fast, disk efficient)\npnpm install\npnpm add react\npnpm remove lodash\npnpm update\n\n# Bun (Ultra-fast runtime)\nbun install\nbun add react\nbun remove lodash\nbun update',
        },
        {
          command: 'Package Manager Migration',
          description: 'Convert between package managers',
          usage: 'Migration tools and commands',
          example: '# npm to Yarn\nyarn import  # Convert package-lock.json to yarn.lock\n\n# npm to pnpm\npnpm import  # Convert package-lock.json to pnpm-lock.yaml\n\n# pnpm to npm\npnpm dlx pnpm-to-npm\n\n# Generate lock files\nnpm install --package-lock-only  # Generate only lock file',
        },
        {
          command: 'Package Manager Features Comparison',
          description: 'Key differences between package managers',
          usage: 'Feature comparison',
          example: '# npm: Default, largest registry\n# Yarn: Parallel installs, deterministic\n# pnpm: Content-addressable storage, efficient\n# Bun: All-in-one runtime, fastest\n\n# Common commands mapping\nnpm install  -> yarn install / pnpm install / bun install\nnpm add      -> yarn add / pnpm add / bun add\nnpm run      -> yarn run / pnpm run / bun run\nnpm audit    -> yarn audit / pnpm audit / bun audit',
        },
      ],
    },
    {
      title: 'Advanced NPM Utilities',
      commands: [
        {
          command: 'Package Execution & Exploration',
          description: 'Execute and explore installed packages',
          usage: 'npm exec|explore|prefix',
          example: '# Execute package binary\nnpm exec eslint .\nnpm x jest  # Short form\n\n# Explore installed package\nnpm explore lodash -- ls -la\n\n# Show project paths\nnpm prefix           # Project root\nnpm prefix -g        # Global prefix\nnpm root             # node_modules path\nnpm root -g          # Global node_modules\nnpm bin              # .bin directory\nnpm bin -g           # Global .bin',
        },
        {
          command: 'Shell Completion',
          description: 'Enable tab completion for npm commands',
          usage: 'npm completion',
          example: '# Bash completion\nnpm completion >> ~/.bashrc\nsource ~/.bashrc\n\n# Zsh completion\nnpm completion >> ~/.zshrc\nsource ~/.zshrc\n\n# Fish completion\nnpm completion >> ~/.config/fish/completions/npm.fish',
        },
        {
          command: 'Team Collaboration',
          description: 'NPM features for team development',
          usage: 'Team workflow commands',
          example: '# Share configuration\nnpm team list\nnpm team create <team-name>\nnpm team add <team-name> <user>\n\n# Organization packages\nnpm org list myorg\nnpm org create myorg\n\n# Scoped packages for teams\n@mycompany/shared-utils\n@mycompany/ui-components',
        },
        {
          command: 'Package Analytics',
          description: 'Monitor package usage and downloads',
          usage: 'Package analytics commands',
          example: '# Check package downloads (via web)\n# https://www.npmjs.com/package/<package-name>\n\n# View package stats\nnpm view react downloads\n\n# Compare package popularity\nnpm view react downloads\nnpm view vue downloads',
        },
      ],
    },
    {
      title: 'Troubleshooting & Best Practices',
      commands: [
        {
          command: 'Common Issues & Solutions',
          description: 'Resolve frequent npm problems',
          usage: 'Troubleshooting commands',
          example: '# Clear cache and reinstall\nnpm cache clean --force\nrm -rf node_modules package-lock.json\nnpm install\n\n# Fix permission errors\nsudo chown -R $USER ~/.npm\nsudo chown -R $USER /usr/local/lib/node_modules\n\n# Fix peer dependency conflicts\nnpm install --legacy-peer-deps\n\n# Fix network issues\nnpm config set registry https://registry.npmjs.org/\nnpm config set proxy null\nnpm config set https-proxy null',
        },
        {
          command: 'Debug & Diagnostics',
          description: 'Advanced debugging techniques',
          usage: 'Debug commands and options',
          example: '# Verbose logging\nnpm install --verbose\nnpm install --loglevel verbose\n\n# Time operations\nnpm install --timing\n# Check timing info: .npm/_logs/*.log\n\n# Dry run operations\nnpm install --dry-run\nnpm update --dry-run\n\n# Check npm environment\nnpm doctor\nnpm config list',
        },
        {
          command: 'Performance Optimization',
          description: 'Optimize npm performance',
          usage: 'Performance tuning commands',
          example: '# Increase network concurrency\nnpm config set maxsockets 10\n\n# Use local registry (mirror)\nnpm config set registry http://localhost:4873\n\n# Disable strict SSL (only for development)\nnpm config set strict-ssl false\n\n# Use npm cache efficiently\nnpm config set cache /path/to/fast/ssd\n\n# Optimize for CI/CD\nnpm ci --prefer-offline --no-audit',
        },
        {
          command: 'Security Best Practices',
          description: 'Security configuration and monitoring',
          usage: 'Security commands',
          example: '# Regular security audits\nnpm audit\nnpm audit fix\n\n# Configure security settings\nnpm config set audit-level high\nnpm config set audit-signature-verification true\n\n# Use private registry with auth\n//private-registry.com/:_authToken=${NPM_TOKEN}\n\n# Monitor for vulnerabilities\nnpm audit --json > audit-report.json',
        },
      ],
    },
    {
      title: 'Command Reference & Flags',
      commands: [
        {
          command: 'Essential Command Flags',
          description: 'Commonly used npm command flags',
          usage: 'npm [command] [flags]',
          example: '# Dependency management flags\n--save / -S           # Save to dependencies (default)\n--save-dev / -D       # Save to devDependencies\n--save-optional / -O  # Save to optionalDependencies\n--save-exact / -E     # Save exact version\n--global / -g         # Global operation\n--production          # Skip devDependencies\n\n# Output flags\n--json                # JSON output\n--dry-run             # Simulate without changes\n--silent              # Minimal output\n--verbose             # Detailed output\n--loglevel <level>    # Set log level (silent, error, warn, notice, http, info, verbose, silly)',
        },
        {
          command: 'Advanced Configuration Flags',
          description: 'Advanced npm configuration options',
          usage: 'Configuration flags',
          example: '# Registry configuration\n--registry <url>      # Use custom registry\n--scope <scope>       # Set scope for scoped packages\n\n# Authentication\n--auth-token <token>  # Authentication token\n--always-auth         # Always authenticate\n\n# Network configuration\n--proxy <url>         # HTTP proxy\n--https-proxy <url>   # HTTPS proxy\n--strict-ssl          # Enforce SSL (default true)\n\n# Cache configuration\n--cache <path>        # Custom cache path\n--no-cache           # Disable cache',
        },
        {
          command: 'Quick Command Reference',
          description: 'Essential npm commands at a glance',
          usage: 'Command cheat sheet',
          example: '# Package management\nnpm i <pkg>           # Install package\nnpm un <pkg>          # Uninstall package\nnpm up <pkg>          # Update package\nnpm ls                 # List packages\n\n# Information\nnpm view <pkg>        # View package info\nnpm search <term>     # Search packages\nnpm audit             # Security audit\n\n# Scripts\nnpm run <script>      # Run script\nnpm start             # Start app\nnpm test              # Run tests\n\n# Publishing\nnpm publish           # Publish package\nnpm version <type>    # Bump version',
        },
      ],
    },
  ],
};
