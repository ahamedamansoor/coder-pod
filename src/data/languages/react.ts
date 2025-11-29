
import type { Language } from './types';

export const react: Language = {
  slug: 'react',
  name: 'React',
  topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning React from scratch.' },
      { slug: 'interview-questions', title: 'Interview Q&A', explanation: 'A curated list of common React interview questions and answers.' },
      { slug: 'react-version-updates', title: 'React Version Updates', explanation: 'Information about the latest React versions and their new features.' },
      
      // SECTION 1: GETTING STARTED
      { slug: 'what-is-react', title: 'What is React?', explanation: "React is a library for building user interfaces with components. This topic covers the declarative nature of React, its component-based architecture, and its core philosophy." },
      { slug: 'installation-and-setup', title: 'Installation & Setup', explanation: "Creating a React app with tools like Create React App and Vite, understanding the basic project structure, and running your first React app." },
      { slug: 'your-first-component', title: 'Your First Component', explanation: "Learn what components are, how to create them, export/import them, nest them, and follow proper naming conventions." },
      { slug: 'writing-jsx', title: 'Writing JSX', explanation: "An introduction to JSX (JavaScript XML), its rules (single root element, close all tags, camelCase attributes), and how to write markup in JavaScript." },
      { slug: 'javascript-in-jsx', title: 'JavaScript in JSX', explanation: "Using JavaScript within JSX via curly braces, handling event handlers, conditional rendering, rendering lists, and applying inline styles." },

      // SECTION 2: DESCRIBING THE UI
      { slug: 'components-and-props', title: 'Components and Props', explanation: "A deeper look at defining and using components, passing data via props, using JSX as children, setting default props, and understanding how props flow." },
      { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: "Techniques for conditionally rendering UI using if statements, the ternary operator, the logical AND (&&) operator, and rendering null." },
      { slug: 'rendering-lists', title: 'Rendering Lists', explanation: "Using the map() function to render lists of data, the importance of `key` props, rules for keys, filtering lists, and keeping lists in order." },
      { slug: 'keeping-components-pure', title: 'Keeping Components Pure', explanation: "Understanding pure components, side effects, impurity, and how React's StrictMode helps detect issues. Learn where side effects are permissible." },
      { slug: 'understanding-your-ui-as-a-tree', title: 'Understanding Your UI as a Tree', explanation: "Visualizing your UI as a component tree, render tree, and module dependency tree." },

      // SECTION 3: ADDING INTERACTIVITY
      { slug: 'responding-to-events', title: 'Responding to Events', explanation: "Adding event handlers, naming conventions, reading the event object, stopping propagation, preventing default behavior, and common events like onClick and onChange." },
      { slug: 'state-a-components-memory', title: "State: A Component's Memory", explanation: "Understanding the difference between state and props, adding state with the useState Hook, how state updates trigger renders, and the rules of Hooks." },
      { slug: 'render-and-commit', title: 'Render and Commit', explanation: "The three steps of React's rendering process: triggering a render, React rendering your component, and React committing changes to the DOM." },
      { slug: 'state-as-a-snapshot', title: 'State as a Snapshot', explanation: "Understanding that state variables are like snapshots and how React batches multiple state updates." },
      { slug: 'queueing-a-series-of-state-updates', title: 'Queueing a Series of State Updates', explanation: "How React processes state updates in a queue, using updater functions, and avoiding recreating initial state." },
      { slug: 'updating-objects-in-state', title: 'Updating Objects in State', explanation: "The importance of treating state as read-only, how to correctly update objects using spread syntax, and using Immer to simplify the process." },
      { slug: 'updating-arrays-in-state', title: 'Updating Arrays in State', explanation: "The correct patterns for updating arrays in state: adding, removing, transforming, and replacing items without direct mutation." },

      // SECTION 4: MANAGING STATE
      { slug: 'extracting-state-logic-into-a-reducer', title: 'Extracting State Logic into a Reducer', explanation: "Using a reducer to consolidate complex state logic, comparing useState and useReducer, and best practices for writing reducers." },
      { slug: 'choosing-the-state-structure', title: 'Choosing the State Structure', explanation: "Principles for structuring your state effectively: grouping related state, avoiding redundancy, and avoiding deep nesting." },
      { slug: 'sharing-state-between-components', title: 'Sharing State Between Components', explanation: "The 'Lifting State Up' pattern, and understanding controlled vs. uncontrolled components." },
      { slug: 'preserving-and-resetting-state', title: 'Preserving and Resetting State', explanation: "How React preserves state based on a component's position in the UI tree, and how to explicitly reset state using a key prop." },
      
      // SECTION 5: ESCAPE HATCHES
      { slug: 'referencing-values-with-refs', title: 'Referencing Values with Refs', explanation: "Introduction to the useRef Hook for accessing DOM nodes or persisting values without causing re-renders, and how to forward refs." },
      { slug: 'manipulating-the-dom-with-refs', title: 'Manipulating the DOM with Refs', explanation: "Best practices for direct DOM manipulation with refs, such as managing focus, playing media, or integrating with third-party libraries." },
      { slug: 'synchronizing-with-effects', title: 'Synchronizing with Effects', explanation: "Understanding side effects, the useEffect Hook, its dependency array, and the lifecycle of an effect." },
      { slug: 'you-might-not-need-an-effect', title: "You Might Not Need an Effect", explanation: "Common scenarios where an Effect is not necessary, such as transforming data for rendering or caching expensive calculations." },
      { slug: 'lifecycle-of-reactive-effects', title: 'Lifecycle of Reactive Effects', explanation: "A deeper dive into the lifecycle of effects and their separation from the component's rendering lifecycle." },
      { slug: 'separating-events-from-effects', title: 'Separating Events from Effects', explanation: "Distinguishing between reactive values and event handler logic, and how to extract non-reactive logic from Effects." },
      { slug: 'removing-effect-dependencies', title: 'Removing Effect Dependencies', explanation: "Strategies for removing unnecessary dependencies from your Effect's dependency array to prevent unwanted re-runs." },
      { slug: 'reusing-logic-with-custom-hooks', title: 'Reusing Logic with Custom Hooks', explanation: "What custom Hooks are, how to create them to share stateful logic, and best practices for their use." },
      { slug: 'custom-hook-examples', title: 'Custom Hook Examples', explanation: "Practical examples of custom Hooks like useWindowSize, useForm, useAsync, and useOnClickOutside." },

      // SECTION 6: HOOKS (COMPREHENSIVE)
      { slug: 'hooks-overview', title: 'Hooks Overview', explanation: "A comprehensive introduction to Hooks and the motivation behind their creation." },
      { slug: 'rules-of-hooks', title: 'Rules of Hooks', explanation: "A detailed look at the two critical rules: only call Hooks at the top level and only from React functions." },
      { slug: 'usestate-hook', title: 'useState Hook', explanation: "In-depth details on the useState Hook, including functional updates, lazy initialization, and state batching." },
      { slug: 'useeffect-hook', title: 'useEffect Hook', explanation: "Comprehensive guide to useEffect, covering the cleanup function and the behavior of the dependency array." },
      { slug: 'usecontext-hook', title: 'useContext Hook', explanation: "Using the useContext Hook to consume data from a React Context without a Consumer component." },
      { slug: 'usereducer-hook', title: 'useReducer Hook', explanation: "A detailed guide to useReducer, dispatching actions, writing reducers, and comparing it with useState." },
      { slug: 'usecallback-hook', title: 'useCallback Hook', explanation: "Memoizing callback functions to prevent unnecessary re-renders in child components." },
      { slug: 'usememo-hook', title: 'useMemo Hook', explanation: "Memoizing the result of expensive calculations so they are not re-computed on every render." },
      { slug: 'useref-hook', title: 'useRef Hook', explanation: "A deep dive into useRef for accessing DOM nodes and for storing mutable values that don't trigger re-renders." },
      { slug: 'uselayouteffect-hook', title: 'useLayoutEffect Hook', explanation: "Understanding the difference between useLayoutEffect and useEffect, and when to use it for synchronous DOM measurements." },
      { slug: 'useinsertioneffect-hook', title: 'useInsertionEffect Hook', explanation: "A specialized Hook for CSS-in-JS libraries to inject styles before any layout effects fire." },
      { slug: 'usetransition-hook', title: 'useTransition Hook', explanation: "Marking state updates as non-urgent to avoid blocking the UI, using startTransition and the isPending flag." },
      { slug: 'usedeferredvalue-hook', title: 'useDeferredValue Hook', explanation: "Deferring the re-rendering of a non-critical part of the UI, and its difference from useTransition." },
      { slug: 'useimperativehandle-hook', title: 'useImperativeHandle Hook', explanation: "Customizing the instance value that is exposed to parent components when using `ref`." },
      { slug: 'usedebugvalue-hook', title: 'useDebugValue Hook', explanation: "Displaying a label for custom hooks in React DevTools." },
      { slug: 'useid-hook', title: 'useId Hook', explanation: "Generating unique IDs that are stable across server and client rendering, to avoid hydration mismatches." },
      { slug: 'usesyncexternalstore-hook', title: 'useSyncExternalStore Hook', explanation: "A Hook for subscribing to external data sources (like a third-party state management library) in a way that's compatible with concurrent rendering." },

      // SECTION 7: COMPONENT DETAILS
      { slug: 'forwardref-api', title: 'forwardRef', explanation: "How to use `React.forwardRef` to pass a `ref` from a parent component to a child component's DOM node." },
      { slug: 'fragment-api', title: 'Fragment (<>...)</>', explanation: "Grouping multiple elements without adding an extra node to the DOM using `<Fragment>` or the `<>` syntax." },
      { slug: 'lazy-components-api', title: 'Lazy Components', explanation: "Code-splitting your application with `React.lazy` and dynamic `import()` for better performance." },
      { slug: 'memo-api', title: 'React.memo', explanation: "Using `React.memo` as a higher-order component to prevent a component from re-rendering if its props haven't changed." },
      { slug: 'profiler-api', title: 'Profiler', explanation: "Using the `<Profiler>` component to programmatically measure the performance of a React component tree." },
      { slug: 'suspense-api', title: 'Suspense', explanation: "Declaratively specifying loading fallbacks for components that are not yet ready to render, often used with `React.lazy`." },
      { slug: 'strictmode-api', title: 'StrictMode', explanation: "Using `<StrictMode>` to highlight potential problems in an application, like unsafe lifecycles or unexpected side effects." },

      // SECTION 8: CLIENT LIBRARIES
      { slug: 'react-dom-methods', title: 'React-DOM Methods', explanation: "An overview of key `react-dom` methods like `createRoot`, `hydrateRoot`, and `flushSync`." },

      // SECTION 9: FORM DETAILS
      { slug: 'handling-forms-details', title: 'Handling Forms', explanation: "A detailed look at form handling in React, covering controlled and uncontrolled components, submission, and validation." },
      { slug: 'input-types-details', title: 'Input Types', explanation: "Working with various HTML input types like text, textarea, select, checkbox, radio, and file inputs in React." },
      { slug: 'form-libraries-integration', title: 'Form Libraries Integration', explanation: "An overview of integrating with popular third-party form libraries for state management and validation." },
      
      // SECTION 10: ADVANCED PATTERNS
      { slug: 'controlled-components-pattern', title: 'Controlled Components', explanation: "An in-depth look at the controlled components pattern where React state controls the value of form inputs." },
      { slug: 'uncontrolled-components-pattern', title: 'Uncontrolled Components', explanation: "Understanding uncontrolled components where the DOM handles the form data, and when this pattern is useful." },
      { slug: 'lifting-state-up-pattern', title: 'Lifting State Up', explanation: "A detailed guide to the 'lifting state up' pattern for sharing state between components." },
      { slug: 'keys-and-list-rendering-pattern', title: 'Keys and List Rendering', explanation: "Why keys are critical for performance in lists, rules for good keys, and why using an index as a key is an anti-pattern." },
      { slug: 'default-props-pattern', title: 'Default Props', explanation: "Methods for setting default values for component props." },
      { slug: 'type-checking-with-proptypes', title: 'Type Checking with PropTypes', explanation: "Using the `prop-types` library to add runtime type checking to your component props for better debugging." },
      { slug: 'aria-and-accessibility-pattern', title: 'ARIA and Accessibility', explanation: "Best practices for making your React components accessible using semantic HTML and ARIA attributes." },
      
      // SECTION 11: CONTEXT API
      { slug: 'what-is-context', title: 'What is Context?', explanation: "Understanding the motivation for the Context API and when it's appropriate to use it to avoid 'prop drilling'." },
      { slug: 'creating-context', title: 'Creating Context', explanation: "How to create a new Context object using `React.createContext` and its `Provider` and `Consumer` components." },
      { slug: 'passing-data-with-context', title: 'Passing Data with Context', explanation: "How to pass down strings, objects, and functions through a Context Provider." },
      { slug: 'consuming-context', title: 'Consuming Context', explanation: "Different ways to consume context values, focusing on the `useContext` Hook." },
      { slug: 'context-performance', title: 'Context Performance', explanation: "Understanding how context updates can cause re-renders and strategies for preventing them." },
      { slug: 'context-combination-patterns', title: 'Combination Patterns', explanation: "Common patterns for combining Context with `useState` or `useReducer` to manage global state." },

      // SECTION 12: PERFORMANCE OPTIMIZATION
      { slug: 'what-is-memoization', title: 'What is Memoization?', explanation: "A deep dive into memoization concepts in React using `React.memo`, `useMemo`, and `useCallback`." },
      { slug: 'lazy-loading-performance', title: 'Lazy Loading', explanation: "Optimizing application load time through code-splitting with `React.lazy` and dynamic `import()`." },
      { slug: 'profiling-performance', title: 'Profiling Performance', explanation: "Using the React DevTools Profiler to identify performance bottlenecks in your application." },
      { slug: 'optimization-best-practices', title: 'Optimization Best Practices', explanation: "General best practices for performance optimization, such as measuring first and avoiding premature optimization." },
      
      // SECTION 13: TESTING
      { slug: 'testing-overview', title: 'Testing Overview', explanation: "An introduction to testing React components and the tools commonly used, like Jest and React Testing Library." },
      { slug: 'component-testing', title: 'Component Testing', explanation: "How to test component rendering, props, state changes, events, and conditional rendering." },
      { slug: 'hook-testing', title: 'Hook Testing', explanation: "Strategies for testing custom Hooks to ensure their logic is correct." },
      { slug: 'async-testing', title: 'Async Testing', explanation: "How to handle asynchronous operations in your tests using methods like `waitFor` and `findBy` queries." },
      { slug: 'mocking-and-stubbing', title: 'Mocking and Stubbing', explanation: "Techniques for mocking functions and modules using Jest to isolate components during testing." },

      // SECTION 14: DEPLOYMENT
      { slug: 'production-optimization', title: 'Production Optimization', explanation: "Understanding the difference between development and production builds, including minification and source maps." },
      { slug: 'building-for-production', title: 'Building for Production', explanation: "Using build tools to create an optimized production build, and analyzing bundle size." },
      { slug: 'hosting-options', title: 'Hosting Options', explanation: "An overview of different hosting options for your React application, from static hosting to serverless functions." },

      // SECTION 15: TYPESCRIPT WITH REACT
      { slug: 'typescript-basics-with-react', title: 'TypeScript Basics with React', explanation: "Setting up a React project with TypeScript and learning basic type annotations for components." },
      { slug: 'typing-props', title: 'Typing Props', explanation: "How to define types for your component props using interfaces or types, including optional and default props." },
      { slug: 'typing-state', title: 'Typing State', explanation: "How to add types to your `useState` Hook for better type safety." },
      { slug: 'typing-events', title: 'Typing Events', explanation: "Using React's built-in event types for event handlers like `onChange` and `onClick`." },
      { slug: 'typing-hooks', title: 'Typing Hooks', explanation: "How to properly type other Hooks like `useContext`, `useRef`, and custom Hooks." },
      { slug: 'typing-components', title: 'Typing Components', explanation: "Understanding `React.FC`, `React.ReactNode`, and other utility types for components." },

      // SECTION 16: ADVANCED REACT FEATURES
      { slug: 'server-components', title: 'Server Components', explanation: "An introduction to the concept of Server Components, their benefits, and how they differ from Client Components." },
      { slug: 'streaming-react-18', title: 'Streaming', explanation: "Understanding server-side rendering with streaming HTML and its integration with Suspense." },
      { slug: 'automatic-batching-react-18', title: 'Automatic Batching', explanation: "How React 18 automatically batches multiple state updates to reduce re-renders, even those inside promises or timeouts." },
      { slug: 'concurrent-features-react-18', title: 'Concurrent Features', explanation: "An overview of concurrent rendering and the new Hooks (`useTransition`, `useDeferredValue`) that enable it." },
      { slug: 'error-boundaries-advanced', title: 'Error Boundaries (Advanced)', explanation: "A deep dive into creating error boundary components to catch and handle errors in your component tree." },
      
      // SECTION 17: DEVELOPER TOOLS
      { slug: 'react-devtools', title: 'React DevTools', explanation: "Using the React DevTools browser extension to inspect component hierarchies, props, state, and hooks." },
      { slug: 'react-devtools-profiler', title: 'React DevTools Profiler', explanation: "How to use the Profiler tab in the DevTools to record performance data and identify rendering bottlenecks." },

      // SECTION 18: API REFERENCE
      { slug: 'react-apis-reference', title: 'React APIs', explanation: "A reference guide to core React APIs like `Component`, `memo`, `forwardRef`, `lazy`, and `Suspense`." },
      { slug: 'hook-apis-reference', title: 'Hook APIs', explanation: "A comprehensive reference for all built-in React Hooks." },
      { slug: 'react-dom-apis-reference', title: 'React-DOM APIs', explanation: "A reference guide for the main `react-dom/client` APIs." },
      
      // SECTION 19: RULES & BEST PRACTICES
      { slug: 'rules-of-react', title: 'Rules of React', explanation: "A summary of the core rules of React, such as components and renders must be pure." },
      { slug: 'rules-of-hooks-recap', title: 'Rules of Hooks (Recap)', explanation: "A recap of the two fundamental rules of Hooks." },
      { slug: 'best-practices', title: 'Best Practices', explanation: "A summary of best practices covering naming conventions, component composition, state management, performance, and more." },
      
      // SECTION 20: THINKING IN REACT
      { slug: 'thinking-in-react-process', title: 'Thinking in React Process', explanation: "Following the official guide's process: breaking the UI into a component hierarchy, building a static version, and adding state." },
      { slug: 'component-design', title: 'Component Design', explanation: "Principles of good component design, including the Single Responsibility Principle and composition." },
      { slug: 'architectural-patterns', title: 'Architectural Patterns', explanation: "An overview of common architectural patterns in React applications, focusing on data flow and state management." },
  ]
};
