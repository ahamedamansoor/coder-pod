
import type { Language } from './types';

export const scss: Language = {
  slug: 'scss',
  name: 'Sass/SCSS',
  description: 'CSS with superpowers - variables, nesting, mixins, and more',
  topics: [
    // Special Topics
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Sass/SCSS from fundamentals to advanced patterns.' },

    // Beginner Level - Fundamentals
    { slug: 'what-is-sass', title: 'What is Sass/SCSS?', explanation: 'Introduction to Sass, Dart Sass vs LibSass, SCSS vs Sass syntax, and CSS preprocessing.', category: '1. Fundamentals' },
    { slug: 'sass-vs-scss', title: 'Sass vs SCSS Syntax', explanation: 'Understanding the differences between .sass (indented) and .scss (CSS-like) syntax.', category: '1. Fundamentals' },
    { slug: 'sass-installation', title: 'Installation & Setup', explanation: 'Installing Dart Sass via npm, standalone, and configuring build tools (Vite, Webpack, Parcel).', category: '1. Fundamentals' },
    { slug: 'sass-compilation', title: 'Compilation', explanation: 'Compiling Sass to CSS: watch mode, source maps, and compilation options.', category: '1. Fundamentals' },
    { slug: 'sass-comments', title: 'Comments', explanation: 'Single-line (//), multi-line (/* */), and documentation comments in Sass.', category: '1. Fundamentals' },
    { slug: 'sass-variables', title: 'Variables', explanation: 'Declaring and using variables with $ syntax, scope, shadowing, and !default flag.', category: '1. Fundamentals' },
    { slug: 'sass-data-types', title: 'Data Types', explanation: 'Understanding Sass data types: numbers, strings, colors, lists, maps, booleans, null.', category: '1. Fundamentals' },

    // Beginner Level - Nesting & Selectors
    { slug: 'sass-nesting', title: 'Nesting', explanation: 'Nesting selectors to mirror HTML structure, when to nest, and avoiding over-nesting.', category: '2. Nesting & Selectors' },
    { slug: 'sass-parent-selector', title: 'Parent Selector (&)', explanation: 'Using & for pseudo-classes, pseudo-elements, BEM modifiers, and compound selectors.', category: '2. Nesting & Selectors' },
    { slug: 'sass-property-nesting', title: 'Property Nesting', explanation: 'Nesting CSS properties like font-family, font-size under font namespace.', category: '2. Nesting & Selectors' },
    { slug: 'sass-selector-combinators', title: 'Selector Combinators', explanation: 'Using child (>), adjacent sibling (+), and general sibling (~) combinators with nesting.', category: '2. Nesting & Selectors' },

    // Beginner Level - File Organization
    { slug: 'sass-partials', title: 'Partials', explanation: 'Creating partial files with underscore prefix (_partial.scss) for modular code.', category: '3. File Organization' },
    { slug: 'sass-import', title: '@import (Deprecated)', explanation: 'Understanding legacy @import, why it\'s deprecated, and migration strategies.', category: '3. File Organization' },
    { slug: 'sass-use', title: '@use Rule', explanation: 'Modern module system with namespacing, loading styles once, and member access.', category: '3. File Organization' },
    { slug: 'sass-forward', title: '@forward Rule', explanation: 'Re-exporting modules, creating library APIs, and show/hide configurations.', category: '3. File Organization' },
    { slug: 'sass-load-paths', title: 'Load Paths', explanation: 'Configuring load paths, node_modules integration, and package imports.', category: '3. File Organization' },
    { slug: 'sass-index-files', title: 'Index Files', explanation: 'Using index files (_index.scss) for directory-level exports and organization.', category: '3. File Organization' },

    // Intermediate Level - Reusability
    { slug: 'sass-mixin-basics', title: '@mixin Basics', explanation: 'Creating and including mixins for reusable style blocks.', category: '4. Reusability' },
    { slug: 'sass-mixin-arguments', title: 'Mixin Arguments', explanation: 'Positional arguments, named arguments, default values, and variable arguments (...).', category: '4. Reusability' },
    { slug: 'sass-mixin-content', title: '@content Directive', explanation: 'Passing content blocks to mixins for flexible patterns like media queries.', category: '4. Reusability' },
    { slug: 'sass-extend-inheritance', title: '@extend', explanation: 'Extending selectors, inheritance chains, and understanding generated CSS.', category: '4. Reusability' },
    { slug: 'sass-placeholder', title: 'Placeholder Selectors (%)', explanation: 'Silent selectors that only generate CSS when extended, reducing bloat.', category: '4. Reusability' },
    { slug: 'sass-function-basics', title: 'Functions', explanation: 'Writing custom functions with @function and @return for computed values.', category: '4. Reusability' },
    { slug: 'sass-function-arguments', title: 'Function Arguments', explanation: 'Function parameters, keyword arguments, rest parameters, and argument handling.', category: '4. Reusability' },

    // Intermediate Level - Control & Logic
    { slug: 'sass-operators', title: 'Operators', explanation: 'Arithmetic (+, -, *, /, %), comparison (==, !=, <, >), and logical operators (and, or, not).', category: '5. Control & Logic' },
    { slug: 'sass-interpolation', title: 'Interpolation #{}', explanation: 'Injecting SassScript values into selectors, property names, strings, and comments.', category: '5. Control & Logic' },
    { slug: 'sass-if-else', title: '@if & @else', explanation: 'Conditional logic for dynamic styling based on conditions.', category: '5. Control & Logic' },
    { slug: 'sass-for-loop', title: '@for Loop', explanation: 'Iterating with @for from...through and @for from...to for repetitive patterns.', category: '5. Control & Logic' },
    { slug: 'sass-each-loop', title: '@each Loop', explanation: 'Iterating over lists and maps with @each for dynamic class generation.', category: '5. Control & Logic' },
    { slug: 'sass-while-loop', title: '@while Loop', explanation: 'Using @while for complex iterations until a condition is met.', category: '5. Control & Logic' },

    // Advanced Level - Built-in Modules
    { slug: 'sass-math-module', title: 'sass:math Module', explanation: 'Mathematical functions and constants: ceil, floor, round, abs, pow, sqrt, pi, e.', category: '6. Built-in Modules' },
    { slug: 'sass-string-module', title: 'sass:string Module', explanation: 'String functions: quote, unquote, to-upper-case, to-lower-case, length, slice, index.', category: '6. Built-in Modules' },
    { slug: 'sass-color-module', title: 'sass:color Module', explanation: 'Color manipulation: adjust, scale, change, mix, invert, grayscale, complement.', category: '6. Built-in Modules' },
    { slug: 'sass-list-module', title: 'sass:list Module', explanation: 'List operations: length, nth, append, join, index, separator, zip.', category: '6. Built-in Modules' },
    { slug: 'sass-map-module', title: 'sass:map Module', explanation: 'Map functions: get, has-key, keys, values, merge, remove, deep-get, deep-merge.', category: '6. Built-in Modules' },
    { slug: 'sass-selector-module', title: 'sass:selector Module', explanation: 'Selector functions: parse, nest, append, extend, replace, unify, is-superselector.', category: '6. Built-in Modules' },
    { slug: 'sass-meta-module', title: 'sass:meta Module', explanation: 'Introspection and metaprogramming: type-of, inspect, keywords, call, get-function.', category: '6. Built-in Modules' },

    // Advanced Level - Advanced Features
    { slug: 'sass-at-root', title: '@at-root', explanation: 'Emitting styles at the root level from within nested selectors.', category: '7. Advanced Features' },
    { slug: 'sass-advanced-nesting', title: 'Advanced Nesting Patterns', explanation: 'Complex nesting, BEM with &, modifier patterns, and nesting best practices.', category: '7. Advanced Features' },
    { slug: 'sass-custom-functions', title: 'Custom Functions', explanation: 'Writing complex functions for calculations, color manipulation, and logic.', category: '7. Advanced Features' },
    { slug: 'sass-responsive-mixins', title: 'Responsive Mixins', explanation: 'Building powerful media query mixins with breakpoint management.', category: '7. Advanced Features' },
    { slug: 'sass-debugging', title: 'Debugging', explanation: 'Using @debug, @warn, and @error for debugging and error handling.', category: '7. Advanced Features' },
    { slug: 'sass-css-imports', title: 'Plain CSS @import', explanation: 'When Sass treats @import as plain CSS and URL imports.', category: '7. Advanced Features' },
    { slug: 'sass-css-compatibility', title: 'CSS Compatibility', explanation: 'Writing CSS-compatible Sass, preserving calc(), min(), max(), and modern CSS.', category: '7. Advanced Features' },

    // Color Functions
    { slug: 'sass-color-manipulation', title: 'Color Manipulation', explanation: 'Darken, lighten, saturate, desaturate, adjust-hue, and color transformations.', category: '8. Colors' },
    { slug: 'sass-color-mixing', title: 'Color Mixing', explanation: 'mix(), color blending, transparency handling, and color combination techniques.', category: '8. Colors' },
    { slug: 'sass-color-opacity', title: 'Color & Opacity', explanation: 'rgba(), transparentize(), opacify(), alpha channel manipulation.', category: '8. Colors' },
    { slug: 'sass-color-spaces', title: 'Modern Color Spaces', explanation: 'Working with modern CSS colors: oklch(), oklab(), color-mix() in Sass.', category: '8. Colors' },
    
    // Mixins Library
    { slug: 'utility-mixins', title: 'Utility Mixins', explanation: 'Common mixins: clearfix, visually-hidden, truncate, aspect-ratio.', category: '9. Mixins Library' },
    { slug: 'layout-mixins', title: 'Layout Mixins', explanation: 'Flexbox mixins, grid mixins, and layout helper patterns.', category: '9. Mixins Library' },
    { slug: 'typography-mixins', title: 'Typography Mixins', explanation: 'Font-face, fluid typography, responsive text mixins.', category: '9. Mixins Library' },
    { slug: 'animation-mixins', title: 'Animation Mixins', explanation: 'Keyframe generation, transition mixins, and animation utilities.', category: '9. Mixins Library' },
    
    // Architecture & Patterns
    { slug: 'sass-7-1-pattern', title: '7-1 Pattern', explanation: 'Organizing Sass with 7 folders, 1 main file: abstracts, base, components, layout, pages, themes, vendors.', category: '10. Architecture' },
    { slug: 'sass-itcss', title: 'ITCSS Architecture', explanation: 'Inverted Triangle CSS methodology for scalable and maintainable Sass.', category: '10. Architecture' },
    { slug: 'sass-bem-integration', title: 'BEM with Sass', explanation: 'Combining BEM methodology with Sass nesting and parent selector.', category: '10. Architecture' },
    { slug: 'sass-smacss', title: 'SMACSS with Sass', explanation: 'Scalable and Modular Architecture for CSS using Sass organization.', category: '10. Architecture' },
    { slug: 'sass-naming-conventions', title: 'Naming Conventions', explanation: 'Variable naming, file naming, mixin/function conventions, and consistency.', category: '10. Architecture' },
    
    // Design Systems
    { slug: 'sass-design-tokens', title: 'Design Tokens', explanation: 'Creating and managing design tokens with Sass variables and maps.', category: '11. Design Systems' },
    { slug: 'sass-theming', title: 'Theming Systems', explanation: 'Building flexible theming with maps, CSS custom properties, and Sass variables.', category: '11. Design Systems' },
    { slug: 'sass-dark-mode', title: 'Dark Mode', explanation: 'Implementing dark mode with Sass: variable switching, mixins, and strategies.', category: '11. Design Systems' },
    { slug: 'sass-component-library', title: 'Component Libraries', explanation: 'Building reusable component libraries with Sass modules and patterns.', category: '11. Design Systems' },
    
    // Performance & Optimization
    { slug: 'sass-output-style', title: 'Output Styles', explanation: 'Compressed, expanded, nested, and compact output styles for different environments.', category: '12. Performance' },
    { slug: 'sass-performance', title: 'Performance Best Practices', explanation: 'Avoiding @import, limiting nesting depth, efficient selectors, and compilation speed.', category: '12. Performance' },
    { slug: 'sass-source-maps', title: 'Source Maps', explanation: 'Generating and using source maps for debugging compiled CSS.', category: '12. Performance' },
    { slug: 'sass-optimization', title: 'CSS Optimization', explanation: 'Output optimization, removing duplicates, and minimizing compiled CSS size.', category: '12. Performance' },
    
    // Build Tools
    { slug: 'sass-with-webpack', title: 'Webpack Integration', explanation: 'sass-loader, configuration, and webpack integration patterns.', category: '13. Build Tools' },
    { slug: 'sass-with-vite', title: 'Vite Integration', explanation: 'Using Sass with Vite, preprocessing, and modern build setup.', category: '13. Build Tools' },
    { slug: 'sass-with-gulp', title: 'Gulp Integration', explanation: 'gulp-sass, watch tasks, and Gulp workflow automation.', category: '13. Build Tools' },
    { slug: 'sass-cli', title: 'Sass CLI', explanation: 'Command-line compilation, watch mode, options, and automation scripts.', category: '13. Build Tools' },
    { slug: 'sass-api', title: 'JavaScript API', explanation: 'Using Sass programmatically with Node.js and custom build scripts.', category: '13. Build Tools' },
    
    // Testing & Quality
    { slug: 'sass-linting', title: 'Linting', explanation: 'stylelint, sass-lint, code quality rules, and enforcing conventions.', category: '14. Testing & Quality' },
    { slug: 'sass-testing', title: 'Testing Sass', explanation: 'Unit testing functions and mixins with True (Sass testing framework).', category: '14. Testing & Quality' },
    { slug: 'sass-documentation', title: 'Documentation', explanation: 'Documenting Sass code with SassDoc and inline comments.', category: '14. Testing & Quality' },
    
    // Migration & Compatibility
    { slug: 'sass-migration', title: 'Migrating to Dart Sass', explanation: 'Moving from LibSass/Node Sass to Dart Sass, breaking changes, and compatibility.', category: '15. Migration' },
    { slug: 'sass-module-migration', title: 'Module System Migration', explanation: 'Migrating from @import to @use/@forward with automated tools.', category: '15. Migration' },
    { slug: 'sass-to-css', title: 'Sass to Plain CSS', explanation: 'When and how to migrate from Sass to modern CSS with custom properties.', category: '15. Migration' },
    
    // Best Practices
    { slug: 'sass-best-practices', title: 'Best Practices', explanation: 'Writing maintainable Sass: nesting depth, selector specificity, and code organization.', category: '16. Best Practices' },
    { slug: 'sass-common-mistakes', title: 'Common Mistakes', explanation: 'Avoiding pitfalls: over-nesting, @extend abuse, and performance issues.', category: '16. Best Practices' },
    { slug: 'sass-refactoring', title: 'Refactoring', explanation: 'Improving existing Sass code, reducing technical debt, and modernization.', category: '16. Best Practices' },
    { slug: 'sass-team-workflows', title: 'Team Workflows', explanation: 'Collaboration, code reviews, style guides, and team conventions.', category: '16. Best Practices' },
    { slug: 'sass-resources', title: 'Resources & Community', explanation: 'Official documentation, community resources, learning materials, and getting help.', category: '16. Best Practices' },
  ]
};
