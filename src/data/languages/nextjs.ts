
import type { Language } from './types';

export const nextjs: Language = {
  slug: 'nextjs',
  name: 'Next.js',
  topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning Next.js from scratch.' },
      { slug: 'interview-questions', title: 'Interview Q&A', explanation: 'A curated list of common Next.js interview questions and answers.' },
      { slug: 'nextjs-version-updates', title: 'Next.js Version Updates', explanation: 'Information about the latest Next.js versions and their new features.' },
      
      // SECTION 1: GETTING STARTED
      { slug: 'what-is-nextjs', title: 'What is Next.js?', explanation: "Next.js is a React framework for building full-stack web applications. Learn about its features, benefits, and why it's the go-to framework for React developers.", category: '1. Getting Started' },
      { slug: 'installation-and-setup', title: 'Installation & Setup', explanation: "Creating a Next.js project with create-next-app, understanding the project structure, and running your first Next.js application.", category: '1. Getting Started' },
      { slug: 'project-structure', title: 'Project Structure', explanation: "Understanding the Next.js project structure: app directory, public folder, configuration files, and best practices for organizing your code.", category: '1. Getting Started' },
      { slug: 'typescript-setup', title: 'TypeScript Setup', explanation: "Setting up TypeScript in Next.js, type definitions, and best practices for type-safe Next.js applications.", category: '1. Getting Started' },
      
      // SECTION 2: ROUTING FUNDAMENTALS
      { slug: 'routing-fundamentals', title: 'Routing Fundamentals', explanation: "Understanding file-based routing in Next.js, how routes are created from the file system, and the routing conventions.", category: '2. Routing Fundamentals' },
      { slug: 'pages-and-layouts', title: 'Pages and Layouts', explanation: "Creating pages with page.tsx, shared layouts with layout.tsx, and understanding the layout hierarchy.", category: '2. Routing Fundamentals' },
      { slug: 'linking-and-navigating', title: 'Linking and Navigating', explanation: "Using the Link component, programmatic navigation with useRouter, and navigation best practices.", category: '2. Routing Fundamentals' },
      { slug: 'dynamic-routes', title: 'Dynamic Routes', explanation: "Creating dynamic route segments with [slug], accessing route parameters, and generating dynamic pages.", category: '2. Routing Fundamentals' },
      { slug: 'route-groups', title: 'Route Groups', explanation: "Organizing routes with route groups (folder) without affecting URL structure.", category: '2. Routing Fundamentals' },
      { slug: 'parallel-routes', title: 'Parallel Routes', explanation: "Rendering multiple pages simultaneously in the same layout using @folder convention.", category: '2. Routing Fundamentals' },
      { slug: 'intercepting-routes', title: 'Intercepting Routes', explanation: "Intercepting routes with (.) convention for modal-like experiences while preserving URL.", category: '2. Routing Fundamentals' },
      
      // SECTION 3: APP ROUTER (NEXT.JS 13+)
      { slug: 'app-router-introduction', title: 'App Router Introduction', explanation: "Introduction to the App Router, its benefits over Pages Router, and migration considerations.", category: '3. App Router' },
      { slug: 'app-directory', title: 'App Directory', explanation: "Understanding the app directory structure, file conventions, and how it differs from the pages directory.", category: '3. App Router' },
      { slug: 'route-handlers', title: 'Route Handlers', explanation: "Creating API endpoints with route.ts, handling HTTP methods, and building RESTful APIs.", category: '3. App Router' },
      { slug: 'loading-ui', title: 'Loading UI', explanation: "Creating loading states with loading.tsx, Suspense boundaries, and streaming UI.", category: '3. App Router' },
      { slug: 'error-handling', title: 'Error Handling', explanation: "Error boundaries with error.tsx, global error handling with global-error.tsx, and error recovery.", category: '3. App Router' },
      { slug: 'not-found', title: 'Not Found Pages', explanation: "Custom 404 pages with not-found.tsx and programmatic not-found() function.", category: '3. App Router' },
      
      // SECTION 4: DATA FETCHING
      { slug: 'data-fetching-overview', title: 'Data Fetching Overview', explanation: "Overview of data fetching patterns in Next.js: Server Components, Client Components, and Server Actions.", category: '4. Data Fetching' },
      { slug: 'server-side-fetching', title: 'Server-Side Data Fetching', explanation: "Fetching data in Server Components using async/await, benefits, and best practices.", category: '4. Data Fetching' },
      { slug: 'client-side-fetching', title: 'Client-Side Data Fetching', explanation: "Fetching data in Client Components with SWR, React Query, and useEffect patterns.", category: '4. Data Fetching' },
      { slug: 'static-generation', title: 'Static Generation (SSG)', explanation: "Generating static pages at build time, when to use SSG, and generateStaticParams.", category: '4. Data Fetching' },
      { slug: 'incremental-static-regeneration', title: 'Incremental Static Regeneration', explanation: "ISR with revalidate option, on-demand revalidation, and updating static pages.", category: '4. Data Fetching' },
      { slug: 'server-side-rendering', title: 'Server-Side Rendering (SSR)', explanation: "Dynamic rendering with Server Components, when to use SSR, and performance considerations.", category: '4. Data Fetching' },
      
      // SECTION 5: SERVER COMPONENTS & ACTIONS
      { slug: 'server-components', title: 'React Server Components', explanation: "Understanding React Server Components, their benefits, limitations, and when to use them.", category: '5. Server Components & Actions' },
      { slug: 'server-actions', title: 'Server Actions', explanation: "Creating server-side functions with 'use server', form handling, and data mutations.", category: '5. Server Components & Actions' },
      { slug: 'server-client-composition', title: 'Server & Client Composition', explanation: "Composing Server and Client Components, passing props, and component boundaries.", category: '5. Server Components & Actions' },
      { slug: 'streaming-and-suspense', title: 'Streaming and Suspense', explanation: "Progressive rendering with Streaming, Suspense boundaries, and loading states.", category: '5. Server Components & Actions' },
      
      // SECTION 6: CLIENT COMPONENTS
      { slug: 'client-components', title: 'Client Components', explanation: "Using 'use client' directive, when to use Client Components, and interactivity patterns.", category: '6. Client Components' },
      { slug: 'client-side-hooks', title: 'Client-Side Hooks', explanation: "Using React hooks in Client Components: useState, useEffect, useContext, and custom hooks.", category: '6. Client Components' },
      { slug: 'event-handling', title: 'Event Handling', explanation: "Handling user interactions, form submissions, and event listeners in Client Components.", category: '6. Client Components' },
      { slug: 'third-party-libraries', title: 'Third-Party Libraries', explanation: "Integrating third-party libraries that require client-side features in Next.js.", category: '6. Client Components' },
      
      // SECTION 7: RENDERING STRATEGIES
      { slug: 'rendering-overview', title: 'Rendering Overview', explanation: "Understanding different rendering strategies in Next.js: SSG, SSR, ISR, and Client-Side Rendering.", category: '7. Rendering Strategies' },
      { slug: 'static-rendering', title: 'Static Rendering', explanation: "How Next.js generates static HTML at build time and serves cached content.", category: '7. Rendering Strategies' },
      { slug: 'dynamic-rendering', title: 'Dynamic Rendering', explanation: "Server-side rendering pages on each request, dynamic functions, and when it's triggered.", category: '7. Rendering Strategies' },
      { slug: 'edge-runtime', title: 'Edge Runtime', explanation: "Using Edge Runtime for serverless functions, edge middleware, and global deployment.", category: '7. Rendering Strategies' },
      
      // SECTION 8: CACHING & REVALIDATION
      { slug: 'caching-overview', title: 'Caching Overview', explanation: "Understanding Next.js caching layers: Request Memoization, Data Cache, Full Route Cache, and Router Cache.", category: '8. Caching & Revalidation' },
      { slug: 'data-cache', title: 'Data Cache', explanation: "Caching fetch requests, cache configuration, and cache invalidation strategies.", category: '8. Caching & Revalidation' },
      { slug: 'revalidation', title: 'Revalidation', explanation: "Time-based and on-demand revalidation with revalidate, revalidatePath, and revalidateTag.", category: '8. Caching & Revalidation' },
      { slug: 'request-memoization', title: 'Request Memoization', explanation: "Deduplicating fetch requests during a single render pass for better performance.", category: '8. Caching & Revalidation' },
      { slug: 'opting-out-of-caching', title: 'Opting Out of Caching', explanation: "Disabling cache with cache: 'no-store', dynamic functions, and force-dynamic config.", category: '8. Caching & Revalidation' },
      
      // SECTION 9: STYLING
      { slug: 'styling-options', title: 'Styling Options', explanation: "Overview of styling approaches in Next.js: CSS Modules, Tailwind CSS, CSS-in-JS, and Sass.", category: '9. Styling' },
      { slug: 'css-modules', title: 'CSS Modules', explanation: "Using CSS Modules for scoped styles, naming conventions, and best practices.", category: '9. Styling' },
      { slug: 'tailwind-css', title: 'Tailwind CSS', explanation: "Setting up and using Tailwind CSS in Next.js, configuration, and optimization.", category: '9. Styling' },
      { slug: 'sass-support', title: 'Sass Support', explanation: "Using Sass/SCSS in Next.js, configuration, and global styles.", category: '9. Styling' },
      { slug: 'css-in-js', title: 'CSS-in-JS', explanation: "Using CSS-in-JS libraries like styled-components and Emotion in Next.js.", category: '9. Styling' },
      
      // SECTION 10: OPTIMIZATIONS
      { slug: 'image-optimization', title: 'Image Optimization', explanation: "Using next/image component, automatic image optimization, responsive images, and lazy loading.", category: '10. Optimizations' },
      { slug: 'font-optimization', title: 'Font Optimization', explanation: "Using next/font for automatic font optimization, Google Fonts, and local fonts.", category: '10. Optimizations' },
      { slug: 'script-optimization', title: 'Script Optimization', explanation: "Loading third-party scripts with next/script, script strategies, and performance optimization.", category: '10. Optimizations' },
      { slug: 'metadata-and-seo', title: 'Metadata and SEO', explanation: "Managing metadata with Metadata API, generateMetadata, Open Graph, and SEO best practices.", category: '10. Optimizations' },
      { slug: 'bundle-analyzer', title: 'Bundle Analysis', explanation: "Analyzing bundle size with @next/bundle-analyzer and optimization strategies.", category: '10. Optimizations' },
      { slug: 'lazy-loading', title: 'Lazy Loading', explanation: "Code splitting and lazy loading components with next/dynamic for better performance.", category: '10. Optimizations' },
      
      // SECTION 11: API ROUTES
      { slug: 'api-routes-overview', title: 'API Routes Overview', explanation: "Building API endpoints in Next.js, route handlers, and RESTful API design.", category: '11. API Routes' },
      { slug: 'request-and-response', title: 'Request and Response', explanation: "Handling HTTP requests, parsing request body, setting response headers, and status codes.", category: '11. API Routes' },
      { slug: 'api-route-handlers', title: 'API Route Handlers', explanation: "Creating route handlers for GET, POST, PUT, DELETE, and PATCH methods.", category: '11. API Routes' },
      { slug: 'api-middleware', title: 'API Middleware', explanation: "Creating middleware for API routes, authentication, validation, and error handling.", category: '11. API Routes' },
      { slug: 'cors-configuration', title: 'CORS Configuration', explanation: "Setting up CORS for API routes, handling preflight requests, and cross-origin access.", category: '11. API Routes' },
      
      // SECTION 12: MIDDLEWARE
      { slug: 'middleware-introduction', title: 'Middleware Introduction', explanation: "Understanding Next.js middleware, execution order, and use cases for authentication and redirects.", category: '12. Middleware' },
      { slug: 'middleware-api', title: 'Middleware API', explanation: "Using NextRequest, NextResponse, and middleware configuration options.", category: '12. Middleware' },
      { slug: 'authentication-middleware', title: 'Authentication Middleware', explanation: "Implementing authentication checks in middleware, protecting routes, and redirecting users.", category: '12. Middleware' },
      { slug: 'geolocation-and-cookies', title: 'Geolocation and Cookies', explanation: "Accessing geolocation data and managing cookies in middleware.", category: '12. Middleware' },
      
      // SECTION 13: AUTHENTICATION
      { slug: 'authentication-patterns', title: 'Authentication Patterns', explanation: "Overview of authentication strategies in Next.js: JWT, sessions, OAuth, and best practices.", category: '13. Authentication' },
      { slug: 'nextauth-setup', title: 'NextAuth.js Setup', explanation: "Installing and configuring NextAuth.js (Auth.js) for authentication in Next.js applications.", category: '13. Authentication' },
      { slug: 'nextauth-providers', title: 'NextAuth.js Providers', explanation: "Configuring authentication providers: Google, GitHub, Email, Credentials, and custom providers.", category: '13. Authentication' },
      { slug: 'session-management', title: 'Session Management', explanation: "Managing user sessions, session strategies (JWT vs Database), and session callbacks.", category: '13. Authentication' },
      { slug: 'protecting-routes', title: 'Protecting Routes', explanation: "Implementing route protection with middleware, Server Components, and Client Components.", category: '13. Authentication' },
      { slug: 'role-based-access', title: 'Role-Based Access Control', explanation: "Implementing RBAC, user roles, permissions, and authorization patterns.", category: '13. Authentication' },
      
      // SECTION 14: INTERNATIONALIZATION
      { slug: 'i18n-introduction', title: 'Internationalization Introduction', explanation: "Overview of internationalization in Next.js, i18n routing, and locale detection.", category: '14. Internationalization' },
      { slug: 'next-intl-setup', title: 'next-intl Setup', explanation: "Installing and configuring next-intl library for type-safe internationalization.", category: '14. Internationalization' },
      { slug: 'locale-routing', title: 'Locale Routing', explanation: "Setting up locale-based routing, language switching, and URL structure.", category: '14. Internationalization' },
      { slug: 'translations', title: 'Translations', explanation: "Managing translation files, namespaces, and dynamic translations.", category: '14. Internationalization' },
      { slug: 'locale-detection', title: 'Locale Detection', explanation: "Automatic locale detection based on browser settings, cookies, and user preferences.", category: '14. Internationalization' },
      
      // SECTION 15: TESTING
      { slug: 'testing-overview', title: 'Testing Overview', explanation: "Overview of testing strategies in Next.js: unit tests, integration tests, and E2E tests.", category: '15. Testing' },
      { slug: 'jest-setup', title: 'Jest Setup', explanation: "Setting up Jest for unit and integration testing in Next.js applications.", category: '15. Testing' },
      { slug: 'testing-library', title: 'React Testing Library', explanation: "Using React Testing Library to test components, user interactions, and accessibility.", category: '15. Testing' },
      { slug: 'playwright-e2e', title: 'Playwright E2E Testing', explanation: "Setting up Playwright for end-to-end testing of Next.js applications.", category: '15. Testing' },
      { slug: 'api-route-testing', title: 'API Route Testing', explanation: "Testing API routes, mocking requests, and testing server-side logic.", category: '15. Testing' },
      
      // SECTION 16: DEPLOYMENT
      { slug: 'deployment-overview', title: 'Deployment Overview', explanation: "Overview of deployment options: Vercel, self-hosting, Docker, and static exports.", category: '16. Deployment' },
      { slug: 'vercel-deployment', title: 'Vercel Deployment', explanation: "Deploying to Vercel, automatic deployments, preview deployments, and production settings.", category: '16. Deployment' },
      { slug: 'self-hosting', title: 'Self-Hosting', explanation: "Self-hosting Next.js with Node.js server, standalone output, and server configuration.", category: '16. Deployment' },
      { slug: 'docker-deployment', title: 'Docker Deployment', explanation: "Containerizing Next.js applications with Docker, multi-stage builds, and optimization.", category: '16. Deployment' },
      { slug: 'static-exports', title: 'Static Exports', explanation: "Exporting Next.js as static HTML with 'output: export', limitations, and use cases.", category: '16. Deployment' },
      { slug: 'environment-variables', title: 'Environment Variables', explanation: "Managing environment variables, .env files, and runtime configuration.", category: '16. Deployment' },
      
      // SECTION 17: CONFIGURATION
      { slug: 'next-config', title: 'next.config.js', explanation: "Understanding next.config.js, configuration options, and customizing Next.js behavior.", category: '17. Configuration' },
      { slug: 'typescript-config', title: 'TypeScript Configuration', explanation: "Configuring TypeScript with tsconfig.json, path aliases, and type checking.", category: '17. Configuration' },
      { slug: 'eslint-config', title: 'ESLint Configuration', explanation: "Setting up ESLint, Next.js ESLint plugin, and code quality rules.", category: '17. Configuration' },
      { slug: 'custom-server', title: 'Custom Server', explanation: "Creating a custom server with Express or other Node.js frameworks (advanced use case).", category: '17. Configuration' },
      { slug: 'webpack-config', title: 'Webpack Configuration', explanation: "Customizing webpack configuration in Next.js for advanced build customization.", category: '17. Configuration' },
      
      // SECTION 18: ADVANCED PATTERNS
      { slug: 'advanced-routing-patterns', title: 'Advanced Routing Patterns', explanation: "Complex routing scenarios, catch-all routes, optional catch-all, and route matching.", category: '18. Advanced Patterns' },
      { slug: 'partial-prerendering', title: 'Partial Prerendering', explanation: "Combining static and dynamic content with Partial Prerendering (experimental).", category: '18. Advanced Patterns' },
      { slug: 'draft-mode', title: 'Draft Mode', explanation: "Implementing draft/preview mode for CMS content, bypassing static generation.", category: '18. Advanced Patterns' },
      { slug: 'instrumentation', title: 'Instrumentation', explanation: "Adding observability with instrumentation, monitoring, and logging.", category: '18. Advanced Patterns' },
      { slug: 'content-security-policy', title: 'Content Security Policy', explanation: "Implementing CSP headers, nonces for inline scripts, and security best practices.", category: '18. Advanced Patterns' },
      { slug: 'multi-zones', title: 'Multi-Zones', explanation: "Merging multiple Next.js applications into a single domain with multi-zones.", category: '18. Advanced Patterns' },
      
      // SECTION 19: PERFORMANCE
      { slug: 'performance-overview', title: 'Performance Overview', explanation: "Overview of performance optimization strategies, Web Vitals, and monitoring.", category: '19. Performance' },
      { slug: 'core-web-vitals', title: 'Core Web Vitals', explanation: "Understanding and optimizing for LCP, FID, CLS, and other Web Vitals metrics.", category: '19. Performance' },
      { slug: 'analytics', title: 'Analytics', explanation: "Integrating analytics with Next.js, Web Vitals reporting, and Vercel Analytics.", category: '19. Performance' },
      { slug: 'performance-monitoring', title: 'Performance Monitoring', explanation: "Monitoring application performance, identifying bottlenecks, and optimization strategies.", category: '19. Performance' },
      
      // SECTION 20: API REFERENCE
      { slug: 'file-conventions', title: 'File Conventions', explanation: "Reference for Next.js file conventions: page, layout, loading, error, route, and more.", category: '20. API Reference' },
      { slug: 'component-apis', title: 'Component APIs', explanation: "Reference for built-in components: Link, Image, Script, and their props.", category: '20. API Reference' },
      { slug: 'function-apis', title: 'Function APIs', explanation: "Reference for Next.js functions: cookies, headers, redirect, notFound, and more.", category: '20. API Reference' },
      { slug: 'config-options', title: 'Config Options', explanation: "Complete reference for next.config.js options and configurations.", category: '20. API Reference' },
  ],
};
