
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Copy, Check, Users, ChefHat, Cpu, Zap, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaThreadsProps {
  onOpenEditor: (code: string) => void;
}

export function JavaThreads({ onOpenEditor }: JavaThreadsProps) {

    const extendsThreadExample = `// Method 1: Extending the Thread class
class MyThread extends Thread {
  public void run() {
    System.out.println("This thread is running by extending Thread.");
  }
}

public class Main {
  public static void main(String[] args) {
    MyThread thread = new MyThread();
    thread.start(); // This calls the run() method
  }
}`;

    const implementsRunnableExample = `// Method 2: Implementing the Runnable interface
class MyRunnable implements Runnable {
  public void run() {
    System.out.println("This thread is running by implementing Runnable.");
  }
}

public class Main {
  public static void main(String[] args) {
    MyRunnable myRunnable = new MyRunnable();
    Thread thread = new Thread(myRunnable);
    thread.start(); // This calls the run() method
  }
}`;

    return (
        <div id="java-threads-page" data-test="java-threads-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Users className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Threads & Multithreading</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Doing multiple things at once to make your programs faster and more responsive.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The Chef Analogy: What is Multithreading?</CardTitle>
                    <CardDescription>
                       Imagine a kitchen. A program is like a recipe, and a **thread** is like a chef executing that recipe.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-muted p-6 rounded-lg border">
                        <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2"><ChefHat className="w-6 h-6"/>Single-Threaded Program</h3>
                        <p className="text-sm text-muted-foreground mb-4">One chef does everything: chops vegetables, cooks the sauce, boils pasta, one task at a time. If chopping takes a long time, the pasta has to wait.</p>
                        <div className="flex flex-col items-center gap-2 p-4 bg-background rounded-md">
                           <p className="font-mono text-sm">Task 1</p>
                           <div className="w-px h-4 bg-border"></div>
                           <p className="font-mono text-sm">Task 2</p>
                           <div className="w-px h-4 bg-border"></div>
                           <p className="font-mono text-sm">Task 3</p>
                        </div>
                    </div>
                     <div className="bg-muted p-6 rounded-lg border">
                        <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2"><Users className="w-6 h-6 text-primary"/>Multi-Threaded Program</h3>
                        <p className="text-sm text-muted-foreground mb-4">Multiple chefs work at the same time. One chops vegetables while another cooks the sauce. The whole meal gets done much faster. This is **multithreading**.</p>
                        <div className="flex justify-around p-4 bg-background rounded-md">
                            <div className="flex flex-col items-center gap-2">
                               <p className="font-mono text-sm text-blue-500">Thread A</p>
                               <p className="font-mono text-sm">Task 1</p>
                            </div>
                             <div className="flex flex-col items-center gap-2">
                               <p className="font-mono text-sm text-green-500">Thread B</p>
                               <p className="font-mono text-sm">Task 2</p>
                            </div>
                             <div className="flex flex-col items-center gap-2">
                               <p className="font-mono text-sm text-purple-500">Thread C</p>
                               <p className="font-mono text-sm">Task 3</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
                 <CardContent>
                    <p className="text-center text-sm text-muted-foreground">Essentially, multithreading allows your program to execute multiple parts of itself concurrently, leading to better CPU utilization and performance.</p>
                 </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Creating Threads in Java</CardTitle>
                    <CardDescription>There are two primary ways to create a thread.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                     <div className="bg-background border p-6 rounded-lg">
                        <h3 className="font-semibold text-xl text-primary mb-2">1. Extending the `Thread` Class</h3>
                        <p className="text-sm text-muted-foreground mb-4">You create a new class that inherits from `java.lang.Thread` and then override its `run()` method.</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{extendsThreadExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(extendsThreadExample)}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                     <div className="bg-background border p-6 rounded-lg">
                        <h3 className="font-semibold text-xl text-primary mb-2">2. Implementing the `Runnable` Interface</h3>
                        <p className="text-sm text-muted-foreground mb-4">You create a new class that implements the `java.lang.Runnable` interface and its `run()` method. You then pass an instance of this class to a `Thread` object's constructor.</p>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{implementsRunnableExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(implementsRunnableExample)}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        `Runnable` is Usually Better. Why?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Implementing the `Runnable` interface is the preferred way to create a thread.</p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                        <li><strong>Java does not support multiple inheritance of classes.</strong> If you extend the `Thread` class, you cannot extend any other class. By implementing `Runnable`, your class is free to extend another class.</li>
                        <li>It promotes a better design by separating the task to be run (`Runnable`) from the mechanism of running it (`Thread`).</li>
                    </ul>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                     <CardTitle className="flex items-center gap-2"><Zap className="text-primary"/>Starting a Thread</CardTitle>
                    <CardDescription>
                        Crucially, you do not call the `run()` method directly. You call the `start()` method, which tells the JVM to create a new thread and then execute the `run()` method's code within that new thread.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-destructive mb-2">Wrong: Direct `run()` call</h3>
                            <p className="text-sm text-muted-foreground">`myThread.run();`</p>
                            <p className="text-sm mt-2">This just executes the `run()` method on the current, main thread. No new thread is created.</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-600 mb-2">Correct: `start()` call</h3>
                             <p className="text-sm text-muted-foreground">`myThread.start();`</p>
                            <p className="text-sm mt-2">This correctly starts a new thread and runs the code concurrently.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
