'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, Check, ArrowRight, Code, FileCode, Monitor } from 'lucide-react';
import React from 'react';

export default function SassInstallation() {

    const installCommand = `npm install sass`;

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <HardHat className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Sass Installation</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Setting up your project to use Sass/SCSS.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The Good News: It's Usually Simple!</CardTitle>
                <CardDescription>
                    Modern web development frameworks and build tools have made setting up Sass incredibly simple. You often don't need complex configuration files or build scripts, as many frameworks have built-in support for Sass.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>For most modern JavaScript projects, there is only one step you need to take.</p>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                    <Code className="w-6 h-6"/>
                    The Single Step: Install the `sass` Package
                </CardTitle>
                <CardDescription>You just need to add the Dart Sass compiler package to your project's dependencies.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Open your terminal in your project's root directory and run the following command:</p>
                <div className="bg-background rounded-md p-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{installCommand}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>How it Works</CardTitle>
                <CardDescription>
                    Once the `sass` package is installed, your project's build process will often automatically detect it and handle the rest for you.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-muted rounded-lg border">
                    <div className="text-center">
                        <FileCode className="w-10 h-10 text-primary mx-auto mb-2"/>
                        <p className="font-semibold">You Write .scss</p>
                        <p className="text-xs text-muted-foreground">styles.scss</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0 md:rotate-0 rotate-90" />
                    <div className="text-center">
                        <div className="p-3 bg-primary/10 rounded-full inline-block">
                           <Check className="w-10 h-10 text-primary"/>
                        </div>
                        <p className="font-semibold mt-2">Build Process</p>
                        <p className="text-xs text-muted-foreground">Automatically compiles your SCSS files</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0 md:rotate-0 rotate-90" />
                    <div className="text-center">
                        <Monitor className="w-10 h-10 text-green-600 mx-auto mb-2"/>
                        <p className="font-semibold">Browser Gets .css</p>
                        <p className="text-xs text-muted-foreground">Standard, optimized CSS</p>
                    </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">That's it! You can now start creating `.scss` or `.sass` files in your project, and they will work automatically.</p>
            </CardContent>
        </Card>

      </div>
    );
}
