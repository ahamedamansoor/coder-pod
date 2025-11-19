
import type { Language } from './types';

export const scss: Language = {
  slug: 'scss',
  name: 'Sass/SCSS',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning Sass/SCSS.' },
    { slug: 'what-is-sass', title: 'Sass Intro', explanation: 'An introduction to CSS with superpowers.' },
    { slug: 'sass-installation', title: 'Sass Installation', explanation: 'How to install Sass and compile your first SCSS file.' },
    { slug: 'sass-variables', title: 'Variables', explanation: 'Storing reusable values like colors and font sizes.' },
    { slug: 'sass-nesting', title: 'Nesting', explanation: 'Writing CSS rules that mirror your HTML structure to create cleaner, more organized styles.' },
    { slug: 'sass-import', title: 'Sass @import', explanation: 'Importing SCSS files into other SCSS files.' },
    { slug: 'sass-mixins', title: 'Sass @mixin', explanation: 'Creating reusable groups of CSS declarations.' },
    { slug: 'sass-extend-inheritance', title: 'Sass @extend', explanation: 'Sharing a set of CSS properties from one selector to another.' },
    { slug: 'sass-functions', title: 'Sass Functions', explanation: 'Using built-in functions and writing your own.' },
    { slug: 'sass-string', title: 'Sass String', explanation: 'Manipulating strings with Sass functions.' },
    { slug: 'sass-numeric', title: 'Sass Numeric', explanation: 'Performing calculations with numeric values.' },
    { slug: 'sass-list', title: 'Sass List', explanation: 'Working with lists of values.' },
    { slug: 'sass-map', title: 'Sass Map', explanation: 'Using key-value pairs to store and retrieve data.' },
    { slug: 'sass-selector', title: 'Sass Selector', explanation: 'Advanced selector functions.' },
    { slug: 'sass-introspection', title: 'Sass Introspection', explanation: 'Checking the properties of values.' },
    { slug: 'sass-color', title: 'Sass Color', explanation: 'Manipulating colors with built-in functions.' },
  ]
};
