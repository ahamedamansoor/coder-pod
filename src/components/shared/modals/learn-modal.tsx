
'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { JavaLearningDemo } from '@/components/java/java-learning-demo';
import Link from 'next/link';
import { BookOpen, Rocket, Mic, Monitor } from 'lucide-react';
import { useLoading } from '@/hooks/use-loading';
import { AiInterviewDemo } from '@/components/shared/ai-interview-demo';
import { ScrollArea } from '@/components/ui/scroll-area';

export function LearnModal({ autoOpen = false }: { autoOpen?: boolean }) {
  const [isDemoOpen, setIsDemoOpen] = useState(autoOpen);
  const { showLoader } = useLoading();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const interviewDemoRef = useRef<HTMLDivElement>(null);
  const [playInterviewDemo, setPlayInterviewDemo] = useState(false);

  useEffect(() => {
    setIsDemoOpen(autoOpen);
  }, [autoOpen]);

  useEffect(() => {
    if (isDemoOpen && autoOpen) {
      // When auto-opening for a new user, play the first demo
      const scrollTimer = setTimeout(() => {
        interviewDemoRef.current?.scrollIntoView({ behavior: 'smooth' });
        
        // Wait for scroll to finish, then start the second demo
        const playTimer = setTimeout(() => {
            setPlayInterviewDemo(true);
        }, 1000); // Wait 1s for scrolling to be noticeable
        
        return () => clearTimeout(playTimer);

      }, 23000); // Start scrolling after the first demo finishes (approx 23s)
      
      return () => clearTimeout(scrollTimer);
    } else {
        setPlayInterviewDemo(false);
    }
  }, [isDemoOpen, autoOpen]);

  const handleLinkClick = () => {
    showLoader();
  };

  const menuItems = [
      {
          group: 'Frontend',
          items: [
            { href: '/html/learning-plan', label: 'HTML' },
            { href: '/css/learning-plan', label: 'CSS' },
            { href: '/scss/learning-plan', label: 'Sass/SCSS' },
            { href: '/javascript/learning-plan', label: 'JavaScript' },
            { href: '/react/learning-plan', label: 'React' },
          ]
      },
      {
          group: 'Backend',
          items: [
            { href: '/java/learning-plan', label: 'Java' },
            { href: '/spring/learning-plan', label: 'Spring Framework' },
            { href: '/spring-boot/learning-plan', label: 'Spring Boot' },
          ]
      }
  ]

  return (
    <>
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
                <Rocket className="mr-2 h-4 w-4" />
                Start Learning
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Choose a Path</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menuItems.map(menuGroup => (
                <DropdownMenuGroup key={menuGroup.group}>
                    <DropdownMenuLabel className="text-xs text-muted-foreground">{menuGroup.group}</DropdownMenuLabel>
                    {menuGroup.items.map(item => (
                         <DropdownMenuItem key={item.href} asChild>
                            <Link href={item.href} onClick={handleLinkClick}>{item.label}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => setIsDemoOpen(true)}>
                <BookOpen className="mr-2 h-4 w-4" />
                How it works
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent className="max-w-7xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>How It Works: An Interactive Tour</DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="space-y-12 p-2">
                <div>
                     <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-4 mb-3">
                            <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Track Your Learning Progress</h2>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground">Follow a guided path and see your progress in real-time.</p>
                    </div>
                    <JavaLearningDemo autoPlay={isDemoOpen} />
                </div>

                <div className="border-t pt-8" ref={interviewDemoRef}>
                     <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-4 mb-3">
                            <Mic className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Practice with an AI Interview Simulator</h2>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground">Practice your skills with an AI-powered mock interview.</p>
                        <AiInterviewDemo autoPlay={playInterviewDemo} />
                    </div>
                </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
