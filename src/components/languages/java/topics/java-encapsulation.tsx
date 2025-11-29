
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ShieldCheck, Lock, Unlock, Settings, Lightbulb, FileLock } from 'lucide-react';
import React from 'react';

interface JavaEncapsulationProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `public class Main {
    // --- Person Class Definition ---
    public static class Person {
        private String name; // private = restricted access

        // Getter
        public String getName() {
            return name;
        }

        // Setter
        public void setName(String newName) {
            // We can add logic here, for example, to prevent empty names
            if (newName != null && !newName.isEmpty()) {
                this.name = newName;
            } else {
                System.out.println("Error: Name cannot be empty.");
            }
        }
    }
    // --- End of Person Class ---

    public static void main(String[] args) {
        ${code.split('\n').map(line => '    ' + line).join('\n')}
    }
}`;
}

export function JavaEncapsulation({ onOpenEditor }: JavaEncapsulationProps) {

    const encapsulationExample = `Person myObj = new Person();

// Try to set the name using the public setter method
myObj.setName("John");
System.out.println("Name: " + myObj.getName()); // Use the getter to read the value

// Direct access to 'name' is not allowed and would cause a compile error:
// myObj.name = "John"; // This line is an error!

// Try setting an invalid name
myObj.setName(""); 
System.out.println("Name is still: " + myObj.getName());`;

    return (
        <div id="java-encapsulation-page" data-test="java-encapsulation-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Encapsulation</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Bundling data and its related methods into a single protective "capsule".</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Encapsulation?</CardTitle>
                    <CardDescription>
                       Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP). It means bundling an object's **data (attributes)** and the **methods** that operate on that data into a single unit, which is the **class**.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The core idea is to **hide** the internal state of an object from the outside. This is achieved by declaring attributes as `private` and providing `public` methods (getters and setters) to control access to them.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <FileLock className="w-8 h-8 text-primary"/>
                       <CardTitle className="text-3xl">How to Achieve Encapsulation</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                    <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shrink-0">1</div>
                            <div>
                                <h3 className="font-semibold text-lg flex items-center gap-2"><Lock className="w-4 h-4"/>Make Attributes `private`</h3>
                                <p className="text-sm text-muted-foreground">Declare all the attributes (instance variables) of the class as `private`. This prevents any outside class from accessing them directly.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shrink-0">2</div>
                            <div>
                                <h3 className="font-semibold text-lg flex items-center gap-2"><Unlock className="w-4 h-4"/>Provide `public` Getter & Setter Methods</h3>
                                <p className="text-sm text-muted-foreground">Create `public` methods to get (read) and set (update) the values of the `private` attributes. This gives you control over how the data is accessed and modified.</p>
                            </div>
                        </li>
                    </ol>
                    <div className="bg-muted p-6 rounded-lg border">
                        <h4 className="text-center font-bold text-lg mb-4">The "Capsule"</h4>
                        <div className="bg-background rounded-full p-4 border-2 border-primary relative text-center">
                            <p className="font-bold text-primary">Person Object</p>
                            
                            <div className="mt-4 bg-muted/50 rounded-lg p-3 border border-dashed border-primary/50 relative">
                                <p className="font-semibold text-sm">Internal Data (Hidden)</p>
                                <p className="font-mono text-xs flex items-center justify-center gap-1"><Lock className="w-3 h-3"/> private String name;</p>
                            </div>

                            <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-background p-2 rounded-lg border shadow-sm">
                                <p className="text-xs font-bold">Input</p>
                            </div>
                             <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-background p-2 rounded-lg border shadow-sm">
                                <p className="text-xs font-bold">Output</p>
                            </div>

                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-2 py-1 rounded-md border text-xs font-semibold flex items-center gap-1">
                                <Unlock className="w-3 h-3"/> public setName()
                            </div>
                             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background px-2 py-1 rounded-md border text-xs font-semibold flex items-center gap-1">
                                <Unlock className="w-3 h-3"/> public getName()
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: A `Person` Class</CardTitle>
                    <CardDescription>
                        Here's how encapsulation works. We have a `Person` class with a `private` name. You can't access `name` directly. You must use the `getName()` and `setName()` methods.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{encapsulationExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(encapsulationExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Benefits of Encapsulation
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary"/>Better Control & Security</h3>
                        <p className="text-sm text-muted-foreground">You can make attributes read-only or write-only. Inside a setter method, you can add validation logic to ensure only valid data is stored.</p>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Settings className="w-5 h-5 text-primary"/>Flexibility</h3>
                        <p className="text-sm text-muted-foreground">The programmer can change the internal implementation of the class without affecting the code that uses it.</p>
                    </div>
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Play className="w-5 h-5 text-primary"/>Ease of Maintenance</h3>
                        <p className="text-sm text-muted-foreground">Code is easier to test and debug because its state is controlled and not modified unexpectedly from the outside.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
