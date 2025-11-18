'use client';
import React, { useState } from 'react';
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
import { Button } from './ui/button';
import { JavaLearningDemo } from './java-learning-demo';
import Link from 'next/link';
import { BookOpen, Rocket, Mic } from 'lucide-react';
import { useLoading } from '@/hooks/use-loading';
import { AiInterviewDemo } from './ai-interview-demo';
import { ScrollArea } from './ui/scroll-area';

export function LearnModal() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { showLoader } = useLoading();

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
          <ScrollArea className="flex-1">
            <div className="space-y-12 p-2">
                <JavaLearningDemo autoPlay={isDemoOpen} />
                <div className="border-t pt-8">
                     <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-4 mb-3">
                            <Mic className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">AI Interview Simulator</h2>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground mb-6">Practice your skills with an AI-powered mock interview.</p>
                    </div>
                    <AiInterviewDemo autoPlay={isDemoOpen} />
                </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
