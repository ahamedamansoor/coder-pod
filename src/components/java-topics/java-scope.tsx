
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, Box, Rows, Building } from 'lucide-react';
import React from 'react';

interface JavaScopeProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaScope({ onOpenEditor }: JavaScopeProps) {

    const blockScopeExample = `// Code here CANNOT use x
for (int i = 0; i < 5; i++) {
  int x = 10; // x can ONLY be used inside this loop block
  System.out.println(x + i); // i can ONLY be used inside this loop block
}
// Code here CANNOT use x or i
`;

    const methodScopeExample = `public static void myMethod() {
  String message = "Hello from myMethod!"; // Variable declared here is available anywhere in myMethod
  System.out.println(message);
}

public static void main(String[] args) {
  myMethod();
  // The 'message' variable from myMethod CANNOT be used here
}`;
    
    const classScopeExample = `public class Car {
    String model = "Mustang"; // These are instance variables (class scope)
    int year = 1969;

    void startEngine() {
        // 'model' and 'year' can be accessed here
        System.out.println("Starting the " + year + " " + model);
    }

    void drive() {
        // 'model' and 'year' can also be accessed here
        System.out.println("Driving the " + model);
    }
}
// To test, in main:
// Car myCar = new Car();
// myCar.startEngine();
// myCar.drive();
`;


    return (
        <div id="java-scope-page" data-test="java-scope-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Eye className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Scope</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding where your variables can be seen and used.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Scope?</CardTitle>
                    <CardDescription>
                       Think of scope as the "visibility" of a variable. It's the area of your code where a variable is accessible and can be used. If you try to use a variable outside its scope, your code won't compile. A good analogy is a house: some things are only available in one room (a local variable), while others are available throughout the entire house (an instance variable).
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Box className="w-8 h-8 text-primary"/>
                           <CardTitle>Block Scope</CardTitle>
                        </div>
                        <CardDescription>The most limited scope. A variable declared inside a set of curly braces `{}` (a "block") is only visible inside that block.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">This is common for variables in `if` statements, `for` loops, or `while` loops.</p>
                       <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{blockScopeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(blockScopeExample)}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Rows className="w-8 h-8 text-primary"/>
                           <CardTitle>Method Scope</CardTitle>
                        </div>
                        <CardDescription>A variable declared directly inside a method is available anywhere within that method, from the point it's declared to the end of the method.</CardDescription>
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
                           <Building className="w-8 h-8 text-primary"/>
                           <CardTitle>Class Scope (Instance Variables)</CardTitle>
                        </div>
                        <CardDescription>A variable declared inside a class but outside of any method is an **instance variable**. It is visible to all methods within that class.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-sm text-muted-foreground mb-4">These variables belong to the object (the instance of the class) itself.</p>
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
