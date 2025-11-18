
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
import { useLoading } from '@/hooks/use-loading';

export function LearnModal() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { showLoader } = useLoading();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a main navigation link, not just any click
    if ((e.currentTarget as HTMLAnchorElement).href) {
      showLoader();
    }
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
          <div className="flex-1 overflow-y-auto">
            <JavaLearningDemo autoPlay={isDemoOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
