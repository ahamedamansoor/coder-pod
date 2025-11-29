
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, ArrowRight, ArrowLeft, LogOut, Eye, Milestone } from 'lucide-react';
import React from 'react';

interface JavaQueueDequeProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.Queue;
import java.util.Deque;
import java.util.LinkedList;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaQueueDeque({ onOpenEditor }: JavaQueueDequeProps) {

    const queueExample = `Queue<String> queue = new LinkedList<>();

// Adding elements (add() or offer())
queue.add("Alice");
queue.add("Bob");
queue.add("Charlie");
System.out.println("Queue: " + queue);

// Peeking at the head
System.out.println("Head of queue is: " + queue.peek()); // Alice

// Removing elements (remove() or poll())
String served = queue.poll();
System.out.println("Served: " + served); // Alice
System.out.println("Queue now: " + queue);`;

    const dequeExample = `Deque<String> deque = new LinkedList<>();

// Add to both ends
deque.addFirst("Bob");   // Bob
deque.addLast("Charlie");  // Bob, Charlie
deque.addFirst("Alice"); // Alice, Bob, Charlie
System.out.println("Deque: " + deque);

// Remove from both ends
String first = deque.removeFirst();
System.out.println("Removed first: " + first); // Alice
System.out.println("Deque now: " + deque);

String last = deque.removeLast();
System.out.println("Removed last: " + last); // Charlie
System.out.println("Deque now: " + deque);`;

    return (
        <div id="java-queue-deque-page" data-test="java-queue-deque-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Users className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Queue and Deque</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding "First-In, First-Out" and other ordered data structures.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Queue?</CardTitle>
                    <CardDescription>
                       A `Queue` is a collection designed for holding elements prior to processing. The basic principle is **FIFO (First-In, First-Out)**.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Think of a checkout line at a grocery store. The first person to get in line is the first person to be served. New people are added to the end of the line, and people are served from the front.</p>
                   <div className="bg-muted p-6 rounded-lg mt-4 text-center border">
                        <p className="font-semibold text-lg mb-4">Checkout Line Analogy</p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex flex-col items-center">
                                <p className="font-mono text-sm mb-1">add()</p>
                                <ArrowRight className="w-8 h-8 text-green-500"/>
                            </div>
                            <div className="flex gap-2 p-2 border-2 border-dashed rounded-lg bg-background">
                                <div className="p-3 bg-blue-200 rounded-md">Person C</div>
                                <div className="p-3 bg-yellow-200 rounded-md">Person B</div>
                                <div className="p-3 bg-red-200 rounded-md">Person A</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="font-mono text-sm mb-1">poll()</p>
                                <ArrowRight className="w-8 h-8 text-destructive"/>
                            </div>
                        </div>
                   </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Core `Queue` Methods</CardTitle>
                        <CardDescription>A `Queue` has three main operations.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Milestone className="w-5 h-5 text-primary mt-1"/>
                            <div>
                                <h3 className="font-bold">`add(e)` or `offer(e)`</h3>
                                <p className="text-sm text-muted-foreground">Inserts an element at the tail (end) of the queue.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <LogOut className="w-5 h-5 text-primary mt-1"/>
                            <div>
                                <h3 className="font-bold">`remove()` or `poll()`</h3>
                                <p className="text-sm text-muted-foreground">Removes and returns the element at the head (front) of the queue.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Eye className="w-5 h-5 text-primary mt-1"/>
                            <div>
                                <h3 className="font-bold">`element()` or `peek()`</h3>
                                <p className="text-sm text-muted-foreground">Retrieves, but does not remove, the element at the head of the queue.</p>
                            </div>
                        </div>
                         <p className="text-xs text-muted-foreground pt-2">Note: The pairs of methods behave differently when the operation fails (e.g., removing from an empty queue). `add`, `remove`, `element` throw an exception, while `offer`, `poll`, `peek` return `null` or `false`.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Queue Example</CardTitle>
                        <CardDescription>Since `Queue` is an interface, you must use a class that implements it, like `LinkedList`.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{queueExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(queueExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <ArrowLeft className="w-6 h-6 text-primary"/><ArrowRight className="w-6 h-6 text-primary"/> What is a Deque?
                    </CardTitle>
                    <CardDescription>
                       A `Deque` (pronounced "deck") stands for **Double-Ended Queue**. It's a more flexible version of a queue where you can add and remove elements from **both the front and the back**.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>This makes it useful for modeling things like a stack of plates (where you add and remove from the top) or a line where people can enter and leave from both ends.</p>
                    <h3 className="font-semibold mt-4 mb-2">Deque Example:</h3>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{dequeExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(dequeExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
