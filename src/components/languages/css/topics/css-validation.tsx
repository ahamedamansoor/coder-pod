'use client';

import React from 'react';
import { CheckCircle, Sparkles, Target, Layers, Shield, Code } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssValidationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssValidation({ onOpenWebPlayground }: CssValidationProps) {
  
  return (
    <CssTopicLayout
      icon={CheckCircle}
      title="CSS Validation"
      description="Check and ensure your CSS is error-free and follows best practices"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Validation?",
        description: "The process of checking your CSS code for errors, warnings, and code quality issues",
        keyPoints: [
          "Catch syntax errors before they break your site",
          "Ensure CSS follows standards (W3C)",
          "Find deprecated properties",
          "Enforce code style consistency",
          "Improve code quality automatically",
          "Essential for professional development"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Validate CSS?">
        Invalid CSS can cause unexpected styling issues that are hard to debug. 
        <strong> Validation tools catch typos, syntax errors, and bad practices automatically</strong> - 
        like spell-check for your CSS! It's free, fast, and prevents hours of debugging.
      </InfoAlert>

      {/* Types of Validation */}
      <SectionCard
        title="Types of CSS Validation"
        description="Different ways to check your CSS"
        icon={Shield}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "✅ Syntax Validation",
              description: "Check for CSS errors",
              example: "Missing semicolons, wrong properties"
            },
            {
              title: "📏 Standards Compliance",
              description: "Follows W3C CSS specifications",
              example: "Valid CSS properties and values"
            },
            {
              title: "🎨 Code Quality",
              description: "Best practices and conventions",
              example: "Consistent formatting, no duplicates"
            },
            {
              title: "🔍 Linting",
              description: "Enforce style rules",
              example: "Indentation, naming, order"
            }
          ]}
        />
      </SectionCard>

      {/* W3C Validator */}
      <SectionCard
        title="1. W3C CSS Validator - Official Standard"
        description="The gold standard for CSS validation"
        icon={Shield}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">W3C CSS Validator</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Official validator from the World Wide Web Consortium (W3C). 
              Checks if your CSS follows official CSS specifications.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">🌐 Website:</p>
              <code className="text-sm bg-blue-100 dark:bg-blue-900 px-3 py-2 rounded">
                https://jigsaw.w3.org/css-validator/
              </code>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">3 Ways to Validate</h4>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>1. By URL:</strong> Enter your website URL</li>
                <li><strong>2. By File Upload:</strong> Upload your .css file</li>
                <li><strong>3. By Direct Input:</strong> Copy/paste CSS code</li>
              </ul>
            </div>

            <SyntaxBlock
              title="Valid CSS Example"
              code={`/* ✅ VALID CSS - No errors */
.button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.button:hover {
  background-color: #2563eb;
}

/* All properties are valid */
/* All values are correct */
/* Proper syntax throughout */`}
            />

            <SyntaxBlock
              title="Invalid CSS Example"
              code={`/* ❌ INVALID CSS - Has errors */
.button {
  background-color: #3b82f6;
  colour: white;              /* ❌ Wrong: should be 'color' */
  padding: 12px 24px
  border: none;               /* ❌ Missing semicolon above */
  border-radius: 6px;
  cursor: pointer;
  animation-delay: 0.5ss;     /* ❌ Wrong: should be '0.5s' */
}

.button:hover {
  background-colour: #2563eb; /* ❌ Wrong: should be 'background-color' */
}

/* W3C Validator will catch ALL these errors! */`}
            />
          </div>
        </div>
      </SectionCard>

      {/* Stylelint */}
      <SectionCard
        title="2. Stylelint - Modern CSS Linter"
        description="Powerful, modern CSS linting tool"
        icon={Code}
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">What is Stylelint?</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              A modern linter that helps you avoid errors and enforce conventions in your CSS. 
              Catches more issues than W3C validator and can auto-fix many problems!
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-purple-900/20 rounded-lg">
                <p className="font-semibold mb-1">✓ Catches 170+ errors</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Syntax, naming, values, more</p>
              </div>
              <div className="p-3 bg-white dark:bg-purple-900/20 rounded-lg">
                <p className="font-semibold mb-1">✓ Auto-fix support</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Fixes many issues automatically</p>
              </div>
            </div>
          </div>

          <SyntaxBlock
            title="Install Stylelint"
            code={`# Install Stylelint
npm install --save-dev stylelint stylelint-config-standard

# Create config file (.stylelintrc.json)
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "color-hex-length": "short",
    "selector-class-pattern": "^[a-z][a-z0-9-]*$"
  }
}`}
          />

          <SyntaxBlock
            title="Run Stylelint"
            code={`# Check all CSS files
npx stylelint "**/*.css"

# Auto-fix issues
npx stylelint "**/*.css" --fix

# Check specific file
npx stylelint styles.css`}
          />

          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">What Stylelint Catches</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold mb-2">Errors:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Invalid property names</li>
                  <li>Unknown units (pxx instead of px)</li>
                  <li>Duplicate properties</li>
                  <li>Invalid colors</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Style Issues:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Inconsistent indentation</li>
                  <li>Missing spaces</li>
                  <li>Wrong quote style</li>
                  <li>Property order</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* VS Code Integration */}
      <SectionCard
        title="3. VS Code - Built-in Validation"
        description="Validate as you type"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <InfoAlert type="tip" title="VS Code Has Built-in CSS Validation">
            Visual Studio Code automatically validates CSS and shows errors with red squiggly lines. 
            Hover over them to see what's wrong!
          </InfoAlert>

          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">Recommended VS Code Extensions</h4>
            
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Stylelint</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Integrates Stylelint into VS Code. Shows errors inline as you type.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  Extension ID: stylelint.vscode-stylelint
                </code>
              </div>

              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Prettier</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Auto-formats CSS on save. Keeps code consistent.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  Extension ID: esbenp.prettier-vscode
                </code>
              </div>

              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">CSS Peek</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Jump to CSS definition from HTML. Makes navigation easier.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  Extension ID: pranaygp.vscode-css-peek
                </code>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Common Validation Errors */}
      <SectionCard
        title="Common CSS Validation Errors"
        description="What validators find most often"
        icon={Target}
      >
        <div className="space-y-4">
          <div className="p-5 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Typos in Property Names</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">Wrong:</p>
                <code className="text-xs">colour: blue;</code><br/>
                <code className="text-xs">backgrund: red;</code><br/>
                <code className="text-xs">padding-botom: 10px;</code>
              </div>
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">Correct:</p>
                <code className="text-xs">color: blue;</code><br/>
                <code className="text-xs">background: red;</code><br/>
                <code className="text-xs">padding-bottom: 10px;</code>
              </div>
            </div>
          </div>

          <div className="p-5 border-2 border-orange-200 dark:border-orange-800 rounded-xl bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">❌ Missing Semicolons</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">Wrong:</p>
                <pre className="text-xs">{`.box {
  width: 100px
  height: 100px;
}`}</pre>
              </div>
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">Correct:</p>
                <pre className="text-xs">{`.box {
  width: 100px;
  height: 100px;
}`}</pre>
              </div>
            </div>
          </div>

          <div className="p-5 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl bg-yellow-50 dark:bg-yellow-950/20">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">❌ Invalid Values</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">Wrong:</p>
                <code className="text-xs">width: 100pxs;</code><br/>
                <code className="text-xs">color: #fff;</code> (should be 6 digits)<br/>
                <code className="text-xs">margin: 10 20;</code> (missing units)
              </div>
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">Correct:</p>
                <code className="text-xs">width: 100px;</code><br/>
                <code className="text-xs">color: #ffffff;</code><br/>
                <code className="text-xs">margin: 10px 20px;</code>
              </div>
            </div>
          </div>

          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">❌ Vendor Prefixes in Wrong Order</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">Wrong:</p>
                <pre className="text-xs">{`display: flex;
display: -webkit-flex;`}</pre>
              </div>
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">Correct:</p>
                <pre className="text-xs">{`display: -webkit-flex;
display: flex;`}</pre>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Benefits */}
      <SectionCard
        title="Benefits of CSS Validation"
        description="Why it matters"
        icon={CheckCircle}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Catch Errors Early</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Find typos and syntax errors before they cause problems. 
              Much faster than debugging in the browser!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Browser Compatibility</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Validators warn about properties that don't work in certain browsers. 
              Avoid surprises!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Code Quality</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Enforce consistent formatting and best practices. 
              Makes code easier to read and maintain!
            </p>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Learn Best Practices</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Validators explain why something is wrong. 
              You learn while you code!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Validate CSS"
        description="Essential scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Before Deployment"
            description="Always validate before going live"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="During Development"
            description="Use linters to catch errors as you type"
            icon={Code}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Team Projects"
            description="Enforce consistent code style"
            icon={Layers}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Legacy Code"
            description="Find issues in old CSS files"
            icon={Shield}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Validation Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Validate Regularly:</strong> Use W3C validator before deploying to production</li>
          <li><strong>Use a Linter:</strong> Set up Stylelint in your project for automatic checking</li>
          <li><strong>IDE Integration:</strong> Install VS Code extensions for real-time validation</li>
          <li><strong>Auto-fix:</strong> Use <code>--fix</code> flag with Stylelint to fix issues automatically</li>
          <li><strong>CI/CD Integration:</strong> Add validation to your build pipeline</li>
          <li><strong>Don't Ignore Warnings:</strong> They often indicate future problems</li>
          <li><strong>Keep Config Updated:</strong> Update linter rules as CSS standards evolve</li>
        </ul>
      </InfoAlert>

      {/* Tools Comparison */}
      <InfoAlert type="info" title="Validation Tools Comparison">
        <div className="mt-2 space-y-2">
          <p><strong>W3C Validator:</strong> Official standard, free, web-based, catches syntax errors</p>
          <p><strong>Stylelint:</strong> Modern, powerful, auto-fix, 170+ rules, integrates with editors</p>
          <p><strong>CSSLint:</strong> Older tool, still useful, focuses on code quality</p>
          <p><strong>Prettier:</strong> Not a validator, but formats CSS consistently</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
