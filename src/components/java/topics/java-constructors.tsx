'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Wrench, Car, Puzzle, Lightbulb, CheckCircle2, Boxes } from 'lucide-react';
import React from 'react';

interface JavaConstructorsProps {
  onOpenEditor: (code: string) => void;
}

export function JavaConstructors({ onOpenEditor }: JavaConstructorsProps) {

    const constructorExample = `public class Main {
    static class Car {
        String model;
        int year;

        // This is the constructor for the Car class
        public Car(String modelName, int modelYear) {
            model = modelName; // Initialize the attribute 'model'
            year = modelYear;  // Initialize the attribute 'year'
        }
    }

    public static void main(String[] args) {
        // Create an object of the Car class (this will call the constructor)
        Car myCar = new Car("Mustang", 1969);
        System.out.println("My car is a " + myCar.year + " " + myCar.model);
    }
}`;

    const overloadExample = `public class Main {
    static class Car {
        String model;
        int year;

        // Constructor with no arguments
        public Car() {
            model = "Generic";
            year = 2024;
        }

        // Overloaded constructor with arguments
        public Car(String modelName, int modelYear) {
            model = modelName;
            year = modelYear;
        }
    }

    public static void main(String[] args) {
        // Create an object using the no-argument constructor
        Car carNoArgs = new Car();
        System.out.println("Default car: " + carNoArgs.year + " " + carNoArgs.model);
        
        // Create an object using the parameterized constructor
        Car customCar = new Car("Tesla Model S", 2023);
        System.out.println("Custom car: " + customCar.year + " " + customCar.model);
    }
}`;

    return (
        <div id="java-constructors-page" data-test="java-constructors-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Wrench className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Constructors</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The special method for setting up new objects.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Constructor?</CardTitle>
                    <CardDescription>
                       A constructor is a special method that is automatically called when you create a new object of a class. Its main purpose is to **initialize the attributes** of the object, setting them to their initial values.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">If a class is a blueprint for a car, the constructor is the part of the assembly line that installs the engine, sets the color, and puts the wheels on when a new car is being built.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Puzzle className="w-6 h-6 text-primary"/>
                       <CardTitle>The Rules of Constructors</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">Same Name as the Class</h3>
                            <p className="text-sm text-muted-foreground">A constructor must have the exact same name as the class it belongs to.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">No Return Type</h3>
                            <p className="text-sm text-muted-foreground">Constructors do not have a return type, not even `void`.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Example: A Basic Constructor</CardTitle>
                    <CardDescription>
                        Here we have a `Car` class with a constructor that takes a model name and year as parameters to initialize the object's attributes.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{constructorExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(constructorExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lightbulb className="text-primary"/>
                            Default Constructor
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            If you do not create a constructor yourself, Java creates one for you behind the scenes. This "default constructor" is empty and has no parameters. It's why you can still do `new Car()` even if you haven't written a constructor. However, once you define ANY constructor, the default one is no longer provided automatically.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Boxes className="text-primary"/>
                           Constructor Overloading
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Just like methods, constructors can be **overloaded**. This means you can have multiple constructors in the same class, as long as they have different parameter lists (different number or types of parameters). This provides multiple ways to create an object.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Overloading Example</CardTitle>
                    <CardDescription>This `Car` class has two constructors: one with no arguments that creates a "generic" car, and another that creates a car with specific details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overloadExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(overloadExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
