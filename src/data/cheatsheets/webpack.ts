import { Package } from 'lucide-react';

export const webpackCheatsheet = {
  id: 'webpack',
  name: 'Webpack',
  description: 'Bundler configuration, loaders, plugins, and optimization (v5)',
  icon: Package,
  colorTheme: 'indigo' as const,
  sections: [
    {
      title: 'Setup & Scripts',
      commands: [
        {
          command: 'Install',
          description: 'Add webpack, CLI, dev server',
          usage: 'npm i -D webpack webpack-cli webpack-dev-server',
          example: '"scripts": { "dev": "webpack serve --mode development", "build": "webpack --mode production" }',
        },
        {
          command: 'Config entry',
          description: 'Basic `webpack.config.js`',
          usage: 'module.exports = {\n  entry: "./src/index.ts",\n  output: { filename: "bundle.[contenthash].js", path: path.resolve(__dirname, "dist"), clean: true },\n  mode: process.env.NODE_ENV || "development",\n};',
          example: 'devtool: "source-map",\nresolve: { extensions: [".ts", ".tsx", ".js"] },',
        },
        {
          command: 'Multiple configs',
          description: 'Export array or function by env',
          usage: 'module.exports = (env) => [clientConfig(env), serverConfig(env)];',
          example: 'webpack --env production --config webpack.config.js',
        },
      ],
    },
    {
      title: 'Loaders (JS/TS/CSS/Assets)',
      commands: [
        {
          command: 'TypeScript/Babel',
          description: 'Transpile modern JS/TS',
          usage: '{ test: /\\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }\n// or\n{ test: /\\.m?js$/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } } }',
          example: 'targets: "defaults, not IE 11"; cacheDirectory: true',
        },
        {
          command: 'Styles',
          description: 'Handle CSS/SCSS with modules',
          usage: '{ test: /\\.s?css$/, use: ["style-loader", { loader: "css-loader", options: { modules: true } }, "sass-loader"] }',
          example: 'MiniCssExtractPlugin.loader instead of style-loader for prod',
        },
        {
          command: 'Assets (built-in asset modules)',
          description: 'Inline small assets, emit larger ones',
          usage: '{ test: /\\.(png|jpe?g|gif|svg)$/i, type: "asset", parser: { dataUrlCondition: { maxSize: 8 * 1024 } } }',
          example: '{ test: /\\.(woff2?|eot|ttf|otf)$/i, type: "asset/resource" }',
        },
        {
          command: 'JSON/Raw',
          description: 'Import data or text',
          usage: '{ test: /\\.ya?ml$/, type: "json", parser: { parse: yaml.parse } }\n{ test: /\\.txt$/, type: "asset/source" }',
          example: 'import content from "./file.txt";',
        },
      ],
    },
    {
      title: 'Plugins & Assets',
      commands: [
        {
          command: 'HTML template',
          description: 'Generate index.html',
          usage: 'new HtmlWebpackPlugin({ template: "public/index.html", inject: "body" })',
          example: 'minify: process.env.NODE_ENV === "production"',
        },
        {
          command: 'Define globals',
          description: 'Inline env vars at build time',
          usage: 'new webpack.DefinePlugin({ "process.env.API_URL": JSON.stringify(process.env.API_URL) })',
          example: 'replace __VERSION__ with package version',
        },
        {
          command: 'CSS extraction',
          description: 'Split CSS from JS',
          usage: 'new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })',
          example: 'Use MiniCssExtractPlugin.loader in CSS rules for production',
        },
        {
          command: 'Copy/static assets',
          description: 'Copy public assets',
          usage: 'new CopyPlugin({ patterns: [{ from: "public", to: "." }] })',
          example: 'ignore: ["index.html"] when also using HtmlWebpackPlugin',
        },
      ],
    },
    {
      title: 'Dev Server & HMR',
      commands: [
        {
          command: 'Basic server',
          description: 'Serve with hot reload',
          usage: 'devServer: { port: 3000, hot: true, open: true, historyApiFallback: true, static: "./public" }',
          example: 'proxy: { "/api": { target: "http://localhost:5000", changeOrigin: true } }',
        },
        {
          command: 'Fast rebuilds',
          description: 'Enable cache and parallelism',
          usage: 'cache: { type: "filesystem" },\nexperiments: { incremental: true },\nthread-loader or esbuild-loader for speed',
          example: 'snapshot.managedPaths = [/^(.+?[\\\\/]node_modules[\\\\/])/];',
        },
        {
          command: 'Source maps',
          description: 'Choose map type per mode',
          usage: 'devtool: process.env.NODE_ENV === "production" ? "source-map" : "cheap-module-source-map"',
          example: 'Avoid eval-source-map in production',
        },
      ],
    },
    {
      title: 'Optimization & Caching',
      commands: [
        {
          command: 'Split chunks',
          description: 'Vendor/code splitting',
          usage: 'optimization: {\n  splitChunks: { chunks: "all", cacheGroups: { vendor: { test: /[\\\\/]node_modules[\\\\/]/, name: "vendors", chunks: "all" } } },\n  runtimeChunk: "single",\n}',
          example: 'name modules: optimization.moduleIds = "deterministic";',
        },
        {
          command: 'Tree shaking',
          description: 'Remove unused ESM exports',
          usage: 'mode: "production",\noptimization: { usedExports: true },\npackage.json: { "sideEffects": false } // or array of safe files',
          example: 'Mark CSS imports as sideEffects: ["*.css"]',
        },
        {
          command: 'Minification',
          description: 'Terser & CSS minimizer',
          usage: 'optimization: { minimizer: [ new TerserPlugin({ extractComments: false }), new CssMinimizerPlugin() ] }',
          example: 'Keep class names with terser options: terserOptions: { keep_classnames: true, keep_fnames: true }',
        },
        {
          command: 'Long-term caching',
          description: 'Stable content hashes',
          usage: 'output: { filename: "[name].[contenthash].js", chunkFilename: "[name].[contenthash].js" }',
          example: 'Clean old assets automatically with output.clean: true',
        },
      ],
    },
    {
      title: 'Module Federation & Advanced',
      commands: [
        {
          command: 'Module Federation',
          description: 'Expose/consume remote modules',
          usage: 'new ModuleFederationPlugin({\n  name: "app",\n  filename: "remoteEntry.js",\n  exposes: { "./Button": "./src/Button" },\n  remotes: { shell: "shell@http://localhost:3000/remoteEntry.js" },\n  shared: { react: { singleton: true, requiredVersion: deps.react } }\n})',
          example: 'Ensure shared deps are singleton to avoid duplicates',
        },
        {
          command: 'Externals',
          description: 'Skip bundling globals (CDN)',
          usage: 'externals: { vue: "Vue", react: "React", "react-dom": "ReactDOM" }',
          example: '<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>',
        },
        {
          command: 'Bundle analysis',
          description: 'Inspect sizes & duplication',
          usage: 'npm i -D webpack-bundle-analyzer\nplugins: [new BundleAnalyzerPlugin()]',
          example: 'webpack --profile --json > stats.json',
        },
      ],
    },
    {
      title: 'Troubleshooting',
      commands: [
        {
          command: 'Verbose stats',
          description: 'Print module reasons and timings',
          usage: 'webpack --display-reasons --display-modules --display-optimization-bailout',
          example: 'stats: "errors-warnings" to reduce noise',
        },
        {
          command: 'Common fixes',
          description: 'Check resolve/extensions and loader order',
          usage: 'resolve: { extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] };\nEnsure style-loader before css-loader; asset rules not overlapping.',
          example: 'Delete cache: rm -rf node_modules/.cache/webpack',
        },
        {
          command: 'Performance hints',
          description: 'Silence or tune warnings',
          usage: 'performance: { hints: process.env.NODE_ENV === "production" ? "warning" : false, maxEntrypointSize: 512000 }',
          example: 'Consider lazy/dynamic import for large routes',
        },
      ],
    },
    {
      title: 'Resolve & Targets',
      commands: [
        {
          command: 'Aliases & extensions',
          description: 'Shorten imports and resolve TS/JS',
          usage: 'resolve: {\n  alias: { "@": path.resolve(__dirname, "src") },\n  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],\n}',
          example: 'resolve.fallback = { fs: false, path: false } // disable unwanted polyfills',
        },
        {
          command: 'Target environments',
          description: 'Set output target (browser/node)',
          usage: 'target: ["web", "es2017"] // browserslist also respected\n// For SSR/Node\n target: "node16", externalsPresets: { node: true }',
          example: 'browserslist in package.json guides @babel/preset-env and target defaults',
        },
        {
          command: 'Path mapping (TS/Jest)',
          description: 'Sync TS paths with webpack',
          usage: 'plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]',
          example: 'Keep tsconfig paths aligned with resolve.alias to avoid module-not-found',
        },
      ],
    },
    {
      title: 'SSR, Libraries & Externals',
      commands: [
        {
          command: 'Node/SSR bundling',
          description: 'Avoid bundling node externals',
          usage: 'const nodeExternals = require("webpack-node-externals");\nmodule.exports = {\n  target: "node",\n  externals: [nodeExternals()],\n  output: { libraryTarget: "commonjs2" }\n};',
          example: 'Keep devtool: "inline-source-map" for SSR debugging',
        },
        {
          command: 'Library output',
          description: 'Bundle as library with types',
          usage: 'output: {\n  filename: "index.js",\n  path: path.resolve(__dirname, "dist"),\n  library: { name: "MyLib", type: "umd" }\n}',
          example: 'type: "module" emits native ESM; set experiments.outputModule = true',
        },
        {
          command: 'Externalize globals',
          description: 'Skip bundling peer deps',
          usage: 'externals: { react: "React", "react-dom": "ReactDOM" }',
          example: 'UMD globals map required for CDN script consumers',
        },
      ],
    },
    {
      title: 'Performance & DX',
      commands: [
        {
          command: 'Threaded/fast loaders',
          description: 'Speed up transpilation',
          usage: 'use: [ { loader: "thread-loader" }, { loader: "babel-loader", options: { cacheDirectory: true } } ]',
          example: 'esbuild-loader for super-fast TS/JS transforms',
        },
        {
          command: 'Filesystem cache',
          description: 'Persist cache across runs',
          usage: 'cache: { type: "filesystem", buildDependencies: { config: [__filename] } }',
          example: 'Snapshot managedPaths tuned for monorepos to reduce invalidations',
        },
        {
          command: 'Profiling & bundle timing',
          description: 'Find slow loaders/plugins',
          usage: 'webpack --profile --json > stats.json\nconst SpeedMeasurePlugin = require("speed-measure-webpack-plugin");',
          example: 'SMP wraps config: const smp = new SpeedMeasurePlugin(); module.exports = smp.wrap(config);',
        },
        {
          command: 'Type-check & lint',
          description: 'Separate type-check from build',
          usage: 'use ts-loader with transpileOnly: true; add ForkTsCheckerWebpackPlugin()',
          example: 'new ESLintPlugin({ extensions: ["ts", "tsx", "js", "jsx"] })',
        },
      ],
    },
  ],
};
