'use client';
import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactPlayground } from './react-playground';
import { useReactPlayground } from './react-playground-context';

interface ReactPlaygroundModalProps {
  children?: React.ReactNode;
}

export function ReactPlaygroundModal({ children }: ReactPlaygroundModalProps) {
  const { open, setOpen, content } = useReactPlayground();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-w-[95vw] h-[95vh] flex flex-col p-0" showCloseButton={false}>
        <div className="flex-1 overflow-hidden">
          {open && <ReactPlayground defaultCode={content.code} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
