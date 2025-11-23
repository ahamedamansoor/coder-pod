'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

export const ScheduleStudyModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule Study Session (Coming Soon)</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">Feature placeholder. Implementation pending.</p>
      </DialogContent>
    </Dialog>
  );
};

