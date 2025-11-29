'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Share2, CornerDownRight, Zap, CheckCircle, AlertCircle, ShieldCheck, HardHat, Car, Lightbulb } from 'lucide-react';
import React from 'react';

interface IocAndDiProps {
  onOpenEditor: (code: string) => void;
}

export default function IocAndDependencyInjection({ onOpenEditor }: IocAndDiProps) {

    const traditionalCode = `class Engine {
    // Engine details...
}

class Car {
    private Engine engine;

    public Car() {
        // The Car is responsible for creating its own Engine.
        // This is tight coupling.
        this.engine = new Engine(); 
    }
}`;

    const diCode = `// --- Dependencies ---
@Component
class Engine { ... }

@Component
class Transmission { ... }


// --- Dependent Class ---
@Component
class Car {
    private final Engine engine;
    private final Transmission transmission;

    // The dependencies are "injected" through the constructor.
    // The Car class doesn't know how to create them.
    @Autowired
    public Car(Engine engine, Transmission transmission) {
        this.engine = engine;
        this.transmission = transmission;
    }
}`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Share2 className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">IoC & Dependency Injection</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The design principles that make Spring so powerful and flexible.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Don't call us, we'll call you" Principle: Inversion of Control</CardTitle>
                    <CardDescription>IoC is a design principle where the control of object creation and management is transferred from your code to an external container or framework.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-muted p-4 rounded-lg border text-center">
                        <h3 className="font-semibold mb-2">Traditional Control Flow</h3>
                        <p className="text-sm text-muted-foreground mb-4">Your object creates and controls other objects.</p>
                        <div className="p-4 bg-background rounded-lg border-2 border-dashed">
                            <p className="font-bold">Your Main Program</p>
                            <CornerDownRight className="w-6 h-6 my-2 mx-auto" />
                            <p className="font-bold">Creates {'->'} Car Object</p>
                            <CornerDownRight className="w-6 h-6 my-2 mx-auto" />
                            <p className="font-bold">Creates {'->'} Engine Object</p>
                        </div>
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg border border-primary text-center">
                        <h3 className="font-semibold text-primary mb-2">Inversion of Control (IoC)</h3>
                        <p className="text-sm text-muted-foreground mb-4">The Spring Container creates and manages all objects for you.</p>
                        <div className="p-4 bg-background rounded-lg border-2 border-dashed border-primary">
                            <p className="font-bold text-primary">Spring IoC Container</p>
                            <div className="flex justify-around mt-4">
                                <div className="text-center">
                                    <CornerDownRight className="w-6 h-6 my-2 mx-auto" />
                                    <p className="font-bold">Creates {'->'} Car Object</p>
                                </div>
                                <div className="text-center">
                                    <CornerDownRight className="w-6 h-6 my-2 mx-auto" />
                                    <p className="font-bold">Creates {'->'} Engine Object</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Zap className="w-6 h-6 text-primary"/>Dependency Injection: How IoC is Implemented</CardTitle>
                    <CardDescription>Dependency Injection (DI) is the actual process of providing the dependencies (i.e., the other objects an object needs to work) to an object from an external source (the Spring container).</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-6 rounded-lg text-center border flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="text-center">
                            <p className="font-semibold">The Dependent</p>
                            <Car className="w-16 h-16 text-primary mx-auto my-2"/>
                            <p className="font-mono text-sm bg-background p-2 rounded-md">Car</p>
                        </div>
                         <div className="text-center">
                            <p className="font-semibold">Needs</p>
                         </div>
                         <div className="text-center">
                            <p className="font-semibold">The Dependency</p>
                            <HardHat className="w-16 h-16 text-secondary-foreground mx-auto my-2"/>
                            <p className="font-mono text-sm bg-background p-2 rounded-md">Engine</p>
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground mt-4">Instead of the `Car` building its own `Engine`, the Spring factory **injects** an `Engine` into the `Car`.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Types of Dependency Injection</CardTitle>
                    <CardDescription>There are three main ways Spring can inject dependencies.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/>1. Constructor Injection (Recommended)</h3>
                        <p className="text-sm text-muted-foreground mb-4">Dependencies are provided through the class constructor. This is the best approach because it ensures an object is created in a valid state with all its required dependencies.</p>
                        <div className="bg-muted p-2 rounded-md font-mono text-xs"><pre>{`@Autowired
public Car(Engine engine) { ... }`}</pre></div>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-yellow-500"/>2. Setter Injection</h3>
                        <p className="text-sm text-muted-foreground mb-4">Dependencies are provided through public "setter" methods. This is useful for optional dependencies that can be set after the object is created.</p>
                         <div className="bg-muted p-2 rounded-md font-mono text-xs"><pre>{`@Autowired
public void setEngine(Engine engine) { ... }`}</pre></div>
                    </div>
                     <div className="bg-background border p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-destructive"/>3. Field Injection (Not Recommended)</h3>
                        <p className="text-sm text-muted-foreground mb-4">Dependencies are injected directly into the field using reflection. This is discouraged because it makes the code harder to test and can hide dependencies.</p>
                         <div className="bg-muted p-2 rounded-md font-mono text-xs"><pre>@Autowired
private Engine engine;</pre></div>
                    </div>
                </CardContent>
            </Card>

             <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Key Benefits
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        <li>**Decoupling:** Reduces the dependency between classes, making your application more modular and easier to refactor.</li>
                        <li>**Easier Testing:** You can easily swap real dependencies with mock objects in your unit tests.</li>
                        <li>**Centralized Configuration:** The Spring container manages the wiring of your application, making it easier to configure and manage.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
