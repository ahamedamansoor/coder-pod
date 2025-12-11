'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  TestTube, 
  CheckCircle2,
  Lightbulb,
  Info,
  FileCode,
  Settings,
  Play,
  Terminal
} from 'lucide-react';

interface SassTestingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassTestingNew({ onOpenWebPlayground }: SassTestingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={TestTube}
        category="Sass/SCSS · Testing & Quality"
        title="Testing Sass"
        description="Unit test your Sass functions and mixins with True testing framework for reliable, maintainable code."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TestTube className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Testing Sass"
            description="Unit testing for functions and mixins"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>True</strong> is a unit testing framework for Sass. Test your custom functions and mixins to ensure they work correctly and catch regressions early!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Unit Tests</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Test functions & mixins</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Assertions</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Verify outputs match expectations</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">CI/CD Ready</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Run in automated pipelines</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Test Sass?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Testing ensures your <strong>functions and mixins work correctly</strong>, catches bugs early, and prevents regressions when refactoring!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installing True"
            description="Setup Sass testing framework"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install True"
            code={`# Install True via npm
npm install --save-dev sass-true

# Or with pnpm
pnpm add -D sass-true`}
            output={[
              '✅ sass-true installed',
              '// Unit testing framework for Sass'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Project Structure"
            code={`project/
├── src/
│   └── scss/
│       ├── _functions.scss
│       └── _mixins.scss
├── test/
│   ├── test.scss          # Import all test files
│   ├── _functions.test.scss
│   └── _mixins.test.scss
├── package.json
└── sass.test.js           # Test runner`}
            output={[
              '✅ Tests organized in test/ directory',
              '// Keep tests separate from source'
            ]}
            language="scss"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Testing Functions"
            description="Unit test custom Sass functions"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Function to Test"
            code={`// src/scss/_functions.scss
@function double($value) {
  @return $value * 2;
}

@function to-rem($px) {
  @return ($px / 16px) * 1rem;
}`}
            output={[
              '// Functions we want to test'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Test File"
            code={`// test/_functions.test.scss
@use 'true' as *;
@use '../src/scss/functions' as fn;

// Test suite
@include describe('double()') {
  @include it('doubles the input value') {
    @include assert-equal(
      fn.double(5),
      10,
      'double(5) should return 10'
    );
  }
  
  @include it('works with units') {
    @include assert-equal(
      fn.double(10px),
      20px,
      'double(10px) should return 20px'
    );
  }
}

@include describe('to-rem()') {
  @include it('converts pixels to rem') {
    @include assert-equal(
      fn.to-rem(16px),
      1rem,
      'to-rem(16px) should return 1rem'
    );
  }
  
  @include it('handles fractional values') {
    @include assert-equal(
      fn.to-rem(24px),
      1.5rem,
      'to-rem(24px) should return 1.5rem'
    );
  }
}`}
            output={[
              '✅ Test assertions written',
              '// Tests grouped by function'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TestTube className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Testing Mixins"
            description="Test mixin output CSS"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Mixin to Test"
            code={`// src/scss/_mixins.scss
@mixin button-reset {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}`}
            output={[
              '// Mixins we want to test'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Mixin Test File"
            code={`// test/_mixins.test.scss
@use 'true' as *;
@use '../src/scss/mixins' as mx;

@include describe('button-reset()') {
  @include it('outputs button reset styles') {
    @include assert {
      @include output {
        @include mx.button-reset;
      }
      
      @include expect {
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
      }
    }
  }
}

@include describe('flex-center()') {
  @include it('outputs flexbox centering styles') {
    @include assert {
      @include output {
        @include mx.flex-center;
      }
      
      @include expect {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}`}
            output={[
              '✅ Mixin output tests',
              '// Compares actual vs expected CSS'
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
            title="Test Runner"
            description="Running tests with Node.js"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Main Test File"
            code={`// test/test.scss
@use 'true' as *;

// Import all test files
@import 'functions.test';
@import 'mixins.test';

// Include test runner
@include report;`}
            output={[
              '✅ All tests imported',
              '// report() generates test output'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Test Runner Script"
            code={`// sass.test.js
const path = require('path');
const sass = require('sass');
const { runSass } = require('sass-true');

const sassFile = path.join(__dirname, 'test', 'test.scss');

runSass({ describe, it }, sassFile);`}
            output={[
              '✅ Test runner configured',
              '// Uses Mocha/Jest style describe/it'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="package.json Scripts"
            code={`{
  "scripts": {
    "test": "mocha sass.test.js",
    "test:watch": "mocha sass.test.js --watch"
  },
  "devDependencies": {
    "mocha": "^10.0.0",
    "sass": "^1.69.0",
    "sass-true": "^7.0.0"
  }
}`}
            output={[
              '// npm test → Run tests',
              '// npm run test:watch → Watch mode'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Run Tests"
            code={`# Run all tests
npm test`}
            output={[
              '',
              '  double()',
              '    ✓ doubles the input value',
              '    ✓ works with units',
              '',
              '  to-rem()',
              '    ✓ converts pixels to rem',
              '    ✓ handles fractional values',
              '',
              '  button-reset()',
              '    ✓ outputs button reset styles',
              '',
              '  flex-center()',
              '    ✓ outputs flexbox centering styles',
              '',
              '  6 passing (23ms)'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Assertion Types"
            description="Different test assertions"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">assert-equal</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test that two values are equal
              </p>
              <CodeSnippetWithOutput
                title="Example"
                code={`@include assert-equal(
  fn.double(5),
  10,
  'Expected double(5) to return 10'
);`}
                output={[
                  '✓ Values match'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">assert-unequal</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test that two values are NOT equal
              </p>
              <CodeSnippetWithOutput
                title="Example"
                code={`@include assert-unequal(
  fn.double(5),
  11,
  'Expected double(5) to NOT return 11'
);`}
                output={[
                  '✓ Values differ'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">assert (output/expect)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test mixin output CSS
              </p>
              <CodeSnippetWithOutput
                title="Example"
                code={`@include assert {
  @include output {
    @include mx.button-reset;
  }
  
  @include expect {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }
}`}
                output={[
                  '✓ CSS output matches'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Play className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="CI/CD Integration"
            description="Run tests in pipelines"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="GitHub Actions"
            code={`# .github/workflows/test.yml
name: Test Sass

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run Sass tests
        run: npm test`}
            output={[
              '✅ Tests run on every push',
              '✅ Blocks PRs if tests fail',
              '// Automated quality checks'
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
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Test All Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Every custom function should have tests
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Test Complex Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mixins with logic need output verification
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Test Edge Cases</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Zero values, negative numbers, null, etc.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Run Tests in CI/CD</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Automate testing in your build pipeline
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Descriptive Test Names</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Make test failures easy to understand
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Test Simple Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No need to test basic property assignments
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Testing Third-Party Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only test your own functions and mixins
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Test Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use assert-equal for function outputs
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Test Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use output/expect for CSS verification
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">True Framework</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Industry-standard Sass testing tool
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">CI/CD Ready</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Integrate with GitHub Actions, etc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
