'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Users, 
  CheckCircle2,
  Lightbulb,
  Info,
  Code,
  FileText,
  GitBranch
} from 'lucide-react';

interface SassTeamWorkflowsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassTeamWorkflowsNew({ onOpenWebPlayground }: SassTeamWorkflowsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Users}
        category="Sass/SCSS · Best Practices"
        title="Team Workflows"
        description="Collaborate effectively on Sass projects with code reviews, style guides, and team conventions."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Users className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Team Workflows"
            description="Collaborate on Sass codebases"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Working with a team requires <strong>clear conventions</strong>, <strong>code reviews</strong>, and <strong>style guides</strong>. Good team workflows ensure consistent, maintainable code across your entire project!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Style Guide</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Shared standards</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Code Reviews</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Quality control</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Conventions</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Consistent patterns</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Create a Style Guide"
            description="Document your conventions"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="SASS_STYLE_GUIDE.md"
            code={`# Sass Style Guide

## Naming Conventions

### Variables
- Use kebab-case: $primary-color, $spacing-lg
- Prefix with category: $color-primary, $font-size-base
- Use semantic names: $error-red (not $red-500)

### Mixins
- Use verb-noun format: @mixin flex-center, @mixin hide-text
- Document parameters clearly

### Functions
- Use clear, descriptive names: to-rem(), strip-unit()

## File Organization

- Use 7-1 pattern
- One component per file
- Index files for directories

## Nesting Rules

- Maximum 3 levels deep
- Use BEM for flat selectors
- Only nest pseudo-classes and states

## Code Reviews

- Check for hardcoded values
- Verify consistent naming
- Look for repeated code
- Test compiled output

## Tools

- Stylelint for linting
- Prettier for formatting
- Sass-migrator for updates`}
            output={[
              '✅ Clear guidelines',
              '✅ Easy to follow',
              '✅ Living document'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Keep It Updated</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Your style guide should <strong>evolve with your project</strong>. Review and update it regularly!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Code Review Checklist"
            description="What to look for"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">✅ Naming Conventions</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Variables follow naming pattern?</li>
                <li>• Semantic names used?</li>
                <li>• BEM methodology followed?</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">✅ Code Quality</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• No hardcoded values?</li>
                <li>• Variables defined in correct file?</li>
                <li>• Nesting depth &lt; 3 levels?</li>
                <li>• No repeated code?</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Module System</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Using @use instead of @import?</li>
                <li>• Proper namespacing?</li>
                <li>• No global pollution?</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">✅ Performance</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Compiled CSS size reasonable?</li>
                <li>• No excessive loops?</li>
                <li>• Selector specificity low?</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-teal-500">
              <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">✅ Documentation</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Complex logic explained?</li>
                <li>• SassDoc comments for public APIs?</li>
                <li>• README updated if needed?</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Naming Conventions"
            description="Consistent naming across team"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Variables Naming"
            code={`// ✅ Good: Semantic, categorized
$color-primary: #3b82f6;
$color-secondary: #8b5cf6;
$color-error: #ef4444;
$color-success: #10b981;

$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;

// ❌ Bad: Generic, unclear
$blue: #3b82f6;
$small: 8px;
$big: 24px;`}
            output={[
              '✅ Clear purpose',
              '✅ Easy to search',
              '✅ Consistent pattern'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Mixins Naming"
            code={`// ✅ Good: Verb-noun, descriptive
@mixin flex-center { ... }
@mixin hide-text { ... }
@mixin truncate-text($lines: 1) { ... }
@mixin respond-above($breakpoint) { ... }

// ❌ Bad: Unclear purpose
@mixin center { ... }
@mixin hidden { ... }
@mixin ellipsis { ... }`}
            output={[
              '✅ Action is clear',
              '✅ Purpose obvious'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="BEM with Sass"
            code={`.card {
  &__header { ... }
  &__body { ... }
  &__footer { ... }
  
  &--large { ... }
  &--featured { ... }
  
  &__button {
    &--primary { ... }
    &--secondary { ... }
  }
}`}
            output={[
              '// Compiles to:',
              '.card__header',
              '.card__body',
              '.card--large',
              '.card__button--primary'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Git Workflow"
            description="Version control best practices"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Branch Strategy</h4>
              <CodeSnippetWithOutput
                title="Feature Branches"
                code={`# Create feature branch
git checkout -b feature/button-styles

# Make changes to Sass files
# ... edit _buttons.scss

# Commit with clear message
git commit -m "Add primary button styles"

# Push and create PR
git push origin feature/button-styles`}
                output={[
                  '✅ Clear branch names',
                  '✅ Descriptive commits',
                  '✅ Ready for review'
                ]}
                language="scss"
                colorTheme="orange"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Commit Messages</h4>
              <CodeSnippetWithOutput
                title="Good Commit Messages"
                code={`# ✅ Good: Clear and specific
git commit -m "Add responsive mixins for mobile breakpoints"
git commit -m "Refactor button component to use BEM"
git commit -m "Fix: Correct color contrast in dark mode"
git commit -m "Update: Migrate from @import to @use"

# ❌ Bad: Vague
git commit -m "Update styles"
git commit -m "Fix bug"
git commit -m "WIP"`}
                output={[
                  '✅ Descriptive',
                  '✅ Searchable history',
                  '✅ Easy to review'
                ]}
                language="scss"
                colorTheme="orange"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Commit Compiled CSS?</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Generally, <strong>only commit source .scss files</strong>, not compiled CSS. Add compiled files to <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">.gitignore</code>.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Automated Tools"
            description="Enforce standards automatically"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Stylelint Configuration"
              code={`// .stylelintrc.json
{
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "max-nesting-depth": 3,
    "selector-max-compound-selectors": 3,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "color-hex-length": "short",
    "declaration-block-no-redundant-longhand-properties": true
  }
}`}
              output={[
                '✅ Enforces max nesting',
                '✅ Consistent formatting',
                '✅ Catches errors'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="Pre-commit Hook"
              code={`// package.json
{
  "scripts": {
    "lint:scss": "stylelint 'src/**/*.scss'",
    "format": "prettier --write 'src/**/*.scss'"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.scss": [
      "stylelint --fix",
      "prettier --write"
    ]
  }
}`}
              output={[
                '✅ Auto-format on commit',
                '✅ Catch errors before push',
                '✅ Consistent code style'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Onboarding New Team Members"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Share Style Guide</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    First thing: read the style guide
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Explain File Structure</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Walk through the organization
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Setup Tools</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Install Stylelint, Prettier, extensions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Start Small</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    First PR: small, guided change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Document Everything</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Style guide, conventions, decisions
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Automate Checks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Stylelint, Prettier, pre-commit hooks
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Review Together</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Code reviews improve quality
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Keep Learning</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Share knowledge, improve together
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
