
import type { Roadmap } from './types';

export const angular: Roadmap = {
  slug: 'angular',
  name: 'Angular',
  description: 'Complete platform for building web applications with TypeScript',
  topics: [
    // LEARNING PLAN
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Angular from fundamentals to advanced features.' },
    
    // 1. INTRODUCTION & SETUP
    { slug: 'what-is-angular', title: 'What is Angular?', explanation: 'Introduction to Angular framework, its architecture, and ecosystem.', category: 'Introduction & Setup' },
    { slug: 'angular-vs-react-vue', title: 'Angular vs React/Vue', explanation: 'Understanding differences between Angular and other frameworks.', category: 'Introduction & Setup' },
    { slug: 'angular-cli', title: 'Angular CLI', explanation: 'Command-line interface for creating, building, and managing Angular projects.', category: 'Introduction & Setup' },
    { slug: 'project-structure', title: 'Project Structure', explanation: 'Understanding Angular project structure and configuration files.', category: 'Introduction & Setup' },
    { slug: 'angular-json-configuration', title: 'angular.json Configuration', explanation: 'Configuring build, serve, and test options in angular.json.', category: 'Introduction & Setup' },
    { slug: 'typescript-in-angular', title: 'TypeScript in Angular', explanation: 'Using TypeScript features in Angular applications.', category: 'Introduction & Setup' },
    
    // 2. COMPONENTS
    { slug: 'component-basics', title: 'Component Basics', explanation: 'Creating and using Angular components with @Component decorator.', category: 'Components' },
    { slug: 'component-templates', title: 'Component Templates', explanation: 'Writing HTML templates for components with Angular syntax.', category: 'Components' },
    { slug: 'component-styles', title: 'Component Styles', explanation: 'Styling components with CSS, SCSS, and view encapsulation.', category: 'Components' },
    { slug: 'component-lifecycle', title: 'Component Lifecycle', explanation: 'Understanding lifecycle hooks: ngOnInit, ngOnChanges, ngOnDestroy, etc.', category: 'Components' },
    { slug: 'component-interaction', title: 'Component Interaction', explanation: 'Parent-child communication with @Input and @Output decorators.', category: 'Components' },
    { slug: 'view-encapsulation', title: 'View Encapsulation', explanation: 'Emulated, Native, and None encapsulation modes for styles.', category: 'Components' },
    { slug: 'content-projection', title: 'Content Projection', explanation: 'Using ng-content for flexible component composition.', category: 'Components' },
    { slug: 'dynamic-components', title: 'Dynamic Components', explanation: 'Creating components dynamically at runtime.', category: 'Components' },
    
    // 3. TEMPLATES & DATA BINDING
    { slug: 'interpolation', title: 'Interpolation', explanation: 'Displaying component data in templates with {{ }} syntax.', category: 'Templates & Data Binding' },
    { slug: 'property-binding', title: 'Property Binding', explanation: 'Binding component properties to DOM properties with [property].', category: 'Templates & Data Binding' },
    { slug: 'event-binding', title: 'Event Binding', explanation: 'Handling DOM events with (event) syntax.', category: 'Templates & Data Binding' },
    { slug: 'two-way-binding', title: 'Two-Way Binding', explanation: 'Combining property and event binding with [(ngModel)].', category: 'Templates & Data Binding' },
    { slug: 'template-reference-variables', title: 'Template Reference Variables', explanation: 'Using #variable to reference DOM elements in templates.', category: 'Templates & Data Binding' },
    { slug: 'template-expressions', title: 'Template Expressions', explanation: 'Writing expressions in templates with operators and methods.', category: 'Templates & Data Binding' },
    { slug: 'template-statements', title: 'Template Statements', explanation: 'Responding to events with template statements.', category: 'Templates & Data Binding' },
    
    // 4. DIRECTIVES
    { slug: 'directives-overview', title: 'Directives Overview', explanation: 'Understanding structural and attribute directives.', category: 'Directives' },
    { slug: 'ngif-directive', title: '*ngIf Directive', explanation: 'Conditionally rendering elements with *ngIf.', category: 'Directives' },
    { slug: 'ngfor-directive', title: '*ngFor Directive', explanation: 'Repeating elements with *ngFor loop.', category: 'Directives' },
    { slug: 'ngswitch-directive', title: '*ngSwitch Directive', explanation: 'Switching between multiple views with *ngSwitch.', category: 'Directives' },
    { slug: 'ngclass-directive', title: 'ngClass Directive', explanation: 'Dynamically adding/removing CSS classes.', category: 'Directives' },
    { slug: 'ngstyle-directive', title: 'ngStyle Directive', explanation: 'Dynamically setting inline styles.', category: 'Directives' },
    { slug: 'custom-directives', title: 'Custom Directives', explanation: 'Creating custom attribute and structural directives.', category: 'Directives' },
    { slug: 'hostlistener-hostbinding', title: 'HostListener & HostBinding', explanation: 'Listening to host events and binding host properties.', category: 'Directives' },
    
    // 5. PIPES
    { slug: 'pipes-overview', title: 'Pipes Overview', explanation: 'Transforming data in templates with pipes.', category: 'Pipes' },
    { slug: 'built-in-pipes', title: 'Built-in Pipes', explanation: 'Using DatePipe, CurrencyPipe, DecimalPipe, etc.', category: 'Pipes' },
    { slug: 'custom-pipes', title: 'Custom Pipes', explanation: 'Creating custom pipes with @Pipe decorator.', category: 'Pipes' },
    { slug: 'pure-impure-pipes', title: 'Pure & Impure Pipes', explanation: 'Understanding pure vs impure pipe execution.', category: 'Pipes' },
    { slug: 'async-pipe', title: 'Async Pipe', explanation: 'Subscribing to Observables and Promises in templates.', category: 'Pipes' },
    
    // 6. SERVICES & DEPENDENCY INJECTION
    { slug: 'services-overview', title: 'Services Overview', explanation: 'Creating reusable business logic with services.', category: 'Services & DI' },
    { slug: 'dependency-injection', title: 'Dependency Injection', explanation: 'Understanding Angular DI system and providers.', category: 'Services & DI' },
    { slug: 'injectable-decorator', title: '@Injectable Decorator', explanation: 'Making services injectable with @Injectable.', category: 'Services & DI' },
    { slug: 'provider-scope', title: 'Provider Scope', explanation: 'Root, Module, and Component-level providers.', category: 'Services & DI' },
    { slug: 'injection-tokens', title: 'Injection Tokens', explanation: 'Using InjectionToken for non-class dependencies.', category: 'Services & DI' },
    { slug: 'hierarchical-injectors', title: 'Hierarchical Injectors', explanation: 'Understanding the injector tree and resolution.', category: 'Services & DI' },
    { slug: 'forward-ref', title: 'Forward Reference', explanation: 'Using forwardRef for circular dependencies.', category: 'Services & DI' },
    
    // 7. RXJS & OBSERVABLES
    { slug: 'rxjs-overview', title: 'RxJS Overview', explanation: 'Introduction to Reactive Extensions for JavaScript.', category: 'RxJS & Observables' },
    { slug: 'observables-basics', title: 'Observables Basics', explanation: 'Creating and subscribing to Observables.', category: 'RxJS & Observables' },
    { slug: 'rxjs-operators', title: 'RxJS Operators', explanation: 'Common operators: map, filter, tap, switchMap, etc.', category: 'RxJS & Observables' },
    { slug: 'subjects', title: 'Subjects', explanation: 'Using Subject, BehaviorSubject, ReplaySubject, AsyncSubject.', category: 'RxJS & Observables' },
    { slug: 'observable-patterns', title: 'Observable Patterns', explanation: 'Common patterns for using Observables in Angular.', category: 'RxJS & Observables' },
    { slug: 'error-handling-rxjs', title: 'Error Handling in RxJS', explanation: 'Using catchError, retry, and error handling strategies.', category: 'RxJS & Observables' },
    { slug: 'combination-operators', title: 'Combination Operators', explanation: 'combineLatest, forkJoin, merge, zip for combining streams.', category: 'RxJS & Observables' },
    { slug: 'hot-cold-observables', title: 'Hot vs Cold Observables', explanation: 'Understanding observable execution models.', category: 'RxJS & Observables' },
    
    // 8. FORMS
    { slug: 'forms-overview', title: 'Forms Overview', explanation: 'Template-driven vs Reactive forms comparison.', category: 'Forms' },
    { slug: 'template-driven-forms', title: 'Template-Driven Forms', explanation: 'Creating forms with ngModel and FormsModule.', category: 'Forms' },
    { slug: 'reactive-forms', title: 'Reactive Forms', explanation: 'Building forms with FormControl, FormGroup, and FormBuilder.', category: 'Forms' },
    { slug: 'form-validation', title: 'Form Validation', explanation: 'Built-in validators and custom validation logic.', category: 'Forms' },
    { slug: 'custom-validators', title: 'Custom Validators', explanation: 'Creating custom sync and async validators.', category: 'Forms' },
    { slug: 'form-arrays', title: 'Form Arrays', explanation: 'Managing dynamic form controls with FormArray.', category: 'Forms' },
    { slug: 'form-state', title: 'Form State Management', explanation: 'Tracking form state: pristine, dirty, touched, valid.', category: 'Forms' },
    { slug: 'cross-field-validation', title: 'Cross-Field Validation', explanation: 'Validating multiple fields together.', category: 'Forms' },
    
    // 9. ROUTING & NAVIGATION
    { slug: 'routing-overview', title: 'Routing Overview', explanation: 'Setting up Angular Router for navigation.', category: 'Routing & Navigation' },
    { slug: 'router-configuration', title: 'Router Configuration', explanation: 'Configuring routes with RouterModule.forRoot/forChild.', category: 'Routing & Navigation' },
    { slug: 'router-outlet', title: 'Router Outlet', explanation: 'Using <router-outlet> to display routed components.', category: 'Routing & Navigation' },
    { slug: 'router-links', title: 'Router Links', explanation: 'Navigation with routerLink and routerLinkActive.', category: 'Routing & Navigation' },
    { slug: 'route-parameters', title: 'Route Parameters', explanation: 'Accessing route params with ActivatedRoute.', category: 'Routing & Navigation' },
    { slug: 'query-parameters', title: 'Query Parameters', explanation: 'Working with query params and fragments.', category: 'Routing & Navigation' },
    { slug: 'child-routes', title: 'Child Routes', explanation: 'Configuring nested routes and child components.', category: 'Routing & Navigation' },
    { slug: 'lazy-loading-routes', title: 'Lazy Loading Routes', explanation: 'Loading feature modules on-demand for performance.', category: 'Routing & Navigation' },
    { slug: 'route-guards', title: 'Route Guards', explanation: 'CanActivate, CanDeactivate, Resolve, and CanLoad guards.', category: 'Routing & Navigation' },
    { slug: 'route-resolvers', title: 'Route Resolvers', explanation: 'Pre-fetching data before route activation.', category: 'Routing & Navigation' },
    { slug: 'programmatic-navigation', title: 'Programmatic Navigation', explanation: 'Navigating with Router.navigate and Router.navigateByUrl.', category: 'Routing & Navigation' },
    
    // 10. HTTP CLIENT
    { slug: 'httpclient-overview', title: 'HttpClient Overview', explanation: 'Making HTTP requests with HttpClient service.', category: 'HTTP Client' },
    { slug: 'http-get-requests', title: 'HTTP GET Requests', explanation: 'Fetching data with HttpClient.get().', category: 'HTTP Client' },
    { slug: 'http-post-requests', title: 'HTTP POST Requests', explanation: 'Sending data with HttpClient.post().', category: 'HTTP Client' },
    { slug: 'http-interceptors', title: 'HTTP Interceptors', explanation: 'Intercepting requests and responses for common logic.', category: 'HTTP Client' },
    { slug: 'http-headers', title: 'HTTP Headers', explanation: 'Setting custom headers for requests.', category: 'HTTP Client' },
    { slug: 'http-error-handling', title: 'HTTP Error Handling', explanation: 'Handling HTTP errors with catchError operator.', category: 'HTTP Client' },
    { slug: 'http-request-cancellation', title: 'Request Cancellation', explanation: 'Canceling HTTP requests with unsubscribe.', category: 'HTTP Client' },
    { slug: 'http-progress-events', title: 'Progress Events', explanation: 'Tracking upload/download progress.', category: 'HTTP Client' },
    
    // 11. STATE MANAGEMENT
    { slug: 'component-state', title: 'Component State', explanation: 'Managing local component state effectively.', category: 'State Management' },
    { slug: 'service-state', title: 'Service State', explanation: 'Sharing state across components with services.', category: 'State Management' },
    { slug: 'input-output-state', title: 'Input/Output State', explanation: 'Parent-child state communication patterns.', category: 'State Management' },
    { slug: 'observable-state', title: 'Observable State', explanation: 'Managing state with RxJS Observables and Subjects.', category: 'State Management' },
    { slug: 'signals', title: 'Signals (Angular 16+)', explanation: 'New reactive primitives for fine-grained reactivity.', category: 'State Management' },
    { slug: 'computed-signals', title: 'Computed Signals', explanation: 'Derived state with computed() function.', category: 'State Management' },
    { slug: 'effect-signals', title: 'Effect Signals', explanation: 'Side effects with effect() function.', category: 'State Management' },
    
    // 12. MODULES
    { slug: 'ngmodules-overview', title: 'NgModules Overview', explanation: 'Understanding Angular modules and @NgModule decorator.', category: 'Modules' },
    { slug: 'root-module', title: 'Root Module', explanation: 'AppModule as the root of the application.', category: 'Modules' },
    { slug: 'feature-modules', title: 'Feature Modules', explanation: 'Organizing application into feature modules.', category: 'Modules' },
    { slug: 'shared-modules', title: 'Shared Modules', explanation: 'Creating reusable shared modules.', category: 'Modules' },
    { slug: 'core-module', title: 'Core Module', explanation: 'Singleton services and app-wide components.', category: 'Modules' },
    { slug: 'lazy-loaded-modules', title: 'Lazy-Loaded Modules', explanation: 'Loading modules on-demand for performance.', category: 'Modules' },
    { slug: 'module-providers', title: 'Module Providers', explanation: 'forRoot and forChild provider patterns.', category: 'Modules' },
    
    // 13. STANDALONE COMPONENTS (Angular 14+)
    { slug: 'standalone-overview', title: 'Standalone Components Overview', explanation: 'Building apps without NgModules using standalone flag.', category: 'Standalone Components' },
    { slug: 'standalone-components', title: 'Creating Standalone Components', explanation: 'Using standalone: true in component decorator.', category: 'Standalone Components' },
    { slug: 'standalone-directives-pipes', title: 'Standalone Directives & Pipes', explanation: 'Creating standalone directives and pipes.', category: 'Standalone Components' },
    { slug: 'importing-in-standalone', title: 'Imports in Standalone', explanation: 'Importing dependencies directly in standalone components.', category: 'Standalone Components' },
    { slug: 'bootstrapping-standalone', title: 'Bootstrapping Standalone', explanation: 'Bootstrapping apps with bootstrapApplication.', category: 'Standalone Components' },
    { slug: 'routing-with-standalone', title: 'Routing with Standalone', explanation: 'Configuring routes for standalone components.', category: 'Standalone Components' },
    
    // 14. CHANGE DETECTION
    { slug: 'change-detection-overview', title: 'Change Detection Overview', explanation: 'How Angular detects and propagates changes.', category: 'Change Detection' },
    { slug: 'zones', title: 'Zone.js', explanation: 'Understanding Zone.js and automatic change detection.', category: 'Change Detection' },
    { slug: 'change-detection-strategies', title: 'Change Detection Strategies', explanation: 'Default vs OnPush change detection strategies.', category: 'Change Detection' },
    { slug: 'manual-change-detection', title: 'Manual Change Detection', explanation: 'Using ChangeDetectorRef to control updates.', category: 'Change Detection' },
    { slug: 'async-pipe-change-detection', title: 'Async Pipe & Change Detection', explanation: 'How async pipe optimizes change detection.', category: 'Change Detection' },
    
    // 15. ANGULAR ANIMATIONS
    { slug: 'animations-overview', title: 'Animations Overview', explanation: 'Creating animations with @angular/animations.', category: 'Animations' },
    { slug: 'animation-triggers', title: 'Animation Triggers', explanation: 'Defining animations with trigger() function.', category: 'Animations' },
    { slug: 'animation-states', title: 'Animation States', explanation: 'Defining states with state() function.', category: 'Animations' },
    { slug: 'animation-transitions', title: 'Animation Transitions', explanation: 'Animating between states with transition().', category: 'Animations' },
    { slug: 'animation-timing', title: 'Animation Timing', explanation: 'Controlling duration, delay, and easing.', category: 'Animations' },
    { slug: 'keyframe-animations', title: 'Keyframe Animations', explanation: 'Multi-step animations with keyframes().', category: 'Animations' },
    { slug: 'route-animations', title: 'Route Animations', explanation: 'Animating route transitions.', category: 'Animations' },
    
    // 16. TESTING
    { slug: 'testing-overview', title: 'Testing Overview', explanation: 'Testing Angular applications with Jasmine and Karma.', category: 'Testing' },
    { slug: 'unit-testing-components', title: 'Unit Testing Components', explanation: 'Testing components with TestBed and fixtures.', category: 'Testing' },
    { slug: 'testing-services', title: 'Testing Services', explanation: 'Unit testing services and dependency injection.', category: 'Testing' },
    { slug: 'testing-directives-pipes', title: 'Testing Directives & Pipes', explanation: 'Unit testing custom directives and pipes.', category: 'Testing' },
    { slug: 'testing-http', title: 'Testing HTTP', explanation: 'Mocking HTTP requests with HttpClientTestingModule.', category: 'Testing' },
    { slug: 'testing-routing', title: 'Testing Routing', explanation: 'Testing router navigation and guards.', category: 'Testing' },
    { slug: 'e2e-testing', title: 'E2E Testing', explanation: 'End-to-end testing with Protractor or Cypress.', category: 'Testing' },
    { slug: 'testing-best-practices', title: 'Testing Best Practices', explanation: 'Patterns for maintainable and effective tests.', category: 'Testing' },
    
    // 17. PERFORMANCE OPTIMIZATION
    { slug: 'onpush-strategy', title: 'OnPush Strategy', explanation: 'Optimizing with OnPush change detection.', category: 'Performance' },
    { slug: 'trackby-function', title: 'TrackBy Function', explanation: 'Optimizing *ngFor with trackBy.', category: 'Performance' },
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'Loading modules and routes on-demand.', category: 'Performance' },
    { slug: 'preloading-strategies', title: 'Preloading Strategies', explanation: 'PreloadAllModules and custom preloading.', category: 'Performance' },
    { slug: 'pure-pipes', title: 'Pure Pipes', explanation: 'Using pure pipes for better performance.', category: 'Performance' },
    { slug: 'virtual-scrolling', title: 'Virtual Scrolling', explanation: 'Efficiently rendering large lists with CDK.', category: 'Performance' },
    { slug: 'web-workers', title: 'Web Workers', explanation: 'Running heavy computations off the main thread.', category: 'Performance' },
    { slug: 'bundle-optimization', title: 'Bundle Optimization', explanation: 'Reducing bundle size with tree-shaking and code splitting.', category: 'Performance' },
    
    // 18. ANGULAR CLI & BUILD
    { slug: 'cli-commands', title: 'CLI Commands', explanation: 'Essential Angular CLI commands for development.', category: 'CLI & Build' },
    { slug: 'generating-code', title: 'Generating Code', explanation: 'Using ng generate for components, services, etc.', category: 'CLI & Build' },
    { slug: 'build-configurations', title: 'Build Configurations', explanation: 'Production, development, and custom build configs.', category: 'CLI & Build' },
    { slug: 'environments', title: 'Environments', explanation: 'Managing environment-specific configuration.', category: 'CLI & Build' },
    { slug: 'angular-builders', title: 'Custom Builders', explanation: 'Creating custom Angular CLI builders.', category: 'CLI & Build' },
    { slug: 'schematics', title: 'Schematics', explanation: 'Creating custom code generation schematics.', category: 'CLI & Build' },
    
    // 19. ANGULAR MATERIAL & CDK
    { slug: 'angular-material-setup', title: 'Angular Material Setup', explanation: 'Installing and configuring Angular Material.', category: 'Material & CDK' },
    { slug: 'material-components', title: 'Material Components', explanation: 'Using pre-built Material Design components.', category: 'Material & CDK' },
    { slug: 'material-theming', title: 'Material Theming', explanation: 'Customizing Material Design themes.', category: 'Material & CDK' },
    { slug: 'cdk-overview', title: 'CDK Overview', explanation: 'Component Dev Kit for building custom components.', category: 'Material & CDK' },
    { slug: 'cdk-virtual-scroll', title: 'CDK Virtual Scrolling', explanation: 'Efficiently rendering large lists.', category: 'Material & CDK' },
    { slug: 'cdk-drag-drop', title: 'CDK Drag & Drop', explanation: 'Implementing drag and drop functionality.', category: 'Material & CDK' },
    { slug: 'cdk-overlay', title: 'CDK Overlay', explanation: 'Creating modals, tooltips, and overlays.', category: 'Material & CDK' },
    
    // 20. ANGULAR 15+ FEATURES
    { slug: 'standalone-apis', title: 'Standalone APIs', explanation: 'Modern Angular with standalone components (v14-15).', category: 'Modern Angular' },
    { slug: 'functional-guards', title: 'Functional Guards', explanation: 'Using function-based route guards (v15).', category: 'Modern Angular' },
    { slug: 'functional-interceptors', title: 'Functional Interceptors', explanation: 'Function-based HTTP interceptors (v15).', category: 'Modern Angular' },
    { slug: 'inject-function', title: 'inject() Function', explanation: 'Dependency injection with inject() (v14+).', category: 'Modern Angular' },
    { slug: 'router-standalone', title: 'Router Standalone APIs', explanation: 'provideRouter and standalone routing (v15).', category: 'Modern Angular' },
    { slug: 'image-directive', title: 'NgOptimizedImage', explanation: 'Optimized image loading directive (v15).', category: 'Modern Angular' },
    
    // 21. ANGULAR 16+ FEATURES
    { slug: 'signals-reactivity', title: 'Signals Reactivity System', explanation: 'Fine-grained reactivity with Signals (v16).', category: 'Angular 16+' },
    { slug: 'required-inputs', title: 'Required Inputs', explanation: 'Marking inputs as required (v16).', category: 'Angular 16+' },
    { slug: 'rxjs-interop', title: 'RxJS Interop', explanation: 'Converting between Signals and Observables (v16).', category: 'Angular 16+' },
    { slug: 'destroyref', title: 'DestroyRef', explanation: 'Lifecycle management with DestroyRef (v16).', category: 'Angular 16+' },
    { slug: 'self-closing-tags', title: 'Self-Closing Tags', explanation: 'Using self-closing tags in templates (v16).', category: 'Angular 16+' },
    
    // 22. ANGULAR 17+ FEATURES
    { slug: 'control-flow-syntax', title: 'New Control Flow Syntax', explanation: '@if, @for, @switch built-in control flow (v17).', category: 'Angular 17+' },
    { slug: 'deferrable-views', title: 'Deferrable Views', explanation: 'Lazy loading views with @defer (v17).', category: 'Angular 17+' },
    { slug: 'new-build-system', title: 'New Build System', explanation: 'esbuild and Vite integration (v17).', category: 'Angular 17+' },
    { slug: 'ssr-improvements', title: 'SSR Improvements', explanation: 'Enhanced server-side rendering (v17).', category: 'Angular 17+' },
    { slug: 'view-transitions', title: 'View Transitions API', explanation: 'Smooth page transitions (v17).', category: 'Angular 17+' },
    
    // 23. ANGULAR 18+ FEATURES
    { slug: 'zoneless-angular', title: 'Zoneless Angular', explanation: 'Running Angular without Zone.js (experimental v18).', category: 'Angular 18+' },
    { slug: 'signal-based-forms', title: 'Signal-Based Forms', explanation: 'Reactive forms with Signals (v18).', category: 'Angular 18+' },
    { slug: 'hydration-improvements', title: 'Hydration Improvements', explanation: 'Enhanced SSR hydration (v18).', category: 'Angular 18+' },
    { slug: 'material-3', title: 'Material Design 3', explanation: 'Material 3 components and theming (v18).', category: 'Angular 18+' },
    { slug: 'route-redirects', title: 'Enhanced Route Redirects', explanation: 'Improved redirect handling (v18).', category: 'Angular 18+' },
    
    // 24. BEST PRACTICES
    { slug: 'project-organization', title: 'Project Organization', explanation: 'Structuring large Angular applications.', category: 'Best Practices' },
    { slug: 'naming-conventions', title: 'Naming Conventions', explanation: 'Angular style guide and naming patterns.', category: 'Best Practices' },
    { slug: 'code-quality', title: 'Code Quality', explanation: 'ESLint, Prettier, and code quality tools.', category: 'Best Practices' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'Global error handling strategies.', category: 'Best Practices' },
    { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'XSS prevention, sanitization, and security.', category: 'Best Practices' },
    { slug: 'accessibility', title: 'Accessibility (A11y)', explanation: 'Building accessible Angular applications.', category: 'Best Practices' },
    { slug: 'internationalization', title: 'Internationalization (i18n)', explanation: 'Multi-language support with Angular i18n.', category: 'Best Practices' },
    { slug: 'deployment', title: 'Deployment', explanation: 'Deploying Angular applications to production.', category: 'Best Practices' },
  ]
};
