'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog, Play, Factory, Building, Users } from 'lucide-react';
import React from 'react';

interface JavaClassMethodsProps {
  onOpenEditor: (code: string) => void;
}

export function JavaClassMethods({ onOpenEditor }: JavaClassMethodsProps) {

    const publicMethodExample = `public class Main {
    static class Car {
        // This is a public method
        public void fullThrottle() {
            System.out.println("The car is going as fast as it can!");
        }

        // This is another public method
        public void speed(int maxSpeed) {
            System.out.println("Max speed is: " + maxSpeed);
        }
    }

    public static void main(String[] args) {
        Car myCar = new Car();   // Create a myCar object
        myCar.fullThrottle();    // Call the fullThrottle() method
        myCar.speed(200);        // Call the speed() method
    }
}`;

    const staticMethodExample = `public class Main {
    // A static method
    static void myStaticMethod() {
        System.out.println("Static methods can be called without creating objects");
    }

    // A public method
    public void myPublicMethod() {
        System.out.println("Public methods must be called on objects");
    }

    public static void main(String[] args) {
        myStaticMethod(); // Call the static method directly

        // myPublicMethod(); // This would cause an error!

        Main myObj = new Main(); // Create an object of Main
        myObj.myPublicMethod(); // Call the public method on the object
    }
}`;


    return (
        <div id="java-class-methods-page" data-test="java-class-methods-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Cog className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Class Methods</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Defining the behaviors and actions an object can perform.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Class Methods?</CardTitle>
                    <CardDescription>
                       If attributes are what an object **knows** (its data), then methods are what an object **can do** (its behavior). A method is a block of code that performs a specific task and only runs when it is called.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>For a `Car` object, methods could be `startEngine()`, `accelerate()`, or `brake()`.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Anatomy of a Method</CardTitle>
                    <CardDescription>Let's revisit the parts of a method declaration.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-center text-md">
                        <span className="text-blue-500">public</span> <span className="text-purple-500">void</span> <span className="text-green-500">myMethod</span>() &#123; ... &#125;
                    </div>
                     <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-muted-foreground">
                        <li><span className="font-bold text-blue-500">public</span>: The access modifier. `public` means the method can be called from anywhere.</li>
                        <li><span className="font-bold text-purple-500">void</span>: The return type. `void` means the method does not return any value.</li>
                        <li><span className="font-bold text-green-500">myMethod</span>: The name of the method.</li>
                        <li><span className="font-bold text-green-500">( )</span>: Parentheses for parameters. We'll cover parameters in the next topic.</li>
                        <li><span className="font-bold">&#123; &#125;</span>: The curly braces define the method body, where the code to be executed goes.</li>
                    </ul>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Static vs. Public Methods</CardTitle>
                    <CardDescription>This is a very important distinction in Java.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-background border p-6 rounded-lg">
                        <h3 className="font-semibold text-xl text-primary mb-2 flex items-center gap-2"><Users className="w-6 h-6"/>Public Methods (Instance Methods)</h3>
                        <p className="text-sm text-muted-foreground mb-4">A `public` method belongs to an **object** (an instance) of a class. You must create an object first before you can call it.</p>
                        <div className="bg-muted p-4 rounded-lg text-center border">
                           <Building className="w-10 h-10 text-primary mx-auto mb-2"/>
                           <p className="font-bold">The Building (Object)</p>
                           <p className="text-xs text-muted-foreground">To use a room (public method), you must first go to the specific building (object).</p>
                        </div>
                    </div>
                     <div className="bg-background border p-6 rounded-lg">
                        <h3 className="font-semibold text-xl text-primary mb-2 flex items-center gap-2"><Factory className="w-6 h-6"/>Static Methods</h3>
                        <p className="text-sm text-muted-foreground mb-4">A `static` method belongs to the **class itself**, not to any specific object. You can call it directly on the class name, without creating an object.</p>
                         <div className="bg-muted p-4 rounded-lg text-center border">
                           <Factory className="w-10 h-10 text-primary mx-auto mb-2"/>
                           <p className="font-bold">The Factory (Class)</p>
                           <p className="text-xs text-muted-foreground">A factory has a general utility (static method) like a time clock that anyone can use without needing a specific product (object).</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
             <Card>
                <CardHeader>
                    <CardTitle>Example: Calling Methods</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="font-semibold text-lg mb-2">Calling Public Methods</h3>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{publicMethodExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(publicMethodExample)} className="mb-8">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                    
                    <h3 className="font-semibold text-lg mb-2">Calling Static vs. Public</h3>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{staticMethodExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(staticMethodExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
