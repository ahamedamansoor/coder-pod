import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from './ui/card';
import { VenetianMask, History, Lightbulb, Rocket, Users, Tv, Smartphone, Globe, Briefcase, BrainCircuit, Gamepad2, Cloud, Network, Share2, CheckCircle2, Puzzle, Package, Shield, Anchor, Cpu, Rabbit, Layers, HardHat, PlayCircle, Library } from 'lucide-react';
  
export function TheStoryOfJava() {
    const principles = [
        { name: "Simple & Object-Oriented", description: "Easy to learn by removing C++ complexities, with a pure object-oriented approach." },
        { name: "Robust & Secure", description: "Strong memory management and built-in security features for reliability." },
        { name: "Architecture-Neutral & Portable", description: "Code compiles to bytecode that runs on any machine with a Java Virtual Machine (JVM)." },
        { name: "High Performance", description: "Just-In-Time (JIT) compilation converts bytecode into native machine code for speed." },
        { name: "Interpreted, Threaded, & Dynamic", description: "Bytecode is interpreted at runtime, supports multi-threading, and can adapt to changing environments." },
    ];
  
    const timeline = [
        { year: 1991, title: 'The "Green Project" Begins', description: 'James Gosling, Mike Sheridan, and Patrick Naughton start a project to create technology for smart consumer electronics.' },
        { year: 1992, title: 'Birth of "Oak"', description: 'The team develops a new language named "Oak" after a tree outside Gosling\'s office. It\'s designed to be simple and platform-independent.' },
        { year: 1995, title: 'Java is Born and Released', description: 'Sun Microsystems renames "Oak" to "Java" due to trademark issues. The first public version, Java 1.0, is released with the motto "Write Once, Run Anywhere".' },
        { year: 1996, title: 'First Major Conference', description: 'The first JavaOne conference is held, drawing thousands of developers and marking Java\'s arrival as a major programming language.' },
        { year: 2009, title: 'Oracle Acquires Sun', description: 'Oracle Corporation buys Sun Microsystems, taking ownership of Java and continuing its development.' },
        { year: 'Present', title: 'A Global Powerhouse', description: 'Java is now one of the world\'s most popular languages, powering everything from web applications and mobile apps to large-scale enterprise systems.' },
    ];
  
    return (
        <div className="space-y-12">
            <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <History className="w-12 h-12 text-primary" />
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">The Story of Java</h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    From a small project for smart devices to a global programming language.
                </p>
            </div>
  
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-3xl">
                        <Lightbulb className="w-8 h-8 text-primary" />
                        The Guiding Principles
                    </CardTitle>
                    <CardDescription>The core ideas that made Java a revolutionary language.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle) => (
                        <div key={principle.name} className="bg-muted p-6 rounded-lg hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-2 text-primary">{principle.name}</h3>
                            <p className="text-sm text-foreground/90">{principle.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
  
            <Card className="bg-muted/30 border-dashed">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-3xl">
                        <Rocket className="w-8 h-8 text-primary" />
                        Key Milestones
                    </CardTitle>
                    <CardDescription>A timeline of Java's journey.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative border-l-2 border-primary/20 ml-6 pl-8 space-y-10">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative flex items-start pl-6 gap-6">
                                <div className="absolute top-0 -left-[58px] bg-background p-2 rounded-full ring-4 ring-background">
                                    <div className="bg-primary text-primary-foreground w-14 h-14 flex items-center justify-center rounded-full font-bold text-lg">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                                    <p className="text-foreground/80 mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

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
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Rocket className="w-10 h-10 text-primary" />
                    <h2 className="text-4xl font-bold text-foreground">Features of Java</h2>
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

export function WhatIsJava() {
    const applications = [
        { name: 'Desktop GUI Applications', icon: Tv },
        { name: 'Mobile Applications (Android)', icon: Smartphone },
        { name: 'Web-based Applications', icon: Globe },
        { name: 'Enterprise Applications', icon: Briefcase },
        { name: 'Scientific Applications', icon: BrainCircuit },
        { name: 'Gaming Applications', icon: Gamepad2 },
        { name: 'Big Data Technologies', icon: Cloud },
        { name: 'IoT Applications', icon: Network },
        { name: 'Distributed Applications', icon: Share2 },
        { name: 'Cloud-based Applications', icon: Cloud },
    ];

    return (
        <div className="space-y-12">
            <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <VenetianMask className="w-12 h-12 text-primary" />
                    <h1 className="text-5xl font-bold tracking-tight text-foreground">What is Java?</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A high-level, versatile, and object-oriented programming language designed for building robust, secure, and cross-platform applications.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-3xl">
                        <Users className="w-8 h-8 text-primary" />
                        Where is Java Used?
                    </CardTitle>
                    <CardDescription>Java's versatility makes it a popular choice across many domains.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {applications.map((app) => (
                        <div key={app.name} className="flex flex-col items-center text-center p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                            <div className="p-3 bg-primary/10 text-primary rounded-full mb-3">
                                <app.icon className="w-7 h-7" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{app.name}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}


export function JdkJreJvm() {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Layers className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold tracking-tight text-foreground">JDK vs JRE vs JVM</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the core components that compile, run, and execute your Java code.
          </p>
        </div>
  
        <div className="relative p-8 md:p-12">
            {/* JVM */}
            <div className="relative z-10 w-full md:w-3/5 mx-auto">
                <Card className="shadow-lg border-2 border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <PlayCircle className="w-8 h-8 text-primary"/>
                            JVM: Java Virtual Machine
                        </CardTitle>
                        <CardDescription>The Execution Engine</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-foreground/90">The JVM is the heart of Java. It's an abstract machine that provides a runtime environment to execute Java bytecode. It's what makes "Write Once, Run Anywhere" possible.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Manages memory and garbage collection.</li>
                            <li>Converts bytecode into native machine code.</li>
                            <li>Is platform-dependent (you need a different JVM for Windows, Mac, Linux).</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* JRE */}
            <div className="relative z-0 -mt-8 w-full md:w-4/5 mx-auto">
                <Card className="shadow-xl border-2 border-secondary/50 pt-16">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Library className="w-8 h-8 text-secondary-foreground"/>
                            JRE: Java Runtime Environment
                        </CardTitle>
                        <CardDescription>The Running Environment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-foreground/90">The JRE contains everything needed to <span className="font-bold">run</span> a compiled Java program. If you only want to execute Java applications, this is all you need.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Includes the <span className="font-semibold text-primary">JVM</span>.</li>
                            <li>Provides the core Java libraries (like `java.lang`, `java.util`, etc.).</li>
                            <li>Does NOT contain tools for development (like compilers or debuggers).</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
            
            {/* JDK */}
             <div className="relative z-[-1] -mt-8 w-full mx-auto">
                <Card className="shadow-2xl border-2 border-muted-foreground/30 pt-16">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <HardHat className="w-8 h-8 text-muted-foreground"/>
                            JDK: Java Development Kit
                        </CardTitle>
                        <CardDescription>The Development Toolkit</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-foreground/90">The JDK is the full-featured toolkit for Java developers. It contains everything you need to <span className="font-bold">write, compile, and run</span> Java applications.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Includes the entire <span className="font-semibold text-secondary-foreground">JRE</span>.</li>
                            <li>Provides development tools: the compiler (`javac`), debugger (`jdb`), and archiver (`jar`).</li>
                            <li>If you want to code in Java, you need the JDK.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>In a Nutshell</CardTitle>
                <CardDescription>
                    The relationship is simple: JDK contains JRE, and JRE contains JVM.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center font-semibold text-lg">
                <div className="p-4 bg-muted rounded-md">
                    JDK (to Develop)  ⊃  JRE (to Run)  ⊃  JVM (to Execute)
                </div>
            </CardContent>
        </Card>
      </div>
    );
  }

    