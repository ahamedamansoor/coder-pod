
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Puzzle, Wrench, Car, ArrowRight, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaClassesObjectsProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    // If the code already has a class structure, don't wrap it.
    if (code.trim().startsWith('public class Car') || code.trim().startsWith('class Car')) {
        return `public class Main {
    // Define the Car class
    static class Car {
        String color = "red"; // Attribute
        
        // Method
        public void honk() {
            System.out.println("Beep beep!");
        }
    }

    public static void main(String[] args) {
        ${code.split('\n').map(line => '        ' + line).join('\n')}
    }
}`;
    }
    
    // Default fallback
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}


export function JavaClassesObjects({ onOpenEditor }: JavaClassesObjectsProps) {

    const classDefinition = `class Car {
  // Attribute (or field/variable)
  String color = "red";

  // Method
  void honk() {
    System.out.println("Beep beep!");
  }
}`;

    const objectCreation = `// Create a new Car object named myCar
Car myCar = new Car();

// Create another Car object named familyCar
Car familyCar = new Car();`;

    const accessMembers = `// Create a Car object
Car myCar = new Car();

// Access the color attribute
System.out.println(myCar.color); // Output: red

// Call the honk() method
myCar.honk(); // Output: Beep beep!`;

    return (
        <div id="java-classes-objects-page" data-test="java-classes-objects-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Puzzle className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Classes and Objects</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The absolute foundation of Object-Oriented Programming (OOP).</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The Core Idea: Blueprints and Buildings</CardTitle>
                    <CardDescription>
                       Imagine you want to build a house. You don't just start laying bricks. First, you need a **blueprint**. The blueprint defines everything about the house: how many rooms, where the doors are, etc. It's the plan.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-2">
                        <p>A **Class** is like the <span className="font-bold text-primary">blueprint</span>. It's a template that describes what objects of that type will look like and what they can do.</p>
                        <p>An **Object** is like the <span className="font-bold text-primary">actual house</span> you build from the blueprint. You can build many houses (objects) from the same blueprint (class), and each house can have its own unique characteristics (like different paint colors).</p>
                    </div>
                     <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="text-center">
                            <Puzzle className="w-16 h-16 text-primary mx-auto"/>
                            <p className="font-bold mt-2">Class</p>
                            <p className="text-sm text-muted-foreground">(Blueprint)</p>
                        </div>
                        <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0 md:rotate-0 rotate-90" />
                        <div className="text-center">
                            <Car className="w-16 h-16 text-foreground mx-auto"/>
                            <p className="font-bold mt-2">Object</p>
                            <p className="text-sm text-muted-foreground">(The Real Thing)</p>
                        </div>
                     </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Wrench className="w-6 h-6 text-primary"/>
                           <CardTitle>What is a Class?</CardTitle>
                        </div>
                        <CardDescription>A class is a template for creating objects. It bundles data (**attributes**) and code that works on the data (**methods**).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{classDefinition}</pre>
                        </div>
                        <p className="text-sm text-muted-foreground">This `Car` class has one attribute (`color`) and one method (`honk`).</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Car className="w-6 h-6 text-primary"/>
                           <CardTitle>What is an Object?</CardTitle>
                        </div>
                        <CardDescription>An object is an "instance" of a class. When you create an object, you are creating a variable with its own copy of the class's attributes.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">You create an object from a class using the `new` keyword.</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{objectCreation}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(objectCreation)}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Accessing Members</CardTitle>
                    <CardDescription>You use the dot operator (`.`) on an object to access its attributes and methods.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{accessMembers}</pre>
                    </div>
                     <Button onClick={() => onOpenEditor(accessMembers)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Key Takeaway
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">A **class** is the recipe. An **object** is the cake you bake from that recipe.</p>
                    <p className="text-muted-foreground mt-2">Everything in Java is associated with classes and objects, along with its attributes and methods. This is the core of Object-Oriented Programming!</p>
                </CardContent>
            </Card>

        </div>
    );
}

    