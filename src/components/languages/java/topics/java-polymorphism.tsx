
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Share2, Cat, Dog, VenetianMask, Lightbulb, ArrowDown } from 'lucide-react';
import React from 'react';

interface JavaPolymorphismProps {
  onOpenEditor: (code: string) => void;
}

export function JavaPolymorphism({ onOpenEditor }: JavaPolymorphismProps) {

    const polymorphismExample = `class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}

class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object
    
    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}`;

    return (
        <div id="java-polymorphism-page" data-test="java-polymorphism-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <VenetianMask className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Polymorphism</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Using a single interface to represent different types of objects.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Polymorphism?</CardTitle>
                    <CardDescription>
                       Polymorphism means "many forms," and it occurs when we have many classes that are related to each other by inheritance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Just like we saw in Inheritance, polymorphism uses inherited methods to perform different tasks. This allows us to perform a single action in different ways. For example, think of a superclass called `Animal` that has a method called `animalSound()`. Subclasses of Animals could be Pigs, Cats, Dogs, Birds - and they also have their own implementation of an animal sound (the pig oinks, the cat meows, etc.).</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Visualizing Polymorphism: Many Forms, One Action</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md text-center bg-primary/5 shadow-md">
                        <h3 className="text-xl font-bold text-primary flex items-center justify-center gap-2"><Share2 className="w-6 h-6"/>Animal (Superclass)</h3>
                        <ul className="mt-2 text-sm text-muted-foreground list-inside list-disc text-left">
                            <li><span className="font-mono bg-muted p-1 rounded">public void animalSound();</span></li>
                        </ul>
                    </div>
                    <div className="flex w-full justify-around">
                        <ArrowDown className="w-8 h-8 text-muted-foreground" />
                        <ArrowDown className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-around gap-4">
                        <div className="border-2 border-secondary rounded-lg p-6 w-full max-w-md text-center bg-secondary/10 shadow-md">
                            <h3 className="text-xl font-bold text-secondary-foreground flex items-center justify-center gap-2"><Dog className="w-6 h-6"/>Dog (Subclass)</h3>
                            <p className="text-xs text-muted-foreground mb-2">Overrides `animalSound()`</p>
                            <p className="font-mono bg-muted p-1 rounded text-sm">"The dog says: bow wow"</p>
                        </div>
                        <div className="border-2 border-secondary rounded-lg p-6 w-full max-w-md text-center bg-secondary/10 shadow-md">
                            <h3 className="text-xl font-bold text-secondary-foreground flex items-center justify-center gap-2"><Cat className="w-6 h-6"/>Cat (Subclass)</h3>
                            <p className="text-xs text-muted-foreground mb-2">Overrides `animalSound()`</p>
                            <p className="font-mono bg-muted p-1 rounded text-sm">"The cat says: meow"</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Example in Action</CardTitle>
                    <CardDescription>
                        Here, we create `Pig` and `Dog` objects and assign them to `Animal` type variables. Even though they are both of type `Animal`, the correct `animalSound()` method is called for each one.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{polymorphismExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(polymorphismExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Why Use Polymorphism?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Polymorphism is powerful because it allows for code to be more **flexible and reusable**.</p>
                    <p className="text-muted-foreground mt-2">You can write code that works on a superclass (like `Animal`), and it will automatically work correctly with any new subclasses you create (like `Cow`, `Bird`, etc.), as long as they follow the same method structure. This reduces the need for large, complex `if-else` or `switch` statements.</p>
                </CardContent>
            </Card>
        </div>
    );
}
