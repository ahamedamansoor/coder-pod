
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Book, KeyRound, Plus, Trash2, Search, Repeat } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    return `import java.util.HashMap; // Don't forget to import!

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaHashMap() {

    const creationExample = `// Create a HashMap object called capitalCities
HashMap<String, String> capitalCities = new HashMap<String, String>();`;
    
    const putExample = `HashMap<String, String> capitalCities = new HashMap<String, String>();
// Add keys and values (Country, City)
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
capitalCities.put("Norway", "Oslo");
System.out.println(capitalCities);`;

    const getExample = `HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");

// Get the value for the key "England"
System.out.println(capitalCities.get("England")); // Output: London`;

    const removeExample = `HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
System.out.println("Before removal: " + capitalCities);

// Remove the key "England"
capitalCities.remove("England");
System.out.println("After removal: " + capitalCities);`;

    const loopExample = `HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
capitalCities.put("Norway", "Oslo");

System.out.println("--- Looping through keys ---");
// Print keys
for (String i : capitalCities.keySet()) {
  System.out.println(i);
}

System.out.println("\\n--- Looping through values ---");
// Print values
for (String i : capitalCities.values()) {
  System.out.println(i);
}

System.out.println("\\n--- Looping through keys and values ---");
// Print keys and values
for (String i : capitalCities.keySet()) {
  System.out.println("key: " + i + " value: " + capitalCities.get(i));
}`;

    return (
        <div id="java-hashmap-page" data-test="java-hashmap-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <KeyRound className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">HashMap</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing data in flexible "key-value" pairs.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a HashMap?</CardTitle>
                    <CardDescription>
                       Think of a dictionary. You look up a word (**the key**) to find its definition (**the value**). A `HashMap` in Java works exactly like that. It's a collection that stores items in "key/value" pairs, and you can access them by an index of another type (e.g. a `String`).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>One object is used as a key (index) to another object (value). It can store different types: `String` keys and `Integer` values, or the same type, like `String` keys and `String` values.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Creating a HashMap</CardTitle>
                    <CardDescription>To use a `HashMap`, you must first import it from `java.util.HashMap`.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{creationExample}</pre>
                    </div>
                    <p className="text-sm text-muted-foreground">In this example, we create a `HashMap` that will store `String` keys and `String` values.</p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Plus className="text-primary"/>Add Items with `put()`</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{putExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(putExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Search className="text-primary"/>Access Items with `get()`</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{getExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(getExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Trash2 className="text-primary"/>Remove Items with `remove()`</CardTitle>
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
                    <CardTitle className="flex items-center gap-2"><Repeat className="text-primary"/>Looping Through a HashMap</CardTitle>
                    <CardDescription>You can loop through a `HashMap` in a few ways. You can iterate through its keys, its values, or both.</CardDescription>
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
