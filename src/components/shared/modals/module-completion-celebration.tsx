
'use client';

import React, { useEffect, useMemo, useState } from 'react';
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

const CONFETTI_COLORS = ['#fde68a', '#f472b6', '#34d399', '#60a5fa', '#f97316'];

export const ModuleCompletionCelebration: React.FC<ModuleCompletionCelebrationProps> = ({
  moduleName,
  languageSlug,
  isOpen,
  onClose,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * -30}%`,
        delay: `${(index * 0.12) % 1}s`,
        duration: `${Math.random() * 1 + 2.4}s`,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 18 + 6}px`,
      })),
    []
  );
  const fireworks = useMemo(
    () =>
      Array.from({ length: 4 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 60 + 20}%`,
        top: `${Math.random() * 25 + 5}%`,
        delay: `${index * 0.5}s`,
      })),
    []
  );

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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            style={{
              left: piece.left,
              top: piece.top,
              width: piece.width,
              height: piece.height,
              backgroundColor: piece.color,
              animation: `confetti-drop ${piece.duration} linear ${piece.delay} infinite`,
            }}
            className="absolute rounded-full opacity-0"
          />
        ))}
        {fireworks.map((firework) => (
          <span
            key={firework.id}
            style={{
              left: firework.left,
              top: firework.top,
              animationDelay: firework.delay,
            }}
            className="firework absolute w-3 h-3 bg-white rounded-full opacity-0 shadow-[0_0_12px_2px_rgba(248,113,113,0.8)]"
          />
        ))}
      </div>
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
      <style jsx>{`
        @keyframes confetti-drop {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(140vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes firework-burst {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          40% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            transform: scale(0.6);
            opacity: 0;
          }
        }
        .firework {
          animation: firework-burst 1.4s ease-out infinite;
        }
      `}</style>
    </div>
  );
};
