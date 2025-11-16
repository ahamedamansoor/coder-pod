
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Wrench, Car, ArrowRight, Lightbulb, Edit, Eye, Lock } from 'lucide-react';
import React from 'react';

interface JavaClassAttributesProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    // This is a more complex wrapper needed for class-based examples
    const classCode = `class Car {
    String color = "Red";
    String model = "Mustang";
    int year = 1969;
}`;
    
    return `public class Main {
    ${classCode.split('\n').map(line => '    ' + line).join('\n')}

    public static void main(String[] args) {
        Car myCar = new Car();
        ${code.split('\n').map(line => '        ' + line).join('\n')}
    }
}`;
}

export function JavaClassAttributes({ onOpenEditor }: JavaClassAttributesProps) {

    const accessAttributeExample = `System.out.println("My car's color is: " + myCar.color);`;

    const modifyAttributeExample = `System.out.println("Original color: " + myCar.color); // Prints "Red"
myCar.color = "Yellow";
System.out.println("New color: " + myCar.color);       // Prints "Yellow"`;
    
    const finalAttributeExample = `class Vehicle {
    final String VIN = "12345ABC"; // Vehicle Identification Number is constant
}

// In main:
Vehicle myVehicle = new Vehicle();
// myVehicle.VIN = "XYZ"; // This line would cause an error!`;

    return (
        <div id="java-class-attributes-page" data-test="java-class-attributes-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Wrench className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Class Attributes</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Defining the properties and characteristics of your objects.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Attributes?</CardTitle>
                    <CardDescription>
                       Attributes, also known as **fields** or **instance variables**, are variables defined within a class. They represent the data or "state" of an object. If a class is a blueprint for a car, its attributes are the properties listed on that blueprint: `color`, `model`, `year`, etc.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`public class Car {
  String color = "Red";   // These are the attributes
  String model = "Mustang";
  int year = 1969;
}`}</pre>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Eye className="w-6 h-6 text-primary"/>
                           <CardTitle>Accessing Attributes</CardTitle>
                        </div>
                        <CardDescription>You can access an object's attributes by using the dot operator (`.`).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">After creating an object, you can read its properties like this:</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`Car myCar = new Car();
System.out.println(myCar.color);`}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(accessAttributeExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Edit className="w-6 h-6 text-primary"/>
                           <CardTitle>Modifying Attributes</CardTitle>
                        </div>
                        <CardDescription>You can also change the value of an attribute using the dot operator.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">This changes the state of the `myCar` object.</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`myCar.color = "Yellow";
System.out.println(myCar.color);`}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(modifyAttributeExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Lock className="w-6 h-6 text-primary"/>
                       <CardTitle>Making Attributes Constant with `final`</CardTitle>
                    </div>
                    <CardDescription>If you don't want an attribute's value to be changed after an object is created, you can declare it with the `final` keyword.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{finalAttributeExample}</pre>
                    </div>
                     <Button onClick={() => onOpenEditor(finalAttributeExample)}>
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
                    <p className="text-lg">Attributes define **what an object knows** (its data), while methods (which you'll learn about next) define **what an object can do** (its behavior).</p>
                    <p className="text-muted-foreground mt-2">Managing the state of objects through their attributes is a fundamental part of Object-Oriented Programming.</p>
                </CardContent>
            </Card>

        </div>
    );
}
