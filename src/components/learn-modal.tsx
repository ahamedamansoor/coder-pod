'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { JavaLearningDemo } from './java-learning-demo';

export function LearnModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">How it works</Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>How It Works: An Interactive Tour</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
            <JavaLearningDemo autoPlay={isOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
