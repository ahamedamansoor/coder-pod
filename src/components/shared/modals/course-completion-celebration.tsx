'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Trophy, Share, Sparkles, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CourseCompletionCelebrationProps {
  languageName: string;
  languageSlug: string;
  isOpen: boolean;
  onClose: () => void;
}

const CONFETTI_COLORS = ['#fde68a', '#f472b6', '#34d399', '#60a5fa', '#f97316', '#a78bfa', '#fb923c'];

export const CourseCompletionCelebration: React.FC<CourseCompletionCelebrationProps> = ({
  languageName,
  languageSlug,
  isOpen,
  onClose,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 80 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * -40}%`,
        delay: `${(index * 0.08) % 1.5}s`,
        duration: `${Math.random() * 1.5 + 2.5}s`,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 20 + 8}px`,
        rotation: `${Math.random() * 360}deg`,
      })),
    []
  );
  
  const fireworks = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 70 + 15}%`,
        top: `${Math.random() * 30 + 10}%`,
        delay: `${index * 0.4}s`,
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${Math.random() * 2 + 1}s`,
      })),
    []
  );

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 8000); // Longer duration for course completion
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/60 via-blue-900/60 to-pink-900/60 backdrop-blur-md transition-opacity duration-300',
        isOpen ? 'animate-in fade-in-50' : 'animate-out fade-out-50'
      )}
      onClick={onClose}
    >
      {/* Confetti */}
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
              transform: `rotate(${piece.rotation})`,
            }}
            className="absolute rounded-sm opacity-0"
          />
        ))}
        
        {/* Fireworks */}
        {fireworks.map((firework) => (
          <span
            key={firework.id}
            style={{
              left: firework.left,
              top: firework.top,
              animationDelay: firework.delay,
            }}
            className="firework absolute w-4 h-4 bg-white rounded-full opacity-0 shadow-[0_0_20px_4px_rgba(248,113,113,0.9)]"
          />
        ))}
        
        {/* Stars */}
        {stars.map((star) => (
          <Sparkles
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
            className="star absolute w-6 h-6 text-yellow-300 opacity-0"
          />
        ))}
      </div>

      {/* Main Card */}
      <div
        className={cn(
          'relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl p-10 shadow-2xl transform transition-all duration-300 border-4 border-yellow-400 max-w-md',
          isOpen ? 'scale-100 animate-in zoom-in-75' : 'scale-95'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
        
        <div className="relative">
          {/* Trophy with Award */}
          <div className="relative mb-6 flex justify-center">
            <Trophy className="w-28 h-28 text-yellow-500 animate-bounce" />
            <Award className="absolute -top-2 -right-2 w-12 h-12 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>

          {/* Text */}
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-center mb-2">
            🎉 Course Complete! 🎉
          </h2>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200 text-center mb-2">
            {languageName}
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 text-center mb-6">
            You've mastered all topics! Amazing achievement! 🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold shadow-lg"
            >
              <Link href={`/certificate/${languageSlug}`}>
                <Share className="mr-2 h-5 w-5" /> 
                View & Share Certificate
              </Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full border-2"
            >
              Continue Learning
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti-drop {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(140vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes firework-burst {
          0% {
            transform: scale(0.2);
            opacity: 0;
          }
          40% {
            opacity: 1;
            transform: scale(1.3);
          }
          100% {
            transform: scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes star-twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }
        
        .firework {
          animation: firework-burst 1.2s ease-out infinite;
        }
        
        .star {
          animation: star-twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
