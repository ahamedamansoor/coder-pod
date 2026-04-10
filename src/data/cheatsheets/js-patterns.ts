import { Code, Layers, Target, Package, Factory, Shield, Puzzle, GitBranch, Repeat, Box, Database, Globe, Terminal, Wrench, Brain, Cog, Network, TreePine, GitMerge, GitFork, ZapOff, RefreshCw, CheckCircle, AlertCircle, Info, Settings, Layout, Grid3x3, List, Filter, Search, Menu, Plus, Minus, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Move, Maximize2, Minimize2, Split, Layers3, PackageOpen, Archive, FolderOpen, Folder, File, FileText, FileCode, FilePlus, FileMinus, Edit, Copy, Trash2, Download, Upload, Share2, Link, Unlink, Lock, Unlock, Eye, EyeOff, User, Users, UserPlus, UserMinus, Heart, Star, Bookmark, Flag, Tag, Hash, AtSign, Percent, DollarSign, Calendar, Clock, Timer, Hourglass, Sun, Moon, Cloud, CloudRain, CloudSnow, Umbrella, Wind, Thermometer, Gauge, Activity, TrendingUp, TrendingDown, BarChart, PieChart, LineChart, Zap, Battery, Wifi, Bluetooth, Usb, HardDrive, Cpu, Monitor, Smartphone, Tablet, Laptop, Headphones, Camera, Video, Image, Music, Play, Pause, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Cross, Divide, Equal, Infinity } from 'lucide-react';

