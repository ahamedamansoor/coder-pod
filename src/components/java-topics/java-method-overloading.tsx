
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VenetianMask, Play, Puzzle, Boxes, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    // If the code already has a class structure, don't wrap it.
    if (code.trim().startsWith('public class')) {
        return code;
    }

    // This specific code needs a more complex wrapper.
    if (code.includes('plusMethod')) {
        return `public class Main {
  static int plusMethod(int x, int y) {
    return x + y;
  }
  
  static double plusMethod(double x, double y) {
    return x + y;
  }
  
  public static void main(String[] args) {
    int myNum1 = plusMethod(8, 5);
    double myNum2 = plusMethod(4.3, 6.26);
    System.out.println("int: " + myNum1);
    System.out.println("double: " + myNum2);
  }
}`;
    }
    
    // Default fallback for simple lines of code
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}


export function JavaMethodOverloading() {

    const overloadByNumber = `static int add(int a, int b) {
  return a + b;
}

static int add(int a, int b, int c) {
  return a + b + c;
}

// In main:
// System.out.println(add(2, 3));       // Calls the first method
// System.out.println(add(2, 3, 4));  // Calls the second method`;

    const overloadByType = `static int add(int a, int b) {
  return a + b;
}

static double add(double a, double b) {
  return a + b;
}

// In main:
// System.out.println(add(5, 4));             // Calls the int method
// System.out.println(add(5.5, 4.5));       // Calls the double method`;
    
    const overloadByOrder = `static void display(int num, String name) {
  System.out.println("Number: " + num + ", Name: " + name);
}

static void display(String name, int num) {
  System.out.println("Name: " + name + ", Number: " + num);
}

// In main:
// display(10, "John");  // Calls the first method
// display("Jane", 20); // Calls the second method`;

    const invalidOverload = `// This is NOT valid overloading and will cause a compile error!
static int myMethod(int a, int b) {
  return a + b;
}

static double myMethod(int a, int b) {
  return a + b + 0.5;
}`;


    return (
        <div id="java-method-overloading-page" data-test="java-method-overloading-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Boxes className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Method Overloading</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Giving one method name multiple personalities.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Method Overloading?</CardTitle>
                    <CardDescription>
                       With method overloading, multiple methods can have the <span className="font-bold text-foreground">same name</span> but with <span className="font-bold text-foreground">different parameters</span>. It's like having a single "add" button on a calculator that can add whole numbers or decimal numbers—same name, different jobs.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`int myNum1 = plusMethod(8, 5);
double myNum2 = plusMethod(4.3, 6.26);`}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain('plusMethod'))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                     <div className="flex items-center gap-3">
                       <Puzzle className="w-6 h-6 text-primary"/>
                       <CardTitle>The Rules of Overloading</CardTitle>
                    </div>
                    <CardDescription>To overload a method, the method names must be the same, but the parameters must be different in at least one of these ways:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-background border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">1. Number of Parameters</h3>
                            <p className="text-sm text-muted-foreground">One method takes two parameters, another takes three.</p>
                        </div>
                        <div className="bg-background border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">2. Type of Parameters</h3>
                            <p className="text-sm text-muted-foreground">One method takes `int` parameters, another takes `double`.</p>
                        </div>
                        <div className="bg-background border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">3. Order of Parameters</h3>
                            <p className="text-sm text-muted-foreground">One method is `(int, String)`, another is `(String, int)`.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Overloading by Number of Parameters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overloadByNumber}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(overloadByNumber))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Overloading by Type of Parameters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overloadByType}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(overloadByType))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Overloading by Order of Parameters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{overloadByOrder}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(overloadByOrder))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card className="border-destructive/50 bg-destructive/5">
                 <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2">
                        <XCircle className="w-6 h-6"/>
                        What is NOT Overloading?
                    </CardTitle>
                    <CardDescription>
                        You cannot overload a method just by changing its <strong className="text-foreground">return type</strong>. The parameter list MUST be different. The following code will produce an error.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-card rounded-md p-4 mb-2">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{invalidOverload}</pre>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
