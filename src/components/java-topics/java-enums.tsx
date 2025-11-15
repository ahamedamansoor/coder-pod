
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, List, Lightbulb, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import React from 'react';

interface JavaEnumsProps {
  onOpenEditor: (code: string) => void;
}

export function JavaEnums({ onOpenEditor }: JavaEnumsProps) {

    const basicEnumExample = `// Define the enum
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; 
    
    switch(myVar) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
        System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
    }
  }
}`;

    const advancedEnumExample = `enum Level {
  LOW(1),
  MEDIUM(5),
  HIGH(10); // Semicolon needed here

  private final int levelCode;

  // Constructor
  private Level(int levelCode) {
    this.levelCode = levelCode;
  }
  
  // Method
  public int getLevelCode() {
    return this.levelCode;
  }
}

public class Main {
    public static void main(String[] args) {
        Level myLevel = Level.MEDIUM;
        System.out.println("Level: " + myLevel);
        System.out.println("Level Code: " + myLevel.getLevelCode());
    }
}`;

    return (
        <div id="java-enums-page" data-test="java-enums-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <List className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Enums</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A special "class" that represents a group of constants.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is an Enum?</CardTitle>
                    <CardDescription>
                       An `enum` is a special data type that enables for a variable to be a set of predefined constants. The variable must be equal to one of the values that have been predefined for it. Common examples are the days of the week, directions on a compass, or difficulty levels in a game.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Instead of using insecure `String` or `int` constants, enums provide type-safe, readable code.</p>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Why Use Enums?
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-500"/>Type Safety</h3>
                        <p className="text-sm text-muted-foreground">You can't accidentally assign an invalid value. A variable of type `Level` can only be `LOW`, `MEDIUM`, or `HIGH`, not "Easy" or 4.</p>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Tag className="w-5 h-5 text-blue-500"/>Readability</h3>
                        <p className="text-sm text-muted-foreground">`if (level == Level.HIGH)` is much clearer and less error-prone than `if (level == 2)`.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Example: Basic Enum</CardTitle>
                    <CardDescription>
                        You define an `enum` with the `enum` keyword, and separate the constants with a comma. They are `public`, `static`, and `final` by default.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{basicEnumExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(basicEnumExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Enums as Classes</CardTitle>
                    <CardDescription>
                        Enums are more powerful than just constants. They can have attributes and methods, just like a class.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                        <li>Each enum constant is an object of the enum type.</li>
                        <li>The constructor for an enum type must be `private`. It is called once for each constant at the time the enum is loaded.</li>
                        <li>You can define methods to be called on the enum constants.</li>
                    </ul>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{advancedEnumExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(advancedEnumExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
