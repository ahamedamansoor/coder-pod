'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Sparkles } from 'lucide-react';
import EventLoopAnimation from './event-loop-animation';

interface AnimationButtonProps {
  concept: 'event-loop' | 'async-await' | 'streams';
  title?: string;
  description?: string;
}

export default function AnimationButton({ 
  concept, 
  title = "See Animation", 
  description = "Visualize this concept with interactive animation"
}: AnimationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAnimationDetails = (conceptType: string) => {
    switch (conceptType) {
      case 'event-loop':
        return {
          icon: <Sparkles className="w-4 h-4" />,
          color: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
          title: "Event Loop Animation",
          description: "Visualize how Node.js Event Loop works"
        };
      case 'async-await':
        return {
          icon: <Play className="w-4 h-4" />,
          color: 'from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
          title: "Async/Await Animation",
          description: "Understand asynchronous programming flow"
        };
      case 'streams':
        return {
          icon: <Play className="w-4 h-4" />,
          color: 'from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
          title: "Streams Animation",
          description: "Learn how Node.js streams work"
        };
      default:
        return {
          icon: <Play className="w-4 h-4" />,
          color: 'from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800',
          title: "Animation",
          description: "Visualize this concept"
        };
    }
  };

  const animationDetails = getAnimationDetails(concept);

  return (
    <>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
        className={`bg-gradient-to-r ${animationDetails.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
        size="sm"
      >
        {animationDetails.icon}
      </Button>
      
      {concept === 'event-loop' && (
        <EventLoopAnimation isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
      
      {/* Placeholder for other animations */}
      {concept !== 'event-loop' && isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-bold mb-4">{animationDetails.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {animationDetails.description}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
              Animation coming soon! This will visualize the {concept} concept with interactive graphics.
            </p>
            <Button onClick={() => setIsModalOpen(false)} variant="outline">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
