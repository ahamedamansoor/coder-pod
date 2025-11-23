'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Share2, Car, Rocket, Shield, Lightbulb, ArrowDown } from 'lucide-react';
import React from 'react';

interface JavaInheritanceProps {
  onOpenEditor: (code: string) => void;
}

export function JavaInheritance({ onOpenEditor }: JavaInheritanceProps) {

    const inheritanceExample = `// Superclass (Parent)
class Vehicle {
  protected String brand = "Ford"; // Vehicle attribute
  
  public void honk() {             // Vehicle method
    System.out.println("Tuut, tuut!");
  }
}

// Subclass (Child)
class Car extends Vehicle {
  private String modelName = "Mustang"; // Car attribute
  
  public static void main(String[] args) {
    Car myCar = new Car(); // Create a Car object

    myCar.honk(); // Call the honk() method (from the Vehicle class) on the myCar object

    // Display the value of the brand attribute (from the Vehicle class)
    // and the value of the modelName from the Car class
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}`;

    return (
        <div id="java-inheritance-page" data-test="java-inheritance-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Share2 className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Inheritance</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Reusing and extending code by inheriting attributes and methods from one class to another.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Inheritance?</CardTitle>
                    <CardDescription>
                       In Java, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories:
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                     <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary mb-2">Superclass (Parent)</h3>
                        <p className="text-sm text-muted-foreground">The class being inherited from. It's the general, more abstract class.</p>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary mb-2">Subclass (Child)</h3>
                        <p className="text-sm text-muted-foreground">The class that inherits from another class. It's the more specific class that extends the parent.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Visualizing Inheritance: A Car "is-a" Vehicle</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md text-center bg-primary/5 shadow-md">
                        <h3 className="text-xl font-bold text-primary flex items-center justify-center gap-2"><Rocket className="w-6 h-6"/>Vehicle (Superclass)</h3>
                        <ul className="mt-2 text-sm text-muted-foreground list-inside list-disc text-left">
                            <li><span className="font-mono bg-muted p-1 rounded">protected String brand;</span></li>
                            <li><span className="font-mono bg-muted p-1 rounded">public void honk();</span></li>
                        </ul>
                    </div>
                    <ArrowDown className="w-8 h-8 text-muted-foreground" />
                    <div className="border-2 border-secondary rounded-lg p-6 w-full max-w-md text-center bg-secondary/10 shadow-md">
                        <h3 className="text-xl font-bold text-secondary-foreground flex items-center justify-center gap-2"><Car className="w-6 h-6"/>Car (Subclass)</h3>
                        <p className="text-xs text-muted-foreground mb-2">Inherits `brand` and `honk()`</p>
                        <ul className="mt-2 text-sm text-muted-foreground list-inside list-disc text-left">
                           <li><span className="font-mono bg-muted p-1 rounded">private String modelName;</span></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Example: The `extends` Keyword</CardTitle>
                    <CardDescription>
                        To inherit from a class, use the `extends` keyword. In this example, the `Car` class inherits the attributes and methods from the `Vehicle` class.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{inheritanceExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(inheritanceExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        The `protected` Keyword
                    </CardTitle>
                    <CardDescription>
                        Notice the `brand` attribute in `Vehicle` is declared as `protected`. This access modifier makes the attribute visible to the parent class and any subclasses that inherit from it, but not to the "outside world". It's very useful for inheritance!
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
