
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, EyeOff, Puzzle, FileJson, Lightbulb, Settings, GitCompareArrows, CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';

interface JavaAbstractionProps {
  onOpenEditor: (code: string) => void;
}

export function JavaAbstraction({ onOpenEditor }: JavaAbstractionProps) {

    const abstractClassExample = `// Abstract class
abstract class Animal {
  // Abstract method (does not have a body)
  public abstract void animalSound();
  
  // Regular method
  public void sleep() {
    System.out.println("Zzz");
  }
}

// Subclass (inherit from Animal)
class Pig extends Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    // Animal myAnimal = new Animal(); // This would cause an error
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}`;

    const interfaceExample = `// Interface
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void run(); // interface method (does not have a body)
}

// Pig "implements" the Animal interface
class Pig implements Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
  public void run() {
    System.out.println("Running...");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig();
    myPig.animalSound();
    myPig.run();
  }
}`;

    return (
        <div id="java-abstraction-page" data-test="java-abstraction-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <EyeOff className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Abstraction</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Hiding complexity, showing only what's necessary.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Abstraction?</CardTitle>
                    <CardDescription>
                       Abstraction is the process of hiding the complex implementation details from the user and only showing the essential features of an object.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Think about a car. To drive a car, you only need to know how to use the steering wheel, pedals, and gear stick. You don't need to know how the engine, transmission, or electronics work internally. The car's complex inner workings are **hidden** from you, and you are given a **simple interface** to interact with it. This is abstraction.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Puzzle className="w-8 h-8 text-primary"/>
                       <CardTitle className="text-3xl">Abstract Classes</CardTitle>
                    </div>
                    <CardDescription>
                        An abstract class is a restricted class that cannot be used to create objects (it can't be instantiated). To access it, it must be inherited from another class. It can have both abstract and regular methods.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">An **abstract method** is a method that is declared without an implementation (without braces, and followed by a semicolon).</p>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{abstractClassExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(abstractClassExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <FileJson className="w-8 h-8 text-primary"/>
                       <CardTitle className="text-3xl">Interfaces</CardTitle>
                    </div>
                    <CardDescription>
                        An interface is a completely "abstract class" that is used to group related methods with empty bodies. A class `implements` an interface, inheriting the abstract methods of the interface.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <p className="text-sm text-muted-foreground mb-4">Interfaces can only contain abstract methods and `public static final` fields. Methods are `public abstract` by default.</p>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{interfaceExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(interfaceExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <GitCompareArrows className="w-6 h-6"/>
                        Abstract Class vs. Interface: Key Differences
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">Abstract Class</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li className="flex items-start gap-2"><CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5"/>Can have both abstract and non-abstract (regular) methods.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5"/>Can have `final`, `static`, and non-`final` or `static` variables.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5"/>A subclass can only `extend` one abstract class.</li>
                            <li className="flex items-start gap-2"><XCircle className="text-destructive w-5 h-5 shrink-0 mt-0.5"/>Cannot be used to achieve multiple inheritance.</li>
                        </ul>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">Interface</h3>
                         <ul className="list-disc list-inside space-y-2 text-sm">
                            <li className="flex items-start gap-2"><XCircle className="text-destructive w-5 h-5 shrink-0 mt-0.5"/>Can only have abstract methods (Java 8+ allows default and static methods).</li>
                            <li className="flex items-start gap-2"><XCircle className="text-destructive w-5 h-5 shrink-0 mt-0.5"/>Variables are `public`, `static`, and `final` by default.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5"/>A class can `implement` multiple interfaces.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="text-green-500 w-5 h-5 shrink-0 mt-0.5"/>Can be used to achieve multiple inheritance.</li>
                        </ul>
                    </div>
                </CardContent>
                <CardContent>
                    <p className="text-sm text-center text-muted-foreground mt-4">
                        **Main takeaway:** Choose an abstract class when you want to provide some common, implemented functionality for subclasses to share. Choose an interface when you want to define a "contract" of methods that a class must implement, without providing any of the implementation yourself.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
