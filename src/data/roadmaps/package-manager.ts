import type { Roadmap } from './types';

export const packageManager: Roadmap = {
  slug: 'package-manager',
  name: 'Package Manager',
  description: 'Master JavaScript package managers - npm, yarn, pnpm, and modern package management workflows',
  topics: [
    // LEARNING ROADMAP
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering package managers from basics to advanced workflows.' },
    
    // 1. FUNDAMENTALS
    { slug: 'what-is-package-manager', title: 'What is a Package Manager?', explanation: 'Understanding the role of package managers in modern JavaScript development and dependency management.', category: 'Fundamentals' },
    { slug: 'package-manager-setup', title: 'Installation & Setup', explanation: 'Installing and configuring npm, yarn, and pnpm on your development machine.', category: 'Fundamentals' },
    { slug: 'package-json', title: 'package.json Explained', explanation: 'Understanding the heart of Node.js projects - package.json structure and fields.', category: 'Fundamentals' },
    { slug: 'node-modules', title: 'node_modules Structure', explanation: 'How packages are organized and installed in the node_modules directory.', category: 'Fundamentals' },
    
    // 2. NPM - NODE PACKAGE MANAGER
    { slug: 'npm-basics', title: 'npm Basics', explanation: 'Essential npm commands: init, install, uninstall, update, and basic usage patterns.', category: 'npm' },
    { slug: 'npm-install-types', title: 'npm Install Variations', explanation: 'Understanding regular vs dev dependencies, global installs, and exact versions.', category: 'npm' },
    { slug: 'npm-scripts', title: 'npm Scripts', explanation: 'Creating and running custom scripts in package.json for common development tasks.', category: 'npm' },
    { slug: 'npm-run', title: 'npm run Commands', explanation: 'Running scripts, passing arguments, and understanding script lifecycle.', category: 'npm' },
    { slug: 'npm-audit', title: 'Security with npm audit', explanation: 'Scanning for vulnerabilities and fixing security issues in dependencies.', category: 'npm' },
    { slug: 'npm-config', title: 'npm Configuration', explanation: 'Configuring npm settings, registries, and authentication.', category: 'npm' },
    
    // 3. YARN
    { slug: 'yarn-introduction', title: 'Introduction to Yarn', explanation: 'Why Yarn was created and its advantages over npm for dependency management.', category: 'Yarn' },
    { slug: 'yarn-installation', title: 'Installing Yarn', explanation: 'Different ways to install Yarn and setup your first Yarn project.', category: 'Yarn' },
    { slug: 'yarn-commands', title: 'Yarn Commands', explanation: 'Essential Yarn commands: add, remove, upgrade, and their npm equivalents.', category: 'Yarn' },
    { slug: 'yarn-workspaces', title: 'Yarn Workspaces', explanation: 'Managing monorepos with Yarn workspaces for multiple related packages.', category: 'Yarn' },
    { slug: 'yarn-lock', title: 'yarn.lock File', explanation: 'Understanding deterministic installs and the yarn.lock file format.', category: 'Yarn' },
    { slug: 'yarn-pnp', title: 'Plug\'n\'Play (PnP)', explanation: 'Yarn PnP for faster installs and no node_modules directory.', category: 'Yarn' },
    
    // 4. PNPM
    { slug: 'pnpm-introduction', title: 'Introduction to pnpm', explanation: 'The fast, disk space efficient package manager with strict dependency management.', category: 'pnpm' },
    { slug: 'pnpm-installation', title: 'Installing pnpm', explanation: 'Installing pnpm and migrating existing projects from npm/yarn.', category: 'pnpm' },
    { slug: 'pnpm-commands', title: 'pnpm Commands', explanation: 'Core pnpm commands and their differences from npm/yarn.', category: 'pnpm' },
    { slug: 'pnpm-workspaces', title: 'pnpm Workspaces', explanation: 'Managing monorepos with pnpm workspaces and project structure.', category: 'pnpm' },
    { slug: 'pnpm-store', title: 'pnpm Store', explanation: 'Understanding how pnpm uses content-addressable storage for efficiency.', category: 'pnpm' },
    { slug: 'pnpm-strict-dependencies', title: 'Strict Dependencies', explanation: 'How pnpm prevents phantom dependencies and ensures clean dependency graphs.', category: 'pnpm' },
    
    // 5. VERSION MANAGEMENT
    { slug: 'semantic-versioning', title: 'Semantic Versioning (SemVer)', explanation: 'Understanding version numbers: MAJOR.MINOR.PATCH and compatibility rules.', category: 'Version Management' },
    { slug: 'version-ranges', title: 'Version Ranges', explanation: 'Specifying version ranges: caret (^), tilde (~), exact, and wildcards.', category: 'Version Management' },
    { slug: 'package-lock-json', title: 'package-lock.json', explanation: 'Understanding npm\'s lock file for deterministic dependency trees.', category: 'Version Management' },
    { slug: 'updating-dependencies', title: 'Updating Dependencies', explanation: 'Strategies for updating packages: patch, minor, major updates and best practices.', category: 'Version Management' },
    { slug: 'dependency-drift', title: 'Preventing Dependency Drift', explanation: 'Keeping team environments consistent with lock files and exact versions.', category: 'Version Management' },
    
    // 6. ADVANCED CONCEPTS
    { slug: 'dependency-types', title: 'Dependency Types', explanation: 'dependencies, devDependencies, peerDependencies, and optionalDependencies.', category: 'Advanced Concepts' },
    { slug: 'peer-dependencies', title: 'Peer Dependencies', explanation: 'Understanding and managing peer dependencies for plugin architectures.', category: 'Advanced Concepts' },
    { slug: 'bundled-dependencies', title: 'Bundled Dependencies', explanation: 'When and how to use bundled dependencies in your packages.', category: 'Advanced Concepts' },
    { slug: 'private-packages', title: 'Private Packages', explanation: 'Setting up and using private npm registries for internal packages.', category: 'Advanced Concepts' },
    { slug: 'scoped-packages', title: 'Scoped Packages', explanation: 'Using and creating scoped packages (@username/package) for organization.', category: 'Advanced Concepts' },
    
    // 7. REGISTRIES & PUBLISHING
    { slug: 'npm-registry', title: 'npm Registry', explanation: 'Understanding the public npm registry and alternative registries.', category: 'Registries & Publishing' },
    { slug: 'publishing-packages', title: 'Publishing Packages', explanation: 'Preparing and publishing your own packages to the npm registry.', category: 'Registries & Publishing' },
    { slug: 'package-versioning', title: 'Package Versioning Strategy', explanation: 'Best practices for versioning your published packages.', category: 'Registries & Publishing' },
    { slug: 'package-metadata', title: 'Package Metadata', explanation: 'README, LICENSE, repository, and other important package.json fields.', category: 'Registries & Publishing' },
    { slug: 'npm-publish-workflow', title: 'Publishing Workflow', explanation: 'CI/CD pipelines for automated package publishing and releases.', category: 'Registries & Publishing' },
    
    // 8. PERFORMANCE & OPTIMIZATION
    { slug: 'install-performance', title: 'Install Performance', explanation: 'Optimizing package installation speed and cache usage.', category: 'Performance & Optimization' },
    { slug: 'bundle-size', title: 'Bundle Size Impact', explanation: 'How package choices affect bundle size and tree-shaking.', category: 'Performance & Optimization' },
    { slug: 'dependency-analysis', title: 'Dependency Analysis', explanation: 'Tools for analyzing dependency trees and identifying unused packages.', category: 'Performance & Optimization' },
    { slug: 'npm-cache', title: 'Package Cache Management', explanation: 'Understanding and managing npm/yarn/pnpm caches for faster installs.', category: 'Performance & Optimization' },
    
    // 9. SECURITY
    { slug: 'package-security', title: 'Package Security Best Practices', explanation: 'Security considerations when choosing and using third-party packages.', category: 'Security' },
    { slug: 'vulnerability-scanning', title: 'Vulnerability Scanning', explanation: 'Automated tools for scanning dependencies for known vulnerabilities.', category: 'Security' },
    { slug: 'supply-chain-security', title: 'Supply Chain Security', explanation: 'Protecting your project from supply chain attacks in package dependencies.', category: 'Security' },
    { slug: 'package-integrity', title: 'Package Integrity', explanation: 'Verifying package integrity with checksums and trusted publishing.', category: 'Security' },
    
    // 10. MONOREPOS & WORKSPACES
    { slug: 'monorepo-introduction', title: 'Monorepo Introduction', explanation: 'Understanding monorepo architecture and when to use it.', category: 'Monorepos & Workspaces' },
    { slug: 'workspace-setup', title: 'Workspace Setup', explanation: 'Setting up workspaces in npm, yarn, and pnpm for monorepo management.', category: 'Monorepos & Workspaces' },
    { slug: 'cross-package-dependencies', title: 'Cross-package Dependencies', explanation: 'Managing dependencies between packages in a monorepo.', category: 'Monorepos & Workspaces' },
    { slug: 'monorepo-build-systems', title: 'Monorepo Build Systems', explanation: 'Integrating package managers with build systems like Nx, Turborepo, and Lerna.', category: 'Monorepos & Workspaces' },
    
    // 11. ECOSYSTEM TOOLS
    { slug: 'package-manager-comparison', title: 'Package Manager Comparison', explanation: 'Detailed comparison of npm, yarn, and pnpm for different use cases.', category: 'Ecosystem Tools' },
    { slug: 'alternative-managers', title: 'Alternative Package Managers', explanation: 'Exploring Deno, Bun, and other emerging package management solutions.', category: 'Ecosystem Tools' },
    { slug: 'package-manager-ui', title: 'Package Manager UIs', explanation: 'Graphical interfaces for package management: npm Desktop, Yarn UI, etc.', category: 'Ecosystem Tools' },
    { slug: 'integration-tools', title: 'IDE Integration', explanation: 'Package manager integration in VS Code, WebStorm, and other development tools.', category: 'Ecosystem Tools' },
    
    // 12. TROUBLESHOOTING & BEST PRACTICES
    { slug: 'common-issues', title: 'Common Issues & Solutions', explanation: 'Troubleshooting frequent package manager problems and their fixes.', category: 'Troubleshooting & Best Practices' },
    { slug: 'dependency-hell', title: 'Avoiding Dependency Hell', explanation: 'Strategies for preventing and resolving dependency conflicts.', category: 'Troubleshooting & Best Practices' },
    { slug: 'best-practices', title: 'Package Manager Best Practices', explanation: 'Industry best practices for dependency management in professional projects.', category: 'Troubleshooting & Best Practices' },
    { slug: 'team-workflows', title: 'Team Workflows', explanation: 'Standardizing package management workflows across development teams.', category: 'Troubleshooting & Best Practices' },
    
    // INTERVIEW QUESTIONS
    { slug: 'interview-questions', title: 'Interview Questions', explanation: 'Common interview questions about package managers and dependency management.' }
  ]
};
