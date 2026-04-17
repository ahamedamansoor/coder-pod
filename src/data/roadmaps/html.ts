import type { Roadmap } from './types';

export const html: Roadmap = {
  slug: 'html',
  name: 'HTML',
  description: 'The foundation of web development - structure and content for the web',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering HTML from fundamentals to advanced features.' },

    // 1. FUNDAMENTALS
    { slug: 'introduction-to-html', title: 'What is HTML?', explanation: 'Introduction to HTML, its history, versions (HTML4, HTML5), and role in web development.', category: 'Fundamentals' },
    { slug: 'html-editors', title: 'HTML Editors & Tools', explanation: 'Setting up your development environment: VS Code, browser DevTools, and helpful extensions.', category: 'Fundamentals' },
    { slug: 'document-structure', title: 'Document Structure', explanation: 'Understanding HTML boilerplate: <!DOCTYPE>, <html>, <head>, and <body> elements.', category: 'Fundamentals' },
    { slug: 'html-syntax', title: 'HTML Syntax', explanation: 'Basic syntax rules: opening/closing tags, self-closing tags, proper nesting, and case sensitivity.', category: 'Fundamentals' },
    { slug: 'html-comments', title: 'Comments', explanation: 'Adding comments to your HTML code for documentation and collaboration.', category: 'Fundamentals' },

    // 2. TEXT & CONTENT
    { slug: 'html-elements-and-tags', title: 'Elements and Tags', explanation: 'Understanding HTML elements: opening tags, closing tags, and empty elements.', category: 'Text & Content' },
    { slug: 'html-headings', title: 'Headings & Paragraphs', explanation: 'Structuring content hierarchy with headings (<h1>-<h6>) and paragraphs (<p>, <br>, <hr>).', category: 'Text & Content' },
    { slug: 'text-formatting', title: 'Text Formatting', explanation: 'Bold (<b>, <strong>), italic (<i>, <em>), underline (<u>), mark (<mark>), small, sub, sup tags.', category: 'Text & Content' },
    { slug: 'character-entities', title: 'Character Entities', explanation: 'Special characters: &lt;, &gt;, &amp;, &copy;, &reg;, and Unicode characters.', category: 'Text & Content' },
    { slug: 'html-attributes', title: 'Attributes', explanation: 'Element attributes: id, class, style, title, data-*, and attribute syntax.', category: 'Text & Content' },
    { slug: 'global-attributes', title: 'Global Attributes', explanation: 'Universal attributes: contenteditable, hidden, draggable, lang, dir, tabindex.', category: 'Text & Content' },

    // 3. LINKS & NAVIGATION
    { slug: 'html-links', title: 'Links (Anchor Tags)', explanation: 'Master the fundamental <a> tag and create clickable links to navigate through your web pages with full examples and best practices.', category: 'Links & Navigation' },
    { slug: 'link-targets', title: 'Link Target Attribute', explanation: 'Control where links open - in the same window, new tab, or new window.', category: 'Links & Navigation' },
    { slug: 'internal-links', title: 'Internal Links', explanation: 'Link to different pages and sections within your website using relative and absolute paths.', category: 'Links & Navigation' },
    { slug: 'email-tel-links', title: 'Email & Tel Links', explanation: 'Create links for emails and phone calls with mailto: and tel: protocols.', category: 'Links & Navigation' },

    // 4. IMAGES & MEDIA
    { slug: 'html-images', title: 'Images', explanation: 'Embedding images with <img>, src, alt attributes, and image formats (JPEG, PNG, WebP, SVG).', category: 'Images & Media' },
    { slug: 'image-attributes', title: 'Image Attributes', explanation: 'width, height, loading (lazy/eager), decoding, and crossorigin attributes.', category: 'Images & Media' },
    { slug: 'responsive-images', title: 'Responsive Images', explanation: 'srcset, sizes attributes, and <picture> element for art direction and resolution switching.', category: 'Images & Media' },
    { slug: 'image-maps', title: 'Image Maps', explanation: '<map>, <area> tags for creating clickable regions on images.', category: 'Images & Media' },
    { slug: 'figure-figcaption', title: 'Figure & Figcaption', explanation: 'Semantic elements for images with captions and self-contained content.', category: 'Images & Media' },
    { slug: 'audio-element', title: 'Audio Element', explanation: '<audio> tag, controls, autoplay, loop, preload, and audio formats (MP3, OGG, WAV).', category: 'Images & Media' },
    { slug: 'video-element', title: 'Video Element', explanation: '<video> tag, controls, poster, dimensions, and video formats (MP4, WebM, OGG).', category: 'Images & Media' },
    { slug: 'video-subtitles', title: 'Video Subtitles', explanation: '<track> element for subtitles, captions, and video text tracks (VTT files).', category: 'Images & Media' },
    { slug: 'svg-basics', title: 'SVG Basics', explanation: 'Inline SVG, basic shapes (circle, rect, path), and SVG attributes.', category: 'Images & Media' },
    { slug: 'canvas-basics', title: 'Canvas Basics', explanation: '<canvas> element for drawing graphics with JavaScript.', category: 'Images & Media' },
    
    // 5. LISTS & TABLES
    { slug: 'ordered-lists', title: 'Ordered Lists', explanation: '<ol> tag, type attribute (1, A, a, I, i), start, reversed attributes.', category: 'Lists & Tables' },
    { slug: 'unordered-lists', title: 'Unordered Lists', explanation: '<ul> tag, list-style-type, and nested lists.', category: 'Lists & Tables' },
    { slug: 'description-lists', title: 'Description Lists', explanation: '<dl>, <dt>, <dd> for term-description pairs and glossaries.', category: 'Lists & Tables' },
    { slug: 'html-tables', title: 'Basic Tables', explanation: '<table>, <tr>, <th>, <td> for tabular data display.', category: 'Lists & Tables' },
    { slug: 'table-structure', title: 'Table Structure', explanation: '<thead>, <tbody>, <tfoot>, <colgroup>, <col> for organized tables.', category: 'Lists & Tables' },
    { slug: 'table-attributes', title: 'Table Attributes', explanation: 'colspan, rowspan, scope, headers for complex tables and accessibility.', category: 'Lists & Tables' },
    { slug: 'table-captions', title: 'Table Captions', explanation: '<caption> element for table titles and descriptions.', category: 'Lists & Tables' },

    // 6. FORMS
    { slug: 'html-forms', title: 'Form Basics', explanation: '<form> element, action, method (GET/POST), enctype, and form submission.', category: 'Forms' },
    { slug: 'input-text', title: 'Text Inputs', explanation: 'text, password, email, url, tel, search input types and their attributes.', category: 'Forms' },
    { slug: 'input-numbers', title: 'Number Inputs', explanation: 'number, range input types with min, max, step attributes.', category: 'Forms' },
    { slug: 'input-dates', title: 'Date & Time Inputs', explanation: 'date, time, datetime-local, month, week input types.', category: 'Forms' },
    { slug: 'input-choice', title: 'Choice Inputs', explanation: 'checkbox, radio, select, option, optgroup for user selections.', category: 'Forms' },
    { slug: 'input-files', title: 'File Inputs', explanation: 'file input type, accept attribute, and multiple file selection.', category: 'Forms' },
    { slug: 'input-advanced', title: 'Advanced Inputs', explanation: 'color, hidden, button, submit, reset, image input types.', category: 'Forms' },
    { slug: 'textarea-element', title: 'Textarea', explanation: '<textarea> for multi-line text, rows, cols, maxlength attributes.', category: 'Forms' },
    { slug: 'button-element', title: 'Buttons', explanation: '<button> element, type attribute (submit, reset, button), and styling.', category: 'Forms' },
    { slug: 'label-element', title: 'Labels', explanation: '<label> for input labels, for attribute, and implicit labeling.', category: 'Forms' },
    { slug: 'fieldset-legend', title: 'Fieldset & Legend', explanation: 'Grouping form controls with <fieldset> and <legend>.', category: 'Forms' },
    { slug: 'form-attributes', title: 'Form Attributes', explanation: 'name, value, placeholder, readonly, disabled, required, autofocus.', category: 'Forms' },
    { slug: 'form-validation', title: 'HTML5 Validation', explanation: 'required, pattern, min, max, minlength, maxlength validation attributes.', category: 'Forms' },
    { slug: 'datalist-element', title: 'Datalist', explanation: '<datalist> for autocomplete suggestions and dropdown options.', category: 'Forms' },
    { slug: 'output-element', title: 'Output Element', explanation: '<output> for displaying calculation results.', category: 'Forms' },
    { slug: 'progress-meter', title: 'Progress & Meter', explanation: '<progress> for progress bars and <meter> for gauge displays.', category: 'Forms' },

    // 7. SEMANTIC HTML
    { slug: 'block-vs-inline', title: 'Block vs Inline', explanation: 'Understanding block-level and inline elements and their display behavior.', category: 'Semantic HTML' },
    { slug: 'div-span', title: 'Div & Span', explanation: 'Generic containers: <div> for blocks and <span> for inline content.', category: 'Semantic HTML' },
    { slug: 'semantic-elements', title: 'Semantic Elements', explanation: 'Introduction to semantic HTML and its importance for accessibility and SEO.', category: 'Semantic HTML' },
    { slug: 'header-footer', title: 'Header & Footer', explanation: '<header> and <footer> for page/section headers and footers.', category: 'Semantic HTML' },
    { slug: 'nav-element', title: 'Navigation', explanation: '<nav> for navigation links and menu structures.', category: 'Semantic HTML' },
    { slug: 'main-element', title: 'Main Content', explanation: '<main> for the main content area of a document.', category: 'Semantic HTML' },
    { slug: 'article-element', title: 'Article', explanation: '<article> for independent, self-contained content.', category: 'Semantic HTML' },
    { slug: 'section-element', title: 'Section', explanation: '<section> for thematic grouping of content.', category: 'Semantic HTML' },
    { slug: 'aside-element', title: 'Aside', explanation: '<aside> for content tangentially related to main content.', category: 'Semantic HTML' },
    { slug: 'address-element', title: 'Address', explanation: '<address> for contact information and authorship.', category: 'Semantic HTML' },
    { slug: 'time-element', title: 'Time', explanation: '<time> for dates and times with datetime attribute.', category: 'Semantic HTML' },

    // 8. DOCUMENT HEAD
    { slug: 'head-element', title: 'Head Element', explanation: '<head> section for metadata, links, scripts, and document information.', category: 'Document Head' },
    { slug: 'title-element', title: 'Title', explanation: '<title> for page title in browser tab and search results.', category: 'Document Head' },
    { slug: 'meta-charset', title: 'Character Encoding', explanation: '<meta charset="UTF-8"> for character encoding declaration.', category: 'Document Head' },
    { slug: 'meta-viewport', title: 'Viewport Meta', explanation: '<meta name="viewport"> for responsive design and mobile optimization.', category: 'Document Head' },
    { slug: 'meta-description', title: 'Meta Description', explanation: 'Description meta tag for SEO and search engine snippets.', category: 'Document Head' },
    { slug: 'meta-keywords', title: 'Meta Keywords', explanation: 'Keywords, author, and other metadata tags.', category: 'Document Head' },
    { slug: 'link-element', title: 'Link Element', explanation: '<link> for stylesheets, icons, preloading, and external resources.', category: 'Document Head' },
    { slug: 'base-element', title: 'Base Element', explanation: '<base> for setting base URL for relative links.', category: 'Document Head' },
    { slug: 'favicon', title: 'Favicon', explanation: 'Adding favicons and touch icons for different devices.', category: 'Document Head' },
    
    // 9. SCRIPTS & STYLES
    { slug: 'script-element', title: 'Script Element', explanation: '<script> for JavaScript, src, async, defer, type attributes.', category: 'Scripts & Styles' },
    { slug: 'script-placement', title: 'Script Placement', explanation: 'Best practices for script placement and loading strategies.', category: 'Scripts & Styles' },
    { slug: 'style-element', title: 'Style Element', explanation: '<style> for inline CSS in the document head.', category: 'Scripts & Styles' },
    { slug: 'noscript-element', title: 'Noscript', explanation: '<noscript> for fallback content when JavaScript is disabled.', category: 'Scripts & Styles' },
    
    // 10. INTERACTIVE ELEMENTS
    { slug: 'details-summary', title: 'Details & Summary', explanation: '<details> and <summary> for native collapsible content (accordions).', category: 'Interactive Elements' },
    { slug: 'dialog-element', title: 'Dialog Element', explanation: '<dialog> for native modal and non-modal dialogs (HTML5.2+).', category: 'Interactive Elements' },
    { slug: 'content-editable', title: 'Content Editable', explanation: 'contenteditable attribute for making elements editable.', category: 'Interactive Elements' },
    { slug: 'data-attributes', title: 'Data Attributes', explanation: 'data-* attributes for storing custom data in HTML elements.', category: 'Interactive Elements' },
    { slug: 'draggable', title: 'Draggable', explanation: 'draggable attribute for drag and drop functionality.', category: 'Interactive Elements' },

    // 11. IFRAMES & EMBEDDING
    { slug: 'iframe-element', title: 'Iframe Element', explanation: '<iframe> for embedding external content, src, sandbox, loading attributes.', category: 'Iframes & Embedding' },
    { slug: 'iframe-security', title: 'Iframe Security', explanation: 'sandbox attribute, CSP, and iframe security best practices.', category: 'Iframes & Embedding' },
    { slug: 'embed-object', title: 'Embed & Object', explanation: '<embed> and <object> for embedding plugins and external content.', category: 'Iframes & Embedding' },
    
    // 12. WEB COMPONENTS
    { slug: 'web-components-intro', title: 'Web Components Introduction', explanation: 'Introduction to Web Components: Custom Elements, Shadow DOM, Templates.', category: 'Web Components' },
    { slug: 'custom-elements', title: 'Custom Elements', explanation: 'Creating custom HTML elements with the Custom Elements API.', category: 'Web Components' },
    { slug: 'shadow-dom', title: 'Shadow DOM', explanation: 'Encapsulation with Shadow DOM for style and markup isolation.', category: 'Web Components' },
    { slug: 'html-templates', title: 'HTML Templates', explanation: '<template> and <slot> for reusable component templates.', category: 'Web Components' },
    { slug: 'template-element', title: 'Template Element', explanation: '<template> for inert HTML fragments and reusable content.', category: 'Web Components' },
    { slug: 'web-component-lifecycle', title: 'Lifecycle Callbacks', explanation: 'connectedCallback, disconnectedCallback, attributeChangedCallback.', category: 'Web Components' },

    // 13. HTML5 APIS
    { slug: 'local-storage', title: 'Local Storage', explanation: 'localStorage API for persistent client-side data storage.', category: 'HTML5 APIs' },
    { slug: 'session-storage', title: 'Session Storage', explanation: 'sessionStorage for temporary session-based storage.', category: 'HTML5 APIs' },
    { slug: 'geolocation-api', title: 'Geolocation API', explanation: 'Getting user location with navigator.geolocation.', category: 'HTML5 APIs' },
    { slug: 'drag-drop-api', title: 'Drag and Drop API', explanation: 'Native drag and drop with draggable attribute and events.', category: 'HTML5 APIs' },
    { slug: 'web-workers', title: 'Web Workers', explanation: 'Running JavaScript in background threads for performance.', category: 'HTML5 APIs' },
    { slug: 'history-api', title: 'History API', explanation: 'Manipulating browser history for single-page applications.', category: 'HTML5 APIs' },
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Making HTTP requests with modern fetch() method.', category: 'HTML5 APIs' },
    
    // 14. PERFORMANCE
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'loading="lazy" attribute for images and iframes.', category: 'Performance' },
    { slug: 'preloading', title: 'Resource Preloading', explanation: 'rel="preload", "prefetch", "preconnect" for resource hints.', category: 'Performance' },
    { slug: 'async-defer', title: 'Async & Defer', explanation: 'Script loading strategies with async and defer attributes.', category: 'Performance' },
    { slug: 'critical-rendering', title: 'Critical Rendering Path', explanation: 'Optimizing HTML for fast page loads and rendering.', category: 'Performance' },

    // 15. SEO & METADATA
    { slug: 'seo-basics', title: 'SEO Basics', explanation: 'HTML fundamentals for search engine optimization.', category: 'SEO & Metadata' },
    { slug: 'meta-tags-seo', title: 'Meta Tags for SEO', explanation: 'Essential meta tags: description, keywords, robots, canonical.', category: 'SEO & Metadata' },
    { slug: 'open-graph', title: 'Open Graph Protocol', explanation: 'og: tags for social media sharing (Facebook, LinkedIn).', category: 'SEO & Metadata' },
    { slug: 'twitter-cards', title: 'Twitter Cards', explanation: 'Twitter-specific meta tags for rich previews.', category: 'SEO & Metadata' },
    { slug: 'structured-data', title: 'Structured Data', explanation: 'Schema.org microdata, JSON-LD for rich snippets.', category: 'SEO & Metadata' },
    { slug: 'canonical-urls', title: 'Canonical URLs', explanation: 'rel="canonical" for duplicate content management.', category: 'SEO & Metadata' },
    { slug: 'hreflang', title: 'Hreflang', explanation: 'hreflang for multilingual and multi-regional sites.', category: 'SEO & Metadata' },

    // 16. ACCESSIBILITY
    { slug: 'accessibility-basics', title: 'Accessibility Basics', explanation: 'Introduction to web accessibility (a11y) and its importance.', category: 'Accessibility' },
    { slug: 'aria-basics', title: 'ARIA Basics', explanation: 'Accessible Rich Internet Applications (ARIA) fundamentals.', category: 'Accessibility' },
    { slug: 'aria-roles', title: 'ARIA Roles', explanation: 'role attribute: button, navigation, main, banner, contentinfo.', category: 'Accessibility' },
    { slug: 'aria-properties', title: 'ARIA Properties', explanation: 'aria-label, aria-labelledby, aria-describedby, aria-hidden.', category: 'Accessibility' },
    { slug: 'aria-states', title: 'ARIA States', explanation: 'aria-expanded, aria-selected, aria-checked, aria-disabled.', category: 'Accessibility' },
    { slug: 'keyboard-navigation', title: 'Keyboard Navigation', explanation: 'tabindex, focus management, and keyboard accessibility.', category: 'Accessibility' },
    { slug: 'skip-links', title: 'Skip Links', explanation: 'Skip to content links for keyboard users.', category: 'Accessibility' },
    { slug: 'alt-text', title: 'Alt Text Best Practices', explanation: 'Writing effective alternative text for images.', category: 'Accessibility' },
    { slug: 'accessible-forms', title: 'Accessible Forms', explanation: 'Form accessibility with labels, fieldsets, and error messages.', category: 'Accessibility' },

    // 17. MODERN HTML FEATURES
    { slug: 'dialog-modal', title: 'Dialog Element', explanation: 'Native modal dialogs with <dialog> (Chrome 37+, Firefox 98+).', category: 'Modern HTML Features' },
    { slug: 'popover-api', title: 'Popover API', explanation: 'Native popovers with popover attribute (Chrome 114+).', category: 'Modern HTML Features' },
    { slug: 'declarative-shadow-dom', title: 'Declarative Shadow DOM', explanation: 'Server-side rendering of Shadow DOM with <template shadowrootmode>.', category: 'Modern HTML Features' },
    { slug: 'lazy-loading-advanced', title: 'Advanced Lazy Loading', explanation: 'Intersection Observer API and loading strategies.', category: 'Modern HTML Features' },
    { slug: 'container-queries', title: 'Container Queries', explanation: 'Responsive design based on container size (CSS Container Queries).', category: 'Modern HTML Features' },
    
    // 18. BEST PRACTICES
    { slug: 'html-validation', title: 'HTML Validation', explanation: 'Validating HTML with W3C validator and best practices.', category: 'Best Practices' },
    { slug: 'semantic-markup', title: 'Semantic Markup', explanation: 'Choosing the right HTML elements for content meaning.', category: 'Best Practices' },
    { slug: 'html-naming', title: 'Naming Conventions', explanation: 'ID and class naming conventions (BEM, kebab-case).', category: 'Best Practices' },
    { slug: 'code-organization', title: 'Code Organization', explanation: 'Structuring HTML files, indentation, and comments.', category: 'Best Practices' },
    { slug: 'html-comments-docs', title: 'Documentation', explanation: 'Commenting HTML code effectively for teams.', category: 'Best Practices' },
    { slug: 'cross-browser', title: 'Cross-Browser Compatibility', explanation: 'Ensuring HTML works across different browsers.', category: 'Best Practices' },
    { slug: 'html-debugging', title: 'Debugging HTML', explanation: 'Browser DevTools for inspecting and debugging HTML.', category: 'Best Practices' },
    { slug: 'progressive-enhancement', title: 'Progressive Enhancement', explanation: 'Building with basic HTML first, enhancing with CSS/JS.', category: 'Best Practices' },
    { slug: 'html-minification', title: 'HTML Minification', explanation: 'Reducing HTML file size for production.', category: 'Best Practices' },
    { slug: 'html-security', title: 'HTML Security', explanation: 'XSS prevention, CSP, and secure HTML practices.', category: 'Best Practices' },
  ]
};
