
import type { Language } from './types';

export const css: Language = {
  slug: 'css',
  name: 'CSS',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning CSS from scratch.' },
    { slug: 'introduction-to-css', title: 'CSS Introduction', explanation: 'What is CSS and how it styles HTML.' },
    { slug: 'css-syntax-and-selectors', title: 'Syntax & Selectors', explanation: 'How to write CSS rules and target HTML elements.' },
    { slug: 'css-combinators', title: 'Combinators', explanation: 'Using combinators to create more specific and powerful selectors.'},
    { slug: 'css-colors', title: 'Colors', explanation: 'Applying colors to text, backgrounds, and borders using various color formats.' },
    { slug: 'css-box-model', title: 'The Box Model', explanation: 'Understanding margin, border, padding, and content.' },
    { slug: 'css-typography', title: 'Typography', explanation: 'Styling text, fonts, and more.' },
    { slug: 'css-positioning', title: 'Positioning', explanation: 'Controlling the layout of elements with `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning.' },
    { slug: 'css-flexbox', title: 'Flexbox', explanation: 'A modern layout model for one-dimensional layouts.' },
    { slug: 'css-grid', title: 'Grid', explanation: 'A powerful layout model for two-dimensional layouts.' },
    { slug: 'css-pseudo-classes', title: 'Pseudo-classes', explanation: 'Styling elements based on their state, like `:hover` or `:focus`.' },
    { slug: 'css-pseudo-elements', title: 'Pseudo-elements', explanation: 'Styling specific parts of an element, like `::before` or `::first-letter`.' },
    { slug: 'css-transitions', title: 'Transitions', explanation: 'Creating smooth animations when an element changes from one state to another.' },
    { slug: 'css-animations', title: 'Animations', explanation: 'Creating complex, multi-step animations with keyframes.' },
    { slug: 'css-variables', title: 'Variables', explanation: 'Storing reusable values like colors and sizes for a more maintainable stylesheet.' },
    { slug: 'css-responsive-design', title: 'Responsive Design', explanation: 'Making websites look good on all devices using media queries.' },
  ]
};
