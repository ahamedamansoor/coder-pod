import type { Roadmap } from './types';

export const frontendDeveloper: Roadmap = {
  slug: 'frontend-developer',
  name: 'Frontend Developer',
  topics: [
    // CAREER PATH JOURNEY
    // 1. INTERNET & WEB FUNDAMENTALS
    { slug: 'internet-basics', title: 'How the Internet Works', explanation: 'HTTP/HTTPS, DNS, browsers, and client-server architecture.', category: 'Internet & Web Fundamentals' },
    { slug: 'html-fundamentals', title: 'HTML Fundamentals', explanation: 'Semantic HTML5, forms, accessibility basics.', category: 'Internet & Web Fundamentals' },
    { slug: 'css-fundamentals', title: 'CSS Fundamentals', explanation: 'Box model, selectors, specificity, cascade.', category: 'Internet & Web Fundamentals' },
    { slug: 'responsive-design', title: 'Responsive Design', explanation: 'Mobile-first approach, media queries, viewport.', category: 'Internet & Web Fundamentals' },
    { slug: 'browser-devtools', title: 'Browser DevTools', explanation: 'Chrome/Firefox DevTools for debugging and profiling.', category: 'Internet & Web Fundamentals' },
    { slug: 'css-deep-dive', title: 'CSS Mastery →', explanation: 'Master CSS fundamentals, layouts, and advanced styling', category: 'Internet & Web Fundamentals', connectedRoadmap: 'css' },
    
    // 2. JAVASCRIPT ESSENTIALS
    { slug: 'js-syntax', title: 'JavaScript Syntax', explanation: 'Variables, data types, operators, control flow.', category: 'JavaScript Essentials' },
    { slug: 'functions-scope', title: 'Functions & Scope', explanation: 'Function declarations, arrow functions, closures.', category: 'JavaScript Essentials' },
    { slug: 'arrays-objects', title: 'Arrays & Objects', explanation: 'Array methods, object manipulation, destructuring.', category: 'JavaScript Essentials' },
    { slug: 'dom-manipulation', title: 'DOM Manipulation', explanation: 'Selecting, creating, modifying DOM elements.', category: 'JavaScript Essentials' },
    { slug: 'events-handling', title: 'Event Handling', explanation: 'Event listeners, event delegation, bubbling.', category: 'JavaScript Essentials' },
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Making HTTP requests, working with APIs.', category: 'JavaScript Essentials' },
    { slug: 'async-programming', title: 'Async Programming', explanation: 'Promises, async/await, error handling.', category: 'JavaScript Essentials' },
    { slug: 'es6-features', title: 'ES6+ Features', explanation: 'Let/const, template literals, spread/rest, modules.', category: 'JavaScript Essentials' },
    { slug: 'javascript-deep-dive', title: 'JavaScript Deep Dive →', explanation: 'Master JavaScript fundamentals and advanced concepts', category: 'JavaScript Essentials', connectedRoadmap: 'javascript' },
    
    // 3. VERSION CONTROL
    { slug: 'git-basics', title: 'Git Basics', explanation: 'Clone, commit, push, pull, branches.', category: 'Version Control' },
    { slug: 'git-workflow', title: 'Git Workflow', explanation: 'Feature branches, pull requests, code review.', category: 'Version Control' },
    { slug: 'github', title: 'GitHub', explanation: 'Repositories, issues, actions, collaboration.', category: 'Version Control' },
    { slug: 'git-deep-dive', title: 'Git Mastery →', explanation: 'Master Git version control, branching strategies, and collaboration', category: 'Version Control', connectedRoadmap: 'git' },
    
    // 4. PACKAGE MANAGERS
    { slug: 'npm-basics', title: 'npm Basics', explanation: 'Installing packages, package.json, scripts.', category: 'Package Managers' },
    { slug: 'package-management', title: 'Package Management', explanation: 'Dependencies, versioning, lock files.', category: 'Package Managers' },
    { slug: 'yarn-pnpm', title: 'Yarn & pnpm', explanation: 'Alternative package managers.', category: 'Package Managers' },
    { slug: 'package-manager-mastery', title: 'Package Manager Mastery →', explanation: 'Master npm, yarn, pnpm and modern package management workflows', category: 'Package Managers', connectedRoadmap: 'package-manager' },
    
    // 5. MODERN CSS
    { slug: 'flexbox', title: 'Flexbox', explanation: 'One-dimensional layouts with Flexbox.', category: 'Modern CSS' },
    { slug: 'css-grid', title: 'CSS Grid', explanation: 'Two-dimensional layouts with Grid.', category: 'Modern CSS' },
    { slug: 'css-animations', title: 'CSS Animations', explanation: 'Transitions, keyframe animations, transforms.', category: 'Modern CSS' },
    { slug: 'css-variables', title: 'CSS Variables', explanation: 'Custom properties for theming and reusability.', category: 'Modern CSS' },
    { slug: 'preprocessors', title: 'CSS Preprocessors', explanation: 'Sass/SCSS for advanced CSS features.', category: 'Modern CSS' },
    { slug: 'scss-deep-dive', title: 'SCSS Mastery →', explanation: 'Master SCSS preprocessing, mixins, and advanced Sass features', category: 'Modern CSS', connectedRoadmap: 'scss' },
    { slug: 'css-frameworks', title: 'CSS Frameworks', explanation: 'Tailwind CSS, utility-first approach.', category: 'Modern CSS' },
    { slug: 'css-modules', title: 'CSS Modules', explanation: 'Scoped CSS for component-based architecture.', category: 'Modern CSS' },
    { slug: 'tailwind-deep-dive', title: 'Tailwind CSS Mastery →', explanation: 'Master Tailwind CSS utility classes and component design', category: 'Modern CSS', connectedRoadmap: 'tailwind' },
    
    // 6. FRAMEWORK SELECTION
    { slug: 'framework-overview', title: 'Framework Overview', explanation: 'Understanding different frontend frameworks and their philosophies.', category: 'Framework Selection' },
    { slug: 'react-intro', title: 'React Path →', explanation: 'Component-based library with JSX and virtual DOM', category: 'Framework Selection', connectedRoadmap: 'react' },
    { slug: 'vue-intro', title: 'Vue Path →', explanation: 'Progressive framework with templates and reactivity system', category: 'Framework Selection', connectedRoadmap: 'vue' },
    { slug: 'angular-intro', title: 'Angular Path →', explanation: 'Full-featured framework with TypeScript and RxJS', category: 'Framework Selection', connectedRoadmap: 'angular' },
    { slug: 'svelte-intro', title: 'Svelte Path →', explanation: 'Compiler-based framework with no virtual DOM', category: 'Framework Selection', connectedRoadmap: 'svelte' },
    { slug: 'framework-comparison', title: 'Framework Comparison', explanation: 'Performance, ecosystem, learning curve, and use cases.', category: 'Framework Selection' },
    { slug: 'choosing-framework', title: 'Choosing Your Framework', explanation: 'Factors to consider: project size, team, requirements.', category: 'Framework Selection' },
    
    // 7. FRAMEWORK FUNDAMENTALS (Common Concepts)
    { slug: 'component-architecture', title: 'Component Architecture', explanation: 'Reusable components, props, composition patterns.', category: 'Framework Fundamentals' },
    { slug: 'state-management-basics', title: 'State Management Basics', explanation: 'Local state, global state, state lifting patterns.', category: 'Framework Fundamentals' },
    { slug: 'lifecycle-hooks', title: 'Lifecycle & Hooks', explanation: 'Component lifecycle, effects, and hook patterns.', category: 'Framework Fundamentals' },
    { slug: 'event-handling', title: 'Event Handling', explanation: 'User interactions, event delegation, synthetic events.', category: 'Framework Fundamentals' },
    { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: 'Dynamic content based on state and conditions.', category: 'Framework Fundamentals' },
    { slug: 'list-rendering', title: 'List Rendering', explanation: 'Rendering collections, keys, and optimization.', category: 'Framework Fundamentals' },
    { slug: 'form-handling', title: 'Form Handling', explanation: 'Controlled/uncontrolled forms, validation patterns.', category: 'Framework Fundamentals' },
    { slug: 'routing-basics', title: 'Routing Basics', explanation: 'Client-side routing, navigation, route guards.', category: 'Framework Fundamentals' },
    
    // 8. ADVANCED STATE MANAGEMENT
    { slug: 'state-management-intro', title: 'State Management Overview', explanation: 'When and why to use state management libraries.', category: 'State Management' },
    { slug: 'redux-ecosystem', title: 'Redux Ecosystem', explanation: 'Redux Toolkit, middleware, and patterns.', category: 'State Management' },
    { slug: 'vuex-pinia', title: 'Vue State Management', explanation: 'Vuex and Pinia for Vue applications.', category: 'State Management' },
    { slug: 'ngrx-services', title: 'Angular State Management', explanation: 'NgRx and services for Angular apps.', category: 'State Management' },
    { slug: 'lightweight-solutions', title: 'Lightweight Solutions', explanation: 'Zustand, Jotai, and simple state patterns.', category: 'State Management' },
    { slug: 'server-state', title: 'Server State Management', explanation: 'React Query, SWR, and data fetching patterns.', category: 'State Management' },
    
    // 9. TYPESCRIPT IN FRONTEND
    { slug: 'typescript-basics', title: 'TypeScript Basics', explanation: 'Types, interfaces, type annotations.', category: 'TypeScript' },
    { slug: 'typescript-frameworks', title: 'TypeScript with Frameworks', explanation: 'Typing components, props, and framework-specific patterns.', category: 'TypeScript' },
    { slug: 'advanced-types', title: 'Advanced Types', explanation: 'Generics, utility types, type guards.', category: 'TypeScript' },
    { slug: 'typescript-config', title: 'TypeScript Configuration', explanation: 'tsconfig.json, compiler options.', category: 'TypeScript' },
    { slug: 'typescript-deep-dive', title: 'TypeScript Mastery →', explanation: 'Master TypeScript types, generics, and advanced patterns', category: 'TypeScript', connectedRoadmap: 'typescript' },
    
    // 10. BUILD TOOLS
    { slug: 'module-bundlers', title: 'Module Bundlers', explanation: 'Webpack, Vite, build process overview.', category: 'Build Tools' },
    { slug: 'vite', title: 'Vite', explanation: 'Modern build tool with fast HMR.', category: 'Build Tools' },
    { slug: 'babel', title: 'Babel', explanation: 'JavaScript transpiler for browser compatibility.', category: 'Build Tools' },
    { slug: 'eslint', title: 'ESLint', explanation: 'Linting JavaScript code for quality.', category: 'Build Tools' },
    { slug: 'prettier', title: 'Prettier', explanation: 'Code formatting and style consistency.', category: 'Build Tools' },
    
    // 11. TESTING FRAMEWORKS
    { slug: 'testing-fundamentals', title: 'Testing Fundamentals', explanation: 'Unit, integration, E2E testing concepts.', category: 'Testing' },
    { slug: 'testing-frameworks', title: 'Testing Frameworks', explanation: 'Jest, Vitest, and testing setup for different frameworks.', category: 'Testing' },
    { slug: 'component-testing', title: 'Component Testing', explanation: 'Testing Library for React, Vue, Angular components.', category: 'Testing' },
    { slug: 'e2e-testing', title: 'E2E Testing', explanation: 'Cypress, Playwright for end-to-end tests.', category: 'Testing' },
    { slug: 'testing-best-practices', title: 'Testing Best Practices', explanation: 'Test organization, mocking, coverage.', category: 'Testing' },
    { slug: 'testing-mastery', title: 'Testing Frameworks Mastery →', explanation: 'Master Jest, Vitest, Cypress and modern testing strategies', category: 'Testing', connectedRoadmap: 'testing' },
    
    // 12. META FRAMEWORKS & SSR
    { slug: 'meta-frameworks', title: 'Meta Frameworks Overview', explanation: 'Next.js, Nuxt, SvelteKit, Angular Universal.', category: 'Meta Frameworks' },
    { slug: 'nextjs-path', title: 'Next.js Path →', explanation: 'React-based framework with SSR and SSG', category: 'Meta Frameworks', connectedRoadmap: 'nextjs' },
    { slug: 'nuxt-path', title: 'Nuxt Path →', explanation: 'Vue-based framework with SSR and SSG', category: 'Meta Frameworks', connectedRoadmap: 'nuxt' },
    { slug: 'sveltekit-path', title: 'SvelteKit Path →', explanation: 'Svelte-based framework with SSR and SSG', category: 'Meta Frameworks', connectedRoadmap: 'sveltekit' },
    { slug: 'ssr-concepts', title: 'SSR/SSG Concepts', explanation: 'Server-side rendering, static generation, ISR.', category: 'Meta Frameworks' },
    { slug: 'seo-optimization', title: 'SEO Optimization', explanation: 'Meta tags, structured data, performance.', category: 'Meta Frameworks' },
    
    // 13. BROWSER APIs
    { slug: 'local-storage', title: 'Web Storage', explanation: 'localStorage, sessionStorage for client-side data.', category: 'Browser APIs' },
    { slug: 'geolocation', title: 'Geolocation API', explanation: 'Accessing user location.', category: 'Browser APIs' },
    { slug: 'notifications', title: 'Notifications API', explanation: 'Browser notifications.', category: 'Browser APIs' },
    { slug: 'service-workers', title: 'Service Workers', explanation: 'Offline functionality, caching strategies.', category: 'Browser APIs' },
    { slug: 'web-sockets', title: 'WebSockets', explanation: 'Real-time bidirectional communication.', category: 'Browser APIs' },
    { slug: 'intersection-observer', title: 'Intersection Observer', explanation: 'Lazy loading, infinite scroll.', category: 'Browser APIs' },
    
    // 14. WEB PERFORMANCE
    { slug: 'performance-metrics', title: 'Performance Metrics', explanation: 'FCP, LCP, CLS, TTFB, Core Web Vitals.', category: 'Web Performance' },
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'Code splitting, dynamic imports.', category: 'Web Performance' },
    { slug: 'image-optimization', title: 'Image Optimization', explanation: 'WebP, responsive images, lazy loading.', category: 'Web Performance' },
    { slug: 'caching-strategies', title: 'Caching Strategies', explanation: 'Browser cache, CDN, service workers.', category: 'Web Performance' },
    { slug: 'bundle-optimization', title: 'Bundle Optimization', explanation: 'Tree shaking, code splitting, minification.', category: 'Web Performance' },
    { slug: 'lighthouse', title: 'Lighthouse Audits', explanation: 'Performance auditing and optimization.', category: 'Web Performance' },
    
    // 15. ACCESSIBILITY (A11Y)
    { slug: 'aria-basics', title: 'ARIA Basics', explanation: 'ARIA attributes for screen readers.', category: 'Accessibility' },
    { slug: 'keyboard-navigation', title: 'Keyboard Navigation', explanation: 'Focus management, keyboard shortcuts.', category: 'Accessibility' },
    { slug: 'semantic-html', title: 'Semantic HTML', explanation: 'Using proper HTML elements for accessibility.', category: 'Accessibility' },
    { slug: 'color-contrast', title: 'Color Contrast', explanation: 'WCAG guidelines for visual accessibility.', category: 'Accessibility' },
    { slug: 'screen-readers', title: 'Screen Reader Testing', explanation: 'Testing with NVDA, JAWS, VoiceOver.', category: 'Accessibility' },
    
    // 16. SECURITY
    { slug: 'xss-prevention', title: 'XSS Prevention', explanation: 'Cross-Site Scripting attack prevention.', category: 'Web Security' },
    { slug: 'csrf-protection', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery prevention.', category: 'Web Security' },
    { slug: 'cors', title: 'CORS', explanation: 'Cross-Origin Resource Sharing.', category: 'Web Security' },
    { slug: 'authentication', title: 'Authentication', explanation: 'JWT, OAuth, session management.', category: 'Web Security' },
    { slug: 'https-ssl', title: 'HTTPS & SSL', explanation: 'Secure communication, certificates.', category: 'Web Security' },
    
    // 17. PWA
    { slug: 'pwa-basics', title: 'PWA Basics', explanation: 'Progressive Web App fundamentals.', category: 'Progressive Web Apps' },
    { slug: 'manifest', title: 'Web App Manifest', explanation: 'App-like experience configuration.', category: 'Progressive Web Apps' },
    { slug: 'offline-support', title: 'Offline Support', explanation: 'Service workers for offline functionality.', category: 'Progressive Web Apps' },
    { slug: 'push-notifications', title: 'Push Notifications', explanation: 'Web push API for notifications.', category: 'Progressive Web Apps' },
    
    // 18. DESIGN SYSTEMS & COMPONENTS
    { slug: 'component-libraries', title: 'Component Libraries', explanation: 'Material-UI, Ant Design, Chakra UI, shadcn/ui.', category: 'Design Systems' },
    { slug: 'framework-specific-ui', title: 'Framework-Specific UI', explanation: 'React (MUI), Vue (Vuetify), Angular (Angular Material).', category: 'Design Systems' },
    { slug: 'design-tokens', title: 'Design Tokens', explanation: 'Consistent design values across projects.', category: 'Design Systems' },
    { slug: 'storybook', title: 'Storybook', explanation: 'Component documentation and testing.', category: 'Design Systems' },
    { slug: 'figma-integration', title: 'Design-to-Code', explanation: 'Figma, design systems, and development workflow.', category: 'Design Systems' },
    
    // 19. DEPLOYMENT & HOSTING
    { slug: 'hosting-platforms', title: 'Hosting Platforms', explanation: 'Vercel, Netlify, Cloudflare Pages, GitHub Pages.', category: 'Deployment & Hosting' },
    { slug: 'framework-deployment', title: 'Framework-Specific Deployment', explanation: 'Deploying React, Vue, Angular, Svelte applications.', category: 'Deployment & Hosting' },
    { slug: 'static-site-generation', title: 'Static Site Deployment', explanation: 'JAMstack, static hosting, CDN optimization.', category: 'Deployment & Hosting' },
    { slug: 'ci-cd', title: 'CI/CD', explanation: 'GitHub Actions, automated deployments.', category: 'Deployment & Hosting' },
    { slug: 'docker-frontend', title: 'Docker for Frontend', explanation: 'Containerizing frontend applications.', category: 'Deployment & Hosting' },
    
    // 20. SOFT SKILLS & BEST PRACTICES
    { slug: 'code-review', title: 'Code Review', explanation: 'Reviewing and being reviewed effectively.', category: 'Professional Skills' },
    { slug: 'documentation', title: 'Documentation', explanation: 'Writing clear README, JSDoc comments.', category: 'Professional Skills' },
    { slug: 'debugging-techniques', title: 'Debugging Techniques', explanation: 'Systematic debugging approaches.', category: 'Professional Skills' },
    { slug: 'clean-code', title: 'Clean Code', explanation: 'Readable, maintainable code practices.', category: 'Professional Skills' },
    { slug: 'agile-scrum', title: 'Agile & Scrum', explanation: 'Working in agile teams, sprints.', category: 'Professional Skills' },
    { slug: 'design-patterns', title: 'Design Patterns', explanation: 'Common frontend patterns and architectures.', category: 'Professional Skills' },
  ],
};
