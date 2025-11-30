import type { Language } from './types';

export const frontendDeveloper: Language = {
  slug: 'frontend-developer',
  name: 'Frontend Developer',
  topics: [
    // 1. INTERNET & WEB FUNDAMENTALS
    { slug: 'internet-basics', title: 'How the Internet Works', explanation: 'HTTP/HTTPS, DNS, browsers, and client-server architecture.', category: '1. Internet & Web Fundamentals' },
    { slug: 'html-fundamentals', title: 'HTML Fundamentals', explanation: 'Semantic HTML5, forms, accessibility basics.', category: '1. Internet & Web Fundamentals' },
    { slug: 'css-fundamentals', title: 'CSS Fundamentals', explanation: 'Box model, selectors, specificity, cascade.', category: '1. Internet & Web Fundamentals' },
    { slug: 'responsive-design', title: 'Responsive Design', explanation: 'Mobile-first approach, media queries, viewport.', category: '1. Internet & Web Fundamentals' },
    { slug: 'browser-devtools', title: 'Browser DevTools', explanation: 'Chrome/Firefox DevTools for debugging and profiling.', category: '1. Internet & Web Fundamentals' },
    
    // 2. JAVASCRIPT ESSENTIALS
    { slug: 'js-syntax', title: 'JavaScript Syntax', explanation: 'Variables, data types, operators, control flow.', category: '2. JavaScript Essentials' },
    { slug: 'functions-scope', title: 'Functions & Scope', explanation: 'Function declarations, arrow functions, closures.', category: '2. JavaScript Essentials' },
    { slug: 'arrays-objects', title: 'Arrays & Objects', explanation: 'Array methods, object manipulation, destructuring.', category: '2. JavaScript Essentials' },
    { slug: 'dom-manipulation', title: 'DOM Manipulation', explanation: 'Selecting, creating, modifying DOM elements.', category: '2. JavaScript Essentials' },
    { slug: 'events-handling', title: 'Event Handling', explanation: 'Event listeners, event delegation, bubbling.', category: '2. JavaScript Essentials' },
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Making HTTP requests, working with APIs.', category: '2. JavaScript Essentials' },
    { slug: 'async-programming', title: 'Async Programming', explanation: 'Promises, async/await, error handling.', category: '2. JavaScript Essentials' },
    { slug: 'es6-features', title: 'ES6+ Features', explanation: 'Let/const, template literals, spread/rest, modules.', category: '2. JavaScript Essentials' },
    
    // 3. VERSION CONTROL
    { slug: 'git-basics', title: 'Git Basics', explanation: 'Clone, commit, push, pull, branches.', category: '3. Version Control' },
    { slug: 'git-workflow', title: 'Git Workflow', explanation: 'Feature branches, pull requests, code review.', category: '3. Version Control' },
    { slug: 'github', title: 'GitHub', explanation: 'Repositories, issues, actions, collaboration.', category: '3. Version Control' },
    
    // 4. PACKAGE MANAGERS
    { slug: 'npm-basics', title: 'npm Basics', explanation: 'Installing packages, package.json, scripts.', category: '4. Package Managers' },
    { slug: 'package-management', title: 'Package Management', explanation: 'Dependencies, versioning, lock files.', category: '4. Package Managers' },
    { slug: 'yarn-pnpm', title: 'Yarn & pnpm', explanation: 'Alternative package managers.', category: '4. Package Managers' },
    
    // 5. MODERN CSS
    { slug: 'flexbox', title: 'Flexbox', explanation: 'One-dimensional layouts with Flexbox.', category: '5. Modern CSS' },
    { slug: 'css-grid', title: 'CSS Grid', explanation: 'Two-dimensional layouts with Grid.', category: '5. Modern CSS' },
    { slug: 'css-animations', title: 'CSS Animations', explanation: 'Transitions, keyframe animations, transforms.', category: '5. Modern CSS' },
    { slug: 'css-variables', title: 'CSS Variables', explanation: 'Custom properties for theming and reusability.', category: '5. Modern CSS' },
    { slug: 'preprocessors', title: 'CSS Preprocessors', explanation: 'Sass/SCSS for advanced CSS features.', category: '5. Modern CSS' },
    { slug: 'css-frameworks', title: 'CSS Frameworks', explanation: 'Tailwind CSS, utility-first approach.', category: '5. Modern CSS' },
    { slug: 'css-modules', title: 'CSS Modules', explanation: 'Scoped CSS for component-based architecture.', category: '5. Modern CSS' },
    
    // 6. REACT FUNDAMENTALS
    { slug: 'react-intro', title: 'React Introduction', explanation: 'Components, JSX, virtual DOM concepts.', category: '6. React Fundamentals' },
    { slug: 'react-components', title: 'React Components', explanation: 'Functional components, props, composition.', category: '6. React Fundamentals' },
    { slug: 'react-state', title: 'State Management', explanation: 'useState, state updates, lifting state up.', category: '6. React Fundamentals' },
    { slug: 'react-effects', title: 'Side Effects', explanation: 'useEffect, cleanup, dependencies.', category: '6. React Fundamentals' },
    { slug: 'react-hooks', title: 'React Hooks', explanation: 'useContext, useReducer, useRef, custom hooks.', category: '6. React Fundamentals' },
    { slug: 'react-events', title: 'Event Handling', explanation: 'Synthetic events, event handlers in React.', category: '6. React Fundamentals' },
    { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: 'Rendering based on conditions and state.', category: '6. React Fundamentals' },
    { slug: 'lists-keys', title: 'Lists & Keys', explanation: 'Rendering lists, key prop importance.', category: '6. React Fundamentals' },
    
    // 7. ADVANCED REACT
    { slug: 'react-router', title: 'React Router', explanation: 'Client-side routing, navigation, routes.', category: '7. Advanced React' },
    { slug: 'context-api', title: 'Context API', explanation: 'Global state management with Context.', category: '7. Advanced React' },
    { slug: 'react-forms', title: 'Forms in React', explanation: 'Controlled components, form validation.', category: '7. Advanced React' },
    { slug: 'performance-optimization', title: 'Performance Optimization', explanation: 'React.memo, useMemo, useCallback, lazy loading.', category: '7. Advanced React' },
    { slug: 'error-boundaries', title: 'Error Boundaries', explanation: 'Catching errors in component tree.', category: '7. Advanced React' },
    { slug: 'portals', title: 'Portals', explanation: 'Rendering outside parent component.', category: '7. Advanced React' },
    { slug: 'refs-dom', title: 'Refs & DOM Access', explanation: 'useRef, forwardRef, accessing DOM nodes.', category: '7. Advanced React' },
    
    // 8. STATE MANAGEMENT
    { slug: 'state-management-intro', title: 'State Management Overview', explanation: 'When and why to use state management libraries.', category: '8. State Management' },
    { slug: 'redux-toolkit', title: 'Redux Toolkit', explanation: 'Modern Redux with RTK, slices, thunks.', category: '8. State Management' },
    { slug: 'zustand', title: 'Zustand', explanation: 'Lightweight state management solution.', category: '8. State Management' },
    { slug: 'react-query', title: 'React Query', explanation: 'Server state management, caching, fetching.', category: '8. State Management' },
    
    // 9. TYPESCRIPT
    { slug: 'typescript-basics', title: 'TypeScript Basics', explanation: 'Types, interfaces, type annotations.', category: '9. TypeScript' },
    { slug: 'typescript-react', title: 'TypeScript with React', explanation: 'Typing components, props, hooks.', category: '9. TypeScript' },
    { slug: 'advanced-types', title: 'Advanced Types', explanation: 'Generics, utility types, type guards.', category: '9. TypeScript' },
    { slug: 'typescript-config', title: 'TypeScript Configuration', explanation: 'tsconfig.json, compiler options.', category: '9. TypeScript' },
    
    // 10. BUILD TOOLS
    { slug: 'module-bundlers', title: 'Module Bundlers', explanation: 'Webpack, Vite, build process overview.', category: '10. Build Tools' },
    { slug: 'vite', title: 'Vite', explanation: 'Modern build tool with fast HMR.', category: '10. Build Tools' },
    { slug: 'babel', title: 'Babel', explanation: 'JavaScript transpiler for browser compatibility.', category: '10. Build Tools' },
    { slug: 'eslint', title: 'ESLint', explanation: 'Linting JavaScript code for quality.', category: '10. Build Tools' },
    { slug: 'prettier', title: 'Prettier', explanation: 'Code formatting and style consistency.', category: '10. Build Tools' },
    
    // 11. TESTING
    { slug: 'testing-fundamentals', title: 'Testing Fundamentals', explanation: 'Unit, integration, E2E testing concepts.', category: '11. Testing' },
    { slug: 'jest', title: 'Jest', explanation: 'JavaScript testing framework.', category: '11. Testing' },
    { slug: 'react-testing-library', title: 'React Testing Library', explanation: 'Testing React components.', category: '11. Testing' },
    { slug: 'vitest', title: 'Vitest', explanation: 'Fast unit testing with Vite.', category: '11. Testing' },
    { slug: 'e2e-testing', title: 'E2E Testing', explanation: 'Cypress or Playwright for end-to-end tests.', category: '11. Testing' },
    
    // 12. NEXT.JS & SSR
    { slug: 'nextjs-intro', title: 'Next.js Introduction', explanation: 'React framework with SSR and SSG.', category: '12. Next.js & SSR' },
    { slug: 'nextjs-routing', title: 'Next.js Routing', explanation: 'File-based routing, dynamic routes.', category: '12. Next.js & SSR' },
    { slug: 'data-fetching', title: 'Data Fetching', explanation: 'getServerSideProps, getStaticProps, API routes.', category: '12. Next.js & SSR' },
    { slug: 'nextjs-app-router', title: 'App Router', explanation: 'Next.js 13+ App Router, server components.', category: '12. Next.js & SSR' },
    { slug: 'seo-optimization', title: 'SEO Optimization', explanation: 'Meta tags, structured data, performance.', category: '12. Next.js & SSR' },
    
    // 13. BROWSER APIs
    { slug: 'local-storage', title: 'Web Storage', explanation: 'localStorage, sessionStorage for client-side data.', category: '13. Browser APIs' },
    { slug: 'geolocation', title: 'Geolocation API', explanation: 'Accessing user location.', category: '13. Browser APIs' },
    { slug: 'notifications', title: 'Notifications API', explanation: 'Browser notifications.', category: '13. Browser APIs' },
    { slug: 'service-workers', title: 'Service Workers', explanation: 'Offline functionality, caching strategies.', category: '13. Browser APIs' },
    { slug: 'web-sockets', title: 'WebSockets', explanation: 'Real-time bidirectional communication.', category: '13. Browser APIs' },
    { slug: 'intersection-observer', title: 'Intersection Observer', explanation: 'Lazy loading, infinite scroll.', category: '13. Browser APIs' },
    
    // 14. WEB PERFORMANCE
    { slug: 'performance-metrics', title: 'Performance Metrics', explanation: 'FCP, LCP, CLS, TTFB, Core Web Vitals.', category: '14. Web Performance' },
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'Code splitting, dynamic imports.', category: '14. Web Performance' },
    { slug: 'image-optimization', title: 'Image Optimization', explanation: 'WebP, responsive images, lazy loading.', category: '14. Web Performance' },
    { slug: 'caching-strategies', title: 'Caching Strategies', explanation: 'Browser cache, CDN, service workers.', category: '14. Web Performance' },
    { slug: 'bundle-optimization', title: 'Bundle Optimization', explanation: 'Tree shaking, code splitting, minification.', category: '14. Web Performance' },
    { slug: 'lighthouse', title: 'Lighthouse Audits', explanation: 'Performance auditing and optimization.', category: '14. Web Performance' },
    
    // 15. ACCESSIBILITY (A11Y)
    { slug: 'aria-basics', title: 'ARIA Basics', explanation: 'ARIA attributes for screen readers.', category: '15. Accessibility' },
    { slug: 'keyboard-navigation', title: 'Keyboard Navigation', explanation: 'Focus management, keyboard shortcuts.', category: '15. Accessibility' },
    { slug: 'semantic-html', title: 'Semantic HTML', explanation: 'Using proper HTML elements for accessibility.', category: '15. Accessibility' },
    { slug: 'color-contrast', title: 'Color Contrast', explanation: 'WCAG guidelines for visual accessibility.', category: '15. Accessibility' },
    { slug: 'screen-readers', title: 'Screen Reader Testing', explanation: 'Testing with NVDA, JAWS, VoiceOver.', category: '15. Accessibility' },
    
    // 16. SECURITY
    { slug: 'xss-prevention', title: 'XSS Prevention', explanation: 'Cross-Site Scripting attack prevention.', category: '16. Web Security' },
    { slug: 'csrf-protection', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery prevention.', category: '16. Web Security' },
    { slug: 'cors', title: 'CORS', explanation: 'Cross-Origin Resource Sharing.', category: '16. Web Security' },
    { slug: 'authentication', title: 'Authentication', explanation: 'JWT, OAuth, session management.', category: '16. Web Security' },
    { slug: 'https-ssl', title: 'HTTPS & SSL', explanation: 'Secure communication, certificates.', category: '16. Web Security' },
    
    // 17. PWA
    { slug: 'pwa-basics', title: 'PWA Basics', explanation: 'Progressive Web App fundamentals.', category: '17. Progressive Web Apps' },
    { slug: 'manifest', title: 'Web App Manifest', explanation: 'App-like experience configuration.', category: '17. Progressive Web Apps' },
    { slug: 'offline-support', title: 'Offline Support', explanation: 'Service workers for offline functionality.', category: '17. Progressive Web Apps' },
    { slug: 'push-notifications', title: 'Push Notifications', explanation: 'Web push API for notifications.', category: '17. Progressive Web Apps' },
    
    // 18. DESIGN SYSTEMS
    { slug: 'component-libraries', title: 'Component Libraries', explanation: 'Material-UI, Chakra UI, shadcn/ui.', category: '18. Design Systems' },
    { slug: 'design-tokens', title: 'Design Tokens', explanation: 'Consistent design values across projects.', category: '18. Design Systems' },
    { slug: 'storybook', title: 'Storybook', explanation: 'Component documentation and testing.', category: '18. Design Systems' },
    { slug: 'figma-integration', title: 'Figma Integration', explanation: 'Design-to-code workflow.', category: '18. Design Systems' },
    
    // 19. DEPLOYMENT & HOSTING
    { slug: 'vercel', title: 'Vercel', explanation: 'Deploying Next.js and React apps.', category: '19. Deployment & Hosting' },
    { slug: 'netlify', title: 'Netlify', explanation: 'Static site hosting and CI/CD.', category: '19. Deployment & Hosting' },
    { slug: 'cloudflare', title: 'Cloudflare Pages', explanation: 'Edge hosting and performance.', category: '19. Deployment & Hosting' },
    { slug: 'ci-cd', title: 'CI/CD', explanation: 'GitHub Actions, automated deployments.', category: '19. Deployment & Hosting' },
    { slug: 'docker', title: 'Docker Basics', explanation: 'Containerizing frontend applications.', category: '19. Deployment & Hosting' },
    
    // 20. SOFT SKILLS & BEST PRACTICES
    { slug: 'code-review', title: 'Code Review', explanation: 'Reviewing and being reviewed effectively.', category: '20. Professional Skills' },
    { slug: 'documentation', title: 'Documentation', explanation: 'Writing clear README, JSDoc comments.', category: '20. Professional Skills' },
    { slug: 'debugging-techniques', title: 'Debugging Techniques', explanation: 'Systematic debugging approaches.', category: '20. Professional Skills' },
    { slug: 'clean-code', title: 'Clean Code', explanation: 'Readable, maintainable code practices.', category: '20. Professional Skills' },
    { slug: 'agile-scrum', title: 'Agile & Scrum', explanation: 'Working in agile teams, sprints.', category: '20. Professional Skills' },
    { slug: 'design-patterns', title: 'Design Patterns', explanation: 'Common frontend patterns and architectures.', category: '20. Professional Skills' },
  ],
};