export const jsPatternsCheatsheet = {
  id: 'js-patterns',
  name: 'JavaScript Design Patterns',
  description: 'Comprehensive collection of all JavaScript design patterns, architectural patterns, and best practices',
  icon: Code,
  colorTheme: 'yellow' as const,
  sections: [
    // CREATIONAL PATTERNS
    {
      title: 'Creational Patterns',
      commands: [
        {
          command: 'Constructor Pattern',
          description: 'Creating objects with constructor functions',
          usage: 'function Person() {}',
          example: 'function Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.greet = function() {\n    return `Hello, I\'m ${this.name}`;\n  };\n}\n\nconst john = new Person(\'John\', 30);\nconsole.log(john.greet()); // "Hello, I\'m John"',
        },
        {
          command: 'Module Pattern',
          description: 'Encapsulating private and public members',
          usage: 'IIFE for private scope',
          example: 'const Module = (function() {\n  let privateVar = \'I\'m private\';\n  \n  function privateMethod() {\n    return privateVar;\n  }\n  \n  return {\n    publicMethod: function() {\n      return privateMethod();\n    },\n    publicVar: \'I\'m public\'\n  };\n})();\n\nconsole.log(Module.publicMethod()); // "I\'m private"',
        },
        {
          command: 'Factory Pattern',
          description: 'Creating objects without specifying exact class',
          usage: 'Factory function for object creation',
          example: 'function createVehicle(type) {\n  const vehicles = {\n    car: function() {\n      this.wheels = 4;\n      this.doors = 4;\n    },\n    bike: function() {\n      this.wheels = 2;\n      this.doors = 0;\n    }\n  };\n  \n  const Vehicle = vehicles[type];\n  const vehicle = new Vehicle();\n  vehicle.type = type;\n  return vehicle;\n}\n\nconst myCar = createVehicle(\'car\');',
        },
        {
          command: 'Singleton Pattern',
          description: 'Ensure a class has only one instance',
          usage: 'Single instance with global access',
          example: 'const Singleton = (function() {\n  let instance;\n  \n  function createInstance() {\n    return {\n      name: \'Singleton\',\n      method: function() {\n        return \'I am the only one\';\n      }\n    };\n  }\n  \n  return {\n    getInstance: function() {\n      if (!instance) {\n        instance = createInstance();\n      }\n      return instance;\n    }\n  };\n})();',
        },
        {
          command: 'Prototype Pattern',
          description: 'Creating objects based on a template',
          usage: 'Object.create() for inheritance',
          example: 'const vehiclePrototype = {\n  init: function(type) {\n    this.type = type;\n  },\n  getType: function() {\n    return this.type;\n  }\n};\n\nconst car = Object.create(vehiclePrototype);\ncar.init(\'car\');\nconsole.log(car.getType()); // "car"',
        },
        {
          command: 'Abstract Factory Pattern',
          description: 'Create families of related objects',
          usage: 'Factory of factories',
          example: 'const abstractFactory = {\n  createButton: function() {\n    return { type: \'button\', render: () => \'<button>Click</button>\' };\n  },\n  createInput: function() {\n    return { type: \'input\', render: () => \'<input type="text">\' };\n  }\n};\n\nconst darkFactory = Object.create(abstractFactory);\ndarkFactory.createButton = function() {\n  return { type: \'button\', render: () => \'<button class="dark">Click</button>\' };\n};',
        },
        {
          command: 'Builder Pattern',
          description: 'Construct complex objects step by step',
          usage: 'Fluent interface for object construction',
          example: 'class StringBuilder {\n  constructor() {\n    this.string = \'\';\n  }\n  \n  append(str) {\n    this.string += str;\n    return this;\n  }\n  \n  prepend(str) {\n    this.string = str + this.string;\n    return this;\n  }\n  \n  build() {\n    return this.string;\n  }\n}\n\nconst result = new StringBuilder()\n  .append(\'Hello\')\n  .append(\' \')\n  .append(\'World\')\n  .build();',
        },
        {
          command: 'Object Pool Pattern',
          description: 'Reuse objects to reduce memory allocation',
          usage: 'Performance optimization for object creation',
          example: 'class ObjectPool {\n  constructor(createFn, resetFn, initialSize = 10) {\n    this.createFn = createFn;\n    this.resetFn = resetFn;\n    this.pool = [];\n    \n    for (let i = 0; i < initialSize; i++) {\n      this.pool.push(this.createFn());\n    }\n  }\n  \n  acquire() {\n    if (this.pool.length > 0) {\n      return this.pool.pop();\n    }\n    return this.createFn();\n  }\n  \n  release(obj) {\n    this.resetFn(obj);\n    this.pool.push(obj);\n  }\n}',
        },
        {
          command: 'Lazy Initialization Pattern',
          description: 'Defer object creation until needed',
          usage: 'Performance optimization for expensive objects',
          example: 'class LazyObject {\n  constructor(createFn) {\n    this.createFn = createFn;\n    this.instance = null;\n  }\n  \n  getInstance() {\n    if (!this.instance) {\n      this.instance = this.createFn();\n    }\n    return this.instance;\n  }\n}\n\nconst lazyData = new LazyObject(() => {\n  return fetchExpensiveData();\n});',
        },
      ],
    },
    // STRUCTURAL PATTERNS
    {
      title: 'Structural Patterns',
      commands: [
        {
          command: 'Adapter Pattern',
          description: 'Convert interface of one class to another',
          usage: 'Wrapper to make incompatible interfaces work',
          example: '// Legacy API\nfunction legacyAPI(data) {\n  return data.name + \' - \' + data.age;\n}\n\n// Adapter\nfunction dataAdapter(user) {\n  return {\n    name: user.firstName,\n    age: user.yearsOld\n  };\n}\n\n// Usage\nconst user = { firstName: \'John\', yearsOld: 30 };\nconst adaptedData = dataAdapter(user);\nlegacyAPI(adaptedData); // "John - 30"',
        },
        {
          command: 'Decorator Pattern',
          description: 'Add new functionality to objects dynamically',
          usage: 'Wrapper functions to enhance behavior',
          example: 'function coffee() {\n  return {\n    cost: () => 2,\n    description: () => \'Simple coffee\'\n  };\n}\n\nfunction withMilk(coffee) {\n  return {\n    cost: () => coffee.cost() + 0.5,\n    description: () => coffee.description() + \', milk\'\n  };\n}\n\nconst myCoffee = withMilk(coffee());\nconsole.log(myCoffee.cost()); // 2.5',
        },
        {
          command: 'Facade Pattern',
          description: 'Simplify complex subsystems',
          usage: 'Single interface for complex operations',
          example: 'class Computer {\n  constructor() {\n    this.memory = new Memory();\n    this.cpu = new CPU();\n    this.hardDrive = new HardDrive();\n  }\n  \n  start() {\n    this.memory.load();\n    this.cpu.execute();\n    this.hardDrive.read();\n    return \'Computer started\';\n  }\n}\n\n// Simple interface\nconst computer = new Computer();\ncomputer.start();',
        },
        {
          command: 'Proxy Pattern',
          description: 'Control access to another object',
          usage: 'Wrapper to control object access',
          example: 'function createProxy(target) {\n  return new Proxy(target, {\n    get: function(obj, prop) {\n      if (prop in obj) {\n        console.log(`Getting ${prop}`);\n        return obj[prop];\n      }\n      return \'Property not found\';\n    }\n  });\n}\n\nconst user = { name: \'John\', age: 30 };\nconst proxy = createProxy(user);\nconsole.log(proxy.name); // Logs "Getting name", then "John"',
        },
        {
          command: 'Composite Pattern',
          description: 'Treat group of objects like single object',
          usage: 'Tree structure for part-whole hierarchies',
          example: 'class Task {\n  constructor(name) {\n    this.name = name;\n    this.subtasks = [];\n  }\n  \n  add(task) {\n    this.subtasks.push(task);\n  }\n  \n  execute() {\n    console.log(`Executing: ${this.name}`);\n    this.subtasks.forEach(task => task.execute());\n  }\n}\n\nconst mainTask = new Task(\'Main\');\nconst subTask1 = new Task(\'Subtask 1\');\nmainTask.add(subTask1);\nmainTask.execute();',
        },
        {
          command: 'Bridge Pattern',
          description: 'Separate abstraction from implementation',
          usage: 'Multiple implementations for same interface',
          example: 'class Renderer {\n  renderCircle(radius) {\n    throw new Error(\'Must implement renderCircle\');\n  }\n}\n\nclass VectorRenderer extends Renderer {\n  renderCircle(radius) {\n    return `Drawing circle of radius ${radius}`;\n  }\n}\n\nclass RasterRenderer extends Renderer {\n  renderCircle(radius) {\n    return `Pixelating circle of radius ${radius}`;\n  }\n}',
        },
        {
          command: 'Flyweight Pattern',
          description: 'Share objects to minimize memory usage',
          usage: 'Object sharing for performance',
          example: 'class TreeFlyweight {\n  constructor(type, color, texture) {\n    this.type = type;\n    this.color = color;\n    this.texture = texture;\n  }\n}\n\nclass TreeFactory {\n  static flyweights = new Map();\n  \n  static getFlyweight(type, color, texture) {\n    const key = `${type}-${color}-${texture}`;\n    if (!this.flyweights.has(key)) {\n      this.flyweights.set(key, new TreeFlyweight(type, color, texture));\n    }\n    return this.flyweights.get(key);\n  }\n}',
        },
        {
          command: 'Private Class Data Pattern',
          description: 'Separate class data from methods',
          usage: 'Data encapsulation and privacy',
          example: 'class Person {\n  constructor(name, age) {\n    this._data = new PersonData(name, age);\n  }\n  \n  getName() {\n    return this._data.name;\n  }\n  \n  getAge() {\n    return this._data.age;\n  }\n}\n\nclass PersonData {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}',
        },
      ],
    },
    // BEHAVIORAL PATTERNS
    {
      title: 'Behavioral Patterns',
      commands: [
        {
          command: 'Observer Pattern',
          description: 'Define one-to-many dependency between objects',
          usage: 'Event-driven programming',
          example: 'class Subject {\n  constructor() {\n    this.observers = [];\n  }\n  \n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  \n  notify(data) {\n    this.observers.forEach(observer => observer.update(data));\n  }\n}\n\nclass Observer {\n  update(data) {\n    console.log(`Received: ${data}`);\n  }\n}\n\nconst subject = new Subject();\nconst observer = new Observer();\nsubject.subscribe(observer);\nsubject.notify(\'Hello World!\');',
        },
        {
          command: 'Iterator Pattern',
          description: 'Access elements of object sequentially',
          usage: 'Custom iteration logic',
          example: 'class Range {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n  }\n  \n  [Symbol.iterator]() {\n    let current = this.start;\n    const end = this.end;\n    \n    return {\n      next() {\n        if (current <= end) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n}\n\nfor (const num of new Range(1, 5)) {\n  console.log(num); // 1, 2, 3, 4, 5\n}',
        },
        {
          command: 'Strategy Pattern',
          description: 'Define family of algorithms, encapsulate each',
          usage: 'Switchable algorithms at runtime',
          example: 'const strategies = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b\n};\n\nclass Calculator {\n  constructor(strategy) {\n    this.strategy = strategy;\n  }\n  \n  execute(a, b) {\n    return this.strategy(a, b);\n  }\n  \n  setStrategy(strategy) {\n    this.strategy = strategy;\n  }\n}\n\nconst calc = new Calculator(strategies.add);\ncalc.execute(5, 3); // 8',
        },
        {
          command: 'Command Pattern',
          description: 'Encapsulate request as object',
          usage: 'Undo/redo functionality',
          example: 'class Command {\n  constructor(execute, undo) {\n    this.execute = execute;\n    this.undo = undo;\n  }\n}\n\nclass Calculator {\n  constructor() {\n    this.value = 0;\n    this.history = [];\n  }\n  \n  executeCommand(command) {\n    this.value = command.execute(this.value);\n    this.history.push(command);\n  }\n  \n  undo() {\n    const command = this.history.pop();\n    this.value = command.undo(this.value);\n  }\n}',
        },
        {
          command: 'State Pattern',
          description: 'Allow object to change behavior when state changes',
          usage: 'State machines',
          example: 'class TrafficLight {\n  constructor() {\n    this.states = {\n      green: new GreenLight(),\n      yellow: new YellowLight(),\n      red: new RedLight()\n    };\n    this.currentState = this.states.green;\n  }\n  \n  change() {\n    this.currentState = this.currentState.next(this.states);\n  }\n  \n  signal() {\n    return this.currentState.signal();\n  }\n}',
        },
        {
          command: 'Template Method Pattern',
          description: 'Define skeleton of algorithm, let subclasses override',
          usage: 'Algorithm framework with customizable steps',
          example: 'class DataProcessor {\n  process(data) {\n    this.loadData(data);\n    this.validateData();\n    this.transformData();\n    this.saveData();\n  }\n  \n  loadData(data) { throw new Error(\'Must implement\'); }\n  validateData() { console.log(\'Validating data\'); }\n  transformData() { throw new Error(\'Must implement\'); }\n  saveData() { console.log(\'Saving data\'); }\n}',
        },
        {
          command: 'Visitor Pattern',
          description: 'Add new operations to object structure without modification',
          usage: 'Separate algorithms from object structure',
          example: 'class Visitor {\n  visitBook(book) {\n    return `Book: ${book.title}`;\n  }\n  \n  visitMovie(movie) {\n    return `Movie: ${movie.title}`;\n  }\n}\n\nclass Book {\n  constructor(title) {\n    this.title = title;\n  }\n  \n  accept(visitor) {\n    return visitor.visitBook(this);\n  }\n}',
        },
        {
          command: 'Mediator Pattern',
          description: 'Define centralized communication between objects',
          usage: 'Loose coupling between components',
          example: 'class ChatMediator {\n  constructor() {\n    this.users = [];\n  }\n  \n  addUser(user) {\n    this.users.push(user);\n    user.setMediator(this);\n  }\n  \n  sendMessage(message, sender) {\n    this.users.forEach(user => {\n      if (user !== sender) {\n        user.receive(message);\n      }\n    });\n  }\n}',
        },
        {
          command: 'Memento Pattern',
          description: 'Capture and restore object state',
          usage: 'Undo functionality, state snapshots',
          example: 'class Memento {\n  constructor(state) {\n    this.state = state;\n    this.date = new Date();\n  }\n}\n\nclass Originator {\n  constructor() {\n    this.state = null;\n  }\n  \n  setState(state) {\n    this.state = state;\n  }\n  \n  save() {\n    return new Memento(this.state);\n  }\n  \n  restore(memento) {\n    this.state = memento.state;\n  }\n}',
        },
        {
          command: 'Chain of Responsibility Pattern',
          description: 'Pass request along chain of handlers',
          usage: 'Event handling, middleware',
          example: 'class Handler {\n  constructor() {\n    this.nextHandler = null;\n  }\n  \n  setNext(handler) {\n    this.nextHandler = handler;\n    return handler;\n  }\n  \n  handle(request) {\n    if (this.canHandle(request)) {\n      return this.doHandle(request);\n    }\n    \n    if (this.nextHandler) {\n      return this.nextHandler.handle(request);\n    }\n    \n    return null;\n  }\n}',
        },
      ],
    },
    // CONCURRENCY PATTERNS
    {
      title: 'Concurrency Patterns',
      commands: [
        {
          command: 'Promise Pattern',
          description: 'Handle asynchronous operations',
          usage: 'Promise chains and async/await',
          example: 'function fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(\'Data loaded\');\n    }, 1000);\n  });\n}\n\n// Promise chain\nfetchData()\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n\n// Async/await\nasync function loadData() {\n  try {\n    const data = await fetchData();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}',
        },
        {
          command: 'Observer Pattern (Events)',
          description: 'Event-driven asynchronous communication',
          usage: 'EventEmitter, custom events',
          example: 'class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n  \n  on(event, callback) {\n    if (!this.events[event]) {\n      this.events[event] = [];\n    }\n    this.events[event].push(callback);\n  }\n  \n  emit(event, data) {\n    if (this.events[event]) {\n      this.events[event].forEach(callback => callback(data));\n    }\n  }\n}',
        },
        {
          command: 'Future/Promise Pattern',
          description: 'Placeholder for future result',
          usage: 'Async operation result handling',
          example: 'class Future {\n  constructor() {\n    this.value = null;\n    this.resolved = false;\n    this.callbacks = [];\n  }\n  \n  then(callback) {\n    if (this.resolved) {\n      callback(this.value);\n    } else {\n      this.callbacks.push(callback);\n    }\n  }\n  \n  resolve(value) {\n    this.value = value;\n    this.resolved = true;\n    this.callbacks.forEach(cb => cb(value));\n  }\n}',
        },
        {
          command: 'Lock Pattern',
          description: 'Prevent concurrent access to shared resources',
          usage: 'Mutex, semaphore implementation',
          example: 'class Lock {\n  constructor() {\n    this.locked = false;\n    this.queue = [];\n  }\n  \n  async acquire() {\n    return new Promise(resolve => {\n      if (!this.locked) {\n        this.locked = true;\n        resolve();\n      } else {\n        this.queue.push(resolve);\n      }\n    });\n  }\n  \n  release() {\n    if (this.queue.length > 0) {\n      const next = this.queue.shift();\n      next();\n    } else {\n      this.locked = false;\n    }\n  }\n}',
        },
        {
          command: 'Thread Pool Pattern',
          description: 'Reuse threads for task execution',
          usage: 'Web Workers, task queue',
          example: 'class ThreadPool {\n  constructor(size) {\n    this.workers = [];\n    this.taskQueue = [];\n    \n    for (let i = 0; i < size; i++) {\n      this.workers.push(new Worker());\n    }\n  }\n  \n  execute(task) {\n    return new Promise((resolve, reject) => {\n      this.taskQueue.push({ task, resolve, reject });\n      this.processQueue();\n    });\n  }\n}',
        },
      ],
    },
    // ARCHITECTURAL PATTERNS
    {
      title: 'Architectural Patterns',
      commands: [
        {
          command: 'MVC Pattern',
          description: 'Model-View-Controller architecture',
          usage: 'Separation of concerns in applications',
          example: 'class Model {\n  constructor(data) {\n    this.data = data;\n    this.observers = [];\n  }\n  \n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  \n  notify() {\n    this.observers.forEach(observer => observer.update(this.data));\n  }\n}\n\nclass View {\n  update(data) {\n    console.log(\'View updated:\', data);\n  }\n}\n\nclass Controller {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n    this.model.subscribe(view);\n  }\n}',
        },
        {
          command: 'MVP Pattern',
          description: 'Model-View-Presenter architecture',
          usage: 'Enhanced separation of view logic',
          example: 'class Presenter {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n  }\n  \n  updateView() {\n    const data = this.model.getData();\n    this.view.display(data);\n  }\n  \n  onUserInput(input) {\n    this.model.updateData(input);\n    this.updateView();\n  }\n}',
        },
        {
          command: 'MVVM Pattern',
          description: 'Model-View-ViewModel architecture',
          usage: 'Data binding and view state management',
          example: 'class ViewModel {\n  constructor(model) {\n    this.model = model;\n    this.viewData = {};\n  }\n  \n  bind(property, element) {\n    element.value = this.viewData[property];\n    element.addEventListener(\'input\', (e) => {\n      this.viewData[property] = e.target.value;\n      this.model.update(property, e.target.value);\n    });\n  }\n}',
        },
        {
          command: 'Repository Pattern',
          description: 'Mediate between domain and data mapping layers',
          usage: 'Data access abstraction',
          example: 'class Repository {\n  constructor(dataSource) {\n    this.dataSource = dataSource;\n  }\n  \n  findById(id) {\n    return this.dataSource.find(item => item.id === id);\n  }\n  \n  findAll() {\n    return this.dataSource.getAll();\n  }\n  \n  save(entity) {\n    return this.dataSource.save(entity);\n  }\n}',
        },
        {
          command: 'Service Layer Pattern',
          description: 'Define application boundaries and encapsulate business logic',
          usage: 'Business logic coordination',
          example: 'class UserService {\n  constructor(userRepository, emailService) {\n    this.userRepository = userRepository;\n    this.emailService = emailService;\n  }\n  \n  async createUser(userData) {\n    const user = await this.userRepository.save(userData);\n    await this.emailService.sendWelcomeEmail(user.email);\n    return user;\n  }\n}',
        },
        {
          command: 'Data Mapper Pattern',
          description: 'Separate in-memory objects from database representation',
          usage: 'ORM-like data mapping',
          example: 'class UserMapper {\n  toEntity(data) {\n    return new User(data.id, data.name, data.email);\n  }\n  \n  toDatabase(entity) {\n    return {\n      id: entity.id,\n      name: entity.name,\n      email: entity.email\n    };\n  }\n}',
        },
        {
          command: 'Unit of Work Pattern',
          description: 'Maintain list of objects affected by transaction',
          usage: 'Transaction management',
          example: 'class UnitOfWork {\n  constructor() {\n    this.newObjects = [];\n    this.dirtyObjects = [];\n    this.removedObjects = [];\n  }\n  \n  registerNew(obj) {\n    this.newObjects.push(obj);\n  }\n  \n  registerDirty(obj) {\n    this.dirtyObjects.push(obj);\n  }\n  \n  async commit() {\n    // Save all changes in single transaction\n    await this.saveNew();\n    await this.saveDirty();\n    await this.deleteRemoved();\n  }\n}',
        },
      ],
    },
    // FUNCTIONAL PATTERNS
    {
      title: 'Functional Patterns',
      commands: [
        {
          command: 'Pure Functions',
          description: 'Functions without side effects',
          usage: 'Predictable, testable functions',
          example: '// Pure function\nfunction add(a, b) {\n  return a + b; // No side effects\n}\n\n// Impure function (has side effects)\nlet total = 0;\nfunction addToTotal(value) {\n  total += value; // Modifies external state\n  return total;\n}\n\n// Pure function alternative\nfunction addToTotalPure(total, value) {\n  return total + value;\n}',
        },
        {
          command: 'Higher-Order Functions',
          description: 'Functions that take or return functions',
          usage: 'map, filter, reduce',
          example: 'const numbers = [1, 2, 3, 4, 5];\n\n// Map - transform each element\nconst doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]\n\n// Filter - select elements\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\n\n// Reduce - aggregate values\nconst sum = numbers.reduce((acc, n) => acc + n, 0); // 15',
        },
        {
          command: 'Currying Pattern',
          description: 'Transform function with multiple arguments',
          usage: 'Partial application of functions',
          example: '// Curried function\nconst curry = (fn) => {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return (...nextArgs) => curried(...args, ...nextArgs);\n  };\n};\n\nconst add = (a, b, c) => a + b + c;\nconst curriedAdd = curry(add);\n\nconsole.log(curriedAdd(1)(2)(3)); // 6\nconsole.log(curriedAdd(1, 2)(3)); // 6',
        },
        {
          command: 'Composition Pattern',
          description: 'Combine functions to create new functions',
          usage: 'Function composition',
          example: 'const compose = (...fns) => (value) => \n  fns.reduceRight((acc, fn) => fn(acc), value);\n\nconst addOne = x => x + 1;\nconst double = x => x * 2;\nconst toString = x => x.toString();\n\nconst addOneAndDoubleToString = compose(toString, double, addOne);\nconsole.log(addOneAndDoubleToString(3)); // "8"',
        },
        {
          command: 'Memoization Pattern',
          description: 'Cache function results',
          usage: 'Performance optimization',
          example: 'function memoize(fn) {\n  const cache = new Map();\n  \n  return function(...args) {\n    const key = JSON.stringify(args);\n    \n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    \n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst slowFunction = (n) => {\n  // Simulate slow operation\n  for (let i = 0; i < 1000000; i++) {}\n  return n * 2;\n};\n\nconst memoizedSlow = memoize(slowFunction);',
        },
        {
          command: 'Monad Pattern',
          description: 'Design pattern for handling side effects',
          usage: 'Optional, Either, Promise monads',
          example: 'class Maybe {\n  static just(value) {\n    return new Just(value);\n  }\n  \n  static nothing() {\n    return new Nothing();\n  }\n}\n\nclass Just extends Maybe {\n  constructor(value) {\n    super();\n    this._value = value;\n  }\n  \n  map(fn) {\n    return Maybe.just(fn(this._value));\n  }\n  \n  getOrElse(defaultValue) {\n    return this._value;\n  }\n}',
        },
        {
          command: 'Functor Pattern',
          description: 'Objects that can be mapped over',
          usage: 'Array, Maybe, Either functors',
          example: 'class Container {\n  constructor(value) {\n    this._value = value;\n  }\n  \n  map(fn) {\n    return new Container(fn(this._value));\n  }\n  \n  static of(value) {\n    return new Container(value);\n  }\n}\n\nconst result = Container.of(5)\n  .map(x => x * 2)\n  .map(x => x + 1); // Container(11)',
        },
        {
          command: 'Applicative Pattern',
          description: 'Apply wrapped functions to wrapped values',
          usage: 'Validation, configuration',
          example: 'class Applicative {\n  static apply(fn, value) {\n    return value.map(v => fn.map(f => f(v)));\n  }\n  \n  static liftA2(fn, value1, value2) {\n    return value1.map(v1 => \n      value2.map(v2 => fn(v1, v2))\n    ).flatten();\n  }\n}\n\n// Example: Add two Maybe values\nconst add = (a, b) => a + b;\nconst result = Applicative.liftA2(add, Maybe.just(5), Maybe.just(3));',
        },
      ],
    },
    // PERFORMANCE PATTERNS
    {
      title: 'Performance Patterns',
      commands: [
        {
          command: 'Debouncing Pattern',
          description: 'Limit function execution rate',
          usage: 'Search input optimization',
          example: 'function debounce(func, delay) {\n  let timeoutId;\n  \n  return function(...args) {\n    clearTimeout(timeoutId);\n    \n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\nconst searchInput = document.getElementById(\'search\');\nconst handleSearch = debounce((query) => {\n  console.log(\'Searching for:\', query);\n}, 300);\n\nsearchInput.addEventListener(\'input\', (e) => {\n  handleSearch(e.target.value);\n});',
        },
        {
          command: 'Throttling Pattern',
          description: 'Limit function execution frequency',
          usage: 'Scroll event optimization',
          example: 'function throttle(func, limit) {\n  let inThrottle;\n  \n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => {\n        inThrottle = false;\n      }, limit);\n    }\n  };\n}\n\nconst handleScroll = throttle(() => {\n  console.log(\'Scroll position:\', window.scrollY);\n}, 100);\n\nwindow.addEventListener(\'scroll\', handleScroll);',
        },
        {
          command: 'Lazy Loading Pattern',
          description: 'Load resources on demand',
          usage: 'Image and component lazy loading',
          example: 'class LazyLoader {\n  constructor() {\n    this.observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          this.loadImage(entry.target);\n          this.observer.unobserve(entry.target);\n        }\n      });\n    });\n  }\n  \n  observe(img) {\n    this.observer.observe(img);\n  }\n  \n  loadImage(img) {\n    img.src = img.dataset.src;\n    img.classList.add(\'loaded\');\n  }\n}',
        },
        {
          command: 'Virtual DOM Pattern',
          description: 'Efficient DOM updates',
          usage: 'React-like diffing algorithm',
          example: 'class VirtualDOM {\n  constructor() {\n    this.virtualTree = null;\n    this.realDOM = null;\n  }\n  \n  render(component) {\n    const newTree = component.render();\n    \n    if (!this.realDOM) {\n      this.realDOM = this.createElement(newTree);\n      document.body.appendChild(this.realDOM);\n    } else {\n      const patches = this.diff(this.virtualTree, newTree);\n      this.applyPatches(patches);\n    }\n    \n    this.virtualTree = newTree;\n  }\n}',
        },
        {
          command: 'Batch Processing Pattern',
          description: 'Process items in batches for performance',
          usage: 'Large dataset processing',
          example: 'class BatchProcessor {\n  constructor(batchSize = 100) {\n    this.batchSize = batchSize;\n  }\n  \n  async process(items, processor) {\n    const results = [];\n    \n    for (let i = 0; i < items.length; i += this.batchSize) {\n      const batch = items.slice(i, i + this.batchSize);\n      const batchResults = await Promise.all(\n        batch.map(item => processor(item))\n      );\n      results.push(...batchResults);\n      \n      // Allow event loop to process other tasks\n      await new Promise(resolve => setTimeout(resolve, 0));\n    }\n    \n    return results;\n  }\n}',
        },
        {
          command: 'Object Pool Pattern (Performance)',
          description: 'Reuse expensive objects',
          usage: 'Game development, animation',
          example: 'class ParticlePool {\n  constructor(maxSize = 1000) {\n    this.pool = [];\n    this.active = [];\n    this.maxSize = maxSize;\n    \n    for (let i = 0; i < maxSize; i++) {\n      this.pool.push(this.createParticle());\n    }\n  }\n  \n  acquire() {\n    if (this.pool.length > 0) {\n      const particle = this.pool.pop();\n      this.active.push(particle);\n      return particle;\n    }\n    return null;\n  }\n  \n  release(particle) {\n    const index = this.active.indexOf(particle);\n    if (index > -1) {\n      this.active.splice(index, 1);\n      this.reset(particle);\n      this.pool.push(particle);\n    }\n  }\n}',
        },
      ],
    },
    // SECURITY PATTERNS
    {
      title: 'Security Patterns',
      commands: [
        {
          command: 'Secure Factory Pattern',
          description: 'Create objects with security constraints',
          usage: 'Secure object instantiation',
          example: 'class SecureUserFactory {\n  static createUser(userData, permissions) {\n    const sanitizedData = this.sanitize(userData);\n    const user = new User(sanitizedData);\n    \n    if (this.hasPermission(permissions, \'create\')) {\n      return user;\n    }\n    \n    throw new Error(\'Insufficient permissions\');\n  }\n  \n  static sanitize(data) {\n    // Remove sensitive fields\n    const { password, ...safeData } = data;\n    return safeData;\n  }\n}',
        },
        {
          command: 'Proxy Pattern (Security)',
          description: 'Control access to sensitive operations',
          usage: 'Access control, validation',
          example: 'function createSecureProxy(target, permissions) {\n  return new Proxy(target, {\n    get(obj, prop) {\n      if (permissions.includes(prop)) {\n        return obj[prop];\n      }\n      throw new Error(`Access denied to property: ${prop}`);\n    },\n    \n    set(obj, prop, value) {\n      if (permissions.includes(`${prop}:write`)) {\n        obj[prop] = value;\n        return true;\n      }\n      throw new Error(`Write access denied to property: ${prop}`);\n    }\n  });\n}',
        },
        {
          command: 'Immutable Pattern',
          description: 'Create objects that cannot be modified',
          usage: 'Security, thread safety',
          example: 'function createImmutable(obj) {\n  return Object.freeze(JSON.parse(JSON.stringify(obj)));\n}\n\n// Using Proxy for deep immutability\nfunction deepFreeze(obj) {\n  Object.getOwnPropertyNames(obj).forEach(prop => {\n    if (obj[prop] !== null && typeof obj[prop] === \'object\') {\n      deepFreeze(obj[prop]);\n    }\n  });\n  return Object.freeze(obj);\n}',
        },
        {
          command: 'Sandbox Pattern',
          description: 'Execute code in isolated environment',
          usage: 'Plugin systems, eval security',
          example: 'class Sandbox {\n  constructor(allowedAPIs) {\n    this.allowedAPIs = allowedAPIs;\n  }\n  \n  execute(code, context = {}) {\n    const sandboxedCode = `\n      (function(${Object.keys(this.allowedAPIs).join(\',\')}) {\n        ${code}\n      })(${Object.values(this.allowedAPIs).map(api => `this.${api}`).join(\',\')})\n    `;\n    \n    return new Function(\'context\', sandboxedCode).call(context, context);\n  }\n}',
        },
      ],
    },
    // TESTING PATTERNS
    {
      title: 'Testing Patterns',
      commands: [
        {
          command: 'Test Double Pattern',
          description: 'Replace production objects with test doubles',
          usage: 'Mocks, stubs, fakes',
          example: '// Mock object\nclass MockUserService {\n  constructor() {\n    this.users = [];\n    this.calledMethods = [];\n  }\n  \n  getUser(id) {\n    this.calledMethods.push(\'getUser\');\n    return this.users.find(user => user.id === id);\n  }\n  \n  addUser(user) {\n    this.calledMethods.push(\'addUser\');\n    this.users.push(user);\n  }\n  \n  verify(methodCalled) {\n    return this.calledMethods.includes(methodCalled);\n  }\n}',
        },
        {
          command: 'Builder Pattern (Testing)',
          description: 'Create test data objects',
          usage: 'Test data construction',
          example: 'class UserBuilder {\n  constructor() {\n    this.user = {\n      id: null,\n      name: \'Default User\',\n      email: \'default@example.com\',\n      active: true\n    };\n  }\n  \n  withId(id) {\n    this.user.id = id;\n    return this;\n  }\n  \n  withName(name) {\n    this.user.name = name;\n    return this;\n  }\n  \n  withEmail(email) {\n    this.user.email = email;\n    return this;\n  }\n  \n  inactive() {\n    this.user.active = false;\n    return this;\n  }\n  \n  build() {\n    return { ...this.user };\n  }\n}',
        },
        {
          command: 'Page Object Pattern',
          description: 'Encapsulate page interactions',
          usage: 'E2E testing',
          example: 'class LoginPage {\n  constructor() {\n    this.usernameInput = \'#username\';\n    this.passwordInput = \'#password\';\n    this.submitButton = \'#submit\';\n  }\n  \n  async login(username, password) {\n    await page.fill(this.usernameInput, username);\n    await page.fill(this.passwordInput, password);\n    await page.click(this.submitButton);\n  }\n  \n  async getErrorMessage() {\n    return await page.textContent(\'.error-message\');\n  }\n}',
        },
        {
          command: 'Data Provider Pattern',
          description: 'Separate test data from test logic',
          usage: 'Parameterized tests',
          example: 'class TestDataProvider {\n  static validUsers() {\n    return [\n      { username: \'user1\', password: \'pass1\', expected: true },\n      { username: \'user2\', password: \'pass2\', expected: true },\n      { username: \'admin\', password: \'admin\', expected: true }\n    ];\n  }\n  \n  static invalidUsers() {\n    return [\n      { username: \'\', password: \'pass\', expected: false },\n      { username: \'user\', password: \'\', expected: false },\n      { username: \'wrong\', password: \'wrong\', expected: false }\n    ];\n  }\n}',
        },
      ],
    },
    // MODERN JS PATTERNS
    {
      title: 'Modern JavaScript Patterns',
      commands: [
        {
          command: 'ES6 Modules',
          description: 'Modern module system with import/export',
          usage: 'import/export for code organization',
          example: '// math.js\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { PI, add } from \'./math.js\';\nimport * as math from \'./math.js\';\n\nconsole.log(PI);\nconsole.log(add(2, 3));',
        },
        {
          command: 'Class Pattern',
          description: 'ES6 class syntax for OOP',
          usage: 'class extends for inheritance',
          example: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return `${this.name} barks`;\n  }\n}\n\nconst dog = new Dog(\'Rex\');\nconsole.log(dog.speak());',
        },
        {
          command: 'Destructuring Pattern',
          description: 'Extract values from arrays and objects',
          usage: 'Clean variable assignment',
          example: '// Object destructuring\nconst user = { name: \'John\', age: 30, city: \'NYC\' };\nconst { name, age } = user;\n\n// Array destructuring\nconst colors = [\'red\', \'green\', \'blue\'];\nconst [first, second] = colors;\n\n// Function parameter destructuring\nfunction greet({ name, age }) {\n  console.log(`${name} is ${age} years old`);\n}\ngreet(user);',
        },
        {
          command: 'Spread/Rest Pattern',
          description: 'Spread and rest operators',
          usage: 'Array/object manipulation',
          example: '// Spread operator\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }\n\n// Rest operator\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10',
        },
        {
          command: 'Async/Await Pattern',
          description: 'Modern async syntax',
          usage: 'Clean async code',
          example: 'async function fetchUserData(userId) {\n  try {\n    const userResponse = await fetch(`/api/users/${userId}`);\n    const user = await userResponse.json();\n    \n    const postsResponse = await fetch(`/api/users/${user.id}/posts`);\n    const posts = await postsResponse.json();\n    \n    return { user, posts };\n  } catch (error) {\n    console.error(\'Error fetching data:\', error);\n    throw error;\n  }\n}',
        },
        {
          command: 'Generator Pattern',
          description: 'Pause and resume function execution',
          usage: 'Custom iterators and async flows',
          example: 'function* numberGenerator() {\n  let i = 0;\n  while (true) {\n    yield i++;\n  }\n}\n\nconst gen = numberGenerator();\nconsole.log(gen.next().value); // 0\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2\n\n// Async generator\nasync function* asyncGenerator() {\n  const data = await fetch(\'/api/data\');\n  yield await data.json();\n}',
        },
        {
          command: 'Proxy Pattern (Modern)',
          description: 'Modern ES6 Proxy usage',
          usage: 'Meta-programming, validation',
          example: 'const validator = {\n  set(obj, prop, value) {\n    if (prop === \'age\' && (typeof value !== \'number\' || value < 0)) {\n      throw new Error(\'Age must be a positive number\');\n    }\n    obj[prop] = value;\n    return true;\n  }\n};\n\nconst person = new Proxy({}, validator);\nperson.age = 25; // OK\nperson.age = -5; // Throws error',
        },
        {
          command: 'Reflect Pattern',
          description: 'Meta-programming with Reflect API',
          usage: 'Dynamic property access',
          example: 'const obj = { a: 1, b: 2 };\n\n// Using Reflect instead of direct access\nconst value = Reflect.get(obj, \'a\');\nconst hasProperty = Reflect.has(obj, \'b\');\nconst keys = Reflect.ownKeys(obj);\n\n// Safe property deletion\nconst deleted = Reflect.deleteProperty(obj, \'a\');',
        },
      ],
    },
    // REACTIVE PATTERNS
    {
      title: 'Reactive Patterns',
      commands: [
        {
          command: 'Observable Pattern',
          description: 'Push-based data streams',
          usage: 'RxJS, reactive programming',
          example: 'class Observable {\n  constructor(subscribe) {\n    this.subscribe = subscribe;\n  }\n  \n  static fromEvent(element, eventName) {\n    return new Observable(observer => {\n      const handler = event => observer.next(event);\n      element.addEventListener(eventName, handler);\n      return () => element.removeEventListener(eventName, handler);\n    });\n  }\n  \n  map(fn) {\n    return new Observable(observer => {\n      return this.subscribe({\n        next: value => observer.next(fn(value)),\n        error: observer.error,\n        complete: observer.complete\n      });\n    });\n  }\n}',
        },
        {
          command: 'Stream Pattern',
          description: 'Process data as streams',
          usage: 'Data processing pipelines',
          example: 'class Stream {\n  constructor(source) {\n    this.source = source;\n  }\n  \n  filter(predicate) {\n    return new Stream(this.source.filter(predicate));\n  }\n  \n  map(transformer) {\n    return new Stream(this.source.map(transformer));\n  }\n  \n  reduce(reducer, initial) {\n    return this.source.reduce(reducer, initial);\n  }\n  \n  toArray() {\n    return Array.from(this.source);\n  }\n}',
        },
        {
          command: 'Reactive Extensions Pattern',
          description: 'Composable asynchronous programming',
          usage: 'Event handling, async flows',
          example: 'class ReactiveExtensions {\n  static fromPromise(promise) {\n    return new Observable(observer => {\n      promise\n        .then(value => {\n          observer.next(value);\n          observer.complete();\n        })\n        .catch(error => observer.error(error));\n    });\n  }\n  \n  static merge(...observables) {\n    return new Observable(observer => {\n      const subscriptions = observables.map(obs => \n        obs.subscribe(observer)\n      );\n      return () => subscriptions.forEach(sub => sub());\n    });\n  }\n}',
        },
      ],
    },
  ],
};
