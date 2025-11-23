'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowUp, Lightbulb, Rocket, Car } from 'lucide-react';
import React from 'react';

interface JavaSuperKeywordProps {
  onOpenEditor: (code: string) => void;
}

export function JavaSuperKeyword({ onOpenEditor }: JavaSuperKeywordProps) {

    const superConstructorExample = `// Parent class
class Vehicle {
  String brand;

  // Parent class constructor
  public Vehicle(String brand) {
    this.brand = brand;
    System.out.println("Vehicle constructor called. Brand is: " + this.brand);
  }
}

// Child class
class Car extends Vehicle {
  String modelName;

  // Child class constructor
  public Car(String brand, String model) {
    super(brand); // 1. Calls the parent constructor
    this.modelName = model;
    System.out.println("Car constructor called. Model is: " + this.modelName);
  }
}

public class Main {
  public static void main(String[] args) {
    // Creating an object of the child class
    Car myCar = new Car("Ford", "Mustang");
  }
}`;

    const superMethodExample = `// Parent class
class Animal {
  public void makeSound() {
    System.out.println("Animal makes a sound");
  }
}

// Child class
class Dog extends Animal {
  // Overriding the parent's method
  @Override
  public void makeSound() {
    super.makeSound(); // 2. Calls the parent's makeSound() method
    System.out.println("Dog barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog myDog = new Dog();
    myDog.makeSound();
  }
}`;

    return (
        <div id="java-super-keyword-page" data-test="java-super-keyword-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <ArrowUp className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">The "super" Keyword</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">How a child class can refer directly to its parent class.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is `super`?</CardTitle>
                    <CardDescription>
                       The `super` keyword is a reference variable that is used to refer to the immediate parent class object. It's like a special phone line that a child class can use to talk to its parent.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>1. Calling the Parent Constructor</CardTitle>
                        <CardDescription>When you create an object of a child class, the parent class's constructor is called first. You use `super()` to explicitly call the parent's constructor and pass arguments to it.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted p-4 rounded-lg flex flex-col items-center gap-4 text-center border">
                           <div className="border-2 border-primary rounded-lg p-4 w-full bg-primary/5">
                               <h3 className="text-lg font-bold text-primary flex items-center justify-center gap-2"><Rocket className="w-5 h-5"/>Vehicle (Parent)</h3>
                               <p className="font-mono text-sm mt-1 bg-background p-1 rounded">public Vehicle(String brand)</p>
                           </div>
                           <ArrowUp className="w-6 h-6 text-muted-foreground" />
                           <div className="border-2 border-secondary rounded-lg p-4 w-full bg-secondary/10">
                               <h3 className="text-lg font-bold text-secondary-foreground flex items-center justify-center gap-2"><Car className="w-5 h-5"/>Car (Child)</h3>
                               <p className="font-mono text-sm mt-1 bg-background p-1 rounded">public Car(...) &#123; super(brand); &#125;</p>
                           </div>
                        </div>
                        <div className="mt-4 bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{superConstructorExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(superConstructorExample)} variant="ghost" size="sm" className="mt-2">
                           <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>2. Calling a Parent Method</CardTitle>
                        <CardDescription>When a child class overrides a method from its parent, you can use `super.methodName()` to call the parent's version of that method from within the child's method.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="bg-muted p-4 rounded-lg flex flex-col items-center gap-4 text-center border">
                           <div className="border-2 border-primary rounded-lg p-4 w-full bg-primary/5">
                               <h3 className="text-lg font-bold text-primary flex items-center justify-center gap-2">Animal (Parent)</h3>
                               <p className="font-mono text-sm mt-1 bg-background p-1 rounded">public void makeSound()</p>
                           </div>
                           <ArrowUp className="w-6 h-6 text-muted-foreground" />
                           <div className="border-2 border-secondary rounded-lg p-4 w-full bg-secondary/10">
                               <h3 className="text-lg font-bold text-secondary-foreground flex items-center justify-center gap-2">Dog (Child)</h3>
                               <p className="font-mono text-sm mt-1 bg-background p-1 rounded">public void makeSound() &#123; super.makeSound(); ... &#125;</p>
                           </div>
                        </div>
                        <div className="mt-4 bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{superMethodExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(superMethodExample)} variant="ghost" size="sm" className="mt-2">
                           <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Important Rule
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">If you use `super()` to call a parent constructor, it **must** be the very first statement in the child class's constructor.</p>
                </CardContent>
            </Card>

        </div>
    );
}
