'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, HardHat, File, Folder, Play, CheckCircle2 } from 'lucide-react';
import React from 'react';

const projectStructure = [
    { name: 'node_modules/', description: 'Where all the third-party libraries (dependencies) are stored. You don\'t edit this.' },
    { name: 'public/', description: 'Static assets that are publicly accessible, like your `favicon.ico`.' },
    { name: 'src/', description: 'The heart of your application. This is where you\'ll do most of your work.' },
    { name: '  ├── assets/', description: 'Images, fonts, and other static assets go here.', indent: true },
    { name: '  ├── components/', description: 'Reusable UI components (e.g., Button.jsx, Card.jsx).', indent: true },
    { name: '  ├── App.css', description: 'CSS styles for the main App component.', indent: true },
    { name: '  ├── App.jsx', description: 'The main application component.', indent: true },
    { name: '  └── main.jsx', description: 'The entry point that renders your React app into the DOM.', indent: true },
    { name: '.eslintrc.cjs', description: 'Configuration for ESLint, a tool that helps find and fix problems in your code.' },
    { name: '.gitignore', description: 'A list of files and folders that Git should ignore (like `node_modules`).' },
    { name: 'index.html', description: 'The main HTML file. Your React app gets injected into this page.' },
    { name: 'package.json', description: 'Lists your project\'s dependencies and scripts (like `dev`, `build`).' },
    { name: 'vite.config.js', description: 'Configuration file for the Vite build tool.' },
];

export default function InstallationAndSetup() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>The Modern Kitchen Analogy</CardTitle>
                    <CardDescription>
                        Why do we use tools like Vite or Create React App instead of just adding a &lt;script&gt; tag?
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Think of building a modern web app like running a professional restaurant kitchen. You could technically cook a meal over a campfire (just a simple HTML file), but for a high-quality, efficient result, you need specialized equipment.</p>
                    <p className="mt-2">A build tool like **Vite** is your professional kitchen. It provides:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>**A Development Server:** A fast stove that instantly shows you changes as you cook (code).</li>
                        <li>**A Bundler:** An expert chef who takes all your individual ingredients (code files, CSS, images) and efficiently bundles them into an optimized meal (a few files) for the customer (browser).</li>
                        <li>**Transpilation:** A machine that converts modern syntax (like JSX) into something all customers (browsers) can understand.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><HardHat className="w-6 h-6 text-primary"/>Step 1: Create a New React App with Vite</CardTitle>
                    <CardDescription>Vite is the recommended, fastest way to start a new React project.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Open your terminal and run the following command. This will create a new folder with a starter React project.</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">npm create vite@latest my-react-app -- --template react</pre>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Folder className="w-6 h-6 text-primary"/>Step 2: Understand the Project Structure</CardTitle>
                    <CardDescription>Vite creates a clean and logical folder structure for you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        {projectStructure.map((item, index) => (
                            <div key={index} className={`flex items-start ${item.indent ? 'pl-4' : ''}`}>
                                <span className="text-foreground w-48 shrink-0">{item.name}</span>
                                <span className="text-muted-foreground">- {item.description}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Play className="w-6 h-6 text-primary"/>Step 3: Run the Development Server</CardTitle>
                    <CardDescription>Navigate into your new project folder and start the development server.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`cd my-react-app    // Go into the project directory
npm install        // Install all the dependencies
npm run dev        // Start the development server`}</pre>
                        </div>
                        <p className="text-sm text-muted-foreground">Your terminal will show you a local URL (usually `http://localhost:5173`). Open this in your browser to see your new React app running!</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader className="flex flex-row items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600"/>
                    <div>
                        <CardTitle className="text-green-700 dark:text-green-300">You're Ready to Code!</CardTitle>
                        <CardDescription className="text-green-600 dark:text-green-400">
                           That's it! Now you can open the `src/App.jsx` file and start editing your main component. Vite's Hot Module Replacement (HMR) will automatically update the browser with your changes as you save the file.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}
