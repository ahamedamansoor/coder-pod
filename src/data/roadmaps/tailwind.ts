
import type { Roadmap } from './types';

export const tailwind: Roadmap = {
  slug: 'tailwind',
  name: 'Tailwind CSS',
  description: 'A utility-first CSS framework for rapidly building modern websites',
  topics: [
    // GETTING STARTED
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for mastering Tailwind CSS from basics to advanced concepts.' },
    
    // FUNDAMENTALS
    { slug: 'introduction-to-tailwind', title: 'Introduction to Tailwind', explanation: 'What is Tailwind CSS, utility-first approach, and why it revolutionizes CSS development.', category: 'Fundamentals' },
    { slug: 'installation-and-setup', title: 'Installation & Setup', explanation: 'Installing Tailwind via npm, CDN, and configuring with Vite, Next.js, React, and other frameworks.', category: 'Fundamentals' },
    { slug: 'tailwind-configuration', title: 'Configuration', explanation: 'Understanding tailwind.config.js, customizing theme, extending default configuration, and plugins.', category: 'Fundamentals' },
    { slug: 'utility-first-approach', title: 'Utility-First CSS', explanation: 'The philosophy behind utility-first CSS, benefits, and when to use traditional CSS vs utilities.', category: 'Fundamentals' },
    { slug: 'responsive-design-basics', title: 'Responsive Design Basics', explanation: 'Mobile-first breakpoints (sm, md, lg, xl, 2xl), responsive modifiers, and adaptive design patterns.', category: 'Fundamentals' },
    
    // CORE CONCEPTS
    { slug: 'spacing-utilities', title: 'Spacing System', explanation: 'Margin, padding utilities, spacing scale (0-96), negative values, and responsive spacing.', category: 'Core Concepts' },
    { slug: 'sizing-utilities', title: 'Sizing', explanation: 'Width, height, min/max sizing, full viewport units, arbitrary values, and responsive sizing.', category: 'Core Concepts' },
    { slug: 'typography-utilities', title: 'Typography', explanation: 'Font family, size, weight, line height, letter spacing, text alignment, and color utilities.', category: 'Core Concepts' },
    { slug: 'color-system', title: 'Color System', explanation: 'Tailwind color palette, opacity modifiers, color customization, and creating custom colors.', category: 'Core Concepts' },
    { slug: 'background-utilities', title: 'Backgrounds', explanation: 'Background colors, gradients, images, position, size, repeat, and attachment utilities.', category: 'Core Concepts' },
    { slug: 'border-utilities', title: 'Borders', explanation: 'Border width, style, color, radius, divide utilities, and ring utilities for focus states.', category: 'Core Concepts' },
    
    // LAYOUT
    { slug: 'display-utilities', title: 'Display', explanation: 'Block, inline, inline-block, flex, grid, table, and hidden display utilities.', category: 'Layout' },
    { slug: 'positioning', title: 'Position', explanation: 'Static, relative, absolute, fixed, sticky positioning with top/right/bottom/left utilities.', category: 'Layout' },
    { slug: 'flexbox', title: 'Flexbox', explanation: 'Complete flexbox utilities: direction, wrap, grow, shrink, gap, justify-content, align-items.', category: 'Layout' },
    { slug: 'grid-system', title: 'CSS Grid', explanation: 'Grid template columns/rows, gap, auto-flow, column/row span, and responsive grids.', category: 'Layout' },
    { slug: 'container', title: 'Container', explanation: 'Container utility, max-width breakpoints, centering, and custom container configuration.', category: 'Layout' },
    { slug: 'z-index', title: 'Z-Index & Stacking', explanation: 'Layering elements with z-index utilities and managing stacking contexts.', category: 'Layout' },
    
    // EFFECTS & INTERACTIVITY
    { slug: 'hover-focus-states', title: 'Hover & Focus States', explanation: 'Interactive state modifiers: hover, focus, active, visited, and group/peer variants.', category: 'Effects & Interactivity' },
    { slug: 'transitions', title: 'Transitions', explanation: 'Transition properties, duration, timing functions, and creating smooth animations.', category: 'Effects & Interactivity' },
    { slug: 'transforms', title: 'Transforms', explanation: 'Scale, rotate, translate, skew transforms with origin and 3D transform utilities.', category: 'Effects & Interactivity' },
    { slug: 'animations', title: 'Animations', explanation: 'Built-in animations (spin, ping, pulse, bounce), custom keyframes, and animation utilities.', category: 'Effects & Interactivity' },
    { slug: 'shadows', title: 'Shadows', explanation: 'Box shadows, drop shadows, text shadows, and custom shadow configurations.', category: 'Effects & Interactivity' },
    { slug: 'opacity-blending', title: 'Opacity & Blending', explanation: 'Opacity utilities, mix-blend modes, background-blend modes, and visual effects.', category: 'Effects & Interactivity' },
    
    // ADVANCED FEATURES
    { slug: 'dark-mode', title: 'Dark Mode', explanation: 'Implementing dark mode with dark: variant, system preferences, manual toggle, and theming.', category: 'Advanced Features' },
    { slug: 'custom-utilities', title: 'Custom Utilities', explanation: 'Creating custom utilities using @apply, adding utilities via plugins, and arbitrary values.', category: 'Advanced Features' },
    { slug: 'arbitrary-values', title: 'Arbitrary Values', explanation: 'Using bracket notation for one-off custom values like w-[137px] and bg-[#1da1f2].', category: 'Advanced Features' },
    { slug: 'jit-mode', title: 'JIT Mode', explanation: 'Just-In-Time compiler, on-demand class generation, and performance benefits.', category: 'Advanced Features' },
    { slug: 'component-extraction', title: 'Component Extraction', explanation: 'When and how to extract components, using @apply, and maintaining utility-first principles.', category: 'Advanced Features' },
    { slug: 'plugins', title: 'Plugins', explanation: 'Official plugins (forms, typography, aspect-ratio), creating custom plugins, and plugin ecosystem.', category: 'Advanced Features' },
    
    // RESPONSIVE DESIGN
    { slug: 'breakpoints', title: 'Breakpoints', explanation: 'Mobile-first breakpoints, custom breakpoints, responsive variants, and container queries.', category: 'Responsive Design' },
    { slug: 'responsive-typography', title: 'Responsive Typography', explanation: 'Fluid typography, responsive font sizes, line heights, and typography scales.', category: 'Responsive Design' },
    { slug: 'responsive-spacing', title: 'Responsive Spacing', explanation: 'Adaptive spacing, responsive margins/padding, and maintaining consistency across breakpoints.', category: 'Responsive Design' },
    { slug: 'mobile-first-design', title: 'Mobile-First Design', explanation: 'Mobile-first workflow, progressive enhancement, and designing for small screens first.', category: 'Responsive Design' },
    
    // FORMS & UI COMPONENTS
    { slug: 'form-styling', title: 'Form Styling', explanation: 'Styling inputs, selects, textareas, checkboxes, radio buttons with Tailwind utilities.', category: 'Forms & UI Components' },
    { slug: 'forms-plugin', title: 'Forms Plugin', explanation: 'Using @tailwindcss/forms plugin for beautiful form defaults and customization.', category: 'Forms & UI Components' },
    { slug: 'buttons', title: 'Button Patterns', explanation: 'Creating various button styles, sizes, states, and interactive button components.', category: 'Forms & UI Components' },
    { slug: 'cards', title: 'Card Components', explanation: 'Building card layouts, card patterns, and responsive card grids.', category: 'Forms & UI Components' },
    { slug: 'navigation', title: 'Navigation', explanation: 'Header navigation, sidebars, breadcrumbs, tabs, and responsive navigation patterns.', category: 'Forms & UI Components' },
    { slug: 'modals-overlays', title: 'Modals & Overlays', explanation: 'Creating modals, dialogs, tooltips, popovers, and overlay components.', category: 'Forms & UI Components' },
    
    // OPTIMIZATION
    { slug: 'production-optimization', title: 'Production Build', explanation: 'Purging unused CSS, minification, optimization strategies, and reducing bundle size.', category: 'Optimization' },
    { slug: 'performance-best-practices', title: 'Performance', explanation: 'Performance optimization, avoiding common pitfalls, and measuring CSS performance.', category: 'Optimization' },
    { slug: 'using-with-preprocessors', title: 'CSS Preprocessors', explanation: 'Integrating with Sass, Less, PostCSS, and using nested styles with Tailwind.', category: 'Optimization' },
    
    // DESIGN SYSTEMS
    { slug: 'theme-customization', title: 'Theme Customization', explanation: 'Extending default theme, creating design tokens, and building consistent design systems.', category: 'Design Systems' },
    { slug: 'design-tokens', title: 'Design Tokens', explanation: 'Managing design tokens, spacing scales, color systems, and typography scales.', category: 'Design Systems' },
    { slug: 'component-libraries', title: 'Component Libraries', explanation: 'Building reusable component libraries, documentation, and maintaining consistency.', category: 'Design Systems' },
    
    // TYPOGRAPHY PLUGIN
    { slug: 'typography-plugin', title: 'Typography Plugin', explanation: 'Using @tailwindcss/typography for beautiful prose, markdown styling, and content-rich pages.', category: 'Typography' },
    { slug: 'text-utilities', title: 'Text Utilities', explanation: 'Text color, decoration, transform, overflow, truncate, and advanced text styling.', category: 'Typography' },
    { slug: 'font-management', title: 'Font Management', explanation: 'Custom fonts, Google Fonts integration, font loading strategies, and web font optimization.', category: 'Typography' },
    
    // ACCESSIBILITY
    { slug: 'accessibility-utilities', title: 'Accessibility', explanation: 'Screen reader utilities, focus management, ARIA patterns, and accessible color contrasts.', category: 'Accessibility' },
    { slug: 'focus-states', title: 'Focus States', explanation: 'Focus rings, focus-visible, keyboard navigation, and accessible interactive elements.', category: 'Accessibility' },
    
    // FILTERS & EFFECTS
    { slug: 'filters', title: 'Filters', explanation: 'Blur, brightness, contrast, grayscale, hue-rotate, and other filter utilities.', category: 'Filters & Effects' },
    { slug: 'backdrop-filter', title: 'Backdrop Filter', explanation: 'backdrop-blur, backdrop-brightness for glassmorphism effects.', category: 'Filters & Effects' },
    { slug: 'blend-modes', title: 'Blend Modes', explanation: 'mix-blend-mode and background-blend-mode utilities.', category: 'Filters & Effects' },
    { slug: 'masks', title: 'Masks', explanation: 'Mask utilities for complex visual effects.', category: 'Filters & Effects' },
    
    // UTILITIES
    { slug: 'divide-utilities', title: 'Divide Utilities', explanation: 'Adding borders between elements with divide utilities.', category: 'Utilities' },
    { slug: 'space-utilities', title: 'Space Utilities', explanation: 'Spacing between child elements with space utilities.', category: 'Utilities' },
    { slug: 'ring-utilities', title: 'Ring Utilities', explanation: 'Focus rings, ring offsets, and ring colors for interactive elements.', category: 'Utilities' },
    { slug: 'sr-only', title: 'Screen Reader Only', explanation: 'sr-only and not-sr-only for accessibility.', category: 'Utilities' },
    { slug: 'forced-colors', title: 'Forced Colors', explanation: 'Supporting Windows High Contrast Mode with forced-color-adjust.', category: 'Utilities' },
    { slug: 'logical-properties', title: 'Logical Properties', explanation: 'Start/end utilities for RTL support and internationalization.', category: 'Utilities' },
    
    // ADVANCED PATTERNS
    { slug: 'group-peer-variants', title: 'Group & Peer', explanation: 'Parent-child styling with group, sibling styling with peer, and complex state management.', category: 'Advanced Patterns' },
    { slug: 'state-variants', title: 'State Variants', explanation: 'Checked, disabled, required, invalid, and other form state variants.', category: 'Advanced Patterns' },
    { slug: 'pseudo-variants', title: 'Pseudo Variants', explanation: 'First, last, odd, even, before, after, and other pseudo-class/element variants.', category: 'Advanced Patterns' },
    { slug: 'advanced-selectors', title: 'Advanced Selectors', explanation: 'Custom variants, arbitrary variants, and complex selector patterns.', category: 'Advanced Patterns' },
    
    // MODERN CSS FEATURES
    { slug: 'container-queries', title: 'Container Queries', explanation: 'Modern responsive design with @container, container types, and element queries (Tailwind 3.2+).', category: 'Modern CSS' },
    { slug: 'aspect-ratio', title: 'Aspect Ratio', explanation: 'Maintaining aspect ratios for images, videos, and responsive elements.', category: 'Modern CSS' },
    { slug: 'css-grid-advanced', title: 'Advanced Grid', explanation: 'Complex grid layouts, subgrid, masonry, and modern grid techniques.', category: 'Modern CSS' },
    { slug: 'backdrop-filters', title: 'Backdrop Filters', explanation: 'Blur, brightness, contrast effects on element backgrounds for glassmorphism.', category: 'Modern CSS' },
    { slug: 'scroll-snap', title: 'Scroll Snap', explanation: 'Scroll snap utilities for creating smooth scrolling experiences.', category: 'Modern CSS' },
    { slug: 'css-columns', title: 'Multi-Column Layout', explanation: 'Multi-column text layouts with Tailwind utilities.', category: 'Modern CSS' },
    { slug: 'text-balance', title: 'Text Balance', explanation: 'text-balance and text-pretty for improved typography (Tailwind 3.4+).', category: 'Modern CSS' },
    { slug: 'subgrid', title: 'Subgrid', explanation: 'Using CSS subgrid with Tailwind Grid utilities (Tailwind 3.4+).', category: 'Modern CSS' },
    
    // VARIANTS & MODIFIERS
    { slug: 'data-attributes', title: 'Data Attribute Variants', explanation: 'Styling based on data attributes with data-[*] modifiers (Tailwind 3.3+).', category: 'Variants & Modifiers' },
    { slug: 'has-variant', title: 'Has Variant', explanation: ':has() pseudo-class support for parent-based styling (Tailwind 3.4+).', category: 'Variants & Modifiers' },
    { slug: 'aria-variants', title: 'ARIA Variants', explanation: 'Styling based on ARIA attributes with aria-[*] modifiers.', category: 'Variants & Modifiers' },
    { slug: 'open-variant', title: 'Open Variant', explanation: 'Styling <details> and <dialog> elements with open: modifier.', category: 'Variants & Modifiers' },
    { slug: 'starting-styles', title: 'Starting Styles', explanation: '@starting-style for transition-from utilities (Tailwind 3.4+).', category: 'Variants & Modifiers' },
    
    // GRADIENT & IMAGES
    { slug: 'gradient-stops', title: 'Gradient Color Stops', explanation: 'Linear gradients with from, via, to utilities and custom stops.', category: 'Gradients & Images' },
    { slug: 'gradient-directions', title: 'Gradient Directions', explanation: 'Gradient directions: to-top, to-right, to-bottom-left, and custom angles.', category: 'Gradients & Images' },
    { slug: 'background-images', title: 'Background Images', explanation: 'Background image utilities, positioning, and size.', category: 'Gradients & Images' },
    { slug: 'object-fit', title: 'Object Fit & Position', explanation: 'object-cover, object-contain, object-position for images and videos.', category: 'Gradients & Images' },
    
    // SVG & ICONS
    { slug: 'svg-styling', title: 'SVG Styling', explanation: 'Styling SVG elements with Tailwind: fill, stroke, stroke-width.', category: 'SVG & Icons' },
    { slug: 'icon-integration', title: 'Icon Integration', explanation: 'Using Heroicons, FontAwesome, and other icon libraries with Tailwind.', category: 'SVG & Icons' },
    
    // PRINTING
    { slug: 'print-styles', title: 'Print Styles', explanation: 'print: variant for print-specific styling and PDF optimization.', category: 'Printing' },
    
    // BEST PRACTICES
    { slug: 'naming-conventions', title: 'Naming Conventions', explanation: 'File organization, component naming, utility class patterns, and code organization.', category: 'Best Practices' },
    { slug: 'when-not-to-use', title: 'When Not to Use Tailwind', explanation: 'Understanding limitations, when traditional CSS is better, and hybrid approaches.', category: 'Best Practices' },
    { slug: 'migration-strategies', title: 'Migration', explanation: 'Migrating from Bootstrap, Material UI, or custom CSS to Tailwind gradually.', category: 'Best Practices' },
    { slug: 'team-workflows', title: 'Team Workflows', explanation: 'Working in teams, code reviews, consistency, and establishing Tailwind conventions.', category: 'Best Practices' },
    { slug: 'debugging', title: 'Debugging', explanation: 'Debugging Tailwind classes, browser DevTools, and troubleshooting strategies.', category: 'Best Practices' },
    
    // TOOLING & ECOSYSTEM
    { slug: 'vscode-extensions', title: 'VSCode Extensions', explanation: 'Tailwind CSS IntelliSense, autocomplete, linting, and development tools.', category: 'Tooling' },
    { slug: 'tailwind-ui', title: 'Tailwind UI', explanation: 'Official component library, templates, and premium components.', category: 'Tooling' },
    { slug: 'headless-ui', title: 'Headless UI', explanation: 'Unstyled, accessible UI components designed for Tailwind CSS.', category: 'Tooling' },
    { slug: 'testing-tailwind', title: 'Testing', explanation: 'Testing components with Tailwind classes, snapshot testing, and visual regression testing.', category: 'Tooling' },
    { slug: 'tailwind-play', title: 'Tailwind Play', explanation: 'Official online playground for experimenting with Tailwind CSS.', category: 'Tooling' },
    { slug: 'prettier-plugin', title: 'Prettier Plugin', explanation: 'Automatic class sorting with prettier-plugin-tailwindcss.', category: 'Tooling' },
  ],
};
