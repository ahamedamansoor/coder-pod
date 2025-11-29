
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Book, KeyRound, SortAsc, AlertTriangle, ArrowRight, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaTreeMapTreeSetProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.TreeMap;
import java.util.TreeSet;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaTreeMapTreeSet({ onOpenEditor }: JavaTreeMapTreeSetProps) {

    const treeSetExample = `TreeSet<String> set = new TreeSet<>();
set.add("Charlie");
set.add("Alice");
set.add("Bob");

System.out.println(set); // Output: [Alice, Bob, Charlie]`;

    const treeMapExample = `TreeMap<Integer, String> map = new TreeMap<>();
map.put(3, "Charlie");
map.put(1, "Alice");
map.put(2, "Bob");

System.out.println(map); // Output: {1=Alice, 2=Bob, 3=Charlie}`;

    return (
        <div id="java-treemap-treeset-page" data-test="java-treemap-treeset-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <SortAsc className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">TreeMap and TreeSet</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Collections that automatically keep your data in sorted order.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What Are They?</CardTitle>
                    <CardDescription>
                       `TreeSet` and `TreeMap` are special implementations of the `Set` and `Map` interfaces. Their superpower is that they always store elements in a **sorted order**.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Imagine a bookshelf that automatically organizes your books alphabetically every time you add a new one. That's how `TreeSet` and `TreeMap` work with your data. Under the hood, they use a data structure called a Red-Black Tree to maintain this sorted order efficiently.</p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Book className="text-primary"/>`TreeSet`</CardTitle>
                        <CardDescription>A `TreeSet` is a `Set` that stores its unique elements in ascending order.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{treeSetExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(treeSetExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><KeyRound className="text-primary"/>`TreeMap`</CardTitle>
                        <CardDescription>A `TreeMap` is a `Map` that stores its unique keys in ascending order.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{treeMapExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(treeMapExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Sorted vs. Unsorted
                    </CardTitle>
                    <CardDescription>
                        Here's the key difference from their "Hash" counterparts.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">`HashSet` / `HashMap`</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                            <li><strong>Unordered</strong>: Does not guarantee any specific order of elements.</li>
                            <li><strong>Fast</strong>: Generally faster for adding, removing, and checking for elements because they don't need to maintain order.</li>
                            <li>Use when you just need to store items and check for their existence quickly.</li>
                        </ul>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">`TreeSet` / `TreeMap`</h3>
                         <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                            <li><strong>Sorted</strong>: Always maintains elements in a sorted order.</li>
                            <li><strong>Slightly Slower</strong>: Add, remove, and check operations are a bit slower because the tree structure needs to be kept in order.</li>
                            <li>Use when you need your collection to always be sorted.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-yellow-500/50 bg-yellow-500/5">
                 <CardHeader>
                    <CardTitle className="text-yellow-700 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6"/>
                        The Catch: Elements Must Be "Comparable"
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">For a `TreeSet` or `TreeMap` to sort your objects, it needs to know **how** to compare them. If you try to add custom objects (like `new Car("Ford")`) without telling Java how to sort `Car` objects, your program will crash with a `ClassCastException`.</p>
                    <p className="text-muted-foreground mt-4">You have two ways to solve this:</p>
                    <ol className="list-decimal list-inside mt-4 space-y-2">
                        <li>Make your custom class implement the <strong className="text-foreground">`Comparable`</strong> interface and define the `compareTo()` method.</li>
                        <li>Provide a <strong className="text-foreground">`Comparator`</strong> object to the `TreeSet` or `TreeMap`'s constructor, which defines the comparison logic externally.</li>
                    </ol>
                    <p className="text-muted-foreground mt-4">We'll cover `Comparable` and `Comparator` in another topic!</p>
                </CardContent>
            </Card>
        </div>
    );
}
