
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Grid, Square, ListOrdered, Repeat, CheckCircle2 } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaArrays({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {

    const declarationExample = `// Declares an array of integers
String[] cars;

// Declares an array of Strings
int[] numbers;`;

    const initializationExample = `// Allocate memory for 5 integers
numbers = new int[5]; 

// Allocate memory and assign values
cars = new String[]{"Volvo", "BMW", "Ford"};`;

    const accessExample = `String[] cars = {"Volvo", "BMW", "Ford"};
// Access the first element
System.out.println(cars[0]); // Output: Volvo

// Change the second element
cars[1] = "Tesla";
System.out.println(cars[1]); // Output: Tesla`;

    const lengthExample = `String[] cars = {"Volvo", "BMW", "Ford"};
System.out.println(cars.length); // Output: 3`;

    const loopExample = `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (int i = 0; i < cars.length; i++) {
  System.out.println("Car " + i + ": " + cars[i]);
}`;

    return (
        <div id="java-arrays-page" data-test="java-arrays-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Grid className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Arrays</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing multiple values of the same type in a single variable.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an Array?</CardTitle>
                    <CardDescription>
                        Imagine an array as a train. The whole train is a single variable, and each car in the train is an element that holds a value. Each car has a number (an "index") so you know where to find it. All cars must hold the same type of cargo (data type).
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Square className="w-6 h-6 text-primary"/>
                       <CardTitle>Declaring and Initializing an Array</CardTitle>
                    </div>
                    <CardDescription>You create an array in two steps: first you declare it, then you initialize it.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">1. Declaration</h3>
                        <p className="text-sm text-muted-foreground mb-4">This tells Java you want a variable that will hold an array of a specific type.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">DataType[] arrayName;</pre>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">2. Initialization</h3>
                        <p className="text-sm text-muted-foreground mb-4">This creates the array in memory. You can either specify its size or provide the initial values directly.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`// Option A: Initialize with size
arrayName = new DataType[size];

// Option B: Initialize with values (Array Literal)
arrayName = new DataType[]{value1, value2, ...};`}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(initializationExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <ListOrdered className="w-6 h-6 text-primary"/>
                       <CardTitle>Accessing Elements (Zero-Indexing)</CardTitle>
                    </div>
                    <CardDescription>You access an array element by referring to its index number inside square brackets `[]`.
                    <br/><strong className="text-destructive">Important:</strong> Array indexes start at <strong>0</strong>, not 1. The first element is at index 0, the second is at index 1, and so on.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-2">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{accessExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(accessExample))} variant="ghost" size="sm">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Array Length</CardTitle>
                        <CardDescription>To find out how many elements an array has, use the `length` property (note: it's not a method, so no parentheses).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{lengthExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(lengthExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Repeat className="text-primary"/>Looping Through an Array</CardTitle>
                        <CardDescription>You can loop through the array elements with the `for` loop, using the `length` property to control the loop.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{loopExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(loopExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
