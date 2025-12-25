import { FileCode } from 'lucide-react';

export const typescriptCheatsheet = {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Static typing for JavaScript with advanced patterns and best practices',
    icon: FileCode,
    colorTheme: 'blue' as const,
    sections: [
        {
            title: 'Basic Types',
            commands: [
                {
                    command: 'Primitives',
                    description: 'Core data types',
                    usage: 'string, number, boolean, any',
                    example: 'let name: string = "TS";\nlet count: number = 42;\nlet isDone: boolean = false;\nlet data: any = "anything";',
                },
                {
                    command: 'Special Types',
                    description: 'Special TypeScript types',
                    usage: 'unknown, never, void, null, undefined',
                    example: 'let value: unknown = "check me";\nlet error: never = throw Error();\nlet result: void = console.log("done");',
                },
                {
                    command: 'Arrays & Tuples',
                    description: 'Typed lists and fixed-length arrays',
                    usage: 'Type[], [Type, Type]',
                    example: 'let list: number[] = [1, 2, 3];\nlet tuple: [string, number] = ["hello", 10];\nlet matrix: number[][] = [[1,2], [3,4]];',
                },
                {
                    command: 'Type Aliases',
                    description: 'Custom names for types',
                    usage: 'type Name = ...',
                    example: 'type ID = string | number;\ntype Point = { x: number; y: number };\ntype Callback = (error: Error | null, data?: any) => void;',
                },
            ],
        },
        {
            title: 'Interfaces',
            commands: [
                {
                    command: 'Interface',
                    description: 'Shape of an object',
                    usage: 'interface Name { ... }',
                    example: 'interface User {\n  name: string;\n  age?: number; // Optional\n  readonly id: number;\n  [key: string]: any; // Index signature\n}',
                },
                {
                    command: 'Extending',
                    description: 'Inheriting properties',
                    usage: 'interface A extends B',
                    example: 'interface Admin extends User {\n  role: string;\n  permissions: string[];\n}',
                },
                {
                    command: 'Interface vs Type',
                    description: 'When to use each',
                    usage: 'interface for objects, type for unions',
                    example: 'interface Config { url: string; }\ntype Status = "loading" | "success" | "error";\ntype UserWithConfig = User & Config;',
                },
            ],
        },
        {
            title: 'Generics',
            commands: [
                {
                    command: 'Generic Function',
                    description: 'Reusable type placeholders',
                    usage: '<T>(arg: T): T',
                    example: 'function identity<T>(arg: T): T {\n  return arg;\n}\nlet n = identity<number>(5);\nlet s = identity("hello");',
                },
                {
                    command: 'Generic Interface',
                    description: 'Reusable interface shapes',
                    usage: 'interface Box<T>',
                    example: 'interface Box<T> {\n  value: T;\n  getValue(): T;\n}\nlet box: Box<string> = { value: "Gift", getValue: () => "Gift" };',
                },
                {
                    command: 'Generic Constraints',
                    description: 'Limit generic types',
                    usage: '<T extends Type>',
                    example: 'interface Lengthwise { length: number; }\nfunction logLength<T extends Lengthwise>(arg: T) {\n  console.log(arg.length);\n}',
                },
                {
                    command: 'Generic Classes',
                    description: 'Reusable class patterns',
                    usage: 'class Box<T>',
                    example: 'class Box<T> {\n  private content: T;\n  constructor(value: T) {\n    this.content = value;\n  }\n  getValue(): T { return this.content; }\n}',
                },
            ],
        },
        {
            title: 'Utility Types',
            commands: [
                {
                    command: 'Partial<T>',
                    description: 'Make all properties optional',
                    usage: 'Partial<User>',
                    example: 'function updateUser(id: number, data: Partial<User>) {\n  // All properties optional\n  return { ...existingUser, ...data };\n}',
                },
                {
                    command: 'Required<T>',
                    description: 'Make all properties required',
                    usage: 'Required<User>',
                    example: 'type CompleteUser = Required<Partial<User>>;',
                },
                {
                    command: 'Pick<T, K>',
                    description: 'Select subset of keys',
                    usage: 'Pick<User, "name" | "id">',
                    example: 'type UserPreview = Pick<User, "name" | "email">;\nconst preview: UserPreview = { name: "John", email: "john@example.com" };',
                },
                {
                    command: 'Omit<T, K>',
                    description: 'Remove subset of keys',
                    usage: 'Omit<User, "password">',
                    example: 'type PublicUser = Omit<User, "password" | "token">;',
                },
                {
                    command: 'Record<K, V>',
                    description: 'Key-value map type',
                    usage: 'Record<string, number>',
                    example: 'const scores: Record<string, number> = {\n  "Alice": 10,\n  "Bob": 5\n};\ntype StringMap<T> = Record<string, T>;',
                },
                {
                    command: 'Readonly<T>',
                    description: 'Make properties readonly',
                    usage: 'Readonly<User>',
                    example: 'const config: Readonly<Config> = { url: "https://api.com" };\n// config.url = "new"; // Error!',
                },
            ],
        },
        {
            title: 'Advanced Types',
            commands: [
                {
                    command: 'Union & Intersection',
                    description: 'Combine types',
                    usage: 'Type | Type, Type & Type',
                    example: 'type ID = string | number;\ntype AdminUser = User & { admin: true };\nfunction processId(id: ID) {\n  if (typeof id === "string") return id.toUpperCase();\n  return id.toString();\n}',
                },
                {
                    command: 'Conditional Types',
                    description: 'Types based on conditions',
                    usage: 'T extends U ? X : Y',
                    example: 'type NonNullable<T> = T extends null | undefined ? never : T;\ntype ApiResponse<T> = T extends string ? { message: T } : { data: T };',
                },
                {
                    command: 'Mapped Types',
                    description: 'Transform property types',
                    usage: '{ [K in keyof T]: U }',
                    example: 'type Optional<T> = { [K in keyof T]?: T[K] };\ntype Stringify<T> = { [K in keyof T]: string };',
                },
                {
                    command: 'Template Literal Types',
                    description: 'String manipulation in types',
                    usage: '`template${Type}literal`',
                    example: 'type EventName = `on${Capitalize<string>}`;\ntype ButtonEvents = `onClick${"Capture" | ""}`;\ntype ApiEndpoint = `/api/${string}`;',
                },
                {
                    command: 'Enums',
                    description: 'Named constants',
                    usage: 'enum Name { val = X }',
                    example: 'enum Status {\n  Active = "ACTIVE",\n  Inactive = "INACTIVE"\n}\nconst status: Status = Status.Active;',
                },
                {
                    command: 'unknown vs any',
                    description: 'Safe vs unsafe dynamic type',
                    usage: 'unknown, any',
                    example: 'function processValue(value: unknown) {\n  if (typeof value === "string") {\n    return value.toUpperCase(); // Safe\n  }\n  return value;\n}\nlet risky: any = doAnything(); // No checks',
                },
            ],
        },
        {
            title: 'Classes',
            commands: [
                {
                    command: 'Modifiers',
                    description: 'Access control',
                    usage: 'public, private, protected, readonly',
                    example: 'class Car {\n  private speed: number = 0;\n  readonly model: string;\n  protected brand: string;\n  public color: string;\n  constructor(model: string) {\n    this.model = model;\n  }\n}',
                },
                {
                    command: 'Abstract Class',
                    description: 'Base class awaiting implementation',
                    usage: 'abstract class Name { abstract m() }',
                    example: 'abstract class Shape {\n  abstract area(): number;\n  abstract perimeter(): number;\n  describe(): string {\n    return `Shape with area ${this.area()}`;\n  }\n}',
                },
                {
                    command: 'Implements',
                    description: 'Class satisfying an interface',
                    usage: 'class C implements I',
                    example: 'interface Drawable {\n  draw(): void;\n}\nclass Circle implements Drawable {\n  constructor(private radius: number) {}\n  draw(): void {\n    console.log(`Drawing circle with radius ${this.radius}`);\n  }\n}',
                },
                {
                    command: 'Getters & Setters',
                    description: 'Control property access',
                    usage: 'get/set methods',
                    example: 'class Person {\n  private _name: string = "";\n  get name(): string { return this._name; }\n  set name(value: string) {\n    if (value.length > 0) this._name = value;\n  }\n}',
                },
                {
                    command: 'Static Members',
                    description: 'Class-level properties and methods',
                    usage: 'static property/method',
                    example: 'class MathUtils {\n  static PI = 3.14159;\n  static circleArea(radius: number): number {\n    return this.PI * radius * radius;\n  }\n}\nconsole.log(MathUtils.circleArea(5));',
                },
            ],
        },
        {
            title: 'Type Narrowing',
            commands: [
                {
                    command: 'typeof / instanceof',
                    description: 'Runtime checks',
                    usage: 'if (typeof x === "string")',
                    example: 'function processValue(value: string | number) {\n  if (typeof value === "string") {\n    return value.toUpperCase();\n  }\n  return value.toFixed(2);\n}\n\nfunction handleInput(input: HTMLInputElement | HTMLTextAreaElement) {\n  if (input instanceof HTMLInputElement) {\n    return input.value;\n  }\n  return input.value;\n}',
                },
                {
                    command: 'Type Predicates',
                    description: 'Custom type guards',
                    usage: 'arg is Type',
                    example: 'function isString(value: unknown): value is string {\n  return typeof value === "string";\n}\nfunction isFish(pet: Fish | Bird): pet is Fish {\n  return (pet as Fish).swim !== undefined;\n}',
                },
                {
                    command: 'Discriminated Unions',
                    description: 'Common property for type narrowing',
                    usage: 'type: "value"',
                    example: 'interface Circle { kind: "circle"; radius: number; }\ninterface Square { kind: "square"; side: number; }\ntype Shape = Circle | Square;\nfunction getArea(shape: Shape): number {\n  switch (shape.kind) {\n    case "circle": return Math.PI * shape.radius ** 2;\n    case "square": return shape.side ** 2;\n  }\n}',
                },
                {
                    command: 'Assertion',
                    description: 'Override inference',
                    usage: 'as Type, <>Type',
                    example: 'const input = document.getElementById("input") as HTMLInputElement;\nconst canvas = <HTMLCanvasElement>document.getElementById("canvas");\n// Non-null assertion\nconst element = document.querySelector("button")!;',
                },
            ],
        },
        {
            title: 'Functions',
            commands: [
                {
                    command: 'Optional/Default',
                    description: 'Argument flexibility',
                    usage: 'arg?: Type, arg = val',
                    example: 'function greet(name: string = "Guest", age?: number): string {\n  if (age !== undefined) {\n    return `${name} is ${age} years old`;\n  }\n  return `Hello, ${name}!`;\n}',
                },
                {
                    command: 'Rest Parameters',
                    description: 'Variable arguments',
                    usage: '...args: Type[]',
                    example: 'function sum(...numbers: number[]): number {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nfunction combine(separator: string, ...parts: string[]): string {\n  return parts.join(separator);\n}',
                },
                {
                    command: 'Function Overloads',
                    description: 'Multiple signatures',
                    usage: 'function name(s: string): void;',
                    example: 'function makeDate(timestamp: number): Date;\nfunction makeDate(d: number, m: number, y: number): Date;\nfunction makeDate(dOrTimestamp: number, m?: number, y?: number): Date {\n  if (m !== undefined && y !== undefined) {\n    return new Date(y, m, dOrTimestamp);\n  }\n  return new Date(dOrTimestamp);\n}',
                },
                {
                    command: 'Function Types',
                    description: 'Typed function signatures',
                    usage: '(args: Types) => ReturnType',
                    example: 'type EventHandler<T> = (event: T) => void;\ntype Validator<T> = (value: T) => boolean;\nconst validateEmail: Validator<string> = (email) => email.includes("@");',
                },
            ],
        },
        {
            title: 'Async & Promise Types',
            commands: [
                {
                    command: 'Promise<T>',
                    description: 'Async operation result type',
                    usage: 'Promise<Type>',
                    example: 'async function fetchData(): Promise<User> {\n  const response = await fetch("/api/user");\n  return response.json();\n}',
                },
                {
                    command: 'Async/Await Types',
                    description: 'Type-safe async operations',
                    usage: 'async (): Promise<T>',
                    example: 'async function processData(id: number): Promise<ProcessedData> {\n  const data = await fetchData(id);\n  return transform(data);\n}',
                },
                {
                    command: 'Promise.all Types',
                    description: 'Multiple async operations',
                    usage: 'Promise.all<[T1, T2]>',
                    example: 'async function loadUserData(): Promise<[User, Preferences]> {\n  return Promise.all([\n    fetchUser(),\n    fetchPreferences()\n  ]);\n}',
                },
            ],
        },
        {
            title: 'Decorators & Metadata',
            commands: [
                {
                    command: 'Class Decorator',
                    description: 'Modify class behavior',
                    usage: '@decorator',
                    example: 'function sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}\n\n@sealed\nclass Greeter {}',
                },
                {
                    command: 'Method Decorator',
                    description: 'Modify method behavior',
                    usage: '@decorator',
                    example: 'function measure(target: any, key: string, descriptor: PropertyDescriptor) {\n  const original = descriptor.value;\n  descriptor.value = function(...args: any[]) {\n    console.time(key);\n    const result = original.apply(this, args);\n    console.timeEnd(key);\n    return result;\n  };\n}',
                },
                {
                    command: 'Property Decorator',
                    description: 'Modify property behavior',
                    usage: '@decorator',
                    example: 'function format(target: any, key: string) {\n  let value = target[key];\n  const getter = () => value;\n  const setter = (newVal: string) => {\n    value = newVal.trim();\n  };\n  Object.defineProperty(target, key, { get: getter, set: setter });\n}',
                },
            ],
        },
        {
            title: 'Modules & Namespaces',
            commands: [
                {
                    command: 'Import/Export',
                    description: 'Module system',
                    usage: 'import/export',
                    example: '// file.ts\nexport interface User { name: string; }\nexport const API_URL = "https://api.com";\n\n// consumer.ts\nimport { User, API_URL } from "./file";\nimport type { User } from "./file";',
                },
                {
                    command: 'Namespace',
                    description: 'Organize code',
                    usage: 'namespace Name { }',
                    example: 'namespace Validation {\n  export interface Validator {\n    isValid(value: string): boolean;\n  }\n  \n  export class EmailValidator implements Validator {\n    isValid(value: string): boolean {\n      return /@/.test(value);\n    }\n  }\n}',
                },
                {
                    command: 'Dynamic Imports',
                    description: 'Load modules on demand',
                    usage: 'import()',
                    example: 'async function loadModule() {\n  const { utils } = await import("./heavy-module");\n  return utils.process();\n}',
                },
            ],
        },
        {
            title: 'Configuration (tsconfig)',
            commands: [
                {
                    command: 'strict',
                    description: 'Enable strict type-checking options',
                    usage: '"strict": true',
                    example: '{\n  "compilerOptions": {\n    "strict": true,\n    "strictNullChecks": true,\n    "noImplicitAny": true,\n    "noImplicitReturns": true\n  }\n}',
                },
                {
                    command: 'target / lib',
                    description: 'Output version and libraries',
                    usage: '"target": "ES6"',
                    example: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "lib": ["DOM", "ESNext"],\n    "module": "ESNext"\n  }\n}',
                },
                {
                    command: 'path mapping',
                    description: 'Custom import paths',
                    usage: '"paths": { "@/*": ["src/*"] }',
                    example: '{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"],\n      "@/components/*": ["src/components/*"]\n    }\n  }\n}',
                },
                {
                    command: 'jsx / esModuleInterop',
                    description: 'React and module compatibility',
                    usage: '"jsx": "react-jsx"',
                    example: '{\n  "compilerOptions": {\n    "jsx": "react-jsx",\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true\n  }\n}',
                },
            ],
        },
        {
            title: 'Practical Patterns',
            commands: [
                {
                    command: 'Builder Pattern',
                    description: 'Fluent object construction',
                    usage: 'class Builder { }',
                    example: 'class QueryBuilder {\n  private query = "";\n  select(fields: string[]): this {\n    this.query += `SELECT ${fields.join(", ")} `;\n    return this;\n  }\n  from(table: string): this {\n    this.query += `FROM ${table} `;\n    return this;\n  }\n  build(): string { return this.query; }\n}\n\nconst sql = new QueryBuilder()\n  .select(["name", "email"])\n  .from("users")\n  .build();',
                },
                {
                    command: 'Factory Pattern',
                    description: 'Object creation with types',
                    usage: 'function create<T>()',
                    example: 'interface Vehicle { drive(): void; }\nclass Car implements Vehicle { drive() { console.log("Driving car"); } }\nclass Bike implements Vehicle { drive() { console.log("Riding bike"); } }\n\ntype VehicleType = "car" | "bike";\nfunction createVehicle(type: VehicleType): Vehicle {\n  switch (type) {\n    case "car": return new Car();\n    case "bike": return new Bike();\n    default: throw new Error("Unknown vehicle type");\n  }\n}',
                },
                {
                    command: 'Repository Pattern',
                    description: 'Data access abstraction',
                    usage: 'interface Repository<T>',
                    example: 'interface Repository<T> {\n  findById(id: string): Promise<T | null>;\n  save(entity: T): Promise<T>;\n  delete(id: string): Promise<void>;\n}\n\nclass UserRepository implements Repository<User> {\n  async findById(id: string): Promise<User | null> {\n    // Database logic\n    return null;\n  }\n  // ... other methods\n}',
                },
                {
                    command: 'Middleware Pattern',
                    description: 'Request processing pipeline',
                    usage: 'type Middleware<T>',
                    example: 'type Request = { path: string; method: string; };\ntype Middleware = (req: Request, next: () => void) => void;\n\nclass Router {\n  private middlewares: Middleware[] = [];\n  \n  use(middleware: Middleware): this {\n    this.middlewares.push(middleware);\n    return this;\n  }\n  \n  handle(req: Request): void {\n    const stack = this.middlewares;\n    let index = 0;\n    \n    const next = (): void => {\n      if (index >= stack.length) return;\n      const middleware = stack[index++];\n      middleware(req, next);\n    };\n    \n    next();\n  }\n}',
                },
            ],
        },
        {
            title: 'Performance Optimization',
            commands: [
                {
                    command: 'Type Inference',
                    description: 'Let TypeScript infer types',
                    usage: 'let instead of explicit types',
                    example: '// Good - inferred\nlet user = { name: "John", age: 25 };\n\n// Bad - overly explicit\nlet user: { name: string; age: number } = { name: "John", age: 25 };',
                },
                {
                    command: 'const assertions',
                    description: 'Create immutable literal types',
                    usage: 'as const',
                    example: 'const config = {\n  apiUrl: "https://api.com",\n  timeout: 5000\n} as const;\n// config.apiUrl is now "https://api.com" literal type',
                },
                {
                    command: 'satisfies operator',
                    description: 'Check type without changing it',
                    usage: 'satisfies Type',
                    example: 'const config = {\n  apiUrl: "https://api.com",\n  timeout: 5000\n} satisfies Config;\n// Keeps original types but validates against Config',
                },
                {
                    command: 'Brand Types',
                    description: 'Create nominal types',
                    usage: 'interface Brand { __brand: string }',
                    example: 'type UserId = string & { __brand: "UserId" };\nfunction createUserId(id: string): UserId {\n  return id as UserId;\n}\n// Prevents mixing string and UserId',
                },
            ],
        },
        {
            title: 'TypeScript with React',
            commands: [
                {
                    command: 'Component Props',
                    description: 'Type React component props',
                    usage: 'interface Props { }',
                    example: 'interface ButtonProps {\n  children: React.ReactNode;\n  onClick?: () => void;\n  variant?: "primary" | "secondary";\n}\n\nconst Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {\n  return <button onClick={onClick} className={variant}>{children}</button>;\n};',
                },
                {
                    command: 'Generic Components',
                    description: 'Reusable generic components',
                    usage: 'interface Props<T>',
                    example: 'interface ListProps<T> {\n  items: T[];\n  renderItem: (item: T) => React.ReactNode;\n}\n\nfunction List<T>({ items, renderItem }: ListProps<T>) {\n  return <ul>{items.map(renderItem)}</ul>;\n}',
                },
                {
                    command: 'useRef Typing',
                    description: 'Type React refs properly',
                    usage: 'useRef<Type>()',
                    example: 'const inputRef = useRef<HTMLInputElement>(null);\nconst divRef = useRef<HTMLDivElement>(null);\n\nuseEffect(() => {\n  inputRef.current?.focus();\n}, []);',
                },
                {
                    command: 'Custom Hooks Types',
                    description: 'Type custom React hooks',
                    usage: 'function useHook<T>()',
                    example: 'function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {\n  const [storedValue, setStoredValue] = useState<T>(initialValue);\n  // ... implementation\n  return [storedValue, setStoredValue];\n}',
                },
                {
                    command: 'Context Types',
                    description: 'Type React context',
                    usage: 'createContext<Type>()',
                    example: 'interface UserContextType {\n  user: User | null;\n  login: (email: string, password: string) => Promise<void>;\n  logout: () => void;\n}\n\nconst UserContext = createContext<UserContextType | null>(null);',
                },
                {
                    command: 'Event Handlers',
                    description: 'Type React event handlers',
                    usage: 'React.ChangeEvent<HTMLInputElement>',
                    example: 'const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n  console.log(e.target.value);\n};\n\nconst handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n  e.preventDefault();\n  // ... form logic\n};',
                },
            ],
        },
        {
            title: 'Testing with TypeScript',
            commands: [
                {
                    command: 'Jest Types',
                    description: 'Type Jest test functions',
                    usage: 'describe, it, expect',
                    example: 'describe("UserService", () => {\n  it("should create user", async () => {\n    const user = await createUser({ name: "John" });\n    expect(user.name).toBe("John");\n  });\n});',
                },
                {
                    command: 'Mock Types',
                    description: 'Type mocked functions',
                    usage: 'jest.Mock<Function>',
                    example: 'const mockApi = jest.fn<Promise<User>, [string]>()\n  .mockResolvedValue({ id: "1", name: "John" });\n\n// Usage in test\nconst result = await mockApi("user-id");\nexpect(result.name).toBe("John");',
                },
                {
                    command: 'Test Utilities',
                    description: 'Create type-safe test utilities',
                    usage: 'function createMock<T>()',
                    example: 'function createMockUser(overrides: Partial<User> = {}): User {\n  return {\n    id: "test-id",\n    name: "Test User",\n    email: "test@example.com",\n    ...overrides\n  };\n}',
                },
                {
                    command: 'Component Testing',
                    description: 'Type React component tests',
                    usage: 'render, screen from testing-library',
                    example: 'import { render, screen } from "@testing-library/react";\n\ntest("renders button", () => {\n  render(<Button onClick={jest.fn()}>Click me</Button>);\n  const button = screen.getByRole("button", { name: "Click me" });\n  expect(button).toBeInTheDocument();\n});',
                },
            ],
        },
        {
            title: 'Advanced Patterns',
            commands: [
                {
                    command: 'Fluent Interface',
                    description: 'Chain method calls with types',
                    usage: 'return this for chaining',
                    example: 'class QueryBuilder {\n  private query = "";\n  select(fields: string[]): this {\n    this.query += `SELECT ${fields.join(", ")} `;\n    return this;\n  }\n  from(table: string): this {\n    this.query += `FROM ${table} `;\n    return this;\n  }\n  where(condition: string): this {\n    this.query += `WHERE ${condition} `;\n    return this;\n  }\n  build(): string { return this.query; }\n}',
                },
                {
                    command: 'State Machine Types',
                    description: 'Type-safe state machines',
                    usage: 'type State = "idle" | "loading" | "success" | "error"',
                    example: 'type State = "idle" | "loading" | "success" | "error";\ntype Event = { type: "fetch" } | { type: "success" } | { type: "error" };\n\ntype StateMachine = {\n  state: State;\n  transition: (event: Event) => StateMachine;\n};\n\nfunction createMachine(initial: State): StateMachine {\n  return {\n    state: initial,\n    transition(event) {\n      switch (this.state) {\n        case "idle":\n          return event.type === "fetch" ? createMachine("loading") : this;\n        case "loading":\n          return event.type === "success" ? createMachine("success") :\n                 event.type === "error" ? createMachine("error") : this;\n        default:\n          return this;\n      }\n    }\n  };\n}',
                },
                {
                    command: 'Type-safe Events',
                    description: 'Typed event emitters',
                    usage: 'interface Events { event: (data: Type) => void }',
                    example: 'interface AppEvents {\n  userLoggedIn: (user: User) => void;\n  dataReceived: (data: ApiResponse) => void;\n  error: (error: Error) => void;\n}\n\nclass EventEmitter<T extends Record<string, any[]>> {\n  private listeners = {} as Record<keyof T, Array<(...args: any[]) => void>>;\n  \n  on<K extends keyof T>(event: K, listener: (...args: T[K]) => void): this {\n    if (!this.listeners[event]) this.listeners[event] = [];\n    this.listeners[event].push(listener);\n    return this;\n  }\n  \n  emit<K extends keyof T>(event: K, ...args: T[K]): void {\n    this.listeners[event]?.forEach(listener => listener(...args));\n  }\n}',
                },
                {
                    command: 'Recursive Types',
                    description: 'Self-referencing type definitions',
                    usage: 'interface Node { children: Node[] }',
                    example: 'interface TreeNode {\n  value: string;\n  children: TreeNode[];\n}\n\ninterface JsonValue {\n  string: string;\n  number: number;\n  boolean: boolean;\n  null: null;\n  array: JsonValue[];\n  object: { [key: string]: JsonValue };\n}\n\ntype JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };',
                },
                {
                    command: 'Type Guards & Predicates',
                    description: 'Advanced type guard patterns',
                    usage: 'function isType<T>(value: unknown): value is T',
                    example: 'function hasProperty<K extends string>(obj: unknown, prop: K): obj is Record<K, unknown> {\n  return typeof obj === "object" && obj !== null && prop in obj;\n}\n\nfunction isUser(obj: unknown): obj is User {\n  return hasProperty(obj, "name") && \n         hasProperty(obj, "email") &&\n         typeof obj.name === "string" &&\n         typeof obj.email === "string";\n}',
                },
            ],
        },
        {
            title: 'Migration & Best Practices',
            commands: [
                {
                    command: 'JS to TS Migration',
                    description: 'Gradual TypeScript adoption',
                    usage: 'allowJs: true in tsconfig',
                    example: '// tsconfig.json\n{\n  "compilerOptions": {\n    "allowJs": true,\n    "checkJs": false,\n    "noEmit": true\n  }\n}\n\n// Gradually rename .js files to .ts\n// Add types as needed',
                },
                {
                    command: 'Strict Mode Setup',
                    description: 'Enable strict type checking',
                    usage: 'strict: true in tsconfig',
                    example: '{\n  "compilerOptions": {\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "strictFunctionTypes": true,\n    "noImplicitReturns": true,\n    "noFallthroughCasesInSwitch": true\n  }\n}',
                },
                {
                    command: 'ESLint + TypeScript',
                    description: 'Lint TypeScript code',
                    usage: '@typescript-eslint/parser',
                    example: '// .eslintrc.json\n{\n  "parser": "@typescript-eslint/parser",\n  "plugins": ["@typescript-eslint"],\n  "extends": [\n    "eslint:recommended",\n    "@typescript-eslint/recommended"\n  ],\n  "rules": {\n    "@typescript-eslint/no-unused-vars": "error",\n    "@typescript-eslint/explicit-function-return-type": "warn"\n  }\n}',
                },
                {
                    command: 'Performance Tips',
                    description: 'Optimize TypeScript compilation',
                    usage: 'incremental, project references',
                    example: '{\n  "compilerOptions": {\n    "incremental": true,\n    "tsBuildInfoFile": ".tsbuildinfo",\n    "skipLibCheck": true,\n    "composite": true\n  }\n}\n\n// Use project references for large codebases\n// tsconfig.base.json -> tsconfig.json -> tsconfig.dev.json',
                },
                {
                    command: 'Type-only Imports',
                    description: 'Import only types when possible',
                    usage: 'import type',
                    example: '// Good - type-only import\nimport type { User, Config } from "./types";\nimport { userService } from "./services";\n\n// Bad - runtime import of types\nimport { User, Config, userService } from "./types-and-services";',
                },
                {
                    command: 'Avoid Type Assertions',
                    description: 'Prefer type guards over assertions',
                    usage: 'if (typeof x === "string")',
                    example: '// Good - type guard\nfunction processValue(value: unknown) {\n  if (typeof value === "string") {\n    return value.toUpperCase(); // TypeScript knows it\'s string\n  }\n  return String(value);\n}\n\n// Bad - assertion\nfunction processValueBad(value: unknown) {\n  return (value as string).toUpperCase(); // Unsafe\n}',
                },
            ],
        },
        {
            title: 'Tooling & Ecosystem',
            commands: [
                {
                    command: 'TypeScript Compiler API',
                    description: 'Programmatically work with TypeScript',
                    usage: 'import ts from "typescript"',
                    example: 'import * as ts from "typescript";\n\nconst program = ts.createProgram(["file.ts"], {});\nconst checker = program.getTypeChecker();\n\n// Visit nodes\nconst visit = (node: ts.Node) => {\n  if (ts.isCallExpression(node)) {\n    // Analyze function calls\n  }\n  ts.forEachChild(node, visit);\n};\n\nvisit(program.getSourceFile("file.ts")!);',
                },
                {
                    command: 'ts-node',
                    description: 'Run TypeScript directly',
                    usage: 'ts-node file.ts',
                    example: '/* ts-node-dev for development */\n// package.json\n{\n  "scripts": {\n    "dev": "ts-node-dev --respawn src/index.ts",\n    "start": "ts-node src/index.ts"\n  },\n  "devDependencies": {\n    "ts-node": "^10.0.0",\n    "ts-node-dev": "^2.0.0"\n  }\n}',
                },
                {
                    command: 'TypeScript Paths',
                    description: 'Custom module resolution',
                    usage: 'paths and baseUrl in tsconfig',
                    example: '{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"],\n      "@/components/*": ["src/components/*"],\n      "@/utils/*": ["src/utils/*"]\n    }\n  }\n}\n\n// Usage\nimport Button from "@/components/Button";\nimport { format } from "@/utils/date";',
                },
                {
                    command: 'Declaration Files',
                    description: 'Create .d.ts files for JavaScript',
                    usage: 'declare module',
                    example: '// types/my-library.d.ts\ndeclare module "my-library" {\n  export function initialize(config: Config): void;\n  export class MyClass {\n    constructor(options: Options);\n    doSomething(): Result;\n  }\n}\n\n// Global augmentation\ndeclare global {\n  interface Window {\n    myGlobalProperty: string;\n  }\n}',
                },
            ],
        },
        {
            title: 'Error Handling & Debugging',
            commands: [
                {
                    command: 'Error Types',
                    description: 'Create typed error classes',
                    usage: 'class CustomError extends Error',
                    example: 'class ValidationError extends Error {\n  constructor(\n    public field: string,\n    public message: string,\n    public code: string\n  ) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}\n\nclass NetworkError extends Error {\n  constructor(\n    public status: number,\n    message: string\n  ) {\n    super(message);\n    this.name = "NetworkError";\n  }\n}',
                },
                {
                    command: 'Result Pattern',
                    description: 'Handle errors without exceptions',
                    usage: 'type Result<T, E = Error>',
                    example: 'type Result<T, E = Error> = \n  | { success: true; data: T }\n  | { success: false; error: E };\n\nasync function safeFetch<T>(url: string): Promise<Result<T>> {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return { success: true, data };\n  } catch (error) {\n    return { success: false, error: error as Error };\n  }\n}',
                },
                {
                    command: 'Type-safe API Client',
                    description: 'Typed HTTP client with error handling',
                    usage: 'interface ApiResponse<T>',
                    example: 'interface ApiResponse<T> {\n  data?: T;\n  error?: string;\n  status: number;\n}\n\nclass ApiClient {\n  async get<T>(endpoint: string): Promise<T> {\n    const response = await fetch(`/api${endpoint}`);\n    if (!response.ok) {\n      throw new Error(`API Error: ${response.status}`);\n    }\n    return response.json();\n  }\n  \n  async post<T>(endpoint: string, data: unknown): Promise<T> {\n    const response = await fetch(`/api${endpoint}`, {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(data)\n    });\n    return response.json();\n  }\n}',
                },
                {
                    command: 'Debug Types',
                    description: 'Helper types for debugging',
                    usage: 'type Debug<T> = { [K in keyof T]: T[K] }',
                    example: '// Show all properties of a type\ntype Debug<T> = {\n  [K in keyof T]: T[K];\n};\n\n// Check if type extends another\ntype IsString<T> = T extends string ? true : false;\n\n// Get keys of object type\ntype Keys<T> = keyof T;\n\n// Get values of object type\ntype Values<T> = T[keyof T];\n\n// Extract array element type\ntype ArrayElement<T> = T extends (infer U)[] ? U : never;',
                },
            ],
        },
    ],
};
