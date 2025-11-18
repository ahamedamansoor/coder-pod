'use client';

import React, { useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCompletionCelebrationProps {
  moduleName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ModuleCompletionCelebration: React.FC<ModuleCompletionCelebrationProps> = ({ moduleName, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in-50",
      )}
      onClick={onClose}
    >
        <div className="bg-card rounded-xl p-8 shadow-2xl transform scale-100 animate-in zoom-in-75 border-2 border-primary">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-foreground text-center">
                Module Complete!
            </h2>
            <p className="text-muted-foreground text-lg text-center mt-2">{moduleName}</p>
        </div>
    </div>
  );
};
