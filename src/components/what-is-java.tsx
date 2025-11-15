





import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from './ui/card';
import { VenetianMask, History, Lightbulb, Rocket, Users, Tv, Smartphone, Globe, Briefcase, BrainCircuit, Gamepad2, Cloud, Network, Share2, CheckCircle2, Puzzle, Package, Shield, Anchor, Cpu, Rabbit, Layers, HardHat, PlayCircle, Library, Milestone, Download, Settings, FileCode, Route, HandMetal, Code, Play, Workflow, ArrowBigRight, File, Binary, Laptop, MessageSquare, Book, DraftingCompass, GitCommitHorizontal, Braces, PencilRuler, Variable, Box, Link2, ArrowRight, CornerDownLeft, Combine, Asterisk, Pin, Award, BadgeHelp, Plus, Minus, X, Divide, Percent, Equal, PlusSquare, Scale, Sigma, GitCompareArrows, ChevronsRight, FunctionSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
  
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
              className={cn(
                "bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50",
                selectedTypeId === type.id ? 'border-primary ring-2 ring-primary/50' : 'border-border'
              )}
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
                <ChevronRight className={cn(
                    "w-4 h-4 ml-1 transition-transform",
                    selectedTypeId === type.id ? 'rotate-90' : ''
                )} />
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