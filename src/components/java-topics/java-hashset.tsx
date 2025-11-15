
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, CheckCircle2, Search, Trash2, Plus } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    return `import java.util.HashSet; // Don't forget to import!

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaHashSet() {

    const creationExample = `// Create a HashSet object called cars that will store strings
HashSet<String> cars = new HashSet<String>();`;
    
    const addExample = `HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("BMW"); // This will be ignored because "BMW" is already in the set
cars.add("Mazda");
System.out.println(cars); // The order is not guaranteed!`;

    const containsExample = `HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");

// Check if an item exists
System.out.println(cars.contains("Mazda")); // Output: false
System.out.println(cars.contains("Volvo")); // Output: true`;

    const removeExample = `HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
System.out.println("Before removal: " + cars);

// Remove "Volvo" from the set
cars.remove("Volvo");
System.out.println("After removal: " + cars);`;

    const loopExample = `HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");

// Loop through the items of a HashSet
for (String i : cars) {
  System.out.println(i);
}`;

    return (
        <div id="java-hashset-page" data-test="java-hashset-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Users className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">HashSet</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing a collection of unique items.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a HashSet?</CardTitle>
                    <CardDescription>
                       Think of a guest list for a party. You only list each guest's name once, no matter how many times you're reminded they are coming. A `HashSet` is a collection of items where every item is **unique**.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>A `HashSet` is one of the most popular classes in the Java Collections framework. You cannot add duplicate values to it. Also, unlike a list, the order of items is not guaranteed.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Creating a HashSet</CardTitle>
                    <CardDescription>To use a `HashSet`, you must first import it from `java.util.HashSet`.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{creationExample}</pre>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Plus className="text-primary"/>Add Items with `add()`</CardTitle>
                         <CardDescription>Duplicates will be ignored.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{addExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(addExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Search className="text-primary"/>Check if an Item Exists</CardTitle>
                        <CardDescription>Use the `contains()` method.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{containsExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(containsExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Trash2 className="text-primary"/>Remove Items</CardTitle>
                        <CardDescription>Use the `remove()` method.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{removeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(removeExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Looping Through a HashSet</CardTitle>
                    <CardDescription>You can use a "for-each" loop to iterate over the items in a `HashSet`.</CardDescription>
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
