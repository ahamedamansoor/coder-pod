import { Code } from 'lucide-react';

export const scssCheatsheet = {
  id: 'scss',
  name: 'SCSS',
  description: 'Master SCSS from basics to advanced features (Sass/SCSS complete guide)',
  icon: Code,
  color: 'from-pink-500 to-purple-600',
  category: 'programming',
  tags: ['scss', 'sass', 'css', 'styling', 'preprocessor'],
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with SCSS',
      commands: [
        {
          command: 'What is SCSS?',
          description: 'Understanding SCSS and its relationship to CSS',
          usage: 'SCSS is a CSS preprocessor that extends CSS with variables, nesting, and more',
          example: `SCSS Overview:
- Sassy CSS (SCSS) is a CSS preprocessor
- Superset of CSS syntax
- Adds programming features to CSS
- Compiles to standard CSS
- Part of the Sass ecosystem

Key Features:
- Variables for reusable values
- Nesting for better organization
- Mixins for reusable code blocks
- Functions for calculations
- Partials and imports for modular code
- Inheritance with @extend
- Operators for math and logic

Benefits:
- More maintainable CSS
- Reduced code duplication
- Better organization
- Dynamic styling capabilities
- Cross-browser compatibility helpers

File Extensions:
- .scss (Sassy CSS - CSS-like syntax)
- .sass (Indented syntax - no braces/semicolons)

Popular Tools:
- Node-sass / Dart Sass (compilers)
- Sass CLI (command line)
- Build tools (Webpack, Vite, etc.)`
        },
        {
          command: 'Installing SCSS',
          description: 'Install and set up SCSS in your project',
          usage: 'Install Sass compiler and set up build process',
          example: `# Install Sass globally
npm install -g sass

# Install Sass in project
npm install --save-dev sass

# Install Dart Sass (recommended)
npm install --save-dev sass

# Using Yarn
yarn add --dev sass

# Compile SCSS to CSS (CLI)
sass input.scss output.css

# Watch for changes
sass --watch input.scss:output.css

# Compile with source maps
sass --watch --source-map input.scss:output.css

# Compile entire directory
sass --watch scss:css

# Package.json scripts
{
  "scripts": {
    "build-css": "sass scss/main.scss dist/main.css",
    "watch-css": "sass --watch scss:dist"
  }
}

# VS Code Extensions
- Live Sass Compiler
- Sass
- SCSS IntelliSense`
        },
        {
          command: 'Basic SCSS Syntax',
          description: 'Understanding SCSS syntax differences from CSS',
          usage: 'SCSS is CSS-compatible with additional features',
          example: `/* Regular CSS works perfectly in SCSS */
.container {
  display: flex;
  margin: 20px;
}

/* SCSS adds variables */
${'$'}primary-color: #3498db;
${'$'}font-size: 16px;

.button {
  background-color: ${'$'}primary-color;
  font-size: ${'$'}font-size;
}

/* Nesting (SCSS feature) */
.nav {
  background: #333;
  
  ul {
    list-style: none;
    
    li {
      display: inline-block;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

/* Compiled CSS output */
.nav { background: #333; }
.nav ul { list-style: none; }
.nav ul li { display: inline-block; }
.nav ul li a { color: white; text-decoration: none; }
.nav ul li a:hover { text-decoration: underline; }`
        },
        {
          command: 'SCSS File Structure',
          description: 'Organizing SCSS files with partials and imports',
          usage: 'Use partials (underscore prefix) and @import for modular organization',
          example: `/* Main SCSS file structure */
scss/
├── main.scss              # Main entry point
├── _variables.scss        # Variables
├── _mixins.scss          # Mixins
├── _functions.scss       # Functions
├── _base.scss            # Base styles
├── _layout.scss          # Layout components
├── _components.scss      # Component styles
├── _utilities.scss       # Utility classes
└── _themes.scss          # Theme variations

/* main.scss - Import all partials */
// Abstracts
@import 'variables';
@import 'mixins';
@import 'functions';

// Base
@import 'base';

// Layout
@import 'layout';

// Components
@import 'components';

// Utilities
@import 'utilities';

// Themes
@import 'themes';

/* Note: Partial files start with _ */
/* Import without the _ and .scss extension */`
        },
      ],
    },
    {
      title: 'SCSS Variables',
      commands: [
        {
          command: 'Variable Declaration',
          description: 'Creating and using variables in SCSS',
          usage: 'Use $ prefix to declare variables for reusable values',
          example: `/* Variable declarations */
${'$'}primary-color: #3498db;
${'$'}secondary-color: #2ecc71;
${'$'}font-family: 'Helvetica', sans-serif;
${'$'}base-font-size: 16px;
${'$'}border-radius: 4px;
${'$'}spacing-unit: 8px;

/* Using variables */
.header {
  background-color: ${'$'}primary-color;
  font-family: ${'$'}font-family;
  padding: ${'$'}spacing-unit * 2;
}

.button {
  background-color: ${'$'}secondary-color;
  border-radius: ${'$'}border-radius;
  font-size: ${'$'}base-font-size;
}

/* Variable scope */
${'$'}global-color: blue;

.container {
  ${'$'}local-color: red;  // Local variable
  
  .box {
    color: ${'$'}local-color;  // Works
    background: ${'$'}global-color; // Works
  }
}

// .other { color: ${'$'}local-color; } // Error: ${'$'}local-color not in scope`
        },
        {
          command: 'Variable Types',
          description: 'Different types of variables in SCSS',
          usage: 'Variables can hold various data types',
          example: `/* String variables */
${'$'}font-path: '/fonts/';
${'$'}image-url: 'https://example.com/images/';
${'$'}font-name: 'Open Sans';

/* Number variables */
${'$'}base-size: 16;
${'$'}scale: 1.5;
${'$'}opacity: 0.8;

/* Color variables */
${'$'}white: #ffffff;
${'$'}black: #000000;
${'$'}primary: #3498db;
${'$'}secondary: #2ecc71;

/* Boolean variables */
${'$'}enable-shadows: true;
${'$'}use-flexbox: false;

/* List variables */
${'$'}font-sizes: 12px, 14px, 16px, 18px, 24px;
${'$'}breakpoints: (small: 576px, medium: 768px, large: 992px);
${'$'}colors: (primary: #3498db, secondary: #2ecc71, success: #27ae60);

/* Map variables */
${'$'}grid-columns: 12;
${'$'}container-max-widths: (sm: 540px, md: 720px, lg: 960px, xl: 1140px);

/* Using different variable types */
@font-face {
  font-family: ${'$'}font-name;
  src: url('#{${'$'}font-path}#{${'$'}font-name}.woff2') format('woff2');
}

.hero {
  font-size: nth(${'$'}font-sizes, 4); // 18px
  background: map-get(${'$'}colors, primary);
  @if ${'$'}enable-shadows {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}`
        },
        {
          command: 'Variable Interpolation',
          description: 'Using variables in selectors and property names',
          usage: 'Use #{} to interpolate variables in strings',
          example: `/* Variable interpolation in selectors */
${'$'}prefix: 'user-';
${'$'}element: 'card';

.#{${'$'}prefix}#{${'$'}element} {
  padding: 20px;
  border: 1px solid #ddd;
}

/* Compiled CSS: */
/* .user-card { padding: 20px; border: 1px solid #ddd; } */

/* Interpolation in properties */
${'$'}property: 'margin';
${'$'}side: 'top';

.box {
  #{${'$'}property}-#{${'$'}side}: 10px;
}

/* Compiled CSS: */
/* .box { margin-top: 10px; } */

/* Interpolation in URLs */
${'$'}image-path: '/assets/images/';
${'$'}filename: 'hero';

.hero {
  background-image: url('#{${'$'}image-path}#{${'$'}filename}.jpg');
}

/* Interpolation with functions */
${'$'}breakpoints: (sm: 576px, md: 768px, lg: 992px);

@each ${'$'}name, ${'$'}size in ${'$'}breakpoints {
  @media (min-width: ${'$'}size) {
    .container-#{${'$'}name} {
      max-width: ${'$'}size;
    }
  }
}`
        },
        {
          command: 'Variable Flags',
          description: 'Using !default, !global, and !important flags',
          usage: 'Control variable behavior with special flags',
          example: `/* !default flag - set default value if not already set */
${'$'}primary-color: #3498db !default;
${'$'}secondary-color: #2ecc71 !default;

// If ${'$'}primary-color is already defined, this won't override it
${'$'}primary-color: #e74c3c !default; // Won't change if already set

/* !global flag - create global variable from within scope */
.container {
  ${'$'}global-var: #333 !global;
  ${'$'}local-var: #666;
}

// ${'$'}global-var is now available globally
// ${'$'}local-var is only available inside .container

/* !important flag - add !important to CSS declaration */
${'$'}important-color: red !important;

.error {
  color: ${'$'}important-color;
}

/* Compiled CSS: */
/* .error { color: red !important; } */

/* Combining flags */
${'$'}theme-color: blue !default !global;

/* Practical example - configurable defaults */
// _config.scss
${'$'}font-size-base: 16px !default;
${'$'}line-height-base: 1.5 !default;
${'$'}border-radius-base: 4px !default;

// User can override these before importing
// _user-variables.scss
${'$'}font-size-base: 18px;

// _styles.scss
@import 'config';
@import 'user-variables';
@import 'components';`
        },
      ],
    },
    {
      title: 'Nesting in SCSS',
      commands: [
        {
          command: 'Basic Nesting',
          description: 'Nesting CSS selectors to follow HTML structure',
          usage: 'Nest selectors to create more readable and maintainable code',
          example: `/* Basic nesting example */
.nav {
  background: #333;
  padding: 1rem;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      margin-right: 1rem;
      
      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem;
        
        &:hover {
          background: #555;
          border-radius: 4px;
        }
      }
    }
  }
}

/* Compiled CSS */
.nav { background: #333; padding: 1rem; }
.nav ul { list-style: none; margin: 0; padding: 0; }
.nav ul li { display: inline-block; margin-right: 1rem; }
.nav ul li a { color: white; text-decoration: none; padding: 0.5rem; }
.nav ul li a:hover { background: #555; border-radius: 4px; }`
        },
        {
          command: 'Parent Selector (&)',
          description: 'Using the parent selector for pseudo-classes and combinators',
          usage: 'Use & to reference the parent selector',
          example: `/* Parent selector with pseudo-classes */
.button {
  background: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  
  &:hover {
    background: #2980b9;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:focus {
    outline: 2px solid #3498db;
  }
  
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

/* Parent selector with pseudo-elements */
.card {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

/* Parent selector for compound selectors */
.sidebar {
  width: 250px;
  
  &.collapsed {
    width: 60px;
  }
  
  &.dark-theme {
    background: #2c3e50;
    color: white;
  }
}`
        },
        {
          command: 'Nested Properties',
          description: 'Nesting CSS properties with namespaces',
          usage: 'Group related properties together',
          example: `/* Nested properties for namespaces */
.button {
  // Font properties
  font: {
    family: 'Helvetica', sans-serif;
    size: 16px;
    weight: bold;
  }
  
  // Margin properties
  margin: {
    top: 10px;
    right: 20px;
    bottom: 10px;
    left: 20px;
  }
  
  // Border properties
  border: {
    width: 2px;
    style: solid;
    color: #3498db;
    radius: 4px;
  }
  
  // Background properties
  background: {
    color: #3498db;
    image: url('bg.jpg');
    repeat: no-repeat;
    position: center;
    size: cover;
  }
  
  // Animation properties
  animation: {
    name: fadeIn;
    duration: 0.3s;
    timing-function: ease-in-out;
    delay: 0s;
    iteration-count: 1;
    direction: normal;
    fill-mode: forwards;
  }
}

/* Compiled CSS */
.button {
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: #3498db;
  border-radius: 4px;
  background-color: #3498db;
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}`
        },
        {
          command: 'Advanced Nesting',
          description: 'Complex nesting patterns and best practices',
          usage: 'Advanced nesting techniques for maintainable code',
          example: `/* Avoid over-nesting - limit to 3 levels max */
// BAD - Too deeply nested
.nav {
  ul {
    li {
      a {
        span {
          // Too deep!
        }
      }
    }
  }
}

// GOOD - Shallow nesting
.nav {
  ul {
    li { }
  }
  
  a { 
    span { }
  }
}

/* Nesting with BEM methodology */
.card {
  padding: 20px;
  border: 1px solid #ddd;
  
  &__header {
    font-size: 1.2em;
    font-weight: bold;
    
    &--highlighted {
      color: #3498db;
    }
  }
  
  &__content {
    margin-top: 10px;
  }
  
  &__footer {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
  
  &--featured {
    border-color: #3498db;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
}

/* Nesting with media queries */
.container {
  width: 100%;
  padding: 20px;
  
  @media (min-width: 768px) {
    width: 750px;
    margin: 0 auto;
    
    &.wide {
      width: 100%;
      max-width: 1200px;
    }
  }
  
  @media (min-width: 1200px) {
    width: 1170px;
  }
}`
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'SCSS Mixins',
      commands: [
        {
          command: 'Basic Mixins',
          description: 'Creating reusable code blocks with mixins',
          usage: 'Use @mixin to define reusable styles and @include to use them',
          example: `/* Basic mixin definition */
@mixin button-style {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Using the mixin */
.btn-primary {
  @include button-style;
  background: #3498db;
  color: white;
}

.btn-secondary {
  @include button-style;
  background: #95a5a6;
  color: white;
}

/* Mixin with parameters */
@mixin border-radius(${'$'}radius: 4px) {
  border-radius: ${'$'}radius;
  -webkit-border-radius: ${'$'}radius;
  -moz-border-radius: ${'$'}radius;
}

.box {
  @include border-radius(8px);
}

.rounded {
  @include border-radius(50%);
}

/* Mixin with multiple parameters */
@mixin gradient(${'$'}start-color, ${'$'}end-color, ${'$'}direction: to right) {
  background: ${'$'}start-color;
  background: linear-gradient(${'$'}direction, ${'$'}start-color, ${'$'}end-color);
}

.header {
  @include gradient(#3498db, #2c3e50);
}`
        },
        {
          command: 'Advanced Mixins',
          description: 'Complex mixins with conditional logic and multiple parameters',
          usage: 'Create powerful mixins with @if, @each, and other control directives',
          example: `/* Mixin with conditional logic */
@mixin button-size(${'$'}size) {
  @if ${'$'}size == small {
    padding: 6px 12px;
    font-size: 12px;
  } @else if ${'$'}size == medium {
    padding: 10px 20px;
    font-size: 16px;
  } @else if ${'$'}size == large {
    padding: 14px 28px;
    font-size: 18px;
  } @else {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn {
  @include button-size(small);
}

/* Mixin with variable arguments */
@mixin box-shadow(${'$'}shadows...) {
  box-shadow: ${'$'}shadows;
  -webkit-box-shadow: ${'$'}shadows;
  -moz-box-shadow: ${'$'}shadows;
}

.card {
  @include box-shadow(0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05));
}

/* Mixin with content blocks */
@mixin respond-to(${'$'}breakpoint) {
  @if ${'$'}breakpoint == small {
    @media (max-width: 576px) { @content; }
  } @else if ${'$'}breakpoint == medium {
    @media (max-width: 768px) { @content; }
  } @else if ${'$'}breakpoint == large {
    @media (max-width: 992px) { @content; }
  }
}

.container {
  width: 1200px;
  
  @include respond-to(small) {
    width: 100%;
    padding: 0 15px;
  }
}`
        },
        {
          command: 'Practical Mixins',
          description: 'Commonly used mixins for everyday development',
          usage: 'Essential mixins for buttons, forms, layout, and utilities',
          example: `/* Button mixin */
@mixin button(${'$'}bg-color, ${'$'}text-color: white) {
  display: inline-block;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  background-color: ${'$'}bg-color;
  color: ${'$'}text-color;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: darken(${'$'}bg-color, 10%);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: 2px solid ${'$'}bg-color;
    outline-offset: 2px;
  }
}

/* Flexbox centering mixin */
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-center-column {
  @include flex-center;
  flex-direction: column;
}

/* Position mixin */
@mixin position(${'$'}position, ${'$'}top: null, ${'$'}right: null, ${'$'}bottom: null, ${'$'}left: null) {
  position: ${'$'}position;
  top: ${'$'}top;
  right: ${'$'}right;
  bottom: ${'$'}bottom;
  left: ${'$'}left;
}

/* Truncate text mixin */
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Clearfix mixin */
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

/* Usage examples */
.btn-primary {
  @include button(#3498db);
}

.hero {
  @include flex-center-column;
  min-height: 100vh;
}

.modal {
  @include position(absolute, 50%, null, null, 50%);
  transform: translate(-50%, -50%);
}`
        },
        {
          command: 'Mixin Libraries',
          description: 'Building and organizing mixin libraries',
          usage: 'Create organized mixin collections for different purposes',
          example: `/* _mixins.scss - Organized mixin library */

// Animation mixins
@mixin fadeIn(${'$'}duration: 0.3s) {
  opacity: 0;
  animation: fadeIn ${'$'}duration ease-in-out forwards;
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
}

@mixin slideInUp(${'$'}duration: 0.3s, ${'$'}distance: 20px) {
  opacity: 0;
  transform: translateY(${'$'}distance);
  animation: slideInUp ${'$'}duration ease-out forwards;
  
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// Responsive design mixins
@mixin mobile-only {
  @media (max-width: 767px) { @content; }
}

@mixin tablet-up {
  @media (min-width: 768px) { @content; }
}

@mixin desktop-up {
  @media (min-width: 1024px) { @content; }
}

// Typography mixins
@mixin heading(${'$'}size) {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0.5em;
  
  @if ${'$'}size == h1 {
    font-size: 2.5rem;
  } @else if ${'$'}size == h2 {
    font-size: 2rem;
  } @else if ${'$'}size == h3 {
    font-size: 1.5rem;
  } @else if ${'$'}size == h4 {
    font-size: 1.25rem;
  } @else if ${'$'}size == h5 {
    font-size: 1.125rem;
  } @else if ${'$'}size == h6 {
    font-size: 1rem;
  }
}

// Spacing mixins
@mixin spacing(${'$'}property, ${'$'}size) {
  ${'$'}spacing-map: (
    xs: 0.25rem,
    sm: 0.5rem,
    md: 1rem,
    lg: 1.5rem,
    xl: 2rem,
    xxl: 3rem
  );
  
  #{${'$'}property}: map-get(${'$'}spacing-map, ${'$'}size);
}

@mixin margin(${'$'}size) { @include spacing(margin, ${'$'}size); }
@mixin padding(${'$'}size) { @include spacing(padding, ${'$'}size); }
@mixin margin-y(${'$'}size) { 
  @include spacing(margin-top, ${'$'}size);
  @include spacing(margin-bottom, ${'$'}size);
}`
        },
      ],
    },
    {
      title: 'SCSS Functions',
      commands: [
        {
          command: 'Built-in Functions',
          description: 'Using SCSS built-in functions for colors, strings, and numbers',
          usage: 'Leverage powerful built-in functions for dynamic styling',
          example: `/* Color functions */
${'$'}primary-color: #3498db;
${'$'}secondary-color: #2ecc71;

// Lighten and darken
.lighter {
  background: lighten(${'$'}primary-color, 20%);
}
.darker {
  background: darken(${'$'}primary-color, 20%);
}

// Saturate and desaturate
.saturated {
  background: saturate(${'$'}secondary-color, 30%);
}
.desaturated {
  background: desaturate(${'$'}secondary-color, 30%);
}

// Adjust hue
.hue-rotate {
  background: adjust-hue(${'$'}primary-color, 60deg);
}

// Mix colors
.mixed {
  background: mix(${'$'}primary-color, ${'$'}secondary-color, 50%);
}

// Get color components
.red-component {
  color: red(${'$'}primary-color); // Returns 52
}
.green-component {
  color: green(${'$'}primary-color); // Returns 152
}
.blue-component {
  color: blue(${'$'}primary-color); // Returns 219
}

/* String functions */
${'$'}font-family: 'Helvetica Neue';
${'$'}class-prefix: 'btn-';

// String manipulation
.uppercase {
  font-family: to-upper-case(${'$'}font-family);
}
.lowercase {
  font-family: to-lower-case(${'$'}font-family);
}

// String length
.length-check {
  content: str-length(${'$'}class-prefix);
}

// String insertion
.inserted {
  content: str-insert('Hello World', ' Beautiful', 5);
}

// String index
.index-position {
  content: str-index(${'$'}font-family, 'Neue');
}

/* Number functions */
${'$'}base-size: 16;
${'$'}scale: 1.5;

// Absolute value
.absolute {
  margin: abs(-10px);
}

// Rounding
.rounded {
  font-size: round(${'$'}base-size * ${'$'}scale);
}
.ceiled {
  font-size: ceil(${'$'}base-size * ${'$'}scale);
}
.floored {
  font-size: floor(${'$'}base-size * ${'$'}scale);
}

// Percentage
.percentage {
  width: percentage(0.75); // 75%
}

// Min and Max
.responsive-size {
  font-size: min(16px, 4vw);
  width: max(200px, 50%);
}`
        },
        {
          command: 'Custom Functions',
          description: 'Creating your own SCSS functions with @function',
          usage: 'Define reusable functions for calculations and logic',
          example: `/* Simple custom functions */
@function strip-unit(${'$'}number) {
  @if type-of(${'$'}number) == 'number' and not unitless(${'$'}number) {
    @return ${'$'}number / (${'$'}number * 0 + 1);
  }
  @return ${'$'}number;
}

@function rem(${'$'}pixels, ${'$'}context: 16) {
  @return #{strip-unit(${'$'}pixels) / strip-unit(${'$'}context)}rem;
}

@function em(${'$'}pixels, ${'$'}context: 16) {
  @return #{strip-unit(${'$'}pixels) / strip-unit(${'$'}context)}em;
}

/* Color manipulation functions */
@function get-contrast(${'$'}color) {
  @if (lightness(${'$'}color) > 60) {
    @return #000;
  } @else {
    @return #fff;
  }
}

@function palette(${'$'}base-color, ${'$'}type: 'primary') {
  @if ${'$'}type == 'primary' {
    @return ${'$'}base-color;
  } @else if ${'$'}type == 'secondary' {
    @return lighten(${'$'}base-color, 20%);
  } @else if ${'$'}type == 'tertiary' {
    @return darken(${'$'}base-color, 20%);
  } @else if ${'$'}type == 'complement' {
    @return complement(${'$'}base-color);
  }
}

/* Spacing functions */
@function spacing(${'$'}multiplier: 1) {
  @return ${'$'}multiplier * 8px;
}

@function grid-width(${'$'}columns, ${'$'}total-columns: 12) {
  @return percentage(${'$'}columns / ${'$'}total-columns);
}

/* Typography functions */
@function line-height(${'$'}font-size, ${'$'}line-height: 1.5) {
  @return ${'$'}font-size * ${'$'}line-height;
}

@function calculate-rem(${'$'}target, ${'$'}context: 16px) {
  @return (${'$'}target / ${'$'}context) * 1rem;
}

/* Using custom functions */
.header {
  font-size: rem(24px);
  line-height: line-height(rem(24px), 1.4);
  padding: spacing(2);
}

.button {
  background: palette(#3498db, 'primary');
  color: get-contrast(palette(#3498db, 'primary'));
  width: grid-width(6);
}`
        },
        {
          command: 'Advanced Functions',
          description: 'Complex functions with loops and conditional logic',
          usage: 'Create sophisticated functions for dynamic styling',
          example: `/* Function with loops and maps */
${'$'}breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

@function breakpoint-next(${'$'}name, ${'$'}breakpoints: ${'$'}breakpoints, ${'$'}breakpoint-names: map-keys(${'$'}breakpoints)) {
  ${'$'}n: index(${'$'}breakpoint-names, ${'$'}name);
  @return if(${'$'}n < length(${'$'}breakpoint-names), nth(${'$'}breakpoint-names, ${'$'}n + 1), null);
}

@function breakpoint-min(${'$'}name, ${'$'}breakpoints: ${'$'}breakpoints) {
  ${'$'}min: map-get(${'$'}breakpoints, ${'$'}name);
  @return if(${'$'}min != 0, ${'$'}min, null);
}

@function breakpoint-max(${'$'}name, ${'$'}breakpoints: ${'$'}breakpoints) {
  ${'$'}next: breakpoint-next(${'$'}name, ${'$'}breakpoints);
  @return if(${'$'}next, breakpoint-min(${'$'}next, ${'$'}breakpoints) - 0.02px, null);
}

/* Color system functions */
${'$'}color-palette: (
  primary: #3498db,
  secondary: #2ecc71,
  success: #27ae60,
  danger: #e74c3c,
  warning: #f39c12,
  info: #17a2b8,
  light: #ecf0f1,
  dark: #2c3e50
);

@function color(${'$'}name, ${'$'}variant: 'base') {
  ${'$'}base-color: map-get(${'$'}color-palette, ${'$'}name);
  
  @if not ${'$'}base-color {
    @error 'Color "#{${'$'}name}" not found in palette.';
  }
  
  @if ${'$'}variant == 'base' {
    @return ${'$'}base-color;
  } @else if ${'$'}variant == 'light' {
    @return lighten(${'$'}base-color, 20%);
  } @else if ${'$'}variant == 'lighter' {
    @return lighten(${'$'}base-color, 40%);
  } @else if ${'$'}variant == 'dark' {
    @return darken(${'$'}base-color, 20%);
  } @else if ${'$'}variant == 'darker' {
    @return darken(${'$'}base-color, 40%);
  } @else {
    @return ${'$'}base-color;
  }
}

/* Mathematical functions */
@function golden-ratio(${'$'}value) {
  @return ${'$'}value * 1.618;
}

@function modular-scale(${'$'}value, ${'$'}ratio: 1.333, ${'$'}base: 16px) {
  @if ${'$'}value == 0 {
    @return ${'$'}base;
  } @else if ${'$'}value > 0 {
    @return ${'$'}base * pow(${'$'}ratio, ${'$'}value);
  } @else {
    @return ${'$'}base / pow(${'$'}ratio, abs(${'$'}value));
  }
}

/* Grid system functions */
@function container-width(${'$'}breakpoint) {
  ${'$'}container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
  );
  
  @return map-get(${'$'}container-max-widths, ${'$'}breakpoint);
}

@function gutter-width(${'$'}spacing: 1) {
  @return ${'$'}spacing * 1.5rem;
}`
        },
        {
          command: 'Function Libraries',
          description: 'Organizing and maintaining function libraries',
          usage: 'Create comprehensive function collections for different purposes',
          example: `/* _functions.scss - Complete function library */

// Unit conversion functions
@function strip-unit(${'$'}number) {
  @if type-of(${'$'}number) == 'number' and not unitless(${'$'}number) {
    @return ${'$'}number / (${'$'}number * 0 + 1);
  }
  @return ${'$'}number;
}

@function to-rem(${'$'}pixels, ${'$'}context: 16px) {
  @return #{strip-unit(${'$'}pixels) / strip-unit(${'$'}context)}rem;
}

@function to-em(${'$'}pixels, ${'$'}context: 16px) {
  @return #{strip-unit(${'$'}pixels) / strip-unit(${'$'}context)}em;
}

@function to-percent(${'$'}value) {
  @return percentage(${'$'}value);
}

// Color utility functions
@function tint(${'$'}color, ${'$'}percent) {
  @return mix(white, ${'$'}color, ${'$'}percent);
}

@function shade(${'$'}color, ${'$'}percent) {
  @return mix(black, ${'$'}color, ${'$'}percent);
}

@function readable-color(${'$'}color) {
  @if (lightness(${'$'}color) > 60) {
    @return #000;
  } @else {
    @return #fff;
  }
}

// Spacing functions
${'$'}spacing-base: 8px;

@function spacing(${'$'}multiplier: 1) {
  @return ${'$'}spacing-base * ${'$'}multiplier;
}

@function spacing-rem(${'$'}multiplier: 1) {
  @return to-rem(spacing(${'$'}multiplier));
}

// Typography functions
@function calculate-line-height(${'$'}font-size, ${'$'}line-height-ratio: 1.5) {
  @return ${'$'}font-size * ${'$'}line-height-ratio;
}

@function modular-scale(${'$'}step, ${'$'}ratio: 1.25, ${'$'}base: 16px) {
  @return ${'$'}base * pow(${'$'}ratio, ${'$'}step);
}

// Layout functions
@function grid-columns(${'$'}columns: 12, ${'$'}gutter: 30px) {
  ${'$'}column-width: calc((100% - #{(${'$'}columns - 1) * ${'$'}gutter}) / #{${'$'}columns});
  @return ${'$'}column-width;
}

@function container-max-width(${'$'}breakpoint) {
  ${'$'}containers: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
  );
  
  @return map-get(${'$'}containers, ${'$'}breakpoint);
}

// Animation functions
@function ease(${'$'}type: 'in-out') {
  ${'$'}easing-functions: (
    in: cubic-bezier(0.4, 0, 1, 1),
    out: cubic-bezier(0, 0, 0.2, 1),
    in-out: cubic-bezier(0.4, 0, 0.2, 1),
    bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
  );
  
  @return map-get(${'$'}easing-functions, ${'$'}type);
}

@function duration(${'$'}multiplier: 1) {
  ${'$'}base-duration: 0.3s;
  @return ${'$'}base-duration * ${'$'}multiplier;
}`
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced SCSS Features',
      commands: [
        {
          command: 'Control Directives',
          description: 'Using @if, @for, @each, and @while for conditional logic',
          usage: 'Create dynamic and conditional styles with control flow',
          example: `/* @if directive - conditional styles */
${'$'}theme: dark;
${'$'}enable-shadows: true;
${'$'}border-radius: 4px;

.button {
  padding: 10px 20px;
  border: none;
  
  @if ${'$'}theme == dark {
    background: #2c3e50;
    color: white;
  } @else if ${'$'}theme == light {
    background: white;
    color: #2c3e50;
    border: 1px solid #ddd;
  } @else {
    background: gray;
    color: white;
  }
  
  @if ${'$'}enable-shadows {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  @if ${'$'}border-radius > 0 {
    border-radius: ${'$'}border-radius;
  }
}

/* @for directive - generate styles in loops */
@for ${'$'}i from 1 through 6 {
  h#{${'$'}i} {
    font-size: 2em - ${'$'}i * 0.2em;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
}

/* Generate spacing utilities */
@for ${'$'}i from 0 through 5 {
  .m-#{${'$'}i} { margin: #{${'$'}i * 8}px; }
  .p-#{${'$'}i} { padding: #{${'$'}i * 8}px; }
  .mt-#{${'$'}i} { margin-top: #{${'$'}i * 8}px; }
  .mb-#{${'$'}i} { margin-bottom: #{${'$'}i * 8}px; }
}

/* @each directive - iterate over lists and maps */
${'$'}colors: primary, secondary, success, danger, warning, info;
${'$'}color-values: (
  primary: #3498db,
  secondary: #2ecc71,
  success: #27ae60,
  danger: #e74c3c,
  warning: #f39c12,
  info: #17a2b8
);

@each ${'$'}color in ${'$'}colors {
  .text-#{${'$'}color} {
    color: map-get(${'$'}color-values, ${'$'}color);
  }
  
  .bg-#{${'$'}color} {
    background-color: map-get(${'$'}color-values, ${'$'}color);
  }
  
  .btn-#{${'$'}color} {
    background-color: map-get(${'$'}color-values, ${'$'}color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
  }
}

/* @each with maps for more complex iterations */
${'$'}breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

@each ${'$'}name, ${'$'}value in ${'$'}breakpoints {
  @media (min-width: ${'$'}value) {
    .container-#{${'$'}name} {
      max-width: ${'$'}value;
    }
  }
}

/* @while directive - conditional loops */
${'$'}columns: 12;
${'$'}i: 1;

@while ${'$'}i <= ${'$'}columns {
  .col-#{${'$'}i} {
    width: percentage(${'$'}i / ${'$'}columns);
    float: left;
  }
  
  ${'$'}i: ${'$'}i + 1;
}`
        },
        {
          command: 'Lists and Maps',
          description: 'Working with complex data structures in SCSS',
          usage: 'Use lists and maps for organized, data-driven styling',
          example: `/* Working with lists */
${'$'}font-sizes: 12px, 14px, 16px, 18px, 24px, 32px;
${'$'}spacing-values: 0, 8px, 16px, 24px, 32px, 48px;

// List functions
${'$'}first-size: nth(${'$'}font-sizes, 1);     // 12px
${'$'}last-size: nth(${'$'}font-sizes, -1);    // 32px
${'$'}size-count: length(${'$'}font-sizes);    // 6
${'$'}joined-list: join(${'$'}font-sizes, ${'$'}spacing-values, comma);

// Generate classes from lists
@each ${'$'}size in ${'$'}font-sizes {
  .text-#{index(${'$'}font-sizes, ${'$'}size) - 1} {
    font-size: ${'$'}size;
  }
}

/* Working with maps */
${'$'}colors: (
  primary: #3498db,
  secondary: #2ecc71,
  success: #27ae60,
  danger: #e74c3c,
  warning: #f39c12,
  info: #17a2b8,
  light: #ecf0f1,
  dark: #2c3e50
);

${'$'}typography: (
  h1: (size: 2.5rem, weight: 700, line-height: 1.2),
  h2: (size: 2rem, weight: 600, line-height: 1.3),
  h3: (size: 1.5rem, weight: 600, line-height: 1.4),
  h4: (size: 1.25rem, weight: 500, line-height: 1.4),
  h5: (size: 1.125rem, weight: 500, line-height: 1.5),
  h6: (size: 1rem, weight: 400, line-height: 1.5)
);

// Map functions
${'$'}primary-color: map-get(${'$'}colors, primary);
${'$'}color-keys: map-keys(${'$'}colors);
${'$'}color-values: map-values(${'$'}colors);
${'$'}has-color: map-has-key(${'$'}colors, primary);  // true
${'$'}color-merged: map-merge(${'$'}colors, (custom: #ff6b6b));

// Remove from map
${'$'}colors-without-light: map-remove(${'$'}colors, light);

// Generate styles from maps
@each ${'$'}name, ${'$'}props in ${'$'}typography {
  #{${'$'}name} {
    font-size: map-get(${'$'}props, size);
    font-weight: map-get(${'$'}props, weight);
    line-height: map-get(${'$'}props, line-height);
    margin-bottom: 0.5em;
  }
}

/* Nested maps for complex data */
${'$'}grid-system: (
  columns: 12,
  gutters: (
    xs: 15px,
    sm: 20px,
    md: 25px,
    lg: 30px,
    xl: 35px
  ),
  containers: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px
  )
);

@each ${'$'}breakpoint, ${'$'}max-width in map-get(${'$'}grid-system, containers) {
  @media (min-width: ${'$'}max-width) {
    .container {
      max-width: ${'$'}max-width;
    }
  }
}`
        },
        {
          command: 'Module System',
          description: 'Using SCSS modules and @use for better organization',
          usage: 'Modern SCSS module system with @use and @forward',
          example: `/* _variables.scss - Module with variables */
${'$'}primary-color: #3498db !default;
${'$'}secondary-color: #2ecc71 !default;
${'$'}success-color: #27ae60 !default;
${'$'}danger-color: #e74c3c !default;

${'$'}font-family-base: 'Helvetica Neue', Helvetica, Arial, sans-serif !default;
${'$'}font-size-base: 16px !default;
${'$'}line-height-base: 1.5 !default;

${'$'}border-radius: 4px !default;
${'$'}box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !default;

${'$'}spacing-unit: 8px !default;

/* _mixins.scss - Module with mixins */
@mixin button-base {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: ${'$'}border-radius;
  font-size: ${'$'}font-size-base;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive-grid(${'$'}columns: 12, ${'$'}gutter: 20px) {
  display: grid;
  grid-template-columns: repeat(${'$'}columns, 1fr);
  gap: ${'$'}gutter;
}

/* _functions.scss - Module with functions */
@function strip-unit(${'$'}number) {
  @if type-of(${'$'}number) == 'number' and not unitless(${'$'}number) {
    @return ${'$'}number / (${'$'}number * 0 + 1);
  }
  @return ${'$'}number;
}

@function to-rem(${'$'}pixels, ${'$'}context: 16px) {
  @return #{strip-unit(${'$'}pixels) / strip-unit(${'$'}context)}rem;
}

@function spacing(${'$'}multiplier: 1) {
  @return ${'$'}spacing-unit * ${'$'}multiplier;
}

/* main.scss - Using @use to import modules */
@use 'variables' as *;
@use 'mixins' as m;
@use 'functions' as f;

// Using variables with namespace
.header {
  background-color: ${'$'}primary-color;
  font-family: ${'$'}font-family-base;
  padding: f.spacing(2);
}

// Using mixins with namespace
.button {
  @include m.button-base;
  background-color: ${'$'}primary-color;
  color: white;
  
  &:hover {
    background-color: darken(${'$'}primary-color, 10%);
  }
}

.hero {
  @include m.flex-center;
  min-height: 100vh;
}

.grid {
  @include m.responsive-grid(3, 20px);
}

/* _utilities.scss - Using @forward to expose modules */
@forward 'variables';
@forward 'mixins';
@forward 'functions';

// styles.scss - Import utilities
@use 'utilities' as *;

.component {
  // Can now use all variables, mixins, and functions
  background: ${'$'}primary-color;
  @include button-base;
  padding: spacing(2);
}`
        },
        {
          command: 'Modern SCSS Features',
          description: 'Latest SCSS features and modern development practices',
          usage: 'Leverage cutting-edge SCSS capabilities',
          example: `/* CSS Custom Properties integration */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

.component {
  /* Use CSS custom properties */
  background-color: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) * 2);
  font-size: var(--font-size-base);
  
  /* SCSS variables still work */
  ${'$'}border-radius: 6px;
  border-radius: ${'$'}border-radius;
  
  /* Mixins work with CSS custom properties */
  @mixin hover-lift {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  @include hover-lift;
}

/* Built-in modules */
@use "sass:math";
@use "sass:color";
@use "sass:string";
@use "sass:list";

@function calculate-spacing(${'$'}base, ${'$'}multiplier) {
  @return math.div(${'$'}base, ${'$'}multiplier);
}

@function adjust-brightness(${'$'}color, ${'$'}amount) {
  @return color.adjust(${'$'}color, ${'$'}lightness: ${'$'}amount);
}

/* Modern CSS Grid with SCSS */
${'$'}grid-columns: 12;
${'$'}grid-gaps: (
  xs: 1rem,
  sm: 1.5rem,
  md: 2rem,
  lg: 2.5rem
);

.grid {
  display: grid;
  grid-template-columns: repeat(${'$'}grid-columns, 1fr);
  gap: map-get(${'$'}grid-gaps, md);
  
  @each ${'$'}breakpoint, ${'$'}gap in ${'$'}grid-gaps {
    @media (min-width: #{${'$'}breakpoint}) {
      gap: ${'$'}gap;
    }
  }
}

/* CSS-in-JS like patterns */
${'$'}component-variants: (
  primary: (
    background: #3498db,
    color: white,
    border: none
  ),
  secondary: (
    background: #6c757d,
    color: white,
    border: none
  ),
  outline: (
    background: transparent,
    color: #3498db,
    border: 2px solid #3498db
  )
);

@mixin component-variant(${'$'}variant) {
  ${'$'}styles: map-get(${'$'}component-variants, ${'$'}variant);
  
  @each ${'$'}property, ${'$'}value in ${'$'}styles {
    #{${'$'}property}: ${'$'}value;
  }
}

.button {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &--primary {
    @include component-variant(primary);
  }
  
  &--secondary {
    @include component-variant(secondary);
  }
  
  &--outline {
    @include component-variant(outline);
  }
}

/* Modern container queries (when supported) */
@container (min-width: 768px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}`
        },
      ],
    },
    {
      title: 'Real-world Applications',
      commands: [
        {
          command: 'Component Architecture',
          description: 'Building scalable component-based SCSS architecture',
          usage: 'Organize styles for large-scale applications',
          example: `/* Component-based SCSS architecture */

// abstracts/
// _variables.scss
// _mixins.scss
// _functions.scss
// _breakpoints.scss

// base/
// _reset.scss
// _typography.scss
// _utilities.scss

// components/
// _buttons.scss
// _cards.scss
// _forms.scss
// _navigation.scss
// _modals.scss
// _tables.scss

// layout/
// _grid.scss
// _header.scss
// _sidebar.scss
// _footer.scss

// pages/
// _home.scss
// _about.scss
// _contact.scss

// themes/
// _light.scss
// _dark.scss
// _variables.scss

/* _buttons.scss - Component example */
@use '../abstracts/variables' as *;
@use '../abstracts/mixins' as *;

.button {
  @include button-base;
  
  &--primary {
    @include button-variant(${'$'}primary-color, white);
  }
  
  &--secondary {
    @include button-variant(${'$'}secondary-color, white);
  }
  
  &--outline {
    @include button-outline(${'$'}primary-color);
  }
  
  &--ghost {
    @include button-ghost(${'$'}primary-color);
  }
  
  &--sm {
    @include button-size(small);
  }
  
  &--lg {
    @include button-size(large);
  }
  
  &--block {
    display: block;
    width: 100%;
  }
  
  &--loading {
    position: relative;
    color: transparent;
    pointer-events: none;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid currentColor;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spin 1s linear infinite;
    }
  }
}

/* _cards.scss - Complex component */
@use '../abstracts/variables' as *;
@use '../abstracts/mixins' as *;

.card {
  background: white;
  border-radius: ${'$'}border-radius-lg;
  box-shadow: ${'$'}box-shadow;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${'$'}box-shadow-lg;
  }
  
  &__header {
    padding: ${'$'}spacing-lg;
    border-bottom: 1px solid ${'$'}border-color;
    background: ${'$'}gray-50;
  }
  
  &__title {
    margin: 0;
    font-size: ${'$'}font-size-lg;
    font-weight: 600;
    color: ${'$'}text-primary;
  }
  
  &__subtitle {
    margin: ${'$'}spacing-xs 0 0 0;
    font-size: ${'$'}font-size-sm;
    color: ${'$'}text-secondary;
  }
  
  &__body {
    padding: ${'$'}spacing-lg;
  }
  
  &__text {
    line-height: 1.6;
    color: ${'$'}text-primary;
    
  &:last-child {
    margin-bottom: 0;
  }
  }
  
  &__footer {
    padding: ${'$'}spacing-lg;
    border-top: 1px solid ${'$'}border-color;
    background: ${'$'}gray-50;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__actions {
    display: flex;
    gap: ${'$'}spacing-sm;
  }
  
  &--interactive {
    cursor: pointer;
    
    &:active {
      transform: translateY(-2px);
    }
  }
  
  &--featured {
    border: 2px solid ${'$'}primary-color;
    
    .card__header {
      background: linear-gradient(135deg, ${'$'}primary-color, ${'$'}primary-light);
      color: white;
      
      .card__title,
      .card__subtitle {
        color: white;
      }
    }
  }
  
  &--dark {
    background: ${'$'}gray-800;
    color: white;
    
    .card__header,
    .card__footer {
      background: ${'$'}gray-700;
      border-color: ${'$'}gray-600;
    }
    
    .card__title,
    .card__text {
      color: white;
    }
    
    .card__subtitle {
      color: ${'$'}gray-300;
    }
  }
}`
        },
        {
          command: 'Design System Integration',
          description: 'Building SCSS design systems with tokens and components',
          usage: 'Create comprehensive design systems with SCSS',
          example: `/* Design tokens */
// _tokens.scss
${'$'}color-primary: #3498db;
${'$'}color-primary-light: #85c1e9;
${'$'}color-primary-dark: #2874a6;

${'$'}color-secondary: #2ecc71;
${'$'}color-secondary-light: #82e0aa;
${'$'}color-secondary-dark: #239b56;

${'$'}color-neutral-50: #f8f9fa;
${'$'}color-neutral-100: #e9ecef;
${'$'}color-neutral-200: #dee2e6;
${'$'}color-neutral-300: #ced4da;
${'$'}color-neutral-400: #adb5bd;
${'$'}color-neutral-500: #6c757d;
${'$'}color-neutral-600: #495057;
${'$'}color-neutral-700: #343a40;
${'$'}color-neutral-800: #212529;
${'$'}color-neutral-900: #000000;

${'$'}spacing-xs: 4px;
${'$'}spacing-sm: 8px;
${'$'}spacing-md: 16px;
${'$'}spacing-lg: 24px;
${'$'}spacing-xl: 32px;
${'$'}spacing-2xl: 48px;
${'$'}spacing-3xl: 64px;

${'$'}font-size-xs: 12px;
${'$'}font-size-sm: 14px;
${'$'}font-size-base: 16px;
${'$'}font-size-lg: 18px;
${'$'}font-size-xl: 20px;
${'$'}font-size-2xl: 24px;
${'$'}font-size-3xl: 30px;

${'$'}border-radius-sm: 2px;
${'$'}border-radius-md: 4px;
${'$'}border-radius-lg: 8px;
${'$'}border-radius-xl: 12px;
${'$'}border-radius-2xl: 16px;

${'$'}shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
${'$'}shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
${'$'}shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
${'$'}shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

/* _semantic-tokens.scss */
${'$'}color-background-primary: ${'$'}color-neutral-50;
${'$'}color-background-secondary: ${'$'}color-neutral-100;
${'$'}color-background-tertiary: white;

${'$'}color-text-primary: ${'$'}color-neutral-900;
${'$'}color-text-secondary: ${'$'}color-neutral-600;
${'$'}color-text-tertiary: ${'$'}color-neutral-500;
${'$'}color-text-inverse: white;

${'$'}color-border-primary: ${'$'}color-neutral-200;
${'$'}color-border-secondary: ${'$'}color-neutral-300;

${'$'}color-success: #27ae60;
${'$'}color-warning: #f39c12;
${'$'}color-error: #e74c3c;
${'$'}color-info: #3498db;

/* _component-tokens.scss */
${'$'}button-height-sm: 32px;
${'$'}button-height-md: 40px;
${'$'}button-height-lg: 48px;

${'$'}button-padding-x-sm: 12px;
${'$'}button-padding-x-md: 16px;
${'$'}button-padding-x-lg: 20px;

${'$'}button-font-size-sm: ${'$'}font-size-sm;
${'$'}button-font-size-md: ${'$'}font-size-base;
${'$'}button-font-size-lg: ${'$'}font-size-lg;

${'$'}card-padding: ${'$'}spacing-lg;
${'$'}card-border-radius: ${'$'}border-radius-lg;
${'$'}card-shadow: ${'$'}shadow-md;

${'$'}input-height: 40px;
${'$'}input-padding-x: ${'$'}spacing-md;
${'$'}input-border-radius: ${'$'}border-radius-md;
${'$'}input-border-color: ${'$'}color-border-primary;

/* _design-system.scss - Main design system file */
@use 'tokens' as *;
@use 'semantic-tokens' as *;
@use 'component-tokens' as *;

// Design system functions
@function color(${'$'}name, ${'$'}variant: base) {
  ${'$'}color-map: (
    primary: (
      base: ${'$'}color-primary,
      light: ${'$'}color-primary-light,
      dark: ${'$'}color-primary-dark
    ),
    secondary: (
      base: ${'$'}color-secondary,
      light: ${'$'}color-secondary-light,
      dark: ${'$'}color-secondary-dark
    ),
    success: (base: ${'$'}color-success),
    warning: (base: ${'$'}color-warning),
    error: (base: ${'$'}color-error),
    info: (base: ${'$'}color-info)
  );
  
  ${'$'}color-set: map-get(${'$'}color-map, ${'$'}name);
  @if ${'$'}color-set {
    @return map-get(${'$'}color-set, ${'$'}variant);
  } @else {
    @return map-get(${'$'}color-map, ${'$'}name);
  }
}

@function spacing(${'$'}size) {
  ${'$'}spacing-map: (
    xs: ${'$'}spacing-xs,
    sm: ${'$'}spacing-sm,
    md: ${'$'}spacing-md,
    lg: ${'$'}spacing-lg,
    xl: ${'$'}spacing-xl,
    2xl: ${'$'}spacing-2xl,
    3xl: ${'$'}spacing-3xl
  );
  
  @return map-get(${'$'}spacing-map, ${'$'}size);
}

@function font-size(${'$'}size) {
  ${'$'}font-size-map: (
    xs: ${'$'}font-size-xs,
    sm: ${'$'}font-size-sm,
    base: ${'$'}font-size-base,
    lg: ${'$'}font-size-lg,
    xl: ${'$'}font-size-xl,
    2xl: ${'$'}font-size-2xl,
    3xl: ${'$'}font-size-3xl
  );
  
  @return map-get(${'$'}font-size-map, ${'$'}size);
}

// Design system mixins
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${'$'}input-border-radius;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  
  &:focus {
    outline: 2px solid color(primary);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

@mixin button-size(${'$'}size) {
  @if ${'$'}size == sm {
    height: ${'$'}button-height-sm;
    padding: 0 ${'$'}button-padding-x-sm;
    font-size: ${'$'}button-font-size-sm;
  } @else if ${'$'}size == md {
    height: ${'$'}button-height-md;
    padding: 0 ${'$'}button-padding-x-md;
    font-size: ${'$'}button-font-size-md;
  } @else if ${'$'}size == lg {
    height: ${'$'}button-height-lg;
    padding: 0 ${'$'}button-padding-x-lg;
    font-size: ${'$'}button-font-size-lg;
  }
}

@mixin button-variant(${'$'}bg-color, ${'$'}text-color: white) {
  background-color: ${'$'}bg-color;
  color: ${'$'}text-color;
  
  &:hover:not(:disabled) {
    background-color: darken(${'$'}bg-color, 8%);
    transform: translateY(-1px);
    box-shadow: ${'$'}shadow-md;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: ${'$'}shadow-sm;
  }
}`
        },
        {
          command: 'Performance Optimization',
          description: 'Optimizing SCSS compilation and output CSS',
          usage: 'Best practices for fast builds and efficient CSS',
          example: `/* _performance-optimized.scss */

// Use @use instead of @import for better performance
@use 'variables' as *;
@use 'mixins' as *;
@use 'functions' as *;

// Minimize nesting depth (max 3 levels)
.header {
  background: ${'$'}primary-color;
  padding: ${'$'}spacing-unit * 2;
  
  .nav {
    display: flex;
    justify-content: space-between;
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  
  // Instead of deeply nested
  .menu {
    display: flex;
    list-style: none;
  }
  
  .menu-item {
    margin-left: ${'$'}spacing-unit;
  }
}

// Use placeholder selectors for extend patterns
%button-base {
  display: inline-block;
  padding: 12px 24px;
  border: none;
  border-radius: ${'$'}border-radius;
  font-size: ${'$'}font-size-base;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: ${'$'}transition-base;
}

// Generate utilities efficiently
@each ${'$'}breakpoint, ${'$'}value in ${'$'}breakpoints {
  @media (min-width: ${'$'}value) {
    @each ${'$'}prop, ${'$'}abbrev in (margin: m, padding: p) {
      @each ${'$'}size, ${'$'}length in ${'$'}spacers {
        .#{${'$'}abbrev}#{${'$'}breakpoint}-#{${'$'}size} {
          #{${'$'}prop}: ${'$'}length !important;
        }
        
        .#{${'$'}abbrev}x#{${'$'}breakpoint}-#{${'$'}size} {
          #{${'$'}prop}-left: ${'$'}length !important;
          #{${'$'}prop}-right: ${'$'}length !important;
        }
        
        .#{${'$'}abbrev}y#{${'$'}breakpoint}-#{${'$'}size} {
          #{${'$'}prop}-top: ${'$'}length !important;
          #{${'$'}prop}-bottom: ${'$'}length !important;
        }
      }
    }
  }
}

// Optimize color functions
@function theme-color(${'$'}color, ${'$'}variant: base) {
  @if ${'$'}variant == base {
    @return map-get(${'$'}theme-colors, ${'$'}color);
  } @else if ${'$'}variant == light {
    @return mix(white, map-get(${'$'}theme-colors, ${'$'}color), 20%);
  } @else if ${'$'}variant == dark {
    @return mix(black, map-get(${'$'}theme-colors, ${'$'}color), 20%);
  }
}

// Use efficient loops
${'$'}grid-columns: 12;
@for ${'$'}i from 1 through ${'$'}grid-columns {
  .col-#{${'$'}i} {
    flex: 0 0 percentage(${'$'}i / ${'$'}grid-columns);
    max-width: percentage(${'$'}i / ${'$'}grid-columns);
  }
}

/* Build optimizations */
// 1. Use Dart Sass (faster than Node Sass)
// 2. Enable source maps in development only
// 3. Use --no-source-map in production
// 4. Minimize @import usage
// 5. Use @use for modules
// 6. Avoid excessive nesting
// 7. Use placeholder selectors wisely
// 8. Optimize loops and iterations

/* sass --no-source-map --style=compressed input.scss output.css */`
        },
      ],
    },
  ],
};
