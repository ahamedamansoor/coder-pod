
'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from './ui/card';
import { VenetianMask, History, Lightbulb, Rocket, Users, Tv, Smartphone, Globe, Briefcase, BrainCircuit, Gamepad2, Cloud, Network, Share2, CheckCircle2, Puzzle, Package, Shield, Anchor, Cpu, Rabbit, Layers, HardHat, PlayCircle, Library, Milestone, Download, Settings, FileCode, Route, HandMetal, Code, Play, Workflow, ArrowBigRight, File, Binary, Laptop, MessageSquare, Book, DraftingCompass, GitCommitHorizontal, Braces, PencilRuler, Variable, Box, Link2, ArrowRight, CornerDownLeft, Combine, Asterisk, Pin, Award, BadgeHelp, Plus, Minus, X, Divide, Percent, Equal, PlusSquare, Scale, Sigma, GitCompareArrows, ChevronsRight, FunctionSquare, Keyboard, Import, FileQuestion, Waypoints, Repeat, Ban, Code2, SquareStack, ListTree, Repeat1, Search, AppWindow, ShieldQuestion, KeySquare, Lock, Eye, Users2, PackageCheck, Group, ArrowLeftRight, Shapes, Atom, Type, Brackets, SquareFunction, Hourglass, Calendar, Hash, Sailboat, ScrollText, FileSignature, Regex, GitFork, Brain, FileCog } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import React from 'react';
  
function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

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
        <div id="history-of-java-page" data-test="history-of-java-page" className="w-full space-y-12">
            <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <History className="w-12 h-12 text-primary" />
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">The Story of Java</h1>
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
        <div id="what-is-java-page" data-test="what-is-java-page" className="w-full space-y-12">
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
      <div id="jdk-jre-jvm-page" data-test="jdk-jre-jvm-page" className="w-full space-y-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Layers className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">JDK vs JRE vs JVM</h1>
          </div>
          <p className="text-muted-foreground text-lg">Understanding the core components that compile, run, and execute your Java code.</p>
        </div>
  
        <div className="border-2 border-border bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <HardHat className="w-6 h-6 text-foreground"/>
                <div>
                    <h2 className="text-2xl font-bold text-foreground">JDK: Java Development Kit</h2>
                    <p className="text-muted-foreground text-sm">The Development Toolkit</p>
                </div>
            </div>
            <p className="text-foreground/90 mb-4 pl-9 text-sm">The JDK is the full-featured toolkit for Java developers. It contains everything you need to <span className="font-semibold">write, compile, and run</span> Java applications.</p>
            <ul className="list-disc pl-14 text-sm space-y-1 text-foreground/80 mb-4">
                <li>Includes the entire <span className="font-semibold text-secondary-foreground">JRE</span>.</li>
                <li>Provides development tools: the compiler (`javac`), debugger (`jdb`), and archiver (`jar`).</li>
                <li>If you want to code in Java, you need the JDK.</li>
            </ul>

            <div className="border-2 border-secondary/50 bg-secondary/10 rounded-lg p-6 ml-6">
                <div className="flex items-center gap-3 mb-2">
                    <Library className="w-6 h-6 text-secondary-foreground"/>
                    <div>
                        <h3 className="text-xl font-bold text-secondary-foreground">JRE: Java Runtime Environment</h3>
                        <p className="text-muted-foreground text-sm">The Running Environment</p>                    </div>
                </div>
                <p className="text-foreground/90 mb-4 pl-9 text-sm">The JRE contains everything needed to <span className="font-semibold">run</span> a compiled Java program. If you only want to execute Java applications, this is all you need.</p>
                <ul className="list-disc pl-14 text-sm space-y-1 text-foreground/80 mb-4">
                    <li>Includes the <span className="font-semibold text-primary">JVM</span>.</li>
                    <li>Provides the core Java libraries (like `java.lang`, `java.util`, etc.).</li>
                    <li>Does NOT contain tools for development (like compilers or debuggers).</li>
                </ul>

                <div className="border-2 border-primary/50 bg-primary/10 rounded-lg p-6 ml-6">
                    <div className="flex items-center gap-3 mb-2">
                        <PlayCircle className="w-6 h-6 text-primary"/>
                        <div>
                            <h4 className="text-lg font-bold text-primary">JVM: Java Virtual Machine</h4>
                            <p className="text-muted-foreground text-sm">The Execution Engine</p>
                        </div>
                    </div>
                    <p className="text-foreground/90 mb-4 pl-9 text-sm">The JVM is the heart of Java. It's an abstract machine that provides a runtime environment to execute Java bytecode. It's what makes "Write Once, Run Anywhere" possible.</p>
                    <ul className="list-disc pl-14 text-sm space-y-1 text-foreground/80">
                        <li>Manages memory and garbage collection.</li>
                        <li>Converts bytecode into native machine code.</li>
                        <li>Is platform-dependent (you need a different JVM for Windows, Mac, Linux).</li>
                    </ul>
                </div>
            </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Milestone className="w-6 h-6 text-primary" />
                    In a Nutshell...
                </CardTitle>
                <CardDescription>JDK is the toolbox, JRE provides the power, and JVM is the engine.</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold text-foreground">You write code with the JDK.</h3>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold text-secondary-foreground">The JRE provides the libraries to run it.</h3>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold text-primary">The JVM executes it.</h3>
                </div>
            </CardContent>
        </Card>

      </div>
    );
  }

