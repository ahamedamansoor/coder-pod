'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, Box, AlertTriangle, Building, DoorOpen } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    if (code.includes('class Car')) {
        return code;
    }
    return `public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '  ' + line).join('\n')}
  }
}`;
}

interface JavaScopeProps {
  onOpenEditor: (code: string) => void;
}

export function JavaScope({ onOpenEditor }: JavaScopeProps) {

    const blockScopeExample = `// x cannot be used here because it's not declared yet

if (true) {
  int x = 10; // x is created here
  System.out.println("Inside the block, x is: " + x);
} // x is destroyed here

// System.out.println(x); // This would cause a compilation error!`;

    const methodScopeExample = `public class Main {
    public static void main(String[] args) {
        int methodVar = 100; // methodVar is accessible anywhere in main
        
        System.out.println("Start of method: " + methodVar);
        
        for(int i=0; i<1; i++) {
            System.out.println("Inside loop: " + methodVar);
            // int anotherVar = 200; // This would have block scope
        }
        
        System.out.println("End of method: " + methodVar);
    }
}`;

    const classScopeExample = `public class Car {
    String model = "Mustang"; // This is a class-level variable (instance variable)

    public void start() {
        // Can access 'model' here
        System.out.println("Starting the " + model);
    }

    public void drive() {
        // Can also access 'model' here
        System.out.println("Driving the " + model);
    }
    
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();
        myCar.drive();
    }
}`;

    return (
        <div id="java-scope-page" data-test="java-scope-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Eye className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Scope</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding where your variables live and where they can be accessed.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Scope?</CardTitle>
                    <CardDescription>
                        Scope determines the accessibility (visibility) of variables. In Java, a variable is only accessible within the region of code where it is created. Think of it as the "lifetime" of a variable.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
                        <Building className="w-24 h-24 text-primary shrink-0"/>
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl text-foreground">Analogy: Variables in a House</h3>
                            <p className="text-muted-foreground">Imagine your program is a house. A variable's scope is like the room it's in. A toy in the living room (\`main\` method) can be used anywhere in that room. A toy in a specific closet (\`if\` block) can only be used inside that closet. You can't use the closet toy out in the main living room.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Box className="w-6 h-6 text-primary"/>
                           <CardTitle>Block Scope</CardTitle>
                        </div>
                        <CardDescription>A variable declared inside a block \`{...}\` is only accessible within that block.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">This applies to \`if\` statements, \`for\` or \`while\` loops, or any other time you use curly braces to create a block of code. Once the block ends, the variable is destroyed and can no longer be used.</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{blockScopeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(blockScopeExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it & See the Error
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2">Note: The final \`println\` is commented out. Try uncommenting it in the editor to see the "cannot find symbol" error.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <DoorOpen className="w-6 h-6 text-primary"/>
                           <CardTitle>Method Scope</CardTitle>
                        </div>
                        <CardDescription>A variable declared inside a method is accessible anywhere within that method after its declaration.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{methodScopeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(methodScopeExample)}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Building className="w-6 h-6 text-primary"/>
                           <CardTitle>Class Scope (Instance Variables)</CardTitle>
                        </div>
                        <CardDescription>A variable declared directly inside a class (but outside any method) is known as an instance variable. It's accessible to all methods within that class.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">These variables "belong" to an object (an instance) of the class. They hold values that are specific to that object.</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{classScopeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(classScopeExample)}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
