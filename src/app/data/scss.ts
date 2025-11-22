
import type { Language } from './types';

export const scss: Language = {
  slug: 'scss',
  name: 'Sass/SCSS',
  topics: [
    // Special Topics
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning Sass/SCSS from beginner to expert.' },

    // Beginner Level - Fundamentals
    { slug: 'what-is-sass', title: 'What is Sass/SCSS?', explanation: 'An introduction to CSS with superpowers and understanding Sass vs SCSS syntax.', category: '1. Fundamentals' },
    { slug: 'sass-installation', title: 'Installation & Setup', explanation: 'How to install Sass and compile your first SCSS file using various methods.', category: '1. Fundamentals' },
    { slug: 'sass-comments', title: 'Comments', explanation: 'Single-line and multi-line comments in Sass.', category: '1. Fundamentals' },
    { slug: 'sass-variables', title: 'Variables', explanation: 'Storing reusable values like colors, fonts, and spacing with $ syntax.', category: '1. Fundamentals' },

    // Beginner Level - Nesting & Selectors
    { slug: 'sass-nesting', title: 'Nesting', explanation: 'Writing CSS rules that mirror your HTML structure for cleaner code.', category: '2. Nesting & Selectors' },
    { slug: 'sass-parent-selector', title: 'Parent Selector (&)', explanation: 'Using the ampersand to reference parent selectors for hover states and BEM.', category: '2. Nesting & Selectors' },

    // Beginner Level - File Organization
    { slug: 'sass-import', title: '@import & Partials', explanation: 'Organizing code into multiple files with imports and partials.', category: '3. File Organization' },
    { slug: 'sass-modules', title: '@use & @forward', explanation: 'Modern module system replacing @import for better namespacing.', category: '3. File Organization' },

    // Intermediate Level - Reusability
    { slug: 'sass-mixin', title: '@mixin & @include', explanation: 'Creating reusable groups of CSS declarations with arguments.', category: '4. Reusability' },
    { slug: 'sass-extend-inheritance', title: '@extend & Inheritance', explanation: 'Sharing CSS properties between selectors efficiently.', category: '4. Reusability' },
    { slug: 'sass-placeholder', title: 'Placeholder Selectors (%)', explanation: 'Creating reusable styles with % that don\'t generate CSS on their own.', category: '4. Reusability' },
    { slug: 'sass-functions', title: 'Functions', explanation: 'Using built-in functions and writing custom functions with @function.', category: '4. Reusability' },

    // Intermediate Level - Control & Logic
    { slug: 'sass-operators', title: 'Operators', explanation: 'Mathematical and comparison operators for calculations in styles.', category: '5. Control & Logic' },
    { slug: 'sass-interpolation', title: 'Interpolation #{}', explanation: 'Using #{} to inject values into selectors and property names.', category: '5. Control & Logic' },
    { slug: 'sass-control-directives', title: 'Control Directives', explanation: 'Using @if, @else, @for, @each, and @while for dynamic styles.', category: '5. Control & Logic' },

    // Advanced Level - Data Types & Functions
    { slug: 'sass-string', title: 'String Functions', explanation: 'Manipulating strings with quote, unquote, to-upper-case, and more.', category: '6. Data Types & Functions' },
    { slug: 'sass-numeric', title: 'Number & Math Functions', explanation: 'Performing calculations with numbers, units, and mathematical operations.', category: '6. Data Types & Functions' },
    { slug: 'sass-list', title: 'List Functions', explanation: 'Working with comma or space-separated lists of values.', category: '6. Data Types & Functions' },
    { slug: 'sass-map', title: 'Map Functions', explanation: 'Using key-value pairs to store and retrieve complex data structures.', category: '6. Data Types & Functions' },
    { slug: 'sass-color', title: 'Color Functions', explanation: 'Manipulating colors with built-in functions like darken, lighten, and mix.', category: '6. Data Types & Functions' },
    { slug: 'sass-selector', title: 'Selector Functions', explanation: 'Advanced selector manipulation and generation functions.', category: '6. Data Types & Functions' },
    { slug: 'sass-introspection', title: 'Introspection Functions', explanation: 'Type checking and inspecting values at compile time.', category: '6. Data Types & Functions' },

    // Expert Level - Advanced Topics
    { slug: 'sass-advanced-nesting', title: 'Advanced Nesting', explanation: 'Complex nesting patterns, selector combinators, and best practices.', category: '7. Advanced Topics' },
    { slug: 'sass-custom-functions', title: 'Custom Functions', explanation: 'Writing your own functions for complex calculations and logic.', category: '7. Advanced Topics' },
    { slug: 'sass-responsive-mixins', title: 'Responsive Mixins', explanation: 'Creating powerful media query mixins for responsive design.', category: '7. Advanced Topics' },
    { slug: 'sass-debugging', title: 'Debugging', explanation: 'Using @debug, @warn, and @error for troubleshooting Sass code.', category: '7. Advanced Topics' },

    // Expert Level - Professional Development
    { slug: 'sass-architecture', title: 'Architecture & Organization', explanation: 'Structuring large projects with 7-1 pattern and ITCSS methodology.', category: '8. Professional Development' },
    { slug: 'sass-performance', title: 'Performance & Optimization', explanation: 'Best practices for writing efficient and maintainable Sass code.', category: '8. Professional Development' },
    { slug: 'sass-advanced-patterns', title: 'Advanced Patterns', explanation: 'Design patterns, theming systems, and advanced techniques for experts.', category: '8. Professional Development' },
  ]
};