export function JavaEnvironmentSetup() {
    const ides = [
      { name: "Visual Studio Code", logo: "vscode.svg", link: "https://code.visualstudio.com/", description: "A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity)." },
      { name: "IntelliJ IDEA", logo: "intellij.svg", link: "https://www.jetbrains.com/idea/", description: "An integrated development environment written in Java for developing computer software. It is developed by JetBrains, and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition." },
      { name: "Eclipse", logo: "eclipse.svg", link: "https://www.eclipse.org/", description: "An integrated development environment used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment. Eclipse is written mostly in Java and its primary use is for developing Java applications, but it may also be used to develop applications in other programming languages via plug-ins." },
    ];

    return (
        <div id="java-environment-setup-page" data-test="java-environment-setup-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Settings className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Setting Up Your Java Environment</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Let's get your machine ready to code in Java. It's a three-step process.</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <Download className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Step 1: Install the Java Development Kit (JDK)</CardTitle>
                            <CardDescription>The JDK provides the compiler and tools to create Java applications.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 pl-16">
                    <p>We recommend installing the latest Long-Term Support (LTS) version of Java. As of now, that's <strong>Java 21</strong>.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Card className="h-full hover:border-primary transition-colors">
                                <CardHeader className="flex-row items-center gap-4">
                                    <img src="https://img.icons8.com/color/48/oracle-logo.png" alt="Oracle Logo" className="w-8 h-8"/>
                                    <div>
                                        <CardTitle className="text-lg">Oracle JDK</CardTitle>
                                        <CardDescription>Official JDK from Oracle.</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                        <Link href="https://adoptium.net/temurin/releases/" target="_blank" rel="noopener noreferrer" className="flex-1">
                           <Card className="h-full hover:border-primary transition-colors">
                                <CardHeader className="flex-row items-center gap-4">
                                    <img src="https://adoptium.net/images/adoptium-logo-dark.svg" alt="Adoptium Logo" className="w-8 h-8"/>
                                    <div>
                                        <CardTitle className="text-lg">Eclipse Temurin (OpenJDK)</CardTitle>
                                        <CardDescription>A popular, open-source alternative.</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                    <div className="pt-4">
                        <h3 className="font-semibold text-foreground mb-2">Verify your installation:</h3>
                        <p className="text-sm text-muted-foreground mb-2">Once installed, open your terminal or command prompt and type the following command. You should see information about the installed Java version.</p>
                        <div className="bg-muted rounded-md p-4">
                            <code className="font-mono text-sm">java -version</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <Route className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Step 2: Set the PATH Environment Variable</CardTitle>
                            <CardDescription>Help your computer find the Java commands from anywhere.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 pl-16">
                    <div>
                        <h3 className="font-semibold text-foreground mb-2">Why is this important?</h3>
                        <p className="text-sm text-muted-foreground">Setting the PATH allows you to run Java commands like <code className="font-mono bg-muted p-1 rounded">javac</code> (compiler) and <code className="font-mono bg-muted p-1 rounded">java</code> (launcher) from any folder in your terminal. Without it, you'd have to type the full, long path to their location every single time.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-2">How to do it (The short version):</h3>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                            <li>Find the `bin` directory of your JDK installation (e.g., `C:\Program Files\Java\jdk-21\bin`).</li>
                            <li>Copy this full path.</li>
                            <li>Search for "Environment Variables" in your system settings.</li>
                            <li>Find the `Path` variable under "System variables" and choose to edit it.</li>
                            <li>Add the copied `bin` path as a new entry and save your changes.</li>
                        </ol>
                    </div>
                     <p className="text-xs text-muted-foreground pt-2">Note: The exact steps can vary slightly between Windows, macOS, and Linux. A quick search for "how to set java path" for your specific operating system will provide detailed guides.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <FileCode className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Step 3: Choose an Integrated Development Environment (IDE)</CardTitle>
                            <CardDescription>An IDE is a code editor with powerful features like debugging and auto-completion.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 pl-16">
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ides.map((ide) => (
                           <Link key={ide.name} href={ide.link} target="_blank" rel="noopener noreferrer">
                            <Card className="h-full hover:border-primary transition-colors flex flex-col">
                                <CardHeader className="items-center">
                                    <CardTitle>{ide.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground">{ide.description}</p>
                                </CardContent>
                            </Card>
                           </Link>
                        ))}
                    </div>
                     <p className="text-sm text-muted-foreground text-center pt-4">For beginners, we recommend starting with <strong>Visual Studio Code</strong> with the "Extension Pack for Java".</p>
                </CardContent>
            </Card>
            
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardHeader className="flex-row items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600"/>
                    <div>
                        <CardTitle className="text-green-800 dark:text-green-300">You're All Set!</CardTitle>
                        <CardDescription className="text-green-700 dark:text-green-400">Once you have the JDK and an IDE, you're ready to write your first Java program.</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}

export function FirstJavaProgram({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const helloWorldCode = 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}';
    
    const codeBreakdown = [
        { part: 'public class Main', explanation: 'This defines a class named `Main`. In Java, every application must contain at least one class definition. The `public` keyword means it is accessible by anyone.' },
        { part: 'public static void main(String[] args)', explanation: 'This is the main method, the entry point of any Java application. It\'s what gets executed when you run your program.' },
        { part: 'System.out.println("Hello, World!");', explanation: 'This is the statement that prints the text "Hello, World!" to the console, followed by a new line.' },
        { part: '{ }', explanation: 'Curly braces are used to group blocks of code together, defining the scope of classes and methods.' },
    ];

    return (
        <div id="first-java-program-page" data-test="first-java-program-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <HandMetal className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Hello World</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Let's write the traditional "Hello, World!" program. It's a rite of passage for every programmer!</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Code className="w-6 h-6 text-primary" />
                        The "Hello, World!" Code
                    </CardTitle>
                    <CardDescription>This is what the simplest Java program looks like.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{helloWorldCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(helloWorldCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Code Editor
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Puzzle className="w-6 h-6 text-primary" />
                        Breaking It Down
                    </CardTitle>
                    <CardDescription>Let's look at what each piece of the code does.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {codeBreakdown.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                               <CheckCircle2 className="w-5 h-5"/>
                            </div>
                            <div>
                                <code className="font-mono text-sm font-semibold bg-muted p-1 rounded">{item.part}</code>
                                <p className="text-muted-foreground text-sm mt-1">{item.explanation}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="flex-row items-center gap-4">
                    <Rocket className="w-8 h-8 text-primary"/>
                    <div>
                        <CardTitle className="text-primary">You've Done It!</CardTitle>
                        <CardDescription className="text-primary/80">You've just seen the fundamental structure of a Java program. Click the button above to run it yourself in our code editor!</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}

export function HowJavaWorks() {
    const steps = [
      {
        icon: File,
        title: "1. Writing the Code",
        description: "You write your program in a text file with a `.java` extension, like `MyProgram.java`. This is human-readable source code.",
        color: "text-blue-500",
        bgColor: "bg-blue-50"
      },
      {
        icon: HardHat,
        title: "2. Compilation",
        description: "You use the Java Compiler (`javac`) from the JDK to translate your `.java` file into a new file called `.class`. This new file contains Java bytecode.",
        color: "text-orange-500",
        bgColor: "bg-orange-50"
      },
      {
        icon: Binary,
        title: "3. Bytecode - The Magic Ingredient",
        description: "Bytecode is a special, intermediate language that is not tied to any specific computer. It's the secret to Java's 'Write Once, Run Anywhere' promise.",
        color: "text-purple-500",
        bgColor: "bg-purple-50"
      },
      {
        icon: Laptop,
        title: "4. Execution",
        description: "The Java Virtual Machine (JVM) on your computer reads and interprets the bytecode. The JVM translates the bytecode into native machine code that your computer's processor can execute, running your program.",
        color: "text-green-500",
        bgColor: "bg-green-50"
      },
    ];
  
    return (
      <div id="how-java-works-page" data-test="how-java-works-page" className="w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Workflow className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Compilation, Bytecode, & Execution</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">From your code to a running program in four simple steps.</p>
        </div>
  
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:items-stretch md:space-x-4">
            {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full md:w-auto">
                <Card className="flex-1 hover:shadow-xl transition-shadow border-2">
                    <CardHeader className="text-center">
                    <div className={`mx-auto p-4 rounded-full w-fit ${step.bgColor}`}>
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <CardTitle className="pt-2">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-sm text-center text-muted-foreground">{step.description}</p>
                    </CardContent>
                </Card>

                {index < steps.length - 1 && (
                    <ArrowBigRight className="w-8 h-8 text-muted-foreground mx-4 hidden md:block" />
                )}
                 {index < steps.length - 1 && (
                    <ArrowBigRight className="w-8 h-8 text-muted-foreground my-4 rotate-90 md:hidden" />
                )}
            </div>
            ))}
        </div>

        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Key Takeaway
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/90">Java code doesn't run directly on your computer. It runs on a <strong className="text-primary">Java Virtual Machine (JVM)</strong>. This is why you can write your code once on a Mac and have it run perfectly on a Windows or Linux machine without any changes, as long as they have the JVM installed.</p>
            </CardContent>
        </Card>
      </div>
    );
}
    
export function JavaComments({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const commentTypes = [
      {
        name: "Single-Line Comment",
        syntax: "// This is a single-line comment",
        description: "Starts with `//`. Anything after `//` on the same line is ignored by the compiler. It's perfect for short explanations or quick notes.",
        example: `// Calculate the sum of two numbers\nint sum = 5 + 10; // Adds 5 and 10 together\nSystem.out.println(sum);`,
        icon: MessageSquare
      },
      {
        name: "Multi-Line Comment",
        syntax: "/* ... */",
        description: "Starts with `/*` and ends with `*/`. You can write multiple lines of comments between them. Ideal for longer explanations or temporarily disabling a block of code.",
        example: `/*\n  This code calculates the area of a rectangle.\n  It takes width and height as input\n  and returns the calculated area.\n*/\nint width = 10;\nint height = 5;\nint area = width * height;\nSystem.out.println("Area: " + area);`,
        icon: Book
      },
      {
        name: "Documentation Comment (Javadoc)",
        syntax: "/** ... */",
        description: "Starts with `/**` and ends with `*/`. This is a special type of comment used to generate official API documentation for your code. It's used to describe classes, methods, and variables.",
        example: `/**\n * The main method to run this example program.\n * @param args Command line arguments (not used).\n */\n// This is the main function, so the Javadoc comment would typically be on a class or method.\n// For demonstration, we'll just print a message.\nSystem.out.println("Javadoc comments are for documentation!");`,
        icon: DraftingCompass
      }
    ];
  
    return (
      <div id="java-comments-page" data-test="java-comments-page" className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <MessageSquare className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Comments in Java</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Leaving notes for yourself and others in your code.</p>
        </div>
  
        <Card>
            <CardHeader>
                <CardTitle>Why Use Comments?</CardTitle>
                <CardDescription>Comments are ignored by the computer but are crucial for humans.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p>✓ <strong>Explain Code:</strong> Clarify what your code does, especially the complex parts.</p>
                <p>✓ <strong>Make Code Readable:</strong> Help other developers (and your future self!) understand your logic.</p>
                <p>✓ <strong>Temporarily Disable Code:</strong> "Comment out" lines of code to prevent them from running without deleting them.</p>
            </CardContent>
        </Card>

        <div className="space-y-6">
            {commentTypes.map((comment) => (
                <Card key={comment.name} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <comment.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-2xl">{comment.name}</CardTitle>
                        </div>
                        <CardDescription>{comment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{comment.example}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(comment.example))} variant="ghost" size="sm" className="mt-2">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>

        <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
            <CardHeader className="flex-row items-center gap-4">
                <Lightbulb className="w-8 h-8 text-yellow-600"/>
                <div>
                    <CardTitle className="text-yellow-800 dark:text-yellow-300">Best Practice</CardTitle>
                    <CardDescription className="text-yellow-700 dark:text-yellow-400">
                        Write comments to explain <em>why</em> your code is doing something, not just <em>what</em> it is doing. Good code should be self-explanatory about what it does.
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
      </div>
    );
  }

export function JavaEscapeSequences({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const sequences = [
      {
        name: "New Line",
        sequence: "\\n",
        description: "Moves the cursor to the beginning of the next line.",
        example: 'System.out.println("Hello\\nWorld!");',
        output: 'Hello\nWorld!',
        icon: CornerDownLeft,
      },
      {
        name: "Tab",
        sequence: "\\t",
        description: "Inserts a horizontal tab space.",
        example: 'System.out.println("Column 1\\tColumn 2");',
        output: 'Column 1\tColumn 2',
        icon: ArrowRight,
      },
      {
        name: "Double Quote",
        sequence: '\\"',
        description: "Allows you to include a double quote character inside a string literal.",
        example: 'System.out.println("She said, \\"Hello!\\"");',
        output: 'She said, "Hello!"',
        icon: Combine,
      },
      {
        name: "Backslash",
        sequence: "\\\\",
        description: "Allows you to include a backslash character itself.",
        example: 'System.out.println("The path is C:\\\\Users\\\\John");',
        output: 'The path is C:\\Users\\John',
        icon: Asterisk,
      },
    ];

    return (
        <div id="java-escape-sequences-page" data-test="java-escape-sequences-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Combine className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Escape Sequences</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Special characters that control how your text is formatted.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are they?</CardTitle>
                    <CardDescription>
                        An escape sequence is a character that starts with a backslash (`\`) and is followed by another character. Java uses them inside `String` literals to represent special characters that would otherwise be difficult or impossible to type directly.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                {sequences.map((seq) => (
                    <Card key={seq.name} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <seq.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">{seq.name}</CardTitle>
                                    <p className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block">{seq.sequence}</p>
                                </div>
                            </div>
                            <CardDescription className="pt-2">{seq.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                                    <div className="bg-muted rounded-md p-4">
                                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{seq.example}</pre>
                                    </div>
                                    <Button onClick={() => onOpenEditor(wrapInMain(seq.example))} variant="ghost" size="sm" className="mt-2">
                                        <Play className="mr-2 h-4 w-4" /> Try it
                                    </Button>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Resulting Output:</h4>
                                    <div className="bg-foreground/5 rounded-md p-4">
                                        <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{seq.output}</pre>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export function JavaConstants({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const codeExample = {
      correct: 'final int WEEKS_IN_YEAR = 52;\nSystem.out.println("Weeks in a year: " + WEEKS_IN_YEAR);',
      incorrect: 'final int WEEKS_IN_YEAR = 52;\nWEEKS_IN_YEAR = 53; // This will cause a compilation error!',
    };
  
    return (
      <div id="java-constants-page" data-test="java-constants-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Pin className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Constants</h1>
          </div>
          <p className="text-muted-foreground text-lg">Creating variables with unchangeable values.</p>
        </div>
  
        <Card>
          <CardHeader>
            <CardTitle>What is a Constant?</CardTitle>
            <CardDescription>
              A constant is a variable whose value cannot be changed once it has been assigned. In Java, you create a constant by using the `final` keyword.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How to Declare a Constant:</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                final type VARIABLE_NAME = value;
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Naming Convention:</h3>
              <p className="text-sm text-muted-foreground">It is a common convention to write constant names in all uppercase letters with underscores separating words (e.g., `MAX_SIZE`). This makes them easy to identify in the code.</p>
            </div>
          </CardContent>
        </Card>
  
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle>Example in Action</CardTitle>
                <CardDescription>Here is how you declare and use a constant.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-2">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{codeExample.correct}</pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(codeExample.correct))} variant="ghost" size="sm">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                    <BadgeHelp className="w-6 h-6"/>
                    What Happens If You Try to Change It?
                </CardTitle>
                <CardDescription>If you try to assign a new value to a `final` variable after it has been initialized, the compiler will give you an error.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-card rounded-md p-4 mb-2">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{codeExample.incorrect}</pre>
                </div>
                 <Button onClick={() => onOpenEditor(wrapInMain(codeExample.incorrect))} variant="ghost" size="sm">
                    <Play className="mr-2 h-4 w-4" /> Try it & See the Error
                </Button>
            </CardContent>
        </Card>
      </div>
    );
  }
  
  export function JavaLiterals({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const literalTypes = [
      {
        name: "Integer Literals",
        description: "Represents whole numbers. Can be decimal (base 10), hexadecimal (base 16, prefix `0x`), or binary (base 2, prefix `0b`).",
        example: "int decimal = 100;\nint hex = 0x64;\nint binary = 0b1100100;\nSystem.out.println(decimal);",
      },
      {
        name: "Floating-Point Literals",
        description: "Represents numbers with fractional parts. By default, they are of type `double`. Add an `f` or `F` for `float`.",
        example: "double pi = 3.14159;\nfloat price = 19.99f;\nSystem.out.println(price);",
      },
      {
        name: "Character Literals",
        description: "Represents a single character and is enclosed in single quotes.",
        example: "char grade = 'A';\nchar symbol = '$';\nSystem.out.println(grade);",
      },
      {
        name: "String Literals",
        description: "Represents a sequence of characters and is enclosed in double quotes.",
        example: 'String greeting = "Hello, Java!";\nSystem.out.println(greeting);',
      },
      {
        name: "Boolean Literals",
        description: "Represents a truth value. It can only be `true` or `false`.",
        example: "boolean isLoggedIn = true;\nboolean isComplete = false;\nSystem.out.println(isLoggedIn);",
      },
      {
        name: "Null Literal",
        description: "Represents a null reference, meaning the variable does not point to any object.",
        example: "String name = null;\nSystem.out.println(name);",
      },
    ];
  
    return (
      <div id="java-literals-page" data-test="java-literals-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Award className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Literals</h1>
          </div>
          <p className="text-muted-foreground text-lg">The fixed values you assign to your variables.</p>
        </div>
  
        <Card>
            <CardHeader>
                <CardTitle>What is a Literal?</CardTitle>
                <CardDescription>
                    In programming, a literal is a source code representation of a fixed value. It's the actual data you're assigning to a variable. For example, in `int x = 10;`, the `10` is the literal.
                </CardDescription>
            </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {literalTypes.map((literal) => (
                <Card key={literal.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle>{literal.name}</CardTitle>
                        <CardDescription>{literal.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{literal.example}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(literal.example))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    );
  }
export function JavaArithmeticOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "+", name: "Addition", example: "int sum = 10 + 5;", output: "15" },
        { op: "-", name: "Subtraction", example: "int diff = 10 - 5;", output: "5" },
        { op: "*", name: "Multiplication", example: "int prod = 10 * 5;", output: "50" },
        { op: "/", name: "Division", example: "int quot = 10 / 5;", output: "2" },
        { op: "%", name: "Modulus (Remainder)", example: "int rem = 10 % 3;", output: "1" },
        { op: "++", name: "Increment", example: "int i = 5; i++;", output: "i will be 6" },
        { op: "--", name: "Decrement", example: "int i = 5; i--;", output: "i will be 4" },
      ];

  return (
    <div id="java-arithmetic-operators-page" data-test="java-arithmetic-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <PlusSquare className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Arithmetic Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to perform common mathematical operations.</p>
      </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Operator</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Example</TableHead>
                   <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map(op => (
                  <TableRow key={op.op}>
                    <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                    <TableCell>{op.name}</TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                    </TableCell>
                     <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(`${op.example}\nSystem.out.println(${op.example.match(/(\w+)\s*=/)?.[1] || 'i'});`))} variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}

export function JavaAssignmentOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "=", name: "Assign", example: "int x = 10;", output: "x is 10" },
        { op: "+=", name: "Add and assign", example: "int x = 10; x += 5;", output: "x is 15" },
        { op: "-=", name: "Subtract and assign", example: "int x = 10; x -= 5;", output: "x is 5" },
        { op: "*=", name: "Multiply and assign", example: "int x = 10; x *= 5;", output: "x is 50" },
        { op: "/=", name: "Divide and assign", example: "int x = 10; x /= 5;", output: "x is 2" },
        { op: "%=", name: "Modulus and assign", example: "int x = 10; x %= 3;", output: "x is 1" },
      ];

  return (
    <div id="java-assignment-operators-page" data-test="java-assignment-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Equal className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Assignment Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to assign values to variables.</p>
      </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Operator</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map(op => (
                  <TableRow key={op.op}>
                    <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                    <TableCell>{op.name}</TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                    </TableCell>
                     <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(`${op.example}\nSystem.out.println(x);`))} variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}

export function JavaComparisonOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "==", name: "Equal to", example: "10 == 5", output: "false" },
        { op: "!=", name: "Not equal to", example: "10 != 5", output: "true" },
        { op: ">", name: "Greater than", example: "10 > 5", output: "true" },
        { op: "<", name: "Less than", example: "10 < 5", output: "false" },
        { op: ">=", name: "Greater than or equal to", example: "10 >= 10", output: "true" },
        { op: "<=", name: "Less than or equal to", example: "10 <= 5", output: "false" },
      ];

  return (
    <div id="java-comparison-operators-page" data-test="java-comparison-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Scale className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Comparison Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to compare two values, returns a boolean (`true` or `false`).</p>
      </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Operator</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Example</TableHead>
                   <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map(op => (
                  <TableRow key={op.op}>
                    <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                    <TableCell>{op.name}</TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                    </TableCell>
                     <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(`System.out.println(${op.example});`))} variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}

export function JavaLogicalOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "&&", name: "Logical AND", description: "Returns `true` if both statements are true.", example: "int x = 5;\nSystem.out.println(x > 3 && x < 10);", output: "true" },
        { op: "||", name: "Logical OR", description: "Returns `true` if one of the statements is true.", example: "int x = 5;\nSystem.out.println(x > 3 || x < 4);", output: "true" },
        { op: "!", name: "Logical NOT", description: "Reverse the result, returns `false` if the result is true.", example: "int x = 5;\nSystem.out.println(!(x > 3 && x < 10));", output: "false" },
      ];

  return (
    <div id="java-logical-operators-page" data-test="java-logical-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <GitCompareArrows className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Logical Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to determine the logic between variables or values.</p>
      </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Operator</TableHead>
                  <TableHead>Name & Description</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map(op => (
                  <TableRow key={op.op}>
                    <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                    <TableCell>
                        <p className="font-semibold">{op.name}</p>
                        <p className="text-xs text-muted-foreground">{op.description}</p>
                    </TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                    </TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(op.example))} variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}

export function JavaBitwiseOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const operators = [
    { op: "&", name: "Bitwise AND", example: "int result = 5 & 3; // 0101 & 0011", output: "1" },
    { op: "|", name: "Bitwise OR", example: "int result = 5 | 3; // 0101 | 0011", output: "7" },
    { op: "^", name: "Bitwise XOR", example: "int result = 5 ^ 3; // 0101 ^ 0011", output: "6" },
    { op: "~", name: "Bitwise NOT (Complement)", example: "int result = ~5; // ~0101", output: "-6" },
    { op: "<<", name: "Left Shift", example: "int result = 5 << 1; // 0101 << 1", output: "10" },
    { op: ">>", name: "Right Shift", example: "int result = 5 >> 1; // 0101 >> 1", output: "2" },
    { op: ">>>", name: "Unsigned Right Shift", example: "int result = -5 >>> 1;", output: "2147483645" },
  ];

  return (
    <div id="java-bitwise-operators-page" data-test="java-bitwise-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <ChevronsRight className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Bitwise Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Perform operations on individual bits of integer types.</p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Understanding Bits</CardTitle>
            <CardDescription>
                Bitwise operators work on `int` and `long` data types at the binary level. For example, the number 5 is represented in binary as `0101`, and 3 is `0011`.
            </CardDescription>
        </CardHeader>
        <CardContent>
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Operator</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Example</TableHead>
                <TableHead>Output</TableHead>
                <TableHead className="text-right">Try it</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {operators.map(op => (
                <TableRow key={op.op}>
                <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                <TableCell>{op.name}</TableCell>
                <TableCell>
                    <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                </TableCell>
                <TableCell>
                    <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                </TableCell>
                <TableCell className="text-right">
                    <Button onClick={() => onOpenEditor(wrapInMain(`${op.example}\nSystem.out.println(result);`))} variant="ghost" size="icon">
                    <Play className="h-4 w-4" />
                    </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function JavaTernaryOperator({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const example = "int time = 20;\nString result = (time < 18) ? \"Good day.\" : \"Good evening.\";\nSystem.out.println(result);";
    const output = "Good evening.";

  return (
    <div id="java-ternary-operator-page" data-test="java-ternary-operator-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <FunctionSquare className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Ternary Operator</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A shorthand for an if-else statement.</p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Syntax</CardTitle>
            <CardDescription>
                The ternary operator consists of a condition, a value to return if the condition is true, and a value to return if it's false.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <pre className="font-mono text-sm bg-muted p-4 rounded-md"><code>variable = (condition) ? valueIfTrue : valueIfFalse;</code></pre>
        </CardContent>
      </Card>

      <Card>
          <CardHeader>
              <CardTitle>Example</CardTitle>
          </CardHeader>
          <CardContent>
                <div>
                    <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(example))} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-2 mt-4">Resulting Output:</h4>
                    <div className="bg-foreground/5 rounded-md p-4">
                        <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{output}</pre>
                    </div>
                </div>
          </CardContent>
      </Card>
    </div>
  );
}

export function JavaOperatorPrecedence({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const precedenceTable = [
    { level: 1, operators: "() [] .", name: "Parentheses, Array Subscript, Member Selection" },
    { level: 2, operators: "++ -- ! ~", name: "Unary (pre-increment, pre-decrement), Logical NOT, Bitwise Complement" },
    { level: 3, operators: "* / %", name: "Multiplication, Division, Modulus" },
    { level: 4, operators: "+ -", name: "Addition, Subtraction" },
    { level: 5, operators: "<< >> >>>", name: "Bitwise Shift" },
    { level: 6, operators: "< > <= >=", name: "Relational" },
    { level: 7, operators: "== !=", name: "Equality" },
    { level: 8, operators: "&", name: "Bitwise AND" },
    { level: 9, operators: "^", name: "Bitwise XOR" },
    { level: 10, operators: "|", name: "Bitwise OR" },
    { level: 11, operators: "&&", name: "Logical AND" },
    { level: 12, operators: "||", name: "Logical OR" },
    { level: 13, operators: "?:", name: "Ternary" },
    { level: 14, operators: "= += -= *= /= %= &= ^= |= <<= >>= >>>=", name: "Assignment" },
  ];

  const example1 = "int result1 = 10 + 20 * 30;";
  const output1 = "610";
  const example2 = "int result2 = (10 + 20) * 30;";
  const output2 = "900";


  return (
    <div id="java-operator-precedence-page" data-test="java-operator-precedence-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sigma className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Operator Precedence</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The order in which operators are evaluated in Java.</p>
      </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Example</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground mb-2">Multiplication (`*`) has higher precedence than addition (`+`).</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example1}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(`${example1}\nSystem.out.println(result1);`))} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                    <p className="text-sm font-semibold mt-2">Output: {output1}</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground mb-2">Parentheses `()` have the highest precedence.</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example2}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(`${example2}\nSystem.out.println(result2);`))} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                    <p className="text-sm font-semibold mt-2">Output: {output2}</p>
                </div>
            </CardContent>
        </Card>

      <Card>
        <CardHeader>
            <CardTitle>Precedence Table</CardTitle>
            <CardDescription>Operators with higher precedence are evaluated before operators with lower precedence. Operators on the same level are evaluated from left to right.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Precedence</TableHead>
                <TableHead>Operator</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {precedenceTable.map(row => (
                <TableRow key={row.level}>
                  <TableCell className="font-semibold">{row.level}</TableCell>
                  <TableCell><pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{row.operators}</code></pre></TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function JavaScannerClass({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const steps = [
      {
        icon: Import,
        title: "1. Import the Scanner",
        description: "First, you need to tell Java you want to use the `Scanner` class. It lives in the `java.util` package.",
        code: "import java.util.Scanner;"
      },
      {
        icon: PlusSquare,
        title: "2. Create a Scanner Object",
        description: "Create a new `Scanner` object that reads from the standard input stream, which is your keyboard.",
        code: "Scanner myObj = new Scanner(System.in);"
      },
      {
        icon: FileQuestion,
        title: "3. Prompt the User",
        description: "Print a message to the console to tell the user what you want them to enter.",
        code: 'System.out.println("Enter your name");'
      },
      {
        icon: Keyboard,
        title: "4. Read the Input",
        description: "Use a method like `nextLine()` to read the user's input as a string.",
        code: "String userName = myObj.nextLine();"
      },
      {
        icon: PlayCircle,
        title: "5. Use the Input",
        description: "Now you can use the variable that holds the user's input in your program!",
        code: 'System.out.println("Username is: " + userName);'
      }
    ];

    const fullExample = `import java.util.Scanner;  // 1. Import

public class Main {
  public static void main(String[] args) {
    // 2. Create a Scanner object
    Scanner myObj = new Scanner(System.in);
    
    // 3. Prompt the user
    System.out.println("Enter username");

    // 4. Read user input
    String userName = myObj.nextLine(); 
    
    // 5. Use the input
    System.out.println("Username is: " + userName); 
  }
}`;
  
    return (
      <div id="java-scanner-class-page" data-test="java-scanner-class-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Keyboard className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">The Scanner Class</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Making your Java programs interactive by reading user input.</p>
        </div>
  
        <div className="relative">
          <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-border -z-10"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{step.code}</pre>
                    </div>
                </div>
                 <div className={`w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shrink-0 md:order-1 ${index % 2 === 0 ? '' : 'md:-ml-6'} ${index % 2 !== 0 ? '' : 'md:mr-[-25px]'} z-10`}>
                    {index + 1}
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Full Example</CardTitle>
                <CardDescription>
                    Here's how all the steps look together in a single program. Note that you can't run this example here because it requires real-time user input.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{fullExample}</pre>
                </div>
                <p className="text-xs text-muted-foreground mt-2">To try this, you'll need to run it in a local development environment like VS Code or IntelliJ.</p>
            </CardContent>
        </Card>
      </div>
    );
}

export function JavaReadingDifferentTypes({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const methods = [
        { method: "next()", reads: "A single word (until a space is found)", example: 'String word = myScanner.next();' },
        { method: "nextLine()", reads: "The entire line of text (until the user hits Enter)", example: 'String line = myScanner.nextLine();' },
        { method: "nextInt()", reads: "An integer (`int`)", example: 'int number = myScanner.nextInt();' },
        { method: "nextDouble()", reads: "A double-precision number (`double`)", example: 'double decimal = myScanner.nextDouble();' },
        { method: "nextBoolean()", reads: "A boolean value (`true` or `false`)", example: 'boolean choice = myScanner.nextBoolean();' },
        { method: "nextFloat()", reads: "A floating-point number (`float`)", example: 'float price = myScanner.nextFloat();' },
        { method: "nextLong()", reads: "A long integer (`long`)", example: 'long largeNumber = myScanner.nextLong();' },
    ];
    
    const fullExample = `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner myScanner = new Scanner(System.in);

    System.out.println("Enter name, age and salary:");

    // String input
    String name = myScanner.nextLine();

    // Numerical input
    int age = myScanner.nextInt();
    double salary = myScanner.nextDouble();

    // Output input by user
    System.out.println("Name: " + name); 
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }
}`;

    return (
        <div id="java-reading-types-page" data-test="java-reading-types-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FileQuestion className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Reading Different Data Types</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The `Scanner` class has different methods for reading different types of data.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Scanner Methods</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Method</TableHead>
                                <TableHead>What it Reads</TableHead>
                                <TableHead>Example Usage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {methods.map(m => (
                                <TableRow key={m.method}>
                                    <TableCell><code className="font-mono text-primary font-semibold">{m.method}</code></TableCell>
                                    <TableCell>{m.reads}</TableCell>
                                    <TableCell><code className="font-mono bg-muted p-1 rounded text-sm">{m.example}</code></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Full Example</CardTitle>
                    <CardDescription>
                        This program asks for a name, age, and salary, and then prints them out. Note that this example will not run in the browser editor.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{fullExample}</pre>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-yellow-500/50 bg-yellow-500/5">
                <CardHeader>
                    <CardTitle className="text-yellow-700">A Common Pitfall: `nextInt()` and `nextLine()`</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-yellow-600 mb-4">When you use `nextInt()` (or any other `next...()` method besides `nextLine()`), it only reads the number, not the "new line" character that's created when you press Enter. This leftover newline character is then immediately consumed by the next `nextLine()` call, causing it to skip the input you intended for it.</p>
                    <p className="text-yellow-600 mb-2 font-semibold">The Fix:</p>
                    <p className="text-yellow-600 mb-4">If you use a method like `nextInt()` and you know you're going to use `nextLine()` after it, add an extra `myScanner.nextLine();` call in between to consume the leftover newline character.</p>
                    <div className="bg-background rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
{`int age = myScanner.nextInt();
// Consume the leftover newline
myScanner.nextLine(); 
String name = myScanner.nextLine();`}
                        </pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


export function JavaInputValidation({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const example = `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Please enter an integer:");

    if (sc.hasNextInt()) {
        int number = sc.nextInt();
        System.out.println("You entered the integer: " + number);
    } else {
        System.out.println("That's not an integer! Please run the program again.");
    }
  }
}`;

    return (
        <div id="java-input-validation-page" data-test="java-input-validation-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Input Validation</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Checking if the user has entered the correct type of data before you try to use it.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Why Validate Input?</CardTitle>
                    <CardDescription>
                        If you ask for an integer and the user types "hello", your program will crash with an `InputMismatchException`. To prevent this, you can check the input type first.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The `Scanner` class provides `hasNext...()` methods that check if the next input token can be interpreted as the specified type without actually consuming it.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>The `hasNextInt()` Method</CardTitle>
                    <CardDescription>
                        This method returns `true` if the next token in the scanner's input can be interpreted as an `int` value.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example}</pre>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">This example will not run correctly in the browser editor because it requires user input.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Other `hasNext...()` Methods</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Just like there are different `next...()` methods, there's a corresponding `hasNext...()` method for each:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li><code className="font-mono bg-muted p-1 rounded">hasNextDouble()</code></li>
                        <li><code className="font-mono bg-muted p-1 rounded">hasNextFloat()</code></li>
                        <li><code className="font-mono bg-muted p-1 rounded">hasNextBoolean()</code></li>
                        <li>...and so on.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

export function JavaIfElse({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-if-else-page" className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold">If-Else Statement</h1>
                <p className="text-lg text-muted-foreground">Execute code based on conditions.</p>
            </div>
            <Card>
                <CardHeader><CardTitle>If</CardTitle></CardHeader>
                <CardContent>
                    <p>Executes a block of code if a condition is true.</p>
                    <pre><code>{`if (condition) {\n  // block of code to be executed if the condition is true\n}`}</code></pre>
                </CardContent>
            </Card>
        </div>
    );
}

export function JavaSwitch({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-switch-page" className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Switch Statement</h1>
                <p className="text-lg text-muted-foreground">Select one of many code blocks to be executed.</p>
            </div>
            <Card>
                <CardHeader><CardTitle>Switch</CardTitle></CardHeader>
                <CardContent>
                    <p>The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.</p>
                    <pre><code>{`switch(expression) {\n  case x:\n    // code block\n    break;\n  case y:\n    // code block\n    break;\n  default:\n    // code block\n}`}</code></pre>
                </CardContent>
            </Card>
        </div>
    );
}

export function JavaForLoop({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-for-loop-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">For Loop</h1></div>
            <Card>
                <CardContent><p>Loops through a block of code a number of times.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaWhileLoop({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-while-loop-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">While Loop</h1></div>
            <Card>
                <CardContent><p>Loops through a block of code as long as a specified condition is true.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaBreakContinue({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-break-continue-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Break and Continue</h1></div>
            <Card>
                <CardContent><p>Jump out of a loop or skip an iteration.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaStringMethods({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-string-methods-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">String Methods</h1></div>
            <Card>
                <CardContent><p>Common methods for working with strings.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaArrays({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-arrays-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Arrays</h1></div>
            <Card>
                <CardContent><p>Store multiple values in a single variable.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaMultiDimensionalArrays({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-multi-dim-arrays-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Multi-Dimensional Arrays</h1></div>
            <Card>
                <CardContent><p>Create arrays of arrays.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaMethods({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-methods-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Methods</h1></div>
            <Card>
                <CardContent><p>Create and call methods (functions) in Java.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaMethodParameters({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-method-params-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Method Parameters</h1></div>
            <Card>
                <CardContent><p>Pass information to methods.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaMethodOverloading({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-method-overloading-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Method Overloading</h1></div>
            <Card>
                <CardContent><p>Define multiple methods with the same name but different parameters.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaScope({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-scope-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Scope</h1></div>
            <Card>
                <CardContent><p>Learn where variables are accessible.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaRecursion({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-recursion-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Recursion</h1></div>
            <Card>
                <CardContent><p>The technique of making a function call itself.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaClassesObjects({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-classes-objects-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Classes and Objects</h1></div>
            <Card>
                <CardContent><p>Fundamentals of Object-Oriented Programming (OOP).</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaClassAttributes({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-class-attributes-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Class Attributes</h1></div>
            <Card>
                <CardContent><p>Define variables within a class.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaClassMethods({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-class-methods-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Class Methods</h1></div>
            <Card>
                <CardContent><p>Define methods within a class.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaConstructors({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-constructors-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Constructors</h1></div>
            <Card>
                <CardContent><p>Special method for creating and initializing objects.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaAccessModifiers({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-access-modifiers-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Access Modifiers</h1></div>
            <Card>
                <CardContent><p>Control the visibility of classes, attributes, and methods.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaEncapsulation({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-encapsulation-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Encapsulation</h1></div>
            <Card>
                <CardContent><p>Bundling data and methods that work on that data within one unit.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaPackages({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-packages-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Packages and API</h1></div>
            <Card>
                <CardContent><p>Use built-in and user-defined packages.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaInheritance({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-inheritance-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Inheritance</h1></div>
            <Card>
                <CardContent><p>Inherit attributes and methods from one class to another.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaPolymorphism({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-polymorphism-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Polymorphism</h1></div>
            <Card>
                <CardContent><p>Use a single interface to represent different underlying forms.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaInnerClasses({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-inner-classes-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Inner Classes</h1></div>
            <Card>
                <CardContent><p>Nested classes in Java.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaAbstraction({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-abstraction-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Abstraction</h1></div>
            <Card>
                <CardContent><p>Hiding certain details and showing only essential information.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaInterfaces({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-interfaces-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Interfaces</h1></div>
            <Card>
                <CardContent><p>Another way to achieve abstraction in Java.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaEnums({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-enums-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Enums</h1></div>
            <Card>
                <CardContent><p>Special classes that represent a group of constants.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaDate({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-date-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Date and Time</h1></div>
            <Card>
                <CardContent><p>Work with the date and time API in Java.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaHashMap({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-hashmap-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">HashMap</h1></div>
            <Card>
                <CardContent><p>Store key/value pairs.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaHashSet({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-hashset-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">HashSet</h1></div>
            <Card>
                <CardContent><p>Store unique items.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaIterator({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-iterator-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Iterator</h1></div>
            <Card>
                <CardContent><p>Loop through collections.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaWrapperClasses({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-wrapper-classes-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Wrapper Classes</h1></div>
            <Card>
                <CardContent><p>Use primitive data types as objects.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaExceptions({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-exceptions-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Exceptions</h1></div>
            <Card>
                <CardContent><p>Handle errors in Java with try-catch blocks.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaRegex({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-regex-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Regular Expressions</h1></div>
            <Card>
                <CardContent><p>Use regular expressions for pattern matching.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaThreads({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-threads-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Threads</h1></div>
            <Card>
                <CardContent><p>Multithreading in Java.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaLambda({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-lambda-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">Lambda Expressions</h1></div>
            <Card>
                <CardContent><p>Learn about lambda expressions in Java.</p></CardContent>
            </Card>
        </div>
    );
}

export function JavaFileHandling({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div id="java-file-handling-page" className="space-y-8">
            <div className="text-center"><h1 className="text-4xl font-bold">File Handling</h1></div>
            <Card>
                <CardContent><p>Create, read, write, and delete files in Java.</p></CardContent>
            </Card>
        </div>
    );
}

// These are placeholders from previous steps. We'll keep them.

export function JavaTypeCasting({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const wideningExample = {
      title: 'Widening Casting (Automatic)',
      description: 'This happens when you pass a smaller data type to a larger one. Java does this for you automatically because there is no risk of losing data.',
      code: 'int myInt = 9;\ndouble myDouble = myInt; // Automatic casting: int to double\n\nSystem.out.println(myInt);      // Outputs 9\nSystem.out.println(myDouble);   // Outputs 9.0',
      order: 'byte -> short -> char -> int -> long -> float -> double'
    };
  
    const narrowingExample = {
      title: 'Narrowing Casting (Manual)',
      description: 'This happens when you pass a larger data type to a smaller one. You must do this manually by placing the type in parentheses. Be careful, you might lose data!',
      code: 'double myDouble = 9.78;\nint myInt = (int) myDouble; // Manual casting: double to int\n\nSystem.out.println(myDouble);   // Outputs 9.78\nSystem.out.println(myInt);      // Outputs 9 (the decimal part is lost)',
      order: 'double -> float -> long -> int -> char -> short -> byte'
    };
  
    return (
      <div id="java-type-casting-page" data-test="java-type-casting-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GitCommitHorizontal className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Type Casting</h1>
          </div>
          <p className="text-muted-foreground text-lg">Changing a variable from one data type to another.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Why and When to Use Type Casting</CardTitle>
            <CardDescription>
              Type casting allows you to convert a variable from one data type to another, which is essential for managing data and performing operations correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <PencilRuler className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">For Calculations</h3>
                      <p className="text-muted-foreground text-sm">To perform math operations between different numeric types, you often need to convert them to a common type first (usually a larger one to avoid losing data).</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Braces className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">Assigning Values</h3>
                      <p className="text-muted-foreground text-sm">It's required when you want to put a value from a "larger" data type into a "smaller" one, like saving a `double` (e.g., 9.78) into an `int` (which can only hold whole numbers).</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Code className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">Working with APIs/Libraries</h3>
                      <p className="text-muted-foreground text-sm">Sometimes, a method or function you want to use requires a specific data type. You'll need to cast your variable to match what the method expects.</p>
                  </div>
              </div>
          </CardContent>
        </Card>
  
        <Card className="bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Widening Casting</CardTitle>
            <CardDescription>{wideningExample.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="bg-background rounded-lg p-4 overflow-x-auto">
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{wideningExample.code}</code></pre>
              </div>
              <Button onClick={() => onOpenEditor(wrapInMain(wideningExample.code))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
                <p className="font-semibold text-primary mb-2">SAFE & AUTOMATIC</p>
                <div className="font-mono text-sm bg-foreground/5 p-3 rounded-md">
                    {wideningExample.order.split('->').map((type, index, arr) => (
                        <React.Fragment key={type}>
                            <span className="text-foreground/80">{type.trim()}</span>
                            {index < arr.length - 1 && <ArrowRight className="inline w-4 h-4 mx-1 text-primary/50" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Smaller type to larger type</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Narrowing Casting</CardTitle>
            <CardDescription>{narrowingExample.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
                <div className="bg-background rounded-lg p-4 overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{narrowingExample.code}</code></pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(narrowingExample.code))} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </div>
             <div className="flex flex-col items-center text-center">
                <p className="font-semibold text-destructive mb-2">UNSAFE & MANUAL</p>
                <div className="font-mono text-sm bg-foreground/5 p-3 rounded-md">
                    {narrowingExample.order.split('->').map((type, index, arr) => (
                        <React.Fragment key={type}>
                            <span className="text-foreground/80">{type.trim()}</span>
                            {index < arr.length - 1 && <ArrowRight className="inline w-4 h-4 mx-1 text-destructive/50" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Larger type to smaller type (potential data loss)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

export function JavaVariables({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const declarationSteps = [
      {
        step: 1,
        title: 'Choose a Data Type',
        description: "Decide what kind of data the variable will hold (e.g., `int` for integers, `String` for text).",
        code: 'int',
      },
      {
        step: 2,
        title: 'Give it a Name',
        description: 'Choose a descriptive name for your variable (e.g., `userAge`, `firstName`).',
        code: 'userAge',
      },
      {
        step: 3,
        title: 'Combine Them',
        description: 'Put the type and name together, followed by a semicolon.',
        code: 'int userAge;',
      },
    ];
  
    const initializationExamples = [
      {
        id: 'declare-init',
        title: 'Declare then Initialize',
        description: 'You can declare a variable first and then assign a value to it on a separate line.',
        code: 'int score;\nscore = 100;\nSystem.out.println(score);',
      },
      {
        id: 'declare-and-init',
        title: 'Declare and Initialize',
        description: 'A common shortcut is to assign a value at the same time you declare the variable.',
        code: 'int score = 100;\nSystem.out.println(score);',
      },
      {
        id: 'multiple',
        title: 'Multiple Variables',
        description: 'You can declare multiple variables of the same type on one line, separated by commas.',
        code: 'int x = 5, y = 10, z = 15;\nSystem.out.println(x + y + z);',
      },
      {
        id: 'final',
        title: 'Final (Constants)',
        description: 'Use the `final` keyword to create a constant, whose value cannot be changed.',
        code: 'final double PI = 3.14159;\nSystem.out.println(PI);',
      },
    ];
  
    return (
      <div id="java-variables-page" data-test="java-variables-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <PencilRuler className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Variables Basics</h1>
          </div>
          <p className="text-muted-foreground text-lg">The first step to storing data in Java</p>
        </div>
  
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What is Declaring a Variable?</CardTitle>
            <CardDescription>Declaration tells the compiler the variable's name and the type of data it will hold.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6 p-8">
            {declarationSteps.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="bg-muted rounded p-2 w-full overflow-x-auto">
                    <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{item.code}</code></pre>
                  </div>
                  <Button onClick={() => onOpenEditor(wrapInMain('// This is just a declaration, it doesn\'t print anything by itself\n' + item.code))} variant="ghost" size="sm" className="mt-2">
                      <Play className="mr-2 h-4 w-4" /> Try it
                  </Button>
                </div>
                {index < declarationSteps.length - 1 && (
                  <ChevronRight className="w-8 h-8 text-muted-foreground hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What is Initializing a Variable?</CardTitle>
            <CardDescription>Initialization is the process of assigning an initial value to a declared variable.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {initializationExamples.map((ex) => (
              <div key={ex.id} className="bg-muted border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">{ex.title}</h3>
                <p className="text-sm text-foreground mb-3 h-12">{ex.description}</p>
                <div className="bg-background/50 rounded p-3 overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{ex.code}</code></pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(ex.code))} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

export function JavaDataTypes({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const [selectedTypeId, setSelectedTypeId] = React.useState<string | null>(null);

  const primitiveTypes = [
    { id: 'byte', name: 'byte', size: '8-bit', range: '-128 to 127', example: 'byte age = 30;\nSystem.out.println(age);', description: 'Stores whole numbers.' },
    { id: 'short', name: 'short', size: '16-bit', range: '-32,768 to 32,767', example: 'short salary = 25000;\nSystem.out.println(salary);', description: 'Stores whole numbers.' },
    { id: 'int', name: 'int', size: '32-bit', range: '-2,147,483,648 to 2,147,483,647', example: 'int population = 1000000;\nSystem.out.println(population);', description: 'Stores whole numbers, commonly used.' },
    { id: 'long', name: 'long', size: '64-bit', range: '-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807', example: 'long worldPopulation = 8000000000L;\nSystem.out.println(worldPopulation);', description: 'Stores very large whole numbers.' },
    { id: 'float', name: 'float', size: '32-bit', precision: '~6-7 digits', example: 'float price = 19.99f;\nSystem.out.println(price);', description: 'Stores fractional numbers.' },
    { id: 'double', name: 'double', size: '64-bit', precision: '~15 digits', example: 'double pi = 3.1415926535;\nSystem.out.println(pi);', description: 'Stores fractional numbers, commonly used.' },
    { id: 'boolean', name: 'boolean', size: '1-bit', values: 'true or false', example: 'boolean isLoggedIn = true;\nSystem.out.println(isLoggedIn);', description: 'Stores true or false values.' },
    { id: 'char', name: 'char', size: '16-bit', range: '0 to 65,535', example: 'char grade = \'A\';\nSystem.out.println(grade);', description: 'Stores single Unicode characters. You can look up characters on the' },
  ];

  const referenceTypes = [
    { id: 'string', name: 'String', description: 'A sequence of characters, like "Hello World".', example: 'String greeting = "Hello, Java!";\nSystem.out.println(greeting);' },
    { id: 'array', name: 'Array', description: 'A collection of variables of the same type.', example: 'int[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[0]);' },
    { id: 'class', name: 'Class', description: 'A blueprint for creating objects.', example: 'class MyClass { int x = 5; }\nMyClass myObj = new MyClass();\nSystem.out.println(myObj.x);' },
    { id: 'interface', name: 'Interface', description: 'A contract for what a class can do.', example: 'interface Animal { public void makeSound(); }\nclass Dog implements Animal {\n  public void makeSound() {\n    System.out.println("Woof");\n  }\n}\nDog myDog = new Dog();\nmyDog.makeSound();' },
  ];

  return (
    <div id="java-data-types-page" data-test="java-data-types-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Variable className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Java Data Types</h1>
        </div>
        <p className="text-muted-foreground text-lg">Understanding the building blocks of data in Java</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Box className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Primitive Types</CardTitle>
          </div>
          <CardDescription>The fundamental data types directly holding values.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primitiveTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedTypeId(type.id === selectedTypeId ? null : type.id)}
              className={("bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50" + (selectedTypeId === type.id ? ' border-primary ring-2 ring-primary/50' : ' border-border'))}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{type.name}</h3>
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{type.size}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 h-10">
                {type.description}{' '}
                {type.id === 'char' && (
                  <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Unicode website
                  </a>
                )}.
              </p>
              
              {selectedTypeId === type.id && (
                <div className="mt-4 space-y-3 bg-foreground/5 rounded-lg p-3 overflow-x-auto">
                    <p className="text-xs text-muted-foreground mb-1">Range:</p>
                    <p className="text-sm font-semibold whitespace-pre-wrap">{type.range || type.values || type.precision}</p>
                    <p className="text-xs text-muted-foreground mb-1 mt-2">Example:</p>
                    <pre className="text-primary text-sm font-code whitespace-pre-wrap">{type.example}</pre>
                    <Button onClick={(e) => { e.stopPropagation(); onOpenEditor(wrapInMain(type.example)); }} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </div>
              )}

              <div className="flex items-center justify-end mt-4 text-primary">
                <span className="text-sm font-medium">
                  {selectedTypeId === type.id ? 'Collapse' : 'Expand'}
                </span>
                <ChevronRight className={"w-4 h-4 ml-1 transition-transform" + (selectedTypeId === type.id ? ' rotate-90' : '')} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Link2 className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Reference Types</CardTitle>
          </div>
          <CardDescription>Types that store a reference (or address) to an object in memory.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referenceTypes.map((type) => (
             <div key={type.id} className="bg-muted border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
               <h3 className="font-bold text-primary text-lg mb-2">{type.name}</h3>
               <p className="text-sm text-foreground mb-3 h-12">{type.description}</p>
               <div className="bg-background/50 rounded p-2 overflow-x-auto">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{type.example}</code></pre>
               </div>
               <Button onClick={() => onOpenEditor(wrapInMain(type.example))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
               </Button>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export function JavaPrintFormats({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const [selectedMethodId, setSelectedMethodId] = React.useState<number | null>(null);

  const printMethods = [
    {
      id: 1,
      name: 'System.out.print()',
      description: 'Prints text without adding a new line at the end.',
      syntax: 'System.out.print(value);',
      example: 'System.out.print("Hello");\nSystem.out.print(" World");',
      output: 'Hello World',
    },
    {
      id: 2,
      name: 'System.out.println()',
      description: 'Prints text and adds a new line at the end.',
      syntax: 'System.out.println(value);',
      example: 'System.out.println("Hello");\nSystem.out.println("World");',
      output: 'Hello\nWorld',
    },
    {
      id: 3,
      name: 'System.out.printf()',
      description: 'Prints formatted text using format specifiers.',
      syntax: 'System.out.printf(format, args...);',
      example: 'System.out.printf("Name: %s, Age: %d%n", "John", 25);',
      output: 'Name: John, Age: 25',
    },
    {
      id: 4,
      name: 'String.format()',
      description: 'Returns a formatted string instead of printing it.',
      syntax: 'String str = String.format(format, args...);',
      example: 'String formatted = String.format("Price: $%.2f", 19.99);\nSystem.out.println(formatted);',
      output: 'Price: $19.99',
    },
    {
      id: 5,
      name: 'System.err.println()',
      description: 'Prints to the standard error stream, often shown in red.',
      syntax: 'System.err.println(errorMessage);',
      example: 'System.err.println("Error: File not found.");',
      output: 'Error: File not found.',
    },
  ];

  const formatSpecifiers = [
    { spec: '%s', desc: 'String', example: 'System.out.printf("Name: %s", "John");' },
    { spec: '%d', desc: 'Integer', example: 'System.out.printf("Age: %d", 25);' },
    { spec: '%f', desc: 'Float/Double', example: 'System.out.printf("Price: %.2f", 19.99);' },
    { spec: '%b', desc: 'Boolean', example: 'System.out.printf("Is active: %b", true);' },
    { spec: '%c', desc: 'Character', example: 'System.out.printf("Initial: %c", \'J\');' },
    { spec: '%n', desc: 'New line', example: 'System.out.printf("Line 1%nLine 2");' },
  ];

  return (
    <div id="java-print-formats-page" data-test="java-print-formats-page" className="space-y-8">
       <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Terminal className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Print Statements & Format Specifiers</h1>
          </div>
          <p className="text-muted-foreground text-lg">A guide to output formatting in Java</p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {printMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethodId(method.id === selectedMethodId ? null : method.id)}
            className={"bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50 " + (selectedMethodId === method.id ? 'border-primary ring-2 ring-primary/50' : 'border-border')}
          >
            <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{method.name}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 h-10">{method.description}</p>
            
            <div className="bg-muted rounded-lg p-3 mb-3 overflow-x-auto">
              <p className="text-xs text-muted-foreground mb-1">Syntax:</p>
              <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{method.syntax}</code></pre>
            </div>

            {selectedMethodId === method.id && (
              <div className="mt-4 space-y-3">
                <div className="bg-foreground/5 rounded-lg p-4 overflow-x-auto">
                  <p className="text-xs text-muted-foreground mb-2">Example Code:</p>
                  <pre className="text-primary text-sm font-code whitespace-pre-wrap">{method.example}</pre>
                </div>
                <div className="bg-foreground/5 rounded-lg p-4 overflow-x-auto">
                  <p className="text-xs text-muted-foreground mb-2">Output:</p>
                  <pre className="text-foreground/80 text-sm font-code whitespace-pre-wrap">{method.output}</pre>
                </div>
                <Button onClick={(e) => { e.stopPropagation(); onOpenEditor(wrapInMain(method.example)); }} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
              </div>
            )}
            
            <div className="flex items-center justify-end mt-4 text-primary">
              <span className="text-sm font-medium">
                {selectedMethodId === method.id ? 'Collapse' : 'Expand'}
              </span>
              <ChevronRight className={"w-4 h-4 ml-1 transition-transform " + (selectedMethodId === method.id ? 'rotate-90' : '')} />
            </div>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Format Specifiers</CardTitle>
          </div>
          <CardDescription>
            Used with `printf()` and `String.format()` to format values.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {formatSpecifiers.map((spec) => (
             <div key={spec.spec} className="bg-muted border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
               <code className="font-bold text-primary text-lg">{spec.spec}</code>
               <p className="text-sm text-foreground mt-1 mb-2">{spec.desc}</p>
               <div className="bg-background/50 rounded p-2 overflow-x-auto">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{spec.example}</code></pre>
               </div>
               <Button onClick={() => onOpenEditor(wrapInMain(spec.example))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
               </Button>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

    