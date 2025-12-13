'use client';

import React from 'react';
import { Settings, Sparkles, Target, Layers, CheckCircle, Zap } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface PostCSSProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function PostCSS({ onOpenWebPlayground }: PostCSSProps) {
  
  return (
    <CssTopicLayout
      icon={Settings}
      title="PostCSS"
      description="Transform and enhance your CSS with JavaScript plugins"
      category="CSS Tools & Workflow"
      whatIsIt={{
        title: "What is PostCSS?",
        description: "A tool that transforms CSS using JavaScript plugins - like Babel for CSS",
        keyPoints: [
          "Not a preprocessor - it's a CSS transformer",
          "Uses plugins to add features to CSS",
          "Autoprefixer, minification, and more",
          "Works with regular CSS",
          "Used by major frameworks (Tailwind, Bootstrap)",
          "Faster and more flexible than Sass/Less"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="PostCSS in Simple Terms">
        Think of PostCSS as a factory assembly line for CSS. You write regular CSS, 
        and PostCSS plugins process it to add features, optimize it, and make it better. 
        <strong> Each plugin does one job well</strong> - add vendor prefixes, minify, convert future CSS to current CSS, etc.
      </InfoAlert>

      {/* PostCSS vs Others */}
      <SectionCard
        title="PostCSS vs Preprocessors"
        description="How is it different?"
        icon={Target}
        variant="primary"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Preprocessors (Sass/Less)</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Write in Sass/Less syntax</li>
              <li>• Fixed set of features</li>
              <li>• Need to learn new syntax</li>
              <li>• All-in-one solution</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">PostCSS</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Write regular CSS</li>
              <li>• Choose plugins you need</li>
              <li>• Works with standard CSS</li>
              <li>• Modular approach</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            💡 <strong>Key Difference:</strong> Sass/Less add features with new syntax. 
            PostCSS adds features to regular CSS using plugins. You can even use them together!
          </p>
        </div>
      </SectionCard>

      {/* How It Works */}
      <SectionCard
        title="How PostCSS Works"
        description="The transformation process"
        icon={Zap}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "1️⃣ Input CSS",
              description: "You write regular CSS",
              example: ".box { display: flex; }"
            },
            {
              title: "2️⃣ Parse",
              description: "PostCSS reads the CSS",
              example: "Converts to JavaScript AST"
            },
            {
              title: "3️⃣ Transform",
              description: "Plugins modify the CSS",
              example: "Autoprefixer adds prefixes"
            },
            {
              title: "4️⃣ Output",
              description: "Final CSS is generated",
              example: ".box { display: -webkit-flex; }"
            }
          ]}
        />

        <div className="mt-6">
          <SyntaxBlock
            title="PostCSS Workflow"
            code={`/* INPUT: Your CSS */
.box {
  display: flex;
  user-select: none;
}

/* ⬇️ PostCSS processes with plugins ⬇️ */

/* OUTPUT: Enhanced CSS */
.box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}`}
          />
        </div>
      </SectionCard>

      {/* Popular Plugins */}
      <SectionCard
        title="Popular PostCSS Plugins"
        description="Essential plugins you should know"
        icon={Layers}
      >
        <div className="space-y-4">
          <div className="p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Autoprefixer</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Automatically adds vendor prefixes for browser compatibility
            </p>
            <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              display: flex → display: -webkit-flex; display: flex;
            </code>
          </div>

          <div className="p-5 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">cssnano</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Minifies CSS for production (removes whitespace, optimizes)
            </p>
            <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
              Reduces file size by 50-70%
            </code>
          </div>

          <div className="p-5 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">postcss-preset-env</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Use future CSS features today (like Babel for CSS)
            </p>
            <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
              Custom properties, nesting, modern color functions
            </code>
          </div>

          <div className="p-5 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">postcss-nested</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Write nested CSS like Sass, but in regular CSS
            </p>
            <code className="text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">
              .card &#123; .title &#123; &#125; &#125;
            </code>
          </div>

          <div className="p-5 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">postcss-import</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Inline @import rules for better performance
            </p>
            <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded">
              Combines multiple CSS files into one
            </code>
          </div>
        </div>
      </SectionCard>

      {/* Setup */}
      <SectionCard
        title="Setting Up PostCSS"
        description="How to get started"
        icon={Settings}
        variant="primary"
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Step 1: Install PostCSS"
            code={`# Install PostCSS and plugins
npm install -D postcss postcss-cli autoprefixer

# Or with a config preset
npm install -D postcss postcss-preset-env`}
          />

          <SyntaxBlock
            title="Step 2: Create postcss.config.js"
            code={`// postcss.config.js
module.exports = {
  plugins: [
    // Add vendor prefixes
    require('autoprefixer'),
    
    // Use future CSS features
    require('postcss-preset-env')({
      stage: 2, // Which CSS features to polyfill
      features: {
        'nesting-rules': true
      }
    }),
    
    // Minify for production
    process.env.NODE_ENV === 'production' ? require('cssnano') : null,
  ].filter(Boolean)
};`}
          />

          <SyntaxBlock
            title="Step 3: Use with Build Tools"
            code={`// With Vite (built-in support)
// Just create postcss.config.js, Vite will use it automatically!

// With Webpack
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
};

// With Next.js (built-in)
// Just create postcss.config.js, Next.js will use it!`}
          />
        </div>
      </SectionCard>

      {/* Examples */}
      <SectionCard
        title="PostCSS Transformations"
        description="See plugins in action"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Example 1: Autoprefixer"
            code={`/* INPUT: Modern CSS */
.box {
  display: flex;
  user-select: none;
  backdrop-filter: blur(10px);
}

/* OUTPUT: With vendor prefixes */
.box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
}`}
          />

          <SyntaxBlock
            title="Example 2: postcss-nested"
            code={`/* INPUT: Nested CSS (Sass-like) */
.card {
  padding: 20px;
  
  .card-title {
    font-size: 20px;
    
    &:hover {
      color: blue;
    }
  }
}

/* OUTPUT: Flat CSS */
.card {
  padding: 20px;
}

.card .card-title {
  font-size: 20px;
}

.card .card-title:hover {
  color: blue;
}`}
          />

          <SyntaxBlock
            title="Example 3: postcss-preset-env (Future CSS)"
            code={`/* INPUT: Future CSS features */
:root {
  --primary: #3b82f6;
}

.button {
  background: var(--primary);
  
  /* Nesting (future CSS) */
  &:hover {
    background: color-mod(var(--primary) alpha(90%));
  }
  
  /* Custom media queries */
  @media (--tablet) {
    padding: 16px;
  }
}

/* OUTPUT: Current CSS */
:root {
  --primary: #3b82f6;
}

.button {
  background: var(--primary);
}

.button:hover {
  background: rgba(59, 130, 246, 0.9);
}

@media (min-width: 768px) {
  .button {
    padding: 16px;
  }
}`}
          />
        </div>
      </SectionCard>

      {/* Practical Example */}
      <SectionCard
        title="Complete PostCSS Setup"
        description="Real-world configuration"
        icon={Target}
        variant="primary"
      >
        <SyntaxBlock
          title="Production-Ready postcss.config.js"
          code={`// postcss.config.js
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    // 1. Import CSS files
    require('postcss-import'),
    
    // 2. Enable nesting
    require('postcss-nested'),
    
    // 3. Use future CSS features
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
      },
      autoprefixer: {
        grid: true // Enable IE grid support
      }
    }),
    
    // 4. Add vendor prefixes (included in preset-env)
    // Autoprefixer is already in postcss-preset-env
    
    // 5. Minify for production only
    isProduction && require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
      }]
    }),
    
    // 6. Remove unused CSS (optional)
    isProduction && require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[\\w-/:]+(?<!:)/g) || []
    })
  ].filter(Boolean)
};`}
        />
      </SectionCard>

      {/* Benefits */}
      <SectionCard
        title="Why Use PostCSS?"
        description="Key advantages"
        icon={CheckCircle}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Advantages</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Write regular CSS</li>
              <li>✓ Choose only plugins you need</li>
              <li>✓ Fast processing (3x faster than Sass)</li>
              <li>✓ Use future CSS features today</li>
              <li>✓ Works with any build tool</li>
              <li>✓ Large plugin ecosystem (200+)</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-amber-200 dark:border-amber-800 rounded-xl bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ Considerations</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>⚠ Need to configure plugins</li>
              <li>⚠ Learning curve for setup</li>
              <li>⚠ Plugin compatibility to check</li>
              <li>⚠ Build step required</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use PostCSS"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Modern Frameworks"
            description="Tailwind, Next.js use PostCSS by default"
            icon={Sparkles}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Cross-Browser"
            description="Autoprefixer for vendor prefixes"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Future CSS"
            description="Use upcoming CSS features now"
            icon={Zap}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Optimization"
            description="Minify and optimize for production"
            icon={Target}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="PostCSS Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Start Simple:</strong> Begin with Autoprefixer and cssnano only</li>
          <li><strong>Use Preset Env:</strong> postcss-preset-env gives you most features you need</li>
          <li><strong>Only Load in Production:</strong> Only minify/purge CSS in production builds</li>
          <li><strong>Check Browser Support:</strong> Configure Autoprefixer for your target browsers</li>
          <li><strong>Keep Config Clean:</strong> Document why you're using each plugin</li>
          <li><strong>Test Build Output:</strong> Verify plugins work correctly together</li>
        </ul>
      </InfoAlert>

      {/* Popular Stacks */}
      <InfoAlert type="info" title="PostCSS in Popular Tools">
        <div className="mt-2 space-y-2">
          <p><strong>Tailwind CSS:</strong> Uses PostCSS for processing utility classes</p>
          <p><strong>Next.js:</strong> Built-in PostCSS support with zero config</p>
          <p><strong>Vite:</strong> Native PostCSS support, just add config file</p>
          <p><strong>Create React App:</strong> PostCSS included, can customize</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
