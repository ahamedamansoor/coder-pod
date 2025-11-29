'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, Unlock, Lock, Users, Package, Check, X, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function JavaAccessModifiers({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const modifiers = [
        {
            name: "public",
            icon: Unlock,
            description: "The code is accessible for all classes.",
            class: "Visible",
            package: "Visible",
            subclass: "Visible",
            world: "Visible",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            code: `public class Main {
    public String myAttribute = "I am public!"; // public member

    public static void main(String[] args){
        Main myObj = new Main();
        System.out.println(myObj.myAttribute); // accessible here
    }
}`
        },
        {
            name: "protected",
            icon: Users,
            description: "The code is accessible in the same package and subclasses.",
            class: "Visible",
            package: "Visible",
            subclass: "Visible",
            world: "Hidden",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10",
            code: `class Vehicle {
    protected int speed; // protected member
}

class Bike extends Vehicle {
    void setSpeed(int s) {
        speed = s; // accessible in subclass
    }
    int getSpeed() {
        return speed; // accessible in subclass
    }
}

public class Main {
    public static void main(String[] args){
        Bike b = new Bike();
        b.setSpeed(100);
        System.out.println("Access via subclass method: " + b.getSpeed());

        // This would cause a compile error if Main was in another package
        // Vehicle v = new Vehicle();
        // System.out.println(v.speed); 
    }
}`
        },
        {
            name: "default",
            icon: Package,
            description: "The code is only accessible in the same package. This is used when you don't specify a modifier.",
            class: "Visible",
            package: "Visible",
            subclass: "Hidden*",
            world: "Hidden",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            code: `class MyClass {
    String myAttribute = "I am default!"; // default member
}

public class Main {
    public static void main(String[] args){
        MyClass myObj = new MyClass();
        System.out.println(myObj.myAttribute); // accessible in same package
    }
}`
        },
        {
            name: "private",
            icon: Lock,
            description: "The code is only accessible within the declared class.",
            class: "Visible",
            package: "Hidden",
            subclass: "Hidden",
            world: "Hidden",
            color: "text-red-500",
            bgColor: "bg-red-500/10",
            code: `public class Main {
    private String myAttribute = "I am private!"; // private member

    public static void main(String[] args){
        Main myObj = new Main();
        System.out.println(myObj.myAttribute); // accessible within the same class

        // OtherClass other = new OtherClass();
        // System.out.println(other.myAttribute); // This would be an error
    }
}`
        }
    ];

    return (
        <div id="java-access-modifiers-page" data-test="java-access-modifiers-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Shield className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Access Modifiers</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Setting the visibility for your classes, methods, and attributes.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Access Modifiers?</CardTitle>
                    <CardDescription>
                        Access modifiers are keywords you use to control who can access your code. They are a fundamental part of **encapsulation**, one of the core principles of Object-Oriented Programming, by helping you hide sensitive data and control how your code is used.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Visibility Comparison</CardTitle>
                    <CardDescription>This table shows where members (attributes, methods, etc.) are visible based on their access modifier.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Modifier</TableHead>
                                <TableHead>Same Class</TableHead>
                                <TableHead>Same Package</TableHead>
                                <TableHead>Subclass (different package)</TableHead>
                                <TableHead>World (different package)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {modifiers.map(mod => (
                                <TableRow key={mod.name} className={mod.bgColor}>
                                    <TableCell className={`font-bold ${mod.color}`}>{mod.name}</TableCell>
                                    {[mod.class, mod.package, mod.subclass, mod.world].map((visibility, index) => (
                                        <TableCell key={index} className="text-center">
                                            {visibility.startsWith("Visible") ? 
                                                <Check className="w-5 h-5 text-green-600 mx-auto" /> : 
                                                <div className="flex items-center justify-center">
                                                    <X className="w-5 h-5 text-red-600 mx-auto" />
                                                    {visibility.includes('*') && <span className="text-xs ml-1">*</span>}
                                                </div>
                                            }
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-2">* A subclass in another package cannot access `default` members.</p>
                </CardContent>
            </Card>

            <div className="space-y-6">
                {modifiers.map(mod => (
                    <Card key={mod.name}>
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className={`p-3 rounded-full ${mod.bgColor}`}>
                                <mod.icon className={`w-6 h-6 ${mod.color}`} />
                            </div>
                            <div>
                                <CardTitle className={`text-2xl ${mod.color}`}>{mod.name}</CardTitle>
                                <CardDescription className="pt-1">{mod.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{mod.code}</pre>
                            </div>
                            <Button onClick={() => onOpenEditor(mod.code)} variant="ghost" size="sm" className="mt-2">
                                <Play className="mr-2 h-4 w-4" /> Try it
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Best Practice: Encapsulation
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">It's common practice to declare class attributes as `private` to restrict direct access from outside the class.</p>
                    <p className="text-muted-foreground mt-2">To allow other classes to read or modify these private attributes, you provide `public` "getter" and "setter" methods. This gives you more control over your data.</p>
                    <div className="bg-background border rounded-md p-4 mt-4">
                         <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`public class Person {
  private String name; // private attribute

  // Public "getter" method to access the name
  public String getName() {
    return name;
  }

  // Public "setter" method to change the name
  public void setName(String newName) {
    this.name = newName;
  }
}`}</pre>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
