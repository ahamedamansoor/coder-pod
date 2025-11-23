'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Layers, Puzzle, Lightbulb, Box, CheckCircle2 } from 'lucide-react';
import React from 'react';

interface JavaInnerClassesProps {
  onOpenEditor: (code: string) => void;
}

export function JavaInnerClasses({ onOpenEditor }: JavaInnerClassesProps) {

    const innerClassExample = `class OuterClass {
  private int outerX = 10; // Private member of the outer class

  class InnerClass { // Inner class
    public int getOuterX() {
      return outerX; // Can access private members of the outer class
    }
  }
}

public class Main {
  public static void main(String[] args) {
    OuterClass myOuter = new OuterClass();
    OuterClass.InnerClass myInner = myOuter.new InnerClass();
    System.out.println(myInner.getOuterX()); // Outputs 10
  }
}`;

    const whyUseReasons = [
        {
            title: "Logical Grouping",
            description: "If a class is only used by one other class, it's logical to nest it. This keeps related code together.",
            icon: Puzzle,
        },
        {
            title: "Increased Encapsulation",
            description: "Inner classes can be declared private. This means they are completely hidden from any other class, providing stronger encapsulation.",
            icon: Box,
        },
        {
            title: "More Readable Code",
            description: "Grouping helper classes makes your code more organized and easier to maintain in the long run.",
            icon: CheckCircle2,
        }
    ];

    return (
        <div id="java-inner-classes-page" data-test="java-inner-classes-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layers className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Inner Classes</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Organizing your code by nesting classes within other classes.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an Inner Class?</CardTitle>
                    <CardDescription>
                       In Java, it's possible to write a class within another class. We call this a **nested class** or, more commonly, an **inner class**.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Think of a `Car` and its `Engine`. An `Engine` is a complex object on its own, but it doesn't really exist independently; it's logically part of a `Car`. In Java, you could make the `Engine` class an inner class of the `Car` class.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Why Use Inner Classes?</CardTitle>
                    <CardDescription>There are several good reasons to group classes this way.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    {whyUseReasons.map(reason => (
                        <div key={reason.title} className="bg-muted p-6 rounded-lg">
                            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                                <reason.icon className="w-5 h-5 text-primary"/>
                                {reason.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Example in Action</CardTitle>
                    <CardDescription>
                        One of the most powerful features of an inner class is that it can access all members (attributes and methods) of the outer class, even if they are declared `private`.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{innerClassExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(innerClassExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Instantiating an Inner Class
                    </CardTitle>
                    <CardDescription>
                       To create an object of the inner class, you must first have an object of the outer class. The syntax is a bit different: `OuterClass.InnerClass myInner = myOuter.new InnerClass();`
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
