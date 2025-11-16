
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, FunctionSquare, ArrowRight, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaLambdaProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.ArrayList;
import java.util.function.Consumer;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaLambda({ onOpenEditor }: JavaLambdaProps) {

    const lambdaSyntax = `(parameter1, parameter2) -> { code block }`;

    const lambdaExample = `ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(5);
numbers.add(9);
numbers.add(8);
numbers.add(1);

// Use a lambda expression in the forEach method
numbers.forEach( (n) -> { System.out.println(n); } );`;

    const consumerExample = `ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(5);
numbers.add(9);

// Store a lambda expression in a variable
Consumer<Integer> method = (n) -> { System.out.println(n); };
numbers.forEach( method );`;

    return (
        <div id="java-lambda-page" data-test="java-lambda-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FunctionSquare className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Lambda Expressions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A shorter way to write anonymous functions, introduced in Java 8.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Lambda Expression?</CardTitle>
                    <CardDescription>
                       A lambda expression is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Syntax</CardTitle>
                    <CardDescription>The simplest lambda expression contains a parameter and an expression:</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 text-center font-mono text-lg">
                        <span className="text-purple-500">parameter</span> -> <span className="text-blue-500">expression</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-2">To use more than one parameter, wrap them in parentheses:</p>
                    <div className="bg-muted rounded-md p-4 mt-4 text-center font-mono text-lg">
                        <span className="text-purple-500">(parameter1, parameter2)</span> -> <span className="text-blue-500">expression</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example in Action</CardTitle>
                    <CardDescription>Lambdas are often used with collection methods like \`forEach\` to perform an action on each item.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{lambdaExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(lambdaExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Storing Lambdas in Variables
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Lambda expressions can be stored in variables if the variable's type is an interface which has only one method. These are called **Functional Interfaces**. Java has many built-in functional interfaces, like \`Consumer\` in the \`java.util.function\` package.</p>
                     <div className="bg-background border rounded-md p-4 mb-4">
                         <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{consumerExample}</pre>
                    </div>
                     <Button onClick={() => onOpenEditor(wrapInMain(consumerExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
