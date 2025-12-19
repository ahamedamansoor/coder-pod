import { FileCode } from 'lucide-react';

export const typescriptCheatsheet = {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Static typing for JavaScript',
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
                    example: 'let name: string = "TS";\nlet count: number = 42;\nlet isDone: boolean = false;',
                },
                {
                    command: 'Arrays & Tuples',
                    description: 'Typed lists',
                    usage: 'Type[], [Type, Type]',
                    example: 'let list: number[] = [1, 2, 3];\nlet tuple: [string, number] = ["hello", 10];',
                },
                {
                    command: 'Type Aliases',
                    description: 'Custom names for types',
                    usage: 'type Name = ...',
                    example: 'type ID = string | number;\ntype Point = { x: number; y: number };',
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
                    example: 'interface User {\n  name: string;\n  age?: number; // Optional\n  readonly id: number;\n}',
                },
                {
                    command: 'Extending',
                    description: 'Inheriting properties',
                    usage: 'interface A extends B',
                    example: 'interface Admin extends User {\n  role: string;\n}',
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
                    example: 'function identity<T>(arg: T): T {\n  return arg;\n}\nlet n = identity<number>(5);',
                },
                {
                    command: 'Generic Interface',
                    description: 'Reusable interface shapes',
                    usage: 'interface Box<T>',
                    example: 'interface Box<T> {\n  value: T;\n}\nlet box: Box<string> = { value: "Gift" };',
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
                    example: 'function update(user: Partial<User>) { ... }',
                },
                {
                    command: 'Pick<T, K>',
                    description: 'Select subset of keys',
                    usage: 'Pick<User, "name" | "id">',
                    example: 'type UserPreview = Pick<User, "name">;',
                },
                {
                    command: 'Omit<T, K>',
                    description: 'Remove subset of keys',
                    usage: 'Omit<User, "password">',
                    example: 'type PublicUser = Omit<User, "token">;',
                },
                {
                    command: 'Record<K, V>',
                    description: 'Key-value map type',
                    usage: 'Record<string, number>',
                    example: 'const scores: Record<string, number> = {\n  "Alice": 10,\n  "Bob": 5\n};',
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
                    example: 'type ID = string | number;\ntype AdminUser = User & { admin: true };',
                },
                {
                    command: 'Enums',
                    description: 'Named constants',
                    usage: 'enum Name { val = X }',
                    example: 'enum Status { Active, Inactive }\nlet s = Status.Active;',
                },
                {
                    command: 'unknown vs any',
                    description: 'Safe vs unsafe dynamic type',
                    usage: 'unknown, any',
                    example: 'let u: unknown = 4; // Check before use\nlet a: any = 4; // No checks',
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
                    example: 'class Car {\n  private speed: number;\n  readonly model: string;\n}',
                },
                {
                    command: 'Abstract Class',
                    description: 'Base class awaiting implementation',
                    usage: 'abstract class Name { abstract m() }',
                    example: 'abstract class Shape {\n  abstract area(): number;\n}',
                },
                {
                    command: 'Implements',
                    description: 'Class satisfying an interface',
                    usage: 'class C implements I',
                    example: 'class UserImpl implements User {\n  name: string;\n}',
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
                    example: 'if (typeof id === "string") {\n  console.log(id.toUpperCase());\n}',
                },
                {
                    command: 'Type Predicates',
                    description: 'Custom type guards',
                    usage: 'arg is Type',
                    example: 'function isFish(pet: Pet): pet is Fish {\n  return (pet as Fish).swim !== undefined;\n}',
                },
                {
                    command: 'Assertion',
                    description: 'Override inference',
                    usage: 'as Type',
                    example: 'const input = document.getElementById("in") as HTMLInputElement;',
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
                    example: 'function greet(name: string = "Guest", age?: number) { ... }',
                },
                {
                    command: 'Rest Parameters',
                    description: 'Variable arguments',
                    usage: '...args: Type[]',
                    example: 'function sum(...nums: number[]) { ... }',
                },
                {
                    command: 'Overloads',
                    description: 'Multiple signatures',
                    usage: 'function name(s: string): void;',
                    example: 'function makeDate(ts: number): Date;\nfunction makeDate(d: number, m: number, y: number): Date;',
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
                    example: 'strictNullChecks, noImplicitAny, etc.',
                },
                {
                    command: 'target / lib',
                    description: 'Output version and libraries',
                    usage: '"target": "ES6"',
                    example: '"lib": ["DOM", "ESNext"]',
                },
            ],
        },
    ],
};
