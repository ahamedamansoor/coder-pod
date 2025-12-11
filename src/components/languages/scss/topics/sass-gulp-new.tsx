'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Droplet, 
  CheckCircle2,
  Lightbulb,
  Info,
  Settings,
  Play,
  FileCode,
  Terminal
} from 'lucide-react';

interface SassGulpNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassGulpNew({ onOpenWebPlayground }: SassGulpNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Droplet}
        category="Sass/SCSS · Build Tools"
        title="Gulp Integration"
        description="Automate SCSS compilation with Gulp task runner using gulp-sass for watch tasks and build workflows."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Droplet className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Gulp Integration"
            description="Task-based build automation"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Gulp</strong> is a task runner that automates repetitive tasks like SCSS compilation, minification, and browser reloading. Use <strong>gulp-sass</strong> to compile SCSS files with powerful watch and build workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Task-Based</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Define tasks for different operations</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Streaming</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">File streams for fast processing</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Plugin Ecosystem</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">1000+ plugins available</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Gulp?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Gulp provides fine-grained control over build tasks with <strong>composable streams</strong> and a huge plugin ecosystem for SCSS, PostCSS, minification, and more.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installation"
            description="Install Gulp and plugins"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install Gulp CLI (Global)"
            code={`# Install Gulp CLI globally (one-time)
npm install --global gulp-cli

# Verify installation
gulp --version`}
            output={[
              '✅ Gulp CLI installed globally',
              'CLI version: 2.3.0'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Install Gulp and Plugins"
            code={`# Install Gulp and SCSS plugins
npm install --save-dev gulp gulp-sass sass

# Optional: Install additional plugins
npm install --save-dev gulp-sourcemaps gulp-autoprefixer gulp-cssnano gulp-rename`}
            output={[
              '✅ gulp - Task runner',
              '✅ gulp-sass - SCSS compiler',
              '✅ sass - Dart Sass compiler',
              '✅ gulp-sourcemaps - Source maps',
              '✅ gulp-autoprefixer - Vendor prefixes',
              '✅ gulp-cssnano - CSS minification',
              '✅ gulp-rename - Rename files'
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
            title="Basic Gulpfile"
            description="Create gulpfile.js"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="gulpfile.js (Basic)"
            code={`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS to CSS
function compileSass() {
  return gulp.src('src/scss/**/*.scss')  // Source files
    .pipe(sass().on('error', sass.logError))  // Compile
    .pipe(gulp.dest('dist/css'));  // Output folder
}

// Export task
exports.sass = compileSass;
exports.default = compileSass;`}
            output={[
              '✅ Basic Gulp task created',
              '// Run with: gulp or gulp sass'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Run Gulp Task"
            code={`# Run default task
gulp

# Run specific task
gulp sass`}
            output={[
              '[12:30:45] Starting \'sass\'...',
              '[12:30:45] Finished \'sass\' after 234 ms',
              '✅ SCSS compiled to CSS'
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
            title="Watch Task"
            description="Auto-compile on file changes"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Watch Task"
            code={`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS
function compileSass() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

// Watch for changes
function watchFiles() {
  gulp.watch('src/scss/**/*.scss', compileSass);
}

// Export tasks
exports.sass = compileSass;
exports.watch = watchFiles;
exports.default = gulp.series(compileSass, watchFiles);`}
            output={[
              '✅ Watch task configured',
              '// Watches SCSS files and auto-compiles on change'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="Run Watch Mode"
            code={`# Start watch mode
gulp watch

# Or run default task (compile + watch)
gulp`}
            output={[
              '[12:30:45] Starting \'watch\'...',
              '[12:30:45] Watching files...',
              'Watching src/scss/**/*.scss',
              '// Edit SCSS file → auto-compiles!'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Play className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Advanced Gulpfile"
            description="Source maps, autoprefixer, minification"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="gulpfile.js (Production-Ready)"
            code={`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

// Paths
const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  }
};

// Development build (with source maps)
function sassDev() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest));
}

// Production build (minified, no source maps)
function sassProd() {
  return gulp.src(paths.scss.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scss.dest));
}

// Watch task
function watchFiles() {
  gulp.watch(paths.scss.src, sassDev);
}

// Export tasks
exports.dev = gulp.series(sassDev, watchFiles);
exports.build = sassProd;
exports.default = exports.dev;`}
            output={[
              '✅ Development build with source maps',
              '✅ Production build minified',
              '✅ Autoprefixer enabled',
              '✅ Watch task configured',
              '// gulp dev → Development mode',
              '// gulp build → Production build'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Gulp Plugins"
            description="Essential plugins for SCSS workflow"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">gulp-sass</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Compile SCSS to CSS using Dart Sass
              </p>
              <code className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                .pipe(sass(&#123; outputStyle: 'compressed' &#125;))
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">gulp-sourcemaps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Generate source maps for debugging
              </p>
              <code className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
                .pipe(sourcemaps.init()) ... .pipe(sourcemaps.write('.'))
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">gulp-autoprefixer</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Add vendor prefixes automatically
              </p>
              <code className="text-xs bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                .pipe(autoprefixer())
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">gulp-cssnano</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Minify CSS for production
              </p>
              <code className="text-xs bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">
                .pipe(cssnano())
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">gulp-rename</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Rename files (e.g., add .min suffix)
              </p>
              <code className="text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                .pipe(rename(&#123; suffix: '.min' &#125;))
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-teal-500">
              <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">gulp-if</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Conditional pipeline operations
              </p>
              <code className="text-xs bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded">
                .pipe(gulpif(isProd, cssnano()))
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Browser Sync Integration"
            description="Auto-reload browser on changes"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install Browser Sync"
            code={`# Install browser-sync
npm install --save-dev browser-sync`}
            output={[
              '✅ browser-sync installed',
              '// Live reload on file changes'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="gulpfile.js with Browser Sync"
            code={`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile SCSS
function compileSass() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());  // Inject CSS without reload
}

// Start dev server
function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  });
  
  // Watch files
  gulp.watch('src/scss/**/*.scss', compileSass);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

exports.sass = compileSass;
exports.serve = gulp.series(compileSass, serve);
exports.default = exports.serve;`}
            output={[
              '✅ Browser Sync configured',
              '✅ SCSS → CSS injection (no reload)',
              '✅ HTML/JS → full page reload',
              '// gulp serve → Start dev server'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
            <h4 className="text-cyan-400 mb-3">Terminal Output</h4>
            <pre className="text-sm overflow-x-auto"><code>{`[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.10:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.10:3001
 -------------------------------------
[Browsersync] Serving files from: ./`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="Package.json Scripts"
            description="NPM scripts for Gulp tasks"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="package.json"
            code={`{
  "name": "my-gulp-project",
  "scripts": {
    "dev": "gulp serve",
    "build": "gulp build",
    "sass": "gulp sass",
    "watch": "gulp watch"
  },
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-sass": "^5.1.0",
    "sass": "^1.69.0",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-cssnano": "^2.1.3",
    "gulp-rename": "^2.0.0",
    "browser-sync": "^2.29.3"
  }
}`}
            output={[
              '// npm run dev → Start dev server',
              '// npm run build → Production build',
              '// npm run sass → Compile SCSS once',
              '// npm run watch → Watch mode'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Complete Production Gulpfile"
            description="Full workflow example"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="gulpfile.js (Complete)"
            code={`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();

// Environment
const isProd = process.env.NODE_ENV === 'production';

// Paths
const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  html: '*.html',
  js: 'src/js/**/*.js'
};

// SCSS task
function compileSass() {
  return gulp.src(paths.scss.src)
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass({
      outputStyle: isProd ? 'compressed' : 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(isProd, cssnano()))
    .pipe(gulpif(isProd, rename({ suffix: '.min' })))
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// Browser Sync
function serve() {
  browserSync.init({
    server: { baseDir: './' },
    port: 3000,
    notify: false
  });
  
  gulp.watch(paths.scss.src, compileSass);
  gulp.watch(paths.html).on('change', browserSync.reload);
  gulp.watch(paths.js).on('change', browserSync.reload);
}

// Clean task (optional)
function clean() {
  const del = require('del');
  return del(['dist/css']);
}

// Build task
const build = gulp.series(clean, compileSass);

// Default task
const defaultTask = gulp.series(compileSass, serve);

// Exports
exports.sass = compileSass;
exports.clean = clean;
exports.build = build;
exports.serve = defaultTask;
exports.default = defaultTask;`}
            output={[
              '✅ Environment-based builds',
              '✅ Conditional source maps',
              '✅ Autoprefixer + minification',
              '✅ Browser Sync integration',
              '✅ Clean task',
              '// NODE_ENV=production gulp build → Production',
              '// gulp serve → Development with live reload'
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
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Error Handling</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">.on('error', sass.logError)</code> prevents watch from breaking
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Separate Dev/Prod Tasks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Different configurations for development and production
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use gulp-if for Conditionals</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Conditional pipeline operations based on environment
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Source Maps in Dev</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Debug SCSS files in DevTools during development
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Browser Sync Stream</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">.pipe(browserSync.stream())</code> for CSS injection without reload
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Use Deprecated gulp-sass Options</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use Dart Sass, not deprecated node-sass
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Forget gulp.series/parallel</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Properly compose tasks with series or parallel
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Task Runner</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Automate repetitive build tasks
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Streaming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fast file processing with streams
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Watch Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-compile on file changes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Plugin Ecosystem</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                1000+ plugins for any task
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
