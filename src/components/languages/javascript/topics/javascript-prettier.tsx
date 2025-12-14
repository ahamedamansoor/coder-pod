'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Wand2,
  CheckCircle,
  XCircle,
  Code2,
  Lightbulb,
  Palette,
} from 'lucide-react';

export default function JavaScriptPrettier() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Wand2}
        category="JavaScript Tooling"
        title="Prettier"
        description="Opinionated code formatter for beautiful, consistent code"
        colorTheme="pink"
      />

      {/* What is Prettier */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-pink-50/50 via-rose-50/30 to-fuchsia-50/20 dark:from-pink-950/10 dark:via-rose-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg">
              <Wand2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Prettier?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Prettier is an <strong className="text-pink-700 dark:text-pink-400">opinionated code formatter</strong> that automatically formats your code to a consistent style. It supports JavaScript, TypeScript, CSS, HTML, JSON, and more. No configuration debates—just save and it formats!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Wand2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Auto Format</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Formats code on save automatically
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Consistent Style</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Same formatting across entire team
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Multi-Language</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                JS, TS, CSS, HTML, JSON, and more
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prettier vs ESLint */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Prettier vs ESLint</CardTitle>
              <CardDescription>Different tools, complementary purposes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3">Prettier (Formatting)</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Handles code <strong>style</strong> (spaces, quotes, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Automatically formats on save</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Opinionated (few config options)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Enforces consistent formatting</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">ESLint (Code Quality)</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Finds <strong>bugs</strong> and code issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Shows errors and warnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Highly configurable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Enforces best practices</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Use Both Together!</AlertTitle>
            <AlertDescription>
              Prettier handles formatting, ESLint handles code quality. They work perfectly together and complement each other.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Installing Prettier</CardTitle>
          <CardDescription>Quick setup guide</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# Install Prettier
npm install --save-dev prettier

# Create config file
echo {}> .prettierrc.json

# Format all files
npx prettier --write .

# Format specific files
npx prettier --write src/**/*.js

# Check if files are formatted
npx prettier --check .

# Add to package.json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Prettier Configuration</CardTitle>
          <CardDescription>.prettierrc.json or .prettierrc.js</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// .prettierrc.json
{
  "semi": true,              // Add semicolons
  "trailingComma": "es5",    // Trailing commas where valid in ES5
  "singleQuote": true,       // Use single quotes
  "printWidth": 80,          // Wrap lines at 80 characters
  "tabWidth": 2,             // 2 spaces per indentation
  "useTabs": false,          // Use spaces, not tabs
  "arrowParens": "always",   // Always parentheses around arrow function args
  "bracketSpacing": true,    // Spaces inside object literals
  "endOfLine": "lf"          // Unix line endings
}

// .prettierrc.js (with comments)
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  
  // Override for specific files
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120
      }
    }
  ]
};`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Before & After */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Prettier in Action</CardTitle>
          <CardDescription>Before and after formatting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Before (Messy)
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Inconsistent formatting
function foo(  x,y,z  ){
const obj={name:"John",age:30,city:"NYC"}
  if(x>10){return y*2}
      else{
return z
}
}

const users=[{id:1,name:"Alice"},{id:2,name:"Bob"}]

const result=users.map(user=>{
return{
...user,
active:true
}
})`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  After (Prettier)
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Consistently formatted
function foo(x, y, z) {
  const obj = { name: 'John', age: 30, city: 'NYC' };
  if (x > 10) {
    return y * 2;
  } else {
    return z;
  }
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const result = users.map((user) => {
  return {
    ...user,
    active: true,
  };
});`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ignore Files */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Ignoring Files</CardTitle>
          <CardDescription>.prettierignore file</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# .prettierignore
# Similar to .gitignore

# Dependencies
node_modules/
bower_components/

# Build output
dist/
build/
*.min.js
*.bundle.js

# Package manager lock files
package-lock.json
yarn.lock

# Generated files
coverage/
.next/
.nuxt/

# Markdown (if you want to preserve formatting)
*.md

# Specific files
public/vendor/
legacy-code/`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* VS Code Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>VS Code Integration</CardTitle>
              <CardDescription>Format on save automatically</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. Install Extension</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Install "Prettier - Code formatter" extension in VS Code
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">2. Configure Settings</h4>
              <pre className="mt-2 p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs overflow-x-auto">
{`// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}`}</pre>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. Format Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Keyboard shortcuts:
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• <code className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Shift + Alt + F</code> - Format document</li>
                <li>• Or right-click → "Format Document"</li>
                <li>• Automatically formats on save (if enabled)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prettier with ESLint */}
      <Card>
        <CardHeader>
          <CardTitle>Example 5: Using Prettier with ESLint</CardTitle>
          <CardDescription>Perfect harmony</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# Install Prettier + ESLint integration
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

# .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier'  // Disables ESLint rules that conflict with Prettier
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',  // Show Prettier errors as ESLint errors
    // Other ESLint rules...
  }
};

# Now ESLint and Prettier work together!
# ESLint = code quality
# Prettier = formatting

# Run both
npm run lint
npm run format`}</code>
          </pre>
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
              <CardTitle>Prettier Best Practices</CardTitle>
              <CardDescription>Get the most out of Prettier</CardDescription>
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
                <li>• Enable format on save in editor</li>
                <li>• Use default config (opinionated is good!)</li>
                <li>• Share config with team (.prettierrc)</li>
                <li>• Add Prettier to pre-commit hooks</li>
                <li>• Run Prettier in CI pipeline</li>
                <li>• Integrate with ESLint</li>
                <li>• Format all files initially</li>
                <li>• Keep Prettier updated</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Fight Prettier's opinions</li>
                <li>• Over-configure (keep it simple)</li>
                <li>• Mix formatted and unformatted code</li>
                <li>• Skip Prettier in CI</li>
                <li>• Disable for "just this file"</li>
                <li>• Have different configs per developer</li>
                <li>• Manually format code</li>
                <li>• Ignore Prettier errors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-fuchsia-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto Formatter</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Formats code on save<br/>
                    No manual formatting needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Opinionated</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Few config options<br/>
                    Consistent by design
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🤝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Works with ESLint</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Formatting + quality<br/>
                    Perfect combination
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Multi-Language</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JS, TS, CSS, HTML, JSON<br/>
                    One tool for all
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-950/30 dark:to-rose-950/30 border-pink-300 dark:border-pink-700">
            <Wand2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">End Format Wars</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Prettier <strong>eliminates code style debates</strong>. Everyone's code looks the same. Save time arguing about tabs vs spaces—let Prettier decide!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
