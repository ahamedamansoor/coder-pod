
'use client';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Map, ArrowRight } from 'lucide-react';

const Connector = ({ isDotted = false, className }: { isDotted?: boolean, className?: string }) => {
    return (
        <div className={cn("absolute w-px h-full bg-border -z-10", className, { 'border-l-2 border-dotted border-border bg-transparent': isDotted })}></div>
    );
};

const TopicNode = ({ children, className, highlight = false }: { children: React.ReactNode, className?: string, highlight?: boolean }) => {
    return (
        <div className={cn("bg-card border-2 rounded-lg px-4 py-2 text-center text-sm font-semibold shadow-sm w-48",
            highlight ? "border-primary bg-primary/10 text-primary-foreground" : "border-border",
            className
        )}>
            {children}
        </div>
    );
}

export function JavaRoadmapOverview() {
    const basicsLeft = ["Basic Syntax", "Lifecycle of a Program", "Data Types", "Variables and Scopes", "Type Casting"];
    const basicsRight = ["Strings and Methods", "Math Operations", "Arrays", "Conditionals", "Loops", "Basics of OOP"];
    const oopBasics = ["Classes and Objects", "Attributes and Methods", "Access Specifiers", "Static Keyword", "Final Keyword", "Nested Classes"];
    const moreOop = ["Object Lifecycle", "Method Chaining", "Enums", "Record", "Initializer Block", "Inheritance", "Abstraction", "Encapsulation", "Interfaces", "Method Overloading / Overriding", "Static vs Dynamic Binding"];
    const advanced = ["Exception Handling", "Lambda Expressions", "Annotations", "Modules"];

    return (
        <div id="java-roadmap-overview-page" className="w-full space-y-8 p-4 md:p-8 overflow-x-auto">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Map className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Java Roadmap Overview</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A visual guide to the Java learning journey.</p>
            </div>

            <div className="relative min-w-[1200px]">
                {/* Central Column */}
                <div className="flex flex-col items-center gap-16">
                    <TopicNode highlight className="w-56 py-3 text-lg">Learn the Basics</TopicNode>
                    <h2 className="text-2xl font-bold text-primary tracking-wider">Object Oriented Programming</h2>
                    <TopicNode highlight className="w-56 py-3 text-lg">More about OOP</TopicNode>
                </div>

                {/* Left Basics */}
                <div className="absolute top-0 left-0 flex flex-col gap-4">
                    {basicsLeft.map((topic, i) => (
                        <div key={topic} className="relative flex items-center">
                            <TopicNode>{topic}</TopicNode>
                            <div className="w-12 border-t-2 border-dotted border-border ml-2"></div>
                        </div>
                    ))}
                </div>

                 {/* Right Basics */}
                <div className="absolute top-0 right-0 flex flex-col gap-4">
                    {basicsRight.map((topic, i) => (
                        <div key={topic} className="relative flex items-center">
                            <div className="w-12 border-t-2 border-dotted border-border mr-2"></div>
                            <TopicNode>{topic}</TopicNode>
                        </div>
                    ))}
                </div>

                {/* Vertical Lines */}
                <div className="absolute h-[600px] top-14 left-1/2 -translate-x-1/2 w-0.5 bg-border -z-10"></div>
                <div className="absolute h-0.5 w-[50%] top-[300px] left-1/4 bg-border -z-10"></div>
                
                {/* OOP Basics */}
                <div className="absolute top-[350px] left-0 flex flex-col gap-4">
                    <Card className="p-4 border-2 border-border shadow-md">
                        <h3 className="text-lg font-bold text-center mb-4 text-primary">Basics of OOP</h3>
                        <div className="flex flex-col gap-3">
                        {oopBasics.map((topic) => <TopicNode key={topic}>{topic}</TopicNode>)}
                        </div>
                    </Card>
                </div>
                {/* Connector for OOP Basics */}
                <div className="absolute top-[300px] left-[200px] h-20 w-0.5 bg-border -z-10"></div>
                <div className="absolute top-[380px] left-[200px] w-36 h-0.5 bg-border -z-10"></div>


                {/* More about OOP */}
                <div className="absolute top-[520px] left-1/2 -translate-x-1/2">
                    <Card className="p-4 border-2 border-border shadow-md">
                         <div className="grid grid-cols-3 gap-3">
                            {moreOop.map((topic) => <TopicNode key={topic}>{topic}</TopicNode>)}
                         </div>
                    </Card>
                </div>

                {/* Advanced Topics */}
                <div className="absolute top-[350px] right-0 flex flex-col gap-3">
                    {advanced.map((topic) => (
                       <TopicNode key={topic} highlight>{topic}</TopicNode>
                    ))}
                </div>
                {/* Connector for Advanced */}
                <div className="absolute top-[300px] right-[280px] h-20 w-0.5 bg-border -z-10"></div>
                <div className="absolute top-[380px] right-[192px] w-24 h-0.5 bg-border -z-10"></div>

            </div>
        </div>
    );
}
