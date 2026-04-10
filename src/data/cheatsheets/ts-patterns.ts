import {  Layers, Target, Package, Factory, Shield, Puzzle, GitBranch, Repeat, Box, Database, Globe, Terminal, Wrench, Brain, Cog, Network, TreePine, GitMerge, GitFork, ZapOff, RefreshCw, CheckCircle, AlertCircle, Info, Settings, Layout, Grid3x3, List, Filter, Search, Menu, Plus, Minus, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Move, Maximize2, Minimize2, Split, Layers3, PackageOpen, Archive, FolderOpen, Folder, File, FileText, FileCode, FilePlus, FileMinus, Edit, Copy, Trash2, Download, Upload, Share2, Link, Unlink, Lock, Unlock, Eye, EyeOff, User, Users, UserPlus, UserMinus, Heart, Star, Bookmark, Flag, Tag, Hash, AtSign, Percent, DollarSign, Calendar, Clock, Timer, Hourglass, Sun, Moon, Cloud, CloudRain, CloudSnow, Umbrella, Wind, Thermometer, Gauge, Activity, TrendingUp, TrendingDown, BarChart, PieChart, LineChart, Zap, Battery, Wifi, Bluetooth, Usb, HardDrive, Cpu, Monitor, Smartphone, Tablet, Laptop, Headphones, Camera, Video, Image, Music, Play, Pause, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Cross, Divide, Equal, Infinity } from 'lucide-react';

