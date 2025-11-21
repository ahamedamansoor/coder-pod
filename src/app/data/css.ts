
import type { Language } from './types';

export const css: Language = {
  slug: 'css',
  name: 'CSS',
  topics: [
    // GETTING STARTED
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning CSS from scratch to advanced concepts.' },
    
    // FUNDAMENTALS
    { slug: 'introduction-to-css', title: 'CSS Introduction', explanation: 'What is CSS, how it works with HTML, and why it\'s essential for web development.' },
    { slug: 'css-syntax-and-selectors', title: 'Syntax & Selectors', explanation: 'CSS syntax rules, basic selectors (element, class, ID), and how to target HTML elements.' },
    { slug: 'css-specificity', title: 'Specificity & Cascade', explanation: 'Understanding CSS specificity, inheritance, and the cascade - how CSS rules are applied.' },
    { slug: 'css-units', title: 'Units & Values', explanation: 'Absolute units (px, pt), relative units (em, rem, %, vw, vh), and when to use each.' },
    
    // STYLING BASICS
    { slug: 'css-colors', title: 'Colors & Backgrounds', explanation: 'Color formats (hex, RGB, HSL), background properties, gradients, and color theory.' },
    { slug: 'css-typography', title: 'Typography', explanation: 'Font properties, text styling, web fonts, font loading, and typography best practices.' },
    { slug: 'css-text-effects', title: 'Text Effects', explanation: 'Text shadows, text decoration, text transform, and advanced text styling techniques.' },
    
    // BOX MODEL & LAYOUT
    { slug: 'css-box-model', title: 'The Box Model', explanation: 'Understanding margin, border, padding, content, and box-sizing property.' },
    { slug: 'css-display', title: 'Display Property', explanation: 'Block, inline, inline-block, none, and modern display values like flex and grid.' },
    { slug: 'css-positioning', title: 'Positioning', explanation: 'Static, relative, absolute, fixed, and sticky positioning with practical examples.' },
    { slug: 'css-float-clear', title: 'Float & Clear', explanation: 'Traditional layout techniques, clearing floats, and when to use modern alternatives.' },
    
    // ADVANCED SELECTORS
    { slug: 'css-combinators', title: 'Combinators', explanation: 'Descendant, child, adjacent sibling, and general sibling combinators for complex selections.' },
    { slug: 'css-attribute-selectors', title: 'Attribute Selectors', explanation: 'Selecting elements based on attributes and their values with various matching patterns.' },
    { slug: 'css-pseudo-classes', title: 'Pseudo-classes', explanation: 'State-based selectors like :hover, :focus, :nth-child, :first-of-type, and form pseudo-classes.' },
    { slug: 'css-pseudo-elements', title: 'Pseudo-elements', explanation: 'Styling parts of elements with ::before, ::after, ::first-line, ::first-letter, and ::selection.' },
    
    // MODERN LAYOUT
    { slug: 'css-flexbox', title: 'Flexbox', explanation: 'Complete flexbox guide: flex containers, flex items, alignment, and real-world layout patterns.' },
    { slug: 'css-grid', title: 'CSS Grid', explanation: 'Two-dimensional layouts with grid containers, grid items, tracks, areas, and responsive grids.' },
    { slug: 'css-layout-patterns', title: 'Layout Patterns', explanation: 'Common layout patterns: sidebar, header-footer, card layouts, and modern CSS techniques.' },
    
    // RESPONSIVE DESIGN
    { slug: 'css-responsive-design', title: 'Responsive Design', explanation: 'Mobile-first approach, breakpoints, flexible layouts, and responsive images.' },
    { slug: 'css-media-queries', title: 'Media Queries', explanation: 'Advanced media queries, device targeting, print styles, and responsive design strategies.' },
    { slug: 'css-container-queries', title: 'Container Queries', explanation: 'Modern responsive design with container queries and element-based responsive design.' },
    
    // ANIMATIONS & EFFECTS
    { slug: 'css-transitions', title: 'Transitions', explanation: 'Smooth property changes, timing functions, delays, and creating engaging user interactions.' },
    { slug: 'css-animations', title: 'Animations', explanation: 'Keyframe animations, animation properties, complex sequences, and performance considerations.' },
    { slug: 'css-transforms', title: 'Transforms', explanation: '2D and 3D transforms: translate, rotate, scale, skew, and transform-origin.' },
    
    // ADVANCED CSS
    { slug: 'css-variables', title: 'CSS Variables', explanation: 'Custom properties, dynamic theming, CSS variables with JavaScript, and design systems.' },
    { slug: 'css-functions', title: 'CSS Functions', explanation: 'calc(), min(), max(), clamp(), var(), and other CSS functions for dynamic styling.' },
    { slug: 'css-logical-properties', title: 'Logical Properties', explanation: 'Writing-mode independent properties for international and flexible layouts.' },
    { slug: 'css-modern-features', title: 'Modern CSS Features', explanation: 'Latest CSS features: subgrid, aspect-ratio, gap, scroll-snap, and browser support.' },
    
    // PROFESSIONAL CSS
    { slug: 'css-performance', title: 'Performance', explanation: 'CSS optimization, critical CSS, render-blocking, and performance best practices.' },
    { slug: 'css-architecture', title: 'CSS Architecture', explanation: 'Organizing CSS, naming conventions, component-based CSS, and maintainable stylesheets.' },
    { slug: 'css-debugging', title: 'Debugging CSS', explanation: 'Developer tools, common issues, debugging techniques, and troubleshooting layouts.' },
    { slug: 'css-best-practices', title: 'Best Practices', explanation: 'CSS coding standards, accessibility, cross-browser compatibility, and professional workflows.' }
  ]
};
