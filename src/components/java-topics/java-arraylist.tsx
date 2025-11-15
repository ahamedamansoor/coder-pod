
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, List, Plus, Search, Replace, Trash2, Milestone, ListChecks, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaArrayListProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.ArrayList;
import java.util.Collections; // For sorting

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
            desc: "Adds an element to the end of the list.",
            example: 'ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars);'
        },
        { 
            name: "get()", 
            icon: Search,
            desc: "Returns the element at the specified index.",
            example: 'ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars.get(0)); // Output: Volvo'
        },
        { 
            name: "set()", 
            icon: Replace,
            desc: "Replaces the element at the specified index.",
            example: 'ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\ncars.set(0, "Opel");\nSystem.out.println(cars);'
        },
        { 
            name: "remove()", 
            icon: Trash2,
            desc: "Removes the element at the specified index.",
            example: 'ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\ncars.remove(0);\nSystem.out.println(cars);'
        },
        { 
            name: "size()", 
            icon: Milestone,
            desc: "Returns the number of elements in the list.",
            example: 'ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars.size()); // Output: 2'
        },
        { 
            name: "clear()", 
            icon: Trash2,
            desc: "Removes all elements from the list.",
            example: 'ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\ncars.clear();\nSystem.out.println(cars); // Output: []'
        },
    ];

    const loopExample = `ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");

for (String car : cars) {
  System.out.println(car);
}`;
    
    const sortExample = `ArrayList<Integer> myNumbers = new ArrayList<Integer>();
myNumbers.add(33);
myNumbers.add(15);
myNumbers.add(20);
myNumbers.add(8);

System.out.println("Before sorting: " + myNumbers);

Collections.sort(myNumbers);  // Sort myNumbers

System.out.println("After sorting: " + myNumbers);`;


    return (
        <div id="java-arraylist-page" data-test="java-arraylist-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <List className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">ArrayList</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The resizable array: a flexible way to store a list of items.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an ArrayList?</CardTitle>
                    <CardDescription>
                       The `ArrayList` class is a resizable array, which can be found in the `java.util` package. While a standard Java `Array` has a fixed size, an `ArrayList` grows and shrinks automatically as you add or remove items.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Think of it as a dynamic shopping list. You can add new items, cross off old ones, and the list just adjusts itself. It's one of the most commonly used classes in the Java Collections Framework.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Creating an `ArrayList`</CardTitle>
                    <CardDescription>You must import `java.util.ArrayList` to use it. You specify the type of objects it will hold in angle brackets `<>`.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{creationExample}</pre>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Common `ArrayList` Methods</CardTitle>
                    <CardDescription>Here are some of the most useful methods for working with an `ArrayList`.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {methods.map(method => (
                        <div key={method.name} className="bg-muted p-4 rounded-lg">
                           <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                                <method.icon className="w-5 h-5 text-primary"/>
                                {method.name}
                            </h3>
                           <p className="text-sm text-muted-foreground mb-3">{method.desc}</p>
                           <div className="bg-background/50 border rounded p-2 overflow-x-auto">
                                <pre className="font-mono text-xs whitespace-pre-wrap">{method.example}</pre>
                           </div>
                           <Button onClick={() => onOpenEditor(wrapInMain(method.example))} variant="ghost" size="sm" className="mt-2">
                               <Play className="mr-2 h-4 w-4" /> Try it
                           </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ListChecks className="text-primary"/>Looping Through an `ArrayList`</CardTitle>
                        <CardDescription>You can easily loop through the items using a "for-each" loop.</CardDescription>
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
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Milestone className="text-primary"/>Sorting an `ArrayList`</CardTitle>
                        <CardDescription>The `Collections` class provides a useful `sort()` method.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <p className="text-sm text-muted-foreground mb-4">You must import `java.util.Collections`.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{sortExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(sortExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        ArrayList vs. Array
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">The key difference is that a basic `Array` has a fixed size, whereas an `ArrayList` is dynamic.</p>
                    <p className="text-muted-foreground mt-2">Generally, you should use an `ArrayList` when you don't know the exact size of your collection, or if you know you will be adding and removing elements frequently. Use a basic `Array` when you have a fixed number of elements and need slightly better performance.</p>
                </CardContent>
            </Card>
        </div>
    );
}

    