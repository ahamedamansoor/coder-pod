
import type { Language } from './types';

export const react: Language = {
  slug: 'react',
  name: 'React',
  topics: [
    // LEARNING RESOURCES
    { slug: 'learning-plan', title: 'Learning Roadmap', explanation: 'A comprehensive roadmap guiding you from React beginner to expert with clear milestones and timelines.' },
    
    // 1. GETTING STARTED
    { slug: 'what-is-react', title: 'What is React?', explanation: "Understand React's core philosophy, why it's popular, and when to use it. Learn about the virtual DOM and component-based architecture.", category: '1. Getting Started' },
    { slug: 'installation-and-setup', title: 'Installation & Setup', explanation: "Set up your development environment with modern tools like Vite, understand project structure, and run your first React app.", category: '1. Getting Started' },
    { slug: 'your-first-component', title: 'Your First Component', explanation: "Create your first React component, learn about imports/exports, component composition, and naming conventions.", category: '1. Getting Started' },
    { slug: 'writing-jsx', title: 'Writing JSX', explanation: "Master JSX syntax, rules, and how to write HTML-like code in JavaScript. Learn about attributes, expressions, and fragments.", category: '1. Getting Started' },
    { slug: 'javascript-in-jsx', title: 'JavaScript in JSX', explanation: "Use JavaScript expressions in JSX, handle events, render lists, conditionally render content, and apply styles dynamically.", category: '1. Getting Started' },
    
    // 2. FUNDAMENTALS
    { slug: 'components-and-props', title: 'Components & Props', explanation: "Deep dive into components, props, prop types, default props, and how data flows between components.", category: '2. Fundamentals' },
    { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: "Master conditional rendering techniques: if statements, ternary operators, logical AND, and rendering patterns.", category: '2. Fundamentals' },
    { slug: 'rendering-lists', title: 'Rendering Lists', explanation: "Render dynamic lists with map(), understand keys, filtering, sorting, and list performance optimization.", category: '2. Fundamentals' },
    { slug: 'responding-to-events', title: 'Handling Events', explanation: "Handle user interactions, event objects, event propagation, and common event patterns in React.", category: '2. Fundamentals' },
    { slug: 'state-a-components-memory', title: 'State & Memory', explanation: "Introduction to state with useState, understanding state vs props, and how state triggers re-renders.", category: '2. Fundamentals' },
    
    // 3. INTERMEDIATE CONCEPTS
    { slug: 'render-and-commit', title: 'Render & Commit', explanation: "Understand React's rendering process, when components re-render, and how React updates the DOM.", category: '3. Intermediate Concepts' },
    { slug: 'state-as-a-snapshot', title: 'State Snapshots', explanation: "Learn how state works like snapshots, batching, and why state updates are asynchronous.", category: '3. Intermediate Concepts' },
    { slug: 'updating-objects-in-state', title: 'Updating Objects', explanation: "Properly update objects in state using immutability, spread syntax, and Immer for complex updates.", category: '3. Intermediate Concepts' },
    { slug: 'updating-arrays-in-state', title: 'Updating Arrays', explanation: "Master array updates: adding, removing, filtering, sorting, and transforming arrays without mutation.", category: '3. Intermediate Concepts' },
    { slug: 'queueing-a-series-of-state-updates', title: 'State Updates Queue', explanation: "Understand how React queues state updates, use updater functions, and avoid common pitfalls.", category: '3. Intermediate Concepts' },
    
    // 4. STATE MANAGEMENT
    { slug: 'extracting-state-logic-into-a-reducer', title: 'State Reducers', explanation: "Simplify complex state logic with useReducer, write reducers, and when to use reducers vs useState.", category: '4. State Management' },
    { slug: 'choosing-the-state-structure', title: 'State Structure', explanation: "Learn principles for effective state structure: normalization, avoiding redundancy, and organizing state.", category: '4. State Management' },
    { slug: 'sharing-state-between-components', title: 'Sharing State', explanation: "Master the 'lifting state up' pattern, controlled vs uncontrolled components, and state synchronization.", category: '4. State Management' },
    { slug: 'preserving-and-resetting-state', title: 'Preserving State', explanation: "Understand how React preserves state, using keys for reset, and state lifecycle management.", category: '4. State Management' },
    
    // 5. HOOKS MASTERY
    { slug: 'hooks-overview', title: 'Hooks Overview', explanation: "Complete guide to React Hooks: why they exist, rules, and how they revolutionized React development.", category: '5. Hooks Mastery' },
    { slug: 'rules-of-hooks', title: 'Rules of Hooks', explanation: "Master the two fundamental rules of Hooks and understand why they're essential for React to work.", category: '5. Hooks Mastery' },
    { slug: 'usestate-hook', title: 'useState Deep Dive', explanation: "Advanced useState patterns: functional updates, lazy initialization, and performance considerations.", category: '5. Hooks Mastery' },
    { slug: 'useeffect-hook', title: 'useEffect Deep Dive', explanation: "Master useEffect: cleanup functions, dependency arrays, effects lifecycle, and common patterns.", category: '5. Hooks Mastery' },
    { slug: 'usecontext-hook', title: 'useContext Hook', explanation: "Use Context API with useContext Hook, avoid prop drilling, and understand context performance.", category: '5. Hooks Mastery' },
    { slug: 'usereducer-hook', title: 'useReducer Hook', explanation: "Advanced useReducer patterns, complex state logic, actions, dispatch, and comparing with useState.", category: '5. Hooks Mastery' },
    { slug: 'usecallback-hook', title: 'useCallback Hook', explanation: "Optimize performance with useCallback, prevent unnecessary re-renders, and memoization patterns.", category: '5. Hooks Mastery' },
    { slug: 'usememo-hook', title: 'useMemo Hook', explanation: "Memoize expensive calculations, understand when to use useMemo vs useCallback, and performance optimization.", category: '5. Hooks Mastery' },
    { slug: 'useref-hook', title: 'useRef Hook', explanation: "Access DOM elements, store mutable values, forward refs, and advanced ref patterns.", category: '5. Hooks Mastery' },
    { slug: 'uselayouteffect-hook', title: 'useLayoutEffect Hook', explanation: "Synchronous DOM measurements, when to use useLayoutEffect vs useEffect, and layout calculations.", category: '5. Hooks Mastery' },
    
    // 6. ADVANCED HOOKS
    { slug: 'useinsertioneffect-hook', title: 'useInsertionEffect', explanation: "CSS-in-JS library integration, style injection timing, and advanced styling patterns.", category: '6. Advanced Hooks' },
    { slug: 'usetransition-hook', title: 'useTransition Hook', explanation: "Non-urgent state updates, startTransition, isPending, and improving UI responsiveness.", category: '6. Advanced Hooks' },
    { slug: 'usedeferredvalue-hook', title: 'useDeferredValue Hook', explanation: "Defer non-critical UI updates, optimize list filtering, and concurrent rendering patterns.", category: '6. Advanced Hooks' },
    { slug: 'useimperativehandle-hook', title: 'useImperativeHandle', explanation: "Customize ref exposure, imperative APIs, and parent-child component communication.", category: '6. Advanced Hooks' },
    { slug: 'usedebugvalue-hook', title: 'useDebugValue Hook', explanation: "Debug custom hooks in React DevTools, create custom debug labels, and improve development experience.", category: '6. Advanced Hooks' },
    { slug: 'useid-hook', title: 'useId Hook', explanation: "Generate unique IDs, server-side rendering compatibility, and accessibility patterns.", category: '6. Advanced Hooks' },
    { slug: 'usesyncexternalstore-hook', title: 'useSyncExternalStore', explanation: "Subscribe to external stores, third-party state management, and concurrent rendering compatibility.", category: '6. Advanced Hooks' },
    
    // 7. CONTEXT API
    { slug: 'what-is-context', title: 'What is Context?', explanation: "Understand when and why to use Context API, prop drilling problems, and context use cases.", category: '7. Context API' },
    { slug: 'creating-context', title: 'Creating Context', explanation: "Create context with createContext, providers, consumers, and default values.", category: '7. Context API' },
    { slug: 'passing-data-with-context', title: 'Passing Data', explanation: "Pass complex data through context, update context values, and context provider patterns.", category: '7. Context API' },
    { slug: 'consuming-context', title: 'Consuming Context', explanation: "Consume context with useContext Hook, multiple contexts, and context optimization.", category: '7. Context API' },
    { slug: 'context-performance', title: 'Context Performance', explanation: "Optimize context re-renders, split contexts, and performance best practices.", category: '7. Context API' },
    { slug: 'context-combination-patterns', title: 'Context Patterns', explanation: "Combine Context with useReducer, global state patterns, and advanced context architectures.", category: '7. Context API' },
    
    // 8. PERFORMANCE OPTIMIZATION
    { slug: 'what-is-memoization', title: 'What is Memoization?', explanation: "Understand memoization concepts, React.memo, useMemo, useCallback, and when to optimize.", category: '8. Performance' },
    { slug: 'lazy-loading-performance', title: 'Lazy Loading', explanation: "Code-splitting with React.lazy, dynamic imports, route-based splitting, and bundle optimization.", category: '8. Performance' },
    { slug: 'profiling-performance', title: 'Profiling Performance', explanation: "Use React DevTools Profiler, identify bottlenecks, measure render performance, and optimization strategies.", category: '8. Performance' },
    { slug: 'optimization-best-practices', title: 'Optimization Best Practices', explanation: "Performance optimization best practices, measuring first, avoiding premature optimization, and common patterns.", category: '8. Performance' },
    
    // 9. TESTING
    { slug: 'testing-overview', title: 'Testing Overview', explanation: "Introduction to React testing, Jest, React Testing Library, and testing philosophy.", category: '9. Testing' },
    { slug: 'component-testing', title: 'Component Testing', explanation: "Test component rendering, props, state, events, and user interactions with React Testing Library.", category: '9. Testing' },
    { slug: 'hook-testing', title: 'Hook Testing', explanation: "Test custom hooks with renderHook, act, and advanced hook testing patterns.", category: '9. Testing' },
    { slug: 'async-testing', title: 'Async Testing', explanation: "Test async operations, API calls, timers, and promises with waitFor and findBy queries.", category: '9. Testing' },
    { slug: 'mocking-and-stubbing', title: 'Mocking & Stubbing', explanation: "Mock functions, modules, API calls, and isolate components during testing.", category: '9. Testing' },
    
    // 10. PATTERNS & ARCHITECTURE
    { slug: 'keeping-components-pure', title: 'Pure Components', explanation: "Understand pure functions, side effects, and how to write predictable, testable components.", category: '10. Patterns' },
    { slug: 'understanding-your-ui-as-a-tree', title: 'UI as Trees', explanation: "Visualize component trees, render trees, and module dependency trees for better architecture.", category: '10. Patterns' },
    { slug: 'controlled-components-pattern', title: 'Controlled Components', explanation: "Master controlled component patterns, form handling, and validation strategies.", category: '10. Patterns' },
    { slug: 'uncontrolled-components-pattern', title: 'Uncontrolled Components', explanation: "Understand uncontrolled components, refs for forms, and when to use uncontrolled patterns.", category: '10. Patterns' },
    { slug: 'lifting-state-up-pattern', title: 'Lifting State Up', explanation: "Advanced state sharing patterns, sibling communication, and state architecture.", category: '10. Patterns' },
    { slug: 'keys-and-list-rendering-pattern', title: 'Keys & Lists', explanation: "Master key prop best practices, list performance, and common key anti-patterns.", category: '10. Patterns' },
    { slug: 'reusing-logic-with-custom-hooks', title: 'Custom Hooks', explanation: "Create reusable custom hooks, share stateful logic, and advanced hook patterns.", category: '10. Patterns' },
    { slug: 'custom-hook-examples', title: 'Custom Hook Examples', explanation: "Practical custom hooks: useForm, useWindowSize, useLocalStorage, useDebounce, and more.", category: '10. Patterns' },
    
    // 11. ADVANCED CONCEPTS
    { slug: 'referencing-values-with-refs', title: 'Refs for Values', explanation: "Use refs to store values without re-renders, avoid stale closures, and advanced ref patterns.", category: '11. Advanced Concepts' },
    { slug: 'manipulating-the-dom-with-refs', title: 'DOM Manipulation', explanation: "Direct DOM manipulation with refs, focus management, media controls, and third-party integrations.", category: '11. Advanced Concepts' },
    { slug: 'synchronizing-with-effects', title: 'Effects & Sync', explanation: "Advanced useEffect patterns, side effects management, and effect lifecycle.", category: '11. Advanced Concepts' },
    { slug: 'you-might-not-need-an-effect', title: 'Avoiding Effects', explanation: "When not to use useEffect, alternatives to effects, and effect-free patterns.", category: '11. Advanced Concepts' },
    { slug: 'lifecycle-of-reactive-effects', title: 'Effect Lifecycle', explanation: "Deep understanding of effect lifecycle, cleanup, and dependency management.", category: '11. Advanced Concepts' },
    { slug: 'separating-events-from-effects', title: 'Events vs Effects', explanation: "Separate event logic from effects, reactive programming, and clean effect patterns.", category: '11. Advanced Concepts' },
    { slug: 'removing-effect-dependencies', title: 'Effect Dependencies', explanation: "Optimize effect dependencies, prevent unnecessary re-runs, and dependency array best practices.", category: '11. Advanced Concepts' },
    
    // 12. COMPONENT APIS
    { slug: 'forwardref-api', title: 'forwardRef API', explanation: "Pass refs through components, create ref-forwarding components, and advanced ref patterns.", category: '12. Component APIs' },
    { slug: 'fragment-api', title: 'Fragment API', explanation: "Use fragments for multiple elements, keyed fragments, and fragment performance.", category: '12. Component APIs' },
    { slug: 'lazy-components-api', title: 'Lazy Components', explanation: "Advanced code-splitting patterns, suspense boundaries, and lazy loading strategies.", category: '12. Component APIs' },
    { slug: 'memo-api', title: 'memo API', explanation: "Component memoization, custom comparison functions, and memo best practices.", category: '12. Component APIs' },
    { slug: 'profiler-api', title: 'Profiler API', explanation: "Programmatic performance measurement, custom profilers, and performance monitoring.", category: '12. Component APIs' },
    { slug: 'suspense-api', title: 'Suspense API', explanation: "Advanced suspense patterns, error boundaries, data loading, and concurrent features.", category: '12. Component APIs' },
    { slug: 'strictmode-api', title: 'StrictMode API', explanation: "Development-time checks, unsafe lifecycle detection, and strict mode benefits.", category: '12. Component APIs' },
    
    // 13. FORMS & INPUTS
    { slug: 'handling-forms-details', title: 'Form Handling', explanation: "Advanced form patterns, validation, submission, and form state management.", category: '13. Forms' },
    { slug: 'input-types-details', title: 'Input Types', explanation: "Master all HTML input types in React, file uploads, custom inputs, and input validation.", category: '13. Forms' },
    { slug: 'form-libraries-integration', title: 'Form Libraries', explanation: "Integrate with form libraries like Formik, React Hook Form, and validation libraries.", category: '13. Forms' },
    
    // 14. ACCESSIBILITY
    { slug: 'aria-and-accessibility-pattern', title: 'Accessibility', explanation: "Build accessible React components, ARIA attributes, keyboard navigation, and screen reader support.", category: '14. Accessibility' },
    { slug: 'default-props-pattern', title: 'Default Props', explanation: "Modern default prop patterns, TypeScript integration, and prop validation.", category: '14. Accessibility' },
    { slug: 'type-checking-with-proptypes', title: 'PropTypes', explanation: "Runtime type checking, prop validation, and debugging with PropTypes.", category: '14. Accessibility' },
    
    // 15. CLIENT LIBRARIES
    { slug: 'react-dom-methods', title: 'React-DOM', explanation: "React-DOM APIs, createRoot, hydrateRoot, flushSync, and client-side rendering.", category: '15. Client Libraries' },
    
    // 16. REACT 18+ FEATURES
    { slug: 'automatic-batching-react-18', title: 'Automatic Batching', explanation: "React 18 automatic batching, concurrent features, and performance improvements.", category: '16. React 18+' },
    { slug: 'concurrent-features-react-18', title: 'Concurrent Features', explanation: "Concurrent rendering, transitions, deferred values, and user experience improvements.", category: '16. React 18+' },
    { slug: 'server-components', title: 'Server Components', explanation: "React Server Components, zero-bundle-size components, and server-client architecture.", category: '16. React 18+' },
    { slug: 'streaming-react-18', title: 'Streaming SSR', explanation: "Streaming server-side rendering, Suspense on server, and hydration patterns.", category: '16. React 18+' },
    { slug: 'error-boundaries-advanced', title: 'Error Boundaries', explanation: "Advanced error boundary patterns, error handling strategies, and graceful degradation.", category: '16. React 18+' },
    
    // 17. TYPESCRIPT INTEGRATION
    { slug: 'typescript-basics-with-react', title: 'TypeScript Basics', explanation: "Setup React with TypeScript, basic types, and component typing.", category: '17. TypeScript' },
    { slug: 'typing-props', title: 'Typing Props', explanation: "Type component props, interfaces vs types, optional props, and generic components.", category: '17. TypeScript' },
    { slug: 'typing-state', title: 'Typing State', explanation: "Type useState, useReducer, and complex state structures with TypeScript.", category: '17. TypeScript' },
    { slug: 'typing-events', title: 'Typing Events', explanation: "Type event handlers, form events, and custom event types.", category: '17. TypeScript' },
    { slug: 'typing-hooks', title: 'Typing Hooks', explanation: "Type custom hooks, useContext, useRef, and advanced hook patterns.", category: '17. TypeScript' },
    { slug: 'typing-components', title: 'Typing Components', explanation: "React.FC, React.ReactNode, utility types, and advanced component typing.", category: '17. TypeScript' },
    
    // 18. ECOSYSTEM - ROUTING
    { slug: 'react-router-intro', title: 'Router Intro', explanation: "Client-side routing concepts, React Router overview, and SPA navigation.", category: '18. Ecosystem - Routing' },
    { slug: 'react-router-setup', title: 'Router Setup', explanation: "Install and configure React Router v6, basic routing setup, and route structure.", category: '18. Ecosystem - Routing' },
    { slug: 'routes-and-route', title: 'Routes & Route', explanation: "Define routes, path matching, nested routes, and route parameters.", category: '18. Ecosystem - Routing' },
    { slug: 'link-and-navlink', title: 'Link & NavLink', explanation: "Navigation components, active states, programmatic navigation, and route linking.", category: '18. Ecosystem - Routing' },
    { slug: 'dynamic-routes', title: 'Dynamic Routes', explanation: "Route parameters, useParams, query strings, and dynamic navigation.", category: '18. Ecosystem - Routing' },
    { slug: 'programmatic-navigation', title: 'Programmatic Navigation', explanation: "useNavigate hook, redirects, navigation guards, and conditional routing.", category: '18. Ecosystem - Routing' },
    { slug: 'nested-routes', title: 'Nested Routes', explanation: "Route nesting, Outlet component, layout routes, and complex route structures.", category: '18. Ecosystem - Routing' },
    { slug: 'protected-routes', title: 'Protected Routes', explanation: "Authentication, authorization, route guards, and protected route patterns.", category: '18. Ecosystem - Routing' },
    
    // 19. ECOSYSTEM - STATE MANAGEMENT
    { slug: 'redux-intro', title: 'Redux Intro', explanation: "Redux principles, state management concepts, and when to use Redux.", category: '19. Ecosystem - State Management' },
    { slug: 'redux-toolkit', title: 'Redux Toolkit', explanation: "Modern Redux with RTK, simplified setup, and best practices.", category: '19. Ecosystem - State Management' },
    { slug: 'redux-store', title: 'Redux Store', explanation: "Create stores, configure Redux, and store organization patterns.", category: '19. Ecosystem - State Management' },
    { slug: 'redux-slices', title: 'Redux Slices', explanation: "createSlice, reducers, actions, and slice organization.", category: '19. Ecosystem - State Management' },
    { slug: 'redux-thunk', title: 'Redux Async', explanation: "Async operations with Redux Thunk, createAsyncThunk, and data fetching.", category: '19. Ecosystem - State Management' },
    { slug: 'rtk-query', title: 'RTK Query', explanation: "Data fetching and caching with RTK Query, mutations, and query management.", category: '19. Ecosystem - State Management' },
    
    { slug: 'zustand-intro', title: 'Zustand Intro', explanation: "Lightweight state management with Zustand, simple API, and minimal boilerplate.", category: '19. Ecosystem - State Management' },
    { slug: 'zustand-store', title: 'Zustand Store', explanation: "Create Zustand stores, hooks integration, and state patterns.", category: '19. Ecosystem - State Management' },
    
    { slug: 'react-query-intro', title: 'React Query', explanation: "Server state management, data fetching, caching, and background updates.", category: '19. Ecosystem - State Management' },
    { slug: 'usequery-hook', title: 'useQuery Hook', explanation: "Data fetching with useQuery, caching strategies, and query management.", category: '19. Ecosystem - State Management' },
    { slug: 'usemutation-hook', title: 'useMutation Hook', explanation: "Data mutations, POST/PUT/DELETE operations, and optimistic updates.", category: '19. Ecosystem - State Management' },
    
    // 20. EXPERT LEVEL
    { slug: 'thinking-in-react-process', title: 'Thinking in React', explanation: "React mindset, component design principles, and architectural thinking.", category: '20. Expert Level' },
    { slug: 'component-design', title: 'Component Design', explanation: "Advanced component design patterns, composition, and architecture principles.", category: '20. Expert Level' },
    { slug: 'architectural-patterns', title: 'Architecture', explanation: "Large-scale application architecture, design patterns, and system design.", category: '20. Expert Level' },
    { slug: 'react-devtools', title: 'DevTools', explanation: "Master React DevTools, debugging techniques, and performance analysis.", category: '20. Expert Level' },
    { slug: 'production-optimization', title: 'Production', explanation: "Production builds, optimization strategies, and deployment best practices.", category: '20. Expert Level' }
  ]
};
