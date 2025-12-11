'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Code, 
  CheckCircle2,
  Lightbulb,
  Info,
  FileCode,
  Settings,
  Zap,
  Terminal
} from 'lucide-react';

interface SassAPINewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassAPINew({ onOpenWebPlayground }: SassAPINewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Code}
        category="Sass/SCSS · Build Tools"
        title="JavaScript API"
        description="Use Sass programmatically with Node.js for custom build scripts and advanced workflows."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="JavaScript API"
            description="Programmatic SCSS compilation"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>Sass JavaScript API</strong> allows you to compile SCSS programmatically in Node.js, perfect for custom build scripts, plugins, and advanced automation workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Programmatic</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Compile from JavaScript code</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Flexible</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Custom importers & functions</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Powerful</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Full control over compilation</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Perfect for <strong>custom build tools</strong>, plugins, or when you need fine-grained control over the compilation process.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installation"
            description="Install Sass package"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install Sass"
            code={`# Install Sass package
npm install sass

# Or with pnpm
pnpm add sass`}
            output={[
              '✅ sass package installed',
              '// Provides JavaScript API'
            ]}
            language="scss"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Basic Compilation"
            description="Compile SCSS with JavaScript"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Compile String (Synchronous)"
            code={`const sass = require('sass');

// Compile SCSS string
const result = sass.compileString(\`
  $primary: #3b82f6;
  
  .button {
    background: $primary;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
  }
\`);

console.log(result.css);`}
            output={[
              '.button {',
              '  background: #3b82f6;',
              '  padding: 0.75rem 1.5rem;',
              '  border-radius: 0.5rem;',
              '}',
              '',
              '✅ SCSS compiled successfully'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Compile File (Synchronous)"
            code={`const sass = require('sass');

// Compile SCSS file
const result = sass.compile('src/scss/main.scss');

console.log(result.css);
// Write to file
const fs = require('fs');
fs.writeFileSync('dist/css/main.css', result.css);`}
            output={[
              '✅ main.scss compiled',
              '✅ Output written to dist/css/main.css'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Compile Async"
            code={`const sass = require('sass');

// Async compilation (recommended)
async function compileSass() {
  const result = await sass.compileAsync('src/scss/main.scss');
  console.log(result.css);
}

compileSass();`}
            output={[
              '✅ Async compilation complete',
              '// Better performance for large files'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Compilation Options"
            description="Customize output and behavior"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Output Style & Source Maps"
            code={`const sass = require('sass');

const result = sass.compile('src/scss/main.scss', {
  // Output style
  style: 'compressed',  // or 'expanded'
  
  // Source maps
  sourceMap: true,
  sourceMapIncludeSources: true,
  
  // Character set
  charset: true,
  
  // Alert colors
  alertColor: true,
  alertAscii: false
});

console.log(result.css);
console.log(result.sourceMap);  // Source map object`}
            output={[
              '✅ Compressed output',
              '✅ Source map generated',
              '// result.css - Compiled CSS',
              '// result.sourceMap - Source map'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Load Paths"
            code={`const sass = require('sass');

const result = sass.compile('src/scss/main.scss', {
  loadPaths: ['node_modules', 'lib'],
  
  // Now you can import from these paths
  // @use "bootstrap/scss/bootstrap";
});`}
            output={[
              '✅ Load paths configured',
              '// Can import from node_modules and lib'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Custom Functions"
            description="Add JavaScript functions to SCSS"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Define Custom Function"
            code={`const sass = require('sass');

const result = sass.compileString(\`
  .button {
    width: double(50px);
    height: square(5);
  }
\`, {
  functions: {
    // Custom function: double a value
    'double($value)': function(args) {
      const value = args[0].assertNumber('value');
      return new sass.SassNumber(value.value * 2, value.numeratorUnits);
    },
    
    // Custom function: square a number
    'square($n)': function(args) {
      const n = args[0].assertNumber('n');
      return new sass.SassNumber(n.value * n.value);
    }
  }
});

console.log(result.css);`}
            output={[
              '.button {',
              '  width: 100px;',
              '  height: 25;',
              '}',
              '',
              '✅ Custom functions work!'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="Advanced Custom Function"
            code={`const sass = require('sass');

const result = sass.compileString(\`
  $colors: get-theme-colors();
  
  .button {
    background: map-get($colors, 'primary');
  }
\`, {
  functions: {
    'get-theme-colors()': function() {
      // Return Sass map from JavaScript object
      return new sass.SassMap({
        'primary': new sass.SassColor({ red: 59, green: 130, blue: 246 }),
        'secondary': new sass.SassColor({ red: 147, green: 51, blue: 234 })
      });
    }
  }
});`}
            output={[
              '✅ Custom function returns Sass map',
              '// Can return colors, maps, lists, etc.'
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
            title="Custom Importers"
            description="Control how @import/@use works"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Custom Importer"
            code={`const sass = require('sass');
const fs = require('fs');

const result = sass.compile('src/scss/main.scss', {
  importers: [{
    // Custom importer for special URLs
    canonicalize(url) {
      // Transform import URLs
      if (url.startsWith('theme:')) {
        return new URL('file://themes/' + url.slice(6));
      }
      return null;  // Let default importer handle it
    },
    
    load(canonicalUrl) {
      // Load file content
      const contents = fs.readFileSync(canonicalUrl.pathname, 'utf8');
      return {
        contents: contents,
        syntax: 'scss'
      };
    }
  }]
});

// Now you can use:
// @use "theme:dark.scss";`}
            output={[
              '✅ Custom importer configured',
              '// theme: URLs handled specially'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="Package Importer (Node Modules)"
            code={`const sass = require('sass');

const result = sass.compile('src/scss/main.scss', {
  importers: [new sass.NodePackageImporter()]
});

// Now you can import npm packages easily:
// @use "pkg:bootstrap";
// Instead of: @use "../../node_modules/bootstrap/scss/bootstrap";`}
            output={[
              '✅ Node package importer enabled',
              '// Use pkg: prefix for npm packages'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Complete Build Script"
            description="Full production example"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="build.js (Production Script)"
            code={`const sass = require('sass');
const fs = require('fs');
const path = require('path');

async function buildCSS() {
  try {
    console.log('🔨 Compiling SCSS...');
    
    // Compile main SCSS file
    const result = await sass.compileAsync('src/scss/main.scss', {
      style: 'compressed',
      sourceMap: true,
      sourceMapIncludeSources: true,
      loadPaths: ['node_modules'],
      alertColor: true
    });
    
    // Ensure output directory exists
    const outputDir = 'dist/css';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write CSS file
    const cssPath = path.join(outputDir, 'main.css');
    fs.writeFileSync(cssPath, result.css);
    console.log(\`✅ CSS written to \${cssPath}\`);
    
    // Write source map
    if (result.sourceMap) {
      const mapPath = path.join(outputDir, 'main.css.map');
      fs.writeFileSync(mapPath, JSON.stringify(result.sourceMap));
      console.log(\`✅ Source map written to \${mapPath}\`);
    }
    
    // Log statistics
    const cssSize = (result.css.length / 1024).toFixed(2);
    console.log(\`📊 CSS size: \${cssSize} KB\`);
    
    console.log('✨ Build complete!');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    if (error.span) {
      console.error(\`   at line \${error.span.start.line + 1}, column \${error.span.start.column + 1}\`);
    }
    process.exit(1);
  }
}

// Run build
buildCSS();`}
            output={[
              '🔨 Compiling SCSS...',
              '✅ CSS written to dist/css/main.css',
              '✅ Source map written to dist/css/main.css.map',
              '📊 CSS size: 45.23 KB',
              '✨ Build complete!'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="Watch Mode Script"
            description="Auto-compile with API"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="watch.js"
            code={`const sass = require('sass');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

async function compile() {
  try {
    const result = await sass.compileAsync('src/scss/main.scss', {
      style: 'expanded',
      sourceMap: true,
      loadPaths: ['node_modules']
    });
    
    fs.writeFileSync('dist/css/main.css', result.css);
    console.log(\`✅ Compiled at \${new Date().toLocaleTimeString()}\`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Initial compile
compile();

// Watch for changes
const watcher = chokidar.watch('src/scss/**/*.scss', {
  ignoreInitial: true
});

watcher.on('change', (filePath) => {
  console.log(\`📝 Changed: \${filePath}\`);
  compile();
});

console.log('👀 Watching for changes... (Ctrl+C to stop)');`}
            output={[
              '✅ Compiled at 9:45:23 PM',
              '👀 Watching for changes... (Ctrl+C to stop)',
              '',
              '// Edit SCSS file...',
              '📝 Changed: src/scss/main.scss',
              '✅ Compiled at 9:45:28 PM'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Install chokidar"
            code={`# Install file watcher
npm install --save-dev chokidar`}
            output={[
              '✅ chokidar installed',
              '// Fast file watching library'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Error Handling"
            description="Handle compilation errors"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Proper Error Handling"
            code={`const sass = require('sass');

try {
  const result = sass.compile('src/scss/main.scss');
  console.log('✅ Compiled successfully');
} catch (error) {
  console.error('❌ SCSS Compilation Error:');
  console.error('Message:', error.message);
  
  // Line and column info
  if (error.span) {
    console.error(\`Location: Line \${error.span.start.line + 1}, Column \${error.span.start.column + 1}\`);
    console.error(\`File: \${error.span.url}\`);
  }
  
  // Full formatted error
  console.error('\\nFormatted:', error.toString());
}`}
            output={[
              '❌ SCSS Compilation Error:',
              'Message: Undefined variable $unknown',
              'Location: Line 5, Column 15',
              'File: file:///src/scss/main.scss',
              '',
              'Formatted: Error: Undefined variable $unknown',
              '  ╷',
              '5 │   color: $unknown;',
              '  │          ^^^^^^^^',
              '  ╵'
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
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Async Methods</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">compileAsync()</code> for better performance
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Handle Errors Properly</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always wrap in try-catch and log useful error info
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">sourceMap: true</code> for debugging
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Load Paths</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Configure load paths for cleaner imports
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Cache Compilation Results</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only recompile changed files in watch mode
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Use Sync Methods for Large Files</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">compile()</code> blocks the event loop
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Custom Importers Unless Needed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use load paths first, custom importers only if necessary
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Programmatic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compile SCSS with JavaScript code
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Custom Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add JavaScript functions to SCSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Custom Importers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Control @import/@use behavior
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Full Control</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for custom build scripts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
