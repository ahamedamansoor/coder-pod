'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, List, Plus, Search, Edit, Trash2, Repeat, MoveHorizontal, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

interface JavaArrayListProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.ArrayList; // Don't forget to import!

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaArrayList({ onOpenEditor }: JavaArrayListProps) {

    const creationExample = `// Create an ArrayList object that will store strings
ArrayList<String> cars = new ArrayList<String>();`;

    const methods = [
        {
            name: "add()",
            icon: Plus,
            description: "Adds an element to the end of the list.",
            example: 'cars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars);'
        },
        {
            name: "get()",
            icon: Search,
            description: "Accesses an element at a specific index.",
            example: 'cars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars.get(0)); // Gets the first element'
        },
        {
            name: "set()",
            icon: Edit,
            description: "Changes an element at a specific index.",
            example: 'cars.add("Volvo");\ncars.add("BMW");\ncars.set(0, "Opel"); // Change the first element\nSystem.out.println(cars);'
        },
        {
            name: "remove()",
            icon: Trash2,
            description: "Removes an element at a specific index.",
            example: 'cars.add("Volvo");\ncars.add("BMW");\ncars.remove(0); // Remove the first element\nSystem.out.println(cars);'
        },
        {
            name: "size()",
            icon: MoveHorizontal,
            description: "Returns the number of elements in the list.",
            example: 'cars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars.size());'
        },
    ];

    const loopExample = `ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");

// You can use a standard for-loop
System.out.println("--- Standard For Loop ---");
for (int i = 0; i < cars.size(); i++) {
  System.out.println(cars.get(i));
}

// Or a more modern "for-each" loop
System.out.println("\\n--- For-Each Loop ---");
for (String car : cars) {
  System.out.println(car);
}`;

    return (
        <div id="java-arraylist-page" data-test="java-arraylist-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <List className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">ArrayList</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The most common and flexible list in Java.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an `ArrayList`?</CardTitle>
                    <CardDescription>
                       An `ArrayList` is a resizable array, found in the `java.util` package. While a standard Java array has a fixed size, an `ArrayList` can grow and shrink dynamically as you add or remove elements.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-destructive mb-2 flex items-center gap-2"><XCircle className="w-5 h-5"/>Standard Array</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Fixed size.</li>
                            <li>Cannot change length after creation.</li>
                        </ul>
                    </div>
                     <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-600 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5"/>ArrayList</h3>
                         <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Dynamic size.</li>
                            <li>Can add/remove elements easily.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Creating an `ArrayList`</CardTitle>
                    <CardDescription>To use an `ArrayList`, you must first import it from `java.util.ArrayList`. You also need to specify the type of objects it will store inside angle brackets `<>`.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{creationExample}</pre>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-yellow-500/10 p-3 rounded-md border border-yellow-500/20">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0"/>
                        <p>Important: `ArrayList` can only hold objects, not primitive types. You must use wrapper classes (e.g., `Integer` for `int`, `Double` for `double`).</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Common `ArrayList` Methods</CardTitle>
                    <CardDescription>Here are the essential methods you'll use constantly.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {methods.map((method) => (
                        <div key={method.name} className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                                <method.icon className="w-5 h-5 text-primary"/>
                                `.{method.name}`
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                            <div className="bg-background/50 border rounded p-2 overflow-x-auto">
                                <pre className="font-mono text-xs whitespace-pre-wrap">{method.example}</pre>
                            </div>
                            <Button onClick={() => onOpenEditor(wrapInMain(`ArrayList<String> cars = new ArrayList<String>();\n${method.example}`))} variant="ghost" size="sm" className="mt-2">
                                <Play className="mr-2 h-4 w-4" /> Try it
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Repeat className="text-primary"/>Looping Through an `ArrayList`</CardTitle>
                    <CardDescription>There are two common ways to iterate over the elements.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{loopExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(loopExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
