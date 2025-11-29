
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Download, Route, FileCode, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

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
