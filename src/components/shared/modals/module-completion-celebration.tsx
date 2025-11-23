
'use client';

import React, { useEffect, useState } from 'react';
import { Trophy, Share } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ModuleCompletionCelebrationProps {
  moduleName: string;
  languageSlug: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ModuleCompletionCelebration: React.FC<ModuleCompletionCelebrationProps> = ({
  moduleName,
  languageSlug,
  isOpen,
  onClose,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Increased duration to allow for clicking the button
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300); // Wait for fade-out animation
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!shouldRender) {
    return null;
  }

  const moduleSlug = moduleName.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300',
        isOpen ? 'animate-in fade-in-50' : 'animate-out fade-out-50'
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'bg-card rounded-xl p-8 shadow-2xl transform transition-all duration-300 border-2 border-primary',
          isOpen ? 'scale-100 animate-in zoom-in-75' : 'scale-95'
        )}
      >
        <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold text-foreground text-center">Module Complete!</h2>
        <p className="text-muted-foreground text-lg text-center mt-2">{moduleName}</p>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href={`/certificate/${languageSlug}/${moduleSlug}`}>
              <Share className="mr-2 h-4 w-4" /> View & Share Certificate
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
