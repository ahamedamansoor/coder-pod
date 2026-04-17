
import type { Roadmap } from './types';

export const typescript: Roadmap = {
  slug: 'typescript',
  name: 'TypeScript',
  description: 'JavaScript with syntax for types - build better, safer applications',
  topics: [
    // GETTING STARTED
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering TypeScript from basics to advanced type system features.' },
    
    // 1. INTRODUCTION
    { slug: 'what-is-typescript', title: 'What is TypeScript?', explanation: 'Introduction to TypeScript, its benefits, relationship with JavaScript, and why use it.', category: 'Introduction' },
    { slug: 'typescript-vs-javascript', title: 'TypeScript vs JavaScript', explanation: 'Key differences, when to use TypeScript, and migration strategies.', category: 'Introduction' },
    { slug: 'typescript-setup', title: 'Installation & Setup', explanation: 'Installing TypeScript, configuring tsconfig.json, and setting up your development environment.', category: 'Introduction' },
    { slug: 'typescript-compiler', title: 'TypeScript Compiler (tsc)', explanation: 'Understanding the TypeScript compiler, compilation process, and compiler options.', category: 'Introduction' },
    { slug: 'typescript-playground', title: 'TypeScript Playground', explanation: 'Using the online playground for experimentation and learning.', category: 'Introduction' },
    
    // 2. BASIC TYPES
    { slug: 'primitive-types', title: 'Primitive Types', explanation: 'string, number, boolean, null, undefined, symbol, and bigint types.', category: 'Basic Types' },
    { slug: 'any-type', title: 'any Type', explanation: 'The any type, when to use it, and why to avoid it.', category: 'Basic Types' },
    { slug: 'unknown-type', title: 'unknown Type', explanation: 'Type-safe alternative to any for unknown values.', category: 'Basic Types' },
    { slug: 'void-type', title: 'void Type', explanation: 'Representing absence of value in functions.', category: 'Basic Types' },
    { slug: 'never-type', title: 'never Type', explanation: 'Representing values that never occur, exhaustive checks.', category: 'Basic Types' },
    { slug: 'array-types', title: 'Array Types', explanation: 'Typed arrays: T[] and Array<T> syntax.', category: 'Basic Types' },
    { slug: 'tuple-types', title: 'Tuple Types', explanation: 'Fixed-length arrays with known types at each position.', category: 'Basic Types' },
    { slug: 'enum-types', title: 'Enum Types', explanation: 'Numeric and string enums for named constants.', category: 'Basic Types' },
    { slug: 'object-type', title: 'Object Type', explanation: 'Typing objects, object literals, and property types.', category: 'Basic Types' },
    
    // 3. TYPE ANNOTATIONS
    { slug: 'variable-annotations', title: 'Variable Annotations', explanation: 'Explicitly typing variables with type annotations.', category: 'Type Annotations' },
    { slug: 'function-annotations', title: 'Function Annotations', explanation: 'Typing function parameters and return types.', category: 'Type Annotations' },
    { slug: 'optional-parameters', title: 'Optional Parameters', explanation: 'Optional and default parameters in functions.', category: 'Type Annotations' },
    { slug: 'rest-parameters', title: 'Rest Parameters', explanation: 'Typing rest parameters and spread syntax.', category: 'Type Annotations' },
    { slug: 'type-inference', title: 'Type Inference', explanation: 'How TypeScript automatically infers types.', category: 'Type Annotations' },
    { slug: 'type-assertions', title: 'Type Assertions', explanation: 'as syntax and angle-bracket syntax for type casting.', category: 'Type Annotations' },
    { slug: 'non-null-assertion', title: 'Non-null Assertion', explanation: 'Using ! operator to assert non-null values.', category: 'Type Annotations' },
    
    // 4. INTERFACES
    { slug: 'interface-basics', title: 'Interface Basics', explanation: 'Defining interfaces for object shapes.', category: 'Interfaces' },
    { slug: 'optional-properties', title: 'Optional Properties', explanation: 'Optional properties with ? modifier.', category: 'Interfaces' },
    { slug: 'readonly-properties', title: 'Readonly Properties', explanation: 'Readonly properties and immutability.', category: 'Interfaces' },
    { slug: 'index-signatures', title: 'Index Signatures', explanation: 'Dynamic property names with index signatures.', category: 'Interfaces' },
    { slug: 'extending-interfaces', title: 'Extending Interfaces', explanation: 'Interface inheritance with extends keyword.', category: 'Interfaces' },
    { slug: 'interface-merging', title: 'Interface Merging', explanation: 'Declaration merging for interfaces.', category: 'Interfaces' },
    { slug: 'hybrid-types', title: 'Hybrid Types', explanation: 'Interfaces for callable objects with properties.', category: 'Interfaces' },
    
    // 5. TYPE ALIASES
    { slug: 'type-alias-basics', title: 'Type Alias Basics', explanation: 'Creating custom types with type keyword.', category: 'Type Aliases' },
    { slug: 'union-types', title: 'Union Types', explanation: 'Combining multiple types with | operator.', category: 'Type Aliases' },
    { slug: 'intersection-types', title: 'Intersection Types', explanation: 'Combining types with & operator.', category: 'Type Aliases' },
    { slug: 'literal-types', title: 'Literal Types', explanation: 'Exact string, number, and boolean literal types.', category: 'Type Aliases' },
    { slug: 'type-vs-interface', title: 'Type vs Interface', explanation: 'When to use type aliases vs interfaces.', category: 'Type Aliases' },
    
    // 6. FUNCTIONS
    { slug: 'function-types', title: 'Function Types', explanation: 'Typing function signatures and callable types.', category: 'Functions' },
    { slug: 'function-overloading', title: 'Function Overloading', explanation: 'Multiple function signatures for different parameter types.', category: 'Functions' },
    { slug: 'this-parameter', title: 'this Parameter', explanation: 'Typing this in functions and methods.', category: 'Functions' },
    { slug: 'arrow-functions', title: 'Arrow Functions', explanation: 'Typing arrow functions and implicit returns.', category: 'Functions' },
    { slug: 'generic-functions', title: 'Generic Functions', explanation: 'Type parameters for reusable functions.', category: 'Functions' },
    { slug: 'callback-types', title: 'Callback Types', explanation: 'Typing callback functions and handlers.', category: 'Functions' },
    
    // 7. CLASSES
    { slug: 'class-basics', title: 'Class Basics', explanation: 'TypeScript classes, constructors, and properties.', category: 'Classes' },
    { slug: 'access-modifiers', title: 'Access Modifiers', explanation: 'public, private, protected access control.', category: 'Classes' },
    { slug: 'readonly-modifier', title: 'Readonly Modifier', explanation: 'Readonly properties in classes.', category: 'Classes' },
    { slug: 'parameter-properties', title: 'Parameter Properties', explanation: 'Shorthand for constructor parameters.', category: 'Classes' },
    { slug: 'getters-setters', title: 'Getters & Setters', explanation: 'Accessor methods for properties.', category: 'Classes' },
    { slug: 'static-members', title: 'Static Members', explanation: 'Static properties and methods.', category: 'Classes' },
    { slug: 'abstract-classes', title: 'Abstract Classes', explanation: 'Abstract classes and methods for inheritance.', category: 'Classes' },
    { slug: 'class-implements', title: 'Implements Keyword', explanation: 'Implementing interfaces in classes.', category: 'Classes' },
    { slug: 'class-inheritance', title: 'Class Inheritance', explanation: 'Extending classes with super and override.', category: 'Classes' },
    
    // 8. GENERICS
    { slug: 'generic-basics', title: 'Generic Basics', explanation: 'Introduction to generic types and type parameters.', category: 'Generics' },
    { slug: 'generic-constraints', title: 'Generic Constraints', explanation: 'Constraining type parameters with extends.', category: 'Generics' },
    { slug: 'generic-classes', title: 'Generic Classes', explanation: 'Creating reusable generic classes.', category: 'Generics' },
    { slug: 'generic-interfaces', title: 'Generic Interfaces', explanation: 'Generic interfaces for flexible contracts.', category: 'Generics' },
    { slug: 'multiple-type-parameters', title: 'Multiple Type Parameters', explanation: 'Using multiple generic type parameters.', category: 'Generics' },
    { slug: 'default-type-parameters', title: 'Default Type Parameters', explanation: 'Default values for generic parameters.', category: 'Generics' },
    { slug: 'generic-utility-types', title: 'Generic Utility Types', explanation: 'Built-in utility types like Pick, Omit, Partial.', category: 'Generics' },
    
    // 9. ADVANCED TYPES
    { slug: 'conditional-types', title: 'Conditional Types', explanation: 'Type conditions with extends ? : syntax.', category: 'Advanced Types' },
    { slug: 'mapped-types', title: 'Mapped Types', explanation: 'Transforming types with key mapping.', category: 'Advanced Types' },
    { slug: 'template-literal-types', title: 'Template Literal Types', explanation: 'String literal types with template syntax.', category: 'Advanced Types' },
    { slug: 'keyof-operator', title: 'keyof Operator', explanation: 'Getting union of object keys.', category: 'Advanced Types' },
    { slug: 'typeof-operator', title: 'typeof Operator', explanation: 'Extracting types from values.', category: 'Advanced Types' },
    { slug: 'indexed-access-types', title: 'Indexed Access Types', explanation: 'Accessing property types with T[K].', category: 'Advanced Types' },
    { slug: 'type-guards', title: 'Type Guards', explanation: 'Runtime type checking with type predicates.', category: 'Advanced Types' },
    { slug: 'discriminated-unions', title: 'Discriminated Unions', explanation: 'Tagged unions for type narrowing.', category: 'Advanced Types' },
    { slug: 'exhaustiveness-checking', title: 'Exhaustiveness Checking', explanation: 'Ensuring all cases are handled with never.', category: 'Advanced Types' },
    
    // 10. UTILITY TYPES
    { slug: 'partial-type', title: 'Partial<T>', explanation: 'Making all properties optional.', category: 'Utility Types' },
    { slug: 'required-type', title: 'Required<T>', explanation: 'Making all properties required.', category: 'Utility Types' },
    { slug: 'readonly-type', title: 'Readonly<T>', explanation: 'Making all properties readonly.', category: 'Utility Types' },
    { slug: 'record-type', title: 'Record<K, T>', explanation: 'Creating object types with specific keys.', category: 'Utility Types' },
    { slug: 'pick-type', title: 'Pick<T, K>', explanation: 'Selecting specific properties from a type.', category: 'Utility Types' },
    { slug: 'omit-type', title: 'Omit<T, K>', explanation: 'Removing specific properties from a type.', category: 'Utility Types' },
    { slug: 'exclude-type', title: 'Exclude<T, U>', explanation: 'Removing types from a union.', category: 'Utility Types' },
    { slug: 'extract-type', title: 'Extract<T, U>', explanation: 'Extracting types from a union.', category: 'Utility Types' },
    { slug: 'nonnullable-type', title: 'NonNullable<T>', explanation: 'Removing null and undefined from type.', category: 'Utility Types' },
    { slug: 'returntype-type', title: 'ReturnType<T>', explanation: 'Extracting function return type.', category: 'Utility Types' },
    { slug: 'parameters-type', title: 'Parameters<T>', explanation: 'Extracting function parameter types.', category: 'Utility Types' },
    { slug: 'awaited-type', title: 'Awaited<T>', explanation: 'Unwrapping Promise types (TS 4.5+).', category: 'Utility Types' },
    
    // 11. MODULES & NAMESPACES
    { slug: 'es-modules', title: 'ES Modules', explanation: 'Import and export with ES6 module syntax.', category: 'Modules & Namespaces' },
    { slug: 'default-exports', title: 'Default Exports', explanation: 'Default exports and imports.', category: 'Modules & Namespaces' },
    { slug: 'named-exports', title: 'Named Exports', explanation: 'Named exports and selective imports.', category: 'Modules & Namespaces' },
    { slug: 'type-only-imports', title: 'Type-Only Imports', explanation: 'import type for type-only imports.', category: 'Modules & Namespaces' },
    { slug: 'namespaces', title: 'Namespaces', explanation: 'Internal modules with namespace keyword.', category: 'Modules & Namespaces' },
    { slug: 'module-resolution', title: 'Module Resolution', explanation: 'Classic vs Node module resolution strategies.', category: 'Modules & Namespaces' },
    { slug: 'declaration-files', title: 'Declaration Files', explanation: '.d.ts files for type declarations.', category: 'Modules & Namespaces' },
    
    // 12. DECORATORS
    { slug: 'decorator-basics', title: 'Decorator Basics', explanation: 'Introduction to decorators and metadata (experimental).', category: 'Decorators' },
    { slug: 'class-decorators', title: 'Class Decorators', explanation: 'Decorating classes and constructors.', category: 'Decorators' },
    { slug: 'method-decorators', title: 'Method Decorators', explanation: 'Decorating class methods.', category: 'Decorators' },
    { slug: 'property-decorators', title: 'Property Decorators', explanation: 'Decorating class properties.', category: 'Decorators' },
    { slug: 'parameter-decorators', title: 'Parameter Decorators', explanation: 'Decorating method parameters.', category: 'Decorators' },
    { slug: 'decorator-factories', title: 'Decorator Factories', explanation: 'Creating configurable decorators.', category: 'Decorators' },
    { slug: 'reflect-metadata', title: 'Reflect Metadata', explanation: 'Using reflect-metadata for runtime type information.', category: 'Decorators' },
    
    // 13. TYPESCRIPT 4.x FEATURES
    { slug: 'variadic-tuple-types', title: 'Variadic Tuple Types', explanation: 'Spreading tuple types (TS 4.0).', category: 'TypeScript 4.x Features' },
    { slug: 'labeled-tuple-elements', title: 'Labeled Tuple Elements', explanation: 'Named tuple elements for clarity (TS 4.0).', category: 'TypeScript 4.x Features' },
    { slug: 'template-literal-types-advanced', title: 'Template Literal Types', explanation: 'Advanced string manipulation with template literals (TS 4.1).', category: 'TypeScript 4.x Features' },
    { slug: 'key-remapping', title: 'Key Remapping', explanation: 'as clause in mapped types (TS 4.1).', category: 'TypeScript 4.x Features' },
    { slug: 'recursive-conditional-types', title: 'Recursive Conditional Types', explanation: 'Self-referencing conditional types (TS 4.1).', category: 'TypeScript 4.x Features' },
    { slug: 'abstract-construct-signatures', title: 'Abstract Construct Signatures', explanation: 'Abstract class constructor types (TS 4.2).', category: 'TypeScript 4.x Features' },
    { slug: 'tuple-spread-improvements', title: 'Tuple Spread Improvements', explanation: 'Better handling of spreads in tuples (TS 4.2).', category: 'TypeScript 4.x Features' },
    { slug: 'template-string-type-improvements', title: 'Template String Improvements', explanation: 'Enhanced template literal type inference (TS 4.3).', category: 'TypeScript 4.x Features' },
    { slug: 'override-keyword', title: 'override Modifier', explanation: 'Explicit method override checking (TS 4.3).', category: 'TypeScript 4.x Features' },
    { slug: 'static-index-signatures', title: 'Static Index Signatures', explanation: 'Index signatures on static side of classes (TS 4.4).', category: 'TypeScript 4.x Features' },
    { slug: 'exact-optional-properties', title: 'Exact Optional Properties', explanation: 'Distinguishing undefined from missing properties (TS 4.4).', category: 'TypeScript 4.x Features' },
    { slug: 'tail-recursion', title: 'Tail Recursion Optimization', explanation: 'Better handling of recursive types (TS 4.5).', category: 'TypeScript 4.x Features' },
    { slug: 'import-assertions', title: 'Import Assertions', explanation: 'Type assertions for imports (TS 4.5).', category: 'TypeScript 4.x Features' },
    { slug: 'control-flow-analysis', title: 'Control Flow Analysis', explanation: 'Improved narrowing in destructuring (TS 4.6).', category: 'TypeScript 4.x Features' },
    { slug: 'index-signature-labels', title: 'Index Signature Labels', explanation: 'Documenting index signatures (TS 4.7).', category: 'TypeScript 4.x Features' },
    { slug: 'moduleSuffixes', title: 'moduleSuffixes', explanation: 'Custom module resolution suffixes (TS 4.7).', category: 'TypeScript 4.x Features' },
    { slug: 'infer-extends', title: 'infer extends', explanation: 'Constraints on inferred types (TS 4.7).', category: 'TypeScript 4.x Features' },
    { slug: 'variance-annotations', title: 'Variance Annotations', explanation: 'in/out variance annotations for type parameters (TS 4.7).', category: 'TypeScript 4.x Features' },
    { slug: 'satisfies-operator', title: 'satisfies Operator', explanation: 'Type checking without widening (TS 4.9).', category: 'TypeScript 4.x Features' },
    { slug: 'auto-accessors', title: 'Auto-Accessors', explanation: 'accessor keyword for properties (TS 4.9).', category: 'TypeScript 4.x Features' },
    
    // 14. TYPESCRIPT 5.x FEATURES
    { slug: 'const-type-parameters', title: 'const Type Parameters', explanation: 'Inferring literal types with const (TS 5.0).', category: 'TypeScript 5.x Features' },
    { slug: 'extends-multiple-config', title: 'extends Multiple Configs', explanation: 'Extending multiple tsconfig files (TS 5.0).', category: 'TypeScript 5.x Features' },
    { slug: 'all-enums-are-union', title: 'Enum Union Types', explanation: 'All enums as discriminated unions (TS 5.0).', category: 'TypeScript 5.x Features' },
    { slug: 'decorators-stage3', title: 'Stage 3 Decorators', explanation: 'ECMAScript decorators support (TS 5.0).', category: 'TypeScript 5.x Features' },
    { slug: 'using-declarations', title: 'using Declarations', explanation: 'Explicit resource management (TS 5.2).', category: 'TypeScript 5.x Features' },
    { slug: 'decorator-metadata', title: 'Decorator Metadata', explanation: 'Symbol.metadata for decorators (TS 5.2).', category: 'TypeScript 5.x Features' },
    { slug: 'type-import-attributes', title: 'Import Attributes', explanation: 'with keyword for import assertions (TS 5.3).', category: 'TypeScript 5.x Features' },
    { slug: 'resolution-bundler', title: 'Resolution Bundler', explanation: 'moduleResolution: "bundler" option (TS 5.0).', category: 'TypeScript 5.x Features' },
    { slug: 'jsx-optimization', title: 'JSX Performance', explanation: 'Optimized JSX emit and factories (TS 5.1).', category: 'TypeScript 5.x Features' },
    { slug: 'inferred-type-predicates', title: 'Inferred Type Predicates', explanation: 'Automatic type predicate inference (TS 5.5).', category: 'TypeScript 5.x Features' },
    { slug: 'control-flow-narrowing', title: 'Control Flow Narrowing', explanation: 'Constant indexed access narrowing (TS 5.5).', category: 'TypeScript 5.x Features' },
    { slug: 'regular-expression-syntax', title: 'RegExp Syntax Checking', explanation: 'ECMAScript regex validation (TS 5.5).', category: 'TypeScript 5.x Features' },
    
    // 15. TSCONFIG.JSON
    { slug: 'compiler-options', title: 'Compiler Options', explanation: 'Understanding tsconfig.json compiler options.', category: 'tsconfig.json' },
    { slug: 'strict-mode', title: 'Strict Mode', explanation: 'Enabling strict type checking options.', category: 'tsconfig.json' },
    { slug: 'target-option', title: 'Target', explanation: 'ECMAScript target version for compilation.', category: 'tsconfig.json' },
    { slug: 'module-option', title: 'Module', explanation: 'Module system: CommonJS, ES6, AMD, etc.', category: 'tsconfig.json' },
    { slug: 'lib-option', title: 'Lib', explanation: 'Including type definitions for standard libraries.', category: 'tsconfig.json' },
    { slug: 'jsx-option', title: 'JSX', explanation: 'JSX compilation options for React.', category: 'tsconfig.json' },
    { slug: 'declaration-files-config', title: 'Declaration Files', explanation: 'Generating .d.ts declaration files.', category: 'tsconfig.json' },
    { slug: 'source-maps', title: 'Source Maps', explanation: 'Generating source maps for debugging.', category: 'tsconfig.json' },
    { slug: 'path-mapping', title: 'Path Mapping', explanation: 'Custom module paths with paths option.', category: 'tsconfig.json' },
    { slug: 'project-references', title: 'Project References', explanation: 'Multi-project builds and dependencies.', category: 'tsconfig.json' },
    
    // 16. TYPE NARROWING
    { slug: 'typeof-guards', title: 'typeof Guards', explanation: 'Narrowing with typeof checks.', category: 'Type Narrowing' },
    { slug: 'instanceof-guards', title: 'instanceof Guards', explanation: 'Narrowing with instanceof checks.', category: 'Type Narrowing' },
    { slug: 'in-operator-narrowing', title: 'in Operator Narrowing', explanation: 'Property existence checking for narrowing.', category: 'Type Narrowing' },
    { slug: 'truthiness-narrowing', title: 'Truthiness Narrowing', explanation: 'Narrowing based on truthy/falsy values.', category: 'Type Narrowing' },
    { slug: 'equality-narrowing', title: 'Equality Narrowing', explanation: 'Narrowing with === and !== checks.', category: 'Type Narrowing' },
    { slug: 'custom-type-guards', title: 'Custom Type Guards', explanation: 'Creating type predicate functions.', category: 'Type Narrowing' },
    { slug: 'assertion-functions', title: 'Assertion Functions', explanation: 'asserts keyword for assertion functions.', category: 'Type Narrowing' },
    
    // 17. WORKING WITH REACT
    { slug: 'react-typescript-setup', title: 'React + TypeScript Setup', explanation: 'Setting up TypeScript with React projects.', category: 'Working with React' },
    { slug: 'react-component-types', title: 'Component Types', explanation: 'Typing React components: FC, Component, props.', category: 'Working with React' },
    { slug: 'react-hooks-types', title: 'Hooks Types', explanation: 'Typing useState, useEffect, useRef, etc.', category: 'Working with React' },
    { slug: 'react-event-types', title: 'Event Types', explanation: 'Typing React events and handlers.', category: 'Working with React' },
    { slug: 'react-children-types', title: 'Children Types', explanation: 'ReactNode, ReactElement, and children props.', category: 'Working with React' },
    { slug: 'react-generic-components', title: 'Generic Components', explanation: 'Creating reusable generic React components.', category: 'Working with React' },
    
    // 18. WORKING WITH NODE.JS
    { slug: 'nodejs-typescript-setup', title: 'Node.js + TypeScript Setup', explanation: 'Setting up TypeScript for Node.js projects.', category: 'Working with Node.js' },
    { slug: 'nodejs-types', title: 'Node.js Types', explanation: 'Installing @types/node for Node.js type definitions.', category: 'Working with Node.js' },
    { slug: 'express-typescript', title: 'Express with TypeScript', explanation: 'Typing Express applications, routes, and middleware.', category: 'Working with Node.js' },
    { slug: 'async-await-node', title: 'Async/Await in Node', explanation: 'Typing promises and async functions.', category: 'Working with Node.js' },
    
    // 19. TESTING WITH TYPESCRIPT
    { slug: 'jest-typescript', title: 'Jest with TypeScript', explanation: 'Setting up Jest for TypeScript testing.', category: 'Testing' },
    { slug: 'testing-types', title: 'Testing Types', explanation: 'Type testing with expect-type and tsd.', category: 'Testing' },
    { slug: 'mocking-types', title: 'Mocking with Types', explanation: 'Typing mocks, spies, and test doubles.', category: 'Testing' },
    
    // 20. PERFORMANCE & OPTIMIZATION
    { slug: 'compilation-speed', title: 'Compilation Speed', explanation: 'Optimizing TypeScript compilation time.', category: 'Performance' },
    { slug: 'incremental-compilation', title: 'Incremental Compilation', explanation: 'Using incremental builds for faster compilation.', category: 'Performance' },
    { slug: 'type-checking-performance', title: 'Type Checking Performance', explanation: 'Improving type checking speed.', category: 'Performance' },
    { slug: 'skipLibCheck', title: 'skipLibCheck', explanation: 'Skipping lib file checks for performance.', category: 'Performance' },
    
    // 21. BEST PRACTICES
    { slug: 'type-safety', title: 'Type Safety', explanation: 'Writing type-safe code, avoiding any.', category: 'Best Practices' },
    { slug: 'strict-null-checks', title: 'Strict Null Checks', explanation: 'Handling null and undefined properly.', category: 'Best Practices' },
    { slug: 'type-coverage', title: 'Type Coverage', explanation: 'Measuring and improving type coverage.', category: 'Best Practices' },
    { slug: 'naming-conventions', title: 'Naming Conventions', explanation: 'TypeScript naming standards and patterns.', category: 'Best Practices' },
    { slug: 'code-organization', title: 'Code Organization', explanation: 'Structuring TypeScript projects effectively.', category: 'Best Practices' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'Type-safe error handling patterns.', category: 'Best Practices' },
    
    // 22. MIGRATION STRATEGIES
    { slug: 'js-to-ts-migration', title: 'JavaScript to TypeScript', explanation: 'Gradual migration strategies and best practices.', category: 'Migration' },
    { slug: 'allowJs-option', title: 'allowJs Option', explanation: 'Mixing JavaScript and TypeScript files.', category: 'Migration' },
    { slug: 'checkJs-option', title: 'checkJs Option', explanation: 'Type checking JavaScript files with JSDoc.', category: 'Migration' },
    { slug: 'jsdoc-to-typescript', title: 'JSDoc to TypeScript', explanation: 'Converting JSDoc annotations to TypeScript.', category: 'Migration' },
    
    // 23. TOOLING & ECOSYSTEM
    { slug: 'typescript-eslint', title: 'TypeScript ESLint', explanation: 'Linting TypeScript with typescript-eslint.', category: 'Tooling' },
    { slug: 'ts-node', title: 'ts-node', explanation: 'Running TypeScript directly with ts-node.', category: 'Tooling' },
    { slug: 'type-checking-ci', title: 'Type Checking in CI', explanation: 'Integrating type checks in CI/CD pipelines.', category: 'Tooling' },
    { slug: 'typescript-vscode', title: 'VS Code Integration', explanation: 'TypeScript features in Visual Studio Code.', category: 'Tooling' },
    { slug: 'definitely-typed', title: 'DefinitelyTyped', explanation: '@types packages and community type definitions.', category: 'Tooling' },
    
    // 24. ADVANCED PATTERNS
    { slug: 'branded-types', title: 'Branded Types', explanation: 'Creating nominal types with branding.', category: 'Advanced Patterns' },
    { slug: 'builder-pattern', title: 'Builder Pattern', explanation: 'Implementing type-safe builders.', category: 'Advanced Patterns' },
    { slug: 'finite-state-machines', title: 'Finite State Machines', explanation: 'Modeling state machines with types.', category: 'Advanced Patterns' },
    { slug: 'phantom-types', title: 'Phantom Types', explanation: 'Using phantom type parameters for compile-time safety.', category: 'Advanced Patterns' },
    { slug: 'type-level-programming', title: 'Type-Level Programming', explanation: 'Advanced type manipulation and computation.', category: 'Advanced Patterns' },
    { slug: 'opaque-types', title: 'Opaque Types', explanation: 'Hiding implementation details with type branding.', category: 'Advanced Patterns' },
    { slug: 'higher-kinded-types', title: 'Higher-Kinded Types', explanation: 'Simulating HKTs in TypeScript for advanced abstractions.', category: 'Advanced Patterns' },
    { slug: 'algebraic-data-types', title: 'Algebraic Data Types', explanation: 'Sum types and product types in TypeScript.', category: 'Advanced Patterns' },
  ]
};
