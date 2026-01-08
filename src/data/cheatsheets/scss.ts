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
          command: 'CSS in SCSS',
          description: 'Regular CSS works perfectly in SCSS',
          usage: 'SCSS is CSS-compatible',
          example: `/* Regular CSS works perfectly in SCSS */
.container {
  display: flex;
  margin: 20px;
}`
        },
        {
          command: 'SCSS Variables',
          description: 'Using variables in SCSS',
          usage: 'Declare variables with $ prefix',
          example: `/* SCSS adds variables */
${'$'}primary-color: #3498db;
${'$'}font-size: 16px;

.button {
  background-color: ${'$'}primary-color;
  font-size: ${'$'}font-size;
}`
        },
        {
          command: 'SCSS Nesting',
          description: 'Nesting selectors in SCSS',
          usage: 'Nest selectors to follow HTML structure',
          example: `/* Nesting (SCSS feature) */
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
}`
        },
        {
          command: 'Compiled CSS Output',
          description: 'How SCSS compiles to CSS',
          usage: 'SCSS compilation result',
          example: `/* Compiled CSS output */
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
${'$'}spacing-unit: 8px;`
        },
        {
          command: 'Using Variables',
          description: 'Applying variables in CSS properties',
          usage: 'Use variables in CSS property values',
          example: `/* Using variables */
.header {
  background-color: ${'$'}primary-color;
  font-family: ${'$'}font-family;
  padding: ${'$'}spacing-unit * 2;
}

.button {
  background-color: ${'$'}secondary-color;
  border-radius: ${'$'}border-radius;
  font-size: ${'$'}base-font-size;
}`
        },
        {
          command: 'Variable Scope',
          description: 'Understanding variable scope in SCSS',
          usage: 'Local vs global variable scope',
          example: `/* Variable scope */
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
          command: 'String Variables',
          description: 'String variables in SCSS',
          usage: 'Store text values',
          example: `/* String variables */
${'$'}font-path: '/fonts/';
${'$'}image-url: 'https://example.com/images/';
${'$'}font-name: 'Open Sans';

@font-face {
  font-family: ${'$'}font-name;
  src: url('#{${'$'}font-path}#{${'$'}font-name}.woff2') format('woff2');
}`
        },
        {
          command: 'Number Variables',
          description: 'Number variables in SCSS',
          usage: 'Store numeric values',
          example: `/* Number variables */
${'$'}base-size: 16;
${'$'}scale: 1.5;
${'$'}opacity: 0.8;

.responsive {
  font-size: round(${'$'}base-size * ${'$'}scale);
  opacity: ${'$'}opacity;
}`
        },
        {
          command: 'Color Variables',
          description: 'Color variables in SCSS',
          usage: 'Store color values',
          example: `/* Color variables */
${'$'}white: #ffffff;
${'$'}black: #000000;
${'$'}primary: #3498db;
${'$'}secondary: #2ecc71;

.header {
  background: ${'$'}primary;
  color: ${'$'}white;
}`
        },
        {
          command: 'Boolean Variables',
          description: 'Boolean variables in SCSS',
          usage: 'Store true/false values',
          example: `/* Boolean variables */
${'$'}enable-shadows: true;
${'$'}use-flexbox: false;

.component {
  @if ${'$'}enable-shadows {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}`
        },
        {
          command: 'List Variables',
          description: 'List and map variables in SCSS',
          usage: 'Store collections of values',
          example: `/* List variables */
${'$'}font-sizes: 12px, 14px, 16px, 18px, 24px;
${'$'}breakpoints: (small: 576px, medium: 768px, large: 992px);
${'$'}colors: (primary: #3498db, secondary: #2ecc71, success: #27ae60);

.hero {
  font-size: nth(${'$'}font-sizes, 4); // 18px
  background: map-get(${'$'}colors, primary);
}`
        },
        {
          command: 'Selector Interpolation',
          description: 'Using variables in selectors',
          usage: 'Interpolate variables in class names',
          example: `/* Variable interpolation in selectors */
${'$'}prefix: 'user-';
${'$'}element: 'card';

.#{${'$'}prefix}#{${'$'}element} {
  padding: 20px;
  border: 1px solid #ddd;
}

/* Compiled CSS: */
/* .user-card { padding: 20px; border: 1px solid #ddd; } */`
        },
        {
          command: 'Property Interpolation',
          description: 'Using variables in property names',
          usage: 'Interpolate variables in CSS properties',
          example: `/* Interpolation in properties */
${'$'}property: 'margin';
${'$'}side: 'top';

.box {
  #{${'$'}property}-#{${'$'}side}: 10px;
}

/* Compiled CSS: */
/* .box { margin-top: 10px; } */`
        },
        {
          command: 'URL Interpolation',
          description: 'Using variables in URLs',
          usage: 'Interpolate variables in url() functions',
          example: `/* Interpolation in URLs */
${'$'}image-path: '/assets/images/';
${'$'}filename: 'hero';

.hero {
  background-image: url('#{${'$'}image-path}#{${'$'}filename}.jpg');
}`
        },
        {
          command: 'Loop Interpolation',
          description: 'Using variables with loops',
          usage: 'Interpolate variables in @each loops',
          example: `/* Interpolation with functions */
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
          command: '!default Flag',
          description: 'Set default values for variables',
          usage: 'Use !default to set values only if not already defined',
          example: `/* !default flag - set default value if not already set */
${'$'}primary-color: #3498db !default;
${'$'}secondary-color: #2ecc71 !default;

// If ${'$'}primary-color is already defined, this won't override it
${'$'}primary-color: #e74c3c !default; // Won't change if already set`
        },
        {
          command: '!global Flag',
          description: 'Create global variables from within scope',
          usage: 'Use !global to make variables accessible outside scope',
          example: `/* !global flag - create global variable from within scope */
.container {
  ${'$'}global-var: #333 !global;
  ${'$'}local-var: #666;
}

// ${'$'}global-var is now available globally
// ${'$'}local-var is only available inside .container`
        },
        {
          command: '!important Flag',
          description: 'Add !important to CSS declarations',
          usage: 'Use !important flag in variable declarations',
          example: `/* !important flag - add !important to CSS declaration */
${'$'}important-color: red !important;

.error {
  color: ${'$'}important-color;
}

/* Compiled CSS: */
/* .error { color: red !important; } */`
        },
        {
          command: 'Combining Variable Flags',
          description: 'Use multiple flags together',
          usage: 'Combine !default and !global flags',
          example: `/* Combining flags */
${'$'}theme-color: blue !default !global;`
        },
        {
          command: 'Configurable Defaults',
          description: 'Practical example of configurable defaults',
          usage: 'Create themeable SCSS with default values',
          example: `/* Practical example - configurable defaults */
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
}`
        },
        {
          command: 'Compiled Nesting Output',
          description: 'How nested SCSS compiles to CSS',
          usage: 'See the CSS output of nested selectors',
          example: `/* Compiled CSS */
.nav { background: #333; padding: 1rem; }
.nav ul { list-style: none; margin: 0; padding: 0; }
.nav ul li { display: inline-block; margin-right: 1rem; }
.nav ul li a { color: white; text-decoration: none; padding: 0.5rem; }
.nav ul li a:hover { background: #555; border-radius: 4px; }`
        },
        {
          command: 'Parent Selector with Pseudo-classes',
          description: 'Using & with hover, active, focus states',
          usage: 'Reference parent selector for interactive states',
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
}`
        },
        {
          command: 'Parent Selector with Pseudo-elements',
          description: 'Using & with ::before and ::after',
          usage: 'Create pseudo-elements with parent selector',
          example: `/* Parent selector with pseudo-elements */
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
}`
        },
        {
          command: 'Parent Selector for Compound Selectors',
          description: 'Using & for modifier classes',
          usage: 'Create BEM-style modifiers',
          example: `/* Parent selector for compound selectors */
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
          command: 'Font Property Nesting',
          description: 'Nesting font properties',
          usage: 'Group font-related properties together',
          example: `/* Font properties */
.button {
  font: {
    family: 'Helvetica', sans-serif;
    size: 16px;
    weight: bold;
  }
}

/* Compiled CSS */
.button {
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  font-weight: bold;
}`
        },
        {
          command: 'Margin Property Nesting',
          description: 'Nesting margin properties',
          usage: 'Group margin properties together',
          example: `/* Margin properties */
.box {
  margin: {
    top: 10px;
    right: 20px;
    bottom: 10px;
    left: 20px;
  }
}

/* Compiled CSS */
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}`
        },
        {
          command: 'Border Property Nesting',
          description: 'Nesting border properties',
          usage: 'Group border properties together',
          example: `/* Border properties */
.card {
  border: {
    width: 2px;
    style: solid;
    color: #3498db;
    radius: 4px;
  }
}

/* Compiled CSS */
.card {
  border-width: 2px;
  border-style: solid;
  border-color: #3498db;
  border-radius: 4px;
}`
        },
        {
          command: 'Background Property Nesting',
          description: 'Nesting background properties',
          usage: 'Group background properties together',
          example: `/* Background properties */
.hero {
  background: {
    color: #3498db;
    image: url('bg.jpg');
    repeat: no-repeat;
    position: center;
    size: cover;
  }
}

/* Compiled CSS */
.hero {
  background-color: #3498db;
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}`
        },
        {
          command: 'Animation Property Nesting',
          description: 'Nesting animation properties',
          usage: 'Group animation properties together',
          example: `/* Animation properties */
.fade-in {
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
.fade-in {
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
          command: 'Avoid Over-Nesting',
          description: 'Best practices for nesting depth',
          usage: 'Limit nesting to 3 levels maximum',
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
}`
        },
        {
          command: 'BEM Nesting',
          description: 'Nesting with BEM methodology',
          usage: 'Use parent selector for BEM classes',
          example: `/* Nesting with BEM methodology */
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
}`
        },
        {
          command: 'Media Query Nesting',
          description: 'Nesting media queries within selectors',
          usage: 'Place responsive styles within components',
          example: `/* Nesting with media queries */
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
          command: 'Basic Mixin Definition',
          description: 'Creating simple mixins',
          usage: 'Use @mixin to define reusable styles',
          example: `/* Basic mixin definition */
@mixin button-style {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}`
        },
        {
          command: 'Using Mixins',
          description: 'Applying mixins with @include',
          usage: 'Use @include to apply mixin styles',
          example: `/* Using the mixin */
.btn-primary {
  @include button-style;
  background: #3498db;
  color: white;
}

.btn-secondary {
  @include button-style;
  background: #95a5a6;
  color: white;
}`
        },
        {
          command: 'Mixin with Parameters',
          description: 'Creating mixins with parameters',
          usage: 'Pass parameters to mixins for flexibility',
          example: `/* Mixin with parameters */
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
}`
        },
        {
          command: 'Mixin with Multiple Parameters',
          description: 'Creating mixins with multiple parameters',
          usage: 'Pass multiple parameters for complex styling',
          example: `/* Mixin with multiple parameters */
