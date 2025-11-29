'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, HelpCircle, Lightbulb, Dog, Cat, ShieldCheck } from 'lucide-react';
import React from 'react';

interface JavaInstanceofOperatorProps {
  onOpenEditor: (code: string) => void;
}

export function JavaInstanceofOperator({ onOpenEditor }: JavaInstanceofOperatorProps) {

    const instanceofExample = `// Parent class
class Animal {
  public void eat() {
    System.out.println("This animal eats food.");
  }
}

// Child classes
class Dog extends Animal {
  public void bark() {
    System.out.println("The dog barks!");
  }
}
class Cat extends Animal {
  public void meow() {
    System.out.println("The cat meows!");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal[] myAnimals = new Animal[3];
    myAnimals[0] = new Dog();
    myAnimals[1] = new Cat();
    myAnimals[2] = new Dog();

    for (Animal animal : myAnimals) {
      System.out.print("This animal is a... ");
      
      // Check if the animal is a Dog
      if (animal instanceof Dog) {
        System.out.println("Dog.");
        Dog myDog = (Dog) animal; // We can now safely cast it
        myDog.bark();
      } 
      // Check if the animal is a Cat
      else if (animal instanceof Cat) {
        System.out.println("Cat.");
        Cat myCat = (Cat) animal; // Safely cast to Cat
        myCat.meow();
      }
    }
  }
}`;

    return (
        <div id="java-instanceof-page" data-test="java-instanceof-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <HelpCircle className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">The "instanceof" Operator</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Checking the type of an object before you use it.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is `instanceof`?</CardTitle>
                    <CardDescription>
                       The `instanceof` operator is a keyword used to test whether an object is an instance of a particular class or an instance of a subclass. It returns either `true` or `false`.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold text-primary">Syntax:</p>
                    <div className="bg-muted rounded-md p-4 mt-2">
                        <pre className="font-mono text-sm text-foreground">{'objectReference instanceof ClassName'}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>A Simple Analogy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>Imagine you have a pet. You know it's an `Animal`, but is it a `Dog` or a `Cat`? You'd check before you try to make it bark!</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                        <div className="p-4 bg-background border rounded-lg">
                           <Dog className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                           <p className="font-mono text-sm">`myDog instanceof Dog` <span className="font-bold text-green-600">→ true</span></p>
                           <p className="font-mono text-sm">`myDog instanceof Animal` <span className="font-bold text-green-600">→ true</span></p>
                           <p className="font-mono text-sm">`myDog instanceof Cat` <span className="font-bold text-destructive">→ false</span></p>
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground text-sm">An object of a subclass is also considered an instance of its superclass.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Why is This Useful?</CardTitle>
                    <CardDescription>
                        Its main use is in **polymorphism**. When you have a collection of objects of a parent type (like an array of `Animal`), you might need to check the specific subtype of an object before calling a method that only exists on that subtype (like `bark()` for a `Dog`).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{instanceofExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(instanceofExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6"/>
                        Preventing `ClassCastException`
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">The primary benefit of `instanceof` is safety. It helps you avoid the dreaded `ClassCastException`.</p>
                    <p className="text-muted-foreground mt-2">If you try to cast an object to a type it isn't compatible with (e.g., casting a `Cat` object to a `Dog` variable), your program will crash. Using `instanceof` to check first ensures that your cast is safe.</p>
                </CardContent>
            </Card>
        </div>
    );
}
