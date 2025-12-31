
import type { Language } from './types';

export const react: Language = {
  slug: 'react',
  name: 'React',
  topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning React from scratch.' },
      { slug: 'interview-questions', title: 'Interview Q&A', explanation: 'A curated list of common React interview questions and answers.' },
      { slug: 'react-version-updates', title: 'React Version Updates', explanation: 'Information about the latest React versions and their new features.' },
      
      // SECTION 1: GETTING STARTED
      { slug: 'what-is-react', title: 'What is React?', explanation: "React is a library for building user interfaces with components. This topic covers the declarative nature of React, its component-based architecture, and its core philosophy.", category: '1. Getting Started' },
      { slug: 'what-is-react-component', title: 'What is a React Component?', explanation: "Understand the fundamental building blocks of React applications. Components are reusable, independent pieces of UI that make your code modular and maintainable.", category: '1. Getting Started' },
      { slug: 'installation-and-setup', title: 'Installation & Setup', explanation: "Creating a React app with tools like Create React App and Vite, understanding the basic project structure, and running your first React app.", category: '1. Getting Started' },
      { slug: 'your-first-component', title: 'Your First Component', explanation: "Learn what components are, how to create them, export/import them, nest them, and follow proper naming conventions.", category: '1. Getting Started' },
      { slug: 'writing-jsx', title: 'Writing JSX', explanation: "An introduction to JSX (JavaScript XML), its rules (single root element, close all tags, camelCase attributes), and how to write markup in JavaScript.", category: '1. Getting Started' },
      { slug: 'javascript-in-jsx', title: 'JavaScript in JSX', explanation: "Using JavaScript within JSX via curly braces, handling event handlers, conditional rendering, rendering lists, and applying inline styles.", category: '1. Getting Started' },

      // SECTION 2: DESCRIBING THE UI
      { slug: 'components-and-props', title: 'Components and Props', explanation: "A deeper look at defining and using components, passing data via props, using JSX as children, setting default props, and understanding how props flow.", category: '2. Describing the UI' },
      { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: "Techniques for conditionally rendering UI using if statements, the ternary operator, the logical AND (&&) operator, and rendering null.", category: '2. Describing the UI' },
      { slug: 'rendering-lists', title: 'Rendering Lists', explanation: "Using the map() function to render lists of data, the importance of `key` props, rules for keys, filtering lists, and keeping lists in order.", category: '2. Describing the UI' },
      { slug: 'keeping-components-pure', title: 'Keeping Components Pure', explanation: "Understanding pure components, side effects, impurity, and how React's StrictMode helps detect issues. Learn where side effects are permissible.", category: '2. Describing the UI' },
      { slug: 'understanding-your-ui-as-a-tree', title: 'Understanding Your UI as a Tree', explanation: "Visualizing your UI as a component tree, render tree, and module dependency tree.", category: '2. Describing the UI' },

      // SECTION 3: ADDING INTERACTIVITY
      { slug: 'responding-to-events', title: 'Responding to Events', explanation: "Adding event handlers, naming conventions, reading the event object, stopping propagation, preventing default behavior, and common events like onClick and onChange.", category: '3. Adding Interactivity' },
      { slug: 'state-a-components-memory', title: "State: A Component's Memory", explanation: "Understanding the difference between state and props, adding state with the useState Hook, how state updates trigger renders, and the rules of Hooks.", category: '3. Adding Interactivity' },
      { slug: 'render-and-commit', title: 'Render and Commit', explanation: "The three steps of React's rendering process: triggering a render, React rendering your component, and React committing changes to the DOM.", category: '3. Adding Interactivity' },
      { slug: 'state-as-a-snapshot', title: 'State as a Snapshot', explanation: "Understanding that state variables are like snapshots and how React batches multiple state updates.", category: '3. Adding Interactivity' },
      { slug: 'queueing-a-series-of-state-updates', title: 'Queueing a Series of State Updates', explanation: "How React processes state updates in a queue, using updater functions, and avoiding recreating initial state.", category: '3. Adding Interactivity' },
      { slug: 'updating-objects-in-state', title: 'Updating Objects in State', explanation: "The importance of treating state as read-only, how to correctly update objects using spread syntax, and using Immer to simplify the process.", category: '3. Adding Interactivity' },
      { slug: 'updating-arrays-in-state', title: 'Updating Arrays in State', explanation: "The correct patterns for updating arrays in state: adding, removing, transforming, and replacing items without direct mutation.", category: '3. Adding Interactivity' },

      // SECTION 4: MANAGING STATE
      { slug: 'extracting-state-logic-into-a-reducer', title: 'Extracting State Logic into a Reducer', explanation: "Using a reducer to consolidate complex state logic, comparing useState and useReducer, and best practices for writing reducers.", category: '4. Managing State' },
      { slug: 'choosing-the-state-structure', title: 'Choosing the State Structure', explanation: "Principles for structuring your state effectively: grouping related state, avoiding redundancy, and avoiding deep nesting.", category: '4. Managing State' },
      { slug: 'sharing-state-between-components', title: 'Sharing State Between Components', explanation: "The 'Lifting State Up' pattern, and understanding controlled vs. uncontrolled components.", category: '4. Managing State' },
      { slug: 'preserving-and-resetting-state', title: 'Preserving and Resetting State', explanation: "How React preserves state based on a component's position in the UI tree, and how to explicitly reset state using a key prop.", category: '4. Managing State' },
      
      // SECTION 5: ESCAPE HATCHES
      { slug: 'referencing-values-with-refs', title: 'Referencing Values with Refs', explanation: "Introduction to the useRef Hook for accessing DOM nodes or persisting values without causing re-renders, and how to forward refs.", category: '5. Escape Hatches' },
      { slug: 'manipulating-the-dom-with-refs', title: 'Manipulating the DOM with Refs', explanation: "Best practices for direct DOM manipulation with refs, such as managing focus, playing media, or integrating with third-party libraries.", category: '5. Escape Hatches' },
      { slug: 'synchronizing-with-effects', title: 'Synchronizing with Effects', explanation: "Understanding side effects, the useEffect Hook, its dependency array, and the lifecycle of an effect.", category: '5. Escape Hatches' },
      { slug: 'you-might-not-need-an-effect', title: "You Might Not Need an Effect", explanation: "Common scenarios where an Effect is not necessary, such as transforming data for rendering or caching expensive calculations.", category: '5. Escape Hatches' },
      { slug: 'lifecycle-of-reactive-effects', title: 'Lifecycle of Reactive Effects', explanation: "A deeper dive into the lifecycle of effects and their separation from the component's rendering lifecycle.", category: '5. Escape Hatches' },
      { slug: 'separating-events-from-effects', title: 'Separating Events from Effects', explanation: "Distinguishing between reactive values and event handler logic, and how to extract non-reactive logic from Effects.", category: '5. Escape Hatches' },
      { slug: 'removing-effect-dependencies', title: 'Removing Effect Dependencies', explanation: "Strategies for removing unnecessary dependencies from your Effect's dependency array to prevent unwanted re-runs.", category: '5. Escape Hatches' },
      { slug: 'reusing-logic-with-custom-hooks', title: 'Reusing Logic with Custom Hooks', explanation: "What custom Hooks are, how to create them to share stateful logic, and best practices for their use.", category: '5. Escape Hatches' },
      { slug: 'custom-hook-examples', title: 'Custom Hook Examples', explanation: "Practical examples of custom Hooks like useWindowSize, useForm, useAsync, and useOnClickOutside.", category: '5. Escape Hatches' },

      // SECTION 6: HOOKS (COMPREHENSIVE)
      { slug: 'hooks-overview', title: 'Hooks Overview', explanation: "A comprehensive introduction to Hooks and the motivation behind their creation.", category: '6. Hooks (Comprehensive)' },
      { slug: 'rules-of-hooks', title: 'Rules of Hooks', explanation: "A detailed look at the two critical rules: only call Hooks at the top level and only from React functions.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usestate-hook', title: 'useState Hook', explanation: "In-depth details on the useState Hook, including functional updates, lazy initialization, and state batching.", category: '6. Hooks (Comprehensive)' },
      { slug: 'useeffect-hook', title: 'useEffect Hook', explanation: "Comprehensive guide to useEffect, covering the cleanup function and the behavior of the dependency array.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usecontext-hook', title: 'useContext Hook', explanation: "Using the useContext Hook to consume data from a React Context without a Consumer component.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usereducer-hook', title: 'useReducer Hook', explanation: "A detailed guide to useReducer, dispatching actions, writing reducers, and comparing it with useState.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usecallback-hook', title: 'useCallback Hook', explanation: "Memoizing callback functions to prevent unnecessary re-renders in child components.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usememo-hook', title: 'useMemo Hook', explanation: "Memoizing the result of expensive calculations so they are not re-computed on every render.", category: '6. Hooks (Comprehensive)' },
      { slug: 'useref-hook', title: 'useRef Hook', explanation: "A deep dive into useRef for accessing DOM nodes and for storing mutable values that don't trigger re-renders.", category: '6. Hooks (Comprehensive)' },
      { slug: 'uselayouteffect-hook', title: 'useLayoutEffect Hook', explanation: "Understanding the difference between useLayoutEffect and useEffect, and when to use it for synchronous DOM measurements.", category: '6. Hooks (Comprehensive)' },
      { slug: 'useinsertioneffect-hook', title: 'useInsertionEffect Hook', explanation: "A specialized Hook for CSS-in-JS libraries to inject styles before any layout effects fire.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usetransition-hook', title: 'useTransition Hook', explanation: "Marking state updates as non-urgent to avoid blocking the UI, using startTransition and the isPending flag.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usedeferredvalue-hook', title: 'useDeferredValue Hook', explanation: "Deferring the re-rendering of a non-critical part of the UI, and its difference from useTransition.", category: '6. Hooks (Comprehensive)' },
      { slug: 'useimperativehandle-hook', title: 'useImperativeHandle Hook', explanation: "Customizing the instance value that is exposed to parent components when using `ref`.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usedebugvalue-hook', title: 'useDebugValue Hook', explanation: "Displaying a label for custom hooks in React DevTools.", category: '6. Hooks (Comprehensive)' },
      { slug: 'useid-hook', title: 'useId Hook', explanation: "Generating unique IDs that are stable across server and client rendering, to avoid hydration mismatches.", category: '6. Hooks (Comprehensive)' },
      { slug: 'usesyncexternalstore-hook', title: 'useSyncExternalStore Hook', explanation: "A Hook for subscribing to external data sources (like a third-party state management library) in a way that's compatible with concurrent rendering.", category: '6. Hooks (Comprehensive)' },

      // SECTION 7: COMPONENT DETAILS
      { slug: 'forwardref-api', title: 'forwardRef', explanation: "How to use `React.forwardRef` to pass a `ref` from a parent component to a child component's DOM node.", category: '7. Component Details' },
      { slug: 'fragment-api', title: 'Fragment (<>...)</>', explanation: "Grouping multiple elements without adding an extra node to the DOM using `<Fragment>` or the `<>` syntax.", category: '7. Component Details' },
      { slug: 'lazy-components-api', title: 'Lazy Components', explanation: "Code-splitting your application with `React.lazy` and dynamic `import()` for better performance.", category: '7. Component Details' },
      { slug: 'memo-api', title: 'React.memo', explanation: "Using `React.memo` as a higher-order component to prevent a component from re-rendering if its props haven't changed.", category: '7. Component Details' },
      { slug: 'profiler-api', title: 'Profiler', explanation: "Using the `<Profiler>` component to programmatically measure the performance of a React component tree.", category: '7. Component Details' },
      { slug: 'suspense-api', title: 'Suspense', explanation: "Declaratively specifying loading fallbacks for components that are not yet ready to render, often used with `React.lazy`.", category: '7. Component Details' },
      { slug: 'strictmode-api', title: 'StrictMode', explanation: "Using `<StrictMode>` to highlight potential problems in an application, like unsafe lifecycles or unexpected side effects.", category: '7. Component Details' },

      // SECTION 8: CLIENT LIBRARIES
      { slug: 'react-dom-methods', title: 'React-DOM Methods', explanation: "An overview of key `react-dom` methods like `createRoot`, `hydrateRoot`, and `flushSync`.", category: '8. Client Libraries' },

      // SECTION 9: FORM DETAILS
      { slug: 'handling-forms-details', title: 'Handling Forms', explanation: "A detailed look at form handling in React, covering controlled and uncontrolled components, submission, and validation.", category: '9. Form Details' },
      { slug: 'input-types-details', title: 'Input Types', explanation: "Working with various HTML input types like text, textarea, select, checkbox, radio, and file inputs in React.", category: '9. Form Details' },
      { slug: 'form-libraries-integration', title: 'Form Libraries Integration', explanation: "An overview of integrating with popular third-party form libraries for state management and validation.", category: '9. Form Details' },
      
      // SECTION 10: ADVANCED PATTERNS
      { slug: 'controlled-components-pattern', title: 'Controlled Components', explanation: "An in-depth look at the controlled components pattern where React state controls the value of form inputs.", category: '10. Advanced Patterns' },
      { slug: 'uncontrolled-components-pattern', title: 'Uncontrolled Components', explanation: "Understanding uncontrolled components where the DOM handles the form data, and when this pattern is useful.", category: '10. Advanced Patterns' },
      { slug: 'lifting-state-up-pattern', title: 'Lifting State Up', explanation: "A detailed guide to the 'lifting state up' pattern for sharing state between components.", category: '10. Advanced Patterns' },
      { slug: 'keys-and-list-rendering-pattern', title: 'Keys and List Rendering', explanation: "Why keys are critical for performance in lists, rules for good keys, and why using an index as a key is an anti-pattern.", category: '10. Advanced Patterns' },
      { slug: 'default-props-pattern', title: 'Default Props', explanation: "Methods for setting default values for component props.", category: '10. Advanced Patterns' },
      { slug: 'type-checking-with-proptypes', title: 'Type Checking with PropTypes', explanation: "Using the `prop-types` library to add runtime type checking to your component props for better debugging.", category: '10. Advanced Patterns' },
      { slug: 'aria-and-accessibility-pattern', title: 'ARIA and Accessibility', explanation: "Best practices for making your React components accessible using semantic HTML and ARIA attributes.", category: '10. Advanced Patterns' },
      
      // SECTION 11: CONTEXT API
      { slug: 'what-is-context', title: 'What is Context?', explanation: "Understanding the motivation for the Context API and when it's appropriate to use it to avoid 'prop drilling'.", category: '11. Context API' },
      { slug: 'creating-context', title: 'Creating Context', explanation: "How to create a new Context object using `React.createContext` and its `Provider` and `Consumer` components.", category: '11. Context API' },
      { slug: 'passing-data-with-context', title: 'Passing Data with Context', explanation: "How to pass down strings, objects, and functions through a Context Provider.", category: '11. Context API' },
      { slug: 'consuming-context', title: 'Consuming Context', explanation: "Different ways to consume context values, focusing on the `useContext` Hook.", category: '11. Context API' },
      { slug: 'context-performance', title: 'Context Performance', explanation: "Understanding how context updates can cause re-renders and strategies for preventing them.", category: '11. Context API' },
      { slug: 'context-combination-patterns', title: 'Combination Patterns', explanation: "Common patterns for combining Context with `useState` or `useReducer` to manage global state.", category: '11. Context API' },

      // SECTION 12: PERFORMANCE OPTIMIZATION
      { slug: 'what-is-memoization', title: 'What is Memoization?', explanation: "A deep dive into memoization concepts in React using `React.memo`, `useMemo`, and `useCallback`.", category: '12. Performance Optimization' },
      { slug: 'lazy-loading-performance', title: 'Lazy Loading', explanation: "Optimizing application load time through code-splitting with `React.lazy` and dynamic `import()`.", category: '12. Performance Optimization' },
      { slug: 'profiling-performance', title: 'Profiling Performance', explanation: "Using the React DevTools Profiler to identify performance bottlenecks in your application.", category: '12. Performance Optimization' },
      { slug: 'optimization-best-practices', title: 'Optimization Best Practices', explanation: "General best practices for performance optimization, such as measuring first and avoiding premature optimization.", category: '12. Performance Optimization' },
      
      // SECTION 13: TESTING
      { slug: 'testing-overview', title: 'Testing Overview', explanation: "An introduction to testing React components and the tools commonly used, like Jest and React Testing Library.", category: '13. Testing' },
      { slug: 'component-testing', title: 'Component Testing', explanation: "How to test component rendering, props, state changes, events, and conditional rendering.", category: '13. Testing' },
      { slug: 'hook-testing', title: 'Hook Testing', explanation: "Strategies for testing custom Hooks to ensure their logic is correct.", category: '13. Testing' },
      { slug: 'async-testing', title: 'Async Testing', explanation: "How to handle asynchronous operations in your tests using methods like `waitFor` and `findBy` queries.", category: '13. Testing' },
      { slug: 'mocking-and-stubbing', title: 'Mocking and Stubbing', explanation: "Techniques for mocking functions and modules using Jest to isolate components during testing.", category: '13. Testing' },

      // SECTION 14: DEPLOYMENT
      { slug: 'production-optimization', title: 'Production Optimization', explanation: "Understanding the difference between development and production builds, including minification and source maps.", category: '14. Deployment' },
      { slug: 'building-for-production', title: 'Building for Production', explanation: "Using build tools to create an optimized production build, and analyzing bundle size.", category: '14. Deployment' },
      { slug: 'hosting-options', title: 'Hosting Options', explanation: "An overview of different hosting options for your React application, from static hosting to serverless functions.", category: '14. Deployment' },

      // SECTION 15: TYPESCRIPT WITH REACT
      { slug: 'typescript-basics-with-react', title: 'TypeScript Basics with React', explanation: "Setting up a React project with TypeScript and learning basic type annotations for components.", category: '15. TypeScript Integration' },
      { slug: 'typing-props', title: 'Typing Props', explanation: "How to define types for your component props using interfaces or types, including optional and default props.", category: '15. TypeScript Integration' },
      { slug: 'typing-state', title: 'Typing State', explanation: "How to add types to your `useState` Hook for better type safety.", category: '15. TypeScript Integration' },
      { slug: 'typing-events', title: 'Typing Events', explanation: "Using React's built-in event types for event handlers like `onChange` and `onClick`.", category: '15. TypeScript Integration' },
      { slug: 'typing-hooks', title: 'Typing Hooks', explanation: "How to properly type other Hooks like `useContext`, `useRef`, and custom Hooks.", category: '15. TypeScript Integration' },
      { slug: 'typing-components', title: 'Typing Components', explanation: "Understanding `React.FC`, `React.ReactNode`, and other utility types for components.", category: '15. TypeScript Integration' },

      // SECTION 16: ADVANCED REACT FEATURES
      { slug: 'server-components', title: 'Server Components', explanation: "An introduction to the concept of Server Components, their benefits, and how they differ from Client Components.", category: '16. Advanced Features' },
      { slug: 'streaming-react-18', title: 'Streaming', explanation: "Understanding server-side rendering with streaming HTML and its integration with Suspense.", category: '16. Advanced Features' },
      { slug: 'automatic-batching-react-18', title: 'Automatic Batching', explanation: "How React 18 automatically batches multiple state updates to reduce re-renders, even those inside promises or timeouts.", category: '16. Advanced Features' },
      { slug: 'concurrent-features-react-18', title: 'Concurrent Features', explanation: "An overview of concurrent rendering and the new Hooks (`useTransition`, `useDeferredValue`) that enable it.", category: '16. Advanced Features' },
      { slug: 'error-boundaries-advanced', title: 'Error Boundaries (Advanced)', explanation: "A deep dive into creating error boundary components to catch and handle errors in your component tree.", category: '16. Advanced Features' },
      
      // SECTION 17: DEVELOPER TOOLS
      { slug: 'react-devtools', title: 'React DevTools', explanation: "Using the React DevTools browser extension to inspect component hierarchies, props, state, and hooks.", category: '17. Developer Tools' },
      { slug: 'react-devtools-profiler', title: 'React DevTools Profiler', explanation: "How to use the Profiler tab in the DevTools to record performance data and identify rendering bottlenecks.", category: '17. Developer Tools' },

      // SECTION 18: API REFERENCE
      { slug: 'react-apis-reference', title: 'React APIs', explanation: "A reference guide to core React APIs like `Component`, `memo`, `forwardRef`, `lazy`, and `Suspense`.", category: '18. API Reference' },
      { slug: 'hook-apis-reference', title: 'Hook APIs', explanation: "A comprehensive reference for all built-in React Hooks.", category: '18. API Reference' },
      { slug: 'react-dom-apis-reference', title: 'React-DOM APIs', explanation: "A reference guide for the main `react-dom/client` APIs.", category: '18. API Reference' },
      
      // SECTION 19: RULES & BEST PRACTICES
      { slug: 'rules-of-react', title: 'Rules of React', explanation: "A summary of the core rules of React, such as components and renders must be pure.", category: '19. Rules & Best Practices' },
      { slug: 'rules-of-hooks-recap', title: 'Rules of Hooks (Recap)', explanation: "A recap of the two fundamental rules of Hooks.", category: '19. Rules & Best Practices' },
      { slug: 'best-practices', title: 'Best Practices', explanation: "A summary of best practices covering naming conventions, component composition, state management, performance, and more.", category: '19. Rules & Best Practices' },
      
      // SECTION 20: THINKING IN REACT
      { slug: 'thinking-in-react-process', title: 'Thinking in React Process', explanation: "Following the official guide's process: breaking the UI into a component hierarchy, building a static version, and adding state.", category: '20. Thinking in React' },
      { slug: 'component-design', title: 'Component Design', explanation: "Principles of good component design, including the Single Responsibility Principle and composition.", category: '20. Thinking in React' },
      { slug: 'architectural-patterns', title: 'Architectural Patterns', explanation: "An overview of common architectural patterns in React applications, focusing on data flow and state management.", category: '20. Thinking in React' },
      
      // SECTION 21: REACT ECOSYSTEM (EXTERNAL LIBRARIES)
      // React Router - Routing
      { slug: 'react-router-intro', title: 'React Router Introduction', explanation: "Understanding client-side routing and why React Router is the standard routing library for React applications.", category: '21. React Router' },
      { slug: 'react-router-setup', title: 'React Router Setup', explanation: "Installing and configuring React Router v6+ in your React application.", category: '21. React Router' },
      { slug: 'routes-and-route', title: 'Routes & Route', explanation: "Defining routes with the Routes and Route components, path matching, and nested routes.", category: '21. React Router' },
      { slug: 'link-and-navlink', title: 'Link & NavLink', explanation: "Creating navigation links with Link and NavLink components for declarative routing.", category: '21. React Router' },
      { slug: 'dynamic-routes', title: 'Dynamic Routes', explanation: "Creating dynamic route parameters with useParams hook for ID-based navigation.", category: '21. React Router' },
      { slug: 'programmatic-navigation', title: 'Programmatic Navigation', explanation: "Using useNavigate hook for programmatic route changes and redirects.", category: '21. React Router' },
      { slug: 'nested-routes', title: 'Nested Routes', explanation: "Building nested route hierarchies with Outlet component for complex layouts.", category: '21. React Router' },
      { slug: 'route-loaders', title: 'Route Loaders', explanation: "Loading data before rendering routes with loader functions (React Router v6.4+).", category: '21. React Router' },
      { slug: 'route-actions', title: 'Route Actions', explanation: "Handling form submissions and mutations with action functions (React Router v6.4+).", category: '21. React Router' },
      { slug: 'protected-routes', title: 'Protected Routes', explanation: "Implementing authentication-based route protection and authorization patterns.", category: '21. React Router' },
      
      // Redux - State Management
      { slug: 'redux-intro', title: 'Redux Introduction', explanation: "Understanding Redux principles: single source of truth, state is read-only, and changes via pure functions.", category: '22. Redux' },
      { slug: 'redux-toolkit', title: 'Redux Toolkit (RTK)', explanation: "Modern Redux with Redux Toolkit: simplified store setup, reducers, and best practices.", category: '22. Redux' },
      { slug: 'redux-store', title: 'Redux Store', explanation: "Creating and configuring the Redux store with configureStore from Redux Toolkit.", category: '22. Redux' },
      { slug: 'redux-slices', title: 'Redux Slices', explanation: "Using createSlice to define reducers and actions in a single object.", category: '22. Redux' },
      { slug: 'redux-actions', title: 'Redux Actions', explanation: "Dispatching actions to trigger state changes in Redux.", category: '22. Redux' },
      { slug: 'redux-selectors', title: 'Redux Selectors', explanation: "Reading state from the Redux store with useSelector and creating memoized selectors.", category: '22. Redux' },
      { slug: 'redux-thunk', title: 'Redux Thunk & Async Logic', explanation: "Handling asynchronous operations with Redux Thunk middleware and createAsyncThunk.", category: '22. Redux' },
      { slug: 'rtk-query', title: 'RTK Query', explanation: "Powerful data fetching and caching tool built into Redux Toolkit.", category: '22. Redux' },
      { slug: 'redux-devtools', title: 'Redux DevTools', explanation: "Debugging Redux applications with the Redux DevTools browser extension.", category: '22. Redux' },
      
      // MobX - State Management
      { slug: 'mobx-intro', title: 'MobX Introduction', explanation: "Understanding MobX: simple, scalable state management with observables and reactions.", category: '23. MobX' },
      { slug: 'mobx-observables', title: 'MobX Observables', explanation: "Creating observable state with makeObservable and makeAutoObservable.", category: '23. MobX' },
      { slug: 'mobx-actions', title: 'MobX Actions', explanation: "Modifying observable state within actions for predictable state updates.", category: '23. MobX' },
      { slug: 'mobx-computed', title: 'MobX Computed Values', explanation: "Deriving values from observables with computed properties for efficient calculations.", category: '23. MobX' },
      { slug: 'mobx-reactions', title: 'MobX Reactions', explanation: "Running side effects with autorun, reaction, and when for reactive programming.", category: '23. MobX' },
      { slug: 'mobx-react-integration', title: 'MobX React Integration', explanation: "Using observer HOC and hooks to connect MobX stores to React components.", category: '23. MobX' },
      
      // Zustand - State Management
      { slug: 'zustand-intro', title: 'Zustand Introduction', explanation: "Lightweight state management with Zustand: simple API, no boilerplate, TypeScript-first.", category: '24. Zustand' },
      { slug: 'zustand-store', title: 'Creating Zustand Stores', explanation: "Creating stores with create function and accessing state with hooks.", category: '24. Zustand' },
      { slug: 'zustand-actions', title: 'Zustand Actions', explanation: "Defining actions within the store to update state.", category: '24. Zustand' },
      { slug: 'zustand-selectors', title: 'Zustand Selectors', explanation: "Selecting specific state slices to optimize re-renders.", category: '24. Zustand' },
      { slug: 'zustand-middleware', title: 'Zustand Middleware', explanation: "Using middleware for persist, devtools, and immer integration.", category: '24. Zustand' },
      { slug: 'zustand-async', title: 'Zustand Async Actions', explanation: "Handling asynchronous operations in Zustand stores.", category: '24. Zustand' },
      
      // React Query - Data Fetching
      { slug: 'react-query-intro', title: 'React Query Introduction', explanation: "Powerful data synchronization for React: server state management, caching, and background updates.", category: '25. React Query' },
      { slug: 'react-query-setup', title: 'React Query Setup', explanation: "Installing and configuring React Query with QueryClientProvider.", category: '25. React Query' },
      { slug: 'usequery-hook', title: 'useQuery Hook', explanation: "Fetching and caching data with useQuery for GET requests.", category: '25. React Query' },
      { slug: 'usemutation-hook', title: 'useMutation Hook', explanation: "Performing mutations (POST, PUT, DELETE) with useMutation hook.", category: '25. React Query' },
      { slug: 'query-invalidation', title: 'Query Invalidation', explanation: "Invalidating and refetching queries after mutations for fresh data.", category: '25. React Query' },
      { slug: 'query-keys', title: 'Query Keys', explanation: "Understanding query keys for proper caching and invalidation.", category: '25. React Query' },
      { slug: 'pagination-infinite', title: 'Pagination & Infinite Queries', explanation: "Implementing pagination and infinite scrolling with useInfiniteQuery.", category: '25. React Query' },
      { slug: 'optimistic-updates', title: 'Optimistic Updates', explanation: "Updating UI optimistically before server confirmation for better UX.", category: '25. React Query' },
      { slug: 'react-query-devtools', title: 'React Query DevTools', explanation: "Debugging queries and mutations with React Query DevTools.", category: '25. React Query' },
      
      // SWR - Data Fetching
      { slug: 'swr-intro', title: 'SWR Introduction', explanation: "Stale-While-Revalidate strategy: React Hooks library for data fetching by Vercel.", category: '26. SWR' },
      { slug: 'swr-basic-usage', title: 'SWR Basic Usage', explanation: "Fetching data with useSWR hook and automatic revalidation.", category: '26. SWR' },
      { slug: 'swr-mutation', title: 'SWR Mutation', explanation: "Performing mutations with useSWRMutation for POST, PUT, DELETE operations.", category: '26. SWR' },
      { slug: 'swr-revalidation', title: 'SWR Revalidation', explanation: "Automatic revalidation strategies: on focus, on reconnect, on interval.", category: '26. SWR' },
      { slug: 'swr-caching', title: 'SWR Caching', explanation: "Understanding SWR's caching mechanism and cache keys.", category: '26. SWR' },
      { slug: 'swr-pagination', title: 'SWR Pagination', explanation: "Implementing pagination and infinite loading with SWR.", category: '26. SWR' },
      { slug: 'swr-prefetching', title: 'SWR Prefetching', explanation: "Prefetching data for better performance and user experience.", category: '26. SWR' },
  ]
};
