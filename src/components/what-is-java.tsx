

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from './ui/card';
import { VenetianMask, History, Lightbulb, Rocket, Users, Tv, Smartphone, Globe, Briefcase, BrainCircuit, Gamepad2, Cloud, Network, Share2, CheckCircle2, Puzzle, Package, Shield, Anchor, Cpu, Rabbit, Layers, HardHat, PlayCircle, Library, Milestone, Download, Settings, FileCode, Route, HandMetal, Code, Play, Workflow, ArrowBigRight, File, Binary, Laptop, MessageSquare, Book, DraftingCompass, GitCommitHorizontal, Braces, PencilRuler, Variable, Box, Link2, ArrowRight, CornerDownLeft, Combine, Asterisk } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
  
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