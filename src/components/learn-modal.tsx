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
import { BookOpen, Rocket } from 'lucide-react';

export function LearnModal() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

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
            <DropdownMenuLabel>Choose a Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link href="/java/learning-plan">Java</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/spring/learning-plan">Spring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/javascript/learning-plan">JavaScript</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/react/learning-plan">React</Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
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
          <div className="flex-1 overflow-y-auto">
            <JavaLearningDemo autoPlay={isDemoOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}