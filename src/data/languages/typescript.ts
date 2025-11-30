
import type { Language } from './types';

export const typescript: Language = {
  slug: 'typescript',
  name: 'TypeScript',
  description: 'JavaScript with syntax for types - build better, safer applications',
  topics: [
    // GETTING STARTED
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering TypeScript from basics to advanced type system features.' },
    
    // 1. INTRODUCTION
    { slug: 'what-is-typescript', title: 'What is TypeScript?', explanation: 'Introduction to TypeScript, its benefits, relationship with JavaScript, and why use it.', category: '1. Introduction' },
    { slug: 'typescript-vs-javascript', title: 'TypeScript vs JavaScript', explanation: 'Key differences, when to use TypeScript, and migration strategies.', category: '1. Introduction' },
    { slug: 'typescript-setup', title: 'Installation & Setup', explanation: 'Installing TypeScript, configuring tsconfig.json, and setting up your development environment.', category: '1. Introduction' },
    { slug: 'typescript-compiler', title: 'TypeScript Compiler (tsc)', explanation: 'Understanding the TypeScript compiler, compilation process, and compiler options.', category: '1. Introduction' },
    { slug: 'typescript-playground', title: 'TypeScript Playground', explanation: 'Using the online playground for experimentation and learning.', category: '1. Introduction' },
    
    // 2. BASIC TYPES
    { slug: 'primitive-types', title: 'Primitive Types', explanation: 'string, number, boolean, null, undefined, symbol, and bigint types.', category: '2. Basic Types' },
    { slug: 'any-type', title: 'any Type', explanation: 'The any type, when to use it, and why to avoid it.', category: '2. Basic Types' },
    { slug: 'unknown-type', title: 'unknown Type', explanation: 'Type-safe alternative to any for unknown values.', category: '2. Basic Types' },
    { slug: 'void-type', title: 'void Type', explanation: 'Representing absence of value in functions.', category: '2. Basic Types' },
    { slug: 'never-type', title: 'never Type', explanation: 'Representing values that never occur, exhaustive checks.', category: '2. Basic Types' },
    { slug: 'array-types', title: 'Array Types', explanation: 'Typed arrays: T[] and Array<T> syntax.', category: '2. Basic Types' },
    { slug: 'tuple-types', title: 'Tuple Types', explanation: 'Fixed-length arrays with known types at each position.', category: '2. Basic Types' },
    { slug: 'enum-types', title: 'Enum Types', explanation: 'Numeric and string enums for named constants.', category: '2. Basic Types' },
    { slug: 'object-type', title: 'Object Type', explanation: 'Typing objects, object literals, and property types.', category: '2. Basic Types' },
    
    // 3. TYPE ANNOTATIONS
    { slug: 'variable-annotations', title: 'Variable Annotations', explanation: 'Explicitly typing variables with type annotations.', category: '3. Type Annotations' },
    { slug: 'function-annotations', title: 'Function Annotations', explanation: 'Typing function parameters and return types.', category: '3. Type Annotations' },
    { slug: 'optional-parameters', title: 'Optional Parameters', explanation: 'Optional and default parameters in functions.', category: '3. Type Annotations' },
    { slug: 'rest-parameters', title: 'Rest Parameters', explanation: 'Typing rest parameters and spread syntax.', category: '3. Type Annotations' },
    { slug: 'type-inference', title: 'Type Inference', explanation: 'How TypeScript automatically infers types.', category: '3. Type Annotations' },
    { slug: 'type-assertions', title: 'Type Assertions', explanation: 'as syntax and angle-bracket syntax for type casting.', category: '3. Type Annotations' },
    { slug: 'non-null-assertion', title: 'Non-null Assertion', explanation: 'Using ! operator to assert non-null values.', category: '3. Type Annotations' },
    
    // 4. INTERFACES
    { slug: 'interface-basics', title: 'Interface Basics', explanation: 'Defining interfaces for object shapes.', category: '4. Interfaces' },
    { slug: 'optional-properties', title: 'Optional Properties', explanation: 'Optional properties with ? modifier.', category: '4. Interfaces' },
    { slug: 'readonly-properties', title: 'Readonly Properties', explanation: 'Readonly properties and immutability.', category: '4. Interfaces' },
    { slug: 'index-signatures', title: 'Index Signatures', explanation: 'Dynamic property names with index signatures.', category: '4. Interfaces' },
    { slug: 'extending-interfaces', title: 'Extending Interfaces', explanation: 'Interface inheritance with extends keyword.', category: '4. Interfaces' },
    { slug: 'interface-merging', title: 'Interface Merging', explanation: 'Declaration merging for interfaces.', category: '4. Interfaces' },
    { slug: 'hybrid-types', title: 'Hybrid Types', explanation: 'Interfaces for callable objects with properties.', category: '4. Interfaces' },
    
    // 5. TYPE ALIASES
    { slug: 'type-alias-basics', title: 'Type Alias Basics', explanation: 'Creating custom types with type keyword.', category: '5. Type Aliases' },
    { slug: 'union-types', title: 'Union Types', explanation: 'Combining multiple types with | operator.', category: '5. Type Aliases' },
    { slug: 'intersection-types', title: 'Intersection Types', explanation: 'Combining types with & operator.', category: '5. Type Aliases' },
    { slug: 'literal-types', title: 'Literal Types', explanation: 'Exact string, number, and boolean literal types.', category: '5. Type Aliases' },
    { slug: 'type-vs-interface', title: 'Type vs Interface', explanation: 'When to use type aliases vs interfaces.', category: '5. Type Aliases' },
    
    // 6. FUNCTIONS
    { slug: 'function-types', title: 'Function Types', explanation: 'Typing function signatures and callable types.', category: '6. Functions' },
    { slug: 'function-overloading', title: 'Function Overloading', explanation: 'Multiple function signatures for different parameter types.', category: '6. Functions' },
    { slug: 'this-parameter', title: 'this Parameter', explanation: 'Typing this in functions and methods.', category: '6. Functions' },
    { slug: 'arrow-functions', title: 'Arrow Functions', explanation: 'Typing arrow functions and implicit returns.', category: '6. Functions' },
    { slug: 'generic-functions', title: 'Generic Functions', explanation: 'Type parameters for reusable functions.', category: '6. Functions' },
    { slug: 'callback-types', title: 'Callback Types', explanation: 'Typing callback functions and handlers.', category: '6. Functions' },
    
    // 7. CLASSES
    { slug: 'class-basics', title: 'Class Basics', explanation: 'TypeScript classes, constructors, and properties.', category: '7. Classes' },
    { slug: 'access-modifiers', title: 'Access Modifiers', explanation: 'public, private, protected access control.', category: '7. Classes' },
    { slug: 'readonly-modifier', title: 'Readonly Modifier', explanation: 'Readonly properties in classes.', category: '7. Classes' },
    { slug: 'parameter-properties', title: 'Parameter Properties', explanation: 'Shorthand for constructor parameters.', category: '7. Classes' },
    { slug: 'getters-setters', title: 'Getters & Setters', explanation: 'Accessor methods for properties.', category: '7. Classes' },
    { slug: 'static-members', title: 'Static Members', explanation: 'Static properties and methods.', category: '7. Classes' },
    { slug: 'abstract-classes', title: 'Abstract Classes', explanation: 'Abstract classes and methods for inheritance.', category: '7. Classes' },
    { slug: 'class-implements', title: 'Implements Keyword', explanation: 'Implementing interfaces in classes.', category: '7. Classes' },
    { slug: 'class-inheritance', title: 'Class Inheritance', explanation: 'Extending classes with super and override.', category: '7. Classes' },
    
    // 8. GENERICS
    { slug: 'generic-basics', title: 'Generic Basics', explanation: 'Introduction to generic types and type parameters.', category: '8. Generics' },
    { slug: 'generic-constraints', title: 'Generic Constraints', explanation: 'Constraining type parameters with extends.', category: '8. Generics' },
    { slug: 'generic-classes', title: 'Generic Classes', explanation: 'Creating reusable generic classes.', category: '8. Generics' },
    { slug: 'generic-interfaces', title: 'Generic Interfaces', explanation: 'Generic interfaces for flexible contracts.', category: '8. Generics' },
    { slug: 'multiple-type-parameters', title: 'Multiple Type Parameters', explanation: 'Using multiple generic type parameters.', category: '8. Generics' },
    { slug: 'default-type-parameters', title: 'Default Type Parameters', explanation: 'Default values for generic parameters.', category: '8. Generics' },
    { slug: 'generic-utility-types', title: 'Generic Utility Types', explanation: 'Built-in utility types like Pick, Omit, Partial.', category: '8. Generics' },
    
    // 9. ADVANCED TYPES
    { slug: 'conditional-types', title: 'Conditional Types', explanation: 'Type conditions with extends ? : syntax.', category: '9. Advanced Types' },
    { slug: 'mapped-types', title: 'Mapped Types', explanation: 'Transforming types with key mapping.', category: '9. Advanced Types' },
    { slug: 'template-literal-types', title: 'Template Literal Types', explanation: 'String literal types with template syntax.', category: '9. Advanced Types' },
    { slug: 'keyof-operator', title: 'keyof Operator', explanation: 'Getting union of object keys.', category: '9. Advanced Types' },
    { slug: 'typeof-operator', title: 'typeof Operator', explanation: 'Extracting types from values.', category: '9. Advanced Types' },
    { slug: 'indexed-access-types', title: 'Indexed Access Types', explanation: 'Accessing property types with T[K].', category: '9. Advanced Types' },
    { slug: 'type-guards', title: 'Type Guards', explanation: 'Runtime type checking with type predicates.', category: '9. Advanced Types' },
    { slug: 'discriminated-unions', title: 'Discriminated Unions', explanation: 'Tagged unions for type narrowing.', category: '9. Advanced Types' },
    { slug: 'exhaustiveness-checking', title: 'Exhaustiveness Checking', explanation: 'Ensuring all cases are handled with never.', category: '9. Advanced Types' },
    
    // 10. UTILITY TYPES
    { slug: 'partial-type', title: 'Partial<T>', explanation: 'Making all properties optional.', category: '10. Utility Types' },
    { slug: 'required-type', title: 'Required<T>', explanation: 'Making all properties required.', category: '10. Utility Types' },
    { slug: 'readonly-type', title: 'Readonly<T>', explanation: 'Making all properties readonly.', category: '10. Utility Types' },
    { slug: 'record-type', title: 'Record<K, T>', explanation: 'Creating object types with specific keys.', category: '10. Utility Types' },
    { slug: 'pick-type', title: 'Pick<T, K>', explanation: 'Selecting specific properties from a type.', category: '10. Utility Types' },
    { slug: 'omit-type', title: 'Omit<T, K>', explanation: 'Removing specific properties from a type.', category: '10. Utility Types' },
    { slug: 'exclude-type', title: 'Exclude<T, U>', explanation: 'Removing types from a union.', category: '10. Utility Types' },
    { slug: 'extract-type', title: 'Extract<T, U>', explanation: 'Extracting types from a union.', category: '10. Utility Types' },
    { slug: 'nonnullable-type', title: 'NonNullable<T>', explanation: 'Removing null and undefined from type.', category: '10. Utility Types' },
    { slug: 'returntype-type', title: 'ReturnType<T>', explanation: 'Extracting function return type.', category: '10. Utility Types' },
    { slug: 'parameters-type', title: 'Parameters<T>', explanation: 'Extracting function parameter types.', category: '10. Utility Types' },
    { slug: 'awaited-type', title: 'Awaited<T>', explanation: 'Unwrapping Promise types (TS 4.5+).', category: '10. Utility Types' },
    
    // 11. MODULES & NAMESPACES
    { slug: 'es-modules', title: 'ES Modules', explanation: 'Import and export with ES6 module syntax.', category: '11. Modules & Namespaces' },
    { slug: 'default-exports', title: 'Default Exports', explanation: 'Default exports and imports.', category: '11. Modules & Namespaces' },
    { slug: 'named-exports', title: 'Named Exports', explanation: 'Named exports and selective imports.', category: '11. Modules & Namespaces' },
    { slug: 'type-only-imports', title: 'Type-Only Imports', explanation: 'import type for type-only imports.', category: '11. Modules & Namespaces' },
    { slug: 'namespaces', title: 'Namespaces', explanation: 'Internal modules with namespace keyword.', category: '11. Modules & Namespaces' },
    { slug: 'module-resolution', title: 'Module Resolution', explanation: 'Classic vs Node module resolution strategies.', category: '11. Modules & Namespaces' },
    { slug: 'declaration-files', title: 'Declaration Files', explanation: '.d.ts files for type declarations.', category: '11. Modules & Namespaces' },
    
    // 12. DECORATORS
    { slug: 'decorator-basics', title: 'Decorator Basics', explanation: 'Introduction to decorators and metadata (experimental).', category: '12. Decorators' },
    { slug: 'class-decorators', title: 'Class Decorators', explanation: 'Decorating classes and constructors.', category: '12. Decorators' },
    { slug: 'method-decorators', title: 'Method Decorators', explanation: 'Decorating class methods.', category: '12. Decorators' },
    { slug: 'property-decorators', title: 'Property Decorators', explanation: 'Decorating class properties.', category: '12. Decorators' },
    { slug: 'parameter-decorators', title: 'Parameter Decorators', explanation: 'Decorating method parameters.', category: '12. Decorators' },
    { slug: 'decorator-factories', title: 'Decorator Factories', explanation: 'Creating configurable decorators.', category: '12. Decorators' },
    { slug: 'reflect-metadata', title: 'Reflect Metadata', explanation: 'Using reflect-metadata for runtime type information.', category: '12. Decorators' },
    
    // 13. TYPESCRIPT 4.x FEATURES
    { slug: 'variadic-tuple-types', title: 'Variadic Tuple Types', explanation: 'Spreading tuple types (TS 4.0).', category: '13. TypeScript 4.x Features' },
    { slug: 'labeled-tuple-elements', title: 'Labeled Tuple Elements', explanation: 'Named tuple elements for clarity (TS 4.0).', category: '13. TypeScript 4.x Features' },
    { slug: 'template-literal-types-advanced', title: 'Template Literal Types', explanation: 'Advanced string manipulation with template literals (TS 4.1).', category: '13. TypeScript 4.x Features' },
    { slug: 'key-remapping', title: 'Key Remapping', explanation: 'as clause in mapped types (TS 4.1).', category: '13. TypeScript 4.x Features' },
    { slug: 'recursive-conditional-types', title: 'Recursive Conditional Types', explanation: 'Self-referencing conditional types (TS 4.1).', category: '13. TypeScript 4.x Features' },
    { slug: 'abstract-construct-signatures', title: 'Abstract Construct Signatures', explanation: 'Abstract class constructor types (TS 4.2).', category: '13. TypeScript 4.x Features' },
    { slug: 'tuple-spread-improvements', title: 'Tuple Spread Improvements', explanation: 'Better handling of spreads in tuples (TS 4.2).', category: '13. TypeScript 4.x Features' },
    { slug: 'template-string-type-improvements', title: 'Template String Improvements', explanation: 'Enhanced template literal type inference (TS 4.3).', category: '13. TypeScript 4.x Features' },
    { slug: 'override-keyword', title: 'override Modifier', explanation: 'Explicit method override checking (TS 4.3).', category: '13. TypeScript 4.x Features' },
    { slug: 'static-index-signatures', title: 'Static Index Signatures', explanation: 'Index signatures on static side of classes (TS 4.4).', category: '13. TypeScript 4.x Features' },
    { slug: 'exact-optional-properties', title: 'Exact Optional Properties', explanation: 'Distinguishing undefined from missing properties (TS 4.4).', category: '13. TypeScript 4.x Features' },
    { slug: 'tail-recursion', title: 'Tail Recursion Optimization', explanation: 'Better handling of recursive types (TS 4.5).', category: '13. TypeScript 4.x Features' },
    { slug: 'import-assertions', title: 'Import Assertions', explanation: 'Type assertions for imports (TS 4.5).', category: '13. TypeScript 4.x Features' },
    { slug: 'control-flow-analysis', title: 'Control Flow Analysis', explanation: 'Improved narrowing in destructuring (TS 4.6).', category: '13. TypeScript 4.x Features' },
    { slug: 'index-signature-labels', title: 'Index Signature Labels', explanation: 'Documenting index signatures (TS 4.7).', category: '13. TypeScript 4.x Features' },
    { slug: 'moduleSuffixes', title: 'moduleSuffixes', explanation: 'Custom module resolution suffixes (TS 4.7).', category: '13. TypeScript 4.x Features' },
    { slug: 'infer-extends', title: 'infer extends', explanation: 'Constraints on inferred types (TS 4.7).', category: '13. TypeScript 4.x Features' },
    { slug: 'variance-annotations', title: 'Variance Annotations', explanation: 'in/out variance annotations for type parameters (TS 4.7).', category: '13. TypeScript 4.x Features' },
    { slug: 'satisfies-operator', title: 'satisfies Operator', explanation: 'Type checking without widening (TS 4.9).', category: '13. TypeScript 4.x Features' },
    { slug: 'auto-accessors', title: 'Auto-Accessors', explanation: 'accessor keyword for properties (TS 4.9).', category: '13. TypeScript 4.x Features' },
    
    // 14. TYPESCRIPT 5.x FEATURES
    { slug: 'const-type-parameters', title: 'const Type Parameters', explanation: 'Inferring literal types with const (TS 5.0).', category: '14. TypeScript 5.x Features' },
    { slug: 'extends-multiple-config', title: 'extends Multiple Configs', explanation: 'Extending multiple tsconfig files (TS 5.0).', category: '14. TypeScript 5.x Features' },
    { slug: 'all-enums-are-union', title: 'Enum Union Types', explanation: 'All enums as discriminated unions (TS 5.0).', category: '14. TypeScript 5.x Features' },
    { slug: 'decorators-stage3', title: 'Stage 3 Decorators', explanation: 'ECMAScript decorators support (TS 5.0).', category: '14. TypeScript 5.x Features' },
    { slug: 'using-declarations', title: 'using Declarations', explanation: 'Explicit resource management (TS 5.2).', category: '14. TypeScript 5.x Features' },
    { slug: 'decorator-metadata', title: 'Decorator Metadata', explanation: 'Symbol.metadata for decorators (TS 5.2).', category: '14. TypeScript 5.x Features' },
    { slug: 'type-import-attributes', title: 'Import Attributes', explanation: 'with keyword for import assertions (TS 5.3).', category: '14. TypeScript 5.x Features' },
    { slug: 'resolution-bundler', title: 'Resolution Bundler', explanation: 'moduleResolution: "bundler" option (TS 5.0).', category: '14. TypeScript 5.x Features' },
    { slug: 'jsx-optimization', title: 'JSX Performance', explanation: 'Optimized JSX emit and factories (TS 5.1).', category: '14. TypeScript 5.x Features' },
    { slug: 'inferred-type-predicates', title: 'Inferred Type Predicates', explanation: 'Automatic type predicate inference (TS 5.5).', category: '14. TypeScript 5.x Features' },
    { slug: 'control-flow-narrowing', title: 'Control Flow Narrowing', explanation: 'Constant indexed access narrowing (TS 5.5).', category: '14. TypeScript 5.x Features' },
    { slug: 'regular-expression-syntax', title: 'RegExp Syntax Checking', explanation: 'ECMAScript regex validation (TS 5.5).', category: '14. TypeScript 5.x Features' },
    
    // 15. TSCONFIG.JSON
    { slug: 'compiler-options', title: 'Compiler Options', explanation: 'Understanding tsconfig.json compiler options.', category: '15. tsconfig.json' },
    { slug: 'strict-mode', title: 'Strict Mode', explanation: 'Enabling strict type checking options.', category: '15. tsconfig.json' },
    { slug: 'target-option', title: 'Target', explanation: 'ECMAScript target version for compilation.', category: '15. tsconfig.json' },
    { slug: 'module-option', title: 'Module', explanation: 'Module system: CommonJS, ES6, AMD, etc.', category: '15. tsconfig.json' },
    { slug: 'lib-option', title: 'Lib', explanation: 'Including type definitions for standard libraries.', category: '15. tsconfig.json' },
    { slug: 'jsx-option', title: 'JSX', explanation: 'JSX compilation options for React.', category: '15. tsconfig.json' },
    { slug: 'declaration-files-config', title: 'Declaration Files', explanation: 'Generating .d.ts declaration files.', category: '15. tsconfig.json' },
    { slug: 'source-maps', title: 'Source Maps', explanation: 'Generating source maps for debugging.', category: '15. tsconfig.json' },
    { slug: 'path-mapping', title: 'Path Mapping', explanation: 'Custom module paths with paths option.', category: '15. tsconfig.json' },
    { slug: 'project-references', title: 'Project References', explanation: 'Multi-project builds and dependencies.', category: '15. tsconfig.json' },
    
    // 16. TYPE NARROWING
    { slug: 'typeof-guards', title: 'typeof Guards', explanation: 'Narrowing with typeof checks.', category: '16. Type Narrowing' },
    { slug: 'instanceof-guards', title: 'instanceof Guards', explanation: 'Narrowing with instanceof checks.', category: '16. Type Narrowing' },
    { slug: 'in-operator-narrowing', title: 'in Operator Narrowing', explanation: 'Property existence checking for narrowing.', category: '16. Type Narrowing' },
    { slug: 'truthiness-narrowing', title: 'Truthiness Narrowing', explanation: 'Narrowing based on truthy/falsy values.', category: '16. Type Narrowing' },
    { slug: 'equality-narrowing', title: 'Equality Narrowing', explanation: 'Narrowing with === and !== checks.', category: '16. Type Narrowing' },
    { slug: 'custom-type-guards', title: 'Custom Type Guards', explanation: 'Creating type predicate functions.', category: '16. Type Narrowing' },
    { slug: 'assertion-functions', title: 'Assertion Functions', explanation: 'asserts keyword for assertion functions.', category: '16. Type Narrowing' },
    
    // 17. WORKING WITH REACT
    { slug: 'react-typescript-setup', title: 'React + TypeScript Setup', explanation: 'Setting up TypeScript with React projects.', category: '17. Working with React' },
    { slug: 'react-component-types', title: 'Component Types', explanation: 'Typing React components: FC, Component, props.', category: '17. Working with React' },
    { slug: 'react-hooks-types', title: 'Hooks Types', explanation: 'Typing useState, useEffect, useRef, etc.', category: '17. Working with React' },
    { slug: 'react-event-types', title: 'Event Types', explanation: 'Typing React events and handlers.', category: '17. Working with React' },
    { slug: 'react-children-types', title: 'Children Types', explanation: 'ReactNode, ReactElement, and children props.', category: '17. Working with React' },
    { slug: 'react-generic-components', title: 'Generic Components', explanation: 'Creating reusable generic React components.', category: '17. Working with React' },
    
    // 18. WORKING WITH NODE.JS
    { slug: 'nodejs-typescript-setup', title: 'Node.js + TypeScript Setup', explanation: 'Setting up TypeScript for Node.js projects.', category: '18. Working with Node.js' },
    { slug: 'nodejs-types', title: 'Node.js Types', explanation: 'Installing @types/node for Node.js type definitions.', category: '18. Working with Node.js' },
    { slug: 'express-typescript', title: 'Express with TypeScript', explanation: 'Typing Express applications, routes, and middleware.', category: '18. Working with Node.js' },
    { slug: 'async-await-node', title: 'Async/Await in Node', explanation: 'Typing promises and async functions.', category: '18. Working with Node.js' },
    
    // 19. TESTING WITH TYPESCRIPT
    { slug: 'jest-typescript', title: 'Jest with TypeScript', explanation: 'Setting up Jest for TypeScript testing.', category: '19. Testing' },
    { slug: 'testing-types', title: 'Testing Types', explanation: 'Type testing with expect-type and tsd.', category: '19. Testing' },
    { slug: 'mocking-types', title: 'Mocking with Types', explanation: 'Typing mocks, spies, and test doubles.', category: '19. Testing' },
    
    // 20. PERFORMANCE & OPTIMIZATION
    { slug: 'compilation-speed', title: 'Compilation Speed', explanation: 'Optimizing TypeScript compilation time.', category: '20. Performance' },
    { slug: 'incremental-compilation', title: 'Incremental Compilation', explanation: 'Using incremental builds for faster compilation.', category: '20. Performance' },
    { slug: 'type-checking-performance', title: 'Type Checking Performance', explanation: 'Improving type checking speed.', category: '20. Performance' },
    { slug: 'skipLibCheck', title: 'skipLibCheck', explanation: 'Skipping lib file checks for performance.', category: '20. Performance' },
    
    // 21. BEST PRACTICES
    { slug: 'type-safety', title: 'Type Safety', explanation: 'Writing type-safe code, avoiding any.', category: '21. Best Practices' },
    { slug: 'strict-null-checks', title: 'Strict Null Checks', explanation: 'Handling null and undefined properly.', category: '21. Best Practices' },
    { slug: 'type-coverage', title: 'Type Coverage', explanation: 'Measuring and improving type coverage.', category: '21. Best Practices' },
    { slug: 'naming-conventions', title: 'Naming Conventions', explanation: 'TypeScript naming standards and patterns.', category: '21. Best Practices' },
    { slug: 'code-organization', title: 'Code Organization', explanation: 'Structuring TypeScript projects effectively.', category: '21. Best Practices' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'Type-safe error handling patterns.', category: '21. Best Practices' },
    
    // 22. MIGRATION STRATEGIES
    { slug: 'js-to-ts-migration', title: 'JavaScript to TypeScript', explanation: 'Gradual migration strategies and best practices.', category: '22. Migration' },
    { slug: 'allowJs-option', title: 'allowJs Option', explanation: 'Mixing JavaScript and TypeScript files.', category: '22. Migration' },
    { slug: 'checkJs-option', title: 'checkJs Option', explanation: 'Type checking JavaScript files with JSDoc.', category: '22. Migration' },
    { slug: 'jsdoc-to-typescript', title: 'JSDoc to TypeScript', explanation: 'Converting JSDoc annotations to TypeScript.', category: '22. Migration' },
    
    // 23. TOOLING & ECOSYSTEM
    { slug: 'typescript-eslint', title: 'TypeScript ESLint', explanation: 'Linting TypeScript with typescript-eslint.', category: '23. Tooling' },
    { slug: 'ts-node', title: 'ts-node', explanation: 'Running TypeScript directly with ts-node.', category: '23. Tooling' },
    { slug: 'type-checking-ci', title: 'Type Checking in CI', explanation: 'Integrating type checks in CI/CD pipelines.', category: '23. Tooling' },
    { slug: 'typescript-vscode', title: 'VS Code Integration', explanation: 'TypeScript features in Visual Studio Code.', category: '23. Tooling' },
    { slug: 'definitely-typed', title: 'DefinitelyTyped', explanation: '@types packages and community type definitions.', category: '23. Tooling' },
    
    // 24. ADVANCED PATTERNS
    { slug: 'branded-types', title: 'Branded Types', explanation: 'Creating nominal types with branding.', category: '24. Advanced Patterns' },
    { slug: 'builder-pattern', title: 'Builder Pattern', explanation: 'Implementing type-safe builders.', category: '24. Advanced Patterns' },
    { slug: 'finite-state-machines', title: 'Finite State Machines', explanation: 'Modeling state machines with types.', category: '24. Advanced Patterns' },
    { slug: 'phantom-types', title: 'Phantom Types', explanation: 'Using phantom type parameters for compile-time safety.', category: '24. Advanced Patterns' },
    { slug: 'type-level-programming', title: 'Type-Level Programming', explanation: 'Advanced type manipulation and computation.', category: '24. Advanced Patterns' },
    { slug: 'opaque-types', title: 'Opaque Types', explanation: 'Hiding implementation details with type branding.', category: '24. Advanced Patterns' },
    { slug: 'higher-kinded-types', title: 'Higher-Kinded Types', explanation: 'Simulating HKTs in TypeScript for advanced abstractions.', category: '24. Advanced Patterns' },
    { slug: 'algebraic-data-types', title: 'Algebraic Data Types', explanation: 'Sum types and product types in TypeScript.', category: '24. Advanced Patterns' },
  ]
};
