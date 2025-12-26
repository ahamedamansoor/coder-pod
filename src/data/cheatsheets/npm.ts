import { Server } from 'lucide-react';

export const npmCheatsheet = {
  id: 'npm',
  name: 'NPM',
  description: 'Master Node Package Manager from basics to advanced features (NPM v6-v10)',
  icon: Server,
  colorTheme: 'purple' as const,
  sections: [
    {
      title: 'Node Version Manager (NVM)',
      commands: [
        {
          command: 'Install NVM with curl',
          description: 'Install NVM using curl command',
          usage: 'NVM installation on macOS/Linux',
          example: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`,
        },
        {
          command: 'Install NVM with wget',
          description: 'Install NVM using wget command',
          usage: 'Alternative NVM installation',
          example: `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`,
        },
        {
          command: 'Install NVM on Windows',
          description: 'Install NVM for Windows systems',
          usage: 'Windows NVM installation',
          example: `# Download from https://github.com/coreybutler/nvm-windows/releases`,
        },
        {
          command: 'Reload Shell Configuration',
          description: 'Reload shell to activate NVM',
          usage: 'Post-installation setup',
          example: `source ~/.bashrc  # or ~/.zshrc`,
        },
        {
          command: 'Install Node.js Version',
          description: 'Install specific Node.js version',
          usage: 'nvm install <version>',
          example: `nvm install 18
nvm install 20.5.0
nvm install latest
nvm install lts`,
        },
        {
          command: 'Use Node.js Version',
          description: 'Switch to specific Node.js version',
          usage: 'nvm use <version>',
          example: `nvm use 18
nvm use 20.5.0
nvm use latest
nvm use lts`,
        },
        {
          command: 'List Installed Node Versions',
          description: 'Show all installed Node.js versions',
          usage: 'nvm ls or nvm list',
          example: `nvm ls
nvm list`,
        },
        {
          command: 'List Available Node Versions',
          description: 'Show available Node.js versions for installation',
          usage: 'nvm ls-remote',
          example: `nvm ls-remote
nvm ls-remote --lts`,
        },
        {
          command: 'Show Current Node Version',
          description: 'Display currently active Node.js version',
          usage: 'nvm current',
          example: `nvm current`,
        },
        {
          command: 'Set Default Node Version',
          description: 'Set default Node.js version for new shells',
          usage: 'nvm default <version>',
          example: `nvm default 18
nvm alias default 20.5.0`,
        },
        {
          command: 'Switch to Previous Node Version',
          description: 'Switch to previously used Node.js version',
          usage: 'nvm prev',
          example: `nvm prev`,
        },
        {
          command: 'Uninstall Node Version',
          description: 'Remove specific Node.js version',
          usage: 'nvm uninstall <version>',
          example: `nvm uninstall 18.17.0`,
        },
        {
          command: 'Verify Installations',
          description: 'Check Node.js, NPM, and NVM versions',
          usage: 'Version verification',
          example: `node --version
npm --version
nvm --version`,
        },
        {
          command: 'Create Version Alias',
          description: 'Create alias for Node.js version',
          usage: 'nvm alias <name> <version>',
          example: `nvm alias stable 20.5.0
nvm alias dev 18.17.0
nvm alias project-default 18`,
        },
        {
          command: 'List Aliases',
          description: 'Show all NVM aliases',
          usage: 'nvm alias',
          example: `nvm alias`,
        },
        {
          command: 'Remove Alias',
          description: 'Remove NVM alias',
          usage: 'nvm unalias <name>',
          example: `nvm unalias stable`,
        },
        {
          command: 'Create .nvmrc File',
          description: 'Create project-specific Node version file',
          usage: 'Project version management',
          example: `echo "18.17.0" > .nvmrc
echo "lts/*" > .nvmrc  # Use latest LTS
echo "20" > .nvmrc    # Use latest 20.x`,
        },
        {
          command: 'Auto-switch to Project Version',
          description: 'Automatically switch to project Node version',
          usage: 'nvm use with .nvmrc',
          example: `nvm use  # Automatically reads .nvmrc`,
        },
        {
          command: 'Enable Auto-switching',
          description: 'Add auto-switching to shell configuration',
          usage: 'Shell configuration',
          example: `echo 'nvm use' >> ~/.bashrc`,
        },
        {
          command: '.nvmrc File Examples',
          description: 'Example .nvmrc file contents',
          usage: 'Project version examples',
          example: `18.17.0
lts/hydrogen
20.5.0
node`,
        },
        {
          command: 'Check NPM per Node Version',
          description: 'NPM is installed per Node.js version',
          usage: 'NVM and NPM interaction',
          example: `nvm use 18
npm --version  # Shows NPM version for Node 18

nvm use 20
npm --version  # Shows NPM version for Node 20`,
        },
        {
          command: 'Install Global Packages per Version',
          description: 'Install global packages for specific Node version',
          usage: 'Version-specific global packages',
          example: `nvm use 18
npm install -g typescript

nvm use 20
npm install -g typescript  # Separate installation`,
        },
        {
          command: 'Update NPM for Current Node',
          description: 'Update NPM for current Node.js version',
          usage: 'NPM update command',
          example: `nvm install-latest-npm  # Update NPM for current Node`,
        },
      ],
    },
    {
      title: 'Getting Started with NPM',
      commands: [
        {
          command: 'Verify NPM Installation',
          description: 'Check NPM and Node.js installation',
          usage: 'Installation verification',
          example: `node --version  # v20.x.x
npm --version   # v10.x.x`,
        },
        {
          command: 'Check NPM Environment',
          description: 'Diagnose NPM setup and configuration',
          usage: 'Environment check',
          example: `npm doctor
npm config list`,
        },
        {
          command: 'Get General Help',
          description: 'Display general NPM help',
          usage: 'npm help',
          example: `npm help`,
        },
        {
          command: 'Get Command Help',
          description: 'Get help for specific NPM command',
          usage: 'npm help <command>',
          example: `npm help install
npm install --help`,
        },
        {
          command: 'List All Commands',
          description: 'Show all available NPM commands',
          usage: 'Command discovery',
          example: `npm --help`,
        },
        {
          command: 'Set Default Registry',
          description: 'Configure default npm registry',
          usage: 'Registry configuration',
          example: `npm config set registry https://registry.npmjs.org/`,
        },
        {
          command: 'Set Default Author',
          description: 'Configure default author information',
          usage: 'Author configuration',
          example: `npm config set init-author-name "Your Name"
npm config set init-author-email "your.email@example.com"`,
        },
        {
          command: 'Set Save-Exact Configuration',
          description: 'Configure to save exact versions',
          usage: 'Version precision',
          example: `npm config set save-exact true`,
        },
        {
          command: 'View Configuration',
          description: 'Display all NPM configuration',
          usage: 'Configuration viewing',
          example: `npm config list
npm config list --json  # JSON format`,
        },
        {
          command: 'Run NPM Doctor',
          description: 'Comprehensive NPM environment check',
          usage: 'System diagnostics',
          example: `npm doctor
# Checks:
# - npm ping connectivity
# - registry connectivity
# - permissions on npm cache
# - permissions on local node_modules
# - Node.js version compatibility`,
        },
      ],
    },
    {
      title: 'Initializing Projects',
      commands: [
        {
          command: 'Interactive Package Init',
          description: 'Initialize project with prompts',
          usage: 'npm init',
          example: `npm init`,
        },
        {
          command: 'Accept Defaults Init',
          description: 'Initialize project with default settings',
          usage: 'npm init -y',
          example: `npm init -y
npm init --yes`,
        },
        {
          command: 'Scoped Package Init',
          description: 'Initialize with scoped package name',
          usage: 'npm init --scope',
          example: `npm init --scope=@mycompany`,
        },
        {
          command: 'Named Package Init',
          description: 'Initialize with specific package name',
          usage: 'npm init <name>',
          example: `npm init my-new-project`,
        },
        {
          command: 'Create React App',
          description: 'Initialize React application',
          usage: 'npm init react-app',
          example: `npm init react-app my-app`,
        },
        {
          command: 'Create Vite Project',
          description: 'Initialize Vite project',
          usage: 'npm init vite',
          example: `npm init vite@latest my-project`,
        },
        {
          command: 'Create Next.js App',
          description: 'Initialize Next.js application',
          usage: 'npm init next-app',
          example: `npm init next-app my-next-app`,
        },
        {
          command: 'Create TypeScript Project',
          description: 'Initialize TypeScript project',
          usage: 'npm init typescript-project',
          example: `npm init typescript-project`,
        },
        {
          command: 'Create Vite Project (Modern)',
          description: 'Modern way to create Vite project',
          usage: 'npm create vite',
          example: `npm create vite@latest my-vite-app`,
        },
        {
          command: 'Create React App (Modern)',
          description: 'Modern way to create React app',
          usage: 'npm create react-app',
          example: `npm create react-app my-react-app`,
        },
        {
          command: 'Create with Template',
          description: 'Create project with specific template',
          usage: 'npm create with template',
          example: `npm create vite@latest my-app --template react-ts`,
        },
        {
          command: 'Package.json Structure',
          description: 'Understanding package.json fields',
          usage: 'JSON configuration file',
          example: `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "type": "module",           // ES modules
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "keywords": ["node", "javascript"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {},
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}`,
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
          example: `npm install
npm i  # Short form`,
        },
        {
          command: 'Clean Install',
          description: 'Fast install for CI/CD environments',
          usage: 'npm ci',
          example: `npm ci  # Clean install (removes node_modules first)`,
        },
        {
          command: 'Install Latest Version',
          description: 'Install latest package version',
          usage: 'npm install <package>',
          example: `npm install react`,
        },
        {
          command: 'Install Specific Version',
          description: 'Install exact package version',
          usage: 'npm install <package>@<version>',
          example: `npm install react@18.2.0`,
        },
        {
          command: 'Install Version Range',
          description: 'Install package within version range',
          usage: 'npm install <package>@<range>',
          example: `npm install react@^18.0.0`,
        },
        {
          command: 'Install from Git',
          description: 'Install package from Git repository',
          usage: 'npm install <git-url>',
          example: `npm install https://github.com/user/repo.git`,
        },
        {
          command: 'Install Local Package',
          description: 'Install package from local directory',
          usage: 'npm install <local-path>',
          example: `npm install ./my-local-package`,
        },
        {
          command: 'Install Dev Dependency',
          description: 'Add package to devDependencies',
          usage: 'npm install --save-dev',
          example: `npm install --save-dev typescript
npm install -D eslint
npm i -D prettier @types/node`,
        },
        {
          command: 'Install Optional Dependency',
          description: 'Add optional dependency',
          usage: 'npm install --save-optional',
          example: `npm install --save-optional fsevents
npm install -O chalk`,
        },
        {
          command: 'Install Exact Version',
          description: 'Install without version range',
          usage: 'npm install --save-exact',
          example: `npm install --save-exact react@18.2.0
npm install -E lodash@4.17.21`,
        },
        {
          command: 'Install Without Saving',
          description: 'Install without updating package.json',
          usage: 'npm install --no-save',
          example: `npm install --no-save test-package
npm install --no-save webpack-cli`,
        },
        {
          command: 'Install Global Package',
          description: 'Install package globally',
          usage: 'npm install --global',
          example: `npm install --global nodemon
npm install -g typescript
npm i -g @angular/cli`,
        },
        {
          command: 'List Global Packages',
          description: 'Show installed global packages',
          usage: 'npm list -g',
          example: `npm list -g --depth=0`,
        },
        {
          command: 'Uninstall Global Package',
          description: 'Remove global package',
          usage: 'npm uninstall -g',
          example: `npm uninstall -g nodemon`,
        },
        {
          command: 'Install Production Only',
          description: 'Skip dev dependencies',
          usage: 'npm install --production',
          example: `npm install --production`,
        },
        {
          command: 'Clean Install with Optional',
          description: 'CI install with optional dependencies',
          usage: 'npm ci --include',
          example: `npm ci --include=optional`,
        },
        {
          command: 'Clean Install Production Only',
          description: 'CI install with production dependencies only',
          usage: 'npm ci --only',
          example: `npm ci --only=production`,
        },
      ],
    },
    {
      title: 'Managing Dependencies',
      commands: [
        {
          command: 'Remove Package',
          description: 'Uninstall installed package',
          usage: 'npm uninstall <package>',
          example: `npm uninstall lodash
npm un react  # Short form`,
        },
        {
          command: 'Remove Dev Dependency',
          description: 'Remove from devDependencies',
          usage: 'npm uninstall --save-dev',
          example: `npm uninstall --save-dev typescript`,
        },
        {
          command: 'Remove Global Package',
          description: 'Remove global package',
          usage: 'npm uninstall --global',
          example: `npm uninstall --global nodemon`,
        },
        {
          command: 'Remove Multiple Packages',
          description: 'Remove multiple packages at once',
          usage: 'npm uninstall <pkg1> <pkg2>',
          example: `npm uninstall lodash react axios`,
        },
        {
          command: 'Update All Packages',
          description: 'Update all packages within version ranges',
          usage: 'npm update',
          example: `npm update`,
        },
        {
          command: 'Update Specific Package',
          description: 'Update specific package',
          usage: 'npm update <package>',
          example: `npm update react`,
        },
        {
          command: 'Update Global Packages',
          description: 'Update global packages',
          usage: 'npm update -g',
          example: `npm update -g
npm update -g npm  # Update npm itself`,
        },
        {
          command: 'Update Dry Run',
          description: 'Preview what would be updated',
          usage: 'npm update --dry-run',
          example: `npm update --dry-run`,
        },
        {
          command: 'Check Outdated Packages',
          description: 'Find packages that need updating',
          usage: 'npm outdated',
          example: `npm outdated`,
        },
        {
          command: 'Check Global Outdated',
          description: 'Find outdated global packages',
          usage: 'npm outdated --global',
          example: `npm outdated --global`,
        },
        {
          command: 'Outdated JSON Output',
          description: 'Get outdated packages in JSON format',
          usage: 'npm outdated --json',
          example: `npm outdated --json`,
        },
        {
          command: 'Run Security Audit',
          description: 'Check for security vulnerabilities',
          usage: 'npm audit',
          example: `npm audit`,
        },
        {
          command: 'Fix Security Issues',
          description: 'Automatically fix vulnerabilities',
          usage: 'npm audit fix',
          example: `npm audit fix`,
        },
        {
          command: 'Force Fix Security',
          description: 'Fix including breaking changes',
          usage: 'npm audit fix --force',
          example: `npm audit fix --force`,
        },
        {
          command: 'Audit JSON Output',
          description: 'Get audit report in JSON format',
          usage: 'npm audit --json',
          example: `npm audit --json`,
        },
      ],
    },
    {
      title: 'Package Information & Discovery',
      commands: [
        {
          command: 'List All Dependencies',
          description: 'Show dependency tree',
          usage: 'npm list',
          example: `npm list
npm ls  # Short form`,
        },
        {
          command: 'List Top-Level Dependencies',
          description: 'Show only direct dependencies',
          usage: 'npm list --depth=0',
          example: `npm list --depth=0`,
        },
        {
          command: 'List Global Dependencies',
          description: 'Show global packages',
          usage: 'npm list -g',
          example: `npm list -g --depth=0`,
        },
        {
          command: 'List Dependencies JSON',
          description: 'Get dependency tree in JSON format',
          usage: 'npm list --json',
          example: `npm list --json`,
        },
        {
          command: 'List Production Dependencies',
          description: 'Show only production dependencies',
          usage: 'npm list --production',
          example: `npm list --production`,
        },
        {
          command: 'View Package Details',
          description: 'Get detailed package information',
          usage: 'npm view <package>',
          example: `npm view react
npm info react  # Alias`,
        },
        {
          command: 'View Package Field',
          description: 'Get specific package field',
          usage: 'npm view <package> <field>',
          example: `npm view react version
npm view react description
npm view react dependencies`,
        },
        {
          command: 'View Package Versions',
          description: 'Show all available versions',
          usage: 'npm view <package> versions',
          example: `npm view react versions`,
        },
        {
          command: 'View Package Maintainers',
          description: 'Show package maintainers',
          usage: 'npm view <package> maintainers',
          example: `npm view react maintainers`,
        },
        {
          command: 'Search Packages',
          description: 'Find packages in registry',
          usage: 'npm search <term>',
          example: `npm search react router
npm s "date formatter"  # Short form`,
        },
        {
          command: 'Limit Search Results',
          description: 'Limit number of search results',
          usage: 'npm search --searchlimit',
          example: `npm search react --searchlimit=10`,
        },
        {
          command: 'Search JSON Output',
          description: 'Get search results in JSON format',
          usage: 'npm search --json',
          example: `npm search react --json`,
        },
        {
          command: 'Open Package Repository',
          description: 'Open package repository in browser',
          usage: 'npm repo <package>',
          example: `npm repo react`,
        },
        {
          command: 'Open Package Documentation',
          description: 'Open package documentation',
          usage: 'npm docs <package>',
          example: `npm docs lodash`,
        },
        {
          command: 'Open Package Homepage',
          description: 'Open package homepage',
          usage: 'npm home <package>',
          example: `npm home express`,
        },
      ],
    },
    {
      title: 'Running Scripts & Tasks',
      commands: [
        {
          command: 'Run Custom Script',
          description: 'Execute script from package.json',
          usage: 'npm run <script-name>',
          example: `npm run build
npm run dev
npm run test`,
        },
        {
          command: 'Run Script with Arguments',
          description: 'Pass arguments to script',
          usage: 'npm run <script> -- <args>',
          example: `npm run test -- --watch
npm start -- --port 3001`,
        },
        {
          command: 'Silent Script Execution',
          description: 'Run script without npm output',
          usage: 'npm run --silent',
          example: `npm run --silent build`,
        },
        {
          command: 'Start Application',
          description: 'Run start script',
          usage: 'npm start',
          example: `npm start   # Runs "start" script`,
        },
        {
          command: 'Run Tests',
          description: 'Run test script',
          usage: 'npm test',
          example: `npm test    # Runs "test" script (alias: npm t)`,
        },
        {
          command: 'Stop Application',
          description: 'Run stop script',
          usage: 'npm stop',
          example: `npm stop    # Runs "stop" script`,
        },
        {
          command: 'Restart Application',
          description: 'Run stop then start scripts',
          usage: 'npm restart',
          example: `npm restart # Runs "stop" then "start"`,
        },
        {
          command: 'Pre/Post Hooks Example',
          description: 'Example of lifecycle hooks',
          usage: 'package.json scripts',
          example: `{
  "scripts": {
    "pretest": "eslint .",
    "test": "jest",
    "posttest": "npm run coverage",
    "prebuild": "npm run clean",
    "build": "webpack",
    "postbuild": "npm run optimize"
  }
}`,
        },
        {
          command: 'Sequential Commands',
          description: 'Combine commands sequentially',
          usage: '&& operator in scripts',
          example: `{
  "scripts": {
    "build": "tsc && webpack",
    "dev": "npm run build && npm run serve",
    "test:cover": "jest --coverage || echo Tests failed",
    "clean:all": "rm -rf dist && rm -rf coverage"
  }
}`,
        },
      ],
    },
    {
      title: 'NPX - Package Executor',
      commands: [
        {
          command: 'Execute Local Package',
          description: 'Run locally installed package',
          usage: 'npx <package>',
          example: `npx eslint .`,
        },
        {
          command: 'Execute Without Installing',
          description: 'Run package without installation',
          usage: 'npx <package>',
          example: `npx create-react-app my-app
npx typescript --init`,
        },
        {
          command: 'Execute Specific Version',
          description: 'Run specific package version',
          usage: 'npx <package>@<version>',
          example: `npx create-react-app@5.0.0 my-app`,
        },
        {
          command: 'Install and Execute',
          description: 'Temporarily install and run package',
          usage: 'npx -p <package> <command>',
          example: `npx -p cowsay cowsay "Hello World"
npx -p typescript tsc --init`,
        },
        {
          command: 'Multiple Packages',
          description: 'Use multiple packages',
          usage: 'npx -p <pkg1> -p <pkg2>',
          example: `npx -p webpack -p webpack-cli webpack --mode production`,
        },
        {
          command: 'Skip Installation Confirmation',
          description: 'Execute without confirmation prompt',
          usage: 'npx --yes',
          example: `npx --yes create-next-app@latest
npx -y vite my-project`,
        },
        {
          command: 'Use Only if Installed',
          description: 'Skip installation if not present',
          usage: 'npx --no-install',
          example: `npx --no-install eslint`,
        },
        {
          command: 'Clear NPX Cache',
          description: 'Clear npx cache',
          usage: 'npx --clear-cache',
          example: `npx --clear-cache`,
        },
        {
          command: 'Specify Node Version',
          description: 'Use specific Node version',
          usage: 'npx --node=<version>',
          example: `npx --node=16 node --version`,
        },
        {
          command: 'Interactive Mode',
          description: 'Interactive package execution',
          usage: 'npx --interactive',
          example: `npx --interactive create-react-app`,
        },
        {
          command: 'Interactive with Options',
          description: 'Combine interactive with other options',
          usage: 'npx -y --interactive',
          example: `npx -y --interactive vite my-app`,
        },
      ],
    },
    {
      title: 'Cache Management',
      commands: [
        {
          command: 'Clear Cache',
          description: 'Clean npm cache to fix issues',
          usage: 'npm cache clean --force',
          example: `npm cache clean --force`,
        },
        {
          command: 'Verify Cache',
          description: 'Check cache integrity and garbage collect',
          usage: 'npm cache verify',
          example: `npm cache verify
# Fixes corrupted cache entries
# Frees up space from unused packages`,
        },
        {
          command: 'List Cached Packages',
          description: 'Inspect cached packages',
          usage: 'npm cache ls',
          example: `npm cache ls`,
        },
        {
          command: 'List Specific Cached Package',
          description: 'Show cached versions of specific package',
          usage: 'npm cache ls <package>',
          example: `npm cache ls react`,
        },
        {
          command: 'View Cache Location',
          description: 'Show cache directory path',
          usage: 'npm config get cache',
          example: `npm config get cache`,
        },
        {
          command: 'Set Custom Cache Location',
          description: 'Configure custom cache directory',
          usage: 'npm config set cache <path>',
          example: `npm config set cache /path/to/cache`,
        },
        {
          command: 'Disable Cache',
          description: 'Disable npm cache (not recommended)',
          usage: 'npm config set cache false',
          example: `npm config set cache false`,
        },
        {
          command: 'Set Cache Max Sockets',
          description: 'Configure maximum concurrent connections',
          usage: 'npm config set maxsockets',
          example: `npm config set maxsockets 5`,
        },
      ],
    },
    {
      title: 'Advanced Configuration',
      commands: [
        {
          command: 'Set Registry Configuration',
          description: 'Configure npm registry',
          usage: 'npm config set registry',
          example: `npm config set registry https://registry.npmjs.org/`,
        },
        {
          command: 'Set Proxy Configuration',
          description: 'Configure HTTP proxy',
          usage: 'npm config set proxy',
          example: `npm config set proxy http://proxy.company.com:8080`,
        },
        {
          command: 'Set HTTPS Proxy',
          description: 'Configure HTTPS proxy',
          usage: 'npm config set https-proxy',
          example: `npm config set https-proxy http://proxy.company.com:8080`,
        },
        {
          command: 'Get Configuration Value',
          description: 'Get specific configuration value',
          usage: 'npm config get <key>',
          example: `npm config get registry
npm config get proxy`,
        },
        {
          command: 'Delete Configuration',
          description: 'Remove configuration setting',
          usage: 'npm config delete <key>',
          example: `npm config delete proxy`,
        },
        {
          command: 'List All Configuration',
          description: 'Show all configuration settings',
          usage: 'npm config list',
          example: `npm config list
npm config list --json  # JSON format`,
        },
        {
          command: 'Edit Configuration File',
          description: 'Open configuration file in editor',
          usage: 'npm config edit',
          example: `npm config edit  # Opens .npmrc in editor`,
        },
        {
          command: 'Project .npmrc File',
          description: 'Project-specific configuration',
          usage: '.npmrc file in project root',
          example: `# Project .npmrc file
registry=https://registry.npmjs.org/
save-exact=true
@mycompany:registry=https://npm.mycompany.com/
//npm.mycompany.com/:_authToken=\${NPM_TOKEN}`,
        },
        {
          command: 'Configuration File Locations',
          description: 'Different .npmrc file locations',
          usage: 'Configuration hierarchy',
          example: `.npmrc          # Project config
~/.npmrc         # User config
global .npmrc    # System config`,
        },
        {
          command: 'Set Registry via Environment',
          description: 'Configure registry using environment variable',
          usage: 'npm_config_<key>',
          example: `export npm_config_registry=https://registry.npmjs.org/`,
        },
        {
          command: 'Set Proxy via Environment',
          description: 'Configure proxy using environment variable',
          usage: 'Environment proxy configuration',
          example: `export npm_config_proxy=http://proxy.company.com:8080`,
        },
        {
          command: 'Environment in CI/CD',
          description: 'Use environment variables in CI/CD',
          usage: 'Environment configuration',
          example: `env npm_config_registry=https://private-registry.com npm install`,
        },
        {
          command: 'Login to Registry',
          description: 'Authenticate with npm registry',
          usage: 'npm login',
          example: `npm login
# Enter username, password, email (2FA if enabled)`,
        },
        {
          command: 'Check Current User',
          description: 'Show authenticated user',
          usage: 'npm whoami',
          example: `npm whoami`,
        },
        {
          command: 'Logout from Registry',
          description: 'Sign out from registry',
          usage: 'npm logout',
          example: `npm logout`,
        },
        {
          command: 'Login to Scoped Registry',
          description: 'Authenticate with scoped registry',
          usage: 'npm login --scope',
          example: `npm login --scope=@mycompany --registry=https://npm.mycompany.com`,
        },
        {
          command: 'Configure Authentication Token',
          description: 'Set authentication token in .npmrc',
          usage: '.npmrc authentication',
          example: `//registry.npmjs.org/:_authToken=\${NPM_TOKEN}
//private-registry.com/:_authToken=your-token`,
        },
        {
          command: 'Scoped Package Authentication',
          description: 'Configure authentication for scoped packages',
          usage: 'Scoped authentication',
          example: `@mycompany:registry=https://npm.mycompany.com/
//npm.mycompany.com/:_authToken=\${NPM_TOKEN}`,
        },
      ],
    },
    {
      title: 'Package Publishing & Distribution',
      commands: [
        {
          command: 'Publish Package',
          description: 'Publish package to npm registry',
          usage: 'npm publish',
          example: `npm publish`,
        },
        {
          command: 'Publish Scoped Package as Public',
          description: 'Publish scoped package publicly',
          usage: 'npm publish --access',
          example: `npm publish --access=public`,
        },
        {
          command: 'Publish to Different Registry',
          description: 'Publish to custom registry',
          usage: 'npm publish --registry',
          example: `npm publish --registry=https://npm.mycompany.com`,
        },
        {
          command: 'Publish with Tag',
          description: 'Publish package with specific tag',
          usage: 'npm publish --tag',
          example: `npm publish --tag beta`,
        },
        {
          command: 'Publish Dry Run',
          description: 'Check package without publishing',
          usage: 'npm publish --dry-run',
          example: `npm publish --dry-run`,
        },
        {
          command: 'Version Patch',
          description: 'Increment patch version',
          usage: 'npm version patch',
          example: `npm version patch    # 1.0.0 -> 1.0.1`,
        },
        {
          command: 'Version Minor',
          description: 'Increment minor version',
          usage: 'npm version minor',
          example: `npm version minor    # 1.0.0 -> 1.1.0`,
        },
        {
          command: 'Version Major',
          description: 'Increment major version',
          usage: 'npm version major',
          example: `npm version major    # 1.0.0 -> 2.0.0`,
        },
        {
          command: 'Version Prerelease Alpha',
          description: 'Create alpha prerelease',
          usage: 'npm version prerelease --preid',
          example: `npm version prerelease --preid=alpha  # 1.0.0 -> 1.0.1-alpha.0`,
        },
        {
          command: 'Version Prerelease Beta',
          description: 'Create beta prerelease',
          usage: 'npm version prerelease --preid',
          example: `npm version prerelease --preid=beta   # 1.0.1-alpha.0 -> 1.0.1-alpha.1`,
        },
        {
          command: 'Version Specific',
          description: 'Set specific version',
          usage: 'npm version <version>',
          example: `npm version 1.2.3`,
        },
        {
          command: 'Version Without Git Tag',
          description: 'Update version without git operations',
          usage: 'npm version --no-git-tag-version',
          example: `npm version patch --no-git-tag-version`,
        },
        {
          command: 'Deprecate Version',
          description: 'Deprecate specific package version',
          usage: 'npm deprecate <package>@<version>',
          example: `npm deprecate my-package@1.0.0 "Use version 2.0.0 instead"
npm deprecate my-package@<1.2.0 "Security issues in older versions"`,
        },
        {
          command: 'Unpublish Version',
          description: 'Remove specific version (within 72 hours)',
          usage: 'npm unpublish <package>@<version>',
          example: `npm unpublish my-package@1.0.0`,
        },
        {
          command: 'Unpublish Entire Package',
          description: 'Remove entire package (force)',
          usage: 'npm unpublish --force',
          example: `npm unpublish my-package --force`,
        },
        {
          command: 'Create Package Tarball',
          description: 'Create distributable package archive',
          usage: 'npm pack',
          example: `npm pack`,
        },
        {
          command: 'Pack Specific Package',
          description: 'Create tarball for specific package',
          usage: 'npm pack <path>',
          example: `npm pack ./my-package`,
        },
        {
          command: 'Pack with Destination',
          description: 'Specify pack destination directory',
          usage: 'npm pack --pack-destination',
          example: `npm pack --pack-destination ./dist`,
        },
      ],
    },
    {
      title: 'Advanced Security Features',
      commands: [
        {
          command: 'Run Security Audit',
          description: 'Comprehensive security vulnerability scanning',
          usage: 'npm audit',
          example: `npm audit`,
        },
        {
          command: 'Audit JSON Output',
          description: 'Get audit report in JSON format',
          usage: 'npm audit --json',
          example: `npm audit --json`,
        },
        {
          command: 'Fix Security Vulnerabilities',
          description: 'Automatically fix vulnerabilities',
          usage: 'npm audit fix',
          example: `npm audit fix`,
        },
        {
          command: 'Force Fix Security',
          description: 'Fix including breaking changes',
          usage: 'npm audit fix --force',
          example: `npm audit fix --force`,
        },
        {
          command: 'Fix Production Dependencies',
          description: 'Fix only production dependencies',
          usage: 'npm audit fix --production',
          example: `npm audit fix --production`,
        },
        {
          command: 'Check Audit Signatures',
          description: 'Verify package signatures (npm 10+)',
          usage: 'npm audit signatures',
          example: `npm audit signatures`,
        },
        {
          command: 'Verify Package Signatures',
          description: 'Verify package integrity and authenticity',
          usage: 'npm audit signatures',
          example: `npm audit signatures`,
        },
        {
          command: 'Enable Signature Verification',
          description: 'Enable package signature verification',
          usage: 'npm config set audit-signature-verification',
          example: `npm config set audit-signature-verification true`,
        },
        {
          command: 'Check Specific Package Signature',
          description: 'Verify specific package signature',
          usage: 'npm audit <package> --signatures',
          example: `npm audit react --signatures`,
        },
        {
          command: 'Enable Strict SSL',
          description: 'Enforce SSL for registry connections',
          usage: 'npm config set strict-ssl',
          example: `npm config set strict-ssl true`,
        },
        {
          command: 'Set Audit Level',
          description: 'Configure security audit level',
          usage: 'npm config set audit-level',
          example: `npm config set audit-level moderate
# Options: low, moderate, high, critical`,
        },
        {
          command: 'Enable Package Provenance',
          description: 'Enable package provenance verification',
          usage: 'npm config set package-provenance',
          example: `npm config set package-provenance true`,
        },
        {
          command: 'Use Secure Registry',
          description: 'Configure secure private registry',
          usage: 'npm config set registry',
          example: `npm config set registry https://secure-registry.com`,
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
          example: `# Root package.json
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "workspaces": [
    "packages/*",
    "apps/*",
    "libs/*"
  ],
  "scripts": {
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces"
  }
}`,
        },
        {
          command: 'Run in Specific Workspace',
          description: 'Run command in specific workspace',
          usage: 'npm <command> --workspace=<name>',
          example: `npm run build --workspace=packages/app
npm install react --workspace=packages/ui`,
        },
        {
          command: 'Run in All Workspaces',
          description: 'Run command in all workspaces',
          usage: 'npm <command> --workspaces',
          example: `npm run test --workspaces
npm install --workspaces`,
        },
        {
          command: 'List Workspaces',
          description: 'Show all configured workspaces',
          usage: 'npm ls --workspaces',
          example: `npm ls --workspaces`,
        },
        {
          command: 'Install Dependencies for All Workspaces',
          description: 'Install dependencies for all workspaces',
          usage: 'npm install --workspaces',
          example: `npm install --workspaces`,
        },
        {
          command: 'Add Dependency to Specific Workspace',
          description: 'Add dependency to specific workspace',
          usage: 'npm install --workspace',
          example: `npm install lodash --workspace=packages/utils`,
        },
        {
          command: 'Add Dev Dependency to All Workspaces',
          description: 'Add dev dependency to all workspaces',
          usage: 'npm install --save-dev --workspaces',
          example: `npm install --save-dev jest --workspaces`,
        },
        {
          command: 'Remove from Workspace',
          description: 'Remove dependency from workspace',
          usage: 'npm uninstall --workspace',
          example: `npm uninstall react --workspace=packages/ui`,
        },
        {
          command: 'Run Script in Workspace',
          description: 'Run script in workspace context',
          usage: 'npm run --workspace',
          example: `npm run dev --workspace=packages/app`,
        },
        {
          command: 'Link Local Package',
          description: 'Link local package for development',
          usage: 'npm link [package]',
          example: `# In package directory
cd my-package && npm link`,
        },
        {
          command: 'Link to Consuming Project',
          description: 'Link package to consuming project',
          usage: 'npm link <package>',
          example: `# In consuming project
cd my-app && npm link my-package`,
        },
        {
          command: 'Unlink Package',
          description: 'Unlink linked package',
          usage: 'npm unlink <package>',
          example: `npm unlink my-package`,
        },
        {
          command: 'Link in Workspace Context',
          description: 'Link package within workspace',
          usage: 'npm link --workspace',
          example: `npm link --workspace=packages/utils`,
        },
      ],
    },
    {
      title: 'Advanced NVM & Node Management',
      commands: [
        {
          command: 'Set NVM Directory',
          description: 'Configure NVM installation directory',
          usage: 'NVM_DIR environment variable',
          example: `export NVM_DIR="$HOME/.nvm"`,
        },
        {
          command: 'Set Node.js Mirror',
          description: 'Configure Node.js download mirror',
          usage: 'NVM_NODEJS_ORG_MIRROR',
          example: `export NVM_NODEJS_ORG_MIRROR="https://nodejs.org/dist"`,
        },
        {
          command: 'Set IO.js Mirror',
          description: 'Configure IO.js download mirror',
          usage: 'NVM_IOJS_ORG_MIRROR',
          example: `export NVM_IOJS_ORG_MIRROR="https://iojs.org/dist"`,
        },
        {
          command: 'Use Fast Node.js Mirror',
          description: 'Configure faster Node.js mirror',
          usage: 'NVM_NODEJS_ORG_MIRROR for speed',
          example: `export NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"`,
        },
        {
          command: 'Load NVM in Shell',
          description: 'Load NVM shell integration',
          usage: 'NVM shell scripts',
          example: `[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"`,
        },
        {
          command: 'CI/CD with NVM',
          description: 'Use NVM in CI/CD environments',
          usage: 'NVM in automation scripts',
          example: `#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"

# Install and use specific Node version
nvm install 18
nvm use 18

# Install dependencies and run tests
npm ci
npm test`,
        },
        {
          command: 'Docker with NVM',
          description: 'Use NVM in Docker containers',
          usage: 'NVM in Dockerfile',
          example: `FROM node:18-alpine
RUN npm install -g nvm
RUN nvm install 20 && nvm use 20`,
        },
        {
          command: 'Install FNM',
          description: 'Install Fast Node Manager',
          usage: 'Alternative to NVM',
          example: `curl -fsSL https://fnm.vercel.app/install | bash`,
        },
        {
          command: 'Use FNM',
          description: 'Basic FNM commands',
          usage: 'FNM version management',
          example: `fnm install 18
fnm use 18`,
        },
        {
          command: 'Install Volta',
          description: 'Install Volta JavaScript Tool Manager',
          usage: 'Alternative version manager',
          example: `curl https://get.volta.sh | bash`,
        },
        {
          command: 'Use Volta',
          description: 'Basic Volta commands',
          usage: 'Volta version management',
          example: `volta install node@18
volta pin node@18`,
        },
        {
          command: 'Install asdf',
          description: 'Install asdf version manager',
          usage: 'Multi-language version manager',
          example: `asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs 18.17.0
asdf global nodejs 18.17.0`,
        },
        {
          command: 'Convert from NVM to FNM',
          description: 'Migrate from NVM to FNM',
          usage: 'Migration tool',
          example: `fnm migrate`,
        },
        {
          command: 'Check NVM Installation',
          description: 'Verify NVM is properly installed',
          usage: 'NVM troubleshooting',
          example: `command -v nvm  # Check if NVM is loaded`,
        },
        {
          command: 'Reload NVM',
          description: 'Reload NVM configuration',
          usage: 'NVM troubleshooting',
          example: `source ~/.nvm/nvm.sh`,
        },
        {
          command: 'Check NVM Files',
          description: 'Inspect NVM installation files',
          usage: 'NVM troubleshooting',
          example: `ls -la ~/.nvm`,
        },
        {
          command: 'Fix NVM Permissions',
          description: 'Fix permission issues with NVM',
          usage: 'NVM troubleshooting',
          example: `chmod +x ~/.nvm/nvm.sh`,
        },
        {
          command: 'Fix Slow NVM Downloads',
          description: 'Use faster mirrors for downloads',
          usage: 'NVM performance',
          example: `export NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"`,
        },
        {
          command: 'Reset NVM',
          description: 'Completely reset NVM installation',
          usage: 'NVM troubleshooting',
          example: `rm -rf ~/.nvm
# Reinstall NVM`,
        },
        {
          command: 'Preload Node Versions',
          description: 'Install Node with package migration',
          usage: 'NVM performance optimization',
          example: `nvm install 18 --reinstall-packages-from=current`,
        },
        {
          command: 'Use Binary Packages',
          description: 'Use binary packages for faster installation',
          usage: 'NVM build optimization',
          example: `export NVM_MAKE_OPTS="-j$(nproc)"`,
        },
        {
          command: 'Cache NPM Packages Globally',
          description: 'Set global NPM cache location',
          usage: 'Performance optimization',
          example: `npm config set cache ~/.npm-global-cache`,
        },
        {
          command: 'Parallel Installations',
          description: 'Install multiple Node versions in parallel',
          usage: 'Performance optimization',
          example: `nvm install 18 && nvm install 20 &`,
        },
      ],
    },
    {
      title: 'Dependency Analysis & Optimization',
      commands: [
        {
          command: 'Explain Package Installation',
          description: 'Explain why package is installed',
          usage: 'npm explain <package>',
          example: `npm explain lodash
npm why lodash  # Alias`,
        },
        {
          command: 'View Dependency Tree JSON',
          description: 'Get dependency tree in JSON format',
          usage: 'npm ls --json',
          example: `npm ls --json`,
        },
        {
          command: 'Check for Duplicates',
          description: 'Find duplicate dependencies',
          usage: 'npm ls with grep',
          example: `npm ls --depth=0 | grep \\.\\*\\.`,
        },
        {
          command: 'Find Circular Dependencies',
          description: 'Check for circular dependency issues',
          usage: 'npm ls --all',
          example: `npm ls --all`,
        },
        {
          command: 'Query by Package Name',
          description: 'Find packages by name using CSS selector',
          usage: 'npm query',
          example: `npm query "[name=react]"  # Find react`,
        },
        {
          command: 'Query Direct Dependencies',
          description: 'Find direct dependencies',
          usage: 'npm query selector',
          example: `npm query ":root > *"     # Direct dependencies`,
        },
        {
          command: 'Query by Package ID',
          description: 'Find package by name as ID',
          usage: 'npm query #<package>',
          example: `npm query "#react"        # By package name as ID`,
        },
        {
          command: 'Query Dev Dependencies',
          description: 'Find development dependencies',
          usage: 'npm query .dev',
          example: `npm query ".dev"          # Dev dependencies`,
        },
        {
          command: 'Query Empty Packages',
          description: 'Find packages without dependencies',
          usage: 'npm query :empty',
          example: `npm query ":empty"        # Packages without dependencies`,
        },
        {
          command: 'Query Scoped Packages',
          description: 'Find packages by scope',
          usage: 'npm query :scope',
          example: `npm query ":scope(@react)" # Scoped packages`,
        },
        {
          command: 'Deduplicate Dependencies',
          description: 'Reduce duplicate dependencies',
          usage: 'npm dedupe',
          example: `npm dedupe
npm ddp  # Short form`,
        },
        {
          command: 'Dedupe Dry Run',
          description: 'Preview deduplication changes',
          usage: 'npm dedupe --dry-run',
          example: `npm dedupe --dry-run`,
        },
        {
          command: 'Dedupe Global Packages',
          description: 'Deduplicate global packages',
          usage: 'npm dedupe -g',
          example: `npm dedupe -g`,
        },
        {
          command: 'Compare Installed vs Package.json',
          description: 'Compare installed packages with package.json',
          usage: 'npm diff',
          example: `npm diff`,
        },
        {
          command: 'Compare Package Versions',
          description: 'Compare specific package versions',
          usage: 'npm diff <pkg1>@<ver1> <pkg2>@<ver2>',
          example: `npm diff react@17.0.0 react@18.0.0`,
        },
        {
          command: 'Compare with Registry',
          description: 'Compare with registry version',
          usage: 'npm diff --diff',
          example: `npm diff --diff=package-name`,
        },
        {
          command: 'View Funding Information',
          description: 'Show package funding details',
          usage: 'npm fund',
          example: `npm fund`,
        },
        {
          command: 'View Specific Package Funding',
          description: 'Show funding for specific package',
          usage: 'npm fund <package>',
          example: `npm fund react`,
        },
        {
          command: 'Funding JSON Output',
          description: 'Get funding info in JSON format',
          usage: 'npm fund --json',
          example: `npm fund --json`,
        },
      ],
    },
    {
      title: 'Advanced Scripting & Automation',
      commands: [
        {
          command: 'Advanced Script Configuration',
          description: 'Complex script configurations',
          usage: 'package.json scripts',
          example: `{
  "scripts": {
    "preinstall": "node scripts/preinstall.js",
    "postinstall": "node scripts/postinstall.js",
    "prepare": "npm run build",
    "prepack": "npm run test && npm run build",
    "postpack": "npm run cleanup"
  }
}`,
        },
        {
          command: 'Concurrent Script Execution',
          description: 'Run multiple scripts concurrently',
          usage: 'concurrently package',
          example: `{
  "scripts": {
    "dev": "concurrently \\"npm run dev:server\\" \\"npm run dev:client\\"",
    "test:all": "concurrently \\"npm run test:unit\\" \\"npm run test:integration\\""
  }
}`,
        },
        {
          command: 'Conditional Script Execution',
          description: 'Run scripts based on conditions',
          usage: 'cross-env package',
          example: `{
  "scripts": {
    "build:prod": "cross-env NODE_ENV=production npm run build",
    "build:dev": "cross-env NODE_ENV=development npm run build"
  }
}`,
        },
        {
          command: 'Installation Lifecycle Scripts',
          description: 'Scripts that run during installation',
          usage: 'Lifecycle hooks',
          example: `preinstall, install, postinstall
prepack, pack, postpack
prepare, prepublish, prepublishOnly`,
        },
        {
          command: 'Publishing Lifecycle Scripts',
          description: 'Scripts that run during publishing',
          usage: 'Publish lifecycle',
          example: `prepublishOnly, prepare, prepublish, publish, postpublish`,
        },
        {
          command: 'Application Lifecycle Scripts',
          description: 'Scripts for application lifecycle',
          usage: 'App lifecycle hooks',
          example: `prestart, start, poststart
prestop, stop, poststop
prerestart, restart, postrestart
pretest, test, posttest`,
        },
        {
          command: 'Uninstall Lifecycle Scripts',
          description: 'Scripts that run during uninstallation',
          usage: 'Uninstall lifecycle',
          example: `preuninstall, uninstall, postuninstall`,
        },
        {
          command: 'Package Name Variable',
          description: 'Access package name in scripts',
          usage: 'Environment variables',
          example: `"scripts": {
  "build": "echo Building $npm_package_name"
}`,
        },
        {
          command: 'Package Version Variable',
          description: 'Access package version in scripts',
          usage: 'Environment variables',
          example: `"scripts": {
  "build": "echo Building $npm_package_name@$npm_package_version"
}`,
        },
        {
          command: 'Configuration Variables',
          description: 'Access npm config in scripts',
          usage: 'Environment variables',
          example: `"scripts": {
  "deploy": "echo $npm_lifecycle_event on $npm_config_env"
}`,
        },
        {
          command: 'Lifecycle Event Variable',
          description: 'Access current script name',
          usage: 'Environment variables',
          example: `npm_lifecycle_event`,
        },
        {
          command: 'Node Exec Path Variable',
          description: 'Access Node.js executable path',
          usage: 'Environment variables',
          example: `npm_node_execpath`,
        },
        {
          command: 'NPM Exec Path Variable',
          description: 'Access npm executable path',
          usage: 'Environment variables',
          example: `npm_execpath`,
        },
        {
          command: 'Cross-Platform Clean',
          description: 'Remove directories cross-platform',
          usage: 'rimraf package',
          example: `{
  "scripts": {
    "clean": "rimraf dist"
  }
}`,
        },
        {
          command: 'Cross-Platform Copy',
          description: 'Copy files cross-platform',
          usage: 'cpy package',
          example: `{
  "scripts": {
    "copy": "cpy src/*.js dist/"
  }
}`,
        },
        {
          command: 'Cross-Platform Environment',
          description: 'Set environment variables cross-platform',
          usage: 'cross-env package',
          example: `{
  "scripts": {
    "set-env": "cross-env NODE_ENV=production"
  }
}`,
        },
        {
          command: 'Run Scripts Sequentially',
          description: 'Run scripts in sequence',
          usage: 'npm-run-all package',
          example: `{
  "scripts": {
    "run-series": "run-s clean build test"
  }
}`,
        },
        {
          command: 'Run Scripts in Parallel',
          description: 'Run scripts in parallel',
          usage: 'npm-run-all package',
          example: `{
  "scripts": {
    "run-parallel": "run-p lint test"
  }
}`,
        },
      ],
    },
    {
      title: 'Package Manager Ecosystem',
      commands: [
        {
          command: 'Yarn Basic Commands',
          description: 'Essential Yarn commands',
          usage: 'Yarn package manager',
          example: `yarn install
yarn add react
yarn remove lodash
yarn upgrade`,
        },
        {
          command: 'PNPM Basic Commands',
          description: 'Essential pnpm commands',
          usage: 'PNPM package manager',
          example: `pnpm install
pnpm add react
pnpm remove lodash
pnpm update`,
        },
        {
          command: 'Bun Basic Commands',
          description: 'Essential Bun commands',
          usage: 'Bun package manager',
          example: `bun install
bun add react
bun remove lodash
bun update`,
        },
        {
          command: 'NPM to Yarn Migration',
          description: 'Convert from npm to Yarn',
          usage: 'Package manager migration',
          example: `yarn import  # Convert package-lock.json to yarn.lock`,
        },
        {
          command: 'NPM to PNPM Migration',
          description: 'Convert from npm to pnpm',
          usage: 'Package manager migration',
          example: `pnpm import  # Convert package-lock.json to pnpm-lock.yaml`,
        },
        {
          command: 'PNPM to NPM Migration',
          description: 'Convert from pnpm to npm',
          usage: 'Package manager migration',
          example: `pnpm dlx pnpm-to-npm`,
        },
        {
          command: 'Generate Lock File Only',
          description: 'Generate only lock file',
          usage: 'Lock file generation',
          example: `npm install --package-lock-only  # Generate only lock file`,
        },
        {
          command: 'Package Manager Features',
          description: 'Key differences between package managers',
          usage: 'Feature comparison',
          example: `# npm: Default, largest registry
# Yarn: Parallel installs, deterministic
# pnpm: Content-addressable storage, efficient
# Bun: All-in-one runtime, fastest`,
        },
        {
          command: 'Command Mapping',
          description: 'Common commands across package managers',
          usage: 'Command comparison',
          example: `npm install  -> yarn install / pnpm install / bun install
npm add      -> yarn add / pnpm add / bun add
npm run      -> yarn run / pnpm run / bun run
npm audit    -> yarn audit / pnpm audit / bun audit`,
        },
      ],
    },
    {
      title: 'Advanced NPM Utilities',
      commands: [
        {
          command: 'Execute Package Binary',
          description: 'Execute package binary directly',
          usage: 'npm exec <package>',
          example: `npm exec eslint .
npm x jest  # Short form`,
        },
        {
          command: 'Explore Installed Package',
          description: 'Explore installed package directory',
          usage: 'npm explore <package>',
          example: `npm explore lodash -- ls -la`,
        },
        {
          command: 'Show Project Root',
          description: 'Display project root directory',
          usage: 'npm prefix',
          example: `npm prefix           # Project root`,
        },
        {
          command: 'Show Global Prefix',
          description: 'Display global installation directory',
          usage: 'npm prefix -g',
          example: `npm prefix -g        # Global prefix`,
        },
        {
          command: 'Show node_modules Path',
          description: 'Display node_modules directory path',
          usage: 'npm root',
          example: `npm root             # node_modules path`,
        },
        {
          command: 'Show Global node_modules',
          description: 'Display global node_modules path',
          usage: 'npm root -g',
          example: `npm root -g          # Global node_modules`,
        },
        {
          command: 'Show .bin Directory',
          description: 'Display .bin directory path',
          usage: 'npm bin',
          example: `npm bin              # .bin directory`,
        },
        {
          command: 'Show Global .bin',
          description: 'Display global .bin directory path',
          usage: 'npm bin -g',
          example: `npm bin -g           # Global .bin`,
        },
        {
          command: 'Bash Completion',
          description: 'Enable bash tab completion',
          usage: 'npm completion',
          example: `npm completion >> ~/.bashrc
source ~/.bashrc`,
        },
        {
          command: 'Zsh Completion',
          description: 'Enable zsh tab completion',
          usage: 'npm completion',
          example: `npm completion >> ~/.zshrc
source ~/.zshrc`,
        },
        {
          command: 'Fish Completion',
          description: 'Enable fish tab completion',
          usage: 'npm completion',
          example: `npm completion >> ~/.config/fish/completions/npm.fish`,
        },
        {
          command: 'List Teams',
          description: 'List organization teams',
          usage: 'npm team list',
          example: `npm team list`,
        },
        {
          command: 'Create Team',
          description: 'Create organization team',
          usage: 'npm team create',
          example: `npm team create <team-name>`,
        },
        {
          command: 'Add User to Team',
          description: 'Add user to organization team',
          usage: 'npm team add',
          example: `npm team add <team-name> <user>`,
        },
        {
          command: 'List Organizations',
          description: 'List user organizations',
          usage: 'npm org list',
          example: `npm org list myorg`,
        },
        {
          command: 'Create Organization',
          description: 'Create new organization',
          usage: 'npm org create',
          example: `npm org create myorg`,
        },
        {
          command: 'Scoped Package Examples',
          description: 'Examples of scoped packages for teams',
          usage: 'Scoped packages',
          example: `@mycompany/shared-utils
@mycompany/ui-components`,
        },
        {
          command: 'Check Package Downloads',
          description: 'Monitor package popularity (via web)',
          usage: 'Package analytics',
          example: `# https://www.npmjs.com/package/<package-name>`,
        },
        {
          command: 'View Package Downloads',
          description: 'Get download statistics',
          usage: 'npm view downloads',
          example: `npm view react downloads`,
        },
        {
          command: 'Compare Package Popularity',
          description: 'Compare download statistics',
          usage: 'Package comparison',
          example: `npm view react downloads
npm view vue downloads`,
        },
      ],
    },
    {
      title: 'Troubleshooting & Best Practices',
      commands: [
        {
          command: 'Clear Cache and Reinstall',
          description: 'Complete cache clean and reinstall',
          usage: 'Full reset procedure',
          example: `npm cache clean --force
rm -rf node_modules package-lock.json
npm install`,
        },
        {
          command: 'Fix Permission Errors',
          description: 'Fix npm permission issues',
          usage: 'Permission fixes',
          example: `sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules`,
        },
        {
          command: 'Fix Peer Dependency Conflicts',
          description: 'Resolve peer dependency issues',
          usage: 'Peer dependency fixes',
          example: `npm install --legacy-peer-deps`,
        },
        {
          command: 'Fix Network Issues',
          description: 'Resolve network connectivity problems',
          usage: 'Network fixes',
          example: `npm config set registry https://registry.npmjs.org/
npm config set proxy null
npm config set https-proxy null`,
        },
        {
          command: 'Verbose Logging',
          description: 'Enable detailed logging for debugging',
          usage: 'Debug logging',
          example: `npm install --verbose
npm install --loglevel verbose`,
        },
        {
          command: 'Time Operations',
          description: 'Measure operation execution time',
          usage: 'Performance analysis',
          example: `npm install --timing
# Check timing info: .npm/_logs/*.log`,
        },
        {
          command: 'Dry Run Operations',
          description: 'Simulate operations without changes',
          usage: 'Operation simulation',
          example: `npm install --dry-run
npm update --dry-run`,
        },
        {
          command: 'Check NPM Environment',
          description: 'Comprehensive environment check',
          usage: 'Environment diagnostics',
          example: `npm doctor
npm config list`,
        },
        {
          command: 'Increase Network Concurrency',
          description: 'Optimize network performance',
          usage: 'Performance tuning',
          example: `npm config set maxsockets 10`,
        },
        {
          command: 'Use Local Registry',
          description: 'Configure local registry mirror',
          usage: 'Network optimization',
          example: `npm config set registry http://localhost:4873`,
        },
        {
          command: 'Disable Strict SSL',
          description: 'Disable SSL verification (development only)',
          usage: 'Development configuration',
          example: `npm config set strict-ssl false`,
        },
        {
          command: 'Optimize Cache Location',
          description: 'Use fast storage for cache',
          usage: 'Performance optimization',
          example: `npm config set cache /path/to/fast/ssd`,
        },
        {
          command: 'Optimize for CI/CD',
          description: 'Configure npm for CI/CD environments',
          usage: 'CI/CD optimization',
          example: `npm ci --prefer-offline --no-audit`,
        },
        {
          command: 'Regular Security Audits',
          description: 'Schedule regular security checks',
          usage: 'Security maintenance',
          example: `npm audit
npm audit fix`,
        },
        {
          command: 'Configure Security Settings',
          description: 'Set security-related configuration',
          usage: 'Security configuration',
          example: `npm config set audit-level high
npm config set audit-signature-verification true`,
        },
        {
          command: 'Use Private Registry with Auth',
          description: 'Configure authenticated private registry',
          usage: 'Private registry setup',
          example: `//private-registry.com/:_authToken=\${NPM_TOKEN}`,
        },
        {
          command: 'Monitor Vulnerabilities',
          description: 'Generate security vulnerability reports',
          usage: 'Security monitoring',
          example: `npm audit --json > audit-report.json`,
        },
      ],
    },
    {
      title: 'Command Reference & Flags',
      commands: [
        {
          command: 'Dependency Management Flags',
          description: 'Common dependency management flags',
          usage: 'npm install flags',
          example: `--save / -S           # Save to dependencies (default)
--save-dev / -D       # Save to devDependencies
--save-optional / -O  # Save to optionalDependencies
--save-exact / -E     # Save exact version
--global / -g         # Global operation
--production          # Skip devDependencies`,
        },
        {
          command: 'Output Flags',
          description: 'Common output control flags',
          usage: 'Output formatting flags',
          example: `--json                # JSON output
--dry-run             # Simulate without changes
--silent              # Minimal output
--verbose             # Detailed output
--loglevel <level>    # Set log level (silent, error, warn, notice, http, info, verbose, silly)`,
        },
        {
          command: 'Registry Configuration Flags',
          description: 'Registry-related configuration flags',
          usage: 'Registry configuration',
          example: `--registry <url>      # Use custom registry
--scope <scope>       # Set scope for scoped packages`,
        },
        {
          command: 'Authentication Flags',
          description: 'Authentication-related flags',
          usage: 'Authentication configuration',
          example: `--auth-token <token>  # Authentication token
--always-auth         # Always authenticate`,
        },
        {
          command: 'Network Configuration Flags',
          description: 'Network-related configuration flags',
          usage: 'Network configuration',
          example: `--proxy <url>         # HTTP proxy
--https-proxy <url>   # HTTPS proxy
--strict-ssl          # Enforce SSL (default true)`,
        },
        {
          command: 'Cache Configuration Flags',
          description: 'Cache-related configuration flags',
          usage: 'Cache configuration',
          example: `--cache <path>        # Custom cache path
--no-cache           # Disable cache`,
        },
        {
          command: 'Package Management Commands',
          description: 'Essential package management commands',
          usage: 'Package operations',
          example: `npm i <pkg>           # Install package
npm un <pkg>          # Uninstall package
npm up <pkg>          # Update package
npm ls                 # List packages`,
        },
        {
          command: 'Information Commands',
          description: 'Package information commands',
          usage: 'Information retrieval',
          example: `npm view <pkg>        # View package info
npm search <term>     # Search packages
npm audit             # Security audit`,
        },
        {
          command: 'Script Commands',
          description: 'Script execution commands',
          usage: 'Script management',
          example: `npm run <script>      # Run script
npm start             # Start app
npm test              # Run tests`,
        },
        {
          command: 'Publishing Commands',
          description: 'Package publishing commands',
          usage: 'Publishing operations',
          example: `npm publish           # Publish package
npm version <type>    # Bump version`,
        },
      ],
    },
  ],
};
