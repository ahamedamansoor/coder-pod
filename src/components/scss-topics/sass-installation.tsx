'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    HardHat, Check, ArrowRight, Code, FileCode, Monitor, 
    Terminal, Download, Settings, Play, Zap, Package,
    Folder, Globe, Wrench, AlertTriangle, CheckCircle,
    Copy, ExternalLink, Lightbulb, Rocket, Command
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassInstallation({ onOpenEditor, onOpenWebPlayground }: {
  onOpenEditor?: (code: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
} = {}) {
    const [selectedMethod, setSelectedMethod] = useState('npm');
    const [copiedCommand, setCopiedCommand] = useState('');

    const installMethods = {
        npm: { command: 'npm install sass', label: 'npm', icon: Package },
        yarn: { command: 'yarn add sass', label: 'Yarn', icon: Package },
        pnpm: { command: 'pnpm add sass', label: 'pnpm', icon: Package },
        global: { command: 'npm install -g sass', label: 'Global', icon: Globe }
    };

    const copyToClipboard = (text: string, method: string) => {
        navigator.clipboard.writeText(text);
        setCopiedCommand(method);
        setTimeout(() => setCopiedCommand(''), 2000);
    };

    const packageJsonExample = `{
  "name": "my-sass-project",
  "version": "1.0.0",
  "scripts": {
    "build-css": "sass src/scss:dist/css",
    "watch-css": "sass --watch src/scss:dist/css",
    "dev": "sass --watch src/scss:dist/css --style=expanded",
    "build": "sass src/scss:dist/css --style=compressed"
  },
  "devDependencies": {
    "sass": "^1.69.0"
  }
}`;

    const folderStructure = `my-project/
├── src/
│   └── scss/
│       ├── main.scss
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── components/
│           ├── _buttons.scss
│           └── _cards.scss
├── dist/
│   └── css/
│       └── main.css
├── package.json
└── README.md`;

    const firstScssFile = `// src/scss/main.scss
@import 'variables';
@import 'mixins';
@import 'components/buttons';
@import 'components/cards';

body {
  font-family: $font-primary;
  background: $bg-color;
  color: $text-color;
}`;

    const variablesFile = `// src/scss/_variables.scss
$font-primary: 'Inter', sans-serif;
$bg-color: #ffffff;
$text-color: #333333;
$primary-color: #3b82f6;
$secondary-color: #64748b;`;

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <HardHat className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Sass Installation & Setup</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Complete guide to setting up Sass/SCSS in any project - from beginner to expert level.
            </p>
        </div>

        {/* Quick Start Overview */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Rocket className="w-6 h-6" />
                    Quick Start: 3 Steps to Sass
                </CardTitle>
                <CardDescription>
                    Get Sass running in your project in under 2 minutes!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-xl font-bold text-blue-600">1</span>
                        </div>
                        <h3 className="font-semibold mb-2">Install Sass</h3>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">npm install sass</code>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-xl font-bold text-green-600">2</span>
                        </div>
                        <h3 className="font-semibold mb-2">Create .scss File</h3>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">styles.scss</code>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-xl font-bold text-purple-600">3</span>
                        </div>
                        <h3 className="font-semibold mb-2">Start Coding!</h3>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">$color: blue;</code>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Installation Methods */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Package className="w-6 h-6 text-primary" />
                    Installation Methods
                </CardTitle>
                <CardDescription>
                    Choose the installation method that fits your project setup.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {Object.entries(installMethods).map(([key, method]) => {
                        const Icon = method.icon;
                        return (
                            <Button
                                key={key}
                                variant={selectedMethod === key ? "default" : "outline"}
                                onClick={() => setSelectedMethod(key)}
                                className="h-auto p-4 flex flex-col items-center gap-2"
                            >
                                <Icon className="w-6 h-6" />
                                <span>{method.label}</span>
                            </Button>
                        );
                    })}
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 relative">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-green-400 text-sm">Terminal</span>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(installMethods[selectedMethod as keyof typeof installMethods].command, selectedMethod)}
                            className="text-gray-400 hover:text-white"
                        >
                            {copiedCommand === selectedMethod ? (
                                <CheckCircle className="w-4 h-4" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                    <code className="text-gray-800 dark:text-white font-mono">
                        $ {installMethods[selectedMethod as keyof typeof installMethods].command}
                    </code>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                        {selectedMethod === 'global' ? 'Global Installation' : 'Project Installation'}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                        {selectedMethod === 'global' 
                            ? 'Installs Sass globally on your system. Use this for command-line compilation across multiple projects.'
                            : 'Installs Sass as a project dependency. Recommended for most projects as it ensures version consistency.'
                        }
                    </p>
                </div>
            </CardContent>
        </Card>
        {/* Project Setup */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Folder className="w-6 h-6 text-primary" />
                    Project Structure Setup
                </CardTitle>
                <CardDescription>
                    Organize your Sass files for maintainability and scalability.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Folder className="w-5 h-5 text-blue-600" />
                            Recommended Folder Structure
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                            <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">{folderStructure}</pre>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-purple-600" />
                            Package.json Scripts
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                            <pre className="text-blue-400 font-mono text-xs whitespace-pre-wrap">{packageJsonExample}</pre>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Compilation Process */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <Zap className="w-6 h-6" />
                    How Sass Compilation Works
                </CardTitle>
                <CardDescription>
                    Understanding the process from .scss to .css
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg border">
                    <div className="text-center">
                        <FileCode className="w-12 h-12 text-blue-600 mx-auto mb-2"/>
                        <p className="font-semibold">Write SCSS</p>
                        <p className="text-xs text-muted-foreground">Variables, nesting, mixins</p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1 block">styles.scss</code>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0 md:rotate-0 rotate-90" />
                    <div className="text-center">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full inline-block">
                           <Settings className="w-12 h-12 text-purple-600"/>
                        </div>
                        <p className="font-semibold mt-2">Sass Compiler</p>
                        <p className="text-xs text-muted-foreground">Processes & optimizes</p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1 block">Dart Sass</code>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0 md:rotate-0 rotate-90" />
                    <div className="text-center">
                        <Monitor className="w-12 h-12 text-green-600 mx-auto mb-2"/>
                        <p className="font-semibold">Standard CSS</p>
                        <p className="text-xs text-muted-foreground">Browser-ready output</p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1 block">styles.css</code>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* First SCSS Files */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Code className="w-6 h-6 text-primary" />
                    Creating Your First SCSS Files
                </CardTitle>
                <CardDescription>
                    Start with these essential files to build a solid foundation.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-blue-600" />
                            Main SCSS File
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                            <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{firstScssFile}</pre>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-green-600" />
                            Variables File
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                            <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{variablesFile}</pre>
                        </div>
                    </div>
                </div>
                
                {onOpenWebPlayground && (
                    <div className="mt-6">
                        <Button 
                            onClick={() => onOpenWebPlayground(
                                '<h1>Hello Sass!</h1>\n<p>Your first Sass project is ready.</p>',
                                firstScssFile + '\n\n' + variablesFile,
                                ''
                            )}
                            className="flex items-center gap-2"
                        >
                            <Play className="w-4 h-4" />
                            Try Your First SCSS
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>

        {/* Framework Integration */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                    <Rocket className="w-6 h-6" />
                    Framework Integration
                </CardTitle>
                <CardDescription>
                    Sass works seamlessly with popular frameworks and build tools.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">N</span>
                            </div>
                            Next.js
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Built-in Sass support</p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                            npm install sass
                        </code>
                        <p className="text-xs text-muted-foreground mt-2">
                            Import .scss files directly in components
                        </p>
                    </div>
                    
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">V</span>
                            </div>
                            Vue.js
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Vue CLI & Vite support</p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                            {'<style lang="scss">'}
                        </code>
                        <p className="text-xs text-muted-foreground mt-2">
                            Use lang="scss" in components
                        </p>
                    </div>
                    
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">R</span>
                            </div>
                            React
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Create React App support</p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                            import './App.scss'
                        </code>
                        <p className="text-xs text-muted-foreground mt-2">
                            Import .scss files in components
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Command Line Usage */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-primary" />
                    Command Line Usage
                </CardTitle>
                <CardDescription>
                    Master the Sass CLI for advanced compilation options.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Basic Compilation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                <code className="text-green-400 text-sm">
                                    sass input.scss output.css
                                </code>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Watch Mode</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                <code className="text-green-400 text-sm">
                                    sass --watch input.scss:output.css
                                </code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Compressed Output</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                <code className="text-green-400 text-sm">
                                    sass --style=compressed input.scss output.css
                                </code>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Source Maps</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                <code className="text-green-400 text-sm">
                                    sass --source-map input.scss output.css
                                </code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Pro Tip</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            Use <code>--watch</code> during development to automatically recompile when files change.
                            Use <code>--style=compressed</code> for production builds to minimize file size.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-500">
                    <AlertTriangle className="w-6 h-6" />
                    Common Issues & Solutions
                </CardTitle>
                <CardDescription>
                    Quick fixes for the most common Sass installation problems.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-700 dark:text-red-400">Error: "sass command not found"</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                            The Sass package isn't installed or not globally accessible.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded p-2">
                            <code className="text-green-400 text-xs">npm install -g sass</code>
                        </div>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-400">Error: "Cannot resolve @import"</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                            Check file paths and ensure partial files start with underscore (_).
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded p-2">
                            <code className="text-green-400 text-xs">@import 'variables'; // looks for _variables.scss</code>
                        </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-400">Node Sass vs Dart Sass</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                            Always use Dart Sass (the 'sass' package). Node Sass is deprecated.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded p-2">
                            <code className="text-green-400 text-xs">npm uninstall node-sass && npm install sass</code>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Lightbulb className="w-6 h-6" />
                    Installation Best Practices
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong>Use project-local installation</strong> - Install Sass as a dev dependency rather than globally for version consistency across team members.
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong>Organize with partials</strong> - Use underscore-prefixed files (_variables.scss) for modular organization.
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong>Set up npm scripts</strong> - Add build and watch commands to package.json for easy development workflow.
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong>Use source maps</strong> - Enable source maps for easier debugging in browser dev tools.
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong>Compress for production</strong> - Use compressed output style for production builds to reduce file size.
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                    <ArrowRight className="w-6 h-6" />
                    What's Next?
                </CardTitle>
                <CardDescription>
                    Now that Sass is installed, here's what to learn next.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h3 className="font-semibold mb-2">Variables</h3>
                        <p className="text-sm text-muted-foreground">
                            Learn to store and reuse values with Sass variables.
                        </p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <Folder className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h3 className="font-semibold mb-2">Nesting</h3>
                        <p className="text-sm text-muted-foreground">
                            Write cleaner CSS with nested selectors and parent references.
                        </p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <Settings className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h3 className="font-semibold mb-2">Mixins</h3>
                        <p className="text-sm text-muted-foreground">
                            Create reusable groups of CSS declarations with mixins.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>

      </div>
    );
}
