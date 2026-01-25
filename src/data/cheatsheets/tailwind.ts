import { Sparkles } from 'lucide-react';

export const tailwindCheatsheet = {
  id: 'tailwind',
  name: 'Tailwind CSS',
  description: 'Master Tailwind CSS from basics to advanced features (utility-first CSS framework)',
  icon: Sparkles,
  color: 'from-cyan-500 to-blue-600',
  category: 'programming',
  tags: ['tailwind', 'css', 'utility-first', 'styling', 'framework'],
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Tailwind',
      commands: [
        {
          command: 'What is Tailwind CSS?',
          description: 'Understanding Tailwind CSS and utility-first approach',
          usage: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces',
          example: `Tailwind CSS Overview:
- Utility-first CSS framework
- Low-level utility classes
- Highly customizable
- No opinionated components
- Responsive design utilities
- Dark mode support
- Component-friendly
- Build-time optimization
- PurgeCSS integration
- Developer experience focused

Key Concepts:
- Utility classes for styling
- Responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- State variants (hover:, focus:, active:, disabled:)
- Dark mode support (dark:)
- JIT compilation
- Custom configuration
- Plugin system
- Design tokens

Benefits:
- Rapid development
- Consistent design system
- No custom CSS needed
- Highly maintainable
- Small production bundles
- Great developer experience
- Flexible customization
- Modern CSS features`
        },
        {
          command: 'Installing Tailwind CSS',
          description: 'Install and set up Tailwind CSS in your project',
          usage: 'Set up Tailwind CSS with various build tools and frameworks',
          example: `# Install via npm
npm install -D tailwindcss postcss autoprefixer

# Create configuration file
npx tailwindcss init

# Install with specific frameworks

# Next.js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Create React App
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Laravel
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Vue CLI
vue add tailwind

# Angular
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Configuration file (tailwind.config.js)
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}`
        },
        {
          command: 'Basic Tailwind Setup',
          description: 'Configure basic Tailwind CSS setup',
          usage: 'Set up content sources and basic configuration',
          example: `/* tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{jsx,ts,tsx}",
    "./src/**/*.{vue}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3498db',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

/* CSS file (input.css) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Build command */
npx tailwindcss -i ./input.css -o ./output.css --watch`
        },
        {
          command: 'Tailwind CSS Workflow',
          description: 'Understanding the Tailwind development workflow',
          usage: 'Development and production workflow with Tailwind',
          example: `Development Workflow:
1. Install Tailwind CSS
2. Configure tailwind.config.js
3. Set up content sources
4. Add @tailwind directives to CSS
5. Start development server with --watch
6. Write utility classes in HTML/JSX
7. Build for production

Production Build:
# Build CSS
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# With PostCSS
npx postcss ./src/input.css -o ./dist/output.css

# Package.json scripts
{
  "scripts": {
    "build-css": "tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
    "watch-css": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
  }
}

JIT Mode (Default in v3+):
- On-demand compilation
- Faster builds
- Smaller bundles
- All variants available
- Better performance`
        },
      ],
    },
    {
      title: 'Core Utility Classes',
      commands: [
        {
          command: 'Spacing Utilities',
          description: 'Padding, margin, and space utilities',
          usage: 'Use spacing utilities for layout and spacing',
          example: `/* Padding */
.p-0     { padding: 0px; }
.p-1     { padding: 0.25rem; }
.p-2     { padding: 0.5rem; }
.p-3     { padding: 0.75rem; }
.p-4     { padding: 1rem; }
.p-5     { padding: 1.25rem; }
.p-6     { padding: 1.5rem; }
.p-8     { padding: 2rem; }
.p-10    { padding: 2.5rem; }
.p-12    { padding: 3rem; }
.p-16    { padding: 4rem; }
.p-20    { padding: 5rem; }
.p-24    { padding: 6rem; }
.p-32    { padding: 8rem; }

/* Padding X and Y */
.px-4    { padding-left: 1rem; padding-right: 1rem; }
.py-2    { padding-top: 0.5rem; padding-bottom: 0.5rem; }

/* Padding sides */
.pt-4    { padding-top: 1rem; }
.pr-4    { padding-right: 1rem; }
.pb-4    { padding-bottom: 1rem; }
.pl-4    { padding-left: 1rem; }

/* Margin */
.m-0     { margin: 0px; }
.m-1     { margin: 0.25rem; }
.m-2     { margin: 0.5rem; }
.m-3     { margin: 0.75rem; }
.m-4     { margin: 1rem; }
.m-auto  { margin: auto; }

/* Margin X and Y */
.mx-auto { margin-left: auto; margin-right: auto; }
.my-4    { margin-top: 1rem; margin-bottom: 1rem; }

/* Space between (flex/grid gap) */
.space-x-4 > * + * { margin-left: 1rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }

/* Examples */
<div class="p-4 m-2">
  <div class="px-6 py-3">Padded content</div>
  <div class="mx-auto max-w-md">Centered content</div>
</div>`
        },
        {
          command: 'Color Utilities',
          description: 'Text color, background color, and border color utilities',
          usage: 'Apply colors to text, backgrounds, and borders',
          example: `/* Text colors */
.text-red-500    { color: rgb(239 68 68); }
.text-blue-600   { color: rgb(37 99 235); }
.text-green-500  { color: rgb(34 197 94); }
.text-gray-900   { color: rgb(17 24 39); }
.text-white      { color: rgb(255 255 255); }

/* Background colors */
.bg-red-500     { background-color: rgb(239 68 68); }
.bg-blue-600    { background-color: rgb(37 99 235); }
.bg-green-500   { background-color: rgb(34 197 94); }
.bg-gray-100    { background-color: rgb(243 244 246); }
.bg-white       { background-color: rgb(255 255 255); }
.bg-transparent { background-color: transparent; }

/* Border colors */
.border-red-500 { border-color: rgb(239 68 68); }
.border-blue-600 { border-color: rgb(37 99 235); }
.border-gray-300 { border-color: rgb(209 213 219); }

/* Opacity */
.text-red-500/50 { color: rgb(239 68 68 / 0.5); }
.bg-blue-600/25 { background-color: rgb(37 99 235 / 0.25); }

/* Color variants */
.hover:bg-blue-700:hover { background-color: rgb(29 78 216); }
.focus:border-blue-500:focus { border-color: rgb(59 130 246); }

/* Examples */
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Blue Button
</button>

<div class="bg-gray-100 border border-gray-300 rounded-lg p-4">
  <p class="text-gray-800">Gray card with border</p>
</div>`
        },
        {
          command: 'Typography Utilities',
          description: 'Font size, weight, family, and text styling utilities',
          usage: 'Style text with typography utilities',
          example: `/* Font size */
.text-xs    { font-size: 0.75rem; line-height: 1rem; }
.text-sm    { font-size: 0.875rem; line-height: 1.25rem; }
.text-base  { font-size: 1rem; line-height: 1.5rem; }
.text-lg    { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl    { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl   { font-size: 1.5rem; line-height: 2rem; }
.text-3xl   { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl   { font-size: 2.25rem; line-height: 2.5rem; }

/* Font weight */
.font-thin    { font-weight: 100; }
.font-light   { font-weight: 300; }
.font-normal  { font-weight: 400; }
.font-medium  { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold    { font-weight: 700; }
.font-extrabold { font-weight: 800; }

/* Font family */
.font-sans    { font-family: ui-sans-serif, system-ui; }
.font-serif   { font-family: ui-serif, Georgia; }
.font-mono    { font-family: ui-monospace, SFMono-Regular; }

/* Text alignment */
.text-left    { text-align: left; }
.text-center  { text-align: center; }
.text-right   { text-align: right; }
.text-justify { text-align: justify; }

/* Text decoration */
.underline    { text-decoration-line: underline; }
.line-through { text-decoration-line: line-through; }
.no-underline { text-decoration-line: none; }

/* Text transform */
.uppercase    { text-transform: uppercase; }
.lowercase    { text-transform: lowercase; }
.capitalize   { text-transform: capitalize; }

/* Examples */
<h1 class="text-4xl font-bold text-gray-900">Large heading</h1>
<p class="text-lg text-gray-600 leading-relaxed">Body text</p>
<span class="text-sm font-mono text-blue-600">Code snippet</span>`
        },
        {
          command: 'Layout Utilities',
          description: 'Display, position, width, height, and layout utilities',
          usage: 'Control layout and positioning of elements',
          example: `/* Display */
.block     { display: block; }
.inline    { display: inline; }
.inline-block { display: inline-block; }
.flex      { display: flex; }
.inline-flex { display: inline-flex; }
.grid      { display: grid; }
.hidden    { display: none; }

/* Position */
.static    { position: static; }
.fixed     { position: fixed; }
.absolute  { position: absolute; }
.relative  { position: relative; }
.sticky    { position: sticky; }

/* Top, right, bottom, left */
.top-0     { top: 0px; }
.right-0   { right: 0px; }
.bottom-0  { bottom: 0px; }
.left-0    { left: 0px; }
.inset-0   { top: 0px; right: 0px; bottom: 0px; left: 0px; }

/* Width */
.w-0       { width: 0px; }
.w-full    { width: 100%; }
.w-screen  { width: 100vw; }
.w-auto    { width: auto; }
.w-1/2     { width: 50%; }
.w-1/3     { width: 33.333333%; }
.w-2/3     { width: 66.666667%; }
.w-1/4     { width: 25%; }
.w-3/4     { width: 75%; }

/* Height */
.h-0       { height: 0px; }
.h-full    { height: 100%; }
.h-screen  { height: 100vh; }
.h-auto    { height: auto; }

/* Max width/height */
.max-w-xs  { max-width: 20rem; }
.max-w-sm  { max-width: 24rem; }
.max-w-md  { max-width: 28rem; }
.max-w-lg  { max-width: 32rem; }
.max-w-xl  { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-full { max-width: 100%; }

/* Z-index */
.z-0       { z-index: 0; }
.z-10      { z-index: 10; }
.z-20      { z-index: 20; }
.z-30      { z-index: 30; }
.z-40      { z-index: 40; }
.z-50      { z-index: 50; }
.z-auto    { z-index: auto; }

/* Examples */
<div class="relative">
  <div class="absolute top-0 left-0 w-32 h-32 bg-red-500"></div>
  <div class="relative w-64 h-64 bg-blue-500"></div>
</div>

<div class="flex w-full max-w-md mx-auto">
  <div class="w-1/2 bg-gray-300">Left</div>
  <div class="w-1/2 bg-gray-400">Right</div>
</div>`
        },
      ],
    },
    {
      title: 'Flexbox and Grid',
      commands: [
        {
          command: 'Flexbox Utilities',
          description: 'Complete flexbox utilities for flexible layouts',
          usage: 'Create flexible layouts with flexbox utilities',
          example: `/* Flex direction */
.flex-row       { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col       { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

/* Flex wrap */
.flex-wrap      { flex-wrap: wrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }
.flex-nowrap    { flex-wrap: nowrap; }

/* Justify content (main axis) */
.justify-start    { justify-content: flex-start; }
.justify-end      { justify-content: flex-end; }
.justify-center   { justify-content: center; }
.justify-between  { justify-content: space-between; }
.justify-around   { justify-content: space-around; }
.justify-evenly   { justify-content: space-evenly; }

/* Align items (cross axis) */
.items-start      { align-items: flex-start; }
.items-end        { align-items: flex-end; }
.items-center     { align-items: center; }
.items-baseline   { align-items: baseline; }
.items-stretch    { align-items: stretch; }

/* Align content (wrapped lines) */
.content-start    { align-content: flex-start; }
.content-end      { align-content: flex-end; }
.content-center   { align-content: center; }
.content-between  { align-content: space-between; }
.content-around   { align-content: space-around; }
.content-stretch  { align-content: stretch; }

/* Flex grow/shrink */
.flex-1          { flex: 1 1 0%; }
.flex-auto       { flex: 1 1 auto; }
.flex-initial    { flex: 0 1 auto; }
.flex-none       { flex: none; }
.flex-grow       { flex-grow: 1; }
.flex-shrink     { flex-shrink: 1; }
.flex-grow-0     { flex-grow: 0; }
.flex-shrink-0   { flex-shrink: 0; }

/* Align self */
.self-auto       { align-self: auto; }
.self-start      { align-self: flex-start; }
.self-end        { align-self: flex-end; }
.self-center     { align-self: center; }
.self-stretch    { align-self: stretch; }

/* Examples */
<!-- Center content -->
<div class="flex justify-center items-center h-screen">
  <div class="bg-blue-500 text-white p-4">Centered</div>
</div>

<!-- Navigation bar -->
<nav class="flex justify-between items-center p-4">
  <div class="font-bold">Logo</div>
  <div class="space-x-4">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
  </div>
</nav>

<!-- Card layout -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-gray-200 p-4">Card 1</div>
  <div class="flex-1 bg-gray-300 p-4">Card 2</div>
  <div class="flex-1 bg-gray-400 p-4">Card 3</div>
</div>`
        },
        {
          command: 'Grid Utilities',
          description: 'CSS Grid utilities for complex layouts',
          usage: 'Create grid layouts with CSS Grid utilities',
          example: `/* Grid template columns */
.grid-cols-1    { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2    { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3    { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4    { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-5    { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.grid-cols-6    { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-7    { grid-template-columns: repeat(7, minmax(0, 1fr)); }
.grid-cols-8    { grid-template-columns: repeat(8, minmax(0, 1fr)); }
.grid-cols-9    { grid-template-columns: repeat(9, minmax(0, 1fr)); }
.grid-cols-10   { grid-template-columns: repeat(10, minmax(0, 1fr)); }
.grid-cols-11   { grid-template-columns: repeat(11, minmax(0, 1fr)); }
.grid-cols-12   { grid-template-columns: repeat(12, minmax(0, 1fr)); }
.grid-cols-none { grid-template-columns: none; }

/* Grid template rows */
.grid-rows-1    { grid-template-rows: repeat(1, minmax(0, 1fr)); }
.grid-rows-2    { grid-template-rows: repeat(2, minmax(0, 1fr)); }
.grid-rows-3    { grid-template-rows: repeat(3, minmax(0, 1fr)); }
.grid-rows-4    { grid-template-rows: repeat(4, minmax(0, 1fr)); }
.grid-rows-5    { grid-template-rows: repeat(5, minmax(0, 1fr)); }
.grid-rows-6    { grid-template-rows: repeat(6, minmax(0, 1fr)); }

/* Grid column/row span */
.col-span-1     { grid-column: span 1 / span 1; }
.col-span-2     { grid-column: span 2 / span 2; }
.col-span-3     { grid-column: span 3 / span 3; }
.col-span-4     { grid-column: span 4 / span 4; }
.col-span-5     { grid-column: span 5 / span 5; }
.col-span-6     { grid-column: span 6 / span 6; }
.col-span-full  { grid-column: 1 / -1; }

.row-span-1     { grid-row: span 1 / span 1; }
.row-span-2     { grid-row: span 2 / span 2; }
.row-span-3     { grid-row: span 3 / span 3; }
.row-span-4     { grid-row: span 4 / span 4; }
.row-span-full  { grid-row: 1 / -1; }

/* Grid column/row start/end */
.col-start-1    { grid-column-start: 1; }
.col-start-2    { grid-column-start: 2; }
.col-end-3      { grid-column-end: 3; }
.col-end-4      { grid-column-end: 4; }

.row-start-1    { grid-row-start: 1; }
.row-start-2    { grid-row-start: 2; }
.row-end-3      { grid-row-end: 3; }
.row-end-4      { grid-row-end: 4; }

/* Examples */
<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
  <div class="bg-red-500 p-4">1</div>
  <div class="bg-blue-500 p-4">2</div>
  <div class="bg-green-500 p-4">3</div>
  <div class="bg-yellow-500 p-4">4</div>
  <div class="bg-purple-500 p-4">5</div>
  <div class="bg-pink-500 p-4">6</div>
</div>

<!-- Complex layout -->
<div class="grid grid-cols-4 grid-rows-3 gap-4">
  <div class="col-span-2 row-span-2 bg-red-500 p-4">Header</div>
  <div class="col-span-2 bg-blue-500 p-4">Nav</div>
  <div class="row-span-2 bg-green-500 p-4">Sidebar</div>
  <div class="col-span-2 bg-yellow-500 p-4">Content</div>
  <div class="col-span-2 bg-purple-500 p-4">Footer</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-gray-200 p-4">Card 1</div>
  <div class="bg-gray-300 p-4">Card 2</div>
  <div class="bg-gray-400 p-4">Card 3</div>
</div>`
        },
        {
          command: 'Gap and Space Utilities',
          description: 'Gap utilities for flexbox and grid layouts',
          usage: 'Control spacing between flex and grid items',
          example: `/* Gap for grid and flex */
.gap-0     { gap: 0px; }
.gap-1     { gap: 0.25rem; }
.gap-2     { gap: 0.5rem; }
.gap-3     { gap: 0.75rem; }
.gap-4     { gap: 1rem; }
.gap-5     { gap: 1.25rem; }
.gap-6     { gap: 1.5rem; }
.gap-8     { gap: 2rem; }
.gap-10    { gap: 2.5rem; }
.gap-12    { gap: 3rem; }
.gap-16    { gap: 4rem; }
.gap-20    { gap: 5rem; }
.gap-24    { gap: 6rem; }
.gap-32    { gap: 8rem; }

/* Gap X */
.gap-x-0   { column-gap: 0px; }
.gap-x-1   { column-gap: 0.25rem; }
.gap-x-2   { column-gap: 0.5rem; }
.gap-x-4   { column-gap: 1rem; }
.gap-x-6   { column-gap: 1.5rem; }
.gap-x-8   { column-gap: 2rem; }

/* Gap Y */
.gap-y-0   { row-gap: 0px; }
.gap-y-1   { row-gap: 0.25rem; }
.gap-y-2   { row-gap: 0.5rem; }
.gap-y-4   { row-gap: 1rem; }
.gap-y-6   { row-gap: 1.5rem; }
.gap-y-8   { row-gap: 2rem; }

/* Space between (for flex children) */
.space-x-1 > * + * { margin-left: 0.25rem; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-4 > * + * { margin-left: 1rem; }
.space-x-6 > * + * { margin-left: 1.5rem; }
.space-x-8 > * + * { margin-left: 2rem; }

.space-y-1 > * + * { margin-top: 0.25rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-8 > * + * { margin-top: 2rem; }

/* Examples */
<!-- Grid with gap -->
<div class="grid grid-cols-3 gap-4">
  <div class="bg-red-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-green-500 p-4">Item 3</div>
</div>

<!-- Flex with gap -->
<div class="flex gap-6">
  <div class="bg-purple-500 p-4">Flex 1</div>
  <div class="bg-pink-500 p-4">Flex 2</div>
  <div class="bg-yellow-500 p-4">Flex 3</div>
</div>

<!-- Space between -->
<div class="flex flex-col space-y-4">
  <div class="bg-gray-300 p-3">Item 1</div>
  <div class="bg-gray-400 p-3">Item 2</div>
  <div class="bg-gray-500 p-3">Item 3</div>
</div>

<!-- Navigation with space -->
<nav class="flex items-center space-x-6">
  <a href="#" class="text-blue-600">Home</a>
  <a href="#" class="text-gray-600">About</a>
  <a href="#" class="text-gray-600">Services</a>
  <a href="#" class="text-gray-600">Contact</a>
</nav>`
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Responsive Design',
      commands: [
        {
          command: 'Responsive Prefixes',
          description: 'Using responsive prefixes for adaptive designs',
          usage: 'Apply utilities at different breakpoints',
          example: `/* Breakpoints (default) */
sm: 640px   /* Small screens */
md: 768px   /* Medium screens */
lg: 1024px  /* Large screens */
xl: 1280px  /* Extra large screens */
2xl: 1536px /* 2X large screens */

/* Responsive syntax */
<prefix>-<utility>

/* Examples */
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on tablet, third on desktop -->
</div>

/* Common responsive patterns */
/* Typography */
.text-sm md:text-base lg:text-lg xl:text-xl

/* Layout */
.flex-col md:flex-row
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Spacing */
.p-4 md:p-6 lg:p-8
.m-2 md:m-4 lg:m-6

/* Display */
.block md:hidden
.hidden md:block

/* Examples -->
<!-- Responsive card grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-lg font-semibold mb-2">Card 1</h3>
    <p class="text-gray-600">Responsive card content</p>
  </div>
  <!-- More cards... -->
</div>

<!-- Responsive navigation -->
<nav class="flex flex-col md:flex-row justify-between items-center p-4">
  <div class="text-xl font-bold mb-4 md:mb-0">Logo</div>
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Services</a>
  </div>
</nav>

<!-- Responsive sidebar -->
<div class="flex flex-col lg:flex-row">
  <aside class="w-full lg:w-64 bg-gray-100 p-4">
    <!-- Sidebar content -->
  </aside>
  <main class="flex-1 p-4">
    <!-- Main content -->
  </main>
</div>`
        },
        {
          command: 'Custom Breakpoints',
          description: 'Defining and using custom breakpoints',
          usage: 'Configure custom breakpoints in tailwind.config.js',
          example: `/* tailwind.config.js */
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      // Custom breakpoints
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      // Range with min/max
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      // Landscape orientation
      'landscape': {'raw': '(orientation: landscape)'},
      // High DPI displays
      'retina': {'raw': '(-webkit-min-device-pixel-ratio: 2)'},
    },
  },
}

/* Using custom breakpoints */
<div class="block xs:hidden">
  <!-- Only visible below 475px -->
</div>

<div class="hidden tablet:block">
  <!-- Only visible on tablet and above -->
</div>

<div class="landscape:flex">
  <!-- Flex only in landscape mode -->
</div>

<div class="retina:text-sm">
  <!-- Smaller text on retina displays -->
</div>

/* Examples of responsive design */
<!-- Mobile-first responsive container -->
<div class="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 3xl:max-w-4xl mx-auto p-4">
  <h1 class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
    Responsive Heading
  </h1>
  <p class="text-sm xs:text-base sm:text-lg md:text-xl">
    Responsive paragraph text that scales with viewport
  </p>
</div>

<!-- Responsive grid with custom breakpoints -->
<div class="grid grid-cols-1 xs:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
  <div class="bg-blue-500 p-4 text-white">Item 1</div>
  <div class="bg-green-500 p-4 text-white">Item 2</div>
  <div class="bg-red-500 p-4 text-white">Item 3</div>
  <div class="bg-purple-500 p-4 text-white">Item 4</div>
</div>`
        },
        {
          command: 'Responsive Utilities',
          description: 'Advanced responsive utility patterns',
          usage: 'Complex responsive design patterns',
          example: `/* Responsive display utilities */
.block sm:block md:block lg:block xl:block 2xl:block
.inline sm:inline md:inline lg:inline xl:inline 2xl:inline
.flex sm:flex md:flex lg:flex xl:flex 2xl:flex
.grid sm:grid md:grid lg:grid xl:grid 2xl:grid
.hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden

/* Responsive spacing */
.m-0 sm:m-0 md:m-0 lg:m-0 xl:m-0 2xl:m-0
.p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0
.space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-0 xl:space-x-0 2xl:space-x-0
.space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0 xl:space-y-0 2xl:space-y-0

/* Responsive colors */
.text-black sm:text-black md:text-black lg:text-black xl:text-black 2xl:text-black
.bg-white sm:bg-white md:bg-white lg:bg-white xl:bg-white 2xl:bg-white

/* Responsive layouts */
.flex-col sm:flex-row
.grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4

/* Complex responsive patterns -->
<!-- Responsive hero section -->
<section class="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12">
  <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
    Hero Title
  </h1>
  <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl mx-auto mb-8">
    Hero description that adapts to screen size
  </p>
  <div class="flex flex-col sm:flex-row gap-4">
    <button class="px-6 py-3 bg-blue-500 text-white rounded-lg">
      Primary Action
    </button>
    <button class="px-6 py-3 border border-gray-300 rounded-lg">
      Secondary Action
    </button>
  </div>
</section>

<!-- Responsive card layout -->
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="h-48 bg-gray-200"></div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">Card Title</h3>
        <p class="text-gray-600 text-sm">Card description</p>
      </div>
    </div>
    <!-- More cards... -->
  </div>
</div>

<!-- Responsive sidebar layout -->
<div class="flex flex-col lg:flex-row min-h-screen">
  <!-- Mobile menu toggle -->
  <button class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded">
    Menu
  </button>
  
  <!-- Sidebar -->
  <aside class="fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out">
    <nav class="p-4">
      <ul class="space-y-2">
        <li><a href="#" class="block py-2 px-4 hover:bg-gray-800 rounded">Home</a></li>
        <li><a href="#" class="block py-2 px-4 hover:bg-gray-800 rounded">About</a></li>
        <li><a href="#" class="block py-2 px-4 hover:bg-gray-800 rounded">Services</a></li>
      </ul>
    </nav>
  </aside>
  
  <!-- Main content -->
  <main class="flex-1 p-4 lg:p-8">
    <h1 class="text-2xl lg:text-3xl font-bold mb-6">Main Content</h1>
    <!-- Content here -->
  </main>
</div>`
        },
      ],
    },
    {
      title: 'State Variants',
      commands: [
        {
          command: 'Hover and Focus States',
          description: 'Styling elements on hover and focus states',
          usage: 'Apply styles on interactive states',
          example: `/* Hover state */
.hover:<utility>

/* Common hover utilities */
.hover:bg-blue-600:hover { background-color: rgb(37 99 235); }
.hover:text-red-500:hover { color: rgb(239 68 68); }
.hover:scale-105:hover { transform: scale(1.05); }
.hover:rotate-3:hover { transform: rotate(3deg); }
.hover:shadow-lg:hover { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
.hover:opacity-75:hover { opacity: 0.75; }

/* Focus state */
.focus:<utility>

/* Common focus utilities */
.focus:outline-none:focus { outline: 2px solid transparent; }
.focus:ring-2:focus { box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5); }
.focus:border-blue-500:focus { border-color: rgb(59 130 246); }
.focus:shadow-outline:focus { box-shadow: 0 0 0 3px rgb(66 153 225 / 0.5); }

/* Active state */
.active:<utility>

/* Common active utilities */
.active:bg-blue-700:active { background-color: rgb(29 78 216); }
.active:scale-95:active { transform: scale(0.95); }

/* Examples -->
<!-- Interactive button -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
  Hover me
</button>

<!-- Card with hover effect -->
<div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
  <h3 class="text-lg font-semibold mb-2">Hover Card</h3>
  <p class="text-gray-600">This card grows a shadow on hover</p>
</div>

<!-- Form inputs with focus states -->
<input type="text" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Focus me">

<!-- Link with hover and focus -->
<a href="#" class="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Accessible Link
</a>

<!-- Image with hover scale -->
<img src="image.jpg" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg">`
        },
        {
          command: 'Form State Variants',
          description: 'Styling form elements in different states',
          usage: 'Style form inputs based on validation and interaction states',
          example: `/* Form state variants */
.disabled:<utility>
.read-only:<utility>
.required:<utility>
.valid:<utility>
.invalid:<utility>

/* Disabled state */
.disabled:opacity-50:disabled { opacity: 0.5; }
.disabled:cursor-not-allowed:disabled { cursor: not-allowed; }
.disabled:bg-gray-100:disabled { background-color: rgb(243 244 246); }

/* Read-only state */
.read-only:bg-gray-50:read-only { background-color: rgb(249 250 251); }
.read-only:cursor-default:read-only { cursor: default; }

/* Required state */
.required:after:required::after { content: '*'; }
.required:text-red-500:required { color: rgb(239 68 68); }

/* Examples -->
<!-- Form inputs with states -->
<input type="text" 
       class="border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              disabled:bg-gray-100 disabled:cursor-not-allowed
              valid:border-green-500 valid:bg-green-50
              invalid:border-red-500 invalid:bg-red-50"
       placeholder="Enter text"
       required
       disabled>

<!-- Textarea with states -->
<textarea class="w-full border border-gray-300 rounded-lg px-4 py-2 
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 read-only:bg-gray-50 read-only:cursor-default
                 resize-none"
          placeholder="Enter message"
          readonly></textarea>

<!-- Select with states -->
<select class="border border-gray-300 rounded-lg px-4 py-2 
               focus:outline-none focus:ring-2 focus:ring-blue-500
               disabled:bg-gray-100 disabled:cursor-not-allowed">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Checkbox with custom styling -->
<input type="checkbox" 
       class="w-4 h-4 text-blue-600 border-gray-300 rounded 
              focus:ring-blue-500 focus:ring-2
              disabled:opacity-50 disabled:cursor-not-allowed">

<!-- Radio button with custom styling -->
<input type="radio" 
       class="w-4 h-4 text-blue-600 border-gray-300 
              focus:ring-blue-500 focus:ring-2
              disabled:opacity-50 disabled:cursor-not-allowed">

<!-- Form validation example -->
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email <span class="required:text-red-500 after:content['*']"></span>
    </label>
    <input type="email" 
           class="w-full border border-gray-300 rounded-lg px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  valid:border-green-500 valid:bg-green-50
                  invalid:border-red-500 invalid:bg-red-50"
           required>
  </div>
</form>`
        },
        {
          command: 'Group and Peer States',
          description: 'Styling elements based on parent or sibling states',
          usage: 'Use group and peer variants for contextual styling',
          example: `/* Group state - parent affects children */
.group:hover .group-hover:<utility>

/* Common group-hover utilities */
.group-hover:text-blue-500:hover .group-hover:text-blue-500 { color: rgb(59 130 246); }
.group-hover:bg-gray-100:hover .group-hover:bg-gray-100 { background-color: rgb(243 244 246); }
.group-hover:opacity-100:hover .group-hover:opacity-100 { opacity: 1; }

/* Peer state - sibling affects element */
.peer:peer-checked ~ .peer-checked:<utility>
.peer:focus ~ .peer-focus:<utility>
.peer:hover ~ .peer-hover:<utility>

/* Common peer utilities */
.peer-checked:bg-blue-500:peer-checked ~ .peer-checked:bg-blue-500 { background-color: rgb(59 130 246); }
.peer-checked:border-blue-500:peer-checked ~ .peer-checked:border-blue-500 { border-color: rgb(59 130 246); }
.peer-focus:text-blue-600:peer:focus ~ .peer-focus:text-blue-600 { color: rgb(37 99 235); }

/* Examples -->
<!-- Card with group hover effect -->
<div class="group">
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="image.jpg" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
        Group Hover Title
      </h3>
      <p class="text-gray-600 group-hover:text-gray-800 transition-colors">
        This card responds to parent hover
      </p>
      <button class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

<!-- Custom checkbox with peer state -->
<div class="flex items-center space-x-3">
  <input type="checkbox" id="toggle" class="peer hidden">
  <label for="toggle" class="flex items-center cursor-pointer">
    <div class="relative">
      <div class="block bg-gray-300 w-14 h-8 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
      <div class="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-6"></div>
    </div>
    <span class="text-gray-700 peer-checked:text-blue-600 font-medium">
      Toggle Switch
    </span>
  </label>
</div>

<!-- Accordion with peer state -->
<div class="space-y-2">
  <div class="border rounded-lg">
    <input type="checkbox" id="accordion-1" class="peer hidden">
    <label for="accordion-1" class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
      <span class="font-medium">Accordion Item 1</span>
      <svg class="w-5 h-5 transform transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </label>
    <div class="hidden peer-checked:block p-4 border-t">
      <p class="text-gray-600">Accordion content appears when checkbox is checked</p>
    </div>
  </div>
</div>

<!-- Navigation with group states -->
<nav class="group">
  <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 group-hover:text-blue-600">
    Home
  </a>
  <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 group-hover:text-blue-600">
    About
  </a>
  <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 group-hover:text-blue-600">
    Services
  </a>
</nav>`
        },
      ],
    },
    {
      title: 'Dark Mode',
      commands: [
        {
          command: 'Dark Mode Setup',
          description: 'Configuring and implementing dark mode',
          usage: 'Set up dark mode in Tailwind configuration',
          example: `/* tailwind.config.js */
module.exports = {
  darkMode: 'class', // or 'media' for OS preference
  // or
  darkMode: 'media', // Follows OS preference
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
}

/* Dark mode variants */
.dark:<utility>

/* Common dark mode utilities */
.dark:bg-gray-900:is(.dark *) { background-color: rgb(17 24 39); }
.dark:text-white:is(.dark *) { color: rgb(255 255 255); }
.dark:border-gray-700:is(.dark *) { border-color: rgb(55 65 81); }

/* Examples of dark mode setup -->
<!-- HTML with dark mode toggle -->
<html class="dark">
  <!-- Dark mode enabled -->
</html>

<html>
  <!-- Light mode (default) -->
</html>

<!-- JavaScript toggle -->
<script>
  // Toggle dark mode
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
  
  // Check OS preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
  
  // Listen for OS preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<!-- Dark mode toggle button -->
<button onclick="toggleDarkMode()" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
  <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
  </svg>
  <svg class="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
</button>`
        },
        {
          command: 'Dark Mode Utilities',
          description: 'Applying dark mode styles to components',
          usage: 'Create dark mode compatible components',
          example: `/* Dark mode color utilities */
.dark:text-white:is(.dark *) { color: rgb(255 255 255); }
.dark:text-gray-100:is(.dark *) { color: rgb(243 244 246); }
.dark:text-gray-200:is(.dark *) { color: rgb(229 231 235); }
.dark:text-gray-300:is(.dark *) { color: rgb(209 213 219); }
.dark:text-gray-400:is(.dark *) { color: rgb(156 163 175); }
.dark:text-gray-500:is(.dark *) { color: rgb(107 114 128); }

.dark:bg-gray-900:is(.dark *) { background-color: rgb(17 24 39); }
.dark:bg-gray-800:is(.dark *) { background-color: rgb(31 41 55); }
.dark:bg-gray-700:is(.dark *) { background-color: rgb(55 65 81); }
.dark:bg-gray-600:is(.dark *) { background-color: rgb(75 85 99); }

.dark:border-gray-700:is(.dark *) { border-color: rgb(55 65 81); }
.dark:border-gray-600:is(.dark *) { border-color: rgb(75 85 99); }

/* Examples of dark mode components -->
<!-- Card with dark mode -->
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
    Dark Mode Card
  </h3>
  <p class="text-gray-600 dark:text-gray-300">
    This card adapts to dark mode automatically
  </p>
  <button class="mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700">
    Action Button
  </button>
</div>

<!-- Navigation with dark mode -->
<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <span class="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          Home
        </a>
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          About
        </a>
      </div>
    </div>
  </div>
</nav>

<!-- Form with dark mode -->
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email
    </label>
    <input type="email" 
           class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  dark:focus:ring-blue-400"
           placeholder="Enter your email">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Message
    </label>
    <textarea class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:focus:ring-blue-400"
              rows="4"
              placeholder="Enter your message"></textarea>
  </div>
</form>

<!-- Alert with dark mode -->
<div class="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-blue-700 dark:text-blue-200">
        This is an alert that works in both light and dark modes
      </p>
    </div>
  </div>
</div>

<!-- Table with dark mode -->
<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Title
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        John Doe
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        Developer
      </td>
    </tr>
  </tbody>
</table>`
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced Tailwind Features',
      commands: [
        {
          command: 'Custom Configuration',
          description: 'Extending Tailwind with custom configuration',
          usage: 'Customize themes, colors, spacing, and more',
          example: `/* tailwind.config.js - Complete customization */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      // Custom color palette
      brand: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      // Semantic colors
      primary: '#3b82f6',
      secondary: '#64748b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
      '128': '32rem',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      serif: ['Georgia', 'ui-serif'],
      mono: ['Fira Code', 'ui-monospace'],
    },
    fontSize: {
      '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    },
    borderRadius: {
      '4xl': '2rem',
    },
    boxShadow: {
      'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    extend: {
      // Custom animation
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      // Custom keyframes
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      // Custom backdrop blur
      backdropBlur: {
        xs: '2px',
      },
      // Custom spacing scale
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Custom grid
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    // Forms plugin
    require('@tailwindcss/forms'),
    // Typography plugin
    require('@tailwindcss/typography'),
    // Aspect ratio plugin
    require('@tailwindcss/aspect-ratio'),
    // Custom plugin
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

/* Using custom configuration */
<div class="bg-brand-500 text-white p-6 rounded-4xl shadow-custom">
  <h1 class="text-3xl font-sans">Custom Config</h1>
  <p class="text-shadow">Text with shadow</p>
</div>

<div class="grid grid-cols-13 gap-4">
  <!-- 13 column grid -->
</div>

<button class="animate-bounce-slow">
  Slow bounce animation
</button>`
        },
        {
          command: 'Tailwind Plugins',
          description: 'Using and creating Tailwind plugins',
          usage: 'Extend functionality with plugins',
          example: `/* Popular Tailwind plugins */

/* 1. Forms Plugin */
npm install @tailwindcss/forms

/* tailwind.config.js */
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

/* Usage */
<form class="space-y-4">
  <input type="text" class="form-input" placeholder="Default input">
  <input type="text" class="form-input rounded-lg" placeholder="Rounded input">
  <select class="form-select">
    <option>Default select</option>
  </select>
  <textarea class="form-textarea" placeholder="Default textarea"></textarea>
  <input type="checkbox" class="form-checkbox">
  <input type="radio" class="form-radio">
</form>

/* 2. Typography Plugin */
npm install @tailwindcss/typography

/* tailwind.config.js */
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

/* Usage */
<article class="prose prose-lg prose-headings:underline prose-a:text-blue-600">
  <h1>Article Title</h1>
  <p>This is an article with beautiful typography.</p>
  <blockquote>
    "This is a quote that looks great."
  </blockquote>
</article>

/* 3. Aspect Ratio Plugin */
npm install @tailwindcss/aspect-ratio

/* tailwind.config.js */
module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

/* Usage */
<div class="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

/* 4. Container Queries Plugin */
npm install @tailwindcss/container-queries

/* tailwind.config.js */
module.exports = {
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

/* Usage */
<div class="@container">
  <div class="@lg:text-xl">
    This text is larger when the container is wider
  </div>
</div>

/* Custom Plugin Example */
/* tailwind.config.js */
module.exports = {
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      // Add custom utilities
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
        '.content-hidden': {
          contentVisibility: 'hidden',
        },
      });

      // Add custom components
      addComponents({
        '.btn': {
          padding: theme('spacing.2') + ' ' + theme('spacing.4'),
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.500'),
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.blue.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.blue.600'),
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.gray.800'),
          '&:hover': {
            backgroundColor: theme('colors.gray.300'),
          },
        },
      });
    },
  ],
}

/* Usage of custom plugin */
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<div class="content-auto">Content with auto visibility</div>`
        },
        {
          command: 'Component Classes',
          description: 'Creating reusable component classes',
          usage: 'Build component libraries with @apply and @layer',
          example: `/* Using @apply directive */

/* In your CSS file */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-md font-medium transition-colors duration-200;
  }
  
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2;
  }
  
  .btn-danger {
    @apply bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md overflow-hidden;
  }
  
  .card-header {
    @apply px-6 py-4 border-b border-gray-200;
  }
  
  .card-body {
    @apply px-6 py-4;
  }
  
  .card-footer {
    @apply px-6 py-4 bg-gray-50 border-t border-gray-200;
  }
  
  .input {
    @apply block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
  }
  
  .badge {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
  }
  
  .badge-primary {
    @apply bg-blue-100 text-blue-800;
  }
  
  .badge-success {
    @apply bg-green-100 text-green-800;
  }
  
  .badge-warning {
    @apply bg-yellow-100 text-yellow-800;
  }
  
  .badge-error {
    @apply bg-red-100 text-red-800;
  }
}

/* Usage in HTML */
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-danger">Danger Button</button>

<div class="card">
  <div class="card-header">
    <h3 class="text-lg font-semibold">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="text-gray-600">Card content goes here</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<input type="text" class="input" placeholder="Enter text">

<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>

/* Advanced component with variants */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-md font-medium transition-all duration-200 
           focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 
           disabled:cursor-not-allowed;
  }
  
  .btn-sm {
    @apply px-3 py-1.5 text-xs;
  }
  
  .btn-lg {
    @apply px-6 py-3 text-lg;
  }
  
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500;
  }
  
  .btn-outline {
    @apply border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500;
  }
  
  .btn-ghost {
    @apply text-blue-500 hover:bg-blue-50 focus:ring-blue-500;
  }
}

<!-- Component variants usage -->
<button class="btn btn-primary btn-sm">Small Primary</button>
<button class="btn btn-primary">Default Primary</button>
<button class="btn btn-primary btn-lg">Large Primary</button>
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-ghost">Ghost Button</button>`
        },
        {
          command: 'Performance Optimization',
          description: 'Optimizing Tailwind CSS for production',
          usage: 'Best practices for build optimization',
          example: `/* Performance Optimization Strategies */

/* 1. Content Configuration */
/* tailwind.config.js */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  // Be specific about content sources
  // Only include files that actually use Tailwind classes
}

/* 2. PurgeCSS Configuration */
/* tailwind.config.js */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Keep dynamic classes
    'bg-red-500',
    'text-blue-600',
    // Keep pattern-based classes
    /^bg-/,
    /^text-/,
    // Keep specific variants
    'hover:bg-blue-600',
    'focus:ring-2',
  ],
}

/* 3. Build Optimization */
/* package.json scripts */
{
  "scripts": {
    "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
    "build": "NODE_ENV=production tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
    "build:analyze": "tailwindcss -i ./src/input.css -o ./dist/output.css && npx tailwindcss-analyzer ./dist/output.css"
  }
}

/* 4. JIT Mode Configuration (Tailwind CSS v3+) */
/* tailwind.config.js */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

/* 5. CSS Optimization */
/* input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Minified production build */
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

/* 6. Bundle Analysis */
/* Install analyzer */
npm install -g tailwindcss-analyzer

/* Analyze CSS bundle */
tailwindcss-analyzer ./dist/output.css

/* 7. Dynamic Class Handling */
/* For dynamic classes, use safelist or complete class names */
const colors = ['red', 'blue', 'green'];
const sizes = ['sm', 'md', 'lg'];

// Good: Complete class names
<div className={\`bg-\${color}-500 text-\${size}\`}>

// Bad: Partial class names (won't be purged correctly)
<div className={\`bg-\${color}-\${shade}\`}>

/* 8. PostCSS Configuration */
/* postcss.config.js */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
}

/* 9. Critical CSS */
/* Extract critical CSS for above-the-fold content */
/* critical.css */
@tailwind components;
@tailwind utilities;

/* Non-critical styles loaded separately */
/* main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 10. Performance Monitoring */
/* webpack-bundle-analyzer for Webpack */
npm install --save-dev webpack-bundle-analyzer

/* webpack.config.js */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
}

/* 11. Lazy Loading */
/* Load CSS on demand */
const loadTailwindCSS = async () => {
  if (!document.getElementById('tailwind-css')) {
    const link = document.createElement('link');
    link.id = 'tailwind-css';
    link.rel = 'stylesheet';
    link.href = '/css/tailwind.css';
    document.head.appendChild(link);
  }
};

/* 12. Tree Shaking */
/* Ensure unused CSS is removed */
/* tailwind.config.js */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/**/*.html',
    ],
    options: {
      safelist: [
        // Keep classes used in JavaScript
        /^bg-/,
        /^text-/,
      ],
    },
  },
}

/* Production build command */
NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify --purge`
        },
      ],
    },
    {
      title: 'Real-world Applications',
      commands: [
        {
          command: 'Design System Implementation',
          description: 'Building a complete design system with Tailwind',
          usage: 'Create scalable design systems',
          example: `/* Design System Configuration */
/* tailwind.config.js */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Neutral colors
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

/* Design System Components */
/* components.css */
@layer components {
  /* Base components */
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 border border-transparent 
           text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 
           focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 
           disabled:cursor-not-allowed;
  }
  
  .btn-sm {
    @apply px-3 py-1.5 text-xs;
  }
  
  .btn-lg {
    @apply px-6 py-3 text-base;
  }
  
  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500;
  }
  
  .btn-secondary {
    @apply bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500;
  }
  
  .btn-success {
    @apply bg-success text-white hover:bg-green-600 focus:ring-success;
  }
  
  .btn-warning {
    @apply bg-warning text-white hover:bg-yellow-600 focus:ring-warning;
  }
  
  .btn-error {
    @apply bg-error text-white hover:bg-red-600 focus:ring-error;
  }
  
  .btn-outline {
    @apply border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500;
  }
  
  .btn-ghost {
    @apply border-transparent text-gray-700 bg-transparent hover:bg-gray-50 focus:ring-primary-500;
  }
  
  /* Card components */
  .card {
    @apply bg-white overflow-hidden shadow-md rounded-lg;
  }
  
  .card-sm {
    @apply rounded-md shadow-sm;
  }
  
  .card-lg {
    @apply rounded-xl shadow-lg;
  }
  
  .card-header {
    @apply px-6 py-4 border-b border-gray-200 bg-gray-50;
  }
  
  .card-body {
    @apply px-6 py-4;
  }
  
  .card-footer {
    @apply px-6 py-4 bg-gray-50 border-t border-gray-200;
  }
  
  /* Form components */
  .form-input {
    @apply block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
           placeholder-gray-400 focus:outline-none focus:ring-primary-500 
           focus:border-primary-500 sm:text-sm;
  }
  
  .form-textarea {
    @apply form-input resize-vertical;
  }
  
  .form-select {
    @apply form-input;
  }
  
  .form-checkbox {
    @apply h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded;
  }
  
  .form-radio {
    @apply h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300;
  }
  
  /* Badge components */
  .badge {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
  }
  
  .badge-primary {
    @apply bg-primary-100 text-primary-800;
  }
  
  .badge-success {
    @apply bg-green-100 text-green-800;
  }
  
  .badge-warning {
    @apply bg-yellow-100 text-yellow-800;
  }
  
  .badge-error {
    @apply bg-red-100 text-red-800;
  }
  
  .badge-gray {
    @apply bg-gray-100 text-gray-800;
  }
  
  /* Alert components */
  .alert {
    @apply p-4 rounded-md;
  }
  
  .alert-success {
    @apply bg-green-50 border border-green-200 text-green-800;
  }
  
  .alert-warning {
    @apply bg-yellow-50 border border-yellow-200 text-yellow-800;
  }
  
  .alert-error {
    @apply bg-red-50 border border-red-200 text-red-800;
  }
  
  .alert-info {
    @apply bg-blue-50 border border-blue-200 text-blue-800;
  }
  
  /* Navigation components */
  .nav-link {
    @apply text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium 
           transition-colors duration-200;
  }
  
  .nav-link-active {
    @apply text-primary-600 bg-primary-50;
  }
  
  /* Layout components */
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section {
    @apply py-12 lg:py-16;
  }
  
  .divider {
    @apply border-t border-gray-200;
  }
}

/* Usage Examples */
<!-- Buttons -->
<div class="flex flex-wrap gap-4">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-error">Error</button>
  <button class="btn btn-outline">Outline</button>
  <button class="btn btn-ghost">Ghost</button>
</div>

<!-- Button sizes -->
<div class="flex flex-wrap gap-4 items-center">
  <button class="btn btn-primary btn-sm">Small</button>
  <button class="btn btn-primary">Default</button>
  <button class="btn btn-primary btn-lg">Large</button>
</div>

<!-- Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card">
    <div class="card-header">
      <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
    </div>
    <div class="card-body">
      <p class="text-gray-600">Card content goes here</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary btn-sm">Action</button>
    </div>
  </div>
</div>

<!-- Forms -->
<form class="space-y-6">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
    <input type="email" class="form-input" placeholder="Enter your email">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
    <textarea class="form-textarea" rows="4" placeholder="Enter your message"></textarea>
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">Options</label>
    <select class="form-select">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
  <div class="flex items-center">
    <input type="checkbox" class="form-checkbox">
    <label class="ml-2 text-sm text-gray-700">I agree to the terms</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<!-- Badges -->
<div class="flex flex-wrap gap-2">
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-error">Error</span>
  <span class="badge badge-gray">Gray</span>
</div>

<!-- Alerts -->
<div class="space-y-4">
  <div class="alert alert-success">
    <p class="font-medium">Success!</p>
    <p class="text-sm">This is a success message.</p>
  </div>
  <div class="alert alert-warning">
    <p class="font-medium">Warning!</p>
    <p class="text-sm">This is a warning message.</p>
  </div>
  <div class="alert alert-error">
    <p class="font-medium">Error!</p>
    <p class="text-sm">This is an error message.</p>
  </div>
  <div class="alert alert-info">
    <p class="font-medium">Info!</p>
    <p class="text-sm">This is an info message.</p>
  </div>
</div>

<!-- Navigation -->
<nav class="bg-white shadow">
  <div class="container">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <h1 class="text-xl font-bold text-gray-900">Logo</h1>
        </div>
      </div>
      <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
        <a href="#" class="nav-link nav-link-active">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Services</a>
        <a href="#" class="nav-link">Contact</a>
      </div>
    </div>
  </div>
</nav>`
        },
        {
          command: 'Enterprise Patterns',
          description: 'Enterprise-level Tailwind CSS patterns and architectures',
          usage: 'Scale Tailwind for large applications',
          example: `/* Enterprise Architecture Patterns */

/* 1. Multi-tenant Theming */
/* tailwind.config.js */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors for different tenants
        tenant: {
          blue: {
            50: '#eff6ff',
            500: '#3b82f6',
            600: '#2563eb',
            900: '#1e3a8a',
          },
          green: {
            50: '#ecfdf5',
            500: '#10b981',
            600: '#059669',
            900: '#064e3b',
          },
          purple: {
            50: '#f5f3ff',
            500: '#8b5cf6',
            600: '#7c3aed',
            900: '#4c1d95',
          },
        },
      },
    },
  plugins: [
    function({ addUtilities, theme }) {
      const tenantUtilities = {};
      const tenants = ['blue', 'green', 'purple'];
      
      tenants.forEach(tenant => {
        tenantUtilities[\`.tenant-\${tenant}\`] = {
          '--tenant-primary': theme(\`colors.tenant.\${tenant}.500\`),
          '--tenant-primary-hover': theme(\`colors.tenant.\${tenant}.600\`),
          '--tenant-primary-light': theme(\`colors.tenant.\${tenant}.50\`),
          '--tenant-primary-dark': theme(\`colors.tenant.\${tenant}.900\`),
        };
      });
      
      addUtilities(tenantUtilities);
    },
  ],
};

/* Tenant-specific CSS variables */
.tenant-blue {
  --tenant-primary: #3b82f6;
  --tenant-primary-hover: #2563eb;
}

.tenant-green {
  --tenant-primary: #10b981;
  --tenant-primary-hover: #059669;
}

/* Component with theming */
@layer components {
  .btn-tenant {
    @apply px-4 py-2 rounded-md font-medium transition-colors duration-200;
    background-color: var(--tenant-primary);
    color: white;
  }
  
  .btn-tenant:hover {
    background-color: var(--tenant-primary-hover);
  }
}

/* 2. Component Library Architecture */
/* components/buttons/index.ts */
export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-50 focus:ring-primary-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const classes = \`\${baseClasses} \${variants[variant]} \${sizes[size]} \${className}\`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

/* 3. Design Token Management */
/* tokens/colors.ts */
export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  semantic: {
    background: 'rgb(249 250 251)',
    foreground: 'rgb(17 24 39)',
    muted: 'rgb(243 244 246)',
    'muted-foreground': 'rgb(107 114 128)',
    border: 'rgb(229 231 235)',
    input: 'rgb(255 255 255)',
    ring: 'rgb(59 130 246)',
  },
};

/* tokens/spacing.ts */
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

/* 4. Responsive Design System */
/* hooks/useBreakpoint.ts */
import { useState, useEffect } from 'react';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');
  
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint('xs');
      else if (width < 768) setBreakpoint('sm');
      else if (width < 1024) setBreakpoint('md');
      else if (width < 1280) setBreakpoint('lg');
      else setBreakpoint('xl');
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
  return breakpoint;
};

/* 5. Component Composition */
/* components/Card.tsx */
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

export const Card = ({ children, className, variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-lg border-0',
  };
  
  return (
    <div className={cn('rounded-lg p-6', variants[variant], className)}>
      {children}
    </div>
  );
};

/* utils/cn.ts */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* 6. State Management Integration */
/* components/ThemeProvider.tsx */
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/* 7. Performance Monitoring */
/* utils/performance.ts */
export const measureRenderTime = (componentName: string) => {
  return (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
      useEffect(() => {
        const startTime = performance.now();
        return () => {
          const endTime = performance.now();
          console.log(\`\${componentName} render time: \${endTime - startTime}ms\`);
        };
      });
      
      return <WrappedComponent {...props} />;
    };
  };
};

/* 8. Testing Utilities */
/* utils/test-utils.tsx */
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

/* 9. Build Optimization */
/* webpack.config.js */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};

/* 10. Documentation Generation */
/* scripts/generate-docs.js */
const fs = require('fs');
const path = require('path');

const generateComponentDocs = () => {
  const componentsDir = path.join(__dirname, '../components');
  const docs = [];
  
  fs.readdirSync(componentsDir).forEach(file => {
    if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
      // Extract component documentation
      const componentName = file.replace('.tsx', '');
      const description = extractDescription(content);
      
      docs.push({
        name: componentName,
        description,
        props: extractProps(content),
        examples: extractExamples(content),
      });
    }
  });
  
  fs.writeFileSync(
    path.join(__dirname, '../docs/components.json'),
    JSON.stringify(docs, null, 2)
  );
};`
        },
      ],
    },
  ],
};


