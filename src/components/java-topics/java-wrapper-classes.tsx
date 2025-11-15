
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Box, ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    return `import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaWrapperClasses() {

    const wrapperExample = `Integer myInt = 5;
Double myDouble = 5.99;
Character myChar = 'A';
System.out.println(myInt);
System.out.println(myDouble);
System.out.println(myChar);`;

    const methodsExample = `Integer myInt = 100;
String myString = myInt.toString();
System.out.println("The integer as a string: " + myString);
System.out.println("Length of the string: " + myString.length());`;

    const whyUseExample = `// This is valid:
ArrayList<Integer> myNumbers = new ArrayList<Integer>(); 

// This is NOT valid and will cause a compile error:
// ArrayList<int> myNumbers = new ArrayList<int>();`;

    return (
        <div id="java-wrapper-classes-page" data-test="java-wrapper-classes-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Box className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Wrapper Classes</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Using primitive data types as objects.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Wrapper Classes?</CardTitle>
                    <CardDescription>
                       Wrapper classes provide a way to use primitive data types (`int`, `boolean`, etc.) as objects. For each primitive type, there is a corresponding wrapper class.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                     <div className="bg-muted p-4 rounded-lg w-full max-w-md">
                        <p className="text-center font-semibold mb-2">Primitive <ArrowRightLeft className="inline w-4 h-4 mx-2"/> Wrapper</p>
                        <ul className="space-y-1 font-mono text-sm">
                            <li className="flex justify-between"><span>`byte`</span> <span>`Byte`</span></li>
                            <li className="flex justify-between"><span>`short`</span> <span>`Short`</span></li>
                            <li className="flex justify-between"><span>`int`</span> <span>`Integer`</span></li>
                            <li className="flex justify-between"><span>`long`</span> <span>`Long`</span></li>
                            <li className="flex justify-between"><span>`float`</span> <span>`Float`</span></li>
                            <li className="flex justify-between"><span>`double`</span> <span>`Double`</span></li>
                            <li className="flex justify-between"><span>`boolean`</span> <span>`Boolean`</span></li>
                            <li className="flex justify-between"><span>`char`</span> <span>`Character`</span></li>
                        </ul>
                     </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example of Creating Wrapper Objects</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{wrapperExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(wrapperExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Useful Methods</CardTitle>
                    <CardDescription>Since they are objects, wrapper classes have useful methods. For example, you can convert an `Integer` to a `String` and use string methods on it.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{methodsExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(methodsExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6"/>
                        The Main Reason to Use Wrapper Classes
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">The Java Collections Framework, such as `ArrayList`, can only store objects, not primitive types.</p>
                    <p className="text-muted-foreground mt-2">To store an `int` in an `ArrayList`, you must use its wrapper class, `Integer`.</p>
                     <div className="bg-background border rounded-md p-4 mt-4">
                         <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{whyUseExample}</pre>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">This is the most common and important use case for wrapper classes.</p>
                </CardContent>
            </Card>
        </div>
    );
}
