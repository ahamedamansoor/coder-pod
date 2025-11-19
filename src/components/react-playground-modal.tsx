'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactPlayground } from './react-playground';

interface ReactPlaygroundModalProps {
  children: React.ReactNode;
}

export function ReactPlaygroundModal({ children }: ReactPlaygroundModalProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[95vw] h-[95vh] flex flex-col p-0" showCloseButton={false}>
        <div className="flex-1 overflow-hidden">
          {open && <ReactPlayground />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
