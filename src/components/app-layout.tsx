'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Logo } from './logo';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bot, Code, Zap } from 'lucide-react';
import { LearnModal } from './learn-modal';
import Link from 'next/link';

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">Programming Languages</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Select a Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/java/learning-plan">
                    <DropdownMenuItem>Java</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem disabled>JavaScript</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <LearnModal />
              <Avatar>
                <AvatarImage src="https://picsum.photos/seed/user/40/40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Welcome to Your AI-Powered Learning Space
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master new programming languages with interactive tools, AI assistance, and a structured learning path.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Zap className="w-6 h-6" />
              </div>
              <CardTitle>AI-Powered Explanations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Don't get stuck. Use our AI to simplify complex topics, get your questions answered instantly, and see practical code examples.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Code className="w-6 h-6" />
              </div>
              <CardTitle>Interactive Coding Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Test your knowledge directly in the browser with our integrated code editor. Run code snippets and see the output immediately.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Bot className="w-6 h-6" />
              </div>
              <CardTitle>Personalized Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Follow a structured learning path, track your progress, and get personalized feedback to accelerate your learning journey.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
            <Button size="lg" asChild>
                <Link href="/java/learning-plan">Start Learning Java Now</Link>
            </Button>
        </div>

      </main>
    </div>
  );
}
