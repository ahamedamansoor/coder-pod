
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Variable, Box, Link2, Play, ChevronRight } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaDataTypes({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const [selectedTypeId, setSelectedTypeId] = React.useState<string | null>(null);

  const primitiveTypes = [
    { id: 'byte', name: 'byte', size: '8-bit', range: '-128 to 127', example: 'byte age = 30;\nSystem.out.println(age);', description: 'Stores whole numbers.' },
    { id: 'short', name: 'short', size: '16-bit', range: '-32,768 to 32,767', example: 'short salary = 25000;\nSystem.out.println(salary);', description: 'Stores whole numbers.' },
    { id: 'int', name: 'int', size: '32-bit', range: '-2,147,483,648 to 2,147,483,647', example: 'int population = 1000000;\nSystem.out.println(population);', description: 'Stores whole numbers, commonly used.' },
    { id: 'long', name: 'long', size: '64-bit', range: '-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807', example: 'long worldPopulation = 8000000000L;\nSystem.out.println(worldPopulation);', description: 'Stores very large whole numbers.' },
    { id: 'float', name: 'float', size: '32-bit', precision: '~6-7 digits', example: 'float price = 19.99f;\nSystem.out.println(price);', description: 'Stores fractional numbers.' },
    { id: 'double', name: 'double', size: '64-bit', precision: '~15 digits', example: 'double pi = 3.1415926535;\nSystem.out.println(pi);', description: 'Stores fractional numbers, commonly used.' },
    { id: 'boolean', name: 'boolean', size: '1-bit', values: 'true or false', example: 'boolean isLoggedIn = true;\nSystem.out.println(isLoggedIn);', description: 'Stores true or false values.' },
    { id: 'char', name: 'char', size: '16-bit', range: '0 to 65,535', example: 'char grade = \'A\';\nSystem.out.println(grade);', description: 'Stores single Unicode characters. You can look up characters on the' },
  ];

  const referenceTypes = [
    { id: 'string', name: 'String', description: 'A sequence of characters, like "Hello World".', example: 'String greeting = "Hello, Java!";\nSystem.out.println(greeting);' },
    { id: 'array', name: 'Array', description: 'A collection of variables of the same type.', example: 'int[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[0]);' },
    { id: 'class', name: 'Class', description: 'A blueprint for creating objects.', example: 'class MyClass { int x = 5; }\nMyClass myObj = new MyClass();\nSystem.out.println(myObj.x);' },
    { id: 'interface', name: 'Interface', description: 'A contract for what a class can do.', example: 'interface Animal { public void makeSound(); }\nclass Dog implements Animal {\n  public void makeSound() {\n    System.out.println("Woof");\n  }\n}\nDog myDog = new Dog();\nmyDog.makeSound();' },
  ];

  return (
    <div id="java-data-types-page" data-test="java-data-types-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Variable className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Java Data Types</h1>
        </div>
        <p className="text-muted-foreground text-lg">Understanding the building blocks of data in Java</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Box className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Primitive Types</CardTitle>
          </div>
          <CardDescription>The fundamental data types directly holding values.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primitiveTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedTypeId(type.id === selectedTypeId ? null : type.id)}
              className={("bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50" + (selectedTypeId === type.id ? ' border-primary ring-2 ring-primary/50' : ' border-border'))}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{type.name}</h3>
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{type.size}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 h-10">
                {type.description}{' '}
                {type.id === 'char' && (
                  <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Unicode website
                  </a>
                )}.
              </p>
              
              {selectedTypeId === type.id && (
                <div className="mt-4 space-y-3 bg-foreground/5 rounded-lg p-3 overflow-x-auto">
                    <p className="text-xs text-muted-foreground mb-1">Range:</p>
                    <p className="text-sm font-semibold whitespace-pre-wrap">{type.range || type.values || type.precision}</p>
                    <p className="text-xs text-muted-foreground mb-1 mt-2">Example:</p>
                    <pre className="text-primary text-sm font-code whitespace-pre-wrap">{type.example}</pre>
                    <Button onClick={(e) => { e.stopPropagation(); onOpenEditor(wrapInMain(type.example)); }} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </div>
              )}

              <div className="flex items-center justify-end mt-4 text-primary">
                <span className="text-sm font-medium">
                  {selectedTypeId === type.id ? 'Collapse' : 'Expand'}
                </span>
                <ChevronRight className={"w-4 h-4 ml-1 transition-transform" + (selectedTypeId === type.id ? ' rotate-90' : '')} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Link2 className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Reference Types</CardTitle>
          </div>
          <CardDescription>Types that store a reference (or address) to an object in memory.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referenceTypes.map((type) => (
             <div key={type.id} className="bg-muted border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
               <h3 className="font-bold text-primary text-lg mb-2">{type.name}</h3>
               <p className="text-sm text-foreground mb-3 h-12">{type.description}</p>
               <div className="bg-background/50 rounded p-2 overflow-x-auto">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{type.example}</code></pre>
               </div>
               <Button onClick={() => onOpenEditor(wrapInMain(type.example))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
               </Button>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
