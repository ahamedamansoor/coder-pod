'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { ReactPlayground } from './react-playground';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface ReactPlaygroundModalProps {
  children: React.ReactNode;
}

export function ReactPlaygroundModal({ children }: ReactPlaygroundModalProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[95vw] h-[95vh] flex flex-col p-0" showCloseButton={false}>
         <DialogHeader className="p-4 border-b flex-row items-center justify-between">
            {/* The title is inside the ReactPlayground component now */}
         </DialogHeader>
        <div className="flex-1 overflow-hidden">
          {open && <ReactPlayground />}
        </div>
         <DialogClose asChild>
            <Button variant="outline" size="icon" aria-label="Close" className="absolute top-4 right-4">
                <X className="h-4 w-4" />
            </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
