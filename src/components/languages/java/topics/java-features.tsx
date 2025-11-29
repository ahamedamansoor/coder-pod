
'use client';
import { Card } from '@/components/ui/card';
import { Puzzle, Package, Globe, Shield, Anchor, Cpu, Rabbit, Share2, Cloud, Layers, Rocket } from 'lucide-react';

export function JavaFeatures() {
    const features = [
      {
        icon: Puzzle,
        title: 'Simple',
        description: 'Java is easy to learn with a syntax based on C++, but simplified to remove complex features like pointers.'
      },
      {
        icon: Package,
        title: 'Object-Oriented',
        description: 'Everything in Java is an object, which helps in building modular and reusable code.'
      },
      {
        icon: Globe,
        title: 'Platform Independent',
        description: 'Java code is compiled into bytecode, which can run on any platform with a Java Virtual Machine (JVM). "Write Once, Run Anywhere".'
      },
      {
        icon: Shield,
        title: 'Secure',
        description: 'Java provides a secure environment with a Security Manager that defines access restrictions.'
      },
      {
        icon: Anchor,
        title: 'Robust',
        description: 'It is very reliable thanks to strong memory management and exception handling features.'
      },
      {
        icon: Cpu,
        title: 'Architecture-neutral',
        description: 'The compiled bytecode is not tied to any specific machine architecture, making it highly portable.'
      },
      {
        icon: Rabbit,
        title: 'High-performance',
        description: 'With the use of Just-In-Time (JIT) compilers, Java achieves high performance by compiling bytecode to native machine code at runtime.'
      },
      {
        icon: Share2,
        title: 'Multithreaded',
        description: 'Java supports multithreading, allowing a program to perform several tasks concurrently for better performance.'
      },
      {
        icon: Cloud,
        title: 'Distributed',
        description: 'It is designed for the distributed environment of the internet, making it suitable for network applications.'
      },
      {
        icon: Layers,
        title: 'Dynamic',
        description: 'Java can adapt to an evolving environment. It can carry extensive amounts of run-time information that can be used to verify and resolve accesses to objects on run-time.'
      }
    ];

    return (
        <div id="java-features-page" data-test="java-features-page" className="w-full space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Rocket className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Features of Java</h1>
                </div>
                <p className="text-muted-foreground text-lg">Why Java is one of the most popular programming languages.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
                        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                            <feature.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
