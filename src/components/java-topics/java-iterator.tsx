
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Route, StepForward, AlertTriangle } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    return `import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaIterator() {

    const iteratorExample = `// Make a collection
ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("Mazda");

// Get the iterator
Iterator<String> it = cars.iterator();

// Loop through a collection, and print each item
while(it.hasNext()) {
  System.out.println(it.next());
}`;

    const removeExample = `ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(12);
numbers.add(8);
numbers.add(2);
numbers.add(23);

Iterator<Integer> it = numbers.iterator();
while(it.hasNext()) {
  Integer i = it.next();
  if(i < 10) {
    it.remove(); // Safely removes the element
  }
}
System.out.println(numbers);`;


    return (
        <div id="java-iterator-page" data-test="java-iterator-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Route className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Iterator</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The standard way to loop through any collection.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an Iterator?</CardTitle>
                    <CardDescription>
                       An `Iterator` is an object that can be used to loop through collections, like `ArrayList`, `HashSet`, etc. It provides a standard way to traverse a collection and sometimes to modify it.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Think of it as a cursor or a bookmark. It keeps track of where you are in the collection, lets you get the next item, and tells you if you've reached the end.</p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Core Iterator Methods</CardTitle>
                    <CardDescription>Iterators have a few simple but powerful methods.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <StepForward className="w-5 h-5 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-lg">`hasNext()`</h3>
                            <p className="text-muted-foreground text-sm">Returns `true` if there are more elements left in the iteration.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <StepForward className="w-5 h-5 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-lg">`next()`</h3>
                            <p className="text-muted-foreground text-sm">Returns the next element in the iteration and moves the cursor forward.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <StepForward className="w-5 h-5 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-lg">`remove()`</h3>
                            <p className="text-muted-foreground text-sm">Removes the last element returned by `next()` from the collection. This is the only safe way to modify a collection while iterating.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: Basic Traversal</CardTitle>
                    <CardDescription>First, you get the iterator from the collection using the `.iterator()` method. Then you use a `while` loop with `hasNext()` and `next()` to go through each item.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{iteratorExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(iteratorExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6"/>
                        Safely Removing Items
                    </CardTitle>
                    <CardDescription>
                        Trying to remove an item from a collection using the collection's own `remove()` method inside a loop will cause a `ConcurrentModificationException`. The ONLY safe way to modify a collection while looping through it is by using the iterator's `remove()` method.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="bg-background border rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{removeExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(removeExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
