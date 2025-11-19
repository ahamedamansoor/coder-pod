
'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
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
        <DialogClose asChild>
            <Button variant="outline" size="icon" aria-label="Close" className="absolute top-3 right-3 h-8 w-8 z-50">
                <X className="h-4 w-4" />
            </Button>
        </DialogClose>
        <div className="flex-1 overflow-hidden">
          {open && <ReactPlayground />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
