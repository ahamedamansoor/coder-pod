
import type { Language } from './types';

export const css: Language = {
  slug: 'css',
  name: 'CSS',
  description: 'Cascading Style Sheets for styling modern web applications',
  topics: [
    // GETTING STARTED
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering CSS from fundamentals to cutting-edge features.' },
    
    // FUNDAMENTALS
    { slug: 'introduction-to-css', title: 'CSS Introduction', explanation: 'What is CSS, how it works with HTML, CSS versions (CSS1-CSS4), and its role in web development.', category: 'Fundamentals' },
    { slug: 'css-syntax-and-selectors', title: 'Syntax & Selectors', explanation: 'CSS syntax rules, basic selectors (element, class, ID, universal), and how to target HTML elements.', category: 'Fundamentals' },
    { slug: 'css-specificity', title: 'Specificity & Cascade', explanation: 'Understanding CSS specificity calculation, inheritance, cascade layers, and rule application order.', category: 'Fundamentals' },
    { slug: 'css-units', title: 'Units & Values', explanation: 'Absolute (px, pt, cm), relative (em, rem, %, vw, vh, vmin, vmax), and modern units (ch, ex, lh, rlh).', category: 'Fundamentals' },
    { slug: 'css-box-sizing', title: 'Box Sizing', explanation: 'Content-box vs border-box, box-sizing property, and layout calculations.', category: 'Fundamentals' },
    { slug: 'css-overflow', title: 'Overflow', explanation: 'Overflow (visible, hidden, scroll, auto), overflow-x/y, text-overflow, and scrollbar styling.', category: 'Fundamentals' },
    { slug: 'css-visibility', title: 'Visibility & Opacity', explanation: 'Visibility, opacity, pointer-events, and element hiding techniques.', category: 'Fundamentals' },
    
    // STYLING BASICS
    { slug: 'css-colors', title: 'Colors & Backgrounds', explanation: 'Color formats (hex, RGB, RGBA, HSL, HSLA), background properties, multiple backgrounds, and gradients.', category: 'Styling Basics' },
    { slug: 'modern-color-formats', title: 'Modern Color Formats', explanation: 'oklch(), oklab(), color-mix(), relative colors, and wide-gamut color spaces (P3, Rec2020).', category: 'Styling Basics' },
    { slug: 'css-gradients', title: 'Gradients', explanation: 'Linear, radial, conic gradients, repeating gradients, and advanced gradient techniques.', category: 'Styling Basics' },
    { slug: 'css-typography', title: 'Typography', explanation: 'Font family, size, weight, style, line-height, letter-spacing, and web font loading strategies.', category: 'Styling Basics' },
    { slug: 'variable-fonts', title: 'Variable Fonts', explanation: 'Variable font technology, font-variation-settings, font-optical-sizing, and responsive typography.', category: 'Styling Basics' },
    { slug: 'css-text-effects', title: 'Text Effects', explanation: 'Text shadows, text-stroke, text-decoration (underline, overline), text-decoration-style, and text-emphasis.', category: 'Styling Basics' },
    { slug: 'text-wrapping', title: 'Text Wrapping', explanation: 'text-wrap (balance, pretty), word-break, overflow-wrap, hyphens, and advanced text layout.', category: 'Styling Basics' },
    
    // BOX MODEL & LAYOUT
    { slug: 'css-box-model', title: 'The Box Model', explanation: 'Understanding margin, border, padding, content, box-sizing, and the complete box model.', category: 'Box Model & Layout' },
    { slug: 'css-display', title: 'Display Property', explanation: 'Block, inline, inline-block, none, contents, flow-root, and modern display values.', category: 'Box Model & Layout' },
    { slug: 'css-positioning', title: 'Positioning', explanation: 'Static, relative, absolute, fixed, sticky positioning, inset properties, and position-anchor.', category: 'Box Model & Layout' },
    { slug: 'css-float-clear', title: 'Float & Clear', explanation: 'Float layouts, clearing floats, clearfix techniques, and modern alternatives.', category: 'Box Model & Layout' },
    { slug: 'css-stacking-context', title: 'Stacking Context', explanation: 'Z-index, stacking contexts, painting order, and layering elements properly.', category: 'Box Model & Layout' },
    
    // ADVANCED SELECTORS
    { slug: 'css-combinators', title: 'Combinators', explanation: 'Descendant ( ), child (>), adjacent sibling (+), general sibling (~) combinators.', category: 'Advanced Selectors' },
    { slug: 'css-attribute-selectors', title: 'Attribute Selectors', explanation: '[attr], [attr=value], [attr~=value], [attr|=value], [attr^=value], [attr$=value], [attr*=value].', category: 'Advanced Selectors' },
    { slug: 'css-pseudo-classes', title: 'Pseudo-classes', explanation: ':hover, :focus, :active, :visited, :nth-child, :nth-of-type, :first-child, :last-child, :only-child.', category: 'Advanced Selectors' },
    { slug: 'css-pseudo-elements', title: 'Pseudo-elements', explanation: '::before, ::after, ::first-line, ::first-letter, ::selection, ::marker, ::placeholder.', category: 'Advanced Selectors' },
    
    // MODERN LAYOUT
    { slug: 'css-flexbox', title: 'Flexbox', explanation: 'Flex containers, flex items, flex-direction, flex-wrap, flex-grow/shrink/basis, gap, alignment properties.', category: 'Modern Layout' },
    { slug: 'flexbox-advanced', title: 'Advanced Flexbox', explanation: 'Flex algorithms, intrinsic sizing, flex-basis: content, order property, and complex flex patterns.', category: 'Modern Layout' },
    { slug: 'css-grid', title: 'CSS Grid', explanation: 'Grid containers, grid items, template columns/rows, grid-areas, auto-placement, and responsive grids.', category: 'Modern Layout' },
    { slug: 'css-grid-advanced', title: 'Advanced Grid', explanation: 'Subgrid, minmax(), auto-fill vs auto-fit, masonry layout, named grid lines, and dense packing.', category: 'Modern Layout' },
    { slug: 'multi-column-layout', title: 'Multi-Column', explanation: 'Column-count, column-width, column-gap, column-rule, break-inside, and magazine-style layouts.', category: 'Modern Layout' },
    { slug: 'css-layout-patterns', title: 'Layout Patterns', explanation: 'Holy grail, sidebar, sticky footer, 12-column grid, card layouts, and modern CSS layout recipes.', category: 'Modern Layout' },
    
    // RESPONSIVE DESIGN
    { slug: 'css-responsive-design', title: 'Responsive Design', explanation: 'Mobile-first approach, fluid layouts, flexible images, responsive typography, and viewport units.', category: 'Responsive Design' },
    { slug: 'css-media-queries', title: 'Media Queries', explanation: 'Media types, media features (width, height, orientation), print styles, and responsive strategies.', category: 'Responsive Design' },
    { slug: 'css-container-queries', title: 'Container Queries', explanation: '@container rules, container-type, container-name, and element-based responsive design.', category: 'Responsive Design' },
    { slug: 'css-aspect-ratio', title: 'Aspect Ratio', explanation: 'aspect-ratio property, maintaining ratios for images/videos, and responsive aspect ratios.', category: 'Responsive Design' },
    { slug: 'css-responsive-units', title: 'Modern Responsive Units', explanation: 'clamp(), min(), max(), dvh/lvh/svh viewport units, and fluid design techniques.', category: 'Responsive Design' },
    
    // ANIMATIONS & EFFECTS
    { slug: 'css-transitions', title: 'Transitions', explanation: 'Transition properties, duration, timing functions (ease, cubic-bezier), delays, and smooth interactions.', category: 'Animations & Effects' },
    { slug: 'css-animations', title: 'Animations', explanation: 'Keyframe animations (@keyframes), animation properties, iteration count, direction, and fill-mode.', category: 'Animations & Effects' },
    { slug: 'css-transforms', title: 'Transforms', explanation: '2D transforms (translate, rotate, scale, skew), transform-origin, and matrix transformations.', category: 'Animations & Effects' },
    
    // VISUAL EFFECTS
    { slug: 'css-filters', title: 'Filters', explanation: 'blur(), brightness(), contrast(), grayscale(), hue-rotate(), saturate(), sepia(), drop-shadow().', category: 'Visual Effects' },
    { slug: 'css-backdrop-filter', title: 'Backdrop Filter', explanation: 'backdrop-filter property for glassmorphism effects and background blur.', category: 'Visual Effects' },
    { slug: 'css-blend-modes', title: 'Blend Modes', explanation: 'mix-blend-mode, background-blend-mode, isolation, and compositing effects.', category: 'Visual Effects' },
    { slug: 'css-masks', title: 'Masks & Clipping', explanation: 'clip-path, mask-image, mask-mode, and creating complex shapes and effects.', category: 'Visual Effects' },
    { slug: 'css-shapes', title: 'CSS Shapes', explanation: 'shape-outside, shape-margin, shape-image-threshold, and text wrapping around shapes.', category: 'Visual Effects' },
    { slug: 'css-shadows', title: 'Shadows', explanation: 'box-shadow, text-shadow, drop-shadow(), multiple shadows, and shadow techniques.', category: 'Visual Effects' },
    
    // ADVANCED CSS
    { slug: 'css-variables', title: 'CSS Variables', explanation: 'Custom properties (--var), var(), dynamic theming, scope, inheritance, and design systems.', category: 'Advanced CSS' },
    { slug: 'css-functions', title: 'CSS Functions', explanation: 'calc(), min(), max(), clamp(), var(), attr(), url(), and mathematical functions.', category: 'Advanced CSS' },
    { slug: 'css-logical-properties', title: 'Logical Properties', explanation: 'block-start/end, inline-start/end, writing-mode, direction, and international layouts.', category: 'Advanced CSS' },
    { slug: 'css-nesting', title: 'CSS Nesting', explanation: 'Native CSS nesting with &, nesting selectors, and organizing stylesheets.', category: 'Advanced CSS' },
    { slug: 'css-layers', title: 'Cascade Layers', explanation: '@layer rules, layer ordering, specificity management, and modular CSS architecture.', category: 'Advanced CSS' },
    { slug: 'css-scope', title: 'CSS Scoping', explanation: '@scope rules, scoping styles to subtrees, and component-level styling.', category: 'Advanced CSS' },
    { slug: 'css-counter', title: 'Counters', explanation: 'counter-reset, counter-increment, counter(), counters(), and automatic numbering.', category: 'Advanced CSS' },
    { slug: 'css-generated-content', title: 'Generated Content', explanation: 'content property, attr(), quotes, string concatenation, and dynamic content.', category: 'Advanced CSS' },
    
    // MODERN FEATURES
    { slug: 'css-subgrid', title: 'Subgrid', explanation: 'grid-template-columns/rows: subgrid, inheriting grid tracks, and nested grids.', category: 'Modern Features' },
    { slug: 'css-scroll-snap', title: 'Scroll Snap', explanation: 'scroll-snap-type, scroll-snap-align, scroll-padding, and creating scroll experiences.', category: 'Modern Features' },
    { slug: 'css-overscroll', title: 'Overscroll Behavior', explanation: 'overscroll-behavior, scroll chaining, pull-to-refresh, and scroll boundaries.', category: 'Modern Features' },
    { slug: 'css-containment', title: 'CSS Containment', explanation: 'contain property, size containment, layout containment, and rendering optimization.', category: 'Modern Features' },
    { slug: 'css-content-visibility', title: 'Content Visibility', explanation: 'content-visibility: auto/hidden, rendering performance, and lazy rendering.', category: 'Modern Features' },
    { slug: 'css-will-change', title: 'Will Change', explanation: 'will-change property, performance optimization hints, and GPU acceleration.', category: 'Modern Features' },
    { slug: 'css-anchor-positioning', title: 'Anchor Positioning', explanation: 'anchor-name, position-anchor, anchor(), and positioning elements relative to anchors (CSS 2024).', category: 'Modern Features' },
    { slug: 'css-relative-colors', title: 'Relative Colors', explanation: 'from keyword, relative color syntax, and deriving colors from other colors.', category: 'Modern Features' },
    { slug: 'css-trigonometric-functions', title: 'Trigonometric Functions', explanation: 'sin(), cos(), tan(), asin(), acos(), atan(), atan2() for mathematical calculations.', category: 'Modern Features' },
    { slug: 'css-exponential-functions', title: 'Exponential Functions', explanation: 'pow(), sqrt(), hypot(), log(), exp() for advanced mathematical operations.', category: 'Modern Features' },
    { slug: 'css-stepped-functions', title: 'Stepped Functions', explanation: 'round(), mod(), rem() for rounding and modulo operations in CSS.', category: 'Modern Features' },
    { slug: 'css-sign-functions', title: 'Sign Functions', explanation: 'abs(), sign() for absolute values and sign detection.', category: 'Modern Features' },
    
    // FORMS & UI
    { slug: 'form-styling', title: 'Form Styling', explanation: 'Styling inputs, selects, textareas, buttons, and modern form controls.', category: 'Forms & UI' },
    { slug: 'form-validation-styling', title: 'Form Validation', explanation: ':valid, :invalid, :required, :optional, :in-range, :out-of-range pseudo-classes.', category: 'Forms & UI' },
    { slug: 'custom-form-elements', title: 'Custom Form Elements', explanation: 'Styling checkboxes, radio buttons, file inputs, range sliders, and custom controls.', category: 'Forms & UI' },
    { slug: 'css-appearance', title: 'Appearance', explanation: 'appearance: none, removing default styling, and creating custom UI components.', category: 'Forms & UI' },
    { slug: 'accent-color', title: 'Accent Color', explanation: 'accent-color property for styling form controls with theme colors.', category: 'Forms & UI' },
    
    // ACCESSIBILITY
    { slug: 'css-accessibility', title: 'Accessibility', explanation: 'Color contrast, focus indicators, screen reader considerations, and inclusive design.', category: 'Accessibility' },
    { slug: 'focus-management', title: 'Focus Management', explanation: 'outline, focus-visible, focus-within, keyboard navigation, and accessible interactions.', category: 'Accessibility' },
    { slug: 'reduced-motion', title: 'Reduced Motion', explanation: 'prefers-reduced-motion, accessible animations, and respecting user preferences.', category: 'Accessibility' },
    { slug: 'high-contrast-mode', title: 'High Contrast', explanation: 'prefers-contrast, forced-colors media query, and high contrast mode support.', category: 'Accessibility' },
    
    // PRINT & MEDIA
    { slug: 'print-styles', title: 'Print Styles', explanation: '@media print, page breaks, print-specific styling, and PDF optimization.', category: 'Print & Media' },
    { slug: 'page-rules', title: 'Page Rules', explanation: '@page rules, page margins, size, orientation, and paged media.', category: 'Print & Media' },
    
    // OPTIMIZATION
    { slug: 'css-performance', title: 'Performance', explanation: 'Critical CSS, render-blocking, CSS optimization, bundle size, and performance metrics.', category: 'Optimization' },
    { slug: 'css-loading-strategies', title: 'Loading Strategies', explanation: 'Preload, prefetch, async loading, font-display, and resource prioritization.', category: 'Optimization' },
    { slug: 'css-unused-removal', title: 'Unused CSS Removal', explanation: 'PurgeCSS, tree-shaking, critical path, and eliminating unused styles.', category: 'Optimization' },
    { slug: 'css-minification', title: 'Minification', explanation: 'CSS minification, compression, build optimization, and production workflows.', category: 'Optimization' },
    
    // ARCHITECTURE
    { slug: 'css-architecture', title: 'CSS Architecture', explanation: 'BEM, SMACSS, OOCSS, ITCSS methodologies, and scalable CSS organization.', category: 'Architecture' },
    { slug: 'css-naming-conventions', title: 'Naming Conventions', explanation: 'Class naming patterns, component naming, utility classes, and consistency.', category: 'Architecture' },
    { slug: 'css-modularity', title: 'Modularity', explanation: 'Component-based CSS, CSS Modules, scoped styles, and modular architecture.', category: 'Architecture' },
    { slug: 'design-systems', title: 'Design Systems', explanation: 'Building design systems, design tokens, component libraries, and style guides.', category: 'Architecture' },
    
    // PREPROCESSORS & TOOLING
    { slug: 'css-preprocessors', title: 'CSS Preprocessors', explanation: 'Sass, Less, PostCSS, variables, mixins, functions, and preprocessing workflows.', category: 'Preprocessors & Tooling' },
    { slug: 'postcss', title: 'PostCSS', explanation: 'PostCSS plugins, Autoprefixer, CSS-next, and modern CSS transformations.', category: 'Preprocessors & Tooling' },
    { slug: 'css-in-js', title: 'CSS-in-JS', explanation: 'Styled-components, Emotion, CSS Modules, and JavaScript-based styling solutions.', category: 'Preprocessors & Tooling' },
    
    // BROWSER SUPPORT
    { slug: 'cross-browser-css', title: 'Cross-Browser CSS', explanation: 'Browser compatibility, vendor prefixes, feature detection, and progressive enhancement.', category: 'Browser Support' },
    { slug: 'css-feature-queries', title: 'Feature Queries', explanation: '@supports rules, feature detection, graceful degradation, and fallback strategies.', category: 'Browser Support' },
    { slug: 'css-autoprefixer', title: 'Autoprefixer', explanation: 'Automatic vendor prefixing, browserlist configuration, and compatibility management.', category: 'Browser Support' },
    
    // DEBUGGING & TESTING
    { slug: 'css-debugging', title: 'Debugging CSS', explanation: 'DevTools, inspector, computed styles, layout debugging, and troubleshooting techniques.', category: 'Debugging & Testing' },
    { slug: 'css-validation', title: 'CSS Validation', explanation: 'W3C validator, linting tools, CSS quality checks, and standards compliance.', category: 'Debugging & Testing' },
    { slug: 'css-testing', title: 'CSS Testing', explanation: 'Visual regression testing, snapshot testing, cross-browser testing, and QA workflows.', category: 'Debugging & Testing' },
    
    // BEST PRACTICES
    { slug: 'css-best-practices', title: 'Best Practices', explanation: 'Coding standards, maintainability, scalability, team workflows, and professional CSS.', category: 'Best Practices' },
    { slug: 'css-documentation', title: 'Documentation', explanation: 'Commenting code, style guides, living documentation, and knowledge sharing.', category: 'Best Practices' },
    { slug: 'css-refactoring', title: 'Refactoring', explanation: 'Cleaning up CSS, removing technical debt, improving structure, and maintenance strategies.', category: 'Best Practices' }
  ]
};
