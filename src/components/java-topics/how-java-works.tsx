
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Workflow, ArrowBigRight, File, Binary, Laptop, HardHat } from 'lucide-react';

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