@mixin gradient(${'$'}start-color, ${'$'}end-color, ${'$'}direction: to right) {
  background: ${'$'}start-color;
  background: linear-gradient(${'$'}direction, ${'$'}start-color, ${'$'}end-color);
}

.header {
  @include gradient(#3498db, #2c3e50);
}`
        },
        {
          command: 'Mixin with Conditional Logic',
          description: 'Mixins with @if statements',
          usage: 'Create dynamic mixins with conditions',
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
}`
        },
        {
          command: 'Mixin with Variable Arguments',
          description: 'Mixins that accept unlimited arguments',
          usage: 'Use ... for variable arguments',
          example: `/* Mixin with variable arguments */
@mixin box-shadow(${'$'}shadows...) {
  box-shadow: ${'$'}shadows;
  -webkit-box-shadow: ${'$'}shadows;
  -moz-box-shadow: ${'$'}shadows;
}

.card {
  @include box-shadow(0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05));
}`
        },
        {
          command: 'Mixin with Content Blocks',
          description: 'Mixins that accept content blocks',
          usage: 'Use @content to pass styles into mixins',
          example: `/* Mixin with content blocks */
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
          command: 'Button Mixin',
          description: 'Complete button styling mixin',
          usage: 'Create reusable button styles',
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

.btn-primary {
  @include button(#3498db);
}`
        },
        {
          command: 'Flexbox Mixins',
          description: 'Flexbox layout mixins',
          usage: 'Common flexbox patterns',
          example: `/* Flexbox centering mixin */
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-center-column {
  @include flex-center;
  flex-direction: column;
}

.hero {
  @include flex-center-column;
  min-height: 100vh;
}`
        },
        {
          command: 'Position Mixin',
          description: 'Position utility mixin',
          usage: 'Set positioning with optional offsets',
          example: `/* Position mixin */
@mixin position(${'$'}position, ${'$'}top: null, ${'$'}right: null, ${'$'}bottom: null, ${'$'}left: null) {
  position: ${'$'}position;
  top: ${'$'}top;
  right: ${'$'}right;
  bottom: ${'$'}bottom;
  left: ${'$'}left;
}

.modal {
  @include position(absolute, 50%, null, null, 50%);
  transform: translate(-50%, -50%);
}`
        },
        {
          command: 'Text Utility Mixins',
          description: 'Text manipulation mixins',
          usage: 'Common text utilities',
          example: `/* Truncate text mixin */
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

.card-title {
  @include text-truncate;
}`
        },
        {
          command: 'Animation Mixins',
          description: 'Reusable animation mixins',
          usage: 'Common animation patterns',
          example: `// Animation mixins
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
}`
        },
        {
          command: 'Responsive Design Mixins',
          description: 'Media query mixins',
          usage: 'Reusable responsive breakpoints',
          example: `// Responsive design mixins
@mixin mobile-only {
  @media (max-width: 767px) { @content; }
}

@mixin tablet-up {
  @media (min-width: 768px) { @content; }
}

@mixin desktop-up {
  @media (min-width: 1024px) { @content; }
}`
        },
        {
          command: 'Typography Mixins',
          description: 'Typography utility mixins',
          usage: 'Reusable heading styles',
          example: `// Typography mixins
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
}`
        },
        {
          command: 'Spacing Mixins',
          description: 'Spacing utility mixins',
          usage: 'Consistent spacing system',
          example: `// Spacing mixins
${'$'}spacing-map: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem,
  xl: 2rem,
  xxl: 3rem
);

@mixin spacing(${'$'}property, ${'$'}size) {
  #{${'$'}property}: map-get(${'$'}spacing-map, ${'$'}size);
}

@mixin margin(${'$'}size) { @include spacing(margin, ${'$'}size); }
@mixin padding(${'$'}size) { @include spacing(padding, ${'$'}size); }`
        },
      ],
    },
    {
      title: 'SCSS Functions',
      commands: [
        {
          command: 'Color Functions',
          description: 'Built-in color manipulation functions',
          usage: 'Lighten, darken, saturate, desaturate colors',
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
}`
        },
        {
          command: 'Color Component Functions',
          description: 'Extract color components',
          usage: 'Get red, green, blue values from colors',
          example: `// Get color components
.red-component {
  color: red(${'$'}primary-color); // Returns 52
}
.green-component {
  color: green(${'$'}primary-color); // Returns 152
}
.blue-component {
  color: blue(${'$'}primary-color); // Returns 219
}`
        },
        {
          command: 'String Functions',
          description: 'Built-in string manipulation functions',
          usage: 'Manipulate and analyze strings',
          example: `/* String functions */
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
}`
        },
        {
          command: 'Number Functions',
          description: 'Built-in mathematical functions',
          usage: 'Perform mathematical operations',
          example: `/* Number functions */
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
          command: 'Unit Conversion Functions',
          description: 'Functions for converting units',
          usage: 'Convert between px, rem, em units',
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

.header {
  font-size: rem(24px);
}`
        },
        {
          command: 'Color Manipulation Functions',
          description: 'Custom color utility functions',
          usage: 'Create color utilities and contrast functions',
          example: `/* Color manipulation functions */
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

.button {
  background: palette(#3498db, 'primary');
  color: get-contrast(palette(#3498db, 'primary'));
}`
        },
        {
          command: 'Layout Functions',
          description: 'Functions for layout calculations',
          usage: 'Spacing, grid, and typography calculations',
          example: `/* Spacing functions */
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

.header {
  font-size: rem(24px);
  line-height: line-height(rem(24px), 1.4);
  padding: spacing(2);
  width: grid-width(6);
}`
        },
        {
          command: 'Breakpoint Functions',
          description: 'Functions for responsive breakpoints',
          usage: 'Dynamic breakpoint calculations',
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
}`
        },
        {
          command: 'Color System Functions',
          description: 'Advanced color system functions',
          usage: 'Comprehensive color palette system',
          example: `/* Color system functions */
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
}`
        },
        {
          command: 'Mathematical Functions',
          description: 'Advanced mathematical functions',
          usage: 'Golden ratio and modular scale',
          example: `/* Mathematical functions */
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
}`
        },
        {
          command: 'Grid System Functions',
          description: 'Functions for grid calculations',
          usage: 'Container and gutter calculations',
          example: `/* Grid system functions */
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
          command: 'Function Library',
          description: 'Complete function library',
          usage: 'Comprehensive function collections',
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
  @if ${'$'}step == 0 {
    @return ${'$'}base;
  } @else if ${'$'}step > 0 {
    @return ${'$'}base * pow(${'$'}ratio, ${'$'}step);
  } @else {
    @return ${'$'}base / pow(${'$'}ratio, abs(${'$'}step));
  }
}`
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Advanced SCSS Features',
      commands: [
        {
          command: '@extend Directive',
          description: 'Inherit styles from other selectors',
          usage: 'Use @extend to share styles between selectors',
          example: `/* Basic @extend usage */
%button-base {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  @extend %button-base;
  background: #3498db;
  color: white;
}

.btn-secondary {
  @extend %button-base;
  background: #95a5a6;
  color: white;
}

/* Compiled CSS */
.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}`
        },
        {
          command: 'Placeholder Selectors',
          description: 'Using % placeholder selectors',
          usage: 'Create reusable style blocks that won\'t compile to CSS',
          example: `/* Placeholder selectors */
%message-base {
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
}

%message-success {
  @extend %message-base;
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

%message-error {
  @extend %message-base;
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.success {
  @extend %message-success;
}

.error {
  @extend %message-error;
}`
        },
        {
          command: '@if Control Directive',
          description: 'Conditional logic in SCSS',
          usage: 'Create conditional styles with @if',
          example: `/* @if directive */
${'$'}theme: dark;

.container {
  @if ${'$'}theme == light {
    background: white;
    color: black;
  } @else if ${'$'}theme == dark {
    background: black;
    color: white;
  } @else {
    background: gray;
    color: white;
  }
}

/* With functions */
@mixin text-effect(${'$'}effect) {
  @if ${'$'}effect == glow {
    text-shadow: 0 0 10px rgba(255,255,255,0.8);
  } @else if ${'$'}effect == shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
}

.title {
  @include text-effect(glow);
}`
        },
        {
          command: '@for Loop',
          description: 'Iterate with @for loops',
          usage: 'Generate styles with numeric ranges',
          example: `/* @for loops */
// Through loop (inclusive)
@for ${'$'}i from 1 through 3 {
  .item-#{${'$'}i} {
    width: 2em * ${'$'}i;
  }
}

// To loop (exclusive)
@for ${'$'}i from 1 to 3 {
  .col-#{${'$'}i} {
    width: percentage(${'$'}i / 12);
  }
}

/* Compiled CSS */
.item-1 { width: 2em; }
.item-2 { width: 4em; }
.item-3 { width: 6em; }

.col-1 { width: 8.33333%; }
.col-2 { width: 16.66667%; }`
        },
        {
          command: '@each Loop',
          description: 'Iterate over lists and maps',
          usage: 'Loop through collections',
          example: `/* @each with lists */
${'$'}icons: email, phone, location;

@each ${'$'}icon in ${'$'}icons {
  .icon-#{${'$'}icon} {
    background-image: url('icons/#{${'$'}icon}.svg');
  }
}

/* @each with maps */
${'$'}colors: (
  primary: #3498db,
  secondary: #2ecc71,
  success: #27ae60
);

@each ${'$'}name, ${'$'}color in ${'$'}colors {
  .bg-#{${'$'}name} {
    background-color: ${'$'}color;
  }
  .text-#{${'$'}name} {
    color: ${'$'}color;
  }
}`
        },
        {
          command: '@while Loop',
          description: 'Loop while condition is true',
          usage: 'Generate styles with conditional loops',
          example: `/* @while loop */
${'$'}i: 6;

@while ${'$'}i > 0 {
  .item-#{${'$'}i} {
    width: 2em * ${'$'}i;
  }
  ${'$'}i: ${'$'}i - 2;
}

/* Compiled CSS */
.item-6 { width: 12em; }
.item-4 { width: 8em; }
.item-2 { width: 4em; }`
        },
        {
          command: '@import Directive',
          description: 'Import SCSS files',
          usage: 'Modularize your SCSS code',
          example: `/* Basic imports */
@import 'variables';
@import 'mixins';
@import 'functions';

/* Import with specific path */
@import 'components/buttons';
@import 'layout/header';

/* Import CSS files */
@import 'normalize.css';

/* Import multiple files */
@import 'variables', 'mixins', 'functions';`
        },
        {
          command: '@use Directive',
          description: 'Modern way to import modules',
          usage: 'Load modules with namespaces',
          example: `/* @use directive */
@use 'sass:math';
@use 'sass:color';
@use 'variables' as v;
@use 'mixins' as m;

.container {
  width: math.percentage(5/12);
  background: v.${'$'}primary-color;
  @include m.flex-center;
}

/* Default namespace */
@use 'variables';

.button {
  background: variables.${'$'}primary-color;
}`
        },
        {
          command: '@forward Directive',
          description: 'Forward module contents',
          usage: 'Expose module contents to other files',
          example: `/* _variables.scss */
${'$'}primary-color: #3498db;
${'$'}secondary-color: #2ecc71;

/* _mixins.scss */
@forward 'variables';
@forward 'functions';

/* main.scss */
@forward 'variables' show ${'$'}primary-color;
@forward 'mixins' hide button;`
        },
        {
          command: '@at-root Rule',
          description: 'Break out of nesting',
          usage: 'Generate styles at root level',
          example: `/* @at-root usage */
.parent {
  color: blue;
  
  .child {
    color: red;
    
    @at-root .sibling {
      color: green;
    }
  }
}

/* Compiled CSS */
.parent { color: blue; }
.parent .child { color: red; }
.sibling { color: green; }

/* With BEM */
.card {
  padding: 20px;
  
  &__title {
    font-size: 1.5em;
    
    @at-root .card--featured & {
      color: #3498db;
    }
  }
}`
        },
        {
          command: '@debug Directive',
          description: 'Debug SCSS compilation',
          usage: 'Output debug information',
          example: `/* @debug usage */
${'$'}primary-color: #3498db;

@debug 'Primary color is: #{$primary-color}';

/* In functions */
@function calculate-width(${'$'}columns) {
  @debug 'Calculating width for #{$columns} columns';
  @return percentage(${'$'}columns / 12);
}

.container {
  width: calculate-width(6);
}`
        },
        {
          command: '@warn Directive',
          description: 'Output warnings during compilation',
          usage: 'Warn about deprecated usage',
          example: `/* @warn usage */
@mixin old-button(${'$'}color) {
  @warn 'old-button() mixin is deprecated, use button() instead';
  
  background: ${'$'}color;
  padding: 10px 20px;
}

.button {
  @include old-button(#3498db);
}`
        },
        {
          command: '@error Directive',
          description: 'Stop compilation with error',
          usage: 'Validate input and throw errors',
          example: `/* @error usage */
@function validate-color(${'$'}color) {
  @if not map-has-key(${'$'}colors, ${'$'}color) {
    @error 'Color "#{$color}" not found in color palette';
  }
  @return map-get(${'$'}colors, ${'$'}color);
}

${'$'}colors: (
  primary: #3498db,
  secondary: #2ecc71
);

.button {
  background: validate-color(primary);
}`
        },
        {
          command: 'List Functions',
          description: 'Built-in list manipulation functions',
          usage: 'Work with lists in SCSS',
          example: `/* List functions */
${'$'}fonts: 'Helvetica', 'Arial', sans-serif;
${'$'}sizes: 12px, 14px, 16px, 18px;

// length()
@debug length(${'$'}fonts); // 3

// nth()
.first-font {
  font-family: nth(${'$'}fonts, 1); // 'Helvetica'
}

// set-nth()
.new-sizes {
  @include set-nth(${'$'}sizes, 2, 20px);
}

// join()
.combined-list {
  @include join(${'$'}fonts, $sizes);
}

// append()
.extended-sizes {
  @include append(${'$'}sizes, 24px);
}

// index()
.font-index {
  @debug index(${'$'}fonts, 'Arial'); // 2
}`
        },
        {
          command: 'Map Functions',
          description: 'Built-in map manipulation functions',
          usage: 'Work with maps (associative arrays)',
          example: `/* Map functions */
${'$'}colors: (
  primary: #3498db,
  secondary: #2ecc71,
  success: #27ae60
);

// map-get()
.primary-bg {
  background: map-get(${'$'}colors, primary);
}

// map-merge()
${'$'}extended-colors: map-merge(${'$'}colors, (
  warning: #f39c12,
  danger: #e74c3c
));

// map-remove()
${'$'}core-colors: map-remove(${'$'}colors, success);

// map-keys()
@debug map-keys(${'$'}colors); // primary, secondary, success

// map-values()
@debug map-values(${'$'}colors); // #3498db, #2ecc71, #27ae60

// map-has-key()
@debug map-has-key(${'$'}colors, primary); // true`
        },
        {
          command: 'Selector Functions',
          description: 'Built-in selector manipulation functions',
          usage: 'Work with CSS selectors',
          example: `/* Selector functions */
// selector-nest()
.nested {
  @debug selector-nest('.foo', '.bar'); // .foo .bar
}

// selector-append()
.appended {
  @debug selector-append('.foo', '.bar'); // .foo.bar
}

// selector-replace()
.replaced {
  @debug selector-replace('.foo .bar', '.bar', '.baz'); // .foo .baz
}

// selector-unify()
.unified {
  @debug selector-unify('.foo', '.bar'); // .foo.bar
}

// is-superselector()
.super {
  @debug is-superselector('.foo', '.foo.bar'); // true
  @debug is-superselector('.foo.bar', '.foo'); // false
}`
        },
        {
          command: 'Introspection Functions',
          description: 'Functions to inspect SCSS values',
          usage: 'Check types and values',
          example: `/* Introspection functions */
${'$'}value: 16px;
${'$'}list: 1, 2, 3;
${'$'}map: (key: value);

// type-of()
@debug type-of(${'$'}value); // number
@debug type-of(${'$'}list);  // list
@debug type-of(${'$'}map);   // map

// unit()
@debug unit(${'$'}value); // px

// unitless()
@debug unitless(16);    // true
@debug unitless(16px);  // false

// comparable()
@debug comparable(16px, 1em); // true
@debug comparable(16px, 16deg); // false

// feature-exists()
@debug feature-exists('custom-properties'); // true`
        },
        {
          command: 'Color Functions Advanced',
          description: 'Advanced color manipulation',
          usage: 'Complex color operations',
          example: `/* Advanced color functions */
${'$'}color: #3498db;

// Hue, Saturation, Lightness
.hsl-info {
  hue: hue(${'$'}color);        // 210deg
  saturation: saturation(${'$'}color); // 78.4%
  lightness: lightness(${'$'}color);   // 54.1%
}

// Alpha channel
.alpha-info {
  alpha: alpha(${'$'}color); // 1
  opacity: opacity(${'$'}color); // 1
}

// Adjust color properties
.adjusted {
  // Adjust hue, saturation, lightness
  background: adjust-hue(${'$'}color, 30deg);
  background: saturate(${'$'}color, 20%);
  background: desaturate(${'$'}color, 20%);
  background: lighten(${'$'}color, 20%);
  background: darken(${'$'}color, 20%);
  
  // Adjust alpha
  background: fade-in(${'$'}color, 0.3);
  background: fade-out(${'$'}color, 0.3);
  
  // Grayscale
  background: grayscale(${'$'}color);
  
  // Invert
  background: invert(${'$'}color);
}`
        },
      ],
    },
  ],
};

