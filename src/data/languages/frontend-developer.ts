import type { Language } from './types';

export const frontendDeveloper: Language = {
  slug: 'frontend-developer',
  name: 'Frontend Developer',
  topics: [
    // 1. INTERNET & WEB FUNDAMENTALS
    { slug: 'internet-basics', title: 'How the Internet Works', explanation: 'HTTP/HTTPS, DNS, browsers, and client-server architecture.', category: 'Internet & Web Fundamentals' },
    { slug: 'html-fundamentals', title: 'HTML Fundamentals', explanation: 'Semantic HTML5, forms, accessibility basics.', category: 'Internet & Web Fundamentals' },
    { slug: 'css-fundamentals', title: 'CSS Fundamentals', explanation: 'Box model, selectors, specificity, cascade.', category: 'Internet & Web Fundamentals' },
    { slug: 'responsive-design', title: 'Responsive Design', explanation: 'Mobile-first approach, media queries, viewport.', category: 'Internet & Web Fundamentals' },
    { slug: 'browser-devtools', title: 'Browser DevTools', explanation: 'Chrome/Firefox DevTools for debugging and profiling.', category: 'Internet & Web Fundamentals' },
    
    // 2. JAVASCRIPT ESSENTIALS
    { slug: 'js-syntax', title: 'JavaScript Syntax', explanation: 'Variables, data types, operators, control flow.', category: 'JavaScript Essentials' },
    { slug: 'functions-scope', title: 'Functions & Scope', explanation: 'Function declarations, arrow functions, closures.', category: 'JavaScript Essentials' },
    { slug: 'arrays-objects', title: 'Arrays & Objects', explanation: 'Array methods, object manipulation, destructuring.', category: 'JavaScript Essentials' },
    { slug: 'dom-manipulation', title: 'DOM Manipulation', explanation: 'Selecting, creating, modifying DOM elements.', category: 'JavaScript Essentials' },
    { slug: 'events-handling', title: 'Event Handling', explanation: 'Event listeners, event delegation, bubbling.', category: 'JavaScript Essentials' },
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Making HTTP requests, working with APIs.', category: 'JavaScript Essentials' },
    { slug: 'async-programming', title: 'Async Programming', explanation: 'Promises, async/await, error handling.', category: 'JavaScript Essentials' },
    { slug: 'es6-features', title: 'ES6+ Features', explanation: 'Let/const, template literals, spread/rest, modules.', category: 'JavaScript Essentials' },
    
    // 3. VERSION CONTROL
    { slug: 'git-basics', title: 'Git Basics', explanation: 'Clone, commit, push, pull, branches.', category: 'Version Control' },
    { slug: 'git-workflow', title: 'Git Workflow', explanation: 'Feature branches, pull requests, code review.', category: 'Version Control' },
    { slug: 'github', title: 'GitHub', explanation: 'Repositories, issues, actions, collaboration.', category: 'Version Control' },
    
    // 4. PACKAGE MANAGERS
    { slug: 'npm-basics', title: 'npm Basics', explanation: 'Installing packages, package.json, scripts.', category: 'Package Managers' },
    { slug: 'package-management', title: 'Package Management', explanation: 'Dependencies, versioning, lock files.', category: 'Package Managers' },
    { slug: 'yarn-pnpm', title: 'Yarn & pnpm', explanation: 'Alternative package managers.', category: 'Package Managers' },
    
    // 5. MODERN CSS
    { slug: 'flexbox', title: 'Flexbox', explanation: 'One-dimensional layouts with Flexbox.', category: 'Modern CSS' },
    { slug: 'css-grid', title: 'CSS Grid', explanation: 'Two-dimensional layouts with Grid.', category: 'Modern CSS' },
    { slug: 'css-animations', title: 'CSS Animations', explanation: 'Transitions, keyframe animations, transforms.', category: 'Modern CSS' },
    { slug: 'css-variables', title: 'CSS Variables', explanation: 'Custom properties for theming and reusability.', category: 'Modern CSS' },
    { slug: 'preprocessors', title: 'CSS Preprocessors', explanation: 'Sass/SCSS for advanced CSS features.', category: 'Modern CSS' },
    { slug: 'css-frameworks', title: 'CSS Frameworks', explanation: 'Tailwind CSS, utility-first approach.', category: 'Modern CSS' },
    { slug: 'css-modules', title: 'CSS Modules', explanation: 'Scoped CSS for component-based architecture.', category: 'Modern CSS' },
    
    // 6. REACT FUNDAMENTALS
    { slug: 'react-intro', title: 'React Introduction', explanation: 'Components, JSX, virtual DOM concepts.', category: 'React Fundamentals' },
    { slug: 'react-components', title: 'React Components', explanation: 'Functional components, props, composition.', category: 'React Fundamentals' },
    { slug: 'react-state', title: 'State Management', explanation: 'useState, state updates, lifting state up.', category: 'React Fundamentals' },
    { slug: 'react-effects', title: 'Side Effects', explanation: 'useEffect, cleanup, dependencies.', category: 'React Fundamentals' },
    { slug: 'react-hooks', title: 'React Hooks', explanation: 'useContext, useReducer, useRef, custom hooks.', category: 'React Fundamentals' },
    { slug: 'react-events', title: 'Event Handling', explanation: 'Synthetic events, event handlers in React.', category: 'React Fundamentals' },
    { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: 'Rendering based on conditions and state.', category: 'React Fundamentals' },
    { slug: 'lists-keys', title: 'Lists & Keys', explanation: 'Rendering lists, key prop importance.', category: 'React Fundamentals' },
    
    // 7. ADVANCED REACT
    { slug: 'react-router', title: 'React Router', explanation: 'Client-side routing, navigation, routes.', category: 'Advanced React' },
    { slug: 'context-api', title: 'Context API', explanation: 'Global state management with Context.', category: 'Advanced React' },
    { slug: 'react-forms', title: 'Forms in React', explanation: 'Controlled components, form validation.', category: 'Advanced React' },
    { slug: 'performance-optimization', title: 'Performance Optimization', explanation: 'React.memo, useMemo, useCallback, lazy loading.', category: 'Advanced React' },
    { slug: 'error-boundaries', title: 'Error Boundaries', explanation: 'Catching errors in component tree.', category: 'Advanced React' },
    { slug: 'portals', title: 'Portals', explanation: 'Rendering outside parent component.', category: 'Advanced React' },
    { slug: 'refs-dom', title: 'Refs & DOM Access', explanation: 'useRef, forwardRef, accessing DOM nodes.', category: 'Advanced React' },
    
    // 8. STATE MANAGEMENT
    { slug: 'state-management-intro', title: 'State Management Overview', explanation: 'When and why to use state management libraries.', category: 'State Management' },
    { slug: 'redux-toolkit', title: 'Redux Toolkit', explanation: 'Modern Redux with RTK, slices, thunks.', category: 'State Management' },
    { slug: 'zustand', title: 'Zustand', explanation: 'Lightweight state management solution.', category: 'State Management' },
    { slug: 'react-query', title: 'React Query', explanation: 'Server state management, caching, fetching.', category: 'State Management' },
    
    // 9. TYPESCRIPT
    { slug: 'typescript-basics', title: 'TypeScript Basics', explanation: 'Types, interfaces, type annotations.', category: 'TypeScript' },
    { slug: 'typescript-react', title: 'TypeScript with React', explanation: 'Typing components, props, hooks.', category: 'TypeScript' },
    { slug: 'advanced-types', title: 'Advanced Types', explanation: 'Generics, utility types, type guards.', category: 'TypeScript' },
    { slug: 'typescript-config', title: 'TypeScript Configuration', explanation: 'tsconfig.json, compiler options.', category: 'TypeScript' },
    
    // 10. BUILD TOOLS
    { slug: 'module-bundlers', title: 'Module Bundlers', explanation: 'Webpack, Vite, build process overview.', category: 'Build Tools' },
    { slug: 'vite', title: 'Vite', explanation: 'Modern build tool with fast HMR.', category: 'Build Tools' },
    { slug: 'babel', title: 'Babel', explanation: 'JavaScript transpiler for browser compatibility.', category: 'Build Tools' },
    { slug: 'eslint', title: 'ESLint', explanation: 'Linting JavaScript code for quality.', category: 'Build Tools' },
    { slug: 'prettier', title: 'Prettier', explanation: 'Code formatting and style consistency.', category: 'Build Tools' },
    
    // 11. TESTING
    { slug: 'testing-fundamentals', title: 'Testing Fundamentals', explanation: 'Unit, integration, E2E testing concepts.', category: 'Testing' },
    { slug: 'jest', title: 'Jest', explanation: 'JavaScript testing framework.', category: 'Testing' },
    { slug: 'react-testing-library', title: 'React Testing Library', explanation: 'Testing React components.', category: 'Testing' },
    { slug: 'vitest', title: 'Vitest', explanation: 'Fast unit testing with Vite.', category: 'Testing' },
    { slug: 'e2e-testing', title: 'E2E Testing', explanation: 'Cypress or Playwright for end-to-end tests.', category: 'Testing' },
    
    // 12. NEXT.JS & SSR
    { slug: 'nextjs-intro', title: 'Next.js Introduction', explanation: 'React framework with SSR and SSG.', category: 'Next.js & SSR' },
    { slug: 'nextjs-routing', title: 'Next.js Routing', explanation: 'File-based routing, dynamic routes.', category: 'Next.js & SSR' },
    { slug: 'data-fetching', title: 'Data Fetching', explanation: 'getServerSideProps, getStaticProps, API routes.', category: 'Next.js & SSR' },
    { slug: 'nextjs-app-router', title: 'App Router', explanation: 'Next.js 13+ App Router, server components.', category: 'Next.js & SSR' },
    { slug: 'seo-optimization', title: 'SEO Optimization', explanation: 'Meta tags, structured data, performance.', category: 'Next.js & SSR' },
    
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
    
    // 18. DESIGN SYSTEMS
    { slug: 'component-libraries', title: 'Component Libraries', explanation: 'Material-UI, Chakra UI, shadcn/ui.', category: 'Design Systems' },
    { slug: 'design-tokens', title: 'Design Tokens', explanation: 'Consistent design values across projects.', category: 'Design Systems' },
    { slug: 'storybook', title: 'Storybook', explanation: 'Component documentation and testing.', category: 'Design Systems' },
    { slug: 'figma-integration', title: 'Figma Integration', explanation: 'Design-to-code workflow.', category: 'Design Systems' },
    
    // 19. DEPLOYMENT & HOSTING
    { slug: 'vercel', title: 'Vercel', explanation: 'Deploying Next.js and React apps.', category: 'Deployment & Hosting' },
    { slug: 'netlify', title: 'Netlify', explanation: 'Static site hosting and CI/CD.', category: 'Deployment & Hosting' },
    { slug: 'cloudflare', title: 'Cloudflare Pages', explanation: 'Edge hosting and performance.', category: 'Deployment & Hosting' },
    { slug: 'ci-cd', title: 'CI/CD', explanation: 'GitHub Actions, automated deployments.', category: 'Deployment & Hosting' },
    { slug: 'docker', title: 'Docker Basics', explanation: 'Containerizing frontend applications.', category: 'Deployment & Hosting' },
    
    // 20. SOFT SKILLS & BEST PRACTICES
    { slug: 'code-review', title: 'Code Review', explanation: 'Reviewing and being reviewed effectively.', category: 'Professional Skills' },
    { slug: 'documentation', title: 'Documentation', explanation: 'Writing clear README, JSDoc comments.', category: 'Professional Skills' },
    { slug: 'debugging-techniques', title: 'Debugging Techniques', explanation: 'Systematic debugging approaches.', category: 'Professional Skills' },
    { slug: 'clean-code', title: 'Clean Code', explanation: 'Readable, maintainable code practices.', category: 'Professional Skills' },
    { slug: 'agile-scrum', title: 'Agile & Scrum', explanation: 'Working in agile teams, sprints.', category: 'Professional Skills' },
    { slug: 'design-patterns', title: 'Design Patterns', explanation: 'Common frontend patterns and architectures.', category: 'Professional Skills' },
  ],
};
