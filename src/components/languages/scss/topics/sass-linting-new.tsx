'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Shield, 
  CheckCircle2,
  Lightbulb,
  Info,
  FileCode,
  Settings,
  AlertCircle,
  Terminal
} from 'lucide-react';

interface SassLintingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassLintingNew({ onOpenWebPlayground }: SassLintingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Shield}
        category="Sass/SCSS · Testing & Quality"
        title="Linting"
        description="Enforce code quality standards with Stylelint for consistent, maintainable SCSS."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Shield className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="SCSS Linting"
            description="Automated code quality checks"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Linting</strong> automatically checks your SCSS code for errors, style violations, and best practices. Use <strong>Stylelint</strong> (modern, actively maintained) to enforce consistent code standards across your team.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Quality</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Catch errors early</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Consistency</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Enforce standards</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Configurable</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Custom rules</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Lint?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Linting catches <strong>bugs before runtime</strong>, enforces team standards, and keeps your SCSS clean and maintainable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Stylelint Setup"
            description="Modern SCSS linter (recommended)"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install Stylelint"
            code={`# Install Stylelint and SCSS plugin
npm install --save-dev stylelint stylelint-config-standard-scss

# Or with pnpm
pnpm add -D stylelint stylelint-config-standard-scss`}
            output={[
              '✅ stylelint - Core linter',
              '✅ stylelint-config-standard-scss - SCSS rules',
              '// Actively maintained, modern linter'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Create .stylelintrc.json"
            code={`{
  "extends": "stylelint-config-standard-scss",
  "rules": {
    // Your custom rules here
  }
}`}
            output={[
              '✅ Configuration file created',
              '// Extends standard SCSS rules'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Add NPM Scripts"
            code={`// package.json
{
  "scripts": {
    "lint:scss": "stylelint '**/*.scss'",
    "lint:scss:fix": "stylelint '**/*.scss' --fix"
  }
}`}
            output={[
              '// npm run lint:scss → Check for errors',
              '// npm run lint:scss:fix → Auto-fix issues'
            ]}
            language="scss"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Common Stylelint Rules"
            description="Enforce best practices"
            size="lg"
          />

          <CodeSnippetWithOutput
            title=".stylelintrc.json (Custom Rules)"
            code={`{
  "extends": "stylelint-config-standard-scss",
  "rules": {
    // Indentation
    "indentation": 2,
    
    // Nesting depth
    "max-nesting-depth": 3,
    
    // Color format
    "color-hex-length": "short",
    "color-named": "never",
    
    // Selector format
    "selector-max-id": 0,  // No IDs
    "selector-class-pattern": "^[a-z][a-z0-9-]*$",  // kebab-case
    
    // Declaration order
    "order/properties-alphabetical-order": true,
    
    // SCSS specific
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^[a-z][a-z0-9-]*$"  // kebab-case
  }
}`}
            output={[
              '✅ Custom rules configured',
              '// Enforces team standards'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">indentation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Enforce 2 or 4 space indentation
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">max-nesting-depth</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Limit nesting to prevent specificity issues (max 3-4 recommended)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">color-hex-length</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prefer short hex colors (#fff vs #ffffff)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">selector-max-id</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Disallow ID selectors (set to 0)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Running Stylelint"
            description="Check and fix issues"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Check All SCSS Files"
            code={`# Lint all SCSS files
npx stylelint "**/*.scss"

# Specific directory
npx stylelint "src/scss/**/*.scss"`}
            output={[
              'src/scss/main.scss',
              '  5:3  ✖  Expected indentation of 2 spaces   indentation',
              '  12:5 ✖  Expected newline after ","         selector-list-comma-newline-after',
              '',
              '✖ 2 problems (2 errors, 0 warnings)'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Auto-Fix Issues"
            code={`# Fix automatically fixable issues
npx stylelint "**/*.scss" --fix`}
            output={[
              '✅ Fixed 2 problems automatically',
              '// Manual fixes may still be needed'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Output Formats"
            code={`# JSON output
npx stylelint "**/*.scss" --formatter json

# Verbose output
npx stylelint "**/*.scss" --formatter verbose

# Custom formatter
npx stylelint "**/*.scss" --custom-formatter ./my-formatter.js`}
            output={[
              '✅ Different output formats',
              '// For CI/CD integration'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Ignore Files"
            description="Exclude files from linting"
            size="lg"
          />

          <CodeSnippetWithOutput
            title=".stylelintignore"
            code={`# Dependencies
node_modules/

# Build output
dist/
build/

# Vendor files
vendor/

# Specific files
legacy.scss
old-styles.scss`}
            output={[
              '✅ Files ignored',
              '// Same syntax as .gitignore'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Inline Ignore Comments"
            code={`/* stylelint-disable */
.legacy-code {
  color: red !important;
}
/* stylelint-enable */

/* stylelint-disable-next-line declaration-no-important */
.override {
  color: blue !important;
}`}
            output={[
              '✅ Specific rules disabled',
              '// Use sparingly!'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Editor Integration"
            description="Real-time linting in VS Code"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="VS Code Extension"
            code={`# Install VS Code extension
Name: Stylelint
Publisher: Stylelint
ID: stylelint.vscode-stylelint

# Features:
- Real-time linting as you type
- Auto-fix on save
- Error highlighting
- Quick fixes`}
            output={[
              '✅ Install from VS Code Extensions',
              '// Search for "Stylelint"'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="VS Code settings.json"
            code={`{
  // Enable Stylelint
  "stylelint.enable": true,
  
  // Validate these file types
  "stylelint.validate": ["css", "scss", "sass"],
  
  // Auto-fix on save
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  
  // Disable built-in CSS validation (conflicts)
  "css.validate": false,
  "scss.validate": false
}`}
            output={[
              '✅ VS Code configured',
              '✅ Auto-fix on save enabled',
              '// Errors shown inline while coding'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="CI/CD Integration"
            description="Lint in your build pipeline"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="GitHub Actions"
            code={`# .github/workflows/lint.yml
name: Lint SCSS

on: [push, pull_request]

jobs:
  stylelint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run Stylelint
        run: npm run lint:scss`}
            output={[
              '✅ Linting runs on every push',
              '✅ Blocks PRs with linting errors',
              '// Ensures code quality'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Pre-commit Hook (Husky)"
            code={`# Install Husky and lint-staged
npm install --save-dev husky lint-staged

# package.json
{
  "lint-staged": {
    "*.scss": "stylelint --fix"
  }
}

# .husky/pre-commit
#!/bin/sh
npx lint-staged`}
            output={[
              '✅ Linting runs before commit',
              '✅ Auto-fixes issues',
              '// Prevents bad code from being committed'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Stylelint (Not sass-lint)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                sass-lint is deprecated, Stylelint is actively maintained
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Extend Standard Config</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Start with <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">stylelint-config-standard-scss</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Run in CI/CD</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Block PRs with linting errors
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Pre-commit Hooks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lint before committing with Husky + lint-staged
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Editor Integration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Install VS Code extension for real-time feedback
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Ignore Too Many Files</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only ignore vendor/build files
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Inline Disable Comments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fix the issue instead of disabling rules
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use Stylelint</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Modern, actively maintained linter
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Catch Errors Early</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Find bugs before they reach production
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Enforce Standards</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consistent code across your team
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Automate</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run in CI/CD and pre-commit hooks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
