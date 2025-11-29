import { Server } from 'lucide-react';

export const npmCheatsheet = {
  id: 'npm',
  name: 'NPM',
  description: 'Node Package Manager commands (v6-v10)',
  icon: Server,
  colorTheme: 'purple' as const,
  sections: [
    {
      title: 'Getting Started',
      commands: [
        {
          command: 'npm --version',
          description: 'Check npm version',
          usage: 'npm --version',
          example: 'npm --version\nnpm -v # Short version',
        },
        {
          command: 'npm help',
          description: 'Get help',
          usage: 'npm help [command]',
          example: 'npm help install\nnpm help # List all commands',
        },
        {
          command: 'npm config list',
          description: 'Show config settings',
          usage: 'npm config list',
          example: 'npm config list\nnpm config ls -l # All settings',
        },
        {
          command: 'npm doctor',
          description: 'Check npm environment',
          usage: 'npm doctor',
          example: 'npm doctor\n# Checks npm setup health',
        },
      ],
    },
    {
      title: 'Initialize Project',
      commands: [
        {
          command: 'npm init',
          description: 'Initialize new project',
          usage: 'npm init',
          example: 'npm init\nnpm init -y # Skip prompts',
        },
        {
          command: 'npm init @scope',
          description: 'Use initializer package',
          usage: 'npm init @scope',
          example: 'npm init react-app my-app\nnpm init vite@latest my-project',
        },
        {
          command: 'npm create',
          description: 'Alias for npm init',
          usage: 'npm create [package]',
          example: 'npm create vite@latest\nnpm create next-app@latest',
        },
      ],
    },
    {
      title: 'Installing Packages',
      commands: [
        {
          command: 'npm install',
          description: 'Install all dependencies',
          usage: 'npm install',
          example: 'npm install\nnpm i # Short version',
        },
        {
          command: 'npm install <package>',
          description: 'Install specific package',
          usage: 'npm install <package>[@version]',
          example: 'npm install react\nnpm install react@18.2.0\nnpm i lodash@latest',
        },
        {
          command: 'npm install --save-dev',
          description: 'Install as dev dependency',
          usage: 'npm install -D <package>',
          example: 'npm install -D typescript\nnpm i -D eslint prettier',
        },
        {
          command: 'npm install --global',
          description: 'Install globally',
          usage: 'npm install -g <package>',
          example: 'npm install -g nodemon\nnpm i -g typescript',
        },
        {
          command: 'npm install --save-optional',
          description: 'Install as optional dependency',
          usage: 'npm install -O <package>',
          example: 'npm install -O fsevents',
        },
        {
          command: 'npm install --save-exact',
          description: 'Install exact version',
          usage: 'npm install -E <package>',
          example: 'npm install -E react@18.2.0\n# Installs without ^ or ~',
        },
        {
          command: 'npm install --no-save',
          description: 'Install without saving',
          usage: 'npm install --no-save <package>',
          example: 'npm install --no-save test-package',
        },
        {
          command: 'npm ci',
          description: 'Clean install (for CI/CD)',
          usage: 'npm ci',
          example: 'npm ci\n# Faster, removes node_modules first',
        },
      ],
    },
    {
      title: 'Removing Packages',
      commands: [
        {
          command: 'npm uninstall',
          description: 'Remove package',
          usage: 'npm uninstall <package>',
          example: 'npm uninstall lodash\nnpm un react # Short version',
        },
        {
          command: 'npm uninstall -g',
          description: 'Remove global package',
          usage: 'npm uninstall -g <package>',
          example: 'npm uninstall -g nodemon',
        },
        {
          command: 'npm prune',
          description: 'Remove extraneous packages',
          usage: 'npm prune',
          example: 'npm prune\nnpm prune --production # Remove dev deps',
        },
      ],
    },
    {
      title: 'Updating Packages',
      commands: [
        {
          command: 'npm update',
          description: 'Update packages',
          usage: 'npm update [package]',
          example: 'npm update\nnpm update react # Update specific',
        },
        {
          command: 'npm update -g',
          description: 'Update global packages',
          usage: 'npm update -g [package]',
          example: 'npm update -g\nnpm update -g npm # Update npm itself',
        },
        {
          command: 'npm outdated',
          description: 'Check outdated packages',
          usage: 'npm outdated',
          example: 'npm outdated\nnpm outdated --global',
        },
        {
          command: 'npm audit fix',
          description: 'Fix vulnerabilities',
          usage: 'npm audit fix',
          example: 'npm audit fix\nnpm audit fix --force # Force major updates',
        },
      ],
    },
    {
      title: 'Package Information',
      commands: [
        {
          command: 'npm list',
          description: 'List installed packages',
          usage: 'npm list [--depth=n]',
          example: 'npm list\nnpm list --depth=0 # Top level only\nnpm ls # Short version',
        },
        {
          command: 'npm list -g',
          description: 'List global packages',
          usage: 'npm list -g [--depth=n]',
          example: 'npm list -g --depth=0',
        },
        {
          command: 'npm view',
          description: 'View package info',
          usage: 'npm view <package> [field]',
          example: 'npm view react\nnpm view react version\nnpm view react versions',
        },
        {
          command: 'npm search',
          description: 'Search for packages',
          usage: 'npm search <term>',
          example: 'npm search react router',
        },
        {
          command: 'npm show',
          description: 'Show package details',
          usage: 'npm show <package>',
          example: 'npm show lodash\nnpm info react # Alias',
        },
        {
          command: 'npm repo',
          description: 'Open package repository',
          usage: 'npm repo <package>',
          example: 'npm repo react\n# Opens GitHub in browser',
        },
        {
          command: 'npm docs',
          description: 'Open package documentation',
          usage: 'npm docs <package>',
          example: 'npm docs react',
        },
        {
          command: 'npm home',
          description: 'Open package homepage',
          usage: 'npm home <package>',
          example: 'npm home lodash',
        },
      ],
    },
    {
      title: 'Running Scripts',
      commands: [
        {
          command: 'npm run',
          description: 'Run script from package.json',
          usage: 'npm run <script>',
          example: 'npm run build\nnpm run dev',
        },
        {
          command: 'npm run-script',
          description: 'Run script (long form)',
          usage: 'npm run-script <script>',
          example: 'npm run-script test',
        },
        {
          command: 'npm start',
          description: 'Run start script',
          usage: 'npm start',
          example: 'npm start\n# Runs "start" script',
        },
        {
          command: 'npm test',
          description: 'Run test script',
          usage: 'npm test',
          example: 'npm test\nnpm t # Short version',
        },
        {
          command: 'npm restart',
          description: 'Restart (stop + start)',
          usage: 'npm restart',
          example: 'npm restart',
        },
        {
          command: 'npm stop',
          description: 'Run stop script',
          usage: 'npm stop',
          example: 'npm stop',
        },
        {
          command: 'npm run --silent',
          description: 'Run without npm output',
          usage: 'npm run --silent <script>',
          example: 'npm run --silent build',
        },
      ],
    },
    {
      title: 'NPX (Package Runner)',
      commands: [
        {
          command: 'npx',
          description: 'Execute package binary',
          usage: 'npx <package> [args]',
          example: 'npx create-react-app my-app\nnpx eslint .',
        },
        {
          command: 'npx -p',
          description: 'Install and execute',
          usage: 'npx -p <package> <command>',
          example: 'npx -p cowsay cowsay hello',
        },
        {
          command: 'npx --no-install',
          description: 'Use only if already installed',
          usage: 'npx --no-install <package>',
          example: 'npx --no-install eslint',
        },
        {
          command: 'npx --yes',
          description: 'Skip install confirmation',
          usage: 'npx -y <package>',
          example: 'npx -y create-next-app@latest',
        },
        {
          command: 'npx <package>@version',
          description: 'Use specific version',
          usage: 'npx <package>@<version>',
          example: 'npx create-react-app@latest my-app',
        },
      ],
    },
    {
      title: 'Cache Management',
      commands: [
        {
          command: 'npm cache clean',
          description: 'Clear npm cache',
          usage: 'npm cache clean --force',
          example: 'npm cache clean --force\n# Clears package cache',
        },
        {
          command: 'npm cache verify',
          description: 'Verify cache integrity',
          usage: 'npm cache verify',
          example: 'npm cache verify',
        },
        {
          command: 'npm cache ls',
          description: 'List cached packages',
          usage: 'npm cache ls [package]',
          example: 'npm cache ls react',
        },
      ],
    },
    {
      title: 'Configuration',
      commands: [
        {
          command: 'npm config set',
          description: 'Set config value',
          usage: 'npm config set <key> <value>',
          example: 'npm config set registry https://registry.npmjs.org/\nnpm config set save-exact true',
        },
        {
          command: 'npm config get',
          description: 'Get config value',
          usage: 'npm config get <key>',
          example: 'npm config get registry',
        },
        {
          command: 'npm config delete',
          description: 'Delete config value',
          usage: 'npm config delete <key>',
          example: 'npm config delete proxy',
        },
        {
          command: 'npm config list',
          description: 'List all config',
          usage: 'npm config list',
          example: 'npm config list\nnpm config ls',
        },
        {
          command: 'npm config edit',
          description: 'Edit config file',
          usage: 'npm config edit',
          example: 'npm config edit\n# Opens .npmrc in editor',
        },
      ],
    },
    {
      title: 'Publishing Packages',
      commands: [
        {
          command: 'npm login',
          description: 'Login to registry',
          usage: 'npm login',
          example: 'npm login\n# Enter credentials',
        },
        {
          command: 'npm logout',
          description: 'Logout from registry',
          usage: 'npm logout',
          example: 'npm logout',
        },
        {
          command: 'npm whoami',
          description: 'Show current user',
          usage: 'npm whoami',
          example: 'npm whoami',
        },
        {
          command: 'npm publish',
          description: 'Publish package',
          usage: 'npm publish [--access=public]',
          example: 'npm publish\nnpm publish --access=public # For scoped packages',
        },
        {
          command: 'npm unpublish',
          description: 'Unpublish package',
          usage: 'npm unpublish <package>@<version>',
          example: 'npm unpublish my-package@1.0.0\n# Must be within 72 hours',
        },
        {
          command: 'npm deprecate',
          description: 'Deprecate package version',
          usage: 'npm deprecate <package>@<version> "<message>"',
          example: 'npm deprecate my-package@1.0.0 "Use version 2.0.0"',
        },
        {
          command: 'npm version',
          description: 'Bump package version',
          usage: 'npm version <major|minor|patch>',
          example: 'npm version patch # 1.0.0 -> 1.0.1\nnpm version minor # 1.0.0 -> 1.1.0\nnpm version major # 1.0.0 -> 2.0.0',
        },
        {
          command: 'npm pack',
          description: 'Create tarball',
          usage: 'npm pack',
          example: 'npm pack\n# Creates .tgz file',
        },
      ],
    },
    {
      title: 'Security & Audit',
      commands: [
        {
          command: 'npm audit',
          description: 'Run security audit',
          usage: 'npm audit',
          example: 'npm audit\nnpm audit --json # JSON output',
        },
        {
          command: 'npm audit fix',
          description: 'Fix vulnerabilities',
          usage: 'npm audit fix [--force]',
          example: 'npm audit fix\nnpm audit fix --force # Including breaking',
        },
        {
          command: 'npm audit signatures',
          description: 'Verify package signatures (npm 10+)',
          usage: 'npm audit signatures',
          example: 'npm audit signatures',
        },
      ],
    },
    {
      title: 'Link & Workspaces',
      commands: [
        {
          command: 'npm link',
          description: 'Create symlink to package',
          usage: 'npm link [package]',
          example: 'cd my-package && npm link\ncd my-app && npm link my-package',
        },
        {
          command: 'npm unlink',
          description: 'Remove symlink',
          usage: 'npm unlink [package]',
          example: 'npm unlink my-package',
        },
        {
          command: 'npm workspace',
          description: 'Run command in workspace',
          usage: 'npm run <script> --workspace=<name>',
          example: 'npm run build --workspace=packages/app',
        },
        {
          command: 'npm workspaces',
          description: 'Run in all workspaces',
          usage: 'npm run <script> --workspaces',
          example: 'npm run test --workspaces',
        },
      ],
    },
    {
      title: 'Dependencies Management',
      commands: [
        {
          command: 'npm dedupe',
          description: 'Reduce duplicate packages',
          usage: 'npm dedupe',
          example: 'npm dedupe\nnpm ddp # Short version',
        },
        {
          command: 'npm fund',
          description: 'Show funding info',
          usage: 'npm fund',
          example: 'npm fund',
        },
        {
          command: 'npm diff',
          description: 'Compare package versions',
          usage: 'npm diff [package]',
          example: 'npm diff\nnpm diff react@17.0.0 react@18.0.0',
        },
        {
          command: 'npm explain',
          description: 'Explain why package is installed',
          usage: 'npm explain <package>',
          example: 'npm explain lodash\n# Shows dependency tree',
        },
        {
          command: 'npm query',
          description: 'Query dependency tree (npm 8.16+)',
          usage: 'npm query <selector>',
          example: 'npm query "[name=react]"\nnpm query ":root > *" # Direct deps',
        },
      ],
    },
    {
      title: 'Package.json Scripts',
      commands: [
        {
          command: 'Pre/Post Scripts',
          description: 'Auto-run before/after',
          usage: '"prestart": "...", "poststart": "..."',
          example: '{\n  "scripts": {\n    "pretest": "eslint .",\n    "test": "jest",\n    "posttest": "echo Done"\n  }\n}',
        },
        {
          command: 'Life Cycle Scripts',
          description: 'Special script names',
          usage: 'prepublish, prepare, postinstall, etc.',
          example: '{\n  "scripts": {\n    "prepare": "npm run build",\n    "prepublishOnly": "npm test"\n  }\n}',
        },
        {
          command: 'Passing Arguments',
          description: 'Pass args to script',
          usage: 'npm run <script> -- --arg',
          example: 'npm run test -- --watch\nnpm start -- --port 3001',
        },
        {
          command: 'Multiple Commands',
          description: 'Run commands sequentially',
          usage: '"script": "cmd1 && cmd2"',
          example: '{\n  "scripts": {\n    "build": "tsc && webpack"\n  }\n}',
        },
      ],
    },
    {
      title: 'Alternative Package Managers',
      commands: [
        {
          command: 'yarn',
          description: 'Yarn package manager',
          usage: 'yarn [command]',
          example: 'yarn install\nyarn add react\nyarn remove lodash',
        },
        {
          command: 'pnpm',
          description: 'Fast, disk efficient',
          usage: 'pnpm [command]',
          example: 'pnpm install\npnpm add react\npnpm remove lodash',
        },
        {
          command: 'bun',
          description: 'Ultra-fast runtime',
          usage: 'bun [command]',
          example: 'bun install\nbun add react\nbun remove lodash',
        },
      ],
    },
    {
      title: 'Useful Commands',
      commands: [
        {
          command: 'npm exec',
          description: 'Execute package binary',
          usage: 'npm exec <package>',
          example: 'npm exec eslint .\nnpm x jest # Short version',
        },
        {
          command: 'npm prefix',
          description: 'Show project root',
          usage: 'npm prefix',
          example: 'npm prefix\nnpm prefix -g # Global prefix',
        },
        {
          command: 'npm root',
          description: 'Show node_modules path',
          usage: 'npm root',
          example: 'npm root\nnpm root -g # Global path',
        },
        {
          command: 'npm bin',
          description: 'Show bin directory',
          usage: 'npm bin',
          example: 'npm bin\nnpm bin -g',
        },
        {
          command: 'npm completion',
          description: 'Enable tab completion',
          usage: 'npm completion >> ~/.bashrc',
          example: 'npm completion >> ~/.bashrc\n# Restart shell',
        },
        {
          command: 'npm explore',
          description: 'Browse installed package',
          usage: 'npm explore <package> -- <command>',
          example: 'npm explore lodash -- ls',
        },
      ],
    },
    {
      title: 'Troubleshooting',
      commands: [
        {
          command: 'Clear Cache',
          description: 'Fix corrupted cache',
          usage: 'npm cache clean --force',
          example: 'npm cache clean --force\nrm -rf node_modules package-lock.json\nnpm install',
        },
        {
          command: 'Fix Permissions',
          description: 'Fix permission errors',
          usage: 'sudo chown -R $USER ~/.npm',
          example: 'sudo chown -R $USER ~/.npm\nsudo chown -R $USER /usr/local/lib/node_modules',
        },
        {
          command: 'Reinstall Dependencies',
          description: 'Fresh install',
          usage: 'rm -rf node_modules package-lock.json && npm i',
          example: 'rm -rf node_modules package-lock.json\nnpm install',
        },
        {
          command: 'Check for Issues',
          description: 'Diagnose problems',
          usage: 'npm doctor',
          example: 'npm doctor\n# Runs health checks',
        },
        {
          command: 'Verbose Logging',
          description: 'Debug installation',
          usage: 'npm install --loglevel verbose',
          example: 'npm install --loglevel verbose\nnpm install --verbose',
        },
        {
          command: 'Legacy Peer Deps',
          description: 'Fix peer dependency errors',
          usage: 'npm install --legacy-peer-deps',
          example: 'npm install --legacy-peer-deps',
        },
        {
          command: 'Update npm',
          description: 'Update npm itself',
          usage: 'npm install -g npm@latest',
          example: 'npm install -g npm@latest\nnpm -v # Check version',
        },
      ],
    },
    {
      title: 'Common Flags',
      commands: [
        {
          command: '--save / -S',
          description: 'Save to dependencies (default)',
          usage: 'npm install --save <package>',
          example: 'npm install --save react',
        },
        {
          command: '--save-dev / -D',
          description: 'Save to devDependencies',
          usage: 'npm install -D <package>',
          example: 'npm install -D typescript',
        },
        {
          command: '--global / -g',
          description: 'Install globally',
          usage: 'npm install -g <package>',
          example: 'npm install -g nodemon',
        },
        {
          command: '--production',
          description: 'Skip devDependencies',
          usage: 'npm install --production',
          example: 'npm install --production',
        },
        {
          command: '--dry-run',
          description: 'Simulate without changes',
          usage: 'npm install --dry-run',
          example: 'npm install react --dry-run',
        },
        {
          command: '--force / -f',
          description: 'Force operation',
          usage: 'npm install --force',
          example: 'npm install --force',
        },
        {
          command: '--json',
          description: 'Output as JSON',
          usage: 'npm list --json',
          example: 'npm list --json\nnpm outdated --json',
        },
      ],
    },
  ],
};
