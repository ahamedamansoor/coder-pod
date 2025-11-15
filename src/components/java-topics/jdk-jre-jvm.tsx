
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, HardHat, Library, PlayCircle, Milestone } from 'lucide-react';

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
