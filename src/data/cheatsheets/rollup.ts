import { RefreshCw } from 'lucide-react';

export const rollupCheatsheet = {
  id: 'rollup',
  name: 'Rollup',
  description: 'ESM-first bundler, configs, plugins, and optimization',
  icon: RefreshCw,
  colorTheme: 'orange' as const,
  sections: [
    {
      title: 'Setup & Scripts',
      commands: [
        {
          command: 'Install',
          description: 'Core + common plugins',
          usage: 'npm i -D rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-replace',
          example: '"scripts": { "build": "rollup -c", "dev": "rollup -c -w" }',
        },
        {
          command: 'Basic config',
          description: 'rollup.config.mjs structure',
          usage: 'export default {\n  input: "src/index.ts",\n  output: [\n    { file: "dist/index.cjs", format: "cjs", sourcemap: true },\n    { file: "dist/index.js", format: "esm", sourcemap: true }\n  ],\n  plugins: [resolve(), commonjs(), json()],\n};',
          example: 'preserveEntrySignatures: "strict" for libraries',
        },
        {
          command: 'Multiple builds',
          description: 'Export array for different targets',
          usage: 'export default [nodeConfig, browserConfig];',
          example: 'CLI: rollup -c rollup.browser.config.mjs',
        },
      ],
    },
    {
      title: 'Plugins & Transforms',
      commands: [
        {
          command: 'TypeScript',
          description: 'Use rollup-plugin-typescript2 or esbuild',
          usage: 'import typescript from "rollup-plugin-typescript2";\nplugins: [typescript({ tsconfig: "./tsconfig.json" })]',
          example: 'esbuild: import esbuild from "rollup-plugin-esbuild"; plugins: [esbuild({ target: "es2020" })]',
        },
        {
          command: 'Resolve & CommonJS',
          description: 'Bundle node_modules and CJS deps',
          usage: 'import resolve from "@rollup/plugin-node-resolve";\nimport commonjs from "@rollup/plugin-commonjs";\nplugins: [resolve({ browser: true, preferBuiltins: false }), commonjs()]',
          example: 'dedupe: ["react", "react-dom"] to avoid dupes',
        },
        {
          command: 'Replace/env',
          description: 'Inline environment variables',
          usage: 'replace({ preventAssignment: true, "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") })',
          example: 'replace({ __VERSION__: JSON.stringify(pkg.version) })',
        },
        {
          command: 'Minify',
          description: 'Terser for production bundles',
          usage: 'import { terser } from "rollup-plugin-terser";\nplugins: [terser({ format: { comments: false } })]',
          example: 'Keep class names: terser({ mangle: false })',
        },
      ],
    },
    {
      title: 'Output Formats & Chunks',
      commands: [
        {
          command: 'Formats',
          description: 'Common output types',
          usage: '{ format: "esm" } // modern\n{ format: "cjs" } // Node\n{ format: "iife", name: "MyLib" } // script tag',
          example: 'output: { dir: "dist", entryFileNames: "[name].js" }',
        },
        {
          command: 'Code splitting',
          description: 'Multiple entry points share chunks',
          usage: 'input: { app: "src/app.ts", admin: "src/admin.ts" },\noutput: { dir: "dist", format: "esm" }',
          example: 'manualChunks: { vendor: ["react", "react-dom"] }',
        },
        {
          command: 'Preserve modules',
          description: 'Emit 1:1 files for libraries',
          usage: 'output: { preserveModules: true, preserveModulesRoot: "src", format: "esm", dir: "dist" }',
          example: 'Great for tree-shakeable libs published to npm',
        },
      ],
    },
    {
      title: 'Sourcemaps, Watch & Dev',
      commands: [
        {
          command: 'Sourcemaps',
          description: 'Enable maps per output',
          usage: 'output: { sourcemap: true, sourcemapExcludeSources: false }',
          example: 'inline for debugging: sourcemap: "inline"',
        },
        {
          command: 'Watch mode',
          description: 'Rebuild on change',
          usage: 'rollup -c -w',
          example: 'Use chokidar config via watch: { include: "src/**" } in config',
        },
        {
          command: 'Serve (dev)',
          description: 'Pair with vite/serve for local dev',
          usage: 'npm i -D @web/dev-server\nweb-dev-server --root dist --open',
          example: 'Rollup builds; a simple server serves outputs',
        },
      ],
    },
    {
      title: 'Tree Shaking & Externals',
      commands: [
        {
          command: 'Side effects',
          description: 'Prefer ESM for better pruning',
          usage: 'treeshake: { moduleSideEffects: false }',
          example: 'Mark specific files as side-effectful: moduleSideEffects: id => id.endsWith("style.css")',
        },
        {
          command: 'External deps',
          description: 'Avoid bundling peer deps',
          usage: 'external: ["react", "react-dom", /^@babel\\//]',
          example: 'output.globals = { react: "React", "react-dom": "ReactDOM" } for UMD/IIFE',
        },
        {
          command: 'Dynamic imports',
          description: 'Enable chunking with import()',
          usage: 'inlineDynamicImports: false (default) enables chunks',
          example: 'Use output.chunkFileNames: "chunks/[name]-[hash].js"',
        },
      ],
    },
    {
      title: 'CSS & Assets',
      commands: [
        {
          command: 'CSS handling',
          description: 'Use postcss plugin to bundle styles',
          usage: 'import postcss from "rollup-plugin-postcss";\nplugins: [postcss({ extract: true, modules: true })]',
          example: 'postcss({ minimize: true, sourceMap: true })',
        },
        {
          command: 'Assets',
          description: 'Load images/fonts as data URIs or files',
          usage: 'import url from "@rollup/plugin-url";\nplugins: [url({ include: ["**/*.svg", "**/*.png"], limit: 8192 })]',
          example: 'url({ emitFiles: true, fileName: "assets/[name][hash][extname]" })',
        },
      ],
    },
    {
      title: 'Debugging & Analysis',
      commands: [
        {
          command: 'Bundle visualizer',
          description: 'Inspect dependency sizes',
          usage: 'npm i -D rollup-plugin-visualizer\nplugins: [visualizer({ filename: "stats.html", brotliSize: true })]',
          example: 'Open stats.html to find heavy modules',
        },
        {
          command: 'Verbose logs',
          description: 'See treeshake explanations',
          usage: 'rollup -c --verbose',
          example: 'logSideEffects: true inside treeshake for detail',
        },
        {
          command: 'Common issues',
          description: 'Check module type and extensions',
          usage: 'resolve({ extensions: [".mjs", ".js", ".json", ".ts", ".tsx"] })\nEnsure package.json has "type": "module" for ESM projects',
          example: 'If CJS requires remain, set output.interop: "auto"',
        },
      ],
    },
    {
      title: 'Types, Libs & Declarations',
      commands: [
        {
          command: 'Emit .d.ts',
          description: 'Bundle types for libraries',
          usage: 'import dts from "rollup-plugin-dts";\nexport default [\n  baseConfig,\n  { input: "dist/types/src/index.d.ts", output: { file: "dist/index.d.ts", format: "es" }, plugins: [dts()] }\n];',
          example: 'Run `tsc --emitDeclarationOnly` first or let plugin handle',
        },
        {
          command: 'Package exports',
          description: 'Align outputs with package.json',
          usage: '"exports": {\n  ".": {\n    "import": "./dist/index.js",\n    "require": "./dist/index.cjs"\n  },\n  "./package.json": "./package.json"\n}',
          example: '"types": "./dist/index.d.ts" for TypeScript consumers',
        },
        {
          command: 'Library builds',
          description: 'Stay tree-shakeable and side-effect free',
          usage: 'output: [{ dir: "dist", format: "esm", preserveModules: true, preserveModulesRoot: "src" }]',
          example: 'Mark side effects in package: { "sideEffects": false }',
        },
      ],
    },
    {
      title: 'Node/SSR Targets',
      commands: [
        {
          command: 'Node built-ins',
          description: 'Externalize core modules',
          usage: 'import { builtinModules } from "node:module";\nexternal: [...builtinModules, ...builtinModules.map(m => `node:${m}`)]',
          example: 'output: { format: "cjs", exports: "auto" } for Node libs',
        },
        {
          command: 'SSR bundles',
          description: 'Inline dynamic imports for server entry',
          usage: 'output: { format: "cjs", dir: "dist", inlineDynamicImports: true }',
          example: 'Avoid browser polyfills; set treeshake: { moduleSideEffects: false }',
        },
        {
          command: 'Shebang handling',
          description: 'Keep CLI hashbang intact',
          usage: 'import shebang from "rollup-plugin-preserve-shebang";\nplugins: [shebang()]',
          example: '#!/usr/bin/env node at top of entry file',
        },
      ],
    },
    {
      title: 'Performance & Build Tips',
      commands: [
        {
          command: 'Cache & incremental',
          description: 'Leverage plugin caches',
          usage: 'plugins often expose cache: true; keep node_modules/ as external if possible',
          example: 'Use esbuild plugin for <1s rebuilds during watch',
        },
        {
          command: 'Chunk naming',
          description: 'Readable outputs for debugging',
          usage: 'output: { chunkFileNames: "chunks/[name]-[hash].js", entryFileNames: "entry/[name].js" }',
          example: 'assetFileNames: "assets/[name]-[hash][extname]"',
        },
        {
          command: 'Strict treeshake',
          description: 'Validate unused code removal',
          usage: 'treeshake: { moduleSideEffects: false, propertyReadSideEffects: false }',
          example: 'logSideEffects: true to debug pruning decisions',
        },
      ],
    },
  ],
};
