
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, FileJson, Lightbulb, CheckCircle2, CopyPlus, ShieldCheck, Link, Settings } from 'lucide-react';
import React from 'react';

interface JavaInterfacesProps {
  onOpenEditor: (code: string) => void;
}

export function JavaInterfaces({ onOpenEditor }: JavaInterfacesProps) {

    const interfaceExample = `// The "contract"
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method (does not have a body)
}

// Pig "implements" the Animal contract
class Pig implements Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
  public void sleep() {
    // The body of sleep() is provided here
    System.out.println("Zzz");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig();
    myPig.animalSound();
    myPig.sleep();
  }
}`;
    
    const multipleInterfacesExample = `interface FirstInterface {
  public void myMethod(); // interface method
}

interface SecondInterface {
  public void myOtherMethod(); // interface method
}

// A class can implement multiple interfaces
class DemoClass implements FirstInterface, SecondInterface {
  public void myMethod() {
    System.out.println("Some text..");
  }
  public void myOtherMethod() {
    System.out.println("Some other text...");
  }
}

class Main {
  public static void main(String[] args) {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}`;

    return (
        <div id="java-interfaces-page" data-test="java-interfaces-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FileJson className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Interfaces</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Defining a "contract" of behaviors for your classes.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an Interface?</CardTitle>
                    <CardDescription>
                       An interface is another way to achieve **abstraction** in Java. It's a completely abstract "class" that is used to group related methods with empty bodies. It acts as a **contract**: any class that `implements` an interface agrees to provide an implementation for all of its methods.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Think of it like a light switch. All light switches have an `on()` and `off()` functionality. The interface defines this contract. Any company that makes a light switch (`implements` the interface) must provide the internal wiring for the `on()` and `off()` methods to work.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Example: The `Animal` Interface</CardTitle>
                    <CardDescription>
                        The `Animal` interface declares what an animal can do, but not how it does it. The `Pig` class `implements` this interface, providing the specific actions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
                        <Lightbulb className="w-6 h-6"/>
                        Key Properties of Interfaces
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">Abstract by Nature</h3>
                            <p className="text-sm text-muted-foreground">Interface methods are `public` and `abstract` by default, and fields are `public`, `static`, and `final` by default. You don't need to type these keywords.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">No Instantiation</h3>
                            <p className="text-sm text-muted-foreground">Like abstract classes, you cannot create an object of an interface.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold">`implements` Keyword</h3>
                            <p className="text-sm text-muted-foreground">A class uses the `implements` keyword to use an interface (vs. `extends` for a class).</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <CopyPlus className="w-8 h-8 text-primary"/>
                       <CardTitle className="text-3xl">Implementing Multiple Interfaces</CardTitle>
                    </div>
                    <CardDescription>
                        This is a key advantage of interfaces over abstract classes. A class can only `extend` one superclass, but it can `implement` many interfaces.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <p className="text-sm text-muted-foreground mb-4">This allows a class to inherit behaviors from multiple, unrelated sources.</p>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{multipleInterfacesExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(multipleInterfacesExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
             <Card className="bg-secondary/10 border-secondary/20">
                 <CardHeader>
                    <CardTitle className="text-secondary-foreground flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6"/>
                        Why Use Interfaces?
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Settings className="w-5 h-5 text-primary"/>1. Achieve Total Abstraction</h3>
                        <p className="text-sm text-muted-foreground">Interfaces ensure that a class provides a specific set of functionalities, without revealing any implementation details.</p>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CopyPlus className="w-5 h-5 text-primary"/>2. Support "Multiple Inheritance"</h3>
                        <p className="text-sm text-muted-foreground">Since a class can implement multiple interfaces, it can take on the "shape" of several different types.</p>
                    </div>
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Link className="w-5 h-5 text-primary"/>3. Achieve Loose Coupling</h3>
                        <p className="text-sm text-muted-foreground">You can write code that depends on an interface, not a specific class. This makes it easy to swap out different implementations later on.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
