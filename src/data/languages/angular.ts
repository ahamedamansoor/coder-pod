
import type { Language } from './types';

export const angular: Language = {
  slug: 'angular',
  name: 'Angular',
  description: 'Complete platform for building web applications with TypeScript',
  topics: [
    // LEARNING PLAN
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Angular from fundamentals to advanced features.' },
    
    // 1. INTRODUCTION & SETUP
    { slug: 'what-is-angular', title: 'What is Angular?', explanation: 'Introduction to Angular framework, its architecture, and ecosystem.', category: '1. Introduction & Setup' },
    { slug: 'angular-vs-react-vue', title: 'Angular vs React/Vue', explanation: 'Understanding differences between Angular and other frameworks.', category: '1. Introduction & Setup' },
    { slug: 'angular-cli', title: 'Angular CLI', explanation: 'Command-line interface for creating, building, and managing Angular projects.', category: '1. Introduction & Setup' },
    { slug: 'project-structure', title: 'Project Structure', explanation: 'Understanding Angular project structure and configuration files.', category: '1. Introduction & Setup' },
    { slug: 'angular-json-configuration', title: 'angular.json Configuration', explanation: 'Configuring build, serve, and test options in angular.json.', category: '1. Introduction & Setup' },
    { slug: 'typescript-in-angular', title: 'TypeScript in Angular', explanation: 'Using TypeScript features in Angular applications.', category: '1. Introduction & Setup' },
    
    // 2. COMPONENTS
    { slug: 'component-basics', title: 'Component Basics', explanation: 'Creating and using Angular components with @Component decorator.', category: '2. Components' },
    { slug: 'component-templates', title: 'Component Templates', explanation: 'Writing HTML templates for components with Angular syntax.', category: '2. Components' },
    { slug: 'component-styles', title: 'Component Styles', explanation: 'Styling components with CSS, SCSS, and view encapsulation.', category: '2. Components' },
    { slug: 'component-lifecycle', title: 'Component Lifecycle', explanation: 'Understanding lifecycle hooks: ngOnInit, ngOnChanges, ngOnDestroy, etc.', category: '2. Components' },
    { slug: 'component-interaction', title: 'Component Interaction', explanation: 'Parent-child communication with @Input and @Output decorators.', category: '2. Components' },
    { slug: 'view-encapsulation', title: 'View Encapsulation', explanation: 'Emulated, Native, and None encapsulation modes for styles.', category: '2. Components' },
    { slug: 'content-projection', title: 'Content Projection', explanation: 'Using ng-content for flexible component composition.', category: '2. Components' },
    { slug: 'dynamic-components', title: 'Dynamic Components', explanation: 'Creating components dynamically at runtime.', category: '2. Components' },
    
    // 3. TEMPLATES & DATA BINDING
    { slug: 'interpolation', title: 'Interpolation', explanation: 'Displaying component data in templates with {{ }} syntax.', category: '3. Templates & Data Binding' },
    { slug: 'property-binding', title: 'Property Binding', explanation: 'Binding component properties to DOM properties with [property].', category: '3. Templates & Data Binding' },
    { slug: 'event-binding', title: 'Event Binding', explanation: 'Handling DOM events with (event) syntax.', category: '3. Templates & Data Binding' },
    { slug: 'two-way-binding', title: 'Two-Way Binding', explanation: 'Combining property and event binding with [(ngModel)].', category: '3. Templates & Data Binding' },
    { slug: 'template-reference-variables', title: 'Template Reference Variables', explanation: 'Using #variable to reference DOM elements in templates.', category: '3. Templates & Data Binding' },
    { slug: 'template-expressions', title: 'Template Expressions', explanation: 'Writing expressions in templates with operators and methods.', category: '3. Templates & Data Binding' },
    { slug: 'template-statements', title: 'Template Statements', explanation: 'Responding to events with template statements.', category: '3. Templates & Data Binding' },
    
    // 4. DIRECTIVES
    { slug: 'directives-overview', title: 'Directives Overview', explanation: 'Understanding structural and attribute directives.', category: '4. Directives' },
    { slug: 'ngif-directive', title: '*ngIf Directive', explanation: 'Conditionally rendering elements with *ngIf.', category: '4. Directives' },
    { slug: 'ngfor-directive', title: '*ngFor Directive', explanation: 'Repeating elements with *ngFor loop.', category: '4. Directives' },
    { slug: 'ngswitch-directive', title: '*ngSwitch Directive', explanation: 'Switching between multiple views with *ngSwitch.', category: '4. Directives' },
    { slug: 'ngclass-directive', title: 'ngClass Directive', explanation: 'Dynamically adding/removing CSS classes.', category: '4. Directives' },
    { slug: 'ngstyle-directive', title: 'ngStyle Directive', explanation: 'Dynamically setting inline styles.', category: '4. Directives' },
    { slug: 'custom-directives', title: 'Custom Directives', explanation: 'Creating custom attribute and structural directives.', category: '4. Directives' },
    { slug: 'hostlistener-hostbinding', title: 'HostListener & HostBinding', explanation: 'Listening to host events and binding host properties.', category: '4. Directives' },
    
    // 5. PIPES
    { slug: 'pipes-overview', title: 'Pipes Overview', explanation: 'Transforming data in templates with pipes.', category: '5. Pipes' },
    { slug: 'built-in-pipes', title: 'Built-in Pipes', explanation: 'Using DatePipe, CurrencyPipe, DecimalPipe, etc.', category: '5. Pipes' },
    { slug: 'custom-pipes', title: 'Custom Pipes', explanation: 'Creating custom pipes with @Pipe decorator.', category: '5. Pipes' },
    { slug: 'pure-impure-pipes', title: 'Pure & Impure Pipes', explanation: 'Understanding pure vs impure pipe execution.', category: '5. Pipes' },
    { slug: 'async-pipe', title: 'Async Pipe', explanation: 'Subscribing to Observables and Promises in templates.', category: '5. Pipes' },
    
    // 6. SERVICES & DEPENDENCY INJECTION
    { slug: 'services-overview', title: 'Services Overview', explanation: 'Creating reusable business logic with services.', category: '6. Services & DI' },
    { slug: 'dependency-injection', title: 'Dependency Injection', explanation: 'Understanding Angular DI system and providers.', category: '6. Services & DI' },
    { slug: 'injectable-decorator', title: '@Injectable Decorator', explanation: 'Making services injectable with @Injectable.', category: '6. Services & DI' },
    { slug: 'provider-scope', title: 'Provider Scope', explanation: 'Root, Module, and Component-level providers.', category: '6. Services & DI' },
    { slug: 'injection-tokens', title: 'Injection Tokens', explanation: 'Using InjectionToken for non-class dependencies.', category: '6. Services & DI' },
    { slug: 'hierarchical-injectors', title: 'Hierarchical Injectors', explanation: 'Understanding the injector tree and resolution.', category: '6. Services & DI' },
    { slug: 'forward-ref', title: 'Forward Reference', explanation: 'Using forwardRef for circular dependencies.', category: '6. Services & DI' },
    
    // 7. RXJS & OBSERVABLES
    { slug: 'rxjs-overview', title: 'RxJS Overview', explanation: 'Introduction to Reactive Extensions for JavaScript.', category: '7. RxJS & Observables' },
    { slug: 'observables-basics', title: 'Observables Basics', explanation: 'Creating and subscribing to Observables.', category: '7. RxJS & Observables' },
    { slug: 'rxjs-operators', title: 'RxJS Operators', explanation: 'Common operators: map, filter, tap, switchMap, etc.', category: '7. RxJS & Observables' },
    { slug: 'subjects', title: 'Subjects', explanation: 'Using Subject, BehaviorSubject, ReplaySubject, AsyncSubject.', category: '7. RxJS & Observables' },
    { slug: 'observable-patterns', title: 'Observable Patterns', explanation: 'Common patterns for using Observables in Angular.', category: '7. RxJS & Observables' },
    { slug: 'error-handling-rxjs', title: 'Error Handling in RxJS', explanation: 'Using catchError, retry, and error handling strategies.', category: '7. RxJS & Observables' },
    { slug: 'combination-operators', title: 'Combination Operators', explanation: 'combineLatest, forkJoin, merge, zip for combining streams.', category: '7. RxJS & Observables' },
    { slug: 'hot-cold-observables', title: 'Hot vs Cold Observables', explanation: 'Understanding observable execution models.', category: '7. RxJS & Observables' },
    
    // 8. FORMS
    { slug: 'forms-overview', title: 'Forms Overview', explanation: 'Template-driven vs Reactive forms comparison.', category: '8. Forms' },
    { slug: 'template-driven-forms', title: 'Template-Driven Forms', explanation: 'Creating forms with ngModel and FormsModule.', category: '8. Forms' },
    { slug: 'reactive-forms', title: 'Reactive Forms', explanation: 'Building forms with FormControl, FormGroup, and FormBuilder.', category: '8. Forms' },
    { slug: 'form-validation', title: 'Form Validation', explanation: 'Built-in validators and custom validation logic.', category: '8. Forms' },
    { slug: 'custom-validators', title: 'Custom Validators', explanation: 'Creating custom sync and async validators.', category: '8. Forms' },
    { slug: 'form-arrays', title: 'Form Arrays', explanation: 'Managing dynamic form controls with FormArray.', category: '8. Forms' },
    { slug: 'form-state', title: 'Form State Management', explanation: 'Tracking form state: pristine, dirty, touched, valid.', category: '8. Forms' },
    { slug: 'cross-field-validation', title: 'Cross-Field Validation', explanation: 'Validating multiple fields together.', category: '8. Forms' },
    
    // 9. ROUTING & NAVIGATION
    { slug: 'routing-overview', title: 'Routing Overview', explanation: 'Setting up Angular Router for navigation.', category: '9. Routing & Navigation' },
    { slug: 'router-configuration', title: 'Router Configuration', explanation: 'Configuring routes with RouterModule.forRoot/forChild.', category: '9. Routing & Navigation' },
    { slug: 'router-outlet', title: 'Router Outlet', explanation: 'Using <router-outlet> to display routed components.', category: '9. Routing & Navigation' },
    { slug: 'router-links', title: 'Router Links', explanation: 'Navigation with routerLink and routerLinkActive.', category: '9. Routing & Navigation' },
    { slug: 'route-parameters', title: 'Route Parameters', explanation: 'Accessing route params with ActivatedRoute.', category: '9. Routing & Navigation' },
    { slug: 'query-parameters', title: 'Query Parameters', explanation: 'Working with query params and fragments.', category: '9. Routing & Navigation' },
    { slug: 'child-routes', title: 'Child Routes', explanation: 'Configuring nested routes and child components.', category: '9. Routing & Navigation' },
    { slug: 'lazy-loading-routes', title: 'Lazy Loading Routes', explanation: 'Loading feature modules on-demand for performance.', category: '9. Routing & Navigation' },
    { slug: 'route-guards', title: 'Route Guards', explanation: 'CanActivate, CanDeactivate, Resolve, and CanLoad guards.', category: '9. Routing & Navigation' },
    { slug: 'route-resolvers', title: 'Route Resolvers', explanation: 'Pre-fetching data before route activation.', category: '9. Routing & Navigation' },
    { slug: 'programmatic-navigation', title: 'Programmatic Navigation', explanation: 'Navigating with Router.navigate and Router.navigateByUrl.', category: '9. Routing & Navigation' },
    
    // 10. HTTP CLIENT
    { slug: 'httpclient-overview', title: 'HttpClient Overview', explanation: 'Making HTTP requests with HttpClient service.', category: '10. HTTP Client' },
    { slug: 'http-get-requests', title: 'HTTP GET Requests', explanation: 'Fetching data with HttpClient.get().', category: '10. HTTP Client' },
    { slug: 'http-post-requests', title: 'HTTP POST Requests', explanation: 'Sending data with HttpClient.post().', category: '10. HTTP Client' },
    { slug: 'http-interceptors', title: 'HTTP Interceptors', explanation: 'Intercepting requests and responses for common logic.', category: '10. HTTP Client' },
    { slug: 'http-headers', title: 'HTTP Headers', explanation: 'Setting custom headers for requests.', category: '10. HTTP Client' },
    { slug: 'http-error-handling', title: 'HTTP Error Handling', explanation: 'Handling HTTP errors with catchError operator.', category: '10. HTTP Client' },
    { slug: 'http-request-cancellation', title: 'Request Cancellation', explanation: 'Canceling HTTP requests with unsubscribe.', category: '10. HTTP Client' },
    { slug: 'http-progress-events', title: 'Progress Events', explanation: 'Tracking upload/download progress.', category: '10. HTTP Client' },
    
    // 11. STATE MANAGEMENT
    { slug: 'component-state', title: 'Component State', explanation: 'Managing local component state effectively.', category: '11. State Management' },
    { slug: 'service-state', title: 'Service State', explanation: 'Sharing state across components with services.', category: '11. State Management' },
    { slug: 'input-output-state', title: 'Input/Output State', explanation: 'Parent-child state communication patterns.', category: '11. State Management' },
    { slug: 'observable-state', title: 'Observable State', explanation: 'Managing state with RxJS Observables and Subjects.', category: '11. State Management' },
    { slug: 'signals', title: 'Signals (Angular 16+)', explanation: 'New reactive primitives for fine-grained reactivity.', category: '11. State Management' },
    { slug: 'computed-signals', title: 'Computed Signals', explanation: 'Derived state with computed() function.', category: '11. State Management' },
    { slug: 'effect-signals', title: 'Effect Signals', explanation: 'Side effects with effect() function.', category: '11. State Management' },
    
    // 12. MODULES
    { slug: 'ngmodules-overview', title: 'NgModules Overview', explanation: 'Understanding Angular modules and @NgModule decorator.', category: '12. Modules' },
    { slug: 'root-module', title: 'Root Module', explanation: 'AppModule as the root of the application.', category: '12. Modules' },
    { slug: 'feature-modules', title: 'Feature Modules', explanation: 'Organizing application into feature modules.', category: '12. Modules' },
    { slug: 'shared-modules', title: 'Shared Modules', explanation: 'Creating reusable shared modules.', category: '12. Modules' },
    { slug: 'core-module', title: 'Core Module', explanation: 'Singleton services and app-wide components.', category: '12. Modules' },
    { slug: 'lazy-loaded-modules', title: 'Lazy-Loaded Modules', explanation: 'Loading modules on-demand for performance.', category: '12. Modules' },
    { slug: 'module-providers', title: 'Module Providers', explanation: 'forRoot and forChild provider patterns.', category: '12. Modules' },
    
    // 13. STANDALONE COMPONENTS (Angular 14+)
    { slug: 'standalone-overview', title: 'Standalone Components Overview', explanation: 'Building apps without NgModules using standalone flag.', category: '13. Standalone Components' },
    { slug: 'standalone-components', title: 'Creating Standalone Components', explanation: 'Using standalone: true in component decorator.', category: '13. Standalone Components' },
    { slug: 'standalone-directives-pipes', title: 'Standalone Directives & Pipes', explanation: 'Creating standalone directives and pipes.', category: '13. Standalone Components' },
    { slug: 'importing-in-standalone', title: 'Imports in Standalone', explanation: 'Importing dependencies directly in standalone components.', category: '13. Standalone Components' },
    { slug: 'bootstrapping-standalone', title: 'Bootstrapping Standalone', explanation: 'Bootstrapping apps with bootstrapApplication.', category: '13. Standalone Components' },
    { slug: 'routing-with-standalone', title: 'Routing with Standalone', explanation: 'Configuring routes for standalone components.', category: '13. Standalone Components' },
    
    // 14. CHANGE DETECTION
    { slug: 'change-detection-overview', title: 'Change Detection Overview', explanation: 'How Angular detects and propagates changes.', category: '14. Change Detection' },
    { slug: 'zones', title: 'Zone.js', explanation: 'Understanding Zone.js and automatic change detection.', category: '14. Change Detection' },
    { slug: 'change-detection-strategies', title: 'Change Detection Strategies', explanation: 'Default vs OnPush change detection strategies.', category: '14. Change Detection' },
    { slug: 'manual-change-detection', title: 'Manual Change Detection', explanation: 'Using ChangeDetectorRef to control updates.', category: '14. Change Detection' },
    { slug: 'async-pipe-change-detection', title: 'Async Pipe & Change Detection', explanation: 'How async pipe optimizes change detection.', category: '14. Change Detection' },
    
    // 15. ANGULAR ANIMATIONS
    { slug: 'animations-overview', title: 'Animations Overview', explanation: 'Creating animations with @angular/animations.', category: '15. Animations' },
    { slug: 'animation-triggers', title: 'Animation Triggers', explanation: 'Defining animations with trigger() function.', category: '15. Animations' },
    { slug: 'animation-states', title: 'Animation States', explanation: 'Defining states with state() function.', category: '15. Animations' },
    { slug: 'animation-transitions', title: 'Animation Transitions', explanation: 'Animating between states with transition().', category: '15. Animations' },
    { slug: 'animation-timing', title: 'Animation Timing', explanation: 'Controlling duration, delay, and easing.', category: '15. Animations' },
    { slug: 'keyframe-animations', title: 'Keyframe Animations', explanation: 'Multi-step animations with keyframes().', category: '15. Animations' },
    { slug: 'route-animations', title: 'Route Animations', explanation: 'Animating route transitions.', category: '15. Animations' },
    
    // 16. TESTING
    { slug: 'testing-overview', title: 'Testing Overview', explanation: 'Testing Angular applications with Jasmine and Karma.', category: '16. Testing' },
    { slug: 'unit-testing-components', title: 'Unit Testing Components', explanation: 'Testing components with TestBed and fixtures.', category: '16. Testing' },
    { slug: 'testing-services', title: 'Testing Services', explanation: 'Unit testing services and dependency injection.', category: '16. Testing' },
    { slug: 'testing-directives-pipes', title: 'Testing Directives & Pipes', explanation: 'Unit testing custom directives and pipes.', category: '16. Testing' },
    { slug: 'testing-http', title: 'Testing HTTP', explanation: 'Mocking HTTP requests with HttpClientTestingModule.', category: '16. Testing' },
    { slug: 'testing-routing', title: 'Testing Routing', explanation: 'Testing router navigation and guards.', category: '16. Testing' },
    { slug: 'e2e-testing', title: 'E2E Testing', explanation: 'End-to-end testing with Protractor or Cypress.', category: '16. Testing' },
    { slug: 'testing-best-practices', title: 'Testing Best Practices', explanation: 'Patterns for maintainable and effective tests.', category: '16. Testing' },
    
    // 17. PERFORMANCE OPTIMIZATION
    { slug: 'onpush-strategy', title: 'OnPush Strategy', explanation: 'Optimizing with OnPush change detection.', category: '17. Performance' },
    { slug: 'trackby-function', title: 'TrackBy Function', explanation: 'Optimizing *ngFor with trackBy.', category: '17. Performance' },
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'Loading modules and routes on-demand.', category: '17. Performance' },
    { slug: 'preloading-strategies', title: 'Preloading Strategies', explanation: 'PreloadAllModules and custom preloading.', category: '17. Performance' },
    { slug: 'pure-pipes', title: 'Pure Pipes', explanation: 'Using pure pipes for better performance.', category: '17. Performance' },
    { slug: 'virtual-scrolling', title: 'Virtual Scrolling', explanation: 'Efficiently rendering large lists with CDK.', category: '17. Performance' },
    { slug: 'web-workers', title: 'Web Workers', explanation: 'Running heavy computations off the main thread.', category: '17. Performance' },
    { slug: 'bundle-optimization', title: 'Bundle Optimization', explanation: 'Reducing bundle size with tree-shaking and code splitting.', category: '17. Performance' },
    
    // 18. ANGULAR CLI & BUILD
    { slug: 'cli-commands', title: 'CLI Commands', explanation: 'Essential Angular CLI commands for development.', category: '18. CLI & Build' },
    { slug: 'generating-code', title: 'Generating Code', explanation: 'Using ng generate for components, services, etc.', category: '18. CLI & Build' },
    { slug: 'build-configurations', title: 'Build Configurations', explanation: 'Production, development, and custom build configs.', category: '18. CLI & Build' },
    { slug: 'environments', title: 'Environments', explanation: 'Managing environment-specific configuration.', category: '18. CLI & Build' },
    { slug: 'angular-builders', title: 'Custom Builders', explanation: 'Creating custom Angular CLI builders.', category: '18. CLI & Build' },
    { slug: 'schematics', title: 'Schematics', explanation: 'Creating custom code generation schematics.', category: '18. CLI & Build' },
    
    // 19. ANGULAR MATERIAL & CDK
    { slug: 'angular-material-setup', title: 'Angular Material Setup', explanation: 'Installing and configuring Angular Material.', category: '19. Material & CDK' },
    { slug: 'material-components', title: 'Material Components', explanation: 'Using pre-built Material Design components.', category: '19. Material & CDK' },
    { slug: 'material-theming', title: 'Material Theming', explanation: 'Customizing Material Design themes.', category: '19. Material & CDK' },
    { slug: 'cdk-overview', title: 'CDK Overview', explanation: 'Component Dev Kit for building custom components.', category: '19. Material & CDK' },
    { slug: 'cdk-virtual-scroll', title: 'CDK Virtual Scrolling', explanation: 'Efficiently rendering large lists.', category: '19. Material & CDK' },
    { slug: 'cdk-drag-drop', title: 'CDK Drag & Drop', explanation: 'Implementing drag and drop functionality.', category: '19. Material & CDK' },
    { slug: 'cdk-overlay', title: 'CDK Overlay', explanation: 'Creating modals, tooltips, and overlays.', category: '19. Material & CDK' },
    
    // 20. ANGULAR 15+ FEATURES
    { slug: 'standalone-apis', title: 'Standalone APIs', explanation: 'Modern Angular with standalone components (v14-15).', category: '20. Modern Angular' },
    { slug: 'functional-guards', title: 'Functional Guards', explanation: 'Using function-based route guards (v15).', category: '20. Modern Angular' },
    { slug: 'functional-interceptors', title: 'Functional Interceptors', explanation: 'Function-based HTTP interceptors (v15).', category: '20. Modern Angular' },
    { slug: 'inject-function', title: 'inject() Function', explanation: 'Dependency injection with inject() (v14+).', category: '20. Modern Angular' },
    { slug: 'router-standalone', title: 'Router Standalone APIs', explanation: 'provideRouter and standalone routing (v15).', category: '20. Modern Angular' },
    { slug: 'image-directive', title: 'NgOptimizedImage', explanation: 'Optimized image loading directive (v15).', category: '20. Modern Angular' },
    
    // 21. ANGULAR 16+ FEATURES
    { slug: 'signals-reactivity', title: 'Signals Reactivity System', explanation: 'Fine-grained reactivity with Signals (v16).', category: '21. Angular 16+' },
    { slug: 'required-inputs', title: 'Required Inputs', explanation: 'Marking inputs as required (v16).', category: '21. Angular 16+' },
    { slug: 'rxjs-interop', title: 'RxJS Interop', explanation: 'Converting between Signals and Observables (v16).', category: '21. Angular 16+' },
    { slug: 'destroyref', title: 'DestroyRef', explanation: 'Lifecycle management with DestroyRef (v16).', category: '21. Angular 16+' },
    { slug: 'self-closing-tags', title: 'Self-Closing Tags', explanation: 'Using self-closing tags in templates (v16).', category: '21. Angular 16+' },
    
    // 22. ANGULAR 17+ FEATURES
    { slug: 'control-flow-syntax', title: 'New Control Flow Syntax', explanation: '@if, @for, @switch built-in control flow (v17).', category: '22. Angular 17+' },
    { slug: 'deferrable-views', title: 'Deferrable Views', explanation: 'Lazy loading views with @defer (v17).', category: '22. Angular 17+' },
    { slug: 'new-build-system', title: 'New Build System', explanation: 'esbuild and Vite integration (v17).', category: '22. Angular 17+' },
    { slug: 'ssr-improvements', title: 'SSR Improvements', explanation: 'Enhanced server-side rendering (v17).', category: '22. Angular 17+' },
    { slug: 'view-transitions', title: 'View Transitions API', explanation: 'Smooth page transitions (v17).', category: '22. Angular 17+' },
    
    // 23. ANGULAR 18+ FEATURES
    { slug: 'zoneless-angular', title: 'Zoneless Angular', explanation: 'Running Angular without Zone.js (experimental v18).', category: '23. Angular 18+' },
    { slug: 'signal-based-forms', title: 'Signal-Based Forms', explanation: 'Reactive forms with Signals (v18).', category: '23. Angular 18+' },
    { slug: 'hydration-improvements', title: 'Hydration Improvements', explanation: 'Enhanced SSR hydration (v18).', category: '23. Angular 18+' },
    { slug: 'material-3', title: 'Material Design 3', explanation: 'Material 3 components and theming (v18).', category: '23. Angular 18+' },
    { slug: 'route-redirects', title: 'Enhanced Route Redirects', explanation: 'Improved redirect handling (v18).', category: '23. Angular 18+' },
    
    // 24. BEST PRACTICES
    { slug: 'project-organization', title: 'Project Organization', explanation: 'Structuring large Angular applications.', category: '24. Best Practices' },
    { slug: 'naming-conventions', title: 'Naming Conventions', explanation: 'Angular style guide and naming patterns.', category: '24. Best Practices' },
    { slug: 'code-quality', title: 'Code Quality', explanation: 'ESLint, Prettier, and code quality tools.', category: '24. Best Practices' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'Global error handling strategies.', category: '24. Best Practices' },
    { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'XSS prevention, sanitization, and security.', category: '24. Best Practices' },
    { slug: 'accessibility', title: 'Accessibility (A11y)', explanation: 'Building accessible Angular applications.', category: '24. Best Practices' },
    { slug: 'internationalization', title: 'Internationalization (i18n)', explanation: 'Multi-language support with Angular i18n.', category: '24. Best Practices' },
    { slug: 'deployment', title: 'Deployment', explanation: 'Deploying Angular applications to production.', category: '24. Best Practices' },
  ]
};
