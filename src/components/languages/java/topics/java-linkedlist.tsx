
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Link, Plus, Milestone, ArrowRightLeft, List, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaLinkedListProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.LinkedList;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaLinkedList({ onOpenEditor }: JavaLinkedListProps) {

    const creationExample = `// Create a LinkedList object that will store strings
LinkedList<String> cars = new LinkedList<String>();`;
    
    const addMethodsExample = `LinkedList<String> cars = new LinkedList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
System.out.println("Initial list: " + cars);

// Add an item to the beginning
cars.addFirst("Mazda");
System.out.println("After addFirst(): " + cars);

// Add an item to the end
cars.addLast("Bugatti");
System.out.println("After addLast(): " + cars);`;
    
    const removeMethodsExample = `LinkedList<String> cars = new LinkedList<String>();
cars.add("Mazda");
cars.add("Volvo");
cars.add("BMW");
System.out.println("Initial list: " + cars);

// Remove the first item
cars.removeFirst();
System.out.println("After removeFirst(): " + cars);

// Remove the last item
cars.removeLast();
System.out.println("After removeLast(): " + cars);`;
    
    const getMethodsExample = `LinkedList<String> cars = new LinkedList<String>();
cars.add("Mazda");
cars.add("Volvo");
cars.add("BMW");

// Get the first item
System.out.println("First item: " + cars.getFirst());

// Get the last item
System.out.println("Last item: " + cars.getLast());`;

    return (
        <div id="java-linkedlist-page" data-test="java-linkedlist-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Link className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">LinkedList</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A list where elements are linked together in a sequence.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a LinkedList?</CardTitle>
                    <CardDescription>
                       A `LinkedList` stores its items in "containers." The list holds a link to the first container and each container has a link to the next one in the sequence. Each container also holds the data.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>This structure makes it very efficient to add and remove items from the beginning or end of the list.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Creating a `LinkedList`</CardTitle>
                    <CardDescription>You must import `java.util.LinkedList` to use it.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{creationExample}</pre>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Specific `LinkedList` Methods</CardTitle>
                    <CardDescription>While `LinkedList` shares many methods with `ArrayList` (like `add`, `remove`, `get`), it also has some special methods that make it efficient for certain operations.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                     <div className="bg-muted p-4 rounded-lg">
                       <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                            <Plus className="w-5 h-5 text-primary"/>
                            Adding Items
                        </h3>
                       <p className="text-sm text-muted-foreground mb-3">Use `addFirst()` and `addLast()` for efficient additions.</p>
                       <div className="bg-background/50 border rounded p-2 overflow-x-auto">
                            <pre className="font-mono text-xs whitespace-pre-wrap">{addMethodsExample}</pre>
                       </div>
                       <Button onClick={() => onOpenEditor(wrapInMain(addMethodsExample))} variant="ghost" size="sm" className="mt-2">
                           <Play className="mr-2 h-4 w-4" /> Try it
                       </Button>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                       <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                            <Milestone className="w-5 h-5 text-primary"/>
                            Removing Items
                        </h3>
                       <p className="text-sm text-muted-foreground mb-3">Use `removeFirst()` and `removeLast()`.</p>
                       <div className="bg-background/50 border rounded p-2 overflow-x-auto">
                            <pre className="font-mono text-xs whitespace-pre-wrap">{removeMethodsExample}</pre>
                       </div>
                       <Button onClick={() => onOpenEditor(wrapInMain(removeMethodsExample))} variant="ghost" size="sm" className="mt-2">
                           <Play className="mr-2 h-4 w-4" /> Try it
                       </Button>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                       <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                            <Milestone className="w-5 h-5 text-primary"/>
                            Getting Items
                        </h3>
                       <p className="text-sm text-muted-foreground mb-3">Use `getFirst()` and `getLast()`.</p>
                       <div className="bg-background/50 border rounded p-2 overflow-x-auto">
                            <pre className="font-mono text-xs whitespace-pre-wrap">{getMethodsExample}</pre>
                       </div>
                       <Button onClick={() => onOpenEditor(wrapInMain(getMethodsExample))} variant="ghost" size="sm" className="mt-2">
                           <Play className="mr-2 h-4 w-4" /> Try it
                       </Button>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        `ArrayList` vs. `LinkedList`
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><List className="w-5 h-5 text-primary"/>Use `ArrayList` when...</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                            <li>You need fast, random, index-based access to elements (`get(i)`).</li>
                            <li>You are mostly reading from the list.</li>
                            <li>Your list size is relatively stable or you are adding/removing from the end.</li>
                        </ul>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Link className="w-5 h-5 text-primary"/>Use `LinkedList` when...</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                             <li>You need to do a lot of insertions and deletions from the beginning or end of the list.</li>
                             <li>You don't need fast random access (getting an element in the middle is slow).</li>
                             <li>You are building a queue or a deque (double-ended queue).</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

    