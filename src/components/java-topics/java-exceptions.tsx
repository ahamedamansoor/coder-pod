'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, AlertTriangle, Shield, ShieldCheck, ShieldQuestion } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    return `public class Main {
  public static void checkAge(int age) {
    if (age < 18) {
        throw new ArithmeticException("Access denied - You must be at least 18 years old."); // Throw an exception
    }
    else {
        System.out.println("Access granted - You are old enough!");
    }
  }

  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaExceptions({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {

    const exceptionExample = `try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[10]); // This will cause an error
}
catch(Exception e) {
  // Block of code to handle errors
  System.out.println("Something went wrong. The index does not exist.");
  System.out.println("Error message: " + e.getMessage());
}`;

    const finallyExample = `try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[1]); // This is a valid index
} catch (Exception e) {
  System.out.println("Something went wrong."); // This block will be skipped
} finally {
  System.out.println("The 'try catch' is finished."); // This block is always executed
}`;

    const throwExample = `checkAge(15); // This will cause the program to crash with our custom message
`;

    return (
        <div id="java-exceptions-page" data-test="java-exceptions-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <AlertTriangle className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Exceptions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Gracefully handling errors to prevent your programs from crashing.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an Exception?</CardTitle>
                    <CardDescription>
                       When executing Java code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things. When an error occurs in Java, it is called an **exception**. Instead of crashing the program, Java creates an exception object that contains information about the error.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-center">The `try...catch` Block</CardTitle>
                    <CardDescription className="text-center">The fundamental tool for handling exceptions.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                     <div className="bg-muted p-6 rounded-lg text-center">
                        <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                        <h3 className="font-semibold text-xl text-foreground mb-2">The `try` Block</h3>
                        <p className="text-sm text-muted-foreground">The `try` statement allows you to define a block of code to be tested for errors while it is being executed.</p>
                    </div>
                    <div className="bg-muted p-6 rounded-lg text-center">
                        <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-4"/>
                        <h3 className="font-semibold text-xl text-foreground mb-2">The `catch` Block</h3>
                        <p className="text-sm text-muted-foreground">The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.</p>
                    </div>
                </CardContent>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{exceptionExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(exceptionExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ShieldCheck className="text-primary"/>The `finally` Statement</CardTitle>
                        <CardDescription>The `finally` statement lets you execute code, after `try...catch`, regardless of the result (whether an exception was caught or not).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{finallyExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(finallyExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ShieldQuestion className="text-primary"/>The `throw` Keyword</CardTitle>
                        <CardDescription>The `throw` statement allows you to create a custom error. This is useful for creating specific exceptions for your own methods.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{throwExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(throwExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    );
}
