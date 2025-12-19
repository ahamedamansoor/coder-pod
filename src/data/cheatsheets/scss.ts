import { Code } from 'lucide-react';

export const scssCheatsheet = {
    id: 'scss',
    name: 'SCSS/Sass',
    description: 'Complete SCSS/Sass reference: variables, nesting, mixins, functions, and more',
    icon: Code,
    colorTheme: 'pink' as const,
    sections: [
        {
            title: 'Variables',
            commands: [
                {
                    command: 'Variable Declaration',
                    description: 'Define variables with $ prefix',
                    usage: '$variable-name: value;',
                    example: '$primary-color: #3498db;\n$font-size: 16px;\n$spacing: 1rem;',
                },
                {
                    command: 'Using Variables',
                    description: 'Use variables in properties',
                    usage: 'property: $variable;',
                    example: '.button {\n  background-color: $primary-color;\n  font-size: $font-size;\n  padding: $spacing;\n}',
                },
                {
                    command: 'Variable Interpolation',
                    description: 'Use variables in selectors and property names',
                    usage: '#{$variable}',
                    example: '$side: top;\n.margin-#{$side} {\n  margin-#{$side}: 10px;\n}',
                },
                {
                    command: 'Default Values',
                    description: 'Set default value if variable is undefined',
                    usage: 'variable($var, $default)',
                    example: '$primary-color: #3498db !default;\n// Only sets if not already defined',
                },
                {
                    command: 'Global Variables',
                    description: 'Make variable global',
                    usage: '!global',
                    example: '.button {\n  $local-var: red !global;\n}',
                },
            ],
        },
        {
            title: 'Nesting',
            commands: [
                {
                    command: 'Basic Nesting',
                    description: 'Nest selectors',
                    usage: 'parent { child {} }',
                    example: '.nav {\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n  li {\n    display: inline-block;\n  }\n}',
                },
                {
                    command: 'Parent Selector (&)',
                    description: 'Reference parent selector',
                    usage: '&:hover, &.active',
                    example: '.button {\n  color: blue;\n  &:hover {\n    color: red;\n  }\n  &.active {\n    font-weight: bold;\n  }\n}',
                },
                {
                    command: 'Nested Properties',
                    description: 'Nest properties with same prefix',
                    usage: 'font: { size: 16px; weight: bold; }',
                    example: '.text {\n  font: {\n    size: 16px;\n    weight: bold;\n    family: Arial;\n  }\n}',
                },
                {
                    command: 'Multiple Parent References',
                    description: 'Use & multiple times',
                    usage: '& &-child',
                    example: '.button {\n  &-primary {\n    background: blue;\n  }\n  &-secondary {\n    background: gray;\n  }\n}',
                },
            ],
        },
        {
            title: 'Mixins',
            commands: [
                {
                    command: 'Define Mixin',
                    description: 'Create reusable style block',
                    usage: '@mixin name { ... }',
                    example: '@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
                },
                {
                    command: 'Use Mixin',
                    description: 'Include mixin in selector',
                    usage: '@include mixin-name;',
                    example: '.container {\n  @include flex-center;\n}',
                },
                {
                    command: 'Mixin with Parameters',
                    description: 'Pass arguments to mixin',
                    usage: '@mixin name($param) { ... }',
                    example: '@mixin button($bg-color, $text-color) {\n  background-color: $bg-color;\n  color: $text-color;\n  padding: 10px 20px;\n}\n\n.primary-btn {\n  @include button(blue, white);\n}',
                },
                {
                    command: 'Default Parameters',
                    description: 'Set default values for parameters',
                    usage: '@mixin name($param: default)',
                    example: '@mixin button($bg-color: blue, $text-color: white) {\n  background-color: $bg-color;\n  color: $text-color;\n}\n\n.btn {\n  @include button; // Uses defaults\n  @include button(red, black); // Overrides\n}',
                },
                {
                    command: 'Named Arguments',
                    description: 'Pass arguments by name',
                    usage: '@include mixin($param: value)',
                    example: '@mixin box($width: 100px, $height: 100px, $color: blue) {}\n\n.box {\n  @include box($color: red, $width: 200px);\n}',
                },
                {
                    command: 'Variable Arguments',
                    description: 'Accept variable number of arguments',
                    usage: '@mixin name($args...)',
                    example: '@mixin shadows($shadows...) {\n  box-shadow: $shadows;\n}\n\n.card {\n  @include shadows(0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));\n}',
                },
                {
                    command: 'Content Block',
                    description: 'Pass content block to mixin',
                    usage: '@mixin name { @content }',
                    example: '@mixin media($breakpoint) {\n  @media (min-width: $breakpoint) {\n    @content;\n  }\n}\n\n.container {\n  @include media(768px) {\n    padding: 20px;\n  }\n}',
                },
            ],
        },
        {
            title: 'Functions',
            commands: [
                {
                    command: 'Define Function',
                    description: 'Create custom function',
                    usage: '@function name($params) { @return value; }',
                    example: '@function calculate-rem($pixels) {\n  @return $pixels / 16px * 1rem;\n}\n\n.text {\n  font-size: calculate-rem(24px); // 1.5rem\n}',
                },
                {
                    command: 'Built-in Color Functions',
                    description: 'Manipulate colors',
                    usage: 'lighten(), darken(), saturate(), desaturate()',
                    example: '$primary: #3498db;\n.button {\n  background: $primary;\n  &:hover {\n    background: lighten($primary, 10%);\n  }\n  &:active {\n    background: darken($primary, 10%);\n  }\n}',
                },
                {
                    command: 'Color Functions',
                    description: 'More color manipulation',
                    usage: 'mix(), rgba(), opacify(), transparentize()',
                    example: '$color1: #3498db;\n$color2: #e74c3c;\n.mixed {\n  background: mix($color1, $color2, 50%);\n}\n.transparent {\n  background: rgba($color1, 0.5);\n  background: transparentize($color1, 0.3);\n}',
                },
                {
                    command: 'String Functions',
                    description: 'Manipulate strings',
                    usage: 'quote(), unquote(), str-length(), to-upper-case()',
                    example: '$font: Arial;\n.text {\n  font-family: quote($font);\n  text-transform: to-upper-case("hello");\n}',
                },
                {
                    command: 'Number Functions',
                    description: 'Mathematical operations',
                    usage: 'percentage(), round(), ceil(), floor(), abs()',
                    example: '$width: 650px;\n.container {\n  width: percentage($width / 1000); // 65%\n  padding: round($width / 3); // 217px\n}',
                },
                {
                    command: 'List Functions',
                    description: 'Work with lists',
                    usage: 'length(), nth(), index(), append(), join()',
                    example: '$colors: red, blue, green;\n.color-2 {\n  color: nth($colors, 2); // blue\n}\n$new-colors: append($colors, yellow);',
                },
                {
                    command: 'Map Functions',
                    description: 'Work with maps',
                    usage: 'map-get(), map-keys(), map-values(), map-has-key()',
                    example: '$theme: (\n  primary: #3498db,\n  secondary: #2ecc71,\n  danger: #e74c3c\n);\n\n.button {\n  background: map-get($theme, primary);\n}',
                },
            ],
        },
        {
            title: 'Partials & Imports',
            commands: [
                {
                    command: 'Import File',
                    description: 'Import SCSS file',
                    usage: '@import "filename";',
                    example: '@import "variables";\n@import "mixins";\n@import "components/button";',
                },
                {
                    command: 'Partial Files',
                    description: 'Files starting with underscore',
                    usage: '_filename.scss',
                    example: '// _variables.scss\n$primary: blue;\n\n// main.scss\n@import "variables"; // No underscore needed',
                },
                {
                    command: 'Import CSS',
                    description: 'Import regular CSS file',
                    usage: '@import url("file.css");',
                    example: '@import url("https://fonts.googleapis.com/css2?family=Roboto");',
                },
            ],
        },
        {
            title: 'Extend/Inheritance',
            commands: [
                {
                    command: '@extend',
                    description: 'Inherit styles from another selector',
                    usage: '@extend .selector;',
                    example: '.button {\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n}\n\n.primary-button {\n  @extend .button;\n  background: blue;\n}',
                },
                {
                    command: 'Placeholder Selectors',
                    description: 'Use % for extend-only selectors',
                    usage: '%placeholder { ... }',
                    example: '%button-base {\n  padding: 10px 20px;\n  border: none;\n}\n\n.primary-btn {\n  @extend %button-base;\n  background: blue;\n}\n\n.secondary-btn {\n  @extend %button-base;\n  background: gray;\n}',
                },
                {
                    command: 'Multiple Extends',
                    description: 'Extend multiple selectors',
                    usage: '@extend .a, .b;',
                    example: '.error {\n  @extend .message, .important;\n  color: red;\n}',
                },
            ],
        },
        {
            title: 'Operators',
            commands: [
                {
                    command: 'Arithmetic',
                    description: 'Math operations',
                    usage: '+ - * / %',
                    example: '$width: 100px;\n.container {\n  width: $width * 2;\n  padding: $width / 4;\n  margin: $width + 20px;\n}',
                },
                {
                    command: 'Division',
                    description: 'Division requires parentheses or variables',
                    usage: '($value / 2) or $var / 2',
                    example: '.box {\n  width: (100px / 2); // 50px\n  height: $height / 2;\n}',
                },
                {
                    command: 'Comparison',
                    description: 'Compare values',
                    usage: '== != < > <= >=',
                    example: '@if $width > 100px {\n  .container { max-width: 1200px; }\n}',
                },
                {
                    command: 'Boolean',
                    description: 'Logical operations',
                    usage: 'and or not',
                    example: '@if $theme == dark and $size > 10px {\n  .text { color: white; }\n}',
                },
            ],
        },
        {
            title: 'Control Directives',
            commands: [
                {
                    command: '@if',
                    description: 'Conditional styling',
                    usage: '@if condition { ... }',
                    example: '$theme: dark;\n\n@if $theme == dark {\n  body { background: black; }\n}',
                },
                {
                    command: '@else',
                    description: 'Alternative condition',
                    usage: '@if { } @else { }',
                    example: '$theme: light;\n\n@if $theme == dark {\n  body { background: black; }\n} @else {\n  body { background: white; }\n}',
                },
                {
                    command: '@else if',
                    description: 'Multiple conditions',
                    usage: '@if { } @else if { } @else { }',
                    example: '$size: medium;\n\n@if $size == small {\n  font-size: 12px;\n} @else if $size == medium {\n  font-size: 16px;\n} @else {\n  font-size: 20px;\n}',
                },
                {
                    command: '@for',
                    description: 'Loop through range',
                    usage: '@for $i from start through end',
                    example: '@for $i from 1 through 3 {\n  .col-#{$i} {\n    width: percentage($i / 3);\n  }\n}',
                },
                {
                    command: '@for (to)',
                    description: 'Loop excluding end',
                    usage: '@for $i from start to end',
                    example: '@for $i from 1 to 4 {\n  .item-#{$i} { order: $i; }\n} // 1, 2, 3',
                },
                {
                    command: '@each',
                    description: 'Loop through list',
                    usage: '@each $item in $list',
                    example: '$colors: red, blue, green;\n\n@each $color in $colors {\n  .text-#{$color} {\n    color: $color;\n  }\n}',
                },
                {
                    command: '@each (Map)',
                    description: 'Loop through map',
                    usage: '@each $key, $value in $map',
                    example: '$sizes: (\n  small: 12px,\n  medium: 16px,\n  large: 20px\n);\n\n@each $name, $size in $sizes {\n  .text-#{$name} {\n    font-size: $size;\n  }\n}',
                },
                {
                    command: '@while',
                    description: 'Loop while condition is true',
                    usage: '@while condition { ... }',
                    example: '$i: 1;\n@while $i <= 3 {\n  .item-#{$i} { width: $i * 10%; }\n  $i: $i + 1;\n}',
                },
            ],
        },
        {
            title: 'Comments',
            commands: [
                {
                    command: 'Single-line Comment',
                    description: 'Comment that appears in CSS',
                    usage: '// comment',
                    example: '.button {\n  // This is a comment\n  color: blue;\n}',
                },
                {
                    command: 'Multi-line Comment',
                    description: 'Standard CSS comment',
                    usage: '/* comment */',
                    example: '/*\n * Multi-line comment\n * Appears in compiled CSS\n */',
                },
                {
                    command: 'Silent Comment',
                    description: 'Comment removed from CSS',
                    usage: '// comment',
                    example: '// This won\'t appear in CSS\n.button { color: blue; }',
                },
            ],
        },
        {
            title: 'Interpolation',
            commands: [
                {
                    command: 'Selector Interpolation',
                    description: 'Use variables in selectors',
                    usage: '.#{$variable}',
                    example: '$component: button;\n\n.#{$component} {\n  padding: 10px;\n}\n\n// Compiles to .button',
                },
                {
                    command: 'Property Interpolation',
                    description: 'Use variables in property names',
                    usage: '#{$variable}: value;',
                    example: '$property: margin-top;\n\n.element {\n  #{$property}: 10px;\n}',
                },
                {
                    command: 'URL Interpolation',
                    description: 'Use variables in URLs',
                    usage: 'url(#{$path})',
                    example: '$image-path: "/images";\n\n.bg {\n  background-image: url(#{$image-path}/bg.jpg);\n}',
                },
            ],
        },
        {
            title: 'Maps',
            commands: [
                {
                    command: 'Define Map',
                    description: 'Create key-value pairs',
                    usage: '$map: (key: value, key2: value2);',
                    example: '$breakpoints: (\n  small: 480px,\n  medium: 768px,\n  large: 1024px\n);',
                },
                {
                    command: 'Get Value',
                    description: 'Retrieve value from map',
                    usage: 'map-get($map, $key)',
                    example: '$breakpoints: (small: 480px, medium: 768px);\n\n@media (min-width: map-get($breakpoints, medium)) {\n  .container { width: 100%; }\n}',
                },
                {
                    command: 'Check Key',
                    description: 'Check if key exists',
                    usage: 'map-has-key($map, $key)',
                    example: '@if map-has-key($breakpoints, large) {\n  // Key exists\n}',
                },
                {
                    command: 'Get Keys/Values',
                    description: 'Get all keys or values',
                    usage: 'map-keys($map) | map-values($map)',
                    example: '$keys: map-keys($breakpoints);\n$values: map-values($breakpoints);',
                },
                {
                    command: 'Merge Maps',
                    description: 'Combine maps',
                    usage: 'map-merge($map1, $map2)',
                    example: '$map1: (a: 1, b: 2);\n$map2: (c: 3);\n$merged: map-merge($map1, $map2);',
                },
            ],
        },
        {
            title: 'Built-in Functions',
            commands: [
                {
                    command: 'Color Functions',
                    description: 'Color manipulation functions',
                    usage: 'lighten(), darken(), saturate(), desaturate(), adjust-hue()',
                    example: '$color: #3498db;\n\n.light { color: lighten($color, 20%); }\n.dark { color: darken($color, 20%); }\n.saturated { color: saturate($color, 50%); }',
                },
                {
                    command: 'Opacity Functions',
                    description: 'Control transparency',
                    usage: 'opacify(), transparentize(), rgba()',
                    example: '$color: #3498db;\n\n.semi-transparent {\n  background: rgba($color, 0.5);\n  background: transparentize($color, 0.3);\n}',
                },
                {
                    command: 'String Functions',
                    description: 'String manipulation',
                    usage: 'quote(), unquote(), to-upper-case(), to-lower-case(), str-length()',
                    example: '$text: "Hello World";\n\n.uppercase { text-transform: to-upper-case($text); }\n.lowercase { text-transform: to-lower-case($text); }',
                },
                {
                    command: 'Number Functions',
                    description: 'Mathematical functions',
                    usage: 'abs(), ceil(), floor(), round(), percentage()',
                    example: '$num: 3.7;\n\n.rounded { width: round($num); } // 4\n.ceiled { width: ceil($num); } // 4\n.floored { width: floor($num); } // 3',
                },
                {
                    command: 'List Functions',
                    description: 'List operations',
                    usage: 'length(), nth(), index(), append(), join()',
                    example: '$list: red, blue, green;\n\n.length { count: length($list); } // 3\n.second { color: nth($list, 2); } // blue',
                },
                {
                    command: 'Type Functions',
                    description: 'Check value types',
                    usage: 'type-of(), unit(), unitless()',
                    example: '@if type-of($value) == number {\n  // It\'s a number\n}\n@if unitless($value) {\n  // No unit\n}',
                },
            ],
        },
        {
            title: 'Advanced Features',
            commands: [
                {
                    command: 'Error Handling',
                    description: 'Throw errors',
                    usage: '@error "message";',
                    example: '@mixin button($color) {\n  @if type-of($color) != color {\n    @error "Expected color, got #{type-of($color)}";\n  }\n}',
                },
                {
                    command: 'Warnings',
                    description: 'Show warnings',
                    usage: '@warn "message";',
                    example: '@mixin deprecated-mixin {\n  @warn "This mixin is deprecated";\n  // ...\n}',
                },
                {
                    command: 'Debug',
                    description: 'Debug output',
                    usage: '@debug value;',
                    example: '$width: 100px;\n@debug "Width is: #{$width}";',
                },
                {
                    command: 'Feature Queries',
                    description: 'Check for feature support',
                    usage: '@supports (property: value)',
                    example: '@supports (display: grid) {\n  .container { display: grid; }\n}',
                },
            ],
        },
        {
            title: 'Best Practices',
            commands: [
                {
                    command: 'File Organization',
                    description: 'Organize SCSS files',
                    usage: 'Partials for components',
                    example: '// _variables.scss\n// _mixins.scss\n// _base.scss\n// _components.scss\n// main.scss',
                },
                {
                    command: 'Naming Conventions',
                    description: 'Use consistent naming',
                    usage: 'BEM methodology',
                    example: '.block {}\n.block__element {}\n.block--modifier {}',
                },
                {
                    command: 'Avoid Deep Nesting',
                    description: 'Limit nesting depth',
                    usage: 'Max 3-4 levels',
                    example: '.nav { // Level 1\n  ul { // Level 2\n    li { // Level 3\n      a { // Level 4 - OK\n      }\n    }\n  }\n}',
                },
            ],
        },
    ],
};

