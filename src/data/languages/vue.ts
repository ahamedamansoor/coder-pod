
import type { Language } from './types';

export const vue: Language = {
  slug: 'vue',
  name: 'Vue.js',
  topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning Vue.js from scratch.' },
      { slug: 'interview-questions', title: 'Interview Q&A', explanation: 'A curated list of common Vue.js interview questions and answers.' },
      { slug: 'vue-version-updates', title: 'Vue Version Updates', explanation: 'Information about the latest Vue versions (Vue 3) and their new features.' },
      
      // SECTION 1: GETTING STARTED
      { slug: 'what-is-vue', title: 'What is Vue.js?', explanation: "Vue.js is a progressive JavaScript framework for building user interfaces. Learn about its declarative rendering, component-based architecture, and the philosophy of incremental adoption.", category: '1. Getting Started' },
      { slug: 'installation-and-setup', title: 'Installation & Setup', explanation: "Creating a Vue project with create-vue (recommended), Vite, or Vue CLI. Understanding the project structure and running your first Vue app.", category: '1. Getting Started' },
      { slug: 'vue-devtools', title: 'Vue DevTools', explanation: "Installing and using the Vue DevTools browser extension to inspect components, routes, and state management.", category: '1. Getting Started' },
      { slug: 'your-first-vue-app', title: 'Your First Vue App', explanation: "Creating your first Vue component, understanding the template syntax, and rendering your first app.", category: '1. Getting Started' },
      
      // SECTION 2: ESSENTIALS
      { slug: 'creating-a-vue-application', title: 'Creating a Vue Application', explanation: "Understanding createApp, mounting the app, and the root component configuration.", category: '2. Essentials' },
      { slug: 'template-syntax', title: 'Template Syntax', explanation: "Learn about Vue's declarative template syntax: text interpolation, raw HTML with v-html, attribute bindings, and JavaScript expressions.", category: '2. Essentials' },
      { slug: 'reactivity-fundamentals', title: 'Reactivity Fundamentals', explanation: "Understanding reactive state with ref() and reactive(), how Vue tracks changes, and the difference between them.", category: '2. Essentials' },
      { slug: 'computed-properties', title: 'Computed Properties', explanation: "Using computed properties for derived state, understanding caching behavior, and writable computed properties.", category: '2. Essentials' },
      { slug: 'class-and-style-bindings', title: 'Class and Style Bindings', explanation: "Dynamically binding HTML classes and inline styles using objects, arrays, and multiple values.", category: '2. Essentials' },
      { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: "Using v-if, v-else-if, v-else, and v-show to conditionally display elements. Understanding the differences.", category: '2. Essentials' },
      { slug: 'list-rendering', title: 'List Rendering', explanation: "Rendering lists with v-for, using keys for efficient updates, and iterating over objects and ranges.", category: '2. Essentials' },
      { slug: 'event-handling', title: 'Event Handling', explanation: "Listening to DOM events with v-on (or @), method handlers, inline handlers, event modifiers, and key modifiers.", category: '2. Essentials' },
      { slug: 'form-input-bindings', title: 'Form Input Bindings', explanation: "Two-way data binding with v-model for input, textarea, select, checkboxes, and radio buttons. Understanding modifiers like .lazy, .number, and .trim.", category: '2. Essentials' },
      { slug: 'lifecycle-hooks', title: 'Lifecycle Hooks', explanation: "Understanding the component lifecycle: onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, and their use cases.", category: '2. Essentials' },
      { slug: 'watchers', title: 'Watchers', explanation: "Using watch and watchEffect to perform side effects in response to state changes. Understanding deep watching and immediate execution.", category: '2. Essentials' },
      { slug: 'template-refs', title: 'Template Refs', explanation: "Accessing DOM elements and component instances directly using template refs (ref attribute).", category: '2. Essentials' },
      
      // SECTION 3: COMPONENTS IN-DEPTH
      { slug: 'component-registration', title: 'Component Registration', explanation: "Global vs local component registration, naming conventions, and when to use each approach.", category: '3. Components In-Depth' },
      { slug: 'props', title: 'Props', explanation: "Passing data to child components with props, prop validation, default values, and prop casing (camelCase vs kebab-case).", category: '3. Components In-Depth' },
      { slug: 'component-events', title: 'Component Events', explanation: "Emitting custom events with $emit, declaring emitted events, event validation, and handling events in parent components.", category: '3. Components In-Depth' },
      { slug: 'component-v-model', title: 'Component v-model', explanation: "Implementing v-model on custom components for two-way binding and using multiple v-model bindings.", category: '3. Components In-Depth' },
      { slug: 'fallthrough-attributes', title: 'Fallthrough Attributes', explanation: "Understanding how attributes and event listeners are inherited by child components and disabling attribute inheritance.", category: '3. Components In-Depth' },
      { slug: 'slots', title: 'Slots', explanation: "Using slots for content distribution, named slots, scoped slots, and slot fallback content.", category: '3. Components In-Depth' },
      { slug: 'provide-inject', title: 'Provide / Inject', explanation: "Sharing data between ancestor and descendant components without prop drilling using provide() and inject().", category: '3. Components In-Depth' },
      { slug: 'async-components', title: 'Async Components', explanation: "Loading components lazily with defineAsyncComponent for code splitting and better performance.", category: '3. Components In-Depth' },
      
      // SECTION 4: REUSABILITY
      { slug: 'composables', title: 'Composables', explanation: "Creating reusable composition functions (composables) to encapsulate and share stateful logic across components.", category: '4. Reusability' },
      { slug: 'custom-directives', title: 'Custom Directives', explanation: "Creating custom directives for low-level DOM access, directive hooks, and passing values to directives.", category: '4. Reusability' },
      { slug: 'plugins', title: 'Plugins', explanation: "Writing and using Vue plugins to add global functionality, such as global components, directives, or methods.", category: '4. Reusability' },
      
      // SECTION 5: BUILT-IN COMPONENTS
      { slug: 'transition', title: 'Transition', explanation: "Applying enter/leave transitions to elements with the <Transition> component using CSS classes and JavaScript hooks.", category: '5. Built-in Components' },
      { slug: 'transition-group', title: 'TransitionGroup', explanation: "Animating lists with <TransitionGroup>, understanding move transitions and list reordering animations.", category: '5. Built-in Components' },
      { slug: 'keep-alive', title: 'KeepAlive', explanation: "Caching component instances with <KeepAlive> to preserve state when switching between components.", category: '5. Built-in Components' },
      { slug: 'teleport', title: 'Teleport', explanation: "Rendering component content to a different location in the DOM tree with <Teleport>.", category: '5. Built-in Components' },
      { slug: 'suspense', title: 'Suspense', explanation: "Handling async dependencies with <Suspense> for better loading state management (experimental feature).", category: '5. Built-in Components' },
      
      // SECTION 6: SCALING UP
      { slug: 'single-file-components', title: 'Single-File Components (SFC)', explanation: "Understanding .vue files, the structure of <template>, <script>, and <style> blocks, and SFC syntax.", category: '6. Scaling Up' },
      { slug: 'sfc-tooling', title: 'SFC Tooling', explanation: "Tools for working with SFCs: Vite, Vue CLI, webpack, and IDE support.", category: '6. Scaling Up' },
      { slug: 'sfc-script-setup', title: 'SFC <script setup>', explanation: "Using the <script setup> syntax for a more concise Composition API experience with compile-time optimizations.", category: '6. Scaling Up' },
      { slug: 'sfc-css-features', title: 'SFC CSS Features', explanation: "Scoped CSS, CSS modules, v-bind in CSS, and dynamic styles in single-file components.", category: '6. Scaling Up' },
      
      // SECTION 7: COMPOSITION API
      { slug: 'composition-api-introduction', title: 'Composition API Introduction', explanation: "Understanding the motivation for the Composition API: better logic reuse, more flexible code organization, and improved TypeScript support.", category: '7. Composition API' },
      { slug: 'setup-function', title: 'setup() Function', explanation: "The setup() function as the entry point for Composition API, its arguments (props, context), and return values.", category: '7. Composition API' },
      { slug: 'reactive-ref', title: 'Reactivity: ref()', explanation: "Creating reactive references with ref(), accessing values with .value, and automatic unwrapping in templates.", category: '7. Composition API' },
      { slug: 'reactive-reactive', title: 'Reactivity: reactive()', explanation: "Creating reactive objects with reactive(), understanding deep reactivity, and limitations with primitive values.", category: '7. Composition API' },
      { slug: 'computed-in-composition-api', title: 'computed()', explanation: "Creating computed values in the Composition API with get and set functions.", category: '7. Composition API' },
      { slug: 'watch-and-watcheffect', title: 'watch() and watchEffect()', explanation: "Watching reactive sources with watch(), immediate and deep options, and the difference with watchEffect().", category: '7. Composition API' },
      { slug: 'lifecycle-hooks-composition-api', title: 'Lifecycle Hooks', explanation: "Using lifecycle hooks in the Composition API: onMounted, onUpdated, onUnmounted, and others.", category: '7. Composition API' },
      { slug: 'provide-inject-composition-api', title: 'provide() and inject()', explanation: "Using provide() and inject() in the Composition API for dependency injection.", category: '7. Composition API' },
      
      // SECTION 8: REACTIVITY IN DEPTH
      { slug: 'reactivity-fundamentals-deep', title: 'Reactivity Fundamentals (Deep Dive)', explanation: "How Vue's reactivity system works under the hood using Proxy and its benefits over Vue 2's Object.defineProperty.", category: '8. Reactivity In Depth' },
      { slug: 'reactivity-core-functions', title: 'Reactivity Core Functions', explanation: "Understanding ref(), reactive(), computed(), readonly(), shallowRef(), and shallowReactive().", category: '8. Reactivity In Depth' },
      { slug: 'reactivity-utilities', title: 'Reactivity Utilities', explanation: "Utility functions: isRef(), unref(), toRef(), toRefs(), isProxy(), isReactive(), and isReadonly().", category: '8. Reactivity In Depth' },
      { slug: 'reactivity-advanced', title: 'Advanced Reactivity APIs', explanation: "Advanced APIs: shallowRef(), triggerRef(), customRef(), effectScope(), and getCurrentScope().", category: '8. Reactivity In Depth' },
      
      // SECTION 9: RENDERING MECHANISM
      { slug: 'rendering-mechanism', title: 'Rendering Mechanism', explanation: "Understanding Vue's virtual DOM, the render pipeline, and how templates are compiled to render functions.", category: '9. Rendering Mechanism' },
      { slug: 'render-functions', title: 'Render Functions', explanation: "Using render functions and JSX as an alternative to templates for more programmatic control.", category: '9. Rendering Mechanism' },
      { slug: 'h-function', title: 'h() Function', explanation: "Creating virtual nodes with the h() function and understanding its signature.", category: '9. Rendering Mechanism' },
      
      // SECTION 10: VUE ROUTER (ESSENTIAL LIBRARY)
      { slug: 'vue-router-introduction', title: 'Vue Router Introduction', explanation: "Introduction to Vue Router, the official routing library for Vue.js. Understanding SPAs and client-side routing.", category: '10. Vue Router' },
      { slug: 'vue-router-installation', title: 'Installation & Setup', explanation: "Installing Vue Router and setting up basic routing configuration.", category: '10. Vue Router' },
      { slug: 'router-basics', title: 'Router Basics', explanation: "Defining routes, using <router-link> and <router-view>, and navigating between pages.", category: '10. Vue Router' },
      { slug: 'dynamic-route-matching', title: 'Dynamic Route Matching', explanation: "Creating dynamic routes with params, accessing route params, and reacting to param changes.", category: '10. Vue Router' },
      { slug: 'nested-routes', title: 'Nested Routes', explanation: "Creating nested routes and nested views with children route configuration.", category: '10. Vue Router' },
      { slug: 'programmatic-navigation', title: 'Programmatic Navigation', explanation: "Navigating programmatically with router.push(), router.replace(), and router.go().", category: '10. Vue Router' },
      { slug: 'named-routes', title: 'Named Routes', explanation: "Using named routes for easier navigation and avoiding hardcoded paths.", category: '10. Vue Router' },
      { slug: 'named-views', title: 'Named Views', explanation: "Displaying multiple views simultaneously with named router-view components.", category: '10. Vue Router' },
      { slug: 'redirect-and-alias', title: 'Redirect and Alias', explanation: "Setting up redirects and route aliases for flexible routing.", category: '10. Vue Router' },
      { slug: 'route-props', title: 'Passing Props to Routes', explanation: "Passing props to route components for better decoupling and testability.", category: '10. Vue Router' },
      { slug: 'navigation-guards', title: 'Navigation Guards', explanation: "Using global, per-route, and in-component guards for authentication, authorization, and route protection.", category: '10. Vue Router' },
      { slug: 'route-meta-fields', title: 'Route Meta Fields', explanation: "Adding custom metadata to routes and accessing it in navigation guards.", category: '10. Vue Router' },
      { slug: 'lazy-loading-routes', title: 'Lazy Loading Routes', explanation: "Code-splitting routes with dynamic imports for better performance.", category: '10. Vue Router' },
      { slug: 'scroll-behavior', title: 'Scroll Behavior', explanation: "Customizing scroll behavior when navigating between routes.", category: '10. Vue Router' },
      { slug: 'composition-api-router', title: 'Router with Composition API', explanation: "Using Vue Router with the Composition API: useRouter(), useRoute(), and onBeforeRouteUpdate().", category: '10. Vue Router' },
      
      // SECTION 11: PINIA (STATE MANAGEMENT)
      { slug: 'pinia-introduction', title: 'Pinia Introduction', explanation: "Introduction to Pinia, the official state management library for Vue. Understanding its benefits over Vuex.", category: '11. Pinia (State Management)' },
      { slug: 'pinia-installation', title: 'Installation & Setup', explanation: "Installing Pinia and integrating it with your Vue application.", category: '11. Pinia (State Management)' },
      { slug: 'defining-a-store', title: 'Defining a Store', explanation: "Creating stores with defineStore(), understanding store structure with state, getters, and actions.", category: '11. Pinia (State Management)' },
      { slug: 'pinia-state', title: 'State', explanation: "Defining and accessing state in Pinia stores, state mutability, and TypeScript support.", category: '11. Pinia (State Management)' },
      { slug: 'pinia-getters', title: 'Getters', explanation: "Creating computed values in stores with getters, accessing other getters, and passing arguments.", category: '11. Pinia (State Management)' },
      { slug: 'pinia-actions', title: 'Actions', explanation: "Defining actions to modify state, handling async operations, and accessing other stores.", category: '11. Pinia (State Management)' },
      { slug: 'using-stores', title: 'Using Stores', explanation: "Importing and using stores in components with both Options API and Composition API.", category: '11. Pinia (State Management)' },
      { slug: 'pinia-composition-api', title: 'Pinia with Composition API', explanation: "Using Pinia stores in <script setup> and extracting state with storeToRefs().", category: '11. Pinia (State Management)' },
      { slug: 'pinia-plugins', title: 'Pinia Plugins', explanation: "Extending Pinia functionality with plugins for persistence, logging, and more.", category: 'Pinia (State Management)' },
      
      // SECTION 12: VUEUSE (COMPOSITION UTILITIES)
      { slug: 'vueuse-introduction', title: 'VueUse Introduction', explanation: "Introduction to VueUse, a collection of essential Composition API utilities for Vue.", category: '12. VueUse (Utilities)' },
      { slug: 'vueuse-installation', title: 'Installation & Setup', explanation: "Installing VueUse and importing utilities in your components.", category: '12. VueUse (Utilities)' },
      { slug: 'vueuse-state-utilities', title: 'State Utilities', explanation: "Useful state utilities: useLocalStorage, useSessionStorage, useState, useToggle, and useCounter.", category: '12. VueUse (Utilities)' },
      { slug: 'vueuse-browser-utilities', title: 'Browser Utilities', explanation: "Browser-related utilities: useClipboard, useEventListener, useFetch, useTitle, and useFullscreen.", category: '12. VueUse (Utilities)' },
      { slug: 'vueuse-sensors', title: 'Sensors', explanation: "Reactive sensors: useMouse, useMousePressed, useScroll, useWindowSize, and useDeviceOrientation.", category: '12. VueUse (Utilities)' },
      { slug: 'vueuse-animation', title: 'Animation Utilities', explanation: "Animation helpers: useTransition, useInterval, useTimeout, and useRafFn.", category: '12. VueUse (Utilities)' },
      
      // SECTION 13: TYPESCRIPT WITH VUE
      { slug: 'typescript-overview', title: 'TypeScript with Vue Overview', explanation: "Benefits of using TypeScript with Vue and recommended setup.", category: '13. TypeScript with Vue' },
      { slug: 'typescript-sfc', title: 'TypeScript in SFC', explanation: "Using TypeScript in single-file components with <script lang='ts'>.", category: '13. TypeScript with Vue' },
      { slug: 'typing-props-emit', title: 'Typing Props and Emits', explanation: "Type-checking props and emits using TypeScript interfaces and generics.", category: '13. TypeScript with Vue' },
      { slug: 'typing-refs-reactive', title: 'Typing Refs and Reactive', explanation: "Adding type annotations to ref() and reactive() for better type inference.", category: '13. TypeScript with Vue' },
      { slug: 'typing-computed', title: 'Typing Computed', explanation: "Type inference with computed properties and explicit type annotations.", category: '13. TypeScript with Vue' },
      { slug: 'typing-event-handlers', title: 'Typing Event Handlers', explanation: "Type-safe event handlers with proper DOM event types.", category: '13. TypeScript with Vue' },
      { slug: 'typing-template-refs', title: 'Typing Template Refs', explanation: "Adding types to template refs for DOM elements and component instances.", category: '13. TypeScript with Vue' },
      { slug: 'typing-provide-inject', title: 'Typing Provide/Inject', explanation: "Type-safe provide and inject with InjectionKey.", category: '13. TypeScript with Vue' },
      
      // SECTION 14: BEST PRACTICES
      { slug: 'component-design', title: 'Component Design', explanation: "Best practices for designing reusable, maintainable components with clear APIs.", category: '14. Best Practices' },
      { slug: 'state-management-patterns', title: 'State Management Patterns', explanation: "When to use local state, lifted state, Pinia, or provide/inject.", category: '14. Best Practices' },
      { slug: 'performance-best-practices', title: 'Performance Best Practices', explanation: "Optimizing Vue apps with v-once, v-memo, lazy loading, and proper key usage.", category: '14. Best Practices' },
      { slug: 'security-best-practices', title: 'Security Best Practices', explanation: "Avoiding XSS attacks, safe HTML rendering, and validating user input.", category: '14. Best Practices' },
      { slug: 'accessibility', title: 'Accessibility (a11y)', explanation: "Making Vue applications accessible with semantic HTML, ARIA attributes, and keyboard navigation.", category: '14. Best Practices' },
      { slug: 'code-organization', title: 'Code Organization', explanation: "Organizing components, composables, and utilities in a scalable project structure.", category: '14. Best Practices' },
      
      // SECTION 15: TESTING
      { slug: 'testing-overview', title: 'Testing Overview', explanation: "Introduction to testing Vue applications with Vitest, Jest, and Vue Test Utils.", category: '15. Testing' },
      { slug: 'component-testing-vue', title: 'Component Testing', explanation: "Testing component rendering, props, events, and user interactions.", category: '15. Testing' },
      { slug: 'testing-composables', title: 'Testing Composables', explanation: "Strategies for testing composables in isolation.", category: '15. Testing' },
      { slug: 'testing-pinia', title: 'Testing Pinia Stores', explanation: "Unit testing Pinia stores and mocking stores in component tests.", category: '15. Testing' },
      { slug: 'e2e-testing', title: 'E2E Testing', explanation: "End-to-end testing with Cypress or Playwright for full application testing.", category: '15. Testing' },
      
      // SECTION 16: TOOLING & ECOSYSTEM
      { slug: 'vite-build-tool', title: 'Vite Build Tool', explanation: "Understanding Vite as the recommended build tool for Vue 3 projects.", category: '16. Tooling & Ecosystem' },
      { slug: 'vue-cli', title: 'Vue CLI', explanation: "Vue CLI for quick project scaffolding (maintenance mode, Vite is recommended).", category: '16. Tooling & Ecosystem' },
      { slug: 'ide-support', title: 'IDE Support', explanation: "Setting up VS Code with Volar extension for the best Vue development experience.", category: '16. Tooling & Ecosystem' },
      { slug: 'browser-devtools', title: 'Browser DevTools', explanation: "Using Vue DevTools for debugging components, routes, and state.", category: '16. Tooling & Ecosystem' },
      
      // SECTION 17: SERVER-SIDE RENDERING
      { slug: 'ssr-introduction', title: 'SSR Introduction', explanation: "Understanding server-side rendering (SSR) with Vue, its benefits, and trade-offs.", category: '17. Server-Side Rendering' },
      { slug: 'ssr-basics', title: 'SSR Basics', explanation: "Basic SSR setup with renderToString and hydration on the client.", category: '17. Server-Side Rendering' },
      
      // SECTION 18: MIGRATION & COMPATIBILITY
      { slug: 'migration-from-vue-2', title: 'Migration from Vue 2', explanation: "Key differences between Vue 2 and Vue 3, breaking changes, and migration strategies.", category: '18. Migration & Compatibility' },
      { slug: 'vue-3-new-features', title: 'Vue 3 New Features', explanation: "Comprehensive overview of Vue 3's new features: Composition API, Teleport, Fragments, and performance improvements.", category: '18. Migration & Compatibility' },
      
      // SECTION 19: API REFERENCE
      { slug: 'global-api-reference', title: 'Global API Reference', explanation: "Reference for global APIs: createApp, h, defineComponent, defineAsyncComponent, and more.", category: '19. API Reference' },
      { slug: 'composition-api-reference', title: 'Composition API Reference', explanation: "Complete reference for all Composition API functions.", category: '19. API Reference' },
      { slug: 'options-api-reference', title: 'Options API Reference', explanation: "Reference for the Options API (data, methods, computed, watch, etc.).", category: '19. API Reference' },
      { slug: 'built-in-directives', title: 'Built-in Directives', explanation: "Reference for all built-in directives: v-model, v-if, v-for, v-on, v-bind, v-show, and more.", category: '19. API Reference' },
      { slug: 'special-attributes', title: 'Special Attributes', explanation: "Reference for special attributes: key, ref, is, and component.", category: '19. API Reference' },
  ],
};
