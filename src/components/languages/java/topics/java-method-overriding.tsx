'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Copy, Lightbulb, Rocket, Car, FileCheck, FileX, GitCompareArrows, ArrowDown } from 'lucide-react';
import React from 'react';

interface JavaMethodOverridingProps {
  onOpenEditor: (code: string) => void;
}

export function JavaMethodOverriding({ onOpenEditor }: JavaMethodOverridingProps) {

    const overrideExample = `// Parent class
class Vehicle {
  public void drive() {
    System.out.println("Driving a vehicle...");
  }
}

// Child class
class Car extends Vehicle {
  // Overriding the parent's drive() method
  @Override
  public void drive() {
    System.out.println("Driving a car...");
  }
}

public class Main {
  public static void main(String[] args) {
    Vehicle myVehicle = new Vehicle();
    Car myCar = new Car();
    
    myVehicle.drive(); // Calls the method in Vehicle
    myCar.drive();     // Calls the overridden method in Car
  }
}`;

    const rules = [
        { title: "Same Name & Parameters", description: "The method must have the same name and the same number and type of parameters as in the parent class.", icon: FileCheck },
        { title: "IS-A Relationship", description: "Method overriding can only occur in classes that have an inheritance relationship (subclass and superclass).", icon: GitCompareArrows },
        { title: "Access Modifier", description: "The access modifier of the overriding method cannot be more restrictive than the overridden method (e.g., you can't override a `public` method with a `private` one).", icon: FileCheck },
        { title: "Return Type", description: "The return type must be the same or a subtype of the parent's return type.", icon: FileCheck },
        { title: "Cannot Override `final` or `static`", description: "`final` methods are meant to be unchangeable and cannot be overridden. `static` methods belong to the class, not the object, and cannot be overridden either.", icon: FileX },
    ];

    return (
        <div id="java-method-overriding-page" data-test="java-method-overriding-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Copy className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Method Overriding</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Providing a specific version of a method that is already defined in a parent class.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Method Overriding?</CardTitle>
                    <CardDescription>
                       If a subclass has the same method as declared in the parent class, it is known as method overriding. It's the subclass's chance to provide its own specific implementation of an inherited method.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <p>Think of a parent `Vehicle` class with a `drive()` method. A `Car` subclass might have a very different way of driving than a `Bicycle` subclass. Method overriding allows `Car` and `Bicycle` to each define their own unique `drive()` behavior.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Visualizing Overriding</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md text-center bg-primary/5 shadow-md">
                        <h3 className="text-xl font-bold text-primary flex items-center justify-center gap-2"><Rocket className="w-6 h-6"/>Vehicle (Parent)</h3>
                        <p className="font-mono text-sm mt-1 bg-background p-1 rounded">public void drive()</p>
                    </div>
                    <ArrowDown className="w-8 h-8 text-muted-foreground" />
                    <div className="border-2 border-secondary rounded-lg p-6 w-full max-w-md text-center bg-secondary/10 shadow-md">
                        <h3 className="text-xl font-bold text-secondary-foreground flex items-center justify-center gap-2"><Car className="w-6 h-6"/>Car (Child)</h3>
                        <p className="font-mono text-sm mt-1 bg-background p-1 rounded">@Override public void drive()</p>
                        <p className="text-xs text-muted-foreground mt-2">Provides its OWN implementation of `drive()`.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example in Action</CardTitle>
                    <CardDescription>The `Car` class overrides the `drive()` method from the `Vehicle` class. When we call `myCar.drive()`, the `Car`'s version is executed.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overrideExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(overrideExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        The `@Override` Annotation
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">This annotation isn't required, but it's a very important best practice.</p>
                    <p className="text-muted-foreground mt-2">It tells the compiler that you *intend* to override a method from a superclass. If you make a mistake (like misspelling the method name or using the wrong parameters), the compiler will give you an error. Without it, you might accidentally create a new, unrelated method, leading to bugs that are hard to find.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Rules for Method Overriding</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    {rules.map(rule => (
                        <div key={rule.title} className="flex items-start gap-3">
                            <rule.icon className={`w-6 h-6 mt-1 shrink-0 ${rule.icon === FileCheck ? 'text-green-500' : 'text-destructive'}`} />
                            <div>
                                <h3 className="font-semibold">{rule.title}</h3>
                                <p className="text-sm text-muted-foreground">{rule.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-secondary/10 border-secondary/20">
                <CardHeader>
                    <CardTitle className="text-secondary-foreground">Overriding vs. Overloading</CardTitle>
                    <CardDescription>Don't mix them up! They are very different.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-bold text-foreground mb-2">Method Overriding</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Occurs in two classes (parent and child).</li>
                            <li>Method name and parameters must be the same.</li>
                            <li>Purpose is to provide specific implementation in subclass.</li>
                        </ul>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-bold text-foreground mb-2">Method Overloading</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Occurs within the same class.</li>
                            <li>Method name is the same, but parameters must be different.</li>
                            <li>Purpose is to provide different ways to call a method.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
