
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowRightSquare, Lightbulb, Zap, Factory, User, Users, FileType } from 'lucide-react';
import React from 'react';

interface JavaMethodReferencesProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaMethodReferences({ onOpenEditor }: JavaMethodReferencesProps) {

    const staticMethodRefExample = `List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// Using a lambda expression:
names.forEach(name -> System.out.println(name));

// Using a method reference (shorter and clearer):
names.forEach(System.out::println);`;
    
    const instanceMethodRefExample = `class Greeter {
    public void printGreeting(String name) {
        System.out.println("Hello, " + name);
    }
}

List<String> names = Arrays.asList("Alice", "Bob");
Greeter greeter = new Greeter();

// Using a lambda:
names.forEach(name -> greeter.printGreeting(name));

// Using a method reference on a specific object:
names.forEach(greeter::printGreeting);`;
    
    const arbitraryObjectRefExample = `List<String> names = Arrays.asList("alice", "BOB", "CHARLIE");

// Using a lambda to call toUpperCase on each string:
names.forEach(s -> System.out.println(s.toUpperCase()));

// Using a method reference:
// The forEach method will call toUpperCase() on each string in the list.
names.forEach(String::toUpperCase);`;

    return (
        <div id="java-method-references-page" data-test="java-method-references-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <ArrowRightSquare className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Method References</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A compact, readable shorthand for lambda expressions.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Method Reference?</CardTitle>
                    <CardDescription>
                       A method reference is a shorthand syntax for a lambda expression that only calls a single, existing method. It's a way to refer to a method without invoking it.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Think of it like a phone's speed dial. Instead of typing the full phone number (the lambda expression), you just press a single button (the method reference) that points to the same number.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-muted rounded-lg border">
                        <div className="text-center">
                            <p className="font-semibold text-foreground">Lambda Expression</p>
                            <p className="font-mono text-sm bg-background p-2 rounded-md mt-1">s -> System.out.println(s)</p>
                        </div>
                        <Zap className="w-8 h-8 text-primary shrink-0 md:rotate-0 rotate-90" />
                        <div className="text-center">
                             <p className="font-semibold text-foreground">Method Reference</p>
                            <p className="font-mono text-sm bg-background p-2 rounded-md mt-1">System.out::println</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Types of Method References</CardTitle>
                    <CardDescription>There are a few main ways to create method references.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Static Method */}
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Factory className="w-5 h-5 text-primary"/>Reference to a Static Method</h3>
                        <p className="text-sm text-muted-foreground mb-4">This is used when a lambda expression just calls a static method.</p>
                        <p className="font-mono text-sm text-center mb-4 bg-muted p-2 rounded-md">ContainingClass::staticMethodName</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{staticMethodRefExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(staticMethodRefExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>

                    {/* Instance Method of a Particular Object */}
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><User className="w-5 h-5 text-primary"/>Reference to an Instance Method of a Particular Object</h3>
                        <p className="text-sm text-muted-foreground mb-4">Used when a lambda expression calls an instance method on a specific, existing object.</p>
                        <p className="font-mono text-sm text-center mb-4 bg-muted p-2 rounded-md">containingObject::instanceMethodName</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{instanceMethodRefExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(instanceMethodRefExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>

                    {/* Instance Method of an Arbitrary Object */}
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Users className="w-5 h-5 text-primary"/>Reference to an Instance Method of an Arbitrary Object</h3>
                        <p className="text-sm text-muted-foreground mb-4">This one is a bit more abstract. It's used when the lambda's first parameter is the object on which the method is called.</p>
                        <p className="font-mono text-sm text-center mb-4 bg-muted p-2 rounded-md">ContainingType::instanceMethodName</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{arbitraryObjectRefExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(arbitraryObjectRefExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Why Use Method References?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">The main benefit is **readability**.</p>
                    <p className="text-muted-foreground mt-2">Method references make the code more compact and expressive. They clearly communicate your intent: you're not defining new logic, you're just passing an existing method to be used somewhere else. This reduces boilerplate code and makes functional-style programming in Java cleaner.</p>
                </CardContent>
            </Card>
        </div>
    );
}
