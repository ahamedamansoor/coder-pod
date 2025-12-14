'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  FileCode,
} from 'lucide-react';

export default function JavaScriptESLint() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ShieldCheck}
        category="JavaScript Tooling"
        title="ESLint"
        description="Find and fix problems in your JavaScript code"
        colorTheme="blue"
      />

      {/* What is ESLint */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is ESLint?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                ESLint is a <strong className="text-blue-700 dark:text-blue-400">static code analysis tool</strong> that finds and fixes problems in your JavaScript code. It catches bugs, enforces code style, and helps teams maintain consistent code quality across projects.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/30 dark:to-rose-900/30 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Find Errors</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Detect bugs before runtime
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Enforce Style</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consistent code formatting
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Auto Fix</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fix issues automatically
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation & Setup */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Installing ESLint</CardTitle>
          <CardDescription>Quick setup guide</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# Install ESLint
npm install --save-dev eslint

# Initialize configuration
npx eslint --init

# You'll be asked:
# 1. How would you like to use ESLint?
#    → To check syntax and find problems
# 2. What type of modules?
#    → JavaScript modules (import/export)
# 3. Which framework?
#    → React / Vue / None
# 4. Does your project use TypeScript?
#    → No / Yes
# 5. Where does your code run?
#    → Browser / Node
# 6. What format for config file?
#    → JavaScript / JSON / YAML

# Run ESLint
npx eslint yourfile.js

# Fix automatically
npx eslint yourfile.js --fix`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: ESLint Configuration</CardTitle>
          <CardDescription>.eslintrc.js or .eslintrc.json</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  
  extends: [
    'eslint:recommended',        // ESLint's recommended rules
    'plugin:react/recommended',  // React rules
    'plugin:@typescript-eslint/recommended'  // TypeScript
  ],
  
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  
  rules: {
    // Customize rules
    'no-console': 'warn',           // Warn on console.log
    'no-unused-vars': 'error',      // Error on unused variables
    'semi': ['error', 'always'],    // Require semicolons
    'quotes': ['error', 'single'],  // Single quotes only
    'indent': ['error', 2],         // 2 spaces indentation
    'max-len': ['warn', { code: 80 }],  // Line length warning
    'no-var': 'error',              // No var, use let/const
    'prefer-const': 'error',        // Use const when possible
    'eqeqeq': 'error',              // Require === instead of ==
    'curly': 'error',               // Require curly braces
    'arrow-body-style': ['error', 'as-needed']
  },
  
  settings: {
    react: {
      version: 'detect'  // Auto-detect React version
    }
  }
};`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Rule Levels */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <AlertTriangle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>ESLint Rule Levels</CardTitle>
              <CardDescription>Error, warning, or off</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-red-900 dark:text-red-100">"error"</code>
                <span className="text-sm text-gray-600 dark:text-gray-400">or</span>
                <code className="font-mono text-lg text-red-900 dark:text-red-100">2</code>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Triggers an error. Exits with error code. Blocks CI/CD pipeline.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-amber-900 dark:text-amber-100">"warn"</code>
                <span className="text-sm text-gray-600 dark:text-gray-400">or</span>
                <code className="font-mono text-lg text-amber-900 dark:text-amber-100">1</code>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Shows a warning. Doesn't fail build. Good for style issues.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-950/20 border-l-4 border-gray-500">
              <div className="flex items-center gap-2 mb-2">
                <code className="font-mono text-lg text-gray-900 dark:text-gray-100">"off"</code>
                <span className="text-sm text-gray-600 dark:text-gray-400">or</span>
                <code className="font-mono text-lg text-gray-900 dark:text-gray-100">0</code>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Disables the rule completely. Rule won't run.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Rules */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <FileCode className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common ESLint Rules</CardTitle>
              <CardDescription>Popular rules to enable</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">no-unused-vars</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Disallow unused variables
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"no-unused-vars": "error"</code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">no-undef</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Disallow undefined variables
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"no-undef": "error"</code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">eqeqeq</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Require === and !== instead of == and !=
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"eqeqeq": "error"</code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">no-console</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Warn about console.log statements
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"no-console": "warn"</code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">no-var</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Require let or const instead of var
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"no-var": "error"</code>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">prefer-const</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Suggest const for variables never reassigned
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"prefer-const": "error"</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ignoring Files */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Ignoring Files</CardTitle>
          <CardDescription>.eslintignore file</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# .eslintignore
# Similar to .gitignore

# Dependencies
node_modules/
bower_components/

# Build output
dist/
build/
*.min.js

# Config files
*.config.js
webpack.config.js

# Test coverage
coverage/

# Specific files
public/vendor/

# Inline ignore (in code)
// eslint-disable-next-line no-console
console.log('Debug info');

/* eslint-disable no-console */
console.log('Line 1');
console.log('Line 2');
/* eslint-enable no-console */`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Integration with Tools */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <FileCode className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Integration with Tools</CardTitle>
              <CardDescription>Use ESLint everywhere</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📝 VS Code Extension</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Install "ESLint" extension - shows errors while you type
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">Settings: "editor.codeActionsOnSave": {"{'source.fixAll.eslint': true}"}</code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📦 package.json Scripts</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Add lint scripts to your project
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">"lint": "eslint src/", "lint:fix": "eslint src/ --fix"</code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔄 Git Hooks (Husky)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Run ESLint before commits
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">npx husky add .husky/pre-commit "npm run lint"</code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">🚀 CI/CD Pipeline</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Run in GitHub Actions, GitLab CI
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">- run: npm run lint</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>ESLint Best Practices</CardTitle>
              <CardDescription>Use ESLint effectively</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use eslint:recommended as base</li>
                <li>• Run ESLint in CI/CD pipeline</li>
                <li>• Enable auto-fix in editor</li>
                <li>• Share config across team</li>
                <li>• Fix errors, not just warnings</li>
                <li>• Use popular configs (Airbnb, Standard)</li>
                <li>• Document rule changes</li>
                <li>• Review ESLint output regularly</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Disable rules without good reason</li>
                <li>• Use eslint-disable everywhere</li>
                <li>• Ignore warnings completely</li>
                <li>• Skip ESLint in CI</li>
                <li>• Make config too strict</li>
                <li>• Mix incompatible configs</li>
                <li>• Forget to update ESLint</li>
                <li>• Have different configs per developer</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Find Issues Early</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Catch bugs before runtime<br/>
                    Static code analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Enforce Style</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Consistent code across team<br/>
                    Configurable rules
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto-Fix</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    --fix flag repairs issues<br/>
                    Save time fixing manually
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Integrations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Editor, Git hooks, CI/CD<br/>
                    Catch issues everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700">
            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Code Quality Essential</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              ESLint is <strong>essential for professional JavaScript development</strong>. It prevents bugs, enforces best practices, and keeps code consistent across teams!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
