
import type { Language } from './types';

export const react: Language = {
  slug: 'react',
  name: 'React',
  topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning React from scratch.' },
      { slug: 'interview-questions', title: 'Interview Q&A', explanation: 'A curated list of common React interview questions and answers.' },
      { slug: 'what-is-react', title: 'What is React?', explanation: 'An overview of the React library and its philosophy.' },
      { slug: 'setting-up-react', title: 'Setting Up a React Environment', explanation: 'Creating a new React project using modern tools like Vite or Next.js.' },
      { slug: 'jsx', title: 'JSX Deep Dive', explanation: 'Understanding JavaScript XML for writing UI components and how it differs from HTML.' },
      { slug: 'react-components', title: 'Components & Props', explanation: 'Building reusable UI elements and passing data between them.' },
      { slug: 'react-state', title: 'State & Lifecycle', explanation: 'Managing dynamic data and understanding how components are created, updated, and destroyed.' },
      { slug: 'handling-events', title: 'Handling Events', explanation: 'Making your components interactive by responding to user input like clicks and form submissions.' },
      { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: 'Showing or hiding components and elements based on application state.' },
      { slug: 'lists-and-keys', title: 'Lists and Keys', explanation: 'Rendering dynamic lists of data and the importance of using keys for performance.' },
      { slug: 'react-forms', title: 'Handling Forms', explanation: 'Managing user input with controlled and uncontrolled components.' },
      { slug: 'rules-of-hooks', title: 'The Rules of Hooks', explanation: 'Understanding the two critical rules for using hooks effectively.' },
      { slug: 'use-state-hook', title: 'useState Hook', explanation: 'Managing simple state in functional components.' },
      { slug: 'use-effect-hook', title: 'useEffect Hook', explanation: 'Handling side effects like data fetching, subscriptions, and manual DOM mutations.' },
      { slug: 'use-context-hook', title: 'useContext Hook', explanation: 'Managing global state to avoid "prop drilling".' },
      { slug: 'use-reducer-hook', title: 'useReducer Hook', explanation: 'An alternative to useState for managing more complex component state.' },
      { slug: 'use-ref-hook', title: 'useRef Hook', explanation: 'Accessing DOM nodes directly and persisting values without causing re-renders.' },
      { slug: 'memoization-hooks', title: 'useCallback & useMemo', explanation: 'Optimizing performance by memoizing functions and values.' },
      { slug: 'custom-hooks', title: 'Custom Hooks', explanation: 'Creating your own reusable stateful logic to share across components.' },
      { slug: 'react-router', title: 'Routing with React Router', explanation: 'Implementing client-side navigation between pages in a React application.' },
      { slug: 'state-management-libraries', title: 'State Management Libraries', explanation: 'An overview of popular libraries like Redux, Zustand, and Recoil for large-scale state management.' },
      { slug: 'composition-patterns', title: 'Advanced Component Patterns', explanation: 'Exploring patterns like Higher-Order Components (HOCs) and Render Props.' },
      { slug: 'error-boundaries', title: 'Error Boundaries', explanation: 'Catching JavaScript errors anywhere in your component tree and displaying a fallback UI.' },
      { slug: 'code-splitting', title: 'Code Splitting', explanation: 'Improving performance by lazy-loading components with React.lazy() and Suspense.' },
      { slug: 'react-and-typescript', title: 'React with TypeScript', explanation: 'Adding static types to your React application for better scalability and developer experience.' },
      { slug: 'react-performance', title: 'Performance Optimization', explanation: 'Using tools like the React Profiler to identify and fix performance bottlenecks.' },
      { slug: 'server-vs-client-components', title: 'Server & Client Components', explanation: 'Understanding the difference and when to use each in modern React frameworks like Next.js.' },
      { slug: 'testing-react-apps', title: 'Testing React Applications', explanation: 'An introduction to testing libraries like Jest and React Testing Library.' },
  ]
};