export const tsPatternsCheatsheet = {
  id: 'ts-patterns',
  name: 'TypeScript Design Patterns',
  description: 'Comprehensive TypeScript design patterns with type-safe implementations and modern features',
  icon: FileCode,
  colorTheme: 'blue' as const,
  sections: [
    // CREATIONAL PATTERNS
    {
      title: 'Creational Patterns',
      commands: [
        {
          command: 'Constructor Pattern',
          description: 'Type-safe object creation with constructors',
          usage: 'class with typed properties and constructor',
          example: 'class User {\n  constructor(\n    public readonly id: string,\n    public name: string,\n    private email: string,\n    public age?: number\n  ) {}\n  \n  getInfo(): string {\n    return `${this.name} (${this.id})`;\n  }\n}\n\nconst user = new User("1", "John", "john@example.com", 30);',
        },
        {
          command: 'Module Pattern',
          description: 'Encapsulated module with TypeScript features',
          usage: 'namespace or module with exports',
          example: 'namespace App {\n  export interface Config {\n    apiUrl: string;\n    timeout: number;\n  }\n  \n  export const config: Config = {\n    apiUrl: "https://api.example.com",\n    timeout: 5000\n  };\n  \n  export function init(): void {\n    console.log("App initialized");\n  }\n}',
        },
        {
          command: 'Factory Pattern',
          description: 'Type-safe factory for object creation',
          usage: 'Generic factory with type constraints',
          example: 'interface Vehicle {\n  type: string;\n  wheels: number;\n  drive(): void;\n}\n\nclass Car implements Vehicle {\n  constructor(public type = "car", public wheels = 4) {}\n  drive(): void { console.log("Driving car"); }\n}\n\nclass Bike implements Vehicle {\n  constructor(public type = "bike", public wheels = 2) {}\n  drive(): void { console.log("Riding bike"); }\n}\n\nclass VehicleFactory {\n  static create<T extends Vehicle>(\n    type: "car" | "bike"\n  ): T {\n    switch (type) {\n      case "car": return new Car() as T;\n      case "bike": return new Bike() as T;\n      default: throw new Error("Unknown vehicle type");\n    }\n  }\n}',
        },
        {
          command: 'Singleton Pattern',
          description: 'Type-safe singleton with generics',
          usage: 'Generic singleton class',
          example: 'class Singleton<T> {\n  private static instances = new Map<string, Singleton<any>>();\n  \n  private constructor(private data: T) {}\n  \n  static getInstance<T>(key: string, data?: T): Singleton<T> {\n    if (!this.instances.has(key)) {\n      this.instances.set(key, new Singleton(data));\n    }\n    return this.instances.get(key) as Singleton<T>;\n  }\n  \n  getData(): T {\n    return this.data;\n  }\n}\n\nconst config = Singleton.getInstance("config", { apiUrl: "https://api.com" });',
        },
        {
          command: 'Abstract Factory Pattern',
          description: 'Type-safe abstract factory with generics',
          usage: 'Factory of factories with type constraints',
          example: 'interface UIComponent {\n  render(): string;\n}\n\nclass Button implements UIComponent {\n  render(): string { return "<button>Click</button>"; }\n}\n\nclass Input implements UIComponent {\n  render(): string { return "<input type=\'text\'>"; }\n}\n\ninterface UIFactory {\n  createButton(): UIComponent;\n  createInput(): UIComponent;\n}\n\nclass LightThemeFactory implements UIFactory {\n  createButton(): UIComponent { return new Button(); }\n  createInput(): UIComponent { return new Input(); }\n}',
        },
        {
          command: 'Builder Pattern',
          description: 'Fluent builder with type safety',
          usage: 'Builder class with method chaining',
          example: 'class UserBuilder {\n  private user: Partial<User> = {};\n  \n  withName(name: string): this {\n    this.user.name = name;\n    return this;\n  }\n  \n  withEmail(email: string): this {\n    this.user.email = email;\n    return this;\n  }\n  \n  withAge(age: number): this {\n    this.user.age = age;\n    return this;\n  }\n  \n  build(): User {\n    if (!this.user.name || !this.user.email) {\n      throw new Error("Name and email are required");\n    }\n    return new User(\n      this.user.id || crypto.randomUUID(),\n      this.user.name,\n      this.user.email,\n      this.user.age\n    );\n  }\n}',
        },
        {
          command: 'Prototype Pattern',
          description: 'Type-safe prototype cloning',
          usage: 'Cloneable interface with generics',
          example: 'interface Prototype<T> {\n  clone(): T;\n}\n\nclass Document implements Prototype<Document> {\n  constructor(\n    public title: string,\n    public content: string = ""\n  ) {}\n  \n  clone(): Document {\n    return new Document(this.title, this.content);\n  }\n}\n\nconst doc = new Document("Report", "Content");\nconst clonedDoc = doc.clone();',
        },
      ],
    },
    // STRUCTURAL PATTERNS
    {
      title: 'Structural Patterns',
      commands: [
        {
          command: 'Adapter Pattern',
          description: 'Type-safe adapter with interfaces',
          usage: 'Adapter class implementing target interface',
          example: 'interface ModernPayment {\n  pay(amount: number): Promise<void>;\n}\n\nclass LegacyPayment {\n  makePayment(cents: number): void {\n    console.log(`Paid ${cents} cents`);\n  }\n}\n\nclass PaymentAdapter implements ModernPayment {\n  constructor(private legacy: LegacyPayment) {}\n  \n  async pay(amount: number): Promise<void> {\n    this.legacy.makePayment(Math.round(amount * 100));\n  }\n}',
        },
        {
          command: 'Decorator Pattern',
          description: 'Type-safe decorators with generics',
          usage: 'Decorator class and functions',
          example: 'interface Component {\n  operation(): string;\n}\n\nclass ConcreteComponent implements Component {\n  operation(): string {\n    return "ConcreteComponent";\n  }\n}\n\nclass Decorator implements Component {\n  constructor(protected component: Component) {}\n  \n  operation(): string {\n    return this.component.operation();\n  }\n}\n\nclass ConcreteDecorator extends Decorator {\n  operation(): string {\n    return `ConcreteDecorator(${super.operation()})`;\n  }\n}',
        },
        {
          command: 'Facade Pattern',
          description: 'Simplified interface with TypeScript',
          usage: 'Facade class hiding complexity',
          example: 'class Database {\n  connect(): void { console.log("Database connected"); }\n  query(sql: string): any[] { return []; }\n  close(): void { console.log("Database closed"); }\n}\n\nclass Cache {\n  get(key: string): any { return null; }\n  set(key: string, value: any): void {}\n}\n\nclass DatabaseFacade {\n  constructor(\n    private db: Database,\n    private cache: Cache\n  ) {}\n  \n  getData(sql: string): any[] {\n    const cacheKey = btoa(sql);\n    let data = this.cache.get(cacheKey);\n    \n    if (!data) {\n      data = this.db.query(sql);\n      this.cache.set(cacheKey, data);\n    }\n    \n    return data;\n  }\n}',
        },
        {
          command: 'Proxy Pattern',
          description: 'Type-safe proxy with generic constraints',
          usage: 'Proxy class with validation',
          example: 'interface IUser {\n  name: string;\n  age: number;\n}\n\nclass UserProxy implements IUser {\n  private _user: IUser;\n  \n  constructor(user: IUser) {\n    this._user = user;\n  }\n  \n  get name(): string {\n    return this._user.name;\n  }\n  \n  set name(value: string) {\n    if (value.length < 2) {\n      throw new Error("Name too short");\n    }\n    this._user.name = value;\n  }\n  \n  get age(): number {\n    return this._user.age;\n  }\n  \n  set age(value: number) {\n    if (value < 0) {\n      throw new Error("Age must be positive");\n    }\n    this._user.age = value;\n  }\n}',
        },
        {
          command: 'Composite Pattern',
          description: 'Type-safe composite with recursive types',
          usage: 'Composite interface with tree structure',
          example: 'interface FileSystemItem {\n  name: string;\n  size: number;\n  getSize(): number;\n}\n\nclass File implements FileSystemItem {\n  constructor(\n    public name: string,\n    public size: number\n  ) {}\n  \n  getSize(): number {\n    return this.size;\n  }\n}\n\nclass Directory implements FileSystemItem {\n  private items: FileSystemItem[] = [];\n  \n  constructor(public name: string) {}\n  \n  get size(): number {\n    return this.getSize();\n  }\n  \n  addItem(item: FileSystemItem): void {\n    this.items.push(item);\n  }\n  \n  getSize(): number {\n    return this.items.reduce((total, item) => total + item.getSize(), 0);\n  }\n}',
        },
        {
          command: 'Bridge Pattern',
          description: 'Type-safe bridge with generics',
          usage: 'Separate abstraction from implementation',
          example: 'interface Renderer {\n  renderCircle(radius: number): string;\n  renderSquare(size: number): string;\n}\n\nclass VectorRenderer implements Renderer {\n  renderCircle(radius: number): string {\n    return `Vector circle radius ${radius}`;\n  }\n  \n  renderSquare(size: number): string {\n    return `Vector square size ${size}`;\n  }\n}\n\nabstract class Shape {\n  constructor(protected renderer: Renderer) {}\n  abstract draw(): string;\n}\n\nclass Circle extends Shape {\n  constructor(renderer: Renderer, private radius: number) {\n    super(renderer);\n  }\n  \n  draw(): string {\n    return this.renderer.renderCircle(this.radius);\n  }\n}',
        },
        {
          command: 'Flyweight Pattern',
          description: 'Type-safe flyweight with shared objects',
          usage: 'Flyweight factory with caching',
          example: 'interface Flyweight {\n  operation(extrinsicState: string): string;\n}\n\nclass ConcreteFlyweight implements Flyweight {\n  constructor(private intrinsicState: string) {}\n  \n  operation(extrinsicState: string): string {\n    return `${this.intrinsicState} - ${extrinsicState}`;\n  }\n}\n\nclass FlyweightFactory {\n  private flyweights = new Map<string, Flyweight>();\n  \n  getFlyweight(intrinsicState: string): Flyweight {\n    if (!this.flyweights.has(intrinsicState)) {\n      this.flyweights.set(\n        intrinsicState,\n        new ConcreteFlyweight(intrinsicState)\n      );\n    }\n    return this.flyweights.get(intrinsicState)!;\n  }\n}',
        },
      ],
    },
    // BEHAVIORAL PATTERNS
    {
      title: 'Behavioral Patterns',
      commands: [
        {
          command: 'Observer Pattern',
          description: 'Type-safe observer with generic events',
          usage: 'Observer interface with typed events',
          example: 'interface Observer<T> {\n  update(data: T): void;\n}\n\ninterface Subject<T> {\n  subscribe(observer: Observer<T>): void;\n  unsubscribe(observer: Observer<T>): void;\n  notify(data: T): void;\n}\n\nclass EventEmitter<T> implements Subject<T> {\n  private observers: Observer<T>[] = [];\n  \n  subscribe(observer: Observer<T>): void {\n    this.observers.push(observer);\n  }\n  \n  unsubscribe(observer: Observer<T>): void {\n    const index = this.observers.indexOf(observer);\n    if (index > -1) {\n      this.observers.splice(index, 1);\n    }\n  }\n  \n  notify(data: T): void {\n    this.observers.forEach(observer => observer.update(data));\n  }\n}',
        },
        {
          command: 'Strategy Pattern',
          description: 'Type-safe strategy with interfaces',
          usage: 'Strategy interface with context',
          example: 'interface PaymentStrategy {\n  pay(amount: number): Promise<boolean>;\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n  constructor(private cardNumber: string) {}\n  \n  async pay(amount: number): Promise<boolean> {\n    console.log(`Paid ${amount} with credit card ${this.cardNumber}`);\n    return true;\n  }\n}\n\nclass PayPalPayment implements PaymentStrategy {\n  constructor(private email: string) {}\n  \n  async pay(amount: number): Promise<boolean> {\n    console.log(`Paid ${amount} with PayPal ${this.email}`);\n    return true;\n  }\n}\n\nclass PaymentContext {\n  constructor(private strategy: PaymentStrategy) {}\n  \n  setStrategy(strategy: PaymentStrategy): void {\n    this.strategy = strategy;\n  }\n  \n  async executePayment(amount: number): Promise<boolean> {\n    return this.strategy.pay(amount);\n  }\n}',
        },
        {
          command: 'Command Pattern',
          description: 'Type-safe command with generics',
          usage: 'Command interface with undo/redo',
          example: 'interface Command<T> {\n  execute(): T;\n  undo(): void;\n}\n\nclass AddCommand implements Command<number> {\n  constructor(\n    private receiver: { value: number },\n    private amount: number\n  ) {}\n  \n  execute(): number {\n    this.receiver.value += this.amount;\n    return this.receiver.value;\n  }\n  \n  undo(): void {\n    this.receiver.value -= this.amount;\n  }\n}\n\nclass Invoker {\n  private history: Command<any>[] = [];\n  \n  executeCommand<T>(command: Command<T>): T {\n    const result = command.execute();\n    this.history.push(command);\n    return result;\n  }\n  \n  undo(): void {\n    const command = this.history.pop();\n    if (command) {\n      command.undo();\n    }\n  }\n}',
        },
        {
          command: 'State Pattern',
          description: 'Type-safe state with interfaces',
          usage: 'State interface with context',
          example: 'interface State {\n  handle(context: Context): void;\n}\n\nclass Context {\n  private state: State;\n  \n  constructor(state: State) {\n    this.state = state;\n  }\n  \n  setState(state: State): void {\n    this.state = state;\n  }\n  \n  request(): void {\n    this.state.handle(this);\n  }\n}\n\nclass ConcreteStateA implements State {\n  handle(context: Context): void {\n    console.log("State A handling request");\n    context.setState(new ConcreteStateB());\n  }\n}\n\nclass ConcreteStateB implements State {\n  handle(context: Context): void {\n    console.log("State B handling request");\n    context.setState(new ConcreteStateA());\n  }\n}',
        },
        {
          command: 'Template Method Pattern',
          description: 'Type-safe template with abstract methods',
          usage: 'Abstract class with template method',
          example: 'abstract class DataProcessor<T> {\n  process(data: T): void {\n    this.validate(data);\n    this.transform(data);\n    this.save(data);\n  }\n  \n  protected abstract validate(data: T): void;\n  protected abstract transform(data: T): void;\n  protected abstract save(data: T): void;\n}\n\nclass UserDataProcessor extends DataProcessor<User> {\n  protected validate(user: User): void {\n    if (!user.name) throw new Error("Name required");\n  }\n  \n  protected transform(user: User): void {\n    user.name = user.name.toUpperCase();\n  }\n  \n  protected save(user: User): void {\n    console.log(`Saving user: ${user.name}`);\n  }\n}',
        },
        {
          command: 'Iterator Pattern',
          description: 'Type-safe iterator with generics',
          usage: 'Iterator interface with aggregation',
          example: 'interface Iterator<T> {\n  hasNext(): boolean;\n  next(): T;\n}\n\ninterface Aggregate<T> {\n  createIterator(): Iterator<T>;\n}\n\nclass ArrayIterator<T> implements Iterator<T> {\n  private index = 0;\n  \n  constructor(private collection: T[]) {}\n  \n  hasNext(): boolean {\n    return this.index < this.collection.length;\n  }\n  \n  next(): T {\n    if (!this.hasNext()) {\n      throw new Error("No more elements");\n    }\n    return this.collection[this.index++];\n  }\n}\n\nclass NumberCollection implements Aggregate<number> {\n  constructor(private items: number[]) {}\n  \n  createIterator(): Iterator<number> {\n    return new ArrayIterator(this.items);\n  }\n}',
        },
        {
          command: 'Mediator Pattern',
          description: 'Type-safe mediator with interfaces',
          usage: 'Mediator interface with colleagues',
          example: 'interface Mediator {\n  notify(sender: Colleague, event: string): void;\n}\n\nabstract class Colleague {\n  constructor(protected mediator: Mediator) {}\n  \n  abstract send(event: string): void;\n  abstract receive(event: string): void;\n}\n\nclass ConcreteColleague1 extends Colleague {\n  send(event: string): void {\n    console.log(`Colleague1 sends: ${event}`);\n    this.mediator.notify(this, event);\n  }\n  \n  receive(event: string): void {\n    console.log(`Colleague1 receives: ${event}`);\n  }\n}\n\nclass ConcreteMediator implements Mediator {\n  constructor(\n    private colleague1: ConcreteColleague1,\n    private colleague2: ConcreteColleague2\n  ) {}\n  \n  notify(sender: Colleague, event: string): void {\n    if (sender === this.colleague1) {\n      this.colleague2.receive(event);\n    } else {\n      this.colleague1.receive(event);\n    }\n  }\n}',
        },
        {
          command: 'Chain of Responsibility Pattern',
          description: 'Type-safe chain with handlers',
          usage: 'Handler interface with chain',
          example: 'interface Handler {\n  setNext(handler: Handler): Handler;\n  handle(request: string): string | null;\n}\n\nabstract class AbstractHandler implements Handler {\n  private nextHandler: Handler | null = null;\n  \n  setNext(handler: Handler): Handler {\n    this.nextHandler = handler;\n    return handler;\n  }\n  \n  handle(request: string): string | null {\n    const result = this.process(request);\n    \n    if (result === null && this.nextHandler) {\n      return this.nextHandler.handle(request);\n    }\n    \n    return result;\n  }\n  \n  protected abstract process(request: string): string | null;\n}\n\nclass ConcreteHandler1 extends AbstractHandler {\n  protected process(request: string): string | null {\n    if (request === "request1") {\n      return "Handled by Handler 1";\n    }\n    return null;\n  }\n}',
        },
      ],
    },
    // TYPESCRIPT-SPECIFIC PATTERNS
    {
      title: 'TypeScript-Specific Patterns',
      commands: [
        {
          command: 'Generic Repository Pattern',
          description: 'Type-safe repository with generics',
          usage: 'Generic repository interface',
          example: 'interface Repository<T, K> {\n  findById(id: K): Promise<T | null>;\n  findAll(): Promise<T[]>;\n  create(entity: Omit<T, "id">): Promise<T>;\n  update(id: K, entity: Partial<T>): Promise<T | null>;\n  delete(id: K): Promise<boolean>;\n}\n\nclass UserRepository implements Repository<User, string> {\n  private users: User[] = [];\n  \n  async findById(id: string): Promise<User | null> {\n    return this.users.find(user => user.id === id) || null;\n  }\n  \n  async findAll(): Promise<User[]> {\n    return [...this.users];\n  }\n  \n  async create(userData: Omit<User, "id">): Promise<User> {\n    const user = new User(\n      crypto.randomUUID(),\n      userData.name,\n      userData.email,\n      userData.age\n    );\n    this.users.push(user);\n    return user;\n  }\n  \n  async update(id: string, userData: Partial<User>): Promise<User | null> {\n    const userIndex = this.users.findIndex(user => user.id === id);\n    if (userIndex === -1) return null;\n    \n    this.users[userIndex] = { ...this.users[userIndex], ...userData };\n    return this.users[userIndex];\n  }\n  \n  async delete(id: string): Promise<boolean> {\n    const userIndex = this.users.findIndex(user => user.id === id);\n    if (userIndex === -1) return false;\n    \n    this.users.splice(userIndex, 1);\n    return true;\n  }\n}',
        },
        {
          command: 'DTO Pattern with Validation',
          description: 'Data Transfer Objects with validation',
          usage: 'DTO classes with validation decorators',
          example: 'interface CreateUserDto {\n  name: string;\n  email: string;\n  age?: number;\n}\n\nclass UserValidator {\n  static validate(dto: CreateUserDto): string[] {\n    const errors: string[] = [];\n    \n    if (!dto.name || dto.name.length < 2) {\n      errors.push("Name must be at least 2 characters");\n    }\n    \n    if (!dto.email || !dto.email.includes("@")) {\n      errors.push("Valid email is required");\n    }\n    \n    if (dto.age !== undefined && dto.age < 0) {\n      errors.push("Age must be positive");\n    }\n    \n    return errors;\n  }\n}\n\nclass UserService {\n  async createUser(dto: CreateUserDto): Promise<User> {\n    const errors = UserValidator.validate(dto);\n    if (errors.length > 0) {\n      throw new Error(`Validation failed: ${errors.join(", ")}`);\n    }\n    \n    // Create user logic...\n    return new User("1", dto.name, dto.email, dto.age);\n  }\n}',
        },
        {
          command: 'Service Locator Pattern',
          description: 'Type-safe dependency injection',
          usage: 'Service locator with generics',
          example: 'interface ServiceLocator {\n  register<T>(key: string, service: T): void;\n  get<T>(key: string): T;\n}\n\nclass TypeScriptServiceLocator implements ServiceLocator {\n  private services = new Map<string, any>();\n  \n  register<T>(key: string, service: T): void {\n    this.services.set(key, service);\n  }\n  \n  get<T>(key: string): T {\n    const service = this.services.get(key);\n    if (!service) {\n      throw new Error(`Service ${key} not found`);\n    }\n    return service as T;\n  }\n}\n\n// Usage\nconst locator = new TypeScriptServiceLocator();\nlocator.register("userService", new UserService());\nconst userService = locator.get<UserService>("userService");',
        },
        {
          command: 'Type Guard Pattern',
          description: 'Runtime type checking with type guards',
          usage: 'Type guard functions',
          example: 'interface Cat {\n  type: "cat";\n  meow(): void;\n}\n\ninterface Dog {\n  type: "dog";\n  bark(): void;\n}\n\ntype Animal = Cat | Dog;\n\nfunction isCat(animal: Animal): animal is Cat {\n  return animal.type === "cat";\n}\n\nfunction isDog(animal: Animal): animal is Dog {\n  return animal.type === "dog";\n}\n\nfunction makeSound(animal: Animal): void {\n  if (isCat(animal)) {\n    animal.meow();\n  } else if (isDog(animal)) {\n    animal.bark();\n  }\n}',
        },
        {
          command: 'Discriminated Union Pattern',
          description: 'Type-safe discriminated unions',
          usage: 'Union types with discriminant property',
          example: 'type LoadingState = \n  | { status: "loading" }\n  | { status: "success"; data: string }\n  | { status: "error"; error: string };\n\nfunction handleState(state: LoadingState): string {\n  switch (state.status) {\n    case "loading":\n      return "Loading...";\n    case "success":\n      return `Success: ${state.data}`;\n    case "error":\n      return `Error: ${state.error}`;\n    default:\n      const _exhaustiveCheck: never = state;\n      return _exhaustiveCheck;\n  }\n}',
        },
        {
          command: 'Conditional Type Pattern',
          description: 'Advanced type manipulation',
          usage: 'Conditional types for type transformations',
          example: 'type NonNullable<T> = T extends null | undefined ? never : T;\n\ntype Flatten<T> = T extends Array<infer U> ? U : T;\n\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\ntype UnpackPromise<T> = T extends Promise<infer U> ? U : T;\n\n// Example usage\ntype StringArray = Flatten<string[]>; // string\ntype FunctionReturn = ReturnType<() => number>; // number\ntype PromiseData = UnpackPromise<string>; // string',
        },
        {
          command: 'Mapped Type Pattern',
          description: 'Type-safe object transformations',
          usage: 'Mapped types for object manipulation',
          example: 'type Optional<T> = {\n  [K in keyof T]?: T[K];\n};\n\ntype Readonly<T> = {\n  readonly [K in keyof T]: T[K];\n};\n\ntype Stringify<T> = {\n  [K in keyof T]: string;\n};\n\ntype PartialUser = Optional<User>;\ntype ReadonlyUser = Readonly<User>;\ntype StringifiedUser = Stringify<User>;\n\n// Advanced mapped type\ntype Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\ntype UserGetters = Getters<User>;\n// { getName: () => string; getEmail: () => string; getAge?: () => number | undefined; }',
        },
        {
          command: 'Mixin Pattern',
          description: 'Type-safe mixins with generics',
          usage: 'Mixin functions for class composition',
          example: 'type Constructor<T = {}> = new (...args: any[]) => T;\n\n// Timestamp mixin\nfunction Timestamp<T extends Constructor>(Base: T) {\n  return class extends Base {\n    timestamp = new Date();\n    \n    getTimestamp(): Date {\n      return this.timestamp;\n    }\n  };\n}\n\n// Activatable mixin\nfunction Activatable<T extends Constructor>(Base: T) {\n  return class extends Base {\n    isActive = false;\n    \n    activate(): void {\n      this.isActive = true;\n    }\n    \n    deactivate(): void {\n      this.isActive = false;\n    }\n  };\n}\n\n// Apply mixins\nclass User {\n  constructor(public name: string) {}\n}\n\nclass TimestampedUser extends Timestamp(Activatable(User)) {}\n\nconst user = new TimestampedUser("John");\nuser.activate();\nconsole.log(user.getTimestamp());',
        },
      ],
    },
    // FUNCTIONAL PATTERNS
    {
      title: 'Functional Patterns',
      commands: [
        {
          command: 'Higher-Order Function Pattern',
          description: 'Type-safe higher-order functions',
          usage: 'Functions that accept/return functions',
          example: 'type Mapper<T, U> = (item: T, index: number) => U;\ntype Predicate<T> = (item: T, index: number) => boolean;\ntype Reducer<T, U> = (acc: U, item: T, index: number) => U;\n\nclass FunctionalArray<T> {\n  constructor(private items: T[]) {}\n  \n  map<U>(mapper: Mapper<T, U>): FunctionalArray<U> {\n    return new FunctionalArray(this.items.map(mapper));\n  }\n  \n  filter(predicate: Predicate<T>): FunctionalArray<T> {\n    return new FunctionalArray(this.items.filter(predicate));\n  }\n  \n  reduce<U>(reducer: Reducer<T, U>, initial: U): U {\n    return this.items.reduce(reducer, initial);\n  }\n  \n  toArray(): T[] {\n    return [...this.items];\n  }\n}',
        },
        {
          command: 'Currying Pattern',
          description: 'Type-safe curried functions',
          usage: 'Curried functions with partial application',
          example: 'type Curried<T> = T extends (...args: infer A) => infer R\n  ? A extends [infer First, ...infer Rest]\n    ? (arg: First) => Rest extends []\n      ? R\n      : Curried<(...args: Rest) => R>\n    : R\n  : never;\n\nfunction curry<T extends (...args: any[]) => any>(fn: T): Curried<T> {\n  return function curried(...args: any[]): any {\n    if (args.length >= fn.length) {\n      return fn.apply(null, args);\n    }\n    return (...nextArgs: any[]) => curried(...args, ...nextArgs);\n  } as any;\n}\n\n// Usage\nconst add = (a: number, b: number, c: number) => a + b + c;\nconst curriedAdd = curry(add);\nconst add5 = curriedAdd(5);\nconst add5And3 = add5(3);\nconst result = add5And3(2); // 10',
        },
        {
          command: 'Function Composition Pattern',
          description: 'Type-safe function composition',
          usage: 'Compose functions together',
          example: 'type Func<T, U> = (x: T) => U;\n\ntype Compose<F, G> = F extends Func<infer A, infer B>\n  ? G extends Func<infer B, infer C>\n    ? Func<A, C>\n    : never\n  : never;\n\nfunction compose<F, G>(f: F, g: G): Compose<F, G> {\n  return ((x: any) => g(f(x))) as any;\n}\n\n// Usage\nconst addOne = (x: number) => x + 1;\nconst double = (x: number) => x * 2;\nconst toString = (x: number) => x.toString();\n\nconst addOneAndDoubleToString = compose(compose(addOne, double), toString);\nconst result = addOneAndDoubleToString(5); // "12"',
        },
        {
          command: 'Monad Pattern',
          description: 'Type-safe monads with generics',
          usage: 'Optional, Either, Result monads',
          example: 'class Option<T> {\n  private constructor(private value: T | null) {}\n  \n  static some<T>(value: T): Option<T> {\n    return new Option(value);\n  }\n  \n  static none<T>(): Option<T> {\n    return new Option(null);\n  }\n  \n  map<U>(fn: (value: T) => U): Option<U> {\n    return this.value === null \n      ? Option.none<U>()\n      : Option.some(fn(this.value));\n  }\n  \n  flatMap<U>(fn: (value: T) => Option<U>): Option<U> {\n    return this.value === null \n      ? Option.none<U>()\n      : fn(this.value);\n  }\n  \n  getOrElse(defaultValue: T): T {\n    return this.value === null ? defaultValue : this.value;\n  }\n  \n  isSome(): boolean {\n    return this.value !== null;\n  }\n  \n  isNone(): boolean {\n    return this.value === null;\n  }\n}',
        },
        {
          command: 'Either Pattern',
          description: 'Type-safe error handling',
          usage: 'Either type for error handling',
          example: 'class Either<L, R> {\n  private constructor(\n    private left: L | null,\n    private right: R | null\n  ) {}\n  \n  static left<L, R>(value: L): Either<L, R> {\n    return new Either(value, null);\n  }\n  \n  static right<L, R>(value: R): Either<L, R> {\n    return new Either(null, value);\n  }\n  \n  isLeft(): boolean {\n    return this.left !== null;\n  }\n  \n  isRight(): boolean {\n    return this.right !== null;\n  }\n  \n  map<U>(fn: (value: R) => U): Either<L, U> {\n    return this.isLeft() \n      ? Either.left(this.left!)\n      : Either.right(fn(this.right!));\n  }\n  \n  flatMap<U>(fn: (value: R) => Either<L, U>): Either<L, U> {\n    return this.isLeft() \n      ? Either.left(this.left!)\n      : fn(this.right!);\n  }\n  \n  fold<T>(onLeft: (left: L) => T, onRight: (right: R) => T): T {\n    return this.isLeft() ? onLeft(this.left!) : onRight(this.right!);\n  }\n}',
        },
        {
          command: 'Pipe Pattern',
          description: 'Type-safe pipe operator',
          usage: 'Pipe functions together',
          example: 'type Pipe<T> = T extends readonly [infer First, ...infer Rest]\n  ? Rest extends readonly []\n    ? First\n    : First extends (...args: any[]) => infer R\n      ? Pipe<[...Rest, R]>\n      : never\n  : never;\n\nfunction pipe<T extends readonly any[]>(...fns: T): Pipe<T> {\n  return (value: any) => fns.reduce((acc, fn) => fn(acc), value);\n}\n\n// Usage\nconst add = (x: number) => x + 1;\nconst multiply = (x: number) => x * 2;\nconst toString = (x: number) => x.toString();\n\nconst result = pipe(add, multiply, toString)(5); // "12"',
        },
        {
          command: 'Memoization Pattern',
          description: 'Type-safe memoization with generics',
          usage: 'Cache function results',
          example: 'function memoize<T extends (...args: any[]) => any>(fn: T): T {\n  const cache = new Map<string, ReturnType<T>>();\n  \n  return ((...args: Parameters<T>): ReturnType<T> => {\n    const key = JSON.stringify(args);\n    \n    if (cache.has(key)) {\n      return cache.get(key)!;\n    }\n    \n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  }) as T;\n}\n\n// Usage\nconst expensiveFunction = (x: number, y: number) => {\n  console.log("Computing...");\n  return x * y;\n};\n\nconst memoizedFunction = memoize(expensiveFunction);\nconsole.log(memoizedFunction(2, 3)); // "Computing..." then 6\nconsole.log(memoizedFunction(2, 3)); // 6 (no computation)',
        },
      ],
    },
    // ASYNC PATTERNS
    {
      title: 'Async Patterns',
      commands: [
        {
          command: 'Promise Wrapper Pattern',
          description: 'Type-safe promise utilities',
          usage: 'Promise helpers with generics',
          example: 'class PromiseUtils {\n  static timeout<T>(ms: number): Promise<T> {\n    return new Promise((_, reject) => {\n      setTimeout(() => reject(new Error("Timeout")), ms);\n    });\n  }\n  \n  static withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {\n    return Promise.race([promise, this.timeout<T>(ms)]);\n  }\n  \n  static retry<T>(\n    fn: () => Promise<T>,\n    maxAttempts: number = 3\n  ): Promise<T> {\n    return new Promise((resolve, reject) => {\n      let attempts = 0;\n      \n      const attempt = async () => {\n        try {\n          const result = await fn();\n          resolve(result);\n        } catch (error) {\n          attempts++;\n          if (attempts >= maxAttempts) {\n            reject(error);\n          } else {\n            setTimeout(attempt, 1000 * attempts);\n          }\n        }\n      };\n      \n      attempt();\n    });\n  }\n}',
        },
        {
          command: 'Async Generator Pattern',
          description: 'Type-safe async generators',
          usage: 'Async generators with yield',
          example: 'interface AsyncGenerator<T, TReturn = any, TNext = any> {\n  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;\n  return(value: TReturn): Promise<IteratorResult<T, TReturn>>;\n  throw(error: any): Promise<IteratorResult<T, TReturn>>;\n  [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;\n}\n\nasync function* fetchPages<T>(\n  url: string,\n  maxPages: number = 5\n): AsyncGenerator<T[]> {\n  for (let page = 1; page <= maxPages; page++) {\n    const response = await fetch(`${url}?page=${page}`);\n    const data = await response.json() as T[];\n    \n    if (data.length === 0) break;\n    \n    yield data;\n  }\n}\n\n// Usage\nfor await (const page of fetchPages<User>("/api/users")) {\n  console.log(`Fetched ${page.length} users`);\n}',
        },
        {
          command: 'Observable Pattern',
          description: 'Type-safe observable implementation',
          usage: 'Observable with subscription management',
          example: 'type Observer<T> = {\n  next: (value: T) => void;\n  error?: (error: Error) => void;\n  complete?: () => void;\n};\n\ntype Subscription = {\n  unsubscribe: () => void;\n};\n\nclass Observable<T> {\n  private observers: Observer<T>[] = [];\n  \n  constructor(private producer: (observer: Observer<T>) => void | (() => void)) {}\n  \n  subscribe(observer: Observer<T>): Subscription {\n    this.observers.push(observer);\n    \n    const cleanup = this.producer(observer);\n    \n    return {\n      unsubscribe: () => {\n        const index = this.observers.indexOf(observer);\n        if (index > -1) {\n          this.observers.splice(index, 1);\n        }\n        cleanup?.();\n      }\n    };\n  }\n  \n  map<U>(fn: (value: T) => U): Observable<U> {\n    return new Observable<U>(observer => {\n      return this.subscribe({\n        next: value => observer.next(fn(value)),\n        error: observer.error,\n        complete: observer.complete\n      });\n    });\n  }\n  \n  filter(predicate: (value: T) => boolean): Observable<T> {\n    return new Observable<T>(observer => {\n      return this.subscribe({\n        next: value => {\n          if (predicate(value)) {\n            observer.next(value);\n          }\n        },\n        error: observer.error,\n        complete: observer.complete\n      });\n    });\n  }\n}',
        },
        {
          command: 'Async Iterator Pattern',
          description: 'Type-safe async iteration',
          usage: 'Custom async iterators',
          example: 'class AsyncQueue<T> implements AsyncIterable<T> {\n  private queue: T[] = [];\n  private resolvers: ((value: IteratorResult<T>) => void)[] = [];\n  private closed = false;\n  \n  async enqueue(item: T): Promise<void> {\n    if (this.closed) {\n      throw new Error("Queue is closed");\n    }\n    \n    if (this.resolvers.length > 0) {\n      const resolver = this.resolvers.shift()!;\n      resolver({ value: item, done: false });\n    } else {\n      this.queue.push(item);\n    }\n  }\n  \n  async dequeue(): Promise<T> {\n    if (this.queue.length > 0) {\n      return this.queue.shift()!;\n    }\n    \n    if (this.closed) {\n      throw new Error("Queue is closed");\n    }\n    \n    return new Promise((resolve) => {\n      this.resolvers.push(result => {\n        if (result.done) {\n          throw new Error("Queue is closed");\n        }\n        resolve(result.value);\n      });\n    });\n  }\n  \n  close(): void {\n    this.closed = true;\n    this.resolvers.forEach(resolver => resolver({ value: undefined, done: true }));\n    this.resolvers = [];\n  }\n  \n  [Symbol.asyncIterator](): AsyncIterator<T> {\n    return {\n      next: async () => {\n        try {\n          const value = await this.dequeue();\n          return { value, done: false };\n        } catch {\n          return { value: undefined, done: true };\n        }\n      }\n    };\n  }\n}',
        },
      ],
    },
  ],
};
