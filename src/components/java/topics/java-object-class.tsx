'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Atom, Lightbulb, Share2, Binary, Scale, Fingerprint } from 'lucide-react';
import React from 'react';

interface JavaObjectClassProps {
  onOpenEditor: (code: string) => void;
}

export function JavaObjectClass({ onOpenEditor }: JavaObjectClassProps) {

    const defaultToStringExample = `class Car {
    String model = "Mustang";
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        // Without overriding toString(), this prints something like "Car@1a2b3c4d"
        System.out.println(myCar.toString()); 
    }
}`;

    const overrideToStringExample = `class Car {
    String model = "Mustang";
    int year = 1969;

    // Overriding the toString() method
    @Override
    public String toString() {
        return "A " + this.year + " " + this.model;
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        // Now it prints our custom, human-readable string
        System.out.println(myCar.toString()); // Output: A 1969 Mustang
    }
}`;

    const overrideEqualsExample = `class Car {
    String vin; // Vehicle Identification Number

    public Car(String vin) {
        this.vin = vin;
    }

    // Overriding the equals() method
    @Override
    public boolean equals(Object obj) {
        // 1. Check if the object is compared with itself
        if (obj == this) {
            return true;
        }

        // 2. Check if obj is an instance of Car or not
        if (!(obj instanceof Car)) {
            return false;
        }
        
        // 3. Cast obj to Car so we can compare data members
        Car c = (Car) obj;
        
        // 4. Compare the data members and return accordingly
        return this.vin.equals(c.vin);
    }
}

public class Main {
  public static void main(String[] args) {
    Car car1 = new Car("12345");
    Car car2 = new Car("12345");
    Car car3 = new Car("67890");

    System.out.println("car1.equals(car2): " + car1.equals(car2)); // true
    System.out.println("car1.equals(car3): " + car1.equals(car3)); // false
  }
}`;

    return (
        <div id="java-object-class-page" data-test="java-object-class-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Atom className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">The Object Class</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The "cosmic ancestor" of every class in Java.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is the `Object` Class?</CardTitle>
                    <CardDescription>
                       The `Object` class, found in the `java.lang` package, sits at the very top of the class hierarchy in Java. **Every single class is a descendant, direct or indirect, of the `Object` class.**
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p className="mb-4">This means that even if you write a simple class like `class Car {}`, Java automatically treats it as `class Car extends Object {}` behind the scenes. Because of this, every object you create inherits the methods of the `Object` class.</p>
                    <div className="bg-muted p-6 rounded-lg flex flex-col items-center gap-4 text-center border">
                        <div className="border-2 border-primary rounded-lg p-4 bg-primary/5 shadow-md">
                            <h3 className="text-xl font-bold text-primary">`Object`</h3>
                        </div>
                        <Share2 className="w-6 h-6 text-muted-foreground rotate-90"/>
                        <div className="flex justify-around w-full gap-4">
                            <div className="border-2 border-secondary rounded-lg p-4 bg-secondary/10 shadow-sm flex-1">
                                <h3 className="text-lg font-bold text-secondary-foreground">`String`</h3>
                            </div>
                            <div className="border-2 border-secondary rounded-lg p-4 bg-secondary/10 shadow-sm flex-1">
                                <h3 className="text-lg font-bold text-secondary-foreground">`YourCustomClass`</h3>
                            </div>
                            <div className="border-2 border-secondary rounded-lg p-4 bg-secondary/10 shadow-sm flex-1">
                                <h3 className="text-lg font-bold text-secondary-foreground">`ArrayList`</h3>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Binary className="w-6 h-6 text-primary"/>`toString()` Method</CardTitle>
                    <CardDescription>
                        The `toString()` method is meant to return a human-readable string representation of the object. By default, it returns a cryptic string showing the class name and its memory address.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h4 className="font-semibold mb-2">Default Behavior:</h4>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{defaultToStringExample}</pre>
                    </div>

                    <h4 className="font-semibold mb-2 mt-6">Overridden Behavior:</h4>
                    <p className="text-sm text-muted-foreground mb-2">It's a very common practice to override `toString()` to provide meaningful output for your objects.</p>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overrideToStringExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(overrideToStringExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Scale className="w-6 h-6 text-primary"/>`equals(Object obj)` Method</CardTitle>
                    <CardDescription>
                        The `equals()` method is used to compare two objects for equality. By default, it behaves just like the `==` operator for objects: it checks if two references point to the exact same object in memory.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">To compare objects based on their actual content (logical equality), you must override the `equals()` method.</p>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overrideEqualsExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(overrideEqualsExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Fingerprint className="w-6 h-6"/>
                        The `hashCode()` and `equals()` Contract
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">The `hashCode()` method returns an integer representation of the object's memory address. It's used by data structures like `HashMap` and `HashSet` to store and retrieve objects efficiently.</p>
                    <p className="text-muted-foreground mt-4">There is a critical rule you must follow:</p>
                    <p className="mt-4 p-4 border-l-4 border-primary bg-background rounded-r-lg font-semibold">If you override the `equals()` method, you MUST also override the `hashCode()` method.</p>
                    <p className="text-muted-foreground mt-4">**The Contract:** If two objects are equal according to the `equals()` method, then calling the `hashCode()` method on each of the two objects must produce the same integer result.</p>
                    <p className="text-muted-foreground mt-2">If you break this contract, collections like `HashMap` will not work correctly with your objects.</p>
                </CardContent>
            </Card>
        </div>
    );
}
